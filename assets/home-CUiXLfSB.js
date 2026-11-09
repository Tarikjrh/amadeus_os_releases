import { u as useSWR, r as reactExports, s as supabase, bX as useTheme, a5 as alpha, U, j as jsxRuntimeExports, y as Card, K as Divider, c6 as fNumber, aI as fShortenNumber, ap as Tabs, aq as Tab, ar as Scrollbar, B as Box, L as Label, c as Typography, a0 as fCurrency, bo as useRouter, al as Avatar, a2 as Chip, T as Tooltip, a1 as LinearProgress, c7 as linearProgressClasses, a3 as paths, a6 as useUserBranches, a as Iconify, bn as RoleBasedGuard, a4 as DashboardContent, ao as CustomBreadcrumbs, an as fDate, S as Stack, C as CONFIG } from "./index-B08HRm4A.js";
import "./styles-Ddj8daWs.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { K as KpiCardGrid } from "./KpiCard-D7DSr9FT.js";
import { g as getPresetDates, D as DateRangeControls } from "./getPresetDates-BdaDk_3_.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { u as useChart, C as Chart, a as ChartLegends } from "./use-chart-7x0b6PVF.js";
import "./styles-BdIysWnF.js";
import { C as CardHeader } from "./CardHeader-DCwzSIO8.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { C as CardContent } from "./CardContent-tUS7qwlT.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
import "./TextField-CIuP940C.js";
import "./with-selector-ClfCuV5M.js";
import "./render-location-type-B-TZb61z.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./index-Di_Bgabu.js";
import "./InputAdornment-BqZyQBIE.js";
import "./Dialog-C5RfKkDi.js";
const swrOptions = {
  revalidateOnFocus: false,
  // dashboard is read-heavy; focus re-fetch is wasteful
  revalidateOnReconnect: true,
  dedupingInterval: 3e4,
  keepPreviousData: true
};
const aptSwrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 6e4,
  // 1-min dedup vs 30s for main stats
  refreshInterval: 6e4,
  // auto-refresh every minute
  keepPreviousData: true
};
function computeBucketStrategy(startDate, endDate) {
  const diffDays = (new Date(endDate) - new Date(startDate)) / 864e5;
  if (diffDays <= 2) return "hour";
  if (diffDays <= 60) return "day";
  if (diffDays <= 365) return "week";
  return "month";
}
function buildIncomeExpenseChart(incomeExpenseSeries, bucketStrategy, monthStart, monthEnd) {
  const periodStart = new Date(monthStart);
  const periodEnd = new Date(monthEnd);
  const diffDays = (periodEnd - periodStart) / 864e5;
  let categories;
  if (bucketStrategy === "hour") {
    categories = ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
  } else if (bucketStrategy === "day") {
    categories = [];
    const d = new Date(periodStart);
    while (d <= periodEnd) {
      categories.push(d.toLocaleDateString("en", { month: "short", day: "numeric" }));
      d.setDate(d.getDate() + 1);
    }
  } else if (bucketStrategy === "week") {
    const weekCount = Math.ceil(diffDays / 7);
    categories = Array.from({ length: weekCount }, (_, i) => `Wk ${i + 1}`);
  } else {
    categories = [];
    const d = new Date(periodStart.getFullYear(), periodStart.getMonth(), 1);
    while (d <= periodEnd) {
      categories.push(d.toLocaleDateString("en", { month: "short", year: "2-digit" }));
      d.setMonth(d.getMonth() + 1);
    }
  }
  const income = Array(categories.length).fill(0);
  const expense = Array(categories.length).fill(0);
  incomeExpenseSeries?.forEach(({ idx, income: inc, expense: exp }) => {
    if (idx >= 0 && idx < categories.length) {
      income[idx] = inc;
      expense[idx] = exp;
    }
  });
  return {
    categories,
    series: [
      {
        name: "Selected Period",
        data: [
          { name: "Total income", data: income },
          { name: "Total expenses", data: expense }
        ]
      }
    ]
  };
}
async function fetchDashboardStats({ branchIds, organizationId, startDate, endDate }) {
  const now = /* @__PURE__ */ new Date();
  const monthStart = startDate || new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
  const monthEnd = endDate || new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59).toISOString();
  const bucketStrategy = computeBucketStrategy(monthStart, monthEnd);
  const { data, error } = await supabase.rpc("get_dashboard_stats", {
    p_branch_ids: branchIds,
    p_organization_id: organizationId,
    p_start_date: monthStart,
    p_end_date: monthEnd,
    p_bucket_strategy: bucketStrategy
  });
  if (error) throw error;
  const { incomeExpenseSeries, ...rest } = data;
  return {
    ...rest,
    monthlyIncomeExpense: buildIncomeExpenseChart(
      incomeExpenseSeries,
      bucketStrategy,
      monthStart,
      monthEnd
    )
  };
}
async function fetchTodayAppointments({ branchIds }) {
  const { data, error } = await supabase.rpc("get_today_appointments", {
    p_branch_ids: branchIds
  });
  if (error) throw error;
  return data ?? [];
}
function useDashboardStats({ branchIds, organizationId, startDate, endDate } = {}) {
  const enabled = branchIds?.length > 0 && !!organizationId;
  const cacheKey = enabled ? `dashboard-stats|${organizationId}|${branchIds.sort().join(",")}|${startDate || ""}|${endDate || ""}` : null;
  const { data, isLoading, error } = useSWR(
    cacheKey,
    () => fetchDashboardStats({ branchIds, organizationId, startDate, endDate }),
    swrOptions
  );
  return reactExports.useMemo(
    () => ({
      dashboardData: data ?? null,
      dashboardLoading: isLoading,
      dashboardError: error
    }),
    [data, isLoading, error]
  );
}
function useTodayAppointments({ branchIds } = {}) {
  const enabled = branchIds?.length > 0;
  const cacheKey = enabled ? `today-appointments|${branchIds.sort().join(",")}` : null;
  const { data, isLoading, error } = useSWR(
    cacheKey,
    () => fetchTodayAppointments({ branchIds }),
    aptSwrOptions
  );
  return reactExports.useMemo(
    () => ({
      todayAptList: data ?? [],
      aptLoading: isLoading,
      aptError: error
    }),
    [data, isLoading, error]
  );
}
function SaleByGender({ title, subheader, total, chart, sx, ...other }) {
  const theme = useTheme();
  const chartSeries = chart.series.map((item) => item.value);
  const chartColors = chart.colors ?? [
    [theme.palette.primary.light, theme.palette.primary.main],
    [alpha(theme.palette.warning.light, 0.8), alpha(theme.palette.warning.main, 0.8)],
    [alpha(theme.palette.error.light, 0.8), alpha(theme.palette.error.main, 0.8)]
  ];
  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    colors: chartColors.map((color) => color[1]),
    labels: chart.series.map((item) => item.label),
    stroke: { width: 0 },
    fill: {
      type: "gradient",
      gradient: {
        colorStops: chartColors.map((color) => [
          { offset: 0, color: color[0], opacity: 1 },
          { offset: 100, color: color[1], opacity: 1 }
        ])
      }
    },
    grid: { padding: { top: -40, bottom: -40 } },
    plotOptions: {
      radialBar: {
        hollow: { margin: 10, size: "32%" },
        track: {
          margin: 10,
          background: U(theme.vars.palette.grey["500Channel"], 0.08)
        },
        dataLabels: {
          total: { formatter: () => fNumber(total) },
          value: { offsetY: 2, fontSize: theme.typography.h5.fontSize },
          name: { offsetY: -10 }
        }
      }
    },
    ...chart.options
  });
  if (!chart.series.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        filled: true,
        title: "No sales data",
        description: "There are no sales records to display for the selected period.",
        sx: { py: 10 }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx, ...other, style: { height: "100%" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title, subheader }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Chart,
      {
        type: "radialBar",
        series: chartSeries,
        options: chartOptions,
        slotProps: { loading: { p: 4 } },
        sx: {
          my: 1.5,
          mx: "auto",
          width: { xs: 300, xl: 320 },
          height: { xs: 300, xl: 320 }
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed", mt: 3 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChartLegends,
      {
        labels: chartOptions?.labels,
        colors: chartOptions?.colors,
        sx: { p: 4, justifyContent: "center" }
      }
    )
  ] });
}
function IncomeExpense({ title, subheader, chart, sx, ...other }) {
  const theme = useTheme();
  const lastSeriesName = chart.series[chart.series.length - 1]?.name;
  const [selectedSeries, setSelectedSeries] = reactExports.useState(lastSeriesName ?? "");
  reactExports.useEffect(() => {
    setSelectedSeries(chart.series[chart.series.length - 1]?.name ?? "");
  }, [chart.series]);
  const chartColors = chart.colors ?? [theme.palette.primary.main, theme.palette.warning.main];
  const chartOptions = useChart({
    colors: chartColors,
    xaxis: { categories: chart.categories },
    tooltip: { fillSeriesColor: true },
    ...chart.options
  });
  const currentSeries = chart.series.find((i) => i.name === selectedSeries);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx, ...other, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title, subheader, sx: { mb: 3 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChartLegends,
      {
        colors: chartOptions?.colors,
        labels: chart.series[0]?.data.map((item) => item.name) ?? [],
        values: [
          fShortenNumber(currentSeries?.data[0]?.data.reduce((a, b) => a + b, 0) ?? 0),
          fShortenNumber(currentSeries?.data[1]?.data.reduce((a, b) => a + b, 0) ?? 0)
        ],
        sx: { px: 3, gap: 3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Chart,
      {
        type: "area",
        series: currentSeries?.data,
        options: chartOptions,
        slotProps: { loading: { p: 2.5 } },
        sx: {
          pl: 1,
          py: 2.5,
          pr: 2.5,
          height: 320
        }
      }
    )
  ] });
}
function fDuration(minutes) {
  if (!minutes || minutes <= 0) return "0m";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}
function BestStaffProducts({
  subheader,
  staffData,
  productList,
  customersByRevenue,
  customersByVisits,
  customersByTime,
  sx,
  ...other
}) {
  const [tab, setTab] = reactExports.useState("staff");
  const showProducts = productList.length > 0;
  const showCustomersByRevenue = customersByRevenue?.length > 0;
  const showCustomersByVisits = customersByVisits?.length > 0;
  const showCustomersByTime = customersByTime?.length > 0;
  if (!showProducts && !showCustomersByRevenue && !showCustomersByVisits && !showCustomersByTime) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { filled: true, title: "No Top performers ", sx: {} });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx, ...other, style: { height: "100%" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Top performers", subheader, sx: { pb: 0 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Tabs,
      {
        value: tab,
        onChange: (_, v) => setTab(v),
        sx: { px: 0, pt: 1, "& .MuiTab-root": { minWidth: 0, px: 0 } },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { label: "Staff by revenue", value: "staff" }),
          showProducts && /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { label: "Top products", value: "products" }),
          showCustomersByRevenue && /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { label: "Customers by revenue", value: "customersByRevenue" }),
          showCustomersByVisits && /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { label: "Customers by visits", value: "customersByVisits" }),
          showCustomersByTime && /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { label: "Customers by time", value: "customersByTime" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 1 }, children: [
      tab === "staff" && staffData.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            px: 3,
            pb: 1,
            gap: 2,
            display: "flex",
            alignItems: "center",
            "&:not(:last-child)": { borderBottom: "1px solid", borderColor: "divider" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: row.rank === "Top 1" && "primary" || row.rank === "Top 2" && "secondary" || row.rank === "Top 3" && "info" || row.rank === "Top 4" && "warning" || "error",
                sx: { mt: 0.5 },
                children: row.rank
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0, flex: "1 1 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", noWrap: true, children: row.name }),
              row.category && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", noWrap: true, children: row.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flexShrink: 0, textAlign: "right" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(row.totalAmount) }) })
          ]
        },
        row.id
      )),
      tab === "products" && showProducts && productList.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            px: 3,
            pb: 1,
            gap: 2,
            display: "flex",
            alignItems: "center",
            "&:not(:last-child)": {
              borderBottom: "1px solid",
              borderColor: "divider",
              color: "text.primary"
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                variant: "soft",
                color: index === 0 && "primary" || index === 1 && "secondary" || index === 2 && "info" || index === 3 && "warning" || "error",
                sx: { mt: 0.5 },
                children: [
                  "Top ",
                  index + 1
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0, flex: "1 1 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", noWrap: true, children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", noWrap: true, children: fCurrency(item.price) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flexShrink: 0, textAlign: "right" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: item.soldCount ?? 0 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "sold" })
            ] })
          ]
        },
        item.id
      )),
      tab === "customersByRevenue" && showCustomersByRevenue && customersByRevenue.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            px: 3,
            pb: 1,
            gap: 2,
            display: "flex",
            alignItems: "center",
            "&:not(:last-child)": { borderBottom: "1px solid", borderColor: "divider" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: row.rank === "Top 1" && "primary" || row.rank === "Top 2" && "secondary" || row.rank === "Top 3" && "info" || row.rank === "Top 4" && "warning" || "error",
                sx: { mt: 0.5 },
                children: row.rank
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0, flex: "1 1 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", noWrap: true, children: row.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", noWrap: true, children: [
                row.visitCount,
                " ",
                row.visitCount === 1 ? "visit" : "visits"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flexShrink: 0, textAlign: "right" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(row.totalAmount) }) })
          ]
        },
        row.id
      )),
      tab === "customersByVisits" && showCustomersByVisits && customersByVisits.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            px: 3,
            pb: 1,
            gap: 2,
            display: "flex",
            alignItems: "center",
            "&:not(:last-child)": { borderBottom: "1px solid", borderColor: "divider" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: row.rank === "Top 1" && "primary" || row.rank === "Top 2" && "secondary" || row.rank === "Top 3" && "info" || row.rank === "Top 4" && "warning" || "error",
                sx: { mt: 0.5 },
                children: row.rank
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0, flex: "1 1 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", noWrap: true, children: row.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", noWrap: true, children: [
                fCurrency(row.totalAmount),
                " spent"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flexShrink: 0, textAlign: "right" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: row.visitCount }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "visits" })
            ] })
          ]
        },
        row.id
      )),
      tab === "customersByTime" && showCustomersByTime && customersByTime.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            px: 3,
            pb: 1,
            gap: 2,
            display: "flex",
            alignItems: "center",
            "&:not(:last-child)": { borderBottom: "1px solid", borderColor: "divider" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: row.rank === "Top 1" && "primary" || row.rank === "Top 2" && "secondary" || row.rank === "Top 3" && "info" || row.rank === "Top 4" && "warning" || "error",
                sx: { mt: 0.5 },
                children: row.rank
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0, flex: "1 1 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", noWrap: true, children: row.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", noWrap: true, children: [
                row.visitCount,
                " ",
                row.visitCount === 1 ? "visit" : "visits"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flexShrink: 0, textAlign: "right" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fDuration(row.totalMinutes) }) })
          ]
        },
        row.id
      ))
    ] }) })
  ] });
}
function ExpensesCategories({ title, subheader, chart, sx, ...other }) {
  const theme = useTheme();
  const chartColors = chart.colors ?? [
    theme.palette.secondary.dark,
    theme.palette.error.main,
    theme.palette.primary.main,
    theme.palette.warning.main,
    theme.palette.info.dark,
    theme.palette.info.main,
    theme.palette.success.main,
    theme.palette.warning.dark
  ];
  const chartSeries = chart.series.map((item) => item.value);
  const chartOptions = useChart({
    chart: { offsetY: 12 },
    colors: chartColors,
    labels: chart.series.map((item) => item.label),
    stroke: { width: 1, colors: [theme.palette.background.paper] },
    fill: { opacity: 0.88 },
    tooltip: { fillSeriesColor: true, y: { formatter: (value) => fCurrency(value) } },
    plotOptions: { pie: { donut: { labels: { show: false } } } },
    ...chart.options
  });
  if (!chart.series || chart.series.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { filled: true, title: "No Expenses", description: subheader, sx: { py: 10 } });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx, ...other, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title, subheader }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          pt: 4,
          pb: 3,
          rowGap: 3,
          columnGap: 5,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chart,
            {
              type: "polarArea",
              series: chartSeries,
              options: chartOptions,
              slotProps: { loading: { p: 3 } },
              sx: { width: { xs: 240, md: 280 }, height: { xs: 240, md: 280 } }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartLegends,
            {
              colors: chartOptions?.colors,
              labels: chartOptions?.labels,
              icons: chart.icons,
              sublabels: chart.series.map((item) => fCurrency(item.value)),
              sx: { gap: 2.5, display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          display: "grid",
          typography: "h4",
          textAlign: "center",
          gridTemplateColumns: "repeat(2, 1fr)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 2, borderRight: `dashed 1px ${theme.vars.palette.divider}` }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mb: 1, typography: "body2", color: "text.secondary" }, children: "Categories" }),
            chart.series.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 2 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mb: 1, typography: "body2", color: "text.secondary" }, children: "Total" }),
            fCurrency(chart.series.reduce((total, item) => total + item.value, 0))
          ] })
        ]
      }
    )
  ] });
}
function timeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}
function formatTime(timeStr) {
  if (!timeStr) return "";
  const [h, m] = timeStr.split(":");
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  return `${hour % 12 || 12}:${m} ${ampm}`;
}
function CurrentAppointments({ title, subheader, list, sx, ...other }) {
  const now = /* @__PURE__ */ new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const enriched = (list ?? []).map((item) => {
    const start = timeToMinutes(item.time);
    const end = timeToMinutes(item.endTime);
    const isNow = nowMinutes >= start && nowMinutes < end;
    const isPast = nowMinutes >= end;
    const progress = isNow && end > start ? Math.round((nowMinutes - start) / (end - start) * 100) : 0;
    return { ...item, isNow, isPast, progress, startMinutes: start };
  });
  const pastList = enriched.filter((i) => i.isPast);
  const nowList = enriched.filter((i) => i.isNow);
  const upcomingList = enriched.filter((i) => !i.isNow && !i.isPast);
  if (enriched.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        filled: true,
        title: "No appointments today",
        sx: { py: 3 },
        description: "You have no appointments scheduled for today."
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx, ...other, style: { height: "100%", minHeight: 300 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        sx: { mb: 2 },
        title,
        subheader: nowList.length > 0 ? `${nowList.length} in progress · ${upcomingList.length} upcoming · ${pastList.length} done` : subheader
      }
    ),
    enriched.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No appointments today", sx: { py: 3 } }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { px: 3, pb: 3 }, children: [
      nowList.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { item }),
        index < nowList.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 1.5 } })
      ] }, item.id)),
      nowList.length > 0 && upcomingList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 2, borderStyle: "dashed" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Upcoming" }) }),
      upcomingList.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { item }),
        index < upcomingList.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 1.5 } })
      ] }, item.id)),
      pastList.length > 0 && (nowList.length > 0 || upcomingList.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Done" }) }),
      pastList.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { item }),
        index < pastList.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 1.5 } })
      ] }, item.id))
    ] })
  ] });
}
function Item({ item }) {
  const router = useRouter();
  const initials = item.clientName ? item.clientName.split(" ").map((n) => n[0]).join("").toUpperCase() : "?";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      onClick: () => router.push(paths.dashboard.appointments.details(item.id)),
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 0.75,
        opacity: item.isPast ? 0.45 : 1,
        transition: "opacity 0.2s, background-color 0.15s",
        cursor: "pointer",
        borderRadius: 1,
        mx: -1,
        px: 1,
        py: 0.5,
        "&:hover": { bgcolor: "action.hover" }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { gap: 1.5, display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { position: "relative", flexShrink: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Avatar,
              {
                alt: item.clientName,
                src: item.coverUrl,
                sx: {
                  width: 44,
                  height: 44,
                  filter: item.isPast ? "grayscale(1)" : "none"
                },
                children: !item.coverUrl && initials
              }
            ),
            item.isNow && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "success.main",
                  border: "2px solid",
                  borderColor: "background.paper",
                  position: "absolute",
                  bottom: 0,
                  right: 0
                }
              }
            ),
            item.isPast && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "text.disabled",
                  border: "2px solid",
                  borderColor: "background.paper",
                  position: "absolute",
                  bottom: 0,
                  right: 0
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0, flex: "1 1 auto" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.75, mb: 0.25 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "subtitle2",
                  noWrap: true,
                  sx: {
                    textDecoration: item.isPast ? "line-through" : "none",
                    color: item.isPast ? "text.disabled" : "inherit"
                  },
                  children: item.clientName
                }
              ),
              item.isNow && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: "Now",
                  size: "small",
                  color: "success",
                  variant: "soft",
                  sx: { height: 18, fontSize: 10, px: 0.5 }
                }
              ),
              item.isPast && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: "Done",
                  size: "small",
                  color: "default",
                  variant: "soft",
                  sx: { height: 18, fontSize: 10, px: 0.5 }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, display: "block", children: item.subtitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { textAlign: "right", flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Typography,
            {
              variant: "caption",
              color: "text.secondary",
              sx: { textDecoration: item.isPast ? "line-through" : "none" },
              children: [
                formatTime(item.time),
                " – ",
                formatTime(item.endTime)
              ]
            }
          ) })
        ] }),
        item.isNow && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: `${item.progress}% through appointment`, placement: "top", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          LinearProgress,
          {
            color: "success",
            variant: "determinate",
            value: item.progress,
            sx: [
              (theme) => ({
                height: 4,
                borderRadius: 1,
                bgcolor: U(theme.vars.palette.success["mainChannel"], 0.16),
                [`& .${linearProgressClasses.bar}`]: { borderRadius: 1 }
              })
            ]
          }
        ) })
      ]
    }
  );
}
const CATEGORY_ICONS = {
  supplies: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:box-bold" }),
  rent: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:home-bold" }),
  utilities: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:lightbulb-bold" }),
  equipment: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:screwdriver-bold" }),
  marketing: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:megaphone-bold" }),
  salaries: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:money-bag-bold" }),
  insurance: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:shield-bold" }),
  maintenance: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:settings-bold" }),
  other: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:folder-bold" })
};
function AdminView() {
  const { branches, primaryBranch } = useUserBranches();
  const allBranchIds = reactExports.useMemo(() => branches.map((b) => b.id).filter(Boolean), [branches]);
  const organizationId = primaryBranch?.organization_id ?? null;
  const [selectedBranchId, setSelectedBranchId] = reactExports.useState("all");
  const branchIds = reactExports.useMemo(() => {
    if (selectedBranchId === "all") return allBranchIds;
    return [selectedBranchId];
  }, [selectedBranchId, allBranchIds]);
  const [preset, setPreset] = reactExports.useState("month");
  const [customStart, setCustomStart] = reactExports.useState(null);
  const [customEnd, setCustomEnd] = reactExports.useState(null);
  const dateRange = reactExports.useMemo(() => {
    if (customStart && customEnd) return { start: customStart, end: customEnd };
    return getPresetDates(preset);
  }, [preset, customStart, customEnd]);
  const handlePreset = reactExports.useCallback((value) => {
    setPreset(value);
    setCustomStart(null);
    setCustomEnd(null);
  }, []);
  const { dashboardData, dashboardLoading } = useDashboardStats({
    branchIds,
    organizationId,
    startDate: dateRange.start.toISOString(),
    endDate: dateRange.end.toISOString()
  });
  const { todayAptList } = useTodayAppointments({ branchIds });
  const stats = dashboardData?.stats;
  const branchLabel = reactExports.useMemo(() => {
    if (selectedBranchId === "all") {
      return "Across all branches";
    }
    const selectedBranch = branches.find((b) => b.id === selectedBranchId);
    return selectedBranch?.name || "Selected branch";
  }, [selectedBranchId, branches]);
  const kpiCards = reactExports.useMemo(() => {
    if (!stats) return [];
    const revenueGrowthNote = stats.revenueGrowthPct !== null ? `${stats.revenueGrowthPct > 0 ? "+" : ""}${stats.revenueGrowthPct}% vs previous period` : "Selected period";
    return [
      {
        label: "Total Clients",
        value: stats.totalClients.toLocaleString(),
        icon: "solar:users-group-rounded-bold-duotone",
        note: "Active clients",
        color: "#6366F1",
        bgColor: "rgba(99,102,241,0.08)"
      },
      {
        label: "Active Staff",
        value: stats.activeStaff.toLocaleString(),
        icon: "solar:user-id-bold-duotone",
        note: branchLabel,
        color: "#22C55E",
        bgColor: "rgba(34,197,94,0.08)"
      },
      {
        label: "Today's Appointments",
        value: stats.todayAppointments.toLocaleString(),
        icon: "solar:calendar-mark-bold-duotone",
        note: `${stats.todayCompleted} completed today`,
        color: "#F59E0B",
        bgColor: "rgba(245,158,11,0.08)"
      },
      {
        label: "Pending Appointments",
        value: stats.pendingAppointments.toLocaleString(),
        icon: "solar:clock-circle-bold-duotone",
        note: "Next 7 days",
        color: "#8B5CF6",
        bgColor: "rgba(139,92,246,0.08)"
      },
      {
        label: "Total Services",
        value: stats.totalServices.toLocaleString(),
        icon: "solar:case-minimalistic-bold-duotone",
        note: "Active offerings",
        color: "#14B8A6",
        bgColor: "rgba(20,184,166,0.08)"
      },
      {
        label: "Period Revenue",
        value: fCurrency(stats.monthRevenue),
        icon: "solar:dollar-minimalistic-bold-duotone",
        note: revenueGrowthNote,
        color: "#22C55E",
        bgColor: "rgba(34,197,94,0.08)"
      },
      {
        label: "Total Paid",
        value: fCurrency(stats.totalPaid),
        icon: "solar:hand-money-bold-duotone",
        note: "Amount actually received",
        color: "#3B82F6",
        bgColor: "rgba(59,130,246,0.08)"
      },
      {
        label: "Outstanding Balance",
        value: fCurrency(stats.outstanding),
        icon: "solar:bill-list-bold-duotone",
        note: "Remaining to collect",
        color: "#EF4444",
        bgColor: "rgba(239,68,68,0.08)"
      }
    ];
  }, [stats, branchLabel]);
  const saleByGenderData = dashboardData?.saleByGender ?? {
    total: 0,
    series: [
      { label: "Male", value: 0 },
      { label: "Female", value: 0 },
      { label: "Other", value: 0 }
    ]
  };
  const expensesSeries = dashboardData?.expensesCategories ?? [];
  const expensesIcons = expensesSeries.map(
    (item) => CATEGORY_ICONS[item.label.toLowerCase()] ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:folder-bold" })
  );
  const topStaff = dashboardData?.topStaff ?? [];
  const topProducts = dashboardData?.topProducts ?? [];
  const topCustomersByRevenue = dashboardData?.topCustomersByRevenue ?? [];
  const topCustomersByVisits = dashboardData?.topCustomersByVisits ?? [];
  const topCustomersByTime = dashboardData?.topCustomersByTime ?? [];
  const monthlyIncomeExpense = dashboardData?.monthlyIncomeExpense ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBasedGuard, { roles: ["admin"], children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Dashboard",
        sx: { mb: 3 },
        action: branches.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          BranchSelect,
          {
            branches,
            value: selectedBranchId,
            onChange: setSelectedBranchId
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DateRangeControls,
      {
        preset,
        customStart,
        customEnd,
        onPresetChange: handlePreset,
        onCustomStartChange: setCustomStart,
        onCustomEndChange: setCustomEnd,
        loading: dashboardLoading
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      KpiCardGrid,
      {
        cards: kpiCards,
        loading: dashboardLoading || kpiCards.length === 0,
        skeletonCount: 8
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SaleByGender,
        {
          title: "Revenue by gender",
          subheader: `${fDate(dateRange.start)} – ${fDate(dateRange.end)}`,
          total: saleByGenderData.total,
          chart: { series: saleByGenderData.series }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ExpensesCategories,
        {
          title: "Expenses by category",
          subheader: `${fDate(dateRange.start)} – ${fDate(dateRange.end)}`,
          chart: {
            series: expensesSeries,
            icons: expensesIcons
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CurrentAppointments,
        {
          title: "Today's appointments",
          subheader: `${todayAptList.length} scheduled`,
          list: todayAptList
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        BestStaffProducts,
        {
          title: "Top performers",
          subheader: "Based on revenue generated",
          staffData: topStaff,
          productList: topProducts,
          customersByRevenue: topCustomersByRevenue,
          customersByVisits: topCustomersByVisits,
          customersByTime: topCustomersByTime
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        IncomeExpense,
        {
          title: "Income vs Expenses",
          subheader: `${fDate(dateRange.start)} – ${fDate(dateRange.end)}`,
          chart: {
            categories: monthlyIncomeExpense?.categories ?? [],
            series: monthlyIncomeExpense?.series ?? [
              {
                name: "Selected Period",
                data: [
                  { name: "Total income", data: [] },
                  { name: "Total expenses", data: [] }
                ]
              }
            ]
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardHeader,
          {
            title: "Period Summary",
            subheader: `${fDate(dateRange.start)} – ${fDate(dateRange.end)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: dashboardLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", height: 32 }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, divider: /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}), children: [
          {
            label: "Revenue",
            value: fCurrency(stats?.monthRevenue || 0),
            color: "#22C55E",
            icon: "solar:dollar-minimalistic-bold-duotone"
          },
          {
            label: "Amount Paid",
            value: fCurrency(stats?.totalPaid || 0),
            color: "#3B82F6",
            icon: "solar:hand-money-bold-duotone"
          },
          {
            label: "Outstanding",
            value: fCurrency(stats?.outstanding || 0),
            color: "#EF4444",
            icon: "solar:bill-list-bold-duotone"
          },
          {
            label: "Today's Appointments",
            value: `${stats?.todayAppointments || 0} total`,
            color: "#F59E0B",
            icon: "solar:calendar-mark-bold-duotone"
          },
          {
            label: "Completed Today",
            value: `${stats?.todayCompleted || 0} done`,
            color: "#22C55E",
            icon: "solar:check-circle-bold-duotone"
          }
        ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      width: 36,
                      height: 36,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 1.5,
                      bgcolor: `${row.color}18`,
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: row.icon, width: 20, sx: { color: row.color } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: row.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { color: row.color }, children: row.value })
            ]
          },
          row.label
        )) }) })
      ] }) })
    ] })
  ] }) });
}
const metadata = { title: `Dashboard - ${CONFIG.appName}` };
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdminView, {})
  ] });
}
export {
  Home as default
};
