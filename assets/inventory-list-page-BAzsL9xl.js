import { j as jsxRuntimeExports, x as Select, M as MenuItem, d as Button, a as Iconify, r as reactExports, S as Stack, al as Avatar, bm as ListItemText, c as Typography, Y as Link, Z as RouterLink, a3 as paths, a2 as Chip, a0 as fCurrency, L as Label, bI as useGetInventoryAdjustments, B as Box, b as CircularProgress, T as Tooltip, as as fDateTime, I as IconButton, aF as approveInventoryAdjustment, t as toast, bJ as rejectInventoryAdjustment, E as Ee, bK as useSearchParams, a6 as useUserBranches, bL as useGetProducts, bM as deleteProduct, bN as deleteMultipleProducts, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, bq as gridClasses, C as CONFIG } from "./index-B08HRm4A.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, C as CustomToolbarQuickFilter, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { u as useBarcodeScanner } from "./use-barcode-scanner-CEYdIlFE.js";
import { F as FormControl, T as TextField } from "./TextField-CIuP940C.js";
import { A as AVATAR_SIZE } from "./avatar-size-DxlpMe7m.js";
import { b as useGetSuppliers } from "./supplier-service-CvoEEgb8.js";
import { C as CustomGridActionsCellItem } from "./grid-actions-cell-item-GDL6dx4W.js";
import { C as CATEGORY_COLOR_MAP } from "./product-color-map.constants-DF9H_90N.js";
import { P as PRODUCT_CATEGORIES } from "./product-categories.constants-BbDELu5c.js";
import { P as ProductCreateEditDialog, a as ProductInventoryDialog, b as ProductTransferDialog } from "./product-create-edit-dialog-Coa8FK9Z.js";
import { P as ProductStockReceiptDialog } from "./product-stock-receipt-dialog-BBle75HG.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import "./ExportPrint-CAqo1wR3.js";
import "./InputAdornment-BqZyQBIE.js";
import "./form-provider-u_wAFv-h.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./with-selector-ClfCuV5M.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./Grid-D21oDAlg.js";
import "./schemas-BVeYYbTr.js";
import "./coerce-5-WTXoHr.js";
import "./expense-service-B2nZjY_a.js";
import "./supplier-autocomplete-Cr5Mwn0p.js";
import "./quick-add-supplier-dialog-DtmRFzkH.js";
import "./index-C4JOln-R.js";
import "./schema-utils-CG9_JlGr.js";
import "./react-pdf.browser-DOUvi50W.js";
import "./index-CtpEzAlo.js";
import "./toPropertyKey-BRoQIA86.js";
import "./Skeleton-BC-WlQQE.js";
import "./TablePagination-BOFMLJYr.js";
import "./ToggleButton-D4MfeHtt.js";
function productsToolbar({
  branches,
  selectedBranch,
  setSelectedBranch,
  selectedRows,
  confirmDialog,
  columnVisibilityModel,
  setColumnVisibilityModel,
  columns,
  products,
  toolbarOptions,
  setPaginationModel,
  hideOutOfStock,
  setHideOutOfStock
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { sx: { p: 2 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarLeftPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarQuickFilter, { size: "small", placeholder: "Search products..." }),
      branches.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", sx: { minWidth: 200, height: "100%", mr: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          value: selectedBranch?.id || "",
          onChange: (event) => {
            const branchId = event.target.value;
            const branch = branchId ? branches.find((b) => b.id === branchId) : null;
            setSelectedBranch(branch);
            setPaginationModel((prev) => ({ ...prev, page: 0 }));
          },
          displayEmpty: true,
          children: branches.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: branch.id, children: branch.name }, branch.id))
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "small",
          variant: hideOutOfStock ? "contained" : "outlined",
          color: hideOutOfStock ? "warning" : "inherit",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:box-minimalistic-bold" }),
          onClick: () => setHideOutOfStock((prev) => !prev),
          children: hideOutOfStock ? "Showing in stock" : "Hide out of stock"
        }
      ),
      !!selectedRows.length && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "small",
          color: "error",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
          onClick: confirmDialog.onTrue,
          children: [
            "Delete (",
            selectedRows.length,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomToolbarColumnsButton,
        {
          columnVisibilityModel,
          onColumnVisibilityModelChange: setColumnVisibilityModel,
          columns
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, { data: products, filename: "products", columns }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomToolbarSettingsButton,
        {
          settings: toolbarOptions.settings,
          onChangeSettings: toolbarOptions.onChangeSettings
        }
      )
    ] })
  ] });
}
function useProductColumns({
  confirmDialog,
  setSelectedRows,
  density,
  handleTransfer,
  handleInventory,
  handleEdit
}) {
  const avatarSize = AVATAR_SIZE[density] ?? 36;
  const { suppliers } = useGetSuppliers();
  return reactExports.useMemo(
    () => [
      {
        field: "name",
        headerName: "Product",
        flex: 1.5,
        minWidth: 220,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            alignItems: "center",
            spacing: 1.5,
            sx: { width: "100%", height: "100%" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Avatar,
                {
                  variant: "rounded",
                  src: params.row.image_url,
                  alt: params.value,
                  sx: {
                    width: avatarSize,
                    height: avatarSize,
                    fontSize: avatarSize * 0.45,
                    bgcolor: "background.neutral",
                    flexShrink: 0
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:box-bold", width: 20, sx: { color: "text.disabled" } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ListItemText,
                {
                  primary: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      component: RouterLink,
                      href: paths.dashboard.products.details(params.row.id),
                      color: "inherit",
                      variant: "subtitle2",
                      noWrap: true,
                      sx: { cursor: "pointer" },
                      children: params.value
                    }
                  ),
                  secondary: density !== "compact" && /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.5, alignItems: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", noWrap: true, children: params.row.description || "No Description" }) }),
                  slotProps: { primary: { noWrap: true } }
                }
              )
            ]
          }
        )
      },
      {
        field: "brand",
        headerName: "Brand",
        width: 130,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "body2",
            fontWeight: 500,
            noWrap: true,
            color: params.value ? "text.primary" : "text.disabled",
            children: params.value ? params.value : "—"
          }
        ) })
      },
      {
        field: "sku",
        headerName: "SKU",
        width: 130,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "body2",
            fontWeight: 500,
            noWrap: true,
            color: params.value ? "text.primary" : "text.disabled",
            children: params.value ? params.value : "—"
          }
        ) })
      },
      {
        field: "category",
        headerName: "Category",
        width: 140,
        type: "singleSelect",
        valueOptions: PRODUCT_CATEGORIES.map((c) => ({ value: c.value, label: c.label })),
        renderCell: (params) => {
          const category = PRODUCT_CATEGORIES.find((cat) => cat.value === params.value);
          const color = CATEGORY_COLOR_MAP[params.value] || "default";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: category?.label || params.value || "—",
              variant: "soft",
              color
            }
          );
        }
      },
      {
        field: "supplier_info",
        headerName: "Supplier",
        flex: 1,
        minWidth: 140,
        sortable: false,
        filterable: false,
        valueGetter: (value) => value?.name ?? "",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "body2",
            fontWeight: 500,
            noWrap: true,
            color: params.value ? "text.primary" : "text.disabled",
            children: params.value ? params.value : "—"
          }
        ) })
      },
      {
        field: "supplier_id",
        headerName: "Supplier",
        type: "singleSelect",
        filterable: true,
        sortable: false,
        width: 0,
        valueOptions: suppliers?.map((s) => ({ value: s.id, label: s.name })) ?? []
      },
      {
        field: "retail_price",
        headerName: "Retail",
        width: 110,
        align: "start",
        headerAlign: "start",
        type: "number",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: fCurrency(params.value) }) })
      },
      {
        field: "cost_price",
        headerName: "Cost",
        width: 110,
        align: "start",
        headerAlign: "start",
        type: "number",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: params.value != null ? fCurrency(params.value) : "—" }) })
      },
      {
        field: "margin",
        headerName: "Margin",
        width: 90,
        align: "start",
        headerAlign: "start",
        sortable: false,
        filterable: false,
        valueGetter: (value, row) => {
          const cost = row?.cost_price;
          const retail = row?.retail_price;
          if (!cost || !retail || retail === 0) return null;
          return (retail - cost) / retail * 100;
        },
        renderCell: (params) => {
          if (params.value == null)
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" });
          const pct = params.value;
          const color = pct >= 50 ? "success" : pct >= 25 ? "warning" : "error";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { color, variant: "soft", children: [
            pct.toFixed(1),
            "%"
          ] });
        }
      },
      {
        field: "totalQuantity",
        headerName: "Stock",
        width: 100,
        type: "number",
        align: "start",
        headerAlign: "start",
        sortable: false,
        filterable: false,
        renderCell: (params) => {
          const qty = params.value ?? 0;
          const isOut = qty === 0;
          const isLow = qty > 0 && qty <= 5;
          const stockColor = isOut ? "error" : isLow ? "warning" : "success";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: stockColor, variant: "subtitle2", children: qty }) });
        }
      },
      {
        field: "in_stock",
        headerName: "In Stock",
        width: 100,
        sortable: false,
        filterable: false,
        valueGetter: (value, row) => {
          const qty = row?.totalQuantity ?? 0;
          if (qty === 0) return "Out of stock";
          if (qty <= 5) return "Low stock";
          return "In stock";
        },
        renderCell: (params) => {
          const qty = params.row.totalQuantity ?? 0;
          const isOut = qty === 0;
          const isLow = qty > 0 && qty <= 5;
          const color = isOut ? "error" : isLow ? "warning" : "success";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color, variant: "soft", children: params.value });
        }
      },
      {
        field: "tax_rate",
        headerName: "Tax Rate",
        width: 90,
        type: "number",
        align: "start",
        headerAlign: "start",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 500, children: params.value != null ? `${params.value.toFixed(2)}%` : "—" }) })
      },
      {
        field: "is_active",
        headerName: "Status",
        width: 90,
        type: "boolean",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: params.value ? "success" : "default", variant: "soft", children: params.value ? "Active" : "Inactive" })
      },
      {
        headerName: " ",
        field: "actions",
        type: "actions",
        flex: 1,
        getActions: (params) => [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              showInMenu: true,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:transfer-horizontal-bold" }),
              label: "Transfer",
              onClick: () => handleTransfer(params.row)
            },
            "transfer"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              showInMenu: true,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:box-bold" }),
              label: "Add Inventory",
              onClick: () => handleInventory(params.row)
            },
            "inventory"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              label: "Edit",
              showInMenu: true,
              onClick: () => handleEdit(params.row)
            },
            "edit"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-minimalistic-bold" }),
              label: "Delete",
              showInMenu: true,
              onClick: () => {
                setSelectedRows([params.id]);
                confirmDialog.onTrue();
              },
              sx: { color: "error.main" }
            },
            "delete"
          )
        ]
      }
    ],
    [
      confirmDialog,
      setSelectedRows,
      handleTransfer,
      handleInventory,
      handleEdit,
      density,
      avatarSize,
      suppliers
    ]
  );
}
function InventoryAdjustmentsApprovalsDialog({ open, onClose }) {
  const [rejectDialogId, setRejectDialogId] = reactExports.useState(null);
  const [rejectionReason, setRejectionReason] = reactExports.useState("");
  const [actionLoading, setActionLoading] = reactExports.useState(null);
  const { adjustments, adjustmentsLoading } = useGetInventoryAdjustments({
    filters: { status: "pending" },
    pageSize: 50
  });
  const handleApprove = async (id) => {
    setActionLoading(id);
    try {
      await approveInventoryAdjustment(id);
      toast.success("Adjustment approved — inventory updated");
    } catch (err) {
      toast.error(err?.message ?? "Approval failed");
    } finally {
      setActionLoading(null);
    }
  };
  const handleOpenReject = (id) => {
    setRejectDialogId(id);
    setRejectionReason("");
  };
  const handleConfirmReject = async () => {
    setActionLoading(rejectDialogId);
    try {
      await rejectInventoryAdjustment(rejectDialogId, rejectionReason || null);
      toast.success("Adjustment rejected");
      setRejectDialogId(null);
    } catch (err) {
      toast.error(err?.message ?? "Rejection failed");
    } finally {
      setActionLoading(null);
    }
  };
  const pendingCount = adjustments.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "lg", fullWidth: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Pending Adjustments" }),
          pendingCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "warning", variant: "filled", children: pendingCount })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: "Review and approve or reject stock count adjustments submitted by staff." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { p: 0 }, children: adjustmentsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }) : pendingCount === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No pending adjustments", sx: { py: 6 } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Expected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actual" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Difference" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Submitted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: adjustments.map((adj) => {
          const diff = adj.actual_quantity - adj.expected_quantity;
          const isLoading = actionLoading === adj.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, noWrap: true, children: adj.product?.name ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: adj.product?.sku })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", noWrap: true, children: adj.branch?.name ?? adj.warehouse?.name ?? "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: adj.expected_quantity }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: adj.actual_quantity }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: diff > 0 ? `+${diff}` : diff,
                color: diff > 0 ? "success" : diff < 0 ? "error" : "default",
                variant: "outlined"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { maxWidth: 200 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: adj.reason ?? "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", noWrap: true, children: adj.reason ?? "—" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: adj.created_at ? fDateTime(adj.created_at) : "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, justifyContent: "center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Approve", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  size: "small",
                  color: "success",
                  disabled: isLoading,
                  onClick: () => handleApprove(adj.id),
                  children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16, color: "inherit" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:checkmark-circle-2-fill", width: 20 })
                }
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Reject", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  size: "small",
                  color: "error",
                  disabled: isLoading,
                  onClick: () => handleOpenReject(adj.id),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-circle-fill", width: 20 })
                }
              ) }) })
            ] }) })
          ] }, adj.id);
        }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "Close" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Dialog,
      {
        open: !!rejectDialogId,
        onClose: () => setRejectDialogId(null),
        maxWidth: "xs",
        fullWidth: true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Reject Adjustment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Optionally provide a reason for rejecting this adjustment." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                fullWidth: true,
                multiline: true,
                rows: 3,
                label: "Reason (optional)",
                value: rejectionReason,
                onChange: (e) => setRejectionReason(e.target.value),
                autoFocus: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setRejectDialogId(null), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "contained",
                color: "error",
                loading: actionLoading === rejectDialogId,
                onClick: handleConfirmReject,
                children: "Reject"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const HIDE_COLUMNS = {
  description: false,
  cost_price: false,
  margin: false,
  brand: false,
  tax_rate: false,
  in_stock: false,
  supplier_id: false
};
const HIDE_COLUMNS_TOGGLABLE = ["actions", "supplier_id", "tax_rate"];
function ProductListView() {
  const confirmDialog = Ee();
  const createDialog = Ee();
  const inventoryDialog = Ee();
  const transferDialog = Ee();
  const stockReceiptDialog = Ee();
  const approvalsDialog = Ee();
  const toolbarOptions = useToolbarSettings();
  const [searchParams, setSearchParams] = useSearchParams();
  const [paginationModel, setPaginationModel] = reactExports.useState({
    page: Number(searchParams.get("page")) || 0,
    pageSize: Number(searchParams.get("pageSize")) || 25
  });
  const [filterModel, setFilterModel] = reactExports.useState(() => {
    const quickFilter = searchParams.get("q");
    let items = [];
    try {
      items = JSON.parse(searchParams.get("filters") ?? "[]");
    } catch {
      items = [];
    }
    return { items, quickFilterValues: quickFilter ? quickFilter.split(" ") : [] };
  });
  const [sortModel, setSortModel] = reactExports.useState([
    {
      field: searchParams.get("sortField") || "name",
      sort: searchParams.get("sortDir") || "asc"
    }
  ]);
  const [selectedRows, setSelectedRows] = reactExports.useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = reactExports.useState(HIDE_COLUMNS);
  const { branches, primaryBranch, loading: branchesLoading } = useUserBranches();
  const [selectedBranch, setSelectedBranch] = reactExports.useState(null);
  const [hideOutOfStock, setHideOutOfStock] = reactExports.useState(searchParams.get("hideOOS") === "1");
  const [editingProduct, setEditingProduct] = reactExports.useState(null);
  const [inventoryProduct, setInventoryProduct] = reactExports.useState(null);
  const [transferProduct, setTransferProduct] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (selectedBranch || !branches?.length) return;
    const branchId = searchParams.get("branch");
    const branchFromUrl = branchId ? branches.find((branch) => String(branch.id) === branchId) : null;
    setSelectedBranch(branchFromUrl || primaryBranch || null);
  }, [selectedBranch, branches, primaryBranch, searchParams]);
  reactExports.useEffect(() => {
    const params = new URLSearchParams();
    if (paginationModel.page) params.set("page", String(paginationModel.page));
    if (paginationModel.pageSize !== 25) params.set("pageSize", String(paginationModel.pageSize));
    const [currentSort] = sortModel;
    if (currentSort && (currentSort.field !== "name" || currentSort.sort !== "asc")) {
      params.set("sortField", currentSort.field);
      params.set("sortDir", currentSort.sort);
    }
    const quickSearch = filterModel.quickFilterValues?.join(" ")?.trim();
    if (quickSearch) params.set("q", quickSearch);
    if (filterModel.items?.length) params.set("filters", JSON.stringify(filterModel.items));
    if (selectedBranch?.id) params.set("branch", String(selectedBranch.id));
    if (hideOutOfStock) params.set("hideOOS", "1");
    setSearchParams(params, { replace: true });
  }, [paginationModel, sortModel, filterModel, selectedBranch, hideOutOfStock, setSearchParams]);
  const filters = reactExports.useMemo(() => {
    const result = {};
    const quickSearch = filterModel.quickFilterValues?.join(" ")?.trim();
    if (quickSearch) result.name = quickSearch;
    return result;
  }, [filterModel.quickFilterValues]);
  const filterItems = reactExports.useMemo(() => filterModel.items ?? [], [filterModel.items]);
  const sort = reactExports.useMemo(() => {
    if (sortModel.length === 0) return {};
    const { field, sort: sortDirection } = sortModel[0];
    return {
      orderBy: field,
      order: sortDirection
    };
  }, [sortModel]);
  const handleFilterModelChange = reactExports.useCallback((newFilterModel) => {
    setFilterModel(newFilterModel);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleBarcode = reactExports.useCallback(
    (barcode) => {
      handleFilterModelChange({ items: [], quickFilterValues: [barcode] });
      toast.info(`Searching for: ${barcode}`);
    },
    [handleFilterModelChange]
  );
  useBarcodeScanner({ onBarcode: handleBarcode });
  const handleSortModelChange = reactExports.useCallback((newSortModel) => {
    setSortModel(newSortModel);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const { products, productsLoading, productsError, totalCount, productsEmpty } = useGetProducts({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    filters,
    sort,
    filterItems,
    branchId: selectedBranch?.id,
    hideOutOfStock,
    // selectedBranch starts null and is filled in by an effect once the user's
    // branches arrive. Waiting for that avoids a throwaway fetch with no branch.
    enabled: !branchesLoading && (!!selectedBranch?.id || branches.length === 0)
  });
  const handleDelete = reactExports.useCallback(async () => {
    try {
      if (selectedRows.length === 1) {
        await deleteProduct(selectedRows[0]);
        toast.success("Product deleted successfully");
      } else {
        await deleteMultipleProducts(selectedRows);
        toast.success(`${selectedRows.length} products deleted successfully`);
      }
      setSelectedRows([]);
      confirmDialog.onFalse();
    } catch (error) {
      console.error("Error deleting products:", error);
      toast.error("Failed to delete products");
    }
  }, [selectedRows, confirmDialog]);
  const handleEdit = reactExports.useCallback(
    (product) => {
      setEditingProduct(product);
      createDialog.onTrue();
    },
    [createDialog]
  );
  const handleCreate = reactExports.useCallback(() => {
    setEditingProduct(null);
    createDialog.onTrue();
  }, [createDialog]);
  const handleInventory = reactExports.useCallback(
    (product) => {
      setInventoryProduct(product);
      inventoryDialog.onTrue();
    },
    [inventoryDialog]
  );
  const handleTransfer = reactExports.useCallback(
    (product) => {
      setTransferProduct(product);
      transferDialog.onTrue();
    },
    [transferDialog]
  );
  const columns = useProductColumns({
    confirmDialog,
    setSelectedRows,
    density: toolbarOptions?.settings?.density,
    handleTransfer,
    handleInventory,
    handleEdit
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Products",
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:inbox-in-bold" }),
              onClick: stockReceiptDialog.onTrue,
              children: "Receive Stock"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: handleCreate,
              children: "New Product"
            }
          )
        ] }),
        sx: { mb: 3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        sx: {
          minHeight: 640,
          flexGrow: { md: 1 },
          display: { md: "flex" },
          flexDirection: { md: "column" }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DataGrid,
          {
            rows: products,
            columns,
            rowHeight: 64,
            loading: productsLoading,
            rowCount: totalCount,
            pageSizeOptions: [5, 10, 25, 50, 100],
            paginationMode: "server",
            paginationModel,
            onPaginationModelChange: setPaginationModel,
            sortingMode: "server",
            sortModel,
            onSortModelChange: handleSortModelChange,
            filterMode: "server",
            filterModel,
            onFilterModelChange: handleFilterModelChange,
            onRowSelectionModelChange: (newSelectionModel) => {
              setSelectedRows(Array.from(newSelectionModel.ids));
            },
            columnVisibilityModel,
            onColumnVisibilityModelChange: setColumnVisibilityModel,
            checkboxSelection: true,
            disableRowSelectionOnClick: true,
            ...toolbarOptions.settings,
            slots: {
              toolbar: productsToolbar,
              noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
                EmptyContent,
                {
                  title: "No products found",
                  description: "Create your first product to get started",
                  action: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "contained",
                      startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
                      onClick: handleCreate,
                      children: "New Product"
                    }
                  )
                }
              )
            },
            sx: {
              [`& .${gridClasses.cell}`]: {
                alignItems: "center"
              },
              [`& .${gridClasses.row}`]: {
                cursor: "pointer"
              }
            },
            slotProps: {
              toolbar: {
                branches,
                selectedBranch,
                setSelectedBranch,
                selectedRows,
                confirmDialog,
                columnVisibilityModel,
                setColumnVisibilityModel,
                columns,
                products,
                toolbarOptions,
                setPaginationModel,
                hideOutOfStock,
                setHideOutOfStock
              },
              columnsManagement: {
                getTogglableColumns: () => columns.filter((col) => !HIDE_COLUMNS_TOGGLABLE.includes(col.field)).map((col) => col.field)
              }
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCreateEditDialog,
      {
        open: createDialog.value,
        onClose: createDialog.onFalse,
        product: editingProduct,
        onSuccess: () => {
          createDialog.onFalse();
          setEditingProduct(null);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductInventoryDialog,
      {
        open: inventoryDialog.value,
        onClose: inventoryDialog.onFalse,
        product: inventoryProduct,
        branches,
        onSuccess: () => {
          inventoryDialog.onFalse();
          setInventoryProduct(null);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductTransferDialog,
      {
        open: transferDialog.value,
        onClose: transferDialog.onFalse,
        product: transferProduct,
        branches,
        onSuccess: () => {
          transferDialog.onFalse();
          setTransferProduct(null);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductStockReceiptDialog,
      {
        open: stockReceiptDialog.value,
        onClose: stockReceiptDialog.onFalse,
        branches,
        onSuccess: stockReceiptDialog.onFalse
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      InventoryAdjustmentsApprovalsDialog,
      {
        open: approvalsDialog.value,
        onClose: approvalsDialog.onFalse
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: confirmDialog.onFalse,
        title: "Delete Products",
        content: selectedRows.length === 1 ? "Are you sure you want to delete this product? This action cannot be undone." : `Are you sure you want to delete ${selectedRows.length} products? This action cannot be undone.`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleDelete, children: "Delete" })
      }
    )
  ] });
}
const metadata = { title: `Inventory | Dashboard - ${CONFIG.appName}` };
function InventoryPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductListView, {})
  ] });
}
export {
  InventoryPage as default
};
