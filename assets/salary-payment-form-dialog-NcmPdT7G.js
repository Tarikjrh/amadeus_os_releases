import { u as useSWR, r as reactExports, s as supabase, m as mutate, h as dayjs, av as useAuthContext, t as toast, j as jsxRuntimeExports, S as Stack, M as MenuItem, a as Iconify, c as Typography, d as Button } from "./index-B08HRm4A.js";
import { o } from "./index-Di_Bgabu.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { c as createExpense, u as useSWRMutation, a as updateExpense } from "./expense-service-B2nZjY_a.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { o as object, b as boolean, s as string, k as any } from "./schemas-BVeYYbTr.js";
import { n as number } from "./coerce-5-WTXoHr.js";
const SALARY_ENDPOINTS = {
  getEmployeeCompensation: (userId, branchId) => `employee-compensation-${userId}-${branchId}`,
  getEmployeeCompensationHistory: (userId, branchId, startDate, endDate) => `employee-compensation-history-${userId}-${branchId}-${startDate}-${endDate}`,
  getServiceCommissionMappings: () => "service-commission-mappings"
};
async function fetchEmployeeCompensation(userId, branchId) {
  let query = supabase.from("employee_compensation").select("*").eq("user_id", userId).eq("is_active", true);
  if (branchId) {
    query = query.eq("branch_id", branchId);
  }
  const { data, error } = await query.order("effective_from", { ascending: false }).limit(1).maybeSingle();
  if (error && error.code !== "PGRST116") {
    throw error;
  }
  return data;
}
async function upsertEmployeeCompensation(compensationData) {
  if (compensationData.user_id && compensationData.branch_id) {
    await supabase.from("employee_compensation").update({
      is_active: false,
      effective_until: (/* @__PURE__ */ new Date()).toISOString(),
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("user_id", compensationData.user_id).eq("branch_id", compensationData.branch_id).eq("is_active", true);
  }
  const { data, error } = await supabase.from("employee_compensation").insert([
    {
      ...compensationData,
      effective_from: (/* @__PURE__ */ new Date()).toISOString(),
      is_active: true,
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }
  ]).select().single();
  if (error) {
    throw error;
  }
  mutate(
    SALARY_ENDPOINTS.getEmployeeCompensation(compensationData.user_id, compensationData.branch_id)
  );
  mutate(SALARY_ENDPOINTS.getEmployeeCompensation(compensationData.user_id, "any"));
  return data;
}
async function fetchCommissionHistory(userId, branchId, startDate, endDate) {
  let query = supabase.from("commission_history").select("*").eq("user_id", userId).gte("service_date", startDate).lte("service_date", endDate).order("service_date", { ascending: false });
  if (branchId) {
    query = query.eq("branch_id", branchId);
  }
  const { data, error } = await query;
  if (error) {
    throw error;
  }
  return data || [];
}
async function createServiceCommissionMapping(serviceId, commissionCategory) {
  const { data, error } = await supabase.from("service_commission_mapping").insert([
    {
      service_id: serviceId,
      commission_category: commissionCategory
    }
  ]).select().single();
  if (error) {
    throw error;
  }
  mutate(SALARY_ENDPOINTS.getServiceCommissionMappings());
  return data;
}
async function fetchCompensationSummary(userId, branchId, startDate, endDate) {
  const { data, error } = await supabase.rpc("get_employee_compensation_summary", {
    p_user_id: userId,
    p_branch_id: branchId,
    p_start_date: startDate,
    p_end_date: endDate
  });
  if (error) {
    throw error;
  }
  return data?.[0] || null;
}
function useGetEmployeeCompensation(userId, branchId) {
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: mutateLocal
  } = useSWR(
    userId ? SALARY_ENDPOINTS.getEmployeeCompensation(userId, branchId ?? "any") : null,
    () => fetchEmployeeCompensation(userId, branchId),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const memoizedValue = reactExports.useMemo(
    () => ({
      compensation: data,
      compensationLoading: isLoading,
      compensationError: error,
      compensationValidating: isValidating,
      compensationRefetch: mutateLocal,
      hasCompensation: !!data
    }),
    [data, error, isLoading, isValidating, mutateLocal]
  );
  return memoizedValue;
}
function useGetCommissionHistory(userId, branchId, startDate, endDate) {
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: mutateLocal
  } = useSWR(
    userId && startDate && endDate ? SALARY_ENDPOINTS.getEmployeeCompensationHistory(
      userId,
      branchId ?? "all",
      startDate,
      endDate
    ) : null,
    () => fetchCommissionHistory(userId, branchId, startDate, endDate),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const memoizedValue = reactExports.useMemo(
    () => ({
      commissionHistory: data || [],
      commissionHistoryLoading: isLoading,
      commissionHistoryError: error,
      commissionHistoryValidating: isValidating,
      commissionHistoryRefetch: mutateLocal
    }),
    [data, error, isLoading, isValidating, mutateLocal]
  );
  return memoizedValue;
}
function useGetCompensationSummary(userId, branchId, startDate, endDate) {
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: mutateLocal
  } = useSWR(
    userId && branchId && startDate && endDate ? `compensation-summary-${userId}-${branchId}-${startDate}-${endDate}` : null,
    () => fetchCompensationSummary(userId, branchId, startDate, endDate),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const memoizedValue = reactExports.useMemo(
    () => ({
      compensationSummary: data,
      compensationSummaryLoading: isLoading,
      compensationSummaryError: error,
      compensationSummaryValidating: isValidating,
      compensationSummaryRefetch: mutateLocal
    }),
    [data, error, isLoading, isValidating, mutateLocal]
  );
  return memoizedValue;
}
function useEmployeeCompensationMutation() {
  const updateCompensation = async (compensationData) => {
    try {
      const result = await upsertEmployeeCompensation(compensationData);
      return result;
    } catch (error) {
      console.error("Error updating compensation:", error);
      throw error;
    }
  };
  const createCommissionMapping = async (serviceId, commissionCategory) => {
    try {
      const result = await createServiceCommissionMapping(serviceId, commissionCategory);
      return result;
    } catch (error) {
      console.error("Error creating commission mapping:", error);
      throw error;
    }
  };
  return {
    updateCompensation,
    createCommissionMapping
  };
}
function buildExpenseDescription(staffName, paymentDate, notes) {
  const month = dayjs(paymentDate).format("MMMM YYYY");
  const base = staffName ? `Salary – ${staffName} – ${month}` : `Salary – ${month}`;
  return notes ? `${base} – ${notes}` : base;
}
function listKey(userId, organizationId, branchId, page, pageSize) {
  return `salary-payments-${userId}-${organizationId}-${branchId ?? "all"}-${page}-${pageSize}`;
}
async function getSalaryPayments({
  userId,
  organizationId,
  branchId,
  page = 0,
  pageSize = 10
}) {
  let query = supabase.from("salary_payments").select(
    `
      *,
      creator:profiles!salary_payments_created_by_fkey(display_name, first_name, last_name),
      expense:expenses(id, amount, description, expense_date, category)
    `,
    { count: "exact" }
  ).eq("user_id", userId).eq("organization_id", organizationId).is("deleted_at", null).order("payment_date", { ascending: false }).order("created_at", { ascending: false }).range(page * pageSize, (page + 1) * pageSize - 1);
  if (branchId) {
    query = query.eq("branch_id", branchId);
  }
  const { data, error, count } = await query;
  if (error) throw error;
  return { data: data ?? [], count: count ?? 0 };
}
async function createSalaryPayment({
  paymentData,
  addToExpenses = false,
  organizationId,
  createdBy,
  staffName
}) {
  let expenseId = null;
  if (addToExpenses) {
    const expense = await createExpense({
      organization_id: organizationId,
      branch_id: paymentData.branch_id,
      amount: paymentData.amount,
      description: buildExpenseDescription(staffName, paymentData.payment_date, paymentData.notes),
      category: "salaries",
      expense_date: paymentData.payment_date,
      created_by: createdBy,
      payment_status: "paid"
    });
    expenseId = expense.id;
  }
  const { data, error } = await supabase.from("salary_payments").insert([
    {
      ...paymentData,
      organization_id: organizationId,
      expense_id: expenseId,
      created_by: createdBy
    }
  ]).select().single();
  if (error) {
    if (expenseId) {
      await supabase.from("expenses").delete().eq("id", expenseId);
    }
    throw error;
  }
  mutate(
    (key) => typeof key === "string" && key.startsWith(`salary-payments-${paymentData.user_id}-${organizationId}`),
    void 0,
    { revalidate: true }
  );
  return data;
}
async function updateSalaryPayment({ id, updates, currentPayment }) {
  if (currentPayment?.expense_id) {
    const expenseUpdates = {};
    if (updates.amount !== void 0 && updates.amount !== currentPayment.amount) {
      expenseUpdates.amount = updates.amount;
    }
    if (updates.payment_date !== void 0 && updates.payment_date !== currentPayment.payment_date) {
      expenseUpdates.expense_date = updates.payment_date;
    }
    if (updates.notes !== void 0 && updates.notes !== currentPayment.notes) {
      expenseUpdates.description = buildExpenseDescription(
        updates._staffName,
        updates.payment_date ?? currentPayment.payment_date,
        updates.notes
      );
    } else if (updates.payment_date !== void 0 && updates.payment_date !== currentPayment.payment_date) {
      expenseUpdates.description = buildExpenseDescription(
        updates._staffName,
        updates.payment_date,
        updates.notes ?? currentPayment.notes
      );
    }
    if (updates.branch_id !== void 0 && updates.branch_id !== currentPayment.branch_id) {
      expenseUpdates.branch_id = updates.branch_id;
    }
    if (Object.keys(expenseUpdates).length > 0) {
      await updateExpense(currentPayment.expense_id, expenseUpdates);
    }
  }
  if (!currentPayment?.expense_id && updates._addToExpenses) {
    const expense = await createExpense({
      organization_id: currentPayment.organization_id,
      branch_id: updates.branch_id ?? currentPayment.branch_id,
      amount: updates.amount ?? currentPayment.amount,
      description: buildExpenseDescription(
        updates._staffName,
        updates.payment_date ?? currentPayment.payment_date,
        updates.notes ?? currentPayment.notes
      ),
      category: "salaries",
      expense_date: updates.payment_date ?? currentPayment.payment_date,
      created_by: currentPayment.created_by,
      payment_status: "paid"
    });
    updates = { ...updates, expense_id: expense.id };
  }
  const { _addToExpenses, _staffName, ...cleanUpdates } = updates;
  const { data, error } = await supabase.from("salary_payments").update({ ...cleanUpdates, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id).select().single();
  if (error) throw error;
  mutate(
    (key) => typeof key === "string" && key.startsWith(`salary-payments-${currentPayment.user_id}-${currentPayment.organization_id}`),
    void 0,
    { revalidate: true }
  );
  return data;
}
function useGetSalaryPayments({
  userId,
  organizationId,
  branchId,
  page = 0,
  pageSize = 10
}) {
  const key = userId && organizationId ? listKey(userId, organizationId, branchId, page, pageSize) : null;
  const {
    data,
    error,
    isLoading,
    mutate: mutateLocal
  } = useSWR(key, () => getSalaryPayments({ userId, organizationId, branchId, page, pageSize }), {
    revalidateOnFocus: false
  });
  return reactExports.useMemo(
    () => ({
      payments: data?.data ?? [],
      paymentsTotal: data?.count ?? 0,
      paymentsLoading: isLoading,
      paymentsError: error,
      paymentsRefetch: mutateLocal
    }),
    [data, error, isLoading, mutateLocal]
  );
}
function useCheckPeriodPayment({ userId, organizationId, startDate, endDate }) {
  const key = userId && organizationId && startDate && endDate ? `salary-payment-check-${userId}-${organizationId}-${startDate}-${endDate}` : null;
  const { data, isLoading } = useSWR(
    key,
    async () => {
      const { data: rows, error } = await supabase.from("salary_payments").select("id, status").eq("user_id", userId).eq("organization_id", organizationId).is("deleted_at", null).gte("payment_date", startDate).lte("payment_date", endDate).eq("status", "paid").limit(1);
      if (error) throw error;
      return rows ?? [];
    },
    { revalidateOnFocus: false }
  );
  return reactExports.useMemo(
    () => ({
      alreadyPaid: (data?.length ?? 0) > 0,
      periodCheckLoading: isLoading
    }),
    [data, isLoading]
  );
}
function useCreateSalaryPayment() {
  const { trigger, isMutating } = useSWRMutation(
    "create-salary-payment",
    (_, { arg }) => createSalaryPayment(arg)
  );
  return { createPayment: trigger, createPaymentLoading: isMutating };
}
function useUpdateSalaryPayment() {
  const { trigger, isMutating } = useSWRMutation(
    "update-salary-payment",
    (_, { arg }) => updateSalaryPayment(arg)
  );
  return { updatePayment: trigger, updatePaymentLoading: isMutating };
}
const PAYMENT_METHOD_OPTIONS = [
  { value: "bank_transfer", label: "Bank Transfer" },
  { value: "cash", label: "Cash" },
  { value: "check", label: "Check" },
  { value: "other", label: "Other" }
];
const PAYMENT_STATUS_OPTIONS = [
  { value: "paid", label: "Paid" },
  { value: "pending", label: "Pending" },
  { value: "cancelled", label: "Cancelled" }
];
const PAYMENT_STATUS_COLORS = {
  paid: "success",
  pending: "warning",
  cancelled: "error"
};
const DEFAULT_PAGE_SIZE = 10;
const schema = object({
  amount: number().positive("Amount must be greater than 0"),
  payment_date: any().refine((val) => val && dayjs(val).isValid(), {
    message: "Payment date is required"
  }),
  payment_method: string().min(1, "Payment method is required"),
  status: string().min(1, "Status is required"),
  notes: string().max(1e3).nullable().optional(),
  add_to_expenses: boolean().default(false)
});
function SalaryPaymentFormDialog({
  open,
  onClose,
  compensationId,
  staffId,
  branchId,
  currency = "USD",
  editingPayment,
  defaultAmount,
  staffName,
  onPaymentCreated
}) {
  const { user } = useAuthContext();
  const organizationId = user?.primary_branch?.organization_id || user?.branches?.[0]?.organization_id;
  const { createPayment, createPaymentLoading } = useCreateSalaryPayment();
  const { updatePayment, updatePaymentLoading } = useUpdateSalaryPayment();
  const isEditing = !!editingPayment;
  const isBusy = createPaymentLoading || updatePaymentLoading;
  const alreadyLinked = isEditing && !!editingPayment?.expense_id;
  const methods = useForm({
    resolver: u(schema),
    defaultValues: editingPayment ? {
      amount: editingPayment.amount,
      payment_date: dayjs(editingPayment.payment_date),
      payment_method: editingPayment.payment_method,
      status: editingPayment.status,
      notes: editingPayment.notes ?? "",
      add_to_expenses: !!editingPayment.expense_id
    } : {
      amount: defaultAmount ?? null,
      payment_date: dayjs(),
      payment_method: "cash",
      status: "paid",
      notes: "",
      add_to_expenses: true
    }
  });
  const {
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting }
  } = methods;
  watch("add_to_expenses");
  const onSubmit = handleSubmit(async (data) => {
    try {
      const paymentDate = dayjs(data.payment_date).format("YYYY-MM-DD");
      if (isEditing) {
        await updatePayment({
          id: editingPayment.id,
          updates: {
            amount: data.amount,
            payment_date: paymentDate,
            payment_method: data.payment_method,
            status: data.status,
            notes: data.notes || null,
            branch_id: branchId,
            _addToExpenses: !alreadyLinked && data.add_to_expenses,
            _staffName: staffName
          },
          currentPayment: editingPayment
        });
        toast.success("Payment updated!");
      } else {
        const newPayment = await createPayment({
          paymentData: {
            compensation_id: compensationId,
            user_id: staffId,
            branch_id: branchId,
            currency,
            amount: data.amount,
            payment_date: paymentDate,
            payment_method: data.payment_method,
            status: data.status,
            notes: data.notes || null
          },
          addToExpenses: data.add_to_expenses,
          organizationId,
          createdBy: user?.id,
          staffName
        });
        toast.success("Payment recorded!");
        if (newPayment && onPaymentCreated) {
          await onPaymentCreated(newPayment);
        }
      }
      reset();
      onClose?.();
    } catch (err) {
      console.error(err);
      toast.error(isEditing ? "Failed to update payment" : "Failed to record payment");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { sx: { pb: 1 }, children: isEditing ? "Edit Salary Payment" : "Record Salary Payment" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "amount",
            label: "Amount",
            type: "number",
            inputProps: { step: "0.01", min: "0.01" },
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: currency })
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "payment_date", label: "Payment Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "payment_method", label: "Payment Method", children: PAYMENT_METHOD_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "status", label: "Status", children: PAYMENT_STATUS_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "notes", label: "Notes", multiline: true, rows: 3 }),
        alreadyLinked ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:link-bold-duotone", width: 18, sx: { color: "success.main" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "success.main", children: "Linked to expense — amount & date will sync automatically." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Add to Expenses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Creates a matching “Salaries” expense entry" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Checkbox, { name: "add_to_expenses" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { sx: { px: 3, pb: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, disabled: isBusy, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isBusy || isSubmitting, children: isEditing ? "Save Changes" : "Record Payment" })
      ] })
    ] })
  ] });
}
SalaryPaymentFormDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  compensationId: o.string,
  staffId: o.string.isRequired,
  branchId: o.string.isRequired,
  currency: o.string,
  editingPayment: o.object,
  defaultAmount: o.number,
  staffName: o.string,
  onPaymentCreated: o.func
};
export {
  DEFAULT_PAGE_SIZE as D,
  PAYMENT_STATUS_COLORS as P,
  SalaryPaymentFormDialog as S,
  useGetCompensationSummary as a,
  useGetSalaryPayments as b,
  createSalaryPayment as c,
  PAYMENT_METHOD_OPTIONS as d,
  useCheckPeriodPayment as e,
  useGetCommissionHistory as f,
  useEmployeeCompensationMutation as g,
  useGetEmployeeCompensation as u
};
