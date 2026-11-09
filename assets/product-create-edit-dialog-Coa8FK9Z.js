const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-B08HRm4A.js","./index-DCQoYTVP.css"])))=>i.map(i=>d[i]);
import { r as reactExports, ay as __vitePreload, t as toast, j as jsxRuntimeExports, c as Typography, M as MenuItem, d as Button, av as useAuthContext, h as dayjs, az as createStockReceipt, aA as setStockReceiptItems, aB as confirmStockReceipt, aC as transferStock, aD as recordServiceUsage, aE as createInventoryAdjustment, aF as approveInventoryAdjustment, K as Divider, ax as Alert, I as IconButton, B as Box, a8 as FormControlLabel, a0 as fCurrency, E as Ee, aG as updateProduct, aH as createProduct, S as Stack, T as Tooltip, a as Iconify } from "./index-B08HRm4A.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { o as object, s as string, j as discriminatedUnion, l as literal, a as array, b as boolean } from "./schemas-BVeYYbTr.js";
import { n as number } from "./coerce-5-WTXoHr.js";
import { c as createExpense } from "./expense-service-B2nZjY_a.js";
import { S as SupplierAutocomplete } from "./supplier-autocomplete-Cr5Mwn0p.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { b as useGetSuppliers } from "./supplier-service-CvoEEgb8.js";
import { Q as QuickAddSupplierDialog } from "./quick-add-supplier-dialog-DtmRFzkH.js";
const TRANSFER_SCHEMA = object({
  product_id: string().min(1, "Product is required"),
  from_branch_id: string().optional(),
  to_branch_id: string().optional(),
  quantity: number().min(1, "Quantity must be at least 1"),
  notes: string().optional()
}).refine(
  (data) => {
    if (!data.from_branch_id) return false;
    if (!data.to_branch_id) return false;
    if (data.from_branch_id === data.to_branch_id) return false;
    return true;
  },
  {
    message: "Please select valid source and destination locations",
    path: ["from_branch_id"]
  }
);
function ProductTransferDialog({ open, onClose, product, branches, onSuccess }) {
  const defaultValues = {
    product_id: product?.id || "",
    from_branch_id: "",
    to_branch_id: "",
    quantity: "",
    notes: ""
  };
  const methods = useForm({
    resolver: u(TRANSFER_SCHEMA),
    defaultValues
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    if (product && open) {
      reset({
        ...defaultValues,
        product_id: product.id
      });
    }
  }, [product, open, reset]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      const { transferStock: transferStock2 } = await __vitePreload(async () => {
        const { transferStock: transferStock3 } = await import("./index-B08HRm4A.js").then((n) => n.ek);
        return { transferStock: transferStock3 };
      }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
      const { data: result, error } = await transferStock2({
        productId: data.product_id,
        fromBranchId: data.from_branch_id,
        toBranchId: data.to_branch_id,
        quantity: data.quantity,
        notes: data.notes || null
      });
      if (error) {
        throw error;
      }
      toast.success(result?.message || "Product transfer completed successfully");
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error("Error transferring product:", error);
      toast.error(error.message || "Failed to transfer product");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Transfer Product" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, sx: { mt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Grid,
          {
            size: {
              xs: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { textAlign: "center", textTransform: "capitalize" }, children: product?.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "body2",
                  sx: {
                    mb: 2,
                    textAlign: "center !important",
                    textTransform: "capitalize",
                    color: "text.disabled"
                  },
                  children: [
                    "(SKU: ",
                    product?.sku || "-",
                    ")"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, md: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 2 }, children: "From Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "from_branch_id", label: "Select Location *", children: branches?.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: branch.id, children: [
            branch.name,
            branch.location_type === "warehouse" ? " (Warehouse)" : " (Branch)"
          ] }, branch.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, md: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 2 }, children: "To Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "to_branch_id", label: "Select Location *", children: branches?.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: branch.id, children: [
            branch.name,
            branch.location_type === "warehouse" ? " (Warehouse)" : " (Branch)"
          ] }, branch.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "quantity",
            label: "Quantity *",
            type: "number",
            inputProps: { min: 1 }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "notes", label: "Notes", multiline: true, rows: 2 }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isSubmitting, children: "Transfer Product" })
      ] })
    ] })
  ] });
}
const SKIP_ADJUSTMENT_APPROVAL = true;
const OPERATION_TYPES = [
  { value: "stock_in", label: "Stock In (Receive from Supplier)" },
  { value: "transfer", label: "Transfer Between Locations" },
  { value: "service_usage", label: "Service Usage (Consumed in Store)" },
  { value: "adjustment", label: "Stock Count Adjustment" }
];
const locationFields = {
  to_branch_id: string().optional()
};
const stockInSchema = object({
  operation: literal("stock_in"),
  ...locationFields,
  quantity: number().int().min(1, "Must be at least 1"),
  unit_cost: number().min(0).optional().or(literal("")),
  supplier_id: string().optional(),
  reference_number: string().optional(),
  batch_number: string().optional(),
  expiry_date: string().optional(),
  notes: string().optional()
}).refine((d) => !!d.to_branch_id, {
  message: "Please select a destination location",
  path: ["to_branch_id"]
}).refine((d) => !d.expiry_date || !!d.batch_number, {
  message: "Batch number is required when an expiry date is set",
  path: ["batch_number"]
});
const transferSchema = object({
  operation: literal("transfer"),
  from_branch_id: string().optional(),
  ...locationFields,
  quantity: number().int().min(1, "Must be at least 1"),
  notes: string().optional()
}).refine((d) => !!d.from_branch_id, {
  message: "Please select a source location",
  path: ["from_branch_id"]
}).refine((d) => !!d.to_branch_id, {
  message: "Please select a destination location",
  path: ["to_branch_id"]
});
const serviceUsageSchema = object({
  operation: literal("service_usage"),
  ...locationFields,
  quantity: number().int().min(1, "Must be at least 1"),
  service_name: string().optional(),
  notes: string().optional()
}).refine((d) => !!d.to_branch_id, {
  message: "Please select a location",
  path: ["to_branch_id"]
});
const adjustmentSchema = object({
  operation: literal("adjustment"),
  ...locationFields,
  expected_quantity: number().int().min(0, "Cannot be negative"),
  actual_quantity: number().int().min(0, "Cannot be negative"),
  reason: string().optional(),
  notes: string().optional()
}).refine((d) => !!d.to_branch_id, {
  message: "Please select a location",
  path: ["to_branch_id"]
});
const SCHEMA = discriminatedUnion("operation", [
  stockInSchema,
  transferSchema,
  serviceUsageSchema,
  adjustmentSchema
]);
const DEFAULT_VALUES = {
  operation: "stock_in",
  // destination
  to_branch_id: "",
  // transfer source
  from_branch_id: "",
  // stock in
  quantity: "",
  unit_cost: "",
  supplier_id: "",
  reference_number: "",
  batch_number: "",
  expiry_date: "",
  // service usage
  service_name: "",
  // adjustment
  expected_quantity: "",
  actual_quantity: "",
  reason: "",
  notes: ""
};
function ProductInventoryDialog({ open, onClose, product, branches = [], onSuccess }) {
  const { user } = useAuthContext();
  const [addExpense, setAddExpense] = reactExports.useState(true);
  const methods = useForm({
    resolver: u(SCHEMA),
    defaultValues: {
      ...DEFAULT_VALUES,
      unit_cost: product?.cost_price?.toString() ?? ""
    }
  });
  const {
    handleSubmit,
    reset,
    watch,
    setValue,
    getValues,
    setError,
    formState: { isSubmitting }
  } = methods;
  const operation = watch("operation");
  const toBranchId = watch("to_branch_id");
  const watchedQuantity = watch("quantity");
  const watchedUnitCost = watch("unit_cost");
  const watchedBatchNumber = watch("batch_number");
  const watchedExpiryDate = watch("expiry_date");
  const requiresBatch = !!watchedExpiryDate;
  const stockInTotal = reactExports.useMemo(() => {
    const qty = Number(watchedQuantity);
    const cost = Number(watchedUnitCost);
    if (!qty || !cost || qty <= 0 || cost <= 0) return 0;
    return qty * cost;
  }, [watchedQuantity, watchedUnitCost]);
  const systemQuantity = reactExports.useMemo(() => {
    if (operation !== "adjustment") return null;
    const locs = product?.inventoryLocations ?? [];
    const match = locs.find((l) => l.branch_id === toBranchId);
    return match?.quantity ?? 0;
  }, [operation, toBranchId, product]);
  reactExports.useEffect(() => {
    if (operation === "adjustment" && toBranchId) {
      methods.setValue("expected_quantity", systemQuantity ?? 0);
    }
  }, [operation, systemQuantity, toBranchId, methods]);
  reactExports.useEffect(() => {
    if (requiresBatch && watchedBatchNumber && !getValues("expiry_date") && product?.expiry_days) {
      setValue("expiry_date", dayjs().add(product.expiry_days, "day").format("YYYY-MM-DD"));
    }
  }, [watchedBatchNumber, requiresBatch, product, setValue, getValues]);
  reactExports.useEffect(() => {
    if (open) {
      reset({
        ...DEFAULT_VALUES,
        unit_cost: product?.cost_price?.toString() ?? ""
      });
    }
  }, [product, open, reset]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      const destinationBranchId = data.to_branch_id;
      if (data.operation === "stock_in") {
        const organizationId = user?.primary_branch?.organization_id || user?.branches?.[0]?.organization_id || null;
        let expenseId = null;
        if (addExpense && stockInTotal > 0) {
          const expense = await createExpense({
            amount: stockInTotal,
            description: `Stock in — ${product?.name}${data.reference_number ? ` (Ref: ${data.reference_number})` : ""}`,
            category: "supplies",
            expense_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
            branch_id: destinationBranchId,
            organization_id: organizationId,
            supplier_id: data.supplier_id || null,
            created_by: user?.id || null,
            notes: data.notes || void 0,
            payment_status: "paid"
          });
          expenseId = expense.id;
        }
        const { data: receipt } = await createStockReceipt({
          branchId: destinationBranchId,
          supplierId: data.supplier_id || null,
          referenceNumber: data.reference_number || null,
          notes: data.notes || null,
          expenseId
        });
        await setStockReceiptItems(receipt.id, [
          {
            productId: product.id,
            quantity: Number(data.quantity),
            unitCost: data.unit_cost ? Number(data.unit_cost) : void 0,
            batchNumber: data.batch_number || void 0,
            expiryDate: data.expiry_date || void 0
          }
        ]);
        await confirmStockReceipt(receipt.id);
        toast.success("Stock received successfully");
      }
      if (data.operation === "transfer") {
        await transferStock({
          productId: product.id,
          quantity: Number(data.quantity),
          fromBranchId: data.from_branch_id,
          toBranchId: destinationBranchId,
          notes: data.notes || null
        });
        toast.success("Stock transferred successfully");
      }
      if (data.operation === "service_usage") {
        await recordServiceUsage({
          productId: product.id,
          quantity: Number(data.quantity),
          branchId: destinationBranchId,
          serviceName: data.service_name || null,
          notes: data.notes || null
        });
        toast.success("Service usage recorded");
      }
      if (data.operation === "adjustment") {
        const { data: adjustment } = await createInventoryAdjustment({
          productId: product.id,
          branchId: destinationBranchId,
          expectedQuantity: Number(data.expected_quantity),
          actualQuantity: Number(data.actual_quantity),
          reason: data.reason?.trim() || "",
          notes: data.notes || null
        });
        if (SKIP_ADJUSTMENT_APPROVAL) {
          try {
            await approveInventoryAdjustment(adjustment.id);
            toast.success("Inventory adjusted");
          } catch (approveError) {
            console.error("Auto-approve failed:", approveError);
            toast.warning("Adjustment saved but not applied — it is pending manager approval");
          }
        }
      }
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error("Inventory operation failed:", error);
      toast.error(error?.message ?? "Operation failed");
    }
  });
  const LocationPicker = ({ prefix, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: `${prefix}_branch_id`, label: `${label} *`, children: branches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: b.id, children: [
    b.name,
    b.location_type === "warehouse" ? " (Warehouse)" : " (Branch)"
  ] }, b.id)) }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Manage Inventory" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: product?.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
            "SKU: ",
            product?.sku
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "operation", label: "Operation *", children: OPERATION_TYPES.map((op) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: op.value, children: op.label }, op.value)) }) }),
        operation === "stock_in" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LocationPicker, { prefix: "to", label: "Destination" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "quantity", label: "Quantity *", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "unit_cost", label: "Unit Cost", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SupplierAutocomplete, { name: "supplier_id", label: "Supplier", quickAdd: true, storeId: true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "reference_number", label: "Invoice / PO Number" }) }),
          !!product?.expiry_days && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "info", sx: { fontSize: 13 }, children: [
            "This product has a ",
            product.expiry_days,
            "-day shelf life. Enter an expiry date to require a batch number."
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "batch_number",
              label: requiresBatch ? "Batch Number *" : "Batch Number"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.DatePicker,
            {
              name: "expiry_date",
              label: "Expiry Date",
              slotProps: {
                textField: {
                  InputProps: {
                    endAdornment: watchedExpiryDate ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        edge: "end",
                        onClick: () => setValue("expiry_date", ""),
                        sx: { mr: -0.5 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Box,
                          {
                            component: "span",
                            sx: { fontSize: 16, lineHeight: 1, color: "text.secondary" },
                            children: "×"
                          }
                        )
                      }
                    ) }) : null
                  }
                }
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "notes", label: "Notes", multiline: true, rows: 2 }) })
        ] }),
        operation === "transfer" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "From" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LocationPicker, { prefix: "from", label: "Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "To" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LocationPicker, { prefix: "to", label: "Destination" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "quantity", label: "Quantity *", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "notes", label: "Notes", multiline: true, rows: 2 }) })
        ] }),
        operation === "service_usage" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LocationPicker, { prefix: "to", label: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "quantity", label: "Quantity Used *", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "service_name", label: "Service Name (optional)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "notes", label: "Notes", multiline: true, rows: 2 }) })
        ] }),
        operation === "adjustment" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          !SKIP_ADJUSTMENT_APPROVAL,
          /* @__PURE__ */ jsxRuntimeExports.jsx(LocationPicker, { prefix: "to", label: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              sx: {
                px: 2,
                py: 1.5,
                borderRadius: 1.5,
                bgcolor: "background.neutral",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Current system quantity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: toBranchId ? systemQuantity : "—" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "actual_quantity", label: "Counted Quantity *", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "reason", label: "Reason (optional)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "notes", label: "Notes", multiline: true, rows: 2 }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flexGrow: 1 } }),
        operation === "stock_in" && stockInTotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormControlLabel,
          {
            control: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: addExpense,
                onChange: (e) => setAddExpense(e.target.checked),
                size: "small"
              }
            ),
            label: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
              "Add expense (",
              fCurrency(stockInTotal),
              ")"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", variant: "contained", loading: isSubmitting, children: [
          operation === "stock_in" && "Receive Stock",
          operation === "transfer" && "Transfer",
          operation === "service_usage" && "Record Usage",
          operation === "adjustment" && "Adjust Stock"
        ] })
      ] })
    ] })
  ] });
}
const PRODUCT_CATEGORIES = [
  { value: "hair_care", label: "Hair Care" },
  { value: "skin_care", label: "Skin Care" },
  { value: "makeup", label: "Makeup" },
  { value: "nails", label: "Nails" },
  { value: "tools", label: "Tools" },
  { value: "equipment", label: "Equipment" },
  { value: "consumables", label: "Consumables" },
  { value: "retail", label: "Retail" },
  { value: "other", label: "Other" }
];
const PRODUCT_TAGS = [
  "Organic",
  "Vegan",
  "Cruelty-Free",
  "Hypoallergenic",
  "Paraben-Free",
  "Sulfate-Free",
  "Natural",
  "Eco-Friendly",
  "Dermatologist-Tested",
  "Waterproof",
  "Long-Lasting",
  "Professional",
  "Salon-Grade",
  "Travel-Size",
  "Bundle",
  "Limited Edition",
  "New Arrival",
  "Best Seller",
  "On Sale",
  "Discontinued"
];
const PRODUCT_SCHEMA = object({
  sku: string().optional().nullable(),
  name: string().min(1, "Product name is required"),
  description: string().optional().nullable(),
  category: string().min(1, "Category is required"),
  brand: string().optional().nullable(),
  supplier_id: string().uuid().optional().nullable(),
  barcode: string().optional().nullable(),
  cost_price: number().min(0, "Cost price must be positive"),
  retail_price: number().min(0, "Retail price must be positive"),
  wholesale_price: number().min(0).optional(),
  tax_rate: number().min(0).max(100, "Tax rate cannot exceed 100%").optional(),
  unit: string().default("piece"),
  min_stock_level: number().min(0).default(0),
  max_stock_level: number().min(0).optional(),
  weight_grams: number().min(0).optional(),
  expiry_days: number().min(0).optional(),
  is_taxable: boolean().default(true),
  is_active: boolean().default(true),
  tags: array(string()).optional()
});
function ProductCreateEditDialog({ open, onClose, product, onSuccess }) {
  const isEdit = !!product;
  const { suppliers, revalidateSuppliers } = useGetSuppliers();
  const quickSupplierDialog = Ee();
  const defaultValues = {
    sku: null,
    name: "",
    description: "",
    category: "other",
    brand: "",
    supplier_id: null,
    barcode: "",
    cost_price: "",
    retail_price: "",
    wholesale_price: "",
    tax_rate: "",
    unit: "piece",
    min_stock_level: "",
    max_stock_level: "",
    weight_grams: "",
    expiry_days: "",
    is_taxable: true,
    is_active: true,
    tags: []
  };
  const methods = useForm({
    resolver: u(PRODUCT_SCHEMA),
    defaultValues
  });
  const {
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    if (open) {
      reset(
        product ? {
          ...product,
          description: product.description ?? "",
          brand: product.brand ?? "",
          barcode: product.barcode ?? "",
          supplier_id: product.supplier_id ?? null,
          tags: product.tags ?? []
        } : defaultValues
      );
    }
  }, [open, product]);
  reactExports.useEffect(() => {
    if (!open || !window.isElectron) return void 0;
    window.electron.onBarcodeScanned((barcode) => {
      setValue("barcode", barcode, { shouldDirty: true });
      toast.info(`Barcode scanned: ${barcode}`);
    });
    return () => {
      window.electron.removeAllBarcodeListeners();
    };
  }, [open, setValue]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      const submitData = {
        ...data,
        max_stock_level: data.max_stock_level || null,
        weight_grams: data.weight_grams || null,
        expiry_days: data.expiry_days || null,
        wholesale_price: data.wholesale_price || null,
        tags: data.tags?.filter((tag) => tag.trim()) || []
      };
      if (isEdit) {
        await updateProduct(product.id, submitData);
        toast.success("Product updated successfully");
      } else {
        await createProduct(submitData);
        toast.success("Product created successfully");
      }
      onSuccess?.();
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error(isEdit ? "Failed to update product" : "Failed to create product");
    } finally {
      reset();
      onClose();
    }
  });
  const handleClose = () => {
    reset();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "md", fullWidth: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Product" : "Create Product" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { maxHeight: "65vh", overflow: "auto", pt: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.secondary", noWrap: true, children: "Product Identity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { flex: 1 } })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Product Name *" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "sku", label: "SKU" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "category", label: "Category *", children: PRODUCT_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: cat.value, children: cat.label }, cat.value)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "brand", label: "Brand" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "description", label: "Description", multiline: true, rows: 2 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.secondary", noWrap: true, children: "Sourcing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { flex: 1 } })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", spacing: 1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "supplier_id", label: "Supplier", sx: { flex: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "None" }),
              suppliers.filter((s) => s.is_active).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: s.id, children: s.name }, s.id))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Quick add supplier", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                onClick: quickSupplierDialog.onTrue,
                sx: { mt: 1, border: "1px dashed", borderColor: "divider", borderRadius: 1 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" })
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "barcode", label: "Barcode / EAN" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.secondary", noWrap: true, children: "Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { flex: 1 } })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "cost_price", label: "Cost Price *", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "retail_price", label: "Retail Price *", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "wholesale_price", label: "Wholesale Price", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "tax_rate",
              label: "Tax Rate (%)",
              type: "number",
              inputProps: { step: "0.01", min: "0", max: "100" }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.secondary", noWrap: true, children: "Inventory" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { flex: 1 } })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "min_stock_level", label: "Min Stock", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "max_stock_level", label: "Max Stock", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "weight_grams", label: "Weight (g)", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "expiry_days", label: "Expiry (days)", type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.secondary", noWrap: true, children: "Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { flex: 1 } })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 3, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "is_active", label: "Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "is_taxable", label: "Taxable" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Autocomplete,
            {
              name: "tags",
              label: "Tags",
              placeholder: "Add tags...",
              multiple: true,
              freeSolo: true,
              options: PRODUCT_TAGS
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, disabled: isSubmitting, children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", loading: isSubmitting, variant: "contained", children: isEdit ? "Update" : "Create" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuickAddSupplierDialog,
      {
        open: quickSupplierDialog.value,
        onClose: quickSupplierDialog.onFalse,
        onCreated: (newSupplier) => {
          revalidateSuppliers?.();
          setValue("supplier_id", newSupplier.id);
          quickSupplierDialog.onFalse();
        }
      }
    )
  ] });
}
export {
  ProductCreateEditDialog as P,
  ProductInventoryDialog as a,
  ProductTransferDialog as b
};
