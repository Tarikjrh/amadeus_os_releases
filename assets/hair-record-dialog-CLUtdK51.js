import { r as reactExports, s as supabase, u as useSWR, m as mutate, j as jsxRuntimeExports, S as Stack, a as Iconify, c as Typography, M as MenuItem, T as Tooltip, I as IconButton, ax as Alert, an as fDate, d as Button, B as Box, K as Divider, bA as Collapse, a2 as Chip } from "./index-B08HRm4A.js";
import { o } from "./index-Di_Bgabu.js";
import { u as useFormContext, c as useFieldArray, d as useWatch, a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import "./styles-Ddj8daWs.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { o as object, s as string, l as literal, n as number, a as array, u as union, i as _enum, p as preprocess, d as date } from "./schemas-BVeYYbTr.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { L as LoadingButton } from "./LoadingButton-DJQpPOpu.js";
const CACHE_KEY_PREFIX = "hair-records";
const swrOptions = {
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  dedupingInterval: 2e3,
  keepPreviousData: true,
  shouldRetryOnError: true
};
const RECORD_SELECT = `
  *,
  stylist:profiles!stylist_id (
    id,
    first_name,
    last_name
  )
`;
function revalidateClient(clientId) {
  return mutate(
    (key) => typeof key === "string" && key.startsWith(`${CACHE_KEY_PREFIX}:${clientId}`),
    void 0,
    { revalidate: true }
  );
}
async function fetchClientHairRecords(clientId) {
  if (!clientId) return [];
  const { data, error } = await supabase.from("client_hair_records").select(RECORD_SELECT).eq("client_id", clientId).order("performed_at", { ascending: false }).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
function useClientHairRecords(clientId) {
  const cacheKey = clientId ? `${CACHE_KEY_PREFIX}:${clientId}` : null;
  const fetcher = reactExports.useCallback(() => fetchClientHairRecords(clientId), [clientId]);
  const { data, error, isLoading, mutate: revalidate } = useSWR(cacheKey, fetcher, swrOptions);
  return {
    records: data || [],
    recordsLoading: isLoading,
    recordsError: error,
    revalidateRecords: revalidate
  };
}
async function fetchLastHairRecord(clientId, serviceId = null) {
  if (!clientId) return null;
  let query = supabase.from("client_hair_records").select(RECORD_SELECT).eq("client_id", clientId).eq("status", "complete").order("performed_at", { ascending: false }).order("created_at", { ascending: false }).limit(1);
  if (serviceId) {
    query = query.eq("service_id", serviceId);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data?.[0] || null;
}
function useLastHairRecord(clientId, serviceId = null) {
  const cacheKey = clientId ? `${CACHE_KEY_PREFIX}:${clientId}:last:${serviceId ?? "any"}` : null;
  const fetcher = reactExports.useCallback(async () => {
    const forService = await fetchLastHairRecord(clientId, serviceId);
    if (forService) return forService;
    return serviceId ? await fetchLastHairRecord(clientId, null) : null;
  }, [clientId, serviceId]);
  const { data, isLoading } = useSWR(cacheKey, fetcher, {
    ...swrOptions,
    revalidateOnFocus: false
  });
  return { lastRecord: data || null, lastRecordLoading: isLoading };
}
function useClientHairRecordCount(clientId) {
  const cacheKey = clientId ? `${CACHE_KEY_PREFIX}:${clientId}:count` : null;
  const fetcher = reactExports.useCallback(async () => {
    const { count, error } = await supabase.from("client_hair_records").select("id", { count: "exact", head: true }).eq("client_id", clientId);
    if (error) throw error;
    return count || 0;
  }, [clientId]);
  const { data } = useSWR(cacheKey, fetcher, { ...swrOptions, revalidateOnFocus: false });
  return { recordCount: data ?? 0 };
}
async function createHairRecord(payload) {
  const { data, error } = await supabase.from("client_hair_records").insert(payload).select(RECORD_SELECT).single();
  if (error) throw error;
  await revalidateClient(payload.client_id);
  return data;
}
async function updateHairRecord(recordId, payload) {
  const { data, error } = await supabase.from("client_hair_records").update(payload).eq("id", recordId).select(RECORD_SELECT).single();
  if (error) throw error;
  await revalidateClient(data.client_id);
  return data;
}
async function deleteHairRecord(recordId, clientId) {
  const { error } = await supabase.from("client_hair_records").delete().eq("id", recordId);
  if (error) throw error;
  await revalidateClient(clientId);
}
async function createHairRecordsForSale({
  saleId,
  clientId,
  organizationId,
  branchId,
  createdBy,
  performedAt,
  entries
}) {
  if (!entries?.length) return [];
  let saleItemsByService = {};
  const { data: saleItems } = await supabase.from("sale_items").select("id, service_id").eq("sale_id", saleId).eq("item_type", "service");
  if (saleItems?.length) {
    saleItemsByService = saleItems.reduce((acc, row) => {
      if (row.service_id && !acc[row.service_id]) acc[row.service_id] = row.id;
      return acc;
    }, {});
  }
  const rows = entries.map((entry) => ({
    organization_id: organizationId,
    branch_id: branchId,
    client_id: clientId,
    sale_id: saleId,
    sale_item_id: saleItemsByService[entry.service_id] ?? null,
    service_id: entry.service_id ?? null,
    service_name: entry.service_name ?? null,
    stylist_id: entry.stylist_id ?? null,
    performed_at: performedAt,
    record_type: entry.record_type ?? "color",
    status: entry.formula?.length || entry.result_hair_color ? "complete" : "pending",
    formula: entry.formula ?? [],
    technique: entry.technique ?? null,
    processing_minutes: entry.processing_minutes ?? null,
    result_hair_color: entry.result_hair_color ?? null,
    hair_length: entry.hair_length ?? null,
    hair_density: entry.hair_density ?? null,
    hair_texture: entry.hair_texture ?? null,
    hair_porosity: entry.hair_porosity ?? null,
    scalp_condition: entry.scalp_condition ?? null,
    notes: entry.notes ?? null,
    created_by: createdBy ?? null
  }));
  const { data, error } = await supabase.from("client_hair_records").insert(rows).select("id");
  if (error) throw error;
  await revalidateClient(clientId);
  return data || [];
}
const HAIR_RECORD_TYPES = [
  { value: "color", label: "Colour" },
  { value: "treatment", label: "Treatment" },
  { value: "cut", label: "Cut" },
  { value: "observation", label: "Observation" }
];
const HAIR_RECORD_TYPE_LABELS = HAIR_RECORD_TYPES.reduce((acc, t) => {
  acc[t.value] = t.label;
  return acc;
}, {});
const FORMULA_ZONES = [
  { value: "root", label: "Root" },
  { value: "mid", label: "Mid-lengths" },
  { value: "ends", label: "Ends" },
  { value: "global", label: "Global" },
  { value: "toner", label: "Toner" },
  { value: "highlights", label: "Highlights" }
];
const FORMULA_ZONE_LABELS = FORMULA_ZONES.reduce((acc, z) => {
  acc[z.value] = z.label;
  return acc;
}, {});
const DEVELOPER_VOLUMES = [5, 10, 20, 30, 40];
const MIX_RATIOS = ["1:1", "1:1.5", "1:2", "1:2.5", "1:3"];
const COLOR_TECHNIQUES = [
  "Global",
  "Root touch-up",
  "Foils",
  "Balayage",
  "Ombre",
  "Babylights",
  "Toner only",
  "Colour correction",
  "Bleach and tone",
  "Lowlights"
];
const COLOR_BRANDS = [];
const HAIR_LENGTH_OPTIONS = [
  { value: "buzz", label: "Buzz" },
  { value: "short", label: "Short" },
  { value: "ear", label: "Ear" },
  { value: "chin", label: "Chin" },
  { value: "shoulder", label: "Shoulder" },
  { value: "medium", label: "Medium" },
  { value: "bra_strap", label: "Bra Strap" },
  { value: "long", label: "Long" },
  { value: "waist", label: "Waist" },
  { value: "extra_long", label: "Extra Long" },
  { value: "floor", label: "Floor" }
];
const HAIR_DENSITY_OPTIONS = [
  { value: "fine", label: "Fine" },
  { value: "thin", label: "Thin" },
  { value: "light", label: "Light" },
  { value: "medium", label: "Medium" },
  { value: "thick", label: "Thick" },
  { value: "coarse", label: "Coarse" }
];
const HAIR_TEXTURE_OPTIONS = [
  { value: "fine", label: "Fine" },
  { value: "medium", label: "Medium" },
  { value: "coarse", label: "Coarse" }
];
const HAIR_POROSITY_OPTIONS = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" }
];
const SCALP_CONDITION_OPTIONS = [
  { value: "normal", label: "Normal" },
  { value: "dry", label: "Dry" },
  { value: "oily", label: "Oily" },
  { value: "sensitive", label: "Sensitive" },
  { value: "combination", label: "Combination" }
];
const EMPTY_FORMULA_LINE = {
  zone: "global",
  brand: "",
  shade: "",
  developer_vol: null,
  ratio: "",
  amount_g: null
};
const HAIR_RECORD_DEFAULT_VALUES = {
  record_type: "color",
  performed_at: null,
  formula: [EMPTY_FORMULA_LINE],
  technique: null,
  processing_minutes: null,
  result_hair_color: "",
  hair_length: null,
  hair_density: null,
  hair_texture: null,
  hair_porosity: null,
  scalp_condition: null,
  notes: ""
};
function HairSectionLabel({ icon, children, action }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", spacing: 1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 14, sx: { color: "text.secondary" } }),
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
          children
        }
      )
    ] }),
    action
  ] });
}
HairSectionLabel.propTypes = {
  icon: o.string,
  children: o.node,
  action: o.node
};
function HairFormulaLineFields({ index, onRemove, canRemove }) {
  const prefix = `formula.${index}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 1, alignItems: "flex-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 6, sm: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: `${prefix}.zone`, label: "Zone", size: "small", children: FORMULA_ZONES.map((zone) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: zone.value, children: zone.label }, zone.value)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 6, sm: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Autocomplete,
      {
        name: `${prefix}.brand`,
        label: "Brand",
        size: "small",
        freeSolo: true,
        autoSelect: true,
        options: COLOR_BRANDS
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 4, sm: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: `${prefix}.shade`, label: "Shade", size: "small", placeholder: "6.13" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 4, sm: 1.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Autocomplete,
      {
        name: `${prefix}.developer_vol`,
        label: "Vol",
        size: "small",
        freeSolo: true,
        autoSelect: true,
        options: DEVELOPER_VOLUMES,
        getOptionLabel: (option) => String(option ?? "")
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 4, sm: 1.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Autocomplete,
      {
        name: `${prefix}.ratio`,
        label: "Ratio",
        size: "small",
        freeSolo: true,
        autoSelect: true,
        options: MIX_RATIOS
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 8, sm: 1.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        name: `${prefix}.amount_g`,
        label: "Grams",
        size: "small",
        type: "number",
        placeholder: "60"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 4, sm: 0.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "center", sx: { pt: 0.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Remove line", placement: "top", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        size: "small",
        onClick: () => onRemove(index),
        disabled: !canRemove,
        "aria-label": `Remove formula line ${index + 1}`,
        sx: {
          color: "text.disabled",
          "&:hover": { color: "error.main" }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold", width: 18 })
      }
    ) }) }) }) })
  ] });
}
HairFormulaLineFields.propTypes = {
  index: o.number.isRequired,
  onRemove: o.func.isRequired,
  canRemove: o.bool
};
function HairRecordForm({ lastRecord, onRepeatLast, showTypeAndDate = true }) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "formula" });
  const [stateOpen, setStateOpen] = reactExports.useState(false);
  const recordType = useWatch({ control, name: "record_type" });
  const hasFormula = recordType === "color" || recordType === "treatment";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, pt: 1, children: [
    lastRecord && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Alert,
      {
        severity: "info",
        variant: "outlined",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:history-bold-duotone", width: 20 }),
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", onClick: onRepeatLast, sx: { whiteSpace: "nowrap" }, children: "Use it" }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
          "Last recorded ",
          fDate(lastRecord.performed_at),
          lastRecord.result_hair_color ? `: ${lastRecord.result_hair_color}` : ""
        ] })
      }
    ),
    showTypeAndDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "record_type", label: "Record type", children: HAIR_RECORD_TYPES.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: type.value, children: type.label }, type.value)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "performed_at", label: "Date" }) })
    ] }),
    hasFormula && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HairSectionLabel, { icon: "solar:palette-bold", children: "Formula" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, children: fields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        HairFormulaLineFields,
        {
          index,
          onRemove: remove,
          canRemove: fields.length > 1
        },
        field.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "small",
          onClick: () => append(EMPTY_FORMULA_LINE),
          disabled: fields.length >= 8,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line", width: 16 }),
          children: "Add line"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HairSectionLabel, { icon: "solar:magic-stick-3-bold", children: "Application and result" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, sm: 5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Autocomplete,
          {
            name: "technique",
            label: "Technique",
            freeSolo: true,
            autoSelect: true,
            options: COLOR_TECHNIQUES
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 6, sm: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "processing_minutes",
            label: "Processing",
            type: "number",
            placeholder: "35",
            slotProps: {
              input: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", sx: { color: "text.disabled", fontSize: 13 }, children: "min" })
              }
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 6, sm: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "result_hair_color",
            label: "Resulting colour",
            placeholder: "Ash blonde"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        HairSectionLabel,
        {
          icon: "solar:ruler-pen-bold",
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "small",
              onClick: () => setStateOpen((open) => !open),
              endIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Iconify,
                {
                  icon: stateOpen ? "eva:chevron-up-fill" : "eva:chevron-down-fill",
                  width: 16
                }
              ),
              children: stateOpen ? "Hide" : "Update"
            }
          ),
          children: "Hair condition"
        }
      ),
      !stateOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.disabled" }, children: "Leave closed to keep what is already on the profile." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: stateOpen, unmountOnExit: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 6, sm: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "hair_length", label: "Length", children: HAIR_LENGTH_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 6, sm: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "hair_density", label: "Density", children: HAIR_DENSITY_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 6, sm: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "hair_texture", label: "Texture", children: HAIR_TEXTURE_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 6, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "hair_porosity", label: "Porosity", children: HAIR_POROSITY_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 6, sm: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "scalp_condition", label: "Scalp", children: SCALP_CONDITION_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field.Text,
      {
        name: "notes",
        label: "Notes",
        multiline: true,
        rows: 3,
        placeholder: "Pulled warm at the ends, watch on the next visit."
      }
    )
  ] });
}
HairRecordForm.propTypes = {
  lastRecord: o.object,
  onRepeatLast: o.func,
  showTypeAndDate: o.bool
};
const numeric = (schema) => preprocess((value) => {
  if (value === "" || value === null || value === void 0) return null;
  const parsed = typeof value === "number" ? value : Number(String(value).trim());
  return Number.isNaN(parsed) ? null : parsed;
}, schema);
const FormulaLineSchema = object({
  zone: string().nullish(),
  brand: string().max(100, { message: "Brand must be 100 characters or less" }).nullish(),
  shade: string().max(50, { message: "Shade must be 50 characters or less" }).nullish(),
  developer_vol: numeric(
    number().min(0, { message: "Developer volume cannot be negative" }).max(60, { message: "Developer volume looks too high" }).nullish()
  ),
  ratio: string().max(20).nullish(),
  amount_g: numeric(
    number().min(0, { message: "Amount cannot be negative" }).max(2e3, { message: "Amount looks too high" }).nullish()
  )
});
const HairRecordSchema = object({
  record_type: _enum(HAIR_RECORD_TYPES.map((option) => option.value)).default("color"),
  performed_at: union([string(), date()]).nullish(),
  formula: array(FormulaLineSchema).max(8, { message: "Eight formula lines is the limit" }),
  technique: string().max(100).nullish(),
  processing_minutes: numeric(
    number().int().min(0, { message: "Processing time cannot be negative" }).max(600, { message: "Processing time looks too long" }).nullish()
  ),
  result_hair_color: string().max(100, { message: "Colour must be 100 characters or less" }).nullish().or(literal("")),
  // Hair state at the time of the visit
  hair_length: string().max(50).nullish(),
  hair_density: string().max(50).nullish(),
  hair_texture: string().max(50).nullish(),
  hair_porosity: string().max(50).nullish(),
  scalp_condition: string().max(50).nullish(),
  notes: string().max(5e3, { message: "Notes must be 5000 characters or less" }).nullish()
});
function cleanFormulaLines(formula) {
  if (!Array.isArray(formula)) return [];
  return formula.filter(
    (line) => line?.brand?.trim() || line?.shade?.trim() || line?.developer_vol || line?.amount_g
  );
}
function recordToFormValues(record) {
  if (!record) return { ...HAIR_RECORD_DEFAULT_VALUES, performed_at: /* @__PURE__ */ new Date() };
  const formula = Array.isArray(record.formula) && record.formula.length ? record.formula : [EMPTY_FORMULA_LINE];
  return {
    record_type: record.record_type ?? "color",
    performed_at: record.performed_at ? new Date(record.performed_at) : /* @__PURE__ */ new Date(),
    formula,
    technique: record.technique ?? null,
    processing_minutes: record.processing_minutes ?? null,
    result_hair_color: record.result_hair_color ?? "",
    hair_length: record.hair_length ?? null,
    hair_density: record.hair_density ?? null,
    hair_texture: record.hair_texture ?? null,
    hair_porosity: record.hair_porosity ?? null,
    scalp_condition: record.scalp_condition ?? null,
    notes: record.notes ?? ""
  };
}
function recordToRepeatValues(record) {
  const base = recordToFormValues(record);
  return {
    ...base,
    performed_at: /* @__PURE__ */ new Date(),
    notes: "",
    hair_length: null,
    hair_density: null,
    hair_texture: null,
    hair_porosity: null,
    scalp_condition: null
  };
}
function formValuesToPayload(values) {
  const blankToNull = (value) => {
    if (typeof value === "string") {
      const trimmed = value.trim();
      return trimmed === "" ? null : trimmed;
    }
    return value ?? null;
  };
  return {
    record_type: values.record_type ?? "color",
    performed_at: values.performed_at ? new Date(values.performed_at).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
    formula: cleanFormulaLines(values.formula).map((line) => ({
      zone: blankToNull(line.zone),
      brand: blankToNull(line.brand),
      shade: blankToNull(line.shade),
      developer_vol: line.developer_vol ?? null,
      ratio: blankToNull(line.ratio),
      amount_g: line.amount_g ?? null
    })),
    technique: blankToNull(values.technique),
    processing_minutes: values.processing_minutes ?? null,
    result_hair_color: blankToNull(values.result_hair_color),
    hair_length: blankToNull(values.hair_length),
    hair_density: blankToNull(values.hair_density),
    hair_texture: blankToNull(values.hair_texture),
    hair_porosity: blankToNull(values.hair_porosity),
    scalp_condition: blankToNull(values.scalp_condition),
    notes: blankToNull(values.notes)
  };
}
function HairRecordDialog({
  open,
  onClose,
  onSubmit,
  clientId,
  serviceId = null,
  serviceName = null,
  record = null,
  title,
  submitLabel = "Save record",
  showTypeAndDate = true
}) {
  const { lastRecord } = useLastHairRecord(open ? clientId : null, serviceId);
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(HairRecordSchema),
    defaultValues: recordToFormValues(record)
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    if (open) reset(recordToFormValues(record));
  }, [open, record, reset]);
  const handleRepeatLast = reactExports.useCallback(() => {
    if (lastRecord) reset(recordToRepeatValues(lastRecord));
  }, [lastRecord, reset]);
  const submit = handleSubmit(async (values) => {
    await onSubmit(formValuesToPayload(values));
  });
  const repeatable = lastRecord && lastRecord.id !== record?.id ? lastRecord : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit: submit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { sx: { pb: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: title ?? (record ? "Edit record" : "Hair record") }),
      serviceName && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: serviceName, size: "small", sx: { textTransform: "capitalize" } })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HairRecordForm,
      {
        lastRecord: repeatable,
        onRepeatLast: handleRepeatLast,
        showTypeAndDate
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, color: "inherit", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoadingButton,
        {
          type: "submit",
          variant: "contained",
          loading: isSubmitting,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold", width: 18 }),
          children: submitLabel
        }
      )
    ] })
  ] }) });
}
HairRecordDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  onSubmit: o.func.isRequired,
  clientId: o.string,
  serviceId: o.string,
  serviceName: o.string,
  record: o.object,
  title: o.string,
  submitLabel: o.string,
  showTypeAndDate: o.bool
};
export {
  FORMULA_ZONE_LABELS as F,
  HairRecordDialog as H,
  SCALP_CONDITION_OPTIONS as S,
  HAIR_RECORD_TYPE_LABELS as a,
  HAIR_LENGTH_OPTIONS as b,
  createHairRecordsForSale as c,
  HAIR_DENSITY_OPTIONS as d,
  HAIR_TEXTURE_OPTIONS as e,
  HAIR_POROSITY_OPTIONS as f,
  HairSectionLabel as g,
  useClientHairRecords as h,
  updateHairRecord as i,
  createHairRecord as j,
  deleteHairRecord as k,
  useClientHairRecordCount as u
};
