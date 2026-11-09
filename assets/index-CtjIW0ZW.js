import { r as reactExports, j as jsxRuntimeExports, bm as ListItemText, Y as Link, Z as RouterLink, a3 as paths, L as Label, a2 as Chip, a as Iconify, x as Select, M as MenuItem, d as Button, E as Ee, bp as ze, a6 as useUserBranches, t as toast, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, bq as gridClasses, c as Typography, ax as Alert, C as CONFIG } from "./index-B08HRm4A.js";
import { D as DEFAULT_DATAGRID_ROWS } from "./default_rows-Cuuw8tod.js";
import { S as SERVICE_CATEGORIES, b as SERVICE_GROUPS, h as useGetServices, i as deleteService } from "./services-UhlA7T7c.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, C as CustomToolbarQuickFilter, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { C as CustomGridActionsCellItem } from "./grid-actions-cell-item-GDL6dx4W.js";
import { F as FormControl } from "./TextField-CIuP940C.js";
import { T as Toolbar, D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import { S as ServiceCreateEditDialog, a as ServiceBranchConfigDialog } from "./service-branch-config-dialog-DiYUNkKK.js";
import "./Dialog-C5RfKkDi.js";
import "./DialogTitle-B3pdxJpB.js";
import "./ExportPrint-CAqo1wR3.js";
import "./InputAdornment-BqZyQBIE.js";
import "./index-Di_Bgabu.js";
import "./toPropertyKey-BRoQIA86.js";
import "./with-selector-ClfCuV5M.js";
import "./Skeleton-BC-WlQQE.js";
import "./Autocomplete-BReuRGf-.js";
import "./TablePagination-BOFMLJYr.js";
import "./TableCell-B_5fJIbm.js";
import "./ToggleButton-D4MfeHtt.js";
import "./Checkbox-Br8xlIAK.js";
import "./form-provider-u_wAFv-h.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./measured-service.constants-DhXw6UJq.js";
import "./Grid-D21oDAlg.js";
import "./LoadingButton-DJQpPOpu.js";
import "./schemas-BVeYYbTr.js";
import "./coerce-5-WTXoHr.js";
function useServiceColumns({ onDeleteRow, onEditRow, onConfigureBranches, density }) {
  const columns = reactExports.useMemo(
    () => [
      {
        field: "service_name",
        headerName: "Service Name",
        flex: 1,
        minWidth: 200,
        hideable: false,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ListItemText,
          {
            primary: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                component: RouterLink,
                href: paths.dashboard.services.details(params.row.id),
                color: "inherit",
                sx: { cursor: "pointer" },
                children: params.row.service_name || "Unnamed Service"
              }
            ),
            secondary: density !== "compact" && params.row.description,
            slotProps: {
              primary: {
                component: "span",
                typography: "body2",
                noWrap: true,
                sx: { fontWeight: "bold" }
              },
              secondary: {
                component: "span",
                color: "text.secondary",
                noWrap: true,
                sx: { display: density === "compact" ? "none" : "block" }
              }
            }
          }
        )
      },
      {
        field: "category",
        headerName: "Category",
        width: 140,
        type: "singleSelect",
        valueOptions: SERVICE_CATEGORIES.map((c) => ({ value: c.value, label: c.label })),
        renderCell: (params) => {
          const category = SERVICE_CATEGORIES.find((c) => c.value === params.row.category);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "default", children: category?.label || params.row.category });
        }
      },
      {
        field: "service_group",
        headerName: "Service Group",
        width: 140,
        type: "singleSelect",
        valueOptions: SERVICE_GROUPS.map((c) => ({ value: c.value, label: c.label })),
        renderCell: (params) => {
          const group = SERVICE_GROUPS.find((g) => g.value === params.row.service_group);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "secondary", children: group?.label || params.row.service_group || "N/A" });
        }
      },
      {
        field: "duration_minutes",
        headerName: "Duration",
        width: 120,
        renderCell: (params) => `${params.row.duration_minutes} min`
      },
      {
        field: "junior_price",
        headerName: "Junior",
        width: 110,
        align: "right",
        headerAlign: "right",
        type: "number",
        valueGetter: (value, row) => row.junior_price,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            size: "small",
            label: `$${params.row.junior_price?.toFixed(2) || "0.00"}`,
            color: "info",
            variant: "soft"
          }
        )
      },
      {
        field: "senior_price",
        headerName: "Senior",
        width: 110,
        align: "right",
        headerAlign: "right",
        type: "number",
        valueGetter: (value, row) => row.senior_price,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            size: "small",
            label: `$${params.row.senior_price?.toFixed(2) || "0.00"}`,
            color: "warning",
            variant: "soft"
          }
        )
      },
      {
        field: "prive_price",
        headerName: "Prive",
        width: 110,
        align: "right",
        headerAlign: "right",
        valueGetter: (value, row) => row.prive_price,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            size: "small",
            label: `$${params.row.prive_price?.toFixed(2) || "0.00"}`,
            color: "success",
            variant: "soft"
          }
        )
      },
      {
        type: "actions",
        field: "actions",
        headerName: " ",
        align: "right",
        headerAlign: "right",
        width: 80,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        getActions: (params) => [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              showInMenu: true,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:settings-bold" }),
              label: "Branch Config",
              onClick: () => onConfigureBranches(params.row)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              showInMenu: true,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              label: "Edit",
              onClick: () => onEditRow(params.row)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              showInMenu: true,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
              label: "Delete",
              onClick: () => onDeleteRow(params.row.id),
              sx: { color: "error.main" }
            }
          )
        ]
      }
    ],
    [onDeleteRow, onEditRow, onConfigureBranches, density]
  );
  return columns;
}
function ServiceTableToolbar({
  filters,
  branches,
  selectedRowCount,
  onOpenConfirmDeleteRows,
  toolbarOptions
}) {
  const { state, setState } = filters;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarLeftPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarQuickFilter, { size: "small" }),
      branches.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { sx: { minWidth: 150, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          size: "small",
          value: state.branch || "",
          onChange: (e) => setState({ branch: e.target.value || null }),
          displayEmpty: true,
          children: branches.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: branch.id, children: branch.name }, branch.id))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { sx: { minWidth: 180, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          size: "small",
          value: state.serviceGroup,
          onChange: (e) => setState({ serviceGroup: e.target.value }),
          displayEmpty: true,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "All Service Groups" }),
            SERVICE_GROUPS.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: group.value, children: group.label }, group.value))
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      !!selectedRowCount && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "small",
          color: "error",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
          onClick: onOpenConfirmDeleteRows,
          children: [
            "Delete (",
            selectedRowCount,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarColumnsButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomToolbarSettingsButton,
        {
          settings: toolbarOptions.settings,
          onChangeSettings: toolbarOptions.onChangeSettings
        }
      )
    ] })
  ] }) });
}
const HIDE_COLUMNS = { description: false, duration_minutes: false };
const FIELD_TO_COLUMN_MAP = {
  service_name: "service_name",
  category: "category",
  service_group: "service_group",
  duration_minutes: "duration_minutes",
  display_order: "display_order",
  junior_price: "junior_price",
  senior_price: "senior_price",
  prive_price: "prive_price"
};
const NoServicesOverlay = ({ branchName }) => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: branchName ? `No services at ${branchName}` : "No Services" });
const NoResultsOverlay = () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found" });
const HIDE_COLUMNS_TOGGLABLE = [
  "description",
  "duration_minutes",
  "service_group",
  "created_at",
  "actions"
];
function ServiceListView() {
  const confirmDialog = Ee();
  const createDialog = Ee();
  const toolbarOptions = useToolbarSettings();
  const [paginationModel, setPaginationModel] = reactExports.useState({
    page: 0,
    pageSize: 25
  });
  const [sortModel, setSortModel] = reactExports.useState([{ field: "service_name", sort: "asc" }]);
  const [selectedRows, setSelectedRows] = reactExports.useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = reactExports.useState(HIDE_COLUMNS);
  const filters = ze({
    branch: null,
    category: "all",
    serviceGroup: "all",
    searchTerm: ""
  });
  const { branchesOnly: branches, primaryBranch } = useUserBranches();
  const selectedBranch = reactExports.useMemo(
    () => branches.find((b) => b.id === filters.state.branch) || null,
    [branches, filters.state.branch]
  );
  reactExports.useEffect(() => {
    if (!filters.state.branch && primaryBranch) {
      filters.setState({ branch: primaryBranch.id });
    }
  }, [primaryBranch]);
  const [editingService, setEditingService] = reactExports.useState(null);
  const [configuringService, setConfiguringService] = reactExports.useState(null);
  const canReset = reactExports.useMemo(
    () => !!filters.state.branch || filters.state.category !== "all" || filters.state.serviceGroup !== "all" || !!filters.state.searchTerm,
    [
      filters.state.branch,
      filters.state.category,
      filters.state.serviceGroup,
      filters.state.searchTerm
    ]
  );
  const handleResetFilters = reactExports.useCallback(() => {
    filters.resetState();
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, [filters]);
  const [filterItems, setFilterItems] = reactExports.useState([]);
  const filterModel = reactExports.useMemo(
    () => ({
      items: filterItems,
      quickFilterValues: filters.state.searchTerm ? [filters.state.searchTerm] : []
    }),
    [filterItems, filters.state.searchTerm]
  );
  const { services, servicesLoading, totalCount } = useGetServices({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    filters: {
      name: filters.state.searchTerm,
      category: filters.state.category !== "all" ? filters.state.category : void 0,
      serviceGroup: filters.state.serviceGroup !== "all" ? filters.state.serviceGroup : void 0,
      isActive: true,
      orderBy: sortModel[0]?.field ? FIELD_TO_COLUMN_MAP[sortModel[0].field] || sortModel[0].field : "display_order",
      order: sortModel[0]?.sort || "asc",
      filterItems
    },
    branchId: filters.state.branch || null
  });
  const handleFilterModelChange = reactExports.useCallback(
    (newFilterModel) => {
      const searchValue = newFilterModel?.quickFilterValues?.[0] || "";
      if (searchValue !== filters.state.searchTerm) {
        filters.setState({ searchTerm: searchValue });
        setPaginationModel((prev) => ({ ...prev, page: 0 }));
      }
      setFilterItems(newFilterModel?.items ?? []);
    },
    [filters]
  );
  const { branch, category, serviceGroup } = filters.state;
  reactExports.useEffect(() => {
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, [branch, category, serviceGroup]);
  const handleSortModelChange = reactExports.useCallback((newSortModel) => {
    setSortModel(newSortModel);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleDeleteRow = reactExports.useCallback(async (serviceId) => {
    try {
      await deleteService(serviceId);
      toast.success("Service deleted successfully!");
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Failed to delete service");
    }
  }, []);
  const handleDeleteRows = reactExports.useCallback(async () => {
    try {
      await deleteService(selectedRows);
      setSelectedRows([]);
      toast.success("Services deleted successfully!");
    } catch (error) {
      console.error("Error deleting services:", error);
      toast.error("Failed to delete services");
    }
  }, [selectedRows]);
  const handleEditRow = reactExports.useCallback(
    (service) => {
      const normalizedService = {
        ...service,
        name: service.service_name
        // Map service_name back to name for edit dialog
      };
      setEditingService(normalizedService);
      createDialog.onTrue();
    },
    [createDialog]
  );
  const handleCreateNew = reactExports.useCallback(() => {
    setEditingService(null);
    createDialog.onTrue();
  }, [createDialog]);
  const handleCloseDialog = reactExports.useCallback(() => {
    setEditingService(null);
    createDialog.onFalse();
  }, [createDialog]);
  const handleConfigureBranches = reactExports.useCallback((service) => {
    setConfiguringService(service);
  }, []);
  const handleCloseBranchConfig = reactExports.useCallback(() => {
    setConfiguringService(null);
  }, []);
  const columns = useServiceColumns({
    onDeleteRow: handleDeleteRow,
    onEditRow: handleEditRow,
    onConfigureBranches: handleConfigureBranches,
    density: toolbarOptions.settings.density
  });
  const getTogglableColumns = reactExports.useCallback(
    () => columns.filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field)).map((column) => column.field),
    [columns]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { sx: { flexGrow: 1, display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomBreadcrumbs,
        {
          heading: `Services${selectedBranch ? ` - ${selectedBranch.name}` : ""}`,
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: handleCreateNew,
              children: "New Service"
            }
          ),
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
              ...toolbarOptions.settings,
              checkboxSelection: true,
              disableRowSelectionOnClick: true,
              rows: services,
              columns,
              loading: servicesLoading,
              rowCount: totalCount,
              paginationMode: "server",
              sortingMode: "server",
              filterMode: "server",
              getRowId: (row) => row.id,
              paginationModel,
              onPaginationModelChange: setPaginationModel,
              onSortModelChange: handleSortModelChange,
              filterModel,
              onFilterModelChange: handleFilterModelChange,
              onRowSelectionModelChange: (newSelectionModel) => {
                setSelectedRows(Array.from(newSelectionModel.ids));
              },
              pageSizeOptions: DEFAULT_DATAGRID_ROWS,
              columnVisibilityModel,
              onColumnVisibilityModelChange: (newModel) => setColumnVisibilityModel(newModel),
              slots: {
                toolbar: ServiceTableToolbar,
                noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(NoServicesOverlay, { branchName: selectedBranch?.name }),
                noResultsOverlay: NoResultsOverlay
              },
              slotProps: {
                toolbar: {
                  filters,
                  canReset,
                  onResetFilters: handleResetFilters,
                  branches,
                  selectedRowCount: selectedRows.length,
                  onOpenConfirmDeleteRows: confirmDialog.onTrue,
                  toolbarOptions
                },
                columnsManagement: { getTogglableColumns }
              },
              sx: {
                [`& .${gridClasses.cell}`]: {
                  alignItems: "center",
                  display: "inline-flex"
                }
              }
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: confirmDialog.onFalse,
        title: "Delete",
        maxWidth: "sm",
        content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", gutterBottom: true, children: [
            "Are you sure you want to delete ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
              " ",
              selectedRows.length,
              " "
            ] }),
            " ",
            selectedRows.length === 1 ? "service" : "services",
            "?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "info", children: [
            "If you want to keep the service but remove it from the current branch, please go to the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: " Branch Config " }),
            "of the service and unselect the branch instead."
          ] })
        ] }),
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: () => {
              handleDeleteRows();
              confirmDialog.onFalse();
            },
            children: "Delete"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServiceCreateEditDialog,
      {
        open: createDialog.value,
        onClose: handleCloseDialog,
        service: editingService
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServiceBranchConfigDialog,
      {
        open: !!configuringService,
        onClose: handleCloseBranchConfig,
        service: configuringService
      }
    )
  ] });
}
const metadata = { title: `Services | Dashboard - ${CONFIG.appName}` };
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceListView, {})
  ] });
}
export {
  ServicesPage as default
};
