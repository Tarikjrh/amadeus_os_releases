import { br as createSvgIcon, j as jsxRuntimeExports, a9 as generateUtilityClass, $ as generateUtilityClasses, r as reactExports, i as useDefaultProps, l as clsx, o as composeClasses, q as styled, v as memoTheme, cr as useRtl, I as IconButton, cs as KeyboardArrowRight, ct as KeyboardArrowLeft, aJ as useId, aa as useSlot, cu as InputBase, M as MenuItem, x as Select } from "./index-B08HRm4A.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
const FirstPageIconDefault = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}));
const LastPageIconDefault = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}));
function getToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiToolbar", slot);
}
generateUtilityClasses("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes,
    disableGutters,
    variant
  } = ownerState;
  const slots = {
    root: ["root", !disableGutters && "gutters", variant]
  };
  return composeClasses(slots, getToolbarUtilityClass, classes);
};
const ToolbarRoot = styled("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableGutters && styles.gutters, styles[ownerState.variant]];
  }
})(memoTheme(({
  theme
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableGutters,
    style: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    }
  }, {
    props: {
      variant: "dense"
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: "regular"
    },
    style: theme.mixins.toolbar
  }]
})));
const Toolbar = /* @__PURE__ */ reactExports.forwardRef(function Toolbar2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiToolbar"
  });
  const {
    className,
    component = "div",
    disableGutters = false,
    variant = "regular",
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    disableGutters,
    variant
  };
  const classes = useUtilityClasses$2(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other
  });
});
function getTablePaginationActionsUtilityClass(slot) {
  return generateUtilityClass("MuiTablePaginationActions", slot);
}
generateUtilityClasses("MuiTablePaginationActions", ["root"]);
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTablePaginationActionsUtilityClass, classes);
};
const TablePaginationActionsRoot = styled("div", {
  name: "MuiTablePaginationActions",
  slot: "Root"
})({});
const TablePaginationActions = /* @__PURE__ */ reactExports.forwardRef(function TablePaginationActions2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTablePaginationActions"
  });
  const {
    backIconButtonProps,
    className,
    count,
    disabled = false,
    getItemAriaLabel,
    nextIconButtonProps,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton,
    showLastButton,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const isRtl = useRtl();
  const ownerState = props;
  const classes = useUtilityClasses$1(ownerState);
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const FirstButton = slots.firstButton ?? IconButton;
  const LastButton = slots.lastButton ?? IconButton;
  const NextButton = slots.nextButton ?? IconButton;
  const PreviousButton = slots.previousButton ?? IconButton;
  const FirstButtonIcon = slots.firstButtonIcon ?? FirstPageIconDefault;
  const LastButtonIcon = slots.lastButtonIcon ?? LastPageIconDefault;
  const NextButtonIcon = slots.nextButtonIcon ?? KeyboardArrowRight;
  const PreviousButtonIcon = slots.previousButtonIcon ?? KeyboardArrowLeft;
  const FirstButtonSlot = isRtl ? LastButton : FirstButton;
  const PreviousButtonSlot = isRtl ? NextButton : PreviousButton;
  const NextButtonSlot = isRtl ? PreviousButton : NextButton;
  const LastButtonSlot = isRtl ? FirstButton : LastButton;
  const firstButtonSlotProps = isRtl ? slotProps.lastButton : slotProps.firstButton;
  const previousButtonSlotProps = isRtl ? slotProps.nextButton : slotProps.previousButton;
  const nextButtonSlotProps = isRtl ? slotProps.previousButton : slotProps.nextButton;
  const lastButtonSlotProps = isRtl ? slotProps.firstButton : slotProps.lastButton;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TablePaginationActionsRoot, {
    ref,
    className: clsx(classes.root, className),
    ...other,
    children: [showFirstButton && /* @__PURE__ */ jsxRuntimeExports.jsx(FirstButtonSlot, {
      onClick: handleFirstPageButtonClick,
      disabled: disabled || page === 0,
      "aria-label": getItemAriaLabel("first", page),
      title: getItemAriaLabel("first", page),
      ...firstButtonSlotProps,
      children: isRtl ? /* @__PURE__ */ jsxRuntimeExports.jsx(LastButtonIcon, {
        ...slotProps.lastButtonIcon
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FirstButtonIcon, {
        ...slotProps.firstButtonIcon
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(PreviousButtonSlot, {
      onClick: handleBackButtonClick,
      disabled: disabled || page === 0,
      color: "inherit",
      "aria-label": getItemAriaLabel("previous", page),
      title: getItemAriaLabel("previous", page),
      ...previousButtonSlotProps ?? backIconButtonProps,
      children: isRtl ? /* @__PURE__ */ jsxRuntimeExports.jsx(NextButtonIcon, {
        ...slotProps.nextButtonIcon
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PreviousButtonIcon, {
        ...slotProps.previousButtonIcon
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(NextButtonSlot, {
      onClick: handleNextButtonClick,
      disabled: disabled || (count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false),
      color: "inherit",
      "aria-label": getItemAriaLabel("next", page),
      title: getItemAriaLabel("next", page),
      ...nextButtonSlotProps ?? nextIconButtonProps,
      children: isRtl ? /* @__PURE__ */ jsxRuntimeExports.jsx(PreviousButtonIcon, {
        ...slotProps.previousButtonIcon
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx(NextButtonIcon, {
        ...slotProps.nextButtonIcon
      })
    }), showLastButton && /* @__PURE__ */ jsxRuntimeExports.jsx(LastButtonSlot, {
      onClick: handleLastPageButtonClick,
      disabled: disabled || page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel("last", page),
      title: getItemAriaLabel("last", page),
      ...lastButtonSlotProps,
      children: isRtl ? /* @__PURE__ */ jsxRuntimeExports.jsx(FirstButtonIcon, {
        ...slotProps.firstButtonIcon
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LastButtonIcon, {
        ...slotProps.lastButtonIcon
      })
    })]
  });
});
function getTablePaginationUtilityClass(slot) {
  return generateUtilityClass("MuiTablePagination", slot);
}
const tablePaginationClasses = generateUtilityClasses("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
var _InputBase;
const TablePaginationRoot = styled(TableCell, {
  name: "MuiTablePagination",
  slot: "Root"
})(memoTheme(({
  theme
}) => ({
  overflow: "auto",
  color: (theme.vars || theme).palette.text.primary,
  fontSize: theme.typography.pxToRem(14),
  // Increase the specificity to override TableCell.
  "&:last-child": {
    padding: 0
  }
})));
const TablePaginationToolbar = styled(Toolbar, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (props, styles) => ({
    [`& .${tablePaginationClasses.actions}`]: styles.actions,
    ...styles.toolbar
  })
})(memoTheme(({
  theme
}) => ({
  minHeight: 52,
  paddingRight: 2,
  [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
    minHeight: 52
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: 52,
    paddingRight: 2
  },
  [`& .${tablePaginationClasses.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
})));
const TablePaginationSpacer = styled("div", {
  name: "MuiTablePagination",
  slot: "Spacer"
})({
  flex: "1 1 100%"
});
const TablePaginationSelectLabel = styled("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel"
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  flexShrink: 0
})));
const TablePaginationSelect = styled(Select, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (props, styles) => ({
    [`& .${tablePaginationClasses.selectIcon}`]: styles.selectIcon,
    [`& .${tablePaginationClasses.select}`]: styles.select,
    ...styles.input,
    ...styles.selectRoot
  })
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${tablePaginationClasses.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
});
const TablePaginationMenuItem = styled(MenuItem, {
  name: "MuiTablePagination",
  slot: "MenuItem"
})({});
const TablePaginationDisplayedRows = styled("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows"
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  flexShrink: 0
})));
function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}
function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  };
  return composeClasses(slots, getTablePaginationUtilityClass, classes);
};
const TablePagination = /* @__PURE__ */ reactExports.forwardRef(function TablePagination2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTablePagination"
  });
  const {
    ActionsComponent = TablePaginationActions,
    backIconButtonProps,
    colSpan: colSpanProp,
    component = TableCell,
    count,
    disabled = false,
    getItemAriaLabel = defaultGetAriaLabel,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelRowsPerPage = "Rows per page:",
    nextIconButtonProps,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    SelectProps = {},
    showFirstButton = false,
    showLastButton = false,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const selectProps = slotProps?.select ?? SelectProps;
  const MenuItemComponent = selectProps.native ? "option" : TablePaginationMenuItem;
  let colSpan;
  if (component === TableCell || component === "td") {
    colSpan = colSpanProp || 1e3;
  }
  const selectId = useId(selectProps.id);
  const labelId = useId(selectProps.labelId);
  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: TablePaginationRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      component,
      ...other
    },
    ownerState,
    additionalProps: {
      colSpan
    }
  });
  const [ToolbarSlot, toolbarSlotProps] = useSlot("toolbar", {
    className: classes.toolbar,
    elementType: TablePaginationToolbar,
    externalForwardedProps,
    ownerState
  });
  const [SpacerSlot, spacerSlotProps] = useSlot("spacer", {
    className: classes.spacer,
    elementType: TablePaginationSpacer,
    externalForwardedProps,
    ownerState
  });
  const [SelectLabelSlot, selectLabelSlotProps] = useSlot("selectLabel", {
    className: classes.selectLabel,
    elementType: TablePaginationSelectLabel,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      id: labelId
    }
  });
  const [SelectSlot, selectSlotProps] = useSlot("select", {
    className: classes.select,
    elementType: TablePaginationSelect,
    externalForwardedProps,
    ownerState
  });
  const [MenuItemSlot, menuItemSlotProps] = useSlot("menuItem", {
    className: classes.menuItem,
    elementType: MenuItemComponent,
    externalForwardedProps,
    ownerState
  });
  const [DisplayedRows, displayedRowsProps] = useSlot("displayedRows", {
    className: classes.displayedRows,
    elementType: TablePaginationDisplayedRows,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
    ...rootSlotProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarSlot, {
      ...toolbarSlotProps,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SpacerSlot, {
        ...spacerSlotProps
      }), rowsPerPageOptions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(SelectLabelSlot, {
        ...selectLabelSlotProps,
        children: labelRowsPerPage
      }), rowsPerPageOptions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(SelectSlot, {
        variant: "standard",
        ...!selectProps.variant && {
          input: _InputBase || (_InputBase = /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, {}))
        },
        value: rowsPerPage,
        onChange: onRowsPerPageChange,
        id: selectId,
        labelId,
        ...selectProps,
        classes: {
          ...selectProps.classes,
          // TODO v5 remove `classes.input`
          root: clsx(classes.input, classes.selectRoot, (selectProps.classes || {}).root),
          select: clsx(classes.select, (selectProps.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: clsx(classes.selectIcon, (selectProps.classes || {}).icon)
        },
        disabled,
        ...selectSlotProps,
        children: rowsPerPageOptions.map((rowsPerPageOption) => /* @__PURE__ */ reactExports.createElement(MenuItemSlot, {
          ...menuItemSlotProps,
          key: rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }, rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayedRows, {
        ...displayedRowsProps,
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(ActionsComponent, {
        className: classes.actions,
        backIconButtonProps,
        count,
        nextIconButtonProps,
        onPageChange,
        page,
        rowsPerPage,
        showFirstButton,
        showLastButton,
        slotProps: slotProps.actions,
        slots: slots.actions,
        getItemAriaLabel,
        disabled
      })]
    })
  });
});
export {
  TablePagination as T,
  tablePaginationClasses as t
};
