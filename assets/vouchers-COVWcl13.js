import { s as supabase, u as useSWR, r as reactExports, m as mutate, av as useAuthContext, a6 as useUserBranches, t as toast, j as jsxRuntimeExports, I as IconButton, a as Iconify, M as MenuItem, h as dayjs, d as Button, S as Stack, c as Typography, B as Box, L as Label, an as fDate, b as CircularProgress, as as fDateTime, K as Divider, x as Select, E as Ee, bp as ze, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, C as CONFIG } from "./index-B08HRm4A.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, C as CustomToolbarQuickFilter, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { o } from "./index-Di_Bgabu.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { e as useClientList } from "./client-service-swr-DnF01Wop.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { o as object, s as string, i as _enum, a as array } from "./schemas-BVeYYbTr.js";
import { n as number } from "./coerce-5-WTXoHr.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { L as LoadingButton } from "./LoadingButton-DJQpPOpu.js";
import { F as FormControl, I as InputLabel } from "./TextField-CIuP940C.js";
import { T as Toolbar, D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import { C as CustomGridActionsCellItem } from "./grid-actions-cell-item-GDL6dx4W.js";
import { g as gridClasses } from "./gridClasses-jU9X43RF.js";
import "./ExportPrint-CAqo1wR3.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
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
async function getVouchers({
  organizationId,
  status = null,
  voucherType = null,
  searchTerm = "",
  columnFilters = [],
  orderBy = "created_at",
  order = "desc",
  limit = 50,
  offset = 0
} = {}) {
  try {
    let query = supabase.from("vouchers").select(
      `
        *,
        client_profiles!client_id(first_name, last_name),
        profiles!issued_by(first_name, last_name)
      `,
      { count: "exact" }
    ).eq("organization_id", organizationId);
    if (status) {
      query = query.eq("status", status);
    }
    if (voucherType) {
      query = query.eq("voucher_type", voucherType);
    }
    if (searchTerm) {
      query = query.or(`code.ilike.%${searchTerm}%,notes.ilike.%${searchTerm}%`);
    }
    for (const filter of columnFilters) {
      if (filter.value == null || filter.value === "") continue;
      const { field, operator, value } = filter;
      if (field === "code") {
        if (operator === "contains") query = query.ilike("code", `%${value}%`);
        else if (operator === "equals") query = query.eq("code", value);
        else if (operator === "startsWith") query = query.ilike("code", `${value}%`);
        else if (operator === "endsWith") query = query.ilike("code", `%${value}`);
      } else if (field === "voucher_value" || field === "remaining_value") {
        const num = Number(value);
        if (operator === "=") query = query.eq(field, num);
        else if (operator === "!=") query = query.neq(field, num);
        else if (operator === ">") query = query.gt(field, num);
        else if (operator === ">=") query = query.gte(field, num);
        else if (operator === "<") query = query.lt(field, num);
        else if (operator === "<=") query = query.lte(field, num);
      } else if (field === "valid_from" || field === "valid_until") {
        const dateVal = value instanceof Date ? value.toISOString() : value;
        if (operator === "is") query = query.eq(field, dateVal);
        else if (operator === "not") query = query.neq(field, dateVal);
        else if (operator === "after") query = query.gt(field, dateVal);
        else if (operator === "onOrAfter") query = query.gte(field, dateVal);
        else if (operator === "before") query = query.lt(field, dateVal);
        else if (operator === "onOrBefore") query = query.lte(field, dateVal);
      }
    }
    query = query.order(orderBy, { ascending: order === "asc" });
    query = query.range(offset, offset + limit - 1);
    const { data, error, count } = await query;
    if (error) throw error;
    return { data: data || [], count: count || 0 };
  } catch (error) {
    console.error("Error fetching vouchers:", error);
    throw error;
  }
}
async function createVoucher(voucherData) {
  try {
    const { data, error } = await supabase.from("vouchers").insert([voucherData]).select().single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error creating voucher:", error);
    throw error;
  }
}
async function updateVoucher(voucherId, updates) {
  try {
    const { data, error } = await supabase.from("vouchers").update(updates).eq("id", voucherId).select().single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error updating voucher:", error);
    throw error;
  }
}
async function deleteVoucher(voucherId) {
  try {
    const { error } = await supabase.from("vouchers").update({ status: "cancelled" }).eq("id", voucherId);
    if (error) throw error;
    return true;
  } catch (error) {
    console.error("Error deleting voucher:", error);
    throw error;
  }
}
async function getVoucherUsage(voucherId) {
  try {
    const { data, error } = await supabase.from("voucher_usage").select(
      `
        *,
        sales!inner(sale_number, completed_at, cashier:profiles!sales_cashier_id_fkey(first_name, last_name), client:client_profiles(first_name, last_name))
      `
    ).eq("voucher_id", voucherId).order("used_at", { ascending: false });
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching voucher usage:", error);
    throw error;
  }
}
const STORAGE_KEY = "app-vouchers";
const options = {
  revalidateIfStale: true,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  keepPreviousData: true
};
function useGetVouchers({
  organizationId,
  page = 0,
  pageSize = 10,
  status = null,
  voucherType = null,
  searchQuery = "",
  columnFilters = [],
  orderBy = "created_at",
  order = "desc"
} = {}) {
  const cacheKey = JSON.stringify([
    STORAGE_KEY,
    organizationId,
    page,
    pageSize,
    status,
    voucherType,
    searchQuery,
    orderBy,
    order,
    columnFilters
  ]);
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateLocal
  } = useSWR(
    organizationId ? cacheKey : null,
    () => fetchVouchersFromSupabase({
      organizationId,
      page,
      pageSize,
      status,
      voucherType,
      searchQuery,
      columnFilters,
      orderBy,
      order
    }),
    options
  );
  reactExports.useEffect(() => {
    if (!organizationId || !supabase.channel) {
      return void 0;
    }
    const channel = supabase.channel(`vouchers-changes-${organizationId}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "vouchers"
      },
      (payload) => {
        mutateLocal();
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [organizationId, mutateLocal]);
  const memoizedValue = reactExports.useMemo(
    () => ({
      vouchers: data?.vouchers || [],
      vouchersLoading: isLoading,
      vouchersError: error,
      vouchersValidating: isValidating,
      totalCount: data?.totalCount || 0,
      vouchersEmpty: !isLoading && !data?.vouchers?.length
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
function useGetVoucherUsage(voucherId) {
  const cacheKey = `voucher-usage-${voucherId}`;
  const { data, isLoading, error } = useSWR(
    voucherId ? cacheKey : null,
    () => getVoucherUsage(voucherId),
    options
  );
  return {
    usage: data || [],
    usageLoading: isLoading,
    usageError: error
  };
}
async function fetchVouchersFromSupabase({
  organizationId,
  page,
  pageSize,
  status,
  voucherType,
  searchQuery,
  columnFilters,
  orderBy,
  order
}) {
  const offset = page * pageSize;
  const { data, count, error } = await getVouchers({
    organizationId,
    status,
    voucherType,
    searchTerm: searchQuery,
    columnFilters,
    orderBy,
    order,
    limit: pageSize,
    offset
  });
  if (error) {
    throw error;
  }
  return {
    vouchers: data,
    totalCount: count
  };
}
async function createVoucherMutation(voucherData) {
  const data = await createVoucher(voucherData);
  mutate((key) => typeof key === "string" && key.includes(STORAGE_KEY));
  return data;
}
async function updateVoucherMutation(voucherId, updates) {
  const data = await updateVoucher(voucherId, updates);
  mutate((key) => typeof key === "string" && key.includes(STORAGE_KEY));
  mutate(`voucher-${voucherId}`);
  return data;
}
async function deleteVoucherMutation(voucherId) {
  await deleteVoucher(voucherId);
  mutate((key) => typeof key === "string" && key.includes(STORAGE_KEY));
  mutate(`voucher-${voucherId}`);
}
const VoucherSchema = object({
  code: string().min(1, "Code is required").max(50, "Code must be less than 50 characters"),
  client_id: string().optional().nullable(),
  voucher_type: _enum(["percentage", "fixed_amount"], {
    required_error: "Type is required"
  }),
  voucher_value: number().min(0.01, "Value must be greater than 0"),
  min_purchase_amount: number().min(0, "Minimum purchase must be 0 or greater").optional().nullable(),
  applicable_to: array(string()).min(1, "Select at least one applicable item"),
  branch_ids: array(string()).optional().nullable(),
  valid_from: string().min(1, "Valid from date is required"),
  valid_until: string().optional().nullable(),
  status: _enum(["active", "expired", "used", "cancelled"]).optional(),
  notes: string().optional().nullable()
}).refine((data) => data.voucher_type !== "percentage" || data.voucher_value <= 100, {
  message: "Percentage cannot exceed 100%",
  path: ["voucher_value"]
});
const generateVoucherCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const generateSegment = () => {
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };
  return `${generateSegment()}-${generateSegment()}-${generateSegment()}`;
};
function VoucherDialog({ open, onClose, voucher }) {
  const { user } = useAuthContext();
  const isEdit = !!voucher;
  const organizationId = isEdit ? voucher.organization_id : user?.branches[0]?.organization_id;
  const { clients } = useClientList();
  const { branches } = useUserBranches();
  const defaultValues = {
    code: "",
    client_id: null,
    voucher_type: "fixed_amount",
    voucher_value: null,
    min_purchase_amount: null,
    applicable_to: ["products", "services"],
    branch_ids: [],
    valid_from: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    valid_until: null,
    status: "active",
    notes: null
  };
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(VoucherSchema),
    defaultValues,
    values: voucher ? {
      ...voucher,
      applicable_to: voucher.applicable_to || ["products", "services"],
      branch_ids: voucher.branch_ids || [],
      valid_from: voucher.valid_from ? new Date(voucher.valid_from).toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      valid_until: voucher.valid_until ? new Date(voucher.valid_until).toISOString().split("T")[0] : ""
    } : void 0
  });
  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const voucherType = watch("voucher_type");
  const handleGenerateCode = () => {
    const newCode = generateVoucherCode();
    setValue("code", newCode);
  };
  reactExports.useEffect(() => {
    if (voucherType === "percentage") {
      setValue("voucher_value", Math.min(watch("voucher_value"), 100));
    }
  }, [voucherType, setValue, watch]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isEdit) {
        const updateData = {
          code: data.code.toUpperCase(),
          client_id: data.client_id || null,
          voucher_type: data.voucher_type,
          voucher_value: data.voucher_value,
          min_purchase_amount: data.min_purchase_amount || null,
          applicable_to: data.applicable_to,
          branch_ids: data.branch_ids?.length > 0 ? data.branch_ids : null,
          valid_from: new Date(data.valid_from).toISOString(),
          valid_until: data.valid_until ? new Date(data.valid_until).toISOString() : null,
          status: data.status,
          notes: data.notes || null,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        await updateVoucherMutation(voucher.id, updateData);
        toast.success("Voucher updated successfully!");
      } else {
        const voucherData = {
          organization_id: organizationId,
          code: data.code.toUpperCase(),
          client_id: data.client_id || null,
          voucher_type: data.voucher_type,
          voucher_value: data.voucher_value,
          remaining_value: data.voucher_value,
          min_purchase_amount: data.min_purchase_amount || 0,
          applicable_to: data.applicable_to,
          branch_ids: data.branch_ids?.length > 0 ? data.branch_ids : null,
          valid_from: new Date(data.valid_from).toISOString(),
          valid_until: data.valid_until ? new Date(data.valid_until).toISOString() : null,
          issued_by: user?.id,
          status: "active",
          notes: data.notes || null
        };
        await createVoucherMutation(voucherData);
        toast.success("Voucher created successfully!");
      }
      reset();
      onClose();
    } catch (error) {
      console.error("Error saving voucher:", error);
      toast.error(error.message || "Failed to save voucher");
    }
  });
  const handleClose = () => {
    if (!isSubmitting) {
      reset();
      onClose();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Voucher" : "Create New Voucher" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, sx: { mt: 2 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "code",
            label: "Voucher Code",
            placeholder: "SUMMER2026",
            helperText: "Unique code for the voucher",
            inputProps: { style: { textTransform: "uppercase" } },
            InputProps: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  onClick: handleGenerateCode,
                  edge: "end",
                  title: "Generate random code",
                  sx: { mr: 0.5 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:refresh", width: 16, height: 16 })
                }
              ) })
            }
          }
        ) }),
        isEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "status", label: "Status", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "active", children: "Active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "expired", children: "Expired" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "used", children: "Used" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "cancelled", children: "Cancelled" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "client_id", label: "Client (Optional)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "General (no specific client)" }) }),
          clients?.map((client) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: client.id, children: [
            client.first_name,
            " ",
            client.last_name
          ] }, client.id))
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "voucher_type", label: "Voucher Type", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "fixed_amount", children: "Fixed Amount ($)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "percentage", children: "Percentage (%)" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "voucher_value",
            label: `Value ${voucherType === "percentage" ? "(%)" : "($)"}`,
            type: "number",
            inputProps: {
              min: 0,
              max: voucherType === "percentage" ? 100 : void 0,
              step: voucherType === "percentage" ? 1 : 0.01
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "min_purchase_amount",
            label: "Minimum Purchase ($)",
            type: "number",
            inputProps: { min: 0, step: 0.01 }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.MultiSelect,
          {
            fullWidth: true,
            name: "applicable_to",
            label: "Applicable To",
            options: [
              { value: "products", label: "Products" },
              { value: "services", label: "Services" }
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.MultiSelect,
          {
            fullWidth: true,
            slotProps: { inputLabel: { shrink: true } },
            name: "branch_ids",
            label: "Specific Branches (Optional)",
            placeholder: "All branches if none selected",
            options: branches?.map((branch) => ({
              value: branch.id,
              label: branch.name
            })) || []
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.DatePicker,
          {
            name: "valid_from",
            label: "Valid From",
            minDate: isEdit ? void 0 : dayjs(),
            sx: { width: 1 }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.DatePicker,
          {
            name: "valid_until",
            label: "Valid Until (Optional)",
            minDate: watch("valid_from") ? dayjs(watch("valid_from")) : void 0,
            sx: { width: 1 }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "notes",
            label: "Notes (Optional)",
            multiline: true,
            rows: 3,
            placeholder: "Additional notes about this voucher"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { type: "submit", variant: "contained", loading: isSubmitting, children: isEdit ? "Update Voucher" : "Create Voucher" })
      ] })
    ] })
  ] });
}
VoucherDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  voucher: o.object
};
function VoucherUsageDialog({ open, onClose, voucher }) {
  const { usage, usageLoading } = useGetVoucherUsage(open ? voucher?.id : null);
  if (!voucher) return null;
  const clientName = voucher.client_profiles ? `${voucher.client_profiles.first_name} ${voucher.client_profiles.last_name}` : "General";
  const isPercentage = voucher.voucher_type === "percentage";
  const formatValue = (val) => isPercentage ? `${val}%` : `$${Number(val).toFixed(2)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:ticket-bold-duotone", width: 24, color: "primary.main" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Voucher Usage History" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { dividers: true, sx: { pt: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            p: 2,
            mb: 3,
            borderRadius: 1.5,
            bgcolor: "background.neutral",
            border: "1px solid",
            borderColor: "divider"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700, letterSpacing: 0.5 }, children: voucher.code }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  variant: "soft",
                  color: {
                    active: "success",
                    expired: "error",
                    used: "warning",
                    cancelled: "default"
                  }[voucher.status] || "default",
                  children: voucher.status
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 3, flexWrap: "wrap", useFlexGap: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Client" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: clientName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Value" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: formatValue(voucher.voucher_value) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Remaining" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "success.main", fontWeight: 600, children: formatValue(voucher.remaining_value) })
              ] }),
              voucher.valid_until && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Expires" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(voucher.valid_until) })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: [
        "Usage Records ",
        !usageLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "primary", variant: "soft", sx: { ml: 0.5 }, children: usage.length })
      ] }),
      usageLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "center", justifyContent: "center", sx: { py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) }) : usage.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          title: "No usage yet",
          description: "This voucher hasn't been used on any sale.",
          sx: { py: 5 }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0, children: usage.map((record, index) => {
        const processedBy = record.sales?.cashier ? `${record.sales.cashier.first_name} ${record.sales.cashier.last_name}` : "—";
        const clientNameJoint = record.sales?.client ? `${record.sales.client.first_name} ${record.sales.client.last_name}` : "—";
        const saleNumber = record.sales?.sale_number || "—";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              direction: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              sx: { py: 1.5, px: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", spacing: 1.5, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      sx: {
                        mt: 0.5,
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "warning.lighter",
                        color: "warning.dark",
                        flexShrink: 0
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:cart-check-bold", width: 16 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, children: [
                      "Sale #",
                      saleNumber
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: record.used_at ? fDateTime(record.used_at) : "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                      "Client: ",
                      clientNameJoint
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                      "Processed by ",
                      processedBy
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", spacing: 0.25, flexShrink: 0, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 700, color: "error.main", children: [
                    "− ",
                    formatValue(record.amount_used)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "deducted" })
                ] })
              ]
            }
          ),
          index < usage.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, record.id ?? index);
      }) })
    ] })
  ] });
}
VoucherUsageDialog.propTypes = {
  open: o.bool,
  onClose: o.func,
  voucher: o.object
};
function VoucherTableToolbar({ filters, selectedRows, onDeleteRequest, toolbarOptions }) {
  const { state, setState } = filters;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarLeftPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomToolbarQuickFilter,
        {
          size: "small",
          slotProps: { textField: { placeholder: "Search code..." } }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", sx: { minWidth: 140 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            label: "Type",
            value: state.type[0] ?? "",
            onChange: (e) => setState({ type: e.target.value !== "" ? [e.target.value] : [] }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "All" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "percentage", children: "Percentage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "fixed", children: "Fixed" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", sx: { minWidth: 140 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            label: "Status",
            value: state.status[0] ?? "",
            onChange: (e) => setState({ status: e.target.value !== "" ? [e.target.value] : [] }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "All" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "active", children: "Active" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "used", children: "Used" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "expired", children: "Expired" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "cancelled", children: "Cancelled" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      selectedRows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "small",
          color: "error",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
          onClick: () => onDeleteRequest(selectedRows),
          children: [
            "Cancel (",
            selectedRows.length,
            ")"
          ]
        }
      ),
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
function useVoucherColumns({
  handleEditRow,
  handleViewUsage,
  confirmDialog,
  setSelectedRows
}) {
  return reactExports.useMemo(
    () => [
      {
        field: "code",
        headerName: "Code",
        flex: 1,
        minWidth: 120,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            onClick: (e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(params?.value);
              toast.success("Voucher code copied to clipboard");
            },
            style: { fontWeight: 600 },
            children: params?.value
          }
        ) })
      },
      {
        field: "client_name",
        headerName: "Client",
        flex: 1,
        minWidth: 150,
        sortable: false,
        filterable: false,
        valueGetter: (_, row) => {
          const client = row?.client_profiles;
          return client ? `${client.first_name} ${client.last_name}` : "General";
        }
      },
      {
        field: "voucher_type",
        headerName: "Type",
        width: 100,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: params?.value === "percentage" ? "info" : "success", children: params?.value === "percentage" ? "Percent" : "Fixed" })
      },
      {
        field: "voucher_value",
        headerName: "Value",
        width: 100,
        type: "number",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: params.row.voucher_type === "percentage" ? `${params?.value}%` : `$${params?.value}` })
      },
      {
        field: "remaining_value",
        headerName: "Remaining",
        width: 120,
        type: "number",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: params.row.voucher_type === "percentage" ? `${params?.value}%` : `$${params?.value}` })
      },
      {
        field: "valid_from",
        headerName: "Valid From",
        width: 120,
        type: "date",
        valueGetter: (value) => value ? new Date(value) : null,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: params.value ? fDate(params.value) : "No Start Date" })
      },
      {
        field: "valid_until",
        headerName: "Expires",
        width: 120,
        type: "date",
        valueGetter: (value) => value ? new Date(value) : null,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: params.value ? fDate(params.value) : "No Expiry" })
      },
      {
        field: "status",
        headerName: "Status",
        width: 100,
        valueFormatter: (value) => value ? "Active" : "Inactive",
        renderCell: (params) => {
          const statusColors = {
            active: "success",
            expired: "error",
            used: "warning",
            cancelled: "default"
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: statusColors[params?.value] || "default", children: params?.value });
        }
      },
      {
        type: "actions",
        field: "actions",
        headerName: "Actions",
        align: "right",
        headerAlign: "right",
        width: 120,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        getActions: (params) => [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:chart-square-bold" }),
              label: "View Usage",
              showInMenu: true,
              onClick: () => handleViewUsage(params.row)
            },
            "view-usage"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              showInMenu: true,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
              label: "Edit",
              onClick: () => handleEditRow(params.row)
            },
            "edit"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomGridActionsCellItem,
            {
              showInMenu: true,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-minimalistic-bold" }),
              label: "Delete",
              onClick: () => {
                confirmDialog.onTrue();
                setSelectedRows([params.id]);
              },
              sx: { color: "error.main" }
            },
            "delete"
          )
        ]
      }
    ],
    [handleEditRow, handleViewUsage, confirmDialog, setSelectedRows]
  );
}
const HIDE_COLUMNS = {};
const HIDE_COLUMNS_TOGGLABLE = ["actions"];
function VoucherListView() {
  const confirmDialog = Ee();
  const createDialog = Ee();
  const toolbarOptions = useToolbarSettings();
  const { primaryBranch } = useUserBranches();
  const [paginationModel, setPaginationModel] = reactExports.useState({
    page: 0,
    pageSize: 10
  });
  const [filterModel, setFilterModel] = reactExports.useState({ items: [], quickFilterValues: [] });
  const [sortModel, setSortModel] = reactExports.useState([{ field: "created_at", sort: "desc" }]);
  const [selectedRows, setSelectedRows] = reactExports.useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = reactExports.useState(HIDE_COLUMNS);
  const [editingVoucher, setEditingVoucher] = reactExports.useState(null);
  const [viewingUsageVoucher, setViewingUsageVoucher] = reactExports.useState(null);
  const filters = ze({
    status: [],
    type: []
  });
  const organizationId = primaryBranch?.organization_id;
  const handleFilterModelChange = reactExports.useCallback((newFilterModel) => {
    setFilterModel(newFilterModel);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const searchQuery = filterModel.quickFilterValues?.[0] || "";
  const columnStatusItem = filterModel.items?.find(
    (item) => item.field === "status" && item.value != null
  );
  const columnTypeItem = filterModel.items?.find(
    (item) => item.field === "voucher_type" && item.value != null
  );
  const effectiveStatus = columnStatusItem?.value ?? (filters.state.status.length > 0 ? filters.state.status[0] : null);
  const effectiveVoucherType = columnTypeItem?.value ?? (filters.state.type.length > 0 ? filters.state.type[0] : null);
  const columnFilters = (filterModel.items || []).filter(
    (item) => item.field !== "status" && item.field !== "voucher_type" && item.value != null
  );
  const { vouchers, vouchersLoading, totalCount } = useGetVouchers({
    organizationId,
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    status: effectiveStatus,
    voucherType: effectiveVoucherType,
    searchQuery,
    columnFilters,
    orderBy: sortModel[0]?.field || "created_at",
    order: sortModel[0]?.sort || "desc"
  });
  const handleSortModelChange = reactExports.useCallback((newSortModel) => {
    setSortModel(newSortModel);
  }, []);
  const handleDeleteRow = reactExports.useCallback(
    async (id) => {
      try {
        await deleteVoucherMutation(id);
        toast.success("Voucher deleted successfully");
        confirmDialog.onFalse();
      } catch (error) {
        console.error("Error deleting voucher:", error);
        toast.error("Failed to delete voucher");
      }
    },
    [confirmDialog]
  );
  const handleDeleteRows = reactExports.useCallback(
    async (selectedIds) => {
      try {
        await Promise.all(selectedIds.map((id) => deleteVoucherMutation(id)));
        toast.success("Vouchers deleted successfully");
        setSelectedRows([]);
        confirmDialog.onFalse();
      } catch (error) {
        console.error("Error deleting vouchers:", error);
        toast.error("Failed to delete vouchers");
      }
    },
    [confirmDialog]
  );
  const handleEditRow = reactExports.useCallback((voucher) => {
    setEditingVoucher(voucher);
  }, []);
  const handleCloseEdit = reactExports.useCallback(() => {
    setEditingVoucher(null);
  }, []);
  const handleViewUsage = reactExports.useCallback((voucher) => {
    setViewingUsageVoucher(voucher);
  }, []);
  const handleCloseUsage = reactExports.useCallback(() => {
    setViewingUsageVoucher(null);
  }, []);
  const columns = useVoucherColumns({
    handleEditRow,
    handleViewUsage,
    confirmDialog,
    setSelectedRows,
    density: toolbarOptions.settings.density
  });
  const getTogglableColumns = () => columns.filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field)).map((column) => column.field);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomBreadcrumbs,
        {
          heading: "Vouchers",
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: createDialog.onTrue,
              children: "New Voucher"
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
              rows: vouchers,
              columns,
              loading: vouchersLoading,
              rowCount: totalCount,
              pageSizeOptions: [5, 10, 25],
              paginationModel,
              onPaginationModelChange: setPaginationModel,
              paginationMode: "server",
              sortingMode: "server",
              sortModel,
              onSortModelChange: handleSortModelChange,
              filterModel,
              onFilterModelChange: handleFilterModelChange,
              filterMode: "server",
              initialState: {
                pagination: { paginationModel },
                sorting: { sortModel }
              },
              checkboxSelection: true,
              disableRowSelectionOnClick: true,
              onRowSelectionModelChange: (newSelectionModel) => {
                setSelectedRows(Array.from(newSelectionModel.ids));
              },
              columnVisibilityModel,
              onColumnVisibilityModelChange: (newModel) => setColumnVisibilityModel(newModel),
              ...toolbarOptions.settings,
              slots: {
                toolbar: VoucherTableToolbar,
                noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EmptyContent,
                  {
                    title: "No vouchers found",
                    action: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        sx: { mt: 2 },
                        variant: "contained",
                        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
                        onClick: createDialog.onTrue,
                        children: "New Voucher"
                      }
                    )
                  }
                ),
                noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No vouchers found" })
              },
              slotProps: {
                toolbar: {
                  filters,
                  options: toolbarOptions,
                  onSearchChange: handleFilterModelChange,
                  selectedRows,
                  onDeleteRequest: (rows) => {
                    confirmDialog.onTrue();
                    setSelectedRows(rows);
                  },
                  toolbarOptions
                },
                columnsManagement: {
                  getTogglableColumns
                }
              },
              sx: {
                [`& .${gridClasses.cell}`]: {
                  alignItems: "center"
                },
                [`& .${gridClasses.row}`]: {
                  alignItems: "center"
                }
              }
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VoucherDialog, { open: createDialog?.value, onClose: createDialog.onFalse }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VoucherDialog, { open: !!editingVoucher, onClose: handleCloseEdit, voucher: editingVoucher }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      VoucherUsageDialog,
      {
        open: !!viewingUsageVoucher,
        onClose: handleCloseUsage,
        voucher: viewingUsageVoucher
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog?.value,
        onClose: confirmDialog.onFalse,
        title: "Delete Voucher(s)",
        content: selectedRows.length === 1 ? "Are you sure you want to delete this voucher?" : `Are you sure you want to delete ${selectedRows.length} vouchers?`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: () => {
              if (selectedRows.length === 1) {
                handleDeleteRow(selectedRows[0]);
              } else {
                handleDeleteRows(selectedRows);
              }
            },
            children: "Delete"
          }
        )
      }
    )
  ] });
}
const metadata = { title: `Vouchers | Dashboard - ${CONFIG.appName}` };
function VoucherPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VoucherListView, {})
  ] });
}
export {
  VoucherPage as default
};
