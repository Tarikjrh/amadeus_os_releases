import { j as jsxRuntimeExports, a as Iconify, x as Select, M as MenuItem, bm as ListItemText, r as reactExports, S as Stack, c as Typography, L as Label, a0 as fCurrency, as as fDateTime, an as fDate, aw as fTime, f as r, h as dayjs, aA as setStockReceiptItems, aB as confirmStockReceipt, t as toast, B as Box, a2 as Chip, d as Button, c0 as useGetProductCatalog, a6 as useUserBranches, K as Divider, E as Ee, c1 as useGetStockReceipts, c2 as deleteStockReceipt, a4 as DashboardContent, ao as CustomBreadcrumbs, a3 as paths, y as Card, C as CONFIG } from "./index-B08HRm4A.js";
import { p as pdf } from "./react-pdf.browser-DOUvi50W.js";
import { b as useGetSuppliers } from "./supplier-service-CvoEEgb8.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { R as RECEIPT_STATUSES, S as StockReceiptPdfDocument, H as HIDE_COLUMNS, a as HIDE_COLUMNS_TOGGLABLE, P as ProductStockReceiptDialog } from "./product-stock-receipt-dialog-BBle75HG.js";
import { T as TextField, F as FormControl } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { a as renderLocationNameWithIcon } from "./render-location-type-B-TZb61z.js";
import { C as CustomGridActionsCellItem } from "./grid-actions-cell-item-GDL6dx4W.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { D as DatePicker } from "./DatePicker-D3PAml74.js";
import { g as gridClasses } from "./gridClasses-jU9X43RF.js";
import { D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import "./ExportPrint-CAqo1wR3.js";
import "./index-CtpEzAlo.js";
import "./form-provider-u_wAFv-h.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./with-selector-ClfCuV5M.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./Autocomplete-BReuRGf-.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./supplier-autocomplete-Cr5Mwn0p.js";
import "./quick-add-supplier-dialog-DtmRFzkH.js";
import "./index-C4JOln-R.js";
import "./schema-utils-CG9_JlGr.js";
import "./schemas-BVeYYbTr.js";
import "./Grid-D21oDAlg.js";
import "./use-barcode-scanner-CEYdIlFE.js";
import "./coerce-5-WTXoHr.js";
import "./toPropertyKey-BRoQIA86.js";
import "./Skeleton-BC-WlQQE.js";
import "./TablePagination-BOFMLJYr.js";
import "./ToggleButton-D4MfeHtt.js";
function StockOrdersToolbar({
  searchQuery,
  onSearchQueryChange,
  selectedStatus,
  onSelectedStatusChange,
  selectedBranch,
  onSelectedBranchChange,
  selectedSupplier,
  onSelectedSupplierChange,
  suppliers,
  branches,
  columnVisibilityModel,
  onColumnVisibilityModelChange,
  columns,
  togglableColumns,
  filteredReceipts,
  toolbarOptions
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { sx: { py: 2, px: 2.5 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarLeftPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          size: "small",
          value: searchQuery,
          onChange: (event) => onSearchQueryChange(event.target.value),
          placeholder: "Search receipts...",
          sx: { width: 1, maxWidth: { md: 260 } },
          slotProps: {
            input: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill" }) })
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", sx: { minWidth: 120 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: selectedStatus,
          onChange: (event) => onSelectedStatusChange(event.target.value),
          displayEmpty: true,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { primary: "All Status" }) }),
            RECEIPT_STATUSES.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: status.value, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { primary: status.label }) }, status.value))
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", sx: { minWidth: 150 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: selectedBranch || "all",
          onChange: (event) => onSelectedBranchChange(event.target.value === "all" ? null : event.target.value),
          displayEmpty: true,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { primary: "All Locations" }) }),
            branches.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: branch.id, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { primary: branch.name }) }, branch.id))
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", sx: { minWidth: 150 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: selectedSupplier || "all",
          onChange: (event) => onSelectedSupplierChange(event.target.value === "all" ? null : event.target.value),
          displayEmpty: true,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { primary: "All Suppliers" }) }),
            (suppliers || []).map((supplier) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: supplier.id, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { primary: supplier.name }) }, supplier.id))
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomToolbarColumnsButton,
        {
          columnVisibilityModel,
          onColumnVisibilityModelChange,
          columns,
          togglableColumns
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomToolbarExportButton,
        {
          rows: filteredReceipts,
          columns,
          filename: "stock-orders"
        }
      ),
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
function useStockOrdersColumns({
  receipts,
  confirmDialog,
  setSelectedRows,
  setViewingReceipt,
  handleConfirmRow,
  handleEditRow,
  handleDownloadPdf,
  density
}) {
  return reactExports.useMemo(
    () => [
      {
        field: "receipt_number",
        headerName: "Receipt",
        flex: 1,
        minWidth: 160,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: params?.value || "—" }) })
      },
      {
        field: "status",
        headerName: "Status",
        width: 110,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            variant: "soft",
            color: params?.value === "confirmed" ? "success" : params?.value === "draft" ? "warning" : "error",
            children: params?.value
          }
        ) })
      },
      {
        field: "supplier",
        headerName: "Supplier",
        flex: 1,
        minWidth: 140,
        sortable: false,
        valueGetter: (_, row) => row.supplier_ref?.name ?? null,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", spacing: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", noWrap: true, children: params?.value || "—" }) })
      },
      {
        field: "reference_number",
        headerName: "Reference",
        width: 130,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", spacing: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "body2",
            color: params?.value ? "text.primary" : "text.disabled",
            noWrap: true,
            children: params?.value || "—"
          }
        ) })
      },
      {
        field: "location",
        headerName: "Location",
        flex: 1,
        minWidth: 160,
        sortable: false,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", spacing: 1, children: renderLocationNameWithIcon(params.row.branch) })
      },
      {
        field: "items_count",
        headerName: "Items",
        width: 80,
        sortable: false,
        valueGetter: (_, row) => row?.items?.length || 0,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, children: [
          params.value,
          " ",
          params.value === 1 ? "item" : "items"
        ] }) })
      },
      {
        field: "items_units",
        headerName: "Quantity",
        width: 90,
        sortable: false,
        valueGetter: (_, row) => row?.items?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: params.value }) })
      },
      {
        field: "total_value",
        headerName: "Total Value",
        width: 130,
        sortable: false,
        valueGetter: (_, row) => {
          if (!row?.items || !Array.isArray(row.items)) return 0;
          return row.items.reduce((sum, item) => {
            const base = (item.quantity || 0) * (item.unit_cost || 0);
            const afterDiscount = base * (1 - Number(item.discount_percent || 0) / 100);
            return sum + afterDiscount * (1 + Number(item.tax_percent || 0) / 100);
          }, 0);
        },
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 700, children: fCurrency(params.value) }) })
      },
      {
        field: "received_at",
        headerName: "Received",
        width: 150,
        valueGetter: (_, row) => row?.received_at,
        renderCell: (params) => params?.value ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.3, height: "100%", direction: "column", justifyContent: "center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: density !== "compact" ? "body2" : "caption", fontWeight: 500, children: density === "compact" ? fDateTime(params.value) : fDate(params.value) }),
          density !== "compact" && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: fTime(params.value) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" })
      },
      {
        field: "created_at",
        headerName: "Created",
        width: 150,
        valueGetter: (_, row) => row?.created_at,
        renderCell: (params) => params?.value ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.3, height: "100%", direction: "column", justifyContent: "center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(params.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: fTime(params.value) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" })
      },
      {
        field: "notes",
        headerName: "Notes",
        width: 200,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", noWrap: true, children: params?.value || "—" })
      },
      {
        type: "actions",
        field: "actions",
        headerName: "",
        width: 60,
        align: "right",
        getActions: (params) => [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:eye-bold" }),
              label: "View Receipt",
              onClick: () => {
                const receipt = receipts.find((r2) => r2.id === params.id);
                setViewingReceipt(receipt);
              },
              showInMenu: true
            },
            "view"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold" }),
              label: "Confirm Receipt",
              onClick: () => handleConfirmRow(params.id),
              showInMenu: true,
              disabled: params.row.status !== "draft"
            },
            "confirm"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              label: "Edit",
              onClick: () => handleEditRow(params.id),
              showInMenu: true,
              disabled: params.row.status !== "draft"
            },
            "edit"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:cloud-download-fill" }),
              label: "Download PDF",
              onClick: () => handleDownloadPdf(params.row),
              showInMenu: true
            },
            "download"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-minimalistic-bold" }),
              label: "Delete",
              onClick: () => {
                confirmDialog.onTrue();
                setSelectedRows([params.id]);
              },
              showInMenu: true,
              disabled: params.row.status !== "draft"
            },
            "delete"
          )
        ]
      }
    ],
    [
      receipts,
      confirmDialog,
      setSelectedRows,
      setViewingReceipt,
      handleConfirmRow,
      handleEditRow,
      handleDownloadPdf,
      density
    ]
  );
}
function ProductStockConfirmDialog({ open, onClose, receipt, onSuccess }) {
  const [isConfirming, setIsConfirming] = reactExports.useState(false);
  const [selectedItems, setSelectedItems] = reactExports.useState(/* @__PURE__ */ new Set());
  const [editedItems, setEditedItems] = reactExports.useState({});
  r.useEffect(() => {
    if (receipt?.items) {
      setSelectedItems(new Set(receipt.items.map((_, index) => index)));
      setEditedItems({});
    }
  }, [receipt]);
  const handleItemSelect = reactExports.useCallback((index, checked) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(index);
      } else {
        newSet.delete(index);
      }
      return newSet;
    });
  }, []);
  const handleSelectAll = reactExports.useCallback(
    (checked) => {
      if (checked) {
        setSelectedItems(new Set(receipt?.items?.map((_, index) => index) || []));
      } else {
        setSelectedItems(/* @__PURE__ */ new Set());
      }
    },
    [receipt]
  );
  const handleQuantityChange = reactExports.useCallback((index, quantity) => {
    setEditedItems((prev) => ({
      ...prev,
      [index]: { ...prev[index], quantity: Number(quantity) || 0 }
    }));
  }, []);
  const handleExpiryDateChange = reactExports.useCallback((index, date) => {
    setEditedItems((prev) => ({
      ...prev,
      [index]: { ...prev[index], expiryDate: date ? dayjs(date).format("YYYY-MM-DD") : null }
    }));
  }, []);
  const handleClose = reactExports.useCallback(() => {
    setSelectedItems(/* @__PURE__ */ new Set());
    setEditedItems({});
    onClose();
  }, [onClose]);
  const handleConfirm = reactExports.useCallback(async () => {
    if (!receipt || selectedItems.size === 0) return;
    setIsConfirming(true);
    try {
      const itemsToConfirm = receipt.items.map((item, index) => ({ item, index })).filter(({ index }) => selectedItems.has(index)).map(({ item, index }) => ({
        productId: item.product_id,
        quantity: editedItems[index]?.quantity ?? item.quantity,
        giftQuantity: item.gift_quantity || 0,
        unitCost: item.unit_cost,
        discountPercent: item.discount_percent ? Number(item.discount_percent) : void 0,
        taxPercent: item.tax_percent ? Number(item.tax_percent) : void 0,
        batchNumber: item.batch_number,
        expiryDate: editedItems[index]?.expiryDate !== void 0 ? editedItems[index].expiryDate : item.expiry_date,
        notes: item.notes
      }));
      await setStockReceiptItems(receipt.id, itemsToConfirm);
      await confirmStockReceipt(receipt.id);
      toast.success(
        `Stock receipt confirmed — ${itemsToConfirm.length} item(s) added to inventory`
      );
      onSuccess?.();
      handleClose();
    } catch (error) {
      console.error("Failed to confirm receipt:", error);
      toast.error(error.message || "Failed to confirm stock receipt");
    } finally {
      setIsConfirming(false);
    }
  }, [receipt, selectedItems, editedItems, onSuccess, handleClose]);
  if (!receipt) return null;
  const hasPricing = receipt.items?.some(
    (item) => Number(item.discount_percent || 0) > 0 || Number(item.tax_percent || 0) > 0
  ) ?? false;
  const allSelected = receipt.items?.length > 0 && selectedItems.size === receipt.items.length;
  const someSelected = selectedItems.size > 0 && selectedItems.size < (receipt.items?.length || 0);
  const totalSelectedUnits = receipt.items?.reduce((sum, item, index) => {
    if (selectedItems.has(index)) {
      return sum + (editedItems[index]?.quantity ?? item.quantity);
    }
    return sum;
  }, 0) || 0;
  const totalSelectedSubtotal = receipt.items?.reduce((sum, item, index) => {
    if (selectedItems.has(index)) {
      const quantity = editedItems[index]?.quantity ?? item.quantity;
      return sum + quantity * (item.unit_cost || 0);
    }
    return sum;
  }, 0) || 0;
  const totalSelectedDiscountSaved = hasPricing ? receipt.items?.reduce((sum, item, index) => {
    if (selectedItems.has(index)) {
      const quantity = editedItems[index]?.quantity ?? item.quantity;
      const base = quantity * (item.unit_cost || 0);
      return sum + base * (Number(item.discount_percent || 0) / 100);
    }
    return sum;
  }, 0) || 0 : 0;
  const totalSelectedTax = hasPricing ? receipt.items?.reduce((sum, item, index) => {
    if (selectedItems.has(index)) {
      const quantity = editedItems[index]?.quantity ?? item.quantity;
      const base = quantity * (item.unit_cost || 0);
      const afterDiscount = base * (1 - Number(item.discount_percent || 0) / 100);
      return sum + afterDiscount * (Number(item.tax_percent || 0) / 100);
    }
    return sum;
  }, 0) || 0 : 0;
  const totalSelectedGrandTotal = totalSelectedSubtotal - totalSelectedDiscountSaved + totalSelectedTax;
  const totalSelectedGifts = receipt.items?.reduce((sum, item, index) => {
    if (selectedItems.has(index)) {
      return sum + (item.gift_quantity || 0);
    }
    return sum;
  }, 0) || 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "lg", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Confirm Stock Receipt" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 1 }, children: "Review and confirm items to add to inventory. You can edit quantities before confirming." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, sx: { pt: 3, height: "500px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            p: 2,
            bgcolor: "background.neutral",
            borderRadius: 1.5,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 2
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Receipt #" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: receipt.receipt_number })
            ] }),
            receipt.supplier && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Supplier" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: receipt.supplier })
            ] }),
            receipt.reference_number && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Reference" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: receipt.reference_number })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: receipt.branch?.name || receipt.warehouse?.name || "Unknown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: receipt.branch ? "Branch" : "Warehouse",
                  size: "small",
                  variant: "soft",
                  color: "primary",
                  sx: { mt: 0.5, width: "fit-content" }
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              checked: allSelected,
              indeterminate: someSelected,
              onChange: (e) => handleSelectAll(e.target.checked)
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Quantity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Gift Qty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Unit Cost" }),
          hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Disc %" }),
          hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Tax %" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Line Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Batch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Expiry" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: receipt.items?.map((item, index) => {
          const displayName = item.product?.name || item.product_id;
          const displaySku = item.product?.sku;
          const quantity = editedItems[index]?.quantity ?? item.quantity;
          const baseLineCost = quantity * (item.unit_cost || 0);
          const afterDiscount = baseLineCost * (1 - Number(item.discount_percent || 0) / 100);
          const finalLineCost = afterDiscount * (1 + Number(item.tax_percent || 0) / 100);
          const isSelected = selectedItems.has(index);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { sx: { opacity: isSelected ? 1 : 0.6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: isSelected,
                onChange: (e) => handleItemSelect(index, e.target.checked)
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 500, children: displayName }),
              displaySku && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: displaySku })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                size: "small",
                type: "number",
                value: quantity,
                onChange: (e) => handleQuantityChange(index, e.target.value),
                inputProps: { min: 0 },
                sx: { width: 80 },
                disabled: !isSelected
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: item.gift_quantity > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: `+${item.gift_quantity}`,
                variant: "soft",
                color: "success"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: item.unit_cost ? fCurrency(item.unit_cost) : "—" }),
            hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: Number(item.discount_percent) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: `${item.discount_percent}%`,
                variant: "soft",
                color: "error"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" }) }),
            hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: Number(item.tax_percent) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: `${item.tax_percent}%`,
                variant: "soft",
                color: "warning"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: (hasPricing ? finalLineCost : baseLineCost) > 0 ? fCurrency(hasPricing ? finalLineCost : baseLineCost) : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: item.batch_number || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { minWidth: 160 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DatePicker,
              {
                value: editedItems[index]?.expiryDate !== void 0 ? editedItems[index].expiryDate ? dayjs(editedItems[index].expiryDate) : null : item.expiry_date ? dayjs(item.expiry_date) : null,
                onChange: (date) => handleExpiryDateChange(index, date),
                disabled: !isSelected,
                slotProps: {
                  textField: {
                    size: "small",
                    placeholder: "No expiry",
                    sx: { width: 150 }
                  }
                }
              }
            ) })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 4, justifyContent: "flex-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Selected Items" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: selectedItems.size })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Total Units" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: totalSelectedUnits })
        ] }),
        totalSelectedGifts > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Gifted Units" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", color: "success.main", children: [
            "+",
            totalSelectedGifts
          ] })
        ] }),
        totalSelectedGifts > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Gifted Units" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", color: "success.main", children: [
            "+",
            totalSelectedGifts
          ] })
        ] }),
        hasPricing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          totalSelectedSubtotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: fCurrency(totalSelectedSubtotal) })
          ] }),
          totalSelectedDiscountSaved > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Discount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", color: "error.main", children: [
              "-",
              fCurrency(totalSelectedDiscountSaved)
            ] })
          ] }),
          totalSelectedTax > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Tax" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", color: "warning.main", children: [
              "+",
              fCurrency(totalSelectedTax)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Grand Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: fCurrency(totalSelectedGrandTotal) })
          ] })
        ] }) : totalSelectedSubtotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Total Cost" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: fCurrency(totalSelectedSubtotal) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { sx: { px: 3, py: 2, gap: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, color: "inherit", disabled: isConfirming, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flexGrow: 1 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          color: "success",
          onClick: handleConfirm,
          disabled: isConfirming || selectedItems.size === 0,
          startIcon: isConfirming ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold" }),
          children: isConfirming ? "Confirming…" : `Confirm ${selectedItems.size} Item${selectedItems.size === 1 ? "" : "s"}`
        }
      )
    ] })
  ] });
}
function ProductStockReceiptViewDialog({ open, onClose, receipt }) {
  const [downloading, setDownloading] = reactExports.useState(false);
  const { catalog: products } = useGetProductCatalog();
  const { branches } = useUserBranches();
  const handleDownloadPdf = async () => {
    try {
      setDownloading(true);
      const values = {
        location_type: receipt.branch ? "branch" : "warehouse",
        branch_id: receipt.branch?.id,
        supplier: receipt.supplier_ref?.name,
        reference_number: receipt.reference_number,
        notes: receipt.notes,
        items: receipt.items?.map((item) => ({
          product_id: item.product_id,
          product: item.product,
          quantity: item.quantity,
          gift_quantity: item.gift_quantity || 0,
          unit_cost: item.unit_cost,
          discount_percent: item.discount_percent,
          tax_percent: item.tax_percent,
          sale_price: item.sale_price,
          profit_percent: item.profit_percent,
          price_updated: item.price_updated,
          batch_number: item.batch_number,
          expiry_date: item.expiry_date,
          notes: item.notes
        })) || []
      };
      const blob = await pdf(
        /* @__PURE__ */ jsxRuntimeExports.jsx(StockReceiptPdfDocument, { values, branches, products })
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `stock-receipt-${receipt.receipt_number || "draft"}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Failed to generate PDF");
      console.error(error);
    } finally {
      setDownloading(false);
    }
  };
  if (!receipt) return null;
  const hasPricing = receipt.items?.some(
    (item) => Number(item.discount_percent || 0) > 0 || Number(item.tax_percent || 0) > 0
  ) ?? false;
  const subtotal = receipt.items?.reduce((sum, item) => sum + (item.quantity || 0) * (item.unit_cost || 0), 0) ?? 0;
  const totalDiscountSaved = hasPricing ? receipt.items?.reduce((sum, item) => {
    const base = (item.quantity || 0) * (item.unit_cost || 0);
    return sum + base * (Number(item.discount_percent || 0) / 100);
  }, 0) ?? 0 : 0;
  const totalTax = hasPricing ? receipt.items?.reduce((sum, item) => {
    const base = (item.quantity || 0) * (item.unit_cost || 0);
    const afterDiscount = base * (1 - Number(item.discount_percent || 0) / 100);
    return sum + afterDiscount * (Number(item.tax_percent || 0) / 100);
  }, 0) ?? 0 : 0;
  const grandTotal = subtotal - totalDiscountSaved + totalTax;
  const totalUnits = receipt.items?.reduce((sum, item) => sum + (item.quantity || 0), 0) ?? 0;
  const getProductName = (item) => item.product?.name || products?.find((p) => p.id === item.product_id)?.name || item.product_id || "—";
  const statusColor = receipt.status === "confirmed" ? "success" : receipt.status === "draft" ? "warning" : "error";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: receipt.receipt_number }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: statusColor, children: receipt.status }),
          receipt.received_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", children: [
            "Received ",
            fDate(receipt.received_at)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Iconify,
        {
          icon: "solar:close-circle-bold",
          width: 24,
          onClick: onClose,
          sx: { cursor: "pointer", color: "text.disabled", "&:hover": { color: "text.primary" } }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { sx: { pt: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" },
            gap: 2.5,
            mb: 3
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", textTransform: "uppercase", children: "Supplier" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: receipt.supplier_ref?.name || "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", textTransform: "uppercase", children: "Reference" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: receipt.reference_number || "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", textTransform: "uppercase", children: "Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: renderLocationNameWithIcon(receipt.branch) })
            ] }),
            receipt.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, sx: { gridColumn: { sm: "1 / -1" } }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", textTransform: "uppercase", children: "Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: receipt.notes })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableContainer,
        {
          sx: { border: (theme) => `1px solid ${theme.vars.palette.divider}`, borderRadius: 1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Qty" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Gift Qty" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Unit Cost" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Sale Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Profit %" }),
              hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Disc %" }),
              hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Tax %" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Batch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Expiry" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: receipt.items?.map((item, index) => {
              const baseLineCost = (item.quantity || 0) * (item.unit_cost || 0);
              const afterDiscount = baseLineCost * (1 - Number(item.discount_percent || 0) / 100);
              const finalLineCost = afterDiscount * (1 + Number(item.tax_percent || 0) / 100);
              const priceChanged = !!item.price_updated;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: index + 1 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: getProductName(item) }),
                  priceChanged && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: "Price updated",
                      size: "small",
                      color: "info",
                      variant: "soft",
                      sx: { height: 20 }
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", label: item.quantity, variant: "outlined", color: "info" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: item.gift_quantity > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    size: "small",
                    label: `+${item.gift_quantity}`,
                    variant: "soft",
                    color: "success"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(item.unit_cost) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: item.sale_price != null ? fCurrency(item.sale_price) : "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: item.profit_percent != null ? `${item.profit_percent}%` : "—" }) }),
                hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: Number(item.discount_percent) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    size: "small",
                    label: `${item.discount_percent}%`,
                    variant: "soft",
                    color: "error"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" }) }),
                hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: Number(item.tax_percent) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    size: "small",
                    label: `${item.tax_percent}%`,
                    variant: "soft",
                    color: "warning"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: fCurrency(hasPricing ? finalLineCost : baseLineCost) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: item.batch_number || "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: item.expiry_date ? fDate(item.expiry_date) : "—" }) })
              ] }, index);
            }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          justifyContent: "flex-end",
          spacing: 4,
          sx: {
            mt: 2,
            px: 2,
            py: 1.5,
            borderRadius: 1,
            bgcolor: "background.neutral"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, alignItems: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Total Units" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: totalUnits })
            ] }),
            hasPricing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              subtotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, alignItems: "flex-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(subtotal) })
              ] }),
              totalDiscountSaved > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, alignItems: "flex-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Discount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", color: "error.main", children: [
                  "-",
                  fCurrency(totalDiscountSaved)
                ] })
              ] }),
              totalTax > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, alignItems: "flex-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Tax" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", color: "warning.main", children: [
                  "+",
                  fCurrency(totalTax)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, alignItems: "flex-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Grand Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", fontWeight: 700, children: fCurrency(grandTotal) })
              ] })
            ] }) : subtotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, alignItems: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Total Value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(subtotal) })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          startIcon: downloading ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:cloud-download-fill" }),
          onClick: handleDownloadPdf,
          loading: downloading,
          children: "Download PDF"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, variant: "outlined", color: "inherit", children: "Close" })
    ] })
  ] });
}
function ProductStockOrdersView() {
  const confirmDialog = Ee();
  const createDialog = Ee();
  const toolbarOptions = useToolbarSettings();
  const [paginationModel, setPaginationModel] = reactExports.useState({
    page: 0,
    pageSize: 25
  });
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedStatus, setSelectedStatus] = reactExports.useState("all");
  const [sortModel, setSortModel] = reactExports.useState([{ field: "created_at", sort: "desc" }]);
  const [selectedRows, setSelectedRows] = reactExports.useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = reactExports.useState(HIDE_COLUMNS);
  const { branches } = useUserBranches();
  const { catalog: products } = useGetProductCatalog();
  const [selectedBranch, setSelectedBranch] = reactExports.useState(null);
  const [selectedSupplier, setSelectedSupplier] = reactExports.useState(null);
  const { suppliers } = useGetSuppliers({ pageSize: 200 });
  const [editingReceipt, setEditingReceipt] = reactExports.useState(null);
  const [confirmingReceipt, setConfirmingReceipt] = reactExports.useState(null);
  const [viewingReceipt, setViewingReceipt] = reactExports.useState(null);
  const filters = reactExports.useMemo(() => {
    const result = {};
    if (selectedStatus !== "all") result.status = selectedStatus;
    if (selectedBranch) result.branchId = selectedBranch;
    if (selectedSupplier) result.supplierId = selectedSupplier;
    return result;
  }, [selectedStatus, selectedBranch, selectedSupplier]);
  const { receipts, receiptsLoading, receiptsError, totalCount, receiptsEmpty } = useGetStockReceipts({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    filters,
    sort: sortModel
  });
  const filteredReceipts = reactExports.useMemo(() => {
    if (!receipts || !Array.isArray(receipts)) return [];
    const validReceipts = receipts.filter((receipt) => receipt && typeof receipt === "object");
    if (!searchQuery) return validReceipts;
    const lowerQuery = searchQuery.toLowerCase();
    return validReceipts.filter(
      (receipt) => receipt.receipt_number?.toLowerCase().includes(lowerQuery) || receipt.supplier_ref?.name?.toLowerCase().includes(lowerQuery) || receipt.reference_number?.toLowerCase().includes(lowerQuery)
    );
  }, [receipts, searchQuery]);
  const handleDeleteRow = reactExports.useCallback(
    async (id) => {
      try {
        await deleteStockReceipt(id);
        toast.success("Stock receipt deleted successfully");
        confirmDialog.onFalse();
      } catch (error) {
        toast.error("Failed to delete stock receipt");
        console.error(error);
      }
    },
    [confirmDialog]
  );
  const handleConfirmRow = reactExports.useCallback(
    (id) => {
      const receipt = receipts.find((r2) => r2.id === id);
      setConfirmingReceipt(receipt);
    },
    [receipts]
  );
  const handleEditRow = reactExports.useCallback(
    (id) => {
      const receipt = receipts.find((r2) => r2.id === id);
      setEditingReceipt(receipt);
      createDialog.onTrue();
    },
    [receipts, createDialog]
  );
  const handleDownloadPdf = reactExports.useCallback(
    async (receipt) => {
      try {
        const values = {
          location_type: receipt.branch ? "branch" : "warehouse",
          branch_id: receipt.branch?.id,
          supplier: receipt.supplier_ref?.name,
          reference_number: receipt.reference_number,
          notes: receipt.notes,
          items: receipt.items?.map((item) => ({
            product_id: item.product_id,
            product: item.product,
            quantity: item.quantity,
            gift_quantity: item.gift_quantity || 0,
            unit_cost: item.unit_cost,
            discount_percent: item.discount_percent,
            tax_percent: item.tax_percent,
            sale_price: item.sale_price,
            profit_percent: item.profit_percent,
            price_updated: item.price_updated,
            batch_number: item.batch_number,
            expiry_date: item.expiry_date,
            notes: item.notes
          })) || []
        };
        const blob = await pdf(
          /* @__PURE__ */ jsxRuntimeExports.jsx(StockReceiptPdfDocument, { values, branches, products })
        ).toBlob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `stock-receipt-${receipt.receipt_number || "draft"}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        toast.error("Failed to generate PDF");
        console.error(error);
      }
    },
    [branches, products]
  );
  const columns = useStockOrdersColumns({
    receipts,
    confirmDialog,
    setSelectedRows,
    setViewingReceipt,
    handleConfirmRow,
    handleEditRow,
    handleDownloadPdf,
    density: toolbarOptions.settings.density
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomBreadcrumbs,
        {
          heading: "Stock Orders",
          links: [
            { name: "Dashboard", href: paths.dashboard.root },
            { name: "Inventory", href: paths.dashboard.inventory.root },
            { name: "Stock Orders" }
          ],
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: createDialog.onTrue,
              children: "New Order"
            }
          ),
          sx: { mb: { xs: 3, md: 5 } }
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
              ...toolbarOptions.settings,
              rows: filteredReceipts,
              columns,
              loading: receiptsLoading,
              getRowId: (row) => row?.id,
              paginationMode: "server",
              sortingMode: "server",
              rowCount: totalCount || 0,
              pageSizeOptions: [5, 10, 25, 50],
              paginationModel,
              onPaginationModelChange: setPaginationModel,
              sortModel,
              onSortModelChange: setSortModel,
              columnVisibilityModel,
              onColumnVisibilityModelChange: setColumnVisibilityModel,
              checkboxSelection: true,
              disableRowSelectionOnClick: true,
              onRowSelectionModelChange: (newSelectionModel) => {
                setSelectedRows(Array.from(newSelectionModel.ids));
              },
              slotProps: {
                toolbar: {
                  searchQuery,
                  onSearchQueryChange: setSearchQuery,
                  selectedStatus,
                  onSelectedStatusChange: setSelectedStatus,
                  selectedBranch,
                  onSelectedBranchChange: setSelectedBranch,
                  selectedSupplier,
                  onSelectedSupplierChange: setSelectedSupplier,
                  suppliers,
                  branches,
                  columnVisibilityModel,
                  onColumnVisibilityModelChange: setColumnVisibilityModel,
                  columns,
                  toolbarOptions,
                  togglableColumns: HIDE_COLUMNS_TOGGLABLE,
                  filteredReceipts
                }
              },
              slots: {
                toolbar: StockOrdersToolbar,
                noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EmptyContent,
                  {
                    title: "No stock orders found",
                    description: "Try adjusting your search or filter to find what you're looking for."
                  }
                ),
                noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EmptyContent,
                  {
                    title: "No stock orders found",
                    description: "Create your first stock order to get started"
                  }
                )
              },
              sx: {
                [`& .${gridClasses.cell}`]: {
                  alignItems: "center",
                  py: 1.25
                },
                [`& .${gridClasses.row}`]: {
                  bgcolor: (theme) => theme.vars.palette.background.paper
                }
              }
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductStockReceiptViewDialog,
      {
        open: !!viewingReceipt,
        receipt: viewingReceipt,
        onClose: () => setViewingReceipt(null)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductStockReceiptDialog,
      {
        open: createDialog.value,
        branches,
        onClose: () => {
          createDialog.onFalse();
          setEditingReceipt(null);
        },
        receipt: editingReceipt
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: confirmDialog.onFalse,
        title: "Delete Stock Receipt",
        content: "Are you sure you want to delete this stock receipt? This action cannot be undone.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: () => handleDeleteRow(selectedRows[0]),
            children: "Delete"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductStockConfirmDialog,
      {
        open: !!confirmingReceipt,
        receipt: confirmingReceipt,
        onClose: () => setConfirmingReceipt(null),
        onSuccess: () => {
          setConfirmingReceipt(null);
        }
      }
    )
  ] });
}
const metadata = { title: `Stock Orders | Inventory - ${CONFIG.appName}` };
function ProductStockOrdersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductStockOrdersView, {})
  ] });
}
export {
  ProductStockOrdersPage as default
};
