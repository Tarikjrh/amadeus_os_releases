import { a0 as fCurrency, aI as fShortenNumber, j as jsxRuntimeExports, B as Box, c as Typography, y as Card, S as Stack, a as Iconify, an as fDate, K as Divider, r as reactExports, a7 as LoadingScreen, a4 as DashboardContent, d as Button, ao as CustomBreadcrumbs, ax as Alert, m as mutate, L as Label, Z as RouterLink, a3 as paths, e as useParams, C as CONFIG } from "./index-B08HRm4A.js";
import { f as formatPhoneNumberIntl } from "./index-C4JOln-R.js";
import { d as useSupplier, e as useSupplierStats, f as useGetProductsBySupplier } from "./supplier-service-CvoEEgb8.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { K as KpiCardGrid } from "./KpiCard-D7DSr9FT.js";
import { C as CardHeader } from "./CardHeader-DCwzSIO8.js";
import { C as CardContent } from "./CardContent-tUS7qwlT.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
import { S as SupplierCreateEditDialog } from "./supplier-create-edit-dialog-Cwzvdm1H.js";
import { D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./TextField-CIuP940C.js";
import "./form-provider-u_wAFv-h.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./with-selector-ClfCuV5M.js";
import "./InputAdornment-BqZyQBIE.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./Dialog-C5RfKkDi.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./schema-utils-CG9_JlGr.js";
import "./schemas-BVeYYbTr.js";
import "./DialogTitle-B3pdxJpB.js";
import "./ExportPrint-CAqo1wR3.js";
import "./toPropertyKey-BRoQIA86.js";
import "./TablePagination-BOFMLJYr.js";
import "./TableCell-B_5fJIbm.js";
import "./ToggleButton-D4MfeHtt.js";
function SupplierStatsSection({ stats, loading }) {
  const purchasingKpis = [
    {
      label: "Total Spent",
      value: fCurrency(stats?.total_amount_spent ?? 0),
      icon: "solar:dollar-minimalistic-bold-duotone",
      color: "#3B82F6",
      bgColor: "background.neutral",
      note: "From confirmed receipts"
    },
    {
      label: "Stock Receipts",
      value: stats?.total_receipts ?? 0,
      icon: "solar:clipboard-list-bold-duotone",
      color: "#F59E0B",
      bgColor: "background.neutral"
    },
    {
      label: "Avg Product Cost",
      value: fCurrency(stats?.avg_cost_price ?? 0),
      icon: "solar:tag-price-bold-duotone",
      color: "#8B5CF6",
      bgColor: "background.neutral"
    },
    {
      label: "Units Received",
      value: fShortenNumber(stats?.total_units_received ?? 0),
      icon: "solar:box-bold-duotone",
      color: "#10B981",
      bgColor: "background.neutral"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "Purchasing Summary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      KpiCardGrid,
      {
        cards: purchasingKpis,
        loading,
        columns: { xs: 12, sm: 6, md: 3 },
        sx: { mb: 2.5 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Purchasing Insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { pt: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", spacing: 2, sx: { p: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                width: 44,
                height: 44,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1.5,
                bgcolor: "background.neutral"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Iconify,
                {
                  icon: "solar:calendar-bold-duotone",
                  width: 24,
                  sx: { color: "#3B82F6" }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Last Order Date" }),
            loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 120, height: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { mt: 0.25 }, children: stats?.last_order_date ? fDate(stats.last_order_date) : "—" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Divider,
            {
              orientation: "vertical",
              sx: { display: { xs: "none", sm: "block" }, height: "100%", position: "absolute" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { display: { xs: "block", sm: "none" } } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", spacing: 2, sx: { p: 2 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 1.5,
                  bgcolor: "background.neutral"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:star-bold-duotone", width: 24, sx: { color: "#F59E0B" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Most Bought Product" }),
              loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 150, height: 24 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 80, height: 16 })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { mt: 0.25 }, children: stats?.most_bought_product_name || "—" }),
                stats?.most_bought_product_qty > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                  fShortenNumber(stats.most_bought_product_qty),
                  " units ordered total"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
function SupplierDetailsView({ supplierId }) {
  const { supplier, supplierLoading, supplierError } = useSupplier(supplierId);
  const { stats, statsLoading } = useSupplierStats(supplierId);
  const [openEdit, setOpenEdit] = reactExports.useState(false);
  const [paginationModel, setPaginationModel] = reactExports.useState({ page: 0, pageSize: 10 });
  const { products, productsLoading, totalCount } = useGetProductsBySupplier(
    supplierId,
    { page: paginationModel.page, pageSize: paginationModel.pageSize }
  );
  reactExports.useMemo(
    () => [
      {
        label: "Products",
        value: stats?.total_products ?? 0,
        icon: "solar:box-bold-duotone",
        color: "#3B82F6",
        bgColor: "background.neutral"
      },
      {
        label: "Active",
        value: stats?.active_products ?? 0,
        icon: "solar:check-circle-bold-duotone",
        color: "#22C55E",
        bgColor: "background.neutral"
      },
      {
        label: "Inactive",
        value: stats?.inactive_products ?? 0,
        icon: "solar:close-circle-bold-duotone",
        color: "#EF4444",
        bgColor: "background.neutral"
      }
    ],
    [stats]
  );
  if (supplierLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { message: "Loading supplier information..." });
  if (supplierError || !supplier) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        title: "Supplier not found",
        description: "The supplier you're looking for doesn't exist or has been deleted.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { href: "/dashboard/inventory/suppliers", variant: "contained", children: "Back to Suppliers" })
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        backHref: "back",
        heading: supplier.name,
        links: [
          { name: "Dashboard", href: "/dashboard" },
          { name: "Inventory", href: "/dashboard/inventory" },
          { name: "Suppliers" },
          { name: supplier.name }
        ],
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
            onClick: () => setOpenEdit(true),
            children: "Edit"
          }
        ) }),
        sx: { mb: 3 }
      }
    ),
    !supplier.is_active && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", sx: { mb: 3 }, children: "Supplier is inactive, this means they are not currently supplying any products. You can reactivate them to resume business." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SupplierCreateEditDialog,
      {
        open: openEdit,
        onClose: () => setOpenEdit(false),
        supplier,
        onSuccess: () => {
          if (supplier && supplier.id) {
            mutate(`supplier-single-${supplierId}`);
            mutate("app-suppliers");
            mutate(`supplier-products-${supplierId}-0-10-{"filters":{}}`);
          }
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SupplierStatsSection, { stats, loading: statsLoading }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, mt: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { xs: 12, md: 8, size: { xs: 12, md: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardHeader,
          {
            title: "Supplier Information",
            subheader: supplier.contact_name || supplier.email || ""
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { mt: 0.5 }, children: supplier.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mt: 0.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: supplier.is_active ? "success" : "error", children: supplier.is_active ? "Active" : "Inactive" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { mt: 0.5 }, children: supplier.email || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { mt: 0.5 }, children: formatPhoneNumberIntl(supplier.phone) || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 2 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: supplier.notes || "No notes provided" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { xs: 12, md: 4, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Contact", subheader: supplier.contact_name || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { mt: 0.5 }, children: supplier.address || "—" }),
          supplier.city || supplier.country ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 1 }, children: [supplier.city, supplier.country].filter(Boolean).join(", ") }) : null
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        sx: {
          mt: 3,
          minHeight: 640,
          flexGrow: { md: 1 },
          display: { md: "flex" },
          // height: { xs: 800, md: '1px' },
          flexDirection: { md: "column" }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DataGrid,
          {
            autoHeight: true,
            rows: products,
            columns: [
              {
                field: "name",
                headerName: "Product",
                flex: 1,
                minWidth: 240,
                renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      component: RouterLink,
                      href: paths.dashboard.products.details(params.row.id),
                      variant: "body2",
                      fontWeight: 600,
                      noWrap: true,
                      sx: {
                        color: "text.primary",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" }
                      },
                      children: params.value
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: [
                    params.row.sku || "—",
                    " • ",
                    params.row.category || "—"
                  ] })
                ] })
              },
              { field: "brand", headerName: "Brand", width: 140 },
              {
                field: "retail_price",
                headerName: "Retail",
                width: 110,
                renderCell: (params) => params.value ? fCurrency(params.value) : "—"
              },
              { field: "totalAvailable", headerName: "Available", width: 120 }
            ],
            loading: productsLoading,
            paginationModel,
            pageSizeOptions: [10, 25, 50],
            paginationMode: "server",
            rowCount: totalCount,
            onPaginationModelChange: (model) => setPaginationModel(model),
            getRowId: (row) => row.id,
            disableRowSelectionOnClick: true,
            slots: {
              toolbar: () => null
            }
          }
        )
      }
    )
  ] });
}
const metadata = { title: `Supplier Details | Dashboard - ${CONFIG.appName}` };
function SupplierDetailsPage() {
  const { id = "" } = useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SupplierDetailsView, { supplierId: id })
  ] });
}
export {
  SupplierDetailsPage as default
};
