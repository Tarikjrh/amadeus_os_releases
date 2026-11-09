import { u as useSWR, r as reactExports, s as supabase, j as jsxRuntimeExports, S as Stack, al as Avatar, c as Typography, Z as RouterLink, a3 as paths, a0 as fCurrency, L as Label, B as Box, T as Tooltip, I as IconButton, a as Iconify, a7 as LoadingScreen, an as fDate, bo as useRouter, av as useAuthContext, a6 as useUserBranches, t as toast, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, d as Button, b as CircularProgress, a1 as LinearProgress, C as CONFIG } from "./index-B08HRm4A.js";
import { S as SALE_DISCOUNT_SELECT, E as getSaleItemPaidAmount, F as useStaffServiceCommissions } from "./staff-service-CYDKVOm2.js";
import { u as useGetEmployeeCompensation, c as createSalaryPayment, S as SalaryPaymentFormDialog } from "./salary-payment-form-dialog-NcmPdT7G.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { g as getPresetDates, D as DateRangeControls } from "./getPresetDates-BdaDk_3_.js";
import { o } from "./index-Di_Bgabu.js";
import { b as TableRow, T as Table, a as TableHead, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { c as useStylistSales } from "./staff-hooks-CXExa9Nb.js";
import { b as useGetStaffDiscountPlanCommissions } from "./discount-plan-service-DWSzNOBf.js";
import { D as Dialog, a as DialogContent } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import "./form-provider-u_wAFv-h.js";
import "./expense-service-B2nZjY_a.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./TextField-CIuP940C.js";
import "./with-selector-ClfCuV5M.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./InputAdornment-BqZyQBIE.js";
import "./Autocomplete-BReuRGf-.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./schemas-BVeYYbTr.js";
import "./coerce-5-WTXoHr.js";
const COMMISSION_RATE_MAP$1 = {
  services: "services_commission_percent",
  product: "product_commission_percent",
  lash_lifting: "lash_lifting_commission_percent",
  lash_extension: "lash_extension_commission_percent",
  makeup_course: "makeup_course_commission_percent",
  bridal_eng: "bridal_eng_commission_percent"
};
const SERVICE_GROUP_TO_COMMISSION$1 = {
  brides: "bridal_eng",
  makeup_course: "makeup_course",
  lash_lifting: "lash_lifting",
  lash_extension: "lash_extension"
};
function getSaleItemCategory$1(saleItem) {
  if (saleItem.product) return "product";
  const group = saleItem.service?.service_group;
  return SERVICE_GROUP_TO_COMMISSION$1[group] ?? "services";
}
function getCommissionRate$1(compensation, saleItem, serviceCommissionMap) {
  if (saleItem.product) {
    return compensation?.product_commission_percent ?? 0;
  }
  const serviceId = saleItem.service?.id;
  if (serviceId && serviceCommissionMap?.[serviceId] !== void 0) {
    return serviceCommissionMap[serviceId];
  }
  if (!compensation) return 0;
  const category = getSaleItemCategory$1(saleItem);
  const field = COMMISSION_RATE_MAP$1[category] ?? "services_commission_percent";
  return compensation[field] ?? 0;
}
async function fetchBranchEmployeesForPayroll(branchId) {
  const { data, error } = await supabase.rpc("get_branch_employees", {
    p_branch_id: branchId,
    p_role: null,
    p_status: "active"
  });
  if (error) throw error;
  return data || [];
}
async function fetchAllCompensations(userIds) {
  if (!userIds.length) return [];
  const { data, error } = await supabase.from("employee_compensation").select("*").in("user_id", userIds).eq("is_active", true);
  if (error) throw error;
  return data || [];
}
async function fetchAllServiceCommissions(userIds) {
  if (!userIds.length) return [];
  const { data, error } = await supabase.from("staff_service_commissions").select("id, user_id, service_id, commission_percent").in("user_id", userIds);
  if (error) throw error;
  return data || [];
}
async function fetchAllSales(userIds, startDate, endDate) {
  if (!userIds.length) return [];
  const { data: salesRows, error: salesErr } = await supabase.from("sales").select("id").not("status", "in", '("refunded","cancelled")').gte("created_at", `${startDate}T00:00:00+00:00`).lte("created_at", `${endDate}T23:59:59+00:00`);
  if (salesErr) throw salesErr;
  const saleIds = (salesRows || []).map((s) => s.id);
  if (!saleIds.length) return [];
  const { data, error } = await supabase.from("sale_items").select(
    `
      id, sale_id, stylist_id, quantity, unit_price, line_total, paid_via_package,
      original_unit_price, discount_amount, discount_plan_value_updated,
      product:products(id, name),
      service:services(id, name, service_group),
      sale:sales(id, sale_number, created_at, status, ${SALE_DISCOUNT_SELECT},
        client:client_profiles(first_name, last_name))
    `
  ).in("stylist_id", userIds).in("sale_id", saleIds).is("deleted_at", null);
  if (error) throw error;
  return data || [];
}
async function fetchAllPenalties(userIds, branchId, startDate, endDate) {
  if (!userIds.length) return [];
  const { data, error } = await supabase.from("staff_penalties").select("*").in("user_id", userIds).eq("branch_id", branchId).gte("issued_at", startDate).lte("issued_at", endDate).is("deleted_at", null);
  if (error) throw error;
  return data || [];
}
async function fetchAllOvertime(userIds, branchId, startDate, endDate) {
  if (!userIds.length) return [];
  const { data, error } = await supabase.from("staff_overtime").select("*").in("user_id", userIds).eq("branch_id", branchId).gte("date", startDate).lte("date", endDate).is("deleted_at", null);
  if (error) throw error;
  return data || [];
}
const ABSENT_EXCEPTION_TYPES = ["vacation", "sick_day", "personal_day", "holiday", "unavailable"];
async function fetchAllAbsences(userIds, startDate, endDate) {
  if (!userIds.length) return [];
  const { data, error } = await supabase.from("employee_availability_exceptions").select("id, employee_id, start_datetime, end_datetime, is_all_day, exception_type, is_paid").in("employee_id", userIds).eq("status", "approved").eq("is_paid", false).in("exception_type", ABSENT_EXCEPTION_TYPES).lte("start_datetime", `${endDate}T23:59:59+00:00`).gte("end_datetime", `${startDate}T00:00:00+00:00`);
  if (error) throw error;
  return data || [];
}
async function fetchAllPeriodPayments(userIds, organizationId, startDate, endDate) {
  if (!userIds.length) return [];
  const { data, error } = await supabase.from("salary_payments").select("id, user_id, status, amount").in("user_id", userIds).eq("organization_id", organizationId).is("deleted_at", null).gte("payment_date", startDate).lte("payment_date", endDate).eq("status", "paid");
  if (error) throw error;
  return data || [];
}
async function fetchAllTierPlans(branchId) {
  if (!branchId) return [];
  const { data, error } = await supabase.from("salary_tier_plans").select("*").eq("branch_id", branchId).eq("is_active", true).order("revenue_target", { ascending: true });
  if (error) throw error;
  return data || [];
}
async function fetchAllPackageCommissions(userIds, startDate, endDate) {
  if (!userIds.length) return [];
  const { data, error } = await supabase.from("package_usages").select(
    `
      id, service_id, stylist_id, per_visit_value,
      client_packages!inner(id, price_paid, uses_count, is_commission_finalized),
      services(id, name, service_group)
    `
  ).in("stylist_id", userIds).gte("used_at", startDate).lte("used_at", endDate);
  if (error) throw error;
  return data || [];
}
async function fetchAllCommissionHistory(userIds, startDate, endDate) {
  if (!userIds.length) return [];
  const { data, error } = await supabase.from("commission_history").select("*").in("user_id", userIds).gte("service_date", startDate).lte("service_date", endDate);
  if (error) throw error;
  return data || [];
}
async function fetchAllDiscountPlanCommissions(userIds, startDate, endDate) {
  if (!userIds.length) return [];
  const { data, error } = await supabase.from("discount_plan_usages").select(
    `
      id, service_id, stylist_id, sale_id, original_service_price, discount_amount, client_plan_id,
      client_discount_plans!inner(id, is_commission_finalized)
    `
  ).in("stylist_id", userIds).gte("created_at", `${startDate}T00:00:00`).lte("created_at", `${endDate}T23:59:59`);
  if (error) throw error;
  return data || [];
}
function countWorkingDays(start, end) {
  let count = 0;
  const startD = new Date(start);
  const endD = new Date(end);
  const current = new Date(startD);
  while (current <= endD) {
    if (current.getDay() !== 0) count++;
    current.setDate(current.getDate() + 1);
  }
  return count;
}
function countAbsentDays(absences, periodStart, periodEnd) {
  const absentSet = /* @__PURE__ */ new Set();
  const pStart = new Date(periodStart);
  const pEnd = new Date(periodEnd);
  for (const absence of absences) {
    let cur = new Date(absence.start_datetime);
    const absEnd = new Date(absence.end_datetime);
    if (cur < pStart) cur = new Date(pStart);
    const end = absEnd > pEnd ? pEnd : absEnd;
    while (cur <= end) {
      if (cur.getDay() !== 0) absentSet.add(cur.toISOString().split("T")[0]);
      cur.setDate(cur.getDate() + 1);
    }
  }
  return absentSet.size;
}
function computeTierForRevenue(revenue, tiers) {
  if (!tiers?.length) return null;
  let matched = null;
  for (const tier of tiers) {
    if (revenue >= Number(tier.revenue_target)) matched = tier;
  }
  return matched;
}
function computeEmployeeSummary({
  employee,
  compensation,
  serviceCommissionMap,
  sales,
  penalties,
  overtime,
  absences,
  tiers,
  packageUsages,
  commissionHistory,
  planUsages,
  startDate,
  endDate,
  isPaid
}) {
  const isTiered = !!compensation?.use_tiered_salary;
  let tieredServiceRevenue = 0;
  let totalCommissions = 0;
  const filteredSales = sales.filter((s) => !s.paid_via_package && s.original_unit_price == null);
  filteredSales.forEach((item) => {
    const lineTotal = getSaleItemPaidAmount(item);
    const category = getSaleItemCategory$1(item);
    if (isTiered) {
      if (category !== "product") {
        tieredServiceRevenue += lineTotal;
      } else {
        const rate = compensation?.product_commission_percent ?? 0;
        totalCommissions += lineTotal * (rate / 100);
      }
    } else {
      const rate = getCommissionRate$1(compensation, item, serviceCommissionMap);
      totalCommissions += lineTotal * (rate / 100);
    }
  });
  if (isTiered) {
    const matchedTier = computeTierForRevenue(tieredServiceRevenue, tiers);
    const tieredSalary = matchedTier ? tieredServiceRevenue * (matchedTier.incentive_percent / 100) : 0;
    totalCommissions += tieredSalary;
  }
  const pendingPkgUsages = (packageUsages || []).filter(
    (u) => !u.client_packages?.is_commission_finalized
  );
  let packageCommission = 0;
  pendingPkgUsages.forEach((usage) => {
    const pkg = usage.client_packages;
    if (!pkg?.uses_count) return;
    const perVisitValue = usage.per_visit_value != null ? Number(usage.per_visit_value) : Number(pkg.price_paid) / pkg.uses_count;
    const serviceGroup = usage.services?.service_group;
    const category = SERVICE_GROUP_TO_COMMISSION$1[serviceGroup] ?? "services";
    const field = COMMISSION_RATE_MAP$1[category] ?? "services_commission_percent";
    const serviceId = usage.service_id;
    const rate = serviceId && serviceCommissionMap?.[serviceId] !== void 0 ? serviceCommissionMap[serviceId] : compensation?.[field] ?? 0;
    packageCommission += perVisitValue * (rate / 100);
  });
  const finalizedPkgRecords = (commissionHistory || []).filter((r) => r.client_package_id != null);
  packageCommission += finalizedPkgRecords.reduce((sum, r) => sum + Number(r.commission_amount), 0);
  const pendingPlanUsages = (planUsages || []).filter(
    (u) => !u.client_discount_plans?.is_commission_finalized
  );
  let planCommission = 0;
  pendingPlanUsages.forEach((usage) => {
    const serviceId = usage.service_id;
    const rate = serviceId && serviceCommissionMap?.[serviceId] !== void 0 ? serviceCommissionMap[serviceId] : compensation?.services_commission_percent ?? 0;
    const discountedPrice = Number(usage.original_service_price) - Number(usage.discount_amount ?? 0);
    planCommission += discountedPrice * (rate / 100);
  });
  const finalizedPlanRecords = (commissionHistory || []).filter((r) => r.client_plan_id != null);
  planCommission += finalizedPlanRecords.reduce((sum, r) => sum + Number(r.commission_amount), 0);
  const periodWorkingDays = countWorkingDays(startDate, endDate);
  const startMonth = new Date(startDate);
  const monthStart = new Date(startMonth.getFullYear(), startMonth.getMonth(), 1);
  const monthEnd = new Date(startMonth.getFullYear(), startMonth.getMonth() + 1, 0);
  const fullMonthWorkingDays = countWorkingDays(monthStart, monthEnd);
  const absentWorkingDays = countAbsentDays(absences, startDate, endDate);
  const daysWorked = Math.max(0, periodWorkingDays - absentWorkingDays);
  const baseSalary = Number(compensation?.base_salary ?? 0);
  const proratedBaseSalary = fullMonthWorkingDays > 0 ? baseSalary * daysWorked / fullMonthWorkingDays : baseSalary;
  const totalPenalties = penalties.reduce((sum, p) => {
    if (p.amount != null) return sum + Number(p.amount);
    if (p.percentage != null) return sum + proratedBaseSalary * Number(p.percentage) / 100;
    return sum;
  }, 0);
  const totalOvertime = overtime.reduce((sum, r) => sum + Number(r.total_amount), 0);
  const allCommissions = totalCommissions + packageCommission + planCommission;
  const totalSalary = proratedBaseSalary + allCommissions + totalOvertime - totalPenalties;
  const salesRevenue = sales.reduce((sum, item) => sum + (item.line_total || 0), 0);
  return {
    id: employee.id,
    displayName: employee.display_name || `${employee.first_name || ""} ${employee.last_name || ""}`.trim(),
    firstName: employee.first_name,
    lastName: employee.last_name,
    avatarUrl: employee.avatar_url,
    compensationId: compensation?.id,
    currency: compensation?.currency || "USD",
    baseSalary: proratedBaseSalary,
    totalCommissions: allCommissions,
    totalOvertime,
    totalPenalties,
    totalSalary,
    salesRevenue,
    salesCount: sales.length,
    daysWorked,
    absentWorkingDays,
    periodWorkingDays,
    isPaid,
    hasCompensation: !!compensation
  };
}
async function fetchPayrollData(branchId, organizationId, startDate, endDate) {
  const employees = await fetchBranchEmployeesForPayroll(branchId);
  if (!employees.length) return [];
  const userIds = employees.map((e) => e.id);
  const [
    compensations,
    serviceCommissions,
    sales,
    penaltiesAll,
    overtimeAll,
    absencesAll,
    periodPayments,
    tiers,
    packageUsagesAll,
    commissionHistoryAll,
    planUsagesAll
  ] = await Promise.all([
    fetchAllCompensations(userIds),
    fetchAllServiceCommissions(userIds),
    fetchAllSales(userIds, startDate, endDate),
    fetchAllPenalties(userIds, branchId, startDate, endDate),
    fetchAllOvertime(userIds, branchId, startDate, endDate),
    fetchAllAbsences(userIds, startDate, endDate),
    fetchAllPeriodPayments(userIds, organizationId, startDate, endDate),
    fetchAllTierPlans(branchId),
    fetchAllPackageCommissions(userIds, startDate, endDate),
    fetchAllCommissionHistory(userIds, startDate, endDate),
    fetchAllDiscountPlanCommissions(userIds, startDate, endDate)
  ]);
  const compMap = {};
  compensations.forEach((c) => {
    compMap[c.user_id] = c;
  });
  const scMap = {};
  serviceCommissions.forEach((sc) => {
    if (!scMap[sc.user_id]) scMap[sc.user_id] = {};
    scMap[sc.user_id][sc.service_id] = Number(sc.commission_percent);
  });
  const salesByUser = {};
  sales.forEach((s) => {
    const uid = s.stylist_id;
    if (!uid) return;
    if (!salesByUser[uid]) salesByUser[uid] = [];
    salesByUser[uid].push(s);
  });
  const penaltiesByUser = {};
  penaltiesAll.forEach((p) => {
    if (!penaltiesByUser[p.user_id]) penaltiesByUser[p.user_id] = [];
    penaltiesByUser[p.user_id].push(p);
  });
  const overtimeByUser = {};
  overtimeAll.forEach((o2) => {
    if (!overtimeByUser[o2.user_id]) overtimeByUser[o2.user_id] = [];
    overtimeByUser[o2.user_id].push(o2);
  });
  const absencesByUser = {};
  absencesAll.forEach((a) => {
    if (!absencesByUser[a.employee_id]) absencesByUser[a.employee_id] = [];
    absencesByUser[a.employee_id].push(a);
  });
  const paidUserIds = new Set(periodPayments.map((p) => p.user_id));
  const pkgByUser = {};
  packageUsagesAll.forEach((u) => {
    if (!pkgByUser[u.stylist_id]) pkgByUser[u.stylist_id] = [];
    pkgByUser[u.stylist_id].push(u);
  });
  const chByUser = {};
  commissionHistoryAll.forEach((r) => {
    if (!chByUser[r.user_id]) chByUser[r.user_id] = [];
    chByUser[r.user_id].push(r);
  });
  const planByUser = {};
  planUsagesAll.forEach((u) => {
    if (!planByUser[u.stylist_id]) planByUser[u.stylist_id] = [];
    planByUser[u.stylist_id].push(u);
  });
  return employees.map(
    (employee) => computeEmployeeSummary({
      employee,
      compensation: compMap[employee.id] || null,
      serviceCommissionMap: scMap[employee.id] || {},
      sales: salesByUser[employee.id] || [],
      penalties: penaltiesByUser[employee.id] || [],
      overtime: overtimeByUser[employee.id] || [],
      absences: absencesByUser[employee.id] || [],
      tiers,
      packageUsages: pkgByUser[employee.id] || [],
      commissionHistory: chByUser[employee.id] || [],
      planUsages: planByUser[employee.id] || [],
      startDate,
      endDate,
      isPaid: paidUserIds.has(employee.id)
    })
  );
}
function usePayrollSummaries(branchId, organizationId, startDate, endDate) {
  const key = branchId && organizationId && startDate && endDate ? `payroll-summaries-${branchId}-${organizationId}-${startDate}-${endDate}` : null;
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: mutatePayroll
  } = useSWR(key, () => fetchPayrollData(branchId, organizationId, startDate, endDate), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  return reactExports.useMemo(
    () => ({
      summaries: data || [],
      summariesLoading: isLoading,
      summariesValidating: isValidating,
      summariesError: error,
      summariesRefetch: mutatePayroll
    }),
    [data, error, isLoading, isValidating, mutatePayroll]
  );
}
const PAYROLL_TABLE_HEADERS = [
  { id: "select", label: "", width: 50, disableSorting: true },
  { id: "employee", label: "Employee", minWidth: 200 },
  { id: "base_salary", label: "Base Salary", align: "right", width: 130 },
  { id: "commissions", label: "Commissions", align: "right", width: 130 },
  { id: "overtime", label: "Overtime", align: "right", width: 110 },
  { id: "penalties", label: "Penalties", align: "right", width: 110 },
  { id: "total", label: "Total", align: "right", width: 140 },
  { id: "status", label: "Status", align: "center", width: 120 },
  { id: "actions", label: "", width: 70, disableSorting: true, flex: 1 }
];
const PAYROLL_STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" }
];
const PAYROLL_STATUS_COLORS = {
  paid: "success",
  pending: "warning",
  loading: "default"
};
function PayrollTableRow({ row, selected, onSelect, onPay, onViewProfile, onViewSales }) {
  const status = row.isPaid ? "paid" : "pending";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, selected, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Checkbox,
      {
        checked: selected,
        onChange: onSelect,
        disabled: row.isPaid || !row.hasCompensation
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { src: row.avatarUrl, sx: { width: 36, height: 36 }, children: (row.firstName || row.displayName || "?").charAt(0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            component: RouterLink,
            href: paths.dashboard.staff.profile(row.id),
            variant: "subtitle2",
            noWrap: true,
            sx: {
              color: "text.primary",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" }
            },
            children: row.displayName
          }
        ),
        !row.hasCompensation && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "error.main", children: "No compensation set" }),
        row.hasCompensation && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
          row.daysWorked,
          "/",
          row.periodWorkingDays,
          " days",
          row.absentWorkingDays > 0 && ` · ${row.absentWorkingDays} off`
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(row.baseSalary) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: row.totalCommissions > 0 ? "success.main" : void 0, children: fCurrency(row.totalCommissions) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: row.totalOvertime > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "warning.dark", children: [
      "+",
      fCurrency(row.totalOvertime)
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: row.totalPenalties > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "error.main", children: [
      "-",
      fCurrency(row.totalPenalties)
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "primary.main", children: fCurrency(row.totalSalary) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: PAYROLL_STATUS_COLORS[status], children: status }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", gap: 0.5 }, children: [
      !row.isPaid && row.hasCompensation && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Pay", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", color: "primary", onClick: () => onPay(row), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:wallet-money-bold-duotone", width: 20 }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Sales history", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onViewSales(row), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:cart-bold-duotone", width: 20 }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "View profile", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onViewProfile(row.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:eye-bold", width: 20 }) }) })
    ] }) })
  ] });
}
PayrollTableRow.propTypes = {
  row: o.object.isRequired,
  selected: o.bool,
  onSelect: o.func,
  onPay: o.func,
  onViewProfile: o.func,
  onViewSales: o.func
};
const COMMISSION_RATE_MAP = {
  services: "services_commission_percent",
  product: "product_commission_percent",
  lash_lifting: "lash_lifting_commission_percent",
  lash_extension: "lash_extension_commission_percent",
  makeup_course: "makeup_course_commission_percent",
  bridal_eng: "bridal_eng_commission_percent"
};
const SERVICE_GROUP_TO_COMMISSION = {
  brides: "bridal_eng",
  makeup_course: "makeup_course",
  lash_lifting: "lash_lifting",
  lash_extension: "lash_extension"
};
function getSaleItemCategory(saleItem) {
  if (saleItem.product) return "product";
  const group = saleItem.service?.service_group;
  return SERVICE_GROUP_TO_COMMISSION[group] ?? "services";
}
function getCommissionRate(compensation, saleItem, serviceCommissionMap) {
  if (saleItem.product) return compensation?.product_commission_percent ?? 0;
  const serviceId = saleItem.service?.id;
  if (serviceId && serviceCommissionMap?.[serviceId] !== void 0) {
    return serviceCommissionMap[serviceId];
  }
  if (!compensation) return 0;
  const category = getSaleItemCategory(saleItem);
  const field = COMMISSION_RATE_MAP[category] ?? "services_commission_percent";
  return compensation[field] ?? 0;
}
function PayrollSalesDialog({ open, onClose, staffId, staffName, startDate, endDate }) {
  const { sales, salesLoading } = useStylistSales(staffId, startDate, endDate);
  const { compensation } = useGetEmployeeCompensation(staffId);
  const { serviceCommissions } = useStaffServiceCommissions(staffId);
  const { planUsages } = useGetStaffDiscountPlanCommissions(staffId, startDate, endDate);
  const serviceCommissionMap = reactExports.useMemo(
    () => serviceCommissions.reduce((acc, entry) => {
      acc[entry.service_id] = Number(entry.commission_percent);
      return acc;
    }, {}),
    [serviceCommissions]
  );
  const finalizedPlanKeys = reactExports.useMemo(
    () => new Set(
      (planUsages || []).filter((u) => u.client_discount_plans?.is_commission_finalized).map((u) => `${u.sale_id}:${u.service_id}`)
    ),
    [planUsages]
  );
  const totalRevenue = reactExports.useMemo(
    () => sales.reduce((sum, item) => sum + (item.line_total || 0), 0),
    [sales]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "lg", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { sx: { pb: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h6", children: [
          "Sales History — ",
          staffName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
          startDate,
          " to ",
          endDate
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { p: 0 }, children: salesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { sx: { py: 8 } }) : sales.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        title: "No sales found",
        description: "This staff member has no sales in the selected date range.",
        sx: { py: 8 }
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 800 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Sale #" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Product / Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Qty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Unit Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Commission" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: sales.map((saleItem) => {
          const clientName = saleItem.sale?.client ? `${saleItem.sale.client.first_name} ${saleItem.sale.client.last_name}` : "Unknown";
          const productName = saleItem.product?.name || saleItem.service?.name || "Unknown";
          const quantity = saleItem.quantity || 1;
          const isPaidViaPackage = !!saleItem.paid_via_package;
          const isPendingPackage = !isPaidViaPackage && saleItem.original_unit_price != null && Number(saleItem.line_total ?? 0) < 0.01;
          const isPlanDiscounted = !isPaidViaPackage && saleItem.original_unit_price != null && !isPendingPackage && Number(saleItem.discount_amount ?? 0) > 0;
          const isPackageItem = isPaidViaPackage || isPendingPackage;
          const displayPrice = isPendingPackage ? saleItem.original_unit_price : saleItem.unit_price || 0;
          const total = isPendingPackage ? 0 : saleItem.line_total ?? quantity * (saleItem.unit_price || 0);
          const commissionRate = getCommissionRate(
            compensation,
            saleItem,
            serviceCommissionMap
          );
          const paidTotal = isPackageItem || isPlanDiscounted ? total : getSaleItemPaidAmount(saleItem);
          const hasSaleDiscount = total - paidTotal >= 5e-3;
          const commissionAmt = isPackageItem || isPlanDiscounted ? 0 : paidTotal * (commissionRate / 100);
          const isPlanFinalized = finalizedPlanKeys.has(`${saleItem.sale_id}:${saleItem.service_id}`) || !!saleItem.discount_plan_value_updated;
          const planCommissionAmt = isPlanDiscounted ? isPlanFinalized ? Number(saleItem.line_total ?? 0) * (commissionRate / 100) : (Number(saleItem.original_unit_price ?? 0) * quantity - Number(saleItem.discount_amount ?? 0)) * (commissionRate / 100) : 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: saleItem.sale?.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                component: RouterLink,
                href: paths.dashboard.pos.saleDetails(saleItem.sale.id),
                variant: "body2",
                noWrap: true,
                sx: {
                  color: "primary.main",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" }
                },
                children: saleItem.sale.sale_number || "-"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "-" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(saleItem.sale?.created_at) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { sx: { width: 28, height: 28, fontSize: 12 }, children: clientName.charAt(0) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", noWrap: true, children: clientName })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: productName }),
              isPackageItem && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  sx: {
                    px: 0.75,
                    py: 0.25,
                    borderRadius: 0.75,
                    bgcolor: "info.lighter",
                    color: "info.dark",
                    display: "inline-block",
                    width: "fit-content"
                  },
                  children: "via package"
                }
              ),
              isPlanDiscounted && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  sx: {
                    px: 0.75,
                    py: 0.25,
                    borderRadius: 0.75,
                    bgcolor: "warning.lighter",
                    color: "warning.dark",
                    display: "inline-block",
                    width: "fit-content"
                  },
                  children: "via discount plan"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: quantity }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: isPendingPackage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, alignItems: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "body2",
                  sx: { textDecoration: "line-through", color: "text.disabled" },
                  children: fCurrency(displayPrice)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "info.main", children: "covered" })
            ] }) : isPlanDiscounted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, alignItems: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "body2",
                  sx: { textDecoration: "line-through", color: "text.disabled" },
                  children: fCurrency(saleItem.original_unit_price)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, alignItems: "center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(displayPrice) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "warning.dark", children: [
                  "-",
                  Math.round(
                    Number(saleItem.discount_amount) / (Number(saleItem.original_unit_price) * quantity) * 100
                  ),
                  "%"
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(displayPrice) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: hasSaleDiscount ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, alignItems: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "body2",
                  sx: { textDecoration: "line-through", color: "text.disabled" },
                  children: fCurrency(total)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(paidTotal) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "warning.dark", children: "sale discount" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(total) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: isPendingPackage ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "warning.main", children: "Pending finalization" }) : isPaidViaPackage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, alignItems: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "success.main", fontWeight: "600", children: fCurrency(total * (commissionRate / 100)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                commissionRate,
                "% · per-visit"
              ] })
            ] }) : isPlanDiscounted ? isPlanFinalized ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, alignItems: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "success.main", fontWeight: "600", children: fCurrency(planCommissionAmt) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                commissionRate,
                "%"
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "warning.main", children: "Pending finalization" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, alignItems: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "success.main", fontWeight: "600", children: fCurrency(commissionAmt) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                commissionRate,
                "%"
              ] })
            ] }) })
          ] }, `${saleItem.sale?.id}-${saleItem.id}`);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            px: 3,
            py: 2,
            borderTop: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "flex-end",
            gap: 4
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, alignItems: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Total Revenue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: "700", children: fCurrency(totalRevenue) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, alignItems: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Items" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: "700", children: sales.length })
            ] })
          ]
        }
      )
    ] }) })
  ] });
}
PayrollSalesDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  staffId: o.string,
  staffName: o.string,
  startDate: o.string,
  endDate: o.string
};
function PayrollRunView() {
  const router = useRouter();
  const { user } = useAuthContext();
  const { primaryBranch } = useUserBranches();
  const branchId = primaryBranch?.id;
  const organizationId = user?.primary_branch?.organization_id || user?.branches?.[0]?.organization_id;
  const [preset, setPreset] = reactExports.useState("month");
  const [customStart, setCustomStart] = reactExports.useState(null);
  const [customEnd, setCustomEnd] = reactExports.useState(null);
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [selected, setSelected] = reactExports.useState([]);
  const [payDialogRow, setPayDialogRow] = reactExports.useState(null);
  const [salesDialogRow, setSalesDialogRow] = reactExports.useState(null);
  const [bulkPaying, setBulkPaying] = reactExports.useState(false);
  const { start: startDate, end: endDate } = reactExports.useMemo(() => {
    if (customStart && customEnd) return { start: customStart, end: customEnd };
    return getPresetDates(preset);
  }, [preset, customStart, customEnd]);
  const handlePreset = reactExports.useCallback((value) => {
    setPreset(value);
    setCustomStart(null);
    setCustomEnd(null);
    setSelected([]);
  }, []);
  const startDateStr = startDate ? startDate.format("YYYY-MM-DD") : null;
  const endDateStr = endDate ? endDate.format("YYYY-MM-DD") : null;
  const { summaries, summariesLoading, summariesRefetch } = usePayrollSummaries(
    branchId,
    organizationId,
    startDateStr,
    endDateStr
  );
  const filteredSummaries = reactExports.useMemo(() => {
    if (statusFilter === "all") return summaries;
    if (statusFilter === "paid") return summaries.filter((s) => s.isPaid);
    return summaries.filter((s) => !s.isPaid);
  }, [summaries, statusFilter]);
  const totals = reactExports.useMemo(() => {
    const pending = filteredSummaries.filter((s) => !s.isPaid);
    return {
      totalPayroll: filteredSummaries.reduce((sum, s) => sum + s.totalSalary, 0),
      totalPending: pending.reduce((sum, s) => sum + s.totalSalary, 0),
      paidCount: filteredSummaries.filter((s) => s.isPaid).length,
      pendingCount: pending.length,
      totalCount: filteredSummaries.length
    };
  }, [filteredSummaries]);
  const selectableIds = reactExports.useMemo(
    () => filteredSummaries.filter((s) => !s.isPaid && s.hasCompensation).map((s) => s.id),
    [filteredSummaries]
  );
  const handleSelectAll = reactExports.useCallback(
    (event) => {
      setSelected(event.target.checked ? selectableIds : []);
    },
    [selectableIds]
  );
  const handleSelectOne = reactExports.useCallback((id) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]);
  }, []);
  const handlePaySingle = reactExports.useCallback((row) => {
    setPayDialogRow(row);
  }, []);
  const handleViewSales = reactExports.useCallback((row) => {
    setSalesDialogRow(row);
  }, []);
  const handleBulkPay = reactExports.useCallback(async () => {
    if (!selected.length) return;
    const toPay = summaries.filter((s) => selected.includes(s.id) && !s.isPaid);
    if (!toPay.length) return;
    setBulkPaying(true);
    let successCount = 0;
    let failCount = 0;
    for (const emp of toPay) {
      try {
        await createSalaryPayment({
          paymentData: {
            compensation_id: emp.compensationId,
            user_id: emp.id,
            branch_id: branchId,
            currency: emp.currency,
            amount: emp.totalSalary,
            payment_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
            payment_method: "bank_transfer",
            status: "paid",
            notes: `Payroll run: ${startDateStr} to ${endDateStr}`
          },
          addToExpenses: true,
          organizationId,
          createdBy: user?.id,
          staffName: emp.displayName
        });
        successCount += 1;
      } catch (err) {
        console.error(`Failed to pay ${emp.displayName}:`, err);
        failCount += 1;
      }
    }
    setBulkPaying(false);
    setSelected([]);
    if (successCount > 0) {
      toast.success(`${successCount} payment${successCount > 1 ? "s" : ""} recorded`);
    }
    if (failCount > 0) {
      toast.error(`${failCount} payment${failCount > 1 ? "s" : ""} failed`);
    }
    summariesRefetch();
  }, [
    selected,
    summaries,
    branchId,
    organizationId,
    user?.id,
    startDateStr,
    endDateStr,
    summariesRefetch
  ]);
  const handleViewProfile = reactExports.useCallback(
    (id) => {
      router.push(paths.dashboard.staff.profile(id));
    },
    [router]
  );
  const isAllSelected = selectableIds.length > 0 && selected.length === selectableIds.length;
  const isSomeSelected = selected.length > 0 && selected.length < selectableIds.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { maxWidth: "xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        backHref: "back",
        heading: "Payroll Run",
        links: [
          // { name: 'Dashboard', href: paths.dashboard.root },
          // { name: 'Staff', href: paths.dashboard.staff.root },
          // { name: 'Payroll Run' },
        ],
        sx: { mb: { xs: 2 } }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DateRangeControls,
        {
          preset,
          customStart,
          customEnd,
          onPresetChange: handlePreset,
          onCustomStartChange: setCustomStart,
          onCustomEndChange: setCustomEnd,
          loading: summariesLoading,
          cardProps: { sx: { mb: 0, p: 2 } }
        }
      ),
      !summariesLoading && summaries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            title: "Total Payroll",
            value: fCurrency(totals.totalPayroll),
            icon: "solar:wallet-bold-duotone",
            color: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            title: "Pending",
            value: `${totals.pendingCount} employees`,
            subtitle: fCurrency(totals.totalPending),
            icon: "solar:clock-circle-bold-duotone",
            color: "warning"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            title: "Paid",
            value: `${totals.paidCount} / ${totals.totalCount}`,
            icon: "solar:check-circle-bold-duotone",
            color: "success"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          sx: { px: 2.5, py: 2, borderBottom: 1, borderColor: "divider" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1, children: PAYROLL_STATUS_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "small",
                variant: statusFilter === opt.value ? "contained" : "outlined",
                color: statusFilter === opt.value ? "primary" : "inherit",
                onClick: () => {
                  setStatusFilter(opt.value);
                  setSelected([]);
                },
                children: [
                  opt.label,
                  opt.value === "pending" && totals.pendingCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { component: "span", variant: "caption", sx: { ml: 0.5, fontWeight: 700 }, children: [
                    "(",
                    totals.pendingCount,
                    ")"
                  ] })
                ]
              },
              opt.value
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
              selected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
                selected.length,
                " selected"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  title: selected.length === 0 ? "Select employees to pay" : `Pay ${selected.length} employee${selected.length > 1 ? "s" : ""}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "contained",
                      color: "primary",
                      disabled: selected.length === 0 || bulkPaying,
                      startIcon: bulkPaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16, color: "inherit" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:wallet-money-bold-duotone" }),
                      onClick: handleBulkPay,
                      children: bulkPaying ? "Processing..." : `Pay Selected (${selected.length})`
                    }
                  ) })
                }
              )
            ] })
          ]
        }
      ),
      summariesLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {}),
      !summariesLoading && filteredSummaries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          title: "No employees found",
          description: "No active employees with compensation data for this period.",
          sx: { py: 10 }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { sx: { overflow: "unset" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Table,
        {
          sx: {
            // minWidth: 960,
            minHeight: 640,
            flexGrow: { md: 1 },
            // height: { xs: 800, md: '1px' },
            flexDirection: { md: "column" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: PAYROLL_TABLE_HEADERS.map(
              (header) => header.id === "select" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", width: header.width, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  indeterminate: isSomeSelected,
                  checked: isAllSelected,
                  onChange: handleSelectAll,
                  disabled: selectableIds.length === 0
                }
              ) }, header.id) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                TableCell,
                {
                  align: header.align,
                  sx: {
                    width: header.width,
                    minWidth: header.minWidth
                  },
                  children: header.label
                },
                header.id
              )
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
              filteredSummaries.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                PayrollTableRow,
                {
                  row,
                  selected: selected.includes(row.id),
                  onSelect: () => handleSelectOne(row.id),
                  onPay: handlePaySingle,
                  onViewSales: handleViewSales,
                  onViewProfile: handleViewProfile
                },
                row.id
              )),
              filteredSummaries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  sx: {
                    bgcolor: "background.neutral",
                    "& td": { fontWeight: 600 }
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", children: [
                      "Total (",
                      filteredSummaries.length,
                      " employees)"
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(filteredSummaries.reduce((sum, s) => sum + s.baseSalary, 0)) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "success.main", children: fCurrency(
                      filteredSummaries.reduce((sum, s) => sum + s.totalCommissions, 0)
                    ) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "warning.dark", children: fCurrency(filteredSummaries.reduce((sum, s) => sum + s.totalOvertime, 0)) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "error.main", children: fCurrency(filteredSummaries.reduce((sum, s) => sum + s.totalPenalties, 0)) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "primary.main", children: fCurrency(totals.totalPayroll) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {})
                  ]
                }
              )
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PayrollSalesDialog,
      {
        open: !!salesDialogRow,
        onClose: () => setSalesDialogRow(null),
        staffId: salesDialogRow?.id,
        staffName: salesDialogRow?.displayName,
        startDate: startDateStr,
        endDate: endDateStr
      }
    ),
    payDialogRow && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SalaryPaymentFormDialog,
      {
        open: true,
        onClose: () => {
          setPayDialogRow(null);
          summariesRefetch();
        },
        compensationId: payDialogRow.compensationId,
        staffId: payDialogRow.id,
        branchId,
        currency: payDialogRow.currency,
        defaultAmount: payDialogRow.totalSalary,
        staffName: payDialogRow.displayName,
        onPaymentCreated: () => {
          summariesRefetch();
        }
      }
    )
  ] });
}
function SummaryCard({ title, value, subtitle, icon, color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, direction: "row", alignItems: "center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          width: 48,
          height: 48,
          borderRadius: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: (theme) => theme.palette[color].lighter,
          color: (theme) => theme.palette[color].main
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 24 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: subtitle })
    ] })
  ] }) });
}
const metadata = { title: `Payroll Run | Dashboard - ${CONFIG.appName}` };
function PayrollRunPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PayrollRunView, {})
  ] });
}
export {
  PayrollRunPage as default
};
