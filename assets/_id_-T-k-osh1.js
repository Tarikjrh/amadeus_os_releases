import { E as Ee, j as jsxRuntimeExports, B as Box, T as Tooltip, I as IconButton, a as Iconify, M as MenuItem, d as Button, cz as useColorScheme, S as Stack, c as Typography, ar as Scrollbar, a2 as Chip, a0 as fCurrency, L as Label, a5 as alpha, K as Divider, bX as useTheme, b as CircularProgress, as as fDateTime, al as Avatar, y as Card, an as fDate, aw as fTime, ax as Alert, bo as useRouter, e as useParams, r as reactExports, av as useAuthContext, bY as usePermissions, a7 as LoadingScreen, a4 as DashboardContent, ao as CustomBreadcrumbs, a3 as paths, bn as RoleBasedGuard, bb as Logo, t as toast, C as CONFIG } from "./index-B08HRm4A.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import "./toolbar-core-DGb1HZrD.js";
import { f as formatPhoneNumberIntl } from "./index-C4JOln-R.js";
import { b as useSaleAuditLogs, c as useGetSale, d as addSalePayment, e as createRefund, f as updateSaleStatus } from "./sale-service-CWyXC78v.js";
import { P as PosPaymentDialog, a as PosSupervisorOverrideDialog } from "./pos-payment-dialog-D68iINOQ.js";
import { P as PrintReceiptButton, c as InvoicePDFDownload, d as InvoicePDFViewer, e as ITEM_TYPE_LABELS, S as SaleTotalSummary, f as SaleEditDialog } from "./sale-total-summary-BEkk9j-2.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { D as Dialog, b as DialogActions, a as DialogContent } from "./Dialog-C5RfKkDi.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { u as useMediaQuery } from "./useMobilePicker-D3Q_Tt3t.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { C as CardHeader } from "./CardHeader-DCwzSIO8.js";
import { T as Timeline, a as TimelineItem, b as TimelineSeparator, c as TimelineDot, d as TimelineConnector, e as TimelineContent, t as timelineItemClasses } from "./TimelineSeparator-CTCCP9HM.js";
import "./ExportPrint-CAqo1wR3.js";
import "./InputAdornment-BqZyQBIE.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./staff-service-CYDKVOm2.js";
import "./Autocomplete-BReuRGf-.js";
import "./useStaffData-BIkbeKJv.js";
import "./services-UhlA7T7c.js";
import "./Checkbox-Br8xlIAK.js";
import "./react-pdf.browser-DOUvi50W.js";
import "./client-service-swr-DnF01Wop.js";
import "./ToggleButtonGroup-CJXz0-w5.js";
import "./ToggleButton-D4MfeHtt.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./DialogContentText-XMbzPiIe.js";
function SaleToolbar({
  sale,
  currentStatus,
  statusOptions,
  onChangeStatus,
  hideSelect = false
}) {
  const { value: open, onFalse: onClose, onTrue: onOpen } = Ee();
  const renderDownloadButton = () => sale ? /* @__PURE__ */ jsxRuntimeExports.jsx(InvoicePDFDownload, { invoice: sale, currentStatus }) : null;
  const renderDetailsDialog = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { fullScreen: true, open, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { height: 1, display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { sx: { p: 1.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "inherit", variant: "contained", onClick: onClose, children: "Close" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flexGrow: 1, height: 1, overflow: "hidden" }, children: sale && /* @__PURE__ */ jsxRuntimeExports.jsx(InvoicePDFViewer, { invoice: sale, currentStatus }) })
  ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          gap: 3,
          display: "flex",
          mb: { xs: 3, md: 5 },
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-end", sm: "center" }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              sx: {
                gap: 1,
                width: 1,
                flexGrow: 1,
                display: "flex"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "View", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:eye-bold" }) }) }),
                renderDownloadButton(),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PrintReceiptButton, { invoice: sale })
              ]
            }
          ),
          !hideSelect && /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              fullWidth: true,
              select: true,
              label: "Status",
              value: currentStatus,
              onChange: onChangeStatus,
              sx: { maxWidth: 160 },
              slotProps: {
                htmlInput: { id: "status-select" },
                inputLabel: { htmlFor: "status-select" }
              },
              children: statusOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
            }
          )
        ]
      }
    ),
    renderDetailsDialog()
  ] });
}
function isServicePackageCovered(i, pkgUsageServiceIds) {
  if (i.item_type !== "service") return false;
  if (i.paid_via_package) return true;
  if (i.package_name) return true;
  if (pkgUsageServiceIds?.has(i.service_id)) return true;
  return i.original_unit_price != null && (Number(i.line_total) < 0.01 || i.package_value_updated);
}
function SaleItems({ sale }) {
  const isDarkMode = useColorScheme().mode === "dark";
  const pkgUsageServiceIds = new Set(
    (sale?.package_usages ?? []).map((u) => u.service_id).filter(Boolean)
  );
  const packageCoveredItems = sale?.items.filter((i) => isServicePackageCovered(i, pkgUsageServiceIds));
  const planDiscountedItems = sale?.items.filter(
    (i) => i.item_type === "service" && !isServicePackageCovered(i, pkgUsageServiceIds) && i.original_unit_price != null && Number(i.line_total) >= 0.01 && !i.package_value_updated && Number(i.discount_amount) > 0
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    packageCoveredItems?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Stack,
      {
        direction: "row",
        spacing: 1,
        alignItems: "center",
        sx: {
          mt: 3,
          p: 1.5,
          borderRadius: 1,
          bgcolor: "success.lighter",
          border: "1px solid",
          borderColor: "success.light"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: "solar:gift-bold-duotone",
              width: 20,
              sx: { color: "success.dark", flexShrink: 0 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "success.dark", fontWeight: 600, children: [
            packageCoveredItems.length,
            " service",
            packageCoveredItems.length > 1 ? "s" : "",
            " covered by a package",
            packageCoveredItems.every((i) => Number(i.line_total) < 0.01) ? " — no charge." : " (some units partially covered)."
          ] })
        ]
      }
    ),
    planDiscountedItems?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Stack,
      {
        direction: "row",
        spacing: 1,
        alignItems: "center",
        sx: {
          mt: 2,
          p: 1.5,
          borderRadius: 1,
          bgcolor: "info.lighter",
          border: "1px solid",
          borderColor: "info.light"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: "solar:tag-price-bold-duotone",
              width: 20,
              sx: { color: "info.dark", flexShrink: 0 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "info.dark", fontWeight: 600, children: [
            planDiscountedItems.length,
            " service",
            planDiscountedItems.length > 1 ? "s received" : " received",
            " a discount via a discount plan."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { sx: { mt: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 960 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { typography: "subtitle2" }, children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Qty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Unit price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Total" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: sale?.items.map((item, index) => {
        const isPackageCovered = isServicePackageCovered(item, pkgUsageServiceIds);
        const isPartialPackage = isPackageCovered && !item.package_value_updated && Number(item.line_total) >= 0.01;
        const pkgCoveredQty = isPartialPackage ? Math.round(Number(item.discount_amount) / Number(item.unit_price)) : null;
        const isPlanDiscounted = !isPackageCovered && item.item_type === "service" && item.original_unit_price != null && Number(item.discount_amount) > 0;
        const planDiscountPct = isPlanDiscounted && item.unit_price > 0 ? Math.round(
          Number(item.discount_amount) / (Number(item.unit_price) * Number(item.quantity)) * 100
        ) : null;
        const displayName = item.item_type === "product" ? item.product_name : item.item_type === "addon" ? item.addon_name : item.item_type === "package" || item.item_type === "package_deposit" || item.item_type === "discount_plan_deposit" ? item.package_name : item.service_name;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            sx: isPackageCovered ? { bgcolor: (t) => alpha(t.palette.success.lighter, isDarkMode ? 0.1 : 0.5) } : isPlanDiscounted ? { bgcolor: (t) => alpha(t.palette.info.lighter, isDarkMode ? 0.1 : 0.5) } : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: index + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: "medium", children: displayName }),
                  isPackageCovered && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: isPartialPackage ? `${pkgCoveredQty}/${item.quantity} pkg` : "Package",
                      size: "small",
                      color: "success",
                      sx: { height: 18, fontSize: 10, fontWeight: 700 }
                    }
                  ),
                  isPlanDiscounted && planDiscountPct != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: `${planDiscountPct}% off`,
                      size: "small",
                      color: "info",
                      sx: { height: 18, fontSize: 10, fontWeight: 700 }
                    }
                  ),
                  (item.item_type === "package" || item.item_type === "package_deposit") && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: "Package deposit",
                      size: "small",
                      color: "secondary",
                      sx: { height: 18, fontSize: 10, fontWeight: 700 }
                    }
                  ),
                  item.item_type === "discount_plan_deposit" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: "Discount plan",
                      size: "small",
                      color: "info",
                      variant: "outlined",
                      sx: { height: 18, fontSize: 10, fontWeight: 700 }
                    }
                  ),
                  item.item_type === "addon" && item.addon_category && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: item.addon_category,
                      size: "small",
                      color: "warning",
                      variant: "soft",
                      sx: { height: 18, fontSize: 10, fontWeight: 700 }
                    }
                  )
                ] }),
                item.item_type === "product" && item.product_sku && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                  "SKU: ",
                  item.product_sku
                ] }),
                item.stylist && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                  "By: ",
                  item?.stylist?.first_name,
                  " ",
                  item?.stylist?.last_name
                ] }),
                isPackageCovered && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "success.dark", children: item.package_value_updated ? `Covered by package — per-visit value ${fCurrency(item.unit_price)} — original value ${fCurrency(item.original_unit_price)}` : isPartialPackage ? `${pkgCoveredQty} of ${item.quantity} units covered by package — original value ${fCurrency(item.original_unit_price)}/unit` : `Covered by package — original value ${fCurrency(item.original_unit_price)}` }),
                isPlanDiscounted && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "info.dark", children: `Discount plan — ${planDiscountPct}% off — original value ${fCurrency(item.original_unit_price)}` })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  variant: "soft",
                  color: item.item_type === "product" ? "info" : item.item_type === "addon" ? "warning" : item.item_type === "package" || item.item_type === "package_deposit" ? "secondary" : item.item_type === "discount_plan_deposit" ? "info" : "success",
                  children: ITEM_TYPE_LABELS[item.item_type] ?? item.item_type
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: item.quantity }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: isPackageCovered ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "caption",
                    color: "text.disabled",
                    sx: { textDecoration: "line-through" },
                    children: fCurrency(item.original_unit_price)
                  }
                ),
                item.package_value_updated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: fCurrency(item.unit_price) }) : isPartialPackage ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: fCurrency(item.unit_price) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "success.dark", fontWeight: 600, children: "FREE" })
              ] }) : isPlanDiscounted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "caption",
                    color: "text.disabled",
                    sx: { textDecoration: "line-through" },
                    children: fCurrency(item.original_unit_price)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "info.dark", fontWeight: 600, children: fCurrency(
                  item.unit_price - Number(item.discount_amount) / Number(item.quantity)
                ) })
              ] }) : fCurrency(item.unit_price) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: isPackageCovered ? item.package_value_updated || isPartialPackage ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: fCurrency(item.line_total) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "success.dark", fontWeight: 600, children: "$0.00" }) : isPlanDiscounted ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "info.dark", fontWeight: 600, children: fCurrency(item.line_total) }) : fCurrency(item.unit_price * item.quantity) })
            ]
          },
          index
        );
      }) })
    ] }) })
  ] });
}
function SaleFooter({ notes }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { mt: 5, borderStyle: "dashed" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          py: 3,
          gap: 2,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 0.5 }, children: "NOTES" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: notes ? "text.primary" : "text.disabled", children: notes || "This sale has no notes" })
        ] })
      }
    )
  ] });
}
const IGNORED_FIELDS = /* @__PURE__ */ new Set(["updated_at", "created_at", "metadata"]);
function getActionColor(action) {
  switch (action) {
    case "create":
      return "success";
    case "update":
      return "info";
    case "delete":
      return "error";
    default:
      return "default";
  }
}
function getActionLabel(action) {
  switch (action) {
    case "create":
      return "Created";
    case "update":
      return "Updated";
    case "delete":
      return "Deleted";
    default:
      return action;
  }
}
function getResourceLabel(resourceType) {
  switch (resourceType) {
    case "sale":
      return "Sale";
    case "sale_payment":
      return "Payment";
    case "sale_item":
      return "Item";
    default:
      return resourceType;
  }
}
function getResourceChipColor(resourceType) {
  switch (resourceType) {
    case "sale_payment":
      return "primary";
    case "sale_item":
      return "warning";
    default:
      return "default";
  }
}
function UserCell({ user }) {
  const initials = user ? `${user.first_name?.[0] ?? ""}${user.last_name?.[0] ?? ""}` : "?";
  const fullName = user ? `${user.first_name} ${user.last_name}` : "System";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { sx: { width: 30, height: 30, fontSize: 12 }, children: initials }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: fullName })
  ] });
}
function getItemName(data) {
  if (!data) return null;
  return data.product_name || data.service_name || null;
}
function ChangesCell({ oldData, newData, action, resourceType }) {
  if (action === "create") {
    const itemName = resourceType === "sale_item" ? getItemName(newData) : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "success.main", children: [
      getResourceLabel(resourceType),
      " created",
      itemName ? `: ${itemName}` : ""
    ] });
  }
  if (action === "delete") {
    const itemName = resourceType === "sale_item" ? getItemName(oldData) : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "error.main", children: [
      getResourceLabel(resourceType),
      " deleted",
      itemName ? `: ${itemName}` : ""
    ] });
  }
  if (!oldData || !newData) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "—" });
  }
  const allKeys = /* @__PURE__ */ new Set([...Object.keys(oldData), ...Object.keys(newData)]);
  const changes = [];
  allKeys.forEach((key) => {
    if (IGNORED_FIELDS.has(key)) return;
    const oldVal = oldData[key];
    const newVal = newData[key];
    if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) {
      changes.push({ field: key, old: oldVal, new: newVal });
    }
  });
  if (changes.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No significant changes" });
  }
  const visible = changes.slice(0, 4);
  const extra = changes.length - visible.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    visible.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { mb: 0.25 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", sx: { fontWeight: 600 }, children: [
        c.field.replace(/_/g, " "),
        ":"
      ] }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          component: "span",
          sx: { color: "error.main", textDecoration: "line-through", mr: 0.5 },
          children: c.old == null ? "null" : String(c.old)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Iconify,
        {
          icon: "solar:arrow-right-linear",
          width: 12,
          sx: { mx: 0.25, verticalAlign: "middle", color: "text.disabled" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", sx: { color: "success.main", ml: 0.5 }, children: c.new == null ? "null" : String(c.new) })
    ] }, i)),
    extra > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", children: [
      "+",
      extra,
      " more field",
      extra > 1 ? "s" : ""
    ] })
  ] });
}
function SaleAuditDialog({ open, onClose, sale }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const paymentIds = (sale?.payments ?? []).map((p) => p.id);
  const itemIds = (sale?.items ?? []).map((i) => i.id);
  const { auditLogs, auditLogsLoading } = useSaleAuditLogs(
    open ? sale?.id : null,
    paymentIds,
    itemIds
  );
  const renderBody = () => {
    if (auditLogsLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) });
    }
    if (!auditLogs.length) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          filled: true,
          title: "No Audit Logs",
          description: "No changes have been recorded for this sale yet.",
          sx: { py: 8 }
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { sx: { minWidth: 700 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { width: 110 }, children: "Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { width: 100 }, children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { width: 160 }, children: "User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { width: 160, whiteSpace: "nowrap" }, children: "Date" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: auditLogs.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TableRow,
        {
          sx: {
            verticalAlign: "top",
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.main, 0.04)
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                color: getActionColor(log.action),
                variant: "soft",
                sx: { textTransform: "capitalize" },
                children: getActionLabel(log.action)
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: getResourceLabel(log.resource_type),
                variant: "outlined",
                color: getResourceChipColor(log.resource_type),
                sx: { fontSize: 11 }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCell, { user: log.user }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChangesCell,
              {
                oldData: log.old_data,
                newData: log.new_data,
                action: log.action,
                resourceType: log.resource_type
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                color: "text.secondary",
                sx: { whiteSpace: "nowrap" },
                children: fDateTime(log.created_at)
              }
            ) })
          ]
        },
        log.id
      )) })
    ] }) }) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Dialog,
    {
      open,
      onClose,
      maxWidth: "lg",
      fullWidth: true,
      fullScreen: isMobile,
      PaperProps: { sx: { borderRadius: { xs: 0, sm: 2 } } },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:history-bold", width: 22 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Audit History" }),
            sale?.sale_number && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { ml: 1 }, children: [
              "— ",
              sale.sale_number
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold", width: 20 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, sx: { p: 0 }, children: renderBody() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, variant: "outlined", color: "inherit", children: "Close" }) })
      ]
    }
  );
}
function SalePaymentHistory({ sale }) {
  if (!sale.payments || sale.payments.length <= 1) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mt: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Payment History" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Timeline,
      {
        sx: {
          p: 0,
          [`& .${timelineItemClasses.root}:before`]: { p: 0, flex: 0 }
        },
        children: sale.payments.map((payment, index) => {
          const lastItem = index === sale.payments.length - 1;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineItem, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineSeparator, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDot, { color: "primary" }),
              lastItem ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineConnector, {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                sx: { mb: 1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: payment.payment_method.replace("_", " ").toUpperCase() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
                      fDate(payment.created_at),
                      " • ",
                      fTime(payment.created_at)
                    ] }),
                    payment.notes && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: payment.notes }),
                    payment.processed_by_user && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                      "Processed by ",
                      payment.processed_by_user.first_name,
                      " ",
                      payment.processed_by_user.last_name
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", color: "primary", children: fCurrency(payment.amount) })
                ]
              }
            ) })
          ] }, payment.id || index);
        })
      }
    ) })
  ] });
}
const INVOICE_STATUS_OPTIONS = [
  { value: "completed", label: "Completed" },
  { value: "pending", label: "Pending" },
  { value: "cancelled", label: "Cancelled" }
  // { value: 'refunded', label: 'Refunded' },
  // { value: 'partially_refunded', label: 'Partially Refunded' },
];
function RefundConfirmationDialog({ refundDialog, sale, handleRefund }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: refundDialog.value, onClose: refundDialog.onFalse, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { sx: { display: "flex", alignItems: "center", gap: 1, color: "error.main" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:danger-triangle-bold", width: 24 }),
      "Confirm Refund"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "error", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:shield-warning-bold" }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "This action is irreversible." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Issuing a refund will permanently reverse this sale. Inventory will be restocked and the sale paid amount will be refunded. This cannot be undone." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          sx: {
            p: 1.5,
            borderRadius: 1,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.neutral"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 0.5 }, children: "Refund summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              "Sale: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: sale.sale_number })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              "Total: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "inherit" }, children: fCurrency(sale.total_amount) })
            ] }),
            sale.amount_paid > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              "Amount paid: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: fCurrency(sale.amount_paid) })
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { sx: { px: 3, pb: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: refundDialog.onFalse, variant: "outlined", color: "inherit", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleRefund, variant: "contained", color: "error", children: "Yes, process refund" })
    ] })
  ] });
}
function SaleDetailsView() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const paymentDialog = Ee();
  const editDialog = Ee();
  const refundDialog = Ee();
  const auditDialog = Ee();
  const cancelOverrideDialog = Ee();
  const editOverrideDialog = Ee();
  const [refundAmountPaid, setRefundAmountPaid] = reactExports.useState(false);
  const [pendingCancelEvent, setPendingCancelEvent] = reactExports.useState(null);
  const [editViaOverride, setEditViaOverride] = reactExports.useState(false);
  const { sale, saleLoading, saleError, saleMutate } = useGetSale(id);
  const { user } = useAuthContext();
  const { isAdmin, isManager } = usePermissions();
  const isPrivilegedUser = isAdmin || isManager;
  const balanceDue = Math.max((sale?.total_amount || 0) - (sale?.amount_paid || 0), 0);
  const handleAddPayment = async (payments) => {
    for (const payment of payments) {
      const amount = Number(payment.amount);
      if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Enter a payment amount greater than $0.");
      }
      const { error } = await addSalePayment(sale.id, {
        payment_method: payment.payment_method,
        amount,
        notes: payment.notes,
        processed_by: user?.id
      });
      if (error) {
        console.error("Error adding payment:", error);
        throw new Error(
          error.code === "23514" ? "The payment amount must be greater than $0." : error.message || "Could not record the payment. Please try again."
        );
      }
    }
    paymentDialog.onFalse();
    toast.success("Payment recorded");
  };
  const applyStatusChange = async (newStatusValue, authorizedBy = null, overrideType = null) => {
    const toastId = toast.loading("Changing status...");
    try {
      const { error } = await updateSaleStatus(sale.id, {
        status: newStatusValue,
        authorizedBy,
        overrideType
      });
      if (error) throw error;
      await saleMutate();
      toast.success("Sale status updated successfully");
    } catch (error) {
      console.error("Error updating sale status:", error);
      toast.error("Error updating sale status");
    } finally {
      toast.dismiss(toastId);
    }
  };
  const handleChangeStatus = (_, newStatus) => {
    const newStatusValue = newStatus.props.value;
    if (newStatusValue === "cancelled" && !isPrivilegedUser) {
      setPendingCancelEvent(newStatusValue);
      cancelOverrideDialog.onTrue();
      return;
    }
    applyStatusChange(newStatusValue);
  };
  const handleRefund = async () => {
    refundDialog.onFalse();
    const toastId = toast.loading("Processing refund...");
    try {
      const refundedItems = sale.items.map((item) => ({
        sale_item_id: item.id,
        quantity: item.quantity,
        amount: item.line_total
      }));
      const refundData = {
        sale_id: sale.id,
        refunded_items: refundedItems,
        amount: sale.total_amount,
        reason: "Full refund",
        processed_by: user?.id,
        refund_method: "cash"
      };
      const { error } = await createRefund(refundData);
      if (error) throw error;
      await saleMutate();
      toast.success("Refund processed successfully");
    } catch (error) {
      console.error("Error processing refund:", error);
      toast.error(error.message || "Error processing refund");
    } finally {
      toast.dismiss(toastId);
      setRefundAmountPaid(false);
    }
  };
  if (saleLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { message: "Loading sale details..." });
  }
  if (saleError || !sale) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { filled: true, title: "Sale not found or error loading details" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        backHref: "back",
        heading: sale.sale_number,
        links: [
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Sales", href: paths.dashboard.pos.sales },
          { name: sale.sale_number }
        ],
        sx: { mb: 3 },
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, sx: { mb: 3, flexWrap: "wrap", gap: 1 }, children: [
          (sale.status === "completed" || sale.status === "partially_refunded") && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              color: "error",
              onClick: refundDialog.onTrue,
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:refresh-circle-bold" }),
              children: "Refund"
            }
          ),
          sale.status !== "refunded" && sale.status !== "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: balanceDue > 0 ? "" : "Nothing left to pay on this sale", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              disabled: balanceDue <= 0,
              onClick: paymentDialog.onTrue,
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:card-bold" }),
              children: "Add Payment"
            }
          ) }) }),
          sale.status !== "refunded" && sale.status !== "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              onClick: isPrivilegedUser ? editDialog.onTrue : editOverrideDialog.onTrue,
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              children: "Edit Sale"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBasedGuard, { roles: ["admin"], hasContent: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              color: "inherit",
              onClick: auditDialog.onTrue,
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:history-bold" }),
              children: "Audit History"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SaleToolbar,
      {
        sale,
        currentStatus: sale.status || "",
        onChangeStatus: handleChangeStatus,
        statusOptions: INVOICE_STATUS_OPTIONS,
        hideSelect: sale.status === "refunded" || sale.status === "partially_refunded" || sale.status === "cancelled"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { pt: { xs: 3, sm: 5 }, px: { xs: 2, sm: 5 } }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            rowGap: 5,
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: 48, height: 48 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { sx: { width: "100%", height: "100%" } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, sx: { alignItems: { xs: "flex-start", md: "flex-end" } }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  variant: "soft",
                  color: sale.status === "completed" && "success" || sale.status === "pending" && "warning" || sale.status === "overdue" && "error" || "default",
                  children: sale.status
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: sale.sale_number })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { typography: "body2" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Sale from" }),
              "AMADEUS BEAUTY FACTORY",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              sale?.branch?.name,
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { typography: "body2" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Sale to" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Box,
                {
                  sx: { display: "flex", alignItems: "center", gap: 0.5, textTransform: "capitalize" },
                  children: [
                    sale?.client?.first_name,
                    " ",
                    sale?.client?.last_name,
                    sale?.client?.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "View client", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => router.push(paths.dashboard.clients.profile(sale.client.id)),
                        sx: { p: 0.25 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:arrow-right-up-bold", width: 16 })
                      }
                    ) })
                  ]
                }
              ),
              "Phone: ",
              formatPhoneNumberIntl(sale?.client?.phone_primary) || "—",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { typography: "body2" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Cashier" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { textTransform: "capitalize" }, children: [
                sale?.cashier?.first_name,
                " ",
                sale?.cashier?.last_name
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { typography: "body2" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Date create" }),
              fDate(sale.created_at),
              " • ",
              fTime(sale.created_at)
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SaleItems, { sale }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SaleTotalSummary,
        {
          taxes: sale?.tax_amount,
          subtotal: sale?.subtotal,
          discount: sale?.discount_amount,
          discountCode: sale?.discount_code,
          shipping: sale?.shipping,
          totalAmount: sale?.total_amount,
          amount_paid: sale?.amount_paid,
          manual_discount_type: sale?.manual_discount_type,
          manual_discount_amount: sale?.manual_discount_amount,
          manual_discount_value: sale?.manual_discount_value,
          voucherAmount: sale?.voucher_amount,
          voucher: sale?.voucher,
          cashbackRedemptionAmount: sale?.cashback_redemption_amount,
          rewardRedemption: sale?.reward_redemptions?.[0] ?? null,
          deliveryCharge: sale?.delivery_charge || 0,
          deliveryMethod: sale?.delivery_method,
          items: sale?.items,
          planUsages: sale?.plan_usages ?? []
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SaleFooter, { notes: sale?.notes })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SalePaymentHistory, { sale }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SaleEditDialog,
      {
        open: editDialog.value,
        onClose: () => {
          editDialog.onFalse();
          setEditViaOverride(false);
        },
        sale,
        branchId: sale?.branch_id,
        authorization: editViaOverride ? "Opened with a supervisor override" : `Editing as ${isAdmin ? "admin" : "manager"}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosPaymentDialog,
      {
        open: paymentDialog.value,
        onClose: paymentDialog.onFalse,
        totalAmount: balanceDue,
        onSubmit: handleAddPayment,
        isPrivilegedUser
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaleAuditDialog, { open: auditDialog.value, onClose: auditDialog.onFalse, sale }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RefundConfirmationDialog,
      {
        refundDialog,
        sale,
        handleRefund
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosSupervisorOverrideDialog,
      {
        open: cancelOverrideDialog.value,
        onClose: () => {
          setPendingCancelEvent(null);
          cancelOverrideDialog.onFalse();
        },
        onSuccess: (_, supervisorUserId) => {
          cancelOverrideDialog.onFalse();
          if (pendingCancelEvent) {
            applyStatusChange(pendingCancelEvent, supervisorUserId ?? null, "cancellation");
            setPendingCancelEvent(null);
          }
        },
        reason: "Cancelling a sale requires manager or admin authorization."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosSupervisorOverrideDialog,
      {
        open: editOverrideDialog.value,
        onClose: editOverrideDialog.onFalse,
        onSuccess: () => {
          editOverrideDialog.onFalse();
          setEditViaOverride(true);
          editDialog.onTrue();
        },
        reason: "Editing a sale requires manager or admin authorization."
      }
    )
  ] });
}
const metadata = { title: `Sale Details | Dashboard - ${CONFIG.appName}` };
function SaleDetailsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaleDetailsView, {})
  ] });
}
export {
  SaleDetailsPage as default
};
