import { j as jsxRuntimeExports, a as Iconify, x as Select, M as MenuItem, E as Ee, r as reactExports, t as toast, S as Stack, a2 as Chip, c as Typography, B as Box, K as Divider, d as Button, b as CircularProgress, L as Label, T as Tooltip, a0 as fCurrency, av as useAuthContext, bY as usePermissions, a4 as DashboardContent, ao as CustomBreadcrumbs, ap as Tabs, aq as Tab, y as Card, bq as gridClasses, C as CONFIG } from "./index-B08HRm4A.js";
import { t as toFirstOfMonth, c as updateDiscountPlanTemplate, d as createDiscountPlanTemplate, r as reactivateDiscountPlanTemplate, e as useGetAllClientDiscountPlansServer, f as useGetDiscountPlanTemplatesServer, g as cancelClientDiscountPlan, h as finalizeExpiredDiscountPlanCommissions, i as deactivateDiscountPlanTemplate } from "./discount-plan-service-DWSzNOBf.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton, C as CustomToolbarQuickFilter } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { T as TextField, F as FormControl, I as InputLabel } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { T as Toolbar, D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { h as useGetServices, b as SERVICE_GROUPS } from "./services-UhlA7T7c.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { o as object, a as array, s as string, r as record, p as preprocess, n as number, k as any } from "./schemas-BVeYYbTr.js";
import { n as number$1 } from "./coerce-5-WTXoHr.js";
import { Z as ZodIssueCode } from "./compat-Bw8VbSM1.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { D as DiscountPlanStylistSplitDialog } from "./discount-plan-stylist-split-dialog-CUxyj0Mb.js";
import { C as CustomGridActionsCellItem } from "./grid-actions-cell-item-GDL6dx4W.js";
import "./ExportPrint-CAqo1wR3.js";
import "./index-Di_Bgabu.js";
import "./toPropertyKey-BRoQIA86.js";
import "./with-selector-ClfCuV5M.js";
import "./Skeleton-BC-WlQQE.js";
import "./Autocomplete-BReuRGf-.js";
import "./TablePagination-BOFMLJYr.js";
import "./TableCell-B_5fJIbm.js";
import "./ToggleButton-D4MfeHtt.js";
import "./Checkbox-Br8xlIAK.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./package-service-U57UHzc2.js";
function buildMonthOptions() {
  const opts = [{ label: "All", value: "all" }];
  const now = /* @__PURE__ */ new Date();
  for (let i = -3; i <= 5; i += 1) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    opts.push({
      label: d.toLocaleString("en-US", { month: "long", year: "numeric" }),
      value: toFirstOfMonth(d)
    });
  }
  const [all, ...months] = opts;
  return [all, ...months.reverse()];
}
const MONTH_OPTIONS = buildMonthOptions();
function DiscountPlansTableToolbar({
  selectedMonth,
  onChangeMonth,
  clientSearch,
  onClientSearchChange,
  settings,
  onChangeSettings
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarLeftPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          size: "small",
          placeholder: "Filter by client name",
          value: clientSearch,
          onChange: (e) => onClientSearchChange(e.target.value),
          sx: { minWidth: 200 },
          slotProps: {
            input: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:person-outline", width: 18, sx: { color: "text.disabled" } }) })
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", sx: { minWidth: 180 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Month" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            label: "Month",
            value: selectedMonth,
            onChange: (e) => onChangeMonth(e.target.value),
            children: MONTH_OPTIONS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: m.value, children: m.label }, m.value))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarColumnsButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, {}),
      settings && /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarSettingsButton, { settings, onChangeSettings })
    ] })
  ] }) });
}
const PALETTE_COLORS = [
  "#635BFF",
  "#00B8D9",
  "#36B37E",
  "#FF5630",
  "#FFAB00",
  "#6554C0",
  "#FF7452",
  "#2684FF"
];
const DiscountPlanTemplateSchema = object({
  name: string().min(1, "Name is required"),
  description: string().optional().nullable(),
  price: number$1({ invalid_type_error: "Enter a valid price" }).positive("Price is required"),
  // Per-service max uses: { [serviceId]: number | null }
  service_max_uses: record(
    string(),
    preprocess(
      (v) => v === "" || v == null ? null : Number(v),
      number().int().min(1).nullable()
    )
  ).optional().nullable(),
  // Per-service discount percent: { [serviceId]: number }
  service_discounts: record(
    string(),
    preprocess(
      (v) => v === "" || v == null ? 0 : Number(v),
      number().min(0.01, "Enter a % > 0").max(100, "Max 100%")
    )
  ).optional().default({}),
  color: string().default("#635BFF"),
  service_ids: array(any()).min(1, "Select at least one service")
}).superRefine((data, ctx) => {
  const ids = data.service_ids.map((s) => typeof s === "string" ? s : s?.id).filter(Boolean);
  ids.forEach((id) => {
    const val = data.service_discounts?.[id];
    if (!val || Number(val) <= 0) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "Discount % is required",
        path: ["service_discounts", id]
      });
    }
  });
});
const defaultValues = {
  name: "",
  description: "",
  price: "",
  service_max_uses: {},
  service_discounts: {},
  color: "#635BFF",
  service_ids: []
};
function DiscountPlanTemplateDialog({
  open,
  onClose,
  template = null,
  organizationId,
  createdBy
}) {
  const isEdit = Boolean(template);
  const loading = Ee();
  const { services, servicesLoading } = useGetServices({ pageSize: 200 });
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(DiscountPlanTemplateSchema),
    defaultValues,
    values: template ? {
      name: template.name ?? "",
      description: template.description ?? "",
      price: template.price ?? "",
      service_max_uses: template.service_max_uses ?? {},
      service_discounts: template.service_discounts ?? {},
      color: template.color ?? "#635BFF",
      service_ids: template.service_ids ?? []
    } : void 0
  });
  const {
    reset,
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = methods;
  const colorValue = watch("color");
  const serviceIds = watch("service_ids");
  const serviceDiscounts = watch("service_discounts");
  const serviceMaxUses = watch("service_max_uses");
  reactExports.useEffect(() => {
    if (!services.length || !template?.service_ids?.length) return;
    const resolved = services.filter((s) => template.service_ids.includes(s.id));
    setValue("service_ids", resolved, { shouldValidate: false });
  }, [services, template]);
  const selectedServices = serviceIds.filter((s) => s && typeof s === "object");
  const onSubmit = handleSubmit(async (data) => {
    loading.onTrue();
    try {
      const rawServiceMaxUses = data.service_max_uses ?? {};
      const cleanedServiceMaxUses = Object.fromEntries(
        Object.entries(rawServiceMaxUses).map(([k, v]) => [k, v ? Number(v) : null]).filter(([, v]) => v !== null && !Number.isNaN(v))
      );
      const cleanedServiceDiscounts = Object.fromEntries(
        Object.entries(data.service_discounts ?? {}).map(([k, v]) => [k, v ? Number(v) : null]).filter(([, v]) => v !== null && v > 0 && !Number.isNaN(v))
      );
      const payload = {
        name: data.name.trim(),
        description: data.description?.trim() || null,
        price: Number(data.price),
        service_max_uses: Object.keys(cleanedServiceMaxUses).length > 0 ? cleanedServiceMaxUses : null,
        service_discounts: cleanedServiceDiscounts,
        color: data.color,
        service_ids: data.service_ids.map((s) => typeof s === "string" ? s : s.id),
        organization_id: organizationId
      };
      if (isEdit) {
        await updateDiscountPlanTemplate(template.id, { ...payload, updated_by: createdBy });
      } else {
        await createDiscountPlanTemplate({
          organizationId,
          name: payload.name,
          description: payload.description,
          price: payload.price,
          color: payload.color,
          serviceIds: payload.service_ids,
          serviceDiscounts: payload.service_discounts,
          serviceMaxUses: payload.service_max_uses,
          createdBy
        });
      }
      toast.success(isEdit ? "Discount plan updated" : "Discount plan created");
      reset();
      onClose(true);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong");
    } finally {
      loading.onFalse();
    }
  });
  const isInactive = isEdit && template?.is_active === false;
  const handleReactivate = async () => {
    loading.onTrue();
    try {
      await reactivateDiscountPlanTemplate(template.id);
      toast.success("Discount plan reactivated");
      onClose(true);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to reactivate");
    } finally {
      loading.onFalse();
    }
  };
  const GROUP_LABELS = Object.fromEntries(SERVICE_GROUPS.map((g) => [g.value, g.label]));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: () => onClose(false), maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Discount Plan" : "New Discount Plan Template" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, id: "discount-plan-template-form", onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Plan name", fullWidth: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "description",
          label: "Description (optional)",
          multiline: true,
          rows: 2,
          fullWidth: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Autocomplete,
        {
          name: "service_ids",
          label: "Covered services",
          multiple: true,
          disableCloseOnSelect: true,
          options: services,
          loading: servicesLoading,
          getOptionLabel: (o) => o.name,
          isOptionEqualToValue: (o, v) => o.id === v.id,
          groupBy: (o) => o.service_group ?? o.category ?? "Other",
          renderGroup: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { px: 2, py: 0.5, color: "primary.main" }, children: GROUP_LABELS[params.group] ?? params.group }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: { padding: 0 }, children: params.children })
          ] }, params.key),
          placeholder: serviceIds.length === 0 ? "Select services..." : "",
          helperText: "Pick the services this plan gives a discount on",
          renderTags: (selected, getTagProps) => selected.filter((o) => o && typeof o === "object").map((option, index) => /* @__PURE__ */ reactExports.createElement(
            Chip,
            {
              size: "small",
              label: option.name,
              ...getTagProps({ index }),
              key: option.id
            }
          ))
        }
      ),
      selectedServices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { mb: 2 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: "Discount per service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, children: selectedServices.map((svc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { flex: 1 }, noWrap: true, children: svc.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              size: "small",
              type: "number",
              label: "Discount %",
              required: true,
              value: serviceDiscounts?.[svc.id] ?? "",
              error: Boolean(errors.service_discounts?.[svc.id]),
              helperText: errors.service_discounts?.[svc.id]?.message,
              onChange: (e) => {
                const val = e.target.value;
                setValue(
                  "service_discounts",
                  { ...serviceDiscounts ?? {}, [svc.id]: val },
                  { shouldDirty: true }
                );
              },
              slotProps: {
                htmlInput: { min: 0.01, max: 100, step: 0.5 },
                input: {
                  endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "%" })
                }
              },
              sx: { width: 130 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              size: "small",
              type: "number",
              label: "Max uses",
              placeholder: "Unlimited",
              value: serviceMaxUses?.[svc.id] ?? "",
              onChange: (e) => {
                const val = e.target.value;
                setValue(
                  "service_max_uses",
                  { ...serviceMaxUses ?? {}, [svc.id]: val },
                  { shouldDirty: true }
                );
              },
              slotProps: { htmlInput: { min: 1 } },
              sx: { width: 120 }
            }
          )
        ] }, svc.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "price",
          label: "Plan price",
          type: "number",
          slotProps: { htmlInput: { min: 0 } },
          fullWidth: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Color" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", children: PALETTE_COLORS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            onClick: () => setValue("color", c, { shouldDirty: true }),
            sx: {
              width: 28,
              height: 28,
              borderRadius: "50%",
              bgcolor: c,
              cursor: "pointer",
              border: "2.5px solid",
              borderColor: colorValue === c ? "text.primary" : "transparent",
              transition: "border-color 0.15s"
            }
          },
          c
        )) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      isInactive && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          color: "warning",
          onClick: handleReactivate,
          disabled: loading.value,
          children: "Reactivate"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onClose(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          form: "discount-plan-template-form",
          variant: "contained",
          disabled: isSubmitting || loading.value,
          startIcon: loading.value && /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 14 }),
          children: isEdit ? "Save changes" : "Create plan"
        }
      )
    ] })
  ] });
}
function DiscountPlanTemplatesToolbar({ settings, onChangeSettings }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarLeftPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarQuickFilter, { size: "small" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarColumnsButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, {}),
      settings && /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarSettingsButton, { settings, onChangeSettings })
    ] })
  ] }) });
}
function useDiscountPlanTemplateColumns({ confirmDialog, handleEditRow, setDeletingId }) {
  return reactExports.useMemo(
    () => [
      {
        field: "name",
        headerName: "Plan",
        flex: 1,
        minWidth: 180,
        renderCell: ({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { height: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: row.color || "#635BFF",
                flexShrink: 0
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: row.name })
        ] })
      },
      {
        field: "service_ids",
        headerName: "Services & Discounts",
        flex: 2,
        minWidth: 240,
        sortable: false,
        filterable: false,
        renderCell: ({ row }) => {
          const services = row.services || [];
          const discounts = row.service_discounts || {};
          if (!services.length) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "default", children: "No services" });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              direction: "row",
              spacing: 0.5,
              alignItems: "center",
              sx: { height: 1, flexWrap: "nowrap", overflow: "hidden" },
              children: [
                services.slice(0, 3).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: `${discounts[s.id] ?? 0}% off`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    size: "small",
                    label: `${s.name} −${discounts[s.id] ?? 0}%`,
                    variant: "soft",
                    color: "info"
                  }
                ) }, s.id)),
                services.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: `+${services.length - 3}`, size: "small", variant: "outlined" })
              ]
            }
          );
        }
      },
      {
        field: "price",
        headerName: "Price",
        width: 110,
        type: "number",
        align: "left",
        headerAlign: "left",
        renderCell: ({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { display: "flex", alignItems: "center", height: 1 }, children: fCurrency(row.price) })
      },
      {
        field: "is_active",
        headerName: "Status",
        width: 100,
        type: "boolean",
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: value ? "success" : "default", children: value ? "Active" : "Inactive" })
      },
      {
        field: "actions",
        type: "actions",
        headerName: "",
        width: 80,
        getActions: ({ row }) => [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              label: "Edit",
              onClick: () => handleEditRow(row)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
              label: "Deactivate",
              onClick: () => {
                setDeletingId(row.id);
                confirmDialog.onTrue();
              },
              showInMenu: true
            }
          )
        ]
      }
    ],
    [confirmDialog, handleEditRow, setDeletingId]
  );
}
function formatPlanMonth(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleString("en-US", { month: "long", year: "numeric" });
}
function useDiscountPlanManagementColumns({
  confirmDialog,
  setSplitPlan,
  setCancellingPlan
}) {
  return reactExports.useMemo(
    () => [
      {
        field: "client_id",
        headerName: "Client",
        flex: 1,
        minWidth: 140,
        valueGetter: (params) => {
          const c = params?.row?.client_profiles;
          return c ? `${c.first_name} ${c.last_name}` : "—";
        },
        renderCell: ({ row }) => {
          const c = row.client_profiles;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { justifyContent: "center", sx: { height: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, textTransform: "capitalize", children: c ? `${c.first_name} ${c.last_name}` : "—" }) });
        }
      },
      {
        field: "template_id",
        headerName: "Discount Plan",
        flex: 1,
        minWidth: 150,
        renderCell: ({ row }) => {
          const tpl = row.discount_plan_templates;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "flex-start", justifyContent: "center", sx: { height: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: tpl?.name ?? "—",
              sx: { bgcolor: tpl?.color || "#635BFF", color: "#fff", fontWeight: 600 }
            }
          ) });
        }
      },
      {
        field: "valid_month",
        headerName: "Month",
        width: 140,
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { display: "flex", alignItems: "center", height: 1 }, children: formatPlanMonth(value) })
      },
      {
        field: "uses_count",
        headerName: "Uses",
        width: 100,
        type: "number",
        align: "left",
        headerAlign: "left",
        renderCell: ({ row }) => {
          const used = row.uses_count ?? 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
            used,
            " used"
          ] });
        }
      },
      {
        field: "price_paid",
        headerName: "Paid",
        width: 110,
        type: "number",
        align: "left",
        headerAlign: "left",
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { display: "flex", alignItems: "center", height: 1 }, children: fCurrency(value) })
      },
      {
        field: "status",
        headerName: "Status",
        width: 110,
        renderCell: ({ value }) => {
          const colorMap = { active: "success", expired: "default", cancelled: "error" };
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: colorMap[value] || "default", children: value });
        }
      },
      {
        field: "is_commission_finalized",
        headerName: "Commission",
        width: 130,
        type: "boolean",
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: value ? "success" : "warning", children: value ? "Finalized" : "Pending" })
      },
      {
        field: "actions",
        type: "actions",
        headerName: "",
        width: 80,
        getActions: ({ row }) => [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:chart-2-bold-duotone" }),
              label: "View usage",
              onClick: () => setSplitPlan(row)
            }
          ),
          ...row.status === "active" ? [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CustomGridActionsCellItem,
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold" }),
                label: "Cancel",
                onClick: () => {
                  setCancellingPlan(row);
                  confirmDialog.onTrue();
                },
                showInMenu: true
              }
            )
          ] : []
        ]
      }
    ],
    [confirmDialog, setSplitPlan, setCancellingPlan]
  );
}
function DiscountPlansManagementView() {
  const { user } = useAuthContext();
  const { isAdmin } = usePermissions();
  const organizationId = user?.branches?.[0]?.organization_id;
  const branchId = user?.branches?.[0]?.id;
  const [currentTab, setCurrentTab] = reactExports.useState("plans");
  const confirmDialog = Ee();
  const finalizeConfirmDialog = Ee();
  const plansToolbarOptions = useToolbarSettings();
  const [isFinalizingCommissions, setIsFinalizingCommissions] = reactExports.useState(false);
  const [selectedMonth, setSelectedMonth] = reactExports.useState(toFirstOfMonth());
  const [cancellingPlan, setCancellingPlan] = reactExports.useState(null);
  const [splitPlan, setSplitPlan] = reactExports.useState(null);
  const [clientSearch, setClientSearch] = reactExports.useState("");
  const [debouncedClientSearch, setDebouncedClientSearch] = reactExports.useState("");
  const [plansPaginationModel, setPlansPaginationModel] = reactExports.useState({ page: 0, pageSize: 10 });
  const [plansSortModel, setPlansSortModel] = reactExports.useState([]);
  const [pendingPlansFilterModel, setPendingPlansFilterModel] = reactExports.useState({ items: [] });
  const [debouncedPlansFilterModel, setDebouncedPlansFilterModel] = reactExports.useState({ items: [] });
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDebouncedPlansFilterModel(pendingPlansFilterModel), 400);
    return () => clearTimeout(t);
  }, [pendingPlansFilterModel]);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDebouncedClientSearch(clientSearch), 400);
    return () => clearTimeout(t);
  }, [clientSearch]);
  const filterMonth = selectedMonth === "all" ? null : selectedMonth;
  const { allPlans, allPlansTotal, allPlansLoading } = useGetAllClientDiscountPlansServer(
    organizationId,
    {
      month: filterMonth,
      paginationModel: plansPaginationModel,
      sortModel: plansSortModel,
      filterModel: debouncedPlansFilterModel,
      clientSearch: debouncedClientSearch
    }
  );
  const templateDialog = Ee();
  const deactivateConfirmDialog = Ee();
  const templatesToolbarOptions = useToolbarSettings();
  const [editingTemplate, setEditingTemplate] = reactExports.useState(null);
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const [templatesPaginationModel, setTemplatesPaginationModel] = reactExports.useState({
    page: 0,
    pageSize: 15
  });
  const [templatesSortModel, setTemplatesSortModel] = reactExports.useState([]);
  const [templatesFilterModel, setTemplatesFilterModel] = reactExports.useState({ items: [] });
  const { templates, templatesTotal, templatesLoading } = useGetDiscountPlanTemplatesServer(
    organizationId,
    {
      paginationModel: templatesPaginationModel,
      sortModel: templatesSortModel,
      filterModel: templatesFilterModel
    }
  );
  const handleCancelPlan = reactExports.useCallback(
    async (plan) => {
      try {
        const { error } = await cancelClientDiscountPlan(plan.id, plan.client_id, organizationId);
        if (error) throw error;
        toast.success("Discount plan cancelled");
        confirmDialog.onFalse();
        setCancellingPlan(null);
      } catch {
        toast.error("Failed to cancel plan");
      }
    },
    [confirmDialog, organizationId]
  );
  const handleFinalizeCommissions = reactExports.useCallback(async () => {
    finalizeConfirmDialog.onFalse();
    setIsFinalizingCommissions(true);
    try {
      const { finalized, error } = await finalizeExpiredDiscountPlanCommissions({
        orgId: organizationId,
        branchId
      });
      if (error) throw error;
      if (finalized === 0) {
        toast.info("No expired plans pending finalization");
      } else {
        toast.success(`Commissions finalized for ${finalized} plan${finalized !== 1 ? "s" : ""}`);
      }
    } catch {
      toast.error("Failed to finalize commissions");
    } finally {
      setIsFinalizingCommissions(false);
    }
  }, [organizationId, branchId, finalizeConfirmDialog]);
  const handlePlansFilterModelChange = reactExports.useCallback((model) => {
    setPendingPlansFilterModel(model);
    setPlansPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handlePlansSortModelChange = reactExports.useCallback((model) => {
    setPlansSortModel(model);
    setPlansPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleChangeMonth = reactExports.useCallback((month) => {
    setSelectedMonth(month);
    setPlansPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleClientSearchChange = reactExports.useCallback((value) => {
    setClientSearch(value);
    setPlansPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleEditTemplate = reactExports.useCallback(
    (row) => {
      setEditingTemplate(row);
      templateDialog.onTrue();
    },
    [templateDialog]
  );
  const handleDeactivateTemplate = reactExports.useCallback(async () => {
    if (!deletingId) return;
    try {
      await deactivateDiscountPlanTemplate(deletingId);
      toast.success("Discount plan deactivated");
    } catch {
      toast.error("Failed to deactivate");
    } finally {
      setDeletingId(null);
      deactivateConfirmDialog.onFalse();
    }
  }, [deletingId, deactivateConfirmDialog]);
  const handleCloseTemplateDialog = reactExports.useCallback(() => {
    templateDialog.onFalse();
    setEditingTemplate(null);
  }, [templateDialog]);
  const plansColumns = useDiscountPlanManagementColumns({
    confirmDialog,
    setSplitPlan,
    setCancellingPlan
  });
  const templatesColumns = useDiscountPlanTemplateColumns({
    confirmDialog: deactivateConfirmDialog,
    handleEditRow: handleEditTemplate,
    setDeletingId
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Discount Plans",
        links: [{ name: "Dashboard", href: "/dashboard" }, { name: "Discount Plans" }],
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
          currentTab === "plans" && isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              color: "warning",
              startIcon: isFinalizingCommissions ? /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "svg-spinners:ring-resize" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:dollar-minimalistic-bold-duotone" }),
              onClick: finalizeConfirmDialog.onTrue,
              disabled: isFinalizingCommissions,
              children: "Finalize Commissions"
            }
          ),
          currentTab === "templates" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: () => {
                setEditingTemplate(null);
                templateDialog.onTrue();
              },
              children: "New Template"
            }
          )
        ] }),
        sx: { mb: 3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Tabs,
      {
        value: currentTab,
        onChange: (_, val) => setCurrentTab(val),
        sx: { mb: 3, borderBottom: "1px solid", borderColor: "divider" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tab,
            {
              value: "plans",
              label: "Client Plans",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:users-group-rounded-bold-duotone", width: 20 }),
              iconPosition: "start"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tab,
            {
              value: "templates",
              label: "Templates",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:document-bold-duotone", width: 20 }),
              iconPosition: "start"
            }
          )
        ]
      }
    ),
    currentTab === "plans" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        sx: {
          border: "1px solid",
          borderColor: "divider",
          minHeight: 540,
          flexGrow: { md: 1 },
          display: { md: "flex" },
          // height: { xs: 800, md: '1px' },
          flexDirection: { md: "column" }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DataGrid,
          {
            rows: allPlans,
            columns: plansColumns,
            rowCount: allPlansTotal,
            loading: allPlansLoading,
            paginationMode: "server",
            sortingMode: "server",
            filterMode: "server",
            paginationModel: plansPaginationModel,
            onPaginationModelChange: setPlansPaginationModel,
            sortModel: plansSortModel,
            onSortModelChange: handlePlansSortModelChange,
            filterModel: pendingPlansFilterModel,
            onFilterModelChange: handlePlansFilterModelChange,
            disableRowSelectionOnClick: true,
            autoHeight: true,
            getRowHeight: () => 56,
            slots: {
              toolbar: DiscountPlansTableToolbar,
              noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No discount plans" })
            },
            slotProps: {
              toolbar: {
                ...plansToolbarOptions,
                selectedMonth,
                onChangeMonth: handleChangeMonth,
                clientSearch,
                onClientSearchChange: handleClientSearchChange
              }
            },
            sx: {
              [`& .${gridClasses.cell}`]: { alignItems: "center", display: "inline-flex" },
              border: "none"
            }
          }
        )
      }
    ),
    currentTab === "templates" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        sx: {
          border: "1px solid",
          borderColor: "divider",
          minHeight: 540,
          flexGrow: { md: 1 },
          display: { md: "flex" },
          // height: { xs: 800, md: '1px' },
          flexDirection: { md: "column" }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DataGrid,
          {
            rows: templates,
            columns: templatesColumns,
            rowCount: templatesTotal,
            loading: templatesLoading,
            paginationMode: "server",
            sortingMode: "server",
            filterMode: "server",
            paginationModel: templatesPaginationModel,
            onPaginationModelChange: setTemplatesPaginationModel,
            sortModel: templatesSortModel,
            onSortModelChange: setTemplatesSortModel,
            filterModel: templatesFilterModel,
            onFilterModelChange: setTemplatesFilterModel,
            disableRowSelectionOnClick: true,
            autoHeight: true,
            getRowHeight: () => 56,
            slots: {
              toolbar: DiscountPlanTemplatesToolbar,
              noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No discount plan templates" })
            },
            slotProps: {
              toolbar: templatesToolbarOptions
            },
            sx: {
              [`& .${gridClasses.cell}`]: { alignItems: "center", display: "inline-flex" },
              border: "none"
            }
          }
        )
      }
    ),
    splitPlan && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DiscountPlanStylistSplitDialog,
      {
        open: Boolean(splitPlan),
        onClose: () => setSplitPlan(null),
        clientPlan: splitPlan
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DiscountPlanTemplateDialog,
      {
        open: templateDialog.value,
        onClose: handleCloseTemplateDialog,
        template: editingTemplate,
        organizationId,
        createdBy: user?.id
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: () => {
          confirmDialog.onFalse();
          setCancellingPlan(null);
        },
        title: "Cancel discount plan",
        content: `Cancel ${cancellingPlan?.discount_plan_templates?.name || "this plan"} for this client?`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: () => cancellingPlan && handleCancelPlan(cancellingPlan),
            children: "Cancel Plan"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: deactivateConfirmDialog.value,
        onClose: deactivateConfirmDialog.onFalse,
        title: "Deactivate template",
        content: "This template will be hidden from the POS. Existing client plans are not affected.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleDeactivateTemplate, children: "Deactivate" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: finalizeConfirmDialog.value,
        onClose: finalizeConfirmDialog.onFalse,
        title: "Finalize commissions",
        content: "This will write commission_history records for all expired, unfinalized discount plans. This cannot be undone.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "warning", onClick: handleFinalizeCommissions, children: "Finalize" })
      }
    )
  ] });
}
const metadata = { title: `Discount Plans | Dashboard - ${CONFIG.appName}` };
function DiscountPlansPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiscountPlansManagementView, {})
  ] });
}
export {
  DiscountPlansPage as default
};
