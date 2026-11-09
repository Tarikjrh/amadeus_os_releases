import { r as reactExports, j as jsxRuntimeExports, cv as SvgIcon, B as Box, c as Typography, Y as Link, Z as RouterLink, a as Iconify, bo as useRouter, E as Ee, av as useAuthContext, cw as signInWithPassword, ax as Alert, a3 as paths, I as IconButton, d as Button, cx as resetPassword, cy as updatePassword } from "./index-B08HRm4A.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { s as schemaUtils } from "./schema-utils-CG9_JlGr.js";
import "./permissions-JWaLVC41.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { o as object, s as string } from "./schemas-BVeYYbTr.js";
function PasswordIcon({ sx, ...other }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SvgIcon,
    {
      fill: "none",
      viewBox: "0 0 96 96",
      xmlns: "http://www.w3.org/2000/svg",
      sx: [
        (theme) => ({
          "--primary-main": theme.vars.palette.primary.main,
          "--warning-light": theme.vars.palette.warning.light,
          width: 96,
          flexShrink: 0,
          height: "auto"
        }),
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...other,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "var(--warning-light)",
            d: "M36.324 29.4v7.76a4.803 4.803 0 11-9.606 0V29.4c0-11.677 9.405-21.198 21.037-21.388l.353-.002c11.678 0 21.199 9.405 21.388 21.037l.003.353v7.76a4.803 4.803 0 11-9.606 0V29.4c0-6.433-5.181-11.678-11.59-11.783l-.194-.001c-6.499 0-11.785 5.286-11.785 11.784z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { style: { mixBlendMode: "overlay" }, filter: "url(#filter0_i_1870_135517)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "#fff",
            fillOpacity: "0.04",
            d: "M36.324 29.4v12.563h-9.606V29.4c0-11.677 9.405-21.198 21.037-21.388l.353-.002c11.678 0 21.199 9.405 21.388 21.037l.003.353v12.563h-9.606V29.4c0-6.433-5.181-11.678-11.59-11.783l-.194-.001c-6.499 0-11.785 5.286-11.785 11.784z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "var(--primary-main)",
            fillRule: "evenodd",
            d: "M79.217 68.137c0 10.978-8.9 19.877-19.877 19.877H36.877C25.9 88.014 17 79.115 17 68.138v-20.25a8.277 8.277 0 018.277-8.277H70.94a8.277 8.277 0 018.277 8.277v20.25zM44.51 66.872a3.598 3.598 0 003.598 3.598H49.5a2.206 2.206 0 002.206-2.206c0-.91.57-1.705 1.358-2.158a9.932 9.932 0 002.254-1.767 9.865 9.865 0 002.715-7.369c-.268-5.176-4.538-9.312-9.724-9.417h-.064l-.134.001h-.004c-4.643 0-9.152 3.578-9.848 8.557-.071.545.367 1.003.916 1.003h6.204a.01.01 0 00.009-.01c.026-.187.07-.367.132-.54l.02-.056.031-.079.028-.064a2.71 2.71 0 01.935-1.128l.07-.047.06-.038.044-.026.048-.028a2.81 2.81 0 01.215-.108l.087-.038c.045-.018.09-.035.136-.05l.06-.02a2.787 2.787 0 01.351-.089l.057-.01.058-.008.067-.009.128-.011.061-.004.063-.002h.068l.002.002.056-.002c1.406.029 2.61 1.19 2.682 2.595a2.735 2.735 0 01-.748 2.04l-.049.049-.06.057a2.723 2.723 0 01-1.806.746l-.076.001h-.676a2.922 2.922 0 00-2.922 2.922v3.713zm3.598 6.113a3.545 3.545 0 00-.001 7.088h.064a3.544 3.544 0 00-.063-7.088z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { style: { mixBlendMode: "overlay" }, filter: "url(#filter1_i_1870_135517)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "#fff",
            fillOpacity: "0.04",
            fillRule: "evenodd",
            d: "M79.217 68.137c0 10.978-8.9 19.877-19.877 19.877H36.877C25.9 88.014 17 79.115 17 68.138v-20.25a8.277 8.277 0 018.277-8.277H70.94a8.277 8.277 0 018.277 8.277v20.25zM44.51 66.872a3.598 3.598 0 003.598 3.598H49.5a2.206 2.206 0 002.206-2.206c0-.91.57-1.705 1.358-2.158a9.932 9.932 0 002.254-1.767 9.865 9.865 0 002.715-7.369c-.268-5.176-4.538-9.312-9.724-9.417h-.064l-.134.001h-.004c-4.643 0-9.152 3.578-9.848 8.557-.071.545.367 1.003.916 1.003h6.204a.01.01 0 00.009-.01c.026-.187.07-.367.132-.54l.02-.056.031-.079.028-.064a2.71 2.71 0 01.935-1.128l.07-.047.06-.038.044-.026.048-.028a2.81 2.81 0 01.215-.108l.087-.038c.045-.018.09-.035.136-.05l.06-.02a2.787 2.787 0 01.351-.089l.057-.01.058-.008.067-.009.128-.011.061-.004.063-.002h.068l.002.002.056-.002c1.406.029 2.61 1.19 2.682 2.595a2.735 2.735 0 01-.748 2.04l-.049.049-.06.057a2.723 2.723 0 01-1.806.746l-.076.001h-.676a2.922 2.922 0 00-2.922 2.922v3.713zm3.598 6.113a3.545 3.545 0 00-.001 7.088h.064a3.544 3.544 0 00-.063-7.088z",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M48.109 70.456a3.598 3.598 0 01-3.598-3.599v-3.712a2.922 2.922 0 012.922-2.922h.676l.075-.001a2.723 2.723 0 001.808-.746l.06-.058.048-.05a2.735 2.735 0 00.748-2.038c-.072-1.406-1.276-2.567-2.681-2.595l-.057.001h-.001l-.001-.002h-.069l-.062.003-.061.003a2.816 2.816 0 00-.128.012l-.067.008-.058.01-.057.009a2.79 2.79 0 00-.352.088l-.059.02a2.838 2.838 0 00-.136.051l-.087.037.02-.009a2.81 2.81 0 00-.235.117l-.048.028-.044.026-.06.038-.07.047a2.708 2.708 0 00-.935 1.13l-.028.063-.03.079-.021.056a2.764 2.764 0 00-.132.54.01.01 0 01-.01.01h-6.203c-.55 0-.987-.459-.916-1.003.696-4.98 5.205-8.558 9.848-8.558h.202c5.186.105 9.456 4.24 9.724 9.417a9.865 9.865 0 01-2.715 7.368 9.932 9.932 0 01-2.254 1.768c-.788.452-1.358 1.249-1.358 2.157a2.206 2.206 0 01-2.206 2.207h-1.392zm0 2.514a3.544 3.544 0 01.063 7.088h-.064a3.545 3.545 0 010-7.088z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "filter0_i_1870_135517",
              width: "44.781",
              height: "35.953",
              x: "24.718",
              y: "6.01",
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dx: "-2", dy: "-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in2: "hardAlpha", k2: "-1", k3: "1", operator: "arithmetic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in2: "shape", result: "effect1_innerShadow_1870_135517" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "filter1_i_1870_135517",
              width: "64.217",
              height: "50.404",
              x: "15",
              y: "37.61",
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dx: "-2", dy: "-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in2: "hardAlpha", k2: "-1", k3: "1", operator: "arithmetic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in2: "shape", result: "effect1_innerShadow_1870_135517" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const PasswordIcon$1 = reactExports.memo(PasswordIcon);
function EmailInboxIcon({ sx, ...other }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SvgIcon,
    {
      fill: "none",
      viewBox: "0 0 96 96",
      xmlns: "http://www.w3.org/2000/svg",
      sx: [
        (theme) => ({
          "--primary-main": theme.vars.palette.primary.main,
          "--warning-light": theme.vars.palette.warning.light,
          "--warning-dark": theme.vars.palette.warning.dark,
          width: 96,
          flexShrink: 0,
          height: "auto"
        }),
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...other,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#filter0_di_1870_133886)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "var(--warning-light)",
            fillRule: "evenodd",
            d: "M16 20.01v19.82c0 2.618 1.272 5.067 3.463 6.502C26.233 50.768 41.16 60.01 48 60.01s21.767-9.242 28.537-13.678C78.727 44.897 80 42.448 80 39.83V20.01c0-6.628-5.373-12-12-12H28c-6.627 0-12 5.372-12 12zm15 0a3 3 0 000 6h18a3 3 0 000-6H31zm0 14a3 3 0 000 6h30a3 3 0 000-6H31z",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { style: { mixBlendMode: "overlay" }, filter: "url(#filter1_i_1870_133886)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "#fff",
            fillOpacity: "0.04",
            fillRule: "evenodd",
            d: "M16 20.01v19.82c0 2.618 1.272 5.067 3.463 6.502C26.233 50.768 41.16 60.01 48 60.01s21.767-9.242 28.537-13.678C78.727 44.897 80 42.448 80 39.83V20.01c0-6.628-5.373-12-12-12H28c-6.627 0-12 5.372-12 12zm15 0a3 3 0 000 6h18a3 3 0 000-6H31zm0 14a3 3 0 000 6h30a3 3 0 000-6H31z",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "var(--warning-dark)",
            d: "M28 23.01a3 3 0 013-3h18a3 3 0 010 6H31a3 3 0 01-3-3zM28 37.01a3 3 0 013-3h30a3 3 0 010 6H31a3 3 0 01-3-3z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "var(--primary-main)",
            d: "M16 25.014a266.095 266.095 0 00-5.284 4.026c-2.408 1.883-3.918 4.66-4.121 7.71C6.317 40.9 6 47.868 6 58.01c0 9.591.568 16.343 1.098 20.558.438 3.476 2.765 6.232 6.196 6.94 5.5 1.136 16.005 2.502 34.706 2.502 18.701 0 29.206-1.366 34.706-2.502 3.431-.708 5.758-3.464 6.196-6.94C89.432 74.353 90 67.601 90 58.01c0-10.142-.317-17.11-.595-21.26-.203-3.05-1.713-5.827-4.12-7.71A266.095 266.095 0 0080 25.014V39.83c0 2.619-1.272 5.067-3.463 6.502C69.767 50.768 54.84 60.01 48 60.01s-21.767-9.242-28.537-13.678C17.273 44.897 16 42.45 16 39.83V25.014z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { style: { mixBlendMode: "overlay" }, filter: "url(#filter2_i_1870_133886)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "#fff",
            fillOpacity: "0.04",
            d: "M16 25.014a266.095 266.095 0 00-5.284 4.026c-2.408 1.883-3.918 4.66-4.121 7.71C6.317 40.9 6 47.868 6 58.01c0 9.591.568 16.343 1.098 20.558.438 3.476 2.765 6.232 6.196 6.94 5.5 1.136 16.005 2.502 34.706 2.502 18.701 0 29.206-1.366 34.706-2.502 3.431-.708 5.758-3.464 6.196-6.94C89.432 74.353 90 67.601 90 58.01c0-10.142-.317-17.11-.595-21.26-.203-3.05-1.713-5.827-4.12-7.71A266.095 266.095 0 0080 25.014V39.83c0 2.619-1.272 5.067-3.463 6.502C69.767 50.768 54.84 60.01 48 60.01s-21.767-9.242-28.537-13.678C17.273 44.897 16 42.45 16 39.83V25.014z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "filter0_di_1870_133886",
              width: "80",
              height: "68",
              x: "12",
              y: "4.01",
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dx: "4", dy: "4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.717647 0 0 0 0 0.431373 0 0 0 0 0 0 0 0 0.16 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_1870_133886" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_1870_133886", result: "shape" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dx: "-1", dy: "-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in2: "hardAlpha", k2: "-1", k3: "1", operator: "arithmetic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.717647 0 0 0 0 0.431373 0 0 0 0 0 0 0 0 0.48 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in2: "shape", result: "effect2_innerShadow_1870_133886" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "filter1_i_1870_133886",
              width: "66",
              height: "54",
              x: "14",
              y: "6.01",
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dx: "-2", dy: "-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in2: "hardAlpha", k2: "-1", k3: "1", operator: "arithmetic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in2: "shape", result: "effect1_innerShadow_1870_133886" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "filter2_i_1870_133886",
              width: "86",
              height: "64.996",
              x: "4",
              y: "23.014",
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dx: "-2", dy: "-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in2: "hardAlpha", k2: "-1", k3: "1", operator: "arithmetic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in2: "shape", result: "effect1_innerShadow_1870_133886" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const EmailInboxIcon$1 = reactExports.memo(EmailInboxIcon);
function NewPasswordIcon({ sx, ...other }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SvgIcon,
    {
      fill: "none",
      viewBox: "0 0 96 96",
      xmlns: "http://www.w3.org/2000/svg",
      sx: [
        (theme) => ({
          "--primary-main": theme.vars.palette.primary.main,
          "--warning-light": theme.vars.palette.warning.light,
          "--warning-dark": theme.vars.palette.warning.dark,
          width: 96,
          flexShrink: 0,
          height: "auto"
        }),
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...other,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "24", y: "55", width: "48", height: "17", fill: "var(--warning-light)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M36.3238 29.3905V37.1505C36.3238 39.8031 34.1734 41.9535 31.5208 41.9535V41.9535C28.8682 41.9535 26.7178 39.8031 26.7178 37.1505V29.3905C26.7178 17.7136 36.1226 8.19195 47.7552 8.00268L48.1085 8C59.7856 8 69.3069 17.4049 69.4962 29.0373L69.499 29.3905V37.1505C69.499 39.8031 67.3487 41.9535 64.6961 41.9535V41.9535C62.0434 41.9535 59.8931 39.8031 59.8931 37.1505V29.3905C59.8931 22.9575 54.7117 17.7118 48.3031 17.6075L48.1085 17.6059C41.6103 17.6059 36.3238 22.8925 36.3238 29.3905Z",
            fill: "var(--warning-light)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M59.3399 88.4046C70.3177 88.4046 79.2169 79.5054 79.2169 68.5274V48.2768C79.2169 43.7056 75.5113 40 70.94 40L48.1085 40.0006L48.1075 40H25.2769C20.7056 40 17 43.7056 17 48.2768V68.5274C17 79.5054 25.8992 88.4046 36.8771 88.4046H59.3399ZM68.1234 55.2323H28.0111C26.5342 55.2323 25.3369 56.4296 25.3369 57.9065V68.6031C25.3369 70.08 26.5342 71.2772 28.0111 71.2772H68.1234C69.6003 71.2772 70.7975 70.08 70.7975 68.6031V57.9065C70.7975 56.4296 69.6003 55.2323 68.1234 55.2323Z",
            fill: "var(--primary-main)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M38.6331 60.2637L39.6524 61.737L36.9006 63.6408L39.6524 65.5448L38.6331 67.0182L36.2221 65.3502V68.2818H34.4304V65.3502L32.0193 67.0182L31 65.5448L33.7515 63.6408L31 61.737L32.0193 60.2637L34.4304 61.9316V59H36.2221V61.9316L38.6331 60.2637Z",
            fill: "var(--warning-dark)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M51.6888 60.2637L52.7085 61.737L49.9567 63.6408L52.7085 65.5448L51.6888 67.0182L49.278 65.3502V68.2818H47.4862V65.3502L45.0754 67.0182L44.0557 65.5448L46.8075 63.6408L44.0557 61.737L45.0754 60.2637L47.4862 61.9316V59H49.278V61.9316L51.6888 60.2637Z",
            fill: "var(--warning-dark)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M65.764 61.737L64.7445 60.2637L62.3336 61.9316V59H60.5419V61.9316L58.1309 60.2637L57.1115 61.737L59.8632 63.6408L57.1115 65.5448L58.1309 67.0182L60.5419 65.3502V68.2818H62.3336V65.3502L64.7445 67.0182L65.764 65.5448L63.0123 63.6408L65.764 61.737Z",
            fill: "var(--warning-dark)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { style: { mixBlendMode: "overlay" }, filter: "url(#filter0_i_3223_38505)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M36.3238 29.3905V41.9535H26.7178V29.3905C26.7178 17.7136 36.1226 8.19195 47.7552 8.00268L48.1085 8C59.7856 8 69.3069 17.4049 69.4962 29.0373L69.499 29.3905V41.9535H59.8931V29.3905C59.8931 22.9575 54.7117 17.7118 48.3031 17.6075L48.1085 17.6059C41.6103 17.6059 36.3238 22.8925 36.3238 29.3905Z",
              fill: "white",
              fillOpacity: "0.08"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M59.3399 88.4046C70.3177 88.4046 79.2169 79.5054 79.2169 68.5274V48.2768C79.2169 43.7056 75.5113 40 70.94 40L48.1085 40.0006L48.1075 40H25.2769C20.7056 40 17 43.7056 17 48.2768V68.5274C17 79.5054 25.8992 88.4046 36.8771 88.4046H59.3399ZM68.1234 55.2323H28.0111C26.5342 55.2323 25.3369 56.4296 25.3369 57.9065V68.6031C25.3369 70.08 26.5342 71.2772 28.0111 71.2772H68.1234C69.6003 71.2772 70.7975 70.08 70.7975 68.6031V57.9065C70.7975 56.4296 69.6003 55.2323 68.1234 55.2323Z",
              fill: "white",
              fillOpacity: "0.08"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M38.6331 60.2637L39.6524 61.737L36.9006 63.6408L39.6524 65.5448L38.6331 67.0182L36.2221 65.3502V68.2818H34.4304V65.3502L32.0193 67.0182L31 65.5448L33.7515 63.6408L31 61.737L32.0193 60.2637L34.4304 61.9316V59H36.2221V61.9316L38.6331 60.2637Z",
              fill: "white",
              fillOpacity: "0.08"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M51.6888 60.2637L52.7085 61.737L49.9567 63.6408L52.7085 65.5448L51.6888 67.0182L49.278 65.3502V68.2818H47.4862V65.3502L45.0754 67.0182L44.0557 65.5448L46.8075 63.6408L44.0557 61.737L45.0754 60.2637L47.4862 61.9316V59H49.278V61.9316L51.6888 60.2637Z",
              fill: "white",
              fillOpacity: "0.08"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M65.764 61.737L64.7445 60.2637L62.3336 61.9316V59H60.5419V61.9316L58.1309 60.2637L57.1115 61.737L59.8632 63.6408L57.1115 65.5448L58.1309 67.0182L60.5419 65.3502V68.2818H62.3336V65.3502L64.7445 67.0182L65.764 65.5448L63.0123 63.6408L65.764 61.737Z",
              fill: "white",
              fillOpacity: "0.08"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "filter",
          {
            id: "filter0_i_3223_38505",
            x: "15",
            y: "6",
            width: "64.2168",
            height: "82.4045",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "feColorMatrix",
                {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dx: "-2", dy: "-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_3223_38505" })
            ]
          }
        ) })
      ]
    }
  );
}
const NewPasswordIcon$1 = reactExports.memo(NewPasswordIcon);
function FormHead({ sx, icon, title, description, ...other }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", sx: { mb: 3, mx: "auto", display: "inline-flex" }, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: [
          () => ({
            mb: 5,
            gap: 1.5,
            display: "flex",
            textAlign: "center",
            whiteSpace: "pre-line",
            flexDirection: "column"
          }),
          ...Array.isArray(sx) ? sx : [sx]
        ],
        ...other,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: description })
        ]
      }
    )
  ] });
}
function FormReturnLink({ sx, href, label, icon, children, ...other }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      component: RouterLink,
      href,
      color: "inherit",
      variant: "subtitle2",
      sx: [
        {
          mt: 3,
          gap: 0.5,
          mx: "auto",
          alignItems: "center",
          display: "inline-flex"
        },
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...other,
      children: [
        icon || /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 16, icon: "eva:arrow-ios-back-fill" }),
        label || "Return to sign in",
        children
      ]
    }
  );
}
function getErrorMessage(error) {
  if (error instanceof Error) {
    return error.message || error.name || "An error occurred";
  }
  if (typeof error === "string") {
    return error;
  }
  if (typeof error === "object" && error !== null) {
    const errorMessage = error.message;
    if (typeof errorMessage === "string") {
      return errorMessage;
    }
  }
  return `Unknown error: ${error}`;
}
const SignInSchema = object({
  email: schemaUtils.email(),
  password: string().min(1, { error: "Password is required!" }).min(6, { error: "Password must be at least 6 characters!" })
});
function SupabaseSignInView() {
  const router = useRouter();
  const showPassword = Ee();
  const { checkUserSession } = useAuthContext();
  const [errorMessage, setErrorMessage] = reactExports.useState(null);
  const defaultValues = {
    email: "",
    password: ""
  };
  const methods = useForm({
    resolver: u(SignInSchema),
    defaultValues
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    try {
      await signInWithPassword({ email: data.email, password: data.password });
      await checkUserSession?.();
      router.refresh();
    } catch (error) {
      console.error(error);
      const feedbackMessage = getErrorMessage(error);
      setErrorMessage(feedbackMessage);
    }
  });
  const renderForm = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { gap: 3, display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "email", label: "Email address", slotProps: { inputLabel: { shrink: true } } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { gap: 1.5, display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          component: RouterLink,
          href: paths.auth.supabase.resetPassword,
          variant: "body2",
          color: "inherit",
          sx: { alignSelf: "flex-end" },
          children: "Forgot password?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "password",
          label: "Password",
          placeholder: "6+ characters",
          type: showPassword.value ? "text" : "password",
          slotProps: {
            inputLabel: { shrink: true },
            input: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: showPassword.onToggle, edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Iconify,
                {
                  icon: showPassword.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                }
              ) }) })
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        fullWidth: true,
        color: "inherit",
        size: "large",
        type: "submit",
        variant: "contained",
        loading: isSubmitting,
        loadingIndicator: "Sign in...",
        children: "Sign in"
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormHead, { title: "Sign in to your account", sx: { textAlign: { xs: "center", md: "left" } } }),
    !!errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", sx: { mb: 3 }, children: errorMessage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, onSubmit, children: renderForm() })
  ] });
}
const ResetPasswordSchema = object({
  email: schemaUtils.email()
});
function SupabaseResetPasswordView() {
  const router = useRouter();
  const defaultValues = {
    email: ""
  };
  const methods = useForm({
    resolver: u(ResetPasswordSchema),
    defaultValues
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    try {
      await resetPassword({ email: data.email });
      router.push(paths.auth.supabase.verify);
    } catch (error) {
      console.error(error);
    }
  });
  const renderForm = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { gap: 3, display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        autoFocus: true,
        name: "email",
        label: "Email address",
        placeholder: "example@gmail.com",
        slotProps: { inputLabel: { shrink: true } }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        fullWidth: true,
        size: "large",
        type: "submit",
        variant: "contained",
        loading: isSubmitting,
        loadingIndicator: "Send request...",
        children: "Send request"
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormHead,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordIcon$1, {}),
        title: "Forgot your password?",
        description: `Please enter the email address associated with your account and we'll email you a link to reset your password.`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, onSubmit, children: renderForm() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormReturnLink, { href: paths.auth.supabase.signIn })
  ] });
}
const UpdatePasswordSchema = object({
  password: string().min(1, { error: "Password is required!" }).min(6, { error: "Password must be at least 6 characters!" }),
  confirmPassword: string().min(1, { error: "Confirm password is required!" })
}).refine((val) => val.password === val.confirmPassword, {
  error: "Passwords do not match!",
  path: ["confirmPassword"]
});
function SupabaseUpdatePasswordView() {
  const router = useRouter();
  const showPassword = Ee();
  const [errorMessage, setErrorMessage] = reactExports.useState(null);
  const defaultValues = {
    password: "",
    confirmPassword: ""
  };
  const methods = useForm({
    resolver: u(UpdatePasswordSchema),
    defaultValues
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    try {
      await updatePassword({ password: data.password });
      router.push(paths.dashboard.root);
    } catch (error) {
      console.error(error);
      const feedbackMessage = getErrorMessage(error);
      setErrorMessage(feedbackMessage);
    }
  });
  const renderForm = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { gap: 3, display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        name: "password",
        label: "Password",
        placeholder: "6+ characters",
        type: showPassword.value ? "text" : "password",
        slotProps: {
          inputLabel: { shrink: true },
          input: {
            endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: showPassword.onToggle, edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: showPassword.value ? "solar:eye-bold" : "solar:eye-closed-bold" }) }) })
          }
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        name: "confirmPassword",
        label: "Confirm password",
        type: showPassword.value ? "text" : "password",
        slotProps: {
          inputLabel: { shrink: true },
          input: {
            endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: showPassword.onToggle, edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: showPassword.value ? "solar:eye-bold" : "solar:eye-closed-bold" }) }) })
          }
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        fullWidth: true,
        type: "submit",
        size: "large",
        variant: "contained",
        loading: isSubmitting,
        loadingIndicator: "Update password...",
        children: "Update password"
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormHead,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(NewPasswordIcon$1, {}),
        title: "Update password",
        description: "Successful updates enable access using the new password."
      }
    ),
    !!errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", sx: { mb: 3 }, children: errorMessage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, onSubmit, children: renderForm() })
  ] });
}
export {
  EmailInboxIcon$1 as E,
  FormHead as F,
  SupabaseSignInView as S,
  SupabaseUpdatePasswordView as a,
  SupabaseResetPasswordView as b,
  FormReturnLink as c
};
