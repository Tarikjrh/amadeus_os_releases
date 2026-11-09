import { r as reactExports, j as jsxRuntimeExports, c as Typography, L as Label, a2 as Chip, a0 as fCurrency, S as Stack, at as Switch, I as IconButton, a as Iconify, t as toast, M as MenuItem, d as Button, E as Ee, a6 as useUserBranches, a4 as DashboardContent, ao as CustomBreadcrumbs, a3 as paths, y as Card, bq as gridClasses } from "./index-B08HRm4A.js";
import { A as ADDON_CATEGORY_VALUES, a as ADDON_DEFAULT_VALUES, u as updateAddon, c as createAddon, b as ADDON_CATEGORY_OPTIONS, d as useGetAddons, e as deleteAddon, f as deleteMultipleAddons } from "./addons.constants-Dge4b02l.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import "./toolbar-core-DGb1HZrD.js";
import { u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { o as object, b as boolean, s as string, u as union, i as _enum, n as number, _ as _null } from "./schemas-BVeYYbTr.js";
import { Z as ZodIssueCode } from "./compat-Bw8VbSM1.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { L as LoadingButton } from "./LoadingButton-DJQpPOpu.js";
import { D as DataGrid } from "./DataGrid-HciY9Sqp.js";
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
import "./TableCell-B_5fJIbm.js";
import "./ToggleButton-D4MfeHtt.js";
function useAddonColumns({ onEditRow, onDeleteRow }) {
  const columns = reactExports.useMemo(
    () => [
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        minWidth: 180,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: params.value })
      },
      {
        field: "category",
        headerName: "Category",
        width: 160,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "default", children: params.value })
      },
      {
        field: "price",
        headerName: "Price",
        width: 130,
        renderCell: (params) => params.row.is_custom_price ? /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Custom", size: "small", variant: "outlined", color: "warning" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(params.value) })
      },
      {
        field: "branch_id",
        headerName: "Availability",
        width: 140,
        sortable: false,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: params.value ? "info" : "success", children: params.value ? "Branch only" : "All branches" })
      },
      {
        field: "description",
        headerName: "Description",
        flex: 1,
        minWidth: 180,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: params.value || "—" })
      },
      {
        field: "is_active",
        headerName: "Active",
        width: 80,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "center", justifyContent: "center", sx: { width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: !!params.value, size: "small", disabled: true }) })
      },
      {
        field: "actions",
        type: "actions",
        headerName: "",
        width: 80,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onEditRow(params.row), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", color: "error", onClick: () => onDeleteRow(params.row.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 }) })
        ] })
      }
    ],
    [onEditRow, onDeleteRow]
  );
  return { columns };
}
const AddonSchema = object({
  name: string().min(1, "Name is required"),
  category: _enum(ADDON_CATEGORY_VALUES, {
    errorMap: () => ({ message: "Category is required" })
  }),
  price: union([string(), number(), _null()]).optional().transform((v) => {
    if (v === "" || v === null || v === void 0) return null;
    const num = parseFloat(v);
    return Number.isNaN(num) ? null : num;
  }).nullable(),
  is_custom_price: boolean().default(false),
  description: string().nullable().optional(),
  is_active: boolean().default(true)
}).superRefine((data, ctx) => {
  if (!data.is_custom_price) {
    if (data.price === null || data.price === void 0 || data.price < 0) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "Price must be 0 or more",
        path: ["price"]
      });
    }
  }
});
function AddonCreateEditDialog({ open, onClose, addon, organizationId, branchId = null }) {
  const isEdit = !!addon;
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(AddonSchema),
    defaultValues: ADDON_DEFAULT_VALUES
  });
  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const isCustomPrice = watch("is_custom_price");
  reactExports.useEffect(() => {
    if (open) {
      reset(
        addon ? {
          name: addon.name,
          category: addon.category,
          price: addon.price ?? "",
          is_custom_price: addon.is_custom_price ?? false,
          description: addon.description ?? "",
          is_active: addon.is_active ?? true
        } : ADDON_DEFAULT_VALUES
      );
    }
  }, [open, addon, reset]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      const payload = {
        ...data,
        price: data.is_custom_price ? 0 : data.price,
        organization_id: organizationId,
        branch_id: branchId
      };
      if (isEdit) {
        await updateAddon(addon.id, payload);
        toast.success("Add-on updated!");
      } else {
        await createAddon(payload);
        toast.success("Add-on created!");
      }
      onClose();
    } catch (error) {
      toast.error(isEdit ? "Failed to update add-on" : "Failed to create add-on");
      console.error(error);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Add-on" : "New Add-on" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Name", placeholder: "e.g. Extra conditioning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "category", label: "Category", children: ADDON_CATEGORY_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "price",
            label: "Price",
            type: "number",
            disabled: isCustomPrice,
            helperText: isCustomPrice ? "Staff will set the price at checkout" : void 0,
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Checkbox,
          {
            name: "is_custom_price",
            label: "Custom price — staff enters the amount at checkout"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "description", label: "Description (optional)", multiline: true, rows: 2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "is_active", label: "Active" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: onClose, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { type: "submit", variant: "contained", loading: isSubmitting, children: isEdit ? "Save changes" : "Create add-on" })
      ] })
    ] })
  ] });
}
const NoAddonsOverlay = () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No add-ons yet" });
const NoResultsOverlay = () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found" });
function AddonListView() {
  const confirmDialog = Ee();
  const createEditDialog = Ee();
  const toolbarOptions = useToolbarSettings();
  const [selectedAddon, setSelectedAddon] = reactExports.useState(null);
  const [selectedRows, setSelectedRows] = reactExports.useState(/* @__PURE__ */ new Set());
  const [deleteTargetId, setDeleteTargetId] = reactExports.useState(null);
  const [paginationModel, setPaginationModel] = reactExports.useState({ page: 0, pageSize: 25 });
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const { primaryBranch } = useUserBranches();
  const organizationId = primaryBranch?.organization_id;
  const { addons, addonsLoading, totalCount } = useGetAddons({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    filters: { ...searchTerm && { name: searchTerm } }
  });
  const handleOpenCreate = reactExports.useCallback(() => {
    setSelectedAddon(null);
    createEditDialog.onTrue();
  }, [createEditDialog]);
  const handleEditRow = reactExports.useCallback(
    (addon) => {
      setSelectedAddon(addon);
      createEditDialog.onTrue();
    },
    [createEditDialog]
  );
  const handleDeleteRow = reactExports.useCallback(
    (id) => {
      setDeleteTargetId(id);
      setSelectedRows(/* @__PURE__ */ new Set());
      confirmDialog.onTrue();
    },
    [confirmDialog]
  );
  const handleDeleteSelected = reactExports.useCallback(() => {
    setDeleteTargetId(null);
    confirmDialog.onTrue();
  }, [confirmDialog]);
  const handleConfirmDelete = reactExports.useCallback(async () => {
    try {
      if (deleteTargetId) {
        await deleteAddon(deleteTargetId);
      } else {
        await deleteMultipleAddons([...selectedRows]);
        setSelectedRows(/* @__PURE__ */ new Set());
      }
      toast.success("Deleted successfully");
    } catch (err) {
      toast.error("Failed to delete");
      console.error(err);
    } finally {
      confirmDialog.onFalse();
      setDeleteTargetId(null);
    }
  }, [deleteTargetId, selectedRows, confirmDialog]);
  const { columns } = useAddonColumns({ onEditRow: handleEditRow, onDeleteRow: handleDeleteRow });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Add-ons",
        links: [{ name: "Dashboard", href: paths.dashboard.root }, { name: "Add-ons" }],
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
            onClick: handleOpenCreate,
            children: "New add-on"
          }
        ),
        sx: { mb: 3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      DataGrid,
      {
        rows: addons,
        columns,
        loading: addonsLoading,
        rowCount: totalCount ?? 0,
        paginationMode: "server",
        paginationModel,
        onPaginationModelChange: setPaginationModel,
        pageSizeOptions: [10, 25, 50],
        checkboxSelection: true,
        disableRowSelectionOnClick: true,
        slots: {
          noRowsOverlay: NoAddonsOverlay,
          noResultsOverlay: NoResultsOverlay
        },
        slotProps: {
          toolbar: {
            ...toolbarOptions.slotProps?.toolbar,
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 350,
              onChange: (e) => setSearchTerm(e.target.value)
            }
          }
        },
        sx: {
          [`& .${gridClasses.cell}`]: { alignItems: "center", display: "inline-flex" },
          minHeight: 400
        }
      }
    ) }),
    selectedRows.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "soft",
        color: "error",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
        onClick: handleDeleteSelected,
        sx: { mt: 2 },
        children: [
          "Delete selected (",
          selectedRows.size,
          ")"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddonCreateEditDialog,
      {
        open: createEditDialog.value,
        onClose: createEditDialog.onFalse,
        addon: selectedAddon,
        organizationId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: confirmDialog.onFalse,
        title: "Delete",
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: deleteTargetId ? "Are you sure you want to delete this add-on?" : `Are you sure you want to delete ${selectedRows.size} add-on${selectedRows.size > 1 ? "s" : ""}?` }),
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleConfirmDelete, children: "Delete" })
      }
    )
  ] });
}
const metadata = { title: "Add-ons" };
function AddonsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddonListView, {})
  ] });
}
export {
  AddonsPage as default
};
