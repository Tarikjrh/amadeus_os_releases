import { j as jsxRuntimeExports, y as Card, a0 as fCurrency, B as Box, S as Stack, a as Iconify, c as Typography, ap as Tabs, aq as Tab, r as reactExports, L as Label, an as fDate, T as Tooltip, bY as usePermissions, M as MenuItem, b as CircularProgress, K as Divider, b_ as fPercent, a1 as LinearProgress, aI as fShortenNumber, a6 as useUserBranches, bo as useRouter, a4 as DashboardContent, ao as CustomBreadcrumbs, a3 as paths, d as Button, bA as Collapse, C as CONFIG } from "./index-B08HRm4A.js";
import { a as useGetIncomeTransactions, b as useGetIncomeTrends, u as useGetIncomeSummary } from "./income-service-rDNYCD1M.js";
import "./styles-Ddj8daWs.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { K as KpiCardGrid } from "./KpiCard-D7DSr9FT.js";
import { g as getPresetDates, D as DateRangeControls } from "./getPresetDates-BdaDk_3_.js";
import { C as CardHeader } from "./CardHeader-DCwzSIO8.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
import { C as CardContent } from "./CardContent-tUS7qwlT.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { T as TRANSACTION_TABS, I as ITEM_TYPE_COLOR, P as PAYMENT_METHOD_LABELS, S as STATUS_COLOR, a as ITEM_TYPE_LABELS, b as TREND_PERIOD_OPTIONS, c as PAYMENT_METHOD_COLORS } from "./income-overview.constants-ByoLvwUg.js";
import { D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import { u as useChart, C as Chart } from "./use-chart-7x0b6PVF.js";
import "./styles-BdIysWnF.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import "./with-selector-ClfCuV5M.js";
import "./render-location-type-B-TZb61z.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./index-Di_Bgabu.js";
import "./InputAdornment-BqZyQBIE.js";
import "./Dialog-C5RfKkDi.js";
import "./ExportPrint-CAqo1wR3.js";
import "./toPropertyKey-BRoQIA86.js";
import "./Autocomplete-BReuRGf-.js";
import "./TablePagination-BOFMLJYr.js";
import "./TableCell-B_5fJIbm.js";
import "./ToggleButton-D4MfeHtt.js";
import "./Checkbox-Br8xlIAK.js";
function DiscountsCard({ incomeData, incomeLoading }) {
  const discountCards = [
    {
      label: "Discount Codes",
      icon: "solar:tag-price-bold-duotone",
      amount: incomeData?.discounts?.discountCodes || 0,
      count: incomeData?.discounts?.discountCodeCount || 0,
      color: "primary"
    },
    {
      label: "Vouchers",
      icon: "solar:ticket-sale-bold-duotone",
      amount: incomeData?.discounts?.vouchers || 0,
      count: incomeData?.discounts?.voucherCount || 0,
      color: "warning"
    },
    {
      label: "Manual Discounts",
      icon: "solar:pen-bold-duotone",
      amount: incomeData?.discounts?.manualDiscounts || 0,
      count: incomeData?.discounts?.manualDiscountCount || 0,
      color: "info"
    },
    {
      label: "Cashback Redeemed",
      icon: "solar:wallet-money-bold-duotone",
      amount: incomeData?.discounts?.cashbackRedeemed || 0,
      count: incomeData?.discounts?.cashbackCount || 0,
      color: "success"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        title: "Discounts & Deductions",
        subheader: incomeLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 180 }) : `Total discounts given: ${fCurrency(incomeData?.summary?.totalDiscounts || 0)}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 2, children: discountCards.map((dc) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6, lg: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          p: 2.5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, alignItems: "center", sx: { mb: 1.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: dc.icon, width: 32, sx: { color: `${dc.color}.main` } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: dc.label })
          ] }),
          incomeLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 80, height: 36 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 100, height: 20 })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: fCurrency(dc.amount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
              "Used in ",
              dc.count,
              " sale",
              dc.count !== 1 ? "s" : ""
            ] })
          ] })
        ]
      }
    ) }, dc.label)) }) })
  ] });
}
function TransactionsToolbar({ tab, onTabChange, settings, onChangeSettings }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarLeftPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: tab, onChange: (_, val) => onTabChange(val), sx: { px: 2, flexShrink: 0 }, children: TRANSACTION_TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: t.value, label: t.label }, t.value)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarColumnsButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarSettingsButton, { settings, onChangeSettings })
    ] })
  ] });
}
const MAX_VISIBLE_ITEMS = 1;
function getItemName(item) {
  return item.service_name || item.product_name || item.package_name || ITEM_TYPE_LABELS[item.item_type] || item.item_type;
}
function useTransactionColumns() {
  return reactExports.useMemo(
    () => [
      {
        field: "sale_number",
        headerName: "Sale #",
        width: 140,
        filterable: true,
        renderCell: ({ row, value }) => {
          if (row._type === "deposit") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "default", sx: { fontSize: 11 }, children: "Deposit" });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "", fontFamily: "monospace", fontSize: 12, children: value });
        }
      },
      {
        field: "created_at",
        headerName: "Date",
        width: 110,
        filterable: false,
        // date range is handled by the date controls above the grid
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "", children: fDate(value) })
      },
      {
        field: "client",
        headerName: "Client",
        flex: 1,
        minWidth: 130,
        filterable: true,
        renderCell: ({ row }) => {
          const name = row.client ? `${row.client.first_name} ${row.client.last_name}` : "Walk-in";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "", children: name });
        }
      },
      {
        field: "items",
        headerName: "Items",
        minWidth: 240,
        flex: 1,
        sortable: false,
        filterable: false,
        renderCell: ({ row }) => {
          if (row._type === "deposit") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: row._depositNotes || "Forfeited deposit" });
          }
          const EXCLUDED = ["package_deposit", "discount_plan_deposit"];
          const items = (row.items || []).filter((i) => !EXCLUDED.includes(i.item_type));
          if (!items.length) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "–" });
          }
          const visible = items.slice(0, MAX_VISIBLE_ITEMS);
          const overflow = items.slice(MAX_VISIBLE_ITEMS);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, sx: { py: 0.5 }, children: [
            visible.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: ITEM_TYPE_COLOR[item.item_type] || "default",
                sx: { fontSize: 11 },
                children: getItemName(item)
              },
              item.id
            )),
            overflow.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                title: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0.5, children: overflow.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: getItemName(item) }, item.id)) }),
                arrow: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { variant: "soft", color: "default", sx: { fontSize: 11, cursor: "default" }, children: [
                  "+",
                  overflow.length,
                  " more"
                ] })
              }
            )
          ] });
        }
      },
      {
        field: "subtotal",
        headerName: "Subtotal",
        width: 100,
        type: "number",
        align: "right",
        headerAlign: "right",
        filterable: true,
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "", children: fCurrency(value) })
      },
      {
        field: "discounts",
        headerName: "Discounts",
        width: 130,
        align: "right",
        headerAlign: "right",
        sortable: false,
        filterable: false,
        renderCell: ({ row }) => {
          const total = parseFloat(row.discount_amount || 0) + parseFloat(row.voucher_amount || 0) + parseFloat(row.manual_discount_amount || 0);
          if (total <= 0)
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "", color: "text.disabled", children: "–" });
          const badges = [];
          if (row.discount_code) badges.push(`Code: ${row.discount_code.code}`);
          if (row.voucher) badges.push(`Voucher: ${row.voucher.code}`);
          if (parseFloat(row.manual_discount_amount || 0) > 0) badges.push("Manual");
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", spacing: 0.25, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "", color: "error", children: [
              "-",
              fCurrency(total)
            ] }),
            badges.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                color: "text.disabled",
                sx: { maxWidth: 130, textAlign: "right", lineHeight: 1.2 },
                children: badges.join(" · ")
              }
            )
          ] });
        }
      },
      {
        field: "tax_amount",
        headerName: "Tax",
        width: 90,
        type: "number",
        filterable: false,
        align: "right",
        headerAlign: "right",
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "", children: parseFloat(value || 0) > 0 ? fCurrency(value) : "–" })
      },
      {
        field: "total_amount",
        headerName: "Total",
        width: 100,
        type: "number",
        align: "right",
        headerAlign: "right",
        filterable: true,
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "", fontWeight: "bold", children: fCurrency(value) })
      },
      {
        field: "payments",
        headerName: "Payment",
        width: 150,
        sortable: false,
        filterable: false,
        renderCell: ({ row }) => {
          const methods = (row.payments || []).map((p) => PAYMENT_METHOD_LABELS[p.payment_method] || p.payment_method).filter((v, i, arr) => arr.indexOf(v) === i).join(", ");
          const hasPackagePaid = (row.items || []).some(
            (i) => i.paid_via_package || i.original_unit_price != null
          );
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.25, sx: { height: "100%" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: methods || "–" }),
            hasPackagePaid && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                sx: {
                  px: 0.75,
                  py: 0.1,
                  borderRadius: 0.75,
                  bgcolor: "info.lighter",
                  color: "info.dark",
                  display: "inline-block",
                  width: "fit-content",
                  lineHeight: 1.5
                },
                children: "via package"
              }
            )
          ] });
        }
      },
      {
        field: "status",
        headerName: "Status",
        width: 120,
        filterable: false,
        // status filtering is handled by the tab bar
        renderCell: ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: STATUS_COLOR[value] || "default", children: value?.replace("_", " ") })
      }
    ],
    []
  );
}
function parseFilterModel(filterModel) {
  const filters = {
    saleNumber: null,
    clientSearch: null,
    totalMin: null,
    totalMax: null,
    subtotalMin: null,
    subtotalMax: null
  };
  for (const item of filterModel?.items ?? []) {
    const val = item.value;
    if (val === void 0 || val === null || val === "") continue;
    switch (item.field) {
      case "sale_number":
        filters.saleNumber = String(val);
        break;
      case "client":
        filters.clientSearch = String(val);
        break;
      case "total_amount":
        switch (item.operator) {
          case ">":
          case ">=":
            filters.totalMin = parseFloat(val);
            break;
          case "<":
          case "<=":
            filters.totalMax = parseFloat(val);
            break;
          case "=":
            filters.totalMin = parseFloat(val);
            filters.totalMax = parseFloat(val);
            break;
        }
        break;
      case "subtotal":
        switch (item.operator) {
          case ">":
          case ">=":
            filters.subtotalMin = parseFloat(val);
            break;
          case "<":
          case "<=":
            filters.subtotalMax = parseFloat(val);
            break;
          case "=":
            filters.subtotalMin = parseFloat(val);
            filters.subtotalMax = parseFloat(val);
            break;
        }
        break;
    }
  }
  return filters;
}
function TransactionsCard({
  branchIds,
  startDate,
  endDate,
  depositRecords = [],
  summaryLoading,
  onRowClick
}) {
  const [transactionsTab, setTransactionsTab] = reactExports.useState("all");
  const [paginationModel, setPaginationModel] = reactExports.useState({ page: 0, pageSize: 10 });
  const [sortModel, setSortModel] = reactExports.useState([{ field: "created_at", sort: "desc" }]);
  const [filterModel, setFilterModel] = reactExports.useState({ items: [] });
  const { settings, onChangeSettings } = useToolbarSettings();
  const columns = useTransactionColumns();
  const isDepositTab = transactionsTab === "forfeited_deposits";
  const statusParam = isDepositTab || transactionsTab === "all" ? null : transactionsTab;
  const parsedFilters = reactExports.useMemo(() => parseFilterModel(filterModel), [filterModel]);
  const { transactions, transactionCount, transactionsLoading } = useGetIncomeTransactions({
    branchIds,
    startDate,
    endDate,
    status: statusParam,
    saleNumber: parsedFilters.saleNumber,
    clientSearch: parsedFilters.clientSearch,
    totalMin: parsedFilters.totalMin,
    totalMax: parsedFilters.totalMax,
    subtotalMin: parsedFilters.subtotalMin,
    subtotalMax: parsedFilters.subtotalMax,
    sortField: sortModel[0]?.field || "created_at",
    sortOrder: sortModel[0]?.sort || "desc",
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    enabled: !isDepositTab
  });
  const forfeitedDepositRows = reactExports.useMemo(
    () => depositRecords.filter((d) => d.status === "forfeited").map((d) => ({
      id: `dep-${d.id}`,
      _type: "deposit",
      sale_number: null,
      created_at: d.refunded_at || d.paid_at,
      client: d.client,
      items: [],
      subtotal: parseFloat(d.amount || 0),
      discount_amount: 0,
      voucher_amount: 0,
      manual_discount_amount: 0,
      tax_amount: 0,
      total_amount: parseFloat(d.amount || 0),
      payments: [{ payment_method: d.payment_method, amount: d.amount }],
      status: "forfeited",
      _depositNotes: d.refund_reason || d.notes || null
    })),
    [depositRecords]
  );
  const rows = isDepositTab ? forfeitedDepositRows : transactions;
  const rowCount = isDepositTab ? forfeitedDepositRows.length : transactionCount;
  const loading = isDepositTab ? summaryLoading : transactionsLoading;
  const handleTabChange = reactExports.useCallback((val) => {
    setTransactionsTab(val);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleSortChange = reactExports.useCallback((newSort) => {
    setSortModel(newSort);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleFilterChange = reactExports.useCallback((newFilter) => {
    setFilterModel(newFilter);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Transactions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { height: 560 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      DataGrid,
      {
        rows,
        columns,
        getRowId: (row) => row.id,
        loading,
        paginationMode: isDepositTab ? "client" : "server",
        sortingMode: isDepositTab ? "client" : "server",
        filterMode: isDepositTab ? "client" : "server",
        rowCount,
        paginationModel,
        onPaginationModelChange: setPaginationModel,
        sortModel,
        onSortModelChange: handleSortChange,
        filterModel,
        onFilterModelChange: handleFilterChange,
        pageSizeOptions: [5, 10, 25, 50],
        onRowClick: (params) => {
          if (params.row._type !== "deposit") onRowClick(params.row.id);
        },
        slots: {
          toolbar: TransactionsToolbar,
          noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
            EmptyContent,
            {
              title: "No transactions found",
              description: "Try adjusting your filters"
            }
          ),
          noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found" })
        },
        slotProps: {
          toolbar: {
            tab: transactionsTab,
            onTabChange: handleTabChange,
            settings,
            onChangeSettings
          }
        },
        ...settings,
        sx: {
          border: "none",
          cursor: "pointer",
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
            outline: "none"
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none"
          },
          '& .MuiDataGrid-row[data-type="deposit"]': {
            cursor: "default"
          }
        }
      }
    ) })
  ] });
}
function IncomeTrendsCard({ branchIds }) {
  const { isAdmin } = usePermissions();
  const [months, setMonths] = reactExports.useState(6);
  const { trendsData, trendsLoading } = useGetIncomeTrends({
    branchIds,
    months,
    enabled: isAdmin
  });
  const categories = trendsData.map((d) => d.month_label);
  const seriesData = trendsData.map((d) => parseFloat(d.total_collected));
  const chartOptions = useChart({
    chart: { type: "line" },
    stroke: { width: 2.5, curve: "smooth" },
    markers: { size: 4, strokeWidth: 0 },
    xaxis: {
      categories,
      labels: { style: { fontSize: "11px" } }
    },
    yaxis: {
      labels: {
        formatter: (val) => fCurrency(val)
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: { show: true },
      y: {
        formatter: (val, { dataPointIndex }) => {
          const month = categories[dataPointIndex] ?? "";
          return `${month}: ${fCurrency(val)}`;
        },
        title: { formatter: () => "" }
      }
    },
    legend: { show: false },
    grid: { strokeDashArray: 3 }
  });
  const chartSeries = [{ name: "Revenue", data: seriesData }];
  const periodLabel = (() => {
    if (!trendsData.length) return null;
    return `${trendsData[0].month_label} – ${trendsData[trendsData.length - 1].month_label}`;
  })();
  if (!isAdmin) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        title: "Income Trends",
        subheader: periodLabel ?? " ",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            select: true,
            size: "small",
            value: months,
            onChange: (e) => setMonths(Number(e.target.value)),
            sx: { minWidth: 160 },
            children: TREND_PERIOD_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value))
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: trendsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: { height: 300, display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {})
      }
    ) : !trendsData.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: { height: 300, display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "No data available" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Chart, { type: "line", series: chartSeries, options: chartOptions, sx: { height: 300 } }) })
  ] });
}
const SOURCE_ROWS = [
  { label: "Services", key: "services", color: "#3B82F6" },
  { label: "Products", key: "products", color: "#F59E0B" },
  { label: "Packages", key: "packages", color: "#22C55E" }
];
function IncomeBySourceCard({ incomeData, incomeLoading }) {
  const sourceTotal = (incomeData?.bySource?.services || 0) + (incomeData?.bySource?.products || 0) + (incomeData?.bySource?.packages || 0);
  const chartOptions = useChart({
    chart: { type: "donut" },
    stroke: { show: false },
    labels: ["Services", "Products", "Packages"],
    legend: { show: true, position: "bottom" },
    tooltip: { fillSeriesColor: true, y: { formatter: (val) => fCurrency(val) } },
    dataLabels: {
      enabled: true,
      formatter: (val) => val >= 5 ? `${Math.round(val)}%` : "",
      style: { fontSize: "15px", fontWeight: 700, colors: ["#000"] },
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 4,
        borderWidth: 0,
        color: "#000",
        opacity: 0.75,
        dropShadow: { enabled: false }
      },
      dropShadow: { enabled: false }
    },
    states: {
      hover: { filter: { type: "darken", value: 0.15 } },
      active: { filter: { type: "darken", value: 0.35 } }
    },
    plotOptions: {
      pie: {
        donut: {
          size: "72%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => fCurrency(sourceTotal)
            }
          }
        }
      }
    }
  });
  const chartSeries = [
    incomeData?.bySource?.services || 0,
    incomeData?.bySource?.products || 0,
    incomeData?.bySource?.packages || 0
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Income by Source", subheader: "Services, Products & Packages" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: incomeLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: { height: 280, display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {})
      }
    ) : sourceTotal === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: { height: 280, display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "No data available" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chart, { type: "donut", series: chartSeries, options: chartOptions, sx: { height: 220 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, children: SOURCE_ROWS.map((row) => {
        const value = incomeData?.bySource?.[row.key] || 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: row.color,
                      flexShrink: 0
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: row.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: sourceTotal > 0 ? fPercent(value / sourceTotal * 100) : "0%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(value) })
              ] })
            ]
          },
          row.label
        );
      }) })
    ] }) })
  ] });
}
function PaymentMethodsCard({ incomeData, incomeLoading }) {
  const paymentMethods = reactExports.useMemo(() => {
    const methods = incomeData?.byPaymentMethod || {};
    return Object.entries(methods).map(([method, amount]) => ({ method, amount })).sort((a, b) => b.amount - a.amount);
  }, [incomeData]);
  const totalPayments = paymentMethods.reduce((sum, m) => sum + m.amount, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Payment Methods", subheader: `Total: ${fCurrency(totalPayments)}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: incomeLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: { height: 280, display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {})
      }
    ) : paymentMethods.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: { height: 280, display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "No payments recorded" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2.5, sx: { pt: 1 }, children: paymentMethods.map(({ method, amount }) => {
      const color = PAYMENT_METHOD_COLORS[method] || "#94A3B8";
      const pct = totalPayments > 0 ? amount / totalPayments * 100 : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", sx: { mb: 0.75 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: 10, height: 10, borderRadius: "50%", bgcolor: color } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: PAYMENT_METHOD_LABELS[method] || method })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.5, alignItems: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: fPercent(pct) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(amount) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LinearProgress,
          {
            variant: "determinate",
            value: Math.min(pct, 100),
            sx: {
              height: 6,
              borderRadius: 1,
              bgcolor: "action.hover",
              "& .MuiLinearProgress-bar": { bgcolor: color, borderRadius: 1 }
            }
          }
        )
      ] }, method);
    }) }) })
  ] });
}
function RevenueOverTimeCard({ incomeData, incomeLoading, dateRange }) {
  const chartOptions = useChart({
    chart: { type: "bar", stacked: false },
    xaxis: {
      categories: (incomeData?.dailyData || []).map((d) => {
        const date = /* @__PURE__ */ new Date(`${d.date}T00:00:00`);
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      }),
      labels: { style: { fontSize: "11px" } }
    },
    yaxis: {
      labels: {
        formatter: (val) => fShortenNumber(val)
      }
    },
    tooltip: {
      fillSeriesColor: true,
      y: { formatter: (val) => fCurrency(val) }
    },
    legend: { show: true, position: "top" },
    plotOptions: { bar: { borderRadius: 4, columnWidth: "60%" } }
  });
  const chartSeries = [
    {
      name: "Collected",
      data: (incomeData?.dailyData || []).map((d) => parseFloat(d.completed.toFixed(2)))
    },
    {
      name: "Pending",
      data: (incomeData?.dailyData || []).map((d) => parseFloat(d.pending.toFixed(2)))
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        title: "Revenue Over Time",
        subheader: `${fDate(dateRange.start)} – ${fDate(dateRange.end)}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: incomeLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: { height: 280, display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {})
      }
    ) : incomeData?.dailyData?.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: { height: 280, display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "No data for this period" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Chart, { type: "bar", series: chartSeries, options: chartOptions, sx: { height: 280 } }) })
  ] });
}
function IncomeOverviewView() {
  const { branches, primaryBranch, hasMultipleBranches } = useUserBranches();
  const organizationId = primaryBranch?.organization_id ?? null;
  const allBranchIds = reactExports.useMemo(() => branches.map((b) => b.id).filter(Boolean), [branches]);
  const [selectedBranchId, setSelectedBranchId] = reactExports.useState("all");
  const branchIds = reactExports.useMemo(() => {
    if (selectedBranchId === "all") return allBranchIds;
    return [selectedBranchId];
  }, [selectedBranchId, allBranchIds]);
  const [showKpis, setShowKpis] = reactExports.useState(false);
  const [preset, setPreset] = reactExports.useState("month");
  const [customStart, setCustomStart] = reactExports.useState(null);
  const [customEnd, setCustomEnd] = reactExports.useState(null);
  const router = useRouter();
  const dateRange = reactExports.useMemo(() => {
    if (customStart && customEnd) {
      const start = new Date(customStart);
      start.setHours(0, 0, 0, 0);
      const end = new Date(customEnd);
      end.setHours(23, 59, 59, 999);
      return { start, end };
    }
    return getPresetDates(preset);
  }, [preset, customStart, customEnd]);
  const startDate = dateRange.start.toISOString();
  const endDate = dateRange.end.toISOString();
  const { incomeData, incomeLoading } = useGetIncomeSummary({
    branchIds,
    organizationId,
    startDate,
    endDate
  });
  const handlePreset = reactExports.useCallback((value) => {
    setPreset(value);
    setCustomStart(null);
    setCustomEnd(null);
  }, []);
  const totalCollectedWithForfeited = (incomeData?.summary?.totalCollected || 0) + (incomeData?.deposits?.forfeited || 0);
  const kpiCards = [
    ...incomeData?.deposits?.forfeited ? [
      {
        label: "Total Revenue",
        value: fCurrency(totalCollectedWithForfeited),
        icon: "solar:graph-up-bold-duotone",
        note: "Completed sales + forfeited deposits",
        color: "#22C55E",
        bgColor: "rgba(34,197,94,0.08)"
      }
    ] : [],
    {
      label: "Total Collected",
      value: fCurrency(incomeData?.summary?.totalCollected || 0),
      icon: "solar:dollar-minimalistic-bold-duotone",
      note: `${incomeData?.summary?.completedCount || 0} Fully completed sales`,
      color: "#22C55E",
      bgColor: "rgba(34,197,94,0.08)"
    },
    {
      label: "Total Paid",
      value: fCurrency(incomeData?.summary?.totalPaid || 0),
      icon: "solar:hand-money-bold-duotone",
      note: "Amount actually received from clients",
      color: "#3B82F6",
      bgColor: "rgba(59,130,246,0.08)"
    },
    {
      label: "Outstanding Balance",
      value: fCurrency(incomeData?.summary?.outstandingBalance || 0),
      icon: "solar:bill-list-bold-duotone",
      note: "Remaining to be collected ",
      color: "#F97316",
      bgColor: "rgba(249,115,22,0.08)"
    },
    {
      label: "Pending Income",
      value: fCurrency(incomeData?.summary?.pendingAmount || 0),
      icon: "solar:clock-circle-bold-duotone",
      note: `${incomeData?.summary?.pendingCount || 0} pending sales`,
      color: "#F59E0B",
      bgColor: "rgba(245,158,11,0.08)"
    },
    {
      label: "Refunded",
      value: fCurrency(incomeData?.summary?.refundedAmount || 0),
      icon: "solar:transfer-horizontal-bold-duotone",
      note: `${incomeData?.summary?.refundedCount || 0} refunded`,
      color: "#EF4444",
      bgColor: "rgba(239,68,68,0.08)"
    },
    {
      label: "Total Discounts Given",
      value: fCurrency(incomeData?.summary?.totalDiscounts || 0),
      icon: "solar:sale-bold-duotone",
      note: `across all discount types`,
      color: "#8B5CF6",
      bgColor: "rgba(139,92,246,0.08)"
    },
    ...incomeData?.deposits?.forfeited ? [
      {
        label: "Forfeited Deposits",
        value: fCurrency(incomeData.deposits.forfeited),
        icon: "solar:shield-warning-bold-duotone",
        note: `${incomeData?.deposits?.forfeitedCount || 0} no-show / policy forfeitures`,
        color: "#64748B",
        bgColor: "rgba(100,116,139,0.08)"
      }
    ] : []
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Income Overview",
        links: [{ name: "Dashboard", href: paths.dashboard.root }, { name: "Income Overview" }],
        sx: { mb: 3 },
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", gap: 1, alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", variant: "outlined", onClick: () => setShowKpis((prev) => !prev), children: showKpis ? "Hide KPIs" : "Show KPIs" }),
          hasMultipleBranches && /* @__PURE__ */ jsxRuntimeExports.jsx(
            BranchSelect,
            {
              branches,
              value: selectedBranchId,
              onChange: setSelectedBranchId,
              allLabel: "All Locations"
            }
          )
        ] })
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
        loading: incomeLoading
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      KpiCardGrid,
      {
        cards: kpiCards.slice(0, 3),
        loading: incomeLoading,
        columns: { xs: 12, sm: 6, md: 4 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: showKpis, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      KpiCardGrid,
      {
        cards: kpiCards.slice(3),
        loading: incomeLoading,
        columns: { xs: 12, sm: 6, md: 4 }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RevenueOverTimeCard,
      {
        incomeData,
        incomeLoading,
        dateRange
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IncomeTrendsCard, { branchIds }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IncomeBySourceCard, { incomeData, incomeLoading }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentMethodsCard, { incomeData, incomeLoading }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiscountsCard, { incomeData, incomeLoading }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TransactionsCard,
      {
        branchIds,
        startDate,
        endDate,
        depositRecords: incomeData?.depositRecords || [],
        summaryLoading: incomeLoading,
        onRowClick: (id) => router.push(paths.dashboard.pos.saleDetails(id))
      }
    )
  ] });
}
const metadata = { title: `Income Overview | Dashboard - ${CONFIG.appName}` };
function IncomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IncomeOverviewView, {})
  ] });
}
export {
  IncomePage as default
};
