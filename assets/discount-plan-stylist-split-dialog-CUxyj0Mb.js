import { j as jsxRuntimeExports, S as Stack, a as Iconify, c as Typography, I as IconButton, B as Box, L as Label, a0 as fCurrency, a1 as LinearProgress, K as Divider, b as CircularProgress } from "./index-B08HRm4A.js";
import { useGetServicesByIds } from "./package-service-U57UHzc2.js";
import { u as useGetDiscountPlanUsages } from "./discount-plan-service-DWSzNOBf.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { D as Dialog, a as DialogContent } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
function formatMonth(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleString("en-US", { month: "long", year: "numeric" });
}
function DiscountPlanStylistSplitDialog({ open, onClose, clientPlan }) {
  const { usages, usagesLoading } = useGetDiscountPlanUsages(clientPlan?.id);
  const tpl = clientPlan?.discount_plan_templates;
  const client = clientPlan?.client_profiles;
  const serviceMaxUses = tpl?.service_max_uses ?? {};
  const limitServiceIds = Object.keys(serviceMaxUses);
  const { services: limitServices } = useGetServicesByIds(limitServiceIds);
  const limitServiceNameMap = Object.fromEntries(limitServices.map((s) => [s.id, s.name]));
  const stylistMap = {};
  (usages || []).forEach((u) => {
    const key = u.stylist_id || "unassigned";
    if (!stylistMap[key]) {
      stylistMap[key] = {
        name: u.stylist_name || "Unassigned",
        usages: [],
        totalOriginalValue: 0,
        totalDiscount: 0
      };
    }
    stylistMap[key].usages.push(u);
    stylistMap[key].totalOriginalValue += Number(u.original_service_price ?? 0);
    stylistMap[key].totalDiscount += Number(u.discount_amount ?? 0);
  });
  const serviceMap = {};
  (usages || []).forEach((u) => {
    const key = u.service_id || u.service_name || "unknown";
    if (!serviceMap[key]) {
      serviceMap[key] = { service_id: u.service_id, name: u.service_name || "—", count: 0 };
    }
    serviceMap[key].count += 1;
  });
  Object.keys(serviceMaxUses).forEach((svcId) => {
    if (!serviceMap[svcId]) {
      serviceMap[svcId] = { service_id: svcId, name: limitServiceNameMap[svcId] ?? null, count: 0 };
    }
  });
  const serviceRows = Object.values(serviceMap);
  const stylistRows = Object.values(stylistMap);
  const totalVisits = usages?.length ?? 0;
  const totalDiscount = (usages || []).reduce((sum, u) => sum + Number(u.discount_amount ?? 0), 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Iconify,
          {
            icon: "solar:users-group-rounded-bold-duotone",
            width: 24,
            color: "primary.main"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Plan Usage Report" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { dividers: true, sx: { pt: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            p: 2,
            mb: 3,
            borderRadius: 1.5,
            bgcolor: "background.neutral",
            border: "1px solid",
            borderColor: "divider"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: tpl?.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
                clientPlan?.is_commission_finalized && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "success", children: "Finalized" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "primary", children: formatMonth(clientPlan?.valid_month) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 3, flexWrap: "wrap", useFlexGap: true, children: [
              client && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Client" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
                  client.first_name,
                  " ",
                  client.last_name
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Plan price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(clientPlan?.price_paid) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Total uses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: totalVisits })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Total discount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "error.main", children: [
                  "-",
                  fCurrency(totalDiscount)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: clientPlan?.status === "active" ? "success" : "default", children: clientPlan?.status })
              ] })
            ] })
          ]
        }
      ),
      !usagesLoading && serviceRows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: "Service Usage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, children: serviceRows.map((svc) => {
          const svcMax = serviceMaxUses[svc.service_id] ?? null;
          const svcRemaining = svcMax !== null ? Math.max(0, svcMax - svc.count) : null;
          const pct = svcMax ? Math.min(svc.count / svcMax * 100, 100) : null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              sx: { p: 1.5, borderRadius: 1.5, border: "1px solid", borderColor: "divider" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    sx: { mb: 1 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 500, children: svc.name ?? "Unlisted service" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: svcMax !== null ? `${svc.count} / ${svcMax}` : `${svc.count} used` }),
                        svcMax === null ? /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "info", sx: { fontSize: 10 }, children: "unlimited" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            variant: "soft",
                            color: svcRemaining === 0 ? "error" : "success",
                            sx: { fontSize: 10 },
                            children: [
                              svcRemaining,
                              " left"
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                pct !== null ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LinearProgress,
                  {
                    variant: "determinate",
                    value: pct,
                    color: svc.count >= svcMax ? "error" : "primary",
                    sx: { height: 6, borderRadius: 1 }
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      height: 6,
                      borderRadius: 1,
                      opacity: 0.55,
                      background: "linear-gradient(90deg,#f87171,#fb923c,#facc15,#4ade80,#60a5fa,#a78bfa,#f87171)",
                      backgroundSize: "300% 100%",
                      "@keyframes rainbow": {
                        "0%": { backgroundPosition: "0% 50%" },
                        "100%": { backgroundPosition: "300% 50%" }
                      },
                      animation: "rainbow 4s linear infinite"
                    }
                  }
                )
              ]
            },
            svc.service_id || svc.name
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { mb: 3 } }),
      usagesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 28 }) }) : stylistRows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No usages yet", sx: { py: 4 } }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Stylist Breakdown" }),
        stylistRows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              p: 1.5,
              borderRadius: 1.5,
              border: "1px solid",
              borderColor: "divider"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Stack,
                {
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  sx: { mb: 1 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: row.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Services value" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(row.totalOriginalValue) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Discount given" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "error.main", children: [
                          "-",
                          fCurrency(row.totalDiscount)
                        ] })
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0.5, children: row.usages.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Stack,
                {
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  sx: { pl: 1 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: u.service_name || "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.5, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: fCurrency(u.original_service_price) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { variant: "soft", color: "info", sx: { fontSize: 10 }, children: [
                        "-",
                        u.discount_percent,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: new Date(u.created_at).toLocaleDateString() })
                    ] })
                  ]
                },
                u.id
              )) })
            ]
          },
          row.name
        ))
      ] })
    ] })
  ] });
}
export {
  DiscountPlanStylistSplitDialog as D
};
