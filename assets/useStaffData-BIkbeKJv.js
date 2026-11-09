import { u as useSWR, r as reactExports } from "./index-B08HRm4A.js";
import { b as getBranchStylistsWithPricing } from "./staff-service-CYDKVOm2.js";
const SWR_OPTIONS = {
  revalidateOnFocus: false,
  dedupingInterval: 5e3,
  keepPreviousData: true
};
const transformStylist = (stylist, branchId) => ({
  id: stylist.user_id,
  display_name: `${stylist.first_name} ${stylist.last_name}`,
  role: "Stylist",
  rating: 4.5,
  reviews: 0,
  avatar: stylist.avatar_url || `/assets/images/avatars/avatar_${Math.floor(Math.random() * 25) + 1}.jpg`,
  specialties: stylist.services?.map((s) => s.service_name) || [],
  available: true,
  level: stylist.stylist_level,
  calendar_color: stylist.calendar_color,
  services: stylist.services || [],
  branch_id: branchId
});
async function fetchStaffData(primaryBranchId, branchIds) {
  const isMultiBranch = Array.isArray(branchIds) && branchIds.length > 0;
  if (isMultiBranch) {
    const results = await Promise.all(
      branchIds.map(
        (id) => getBranchStylistsWithPricing(id).then((r) => ({ ...r, branchId: id }))
      )
    );
    const seen = /* @__PURE__ */ new Set();
    const merged = [];
    for (const { data: stylistsData2, branchId } of results) {
      for (const stylist of stylistsData2 || []) {
        if (!seen.has(stylist.user_id)) {
          seen.add(stylist.user_id);
          merged.push(transformStylist(stylist, branchId));
        }
      }
    }
    return merged;
  }
  const { data: stylistsData, error: fetchError } = await getBranchStylistsWithPricing(primaryBranchId);
  if (fetchError) throw fetchError;
  return stylistsData.map((s) => transformStylist(s, primaryBranchId));
}
function useStaffData(primaryBranchId, { branchIds } = {}) {
  const isMultiBranch = Array.isArray(branchIds) && branchIds.length > 0;
  const branchIdsKey = isMultiBranch ? branchIds.sort().join(",") : null;
  const cacheKey = isMultiBranch ? `staff_data:multi:${branchIdsKey}` : primaryBranchId ? `staff_data:${primaryBranchId}` : null;
  const { data, error, isLoading, mutate } = useSWR(
    cacheKey,
    () => fetchStaffData(primaryBranchId, branchIds),
    SWR_OPTIONS
  );
  const staff = reactExports.useMemo(() => data ?? [], [data]);
  return { staff, loading: isLoading, error, mutate };
}
export {
  useStaffData as u
};
