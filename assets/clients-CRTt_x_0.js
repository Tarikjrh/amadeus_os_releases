import { r as reactExports, j as jsxRuntimeExports, S as Stack, al as Avatar, bm as ListItemText, c as Typography, Y as Link, Z as RouterLink, a3 as paths, an as fDate, L as Label, a as Iconify, h as dayjs, a2 as Chip, d as Button, x as Select, M as MenuItem, U, H as Menu, c3 as Drawer, I as IconButton, K as Divider, ar as Scrollbar, B as Box, a8 as FormControlLabel, E as Ee, av as useAuthContext, a6 as useUserBranches, bp as ze, t as toast, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, bq as gridClasses, C as CONFIG } from "./index-B08HRm4A.js";
import { D as DEFAULT_DATAGRID_ROWS } from "./default_rows-Cuuw8tod.js";
import { u as useGetLoyaltyTiers } from "./loyalty-service-D710t09P.js";
import { e as useClientList, c as updateClient } from "./client-service-swr-DnF01Wop.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, c as ToolbarRightPanel, C as CustomToolbarQuickFilter, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { f as formatPhoneNumberIntl } from "./index-C4JOln-R.js";
import { A as AVATAR_SIZE } from "./avatar-size-DxlpMe7m.js";
import { a as renderLocationNameWithIcon } from "./render-location-type-B-TZb61z.js";
import { C as ClientImportanceLabel } from "./index-Dha6iQ4E.js";
import { C as CustomGridActionsCellItem } from "./grid-actions-cell-item-GDL6dx4W.js";
import { F as FiltersResult, a as FiltersBlock, c as chipProps } from "./filters-result-CQUV8kzX.js";
import { T as Toolbar, D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import { F as FormControl, I as InputLabel, T as TextField } from "./TextField-CIuP940C.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { D as DatePicker } from "./DatePicker-D3PAml74.js";
import "./Dialog-C5RfKkDi.js";
import "./DialogTitle-B3pdxJpB.js";
import "./ExportPrint-CAqo1wR3.js";
import "./InputAdornment-BqZyQBIE.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./toPropertyKey-BRoQIA86.js";
import "./with-selector-ClfCuV5M.js";
import "./Skeleton-BC-WlQQE.js";
import "./Autocomplete-BReuRGf-.js";
import "./TablePagination-BOFMLJYr.js";
import "./TableCell-B_5fJIbm.js";
import "./ToggleButton-D4MfeHtt.js";
import "./useMobilePicker-D3Q_Tt3t.js";
const useClientColumns = ({ onDeleteRow, density = "standard" }) => {
  const avatarSize = AVATAR_SIZE[density] ?? 36;
  const columns = reactExports.useMemo(
    () => [
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        minWidth: 280,
        hideable: false,
        sortable: true,
        valueGetter: (_, row) => {
          const fullName = `${row.first_name} ${row.last_name}`;
          return fullName;
        },
        renderCell: (params) => {
          const fullName = `${params.row.first_name} ${params.row.last_name}`;
          const preferredName = params.row.preferred_name;
          const clientImportance = params.row.client_importance || 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Avatar,
              {
                alt: fullName,
                src: params.row.profile_photo_url,
                sx: { mr: 2, width: avatarSize, height: avatarSize, fontSize: avatarSize * 0.45 },
                children: [
                  params.row.first_name?.charAt(0).toUpperCase(),
                  params.row.last_name?.charAt(0).toUpperCase()
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ListItemText,
              {
                primary: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      component: RouterLink,
                      href: paths.dashboard.clients.profile(params.row.id),
                      color: "inherit",
                      sx: {
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" }
                      },
                      children: [
                        fullName,
                        " ",
                        density === "compact" && preferredName ? `(${preferredName})` : ""
                      ]
                    }
                  ),
                  clientImportance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientImportanceLabel, { clientImportance, sx: { ml: 2 } })
                ] }),
                secondary: density != "compact" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Typography,
                  {
                    component: "span",
                    variant: "body2",
                    color: "text.secondary",
                    sx: { display: "block" },
                    children: [
                      preferredName ? `Preferred: ${preferredName}` : null,
                      " "
                    ]
                  }
                )
              }
            )
          ] });
        }
      },
      {
        field: "phone_primary",
        headerName: "Phone Number",
        width: 160,
        sortable: true,
        renderCell: (params) => formatPhoneNumberIntl(params.row.phone_primary) || "-"
      },
      {
        field: "phone_secondary",
        headerName: "Secondary Phone",
        width: 160,
        sortable: true,
        renderCell: (params) => formatPhoneNumberIntl(params.row.phone_secondary) || "-"
      },
      {
        field: "email",
        headerName: "Email",
        width: 200,
        sortable: true,
        renderCell: (params) => params.row.email || "-"
      },
      {
        field: "total_visits",
        headerName: "Visits",
        type: "number",
        width: 100,
        align: "center",
        headerAlign: "center",
        sortable: true,
        valueGetter: (_, row) => row.total_visits || 0,
        renderCell: (params) => params.row.total_visits || 0
      },
      {
        field: "last_visit_date",
        headerName: "Last Visit",
        width: 120,
        type: "date",
        valueGetter: (_, row) => row.last_visit_date ? new Date(row.last_visit_date) : null,
        sortable: true,
        renderCell: (params) => params.row.last_visit_date ? fDate(params.row.last_visit_date) : "-"
      },
      {
        field: "total_spent",
        headerName: "Total Spent",
        type: "number",
        width: 140,
        sortable: true,
        valueGetter: (_, row) => Number(row.total_spent) || 0,
        renderCell: (params) => {
          const amount = params.row.total_spent || 0;
          return `$${Number(amount).toFixed(2)}`;
        }
      },
      {
        field: "created_at",
        headerName: "Created",
        width: 120,
        type: "date",
        sortable: true,
        valueGetter: (_, row) => row.created_at ? new Date(row.created_at) : null,
        renderCell: (params) => params.row.created_at ? fDate(params.row.created_at) : "-"
      },
      {
        field: "loyalty_tier",
        headerName: "Loyalty Level",
        width: 140,
        sortable: false,
        valueGetter: (_, row) => row.loyalty_tier?.name || "",
        renderCell: (params) => {
          const tier = params.row.loyalty_tier;
          if (!tier?.name) return "-";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Label,
            {
              variant: "soft",
              sx: {
                bgcolor: tier.color ? `${tier.color}22` : void 0,
                color: tier.color || void 0,
                fontWeight: 700
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: tier.icon, width: 16 }),
                tier.name
              ]
            }
          );
        }
      },
      {
        field: "branch",
        headerName: "Branch",
        width: 140,
        sortable: true,
        valueGetter: (_, row) => row?.branch || "-",
        valueOptions: [
          { value: "warehouse", label: "Warehouse" },
          { value: "branch", label: "Branch" }
        ],
        renderCell: (params) => renderLocationNameWithIcon(params.row.branch)
      },
      {
        field: "status",
        headerName: "Status",
        width: 120,
        sortable: true,
        type: "singleSelect",
        valueOptions: [
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
          { value: "pending", label: "Pending" }
        ],
        renderCell: (params) => {
          const statusColors = {
            active: "success",
            inactive: "default",
            pending: "warning"
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: statusColors[params.row.status] || "default", children: params.row.status || "N/A" });
        }
      },
      // {
      //   show: false,
      //   field: 'active_red_flags',
      //   headerName: 'Red Flags',
      //   type: 'number',
      //   width: 120,
      //   align: 'center',
      //   headerAlign: 'center',
      //   sortable: true,
      //   valueGetter: (_, row) => row.active_red_flags || 0,
      //   renderCell: (params) => {
      //     const count = params.row.active_red_flags || 0;
      //     if (count === 0) return '-';
      //     return (
      //       <Chip
      //         label={count}
      //         color="error"
      //         size="small"
      //         sx={{ minWidth: 24, height: 24, fontSize: '0.75rem' }}
      //       />
      //     );
      //   },
      // },
      {
        show: false,
        field: "date_of_birth",
        headerName: "Date of Birth",
        width: 120,
        sortable: true,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ListItemText,
          {
            disableTypography: true,
            primary: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                component: RouterLink,
                href: paths.dashboard.clients.profile(params.row.id),
                color: "inherit",
                sx: {
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" }
                },
                children: params.row.date_of_birth ? `${fDate(params.row.date_of_birth)}` : "-"
              }
            ),
            sx: { display: "flex", flexDirection: "column" }
          }
        )
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 80,
        align: "center",
        headerAlign: "center",
        sortable: false,
        valueGetter: (_, row) => {
          if (!row.date_of_birth) return null;
          const age = dayjs().diff(dayjs(row.date_of_birth), "year");
          return age > 0 ? age : null;
        },
        renderCell: (params) => {
          const age = params.value;
          return age != null ? age : "-";
        }
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
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:eye-bold" }),
              label: "View",
              href: paths.dashboard.clients.profile(params.row.id)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              showInMenu: true,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              label: "Edit",
              href: paths.dashboard.clients.edit(params.row.id)
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
    [onDeleteRow, avatarSize]
  );
  return columns;
};
const HIDE_COLUMNS = {
  last_visit_date: false,
  total_visits: false,
  phone_secondary: false,
  date_of_birth: false,
  active_red_flags: false,
  email: false,
  age: false
};
const HIDE_COLUMNS_TOGGLABLE = ["active_red_flags", "actions"];
const STATUS_OPTIONS = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" }
];
const IMPORTANCE_OPTIONS = [
  { value: 0, label: "Clear" },
  { value: 1, label: "★ 1" },
  { value: 2, label: "★★ 2" },
  { value: 3, label: "★★★ 3" },
  { value: 4, label: "★★★★ 4" },
  { value: 5, label: "★★★★★ 5" }
];
function ClientTableFiltersResult({
  filters,
  onResetFilters,
  totalResults,
  sx,
  options = {}
}) {
  const { state: currentFilters, setState: updateFilters, resetState: resetFilters } = filters;
  const handleRemoveBranch = reactExports.useCallback(
    (inputValue) => {
      const newValue = currentFilters.branches.filter((item) => item !== inputValue);
      updateFilters({ branches: newValue });
    },
    [updateFilters, currentFilters.branches]
  );
  const handleRemoveSearchTerm = reactExports.useCallback(() => {
    updateFilters({ searchTerm: "" });
  }, [updateFilters]);
  const handleRemoveLoyaltyTier = reactExports.useCallback(
    (inputValue) => {
      const newValue = currentFilters.loyaltyTiers.filter((item) => item !== inputValue);
      updateFilters({ loyaltyTiers: newValue });
    },
    [updateFilters, currentFilters.loyaltyTiers]
  );
  const getBranchLabel = reactExports.useCallback(
    (branchId) => {
      const branch = options.branches?.find((b) => b.value === branchId);
      return branch?.label || branchId;
    },
    [options.branches]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FiltersResult,
    {
      totalResults,
      onReset: onResetFilters || (() => resetFilters()),
      sx,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersBlock, { label: "Search:", isShow: !!currentFilters.searchTerm, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { ...chipProps, label: currentFilters.searchTerm, onDelete: handleRemoveSearchTerm }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersBlock, { label: "Branch:", isShow: !!currentFilters.branches?.length, children: currentFilters.branches?.map((item) => /* @__PURE__ */ reactExports.createElement(
          Chip,
          {
            ...chipProps,
            key: item,
            label: getBranchLabel(item),
            onDelete: () => handleRemoveBranch(item)
          }
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersBlock, { label: "Loyalty Level:", isShow: !!currentFilters.loyaltyTiers?.length, children: currentFilters.loyaltyTiers?.map((item) => {
          const tier = options.loyaltyTiers?.find((t) => t.value === item);
          return /* @__PURE__ */ reactExports.createElement(
            Chip,
            {
              ...chipProps,
              key: item,
              label: tier?.label || item,
              onDelete: () => handleRemoveLoyaltyTier(item)
            }
          );
        }) })
      ]
    }
  );
}
function ClientTableToolbar({
  options,
  filters,
  onResetFilters,
  canReset,
  filteredResults,
  selectedRowCount,
  onOpenConfirmDeleteRows,
  onBatchSetImportance,
  onOpenAdvancedFilters,
  /********/
  settings,
  onChangeSettings
}) {
  const { state: currentFilters, setState: updateFilters } = filters;
  const [branches, setBranches] = reactExports.useState(currentFilters.branches || []);
  const [loyaltyTiers, setLoyaltyTiers] = reactExports.useState(currentFilters.loyaltyTiers || []);
  reactExports.useEffect(() => {
    setBranches(currentFilters.branches || []);
  }, [currentFilters.branches]);
  reactExports.useEffect(() => {
    setLoyaltyTiers(currentFilters.loyaltyTiers || []);
  }, [currentFilters.loyaltyTiers]);
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
        value: branches,
        options: options.branches,
        onChange: handleSelect(setBranches),
        onApply: (cleanedValue) => updateFilters({ branches: cleanedValue })
      }
    ),
    options.loyaltyTiers?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterSelect,
      {
        label: "Loyalty Level",
        value: loyaltyTiers,
        options: options.loyaltyTiers,
        onChange: handleSelect(setLoyaltyTiers),
        onApply: (cleanedValue) => updateFilters({ loyaltyTiers: cleanedValue })
      }
    )
  ] });
  const renderRightPanel = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    !!selectedRowCount && /* @__PURE__ */ jsxRuntimeExports.jsx(ImportanceButton, { count: selectedRowCount, onSelect: onBatchSetImportance }),
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
      ClientTableFiltersResult,
      {
        filters,
        onResetFilters,
        totalResults: filteredResults,
        options,
        sx: { p: 2.5, pt: 0 }
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
function ImportanceButton({ count, onSelect }) {
  const [anchorEl, setAnchorEl] = reactExports.useState(null);
  const handleOpen = reactExports.useCallback((e) => setAnchorEl(e.currentTarget), []);
  const handleClose = reactExports.useCallback(() => setAnchorEl(null), []);
  const handleSelect = reactExports.useCallback(
    (value) => {
      onSelect(value);
      handleClose();
    },
    [onSelect, handleClose]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "small",
        color: "warning",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:star-bold-duotone" }),
        onClick: handleOpen,
        children: [
          "Set Importance (",
          count,
          ")"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { anchorEl, open: Boolean(anchorEl), onClose: handleClose, children: IMPORTANCE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { onClick: () => handleSelect(opt.value), children: opt.label }, opt.value)) })
  ] });
}
function ClientAdvancedFilters({
  open,
  onClose,
  filters,
  onFiltersChange,
  branches = [],
  loyaltyTiers = []
}) {
  const [localFilters, setLocalFilters] = reactExports.useState(filters);
  const handleLocalFilterChange = reactExports.useCallback((key, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  }, []);
  const handleApply = reactExports.useCallback(() => {
    onFiltersChange(localFilters);
    onClose();
  }, [localFilters, onFiltersChange, onClose]);
  const handleReset = reactExports.useCallback(() => {
    const resetFilters = {
      status: "all",
      totalVisitsMin: "",
      totalVisitsMax: "",
      totalSpentMin: "",
      totalSpentMax: "",
      hasRedFlags: false,
      createdAfter: null,
      createdBefore: null,
      dobAfter: null,
      dobBefore: null,
      lastVisitAfter: null,
      lastVisitBefore: null,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "all",
      loyaltyTierId: ""
    };
    setLocalFilters(resetFilters);
    onFiltersChange(resetFilters);
  }, [onFiltersChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Drawer,
    {
      anchor: "right",
      open,
      onClose,
      PaperProps: {
        sx: { width: 320 }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { p: 2.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Advanced Filters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { sx: { flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { p: 2.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Client Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TextField,
              {
                select: true,
                value: localFilters.status || "all",
                onChange: (e) => handleLocalFilterChange("status", e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "All Statuses" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "active", children: "Active" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "inactive", children: "Inactive" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "pending", children: "Pending" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Total Visits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  fullWidth: true,
                  type: "number",
                  placeholder: "Min",
                  value: localFilters.totalVisitsMin || "",
                  onChange: (e) => handleLocalFilterChange("totalVisitsMin", e.target.value),
                  inputProps: { min: 0 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  fullWidth: true,
                  type: "number",
                  placeholder: "Max",
                  value: localFilters.totalVisitsMax || "",
                  onChange: (e) => handleLocalFilterChange("totalVisitsMax", e.target.value),
                  inputProps: { min: 0 }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Total Spent ($)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  fullWidth: true,
                  type: "number",
                  placeholder: "Min",
                  value: localFilters.totalSpentMin || "",
                  onChange: (e) => handleLocalFilterChange("totalSpentMin", e.target.value),
                  inputProps: { min: 0, step: 0.01 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  fullWidth: true,
                  type: "number",
                  placeholder: "Max",
                  value: localFilters.totalSpentMax || "",
                  onChange: (e) => handleLocalFilterChange("totalSpentMax", e.target.value),
                  inputProps: { min: 0, step: 0.01 }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormControlLabel,
            {
              control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: localFilters.hasRedFlags ? "Yes" : "No",
                  clickable: true,
                  color: localFilters.hasRedFlags ? "error" : "default",
                  onClick: () => handleLocalFilterChange("hasRedFlags", !localFilters.hasRedFlags)
                }
              ),
              label: "Has Active Red Flags",
              labelPlacement: "start",
              sx: { justifyContent: "space-between", ml: 0 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Date Created" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DatePicker,
                {
                  label: "From",
                  value: localFilters.createdAfter,
                  onChange: (newValue) => handleLocalFilterChange("createdAfter", newValue),
                  slotProps: {
                    textField: {
                      fullWidth: true
                    }
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DatePicker,
                {
                  label: "To",
                  value: localFilters.createdBefore,
                  onChange: (newValue) => handleLocalFilterChange("createdBefore", newValue),
                  slotProps: {
                    textField: {
                      fullWidth: true
                    }
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Date of Birth" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DatePicker,
                {
                  label: "From",
                  value: localFilters.dobAfter,
                  onChange: (newValue) => handleLocalFilterChange("dobAfter", newValue),
                  slotProps: {
                    textField: {
                      fullWidth: true
                    }
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DatePicker,
                {
                  label: "To",
                  value: localFilters.dobBefore,
                  onChange: (newValue) => handleLocalFilterChange("dobBefore", newValue),
                  slotProps: {
                    textField: {
                      fullWidth: true
                    }
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Last Visit Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DatePicker,
                {
                  label: "From",
                  value: localFilters.lastVisitAfter,
                  onChange: (newValue) => handleLocalFilterChange("lastVisitAfter", newValue),
                  slotProps: {
                    textField: {
                      fullWidth: true
                    }
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DatePicker,
                {
                  label: "To",
                  value: localFilters.lastVisitBefore,
                  onChange: (newValue) => handleLocalFilterChange("lastVisitBefore", newValue),
                  slotProps: {
                    textField: {
                      fullWidth: true
                    }
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  fullWidth: true,
                  placeholder: "First Name",
                  value: localFilters.firstName || "",
                  onChange: (e) => handleLocalFilterChange("firstName", e.target.value)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  fullWidth: true,
                  placeholder: "Last Name",
                  value: localFilters.lastName || "",
                  onChange: (e) => handleLocalFilterChange("lastName", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Contact Information" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  fullWidth: true,
                  placeholder: "Email",
                  value: localFilters.email || "",
                  onChange: (e) => handleLocalFilterChange("email", e.target.value),
                  type: "email"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  fullWidth: true,
                  placeholder: "Phone Number",
                  value: localFilters.phoneNumber || "",
                  onChange: (e) => handleLocalFilterChange("phoneNumber", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          loyaltyTiers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Loyalty Level" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TextField,
                {
                  select: true,
                  value: localFilters.loyaltyTierId || "",
                  onChange: (e) => handleLocalFilterChange("loyaltyTierId", e.target.value),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "All Levels" }),
                    loyaltyTiers.map((tier) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: tier.id, children: tier.name }, tier.id))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Gender" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TextField,
              {
                select: true,
                value: localFilters.gender || "all",
                onChange: (e) => handleLocalFilterChange("gender", e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "All Genders" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "male", children: "Male" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "female", children: "Female" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "other", children: "Other" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "prefer_not_to_say", children: "Prefer not to say" })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 2.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              fullWidth: true,
              size: "large",
              variant: "contained",
              onClick: handleApply,
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:checkmark-fill" }),
              children: "Apply Filters"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              fullWidth: true,
              size: "large",
              variant: "outlined",
              color: "inherit",
              onClick: handleReset,
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:restart-bold" }),
              children: "Reset All"
            }
          )
        ] }) })
      ]
    }
  );
}
function ClientListView() {
  const confirmDialog = Ee();
  const advancedFiltersDialog = Ee();
  const toolbarOptions = useToolbarSettings();
  const { user } = useAuthContext();
  const { primaryBranch } = useUserBranches();
  const organizationId = primaryBranch?.organization_id ?? null;
  const { tiers: loyaltyTiers } = useGetLoyaltyTiers(organizationId);
  const branches = reactExports.useMemo(() => user?.branches || [], [user?.branches]);
  const branchOptions = reactExports.useMemo(
    () => branches.map((branch) => ({ value: branch.id, label: branch.name })),
    [branches]
  );
  const filters = ze({ branches: [], statuses: [], loyaltyTiers: [], searchTerm: "" });
  const loyaltyTierOptions = reactExports.useMemo(
    () => loyaltyTiers.map((t) => ({ value: t.id, label: t.name })),
    [loyaltyTiers]
  );
  const {
    clients,
    loading,
    totalCount,
    page,
    pageSize,
    handlePageChange,
    handlePageSizeChange,
    handleBranchFilterChange,
    handleSearchChange,
    advancedFilters,
    handleAdvancedFiltersChange,
    sortField,
    sortOrder,
    handleSortChange,
    deleteClient: deleteClientFn,
    deleteMultipleClients: deleteMultipleClientsFn
  } = useClientList();
  const [selectedRows, setSelectedRows] = reactExports.useState([]);
  const [clientToDelete, setClientToDelete] = reactExports.useState(null);
  const [deleteLoading, setDeleteLoading] = reactExports.useState(false);
  const [columnVisibilityModel, setColumnVisibilityModel] = reactExports.useState(HIDE_COLUMNS);
  const [filterItems, setFilterItems] = reactExports.useState([]);
  const handlePaginationModelChange = reactExports.useCallback(
    (model) => {
      if (model.pageSize !== pageSize) {
        handlePageSizeChange(model.pageSize);
      } else if (model.page !== page) {
        handlePageChange(model.page);
      }
    },
    [page, pageSize, handlePageChange, handlePageSizeChange]
  );
  reactExports.useEffect(() => {
    if (filters.state.branches.length > 0) {
      handleBranchFilterChange(filters.state.branches[0]);
    } else {
      handleBranchFilterChange("all");
    }
  }, [filters.state.branches, handleBranchFilterChange]);
  reactExports.useEffect(() => {
    const currentStatus = filters.state.statuses.length > 0 ? filters.state.statuses[0] : "all";
    handleAdvancedFiltersChange({ ...advancedFilters, status: currentStatus });
  }, [filters.state.statuses, handleAdvancedFiltersChange]);
  reactExports.useEffect(() => {
    const tierId = filters.state.loyaltyTiers.length > 0 ? filters.state.loyaltyTiers[0] : "";
    handleAdvancedFiltersChange({ ...advancedFilters, loyaltyTierId: tierId });
  }, [filters.state.loyaltyTiers, handleAdvancedFiltersChange]);
  const canReset = filters.state.branches.length > 0 || filters.state.statuses.length > 0 || filters.state.loyaltyTiers.length > 0 || !!filters.state.searchTerm;
  const handleResetFilters = reactExports.useCallback(() => {
    filters.resetState();
    handleSearchChange("");
  }, [filters, handleSearchChange]);
  const filterModel = reactExports.useMemo(
    () => ({
      items: filterItems,
      quickFilterValues: filters.state.searchTerm ? [filters.state.searchTerm] : []
    }),
    [filters.state.searchTerm, filterItems]
  );
  const handleFilterModelChange = reactExports.useCallback(
    (newFilterModel) => {
      const searchValue = (newFilterModel?.quickFilterValues ?? []).join(" ").trim();
      if (searchValue !== filters.state.searchTerm) {
        handleSearchChange(searchValue);
        filters.setState({ ...filters.state, searchTerm: searchValue });
      }
      setFilterItems(newFilterModel?.items || []);
      const columnFilters = newFilterModel?.items || [];
      if (columnFilters.length > 0) {
        const newAdvancedFilters = { ...advancedFilters };
        columnFilters.forEach((filter) => {
          const { field, operator, value } = filter;
          switch (field) {
            case "status":
              if (operator === "is") {
                newAdvancedFilters.status = value;
              }
              break;
            case "total_visits":
              if (operator === ">" || operator === ">=") {
                newAdvancedFilters.totalVisitsMin = value;
              } else if (operator === "<" || operator === "<=") {
                newAdvancedFilters.totalVisitsMax = value;
              } else if (operator === "=") {
                newAdvancedFilters.totalVisitsMin = value;
                newAdvancedFilters.totalVisitsMax = value;
              }
              break;
            case "total_spent":
              if (operator === ">" || operator === ">=") {
                newAdvancedFilters.totalSpentMin = value;
              } else if (operator === "<" || operator === "<=") {
                newAdvancedFilters.totalSpentMax = value;
              } else if (operator === "=") {
                newAdvancedFilters.totalSpentMin = value;
                newAdvancedFilters.totalSpentMax = value;
              }
              break;
            case "active_red_flags":
              if (operator === ">" && value >= 0) {
                newAdvancedFilters.hasRedFlags = true;
              }
              break;
            case "name":
              if (operator === "contains") {
                newAdvancedFilters.firstName = value;
              }
              break;
            case "phone_primary":
              if (operator === "contains") {
                newAdvancedFilters.phoneNumber = value;
              }
              break;
          }
        });
        handleAdvancedFiltersChange(newAdvancedFilters);
      }
    },
    [handleSearchChange, handleAdvancedFiltersChange, advancedFilters, filters]
  );
  const handleSortModelChange = reactExports.useCallback(
    (newSortModel) => {
      if (newSortModel.length > 0) {
        const { field, sort } = newSortModel[0];
        const fieldMap = {
          name: "first_name",
          phone_primary: "phone_primary",
          total_visits: "total_visits",
          total_spent: "total_spent",
          status: "status",
          email: "email",
          active_red_flags: "active_red_flags",
          branch: "branch_id"
        };
        const dbField = fieldMap[field] || field;
        handleSortChange(dbField, sort);
      }
    },
    [handleSortChange]
  );
  const handleDeleteRow = reactExports.useCallback(
    (id) => {
      const client = clients.find((c) => c.id === id);
      setClientToDelete(client);
      confirmDialog.onTrue();
    },
    [clients, confirmDialog]
  );
  const handleBatchSetImportance = reactExports.useCallback(
    async (value) => {
      try {
        await Promise.all(selectedRows.map((id) => updateClient(id, { client_importance: value })));
        toast.success(`Importance updated for ${selectedRows.length} client(s)`);
      } catch (error) {
        toast.error("Failed to update importance");
        console.error(error);
      }
    },
    [selectedRows]
  );
  const handleConfirmDelete = reactExports.useCallback(async () => {
    setDeleteLoading(true);
    try {
      if (clientToDelete) {
        const result = await deleteClientFn(clientToDelete.id);
        if (result.success) {
          toast.success("Client deleted successfully!");
        } else {
          toast.error("Failed to delete client");
        }
        setClientToDelete(null);
      } else {
        const result = await deleteMultipleClientsFn(selectedRows);
        if (result.success) {
          setSelectedRows([]);
          toast.success("Clients deleted successfully!");
        } else {
          toast.error("Failed to delete clients");
        }
      }
    } finally {
      setDeleteLoading(false);
      confirmDialog.onFalse();
    }
  }, [clientToDelete, selectedRows, deleteClientFn, deleteMultipleClientsFn, confirmDialog]);
  const columns = useClientColumns({
    onDeleteRow: handleDeleteRow,
    density: toolbarOptions.settings.density
  });
  const sortModel = reactExports.useMemo(() => {
    const fieldMap = {
      first_name: "name",
      phone_primary: "phone_primary",
      total_visits: "total_visits",
      total_spent: "total_spent",
      status: "status",
      active_red_flags: "active_red_flags",
      branch_id: "branch",
      created_at: "created_at"
    };
    const gridField = fieldMap[sortField] || sortField;
    return [{ field: gridField, sort: sortOrder }];
  }, [sortField, sortOrder]);
  const renderConfirmDialog = () => {
    const isSingleDelete = clientToDelete !== null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: deleteLoading ? void 0 : () => {
          confirmDialog.onFalse();
          setClientToDelete(null);
        },
        title: isSingleDelete ? "Delete Client" : "Delete Clients",
        content: isSingleDelete ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Are you sure you want to delete",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            clientToDelete.first_name,
            " ",
            clientToDelete.last_name
          ] }),
          "?"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Are you sure you want to delete ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedRows.length }),
          " ",
          selectedRows.length === 1 ? "client" : "clients",
          "?"
        ] }),
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: handleConfirmDelete,
            disabled: deleteLoading,
            startIcon: deleteLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "svg-spinners:8-dots-rotate" }) : null,
            children: deleteLoading ? "Deleting..." : "Delete"
          }
        )
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { sx: { flexGrow: 1, display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomBreadcrumbs,
        {
          heading: "Clients",
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              component: RouterLink,
              href: paths.dashboard.clients.new,
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              children: "Add Client"
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
            // height: { xs: 800, md: '1px' },
            flexDirection: { md: "column" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DataGrid,
            {
              ...toolbarOptions.settings,
              checkboxSelection: true,
              disableRowSelectionOnClick: true,
              keepNonExistentRowsSelected: true,
              rows: clients,
              columns,
              loading,
              rowCount: totalCount,
              paginationMode: "server",
              paginationModel: { page, pageSize },
              onPaginationModelChange: handlePaginationModelChange,
              pageSizeOptions: DEFAULT_DATAGRID_ROWS,
              columnVisibilityModel,
              onColumnVisibilityModelChange: (newModel) => setColumnVisibilityModel(newModel),
              rowSelectionModel: { type: "include", ids: new Set(selectedRows) },
              onRowSelectionModelChange: (newSelectionModel) => {
                setSelectedRows([...newSelectionModel.ids]);
              },
              sortingMode: "server",
              sortModel,
              onSortModelChange: handleSortModelChange,
              filterMode: "server",
              filterModel,
              onFilterModelChange: handleFilterModelChange,
              slots: {
                noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No clients found" }),
                noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found" }),
                toolbar: ClientTableToolbar
              },
              slotProps: {
                toolbar: {
                  filters,
                  onResetFilters: handleResetFilters,
                  options: {
                    branches: branchOptions,
                    statuses: STATUS_OPTIONS,
                    loyaltyTiers: loyaltyTierOptions
                  },
                  canReset,
                  filteredResults: totalCount,
                  selectedRowCount: selectedRows.length,
                  onOpenConfirmDeleteRows: confirmDialog.onTrue,
                  onBatchSetImportance: handleBatchSetImportance,
                  onOpenAdvancedFilters: advancedFiltersDialog.onTrue,
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
      ClientAdvancedFilters,
      {
        open: advancedFiltersDialog.value,
        onClose: advancedFiltersDialog.onFalse,
        filters: advancedFilters,
        onFiltersChange: handleAdvancedFiltersChange,
        branches,
        loyaltyTiers
      }
    )
  ] });
}
const metadata = { title: `Clients | Dashboard - ${CONFIG.appName}` };
function ClientsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientListView, {})
  ] });
}
export {
  ClientsPage as default
};
