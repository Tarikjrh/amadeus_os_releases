import { a6 as useUserBranches, r as reactExports, an as fDate, j as jsxRuntimeExports, a4 as DashboardContent, ao as CustomBreadcrumbs, a3 as paths, y as Card, B as Box, b as CircularProgress, S as Stack, c as Typography, a0 as fCurrency, L as Label, a as Iconify, ap as Tabs, aq as Tab, a2 as Chip, ar as Scrollbar, as as fDateTime, Z as RouterLink, I as IconButton, C as CONFIG } from "./index-B08HRm4A.js";
import { u as useGetIncomeSummary } from "./income-service-rDNYCD1M.js";
import { a as useGetClientDiscountPlanDeposits } from "./discount-plan-service-DWSzNOBf.js";
import { useGetClientPackagesDeposits, formatPackageMonth } from "./package-service-U57UHzc2.js";
import "./styles-Ddj8daWs.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { g as getPresetDates, D as DateRangeControls } from "./getPresetDates-BdaDk_3_.js";
import { P as PAYMENT_METHOD_LABELS } from "./income-overview.constants-ByoLvwUg.js";
import { D as DEPOSIT_STATUS_LABEL, a as DEPOSIT_STATUS_COLOR, P as PACKAGE_STATUS_COLOR, b as DISCOUNT_PLAN_STATUS_COLOR, S as STATUS_TABS, c as PACKAGE_COMMISSION_COLOR } from "./deposits.contants-CkpPYQO7.js";
import { C as CardHeader } from "./CardHeader-DCwzSIO8.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { T as TablePagination } from "./TablePagination-BOFMLJYr.js";
import "./TextField-CIuP940C.js";
import "./with-selector-ClfCuV5M.js";
import "./render-location-type-B-TZb61z.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./index-Di_Bgabu.js";
import "./InputAdornment-BqZyQBIE.js";
import "./Dialog-C5RfKkDi.js";
function DepositsListView() {
  const { branches, primaryBranch, hasMultipleBranches } = useUserBranches();
  const organizationId = primaryBranch?.organization_id ?? null;
  const allBranchIds = reactExports.useMemo(() => branches.map((b) => b.id).filter(Boolean), [branches]);
  const [selectedBranchId, setSelectedBranchId] = reactExports.useState("all");
  const branchIds = reactExports.useMemo(
    () => selectedBranchId === "all" ? allBranchIds : [selectedBranchId],
    [selectedBranchId, allBranchIds]
  );
  const [preset, setPreset] = reactExports.useState("month");
  const [customStart, setCustomStart] = reactExports.useState(null);
  const [customEnd, setCustomEnd] = reactExports.useState(null);
  const [statusTab, setStatusTab] = reactExports.useState("all");
  const [page, setPage] = reactExports.useState(0);
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(25);
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
  const handlePreset = reactExports.useCallback((value) => {
    setPreset(value);
    setCustomStart(null);
    setCustomEnd(null);
    setPage(0);
  }, []);
  const { incomeData, incomeLoading } = useGetIncomeSummary({
    branchIds,
    organizationId,
    startDate: dateRange.start.toISOString(),
    endDate: dateRange.end.toISOString()
  });
  const { packageDeposits, packageDepositsLoading } = useGetClientPackagesDeposits(
    organizationId,
    branchIds,
    dateRange.start.toISOString(),
    dateRange.end.toISOString()
  );
  const { planDeposits, planDepositsLoading } = useGetClientDiscountPlanDeposits(
    organizationId,
    branchIds,
    dateRange.start.toISOString(),
    dateRange.end.toISOString()
  );
  const allDeposits = reactExports.useMemo(() => incomeData?.depositRecords || [], [incomeData]);
  const depositSummary = incomeData?.deposits;
  const filteredDeposits = reactExports.useMemo(() => {
    if (statusTab === "all" || statusTab === "appointment_deposits") return allDeposits;
    return allDeposits.filter((d) => d.status === statusTab);
  }, [allDeposits, statusTab]);
  const combinedDeposits = reactExports.useMemo(() => {
    const appt = allDeposits.map((d) => ({
      _type: "appointment",
      _sortDate: d.paid_at,
      id: d.id,
      date: d.paid_at,
      clientName: d.client ? `${d.client.first_name} ${d.client.last_name}` : "—",
      description: d.appointment?.appointment_date ? fDate(d.appointment.appointment_date) : "—",
      amount: d.amount,
      status: d.status,
      statusColor: DEPOSIT_STATUS_COLOR[d.status] || "default",
      statusLabel: DEPOSIT_STATUS_LABEL[d.status] || d.status,
      extra: d
    }));
    const pkgs = packageDeposits.map((p) => ({
      _type: "package",
      _sortDate: p.created_at,
      id: p.id,
      date: p.created_at,
      clientName: p.client_profiles ? `${p.client_profiles.first_name} ${p.client_profiles.last_name}` : "—",
      description: p.package_templates?.name ?? "—",
      amount: p.price_paid,
      status: p.status,
      statusColor: PACKAGE_STATUS_COLOR[p.status] || "default",
      statusLabel: p.status,
      extra: p
    }));
    const plans = planDeposits.map((p) => ({
      _type: "discount_plan",
      _sortDate: p.created_at,
      id: p.id,
      date: p.created_at,
      clientName: p.client_profiles ? `${p.client_profiles.first_name} ${p.client_profiles.last_name}` : "—",
      description: p.discount_plan_templates?.name ?? "—",
      amount: p.price_paid,
      status: p.status,
      statusColor: DISCOUNT_PLAN_STATUS_COLOR[p.status] || "default",
      statusLabel: p.status,
      extra: p
    }));
    return [...appt, ...pkgs, ...plans].sort(
      (a, b) => new Date(b._sortDate) - new Date(a._sortDate)
    );
  }, [allDeposits, packageDeposits, planDeposits]);
  const tabCounts = reactExports.useMemo(
    () => ({
      all: combinedDeposits.length,
      appointment_deposits: allDeposits.length,
      held: depositSummary?.heldCount || 0,
      applied: depositSummary?.appliedCount || 0,
      refunded: depositSummary?.refundedCount || 0,
      forfeited: depositSummary?.forfeitedCount || 0,
      packages: packageDeposits.length,
      discount_plans: planDeposits.length
    }),
    [combinedDeposits.length, allDeposits.length, depositSummary, packageDeposits.length, planDeposits.length]
  );
  const paginatedCombined = combinedDeposits.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const paginatedDeposits = filteredDeposits.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const paginatedPackageDeposits = packageDeposits.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const paginatedPlanDeposits = planDeposits.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const packageDepositsTotal = packageDeposits.reduce(
    (sum, p) => sum + Number(p.price_paid || 0),
    0
  );
  const planDepositsTotal = planDeposits.reduce((sum, p) => sum + Number(p.price_paid || 0), 0);
  const grandTotal = (depositSummary?.totalCollected || 0) + packageDepositsTotal + planDepositsTotal;
  const apptTotal = depositSummary?.totalCollected || 0;
  const segmentWidths = grandTotal > 0 ? {
    appt: apptTotal / grandTotal * 100,
    pkg: packageDepositsTotal / grandTotal * 100,
    plan: planDepositsTotal / grandTotal * 100
  } : { appt: 33.3, pkg: 33.3, plan: 33.4 };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Deposits",
        links: [
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Income", href: paths.dashboard.income },
          { name: "Deposits" }
        ],
        sx: { mb: 3 },
        action: hasMultipleBranches && /* @__PURE__ */ jsxRuntimeExports.jsx(
          BranchSelect,
          {
            branches,
            value: selectedBranchId,
            onChange: setSelectedBranchId,
            allLabel: "All Locations"
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
        loading: incomeLoading
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { mb: 3, p: 3 }, children: incomeLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 28 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", mb: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", mb: 0.5, children: "Total deposits collected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", fontWeight: 500, children: fCurrency(grandTotal) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "info", sx: { mt: 0.5 }, children: preset === "custom" ? "Custom range" : preset.charAt(0).toUpperCase() + preset.slice(1) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", height: 8, borderRadius: 1, overflow: "hidden", gap: "2px", mb: 1.5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: `${segmentWidths.appt}%`, bgcolor: "#6366f1", borderRadius: "4px 0 0 4px", minWidth: grandTotal > 0 && apptTotal > 0 ? 4 : 0 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: `${segmentWidths.pkg}%`, bgcolor: "#8b5cf6", minWidth: grandTotal > 0 && packageDepositsTotal > 0 ? 4 : 0 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: `${segmentWidths.plan}%`, bgcolor: "#f59e0b", borderRadius: "0 4px 4px 0", minWidth: grandTotal > 0 && planDepositsTotal > 0 ? 4 : 0 } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 2.5, flexWrap: "wrap", mb: 2.5, children: [
        { color: "#6366f1", label: "Appointments", value: fCurrency(apptTotal) },
        { color: "#8b5cf6", label: "Packages", value: fCurrency(packageDepositsTotal) },
        { color: "#f59e0b", label: "Discount plans", value: fCurrency(planDepositsTotal) }
      ].map(({ color, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: 8, height: 8, borderRadius: "50%", bgcolor: color, flexShrink: 0 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 500, children: value })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { height: "0.5px", bgcolor: "divider", mb: 2 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1.5 }, children: [
        { label: "Held", value: fCurrency(depositSummary?.held || 0), note: `${depositSummary?.heldCount || 0} upcoming` },
        { label: "Applied", value: fCurrency(depositSummary?.applied || 0), note: `${depositSummary?.appliedCount || 0} completed` },
        { label: "Forfeited", value: fCurrency(depositSummary?.forfeited || 0), note: `${depositSummary?.forfeitedCount || 0} no-show` },
        { label: "Refunded", value: fCurrency(depositSummary?.refunded || 0), note: `${depositSummary?.refundedCount || 0} returned` }
      ].map(({ label, value, note }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { bgcolor: "background.neutral", borderRadius: 1.5, p: 1.5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", mb: 0.25, children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", fontWeight: 500, children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: note })
      ] }, label)) })
    ] }) }),
    statusTab !== "all" && statusTab !== "packages" && statusTab !== "discount_plans" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          mb: 3,
          p: 2,
          borderRadius: 2,
          bgcolor: "warning.lighter",
          border: "1px solid",
          borderColor: "warning.light",
          display: "flex",
          alignItems: "center",
          gap: 1.5
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: "solar:info-circle-bold-duotone",
              width: 20,
              sx: { color: "warning.dark", flexShrink: 0 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "warning.dark", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Commission note:" }),
            " Held deposits are not counted as earned revenue and generate no staff commission. Commission is only calculated once the service is performed and checked out at the POS."
          ] })
        ]
      }
    ),
    statusTab === "packages" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          mb: 3,
          p: 2,
          borderRadius: 2,
          bgcolor: "info.lighter",
          border: "1px solid",
          borderColor: "info.light",
          display: "flex",
          alignItems: "center",
          gap: 1.5
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: "solar:info-circle-bold-duotone",
              width: 20,
              sx: { color: "info.dark", flexShrink: 0 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "info.dark", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Package deposits:" }),
            " Payment is collected upfront when a client purchases a package. Each stylist's commission is calculated at month-end once the package expires, based on the number of visits they performed and their configured commission rate."
          ] })
        ]
      }
    ),
    statusTab === "discount_plans" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          mb: 3,
          p: 2,
          borderRadius: 2,
          bgcolor: "warning.lighter",
          border: "1px solid",
          borderColor: "warning.light",
          display: "flex",
          alignItems: "center",
          gap: 1.5
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: "solar:info-circle-bold-duotone",
              width: 20,
              sx: { color: "warning.dark", flexShrink: 0 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "warning.dark", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Discount plan deposits:" }),
            " Payment is collected upfront when a client purchases a discount plan. At month-end finalization, the deposit is split equally across all service visits and added to each sale's line total. Stylist commissions are calculated on the updated line total (discounted price + per-usage share)."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardHeader,
        {
          title: statusTab === "all" ? "All Deposits" : statusTab === "packages" ? "Package Deposits" : statusTab === "discount_plans" ? "Discount Plan Deposits" : "Appointment Deposits"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tabs,
        {
          value: statusTab,
          onChange: (_, val) => {
            setStatusTab(val);
            setPage(0);
          },
          sx: { px: 3, borderBottom: "1px solid", borderColor: "divider" },
          children: STATUS_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tab,
            {
              value: tab.value,
              label: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.75, alignItems: "center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label }),
                tabCounts[tab.value] > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: tabCounts[tab.value],
                    size: "small",
                    sx: { height: 18, fontSize: 11, "& .MuiChip-label": { px: 0.75 } }
                  }
                )
              ] })
            },
            tab.value
          ))
        }
      ),
      statusTab === "all" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 1e3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: incomeLoading || packageDepositsLoading || planDepositsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, align: "center", sx: { py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) }) }) : combinedDeposits.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, sx: { p: 0, border: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyContent,
          {
            title: "No deposits found",
            description: "No deposits match the selected date range.",
            sx: { py: 6 }
          }
        ) }) }) : paginatedCombined.map((row) => {
          const typeConfig = {
            appointment: { label: "Appointment", color: "#6366F1", icon: "solar:calendar-bold-duotone" },
            package: { label: "Package", color: "#8B5CF6", icon: "solar:box-bold-duotone" },
            discount_plan: { label: "Discount Plan", color: "#F59E0B", icon: "solar:tag-price-bold-duotone" }
          }[row._type];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDateTime(row.date) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: row.clientName }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: typeConfig.icon, width: 16, sx: { color: typeConfig.color, flexShrink: 0 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: typeConfig.color, fontWeight: 600 }, children: typeConfig.label })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: row.description }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(row.amount) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: row.statusColor, children: row.statusLabel }) })
          ] }, `${row._type}-${row.id}`);
        }) })
      ] }) }) : statusTab === "discount_plans" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 900 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date Collected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Valid Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Amount Paid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Uses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Commission" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: planDepositsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 8, align: "center", sx: { py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) }) }) : planDeposits.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 8, sx: { p: 0, border: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyContent,
          {
            title: "No discount plan deposits found",
            description: "No discount plans were sold in the selected date range.",
            sx: { py: 6 }
          }
        ) }) }) : paginatedPlanDeposits.map((plan) => {
          const clientName = plan.client_profiles ? `${plan.client_profiles.first_name} ${plan.client_profiles.last_name}` : "—";
          const usesDisplay = `${plan.uses_count} used`;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDateTime(plan.created_at) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: clientName }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
              plan.discount_plan_templates?.color && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: plan.discount_plan_templates.color,
                    flexShrink: 0
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: plan.discount_plan_templates?.name ?? "—" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: formatPackageMonth(plan.valid_month) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(plan.price_paid) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: usesDisplay }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: DISCOUNT_PLAN_STATUS_COLOR[plan.status] || "default",
                children: plan.status
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: plan.is_commission_finalized ? PACKAGE_COMMISSION_COLOR.finalized : PACKAGE_COMMISSION_COLOR.pending,
                children: plan.is_commission_finalized ? "Finalized" : "Pending"
              }
            ) })
          ] }, plan.id);
        }) })
      ] }) }) : statusTab === "packages" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 900 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date Collected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Package" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Valid Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Amount Paid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Uses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Commission" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: packageDepositsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 8, align: "center", sx: { py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) }) }) : packageDeposits.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 8, sx: { p: 0, border: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyContent,
          {
            title: "No package deposits found",
            description: "No packages were sold in the selected date range.",
            sx: { py: 6 }
          }
        ) }) }) : paginatedPackageDeposits.map((pkg) => {
          const clientName = pkg.client_profiles ? `${pkg.client_profiles.first_name} ${pkg.client_profiles.last_name}` : "—";
          const maxUses = pkg.max_uses_override ?? pkg.package_templates?.max_uses_per_month;
          const usesDisplay = maxUses != null ? `${pkg.uses_count} / ${maxUses}` : `${pkg.uses_count} / ∞`;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDateTime(pkg.created_at) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: clientName }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
              pkg.package_templates?.color && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: pkg.package_templates.color,
                    flexShrink: 0
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: pkg.package_templates?.name ?? "—" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: formatPackageMonth(pkg.valid_month) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(pkg.price_paid) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: usesDisplay }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: PACKAGE_STATUS_COLOR[pkg.status] || "default",
                children: pkg.status
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: pkg.is_commission_finalized ? PACKAGE_COMMISSION_COLOR.finalized : PACKAGE_COMMISSION_COLOR.pending,
                children: pkg.is_commission_finalized ? "Finalized" : "Pending"
              }
            ) })
          ] }, pkg.id);
        }) })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 900 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Collected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Appointment Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Appt. Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Method" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Deposit Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Notes" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: incomeLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 8, align: "center", sx: { py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) }) }) : filteredDeposits.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 8, sx: { p: 0, border: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyContent,
          {
            title: "No deposits found",
            description: "No deposit transactions match the selected filters.",
            sx: { py: 6 }
          }
        ) }) }) : paginatedDeposits.map((dep) => {
          const clientName = dep.client ? `${dep.client.first_name} ${dep.client.last_name}` : "—";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDateTime(dep.paid_at) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: clientName }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: dep.appointment?.appointment_date ? fDate(dep.appointment.appointment_date) : "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: dep.appointment?.status ? /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "default", children: dep.appointment.status }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(dep.amount) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: PAYMENT_METHOD_LABELS[dep.payment_method] || dep.payment_method }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                variant: "soft",
                color: DEPOSIT_STATUS_COLOR[dep.status] || "default",
                children: DEPOSIT_STATUS_LABEL[dep.status] || dep.status
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
              dep.notes && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: dep.notes }),
              dep.applied_to_sale_id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                RouterLink,
                {
                  to: paths.dashboard.pos.saleDetails(dep.applied_to_sale_id),
                  style: { fontSize: 12, textDecoration: "underline" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", color: "primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:eye-bold", width: 16 }) })
                }
              ),
              dep.refund_reason && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: dep.refund_reason })
            ] }) })
          ] }, dep.id);
        }) })
      ] }) }),
      (() => {
        const count = statusTab === "all" ? combinedDeposits.length : statusTab === "packages" ? packageDeposits.length : statusTab === "discount_plans" ? planDeposits.length : filteredDeposits.length;
        return count > rowsPerPage && /* @__PURE__ */ jsxRuntimeExports.jsx(
          TablePagination,
          {
            component: "div",
            count,
            page,
            onPageChange: (_, newPage) => setPage(newPage),
            rowsPerPage,
            onRowsPerPageChange: (e) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            },
            rowsPerPageOptions: [10, 25, 50, 100]
          }
        );
      })()
    ] })
  ] });
}
const metadata = { title: `Deposits | Dashboard - ${CONFIG.appName}` };
function DepositsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DepositsListView, {})
  ] });
}
export {
  DepositsPage as default
};
