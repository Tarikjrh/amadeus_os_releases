import { u as useSWR, r as reactExports, s as supabase } from "./index-B08HRm4A.js";
const swrOptions = {
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  dedupingInterval: 15e3,
  keepPreviousData: true
};
async function fetchIncomeSummary({ branchIds, organizationId, startDate, endDate }) {
  const [summaryRes, cashbackRes, depositsRes] = await Promise.all([
    supabase.rpc("get_income_summary", {
      p_branch_ids: branchIds,
      p_start_date: startDate,
      p_end_date: endDate
    }),
    supabase.rpc("get_income_cashback", {
      p_organization_id: organizationId,
      p_start_date: startDate,
      p_end_date: endDate
    }),
    supabase.rpc("get_income_deposits", {
      p_branch_ids: branchIds,
      p_start_date: startDate,
      p_end_date: endDate
    })
  ]);
  if (summaryRes.error) throw summaryRes.error;
  const raw = summaryRes.data;
  const cashbackTx = cashbackRes.data || [];
  const depositRecords = depositsRes.data || [];
  const cashbackRedeemed = cashbackTx.reduce((sum, tx) => sum + Math.abs(tx.amount || 0), 0);
  const s = raw.summary;
  const summary = {
    totalCollected: s.totalCollected,
    pendingAmount: s.pendingAmount,
    refundedAmount: s.refundedAmount,
    grossRevenue: s.grossRevenue,
    totalDiscounts: s.totalDiscountCodes + s.totalVouchers + s.totalManualDiscounts + cashbackRedeemed,
    totalTax: s.totalTax,
    totalPaid: s.totalPaid,
    outstandingBalance: s.outstandingBalance,
    completedCount: s.completedCount,
    pendingCount: s.pendingCount,
    refundedCount: s.refundedCount,
    cancelledCount: s.cancelledCount,
    totalSales: s.totalSales
  };
  const bySourceRaw = raw.bySource || {};
  const bySource = {
    services: bySourceRaw.service || 0,
    products: bySourceRaw.product || 0,
    packages: bySourceRaw.package || 0,
    discountPlans: bySourceRaw.discount_plan_unused_revenue || 0
  };
  const byPaymentMethod = raw.byPaymentMethod || {};
  const discounts = {
    discountCodes: s.totalDiscountCodes,
    discountCodeCount: s.discountCodeCount,
    vouchers: s.totalVouchers,
    voucherCount: s.voucherCount,
    manualDiscounts: s.totalManualDiscounts,
    manualDiscountCount: s.manualDiscountCount,
    cashbackRedeemed,
    cashbackCount: cashbackTx.length
  };
  const dailyData = raw.dailyData || [];
  const depositSummary = {
    held: 0,
    applied: 0,
    refunded: 0,
    forfeited: 0,
    heldCount: 0,
    appliedCount: 0,
    refundedCount: 0,
    forfeitedCount: 0,
    totalCollected: 0
  };
  depositRecords.forEach((d) => {
    const amt = parseFloat(d.amount || 0);
    switch (d.status) {
      case "held":
        depositSummary.held += amt;
        depositSummary.heldCount++;
        break;
      case "applied":
        depositSummary.applied += amt;
        depositSummary.appliedCount++;
        break;
      case "refunded":
        depositSummary.refunded += amt;
        depositSummary.refundedCount++;
        break;
      case "forfeited":
        depositSummary.forfeited += amt;
        depositSummary.forfeitedCount++;
        break;
    }
  });
  depositSummary.totalCollected = depositSummary.held + depositSummary.applied + depositSummary.forfeited;
  return {
    summary,
    bySource,
    byPaymentMethod,
    discounts,
    dailyData,
    deposits: depositSummary,
    depositRecords
  };
}
function useGetIncomeSummary({ branchIds, organizationId, startDate, endDate }) {
  const cacheKey = branchIds?.length && organizationId ? JSON.stringify(["income_summary", branchIds, organizationId, startDate, endDate]) : null;
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: refetch
  } = useSWR(
    cacheKey,
    () => fetchIncomeSummary({ branchIds, organizationId, startDate, endDate }),
    swrOptions
  );
  return reactExports.useMemo(
    () => ({
      incomeData: data || null,
      incomeLoading: isLoading,
      incomeError: error,
      incomeValidating: isValidating,
      refetch
    }),
    [data, isLoading, error, isValidating, refetch]
  );
}
async function fetchIncomeTransactions({
  branchIds,
  startDate,
  endDate,
  status,
  saleNumber,
  clientSearch,
  totalMin,
  totalMax,
  subtotalMin,
  subtotalMax,
  sortField,
  sortOrder,
  page,
  pageSize
}) {
  const { data, error } = await supabase.rpc("get_income_transactions", {
    p_branch_ids: branchIds,
    p_start_date: startDate,
    p_end_date: endDate,
    p_status: status || null,
    p_sale_number: saleNumber || null,
    p_client_search: clientSearch || null,
    p_total_min: totalMin ?? null,
    p_total_max: totalMax ?? null,
    p_subtotal_min: subtotalMin ?? null,
    p_subtotal_max: subtotalMax ?? null,
    p_sort_field: sortField,
    p_sort_order: sortOrder,
    p_page: page,
    p_page_size: pageSize
  });
  if (error) throw error;
  return data || { sales: [], total_count: 0 };
}
function useGetIncomeTransactions({
  branchIds,
  startDate,
  endDate,
  status,
  saleNumber,
  clientSearch,
  totalMin,
  totalMax,
  subtotalMin,
  subtotalMax,
  sortField,
  sortOrder,
  page,
  pageSize,
  enabled = true
}) {
  const cacheKey = enabled && branchIds?.length ? JSON.stringify([
    "income_transactions",
    branchIds,
    startDate,
    endDate,
    status,
    saleNumber,
    clientSearch,
    totalMin,
    totalMax,
    subtotalMin,
    subtotalMax,
    sortField,
    sortOrder,
    page,
    pageSize
  ]) : null;
  const { data, isLoading, error, isValidating } = useSWR(
    cacheKey,
    () => fetchIncomeTransactions({
      branchIds,
      startDate,
      endDate,
      status,
      saleNumber,
      clientSearch,
      totalMin,
      totalMax,
      subtotalMin,
      subtotalMax,
      sortField,
      sortOrder,
      page,
      pageSize
    }),
    swrOptions
  );
  return reactExports.useMemo(
    () => ({
      transactions: data?.sales || [],
      transactionCount: data?.total_count ?? 0,
      transactionsLoading: isLoading,
      transactionsError: error,
      transactionsValidating: isValidating
    }),
    [data, isLoading, error, isValidating]
  );
}
async function fetchIncomeTrends({ branchIds, months }) {
  const { data, error } = await supabase.rpc("get_income_trends", {
    p_branch_ids: branchIds,
    p_months: months
  });
  if (error) throw error;
  return data || [];
}
function useGetIncomeTrends({ branchIds, months, enabled = true }) {
  const cacheKey = enabled && branchIds?.length ? JSON.stringify(["income_trends", branchIds, months]) : null;
  const { data, isLoading, error, isValidating } = useSWR(
    cacheKey,
    () => fetchIncomeTrends({ branchIds, months }),
    swrOptions
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
  useGetIncomeTransactions as a,
  useGetIncomeTrends as b,
  useGetIncomeSummary as u
};
