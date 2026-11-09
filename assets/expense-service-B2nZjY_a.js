import { ad as withMiddleware, ae as IS_REACT_LEGACY, f as r, u as useSWR, af as useSWRConfig, r as reactExports, ag as serialize, ah as mergeObjects, ai as getTimestamp, aj as UNDEFINED, ak as useIsomorphicLayoutEffect, s as supabase, m as mutate } from "./index-B08HRm4A.js";
const startTransition = IS_REACT_LEGACY ? (cb) => {
  cb();
} : r.startTransition;
const useStateWithDeps = (initialState) => {
  const [, rerender] = reactExports.useState({});
  const unmountedRef = reactExports.useRef(false);
  const stateRef = reactExports.useRef(initialState);
  const stateDependenciesRef = reactExports.useRef({
    data: false,
    error: false,
    isValidating: false
  });
  const setState = reactExports.useCallback((payload) => {
    let shouldRerender = false;
    const currentState = stateRef.current;
    for (const key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        const k = key;
        if (currentState[k] !== payload[k]) {
          currentState[k] = payload[k];
          if (stateDependenciesRef.current[k]) {
            shouldRerender = true;
          }
        }
      }
    }
    if (shouldRerender && !unmountedRef.current) {
      rerender({});
    }
  }, []);
  useIsomorphicLayoutEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  });
  return [
    stateRef,
    stateDependenciesRef.current,
    setState
  ];
};
const mutation = () => (key, fetcher, config = {}) => {
  const { mutate: mutate2 } = useSWRConfig();
  const keyRef = reactExports.useRef(key);
  const fetcherRef = reactExports.useRef(fetcher);
  const configRef = reactExports.useRef(config);
  const ditchMutationsUntilRef = reactExports.useRef(0);
  const [stateRef, stateDependencies, setState] = useStateWithDeps({
    data: UNDEFINED,
    error: UNDEFINED,
    isMutating: false
  });
  const currentState = stateRef.current;
  const trigger = reactExports.useCallback(
    async (arg, opts) => {
      const [serializedKey, resolvedKey] = serialize(keyRef.current);
      if (!fetcherRef.current) {
        throw new Error("Can’t trigger the mutation: missing fetcher.");
      }
      if (!serializedKey) {
        throw new Error("Can’t trigger the mutation: missing key.");
      }
      const options = mergeObjects(mergeObjects({
        populateCache: false,
        throwOnError: true
      }, configRef.current), opts);
      const mutationStartedAt = getTimestamp();
      ditchMutationsUntilRef.current = mutationStartedAt;
      setState({
        isMutating: true
      });
      try {
        const data = await mutate2(
          serializedKey,
          fetcherRef.current(resolvedKey, {
            arg
          }),
          // We must throw the error here so we can catch and update the states.
          mergeObjects(options, {
            throwOnError: true
          })
        );
        if (ditchMutationsUntilRef.current <= mutationStartedAt) {
          startTransition(() => setState({
            data,
            isMutating: false,
            error: void 0
          }));
          options.onSuccess == null ? void 0 : options.onSuccess.call(options, data, serializedKey, options);
        }
        return data;
      } catch (error) {
        if (ditchMutationsUntilRef.current <= mutationStartedAt) {
          startTransition(() => setState({
            error,
            isMutating: false
          }));
          options.onError == null ? void 0 : options.onError.call(options, error, serializedKey, options);
          if (options.throwOnError) {
            throw error;
          }
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const reset = reactExports.useCallback(() => {
    ditchMutationsUntilRef.current = getTimestamp();
    setState({
      data: UNDEFINED,
      error: UNDEFINED,
      isMutating: false
    });
  }, []);
  useIsomorphicLayoutEffect(() => {
    keyRef.current = key;
    fetcherRef.current = fetcher;
    configRef.current = config;
  });
  return {
    trigger,
    reset,
    get data() {
      stateDependencies.data = true;
      return currentState.data;
    },
    get error() {
      stateDependencies.error = true;
      return currentState.error;
    },
    get isMutating() {
      stateDependencies.isMutating = true;
      return currentState.isMutating;
    }
  };
};
const useSWRMutation = withMiddleware(useSWR, mutation);
const EXPENSE_PAYMENT_STATUSES = [
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" }
];
const EXPENSE_CATEGORIES = [
  { value: "supplies", label: "Supplies" },
  { value: "rent", label: "Rent" },
  { value: "utilities", label: "Utilities" },
  { value: "equipment", label: "Equipment" },
  { value: "marketing", label: "Marketing" },
  { value: "salaries", label: "Salaries" },
  { value: "insurance", label: "Insurance" },
  { value: "maintenance", label: "Maintenance" },
  { value: "other", label: "Other" }
];
async function getExpenses({
  organizationId,
  branchId,
  startDate,
  endDate,
  category,
  page = 0,
  pageSize = 25
}) {
  let query = supabase.from("expenses").select(
    `
      *,
      branch:branches(name, slug),
      creator:profiles(display_name, first_name, last_name),
      salary_payment:salary_payments!salary_payments_expense_id_fkey(id)
    `
  ).eq("organization_id", organizationId).is("deleted_at", null).order("expense_date", { ascending: false }).order("created_at", { ascending: false }).range(page * pageSize, (page + 1) * pageSize - 1);
  if (branchId) {
    query = query.eq("branch_id", branchId);
  }
  if (startDate) {
    query = query.gte("expense_date", startDate);
  }
  if (endDate) {
    query = query.lte("expense_date", endDate);
  }
  const { data, error, count } = await query;
  if (error) throw error;
  return { data, count };
}
async function createExpense(expenseData) {
  const { data, error } = await supabase.from("expenses").insert([expenseData]).select().single();
  if (error) throw error;
  return data;
}
async function updateExpense(id, updates) {
  const { data, error } = await supabase.from("expenses").update(updates).eq("id", id).select().single();
  if (error) throw error;
  return data;
}
async function deleteExpense(id) {
  const { error } = await supabase.from("expenses").update({ deleted_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id);
  if (error) throw error;
}
function useGetExpenses({
  organizationId,
  branchId,
  startDate,
  endDate,
  category,
  page = 0,
  pageSize = 25,
  enabled = true
}) {
  const key = reactExports.useMemo(() => {
    if (!organizationId || !enabled) return null;
    return ["expenses", organizationId, branchId, startDate, endDate, category, page, pageSize];
  }, [organizationId, branchId, startDate, endDate, category, page, pageSize, enabled]);
  const {
    data,
    error,
    isLoading,
    mutate: mutateSWR
  } = useSWR(key, async () => {
    const result = await getExpenses({
      organizationId,
      branchId,
      startDate,
      endDate,
      category,
      page,
      pageSize
    });
    return result;
  });
  return {
    expenses: data?.data || [],
    totalCount: data?.count || 0,
    expensesLoading: isLoading,
    expensesError: error,
    mutateExpenses: mutateSWR
  };
}
function useCreateExpense() {
  const { trigger, isMutating, error } = useSWRMutation(
    "expenses",
    async (_, { arg }) => createExpense(arg),
    {
      onSuccess: () => {
        mutate((key) => Array.isArray(key) && key[0] === "expenses");
      }
    }
  );
  return {
    createExpense: trigger,
    createExpenseLoading: isMutating,
    createExpenseError: error
  };
}
function useUpdateExpense() {
  const { trigger, isMutating, error } = useSWRMutation(
    "expenses",
    async (_, { arg: { id, updates } }) => updateExpense(id, updates),
    {
      onSuccess: () => {
        mutate((key) => Array.isArray(key) && key[0] === "expenses");
      }
    }
  );
  return {
    updateExpense: trigger,
    updateExpenseLoading: isMutating,
    updateExpenseError: error
  };
}
function useDeleteExpense() {
  const { trigger, isMutating, error } = useSWRMutation(
    "expenses",
    async (_, { arg: id }) => deleteExpense(id),
    {
      onSuccess: () => {
        mutate((key) => Array.isArray(key) && key[0] === "expenses");
      }
    }
  );
  return {
    deleteExpense: trigger,
    deleteExpenseLoading: isMutating,
    deleteExpenseError: error
  };
}
async function fetchExpenseAuditLogs(organizationId, page = 0, pageSize = 25) {
  const from = page * pageSize;
  const to = from + pageSize - 1;
  const { data, error, count } = await supabase.from("audit_logs").select("*, user:profiles!user_id(first_name, last_name)", { count: "exact" }).eq("resource_type", "expense").eq("organization_id", organizationId).order("created_at", { ascending: false }).range(from, to);
  if (error) throw error;
  return { data: data || [], count: count || 0 };
}
function useExpenseAuditLogs(organizationId, page = 0, pageSize = 25) {
  const key = organizationId ? ["expenses:audit", organizationId, page, pageSize] : null;
  const { data, isLoading } = useSWR(
    key,
    () => fetchExpenseAuditLogs(organizationId, page, pageSize)
  );
  return {
    auditLogs: data?.data || [],
    auditLogsTotal: data?.count || 0,
    auditLogsLoading: isLoading
  };
}
async function fetchExpenseTrends({ organizationId, branchId, months }) {
  const { data, error } = await supabase.rpc("get_expense_trends", {
    p_organization_id: organizationId,
    p_branch_id: branchId || null,
    p_months: months
  });
  if (error) throw error;
  return data || [];
}
function useGetExpenseTrends({ organizationId, branchId, months, enabled = true }) {
  const cacheKey = enabled && organizationId ? JSON.stringify(["expense_trends", organizationId, branchId, months]) : null;
  const { data, isLoading, error, isValidating } = useSWR(
    cacheKey,
    () => fetchExpenseTrends({ organizationId, branchId, months }),
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 15e3,
      keepPreviousData: true
    }
  );
  return reactExports.useMemo(
    () => ({
      trendsData: data || [],
      trendsLoading: isLoading,
      trendsError: error,
      trendsValidating: isValidating
    }),
    [data, isLoading, error, isValidating]
  );
}
export {
  EXPENSE_CATEGORIES as E,
  updateExpense as a,
  useExpenseAuditLogs as b,
  createExpense as c,
  useGetExpenseTrends as d,
  useCreateExpense as e,
  useUpdateExpense as f,
  useDeleteExpense as g,
  EXPENSE_PAYMENT_STATUSES as h,
  useGetExpenses as i,
  useSWRMutation as u
};
