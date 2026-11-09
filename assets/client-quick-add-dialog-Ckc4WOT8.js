import { s as supabase, m as mutate, r as reactExports, u as useSWR, a6 as useUserBranches, t as toast, j as jsxRuntimeExports, S as Stack, d as Button } from "./index-B08HRm4A.js";
import { a as useForm, b as u, F as Form, C as Controller } from "./form-provider-u_wAFv-h.js";
import { i as isValidPhoneNumber } from "./index-C4JOln-R.js";
import { c as updateClient, d as createClient } from "./client-service-swr-DnF01Wop.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { s as schemaUtils } from "./schema-utils-CG9_JlGr.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { a as FormLabel } from "./TextField-CIuP940C.js";
import { o as object, p as preprocess, i as _enum, n as number, s as string } from "./schemas-BVeYYbTr.js";
import { d as date } from "./coerce-5-WTXoHr.js";
const APPOINTMENTS_SELECT_FULL = `
  *,
  client:client_profiles (
    id,
    first_name,
    last_name,
    email,
    phone_primary,
    client_importance,
    date_of_birth
  ),
  stylist:profiles!stylist_id (
    id,
    first_name,
    last_name,
    email,
    calendar_color
  ),
  services:appointment_services (
    id,
    service_id,
    service_name,
    service_category,
    duration_minutes,
    price,
    performed_by,
    start_time,
    end_time,
    staff:profiles!performed_by (
      id,
      first_name,
      last_name,
      calendar_color
    ),
    is_completed,
    display_order
  )
`;
const APPOINTMENTS_SELECT_SLIM = `
  id,
  status,
  appointment_number,
  appointment_date,
  start_time,
  total_amount,
  client:client_profiles (
    id,
    first_name,
    last_name,
    email,
    phone_primary,
    client_importance,
    date_of_birth
  ),
  services:appointment_services (
    service_name
  )
`;
function toDateParam(value) {
  if (!value) return null;
  if (typeof value === "string") {
    return /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : value.slice(0, 10);
  }
  if (typeof value.format === "function") return value.format("YYYY-MM-DD");
  if (value instanceof Date) {
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");
    return `${value.getFullYear()}-${month}-${day}`;
  }
  return String(value);
}
async function fetchAppointments(params) {
  const { branchId, startDate, endDate, stylistId, status, slim = false } = params;
  try {
    let query = supabase.from("appointments").select(slim ? APPOINTMENTS_SELECT_SLIM : APPOINTMENTS_SELECT_FULL).order("appointment_date", { ascending: true }).order("start_time", { ascending: true });
    if (branchId) {
      query = query.eq("branch_id", branchId);
    }
    if (stylistId) {
      query = query.eq("stylist_id", stylistId);
    }
    if (status && status !== "all") {
      query = query.eq("status", status);
    }
    const fromDate = toDateParam(startDate);
    const toDate = toDateParam(endDate);
    if (fromDate) {
      query = query.gte("appointment_date", fromDate);
    }
    if (toDate) {
      query = query.lte("appointment_date", toDate);
    }
    const { data, error: fetchError } = await query;
    if (fetchError) throw fetchError;
    return data || [];
  } catch (err) {
    console.error("Error fetching appointments:", err);
    throw err;
  }
}
async function getAppointmentById(appointmentId) {
  try {
    const { data, error } = await supabase.from("appointments").select(
      `
        *,
        client:client_profiles (*),
        stylist:profiles!stylist_id (*),
        sale:sales!sale_id (id, sale_number),
        services:appointment_services!inner (
              id,
              service_id,
              service_name,
              service_category,
              duration_minutes,
              price,
              is_completed,
              stylist_level,
              performed_by,
              staff:profiles!performed_by (
                first_name,
                last_name
              )
            )      `
    ).eq("id", appointmentId).single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching appointment:", error);
    return { data: null, error };
  }
}
async function getAppointmentHistory(appointmentId) {
  try {
    if (!appointmentId) return { data: [], error: null };
    const { data, error } = await supabase.from("appointment_history").select(
      `
        *,
        changed_by_profile:profiles!changed_by (
          first_name,
          last_name
        )
      `
    ).eq("appointment_id", appointmentId).order("created_at", { ascending: false });
    if (error) throw error;
    const rows = data || [];
    const performedByIds = /* @__PURE__ */ new Set();
    for (const row of rows) {
      if (row.old_values?.performed_by) performedByIds.add(row.old_values.performed_by);
      if (row.new_values?.performed_by) performedByIds.add(row.new_values.performed_by);
    }
    let profileMap = {};
    if (performedByIds.size > 0) {
      const { data: profiles } = await supabase.from("profiles").select("id, first_name, last_name").in("id", [...performedByIds]);
      if (profiles) {
        for (const p of profiles) {
          profileMap[p.id] = `${p.first_name ?? ""} ${p.last_name ?? ""}`.trim();
        }
      }
    }
    const enriched = rows.map((row) => {
      if (!row.old_values && !row.new_values) return row;
      const enrich = (vals) => {
        if (!vals?.performed_by) return vals;
        return { ...vals, performed_by_name: profileMap[vals.performed_by] ?? null };
      };
      return { ...row, old_values: enrich(row.old_values), new_values: enrich(row.new_values) };
    });
    return { data: enriched, error: null };
  } catch (error) {
    console.error("Error fetching appointment history:", error);
    return { data: [], error };
  }
}
async function createAppointment(appointmentData) {
  try {
    const { services, ...appointmentFields } = appointmentData;
    const { data: appointment, error: appointmentError } = await supabase.from("appointments").insert([
      {
        ...appointmentFields,
        created_by: (await supabase.auth.getUser()).data.user?.id
      }
    ]).select().single();
    if (appointmentError) throw appointmentError;
    if (services && services.length > 0) {
      const servicesData = services.map((service, index) => ({
        appointment_id: appointment.id,
        service_id: service.service_id,
        service_name: service.service_name,
        service_category: service.service_category,
        duration_minutes: service.duration_minutes,
        price: service.price,
        stylist_level: service.stylist_level,
        performed_by: service.performed_by || appointmentFields.stylist_id,
        start_time: service.start_time,
        end_time: service.end_time,
        display_order: index
      }));
      const { error: servicesError } = await supabase.from("appointment_services").insert(servicesData);
      if (servicesError) throw servicesError;
    }
    return { data: appointment, error: null };
  } catch (error) {
    console.error("Error creating appointment:", error);
    return { data: null, error };
  }
}
async function updateAppointment(appointmentId, updates) {
  try {
    const { services, updateServicesStylist, ...appointmentFields } = updates;
    const { data: appointment, error: appointmentError } = await supabase.from("appointments").update({
      ...appointmentFields,
      updated_by: (await supabase.auth.getUser()).data.user?.id
    }).eq("id", appointmentId).select().single();
    if (appointmentError) throw appointmentError;
    if (updateServicesStylist && appointmentFields.stylist_id) {
      const { error: servicesUpdateError } = await supabase.from("appointment_services").update({ performed_by: appointmentFields.stylist_id }).eq("appointment_id", appointmentId);
      if (servicesUpdateError) throw servicesUpdateError;
    }
    if (services !== void 0) {
      await supabase.from("appointment_services").delete().eq("appointment_id", appointmentId);
      if (services.length > 0) {
        const servicesData = services.map((service, index) => ({
          appointment_id: appointmentId,
          service_id: service.service_id,
          service_name: service.service_name,
          service_category: service.service_category,
          duration_minutes: service.duration_minutes,
          price: service.price,
          stylist_level: service.stylist_level,
          performed_by: service.performed_by || appointmentFields.stylist_id,
          start_time: service.start_time ?? null,
          end_time: service.end_time ?? null,
          display_order: index
        }));
        const { error: servicesError } = await supabase.from("appointment_services").insert(servicesData);
        if (servicesError) throw servicesError;
      }
    }
    return { data: appointment, error: null };
  } catch (error) {
    console.error("Error updating appointment:", error);
    return { data: null, error };
  }
}
async function deleteAppointment(appointmentId) {
  try {
    const { error } = await supabase.from("appointments").update({
      status: "cancelled",
      cancelled_at: (/* @__PURE__ */ new Date()).toISOString(),
      cancellation_reason: "other"
    }).eq("id", appointmentId);
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return { error };
  }
}
async function updateAppointmentService(serviceRowId, updates) {
  try {
    const { error } = await supabase.from("appointment_services").update(updates).eq("id", serviceRowId);
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error("Error updating appointment service:", error);
    return { error };
  }
}
async function updateAppointmentStatus(appointmentId, status, additionalData = {}) {
  try {
    const userId = (await supabase.auth.getUser()).data.user?.id;
    const updateData = {
      status,
      updated_by: userId,
      ...additionalData
    };
    switch (status) {
      case "confirmed":
        updateData.confirmed_at = (/* @__PURE__ */ new Date()).toISOString();
        updateData.confirmed_by = userId;
        break;
      case "checked_in":
        updateData.checked_in_at = (/* @__PURE__ */ new Date()).toISOString();
        break;
      case "in_progress":
        updateData.started_at = (/* @__PURE__ */ new Date()).toISOString();
        break;
      case "completed":
        updateData.completed_at = (/* @__PURE__ */ new Date()).toISOString();
        break;
      case "cancelled":
        updateData.cancelled_at = (/* @__PURE__ */ new Date()).toISOString();
        updateData.cancelled_by = userId;
        break;
      case "no_show":
        updateData.is_no_show = true;
        updateData.no_show_at = (/* @__PURE__ */ new Date()).toISOString();
        break;
      default:
        break;
    }
    if (status !== "cancelled") {
      updateData.cancelled_at = null;
      updateData.cancelled_by = null;
      updateData.cancellation_reason = null;
      updateData.cancellation_notes = null;
    }
    if (status !== "no_show") {
      updateData.is_no_show = false;
      updateData.no_show_at = null;
    }
    const { data, error } = await supabase.from("appointments").update(updateData).eq("id", appointmentId).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating appointment status:", error);
    return { data: null, error };
  }
}
const CACHE_KEY_PREFIX = "appointments";
const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 2e3,
  keepPreviousData: true,
  shouldRetryOnError: true,
  errorRetryCount: 3
};
function buildCacheKey(params) {
  const { branchId, startDate, endDate, stylistId, status } = params;
  return JSON.stringify([CACHE_KEY_PREFIX, branchId, startDate, endDate, stylistId, status]);
}
function invalidateAppointments() {
  mutate((key) => typeof key === "string" && key.includes(CACHE_KEY_PREFIX), void 0, {
    revalidate: true
  });
}
const _existingChannel = supabase.getChannels().find((c) => c.topic === "realtime:appointments_realtime_global");
if (_existingChannel) {
  supabase.removeChannel(_existingChannel);
}
supabase.channel("appointments_realtime_global").on("postgres_changes", { event: "*", schema: "public", table: "appointments" }, () => {
  invalidateAppointments();
}).on("postgres_changes", { event: "*", schema: "public", table: "appointment_services" }, () => {
  invalidateAppointments();
}).subscribe();
function useAppointments(params) {
  const {
    branchId = null,
    startDate = null,
    endDate = null,
    stylistId = null,
    status = "all",
    slim = false,
    enabled = true
  } = params || {};
  const filterParams = reactExports.useMemo(
    () => ({
      branchId,
      startDate,
      endDate,
      stylistId,
      status,
      slim
    }),
    [branchId, startDate, endDate, stylistId, status, slim]
  );
  const cacheKey = reactExports.useMemo(
    () => enabled ? buildCacheKey(filterParams) : null,
    [enabled, filterParams]
  );
  const {
    data: appointments,
    error,
    isLoading,
    isValidating,
    mutate: revalidate
  } = useSWR(cacheKey, () => fetchAppointments(filterParams), swrOptions);
  return {
    appointments: appointments || [],
    loading: isLoading,
    validating: isValidating,
    error,
    refetch: revalidate,
    mutate: revalidate
  };
}
function useAppointment(appointmentId) {
  const cacheKey = appointmentId ? `${CACHE_KEY_PREFIX}:single:${appointmentId}` : null;
  const fetcher = reactExports.useCallback(async () => {
    if (!appointmentId) return null;
    const { data: data2, error: error2 } = await getAppointmentById(appointmentId);
    if (error2) throw error2;
    return data2;
  }, [appointmentId]);
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: revalidate
  } = useSWR(cacheKey, fetcher, swrOptions);
  reactExports.useEffect(() => {
    if (!appointmentId) return void 0;
    const channel = supabase.channel(`appointment_${appointmentId}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "appointments",
        filter: `id=eq.${appointmentId}`
      },
      (payload) => {
        revalidate();
      }
    ).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "appointment_services",
        filter: `appointment_id=eq.${appointmentId}`
      },
      (payload) => {
        revalidate();
      }
    ).subscribe((subscriptionStatus) => {
    });
    return () => {
      supabase.removeChannel(channel);
    };
  }, [appointmentId, revalidate]);
  return {
    appointment: data,
    loading: isLoading,
    validating: isValidating,
    error,
    refetch: revalidate,
    mutate: revalidate
  };
}
function useAppointmentHistory(appointmentId) {
  const cacheKey = appointmentId ? `${CACHE_KEY_PREFIX}:history:${appointmentId}` : null;
  const fetcher = reactExports.useCallback(async () => {
    if (!appointmentId) return [];
    const { data: data2, error: error2 } = await getAppointmentHistory(appointmentId);
    if (error2) throw error2;
    return data2 || [];
  }, [appointmentId]);
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: revalidate
  } = useSWR(cacheKey, fetcher, swrOptions);
  reactExports.useEffect(() => {
    if (!appointmentId) return void 0;
    const channel = supabase.channel(`appointment_history_${appointmentId}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "appointment_history",
        filter: `appointment_id=eq.${appointmentId}`
      },
      (payload) => {
        revalidate();
      }
    ).subscribe((status) => {
    });
    return () => {
      supabase.removeChannel(channel);
    };
  }, [appointmentId, revalidate]);
  return {
    history: data || [],
    loading: isLoading,
    validating: isValidating,
    error,
    refetch: revalidate,
    mutate: revalidate
  };
}
const UserCreateSchema = object({
  // Basic Information
  status: _enum(["active", "inactive", "archived"]).default("active"),
  branch_id: string().uuid(),
  first_name: string().min(1, { message: "First name is required!" }),
  last_name: string().min(1, { message: "Last name is required!" }),
  phone_primary: preprocess(
    (v) => v === "" ? null : v,
    schemaUtils.phoneNumber({ isValid: isValidPhoneNumber }).optional().nullable()
  ),
  email: preprocess((v) => v === "" ? null : v, schemaUtils.email().optional().nullable()),
  client_importance: number().min(0).max(5).optional().nullable(),
  gender: _enum(["male", "female", "prefer_not_to_say"]).optional().nullable(),
  date_of_birth: preprocess((v) => v === "" ? null : v, date().optional().nullable())
});
function ClientQuickAddDialog({
  openDialog,
  setOpenDialog,
  editingClient,
  onSuccess
}) {
  const {
    primaryBranch,
    branchesOnly: branches,
    hasMultipleBranchesOnly: hasMultipleBranches
  } = useUserBranches();
  const defaultValues = {
    first_name: null,
    last_name: null,
    email: null,
    phone_primary: null,
    date_of_birth: null,
    branch_id: primaryBranch?.id || null,
    default_branch_id: primaryBranch?.id || null,
    client_importance: 0
  };
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(UserCreateSchema),
    defaultValues,
    values: editingClient
  });
  const {
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    if (primaryBranch?.id && !editingClient) {
      setValue("branch_id", primaryBranch.id);
    }
  }, [primaryBranch?.id, editingClient, setValue]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      let result;
      if (editingClient) {
        result = await updateClient(editingClient.id, data);
      } else {
        result = await createClient(data);
      }
      const { success, data: client, error } = result;
      if (!success) {
        throw error;
      }
      reset();
      toast.success(editingClient ? "Update success!" : "Create success!");
      setOpenDialog(false);
      if (onSuccess) {
        onSuccess(client);
      }
    } catch (error) {
      toast.error(editingClient ? "Update failed!" : "Create failed!");
      console.error(error);
    }
  });
  const handleClose = () => {
    setOpenDialog(false);
    reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: openDialog, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editingClient ? "Edit Client" : "Create New Client" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { id: "client-quick-add-form", methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { mt: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "first_name", label: "First Name", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "last_name", label: "Last Name", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "email", label: "Email", type: "email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.DatePicker,
        {
          name: "date_of_birth",
          label: "Date of Birth",
          disableFuture: true,
          slotProps: { field: { clearable: true } }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.RadioGroup,
        {
          sx: { display: "flex", flexDirection: "row" },
          name: "gender",
          label: "Gender",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Prefer not to say", value: "prefer_not_to_say" }
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { gap: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { sx: { fontSize: "0.875rem" }, children: "Client Importance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Rating, { name: "client_importance", label: "Client Importance", max: 5 })
      ] }),
      hasMultipleBranches && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "branch_id",
          control: methods.control,
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            BranchSelect,
            {
              size: "medium",
              branches,
              value: field.value || "",
              onChange: field.onChange,
              label: "Branch",
              showAllOption: false,
              sx: { width: "100%", minWidth: "unset" }
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Phone, { name: "phone_primary", label: "Phone Number", defaultCountry: "LB" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          type: "submit",
          form: "client-quick-add-form",
          onClick: onSubmit,
          loading: isSubmitting,
          children: editingClient ? "Update" : "Create"
        }
      )
    ] })
  ] });
}
export {
  ClientQuickAddDialog as C,
  useAppointmentHistory as a,
  useAppointment as b,
  createAppointment as c,
  deleteAppointment as d,
  updateAppointmentStatus as e,
  useAppointments as f,
  updateAppointmentService as g,
  invalidateAppointments as i,
  updateAppointment as u
};
