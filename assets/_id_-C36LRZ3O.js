import { j as jsxRuntimeExports, y as Card, L as Label, c as Typography, B as Box, a2 as Chip, S as Stack, a as Iconify, a0 as fCurrency, a1 as LinearProgress, K as Divider, cK as useGetProductBatches, r as reactExports, b as CircularProgress, h as dayjs, d as Button, as as fDateTime, cL as useProductAuditLogs, a8 as FormControlLabel, bY as usePermissions, a6 as useUserBranches, cM as useGetProduct, cN as useGetProductMovements, a7 as LoadingScreen, a4 as DashboardContent, a3 as paths, Z as RouterLink, ao as CustomBreadcrumbs, ax as Alert, ap as Tabs, aq as Tab, e as useParams, C as CONFIG } from "./index-B08HRm4A.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { P as ProductCreateEditDialog, a as ProductInventoryDialog, b as ProductTransferDialog } from "./product-create-edit-dialog-Coa8FK9Z.js";
import { K as KpiCardGrid } from "./KpiCard-D7DSr9FT.js";
import { C as CardHeader } from "./CardHeader-DCwzSIO8.js";
import { C as CardContent } from "./CardContent-tUS7qwlT.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { L as LOCATION_TYPE_ICON } from "./render-location-type-B-TZb61z.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { T as Timeline, a as TimelineItem, b as TimelineSeparator, c as TimelineDot, d as TimelineConnector, e as TimelineContent } from "./TimelineSeparator-CTCCP9HM.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
import "./form-provider-u_wAFv-h.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./TextField-CIuP940C.js";
import "./with-selector-ClfCuV5M.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./InputAdornment-BqZyQBIE.js";
import "./Autocomplete-BReuRGf-.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./Dialog-C5RfKkDi.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./DialogTitle-B3pdxJpB.js";
import "./schemas-BVeYYbTr.js";
import "./coerce-5-WTXoHr.js";
import "./expense-service-B2nZjY_a.js";
import "./supplier-autocomplete-Cr5Mwn0p.js";
import "./supplier-service-CvoEEgb8.js";
import "./quick-add-supplier-dialog-DtmRFzkH.js";
import "./index-C4JOln-R.js";
import "./schema-utils-CG9_JlGr.js";
function ProductInfoCard({ product, pricingRows, maxPrice, totalStock }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        title: "Product Information",
        subheader: product.description || "No description provided",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: product.is_active ? "success" : "error", children: product.is_active ? "Active" : "Inactive" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "SKU" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { fontFamily: "monospace", mt: 0.5 }, children: product.sku || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Barcode" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { fontFamily: "monospace", mt: 0.5 }, children: product.barcode || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { mt: 0.5 }, children: product.brand || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Unit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { mt: 0.5, textTransform: "capitalize" }, children: product.unit || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Supplier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { mt: 0.5 }, children: product.supplier_info?.name || product.supplier || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mt: 0.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: product.category?.replace(/_/g, " "),
                size: "small",
                variant: "soft",
                color: "default",
                sx: { textTransform: "capitalize" }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                variant: "soft",
                color: product.is_active ? "success" : "error",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Iconify,
                  {
                    icon: product.is_active ? "solar:check-circle-bold" : "solar:close-circle-bold",
                    width: 14
                  }
                ),
                label: product.is_active ? "Active" : "Inactive"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                variant: "soft",
                color: product.is_taxable ? "info" : "default",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:document-text-bold", width: 14 }),
                label: product.is_taxable ? "Taxable" : "Tax Exempt"
              }
            ),
            product.status === "discontinued" && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", variant: "soft", color: "warning", label: "Discontinued" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mb: 1.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Pricing Breakdown" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, children: pricingRows.map((row) => {
            const pct = row.value / maxPrice * 100;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Stack,
                {
                  direction: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  sx: { mb: 0.75 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Box,
                        {
                          sx: {
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: row.color,
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: row.label })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(row.value) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                LinearProgress,
                {
                  variant: "determinate",
                  value: Math.min(pct, 100),
                  sx: {
                    height: 6,
                    borderRadius: 1,
                    bgcolor: "action.hover",
                    "& .MuiLinearProgress-bar": {
                      bgcolor: row.color,
                      borderRadius: 1
                    }
                  }
                }
              )
            ] }, row.label);
          }) }),
          product.tax_rate > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 2 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Tax Rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", fontWeight: 600, children: [
                  product?.tax_rate?.toFixed(2),
                  "%"
                ] })
              ] }),
              product?.retail_price > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Tax on Retail" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(product.retail_price * product.tax_rate / 100) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: "Price with Tax" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "subtitle2",
                      sx: { fontWeight: 600, color: "primary.main" },
                      children: fCurrency(
                        product.retail_price + product.retail_price * product.tax_rate / 100
                      )
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 2 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", sx: { mb: 1.5, display: "block" }, children: "Stock Rules" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 1.5, children: [
            {
              label: "Reorder Point",
              value: product.min_stock_level ?? "—",
              unit: product.min_stock_level != null ? "units" : null,
              warn: totalStock <= (product.min_stock_level || 0) && product.min_stock_level > 0
            },
            {
              label: "Max Stock",
              value: product.max_stock_level ?? "—",
              unit: product.max_stock_level != null ? "units" : null
            },
            {
              label: "Expiry Days",
              value: product.expiry_days ?? "—",
              unit: product.expiry_days != null ? "days" : null
            },
            {
              label: "Weight",
              value: product.weight_grams ?? "—",
              unit: product.weight_grams != null ? "g" : null
            }
          ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 1.5, borderRadius: 1.5, bgcolor: "background.neutral" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "caption",
                color: stat.warn ? "error" : "text.disabled",
                sx: { display: "block" },
                children: [
                  stat.label,
                  stat.warn ? " ⚠" : ""
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "subtitle2",
                sx: { color: stat.warn ? "error.main" : "text.primary" },
                children: [
                  stat.value,
                  stat.unit ? ` ${stat.unit}` : ""
                ]
              }
            )
          ] }) }, stat.label)) })
        ] })
      ] }),
      product.tags?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { mt: 2, mb: 2 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", sx: { mb: 1, display: "block" }, children: "Tags" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.75, flexWrap: "wrap", children: product.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: tag,
              size: "small",
              variant: "outlined",
              sx: { textTransform: "capitalize" }
            },
            tag
          )) })
        ] })
      ] })
    ] })
  ] });
}
const PAGE_SIZE = 5;
function BatchExpiryCard({ product }) {
  const { batches, batchesLoading } = useGetProductBatches(product.id);
  const [visibleCount, setVisibleCount] = reactExports.useState(PAGE_SIZE);
  if (!batchesLoading && batches.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        title: "Batch Inventory",
        subheader: batches?.length > 0 ? `${batches.length} active batch${batches.length !== 1 ? "es" : ""} · ${batches.reduce((s, b) => s + b.quantity, 0)} ${product.unit || "units"} remaining` : "Loading batches…"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: batchesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          py: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0, children: batches.slice(0, visibleCount).map((batch, index) => {
        const today = dayjs();
        const hasExpiry = !!batch.expiry_date;
        const expiryDate = hasExpiry ? dayjs(batch.expiry_date) : null;
        const daysLeft = hasExpiry ? expiryDate.diff(today, "day") : null;
        const isExpired = hasExpiry && daysLeft < 0;
        const isUrgent = hasExpiry && !isExpired && daysLeft <= 30;
        const isWarning = hasExpiry && !isExpired && daysLeft <= 90;
        const statusColor = isExpired ? "#EF4444" : isUrgent ? "#F97316" : isWarning ? "#F59E0B" : "#22C55E";
        const statusBg = isExpired ? "rgba(239,68,68,0.08)" : isUrgent ? "rgba(249,115,22,0.08)" : isWarning ? "rgba(245,158,11,0.08)" : "rgba(34,197,94,0.08)";
        const statusLabel = !hasExpiry ? "No expiry" : isExpired ? `Expired ${Math.abs(daysLeft)}d ago` : daysLeft === 0 ? "Expires today" : `${daysLeft}d left`;
        const locationName = batch.branch?.name || "—";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              direction: "row",
              alignItems: "center",
              justifyContent: "space-between",
              sx: { py: 1.75 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      sx: {
                        width: 40,
                        height: 40,
                        borderRadius: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: statusBg,
                        flexShrink: 0
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Iconify,
                        {
                          icon: isExpired ? "solar:danger-bold-duotone" : isUrgent ? "solar:clock-square-bold-duotone" : "solar:calendar-date-bold-duotone",
                          width: 22,
                          sx: { color: statusColor }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: batch.batch_number ? `Batch #${batch.batch_number}` : "No batch number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", children: [
                      locationName,
                      " · ",
                      batch.quantity,
                      " ",
                      product.unit || "units",
                      " remaining"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
                  hasExpiry && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { textAlign: "right" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Expires" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 500 }, children: expiryDate.format("MMM D, YYYY") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      sx: {
                        minWidth: 90,
                        px: 1.25,
                        py: 0.5,
                        borderRadius: 1,
                        bgcolor: statusBg,
                        textAlign: "center"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "caption",
                          sx: { color: statusColor, fontWeight: 700 },
                          children: statusLabel
                        }
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          index < Math.min(visibleCount, batches.length) - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, batch.id);
      }) }),
      batches.length > visibleCount && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { pt: 2, display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          size: "small",
          onClick: () => setVisibleCount((prev) => prev + PAGE_SIZE),
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:alt-arrow-down-bold" }),
          children: "Show More"
        }
      ) })
    ] }) })
  ] });
}
const OUTGOING_MOVEMENT_TYPES = /* @__PURE__ */ new Set([
  "sale",
  "transfer_out",
  "write_off",
  "damage",
  "expiry",
  "waste"
]);
function getSignedDelta(movement) {
  const isServiceUsage = movement.reference_type === "service_usage";
  if (isServiceUsage || OUTGOING_MOVEMENT_TYPES.has(movement.movement_type)) {
    return -Math.abs(movement.qty_delta);
  }
  if (movement.movement_type === "adjustment") {
    const isOutgoing = !!movement.from_branch;
    return isOutgoing ? -Math.abs(movement.qty_delta) : movement.qty_delta;
  }
  return movement.qty_delta;
}
const MOVEMENT_TYPE_CONFIG = {
  purchase: { label: "Purchase", color: "#22C55E", icon: "solar:cart-plus-bold-duotone" },
  stock_in: { label: "Stock In", color: "#22C55E", icon: "solar:cart-plus-bold-duotone" },
  sale: { label: "Sale", color: "#EF4444", icon: "solar:bag-check-bold-duotone" },
  adjustment_in: {
    label: "Adjustment In",
    color: "#22C55E",
    icon: "solar:add-circle-bold-duotone"
  },
  adjustment_out: {
    label: "Adjustment Out",
    color: "#F97316",
    icon: "solar:minus-circle-bold-duotone"
  },
  adjustment: { label: "Adjustment", color: "#F97316", icon: "solar:bicrossballs-bold-duotone" },
  transfer_in: { label: "Transfer In", color: "#3B82F6", icon: "solar:import-bold-duotone" },
  transfer_out: { label: "Transfer Out", color: "#6366F1", icon: "solar:export-bold-duotone" },
  return: { label: "Return", color: "#F59E0B", icon: "solar:undo-left-bold-duotone" },
  refund: { label: "Refund", color: "#F59E0B", icon: "solar:undo-left-bold-duotone" },
  waste: { label: "Waste", color: "#94A3B8", icon: "solar:trash-bin-trash-bold-duotone" },
  write_off: { label: "Write-Off", color: "#94A3B8", icon: "solar:trash-bin-trash-bold-duotone" },
  damage: { label: "Damaged", color: "#EF4444", icon: "solar:shield-warning-bold-duotone" },
  expiry: { label: "Expired", color: "#F97316", icon: "solar:clock-circle-bold-duotone" },
  service_usage: {
    label: "Service Usage",
    color: "#8B5CF6",
    icon: "solar:scissors-bold-duotone"
  }
};
function getMovementConfig(movement) {
  if (movement.reference_type === "service_usage") return MOVEMENT_TYPE_CONFIG.service_usage;
  if (movement.movement_type === "adjustment") {
    return getSignedDelta(movement) >= 0 ? MOVEMENT_TYPE_CONFIG.adjustment_in : MOVEMENT_TYPE_CONFIG.adjustment_out;
  }
  return MOVEMENT_TYPE_CONFIG[movement.movement_type] ?? MOVEMENT_TYPE_CONFIG.purchase;
}
function RecentMovementsCard({
  movements,
  movementsTotalCount,
  movementsLoading,
  setMovementsPageSize,
  product
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        title: "Recent Movements",
        subheader: `Showing ${movements?.length || 0} of ${movementsTotalCount} movements`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      movementsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            py: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Loading movements…" })
        }
      ) : movements?.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0, children: movements.map((movement, index) => {
        const config = getMovementConfig(movement);
        const signedDelta = getSignedDelta(movement);
        const locationName = movement.to_branch?.name || movement.from_branch?.name || "Unknown location";
        const isPositive = signedDelta > 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              direction: "row",
              alignItems: "center",
              justifyContent: "space-between",
              sx: { py: 1.75 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      sx: {
                        width: 40,
                        height: 40,
                        borderRadius: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: `${config.color}18`,
                        flexShrink: 0
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: config.icon, width: 22, sx: { color: config.color } })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, sx: { mb: 0.25 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: config.label }),
                      movement.reference_type && movement.reference_type !== "service_usage" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          variant: "soft",
                          color: "default",
                          sx: {
                            fontSize: 10,
                            height: 18,
                            px: 0.75,
                            textTransform: "capitalize"
                          },
                          children: movement.reference_type.replace(/_/g, " ")
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", children: [
                      locationName,
                      movement.batch_number && ` · Batch: ${movement.batch_number}`,
                      movement.expiry_date && ` · Exp: ${movement.expiry_date}`,
                      movement.notes && ` · ${movement.notes}`
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 3, children: [
                  (movement.unit_cost || movement.unit_price) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { textAlign: "right" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: movement.unit_cost ? `Cost: ${fCurrency(movement.unit_cost)}` : `Price: ${fCurrency(movement.unit_price)}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Typography,
                      {
                        variant: "caption",
                        color: "text.disabled",
                        sx: { display: "block" },
                        children: [
                          "Total:",
                          " ",
                          fCurrency(
                            (movement.unit_cost || movement.unit_price) * Math.abs(signedDelta)
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      color: "text.disabled",
                      sx: { minWidth: 120, textAlign: "right" },
                      children: fDateTime(movement.performed_at)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 60, textAlign: "right" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Typography,
                      {
                        variant: "subtitle2",
                        sx: { color: isPositive ? "#22C55E" : "#EF4444" },
                        children: [
                          isPositive ? "+" : "",
                          signedDelta
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: product.unit || "units" })
                  ] })
                ] })
              ]
            }
          ),
          index < movements.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, movement.id);
      }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            py: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", variant: "body2", children: "No movements recorded" })
        }
      ),
      movements?.length > 0 && movements.length < movementsTotalCount && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { pt: 2, display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          size: "small",
          onClick: () => setMovementsPageSize((prev) => prev + 10),
          disabled: movementsLoading,
          startIcon: movementsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 14, color: "inherit" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:alt-arrow-down-bold" }),
          children: movementsLoading ? "Loading…" : "View More"
        }
      ) })
    ] })
  ] });
}
function InventoryLocationCard({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        title: "Inventory Locations",
        subheader: `${product.inventoryLocations?.length || 0} location${product.inventoryLocations?.length !== 1 ? "s" : ""}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: product.inventoryLocations?.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, children: product.inventoryLocations.map((location) => {
      const available = location.available_quantity || 0;
      const total = location.quantity || 0;
      const pct = total > 0 ? available / total * 100 : 0;
      const availColor = pct > 50 ? "#22C55E" : pct > 20 ? "#F59E0B" : "#EF4444";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            sx: { mb: 0.75 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      width: 32,
                      height: 32,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: location.locationType === "branch" ? "rgba(59,130,246,0.10)" : "rgba(139,92,246,0.10)",
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Iconify,
                      {
                        icon: LOCATION_TYPE_ICON[location.locationType] || "solar:location-bold-duotone",
                        width: 18,
                        sx: {
                          color: location.locationType === "branch" ? "#3B82F6" : "#8B5CF6"
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { lineHeight: 1.2 }, children: location.location?.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: location.locationType === "branch" ? "Branch" : "Warehouse" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { color: availColor }, children: available }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", children: [
                  "/ ",
                  total,
                  " total"
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LinearProgress,
          {
            variant: "determinate",
            value: Math.min(pct, 100),
            sx: {
              height: 5,
              borderRadius: 1,
              bgcolor: "action.hover",
              mb: location.last_counted_at ? 0.5 : 0,
              "& .MuiLinearProgress-bar": {
                bgcolor: availColor,
                borderRadius: 1
              }
            }
          }
        ),
        location.last_counted_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", children: [
          "Last counted: ",
          new Date(location.last_counted_at).toLocaleDateString()
        ] }),
        location !== product.inventoryLocations.at(-1) && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { mt: 1.5 } })
      ] }, `${location.locationType}_${location.branch_id}`);
    }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          py: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", variant: "body2", children: "No inventory locations" })
      }
    ) })
  ] });
}
function OverviewTab({
  product,
  batches,
  batchesLoading,
  movements,
  movementsTotalCount,
  movementsLoading,
  setMovementsPageSize
}) {
  const totalStock = product.totalQuantity || 0;
  const totalAvailable = product.totalAvailable || 0;
  const totalReserved = totalStock - totalAvailable;
  const retailPrice = product.retail_price || 0;
  const costPrice = product.cost_price || 0;
  const margin = retailPrice > 0 ? (retailPrice - costPrice) / retailPrice * 100 : 0;
  const kpiCards = [
    {
      label: "Total Stock",
      value: totalStock,
      note: "units",
      icon: "solar:box-bold-duotone",
      color: "#3B82F6",
      bgColor: "rgba(59,130,246,0.08)"
    },
    {
      label: "Available",
      value: totalAvailable,
      note: "units",
      icon: "solar:check-circle-bold-duotone",
      color: "#22C55E",
      bgColor: "rgba(34,197,94,0.08)"
    },
    {
      label: "Reserved",
      value: totalReserved,
      note: "units",
      icon: "solar:clock-circle-bold-duotone",
      color: "#F59E0B",
      bgColor: "rgba(245,158,11,0.08)"
    },
    {
      label: "Cost Price",
      value: fCurrency(costPrice),
      icon: "solar:tag-price-bold-duotone",
      color: "#EF4444",
      bgColor: "rgba(239,68,68,0.08)"
    },
    {
      label: "Retail Price",
      value: fCurrency(retailPrice),
      icon: "solar:dollar-minimalistic-bold-duotone",
      color: "#22C55E",
      bgColor: "rgba(34,197,94,0.08)"
    },
    {
      label: "Gross Margin",
      value: `${margin.toFixed(1)}%`,
      unit: "%",
      icon: "solar:chart-bold-duotone",
      color: "#8B5CF6",
      bgColor: "rgba(139,92,246,0.08)"
    }
  ];
  const pricingRows = [
    { label: "Cost Price", value: costPrice, color: "#EF4444" },
    { label: "Wholesale Price", value: product.wholesale_price || 0, color: "#F59E0B" },
    { label: "Retail Price", value: retailPrice, color: "#22C55E" }
  ].filter((r) => r.value > 0);
  const maxPrice = Math.max(...pricingRows.map((r) => r.value), 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCardGrid, { cards: kpiCards, sx: { mb: 3 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProductInfoCard,
        {
          product,
          pricingRows,
          maxPrice,
          totalStock
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InventoryLocationCard, { product }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BatchExpiryCard, { batches, batchesLoading, product }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RecentMovementsCard,
      {
        movements,
        movementsTotalCount,
        movementsLoading,
        setMovementsPageSize,
        product
      }
    )
  ] });
}
const PRODUCT_TABS = [
  { value: "overview", label: "Overview", icon: "solar:clipboard-text-bold-duotone" },
  { value: "audit", label: "Audit Log", icon: "solar:shield-check-bold-duotone" }
];
const MOVEMENT_CONFIG = {
  stock_in: {
    label: "Stock In",
    color: "success",
    icon: "solar:arrow-down-bold-duotone",
    sign: "+"
  },
  purchase: {
    label: "Purchase",
    color: "success",
    icon: "solar:bag-check-bold-duotone",
    sign: "+"
  },
  transfer_in: {
    label: "Transfer In",
    color: "info",
    icon: "solar:arrow-left-down-bold-duotone",
    sign: "+"
  },
  refund: {
    label: "Refund Return",
    color: "warning",
    icon: "solar:arrow-left-bold-duotone",
    sign: "+"
  },
  adjustment: {
    label: "Adjustment",
    color: "primary",
    icon: "solar:tuning-2-bold-duotone",
    sign: "+/-"
  },
  sale: {
    label: "Sale",
    color: "error",
    icon: "solar:cart-bold-duotone",
    sign: "-"
  },
  sale_edit: {
    label: "Sale Edit",
    color: "warning",
    icon: "solar:pen-bold-duotone",
    sign: "+/-"
  },
  transfer_out: {
    label: "Transfer Out",
    color: "warning",
    icon: "solar:arrow-right-up-bold-duotone",
    sign: "-"
  },
  write_off: {
    label: "Write-Off",
    color: "error",
    icon: "solar:trash-bin-trash-bold-duotone",
    sign: "-"
  },
  damage: {
    label: "Damaged",
    color: "error",
    icon: "solar:danger-bold-duotone",
    sign: "-"
  },
  expiry: {
    label: "Expired",
    color: "error",
    icon: "solar:clock-circle-bold-duotone",
    sign: "-"
  }
};
const SKIPPED_FIELDS = /* @__PURE__ */ new Set([
  "id",
  "created_at",
  "updated_at",
  "created_by",
  "updated_by",
  "organization_id",
  "branch_id",
  "deleted_at",
  "metadata",
  "display_order"
]);
const SUMMARY_FIELDS = [
  "name",
  "sku",
  "barcode",
  "brand",
  "category",
  "unit",
  "cost_price",
  "wholesale_price",
  "retail_price",
  "is_active",
  "is_taxable",
  "status",
  "min_stock_level",
  "max_stock_level"
];
const ACTION_CONFIG = {
  create: { label: "Created", color: "success", icon: "solar:add-circle-bold-duotone" },
  update: { label: "Updated", color: "primary", icon: "solar:pen-bold-duotone" },
  delete: { label: "Deleted", color: "error", icon: "solar:trash-bin-trash-bold-duotone" },
  stock_change: { label: "Stock Change", color: "secondary", icon: "solar:box-bold-duotone" }
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
    const oldStr = formatValue(oldData[key]);
    const newStr = formatValue(newData[key]);
    if (oldStr !== newStr) {
      changes.push({ field: key, from: oldStr, to: newStr });
    }
  });
  return changes;
}
function getSummaryRows(data) {
  if (!data) return [];
  const fields = SUMMARY_FIELDS.filter((k) => !SKIPPED_FIELDS.has(k));
  return fields.filter((k) => data[k] !== null && data[k] !== void 0).map((k) => ({ field: k, value: formatValue(data[k]) }));
}
function StockChangeContent({ log }) {
  const d = log.new_data || {};
  const movCfg = MOVEMENT_CONFIG[d.movement_type] || {
    label: d.movement_type || "Movement",
    color: "default",
    icon: "solar:box-bold-duotone"
  };
  const isPositive = (d.effective_delta ?? d.qty_delta) > 0;
  const deltaDisplay = `${isPositive ? "+" : ""}${d.effective_delta ?? d.qty_delta}`;
  const userName = log.user ? `${log.user.first_name || ""} ${log.user.last_name || ""}`.trim() || "Unknown" : "System";
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
                label: movCfg.label,
                color: movCfg.color,
                variant: "soft",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: movCfg.icon, width: 14 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: deltaDisplay,
                variant: "soft",
                color: isPositive ? "success" : "error",
                sx: { fontWeight: 700, minWidth: 40 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
              "by ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: userName })
            ] })
          ] }),
          (d.reference_type || d.notes || d.unit_cost) && /* @__PURE__ */ jsxRuntimeExports.jsx(
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
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
                d.reference_type && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "baseline", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      sx: { fontWeight: 600, minWidth: 100, color: "text.secondary" },
                      children: "Reference:"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { textTransform: "capitalize" }, children: d.reference_type.replace(/_/g, " ") })
                ] }),
                d.unit_cost != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "baseline", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      sx: { fontWeight: 600, minWidth: 100, color: "text.secondary" },
                      children: "Unit Cost:"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: d.unit_cost })
                ] }),
                d.batch_number && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "baseline", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      sx: { fontWeight: 600, minWidth: 100, color: "text.secondary" },
                      children: "Batch:"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: d.batch_number })
                ] }),
                d.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "baseline", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      sx: { fontWeight: 600, minWidth: 100, color: "text.secondary" },
                      children: "Notes:"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: d.notes })
                ] })
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
function AuditEntryContent({ log }) {
  const config = ACTION_CONFIG[log.action] || ACTION_CONFIG.update;
  const userName = log.user ? `${log.user.first_name || ""} ${log.user.last_name || ""}`.trim() || "Unknown" : "System";
  const diff = log.action === "update" ? getDiff(log.old_data, log.new_data) : [];
  const summaryRows = log.action === "create" ? getSummaryRows(log.new_data) : log.action === "delete" ? getSummaryRows(log.old_data) : [];
  const hasDetails = diff.length > 0 || summaryRows.length > 0;
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
                          sx: { fontWeight: 600, minWidth: 140, color: "text.secondary" },
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
                          sx: { fontWeight: 600, minWidth: 140, color: "text.secondary" },
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: 120, height: 24 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: "100%", height: 60 })
  ] }) }, i)) });
}
function ProductDetailsAudit({ productId }) {
  const [showStockChanges, setShowStockChanges] = reactExports.useState(false);
  const { auditLogs, auditLogsLoading } = useProductAuditLogs(productId);
  const visibleLogs = auditLogs.filter(
    (log) => showStockChanges ? true : log.action !== "stock_change"
  );
  const stockChangeCount = auditLogs.filter((l) => l.action === "stock_change").length;
  if (auditLogsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AuditSkeleton, {});
  }
  if (!auditLogs.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { filled: true, title: "No audit history found", sx: { py: 10 } });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Change History" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
        stockChangeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormControlLabel,
          {
            control: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                size: "small",
                checked: showStockChanges,
                onChange: (e) => setShowStockChanges(e.target.checked)
              }
            ),
            label: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
              "Show stock changes (",
              stockChangeCount,
              ")"
            ] }),
            sx: { m: 0 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            size: "small",
            label: `${visibleLogs.length} event${visibleLogs.length !== 1 ? "s" : ""}`,
            variant: "soft",
            color: "default"
          }
        )
      ] })
    ] }),
    !visibleLogs.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { filled: true, title: "No field changes found", sx: { py: 6 } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Timeline,
      {
        sx: {
          p: 0,
          m: 0,
          [`& .MuiTimelineItem-root:before`]: { flex: 0, padding: 0 }
        },
        children: visibleLogs.map((log, index) => {
          const config = ACTION_CONFIG[log.action] || ACTION_CONFIG.update;
          const isLast = index === visibleLogs.length - 1;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineItem, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineSeparator, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDot, { color: config.color, sx: { boxShadow: "none", p: 0.75 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: config.icon, width: 16 }) }),
              !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineConnector, {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContent, { sx: { pb: isLast ? 0 : 2, pt: 0.25, pr: 0 }, children: log.action === "stock_change" ? /* @__PURE__ */ jsxRuntimeExports.jsx(StockChangeContent, { log }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AuditEntryContent, { log }) })
          ] }, log.id);
        })
      }
    )
  ] });
}
function ProductDetailsView({ inventoryId }) {
  const [inventoryDialogOpen, setInventoryDialogOpen] = reactExports.useState(false);
  const [editDialogOpen, setEditDialogOpen] = reactExports.useState(false);
  const [transferDialogOpen, setTransferDialogOpen] = reactExports.useState(false);
  const [movementsPageSize, setMovementsPageSize] = reactExports.useState(10);
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const { isAdmin } = usePermissions();
  const { branches } = useUserBranches();
  const { product, productLoading, productError } = useGetProduct(inventoryId);
  const {
    movements,
    movementsLoading,
    totalCount: movementsTotalCount
  } = useGetProductMovements(inventoryId, { pageSize: movementsPageSize });
  if (productLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {});
  }
  if (productError || !product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        title: "Product not found",
        description: "The product you're looking for doesn't exist or has been deleted.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { component: RouterLink, href: paths.dashboard.products.root, variant: "contained", children: "Back to Products" })
      }
    ) });
  }
  const totalStock = product.totalQuantity || 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        backHref: "back",
        heading: product.name,
        links: [
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Products", href: paths.dashboard.products.root },
          { name: product.name }
        ],
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.5, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              onClick: () => setEditDialogOpen(true),
              children: "Edit"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:box-minimalistic-bold" }),
              onClick: () => setInventoryDialogOpen(true),
              children: "Edit Inventory"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              color: "secondary",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:transfer-horizontal-bold" }),
              onClick: () => setTransferDialogOpen(true),
              children: "Transfer"
            }
          )
        ] }),
        sx: { mb: 3 }
      }
    ),
    product.min_stock_level > 0 && totalStock <= product.min_stock_level && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Alert,
      {
        severity: "warning",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:danger-triangle-bold-duotone", width: 22 }),
        sx: { mb: 3 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Low stock alert:" }),
          " Current stock (",
          totalStock,
          " ",
          product.unit || "units",
          ") is at or below the reorder point of ",
          product.min_stock_level,
          " ",
          product.unit || "units",
          ". Consider restocking soon."
        ]
      }
    ),
    isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tabs,
      {
        value: activeTab,
        onChange: (_, val) => setActiveTab(val),
        sx: { mb: 3, borderBottom: 1, borderColor: "divider" },
        children: PRODUCT_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tab,
          {
            value: tab.value,
            label: tab.label,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: tab.icon, width: 20 }),
            iconPosition: "start"
          },
          tab.value
        ))
      }
    ),
    activeTab === "audit" && isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDetailsAudit, { productId: inventoryId }),
    activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      OverviewTab,
      {
        product,
        movements,
        movementsTotalCount,
        movementsLoading,
        setMovementsPageSize
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCreateEditDialog,
      {
        open: editDialogOpen,
        onClose: () => setEditDialogOpen(false),
        product,
        onSuccess: () => setEditDialogOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductInventoryDialog,
      {
        open: inventoryDialogOpen,
        onClose: () => setInventoryDialogOpen(false),
        product,
        branches,
        onSuccess: () => setInventoryDialogOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductTransferDialog,
      {
        open: transferDialogOpen,
        onClose: () => setTransferDialogOpen(false),
        product,
        branches,
        onSuccess: () => setTransferDialogOpen(false)
      }
    )
  ] });
}
const metadata = { title: `Inventory Details | Dashboard - ${CONFIG.appName}` };
function InventoryDetailsPage() {
  const { id = "" } = useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDetailsView, { inventoryId: id })
  ] });
}
export {
  InventoryDetailsPage as default
};
