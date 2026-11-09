import { r as reactExports, u as useSWR, s as supabase, m as mutate } from "./index-B08HRm4A.js";
import { d as deactivateEmployee, a as deactivateMultipleEmployees, g as getBranchEmployees } from "./staff-service-CYDKVOm2.js";
const STORAGE_KEY = "app-staff";
const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  keepPreviousData: true
};
function useGetStaff({ page = 0, pageSize = 10, branchId, branchIds, filters = {} } = {}) {
  const effectiveBranchIds = reactExports.useMemo(() => {
    if (Array.isArray(branchIds) && branchIds.length > 0) return branchIds.filter(Boolean);
    if (branchId) return [branchId];
    return [];
  }, [branchId, branchIds]);
  const channelKey = effectiveBranchIds.join("-");
  const cacheKey = JSON.stringify([STORAGE_KEY, page, pageSize, effectiveBranchIds, filters]);
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateLocal
  } = useSWR(
    effectiveBranchIds.length > 0 ? cacheKey : null,
    () => fetchStaffFromSupabase({ page, pageSize, branchIds: effectiveBranchIds, filters }),
    options
  );
  reactExports.useEffect(() => {
    if (!effectiveBranchIds.length || !supabase.channel) {
      return void 0;
    }
    const channel = supabase.channel(`staff-changes-${channelKey}`).on(
      "postgres_changes",
      { event: "*", schema: "public", table: "profiles" },
      () => mutateLocal()
    ).on(
      "postgres_changes",
      { event: "*", schema: "public", table: "branch_access" },
      () => mutateLocal()
    ).on(
      "postgres_changes",
      { event: "*", schema: "public", table: "user_roles" },
      () => mutateLocal()
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [channelKey, mutateLocal]);
  const memoizedValue = reactExports.useMemo(
    () => ({
      staff: data?.staff || [],
      staffLoading: isLoading,
      staffError: error,
      staffValidating: isValidating,
      totalCount: data?.totalCount || 0,
      staffEmpty: !isLoading && !data?.staff?.length
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
async function fetchStaffFromSupabase({ page, pageSize, branchIds, filters }) {
  const offset = page * pageSize;
  const roleFilter = Array.isArray(filters.role) ? filters.role.filter(Boolean) : filters.role ? [filters.role] : [];
  const levelFilter = Array.isArray(filters.stylistLevel) ? filters.stylistLevel.filter(Boolean) : filters.stylistLevel ? [filters.stylistLevel] : [];
  const needsClientFilter = roleFilter.length > 1 || levelFilter.length > 0;
  if (branchIds.length > 1) {
    const results = await Promise.all(
      branchIds.map(
        (bid) => getBranchEmployees({
          branchId: bid,
          status: filters.status || "active",
          searchTerm: filters.name || "",
          orderBy: filters.orderBy || "last_name",
          order: filters.order || "asc",
          limit: 1e3,
          offset: 0
        })
      )
    );
    const seen = /* @__PURE__ */ new Set();
    let merged = [];
    for (const { data: branchData } of results) {
      for (const emp of branchData || []) {
        if (!seen.has(emp.id)) {
          seen.add(emp.id);
          merged.push(emp);
        }
      }
    }
    if (roleFilter.length > 0) {
      merged = merged.filter((emp) => {
        const empRoles = Array.isArray(emp.roles) ? emp.roles : [];
        return roleFilter.some((r) => empRoles.includes(r));
      });
    }
    if (levelFilter.length > 0) {
      merged = merged.filter((emp) => levelFilter.includes(emp.stylist_level));
    }
    const totalCount2 = merged.length;
    return { staff: merged.slice(offset, offset + pageSize), totalCount: totalCount2 };
  }
  const branchId = branchIds[0];
  const singleRole = roleFilter.length === 1 ? roleFilter[0] : null;
  const { data, totalCount, error } = await getBranchEmployees({
    branchId,
    role: needsClientFilter && !levelFilter.length ? null : singleRole,
    status: filters.status || "active",
    searchTerm: filters.name || "",
    orderBy: filters.orderBy || "last_name",
    order: filters.order || "asc",
    limit: needsClientFilter ? 1e3 : pageSize,
    offset: needsClientFilter ? 0 : offset
  });
  if (error) throw error;
  let finalData = data || [];
  let finalCount = totalCount || 0;
  if (needsClientFilter) {
    if (roleFilter.length > 0) {
      finalData = finalData.filter((emp) => {
        const empRoles = Array.isArray(emp.roles) ? emp.roles : [];
        return roleFilter.some((r) => empRoles.includes(r));
      });
    }
    if (levelFilter.length > 0) {
      finalData = finalData.filter((emp) => levelFilter.includes(emp.stylist_level));
    }
    finalCount = finalData.length;
    finalData = finalData.slice(offset, offset + pageSize);
  }
  return { staff: finalData, totalCount: finalCount };
}
async function deleteStaff(id) {
  const { error } = await deactivateEmployee(id);
  if (error) {
    throw error;
  }
  await mutate((key) => typeof key === "string" && key.startsWith(STORAGE_KEY), void 0, {
    revalidate: true
  });
}
async function deleteMultipleStaff(ids) {
  const { error } = await deactivateMultipleEmployees(ids);
  if (error) {
    throw error;
  }
  await mutate((key) => typeof key === "string" && key.startsWith(STORAGE_KEY), void 0, {
    revalidate: true
  });
}
export {
  deleteMultipleStaff as a,
  deleteStaff as d,
  useGetStaff as u
};
