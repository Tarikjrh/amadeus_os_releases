import { u as useSWR, r as reactExports, s as supabase, m as mutate } from "./index-B08HRm4A.js";
function useDebouncedValue(value, delay = 350) {
  const [debounced, setDebounced] = reactExports.useState(value);
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timerRef.current);
  }, [value, delay]);
  return debounced;
}
const CACHE_KEY_PREFIX = "clients";
const swrOptions = {
  revalidateOnFocus: true,
  // Refetch when user returns to tab
  revalidateOnReconnect: true,
  // Refetch when internet reconnects
  dedupingInterval: 2e3,
  // Dedupe requests within 2 seconds
  keepPreviousData: true,
  // Keep old data while fetching new
  shouldRetryOnError: true,
  // Auto-retry on error
  errorRetryCount: 3
  // Max retry attempts
};
function buildCacheKey(params) {
  const {
    page,
    pageSize,
    searchQuery,
    branchFilter,
    statusFilter,
    advancedFilters,
    sortField,
    sortOrder
  } = params;
  return JSON.stringify([
    CACHE_KEY_PREFIX,
    page,
    pageSize,
    searchQuery,
    branchFilter,
    statusFilter,
    advancedFilters,
    sortField,
    sortOrder
  ]);
}
function normalizePhoneTerm(value) {
  const term = value?.trim();
  if (!term) return null;
  if (!/^[\d\s()+-]+$/.test(term)) return value;
  return term.replace(/^0+(?=\d)/, "");
}
async function fetchClients(params) {
  const {
    page,
    pageSize,
    searchQuery,
    branchFilter,
    statusFilter,
    advancedFilters,
    sortField,
    sortOrder
  } = params;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9e4);
    const { data, error } = await supabase.rpc(
      "search_clients",
      {
        p_search_query: normalizePhoneTerm(searchQuery),
        p_branch_id: branchFilter && branchFilter !== "all" ? branchFilter : null,
        p_status: advancedFilters?.status && advancedFilters.status !== "all" ? advancedFilters.status : null,
        p_sort_field: sortField || "first_name",
        p_sort_order: sortOrder || "asc",
        p_page: page,
        p_page_size: pageSize,
        // Advanced filters
        p_total_visits_min: advancedFilters?.totalVisitsMin || null,
        p_total_visits_max: advancedFilters?.totalVisitsMax || null,
        p_total_spent_min: advancedFilters?.totalSpentMin || null,
        p_total_spent_max: advancedFilters?.totalSpentMax || null,
        p_created_after: advancedFilters?.createdAfter || null,
        p_created_before: advancedFilters?.createdBefore || null,
        p_dob_after: advancedFilters?.dobAfter || null,
        p_dob_before: advancedFilters?.dobBefore || null,
        p_last_visit_after: advancedFilters?.lastVisitAfter || null,
        p_last_visit_before: advancedFilters?.lastVisitBefore || null,
        p_first_name: advancedFilters?.firstName || null,
        p_last_name: advancedFilters?.lastName || null,
        p_email: advancedFilters?.email || null,
        p_phone_number: normalizePhoneTerm(advancedFilters?.phoneNumber),
        p_gender: advancedFilters?.gender || null,
        p_loyalty_tier_id: advancedFilters?.loyaltyTierId || null
      },
      {
        signal: controller.signal
        // Pass abort signal for timeout
      }
    );
    clearTimeout(timeoutId);
    if (error) throw error;
    const totalCount = data && data.length > 0 ? data[0].total_count : 0;
    return {
      clients: data || [],
      totalCount
    };
  } catch (err) {
    console.error("Error fetching clients:", err);
    throw err;
  }
}
function useClientList() {
  const [page, setPage] = reactExports.useState(0);
  const [pageSize, setPageSize] = reactExports.useState(25);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [branchFilter, setBranchFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [advancedFilters, setAdvancedFilters] = reactExports.useState({});
  const [sortField, setSortField] = reactExports.useState("first_name");
  const [sortOrder, setSortOrder] = reactExports.useState("asc");
  const debouncedSearchQuery = useDebouncedValue(searchQuery);
  const params = reactExports.useMemo(
    () => ({
      page,
      pageSize,
      searchQuery: debouncedSearchQuery,
      branchFilter,
      statusFilter,
      advancedFilters,
      sortField,
      sortOrder
    }),
    [
      page,
      pageSize,
      debouncedSearchQuery,
      branchFilter,
      statusFilter,
      advancedFilters,
      sortField,
      sortOrder
    ]
  );
  const cacheKey = reactExports.useMemo(() => buildCacheKey(params), [params]);
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: revalidate
  } = useSWR(cacheKey, () => fetchClients(params), swrOptions);
  reactExports.useEffect(() => {
    const channelName = `client_profiles_changes_${Math.random().toString(36).slice(2)}`;
    const channel = supabase.channel(channelName).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "client_profiles"
      },
      (payload) => {
        mutate((key) => typeof key === "string" && key.includes(CACHE_KEY_PREFIX), void 0, {
          revalidate: true
        });
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
  const handlePageChange = reactExports.useCallback((newPage) => {
    setPage(newPage);
  }, []);
  const handlePageSizeChange = reactExports.useCallback((newPageSize) => {
    setPageSize(newPageSize);
    setPage(0);
  }, []);
  const handleSearchChange = reactExports.useCallback((query) => {
    setSearchQuery(query);
    setPage(0);
  }, []);
  const handleBranchFilterChange = reactExports.useCallback((branchId) => {
    setBranchFilter(branchId);
    setPage(0);
  }, []);
  const handleStatusFilterChange = reactExports.useCallback((status) => {
    setStatusFilter(status);
    setPage(0);
  }, []);
  const handleAdvancedFiltersChange = reactExports.useCallback((filters) => {
    setAdvancedFilters(filters);
    setPage(0);
  }, []);
  const resetFilters = reactExports.useCallback(() => {
    setSearchQuery("");
    setBranchFilter("all");
    setStatusFilter("all");
    setAdvancedFilters({});
    setPage(0);
  }, []);
  const handleSortChange = reactExports.useCallback((field, order) => {
    setSortField(field);
    setSortOrder(order);
    setPage(0);
  }, []);
  const deleteClient = reactExports.useCallback(
    async (clientId) => {
      try {
        await revalidate(
          (currentData) => {
            if (!currentData) return currentData;
            return {
              ...currentData,
              clients: currentData.clients.filter((client) => client.id !== clientId),
              totalCount: currentData.totalCount - 1
            };
          },
          { revalidate: false }
          // Don't revalidate yet
        );
        const { error: deleteError } = await supabase.from("client_profiles").update({ deleted_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", clientId);
        if (deleteError) throw deleteError;
        await revalidate();
        return { success: true };
      } catch (err) {
        console.error("Error deleting client:", err);
        await revalidate();
        return { success: false, error: err };
      }
    },
    [revalidate]
  );
  const deleteMultipleClients = reactExports.useCallback(
    async (clientIds) => {
      try {
        await revalidate(
          (currentData) => {
            if (!currentData) return currentData;
            return {
              ...currentData,
              clients: currentData.clients.filter((client) => !clientIds.includes(client.id)),
              totalCount: currentData.totalCount - clientIds.length
            };
          },
          { revalidate: false }
        );
        const { error: deleteError } = await supabase.from("client_profiles").update({ deleted_at: (/* @__PURE__ */ new Date()).toISOString() }).in("id", clientIds);
        if (deleteError) throw deleteError;
        await revalidate();
        return { success: true };
      } catch (err) {
        console.error("Error deleting clients:", err);
        await revalidate();
        return { success: false, error: err };
      }
    },
    [revalidate]
  );
  return reactExports.useMemo(
    () => ({
      // Data
      clients: data?.clients || [],
      loading: isLoading,
      validating: isValidating,
      error,
      totalCount: data?.totalCount || 0,
      // Pagination
      page,
      pageSize,
      handlePageChange,
      handlePageSizeChange,
      // Search
      searchQuery,
      handleSearchChange,
      // Filters
      branchFilter,
      statusFilter,
      advancedFilters,
      handleBranchFilterChange,
      handleStatusFilterChange,
      handleAdvancedFiltersChange,
      resetFilters,
      // Sorting
      sortField,
      sortOrder,
      handleSortChange,
      // Actions
      deleteClient,
      deleteMultipleClients,
      refetch: revalidate
    }),
    [
      data,
      isLoading,
      isValidating,
      error,
      page,
      pageSize,
      handlePageChange,
      handlePageSizeChange,
      searchQuery,
      handleSearchChange,
      branchFilter,
      statusFilter,
      advancedFilters,
      handleBranchFilterChange,
      handleStatusFilterChange,
      handleAdvancedFiltersChange,
      resetFilters,
      sortField,
      sortOrder,
      handleSortChange,
      deleteClient,
      deleteMultipleClients,
      revalidate
    ]
  );
}
function trimClientNames(data) {
  const result = { ...data };
  if (typeof result.first_name === "string") result.first_name = result.first_name.trim();
  if (typeof result.last_name === "string") result.last_name = result.last_name.trim();
  if (typeof result.preferred_name === "string")
    result.preferred_name = result.preferred_name.trim() || null;
  if (typeof result.email === "string") result.email = result.email.trim() || null;
  return result;
}
async function createClient(clientData) {
  try {
    const { data: authUser } = await supabase.auth.getUser();
    const { data, error } = await supabase.from("client_profiles").insert({
      ...trimClientNames(clientData),
      created_by: authUser?.user?.id,
      updated_by: authUser?.user?.id
    }).select().single();
    if (error) throw error;
    mutate((key) => typeof key === "string" && key.includes(CACHE_KEY_PREFIX), void 0, {
      revalidate: true
    });
    return { success: true, data };
  } catch (err) {
    console.error("Error creating client:", err);
    return { success: false, error: err };
  }
}
async function updateClient(clientId, clientData) {
  try {
    const { data: authUser } = await supabase.auth.getUser();
    const { data, error } = await supabase.from("client_profiles").update({
      ...trimClientNames(clientData),
      updated_by: authUser?.user?.id
    }).eq("id", clientId).select().single();
    if (error) throw error;
    mutate((key) => typeof key === "string" && key.includes(CACHE_KEY_PREFIX), void 0, {
      revalidate: true
    });
    return { success: true, data };
  } catch (err) {
    console.error("Error updating client:", err);
    return { success: false, error: err };
  }
}
async function getClientById(clientId) {
  try {
    const { data, error } = await supabase.from("client_profiles").select(
      `
        *,
        branch:branches(
          id,
          name,
          slug
        )
      `
    ).eq("id", clientId).is("deleted_at", null).single();
    if (error) throw error;
    let referred_by = null;
    if (data?.referred_by_client_id) {
      const { data: referrer } = await supabase.from("client_profiles").select("id, first_name, last_name").eq("id", data.referred_by_client_id).maybeSingle();
      referred_by = referrer ?? null;
    }
    let guardian = null;
    if (data?.guardian_client_id) {
      const { data: guardianData } = await supabase.from("client_profiles").select("id, first_name, last_name, email, phone_primary").eq("id", data.guardian_client_id).maybeSingle();
      guardian = guardianData ?? null;
    }
    return { success: true, data: { ...data, referred_by, guardian } };
  } catch (err) {
    console.error("Error fetching client:", err);
    return { success: false, error: err };
  }
}
async function getClientStatistics(clientId) {
  try {
    const { data, error } = await supabase.rpc("get_client_statistics", {
      p_client_id: clientId
    });
    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    console.error("Error fetching client statistics:", err);
    return { success: false, error: err };
  }
}
function useClient(clientId) {
  const cacheKey = clientId ? `client-${clientId}` : null;
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: revalidate
  } = useSWR(cacheKey, () => getClientById(clientId), {
    ...swrOptions,
    revalidateOnMount: true,
    refreshInterval: 6e4
    // Refresh every minute
  });
  const memoizedValue = reactExports.useMemo(
    () => ({
      client: data?.data || null,
      clientLoading: isLoading,
      clientError: error,
      clientValidating: isValidating,
      clientEmpty: !isLoading && !data?.data,
      refreshClient: revalidate
    }),
    [data, error, isLoading, isValidating, revalidate]
  );
  return memoizedValue;
}
function useClientStatistics(clientId) {
  const cacheKey = clientId ? `client-statistics-${clientId}` : null;
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: revalidate
  } = useSWR(cacheKey, () => getClientStatistics(clientId), {
    ...swrOptions,
    revalidateOnMount: true,
    refreshInterval: 3e5
    // Refresh every 5 minutes
  });
  const memoizedValue = reactExports.useMemo(
    () => ({
      statistics: data?.data || null,
      statisticsLoading: isLoading,
      statisticsError: error,
      statisticsValidating: isValidating,
      statisticsEmpty: !isLoading && !data?.data,
      refreshStatistics: revalidate
    }),
    [data, error, isLoading, isValidating, revalidate]
  );
  return memoizedValue;
}
async function getClientAppointments(clientId, options = {}) {
  try {
    const {
      includeCompleted = true,
      page = 0,
      pageSize = 25,
      status = null,
      startDate = null,
      endDate = null,
      stylistId = null
    } = options;
    const from = page * pageSize;
    const to = from + pageSize - 1;
    let query = supabase.from("appointments").select(
      `
        id,
        appointment_number,
        branch_id,
        appointment_date,
        start_time,
        end_time,
        status,
        total_amount,
        services:appointment_services (
          id,
          service_id,
          service_name,
          service_category,
          duration_minutes,
          price,
          stylist_level,
          display_order,
          stylist:profiles!performed_by (
            id,
            first_name,
            last_name,
            email,
            display_name
          )
        ),
        branch:branches (
          id,
          name,
          slug
        )
      `,
      { count: "exact" }
    ).eq("client_id", clientId);
    if (status) {
      query = query.eq("status", status);
    } else if (!includeCompleted) {
      query = query.not("status", "in", "(completed,cancelled,no_show)");
    }
    if (startDate) {
      query = query.gte("appointment_date", startDate);
    }
    if (endDate) {
      query = query.lte("appointment_date", endDate);
    }
    if (stylistId) {
      query = query.eq("stylist_id", stylistId);
    }
    query = query.order("appointment_date", { ascending: false }).order("start_time", { ascending: false }).range(from, to);
    const { data, error, count } = await query;
    if (error) throw error;
    return {
      success: true,
      data: data || [],
      count: count || 0
    };
  } catch (err) {
    console.error("Error fetching client appointments:", err);
    return { success: false, data: [], count: 0, error: err };
  }
}
function useClientAppointments(clientId, options = {}) {
  const cacheKey = clientId ? `client-appointments-${clientId}-${JSON.stringify(options)}` : null;
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: revalidate
  } = useSWR(cacheKey, () => getClientAppointments(clientId, options), {
    ...swrOptions,
    revalidateOnMount: true,
    refreshInterval: 3e4
    // Refresh every 30 seconds for appointment data
  });
  const memoizedValue = reactExports.useMemo(
    () => ({
      appointments: data?.data || [],
      appointmentsCount: data?.count || 0,
      isLoading,
      appointmentsError: error,
      appointmentsValidating: isValidating,
      appointmentsEmpty: !isLoading && !data?.data?.length,
      refreshAppointments: revalidate
    }),
    [data, error, isLoading, isValidating, revalidate]
  );
  return memoizedValue;
}
async function fetchClientAuditLogs(clientId, { page = 0, pageSize = 10 } = {}) {
  try {
    if (!clientId) return { data: [], count: 0 };
    const from = page * pageSize;
    const to = from + pageSize - 1;
    const { data, error, count } = await supabase.from("audit_logs").select(
      `
        *,
        user:profiles!user_id (
          first_name,
          last_name
        )
      `,
      { count: "exact" }
    ).eq("resource_type", "client").eq("resource_id", clientId).order("created_at", { ascending: false }).range(from, to);
    if (error) throw error;
    return { data: data || [], count: count || 0 };
  } catch (error) {
    console.error("Error fetching client audit logs:", error);
    return { data: [], count: 0 };
  }
}
function useClientAuditLogs(clientId, { page = 0, pageSize = 10 } = {}) {
  const cacheKey = clientId ? `${CACHE_KEY_PREFIX}:audit:${clientId}:${page}:${pageSize}` : null;
  const fetcher = reactExports.useCallback(async () => {
    if (!clientId) return { data: [], count: 0 };
    return await fetchClientAuditLogs(clientId, { page, pageSize });
  }, [clientId, page, pageSize]);
  const { data, error, isLoading, mutate: revalidate } = useSWR(cacheKey, fetcher, swrOptions);
  return {
    auditLogs: data?.data || [],
    auditLogsCount: data?.count || 0,
    auditLogsLoading: isLoading,
    auditLogsError: error,
    revalidateAuditLogs: revalidate
  };
}
async function fetchClientsByIds(ids) {
  if (!ids?.length) return [];
  const { data, error } = await supabase.from("client_profiles").select("id, first_name, last_name, preferred_name, email, phone_primary").in("id", ids).is("deleted_at", null);
  if (error) throw error;
  return data || [];
}
function useClientsByIds(ids) {
  const stableKey = ids?.length ? ["clients-by-ids", ...ids.slice().sort()] : null;
  const { data, isLoading } = useSWR(stableKey, () => fetchClientsByIds(ids), {
    ...swrOptions,
    revalidateOnFocus: false
  });
  return { clients: data || [], clientsLoading: isLoading };
}
async function fetchClientsForAutocomplete(searchQuery, limit = 10, branchId = null) {
  try {
    const { data, error } = await supabase.rpc("autocomplete_clients", {
      p_search_query: normalizePhoneTerm(searchQuery),
      p_limit: limit,
      p_branch_id: branchId || null
    });
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error("Error fetching clients for autocomplete:", err);
    throw err;
  }
}
function useClientAutocomplete(searchQuery, limit = 10, branchId = null, enabled = true) {
  const debouncedQuery = useDebouncedValue(searchQuery, 300);
  const cacheKey = reactExports.useMemo(
    () => enabled ? ["client-autocomplete", debouncedQuery || "", limit, branchId || ""] : null,
    [enabled, debouncedQuery, limit, branchId]
  );
  const {
    data,
    error,
    isLoading,
    mutate: revalidateClients
  } = useSWR(cacheKey, () => fetchClientsForAutocomplete(debouncedQuery, limit, branchId), {
    ...swrOptions,
    dedupingInterval: 500,
    revalidateOnFocus: false,
    keepPreviousData: false
  });
  return {
    clients: data || [],
    clientsLoading: isLoading,
    clientsError: error,
    mutateClients: revalidateClients
  };
}
export {
  useClient as a,
  useClientsByIds as b,
  updateClient as c,
  createClient as d,
  useClientList as e,
  useClientAuditLogs as f,
  useClientAppointments as g,
  useClientStatistics as h,
  useClientAutocomplete as u
};
