import { r as reactExports, j as jsxRuntimeExports, S as Stack, al as Avatar, a as Iconify, B as Box, Y as Link, Z as RouterLink, a3 as paths, a2 as Chip, c as Typography, a1 as LinearProgress, a0 as fCurrency, bo as useRouter, y as Card, a6 as useUserBranches, bO as useGetLowStockProducts, a4 as DashboardContent, ao as CustomBreadcrumbs, C as CONFIG } from "./index-B08HRm4A.js";
import "./styles-Ddj8daWs.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { K as KpiCardGrid } from "./KpiCard-D7DSr9FT.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import "./toolbar-core-DGb1HZrD.js";
import { u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { C as CATEGORY_COLOR_MAP } from "./product-color-map.constants-DF9H_90N.js";
import { P as PRODUCT_CATEGORIES } from "./product-categories.constants-BbDELu5c.js";
import { D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import "./TextField-CIuP940C.js";
import "./with-selector-ClfCuV5M.js";
import "./render-location-type-B-TZb61z.js";
import "./Grid-D21oDAlg.js";
import "./Skeleton-BC-WlQQE.js";
import "./ExportPrint-CAqo1wR3.js";
import "./InputAdornment-BqZyQBIE.js";
import "./index-Di_Bgabu.js";
import "./toPropertyKey-BRoQIA86.js";
import "./Autocomplete-BReuRGf-.js";
import "./TablePagination-BOFMLJYr.js";
import "./TableCell-B_5fJIbm.js";
import "./ToggleButton-D4MfeHtt.js";
import "./Checkbox-Br8xlIAK.js";
function useLowStockColumns() {
  return reactExports.useMemo(
    () => [
      {
        field: "name",
        headerName: "Product",
        flex: 1.5,
        minWidth: 220,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            alignItems: "center",
            spacing: 1.5,
            sx: { width: "100%", height: "100%" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Avatar,
                {
                  variant: "rounded",
                  src: params.row.product?.image_url,
                  alt: params.row.product?.name,
                  sx: {
                    width: 24,
                    height: 24,
                    fontSize: 16,
                    bgcolor: "background.neutral",
                    flexShrink: 0
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:box-bold", width: 18, sx: { color: "text.disabled" } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  component: RouterLink,
                  href: paths.dashboard.products.details(params.row.product?.id),
                  color: "inherit",
                  variant: "subtitle2",
                  noWrap: true,
                  sx: { cursor: "pointer", display: "block" },
                  children: params.row.product?.name
                }
              ) })
            ]
          }
        )
      },
      {
        field: "category",
        headerName: "Category",
        width: 140,
        renderCell: (params) => {
          const cat = params.row.product?.category;
          const label = PRODUCT_CATEGORIES.find((c) => c.value === cat)?.label ?? cat ?? "—";
          const color = CATEGORY_COLOR_MAP[cat] ?? "default";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", label, color, variant: "soft" });
        }
      },
      {
        field: "brand",
        headerName: "Brand",
        width: 120,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: params.row.product?.brand || "—" })
      },
      {
        field: "available_quantity",
        headerName: "In Stock",
        width: 110,
        type: "number",
        align: "right",
        headerAlign: "right",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, sx: { color: "#EF4444" }, children: params.value ?? 0 })
      },
      {
        field: "min_stock_level",
        headerName: "Min Level",
        width: 110,
        type: "number",
        align: "right",
        headerAlign: "right",
        valueGetter: (value, row) => row.product?.min_stock_level ?? 0,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: params.value })
      },
      {
        field: "deficit",
        headerName: "Deficit",
        width: 120,
        type: "number",
        align: "right",
        headerAlign: "right",
        valueGetter: (value, row) => {
          const min = row.product?.min_stock_level ?? 0;
          return Math.max(0, min - (row.available_quantity ?? 0));
        },
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 700, sx: { color: "#F97316" }, children: [
          "-",
          params.value
        ] })
      },
      {
        field: "stock_level",
        headerName: "Stock Level",
        width: 160,
        sortable: false,
        renderCell: (params) => {
          const available = params.row.available_quantity ?? 0;
          const min = params.row.product?.min_stock_level ?? 0;
          const pct = min > 0 ? Math.min(100, Math.round(available / min * 100)) : 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              spacing: 0.5,
              sx: { width: "100%", pr: 1, justifyContent: "center", height: "100%" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", justifyContent: "space-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", children: [
                  pct,
                  "% of min"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LinearProgress,
                  {
                    variant: "determinate",
                    value: pct,
                    sx: {
                      height: 6,
                      borderRadius: 3,
                      bgcolor: "rgba(239,68,68,0.12)",
                      "& .MuiLinearProgress-bar": { bgcolor: pct < 30 ? "#EF4444" : "#F97316" }
                    }
                  }
                )
              ]
            }
          );
        }
      },
      {
        field: "cost_price",
        headerName: "Cost",
        width: 100,
        type: "number",
        align: "right",
        headerAlign: "right",
        valueGetter: (value, row) => row.product?.cost_price ?? 0,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(params.value) })
      },
      {
        field: "retail_price",
        headerName: "Retail",
        width: 100,
        type: "number",
        align: "right",
        headerAlign: "right",
        valueGetter: (value, row) => row.product?.retail_price ?? 0,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fCurrency(params.value) })
      }
    ],
    []
  );
}
function LowStockTable({ lowStockProducts, lowStockLoading }) {
  const router = useRouter();
  const columns = useLowStockColumns();
  const { settings } = useToolbarSettings();
  const [paginationModel, setPaginationModel] = reactExports.useState({ page: 0, pageSize: 15 });
  const rows = lowStockProducts.map((item) => ({
    ...item,
    id: item.product?.id
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      sx: {
        minHeight: 640,
        flexGrow: { md: 1 },
        display: { md: "flex" },
        // height: { xs: 800, md: '1px' },
        flexDirection: { md: "column" }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        DataGrid,
        {
          rows,
          columns,
          getRowId: (row) => row.id,
          loading: lowStockLoading,
          paginationModel,
          onPaginationModelChange: setPaginationModel,
          pageSizeOptions: [10, 15, 25, 50],
          onRowClick: (params) => router.push(paths.dashboard.products.details(params.row.product?.id)),
          slots: {
            // toolbar: () => null,
            noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
              EmptyContent,
              {
                title: "No low stock items",
                description: "All products are above their minimum stock levels"
              }
            ),
            noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found" })
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
            }
          }
        }
      )
    }
  );
}
const LOW_STOCK_KPI_CONFIGS = [
  {
    key: "itemsCount",
    label: "Items Below Minimum",
    icon: "solar:alarm-bold-duotone",
    color: "#EF4444",
    bgColor: "rgba(239,68,68,0.08)"
  },
  {
    key: "totalDeficit",
    label: "Total Stock Deficit",
    icon: "solar:minus-circle-bold-duotone",
    color: "#F97316",
    bgColor: "rgba(249,115,22,0.08)"
  },
  {
    key: "valueGap",
    label: "Estimated Value Gap",
    icon: "solar:tag-price-bold-duotone",
    color: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.08)"
  }
];
function LowStockView() {
  const { branches, primaryBranch, hasMultipleBranches } = useUserBranches();
  const [selectedBranchId, setSelectedBranchId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!selectedBranchId && primaryBranch?.id) {
      setSelectedBranchId(primaryBranch.id);
    }
  }, [selectedBranchId, primaryBranch]);
  const { lowStockProducts, lowStockLoading } = useGetLowStockProducts(selectedBranchId);
  const kpiValues = reactExports.useMemo(() => {
    const itemsCount = lowStockProducts.length;
    const totalDeficit = lowStockProducts.reduce((sum, item) => {
      const min = item.product?.min_stock_level ?? 0;
      const available = item.available_quantity ?? 0;
      return sum + Math.max(0, min - available);
    }, 0);
    const valueGap = lowStockProducts.reduce((sum, item) => {
      const min = item.product?.min_stock_level ?? 0;
      const available = item.available_quantity ?? 0;
      const deficit = Math.max(0, min - available);
      return sum + deficit * (item.product?.cost_price ?? 0);
    }, 0);
    return { itemsCount, totalDeficit, valueGap };
  }, [lowStockProducts]);
  const kpiCards = LOW_STOCK_KPI_CONFIGS.map((cfg) => {
    let value;
    if (cfg.key === "itemsCount") value = String(kpiValues.itemsCount);
    else if (cfg.key === "totalDeficit") value = `${kpiValues.totalDeficit} units`;
    else value = fCurrency(kpiValues.valueGap);
    let note;
    if (cfg.key === "itemsCount") note = "Products requiring restocking";
    else if (cfg.key === "totalDeficit") note = "Total units needed to reach minimums";
    else note = "Cost to restore all items to min level";
    return { ...cfg, value, note };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Low Stock",
        sx: { mb: 3 },
        action: hasMultipleBranches && /* @__PURE__ */ jsxRuntimeExports.jsx(
          BranchSelect,
          {
            branches,
            value: selectedBranchId ?? "",
            onChange: setSelectedBranchId
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCardGrid, { cards: kpiCards, loading: lowStockLoading, columns: { xs: 12, sm: 4 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LowStockTable, { lowStockProducts, lowStockLoading })
  ] });
}
const metadata = { title: `Low Stock | Inventory - ${CONFIG.appName}` };
function LowStockPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LowStockView, {})
  ] });
}
export {
  LowStockPage as default
};
