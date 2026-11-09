import { r as reactExports, j as jsxRuntimeExports, S as Stack, Y as Link, Z as RouterLink, a3 as paths, c as Typography, a2 as Chip, T as Tooltip, L as Label, a as Iconify, d as Button, E as Ee, t as toast, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, bq as gridClasses, C as CONFIG } from "./index-B08HRm4A.js";
import { b as useGetSuppliers, g as deleteSupplier, h as deleteMultipleSuppliers, t as toggleSupplierStatus } from "./supplier-service-CvoEEgb8.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, C as CustomToolbarQuickFilter, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { C as CustomGridActionsCellItem } from "./grid-actions-cell-item-GDL6dx4W.js";
import { S as SupplierCreateEditDialog } from "./supplier-create-edit-dialog-Cwzvdm1H.js";
import { D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import "./Dialog-C5RfKkDi.js";
import "./DialogTitle-B3pdxJpB.js";
import "./ExportPrint-CAqo1wR3.js";
import "./TextField-CIuP940C.js";
import "./InputAdornment-BqZyQBIE.js";
import "./form-provider-u_wAFv-h.js";
import "./index-C4JOln-R.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./with-selector-ClfCuV5M.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./schema-utils-CG9_JlGr.js";
import "./schemas-BVeYYbTr.js";
import "./toPropertyKey-BRoQIA86.js";
import "./Skeleton-BC-WlQQE.js";
import "./TablePagination-BOFMLJYr.js";
import "./TableCell-B_5fJIbm.js";
import "./ToggleButton-D4MfeHtt.js";
function useSupplierColumns({ handleEdit, handleDeleteRequest, handleToggleStatus }) {
  return reactExports.useMemo(
    () => [
      {
        field: "name",
        headerName: "Supplier Name",
        flex: 1,
        minWidth: 180,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              component: RouterLink,
              href: paths.dashboard.products.supplierDetails(params.row.id),
              variant: "body2",
              fontWeight: 600,
              noWrap: true,
              children: params.value
            }
          ),
          params.row.contact_name && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: params.row.contact_name })
        ] })
      },
      {
        field: "email",
        headerName: "Email",
        width: 200,
        renderCell: (params) => params.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", noWrap: true, children: params.value }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" })
      },
      {
        field: "phone",
        headerName: "Phone",
        width: 150,
        renderCell: (params) => params.value || /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" })
      },
      {
        field: "payment_terms",
        headerName: "Payment Terms",
        width: 140,
        renderCell: (params) => params.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", label: params.value, variant: "soft", color: "info" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" })
      },
      {
        field: "currency",
        headerName: "Currency",
        width: 90
      },
      {
        field: "city",
        headerName: "City",
        width: 120
      },
      {
        field: "country",
        headerName: "Country",
        width: 120
      },
      {
        field: "website",
        headerName: "Website",
        width: 180,
        renderCell: (params) => params.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            component: "a",
            href: params.value.startsWith("http") ? params.value : `https://${params.value}`,
            target: "_blank",
            rel: "noopener noreferrer",
            variant: "body2",
            color: "primary",
            noWrap: true,
            children: params.value
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" })
      },
      {
        field: "tax_number",
        headerName: "Tax / VAT No.",
        width: 140
      },
      {
        field: "notes",
        headerName: "Notes",
        flex: 1,
        minWidth: 180,
        renderCell: (params) => params.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: params.value, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", noWrap: true, sx: { maxWidth: 160 }, children: params.value }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" })
      },
      {
        field: "is_active",
        headerName: "Status",
        width: 100,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: params.value ? "success" : "default", children: params.value ? "Active" : "Inactive" })
      },
      {
        field: "actions",
        type: "actions",
        headerName: "",
        width: 90,
        getActions: (params) => [
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
          //   <CustomGridActionsCellItem
          //     key="toggle"
          //     icon={
          //       <Iconify icon={params.row.is_active ? 'solar:eye-closed-bold' : 'solar:eye-bold'} />
          //     }
          //     label={params.row.is_active ? 'Deactivate' : 'Activate'}
          //     onClick={() => handleToggleStatus(params.row)}
          //   />,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
              label: "Delete",
              onClick: () => handleDeleteRequest(params.row.id),
              showInMenu: true
            },
            "delete"
          )
        ]
      }
    ],
    [handleEdit, handleDeleteRequest]
  );
}
const HIDE_COLUMNS = {
  city: false,
  country: false,
  website: false,
  tax_number: false,
  currency: false,
  notes: false
};
const HIDE_COLUMNS_TOGGLABLE = [
  "city",
  "country",
  "website",
  "tax_number",
  "currency",
  "notes",
  "actions"
];
function SupplierTableToolbar({
  selectedRows,
  onDeleteSelected,
  toolbarOptions
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { sx: { py: 2, px: { xs: 2, md: 3 } }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarLeftPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarQuickFilter, { size: "small", placeholder: "Search suppliers..." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      selectedRows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "small",
          color: "error",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
          onClick: () => onDeleteSelected(selectedRows),
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
          ...toolbarOptions.columns,
          hiddenColumns: HIDE_COLUMNS_TOGGLABLE
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, { ...toolbarOptions.filters }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, {}),
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
function SupplierListView() {
  const confirmDialog = Ee();
  const formDialog = Ee();
  const toolbarOptions = useToolbarSettings();
  const [selectedRows, setSelectedRows] = reactExports.useState([]);
  const [editingSupplier, setEditingSupplier] = reactExports.useState(null);
  const [columnVisibilityModel, setColumnVisibilityModel] = reactExports.useState(HIDE_COLUMNS);
  const [paginationModel, setPaginationModel] = reactExports.useState({ page: 0, pageSize: 5 });
  const [sortModel, setSortModel] = reactExports.useState([]);
  const [filterModel, setFilterModel] = reactExports.useState({ items: [], quickFilterValues: [] });
  const { suppliers, suppliersLoading, suppliersRowCount } = useGetSuppliers({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sortModel,
    filterModel
  });
  const handleCreate = reactExports.useCallback(() => {
    setEditingSupplier(null);
    formDialog.onTrue();
  }, [formDialog]);
  const handleEdit = reactExports.useCallback(
    (row) => {
      setEditingSupplier(row);
      formDialog.onTrue();
    },
    [formDialog]
  );
  const handleDeleteRequest = reactExports.useCallback(
    (rows) => {
      setSelectedRows(Array.isArray(rows) ? rows : [rows]);
      confirmDialog.onTrue();
    },
    [confirmDialog]
  );
  const handleDeleteConfirm = reactExports.useCallback(async () => {
    try {
      if (selectedRows.length === 1) {
        await deleteSupplier(selectedRows[0]);
        toast.success("Supplier deleted");
      } else {
        await deleteMultipleSuppliers(selectedRows);
        toast.success(`${selectedRows.length} suppliers deleted`);
      }
      setSelectedRows([]);
      confirmDialog.onFalse();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete supplier(s)");
    }
  }, [selectedRows, confirmDialog]);
  const handleToggleStatus = reactExports.useCallback(async (row) => {
    try {
      await toggleSupplierStatus(row.id, !row.is_active);
      toast.success(`Supplier marked as ${!row.is_active ? "active" : "inactive"}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update supplier status");
    }
  }, []);
  const columns = useSupplierColumns({ handleEdit, handleDeleteRequest, handleToggleStatus });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Suppliers",
        links: [
          { name: "Dashboard", href: "/dashboard" },
          { name: "Inventory", href: "/dashboard/inventory" },
          { name: "Suppliers" }
        ],
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
            onClick: handleCreate,
            children: "New Supplier"
          }
        ),
        sx: { mb: { xs: 3, md: 5 } }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        sx: {
          flexGrow: { md: 1 },
          display: { md: "flex" },
          flexDirection: { md: "column" },
          overflow: "hidden"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DataGrid,
          {
            ...toolbarOptions.settings,
            checkboxSelection: true,
            disableRowSelectionOnClick: true,
            rows: suppliers,
            columns,
            loading: suppliersLoading,
            paginationMode: "server",
            filterMode: "server",
            sortingMode: "server",
            rowCount: suppliersRowCount,
            paginationModel,
            onPaginationModelChange: setPaginationModel,
            sortModel,
            onSortModelChange: setSortModel,
            filterModel,
            onFilterModelChange: setFilterModel,
            filterDebounceMs: 400,
            pageSizeOptions: [5, 10, 25, 50],
            columnVisibilityModel,
            onColumnVisibilityModelChange: setColumnVisibilityModel,
            onRowSelectionModelChange: (newSelectionModel) => {
              setSelectedRows(Array.from(newSelectionModel.ids));
            },
            slotProps: {
              toolbar: {
                selectedRows,
                onDeleteSelected: handleDeleteRequest,
                toolbarOptions
              }
            },
            slots: {
              toolbar: SupplierTableToolbar,
              noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No suppliers found" })
            },
            sx: {
              [`& .${gridClasses.cell}`]: { alignItems: "center", display: "inline-flex" }
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SupplierCreateEditDialog,
      {
        open: formDialog.value,
        onClose: formDialog.onFalse,
        supplier: editingSupplier,
        onSuccess: () => {
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: confirmDialog.onFalse,
        title: "Delete",
        content: selectedRows.length === 1 ? "Are you sure you want to delete this supplier?" : `Are you sure you want to delete ${selectedRows.length} suppliers?`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleDeleteConfirm, children: "Delete" })
      }
    )
  ] });
}
const metadata = { title: `Suppliers | Dashboard - ${CONFIG.appName}` };
function SuppliersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SupplierListView, {})
  ] });
}
export {
  SuppliersPage as default
};
