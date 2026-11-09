import { r as reactExports, j as jsxRuntimeExports, a2 as Chip, b$ as upperFirst, d as Button, a as Iconify, x as Select, M as MenuItem, U, S as Stack, al as Avatar, bm as ListItemText, Y as Link, Z as RouterLink, a3 as paths, T as Tooltip, L as Label, E as Ee, av as useAuthContext, bY as usePermissions, a6 as useUserBranches, bp as ze, t as toast, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, bq as gridClasses, C as CONFIG } from "./index-B08HRm4A.js";
import { u as useGetStaff, d as deleteStaff, a as deleteMultipleStaff } from "./staff-BA54BIrN.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, c as ToolbarRightPanel, C as CustomToolbarQuickFilter, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { c as canEditStaffProfile, A as AddStaffDialog, S as StaffEditForm } from "./add-staff-dialog-DqO2ChVh.js";
import { F as FiltersResult, a as FiltersBlock, c as chipProps } from "./filters-result-CQUV8kzX.js";
import { u as useGridApiContext } from "./ExportPrint-CAqo1wR3.js";
import { F as FormControl, I as InputLabel } from "./TextField-CIuP940C.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { T as Toolbar, D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import { A as AVATAR_SIZE } from "./avatar-size-DxlpMe7m.js";
import { C as CustomGridActionsCellItem } from "./grid-actions-cell-item-GDL6dx4W.js";
import "./staff-service-CYDKVOm2.js";
import "./Dialog-C5RfKkDi.js";
import "./DialogTitle-B3pdxJpB.js";
import "./InputAdornment-BqZyQBIE.js";
import "./index-Di_Bgabu.js";
import "./form-provider-u_wAFv-h.js";
import "./index-C4JOln-R.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./with-selector-ClfCuV5M.js";
import "./Autocomplete-BReuRGf-.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./schema-utils-CG9_JlGr.js";
import "./schemas-BVeYYbTr.js";
import "./stylist-color-picker-BOdxdsi0.js";
import "./Grid-D21oDAlg.js";
import "./AccordionDetails-O5tQthbm.js";
import "./LoadingButton-DJQpPOpu.js";
import "./user-service-BmyEAxOq.js";
import "./services-UhlA7T7c.js";
import "./toPropertyKey-BRoQIA86.js";
import "./Skeleton-BC-WlQQE.js";
import "./TablePagination-BOFMLJYr.js";
import "./TableCell-B_5fJIbm.js";
import "./ToggleButton-D4MfeHtt.js";
function StaffTableFiltersResult({ filters, totalResults, sx, options = {}, onReset }) {
  const { state: currentFilters, setState: updateFilters, resetState: resetFilters } = filters;
  const handleRemoveBranch = reactExports.useCallback(
    (inputValue) => {
      const newValue = currentFilters.branches.filter((item) => item !== inputValue);
      updateFilters({ branches: newValue });
    },
    [updateFilters, currentFilters.branches]
  );
  const handleRemoveRole = reactExports.useCallback(
    (inputValue) => {
      const newValue = currentFilters.roles.filter((item) => item !== inputValue);
      updateFilters({ roles: newValue });
    },
    [updateFilters, currentFilters.roles]
  );
  const getBranchLabel = reactExports.useCallback(
    (branchId) => {
      const branch = options.branches?.find((b) => b.value === branchId);
      return branch?.label || branchId;
    },
    [options.branches]
  );
  const handleReset = reactExports.useCallback(() => {
    resetFilters();
    onReset?.();
  }, [resetFilters, onReset]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FiltersResult, { totalResults, onReset: handleReset, sx, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersBlock, { label: "Branch:", isShow: !!currentFilters.branches.length, children: currentFilters.branches.map((item) => /* @__PURE__ */ reactExports.createElement(
      Chip,
      {
        ...chipProps,
        key: item,
        label: getBranchLabel(item),
        onDelete: () => handleRemoveBranch(item)
      }
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersBlock, { label: "Role:", isShow: !!currentFilters.roles.length, children: currentFilters.roles.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Chip,
      {
        ...chipProps,
        label: item && upperFirst(item),
        onDelete: () => handleRemoveRole(item)
      },
      item
    )) })
  ] });
}
function StaffTableToolbar({
  options,
  filters,
  primaryBranchId,
  canReset,
  filteredResults,
  selectedRowCount,
  onOpenConfirmDeleteRows,
  /********/
  settings,
  onChangeSettings
}) {
  const apiRef = useGridApiContext();
  const { state: currentFilters, setState: updateFilters } = filters;
  const [branches, setBranches] = reactExports.useState(currentFilters.branches || []);
  const [roles, setRoles] = reactExports.useState(currentFilters.roles || []);
  reactExports.useEffect(() => {
    setBranches(currentFilters.branches || []);
  }, [currentFilters.branches]);
  reactExports.useEffect(() => {
    setRoles(currentFilters.roles || []);
  }, [currentFilters.roles]);
  const handleSelect = reactExports.useCallback(
    (setter) => (event) => {
      const value = event.target.value;
      const parsedValue = typeof value === "string" ? value.split(",") : value;
      setter(parsedValue);
    },
    []
  );
  const renderLeftPanel = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarQuickFilter, { size: "small" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterSelect,
      {
        label: "Branch",
        value: branches.length > 0 ? branches : primaryBranchId ? [primaryBranchId] : [],
        options: options.branches,
        onChange: handleSelect(setBranches),
        onApply: (cleanedValue) => updateFilters({ branches: cleanedValue })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterSelect,
      {
        label: "Role",
        value: roles,
        options: options.roles,
        onChange: handleSelect(setRoles),
        onApply: (cleanedValue) => updateFilters({ roles: cleanedValue })
      }
    )
  ] });
  const renderRightPanel = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarSettingsButton, { settings, onChangeSettings })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarLeftPanel, { children: renderLeftPanel() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarRightPanel, { children: renderRightPanel() })
    ] }) }),
    canReset && /* @__PURE__ */ jsxRuntimeExports.jsx(
      StaffTableFiltersResult,
      {
        filters,
        totalResults: filteredResults,
        options,
        sx: { p: 2.5, pt: 0 },
        onReset: () => apiRef.current.setFilterModel({ items: [] })
      }
    )
  ] });
}
function FilterSelect({ label, value, options, onChange, onApply }) {
  const id = `filter-${label.toLowerCase()}-select`;
  const handleApply = reactExports.useCallback(() => {
    const cleanedValue = value.filter((v) => v !== void 0 && v !== null && v !== "");
    onApply(cleanedValue);
  }, [value, onApply]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", sx: { flexShrink: 0, width: { xs: 1, md: 200 } }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: id, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        multiple: true,
        label,
        value,
        onChange,
        onClose: () => {
          const cleanedValue = value.filter((v) => v !== void 0 && v !== null && v !== "");
          onApply(cleanedValue);
        },
        renderValue: (selected) => {
          const cleanedSelected = selected.filter((v) => v !== void 0 && v !== null && v !== "");
          const output = options.filter((opt) => cleanedSelected.includes(opt.value)).map((opt) => opt.label);
          return output.join(", ");
        },
        inputProps: { id },
        children: [
          options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: option.value, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                disableRipple: true,
                size: "small",
                checked: value.includes(option.value),
                slotProps: { input: { id: `${option.value}-checkbox` } }
              }
            ),
            option.label
          ] }, option.value)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MenuItem,
            {
              onClick: handleApply,
              sx: (theme) => ({
                justifyContent: "center",
                fontWeight: theme.typography.button,
                bgcolor: U(theme.vars.palette.grey["500Channel"], 0.08),
                border: `solid 1px ${U(theme.vars.palette.grey["500Channel"], 0.16)}`
              }),
              children: "Apply"
            }
          )
        ]
      }
    )
  ] });
}
const STAFF_ROLE_OPTIONS = [
  { value: "manager", label: "Manager" },
  { value: "stylist", label: "Stylist" },
  { value: "stock", label: "Stock Manager" },
  { value: "receptionist", label: "Receptionist" },
  { value: "staff", label: "Staff" }
];
const useStaffColumns = ({ onDeleteRow, onEditRow, currentUser, density = "standard" }) => {
  const avatarSize = AVATAR_SIZE[density] ?? 36;
  const columns = reactExports.useMemo(
    () => [
      {
        field: "display_name",
        headerName: "Name",
        flex: 1,
        minWidth: 280,
        hideable: false,
        renderCell: (params) => {
          const displayName = params.row.display_name;
          const roles = Array.isArray(params.row.roles) ? params.row.roles : [params.row.roles].filter(Boolean);
          const isStylist = roles.includes("stylist");
          const missingLevel = !params.row.stylist_level;
          const missingServices = (params.row.service_count ?? 0) === 0;
          const showWarning = isStylist && (missingLevel || missingServices);
          const warningParts = [];
          if (missingLevel) warningParts.push("no stylist level assigned");
          if (missingServices) warningParts.push("no services assigned");
          const warningText = `Missing: ${warningParts.join(" and ")}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", sx: { py: 2, width: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Avatar,
              {
                alt: displayName,
                src: params.row.avatar_url,
                sx: { mr: 2, width: avatarSize, height: avatarSize, fontSize: avatarSize * 0.45 },
                children: [
                  params.row.first_name?.charAt(0),
                  params.row.last_name?.charAt(0)
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ListItemText,
              {
                disableTypography: true,
                primary: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      component: RouterLink,
                      href: paths.dashboard.staff.profile(params.row.id),
                      color: "inherit",
                      sx: {
                        fontWeight: 600,
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" }
                      },
                      children: displayName
                    }
                  ),
                  showWarning && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: warningText, arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:danger-triangle-bold",
                      width: 16,
                      sx: { color: "warning.main", flexShrink: 0 }
                    }
                  ) }) })
                ] }),
                sx: { display: "flex", flexDirection: "column" }
              }
            )
          ] });
        }
      },
      {
        field: "email",
        headerName: "Email",
        width: 200,
        flex: 1,
        renderCell: (params) => params?.row?.email || "-"
      },
      {
        field: "phone",
        headerName: "Phone Number",
        width: 160,
        flex: 0.5,
        renderCell: (params) => params.row.phone || "-"
      },
      {
        field: "role",
        headerName: "Roles",
        width: 200,
        align: "center",
        type: "singleSelect",
        valueOptions: STAFF_ROLE_OPTIONS.map((option) => ({
          value: option.value,
          label: option.label
        })),
        headerAlign: "center",
        renderCell: (params) => {
          const roleConfig = {
            manager: { label: "Manager", color: "primary" },
            stylist: { label: "Stylist", color: "info" },
            cashier: { label: "Cashier", color: "secondary" },
            admin: { label: "Admin", color: "error" },
            stock: { label: "Stock Manager", color: "warning" },
            receptionist: { label: "Receptionist", color: "success" },
            staff: { label: "Staff", color: "default" }
          };
          const roles = Array.isArray(params.row.roles) ? params.row.roles : [params.row.roles].filter(Boolean);
          if (roles.length === 0) {
            return "-";
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", justifyContent: "center", children: roles.map((roleValue) => {
            const config = roleConfig[roleValue] || {
              label: roleValue,
              color: "default"
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: config.color, children: config.label }, roleValue);
          }) });
        }
      },
      {
        field: "stylist_level",
        headerName: "Stylist Level",
        width: 140,
        align: "center",
        type: "singleSelect",
        valueOptions: ["junior", "senior", "prive"],
        headerAlign: "center",
        renderCell: (params) => {
          const roles = Array.isArray(params.row.roles) ? params.row.roles : [params.row.roles].filter(Boolean);
          const isStylist = roles.includes("stylist");
          if (!isStylist || !params.row.stylist_level) {
            return "-";
          }
          const levelConfig = {
            junior: { label: "Junior", color: "default" },
            senior: { label: "Senior", color: "info" },
            master: { label: "Master", color: "primary" }
          };
          const config = levelConfig[params.row.stylist_level] || {
            label: params.row.stylist_level,
            color: "default"
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: config.color, children: config.label });
        }
      },
      // {
      //   field: 'status',
      //   headerName: 'Status',
      //   width: 120,
      //   type: 'singleSelect',
      //   valueOptions: ['Active', 'Inactive', 'Suspended', 'Pending'],
      //   renderCell: (params) => {
      //     const statusConfig = {
      //       active: { label: 'Active', color: 'success' },
      //       inactive: { label: 'Inactive', color: 'default' },
      //       suspended: { label: 'Suspended', color: 'error' },
      //       pending: { label: 'Pending', color: 'warning' },
      //     };
      //     const config = statusConfig[params.row.status] || statusConfig.active;
      //     return (
      //       <Label variant="soft" color={config.color}>
      //         {config.label}
      //       </Label>
      //     );
      //   },
      // },
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
        getActions: (params) => {
          const canEdit = canEditStaffProfile(currentUser, params.row.id);
          const actions = [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CustomGridActionsCellItem,
              {
                showInMenu: true,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:eye-bold" }),
                label: "View",
                href: paths.dashboard.staff.profile(params.row.id)
              }
            )
          ];
          if (canEdit) {
            actions.push(
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CustomGridActionsCellItem,
                {
                  showInMenu: true,
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
                  label: "Edit",
                  onClick: () => onEditRow(params.row)
                }
              )
            );
          }
          actions.push(
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CustomGridActionsCellItem,
              {
                showInMenu: true,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
                label: "Deactivate",
                onClick: () => onDeleteRow(params.row.id),
                sx: { color: "error.main" }
              }
            )
          );
          return actions;
        }
      }
    ],
    [onDeleteRow, onEditRow, currentUser, avatarSize]
  );
  return columns;
};
const HIDE_COLUMNS = { status: false };
const HIDE_COLUMNS_TOGGLABLE = ["actions"];
function StaffListView() {
  const confirmDialog = Ee();
  const addStaffDialog = Ee();
  const toolbarOptions = useToolbarSettings();
  const { user } = useAuthContext();
  const { isAdmin } = usePermissions();
  const { branches, primaryBranch } = useUserBranches();
  const [paginationModel, setPaginationModel] = reactExports.useState({
    page: 0,
    pageSize: 25
  });
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [panelFilters, setPanelFilters] = reactExports.useState({
    roles: [],
    searchTerm: "",
    stylistLevels: []
  });
  const [sortModel, setSortModel] = reactExports.useState([{ field: "last_name", sort: "asc" }]);
  const [selectedRows, setSelectedRows] = reactExports.useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = reactExports.useState(HIDE_COLUMNS);
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [editingStaff, setEditingStaff] = reactExports.useState(null);
  const filters = ze({
    branches: [],
    roles: []
  });
  const branchIds = reactExports.useMemo(() => {
    if (filters.state.branches.length > 0) return filters.state.branches;
    if (primaryBranch?.id) return [primaryBranch.id];
    return [];
  }, [filters.state.branches, primaryBranch?.id]);
  reactExports.useEffect(() => {
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, [filters.state.branches, filters.state.roles]);
  const effectiveRoles = reactExports.useMemo(
    () => [.../* @__PURE__ */ new Set([...filters.state.roles, ...panelFilters.roles])],
    [filters.state.roles, panelFilters.roles]
  );
  const fieldToColumnMap = {
    name: "last_name",
    role: "role",
    status: "status"
  };
  const { staff, staffLoading, totalCount } = useGetStaff({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    branchIds,
    filters: {
      name: panelFilters.searchTerm || searchQuery,
      role: effectiveRoles.length > 0 ? effectiveRoles : null,
      stylistLevel: panelFilters.stylistLevels.length > 0 ? panelFilters.stylistLevels : null,
      status: "active",
      orderBy: sortModel[0]?.field ? fieldToColumnMap[sortModel[0].field] || sortModel[0].field : "last_name",
      order: sortModel[0]?.sort || "asc"
    }
  });
  const handleFilterModelChange = reactExports.useCallback((newFilterModel) => {
    const items = newFilterModel?.items ?? [];
    const quickSearch = newFilterModel?.quickFilterValues?.[0] ?? "";
    setSearchQuery(quickSearch);
    const textItem = items.find(
      (item) => ["display_name", "email", "phone"].includes(item.field) && item.value !== void 0 && item.value !== ""
    );
    const roleItem = items.find((item) => item.field === "role");
    let panelRoles = [];
    if (roleItem?.operator === "isAnyOf" && Array.isArray(roleItem.value)) {
      panelRoles = roleItem.value.filter(Boolean);
    } else if (roleItem?.value) {
      panelRoles = [roleItem.value];
    }
    const levelItem = items.find((item) => item.field === "stylist_level");
    let panelStylistLevels = [];
    if (levelItem?.operator === "isAnyOf" && Array.isArray(levelItem.value)) {
      panelStylistLevels = levelItem.value.filter(Boolean);
    } else if (levelItem?.value) {
      panelStylistLevels = [levelItem.value];
    }
    setPanelFilters({
      roles: panelRoles,
      searchTerm: textItem?.value ?? "",
      stylistLevels: panelStylistLevels
    });
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleSortModelChange = reactExports.useCallback((newSortModel) => {
    setSortModel(newSortModel);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleDeleteRow = reactExports.useCallback(async (id) => {
    try {
      await deleteStaff(id);
      toast.success("Staff member deactivated successfully!");
    } catch (error) {
      console.error("Error deactivating staff:", error);
      toast.error("Failed to deactivate staff member");
    }
  }, []);
  const handleDeleteRows = reactExports.useCallback(async () => {
    try {
      await deleteMultipleStaff(selectedRows);
      setSelectedRows([]);
      toast.success("Staff members deactivated successfully!");
      confirmDialog.onFalse();
    } catch (error) {
      console.error("Error deactivating staff members:", error);
      toast.error("Failed to deactivate staff members");
    }
  }, [selectedRows, confirmDialog]);
  const handleEditRow = reactExports.useCallback((staffData) => {
    setEditingStaff(staffData);
    setIsEditing(true);
  }, []);
  const handleCancelEdit = reactExports.useCallback(() => {
    setIsEditing(false);
    setEditingStaff(null);
  }, []);
  const handleSaveSuccess = reactExports.useCallback(() => {
    setIsEditing(false);
    setEditingStaff(null);
  }, []);
  const handleAddStaffSuccess = reactExports.useCallback(() => {
    toast.success("New staff member added successfully!");
  }, []);
  const canReset = filters.state.branches.length > 0 || filters.state.roles.length > 0 || panelFilters.roles.length > 0 || panelFilters.stylistLevels.length > 0 || !!panelFilters.searchTerm;
  const filteredResults = totalCount;
  const columns = useStaffColumns({
    onDeleteRow: handleDeleteRow,
    onEditRow: handleEditRow,
    currentUser: user,
    density: toolbarOptions.settings.density
  });
  const renderConfirmDialog = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    ConfirmDialog,
    {
      open: confirmDialog.value,
      onClose: confirmDialog.onFalse,
      title: "Delete",
      content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Are you sure want to delete ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          " ",
          selectedRows?.ids?.size,
          " "
        ] }),
        " ",
        selectedRows?.ids?.size == 1 ? "item" : "items",
        "?"
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
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { sx: { flexGrow: 1, display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomBreadcrumbs,
        {
          heading: "Staff",
          action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
            selectedRows?.ids?.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "contained",
                color: "error",
                disabled: selectedRows.length === 0,
                onClick: confirmDialog.onTrue,
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
                children: [
                  "Delete (",
                  selectedRows?.ids?.size,
                  ")"
                ]
              }
            ),
            isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                component: RouterLink,
                href: paths.dashboard.staff.payrollRun,
                variant: "outlined",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:wallet-money-bold-duotone" }),
                children: "Payroll Run"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: addStaffDialog.onTrue,
                variant: "contained",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
                children: "Add Staff"
              }
            )
          ] }),
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
              checkboxSelection: true,
              disableRowSelectionOnClick: true,
              rows: staff,
              columns,
              loading: staffLoading,
              rowCount: totalCount,
              paginationMode: "server",
              paginationModel,
              onPaginationModelChange: setPaginationModel,
              pageSizeOptions: [5, 10, 25, 50, 100],
              columnVisibilityModel,
              onColumnVisibilityModelChange: (newModel) => setColumnVisibilityModel(newModel),
              onRowSelectionModelChange: (newSelectionModel) => {
                setSelectedRows(Array.from(newSelectionModel.ids));
              },
              filterMode: "server",
              onFilterModelChange: handleFilterModelChange,
              sortingMode: "server",
              sortModel,
              onSortModelChange: handleSortModelChange,
              slots: {
                noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No Staff Found" }),
                noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found" }),
                toolbar: StaffTableToolbar
              },
              slotProps: {
                toolbar: {
                  options: {
                    branches: branches.map((branch) => ({
                      value: branch.id,
                      label: branch.name
                    })),
                    roles: STAFF_ROLE_OPTIONS
                  },
                  primaryBranchId: primaryBranch?.id,
                  filters,
                  canReset,
                  filteredResults,
                  selectedRowCount: selectedRows.length,
                  onOpenConfirmDeleteRows: confirmDialog.onTrue,
                  settings: toolbarOptions.settings,
                  onChangeSettings: toolbarOptions.onChangeSettings
                },
                columnsManagement: {
                  getTogglableColumns: () => columns.filter((col) => !HIDE_COLUMNS_TOGGLABLE.includes(col.field)).map((col) => col.field)
                }
              },
              sx: {
                [`& .${gridClasses.cell}`]: {
                  display: "flex",
                  alignItems: "center"
                }
              }
            }
          )
        }
      )
    ] }),
    renderConfirmDialog(),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddStaffDialog,
      {
        open: addStaffDialog.value,
        onClose: addStaffDialog.onFalse,
        onSuccess: handleAddStaffSuccess
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StaffEditForm,
      {
        open: isEditing,
        staffData: editingStaff,
        onCancel: handleCancelEdit,
        onSuccess: handleSaveSuccess
      }
    )
  ] });
}
const metadata = { title: `Staff | Dashboard - ${CONFIG.appName}` };
function StaffPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StaffListView, {})
  ] });
}
export {
  StaffPage as default
};
