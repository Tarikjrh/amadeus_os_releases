import { r as reactExports, t as toast, j as jsxRuntimeExports, S as Stack, M as MenuItem, B as Box, c as Typography, a5 as alpha, d as Button, a6 as useUserBranches, m as mutate, a7 as LoadingScreen, y as Card, a8 as FormControlLabel } from "./index-B08HRm4A.js";
import { a as useForm, b as u, F as Form, C as Controller } from "./form-provider-u_wAFv-h.js";
import { u as updateService, a as updateServicePricing, c as createService, S as SERVICE_CATEGORIES, b as SERVICE_GROUPS, d as useGetServiceBranchConfigs, e as updateBranchService } from "./services-UhlA7T7c.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { c as MEASURE_UNIT_OPTIONS, d as MEASURE_STEP_OPTIONS } from "./measured-service.constants-DhXw6UJq.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { L as LoadingButton } from "./LoadingButton-DJQpPOpu.js";
import { o as object, s as string, b as boolean, n as number$1 } from "./schemas-BVeYYbTr.js";
import { n as number } from "./coerce-5-WTXoHr.js";
import { o } from "./index-Di_Bgabu.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { T as TextField } from "./TextField-CIuP940C.js";
const ServiceSchema = object({
  name: string().min(1, { message: "Service name is required" }),
  category: string().min(1, { message: "Category is required" }),
  service_group: string().min(1, { message: "Group is required" }),
  description: string().optional(),
  duration_minutes: number().positive({ message: "Duration must be positive" }).int({ message: "Duration must be a whole number" }),
  requires_consultation: boolean().default(false),
  // Measured services are priced by material consumed — the prices below are
  // then read as a price PER UNIT.
  is_measured: boolean().default(false),
  measure_unit_label: string().nullable().optional(),
  measure_step: number().positive({ message: "Step must be positive" }).default(0.5),
  measure_default: number().positive({ message: "Default amount must be positive" }).default(1),
  junior_price: number().min(0, { message: "Price cannot be negative" }),
  senior_price: number().min(0, { message: "Price cannot be negative" }),
  prive_price: number().min(0, { message: "Price cannot be negative" }),
  currency: string().default("USD")
});
function ServiceCreateEditDialog({ open, onClose, service }) {
  const isEdit = !!service;
  const defaultValues = {
    name: "",
    category: "haircut",
    service_group: "hair_men",
    description: "",
    duration_minutes: 30,
    requires_consultation: false,
    is_measured: false,
    measure_unit_label: "unit",
    measure_step: 0.5,
    measure_default: 1,
    junior_price: null,
    senior_price: null,
    prive_price: null,
    currency: "USD"
  };
  const methods = useForm({
    resolver: u(ServiceSchema),
    defaultValues
  });
  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const isMeasured = watch("is_measured");
  const measureUnitLabel = watch("measure_unit_label") || "unit";
  reactExports.useEffect(() => {
    if (open) {
      reset(service ? { ...defaultValues, ...service } : defaultValues);
    } else {
      reset(defaultValues);
    }
  }, [open]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      const { junior_price, senior_price, prive_price, currency, ...serviceData } = data;
      if (isEdit) {
        await updateService(service.id, serviceData);
        await updateServicePricing(service.id, {
          juniorPrice: junior_price,
          seniorPrice: senior_price,
          privePrice: prive_price,
          currency
        });
        toast.success("Service updated successfully!");
      } else {
        const newService = await createService(serviceData);
        await updateServicePricing(newService.id, {
          juniorPrice: junior_price,
          seniorPrice: senior_price,
          privePrice: prive_price,
          currency
        });
        toast.success("Service created successfully!");
      }
      reset();
      onClose();
    } catch (error) {
      console.error("Error saving service:", error);
      toast.error(isEdit ? "Failed to update service" : "Failed to create service");
    }
  });
  function handleClose() {
    reset();
    onClose();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onClose: handleClose, maxWidth: "md", fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Service" : "Create New Service" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { pt: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "name",
            label: "Service Name",
            placeholder: "e.g., Men's Haircut",
            helperText: "Enter the name of the service"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "category", label: "Category", children: SERVICE_CATEGORIES.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: category.value, children: category.label }, category.value)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "service_group", label: "Group", children: SERVICE_GROUPS.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: group.value, children: group.label }, group.value)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "description",
            label: "Description",
            placeholder: "Describe the service...",
            multiline: true,
            rows: 3
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 6 }, md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "duration_minutes",
            label: "Duration",
            type: "number",
            InputProps: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "minutes" })
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Priced by Amount Used" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "For services such as bleaching, where the price depends on how much product the stylist uses. The prices below then count as the price for one unit, and the cashier enters the amount used (0.5, 1.5, ...) at the till. The service is still counted once in sales and reports." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "is_measured", label: "Price this service by amount used" }) }),
          isMeasured && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "measure_unit_label", label: "Unit", children: MEASURE_UNIT_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "measure_step", label: "Step", children: MEASURE_STEP_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option, children: option }, option)) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "measure_default",
                label: "Default Amount",
                type: "number",
                helperText: "Pre-filled at the till"
              }
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: isMeasured ? "Price Per Unit by Stylist Level" : "Pricing by Stylist Level" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: isMeasured ? `Price for one ${measureUnitLabel} at each stylist level. You can override these prices per branch later.` : "Set default pricing for different stylist levels. You can override these prices per branch later." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "junior_price",
              label: "Junior Price",
              type: "number",
              InputProps: {
                startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
              },
              sx: {
                "& .MuiOutlinedInput-root": {
                  bgcolor: (theme) => alpha(theme.palette.info.main, 0.08)
                }
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "senior_price",
              label: "Senior Price",
              type: "number",
              InputProps: {
                startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
              },
              sx: {
                "& .MuiOutlinedInput-root": {
                  bgcolor: (theme) => alpha(theme.palette.warning.main, 0.08)
                }
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Text,
            {
              name: "prive_price",
              label: "Prive Price",
              type: "number",
              InputProps: {
                startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
              },
              sx: {
                "& .MuiOutlinedInput-root": {
                  bgcolor: (theme) => alpha(theme.palette.success.main, 0.08)
                }
              }
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: handleClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { type: "submit", variant: "contained", loading: isSubmitting, children: isEdit ? "Update" : "Create" })
    ] })
  ] }) });
}
const branchConfigSchema = object({
  is_available: boolean(),
  custom_name: string().max(100, "Name must be less than 100 characters").optional(),
  custom_description: string().max(500, "Description must be less than 500 characters").optional(),
  custom_duration_minutes: number$1().min(1, "Duration must be at least 1 minute").max(1440, "Duration cannot exceed 24 hours").nullable().optional(),
  // Pricing fields
  junior_price: number$1().min(0, "Price cannot be negative").optional(),
  senior_price: number$1().min(0, "Price cannot be negative").optional(),
  prive_price: number$1().min(0, "Price cannot be negative").optional(),
  currency: string().default("USD")
});
const createFormSchema = (branches) => {
  const schema = {};
  branches.forEach((branch) => {
    schema[branch.id] = branchConfigSchema;
  });
  return object(schema);
};
const buildDefaultValues = (branches) => Object.fromEntries(
  branches.map((branch) => [
    branch.id,
    {
      is_available: false,
      custom_name: "",
      custom_description: "",
      custom_duration_minutes: null,
      junior_price: void 0,
      senior_price: void 0,
      prive_price: void 0,
      currency: "USD"
    }
  ])
);
function ServiceBranchConfigDialog({ open, onClose, service }) {
  const { branchesOnly: branches } = useUserBranches();
  const formSchema = reactExports.useMemo(() => createFormSchema(branches), [branches]);
  const defaultValues = reactExports.useMemo(() => buildDefaultValues(branches), [branches]);
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, isSubmitting }
  } = useForm({
    resolver: u(formSchema),
    defaultValues
  });
  const watchedValues = watch();
  const { branchConfigs, branchConfigsLoading, branchConfigsError } = useGetServiceBranchConfigs(
    open && service?.id ? service.id : null
  );
  reactExports.useEffect(() => {
    if (!open) return;
    if (branchConfigs && Object.keys(branchConfigs).length > 0) {
      reset({ ...defaultValues, ...branchConfigs });
    }
  }, [open, branchConfigs, defaultValues, reset]);
  const handleSave = reactExports.useCallback(
    async (formData) => {
      if (!service?.id) {
        toast.error("No service selected");
        return;
      }
      try {
        const promises = Object.entries(formData).map(async ([branchId, config]) => {
          await updateBranchService(service.id, branchId, {
            is_available: config.is_available,
            custom_name: config.custom_name || null,
            custom_description: config.custom_description || null,
            custom_duration_minutes: config.custom_duration_minutes
          });
          const pricingData = {
            branchId,
            juniorPrice: config.junior_price,
            seniorPrice: config.senior_price,
            privePrice: config.prive_price,
            currency: config.currency
          };
          if (pricingData.juniorPrice !== void 0 || pricingData.seniorPrice !== void 0 || pricingData.privePrice !== void 0) {
            await updateServicePricing(service.id, pricingData);
          }
        });
        await Promise.all(promises);
        mutate(`service-branch-configs-${service.id}`);
        toast.success("Branch configurations saved successfully!");
        onClose();
      } catch (error) {
        console.error("Error saving branch configurations:", error);
        toast.error("Failed to save branch configurations");
      }
    },
    [service?.id, onClose]
  );
  const handleClose = reactExports.useCallback(() => {
    reset(defaultValues);
    onClose();
  }, [onClose, reset, defaultValues]);
  if (!service) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      "Branch-Specific Configuration: ",
      service?.name,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Configure how this service appears and behaves at different branches." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { pb: 3 }, children: branchConfigsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 20
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { message: "Loading branch configurations..." })
      }
    ) : branchConfigsError ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        filled: true,
        title: " Failed to load configurations",
        description: branchConfigsError?.message || "Failed to load configurations",
        sx: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 8
        },
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", size: "small", onClick: () => window.location.reload(), children: "Retry" })
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 3, children: branches.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3 }, variant: "outlined", elevation: 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: branch.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: `${branch.id}.is_available`,
            control,
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormControlLabel,
              {
                control: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { ...field, checked: field.value }),
                label: "Available at this branch"
              }
            )
          }
        ),
        watchedValues[branch.id]?.is_available && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: `${branch.id}.custom_name`,
                control,
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextField,
                  {
                    ...field,
                    fullWidth: true,
                    sx: { flex: 2 },
                    label: "Custom Name (optional)",
                    placeholder: `Defaults to: ${service?.name}`,
                    error: !!errors[branch.id]?.custom_name,
                    helperText: errors[branch.id]?.custom_name?.message
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: `${branch.id}.custom_duration_minutes`,
                control,
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextField,
                  {
                    ...field,
                    fullWidth: true,
                    sx: { flex: 1 },
                    type: "number",
                    label: "Custom Duration (minutes)",
                    placeholder: `Defaults to: ${service?.duration_minutes} minutes`,
                    value: field.value || "",
                    onChange: (e) => {
                      const value = e.target.value;
                      field.onChange(value === "" ? null : parseInt(value, 10) || null);
                    },
                    error: !!errors[branch.id]?.custom_duration_minutes,
                    helperText: errors[branch.id]?.custom_duration_minutes?.message,
                    inputProps: { min: 1 }
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: `${branch.id}.custom_description`,
              control,
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  ...field,
                  fullWidth: true,
                  multiline: true,
                  rows: 2,
                  label: "Custom Description (optional)",
                  placeholder: `Defaults to: ${service?.description || "No description"}`,
                  error: !!errors[branch.id]?.custom_description,
                  helperText: errors[branch.id]?.custom_description?.message
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { mt: 2, mb: 0 }, children: "Branch Pricing (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Set custom prices for this branch. Leave empty to use organization defaults." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: `${branch.id}.junior_price`,
                control,
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextField,
                  {
                    ...field,
                    fullWidth: true,
                    type: "number",
                    label: "Junior Price",
                    placeholder: "Leave empty for default",
                    value: field.value || "",
                    onChange: (e) => {
                      const value = e.target.value;
                      field.onChange(
                        value === "" ? void 0 : parseFloat(value) || void 0
                      );
                    },
                    error: !!errors[branch.id]?.junior_price,
                    helperText: errors[branch.id]?.junior_price?.message,
                    InputProps: {
                      startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
                    },
                    inputProps: { min: 0, step: 0.01 },
                    sx: {
                      "& .MuiOutlinedInput-root": {
                        bgcolor: (theme) => alpha(theme.palette.info.main, 0.08)
                      }
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: `${branch.id}.senior_price`,
                control,
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextField,
                  {
                    ...field,
                    fullWidth: true,
                    type: "number",
                    label: "Senior Price",
                    placeholder: "Leave empty for default",
                    value: field.value || "",
                    onChange: (e) => {
                      const value = e.target.value;
                      field.onChange(
                        value === "" ? void 0 : parseFloat(value) || void 0
                      );
                    },
                    error: !!errors[branch.id]?.senior_price,
                    helperText: errors[branch.id]?.senior_price?.message,
                    InputProps: {
                      startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
                    },
                    sx: {
                      "& .MuiOutlinedInput-root": {
                        bgcolor: (theme) => alpha(theme.palette.warning.main, 0.08)
                      }
                    },
                    inputProps: { min: 0, step: 0.01 }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: `${branch.id}.prive_price`,
                control,
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextField,
                  {
                    ...field,
                    fullWidth: true,
                    type: "number",
                    label: "Prive Price",
                    placeholder: "Leave empty for default",
                    value: field.value || "",
                    onChange: (e) => {
                      const value = e.target.value;
                      field.onChange(
                        value === "" ? void 0 : parseFloat(value) || void 0
                      );
                    },
                    sx: {
                      "& .MuiOutlinedInput-root": {
                        bgcolor: (theme) => alpha(theme.palette.success.main, 0.08)
                      }
                    },
                    error: !!errors[branch.id]?.prive_price,
                    helperText: errors[branch.id]?.prive_price?.message,
                    InputProps: {
                      startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
                    },
                    inputProps: { min: 0, step: 0.01 }
                  }
                )
              }
            )
          ] })
        ] })
      ] })
    ] }, branch.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, disabled: isSubmitting || branchConfigsLoading, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handleSubmit(handleSave),
          variant: "contained",
          disabled: isSubmitting || !isDirty || branchConfigsLoading || branchConfigsError,
          children: isSubmitting ? "Saving..." : "Save Configurations"
        }
      )
    ] })
  ] });
}
ServiceBranchConfigDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  service: o.object
};
export {
  ServiceCreateEditDialog as S,
  ServiceBranchConfigDialog as a
};
