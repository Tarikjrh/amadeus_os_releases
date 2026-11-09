import { j as jsxRuntimeExports, y as Card, a as Iconify, c as Typography, S as Stack, a2 as Chip, B as Box, as as fDateTime, r as reactExports, a8 as FormControlLabel, a5 as alpha, d as Button, t as toast, L as Label, av as useAuthContext, a6 as useUserBranches, M as MenuItem, a7 as LoadingScreen, cg as List, ch as ListItemButton, ci as ListItemAvatar, al as Avatar, bm as ListItemText, a0 as fCurrency, an as fDate, b as CircularProgress, a1 as LinearProgress, ar as Scrollbar, aI as fShortenNumber, e as useParams, bo as useRouter, bY as usePermissions, a4 as DashboardContent, a3 as paths, Z as RouterLink, ao as CustomBreadcrumbs, ap as Tabs, aq as Tab, bn as RoleBasedGuard, C as CONFIG } from "./index-B08HRm4A.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import "./toolbar-core-DGb1HZrD.js";
import { S as ServiceCreateEditDialog } from "./service-branch-config-dialog-DiYUNkKK.js";
import { k as useServiceAuditLogs, l as clearBranchServicePricing, a as updateServicePricing, e as updateBranchService, m as useGetServiceStylistIds, n as updateServiceStylists, S as SERVICE_CATEGORIES, o as useGetServiceAnalytics, p as useGetService } from "./services-UhlA7T7c.js";
import { T as Timeline, a as TimelineItem, b as TimelineSeparator, c as TimelineDot, d as TimelineConnector, e as TimelineContent } from "./TimelineSeparator-CTCCP9HM.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { L as LoadingButton } from "./LoadingButton-DJQpPOpu.js";
import { o as object, b as boolean, s as string } from "./schemas-BVeYYbTr.js";
import { n as number } from "./coerce-5-WTXoHr.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { G as useStylistAutocomplete } from "./staff-service-CYDKVOm2.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { u as useChart, C as Chart } from "./use-chart-7x0b6PVF.js";
import "./styles-BdIysWnF.js";
import { K as KpiCardGrid } from "./KpiCard-D7DSr9FT.js";
import { g as getPresetDates, D as DateRangeControls } from "./getPresetDates-BdaDk_3_.js";
import { C as CardHeader } from "./CardHeader-DCwzSIO8.js";
import { C as CardContent } from "./CardContent-tUS7qwlT.js";
import "./ExportPrint-CAqo1wR3.js";
import "./measured-service.constants-DhXw6UJq.js";
import "./index-Di_Bgabu.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./Autocomplete-BReuRGf-.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./with-selector-ClfCuV5M.js";
const SKIPPED_FIELDS = /* @__PURE__ */ new Set([
  "id",
  "created_at",
  "updated_at",
  "created_by",
  "updated_by",
  "organization_id",
  "branch_id",
  "service_id",
  "valid_from",
  "valid_until",
  "metadata",
  "deleted_at",
  "display_order"
]);
const SUMMARY_FIELDS = {
  service: [
    "name",
    "category",
    "service_group",
    "duration_minutes",
    "is_active",
    "requires_consultation"
  ],
  service_pricing: ["stylist_level", "price", "currency", "is_active"]
};
const ACTION_CONFIG = {
  create: { label: "Created", color: "success", icon: "solar:add-circle-bold-duotone" },
  update: { label: "Updated", color: "primary", icon: "solar:pen-bold-duotone" },
  delete: { label: "Deleted", color: "error", icon: "solar:trash-bin-trash-bold-duotone" }
};
const RESOURCE_TYPE_LABEL = {
  service: "Service",
  service_pricing: "Service Pricing"
};
function formatValue(value) {
  if (value === null || value === void 0) return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}
function humanLabel(key) {
  return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function getDiff(oldData, newData) {
  if (!oldData || !newData) return [];
  const keys = /* @__PURE__ */ new Set([...Object.keys(oldData), ...Object.keys(newData)]);
  const changes = [];
  keys.forEach((key) => {
    if (SKIPPED_FIELDS.has(key)) return;
    const oldVal = oldData[key];
    const newVal = newData[key];
    const oldStr = formatValue(oldVal);
    const newStr = formatValue(newVal);
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
function AuditEntryContent({ log }) {
  const config = ACTION_CONFIG[log.action] || ACTION_CONFIG.update;
  const resourceLabel = RESOURCE_TYPE_LABEL[log.resource_type] || log.resource_type;
  const userName = log.user ? `${log.user.first_name || ""} ${log.user.last_name || ""}`.trim() || "Unknown" : "System";
  const diff = log.action === "update" ? getDiff(log.old_data, log.new_data) : [];
  const summaryRows = log.action === "create" ? getSummaryRows(log.new_data, log.resource_type) : log.action === "delete" ? getSummaryRows(log.old_data, log.resource_type) : [];
  const hasDetails = diff.length > 0 || summaryRows.length > 0;
  const rowData = log.new_data || log.old_data;
  const isPricingEvent = log.resource_type === "service_pricing";
  const stylistLevel = isPricingEvent ? rowData?.stylist_level : null;
  const branchLabel = isPricingEvent ? rowData?.branch_id ? "Branch-specific pricing" : "Default pricing" : null;
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: resourceLabel }),
            stylistLevel && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  size: "small",
                  label: stylistLevel,
                  variant: "soft",
                  color: "default",
                  sx: { textTransform: "capitalize" }
                }
              )
            ] }),
            branchLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: branchLabel })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
              "by ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: userName })
            ] })
          ] }),
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
                            color: log.action === "delete" ? "error.main" : "text.primary",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { variant: "outlined", sx: { p: 2, borderRadius: 1.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: 80, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: 100, height: 24 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: "100%", height: 60 })
  ] }) }, i)) });
}
function ServiceDetailsAudit({ serviceId }) {
  const { auditLogs, auditLogsLoading } = useServiceAuditLogs(serviceId);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No audit history found for this service." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Change History" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Chip,
        {
          size: "small",
          label: `${auditLogs.length} event${auditLogs.length !== 1 ? "s" : ""}`,
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
          const config = ACTION_CONFIG[log.action] || ACTION_CONFIG.update;
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
    )
  ] });
}
function ServicePricingEditDialog({ open, onClose, onSave, service, branchData }) {
  const isDefault = branchData?.branchId === null;
  const PricingSchema = object({
    juniorPrice: number().min(0, { message: "Price cannot be negative" }),
    seniorPrice: number().min(0, { message: "Price cannot be negative" }),
    privePrice: number().min(0, { message: "Price cannot be negative" }),
    currency: string().default("USD"),
    customName: string().max(100, "Name must be less than 100 characters").optional(),
    customDescription: string().max(500, "Description must be less than 500 characters").optional(),
    customDuration: number().positive().optional().nullable(),
    isAvailable: boolean().default(true)
  });
  const defaultValues = {
    juniorPrice: null,
    seniorPrice: null,
    privePrice: null,
    currency: "USD",
    customName: "",
    customDescription: "",
    customDuration: null,
    isAvailable: true
  };
  const currentValues = {
    juniorPrice: branchData?.junior?.price || null,
    seniorPrice: branchData?.senior?.price || null,
    privePrice: branchData?.prive?.price || null,
    currency: branchData?.junior?.currency || "USD",
    customName: branchData?.customizations?.custom_name || "",
    customDescription: branchData?.customizations?.custom_description || "",
    customDuration: branchData?.customizations?.custom_duration_minutes || null,
    isAvailable: branchData?.customizations?.is_available ?? true
  };
  const methods = useForm({
    resolver: u(PricingSchema),
    defaultValues,
    values: currentValues
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    try {
      await onSave({
        branchId: branchData?.branchId,
        juniorPrice: data.juniorPrice,
        seniorPrice: data.seniorPrice,
        privePrice: data.privePrice,
        currency: data.currency,
        customizations: {
          custom_name: data.customName || null,
          custom_description: data.customDescription || null,
          custom_duration_minutes: data.customDuration || null,
          is_available: data.isAvailable
        }
      });
    } catch (error) {
      console.error("Error saving pricing:", error);
    }
  });
  const handleClose = reactExports.useCallback(() => {
    reset();
    onClose();
  }, [reset, onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onClose: handleClose, maxWidth: "md", fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      "Edit Pricing - ",
      branchData?.branchName || "Unknown Branch"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContent,
      {
        sx: {
          maxHeight: "70vh",
          overflow: "auto"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { pt: 2 }, children: [
          !isDefault && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Branch Customizations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Customize how this service appears and behaves at this specific branch." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Switch, { name: "isAvailable" }),
                  label: "Service Available at this Branch"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field.Text,
                {
                  name: "customName",
                  label: "Custom Service Name",
                  placeholder: service?.name,
                  helperText: "Leave empty to use default name"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field.Text,
                {
                  name: "customDescription",
                  label: "Custom Description",
                  multiline: true,
                  rows: 2,
                  placeholder: service?.description || "No description",
                  helperText: "Leave empty to use default description"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field.Text,
                {
                  name: "customDuration",
                  label: "Custom Duration",
                  type: "number",
                  placeholder: service?.duration_minutes?.toString(),
                  InputProps: {
                    endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "minutes" })
                  },
                  helperText: "Leave empty to use default duration"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Pricing by Stylist Level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: isDefault ? "Set organization-wide default pricing for all branches." : "Set branch-specific pricing. Leave empty to use organization defaults." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field.Text,
                {
                  name: "juniorPrice",
                  label: "Junior Price",
                  type: "number",
                  InputProps: {
                    startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
                  },
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      bgcolor: (theme) => alpha(theme.palette.info.main, 0.08)
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field.Text,
                {
                  name: "seniorPrice",
                  label: "Senior Price",
                  type: "number",
                  InputProps: {
                    startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
                  },
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      bgcolor: (theme) => alpha(theme.palette.warning.main, 0.08)
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field.Text,
                {
                  name: "privePrice",
                  label: "Prive Price",
                  type: "number",
                  InputProps: {
                    startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
                  },
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      bgcolor: (theme) => alpha(theme.palette.success.main, 0.08)
                    }
                  }
                }
              ) })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: handleClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { type: "submit", variant: "contained", loading: isSubmitting, children: "Save Changes" })
    ] })
  ] }) });
}
function ServiceDetailsPricing({ service }) {
  const [editDialogOpen, setEditDialogOpen] = reactExports.useState(false);
  const [selectedBranch, setSelectedBranch] = reactExports.useState(null);
  const [clearTarget, setClearTarget] = reactExports.useState(null);
  const [clearing, setClearing] = reactExports.useState(false);
  const handleEditPricing = reactExports.useCallback((branchData) => {
    setSelectedBranch(branchData);
    setEditDialogOpen(true);
  }, []);
  const handleCloseDialog = reactExports.useCallback(() => {
    setEditDialogOpen(false);
    setSelectedBranch(null);
  }, []);
  const handleConfirmClear = reactExports.useCallback(async () => {
    if (!clearTarget) return;
    setClearing(true);
    try {
      await clearBranchServicePricing(service.id, clearTarget.branchId);
      toast.success("Custom prices cleared");
      setClearTarget(null);
    } catch (error) {
      console.error("Error clearing pricing:", error);
      toast.error("Failed to clear custom prices");
    } finally {
      setClearing(false);
    }
  }, [clearTarget, service.id]);
  const handleSavePricing = reactExports.useCallback(
    async (pricingData) => {
      try {
        const pricingToSave = {
          branchId: pricingData.branchId,
          juniorPrice: pricingData.juniorPrice,
          seniorPrice: pricingData.seniorPrice,
          privePrice: pricingData.privePrice,
          currency: pricingData.currency
        };
        if (pricingToSave.juniorPrice !== void 0 || pricingToSave.seniorPrice !== void 0 || pricingToSave.privePrice !== void 0) {
          await updateServicePricing(service.id, pricingToSave);
        }
        if (pricingData.branchId && pricingData.customizations) {
          await updateBranchService(service.id, pricingData.branchId, pricingData.customizations);
        }
        toast.success("Pricing updated successfully!");
        handleCloseDialog();
      } catch (error) {
        console.error("Error updating pricing:", error);
        toast.error("Failed to update pricing");
      }
    },
    [service.id, handleCloseDialog]
  );
  const pricingEntries = Object.entries(service.pricingByBranch || {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Pricing by Branch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Manage pricing for different stylist levels across all branches. You can set organization-wide defaults or customize pricing per branch." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Card, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Branch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Junior" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Senior" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Prive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Customizations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: pricingEntries.map(([key, branchData]) => {
          const hasCustomizations = branchData.customizations;
          const isDefault = key === "default";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: isDefault ? 600 : 400 }, children: branchData.branchName }),
              isDefault && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "primary", size: "small", children: "Default" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: branchData.junior ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: `${branchData.junior.currency} ${branchData.junior.price.toFixed(2)}`,
                color: "info",
                variant: "outlined"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "Not set" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: branchData.senior ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: `${branchData.senior.currency} ${branchData.senior.price.toFixed(2)}`,
                color: "warning",
                variant: "outlined"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "Not set" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: branchData.prive ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: `${branchData.prive.currency} ${branchData.prive.price.toFixed(2)}`,
                color: "success",
                variant: "outlined"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "Not set" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: hasCustomizations ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, justifyContent: "center", children: [
              hasCustomizations.custom_name && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", label: "Name", variant: "outlined" }),
              hasCustomizations.custom_duration_minutes && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", label: "Duration", variant: "outlined" }),
              hasCustomizations.is_available === false && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", label: "Disabled", color: "error", variant: "outlined" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "None" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "small",
                  startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
                  onClick: () => handleEditPricing(branchData),
                  children: "Edit"
                }
              ),
              !isDefault && (branchData.junior || branchData.senior || branchData.prive) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "small",
                  color: "error",
                  startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
                  onClick: () => setClearTarget(branchData),
                  children: "Clear prices"
                }
              )
            ] })
          ] }, key);
        }) })
      ] }) }),
      pricingEntries.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 5, textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No pricing information available" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServicePricingEditDialog,
      {
        open: editDialogOpen,
        onClose: handleCloseDialog,
        onSave: handleSavePricing,
        service,
        branchData: selectedBranch
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: !!clearTarget,
        onClose: () => setClearTarget(null),
        title: "Clear custom prices",
        content: `Remove the custom prices for ${clearTarget?.branchName}? It will use the organization default prices.`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            disabled: clearing,
            onClick: handleConfirmClear,
            children: "Clear prices"
          }
        )
      }
    )
  ] });
}
const LEVEL_COLORS = { junior: "info", senior: "warning", prive: "success" };
function ServiceDetailsStylists({ service }) {
  const { user } = useAuthContext();
  const { branchesOnly, branches, primaryBranch } = useUserBranches();
  const branchOptions = branchesOnly.length ? branchesOnly : branches;
  const [branchId, setBranchId] = reactExports.useState("");
  const [search, setSearch] = reactExports.useState("");
  const [checked, setChecked] = reactExports.useState(/* @__PURE__ */ new Set());
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!branchId && (primaryBranch || branchOptions[0])) {
      setBranchId((primaryBranch || branchOptions[0]).id);
    }
  }, [branchId, primaryBranch, branchOptions]);
  const { stylists: employees, stylistsLoading: employeesLoading } = useStylistAutocomplete(
    branchId,
    "",
    500
  );
  const { stylistIds, stylistIdsLoading } = useGetServiceStylistIds(service.id, branchId);
  const savedKey = stylistIds.join(",");
  reactExports.useEffect(() => {
    setChecked(new Set(stylistIds));
  }, [savedKey, branchId]);
  const visible = reactExports.useMemo(() => {
    const term = search.trim().toLowerCase();
    return (employees || []).filter(
      (e) => term ? (e.display_name || `${e.first_name} ${e.last_name}`).toLowerCase().includes(term) : true
    );
  }, [employees, search]);
  const saved = reactExports.useMemo(() => new Set(stylistIds), [stylistIds]);
  const toAdd = [...checked].filter((id) => !saved.has(id));
  const toRemove = [...saved].filter((id) => !checked.has(id));
  const dirty = toAdd.length > 0 || toRemove.length > 0;
  const toggle = reactExports.useCallback((id) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);
  const allVisibleChecked = visible.length > 0 && visible.every((e) => checked.has(e.id));
  const toggleAllVisible = () => {
    setChecked((prev) => {
      const next = new Set(prev);
      visible.forEach((e) => allVisibleChecked ? next.delete(e.id) : next.add(e.id));
      return next;
    });
  };
  const handleSave = async () => {
    setSaving(true);
    try {
      await updateServiceStylists({
        serviceId: service.id,
        branchId,
        add: toAdd,
        remove: toRemove,
        assignedBy: user?.id
      });
      toast.success("Stylists updated");
    } catch (error) {
      console.error("Error updating service stylists:", error);
      toast.error(error.message || "Failed to update stylists");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Stylists" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Choose which stylists perform this service at each branch." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            select: true,
            size: "small",
            label: "Branch",
            value: branchId,
            onChange: (e) => setBranchId(e.target.value),
            sx: { minWidth: 220 },
            children: branchOptions.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: b.id, children: b.name }, b.id))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            size: "small",
            placeholder: "Search stylists...",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            sx: { flexGrow: 1 },
            slotProps: {
              input: {
                startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill", sx: { color: "text.disabled" } }) })
              }
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
          checked.size,
          " of ",
          (employees || []).length,
          " selected"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", onClick: toggleAllVisible, disabled: !visible.length, children: allVisibleChecked ? "Deselect all" : "Select all" })
      ] }),
      employeesLoading || stylistIdsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(List, { disablePadding: true, sx: { maxHeight: 480, overflow: "auto" }, children: [
        visible.map((emp) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ListItemButton, { onClick: () => toggle(emp.id), dense: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { edge: "start", checked: checked.has(emp.id), disableRipple: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemAvatar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { src: emp.avatar_url, sx: { width: 32, height: 32 }, children: emp.display_name?.[0]?.toUpperCase() }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { primary: emp.display_name }),
          emp.stylist_level && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: LEVEL_COLORS[emp.stylist_level] || "default", children: emp.stylist_level })
        ] }, emp.id)),
        !visible.length && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "body2",
            color: "text.secondary",
            sx: { py: 3, textAlign: "center" },
            children: "No stylists found"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "flex-end", spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: !dirty || saving, onClick: () => setChecked(new Set(stylistIds)), children: "Reset" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", disabled: !dirty || saving, onClick: handleSave, children: saving ? "Saving..." : "Save changes" })
      ] })
    ] }) })
  ] });
}
function ServiceDetailsOverview({ service }) {
  const category = SERVICE_CATEGORIES.find((c) => c.value === service.category);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Service Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, sx: { mt: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 140 }, children: "Service Name:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: service.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 140 }, children: "Category:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "default", children: category?.label || service.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 140 }, children: "Duration:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
              service.duration_minutes,
              " minutes"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 140 }, children: "Status:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: service.is_active ? "success" : "error", children: service.is_active ? "Active" : "Inactive" })
          ] }),
          service.requires_consultation && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 140 }, children: "Special Notes:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "warning", children: "Requires Consultation" })
          ] })
        ] })
      ] }),
      service.description && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 2 }, children: service.description })
      ] }),
      service.metadata && Object.keys(service.metadata).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Additional Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mt: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { style: { fontSize: "12px", overflow: "auto" }, children: JSON.stringify(service.metadata, null, 2) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Default Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, sx: { mt: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "info", children: "Junior" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: [
              service.pricingByBranch?.default?.junior?.currency || "USD",
              " ",
              service.pricingByBranch?.default?.junior?.price?.toFixed(2) || "0.00"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "warning", children: "Senior" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: [
              service.pricingByBranch?.default?.senior?.currency || "USD",
              " ",
              service.pricingByBranch?.default?.senior?.price?.toFixed(2) || "0.00"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "success", children: "Prive" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: [
              service.pricingByBranch?.default?.prive?.currency || "USD",
              " ",
              service.pricingByBranch?.default?.prive?.price?.toFixed(2) || "0.00"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Timestamps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, sx: { mt: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Created At" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDateTime(service.created_at) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Updated At" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDateTime(service.updated_at) })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function ServiceDetailsAnalytics({ serviceId }) {
  const { branches } = useUserBranches();
  const branchIds = reactExports.useMemo(() => branches.map((b) => b.id).filter(Boolean), [branches]);
  const [preset, setPreset] = reactExports.useState("month");
  const [customStart, setCustomStart] = reactExports.useState(null);
  const [customEnd, setCustomEnd] = reactExports.useState(null);
  const dateRange = reactExports.useMemo(() => {
    if (customStart && customEnd) {
      const start = new Date(customStart);
      start.setHours(0, 0, 0, 0);
      const end = new Date(customEnd);
      end.setHours(23, 59, 59, 999);
      return { start, end };
    }
    return getPresetDates(preset);
  }, [preset, customStart, customEnd]);
  const handlePreset = reactExports.useCallback((value) => {
    setPreset(value);
    setCustomStart(null);
    setCustomEnd(null);
  }, []);
  const { analytics, analyticsLoading } = useGetServiceAnalytics(serviceId, {
    branchIds,
    startDate: dateRange.start.toISOString(),
    endDate: dateRange.end.toISOString()
  });
  const kpiCards = [
    {
      label: "Total Revenue",
      value: fCurrency(analytics?.kpi?.totalRevenue ?? 0),
      icon: "solar:dollar-minimalistic-bold-duotone",
      color: "#22C55E",
      bgColor: "rgba(34,197,94,0.08)",
      note: "From completed sales"
    },
    {
      label: "Total Bookings",
      value: analytics?.kpi?.totalBookings ?? 0,
      icon: "solar:calendar-bold-duotone",
      color: "#3B82F6",
      bgColor: "rgba(59,130,246,0.08)",
      note: "Sessions performed"
    },
    {
      label: "Unique Clients",
      value: analytics?.kpi?.uniqueClients ?? 0,
      icon: "solar:users-group-rounded-bold-duotone",
      color: "#8B5CF6",
      bgColor: "rgba(139,92,246,0.08)",
      note: "Distinct clients served"
    },
    {
      label: "Avg. Ticket",
      value: fCurrency(analytics?.kpi?.avgTicket ?? 0),
      icon: "solar:tag-price-bold-duotone",
      color: "#F59E0B",
      bgColor: "rgba(245,158,11,0.08)",
      note: "Per session"
    }
  ];
  const chartOptions = useChart({
    chart: { type: "bar", stacked: false },
    xaxis: {
      categories: (analytics?.dailyData || []).map((d) => {
        const date = /* @__PURE__ */ new Date(`${d.date}T00:00:00`);
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      }),
      labels: { style: { fontSize: "11px" } }
    },
    yaxis: {
      labels: { formatter: (val) => fShortenNumber(val) }
    },
    tooltip: {
      fillSeriesColor: true,
      y: { formatter: (val) => fCurrency(val) }
    },
    legend: { show: false },
    plotOptions: { bar: { borderRadius: 4, columnWidth: "55%" } },
    colors: ["#22C55E"]
  });
  const chartSeries = [
    {
      name: "Revenue",
      data: (analytics?.dailyData || []).map((d) => parseFloat(d.revenue.toFixed(2)))
    }
  ];
  const hasData = !analyticsLoading && analytics;
  const noChartData = hasData && analytics.dailyData.length === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DateRangeControls,
      {
        preset,
        customStart,
        customEnd,
        onPresetChange: handlePreset,
        onCustomStartChange: setCustomStart,
        onCustomEndChange: setCustomEnd,
        loading: analyticsLoading
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCardGrid, { cards: kpiCards, loading: analyticsLoading, columns: { xs: 12, sm: 6, md: 3 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardHeader,
        {
          title: "Revenue Over Time",
          subheader: `${fDate(dateRange.start)} – ${fDate(dateRange.end)}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: analyticsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: { height: 280, display: "flex", alignItems: "center", justifyContent: "center" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {})
        }
      ) : noChartData ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: { height: 280, display: "flex", alignItems: "center", justifyContent: "center" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "No revenue data for this period" })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Chart, { type: "bar", series: chartSeries, options: chartOptions, sx: { height: 280 } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Top Clients", subheader: "Ranked by total amount spent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { p: 0 }, children: analyticsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {}) : !analytics?.topClients?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", variant: "body2", children: "No client data for this period" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Client" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Bookings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Revenue" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: analytics.topClients.map((client, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { color: "text.secondary", width: 32 }, children: index + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Avatar,
                {
                  sx: {
                    width: 32,
                    height: 32,
                    fontSize: 13,
                    bgcolor: "primary.lighter",
                    color: "primary.main"
                  },
                  children: (client.first_name?.[0] || "?").toUpperCase()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 500, noWrap: true, children: `${client.first_name || ""} ${client.last_name || ""}`.trim() || "Unknown" }),
                client.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: client.phone })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, sx: { color: "#3B82F6" }, children: client.bookings }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, sx: { color: "#22C55E" }, children: fCurrency(client.revenue) }) })
          ] }, client.id)) })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Top Stylists", subheader: "Ranked by number of sessions performed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { p: 0 }, children: analyticsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {}) : !analytics?.topStylists?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", variant: "body2", children: "No stylist data for this period" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Stylist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Sessions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Revenue" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: analytics.topStylists.map((stylist, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { color: "text.secondary", width: 32 }, children: index + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Avatar,
                {
                  src: stylist.avatar_url,
                  sx: {
                    width: 32,
                    height: 32,
                    fontSize: 13,
                    bgcolor: "warning.lighter",
                    color: "warning.dark"
                  },
                  children: (stylist.full_name?.[0] || "?").toUpperCase()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 500, noWrap: true, children: stylist.full_name || "Unknown" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, sx: { color: "#8B5CF6" }, children: stylist.count }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, sx: { color: "#22C55E" }, children: fCurrency(stylist.revenue) }) })
          ] }, stylist.id)) })
        ] }) }) })
      ] }) })
    ] })
  ] });
}
const TABS = [
  { value: "overview", label: "Overview", icon: "solar:clipboard-text-bold-duotone" },
  { value: "pricing", label: "Pricing", icon: "solar:dollar-bold-duotone" },
  { value: "stylists", label: "Stylists", icon: "solar:users-group-rounded-bold-duotone" },
  { value: "analytics", label: "Analytics", icon: "solar:chart-bold-duotone" },
  { value: "audit", label: "Audit Log", icon: "solar:shield-check-bold-duotone" }
];
function ServiceDetailsView() {
  const params = useParams();
  useRouter();
  const { id } = params;
  const [currentTab, setCurrentTab] = reactExports.useState("overview");
  const [editDialogOpen, setEditDialogOpen] = reactExports.useState(false);
  const { isAdmin } = usePermissions();
  const { service, serviceLoading, serviceError } = useGetService(id);
  const handleChangeTab = reactExports.useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);
  const handleEdit = reactExports.useCallback(() => {
    setEditDialogOpen(true);
  }, []);
  const handleCloseEdit = reactExports.useCallback(() => {
    setEditDialogOpen(false);
  }, []);
  if (serviceLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { message: "Loading service details..." });
  }
  if (serviceError || !service) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        filled: true,
        title: "Service not found",
        description: "The service you are looking for does not exist.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            component: RouterLink,
            href: paths.dashboard.services.root,
            variant: "contained",
            sx: { mt: 2 },
            children: "Back to Services"
          }
        )
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomBreadcrumbs,
        {
          heading: service.name,
          backHref: "back",
          links: [
            { name: "Dashboard", href: paths.dashboard.root },
            { name: "Services", href: paths.dashboard.services.root },
            { name: service.name }
          ],
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              onClick: handleEdit,
              children: "Edit Service"
            }
          ),
          sx: { mb: { xs: 3, md: 5 } }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: currentTab, onChange: handleChangeTab, children: TABS.filter((tab) => tab.value !== "audit" || isAdmin).map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tab,
          {
            value: tab.value,
            label: tab.label,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: tab.icon, width: 24 }),
            iconPosition: "start"
          },
          tab.value
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: 1 }, children: [
          currentTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceDetailsOverview, { service }),
          currentTab === "pricing" && /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceDetailsPricing, { service }),
          currentTab === "stylists" && /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceDetailsStylists, { service }),
          currentTab === "analytics" && /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceDetailsAnalytics, { serviceId: service.id }),
          currentTab === "audit" && /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBasedGuard, { roles: ["admin"], hasContent: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceDetailsAudit, { serviceId: service.id }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServiceCreateEditDialog,
      {
        open: editDialogOpen,
        onClose: handleCloseEdit,
        service: {
          junior_price: service?.pricingByBranch?.default?.junior?.price,
          senior_price: service?.pricingByBranch?.default?.senior?.price,
          prive_price: service?.pricingByBranch?.default?.prive?.price,
          ...service
        }
      }
    )
  ] });
}
const metadata = { title: `Services | Dashboard - ${CONFIG.appName}` };
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceDetailsView, {})
  ] });
}
export {
  ServicesPage as default
};
