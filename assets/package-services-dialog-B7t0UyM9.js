import { j as jsxRuntimeExports, S as Stack, a as Iconify, c as Typography, I as IconButton, b as CircularProgress, L as Label, a2 as Chip } from "./index-B08HRm4A.js";
import { useGetServicesByIds } from "./package-service-U57UHzc2.js";
import { D as Dialog, a as DialogContent } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
function PackageServicesDialog({ open, onClose, template }) {
  const serviceIds = template?.service_ids ?? [];
  const { services, servicesLoading } = useGetServicesByIds(open ? serviceIds : null);
  const isAllServices = serviceIds.length === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:list-bold-duotone", width: 24, color: "primary.main" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Included Services" }),
          template?.name && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: template.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, sx: { pt: 2 }, children: servicesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "center", sx: { py: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }) : isAllServices ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "center", spacing: 1, sx: { py: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "success", sx: { fontSize: 13 }, children: "Covers all services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "This package applies to every service in the catalogue." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", flexWrap: "wrap", gap: 1, sx: { py: 1 }, children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: s.name, size: "small", variant: "soft", color: "default" }, s.id)) }) })
  ] });
}
export {
  PackageServicesDialog as P
};
