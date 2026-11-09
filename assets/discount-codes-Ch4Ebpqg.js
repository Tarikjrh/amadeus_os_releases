import { s as supabase, u as useSWR, r as reactExports, m as mutate, av as useAuthContext, a6 as useUserBranches, t as toast, j as jsxRuntimeExports, I as IconButton, a as Iconify, d as Button, M as MenuItem, S as Stack, c as Typography, B as Box, L as Label, an as fDate, b as CircularProgress, as as fDateTime, K as Divider, x as Select, bm as ListItemText, E as Ee, bp as ze, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, C as CONFIG } from "./index-B08HRm4A.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, C as CustomToolbarQuickFilter, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { o } from "./index-Di_Bgabu.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { o as object, b as boolean, u as union, a as array, p as preprocess, i as _enum, s as string, d as date } from "./schemas-BVeYYbTr.js";
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
async function getDiscountCodes({
  organizationId,
  discountType = null,
  searchTerm = "",
  filterItems = [],
  orderBy = "created_at",
  order = "desc",
  limit = 50,
  offset = 0
} = {}) {
  try {
    let query = supabase.from("discount_codes").select(
      `
        *,
        profiles!created_by(first_name, last_name)
      `,
      { count: "exact" }
    ).eq("organization_id", organizationId).eq("is_active", true);
    if (discountType !== null) {
      query = query.eq("discount_type", discountType);
    }
    if (searchTerm) {
      query = query.or(
        `code.ilike.%${searchTerm}%,name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`
      );
    }
    if (filterItems && filterItems.length > 0) {
      for (const item of filterItems) {
        const { field, operator, value } = item;
        if (value === void 0 || value === null || value === "") continue;
        if (["code", "name", "description"].includes(field)) {
          if (operator === "contains") query = query.ilike(field, `%${value}%`);
          else if (operator === "equals") query = query.eq(field, value);
          else if (operator === "startsWith") query = query.ilike(field, `${value}%`);
          else if (operator === "endsWith") query = query.ilike(field, `%${value}`);
        } else if (field === "discount_type") {
          if (operator === "is") query = query.eq("discount_type", value);
          else if (operator === "not") query = query.neq("discount_type", value);
          else if (operator === "isAnyOf" && Array.isArray(value))
            query = query.in("discount_type", value);
        } else if (["discount_value", "usage_count", "usage_limit"].includes(field)) {
          const num = Number(value);
          if (operator === "=") query = query.eq(field, num);
          else if (operator === "!=") query = query.neq(field, num);
          else if (operator === ">") query = query.gt(field, num);
          else if (operator === ">=") query = query.gte(field, num);
          else if (operator === "<") query = query.lt(field, num);
          else if (operator === "<=") query = query.lte(field, num);
        } else if (["valid_from", "valid_until"].includes(field)) {
          const dateValue = value instanceof Date ? value.toISOString() : value;
          if (operator === "is") query = query.eq(field, dateValue);
          else if (operator === "after") query = query.gt(field, dateValue);
          else if (operator === "onOrAfter") query = query.gte(field, dateValue);
          else if (operator === "before") query = query.lt(field, dateValue);
          else if (operator === "onOrBefore") query = query.lte(field, dateValue);
        }
      }
    }
    query = query.order(orderBy, { ascending: order === "asc" });
    query = query.range(offset, offset + limit - 1);
    const { data, error, count } = await query;
    if (error) throw error;
    return { data: data || [], count: count || 0 };
  } catch (error) {
    console.error("Error fetching discount codes:", error);
    throw error;
  }
}
async function createDiscountCode(discountCodeData) {
  try {
    const { data, error } = await supabase.from("discount_codes").insert(discountCodeData).select().single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error creating discount code:", error);
    throw error;
  }
}
async function updateDiscountCode(discountCodeId, updates) {
  try {
    const { data, error } = await supabase.from("discount_codes").update({ ...updates, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", discountCodeId).select().single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error updating discount code:", error);
    throw error;
  }
}
async function deleteDiscountCode(discountCodeId) {
  try {
    const { error } = await supabase.from("discount_codes").update({ is_active: false }).eq("id", discountCodeId);
    if (error) throw error;
    return true;
  } catch (error) {
    console.error("Error deleting discount code:", error);
    throw error;
  }
}
async function getDiscountCodeUsage(discountCodeId) {
  try {
    const { data, error } = await supabase.from("discount_code_usage").select(
      `
        *,
        sales!inner(sale_number, total_amount, created_at),
        client_profiles!client_id(first_name, last_name)
      `,
      { count: "exact" }
    ).eq("discount_code_id", discountCodeId).order("used_at", { ascending: false });
    if (error) throw error;
    return { data: data || [], count: data?.length || 0 };
  } catch (error) {
    console.error("Error fetching discount code usage:", error);
    throw error;
  }
}
const STORAGE_KEY = "app-discount-codes";
const options = {
  revalidateIfStale: true,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  keepPreviousData: true
};
function useGetDiscountCodes({
  organizationId,
  page = 0,
  pageSize = 10,
  discountType = null,
  searchQuery = "",
  filterItems = [],
  orderBy = "created_at",
  order = "desc"
} = {}) {
  const cacheKey = JSON.stringify([
    STORAGE_KEY,
    organizationId,
    page,
    pageSize,
    discountType,
    searchQuery,
    filterItems,
    orderBy,
    order
  ]);
  const {
    data,
    error,
    isLoading,
    mutate: revalidate
  } = useSWR(
    organizationId ? cacheKey : null,
    async () => {
      const offset = page * pageSize;
      const result = await getDiscountCodes({
        organizationId,
        discountType,
        searchTerm: searchQuery,
        filterItems,
        orderBy,
        order,
        limit: pageSize,
        offset
      });
      return {
        discountCodes: result.data,
        totalCount: result.count
      };
    },
    options
  );
  reactExports.useEffect(() => {
    if (!organizationId) return void 0;
    const channel = supabase.channel(`${STORAGE_KEY}-${organizationId}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "discount_codes",
        filter: `organization_id=eq.${organizationId}`
      },
      () => {
        revalidate();
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [organizationId, revalidate]);
  const discountCodes = data?.discountCodes || [];
  const totalCount = data?.totalCount || 0;
  return {
    discountCodes,
    discountCodesLoading: isLoading,
    totalCount,
    revalidateDiscountCodes: revalidate
  };
}
function useGetDiscountCodeUsage(discountCodeId) {
  const cacheKey = `discount-code-usage-${discountCodeId}`;
  const { data, error, isLoading } = useSWR(
    discountCodeId ? cacheKey : null,
    () => getDiscountCodeUsage(discountCodeId),
    options
  );
  return {
    usage: data?.data || [],
    usageCount: data?.count || 0,
    usageLoading: isLoading,
    usageError: error
  };
}
async function createDiscountCodeMutation(discountCodeData) {
  const newDiscountCode = await createDiscountCode(discountCodeData);
  mutate((key) => typeof key === "string" && key.includes(STORAGE_KEY));
  return newDiscountCode;
}
async function updateDiscountCodeMutation(discountCodeId, updates) {
  const updatedDiscountCode = await updateDiscountCode(discountCodeId, updates);
  mutate((key) => typeof key === "string" && key.includes(STORAGE_KEY));
  return updatedDiscountCode;
}
async function deleteDiscountCodeMutation(discountCodeId) {
  await deleteDiscountCode(discountCodeId);
  mutate((key) => typeof key === "string" && key.includes(STORAGE_KEY));
  return true;
}
const DiscountCodeSchema = object({
  code: string().min(1, "Code is required").max(50, "Code must be less than 50 characters"),
  name: string().min(1, "Name is required").max(255, "Name must be less than 255 characters"),
  description: string().optional().nullable(),
  discount_type: _enum(["percentage", "fixed_amount"], {
    required_error: "Type is required"
  }),
  discount_value: number().min(0.01, "Value must be greater than 0").max(100, "Percentage cannot exceed 100%"),
  max_discount_amount: number().min(0, "Max discount must be 0 or greater").optional().nullable(),
  min_purchase_amount: number().min(0, "Minimum purchase must be 0 or greater").optional().nullable(),
  usage_limit: preprocess(
    (val) => val === "" || val === null || val === void 0 ? null : val,
    number().min(1, "Usage limit must be at least 1").nullable()
  ).optional(),
  per_customer_limit: preprocess(
    (val) => val === "" || val === null || val === void 0 ? null : val,
    number().min(1, "Per customer limit must be at least 1").nullable()
  ).optional(),
  applicable_to: array(string()).min(1, "Select at least one applicable item"),
  branch_ids: array(string()).optional().nullable(),
  valid_from: union([string(), date()]).refine((val) => !!val, { message: "Valid from date is required" }),
  valid_until: union([string(), date()]).optional().nullable(),
  is_active: boolean().optional()
});
const generateDiscountCode = () => {
  const randomNum = Math.floor(Math.random() * 100).toString().padStart(2, "0");
  return `SAVE-${randomNum}`;
};
function DiscountCodeDialog({ open, onClose, discountCode }) {
  const [loading, setLoading] = reactExports.useState(false);
  const { user } = useAuthContext();
  const isEdit = !!discountCode;
  const organizationId = isEdit ? discountCode.organization_id : user?.branches[0]?.organization_id;
  const {
    branchesOnly: branches,
    primaryBranch,
    hasMultipleBranchesOnly: hasMultipleBranches
  } = useUserBranches();
  const defaultValues = {
    code: "",
    name: "",
    description: "",
    discount_type: "percentage",
    discount_value: 10,
    max_discount_amount: null,
    min_purchase_amount: 0,
    usage_limit: null,
    per_customer_limit: 1,
    applicable_to: ["products", "services"],
    branch_ids: primaryBranch?.id ? [primaryBranch.id] : [],
    valid_from: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    valid_until: null,
    is_active: true
  };
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(DiscountCodeSchema),
    defaultValues
  });
  const {
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = methods;
  reactExports.useEffect(() => {
    if (open) {
      if (discountCode) {
        reset(discountCode);
      } else {
        reset(defaultValues);
      }
    }
  }, [open, discountCode]);
  const discountType = watch("discount_type");
  reactExports.useEffect(() => {
    if (discountType === "fixed_amount") {
      setValue("max_discount_amount", null);
    }
  }, [discountType, setValue]);
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        organization_id: organizationId,
        created_by: user?.id,
        valid_from: new Date(data.valid_from).toISOString(),
        valid_until: data.valid_until ? new Date(data.valid_until).toISOString() : null,
        branch_ids: data.branch_ids?.length > 0 ? data.branch_ids : null
      };
      if (isEdit) {
        await updateDiscountCodeMutation(discountCode.id, payload);
        toast.success("Discount code updated successfully");
      } else {
        await createDiscountCodeMutation(payload);
        toast.success("Discount code created successfully");
      }
      reset();
      onClose();
    } catch (error) {
      console.error("Error saving discount code:", error);
      toast.error(`Failed to ${isEdit ? "update" : "create"} discount code`);
    } finally {
      setLoading(false);
    }
  });
  const handleClose = () => {
    reset();
    onClose();
  };
  const handleGenerateCode = () => {
    setValue("code", generateDiscountCode());
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { dividers: true, open, onClose: handleClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      isEdit ? "Edit Discount Code" : "Create Discount Code",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          onClick: handleClose,
          sx: {
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, id: "discount-code-form", onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, sx: { mt: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "code",
          label: "Discount Code",
          InputProps: {
            endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "small",
                onClick: handleGenerateCode,
                sx: { minWidth: "auto", px: 1 },
                children: "Generate"
              }
            ) })
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Name" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "description", label: "Description", multiline: true, rows: 2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "discount_type", label: "Discount Type", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "percentage", children: "Percentage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "fixed_amount", children: "Fixed Amount" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "discount_value",
          label: discountType === "percentage" ? "Discount Percentage (%)" : "Discount Amount",
          type: "number",
          InputProps: {
            startAdornment: discountType === "fixed_amount" ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" }) : null,
            endAdornment: discountType === "percentage" ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "%" }) : null
          }
        }
      ) }),
      discountType === "percentage" && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "max_discount_amount",
          label: "Max Discount Amount",
          type: "number",
          InputProps: {
            startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "min_purchase_amount",
          label: "Minimum Purchase Amount",
          type: "number",
          InputProps: {
            startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "usage_limit",
          label: "Total Usage Limit",
          type: "number",
          helperText: "Leave empty for unlimited"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "per_customer_limit",
          label: "Per Customer Limit",
          type: "number",
          helperText: "How many times per customer"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      hasMultipleBranches && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.MultiSelect,
        {
          fullWidth: true,
          name: "branch_ids",
          label: "Specific Branches",
          options: branches?.map((branch) => ({
            value: branch.id,
            label: branch.name
          })) || [],
          helperText: "Leave empty for all branches"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "valid_from", label: "Valid From", sx: { width: 1 } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "valid_until", label: "Valid Until", sx: { width: 1 } }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { form: "discount-code-form", type: "submit", onClick: handleClose, variant: "outlined", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(LoadingButton, { type: "submit", variant: "contained", onClick: onSubmit, loading, children: [
        isEdit ? "Update" : "Create",
        " Discount Code"
      ] })
    ] })
  ] });
}
DiscountCodeDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  discountCode: o.object
};
function DiscountCodeUsageDialog({ open, onClose, discountCode }) {
  const { usage, usageLoading } = useGetDiscountCodeUsage(open ? discountCode?.id : null);
  if (!discountCode) return null;
  const isPercentage = discountCode.discount_type === "percentage";
  const formatValue = (val) => isPercentage ? `${val}%` : `$${Number(val).toFixed(2)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:tag-price-bold-duotone", width: 24, color: "primary.main" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Discount Code Usage History" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700, letterSpacing: 0.5 }, children: discountCode.code }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: discountCode.is_active ? "success" : "default", children: discountCode.is_active ? "active" : "inactive" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 3, flexWrap: "wrap", useFlexGap: true, children: [
              discountCode.name && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: discountCode.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Discount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: formatValue(discountCode.discount_value) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Uses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
                  discountCode.usage_count ?? 0,
                  discountCode.usage_limit ? ` / ${discountCode.usage_limit}` : ""
                ] })
              ] }),
              discountCode.valid_until && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Expires" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(discountCode.valid_until) })
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
          description: "This discount code hasn't been used on any sale.",
          sx: { py: 5 }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0, children: usage.map((record, index) => {
        const clientName = record.client_profiles ? `${record.client_profiles.first_name} ${record.client_profiles.last_name}` : "—";
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
                      clientName
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", spacing: 0.25, flexShrink: 0, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 700, color: "error.main", children: [
                    "− ",
                    formatValue(record.discount_amount)
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
DiscountCodeUsageDialog.propTypes = {
  open: o.bool,
  onClose: o.func,
  discountCode: o.object
};
function DiscountCodeTableToolbar({
  filters,
  selectedRowCount,
  onOpenConfirmDeleteRows,
  toolbarOptions
}) {
  const { state, setState } = filters;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarLeftPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarQuickFilter, { size: "small" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", sx: { minWidth: 160 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            label: "Type",
            value: state.discountType[0] ?? "",
            onChange: (e) => setState({ discountType: e.target.value !== "" ? [e.target.value] : [] }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "All" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "percentage", children: "Percentage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "fixed_amount", children: "Fixed Amount" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      selectedRowCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "small",
          color: "error",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-minimalistic-bold" }),
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
function useDiscountCodeColumns({
  handleEditRow,
  handleViewUsage,
  confirmDialog,
  setSelectedRows,
  density
}) {
  return reactExports.useMemo(
    () => [
      {
        field: "name",
        headerName: "Name",
        width: 200,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ListItemText,
          {
            primary: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: params.value }),
            secondary: density != "compact" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                component: "span",
                variant: "body2",
                color: "text.secondary",
                sx: { display: "block" },
                children: params.row.description
              }
            ),
            slotProps: {
              primary: {
                typography: "body2",
                noWrap: true
              },
              secondary: {
                component: "span",
                color: "text.disabled"
              }
            }
          }
        ) })
      },
      {
        field: "code",
        headerName: "Code",
        width: 150,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600 }, children: params.value }) })
      },
      {
        field: "discount_type",
        headerName: "Type",
        width: 120,
        type: "singleSelect",
        valueOptions: [
          { value: "percentage", label: "Percentage" },
          { value: "fixed_amount", label: "Fixed Amount" }
        ],
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: params.value === "percentage" ? "info" : "success", children: params.value === "percentage" ? "Percentage" : "Fixed Amount" })
      },
      {
        field: "discount_value",
        headerName: "Value",
        width: 80,
        type: "number",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: params.row.discount_type === "percentage" ? `${params.value}%` : `$${params.value}` })
      },
      {
        field: "usage_count",
        headerName: "Used",
        width: 80,
        type: "number",
        align: "center",
        headerAlign: "center"
      },
      {
        field: "usage_limit",
        headerName: "Limit",
        width: 80,
        type: "number",
        align: "center",
        headerAlign: "center",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: params.value || "∞" })
      },
      {
        field: "is_active",
        headerName: "Status",
        width: 100,
        valueFormatter: (value) => value ? "Active" : "Inactive",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: params.value ? "success" : "error", children: params.value ? "Active" : "Inactive" })
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
        type: "date",
        valueGetter: (value) => value ? new Date(value) : null,
        headerName: "Expires",
        width: 120,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: params.value ? fDate(params.value) : "No Expiry" })
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
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:chart-square-bold" }),
              label: "View Usage",
              onClick: () => handleViewUsage(params.row)
            },
            "usage"
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
    [handleEditRow, handleViewUsage, confirmDialog, setSelectedRows, density]
  );
}
const HIDE_COLUMNS = {
  created_at: false
};
const HIDE_COLUMNS_TOGGLABLE = ["actions"];
function DiscountCodeListView() {
  const confirmDialog = Ee();
  const createDialog = Ee();
  const toolbarOptions = useToolbarSettings();
  const { user } = useAuthContext();
  const [paginationModel, setPaginationModel] = reactExports.useState({
    page: 0,
    pageSize: 10
  });
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [filterItems, setFilterItems] = reactExports.useState([]);
  const [sortModel, setSortModel] = reactExports.useState([{ field: "created_at", sort: "desc" }]);
  const [selectedRows, setSelectedRows] = reactExports.useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = reactExports.useState(HIDE_COLUMNS);
  const [editingDiscountCode, setEditingDiscountCode] = reactExports.useState(null);
  const [usageDiscountCode, setUsageDiscountCode] = reactExports.useState(null);
  const filters = ze({
    discountType: []
  });
  const organizationId = user?.branches[0]?.organization_id;
  const { discountCodes, discountCodesLoading, totalCount } = useGetDiscountCodes({
    organizationId,
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    discountType: filters.state.discountType[0] ?? null,
    searchQuery,
    filterItems,
    orderBy: sortModel[0]?.field || "created_at",
    order: sortModel[0]?.sort || "desc"
  });
  const handleFilterModelChange = reactExports.useCallback((newFilterModel) => {
    const searchValue = newFilterModel?.quickFilterValues?.[0] || "";
    setSearchQuery(searchValue);
    const validItems = (newFilterModel?.items ?? []).filter(
      (item) => item.value !== void 0 && item.value !== null && item.value !== ""
    );
    setFilterItems(validItems);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleSortModelChange = reactExports.useCallback((newSortModel) => {
    setSortModel(newSortModel);
  }, []);
  const handleDeleteRow = reactExports.useCallback(
    async (id) => {
      try {
        await deleteDiscountCodeMutation(id);
        toast.success("Discount code deleted successfully");
        confirmDialog.onFalse();
      } catch (error) {
        console.error("Error deleting discount code:", error);
        toast.error("Failed to delete discount code");
      }
    },
    [confirmDialog]
  );
  const handleDeleteRows = reactExports.useCallback(
    async (selectedRowIds) => {
      try {
        await Promise.all(selectedRowIds.map((id) => deleteDiscountCodeMutation(id)));
        toast.success("Discount codes deleted successfully");
        setSelectedRows([]);
        confirmDialog.onFalse();
      } catch (error) {
        console.error("Error deleting discount codes:", error);
        toast.error("Failed to delete some discount codes");
      }
    },
    [confirmDialog]
  );
  const handleEditRow = reactExports.useCallback(
    (row) => {
      setEditingDiscountCode(row);
      createDialog.onTrue();
    },
    [createDialog]
  );
  const handleCloseDialog = reactExports.useCallback(() => {
    setEditingDiscountCode(null);
    createDialog.onFalse();
  }, [createDialog]);
  const handleViewUsage = reactExports.useCallback((row) => {
    setUsageDiscountCode(row);
  }, []);
  const handleCloseUsageDialog = reactExports.useCallback(() => {
    setUsageDiscountCode(null);
  }, []);
  const columns = useDiscountCodeColumns({
    handleEditRow,
    handleViewUsage,
    confirmDialog,
    setSelectedRows,
    density: toolbarOptions.settings.density
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomBreadcrumbs,
        {
          heading: "Discount Codes",
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: createDialog.onTrue,
              children: "New Discount Code"
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
              rows: discountCodes,
              columns,
              getRowId: (row) => row.id,
              loading: discountCodesLoading,
              pageSizeOptions: [5, 10, 25],
              paginationModel,
              onPaginationModelChange: setPaginationModel,
              rowCount: totalCount,
              paginationMode: "server",
              sortingMode: "server",
              sortModel,
              onSortModelChange: handleSortModelChange,
              filterMode: "server",
              onFilterModelChange: handleFilterModelChange,
              columnVisibilityModel,
              onColumnVisibilityModelChange: (newModel) => setColumnVisibilityModel(newModel),
              hideFooter: totalCount === 0,
              onRowSelectionModelChange: (newSelectionModel) => {
                setSelectedRows(Array.from(newSelectionModel.ids));
              },
              pagination: totalCount > 0,
              ...toolbarOptions.settings,
              slots: {
                toolbar: DiscountCodeTableToolbar,
                noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EmptyContent,
                  {
                    title: "No discount codes found",
                    description: "Create your first discount code to get started"
                  }
                ),
                noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EmptyContent,
                  {
                    title: "No results found",
                    description: `No discount codes match your search for "${searchQuery}"`
                  }
                )
              },
              slotProps: {
                toolbar: {
                  filters,
                  selectedRowCount: selectedRows.length,
                  onOpenConfirmDeleteRows: confirmDialog.onTrue,
                  toolbarOptions
                },
                columnsManagement: {
                  getTogglableColumns: () => columns.filter((col) => !HIDE_COLUMNS_TOGGLABLE.includes(col.field)).map((col) => col.field)
                }
              },
              checkboxSelection: true,
              disableRowSelectionOnClick: true,
              sx: {
                [`& .${gridClasses.cell}`]: {
                  alignItems: "center",
                  display: "flex"
                },
                "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
                  outline: "none"
                }
              }
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DiscountCodeDialog,
      {
        open: createDialog.value,
        onClose: handleCloseDialog,
        discountCode: editingDiscountCode
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DiscountCodeUsageDialog,
      {
        open: !!usageDiscountCode,
        onClose: handleCloseUsageDialog,
        discountCode: usageDiscountCode
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: confirmDialog.onFalse,
        title: "Delete",
        content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Are you sure you want to delete",
          " ",
          selectedRows.length > 1 ? "these discount codes" : "this discount code",
          "? This action cannot be undone."
        ] }),
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
const metadata = { title: `Discount Codes | Dashboard - ${CONFIG.appName}` };
function DiscountCodePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiscountCodeListView, {})
  ] });
}
export {
  DiscountCodePage as default
};
