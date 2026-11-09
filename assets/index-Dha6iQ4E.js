import { j as jsxRuntimeExports, L as Label, a as Iconify } from "./index-B08HRm4A.js";
function ClientImportanceLabel({ clientImportance, sx }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label,
    {
      sx: {
        textDecoration: "none !important",
        // fontSize: 12,
        fontWeight: "700",
        height: 20,
        minWidth: 20,
        px: 0.5,
        ...sx
      },
      startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:star-bold-duotone", height: 12 }),
      variant: "filled",
      color: "warning",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "700", textDecoration: "none !important" }, children: clientImportance > 1 && clientImportance })
    }
  );
}
export {
  ClientImportanceLabel as C
};
