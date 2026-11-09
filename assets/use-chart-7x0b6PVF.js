const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-apexcharts.esm-DhOkbDvC.js","./index-B08HRm4A.js","./index-DCQoYTVP.css","./index-Di_Bgabu.js"])))=>i.map(i=>d[i]);
import { bH as createClasses, j as jsxRuntimeExports, b4 as j, q as styled, B as Box, r as reactExports, ay as __vitePreload, bX as useTheme, b9 as merge, U } from "./index-B08HRm4A.js";
import "./styles-BdIysWnF.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
const chartClasses = {
  root: createClasses("chart__root"),
  loading: createClasses("chart__loading"),
  legends: {
    root: createClasses("chart__legends__root"),
    item: {
      wrapper: createClasses("chart__legends__item__wrapper"),
      root: createClasses("chart__legends__item__root"),
      dot: createClasses("chart__legends__item__dot"),
      icon: createClasses("chart__legends__item__icon"),
      label: createClasses("chart__legends__item__label"),
      value: createClasses("chart__legends__item__value")
    }
  }
};
function ChartLegends({
  sx,
  className,
  slotProps,
  icons = [],
  values = [],
  labels = [],
  colors = [],
  sublabels = [],
  ...other
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListRoot, { className: j([chartClasses.legends.root, className]), sx, ...other, children: labels.map((series, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ItemWrapper,
    {
      className: chartClasses.legends.item.wrapper,
      sx: [
        {
          "--icon-color": colors[index],
          ...slotProps?.wrapper
        },
        ...Array.isArray(slotProps?.wrapper?.sx) ? slotProps.wrapper.sx : [slotProps?.wrapper?.sx]
      ],
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ItemRoot, { className: chartClasses.legends.item.root, ...slotProps?.root, children: [
          icons.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIcon, { className: chartClasses.legends.item.icon, ...slotProps?.icon, children: icons[index] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ItemDot, { className: chartClasses.legends.item.dot, ...slotProps?.dot }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ItemLabel, { className: chartClasses.legends.item.label, ...slotProps?.label, children: [
            series,
            !!sublabels.length && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " ",
              ` (${sublabels[index]})`
            ] })
          ] })
        ] }),
        values && /* @__PURE__ */ jsxRuntimeExports.jsx(ItemValue, { className: chartClasses.legends.item.value, ...slotProps?.value, children: values[index] })
      ]
    },
    series
  )) });
}
const ListRoot = styled("ul")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2)
}));
const ItemWrapper = styled("li")(() => ({
  display: "inline-flex",
  flexDirection: "column"
}));
const ItemRoot = styled("div")(({ theme }) => ({
  gap: 6,
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "flex-start",
  fontSize: theme.typography.pxToRem(13),
  fontWeight: theme.typography.fontWeightMedium
}));
const ItemIcon = styled("span")({
  display: "inline-flex",
  color: "var(--icon-color)",
  /**
   * As ':first-child' for ssr
   * https://github.com/emotion-js/emotion/issues/1105#issuecomment-1126025608
   */
  "& > :first-of-type:not(style):not(:first-of-type ~ *), & > style + *": {
    width: 20,
    height: 20
  }
});
const ItemDot = styled("span")({
  width: 12,
  height: 12,
  flexShrink: 0,
  display: "flex",
  borderRadius: "50%",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--icon-color)",
  backgroundColor: "currentColor"
});
const ItemLabel = styled("span")({ flexShrink: 0 });
const ItemValue = styled("span")(({ theme }) => ({
  ...theme.typography.h6,
  marginTop: theme.spacing(1)
}));
function ChartLoading({ sx, className, type, ...other }) {
  const circularTypes = ["donut", "radialBar", "pie", "polarArea"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      className: j([chartClasses.loading, className]),
      sx: [
        () => ({
          top: 0,
          left: 0,
          width: 1,
          zIndex: 9,
          height: 1,
          p: "inherit",
          overflow: "hidden",
          alignItems: "center",
          position: "absolute",
          borderRadius: "inherit",
          justifyContent: "center"
        }),
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...other,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Skeleton,
        {
          variant: "circular",
          sx: {
            width: 1,
            height: 1,
            borderRadius: "inherit",
            ...circularTypes.includes(type) && { borderRadius: "50%" }
          }
        }
      )
    }
  );
}
const LazyChart = reactExports.lazy(() => __vitePreload(() => import("./react-apexcharts.esm-DhOkbDvC.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url));
function Chart({ sx, type, series, slotProps, className, options = {}, ...other }) {
  const renderFallback = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLoading, { type, sx: slotProps?.loading });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ChartRoot,
    {
      dir: "ltr",
      className: j([chartClasses.root, className]),
      sx,
      ...other,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: renderFallback(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyChart, { type, series, options, width: "100%", height: "100%" }) })
    }
  );
}
const ChartRoot = styled("div")(({ theme }) => ({
  width: "100%",
  flexShrink: 0,
  position: "relative",
  borderRadius: Number(theme.shape.borderRadius) * 1.5
}));
function useChart(updatedOptions) {
  const theme = useTheme();
  const baseOptions = baseChartOptions(theme) ?? {};
  return merge(baseOptions, updatedOptions ?? {});
}
const baseChartOptions = (theme) => {
  const LABEL_TOTAL = {
    show: true,
    label: "Total",
    color: theme.vars.palette.text.secondary,
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight
  };
  const LABEL_VALUE = {
    offsetY: 8,
    color: theme.vars.palette.text.primary,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight
  };
  return {
    /** **************************************
     * Chart
     * https://apexcharts.com/docs/options/chart/animations/
     *************************************** */
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      parentHeightOffset: 0,
      fontFamily: theme.typography.fontFamily,
      foreColor: theme.vars.palette.text.disabled,
      animations: {
        enabled: true,
        speed: 360,
        animateGradually: { enabled: true, delay: 120 },
        dynamicAnimation: { enabled: true, speed: 360 }
      }
    },
    /** **************************************
     * Colors
     * https://apexcharts.com/docs/options/colors/
     *************************************** */
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main,
      theme.palette.info.main,
      theme.palette.error.main,
      theme.palette.success.main,
      theme.palette.warning.dark,
      theme.palette.success.darker,
      theme.palette.info.dark,
      theme.palette.info.darker
    ],
    /** **************************************
     * States
     * https://apexcharts.com/docs/options/states/
     *************************************** */
    states: {
      hover: { filter: { type: "darken" } },
      active: { filter: { type: "darken" } }
    },
    /** **************************************
     * Fill
     * https://apexcharts.com/docs/options/fill/
     *************************************** */
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    /** **************************************
     * Data labels
     * https://apexcharts.com/docs/options/datalabels/
     *************************************** */
    dataLabels: { enabled: false },
    /** **************************************
     * Stroke
     * https://apexcharts.com/docs/options/stroke/
     *************************************** */
    stroke: { width: 2.5, curve: "smooth", lineCap: "round" },
    /** **************************************
     * Grid
     * https://apexcharts.com/docs/options/grid/
     *************************************** */
    grid: {
      strokeDashArray: 3,
      borderColor: theme.vars.palette.divider,
      padding: { top: 0, right: 0, bottom: 0 },
      xaxis: { lines: { show: false } }
    },
    /** **************************************
     * Axis
     * https://apexcharts.com/docs/options/xaxis/
     * https://apexcharts.com/docs/options/yaxis/
     *************************************** */
    xaxis: { axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { tickAmount: 5 },
    /** **************************************
     * Markers
     * https://apexcharts.com/docs/options/markers/
     *************************************** */
    markers: {
      size: 0,
      strokeColors: theme.vars.palette.background.paper
    },
    /** **************************************
     * Tooltip
     *************************************** */
    tooltip: { theme: "false", fillSeriesColor: false, x: { show: true } },
    /** **************************************
     * Legend
     * https://apexcharts.com/docs/options/legend/
     *************************************** */
    legend: {
      show: false,
      position: "top",
      fontWeight: 500,
      fontSize: "13px",
      horizontalAlign: "right",
      markers: { shape: "circle" },
      labels: { colors: theme.vars.palette.text.primary },
      itemMargin: { horizontal: 8, vertical: 8 }
    },
    /** **************************************
     * plotOptions
     *************************************** */
    plotOptions: {
      /**
       * bar
       * https://apexcharts.com/docs/options/plotoptions/bar/
       */
      bar: { borderRadius: 4, columnWidth: "48%", borderRadiusApplication: "end" },
      /**
       * pie + donut
       * https://apexcharts.com/docs/options/plotoptions/pie/
       */
      pie: {
        donut: { labels: { show: true, value: { ...LABEL_VALUE }, total: { ...LABEL_TOTAL } } }
      },
      /**
       * radialBar
       * https://apexcharts.com/docs/options/plotoptions/radialbar/
       */
      radialBar: {
        hollow: { margin: -8, size: "100%" },
        track: {
          margin: -8,
          strokeWidth: "50%",
          background: U(theme.vars.palette.grey["500Channel"], 0.16)
        },
        dataLabels: { value: { ...LABEL_VALUE }, total: { ...LABEL_TOTAL } }
      },
      /**
       * radar
       * https://apexcharts.com/docs/options/plotoptions/radar/
       */
      radar: {
        polygons: {
          fill: { colors: ["transparent"] },
          strokeColors: theme.vars.palette.divider,
          connectorColors: theme.vars.palette.divider
        }
      },
      /**
       * polarArea
       * https://apexcharts.com/docs/options/plotoptions/polararea/
       */
      polarArea: {
        rings: { strokeColor: theme.vars.palette.divider },
        spokes: { connectorColors: theme.vars.palette.divider }
      },
      /**
       * heatmap
       * https://apexcharts.com/docs/options/plotoptions/heatmap/
       */
      heatmap: { distributed: true }
    },
    /** **************************************
     * Responsive
     * https://apexcharts.com/docs/options/responsive/
     *************************************** */
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        // sm ~ 600
        options: { plotOptions: { bar: { borderRadius: 3, columnWidth: "80%" } } }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        // md ~ 900
        options: { plotOptions: { bar: { columnWidth: "60%" } } }
      }
    ]
  };
};
export {
  Chart as C,
  ChartLegends as a,
  useChart as u
};
