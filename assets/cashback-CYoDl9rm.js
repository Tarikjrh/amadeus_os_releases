import { t as toast, j as jsxRuntimeExports, S as Stack, d as Button, r as reactExports, al as Avatar, B as Box, c as Typography, a0 as fCurrency, an as fDate, av as useAuthContext, E as Ee, a4 as DashboardContent, ao as CustomBreadcrumbs, a as Iconify, y as Card, ap as Tabs, aq as Tab, a1 as LinearProgress, a2 as Chip, L as Label, bn as RoleBasedGuard, I as IconButton, bq as gridClasses, C as CONFIG } from "./index-B08HRm4A.js";
import { u as useGetCashbackProgram, s as saveCashbackRule, a as saveCashbackProgram, b as useGetCashbackRules, c as useGetCashbackWallets, d as deleteCashbackRule } from "./cashback-service-C1s-xYNM.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, C as CustomToolbarQuickFilter, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { o as object, n as number, s as string, b as boolean, i as _enum } from "./schemas-BVeYYbTr.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { T as Toolbar, D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import "./ExportPrint-CAqo1wR3.js";
import "./TextField-CIuP940C.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./with-selector-ClfCuV5M.js";
import "./toPropertyKey-BRoQIA86.js";
import "./Skeleton-BC-WlQQE.js";
import "./TablePagination-BOFMLJYr.js";
import "./ToggleButton-D4MfeHtt.js";
const CashbackRuleSchema = object({
  category: string().min(1, "Required"),
  cashback_percentage: number({ invalid_type_error: "Required" }).min(0, "Min 0").max(100, "Max 100"),
  is_active: boolean()
});
const CATEGORY_SUGGESTIONS = [
  { label: "All", value: "all" },
  { label: "Hair Color", value: "hair_color" },
  { label: "Haircut", value: "haircut" },
  { label: "Treatment", value: "treatment" },
  { label: "Blowout", value: "blowout" },
  { label: "Extensions", value: "extensions" },
  { label: "Keratin", value: "keratin" },
  { label: "Nails", value: "nails" },
  { label: "Skincare", value: "skincare" },
  { label: "Waxing", value: "waxing" },
  { label: "Makeup", value: "makeup" },
  { label: "Products", value: "products" }
];
const DEFAULT_VALUES$1 = {
  category: "",
  cashback_percentage: 5,
  is_active: true
};
function CashbackRuleDialog({ open, onClose, rule, organizationId }) {
  const { program } = useGetCashbackProgram(organizationId);
  const isEdit = !!rule?.id;
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(CashbackRuleSchema),
    defaultValues: DEFAULT_VALUES$1,
    values: rule ? {
      category: rule.category,
      cashback_percentage: rule.cashback_percentage,
      is_active: rule.is_active
    } : void 0
  });
  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (values) => {
    if (!program) {
      toast.error("No cashback program found");
      return;
    }
    try {
      await saveCashbackRule({
        ...isEdit ? { id: rule.id } : {},
        programId: program.id,
        organizationId,
        category: values.category.trim().toLowerCase(),
        cashback_percentage: Number(values.cashback_percentage),
        is_active: values.is_active
      });
      toast.success(isEdit ? "Rule updated" : "Rule created");
      onClose();
    } catch (err) {
      toast.error(err.message || "Failed to save rule");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Rule" : "Add Cashback Rule" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Autocomplete,
          {
            name: "category",
            label: "Category",
            freeSolo: true,
            options: CATEGORY_SUGGESTIONS,
            getOptionLabel: (opt) => typeof opt === "string" ? opt : opt.label,
            placeholder: 'e.g. Hair Color or "All"',
            helperText: 'Type "All" to apply to everything',
            onChange: (_, opt) => setValue("category", typeof opt === "string" ? opt : opt?.label ?? "", {
              shouldValidate: true
            }),
            onInputChange: (_, val) => setValue("category", val, { shouldValidate: true })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "cashback_percentage",
            label: "Cashback Percentage",
            type: "number",
            inputProps: { min: 0, max: 100, step: 0.5 },
            InputProps: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "%" })
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Switch, { name: "is_active", label: "Rule is Active" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isSubmitting, children: isSubmitting ? "Saving…" : isEdit ? "Update" : "Create" })
      ] })
    ] }, `${open}-${rule?.id ?? "new"}`)
  ] });
}
function CashbackWalletToolbar({ toolbarOptions }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarLeftPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarQuickFilter, { size: "small" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarColumnsButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, {}),
      toolbarOptions && /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomToolbarSettingsButton,
        {
          settings: toolbarOptions.settings,
          onChangeSettings: toolbarOptions.onChangeSettings
        }
      )
    ] })
  ] }) });
}
const CashbackProgramSchema = object({
  name: string().min(1, "Required"),
  credit_timing: _enum(["instant", "on_completion"]),
  min_redemption_amount: number({ invalid_type_error: "Required" }).min(0, "Min 0"),
  expiry_days: number({ invalid_type_error: "Required" }).min(1, "Min 1")
});
const DEFAULT_VALUES = {
  name: "Cashback Program",
  credit_timing: "instant",
  min_redemption_amount: 10,
  expiry_days: 365
};
function CashbackProgramDialog({ open, onClose, program, organizationId }) {
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(CashbackProgramSchema),
    defaultValues: DEFAULT_VALUES,
    values: program ? {
      name: program.name,
      credit_timing: program.credit_timing,
      min_redemption_amount: program.min_redemption_amount,
      expiry_days: program.expiry_days
    } : void 0
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (values) => {
    try {
      await saveCashbackProgram({
        organizationId,
        name: values.name,
        credit_timing: values.credit_timing,
        min_redemption_amount: Number(values.min_redemption_amount),
        expiry_days: Number(values.expiry_days)
      });
      toast.success("Cashback program saved");
      onClose();
    } catch (err) {
      toast.error(err.message || "Failed to save");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Cashback Program Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Program Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "min_redemption_amount",
            label: "Minimum Redemption Amount",
            type: "number",
            inputProps: { min: 0, step: 0.5 },
            InputProps: { startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" }) }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "expiry_days",
            label: "Cashback Expiry",
            type: "number",
            inputProps: { min: 1 },
            InputProps: { endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "days" }) }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isSubmitting, children: isSubmitting ? "Saving…" : "Save" })
      ] })
    ] }, `${open}-${program?.id ?? "new"}`)
  ] });
}
function useCashbackWalletColumns({ density }) {
  return reactExports.useMemo(
    () => [
      {
        field: "client_profiles",
        headerName: "Client",
        flex: 1,
        minWidth: 220,
        valueGetter: (params) => {
          if (!params) return "";
          return `${params.first_name ?? ""} ${params.last_name ?? ""}`.trim();
        },
        renderCell: (params) => {
          const client = params.row.client_profiles;
          const fullName = `${client?.first_name ?? ""} ${client?.last_name ?? ""}`.trim();
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { height: "100%" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { sx: { width: 32, height: 32, fontSize: 13 }, children: [
              client?.first_name?.[0]?.toUpperCase(),
              client?.last_name?.[0]?.toUpperCase()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", textTransform: "capitalize", children: fullName }),
              density != "compact" && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: client?.client_number })
            ] })
          ] });
        }
      },
      {
        field: "balance",
        headerName: "Balance",
        width: 140,
        type: "number",
        align: "right",
        headerAlign: "right",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { fontWeight: 700, color: "primary.main", variant: "body2", children: fCurrency(params.value) })
      },
      {
        field: "total_earned",
        headerName: "Total Earned",
        width: 150,
        type: "number",
        align: "right",
        headerAlign: "right",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(params.value) })
      },
      {
        field: "total_redeemed",
        headerName: "Total Redeemed",
        width: 160,
        type: "number",
        align: "right",
        headerAlign: "right",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(params.value) })
      },
      {
        field: "updated_at",
        headerName: "Updated",
        width: 130,
        type: "date",
        valueGetter: (value) => value ? new Date(value) : null,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: params.value ? fDate(params.value) : "—" })
      }
    ],
    [density]
  );
}
function CashbackOverviewView() {
  const { user } = useAuthContext();
  const organizationId = user?.branches?.[0]?.organization_id;
  const [activeTab, setActiveTab] = reactExports.useState("rules");
  const walletsToolbarOptions = useToolbarSettings();
  const [walletsPaginationModel, setWalletsPaginationModel] = reactExports.useState({ page: 0, pageSize: 20 });
  const [walletsSortModel, setWalletsSortModel] = reactExports.useState([{ field: "balance", sort: "desc" }]);
  const [walletsSearchQuery, setWalletsSearchQuery] = reactExports.useState("");
  const [walletsFilterItems, setWalletsFilterItems] = reactExports.useState([]);
  const [walletsColumnVisibilityModel, setWalletsColumnVisibilityModel] = reactExports.useState({});
  const programDialog = Ee();
  const ruleDialog = Ee();
  const confirmDelete = Ee();
  const [editingRule, setEditingRule] = reactExports.useState(null);
  const [deletingRuleId, setDeletingRuleId] = reactExports.useState(null);
  const { program, programLoading } = useGetCashbackProgram(organizationId);
  const { rules, rulesLoading } = useGetCashbackRules(organizationId);
  const {
    wallets,
    totalCount: walletsTotalCount,
    walletsLoading
  } = useGetCashbackWallets({
    organizationId,
    page: walletsPaginationModel.page,
    pageSize: walletsPaginationModel.pageSize,
    searchQuery: walletsSearchQuery,
    filterItems: walletsFilterItems,
    orderBy: walletsSortModel[0]?.field || "balance",
    order: walletsSortModel[0]?.sort || "desc"
  });
  const handleDeleteRule = reactExports.useCallback(async () => {
    try {
      await deleteCashbackRule(deletingRuleId, organizationId);
      toast.success("Rule deleted");
      confirmDelete.onFalse();
    } catch {
      toast.error("Failed to delete rule");
    }
  }, [deletingRuleId, organizationId, confirmDelete]);
  const handleWalletsFilterModelChange = reactExports.useCallback((newFilterModel) => {
    const searchValue = newFilterModel?.quickFilterValues?.[0] || "";
    setWalletsSearchQuery(searchValue);
    const validItems = (newFilterModel?.items ?? []).filter(
      (item) => item.value !== void 0 && item.value !== null && item.value !== ""
    );
    setWalletsFilterItems(validItems);
    setWalletsPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleWalletsSortModelChange = reactExports.useCallback((newSortModel) => {
    setWalletsSortModel(newSortModel);
  }, []);
  const walletColumns = useCashbackWalletColumns({
    density: walletsToolbarOptions.settings.density
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Cashback Program",
        links: [{ name: "Dashboard", href: "/" }, { name: "Cashback" }],
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:settings-bold" }),
              onClick: programDialog.onTrue,
              children: "Settings"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: () => {
                setEditingRule(null);
                ruleDialog.onTrue();
              },
              children: "Add Rule"
            }
          )
        ] }),
        sx: { mb: 3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          title: "Credit Timing",
          value: programLoading ? "…" : program?.credit_timing === "instant" ? "Instant" : "On Completion",
          icon: "solar:clock-circle-bold-duotone",
          color: "#1877F2"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          title: "Min Redemption",
          value: programLoading ? "…" : fCurrency(program?.min_redemption_amount ?? 0),
          icon: "solar:wallet-bold",
          color: "#FF5630"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          title: "Points Expiry",
          value: programLoading ? "…" : `${program?.expiry_days ?? 365} days`,
          icon: "solar:calendar-bold",
          color: "#FFAB00"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          title: "Active Rules",
          value: rulesLoading ? "…" : rules.filter((r) => r.is_active).length,
          icon: "solar:list-check-bold",
          color: "#00A76F"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { minHeight: 500 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Tabs,
        {
          value: activeTab,
          onChange: (_, v) => setActiveTab(v),
          sx: { px: 2, borderBottom: 1, borderColor: "divider" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: "rules", label: "Cashback Rules" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: "wallets", label: "Client Wallets" })
          ]
        }
      ),
      activeTab === "rules" && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: rulesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {}) : rules.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No cashback rules yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Cashback %" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: rules.map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { textTransform: "capitalize" }, children: rule.category === "all" ? "All Categories" : rule.category.replace(/_/g, " ") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: `${rule.cashback_percentage}%`,
              size: "small",
              color: "success",
              variant: "outlined"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: rule.is_active ? "success" : "default", children: rule.is_active ? "Active" : "Inactive" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RoleBasedGuard, { roles: ["admin"], hasContent: false, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                onClick: () => {
                  setEditingRule(rule);
                  ruleDialog.onTrue();
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                color: "error",
                onClick: () => {
                  setDeletingRuleId(rule.id);
                  confirmDelete.onTrue();
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 })
              }
            )
          ] }) })
        ] }, rule.id)) })
      ] }) }) }),
      activeTab === "wallets" && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { height: 600 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        DataGrid,
        {
          rows: wallets,
          columns: walletColumns,
          getRowId: (row) => row.id,
          loading: walletsLoading,
          pageSizeOptions: [10, 20, 50],
          paginationModel: walletsPaginationModel,
          onPaginationModelChange: setWalletsPaginationModel,
          rowCount: walletsTotalCount ?? 0,
          paginationMode: "server",
          sortingMode: "server",
          sortModel: walletsSortModel,
          onSortModelChange: handleWalletsSortModelChange,
          filterMode: "server",
          onFilterModelChange: handleWalletsFilterModelChange,
          columnVisibilityModel: walletsColumnVisibilityModel,
          onColumnVisibilityModelChange: setWalletsColumnVisibilityModel,
          pagination: walletsTotalCount > 0,
          ...walletsToolbarOptions.settings,
          slots: {
            toolbar: CashbackWalletToolbar,
            noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No client wallets yet" }),
            noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found" })
          },
          slotProps: {
            toolbar: {
              toolbarOptions: walletsToolbarOptions
            }
          },
          sx: {
            border: "none",
            [`& .${gridClasses.cell}`]: {
              alignItems: "center",
              display: "flex"
            },
            "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
              outline: "none"
            }
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CashbackProgramDialog,
      {
        open: programDialog.value,
        onClose: programDialog.onFalse,
        program,
        organizationId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CashbackRuleDialog,
      {
        open: ruleDialog.value,
        onClose: ruleDialog.onFalse,
        rule: editingRule,
        organizationId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDelete.value,
        onClose: confirmDelete.onFalse,
        title: "Delete Rule",
        content: "Are you sure you want to delete this cashback rule?",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleDeleteRule, children: "Delete" })
      }
    )
  ] });
}
function SummaryCard({ title, value, icon, color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { flex: 1, p: 2.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { sx: { width: 48, height: 48, bgcolor: `${color}22` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 24, sx: { color } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: value })
    ] })
  ] }) });
}
const metadata = { title: `Cashback Program | Dashboard - ${CONFIG.appName}` };
function CashbackPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CashbackOverviewView, {})
  ] });
}
export {
  CashbackPage as default
};
