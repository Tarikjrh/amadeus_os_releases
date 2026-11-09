import { r as reactExports, bh as updateBranch, t as toast, bi as createBranch, j as jsxRuntimeExports, y as Card, c as Typography, S as Stack, M as MenuItem, I as IconButton, a as Iconify, d as Button, bj as getAllCountries, E as Ee, bk as deleteBranch, bl as getAllBranches, bm as ListItemText, L as Label, a4 as DashboardContent, ao as CustomBreadcrumbs, a3 as paths, C as CONFIG, bn as RoleBasedGuard } from "./index-B08HRm4A.js";
import { i as isValidPhoneNumber, f as formatPhoneNumberIntl } from "./index-C4JOln-R.js";
import { r as renderLocationType } from "./render-location-type-B-TZb61z.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import "./toolbar-core-DGb1HZrD.js";
import { C as CustomGridActionsCellItem } from "./grid-actions-cell-item-GDL6dx4W.js";
import { a as useForm, b as u, c as useFieldArray, F as Form, C as Controller } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { s as schemaUtils } from "./schema-utils-CG9_JlGr.js";
import { S as StylistColorPicker } from "./stylist-color-picker-BOdxdsi0.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { o as object, s as string, i as _enum, b as boolean, l as literal, a as array } from "./schemas-BVeYYbTr.js";
import { D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./ExportPrint-CAqo1wR3.js";
import "./TextField-CIuP940C.js";
import "./InputAdornment-BqZyQBIE.js";
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
const TIMEZONE_OPTIONS = Intl.supportedValuesOf("timeZone");
const BranchSchema = object({
  country_id: string().min(1, { message: "Country is required!" }),
  phones: array(
    object({
      value: schemaUtils.phoneNumber({ isValid: isValidPhoneNumber }).optional().nullable()
    })
  ).optional(),
  name: string().min(1, { message: "Branch name is required!" }),
  slug: string().min(1, { message: "Branch slug is required!" }),
  address: string().optional(),
  city: string().optional(),
  state: string().optional(),
  postal_code: string().optional(),
  email: string().email().optional().or(literal("")),
  is_active: boolean().default(true),
  location_type: _enum(["branch", "warehouse"]).default("branch"),
  timezone: string().min(1, { message: "Timezone is required!" }),
  calendar_color: string().nullable().optional()
});
function BranchCreateEditForm({ open, onClose, branch, onSuccess }) {
  const [countries, setCountries] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const isEdit = !!branch;
  const defaultValues = {
    country_id: branch?.country_id || "",
    name: branch?.name || "",
    slug: branch?.slug || "",
    address: branch?.address || "",
    city: branch?.city || "",
    state: branch?.state || "",
    postal_code: branch?.postal_code || "",
    phones: branch?.phones?.length ? branch.phones.map((v) => ({ value: v })) : [{ value: null }],
    email: branch?.email || "",
    is_active: branch?.is_active ?? true,
    location_type: branch?.location_type || "branch",
    timezone: branch?.timezone || "Asia/Beirut",
    calendar_color: branch?.calendar_color || null
  };
  const methods = useForm({
    resolver: u(BranchSchema),
    defaultValues
  });
  const { handleSubmit, reset, control } = methods;
  const { fields, append, remove } = useFieldArray({ control, name: "phones" });
  reactExports.useEffect(() => {
    const loadCountries = async () => {
      const { data } = await getAllCountries();
      setCountries(data || []);
    };
    loadCountries();
  }, []);
  reactExports.useEffect(() => {
    if (open) {
      reset(defaultValues);
    }
  }, [open, branch, reset]);
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const phonesArray = (data.phones || []).map((p) => p.value).filter(Boolean);
      const branchData = {
        ...data,
        timezone: data.timezone || "UTC",
        email: data.email || null,
        address: data.address || null,
        city: data.city || null,
        state: data.state || null,
        postal_code: data.postal_code || null,
        phones: phonesArray,
        phone: phonesArray[0] || null
      };
      if (isEdit) {
        const { error } = await updateBranch(branch.id, branchData);
        if (error) throw error;
        toast.success("Branch updated successfully!");
      } else {
        const { error } = await createBranch(branchData);
        if (error) throw error;
        toast.success("Branch created successfully!");
      }
      onSuccess();
    } catch (error) {
      console.error("Error saving branch:", error);
      toast.error(`Failed to ${isEdit ? "update" : "create"} branch`);
    } finally {
      setLoading(false);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Branch" : "Create New Branch" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { pb: 0.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, border: "1px solid", borderColor: "divider" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 3 }, children: "Basic Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "country_id", label: "Country", required: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "Select Country" }),
              countries.map((country) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: country.id, children: [
                country.name,
                " (",
                country.code,
                ")"
              ] }, country.id))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Branch Name", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "slug", label: "Branch Slug", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "address", label: "Address", multiline: true, rows: 2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "city", label: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "state", label: "State" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "postal_code", label: "Postal Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Autocomplete,
              {
                name: "timezone",
                label: "Timezone",
                options: TIMEZONE_OPTIONS,
                placeholder: "Select timezone"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Grid,
          {
            item: true,
            size: { xs: 12, md: 6 },
            sx: { gap: 1.5, display: "flex", flexDirection: "column" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, border: "1px solid", borderColor: "divider" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 3 }, children: "Contact Information" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
                  fields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "flex-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Field.Phone,
                      {
                        name: `phones.${index}.value`,
                        label: index === 0 ? "Primary Phone" : `Phone ${index + 1}`,
                        defaultCountry: "LB",
                        sx: { flex: 1 }
                      }
                    ),
                    fields.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        onClick: () => remove(index),
                        sx: { mt: 1 },
                        color: "error",
                        size: "small",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" })
                      }
                    )
                  ] }, field.id)),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "small",
                      startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
                      onClick: () => append({ value: null }),
                      sx: { alignSelf: "flex-start" },
                      children: "Add Phone"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "email", label: "Email Address" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, border: "1px solid", borderColor: "divider" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 3 }, children: "Location Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Field.RadioGroup,
                  {
                    name: "location_type",
                    label: "Location Type",
                    options: [
                      { label: "Branch", value: "branch" },
                      { label: "Warehouse", value: "warehouse" }
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, border: "1px solid", borderColor: "divider" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 0.5 }, children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Switch, { name: "is_active", label: "Active" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, border: "1px solid", borderColor: "divider" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "Calendar Color" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Controller,
                  {
                    name: "calendar_color",
                    control,
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(StylistColorPicker, { value: field.value, onChange: field.onChange })
                  }
                )
              ] })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", variant: "contained", loading, children: [
          isEdit ? "Update" : "Create",
          " Branch"
        ] })
      ] })
    ] })
  ] });
}
function BranchesListView() {
  const confirmDialog = Ee();
  const createEditDialog = Ee();
  const [tableData, setTableData] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [selectedBranch, setSelectedBranch] = reactExports.useState(null);
  const [filters, setFilters] = reactExports.useState({
    search: ""
  });
  const dataFiltered = reactExports.useMemo(() => {
    const { search } = filters;
    let filteredData = tableData;
    if (search) {
      filteredData = tableData.filter(
        (branch) => branch.name?.toLowerCase().includes(search.toLowerCase()) || branch.city?.toLowerCase().includes(search.toLowerCase()) || branch.slug?.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filteredData;
  }, [tableData, filters]);
  const handleDeleteRow = reactExports.useCallback(async (id) => {
    try {
      const { error } = await deleteBranch(id);
      if (error) throw error;
      setTableData((prev) => prev.filter((row) => row.id !== id));
      toast.success("Branch deleted successfully!");
    } catch (error) {
      console.error("Error deleting branch:", error);
      toast.error("Failed to delete branch");
    }
  }, []);
  const handleEditRow = reactExports.useCallback(
    (row) => {
      setSelectedBranch(row);
      createEditDialog.onTrue();
    },
    [createEditDialog]
  );
  const handleCreateNew = reactExports.useCallback(() => {
    setSelectedBranch(null);
    createEditDialog.onTrue();
  }, [createEditDialog]);
  const handleCloseDialog = reactExports.useCallback(() => {
    createEditDialog.onFalse();
    setSelectedBranch(null);
  }, [createEditDialog]);
  const handleRefresh = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await getAllBranches();
      if (error) throw error;
      setTableData(data || []);
    } catch (error) {
      console.error("Error fetching branches:", error);
      toast.error("Failed to load branches");
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    handleRefresh();
  }, []);
  const columns = reactExports.useMemo(
    () => [
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        minWidth: 160
      },
      {
        field: "city",
        headerName: "City",
        flex: 1,
        minWidth: 120,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ListItemText,
          {
            primary: params.row.city || "-",
            secondary: params.row.country?.name,
            slotProps: {
              primary: { typography: "body2", noWrap: true },
              secondary: { component: "span", typography: "caption" }
            }
          }
        )
      },
      {
        field: "phones",
        headerName: "Phone",
        flex: 1,
        minWidth: 140,
        renderCell: (params) => {
          const phoneList = params.row.phones?.length ? params.row.phones : params.row.phone ? [params.row.phone] : [];
          if (!phoneList.length) return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "-" });
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0.25, children: phoneList.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: formatPhoneNumberIntl(p) || p }, i)) });
        }
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        minWidth: 160
      },
      {
        field: "is_active",
        headerName: "Status",
        width: 100,
        type: "singleSelect",
        valueOptions: [
          { value: true, label: "Active" },
          { value: false, label: "Inactive" }
        ],
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: params.row.is_active ? "success" : "error", children: params.row.is_active ? "Active" : "Inactive" })
      },
      {
        field: "location_type",
        headerName: "Location Type",
        width: 120,
        type: "singleSelect",
        valueOptions: [
          { value: "warehouse", label: "Warehouse" },
          { value: "branch", label: "Branch" }
        ],
        renderCell: (params) => renderLocationType(params.row.location_type)
      },
      {
        type: "actions",
        field: "actions",
        headerName: "Actions",
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
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              label: "Edit",
              onClick: () => handleEditRow(params.row)
            },
            "edit"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-minimalistic-bold" }),
              label: "Delete",
              onClick: () => {
                confirmDialog.onTrue();
                setSelectedBranch(params.row);
              },
              sx: { color: "error.main" }
            },
            "delete"
          )
        ]
      }
    ],
    [handleEditRow, confirmDialog]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomBreadcrumbs,
        {
          heading: "Branches",
          links: [{ name: "Dashboard", href: paths.dashboard.root }, { name: "Branches" }],
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: handleCreateNew,
              children: "New Branch"
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
            height: { xs: 800, md: "1px" },
            flexDirection: { md: "column" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DataGrid,
            {
              rows: dataFiltered,
              columns,
              loading,
              pageSizeOptions: [5, 10, 25],
              slots: {
                noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No locations found" }),
                noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No locations found" })
              },
              initialState: {
                pagination: { paginationModel: { pageSize: 10 } }
              }
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BranchCreateEditForm,
      {
        open: createEditDialog.value,
        onClose: handleCloseDialog,
        branch: selectedBranch,
        onSuccess: () => {
          handleRefresh();
          handleCloseDialog();
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: confirmDialog.onFalse,
        title: "Delete Branch",
        content: `Are you sure you want to delete "${selectedBranch?.name}"? This action cannot be undone.`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: () => {
              handleDeleteRow(selectedBranch?.id);
              confirmDialog.onFalse();
            },
            children: "Delete"
          }
        )
      }
    )
  ] });
}
const metadata = { title: `Branches | Dashboard - ${CONFIG.appName}` };
function BranchesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBasedGuard, { roles: ["admin"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(BranchesListView, {}) })
  ] });
}
export {
  BranchesPage as default
};
