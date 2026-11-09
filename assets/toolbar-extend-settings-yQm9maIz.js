import { J as it, D as Me, r as reactExports, j as jsxRuntimeExports, T as Tooltip, a as Iconify, H as Menu, M as MenuItem, K as Divider, N as svgIconClasses, O as DensityCompactIcon, P as DensityStandardIcon, Q as DensityComfortableIcon, R as EyeIcon, W as EyeCloseIcon } from "./index-B08HRm4A.js";
import { T as ToolbarButtonBase } from "./toolbar-core-DGb1HZrD.js";
const DATAGRID_SETTINGS_KEY = "datagrid-settings";
const DEFAULT_DATAGRID_SETTINGS = {
  density: "standard",
  showCellVerticalBorder: false,
  showColumnVerticalBorder: false
};
function useToolbarSettings(initialSettings) {
  const { state: settings, setState: setSettings } = it(DATAGRID_SETTINGS_KEY, {
    ...DEFAULT_DATAGRID_SETTINGS,
    ...initialSettings
  });
  return {
    settings,
    onChangeSettings: setSettings
  };
}
const GRID_DENSITY_OPTIONS = [
  { label: "Compact density", value: "compact", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DensityCompactIcon, {}) },
  { label: "Standard density", value: "standard", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DensityStandardIcon, {}) },
  {
    label: "Comfortable density",
    value: "comfortable",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DensityComfortableIcon, {})
  }
];
function CustomToolbarSettingsButton({
  settings,
  onChangeSettings,
  showLabel,
  label = "Settings"
}) {
  const { open, anchorEl, onClose, onOpen } = Me();
  const handleChangeDensity = reactExports.useCallback(
    (value) => {
      onChangeSettings({ ...settings, density: value });
    },
    [onChangeSettings, settings]
  );
  const handleToggleSetting = reactExports.useCallback(
    (key) => {
      onChangeSettings({ ...settings, [key]: !settings[key] });
    },
    [onChangeSettings, settings]
  );
  const renderToggleOption = (menuItemLabel, key) => {
    const selected = settings[key];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { selected, onClick: () => handleToggleSetting(key), children: [
      selected ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeCloseIcon, {}),
      menuItemLabel
    ] }, key);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: label, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButtonBase,
      {
        id: "settings-menu-trigger",
        "aria-controls": "settings-menu",
        "aria-haspopup": "true",
        "aria-expanded": open ? "true" : void 0,
        onClick: onOpen,
        label,
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:settings-bold" }),
        showLabel
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Menu,
      {
        id: "settings-menu",
        open,
        anchorEl,
        onClose,
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
        slotProps: {
          list: {
            "aria-labelledby": "settings-menu-trigger",
            sx: {
              [`& .${svgIconClasses.root}`]: {
                mr: 2,
                fontSize: 20
              }
            }
          }
        },
        children: [
          GRID_DENSITY_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            MenuItem,
            {
              selected: settings.density === option.value,
              onClick: () => handleChangeDensity(option.value),
              children: [
                option.icon,
                option.label
              ]
            },
            option.value
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          renderToggleOption("Show column borders", "showColumnVerticalBorder"),
          renderToggleOption("Show cell borders", "showCellVerticalBorder")
        ]
      }
    )
  ] });
}
export {
  CustomToolbarSettingsButton as C,
  useToolbarSettings as u
};
