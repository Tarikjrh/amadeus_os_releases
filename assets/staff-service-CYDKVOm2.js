import { s as supabase, u as useSWR, r as reactExports } from "./index-B08HRm4A.js";
const DEPOSIT_ITEM_TYPES = /* @__PURE__ */ new Set(["package_deposit", "discount_plan_deposit"]);
const SALE_DISCOUNT_SELECT = `discount_amount, manual_discount_amount, voucher_amount,
  cashback_redemption_amount, items:sale_items(line_total, item_type, deleted_at)`;
function getSaleItemPaidAmount(saleItem) {
  const lineTotal = Number(
    saleItem.line_total ?? (saleItem.quantity || 1) * (saleItem.unit_price || 0)
  );
  const sale = saleItem.sale;
  if (!sale || DEPOSIT_ITEM_TYPES.has(saleItem.item_type)) return lineTotal;
  const saleDiscount = Number(sale.discount_amount || 0) + Number(sale.manual_discount_amount || 0) + Number(sale.voucher_amount || 0) + Number(sale.cashback_redemption_amount || 0);
  if (saleDiscount <= 0) return lineTotal;
  const subtotal = (sale.items || []).filter((i) => !i.deleted_at && !DEPOSIT_ITEM_TYPES.has(i.item_type)).reduce((sum, i) => sum + Number(i.line_total || 0), 0);
  if (subtotal <= 0) return lineTotal;
  const ratio = Math.min(1, saleDiscount / subtotal);
  return lineTotal * (1 - ratio);
}
function useStylistAutocomplete(branchId, searchQuery, limit = 30) {
  const cacheKey = reactExports.useMemo(
    () => branchId ? ["stylist-autocomplete", branchId, searchQuery || "", limit] : null,
    [branchId, searchQuery, limit]
  );
  const { data, error, isLoading } = useSWR(
    cacheKey,
    async () => {
      const result = await getBranchEmployees({
        branchId,
        searchTerm: searchQuery || "",
        limit,
        status: "active"
      });
      return result.data || [];
    },
    { dedupingInterval: 300, revalidateOnFocus: false, keepPreviousData: true }
  );
  return {
    stylists: data || [],
    stylistsLoading: isLoading,
    stylistsError: error
  };
}
async function getBranchEmployees({
  branchId,
  role = null,
  status = "active",
  searchTerm = "",
  orderBy = "last_name",
  order = "asc",
  limit = 50,
  offset = 0
} = {}) {
  try {
    let query = supabase.rpc("get_branch_employees", {
      p_branch_id: branchId,
      p_role: role,
      p_status: status
    });
    if (searchTerm) {
      const { data: allData, error: allError } = await query;
      if (allError) throw allError;
      const lowerSearch = searchTerm.toLowerCase();
      const filtered = allData.filter((emp) => {
        const fullName = `${emp.first_name ?? ""} ${emp.last_name ?? ""}`.toLowerCase();
        return fullName.includes(lowerSearch) || emp.email?.toLowerCase().includes(lowerSearch) || emp.phone?.includes(searchTerm);
      });
      const sorted2 = filtered.sort((a, b) => {
        const aVal = a[orderBy] || "";
        const bVal = b[orderBy] || "";
        if (order === "asc") {
          return aVal > bVal ? 1 : -1;
        }
        return aVal < bVal ? 1 : -1;
      });
      const paginated2 = sorted2.slice(offset, offset + limit);
      return {
        data: paginated2,
        totalCount: sorted2.length,
        error: null
      };
    }
    const { data, error } = await query;
    if (error) throw error;
    const sorted = data.sort((a, b) => {
      const aVal = a[orderBy] || "";
      const bVal = b[orderBy] || "";
      if (order === "asc") {
        return aVal > bVal ? 1 : -1;
      }
      return aVal < bVal ? 1 : -1;
    });
    const paginated = sorted.slice(offset, offset + limit);
    return {
      data: paginated,
      totalCount: sorted.length,
      error: null
    };
  } catch (error) {
    console.error("Error fetching branch employees:", error);
    return { data: [], totalCount: 0, error };
  }
}
async function getEmployeeList({ includeInactive = false } = {}) {
  const { data, error } = await supabase.rpc("get_report_employees", {
    p_include_inactive: includeInactive
  });
  if (error) throw error;
  return data;
}
async function getEmployee(id) {
  try {
    const { data, error } = await supabase.from("profiles").select(
      `
        *,
        user_roles!user_roles_user_id_fkey(role),
        branch_access!branch_access_user_id_fkey(
          is_primary,
          granted_at,
          branch:branches(
            id,
            name,
            slug,
            location_type,
            country:countries(
              id,
              name,
              code,
              organization:organizations(id, name)
            )
          )
        )
      `
    ).eq("id", id).single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching employee:", error);
    return { data: null, error };
  }
}
async function updateEmployee(id, updates) {
  try {
    const { data, error } = await supabase.from("profiles").update(updates).eq("id", id).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating employee:", error);
    return { data: null, error };
  }
}
async function deactivateEmployee(id) {
  try {
    const { data, error } = await supabase.from("profiles").update({ status: "inactive" }).eq("id", id).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error deactivating employee:", error);
    return { data: null, error };
  }
}
async function deactivateMultipleEmployees(ids) {
  try {
    const { data, error } = await supabase.from("profiles").update({ status: "inactive" }).in("id", ids).select();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error deactivating employees:", error);
    return { data: null, error };
  }
}
async function getEmployeeSchedules(employeeId, branchId = null) {
  try {
    let query = supabase.from("employee_schedules").select(
      `
        *,
        branch:branches(id, name),
        created_by_profile:profiles!employee_schedules_created_by_fkey(id, display_name, first_name, last_name)
      `
    ).eq("employee_id", employeeId).eq("is_active", true).order("day_of_week", { ascending: true });
    if (branchId) {
      query = query.eq("branch_id", branchId);
    }
    const { data, error } = await query;
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching employee schedules:", error);
    return { data: [], error };
  }
}
async function createEmployeeSchedules(schedulesData) {
  try {
    const { data, error } = await supabase.from("employee_schedules").insert(schedulesData).select();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error creating employee schedules:", error);
    return { data: null, error };
  }
}
async function updateEmployeeSchedule(scheduleId, updates) {
  try {
    const { data, error } = await supabase.from("employee_schedules").update(updates).eq("id", scheduleId).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating employee schedule:", error);
    return { data: null, error };
  }
}
async function deleteEmployeeSchedule(scheduleId) {
  try {
    const { data, error } = await supabase.from("employee_schedules").update({ is_active: false }).eq("id", scheduleId).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error deleting employee schedule:", error);
    return { data: null, error };
  }
}
async function getEmployeeExceptions(employeeId, branchId = null, status = null) {
  try {
    let query = supabase.from("employee_availability_exceptions").select(
      `
        *,
        branch:branches(id, name),
        approved_by_profile:profiles!employee_availability_exceptions_approved_by_fkey(id, display_name, first_name, last_name),
        created_by_profile:profiles!employee_availability_exceptions_created_by_fkey(id, display_name, first_name, last_name)
      `
    ).eq("employee_id", employeeId).order("start_datetime", { ascending: false });
    if (branchId) {
      query = query.or(`branch_id.eq.${branchId},branch_id.is.null`);
    }
    if (status) {
      query = query.eq("status", status);
    }
    const { data, error } = await query;
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching employee exceptions:", error);
    return { data: [], error };
  }
}
async function getAllAvailabilityExceptions(branchId = null, status = null) {
  try {
    let query = supabase.from("employee_availability_exceptions").select(
      `
        *,
        employee:profiles!employee_availability_exceptions_employee_id_fkey(id, display_name, first_name, last_name, email, avatar_url),
        branch:branches(id, name),
        approved_by_profile:profiles!employee_availability_exceptions_approved_by_fkey(id, display_name, first_name, last_name),
        created_by_profile:profiles!employee_availability_exceptions_created_by_fkey(id, display_name, first_name, last_name)
      `
    ).order("created_at", { ascending: false });
    if (branchId) {
      query = query.or(`branch_id.eq.${branchId},branch_id.is.null`);
    }
    if (status) {
      query = query.eq("status", status);
    }
    const { data, error } = await query;
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching all availability exceptions:", error);
    return { data: [], error };
  }
}
async function createAvailabilityException(exceptionData) {
  try {
    const { data, error } = await supabase.from("employee_availability_exceptions").insert([exceptionData]).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error creating availability exception:", error);
    return { data: null, error };
  }
}
async function updateAvailabilityException(exceptionId, updates) {
  try {
    const { data, error } = await supabase.from("employee_availability_exceptions").update(updates).eq("id", exceptionId).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating availability exception:", error);
    return { data: null, error };
  }
}
async function updateExceptionStatus(exceptionId, status, approvedBy) {
  try {
    const updates = {
      status,
      approved_by: approvedBy,
      approved_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    const { data, error } = await supabase.from("employee_availability_exceptions").update(updates).eq("id", exceptionId).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating exception status:", error);
    return { data: null, error };
  }
}
async function deleteAvailabilityException(exceptionId) {
  try {
    const { data, error } = await supabase.from("employee_availability_exceptions").update({ status: "cancelled" }).eq("id", exceptionId).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error deleting availability exception:", error);
    return { data: null, error };
  }
}
async function getEmployeeLevels(employeeId) {
  try {
    const { data, error } = await supabase.from("employee_levels").select("*").eq("user_id", employeeId).order("effective_from", { ascending: false });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching employee levels:", error);
    return { data: null, error };
  }
}
async function updateEmployeeLevel({ userId, branchId, stylistLevel, notes = null }) {
  try {
    const { error: closeError } = await supabase.from("employee_levels").update({ effective_until: (/* @__PURE__ */ new Date()).toISOString() }).eq("user_id", userId).eq("branch_id", branchId).is("effective_until", null);
    if (closeError) throw closeError;
    const { data, error } = await supabase.from("employee_levels").insert({
      user_id: userId,
      branch_id: branchId,
      stylist_level: stylistLevel,
      notes,
      effective_from: (/* @__PURE__ */ new Date()).toISOString(),
      effective_until: null
      // Current level
    }).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating employee level:", error);
    return { data: null, error };
  }
}
async function getStylistServices(userId, branchId) {
  try {
    const { data, error } = await supabase.rpc("get_stylist_services", {
      p_user_id: userId,
      p_branch_id: branchId
    });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching stylist services:", error);
    return { data: null, error };
  }
}
async function getAllServices(organizationId = null) {
  try {
    let query = supabase.from("services").select("*").eq("is_active", true).order("display_order", { ascending: true }).order("name", { ascending: true });
    if (organizationId) {
      query = query.eq("organization_id", organizationId);
    }
    const { data, error } = await query;
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching all services:", error);
    return { data: null, error };
  }
}
async function assignServiceToStylist({ userId, branchId, serviceId, assignedBy }) {
  try {
    const { data, error } = await supabase.from("stylist_services").insert({
      user_id: userId,
      branch_id: branchId,
      service_id: serviceId,
      assigned_by: assignedBy,
      is_active: true
    }).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error assigning service to stylist:", error);
    return { data: null, error };
  }
}
async function removeServiceFromStylist(userId, branchId, serviceId) {
  try {
    const { data, error } = await supabase.from("stylist_services").update({ is_active: false }).eq("user_id", userId).eq("branch_id", branchId).eq("service_id", serviceId).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error removing service from stylist:", error);
    return { data: null, error };
  }
}
async function bulkAssignServicesToStylist({ userId, branchId, serviceIds, assignedBy }) {
  try {
    const inserts = serviceIds.map((serviceId) => ({
      user_id: userId,
      branch_id: branchId,
      service_id: serviceId,
      assigned_by: assignedBy,
      is_active: true
    }));
    const { data, error } = await supabase.from("stylist_services").insert(inserts).select();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error bulk assigning services to stylist:", error);
    return { data: null, error };
  }
}
async function bulkRemoveServicesFromStylist(userId, branchId, serviceIds) {
  try {
    const { data, error } = await supabase.from("stylist_services").delete().eq("user_id", userId).eq("branch_id", branchId).in("service_id", serviceIds).select();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error bulk removing services from stylist:", error);
    return { data: null, error };
  }
}
const ABSENT_EXCEPTION_TYPES = [
  "vacation",
  "sick_day",
  "personal_day",
  "holiday",
  "unavailable"
];
async function getStylistSales(stylistId, startDate, endDate) {
  try {
    const { data: salesData, error: salesError } = await supabase.from("sales").select("id").not("status", "in", '("refunded","cancelled")').gte("created_at", `${startDate}T00:00:00+00:00`).lte("created_at", `${endDate}T23:59:59+00:00`);
    if (salesError) throw salesError;
    if (!salesData || salesData.length === 0) return [];
    const saleIds = salesData.map((sale) => sale.id);
    const { data, error } = await supabase.from("sale_items").select(
      `
        *,
        sale:sales (
          id,
          sale_number,
          created_at,
          total_amount,
          status,
          ${SALE_DISCOUNT_SELECT},
          client:client_profiles (first_name, last_name),
          cashier:profiles!cashier_id (first_name, last_name)
        ),
        product:products (name, sku),
        service:services (id, name, service_group)
      `
    ).eq("stylist_id", stylistId).in("sale_id", saleIds).is("deleted_at", null).order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching stylist sales:", error);
    return [];
  }
}
async function getApprovedAbsences(employeeId, startDate, endDate) {
  const { data, error } = await supabase.from("employee_availability_exceptions").select("id, start_datetime, end_datetime, is_all_day, exception_type, is_paid").eq("employee_id", employeeId).eq("status", "approved").eq("is_paid", false).in("exception_type", ABSENT_EXCEPTION_TYPES).lte("start_datetime", `${endDate}T23:59:59+00:00`).gte("end_datetime", `${startDate}T00:00:00+00:00`);
  if (error) throw error;
  return data || [];
}
async function getBranchStylistsWithPricing(branchId) {
  try {
    const { data, error } = await supabase.rpc("get_branch_stylists_with_pricing", {
      p_branch_id: branchId
    });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching branch stylists with pricing:", error);
    return { data: null, error };
  }
}
async function getStaffPenalties(userId, branchId, startDate, endDate) {
  const { data, error } = await supabase.from("staff_penalties").select("*").eq("user_id", userId).eq("branch_id", branchId).gte("issued_at", startDate).lte("issued_at", endDate).is("deleted_at", null).order("issued_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function createStaffPenalty({
  userId,
  branchId,
  amount,
  percentage,
  reason,
  issuedAt,
  issuedBy
}) {
  const { data, error } = await supabase.from("staff_penalties").insert([
    {
      user_id: userId,
      branch_id: branchId,
      amount: amount ?? null,
      percentage: percentage ?? null,
      reason,
      issued_at: issuedAt,
      issued_by: issuedBy ?? null
    }
  ]).select().single();
  if (error) throw error;
  return data;
}
async function deleteStaffPenalty(penaltyId) {
  const { error } = await supabase.rpc("soft_delete_staff_penalty", {
    p_penalty_id: penaltyId
  });
  if (error) throw error;
}
async function updateStaffPenalty(penaltyId, { deduction_type, amount, percentage, reason, issued_at }) {
  const { data, error } = await supabase.from("staff_penalties").update({
    amount: deduction_type === "amount" ? Number(amount) : null,
    percentage: deduction_type === "percentage" ? Number(percentage) : null,
    reason,
    issued_at
  }).eq("id", penaltyId).select().single();
  if (error) throw error;
  return data;
}
function useStaffServiceCommissions(userId) {
  const cacheKey = userId ? `staff-service-commissions-${userId}` : null;
  const { data, isLoading, mutate } = useSWR(cacheKey, () => getStaffServiceCommissions(userId), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  return {
    serviceCommissions: data || [],
    serviceCommissionsLoading: isLoading,
    mutateServiceCommissions: mutate
  };
}
async function getStaffServiceCommissions(userId) {
  const { data, error } = await supabase.from("staff_service_commissions").select(
    `
      id,
      user_id,
      branch_id,
      service_id,
      commission_percent,
      created_at,
      updated_at,
      service:services(id, name)
    `
  ).eq("user_id", userId).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function upsertStaffServiceCommissions(userId, branchId, entries) {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  const rows = entries.map(({ service_id, commission_percent }) => ({
    user_id: userId,
    branch_id: branchId,
    service_id,
    commission_percent: Number(commission_percent),
    created_by: user?.id,
    updated_by: user?.id
  }));
  const { data, error } = await supabase.from("staff_service_commissions").upsert(rows, { onConflict: "user_id,service_id" }).select();
  if (error) throw error;
  return data;
}
async function deleteStaffServiceCommission(id) {
  const { error } = await supabase.from("staff_service_commissions").delete().eq("id", id);
  if (error) throw error;
}
export {
  deleteEmployeeSchedule as A,
  updateAvailabilityException as B,
  createAvailabilityException as C,
  deleteAvailabilityException as D,
  getSaleItemPaidAmount as E,
  useStaffServiceCommissions as F,
  useStylistAutocomplete as G,
  upsertStaffServiceCommissions as H,
  deleteStaffServiceCommission as I,
  getEmployeeList as J,
  SALE_DISCOUNT_SELECT as S,
  deactivateMultipleEmployees as a,
  getBranchStylistsWithPricing as b,
  createStaffPenalty as c,
  deactivateEmployee as d,
  deleteStaffPenalty as e,
  updateStaffPenalty as f,
  getBranchEmployees as g,
  getStylistSales as h,
  getApprovedAbsences as i,
  getStylistServices as j,
  getAllServices as k,
  assignServiceToStylist as l,
  bulkAssignServicesToStylist as m,
  bulkRemoveServicesFromStylist as n,
  getEmployeeExceptions as o,
  getEmployeeSchedules as p,
  getStaffPenalties as q,
  removeServiceFromStylist as r,
  getAllAvailabilityExceptions as s,
  getEmployee as t,
  updateEmployeeLevel as u,
  getEmployeeLevels as v,
  updateExceptionStatus as w,
  updateEmployee as x,
  createEmployeeSchedules as y,
  updateEmployeeSchedule as z
};
