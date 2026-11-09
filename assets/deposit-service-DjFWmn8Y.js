import { t as toast, s as supabase, u as useSWR, r as reactExports, eg as Snackbar, eh as Toaster, ei as snackbarClasses, ej as useSonner } from "./index-B08HRm4A.js";
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Snackbar,
  Toaster,
  snackbarClasses,
  toast,
  useSonner
}, Symbol.toStringTag, { value: "Module" }));
async function collectDeposit({ appointmentId, amount, paymentMethod, notes }) {
  const { data, error } = await supabase.rpc("collect_appointment_deposit", {
    p_appointment_id: appointmentId,
    p_amount: amount,
    p_payment_method: paymentMethod,
    p_notes: notes ?? null
  });
  if (error) throw error;
  return data;
}
async function applyDepositsToSale({ appointmentId, saleId }) {
  const { data, error } = await supabase.rpc("apply_deposit_to_sale", {
    p_appointment_id: appointmentId,
    p_sale_id: saleId
  });
  if (error) throw error;
  return data;
}
async function resolveDeposit({ appointmentId, forfeit = false, reason = null }) {
  const { data, error } = await supabase.rpc("refund_appointment_deposit", {
    p_appointment_id: appointmentId,
    p_forfeit: forfeit,
    p_reason: reason
  });
  if (error) throw error;
  return data;
}
async function fetchDepositsByAppointment(appointmentId) {
  const { data, error } = await supabase.from("appointment_deposits").select(
    `id, amount, payment_method, status, paid_at, applied_at,
       refunded_at, refund_reason, notes, applied_to_sale_id, processed_by`
  ).eq("appointment_id", appointmentId).order("paid_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function getHeldDepositTotal(appointmentId) {
  const deposits = await fetchDepositsByAppointment(appointmentId);
  return deposits.filter((d) => d.status === "held").reduce((s, d) => s + d.amount, 0);
}
const swrOptions = {
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  dedupingInterval: 1e4
};
function useGetAppointmentDeposits(appointmentId) {
  const cacheKey = appointmentId ? ["appointment-deposits", appointmentId] : null;
  const { data, isLoading, error, mutate } = useSWR(
    cacheKey,
    () => fetchDepositsByAppointment(appointmentId),
    swrOptions
  );
  const totalHeld = reactExports.useMemo(
    () => (data || []).filter((d) => d.status === "held").reduce((s, d) => s + d.amount, 0),
    [data]
  );
  const totalApplied = reactExports.useMemo(
    () => (data || []).filter((d) => d.status === "applied").reduce((s, d) => s + d.amount, 0),
    [data]
  );
  const hasHeldDeposit = totalHeld > 0;
  const collect = reactExports.useCallback(
    async ({ amount, paymentMethod, notes }) => {
      const id = await collectDeposit({ appointmentId, amount, paymentMethod, notes });
      await mutate();
      return id;
    },
    [appointmentId, mutate]
  );
  const apply = reactExports.useCallback(
    async (saleId) => {
      const applied = await applyDepositsToSale({ appointmentId, saleId });
      await mutate();
      return applied;
    },
    [appointmentId, mutate]
  );
  const resolve = reactExports.useCallback(
    async ({ forfeit = false, reason = null } = {}) => {
      const total = await resolveDeposit({ appointmentId, forfeit, reason });
      await mutate();
      return total;
    },
    [appointmentId, mutate]
  );
  return reactExports.useMemo(
    () => ({
      deposits: data || [],
      depositsLoading: isLoading,
      depositsError: error,
      totalHeld,
      totalApplied,
      hasHeldDeposit,
      collect,
      apply,
      resolve,
      mutateDeposits: mutate
    }),
    [
      data,
      isLoading,
      error,
      totalHeld,
      totalApplied,
      hasHeldDeposit,
      collect,
      apply,
      resolve,
      mutate
    ]
  );
}
const depositService = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyDepositsToSale,
  collectDeposit,
  getHeldDepositTotal,
  resolveDeposit,
  useGetAppointmentDeposits
}, Symbol.toStringTag, { value: "Module" }));
export {
  applyDepositsToSale as a,
  depositService as d,
  index as i,
  useGetAppointmentDeposits as u
};
