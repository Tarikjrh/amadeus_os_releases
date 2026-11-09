const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-B08HRm4A.js","./index-DCQoYTVP.css"])))=>i.map(i=>d[i]);
import { r as reactExports, a9 as generateUtilityClass, $ as generateUtilityClasses, i as useDefaultProps, j as jsxRuntimeExports, l as clsx, o as composeClasses, q as styled, br as createSvgIcon, cv as SvgIcon, v as memoTheme, aa as useSlot, n as capitalize, t as toast, aH as createProduct, M as MenuItem, d as Button, B as Box, a0 as fCurrency, c0 as useGetProductCatalog, E as Ee, ay as __vitePreload, S as Stack, c as Typography, b as CircularProgress, a as Iconify, m as mutate, cO as getProductByBarcode, I as IconButton, ax as Alert, a2 as Chip, K as Divider, a8 as FormControlLabel, cP as useProductAutocomplete, h as dayjs, an as fDate, cQ as FORMAT_PATTERNS } from "./index-B08HRm4A.js";
import { D as Document, b as Page, V as View, S as StyleSheet, I as Image, T as Text, p as pdf } from "./react-pdf.browser-DOUvi50W.js";
import { o as os } from "./index-CtpEzAlo.js";
import { a as useForm, b as u, F as Form, e as useController, c as useFieldArray, u as useFormContext, d as useWatch, C as Controller } from "./form-provider-u_wAFv-h.js";
import { u as useSupplierAutocomplete } from "./supplier-service-CvoEEgb8.js";
import { F as Field, H as HelperText } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { S as SupplierAutocomplete } from "./supplier-autocomplete-Cr5Mwn0p.js";
import { u as useBarcodeScanner } from "./use-barcode-scanner-CEYdIlFE.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { o as object, l as literal, s as string, a as array } from "./schemas-BVeYYbTr.js";
import { n as number } from "./coerce-5-WTXoHr.js";
import { c as TableBody, b as TableRow, a as TableHead, T as Table } from "./TableHead-Dfclrc85.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
const StepperContext = /* @__PURE__ */ reactExports.createContext({});
const StepContext = /* @__PURE__ */ reactExports.createContext({});
function getStepUtilityClass(slot) {
  return generateUtilityClass("MuiStep", slot);
}
generateUtilityClasses("MuiStep", ["root", "horizontal", "vertical", "alternativeLabel", "completed"]);
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes,
    orientation,
    alternativeLabel,
    completed
  } = ownerState;
  const slots = {
    root: ["root", orientation, alternativeLabel && "alternativeLabel", completed && "completed"]
  };
  return composeClasses(slots, getStepUtilityClass, classes);
};
const StepRoot = styled("div", {
  name: "MuiStep",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.completed && styles.completed];
  }
})({
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      alternativeLabel: true
    },
    style: {
      flex: 1,
      position: "relative"
    }
  }]
});
const Step = /* @__PURE__ */ reactExports.forwardRef(function Step2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStep"
  });
  const {
    active: activeProp,
    children,
    className,
    component = "div",
    completed: completedProp,
    disabled: disabledProp,
    expanded = false,
    index,
    last,
    ...other
  } = props;
  const {
    activeStep,
    connector,
    alternativeLabel,
    orientation,
    nonLinear
  } = reactExports.useContext(StepperContext);
  let [active = false, completed = false, disabled = false] = [activeProp, completedProp, disabledProp];
  if (activeStep === index) {
    active = activeProp !== void 0 ? activeProp : true;
  } else if (!nonLinear && activeStep > index) {
    completed = completedProp !== void 0 ? completedProp : true;
  } else if (!nonLinear && activeStep < index) {
    disabled = disabledProp !== void 0 ? disabledProp : true;
  }
  const contextValue = reactExports.useMemo(() => ({
    index,
    last,
    expanded,
    icon: index + 1,
    active,
    completed,
    disabled
  }), [index, last, expanded, active, completed, disabled]);
  const ownerState = {
    ...props,
    active,
    orientation,
    alternativeLabel,
    completed,
    disabled,
    expanded,
    component
  };
  const classes = useUtilityClasses$4(ownerState);
  const newChildren = /* @__PURE__ */ jsxRuntimeExports.jsxs(StepRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: [connector && alternativeLabel && index !== 0 ? connector : null, children]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepContext.Provider, {
    value: contextValue,
    children: connector && !alternativeLabel && index !== 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
      children: [connector, newChildren]
    }) : newChildren
  });
});
const CheckCircle = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
}));
const Warning = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}));
function getStepIconUtilityClass(slot) {
  return generateUtilityClass("MuiStepIcon", slot);
}
const stepIconClasses = generateUtilityClasses("MuiStepIcon", ["root", "active", "completed", "error", "text"]);
var _circle;
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes,
    active,
    completed,
    error
  } = ownerState;
  const slots = {
    root: ["root", active && "active", completed && "completed", error && "error"],
    text: ["text"]
  };
  return composeClasses(slots, getStepIconUtilityClass, classes);
};
const StepIconRoot = styled(SvgIcon, {
  name: "MuiStepIcon",
  slot: "Root"
})(memoTheme(({
  theme
}) => ({
  display: "block",
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shortest
  }),
  color: (theme.vars || theme).palette.text.disabled,
  [`&.${stepIconClasses.completed}, &.${stepIconClasses.active}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${stepIconClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
const StepIconText = styled("text", {
  name: "MuiStepIcon",
  slot: "Text"
})(memoTheme(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.primary.contrastText,
  fontSize: theme.typography.caption.fontSize,
  fontFamily: theme.typography.fontFamily
})));
const StepIcon = /* @__PURE__ */ reactExports.forwardRef(function StepIcon2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepIcon"
  });
  const {
    active = false,
    className: classNameProp,
    completed = false,
    error = false,
    icon,
    ...other
  } = props;
  const ownerState = {
    ...props,
    active,
    completed,
    error
  };
  const classes = useUtilityClasses$3(ownerState);
  if (typeof icon === "number" || typeof icon === "string") {
    const className = clsx(classNameProp, classes.root);
    if (error) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(StepIconRoot, {
        as: Warning,
        className,
        ref,
        ownerState,
        ...other
      });
    }
    if (completed) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(StepIconRoot, {
        as: CheckCircle,
        className,
        ref,
        ownerState,
        ...other
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(StepIconRoot, {
      className,
      ref,
      ownerState,
      ...other,
      children: [_circle || (_circle = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "12"
      })), /* @__PURE__ */ jsxRuntimeExports.jsx(StepIconText, {
        className: classes.text,
        x: "12",
        y: "12",
        textAnchor: "middle",
        dominantBaseline: "central",
        ownerState,
        children: icon
      })]
    });
  }
  return icon;
});
function getStepLabelUtilityClass(slot) {
  return generateUtilityClass("MuiStepLabel", slot);
}
const stepLabelClasses = generateUtilityClasses("MuiStepLabel", ["root", "horizontal", "vertical", "label", "active", "completed", "error", "disabled", "iconContainer", "alternativeLabel", "labelContainer"]);
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes,
    orientation,
    active,
    completed,
    error,
    disabled,
    alternativeLabel
  } = ownerState;
  const slots = {
    root: ["root", orientation, error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    label: ["label", active && "active", completed && "completed", error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    iconContainer: ["iconContainer", active && "active", completed && "completed", error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    labelContainer: ["labelContainer", alternativeLabel && "alternativeLabel"]
  };
  return composeClasses(slots, getStepLabelUtilityClass, classes);
};
const StepLabelRoot = styled("span", {
  name: "MuiStepLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation]];
  }
})({
  display: "flex",
  alignItems: "center",
  [`&.${stepLabelClasses.alternativeLabel}`]: {
    flexDirection: "column"
  },
  [`&.${stepLabelClasses.disabled}`]: {
    cursor: "default"
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      textAlign: "left",
      padding: "8px 0"
    }
  }]
});
const StepLabelLabel = styled("span", {
  name: "MuiStepLabel",
  slot: "Label"
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  display: "block",
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${stepLabelClasses.active}, &.${stepLabelClasses.completed}`]: {
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: 500
  },
  [`&.${stepLabelClasses.alternativeLabel}`]: {
    marginTop: 16
  },
  [`&.${stepLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
const StepLabelIconContainer = styled("span", {
  name: "MuiStepLabel",
  slot: "IconContainer"
})({
  flexShrink: 0,
  display: "flex",
  paddingRight: 8,
  [`&.${stepLabelClasses.alternativeLabel}`]: {
    paddingRight: 0
  }
});
const StepLabelLabelContainer = styled("span", {
  name: "MuiStepLabel",
  slot: "LabelContainer"
})(memoTheme(({
  theme
}) => ({
  width: "100%",
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${stepLabelClasses.alternativeLabel}`]: {
    textAlign: "center"
  }
})));
const StepLabel = /* @__PURE__ */ reactExports.forwardRef(function StepLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepLabel"
  });
  const {
    children,
    className,
    componentsProps = {},
    error = false,
    icon: iconProp,
    optional,
    slots = {},
    slotProps = {},
    StepIconComponent: StepIconComponentProp,
    StepIconProps,
    ...other
  } = props;
  const {
    alternativeLabel,
    orientation
  } = reactExports.useContext(StepperContext);
  const {
    active,
    disabled,
    completed,
    icon: iconContext
  } = reactExports.useContext(StepContext);
  const icon = iconProp || iconContext;
  let StepIconComponent = StepIconComponentProp;
  if (icon && !StepIconComponent) {
    StepIconComponent = StepIcon;
  }
  const ownerState = {
    ...props,
    active,
    alternativeLabel,
    completed,
    disabled,
    error,
    orientation
  };
  const classes = useUtilityClasses$2(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      stepIcon: StepIconProps,
      ...componentsProps,
      ...slotProps
    }
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: StepLabelRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    ref,
    className: clsx(classes.root, className)
  });
  const [LabelSlot, labelProps] = useSlot("label", {
    elementType: StepLabelLabel,
    externalForwardedProps,
    ownerState
  });
  const [StepIconSlot, stepIconProps] = useSlot("stepIcon", {
    elementType: StepIconComponent,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootProps,
    children: [icon || StepIconSlot ? /* @__PURE__ */ jsxRuntimeExports.jsx(StepLabelIconContainer, {
      className: classes.iconContainer,
      ownerState,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepIconSlot, {
        completed,
        active,
        error,
        icon,
        ...stepIconProps
      })
    }) : null, /* @__PURE__ */ jsxRuntimeExports.jsxs(StepLabelLabelContainer, {
      className: classes.labelContainer,
      ownerState,
      children: [children ? /* @__PURE__ */ jsxRuntimeExports.jsx(LabelSlot, {
        ...labelProps,
        className: clsx(classes.label, labelProps?.className),
        children
      }) : null, optional]
    })]
  });
});
StepLabel.muiName = "StepLabel";
function getStepConnectorUtilityClass(slot) {
  return generateUtilityClass("MuiStepConnector", slot);
}
generateUtilityClasses("MuiStepConnector", ["root", "horizontal", "vertical", "alternativeLabel", "active", "completed", "disabled", "line", "lineHorizontal", "lineVertical"]);
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    orientation,
    alternativeLabel,
    active,
    completed,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, alternativeLabel && "alternativeLabel", active && "active", completed && "completed", disabled && "disabled"],
    line: ["line", `line${capitalize(orientation)}`]
  };
  return composeClasses(slots, getStepConnectorUtilityClass, classes);
};
const StepConnectorRoot = styled("div", {
  name: "MuiStepConnector",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.completed && styles.completed];
  }
})({
  flex: "1 1 auto",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      marginLeft: 12
      // half icon
    }
  }, {
    props: {
      alternativeLabel: true
    },
    style: {
      position: "absolute",
      top: 8 + 4,
      left: "calc(-50% + 20px)",
      right: "calc(50% + 20px)"
    }
  }]
});
const StepConnectorLine = styled("span", {
  name: "MuiStepConnector",
  slot: "Line",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.line, styles[`line${capitalize(ownerState.orientation)}`]];
  }
})(memoTheme(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[600];
  return {
    display: "block",
    borderColor: theme.vars ? theme.vars.palette.StepConnector.border : borderColor,
    variants: [{
      props: {
        orientation: "horizontal"
      },
      style: {
        borderTopStyle: "solid",
        borderTopWidth: 1
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        borderLeftStyle: "solid",
        borderLeftWidth: 1,
        minHeight: 24
      }
    }]
  };
}));
const StepConnector = /* @__PURE__ */ reactExports.forwardRef(function StepConnector2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepConnector"
  });
  const {
    className,
    ...other
  } = props;
  const {
    alternativeLabel,
    orientation = "horizontal"
  } = reactExports.useContext(StepperContext);
  const {
    active,
    disabled,
    completed
  } = reactExports.useContext(StepContext);
  const ownerState = {
    ...props,
    alternativeLabel,
    orientation,
    active,
    completed,
    disabled
  };
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepConnectorRoot, {
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepConnectorLine, {
      className: classes.line,
      ownerState
    })
  });
});
function getStepperUtilityClass(slot) {
  return generateUtilityClass("MuiStepper", slot);
}
generateUtilityClasses("MuiStepper", ["root", "horizontal", "vertical", "nonLinear", "alternativeLabel"]);
const useUtilityClasses = (ownerState) => {
  const {
    orientation,
    nonLinear,
    alternativeLabel,
    classes
  } = ownerState;
  const slots = {
    root: ["root", orientation, nonLinear && "nonLinear", alternativeLabel && "alternativeLabel"]
  };
  return composeClasses(slots, getStepperUtilityClass, classes);
};
const StepperRoot = styled("div", {
  name: "MuiStepper",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.nonLinear && styles.nonLinear];
  }
})({
  display: "flex",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      flexDirection: "row",
      alignItems: "center"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: {
      alternativeLabel: true
    },
    style: {
      alignItems: "flex-start"
    }
  }]
});
const defaultConnector = /* @__PURE__ */ jsxRuntimeExports.jsx(StepConnector, {});
const Stepper = /* @__PURE__ */ reactExports.forwardRef(function Stepper2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepper"
  });
  const {
    activeStep = 0,
    alternativeLabel = false,
    children,
    className,
    component = "div",
    connector = defaultConnector,
    nonLinear = false,
    orientation = "horizontal",
    ...other
  } = props;
  const ownerState = {
    ...props,
    nonLinear,
    alternativeLabel,
    orientation,
    component
  };
  const classes = useUtilityClasses(ownerState);
  const childrenArray = reactExports.Children.toArray(children).filter(Boolean);
  const steps = childrenArray.map((step, index) => {
    return /* @__PURE__ */ reactExports.cloneElement(step, {
      index,
      last: index + 1 === childrenArray.length,
      ...step.props
    });
  });
  const contextValue = reactExports.useMemo(() => ({
    activeStep,
    alternativeLabel,
    connector,
    nonLinear,
    orientation
  }), [activeStep, alternativeLabel, connector, nonLinear, orientation]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepperContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepperRoot, {
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref,
      ...other,
      children: steps
    })
  });
});
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
const QUICK_PRODUCT_SCHEMA = object({
  name: string().min(1, "Product name is required"),
  category: string().min(1, "Category is required"),
  sku: string().optional().nullable(),
  barcode: string().optional().nullable(),
  cost_price: number().min(0, "Must be positive").optional().or(literal("")),
  retail_price: number().min(0, "Must be positive").optional().or(literal(""))
});
function QuickAddProductDialog({ open, onClose, onCreated, initialName = "" }) {
  const methods = useForm({
    resolver: u(QUICK_PRODUCT_SCHEMA),
    defaultValues: {
      name: "",
      category: "",
      sku: "",
      barcode: "",
      cost_price: "",
      retail_price: ""
    }
  });
  const {
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const handleBarcode = reactExports.useCallback(
    (barcode) => {
      if (!open) return;
      toast.info(`Barcode scanned: ${barcode}`);
      setValue("barcode", barcode);
    },
    [open, setValue]
  );
  useBarcodeScanner({ onBarcode: handleBarcode });
  reactExports.useEffect(() => {
    if (open)
      reset({
        name: initialName,
        category: "",
        sku: "",
        barcode: "",
        cost_price: "",
        retail_price: ""
      });
  }, [open, initialName, reset]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      const newProduct = await createProduct({
        name: data.name,
        category: data.category,
        sku: data.sku || null,
        barcode: data.barcode || null,
        cost_price: data.cost_price !== "" ? Number(data.cost_price) : 0,
        retail_price: data.retail_price !== "" ? Number(data.retail_price) : 0,
        unit: "piece",
        min_stock_level: 0
      });
      toast.success(`Product "${newProduct.name}" created`);
      onCreated(newProduct);
    } catch (err) {
      console.error(err);
      toast.error("Failed to create product");
    }
  });
  const handleClose = () => {
    reset();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Quick Add Product" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { pt: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Product Name *", autoFocus: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "category", label: "Category *", children: PRODUCT_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: c.value, children: c.label }, c.value)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "sku", label: "SKU", placeholder: "Optional" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "barcode", label: "Barcode", placeholder: "Optional" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "cost_price",
            label: "Cost Price",
            type: "number",
            placeholder: "0.00",
            inputProps: { min: 0, step: 0.01 }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "retail_price",
            label: "Sale Price",
            type: "number",
            placeholder: "0.00",
            inputProps: { min: 0, step: 0.01 }
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, color: "inherit", disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isSubmitting, children: isSubmitting ? "Creating…" : "Create Product" })
      ] })
    ] })
  ] });
}
const RECEIPT_STATUSES = [
  { value: "draft", label: "Draft" },
  { value: "received", label: "Received" },
  { value: "cancelled", label: "Cancelled" }
];
const HIDE_COLUMNS = { notes: false, created_at: false };
const HIDE_COLUMNS_TOGGLABLE = [
  "notes",
  "supplier",
  "created_at",
  "actions"
];
const MAX_MONEY_VALUE = 9999999999e-2;
const MAX_PROFIT_PERCENT = 999999999e-2;
const STOCK_ORDER_DRAFT_STORAGE_KEY = "amadeus:stock-order-draft";
const RECEIPT_ITEMS_TABLE_HEIGHT = "calc(100vh - 320px)";
const RECEIPT_ITEMS_OVERSCAN_PX = 600;
const LAZY_FIELD_PLACEHOLDER_HEIGHT = 40;
const LazyFieldPlaceholder = styled("div")(({ theme }) => ({
  width: "100%",
  height: LAZY_FIELD_PLACEHOLDER_HEIGHT,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1.75),
  cursor: "text",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontSize: theme.typography.pxToRem(15),
  color: theme.vars.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.vars.palette.shared.inputOutlined}`,
  transition: theme.transitions.create(["border-color"], {
    duration: theme.transitions.duration.shortest
  }),
  "&:hover": { borderColor: theme.vars.palette.text.primary },
  '&[data-error="true"]': { borderColor: theme.vars.palette.error.main },
  "& .lazy-field-placeholder-text": { color: theme.vars.palette.text.disabled }
}));
function LazyField({ name, children, placeholder, formatValue, sx }) {
  const [active, setActive] = reactExports.useState(false);
  const {
    field: { value },
    fieldState: { error }
  } = useController({ name });
  if (active) {
    return children;
  }
  const displayValue = formatValue ? formatValue(value) : value;
  const isEmpty = displayValue === "" || displayValue == null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LazyFieldPlaceholder,
      {
        tabIndex: 0,
        "data-error": !!error,
        onFocus: () => setActive(true),
        onClick: () => setActive(true),
        children: isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lazy-field-placeholder-text", children: placeholder }) : displayValue
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelperText, { errorMessage: error?.message })
  ] });
}
const ACCENT = "#1C252E";
const ACCENT_LIGHT = "#F4F6F8";
const DIVIDER = "#E0E3E7";
const TEXT_PRIMARY = "#1C252E";
const TEXT_SECONDARY = "#637381";
const usePdfStyles = () => reactExports.useMemo(
  () => StyleSheet.create({
    page: {
      fontSize: 9,
      lineHeight: 1.6,
      fontFamily: "Helvetica",
      backgroundColor: "#FFFFFF",
      paddingBottom: 80
    },
    // ── Header bar ──────────────────────────────────────────────────
    headerBar: {
      backgroundColor: ACCENT,
      padding: "28px 32px 24px 32px",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start"
    },
    headerLeft: { flexDirection: "column", gap: 6 },
    headerTitle: {
      fontSize: 20,
      fontFamily: "Helvetica-Bold",
      color: "#FFFFFF",
      letterSpacing: 0.5
    },
    headerSubtitle: { fontSize: 9, color: "rgba(255,255,255,0.6)" },
    headerRight: { alignItems: "flex-end", gap: 4 },
    headerLogo: { width: 40, height: 40, marginBottom: 6 },
    headerBadge: {
      backgroundColor: "rgba(255,255,255,0.15)",
      borderRadius: 4,
      paddingHorizontal: 8,
      paddingVertical: 3
    },
    headerBadgeText: { fontSize: 8, color: "#FFFFFF", fontFamily: "Helvetica-Bold" },
    // ── Body ────────────────────────────────────────────────────────
    body: { padding: "24px 32px" },
    // ── Details (plain) ─────────────────────────────────────────────
    detailsRow: { flexDirection: "row", marginBottom: 24, gap: 40 },
    detailsCol: { flexDirection: "column", gap: 6 },
    detailLabel: {
      fontSize: 7,
      fontFamily: "Helvetica-Bold",
      color: TEXT_SECONDARY,
      textTransform: "uppercase",
      letterSpacing: 0.6,
      marginBottom: 1
    },
    detailValue: { fontSize: 9, color: TEXT_PRIMARY },
    detailValueBold: { fontSize: 9, fontFamily: "Helvetica-Bold", color: TEXT_PRIMARY },
    // ── Notes (plain) ───────────────────────────────────────────────
    notesRow: { marginBottom: 20 },
    // ── Section heading ─────────────────────────────────────────────
    sectionHeading: {
      fontSize: 8,
      fontFamily: "Helvetica-Bold",
      color: TEXT_SECONDARY,
      textTransform: "uppercase",
      letterSpacing: 0.8,
      marginBottom: 8
    },
    // ── Table ───────────────────────────────────────────────────────
    table: {
      width: "100%",
      marginBottom: 16,
      borderWidth: 1,
      borderColor: DIVIDER,
      borderStyle: "solid",
      borderRadius: 4
    },
    tableHeaderRow: {
      flexDirection: "row",
      backgroundColor: ACCENT,
      padding: "7px 8px"
    },
    tableRow: {
      flexDirection: "row",
      padding: "7px 8px",
      borderTopWidth: 1,
      borderTopColor: DIVIDER,
      borderStyle: "solid"
    },
    tableRowAlt: {
      backgroundColor: ACCENT_LIGHT
    },
    thText: {
      fontSize: 7,
      fontFamily: "Helvetica-Bold",
      color: "#FFFFFF",
      textTransform: "uppercase",
      letterSpacing: 0.5
    },
    tdText: { fontSize: 9, color: TEXT_PRIMARY },
    tdMuted: { fontSize: 8, color: TEXT_SECONDARY },
    tdBold: { fontSize: 9, fontFamily: "Helvetica-Bold", color: TEXT_PRIMARY },
    tdPriceBadge: {
      fontSize: 6,
      fontFamily: "Helvetica-Bold",
      color: "#0C53B7",
      marginTop: 1
    },
    col_num: {},
    col_name: {},
    col_qty: { textAlign: "center" },
    col_gift: { textAlign: "center" },
    col_cost: { textAlign: "center" },
    col_sale: { textAlign: "center" },
    col_profit: { textAlign: "center" },
    col_disc: { textAlign: "center" },
    col_tax: { textAlign: "center" },
    col_total: { textAlign: "center" },
    col_batch: { textAlign: "center" },
    col_expiry: { textAlign: "center" },
    // ── Totals (plain) ──────────────────────────────────────────────
    totalsRow: {
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: 32,
      marginTop: 8,
      marginBottom: 24,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: DIVIDER,
      borderStyle: "solid"
    },
    totalsLabel: { fontSize: 8, color: TEXT_SECONDARY, marginBottom: 1 },
    totalsValue: { fontSize: 11, fontFamily: "Helvetica-Bold", color: TEXT_PRIMARY },
    totalsValueAccent: { color: ACCENT },
    // ── Footer ──────────────────────────────────────────────────────
    footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      borderTopWidth: 1,
      borderTopColor: DIVIDER,
      borderStyle: "solid",
      padding: "10px 32px",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#FFFFFF"
    },
    footerText: { fontSize: 7, color: TEXT_SECONDARY },
    footerBold: { fontSize: 7, fontFamily: "Helvetica-Bold", color: TEXT_SECONDARY }
  }),
  []
);
function StockReceiptPdfDocument({ values, branches, products }) {
  const styles = usePdfStyles();
  const branchRecord = branches?.find((b) => b.id === values.branch_id);
  const destination = branchRecord?.name ?? values.branch_id;
  const totalUnits = values.items.reduce(
    (sum, item) => sum + Number(item.quantity || 0) + Number(item.gift_quantity || 0),
    0
  );
  const totalGifts = values.items.reduce((sum, item) => sum + Number(item.gift_quantity || 0), 0);
  const subtotal = values.items.reduce(
    (sum, item) => sum + Number(item.quantity || 0) * Number(item.unit_cost || 0),
    0
  );
  const hasPricing = values.items.some(
    (item) => Number(item.discount_percent || 0) > 0 || Number(item.tax_percent || 0) > 0
  );
  const showBatch = values.items.some((item) => item.batch_number);
  const showExpiry = values.items.some((item) => item.expiry_date);
  const colWidths = (() => {
    if (showBatch || showExpiry) {
      const base = hasPricing ? {
        num: 3,
        name: 22,
        qty: 6,
        gift: 4,
        cost: 8,
        sale: 8,
        profit: 6,
        disc: 5,
        tax: 5,
        total: 8,
        batch: 11,
        expiry: 14
      } : {
        num: 3,
        name: 23,
        qty: 6,
        gift: 5,
        cost: 9,
        sale: 9,
        profit: 7,
        total: 10,
        batch: 13,
        expiry: 15
      };
      let { name } = base;
      if (!showBatch) name += base.batch;
      if (!showExpiry) name += base.expiry;
      return { ...base, name };
    }
    return hasPricing ? {
      num: 4,
      name: 34,
      qty: 7,
      gift: 5,
      cost: 10,
      sale: 10,
      profit: 8,
      disc: 6,
      tax: 6,
      total: 10
    } : { num: 4, name: 32, qty: 8, gift: 7, cost: 13, sale: 13, profit: 9, total: 14 };
  })();
  const w = (key) => ({ width: `${colWidths[key]}%` });
  const totalDiscountSaved = hasPricing ? values.items.reduce((sum, item) => {
    const base = Number(item.quantity || 0) * Number(item.unit_cost || 0);
    return sum + base * (Number(item.discount_percent || 0) / 100);
  }, 0) : 0;
  const totalTax = hasPricing ? values.items.reduce((sum, item) => {
    const base = Number(item.quantity || 0) * Number(item.unit_cost || 0);
    const afterDiscount = base * (1 - Number(item.discount_percent || 0) / 100);
    return sum + afterDiscount * (Number(item.tax_percent || 0) / 100);
  }, 0) : 0;
  const grandTotal = subtotal - totalDiscountSaved + totalTax;
  const totalCost = hasPricing ? grandTotal : subtotal;
  const dateStr = (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
  const renderHeader = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.headerBar, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.headerLeft, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { source: "/logo/logo-full-white.png", style: styles.headerLogo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.headerTitle, children: "Stock Receipt" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.headerSubtitle, children: values.reference_number ? `Ref: ${values.reference_number}` : "No reference" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.headerRight, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.headerSubtitle, children: dateStr }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.headerBadge, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.headerBadgeText, children: "CONFIRMED" }) })
    ] })
  ] });
  const renderMeta = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.detailsRow, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.detailsCol, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailLabel, children: "Destination" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailValueBold, children: destination ?? "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailValue, children: branchRecord?.location_type === "warehouse" ? "Warehouse" : "Branch" })
    ] }),
    values.supplier && /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.detailsCol, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailLabel, children: "Supplier" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailValueBold, children: values.supplier })
    ] }),
    values.reference_number && /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.detailsCol, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailLabel, children: "Reference" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailValue, children: values.reference_number })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.detailsCol, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailLabel, children: "Date" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailValue, children: dateStr })
    ] })
  ] });
  const renderNotes = () => {
    if (!values.notes) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.notesRow, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailLabel, children: "Notes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.detailValue, children: values.notes })
    ] });
  };
  const renderTable = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.sectionHeading, children: "Items Received" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.table, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.tableHeaderRow, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_num, w("num")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "#" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_name, w("name")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Product" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_qty, w("qty")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Qty" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_gift, w("gift")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Gift" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_cost, w("cost")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Unit Cost" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_sale, w("sale")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Sale Price" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_profit, w("profit")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Profit %" }) }),
        hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_disc, w("disc")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Disc %" }) }),
        hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_tax, w("tax")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Tax %" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_total, w("total")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Line Total" }) }),
        showBatch && /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_batch, w("batch")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Batch" }) }),
        showExpiry && /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_expiry, w("expiry")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.thText, children: "Expiry" }) })
      ] }),
      values.items.map((item, index) => {
        const product = item.product ?? products?.find((p) => p.id === item.product_id);
        const baseLineCost = Number(item.quantity || 0) * Number(item.unit_cost || 0);
        const afterDiscount = baseLineCost * (1 - Number(item.discount_percent || 0) / 100);
        const finalLineCost = afterDiscount * (1 + Number(item.tax_percent || 0) / 100);
        const isAlt = index % 2 !== 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { wrap: false, style: [styles.tableRow, isAlt && styles.tableRowAlt], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_num, w("num")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdMuted, children: index + 1 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: [styles.col_name, w("name")], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdBold, children: product?.name ?? item.product_id }),
            product?.sku && /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: styles.tdMuted, children: [
              "SKU: ",
              product.sku
            ] }),
            item.price_updated && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdPriceBadge, children: "Price updated" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_qty, w("qty")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdBold, children: item.quantity }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_gift, w("gift")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdMuted, children: Number(item.gift_quantity) > 0 ? `+${item.gift_quantity}` : "—" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_cost, w("cost")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdText, children: item.unit_cost ? fCurrency(item.unit_cost) : "—" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_sale, w("sale")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdText, children: item.sale_price ? fCurrency(item.sale_price) : "—" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_profit, w("profit")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdMuted, children: item.profit_percent !== "" && item.profit_percent != null ? `${item.profit_percent}%` : "—" }) }),
          hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_disc, w("disc")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdMuted, children: Number(item.discount_percent) > 0 ? `${item.discount_percent}%` : "—" }) }),
          hasPricing && /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_tax, w("tax")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdMuted, children: Number(item.tax_percent) > 0 ? `${item.tax_percent}%` : "—" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_total, w("total")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdBold, children: finalLineCost > 0 ? fCurrency(finalLineCost) : "—" }) }),
          showBatch && /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_batch, w("batch")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdMuted, children: item.batch_number || "—" }) }),
          showExpiry && /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.col_expiry, w("expiry")], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.tdMuted, children: item.expiry_date || "—" }) })
        ] }, index);
      })
    ] })
  ] });
  const renderTotals = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { wrap: false, style: styles.totalsRow, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.totalsLabel, children: "Total Items" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.totalsValue, children: values.items.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.totalsLabel, children: "Total Units" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.totalsValue, children: totalUnits })
    ] }),
    totalGifts > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.totalsLabel, children: "Gifted Units" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: styles.totalsValue, children: [
        "+",
        totalGifts
      ] })
    ] }),
    hasPricing && subtotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.totalsLabel, children: "Subtotal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.totalsValue, children: fCurrency(subtotal) })
    ] }),
    hasPricing && totalDiscountSaved > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.totalsLabel, children: "Discount" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: [styles.totalsValue, { color: "#B71D18" }], children: [
        "-",
        fCurrency(totalDiscountSaved)
      ] })
    ] }),
    hasPricing && totalTax > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.totalsLabel, children: "Tax" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: [styles.totalsValue, { color: "#B76E00" }], children: [
        "+",
        fCurrency(totalTax)
      ] })
    ] }),
    totalCost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.totalsLabel, children: hasPricing ? "Grand Total" : "Total Value" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.totalsValue, styles.totalsValueAccent], children: fCurrency(totalCost) })
    ] })
  ] });
  const renderFooter = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.footer, fixed: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: styles.footerText, children: "This document confirms the receipt of stock items listed above." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: styles.footerBold, children: [
      "Generated on ",
      dateStr
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Document, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page, { size: "A4", style: styles.page, children: [
    renderHeader(),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.body, children: [
      renderMeta(),
      renderNotes(),
      renderTable(),
      renderTotals()
    ] }),
    renderFooter()
  ] }) });
}
const ReceiptItemsScroller = reactExports.forwardRef(({ context, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { ...props, ref }));
ReceiptItemsScroller.displayName = "ReceiptItemsScroller";
function ReceiptItemsTable({ context, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Table,
    {
      ...props,
      size: "small",
      stickyHeader: true,
      sx: {
        "& .MuiTableCell-root": {
          px: { xs: 0.5, xl: 2 },
          // horizontal padding
          py: 0.5
          // vertical padding (row height)
        }
      }
    }
  );
}
const ReceiptItemsTableHead = reactExports.forwardRef(({ context, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { ...props, ref }));
ReceiptItemsTableHead.displayName = "ReceiptItemsTableHead";
function ReceiptItemsTableRow({ item, context, ...props }) {
  const index = props["data-index"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TableRow,
    {
      ...props,
      sx: { bgcolor: index % 2 === 0 ? "action.hover" : "background.paper" }
    }
  );
}
const ReceiptItemsTableBody = reactExports.forwardRef(({ context, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { ...props, ref }));
ReceiptItemsTableBody.displayName = "ReceiptItemsTableBody";
const RECEIPT_ITEMS_TABLE_COMPONENTS = {
  Scroller: ReceiptItemsScroller,
  Table: ReceiptItemsTable,
  TableHead: ReceiptItemsTableHead,
  TableRow: ReceiptItemsTableRow,
  TableBody: ReceiptItemsTableBody
};
const STEPS = ["Receipt Details", "Add Items", "Review & Confirm"];
const STEP_FIELDS = [["branch_id"], ["items"]];
const ITEM_SCHEMA = object({
  product_id: string().min(1, "Product is required"),
  product_name: string().optional(),
  product_sku: string().optional(),
  quantity: number().min(1, "Min quantity 1"),
  gift_quantity: number().min(0, "Gift qty must be 0 or more").optional().or(literal("")),
  unit_cost: number().min(0, "Cost must be positive").max(MAX_MONEY_VALUE, `Cost must be less than ${MAX_MONEY_VALUE}`).optional().or(literal("")),
  batch_number: string().optional(),
  expiry_date: string().optional(),
  notes: string().optional(),
  discount_percent: number().min(0).max(100).optional().or(literal("")),
  tax_percent: number().min(0).max(100).optional().or(literal("")),
  sale_price: number().min(0, "Sale price must be positive").max(MAX_MONEY_VALUE, `Sale price must be less than ${MAX_MONEY_VALUE}`).optional().or(literal("")),
  profit_percent: number().min(-100).max(MAX_PROFIT_PERCENT, `Profit % must be less than ${MAX_PROFIT_PERCENT}`).optional().or(literal(""))
});
const RECEIPT_SCHEMA = object({
  branch_id: string().min(1, "Please select a destination location"),
  supplier_id: string().optional(),
  reference_number: string().optional(),
  notes: string().optional(),
  items: array(ITEM_SCHEMA).min(1, "Add at least one item")
});
function isDraftMeaningful(values) {
  if (!values) return false;
  return Boolean(
    values.items?.some((item) => item.product_id) || values.supplier_id || values.reference_number || values.notes
  );
}
function readStockOrderDraft() {
  try {
    const raw = window.localStorage.getItem(STOCK_ORDER_DRAFT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function saveStockOrderDraft(draft) {
  try {
    window.localStorage.setItem(STOCK_ORDER_DRAFT_STORAGE_KEY, JSON.stringify(draft));
  } catch {
  }
}
function clearStockOrderDraft() {
  try {
    window.localStorage.removeItem(STOCK_ORDER_DRAFT_STORAGE_KEY);
  } catch {
  }
}
function StepReceiptDetails({ methods, branches }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { mb: 0.5 }, children: "Where is the stock arriving?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Select the location that will receive this stock." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "branch_id", label: "Destination *", children: branches?.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: b.id, children: [
      b.name,
      b.location_type === "warehouse" ? " (Warehouse)" : " (Branch)"
    ] }, b.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SupplierAutocomplete, { name: "supplier_id", label: "Supplier", quickAdd: true, storeId: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        name: "reference_number",
        label: "Reference / Invoice No.",
        placeholder: "e.g. INV-2026-001"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "notes", label: "Notes", multiline: true, rows: 3, placeholder: "Optional notes…" }) })
  ] });
}
const CREATE_NEW_OPTION = "__create_new__";
const ReceiptItemRow = reactExports.memo(function ReceiptItemRow2({
  index,
  productsById,
  onRemove,
  onRequestQuickAdd,
  onProductSelected
}) {
  const { control, setValue, getValues } = useFormContext();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const activePriceFieldRef = reactExports.useRef(null);
  const productId = useWatch({ name: `items.${index}.product_id` });
  const productName = useWatch({ name: `items.${index}.product_name` });
  const productSku = useWatch({ name: `items.${index}.product_sku` });
  const batchNumber = useWatch({ name: `items.${index}.batch_number` });
  const expiryDate = useWatch({ name: `items.${index}.expiry_date` });
  const quantity = useWatch({ name: `items.${index}.quantity` });
  const unitCost = useWatch({ name: `items.${index}.unit_cost` });
  const salePrice = useWatch({ name: `items.${index}.sale_price` });
  const profitPercent = useWatch({ name: `items.${index}.profit_percent` });
  const discountPercent = useWatch({ name: `items.${index}.discount_percent` });
  const taxPercent = useWatch({ name: `items.${index}.tax_percent` });
  const lastPriceValuesRef = reactExports.useRef({ unitCost, salePrice, profitPercent });
  const lineTotal = reactExports.useMemo(() => {
    const baseLineCost = Number(quantity || 0) * Number(unitCost || 0);
    const afterDiscount = baseLineCost * (1 - Number(discountPercent || 0) / 100);
    return afterDiscount * (1 + Number(taxPercent || 0) / 100);
  }, [quantity, unitCost, discountPercent, taxPercent]);
  const { products: searchResults, productsLoading } = useProductAutocomplete(searchQuery, {
    fetchLatestWhenEmpty: true,
    limit: 20
  });
  const selectedProduct = reactExports.useMemo(
    () => productsById.get(productId) || searchResults?.find((p) => p.id === productId) || (productId && productName ? { id: productId, name: productName, sku: productSku } : null),
    [productsById, searchResults, productId, productName, productSku]
  );
  const requiresBatch = !!selectedProduct?.expiry_days || !!expiryDate;
  reactExports.useEffect(() => {
    if (requiresBatch && batchNumber && !getValues(`items.${index}.expiry_date`) && selectedProduct?.expiry_days) {
      setValue(
        `items.${index}.expiry_date`,
        dayjs().add(selectedProduct.expiry_days, "day").format("YYYY-MM-DD")
      );
    }
  }, [batchNumber, requiresBatch, selectedProduct, index, setValue, getValues]);
  reactExports.useEffect(() => {
    activePriceFieldRef.current = null;
  }, [productId]);
  reactExports.useEffect(() => {
    const last = lastPriceValuesRef.current;
    if (last.unitCost === unitCost && last.salePrice === salePrice && last.profitPercent === profitPercent) {
      return;
    }
    lastPriceValuesRef.current = { unitCost, salePrice, profitPercent };
    const cost = Number(unitCost);
    if (!cost || Number.isNaN(cost)) return;
    if (activePriceFieldRef.current === "profit_percent") {
      if (profitPercent === "" || profitPercent == null || Number.isNaN(Number(profitPercent))) {
        return;
      }
      const clampedProfit = Math.min(Number(profitPercent), MAX_PROFIT_PERCENT);
      const computedSalePrice = Number(
        Math.min(cost * (1 + clampedProfit / 100), MAX_MONEY_VALUE).toFixed(2)
      );
      if (Number(salePrice) !== computedSalePrice || salePrice === "") {
        setValue(`items.${index}.sale_price`, computedSalePrice, { shouldValidate: false });
      }
    } else {
      if (salePrice === "" || salePrice == null || Number.isNaN(Number(salePrice))) return;
      const computedProfit = (Number(salePrice) - cost) / cost * 100;
      const clampedProfit = Number(
        Math.min(Math.max(computedProfit, -100), MAX_PROFIT_PERCENT).toFixed(2)
      );
      if (Number(profitPercent) !== clampedProfit || profitPercent === "") {
        setValue(`items.${index}.profit_percent`, clampedProfit, { shouldValidate: false });
      }
    }
  }, [unitCost, salePrice, profitPercent, setValue, index]);
  const filterOptions = reactExports.useCallback(
    (opts, { inputValue: iv }) => {
      const usedIds = new Set(
        (getValues("items") || []).filter((_, i) => i !== index).map((item) => item.product_id).filter(Boolean)
      );
      const available = opts.filter((o) => !usedIds.has(o.id));
      if (iv && !productsLoading && !available.some((o) => o.name?.toLowerCase() === iv.toLowerCase())) {
        return [...available, { id: CREATE_NEW_OPTION, name: iv, __isNew__: true }];
      }
      return available;
    },
    [productsLoading, getValues, index]
  );
  const handleChange = reactExports.useCallback(
    (newValue) => {
      if (newValue?.__isNew__) {
        onRequestQuickAdd(index, newValue.name || "");
        return;
      }
      setValue(`items.${index}.product_id`, newValue?.id ?? "", { shouldValidate: true });
      setValue(`items.${index}.product_name`, newValue?.name ?? "");
      setValue(`items.${index}.product_sku`, newValue?.sku ?? "");
      if (newValue?.retail_price != null) {
        activePriceFieldRef.current = null;
        setValue(`items.${index}.sale_price`, newValue.retail_price);
      }
      if (newValue?.id) onProductSelected(index);
    },
    [index, setValue, onRequestQuickAdd, onProductSelected]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 40, children: index + 1 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 350, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      LazyField,
      {
        name: `items.${index}.product_id`,
        placeholder: "Search product…",
        formatValue: () => selectedProduct?.name ?? "",
        sx: { width: 350 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: `items.${index}.product_id`,
            control,
            render: ({ fieldState: { error } }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Autocomplete,
              {
                openOnFocus: true,
                size: "small",
                sx: { width: 350 },
                value: selectedProduct,
                options: searchResults,
                getOptionLabel: (option) => {
                  if (option?.__isNew__) return `Add "${option.name}"`;
                  return option?.name ?? "";
                },
                isOptionEqualToValue: (option, val) => option?.id === val?.id,
                filterOptions,
                loading: productsLoading,
                onChange: (_, newValue) => handleChange(newValue),
                onInputChange: (_, newInputValue, reason) => {
                  if (reason === "input") setSearchQuery(newInputValue);
                  if (reason === "clear") setSearchQuery("");
                },
                renderOption: (props, option) => {
                  const { key, ...rest } = props;
                  if (option.__isNew__) {
                    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Box,
                      {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "primary.main"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line", width: 16 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
                            "Add “",
                            option.name,
                            "”"
                          ] })
                        ]
                      }
                    ) }, key);
                  }
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", flexDirection: "column" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 500, children: option.name }),
                    option.sku && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                      "SKU: ",
                      option.sku
                    ] })
                  ] }) }, key);
                },
                renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextField,
                  {
                    ...params,
                    autoFocus: true,
                    placeholder: "Search product…",
                    error: !!error,
                    helperText: error?.message,
                    slotProps: {
                      input: {
                        ...params.InputProps,
                        endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          productsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { color: "inherit", size: 16 }) : null,
                          params.InputProps.endAdornment
                        ] })
                      }
                    }
                  }
                )
              }
            )
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 140, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyField, { name: `items.${index}.quantity`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        autoFocus: true,
        size: "small",
        name: `items.${index}.quantity`,
        label: "",
        type: "number",
        inputProps: { min: 1 }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 140, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyField, { name: `items.${index}.gift_quantity`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        autoFocus: true,
        size: "small",
        name: `items.${index}.gift_quantity`,
        label: "",
        type: "number",
        inputProps: { min: 0 }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyField, { name: `items.${index}.unit_cost`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        autoFocus: true,
        name: `items.${index}.unit_cost`,
        type: "number",
        size: "small",
        inputProps: { min: 0, max: MAX_MONEY_VALUE, step: 0.01 }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyField, { name: `items.${index}.profit_percent`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        autoFocus: true,
        size: "small",
        name: `items.${index}.profit_percent`,
        type: "number",
        inputProps: { min: -100, max: MAX_PROFIT_PERCENT, step: 0.1 },
        onFocus: () => {
          activePriceFieldRef.current = "profit_percent";
        }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyField, { name: `items.${index}.discount_percent`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        autoFocus: true,
        size: "small",
        name: `items.${index}.discount_percent`,
        label: "",
        type: "number",
        inputProps: { min: 0, max: 100, step: 0.1 }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyField, { name: `items.${index}.tax_percent`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        autoFocus: true,
        size: "small",
        name: `items.${index}.tax_percent`,
        label: "",
        type: "number",
        inputProps: { min: 0, max: 100, step: 0.1 }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, noWrap: true, children: lineTotal > 0 ? fCurrency(lineTotal) : "—" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyField, { name: `items.${index}.sale_price`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        autoFocus: true,
        name: `items.${index}.sale_price`,
        type: "number",
        size: "small",
        inputProps: { min: 0, max: MAX_MONEY_VALUE, step: 0.01 },
        onFocus: () => {
          activePriceFieldRef.current = "sale_price";
        }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      LazyField,
      {
        name: `items.${index}.batch_number`,
        placeholder: requiresBatch ? "Batch No. *" : "Batch No.",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            autoFocus: true,
            name: `items.${index}.batch_number`,
            label: requiresBatch ? "Batch No. *" : "Batch No.",
            placeholder: requiresBatch ? "Required" : "Optional",
            size: "small"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { width: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      LazyField,
      {
        name: `items.${index}.expiry_date`,
        placeholder: "DD/MM/YYYY",
        formatValue: (value) => fDate(value, FORMAT_PATTERNS.split.date),
        sx: { width: 150 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.DatePicker,
          {
            autoFocus: true,
            name: `items.${index}.expiry_date`,
            sx: { width: "150px" },
            slotProps: {
              textField: {
                size: "small",
                InputProps: {
                  endAdornment: expiryDate ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      edge: "end",
                      onClick: () => setValue(`items.${index}.expiry_date`, ""),
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
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", color: "error", onClick: () => onRemove(index), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-minimalistic-bold", width: 18 }) }) })
  ] });
});
const EMPTY_ITEM = {
  product_id: "",
  product_name: "",
  product_sku: "",
  quantity: "",
  gift_quantity: "",
  unit_cost: "",
  sale_price: "",
  profit_percent: "",
  discount_percent: "",
  tax_percent: "",
  batch_number: "",
  expiry_date: "",
  notes: ""
};
function StepAddItems({ methods, productsById, validationAttempt }) {
  const { fields, prepend, insert, remove } = useFieldArray({
    control: methods.control,
    name: "items"
  });
  const virtuosoRef = reactExports.useRef(null);
  const [quickAddTarget, setQuickAddTarget] = reactExports.useState(null);
  const anyQuickAddOpen = quickAddTarget !== null;
  const [bulkDiscount, setBulkDiscount] = reactExports.useState("");
  const [bulkTax, setBulkTax] = reactExports.useState("");
  const bulkEditOpen = Ee();
  reactExports.useEffect(() => {
    if (!validationAttempt) return;
    const itemCount = methods.getValues("items")?.length ?? 0;
    for (let i = 0; i < itemCount; i += 1) {
      if (methods.getFieldState(`items.${i}`).invalid) {
        virtuosoRef.current?.scrollToIndex({ index: i, align: "center" });
        return;
      }
    }
  }, [validationAttempt, methods]);
  const addRow = reactExports.useCallback(() => {
    prepend(EMPTY_ITEM);
    virtuosoRef.current?.scrollToIndex({ index: 0 });
  }, [prepend]);
  const handleApplyDiscountToAll = reactExports.useCallback(() => {
    const items = methods.getValues("items");
    items.forEach((_, i) => {
      methods.setValue(`items.${i}.discount_percent`, bulkDiscount, { shouldValidate: false });
    });
  }, [methods, bulkDiscount]);
  const handleApplyTaxToAll = reactExports.useCallback(() => {
    const items = methods.getValues("items");
    items.forEach((_, i) => {
      methods.setValue(`items.${i}.tax_percent`, bulkTax, { shouldValidate: false });
    });
  }, [methods, bulkTax]);
  const handleProductSelected = reactExports.useCallback(
    (index) => {
      const items = methods.getValues("items");
      const hasEmpty = items.some((item) => !item.product_id);
      if (!hasEmpty) insert(index + 1, EMPTY_ITEM);
    },
    [methods, insert]
  );
  const handleRemove = reactExports.useCallback((index) => remove(index), [remove]);
  const handleRequestQuickAdd = reactExports.useCallback((index, name) => {
    setQuickAddTarget({ index, name });
  }, []);
  const handleQuickAddClose = reactExports.useCallback(() => setQuickAddTarget(null), []);
  const handleQuickAddCreated = reactExports.useCallback(
    (newProduct) => {
      if (!quickAddTarget) return;
      const { index } = quickAddTarget;
      mutate((key) => Array.isArray(key) && key[0] === "product-autocomplete", void 0, {
        revalidate: true
      });
      methods.setValue(`items.${index}.product_id`, newProduct.id, { shouldValidate: true });
      methods.setValue(`items.${index}.product_name`, newProduct.name ?? "");
      methods.setValue(`items.${index}.product_sku`, newProduct.sku ?? "");
      if (newProduct.retail_price != null) {
        methods.setValue(`items.${index}.sale_price`, newProduct.retail_price);
      }
      setQuickAddTarget(null);
      handleProductSelected(index);
    },
    [quickAddTarget, methods, handleProductSelected]
  );
  const handleBarcode = reactExports.useCallback(
    async (barcode) => {
      if (anyQuickAddOpen) return;
      try {
        toast.info(`Searching for: ${barcode}`);
        const product = await getProductByBarcode(barcode);
        if (!product) {
          toast.warning(`No product found for barcode: ${barcode}`);
          return;
        }
        const items = methods.getValues("items");
        const emptyIdx = items.findIndex((item) => !item.product_id);
        if (emptyIdx !== -1) {
          methods.setValue(`items.${emptyIdx}.product_id`, product.id, { shouldValidate: true });
          methods.setValue(`items.${emptyIdx}.product_name`, product.name ?? "");
          methods.setValue(`items.${emptyIdx}.product_sku`, product.sku ?? "");
          if (product.cost_price) {
            methods.setValue(`items.${emptyIdx}.unit_cost`, product.cost_price);
          }
          virtuosoRef.current?.scrollToIndex({ index: emptyIdx, align: "center" });
        } else {
          prepend({
            product_id: product.id,
            product_name: product.name ?? "",
            product_sku: product.sku ?? "",
            quantity: "",
            gift_quantity: "",
            unit_cost: product.cost_price ?? "",
            discount_percent: "",
            tax_percent: "",
            batch_number: "",
            expiry_date: "",
            notes: ""
          });
          virtuosoRef.current?.scrollToIndex({ index: 0 });
        }
        toast.success(`Added: ${product.name}`);
      } catch (err) {
        toast.error("Failed to look up barcode");
      }
    },
    [methods, prepend, anyQuickAddOpen]
  );
  useBarcodeScanner({ onBarcode: handleBarcode });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: "Products to receive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "small",
            variant: bulkEditOpen.value ? "soft" : "outlined",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-2-bold" }),
            onClick: bulkEditOpen.onToggle,
            children: "Bulk Edit"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "small",
            variant: "outlined",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
            onClick: addRow,
            children: "Add Row"
          }
        )
      ] })
    ] }),
    bulkEditOpen.value && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          p: 2,
          borderRadius: 1.5,
          bgcolor: "background.neutral",
          border: (theme) => `solid 1px ${theme.vars.palette.divider}`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              direction: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              sx: { mb: 1.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:layers-bold-duotone", width: 20, sx: { color: "primary.main" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Bulk edit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Set a value once and apply it to every row below." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: bulkEditOpen.onFalse, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line", width: 18 }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                spacing: 1,
                alignItems: "center",
                sx: {
                  p: 1,
                  pl: 1.5,
                  borderRadius: 1,
                  bgcolor: "background.paper",
                  border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                  flex: 1
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:tag-price-bold-duotone",
                      width: 18,
                      sx: { color: "text.disabled" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TextField,
                    {
                      fullWidth: true,
                      variant: "standard",
                      size: "small",
                      label: "Discount %",
                      type: "number",
                      value: bulkDiscount,
                      onChange: (e) => setBulkDiscount(e.target.value),
                      inputProps: { min: 0, max: 100, step: 0.1 },
                      slotProps: { input: { disableUnderline: true } }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "small",
                      variant: "contained",
                      disableElevation: true,
                      disabled: bulkDiscount === "",
                      onClick: handleApplyDiscountToAll,
                      sx: { flexShrink: 0 },
                      children: "Apply"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                spacing: 1,
                alignItems: "center",
                sx: {
                  p: 1,
                  pl: 1.5,
                  borderRadius: 1,
                  bgcolor: "background.paper",
                  border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                  flex: 1
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:bill-list-bold-duotone",
                      width: 18,
                      sx: { color: "text.disabled" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TextField,
                    {
                      fullWidth: true,
                      variant: "standard",
                      size: "small",
                      label: "Tax %",
                      type: "number",
                      value: bulkTax,
                      onChange: (e) => setBulkTax(e.target.value),
                      inputProps: { min: 0, max: 100, step: 0.1 },
                      slotProps: { input: { disableUnderline: true } }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "small",
                      variant: "contained",
                      disableElevation: true,
                      disabled: bulkTax === "",
                      onClick: handleApplyTaxToAll,
                      sx: { flexShrink: 0 },
                      children: "Apply"
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    fields.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", children: "No items added yet. Click “Add Row” to start building your receipt." }),
    fields.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      os,
      {
        ref: virtuosoRef,
        style: { height: RECEIPT_ITEMS_TABLE_HEIGHT },
        data: fields,
        components: RECEIPT_ITEMS_TABLE_COMPONENTS,
        increaseViewportBy: RECEIPT_ITEMS_OVERSCAN_PX,
        computeItemKey: (_, field) => field.id,
        fixedHeaderContent: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Quantity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Free" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Unit Cost" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Profit %" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Discount %" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Tax %" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Line Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Sale Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Batch No." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Expiry Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {})
        ] }),
        itemContent: (index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReceiptItemRow,
          {
            index,
            productsById,
            onRemove: handleRemove,
            onRequestQuickAdd: handleRequestQuickAdd,
            onProductSelected: handleProductSelected
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuickAddProductDialog,
      {
        open: anyQuickAddOpen,
        onClose: handleQuickAddClose,
        initialName: quickAddTarget?.name ?? "",
        onCreated: handleQuickAddCreated
      }
    )
  ] });
}
function computeReceiptTotals(items) {
  const totalUnits = items.reduce(
    (sum, item) => sum + Number(item.quantity || 0) + Number(item.gift_quantity || 0),
    0
  );
  const totalGifts = items.reduce((sum, item) => sum + Number(item.gift_quantity || 0), 0);
  const totalCost = items.reduce(
    (sum, item) => sum + Number(item.quantity || 0) * Number(item.unit_cost || 0),
    0
  );
  const hasPricing = items.some(
    (item) => Number(item.discount_percent || 0) > 0 || Number(item.tax_percent || 0) > 0
  );
  const totalDiscountSaved = hasPricing ? items.reduce((sum, item) => {
    const base = Number(item.quantity || 0) * Number(item.unit_cost || 0);
    return sum + base * (Number(item.discount_percent || 0) / 100);
  }, 0) : 0;
  const totalTax = hasPricing ? items.reduce((sum, item) => {
    const base = Number(item.quantity || 0) * Number(item.unit_cost || 0);
    const afterDiscount = base * (1 - Number(item.discount_percent || 0) / 100);
    return sum + afterDiscount * (Number(item.tax_percent || 0) / 100);
  }, 0) : 0;
  const grandTotal = totalCost - totalDiscountSaved + totalTax;
  return {
    totalUnits,
    totalGifts,
    totalCost,
    hasPricing,
    totalDiscountSaved,
    totalTax,
    grandTotal
  };
}
function StepReview({
  values,
  branches,
  productsById,
  suppliers,
  autoConfirm,
  onAutoConfirmChange
}) {
  const branchRecord = branches?.find((b) => b.id === values.branch_id);
  const destination = branchRecord?.name ?? values.branch_id;
  const supplierName = suppliers?.find((s) => s.id === values.supplier_id)?.name;
  const {
    totalUnits,
    totalGifts,
    totalCost,
    hasPricing,
    totalDiscountSaved,
    totalTax,
    grandTotal
  } = computeReceiptTotals(values.items);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          p: 2,
          bgcolor: "background.neutral",
          borderRadius: 1.5,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 2
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Destination" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: destination }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: branchRecord?.location_type === "warehouse" ? "Warehouse" : "Branch",
                size: "small",
                variant: "soft",
                color: "primary",
                sx: { mt: 0.5, width: "fit-content" }
              }
            )
          ] }),
          supplierName && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Supplier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: supplierName })
          ] }),
          values.reference_number && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Reference" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: values.reference_number })
          ] }),
          values.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: values.notes })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Qty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Gift Qty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Unit Cost" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Sale Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Profit %" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Disc %" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Tax %" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Line Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Batch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Expiry" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: values.items.map((item, i) => {
        const catalogProduct = productsById.get(item.product_id);
        const displayName = item.product_name || catalogProduct?.name || item.product_id;
        const displaySku = item.product_sku || catalogProduct?.sku;
        const baseLineCost = Number(item.quantity || 0) * Number(item.unit_cost || 0);
        const afterDiscount = baseLineCost * (1 - Number(item.discount_percent || 0) / 100);
        const finalLineCost = afterDiscount * (1 + Number(item.tax_percent || 0) / 100);
        const priceChanged = item.sale_price !== "" && item.sale_price != null && catalogProduct?.retail_price != null && Number(item.sale_price) !== Number(catalogProduct.retail_price);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 500, children: displayName }),
              displaySku && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: displaySku })
            ] }),
            priceChanged && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: "Price updated",
                size: "small",
                color: "info",
                variant: "soft",
                sx: { height: 20 }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: item.quantity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: Number(item.gift_quantity) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: `+${item.gift_quantity}`,
              size: "small",
              color: "success",
              variant: "soft"
            }
          ) : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: item.unit_cost ? fCurrency(item.unit_cost) : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: item.sale_price ? fCurrency(item.sale_price) : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: item.profit_percent !== "" && item.profit_percent != null ? `${item.profit_percent}%` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: Number(item.discount_percent) > 0 ? `${item.discount_percent}%` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: Number(item.tax_percent) > 0 ? `${item.tax_percent}%` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: finalLineCost > 0 ? fCurrency(finalLineCost) : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: item.batch_number || "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: item.expiry_date || "—" })
        ] }, i);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: autoConfirm,
            onChange: (e) => onAutoConfirmChange(e.target.checked)
          }
        ),
        label: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Confirm order immediately" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Automatically confirms this order and updates stock levels once generated, instead of leaving it as a draft." })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 4, justifyContent: "flex-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Total Units" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: totalUnits })
      ] }),
      totalGifts > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Gifted Units" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", color: "success.main", children: [
          "+",
          totalGifts
        ] })
      ] }),
      hasPricing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        totalCost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Subtotal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: fCurrency(totalCost) })
        ] }),
        totalDiscountSaved > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Discount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", color: "error.main", children: [
            "-",
            fCurrency(totalDiscountSaved)
          ] })
        ] }),
        totalTax > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Tax" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", color: "warning.main", children: [
            "+",
            fCurrency(totalTax)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Grand Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: fCurrency(grandTotal) })
        ] })
      ] }) : totalCost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Total Cost" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: fCurrency(totalCost) })
      ] })
    ] })
  ] });
}
function ProductStockReceiptDialog({ open, onClose, branches, onSuccess, receipt }) {
  const { catalog: products } = useGetProductCatalog();
  const productsById = reactExports.useMemo(() => new Map(products.map((p) => [p.id, p])), [products]);
  const { suppliers } = useSupplierAutocomplete(null, 100);
  const [activeStep, setActiveStep] = reactExports.useState(0);
  const [itemsValidationAttempt, setItemsValidationAttempt] = reactExports.useState(0);
  const [isConfirming, setIsConfirming] = reactExports.useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = reactExports.useState(false);
  const [autoConfirm, setAutoConfirm] = reactExports.useState(false);
  const [autoCreateExpense, setAutoCreateExpense] = reactExports.useState(false);
  const [pendingDraft, setPendingDraft] = reactExports.useState(null);
  const closeConfirm = Ee();
  const draftPrompt = Ee();
  const defaultValues = {
    branch_id: branches?.[0]?.id || "",
    supplier_id: "",
    reference_number: "",
    notes: "",
    items: [
      {
        product_id: "",
        product_name: "",
        product_sku: "",
        quantity: "",
        gift_quantity: "",
        unit_cost: "",
        sale_price: "",
        profit_percent: "",
        discount_percent: "",
        tax_percent: "",
        batch_number: "",
        expiry_date: "",
        notes: ""
      }
    ]
  };
  const methods = useForm({
    resolver: u(RECEIPT_SCHEMA),
    defaultValues,
    mode: "onChange"
  });
  const { trigger, reset, getValues, setError } = methods;
  reactExports.useEffect(() => {
    if (!open) return;
    setActiveStep(0);
    setAutoConfirm(false);
    setAutoCreateExpense(false);
    draftPrompt.onFalse();
    setPendingDraft(null);
    if (receipt) {
      reset({
        branch_id: receipt.branch?.id || "",
        supplier_id: receipt.supplier_id || "",
        reference_number: receipt.reference_number || "",
        notes: receipt.notes || "",
        items: receipt.items?.map((item) => ({
          product_id: item.product_id || "",
          product_name: item.product?.name || "",
          product_sku: item.product?.sku || "",
          quantity: item.quantity || "",
          gift_quantity: item.gift_quantity || "",
          unit_cost: item.unit_cost || "",
          sale_price: item.sale_price || "",
          profit_percent: item.profit_percent || "",
          discount_percent: item.discount_percent || "",
          tax_percent: item.tax_percent || "",
          batch_number: item.batch_number || "",
          expiry_date: item.expiry_date || "",
          notes: item.notes || ""
        })) ?? defaultValues.items
      });
      return;
    }
    reset(defaultValues);
    const draft = readStockOrderDraft();
    if (draft && isDraftMeaningful(draft.values)) {
      setPendingDraft(draft);
      draftPrompt.onTrue();
    } else {
      clearStockOrderDraft();
    }
  }, [open, receipt]);
  const handleNext = reactExports.useCallback(async () => {
    const valid = await trigger(STEP_FIELDS[activeStep]);
    if (!valid) {
      if (activeStep === 1) setItemsValidationAttempt((prev) => prev + 1);
      return;
    }
    if (activeStep === 1) {
      const items = getValues("items");
      let hasBatchError = false;
      items.forEach((item, index) => {
        const prod = productsById.get(item.product_id);
        if ((prod?.expiry_days || item.expiry_date) && !item.batch_number?.trim()) {
          setError(`items.${index}.batch_number`, {
            message: "Batch number is required for this product"
          });
          hasBatchError = true;
        }
      });
      if (hasBatchError) {
        setItemsValidationAttempt((prev) => prev + 1);
        return;
      }
    }
    setActiveStep((prev) => prev + 1);
  }, [activeStep, trigger, getValues, setError, productsById]);
  const handleBack = reactExports.useCallback(() => setActiveStep((prev) => prev - 1), []);
  const handleClose = reactExports.useCallback(
    (options = {}) => {
      const { submitted = false } = options;
      if (!receipt) {
        if (submitted) {
          clearStockOrderDraft();
        } else {
          const values2 = getValues();
          if (isDraftMeaningful(values2)) {
            saveStockOrderDraft({ values: values2, activeStep, autoConfirm, autoCreateExpense });
          } else {
            clearStockOrderDraft();
          }
        }
      }
      reset(defaultValues);
      setActiveStep(0);
      closeConfirm.onFalse();
      onClose();
    },
    [receipt, getValues, activeStep, autoConfirm, autoCreateExpense, reset, onClose, closeConfirm]
  );
  const handleRequestClose = reactExports.useCallback(() => {
    if (!receipt && !isDraftMeaningful(getValues())) {
      handleClose();
      return;
    }
    closeConfirm.onTrue();
  }, [receipt, getValues, handleClose, closeConfirm]);
  const handleContinueDraft = reactExports.useCallback(() => {
    if (pendingDraft) {
      reset(pendingDraft.values);
      setActiveStep(pendingDraft.activeStep ?? 0);
      setAutoConfirm(pendingDraft.autoConfirm ?? false);
      setAutoCreateExpense(pendingDraft.autoCreateExpense ?? false);
    }
    setPendingDraft(null);
    draftPrompt.onFalse();
  }, [pendingDraft, reset, draftPrompt]);
  const handleStartNewDraft = reactExports.useCallback(() => {
    clearStockOrderDraft();
    setPendingDraft(null);
    reset(defaultValues);
    setActiveStep(0);
    draftPrompt.onFalse();
  }, [reset, draftPrompt]);
  const handleConfirm = reactExports.useCallback(async () => {
    const values2 = getValues();
    setIsConfirming(true);
    try {
      const {
        createStockReceipt,
        updateStockReceipt,
        setStockReceiptItems,
        updateProductPrices,
        confirmStockReceipt
      } = await __vitePreload(async () => {
        const {
          createStockReceipt: createStockReceipt2,
          updateStockReceipt: updateStockReceipt2,
          setStockReceiptItems: setStockReceiptItems2,
          updateProductPrices: updateProductPrices2,
          confirmStockReceipt: confirmStockReceipt2
        } = await import("./index-B08HRm4A.js").then((n) => n.ek);
        return {
          createStockReceipt: createStockReceipt2,
          updateStockReceipt: updateStockReceipt2,
          setStockReceiptItems: setStockReceiptItems2,
          updateProductPrices: updateProductPrices2,
          confirmStockReceipt: confirmStockReceipt2
        };
      }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
      const isEditing = Boolean(receipt?.id);
      const { data: savedReceipt } = isEditing ? await updateStockReceipt(receipt.id, {
        branchId: values2.branch_id || void 0,
        supplierId: values2.supplier_id || void 0,
        referenceNumber: values2.reference_number || void 0,
        notes: values2.notes || void 0,
        expenseId: receipt.expense_id ?? void 0
      }) : await createStockReceipt({
        branchId: values2.branch_id || void 0,
        supplierId: values2.supplier_id || void 0,
        referenceNumber: values2.reference_number || void 0,
        notes: values2.notes || void 0
      });
      const priceChangedByProduct = new Map(
        values2.items.map((item) => {
          if (!item.product_id || item.sale_price === "" || item.sale_price == null) {
            return [item.product_id, false];
          }
          const catalogProduct = productsById.get(item.product_id);
          const changed = catalogProduct?.retail_price == null || Number(item.sale_price) !== Number(catalogProduct.retail_price);
          return [item.product_id, changed];
        })
      );
      const priceUpdatePromise = updateProductPrices(
        values2.items.filter((item) => priceChangedByProduct.get(item.product_id)).map((item) => ({ productId: item.product_id, retailPrice: Number(item.sale_price) }))
      );
      await setStockReceiptItems(
        savedReceipt.id,
        values2.items.map((item) => ({
          productId: item.product_id,
          quantity: Number(item.quantity),
          giftQuantity: item.gift_quantity ? Number(item.gift_quantity) : void 0,
          unitCost: item.unit_cost ? Number(item.unit_cost) : void 0,
          discountPercent: item.discount_percent ? Number(item.discount_percent) : void 0,
          taxPercent: item.tax_percent ? Number(item.tax_percent) : void 0,
          salePrice: item.sale_price ? Number(item.sale_price) : void 0,
          profitPercent: item.profit_percent !== "" ? Number(item.profit_percent) : void 0,
          priceUpdated: priceChangedByProduct.get(item.product_id) ?? false,
          batchNumber: item.batch_number || void 0,
          expiryDate: item.expiry_date || void 0,
          notes: item.notes || void 0
        }))
      );
      if (autoConfirm) {
        await Promise.all([priceUpdatePromise, confirmStockReceipt(savedReceipt.id)]);
        toast.success(
          isEditing ? "Stock order updated and confirmed" : "Stock order created and confirmed"
        );
      } else {
        await priceUpdatePromise;
        toast.success(isEditing ? "Stock order updated" : "Stock order created as draft");
      }
      onSuccess?.();
      handleClose({ submitted: true });
    } catch (err) {
      console.error("Stock receipt failed:", err);
      toast.error(err.message || "Failed to confirm stock receipt");
    } finally {
      setIsConfirming(false);
    }
  }, [getValues, handleClose, onSuccess, products, productsById, autoConfirm, receipt]);
  const handleDownloadPdf = reactExports.useCallback(async () => {
    const currentValues = getValues();
    setIsGeneratingPdf(true);
    try {
      const pdfValues = {
        ...currentValues,
        supplier: suppliers?.find((s) => s.id === currentValues.supplier_id)?.name,
        items: currentValues.items.map((item) => {
          const catalogProduct = productsById.get(item.product_id);
          return {
            ...item,
            gift_quantity: item.gift_quantity ? Number(item.gift_quantity) : 0,
            product: item.product_name ? { id: item.product_id, name: item.product_name, sku: item.product_sku } : void 0,
            price_updated: item.sale_price !== "" && item.sale_price != null && catalogProduct?.retail_price != null && Number(item.sale_price) !== Number(catalogProduct.retail_price)
          };
        })
      };
      const blob = await pdf(
        /* @__PURE__ */ jsxRuntimeExports.jsx(StockReceiptPdfDocument, { values: pdfValues, branches, products })
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `stock-receipt-${currentValues.reference_number || "draft"}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Failed to generate PDF");
      console.error(error);
    } finally {
      setIsGeneratingPdf(false);
    }
  }, [getValues, suppliers, productsById, branches, products]);
  const values = getValues();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleRequestClose, fullScreen: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Receive Stock" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { activeStep, alternativeLabel: true, children: STEPS.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepLabel, { children: label }) }, label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { dividers: true, sx: { pt: 3 }, children: [
        activeStep === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepReceiptDetails, { methods, branches }),
        activeStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          StepAddItems,
          {
            methods,
            productsById,
            validationAttempt: itemsValidationAttempt
          }
        ),
        activeStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          StepReview,
          {
            values,
            branches,
            productsById,
            suppliers,
            autoConfirm,
            onAutoConfirmChange: setAutoConfirm
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { sx: { px: 3, py: 2, gap: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleRequestClose, color: "inherit", disabled: isConfirming, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flexGrow: 1 } }),
        activeStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            onClick: handleDownloadPdf,
            disabled: isGeneratingPdf || isConfirming,
            startIcon: isGeneratingPdf ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:cloud-download-fill" }),
            children: isGeneratingPdf ? "Generating…" : "Download PDF"
          }
        ),
        activeStep > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleBack,
            disabled: isConfirming,
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:arrow-left-bold" }),
            children: "Back"
          }
        ),
        activeStep < STEPS.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            onClick: handleNext,
            endIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:arrow-right-bold" }),
            children: "Next"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "success",
            onClick: handleConfirm,
            disabled: isConfirming,
            startIcon: isConfirming ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold" }),
            children: isConfirming ? "Confirming…" : receipt?.id ? "Update Order" : "Generate Order"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: closeConfirm.value,
        onClose: closeConfirm.onFalse,
        title: receipt ? "Discard changes?" : "Close stock order?",
        content: receipt ? "You have unsaved changes. Are you sure you want to close without saving?" : "Your progress will be saved as a draft, so you can continue where you left off next time.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: receipt ? "error" : "primary",
            onClick: () => handleClose(),
            children: receipt ? "Discard" : "Save & Close"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: draftPrompt.value, onClose: handleStartNewDraft, maxWidth: "xs", fullWidth: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { sx: { pb: 2 }, children: "Resume your stock order?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { typography: "body2" }, children: "You have an unfinished stock order saved from before. Would you like to continue where you left off, or start a new one?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", color: "inherit", onClick: handleStartNewDraft, children: "Start New" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", onClick: handleContinueDraft, children: "Continue Draft" })
      ] })
    ] })
  ] });
}
export {
  HIDE_COLUMNS as H,
  ProductStockReceiptDialog as P,
  RECEIPT_STATUSES as R,
  StockReceiptPdfDocument as S,
  HIDE_COLUMNS_TOGGLABLE as a
};
