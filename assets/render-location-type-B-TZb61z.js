import { j as jsxRuntimeExports, L as Label, a as Iconify } from "./index-B08HRm4A.js";
const LOCATION_TYPE_ICON = {
  branch: "duo-icons:location",
  warehouse: "solar:box-bold-duotone"
};
const renderLocationType = (locationType) => {
  if (locationType === "branch")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "info", startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: LOCATION_TYPE_ICON.branch }), children: "Branch" });
  if (locationType === "warehouse")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Label,
      {
        variant: "soft",
        color: "success",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: LOCATION_TYPE_ICON.warehouse }),
        children: "Warehouse"
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", children: "-" });
};
const renderLocationNameWithIcon = (location) => {
  if (!location) return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", children: "-" });
  const { location_type, name } = location;
  if (location_type === "branch")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "info", startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: LOCATION_TYPE_ICON.branch }), children: name });
  if (location_type === "warehouse")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Label,
      {
        variant: "soft",
        color: "success",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: LOCATION_TYPE_ICON.warehouse }),
        children: name
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", children: name });
};
export {
  LOCATION_TYPE_ICON as L,
  renderLocationNameWithIcon as a,
  renderLocationType as r
};
