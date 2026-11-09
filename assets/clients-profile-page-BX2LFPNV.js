import { r as reactExports, j as jsxRuntimeExports, b as CircularProgress, B as Box, al as Avatar, c as Typography, a2 as Chip, u as useSWR, s as supabase, m as mutate, bX as useTheme, a7 as LoadingScreen, y as Card, ar as Scrollbar, L as Label, as as fDateTime, a5 as alpha, S as Stack, a as Iconify, K as Divider, a1 as LinearProgress, c6 as fNumber, an as fDate, a0 as fCurrency, Z as RouterLink, a3 as paths, d as Button, T as Tooltip, h as dayjs, aS as Paper, bz as ButtonBase, bA as Collapse, Y as Link, aw as fTime, f as r, I as IconButton, av as useAuthContext, E as Ee, t as toast, bm as ListItemText, d7 as Grow, ax as Alert, U, d1 as checkUuidLastDigit, bY as usePermissions, a6 as useUserBranches, M as MenuItem, d2 as usePathname, d3 as useSearchParams, a4 as DashboardContent, ao as CustomBreadcrumbs, ap as Tabs, aq as Tab, e as useParams, C as CONFIG } from "./index-B08HRm4A.js";
import { f as useClientAuditLogs, g as useClientAppointments, b as useClientsByIds, h as useClientStatistics, a as useClient } from "./client-service-swr-DnF01Wop.js";
import { k as useGetClientMessageLogs, C as CHANNEL_LABELS, a as CHANNEL_COLORS, S as STATUS_COLORS$1, Q as QuickSendDialog } from "./automation-dialog-EOdwcKf4.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import "./toolbar-core-DGb1HZrD.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { T as TablePagination } from "./TablePagination-BOFMLJYr.js";
import { f as formatPhoneNumberIntl } from "./index-C4JOln-R.js";
import { C as CardContent } from "./CardContent-tUS7qwlT.js";
import { g as useGetClientLoyaltyBalance } from "./loyalty-service-D710t09P.js";
import { e as useGetClientCashbackWallet } from "./cashback-service-C1s-xYNM.js";
import { n as useGetClientSales } from "./sale-service-CWyXC78v.js";
import { C as CardHeader } from "./CardHeader-DCwzSIO8.js";
import { T as Timeline, a as TimelineItem, b as TimelineSeparator, d as TimelineConnector, e as TimelineContent, t as timelineItemClasses, c as TimelineDot } from "./TimelineSeparator-CTCCP9HM.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
import { u as useClientHairRecordCount, a as HAIR_RECORD_TYPE_LABELS, F as FORMULA_ZONE_LABELS, b as HAIR_LENGTH_OPTIONS, d as HAIR_DENSITY_OPTIONS, e as HAIR_TEXTURE_OPTIONS, f as HAIR_POROSITY_OPTIONS, S as SCALP_CONDITION_OPTIONS, g as HairSectionLabel, h as useClientHairRecords, i as updateHairRecord, j as createHairRecord, k as deleteHairRecord, H as HairRecordDialog } from "./hair-record-dialog-CLUtdK51.js";
import { L as LENGTH_SCALE, T as TEXTURE_OPTIONS, D as DENSITY_CONFIG, a as LENGTH_LABELS, P as POROSITY_CONFIG, S as SCALP_CONFIG, d as resolveHairColor, i as isLightHairColor, g as genderOptions, m as maritalStatusOptions, r as referralOptions } from "./hair-colors-CG3KoND_.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { T as ToggleButtonGroup } from "./ToggleButtonGroup-CJXz0-w5.js";
import { b as ToggleButton } from "./ToggleButton-D4MfeHtt.js";
import { useGetClientPackages, cancelClientPackage, formatPackageMonth } from "./package-service-U57UHzc2.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { A as AssignPackageDialog, P as PackageStylistSplitDialog } from "./package-stylist-split-dialog-CJ7q79E2.js";
import { R as Rating, F as Field } from "./fields-CnHGHSTe.js";
import { C as ClientImportanceLabel } from "./index-Dha6iQ4E.js";
import { u as useMediaQuery } from "./useMobilePicker-D3Q_Tt3t.js";
import { o } from "./index-Di_Bgabu.js";
import { n as useGetClientDiscountPlans, g as cancelClientDiscountPlan } from "./discount-plan-service-DWSzNOBf.js";
import { D as DiscountPlanStylistSplitDialog } from "./discount-plan-stylist-split-dialog-CUxyj0Mb.js";
import { a as useForm, b as u, F as Form, e as useController } from "./form-provider-u_wAFv-h.js";
import "./styles-Ddj8daWs.js";
import { G as useStylistAutocomplete } from "./staff-service-CYDKVOm2.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { o as object, s as string, i as _enum, b as boolean, n as number, l as literal } from "./schemas-BVeYYbTr.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import "./client-autocomplete-C_9PlkEm.js";
import "./InputAdornment-BqZyQBIE.js";
import "./compat-Bw8VbSM1.js";
import "./ExportPrint-CAqo1wR3.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./LoadingButton-DJQpPOpu.js";
import "./branch-select--7cbYlRe.js";
import "./render-location-type-B-TZb61z.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./with-selector-ClfCuV5M.js";
function StylistAutocompleteField({
  label = "Assign Stylist",
  placeholder = "Search stylists...",
  helperText,
  error,
  value = null,
  onChange,
  branchId,
  limit = 30,
  disabled = false,
  size = "medium",
  sx,
  ...other
}) {
  const getOptionLabelFn = (option) => option?.display_name || "";
  const [inputValue, setInputValue] = reactExports.useState(() => getOptionLabelFn(value));
  reactExports.useEffect(() => {
    setInputValue(getOptionLabelFn(value));
  }, [value?.id]);
  const { stylists, stylistsLoading } = useStylistAutocomplete(branchId, inputValue, limit);
  const levelColor = (level) => {
    if (level === "junior") return "info";
    if (level === "senior") return "warning";
    if (level === "prive") return "success";
    return "default";
  };
  const renderOption = (props, option) => {
    const { key, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5, py: 0.5 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { src: option.profile_photo_url, sx: { width: 32, height: 32, fontSize: 13 }, children: option.first_name?.[0]?.toUpperCase() || option.display_name?.[0]?.toUpperCase() }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.75 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: option.display_name }),
        option.stylist_level && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: option.stylist_level,
            size: "small",
            color: levelColor(option.stylist_level),
            variant: "soft",
            sx: { height: 16, fontSize: "0.6rem", textTransform: "capitalize" }
          }
        )
      ] })
    ] }) }, key);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Autocomplete,
    {
      value,
      inputValue,
      options: stylists,
      getOptionLabel: getOptionLabelFn,
      isOptionEqualToValue: (a, b) => a?.id === b?.id,
      renderOption,
      filterOptions: (x) => x,
      loading: stylistsLoading,
      disabled: disabled || !branchId,
      onChange: (_, newValue) => onChange?.(newValue),
      onInputChange: (_, newInputValue, reason) => {
        if (reason !== "reset") setInputValue(newInputValue);
      },
      sx,
      renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          ...params,
          label,
          placeholder: !branchId ? "Select a branch first" : placeholder,
          error: !!error,
          helperText: error?.message ?? helperText,
          size,
          slotProps: {
            input: {
              ...params.InputProps,
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                stylistsLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { color: "inherit", size: 20 }),
                params.InputProps.endAdornment
              ] })
            }
          }
        }
      ),
      ...other
    }
  );
}
const CACHE_KEY_PREFIX = "feedback";
const swrOptions = {
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  dedupingInterval: 2e3,
  keepPreviousData: true,
  shouldRetryOnError: true,
  errorRetryCount: 3
};
function buildClientFeedbackKey(clientId) {
  return JSON.stringify([CACHE_KEY_PREFIX, "client", clientId]);
}
async function fetchClientFeedback(clientId) {
  try {
    const { data, error } = await supabase.from("client_feedback").select(
      `
        *,
        staff:profiles!staff_id(id, display_name, first_name, last_name),
       appointment:appointments(id, appointment_date, start_time, end_time),
         followed_up_by_staff:profiles!followed_up_by(id, first_name, last_name)
      `
    ).eq("client_id", clientId).order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching client feedback:", error);
    throw error;
  }
}
function useGetClientFeedback(clientId) {
  const key = buildClientFeedbackKey(clientId);
  const {
    data,
    error,
    isLoading,
    mutate: revalidate
  } = useSWR(clientId ? key : null, () => fetchClientFeedback(clientId), swrOptions);
  reactExports.useEffect(
    function setupListener() {
      if (!clientId) {
        return void 0;
      }
      const channel = supabase.channel(`client_feedback:${clientId}`).on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "client_feedback",
          filter: `client_id=eq.${clientId}`
        },
        () => {
          revalidate();
        }
      ).subscribe();
      return channel.unsubscribe.bind(channel);
    },
    [clientId, revalidate]
  );
  return {
    feedback: data,
    isLoading,
    error,
    mutate: revalidate
  };
}
async function createFeedback(data) {
  try {
    const { data: newFeedback, error } = await supabase.from("client_feedback").insert([data]).select().single();
    if (error) throw error;
    mutate((key) => typeof key === "string" && key.includes(CACHE_KEY_PREFIX));
    return newFeedback;
  } catch (error) {
    console.error("Error creating feedback:", error);
    throw error;
  }
}
async function updateFeedback(feedbackId, updates) {
  try {
    const { data: updatedFeedback, error } = await supabase.from("client_feedback").update(updates).eq("id", feedbackId).select().single();
    if (error) throw error;
    mutate((key) => typeof key === "string" && key.includes(CACHE_KEY_PREFIX));
    return updatedFeedback;
  } catch (error) {
    console.error("Error updating feedback:", error);
    throw error;
  }
}
async function addFollowUp(feedbackId, followUpData) {
  try {
    const { data: updatedFeedback, error } = await supabase.from("client_feedback").update({
      follow_up_status: followUpData.follow_up_status,
      followed_up_at: (/* @__PURE__ */ new Date()).toISOString(),
      followed_up_by: followUpData.followed_up_by,
      follow_up_notes: followUpData.follow_up_notes
    }).eq("id", feedbackId).select().single();
    if (error) throw error;
    mutate((key) => typeof key === "string" && key.includes(CACHE_KEY_PREFIX));
    return updatedFeedback;
  } catch (error) {
    console.error("Error adding follow-up:", error);
    throw error;
  }
}
function ClientAudits({ client }) {
  const theme = useTheme();
  const [page, setPage] = reactExports.useState(0);
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(10);
  const { auditLogs, auditLogsLoading, auditLogsCount } = useClientAuditLogs(client?.id, {
    page,
    pageSize: rowsPerPage
  });
  if (auditLogsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {});
  }
  if (!auditLogsLoading && auditLogsCount === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        filled: true,
        title: "No Audit Logs",
        description: "No changes have been recorded for this client yet.",
        sx: { py: 10 }
      }
    );
  }
  const getActionColor = (action) => {
    switch (action) {
      case "create":
        return "success";
      case "update":
        return "info";
      case "delete":
        return "error";
      default:
        return "default";
    }
  };
  const getActionLabel = (action) => {
    switch (action) {
      case "create":
        return "Created";
      case "update":
        return "Updated";
      case "delete":
        return "Deleted";
      default:
        return action;
    }
  };
  const renderUser = (user) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Avatar,
      {
        alt: user ? `${user.first_name} ${user.last_name}` : "Unknown",
        sx: { width: 32, height: 32 },
        children: user ? user.first_name?.[0] + user.last_name?.[0] : "?"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: user ? `${user.first_name} ${user.last_name}` : "System" })
  ] });
  const renderChanges = (oldData, newData, action) => {
    if (action === "create") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "success.main" }, children: "Client profile created" });
    }
    if (action === "delete") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "error.main" }, children: "Client profile deleted" });
    }
    if (oldData && newData) {
      const changes = [];
      const allKeys = /* @__PURE__ */ new Set([...Object.keys(oldData), ...Object.keys(newData)]);
      allKeys.forEach((key) => {
        const oldValue = oldData[key];
        const newValue = newData[key];
        if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
          changes.push({
            field: key,
            old: oldValue,
            new: newValue
          });
        }
      });
      if (changes.length === 0) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: "No changes detected" });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        changes.slice(0, 3).map((change, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { mb: 0.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            change.field,
            ":"
          ] }),
          " ",
          String(change.old || "null"),
          " →",
          " ",
          String(change.new || "null")
        ] }, index)),
        changes.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: [
          "+",
          changes.length - 3,
          " more changes"
        ] })
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: [
      action,
      " action performed"
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { sx: { minWidth: 800 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: auditLogs.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TableRow,
        {
          sx: {
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.main, 0.04)
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: getActionColor(log.action), variant: "soft", children: getActionLabel(log.action) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: renderUser(log.user) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: renderChanges(log.old_data, log.new_data, log.action) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: fDateTime(log.created_at) }) })
          ]
        },
        log.id
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TablePagination,
      {
        component: "div",
        count: auditLogsCount,
        page,
        onPageChange: (_, newPage) => setPage(newPage),
        rowsPerPage,
        onRowsPerPageChange: (e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        },
        rowsPerPageOptions: [5, 10, 25]
      }
    )
  ] });
}
function InfoRow$1({ icon, label, value, color = "primary" }) {
  const theme = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "flex-start", gap: 1.5 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          mt: 0.25,
          width: 34,
          height: 34,
          borderRadius: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          bgcolor: alpha(theme.palette[color]?.main ?? theme.palette.primary.main, 0.1)
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Iconify,
          {
            icon,
            width: 18,
            sx: { color: theme.palette[color]?.main ?? theme.palette.primary.main }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", display: "block", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          variant: "body2",
          fontWeight: 500,
          sx: { wordBreak: "break-word", textWrap: "wrap", whiteSpace: "pre-line" },
          children: value || /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", sx: { color: "text.disabled", fontStyle: "italic" }, children: "Not provided" })
        }
      )
    ] })
  ] });
}
function InfoCard({ title, icon, rows }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3, height: 1, borderRadius: 2 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { mb: 2.5 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 22, sx: { color: "primary.main" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", fontWeight: 600, children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, children: rows.map((row, index) => {
      if (!row.value) {
        return null;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow$1, { icon: row.icon, label: row.label, value: row.value, color: row.color }),
        index !== rows.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } })
      ] }, `${row.label}-${index}`);
    }) })
  ] });
}
function StatCard({ title, value, icon, color = "primary", subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", gutterBottom: true, children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { color: `${color}.main` }, children: value }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { mt: 0.5, display: "block" }, children: subtitle })
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
          bgcolor: (theme) => alpha(theme.palette[color].main, 0.08),
          flexShrink: 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 28, sx: { color: `${color}.main` } })
      }
    )
  ] }) });
}
function SectionTitle({ icon, title, subtitle, color = "primary" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, sx: { mb: 2 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          width: 32,
          height: 32,
          display: "flex",
          borderRadius: 1.5,
          alignItems: "center",
          justifyContent: "center",
          bgcolor: (theme) => alpha(theme.palette[color].main, 0.12),
          color: `${color}.main`,
          flexShrink: 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 18 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: subtitle })
    ] })
  ] });
}
function NotesCard({ client }) {
  if (!client.internal_notes && !client.style_preferences && !client.color_formula_notes)
    return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        icon: "solar:document-text-bold-duotone",
        title: "Notes & Preferences",
        color: "warning"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
      client.style_preferences && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            sx: {
              color: "text.disabled",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 0.5
            },
            children: "Style Preferences"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "body2",
            color: "text.secondary",
            sx: { mt: 0.5, whiteSpace: "pre-wrap" },
            children: client.style_preferences
          }
        )
      ] }),
      client.color_formula_notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            sx: {
              color: "text.disabled",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 0.5
            },
            children: "Colour Formula"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "body2",
            color: "text.secondary",
            sx: { mt: 0.5, whiteSpace: "pre-wrap" },
            children: client.color_formula_notes
          }
        )
      ] }),
      client.internal_notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            sx: {
              color: "text.disabled",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 0.5
            },
            children: "Internal Notes"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "body2",
            color: "text.secondary",
            sx: { mt: 0.5, whiteSpace: "pre-wrap" },
            children: client.internal_notes
          }
        )
      ] })
    ] })
  ] }) });
}
function LoyaltyCard({ clientId, client }) {
  const { balance, balanceLoading } = useGetClientLoyaltyBalance(clientId);
  const points = balance?.loyalty_points ?? client?.loyalty_points ?? 0;
  const tier = balance?.loyalty_tiers;
  const expiry = balance?.loyalty_points_expiry;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { mb: 0.5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: "Loyalty Points" }),
        tier && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: tier.name,
            size: "small",
            sx: {
              bgcolor: tier.color || "warning.main",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.68rem",
              height: 18
            }
          }
        )
      ] }),
      balanceLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, { sx: { borderRadius: 1, width: 80, mt: 1 } }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", color: "warning.main", children: fNumber(points) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            color: "text.disabled",
            sx: { mt: 0.5, display: "block" },
            children: expiry ? `Expires ${fDate(expiry)}` : "Points never expire"
          }
        )
      ] })
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
          bgcolor: (t) => alpha(t.palette.warning.main, 0.08),
          flexShrink: 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:star-bold-duotone", width: 28, sx: { color: "warning.main" } })
      }
    )
  ] }) });
}
function CashbackCard({ clientId }) {
  const { wallet } = useGetClientCashbackWallet(clientId);
  const noteText = wallet ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Earned: ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: fCurrency(wallet.total_earned) }),
    " · Redeemed:",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: fCurrency(wallet.total_redeemed) })
  ] }) : "No cashback recorded";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", gutterBottom: true, children: "Cashback Wallet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", color: "success.main", children: wallet ? fCurrency(wallet.balance) : "$0.00" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { mt: 0.5, display: "block" }, children: noteText })
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
          bgcolor: (t) => alpha(t.palette.success.main, 0.08),
          flexShrink: 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Iconify,
          {
            icon: "solar:wallet-money-bold-duotone",
            width: 28,
            sx: { color: "success.main" }
          }
        )
      }
    )
  ] }) });
}
function UpcomingCard({ clientId }) {
  const tomorrow = /* @__PURE__ */ new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const { appointments, isLoading } = useClientAppointments(clientId, {
    includeCompleted: false,
    startDate: tomorrow.toISOString()
  });
  const upcoming = appointments?.filter((a) => a.status === "confirmed" || a.status === "scheduled") ?? [];
  upcoming.sort((a, b) => new Date(a.appointment_date) - new Date(b.appointment_date));
  const next = upcoming[0];
  const serviceNote = next ? next.services?.map((s) => s.service_name).join(", ") || "No services listed" : "No upcoming appointments";
  const countNote = upcoming.length > 1 ? ` · +${upcoming.length - 1} more` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", gutterBottom: true, children: "Upcoming" }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, { sx: { borderRadius: 1, width: 80, mt: 1 } }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { color: next ? "info.main" : "text.disabled" }, children: next ? fDate(next.appointment_date) : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Typography,
          {
            variant: "caption",
            color: "text.disabled",
            sx: { mt: 0.5, display: "block" },
            children: [
              serviceNote,
              countNote,
              " appointments after this."
            ]
          }
        )
      ] })
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
          bgcolor: (t) => alpha(t.palette.info.main, 0.08),
          flexShrink: 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:calendar-date-bold-duotone", width: 28, sx: { color: "info.main" } })
      }
    )
  ] }) });
}
function RelativesCard({ client }) {
  const ids = client?.relative_client_ids;
  const { clients, clientsLoading } = useClientsByIds(ids?.length ? ids : null);
  if (!ids?.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        icon: "solar:people-nearby-bold-duotone",
        title: "Family & Relatives",
        color: "info"
      }
    ),
    clientsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "Loading…" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { divider: /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}), spacing: 0, children: clients.map((relative) => {
      const fullName = [relative.first_name, relative.last_name].filter(Boolean).join(" ");
      const initials = [relative.first_name?.[0], relative.last_name?.[0]].filter(Boolean).join("").toUpperCase();
      const phone = formatPhoneNumberIntl(relative.phone_primary) || null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          component: RouterLink,
          href: paths.dashboard.clients.profile(relative.id),
          direction: "row",
          alignItems: "center",
          spacing: 1.5,
          sx: {
            py: 1.25,
            color: "text.primary",
            textDecoration: "none",
            borderRadius: 1,
            mx: -1,
            px: 1,
            transition: "background-color 0.15s",
            "&:hover": { bgcolor: "action.hover" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Avatar,
              {
                src: relative.profile_photo_url,
                sx: { width: 36, height: 36, fontSize: 13, flexShrink: 0 },
                children: initials
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, noWrap: true, children: [
                fullName,
                relative.preferred_name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Typography,
                  {
                    component: "span",
                    variant: "caption",
                    color: "text.secondary",
                    sx: { ml: 0.5 },
                    children: [
                      "(",
                      relative.preferred_name,
                      ")"
                    ]
                  }
                )
              ] }),
              (phone || relative.email) && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, display: "block", children: [phone, relative.email].filter(Boolean).join(" · ") })
            ] })
          ]
        },
        relative.id
      );
    }) })
  ] }) });
}
const STATUS_COLORS = {
  scheduled: "#006B96",
  confirmed: "#36B37E",
  checked_in: "#0055CC",
  in_progress: "#FF991F",
  completed: "#216E4E",
  cancelled: "#AE2A19",
  no_show: "#626F86"
};
function getAppointmentColor(status) {
  return STATUS_COLORS[status] || "#000000";
}
function ClientHistoryCard({ clientId, hidestats }) {
  const { appointments, isLoading } = useClientAppointments(clientId, { pageSize: 200 });
  const { sales, salesLoading } = useGetClientSales(clientId, 0, 200);
  const { statistics, statisticsLoading } = useClientStatistics(clientId);
  const mergedItems = reactExports.useMemo(() => {
    const apptItems = (appointments || []).map((a) => ({
      type: "appointment",
      date: /* @__PURE__ */ new Date(`${a.appointment_date}T${a.start_time || "00:00:00"}`),
      data: a
    }));
    const saleItems = (sales || []).filter((s) => s.items?.some((i) => i.service !== null)).map((s) => ({
      type: "sale",
      date: new Date(s.created_at),
      data: s
    }));
    return [...apptItems, ...saleItems].sort((a, b) => b.date - a.date);
  }, [appointments, sales]);
  const combinedLoading = isLoading || salesLoading;
  const [page, setPage] = reactExports.useState(0);
  const ITEMS_PER_PAGE = 5;
  const totalPages = mergedItems ? Math.ceil(mergedItems.length / ITEMS_PER_PAGE) : 1;
  const paginatedItems = mergedItems ? mergedItems.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE) : [];
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));
  const formatTime = (timeStr) => {
    if (!timeStr) return "";
    const [hours, minutes] = timeStr.split(":");
    const date = dayjs().hour(hours).minute(minutes);
    return date.format("h:mm a");
  };
  const formatMinutes = (mins) => {
    if (!mins) return "--";
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h === 0) return `${m}m`;
    return m === 0 ? `${h}h` : `${h}h ${m}m`;
  };
  const vs = statistics?.visit_statistics;
  const ss = statistics?.spending_statistics;
  const items = [
    // { label: 'Last Visit', value: fDate(vs?.last_completed_appointment_date) },
    {
      label: "Appointment Visits",
      value: statisticsLoading ? "..." : vs?.appointment_visits ?? "--"
    },
    // { label: 'POS Visits', value: statisticsLoading ? '...' : (vs?.pos_visits ?? '--') },
    // { label: 'Total Visits', value: statisticsLoading ? '...' : (vs?.total_visits ?? '--') },
    {
      label: "Total Time Spent",
      value: statisticsLoading ? "..." : formatMinutes(vs?.total_minutes_spent)
    },
    { label: "Spent on Appointments", value: fCurrency(ss?.total_spent_appointments) },
    // { label: 'Spent on Services (POS)', value: fCurrency(ss?.total_spent_pos_services) },
    // { label: 'Spent on Products (POS)', value: fCurrency(ss?.total_spent_pos_products) },
    // { label: 'Total Spent', value: fCurrency(ss?.total_spent) },
    { label: "Favorite Stylist", value: statistics?.preferences?.favorite_stylist?.name }
  ];
  const renderSummary = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Paper,
    {
      variant: "outlined",
      sx: {
        p: 2.5,
        gap: 2,
        minWidth: 260,
        flexShrink: 0,
        borderRadius: 2,
        display: "flex",
        typography: "body2",
        borderStyle: "dashed",
        flexDirection: "column"
      },
      children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { gap: 0.5, display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", sx: { color: "text.secondary" }, children: item.label }),
        item.value || "--"
      ] }, item.label))
    }
  );
  const renderTimeline = () => {
    if (combinedLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Timeline,
        {
          sx: {
            p: 0,
            minHeight: 320,
            [`& .${timelineItemClasses.root}:before`]: { p: 0, flex: 0 }
          },
          children: Array.from({ length: 5 }).map((_, idx) => {
            const lastTime = idx === 4;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineItem, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineSeparator, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "circular", width: 20, height: 20 }),
                lastTime ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineConnector, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 200, height: 24, sx: { mb: 1 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 150, height: 16 })
              ] })
            ] }, idx);
          })
        }
      );
    }
    if (paginatedItems.length === 0 && !combinedLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          title: "No history yet",
          description: "This client has no appointment or sale history.",
          sx: { minHeight: 320 }
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Timeline,
      {
        sx: {
          p: 0,
          minHeight: 320,
          [`& .${timelineItemClasses.root}:before`]: { p: 0, flex: 0 }
        },
        children: paginatedItems.map((item, idx) => {
          const lastTime = idx === paginatedItems.length - 1;
          if (item.type === "appointment") {
            const appt = item.data;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineItem, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineSeparator, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: appt.status, placement: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDot, { sx: { bgcolor: getAppointmentColor(appt.status) } }) }),
                lastTime ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineConnector, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TimelineContent,
                {
                  component: RouterLink,
                  href: paths.dashboard.appointments.details(appt.id),
                  sx: {
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none", color: "primary.main" }
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1, alignItems: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", children: [
                      appt?.services[0]?.service_name,
                      appt?.services.length > 1 ? ` +${appt?.services.length - 1} Other Services` : ""
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Box,
                      {
                        component: "span",
                        sx: { color: "text.disabled", typography: "caption", mt: 0.5 },
                        children: [
                          fDate(appt.appointment_date),
                          " - ",
                          formatTime(appt.start_time),
                          " -",
                          " ",
                          formatTime(appt.end_time)
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
                  ]
                }
              )
            ] }, `appt-${appt.id}`);
          }
          const sale = item.data;
          const serviceItems = sale.items?.filter((i) => i.service !== null) || [];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineItem, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TimelineSeparator, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "POS Sale", placement: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDot, { sx: { bgcolor: "#7B61FF" } }) }),
              lastTime ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineConnector, {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TimelineContent,
              {
                component: RouterLink,
                href: paths.dashboard.pos.saleDetails(sale.id),
                sx: {
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "none", color: "primary.main" }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", children: [
                      serviceItems[0]?.service?.name,
                      serviceItems.length > 1 ? ` +${serviceItems.length - 1} Other Services` : ""
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        variant: "caption",
                        sx: {
                          px: 0.75,
                          py: 0.25,
                          borderRadius: 0.75,
                          bgcolor: "#7B61FF22",
                          color: "#7B61FF",
                          fontWeight: 600
                        },
                        children: "POS"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Box,
                    {
                      component: "span",
                      sx: { color: "text.disabled", typography: "caption", mt: 0.5 },
                      children: [
                        fDate(sale.created_at),
                        " - ",
                        dayjs(sale.created_at).format("h:mm a")
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
                ]
              }
            )
          ] }, `sale-${sale.id}`);
        })
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Appointments History" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          p: 3,
          gap: 3,
          display: "flex",
          alignItems: { md: "flex-start" },
          flexDirection: { xs: "column-reverse", md: "row" }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flexGrow: 1 }, children: [
            renderTimeline(),
            totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, sx: { mt: 2 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "small",
                  color: "inherit",
                  onClick: handlePrev,
                  disabled: page === 0,
                  startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-back-fill", width: 18 }),
                  children: "Previous"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { alignSelf: "center" }, children: [
                "Page ",
                page + 1,
                " of ",
                totalPages
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "small",
                  color: "inherit",
                  onClick: handleNext,
                  disabled: page >= totalPages - 1,
                  endIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-forward-fill", width: 18 }),
                  children: "Next"
                }
              )
            ] })
          ] }),
          !hidestats && renderSummary()
        ]
      }
    )
  ] });
}
function HealthAlertsCard({ client }) {
  const hasAlerts = client.allergies || client.sensitivities || client.medical_conditions || client.medications || client.pregnancy_nursing;
  if (!hasAlerts) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      sx: {
        height: "100%",
        border: (t) => `1px solid ${alpha(t.palette.error.main, 0.24)}`,
        bgcolor: (t) => alpha(t.palette.error.main, 0.02)
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { icon: "solar:health-bold-duotone", title: "Health Alerts", color: "error" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
          client.pregnancy_nursing && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Paper,
            {
              sx: {
                p: 1.5,
                borderRadius: 1.5,
                bgcolor: (t) => alpha(t.palette.warning.main, 0.08),
                border: (t) => `1px dashed ${alpha(t.palette.warning.main, 0.4)}`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:heart-pulse-bold", width: 18, sx: { color: "warning.main" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 700, color: "warning.dark", children: "Pregnant / Nursing" })
              ] })
            }
          ),
          client.allergies && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                color: "text.secondary",
                sx: {
                  display: "block",
                  fontWeight: 600
                },
                children: "Allergies"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "error", sx: { mb: 0.75, fontSize: "0.7rem" }, children: client.allergies })
          ] }),
          client.sensitivities && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                color: "text.secondary",
                sx: {
                  display: "block",
                  fontWeight: 600
                },
                children: "Sensitivities"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "warning", sx: { mb: 0.75, fontSize: "0.7rem" }, children: client.sensitivities })
          ] }),
          client.medical_conditions && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "caption",
                color: "text.secondary",
                sx: {
                  display: "block",
                  fontWeight: 600
                },
                children: [
                  " ",
                  "Medical Conditions"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "info", sx: { mb: 0.75, fontSize: "0.7rem" }, children: client.medical_conditions })
          ] }),
          client.medications && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "default", sx: { mb: 0.75, fontSize: "0.7rem" }, children: "Medications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: "block" }, children: client.medications })
          ] })
        ] })
      ] })
    }
  );
}
function InfoRow({ label, value, icon }) {
  if (!value && value !== 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, sx: { py: 0.75 }, children: [
    icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 16, sx: { color: "text.disabled", flexShrink: 0 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary", minWidth: 90, flexShrink: 0 }, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 500, noWrap: true, sx: { flex: 1 }, children: value })
  ] });
}
const PODIUM_CONFIGS = [
  { rank: "2", label: "2nd", color: "#9E9E9E", bg: "rgba(158,158,158,0.10)", blockHeight: 44 },
  { rank: "1", label: "1st", color: "#F5A623", bg: "rgba(245,166,35,0.12)", blockHeight: 64 },
  { rank: "3", label: "3rd", color: "#CD7F32", bg: "rgba(205,127,50,0.10)", blockHeight: 32 }
];
const DISPLAY_ORDER = [1, 0, 2];
function ServicePodiumCard({ services = [] }) {
  const [open, setOpen] = reactExports.useState(false);
  const top = services.slice(0, 3);
  const rest = services.slice(3);
  const ordered = DISPLAY_ORDER.map((realIdx, displayIdx) => {
    const s = top[realIdx];
    return s ? { ...s, ...PODIUM_CONFIGS[displayIdx] } : null;
  });
  if (!top.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 2 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { fontWeight: 600, textTransform: "capitalize", display: "block", mb: 1.5 },
        children: "Top Purchased Services"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", alignItems: "flex-end", gap: 0.75 }, children: ordered.map((item, displayIdx) => {
      if (!item) return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1 } }, displayIdx);
      const isFirst = displayIdx === 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                fontWeight: isFirst ? 700 : 600,
                align: "center",
                sx: {
                  color: "text.primary",
                  fontSize: isFirst ? "0.7rem" : "0.65rem",
                  lineHeight: 1.3,
                  px: 0.5,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                },
                children: item.service_name
              }
            ),
            item.count != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "caption",
                sx: { fontSize: "0.6rem", color: item.color, fontWeight: 700 },
                children: [
                  "×",
                  item.count
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                sx: {
                  width: "100%",
                  height: item.blockHeight,
                  bgcolor: item.bg,
                  border: `1.5px solid ${item.color}40`,
                  borderRadius: "6px 6px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 0.25
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: isFirst ? "solar:cup-star-bold-duotone" : "solar:medal-ribbon-bold-duotone",
                      width: isFirst ? 22 : 18,
                      sx: { color: item.color }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      sx: { fontWeight: 800, color: item.color, fontSize: "0.6rem", lineHeight: 1 },
                      children: item.label
                    }
                  )
                ]
              }
            )
          ]
        },
        displayIdx
      );
    }) }),
    rest.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ButtonBase,
        {
          onClick: () => setOpen((prev) => !prev),
          sx: {
            mt: 1,
            width: "100%",
            py: 0.5,
            px: 1,
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
            color: "text.secondary",
            "&:hover": { bgcolor: "action.hover" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontWeight: 600, fontSize: "0.65rem" }, children: open ? "View less" : `+${rest.length} more` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Iconify,
              {
                icon: open ? "solar:alt-arrow-up-bold" : "solar:alt-arrow-down-bold",
                width: 12
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0.5, sx: { mt: 0.75 }, children: rest.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          sx: {
            px: 1,
            py: 0.5,
            borderRadius: 1,
            bgcolor: "action.hover"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 600, noWrap: true, sx: { flex: 1 }, children: s.service_name }),
            s.count != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: `×${s.count}`,
                size: "small",
                sx: {
                  height: 16,
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  "& .MuiChip-label": { px: 0.75 }
                }
              }
            )
          ]
        },
        i
      )) }) })
    ] })
  ] });
}
function BeautyProfileCard({ client, statistics }) {
  const favStylist = statistics?.preferences?.favorite_stylist?.name;
  const topPurchasedServices = statistics?.preferences?.favorite_services ?? [];
  const hasContent = favStylist || client.favorite_services?.length > 0 || client.beverage_preference || client.music_preference || client.preferred_appointment_days || client.preferred_appointment_time;
  if (!hasContent) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { icon: "solar:bookmark-bold-duotone", title: " Preferences", color: "secondary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicePodiumCard, { services: topPurchasedServices }),
    client.favorite_services?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 600,
            textTransform: "capitalize"
          },
          children: "Preferred Services"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", flexWrap: "wrap", gap: 0.75, sx: { mt: 0.75 }, children: client.favorite_services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: s, size: "small", variant: "soft" }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, divider: /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { flexItem: true }), children: [
      favStylist && /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Fav. Stylist", icon: "solar:user-heart-bold", value: favStylist }),
      client.beverage_preference && /* @__PURE__ */ jsxRuntimeExports.jsx(
        InfoRow,
        {
          label: "Beverage",
          icon: "solar:cup-hot-bold",
          value: client.beverage_preference
        }
      ),
      client.music_preference && /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Music", icon: "solar:music-note-bold", value: client.music_preference })
    ] })
  ] }) });
}
function SalesInsightsCard({ statistics }) {
  const vs = statistics?.visit_statistics ?? {};
  const ss = statistics?.spending_statistics ?? {};
  const metrics = [
    {
      label: "Avg Monthly Spend",
      value: fCurrency(ss.avg_monthly_spend ?? 0),
      icon: "solar:chart-2-bold-duotone",
      color: "success"
    },
    {
      label: "Avg Monthly Visits",
      value: ss.avg_monthly_visits ?? 0,
      icon: "solar:calendar-mark-bold-duotone",
      color: "info"
    },
    {
      label: "Visits (Last 30 days)",
      value: vs.appointments_last_30_days ?? 0,
      icon: "solar:calendar-date-bold-duotone",
      color: "primary"
    },
    {
      label: "Visits (Last 90 days)",
      value: vs.appointments_last_90_days ?? 0,
      icon: "solar:calendar-search-bold-duotone",
      color: "warning"
    },
    {
      label: "Avg Days Between Visits",
      value: vs.avg_days_between_visits ? `${vs.avg_days_between_visits}d` : "—",
      icon: "solar:clock-circle-bold-duotone",
      color: "secondary"
    },
    {
      label: "Highest Monthly Spend",
      value: fCurrency(ss.highest_monthly_spend ?? 0),
      icon: "solar:graph-up-bold-duotone",
      color: "error"
    },
    {
      label: "Last Visit",
      value: vs.last_completed_appointment_date ? fDate(vs.last_completed_appointment_date) : "—",
      icon: "solar:calendar-bold-duotone",
      color: "info"
    },
    {
      label: "Outstanding Balance",
      value: fCurrency(ss.outstanding_balances ?? 0),
      icon: "solar:bill-list-bold-duotone",
      color: (ss.outstanding_balances ?? 0) > 0 ? "error" : "success"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        icon: "solar:chart-bold-duotone",
        title: "Sales Insights",
        subtitle: "Completed sales only",
        color: "success"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(4, 1fr)"
          }
        },
        children: metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Paper,
          {
            variant: "outlined",
            sx: {
              p: 2,
              borderRadius: 2,
              textAlign: "center",
              borderColor: (t) => alpha(t.palette[m.color].main, 0.24),
              bgcolor: (t) => alpha(t.palette[m.color].main, 0.04)
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  sx: {
                    width: 36,
                    height: 36,
                    mx: "auto",
                    mb: 1,
                    display: "flex",
                    borderRadius: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: (t) => alpha(t.palette[m.color].main, 0.12),
                    color: `${m.color}.main`
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: m.icon, width: 18 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: m.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  color: "text.secondary",
                  sx: { display: "block", mt: 0.25 },
                  children: m.label
                }
              )
            ]
          },
          m.label
        ))
      }
    )
  ] }) });
}
const RANK_COLORS = ["#F5A623", "#9E9E9E", "#CD7F32", "#5C6BC0", "#26A69A"];
function FavoriteProductsCard({ statistics }) {
  const products = statistics?.preferences?.favorite_products ?? [];
  if (!products.length) return null;
  const maxCount = products[0]?.times_purchased ?? 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { icon: "solar:bag-5-bold-duotone", title: "Favourite Products", color: "warning" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, divider: /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { flexItem: true }), children: products.map((product, index) => {
      const color = RANK_COLORS[index] ?? RANK_COLORS[RANK_COLORS.length - 1];
      const pct = Math.round(product.times_purchased / maxCount * 100);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, sx: { mb: 0.75 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                width: 28,
                height: 28,
                flexShrink: 0,
                display: "flex",
                borderRadius: 1,
                alignItems: "center",
                justifyContent: "center",
                bgcolor: alpha(color, 0.12),
                color
              },
              children: index === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:cup-star-bold", width: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", fontWeight: 700, sx: { color }, children: [
                "#",
                index + 1
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "body2",
                fontWeight: index === 0 ? 700 : 600,
                noWrap: true,
                textTransform: "capitalize",
                title: product.product_name,
                children: product.product_name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
              fCurrency(product.total_spent ?? 0),
              " spent"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", fontWeight: 700, sx: { color, flexShrink: 0 }, children: [
            "×",
            product.times_purchased
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LinearProgress,
          {
            variant: "determinate",
            value: pct,
            sx: {
              height: 4,
              borderRadius: 2,
              bgcolor: alpha(color, 0.12),
              "& .MuiLinearProgress-bar": { bgcolor: color, borderRadius: 2 }
            }
          }
        )
      ] }, product.product_name ?? index);
    }) })
  ] }) });
}
function HairColorSwatch({ label, value }) {
  if (!value) return null;
  const hex = resolveHairColor(value);
  const isLight = isLightHairColor(hex);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        p: 1,
        borderRadius: 1,
        border: "1px solid",
        borderColor: "divider",
        height: "100%"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              variant: "caption",
              color: "text.disabled",
              display: "block",
              sx: { fontSize: "0.65rem" },
              children: label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              variant: "caption",
              sx: {
                fontWeight: 700,
                color: "text.primary",
                fontSize: "0.75rem",
                textTransform: "capitalize"
              },
              children: value
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              width: 28,
              height: 28,
              borderRadius: "50%",
              bgcolor: hex,
              border: "2px solid",
              borderColor: isLight ? "divider" : "transparent",
              boxShadow: `0 2px 6px ${hex}55`,
              flexShrink: 0
            }
          }
        )
      ] })
    }
  );
}
function HairCharacteristicsCard({ client }) {
  const { recordCount } = useClientHairRecordCount(client?.id);
  const texture = client.hair_texture?.toLowerCase().replace("_", " ");
  const length = client.hair_length?.toLowerCase();
  const density = client.hair_density?.toLowerCase();
  const porosity = client.hair_porosity?.toLowerCase();
  const scalpRaw = client.scalp_condition?.toLowerCase().replace(/_/g, " ");
  const lengthIdx = LENGTH_SCALE.findIndex((l) => l === length || l === length?.replace(" ", "_"));
  const lengthPct = lengthIdx >= 0 ? Math.round((lengthIdx + 1) / LENGTH_SCALE.length * 100) : null;
  const densityInfo = density ? DENSITY_CONFIG[density] ?? { label: density, fill: 3, color: "#42a5f5" } : null;
  const porosityInfo = porosity ? POROSITY_CONFIG[porosity] ?? null : null;
  const scalpInfo = scalpRaw ? SCALP_CONFIG[scalpRaw] ?? { color: "default", label: scalpRaw } : null;
  const activeTexture = TEXTURE_OPTIONS.find(
    (t) => texture && (texture.includes(t.key) || t.key.includes(texture))
  );
  const hasAnyData = client.natural_hair_color || client.current_hair_color || client.hair_texture || client.hair_length || client.hair_density || client.scalp_condition || client.hair_porosity;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      sx: {
        height: "100%",
        overflow: "hidden",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardHeader,
          {
            title: "Hair Characteristics",
            avatar: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 32,
                  height: 32,
                  display: "flex",
                  borderRadius: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: (theme) => alpha(theme.palette["primary"].main, 0.12),
                  color: `${"primary"}.main`
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:scissors-square-bold-duotone", width: 18 })
              }
            ),
            action: recordCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                component: RouterLink,
                href: "?tab=hair",
                variant: "caption",
                sx: {
                  mt: 0.75,
                  mr: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.25,
                  fontWeight: 600
                },
                children: [
                  recordCount,
                  " ",
                  recordCount === 1 ? "record" : "records",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-forward-fill", width: 14 })
                ]
              }
            ),
            sx: {
              "& .MuiCardHeader-avatar": {
                mr: 2
              },
              "& .MuiCardHeader-title": {
                fontWeight: 600,
                color: "text.primary",
                fontSize: "1rem"
              },
              pb: 2
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { pt: 2.5, pb: "16px !important" }, children: !hasAnyData ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { py: 3, textAlign: "center", color: "text.secondary" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "No hair data recorded" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
          (client.natural_hair_color || client.current_hair_color) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, sx: { mb: 0.75 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:palette-bold", width: 13, sx: { color: "text.secondary" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontWeight: 600, color: "text.secondary" }, children: "Color Profile" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 1, children: [
              client.natural_hair_color && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: client.current_hair_color ? 6 : 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HairColorSwatch, { label: "Natural", value: client.natural_hair_color }) }),
              client.current_hair_color && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: client.natural_hair_color ? 6 : 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HairColorSwatch, { label: "Current", value: client.current_hair_color }) })
            ] })
          ] }),
          client.hair_texture && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, sx: { mb: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Iconify,
                {
                  icon: "solar:magic-stick-3-bold",
                  width: 13,
                  sx: { color: "text.secondary" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontWeight: 600, color: "text.secondary" }, children: "Texture" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.75, flexWrap: "wrap", gap: 0.75, children: TEXTURE_OPTIONS.map((t) => {
              const isActive = activeTexture?.key === t.key;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: t.icon, width: 14 }),
                  label: t.label,
                  size: "small",
                  variant: isActive ? "filled" : "outlined",
                  color: isActive ? "primary" : "default",
                  sx: {
                    fontWeight: isActive ? 700 : 400,
                    fontSize: "0.75rem",
                    opacity: isActive ? 1 : 0.45,
                    borderRadius: 1,
                    "& .MuiChip-icon": { ml: 0.75, mr: -0.25 }
                  }
                },
                t.key
              );
            }) })
          ] }),
          client.hair_length && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                sx: { mb: 0.75 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Iconify,
                      {
                        icon: "solar:ruler-pen-bold",
                        width: 13,
                        sx: { color: "text.secondary" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontWeight: 600, color: "text.secondary" }, children: "Length" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.5, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Iconify,
                      {
                        icon: "solar:arrow-right-bold",
                        width: 12,
                        sx: { color: "primary.main" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        variant: "caption",
                        sx: { fontWeight: 700, color: "primary.main", fontSize: "0.75rem" },
                        children: lengthIdx >= 0 ? LENGTH_LABELS[LENGTH_SCALE[lengthIdx]] : client.hair_length?.replace("_", " ")
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  position: "relative",
                  height: 8,
                  borderRadius: 4,
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1)
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: `${lengthPct ?? 50}%`,
                      borderRadius: 4,
                      background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                      transition: "width 0.6s ease"
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", sx: { mt: 0.5 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  sx: { color: "text.secondary", fontSize: "0.65rem" },
                  children: "Buzz"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  sx: { color: "text.secondary", fontSize: "0.65rem" },
                  children: "Floor"
                }
              )
            ] })
          ] }),
          densityInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                sx: { mb: 1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:layers-bold", width: 14, sx: { color: "text.secondary" } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontWeight: 600, color: "text.secondary" }, children: "Density" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      sx: { fontWeight: 700, color: "text.primary", fontSize: "0.75rem" },
                      children: densityInfo.label
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.75, children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  flex: 1,
                  height: 6 + i * 2,
                  borderRadius: 1,
                  bgcolor: i < densityInfo.fill ? densityInfo.color : (theme) => alpha(theme.palette.grey[500], 0.12),
                  alignSelf: "flex-end",
                  transition: "background-color 0.3s"
                }
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 1, children: [
            porosityInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: client.scalp_condition ? 6 : 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  p: 1,
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                  height: "100%"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        variant: "caption",
                        color: "text.disabled",
                        display: "block",
                        sx: { fontSize: "0.65rem", fontWeight: 600, color: "text.secondary" },
                        children: "Porosity"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        variant: "caption",
                        sx: { fontWeight: 700, color: porosityInfo.color, fontSize: "0.75rem" },
                        children: porosityInfo.label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        variant: "caption",
                        color: "text.disabled",
                        display: "block",
                        sx: { fontSize: "0.65rem" },
                        children: porosityInfo.description
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      sx: {
                        width: 28,
                        height: 28,
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: `${porosityInfo.color}18`,
                        flexShrink: 0
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Iconify,
                        {
                          icon: "solar:waterdrop-bold-duotone",
                          width: 16,
                          sx: { color: porosityInfo.color }
                        }
                      )
                    }
                  )
                ] })
              }
            ) }),
            scalpInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: client.hair_porosity ? 6 : 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  p: 1,
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                  height: "100%"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        variant: "caption",
                        color: "text.disabled",
                        display: "block",
                        sx: { fontSize: "0.65rem", fontWeight: 600, color: "text.secondary" },
                        children: "Scalp"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        variant: "caption",
                        sx: {
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          color: (theme) => theme.palette[scalpInfo.color]?.main ?? "text.primary",
                          textTransform: "capitalize"
                        },
                        children: scalpInfo.label
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      sx: {
                        width: 28,
                        height: 28,
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: (theme) => alpha(
                          theme.palette[scalpInfo.color]?.main ?? theme.palette.grey[400],
                          0.12
                        ),
                        flexShrink: 0
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Iconify,
                        {
                          icon: "solar:health-bold",
                          width: 16,
                          sx: {
                            color: (theme) => theme.palette[scalpInfo.color]?.main ?? "text.primary"
                          }
                        }
                      )
                    }
                  )
                ] })
              }
            ) })
          ] })
        ] }) })
      ]
    }
  );
}
const ALL_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIME_SLOT_META = {
  Morning: {
    icon: "solar:sun-fog-bold-duotone",
    color: "#F59E0B",
    label: "Morning",
    sub: "Before noon"
  },
  Afternoon: {
    icon: "solar:sun-bold-duotone",
    color: "#F97316",
    label: "Afternoon",
    sub: "12 – 5 pm"
  },
  Evening: {
    icon: "solar:moon-stars-bold-duotone",
    color: "#6366F1",
    label: "Evening",
    sub: "After 5 pm"
  }
};
function BookingPreferencesCard({ statistics }) {
  const prefs = statistics?.preferences?.booking_preferences ?? {};
  const preferredDays = prefs.preferred_days ?? [];
  const preferredTimes = prefs.preferred_times ?? [];
  const hasData = preferredDays.length > 0 || preferredTimes.length > 0;
  if (!hasData) return null;
  const dayCountMap = Object.fromEntries((preferredDays ?? []).map((d) => [d.day, d.count]));
  const maxDayCount = Math.max(1, ...Object.values(dayCountMap));
  const timeCountMap = Object.fromEntries((preferredTimes ?? []).map((t) => [t.slot, t.count]));
  const maxTimeCount = Math.max(1, ...Object.values(timeCountMap));
  const TIME_ORDER = ["Morning", "Afternoon", "Evening"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { icon: "solar:calendar-bold-duotone", title: "Booking Preferences", color: "info" }),
    preferredDays.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            display: "block",
            mb: 1.25
          },
          children: "Preferred days"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.75, justifyContent: "space-between", children: ALL_DAYS.map((day) => {
        const count = dayCountMap[day] ?? 0;
        const intensity = count / maxDayCount;
        const isActive = count > 0;
        const isTop = preferredDays[0]?.day === day;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            title: isActive ? `${count} visit${count !== 1 ? "s" : ""}` : "No visits",
            placement: "top",
            arrow: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                sx: {
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0.5,
                  cursor: "default"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      sx: {
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: isActive ? (t) => alpha(t.palette.info.main, 0.12 + intensity * 0.25) : "action.hover",
                        border: "1.5px solid",
                        borderColor: isActive ? (t) => alpha(t.palette.info.main, 0.3 + intensity * 0.4) : "divider",
                        boxShadow: isTop ? "0 0 0 2px #38BDF840" : "none",
                        transition: "all 0.2s"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "caption",
                          fontWeight: isTop ? 800 : isActive ? 700 : 500,
                          sx: {
                            fontSize: "0.62rem",
                            color: isActive ? "info.main" : "text.disabled"
                          },
                          children: day
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      sx: {
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: isActive ? "info.main" : "text.disabled",
                        opacity: isActive ? 1 : 0.4
                      },
                      children: isActive ? count : "·"
                    }
                  )
                ]
              }
            )
          },
          day
        );
      }) })
    ] }),
    preferredTimes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            display: "block",
            mb: 1.25
          },
          children: "Preferred times"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1, children: TIME_ORDER.map((slot) => {
        const count = timeCountMap[slot];
        if (!count) return null;
        const pct = Math.round(count / maxTimeCount * 100);
        const meta = TIME_SLOT_META[slot];
        const isTop = preferredTimes[0]?.slot === slot;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                width: 32,
                height: 32,
                flexShrink: 0,
                display: "flex",
                borderRadius: 1.5,
                alignItems: "center",
                justifyContent: "center",
                bgcolor: alpha(meta.color, 0.12),
                color: meta.color
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: meta.icon, width: 16 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", sx: { mb: 0.4 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "caption",
                  fontWeight: isTop ? 700 : 600,
                  color: isTop ? "text.primary" : "text.secondary",
                  children: [
                    meta.label,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        component: "span",
                        variant: "caption",
                        color: "text.disabled",
                        sx: { ml: 0.5 },
                        children: meta.sub
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "caption",
                  fontWeight: 700,
                  sx: { color: meta.color, flexShrink: 0, ml: 1 },
                  children: [
                    count,
                    "×"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  height: 6,
                  bgcolor: alpha(meta.color, 0.12),
                  borderRadius: 3,
                  overflow: "hidden"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      height: "100%",
                      width: `${pct}%`,
                      bgcolor: meta.color,
                      borderRadius: 3,
                      transition: "width 0.6s ease"
                    }
                  }
                )
              }
            )
          ] })
        ] }, slot);
      }) })
    ] })
  ] }) });
}
function ClientGeneral({ client, flags }) {
  const { statistics } = useClientStatistics(client?.id);
  if (!client)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        filled: true,
        title: "Client not found",
        description: "The client you are looking for does not exist."
      }
    );
  const reliabilityScore = statistics?.visit_statistics?.completion_rate ?? 100;
  const stats = [
    {
      title: "Total Visits",
      value: statistics?.visit_statistics?.total_visits ?? client.total_visits ?? 0,
      icon: "solar:calendar-mark-bold-duotone",
      color: "primary",
      subtitle: client.last_visit_date ? `Last: ${fDate(client.last_visit_date)}` : "No visits yet"
    },
    {
      title: "Total Spent",
      value: fCurrency(client.total_spent || 0),
      icon: "solar:dollar-minimalistic-bold-duotone",
      color: "success",
      subtitle: client.average_service_cost ? `Avg ${fCurrency(client.average_service_cost)} / visit` : null
    },
    {
      title: "Avg Service Cost",
      value: statistics?.spending_statistics?.avg_appointment_value ? fCurrency(statistics?.spending_statistics?.avg_appointment_value) : "$0",
      icon: "solar:chart-2-bold-duotone",
      color: "warning",
      subtitle: client.average_tip_percentage ? `${client.average_tip_percentage}% avg tip` : null
    },
    {
      title: "Reliability",
      value: `${reliabilityScore}%`,
      icon: "solar:shield-check-bold-duotone",
      color: reliabilityScore >= 80 ? "info" : "error",
      subtitle: (() => {
        const cancelled = statistics?.visit_statistics?.cancelled_appointments ?? 0;
        const noShows = statistics?.visit_statistics?.no_show_appointments ?? 0;
        if (cancelled === 0 && noShows === 0) return "No cancellations";
        const parts = [];
        if (cancelled > 0) parts.push(`${cancelled} cancellation${cancelled !== 1 ? "s" : ""}`);
        if (noShows > 0) parts.push(`${noShows} no-show${noShows !== 1 ? "s" : ""}`);
        return parts.join(" · ");
      })()
    }
  ];
  const hasHealthAlerts = client.allergies || client.sensitivities || client.medical_conditions || client.medications || client.pregnancy_nursing;
  const prefs = statistics?.preferences?.booking_preferences ?? {};
  const preferredDays = prefs.preferred_days ?? [];
  const preferredTimes = prefs.preferred_times ?? [];
  const hasPreferredDays = preferredDays.length > 0 || preferredTimes.length > 0;
  const hasHairData = client.natural_hair_color || client.current_hair_color || client.hair_texture || client.hair_length || client.hair_density || client.scalp_condition || client.hair_porosity;
  const hasRelatives = !!client.relative_client_ids?.length;
  const hasNotes = client.internal_notes || client.style_preferences || client.color_formula_notes;
  const hasPreferredProducts = statistics?.preferences?.favorite_products?.length > 0;
  const formattedAddress = (() => {
    const parts = [
      client.address_line1,
      client.address_line2,
      client.city,
      client.state,
      client.postal_code,
      client.country
    ].filter(Boolean);
    return parts.join(", ");
  })();
  const calculateAge = (dob) => {
    if (!dob) return null;
    const birthDate = new Date(dob);
    const today = /* @__PURE__ */ new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  };
  const guardianInfoDetails = {
    name: client?.guardian_name || (client?.guardian?.first_name ? `${client.guardian?.first_name} ${client.guardian?.last_name}` : null),
    email: client?.guardian_email || client?.guardian?.email,
    phone: formatPhoneNumberIntl(client?.guardian_phone) || formatPhoneNumberIntl(client?.guardian?.phone_primary) || null,
    relationship: client?.guardian_relationship || client?.guardian?.relationship || null
  };
  const GuardianInfoStringFormatted = client.is_minor ? Object.entries(guardianInfoDetails).filter(([_, value]) => value).map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`).join("\n") : null;
  const infoCardRows = [
    {
      icon: "raphael:parent",
      label: "Guardian Information",
      value: GuardianInfoStringFormatted,
      color: "primary"
    },
    {
      icon: "eva:email-fill",
      label: "Email Address",
      value: client?.email,
      color: "primary"
    },
    {
      icon: "eva:phone-fill",
      label: "Phone Number",
      value: formatPhoneNumberIntl(client?.phone_primary) || null,
      color: "primary"
    },
    {
      icon: "eva:phone-fill",
      label: "Phone Number",
      value: formatPhoneNumberIntl(client?.phone_secondary) || null,
      color: "primary"
    },
    {
      icon: "solar:calendar-bold",
      label: "Date of Birth",
      value: client?.date_of_birth ? `${fDate(client?.date_of_birth)} (${calculateAge(client?.date_of_birth)} years old)` : null,
      color: "primary"
    },
    {
      icon: "solar:user-bold-duotone",
      label: "Gender",
      value: client.gender?.replace(/_/g, " "),
      color: "primary"
    },
    {
      icon: "solar:bag-bold-duotone",
      label: "Occupation ",
      value: client.occupation,
      color: "primary"
    },
    {
      icon: "solar:clock-circle-bold",
      label: "Member Since",
      value: client?.created_at && `${fDate(client?.created_at)} · ${fTime(client?.created_at)}`,
      color: "primary"
    },
    {
      icon: "solar:map-point-bold-duotone",
      label: "Address",
      value: formattedAddress || null,
      color: "primary"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 3, sx: { mb: 3 }, children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6, md: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      StatCard,
      {
        title: stat.title,
        value: stat.value,
        icon: stat.icon,
        color: stat.color,
        subtitle: stat.subtitle ?? null
      }
    ) }, stat.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoyaltyCard, { clientId: client.id, client }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CashbackCard, { clientId: client.id }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UpcomingCard, { clientId: client.id }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientHistoryCard, { clientId: client.id }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        InfoCard,
        {
          title: "Profile Snapshot",
          icon: "solar:user-id-bold-duotone",
          rows: infoCardRows
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 3, sx: { mt: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SalesInsightsCard, { statistics }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, sx: { mt: 3 }, children: [
      hasPreferredProducts && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FavoriteProductsCard, { statistics }) }),
      hasPreferredDays && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingPreferencesCard, { statistics }) }),
      hasHairData && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: hasHealthAlerts ? 4 : 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HairCharacteristicsCard, { client }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: hasHealthAlerts ? 4 : 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BeautyProfileCard, { client, statistics }) }),
      hasHealthAlerts && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HealthAlertsCard, { client }) }),
      hasNotes && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotesCard, { client }) }),
      hasRelatives && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RelativesCard, { client }) })
    ] })
  ] });
}
function TextArea({ label, value, icon, color = "primary" }) {
  if (!value) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { mb: 1.5 }, children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 18, sx: { color: `${color}.main` } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600, color: "text.primary" }, children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          p: 2,
          borderRadius: 1.5,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.08)}`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { whiteSpace: "pre-wrap", lineHeight: 1.6 }, children: value })
      }
    )
  ] });
}
function ChipList({ label, value, icon, color = "primary" }) {
  if (!value || value.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { mb: 1.5 }, children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 18, sx: { color: `${color}.main` } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600, color: "text.primary" }, children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", flexWrap: "wrap", gap: 1, children: value.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Chip,
      {
        label: item,
        size: "small",
        variant: "soft",
        sx: {
          borderRadius: 1,
          fontWeight: 500
        }
      },
      index
    )) })
  ] });
}
function GuardianDisplay({ guardianClientId }) {
  const { client: guardian } = useClient(guardianClientId ?? null);
  if (!guardian) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Stack,
    {
      component: RouterLink,
      href: paths.dashboard.clients.profile(guardian.id),
      direction: "row",
      alignItems: "center",
      spacing: 1.5,
      sx: {
        mt: 1,
        color: "text.primary",
        textDecoration: "none",
        borderRadius: 1,
        p: 1,
        bgcolor: "action.hover",
        "&:hover": { bgcolor: "action.selected" }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { sx: { width: 32, height: 32, fontSize: 12 }, children: [
          guardian.first_name?.[0],
          guardian.last_name?.[0]
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, children: [
          guardian.first_name,
          " ",
          guardian.last_name
        ] }) })
      ]
    }
  );
}
function FieldGroup({ title, children, icon, sx, color = "primary" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mb: 4, ...sx }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        title,
        avatar: icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              width: 32,
              height: 32,
              display: "flex",
              borderRadius: 1,
              alignItems: "center",
              justifyContent: "center",
              bgcolor: (theme) => alpha(theme.palette[color].main, 0.12),
              color: `${color}.main`
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 18 })
          }
        ),
        sx: {
          "& .MuiCardHeader-avatar": {
            mr: 2
          },
          "& .MuiCardHeader-title": {
            fontWeight: 600,
            color: "text.primary",
            fontSize: "1rem"
          },
          pb: 2
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { pt: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 2, children: r.Children.map(children, (child, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: child }, index)) }) })
  ] });
}
function DetailField({ label, value, icon, capitalize = true }) {
  if (!value && value !== 0 && value !== false) {
    value = "--";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", spacing: 2, sx: { mb: 0 }, children: [
    icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          width: 32,
          height: 32,
          display: "flex",
          borderRadius: 1,
          alignItems: "center",
          justifyContent: "center",
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
          flexShrink: 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 16, sx: { color: "text.secondary" } })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          variant: "caption",
          sx: {
            color: "text.secondary",
            display: "block",
            mb: 0.5,
            fontWeight: 500,
            fontSize: "0.75rem"
          },
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          variant: "body2",
          sx: {
            fontWeight: 500,
            color: "text.primary",
            textTransform: capitalize ? "capitalize" : "none"
          },
          children: typeof value === "boolean" ? value ? "Yes" : "No" : value
        }
      )
    ] })
  ] });
}
function SectionHeader({ title, icon, color = "primary" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mb: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          width: 40,
          height: 40,
          display: "flex",
          borderRadius: 2,
          alignItems: "center",
          justifyContent: "center",
          bgcolor: (theme) => alpha(theme.palette[color].main, 0.12),
          color: `${color}.main`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 20 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { fontWeight: 600, color: "text.primary" }, children: title })
  ] }) });
}
function AddressDisplay({ formattedAddress }) {
  if (!formattedAddress) return null;
  const q = encodeURIComponent(formattedAddress.replace(/\n/g, ", "));
  const mapSrc = `https://maps.google.com/maps?q=${q}&output=embed&z=15`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, alignItems: "center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          width: { xs: "100%", sm: 200 },
          height: 130,
          borderRadius: 1.5,
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
          flexShrink: 0,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            title: "map",
            src: mapSrc,
            width: "100%",
            height: "100%",
            style: { border: 0, display: "block", pointerEvents: "none" },
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", spacing: 1, sx: { flex: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Iconify,
        {
          icon: "solar:map-point-bold-duotone",
          width: 18,
          sx: { color: "error.main", mt: 0.2, flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { whiteSpace: "pre-wrap", lineHeight: 1.7 }, children: formattedAddress })
    ] })
  ] });
}
function ClientDetailsCardsView({ client, statistics, relatives }) {
  const scrollContainerRef = reactExports.useRef(null);
  const tabScrollRef = reactExports.useRef(null);
  const [activeSection, setActiveSection] = reactExports.useState("");
  const [canScrollLeft, setCanScrollLeft] = reactExports.useState(false);
  const [canScrollRight, setCanScrollRight] = reactExports.useState(false);
  const vs = statistics?.visit_statistics ?? {};
  const sections = reactExports.useMemo(
    () => [
      { id: "personal", label: "Personal", icon: "solar:user-bold-duotone" },
      { id: "health", label: "Health & Beauty", icon: "solar:health-bold-duotone" },
      { id: "history", label: "History & Services", icon: "solar:history-bold-duotone" },
      { id: "financial", label: "Communication", icon: "solar:dollar-bold-duotone" }
    ],
    []
  );
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const elementTop = element.offsetTop - container.offsetTop;
      container.scrollTo({
        top: elementTop - 20,
        behavior: "smooth"
      });
    }
  };
  const scrollTabLeft = () => {
    if (tabScrollRef.current) {
      tabScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const scrollTabRight = () => {
    if (tabScrollRef.current) {
      tabScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const checkScrollability = () => {
    if (tabScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabScrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };
  const scrollToActiveTab = (sectionId) => {
    if (tabScrollRef.current) {
      const button = tabScrollRef.current.querySelector(`[data-section="${sectionId}"]`);
      if (button) {
        const container = tabScrollRef.current;
        const buttonLeft = button.offsetLeft;
        const buttonWidth = button.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2;
        container.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
      }
    }
  };
  reactExports.useEffect(() => {
    if (sections.length > 0 && !activeSection) {
      setActiveSection(sections[0].id);
    }
  }, [sections, activeSection]);
  reactExports.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return void 0;
    const observerOptions = {
      root: container,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.replace("section-", "");
          setActiveSection(sectionId);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      const element = document.getElementById(`section-${section.id}`);
      if (element) {
        observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, [sections]);
  reactExports.useEffect(() => {
    checkScrollability();
  }, [sections]);
  reactExports.useEffect(() => {
    if (activeSection) {
      scrollToActiveTab(activeSection);
    }
  }, [activeSection]);
  reactExports.useEffect(() => {
    const handleScroll = () => checkScrollability();
    const container = tabScrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
    return () => {
    };
  }, []);
  const formattedAddress = (() => {
    const lines = [];
    if (client.address_line1) lines.push(client.address_line1);
    if (client.address_line2) lines.push(client.address_line2);
    const cityStateZip = [client.city, client.state, client.postal_code].filter(Boolean).join(" ");
    if (cityStateZip) lines.push(cityStateZip);
    if (client.country) lines.push(client.country);
    return lines.join("\n");
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { maxWidth: "100%", mx: "auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { position: "relative", display: "flex", justifyContent: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          onClick: scrollTabLeft,
          disabled: !canScrollLeft,
          sx: {
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            width: 32,
            height: 32,
            boxShadow: 1,
            "&:hover": { bgcolor: "grey.50" },
            "&.Mui-disabled": { opacity: 0.3 }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontSize: "1.2rem", lineHeight: 1 }, children: "‹" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          ref: tabScrollRef,
          sx: {
            maxWidth: 800,
            mx: 1,
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            px: 4
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1, sx: { minWidth: "max-content" }, children: sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-section": section.id,
              variant: activeSection === section.id ? "contained" : "outlined",
              size: "small",
              color: "primary",
              onClick: () => scrollToSection(section.id),
              sx: {
                minWidth: "auto",
                px: 2,
                py: 0.5,
                fontSize: "0.875rem",
                borderRadius: 2,
                transition: "all 0.2s ease-in-out",
                whiteSpace: "nowrap",
                textTransform: "uppercase"
              },
              children: section.label
            },
            section.id
          )) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          onClick: scrollTabRight,
          disabled: !canScrollRight,
          sx: {
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            width: 32,
            height: 32,
            boxShadow: 1,
            "&:hover": { bgcolor: "grey.50" },
            "&.Mui-disabled": { opacity: 0.3 }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontSize: "1.2rem", lineHeight: 1 }, children: "›" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ref: scrollContainerRef, sx: { maxHeight: 600, overflowY: "auto", pr: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 4, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { id: "section-personal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Personal Information", icon: "solar:user-bold-duotone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { sx: { height: "93%" }, title: "Basic Details", icon: "solar:user-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "First Name", value: client.first_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Last Name", value: client.last_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Preferred Name", value: client.preferred_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Date of Birth",
                value: client.date_of_birth ? `${fDate(client.date_of_birth)} (${dayjs().diff(dayjs(client.date_of_birth), "year")} years old)` : null
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Gender",
                value: genderOptions.find((o2) => o2.value === client.gender)?.label ?? client.gender
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Occupation", value: client.occupation }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Marital Status",
                value: maritalStatusOptions.find((o2) => o2.value === client.marital_status)?.label ?? client.marital_status
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { title: "Contact Details", icon: "solar:phone-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  label: "Primary Phone",
                  value: client.phone_primary ? formatPhoneNumberIntl(client.phone_primary) : null
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  label: "Secondary Phone",
                  value: client.phone_secondary ? formatPhoneNumberIntl(client.phone_secondary) : null
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Email", value: client.email, capitalize: false })
            ] }),
            (client.instagram_handle || client.facebook_handle || client.tiktok_handle || client.twitter_handle) && /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { title: "Social Media", icon: "solar:share-circle-bold-duotone", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  capitalize: false,
                  label: "Instagram",
                  icon: "mdi:instagram",
                  value: client.instagram_handle
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  capitalize: false,
                  label: "Facebook",
                  icon: "mdi:facebook",
                  value: client.facebook_handle
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  capitalize: false,
                  label: "TikTok",
                  icon: "ic:baseline-tiktok",
                  value: client.tiktok_handle
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  capitalize: false,
                  label: "Twitter",
                  icon: "mdi:twitter",
                  value: client.twitter_handle
                }
              )
            ] })
          ] })
        ] }),
        formattedAddress && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mb: 4 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CardHeader,
            {
              title: "Address Information",
              avatar: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  sx: {
                    width: 32,
                    height: 32,
                    display: "flex",
                    borderRadius: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: (theme) => alpha(theme.palette.error.main, 0.12),
                    color: "error.main"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:map-point-bold", width: 18 })
                }
              ),
              sx: {
                "& .MuiCardHeader-avatar": { mr: 2 },
                "& .MuiCardHeader-title": {
                  fontWeight: 600,
                  color: "text.primary",
                  fontSize: "1rem"
                },
                pb: 2
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { pt: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AddressDisplay, { formattedAddress }) })
        ] }),
        (client.emergency_contact_name || client.emergency_contact_phone || client.emergency_contact_relationship) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { title: "Emergency Contact", icon: "solar:danger-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Name",
                value: `${client.emergency_contact_name} (${client.emergency_contact_relationship?.replace(/\b\w/g, (l) => l.toUpperCase())})`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Phone",
                value: client.emergency_contact_phone ? formatPhoneNumberIntl(client.emergency_contact_phone) : null
              }
            )
          ] })
        ] }),
        client.hobbies_interests && /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextArea,
          {
            label: "Hobbies & Interests",
            value: client.hobbies_interests,
            icon: "solar:heart-bold"
          }
        ),
        client.is_minor && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { title: "Minor & Guardian", icon: "solar:shield-user-bold-duotone", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Is Minor", value: "Yes" }),
            client.guardian_client_id ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  sx: {
                    color: "text.disabled",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    display: "block",
                    mb: 0.5
                  },
                  children: "Guardian"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GuardianDisplay, { guardianClientId: client.guardian_client_id })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Guardian Name", value: client.guardian_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  label: "Guardian Phone",
                  value: client.guardian_phone ? formatPhoneNumberIntl(client.guardian_phone) : null
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  label: "Guardian Email",
                  value: client.guardian_email,
                  capitalize: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  label: "Relationship",
                  value: client.guardian_relationship?.replace(/_/g, " ")
                }
              )
            ] })
          ] })
        ] }),
        (relatives?.length > 0 || client.typically_brings_children) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { title: "Family & Relatives", icon: "solar:people-nearby-bold-duotone", children: [
            client.typically_brings_children && /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Brings Children",
                value: "Typically brings children to appointments"
              }
            ),
            relatives?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  sx: {
                    color: "text.disabled",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    display: "block",
                    mb: 1
                  },
                  children: "Relatives"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0.75, children: relatives.map((relative) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Stack,
                {
                  component: RouterLink,
                  href: paths.dashboard.clients.profile(relative.id),
                  direction: "row",
                  alignItems: "center",
                  spacing: 1.5,
                  sx: {
                    color: "text.primary",
                    textDecoration: "none",
                    borderRadius: 1,
                    p: 1,
                    bgcolor: "action.hover",
                    "&:hover": { bgcolor: "action.selected" }
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { sx: { width: 32, height: 32, fontSize: 12, flexShrink: 0 }, children: [
                      relative.first_name?.[0],
                      relative.last_name?.[0]
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, noWrap: true, children: [
                        relative.first_name,
                        " ",
                        relative.last_name,
                        relative.preferred_name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Typography,
                          {
                            component: "span",
                            variant: "caption",
                            color: "text.secondary",
                            sx: { ml: 0.5 },
                            children: [
                              "(",
                              relative.preferred_name,
                              ")"
                            ]
                          }
                        )
                      ] }),
                      (relative.phone_primary || relative.email) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "caption",
                          color: "text.secondary",
                          noWrap: true,
                          display: "block",
                          children: [formatPhoneNumberIntl(relative.phone_primary), relative.email].filter(Boolean).join(" · ")
                        }
                      )
                    ] })
                  ]
                },
                relative.id
              )) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { id: "section-health", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            title: "Health & Beauty Profile",
            icon: "solar:health-bold-duotone",
            color: "error"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HairCharacteristicsCard, { client }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { title: "Preferences", icon: "solar:heart-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Preferred Days", value: client.preferred_appointment_days }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Preferred Time", value: client.preferred_appointment_time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Music Preference", value: client.music_preference }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Beverage", value: client.beverage_preference })
            ] }),
            client.favorite_services && client.favorite_services.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChipList,
              {
                label: "Favorite Services",
                value: client.favorite_services,
                icon: "solar:star-bold"
              }
            ),
            client.style_preferences && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Style Preferences",
                value: client.style_preferences,
                icon: "solar:scissors-square-bold"
              }
            ),
            client.color_formula_notes && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Color Formula Notes",
                value: client.color_formula_notes,
                icon: "solar:document-text-bold"
              }
            )
          ] })
        ] }),
        (client.allergies || client.sensitivities || client.medical_conditions || client.medications || client.pregnancy_nursing) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              title: "Health Information",
              icon: "solar:health-bold-duotone",
              color: "error"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
            client.allergies && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Allergies",
                value: client.allergies,
                icon: "solar:danger-triangle-bold"
              }
            ) }),
            client.sensitivities && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Sensitivities",
                value: client.sensitivities,
                icon: "solar:shield-warning-bold"
              }
            ) }),
            client.medical_conditions && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Medical Conditions",
                value: client.medical_conditions,
                icon: "solar:medical-kit-bold"
              }
            ) }),
            client.medications && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Medications",
                value: client.medications,
                icon: "solar:pill-bold"
              }
            ) }),
            client.pregnancy_nursing && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Paper,
              {
                sx: {
                  p: 2,
                  borderRadius: 1.5,
                  bgcolor: (theme) => alpha(theme.palette.warning.main, 0.08),
                  border: (theme) => `1px dashed ${alpha(theme.palette.warning.main, 0.32)}`
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:heart-pulse-bold",
                      width: 24,
                      sx: { color: "warning.main" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "subtitle2",
                      sx: { color: "warning.dark", fontWeight: 600 },
                      children: "Client is currently pregnant or nursing"
                    }
                  )
                ] })
              }
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { id: "section-history", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            title: "Treatment & Service History",
            icon: "solar:history-bold-duotone",
            color: "warning"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { title: "Service Statistics", icon: "solar:chart-square-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "First Visit Date",
                value: vs.first_appointment_date ? fDate(vs.first_appointment_date) : client.first_visit_date ? fDate(client.first_visit_date) : null
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Last Visit Date",
                value: vs.last_completed_appointment_date ? fDate(vs.last_completed_appointment_date) : client.last_visit_date ? fDate(client.last_visit_date) : null
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Total Visits",
                value: vs.total_visits ?? client.total_visits
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Visit Frequency",
                value: vs.avg_days_between_visits ? `Every ${vs.avg_days_between_visits} days` : client.visit_frequency
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Visits (Last 30 days)",
                value: vs.appointments_last_30_days ?? null
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Visits (Last 90 days)",
                value: vs.appointments_last_90_days ?? null
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Completion Rate",
                value: vs.completion_rate != null ? `${vs.completion_rate}%` : null
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Cancelled",
                value: vs.cancelled_appointments ?? client.cancelled_appointments
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "No Shows",
                value: vs.no_show_appointments ?? client.missed_appointments
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Average Tip Percentage",
                value: client.average_tip_percentage ? `${client.average_tip_percentage}%` : null
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { title: "Recent Treatments", icon: "solar:calendar-mark-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Last Color Date",
                value: client.last_color_date ? fDate(client.last_color_date) : null
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Last Treatment Date",
                value: client.last_treatment_date ? fDate(client.last_treatment_date) : null
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            client.previous_color_treatments && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Previous Color Treatments",
                value: client.previous_color_treatments,
                icon: "solar:palette-2-bold"
              }
            ),
            client.previous_chemical_treatments && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Previous Chemical Treatments",
                value: client.previous_chemical_treatments,
                icon: "solar:test-tube-bold"
              }
            ),
            client.service_history_summary && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Service History Summary",
                value: client.service_history_summary,
                icon: "solar:document-bold"
              }
            ),
            client.product_history && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Product History",
                value: client.product_history,
                icon: "solar:bag-2-bold"
              }
            ),
            client.refill_cycles && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Refill Cycles",
                value: client.refill_cycles,
                icon: "solar:refresh-bold"
              }
            )
          ] })
        ] }),
        (client.general_notes || client.private_staff_notes || client.personality_notes || client.special_occasions) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              title: "Notes & Observations",
              icon: "solar:notes-bold-duotone",
              color: "primary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
            client.personality_notes && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Personality Notes",
                value: client.personality_notes,
                icon: "solar:smile-circle-bold"
              }
            ) }),
            client.special_occasions && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Special Occasions",
                value: client.special_occasions,
                icon: "solar:gift-bold"
              }
            ) }),
            client.general_notes && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "General Notes",
                value: client.general_notes,
                icon: "solar:notes-bold"
              }
            ) }),
            client.private_staff_notes && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Paper,
              {
                sx: {
                  p: 2,
                  borderRadius: 1.5,
                  bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
                  border: (theme) => `1px dashed ${alpha(theme.palette.error.main, 0.32)}`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, sx: { mb: 1.5 }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Iconify,
                      {
                        icon: "solar:lock-password-bold",
                        width: 20,
                        sx: { color: "error.main" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        variant: "subtitle2",
                        sx: { color: "error.dark", fontWeight: 600 },
                        children: "Private Staff Notes (Confidential)"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "body2",
                      sx: { whiteSpace: "pre-wrap", lineHeight: 1.6, pl: 3 },
                      children: client.private_staff_notes
                    }
                  )
                ]
              }
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { id: "section-financial", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Communication", icon: "solar:dollar-bold-duotone", color: "warning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { title: "Communication Preferences", icon: "solar:bell-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailField,
              {
                label: "Reminder Preference",
                value: client.appointment_reminder_preference
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Marketing Opt-in", value: client.marketing_opt_in }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "SMS Opt-in", value: client.sms_opt_in })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, sm: 6 }, children: [
            client.preferred_contact_method && client.preferred_contact_method.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChipList,
              {
                label: "Preferred Contact Methods",
                value: client.preferred_contact_method.map((method) => method.toUpperCase()),
                icon: "solar:chat-round-dots-bold"
              }
            ),
            client.gift_card_history && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Gift Card History",
                value: client.gift_card_history,
                icon: "solar:gift-bold"
              }
            ),
            client.voucher_usage && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Voucher Usage",
                value: client.voucher_usage,
                icon: "solar:ticket-bold"
              }
            ),
            client.campaign_responses && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Campaign Responses",
                value: client.campaign_responses,
                icon: "solar:chat-round-dots-bold"
              }
            ),
            client.event_participation && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Event Participation",
                value: client.event_participation,
                icon: "solar:calendar-add-bold"
              }
            ),
            client.reviews_feedback && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Reviews & Feedback",
                value: client.reviews_feedback,
                icon: "solar:star-bold"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { title: "Referral Information", icon: "solar:route-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  label: "Referral Source",
                  value: referralOptions.find((o2) => o2.value === client.referral_source)?.label ?? client.referral_source
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DetailField,
                {
                  label: "Referred By",
                  value: client.referred_by ? `${client.referred_by.first_name} ${client.referred_by.last_name}` : null
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { title: "Technical Details", icon: "solar:settings-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailField, { label: "Preferred Language", value: client.preferred_language }) }),
            client.client_tags && client.client_tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChipList, { label: "Client Tags", value: client.client_tags, icon: "solar:tag-bold" }),
            client.follow_up_reminders && /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                label: "Follow-up Reminders",
                value: client.follow_up_reminders,
                icon: "solar:bell-bold"
              }
            )
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function ClientDetailsReportSection({ title, icon, color = "primary", rows }) {
  const validRows = rows?.filter(
    ({ value }) => value !== null && value !== void 0 && value !== ""
  );
  if (!validRows?.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { mb: 1.5 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            width: 28,
            height: 28,
            display: "flex",
            borderRadius: 1,
            alignItems: "center",
            justifyContent: "center",
            bgcolor: (theme) => alpha(theme.palette[color]?.main ?? theme.palette.primary.main, 0.12),
            color: `${color}.main`,
            flexShrink: 0
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 15 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          variant: "overline",
          sx: { fontWeight: 700, color: "text.primary", letterSpacing: 0.75 },
          children: title
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1.5,
          overflow: "hidden",
          mb: 3
        },
        children: validRows.map(({ label, value, capitalize = true }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            sx: {
              px: 2,
              py: 1.25,
              bgcolor: idx % 2 === 0 ? "transparent" : "action.hover",
              borderTop: idx > 0 ? "1px solid" : "none",
              borderColor: "divider"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "body2",
                  color: "text.secondary",
                  sx: { width: 200, flexShrink: 0, fontWeight: 500 },
                  children: label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "body2",
                  sx: {
                    fontWeight: 500,
                    textTransform: capitalize ? "capitalize" : "none",
                    whiteSpace: "pre-wrap",
                    flex: 1
                  },
                  children: typeof value === "boolean" ? value ? "Yes" : "No" : value
                }
              )
            ]
          },
          label
        ))
      }
    )
  ] });
}
function ClientDetailsReportView({ client, statistics, relatives }) {
  const vs = statistics?.visit_statistics ?? {};
  const { client: guardianClient } = useClient(client?.guardian_client_id ?? null);
  const personalRows = [
    { label: "First Name", value: client.first_name },
    { label: "Last Name", value: client.last_name },
    { label: "Preferred Name", value: client.preferred_name },
    {
      label: "Date of Birth",
      value: client.date_of_birth ? `${fDate(client.date_of_birth)} (${dayjs().diff(dayjs(client.date_of_birth), "year")} years old)` : null
    },
    {
      label: "Gender",
      value: genderOptions.find((o2) => o2.value === client.gender)?.label ?? client.gender
    },
    { label: "Occupation", value: client.occupation },
    {
      label: "Marital Status",
      value: maritalStatusOptions.find((o2) => o2.value === client.marital_status)?.label ?? client.marital_status
    },
    { label: "Is Minor", value: client.is_minor ? "Yes" : "No" },
    {
      label: "Brings Children",
      value: client.typically_brings_children ? "Typically brings children to appointments" : null
    },
    { label: "Hobbies & Interests", value: client.hobbies_interests }
  ];
  const contactRows = [
    {
      label: "Primary Phone",
      value: client.phone_primary ? formatPhoneNumberIntl(client.phone_primary) : null,
      capitalize: false
    },
    {
      label: "Secondary Phone",
      value: client.phone_secondary ? formatPhoneNumberIntl(client.phone_secondary) : null,
      capitalize: false
    },
    { label: "Email", value: client.email, capitalize: false },
    { label: "Instagram", value: client.instagram_handle, capitalize: false },
    { label: "Facebook", value: client.facebook_handle, capitalize: false },
    { label: "TikTok", value: client.tiktok_handle, capitalize: false },
    { label: "Twitter / X", value: client.twitter_handle, capitalize: false }
  ];
  const addressRows = [
    { label: "Address Line 1", value: client.address_line1 },
    { label: "Address Line 2", value: client.address_line2 },
    { label: "City", value: client.city },
    { label: "State / Province", value: client.state },
    { label: "Postal Code", value: client.postal_code, capitalize: false },
    { label: "Country", value: client.country }
  ];
  const emergencyRows = [
    {
      label: "Name",
      value: client.emergency_contact_name && client.emergency_contact_relationship ? `${client.emergency_contact_name} (${client.emergency_contact_relationship?.replace(/\b\w/g, (l) => l.toUpperCase())})` : client.emergency_contact_name
    },
    {
      label: "Phone",
      value: client.emergency_contact_phone ? formatPhoneNumberIntl(client.emergency_contact_phone) : null,
      capitalize: false
    }
  ];
  const guardianRows = guardianClient ? [
    {
      label: "Guardian",
      value: `${guardianClient.first_name} ${guardianClient.last_name}`
    },
    {
      label: "Phone",
      value: guardianClient.phone_primary ? formatPhoneNumberIntl(guardianClient.phone_primary) : null,
      capitalize: false
    },
    { label: "Email", value: guardianClient.email, capitalize: false }
  ] : [
    { label: "Guardian Name", value: client.guardian_name },
    {
      label: "Guardian Phone",
      value: client.guardian_phone ? formatPhoneNumberIntl(client.guardian_phone) : null,
      capitalize: false
    },
    { label: "Guardian Email", value: client.guardian_email, capitalize: false },
    { label: "Relationship", value: client.guardian_relationship?.replace(/_/g, " ") }
  ];
  const relativesRows = relatives?.map((r2) => ({
    label: `${r2.first_name} ${r2.last_name}`,
    value: [
      r2.preferred_name ? `(${r2.preferred_name})` : null,
      r2.phone_primary ? formatPhoneNumberIntl(r2.phone_primary) : null,
      r2.email
    ].filter(Boolean).join(" · "),
    capitalize: false
  })) ?? [];
  const hairRows = [
    { label: "Natural Hair Color", value: client.natural_hair_color },
    { label: "Current Hair Color", value: client.current_hair_color },
    { label: "Hair Texture", value: client.hair_texture?.replace(/_/g, " ") },
    { label: "Hair Length", value: client.hair_length?.replace(/_/g, " ") },
    { label: "Hair Density", value: client.hair_density },
    { label: "Hair Porosity", value: client.hair_porosity },
    { label: "Scalp Condition", value: client.scalp_condition?.replace(/_/g, " ") }
  ];
  const preferencesRows = [
    { label: "Preferred Days", value: client.preferred_appointment_days },
    { label: "Preferred Time", value: client.preferred_appointment_time },
    { label: "Music Preference", value: client.music_preference },
    { label: "Beverage", value: client.beverage_preference },
    {
      label: "Favorite Services",
      value: client.favorite_services?.length ? client.favorite_services.join(", ") : null
    },
    { label: "Style Preferences", value: client.style_preferences },
    { label: "Color Formula Notes", value: client.color_formula_notes }
  ];
  const healthRows = [
    { label: "Allergies", value: client.allergies },
    { label: "Sensitivities", value: client.sensitivities },
    { label: "Medical Conditions", value: client.medical_conditions },
    { label: "Medications", value: client.medications },
    {
      label: "Pregnancy / Nursing",
      value: client.pregnancy_nursing ? "Currently pregnant or nursing" : null
    }
  ];
  const historyRows = [
    {
      label: "First Visit Date",
      value: vs.first_appointment_date ? fDate(vs.first_appointment_date) : client.first_visit_date ? fDate(client.first_visit_date) : null
    },
    {
      label: "Last Visit Date",
      value: vs.last_completed_appointment_date ? fDate(vs.last_completed_appointment_date) : client.last_visit_date ? fDate(client.last_visit_date) : null
    },
    { label: "Total Visits", value: vs.total_visits ?? client.total_visits },
    {
      label: "Visit Frequency",
      value: vs.avg_days_between_visits ? `Every ${vs.avg_days_between_visits} days` : client.visit_frequency
    },
    { label: "Visits (Last 30 days)", value: vs.appointments_last_30_days ?? null },
    { label: "Visits (Last 90 days)", value: vs.appointments_last_90_days ?? null },
    {
      label: "Completion Rate",
      value: vs.completion_rate != null ? `${vs.completion_rate}%` : null
    },
    {
      label: "Cancelled Appointments",
      value: vs.cancelled_appointments ?? client.cancelled_appointments
    },
    { label: "No Shows", value: vs.no_show_appointments ?? client.missed_appointments },
    {
      label: "Average Tip",
      value: client.average_tip_percentage ? `${client.average_tip_percentage}%` : null
    },
    {
      label: "Last Color Date",
      value: client.last_color_date ? fDate(client.last_color_date) : null
    },
    {
      label: "Last Treatment Date",
      value: client.last_treatment_date ? fDate(client.last_treatment_date) : null
    },
    { label: "Previous Color Treatments", value: client.previous_color_treatments },
    { label: "Previous Chemical Treatments", value: client.previous_chemical_treatments },
    { label: "Service History Summary", value: client.service_history_summary },
    { label: "Product History", value: client.product_history },
    { label: "Refill Cycles", value: client.refill_cycles }
  ];
  const notesRows = [
    { label: "Personality Notes", value: client.personality_notes },
    { label: "Special Occasions", value: client.special_occasions },
    { label: "General Notes", value: client.general_notes },
    { label: "Private Staff Notes", value: client.private_staff_notes }
  ];
  const communicationRows = [
    { label: "Reminder Preference", value: client.appointment_reminder_preference },
    {
      label: "Marketing Opt-in",
      value: client.marketing_opt_in != null ? client.marketing_opt_in ? "Yes" : "No" : null
    },
    {
      label: "SMS Opt-in",
      value: client.sms_opt_in != null ? client.sms_opt_in ? "Yes" : "No" : null
    },
    {
      label: "Preferred Contact Methods",
      value: client.preferred_contact_method?.length ? client.preferred_contact_method.map((m) => m.toUpperCase()).join(", ") : null,
      capitalize: false
    },
    { label: "Preferred Language", value: client.preferred_language },
    {
      label: "Client Tags",
      value: client.client_tags?.length ? client.client_tags.join(", ") : null
    },
    { label: "Gift Card History", value: client.gift_card_history },
    { label: "Voucher Usage", value: client.voucher_usage },
    { label: "Campaign Responses", value: client.campaign_responses },
    { label: "Event Participation", value: client.event_participation },
    { label: "Reviews & Feedback", value: client.reviews_feedback },
    { label: "Follow-up Reminders", value: client.follow_up_reminders },
    {
      label: "Referral Source",
      value: referralOptions.find((o2) => o2.value === client.referral_source)?.label ?? client.referral_source
    },
    {
      label: "Referred By",
      value: client.referred_by ? `${client.referred_by.first_name} ${client.referred_by.last_name}` : null
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        maxHeight: 622,
        overflowY: "auto",
        pr: 1
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Personal Information",
            icon: "solar:user-bold-duotone",
            color: "primary",
            rows: personalRows
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Contact Details",
            icon: "solar:phone-bold-duotone",
            color: "info",
            rows: contactRows
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Address",
            icon: "solar:map-point-bold-duotone",
            color: "error",
            rows: addressRows
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Emergency Contact",
            icon: "solar:danger-bold-duotone",
            color: "error",
            rows: emergencyRows
          }
        ),
        client.is_minor && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Guardian",
            icon: "solar:shield-user-bold-duotone",
            color: "warning",
            rows: guardianRows
          }
        ),
        relativesRows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Family & Relatives",
            icon: "solar:people-nearby-bold-duotone",
            color: "secondary",
            rows: relativesRows
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Hair Characteristics",
            icon: "solar:scissors-square-bold-duotone",
            color: "primary",
            rows: hairRows
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Preferences",
            icon: "solar:heart-bold-duotone",
            color: "error",
            rows: preferencesRows
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Health Information",
            icon: "solar:health-bold-duotone",
            color: "warning",
            rows: healthRows
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Service History & Statistics",
            icon: "solar:history-bold-duotone",
            color: "warning",
            rows: historyRows
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Notes & Observations",
            icon: "solar:notes-bold-duotone",
            color: "primary",
            rows: notesRows
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientDetailsReportSection,
          {
            title: "Communication",
            icon: "solar:chat-round-dots-bold-duotone",
            color: "success",
            rows: communicationRows
          }
        )
      ] })
    }
  );
}
function ClientDetailsViewToggle({ view, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ToggleButtonGroup,
    {
      value: view,
      exclusive: true,
      onChange: (_, val) => {
        if (val !== null) onChange(val);
      },
      size: "small",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleButton, { value: "cards", sx: { px: 1.5, gap: 0.75 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:widget-5-bold-duotone", width: 16 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontWeight: 600 }, children: "Cards" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleButton, { value: "report", sx: { px: 1.5, gap: 0.75 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:document-text-bold-duotone", width: 16 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontWeight: 600 }, children: "Report" })
        ] })
      ]
    }
  );
}
function ClientDetails({ client }) {
  const [view, setView] = reactExports.useState("cards");
  const { statistics } = useClientStatistics(client?.id);
  const relativeIds = client?.relative_client_ids;
  const { clients: relatives } = useClientsByIds(relativeIds?.length ? relativeIds : null);
  if (!client) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { maxWidth: "100%", mx: "auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Stack,
      {
        direction: "row",
        justifyContent: { xs: "center", md: "flex-end" },
        sx: {
          mb: { xs: 1, md: 0 },
          position: { md: "relative" },
          zIndex: 9
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDetailsViewToggle, { view, onChange: setView })
      }
    ),
    view === "cards" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDetailsCardsView, { client, statistics, relatives }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDetailsReportView, { client, statistics, relatives })
  ] });
}
const STATUS_COLOR$1 = {
  active: "success",
  expired: "default",
  cancelled: "error",
  paused: "warning"
};
function PackageRow({ pkg, onViewSplit, onCancel }) {
  const [open, setOpen] = reactExports.useState(false);
  const tpl = pkg.package_templates;
  const max = pkg.max_uses_override ?? tpl?.max_uses_per_month ?? null;
  const used = pkg.uses_count ?? 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { sx: { "& > *": { borderBottom: "unset" } }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Chip,
      {
        size: "small",
        label: tpl?.name ?? "—",
        sx: { bgcolor: tpl?.color || "#00B8D9", color: "#fff", fontWeight: 600 }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: formatPackageMonth(pkg.valid_month) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, sx: { minWidth: 100 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", children: [
        used,
        max ? ` / ${max}` : " visits"
      ] }),
      max && /* @__PURE__ */ jsxRuntimeExports.jsx(
        LinearProgress,
        {
          variant: "determinate",
          value: Math.min(used / max * 100, 100),
          color: used >= max ? "error" : "primary",
          sx: { height: 6, borderRadius: 1 }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: STATUS_COLOR$1[pkg.status] || "default", children: pkg.status }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, justifyContent: "flex-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onViewSplit(pkg), title: "Stylist split", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:chart-square-bold", width: 18 }) }),
      pkg.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onCancel(pkg), title: "Cancel", color: "error", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold", width: 18 }) })
    ] }) })
  ] });
}
function ClientPackages({ client, clientId }) {
  const { user } = useAuthContext();
  const organizationId = user?.branches?.[0]?.organization_id;
  const branchId = user?.branches?.[0]?.id;
  const assignDialog = Ee();
  const confirmDialog = Ee();
  const [cancellingPkg, setCancellingPkg] = reactExports.useState(null);
  const [splitPkg, setSplitPkg] = reactExports.useState(null);
  const { clientPackages, clientPackagesLoading } = useGetClientPackages(clientId);
  const handleCancelPackage = reactExports.useCallback(
    async (pkg) => {
      try {
        const { error } = await cancelClientPackage(pkg.id, clientId, organizationId);
        if (error) throw error;
        toast.success("Package cancelled");
        confirmDialog.onFalse();
        setCancellingPkg(null);
      } catch {
        toast.error("Failed to cancel package");
      }
    },
    [clientId, confirmDialog, organizationId]
  );
  if (clientPackagesLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardHeader,
        {
          title: "Packages",
          sx: { mb: 2 },
          subheader: clientPackages.length > 0 ? `${clientPackages.length} package${clientPackages.length !== 1 ? "s" : ""} total` : null
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      clientPackagesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "center", justifyContent: "center", sx: { py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }) : clientPackages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          title: "No Packages",
          description: "No packages have been assigned to this client yet.",
          sx: { py: 10 }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Package" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Usage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: clientPackages.map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PackageRow,
          {
            pkg,
            onViewSplit: setSplitPkg,
            onCancel: (p) => {
              setCancellingPkg(p);
              confirmDialog.onTrue();
            }
          },
          pkg.id
        )) })
      ] })
    ] }),
    assignDialog.value && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AssignPackageDialog,
      {
        open: true,
        onClose: (saved) => assignDialog.onFalse(),
        organizationId,
        branchId,
        createdBy: user?.id,
        prefillClient: client
      }
    ),
    Boolean(splitPkg) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PackageStylistSplitDialog,
      {
        open: true,
        onClose: () => setSplitPkg(null),
        clientPackage: splitPkg
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: () => {
          confirmDialog.onFalse();
          setCancellingPkg(null);
        },
        title: "Cancel package",
        content: `Cancel ${cancellingPkg?.package_templates?.name ?? "this package"} for ${client?.first_name ?? "client"}? Existing usage records are kept.`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: () => handleCancelPackage(cancellingPkg),
            children: "Cancel package"
          }
        )
      }
    )
  ] });
}
function ClientMessages({ client }) {
  const [page, setPage] = reactExports.useState(0);
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(10);
  const { clientLogs, clientLogsTotal, clientLogsLoading } = useGetClientMessageLogs(client?.id, {
    page,
    pageSize: rowsPerPage
  });
  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  if (clientLogsLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {});
  if (!clientLogs || clientLogs.length === 0 && page === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        filled: true,
        title: "No messages sent",
        description: "No messages have been sent to this client yet.",
        sx: { py: 10 }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Channel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Recipient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Subject / Body" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Source" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: clientLogs.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: fDateTime(log.created_at) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: CHANNEL_COLORS[log.channel], sx: { fontSize: 10 }, children: CHANNEL_LABELS[log.channel] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            color: STATUS_COLORS$1[log.status] ?? "default",
            sx: { fontSize: 10, textTransform: "capitalize" },
            children: log.status
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: log.recipient_email ?? log.recipient_phone ?? "—" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { maxWidth: 280 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", noWrap: true, display: "block", children: log.subject ?? (log.body || "").replace(/<[^>]+>/g, "").substring(0, 80) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, alignItems: "center", children: [
          log.message_campaigns?.name && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Campaign", size: "small", variant: "outlined" }),
          log.automation_id && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Auto", size: "small", color: "info", variant: "outlined" }),
          !log.message_campaigns && !log.automation_id && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Manual", size: "small", color: "default", variant: "outlined" })
        ] }) })
      ] }, log.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TablePagination,
      {
        component: "div",
        count: clientLogsTotal,
        page,
        rowsPerPage,
        onPageChange: handleChangePage,
        onRowsPerPageChange: handleChangeRowsPerPage,
        rowsPerPageOptions: [5, 10, 25]
      }
    )
  ] });
}
const FEEDBACK_TYPES = [
  { value: "general", label: "General" },
  { value: "service", label: "Service Quality" },
  { value: "staff", label: "Staff" },
  { value: "other", label: "Other" }
];
const FOLLOW_UP_STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" }
];
const DEFAULT_FEEDBACK_VALUES = {
  feedback_type: "general",
  title: "",
  comment: "",
  overall_rating: null,
  service_quality_rating: null,
  staff_rating: null,
  cleanliness_rating: null,
  value_rating: null,
  staff_id: null,
  appointment_id: null,
  would_recommend: false,
  is_public: false,
  needs_follow_up: false
};
const RATING_LABELS = {
  overall_rating: "Overall Rating",
  service_quality_rating: "Service Quality",
  staff_rating: "Staff Rating",
  cleanliness_rating: "Cleanliness",
  value_rating: "Value for Money"
};
const FEEDBACK_TYPE_COLORS = {
  general: "#0066FF",
  service: "#FF9C6E",
  staff: "#13C2C2",
  other: "#95DE64"
};
function ClientFeedback({
  feedback = [],
  isLoading = false,
  onAddFeedback,
  onEditFeedback,
  onManageFollowUp,
  sx,
  ...other
}) {
  const [expandedIds, setExpandedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const toggleCard = (id) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };
  const toggleAll = () => {
    if (expandedIds.size === feedback.length) {
      setExpandedIds(/* @__PURE__ */ new Set());
    } else {
      setExpandedIds(new Set(feedback.map((item) => item.id)));
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) });
  }
  if (!feedback || feedback.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyContent,
      {
        filled: true,
        sx: { py: 5 },
        title: "No Feedback Yet",
        description: "No feedback has been submitted for this client yet",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            sx: { mt: 4 },
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
            variant: "contained",
            onClick: onAddFeedback,
            children: "Add Feedback"
          }
        )
      }
    );
  }
  const allExpanded = expandedIds.size === feedback.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: "Client Feedback" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "small",
            variant: "outlined",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: allExpanded ? "mdi:collapse-all" : "mdi:expand-all" }),
            onClick: toggleAll,
            children: allExpanded ? "Collapse All" : "Expand All"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "small",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
            variant: "contained",
            onClick: onAddFeedback,
            children: "Add"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1, children: feedback.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeedbackCard,
      {
        feedback: item,
        onEdit: () => onEditFeedback(item),
        onManageFollowUp: () => onManageFollowUp && onManageFollowUp(item),
        expanded: expandedIds.has(item.id),
        onToggle: () => toggleCard(item.id)
      },
      item.id
    )) })
  ] });
}
function FeedbackCard({ feedback, onEdit, onManageFollowUp, expanded, onToggle }) {
  const feedbackType = FEEDBACK_TYPES.find((t) => t.value === feedback.feedback_type);
  const feedbackColor = FEEDBACK_TYPE_COLORS[feedback.feedback_type] || "#0066FF";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      sx: {
        p: 1.5,
        borderLeft: `4px solid ${feedbackColor}`,
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: 1
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            spacing: 1,
            sx: { cursor: "pointer" },
            onClick: onToggle,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { flex: 1, minWidth: 0 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Avatar,
                  {
                    sx: {
                      width: 28,
                      height: 28,
                      bgcolor: feedbackColor,
                      color: "white",
                      fontSize: "11px",
                      flexShrink: 0
                    },
                    children: feedbackType?.label?.[0] || "F"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600, fontSize: "13px" }, noWrap: true, children: feedback.title || "Feedback" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary", fontSize: "11px" }, children: fDate(feedback.created_at) })
                ] }),
                feedback.overall_rating && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.5, sx: { flexShrink: 0 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:star", width: 14, sx: { color: "#FFB400" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { fontSize: "11px", fontWeight: 600 }, children: [
                    feedback.overall_rating,
                    "/5"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: feedbackType?.label || "General",
                    size: "small",
                    variant: "filled",
                    sx: {
                      height: 20,
                      fontSize: "10px",
                      bgcolor: feedbackColor,
                      color: "white",
                      flexShrink: 0
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, sx: { flexShrink: 0 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    size: "small",
                    onClick: (e) => {
                      e.stopPropagation();
                      onEdit();
                    },
                    sx: { p: 0.5 },
                    title: "Edit feedback",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "tabler:edit", width: 16 })
                  }
                ),
                feedback.needs_follow_up && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    size: "small",
                    onClick: (e) => {
                      e.stopPropagation();
                      onManageFollowUp();
                    },
                    sx: { p: 0.5 },
                    title: "Manage follow-up",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:phone-in-talk", width: 16 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    size: "small",
                    sx: { p: 0.5 },
                    onClick: (e) => {
                      e.stopPropagation();
                      onToggle();
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: expanded ? "mdi:chevron-up" : "mdi:chevron-down", width: 16 })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: expanded, timeout: "auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            spacing: 1,
            sx: { mt: 1.5, pt: 1.5, borderTop: "1px solid", borderColor: "divider" },
            children: [
              feedback.comment && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.secondary", fontSize: "12px" }, children: feedback.comment }),
              hasRatings(feedback) && /* @__PURE__ */ jsxRuntimeExports.jsx(CompactRatingsDisplay, { feedback }),
              (feedback.staff_id || feedback.appointment_id) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 1, bgcolor: "background.neutral", borderRadius: 0.5 }, children: [
                feedback.staff_id && feedback.staff && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { display: "block", fontSize: "11px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Staff:" }),
                  " ",
                  feedback.staff.first_name,
                  " ",
                  feedback.staff.last_name
                ] }),
                feedback.appointment_id && feedback.appointment && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { display: "block", fontSize: "11px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Appointment:" }),
                  " ",
                  fDate(feedback.appointment.appointment_date)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, sx: { flexWrap: "wrap", gap: 0.5 }, children: [
                feedback.would_recommend && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:thumb-up", width: 12 }),
                    label: "Recommends",
                    size: "small",
                    color: "success",
                    variant: "soft",
                    sx: { height: 20, fontSize: "10px" }
                  }
                ),
                feedback.is_public && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:eye", width: 12 }),
                    label: "Public",
                    size: "small",
                    color: "info",
                    variant: "soft",
                    sx: { height: 20, fontSize: "10px" }
                  }
                ),
                feedback.needs_follow_up && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:phone", width: 12 }),
                    label: `Follow-up: ${feedback.follow_up_status || "Pending"}`,
                    size: "small",
                    color: feedback.follow_up_status === "completed" ? "success" : feedback.follow_up_status === "cancelled" ? "error" : "warning",
                    variant: "soft",
                    sx: { height: 20, fontSize: "10px" }
                  }
                )
              ] }),
              feedback.needs_follow_up && feedback.follow_up_status && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Stack,
                {
                  direction: "row",
                  alignItems: "center",
                  spacing: 0.75,
                  sx: {
                    p: 1,
                    borderRadius: 0.75,
                    border: "1px solid",
                    borderColor: "divider",
                    background: "linear-gradient(135deg, rgba(13, 198, 198, 0.08) 0%, rgba(13, 198, 198, 0.04) 100%)",
                    flexWrap: "wrap",
                    gap: 0.75
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.5, flexShrink: 0 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Box,
                        {
                          sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            bgcolor: "#13C2C2",
                            color: "white",
                            flexShrink: 0
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:check-circle", width: 12 })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "caption",
                          sx: { fontSize: "11px", fontWeight: 600, color: "text.primary" },
                          children: "Followed up"
                        }
                      )
                    ] }),
                    feedback.follow_up_notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Typography,
                      {
                        variant: "caption",
                        sx: { fontSize: "11px", color: "text.primary", flex: 1, minWidth: 0 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                          " ",
                          feedback.follow_up_notes.substring(0, 50),
                          feedback.follow_up_notes.length > 50 ? "..." : ""
                        ]
                      }
                    ),
                    feedback.followed_up_by_staff && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Box,
                      {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          flexShrink: 0
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontSize: "10px", color: "text.secondary" }, children: "by" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Box,
                            {
                              sx: {
                                width: 16,
                                height: 16,
                                borderRadius: "50%",
                                bgcolor: "#13C2C2",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "9px",
                                fontWeight: 600
                              },
                              children: feedback.followed_up_by_staff.first_name?.[0]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Typography,
                            {
                              variant: "caption",
                              sx: { fontSize: "11px", fontWeight: 600, minWidth: "max-content" },
                              children: feedback.followed_up_by_staff.first_name
                            }
                          )
                        ]
                      }
                    ),
                    feedback.followed_up_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.5, flexShrink: 0 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontSize: "10px", color: "text.secondary" }, children: "on" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "caption",
                          sx: { fontSize: "10px", color: "text.secondary", fontWeight: 600 },
                          children: fDate(feedback.followed_up_at)
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { color: "text.secondary", fontSize: "10px" }, children: [
                "Added ",
                fDate(feedback.created_at),
                " at ",
                fTime(feedback.created_at)
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
function CompactRatingsDisplay({ feedback }) {
  const ratings = [
    { key: "overall_rating", label: "Overall" },
    { key: "service_quality_rating", label: "Service" },
    { key: "staff_rating", label: "Staff" },
    { key: "cleanliness_rating", label: "Cleanliness" },
    { key: "value_rating", label: "Value" }
  ];
  const visibleRatings = ratings.filter((r2) => feedback[r2.key]);
  if (visibleRatings.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.75, sx: { flexWrap: "wrap", gap: 0.75 }, children: visibleRatings.map((rating) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        px: 1,
        py: 0.4,
        bgcolor: "background.neutral",
        borderRadius: 0.75,
        border: "1px solid",
        borderColor: "divider"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontSize: "10px", fontWeight: 600 }, children: rating.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Rating,
          {
            value: feedback[rating.key] || 0,
            readOnly: true,
            size: "small",
            sx: {
              "& .MuiRating-icon": {
                width: 16,
                height: 16
              },
              "& .MuiRating-iconFilled": {
                color: "#FFB400"
              }
            }
          }
        )
      ]
    },
    rating.key
  )) });
}
function hasRatings(feedback) {
  return feedback.overall_rating || feedback.service_quality_rating || feedback.staff_rating || feedback.cleanliness_rating || feedback.value_rating;
}
const PAYMENT_STATUS_COLOR = {
  paid: "success",
  partially_paid: "warning",
  pending: "default",
  refunded: "info",
  cancelled: "error"
};
const SALE_STATUS_COLOR = {
  completed: "success",
  pending: "warning",
  cancelled: "error"
};
const SALES_PER_PAGE = 5;
function ClientFinancial({ client, clientId }) {
  const [salesPage, setSalesPage] = reactExports.useState(0);
  const { sales, salesLoading, totalCount } = useGetClientSales(
    clientId,
    salesPage,
    SALES_PER_PAGE
  );
  const { statistics } = useClientStatistics(clientId);
  const sp = statistics?.spending_statistics || {};
  const vp = statistics?.visit_statistics || {};
  const kpiCards = [];
  const productStats = reactExports.useMemo(() => {
    const productMap = /* @__PURE__ */ new Map();
    sales.forEach((sale) => {
      if (sale.items) {
        sale.items.forEach((item) => {
          if (item.product_id && item.product) {
            const key = item.product_id;
            if (productMap.has(key)) {
              const existing = productMap.get(key);
              existing.quantity += item.quantity;
              existing.totalSpent += item.line_total;
              existing.purchaseCount += 1;
            } else {
              productMap.set(key, {
                id: item.product_id,
                name: item.product.name,
                sku: item.product.sku,
                quantity: item.quantity,
                totalSpent: item.line_total,
                purchaseCount: 1
              });
            }
          }
        });
      }
    });
    return Array.from(productMap.values()).sort((a, b) => b.totalSpent - a.totalSpent).slice(0, 5);
  }, [sales]);
  productStats[0]?.totalSpent || 0;
  const totalSalesPages = Math.ceil(totalCount / SALES_PER_PAGE);
  const paymentPreference = sp.preferred_payment_method ? sp.preferred_payment_method.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : client.payment_preference?.toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
    kpiCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 3, height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", gutterBottom: true, children: card.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { color: card.color }, children: card.displayValue ?? fCurrency(card.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { mt: 0.5 }, children: card.note })
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
            bgcolor: card.bgColor,
            flexShrink: 0
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: card.icon, width: 28, sx: { color: card.color } })
        }
      )
    ] }) }) }, card.label)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoyaltyCard, { clientId, client }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CashbackCard, { clientId }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Financial Details", subheader: "Spending & payment breakdown" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(6, 1fr)"
              }
            },
            children: [
              {
                label: "Total Spent",
                value: fCurrency(sp.total_spent ?? client.total_spent ?? 0),
                color: "#22C55E"
              },
              {
                label: "Outstanding",
                value: fCurrency(sp.outstanding_balances ?? client.outstanding_balances ?? 0),
                color: "#F97316"
              },
              {
                label: "Avg Sale Value",
                value: sp.avg_appointment_value ? fCurrency(sp.avg_appointment_value) : "--",
                color: "#3B82F6"
              },
              {
                label: "Avg Monthly",
                value: sp.avg_monthly_spend ? fCurrency(sp.avg_monthly_spend) : "--",
                color: "#8B5CF6"
              },
              {
                label: "Sales (30d)",
                value: vp.appointments_last_30_days ?? "--",
                color: "#EC4899"
              },
              {
                label: "Sales (90d)",
                value: vp.appointments_last_90_days ?? "--",
                color: "#F43F5E"
              }
            ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                sx: {
                  p: 2,
                  borderRadius: 1.5,
                  bgcolor: "background.neutral",
                  textAlign: "center"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      color: "text.secondary",
                      sx: { display: "block", mb: 0.5 },
                      children: stat.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { color: stat.color }, children: stat.value })
                ]
              },
              stat.label
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Spending Breakdown" }),
                [
                  {
                    label: "Appointments",
                    value: sp.total_spent_appointments ? fCurrency(sp.total_spent_appointments) : "--",
                    pct: sp.total_spent && sp.total_spent_appointments ? Math.min(sp.total_spent_appointments / sp.total_spent * 100, 100) : 0,
                    color: "#10B981"
                  },
                  {
                    label: "Services (POS)",
                    value: sp.total_spent_pos_services ? fCurrency(sp.total_spent_pos_services) : "--",
                    pct: sp.total_spent && sp.total_spent_pos_services ? Math.min(sp.total_spent_pos_services / sp.total_spent * 100, 100) : 0,
                    color: "#06B6D4"
                  },
                  {
                    label: "Products (POS)",
                    value: sp.total_spent_pos_products ? fCurrency(sp.total_spent_pos_products) : "--",
                    pct: sp.total_spent && sp.total_spent_pos_products ? Math.min(sp.total_spent_pos_products / sp.total_spent * 100, 100) : 0,
                    color: "#6366F1"
                  }
                ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", sx: { mb: 0.75 }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: row.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: row.value })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    LinearProgress,
                    {
                      variant: "determinate",
                      value: row.pct,
                      sx: {
                        height: 6,
                        borderRadius: 1,
                        bgcolor: "action.hover",
                        "& .MuiLinearProgress-bar": { bgcolor: row.color, borderRadius: 1 }
                      }
                    }
                  )
                ] }, row.label))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.disabled", children: "Monthly Spend Range" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1.5, children: [
                  {
                    label: "Highest",
                    value: sp.highest_monthly_spend ? fCurrency(sp.highest_monthly_spend) : "--",
                    color: "#F59E0B"
                  },
                  {
                    label: "Average",
                    value: sp.avg_monthly_spend ? fCurrency(sp.avg_monthly_spend) : "--",
                    color: "#8B5CF6"
                  },
                  {
                    label: "Lowest",
                    value: sp.lowest_monthly_spend ? fCurrency(sp.lowest_monthly_spend) : "--",
                    color: "#A78BFA"
                  }
                ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Box,
                  {
                    sx: {
                      flex: 1,
                      p: 1.5,
                      borderRadius: 1.5,
                      bgcolor: "background.neutral",
                      textAlign: "center"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "caption",
                          color: "text.secondary",
                          sx: { display: "block", mb: 0.5 },
                          children: stat.label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { color: stat.color }, children: stat.value })
                    ]
                  },
                  stat.label
                )) }),
                (paymentPreference || client.deposits != null) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
                    paymentPreference && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Iconify,
                          {
                            icon: "solar:card-bold-duotone",
                            width: 18,
                            sx: { color: "text.secondary" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Payment Preference" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "primary", children: paymentPreference })
                    ] }),
                    client.deposits != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Iconify,
                          {
                            icon: "solar:safe-bold-duotone",
                            width: 18,
                            sx: { color: "text.secondary" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Deposits" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(client.deposits) })
                    ] })
                  ] })
                ] })
              ] })
            ]
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FavoriteProductsCard, { statistics }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: "100%", display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardHeader,
        {
          title: "Payment History",
          subheader: `${totalCount} sale${totalCount !== 1 ? "s" : ""} recorded`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { sx: { flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 420 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Sale #" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Payment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: salesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 5, align: "center", sx: { py: 5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "Loading…" }) }) }) : sales.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 5, sx: { p: 0, border: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyContent,
          {
            title: "No Payments",
            description: "This client has no payment history.",
            sx: { py: 5 }
          }
        ) }) }) : sales.map((sale) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontFamily: "monospace", fontSize: 12, children: sale.sale_number }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(sale.created_at) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: fCurrency(sale.total_amount) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              variant: "soft",
              color: PAYMENT_STATUS_COLOR[sale.payment_status] || "default",
              children: sale.payment_status?.replace("_", " ")
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              variant: "outlined",
              color: SALE_STATUS_COLOR[sale.status] || "default",
              children: sale.status
            }
          ) })
        ] }, sale.id)) })
      ] }) }),
      totalSalesPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          spacing: 1,
          alignItems: "center",
          sx: { px: 3, py: 1.5, borderTop: 1, borderColor: "divider" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "small",
                color: "inherit",
                onClick: () => setSalesPage((p) => Math.max(p - 1, 0)),
                disabled: salesPage === 0,
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-back-fill", width: 18 }),
                children: "Previous"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { flexGrow: 1, textAlign: "center" }, children: [
              "Page ",
              salesPage + 1,
              " of ",
              totalSalesPages
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "small",
                color: "inherit",
                onClick: () => setSalesPage((p) => Math.min(p + 1, totalSalesPages - 1)),
                disabled: salesPage >= totalSalesPages - 1,
                endIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-forward-fill", width: 18 }),
                children: "Next"
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
function ProfileCover({
  sx,
  name,
  role,
  coverUrl,
  clientImportance,
  highlightedFlag,
  flagsLength,
  clientId,
  avatarUrl,
  ...other
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: [
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(0deg, ${U(theme.vars.palette.primary.darkerChannel, 0.8)}, ${U(theme.vars.palette.primary.darkerChannel, 0.8)})`,
              `url('/assets/images/mock/cover/cover-${checkUuidLastDigit(clientId)}.webp')`
            ]
          }),
          height: 1,
          color: "common.white",
          display: "flex",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "center", md: "flex-start" }
        }),
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...other,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              display: "flex",
              left: { md: 10 },
              zIndex: { md: 10 },
              position: { md: "absolute" },
              flexDirection: { xs: "column", md: "row" }
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ListItemText,
              {
                primary: name,
                secondary: clientImportance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientImportanceLabel, { clientImportance }),
                slotProps: {
                  primary: { sx: { typography: { xs: "h6", md: "h4" } } }
                },
                sx: { mt: { xs: 0, md: 3 }, ml: { md: 3 }, textAlign: { xs: "center", md: "unset" } }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grow, { in: Boolean(highlightedFlag), timeout: 500, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Alert,
          {
            severity: "error",
            sx: {
              minWidth: { xs: "auto", md: "35%" },
              maxWidth: { xs: 140, md: "none" },
              position: "absolute",
              top: 8,
              right: 8,
              py: { xs: 0.25, md: 0.75 },
              px: { xs: 1, md: 2 },
              "& .MuiAlert-message": { py: { xs: 0.25, md: 0.75 } },
              "& .MuiAlert-icon": { display: { xs: "none", md: "flex" } }
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: "bold", noWrap: true, sx: { display: "block" }, children: highlightedFlag?.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { display: { xs: "none", md: "block" } }, children: `This client has ${flagsLength} red flag(s).` })
            ]
          }
        ) })
      ]
    }
  );
}
function groupByYear(records) {
  return records.reduce((groups, record) => {
    const year = new Date(record.performed_at).getFullYear();
    if (!groups.length || groups[groups.length - 1].year !== year) {
      groups.push({ year, records: [record] });
    } else {
      groups[groups.length - 1].records.push(record);
    }
    return groups;
  }, []);
}
function HairRecordRail({ records, selectedId, onSelect }) {
  const groups = reactExports.useMemo(() => groupByYear(records), [records]);
  const showYears = groups.length > 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { children: groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    showYears && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "caption",
        sx: {
          px: 2,
          py: 1,
          display: "block",
          fontWeight: 700,
          color: "text.disabled",
          letterSpacing: 0.6,
          bgcolor: "background.neutral",
          position: "sticky",
          top: 0,
          zIndex: 1
        },
        children: group.year
      }
    ),
    group.records.map((record) => {
      const isSelected = record.id === selectedId;
      const isPending = record.status === "pending";
      const hex = record.result_hair_color ? resolveHairColor(record.result_hair_color) : null;
      const stylistName = record.stylist ? `${record.stylist.first_name ?? ""} ${record.stylist.last_name ?? ""}`.trim() : null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ButtonBase,
        {
          onClick: () => onSelect(record.id),
          "aria-current": isSelected ? "true" : void 0,
          sx: {
            width: 1,
            px: 2,
            py: 1.5,
            display: "block",
            textAlign: "left",
            borderBottom: "1px solid",
            borderColor: "divider",
            transition: (theme) => theme.transitions.create("background-color", { duration: 150 }),
            ...isSelected && {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08)
            },
            "&:hover": {
              bgcolor: (theme) => alpha(theme.palette.primary.main, isSelected ? 0.12 : 0.04)
            },
            "&:focus-visible": {
              outline: "2px solid",
              outlineColor: "primary.main",
              outlineOffset: -2
            }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...hex ? {
                    bgcolor: hex,
                    border: "2px solid",
                    borderColor: isLightHairColor(hex) ? "divider" : "transparent"
                  } : {
                    border: "1.5px dashed",
                    borderColor: "divider",
                    color: "text.disabled"
                  }
                },
                children: !hex && /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:minus-circle-linear", width: 12 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", noWrap: true, sx: { fontWeight: 600 }, children: record.service_name || HAIR_RECORD_TYPE_LABELS[record.record_type] || "Record" }),
                isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: "Needs formula",
                    size: "small",
                    color: "warning",
                    variant: "soft",
                    sx: { height: 18, fontSize: 10, fontWeight: 700 }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, noWrap: true, children: [
                fDate(record.performed_at),
                record.result_hair_color,
                stylistName
              ].filter(Boolean).join(" · ") })
            ] })
          ] })
        },
        record.id
      );
    })
  ] }, group.year)) });
}
HairRecordRail.propTypes = {
  records: o.array,
  selectedId: o.string,
  onSelect: o.func.isRequired
};
const numeral = {
  fontVariantNumeric: "tabular-nums",
  fontFeatureSettings: '"tnum"'
};
function HairFormulaLines({ formula }) {
  if (!formula?.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Stack,
    {
      sx: {
        borderRadius: 1,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden"
      },
      children: formula.map((line, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          alignItems: "baseline",
          spacing: 1.5,
          sx: {
            px: 1.5,
            py: 1,
            borderBottom: "1px solid",
            borderColor: "divider",
            "&:last-of-type": { borderBottom: "none" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                sx: {
                  width: 78,
                  flexShrink: 0,
                  fontWeight: 600,
                  color: "text.secondary"
                },
                children: FORMULA_ZONE_LABELS[line.zone] ?? line.zone ?? "Mix"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 600, ...numeral }, children: [line.brand, line.shade].filter(Boolean).join(" ") || "Not recorded" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.secondary", ...numeral }, children: [
              line.developer_vol ? `${line.developer_vol} vol` : null,
              line.ratio,
              line.amount_g ? `${line.amount_g} g` : null
            ].filter(Boolean).join("  ·  ") })
          ]
        },
        index
      ))
    }
  );
}
HairFormulaLines.propTypes = {
  formula: o.array
};
const CONDITION_FIELDS = [
  { key: "hair_length", label: "Length", options: HAIR_LENGTH_OPTIONS },
  { key: "hair_density", label: "Density", options: HAIR_DENSITY_OPTIONS },
  { key: "hair_texture", label: "Texture", options: HAIR_TEXTURE_OPTIONS },
  { key: "hair_porosity", label: "Porosity", options: HAIR_POROSITY_OPTIONS },
  { key: "scalp_condition", label: "Scalp", options: SCALP_CONDITION_OPTIONS }
];
function labelFor(options, value) {
  return options.find((option) => option.value === value)?.label ?? value;
}
function HairRecordDetail({ record, onEdit, onDelete, canDelete }) {
  if (!record) return null;
  const isPending = record.status === "pending";
  const hex = record.result_hair_color ? resolveHairColor(record.result_hair_color) : null;
  const stylistName = record.stylist ? `${record.stylist.first_name ?? ""} ${record.stylist.last_name ?? ""}`.trim() : null;
  const conditions = CONDITION_FIELDS.filter((field) => record[field.key]);
  const meta = [fDate(record.performed_at), stylistName].filter(Boolean).join(" · ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { p: { xs: 2, md: 3 } }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Stack,
      {
        direction: { xs: "column", sm: "row" },
        spacing: 2,
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "flex-start" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, alignItems: "center", sx: { minWidth: 0 }, children: [
            hex && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  borderRadius: "50%",
                  bgcolor: hex,
                  border: "2px solid",
                  borderColor: isLightHairColor(hex) ? "divider" : "transparent"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, flexWrap: "wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: record.service_name || HAIR_RECORD_TYPE_LABELS[record.record_type] || "Hair record" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: HAIR_RECORD_TYPE_LABELS[record.record_type] ?? record.record_type,
                    size: "small",
                    variant: "soft",
                    sx: { height: 20, fontSize: 11 }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: meta })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, sx: { flexShrink: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "small",
                variant: isPending ? "contained" : "outlined",
                onClick: () => onEdit(record),
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:edit-line", width: 16 }),
                children: isPending ? "Add formula" : "Edit"
              }
            ),
            canDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "small",
                color: "error",
                variant: "outlined",
                onClick: () => onDelete(record),
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 }),
                children: "Delete"
              }
            )
          ] })
        ]
      }
    ),
    isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "warning", variant: "outlined", children: "This visit was recorded at checkout but the formula was never filled in." }),
    record.is_pre_tracking && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", variant: "outlined", children: "Carried over from the client profile before visit tracking began. The date is when the profile was last edited, not when the colour was applied." }),
    record.formula?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HairSectionLabel, { icon: "solar:palette-bold", children: "Formula" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HairFormulaLines, { formula: record.formula })
    ] }),
    (record.technique || record.processing_minutes || record.result_hair_color) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HairSectionLabel, { icon: "solar:magic-stick-3-bold", children: "Application and result" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 4, flexWrap: "wrap", useFlexGap: true, children: [
          record.technique && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.disabled", display: "block" }, children: "Technique" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: record.technique })
          ] }),
          record.processing_minutes != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.disabled", display: "block" }, children: "Processing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "body2",
                sx: { fontWeight: 600, fontVariantNumeric: "tabular-nums" },
                children: [
                  record.processing_minutes,
                  " min"
                ]
              }
            )
          ] }),
          record.result_hair_color && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.disabled", display: "block" }, children: "Result" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "body2",
                sx: { fontWeight: 600, textTransform: "capitalize" },
                children: record.result_hair_color
              }
            )
          ] })
        ] })
      ] })
    ] }),
    conditions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HairSectionLabel, { icon: "solar:ruler-pen-bold", children: "Condition on the day" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 4, flexWrap: "wrap", useFlexGap: true, children: conditions.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.disabled", display: "block" }, children: field.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              variant: "body2",
              sx: { fontWeight: 600, textTransform: "capitalize" },
              children: labelFor(field.options, record[field.key])
            }
          )
        ] }, field.key)) })
      ] })
    ] }),
    record.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HairSectionLabel, { icon: "solar:notes-bold", children: "Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { maxWidth: "68ch", whiteSpace: "pre-wrap" }, children: record.notes })
      ] })
    ] })
  ] });
}
HairRecordDetail.propTypes = {
  record: o.object,
  onEdit: o.func.isRequired,
  onDelete: o.func.isRequired,
  canDelete: o.bool
};
function HairColorTrajectory({ records, selectedId, onSelect }) {
  const points = reactExports.useMemo(
    () => records.filter((record) => record.result_hair_color).slice().reverse(),
    [records]
  );
  if (points.length < 2) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "caption",
        sx: {
          fontWeight: 600,
          color: "text.secondary",
          letterSpacing: 0.4,
          textTransform: "uppercase"
        },
        children: "Colour over time"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { sx: { mt: 1.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "flex-end", spacing: 0, sx: { minWidth: "min-content" }, children: points.map((record, index) => {
      const hex = resolveHairColor(record.result_hair_color);
      const isSelected = record.id === selectedId;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", sx: { flexShrink: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            arrow: true,
            placement: "top",
            title: `${record.result_hair_color} · ${fDate(record.performed_at)}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ButtonBase,
              {
                onClick: () => onSelect(record.id),
                "aria-label": `${record.result_hair_color} on ${fDate(record.performed_at)}`,
                sx: {
                  borderRadius: "50%",
                  transition: (theme) => theme.transitions.create(["transform", "box-shadow"], {
                    duration: 180,
                    easing: "cubic-bezier(0.22, 1, 0.36, 1)"
                  }),
                  "&:hover": { transform: "translateY(-2px)" },
                  "&:focus-visible": {
                    outline: "2px solid",
                    outlineColor: "primary.main",
                    outlineOffset: 3
                  }
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      width: isSelected ? 30 : 22,
                      height: isSelected ? 30 : 22,
                      borderRadius: "50%",
                      bgcolor: hex,
                      border: "2px solid",
                      borderColor: isSelected ? "primary.main" : isLightHairColor(hex) ? "divider" : "transparent",
                      transition: (theme) => theme.transitions.create(["width", "height", "border-color"], {
                        duration: 180,
                        easing: "cubic-bezier(0.22, 1, 0.36, 1)"
                      })
                    }
                  }
                )
              }
            )
          }
        ),
        index < points.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              width: 18,
              height: 2,
              bgcolor: "divider",
              flexShrink: 0
            }
          }
        )
      ] }, record.id);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", sx: { mt: 0.75 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.disabled" }, children: fDate(points[0].performed_at) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.disabled" }, children: fDate(points[points.length - 1].performed_at) })
    ] })
  ] });
}
HairColorTrajectory.propTypes = {
  records: o.array,
  selectedId: o.string,
  onSelect: o.func.isRequired
};
function ClientHairHistory({ client }) {
  const clientId = client?.id;
  const { user } = useAuthContext();
  const { isAdmin, isManager } = usePermissions();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const organizationId = user?.branches?.[0]?.organization_id ?? user?.organization_id ?? null;
  const { records, recordsLoading, recordsError, revalidateRecords } = useClientHairRecords(clientId);
  const [selectedId, setSelectedId] = reactExports.useState(null);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [editingRecord, setEditingRecord] = reactExports.useState(null);
  const [pendingDelete, setPendingDelete] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!records.length) {
      setSelectedId(null);
      return;
    }
    setSelectedId(
      (current) => current && records.some((record) => record.id === current) ? current : records[0].id
    );
  }, [records]);
  const selectedRecord = records.find((record) => record.id === selectedId) ?? null;
  const handleAdd = reactExports.useCallback(() => {
    setEditingRecord(null);
    setDialogOpen(true);
  }, []);
  const handleEdit = reactExports.useCallback((record) => {
    setEditingRecord(record);
    setDialogOpen(true);
  }, []);
  const handleDialogClose = reactExports.useCallback(() => {
    setDialogOpen(false);
    setEditingRecord(null);
  }, []);
  const handleSubmit = reactExports.useCallback(
    async (payload) => {
      try {
        if (editingRecord) {
          await updateHairRecord(editingRecord.id, {
            ...payload,
            // Filling in a formula is what turns a checkout stub into a record.
            status: "complete",
            updated_by: user?.id ?? null
          });
          toast.success("Record updated");
        } else {
          const created = await createHairRecord({
            ...payload,
            client_id: clientId,
            organization_id: organizationId,
            branch_id: client?.branch_id ?? null,
            status: "complete",
            created_by: user?.id ?? null
          });
          setSelectedId(created.id);
          toast.success("Record added");
        }
        await revalidateRecords();
        handleDialogClose();
      } catch (error) {
        console.error("[Hair history] Failed to save record:", error);
        toast.error("Could not save the record");
      }
    },
    [client, clientId, editingRecord, handleDialogClose, organizationId, revalidateRecords, user]
  );
  const handleDelete = reactExports.useCallback(async () => {
    if (!pendingDelete) return;
    try {
      await deleteHairRecord(pendingDelete.id, clientId);
      await revalidateRecords();
      toast.success("Record deleted");
    } catch (error) {
      console.error("[Hair history] Failed to delete record:", error);
      toast.error("Could not delete the record");
    } finally {
      setPendingDelete(null);
    }
  }, [clientId, pendingDelete, revalidateRecords]);
  if (recordsLoading && !records.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", md: "row" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: { xs: 1, md: 320 }, p: 2 }, children: [...Array(5)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.5, alignItems: "center", sx: { py: 1.5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "circular", width: 24, height: 24 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: "70%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: "45%" })
        ] })
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, p: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 220, height: 32 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", height: 120, sx: { mt: 3 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", height: 80, sx: { mt: 2 } })
      ] })
    ] }) });
  }
  if (recordsError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Alert,
      {
        severity: "error",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "inherit", size: "small", onClick: () => revalidateRecords(), children: "Retry" }),
        children: "The hair history could not be loaded."
      }
    );
  }
  if (!records.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          filled: true,
          title: "No hair records yet",
          description: "Colour formulas recorded at checkout appear here, alongside anything added by hand. Each record keeps the mix, the technique and the result, so the next visit starts from what actually worked.",
          sx: { py: 8 },
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              onClick: handleAdd,
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              sx: { mt: 3 },
              children: "Add first record"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        HairRecordDialog,
        {
          open: dialogOpen,
          onClose: handleDialogClose,
          onSubmit: handleSubmit,
          clientId,
          record: editingRecord
        }
      )
    ] });
  }
  const showRail = isDesktop || !selectedRecord;
  const showDetail = isDesktop || !!selectedRecord;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: { xs: 2, md: 3 } }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Stack,
      {
        direction: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        spacing: 2,
        sx: { mb: 1 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            HairColorTrajectory,
            {
              records,
              selectedId,
              onSelect: setSelectedId
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              onClick: handleAdd,
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              sx: { flexShrink: 0 },
              children: "Add record"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", md: "row" }, sx: { minHeight: { md: 520 } }, children: [
      showRail && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            width: { xs: 1, md: 320 },
            flexShrink: 0,
            borderRight: { md: "1px solid" },
            borderColor: { md: "divider" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { sx: { maxHeight: { md: 620 } }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            HairRecordRail,
            {
              records,
              selectedId: isDesktop ? selectedId : null,
              onSelect: setSelectedId
            }
          ) })
        }
      ),
      showDetail && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
        !isDesktop && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { px: 2, pt: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "small",
            onClick: () => setSelectedId(null),
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-back-fill", width: 16 }),
            children: "All records"
          }
        ) }),
        selectedRecord ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          HairRecordDetail,
          {
            record: selectedRecord,
            onEdit: handleEdit,
            onDelete: setPendingDelete,
            canDelete: isAdmin || isManager
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stack,
          {
            alignItems: "center",
            justifyContent: "center",
            sx: { height: 1, p: 4, color: "text.disabled" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Pick a visit to see the formula." })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HairRecordDialog,
      {
        open: dialogOpen,
        onClose: handleDialogClose,
        onSubmit: handleSubmit,
        clientId,
        serviceId: editingRecord?.service_id ?? null,
        serviceName: editingRecord?.service_name ?? null,
        record: editingRecord,
        title: editingRecord ? "Edit record" : "Add hair record"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: !!pendingDelete,
        onClose: () => setPendingDelete(null),
        title: "Delete record",
        content: "This removes the formula and everything recorded with it. It cannot be undone.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleDelete, children: "Delete" })
      }
    )
  ] });
}
const STATUS_COLOR = {
  active: "success",
  expired: "default",
  cancelled: "error",
  paused: "warning"
};
function formatPlanMonth(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleString("en-US", { month: "long", year: "numeric" });
}
function DiscountPlanRow({ plan, onViewSplit, onCancel }) {
  const tpl = plan.discount_plan_templates;
  const used = plan.uses_count ?? 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { sx: { "& > *": { borderBottom: "unset" } }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Chip,
      {
        size: "small",
        label: tpl?.name ?? "—",
        sx: { bgcolor: tpl?.color || "#635BFF", color: "#fff", fontWeight: 600 }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: formatPlanMonth(plan.valid_month) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
      used,
      " visits"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: STATUS_COLOR[plan.status] || "default", children: plan.status }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, justifyContent: "flex-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onViewSplit(plan), title: "Stylist split", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:chart-square-bold", width: 18 }) }),
      plan.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onCancel(plan), title: "Cancel", color: "error", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold", width: 18 }) })
    ] }) })
  ] });
}
function ClientDiscountPlans({ client, clientId }) {
  const { user } = useAuthContext();
  const organizationId = user?.branches?.[0]?.organization_id;
  const confirmDialog = Ee();
  const [cancellingPlan, setCancellingPlan] = reactExports.useState(null);
  const [splitPlan, setSplitPlan] = reactExports.useState(null);
  const { clientPlans, clientPlansLoading } = useGetClientDiscountPlans(clientId);
  const handleCancelPlan = reactExports.useCallback(
    async (plan) => {
      try {
        const { error } = await cancelClientDiscountPlan(plan.id, clientId, organizationId);
        if (error) throw error;
        toast.success("Discount plan cancelled");
        confirmDialog.onFalse();
        setCancellingPlan(null);
      } catch {
        toast.error("Failed to cancel discount plan");
      }
    },
    [clientId, confirmDialog, organizationId]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardHeader,
        {
          title: "Discount Plans",
          sx: { mb: 2 },
          subheader: clientPlans.length > 0 ? `${clientPlans.length} plan${clientPlans.length !== 1 ? "s" : ""} total` : null
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      clientPlansLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "Loading...", sx: { py: 6 } }) : clientPlans.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          title: "No Discount Plans",
          description: "No discount plans have been assigned to this client yet.",
          sx: { py: 10 }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Usage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: clientPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          DiscountPlanRow,
          {
            plan,
            onViewSplit: setSplitPlan,
            onCancel: (p) => {
              setCancellingPlan(p);
              confirmDialog.onTrue();
            }
          },
          plan.id
        )) })
      ] })
    ] }),
    Boolean(splitPlan) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DiscountPlanStylistSplitDialog,
      {
        open: true,
        onClose: () => setSplitPlan(null),
        clientPlan: splitPlan
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: () => {
          confirmDialog.onFalse();
          setCancellingPlan(null);
        },
        title: "Cancel discount plan",
        content: `Cancel ${cancellingPlan?.discount_plan_templates?.name ?? "this plan"} for ${client?.first_name ?? "client"}? Existing usage records are kept.`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: () => handleCancelPlan(cancellingPlan),
            children: "Cancel plan"
          }
        )
      }
    )
  ] });
}
const FollowUpSchema = object({
  follow_up_status: _enum(["pending", "completed", "cancelled"]).default("pending"),
  follow_up_notes: string().max(2e3).optional().nullable(),
  followed_up_by: string().uuid().optional().nullable()
});
function FollowUpByStaffField({ branchId, staffObject }) {
  const { field } = useController({ name: "followed_up_by" });
  const handleStaffChange = (staff) => {
    field.onChange(staff?.id || null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StylistAutocompleteField,
    {
      label: "Followed Up By",
      placeholder: "Search staff member...",
      branchId,
      value: staffObject || null,
      onChange: handleStaffChange,
      helperText: "Staff member who performed the follow-up"
    }
  );
}
function ClientFollowUpModal({ open, onClose, feedback, onSuccess }) {
  const { user } = useAuthContext();
  const { primaryBranch } = useUserBranches();
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(FollowUpSchema),
    defaultValues: {
      follow_up_status: feedback?.follow_up_status || "pending",
      follow_up_notes: feedback?.follow_up_notes || "",
      followed_up_by: feedback?.followed_up_by || null
    }
  });
  const {
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = methods;
  const followedUpByStaffId = watch("followed_up_by");
  let staffObject = null;
  if (followedUpByStaffId && feedback?.followed_up_by_staff) {
    staffObject = feedback.followed_up_by_staff;
  }
  reactExports.useEffect(() => {
    if (!open) {
      reset();
    } else if (feedback) {
      reset({
        follow_up_status: feedback.follow_up_status || "pending",
        follow_up_notes: feedback.follow_up_notes || "",
        followed_up_by: feedback.followed_up_by || null
      });
    }
  }, [open, reset, feedback]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!feedback?.id) {
        throw new Error("Feedback ID is required");
      }
      const followUpData = {
        follow_up_status: data.follow_up_status,
        follow_up_notes: data.follow_up_notes || null,
        followed_up_by: data.followed_up_by || user?.id
      };
      await addFollowUp(feedback.id, followUpData);
      toast.success("Follow-up updated successfully!");
      reset();
      onClose();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error updating follow-up:", error);
      toast.error("Failed to update follow-up");
    }
  });
  const handleClose = () => {
    reset();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Manage Follow-up" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { id: "follow-up-form", methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { mt: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 2, bgcolor: "grey.100", borderRadius: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            sx: { color: "text.secondary", display: "block", mb: 0.5 },
            children: "Feedback"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: feedback?.title || "Feedback" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: feedback?.feedback_type && `Type: ${feedback.feedback_type}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "follow_up_status", label: "Follow-up Status", required: true, children: FOLLOW_UP_STATUS_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "follow_up_notes",
          label: "Follow-up Notes",
          multiline: true,
          rows: 4,
          placeholder: "Document what was done to follow up on this feedback...",
          helperText: "Max 2000 characters"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1, fontWeight: 600 }, children: "Followed Up By" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FollowUpByStaffField, { branchId: primaryBranch?.id, staffObject })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, variant: "outlined", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: onSubmit,
          variant: "contained",
          loading: isSubmitting,
          loadingPosition: "start",
          children: "Update Follow-up"
        }
      )
    ] })
  ] });
}
const FeedbackSchema = object({
  // Feedback type
  feedback_type: _enum(FEEDBACK_TYPES.map((option) => option.value)).default("general"),
  // Content
  title: string().max(255, { message: "Title must be 255 characters or less" }).optional().or(literal("")),
  comment: string().max(5e3, { message: "Comment must be 5000 characters or less" }).optional().or(literal("")),
  // Ratings (all optional, 1-5 scale)
  overall_rating: number().int().min(1, { message: "Rating must be between 1 and 5" }).max(5, { message: "Rating must be between 1 and 5" }).optional().nullable(),
  service_quality_rating: number().int().min(1, { message: "Rating must be between 1 and 5" }).max(5, { message: "Rating must be between 1 and 5" }).optional().nullable(),
  staff_rating: number().int().min(1, { message: "Rating must be between 1 and 5" }).max(5, { message: "Rating must be between 1 and 5" }).optional().nullable(),
  cleanliness_rating: number().int().min(1, { message: "Rating must be between 1 and 5" }).max(5, { message: "Rating must be between 1 and 5" }).optional().nullable(),
  value_rating: number().int().min(1, { message: "Rating must be between 1 and 5" }).max(5, { message: "Rating must be between 1 and 5" }).optional().nullable(),
  // Links
  staff_id: string().uuid().nullish(),
  appointment_id: string().uuid().nullish(),
  // Other fields
  would_recommend: boolean().default(false),
  is_public: boolean().default(false),
  needs_follow_up: boolean().default(false)
});
function formatTimeString(timeStr) {
  if (!timeStr) return "";
  const [hours, minutes] = timeStr.split(":");
  const hour = parseInt(hours, 10);
  const minute = parseInt(minutes, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${String(minute).padStart(2, "0")} ${ampm}`;
}
function AppointmentsSelectField({ clientId, label = "Link to Appointment" }) {
  const { appointments, isLoading } = useClientAppointments(clientId, {
    pageSize: 5,
    includeCompleted: true
  });
  const getAppointmentLabel = (appointment) => {
    if (!appointment) return "";
    const dateStr = fDate(appointment.appointment_date);
    const timeStr = formatTimeString(appointment.start_time);
    const serviceNames = appointment.services?.map((s) => s.service_name).join(", ") || "No services";
    const firstService = appointment.services?.[0];
    const stylistName = firstService?.stylist ? `${firstService.stylist.first_name} ${firstService.stylist.last_name}` : "Unknown staff";
    return `${dateStr} at ${timeStr} - ${serviceNames} (${stylistName})`;
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Stack,
      {
        direction: "row",
        spacing: 2,
        alignItems: "center",
        sx: {
          p: 1.5,
          border: "1px solid #e0e0e0",
          borderRadius: 1,
          backgroundColor: "#fafafa"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Loading appointments..." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Field.Select,
    {
      name: "appointment_id",
      label,
      placeholder: "Select an appointment",
      helperText: "The appointment this feedback is related to (optional)",
      sx: { width: "100%" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "None" }) }),
        appointments && appointments.length > 0 ? appointments.map((appointment) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: appointment.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "#",
            appointment.appointment_number
          ] }),
          " -",
          " ",
          getAppointmentLabel(appointment)
        ] }) }, appointment.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { disabled: true, children: "No appointments found" })
      ]
    }
  ) });
}
function RatingFieldComponent({ name, label }) {
  const { field } = useController({ name });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { display: "block", mb: 0.5 }, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Rating,
      {
        value: field.value || 0,
        onChange: (event, newValue) => {
          field.onChange(newValue);
        },
        size: "large",
        sx: {
          "& .MuiRating-iconFilled": {
            color: "#FFB400"
          }
        }
      }
    )
  ] });
}
function StaffLinkField({ branchId, staffObject }) {
  const { field } = useController({ name: "staff_id" });
  const handleStaffChange = (staff) => {
    field.onChange(staff?.id || null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StylistAutocompleteField,
    {
      label: "Link to Staff Member",
      placeholder: "Search staff member...",
      branchId,
      value: staffObject || null,
      onChange: handleStaffChange,
      helperText: "Select the staff member this feedback is about"
    }
  );
}
function ClientCreateFeedbackModal({
  open,
  onClose,
  clientId,
  onSuccess,
  editingFeedback
}) {
  const { user } = useAuthContext();
  const { primaryBranch } = useUserBranches();
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(FeedbackSchema),
    defaultValues: editingFeedback || DEFAULT_FEEDBACK_VALUES
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    if (!open) {
      reset();
    } else if (editingFeedback) {
      reset(editingFeedback);
    } else {
      reset(DEFAULT_FEEDBACK_VALUES);
    }
  }, [open, reset, editingFeedback]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      const feedbackData = {
        ...data,
        client_id: clientId,
        branch_id: primaryBranch?.id,
        organization_id: user?.primary_branch?.organization_id,
        created_by: editingFeedback ? editingFeedback.created_by : user?.id
      };
      if (editingFeedback) {
        await updateFeedback(editingFeedback.id, feedbackData);
        toast.success("Feedback updated successfully!");
      } else {
        await createFeedback(feedbackData);
        toast.success("Feedback submitted successfully!");
      }
      reset();
      onClose();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error(editingFeedback ? "Failed to update feedback" : "Failed to submit feedback");
    }
  });
  const handleClose = () => {
    reset();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editingFeedback ? "Edit Feedback" : "Submit Feedback" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { id: "feedback-form", methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { mt: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            sx: { flex: 2 },
            name: "title",
            label: "Feedback Title",
            placeholder: "Brief title of your feedback"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { sx: { flex: 1 }, name: "feedback_type", label: "Feedback Type", required: true, children: FEEDBACK_TYPES.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "comment",
          label: "Comment",
          multiline: true,
          rows: 4,
          placeholder: "Share your detailed feedback...",
          helperText: "Max 5000 characters"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 2, fontWeight: 600 }, children: "Ratings (Optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            RatingFieldComponent,
            {
              name: "overall_rating",
              label: RATING_LABELS.overall_rating
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            RatingFieldComponent,
            {
              name: "service_quality_rating",
              label: RATING_LABELS.service_quality_rating
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RatingFieldComponent, { name: "staff_rating", label: RATING_LABELS.staff_rating }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            RatingFieldComponent,
            {
              name: "cleanliness_rating",
              label: RATING_LABELS.cleanliness_rating
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RatingFieldComponent, { name: "value_rating", label: RATING_LABELS.value_rating }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 2, fontWeight: 600 }, children: "Links (Optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaffLinkField, { branchId: primaryBranch?.id, staffObject: editingFeedback?.staff }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentsSelectField, { clientId })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 2, fontWeight: 600 }, children: "Additional Options" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "would_recommend", label: "I would recommend this service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.Checkbox,
            {
              name: "is_public",
              label: "Allow this feedback to be visible publicly"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "needs_follow_up", label: "Request follow-up from staff" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, variant: "outlined", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: onSubmit,
          variant: "contained",
          loading: isSubmitting,
          loadingPosition: "start",
          children: editingFeedback ? "Update Feedback" : "Submit Feedback"
        }
      )
    ] })
  ] });
}
const NAV_ITEMS = [
  {
    value: "",
    label: "General",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:user-id-bold" })
  },
  {
    value: "followers",
    label: "Details",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:file-text-bold-duotone" })
  },
  {
    value: "hair",
    label: "Hair",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:scissors-square-bold-duotone" })
  },
  {
    value: "financial",
    label: "Financial",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:card-bold-duotone" })
  },
  {
    value: "packages",
    label: "Packages",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:gift-bold-duotone" })
  },
  {
    value: "messages",
    label: "Messages",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:plain-bold-duotone" })
  },
  {
    value: "audits",
    label: "Audits",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:history-bold-duotone" })
  },
  {
    value: "feedback",
    label: "Feedback",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { width: 24, icon: "solar:chat-dots-bold-duotone" })
  }
];
const TAB_PARAM = "tab";
function ClientProfileView({ clientId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get(TAB_PARAM) ?? "";
  const { user } = useAuthContext();
  const organizationId = user?.branches?.[0]?.organization_id;
  const branchId = user?.branches?.[0]?.id;
  const { client, clientLoading } = useClient(clientId);
  const {
    feedback,
    isLoading: feedbackLoading,
    mutate: mutateFeedback
  } = useGetClientFeedback(clientId);
  const [flags, setFlags] = reactExports.useState([]);
  const [feedbackOpen, setFeedbackOpen] = reactExports.useState(false);
  const [selectedFeedback, setSelectedFeedback] = reactExports.useState(null);
  const [followUpOpen, setFollowUpOpen] = reactExports.useState(false);
  const [selectedFollowUpFeedback, setSelectedFollowUpFeedback] = reactExports.useState(null);
  const quickSend = Ee();
  function onFeedbackModalClose() {
    setFeedbackOpen(false);
    setSelectedFeedback(null);
  }
  function onFeedbackSuccess() {
    mutateFeedback();
  }
  function onAddFeedback() {
    setSelectedFeedback(null);
    setFeedbackOpen(true);
  }
  function onEditFeedback(feedbackItem) {
    setSelectedFeedback(feedbackItem);
    setFeedbackOpen(true);
  }
  function onFollowUpModalClose() {
    setFollowUpOpen(false);
    setSelectedFollowUpFeedback(null);
  }
  function onManageFollowUp(feedbackItem) {
    setSelectedFollowUpFeedback(feedbackItem);
    setFollowUpOpen(true);
  }
  function onFollowUpSuccess() {
    mutateFeedback();
  }
  const createRedirectPath = (currentPath, query) => {
    const queryString = new URLSearchParams({ [TAB_PARAM]: query }).toString();
    return query ? `${currentPath}?${queryString}` : currentPath;
  };
  if (clientLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { message: "Loading customer data..." });
  }
  const highlightedFlag = flags.length > 0 ? flags.filter((flag) => flag.resolution_date === null)[0] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        backHref: "back",
        heading: "Profile",
        links: [
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Clients", href: paths.dashboard.clients.root },
          { name: client?.first_name + " " + client?.last_name }
        ],
        sx: { mb: 3 },
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: quickSend.onTrue,
              variant: "outlined",
              color: "primary",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:plain-bold" }),
              children: "Send Message"
            }
          ),
          client?.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              component: RouterLink,
              href: paths.dashboard.clients.edit(client?.id),
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:edit-line" }),
              children: "Edit Client"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: 140 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProfileCover,
        {
          clientImportance: client?.client_importance,
          highlightedFlag,
          clientId,
          flagsLength: flags.length,
          role: client?.roles,
          name: client?.first_name + " " + client?.last_name,
          avatarUrl: checkUuidLastDigit(clientId)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            width: 1,
            bottom: 0,
            zIndex: 9,
            px: { md: 3 },
            display: "flex",
            position: "absolute",
            bgcolor: "background.paper",
            justifyContent: { xs: "center", md: "flex-end" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: selectedTab, children: NAV_ITEMS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tab,
            {
              component: RouterLink,
              value: tab.value,
              icon: tab.icon,
              label: tab.label,
              href: createRedirectPath(pathname, tab.value)
            },
            tab.value
          )) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: 3 }, children: [
      selectedTab === "" && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientGeneral, { client, flags }),
      selectedTab === "followers" && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDetails, { client }),
      selectedTab === "hair" && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientHairHistory, { client }),
      selectedTab === "financial" && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientFinancial, { client, clientId }),
      selectedTab === "audits" && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientAudits, { client }),
      selectedTab === "packages" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClientPackages, { client, clientId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDiscountPlans, { client, clientId })
      ] }),
      selectedTab === "messages" && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientMessages, { client }),
      selectedTab === "feedback" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ClientFeedback,
        {
          feedback,
          isLoading: feedbackLoading,
          onAddFeedback,
          onEditFeedback,
          onManageFollowUp
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ClientCreateFeedbackModal,
      {
        open: feedbackOpen,
        clientId,
        editingFeedback: selectedFeedback,
        onClose: onFeedbackModalClose,
        onSuccess: onFeedbackSuccess
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ClientFollowUpModal,
      {
        open: followUpOpen,
        feedback: selectedFollowUpFeedback,
        onClose: onFollowUpModalClose,
        onSuccess: onFollowUpSuccess
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuickSendDialog,
      {
        open: quickSend.value,
        onClose: quickSend.onFalse,
        client,
        organizationId,
        branchId
      }
    )
  ] });
}
const metadata = { title: `Clients Profile | Dashboard - ${CONFIG.appName}` };
function ClientsProfilePage() {
  const { id = "" } = useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientProfileView, { clientId: id })
  ] });
}
export {
  ClientsProfilePage as default
};
