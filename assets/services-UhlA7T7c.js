import { u as useSWR, r as reactExports, s as supabase, m as mutate } from "./index-B08HRm4A.js";
const STORAGE_KEY = "app-services";
const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  keepPreviousData: true
};
const SERVICE_CACHE_PREFIXES = [
  "branch-services-",
  // useGetBranchServices (POS, calendar, sales)
  "/api/branch-services/",
  // staff-hooks useGetBranchServices
  "service-branch-configs-"
  // useGetServiceBranchConfigs
];
function invalidateServiceCaches() {
  return mutate(
    (key) => typeof key === "string" && (key.includes(STORAGE_KEY) || SERVICE_CACHE_PREFIXES.some((prefix) => key.startsWith(prefix))),
    void 0,
    { revalidate: true }
  );
}
function useRealtimeSubscription(channelName, tableConfigs, mutateFn) {
  const configKey = JSON.stringify(tableConfigs);
  const instanceId = reactExports.useId();
  reactExports.useEffect(() => {
    const configs = JSON.parse(configKey);
    if (!configs.length) return void 0;
    const channel = supabase.channel(`${channelName}-${instanceId}`);
    configs.forEach(({ table, filter }) => {
      channel.on(
        "postgres_changes",
        { event: "*", schema: "public", table, filter },
        () => mutateFn()
      );
    });
    channel.subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [channelName, configKey, instanceId, mutateFn]);
}
function useGetBranchServiceCount(branchId) {
  const cacheKey = branchId ? `branch-services-${branchId}-${JSON.stringify({})}-fetchAll:true` : null;
  const { data } = useSWR(
    cacheKey,
    () => fetchBranchServicesFromSupabase(branchId, {}, true),
    options
  );
  return data?.services?.length ?? 0;
}
function useGetBranchServices(branchId, { filters = {}, fetchAll = false } = {}) {
  const cacheKey = branchId ? `branch-services-${branchId}-${JSON.stringify(filters)}-fetchAll:${fetchAll}` : null;
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateLocal
  } = useSWR(cacheKey, () => fetchBranchServicesFromSupabase(branchId, filters, fetchAll), options);
  const branchTableConfigs = [
    { table: "services" },
    { table: "service_pricing" },
    { table: "branch_services" }
  ];
  useRealtimeSubscription(
    `branch-services-changes-${branchId}`,
    branchId ? branchTableConfigs : [],
    mutateLocal
  );
  const memoizedValue = reactExports.useMemo(
    () => ({
      services: data?.services || [],
      servicesLoading: isLoading,
      servicesError: error,
      servicesValidating: isValidating,
      servicesEmpty: !isLoading && !data?.services?.length
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
function useGetServices({
  page = 0,
  pageSize = 10,
  filters = {},
  branchId = null,
  enabled = true
} = {}) {
  const cacheKey = enabled ? JSON.stringify([STORAGE_KEY, page, pageSize, filters, branchId]) : null;
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateLocal
  } = useSWR(
    cacheKey,
    () => fetchServicesFromSupabase({ page, pageSize, filters, branchId }),
    options
  );
  const tableConfigs = [
    { table: "services" },
    { table: "service_pricing" },
    { table: "branch_services" }
  ];
  useRealtimeSubscription(
    `services-changes-${cacheKey}`,
    enabled ? tableConfigs : [],
    mutateLocal
  );
  const memoizedValue = reactExports.useMemo(
    () => ({
      services: data?.services || [],
      servicesLoading: isLoading,
      servicesError: error,
      servicesValidating: isValidating,
      totalCount: data?.totalCount || 0,
      servicesEmpty: !isLoading && !data?.services?.length
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
function useGetService(serviceId) {
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateLocal
  } = useSWR(
    serviceId ? `${STORAGE_KEY}-${serviceId}` : null,
    () => fetchServiceById(serviceId),
    options
  );
  const tableConfigs = serviceId ? [
    { table: "services", filter: `id=eq.${serviceId}` },
    { table: "service_pricing", filter: `service_id=eq.${serviceId}` },
    { table: "branch_services", filter: `service_id=eq.${serviceId}` }
  ] : [];
  useRealtimeSubscription(`service-changes-${serviceId}`, tableConfigs, mutateLocal);
  const memoizedValue = reactExports.useMemo(
    () => ({
      service: data,
      serviceLoading: isLoading,
      serviceError: error,
      serviceValidating: isValidating,
      serviceEmpty: !isLoading && !data
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
async function fetchServicesFromSupabase({
  page = 0,
  pageSize = 10,
  filters = {},
  branchId = null
}) {
  try {
    if (branchId) {
      return fetchBranchServicesFromSupabase(branchId, { ...filters, page, pageSize });
    }
    const from = page * pageSize;
    const to = from + pageSize - 1;
    const {
      data: { user }
    } = await supabase.auth.getUser();
    if (!user) throw new Error("User not authenticated");
    const { data: branchAccess } = await supabase.from("branch_access").select("branch:branches(id, country:countries(organization_id))").eq("user_id", user.id).limit(1).single();
    const organizationId = branchAccess?.branch?.country?.organization_id;
    if (!organizationId) throw new Error("Organization not found");
    let query = supabase.from("services").select(
      `
        *,
        pricing:service_pricing(
          id,
          branch_id,
          stylist_level,
          price,
          currency,
          is_active,
          valid_from,
          valid_until
        )
      `,
      { count: "exact" }
    ).eq("organization_id", organizationId).is("deleted_at", null);
    if (filters.category) {
      query = query.eq("category", filters.category);
    }
    if (filters.serviceGroup) {
      query = query.eq("service_group", filters.serviceGroup);
    }
    if (filters.isActive !== void 0) {
      query = query.eq("is_active", filters.isActive);
    }
    if (filters.name) {
      query = query.ilike("name", `%${filters.name}%`);
    }
    const FIELD_TO_DB_COL = {
      service_name: "name",
      category: "category",
      service_group: "service_group",
      duration_minutes: "duration_minutes",
      display_order: "display_order",
      description: "description"
    };
    if (filters.filterItems?.length) {
      filters.filterItems.forEach(({ field, operator, value }) => {
        const col = FIELD_TO_DB_COL[field];
        if (!col || value === void 0 || value === null || value === "") return;
        switch (operator) {
          case "contains":
            query = query.ilike(col, `%${value}%`);
            break;
          case "equals":
          case "is":
          case "=":
            query = query.eq(col, value);
            break;
          case "startsWith":
            query = query.ilike(col, `${value}%`);
            break;
          case "endsWith":
            query = query.ilike(col, `%${value}`);
            break;
          case "!=":
          case "not":
            query = query.neq(col, value);
            break;
          case ">":
            query = query.gt(col, value);
            break;
          case "<":
            query = query.lt(col, value);
            break;
          case ">=":
            query = query.gte(col, value);
            break;
          case "<=":
            query = query.lte(col, value);
            break;
          case "isAnyOf":
            if (Array.isArray(value) && value.length) query = query.in(col, value);
            break;
          default:
            break;
        }
      });
    }
    if (filters.orderBy) {
      query = query.order(filters.orderBy, { ascending: filters.order === "asc" });
    } else {
      query = query.order("display_order").order("name");
    }
    query = query.range(from, to);
    const { data, error, count } = await query;
    if (error) throw error;
    const servicesWithPricing = data.map((service) => {
      const pricing = {
        junior: null,
        senior: null,
        prive: null
      };
      service.pricing?.forEach((p) => {
        if (p.is_active && (!p.valid_until || new Date(p.valid_until) > /* @__PURE__ */ new Date())) {
          if (!pricing[p.stylist_level] || p.branch_id !== null) {
            pricing[p.stylist_level] = p;
          }
        }
      });
      return {
        ...service,
        junior_price: pricing.junior?.price || 0,
        senior_price: pricing.senior?.price || 0,
        prive_price: pricing.prive?.price || 0,
        currency: pricing.junior?.currency || "USD"
      };
    });
    const formattedServicesWithPricing = servicesWithPricing.map((service) => ({
      ...service,
      service_name: service.name
    }));
    return {
      services: formattedServicesWithPricing,
      totalCount: count
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
}
async function fetchBranchServicesFromSupabase(branchId, filters = {}, fetchAll = false) {
  try {
    const { data, error } = await supabase.rpc("get_branch_services", {
      p_branch_id: branchId
    });
    if (error) throw error;
    let filteredServices = data || [];
    if (filters.category) {
      filteredServices = filteredServices.filter(
        (service) => service.category === filters.category
      );
    }
    if (filters.serviceGroup) {
      filteredServices = filteredServices.filter(
        (service) => service.service_group === filters.serviceGroup
      );
    }
    if (filters.name) {
      filteredServices = filteredServices.filter(
        (service) => service.service_name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.filterItems?.length) {
      filters.filterItems.forEach(({ field, operator, value }) => {
        if (value === void 0 || value === null || value === "") return;
        filteredServices = filteredServices.filter((service) => {
          const sv = service[field];
          if (sv === void 0 || sv === null) return false;
          switch (operator) {
            case "contains":
              return String(sv).toLowerCase().includes(String(value).toLowerCase());
            case "equals":
            case "is":
            case "=":
              return sv == value;
            case "startsWith":
              return String(sv).toLowerCase().startsWith(String(value).toLowerCase());
            case "endsWith":
              return String(sv).toLowerCase().endsWith(String(value).toLowerCase());
            case "!=":
            case "not":
              return sv != value;
            case ">":
              return Number(sv) > Number(value);
            case "<":
              return Number(sv) < Number(value);
            case ">=":
              return Number(sv) >= Number(value);
            case "<=":
              return Number(sv) <= Number(value);
            case "isAnyOf":
              return Array.isArray(value) && value.includes(sv);
            default:
              return true;
          }
        });
      });
    }
    if (filters.orderBy) {
      filteredServices.sort((a, b) => {
        const aValue = a[filters.orderBy];
        const bValue = b[filters.orderBy];
        if (filters.order === "desc") {
          return aValue < bValue ? 1 : -1;
        }
        return aValue > bValue ? 1 : -1;
      });
    } else {
      filteredServices.sort((a, b) => {
        if (a.display_order !== b.display_order) {
          return a.display_order - b.display_order;
        }
        return a.service_name.localeCompare(b.service_name);
      });
    }
    const paginatedServices = fetchAll ? filteredServices : filteredServices.slice(
      (filters.page || 0) * (filters.pageSize || 10),
      (filters.page || 0) * (filters.pageSize || 10) + (filters.pageSize || 10)
    );
    return {
      services: paginatedServices.map((service) => ({
        ...service,
        id: service.service_id
        // Map service_id to id for DataGrid compatibility
      })),
      totalCount: filteredServices.length
    };
  } catch (error) {
    console.error("Error fetching branch services:", error);
    throw error;
  }
}
async function fetchServiceById(serviceId) {
  try {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    const { data: branches } = await supabase.from("branch_access").select("branch:branches(id, name, slug)").eq("user_id", user.id);
    const userBranches = branches?.map((b) => b.branch) || [];
    const { data, error } = await supabase.from("services").select(
      `
        *,
        pricing:service_pricing(
          id,
          branch_id,
          stylist_level,
          price,
          currency,
          is_active,
          valid_from,
          valid_until,
          branch:branches(id, name, slug)
        ),
        branch_services(
          id,
          branch_id,
          is_available,
          custom_name,
          custom_description,
          custom_duration_minutes,
          branch:branches(id, name, slug)
        )
      `
    ).eq("id", serviceId).single();
    if (error) throw error;
    const pricingByBranch = {};
    userBranches.forEach((branch) => {
      pricingByBranch[branch.id] = {
        branchId: branch.id,
        branchName: branch.name,
        branchSlug: branch.slug,
        junior: null,
        senior: null,
        prive: null,
        customizations: null
      };
    });
    pricingByBranch["default"] = {
      branchId: null,
      branchName: "Organization Default",
      branchSlug: null,
      junior: null,
      senior: null,
      prive: null,
      customizations: null
    };
    data.pricing?.forEach((p) => {
      if (p.is_active && (!p.valid_until || new Date(p.valid_until) > /* @__PURE__ */ new Date())) {
        const key = p.branch_id || "default";
        if (pricingByBranch[key]) {
          pricingByBranch[key][p.stylist_level] = p;
        }
      }
    });
    data.branch_services?.forEach((bs) => {
      if (pricingByBranch[bs.branch_id]) {
        pricingByBranch[bs.branch_id].customizations = bs;
      }
    });
    return {
      ...data,
      pricingByBranch,
      userBranches
    };
  } catch (error) {
    console.error("Error fetching service:", error);
    throw error;
  }
}
async function getServiceList() {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  if (!user) throw new Error("User not authenticated");
  const { data: branchAccess } = await supabase.from("branch_access").select("branch:branches(id, country:countries(organization_id))").eq("user_id", user.id).limit(1).single();
  const organizationId = branchAccess?.branch?.country?.organization_id;
  if (!organizationId) throw new Error("Organization not found");
  const { data, error } = await supabase.from("services").select("id, name").eq("organization_id", organizationId).is("deleted_at", null).order("name");
  if (error) throw error;
  return data;
}
async function createService(serviceData) {
  try {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    const { data: branchAccess } = await supabase.from("branch_access").select("branch:branches(id, country:countries(organization_id))").eq("user_id", user.id).limit(1).single();
    const organizationId = branchAccess?.branch?.country?.organization_id;
    const { data, error } = await supabase.from("services").insert([
      {
        ...serviceData,
        organization_id: organizationId,
        created_by: user.id
      }
    ]).select().single();
    if (error) throw error;
    invalidateServiceCaches();
    return data;
  } catch (error) {
    console.error("Error creating service:", error);
    throw error;
  }
}
async function updateService(serviceId, serviceData) {
  try {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    const { data, error } = await supabase.from("services").update({
      ...serviceData,
      updated_by: user.id
    }).eq("id", serviceId).select().single();
    if (error) throw error;
    invalidateServiceCaches();
    return data;
  } catch (error) {
    console.error("Error updating service:", error);
    throw error;
  }
}
async function deleteService(ids) {
  const idArray = Array.isArray(ids) ? ids : [ids];
  try {
    const { error } = await supabase.from("services").update({ deleted_at: (/* @__PURE__ */ new Date()).toISOString() }).in("id", idArray);
    if (error) throw error;
    invalidateServiceCaches();
  } catch (error) {
    console.error("Error deleting service(s):", error);
    throw error;
  }
}
async function updateServicePricing(serviceId, pricingData) {
  try {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    const pricingRecords = ["junior", "senior", "prive"].filter((level) => pricingData[`${level}Price`] !== void 0).map((level) => ({
      service_id: serviceId,
      branch_id: pricingData.branchId || null,
      stylist_level: level,
      price: pricingData[`${level}Price`],
      currency: pricingData.currency || "USD",
      is_active: true,
      created_by: user.id
    }));
    const levels = pricingRecords.map((r) => r.stylist_level);
    const branchId = pricingData.branchId || null;
    let deleteQuery = supabase.from("service_pricing").delete().eq("service_id", serviceId).in("stylist_level", levels);
    deleteQuery = branchId ? deleteQuery.eq("branch_id", branchId) : deleteQuery.is("branch_id", null);
    const { error: deleteError } = await deleteQuery;
    if (deleteError) throw deleteError;
    const { error } = await supabase.from("service_pricing").insert(pricingRecords);
    if (error) throw error;
    invalidateServiceCaches();
  } catch (error) {
    console.error("Error updating service pricing:", error);
    throw error;
  }
}
async function clearBranchServicePricing(serviceId, branchId) {
  try {
    const { error } = await supabase.from("service_pricing").delete().eq("service_id", serviceId).eq("branch_id", branchId);
    if (error) throw error;
    invalidateServiceCaches();
  } catch (error) {
    console.error("Error clearing branch pricing:", error);
    throw error;
  }
}
async function updateBranchService(serviceId, branchId, customizations) {
  try {
    const { error } = await supabase.from("branch_services").upsert(
      {
        service_id: serviceId,
        branch_id: branchId,
        ...customizations
      },
      {
        onConflict: "service_id,branch_id"
      }
    );
    if (error) throw error;
    invalidateServiceCaches();
  } catch (error) {
    console.error("Error updating branch service:", error);
    throw error;
  }
}
function useGetServiceBranchConfigs(serviceId) {
  const cacheKey = serviceId ? `service-branch-configs-${serviceId}` : null;
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateLocal
  } = useSWR(cacheKey, () => fetchServiceBranchConfigsFromSupabase(serviceId), options);
  const tableConfigs = serviceId ? [
    { table: "service_pricing", filter: `service_id=eq.${serviceId}` },
    { table: "branch_services", filter: `service_id=eq.${serviceId}` }
  ] : [];
  useRealtimeSubscription(`service-branch-configs-changes-${serviceId}`, tableConfigs, mutateLocal);
  const memoizedValue = reactExports.useMemo(
    () => ({
      branchConfigs: data?.branchConfigs || {},
      branchConfigsLoading: isLoading,
      branchConfigsError: error,
      branchConfigsValidating: isValidating,
      branchConfigsEmpty: !isLoading && !data?.branchConfigs
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
async function fetchServiceBranchConfigsFromSupabase(serviceId) {
  try {
    const { data: existingConfigs, error: branchError } = await supabase.from("branch_services").select("*").eq("service_id", serviceId);
    if (branchError) throw branchError;
    const { data: existingPricing, error: pricingError } = await supabase.from("service_pricing").select("*").eq("service_id", serviceId).eq("is_active", true).order("valid_from", { ascending: false });
    if (pricingError) throw pricingError;
    const branchConfigs = {};
    const { data: branches, error: branchesError } = await supabase.from("branches").select("id, name");
    if (branchesError) throw branchesError;
    branches.forEach((branch) => {
      const existing = existingConfigs?.find((config) => config.branch_id === branch.id);
      const branchPricing = existingPricing?.filter((price) => price.branch_id === branch.id);
      branchConfigs[branch.id] = {
        is_available: existing?.is_available ?? true,
        custom_name: existing?.custom_name || "",
        custom_description: existing?.custom_description || "",
        custom_duration_minutes: existing?.custom_duration_minutes || null,
        // Pricing
        junior_price: branchPricing?.find((p) => p.stylist_level === "junior")?.price || void 0,
        senior_price: branchPricing?.find((p) => p.stylist_level === "senior")?.price || void 0,
        prive_price: branchPricing?.find((p) => p.stylist_level === "prive")?.price || void 0,
        currency: branchPricing?.[0]?.currency || "USD"
      };
    });
    return { branchConfigs };
  } catch (error) {
    console.error("Error fetching service branch configs:", error);
    throw error;
  }
}
const SERVICE_CATEGORIES = [
  { value: "haircut", label: "Haircut" },
  { value: "coloring", label: "Coloring" },
  { value: "treatment", label: "Treatment" },
  { value: "styling", label: "Styling" },
  { value: "beard", label: "Beard" },
  { value: "facial", label: "Facial" },
  { value: "massage", label: "Massage" },
  { value: "nails", label: "Nails" },
  { value: "waxing", label: "Waxing" },
  { value: "makeup", label: "Makeup" },
  { value: "other", label: "Other" }
];
const SERVICE_GROUPS = [
  { value: "spa_men", label: "Spa Men" },
  { value: "sun_in", label: "Sun In" },
  { value: "hair_men", label: "Hair Men" },
  { value: "spa_women", label: "Spa Women" },
  { value: "nail_lab", label: "Nail Lab" },
  { value: "brides", label: "Brides" },
  { value: "makeup_lab", label: "Makeup Lab" },
  { value: "princess_services", label: "Princess Services" },
  { value: "hair_women", label: "Hair Women" },
  { value: "other", label: "Other" }
];
const STYLIST_LEVELS = [
  { value: "junior", label: "Junior", color: "info" },
  { value: "senior", label: "Senior", color: "warning" },
  { value: "prive", label: "Prive", color: "success" }
];
async function fetchServiceAuditLogs(serviceId) {
  try {
    if (!serviceId) return [];
    const SELECT_FIELDS = `
      *,
      user:profiles!user_id (
        first_name,
        last_name
      )
    `;
    const serviceLogsPromise = supabase.from("audit_logs").select(SELECT_FIELDS).eq("resource_type", "service").eq("resource_id", serviceId).order("created_at", { ascending: false });
    const pricingUpsertLogsPromise = supabase.from("audit_logs").select(SELECT_FIELDS).eq("resource_type", "service_pricing").in("action", ["create", "update"]).filter("new_data->>service_id", "eq", serviceId).order("created_at", { ascending: false });
    const pricingDeleteLogsPromise = supabase.from("audit_logs").select(SELECT_FIELDS).eq("resource_type", "service_pricing").eq("action", "delete").filter("old_data->>service_id", "eq", serviceId).order("created_at", { ascending: false });
    const [
      { data: serviceLogs, error: serviceError },
      { data: pricingUpsertLogs, error: pricingUpsertError },
      { data: pricingDeleteLogs, error: pricingDeleteError }
    ] = await Promise.all([serviceLogsPromise, pricingUpsertLogsPromise, pricingDeleteLogsPromise]);
    if (serviceError) throw serviceError;
    if (pricingUpsertError) throw pricingUpsertError;
    if (pricingDeleteError) throw pricingDeleteError;
    const combined = [
      ...serviceLogs || [],
      ...pricingUpsertLogs || [],
      ...pricingDeleteLogs || []
    ];
    combined.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return combined;
  } catch (error) {
    console.error("Error fetching service audit logs:", error);
    return [];
  }
}
async function fetchServiceAnalytics(serviceId, branchIds, startDate, endDate) {
  const { data, error } = await supabase.rpc("get_service_analytics", {
    p_service_id: serviceId,
    p_branch_ids: branchIds,
    p_start_date: startDate,
    p_end_date: endDate
  });
  if (error) throw error;
  return data;
}
function useGetServiceAnalytics(serviceId, { branchIds = [], startDate, endDate } = {}) {
  const key = serviceId && startDate && endDate && branchIds.length > 0 ? `${STORAGE_KEY}:analytics:${serviceId}:${startDate}:${endDate}:${branchIds.join(",")}` : null;
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchServiceAnalytics(serviceId, branchIds, startDate, endDate),
    { ...options, keepPreviousData: true }
  );
  return {
    analytics: data || null,
    analyticsLoading: isLoading,
    analyticsError: error
  };
}
function useServiceAuditLogs(serviceId) {
  const cacheKey = serviceId ? `${STORAGE_KEY}:audit:${serviceId}` : null;
  const fetcher = reactExports.useCallback(async () => {
    if (!serviceId) return [];
    return fetchServiceAuditLogs(serviceId);
  }, [serviceId]);
  const {
    data,
    error,
    isLoading,
    mutate: revalidate
  } = useSWR(cacheKey, fetcher, {
    ...options,
    revalidateIfStale: true
  });
  return {
    auditLogs: data || [],
    auditLogsLoading: isLoading,
    auditLogsError: error,
    revalidateAuditLogs: revalidate
  };
}
async function fetchServiceStylistIds(serviceId, branchId) {
  const { data, error } = await supabase.from("stylist_services").select("user_id").eq("service_id", serviceId).eq("branch_id", branchId).eq("is_active", true);
  if (error) throw error;
  return (data || []).map((row) => row.user_id);
}
function useGetServiceStylistIds(serviceId, branchId) {
  const cacheKey = serviceId && branchId ? `service-stylists-${serviceId}-${branchId}` : null;
  const {
    data,
    isLoading,
    error,
    mutate: mutateLocal
  } = useSWR(cacheKey, () => fetchServiceStylistIds(serviceId, branchId), options);
  useRealtimeSubscription(
    `service-stylists-changes-${serviceId}-${branchId}`,
    cacheKey ? [{ table: "stylist_services", filter: `service_id=eq.${serviceId}` }] : [],
    mutateLocal
  );
  return reactExports.useMemo(
    () => ({
      stylistIds: data || [],
      stylistIdsLoading: isLoading,
      stylistIdsError: error,
      stylistIdsMutate: mutateLocal
    }),
    [data, error, isLoading, mutateLocal]
  );
}
async function updateServiceStylists({
  serviceId,
  branchId,
  add = [],
  remove = [],
  assignedBy
}) {
  if (add.length > 0) {
    const rows = add.map((userId) => ({
      user_id: userId,
      branch_id: branchId,
      service_id: serviceId,
      assigned_by: assignedBy,
      is_active: true
    }));
    const { error } = await supabase.from("stylist_services").upsert(rows, { onConflict: "user_id,branch_id,service_id" });
    if (error) throw error;
  }
  if (remove.length > 0) {
    const { error } = await supabase.from("stylist_services").delete().eq("service_id", serviceId).eq("branch_id", branchId).in("user_id", remove);
    if (error) throw error;
  }
  mutate(`service-stylists-${serviceId}-${branchId}`);
  mutate((key) => typeof key === "string" && key.startsWith("/api/stylist-services/"));
}
async function assignAllServicesToStylist({ userId, branchId, assignedBy }) {
  const services = await getServiceList();
  const { data: active, error: activeError } = await supabase.from("services").select("id").in(
    "id",
    services.map((svc) => svc.id)
  ).eq("is_active", true);
  if (activeError) throw activeError;
  if (!active?.length) return 0;
  const rows = active.map((svc) => ({
    user_id: userId,
    branch_id: branchId,
    service_id: svc.id,
    assigned_by: assignedBy,
    is_active: true
  }));
  const { error } = await supabase.from("stylist_services").upsert(rows, { onConflict: "user_id,branch_id,service_id" });
  if (error) throw error;
  mutate((key) => typeof key === "string" && key.startsWith("/api/stylist-services/"));
  mutate((key) => typeof key === "string" && key.startsWith("service-stylists-"));
  return rows.length;
}
export {
  SERVICE_CATEGORIES as S,
  updateServicePricing as a,
  SERVICE_GROUPS as b,
  createService as c,
  useGetServiceBranchConfigs as d,
  updateBranchService as e,
  assignAllServicesToStylist as f,
  STYLIST_LEVELS as g,
  useGetServices as h,
  deleteService as i,
  useGetBranchServices as j,
  useServiceAuditLogs as k,
  clearBranchServicePricing as l,
  useGetServiceStylistIds as m,
  updateServiceStylists as n,
  useGetServiceAnalytics as o,
  useGetService as p,
  useGetBranchServiceCount as q,
  getServiceList as r,
  updateService as u
};
