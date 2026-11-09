import { bH as createClasses, r as reactExports, j as jsxRuntimeExports, b4 as j, q as styled, bz as ButtonBase, a5 as alpha, U, a as Iconify, B as Box, c as Typography, T as Tooltip } from "./index-B08HRm4A.js";
const colorPickerClasses = {
  root: createClasses("color__picker__root"),
  item: {
    root: createClasses("color__picker__item__root"),
    container: createClasses("color__picker__item__container"),
    icon: createClasses("color__picker__item__icon")
  }
};
function ColorPicker({
  sx,
  value,
  onChange,
  slotProps,
  className,
  size = 36,
  options = [],
  limit = "auto",
  variant = "circular",
  ...other
}) {
  const isSingleSelect = typeof value === "string";
  const handleSelect = reactExports.useCallback(
    (color) => {
      if (isSingleSelect) {
        if (color !== value) {
          onChange?.(color);
        }
      } else {
        const selected = value;
        const newSelected = selected.includes(color) ? selected.filter((currentColor) => currentColor !== color) : [...selected, color];
        onChange?.(newSelected);
      }
    },
    [onChange, value, isSingleSelect]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ColorPickerRoot,
    {
      limit,
      className: j([colorPickerClasses.root, className]),
      sx: [
        {
          "--item-size": `${size}px`,
          "--item-radius": variant === "circular" && "50%" || variant === "rounded" && "calc(var(--item-size) / 6)" || "0px"
        },
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...other,
      children: options.map((color) => {
        const hasSelected = isSingleSelect ? value === color : value.includes(color);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ItemRoot,
          {
            "aria-label": color,
            onClick: () => handleSelect(color),
            className: colorPickerClasses.item.root,
            ...slotProps?.item,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ItemContainer,
              {
                color,
                hasSelected,
                className: colorPickerClasses.item.container,
                ...slotProps?.itemContainer,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ItemIcon,
                  {
                    color,
                    hasSelected,
                    icon: "eva:checkmark-fill",
                    className: colorPickerClasses.item.icon,
                    ...slotProps?.icon
                  }
                )
              }
            )
          }
        ) }, color);
      })
    }
  );
}
const ColorPickerRoot = styled("ul", {
  shouldForwardProp: (prop) => !["limit", "sx"].includes(prop)
})(({ limit }) => ({
  flexWrap: "wrap",
  flexDirection: "row",
  display: "inline-flex",
  "& > li": { display: "inline-flex" },
  ...typeof limit === "number" && {
    justifyContent: "flex-end",
    width: `calc(var(--item-size) * ${limit})`
  }
}));
const ItemRoot = styled(ButtonBase)(() => ({
  width: "var(--item-size)",
  height: "var(--item-size)",
  borderRadius: "var(--item-radius)"
}));
const ItemContainer = styled("span", {
  shouldForwardProp: (prop) => !["color", "hasSelected", "sx"].includes(prop)
})(({ color, theme }) => ({
  alignItems: "center",
  display: "inline-flex",
  borderRadius: "inherit",
  justifyContent: "center",
  backgroundColor: color,
  width: "calc(var(--item-size) - 16px)",
  height: "calc(var(--item-size) - 16px)",
  border: `solid 1px ${U(theme.vars.palette.grey["500Channel"], 0.16)}`,
  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.shortest
  }),
  variants: [
    {
      props: { hasSelected: true },
      style: {
        width: "calc(var(--item-size) - 8px)",
        height: "calc(var(--item-size) - 8px)",
        outline: `solid 2px ${alpha(color, 0.08)}`,
        boxShadow: `4px 4px 8px 0 ${alpha(color, 0.48)}`
      }
    }
  ]
}));
const ItemIcon = styled(Iconify, {
  shouldForwardProp: (prop) => !["color", "hasSelected", "sx"].includes(prop)
})(({ color, theme }) => ({
  width: 0,
  height: 0,
  color: theme.palette.getContrastText(color),
  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.shortest
  }),
  variants: [
    {
      props: { hasSelected: true },
      style: {
        width: "calc(var(--item-size) / 2.4)",
        height: "calc(var(--item-size) / 2.4)"
      }
    }
  ]
}));
styled("ul")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end"
}));
styled("li")(({ theme }) => ({
  borderRadius: "50%",
  width: "var(--item-size)",
  height: "var(--item-size)",
  marginLeft: "var(--item-gap)",
  backgroundColor: "var(--item-color)",
  border: `solid 2px ${theme.vars.palette.background.paper}`,
  boxShadow: `inset -1px 1px 2px ${U(theme.vars.palette.common.blackChannel, 0.24)}`
}));
styled("li")(({ theme }) => ({
  ...theme.typography.subtitle2
}));
const STYLIST_CALENDAR_COLORS = [
  "#F44336",
  // Red
  "#E91E63",
  // Pink
  "#9C27B0",
  // Purple
  "#673AB7",
  // Deep Purple
  "#3F51B5",
  // Indigo
  "#2196F3",
  // Blue
  "#03A9F4",
  // Light Blue
  "#00BCD4",
  // Cyan
  "#009688",
  // Teal
  "#4CAF50",
  // Green
  "#8BC34A",
  // Light Green
  "#CDDC39",
  // Lime
  "#FF9800",
  // Orange
  "#FF5722",
  // Deep Orange
  "#795548",
  // Brown
  "#607D8B"
  // Blue Grey
];
const STATUS_OPACITY = {
  scheduled: 0.75,
  confirmed: 1,
  checked_in: 0.9,
  in_progress: 1,
  completed: 0.45,
  cancelled: 0.25,
  no_show: 0.25,
  rescheduled: 0.7
};
const DEFAULT_STATUS_OPACITY = 0.85;
function getDefaultStylistColor(stylistId) {
  if (!stylistId) return STYLIST_CALENDAR_COLORS[0];
  const hash = stylistId.replace(/-/g, "").slice(0, 8).split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return STYLIST_CALENDAR_COLORS[hash % STYLIST_CALENDAR_COLORS.length];
}
function StylistColorPicker({ value, onChange }) {
  const inputRef = reactExports.useRef(null);
  const [customColor, setCustomColor] = reactExports.useState(value || "#000000");
  const isCustom = value && !STYLIST_CALENDAR_COLORS.includes(value.toUpperCase()) && !STYLIST_CALENDAR_COLORS.includes(value);
  const handlePresetChange = reactExports.useCallback(
    (color) => {
      onChange?.(color);
    },
    [onChange]
  );
  const handleCustomClick = () => {
    inputRef.current?.click();
  };
  const handleCustomChange = (e) => {
    const hex = e.target.value;
    setCustomColor(hex);
    onChange?.(hex);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary", mb: 1, display: "block" }, children: "Calendar Color" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ColorPicker,
        {
          value: isCustom ? "" : value || "",
          onChange: handlePresetChange,
          options: STYLIST_CALENDAR_COLORS,
          size: 28,
          variant: "circular"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Custom color", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          onClick: handleCustomClick,
          sx: {
            width: 28,
            height: 28,
            borderRadius: "50%",
            cursor: "pointer",
            border: "2px solid",
            borderColor: isCustom ? "primary.main" : "divider",
            bgcolor: isCustom ? value : "background.neutral",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "border-color 0.2s",
            "&:hover": { borderColor: "text.primary" }
          },
          children: !isCustom && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              sx: {
                fontSize: "0.8rem",
                lineHeight: 1,
                color: "text.secondary",
                userSelect: "none"
              },
              children: "+"
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: inputRef,
        type: "color",
        value: customColor,
        onChange: handleCustomChange,
        style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
        tabIndex: -1
      }
    )
  ] });
}
export {
  ColorPicker as C,
  DEFAULT_STATUS_OPACITY as D,
  StylistColorPicker as S,
  STATUS_OPACITY as a,
  STYLIST_CALENDAR_COLORS as b,
  getDefaultStylistColor as g
};
