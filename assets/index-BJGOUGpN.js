import { r as reactExports, j as jsxRuntimeExports, y as Card, a as Iconify, c as Typography, S as Stack, a2 as Chip, B as Box, as as fDateTime, a0 as fCurrency, bY as usePermissions, M as MenuItem, b as CircularProgress, a6 as useUserBranches, av as useAuthContext, bZ as useAllBranches, E as Ee, h as dayjs, t as toast, T as Tooltip, I as IconButton, d as Button, a4 as DashboardContent, ao as CustomBreadcrumbs, a3 as paths, ap as Tabs, aq as Tab, an as fDate, K as Divider, b_ as fPercent, a1 as LinearProgress, ar as Scrollbar, L as Label, C as CONFIG } from "./index-B08HRm4A.js";
import { b as useExpenseAuditLogs, E as EXPENSE_CATEGORIES, d as useGetExpenseTrends, e as useCreateExpense, f as useUpdateExpense, g as useDeleteExpense, h as EXPENSE_PAYMENT_STATUSES, i as useGetExpenses } from "./expense-service-B2nZjY_a.js";
import { u as useChart, C as Chart } from "./use-chart-7x0b6PVF.js";
import "./styles-BdIysWnF.js";
import "./styles-Ddj8daWs.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { K as KpiCardGrid } from "./KpiCard-D7DSr9FT.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { g as getPresetDates, D as DateRangeControls } from "./getPresetDates-BdaDk_3_.js";
import { T as Timeline, a as TimelineItem, b as TimelineSeparator, c as TimelineDot, d as TimelineConnector, e as TimelineContent } from "./TimelineSeparator-CTCCP9HM.js";
import { T as TablePagination } from "./TablePagination-BOFMLJYr.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
import { C as CardHeader } from "./CardHeader-DCwzSIO8.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { C as CardContent } from "./CardContent-tUS7qwlT.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { b as useGetSuppliers } from "./supplier-service-CvoEEgb8.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { Q as QuickAddSupplierDialog } from "./quick-add-supplier-dialog-DtmRFzkH.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { D as DatePicker } from "./DatePicker-D3PAml74.js";
import { o as object, i as _enum, s as string, k as any, n as number } from "./schemas-BVeYYbTr.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import "./with-selector-ClfCuV5M.js";
import "./render-location-type-B-TZb61z.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./index-C4JOln-R.js";
import "./schema-utils-CG9_JlGr.js";
const SKIPPED_FIELDS = /* @__PURE__ */ new Set([
  "id",
  "created_at",
  "updated_at",
  "created_by",
  "organization_id",
  "branch_id",
  "supplier_id",
  "receipt_url",
  "deleted_at"
]);
const SUMMARY_FIELDS = {
  expense: ["description", "category", "amount", "expense_date", "vendor_name", "notes"]
};
const ACTION_CONFIG = {
  create: { label: "Created", color: "success", icon: "solar:add-circle-bold-duotone" },
  update: { label: "Updated", color: "primary", icon: "solar:pen-bold-duotone" },
  delete: { label: "Deleted", color: "error", icon: "solar:trash-bin-trash-bold-duotone" }
};
function isSoftDelete(log) {
  return log.action === "update" && log.old_data?.deleted_at === null && log.new_data?.deleted_at !== null;
}
function formatValue(value) {
  if (value === null || value === void 0) return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (typeof value === "object") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "string" && !Number.isNaN(Number(value))) {
    return String(value);
  }
  return String(value);
}
function humanLabel(key) {
  const labels = {
    amount: "Amount",
    description: "Description",
    category: "Category",
    expense_date: "Date",
    vendor_name: "Vendor",
    notes: "Notes"
  };
  return labels[key] || key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function getDiff(oldData, newData) {
  if (!oldData || !newData) return [];
  const keys = /* @__PURE__ */ new Set([...Object.keys(oldData), ...Object.keys(newData)]);
  const changes = [];
  keys.forEach((key) => {
    if (SKIPPED_FIELDS.has(key)) return;
    const oldStr = formatValue(oldData[key]);
    const newStr = formatValue(newData[key]);
    if (oldStr !== newStr) {
      changes.push({ field: key, from: oldStr, to: newStr });
    }
  });
  return changes;
}
function getSummaryRows(data, resourceType) {
  if (!data) return [];
  const fields = SUMMARY_FIELDS[resourceType] || Object.keys(data).filter((k) => !SKIPPED_FIELDS.has(k));
  return fields.filter((k) => data[k] !== null && data[k] !== void 0).map((k) => ({ field: k, value: formatValue(data[k]) }));
}
function formatExpenseAmount(data) {
  if (!data?.amount) return null;
  return fCurrency(parseFloat(data.amount));
}
function AuditEntryContent({ log }) {
  const softDelete = isSoftDelete(log);
  const displayAction = softDelete ? "delete" : log.action;
  const config = ACTION_CONFIG[displayAction] || ACTION_CONFIG.update;
  const userName = log.user ? `${log.user.first_name || ""} ${log.user.last_name || ""}`.trim() || "Unknown" : "System";
  const diff = displayAction === "update" ? getDiff(log.old_data, log.new_data) : [];
  const summaryRows = log.action === "create" ? getSummaryRows(log.new_data, log.resource_type) : softDelete ? getSummaryRows(log.old_data, log.resource_type) : [];
  const hasDetails = diff.length > 0 || summaryRows.length > 0;
  const rowData = log.new_data || log.old_data;
  const categoryEntry = EXPENSE_CATEGORIES.find((c) => c.value === rowData?.category);
  const categoryLabel = categoryEntry?.label || rowData?.category || null;
  const amountLabel = formatExpenseAmount(rowData);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      variant: "outlined",
      sx: {
        p: 2,
        mb: 0.5,
        borderRadius: 1.5,
        transition: "box-shadow 0.2s",
        "&:hover": {
          boxShadow: (theme) => theme.customShadows?.z8 || "0 8px 16px rgba(0,0,0,0.1)"
        }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, flexGrow: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, flexWrap: "wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: config.label,
                color: config.color,
                variant: "soft",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: config.icon, width: 14 })
              }
            ),
            categoryLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  size: "small",
                  label: categoryLabel,
                  variant: "soft",
                  color: "default",
                  sx: { textTransform: "capitalize" }
                }
              )
            ] }),
            amountLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", fontWeight: 600, children: amountLabel })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
              "by ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: userName })
            ] })
          ] }),
          rowData?.description && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 0.25 }, children: rowData.description }),
          hasDetails && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                mt: 1,
                p: 1.5,
                borderRadius: 1,
                bgcolor: "background.neutral",
                border: "1px solid",
                borderColor: "divider"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.75, children: [
                diff.map(({ field, from, to }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    spacing: 1,
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Typography,
                        {
                          variant: "caption",
                          sx: { fontWeight: 600, minWidth: 120, color: "text.secondary" },
                          children: [
                            humanLabel(field),
                            ":"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "caption",
                          sx: {
                            textDecoration: "line-through",
                            color: "error.main",
                            maxWidth: 200,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          },
                          children: from
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Iconify,
                        {
                          icon: "solar:arrow-right-bold",
                          width: 12,
                          sx: { color: "text.disabled", flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "caption",
                          sx: {
                            color: "success.main",
                            fontWeight: 600,
                            maxWidth: 200,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          },
                          children: to
                        }
                      )
                    ]
                  },
                  field
                )),
                summaryRows.map(({ field, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    spacing: 1,
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Typography,
                        {
                          variant: "caption",
                          sx: { fontWeight: 600, minWidth: 120, color: "text.secondary" },
                          children: [
                            humanLabel(field),
                            ":"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "caption",
                          sx: {
                            color: softDelete ? "error.main" : "text.primary",
                            fontWeight: log.action === "create" ? 600 : 400
                          },
                          children: value
                        }
                      )
                    ]
                  },
                  field
                ))
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            color: "text.disabled",
            sx: { whiteSpace: "nowrap", flexShrink: 0, pt: 0.25 },
            children: fDateTime(log.created_at)
          }
        )
      ] })
    }
  );
}
function AuditSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { variant: "outlined", sx: { p: 2, borderRadius: 1.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: 80, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: 100, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: 60, height: 24 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: "70%", height: 16 })
  ] }) }, i)) });
}
function ExpenseAuditLog({ organizationId }) {
  const [page, setPage] = reactExports.useState(0);
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(25);
  const { auditLogs, auditLogsTotal, auditLogsLoading } = useExpenseAuditLogs(
    organizationId,
    page,
    rowsPerPage
  );
  if (auditLogsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AuditSkeleton, {});
  }
  if (!auditLogs.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { variant: "outlined", sx: { p: 5, textAlign: "center", borderRadius: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Iconify,
        {
          icon: "solar:clipboard-text-bold-duotone",
          width: 48,
          sx: { color: "text.disabled", mb: 1 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No audit history found for expenses." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Expense Change History" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Chip,
        {
          size: "small",
          label: `${auditLogsTotal} event${auditLogsTotal !== 1 ? "s" : ""}`,
          variant: "soft",
          color: "default"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Timeline,
      {
        sx: {
          p: 0,
          m: 0,
          [`& .MuiTimelineItem-root:before`]: { flex: 0, padding: 0 }
        },
        children: auditLogs.map((log, index) => {
          const softDelete = isSoftDelete(log);
          const displayAction = softDelete ? "delete" : log.action;
          const config = ACTION_CONFIG[displayAction] || ACTION_CONFIG.update;
          const isLast = index === auditLogs.length - 1;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineItem, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineSeparator, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDot, { color: config.color, sx: { boxShadow: "none", p: 0.75 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: config.icon, width: 16 }) }),
              !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineConnector, {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContent, { sx: { pb: isLast ? 0 : 2, pt: 0.25, pr: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuditEntryContent, { log }) })
          ] }, log.id);
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TablePagination,
      {
        component: "div",
        count: auditLogsTotal,
        page,
        onPageChange: (_, newPage) => setPage(newPage),
        rowsPerPage,
        onRowsPerPageChange: (e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        },
        rowsPerPageOptions: [10, 25, 50, 100]
      }
    )
  ] });
}
const TREND_PERIOD_OPTIONS = [
  { value: 3, label: "Last 3 months" },
  { value: 6, label: "Last 6 months" },
  { value: 12, label: "Last 12 months" },
  { value: 24, label: "Last 24 months" }
];
function ExpenseTrendsCard({ organizationId, branchId }) {
  const { isAdmin } = usePermissions();
  const [months, setMonths] = reactExports.useState(6);
  const { trendsData, trendsLoading } = useGetExpenseTrends({
    organizationId,
    branchId: branchId === "all" ? null : branchId,
    months,
    enabled: isAdmin
  });
  const categories = trendsData.map((d) => d.month_label);
  const seriesData = trendsData.map((d) => parseFloat(d.total_expenses));
  const chartOptions = useChart({
    chart: { type: "line" },
    stroke: { width: 2.5, curve: "smooth" },
    markers: { size: 4, strokeWidth: 0 },
    colors: ["#EF4444"],
    xaxis: {
      categories,
      labels: { style: { fontSize: "11px" } }
    },
    yaxis: {
      labels: {
        formatter: (val) => fCurrency(val)
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: { show: true },
      y: {
        formatter: (val, { dataPointIndex }) => {
          const month = categories[dataPointIndex] ?? "";
          return `${month}: ${fCurrency(val)}`;
        },
        title: { formatter: () => "" }
      }
    },
    legend: { show: false },
    grid: { strokeDashArray: 3 }
  });
  const chartSeries = [{ name: "Expenses", data: seriesData }];
  const periodLabel = (() => {
    if (!trendsData.length) return null;
    return `${trendsData[0].month_label} – ${trendsData[trendsData.length - 1].month_label}`;
  })();
  if (!isAdmin) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        title: "Expense Trends",
        subheader: periodLabel ?? " ",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            select: true,
            size: "small",
            value: months,
            onChange: (e) => setMonths(Number(e.target.value)),
            sx: { minWidth: 160 },
            children: TREND_PERIOD_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value))
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: trendsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: { height: 300, display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {})
      }
    ) : !trendsData.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: { height: 300, display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "No data available" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Chart, { type: "line", series: chartSeries, options: chartOptions, sx: { height: 300 } }) })
  ] });
}
const schema = object({
  amount: number().min(1, "Amount is required").transform((val) => {
    const num = parseFloat(val);
    if (isNaN(num) || num <= 0) {
      throw new Error("Amount must be a positive number");
    }
    return num;
  }),
  description: string().min(1, "Description is required").max(500, "Description too long"),
  category: string().min(1, "Category is required"),
  expense_date: any().refine((val) => val && dayjs(val).isValid(), {
    message: "Date is required"
  }),
  branch_id: string().optional(),
  supplier_id: string().nullable().optional(),
  vendor_name: string().max(255, "Vendor name too long").nullable().optional(),
  notes: string().max(1e3, "Notes too long").nullable().optional(),
  payment_status: _enum(["pending", "paid"]).default("pending")
});
function ExpenseFormDialog({ open, onClose, editingExpense }) {
  const { primaryBranch } = useUserBranches();
  const { user } = useAuthContext();
  const { isAdmin } = usePermissions();
  const [confirmDeleteOpen, setConfirmDeleteOpen] = reactExports.useState(false);
  const { createExpense, createExpenseLoading } = useCreateExpense();
  const { updateExpense, updateExpenseLoading } = useUpdateExpense();
  const { deleteExpense, deleteExpenseLoading } = useDeleteExpense();
  const { branches } = useAllBranches();
  const { suppliers, revalidateSuppliers } = useGetSuppliers({ pageSize: 1e3 });
  const quickSupplierDialog = Ee();
  const [createdSupplier, setCreatedSupplier] = reactExports.useState(null);
  const defaultValues = {
    amount: null,
    description: "",
    category: "",
    expense_date: dayjs(),
    branch_id: primaryBranch?.id || "",
    supplier_id: "",
    vendor_name: null,
    notes: "",
    payment_status: "pending"
  };
  const methods = useForm({
    resolver: u(schema),
    defaultValues,
    values: editingExpense ? {
      ...editingExpense,
      expense_date: dayjs(editingExpense.expense_date),
      supplier_id: editingExpense.supplier_id ?? ""
    } : void 0
  });
  const {
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = methods;
  const watchedExpenseDate = watch("expense_date");
  const watchedSupplierId = watch("supplier_id");
  const supplierOptions = (suppliers || []).filter(
    (s) => s.is_active || s.id === watchedSupplierId
  );
  const resolveSupplierFields = (data) => {
    const supplierId = data.supplier_id || null;
    if (supplierId) {
      const supplier = [...suppliers || [], createdSupplier].find((s) => s?.id === supplierId);
      return { supplier_id: supplierId, vendor_name: supplier?.name ?? data.vendor_name ?? null };
    }
    return {
      supplier_id: null,
      vendor_name: editingExpense?.supplier_id ? null : data.vendor_name ?? null
    };
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      if (editingExpense) {
        const changes = {};
        Object.keys(data).forEach((key) => {
          if (JSON.stringify(data[key]) !== JSON.stringify(editingExpense[key])) {
            changes[key] = { from: editingExpense[key], to: data[key] };
          }
        });
        await updateExpense({
          id: editingExpense.id,
          updates: {
            ...data,
            expense_date: dayjs(data.expense_date).format("YYYY-MM-DD"),
            branch_id: data.branch_id || null,
            ...resolveSupplierFields(data)
            // changes: Object.keys(changes).length > 0 ? changes : null,
          }
        });
        toast.success("Expense updated successfully!");
      } else {
        await createExpense({
          ...data,
          organization_id: primaryBranch?.organization_id,
          created_by: user?.id,
          expense_date: dayjs(data.expense_date).format("YYYY-MM-DD"),
          branch_id: data.branch_id || null,
          ...resolveSupplierFields(data)
        });
        toast.success("Expense created successfully!");
      }
      reset();
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("Error saving expense:", error);
      toast.error(editingExpense ? "Failed to update expense" : "Failed to create expense");
    }
  });
  const handleDelete = () => setConfirmDeleteOpen(true);
  const handleConfirmDelete = async () => {
    try {
      await deleteExpense(editingExpense.id);
      toast.success("Expense deleted successfully!");
      setConfirmDeleteOpen(false);
      reset();
      if (onClose) onClose();
    } catch (err) {
      console.error("Error deleting expense:", err);
      toast.error("Failed to delete expense");
    }
  };
  const handleCancel = () => {
    if (onClose) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { sx: { pb: 1 }, children: editingExpense ? "Edit Expense" : "New Expense" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "amount",
              label: "Amount",
              type: "number",
              step: "0.01",
              InputProps: {
                startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "category", label: "Category", children: EXPENSE_CATEGORIES.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: category.value, children: category.label }, category.value)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "description",
            label: "Description",
            multiline: true,
            rows: 3,
            placeholder: "What was this expense for?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DatePicker,
            {
              label: "Expense Date",
              value: watchedExpenseDate || dayjs(),
              onChange: (date) => setValue("expense_date", date),
              slotProps: {
                textField: {
                  fullWidth: true,
                  error: !!errors.expense_date,
                  helperText: errors.expense_date?.message
                }
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "branch_id", label: "Location (Optional)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "All Locations" }) }),
            branches?.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: branch.id, children: branch.name }, branch.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "supplier_id", label: "Supplier (Optional)", sx: { flex: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "None" }) }),
            supplierOptions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: s.id, children: s.name }, s.id))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Quick add supplier", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              onClick: quickSupplierDialog.onTrue,
              sx: { mt: 1, border: "1px dashed", borderColor: "divider", borderRadius: 1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.RadioGroup,
          {
            name: "payment_status",
            label: "Payment Status",
            options: EXPENSE_PAYMENT_STATUSES,
            row: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "notes",
            label: "Notes (Optional)",
            multiline: true,
            rows: 2,
            placeholder: "Any additional notes..."
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        isAdmin && editingExpense && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            color: "error",
            onClick: handleDelete,
            loading: deleteExpenseLoading,
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
            sx: { mr: "auto" },
            children: "Delete"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: handleCancel, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            onClick: onSubmit,
            variant: "contained",
            loading: createExpenseLoading || updateExpenseLoading,
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
            children: editingExpense ? "Update Expense" : "Create Expense"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuickAddSupplierDialog,
      {
        open: quickSupplierDialog.value,
        onClose: quickSupplierDialog.onFalse,
        onCreated: (newSupplier) => {
          setCreatedSupplier(newSupplier);
          revalidateSuppliers?.();
          setValue("supplier_id", newSupplier.id);
          quickSupplierDialog.onFalse();
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDeleteOpen,
        onClose: () => setConfirmDeleteOpen(false),
        title: "Delete Expense",
        content: "Are you sure you want to delete this expense? This action cannot be undone.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: handleConfirmDelete,
            loading: deleteExpenseLoading,
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
            children: "Delete"
          }
        )
      }
    )
  ] });
}
const CATEGORY_COLORS = {
  supplies: "#3B82F6",
  rent: "#F59E0B",
  utilities: "#22C55E",
  equipment: "#6366F1",
  marketing: "#EC4899",
  salaries: "#14B8A6",
  insurance: "#8B5CF6",
  maintenance: "#F97316",
  other: "#94A3B8"
};
function ExpensesListView() {
  const { user } = useAuthContext();
  const { isAdmin } = usePermissions();
  const currentBranch = user?.primary_branch;
  const organizationId = user?.primary_branch?.organization_id || user?.branches?.[0]?.organization_id;
  const [viewTab, setViewTab] = reactExports.useState("list");
  const [expenseDialogOpen, setExpenseDialogOpen] = reactExports.useState(false);
  const [editingExpense, setEditingExpense] = reactExports.useState(null);
  const [preset, setPreset] = reactExports.useState("month");
  const [customStart, setCustomStart] = reactExports.useState(null);
  const [customEnd, setCustomEnd] = reactExports.useState(null);
  const [categoryTab, setCategoryTab] = reactExports.useState("all");
  const [branchId, setBranchId] = reactExports.useState(currentBranch?.id || "all");
  const [page, setPage] = reactExports.useState(0);
  const [markingPaidId, setMarkingPaidId] = reactExports.useState(null);
  const { updateExpense } = useUpdateExpense();
  const handleMarkAsPaid = async (expense) => {
    setMarkingPaidId(expense.id);
    try {
      await updateExpense({ id: expense.id, updates: { payment_status: "paid" } });
      toast.success("Marked as paid!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    } finally {
      setMarkingPaidId(null);
    }
  };
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(25);
  const dateRange = reactExports.useMemo(() => {
    if (customStart && customEnd) return { start: customStart, end: customEnd };
    return getPresetDates(preset);
  }, [preset, customStart, customEnd]);
  const handlePreset = reactExports.useCallback((value) => {
    setPreset(value);
    setCustomStart(null);
    setCustomEnd(null);
  }, []);
  const { expenses, expensesLoading } = useGetExpenses({
    organizationId,
    branchId: branchId === "all" ? null : branchId,
    startDate: dateRange.start.toISOString().split("T")[0],
    endDate: dateRange.end.toISOString().split("T")[0],
    category: "all",
    page: 0,
    pageSize: 1e3
  });
  const { branches } = useAllBranches();
  const totalExpenses = reactExports.useMemo(
    () => expenses.reduce((sum, e) => sum + parseFloat(e.amount || 0), 0),
    [expenses]
  );
  const avgPerTransaction = expenses.length > 0 ? totalExpenses / expenses.length : 0;
  const categorySums = reactExports.useMemo(() => {
    const sums = {};
    expenses.forEach((e) => {
      sums[e.category] = (sums[e.category] || 0) + parseFloat(e.amount || 0);
    });
    return sums;
  }, [expenses]);
  const pendingExpenses = reactExports.useMemo(
    () => expenses.filter((e) => e.payment_status === "pending"),
    [expenses]
  );
  const pendingTotal = reactExports.useMemo(
    () => pendingExpenses.reduce((sum, e) => sum + parseFloat(e.amount || 0), 0),
    [pendingExpenses]
  );
  const topCategory = reactExports.useMemo(() => {
    const entries = Object.entries(categorySums);
    if (!entries.length) return null;
    const [catValue, catAmount] = entries.sort((a, b) => b[1] - a[1])[0];
    const cat = EXPENSE_CATEGORIES.find((c) => c.value === catValue);
    return { label: cat?.label || catValue, amount: catAmount };
  }, [categorySums]);
  const dailyData = reactExports.useMemo(() => {
    const map = {};
    expenses.forEach((e) => {
      const day = e.expense_date;
      map[day] = (map[day] || 0) + parseFloat(e.amount || 0);
    });
    return Object.entries(map).sort((a, b) => a[0].localeCompare(b[0])).map(([date, amount]) => ({ date, amount }));
  }, [expenses]);
  const categoryBreakdown = reactExports.useMemo(
    () => Object.entries(categorySums).map(([value, amount]) => {
      const cat = EXPENSE_CATEGORIES.find((c) => c.value === value);
      return { value, label: cat?.label || value, amount };
    }).sort((a, b) => b.amount - a.amount),
    [categorySums]
  );
  const filteredExpenses = reactExports.useMemo(() => {
    if (categoryTab === "all") return expenses;
    return expenses.filter((e) => e.category === categoryTab);
  }, [expenses, categoryTab]);
  const paginatedExpenses = reactExports.useMemo(
    () => filteredExpenses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [filteredExpenses, page, rowsPerPage]
  );
  const kpiCards = [
    {
      label: "Total Expenses",
      value: fCurrency(totalExpenses),
      icon: "solar:wallet-bold-duotone",
      note: `${expenses.length} transaction${expenses.length !== 1 ? "s" : ""}`,
      color: "#EF4444",
      bgColor: "rgba(239,68,68,0.08)"
    },
    {
      label: "Avg per Transaction",
      value: fCurrency(avgPerTransaction),
      icon: "solar:chart-2-bold-duotone",
      note: "Average expense amount",
      color: "#3B82F6",
      bgColor: "rgba(59,130,246,0.08)"
    },
    {
      label: "Top Category",
      value: fCurrency(topCategory?.amount || 0),
      icon: "solar:tag-price-bold-duotone",
      note: topCategory ? topCategory.label : "No data",
      color: "#F59E0B",
      bgColor: "rgba(245,158,11,0.08)"
    },
    {
      label: "Pending Expenses",
      value: fCurrency(pendingTotal),
      icon: "solar:clock-circle-bold-duotone",
      note: `${pendingExpenses.length} unpaid transaction${pendingExpenses.length !== 1 ? "s" : ""}`,
      color: "#F59E0B",
      bgColor: "rgba(245,158,11,0.08)"
    }
  ];
  const barChartOptions = useChart({
    chart: { type: "bar" },
    xaxis: {
      categories: dailyData.map((d) => {
        const date = /* @__PURE__ */ new Date(d.date + "T00:00:00");
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      }),
      labels: { style: { fontSize: "11px" } }
    },
    yaxis: {
      labels: { formatter: (val) => fCurrency(val) }
    },
    tooltip: { fillSeriesColor: true, y: { formatter: (val) => fCurrency(val) } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: "60%" } },
    colors: ["#EF4444"]
  });
  const barChartSeries = [
    { name: "Expenses", data: dailyData.map((d) => parseFloat(d.amount.toFixed(2))) }
  ];
  const donutTotal = categoryBreakdown.reduce((sum, c) => sum + c.amount, 0);
  const donutOptions = useChart({
    chart: { type: "donut" },
    stroke: { show: false },
    labels: categoryBreakdown.map((c) => c.label),
    colors: categoryBreakdown.map((c) => CATEGORY_COLORS[c.value] || "#94A3B8"),
    legend: { show: true, position: "bottom" },
    tooltip: { fillSeriesColor: true, y: { formatter: (val) => fCurrency(val) } },
    dataLabels: {
      enabled: true,
      formatter: (val) => val >= 5 ? `${Math.round(val)}%` : "",
      style: { fontSize: "15px", fontWeight: 700, colors: ["#000"] },
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 4,
        borderWidth: 0,
        color: "#000",
        opacity: 0.75,
        dropShadow: { enabled: false }
      },
      dropShadow: { enabled: false }
    },
    plotOptions: {
      pie: {
        donut: {
          size: "72%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => fCurrency(donutTotal)
            }
          }
        }
      }
    }
  });
  const donutSeries = categoryBreakdown.map((c) => c.amount);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Expenses",
        links: [{ name: "Dashboard", href: paths.dashboard.root }, { name: "Expenses" }],
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, alignItems: "center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            BranchSelect,
            {
              branches: branches ?? [],
              value: branchId,
              onChange: setBranchId,
              allLabel: "All Locations",
              minWidth: 160
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: () => {
                setEditingExpense(null);
                setExpenseDialogOpen(true);
              },
              children: "New Expense"
            }
          )
        ] }),
        sx: { mb: 3 }
      }
    ),
    isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Tabs,
      {
        value: viewTab,
        onChange: (_, val) => setViewTab(val),
        sx: { mb: 3, borderBottom: "1px solid", borderColor: "divider" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: "list", label: "Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: "audit", label: "Audit Log" })
        ]
      }
    ),
    viewTab === "audit" && isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseAuditLog, { organizationId }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DateRangeControls,
        {
          preset,
          customStart,
          customEnd,
          onPresetChange: handlePreset,
          onCustomStartChange: setCustomStart,
          onCustomEndChange: setCustomEnd,
          loading: expensesLoading
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiCardGrid,
        {
          cards: kpiCards,
          loading: expensesLoading,
          columns: { xs: 12, sm: 6, md: 3 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mb: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardHeader,
          {
            title: "Expenses Over Time",
            subheader: `${fDate(dateRange.start)} – ${fDate(dateRange.end)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: expensesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              height: 280,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {})
          }
        ) : dailyData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              height: 280,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "No data for this period" })
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chart,
          {
            type: "bar",
            series: barChartSeries,
            options: barChartOptions,
            sx: { height: 280 }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseTrendsCard, { organizationId, branchId }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, sx: { mb: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CardHeader,
            {
              title: "Expenses by Category",
              subheader: "Distribution across all categories"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: expensesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                height: 280,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {})
            }
          ) : donutTotal === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                height: 280,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "No data available" })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chart,
              {
                type: "donut",
                series: donutSeries,
                options: donutOptions,
                sx: { height: 220 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, children: categoryBreakdown.slice(0, 5).map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Box,
                      {
                        sx: {
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: CATEGORY_COLORS[cat.value] || "#94A3B8",
                          flexShrink: 0
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: cat.label })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: donutTotal > 0 ? fPercent(cat.amount / donutTotal * 100) : "0%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(cat.amount) })
                  ] })
                ]
              },
              cat.value
            )) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CardHeader,
            {
              title: "Category Spending",
              subheader: `Total: ${fCurrency(totalExpenses)}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: expensesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                height: 280,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {})
            }
          ) : categoryBreakdown.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                height: 280,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "No expenses recorded" })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2.5, sx: { pt: 1 }, children: categoryBreakdown.map((cat) => {
            const color = CATEGORY_COLORS[cat.value] || "#94A3B8";
            const pct = totalExpenses > 0 ? cat.amount / totalExpenses * 100 : 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", sx: { mb: 0.75 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      sx: {
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: color
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: cat.label })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.5, alignItems: "center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: fPercent(pct) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(cat.amount) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                LinearProgress,
                {
                  variant: "determinate",
                  value: Math.min(pct, 100),
                  sx: {
                    height: 6,
                    borderRadius: 1,
                    bgcolor: "action.hover",
                    "& .MuiLinearProgress-bar": { bgcolor: color, borderRadius: 1 }
                  }
                }
              )
            ] }, cat.value);
          }) }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          sx: {
            minHeight: 640,
            flexGrow: { md: 1 },
            display: { md: "flex" },
            flexDirection: { md: "column" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Expense Transactions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Tabs,
              {
                value: categoryTab,
                onChange: (_, val) => {
                  setCategoryTab(val);
                  setPage(0);
                },
                sx: { px: 3, borderBottom: "1px solid", borderColor: "divider" },
                variant: "scrollable",
                scrollButtons: "auto",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: "all", label: "All" }),
                  EXPENSE_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: cat.value, label: cat.label }, cat.value))
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 800 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Location" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Amount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Actions" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: expensesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, align: "center", sx: { py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) }) }) : filteredExpenses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, sx: { p: 0, border: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                EmptyContent,
                {
                  title: "No expenses found",
                  description: "Try adjusting your filters or create a new expense",
                  sx: { py: 6 }
                }
              ) }) }) : paginatedExpenses.map((expense) => {
                const category = EXPENSE_CATEGORIES.find((c) => c.value === expense.category);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: expense.description }),
                    expense.vendor_name && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                      "Vendor: ",
                      expense.vendor_name
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "info", variant: "soft", children: category?.label || expense.category }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      color: expense.payment_status === "paid" ? "success" : "warning",
                      variant: "soft",
                      children: EXPENSE_PAYMENT_STATUSES.find(
                        (s) => s.value === expense.payment_status
                      )?.label || "Pending"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(expense.expense_date) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: expense.branch?.name || "All Locations" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "error.main", children: fCurrency(expense.amount) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: expense.salary_payment?.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Managed via Salary Payments — edit from the staff profile", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "small",
                      disabled: true,
                      startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:lock-bold" }),
                      children: "Salary"
                    }
                  ) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "small",
                        onClick: () => {
                          setEditingExpense(expense);
                          setExpenseDialogOpen(true);
                        },
                        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
                        children: "Edit"
                      }
                    ),
                    expense.payment_status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Mark as paid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "small",
                        color: "success",
                        loading: markingPaidId === expense.id,
                        onClick: () => handleMarkAsPaid(expense),
                        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold" }),
                        children: "Paid"
                      }
                    ) })
                  ] }) })
                ] }, expense.id);
              }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TablePagination,
              {
                component: "div",
                count: filteredExpenses.length,
                page,
                onPageChange: (_, newPage) => setPage(newPage),
                rowsPerPage,
                onRowsPerPageChange: (e) => {
                  setRowsPerPage(parseInt(e.target.value, 10));
                  setPage(0);
                },
                rowsPerPageOptions: [10, 25, 50, 100]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ExpenseFormDialog,
        {
          open: expenseDialogOpen,
          onClose: () => {
            setExpenseDialogOpen(false);
            setEditingExpense(null);
          },
          editingExpense
        }
      )
    ] })
  ] });
}
const metadata = { title: `Expenses | Dashboard - ${CONFIG.appName}` };
function ExpensesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesListView, {})
  ] });
}
export {
  ExpensesPage as default
};
