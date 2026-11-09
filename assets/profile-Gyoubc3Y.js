import { u as useSWR, s as supabase, m as mutate, r as reactExports, a0 as fCurrency, j as jsxRuntimeExports, c as Typography, an as fDate, L as Label, S as Stack, T as Tooltip, I as IconButton, a as Iconify, b as CircularProgress, M as MenuItem, K as Divider, B as Box, d as Button, y as Card, av as useAuthContext, t as toast, h as dayjs, bY as usePermissions, a2 as Chip, a5 as alpha, ar as Scrollbar, bm as ListItemText, U, d1 as checkUuidLastDigit, a6 as useUserBranches, a7 as LoadingScreen, bn as RoleBasedGuard, Z as RouterLink, a3 as paths, al as Avatar, ax as Alert, x as Select, d2 as usePathname, d3 as useSearchParams, a4 as DashboardContent, ao as CustomBreadcrumbs, ap as Tabs, aq as Tab, e as useParams, C as CONFIG } from "./index-B08HRm4A.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import "./toolbar-core-DGb1HZrD.js";
import { c as canEditStaffProfile, S as StaffEditForm } from "./add-staff-dialog-DqO2ChVh.js";
import "./filters-result-CQUV8kzX.js";
import { c as useStylistSales, d as useApprovedAbsences, e as useGetEmployeeLevels, f as countWorkingDays, g as countAbsentWorkingDays, h as useStaffPenalties, i as useStaffPenaltiesMutation, j as useGetStylistServices, k as useGetAllServices, l as useStylistServicesMutation, m as useEmployeeLevelMutation, n as useGetEmployeeProfile } from "./staff-hooks-CXExa9Nb.js";
import { u as useGetEmployeeCompensation, a as useGetCompensationSummary, D as DEFAULT_PAGE_SIZE, b as useGetSalaryPayments, P as PAYMENT_STATUS_COLORS, S as SalaryPaymentFormDialog, d as PAYMENT_METHOD_OPTIONS, e as useCheckPeriodPayment, f as useGetCommissionHistory, g as useEmployeeCompensationMutation } from "./salary-payment-form-dialog-NcmPdT7G.js";
import { o } from "./index-Di_Bgabu.js";
import { g as getPresetDates, D as DateRangeControls } from "./getPresetDates-BdaDk_3_.js";
import { b as TableRow, T as Table, a as TableHead, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { a as useForm, b as u, F as Form, d as useWatch, C as Controller } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { o as object, s as string, n as number, i as _enum, b as boolean, p as preprocess, a as array } from "./schemas-BVeYYbTr.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { L as LOCATION_TYPE_ICON } from "./render-location-type-B-TZb61z.js";
import { g as STYLIST_LEVELS, b as SERVICE_GROUPS, h as useGetServices } from "./services-UhlA7T7c.js";
import { K as KpiCardGrid } from "./KpiCard-D7DSr9FT.js";
import { i as isAdmin } from "./permissions-JWaLVC41.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
import { T as TablePagination } from "./TablePagination-BOFMLJYr.js";
import { F as useStaffServiceCommissions, H as upsertStaffServiceCommissions, I as deleteStaffServiceCommission, E as getSaleItemPaidAmount } from "./staff-service-CYDKVOm2.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { T as TextField, F as FormControl, I as InputLabel, b as FormHelperText } from "./TextField-CIuP940C.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { useGetStaffPackageCommissions } from "./package-service-U57UHzc2.js";
import { b as useGetStaffDiscountPlanCommissions } from "./discount-plan-service-DWSzNOBf.js";
import { S as StaffAvailability } from "./staff-availability-Bw-Sc8ip.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { L as LoadingButton } from "./LoadingButton-DJQpPOpu.js";
import { C as CardContent } from "./CardContent-tUS7qwlT.js";
import { T as Timeline, a as TimelineItem, b as TimelineSeparator, c as TimelineDot, d as TimelineConnector, e as TimelineContent, t as timelineItemClasses } from "./TimelineSeparator-CTCCP9HM.js";
import "./ExportPrint-CAqo1wR3.js";
import "./index-C4JOln-R.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./schema-utils-CG9_JlGr.js";
import "./stylist-color-picker-BOdxdsi0.js";
import "./AccordionDetails-O5tQthbm.js";
import "./user-service-BmyEAxOq.js";
import "./expense-service-B2nZjY_a.js";
import "./coerce-5-WTXoHr.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./with-selector-ClfCuV5M.js";
import "./confirm-dialog-BCXWHns4.js";
const TIER_PLAN_KEY = (branchId) => `salary-tier-plans-${branchId}`;
function computeTierForRevenue(revenue, tiers) {
  if (!tiers || tiers.length === 0) return null;
  const sorted = [...tiers].sort((a, b) => b.revenue_target - a.revenue_target);
  for (const tier of sorted) {
    if (revenue >= tier.revenue_target) return tier;
  }
  return null;
}
function resolveTierBranchId(staffBranches, fallbackBranchId = null) {
  const branches = staffBranches || [];
  const primary = branches.find((branch) => branch.is_primary) || branches[0];
  return primary?.branch_id ?? primary?.id ?? fallbackBranchId ?? null;
}
function getNextTier(revenue, tiers) {
  if (!tiers || tiers.length === 0) return null;
  const sorted = [...tiers].sort((a, b) => a.revenue_target - b.revenue_target);
  for (const tier of sorted) {
    if (tier.revenue_target > revenue) return tier;
  }
  return null;
}
async function fetchSalaryTierPlans(branchId) {
  const { data, error } = await supabase.from("salary_tier_plans").select("*").eq("branch_id", branchId).eq("is_active", true).order("revenue_target", { ascending: false });
  if (error) throw error;
  return data || [];
}
function useGetSalaryTierPlan(branchId) {
  const { data, error, isLoading } = useSWR(
    branchId ? TIER_PLAN_KEY(branchId) : null,
    () => fetchSalaryTierPlans(branchId)
  );
  return {
    tiers: data || [],
    tiersLoading: isLoading,
    tiersError: error
  };
}
async function createSalaryTier(branchId, tierData) {
  const { data, error } = await supabase.from("salary_tier_plans").insert([{ ...tierData, branch_id: branchId }]).select().single();
  if (error) throw error;
  mutate(TIER_PLAN_KEY(branchId));
  return data;
}
async function updateSalaryTier(id, branchId, tierData) {
  const { data, error } = await supabase.from("salary_tier_plans").update({ ...tierData, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id).select().single();
  if (error) throw error;
  mutate(TIER_PLAN_KEY(branchId));
  return data;
}
async function deleteSalaryTier(id, branchId) {
  const { error } = await supabase.from("salary_tier_plans").delete().eq("id", id);
  if (error) throw error;
  mutate(TIER_PLAN_KEY(branchId));
}
async function fetchStaffOvertime(userId, branchId, startDate, endDate) {
  const { data, error } = await supabase.from("staff_overtime").select("*").eq("user_id", userId).eq("branch_id", branchId).gte("date", startDate).lte("date", endDate).is("deleted_at", null).order("date", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function createOvertimeRecord({
  userId,
  branchId,
  organizationId,
  date,
  hours,
  useManualAmount,
  hourlyRate,
  rateMultiplier,
  manualAmount,
  totalAmount,
  reason,
  notes,
  issuedBy
}) {
  const { data, error } = await supabase.from("staff_overtime").insert([
    {
      user_id: userId,
      branch_id: branchId,
      organization_id: organizationId,
      date,
      hours: Number(hours),
      use_manual_amount: useManualAmount,
      hourly_rate: useManualAmount ? null : Number(hourlyRate),
      rate_multiplier: useManualAmount ? null : Number(rateMultiplier),
      manual_amount: useManualAmount ? Number(manualAmount) : null,
      total_amount: Number(totalAmount),
      reason,
      notes: notes || null,
      issued_by: issuedBy || null
    }
  ]).select().single();
  if (error) throw error;
  return data;
}
async function updateOvertimeRecord(id, {
  date,
  hours,
  useManualAmount,
  hourlyRate,
  rateMultiplier,
  manualAmount,
  totalAmount,
  reason,
  notes
}) {
  const { data, error } = await supabase.from("staff_overtime").update({
    date,
    hours: Number(hours),
    use_manual_amount: useManualAmount,
    hourly_rate: useManualAmount ? null : Number(hourlyRate),
    rate_multiplier: useManualAmount ? null : Number(rateMultiplier),
    manual_amount: useManualAmount ? Number(manualAmount) : null,
    total_amount: Number(totalAmount),
    reason,
    notes: notes || null
  }).eq("id", id).select().single();
  if (error) throw error;
  return data;
}
async function markOvertimeAsPaid(overtimeIds, salaryPaymentId) {
  if (!overtimeIds?.length) return;
  const { error } = await supabase.from("staff_overtime").update({ salary_payment_id: salaryPaymentId }).in("id", overtimeIds).is("salary_payment_id", null);
  if (error) throw error;
}
async function softDeleteOvertimeRecord(id) {
  const { error } = await supabase.rpc("soft_delete_overtime_record", {
    p_overtime_id: id
  });
  if (error) throw error;
}
const overtimeKey = (userId, branchId, startDate, endDate) => `staff-overtime-${userId}-${branchId}-${startDate}-${endDate}`;
function useStaffOvertime(staffId, branchId, startDate, endDate) {
  const key = staffId && branchId && startDate && endDate ? overtimeKey(staffId, branchId, startDate, endDate) : null;
  const {
    data,
    isLoading,
    mutate: mutateOvertime
  } = useSWR(key, () => fetchStaffOvertime(staffId, branchId, startDate, endDate), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  return {
    overtimeRecords: data || [],
    overtimeLoading: isLoading,
    overtimeRefetch: mutateOvertime
  };
}
function useStaffOvertimeMutation() {
  const addOvertime = reactExports.useCallback(
    async ({ staffId, branchId, organizationId, issuedBy, ...data }) => {
      const result = await createOvertimeRecord({
        userId: staffId,
        branchId,
        organizationId,
        issuedBy,
        ...data
      });
      mutate(
        (key) => typeof key === "string" && key.startsWith(`staff-overtime-${staffId}`),
        void 0,
        { revalidate: true }
      );
      return result;
    },
    []
  );
  const editOvertime = reactExports.useCallback(async (overtimeId, staffId, formData) => {
    const result = await updateOvertimeRecord(overtimeId, formData);
    mutate(
      (key) => typeof key === "string" && key.startsWith(`staff-overtime-${staffId}`),
      void 0,
      { revalidate: true }
    );
    return result;
  }, []);
  const removeOvertime = reactExports.useCallback(async (overtimeId, staffId) => {
    await softDeleteOvertimeRecord(overtimeId);
    mutate(
      (key) => typeof key === "string" && key.startsWith(`staff-overtime-${staffId}`),
      void 0,
      { revalidate: true }
    );
  }, []);
  return { addOvertime, editOvertime, removeOvertime };
}
function OvertimeTableRow({ row, onEdit, onDelete, isDeleting, canEdit }) {
  const {
    date,
    hours,
    total_amount,
    use_manual_amount,
    hourly_rate,
    rate_multiplier,
    reason,
    notes,
    salary_payment_id
  } = row;
  const isPaid = Boolean(salary_payment_id);
  const rateDetail = use_manual_amount ? "Manual amount" : `${fCurrency(hourly_rate)}/hr × ${rate_multiplier}x`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(date) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, children: [
      Number(hours).toFixed(1),
      "h"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: rateDetail }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { sx: { maxWidth: 240 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: reason }),
      notes && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", children: notes })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, color: "success.main", children: [
      "+",
      fCurrency(total_amount)
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: isPaid ? "success" : "warning", children: isPaid ? "Paid" : "Unpaid" }) }),
    canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, justifyContent: "flex-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: isPaid ? "Cannot edit a paid record" : "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onEdit(row), disabled: isPaid, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 18 }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: isPaid ? "Cannot delete a paid record" : "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          size: "small",
          color: "error",
          onClick: () => onDelete(row.id),
          disabled: isDeleting || isPaid,
          children: isDeleting ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 18 })
        }
      ) }) })
    ] }) })
  ] });
}
OvertimeTableRow.propTypes = {
  row: o.object.isRequired,
  onEdit: o.func.isRequired,
  onDelete: o.func.isRequired,
  isDeleting: o.bool,
  canEdit: o.bool
};
const OvertimeSchema = object({
  date: string().min(1, "Date is required"),
  hours: number({ invalid_type_error: "Hours is required" }).min(0.5, "Minimum 0.5 hours").max(24, "Maximum 24 hours"),
  calculation_mode: _enum(["auto", "manual"]),
  hourly_rate: number().min(0, "Must be 0 or more").nullable().optional(),
  rate_multiplier: number().min(1, "Multiplier must be at least 1x").nullable().optional(),
  manual_amount: number().min(0.01, "Amount must be greater than 0").nullable().optional(),
  reason: string().min(1, "Reason is required"),
  notes: string().optional()
}).superRefine((data, ctx) => {
  if (data.calculation_mode === "auto") {
    if (!data.hourly_rate || data.hourly_rate <= 0) {
      ctx.addIssue({
        code: "custom",
        message: "Hourly rate is required",
        path: ["hourly_rate"]
      });
    }
    if (!data.rate_multiplier || data.rate_multiplier < 1) {
      ctx.addIssue({
        code: "custom",
        message: "Rate multiplier is required",
        path: ["rate_multiplier"]
      });
    }
  }
  if (data.calculation_mode === "manual") {
    if (!data.manual_amount || data.manual_amount <= 0) {
      ctx.addIssue({
        code: "custom",
        message: "Amount is required",
        path: ["manual_amount"]
      });
    }
  }
});
const RATE_MULTIPLIER_OPTIONS = [
  { value: 1, label: "1.0x — Straight time" },
  { value: 1.5, label: "1.5x — Time and a half" },
  { value: 2, label: "2.0x — Double time" },
  { value: 2.5, label: "2.5x — Double time and a half" },
  { value: 3, label: "3.0x — Triple time" }
];
const OVERTIME_DEFAULT_VALUES = {
  date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
  hours: null,
  calculation_mode: "auto",
  hourly_rate: null,
  rate_multiplier: 1,
  manual_amount: null,
  reason: "",
  notes: ""
};
const DEFAULT_MONTHLY_HOURS = 208;
function overtimeToFormValues(overtime, suggestedHourlyRate) {
  if (!overtime) {
    return {
      ...OVERTIME_DEFAULT_VALUES,
      hourly_rate: suggestedHourlyRate != null ? Number(suggestedHourlyRate.toFixed(4)) : null
    };
  }
  return {
    date: overtime.date,
    hours: overtime.hours != null ? Number(overtime.hours) : null,
    calculation_mode: overtime.use_manual_amount ? "manual" : "auto",
    hourly_rate: overtime.hourly_rate != null ? Number(overtime.hourly_rate) : null,
    rate_multiplier: overtime.rate_multiplier != null ? Number(overtime.rate_multiplier) : 1.5,
    manual_amount: overtime.manual_amount != null ? Number(overtime.manual_amount) : null,
    reason: overtime.reason ?? "",
    notes: overtime.notes ?? ""
  };
}
function OvertimeFormDialog({
  open,
  onClose,
  onSubmit,
  isSubmitting,
  currentOvertime,
  suggestedHourlyRate
}) {
  const isEditing = Boolean(currentOvertime);
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(OvertimeSchema),
    defaultValues: OVERTIME_DEFAULT_VALUES
  });
  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting: formSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    reset(overtimeToFormValues(currentOvertime, suggestedHourlyRate));
  }, [currentOvertime, suggestedHourlyRate, reset]);
  const calculationMode = watch("calculation_mode");
  const hours = watch("hours");
  const hourlyRate = watch("hourly_rate");
  const rateMultiplier = watch("rate_multiplier");
  const manualAmount = watch("manual_amount");
  const previewTotal = reactExports.useMemo(() => {
    if (calculationMode === "manual") {
      return Number(manualAmount) || 0;
    }
    const h = Number(hours) || 0;
    const r = Number(hourlyRate) || 0;
    const m = Number(rateMultiplier) || 1;
    return h * r * m;
  }, [calculationMode, hours, hourlyRate, rateMultiplier, manualAmount]);
  const handleClose = () => {
    reset(OVERTIME_DEFAULT_VALUES);
    onClose();
  };
  const onFormSubmit = handleSubmit(async (data) => {
    const useManualAmount = data.calculation_mode === "manual";
    const totalAmount = useManualAmount ? Number(data.manual_amount) : Number(data.hours) * Number(data.hourly_rate) * Number(data.rate_multiplier);
    await onSubmit({
      date: data.date,
      hours: Number(data.hours),
      useManualAmount,
      hourlyRate: useManualAmount ? null : Number(data.hourly_rate),
      rateMultiplier: useManualAmount ? null : Number(data.rate_multiplier),
      manualAmount: useManualAmount ? Number(data.manual_amount) : null,
      totalAmount,
      reason: data.reason,
      notes: data.notes || null
    });
    reset(OVERTIME_DEFAULT_VALUES);
  });
  const hourlyRateHelperText = suggestedHourlyRate ? `Auto-derived from base salary ÷ ${DEFAULT_MONTHLY_HOURS}h/month = ${fCurrency(suggestedHourlyRate)}/hr` : "Enter the hourly rate for this employee";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEditing ? "Edit Overtime" : "Add Overtime" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit: onFormSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "date", label: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "hours",
            label: "Overtime Hours",
            type: "number",
            inputProps: { step: "0.5", min: "0.5", max: "24" },
            InputProps: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "hrs" })
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "calculation_mode", label: "Calculation Mode", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "auto", children: "Calculated (hourly rate × hours × multiplier)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "manual", children: "Manual flat amount" })
        ] }),
        calculationMode === "auto" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "hourly_rate",
              label: "Hourly Rate",
              type: "number",
              inputProps: { step: "0.01", min: "0" },
              helperText: hourlyRateHelperText,
              InputProps: {
                startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "rate_multiplier", label: "Overtime Rate Multiplier", children: RATE_MULTIPLIER_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value)) })
        ] }),
        calculationMode === "manual" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "manual_amount",
            label: "Overtime Amount",
            type: "number",
            inputProps: { step: "0.01", min: "0.01" },
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              p: 2,
              borderRadius: 1,
              bgcolor: "background.neutral",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Total Overtime Payout" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "subtitle1",
                  fontWeight: 700,
                  color: previewTotal > 0 ? "success.main" : "text.disabled",
                  children: previewTotal > 0 ? `+${fCurrency(previewTotal)}` : "—"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "reason", label: "Reason", multiline: true, rows: 2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "notes", label: "Notes (optional)", multiline: true, rows: 2 })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: formSubmitting || isSubmitting, children: formSubmitting || isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 20, color: "inherit" }) : isEditing ? "Save Changes" : "Add Overtime" })
      ] })
    ] })
  ] });
}
OvertimeFormDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  onSubmit: o.func.isRequired,
  isSubmitting: o.bool,
  currentOvertime: o.object,
  suggestedHourlyRate: o.number
};
function SummaryItem({ icon, label, value, color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "center", spacing: 0.75, sx: { flex: 1, py: 1 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 28, sx: { color: color || "text.secondary" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", fontWeight: 700, color: color || "text.primary", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", textAlign: "center", lineHeight: 1.3, children: label })
  ] });
}
SummaryItem.propTypes = {
  icon: o.string.isRequired,
  label: o.string.isRequired,
  value: o.string.isRequired,
  color: o.string
};
function OvertimeSummaryCard({ totalHours, totalAmount, unpaidCount, unpaidAmount }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Stack,
    {
      direction: { xs: "column", sm: "row" },
      divider: /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { orientation: "vertical", flexItem: true }),
      spacing: 2,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryItem,
          {
            icon: "solar:clock-square-bold-duotone",
            label: "Total Overtime Hours",
            value: `${Number(totalHours).toFixed(1)}h`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryItem,
          {
            icon: "solar:wallet-money-bold-duotone",
            label: "Total Overtime Pay",
            value: fCurrency(totalAmount),
            color: "success.main"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryItem,
          {
            icon: "solar:bill-list-bold-duotone",
            label: "Unpaid Records",
            value: String(unpaidCount),
            color: unpaidCount > 0 ? "warning.main" : void 0
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryItem,
          {
            icon: "solar:card-recive-bold-duotone",
            label: "Unpaid Amount",
            value: fCurrency(unpaidAmount),
            color: unpaidAmount > 0 ? "warning.main" : void 0
          }
        )
      ]
    }
  ) });
}
OvertimeSummaryCard.propTypes = {
  totalHours: o.number.isRequired,
  totalAmount: o.number.isRequired,
  unpaidCount: o.number.isRequired,
  unpaidAmount: o.number.isRequired
};
function StaffOvertime({ staffId, branchId, organizationId, baseSalary, isAdmin: isAdmin2 }) {
  const { user } = useAuthContext();
  const [preset, setPreset] = reactExports.useState("month");
  const [customStart, setCustomStart] = reactExports.useState(null);
  const [customEnd, setCustomEnd] = reactExports.useState(null);
  const { start: startDate, end: endDate } = reactExports.useMemo(() => {
    if (customStart && customEnd) return { start: customStart, end: customEnd };
    return getPresetDates(preset);
  }, [preset, customStart, customEnd]);
  const startDateStr = startDate ? startDate.format("YYYY-MM-DD") : null;
  const endDateStr = endDate ? endDate.format("YYYY-MM-DD") : null;
  const handlePreset = reactExports.useCallback((value) => {
    setPreset(value);
    setCustomStart(null);
    setCustomEnd(null);
  }, []);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [editingRecord, setEditingRecord] = reactExports.useState(null);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const { overtimeRecords, overtimeLoading } = useStaffOvertime(
    staffId,
    branchId,
    startDateStr,
    endDateStr
  );
  const { addOvertime, editOvertime, removeOvertime } = useStaffOvertimeMutation();
  const suggestedHourlyRate = reactExports.useMemo(
    () => baseSalary ? Number((baseSalary / DEFAULT_MONTHLY_HOURS).toFixed(4)) : null,
    [baseSalary]
  );
  const summary = reactExports.useMemo(() => {
    const totalHours = overtimeRecords.reduce((sum, r) => sum + Number(r.hours), 0);
    const totalAmount = overtimeRecords.reduce((sum, r) => sum + Number(r.total_amount), 0);
    const unpaid = overtimeRecords.filter((r) => !r.salary_payment_id);
    return {
      totalHours,
      totalAmount,
      unpaidCount: unpaid.length,
      unpaidAmount: unpaid.reduce((sum, r) => sum + Number(r.total_amount), 0)
    };
  }, [overtimeRecords]);
  const handleOpenAdd = reactExports.useCallback(() => {
    setEditingRecord(null);
    setDialogOpen(true);
  }, []);
  const handleOpenEdit = reactExports.useCallback((record) => {
    setEditingRecord(record);
    setDialogOpen(true);
  }, []);
  const handleClose = reactExports.useCallback(() => {
    setDialogOpen(false);
    setEditingRecord(null);
  }, []);
  const handleSubmit = reactExports.useCallback(
    async (data) => {
      setIsSubmitting(true);
      try {
        if (editingRecord) {
          await editOvertime(editingRecord.id, staffId, data);
          toast.success("Overtime updated successfully");
        } else {
          await addOvertime({
            staffId,
            branchId,
            organizationId,
            issuedBy: user?.id,
            ...data
          });
          toast.success("Overtime added successfully");
        }
        handleClose();
      } catch (error) {
        console.error("Error saving overtime:", error);
        toast.error(editingRecord ? "Failed to update overtime" : "Failed to add overtime");
        throw error;
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      editingRecord,
      editOvertime,
      addOvertime,
      staffId,
      branchId,
      organizationId,
      user?.id,
      handleClose
    ]
  );
  const handleDelete = reactExports.useCallback(
    async (recordId) => {
      setDeletingId(recordId);
      try {
        await removeOvertime(recordId, staffId);
        toast.success("Overtime record removed");
      } catch (error) {
        console.error("Error removing overtime:", error);
        toast.error("Failed to remove overtime record");
      } finally {
        setDeletingId(null);
      }
    },
    [removeOvertime, staffId]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { mt: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DateRangeControls,
        {
          preset,
          customStart,
          customEnd,
          onPresetChange: handlePreset,
          onCustomStartChange: setCustomStart,
          onCustomEndChange: setCustomEnd,
          loading: overtimeLoading,
          cardProps: { sx: { mb: 0, p: 2 } }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OvertimeSummaryCard, { ...summary }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 3, pb: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: { xs: "column", sm: "row" },
            alignItems: { sm: "center" },
            justifyContent: "space-between",
            gap: 2,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Iconify,
                  {
                    icon: "solar:clock-square-bold-duotone",
                    width: 24,
                    sx: { color: "warning.main" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Overtime Records" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", spacing: 2, flexWrap: "wrap", children: isAdmin2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "contained",
                  color: "warning",
                  size: "small",
                  startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
                  onClick: handleOpenAdd,
                  children: "Add Overtime"
                }
              ) })
            ]
          }
        ) }),
        overtimeLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) }) : overtimeRecords.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyContent,
          {
            title: "No overtime records",
            description: "No overtime has been recorded for this period.",
            sx: { py: 6 }
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 720 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Rate Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Reason" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Payout" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Status" }),
            isAdmin2 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: overtimeRecords.map((record) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            OvertimeTableRow,
            {
              row: record,
              onEdit: handleOpenEdit,
              onDelete: handleDelete,
              isDeleting: deletingId === record.id,
              canEdit: isAdmin2
            },
            record.id
          )) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      OvertimeFormDialog,
      {
        open: dialogOpen,
        onClose: handleClose,
        onSubmit: handleSubmit,
        isSubmitting,
        currentOvertime: editingRecord,
        suggestedHourlyRate
      }
    )
  ] });
}
StaffOvertime.propTypes = {
  staffId: o.string.isRequired,
  branchId: o.string,
  organizationId: o.string,
  baseSalary: o.number,
  isAdmin: o.bool
};
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
function getCommissionRate$1(compensation, saleItem) {
  if (!compensation) return 0;
  const category = getSaleItemCategory$1(saleItem);
  const field = COMMISSION_RATE_MAP$1[category] ?? "services_commission_percent";
  return compensation[field] ?? 0;
}
({
  color: o.string,
  icon: o.string,
  loading: o.bool,
  subtitle: o.string,
  title: o.string,
  value: o.any
});
function InfoItem({ icon, label, value }) {
  if (!value) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.5, alignItems: "flex-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { color: "text.disabled", mt: 0.3, flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 18 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          variant: "caption",
          sx: {
            color: "text.disabled",
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "0.5px"
          },
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: value })
    ] })
  ] });
}
InfoItem.propTypes = {
  icon: o.string,
  label: o.string,
  value: o.any
};
function SummaryRow({ label, value, highlighted, last }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1.5,
        ...!last && { borderBottom: "1px dashed", borderColor: "divider" }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: highlighted ? "subtitle2" : "body2",
            color: highlighted ? "text.primary" : "text.secondary",
            children: label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: highlighted ? "subtitle2" : "body2",
            fontWeight: highlighted ? 700 : 600,
            color: highlighted ? "primary.main" : "text.primary",
            children: value
          }
        )
      ]
    }
  );
}
SummaryRow.propTypes = {
  highlighted: o.bool,
  label: o.string,
  last: o.bool,
  value: o.any
};
function StaffGeneral({ staffData }) {
  const staffId = staffData?.id;
  const now = dayjs();
  const startDate = now.startOf("month");
  const endDate = now.endOf("month");
  const startStr = startDate.format("YYYY-MM-DD");
  const endStr = endDate.format("YYYY-MM-DD");
  const monthLabel = now.format("MMMM YYYY");
  const primaryBranch = staffData?.branches?.find((b) => b.is_primary);
  const primaryBranchId = primaryBranch?.branch_id;
  const { sales, salesLoading } = useStylistSales(staffId, startStr, endStr);
  const { absences, absencesLoading } = useApprovedAbsences(staffId, startStr, endStr);
  const { compensation } = useGetEmployeeCompensation(staffId);
  const { compensationSummary } = useGetCompensationSummary(
    staffId,
    primaryBranchId,
    startStr,
    endStr
  );
  const { employeeLevels } = useGetEmployeeLevels(staffId);
  const { isAdmin: isAdminUser } = usePermissions();
  const stats = reactExports.useMemo(() => {
    const salesRevenue = sales?.reduce((s, item) => s + (item.line_total || 0), 0) ?? 0;
    const totalSales = sales?.length ?? 0;
    let totalCommissions = 0;
    sales?.forEach((item) => {
      const lineTotal = item.line_total || (item.quantity || 1) * (item.unit_price || 0);
      totalCommissions += lineTotal * (getCommissionRate$1(compensation, item) / 100);
    });
    const periodWorkingDays = countWorkingDays(startDate, endDate);
    const absentDays = countAbsentWorkingDays(absences, startDate, endDate);
    const daysWorked = Math.max(0, periodWorkingDays - absentDays);
    const baseSalary = compensationSummary?.base_salary ?? 0;
    const proratedBase = periodWorkingDays > 0 ? baseSalary * daysWorked / periodWorkingDays : baseSalary;
    const totalSalary = proratedBase + totalCommissions;
    return {
      salesRevenue,
      totalSales,
      totalCommissions,
      absentDays,
      daysWorked,
      periodWorkingDays,
      baseSalary,
      proratedBase,
      totalSalary
    };
  }, [sales, compensation, compensationSummary, absences, startDate, endDate]);
  const getLevelForBranch = (branchId) => {
    const cur = employeeLevels?.find((l) => !l.effective_until && l.branch_id === branchId);
    if (!cur) return null;
    return STYLIST_LEVELS.find((l) => l.value === cur.stylist_level) ?? null;
  };
  const fullAddress = [
    staffData?.address,
    staffData?.city,
    staffData?.state,
    staffData?.postal_code,
    staffData?.country
  ].filter(Boolean).join(", ");
  compensation ? [
    ["Services", compensation.services_commission_percent],
    ["Products", compensation.product_commission_percent],
    ["Lash Lifting", compensation.lash_lifting_commission_percent],
    ["Lash Extension", compensation.lash_extension_commission_percent],
    ["Makeup Course", compensation.makeup_course_commission_percent],
    ["Bridal / Eng.", compensation.bridal_eng_commission_percent]
  ].filter(([, rate]) => rate != null && rate > 0) : [];
  const kpiCards = [
    {
      label: "Revenue Generated",
      value: fCurrency(stats.salesRevenue),
      icon: "solar:dollar-minimalistic-bold-duotone",
      note: `${monthLabel} `,
      color: "success.main",
      bgColor: "rgba(34,197,94,0.08)"
    },
    {
      label: "Total Sales",
      value: stats.totalSales,
      icon: "solar:bag-bold-duotone",
      note: "Services & products",
      color: "info.main",
      bgColor: "rgba(34,197,94,0.08)"
    },
    {
      label: "Commissions Earned",
      value: fCurrency(stats.totalCommissions),
      icon: "solar:medal-ribbon-bold-duotone",
      note: monthLabel,
      color: "warning.main",
      bgColor: "rgba(250,204,21,0.08)",
      adminOnly: true
    },
    {
      label: "Absent Days",
      value: stats.absentDays,
      icon: "solar:calendar-mark-bold-duotone",
      note: `${stats.daysWorked} worked · ${stats.periodWorkingDays} total`,
      color: "error.main",
      bgColor: "rgba(220,38,38,0.08)"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, sx: { mt: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      KpiCardGrid,
      {
        sx: { mb: 0 },
        cards: kpiCards.filter((c) => !c.adminOnly || isAdminUser),
        loading: absencesLoading,
        columns: { xs: 12, sm: 6, lg: isAdmin ? 3 : 4 }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                width: 36,
                height: 36,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "primary.lighter",
                color: "primary.main"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:user-id-bold-duotone", width: 20 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Personal Information" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Staff details and contact" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Iconify,
              {
                icon: staffData?.status === "active" ? "solar:check-circle-bold-duotone" : "solar:close-circle-bold-duotone",
                width: 16
              }
            ),
            label: staffData?.status || "unknown",
            color: staffData?.status === "active" ? "success" : "default",
            size: "small",
            variant: "soft",
            sx: { textTransform: "capitalize", flexShrink: 0 }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InfoItem, { icon: "solar:phone-bold", label: "Phone", value: staffData?.phone }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InfoItem, { icon: "solar:letter-bold", label: "Email", value: staffData?.email }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          InfoItem,
          {
            icon: "solar:calendar-bold",
            label: "Date of Birth",
            value: staffData?.date_of_birth ? fDate(staffData.date_of_birth) : null
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          InfoItem,
          {
            icon: "solar:user-bold",
            label: "Gender",
            value: staffData?.gender ? staffData.gender.charAt(0).toUpperCase() + staffData.gender.slice(1) : null
          }
        ) }),
        fullAddress && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InfoItem, { icon: "solar:map-point-bold", label: "Address", value: fullAddress }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: "solar:shield-check-bold-duotone",
              width: 20,
              sx: { color: "secondary.main" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 700 }, children: "Assigned Roles" })
        ] }),
        staffData?.roles?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, children: staffData.roles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:shield-check-linear", width: 14 }),
            label: role.replace(/_/g, " "),
            color: "primary",
            size: "small",
            variant: "outlined",
            sx: {
              textTransform: "capitalize",
              fontWeight: 600,
              borderColor: "primary.light"
            }
          },
          role
        )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "No roles assigned" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              width: 36,
              height: 36,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "info.lighter",
              color: "info.main"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:buildings-2-bold-duotone", width: 20 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Branch Access" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, children: staffData?.branches?.length ? staffData.branches.map((branch) => {
        getLevelForBranch(branch.branch_id);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              p: 2,
              borderRadius: 1.5,
              border: "1px solid",
              borderColor: branch.is_primary ? "primary.light" : "divider",
              bgcolor: (theme) => branch.is_primary ? alpha(theme.palette["primary"].main, 0.12) : "background.neutral"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Iconify,
                  {
                    icon: LOCATION_TYPE_ICON[branch.location_type],
                    width: 20,
                    sx: {
                      color: branch.is_primary ? "primary.main" : "text.secondary"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: branch.branch_name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.75, flexWrap: "wrap", useFlexGap: true, children: branch.is_primary && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Primary", color: "primary", size: "small", variant: "soft" }) })
            ] }) })
          },
          branch.branch_id
        );
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "No branches assigned" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: isAdminUser ? 6 : 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              width: 36,
              height: 36,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "info.lighter",
              color: "info.main"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:chart-2-bold-duotone", width: 20 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h6", children: [
            monthLabel,
            " Snapshot"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Current month at a glance" })
        ] })
      ] }),
      salesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", height: 28 }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Revenue Generated", value: fCurrency(stats.salesRevenue) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Total Sales", value: stats.totalSales }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Commissions Earned", value: fCurrency(stats.totalCommissions) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Working Days (period)", value: stats.periodWorkingDays }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Days Worked", value: stats.daysWorked }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Absent Days", value: stats.absentDays }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Prorated Base Salary", value: fCurrency(stats.proratedBase) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryRow,
          {
            label: "Est. Total Pay",
            value: fCurrency(stats.totalSalary),
            highlighted: true,
            last: true
          }
        )
      ] })
    ] }) }) })
  ] });
}
StaffGeneral.propTypes = {
  staffData: o.shape({
    address: o.string,
    branches: o.array,
    city: o.string,
    country: o.string,
    date_of_birth: o.string,
    email: o.string,
    gender: o.string,
    id: o.string,
    phone: o.string,
    postal_code: o.string,
    roles: o.array,
    state: o.string,
    status: o.string
  })
};
const emptyToNull = (val) => {
  if (val === "" || val === null || val === void 0) return null;
  const parsed = typeof val === "string" ? parseFloat(val) : val;
  return Number.isNaN(parsed) ? null : parsed;
};
const nullableNumber = (schema) => preprocess(emptyToNull, schema.nullable());
const commissionPercent = () => nullableNumber(
  number().min(0, { message: "Commission must be at least 0%" }).max(100, { message: "Commission cannot exceed 100%" })
);
const SalarySchema = object({
  base_salary: nullableNumber(number().min(0, { message: "Base salary must be at least 0" })),
  currency: string().min(1, { message: "Currency is required" }),
  payment_frequency: _enum(["weekly", "bi_weekly", "monthly"], {
    errorMap: () => ({ message: "Payment frequency is required" })
  }),
  services_commission_percent: commissionPercent(),
  product_commission_percent: commissionPercent(),
  lash_lifting_commission_percent: commissionPercent(),
  lash_extension_commission_percent: commissionPercent(),
  makeup_course_commission_percent: commissionPercent(),
  bridal_eng_commission_percent: commissionPercent(),
  use_tiered_salary: boolean().optional(),
  notes: string().optional()
});
const COMMISSION_FIELDS = [
  {
    name: "services_commission_percent",
    label: "Services Commission (%)",
    placeholder: "e.g., 50"
  },
  {
    name: "product_commission_percent",
    label: "Product Commission (%)",
    placeholder: "e.g., 10"
  },
  {
    name: "lash_lifting_commission_percent",
    label: "Lash Lifting Commission (%)",
    placeholder: "e.g., 20"
  },
  {
    name: "lash_extension_commission_percent",
    label: "Lash Extension Commission (%)",
    placeholder: "e.g., 0"
  },
  {
    name: "makeup_course_commission_percent",
    label: "Makeup Course Commission (%)",
    placeholder: "e.g., 0"
  },
  {
    name: "bridal_eng_commission_percent",
    label: "Bridal/Engagement Commission (%)",
    placeholder: "e.g., 50"
  }
];
const PAYMENT_FREQUENCY_OPTIONS = [
  { value: "weekly", label: "Weekly" },
  { value: "bi_weekly", label: "Bi-weekly" },
  { value: "monthly", label: "Monthly" }
];
function StaffSalaryForm({ currentSalary, onSave, onCancel, isLoading = false }) {
  const defaultValues = {
    base_salary: currentSalary?.base_salary ?? null,
    currency: currentSalary?.currency || "USD",
    payment_frequency: currentSalary?.payment_frequency || "monthly",
    services_commission_percent: currentSalary?.services_commission_percent ?? null,
    product_commission_percent: currentSalary?.product_commission_percent ?? null,
    lash_lifting_commission_percent: currentSalary?.lash_lifting_commission_percent ?? null,
    lash_extension_commission_percent: currentSalary?.lash_extension_commission_percent ?? null,
    makeup_course_commission_percent: currentSalary?.makeup_course_commission_percent ?? null,
    bridal_eng_commission_percent: currentSalary?.bridal_eng_commission_percent ?? null,
    use_tiered_salary: currentSalary?.use_tiered_salary ?? false,
    notes: currentSalary?.notes || ""
  };
  const methods = useForm({
    resolver: u(SalarySchema),
    defaultValues
  });
  const { handleSubmit, reset, control } = methods;
  const useTieredSalary = useWatch({ control, name: "use_tiered_salary" });
  const onSubmit = reactExports.useCallback(
    async (data) => {
      try {
        await onSave(data);
        reset();
      } catch (error) {
        console.error("Error saving salary:", error);
      }
    },
    [onSave, reset]
  );
  const handleCancel = () => {
    reset();
    onCancel();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, mt: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Salary & Commission Structure" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", gutterBottom: true, children: "Base Salary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "base_salary",
              label: "Base Salary Amount",
              type: "number",
              placeholder: "1000.00",
              InputProps: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Field.Select,
                  {
                    name: "currency",
                    size: "small",
                    sx: { minWidth: 80, border: "none", "& .MuiSelect-select": { py: 0 } },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "USD", children: "USD" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "EUR", children: "EUR" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "GBP", children: "GBP" })
                    ]
                  }
                ) })
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "payment_frequency", label: "Payment Frequency", children: PAYMENT_FREQUENCY_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            sx: { mb: 1 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: "Commission Structure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field.Checkbox,
                {
                  name: "use_tiered_salary",
                  label: "Use tiered revenue plan",
                  helperText: "Service salary is determined by monthly revenue tier instead of a flat %"
                }
              )
            ]
          }
        ),
        useTieredSalary && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              p: 2,
              mb: 2,
              borderRadius: 1,
              bgcolor: "info.lighter",
              border: "1px solid",
              borderColor: "info.light"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "info.dark", children: "Service commissions will be calculated from the branch tier plan based on total monthly service revenue. Configure tiers in the Tier Plan Settings below." })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Set commission percentages for different service categories. Leave blank for categories that don't apply." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 3, children: COMMISSION_FIELDS.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: field.name,
              label: field.label,
              type: "number",
              placeholder: field.placeholder,
              InputProps: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "%" }),
                inputProps: { min: 0, max: 100, step: 0.01 }
              }
            }
          ) }, field.name)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "notes",
          label: "Additional Notes",
          multiline: true,
          rows: 3,
          placeholder: "Any additional notes about this compensation structure..."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, sx: { justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outlined", onClick: handleCancel, disabled: isLoading, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isLoading, children: isLoading ? "Saving..." : "Save Compensation" })
      ] })
    ] }) })
  ] });
}
StaffSalaryForm.propTypes = {
  currentSalary: o.object,
  onSave: o.func.isRequired,
  onCancel: o.func.isRequired,
  isLoading: o.bool
};
function methodLabel(value) {
  return PAYMENT_METHOD_OPTIONS.find((o2) => o2.value === value)?.label ?? value;
}
function SalaryPaymentList({
  staffId,
  branchId,
  organizationId,
  compensationId,
  currency,
  isAdmin: isAdmin2,
  staffName
}) {
  const [page, setPage] = reactExports.useState(0);
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(DEFAULT_PAGE_SIZE);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [editingPayment, setEditingPayment] = reactExports.useState(null);
  const { payments, paymentsTotal, paymentsLoading } = useGetSalaryPayments({
    userId: staffId,
    organizationId,
    branchId,
    page,
    pageSize: rowsPerPage
  });
  const handleAdd = reactExports.useCallback(() => {
    setEditingPayment(null);
    setDialogOpen(true);
  }, []);
  const handleEdit = reactExports.useCallback((payment) => {
    setEditingPayment(payment);
    setDialogOpen(true);
  }, []);
  const handleClose = reactExports.useCallback(() => {
    setDialogOpen(false);
    setEditingPayment(null);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mt: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          sx: { px: 3, py: 2 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Salary Payments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
                paymentsTotal,
                " payment",
                paymentsTotal !== 1 ? "s" : "",
                " recorded"
              ] })
            ] }),
            isAdmin2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
                onClick: handleAdd,
                disabled: !compensationId,
                children: "Record Payment"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 640 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Method" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Expense" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Notes" }),
          isAdmin2 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: paymentsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: isAdmin2 ? 7 : 6, align: "center", sx: { py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 28 }) }) }) : payments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: isAdmin2 ? 7 : 6, sx: { p: 0, border: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyContent,
          {
            title: "No salary payments yet",
            description: isAdmin2 ? 'Click "Record Payment" to add the first one.' : void 0,
            sx: { py: 5 }
          }
        ) }) }) : payments.map((payment) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(payment.payment_date) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(payment.amount, payment.currency) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: methodLabel(payment.payment_method) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              variant: "soft",
              color: PAYMENT_STATUS_COLORS[payment.status] ?? "default",
              children: payment.status
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: payment.expense_id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Linked to an expense", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "inline-flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Iconify,
              {
                icon: "solar:link-bold-duotone",
                width: 16,
                sx: { color: "success.main" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "success.main", children: "Linked" })
          ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "—" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { maxWidth: 200 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", noWrap: true, children: payment.notes || "—" }) }),
          isAdmin2 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => handleEdit(payment), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16 }) }) })
        ] }, payment.id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TablePagination,
        {
          component: "div",
          count: paymentsTotal,
          page,
          onPageChange: (_, newPage) => setPage(newPage),
          rowsPerPage,
          onRowsPerPageChange: (e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          },
          rowsPerPageOptions: [5, 10, 25, 50]
        }
      )
    ] }),
    isAdmin2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SalaryPaymentFormDialog,
      {
        open: dialogOpen,
        onClose: handleClose,
        compensationId,
        staffId,
        branchId,
        currency,
        editingPayment,
        staffName
      }
    )
  ] });
}
SalaryPaymentList.propTypes = {
  staffId: o.string.isRequired,
  branchId: o.string.isRequired,
  organizationId: o.string.isRequired,
  compensationId: o.string,
  currency: o.string,
  isAdmin: o.bool,
  staffName: o.string
};
const ServiceCommissionSchema = object({
  service_ids: array(string()).min(1, { message: "Select at least one service" }),
  commission_percent: number({ invalid_type_error: "Enter a valid percentage" }).min(0, { message: "Must be at least 0%" }).max(100, { message: "Cannot exceed 100%" })
});
function ServiceCommissionDialog({
  open,
  onClose,
  onSave,
  services,
  servicesLoading,
  existingCommissions
}) {
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(ServiceCommissionSchema),
    defaultValues: {
      service_ids: [],
      commission_percent: null
    }
  });
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    if (!open) {
      reset({ service_ids: [], commission_percent: null });
    }
  }, [open, reset]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      await onSave(
        data.service_ids.map((service_id) => ({
          service_id,
          commission_percent: data.commission_percent
        }))
      );
      toast.success("Service commissions saved!");
      onClose();
    } catch (err) {
      toast.error(err?.message || "Failed to save commissions");
    }
  });
  const existingServiceIds = new Set((existingCommissions || []).map((c) => c.service_id));
  const getOptionLabel = reactExports.useCallback((option) => option.name || option.service_name || "", []);
  const getGroupLabel = reactExports.useCallback((option) => {
    const group = option.service_group || "other";
    return SERVICE_GROUPS.find((g) => g.value === group)?.label ?? "Other";
  }, []);
  const sortedServices = [...services || []].sort((a, b) => {
    const ga = a.service_group || "other";
    const gb = b.service_group || "other";
    if (ga !== gb) return ga.localeCompare(gb);
    return (a.name || "").localeCompare(b.name || "");
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Assign Service Commission" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Select one or more services and assign a commission percentage. Existing rates will be overwritten for any service you select." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "service_ids",
            control,
            render: ({ field, fieldState: { error } }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Autocomplete,
              {
                multiple: true,
                disableCloseOnSelect: true,
                options: sortedServices,
                loading: servicesLoading,
                groupBy: getGroupLabel,
                getOptionLabel,
                isOptionEqualToValue: (option, value) => option.id === value?.id,
                value: sortedServices.filter((s) => field.value.includes(s.id)),
                onChange: (_, newValue) => {
                  field.onChange(newValue.map((s) => s.id));
                },
                renderOption: (props, option, { selected }) => /* @__PURE__ */ reactExports.createElement("li", { ...props, key: option.id }, /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { style: { marginRight: 8 }, checked: selected }), getOptionLabel(option), existingServiceIds.has(option.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    size: "small",
                    label: "has rate",
                    color: "warning",
                    variant: "soft",
                    sx: { ml: 1, fontSize: 10 }
                  }
                )),
                renderTags: (tagValue, getTagProps) => tagValue.map((option, index) => /* @__PURE__ */ reactExports.createElement(
                  Chip,
                  {
                    ...getTagProps({ index }),
                    key: option.id,
                    label: getOptionLabel(option),
                    size: "small"
                  }
                )),
                renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextField,
                  {
                    ...params,
                    label: "Services",
                    placeholder: "Search services…",
                    error: !!error,
                    helperText: error?.message,
                    InputProps: {
                      ...params.InputProps,
                      endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        servicesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { color: "inherit", size: 18 }) : null,
                        params.InputProps.endAdornment
                      ] })
                    }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "commission_percent",
            label: "Commission Percentage",
            type: "number",
            placeholder: "e.g. 15",
            inputProps: { min: 0, max: 100, step: 0.01 },
            InputProps: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "%" })
            }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: onClose, disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", loading: isSubmitting, children: "Save" })
      ] })
    ] })
  ] });
}
ServiceCommissionDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  onSave: o.func.isRequired,
  services: o.array,
  servicesLoading: o.bool,
  existingCommissions: o.array
};
function ServiceCommissionTableRow({ row, onDelete, isDeleting }) {
  const serviceName = row.service?.name || row.service_id;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: serviceName }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: `${row.commission_percent}%`, size: "small", color: "primary", variant: "soft" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: fDate(row.updated_at, "DD/MM/YYYY") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", sx: { pr: 1 }, children: isDeleting ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "inline-flex", p: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 20 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", color: "error", onClick: () => onDelete(row.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 18 }) }) })
  ] });
}
ServiceCommissionTableRow.propTypes = {
  row: o.shape({
    id: o.string.isRequired,
    service_id: o.string.isRequired,
    service: o.shape({ name: o.string }),
    commission_percent: o.number.isRequired,
    updated_at: o.string
  }).isRequired,
  onDelete: o.func.isRequired,
  isDeleting: o.bool
};
const SERVICE_COMMISSION_TABLE_HEAD = [
  { id: "service_name", label: "Service" },
  { id: "commission_percent", label: "Commission %" },
  { id: "updated_at", label: "Last Updated" },
  { id: "actions", label: "" }
];
function ServiceCommissionList({ staffId, branchId }) {
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const {
    serviceCommissions: commissions,
    serviceCommissionsLoading: isLoading,
    mutateServiceCommissions
  } = useStaffServiceCommissions(staffId);
  const { services, servicesLoading } = useGetServices({
    pageSize: 1e3,
    filters: { isActive: true },
    branchId
  });
  const handleOpenDialog = reactExports.useCallback(() => setDialogOpen(true), []);
  const handleCloseDialog = reactExports.useCallback(() => setDialogOpen(false), []);
  const handleSave = reactExports.useCallback(
    async (entries) => {
      await upsertStaffServiceCommissions(staffId, branchId, entries);
      await mutateServiceCommissions();
    },
    [staffId, branchId, mutateServiceCommissions]
  );
  const handleDelete = reactExports.useCallback(
    async (id) => {
      setDeletingId(id);
      try {
        await deleteStaffServiceCommission(id);
        await mutateServiceCommissions();
      } finally {
        setDeletingId(null);
      }
    },
    [mutateServiceCommissions]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mt: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { p: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Service Commission Rates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Custom commissions applied per-service for end-of-month salary calculation." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            size: "small",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:plus-fill" }),
            onClick: handleOpenDialog,
            children: "Add"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      !isLoading && commissions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          title: "No service commissions yet",
          description: "Add custom commission rates for specific services.",
          sx: { py: 5 }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: SERVICE_COMMISSION_TABLE_HEAD.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: col.id === "actions" ? "right" : "left", children: col.label }, col.id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: commissions.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ServiceCommissionTableRow,
          {
            row,
            onDelete: handleDelete,
            isDeleting: deletingId === row.id
          },
          row.id
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServiceCommissionDialog,
      {
        open: dialogOpen,
        onClose: handleCloseDialog,
        onSave: handleSave,
        services,
        servicesLoading,
        existingCommissions: commissions
      }
    )
  ] });
}
ServiceCommissionList.propTypes = {
  staffId: o.string.isRequired,
  branchId: o.string.isRequired
};
const SalaryTierSchema = object({
  revenue_target: number({ invalid_type_error: "Required" }).min(0, "Must be at least 0"),
  weekly_target: number({ invalid_type_error: "Required" }).min(0, "Must be at least 0").nullable().optional(),
  incentive_percent: number({ invalid_type_error: "Required" }).min(0, "Must be at least 0").max(100, "Cannot exceed 100"),
  min_salary: number({ invalid_type_error: "Required" }).min(0, "Must be at least 0").nullable().optional(),
  name: string().optional()
});
const SALARY_TIER_TABLE_HEAD = [
  { id: "revenue_target", label: "Monthly Revenue Target", align: "right" },
  { id: "weekly_target", label: "Weekly Target", align: "right" },
  { id: "incentive_percent", label: "Incentive %", align: "right" },
  { id: "min_salary", label: "Min. Salary", align: "right" },
  { id: "actions", label: "", align: "right" }
];
const DEFAULT_TIER_VALUES = {
  revenue_target: "",
  weekly_target: "",
  incentive_percent: "",
  min_salary: "",
  name: ""
};
const PRESET_TIERS = [
  { revenue_target: 25e3, weekly_target: 6250, incentive_percent: 26, min_salary: 6500 },
  { revenue_target: 2e4, weekly_target: 5e3, incentive_percent: 24, min_salary: 4800 },
  { revenue_target: 18e3, weekly_target: 4500, incentive_percent: 22, min_salary: 3960 },
  { revenue_target: 16e3, weekly_target: 4e3, incentive_percent: 20, min_salary: 3200 },
  { revenue_target: 8e3, weekly_target: 2e3, incentive_percent: 18, min_salary: 1440 },
  { revenue_target: 4e3, weekly_target: 1e3, incentive_percent: 16, min_salary: 640 },
  { revenue_target: 3e3, weekly_target: 750, incentive_percent: 14, min_salary: 420 },
  { revenue_target: 2e3, weekly_target: 500, incentive_percent: 12, min_salary: 240 }
];
function SalaryTierFormDialog({ open, onClose, onSave, currentTier }) {
  const methods = useForm({
    resolver: u(SalaryTierSchema),
    defaultValues: currentTier ? {
      revenue_target: currentTier.revenue_target,
      weekly_target: currentTier.weekly_target ?? null,
      incentive_percent: currentTier.incentive_percent,
      min_salary: currentTier.min_salary ?? null,
      name: currentTier.name ?? ""
    } : DEFAULT_TIER_VALUES,
    values: currentTier ? {
      revenue_target: currentTier.revenue_target,
      weekly_target: currentTier.weekly_target ?? null,
      incentive_percent: currentTier.incentive_percent,
      min_salary: currentTier.min_salary ?? null,
      name: currentTier.name ?? ""
    } : void 0
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    await onSave(data);
    reset();
  });
  const handleClose = () => {
    reset();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: currentTier ? "Edit Tier" : "Add Tier" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "revenue_target",
            label: "Monthly Revenue Target",
            type: "number",
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" }),
              inputProps: { min: 0, step: 100 }
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "weekly_target",
            label: "Weekly Target (optional)",
            type: "number",
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" }),
              inputProps: { min: 0, step: 100 }
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "incentive_percent",
            label: "Incentive %",
            type: "number",
            InputProps: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "%" }),
              inputProps: { min: 0, max: 100, step: 0.5 }
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "min_salary",
            label: "Min. Salary (optional)",
            type: "number",
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" }),
              inputProps: { min: 0, step: 10 }
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Tier Name (optional)", placeholder: "e.g. Gold" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: handleClose, disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isSubmitting, children: isSubmitting ? "Saving..." : "Save" })
      ] })
    ] })
  ] });
}
SalaryTierFormDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  onSave: o.func.isRequired,
  currentTier: o.object
};
function SalaryTierPlanList({ branchId }) {
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [editingTier, setEditingTier] = reactExports.useState(null);
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const [loadingPreset, setLoadingPreset] = reactExports.useState(false);
  const { tiers, tiersLoading } = useGetSalaryTierPlan(branchId);
  const handleOpenAdd = reactExports.useCallback(() => {
    setEditingTier(null);
    setDialogOpen(true);
  }, []);
  const handleOpenEdit = reactExports.useCallback((tier) => {
    setEditingTier(tier);
    setDialogOpen(true);
  }, []);
  const handleCloseDialog = reactExports.useCallback(() => {
    setDialogOpen(false);
    setEditingTier(null);
  }, []);
  const handleSave = reactExports.useCallback(
    async (data) => {
      try {
        if (editingTier) {
          await updateSalaryTier(editingTier.id, branchId, data);
          toast.success("Tier updated");
        } else {
          await createSalaryTier(branchId, data);
          toast.success("Tier added");
        }
        handleCloseDialog();
      } catch (err) {
        toast.error("Failed to save tier");
        console.error(err);
      }
    },
    [branchId, editingTier, handleCloseDialog]
  );
  const handleDelete = reactExports.useCallback(
    async (id) => {
      setDeletingId(id);
      try {
        await deleteSalaryTier(id, branchId);
        toast.success("Tier removed");
      } catch (err) {
        toast.error("Failed to remove tier");
        console.error(err);
      } finally {
        setDeletingId(null);
      }
    },
    [branchId]
  );
  const handleLoadPreset = reactExports.useCallback(async () => {
    setLoadingPreset(true);
    try {
      await toast.promise(
        Promise.all(PRESET_TIERS.map((tier) => createSalaryTier(branchId, tier))),
        {
          loading: "Loading default tiers...",
          success: "Default tiers loaded",
          error: "Failed to load preset tiers"
        }
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingPreset(false);
    }
  }, [branchId]);
  const sortedTiers = [...tiers].sort((a, b) => b.revenue_target - a.revenue_target);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, mt: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 2 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Tier Plan Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Branch-wide tiers — applied to all employees with “Tiered Revenue Plan” enabled" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
          tiers.length === 0 && !tiersLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              size: "small",
              disabled: loadingPreset,
              startIcon: loadingPreset ? /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "svg-spinners:ring-resize", width: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:import-bold" }),
              onClick: handleLoadPreset,
              children: loadingPreset ? "Loading..." : "Load Default Tiers"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              size: "small",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:plus-fill" }),
              onClick: handleOpenAdd,
              children: "Add Tier"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { mb: 2 } }),
      tiersLoading ? null : sortedTiers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          title: "No tiers configured",
          description: "Add tiers or load the default plan to get started.",
          sx: { py: 4 }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: SALARY_TIER_TABLE_HEAD.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: col.align, children: col.label }, col.id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: sortedTiers.map((tier) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: fCurrency(tier.revenue_target) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: tier.weekly_target ? fCurrency(tier.weekly_target) : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: "600", color: "success.main", children: [
            tier.incentive_percent,
            "%"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: tier.min_salary ? fCurrency(tier.min_salary) : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, justifyContent: "flex-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => handleOpenEdit(tier), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16 }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                color: "error",
                disabled: deletingId === tier.id,
                onClick: () => handleDelete(tier.id),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 })
              }
            ) })
          ] }) })
        ] }, tier.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SalaryTierFormDialog,
      {
        open: dialogOpen,
        onClose: handleCloseDialog,
        onSave: handleSave,
        currentTier: editingTier
      }
    )
  ] });
}
SalaryTierPlanList.propTypes = {
  branchId: o.string.isRequired
};
const COMMISSION_ITEMS = [
  {
    key: "services_commission_percent",
    label: "Services",
    icon: "solar:scissors-bold-duotone",
    color: "primary",
    tieredOverride: true
    // hidden when use_tiered_salary is true
  },
  {
    key: "product_commission_percent",
    label: "Product Sales",
    icon: "solar:bag-2-bold-duotone",
    color: "info"
  },
  {
    key: "lash_lifting_commission_percent",
    label: "Lash Lifting",
    icon: "solar:eye-bold-duotone",
    color: "success"
  },
  {
    key: "lash_extension_commission_percent",
    label: "Lash Extension",
    icon: "solar:star-bold-duotone",
    color: "warning"
  },
  {
    key: "makeup_course_commission_percent",
    label: "Makeup Course",
    icon: "solar:palette-2-bold-duotone",
    color: "secondary"
  },
  {
    key: "bridal_eng_commission_percent",
    label: "Bridal/Engagement",
    icon: "solar:heart-bold-duotone",
    color: "error"
  }
];
const PAYMENT_FREQUENCY_LABELS = {
  weekly: "Weekly",
  bi_weekly: "Bi-weekly",
  monthly: "Monthly"
};
function StaffSalaryDisplay({
  salaryData,
  onEdit,
  canEdit = false,
  staffId,
  branchId,
  tierBranchId,
  organizationId,
  isAdmin: isAdmin2 = false,
  staffName
}) {
  if (!salaryData) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, mt: 3, textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Iconify,
        {
          icon: "solar:wallet-bold-duotone",
          width: 64,
          sx: { color: "text.disabled", mb: 2 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", color: "text.secondary", children: "No Salary Information" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", sx: { mb: 3 }, children: "Salary and commission structure has not been set up for this employee." }),
      canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:plus-fill" }), onClick: onEdit, children: "Set Up Compensation" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, mt: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Salary & Commission" }),
        canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            size: "small",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
            onClick: onEdit,
            children: "Edit"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 2, bgcolor: "background.neutral", borderRadius: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: "Base Salary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: fCurrency(salaryData.base_salary || 0, salaryData.currency) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: PAYMENT_FREQUENCY_LABELS[salaryData.payment_frequency] || salaryData.payment_frequency,
                size: "small",
                variant: "soft",
                color: "success"
              }
            ),
            salaryData.use_tiered_salary && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: "Tiered Revenue Plan",
                size: "small",
                variant: "soft",
                color: "info",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:chart-2-bold-duotone", width: 14 })
              }
            )
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 2, bgcolor: "background.neutral", borderRadius: 1, height: "100%" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", gutterBottom: true, children: "Total Commission Rate" }),
          salaryData.use_tiered_salary ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", color: "info.main", children: "Tier-based" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Rate determined by monthly service revenue" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h4", children: [
              COMMISSION_ITEMS.reduce(
                (sum, item) => sum + (salaryData[item.key] || 0),
                0
              ).toFixed(1),
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Across all service categories" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", gutterBottom: true, children: "Commission Structure" }),
      salaryData.use_tiered_salary && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            p: 2,
            mb: 2,
            borderRadius: 1,
            bgcolor: "info.lighter",
            border: "1px solid",
            borderColor: "info.light"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:chart-2-bold-duotone", width: 20, sx: { color: "info.main" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "info.dark", children: "Service commissions are calculated from the branch tier plan. The rate below applies to non-service categories only." })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 2, children: COMMISSION_ITEMS.filter(
        (item) => !(item.tieredOverride && salaryData.use_tiered_salary)
      ).map((item) => {
        const percentage = salaryData[item.key] || 0;
        const isActive = percentage > 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              p: 2,
              borderRadius: 1,
              border: "1px solid",
              borderColor: isActive ? "divider" : "transparent",
              bgcolor: isActive ? "background.paper" : "background.neutral",
              opacity: isActive ? 1 : 0.7
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  sx: {
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: (theme) => isActive ? theme.palette[item.color].lighter : "background.neutral",
                    color: (theme) => isActive ? theme.palette[item.color].main : "text.disabled"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: item.icon, width: 24 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", noWrap: true, children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h6", color: isActive ? "text.primary" : "text.disabled", children: [
                  percentage,
                  "%"
                ] })
              ] })
            ] })
          }
        ) }, item.key);
      }) }),
      salaryData.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: salaryData.notes })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 4, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Effective From" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(salaryData.effective_from, "DD/MM/YYYY") })
        ] }),
        salaryData.effective_until && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Effective Until" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: new Date(salaryData.effective_until).toLocaleDateString() })
        ] })
      ] })
    ] }),
    staffId && branchId && organizationId && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SalaryPaymentList,
      {
        staffId,
        branchId,
        organizationId,
        compensationId: salaryData?.id,
        currency: salaryData?.currency,
        isAdmin: isAdmin2
      }
    ),
    isAdmin2 && staffId && branchId && /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCommissionList, { staffId, branchId }),
    isAdmin2 && (tierBranchId || branchId) && /* @__PURE__ */ jsxRuntimeExports.jsx(SalaryTierPlanList, { branchId: tierBranchId ?? branchId })
  ] });
}
StaffSalaryDisplay.propTypes = {
  salaryData: o.object,
  onEdit: o.func.isRequired,
  canEdit: o.bool,
  staffId: o.string,
  branchId: o.string,
  tierBranchId: o.string,
  organizationId: o.string,
  isAdmin: o.bool,
  staffName: o.string
};
function StaffSalaryManagement({
  staffId,
  branchId,
  tierBranchId,
  organizationId,
  salaryData,
  onSalaryUpdate,
  canEdit = false,
  isAdmin: isAdmin2 = false,
  staffName
}) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const handleEdit = reactExports.useCallback(() => {
    setIsEditing(true);
  }, []);
  const handleCancel = reactExports.useCallback(() => {
    setIsEditing(false);
  }, []);
  const handleSave = reactExports.useCallback(
    async (salaryFormData) => {
      setIsLoading(true);
      try {
        const fullSalaryData = {
          ...salaryFormData,
          user_id: staffId,
          branch_id: branchId
        };
        await onSalaryUpdate(fullSalaryData);
        setIsEditing(false);
      } catch (error) {
        console.error("Error saving salary:", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [staffId, branchId, onSalaryUpdate]
  );
  if (isEditing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      StaffSalaryForm,
      {
        currentSalary: salaryData,
        onSave: handleSave,
        onCancel: handleCancel,
        isLoading
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StaffSalaryDisplay,
    {
      salaryData,
      onEdit: handleEdit,
      canEdit,
      staffId,
      branchId,
      tierBranchId: tierBranchId ?? branchId,
      organizationId,
      isAdmin: isAdmin2,
      staffName
    }
  );
}
StaffSalaryManagement.propTypes = {
  staffId: o.string.isRequired,
  branchId: o.string.isRequired,
  tierBranchId: o.string,
  organizationId: o.string,
  salaryData: o.object,
  onSalaryUpdate: o.func.isRequired,
  canEdit: o.bool,
  isAdmin: o.bool,
  staffName: o.string
};
const staffLevels = [
  {
    name: "Junior",
    value: "junior",
    description: "Entry-level stylist with basic skills.",
    color: "blue",
    icon: "solar:bar-chair-bold-duotone"
  },
  {
    name: "Senior",
    value: "senior",
    description: "Experienced stylist with solid skills.",
    color: "green",
    icon: "solar:armchair-2-bold-duotone"
  },
  {
    name: "Prive",
    value: "prive",
    description: "Top-tier stylist with exceptional skills.",
    color: "purple",
    icon: "solar:scissors-line-duotone"
  }
];
function getStaffLevelDetails(levelValue) {
  return staffLevels.find((level) => level.value === levelValue) || null;
}
function StaffProfileCover({
  sx,
  name,
  status,
  roles,
  coverUrl,
  flagsLength,
  staffId,
  avatarUrl,
  employeeLevels,
  ...other
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: [
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(0deg, ${U(theme.vars.palette.primary.darkerChannel, 0.8)}, ${U(theme.vars.palette.primary.darkerChannel, 0.8)})`,
              `url('/assets/images/mock/cover/cover-${checkUuidLastDigit(staffId)}.webp')`
            ]
          }),
          height: 1,
          color: "common.white"
        }),
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...other,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              display: "flex",
              zIndex: { md: 10 },
              position: { md: "absolute" },
              flexDirection: { xs: "column", md: "row" }
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ListItemText,
              {
                primary: name,
                secondary: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Stack,
                  {
                    direction: "row",
                    spacing: 1,
                    sx: { mt: 1, justifyContent: { xs: "center", md: "flex-start" } },
                    children: roles?.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", children: role }, role))
                  }
                ),
                slotProps: {
                  primary: { sx: { typography: "h4" } },
                  secondary: {
                    sx: { mt: 0.5, color: "inherit" }
                  }
                },
                sx: { mt: 3, ml: { md: 3 }, textAlign: { xs: "center", md: "unset" } }
              }
            )
          }
        ),
        employeeLevels.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            variant: "filled",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: getStaffLevelDetails(employeeLevels[0]?.stylist_level)?.icon }),
            color: "default",
            sx: {
              position: "absolute",
              top: 16,
              right: 16,
              fontSize: 16
            },
            children: employeeLevels[0]?.stylist_level
          }
        )
      ]
    }
  );
}
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
  // dedicated course group
  lash_lifting: "lash_lifting",
  lash_extension: "lash_extension"
  // makeup_lab, nail_lab, spa_men, spa_women, hair_men, hair_women,
  // sun_in, princess_services, other → fall through to 'services'
};
function getSaleItemCategory(saleItem) {
  if (saleItem.product) return "product";
  const group = saleItem.service?.service_group;
  return SERVICE_GROUP_TO_COMMISSION[group] ?? "services";
}
function getCommissionRate(compensation, saleItem, serviceCommissionMap) {
  if (saleItem.product) {
    return compensation?.product_commission_percent ?? 0;
  }
  const serviceId = saleItem.service?.id;
  if (serviceId && serviceCommissionMap?.[serviceId] !== void 0) {
    return serviceCommissionMap[serviceId];
  }
  if (!compensation) return 0;
  const category = getSaleItemCategory(saleItem);
  const field = COMMISSION_RATE_MAP[category] ?? "services_commission_percent";
  return compensation[field] ?? 0;
}
function StaffPerformance({ staffId, staffData }) {
  const [preset, setPreset] = reactExports.useState("month");
  const [customStart, setCustomStart] = reactExports.useState(null);
  const [payDialogOpen, setPayDialogOpen] = reactExports.useState(false);
  const { user } = useAuthContext();
  const { isAdmin: isAdmin2 } = usePermissions();
  const { primaryBranch: viewerPrimaryBranch } = useUserBranches();
  const organizationId = user?.primary_branch?.organization_id || user?.branches?.[0]?.organization_id;
  const staffName = staffData ? staffData.display_name || `${staffData.first_name} ${staffData.last_name}`.trim() : void 0;
  const [customEnd, setCustomEnd] = reactExports.useState(null);
  const { start: startDate, end: endDate } = reactExports.useMemo(() => {
    if (customStart && customEnd) return { start: customStart, end: customEnd };
    return getPresetDates(preset);
  }, [preset, customStart, customEnd]);
  const handlePreset = reactExports.useCallback((value) => {
    setPreset(value);
    setCustomStart(null);
    setCustomEnd(null);
  }, []);
  const startDateStr = startDate ? startDate.format("YYYY-MM-DD") : null;
  const endDateStr = endDate ? endDate.format("YYYY-MM-DD") : null;
  const primaryBranch = staffData?.branches?.find((b) => b.is_primary);
  const primaryBranchId = primaryBranch?.branch_id ?? null;
  const { compensationSummary, compensationSummaryLoading } = useGetCompensationSummary(
    staffId,
    primaryBranchId,
    startDateStr,
    endDateStr
  );
  const { sales, salesLoading } = useStylistSales(staffId, startDateStr, endDateStr);
  const { compensation } = useGetEmployeeCompensation(staffId);
  const { serviceCommissions } = useStaffServiceCommissions(staffId);
  const tierBranchId = resolveTierBranchId(staffData?.branches, viewerPrimaryBranch?.id);
  const { tiers, tiersLoading } = useGetSalaryTierPlan(tierBranchId);
  const serviceCommissionMap = reactExports.useMemo(
    () => serviceCommissions.reduce((acc, entry) => {
      acc[entry.service_id] = Number(entry.commission_percent);
      return acc;
    }, {}),
    [serviceCommissions]
  );
  const { absences, absencesLoading } = useApprovedAbsences(staffId, startDateStr, endDateStr);
  const { alreadyPaid, periodCheckLoading } = useCheckPeriodPayment({
    userId: staffId,
    organizationId,
    startDate: startDateStr,
    endDate: endDateStr
  });
  const { penalties, penaltiesLoading } = useStaffPenalties(
    staffId,
    primaryBranchId,
    startDateStr,
    endDateStr
  );
  const { overtimeRecords, overtimeLoading } = useStaffOvertime(
    staffId,
    primaryBranchId,
    startDateStr,
    endDateStr
  );
  const { packageUsages, packageUsagesLoading } = useGetStaffPackageCommissions(
    staffId,
    startDateStr,
    endDateStr
  );
  const { planUsages, planUsagesLoading } = useGetStaffDiscountPlanCommissions(
    staffId,
    startDateStr,
    endDateStr
  );
  const { commissionHistory, commissionHistoryLoading } = useGetCommissionHistory(
    staffId,
    primaryBranchId,
    startDateStr,
    endDateStr
  );
  const loading = compensationSummaryLoading || salesLoading || tiersLoading || absencesLoading || penaltiesLoading || overtimeLoading || packageUsagesLoading || planUsagesLoading || commissionHistoryLoading;
  const stats = reactExports.useMemo(() => {
    const totalSales = sales?.length || 0;
    const salesRevenue = sales?.reduce((sum, item) => sum + (item.line_total || 0), 0) || 0;
    const isTiered = !!compensation?.use_tiered_salary;
    const commissionBreakdown = {};
    let tieredServiceRevenue = 0;
    sales?.forEach((item) => {
      if (item.paid_via_package || item.original_unit_price != null) return;
      const lineTotal = getSaleItemPaidAmount(item);
      const category = getSaleItemCategory(item);
      if (isTiered) {
        if (category !== "product") {
          tieredServiceRevenue += lineTotal;
        } else {
          const rate = compensation?.product_commission_percent ?? 0;
          const commissionAmt = lineTotal * (rate / 100);
          if (!commissionBreakdown.product) {
            commissionBreakdown.product = { total: 0, count: 0, rate };
          }
          commissionBreakdown.product.total += commissionAmt;
          commissionBreakdown.product.count += 1;
        }
      } else {
        const rate = getCommissionRate(compensation, item, serviceCommissionMap);
        const commissionAmt = lineTotal * (rate / 100);
        if (!commissionBreakdown[category]) {
          commissionBreakdown[category] = { total: 0, count: 0, rate };
        }
        commissionBreakdown[category].total += commissionAmt;
        commissionBreakdown[category].count += 1;
      }
    });
    const matchedTier = isTiered ? computeTierForRevenue(tieredServiceRevenue, tiers) : null;
    const nextTier = isTiered ? getNextTier(tieredServiceRevenue, tiers) : null;
    const tieredServiceSalary = matchedTier ? tieredServiceRevenue * (matchedTier.incentive_percent / 100) : 0;
    const totalCommissions = isTiered ? tieredServiceSalary + (commissionBreakdown.product?.total ?? 0) : Object.values(commissionBreakdown).reduce((sum, cat) => sum + cat.total, 0);
    const periodWorkingDays = startDate && endDate ? countWorkingDays(startDate, endDate) : 0;
    const fullMonthWorkingDays = startDate ? countWorkingDays(startDate.startOf("month"), startDate.endOf("month")) : 0;
    const absentWorkingDays = countAbsentWorkingDays(absences, startDate, endDate);
    const daysWorked = Math.max(0, periodWorkingDays - absentWorkingDays);
    const baseSalary = compensationSummary?.base_salary || 0;
    const proratedBaseSalary = fullMonthWorkingDays > 0 ? baseSalary * daysWorked / fullMonthWorkingDays : baseSalary;
    const totalPenalties = penalties?.reduce((sum, p) => {
      if (p.amount != null) return sum + p.amount;
      if (p.percentage != null) return sum + proratedBaseSalary * p.percentage / 100;
      return sum;
    }, 0) || 0;
    const totalOvertime = overtimeRecords?.reduce((sum, r) => sum + Number(r.total_amount), 0) || 0;
    const unpaidOvertimeCount = overtimeRecords?.filter((r) => !r.salary_payment_id).length || 0;
    const pendingUsages = (packageUsages || []).filter(
      (u2) => !u2.client_packages?.is_commission_finalized
    );
    let pendingPackageCommission = 0;
    const pendingPackageIds = /* @__PURE__ */ new Set();
    pendingUsages.forEach((usage) => {
      const pkg = usage.client_packages;
      if (!pkg?.uses_count) return;
      pendingPackageIds.add(pkg.id);
      const perVisitValue = usage.per_visit_value != null ? Number(usage.per_visit_value) : Number(pkg.price_paid) / pkg.uses_count;
      const serviceGroup = usage.services?.service_group;
      const category = SERVICE_GROUP_TO_COMMISSION[serviceGroup] ?? "services";
      const field = COMMISSION_RATE_MAP[category] ?? "services_commission_percent";
      const serviceId = usage.service_id;
      const rate = serviceId && serviceCommissionMap?.[serviceId] !== void 0 ? serviceCommissionMap[serviceId] : compensation?.[field] ?? 0;
      pendingPackageCommission += perVisitValue * (rate / 100);
    });
    const finalizedPackageRecords = (commissionHistory || []).filter(
      (r) => r.client_package_id != null
    );
    const finalizedPackageCommission = finalizedPackageRecords.reduce(
      (sum, r) => sum + Number(r.commission_amount),
      0
    );
    const finalizedPackageIds = new Set(finalizedPackageRecords.map((r) => r.client_package_id));
    const totalPackageCommission = pendingPackageCommission + finalizedPackageCommission;
    const totalPackageCount = pendingPackageIds.size + finalizedPackageIds.size;
    const allPlanUsages = planUsages || [];
    const pendingPlanUsages = allPlanUsages.filter(
      (u2) => !u2.client_discount_plans?.is_commission_finalized
    );
    let pendingPlanCommission = 0;
    const pendingPlanIds = /* @__PURE__ */ new Set();
    const allPlanIds = /* @__PURE__ */ new Set();
    pendingPlanUsages.forEach((usage) => {
      if (usage.client_plan_id) {
        allPlanIds.add(usage.client_plan_id);
        pendingPlanIds.add(usage.client_plan_id);
      }
      const serviceId = usage.service_id;
      const rate = serviceId && serviceCommissionMap?.[serviceId] !== void 0 ? serviceCommissionMap[serviceId] : compensation?.services_commission_percent ?? 0;
      const discountedPrice = Number(usage.original_service_price) - Number(usage.discount_amount ?? 0);
      pendingPlanCommission += discountedPrice * (rate / 100);
    });
    const finalizedPlanRecords = (commissionHistory || []).filter((r) => r.client_plan_id != null);
    const finalizedPlanCommission = finalizedPlanRecords.reduce(
      (sum, r) => sum + Number(r.commission_amount),
      0
    );
    finalizedPlanRecords.forEach((r) => allPlanIds.add(r.client_plan_id));
    const totalPlanCommission = pendingPlanCommission + finalizedPlanCommission;
    const totalPlanCount = allPlanIds.size;
    const totalPlanUsages = allPlanUsages.length;
    const totalSalary = proratedBaseSalary + totalCommissions + totalPackageCommission + totalPlanCommission + totalOvertime - totalPenalties;
    return {
      totalSales,
      salesRevenue,
      commissionBreakdown,
      totalCommissions,
      isTiered,
      tieredServiceRevenue,
      matchedTier,
      nextTier,
      tieredServiceSalary,
      periodWorkingDays,
      absentWorkingDays,
      daysWorked,
      proratedBaseSalary,
      totalPenalties,
      totalOvertime,
      unpaidOvertimeCount,
      pendingPackageCommission,
      finalizedPackageCommission,
      totalPackageCommission,
      totalPackageCount,
      pendingPackageCount: pendingPackageIds.size,
      pendingPackageVisits: pendingUsages.length,
      pendingPlanCommission,
      finalizedPlanCommission,
      totalPlanCommission,
      totalPlanCount,
      totalPlanUsages,
      pendingPlanCount: pendingPlanIds.size,
      pendingPlanVisits: pendingPlanUsages.length,
      totalSalary
    };
  }, [
    sales,
    compensation,
    serviceCommissionMap,
    tiers,
    compensationSummary,
    absences,
    penalties,
    overtimeRecords,
    packageUsages,
    planUsages,
    commissionHistory,
    startDate,
    endDate
  ]);
  const statsDisplay = [
    {
      title: "Revenue Generated",
      value: fCurrency(stats.salesRevenue),
      icon: "solar:dollar-bold-duotone",
      color: "success"
    },
    {
      title: "Product Sales",
      value: stats.totalSales,
      icon: "solar:cart-bold-duotone",
      color: "secondary"
    },
    {
      title: "Total Commissions",
      value: fCurrency(
        stats.totalCommissions + stats.totalPackageCommission + stats.totalPlanCommission
      ),
      icon: "solar:medal-ribbon-bold-duotone",
      color: "info"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, sx: { mt: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      DateRangeControls,
      {
        preset,
        customStart,
        customEnd,
        onPresetChange: handlePreset,
        onCustomStartChange: setCustomStart,
        onCustomEndChange: setCustomEnd,
        loading,
        cardProps: { sx: { mb: 0, p: 2 } }
      }
    ) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      " ",
      statsDisplay.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, direction: "row", alignItems: "center", children: [
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
              bgcolor: (theme) => theme.palette[stat.color].lighter,
              color: (theme) => theme.palette[stat.color].main
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: stat.icon, width: 24 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: stat.title })
        ] })
      ] }) }) }, stat.title)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBasedGuard, { roles: ["admin"], hasContent: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Salary Breakdown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Base Salary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(compensationSummary?.base_salary || 0) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              "Working Days (",
              stats.daysWorked,
              " worked / ",
              stats.absentWorkingDays,
              " off /",
              " ",
              stats.periodWorkingDays,
              " total)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(stats.proratedBaseSalary) })
          ] }),
          stats.isTiered ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
                "Service Revenue (",
                stats.matchedTier ? `${stats.matchedTier.incentive_percent}% tier` : "below minimum tier",
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(stats.tieredServiceSalary) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", sx: { ml: 2 }, children: [
              fCurrency(stats.tieredServiceRevenue),
              " revenue",
              stats.matchedTier ? ` × ${stats.matchedTier.incentive_percent}%` : " — no tier matched"
            ] }),
            stats.nextTier && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "caption",
                color: "info.main",
                sx: { ml: 2, display: "block" },
                children: [
                  fCurrency(stats.nextTier.revenue_target - stats.tieredServiceRevenue),
                  " ",
                  "more to reach ",
                  stats.nextTier.incentive_percent,
                  "% tier"
                ]
              }
            ),
            (stats.commissionBreakdown.product?.total ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                sx: { mt: 0.5 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { ml: 2 }, children: "Product Commission" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(stats.commissionBreakdown.product.total) })
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: Object.entries(stats.commissionBreakdown).map(([category, data]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "body2",
                  color: "text.secondary",
                  sx: { textTransform: "capitalize" },
                  children: [
                    category.replaceAll("_", " "),
                    " Commissions"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(data.total) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", sx: { ml: 2 }, children: [
              data.count,
              " service",
              data.count !== 1 ? "s" : ""
            ] })
          ] }, category)) }),
          stats.totalPackageCommission > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
                "Package Commissions (",
                stats.totalPackageCount,
                " package",
                stats.totalPackageCount !== 1 ? "s" : "",
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(stats.totalPackageCommission) })
            ] }),
            stats.pendingPackageCommission > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "warning.main", sx: { ml: 2 }, children: [
              fCurrency(stats.pendingPackageCommission),
              " pending finalization (",
              stats.pendingPackageVisits,
              " visit",
              stats.pendingPackageVisits !== 1 ? "s" : "",
              ")"
            ] })
          ] }),
          stats.totalPlanUsages > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
                "Discount Plan Commissions (",
                stats.totalPlanUsages,
                " use",
                stats.totalPlanUsages !== 1 ? "s" : "",
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(stats.totalPlanCommission) })
            ] }),
            stats.pendingPlanCommission > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "warning.main", sx: { ml: 2 }, children: [
              fCurrency(stats.pendingPlanCommission),
              " pending finalization (",
              stats.pendingPlanVisits,
              " visit",
              stats.pendingPlanVisits !== 1 ? "s" : "",
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              display: "flex",
              justifyContent: "space-between",
              sx: { borderTop: 1, borderColor: "divider", pt: 1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", fontWeight: "600", children: "Total Commissions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(
                  stats.totalCommissions + stats.totalPackageCommission + stats.totalPlanCommission
                ) })
              ]
            }
          ),
          stats.totalOvertime > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "warning.dark", children: [
              "Overtime (",
              overtimeRecords.length,
              " record",
              overtimeRecords.length !== 1 ? "s" : "",
              stats.unpaidOvertimeCount > 0 ? `, ${stats.unpaidOvertimeCount} unpaid` : "",
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: "600", color: "warning.dark", children: [
              "+",
              fCurrency(stats.totalOvertime)
            ] })
          ] }),
          stats.totalPenalties > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "error.main", children: [
              "Penalties (",
              penalties.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: "600", color: "error.main", children: [
              "-",
              fCurrency(stats.totalPenalties)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              display: "flex",
              justifyContent: "space-between",
              sx: { borderTop: 1, borderColor: "divider", pt: 1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", fontWeight: "600", children: "Total Salary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", fontWeight: "600", color: "primary.main", children: fCurrency(stats.totalSalary) })
              ]
            }
          ),
          isAdmin2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              fullWidth: true,
              disabled: alreadyPaid || periodCheckLoading,
              startIcon: alreadyPaid ? /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:wallet-money-bold-duotone" }),
              onClick: () => setPayDialogOpen(true),
              children: alreadyPaid ? "Salary Paid" : "Pay Salary"
            }
          )
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: isAdmin2 ? 6 : 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, sx: { height: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Sales Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, sx: { height: "100%" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Total Sales" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: stats.totalSales })
          ] }),
          Object.entries(stats.commissionBreakdown).map(([category, data]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "body2",
                color: "text.secondary",
                sx: { textTransform: "capitalize" },
                children: [
                  category,
                  " Sales"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: data.count })
          ] }, category)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              display: "flex",
              justifyContent: "space-between",
              sx: {
                pt: 1,
                flex: 1,
                alignItems: "flex-end"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Stack,
                {
                  sx: {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: 1,
                    borderColor: "divider",
                    pt: 1
                  },
                  direction: "row",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", fontWeight: "600", children: "Total Revenue" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", fontWeight: "600", children: fCurrency(stats.salesRevenue) })
                  ]
                }
              )
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 3, pb: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:cart-bold-duotone", width: 24 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Sales History" })
        ] }) }),
        sales.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyContent,
          {
            title: "No sales found",
            description: "This staff member has no sales in the selected date range",
            sx: { py: 8 }
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { sx: { overflow: "unset" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 800 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Sale #" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Client" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Product/Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Quantity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Unit Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Commission" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: (() => {
            const finalizedPlanKeys = new Set(
              (planUsages || []).filter((u2) => u2.client_discount_plans?.is_commission_finalized).map((u2) => `${u2.sale_id}:${u2.service_id}`)
            );
            return sales.map((saleItem) => {
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
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", noWrap: true, children: "-" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(saleItem.sale?.created_at) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { sx: { width: 32, height: 32 }, children: clientName.charAt(0) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", noWrap: true, children: clientName })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: productName }),
                  saleItem.product?.sku && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                    "SKU: ",
                    saleItem.product.sku
                  ] }),
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: quantity }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: isPendingPackage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "body2",
                      sx: {
                        textDecoration: "line-through",
                        color: "text.disabled"
                      },
                      children: fCurrency(displayPrice)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "info.main", children: "covered" })
                ] }) : isPlanDiscounted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "body2",
                      sx: {
                        textDecoration: "line-through",
                        color: "text.disabled"
                      },
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: hasSaleDiscount ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, alignItems: "flex-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "body2",
                      sx: {
                        textDecoration: "line-through",
                        color: "text.disabled"
                      },
                      children: fCurrency(total)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(paidTotal) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "warning.dark", children: "sale discount" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "600", children: fCurrency(total) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: isPendingPackage ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "warning.main", children: "Pending package finalization" }) : isPaidViaPackage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "body2",
                      color: "success.main",
                      fontWeight: "600",
                      children: fCurrency(total * (commissionRate / 100))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                    commissionRate,
                    "% · ",
                    fCurrency(total),
                    " per-visit"
                  ] })
                ] }) : isPlanDiscounted ? isPlanFinalized ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "body2",
                      color: "success.main",
                      fontWeight: "600",
                      children: fCurrency(planCommissionAmt)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                    commissionRate,
                    "% · ",
                    fCurrency(Number(saleItem.line_total))
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "warning.main", children: "Pending plan finalization" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "body2",
                      color: "success.main",
                      fontWeight: "600",
                      children: fCurrency(commissionAmt)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                    commissionRate,
                    "%"
                  ] })
                ] }) })
              ] }, `${saleItem.sale?.id}-${saleItem.id}`);
            });
          })() })
        ] }) })
      ] }) })
    ] }),
    isAdmin2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SalaryPaymentFormDialog,
      {
        open: payDialogOpen,
        onClose: () => setPayDialogOpen(false),
        compensationId: compensation?.id,
        staffId,
        branchId: primaryBranchId,
        currency: compensation?.currency,
        defaultAmount: stats.totalSalary,
        staffName,
        onPaymentCreated: async (payment) => {
          const unpaidIds = overtimeRecords.filter((r) => !r.salary_payment_id).map((r) => r.id);
          if (unpaidIds.length > 0) {
            await markOvertimeAsPaid(unpaidIds, payment.id);
          }
        }
      }
    )
  ] });
}
StaffPerformance.propTypes = {
  staffId: o.string,
  staffData: o.object
};
const PenaltySchema = object({
  deduction_type: _enum(["amount", "percentage"], {
    errorMap: () => ({ message: "Please select a deduction type" })
  }),
  amount: number().min(0.01, "Amount must be greater than 0").nullable().optional(),
  percentage: number().min(0.01, "Percentage must be greater than 0").max(100, "Percentage cannot exceed 100").nullable().optional(),
  reason: string().min(1, "Reason is required"),
  issued_at: string().min(1, "Date is required")
}).superRefine((data, ctx) => {
  if (data.deduction_type === "amount" && !data.amount) {
    ctx.addIssue({
      code: "custom",
      message: "Amount is required",
      path: ["amount"]
    });
  }
  if (data.deduction_type === "percentage" && !data.percentage) {
    ctx.addIssue({
      code: "custom",
      message: "Percentage is required",
      path: ["percentage"]
    });
  }
});
const DEDUCTION_TYPE_OPTIONS = [
  { value: "amount", label: "Fixed Amount" },
  { value: "percentage", label: "Percentage of Salary" }
];
const PENALTY_DEFAULT_VALUES = {
  deduction_type: "amount",
  amount: null,
  percentage: null,
  reason: "",
  issued_at: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
};
function penaltyToFormValues(penalty) {
  if (!penalty) return PENALTY_DEFAULT_VALUES;
  return {
    deduction_type: penalty.amount != null ? "amount" : "percentage",
    amount: penalty.amount ?? null,
    percentage: penalty.percentage ?? null,
    reason: penalty.reason ?? "",
    issued_at: penalty.issued_at ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  };
}
function PenaltyDialog({ open, onClose, onSubmit, isSubmitting, currentPenalty }) {
  const isEditing = Boolean(currentPenalty);
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(PenaltySchema),
    defaultValues: PENALTY_DEFAULT_VALUES
  });
  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting: formSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    reset(penaltyToFormValues(currentPenalty));
  }, [currentPenalty, reset]);
  const deductionType = watch("deduction_type");
  const handleClose = reactExports.useCallback(() => {
    reset(PENALTY_DEFAULT_VALUES);
    onClose();
  }, [reset, onClose]);
  const onFormSubmit = handleSubmit(async (data) => {
    await onSubmit(data);
    reset(PENALTY_DEFAULT_VALUES);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEditing ? "Edit Penalty" : "Add Penalty" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit: onFormSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "deduction_type", label: "Deduction Type", children: DEDUCTION_TYPE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value)) }),
        deductionType === "amount" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "amount",
            label: "Amount",
            type: "number",
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
            }
          }
        ),
        deductionType === "percentage" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "percentage",
            label: "Percentage",
            type: "number",
            InputProps: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "%" })
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "issued_at", label: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "reason", label: "Reason", multiline: true, rows: 3 })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: formSubmitting || isSubmitting, children: formSubmitting || isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 20, color: "inherit" }) : isEditing ? "Save Changes" : "Add Penalty" })
      ] })
    ] })
  ] });
}
PenaltyDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  onSubmit: o.func.isRequired,
  isSubmitting: o.bool,
  currentPenalty: o.object
};
function StaffPenalties({ staffId, branchId, canEdit }) {
  const { user } = useAuthContext();
  const [preset, setPreset] = reactExports.useState("month");
  const [customStart, setCustomStart] = reactExports.useState(null);
  const [customEnd, setCustomEnd] = reactExports.useState(null);
  const { start: startDate, end: endDate } = reactExports.useMemo(() => {
    if (customStart && customEnd) return { start: customStart, end: customEnd };
    return getPresetDates(preset);
  }, [preset, customStart, customEnd]);
  const startDateStr = startDate ? startDate.format("YYYY-MM-DD") : null;
  const endDateStr = endDate ? endDate.format("YYYY-MM-DD") : null;
  const handlePreset = reactExports.useCallback((value) => {
    setPreset(value);
    setCustomStart(null);
    setCustomEnd(null);
  }, []);
  const { penalties, penaltiesLoading } = useStaffPenalties(
    staffId,
    branchId,
    startDateStr,
    endDateStr
  );
  const { addPenalty, removePenalty, editPenalty } = useStaffPenaltiesMutation();
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [editingPenalty, setEditingPenalty] = reactExports.useState(null);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const handleOpenAdd = reactExports.useCallback(() => {
    setEditingPenalty(null);
    setDialogOpen(true);
  }, []);
  const handleOpenEdit = reactExports.useCallback((penalty) => {
    setEditingPenalty(penalty);
    setDialogOpen(true);
  }, []);
  const handleClose = reactExports.useCallback(() => {
    setDialogOpen(false);
    setEditingPenalty(null);
  }, []);
  const handleSubmit = reactExports.useCallback(
    async (data) => {
      setIsSubmitting(true);
      try {
        if (editingPenalty) {
          await editPenalty(editingPenalty.id, staffId, data);
          toast.success("Penalty updated successfully");
        } else {
          await addPenalty({ staffId, branchId, issuedBy: user?.id, ...data });
          toast.success("Penalty added successfully");
        }
        handleClose();
      } catch (error) {
        console.error("Error saving penalty:", error);
        toast.error(editingPenalty ? "Failed to update penalty" : "Failed to add penalty");
        throw error;
      } finally {
        setIsSubmitting(false);
      }
    },
    [editingPenalty, editPenalty, addPenalty, staffId, branchId, user?.id, handleClose]
  );
  const handleDelete = reactExports.useCallback(
    async (penaltyId) => {
      setDeletingId(penaltyId);
      try {
        await removePenalty(penaltyId, staffId);
        toast.success("Penalty removed");
      } catch (error) {
        console.error("Error removing penalty:", error);
        toast.error("Failed to remove penalty");
      } finally {
        setDeletingId(null);
      }
    },
    [removePenalty, staffId]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { mt: 3 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DateRangeControls,
      {
        preset,
        customStart,
        customEnd,
        onPresetChange: handlePreset,
        onCustomStartChange: setCustomStart,
        onCustomEndChange: setCustomEnd,
        loading: penaltiesLoading
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 3, pb: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:danger-triangle-bold-duotone", width: 24, color: "error.main" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Penalties" })
        ] }),
        canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            size: "small",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
            onClick: handleOpenAdd,
            children: "Add Penalty"
          }
        )
      ] }) }),
      penaltiesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) }) : penalties.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          title: "No penalties",
          description: "No penalties have been recorded for this period.",
          sx: { py: 6 }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 600 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Deduction" }),
          canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: penalties.map((penalty) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(penalty.issued_at) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: penalty.reason }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: penalty.amount != null ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: "600", color: "error.main", children: [
            "-",
            fCurrency(penalty.amount)
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: "600", color: "error.main", children: [
            "-",
            penalty.percentage,
            "%"
          ] }) }),
          canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, justifyContent: "flex-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Edit penalty", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                color: "default",
                onClick: () => handleOpenEdit(penalty),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 18 })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Delete penalty", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                color: "error",
                disabled: deletingId === penalty.id,
                onClick: () => handleDelete(penalty.id),
                children: deletingId === penalty.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16, color: "inherit" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 18 })
              }
            ) })
          ] }) })
        ] }, penalty.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PenaltyDialog,
      {
        open: dialogOpen,
        onClose: handleClose,
        onSubmit: handleSubmit,
        isSubmitting,
        currentPenalty: editingPenalty
      }
    )
  ] });
}
StaffPenalties.propTypes = {
  staffId: o.string.isRequired,
  branchId: o.string,
  canEdit: o.bool
};
const groupLabel$1 = Object.fromEntries(SERVICE_GROUPS.map((g) => [g.value, g.label]));
function ServiceAssignmentDialog({
  open,
  onClose,
  staffId,
  branch,
  stylistServices,
  allServices,
  stylistServicesLoading,
  allServicesLoading,
  assignServiceToStylist,
  removeServiceFromStylist,
  bulkAssignServicesToStylist,
  bulkRemoveServicesFromStylist,
  stylistServicesRefetch
}) {
  const [checkedServices, setCheckedServices] = reactExports.useState(/* @__PURE__ */ new Set());
  const [isSaving, setIsSaving] = reactExports.useState(false);
  const { user } = useAuthContext();
  const assignedServiceIds = stylistServices?.map((s) => s.service_id) || [];
  reactExports.useEffect(() => {
    if (open) {
      setCheckedServices(new Set(assignedServiceIds));
    }
  }, [open, stylistServices]);
  const servicesByGroup = (allServices || []).reduce((acc, service) => {
    const group = service.service_group || service.category || "other";
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(service);
    return acc;
  }, {});
  const handleServiceToggle = (serviceId) => {
    setCheckedServices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };
  const handleGroupToggle = (group) => {
    const groupServices = servicesByGroup[group] || [];
    const groupServiceIds = groupServices.map((service) => service.id);
    const allSelected = groupServiceIds.every((id) => checkedServices.has(id));
    setCheckedServices((prev) => {
      const newSet = new Set(prev);
      if (allSelected) {
        groupServiceIds.forEach((id) => newSet.delete(id));
      } else {
        groupServiceIds.forEach((id) => newSet.add(id));
      }
      return newSet;
    });
  };
  const isGroupFullySelected = (group) => {
    const groupServices = servicesByGroup[group] || [];
    const groupServiceIds = groupServices.map((service) => service.id);
    return groupServiceIds.length > 0 && groupServiceIds.every((id) => checkedServices.has(id));
  };
  const isGroupPartiallySelected = (group) => {
    const groupServices = servicesByGroup[group] || [];
    const groupServiceIds = groupServices.map((service) => service.id);
    const selectedCount = groupServiceIds.filter((id) => checkedServices.has(id)).length;
    return selectedCount > 0 && selectedCount < groupServiceIds.length;
  };
  const handleSelectAll = () => {
    const allIds = (allServices || []).map((s) => s.id);
    const allSelected = allIds.every((id) => checkedServices.has(id));
    setCheckedServices(allSelected ? /* @__PURE__ */ new Set() : new Set(allIds));
  };
  const isAllSelected = (allServices || []).length > 0 && (allServices || []).every((s) => checkedServices.has(s.id));
  const isAllPartial = !isAllSelected && (allServices || []).some((s) => checkedServices.has(s.id));
  const handleSave = async () => {
    setIsSaving(true);
    try {
      const currentlyAssigned2 = new Set(assignedServiceIds);
      const newChecked = checkedServices;
      const toAdd2 = [...newChecked].filter((id) => !currentlyAssigned2.has(id));
      const toRemove2 = [...currentlyAssigned2].filter((id) => !newChecked.has(id));
      const promises = [];
      if (toAdd2.length > 0) {
        promises.push(
          bulkAssignServicesToStylist({
            userId: staffId,
            branchId: branch.branch_id,
            serviceIds: toAdd2,
            assignedBy: user.id
            // TODO: Add current user ID
          })
        );
      }
      if (toRemove2.length > 0) {
        promises.push(bulkRemoveServicesFromStylist(staffId, branch.branch_id, toRemove2));
      }
      if (promises.length > 0) {
        await Promise.all(promises);
        await stylistServicesRefetch();
        const added = toAdd2.length;
        const removed = toRemove2.length;
        const messages = [];
        if (added > 0) messages.push(`${added} added`);
        if (removed > 0) messages.push(`${removed} removed`);
        toast.success(`Services updated: ${messages.join(", ")}`);
      } else {
        toast.info("No changes to save");
      }
      onClose();
    } catch (error) {
      console.error("Error updating services:", error);
      toast.error(error.message || "Failed to update services");
    } finally {
      setIsSaving(false);
    }
  };
  const handleCancel = () => {
    setCheckedServices(new Set(assignedServiceIds));
    onClose();
  };
  const currentlyAssigned = new Set(assignedServiceIds);
  const toAdd = [...checkedServices].filter((id) => !currentlyAssigned.has(id));
  const toRemove = [...currentlyAssigned].filter((id) => !checkedServices.has(id));
  const hasChanges = toAdd.length > 0 || toRemove.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "flex-start", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Manage Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Check or uncheck services to assign or remove them" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "small",
          variant: "outlined",
          onClick: handleSelectAll,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              checked: isAllSelected,
              indeterminate: isAllPartial,
              sx: { p: 0 },
              size: "small",
              disableRipple: true
            }
          ),
          sx: { mt: 0.5, flexShrink: 0 },
          children: isAllSelected ? "Deselect All" : "Select All"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { pt: 1 }, children: allServicesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Loading services..." }) : allServices && allServices.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: Object.entries(servicesByGroup).map(([group, services], index) => {
      const isFullySelected = isGroupFullySelected(group);
      const isPartiallySelected = isGroupPartiallySelected(group);
      const label = groupLabel$1[group] || group;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 2 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 1,
              cursor: "pointer",
              "&:hover": {
                "& .group-text": {
                  color: "primary.main"
                }
              }
            },
            onClick: () => handleGroupToggle(group),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  checked: isFullySelected,
                  indeterminate: isPartiallySelected,
                  onChange: () => handleGroupToggle(group),
                  sx: { p: 0 },
                  color: "primary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "subtitle2",
                  sx: {
                    color: "text.primary",
                    transition: "color 0.2s"
                  },
                  className: "group-text",
                  children: [
                    label,
                    " (",
                    services.length,
                    ")"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", flexDirection: "column" }, children: services.map((service) => {
          const isChecked = checkedServices.has(service.id);
          const wasAssigned = assignedServiceIds.includes(service.id);
          const hasChanged = isChecked !== wasAssigned;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 1,
                py: 0.5,
                borderRadius: 1,
                cursor: "pointer",
                "&:hover": { bgcolor: hasChanged ? "warning.light" : "action.hover" }
              },
              onClick: () => handleServiceToggle(service.id),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    checked: isChecked,
                    onChange: () => handleServiceToggle(service.id),
                    sx: { p: 0 },
                    color: hasChanged ? "warning" : "success"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "body2",
                    fontWeight: hasChanged ? "medium" : "regular",
                    color: hasChanged ? "warning.dark" : "text.primary",
                    children: service.name
                  }
                )
              ]
            },
            service.id
          );
        }) })
      ] }, group);
    }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "No services available for this branch." }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, flex: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
          checkedServices.size,
          " active service(s)"
        ] }),
        hasChanges && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "warning.main", fontWeight: "medium", children: [
          "• ",
          toAdd.length + toRemove.length,
          " pending change(s)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          onClick: handleCancel,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold" }),
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoadingButton,
        {
          variant: "contained",
          onClick: handleSave,
          disabled: !hasChanges || isSaving,
          loading: isSaving,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:diskette-bold" }),
          children: "Save Changes"
        }
      )
    ] })
  ] });
}
const groupLabel = Object.fromEntries(SERVICE_GROUPS.map((g) => [g.value, g.label]));
function ServiceAssignment({
  staffId,
  branch,
  stylistServices,
  allServices,
  stylistServicesLoading,
  allServicesLoading,
  assignServiceToStylist,
  removeServiceFromStylist,
  bulkAssignServicesToStylist,
  bulkRemoveServicesFromStylist,
  stylistServicesRefetch
}) {
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Service Assignment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            size: "small",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
            onClick: () => setDialogOpen(true),
            children: "Edit Services"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: stylistServicesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Loading services..." }) : stylistServices?.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: [
          "Assigned Services (",
          stylistServices.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { maxHeight: 280, overflowY: "auto" }, children: (() => {
          const groupedServices = stylistServices.reduce((acc, service) => {
            const cat = service.service_group || "Uncategorized";
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(service);
            return acc;
          }, {});
          return Object.keys(groupedServices).sort().map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 2 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "body2",
                sx: { fontWeight: "bold", mb: 1, textTransform: "capitalize" },
                children: groupLabel[category] || category
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: groupedServices[category].sort((a, b) => a.service_name.localeCompare(b.service_name)).map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: service.service_name }) }, service.service_id)) }) })
          ] }, category));
        })() })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "No services assigned yet." }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServiceAssignmentDialog,
      {
        open: dialogOpen,
        onClose: () => setDialogOpen(false),
        staffId,
        branch,
        stylistServices,
        allServices,
        stylistServicesLoading,
        allServicesLoading,
        assignServiceToStylist,
        removeServiceFromStylist,
        bulkAssignServicesToStylist,
        bulkRemoveServicesFromStylist,
        stylistServicesRefetch
      }
    )
  ] });
}
function StylistLevelCard({
  isEditing,
  currentLevel,
  handleEditClick,
  control,
  errors,
  onSubmit,
  handleCancel,
  isUpdating,
  employeeLevels,
  branch,
  onViewHistory
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Stylist Level" }),
      !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          size: "small",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
          onClick: handleEditClick,
          children: "Edit Level"
        }
      )
    ] }),
    !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: currentLevel ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "success", variant: "outlined", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Current Level" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
        STYLIST_LEVELS.find((l) => l.value === currentLevel.stylist_level)?.label || currentLevel.stylist_level,
        currentLevel.effective_from && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Typography,
          {
            component: "span",
            variant: "caption",
            sx: { ml: 1, color: "text.secondary" },
            children: [
              "Since ",
              fDate(currentLevel.effective_from, "DD/MM/YYYY")
            ]
          }
        )
      ] }),
      currentLevel.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { mt: 0.5, fontStyle: "italic" }, children: [
        "Notes: ",
        currentLevel.notes
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "warning", variant: "outlined", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "No Level Assigned" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: "Please set a stylist level for proper service pricing." })
    ] }) }),
    isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "form", onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "stylist_level",
          control,
          rules: { required: "Stylist level is required" },
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { error: !!errors.stylist_level, size: "small", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Stylist Level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { ...field, label: "Stylist Level", children: STYLIST_LEVELS.map((level) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: level.value, children: level.label }, level.value)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { children: errors.stylist_level?.message || "Select the appropriate level for pricing" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "notes",
          control,
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              ...field,
              label: "Notes (Optional)",
              multiline: true,
              rows: 2,
              size: "small",
              placeholder: "Add any notes about this level change..."
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingButton,
          {
            type: "submit",
            variant: "contained",
            size: "small",
            loading: isUpdating,
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold" }),
            children: "Save"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            size: "small",
            onClick: handleCancel,
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold" }),
            children: "Cancel"
          }
        )
      ] })
    ] }) }),
    !isEditing && employeeLevels && employeeLevels.filter(
      (level) => level.effective_until && level.branch_id === branch.branch_id
    ).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", size: "small", onClick: onViewHistory, children: "View History" })
  ] }) }) });
}
function LevelHistoryDialog({ open, onClose, employeeLevels, branch }) {
  const filteredLevels = employeeLevels.filter((level) => level.effective_until && level.branch_id === branch.branch_id).sort((a, b) => new Date(a.effective_from) - new Date(b.effective_from));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Level History" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Timeline,
      {
        position: "right",
        sx: {
          p: 0,
          minHeight: 320,
          [`& .${timelineItemClasses.root}:before`]: { p: 0, flex: 0 }
        },
        children: filteredLevels.map((level, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineItem, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineSeparator, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TimelineDot,
              {
                color: STYLIST_LEVELS.find((l) => l.value === level.stylist_level)?.color || "grey"
              }
            ),
            index < filteredLevels.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineConnector, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { fontWeight: "bold" }, children: STYLIST_LEVELS.find((l) => l.value === level.stylist_level)?.label || level.stylist_level }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              fDate(level.effective_from),
              " to ",
              fDate(level.effective_until)
            ] }),
            level.notes && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { display: "block", mt: 0.5 }, children: level.notes })
          ] })
        ] }, level.id))
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "Close" }) })
  ] });
}
function BranchLevelManagement({
  staffId,
  branch,
  employeeLevels,
  employeeLevelsRefetch,
  updateEmployeeLevel,
  isUpdating
}) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [openHistoryDialog, setOpenHistoryDialog] = reactExports.useState(false);
  const currentLevel = employeeLevels?.find(
    (level) => !level.effective_until && level.branch_id === branch.branch_id
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm({
    defaultValues: {
      stylist_level: currentLevel?.stylist_level || "",
      notes: ""
    }
  });
  const { stylistServices, stylistServicesLoading, stylistServicesRefetch } = useGetStylistServices(
    staffId,
    branch.branch_id
  );
  const { allServices, allServicesLoading } = useGetAllServices();
  const {
    assignServiceToStylist,
    removeServiceFromStylist,
    bulkAssignServicesToStylist,
    bulkRemoveServicesFromStylist
  } = useStylistServicesMutation();
  const handleEditClick = reactExports.useCallback(() => {
    setIsEditing(true);
    setValue("stylist_level", currentLevel?.stylist_level || "");
    setValue("notes", "");
  }, [setValue, currentLevel]);
  const handleCancel = reactExports.useCallback(() => {
    setIsEditing(false);
    reset();
  }, [reset]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateEmployeeLevel({
        userId: staffId,
        branchId: branch.branch_id,
        stylistLevel: data.stylist_level,
        notes: data.notes
      });
      await employeeLevelsRefetch();
      setIsEditing(false);
      reset();
      toast.success(`Stylist level updated successfully for ${branch.branch_name}!`);
    } catch (error) {
      console.error("Error updating stylist level:", error);
      toast.error(error.message || "Failed to update stylist level");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, direction: "row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 7 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServiceAssignment,
      {
        staffId,
        branch,
        stylistServices,
        allServices,
        stylistServicesLoading,
        allServicesLoading,
        assignServiceToStylist,
        removeServiceFromStylist,
        bulkAssignServicesToStylist,
        bulkRemoveServicesFromStylist,
        stylistServicesRefetch
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      StylistLevelCard,
      {
        isEditing,
        currentLevel,
        handleEditClick,
        control,
        errors,
        onSubmit,
        handleCancel,
        isUpdating,
        employeeLevels,
        branch,
        onViewHistory: () => setOpenHistoryDialog(true)
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LevelHistoryDialog,
      {
        open: openHistoryDialog,
        onClose: () => setOpenHistoryDialog(false),
        employeeLevels,
        branch
      }
    )
  ] });
}
const isStylistRole = (role) => ["stylist", "senior_stylist", "manager", "owner"].includes(role);
function StatCard({ icon, label, value, color, bgColor }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 2.5, flex: 1, minWidth: 140 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", spacing: 1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: "block", mb: 0.5 }, children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { color }, children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1.5,
          bgcolor: bgColor,
          flexShrink: 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 24, sx: { color } })
      }
    )
  ] }) });
}
function StaffLevelManagement({ staffId, staffData }) {
  const { employeeLevels, employeeLevelsLoading, employeeLevelsRefetch } = useGetEmployeeLevels(staffId);
  const { updateEmployeeLevel, isUpdating } = useEmployeeLevelMutation();
  const branches = staffData?.branches || [];
  const profileRoles = staffData?.roles || [];
  const primaryBranch = branches.find((b) => b.is_primary) || branches[0];
  const [selectedBranchId, setSelectedBranchId] = reactExports.useState(primaryBranch?.branch_id ?? null);
  const mappedBranches = branches.map((b) => ({
    id: b.branch_id,
    name: b.branch_name,
    location_type: b.location_type
  }));
  const selectedBranch = branches.find((b) => b.branch_id === selectedBranchId) || branches[0];
  const hasStylistRole = profileRoles.some(isStylistRole);
  const getBranchLevel = (branchId) => employeeLevels?.find((level) => !level.effective_until && level.branch_id === branchId);
  const getLevelLabel = (branchId) => {
    const current = getBranchLevel(branchId);
    if (!current) return null;
    return STYLIST_LEVELS.find((l) => l.value === current.stylist_level)?.label || current.stylist_level;
  };
  const levelsSet = branches.filter((b) => !!getBranchLevel(b.branch_id)).length;
  const levelsUnset = branches.length - levelsSet;
  if (branches.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        title: "No Branch Assignment",
        description: "This staff member needs to be assigned to at least one branch before setting stylist levels.",
        sx: { mt: 3 }
      }
    );
  }
  if (!hasStylistRole) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, mt: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, sx: { mb: 2 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              width: 44,
              height: 44,
              borderRadius: 1.5,
              bgcolor: "info.lighter",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:star-bold-duotone", width: 24, sx: { color: "info.main" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Stylist Level Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Level assignments are only available for stylist roles" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", children: "This staff member does not have a stylist role and does not require level assignments." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { mt: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "solar:chart-2-bold-duotone",
          label: "Branches Assigned",
          value: branches.length,
          color: "#3B82F6",
          bgColor: "rgba(59,130,246,0.08)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "solar:check-circle-bold-duotone",
          label: "Levels Set",
          value: levelsSet,
          color: "#22C55E",
          bgColor: "rgba(34,197,94,0.08)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "solar:clock-circle-bold-duotone",
          label: "Pending Setup",
          value: levelsUnset,
          color: levelsUnset > 0 ? "#F59E0B" : "#94A3B8",
          bgColor: levelsUnset > 0 ? "rgba(245,158,11,0.08)" : "rgba(148,163,184,0.08)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          sx: { pb: 2, borderBottom: 1, borderColor: "divider" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Iconify,
                {
                  icon: "solar:map-point-bold-duotone",
                  width: 18,
                  sx: { color: "text.secondary" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: "semiBold", children: selectedBranch?.branch_name }),
              selectedBranch?.is_primary && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Primary", size: "small", color: "primary", variant: "soft" }),
              getLevelLabel(selectedBranch?.branch_id) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: getLevelLabel(selectedBranch?.branch_id),
                  size: "small",
                  color: "success",
                  variant: "soft"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Unset", size: "small", color: "warning", variant: "soft" })
            ] }),
            branches.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              BranchSelect,
              {
                branches: mappedBranches,
                value: selectedBranchId,
                onChange: setSelectedBranchId,
                showAllOption: false,
                label: "Branch"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { pt: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        BranchLevelManagement,
        {
          staffId,
          branch: selectedBranch,
          employeeLevels,
          employeeLevelsRefetch,
          updateEmployeeLevel,
          isUpdating,
          profileRoles
        }
      ) })
    ] })
  ] });
}
const NAV_ITEMS = [
  {
    value: "",
    label: "General",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:user-id-bold" })
  },
  {
    value: "level",
    label: "Stylist Level",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:medal-star-bold" })
  },
  {
    value: "availability",
    label: "Availability",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:clock-circle-bold-duotone" })
  },
  {
    value: "performance",
    label: "Performance",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:chart-bold-duotone" })
  },
  {
    value: "salary",
    label: "Salary & Commission",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:wallet-bold-duotone" })
  },
  {
    value: "penalties",
    label: "Penalties",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:danger-triangle-bold-duotone" })
  },
  {
    value: "overtime",
    label: "Overtime",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:clock-square-bold-duotone" })
  }
];
const TAB_PARAM = "tab";
function StaffProfileView({ staffId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { primaryBranch } = useUserBranches();
  const { user } = useAuthContext();
  const selectedTab = searchParams.get(TAB_PARAM) ?? "";
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const { employee, employeeLoading, employeeError, employeeRefetch } = useGetEmployeeProfile(staffId);
  const primaryBranchId = primaryBranch?.id;
  const tierBranchId = resolveTierBranchId(employee?.branches, primaryBranchId);
  const { compensation, compensationLoading, compensationRefetch } = useGetEmployeeCompensation(
    staffId,
    primaryBranchId
  );
  const { employeeLevels } = useGetEmployeeLevels(staffId);
  const { updateCompensation } = useEmployeeCompensationMutation();
  const canEdit = canEditStaffProfile(user, staffId);
  const { isAdmin: isAdmin2 } = usePermissions();
  const organizationId = primaryBranch?.organization_id;
  const staffName = employee ? employee.display_name || `${employee.first_name} ${employee.last_name}`.trim() : void 0;
  const createRedirectPath = (currentPath, query) => {
    const queryString = new URLSearchParams({ [TAB_PARAM]: query }).toString();
    return query ? `${currentPath}?${queryString}` : currentPath;
  };
  const handleDataRefresh = reactExports.useCallback(() => {
    employeeRefetch();
  }, [employeeRefetch]);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  const handleSaveSuccess = () => {
    setIsEditing(false);
    handleDataRefresh();
  };
  const handleSalaryUpdate = reactExports.useCallback(
    async (salaryData) => {
      try {
        await updateCompensation(salaryData);
        compensationRefetch();
        toast.success("Salary updated successfully");
      } catch (error) {
        console.error("Error updating salary:", error);
        toast.error("Failed to update salary. Please try again.");
        throw error;
      }
    },
    [updateCompensation, compensationRefetch]
  );
  if (employeeLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { message: "Loading staff information..." });
  }
  if (employeeError || !employee) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        filled: true,
        title: "Employee Not Found",
        description: "The staff member you are looking for does not exist or has been removed."
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        backHref: paths.dashboard.staff.root,
        heading: "Staff Profile",
        links: [
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Staff", href: paths.dashboard.staff.root },
          { name: employee.display_name || `${employee.first_name} ${employee.last_name}` }
        ],
        sx: { mb: 3 },
        action: canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleEditClick,
            variant: "contained",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
            children: "Edit Profile"
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: 160 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StaffProfileCover,
        {
          name: employee.display_name || `${employee.first_name} ${employee.last_name}`,
          email: employee.email,
          avatarUrl: employee.avatar_url,
          roles: employee.roles,
          status: employee.status,
          staffId,
          employeeLevels
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            width: 1,
            bottom: 0,
            zIndex: 9,
            px: { md: 3 },
            display: "flex",
            position: "absolute",
            bgcolor: "background.paper",
            justifyContent: { xs: "center", md: "flex-end" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tabs,
            {
              value: selectedTab,
              scrollButtons: "auto",
              variant: "scrollable",
              allowScrollButtonsMobile: true,
              children: NAV_ITEMS.filter((tab) => !["salary", "overtime"].includes(tab.value) || isAdmin2).map(
                (tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tab,
                  {
                    component: RouterLink,
                    value: tab.value,
                    icon: tab.icon,
                    label: tab.label,
                    href: createRedirectPath(pathname, tab.value)
                  },
                  tab.value
                )
              )
            }
          )
        }
      )
    ] }),
    selectedTab === "" && /* @__PURE__ */ jsxRuntimeExports.jsx(StaffGeneral, { staffData: employee }),
    selectedTab === "level" && /* @__PURE__ */ jsxRuntimeExports.jsx(StaffLevelManagement, { staffId, staffData: employee }),
    selectedTab === "availability" && /* @__PURE__ */ jsxRuntimeExports.jsx(StaffAvailability, { staffId, staffData: employee }),
    selectedTab === "performance" && /* @__PURE__ */ jsxRuntimeExports.jsx(StaffPerformance, { staffId, staffData: employee }),
    selectedTab === "salary" && /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBasedGuard, { roles: ["admin"], hasContent: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      StaffSalaryManagement,
      {
        staffId,
        branchId: primaryBranchId,
        tierBranchId,
        organizationId,
        salaryData: compensation,
        onSalaryUpdate: handleSalaryUpdate,
        canEdit,
        isAdmin: isAdmin2,
        staffName
      }
    ) }),
    selectedTab === "penalties" && /* @__PURE__ */ jsxRuntimeExports.jsx(StaffPenalties, { staffId, branchId: primaryBranchId, canEdit }),
    selectedTab === "overtime" && /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBasedGuard, { roles: ["admin"], hasContent: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      StaffOvertime,
      {
        staffId,
        branchId: primaryBranchId,
        organizationId,
        baseSalary: compensation?.base_salary,
        isAdmin: isAdmin2
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StaffEditForm,
      {
        open: isEditing,
        staffData: employee,
        onCancel: handleCancelEdit,
        onSuccess: handleSaveSuccess
      }
    )
  ] });
}
const metadata = { title: `Staff Profile | Dashboard - ${CONFIG.appName}` };
function StaffProfilePage() {
  const { id = "" } = useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StaffProfileView, { staffId: id })
  ] });
}
export {
  StaffProfilePage as default
};
