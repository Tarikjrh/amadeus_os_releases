import { u as useSWR, s as supabase, m as mutate, r as reactExports, t as toast, j as jsxRuntimeExports, S as Stack, B as Box, M as MenuItem, K as Divider, c as Typography, T as Tooltip, a2 as Chip, d as Button, ax as Alert, a as Iconify, I as IconButton, b as CircularProgress, x as Select } from "./index-B08HRm4A.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { o as object, s as string, a as array, n as number, b as boolean } from "./schemas-BVeYYbTr.js";
import { a as ClientAutocompleteField } from "./client-autocomplete-C_9PlkEm.js";
import { Z as ZodIssueCode } from "./compat-Bw8VbSM1.js";
import { T as ToggleButtonGroup } from "./ToggleButtonGroup-CJXz0-w5.js";
import { b as ToggleButton } from "./ToggleButton-D4MfeHtt.js";
import { T as TextField, F as FormControl, I as InputLabel } from "./TextField-CIuP940C.js";
const TEMPLATES_KEY = (orgId) => `msg-templates-${orgId}`;
const TEMPLATE_KEY = (id) => `msg-template-${id}`;
const CAMPAIGNS_KEY = (orgId) => `msg-campaigns-${orgId}`;
const CAMPAIGN_KEY = (id) => `msg-campaign-${id}`;
const LOGS_KEY = (orgId, filters) => `msg-logs-${orgId}-${JSON.stringify(filters, Object.keys(filters).sort())}`;
const CLIENT_LOGS_KEY = (clientId, page, pageSize) => `msg-logs-client-${clientId}-${page}-${pageSize}`;
const AUTOMATIONS_KEY = (orgId) => `msg-automations-${orgId}`;
const LOYALTY_TIERS_KEY = (orgId) => `loyalty-tiers-${orgId}`;
const TWILIO_WA_TEMPLATES_KEY = (orgId) => `twilio-wa-templates-${orgId}`;
function useGetTwilioWhatsAppTemplates(organizationId) {
  const { data, error, isLoading, mutate: refresh } = useSWR(
    organizationId ? TWILIO_WA_TEMPLATES_KEY(organizationId) : null,
    () => fetchTwilioWhatsAppTemplates(organizationId)
  );
  return {
    waTemplates: data || [],
    waTemplatesLoading: isLoading,
    waTemplatesError: error,
    refreshWaTemplates: refresh
  };
}
async function fetchTwilioWhatsAppTemplates(organizationId) {
  const { data, error } = await supabase.functions.invoke("get-whatsapp-templates", {
    body: { organization_id: organizationId }
  });
  if (error) throw error;
  if (data?.error) throw new Error(data.error);
  return data?.templates ?? [];
}
function useGetMessageTemplates(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? TEMPLATES_KEY(organizationId) : null,
    () => fetchTemplates(organizationId)
  );
  return { templates: data || [], templatesLoading: isLoading, templatesError: error };
}
function useGetMessageCampaigns(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? CAMPAIGNS_KEY(organizationId) : null,
    () => fetchCampaigns(organizationId)
  );
  return { campaigns: data || [], campaignsLoading: isLoading, campaignsError: error };
}
function useGetMessageLogs(organizationId, filters = {}) {
  const { data, error, isLoading } = useSWR(
    organizationId ? LOGS_KEY(organizationId, filters) : null,
    () => fetchLogs(organizationId, filters)
  );
  return {
    logs: data?.data || [],
    logsTotal: data?.count || 0,
    logsLoading: isLoading,
    logsError: error
  };
}
function useGetClientMessageLogs(clientId, { page = 0, pageSize = 10 } = {}) {
  const { data, error, isLoading } = useSWR(
    clientId ? CLIENT_LOGS_KEY(clientId, page, pageSize) : null,
    () => fetchClientLogs(clientId, { page, pageSize })
  );
  return {
    clientLogs: data?.data || [],
    clientLogsTotal: data?.count || 0,
    clientLogsLoading: isLoading,
    clientLogsError: error
  };
}
function useGetMessageAutomations(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? AUTOMATIONS_KEY(organizationId) : null,
    () => fetchAutomations(organizationId)
  );
  return { automations: data || [], automationsLoading: isLoading, automationsError: error };
}
async function fetchTemplates(organizationId) {
  const { data, error } = await supabase.from("message_templates").select("*").eq("organization_id", organizationId).eq("is_active", true).order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}
async function fetchCampaigns(organizationId) {
  const { data, error } = await supabase.from("message_campaigns").select(
    `
      *,
      message_templates (id, name, channel)
    `
  ).eq("organization_id", organizationId).neq("status", "cancelled").order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}
async function fetchLogs(organizationId, {
  channel,
  status,
  client_id,
  campaign_id,
  searchQuery,
  filterItems = [],
  page = 0,
  pageSize = 25,
  orderBy = "created_at",
  order = "desc"
} = {}) {
  const SORTABLE_COLUMNS = /* @__PURE__ */ new Set(["created_at", "channel", "status"]);
  const safeOrderBy = SORTABLE_COLUMNS.has(orderBy) ? orderBy : "created_at";
  const safeOrder = order === "asc" ? "asc" : "desc";
  let query = supabase.from("message_logs").select(
    `
      *,
      client_profiles (id, first_name, last_name),
      message_templates (id, name),
      message_campaigns (id, name)
    `,
    { count: "exact" }
  ).eq("organization_id", organizationId).order(safeOrderBy, { ascending: safeOrder === "asc" }).range(page * pageSize, (page + 1) * pageSize - 1);
  if (channel) query = query.eq("channel", channel);
  if (status) query = query.eq("status", status);
  if (client_id) query = query.eq("client_id", client_id);
  if (campaign_id) query = query.eq("campaign_id", campaign_id);
  if (searchQuery) {
    query = query.or(
      `recipient_email.ilike.%${searchQuery}%,recipient_phone.ilike.%${searchQuery}%`
    );
  }
  for (const item of filterItems) {
    if (!item.field || item.value === void 0 || item.value === null || item.value === "") {
      continue;
    }
    const FILTERABLE_COLUMNS = /* @__PURE__ */ new Set(["channel", "status", "recipient_email", "recipient_phone"]);
    if (!FILTERABLE_COLUMNS.has(item.field)) continue;
    switch (item.operator) {
      case "equals":
      case "is":
        query = query.eq(item.field, item.value);
        break;
      case "contains":
        query = query.ilike(item.field, `%${item.value}%`);
        break;
    }
  }
  const { data, error, count } = await query;
  if (error) throw error;
  return { data, count };
}
async function fetchClientLogs(clientId, { page = 0, pageSize = 10 } = {}) {
  const { data, error, count } = await supabase.from("message_logs").select("*, message_templates(id, name), message_campaigns(id, name)", { count: "exact" }).eq("client_id", clientId).order("created_at", { ascending: false }).range(page * pageSize, (page + 1) * pageSize - 1);
  if (error) throw error;
  return { data, count };
}
async function fetchAutomations(organizationId) {
  const { data, error } = await supabase.from("message_automations").select(`*, message_templates (id, name, channel)`).eq("organization_id", organizationId).order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}
async function createMessageTemplate(payload) {
  const { data, error } = await supabase.from("message_templates").insert(payload).select().single();
  if (error) throw error;
  mutate(TEMPLATES_KEY(payload.organization_id));
  return data;
}
async function updateMessageTemplate(id, payload) {
  const { data, error } = await supabase.from("message_templates").update(payload).eq("id", id).select().single();
  if (error) throw error;
  mutate(TEMPLATE_KEY(id));
  if (payload.organization_id) mutate(TEMPLATES_KEY(payload.organization_id));
  return data;
}
async function deleteMessageTemplate(id, organizationId) {
  const { error } = await supabase.from("message_templates").update({ is_active: false }).eq("id", id);
  if (error) throw error;
  mutate(TEMPLATES_KEY(organizationId));
}
async function createMessageCampaign(payload) {
  const { data, error } = await supabase.from("message_campaigns").insert(payload).select().single();
  if (error) throw error;
  mutate(CAMPAIGNS_KEY(payload.organization_id));
  return data;
}
async function updateMessageCampaign(id, payload) {
  const { data, error } = await supabase.from("message_campaigns").update(payload).eq("id", id).select().single();
  if (error) throw error;
  mutate(CAMPAIGN_KEY(id));
  return data;
}
async function deleteMessageCampaign(id, organizationId) {
  const { error } = await supabase.from("message_campaigns").update({ status: "cancelled" }).eq("id", id);
  if (error) throw error;
  mutate(CAMPAIGNS_KEY(organizationId));
}
async function launchCampaign(campaignId) {
  const { data, error } = await supabase.functions.invoke("process-campaign", {
    body: { campaign_id: campaignId }
  });
  if (error) throw error;
  mutate(CAMPAIGN_KEY(campaignId));
  return data;
}
async function sendOneOffMessage({
  channel,
  toEmail,
  toPhone,
  subject,
  body,
  clientId,
  templateId,
  contentSid,
  contentVariables,
  organizationId,
  branchId
}) {
  const { data, error } = await supabase.functions.invoke("send-message", {
    body: {
      channel,
      to_email: toEmail,
      to_phone: toPhone,
      subject,
      body,
      client_id: clientId,
      template_id: templateId,
      content_sid: contentSid,
      content_variables: contentVariables,
      organization_id: organizationId,
      branch_id: branchId
    }
  });
  if (error) throw error;
  if (clientId)
    mutate((key) => typeof key === "string" && key.startsWith(`msg-logs-client-${clientId}`));
  mutate(LOGS_KEY(organizationId, {}));
  return data;
}
async function createMessageAutomation(payload) {
  const { data, error } = await supabase.from("message_automations").insert(payload).select().single();
  if (error) throw error;
  mutate(AUTOMATIONS_KEY(payload.organization_id));
  return data;
}
async function updateMessageAutomation(id, payload) {
  const { data, error } = await supabase.from("message_automations").update(payload).eq("id", id).select().single();
  if (error) throw error;
  if (payload.organization_id) mutate(AUTOMATIONS_KEY(payload.organization_id));
  return data;
}
async function deleteMessageAutomation(id, organizationId) {
  const { error } = await supabase.from("message_automations").delete().eq("id", id);
  if (error) throw error;
  mutate(AUTOMATIONS_KEY(organizationId));
}
const CHANNEL_LABELS = {
  email: "Email",
  sms: "SMS",
  whatsapp: "WhatsApp"
};
const CHANNEL_COLORS = {
  email: "primary",
  sms: "warning",
  whatsapp: "success"
};
const STATUS_COLORS = {
  pending: "default",
  sent: "info",
  delivered: "success",
  failed: "error",
  bounced: "error",
  opened: "success"
};
const TEMPLATE_CATEGORIES = [
  { value: "confirmation", label: "Confirmation" },
  { value: "reminder", label: "Reminder" },
  { value: "marketing", label: "Marketing" },
  { value: "birthday", label: "Birthday" },
  { value: "win_back", label: "Win-back" },
  { value: "loyalty", label: "Loyalty" },
  { value: "general", label: "General" }
];
const AUTOMATION_TRIGGERS = [
  { value: "birthday", label: "Birthday", description: "Send on (or before) client birthday" },
  {
    value: "post_appointment",
    label: "Post-Appointment",
    description: "Send X hours after appointment ends - Appointment needed to be marked as completed for this to trigger"
  },
  {
    value: "appointment_reminder",
    label: "Appointment Reminder",
    description: "Send X hours before appointment"
  },
  { value: "win_back", label: "Win-back", description: "Send if client has not visited in X days" },
  {
    value: "loyalty_milestone",
    label: "Loyalty Milestone",
    description: "Send when client reaches a loyalty tier"
  }
];
function useGetLoyaltyTiers(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? LOYALTY_TIERS_KEY(organizationId) : null,
    async () => {
      const { data: program } = await supabase.from("loyalty_programs").select("id").eq("organization_id", organizationId).single();
      if (!program) return [];
      const { data: tiers, error: tiersError } = await supabase.from("loyalty_tiers").select("id, name, min_points").eq("program_id", program.id).order("min_points", { ascending: true });
      if (tiersError) throw tiersError;
      return tiers ?? [];
    }
  );
  return { tiers: data ?? [], tiersLoading: isLoading, tiersError: error };
}
const AVAILABLE_VARIABLES = [
  { key: "first_name", label: "First Name" },
  { key: "last_name", label: "Last Name" },
  { key: "preferred_name", label: "Preferred Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "appointment_date", label: "Appointment Date" },
  { key: "appointment_time", label: "Appointment Time" },
  { key: "inactive_days", label: "Days Inactive" },
  { key: "hours_before", label: "Hours Before" },
  { key: "tier_name", label: "Current Loyalty Tier Name" },
  { key: "tier_points", label: "Current Tier Points " }
];
const CHANNELS$3 = [
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "whatsapp", label: "WhatsApp" }
];
const Schema$3 = object({
  name: string().min(1, "Name is required"),
  category: string().min(1, "Category is required"),
  channel: string().min(1, "Channel is required"),
  description: string().optional(),
  subject: string().optional(),
  preheader: string().optional(),
  body: string().min(1, "Message body is required")
});
function TemplateDialog({ open, onClose, template, organizationId }) {
  const isEdit = Boolean(template?.id);
  const defaultValues = {
    name: template?.name ?? "",
    category: template?.category ?? "general",
    channel: template?.channel ?? "email",
    description: template?.description ?? "",
    subject: template?.subject ?? "",
    preheader: template?.preheader ?? "",
    body: template?.body ?? ""
  };
  const methods = useForm({ resolver: u(Schema$3), defaultValues });
  const {
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { isSubmitting }
  } = methods;
  const watchChannel = watch("channel");
  const watchBody = watch("body");
  const editorRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (open) reset(defaultValues);
  }, [open, template]);
  const insertVariable = (varKey) => {
    if (watchChannel === "email" && editorRef.current) {
      editorRef.current.chain().focus().insertContent(`{{${varKey}}}`).run();
    } else {
      const current = watchBody || "";
      setValue("body", `${current}{{${varKey}}}`);
    }
  };
  const onSubmit = handleSubmit(async (values) => {
    try {
      const allText = `${values.body} ${values.subject ?? ""}`;
      const matches = allText.match(/\{\{(\w+)\}\}/g) ?? [];
      const variables = [...new Set(matches.map((m) => m.replace(/\{\{|\}\}/g, "")))];
      const payload = {
        ...values,
        variables,
        organization_id: organizationId,
        subject: watchChannel === "email" ? values.subject : null,
        preheader: watchChannel === "email" ? values.preheader : null
      };
      if (isEdit) {
        await updateMessageTemplate(template.id, payload);
        toast.success("Template updated");
      } else {
        await createMessageTemplate(payload);
        toast.success("Template created");
      }
      onClose();
    } catch (err) {
      toast.error(err.message);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, fullWidth: true, maxWidth: "md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Template" : "New Template" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, sx: { pt: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              display: "grid",
              gap: 2,
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" }
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Template Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "channel", label: "Channel", children: CHANNELS$3.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: c.value, children: c.label }, c.value)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "category", label: "Category", children: TEMPLATE_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: c.value, children: c.label }, c.value)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "description", label: "Description (internal note)", multiline: true, rows: 1 }),
        watchChannel === "email" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "grid", gap: 2, gridTemplateColumns: "2fr 1fr" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "subject", label: "Email Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "preheader", label: "Preview Text (preheader)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Click a variable to insert it into the body:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: AVAILABLE_VARIABLES.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: `Insert {{${v.key}}}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: v.label,
              size: "small",
              variant: "outlined",
              onClick: () => insertVariable(v.key),
              sx: { cursor: "pointer", fontFamily: "monospace", fontSize: 11 }
            }
          ) }, v.key)) })
        ] }),
        watchChannel === "email" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Editor, { name: "body", label: "Email Body (HTML)", editorRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "body",
            label: watchChannel === "whatsapp" ? "WhatsApp Message" : "SMS Message",
            multiline: true,
            rows: 5,
            helperText: `${(watchBody || "").length} characters${watchChannel === "sms" ? " (160 per SMS segment) - emojis will cause message to fail" : ""}`
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, variant: "outlined", color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", loading: isSubmitting, children: isEdit ? "Save Changes" : "Create Template" })
      ] })
    ] })
  ] });
}
const CHANNELS$2 = [
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "whatsapp", label: "WhatsApp" }
];
const CLIENT_STATUSES = [
  { value: "active", label: "Active" },
  { value: "vip", label: "VIP" },
  { value: "inactive", label: "Inactive" }
];
const Schema$2 = object({
  name: string().min(1, "Campaign name is required"),
  channel: string().min(1, "Channel is required"),
  template_id: string().optional(),
  whatsapp_content_sid: string().optional(),
  subject_override: string().optional(),
  body_override: string().optional(),
  recipient_filter: object({
    status: array(string()).optional()
  }).optional(),
  scheduled_at: string().nullable().optional()
}).superRefine((data, ctx) => {
  if (data.channel === "whatsapp" && !data.whatsapp_content_sid) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: "A WhatsApp template is required",
      path: ["whatsapp_content_sid"]
    });
  }
});
function CampaignDialog({ open, onClose, campaign, organizationId, branchId }) {
  const isEdit = Boolean(campaign?.id);
  const [useCustomBody, setUseCustomBody] = reactExports.useState(false);
  const [selectedClients, setSelectedClients] = reactExports.useState([]);
  const [showClientSelect, setShowClientSelect] = reactExports.useState(false);
  const [selectedWaTemplate, setSelectedWaTemplate] = reactExports.useState(null);
  const { templates } = useGetMessageTemplates(organizationId);
  const { waTemplates, waTemplatesLoading, waTemplatesError } = useGetTwilioWhatsAppTemplates(organizationId);
  const defaultValues = {
    name: campaign?.name ?? "",
    channel: campaign?.channel ?? "email",
    template_id: campaign?.template_id ?? "",
    whatsapp_content_sid: campaign?.whatsapp_content_sid ?? "",
    subject_override: campaign?.subject_override ?? "",
    body_override: campaign?.body_override ?? "",
    recipient_filter: campaign?.recipient_filter ?? { status: ["active", "vip"] },
    scheduled_at: campaign?.scheduled_at ?? null
  };
  const methods = useForm({ resolver: u(Schema$2), defaultValues });
  const {
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { isSubmitting }
  } = methods;
  const watchChannel = watch("channel");
  const watchTemplateId = watch("template_id");
  reactExports.useEffect(() => {
    if (open) {
      reset(defaultValues);
      setUseCustomBody(Boolean(campaign?.body_override));
      setSelectedClients([]);
      setShowClientSelect(false);
      setSelectedWaTemplate(null);
    }
  }, [open, campaign]);
  reactExports.useEffect(() => {
    setValue("template_id", "");
    setValue("whatsapp_content_sid", "");
    setValue("body_override", "");
    setValue("subject_override", "");
    setUseCustomBody(false);
    setSelectedWaTemplate(null);
  }, [watchChannel, setValue]);
  const filteredTemplates = templates.filter((t) => t.channel === watchChannel);
  const selectedTemplate = filteredTemplates.find((t) => t.id === watchTemplateId);
  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = {
        ...values,
        organization_id: organizationId,
        branch_id: branchId ?? null,
        template_id: values.template_id || null,
        whatsapp_content_sid: values.whatsapp_content_sid || null,
        subject_override: useCustomBody ? values.subject_override || null : null,
        body_override: useCustomBody ? values.body_override || null : null,
        scheduled_at: values.scheduled_at ? new Date(values.scheduled_at).toISOString() : null,
        status: values.scheduled_at ? "scheduled" : "draft",
        recipient_client_ids: selectedClients.length > 0 ? selectedClients.map((c) => c.id) : void 0
      };
      if (isEdit) {
        await updateMessageCampaign(campaign.id, payload);
        toast.success("Campaign updated");
      } else {
        await createMessageCampaign(payload);
        toast.success("Campaign created as draft");
      }
      onClose();
    } catch (err) {
      toast.error(err.message);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, fullWidth: true, maxWidth: "md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Campaign" : "New Campaign" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, sx: { py: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: { display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "2fr 1fr" } },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Campaign Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "channel", label: "Channel", children: CHANNELS$2.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: c.value, children: c.label }, c.value)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.secondary", children: "Message Content" }) }),
        watchChannel === "whatsapp" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Field.Select,
            {
              name: "whatsapp_content_sid",
              label: "WhatsApp Template",
              disabled: waTemplatesLoading,
              onChange: (e) => {
                const tpl = waTemplates.find((t) => t.sid === e.target.value);
                setSelectedWaTemplate(tpl ?? null);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", disabled: true, children: waTemplatesLoading ? "Loading…" : "— Select an approved template —" }),
                waTemplatesError ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { disabled: true, children: "Failed to load Twilio templates" }) : waTemplates.length === 0 && !waTemplatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { disabled: true, children: "No approved WhatsApp templates found" }) : waTemplates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: t.sid, children: t.name }, t.sid))
              ]
            }
          ),
          selectedWaTemplate && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "info", icon: false, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Template preview:" }),
              " ",
              selectedWaTemplate.body.substring(0, 200),
              selectedWaTemplate.body.length > 200 ? "…" : ""
            ] }),
            Object.keys(selectedWaTemplate.variables ?? {}).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", display: "block", color: "text.secondary", mt: 0.5, children: [
              "Variables:",
              " ",
              Object.entries(selectedWaTemplate.variables).map(([pos, hint]) => `{{${pos}}} = ${hint}`).join(", "),
              " ",
              "— filled per client at send time."
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "template_id", label: "Use Template (optional)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "— None (write custom message) —" }),
            filteredTemplates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: t.id, children: t.name }, t.id))
          ] }),
          selectedTemplate && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", icon: false, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Template preview:" }),
            " ",
            selectedTemplate.subject && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Subject:" }),
              " ",
              selectedTemplate.subject,
              " ·",
              " "
            ] }),
            (selectedTemplate.body || "").replace(/<[^>]+>/g, "").substring(0, 120),
            "…"
          ] }) })
        ] }),
        watchChannel !== "whatsapp" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "small",
              variant: "outlined",
              color: "inherit",
              sx: { alignSelf: "flex-start" },
              onClick: () => setUseCustomBody((prev) => !prev),
              children: useCustomBody ? "✓ Custom message (override template)" : "Write custom message instead"
            }
          ),
          useCustomBody && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
            watchChannel === "email" && /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "subject_override", label: "Subject (override)" }),
            watchChannel === "email" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Editor, { name: "body_override", label: "Body (override)" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "body_override", label: "Message Body", multiline: true, rows: 5 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.secondary", children: "Recipients" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Client Status Filter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", flexWrap: "wrap", gap: 1 }, children: CLIENT_STATUSES.map((s) => {
            const current = methods.watch("recipient_filter.status") ?? [];
            const selected = current.includes(s.value);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: s.label,
                variant: selected ? "filled" : "outlined",
                color: selected ? "primary" : "default",
                onClick: () => {
                  const next = selected ? current.filter((v) => v !== s.value) : [...current, s.value];
                  methods.setValue("recipient_filter.status", next);
                }
              },
              s.value
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
            "Only clients with a matching",
            " ",
            watchChannel === "email" ? "email address" : "phone number",
            " will receive the message."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "small",
            variant: "outlined",
            color: "inherit",
            sx: { alignSelf: "flex-start" },
            onClick: () => {
              setShowClientSelect((prev) => !prev);
              if (showClientSelect) setSelectedClients([]);
            },
            children: showClientSelect ? `✓ Specific clients selected (${selectedClients.length})` : "Select specific clients"
          }
        ),
        showClientSelect && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientAutocompleteField,
          {
            label: "Specific Clients",
            placeholder: "Search and add clients...",
            helperText: "Only these clients will receive the campaign, ignoring the status filter",
            value: selectedClients,
            onChange: setSelectedClients,
            multiple: true,
            disableCloseOnSelect: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "overline", color: "text.secondary", children: "Schedule (optional)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.DateTimePicker,
          {
            name: "scheduled_at",
            label: "Schedule Send At",
            ampm: true,
            slotProps: {
              textField: {
                helperText: "Leave empty to save as draft and send manually",
                fullWidth: true
              }
            }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, variant: "outlined", color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", loading: isSubmitting, children: isEdit ? "Save Changes" : "Create Campaign" })
      ] })
    ] })
  ] });
}
const CHANNELS$1 = [
  { value: "email", label: "Email", requiresField: "email" },
  { value: "sms", label: "SMS", requiresField: "phone_primary" },
  { value: "whatsapp", label: "WhatsApp", requiresField: "phone_primary" }
];
const CLIENT_VAR_HINTS = {
  first_name: (c) => c?.first_name ?? "",
  last_name: (c) => c?.last_name ?? "",
  preferred_name: (c) => c?.preferred_name ?? "",
  name: (c) => c?.first_name ?? "",
  full_name: (c) => [c?.first_name, c?.last_name].filter(Boolean).join(" "),
  phone: (c) => c?.phone_primary ?? "",
  email: (c) => c?.email ?? ""
};
function autoFillFromClient(hint, client) {
  const key = hint?.toLowerCase().replace(/\s+/g, "_");
  const fn = CLIENT_VAR_HINTS[key];
  return fn ? fn(client) : "";
}
function renderPreview(body, vars) {
  return body.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? `{{${key}}}`);
}
const Schema$1 = object({
  channel: string().min(1, "Channel is required"),
  template_id: string().optional(),
  subject: string().optional(),
  body: string().optional(),
  whatsapp_template_sid: string().optional()
}).superRefine((data, ctx) => {
  if (data.channel === "whatsapp") {
    if (!data.whatsapp_template_sid && !data.body) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "Select a template or write a message",
        path: ["whatsapp_template_sid"]
      });
    }
  } else if (!data.body) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: "Message body is required",
      path: ["body"]
    });
  }
});
function QuickSendDialog({ open, onClose, client, organizationId, branchId }) {
  const [waMode, setWaMode] = reactExports.useState("template");
  const [selectedWaTemplate, setSelectedWaTemplate] = reactExports.useState(null);
  const [variableValues, setVariableValues] = reactExports.useState({});
  const { templates } = useGetMessageTemplates(organizationId);
  const { waTemplates, waTemplatesLoading, waTemplatesError, refreshWaTemplates } = useGetTwilioWhatsAppTemplates(organizationId);
  const defaultValues = {
    channel: "email",
    template_id: "",
    subject: "",
    body: "",
    whatsapp_template_sid: ""
  };
  const methods = useForm({ resolver: u(Schema$1), defaultValues });
  const {
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { isSubmitting }
  } = methods;
  const watchChannel = watch("channel");
  reactExports.useEffect(() => {
    if (open) {
      reset(defaultValues);
      setWaMode("template");
      setSelectedWaTemplate(null);
      setVariableValues({});
    }
  }, [open]);
  reactExports.useEffect(() => {
    setWaMode("template");
    setSelectedWaTemplate(null);
    setVariableValues({});
    setValue("whatsapp_template_sid", "");
    setValue("template_id", "");
    setValue("body", "");
    setValue("subject", "");
  }, [watchChannel, setValue]);
  const handleWaModeChange = (_, newMode) => {
    if (!newMode) return;
    setWaMode(newMode);
    setSelectedWaTemplate(null);
    setVariableValues({});
    setValue("whatsapp_template_sid", "");
    setValue("body", "");
  };
  const handleWaTemplateChange = (sid) => {
    const tpl = waTemplates.find((t) => t.sid === sid);
    setSelectedWaTemplate(tpl ?? null);
    setValue("whatsapp_template_sid", sid);
    if (tpl) {
      const autoFilled = {};
      Object.entries(tpl.variables ?? {}).forEach(([pos, hint]) => {
        const val = autoFillFromClient(hint, client);
        if (val) autoFilled[pos] = val;
      });
      setVariableValues(autoFilled);
    } else {
      setVariableValues({});
    }
  };
  const filteredTemplates = templates.filter((t) => t.channel === watchChannel);
  const handleEmailSmsTemplateChange = (templateId) => {
    const tpl = templates.find((t) => t.id === templateId);
    setValue("template_id", templateId);
    setValue("body", tpl?.body ?? "");
    setValue("subject", tpl?.subject ?? "");
  };
  const isMinor = Boolean(client?.is_minor);
  const guardianEmail = client?.guardian_email ?? null;
  const guardianPhone = client?.guardian_phone ?? null;
  const guardianHasLinkedClient = Boolean(client?.guardian_client_id);
  const guardianDisplayName = client?.guardian_name ?? null;
  const effectiveEmail = isMinor ? guardianEmail ?? (guardianHasLinkedClient ? "(linked guardian on file)" : null) : client?.email;
  const effectivePhone = isMinor ? guardianPhone ?? (guardianHasLinkedClient ? "(linked guardian on file)" : null) : client?.phone_primary;
  const hasContact = watchChannel === "email" ? Boolean(effectiveEmail) : Boolean(effectivePhone);
  const onSubmit = handleSubmit(async (values) => {
    try {
      if (!hasContact) {
        toast.error(
          isMinor ? `No guardian ${watchChannel === "email" ? "email" : "phone"} on file for this minor` : `Client has no ${watchChannel === "email" ? "email" : "phone"} on file`
        );
        return;
      }
      const isWaTemplate = watchChannel === "whatsapp" && waMode === "template" && selectedWaTemplate;
      if (isWaTemplate) {
        const positions = Object.keys(selectedWaTemplate.variables ?? {});
        const empty = positions.filter((pos) => !variableValues[pos]?.trim());
        if (empty.length > 0) {
          toast.error("Please fill in all template variables before sending");
          return;
        }
      }
      await sendOneOffMessage({
        channel: values.channel,
        toEmail: values.channel === "email" ? isMinor ? guardianEmail ?? void 0 : client.email : void 0,
        toPhone: values.channel !== "email" ? isMinor ? guardianPhone ?? void 0 : client.phone_primary : void 0,
        subject: values.subject,
        body: isWaTemplate ? void 0 : values.body,
        clientId: client.id,
        templateId: values.template_id || void 0,
        contentSid: isWaTemplate ? selectedWaTemplate.sid : void 0,
        contentVariables: isWaTemplate && Object.keys(variableValues).length > 0 ? variableValues : void 0,
        organizationId,
        branchId
      });
      toast.success(
        isMinor ? `Message sent to guardian${guardianDisplayName ? ` (${guardianDisplayName})` : ""} on behalf of ${client.first_name}` : `Message sent to ${client.first_name}`
      );
      onClose();
    } catch (err) {
      toast.error(err.message);
    }
  });
  if (!client) return null;
  const isWhatsApp = watchChannel === "whatsapp";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, fullWidth: true, maxWidth: "sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      "Send Message to ",
      client.first_name,
      " ",
      client.last_name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, sx: { pt: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { id: "quick-send-form", methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "channel", label: "Channel", children: CHANNELS$1.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: c.value, children: c.label }, c.value)) }),
      isMinor && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "warning", icon: false, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", fontWeight: 600, children: [
        "Minor client — message will be sent to guardian",
        guardianDisplayName ? ` (${guardianDisplayName})` : "",
        "."
      ] }) }),
      hasContact ? /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "success", icon: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: watchChannel === "email" ? `Sending to: ${effectiveEmail}` : `Sending to: ${effectivePhone}` }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "warning", children: isMinor ? `No guardian ${watchChannel === "email" ? "email address" : "phone number"} on file.` : `Client has no ${watchChannel === "email" ? "email address" : "phone number"} on file.` }),
      isWhatsApp ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ToggleButtonGroup,
          {
            value: waMode,
            exclusive: true,
            onChange: handleWaModeChange,
            size: "small",
            fullWidth: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleButton, { value: "template", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:document-bold", width: 16, sx: { mr: 0.75 } }),
                "Use Template"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleButton, { value: "freeform", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16, sx: { mr: 0.75 } }),
                "Free-form Reply"
              ] })
            ]
          }
        ),
        waMode === "template" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Field.Select,
              {
                name: "whatsapp_template_sid",
                label: "WhatsApp Template",
                disabled: waTemplatesLoading,
                onChange: (e) => handleWaTemplateChange(e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", disabled: true, children: waTemplatesLoading ? "Loading templates…" : "— Select an approved template —" }),
                  waTemplatesError ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { disabled: true, children: "Failed to load templates" }) : waTemplates.length === 0 && !waTemplatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { disabled: true, children: "No approved WhatsApp templates found" }) : waTemplates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: t.sid, children: t.name }, t.sid))
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                title: "Refresh templates",
                onClick: () => refreshWaTemplates(),
                disabled: waTemplatesLoading,
                children: waTemplatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:refresh-bold", width: 18 })
              }
            )
          ] }),
          waTemplatesError && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", icon: false, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", children: [
            "Could not load templates from Twilio: ",
            waTemplatesError.message
          ] }) }),
          selectedWaTemplate && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            Object.entries(selectedWaTemplate.variables ?? {}).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Template variables" }),
              Object.entries(selectedWaTemplate.variables).map(([pos, hint]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  size: "small",
                  label: hint || `Variable ${pos}`,
                  value: variableValues[pos] ?? "",
                  onChange: (e) => setVariableValues((prev) => ({ ...prev, [pos]: e.target.value }))
                },
                pos
              ))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "info", icon: false, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  fontWeight: 600,
                  display: "block",
                  gutterBottom: true,
                  children: "Message preview:"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  component: "pre",
                  sx: { whiteSpace: "pre-wrap", fontFamily: "inherit", m: 0 },
                  children: renderPreview(selectedWaTemplate.body, variableValues)
                }
              )
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "body", label: "Message", multiline: true, rows: 5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "warning", icon: false, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", children: [
            "Free-form messages only work within a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "24-hour conversation window" }),
            " after the client has messaged you first. Use a template to initiate a new conversation."
          ] }) })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "Load from Template (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Field.Select,
            {
              name: "template_id",
              label: "Template",
              onChange: (e) => handleEmailSmsTemplateChange(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "— Write custom message —" }),
                filteredTemplates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: t.id, children: t.name }, t.id))
              ]
            }
          )
        ] }),
        watchChannel === "email" && /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "subject", label: "Subject" }),
        watchChannel === "email" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Editor, { name: "body", label: "Message" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "body", label: "Message", multiline: true, rows: 5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", icon: false, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", children: [
          "Available variables:",
          " ",
          AVAILABLE_VARIABLES.slice(0, 5).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "code", sx: { mx: 0.3, fontSize: 11 }, children: `{{${v.key}}}` }, v.key)),
          "— these will be replaced with the client's actual data."
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, variant: "outlined", color: "inherit", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          form: "quick-send-form",
          type: "submit",
          color: "primary",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:plain-bold" }),
          variant: "contained",
          loading: isSubmitting,
          disabled: !hasContact,
          children: "Send Message"
        }
      )
    ] })
  ] });
}
const CHANNELS = [
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "whatsapp", label: "WhatsApp" }
];
const Schema = object({
  name: string().min(1, "Name is required"),
  trigger: string().min(1, "Trigger is required"),
  channel: string().min(1, "Channel is required"),
  template_id: string().optional(),
  whatsapp_content_sid: string().optional(),
  is_active: boolean().default(true),
  days_before: number().int().min(0).optional(),
  delay_hours: number().int().min(1).optional(),
  hours_before: number().int().min(1).optional(),
  inactive_days: number().int().min(1).optional(),
  tier_id: string().optional()
}).superRefine((data, ctx) => {
  if (data.channel === "whatsapp" && !data.whatsapp_content_sid) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: "A WhatsApp template is required",
      path: ["whatsapp_content_sid"]
    });
  }
  if (data.channel !== "whatsapp" && !data.template_id) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: "Template is required",
      path: ["template_id"]
    });
  }
});
const TRIGGER_CONFIG_FIELDS = {
  birthday: [{ name: "days_before", label: "Days before birthday (0 = on the day)", default: 0 }],
  post_appointment: [{ name: "delay_hours", label: "Hours after appointment ends", default: 24 }],
  appointment_reminder: [{ name: "hours_before", label: "Hours before appointment", default: 24 }],
  win_back: [{ name: "inactive_days", label: "Days since last visit", default: 90 }],
  loyalty_milestone: []
};
const TRIGGER_AVAILABLE_VARS = {
  birthday: [
    { key: "first_name", label: "First Name" },
    { key: "last_name", label: "Last Name" },
    { key: "preferred_name", label: "Preferred Name" }
  ],
  post_appointment: [
    { key: "first_name", label: "First Name" },
    { key: "last_name", label: "Last Name" },
    { key: "preferred_name", label: "Preferred Name" },
    { key: "appointment_date", label: "Appointment Date" },
    { key: "appointment_time", label: "Appointment Time" },
    { key: "stylist_name", label: "Stylist Name" },
    { key: "delay_hours", label: "Hours After Appointment" }
  ],
  appointment_reminder: [
    { key: "first_name", label: "First Name" },
    { key: "last_name", label: "Last Name" },
    { key: "preferred_name", label: "Preferred Name" },
    { key: "appointment_date", label: "Appointment Date" },
    { key: "appointment_time", label: "Appointment Time" },
    { key: "stylist_name", label: "Stylist Name" },
    { key: "hours_before", label: "Hours Before Appointment" }
  ],
  win_back: [
    { key: "first_name", label: "First Name" },
    { key: "last_name", label: "Last Name" },
    { key: "preferred_name", label: "Preferred Name" },
    { key: "inactive_days", label: "Days Since Last Visit" }
  ],
  loyalty_milestone: [
    { key: "first_name", label: "First Name" },
    { key: "last_name", label: "Last Name" },
    { key: "preferred_name", label: "Preferred Name" },
    { key: "tier_name", label: "Tier Name" },
    { key: "tier_points", label: "Tier Points" }
  ]
};
function AutomationDialog({ open, onClose, automation, organizationId }) {
  const isEdit = Boolean(automation?.id);
  const [selectedWaTemplate, setSelectedWaTemplate] = reactExports.useState(null);
  const [variableMapping, setVariableMapping] = reactExports.useState({});
  const { templates } = useGetMessageTemplates(organizationId);
  const { tiers } = useGetLoyaltyTiers(organizationId);
  const { waTemplates, waTemplatesLoading, waTemplatesError, refreshWaTemplates } = useGetTwilioWhatsAppTemplates(organizationId);
  const defaultValues = {
    name: automation?.name ?? "",
    trigger: automation?.trigger ?? "birthday",
    channel: automation?.channel ?? "email",
    template_id: automation?.template_id ?? "",
    whatsapp_content_sid: automation?.whatsapp_content_sid ?? "",
    is_active: automation?.is_active ?? true,
    days_before: automation?.trigger_config?.days_before ?? 0,
    delay_hours: automation?.trigger_config?.delay_hours ?? 24,
    hours_before: automation?.trigger_config?.hours_before ?? 24,
    inactive_days: automation?.trigger_config?.inactive_days ?? 90,
    tier_id: automation?.trigger_config?.tier_id ?? ""
  };
  const methods = useForm({ resolver: u(Schema), defaultValues });
  const {
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { isSubmitting }
  } = methods;
  const watchTrigger = watch("trigger");
  const watchChannel = watch("channel");
  reactExports.useEffect(() => {
    if (open) {
      reset(defaultValues);
      if (automation?.whatsapp_content_sid && waTemplates.length > 0) {
        const tpl = waTemplates.find((t) => t.sid === automation.whatsapp_content_sid);
        setSelectedWaTemplate(tpl ?? null);
      } else {
        setSelectedWaTemplate(null);
      }
      setVariableMapping(automation?.whatsapp_variables_map ?? {});
    }
  }, [open, automation]);
  reactExports.useEffect(() => {
    setValue("template_id", "");
    setValue("whatsapp_content_sid", "");
    setSelectedWaTemplate(null);
    setVariableMapping({});
  }, [watchChannel, setValue]);
  reactExports.useEffect(() => {
    const available = (TRIGGER_AVAILABLE_VARS[watchTrigger] ?? []).map((v) => v.key);
    setVariableMapping((prev) => {
      const next = { ...prev };
      let changed = false;
      for (const [pos, key] of Object.entries(next)) {
        if (key && !available.includes(key)) {
          next[pos] = "";
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [watchTrigger]);
  const handleWaTemplateChange = (sid) => {
    const tpl = waTemplates.find((t) => t.sid === sid);
    setSelectedWaTemplate(tpl ?? null);
    setValue("whatsapp_content_sid", sid);
    if (tpl) {
      const initial = {};
      Object.keys(tpl.variables ?? {}).forEach((pos) => {
        initial[pos] = "";
      });
      setVariableMapping(initial);
    } else {
      setVariableMapping({});
    }
  };
  const filteredTemplates = templates.filter((t) => t.channel === watchChannel);
  const configFields = TRIGGER_CONFIG_FIELDS[watchTrigger] ?? [];
  const triggerInfo = AUTOMATION_TRIGGERS.find((t) => t.value === watchTrigger);
  const availableVars = TRIGGER_AVAILABLE_VARS[watchTrigger] ?? [];
  const onSubmit = handleSubmit(async (values) => {
    try {
      if (values.channel === "whatsapp" && selectedWaTemplate) {
        const positions = Object.keys(selectedWaTemplate.variables ?? {});
        const unmapped = positions.filter((pos) => !variableMapping[pos]);
        if (unmapped.length > 0) {
          toast.error(`Please map all template variables before saving`);
          return;
        }
      }
      let trigger_config = {};
      if (watchTrigger === "birthday") trigger_config = { days_before: values.days_before };
      if (watchTrigger === "post_appointment") trigger_config = { delay_hours: values.delay_hours };
      if (watchTrigger === "appointment_reminder")
        trigger_config = { hours_before: values.hours_before };
      if (watchTrigger === "win_back") trigger_config = { inactive_days: values.inactive_days };
      if (watchTrigger === "loyalty_milestone") trigger_config = { tier_id: values.tier_id };
      const isWhatsApp2 = values.channel === "whatsapp";
      const payload = {
        name: values.name,
        trigger: values.trigger,
        channel: values.channel,
        template_id: isWhatsApp2 ? null : values.template_id,
        whatsapp_content_sid: isWhatsApp2 ? selectedWaTemplate?.sid ?? null : null,
        // User-defined mapping: {"1": "first_name", "2": "appointment_date"}
        // process-automations uses this to build ContentVariables at runtime
        whatsapp_variables_map: isWhatsApp2 ? variableMapping : null,
        is_active: values.is_active,
        trigger_config,
        organization_id: organizationId
      };
      if (isEdit) {
        await updateMessageAutomation(automation.id, payload);
        toast.success("Automation updated");
      } else {
        await createMessageAutomation(payload);
        toast.success("Automation created");
      }
      onClose();
    } catch (err) {
      toast.error(err.message);
    }
  });
  const isWhatsApp = watchChannel === "whatsapp";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, fullWidth: true, maxWidth: "sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Automation" : "New Automation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, sx: { pt: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "name", label: "Automation Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "trigger", label: "Trigger", children: AUTOMATION_TRIGGERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: t.value, children: t.label }, t.value)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "channel", label: "Channel", children: CHANNELS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: c.value, children: c.label }, c.value)) })
        ] }),
        triggerInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", icon: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: triggerInfo.description }) }),
        configFields.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: field.name,
            label: field.label,
            type: "number",
            inputProps: { min: 0 }
          },
          field.name
        )),
        watchTrigger === "loyalty_milestone" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "tier_id", label: "Loyalty Tier", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "— Select a tier —" }),
          tiers.map((tier) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: tier.id, children: [
            tier.name,
            " (",
            tier.min_points,
            " pts)"
          ] }, tier.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        isWhatsApp ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Field.Select,
              {
                name: "whatsapp_content_sid",
                label: "WhatsApp Template",
                disabled: waTemplatesLoading,
                onChange: (e) => handleWaTemplateChange(e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", disabled: true, children: waTemplatesLoading ? "Loading…" : "— Select an approved template —" }),
                  waTemplatesError ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { disabled: true, children: "Failed to load Twilio templates" }) : waTemplates.length === 0 && !waTemplatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { disabled: true, children: "No approved WhatsApp templates found" }) : waTemplates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: t.sid, children: t.name }, t.sid))
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                title: "Refresh templates",
                onClick: () => refreshWaTemplates(),
                disabled: waTemplatesLoading,
                children: waTemplatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:refresh-bold", width: 18 })
              }
            )
          ] }),
          selectedWaTemplate && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", icon: false, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Preview:" }),
              " ",
              selectedWaTemplate.body.substring(0, 200),
              selectedWaTemplate.body.length > 200 ? "…" : ""
            ] }) }),
            Object.keys(selectedWaTemplate.variables ?? {}).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Map template variables" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                  "Choose which app value to send for each",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "code", sx: { fontSize: 11 }, children: "{{N}}" }),
                  " ",
                  "placeholder in the template."
                ] })
              ] }),
              Object.entries(selectedWaTemplate.variables).map(([pos, twilioHint]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Box,
                {
                  sx: {
                    display: "grid",
                    gridTemplateColumns: "auto 1fr 2fr",
                    alignItems: "center",
                    gap: 1.5
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Box,
                      {
                        sx: {
                          fontFamily: "monospace",
                          fontSize: 12,
                          fontWeight: 700,
                          bgcolor: "action.selected",
                          px: 1,
                          py: 0.25,
                          borderRadius: 1,
                          whiteSpace: "nowrap"
                        },
                        children: `{{${pos}}}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: twilioHint || `Variable ${pos}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", fullWidth: true, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "App variable" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Select,
                        {
                          label: "App variable",
                          value: variableMapping[pos] ?? "",
                          onChange: (e) => setVariableMapping((prev) => ({
                            ...prev,
                            [pos]: e.target.value
                          })),
                          error: !variableMapping[pos],
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "— Select —" }),
                            availableVars.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: v.key, children: v.label }, v.key))
                          ]
                        }
                      )
                    ] })
                  ]
                },
                pos
              )),
              Object.values(variableMapping).some((v) => !v) && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "warning", icon: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: "All variables must be mapped before the automation can be saved." }) })
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "template_id", label: "Message Template", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "— Select a template —" }),
            filteredTemplates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: t.id, children: t.name }, t.id))
          ] }),
          filteredTemplates.length === 0 && watchChannel && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "warning", children: [
            "No active ",
            watchChannel,
            " templates found. Create a template first."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Switch, { name: "is_active", label: "Active" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, variant: "outlined", color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", loading: isSubmitting, children: isEdit ? "Save Changes" : "Create Automation" })
      ] })
    ] })
  ] });
}
export {
  AutomationDialog as A,
  CHANNEL_LABELS as C,
  QuickSendDialog as Q,
  STATUS_COLORS as S,
  TemplateDialog as T,
  CHANNEL_COLORS as a,
  useGetMessageTemplates as b,
  useGetMessageCampaigns as c,
  useGetMessageAutomations as d,
  deleteMessageTemplate as e,
  deleteMessageCampaign as f,
  deleteMessageAutomation as g,
  CampaignDialog as h,
  updateMessageAutomation as i,
  AUTOMATION_TRIGGERS as j,
  useGetClientMessageLogs as k,
  launchCampaign as l,
  useGetMessageLogs as u
};
