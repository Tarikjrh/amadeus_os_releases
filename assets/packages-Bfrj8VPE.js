import { j as jsxRuntimeExports, a as Iconify, x as Select, M as MenuItem, r as reactExports, S as Stack, c as Typography, a2 as Chip, a1 as LinearProgress, L as Label, a0 as fCurrency, E as Ee, t as toast, y as Card, bq as gridClasses, d as Button, B as Box, K as Divider, b as CircularProgress, T as Tooltip, av as useAuthContext, bY as usePermissions, a4 as DashboardContent, ao as CustomBreadcrumbs, ap as Tabs, aq as Tab, C as CONFIG } from "./index-B08HRm4A.js";
import { toFirstOfMonth, formatPackageMonth, useGetAllClientPackagesServer, cancelClientPackage, updatePackageTemplate, createPackageTemplate, reactivatePackageTemplate, useGetPackageTemplatesServer, deletePackageTemplate, finalizeExpiredPackageCommissions } from "./package-service-U57UHzc2.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton, C as CustomToolbarQuickFilter } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { A as AssignPackageDialog, P as PackageStylistSplitDialog, a as PALETTE_COLORS } from "./package-stylist-split-dialog-CJ7q79E2.js";
import { T as TextField, F as FormControl, I as InputLabel } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { T as Toolbar, D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import { C as CustomGridActionsCellItem } from "./grid-actions-cell-item-GDL6dx4W.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { h as useGetServices, b as SERVICE_GROUPS } from "./services-UhlA7T7c.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { o as object, a as array, s as string, r as record, p as preprocess, n as number, k as any } from "./schemas-BVeYYbTr.js";
import { n as number$1 } from "./coerce-5-WTXoHr.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { A as Accordion, a as AccordionSummary, b as AccordionDetails } from "./AccordionDetails-O5tQthbm.js";
import { P as PackageServicesDialog } from "./package-services-dialog-B7t0UyM9.js";
import "./ExportPrint-CAqo1wR3.js";
import "./sale-service-CWyXC78v.js";
import "./branch-select--7cbYlRe.js";
import "./render-location-type-B-TZb61z.js";
import "./client-autocomplete-C_9PlkEm.js";
import "./index-C4JOln-R.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./client-service-swr-DnF01Wop.js";
import "./index-Dha6iQ4E.js";
import "./Autocomplete-BReuRGf-.js";
import "./toPropertyKey-BRoQIA86.js";
import "./with-selector-ClfCuV5M.js";
import "./Skeleton-BC-WlQQE.js";
import "./TablePagination-BOFMLJYr.js";
import "./TableCell-B_5fJIbm.js";
import "./ToggleButton-D4MfeHtt.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
function buildMonthOptions() {
  const opts = [{ label: "All", value: "all" }];
  const now = /* @__PURE__ */ new Date();
  for (let i = -3; i <= 5; i += 1) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const iso = toFirstOfMonth(d);
    opts.push({
      label: d.toLocaleString("en-US", { month: "long", year: "numeric" }),
      value: iso
    });
  }
  const [all, ...months] = opts;
  return [all, ...months.reverse()];
}
const MONTH_OPTIONS = buildMonthOptions();
function PackagesTableToolbar({
  selectedMonth,
  onChangeMonth,
  clientSearch,
  onClientSearchChange,
  settings,
  onChangeSettings
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarLeftPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          size: "small",
          placeholder: "Filter by client name",
          value: clientSearch,
          onChange: (e) => onClientSearchChange(e.target.value),
          sx: { minWidth: 200 },
          slotProps: {
            input: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:person-outline", width: 18, sx: { color: "text.disabled" } }) })
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", sx: { minWidth: 180 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Month" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            label: "Month",
            value: selectedMonth,
            onChange: (e) => onChangeMonth(e.target.value),
            children: MONTH_OPTIONS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: m.value, children: m.label }, m.value))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarColumnsButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, {}),
      settings && /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarSettingsButton, { settings, onChangeSettings })
    ] })
  ] }) });
}
function usePackageManagementColumns({ confirmDialog, setSplitPkg, setCancellingPkg }) {
  return reactExports.useMemo(
    () => [
      {
        field: "client",
        headerName: "Client",
        flex: 1,
        minWidth: 130,
        valueGetter: (params) => {
          const c = params?.row?.client_profiles;
          return c ? `${c.first_name} ${c.last_name}` : "—";
        },
        renderCell: ({ row }) => {
          const c = row.client_profiles;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { textTransform: "capitalize" }, variant: "body2", fontWeight: 600, children: c ? `${c.first_name} ${c.last_name}` : "—" }),
            c?.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: c.phone })
          ] });
        }
      },
      {
        field: "package",
        headerName: "Package",
        flex: 1,
        minWidth: 130,
        align: "left",
        renderCell: ({ row }) => {
          const tpl = row.package_templates;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "flex-start", justifyContent: "center", sx: { height: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: tpl?.name ?? "—",
              sx: {
                bgcolor: tpl?.color || "#00B8D9",
                color: "#fff",
                fontWeight: 600
              }
            }
          ) });
        }
      },
      {
        field: "valid_month",
        headerName: "Month",
        width: 140,
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { display: "flex", alignItems: "center", height: 1 }, children: formatPackageMonth(value) })
      },
      {
        field: "uses_count",
        headerName: "Uses",
        width: 140,
        type: "number",
        align: "left",
        headerAlign: "left",
        renderCell: ({ row }) => {
          const tpl = row.package_templates;
          const max = row.max_uses_override ?? tpl?.max_uses_per_month ?? null;
          const used = row.uses_count ?? 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-start", justifyContent: "center", sx: { height: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", children: [
              used,
              max ? ` / ${max}` : " used"
            ] }),
            max && /* @__PURE__ */ jsxRuntimeExports.jsx(
              LinearProgress,
              {
                variant: "determinate",
                value: Math.min(used / max * 100, 100),
                color: used >= max ? "error" : "primary",
                sx: { height: 6, borderRadius: 1 }
              }
            )
          ] });
        }
      },
      {
        field: "status",
        headerName: "Status",
        width: 110,
        sortable: true,
        type: "singleSelect",
        editable: true,
        valueOptions: ["active", "expired", "cancelled", "paused"],
        renderCell: ({ value }) => {
          const map = {
            active: "success",
            expired: "default",
            cancelled: "error",
            paused: "warning"
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "flex-start", justifyContent: "center", sx: { height: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: map[value] || "default", children: value }) });
        }
      },
      {
        field: "is_commission_finalized",
        headerName: "Finalized",
        width: 100,
        type: "singleSelect",
        editable: true,
        valueOptions: [
          { value: true, label: "Yes" },
          { value: false, label: "No" }
        ],
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "flex-start", justifyContent: "center", sx: { height: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: value ? "success" : "default", children: value ? "Yes" : "No" }) })
      },
      {
        field: "price_paid",
        headerName: "Price paid",
        width: 110,
        type: "number",
        align: "left",
        headerAlign: "left",
        renderCell: ({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(row.price_paid) })
      },
      {
        field: "actions",
        type: "actions",
        headerName: "",
        width: 100,
        getActions: ({ row }) => [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:chart-square-bold" }),
              label: "Stylist split",
              onClick: () => setSplitPkg(row),
              showInMenu: false
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold" }),
              label: "Cancel package",
              onClick: () => {
                setCancellingPkg(row);
                confirmDialog.onTrue();
              },
              sx: { color: "error.main" },
              showInMenu: false
            }
          )
        ]
      }
    ],
    [confirmDialog, setSplitPkg, setCancellingPkg]
  );
}
function PackagesTab({ organizationId, branchId, userId, assignDialog }) {
  const confirmDialog = Ee();
  const packagesToolbarOptions = useToolbarSettings();
  const startOfThisMonth = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const iso = toFirstOfMonth(startOfThisMonth);
  const [selectedMonth, setSelectedMonth] = reactExports.useState(iso);
  const [cancellingPkg, setCancellingPkg] = reactExports.useState(null);
  const [splitPkg, setSplitPkg] = reactExports.useState(null);
  const [clientSearch, setClientSearch] = reactExports.useState("");
  const [debouncedClientSearch, setDebouncedClientSearch] = reactExports.useState("");
  const [paginationModel, setPaginationModel] = reactExports.useState({ page: 0, pageSize: 10 });
  const [sortModel, setSortModel] = reactExports.useState([]);
  const [pendingFilterModel, setPendingFilterModel] = reactExports.useState({ items: [] });
  const [debouncedFilterModel, setDebouncedFilterModel] = reactExports.useState({ items: [] });
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebouncedFilterModel(pendingFilterModel), 400);
    return () => clearTimeout(timer);
  }, [pendingFilterModel]);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebouncedClientSearch(clientSearch), 400);
    return () => clearTimeout(timer);
  }, [clientSearch]);
  const filterMonth = selectedMonth === "all" ? null : selectedMonth;
  const { allPackages, allPackagesTotal, allPackagesLoading } = useGetAllClientPackagesServer(
    organizationId,
    {
      month: filterMonth,
      paginationModel,
      sortModel,
      filterModel: debouncedFilterModel,
      clientSearch: debouncedClientSearch
    }
  );
  const handleCancelPackage = reactExports.useCallback(
    async (pkg) => {
      try {
        const { error } = await cancelClientPackage(pkg.id, pkg.client_id, organizationId);
        if (error) throw error;
        toast.success("Package cancelled");
        confirmDialog.onFalse();
        setCancellingPkg(null);
      } catch {
        toast.error("Failed to cancel package");
      }
    },
    [confirmDialog, organizationId]
  );
  const handleFilterModelChange = reactExports.useCallback((model) => {
    setPendingFilterModel(model);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleSortModelChange = reactExports.useCallback((model) => {
    setSortModel(model);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleChangeMonth = reactExports.useCallback((month) => {
    setSelectedMonth(month);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleClientSearchChange = reactExports.useCallback((value) => {
    setClientSearch(value);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const packagesColumns = usePackageManagementColumns({
    confirmDialog,
    setSplitPkg,
    setCancellingPkg
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        sx: {
          border: "1px solid",
          borderColor: "divider",
          minHeight: 540,
          flexGrow: { md: 1 },
          display: { md: "flex" },
          // height: { xs: 800, md: '1px' },
          flexDirection: { md: "column" }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DataGrid,
          {
            ...packagesToolbarOptions.settings,
            rows: allPackages,
            columns: packagesColumns,
            loading: allPackagesLoading,
            paginationMode: "server",
            filterMode: "server",
            sortingMode: "server",
            rowCount: allPackagesTotal,
            paginationModel,
            onPaginationModelChange: setPaginationModel,
            sortModel,
            onSortModelChange: handleSortModelChange,
            onFilterModelChange: handleFilterModelChange,
            pageSizeOptions: [10, 25, 50],
            sx: {
              [`& .${gridClasses.row}`]: { cursor: "pointer", alignItems: "center" },
              [`& .${gridClasses.cell}`]: { py: 1 },
              border: "none"
            },
            slots: {
              toolbar: PackagesTableToolbar,
              noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No client packages found" })
            },
            slotProps: {
              toolbar: {
                selectedMonth,
                onChangeMonth: handleChangeMonth,
                clientSearch,
                onClientSearchChange: handleClientSearchChange,
                settings: packagesToolbarOptions.settings,
                onChangeSettings: packagesToolbarOptions.onChangeSettings
              }
            }
          }
        )
      }
    ),
    assignDialog.value && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AssignPackageDialog,
      {
        open: true,
        onClose: () => assignDialog.onFalse(),
        organizationId,
        branchId,
        createdBy: userId
      }
    ),
    Boolean(splitPkg) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PackageStylistSplitDialog,
      {
        open: true,
        onClose: () => setSplitPkg(null),
        clientPackage: splitPkg
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: () => {
          confirmDialog.onFalse();
          setCancellingPkg(null);
        },
        title: "Cancel package",
        content: `Cancel this package for ${cancellingPkg?.client_profiles?.first_name ?? "client"}? Existing usage records are kept.`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: () => handleCancelPackage(cancellingPkg),
            children: "Cancel package"
          }
        )
      }
    )
  ] });
}
const PackageTemplateSchema = object({
  name: string().min(1, "Name is required"),
  description: string().optional().nullable(),
  price: number$1({ invalid_type_error: "Enter a valid price" }).positive("Price is required"),
  max_uses_per_month: number$1().int().min(0).nullable().optional(),
  // Per-service max uses: { [serviceId]: number | null }
  // null means unlimited for that specific service.
  service_max_uses: record(
    string(),
    preprocess(
      (v) => v === "" || v == null ? null : Number(v),
      number().int().min(1).nullable()
    )
  ).optional().nullable(),
  color: string().default("#00B8D9"),
  service_ids: array(any()).min(1, "Select at least one service")
});
const defaultValues = {
  name: "",
  description: "",
  price: "",
  max_uses_per_month: "",
  service_max_uses: {},
  color: "#00B8D9",
  service_ids: []
};
function PackageTemplateDialog({
  open,
  onClose,
  template = null,
  organizationId,
  createdBy
}) {
  const isEdit = Boolean(template);
  const loading = Ee();
  const { services, servicesLoading } = useGetServices({ pageSize: 200 });
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(PackageTemplateSchema),
    defaultValues,
    values: template ? {
      name: template.name ?? "",
      description: template.description ?? "",
      price: template.price ?? "",
      max_uses_per_month: template.max_uses_per_month ?? "",
      service_max_uses: template.service_max_uses ?? {},
      color: template.color ?? "#00B8D9",
      service_ids: template.service_ids ?? []
    } : void 0
  });
  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const colorValue = watch("color");
  const nameValue = watch("name");
  const serviceIds = watch("service_ids");
  reactExports.useEffect(() => {
    if (!services.length || !template?.service_ids?.length) return;
    const resolved = services.filter((s) => template.service_ids.includes(s.id));
    setValue("service_ids", resolved, { shouldValidate: false });
  }, [services, template]);
  const selectedServices = serviceIds.filter((s) => s && typeof s === "object");
  const isMultiService = selectedServices.length > 1;
  const onSubmit = handleSubmit(async (data) => {
    loading.onTrue();
    try {
      const rawServiceMaxUses = data.service_max_uses ?? {};
      const cleanedServiceMaxUses = Object.fromEntries(
        Object.entries(rawServiceMaxUses).map(([k, v]) => [k, v ? Number(v) : null]).filter(([, v]) => v !== null && !Number.isNaN(v))
      );
      const payload = {
        name: data.name.trim(),
        description: data.description?.trim() || null,
        price: Number(data.price),
        // For single-service: use the max_uses_per_month field as overall + per-service
        // For multi-service: max_uses_per_month is the optional overall cap
        max_uses_per_month: data.max_uses_per_month ? Number(data.max_uses_per_month) : null,
        service_max_uses: Object.keys(cleanedServiceMaxUses).length > 0 ? cleanedServiceMaxUses : null,
        color: data.color,
        service_ids: data.service_ids.length > 0 ? data.service_ids.map((s) => typeof s === "string" ? s : s.id) : null,
        organization_id: organizationId,
        updated_by: createdBy
      };
      let result;
      if (isEdit) {
        result = await updatePackageTemplate(template.id, payload);
      } else {
        result = await createPackageTemplate({ ...payload, created_by: createdBy });
      }
      if (result.error) throw result.error;
      toast.success(isEdit ? "Package updated" : "Package created");
      reset();
      onClose(true);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong");
    } finally {
      loading.onFalse();
    }
  });
  const isInactive = isEdit && template?.is_active === false;
  const handleReactivate = async () => {
    loading.onTrue();
    try {
      const { error } = await reactivatePackageTemplate(template.id);
      if (error) throw error;
      toast.success("Package reactivated");
      onClose(true);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to reactivate package");
    } finally {
      loading.onFalse();
    }
  };
  const GROUP_LABELS = Object.fromEntries(SERVICE_GROUPS.map((g) => [g.value, g.label]));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: () => onClose(false), maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Package" : "New Package Template" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { py: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, id: "package-template-form", onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Package name", fullWidth: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "description",
          label: "Description (optional)",
          multiline: true,
          rows: 2,
          fullWidth: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Autocomplete,
        {
          name: "service_ids",
          label: "Services covered",
          multiple: true,
          disableCloseOnSelect: true,
          options: services,
          loading: servicesLoading,
          getOptionLabel: (o) => o.name,
          isOptionEqualToValue: (o, v) => o.id === v.id,
          groupBy: (o) => o.service_group ?? o.category ?? "Other",
          renderGroup: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { px: 2, py: 0.5, color: "primary.main" }, children: GROUP_LABELS[params.group] ?? params.group }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: { padding: 0 }, children: params.children })
          ] }, params.key),
          placeholder: serviceIds.length === 0 ? "Select services..." : "",
          helperText: "Select the services this package covers",
          renderTags: (selected, getTagProps) => selected.filter((option) => option && typeof option === "object").map((option, index) => /* @__PURE__ */ reactExports.createElement(
            Chip,
            {
              size: "small",
              label: option.name,
              ...getTagProps({ index }),
              key: option.id
            }
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "price",
            label: "Price",
            type: "number",
            slotProps: { htmlInput: { min: 0 } },
            fullWidth: true
          }
        ),
        !isMultiService && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "max_uses_per_month",
            label: "Max uses / month",
            type: "number",
            helperText: "Leave blank for unlimited",
            slotProps: { htmlInput: { min: 1 } },
            fullWidth: true
          }
        )
      ] }),
      isMultiService && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { mb: 2 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: "Per-service limits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, children: selectedServices.map((svc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { flex: 1 }, noWrap: true, children: svc.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: `service_max_uses.${svc.id}`,
              label: "Max / month",
              type: "number",
              helperText: "Blank = unlimited",
              slotProps: { htmlInput: { min: 1 } },
              sx: { width: 160 }
            }
          )
        ] }, svc.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 2, sx: { mt: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "max_uses_per_month",
            label: "Overall total cap / month",
            type: "number",
            helperText: "Optional hard limit across all services",
            slotProps: { htmlInput: { min: 1 } },
            fullWidth: true
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { defaultExpanded: false, sx: { boxShadow: "none", border: "none" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSummary, { expandIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-downward-fill" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: "Appearance" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          AccordionDetails,
          {
            sx: { display: "flex", flexDirection: "row", justifyContent: "space-between" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "caption",
                    color: "text.secondary",
                    sx: { mb: 1, display: "block" },
                    children: "Color"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1, children: PALETTE_COLORS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    onClick: () => setValue("color", c),
                    sx: {
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      bgcolor: c,
                      cursor: "pointer",
                      border: colorValue === c ? "3px solid" : "2px solid transparent",
                      borderColor: colorValue === c ? "text.primary" : "transparent",
                      transition: "transform 0.15s",
                      "&:hover": { transform: "scale(1.2)" }
                    }
                  },
                  c
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "caption",
                    color: "text.secondary",
                    sx: { mb: 0.5, display: "block" },
                    children: "Preview"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: nameValue || "Package name",
                    sx: { bgcolor: colorValue, color: "#fff", fontWeight: 600 }
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onClose(false), color: "inherit", disabled: loading.value, children: "Cancel" }),
      isInactive && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          color: "success",
          disabled: loading.value,
          startIcon: loading.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : null,
          onClick: handleReactivate,
          children: "Reactivate"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          form: "package-template-form",
          type: "submit",
          variant: "contained",
          disabled: loading.value || isSubmitting,
          startIcon: loading.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : null,
          children: isEdit ? "Save changes" : "Create"
        }
      )
    ] })
  ] });
}
function PackageTemplatesToolbar({ settings, onChangeSettings }) {
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
function usePackageTemplateColumns({
  confirmDialog,
  handleEditRow,
  setDeletingId,
  onViewServices
}) {
  return reactExports.useMemo(
    () => [
      {
        field: "name",
        headerName: "Package",
        flex: 1,
        minWidth: 180
        // renderCell: ({ row }) => (
        //   <Chip
        //     size="small"
        //     label={row.name}
        //     sx={{ bgcolor: row.color || '#00B8D9', color: '#fff', fontWeight: 600 }}
        //   />
        // ),
      },
      {
        field: "description",
        headerName: "Description",
        flex: 1.5,
        minWidth: 200,
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "body2",
            noWrap: true,
            color: "text.secondary",
            sx: { display: "flex", alignItems: "center", height: 1 },
            children: value || "—"
          }
        )
      },
      {
        field: "service_ids",
        headerName: "Services",
        flex: 2,
        minWidth: 220,
        sortable: false,
        filterable: false,
        renderCell: ({ row, value }) => {
          if (!value?.length) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: "default",
                children: "No Services"
              }
            );
          }
          const matched = row.services || [];
          const visible = matched.slice(0, 3);
          const hidden = matched.length - visible.length;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              direction: "row",
              spacing: 0.5,
              alignItems: "center",
              onClick: (e) => {
                e.stopPropagation();
                onViewServices?.(row);
              },
              sx: { height: 1, flexWrap: "nowrap", overflow: "hidden", cursor: "pointer" },
              children: [
                visible.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: s.name, size: "small", variant: "soft" }, s.id)),
                hidden > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Click to view all services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: `+${hidden}`, size: "small", variant: "outlined" }) })
              ]
            }
          );
        }
      },
      {
        field: "price",
        headerName: "Price",
        width: 110,
        type: "number",
        align: "left",
        headerAlign: "left",
        renderCell: ({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { display: "flex", alignItems: "center", height: 1 }, children: fCurrency(row.price) })
      },
      {
        field: "max_uses_per_month",
        headerName: "Max uses / mo",
        width: 140,
        type: "number",
        align: "left",
        headerAlign: "left",
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: value ? "warning" : "success", children: value ? `${value} uses` : "Unlimited" })
      },
      {
        field: "is_active",
        headerName: "Status",
        width: 100,
        type: "boolean",
        valueFormatter: (value) => value ? "Active" : "Inactive",
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: value ? "success" : "default", children: value ? "Active" : "Inactive" })
      },
      {
        field: "actions",
        type: "actions",
        headerName: "",
        width: 80,
        getActions: ({ row }) => [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              label: "Edit",
              onClick: () => handleEditRow(row)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold" }),
              label: "Deactivate",
              onClick: () => {
                setDeletingId(row.id);
                confirmDialog.onTrue();
              },
              sx: { color: "error.main" }
            }
          )
        ]
      }
    ],
    [confirmDialog, handleEditRow, setDeletingId, onViewServices]
  );
}
function TemplatesTab({
  organizationId,
  userId,
  templateDialog,
  editingTemplate,
  setEditingTemplate
}) {
  const deactivateConfirmDialog = Ee();
  const templatesToolbarOptions = useToolbarSettings();
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const [viewingServicesTemplate, setViewingServicesTemplate] = reactExports.useState(null);
  const [templatesPaginationModel, setTemplatesPaginationModel] = reactExports.useState({
    page: 0,
    pageSize: 10
  });
  const [templatesSortModel, setTemplatesSortModel] = reactExports.useState([]);
  const [templatesFilterModel, setTemplatesFilterModel] = reactExports.useState({ items: [] });
  const [debouncedTemplatesFilterModel, setDebouncedTemplatesFilterModel] = reactExports.useState({
    items: []
  });
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebouncedTemplatesFilterModel(templatesFilterModel), 400);
    return () => clearTimeout(timer);
  }, [templatesFilterModel]);
  const { templates, templatesTotal, templatesLoading } = useGetPackageTemplatesServer(
    organizationId,
    {
      paginationModel: templatesPaginationModel,
      sortModel: templatesSortModel,
      filterModel: debouncedTemplatesFilterModel
    }
  );
  const handleEditTemplate = reactExports.useCallback(
    (row) => {
      setEditingTemplate(row);
      templateDialog.onTrue();
    },
    [templateDialog, setEditingTemplate]
  );
  const handleDeactivateTemplate = reactExports.useCallback(async () => {
    if (!deletingId) return;
    try {
      const { error } = await deletePackageTemplate(deletingId);
      if (error) throw error;
      toast.success("Package deactivated");
    } catch {
      toast.error("Failed to deactivate package");
    } finally {
      setDeletingId(null);
      deactivateConfirmDialog.onFalse();
    }
  }, [deletingId, deactivateConfirmDialog]);
  const handleCloseTemplateDialog = reactExports.useCallback(() => {
    templateDialog.onFalse();
    setEditingTemplate(null);
  }, [templateDialog, setEditingTemplate]);
  const handleTemplatesFilterModelChange = reactExports.useCallback((model) => {
    setTemplatesFilterModel(model);
    setTemplatesPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleTemplatesSortModelChange = reactExports.useCallback((model) => {
    setTemplatesSortModel(model);
    setTemplatesPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const templatesColumns = usePackageTemplateColumns({
    confirmDialog: deactivateConfirmDialog,
    handleEditRow: handleEditTemplate,
    setDeletingId,
    onViewServices: (row) => setViewingServicesTemplate(row)
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        sx: {
          border: "1px solid",
          borderColor: "divider",
          minHeight: 540,
          flexGrow: { md: 1 },
          display: { md: "flex" },
          // height: { xs: 800, md: '1px' },
          flexDirection: { md: "column" }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DataGrid,
          {
            ...templatesToolbarOptions.settings,
            rows: templates,
            columns: templatesColumns,
            rowCount: templatesTotal,
            loading: templatesLoading,
            paginationMode: "server",
            sortingMode: "server",
            filterMode: "server",
            paginationModel: templatesPaginationModel,
            onPaginationModelChange: setTemplatesPaginationModel,
            sortModel: templatesSortModel,
            onSortModelChange: handleTemplatesSortModelChange,
            filterModel: templatesFilterModel,
            onFilterModelChange: handleTemplatesFilterModelChange,
            pageSizeOptions: [10, 25, 50],
            sx: {
              [`& .${gridClasses.row}`]: { cursor: "pointer" },
              border: "none"
            },
            slots: {
              toolbar: PackageTemplatesToolbar,
              noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No package templates yet" })
            },
            slotProps: {
              toolbar: {
                settings: templatesToolbarOptions.settings,
                onChangeSettings: templatesToolbarOptions.onChangeSettings
              }
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PackageTemplateDialog,
      {
        open: templateDialog.value,
        onClose: handleCloseTemplateDialog,
        template: editingTemplate,
        organizationId,
        createdBy: userId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PackageServicesDialog,
      {
        open: Boolean(viewingServicesTemplate),
        onClose: () => setViewingServicesTemplate(null),
        template: viewingServicesTemplate
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: deactivateConfirmDialog.value,
        onClose: deactivateConfirmDialog.onFalse,
        title: "Deactivate package",
        content: "This will deactivate the package template. Existing client packages won't be affected.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleDeactivateTemplate, children: "Deactivate" })
      }
    )
  ] });
}
function PackagesManagementView() {
  const { user } = useAuthContext();
  const { isAdmin } = usePermissions();
  const organizationId = user?.branches?.[0]?.organization_id;
  const branchId = user?.branches?.[0]?.id;
  const [currentTab, setCurrentTab] = reactExports.useState("packages");
  const assignDialog = Ee();
  const finalizeConfirmDialog = Ee();
  const templateDialog = Ee();
  const [isFinalizingCommissions, setIsFinalizingCommissions] = reactExports.useState(false);
  const [editingTemplate, setEditingTemplate] = reactExports.useState(null);
  const handleFinalizeCommissions = reactExports.useCallback(async () => {
    finalizeConfirmDialog.onFalse();
    setIsFinalizingCommissions(true);
    try {
      const { finalized, error } = await finalizeExpiredPackageCommissions({
        orgId: organizationId,
        branchId
      });
      if (error) throw error;
      if (finalized === 0) {
        toast.info("No expired packages pending finalization");
      } else {
        toast.success(
          `Commissions finalized for ${finalized} package${finalized !== 1 ? "s" : ""}`
        );
      }
    } catch {
      toast.error("Failed to finalize commissions");
    } finally {
      setIsFinalizingCommissions(false);
    }
  }, [organizationId, branchId, finalizeConfirmDialog]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Packages",
        links: [{ name: "Dashboard", href: "/dashboard" }, { name: "Packages" }],
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
          currentTab === "packages" && isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              color: "warning",
              startIcon: isFinalizingCommissions ? /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "svg-spinners:ring-resize", width: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:calculator-bold-duotone" }),
              disabled: isFinalizingCommissions,
              onClick: finalizeConfirmDialog.onTrue,
              children: "Finalize Commissions"
            }
          ),
          currentTab === "templates" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: () => {
                setEditingTemplate(null);
                templateDialog.onTrue();
              },
              children: "New Package"
            }
          )
        ] }),
        sx: { mb: 3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Tabs,
      {
        value: currentTab,
        onChange: (_, val) => setCurrentTab(val),
        sx: { mb: 3, borderBottom: "1px solid", borderColor: "divider" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tab,
            {
              value: "packages",
              label: "Client Packages",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:users-group-rounded-bold-duotone", width: 20 }),
              iconPosition: "start"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tab,
            {
              value: "templates",
              label: "Templates",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:document-bold-duotone", width: 20 }),
              iconPosition: "start"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: currentTab === "packages" ? "block" : "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PackagesTab,
      {
        organizationId,
        branchId,
        userId: user?.id,
        assignDialog
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: currentTab === "templates" ? "block" : "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TemplatesTab,
      {
        organizationId,
        userId: user?.id,
        templateDialog,
        editingTemplate,
        setEditingTemplate
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: finalizeConfirmDialog.value,
        onClose: finalizeConfirmDialog.onFalse,
        title: "Finalize commissions",
        content: "This will calculate and lock commissions for all unfinalized expired packages, update service sale prices to their per-visit values, and mark packages as expired. This action cannot be undone.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "warning",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:calculator-bold-duotone" }),
            onClick: handleFinalizeCommissions,
            children: "Finalize"
          }
        )
      }
    )
  ] });
}
const metadata = { title: `Packages | Dashboard - ${CONFIG.appName}` };
function PackagesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PackagesManagementView, {})
  ] });
}
export {
  PackagesPage as default
};
