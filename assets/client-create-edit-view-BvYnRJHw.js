import { r as reactExports, j as jsxRuntimeExports, b as CircularProgress, a2 as Chip, al as Avatar, c as Typography, bo as useRouter, av as useAuthContext, a6 as useUserBranches, t as toast, y as Card, S as Stack, a5 as alpha, B as Box, M as MenuItem, ap as Tabs, aq as Tab, a as Iconify, K as Divider, d as Button, I as IconButton, T as Tooltip, a4 as DashboardContent, ao as CustomBreadcrumbs, a3 as paths } from "./index-B08HRm4A.js";
import { b as useClientsByIds, u as useClientAutocomplete, c as updateClient, d as createClient, a as useClient } from "./client-service-swr-DnF01Wop.js";
import { u as useFormContext, C as Controller, a as useForm, b as u, d as useWatch, F as Form, e as useController } from "./form-provider-u_wAFv-h.js";
import { h as useGetServices } from "./services-UhlA7T7c.js";
import { a as applyBonusPoints } from "./loyalty-service-D710t09P.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { L as LOCATION_TYPE_ICON } from "./render-location-type-B-TZb61z.js";
import { C as ClientAutocomplete } from "./client-autocomplete-C_9PlkEm.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { i as isValidPhoneNumber } from "./index-C4JOln-R.js";
import { s as schemaUtils } from "./schema-utils-CG9_JlGr.js";
import { P as POROSITY_CONFIG, S as SCALP_CONFIG, D as DENSITY_CONFIG, L as LENGTH_SCALE, T as TEXTURE_OPTIONS, m as maritalStatusOptions, g as genderOptions, a as LENGTH_LABELS, c as clientTagsOptions, r as referralOptions, H as HAIR_COLOR_MAP, b as LIGHT_COLORS } from "./hair-colors-CG3KoND_.js";
import { o as object, a as array, s as string, b as boolean, l as literal, n as number, i as _enum } from "./schemas-BVeYYbTr.js";
import { T as ToggleButtonGroup } from "./ToggleButtonGroup-CJXz0-w5.js";
import { b as ToggleButton } from "./ToggleButton-D4MfeHtt.js";
function ClientMultiAutocomplete({
  name,
  label,
  helperText,
  placeholder = "Search clients...",
  limit = 10,
  excludeId,
  ...other
}) {
  const { control, setValue, watch } = useFormContext();
  const [inputValue, setInputValue] = reactExports.useState("");
  const rawCurrentIds = watch(name) ?? [];
  const currentIds = reactExports.useMemo(() => rawCurrentIds, [JSON.stringify(rawCurrentIds)]);
  const { clients: rawResolvedClients, clientsLoading: resolving } = useClientsByIds(
    currentIds.length ? currentIds : null
  );
  const resolvedClients = reactExports.useMemo(() => rawResolvedClients, [JSON.stringify(rawResolvedClients)]);
  const [selectedClients, setSelectedClients] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (resolvedClients.length) {
      setSelectedClients((prev) => {
        const existingIds = new Set(prev.map((c) => c.id));
        const merged = [...prev];
        resolvedClients.forEach((c) => {
          if (!existingIds.has(c.id)) merged.push(c);
        });
        const idSet = new Set(currentIds);
        return merged.filter((c) => idSet.has(c.id));
      });
    } else if (!currentIds.length) {
      setSelectedClients([]);
    }
  }, [resolvedClients]);
  const { clients: searchResults, clientsLoading } = useClientAutocomplete(inputValue, limit);
  const options = reactExports.useMemo(() => {
    const selectedIds = new Set(selectedClients.map((c) => c.id));
    return searchResults.filter((c) => !selectedIds.has(c.id) && c.id !== excludeId);
  }, [searchResults, selectedClients, excludeId]);
  const getOptionLabel = (option) => {
    if (!option) return "";
    return `${option.first_name} ${option.last_name}${option.preferred_name ? ` (${option.preferred_name})` : ""}`;
  };
  const renderOption = (props, option) => {
    const { key, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { sx: { width: 28, height: 28, fontSize: 12, mr: 1.5 }, children: [
        option.first_name?.[0],
        option.last_name?.[0]
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, lineHeight: 1.3, children: [
          option.first_name,
          " ",
          option.last_name,
          option.preferred_name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Typography,
            {
              component: "span",
              variant: "caption",
              color: "text.secondary",
              sx: { ml: 0.5 },
              children: [
                "(",
                option.preferred_name,
                ")"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", children: [option.phone_primary, option.email].filter(Boolean).join(" · ") || "No contact info" })
      ] })
    ] }, key);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name,
      control,
      render: ({ fieldState: { error } }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Autocomplete,
        {
          multiple: true,
          value: selectedClients,
          options,
          inputValue,
          getOptionLabel,
          isOptionEqualToValue: (a, b) => a?.id === b?.id,
          renderOption,
          filterOptions: (x) => x,
          loading: clientsLoading || resolving,
          onChange: (_, newValue) => {
            setSelectedClients(newValue);
            setValue(
              name,
              newValue.map((c) => c.id),
              { shouldValidate: true }
            );
          },
          onInputChange: (_, newInputValue, reason) => {
            if (reason !== "reset") setInputValue(newInputValue);
          },
          renderTags: (tagValue, getTagProps) => tagValue.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                avatar: /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { sx: { fontSize: 11 }, children: [
                  option.first_name?.[0],
                  option.last_name?.[0]
                ] }),
                label: `${option.first_name} ${option.last_name}`,
                size: "small",
                ...tagProps
              },
              key
            );
          }),
          renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              ...params,
              label,
              placeholder: selectedClients.length ? "" : placeholder,
              error: !!error,
              helperText: error?.message ?? helperText,
              slotProps: {
                input: {
                  ...params.InputProps,
                  endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    (clientsLoading || resolving) && /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { color: "inherit", size: 20 }),
                    params.InputProps.endAdornment
                  ] })
                }
              }
            }
          ),
          ...other
        }
      )
    }
  );
}
const UserCreateSchema = object({
  // Basic Information
  profile_photo_url: schemaUtils.file().optional().nullable(),
  client_number: string().optional().nullable(),
  status: _enum(["active", "inactive", "archived"]).default("active"),
  first_name: string().min(1, { message: "First name is required!" }),
  last_name: string().min(1, { message: "Last name is required!" }),
  preferred_name: string().optional().nullable(),
  branch_id: string().uuid(),
  additional_branch_ids: array(string().uuid()).optional().nullable(),
  date_of_birth: string().optional().nullable(),
  gender: _enum(genderOptions.map((option) => option.value)).optional().nullable(),
  marital_status: _enum(maritalStatusOptions.map((option) => option.value)).optional().nullable(),
  occupation: string().optional().nullable(),
  hobbies_interests: string().optional().nullable(),
  client_importance: number().min(0).max(5).optional().default(0),
  // Contact Information
  email: schemaUtils.email().optional().or(literal("")).nullable(),
  phone_primary: schemaUtils.phoneNumber({ isValid: isValidPhoneNumber }).optional().nullable(),
  phone_secondary: schemaUtils.phoneNumber({ isValid: isValidPhoneNumber }).optional().nullable(),
  instagram_handle: string().optional().nullable(),
  facebook_handle: string().optional().nullable(),
  tiktok_handle: string().optional().nullable(),
  twitter_handle: string().optional().nullable(),
  // Address Information
  address_line1: string().optional().nullable(),
  address_line2: string().optional().nullable(),
  city: string().optional().nullable(),
  state: string().optional().nullable(),
  postal_code: string().optional().nullable(),
  country: string().optional().nullable(),
  // Emergency Contact
  emergency_contact_name: string().optional().nullable(),
  emergency_contact_phone: schemaUtils.phoneNumber({ isValid: isValidPhoneNumber }).optional().nullable(),
  emergency_contact_relationship: _enum(["parent", "spouse", "child", "sibling", "friend", "other"]).optional().nullable(),
  // Hair Profile
  natural_hair_color: string().optional().nullable(),
  current_hair_color: string().optional().nullable(),
  hair_texture: _enum(TEXTURE_OPTIONS.map((option) => option.key)).optional().nullable(),
  hair_length: _enum(LENGTH_SCALE).optional().nullable(),
  hair_density: _enum(Object.keys(DENSITY_CONFIG)).optional().nullable(),
  scalp_condition: _enum(Object.keys(SCALP_CONFIG)).optional().nullable(),
  hair_porosity: _enum(Object.keys(POROSITY_CONFIG)).optional().nullable(),
  color_formula_notes: string().optional().nullable(),
  // Preferences
  preferred_appointment_days: string().optional().nullable(),
  preferred_appointment_time: string().optional().nullable(),
  music_preference: string().optional().nullable(),
  beverage_preference: string().optional().nullable(),
  favorite_services: array(string()).optional().nullable(),
  style_preferences: string().optional().nullable(),
  preferred_contact_methods: array(_enum(["email", "phone", "sms", "whatsapp"])).optional().nullable(),
  appointment_reminder_preference: string().optional().nullable(),
  marketing_opt_in: boolean().default(true),
  sms_opt_in: boolean().default(false),
  // Health & Allergies
  allergies: string().optional().nullable(),
  sensitivities: string().optional().nullable(),
  medical_conditions: string().optional().nullable(),
  medications: string().optional().nullable(),
  pregnancy_nursing: boolean().default(false),
  // Notes
  personality_notes: string().optional().nullable(),
  special_occasions: string().optional().nullable(),
  general_notes: string().optional().nullable(),
  private_staff_notes: string().optional().nullable(),
  // Treatment History
  previous_color_treatments: string().optional().nullable(),
  previous_chemical_treatments: string().optional().nullable(),
  last_color_date: string().optional().nullable(),
  last_treatment_date: string().optional().nullable(),
  // Service History
  service_history_summary: string().optional().nullable(),
  first_visit_date: string().optional().nullable(),
  last_visit_date: string().optional().nullable(),
  total_visits: number().optional().nullable(),
  visit_frequency: string().optional().nullable(),
  missed_appointments: number().optional().nullable(),
  cancelled_appointments: number().optional().nullable(),
  average_tip_percentage: number().optional().nullable(),
  // Product History
  product_history: string().optional().nullable(),
  refill_cycles: string().optional().nullable(),
  // Engagement & Marketing
  campaign_responses: string().optional().nullable(),
  event_participation: string().optional().nullable(),
  reviews_feedback: string().optional().nullable(),
  // Financial Information
  payment_preference: _enum(["cash", "card", "online"]).optional().nullable(),
  loyalty_points: number().optional().nullable(),
  total_spent: number().optional().nullable(),
  average_service_cost: number().optional().nullable(),
  outstanding_balances: number().optional().nullable(),
  deposits: number().optional().nullable(),
  gift_card_history: string().optional().nullable(),
  voucher_usage: string().optional().nullable(),
  // Technical/CRM Notes
  preferred_language: string().optional().nullable(),
  client_tags: array(string()).optional().nullable(),
  follow_up_reminders: string().optional().nullable(),
  // Referral Info
  referral_source: string().optional().nullable(),
  referred_by_client_id: string().optional().nullable(),
  // Minor / Guardian
  is_minor: boolean().default(false),
  guardian_client_id: string().uuid().optional().nullable(),
  guardian_name: string().optional().nullable(),
  guardian_phone: string().optional().nullable(),
  guardian_email: schemaUtils.email().optional().or(literal("")).nullable(),
  guardian_relationship: string().optional().nullable(),
  // Family & Relationships
  typically_brings_children: boolean().default(false),
  relative_client_ids: array(string().uuid()).optional().nullable()
});
function HairColorPicker({ name, label }) {
  const { field } = useController({ name });
  const selected = field.value?.toLowerCase().trim() ?? "";
  const matchedKey = Object.keys(HAIR_COLOR_MAP).find(
    (k) => selected === k || selected.includes(k) || k.includes(selected)
  );
  const selectedHex = matchedKey ? HAIR_COLOR_MAP[matchedKey] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        p: 1.5,
        borderRadius: 1,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.02),
        transition: "border-color 0.2s",
        "&:hover": { borderColor: "text.primary" }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              variant: "caption",
              sx: { color: "text.secondary", fontWeight: 500, fontSize: "0.75rem" },
              children: label
            }
          ),
          field.value && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: selectedHex ?? "#bdbdbd",
                  border: "2px solid",
                  borderColor: LIGHT_COLORS.has(matchedKey) ? "divider" : "transparent",
                  boxShadow: `0 1px 4px ${selectedHex ?? "#bdbdbd"}88`,
                  flexShrink: 0
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                sx: { fontWeight: 700, color: "text.primary", textTransform: "capitalize" },
                children: field.value
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                onClick: () => field.onChange(null),
                sx: { p: 0.25, color: "text.disabled" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold", width: 14 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", flexWrap: "wrap", gap: 0.75 }, children: Object.entries(HAIR_COLOR_MAP).map(([colorName, hex]) => {
          const isSelected = matchedKey === colorName;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: colorName, placement: "top", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              onClick: () => field.onChange(colorName),
              sx: {
                width: 26,
                height: 26,
                borderRadius: "50%",
                bgcolor: hex,
                cursor: "pointer",
                border: "2.5px solid",
                borderColor: isSelected ? "primary.main" : LIGHT_COLORS.has(colorName) ? "divider" : "transparent",
                boxShadow: isSelected ? `0 0 0 2px white, 0 0 0 4px ${hex}` : `0 1px 3px ${hex}66`,
                transform: isSelected ? "scale(1.25)" : "scale(1)",
                transition: "all 0.15s ease",
                "&:hover": {
                  transform: isSelected ? "scale(1.25)" : "scale(1.18)",
                  boxShadow: `0 2px 8px ${hex}99`
                }
              }
            }
          ) }, colorName);
        }) })
      ]
    }
  );
}
function BranchChips({ methods, branches }) {
  const primaryId = useWatch({ control: methods.control, name: "branch_id" });
  const additionalIds = useWatch({ control: methods.control, name: "additional_branch_ids" }) ?? [];
  const primaryBranch = branches.find((b) => b.id === primaryId);
  const additionalBranches = branches.filter((b) => additionalIds.includes(b.id));
  const maxAdditional = 4;
  const displayedAdditional = additionalBranches.slice(0, maxAdditional);
  const remaining = additionalBranches.length - maxAdditional;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    primaryBranch && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Chip,
      {
        size: "small",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Iconify,
          {
            icon: LOCATION_TYPE_ICON[primaryBranch.location_type] ?? "solar:buildings-2-bold-duotone",
            width: 14
          }
        ),
        label: primaryBranch.name,
        variant: "outlined",
        color: "primary"
      }
    ),
    displayedAdditional.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Chip,
      {
        size: "small",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Iconify,
          {
            icon: LOCATION_TYPE_ICON[b.location_type] ?? "solar:buildings-2-bold-duotone",
            width: 14
          }
        ),
        label: b.name,
        variant: "outlined"
      },
      b.id
    )),
    remaining > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", label: `+${remaining} more`, variant: "outlined" }, "more")
  ] });
}
function AdditionalBranchesSelect({ branches, methods }) {
  const primaryId = useWatch({ control: methods.control, name: "branch_id" });
  const additionalIds = useWatch({ control: methods.control, name: "additional_branch_ids" }) ?? [];
  const filteredOptions = branches.filter((b) => b.id !== primaryId).map((b) => ({ value: b.id, label: b.name }));
  const safeValue = additionalIds.filter((id) => id !== primaryId);
  if (safeValue.length !== additionalIds.length) {
    methods.setValue("additional_branch_ids", safeValue);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Field.MultiSelect,
    {
      name: "additional_branch_ids",
      label: "Additional Branches",
      options: filteredOptions,
      size: "small",
      sx: { width: "100%" }
    }
  );
}
function ClientCreateEditForm({ currentClient }) {
  const router = useRouter();
  const { user } = useAuthContext();
  const {
    branchesOnly: branches,
    primaryBranch,
    hasMultipleBranchesOnly: hasMultipleBranches
  } = useUserBranches();
  const { services } = useGetServices({ pageSize: 200, filters: { isActive: true } });
  const favoriteServicesOptions = services?.map((service) => ({
    value: service.name,
    label: service.name
  })) || [];
  const defaultValues = {
    profile_photo_url: null,
    client_number: null,
    status: "active",
    first_name: "",
    last_name: "",
    preferred_name: null,
    date_of_birth: null,
    branch_id: primaryBranch?.id || null,
    additional_branch_ids: [],
    gender: "prefer_not_to_say",
    marital_status: "prefer_not_to_say",
    occupation: null,
    hobbies_interests: null,
    email: null,
    phone_primary: null,
    phone_secondary: null,
    instagram_handle: null,
    facebook_handle: null,
    tiktok_handle: null,
    twitter_handle: null,
    address_line1: null,
    address_line2: null,
    city: null,
    state: null,
    postal_code: null,
    country: "Lebanon",
    emergency_contact_name: null,
    emergency_contact_phone: null,
    emergency_contact_relationship: null,
    natural_hair_color: null,
    current_hair_color: null,
    hair_texture: null,
    hair_length: null,
    hair_density: null,
    scalp_condition: null,
    hair_porosity: null,
    color_formula_notes: null,
    preferred_appointment_days: null,
    preferred_appointment_time: null,
    music_preference: null,
    beverage_preference: null,
    favorite_services: [],
    style_preferences: null,
    preferred_contact_methods: [],
    appointment_reminder_preference: null,
    marketing_opt_in: true,
    sms_opt_in: false,
    allergies: null,
    sensitivities: null,
    medical_conditions: null,
    medications: null,
    pregnancy_nursing: false,
    personality_notes: null,
    special_occasions: null,
    general_notes: null,
    private_staff_notes: null,
    previous_color_treatments: null,
    previous_chemical_treatments: null,
    last_color_date: null,
    last_treatment_date: null,
    service_history_summary: null,
    first_visit_date: null,
    last_visit_date: null,
    total_visits: null,
    visit_frequency: null,
    missed_appointments: null,
    cancelled_appointments: null,
    average_tip_percentage: null,
    product_history: null,
    refill_cycles: null,
    campaign_responses: null,
    event_participation: null,
    reviews_feedback: null,
    payment_preference: null,
    loyalty_points: null,
    total_spent: null,
    average_service_cost: null,
    outstanding_balances: null,
    deposits: null,
    gift_card_history: null,
    voucher_usage: null,
    preferred_language: null,
    client_tags: [],
    follow_up_reminders: null,
    referral_source: null,
    referred_by_client_id: null,
    is_minor: false,
    guardian_client_id: null,
    guardian_name: null,
    guardian_phone: null,
    guardian_email: null,
    guardian_relationship: null,
    typically_brings_children: false,
    relative_client_ids: [],
    client_importance: 0
  };
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(UserCreateSchema),
    defaultValues,
    values: currentClient
  });
  const {
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting, dirtyFields }
  } = methods;
  const awardReferralBonus = (referredByClientId, referenceId) => {
    const organizationId = primaryBranch?.organization_id;
    if (!organizationId) return;
    applyBonusPoints({
      organizationId,
      clientId: referredByClientId,
      bonusType: "referral",
      referenceId,
      createdBy: user?.id ?? null
    }).catch(() => {
    });
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      data.additional_branch_ids = (data.additional_branch_ids ?? []).filter(
        (id) => id !== data.branch_id
      );
      let clientError;
      if (currentClient) {
        const changedData = Object.fromEntries(
          Object.keys(dirtyFields).map((key) => [key, data[key]])
        );
        changedData.additional_branch_ids = data.additional_branch_ids;
        changedData.updated_at = (/* @__PURE__ */ new Date()).toISOString();
        const { error } = await updateClient(currentClient.id, changedData);
        clientError = error;
        const isNewReferral = !currentClient.referred_by_client_id && !!data.referred_by_client_id;
        if (!clientError && isNewReferral) {
          awardReferralBonus(data.referred_by_client_id, currentClient.id);
        }
      } else {
        const { error, data: newClient } = await createClient(data);
        clientError = error;
        if (!clientError && data.referred_by_client_id) {
          awardReferralBonus(data.referred_by_client_id, newClient?.id ?? null);
        }
      }
      if (clientError) throw clientError;
      reset();
      toast.success(currentClient ? "Update success!" : "Create success!");
      router.back();
    } catch (error) {
      toast.error(currentClient ? "Update failed!" : "Create failed!");
      console.error(error);
    }
  });
  const [activeTab, setActiveTab] = reactExports.useState(0);
  const [guardianMode, setGuardianMode] = reactExports.useState("select");
  const firstName = useWatch({ control: methods.control, name: "first_name" });
  const lastName = useWatch({ control: methods.control, name: "last_name" });
  const isMinor = useWatch({ control: methods.control, name: "is_minor" });
  const prevIsMinorRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (prevIsMinorRef.current === null) {
      prevIsMinorRef.current = isMinor;
      return;
    }
    if (!isMinor && prevIsMinorRef.current !== isMinor) {
      setValue("guardian_client_id", null);
      setValue("guardian_name", null);
      setValue("guardian_phone", null);
      setValue("guardian_email", null);
      setValue("guardian_relationship", null);
    }
    prevIsMinorRef.current = isMinor;
  }, [isMinor, setValue]);
  const prevGuardianModeRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (prevGuardianModeRef.current === null) {
      prevGuardianModeRef.current = guardianMode;
      return;
    }
    if (guardianMode === prevGuardianModeRef.current) return;
    if (guardianMode === "select") {
      setValue("guardian_name", null);
      setValue("guardian_phone", null);
      setValue("guardian_email", null);
      setValue("guardian_relationship", null);
    } else {
      setValue("guardian_client_id", null);
    }
    prevGuardianModeRef.current = guardianMode;
  }, [guardianMode, setValue]);
  const displayName = [firstName, lastName].filter(Boolean).join(" ") || "New Client";
  const initials = [firstName?.[0], lastName?.[0]].filter(Boolean).join("").toUpperCase() || "?";
  const TABS = [
    { label: "Personal", icon: "solar:user-id-bold-duotone" },
    { label: "Contact", icon: "solar:phone-bold-duotone" },
    { label: "Hair Profile", icon: "solar:magic-stick-bold-duotone" },
    { label: "Preferences", icon: "solar:heart-bold-duotone" },
    { label: "CRM & Notes", icon: "solar:notes-bold-duotone" }
  ];
  const FormSection = ({ title, icon, children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 4 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { mb: 2.5 }, children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            width: 32,
            height: 32,
            borderRadius: 1,
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 18, color: "primary.main" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 600, children: title })
    ] }),
    children
  ] });
  const fieldGrid = {
    rowGap: 2.5,
    columnGap: 2,
    display: "grid",
    gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        sx: {
          mb: 3,
          p: 3
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              direction: { xs: "column", sm: "row" },
              spacing: 3,
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2.5, alignItems: "center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Avatar,
                    {
                      sx: {
                        width: 72,
                        height: 72,
                        fontSize: 24,
                        fontWeight: 700,
                        bgcolor: "primary.main",
                        border: "3px solid",
                        color: (theme) => theme.palette.background.paper,
                        borderColor: (theme) => alpha(theme.palette.primary.main, 0.3)
                      },
                      children: initials
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        variant: "h5",
                        fontWeight: 700,
                        sx: { lineHeight: 1.2, textTransform: "capitalize" },
                        children: displayName
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, sx: { mt: 0.75 }, flexWrap: "wrap", gap: 0.5, children: [
                      currentClient && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Chip,
                        {
                          size: "small",
                          label: currentClient.status || "active",
                          color: currentClient.status === "active" ? "success" : currentClient.status === "inactive" ? "warning" : "default",
                          variant: "soft"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BranchChips, { methods, branches: branches ?? [] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Box,
                  {
                    sx: {
                      ...fieldGrid,
                      gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                      flex: 1,
                      maxWidth: { sm: 540 }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "first_name", label: "First Name", size: "small" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "last_name", label: "Last Name", size: "small" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "preferred_name", label: "Preferred Name", size: "small" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { ...fieldGrid, gridTemplateColumns: "repeat(2, 1fr)", mt: 2.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Select,
              {
                name: "branch_id",
                label: "Primary Branch",
                size: "small",
                disabled: !hasMultipleBranches,
                children: branches?.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: branch.id, children: branch.name }, branch.id))
              }
            ),
            currentClient ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "status", label: "Status", size: "small", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "active", children: "Active" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "inactive", children: "Inactive" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "archived", children: "Archived" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {})
          ] }),
          hasMultipleBranches && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mt: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalBranchesSelect, { branches, methods }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { mb: 0, overflow: "visible" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tabs,
        {
          value: activeTab,
          onChange: (_, val) => setActiveTab(val),
          variant: "scrollable",
          scrollButtons: "auto",
          sx: {
            px: 2,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            "& .MuiTab-root": { minHeight: 56, gap: 0.75, fontWeight: 600 }
          },
          children: TABS.map((tab, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tab,
            {
              value: i,
              label: tab.label,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: tab.icon, width: 20 }),
              iconPosition: "start"
            },
            tab.label
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 3 }, children: [
        activeTab === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Personal Details", icon: "solar:user-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "gender", label: "Gender", children: genderOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "date_of_birth", label: "Date of Birth" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "marital_status", label: "Marital Status", children: maritalStatusOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "occupation", label: "Occupation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "hobbies_interests",
                label: "Hobbies & Interests",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Client Importance", icon: "solar:star-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Rating, { name: "client_importance", label: "Client Importance", max: 5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Minor & Guardian", icon: "solar:shield-user-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "is_minor", label: "This client is a minor / child" }),
            isMinor && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, sx: { mb: 2 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Guardian info:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  ToggleButtonGroup,
                  {
                    value: guardianMode,
                    exclusive: true,
                    size: "small",
                    onChange: (_, val) => {
                      if (val) setGuardianMode(val);
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleButton, { value: "select", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Iconify,
                          {
                            icon: "solar:users-group-rounded-bold-duotone",
                            width: 16,
                            sx: { mr: 0.75 }
                          }
                        ),
                        "Existing Client"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleButton, { value: "manual", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold-duotone", width: 16, sx: { mr: 0.75 } }),
                        "Enter Manually"
                      ] })
                    ]
                  }
                )
              ] }),
              guardianMode === "select" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                ClientAutocomplete,
                {
                  name: "guardian_client_id",
                  label: "Guardian (select client)",
                  excludeId: currentClient?.id
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Box,
                {
                  sx: {
                    ...fieldGrid,
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "guardian_name", label: "Guardian Full Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Field.Phone,
                      {
                        name: "guardian_phone",
                        label: "Guardian Phone",
                        defaultCountry: "LB"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "guardian_email", label: "Guardian Email" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "guardian_relationship", label: "Relationship", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "mother", children: "Mother" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "father", children: "Father" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "grandparent", children: "Grandparent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sibling", children: "Sibling" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "aunt_uncle", children: "Aunt / Uncle" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "legal_guardian", children: "Legal Guardian" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "other", children: "Other" })
                    ] })
                  ]
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Family & Relationships", icon: "solar:people-nearby-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Checkbox,
              {
                name: "typically_brings_children",
                label: "This client typically brings children to appointments"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ClientMultiAutocomplete,
              {
                name: "relative_client_ids",
                label: "Family / Relatives (link other clients)",
                helperText: "Link family members so staff can see related clients at a glance",
                excludeId: currentClient?.id
              }
            )
          ] }) })
        ] }),
        activeTab === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Phone & Email", icon: "solar:phone-calling-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "email", label: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Phone, { name: "phone_primary", label: "Primary Phone", defaultCountry: "LB" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Phone, { name: "phone_secondary", label: "Secondary Phone", defaultCountry: "LB" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Social Media", icon: "solar:share-circle-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "instagram_handle",
                label: "Instagram",
                InputProps: {
                  startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:instagram", width: 18, sx: { mr: 1 } })
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "facebook_handle",
                label: "Facebook",
                InputProps: {
                  startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:facebook", width: 18, sx: { mr: 1 } })
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "tiktok_handle",
                label: "TikTok",
                InputProps: {
                  startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "ic:baseline-tiktok", width: 18, sx: { mr: 1 } })
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "twitter_handle",
                label: "Twitter / X",
                InputProps: {
                  startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mdi:twitter", width: 18, sx: { mr: 1 } })
                }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Address", icon: "solar:map-point-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "address_line1",
                label: "Address Line 1",
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "address_line2",
                label: "Address Line 2",
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "city", label: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "state", label: "State / Region" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "postal_code", label: "Postal Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.CountrySelect, { name: "country", label: "Country" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Emergency Contact", icon: "solar:alarm-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              sx: {
                ...fieldGrid,
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "emergency_contact_name", label: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Phone, { name: "emergency_contact_phone", label: "Phone", defaultCountry: "LB" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "emergency_contact_relationship", label: "Relationship", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "parent", children: "Parent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "spouse", children: "Spouse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "child", children: "Child" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sibling", children: "Sibling" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "friend", children: "Friend" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "other", children: "Other" })
                ] })
              ]
            }
          ) })
        ] }),
        activeTab === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Hair Characteristics", icon: "solar:magic-stick-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HairColorPicker, { name: "natural_hair_color", label: "Natural Hair Color" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(HairColorPicker, { name: "current_hair_color", label: "Current Hair Color" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "hair_texture", label: "Hair Texture", children: TEXTURE_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.key, children: option.label }, option.key)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "hair_length", label: "Hair Length", children: LENGTH_SCALE.map((length) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: length, children: LENGTH_LABELS[length] || length }, length)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "hair_density", label: "Hair Density", children: Object.entries(DENSITY_CONFIG).map(([key, option]) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: key, children: option.label }, key)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "scalp_condition", label: "Scalp Condition", children: Object.entries(SCALP_CONFIG).map(([key, option]) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: key, children: option.label }, key)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "hair_porosity", label: "Hair Porosity", children: Object.entries(POROSITY_CONFIG).map(([key, option]) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: key, children: option.label }, key)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "color_formula_notes",
                label: "Color Formula Notes",
                multiline: true,
                rows: 3,
                sx: { gridColumn: "1 / -1" }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Treatment History", icon: "solar:history-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "previous_color_treatments",
                label: "Previous Color Treatments",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "previous_chemical_treatments",
                label: "Previous Chemical Treatments",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "last_color_date", label: "Last Color Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "last_treatment_date", label: "Last Treatment Date" })
          ] }) })
        ] }),
        activeTab === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Appointment Preferences", icon: "solar:calendar-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "preferred_appointment_days", label: "Preferred Days" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "preferred_appointment_time", label: "Preferred Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "appointment_reminder_preference", label: "Reminder Preference" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.MultiSelect,
              {
                name: "preferred_contact_methods",
                label: "Preferred Contact Method",
                multiple: true,
                options: [
                  { value: "email", label: "Email" },
                  { value: "phone", label: "Phone" },
                  { value: "sms", label: "SMS" },
                  { value: "whatsapp", label: "WhatsApp" }
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Lifestyle & In-Salon", icon: "solar:music-note-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "music_preference", label: "Music Preference" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "beverage_preference", label: "Beverage Preference" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.MultiSelect,
              {
                name: "favorite_services",
                label: "Favorite Services",
                options: favoriteServicesOptions,
                freeSolo: true,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "style_preferences",
                label: "Style Preferences",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Marketing & Communications", icon: "solar:bell-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 3, sx: { mb: 2 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "marketing_opt_in", label: "Marketing Opt-in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "sms_opt_in", label: "SMS Opt-in" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Health & Medical", icon: "solar:health-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "allergies",
                label: "Allergies",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "sensitivities",
                label: "Sensitivities",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "medical_conditions",
                label: "Medical Conditions",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "medications",
                label: "Medications",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "pregnancy_nursing", label: "Currently Pregnant or Nursing" })
          ] }) })
        ] }),
        activeTab === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Client Notes", icon: "solar:notes-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "general_notes",
                label: "General Notes",
                multiline: true,
                rows: 3,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "personality_notes",
                label: "Personality Notes",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "special_occasions",
                label: "Special Occasions",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "private_staff_notes",
                label: "Private Staff Notes",
                multiline: true,
                rows: 3,
                sx: { gridColumn: "1 / -1" }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Tags & Language", icon: "solar:tag-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "preferred_language", label: "Preferred Language" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "follow_up_reminders", label: "Follow-up Reminders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.MultiSelect,
              {
                name: "client_tags",
                label: "Client Tags",
                options: clientTagsOptions,
                freeSolo: true,
                sx: { gridColumn: "1 / -1" }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Engagement & Marketing", icon: "solar:chart-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "campaign_responses",
                label: "Campaign Responses",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "event_participation",
                label: "Event Participation",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field.Text,
              {
                name: "reviews_feedback",
                label: "Reviews & Feedback",
                multiline: true,
                rows: 2,
                sx: { gridColumn: "1 / -1" }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Financial", icon: "solar:wallet-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Field.Select, { name: "payment_preference", label: "Payment Preference", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "cash", children: "Cash" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "card", children: "Card" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "online", children: "Online" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "loyalty_points", label: "Loyalty Points" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 3 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, { title: "Referral", icon: "solar:users-group-two-rounded-bold-duotone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: fieldGrid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "referral_source", label: "How did they find us?", children: referralOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClientAutocomplete, { name: "referred_by_client_id", label: "Referred By (Client)" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          position: "fixed",
          bottom: 20,
          right: 24,
          zIndex: 1200
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            variant: "contained",
            size: "large",
            loading: isSubmitting,
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:diskette-bold-duotone" }),
            sx: { borderRadius: 2, px: 3, boxShadow: 6 },
            children: !currentClient ? "Create Client" : "Save Changes"
          }
        )
      }
    )
  ] });
}
function ClientCreateEditView({ clientId }) {
  const { client: currentClient } = useClient(clientId);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: currentClient ? "Edit Client" : "New Client",
        backHref: paths.dashboard.clients.root,
        links: [
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Clients", href: paths.dashboard.clients.root },
          {
            name: currentClient ? `${currentClient.first_name} ${currentClient.last_name}` : "New"
          }
        ],
        sx: { mb: { xs: 3, md: 5 } }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientCreateEditForm, { currentClient })
  ] });
}
export {
  ClientCreateEditView as C
};
