import { u as useSWR, s as supabase, m as mutate } from "./index-B08HRm4A.js";
const TEMPLATES_KEY = (orgId) => `package-templates-${orgId}`;
const TEMPLATES_SERVER_KEY = (orgId, params) => `package-templates-server-${orgId}-${JSON.stringify(params)}`;
const CLIENT_PACKAGES_KEY = (clientId) => `client-packages-${clientId}`;
const USAGES_KEY = (clientPackageId) => `package-usages-${clientPackageId}`;
const SPLIT_KEY = (clientPackageId) => `package-split-${clientPackageId}`;
const ALL_PACKAGES_KEY = (orgId, month) => `all-client-packages-${orgId}-${month}`;
const ALL_PACKAGES_SERVER_KEY = (orgId, params) => `all-client-packages-server-${orgId}-${JSON.stringify(params)}`;
const STAFF_PKG_COMMISSIONS_KEY = (staffId, start, end) => `staff-pkg-commissions-${staffId}-${start}-${end}`;
const PKG_DEPOSITS_KEY = (orgId, branchIds, start, end) => `pkg-deposits-${orgId}-${JSON.stringify(branchIds)}-${start}-${end}`;
const templatesOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  keepPreviousData: true
};
function useGetPackageTemplates(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? TEMPLATES_KEY(organizationId) : null,
    () => fetchPackageTemplates(organizationId),
    templatesOptions
  );
  return {
    templates: data || [],
    templatesLoading: isLoading,
    templatesError: error
  };
}
function useGetPackageTemplatesServer(organizationId, params) {
  const { data, error, isLoading } = useSWR(
    organizationId ? TEMPLATES_SERVER_KEY(organizationId, params) : null,
    () => fetchPackageTemplatesServer(organizationId, params)
  );
  return {
    templates: data?.rows || [],
    templatesTotal: data?.total || 0,
    templatesLoading: isLoading,
    templatesError: error
  };
}
function useGetServicesByIds(serviceIds) {
  const key = serviceIds?.length ? `services-by-ids-${serviceIds.slice().sort().join(",")}` : null;
  const { data, error, isLoading } = useSWR(key, async () => {
    const { data: rows, error: err } = await supabase.from("services").select("id, name").in("id", serviceIds);
    if (err) throw err;
    return rows || [];
  });
  return {
    services: data || [],
    servicesLoading: isLoading,
    servicesError: error
  };
}
function useGetClientPackages(clientId, { onlyActive = false } = {}) {
  const cacheKey = clientId ? `${CLIENT_PACKAGES_KEY(clientId)}-${onlyActive}` : null;
  const { data, error, isLoading } = useSWR(
    cacheKey,
    () => fetchClientPackages(clientId, { onlyActive })
  );
  return {
    clientPackages: data || [],
    clientPackagesLoading: isLoading,
    clientPackagesError: error
  };
}
function useGetAllClientPackages({ organizationId, month = null }) {
  const { data, error, isLoading } = useSWR(
    organizationId ? ALL_PACKAGES_KEY(organizationId, month ?? "all") : null,
    () => fetchAllClientPackages({ organizationId, month })
  );
  return {
    allPackages: data || [],
    allPackagesLoading: isLoading,
    allPackagesError: error
  };
}
function useGetAllClientPackagesServer(organizationId, params) {
  const { data, error, isLoading } = useSWR(
    organizationId ? ALL_PACKAGES_SERVER_KEY(organizationId, params) : null,
    () => fetchAllClientPackagesServer(organizationId, params)
  );
  return {
    allPackages: data?.rows || [],
    allPackagesTotal: data?.total || 0,
    allPackagesLoading: isLoading,
    allPackagesError: error
  };
}
function useGetPackageUsages(clientPackageId) {
  const { data, error, isLoading } = useSWR(
    clientPackageId ? USAGES_KEY(clientPackageId) : null,
    () => fetchPackageUsages(clientPackageId)
  );
  return {
    usages: data || [],
    usagesLoading: isLoading,
    usagesError: error
  };
}
function useGetStylistSplit(clientPackageId) {
  const { data, error, isLoading } = useSWR(
    clientPackageId ? SPLIT_KEY(clientPackageId) : null,
    () => fetchStylistSplit(clientPackageId)
  );
  return {
    split: data || [],
    splitLoading: isLoading,
    splitError: error
  };
}
function useGetStaffPackageCommissions(staffId, startDate, endDate) {
  const { data, error, isLoading } = useSWR(
    staffId && startDate && endDate ? STAFF_PKG_COMMISSIONS_KEY(staffId, startDate, endDate) : null,
    () => fetchStaffPackageCommissions(staffId, startDate, endDate)
  );
  return {
    packageUsages: data || [],
    packageUsagesLoading: isLoading,
    packageUsagesError: error
  };
}
function useGetClientPackagesDeposits(organizationId, branchIds, startDate, endDate) {
  const { data, error, isLoading } = useSWR(
    organizationId && branchIds?.length && startDate && endDate ? PKG_DEPOSITS_KEY(organizationId, branchIds, startDate, endDate) : null,
    () => fetchClientPackagesDeposits(organizationId, branchIds, startDate, endDate)
  );
  return {
    packageDeposits: data || [],
    packageDepositsLoading: isLoading,
    packageDepositsError: error
  };
}
async function fetchPackageTemplates(organizationId) {
  const { data, error } = await supabase.from("package_templates").select("*").eq("organization_id", organizationId).order("display_order", { ascending: true });
  if (error) throw error;
  return data || [];
}
async function fetchPackageTemplatesServer(organizationId, { paginationModel, sortModel, filterModel }) {
  const { page, pageSize } = paginationModel;
  const from = page * pageSize;
  const to = from + pageSize - 1;
  let query = supabase.from("package_templates").select("*", { count: "exact" }).eq("organization_id", organizationId);
  if (filterModel?.items?.length) {
    for (const item of filterModel.items) {
      const { field, operator, value } = item;
      if ((value === void 0 || value === null || value === "") && operator !== "isEmpty" && operator !== "isNotEmpty")
        continue;
      switch (operator) {
        case "contains":
          query = query.ilike(field, `%${value}%`);
          break;
        case "equals":
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
        case "startsWith":
          query = query.ilike(field, `${value}%`);
          break;
        case "endsWith":
          query = query.ilike(field, `%${value}`);
          break;
        case "isEmpty":
          query = query.is(field, null);
          break;
        case "isNotEmpty":
          query = query.not(field, "is", null);
          break;
        case "isAnyOf":
          if (Array.isArray(value) && value.length) query = query.in(field, value);
          break;
        case "is":
          if (value === "true" || value === "false") {
            query = query.eq(field, value === "true");
          } else {
            query = query.eq(field, value);
          }
          break;
      }
    }
  }
  if (filterModel?.quickFilterValues?.length) {
    for (const term of filterModel.quickFilterValues) {
      if (term.trim()) {
        query = query.or(`name.ilike.%${term}%,description.ilike.%${term}%`);
      }
    }
  }
  if (sortModel?.length) {
    for (const { field, sort } of sortModel) {
      query = query.order(field, { ascending: sort === "asc" });
    }
  } else {
    query = query.order("display_order", { ascending: true });
  }
  query = query.range(from, to);
  const { data, error, count } = await query;
  if (error) throw error;
  const rows = data || [];
  const allServiceIds = [...new Set(rows.flatMap((r) => r.service_ids || []))];
  if (allServiceIds.length) {
    const { data: svcData } = await supabase.from("services").select("id, name").in("id", allServiceIds);
    const svcMap = Object.fromEntries((svcData || []).map((s) => [s.id, s]));
    rows.forEach((row) => {
      row.services = (row.service_ids || []).map((id) => svcMap[id]).filter(Boolean);
    });
  } else {
    rows.forEach((row) => {
      row.services = [];
    });
  }
  return { rows, total: count || 0 };
}
async function fetchClientPackages(clientId, { onlyActive = false } = {}) {
  let query = supabase.from("client_packages").select(
    `
      *,
      package_templates (id, name, description, service_ids, max_uses_per_month, service_max_uses, price, currency, color),
      branches (id, name)
    `
  ).eq("client_id", clientId).order("valid_month", { ascending: false });
  if (onlyActive) query = query.eq("status", "active");
  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}
async function fetchAllClientPackages({ organizationId, month }) {
  let query = supabase.from("client_packages").select(
    `
      *,
      package_templates (id, name, description, color, service_ids, max_uses_per_month, service_max_uses),
      client_profiles (id, first_name, last_name, email, phone_primary),
      branches (id, name)
    `
  ).eq("organization_id", organizationId).order("valid_month", { ascending: false });
  if (month) {
    query = query.eq("valid_month", month);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}
async function fetchAllClientPackagesServer(organizationId, { month, paginationModel, sortModel, filterModel, clientSearch }) {
  const { page, pageSize } = paginationModel;
  const from = page * pageSize;
  const to = from + pageSize - 1;
  const JOINED_FIELDS = { client: "client_profiles", package: "package_templates" };
  let query = supabase.from("client_packages").select(
    `
      *,
      package_templates (id, name, description, color, max_uses_per_month, service_max_uses, service_ids),
      client_profiles (id, first_name, last_name, email, phone_primary),
      branches (id, name)
    `,
    { count: "exact" }
  ).eq("organization_id", organizationId);
  if (month) {
    query = query.eq("valid_month", month);
  }
  if (clientSearch?.trim()) {
    const term = clientSearch.trim();
    const spaceIndex = term.indexOf(" ");
    let clientQuery = supabase.from("client_profiles").select("id");
    if (spaceIndex !== -1) {
      const firstName = term.slice(0, spaceIndex);
      const lastName = term.slice(spaceIndex + 1);
      clientQuery = clientQuery.ilike("first_name", `%${firstName}%`).ilike("last_name", `%${lastName}%`);
    } else {
      clientQuery = clientQuery.or(`first_name.ilike.%${term}%,last_name.ilike.%${term}%`);
    }
    const { data: matchingClients, error: clientLookupError } = await clientQuery;
    if (clientLookupError) throw clientLookupError;
    if (!matchingClients?.length) return { rows: [], total: 0 };
    query = query.in(
      "client_id",
      matchingClients.map((c) => c.id)
    );
  }
  if (filterModel?.items?.length) {
    for (const item of filterModel.items) {
      const { field, operator, value } = item;
      if (field in JOINED_FIELDS) continue;
      if ((value === void 0 || value === null || value === "") && operator !== "isEmpty" && operator !== "isNotEmpty")
        continue;
      switch (operator) {
        case "contains":
          query = query.ilike(field, `%${value}%`);
          break;
        case "equals":
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
        case "startsWith":
          query = query.ilike(field, `${value}%`);
          break;
        case "endsWith":
          query = query.ilike(field, `%${value}`);
          break;
        case "isEmpty":
          query = query.is(field, null);
          break;
        case "isNotEmpty":
          query = query.not(field, "is", null);
          break;
        case "isAnyOf":
          if (Array.isArray(value) && value.length) query = query.in(field, value);
          break;
        case "is":
          if (value === "true" || value === "false") {
            query = query.eq(field, value === "true");
          } else {
            query = query.eq(field, value);
          }
          break;
      }
    }
  }
  if (filterModel?.quickFilterValues?.length) {
    for (const term of filterModel.quickFilterValues) {
      if (term.trim()) {
        query = query.or(
          `status.ilike.%${term}%,client_profiles.first_name.ilike.%${term}%,client_profiles.last_name.ilike.%${term}%`
        );
      }
    }
  }
  const directSorts = (sortModel || []).filter((s) => !(s.field in JOINED_FIELDS));
  if (directSorts.length) {
    for (const { field, sort } of directSorts) {
      query = query.order(field, { ascending: sort === "asc" });
    }
  } else {
    query = query.order("valid_month", { ascending: false });
  }
  query = query.range(from, to);
  const { data, error, count } = await query;
  if (error) throw error;
  return { rows: data || [], total: count || 0 };
}
async function fetchPackageUsages(clientPackageId) {
  const { data, error } = await supabase.from("package_usages").select(
    `
      *,
      profiles!package_usages_stylist_id_fkey (id, display_name, avatar_url),
      services (id, name, category),
      appointments (id, appointment_number, appointment_date, start_time)
    `
  ).eq("client_package_id", clientPackageId).order("used_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function fetchStylistSplit(clientPackageId) {
  const { data, error } = await supabase.from("package_stylist_split").select("*").eq("client_package_id", clientPackageId).order("visit_count", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function fetchStaffPackageCommissions(staffId, startDate, endDate) {
  const { data, error } = await supabase.from("package_usages").select(
    `
      id,
      used_at,
      service_id,
      service_name,
      client_package_id,
      branch_id,
      notes,
      per_visit_value,
      package_value_updated,
      client_packages!inner (
        id,
        price_paid,
        uses_count,
        valid_month,
        status,
        is_commission_finalized,
        template_id,
        package_templates (id, name, color)
      ),
      services (id, name, service_group)
    `
  ).eq("stylist_id", staffId).gte("used_at", startDate).lte("used_at", endDate).order("used_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function fetchClientPackagesDeposits(organizationId, branchIds, startDate, endDate) {
  let query = supabase.from("client_packages").select(
    `
      id,
      organization_id,
      branch_id,
      client_id,
      template_id,
      valid_month,
      status,
      price_paid,
      currency,
      uses_count,
      max_uses_override,
      is_commission_finalized,
      sale_id,
      notes,
      created_at,
      updated_at,
      package_templates (id, name, color, price, max_uses_per_month),
      client_profiles (id, first_name, last_name, email, phone_primary),
      branches (id, name)
    `
  ).eq("organization_id", organizationId).gte("created_at", startDate).lte("created_at", endDate).order("created_at", { ascending: false });
  if (branchIds?.length) {
    query = query.in("branch_id", branchIds);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}
async function createPackageTemplate(payload) {
  try {
    const { data, error } = await supabase.from("package_templates").insert([payload]).select().single();
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.startsWith("package-templates-"));
    return { data, error: null };
  } catch (error) {
    console.error("[packages] createPackageTemplate:", error);
    return { data: null, error };
  }
}
async function updatePackageTemplate(id, payload) {
  try {
    const { data, error } = await supabase.from("package_templates").update({ ...payload, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id).select().single();
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.startsWith("package-templates-"));
    return { data, error: null };
  } catch (error) {
    console.error("[packages] updatePackageTemplate:", error);
    return { data: null, error };
  }
}
async function reactivatePackageTemplate(id) {
  try {
    const { error } = await supabase.from("package_templates").update({ is_active: true, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id);
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.startsWith("package-templates-"));
    return { error: null };
  } catch (error) {
    console.error("[packages] reactivatePackageTemplate:", error);
    return { error };
  }
}
async function deletePackageTemplate(id) {
  try {
    const { error } = await supabase.from("package_templates").update({ is_active: false, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id);
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.startsWith("package-templates-"));
    return { error: null };
  } catch (error) {
    console.error("[packages] deletePackageTemplate:", error);
    return { error };
  }
}
async function checkClientHasPackage(clientId, templateId, validMonth) {
  const { data, error } = await supabase.from("client_packages").select("id").eq("client_id", clientId).eq("template_id", templateId).eq("valid_month", validMonth).not("status", "in", "(cancelled,expired)").limit(1);
  if (error) throw error;
  return (data?.length ?? 0) > 0;
}
async function createClientPackage(payload) {
  try {
    const d = new Date(payload.validMonth);
    const validMonth = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-01`;
    const row = {
      organization_id: payload.organizationId,
      branch_id: payload.branchId,
      client_id: payload.clientId,
      template_id: payload.templateId,
      valid_month: validMonth,
      price_paid: payload.pricePaid ?? 0,
      currency: payload.currency ?? "USD",
      sale_id: payload.saleId ?? null,
      notes: payload.notes ?? null,
      created_by: payload.createdBy,
      max_uses_override: payload.maxUsesOverride ?? null
    };
    const { data, error } = await supabase.from("client_packages").insert([row]).select().single();
    if (error) throw error;
    await _invalidateClientPackages(payload.clientId, payload.organizationId);
    return { data, error: null };
  } catch (error) {
    console.error("[packages] createClientPackage:", error);
    return { data: null, error };
  }
}
async function cancelClientPackage(id, clientId, organizationId) {
  try {
    const { error } = await supabase.from("client_packages").update({ status: "cancelled", updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id);
    if (error) throw error;
    await _invalidateClientPackages(clientId, organizationId);
    return { error: null };
  } catch (error) {
    console.error("[packages] cancelClientPackage:", error);
    return { error };
  }
}
async function redeemPackage(payload) {
  try {
    const { data: pkg, error: pkgErr } = await supabase.from("client_packages").select("*, package_templates(max_uses_per_month, service_max_uses)").eq("id", payload.clientPackageId).single();
    if (pkgErr) throw pkgErr;
    if (pkg.status !== "active") {
      return { data: null, error: new Error("Package is not active"), limitReached: false };
    }
    const now = /* @__PURE__ */ new Date();
    const monthStart = new Date(pkg.valid_month);
    const monthEnd = new Date(monthStart);
    monthEnd.setMonth(monthEnd.getMonth() + 1);
    if (now < monthStart || now >= monthEnd) {
      return {
        data: null,
        error: new Error("Package is outside its valid month"),
        limitReached: false
      };
    }
    const maxUses = pkg.max_uses_override ?? pkg.package_templates?.max_uses_per_month ?? null;
    if (maxUses !== null && pkg.uses_count >= maxUses) {
      return {
        data: null,
        error: new Error(`Package usage limit of ${maxUses} reached`),
        limitReached: true
      };
    }
    const serviceMaxUses = pkg.package_templates?.service_max_uses;
    const perServiceLimit = serviceMaxUses && payload.serviceId ? serviceMaxUses[payload.serviceId] ?? null : null;
    if (perServiceLimit !== null) {
      const { count: serviceUsageCount, error: countErr } = await supabase.from("package_usages").select("id", { count: "exact", head: true }).eq("client_package_id", payload.clientPackageId).eq("service_id", payload.serviceId);
      if (countErr) throw countErr;
      if (serviceUsageCount >= perServiceLimit) {
        return {
          data: null,
          error: new Error(
            `Per-service limit of ${perServiceLimit} uses/month reached for this service`
          ),
          limitReached: true
        };
      }
    }
    const row = {
      client_package_id: payload.clientPackageId,
      appointment_id: payload.appointmentId ?? null,
      sale_id: payload.saleId ?? null,
      service_id: payload.serviceId ?? null,
      service_name: payload.serviceName ?? null,
      stylist_id: payload.stylistId ?? null,
      stylist_name: payload.stylistName ?? null,
      branch_id: payload.branchId,
      notes: payload.notes ?? null,
      created_by: payload.createdBy
    };
    const { data, error } = await supabase.from("package_usages").insert([row]).select().single();
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.startsWith("package-usages-"));
    await mutate((key) => typeof key === "string" && key.startsWith("package-split-"));
    await mutate((key) => typeof key === "string" && key.startsWith("client-packages-"));
    await mutate((key) => typeof key === "string" && key.startsWith("all-client-packages-"));
    return { data, error: null, limitReached: false };
  } catch (error) {
    console.error("[packages] redeemPackage:", error);
    return { data: null, error, limitReached: false };
  }
}
async function deletePackageUsage(usageId, clientPackageId) {
  try {
    const { error } = await supabase.from("package_usages").delete().eq("id", usageId);
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.startsWith("package-usages-"));
    await mutate((key) => typeof key === "string" && key.startsWith("package-split-"));
    await mutate((key) => typeof key === "string" && key.startsWith("client-packages-"));
    return { error: null };
  } catch (error) {
    console.error("[packages] deletePackageUsage:", error);
    return { error };
  }
}
async function getActivePackageForService({ clientId, serviceId }) {
  try {
    const now = /* @__PURE__ */ new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
    const { data, error } = await supabase.from("client_packages").select("*, package_templates(id, name, service_ids, max_uses_per_month, color)").eq("client_id", clientId).eq("valid_month", currentMonth).eq("status", "active");
    if (error) throw error;
    if (!data || data.length === 0) return { data: null, error: null };
    const match = data.find((pkg) => {
      const ids = pkg.package_templates?.service_ids;
      return Array.isArray(ids) && ids.length > 0 && ids.includes(serviceId);
    });
    return { data: match ?? null, error: null };
  } catch (error) {
    console.error("[packages] getActivePackageForService:", error);
    return { data: null, error };
  }
}
async function getActivePackagesForServicesBatch({ clientId, serviceIds }) {
  if (!clientId || !serviceIds?.length) return { data: {}, error: null };
  try {
    const { data, error } = await supabase.rpc("pos_check_package_coverage", {
      p_client_id: clientId,
      p_service_ids: serviceIds
    });
    if (error) throw error;
    const map = {};
    (data || []).forEach((row) => {
      map[row.service_id] = {
        id: row.client_package_id,
        template_id: row.template_id,
        // How many uses remain on this package (null = unlimited)
        remaining_total: row.remaining_total ?? null,
        // How many uses remain for this specific service (null = no per-service cap)
        remaining_per_service: row.remaining_per_service ?? null,
        package_templates: {
          id: row.template_id,
          name: row.package_name,
          service_ids: row.pkg_service_ids,
          color: row.color,
          service_max_uses: row.service_max_uses ?? null
        }
      };
    });
    return { data: map, error: null };
  } catch (error) {
    console.error("[packages] getActivePackagesForServicesBatch:", error);
    return { data: {}, error };
  }
}
function formatPackageMonth(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleString("en-US", { month: "long", year: "numeric" });
}
function toFirstOfMonth(date = /* @__PURE__ */ new Date()) {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-01`;
}
async function _invalidateClientPackages(clientId, organizationId) {
  await mutate((key) => typeof key === "string" && key.startsWith(`client-packages-${clientId}`));
  await mutate(
    (key) => typeof key === "string" && (key.startsWith(`all-client-packages-${organizationId}`) || key.startsWith(`all-client-packages-server-${organizationId}`))
  );
}
const _COMMISSION_RATE_MAP = {
  services: "services_commission_percent",
  product: "product_commission_percent",
  lash_lifting: "lash_lifting_commission_percent",
  lash_extension: "lash_extension_commission_percent",
  makeup_course: "makeup_course_commission_percent",
  bridal_eng: "bridal_eng_commission_percent"
};
const _SERVICE_GROUP_TO_CATEGORY = {
  brides: "bridal_eng",
  makeup_course: "makeup_course",
  lash_lifting: "lash_lifting",
  lash_extension: "lash_extension"
};
function _categoryFromServiceGroup(serviceGroup) {
  return _SERVICE_GROUP_TO_CATEGORY[serviceGroup] ?? "services";
}
function _packageCommissionRate(compensation, category, serviceId, serviceCommissionMap) {
  if (serviceId && serviceCommissionMap?.[serviceId] !== void 0) {
    return serviceCommissionMap[serviceId];
  }
  if (!compensation) return 0;
  const field = _COMMISSION_RATE_MAP[category] ?? "services_commission_percent";
  return compensation[field] ?? 0;
}
async function finalizeExpiredPackageCommissions({ orgId, branchId }) {
  try {
    let pkgQuery = supabase.from("client_packages").select("id, price_paid, uses_count, valid_month, branch_id, package_templates(name)").eq("organization_id", orgId).eq("is_commission_finalized", false);
    const { data: packages, error: pkgErr } = await pkgQuery;
    if (pkgErr) throw pkgErr;
    if (!packages?.length) return { finalized: 0, error: null };
    let totalFinalized = 0;
    for (const pkg of packages) {
      if (!pkg.uses_count || pkg.uses_count === 0) {
        await supabase.from("client_packages").update({
          is_commission_finalized: true,
          status: "expired",
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", pkg.id);
        totalFinalized += 1;
        continue;
      }
      const perVisitValue = Number(pkg.price_paid) / pkg.uses_count;
      const periodStart = pkg.valid_month;
      const monthEnd = new Date(pkg.valid_month);
      monthEnd.setMonth(monthEnd.getMonth() + 1);
      monthEnd.setDate(0);
      const periodEnd = `${monthEnd.getFullYear()}-${String(monthEnd.getMonth() + 1).padStart(2, "0")}-${String(monthEnd.getDate()).padStart(2, "0")}`;
      const { data: usages, error: usageErr } = await supabase.from("package_usages").select(
        "id, stylist_id, used_at, service_id, branch_id, appointment_id, services(id, service_group)"
      ).eq("client_package_id", pkg.id).not("stylist_id", "is", null);
      if (usageErr) throw usageErr;
      if (!usages?.length) {
        await supabase.from("client_packages").update({
          is_commission_finalized: true,
          status: "expired",
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", pkg.id);
        totalFinalized += 1;
        continue;
      }
      const byStylist = {};
      for (const usage of usages) {
        if (!byStylist[usage.stylist_id]) byStylist[usage.stylist_id] = [];
        byStylist[usage.stylist_id].push(usage);
      }
      const commissionRows = [];
      for (const [stylistId, stylistUsages] of Object.entries(byStylist)) {
        let { data: compRows } = await supabase.from("employee_compensation").select("*").eq("user_id", stylistId).eq("branch_id", pkg.branch_id).eq("is_active", true).order("effective_from", { ascending: false }).limit(1);
        if (!compRows?.length) {
          ({ data: compRows } = await supabase.from("employee_compensation").select("*").eq("user_id", stylistId).eq("is_active", true).order("effective_from", { ascending: false }).limit(1));
        }
        const compensation = compRows?.[0] ?? null;
        const { data: svcCommRows } = await supabase.from("staff_service_commissions").select("service_id, commission_percent").eq("user_id", stylistId);
        const serviceCommissionMap = {};
        for (const row of svcCommRows || []) {
          serviceCommissionMap[row.service_id] = Number(row.commission_percent);
        }
        for (const usage of stylistUsages) {
          const category = _categoryFromServiceGroup(usage.services?.service_group);
          const rate = _packageCommissionRate(
            compensation,
            category,
            usage.service_id,
            serviceCommissionMap
          );
          commissionRows.push({
            user_id: stylistId,
            branch_id: usage.branch_id ?? pkg.branch_id,
            commission_category: "package",
            service_amount: perVisitValue,
            commission_percent: rate,
            commission_amount: perVisitValue * (rate / 100),
            service_date: usage.used_at.split("T")[0],
            period_start: periodStart,
            period_end: periodEnd,
            client_package_id: pkg.id,
            is_paid: false
          });
        }
      }
      await supabase.from("package_usages").update({ per_visit_value: perVisitValue, package_value_updated: true }).eq("client_package_id", pkg.id);
      const appointmentUsages = usages.filter((u) => u.appointment_id);
      if (appointmentUsages.length > 0) {
        const uniqueApptIds = [...new Set(appointmentUsages.map((u) => u.appointment_id))];
        const { data: relatedSales } = await supabase.from("sales").select("id, appointment_id").in("appointment_id", uniqueApptIds);
        if (relatedSales?.length) {
          const saleIdByAppt = Object.fromEntries(
            relatedSales.map((s) => [s.appointment_id, s.id])
          );
          for (const usage of appointmentUsages) {
            const saleId = saleIdByAppt[usage.appointment_id];
            if (!saleId) continue;
            await supabase.from("sale_items").update({
              unit_price: perVisitValue,
              discount_amount: 0,
              line_total: perVisitValue,
              paid_via_package: true,
              package_value_updated: true
            }).eq("sale_id", saleId).eq("service_id", usage.service_id).eq("package_value_updated", false);
          }
        }
      }
      const walkInUsages = usages.filter((u) => !u.appointment_id);
      for (const usage of walkInUsages) {
        const usageDate = usage.used_at.split("T")[0];
        const { data: matchingItems } = await supabase.from("sale_items").select("id").eq("stylist_id", usage.stylist_id).eq("service_id", usage.service_id).eq("package_value_updated", false).not("original_unit_price", "is", null).gte("created_at", `${usageDate}T00:00:00+00:00`).lte("created_at", `${usageDate}T23:59:59+00:00`).limit(1);
        if (!matchingItems?.length) continue;
        await supabase.from("sale_items").update({
          unit_price: perVisitValue,
          discount_amount: 0,
          line_total: perVisitValue,
          paid_via_package: true,
          package_value_updated: true
        }).eq("id", matchingItems[0].id).eq("package_value_updated", false);
      }
      if (commissionRows.length > 0) {
        const { error: insertErr } = await supabase.from("commission_history").insert(commissionRows);
        if (insertErr) throw insertErr;
      }
      await supabase.from("client_packages").update({
        is_commission_finalized: true,
        status: "expired",
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", pkg.id);
      totalFinalized += 1;
    }
    await mutate(
      (key) => typeof key === "string" && key.startsWith("employee-compensation-history-")
    );
    await mutate((key) => typeof key === "string" && key.startsWith("all-client-packages-"));
    await mutate((key) => typeof key === "string" && key.startsWith("staff-pkg-commissions-"));
    return { finalized: totalFinalized, error: null };
  } catch (error) {
    console.error("[packages] finalizeExpiredPackageCommissions:", error);
    return { finalized: 0, error };
  }
}
export {
  cancelClientPackage,
  checkClientHasPackage,
  createClientPackage,
  createPackageTemplate,
  deletePackageTemplate,
  deletePackageUsage,
  finalizeExpiredPackageCommissions,
  formatPackageMonth,
  getActivePackageForService,
  getActivePackagesForServicesBatch,
  reactivatePackageTemplate,
  redeemPackage,
  toFirstOfMonth,
  updatePackageTemplate,
  useGetAllClientPackages,
  useGetAllClientPackagesServer,
  useGetClientPackages,
  useGetClientPackagesDeposits,
  useGetPackageTemplates,
  useGetPackageTemplatesServer,
  useGetPackageUsages,
  useGetServicesByIds,
  useGetStaffPackageCommissions,
  useGetStylistSplit
};
