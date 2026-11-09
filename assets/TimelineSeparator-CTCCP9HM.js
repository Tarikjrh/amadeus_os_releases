import { r as reactExports, a9 as generateUtilityClass, $ as generateUtilityClasses, n as capitalize, cj as useThemeProps, j as jsxRuntimeExports, l as clsx, o as composeClasses, q as styled, c as Typography } from "./index-B08HRm4A.js";
import { i as isMuiElement } from "./TextField-CIuP940C.js";
const TimelineContext = /* @__PURE__ */ reactExports.createContext({});
function getTimelineUtilityClass(slot) {
  return generateUtilityClass("MuiTimeline", slot);
}
generateUtilityClasses("MuiTimeline", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
function convertTimelinePositionToClass(position) {
  return position === "alternate-reverse" ? "positionAlternateReverse" : `position${capitalize(position)}`;
}
const useUtilityClasses$5 = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", position && convertTimelinePositionToClass(position)]
  };
  return composeClasses(slots, getTimelineUtilityClass, classes);
};
const TimelineRoot = styled("ul", {
  name: "MuiTimeline",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.position && styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})({
  display: "flex",
  flexDirection: "column",
  padding: "6px 16px",
  flexGrow: 1
});
const Timeline = /* @__PURE__ */ reactExports.forwardRef(function Timeline2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimeline"
  });
  const {
    position = "right",
    className,
    ...other
  } = props;
  const ownerState = {
    ...props,
    position
  };
  const classes = useUtilityClasses$5(ownerState);
  const contextValue = reactExports.useMemo(() => ({
    position
  }), [position]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineRoot, {
      className: clsx(classes.root, className),
      ownerState,
      ref,
      ...other
    })
  });
});
function getTimelineConnectorUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineConnector", slot);
}
generateUtilityClasses("MuiTimelineConnector", ["root"]);
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTimelineConnectorUtilityClass, classes);
};
const TimelineConnectorRoot = styled("span", {
  name: "MuiTimelineConnector",
  slot: "Root"
})(({
  theme
}) => {
  return {
    width: 2,
    backgroundColor: (theme.vars || theme).palette.grey[400],
    flexGrow: 1
  };
});
const TimelineConnector = /* @__PURE__ */ reactExports.forwardRef(function TimelineConnector2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineConnector"
  });
  const {
    className,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$4(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineConnectorRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
function getTimelineContentUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineContent", slot);
}
const timelineContentClasses = generateUtilityClasses("MuiTimelineContent", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
const useUtilityClasses$3 = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", convertTimelinePositionToClass(position)]
  };
  return composeClasses(slots, getTimelineContentUtilityClass, classes);
};
const TimelineContentRoot = styled(Typography, {
  name: "MuiTimelineContent",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})(({
  ownerState
}) => ({
  flex: 1,
  padding: "6px 16px",
  textAlign: "left",
  ...ownerState.position === "left" && {
    textAlign: "right"
  }
}));
const TimelineContent = /* @__PURE__ */ reactExports.forwardRef(function TimelineContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineContent"
  });
  const {
    className,
    ...other
  } = props;
  const {
    position: positionContext
  } = reactExports.useContext(TimelineContext);
  const ownerState = {
    ...props,
    position: positionContext || "right"
  };
  const classes = useUtilityClasses$3(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContentRoot, {
    component: "div",
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
function getTimelineDotUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineDot", slot);
}
generateUtilityClasses("MuiTimelineDot", ["root", "filled", "outlined", "filledGrey", "outlinedGrey", "filledPrimary", "outlinedPrimary", "filledSecondary", "outlinedSecondary"]);
const useUtilityClasses$2 = (ownerState) => {
  const {
    color,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, color !== "inherit" && `${variant}${capitalize(color)}`]
  };
  return composeClasses(slots, getTimelineDotUtilityClass, classes);
};
const TimelineDotRoot = styled("span", {
  name: "MuiTimelineDot",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.color !== "inherit" && `${ownerState.variant}${capitalize(ownerState.color)}`], styles[ownerState.variant]];
  }
})(({
  ownerState,
  theme
}) => ({
  display: "flex",
  alignSelf: "baseline",
  borderStyle: "solid",
  borderWidth: 2,
  padding: 4,
  borderRadius: "50%",
  boxShadow: (theme.vars || theme).shadows[1],
  margin: "11.5px 0",
  ...ownerState.variant === "filled" && {
    borderColor: "transparent",
    ...ownerState.color !== "inherit" && {
      ...ownerState.color === "grey" ? {
        color: (theme.vars || theme).palette.grey[50],
        backgroundColor: (theme.vars || theme).palette.grey[400]
      } : {
        color: (theme.vars || theme).palette[ownerState.color].contrastText,
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }
  },
  ...ownerState.variant === "outlined" && {
    boxShadow: "none",
    backgroundColor: "transparent",
    ...ownerState.color !== "inherit" && {
      ...ownerState.color === "grey" ? {
        borderColor: (theme.vars || theme).palette.grey[400]
      } : {
        borderColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }
  }
}));
const TimelineDot = /* @__PURE__ */ reactExports.forwardRef(function TimelineDot2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineDot"
  });
  const {
    className,
    color = "grey",
    variant = "filled",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    variant
  };
  const classes = useUtilityClasses$2(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDotRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
const timelineOppositeContentClasses = generateUtilityClasses("MuiTimelineOppositeContent", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
function getTimelineItemUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineItem", slot);
}
const timelineItemClasses = generateUtilityClasses("MuiTimelineItem", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse", "missingOppositeContent"]);
const useUtilityClasses$1 = (ownerState) => {
  const {
    position,
    classes,
    hasOppositeContent
  } = ownerState;
  const slots = {
    root: ["root", convertTimelinePositionToClass(position), !hasOppositeContent && "missingOppositeContent"]
  };
  return composeClasses(slots, getTimelineItemUtilityClass, classes);
};
const TimelineItemRoot = styled("li", {
  name: "MuiTimelineItem",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})(({
  ownerState
}) => ({
  listStyle: "none",
  display: "flex",
  position: "relative",
  minHeight: 70,
  ...ownerState.position === "left" && {
    flexDirection: "row-reverse"
  },
  ...(ownerState.position === "alternate" || ownerState.position === "alternate-reverse") && {
    [`&:nth-of-type(${ownerState.position === "alternate" ? "even" : "odd"})`]: {
      flexDirection: "row-reverse",
      [`& .${timelineContentClasses.root}`]: {
        textAlign: "right"
      },
      [`& .${timelineOppositeContentClasses.root}`]: {
        textAlign: "left"
      }
    }
  },
  ...!ownerState.hasOppositeContent && {
    "&::before": {
      content: '""',
      flex: 1,
      padding: "6px 16px"
    }
  }
}));
const TimelineItem = /* @__PURE__ */ reactExports.forwardRef(function TimelineItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineItem"
  });
  const {
    position: positionProp,
    className,
    ...other
  } = props;
  const {
    position: positionContext
  } = reactExports.useContext(TimelineContext);
  let hasOppositeContent = false;
  reactExports.Children.forEach(props.children, (child) => {
    if (isMuiElement(child, ["TimelineOppositeContent"])) {
      hasOppositeContent = true;
    }
  });
  const ownerState = {
    ...props,
    position: positionProp || positionContext || "right",
    hasOppositeContent
  };
  const classes = useUtilityClasses$1(ownerState);
  const contextValue = reactExports.useMemo(() => ({
    position: ownerState.position
  }), [ownerState.position]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineItemRoot, {
      className: clsx(classes.root, className),
      ownerState,
      ref,
      ...other
    })
  });
});
function getTimelineSeparatorUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineSeparator", slot);
}
generateUtilityClasses("MuiTimelineSeparator", ["root"]);
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTimelineSeparatorUtilityClass, classes);
};
const TimelineSeparatorRoot = styled("div", {
  name: "MuiTimelineSeparator",
  slot: "Root"
})({
  display: "flex",
  flexDirection: "column",
  flex: 0,
  alignItems: "center"
});
const TimelineSeparator = /* @__PURE__ */ reactExports.forwardRef(function TimelineSeparator2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineSeparator"
  });
  const {
    className,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineSeparatorRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
export {
  Timeline as T,
  TimelineItem as a,
  TimelineSeparator as b,
  TimelineDot as c,
  TimelineConnector as d,
  TimelineContent as e,
  timelineItemClasses as t
};
