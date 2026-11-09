import { j as jsxRuntimeExports, a4 as DashboardContent, c as Typography, B as Box, U, C as CONFIG } from "./index-B08HRm4A.js";
function BlankView({ title = "Blank", description, sx }) {
  const renderContent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: [
        (theme) => ({
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          border: `dashed 1px ${theme.vars.palette.divider}`,
          bgcolor: U(theme.vars.palette.grey["500Channel"], 0.04)
        }),
        ...Array.isArray(sx) ? sx : [sx]
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { maxWidth: "xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h4", children: [
      " ",
      title,
      " "
    ] }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { sx: { mt: 1 }, children: [
      " ",
      description,
      " "
    ] }),
    renderContent()
  ] });
}
const metadata = { title: `Page two | Dashboard - ${CONFIG.appName}` };
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlankView, { title: "Page two" })
  ] });
}
export {
  Page as default
};
