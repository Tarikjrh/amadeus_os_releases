import { j as jsxRuntimeExports, x as Select, M as MenuItem, B as Box, a as Iconify } from "./index-B08HRm4A.js";
import { L as LOCATION_TYPE_ICON } from "./render-location-type-B-TZb61z.js";
import { F as FormControl, I as InputLabel } from "./TextField-CIuP940C.js";
function BranchSelect({
  branches = [],
  value,
  onChange,
  label = "Location",
  allLabel = "All Locations",
  showAllOption = true,
  size = "small",
  minWidth = 180,
  sx
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size, sx: { minWidth, ...sx }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value, label, onChange: (e) => onChange(e.target.value), children: [
      showAllOption && /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: allLabel }),
      branches.map((branch) => {
        const icon = LOCATION_TYPE_ICON[branch.location_type];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: branch.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1
            },
            children: [
              branch.name,
              icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 20, sx: { color: "text.secondary", flexShrink: 0 } })
            ]
          }
        ) }, branch.id);
      })
    ] })
  ] });
}
export {
  BranchSelect as B
};
