import { j as jsxRuntimeExports, d as Button } from "./index-B08HRm4A.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
function ConfirmDialog({ open, title, action, content, onClose, ...other }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { fullWidth: true, maxWidth: "xs", open, onClose, ...other, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { sx: { pb: 2 }, children: title }),
    content && /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { sx: { typography: "body2" }, children: [
      " ",
      content
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      action,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", color: "inherit", onClick: onClose, children: "Cancel" })
    ] })
  ] });
}
export {
  ConfirmDialog as C
};
