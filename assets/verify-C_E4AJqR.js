import { j as jsxRuntimeExports, a3 as paths, C as CONFIG } from "./index-B08HRm4A.js";
import { F as FormHead, E as EmailInboxIcon, c as FormReturnLink } from "./supabase-update-password-view-C9Y5iK2s.js";
import "./form-provider-u_wAFv-h.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./TextField-CIuP940C.js";
import "./with-selector-ClfCuV5M.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./InputAdornment-BqZyQBIE.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./Dialog-C5RfKkDi.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./schema-utils-CG9_JlGr.js";
import "./schemas-BVeYYbTr.js";
import "./permissions-JWaLVC41.js";
function SupabaseVerifyView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormHead,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(EmailInboxIcon, {}),
        title: "Please check your email!",
        description: `We've emailed a 6-digit confirmation code. 
Please enter the code in the box below to verify your email.`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormReturnLink, { href: paths.auth.supabase.signIn, sx: { mt: 0 } })
  ] });
}
const metadata = { title: `Verify | Supabase - ${CONFIG.appName}` };
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SupabaseVerifyView, {})
  ] });
}
export {
  Page as default
};
