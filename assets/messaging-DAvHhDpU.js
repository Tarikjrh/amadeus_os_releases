import { j as jsxRuntimeExports, x as Select, M as MenuItem, r as reactExports, S as Stack, c as Typography, L as Label, T as Tooltip, as as fDateTime, bp as ze, B as Box, av as useAuthContext, E as Ee, t as toast, a4 as DashboardContent, ao as CustomBreadcrumbs, d as Button, a as Iconify, y as Card, ap as Tabs, aq as Tab, a1 as LinearProgress, I as IconButton, b as CircularProgress, a2 as Chip, at as Switch, an as fDate, C as CONFIG } from "./index-B08HRm4A.js";
import { C as CHANNEL_LABELS, a as CHANNEL_COLORS, S as STATUS_COLORS, u as useGetMessageLogs, b as useGetMessageTemplates, c as useGetMessageCampaigns, d as useGetMessageAutomations, e as deleteMessageTemplate, f as deleteMessageCampaign, g as deleteMessageAutomation, T as TemplateDialog, h as CampaignDialog, A as AutomationDialog, l as launchCampaign, i as updateMessageAutomation, j as AUTOMATION_TRIGGERS } from "./automation-dialog-EOdwcKf4.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ToolbarContainer, b as ToolbarLeftPanel, C as CustomToolbarQuickFilter, c as ToolbarRightPanel, d as CustomToolbarColumnsButton, e as CustomToolbarFilterButton, f as CustomToolbarExportButton } from "./toolbar-core-DGb1HZrD.js";
import { C as CustomToolbarSettingsButton, u as useToolbarSettings } from "./toolbar-extend-settings-yQm9maIz.js";
import { F as FormControl, I as InputLabel } from "./TextField-CIuP940C.js";
import { T as Toolbar, D as DataGrid, a as GridOverlay } from "./DataGrid-HciY9Sqp.js";
import { f as formatPhoneNumberIntl } from "./index-C4JOln-R.js";
import { g as gridClasses } from "./gridClasses-jU9X43RF.js";
import { D as Dialog, a as DialogContent } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import "./form-provider-u_wAFv-h.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./with-selector-ClfCuV5M.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./InputAdornment-BqZyQBIE.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./schemas-BVeYYbTr.js";
import "./client-autocomplete-C_9PlkEm.js";
import "./client-service-swr-DnF01Wop.js";
import "./index-Dha6iQ4E.js";
import "./compat-Bw8VbSM1.js";
import "./ToggleButtonGroup-CJXz0-w5.js";
import "./ToggleButton-D4MfeHtt.js";
import "./ExportPrint-CAqo1wR3.js";
import "./toPropertyKey-BRoQIA86.js";
import "./Skeleton-BC-WlQQE.js";
import "./TablePagination-BOFMLJYr.js";
const CHANNEL_OPTIONS = [
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "whatsapp", label: "WhatsApp" }
];
const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "sent", label: "Sent" },
  { value: "delivered", label: "Delivered" },
  { value: "opened", label: "Opened" },
  { value: "failed", label: "Failed" },
  { value: "bounced", label: "Bounced" }
];
const HIDE_COLUMNS_CAMPAIGN = {
  subject: false,
  source: false
};
function MessageLogTableToolbar({ filters, toolbarOptions }) {
  const { state, setState } = filters;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarLeftPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarQuickFilter, { size: "small" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", sx: { minWidth: 140 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Channel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            label: "Channel",
            value: state.channel ?? "",
            onChange: (e) => setState({ channel: e.target.value || null }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "All" }),
              CHANNEL_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", sx: { minWidth: 140 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            label: "Status",
            value: state.status ?? "",
            onChange: (e) => setState({ status: e.target.value || null }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "All" }),
              STATUS_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value))
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarRightPanel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarColumnsButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarFilterButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomToolbarExportButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomToolbarSettingsButton,
        {
          settings: toolbarOptions.settings,
          onChangeSettings: toolbarOptions.onChangeSettings
        }
      )
    ] })
  ] }) });
}
function useMessageLogColumns({ isCampaign = false } = {}) {
  return reactExports.useMemo(
    () => [
      {
        field: "client",
        headerName: "Client",
        flex: 1,
        minWidth: 150,
        sortable: false,
        filterable: false,
        valueGetter: (_, row) => row.client_profiles ? `${row.client_profiles.first_name} ${row.client_profiles.last_name}` : "—",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "column", height: "100%", justifyContent: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: params.value }) })
      },
      {
        field: "recipient",
        headerName: "Recipient",
        width: 220,
        sortable: false,
        filterable: false,
        valueGetter: (_, row) => row.recipient_email ?? row.recipient_phone ?? "—",
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "column", height: "100%", justifyContent: "center", spacing: 0, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: params.row.channel === "email" ? params.value : formatPhoneNumberIntl(params.value) }),
          params.row.sent_to_guardian && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Typography,
            {
              variant: "caption",
              color: "text.secondary",
              sx: { fontSize: 10, width: "fit-content" },
              children: [
                "Guardian",
                params.row.guardian_name ? `: ${params.row.guardian_name}` : ""
              ]
            }
          )
        ] })
      },
      {
        field: "channel",
        headerName: "Channel",
        width: 110,
        sortable: false,
        filterable: false,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: CHANNEL_COLORS[params.value], sx: { fontSize: 10 }, children: CHANNEL_LABELS[params.value] })
      },
      {
        field: "status",
        headerName: "Status",
        width: 110,
        sortable: false,
        filterable: false,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            title: params.value === "failed" && params.row.error_msg ? params.row.error_msg : "",
            arrow: true,
            disableHoverListener: params.value !== "failed" || !params.row.error_msg,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                color: STATUS_COLORS[params.value] ?? "default",
                sx: { fontSize: 10, textTransform: "capitalize" },
                children: params.value
              }
            ) })
          }
        )
      },
      {
        field: "subject",
        headerName: "Subject / Body",
        flex: 1,
        minWidth: 200,
        sortable: false,
        filterable: false,
        valueGetter: (_, row) => row.subject ?? (row.body || "").replace(/<[^>]+>/g, "").substring(0, 80),
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", noWrap: true, display: "block", children: params.value })
      },
      {
        field: "source",
        headerName: "Source",
        width: 160,
        sortable: false,
        filterable: false,
        valueGetter: (_, row) => row.message_campaigns?.name ?? row.message_templates?.name ?? (row.automation_id ? "Automation" : "Manual"),
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: params.value })
      },
      {
        field: "created_at",
        headerName: "Date",
        width: 160,
        type: "dateTime",
        valueGetter: (value) => value ? new Date(value) : null,
        renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: params.value ? fDateTime(params.value) : "—" })
      },
      {
        field: "error_msg",
        headerName: "Error",
        width: 200,
        sortable: false,
        filterable: false,
        renderCell: (params) => params.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "error.main", noWrap: true, children: params.value }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "—" })
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isCampaign]
  );
}
function MessageLogsTable({ organizationId, campaignId }) {
  const isCampaign = !!campaignId;
  const toolbarOptions = useToolbarSettings();
  const [paginationModel, setPaginationModel] = reactExports.useState({ page: 0, pageSize: 25 });
  const [sortModel, setSortModel] = reactExports.useState([{ field: "created_at", sort: "desc" }]);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [filterItems, setFilterItems] = reactExports.useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = reactExports.useState(
    isCampaign ? HIDE_COLUMNS_CAMPAIGN : {}
  );
  const filters = ze({ channel: null, status: null });
  const { logs, logsTotal, logsLoading } = useGetMessageLogs(organizationId, {
    campaign_id: campaignId,
    channel: filters.state.channel,
    status: filters.state.status,
    searchQuery,
    filterItems,
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    orderBy: sortModel[0]?.field ?? "created_at",
    order: sortModel[0]?.sort ?? "desc"
  });
  const handleFilterModelChange = reactExports.useCallback((newFilterModel) => {
    const searchValue = newFilterModel?.quickFilterValues?.[0] ?? "";
    setSearchQuery(searchValue);
    const validItems = (newFilterModel?.items ?? []).filter(
      (item) => item.value !== void 0 && item.value !== null && item.value !== ""
    );
    setFilterItems(validItems);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);
  const handleSortModelChange = reactExports.useCallback((newSortModel) => {
    setSortModel(newSortModel);
  }, []);
  const columns = useMessageLogColumns({ isCampaign });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DataGrid,
    {
      rows: logs,
      columns,
      getRowId: (row) => row.id,
      loading: logsLoading,
      pageSizeOptions: [10, 25, 50],
      paginationModel,
      onPaginationModelChange: setPaginationModel,
      rowCount: logsTotal,
      paginationMode: "server",
      sortingMode: "server",
      sortModel,
      onSortModelChange: handleSortModelChange,
      filterMode: "server",
      onFilterModelChange: handleFilterModelChange,
      columnVisibilityModel,
      onColumnVisibilityModelChange: setColumnVisibilityModel,
      hideFooter: logsTotal === 0,
      pagination: logsTotal > 0,
      ...toolbarOptions.settings,
      slots: {
        toolbar: MessageLogTableToolbar,
        noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: isCampaign ? "No campaign logs found" : "No messages sent yet" }),
        noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found" })
      },
      slotProps: {
        toolbar: { filters, toolbarOptions }
      },
      disableRowSelectionOnClick: true,
      sx: {
        [`& .${gridClasses.cell}`]: { alignItems: "center", display: "flex" },
        "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": { outline: "none" }
      }
    }
  );
}
function CampaignLogsDialog({ open, onClose, campaign, organizationId }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "lg", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Campaign Logs" }),
      campaign && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: campaign.name })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { p: 0, minHeight: 480, display: "flex", flexDirection: "column" }, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(MessageLogsTable, { organizationId, campaignId: campaign?.id }) })
  ] });
}
const TABS = [
  { value: "templates", label: "Templates", icon: "solar:document-text-bold-duotone" },
  { value: "campaigns", label: "Campaigns", icon: "solar:mailbox-bold-duotone" },
  { value: "logs", label: "Message Logs", icon: "solar:clock-circle-bold-duotone" },
  { value: "automations", label: "Automations", icon: "solar:bolt-bold-duotone" }
];
function MessagingOverviewView() {
  const { user } = useAuthContext();
  const organizationId = user?.branches?.[0]?.organization_id;
  const branchId = user?.branches?.[0]?.id;
  const [activeTab, setActiveTab] = reactExports.useState("templates");
  const templateDialog = Ee();
  const confirmDelTpl = Ee();
  const [editingTemplate, setEditingTemplate] = reactExports.useState(null);
  const [deletingTemplateId, setDeletingTemplateId] = reactExports.useState(null);
  const campaignDialog = Ee();
  const campaignLogsDialog = Ee();
  const confirmDelCamp = Ee();
  const [editingCampaign, setEditingCampaign] = reactExports.useState(null);
  const [viewingCampaign, setViewingCampaign] = reactExports.useState(null);
  const [deletingCampaignId, setDeletingCampaignId] = reactExports.useState(null);
  const [launchingId, setLaunchingId] = reactExports.useState(null);
  const automationDialog = Ee();
  const confirmDelAuto = Ee();
  const [editingAutomation, setEditingAutomation] = reactExports.useState(null);
  const [deletingAutoId, setDeletingAutoId] = reactExports.useState(null);
  const { templates, templatesLoading } = useGetMessageTemplates(organizationId);
  const { campaigns, campaignsLoading } = useGetMessageCampaigns(organizationId);
  const { automations, automationsLoading } = useGetMessageAutomations(organizationId);
  const handleNewTemplate = () => {
    setEditingTemplate(null);
    templateDialog.onTrue();
  };
  const handleEditTemplate = (t) => {
    setEditingTemplate(t);
    templateDialog.onTrue();
  };
  const handleDeleteTemplate = (id) => {
    setDeletingTemplateId(id);
    confirmDelTpl.onTrue();
  };
  const handleConfirmDeleteTemplate = reactExports.useCallback(async () => {
    try {
      await deleteMessageTemplate(deletingTemplateId, organizationId);
      toast.success("Template deleted");
    } catch (err) {
      toast.error(err.message);
    } finally {
      confirmDelTpl.onFalse();
      setDeletingTemplateId(null);
    }
  }, [deletingTemplateId, organizationId, confirmDelTpl]);
  const handleNewCampaign = () => {
    setEditingCampaign(null);
    campaignDialog.onTrue();
  };
  const handleEditCampaign = (c) => {
    setEditingCampaign(c);
    campaignDialog.onTrue();
  };
  const handleDeleteCampaign = (id) => {
    setDeletingCampaignId(id);
    confirmDelCamp.onTrue();
  };
  const handleConfirmDeleteCampaign = reactExports.useCallback(async () => {
    try {
      await deleteMessageCampaign(deletingCampaignId, organizationId);
      toast.success("Campaign deleted");
    } catch (err) {
      toast.error(err.message);
    } finally {
      confirmDelCamp.onFalse();
      setDeletingCampaignId(null);
    }
  }, [deletingCampaignId, organizationId, confirmDelCamp]);
  const handleViewCampaignLogs = (camp) => {
    setViewingCampaign(camp);
    campaignLogsDialog.onTrue();
  };
  const handleLaunchCampaign = async (campaignId) => {
    try {
      setLaunchingId(campaignId);
      const result = await launchCampaign(campaignId);
      toast.success(`Campaign sent! ${result.sent} messages sent, ${result.failed} failed.`);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLaunchingId(null);
    }
  };
  const handleNewAutomation = () => {
    setEditingAutomation(null);
    automationDialog.onTrue();
  };
  const handleEditAutomation = (a) => {
    setEditingAutomation(a);
    automationDialog.onTrue();
  };
  const handleDeleteAutomation = (id) => {
    setDeletingAutoId(id);
    confirmDelAuto.onTrue();
  };
  const handleToggleAutomation = async (automation) => {
    try {
      await updateMessageAutomation(automation.id, {
        is_active: !automation.is_active,
        organization_id: organizationId
      });
      toast.success(`Automation ${automation.is_active ? "disabled" : "enabled"}`);
    } catch (err) {
      toast.error(err.message);
    }
  };
  const handleConfirmDeleteAutomation = reactExports.useCallback(async () => {
    try {
      await deleteMessageAutomation(deletingAutoId, organizationId);
      toast.success("Automation deleted");
    } catch (err) {
      toast.error(err.message);
    } finally {
      confirmDelAuto.onFalse();
      setDeletingAutoId(null);
    }
  }, [deletingAutoId, organizationId, confirmDelAuto]);
  const campaignStatusColor = {
    draft: "default",
    scheduled: "info",
    sending: "warning",
    sent: "success",
    cancelled: "error"
  };
  const triggerLabel = (trigger) => AUTOMATION_TRIGGERS.find((t) => t.value === trigger)?.label ?? trigger;
  const CustomNoRowsOverlay = () => /* @__PURE__ */ jsxRuntimeExports.jsx(GridOverlay, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyContent,
    {
      title: "No templates yet",
      description: "Create your first message template to get started."
    }
  ) }) });
  const templateColumns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { height: "100%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: params?.row?.name }),
        params?.row?.description && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: params.row.description })
      ] })
    },
    {
      field: "channel",
      headerName: "Channel",
      width: 120,
      renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: CHANNEL_COLORS[params?.value], children: CHANNEL_LABELS[params?.value] })
    },
    {
      field: "category",
      headerName: "Category",
      width: 140,
      valueGetter: (params) => params?.row?.category ? params.row.category.replace("_", " ") : ""
    },
    {
      field: "subject",
      headerName: "Subject / Preview",
      flex: 1,
      renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { justifyContent: "center", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", noWrap: true, children: params?.row?.subject ?? (params?.row?.body || "").replace(/<[^>]+>/g, "").substring(0, 60) }) })
    },
    {
      field: "variables",
      headerName: "Variables",
      width: 200,
      renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "center", direction: "row", spacing: 0.5, height: "100%", children: [
        (params?.value ?? []).slice(0, 3).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: `{{${v}}}`,
            size: "small",
            variant: "outlined",
            sx: { fontFamily: "monospace", fontSize: 8 }
          },
          v
        )),
        (params?.value ?? []).length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: `+${(params.value ?? []).length - 3}`, size: "small" })
      ] })
    },
    {
      field: "created_at",
      headerName: "Created",
      width: 140,
      valueGetter: (value) => value ? fDate(value) : ""
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      filterable: false,
      align: "right",
      renderCell: (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "center", direction: "row", spacing: 0.5, height: "100%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => handleEditTemplate(params?.row), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16 }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            size: "small",
            color: "error",
            onClick: () => handleDeleteTemplate(params?.row?.id),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 })
          }
        ) })
      ] })
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Messaging",
        links: [{ name: "Dashboard", href: "/dashboard" }, { name: "Messaging" }],
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
          activeTab === "templates" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: handleNewTemplate,
              children: "New Template"
            }
          ),
          activeTab === "campaigns" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: handleNewCampaign,
              children: "New Campaign"
            }
          ),
          activeTab === "automations" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: handleNewAutomation,
              children: "New Automation"
            }
          )
        ] }),
        sx: { mb: 3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tabs,
        {
          value: activeTab,
          onChange: (_, val) => setActiveTab(val),
          sx: { px: 2.5, borderBottom: 1, borderColor: "divider" },
          children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tab,
            {
              value: tab.value,
              label: tab.label,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: tab.icon, width: 18 }),
              iconPosition: "start"
            },
            tab.value
          ))
        }
      ),
      activeTab === "templates" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            minHeight: 550,
            flexGrow: { md: 1 },
            display: { md: "flex" },
            flexDirection: { md: "column" }
          },
          children: [
            templatesLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DataGrid,
              {
                rows: templates,
                columns: templateColumns,
                loading: templatesLoading,
                autoHeight: true,
                disableSelectionOnClick: true,
                pageSize: 10,
                rowsPerPageOptions: [10, 25, 50],
                components: { NoRowsOverlay: CustomNoRowsOverlay },
                getRowId: (row) => row.id,
                slots: {
                  noRowsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No Templates found", sx: { height: 350 } }),
                  noResultsOverlay: () => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No results found", sx: { height: 350 } }),
                  toolbar: () => {
                  }
                }
              }
            )
          ]
        }
      ),
      activeTab === "campaigns" && /* @__PURE__ */ jsxRuntimeExports.jsxs(TableContainer, { sx: { minHeight: 550 }, children: [
        campaignsLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Channel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Recipients" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Sent / Failed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Scheduled / Sent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
            campaigns.length === 0 && !campaignsLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              EmptyContent,
              {
                title: "No campaigns yet",
                description: "Create a campaign to send messages to a group of clients."
              }
            ) }) }),
            campaigns.map((camp) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: camp.name }),
                camp.message_templates && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                  "Template: ",
                  camp.message_templates.name
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: CHANNEL_COLORS[camp.channel], children: CHANNEL_LABELS[camp.channel] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  color: campaignStatusColor[camp.status] ?? "default",
                  sx: { textTransform: "capitalize" },
                  children: camp.status
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: camp.recipient_count ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", component: "span", color: "success.main", children: camp.sent_count ?? 0 }),
                " / ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", component: "span", color: "error.main", children: camp.failed_count ?? 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: camp.completed_at ? fDateTime(camp.completed_at) : camp.scheduled_at ? `Scheduled: ${fDateTime(camp.scheduled_at)}` : "—" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "right", children: [
                camp.status === "sent" && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "View logs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => handleViewCampaignLogs(camp), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:eye-bold", width: 16 }) }) }),
                (camp.status === "draft" || camp.status === "scheduled") && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Send now", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    size: "small",
                    color: "primary",
                    onClick: () => handleLaunchCampaign(camp.id),
                    disabled: launchingId === camp.id,
                    children: launchingId === camp.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:plain-bold", width: 16 })
                  }
                ) }) }),
                camp.status === "draft" && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => handleEditCampaign(camp), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16 }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    size: "small",
                    color: "error",
                    onClick: () => handleDeleteCampaign(camp.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 })
                  }
                ) })
              ] })
            ] }, camp.id))
          ] })
        ] })
      ] }),
      activeTab === "logs" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            minHeight: 550,
            flexGrow: { md: 1 },
            display: { md: "flex" },
            flexDirection: { md: "column" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageLogsTable, { organizationId })
        }
      ),
      activeTab === "automations" && /* @__PURE__ */ jsxRuntimeExports.jsxs(TableContainer, { sx: { minHeight: 550 }, children: [
        automationsLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Trigger" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Channel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Template" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Config" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
            automations.length === 0 && !automationsLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              EmptyContent,
              {
                title: "No automations yet",
                description: "Set up automated messages for birthdays, appointment reminders, win-backs and more."
              }
            ) }) }),
            automations.map((auto) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: auto.name }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: triggerLabel(auto.trigger), size: "small" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: CHANNEL_COLORS[auto.channel], children: CHANNEL_LABELS[auto.channel] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: auto.message_templates?.name ?? "—" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                auto.trigger === "birthday" && `${auto.trigger_config?.days_before ?? 0}d before`,
                auto.trigger === "post_appointment" && `${auto.trigger_config?.delay_hours ?? 24}h after`,
                auto.trigger === "appointment_reminder" && `${auto.trigger_config?.hours_before ?? 24}h before`,
                auto.trigger === "win_back" && `After ${auto.trigger_config?.inactive_days ?? 90} days`
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: auto.is_active,
                  onChange: () => handleToggleAutomation(auto),
                  color: "success",
                  size: "small"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => handleEditAutomation(auto), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16 }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    size: "small",
                    color: "error",
                    onClick: () => handleDeleteAutomation(auto.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 })
                  }
                ) })
              ] })
            ] }, auto.id))
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TemplateDialog,
      {
        open: templateDialog.value,
        onClose: templateDialog.onFalse,
        template: editingTemplate,
        organizationId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CampaignDialog,
      {
        open: campaignDialog.value,
        onClose: campaignDialog.onFalse,
        campaign: editingCampaign,
        organizationId,
        branchId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AutomationDialog,
      {
        open: automationDialog.value,
        onClose: automationDialog.onFalse,
        automation: editingAutomation,
        organizationId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CampaignLogsDialog,
      {
        open: campaignLogsDialog.value,
        onClose: campaignLogsDialog.onFalse,
        campaign: viewingCampaign,
        organizationId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDelTpl.value,
        onClose: confirmDelTpl.onFalse,
        title: "Delete Template",
        content: "Are you sure you want to delete this template? This cannot be undone.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleConfirmDeleteTemplate, children: "Delete" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDelCamp.value,
        onClose: confirmDelCamp.onFalse,
        title: "Delete Campaign",
        content: "Are you sure you want to delete this campaign?",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleConfirmDeleteCampaign, children: "Delete" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDelAuto.value,
        onClose: confirmDelAuto.onFalse,
        title: "Delete Automation",
        content: "Are you sure you want to delete this automation?",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleConfirmDeleteAutomation, children: "Delete" })
      }
    )
  ] });
}
const metadata = { title: `Messaging | Dashboard - ${CONFIG.appName}` };
function MessagingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MessagingOverviewView, {})
  ] });
}
export {
  MessagingPage as default
};
