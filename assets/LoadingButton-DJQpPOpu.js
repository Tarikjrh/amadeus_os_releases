import { r as reactExports, j as jsxRuntimeExports, d as Button } from "./index-B08HRm4A.js";
let warnedOnce = false;
const warn = () => {
  if (!warnedOnce) {
    console.warn(["MUI: The LoadingButton component functionality is now part of the Button component from Material UI.", "", "You should use `import Button from '@mui/material/Button'`", "or `import { Button } from '@mui/material'`"].join("\n"));
    warnedOnce = true;
  }
};
const LoadingButton = /* @__PURE__ */ reactExports.forwardRef(function DeprecatedLoadingButton(props, ref) {
  warn();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
    ref,
    ...props
  });
});
export {
  LoadingButton as L
};
