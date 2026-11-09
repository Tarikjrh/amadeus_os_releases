import { r as reactExports, u as useSWR, s as supabase, j as jsxRuntimeExports, ap as Tabs, aq as Tab, L as Label, a as Iconify, d as Button, Y as Link, Z as RouterLink, a3 as paths, S as Stack, B as Box, an as fDate, aw as fTime, T as Tooltip, a0 as fCurrency, bm as ListItemText, a6 as useUserBranches, bY as usePermissions, bK as useSearchParams, h as dayjs, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, bq as gridClasses, C as CONFIG } from "./index-B08HRm4A.js";
import { u as useGetSales, a as useGetSalesCounts } from "./sale-service-CWyXC78v.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { a as ToolbarContainer, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton, b as ToolbarLeftPanel } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { D as DatePicker } from "./DatePicker-D3PAml74.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { T as ToggleButtonGroup } from "./ToggleButtonGroup-CJXz0-w5.js";
import { b as ToggleButton } from "./ToggleButton-D4MfeHtt.js";
import { T as Toolbar, D as DataGrid } from "./DataGrid-HciY9Sqp.js";
import { I as ITEMS_COLUMN_SHOW_LIMIT, g as getItemLabel, a as getItemFullName, b as getItemColor } from "./sale-total-summary-BEkk9j-2.js";
import "./pos-payment-dialog-D68iINOQ.js";
import "./ExportPrint-CAqo1wR3.js";
import "./render-location-type-B-TZb61z.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./index-Di_Bgabu.js";
import "./Dialog-C5RfKkDi.js";
import "./toPropertyKey-BRoQIA86.js";
import "./with-selector-ClfCuV5M.js";
import "./Skeleton-BC-WlQQE.js";
import "./Autocomplete-BReuRGf-.js";
import "./TablePagination-BOFMLJYr.js";
import "./TableCell-B_5fJIbm.js";
import "./Checkbox-Br8xlIAK.js";
import "./react-pdf.browser-DOUvi50W.js";
import "./services-UhlA7T7c.js";
import "./client-service-swr-DnF01Wop.js";
import "./staff-service-CYDKVOm2.js";
import "./index-C4JOln-R.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./DialogTitle-B3pdxJpB.js";
import "./DialogContentText-XMbzPiIe.js";
import "./useStaffData-BIkbeKJv.js";
function useDebounce(value, delay = 600) {
  const [debouncedValue, setDebouncedValue] = reactExports.useState(value);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}
const CACHE_TTL = 5 * 60 * 1e3;
async function fetchAppSetting(key) {
  const { data, error } = await supabase.from("app_settings").select("value").eq("key", key).single();
  if (error) throw error;
  return data?.value ?? null;
}
function useAppSetting(key, defaultValue) {
  const { data } = useSWR(`app_settings/${key}`, () => fetchAppSetting(key), {
    revalidateOnFocus: false,
    dedupingInterval: CACHE_TTL,
    fallbackData: defaultValue
  });
  return data ?? defaultValue;
}
const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "pending", label: "Pending" },
  { value: "cancelled", label: "Cancelled" },
  { value: "refunded", label: "Refunded" }
];
const ITEM_TYPE_OPTIONS = [
  { value: "all", label: "All" },
  { value: "service", label: "Services" },
  { value: "product", label: "Products" },
  { value: "package_deposit", label: "Packages" },
  { value: "discount_plan_deposit", label: "Discount Plans" }
];
function SalesTableToolbar({
  filters,
  onFilters,
  dateError,
  isFiltered,
  onResetFilters,
  salesCount,
  settings,
  onChangeSettings,
  status,
  onFilterStatus,
  counts,
  branches = [],
  hasMultipleBranches = false,
  includeLegacy = false,
  canToggleLegacy = false,
  onToggleLegacy
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { sx: { pt: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: status, onChange: onFilterStatus, sx: {}, children: STATUS_OPTIONS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tab,
      {
        iconPosition: "end",
        value: tab.value,
        label: tab.label,
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            variant: (tab.value === "all" || tab.value === status) && "filled" || "soft",
            color: tab.value === "completed" && "success" || tab.value === "pending" && "warning" || tab.value === "cancelled" && "error" || tab.value === "refunded" && "info" || "default",
            children: counts?.[tab.value] ?? 0
          }
        )
      },
      tab.value
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarColumnsButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarSettingsButton, { settings, onChangeSettings }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarLeftPanel, { sx: { flexGrow: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DatePicker,
        {
          label: "Start date",
          value: filters.startDate,
          onChange: (v) => onFilters("startDate", v),
          slotProps: { textField: { size: "small", fullWidth: true } },
          sx: { maxWidth: { md: 180 }, flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DatePicker,
        {
          label: "End date",
          value: filters.endDate,
          onChange: (v) => onFilters("endDate", v),
          slotProps: { textField: { size: "small", fullWidth: true, error: dateError } },
          sx: { maxWidth: { md: 180 }, flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          size: "small",
          fullWidth: true,
          value: filters.search,
          onChange: (e) => onFilters("search", e.target.value),
          placeholder: "Search by sale #, customer...",
          InputProps: {
            startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill", sx: { color: "text.disabled" } }) })
          }
        }
      ),
      hasMultipleBranches && /* @__PURE__ */ jsxRuntimeExports.jsx(
        BranchSelect,
        {
          branches,
          value: filters.branchId || "all",
          onChange: (v) => onFilters("branchId", v),
          sx: { maxWidth: { md: 200 }, flexShrink: 0 }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarLeftPanel, { sx: { flexGrow: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          size: "small",
          fullWidth: true,
          value: filters.itemSearch,
          onChange: (e) => onFilters("itemSearch", e.target.value),
          placeholder: "Filter by product or service name...",
          InputProps: {
            startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:bag-bold", sx: { color: "text.disabled" } }) }),
            endAdornment: filters.itemSearch ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Iconify,
              {
                icon: "eva:close-fill",
                sx: { color: "text.disabled", cursor: "pointer" },
                onClick: () => onFilters("itemSearch", "")
              }
            ) }) : null
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ToggleButtonGroup,
          {
            size: "small",
            exclusive: true,
            value: filters.itemType,
            onChange: (_, v) => {
              if (v !== null) onFilters("itemType", v);
            },
            sx: { flexShrink: 0 },
            children: ITEM_TYPE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButton, { value: opt.value, children: opt.label }, opt.value))
          }
        ),
        canToggleLegacy && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "small",
            variant: includeLegacy ? "soft" : "outlined",
            color: includeLegacy ? "default" : "warning",
            onClick: onToggleLegacy,
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Iconify,
              {
                icon: includeLegacy ? "solar:clock-circle-bold" : "solar:clock-circle-linear"
              }
            ),
            sx: { flexShrink: 0 },
            children: includeLegacy ? "Legacy: On" : "Legacy: Off"
          }
        ),
        isFiltered && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "small",
            variant: "outlined",
            onClick: onResetFilters,
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:refresh-fill" }),
            children: "Reset"
          }
        )
      ] })
    ] })
  ] }) });
}
const useSaleColumns = ({ onDeleteRow, density }) => {
  const isCompact = density === "compact";
  const columns = reactExports.useMemo(
    () => [
      {
        field: "sale_number",
        headerName: "Sale #",
        width: 180,
        sortable: true,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            component: RouterLink,
            href: paths.dashboard.pos.saleDetails(params.id),
            style: { textDecoration: "none", color: "inherit", fontWeight: 600 },
            children: params.value
          }
        )
      },
      {
        field: "created_at",
        headerName: "Date",
        width: isCompact ? 160 : 120,
        type: "date",
        sortable: true,
        valueGetter: (value) => value ? new Date(value) : null,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: isCompact ? "row" : "column",
            spacing: isCompact ? 1 : 0.5,
            alignItems: isCompact ? "center" : "flex-start",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { typography: "body2" }, children: fDate(params.value) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { typography: isCompact ? "body2" : "caption", color: "text.secondary" }, children: fTime(params.value) })
            ]
          }
        )
      },
      {
        field: "client",
        headerName: "Customer",
        width: 200,
        filterable: false,
        valueGetter: (value) => value ? `${value.first_name} ${value.last_name}` : "Walk-in",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              typography: "body2",
              color: params.row.client ? "text.primary" : "text.disabled"
            },
            children: params.value
          }
        )
      },
      {
        field: "items",
        headerName: "Items",
        width: 220,
        sortable: false,
        filterable: false,
        valueGetter: (value) => value?.length || 0,
        renderCell: (params) => {
          const items = params.row.items || [];
          if (!items.length)
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { typography: "body2", color: "text.disabled" }, children: "—" });
          const shown = items.slice(0, ITEMS_COLUMN_SHOW_LIMIT);
          const rest = items.slice(ITEMS_COLUMN_SHOW_LIMIT);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, children: [
            shown.map((item, i) => {
              const label = getItemLabel(item);
              const fullName = getItemFullName(item);
              const truncated = label.length > 30 ? `${label.slice(0, 30)}…` : label;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: label.length > 30 ? fullName : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: getItemColor(item.item_type), children: truncated }) }, item.id ?? i);
            }),
            rest.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: rest.map(getItemFullName).join(", "), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { variant: "soft", color: "default", sx: { cursor: "default" }, children: [
              "+",
              rest.length,
              " more"
            ] }) })
          ] });
        }
      },
      {
        field: "promo",
        headerName: "Promo / Discount",
        width: 150,
        sortable: false,
        filterable: false,
        valueGetter: (_, row) => {
          const parts = [];
          if (row.discount_code) parts.push(`Code: ${row.discount_code.code}`);
          if (row.voucher) parts.push(`Voucher: ${row.voucher.code}`);
          if (row.manual_discount_amount > 0)
            parts.push(
              `Manual: ${row.manual_discount_value}${row.manual_discount_type === "percentage" ? "%" : "$"}`
            );
          if (row.cashback_redemption_amount > 0)
            parts.push(`Cashback: ${fCurrency(row.cashback_redemption_amount)}`);
          const planNames = [
            ...new Set(
              (row.plan_usages || []).map((u) => u.client_discount_plans?.discount_plan_templates?.name).filter(Boolean)
            )
          ];
          planNames.forEach((n) => parts.push(`Plan: ${n}`));
          return parts.join(", ") || null;
        },
        renderCell: (params) => {
          const row = params.row;
          const badges = [];
          if (row.discount_code)
            badges.push({ label: `Code: ${row.discount_code.code}`, color: "primary" });
          if (row.voucher)
            badges.push({ label: `Voucher: ${row.voucher.code}`, color: "secondary" });
          if (row.manual_discount_amount > 0)
            badges.push({
              label: `Manual ${row.manual_discount_value}${row.manual_discount_type === "percentage" ? "%" : "$"}`,
              color: "warning"
            });
          if (row.cashback_redemption_amount > 0)
            badges.push({
              label: `Cashback ${fCurrency(row.cashback_redemption_amount)}`,
              color: "info"
            });
          const planNames = [
            ...new Set(
              (row.plan_usages || []).map((u) => u.client_discount_plans?.discount_plan_templates?.name).filter(Boolean)
            )
          ];
          planNames.forEach((n) => badges.push({ label: n, color: "info" }));
          if (!badges.length)
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { typography: "body2", color: "text.disabled" }, children: "—" });
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, children: badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: b.color, children: b.label }, b.label)) });
        }
      },
      {
        field: "total_amount",
        headerName: "Total",
        width: 100,
        align: "right",
        headerAlign: "right",
        type: "number",
        valueGetter: (_, row) => row.total_amount || 0,
        sortable: true,
        renderCell: (params) => {
          const hasDiff = params.row.subtotal != params.row.total_amount;
          const hasPackageCoveredItems = params.row.items?.some(
            (item) => item.item_type === "service" && (item.paid_via_package === true || item.original_unit_price != null && (Number(item.line_total) < 0.01 || item.discount_amount >= item.original_unit_price))
          );
          const hasPlanDiscountItems = params.row.items?.some((item) => item.item_type === "discount_plan_deposit") || params.row.items?.some(
            (item) => item.item_type === "service" && item.original_unit_price != null && Number(item.line_total) >= 0.01 && Number(item.discount_amount) > 0
          );
          if (isCompact) {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { typography: "body2", fontWeight: "bold" }, children: fCurrency(params.value) }),
              hasDiff && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  sx: {
                    typography: "body2",
                    color: "text.disabled",
                    textDecoration: "line-through"
                  },
                  children: fCurrency(params.row.subtotal)
                }
              ),
              hasPackageCoveredItems && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Contains package-covered services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  variant: "soft",
                  color: "warning",
                  sx: { height: 18, fontSize: 10, cursor: "default" },
                  children: "PKG"
                }
              ) }),
              hasPlanDiscountItems && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Contains discount plan items or discounted services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  variant: "soft",
                  color: "info",
                  sx: { height: 18, fontSize: 10, cursor: "default" },
                  children: "PLAN"
                }
              ) })
            ] });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ListItemText,
            {
              primary: fCurrency(params.value),
              secondary: hasDiff ? fCurrency(params.row.subtotal) : hasPackageCoveredItems || hasPlanDiscountItems ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, children: [
                hasPackageCoveredItems && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Contains package-covered services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    variant: "soft",
                    color: "warning",
                    sx: { height: 18, fontSize: 10, cursor: "default" },
                    children: "PKG"
                  }
                ) }),
                hasPlanDiscountItems && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Contains discount plan items or discounted services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    variant: "soft",
                    color: "info",
                    sx: { height: 18, fontSize: 10, cursor: "default" },
                    children: "PLAN"
                  }
                ) })
              ] }) : null,
              slotProps: {
                primary: {
                  typography: "body2",
                  fontWeight: "bold"
                },
                secondary: {
                  typography: "body2",
                  fontWeight: "medium",
                  color: "text.disabled",
                  sx: { textDecoration: hasDiff ? "line-through" : "none" }
                }
              }
            }
          );
        }
      },
      {
        field: "payment_status",
        headerName: "Payment",
        width: 140,
        sortable: true,
        type: "singleSelect",
        valueOptions: [
          { value: "paid", label: "Paid" },
          { value: "partially_paid", label: "Partially Paid" },
          { value: "pending", label: "Pending" },
          { value: "refunded", label: "Refunded" }
        ],
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            variant: "soft",
            color: params.value === "paid" && "success" || params.value === "partially_paid" && "warning" || params.value === "pending" && "default" || params.value === "refunded" && "info" || "default",
            children: params.value?.replace("_", " ")
          }
        )
      },
      {
        field: "status",
        headerName: "Status",
        width: 100,
        flex: 1,
        sortable: true,
        type: "singleSelect",
        valueOptions: [
          { value: "completed", label: "Completed" },
          { value: "pending", label: "Pending" },
          { value: "cancelled", label: "Cancelled" },
          { value: "refunded", label: "Refunded" }
        ],
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            variant: "soft",
            color: params.value === "completed" && "success" || params.value === "pending" && "warning" || params.value === "cancelled" && "error" || params.value === "refunded" && "info" || "default",
            children: params.value
          }
        )
      },
      {
        field: "cashier",
        headerName: "Cashier",
        width: 180,
        sortable: false,
        filterable: false,
        valueGetter: (value) => value ? `${value.first_name} ${value.last_name}` : "—",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              typography: "body2",
              color: params.row.cashier ? "text.primary" : "text.disabled"
            },
            children: params.value
          }
        )
      }
    ],
    [isCompact]
  );
  return columns;
};
const HIDE_COLUMNS = {
  payment_status: false,
  cashier: false
};
const HIDE_COLUMNS_TOGGLABLE = ["actions"];
const defaultFilters = {
  search: "",
  status: "all",
  startDate: null,
  endDate: null,
  itemType: "all",
  itemSearch: "",
  branchId: "all"
};
const isValidDate = (date) => Boolean(date) && (date.isValid?.() ?? !Number.isNaN(date.valueOf()));
function SalesListView() {
  const toolbarOptions = useToolbarSettings();
  const { branches, hasMultipleBranches, primaryBranch } = useUserBranches();
  const { hasAnyRole } = usePermissions();
  const legacyRoles = useAppSetting("legacy_sales_roles", ["admin", "manager"]);
  const canToggleLegacy = hasAnyRole(legacyRoles);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = reactExports.useState(() => ({
    ...defaultFilters,
    search: searchParams.get("search") ?? defaultFilters.search,
    status: searchParams.get("status") ?? defaultFilters.status,
    startDate: searchParams.get("startDate") ? dayjs(searchParams.get("startDate")) : null,
    endDate: searchParams.get("endDate") ? dayjs(searchParams.get("endDate")) : null,
    itemType: searchParams.get("itemType") ?? defaultFilters.itemType,
    itemSearch: searchParams.get("itemSearch") ?? defaultFilters.itemSearch,
    branchId: searchParams.get("branchId") ?? defaultFilters.branchId
  }));
  const [includeLegacy, setIncludeLegacy] = reactExports.useState(
    () => canToggleLegacy && localStorage.getItem("sales_include_legacy") !== "false"
  );
  reactExports.useEffect(() => {
    if (primaryBranch?.id && !hasMultipleBranches) {
      setFilters(
        (prev) => prev.branchId === "all" ? { ...prev, branchId: primaryBranch.id } : prev
      );
    }
  }, [primaryBranch?.id, hasMultipleBranches]);
  const [paginationModel, setPaginationModel] = reactExports.useState({
    page: Number(searchParams.get("page")) || 0,
    pageSize: Number(searchParams.get("pageSize")) || 25
  });
  const [sortModel, setSortModel] = reactExports.useState([
    {
      field: searchParams.get("sortField") || "created_at",
      sort: searchParams.get("sortDir") || "desc"
    }
  ]);
  const [filterModel, setFilterModel] = reactExports.useState(() => {
    let items = [];
    try {
      items = JSON.parse(searchParams.get("columnFilters") ?? "[]");
    } catch {
      items = [];
    }
    return { items };
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = reactExports.useState(HIDE_COLUMNS);
  reactExports.useEffect(() => {
    const params = new URLSearchParams();
    if (filters.search) params.set("search", filters.search);
    if (filters.status !== defaultFilters.status) params.set("status", filters.status);
    if (isValidDate(filters.startDate)) params.set("startDate", filters.startDate.toISOString());
    if (isValidDate(filters.endDate)) params.set("endDate", filters.endDate.toISOString());
    if (filters.itemType !== defaultFilters.itemType) params.set("itemType", filters.itemType);
    if (filters.itemSearch) params.set("itemSearch", filters.itemSearch);
    if (filters.branchId !== defaultFilters.branchId) params.set("branchId", String(filters.branchId));
    if (paginationModel.page) params.set("page", String(paginationModel.page));
    if (paginationModel.pageSize !== 25) params.set("pageSize", String(paginationModel.pageSize));
    const [currentSort] = sortModel;
    if (currentSort && (currentSort.field !== "created_at" || currentSort.sort !== "desc")) {
      params.set("sortField", currentSort.field);
      params.set("sortDir", currentSort.sort);
    }
    if (filterModel.items?.length) params.set("columnFilters", JSON.stringify(filterModel.items));
    setSearchParams(params, { replace: true });
  }, [filters, paginationModel, sortModel, filterModel, setSearchParams]);
  const columns = useSaleColumns({ density: toolbarOptions.settings.density });
  const debouncedSearch = useDebounce(filters.search, 600);
  const debouncedItemSearch = useDebounce(filters.itemSearch, 600);
  const dateError = reactExports.useMemo(() => {
    if (filters.startDate && !isValidDate(filters.startDate)) return true;
    if (filters.endDate && !isValidDate(filters.endDate)) return true;
    return isValidDate(filters.startDate) && isValidDate(filters.endDate) ? filters.startDate.valueOf() > filters.endDate.valueOf() : false;
  }, [filters.startDate, filters.endDate]);
  const startDateISO = reactExports.useMemo(
    () => isValidDate(filters.startDate) ? (filters.startDate.startOf?.("day") ?? filters.startDate).toISOString?.() ?? filters.startDate.toDate?.()?.toISOString() : void 0,
    [filters.startDate]
  );
  const endDateISO = reactExports.useMemo(
    () => isValidDate(filters.endDate) ? (filters.endDate.endOf?.("day") ?? filters.endDate).toISOString?.() ?? filters.endDate.toDate?.()?.toISOString() : void 0,
    [filters.endDate]
  );
  const resolvedBranchId = filters.branchId === "all" ? void 0 : filters.branchId;
  const { sales, salesLoading, totalCount } = useGetSales({
    branchId: resolvedBranchId,
    startDate: startDateISO,
    endDate: endDateISO,
    status: filters.status,
    search: debouncedSearch,
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sortField: sortModel[0]?.field ?? "created_at",
    sortOrder: sortModel[0]?.sort ?? "desc",
    itemType: filters.itemType,
    itemSearch: debouncedItemSearch,
    columnFilters: filterModel.items,
    excludeLegacy: !includeLegacy
  });
  const { counts } = useGetSalesCounts({
    branchId: resolvedBranchId,
    startDate: startDateISO,
    endDate: endDateISO,
    search: debouncedSearch,
    excludeLegacy: !includeLegacy
  });
  const handleFilters = reactExports.useCallback((name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleResetFilters = reactExports.useCallback(() => {
    setFilters(defaultFilters);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const isFiltered = reactExports.useMemo(
    () => !!filters.search || !!filters.startDate || !!filters.endDate || filters.status !== "all" || filters.itemType !== "all" || !!filters.itemSearch || filters.branchId !== "all",
    [
      filters.search,
      filters.startDate,
      filters.endDate,
      filters.status,
      filters.itemType,
      filters.itemSearch,
      filters.branchId
    ]
  );
  const handleFilterStatus = reactExports.useCallback(
    (event, newValue) => {
      handleFilters("status", newValue);
    },
    [handleFilters]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Sales History",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            component: RouterLink,
            href: paths.dashboard.pos.root,
            variant: "contained",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
            children: "New Sale"
          }
        ),
        sx: { mb: { xs: 3, md: 5 } }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        sx: {
          minHeight: 640,
          flexGrow: { md: 1 },
          display: { md: "flex" },
          flexDirection: { md: "column" }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DataGrid,
          {
            ...toolbarOptions.settings,
            rows: sales,
            columns,
            loading: salesLoading,
            paginationModel,
            onPaginationModelChange: setPaginationModel,
            columnVisibilityModel,
            onColumnVisibilityModelChange: (newModel) => setColumnVisibilityModel(newModel),
            sortModel,
            pageSizeOptions: [10, 25, 50, 100],
            rowCount: totalCount,
            paginationMode: "server",
            sortingMode: "server",
            filteringMode: "server",
            filterModel,
            onFilterModelChange: (model) => {
              setFilterModel(model);
              setPaginationModel((prev) => ({ ...prev, page: 0 }));
            },
            onSortModelChange: (model) => {
              setSortModel(model);
              setPaginationModel((prev) => ({ ...prev, page: 0 }));
            },
            disableRowSelectionOnClick: true,
            disableColumnMenu: true,
            slots: {
              noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No sales found", sx: { height: 1 } }),
              noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found", sx: { height: 1 } }),
              toolbar: SalesTableToolbar
            },
            slotProps: {
              toolbar: {
                filters,
                onFilters: handleFilters,
                dateError,
                isFiltered,
                onResetFilters: handleResetFilters,
                salesCount: sales.length,
                settings: toolbarOptions.settings,
                onChangeSettings: toolbarOptions.onChangeSettings,
                status: filters.status,
                onFilterStatus: handleFilterStatus,
                counts,
                branches,
                hasMultipleBranches,
                includeLegacy,
                canToggleLegacy,
                onToggleLegacy: canToggleLegacy ? () => setIncludeLegacy((prev) => {
                  const next = !prev;
                  localStorage.setItem("sales_include_legacy", String(next));
                  return next;
                }) : void 0
              },
              columnsManagement: {
                getTogglableColumns: () => columns.filter((col) => !HIDE_COLUMNS_TOGGLABLE.includes(col.field)).map((col) => col.field)
              }
            },
            sx: {
              flexGrow: 1,
              [`& .${gridClasses.cell}`]: { display: "flex", alignItems: "center" },
              "& .MuiDataGrid-cell:focus": {
                outline: "none"
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "action.hover"
              }
            }
          }
        )
      }
    )
  ] });
}
const metadata = { title: `Sales | Dashboard - ${CONFIG.appName}` };
function SalesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SalesListView, {})
  ] });
}
export {
  SalesPage as default
};
