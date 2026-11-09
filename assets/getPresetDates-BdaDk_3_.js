import { j as jsxRuntimeExports, y as Card, S as Stack, a2 as Chip, K as Divider, c as Typography, a1 as LinearProgress, h as dayjs } from "./index-B08HRm4A.js";
import { D as DatePicker } from "./DatePicker-D3PAml74.js";
const DATE_PRESETS = [
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
  { value: "last_month", label: "Last Month" },
  { value: "3months", label: "3 Months" },
  { value: "year", label: "This Year" },
  { value: "all", label: "All Time" }
];
function DateRangeControls({
  preset,
  customStart,
  customEnd,
  onPresetChange,
  onCustomStartChange,
  onCustomEndChange,
  loading = false,
  presets = DATE_PRESETS,
  cardProps
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      sx: { p: 2, mb: 3, position: "relative", overflow: "hidden", ...cardProps?.sx },
      ...cardProps,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: { xs: "column", sm: "row" },
            spacing: 2,
            alignItems: "center",
            flexWrap: "wrap",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.75, flexWrap: "wrap", children: presets.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: p.label,
                  size: "small",
                  variant: preset === p.value && !customStart ? "filled" : "outlined",
                  color: preset === p.value && !customStart ? "primary" : "default",
                  onClick: () => onPresetChange(p.value),
                  sx: { cursor: "pointer" }
                },
                p.value
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Divider,
                {
                  orientation: "vertical",
                  flexItem: true,
                  sx: { display: { xs: "none", md: "block" }, ml: "auto" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Stack,
                {
                  direction: "row",
                  spacing: 1.5,
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: { xs: "100%", sm: "auto" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DatePicker,
                      {
                        label: "Start",
                        value: customStart,
                        onChange: (val) => {
                          onCustomStartChange(val);
                        },
                        slotProps: { textField: { size: "small", sx: { width: { xs: 140, sm: 160 } } } }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "–" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DatePicker,
                      {
                        label: "End",
                        value: customEnd,
                        onChange: (val) => {
                          onCustomEndChange(val);
                        },
                        slotProps: { textField: { size: "small", sx: { width: { xs: 140, sm: 160 } } } }
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, { sx: { position: "absolute", bottom: 0, left: 0, right: 0 } })
      ]
    }
  );
}
function getPresetDates(preset) {
  const now = dayjs();
  switch (preset) {
    case "today":
      return { start: now.startOf("day"), end: now.endOf("day") };
    case "yesterday":
      return {
        start: now.subtract(1, "day").startOf("day"),
        end: now.subtract(1, "day").endOf("day")
      };
    case "week":
      return { start: now.startOf("week"), end: now.endOf("week") };
    case "month":
      return { start: now.startOf("month"), end: now.endOf("month") };
    case "last_month":
      return {
        start: now.subtract(1, "month").startOf("month"),
        end: now.subtract(1, "month").endOf("month")
      };
    case "3months":
      return {
        start: now.subtract(2, "month").startOf("month"),
        end: now.endOf("month")
      };
    case "year":
      return { start: now.startOf("year"), end: now.endOf("year") };
    case "all":
    default:
      return {
        start: dayjs("2020-01-01"),
        end: now.add(1, "year").startOf("year")
      };
  }
}
export {
  DateRangeControls as D,
  DATE_PRESETS as a,
  getPresetDates as g
};
