import { j as jsxRuntimeExports, y as Card, S as Stack, al as Avatar, a as Iconify, B as Box, c as Typography, r as reactExports, t as toast, M as MenuItem, d as Button, a2 as Chip, a1 as LinearProgress, c6 as fNumber, T as Tooltip, I as IconButton, L as Label, an as fDate, bq as gridClasses, a6 as useUserBranches, E as Ee, a4 as DashboardContent, ao as CustomBreadcrumbs, ap as Tabs, aq as Tab, C as CONFIG } from "./index-B08HRm4A.js";
import { b as useGetLoyaltyProgram, s as saveLoyaltyTier, c as saveLoyaltyProgram, u as useGetLoyaltyTiers, d as useGetLoyaltyTransactions, e as deleteLoyaltyTier } from "./loyalty-service-D710t09P.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { o as object, s as string, b as boolean } from "./schemas-BVeYYbTr.js";
import { n as number } from "./coerce-5-WTXoHr.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, C as CustomToolbarQuickFilter, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { T as Toolbar, D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./with-selector-ClfCuV5M.js";
import "./ExportPrint-CAqo1wR3.js";
import "./toPropertyKey-BRoQIA86.js";
import "./Skeleton-BC-WlQQE.js";
import "./TablePagination-BOFMLJYr.js";
import "./ToggleButton-D4MfeHtt.js";
function SummaryCard({ title, value, icon, color, loading }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { flex: 1, p: 2.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { sx: { width: 48, height: 48, bgcolor: `${color}22` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 24, sx: { color } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: loading ? "..." : value })
    ] })
  ] }) });
}
const LoyaltyTierSchema = object({
  name: string().min(1, "Required"),
  min_points: number().min(0, "Must be 0 or more"),
  multiplier: number().min(1, "Must be at least 1"),
  color: string().min(1, "Required"),
  icon: string().min(1, "Required"),
  sort_order: number().min(0, "Must be 0 or more")
});
const TIER_ICONS = [
  { value: "solar:star-bold", label: "Star" },
  { value: "solar:crown-bold", label: "Crown" },
  { value: "solar:diamond-bold", label: "Diamond" },
  { value: "solar:trophy-bold", label: "Trophy" },
  { value: "solar:medal-ribbons-star-bold", label: "Medal" },
  { value: "solar:shield-bold", label: "Shield" },
  { value: "solar:fire-bold", label: "Fire" },
  { value: "solar:heart-bold", label: "Heart" },
  { value: "solar:lightning-bold", label: "Lightning" },
  { value: "solar:rocket-bold", label: "Rocket" },
  { value: "solar:gift-bold", label: "Gift" },
  { value: "solar:key-bold", label: "Key" },
  { value: "solar:leaf-bold", label: "Leaf" },
  { value: "solar:sun-bold", label: "Sun" },
  { value: "solar:snowflake-bold", label: "Snowflake" }
];
function LoyaltyTierDialog({ open, onClose, tier, organizationId }) {
  const { program } = useGetLoyaltyProgram(organizationId);
  const [benefits, setBenefits] = reactExports.useState([]);
  const [benefitInput, setBenefitInput] = reactExports.useState("");
  const isEdit = !!tier?.id;
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(LoyaltyTierSchema),
    defaultValues: {
      name: "",
      min_points: 0,
      multiplier: 1,
      color: "#BDBDBD",
      icon: "solar:star-bold",
      sort_order: 0
    },
    values: tier ? {
      name: tier.name,
      min_points: tier.min_points,
      multiplier: tier.multiplier,
      color: tier.color,
      icon: tier.icon,
      sort_order: tier.sort_order ?? 0
    } : void 0
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const handleClose = () => {
    reset({
      name: "",
      min_points: 0,
      multiplier: 1,
      color: "#BDBDBD",
      icon: "solar:star-bold",
      sort_order: 0
    });
    setBenefits([]);
    setBenefitInput("");
    onClose();
  };
  const addBenefit = () => {
    const trimmed = benefitInput.trim();
    if (trimmed && !benefits.includes(trimmed)) {
      setBenefits((prev) => [...prev, trimmed]);
    }
    setBenefitInput("");
  };
  const removeBenefit = (b) => setBenefits((prev) => prev.filter((x) => x !== b));
  const onSubmit = handleSubmit(async (data) => {
    if (!program) {
      toast.error("No loyalty program found");
      return;
    }
    try {
      await saveLoyaltyTier({
        ...isEdit ? { id: tier.id } : {},
        programId: program.id,
        organizationId,
        name: data.name,
        min_points: Number(data.min_points),
        multiplier: Number(data.multiplier),
        color: data.color,
        icon: data.icon,
        sort_order: Number(data.sort_order),
        benefits
      });
      toast.success(isEdit ? "Tier updated" : "Tier created");
      handleClose();
    } catch (err) {
      toast.error(err.message || "Failed to save tier");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Tier" : "Add Tier" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Tier Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "min_points",
              label: "Min Points",
              type: "number",
              inputProps: { min: 0 },
              InputProps: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "pts" })
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "multiplier",
              label: "Multiplier",
              type: "number",
              inputProps: { step: 0.25, min: 1 },
              InputProps: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "×" })
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "color",
              label: "Badge Color",
              type: "color",
              InputLabelProps: { shrink: true }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "icon", label: "Icon", children: TIER_ICONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: opt.value, width: 18 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt.label })
          ] }) }, opt.value)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "Benefits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, sx: { mb: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                size: "small",
                placeholder: "e.g. Free deep conditioning",
                value: benefitInput,
                onChange: (e) => setBenefitInput(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addBenefit();
                  }
                },
                sx: { flex: 1 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", size: "small", onClick: addBenefit, children: "Add" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", gap: 0.5, children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: b, size: "small", onDelete: () => removeBenefit(b) }, b)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isSubmitting, children: isSubmitting ? "Saving…" : isEdit ? "Update" : "Create" })
      ] })
    ] })
  ] });
}
function LoyaltyTiersTable({ tiers, loading, onEdit, onDelete }) {
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {});
  if (!tiers.length) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No tiers configured" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Tier" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Min Points" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Multiplier" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Benefits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: tiers.map((tier) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Avatar,
          {
            sx: {
              width: 28,
              height: 28,
              bgcolor: tier.color,
              fontSize: 14,
              color: "#fff"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: tier.icon || "solar:star-bold", width: 16 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: tier.name })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: fNumber(tier.min_points) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Chip,
        {
          label: `${tier.multiplier}×`,
          size: "small",
          color: "primary",
          variant: "outlined"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", children: (tier.benefits || []).map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: b, size: "small", variant: "soft" }, i)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onEdit(tier), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16 }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", color: "error", onClick: () => onDelete(tier.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 }) }) })
      ] })
    ] }, tier.id)) })
  ] }) }) });
}
function LoyaltyLedgerToolbar({ settings, onChangeSettings }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarLeftPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarQuickFilter, { size: "small" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarColumnsButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, {}),
      settings && /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarSettingsButton, { settings, onChangeSettings })
    ] })
  ] }) });
}
const TX_TYPE_LABEL = {
  earn_sale: { label: "Sale Earn", color: "success" },
  earn_birthday: { label: "Birthday Bonus", color: "info" },
  earn_first_visit: { label: "First Visit", color: "info" },
  earn_referral: { label: "Referral", color: "info" },
  redeem: { label: "Redeemed", color: "warning" },
  expire: { label: "Expired", color: "error" },
  adjust: { label: "Adjustment", color: "default" }
};
function LoyaltyLedgerTable({
  transactions,
  loading,
  totalCount,
  page,
  pageSize,
  onPageChange,
  sortModel,
  onSortModelChange,
  filterModel,
  onFilterModelChange
}) {
  const toolbarOptions = useToolbarSettings();
  const handlePaginationModelChange = (model) => {
    if (model.pageSize !== pageSize) ;
    onPageChange(model.page);
  };
  const columns = reactExports.useMemo(
    () => [
      {
        field: "client",
        headerName: "Client",
        flex: 1,
        minWidth: 160,
        sortable: false,
        valueGetter: (_, row) => {
          if (!row.client_profiles) return "—";
          return `${row.client_profiles.first_name} ${row.client_profiles.last_name}`;
        },
        renderCell: (params) => {
          if (!params.row.client_profiles) return "—";
          return `${params.row.client_profiles.first_name} ${params.row.client_profiles.last_name}`;
        }
      },
      {
        field: "type",
        headerName: "Type",
        width: 140,
        sortable: true,
        type: "singleSelect",
        valueOptions: Object.keys(TX_TYPE_LABEL),
        renderCell: (params) => {
          const meta = TX_TYPE_LABEL[params.row.type] || {
            label: params.row.type,
            color: "default"
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: meta.color, children: meta.label });
        }
      },
      {
        field: "points",
        headerName: "Points",
        width: 120,
        align: "right",
        headerAlign: "right",
        sortable: true,
        type: "number",
        // valueFormatter: (value) => (value > 0 ? `+${value}` : `-${value}`),
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "body2",
            color: params.row.points > 0 ? "success.main" : "error.main",
            fontWeight: 600,
            children: params.row.points > 0 ? `+${params.row.points}` : params.row.points
          }
        )
      },
      {
        field: "balance_after",
        headerName: "Balance After",
        width: 140,
        align: "right",
        headerAlign: "right",
        sortable: true,
        type: "number",
        renderCell: (params) => fNumber(params.row.balance_after)
      },
      {
        field: "created_at",
        headerName: "Date",
        width: 140,
        sortable: true,
        type: "dateTime",
        valueGetter: (value) => value ? new Date(value) : null,
        renderCell: (params) => fDate(params.row.created_at)
      },
      {
        field: "notes",
        headerName: "Notes",
        flex: 1,
        minWidth: 200,
        sortable: false,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: params.row.notes || "—" })
      }
    ],
    []
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      sx: {
        minHeight: 480,
        flexGrow: { md: 1 },
        display: { md: "flex" },
        flexDirection: { md: "column" }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        DataGrid,
        {
          ...toolbarOptions.settings,
          rows: transactions,
          columns,
          loading,
          rowCount: totalCount,
          paginationMode: "server",
          paginationModel: { page, pageSize },
          onPaginationModelChange: handlePaginationModelChange,
          pageSizeOptions: [20],
          getRowHeight: () => "auto",
          disableRowSelectionOnClick: true,
          sortingMode: "server",
          sortModel,
          onSortModelChange,
          filterMode: "server",
          filterModel,
          onFilterModelChange,
          slots: {
            toolbar: LoyaltyLedgerToolbar,
            noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No transactions yet" }),
            noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found" })
          },
          slotProps: {
            toolbar: {
              settings: toolbarOptions.settings,
              onChangeSettings: toolbarOptions.onChangeSettings
            }
          },
          sx: {
            [`& .${gridClasses.cell}`]: {
              display: "flex",
              alignItems: "center",
              paddingTop: 1,
              paddingBottom: 1
            }
          }
        }
      )
    }
  );
}
const LoyaltyProgramSchema = object({
  name: string().min(1, "Required"),
  points_per_usd: number().min(0.01, "Must be at least 0.01"),
  is_active: boolean(),
  birthday_bonus: number().min(0, "Must be 0 or more"),
  first_visit_bonus: number().min(0, "Must be 0 or more"),
  referral_bonus: number().min(0, "Must be 0 or more")
});
const defaultValues = {
  name: "",
  points_per_usd: 1,
  is_active: true,
  birthday_bonus: 100,
  first_visit_bonus: 50,
  referral_bonus: 75
};
function LoyaltyProgramDialog({ open, onClose, program, organizationId }) {
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(LoyaltyProgramSchema),
    defaultValues: program ? {
      name: program.name,
      points_per_usd: program.points_per_usd,
      is_active: program.is_active,
      birthday_bonus: program.settings?.birthday_bonus ?? 100,
      first_visit_bonus: program.settings?.first_visit_bonus ?? 50,
      referral_bonus: program.settings?.referral_bonus ?? 75
    } : defaultValues
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (values) => {
    try {
      await saveLoyaltyProgram({
        organizationId,
        name: values.name,
        points_per_usd: values.points_per_usd,
        is_active: values.is_active,
        settings: {
          birthday_bonus: values.birthday_bonus,
          first_visit_bonus: values.first_visit_bonus,
          referral_bonus: values.referral_bonus
        }
      });
      toast.success("Loyalty program saved");
      onClose();
    } catch (err) {
      toast.error(err.message || "Failed to save program");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Loyalty Program Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Program Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "points_per_usd",
          label: "Points per USD spent",
          type: "number",
          InputProps: {
            endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "pts / $" })
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "Bonus Points" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "birthday_bonus",
              label: "Birthday Bonus",
              type: "number",
              InputProps: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "pts" })
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "first_visit_bonus",
              label: "First Visit Bonus",
              type: "number",
              InputProps: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "pts" })
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "referral_bonus",
              label: "Referral Bonus",
              type: "number",
              InputProps: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "pts" })
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Switch, { name: "is_active", label: "Program is Active" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, disabled: isSubmitting, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", loading: isSubmitting, disabled: isSubmitting, children: isSubmitting ? "Saving…" : "Save" })
    ] })
  ] }, `${open}-${program?.id ?? "new"}`) });
}
const SUMMARY_CARDS = [
  {
    title: "Points / USD",
    getValue: (p) => `${p.points_per_usd}×`,
    icon: "solar:dollar-minimalistic-bold",
    color: "#1877F2"
  },
  {
    title: "Birthday Bonus",
    getValue: (p) => `${p.settings?.birthday_bonus ?? 0} pts`,
    icon: "solar:gift-bold",
    color: "#FF5630"
  },
  {
    title: "First Visit Bonus",
    getValue: (p) => `${p.settings?.first_visit_bonus ?? 0} pts`,
    icon: "solar:star-bold",
    color: "#FFAB00"
  },
  {
    title: "Referral Bonus",
    getValue: (p) => `${p.settings?.referral_bonus ?? 0} pts`,
    icon: "solar:users-group-rounded-bold",
    color: "#00A76F"
  }
];
const TX_PAGE_SIZE = 20;
function LoyaltyOverviewView() {
  const { primaryBranch } = useUserBranches();
  const organizationId = primaryBranch?.organization_id ?? null;
  const [activeTab, setActiveTab] = reactExports.useState("program");
  const [txPage, setTxPage] = reactExports.useState(0);
  const [sortModel, setSortModel] = reactExports.useState([]);
  const [filterModel, setFilterModel] = reactExports.useState({ items: [] });
  const [debouncedFilterModel, setDebouncedFilterModel] = reactExports.useState({ items: [] });
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebouncedFilterModel(filterModel), 400);
    return () => clearTimeout(timer);
  }, [filterModel]);
  const programDialog = Ee();
  const tierDialog = Ee();
  const confirmDelete = Ee();
  const [editingTier, setEditingTier] = reactExports.useState(null);
  const [deletingTierId, setDeletingTierId] = reactExports.useState(null);
  const { program, programLoading } = useGetLoyaltyProgram(organizationId);
  const { tiers, tiersLoading } = useGetLoyaltyTiers(organizationId);
  const { transactions, totalCount, transactionsLoading } = useGetLoyaltyTransactions({
    organizationId: activeTab === "ledger" ? organizationId : null,
    page: txPage,
    pageSize: TX_PAGE_SIZE,
    sortModel,
    filterModel: debouncedFilterModel
  });
  const summaryValues = reactExports.useMemo(
    () => SUMMARY_CARDS.map((card) => program ? card.getValue(program) : "—"),
    [program]
  );
  const handleTabChange = reactExports.useCallback((_, v) => setActiveTab(v), []);
  const handleSortModelChange = reactExports.useCallback((newSortModel) => {
    setSortModel(newSortModel);
    setTxPage(0);
  }, []);
  const handleFilterModelChange = reactExports.useCallback((newFilterModel) => {
    setFilterModel(newFilterModel);
    setTxPage(0);
  }, []);
  const handleAddTier = reactExports.useCallback(() => {
    setEditingTier(null);
    tierDialog.onTrue();
  }, [tierDialog]);
  const handleDeleteTier = reactExports.useCallback(async () => {
    try {
      await deleteLoyaltyTier(deletingTierId, organizationId);
      toast.success("Tier deleted");
      confirmDelete.onFalse();
    } catch (err) {
      toast.error("Failed to delete tier");
    }
  }, [deletingTierId, organizationId, confirmDelete]);
  const handleEditTier = reactExports.useCallback(
    (tier) => {
      setEditingTier(tier);
      tierDialog.onTrue();
    },
    [tierDialog]
  );
  const handleDeleteTierClick = reactExports.useCallback(
    (tierId) => {
      setDeletingTierId(tierId);
      confirmDelete.onTrue();
    },
    [confirmDelete]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Loyalty Program",
        links: [{ name: "Dashboard", href: "/" }, { name: "Loyalty" }],
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:settings-bold" }),
              onClick: programDialog.onTrue,
              children: "Program Settings"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: handleAddTier,
              children: "Add Tier"
            }
          )
        ] }),
        sx: { mb: 3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, sx: { mb: 3 }, children: SUMMARY_CARDS.map((card, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      SummaryCard,
      {
        title: card.title,
        value: summaryValues[index],
        icon: card.icon,
        color: card.color,
        loading: programLoading
      },
      card.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { minHeight: 500 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Tabs,
        {
          value: activeTab,
          onChange: handleTabChange,
          sx: { px: 2, borderBottom: 1, borderColor: "divider" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: "program", label: "Tiers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: "ledger", label: "Points Ledger" })
          ]
        }
      ),
      activeTab === "program" && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoyaltyTiersTable,
        {
          tiers,
          loading: tiersLoading,
          onEdit: handleEditTier,
          onDelete: handleDeleteTierClick
        }
      ) }),
      activeTab === "ledger" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoyaltyLedgerTable,
        {
          transactions,
          loading: transactionsLoading,
          totalCount,
          page: txPage,
          pageSize: TX_PAGE_SIZE,
          onPageChange: setTxPage,
          sortModel,
          onSortModelChange: handleSortModelChange,
          filterModel,
          onFilterModelChange: handleFilterModelChange
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LoyaltyProgramDialog,
      {
        open: programDialog.value,
        onClose: programDialog.onFalse,
        program,
        organizationId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LoyaltyTierDialog,
      {
        open: tierDialog.value,
        onClose: tierDialog.onFalse,
        tier: editingTier,
        organizationId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDelete.value,
        onClose: confirmDelete.onFalse,
        title: "Delete Tier",
        content: "Are you sure you want to delete this tier?",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleDeleteTier, children: "Delete" })
      }
    )
  ] });
}
const metadata = { title: `Loyalty Program | Dashboard - ${CONFIG.appName}` };
function LoyaltyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoyaltyOverviewView, {})
  ] });
}
export {
  LoyaltyPage as default
};
