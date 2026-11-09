import { u as useSWR, r as reactExports, s as supabase, m as mutate } from "./index-B08HRm4A.js";
const ADDONS_KEY = (params) => JSON.stringify(["addons", params]);
const BRANCH_ADDONS_KEY = (branchId, filters, fetchAll) => `branch-addons-${branchId}-${JSON.stringify(filters)}-fetchAll:${fetchAll}`;
const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  keepPreviousData: true
};
function useRealtimeSubscription(channelName, enabled, mutateFn) {
  reactExports.useEffect(() => {
    if (!enabled) return void 0;
    const channel = supabase.channel(channelName).on("postgres_changes", { event: "*", schema: "public", table: "addons" }, () => mutateFn()).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [channelName, enabled, mutateFn]);
}
async function fetchAddons({ page = 0, pageSize = 25, filters = {}, branchId = null } = {}) {
  let query = supabase.from("addons").select("*", { count: "exact" });
  if (branchId) query = query.eq("branch_id", branchId);
  if (filters.name) query = query.ilike("name", `%${filters.name}%`);
  if (filters.category && filters.category !== "all")
    query = query.eq("category", filters.category);
  if (filters.is_active !== void 0) query = query.eq("is_active", filters.is_active);
  const from = page * pageSize;
  const to = from + pageSize - 1;
  query = query.range(from, to).order("category").order("name");
  const { data, error, count } = await query;
  if (error) throw error;
  return { addons: data || [], totalCount: count || 0 };
}
async function fetchBranchAddons(branchId, filters = {}, fetchAll = false) {
  let query = supabase.from("addons").select("*").eq("is_active", true);
  if (branchId) {
    query = query.or(`branch_id.eq.${branchId},branch_id.is.null`);
  } else {
    query = query.is("branch_id", null);
  }
  if (filters.name) query = query.ilike("name", `%${filters.name}%`);
  if (filters.category && filters.category !== "all")
    query = query.eq("category", filters.category);
  if (!fetchAll) query = query.limit(100);
  query = query.order("category").order("name");
  const { data, error } = await query;
  if (error) throw error;
  return { addons: data || [] };
}
function useGetAddons({ page = 0, pageSize = 25, filters = {}, branchId = null } = {}) {
  const cacheKey = ADDONS_KEY({ page, pageSize, filters, branchId });
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateLocal
  } = useSWR(cacheKey, () => fetchAddons({ page, pageSize, filters, branchId }), options);
  useRealtimeSubscription(`addons-changes-${cacheKey}`, true, mutateLocal);
  return reactExports.useMemo(
    () => ({
      addons: data?.addons || [],
      addonsLoading: isLoading,
      addonsError: error,
      addonsValidating: isValidating,
      totalCount: data?.totalCount || 0,
      addonsEmpty: !isLoading && !data?.addons?.length
    }),
    [data, error, isLoading, isValidating]
  );
}
function useGetBranchAddons(branchId, { filters = {}, fetchAll = false } = {}) {
  const cacheKey = branchId ? BRANCH_ADDONS_KEY(branchId, filters, fetchAll) : null;
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateLocal
  } = useSWR(cacheKey, () => fetchBranchAddons(branchId, filters, fetchAll), options);
  useRealtimeSubscription(`branch-addons-changes-${branchId}`, !!branchId, mutateLocal);
  return reactExports.useMemo(
    () => ({
      addons: data?.addons || [],
      addonsLoading: isLoading,
      addonsError: error,
      addonsValidating: isValidating,
      addonsEmpty: !isLoading && !data?.addons?.length
    }),
    [data, error, isLoading, isValidating]
  );
}
function useGetBranchAddonCount(branchId) {
  const cacheKey = branchId ? BRANCH_ADDONS_KEY(branchId, {}, true) : null;
  const { data } = useSWR(cacheKey, () => fetchBranchAddons(branchId, {}, true), options);
  return data?.addons?.length ?? 0;
}
async function createAddon(data) {
  const { data: created, error } = await supabase.from("addons").insert(data).select().single();
  if (error) throw error;
  mutate((key) => typeof key === "string" && key.includes("addons"), void 0, {
    revalidate: true
  });
  return created;
}
async function updateAddon(id, data) {
  const { data: updated, error } = await supabase.from("addons").update(data).eq("id", id).select().single();
  if (error) throw error;
  mutate((key) => typeof key === "string" && key.includes("addons"), void 0, {
    revalidate: true
  });
  return updated;
}
async function deleteAddon(id) {
  const { error } = await supabase.from("addons").delete().eq("id", id);
  if (error) throw error;
  mutate((key) => typeof key === "string" && key.includes("addons"), void 0, {
    revalidate: true
  });
}
async function deleteMultipleAddons(ids) {
  const { error } = await supabase.from("addons").delete().in("id", ids);
  if (error) throw error;
  mutate((key) => typeof key === "string" && key.includes("addons"), void 0, {
    revalidate: true
  });
}
const ADDON_CATEGORY_OPTIONS = [
  { value: "Tips", label: "Tips" },
  { value: "Treatment Extras", label: "Treatment Extras" },
  { value: "Retail", label: "Retail" },
  { value: "Miscellaneous", label: "Miscellaneous" }
];
const ADDON_CATEGORY_VALUES = ADDON_CATEGORY_OPTIONS.map((o) => o.value);
const ADDON_DEFAULT_VALUES = {
  name: "",
  category: "",
  price: "",
  is_custom_price: false,
  description: "",
  is_active: true
};
export {
  ADDON_CATEGORY_VALUES as A,
  ADDON_DEFAULT_VALUES as a,
  ADDON_CATEGORY_OPTIONS as b,
  createAddon as c,
  useGetAddons as d,
  deleteAddon as e,
  deleteMultipleAddons as f,
  useGetBranchAddons as g,
  useGetBranchAddonCount as h,
  updateAddon as u
};
