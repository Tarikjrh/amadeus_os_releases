import { t as toast, j as jsxRuntimeExports, d as Button } from "./index-B08HRm4A.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { i as isValidPhoneNumber } from "./index-C4JOln-R.js";
import { c as createSupplier } from "./supplier-service-CvoEEgb8.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { s as schemaUtils } from "./schema-utils-CG9_JlGr.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { o as object, s as string, l as literal } from "./schemas-BVeYYbTr.js";
const QUICK_SUPPLIER_SCHEMA = object({
  name: string().min(1, "Supplier name is required"),
  contact_name: string().optional(),
  email: string().email("Invalid email").optional().or(literal("")),
  phone: schemaUtils.phoneNumber({ isValid: isValidPhoneNumber }).optional().nullable()
});
function QuickAddSupplierDialog({ open, onClose, onCreated }) {
  const methods = useForm({
    resolver: u(QUICK_SUPPLIER_SCHEMA),
    defaultValues: { name: "", contact_name: "", email: "", phone: null }
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    try {
      const newSupplier = await createSupplier(data);
      toast.success(`Supplier "${newSupplier.name}" created`);
      reset();
      onCreated(newSupplier);
    } catch (err) {
      console.error(err);
      toast.error("Failed to create supplier");
    }
  });
  const handleClose = () => {
    reset();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Quick Add Supplier" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { pt: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Supplier Name *", autoFocus: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "contact_name", label: "Contact Name" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "email", label: "Email", type: "email" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Phone, { name: "phone", label: "Phone", defaultCountry: "LB" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isSubmitting, children: "Create Supplier" })
      ] })
    ] })
  ] });
}
export {
  QuickAddSupplierDialog as Q
};
