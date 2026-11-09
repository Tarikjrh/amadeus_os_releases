import { j as jsxRuntimeExports, q as styled, d as Button, a as Iconify } from "./index-B08HRm4A.js";
function FiltersBlock({ label, children, isShow, sx, ...other }) {
  if (!isShow) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BlockRoot, { sx, ...other, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlockLabel, { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlockContent, { children })
  ] });
}
const BlockRoot = styled("div")(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  border: `dashed 1px ${theme.vars.palette.divider}`
}));
const BlockLabel = styled("span")(({ theme }) => ({
  height: 24,
  lineHeight: "24px",
  fontSize: theme.typography.subtitle2.fontSize,
  fontWeight: theme.typography.subtitle2.fontWeight
}));
const BlockContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1)
}));
const chipProps = { size: "small", variant: "soft" };
function FiltersResult({ sx, onReset, children, totalResults, ...other }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ResultRoot, { sx, ...other, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ResultLabel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: totalResults }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " results found" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ResultContent, { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "error",
          onClick: onReset,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }),
          children: "Clear"
        }
      )
    ] })
  ] });
}
const ResultRoot = styled("div")``;
const ResultLabel = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  marginBottom: theme.spacing(1.5),
  "& span": { color: theme.vars.palette.text.secondary }
}));
const ResultContent = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: theme.spacing(1)
}));
export {
  FiltersResult as F,
  FiltersBlock as a,
  chipProps as c
};
