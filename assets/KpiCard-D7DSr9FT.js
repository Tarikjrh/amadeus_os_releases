import { j as jsxRuntimeExports, y as Card, S as Stack, B as Box, c as Typography, a as Iconify } from "./index-B08HRm4A.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
function KpiCard({ label, value, icon, note, color, bgColor, loading }) {
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: "55%", height: 20, sx: { mb: 0.5 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: "40%", height: 40 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: "70%", height: 16, sx: { mt: 0.5 } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Skeleton,
        {
          variant: "rounded",
          width: 52,
          height: 52,
          sx: { borderRadius: 2, flexShrink: 0 }
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", gutterBottom: true, children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { color }, children: value }),
      note && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { mt: 0.5, display: "block" }, children: note })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          width: 52,
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          bgcolor: bgColor,
          flexShrink: 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 28, sx: { color } })
      }
    )
  ] }) });
}
function KpiCardGrid({
  cards = [],
  loading = false,
  skeletonCount,
  columns = { xs: 12, sm: 6, md: 4, lg: 3 },
  sx
}) {
  const count = skeletonCount ?? cards.length ?? 4;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 2.5, sx: { mb: 3, ...sx }, children: loading ? Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: columns, children: /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { loading: true }) }, i)) : cards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: columns, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    KpiCard,
    {
      label: card.label,
      value: card.value,
      icon: card.icon,
      note: card.note,
      color: card.color,
      bgColor: card.bgColor
    }
  ) }, card.label)) });
}
export {
  KpiCardGrid as K
};
