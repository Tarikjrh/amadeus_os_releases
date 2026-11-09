import { s as supabase, u as useSWR, r as reactExports, m as mutate } from "./index-B08HRm4A.js";
let cached = null;
let inFlight = null;
function resetOrgContext() {
  cached = null;
  inFlight = null;
}
async function getUserOrganizationId() {
  const {
    data: { session }
  } = await supabase.auth.getSession();
  const user = session?.user;
  if (!user) throw new Error("User not authenticated");
  if (cached?.userId === user.id) {
    return { user, organizationId: cached.organizationId };
  }
  if (!inFlight) {
    inFlight = (async () => {
      const { data, error } = await supabase.from("branch_access").select("branch:branches(country:countries(organization_id))").eq("user_id", user.id).limit(1).single();
      if (error) throw new Error("Could not resolve organization");
      const organizationId2 = data?.branch?.country?.organization_id;
      if (!organizationId2) throw new Error("Organization not found");
      cached = { userId: user.id, organizationId: organizationId2 };
      return organizationId2;
    })().finally(() => {
      inFlight = null;
    });
  }
  const organizationId = await inFlight;
  return { user, organizationId };
}
if (supabase?.auth?.onAuthStateChange) {
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT" || cached && session?.user?.id !== cached.userId) {
      resetOrgContext();
    }
  });
}
const SUPPLIERS_KEY = "app-suppliers";
const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  keepPreviousData: true
};
function useRealtimeSubscription(channelName, tableConfigs, mutateFn) {
  const mutateFnRef = reactExports.useRef(mutateFn);
  reactExports.useEffect(() => {
    mutateFnRef.current = mutateFn;
  });
  const configKey = JSON.stringify(tableConfigs);
  reactExports.useEffect(() => {
    const configs = JSON.parse(configKey);
    if (!configs.length) return void 0;
    const channel = supabase.channel(`${channelName}-${crypto.randomUUID()}`);
    configs.forEach(({ table, filter }) => {
      channel.on(
        "postgres_changes",
        { event: "*", schema: "public", table, filter },
        () => mutateFnRef.current()
      );
    });
    channel.subscribe();
    return () => supabase.removeChannel(channel);
  }, [channelName, configKey]);
}
function useGetSuppliers({
  page = 0,
  pageSize = 10,
  sortModel = [],
  filterModel = {}
} = {}) {
  const { items = [], quickFilterValues = [] } = filterModel;
  const cacheKey = [
    SUPPLIERS_KEY,
    page,
    pageSize,
    JSON.stringify(sortModel),
    JSON.stringify(filterModel)
  ];
  const {
    data,
    isLoading,
    error,
    mutate: revalidate
  } = useSWR(
    cacheKey,
    async () => {
      const { organizationId } = await getUserOrganizationId();
      const from = page * pageSize;
      const to = from + pageSize - 1;
      let query = supabase.from("suppliers").select("*", { count: "exact" }).eq("organization_id", organizationId).is("deleted_at", null);
      if (sortModel.length > 0) {
        sortModel.forEach(({ field, sort }) => {
          query = query.order(field, { ascending: sort === "asc" });
        });
      } else {
        query = query.order("name", { ascending: true });
      }
      if (quickFilterValues?.length > 0) {
        const term = quickFilterValues.join(" ");
        query = query.ilike("name", `%${term}%`);
      }
      items.forEach(({ field, operator, value }) => {
        if (value === void 0 || value === null || value === "") return;
        switch (operator) {
          case "contains":
            query = query.ilike(field, `%${value}%`);
            break;
          case "equals":
            query = query.eq(field, value);
            break;
          case "startsWith":
            query = query.ilike(field, `${value}%`);
            break;
          case "endsWith":
            query = query.ilike(field, `%${value}`);
            break;
          case "isEmpty":
            query = query.or(`${field}.is.null,${field}.eq.`);
            break;
          case "isNotEmpty":
            query = query.not(field, "is", null);
            break;
          // boolean column (is_active)
          case "is":
            query = query.eq(field, value === "true" || value === true);
            break;
          // numeric operators
          case "=":
            query = query.eq(field, value);
            break;
          case "!=":
            query = query.neq(field, value);
            break;
          case ">":
            query = query.gt(field, value);
            break;
          case ">=":
            query = query.gte(field, value);
            break;
          case "<":
            query = query.lt(field, value);
            break;
          case "<=":
            query = query.lte(field, value);
            break;
        }
      });
      query = query.range(from, to);
      const { data: rows, error: queryError, count } = await query;
      if (queryError) throw queryError;
      return { rows: rows ?? [], count: count ?? 0 };
    },
    options
  );
  const mutateFn = () => mutate(cacheKey);
  const tableConfigs = reactExports.useMemo(() => [{ table: "suppliers" }], []);
  useRealtimeSubscription("suppliers-channel", tableConfigs, mutateFn);
  return {
    suppliers: data?.rows ?? [],
    suppliersRowCount: data?.count ?? 0,
    suppliersLoading: isLoading,
    suppliersError: error,
    suppliersEmpty: !isLoading && (!data?.rows || data.rows.length === 0),
    revalidateSuppliers: revalidate
  };
}
function useSupplier(supplierId) {
  const cacheKey = supplierId ? `supplier-single-${supplierId}` : null;
  const { data, isLoading, error } = useSWR(
    cacheKey,
    async () => {
      const { data: row, error: queryError } = await supabase.from("suppliers").select("*").eq("id", supplierId).single();
      if (queryError) throw queryError;
      return row;
    },
    options
  );
  return { supplier: data ?? null, supplierLoading: isLoading, supplierError: error };
}
function useGetProductsBySupplier(supplierId, { page = 0, pageSize = 10, filters = {} } = {}) {
  const cacheKey = supplierId ? `supplier-products-${supplierId}-${page}-${pageSize}-${JSON.stringify(filters)}` : null;
  const {
    data,
    isLoading,
    error,
    mutate: revalidate
  } = useSWR(
    cacheKey,
    async () => {
      if (!supplierId) return { products: [], totalCount: 0 };
      const from = page * pageSize;
      const to = from + pageSize - 1;
      const { organizationId } = await getUserOrganizationId();
      let query = supabase.from("products").select(
        `
          id, name, sku, barcode, category,
          retail_price, cost_price, brand,
          is_active,
          inventory:product_inventory(id, branch_id, quantity, available_quantity, branch:branches(id,name))
        `,
        { count: "exact" }
      ).eq("organization_id", organizationId).eq("supplier_id", supplierId).is("deleted_at", null).order("name").range(from, to);
      if (filters.name) query = query.ilike("name", `%${filters.name}%`);
      if (filters.sku) query = query.ilike("sku", `%${filters.sku}%`);
      const { data: rows, error: queryError, count } = await query;
      if (queryError) throw queryError;
      const products = (rows ?? []).map((product) => {
        const totalAvailable = (product.inventory ?? []).reduce(
          (s, inv) => s + (inv.available_quantity ?? 0),
          0
        );
        const totalQuantity = (product.inventory ?? []).reduce(
          (s, inv) => s + (inv.quantity ?? 0),
          0
        );
        return { ...product, totalAvailable, totalQuantity, inventoryLocations: product.inventory };
      });
      return { products, totalCount: count || 0 };
    },
    options
  );
  const mutateFn = () => mutate(cacheKey);
  const tableConfigs = reactExports.useMemo(
    () => supplierId ? [
      { table: "products", filter: `supplier_id=eq.${supplierId}` },
      { table: "product_inventory" }
    ] : [],
    [supplierId]
  );
  useRealtimeSubscription(`supplier-products-${supplierId}`, tableConfigs, mutateFn);
  return {
    products: data?.products || [],
    productsLoading: isLoading,
    productsError: error,
    totalCount: data?.totalCount || 0,
    productsEmpty: !isLoading && !data?.products?.length,
    revalidateProducts: revalidate
  };
}
function useSupplierStats(supplierId) {
  const cacheKey = supplierId ? `supplier-stats-${supplierId}` : null;
  const { data, isLoading, error } = useSWR(
    cacheKey,
    async () => {
      const { data: result, error: rpcError } = await supabase.rpc("get_supplier_stats", {
        p_supplier_id: supplierId
      });
      if (rpcError) throw rpcError;
      return result;
    },
    options
  );
  return {
    stats: data ?? null,
    statsLoading: isLoading,
    statsError: error
  };
}
function useSupplierAutocomplete(searchQuery, limit = 5) {
  const cacheKey = reactExports.useMemo(
    () => ["supplier-autocomplete", searchQuery ?? "", limit],
    [searchQuery, limit]
  );
  const { data, isLoading, error } = useSWR(
    cacheKey,
    async () => {
      const { organizationId } = await getUserOrganizationId();
      let query = supabase.from("suppliers").select("id, name, contact_name, email, phone, is_active").eq("organization_id", organizationId).is("deleted_at", null).eq("is_active", true).order("name", { ascending: true }).limit(limit);
      if (searchQuery) {
        query = query.ilike("name", `%${searchQuery}%`);
      }
      const { data: rows, error: queryError } = await query;
      if (queryError) throw queryError;
      return rows ?? [];
    },
    { ...options, dedupingInterval: 300 }
  );
  return {
    suppliers: data ?? [],
    suppliersLoading: isLoading,
    suppliersError: error
  };
}
async function createSupplier(supplierData) {
  const { organizationId } = await getUserOrganizationId();
  const { data, error } = await supabase.from("suppliers").insert({
    organization_id: organizationId,
    name: supplierData.name,
    contact_name: supplierData.contact_name ?? null,
    email: supplierData.email ?? null,
    phone: supplierData.phone ?? null,
    address: supplierData.address ?? null,
    city: supplierData.city ?? null,
    country: supplierData.country ?? null,
    website: supplierData.website ?? null,
    tax_number: supplierData.tax_number ?? null,
    payment_terms: supplierData.payment_terms ?? null,
    currency: supplierData.currency ?? "USD",
    notes: supplierData.notes ?? null,
    is_active: supplierData.is_active ?? true
  }).select().single();
  if (error) throw error;
  return data;
}
async function updateSupplier(supplierId, supplierData) {
  const { data, error } = await supabase.from("suppliers").update({
    name: supplierData.name,
    contact_name: supplierData.contact_name ?? null,
    email: supplierData.email ?? null,
    phone: supplierData.phone ?? null,
    address: supplierData.address ?? null,
    city: supplierData.city ?? null,
    country: supplierData.country ?? null,
    website: supplierData.website ?? null,
    tax_number: supplierData.tax_number ?? null,
    payment_terms: supplierData.payment_terms ?? null,
    currency: supplierData.currency ?? "USD",
    notes: supplierData.notes ?? null,
    is_active: supplierData.is_active ?? true
  }).eq("id", supplierId).select().single();
  if (error) throw error;
  return data;
}
async function deleteSupplier(supplierId) {
  const { error } = await supabase.from("suppliers").update({ deleted_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", supplierId);
  if (error) throw error;
}
async function deleteMultipleSuppliers(supplierIds) {
  const { error } = await supabase.from("suppliers").update({ deleted_at: (/* @__PURE__ */ new Date()).toISOString() }).in("id", supplierIds);
  if (error) throw error;
}
async function toggleSupplierStatus(supplierId, isActive) {
  const { data, error } = await supabase.from("suppliers").update({ is_active: isActive }).eq("id", supplierId).select().single();
  if (error) throw error;
  return data;
}
export {
  updateSupplier as a,
  useGetSuppliers as b,
  createSupplier as c,
  useSupplier as d,
  useSupplierStats as e,
  useGetProductsBySupplier as f,
  deleteSupplier as g,
  deleteMultipleSuppliers as h,
  toggleSupplierStatus as t,
  useSupplierAutocomplete as u
};
