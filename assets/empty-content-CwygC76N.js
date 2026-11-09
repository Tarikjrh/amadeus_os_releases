import { j as jsxRuntimeExports, B as Box, C as CONFIG, c as Typography, q as styled, U } from "./index-B08HRm4A.js";
function EmptyContent({
  sx,
  imgUrl,
  action,
  filled,
  slotProps,
  description,
  title = "No data",
  ...other
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ContentRoot, { filled, sx, ...other, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        component: "img",
        alt: "Empty content",
        src: imgUrl ?? `${CONFIG.assetsDir}/assets/icons/empty/ic-content.svg`,
        ...slotProps?.img,
        sx: [
          {
            width: 1,
            maxWidth: 160
          },
          ...Array.isArray(slotProps?.img?.sx) ? slotProps.img.sx : [slotProps?.img?.sx]
        ]
      }
    ),
    title && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "h6",
        ...slotProps?.title,
        sx: [
          {
            mt: 1,
            textAlign: "center",
            color: "text.disabled"
          },
          ...Array.isArray(slotProps?.title?.sx) ? slotProps.title.sx : [slotProps?.title?.sx]
        ],
        children: title
      }
    ),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "body2",
        ...slotProps?.description,
        sx: [
          {
            my: 1,
            textAlign: "center",
            color: "text.disabled"
          },
          ...Array.isArray(slotProps?.description?.sx) ? slotProps.description.sx : [slotProps?.description?.sx]
        ],
        children: description
      }
    ),
    action && action
  ] });
}
const ContentRoot = styled("div", {
  shouldForwardProp: (prop) => !["filled", "sx"].includes(prop)
})(({ filled, theme }) => ({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(0, 3),
  ...filled && {
    borderRadius: Number(theme.shape.borderRadius) * 2,
    backgroundColor: U(theme.vars.palette.grey["500Channel"], 0.04),
    border: `dashed 1px ${U(theme.vars.palette.grey["500Channel"], 0.08)}`
  }
}));
export {
  EmptyContent as E
};
