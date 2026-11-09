import { r as reactExports, j as jsxRuntimeExports, y as Card, B as Box, b as CircularProgress, c as Typography, S as Stack, a2 as Chip, a0 as fCurrency, ar as Scrollbar, L as Label, an as fDate, a as Iconify, d as Button, Z as RouterLink, a3 as paths, as as fDateTime, K as Divider, al as Avatar, aw as fTime, t as toast, ax as Alert, M as MenuItem, bY as usePermissions, a7 as LoadingScreen, e as useParams, D as Me, a4 as DashboardContent, ao as CustomBreadcrumbs, ap as Tabs, aq as Tab, bn as RoleBasedGuard, ce as STATUS_OPTIONS$1, C as CONFIG } from "./index-B08HRm4A.js";
import { a as useAppointmentHistory, b as useAppointment, e as updateAppointmentStatus } from "./client-quick-add-dialog-Ckc4WOT8.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { u as useAppointmentModalV2, A as AppointmentDialog, C as CustomPopover } from "./useAppointmentModalV2-C4Ey8J54.js";
import { u as useGetAppointmentDeposits } from "./deposit-service-DjFWmn8Y.js";
import { T as Table, c as TableBody, b as TableRow, a as TableHead } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { a as formatPhoneNumber } from "./index-C4JOln-R.js";
import { g as STYLIST_LEVELS } from "./services-UhlA7T7c.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { C as CardHeader } from "./CardHeader-DCwzSIO8.js";
import { C as CardContent } from "./CardContent-tUS7qwlT.js";
import { d as PAYMENT_METHOD_OPTIONS, D as DEPOSIT_STATUS_LABEL, a as DEPOSIT_STATUS_COLOR } from "./deposits.contants-CkpPYQO7.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import "./form-provider-u_wAFv-h.js";
import "./client-service-swr-DnF01Wop.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./with-selector-ClfCuV5M.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./schema-utils-CG9_JlGr.js";
import "./schemas-BVeYYbTr.js";
import "./branch-select--7cbYlRe.js";
import "./render-location-type-B-TZb61z.js";
import "./coerce-5-WTXoHr.js";
import "./styles-BdIysWnF.js";
import "./confirm-dialog-BCXWHns4.js";
import "./client-autocomplete-C_9PlkEm.js";
import "./index-Dha6iQ4E.js";
import "./useStaffData-BIkbeKJv.js";
import "./staff-service-CYDKVOm2.js";
import "./ToggleButtonGroup-CJXz0-w5.js";
import "./ToggleButton-D4MfeHtt.js";
const TABS = [
  { value: "overview", label: "Overview", icon: "solar:clipboard-text-bold-duotone" },
  { value: "services", label: "Services", icon: "solar:scissors-bold-duotone" },
  { value: "deposits", label: "Deposits", icon: "solar:shield-keyhole-bold-duotone" },
  { value: "history", label: "History", icon: "solar:clock-circle-bold-duotone" }
];
const CHANGE_TYPE_META = {
  created: { label: "Created", color: "success" },
  status_changed: { label: "Status Changed", color: "info" },
  cancelled: { label: "Cancelled", color: "error" },
  rescheduled: { label: "Rescheduled", color: "warning" },
  updated: { label: "Updated", color: "default" },
  service_added: { label: "Service Added", color: "success" },
  service_updated: { label: "Service Updated", color: "warning" },
  service_removed: { label: "Service Removed", color: "error" },
  deposit_collected: { label: "Deposit Collected", color: "info" },
  deposit_applied: { label: "Deposit Applied", color: "success" },
  deposit_refunded: { label: "Deposit Refunded", color: "error" },
  deposit_forfeited: { label: "Deposit Forfeited", color: "default" },
  auto_completed: { label: "Auto Completed", color: "success" }
};
const PAYMENT_METHOD_LABELS = {
  cash: "Cash",
  credit_card: "Credit Card",
  debit_card: "Debit Card",
  mobile_payment: "Mobile Payment",
  bank_transfer: "Bank Transfer"
};
const FIELD_LABELS = {
  client_id: "Client",
  appointment_date: "Date",
  start_time: "Start Time",
  end_time: "End Time",
  duration_minutes: "Duration (min)",
  branch_id: "Branch",
  stylist_id: "Stylist",
  client_notes: "Client Notes",
  internal_notes: "Internal Notes",
  special_requests: "Special Requests",
  status: "Status",
  payment_status: "Payment Status",
  total_amount: "Total Amount",
  // service-level fields
  service_name: "Service",
  service_category: "Category",
  performed_by: "Performed By",
  stylist_level: "Stylist Level",
  price: "Price",
  is_completed: "Completed",
  display_order: "Order"
};
const HIDDEN_FIELDS = /* @__PURE__ */ new Set(["performed_by_name"]);
function formatFieldValue(field, value, allValues = {}) {
  if (value === null || value === void 0 || value === "") return "—";
  if (field === "performed_by") {
    return allValues.performed_by_name ?? String(value);
  }
  if (field === "appointment_date") {
    return new Date(value).toLocaleDateString();
  }
  if (field === "total_amount" || field === "price") {
    return `$${Number(value).toFixed(2)}`;
  }
  if (field === "duration_minutes") {
    return `${value} min`;
  }
  return String(value);
}
function formatStatus(status) {
  return status ? status.replace(/_/g, " ") : "—";
}
function byName(profile) {
  if (!profile) return "System";
  return `${profile.first_name ?? ""} ${profile.last_name ?? ""}`.trim() || "System";
}
function StatusBadge({ changeType }) {
  const meta = CHANGE_TYPE_META[changeType] ?? { label: changeType, color: "default" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Chip,
    {
      label: meta.label,
      color: meta.color,
      size: "small",
      variant: "soft",
      sx: { textTransform: "capitalize", minWidth: 110 }
    }
  );
}
function HistoryEntryDetails({ item }) {
  const { change_type, old_status, new_status, old_values, new_values, notes, deposit } = item;
  if (change_type === "created") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
      "Appointment created with status ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatStatus(new_status) }),
      "."
    ] });
  }
  if (change_type === "auto_completed") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: formatStatus(old_status) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "→" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: formatStatus(new_status) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "Automatically marked as completed by the system 2 hours after the scheduled end time." })
    ] });
  }
  if (change_type === "status_changed") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: formatStatus(old_status) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "→" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: formatStatus(new_status) })
    ] });
  }
  if (change_type === "cancelled") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
      "Cancelled",
      notes ? `: "${notes}"` : "."
    ] });
  }
  if (change_type === "rescheduled") {
    const ov = old_values ?? {};
    const nv = new_values ?? {};
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", flexWrap: "wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
        ov.appointment_date,
        " ",
        ov.start_time,
        "–",
        ov.end_time
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "→" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: [
        nv.appointment_date,
        " ",
        nv.start_time,
        "–",
        nv.end_time
      ] })
    ] });
  }
  if (change_type === "updated") {
    const ov = old_values ?? {};
    const nv = new_values ?? {};
    const keys = Object.keys(nv).filter((f) => !HIDDEN_FIELDS.has(f));
    if (!keys.length) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mt: 0.5, overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { size: "small", sx: { minWidth: 280 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: keys.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { sx: { "& td": { border: 0, py: 0.25, px: 0 } }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { width: 120, verticalAlign: "top" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: FIELD_LABELS[field] ?? field }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { verticalAlign: "top" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          variant: "caption",
          color: "text.disabled",
          sx: { textDecoration: "line-through", mr: 1, wordBreak: "break-word" },
          children: formatFieldValue(field, ov[field], ov)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { sx: { verticalAlign: "top" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { mr: 0.5 }, children: "→" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontWeight: 600, wordBreak: "break-word" }, children: formatFieldValue(field, nv[field], nv) })
      ] })
    ] }, field)) }) }) });
  }
  if (change_type === "service_added") {
    const nv = new_values ?? {};
    const performer = nv.performed_by_name ?? (nv.performed_by ? nv.performed_by : null);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
      "Added service ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: nv.service_name ?? "—" }),
      nv.price != null ? ` — $${Number(nv.price).toFixed(2)}` : "",
      nv.duration_minutes ? `, ${nv.duration_minutes} min` : "",
      performer ? ` — performed by ${performer}` : ""
    ] });
  }
  if (change_type === "service_removed") {
    const ov = old_values ?? {};
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
      "Removed service ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ov.service_name ?? "—" })
    ] });
  }
  if (change_type === "deposit_collected") {
    const dep = deposit ?? {};
    const method = PAYMENT_METHOD_LABELS[dep.payment_method] ?? dep.payment_method ?? "";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
      "Collected deposit of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: fCurrency(dep.amount) }),
      method ? ` via ${method}` : "",
      dep.notes ? ` · ${dep.notes}` : ""
    ] });
  }
  if (change_type === "deposit_applied") {
    const dep = deposit ?? {};
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
      "Deposit of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: fCurrency(dep.amount) }),
      " applied to sale."
    ] });
  }
  if (change_type === "deposit_refunded") {
    const dep = deposit ?? {};
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
      "Deposit of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: fCurrency(dep.amount) }),
      " refunded to client",
      dep.refund_reason ? ` · ${dep.refund_reason}` : "",
      "."
    ] });
  }
  if (change_type === "deposit_forfeited") {
    const dep = deposit ?? {};
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
      "Deposit of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: fCurrency(dep.amount) }),
      " forfeited",
      dep.refund_reason ? ` · ${dep.refund_reason}` : "",
      "."
    ] });
  }
  if (change_type === "service_updated") {
    const ov = old_values ?? {};
    const nv = new_values ?? {};
    const keys = Object.keys(nv).filter((f) => !HIDDEN_FIELDS.has(f));
    if (!keys.length) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mt: 0.5, overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { size: "small", sx: { minWidth: 280 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: keys.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { sx: { "& td": { border: 0, py: 0.25, px: 0 } }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { width: 120, verticalAlign: "top" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: FIELD_LABELS[field] ?? field }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { verticalAlign: "top" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          variant: "caption",
          color: "text.disabled",
          sx: { textDecoration: "line-through", mr: 1, wordBreak: "break-word" },
          children: formatFieldValue(field, ov[field], ov)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { sx: { verticalAlign: "top" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { mr: 0.5 }, children: "→" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontWeight: 600, wordBreak: "break-word" }, children: formatFieldValue(field, nv[field], nv) })
      ] })
    ] }, field)) }) }) });
  }
  return null;
}
function AppointmentDetailsHistory({ appointmentId }) {
  const { history, loading: loadingHistory } = useAppointmentHistory(appointmentId);
  const { deposits, depositsLoading } = useGetAppointmentDeposits(appointmentId);
  const depositEvents = reactExports.useMemo(() => {
    const events = [];
    for (const dep of deposits) {
      events.push({
        id: `dep-collected-${dep.id}`,
        change_type: "deposit_collected",
        created_at: dep.paid_at,
        changed_by_profile: null,
        deposit: dep
      });
      if (dep.status === "applied" && dep.applied_at) {
        events.push({
          id: `dep-applied-${dep.id}`,
          change_type: "deposit_applied",
          created_at: dep.applied_at,
          changed_by_profile: null,
          deposit: dep
        });
      }
      if (dep.status === "refunded" && dep.refunded_at) {
        events.push({
          id: `dep-refunded-${dep.id}`,
          change_type: "deposit_refunded",
          created_at: dep.refunded_at,
          changed_by_profile: null,
          deposit: dep
        });
      }
      if (dep.status === "forfeited" && dep.refunded_at) {
        events.push({
          id: `dep-forfeited-${dep.id}`,
          change_type: "deposit_forfeited",
          created_at: dep.refunded_at,
          changed_by_profile: null,
          deposit: dep
        });
      }
    }
    return events;
  }, [deposits]);
  const allItems = reactExports.useMemo(
    () => [...history, ...depositEvents].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    ),
    [history, depositEvents]
  );
  if (loadingHistory || depositsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { py: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { py: 3, textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "Appointment History" }),
    allItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 2 }, children: "No history available for this appointment." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0, sx: { mt: 2 }, children: allItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 1.5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            spacing: 1,
            alignItems: "flex-start",
            justifyContent: "space-between",
            sx: { mb: 0.75 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { changeType: item.change_type }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { textAlign: "right", flexShrink: 0 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", children: byName(item.changed_by_profile) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: item.created_at ? new Date(item.created_at).toLocaleString() : "" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { minWidth: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HistoryEntryDetails, { item }) })
      ] }),
      idx < allItems.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { borderBottom: "1px solid", borderColor: "divider" } })
    ] }, item.id ?? idx)) })
  ] });
}
function AppointmentDetailsServices({ appointment }) {
  const services = appointment.services || [];
  const totalAmount = services.reduce((sum, service) => sum + (service.price || 0), 0);
  const totalDuration = services.reduce((sum, service) => sum + (service.duration_minutes || 0), 0);
  if (services.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        sx: { py: 8 },
        filled: true,
        title: "No services ",
        description: "There are currently no services associated with this appointment."
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 3, pb: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Services" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { sx: { minWidth: 720 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Service Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Duration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Status" }),
        services.some((s) => s.performed_by) && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Performed By" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
        services.sort((a, b) => (a.display_order || 0) - (b.display_order || 0)).map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: index + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: service.service_name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "default", children: service.service_category || "N/A" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
            service.duration_minutes,
            " min"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: fCurrency(service.price) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: service.is_completed ? "success" : "default", children: service.is_completed ? "Completed" : "Pending" }) }),
          services.some((s) => s.performed_by) && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: service.staff ? `${service.staff.first_name} ${service.staff.last_name}` : "N/A" }) })
        ] }, service.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            sx: {
              "& td": {
                borderTop: (theme) => `solid 2px ${theme.vars.palette.divider}`,
                borderBottom: "none"
              }
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 600 }, children: "Total" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", sx: { fontWeight: 600 }, children: [
                totalDuration,
                " min"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 600, color: "primary.main" }, children: fCurrency(totalAmount) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: services.some((s) => s.staff) ? 2 : 1 })
            ]
          }
        )
      ] })
    ] }) }) })
  ] });
}
const STATUS_OPTIONS = {
  scheduled: { label: "Scheduled", color: "info" },
  confirmed: { label: "Confirmed", color: "success" },
  in_progress: { label: "In Progress", color: "warning" },
  completed: { label: "Completed", color: "success" },
  cancelled: { label: "Cancelled", color: "error" },
  no_show: { label: "No Show", color: "error" },
  rescheduled: { label: "Rescheduled", color: "warning" }
};
function InfoCard({ icon, iconColor, iconBg, label, justifyContent = "space-between", children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent, spacing: 2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1.5,
          bgcolor: iconBg,
          flexShrink: 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 24, sx: { color: iconColor } })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", gutterBottom: true, children: label }),
      children
    ] })
  ] });
}
function AppointmentDetailsOverview({ appointment, handleChangeTab }) {
  const status = STATUS_OPTIONS[appointment.status] || {
    label: appointment.status,
    color: "default"
  };
  const formatDate = (date) => {
    try {
      return fDate(date);
    } catch {
      return date;
    }
  };
  const formatTime = (time) => {
    if (!time) return "";
    const parts = time.split(":");
    const hours = parseInt(parts[0], 10);
    const minutes = parts[1];
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes} ${ampm}`;
  };
  const calculateTotal = () => {
    if (!appointment.services || appointment.services.length === 0) {
      return appointment.total_price || 0;
    }
    return appointment.services.reduce((total, service) => total + (service.price || 0), 0);
  };
  const noteFields = [
    { key: "notes", label: "Notes", icon: "solar:notes-bold-duotone" },
    { key: "client_notes", label: "Client Notes", icon: "solar:user-speak-bold-duotone" },
    { key: "special_requests", label: "Special Requests", icon: "solar:star-bold-duotone" },
    { key: "internal_notes", label: "Internal Notes", icon: "solar:lock-bold-duotone" }
  ].filter(({ key }) => appointment[key]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 2, children: [
        {
          label: "Date",
          value: formatDate(appointment.appointment_date),
          note: `${formatTime(appointment.start_time)} – ${formatTime(appointment.end_time)}`,
          icon: "solar:calendar-bold-duotone",
          color: "#3B82F6",
          bg: "rgba(59,130,246,0.08)"
        },
        {
          label: "Duration",
          value: (() => {
            const mins = appointment.duration_minutes;
            if (mins > 60) {
              const h = Math.floor(mins / 60);
              const m = mins % 60;
              return m > 0 ? `${h}h ${m}min` : `${h}h`;
            }
            return `${mins} min`;
          })(),
          note: "Total time",
          icon: "solar:clock-circle-bold-duotone",
          color: "#F59E0B",
          bg: "rgba(245,158,11,0.08)"
        },
        {
          label: "Total Amount",
          value: fCurrency(calculateTotal()),
          note: appointment.paid_at ? `Paid ${fDate(appointment.paid_at)}` : appointment.payment_status || "unpaid",
          icon: "solar:dollar-minimalistic-bold-duotone",
          color: "#22C55E",
          bg: "rgba(34,197,94,0.08)"
        }
      ].map((card) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 2.5, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", gutterBottom: true, children: card.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", sx: { color: card.color, lineHeight: 1.2 }, children: card.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { mt: 0.5 }, children: card.note })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              bgcolor: card.bg,
              flexShrink: 0
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: card.icon, width: 26, sx: { color: card.color } })
          }
        )
      ] }) }) }, card.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardHeader,
          {
            title: "Appointment Details",
            action: appointment.sale_id && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                component: RouterLink,
                href: paths.dashboard.pos.saleDetails(appointment.sale_id),
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "fluent:reciept-20-filled", width: 14 }),
                sx: { mt: 0.5, width: "fit-content" },
                children: "View Sale"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              direction: { xs: "column", sm: "row" },
              spacing: 3,
              justifyContent: "space-between",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InfoCard,
                  {
                    label: "Status",
                    icon: "solar:tag-bold-duotone",
                    iconColor: "#6366F1",
                    iconBg: "rgba(99,102,241,0.08)",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: status.color, children: status.label }) })
                  }
                ),
                appointment.payment_status && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InfoCard,
                  {
                    label: "Payment",
                    icon: "solar:wallet-bold-duotone",
                    iconColor: "#14B8A6",
                    iconBg: "rgba(20,184,166,0.08)",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        variant: "soft",
                        color: appointment.payment_status === "paid" ? "success" : "warning",
                        children: appointment.payment_status
                      }
                    ) })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "column", spacing: 1, alignItems: "center", children: [
                  appointment.sale?.sale_number && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: appointment.sale?.sale_number }),
                  appointment.paid_at && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: fDateTime(appointment.paid_at) })
                ] })
              ]
            }
          ),
          appointment.services && appointment.services.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoCard,
              {
                justifyContent: "flex-start",
                label: "Services",
                icon: "solar:scissors-bold-duotone",
                iconColor: "#EC4899",
                iconBg: "rgba(236,72,153,0.08)",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    spacing: 1,
                    sx: { flexWrap: "wrap", gap: 1, mt: 0.25 },
                    alignItems: "center",
                    children: [
                      appointment.services.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", children: service.service_name || service.name }, index)),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outlined",
                          size: "small",
                          onClick: handleChangeTab,
                          sx: { ml: "auto" },
                          children: "View Details"
                        }
                      )
                    ]
                  }
                )
              }
            )
          ] })
        ] }) })
      ] }),
      noteFields.map(({ key, label, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardHeader,
          {
            title: label,
            avatar: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 1.5,
                  bgcolor: "action.selected"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 22, color: "text.secondary" })
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { pt: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { whiteSpace: "pre-wrap" }, children: appointment[key] }) })
      ] }, key)),
      appointment.metadata && Object.keys(appointment.metadata).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Additional Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { pt: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            component: "pre",
            sx: { fontSize: 12, overflow: "auto", m: 0, color: "text.secondary" },
            children: JSON.stringify(appointment.metadata, null, 2)
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      appointment.client && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardHeader,
          {
            title: "Client",
            action: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                component: RouterLink,
                href: paths.dashboard.clients.profile(appointment.client.id),
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:external-link", height: 14 }),
                size: "small",
                variant: "outlined",
                children: "View Profile"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { sx: { pt: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, sx: { mb: 2.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Avatar,
              {
                sx: {
                  width: 52,
                  height: 52,
                  bgcolor: "primary.main",
                  color: "common.white",
                  fontSize: 18,
                  fontWeight: 700
                },
                children: [
                  appointment?.client.first_name?.[0],
                  appointment?.client.last_name?.[0]
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", sx: { fontWeight: 600 }, children: [
                appointment?.client?.first_name,
                " ",
                appointment?.client.last_name
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Client" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
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
                    bgcolor: "rgba(59,130,246,0.08)",
                    flexShrink: 0
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:letter-bold-duotone",
                      width: 18,
                      sx: { color: "#3B82F6" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: appointment.client.email || "—" })
              ] })
            ] }),
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
                    bgcolor: "rgba(34,197,94,0.08)",
                    flexShrink: 0
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:phone-bold-duotone",
                      width: 18,
                      sx: { color: "#22C55E" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: formatPhoneNumber(appointment.client.phone_primary) || "—" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      appointment.services && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Stylist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { pt: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2.5, children: Object.values(
          appointment.services.reduce((acc, service) => {
            const staffId = service?.staff?.id || service?.staff?.email || `${service?.staff?.first_name}-${service?.staff?.last_name}`;
            if (!acc[staffId]) {
              acc[staffId] = { staff: service.staff, services: [] };
            }
            acc[staffId].services.push({
              name: service.service_name || service.name,
              level: service.stylist_level
            });
            return acc;
          }, {})
        ).map((entry, idx, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Avatar,
              {
                sx: {
                  width: 52,
                  height: 52,
                  bgcolor: "secondary.main",
                  color: "common.white",
                  fontSize: 18,
                  fontWeight: 700
                },
                children: [
                  entry.staff?.first_name?.[0],
                  entry.staff?.last_name?.[0]
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", sx: { fontWeight: 600 }, children: [
                entry.staff?.first_name,
                " ",
                entry.staff?.last_name
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Stack,
                {
                  direction: "row",
                  spacing: 0.75,
                  sx: { flexWrap: "wrap", gap: 0.75, mt: 0.5 },
                  children: entry.services.map((svc, i) => {
                    const levelMeta = STYLIST_LEVELS.find((l) => l.value === svc.level);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.5, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", children: svc.name }),
                      levelMeta && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: levelMeta.color, children: levelMeta.label })
                    ] }, i);
                  })
                }
              )
            ] })
          ] }),
          entry.staff?.email && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
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
                  bgcolor: "rgba(59,130,246,0.08)",
                  flexShrink: 0
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Iconify,
                  {
                    icon: "solar:letter-bold-duotone",
                    width: 18,
                    sx: { color: "#3B82F6" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: entry.staff.email })
            ] })
          ] }),
          idx < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } })
        ] }, idx)) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardHeader,
        {
          title: "Timestamps",
          avatar: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1.5,
                bgcolor: "rgba(99,102,241,0.08)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:history-bold-duotone", width: 22, sx: { color: "#6366F1" } })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { pt: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, flexDirection: "row", justifyContent: "space-between", children: [
        { label: "Created", value: appointment.created_at },
        { label: "Confirmed", value: appointment.confirmed_at },
        { label: "Completed", value: appointment.completed_at },
        { label: "Last Updated", value: appointment.updated_at }
      ].filter(({ value }) => value).map(({ label, value }, index, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          spacing: 1,
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { fontWeight: 500 }, children: [
              fDate(value),
              " ",
              fTime(value)
            ] }),
            index < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { orientation: "vertical", flexItem: true, sx: { mx: 2 } })
          ]
        },
        label
      )) }) })
    ] }) })
  ] });
}
function CollectDepositDialog({
  open,
  onClose,
  onSubmit,
  loading,
  appointmentTotal
}) {
  const [amount, setAmount] = reactExports.useState("");
  const [paymentMethod, setPaymentMethod] = reactExports.useState("cash");
  const [notes, setNotes] = reactExports.useState("");
  const handleClose = reactExports.useCallback(() => {
    setAmount("");
    setPaymentMethod("cash");
    setNotes("");
    onClose();
  }, [onClose]);
  const handleSubmit = reactExports.useCallback(() => {
    const parsed = parseFloat(amount);
    if (!parsed || parsed <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    onSubmit({ amount: parsed, paymentMethod, notes: notes || null });
  }, [amount, paymentMethod, notes, onSubmit]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Collect Deposit" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
      appointmentTotal != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          justifyContent: "space-between",
          alignItems: "center",
          sx: { px: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Appointment value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(appointmentTotal) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:info-circle-bold-duotone" }), children: "No commission is earned until the service is completed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            sx: { flex: 2 },
            label: "Amount",
            type: "number",
            value: amount,
            onChange: (e) => setAmount(e.target.value),
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" }),
              endAdornment: appointmentTotal != null && /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "small",
                  onClick: () => setAmount(String(appointmentTotal)),
                  sx: { minWidth: "unset", px: 1, fontSize: "0.7rem", whiteSpace: "nowrap" },
                  children: "Full"
                }
              ) }),
              inputProps: { min: 0, step: "0.01" }
            },
            fullWidth: true,
            autoFocus: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            select: true,
            sx: { flex: 1 },
            label: "Payment Method",
            value: paymentMethod,
            onChange: (e) => setPaymentMethod(e.target.value),
            fullWidth: true,
            children: PAYMENT_METHOD_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          label: "Notes (optional)",
          value: notes,
          onChange: (e) => setNotes(e.target.value),
          multiline: true,
          rows: 2,
          fullWidth: true
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, disabled: loading, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          onClick: handleSubmit,
          disabled: loading || !amount,
          startIcon: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : null,
          children: "Collect"
        }
      )
    ] })
  ] });
}
function ResolveDepositDialog({ open, onClose, onSubmit, loading, totalHeld }) {
  const [mode, setMode] = reactExports.useState("refund");
  const [reason, setReason] = reactExports.useState("");
  const handleClose = reactExports.useCallback(() => {
    setMode("refund");
    setReason("");
    onClose();
  }, [onClose]);
  const handleSubmit = reactExports.useCallback(() => {
    onSubmit({ forfeit: mode === "forfeit", reason: reason || null });
  }, [mode, reason, onSubmit]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      "Resolve Deposit · ",
      fCurrency(totalHeld)
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TextField,
        {
          select: true,
          label: "Action",
          value: mode,
          onChange: (e) => setMode(e.target.value),
          fullWidth: true,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "refund", children: "Refund to client (appointment cancelled)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "forfeit", children: "Forfeit — keep as revenue (no-show / policy)" })
          ]
        }
      ),
      mode === "forfeit" && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "warning", children: "Forfeited deposits count as business revenue in the income report." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          label: "Reason (optional)",
          value: reason,
          onChange: (e) => setReason(e.target.value),
          multiline: true,
          rows: 2,
          fullWidth: true
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, disabled: loading, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          color: mode === "forfeit" ? "warning" : "error",
          onClick: handleSubmit,
          disabled: loading,
          startIcon: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : null,
          children: mode === "forfeit" ? "Forfeit Deposit" : "Refund Deposit"
        }
      )
    ] })
  ] });
}
function AppointmentDetailsDeposits({ appointment }) {
  const { isAdmin, isManager } = usePermissions();
  const canManage = isAdmin || isManager;
  const appointmentId = appointment?.id;
  const isCompleted = appointment?.status === "completed";
  const isCancelledOrNoShow = appointment?.status === "cancelled" || appointment?.status === "no_show";
  const { deposits, depositsLoading, totalHeld, totalApplied, hasHeldDeposit, collect, resolve } = useGetAppointmentDeposits(appointmentId);
  const [collectOpen, setCollectOpen] = reactExports.useState(false);
  const [resolveOpen, setResolveOpen] = reactExports.useState(false);
  const [actionLoading, setActionLoading] = reactExports.useState(false);
  const handleCollect = reactExports.useCallback(
    async ({ amount, paymentMethod, notes }) => {
      setActionLoading(true);
      try {
        await collect({ amount, paymentMethod, notes });
        toast.success(`Deposit of ${fCurrency(amount)} collected`);
        setCollectOpen(false);
      } catch (err) {
        toast.error(err.message || "Failed to collect deposit");
      } finally {
        setActionLoading(false);
      }
    },
    [collect]
  );
  const handleResolve = reactExports.useCallback(
    async ({ forfeit, reason }) => {
      setActionLoading(true);
      try {
        const total = await resolve({ forfeit, reason });
        toast.success(
          forfeit ? `${fCurrency(total)} deposit forfeited` : `${fCurrency(total)} deposit refunded to client`
        );
        setResolveOpen(false);
      } catch (err) {
        toast.error(err.message || "Failed to resolve deposit");
      } finally {
        setActionLoading(false);
      }
    },
    [resolve]
  );
  if (depositsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 5, textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { message: "Loading deposit information..." }),
      " "
    ] });
  }
  const depositRequired = appointment?.deposit_required;
  const depositAmountRequired = appointment?.deposit_amount;
  const appointmentTotal = appointment?.services?.length > 0 ? appointment.services.reduce((sum, s) => sum + (s.price || 0), 0) : appointment?.total_amount ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Deposit History" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: deposits.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              py: 5,
              textAlign: "center",
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 2
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Iconify,
                {
                  icon: "solar:shield-keyhole-bold-duotone",
                  width: 48,
                  sx: { color: "text.disabled", mb: 1 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No deposits recorded for this appointment" }),
              !isCompleted && !isCancelledOrNoShow && canManage && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "small",
                  sx: { mt: 1.5 },
                  startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:add-circle-bold" }),
                  onClick: () => setCollectOpen(true),
                  children: "Collect a deposit"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, children: deposits.map((dep) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              p: 2,
              borderRadius: 1.5,
              border: "1px solid",
              borderColor: "divider"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(dep.amount) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    variant: "soft",
                    color: DEPOSIT_STATUS_COLOR[dep.status] || "default",
                    children: DEPOSIT_STATUS_LABEL[dep.status] || dep.status
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                "Collected ",
                fDateTime(dep.paid_at),
                " ·",
                " ",
                PAYMENT_METHOD_OPTIONS.find((m) => m.value === dep.payment_method)?.label || dep.payment_method
              ] }),
              dep.status === "applied" && dep.applied_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "success.main", children: [
                "Applied to sale on ",
                fDate(dep.applied_at)
              ] }),
              dep.status === "refunded" && dep.refunded_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "error.main", children: [
                "Refunded on ",
                fDate(dep.refunded_at),
                dep.refund_reason ? ` · ${dep.refund_reason}` : ""
              ] }),
              dep.status === "forfeited" && dep.refunded_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                "Forfeited on ",
                fDate(dep.refunded_at),
                dep.refund_reason ? ` · ${dep.refund_reason}` : ""
              ] }),
              dep.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", children: [
                "Note: ",
                dep.notes
              ] })
            ] }) })
          },
          dep.id
        )) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardHeader,
          {
            title: "Deposit Summary",
            action: !isCompleted && !isCancelledOrNoShow && canManage && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "small",
                variant: "contained",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:add-circle-bold" }),
                onClick: () => setCollectOpen(true),
                children: "Collect"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
          depositRequired && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              sx: {
                p: 1.5,
                borderRadius: 1.5,
                bgcolor: "warning.lighter",
                border: "1px solid",
                borderColor: "warning.light"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "warning.dark", children: "Deposit Required" }),
                depositAmountRequired && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "warning.dark", children: [
                  fCurrency(depositAmountRequired),
                  " required per booking policy"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Total Held" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "warning.main", children: fCurrency(totalHeld) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Applied to Sale" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "success.main", children: fCurrency(totalApplied) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { lineHeight: 1.5 }, children: "Deposits do not count as earned revenue and staff commission is not calculated until the service is completed at the POS." }),
          hasHeldDeposit && canManage && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              color: "error",
              size: "small",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:transfer-horizontal-bold-duotone" }),
              onClick: () => setResolveOpen(true),
              fullWidth: true,
              children: "Refund / Forfeit Deposit"
            }
          )
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollectDepositDialog,
      {
        open: collectOpen,
        onClose: () => setCollectOpen(false),
        onSubmit: handleCollect,
        loading: actionLoading,
        appointmentTotal
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResolveDepositDialog,
      {
        open: resolveOpen,
        onClose: () => setResolveOpen(false),
        onSubmit: handleResolve,
        loading: actionLoading,
        totalHeld
      }
    )
  ] });
}
function AppointmentDetailsView() {
  const params = useParams();
  const { id } = params;
  const [currentTab, setCurrentTab] = reactExports.useState("overview");
  const popover = Me();
  const { isAdmin } = usePermissions();
  const { appointment, loading, error, refetch } = useAppointment(id);
  const { open, onOpen, onClose, currentEvent } = useAppointmentModalV2();
  const handleChangeTab = reactExports.useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);
  const handleEdit = reactExports.useCallback(() => {
    if (appointment) {
      onOpen({
        id: appointment.id,
        extendedProps: {
          appointmentId: appointment.id,
          appointmentNumber: appointment.appointment_number,
          appointmentStartTime: appointment.start_time,
          appointmentEndTime: appointment.end_time,
          branch_id: appointment.branch_id,
          client: appointment.client,
          stylist: appointment.stylist,
          services: appointment.services,
          status: appointment.status,
          clientNotes: appointment.client_notes,
          internalNotes: appointment.internal_notes,
          payment_status: appointment.payment_status,
          total_price: appointment.total_price,
          duration_minutes: appointment.duration_minutes
        },
        start: `${appointment.appointment_date}T${appointment.start_time}`,
        end: `${appointment.appointment_date}T${appointment.end_time}`
      });
    }
  }, [appointment, onOpen]);
  const handleUpdateStatus = reactExports.useCallback(
    async (newStatus) => {
      try {
        popover.onClose();
        const { error: updatedError } = await updateAppointmentStatus(id, newStatus);
        if (updatedError) {
          throw new Error(updatedError.message);
        }
        toast.success(`Appointment status updated to ${newStatus}`);
        refetch();
      } catch (err) {
        console.error("Error updating appointment status:", err.message);
        toast.error("Failed to update appointment status");
      }
    },
    [id, refetch, popover]
  );
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { message: "Loading appointment details..." });
  }
  if (error || !appointment) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        filled: true,
        title: "Appointment not found",
        description: "The appointment you are looking for does not exist or has been deleted.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            component: RouterLink,
            href: paths.dashboard.appointments.root,
            variant: "contained",
            sx: { mt: 2 },
            children: "Back to Appointments"
          }
        )
      }
    ) });
  }
  const appointmentTitle = appointment.client ? `${appointment?.client?.first_name} ${appointment?.client?.last_name}` : "Appointment Details";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomBreadcrumbs,
        {
          backHref: "back",
          heading: appointment.appointment_number ? `Appointment #${appointment.appointment_number}` : appointmentTitle,
          links: [
            { name: "Dashboard", href: paths.dashboard.root },
            { name: "Appointments", href: paths.dashboard.appointments },
            { name: appointmentTitle }
          ],
          action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outlined",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:tag-bold" }),
                onClick: popover.onOpen,
                children: "Change Status"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" }),
                onClick: handleEdit,
                children: "Edit Appointment"
              }
            )
          ] }),
          sx: { mb: { xs: 3, md: 5 } }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: currentTab, onChange: handleChangeTab, children: TABS.filter((tab) => tab.value !== "history" || isAdmin).map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tab,
          {
            value: tab.value,
            label: tab.label,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: tab.icon, width: 24 }),
            iconPosition: "start"
          },
          tab.value
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: 1 }, children: [
          currentTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            AppointmentDetailsOverview,
            {
              appointment,
              handleChangeTab: () => handleChangeTab("_", "services")
            }
          ),
          currentTab === "services" && /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentDetailsServices, { appointment }),
          currentTab === "deposits" && /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentDetailsDeposits, { appointment }),
          currentTab === "history" && /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBasedGuard, { roles: ["admin"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentDetailsHistory, { appointmentId: appointment.id }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentDialog, { open, onClose, currentEvent }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, children: STATUS_OPTIONS$1.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      MenuItem,
      {
        selected: appointment.status === option.value,
        onClick: () => handleUpdateStatus(option.value),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: option.icon, sx: { mr: 1 } }),
          option.label
        ]
      },
      option.value
    )) })
  ] });
}
const metadata = { title: `Appointment Details - ${CONFIG.appName}` };
function AppointmentDetailsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentDetailsView, {})
  ] });
}
export {
  AppointmentDetailsPage as default
};
