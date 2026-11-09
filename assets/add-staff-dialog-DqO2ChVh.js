import { r as reactExports, t as toast, j as jsxRuntimeExports, S as Stack, B as Box, c as Typography, M as MenuItem, a as Iconify, K as Divider, d as Button, av as useAuthContext, a6 as useUserBranches, ax as Alert } from "./index-B08HRm4A.js";
import { o } from "./index-Di_Bgabu.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { i as isValidPhoneNumber } from "./index-C4JOln-R.js";
import { x as updateEmployee, y as createEmployeeSchedules, u as updateEmployeeLevel } from "./staff-service-CYDKVOm2.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { s as schemaUtils } from "./schema-utils-CG9_JlGr.js";
import { S as StylistColorPicker } from "./stylist-color-picker-BOdxdsi0.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { A as Accordion, a as AccordionSummary, b as AccordionDetails } from "./AccordionDetails-O5tQthbm.js";
import { L as LoadingButton } from "./LoadingButton-DJQpPOpu.js";
import { o as object, s as string, i as _enum, b as boolean } from "./schemas-BVeYYbTr.js";
import { c as createStaffAccount, g as grantBranchAccess } from "./user-service-BmyEAxOq.js";
import { f as assignAllServicesToStylist, g as STYLIST_LEVELS } from "./services-UhlA7T7c.js";
const StaffEditSchema = object({
  first_name: string().min(1, "First name is required"),
  last_name: string().min(1, "Last name is required"),
  phone: schemaUtils.phoneNumber({ isValid: isValidPhoneNumber }).optional().nullable(),
  date_of_birth: string().optional().nullable(),
  gender: _enum(["male", "female", "other", "prefer_not_to_say"]).optional().nullable(),
  address: string().optional(),
  city: string().optional(),
  state: string().optional(),
  postal_code: string().optional(),
  country: string().nullable().optional(),
  calendar_color: string().optional().nullable()
});
function StaffEditForm({ open, staffData, onCancel, onSuccess }) {
  const [loading, setLoading] = reactExports.useState(false);
  const [calendarColor, setCalendarColor] = reactExports.useState(null);
  const [addressExpanded, setAddressExpanded] = reactExports.useState(false);
  const methods = useForm({
    resolver: u(StaffEditSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: null,
      date_of_birth: null,
      gender: null,
      address: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
      calendar_color: null
    }
  });
  const { handleSubmit, reset, watch } = methods;
  reactExports.useEffect(() => {
    if (staffData) {
      reset({
        first_name: staffData.first_name || "",
        last_name: staffData.last_name || "",
        phone: staffData.phone || null,
        date_of_birth: staffData.date_of_birth || null,
        gender: staffData.gender || null,
        address: staffData.address || "",
        city: staffData.city || "",
        state: staffData.state || "",
        postal_code: staffData.postal_code || "",
        country: staffData.country || "",
        calendar_color: staffData.calendar_color || null
      });
      setCalendarColor(staffData.calendar_color || null);
      const hasAddressData = staffData.address || staffData.city || staffData.state || staffData.postal_code || staffData.country;
      setAddressExpanded(!!hasAddressData);
    }
  }, [staffData, reset]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const updateData = {
        ...data,
        display_name: `${data.first_name} ${data.last_name}`,
        calendar_color: calendarColor || null
      };
      const { error } = await updateEmployee(staffData.id, updateData);
      if (error) throw error;
      toast.success("Staff profile updated successfully!");
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error updating staff profile:", error);
      toast.error(error.message || "Failed to update staff profile");
    } finally {
      setLoading(false);
    }
  });
  const isStylist = staffData?.role === "stylist";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: onCancel, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Edit Staff Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { py: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { id: "staff-edit-form", methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            p: 2,
            bgcolor: "background.neutral",
            borderRadius: 1
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Email:" }),
              " ",
              staffData?.email
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                color: "text.disabled",
                sx: { mt: 0.5, display: "block" },
                children: "Email cannot be changed as it's used for authentication"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "first_name", label: "First Name", required: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "last_name", label: "Last Name", required: true }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Phone, { name: "phone", label: "Phone Number", defaultCountry: "LB" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "date_of_birth", label: "Date of Birth" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Field.Select,
          {
            name: "gender",
            label: "Gender",
            slotProps: { inputLabel: { shrink: watch("gender") } },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "Select Gender" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "male", children: "Male" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "female", children: "Female" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Accordion,
        {
          sx: {
            boxShadow: "none",
            "& .MuiAccordionSummary-root": {
              ...addressExpanded === false && {
                border: "1px dashed",
                borderColor: "divider",
                borderRadius: 1
              }
            }
          },
          disableGutters: true,
          expanded: addressExpanded,
          onChange: (event, isExpanded) => setAddressExpanded(isExpanded),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSummary, { expandIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:chevron-down" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", sx: { width: "100%" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600 }, children: addressExpanded ? "Address Information" : "Add Address Information" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetails, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, sx: { width: "100%" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "address", label: "Address", multiline: true, rows: 2 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "city", label: "City" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "state", label: "State/Province" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "postal_code", label: "Postal Code" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field.CountrySelect, { name: "country", label: "Country" })
            ] }) })
          ]
        }
      ),
      isStylist && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      isStylist && /* @__PURE__ */ jsxRuntimeExports.jsx(StylistColorPicker, { value: calendarColor, onChange: setCalendarColor })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: onCancel, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { form: "staff-edit-form", type: "submit", variant: "contained", loading, children: "Save Changes" })
    ] })
  ] });
}
StaffEditForm.propTypes = {
  open: o.bool.isRequired,
  staffData: o.object.isRequired,
  onCancel: o.func,
  onSuccess: o.func
};
function hasRole(userRoles, allowedRoles) {
  if (!userRoles || userRoles.length === 0) return false;
  const rolesArray = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
  return userRoles.some((role) => rolesArray.includes(role));
}
function isAdmin(user) {
  return user?.isAdmin || hasRole(user?.roles, "admin");
}
function isManager(user) {
  return hasRole(user?.roles, "manager");
}
function canEditStaffProfile(currentUser, staffId) {
  if (!currentUser || !staffId) return false;
  if (isAdmin(currentUser)) return true;
  if (isManager(currentUser)) return true;
  return currentUser.id === staffId;
}
const AddStaffSchema = object({
  first_name: string().min(1, "First name is required"),
  last_name: string().min(1, "Last name is required"),
  email: string().email("Invalid email address").min(1, "Email is required"),
  password: string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/[0-9]/, "Password must contain at least one number"),
  phone: schemaUtils.phoneNumber({ isValid: isValidPhoneNumber }).optional().nullable(),
  branch_id: string().min(1, "Branch is required"),
  role: _enum(["manager", "stylist", "cashier", "stock", "receptionist", "staff"], {
    required_error: "Role is required"
  }),
  is_primary: boolean(),
  create_default_schedule: boolean(),
  stylist_level: _enum(["junior", "senior", "prive"]).optional(),
  assign_all_services: boolean(),
  add_to_all_branches: boolean()
});
function AddStaffDialog({ open, onClose, onSuccess }) {
  const [loading, setLoading] = reactExports.useState(false);
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const { user } = useAuthContext();
  const { primaryBranch, branches, loading: loadingBranches } = useUserBranches();
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: null,
    branch_id: primaryBranch?.id || "",
    role: "stylist",
    is_primary: true,
    create_default_schedule: true,
    stylist_level: "junior",
    assign_all_services: false,
    add_to_all_branches: false
  };
  const methods = useForm({
    resolver: u(AddStaffSchema),
    defaultValues
  });
  const { handleSubmit, reset, watch } = methods;
  const isStylist = watch("role") === "stylist";
  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const { data: result, error } = await createStaffAccount({
        email: data.email,
        password: data.password,
        firstName: data.first_name,
        lastName: data.last_name,
        phone: data.phone || null,
        branchId: data.branch_id,
        role: data.role,
        isPrimary: data.is_primary
      });
      if (error) throw error;
      if (data.create_default_schedule && result?.id) {
        const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
        const schedules = weekdays.map((day) => ({
          employee_id: result.id,
          branch_id: data.branch_id,
          day_of_week: day,
          start_time: "09:00:00",
          end_time: "17:00:00"
        }));
        const { error: scheduleError } = await createEmployeeSchedules(schedules);
        if (scheduleError) {
          console.error("Error creating default schedule:", scheduleError);
          toast.warning("Staff account created but default schedule failed to create");
        }
      }
      if (result?.id) {
        const extraBranches = data.add_to_all_branches ? (branches || []).filter((b) => b.id !== data.branch_id) : [];
        const failures = [];
        const grantedExtra = [];
        await Promise.all(
          extraBranches.map(async (b) => {
            const { error: grantError } = await grantBranchAccess(
              result.id,
              b.id,
              data.role,
              false
            );
            if (grantError) failures.push(`access to ${b.name}`);
            else grantedExtra.push(b);
          })
        );
        if (data.role === "stylist") {
          const targetBranches = [{ id: data.branch_id }, ...grantedExtra];
          await Promise.all(
            targetBranches.map(async (b) => {
              const { error: levelError } = await updateEmployeeLevel({
                userId: result.id,
                branchId: b.id,
                stylistLevel: data.stylist_level || "junior",
                notes: "Initial level"
              });
              if (levelError) failures.push(`level in ${b.name || "branch"}`);
              if (data.assign_all_services) {
                try {
                  await assignAllServicesToStylist({
                    userId: result.id,
                    branchId: b.id,
                    assignedBy: user?.id
                  });
                } catch {
                  failures.push(`services in ${b.name || "branch"}`);
                }
              }
            })
          );
        }
        if (failures.length) {
          console.error("Staff post-create failures:", failures);
          toast.warning(`Staff account created but some setup failed: ${failures.join(", ")}`);
        }
      }
      toast.success("Staff account created successfully!");
      reset();
      onSuccess?.(result);
      onClose();
    } catch (error) {
      console.error("Error creating staff account:", error);
      toast.error(error.message || "Failed to create staff account");
    } finally {
      setLoading(false);
    }
  });
  const handleClose = () => {
    if (!loading) {
      reset();
      onClose();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add New Staff Member" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", sx: { mb: 3, mt: 1 }, children: "Create a complete staff account with login credentials. The staff member will be able to log in immediately with the provided email and password." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "first_name", label: "First Name", required: true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "last_name", label: "Last Name", required: true }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "email", label: "Email Address", type: "email", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "password",
            label: "Password",
            type: showPassword ? "text" : "password",
            required: true,
            helperText: "Minimum 8 characters with uppercase, lowercase, and number",
            InputProps: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "small",
                  onClick: () => setShowPassword(!showPassword),
                  sx: { minWidth: "auto" },
                  children: showPassword ? "Hide" : "Show"
                }
              )
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Phone, { name: "phone", label: "Phone Number", defaultCountry: "LB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "role", label: "Role", required: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "manager", children: "Manager" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "stylist", children: "Stylist" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "stock", children: "Stock Manager" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "receptionist", children: "Receptionist" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "staff", children: "Staff" })
        ] }),
        isStylist && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "stylist_level", label: "Stylist Level", required: true, children: STYLIST_LEVELS.map((level) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: level.value, children: level.label }, level.value)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Checkbox,
            {
              name: "assign_all_services",
              label: "Assign all services to this stylist"
            }
          )
        ] }),
        branches && branches.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Checkbox,
          {
            name: "add_to_all_branches",
            label: `Add to all branches with the same role${isStylist ? ", level and services" : ""}`
          }
        ),
        branches && branches.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "branch_id", label: "Branch", required: true, disabled: loadingBranches, children: branches.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: branch.id, children: [
          branch.name,
          branch.country && ` - ${branch.country.name}`
        ] }, branch.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "is_primary", label: "Set as primary branch for this staff member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Checkbox,
          {
            name: "create_default_schedule",
            label: "Create default working schedule (Mon-Fri, 9:00 AM - 5:00 PM)"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, disabled: loading, variant: "outlined", color: "inherit", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { onClick: onSubmit, loading, variant: "contained", color: "primary", children: "Create Staff Account" })
    ] })
  ] });
}
AddStaffDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  onSuccess: o.func
};
export {
  AddStaffDialog as A,
  StaffEditForm as S,
  canEditStaffProfile as c
};
