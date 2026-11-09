import { t as toast, j as jsxRuntimeExports, S as Stack, c as Typography, B as Box, M as MenuItem, d as Button } from "./index-B08HRm4A.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { i as isValidPhoneNumber } from "./index-C4JOln-R.js";
import { a as updateSupplier, c as createSupplier } from "./supplier-service-CvoEEgb8.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { s as schemaUtils } from "./schema-utils-CG9_JlGr.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { o as object, b as boolean, s as string, l as literal } from "./schemas-BVeYYbTr.js";
const SUPPLIER_SCHEMA = object({
  name: string().min(1, "Supplier name is required"),
  contact_name: string().optional().nullable(),
  email: string().email("Invalid email").optional().or(literal("")).nullable(),
  phone: schemaUtils.phoneNumber({ isValid: isValidPhoneNumber }).optional().nullable(),
  address: string().optional().nullable(),
  city: string().optional().nullable(),
  country: string().optional().nullable(),
  website: string().optional().nullable(),
  tax_number: string().optional().nullable(),
  payment_terms: string().optional().nullable(),
  currency: string().default("USD"),
  notes: string().optional().nullable(),
  is_active: boolean().default(true)
});
const PAYMENT_TERMS = [
  { value: "COD", label: "Cash on Delivery" },
  { value: "Net 15", label: "Net 15" },
  { value: "Net 30", label: "Net 30" },
  { value: "Net 45", label: "Net 45" },
  { value: "Net 60", label: "Net 60" },
  { value: "Net 90", label: "Net 90" },
  { value: "EOM", label: "End of Month" },
  { value: "Prepaid", label: "Prepaid" }
];
const CURRENCIES = [
  { value: "USD", label: "USD – US Dollar" },
  { value: "EUR", label: "EUR – Euro" },
  { value: "GBP", label: "GBP – British Pound" },
  { value: "SAR", label: "SAR – Saudi Riyal" },
  { value: "AED", label: "AED – UAE Dirham" },
  { value: "KWD", label: "KWD – Kuwaiti Dinar" },
  { value: "QAR", label: "QAR – Qatari Riyal" },
  { value: "BHD", label: "BHD – Bahraini Dinar" },
  { value: "OMR", label: "OMR – Omani Rial" }
];
function SupplierCreateEditDialog({ open, onClose, supplier, onSuccess }) {
  const isEdit = !!supplier;
  const defaultValues = {
    name: supplier?.name ?? "",
    contact_name: supplier?.contact_name ?? "",
    email: supplier?.email ?? "",
    phone: supplier?.phone ?? null,
    address: supplier?.address ?? "",
    city: supplier?.city ?? "",
    country: supplier?.country ?? "",
    website: supplier?.website ?? "",
    tax_number: supplier?.tax_number ?? "",
    payment_terms: supplier?.payment_terms ?? "",
    currency: supplier?.currency ?? "USD",
    notes: supplier?.notes ?? "",
    is_active: supplier?.is_active ?? true
  };
  const methods = useForm({
    resolver: u(SUPPLIER_SCHEMA),
    defaultValues,
    values: supplier ? {
      name: supplier.name ?? "",
      contact_name: supplier.contact_name ?? "",
      email: supplier.email ?? "",
      phone: supplier.phone ?? "",
      address: supplier.address ?? "",
      city: supplier.city ?? "",
      country: supplier.country ?? "",
      website: supplier.website ?? "",
      tax_number: supplier.tax_number ?? "",
      payment_terms: supplier.payment_terms ?? "",
      currency: supplier.currency ?? "USD",
      notes: supplier.notes ?? "",
      is_active: supplier.is_active ?? true
    } : void 0
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (formData) => {
    try {
      if (isEdit) {
        await updateSupplier(supplier.id, formData);
        toast.success("Supplier updated successfully");
      } else {
        await createSupplier(formData);
        toast.success("Supplier created successfully");
      }
      onSuccess?.();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to save supplier");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Supplier" : "New Supplier" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { color: "text.secondary" }, children: "Basic Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Supplier Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "contact_name", label: "Contact Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "email", label: "Email", type: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Phone, { name: "phone", label: "Phone", defaultCountry: "LB" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { color: "text.secondary" }, children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "address", label: "Street Address", multiline: true, rows: 2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "city", label: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "country", label: "Country" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { color: "text.secondary" }, children: "Business Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" }, gap: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "website", label: "Website" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "tax_number", label: "Tax / VAT Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "payment_terms", label: "Payment Terms", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "None" }),
            PAYMENT_TERMS.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: pt.value, children: pt.label }, pt.value))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "currency", label: "Currency", children: CURRENCIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: c.value, children: c.label }, c.value)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "notes", label: "Notes", multiline: true, rows: 3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Switch,
          {
            name: "is_active",
            label: "Active",
            helperText: "Inactive suppliers won't appear in selectors"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", loading: isSubmitting, children: isEdit ? "Save Changes" : "Create Supplier" })
      ] })
    ] })
  ] });
}
export {
  SupplierCreateEditDialog as S
};
