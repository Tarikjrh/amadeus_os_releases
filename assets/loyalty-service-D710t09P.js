import { u as useSWR, s as supabase, m as mutate } from "./index-B08HRm4A.js";
const PROGRAM_KEY = (orgId) => `loyalty-program-${orgId}`;
const TIERS_KEY = (orgId) => `loyalty-tiers-${orgId}`;
const TRANSACTIONS_KEY = (orgId, clientId, page, pageSize, sortModel, filterModel) => `loyalty-transactions-${orgId}-${clientId}-${page}-${pageSize}-${JSON.stringify(sortModel)}-${JSON.stringify(filterModel)}`;
const CLIENT_BALANCE_KEY = (clientId) => `loyalty-balance-${clientId}`;
function useGetLoyaltyProgram(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? PROGRAM_KEY(organizationId) : null,
    () => fetchLoyaltyProgram(organizationId)
  );
  return { program: data, programLoading: isLoading, programError: error };
}
function useGetLoyaltyTiers(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? TIERS_KEY(organizationId) : null,
    () => fetchLoyaltyTiers(organizationId)
  );
  return { tiers: data || [], tiersLoading: isLoading, tiersError: error };
}
function useGetLoyaltyTransactions({
  organizationId,
  clientId = null,
  page = 0,
  pageSize = 20,
  sortModel = [],
  filterModel = { items: [] }
}) {
  const { data, error, isLoading } = useSWR(
    organizationId ? TRANSACTIONS_KEY(organizationId, clientId ?? "all", page, pageSize, sortModel, filterModel) : null,
    () => fetchLoyaltyTransactions({
      organizationId,
      clientId,
      page,
      pageSize,
      sortModel,
      filterModel
    }),
    { keepPreviousData: true }
  );
  return {
    transactions: data?.data || [],
    totalCount: data?.count || 0,
    transactionsLoading: isLoading,
    transactionsError: error
  };
}
function useGetClientLoyaltyBalance(clientId) {
  const { data, error, isLoading } = useSWR(
    clientId ? CLIENT_BALANCE_KEY(clientId) : null,
    () => fetchClientLoyaltyBalance(clientId)
  );
  return { balance: data, balanceLoading: isLoading, balanceError: error };
}
async function fetchLoyaltyProgram(organizationId) {
  const { data, error } = await supabase.from("loyalty_programs").select("*").eq("organization_id", organizationId).maybeSingle();
  if (error) throw error;
  return data;
}
async function fetchLoyaltyTiers(organizationId) {
  const { data: program } = await supabase.from("loyalty_programs").select("id").eq("organization_id", organizationId).maybeSingle();
  if (!program) return [];
  const { data, error } = await supabase.from("loyalty_tiers").select("*").eq("program_id", program.id).is("deleted_at", null).order("min_points", { ascending: true });
  if (error) throw error;
  return data || [];
}
async function fetchLoyaltyTransactions({
  organizationId,
  clientId,
  page,
  pageSize,
  sortModel = [],
  filterModel = { items: [] }
}) {
  let query = supabase.from("loyalty_transactions").select(
    `
      *,
      client_profiles!client_id(first_name, last_name, client_number),
      profiles!created_by(first_name, last_name)
      `,
    { count: "exact" }
  ).eq("organization_id", organizationId);
  if (clientId) query = query.eq("client_id", clientId);
  if (filterModel?.items?.length) {
    for (const item of filterModel.items) {
      const { field, operator, value } = item;
      if (field === "client") continue;
      if ((value === void 0 || value === null || value === "") && operator !== "isEmpty" && operator !== "isNotEmpty")
        continue;
      switch (operator) {
        case "contains":
          query = query.ilike(field, `%${value}%`);
          break;
        case "equals":
        case "=":
          query = query.eq(field, value);
          break;
        case "!=":
          query = query.neq(field, value);
          break;
        case ">":
          query = query.gt(field, value);
          break;
        case ">=":
          query = query.gte(field, value);
          break;
        case "<":
          query = query.lt(field, value);
          break;
        case "<=":
          query = query.lte(field, value);
          break;
        case "startsWith":
          query = query.ilike(field, `${value}%`);
          break;
        case "endsWith":
          query = query.ilike(field, `%${value}`);
          break;
        case "isEmpty":
          query = query.is(field, null);
          break;
        case "isNotEmpty":
          query = query.not(field, "is", null);
          break;
        case "isAnyOf":
          if (Array.isArray(value) && value.length) query = query.in(field, value);
          break;
      }
    }
  }
  if (filterModel?.quickFilterValues?.length) {
    for (const term of filterModel.quickFilterValues) {
      if (term.trim()) {
        query = query.or(`type.ilike.%${term}%,notes.ilike.%${term}%`);
      }
    }
  }
  if (sortModel?.length) {
    for (const { field, sort } of sortModel) {
      query = query.order(field, { ascending: sort === "asc" });
    }
  } else {
    query = query.order("created_at", { ascending: false });
  }
  query = query.range(page * pageSize, page * pageSize + pageSize - 1);
  const { data, error, count } = await query;
  if (error) throw error;
  return { data: data || [], count: count || 0 };
}
async function fetchClientLoyaltyBalance(clientId) {
  const { data, error } = await supabase.from("client_profiles").select(
    `
      loyalty_points,
      loyalty_tier_id,
      loyalty_points_expiry,
      loyalty_tiers!loyalty_tier_id(name, color, icon, multiplier)
      `
  ).eq("id", clientId).maybeSingle();
  if (error) throw error;
  return data;
}
async function earnPointsFromSale({
  organizationId,
  clientId,
  saleId,
  totalAmount,
  createdBy
}) {
  const { data: program, error: progErr } = await supabase.from("loyalty_programs").select("id, points_per_usd, is_active").eq("organization_id", organizationId).maybeSingle();
  if (progErr || !program?.is_active) return null;
  const { count: priorSaleCount } = await supabase.from("loyalty_transactions").select("id", { count: "exact", head: true }).eq("organization_id", organizationId).eq("client_id", clientId).eq("type", "earn_sale");
  const isFirstSale = (priorSaleCount ?? 0) === 0;
  const { data: client } = await supabase.from("client_profiles").select("loyalty_points, loyalty_tier_id, loyalty_tiers!loyalty_tier_id(multiplier)").eq("id", clientId).maybeSingle();
  const multiplier = client?.loyalty_tiers?.multiplier ?? 1;
  const currentBalance = client?.loyalty_points ?? 0;
  const pointsEarned = Math.floor(totalAmount * program.points_per_usd * multiplier);
  if (pointsEarned <= 0) return null;
  const newBalance = currentBalance + pointsEarned;
  const { data: tx, error: txErr } = await supabase.from("loyalty_transactions").insert({
    organization_id: organizationId,
    client_id: clientId,
    type: "earn_sale",
    points: pointsEarned,
    balance_after: newBalance,
    reference_id: saleId,
    notes: `Earned from sale`,
    created_by: createdBy
  }).select().single();
  if (txErr) throw txErr;
  await _updateClientPointsAndTier({ clientId, newBalance, programId: program.id });
  if (isFirstSale) {
    applyBonusPoints({
      organizationId,
      clientId,
      bonusType: "first_visit",
      referenceId: saleId,
      createdBy
    }).catch(() => {
    });
  }
  _invalidate(organizationId, clientId);
  return tx;
}
async function applyBonusPoints({
  organizationId,
  clientId,
  bonusType,
  referenceId = null,
  createdBy
} = {}) {
  const { data: program } = await supabase.from("loyalty_programs").select("id, settings, is_active").eq("organization_id", organizationId).maybeSingle();
  if (!program?.is_active) return null;
  const bonusMap = {
    birthday: "earn_birthday",
    first_visit: "earn_first_visit",
    referral: "earn_referral"
  };
  const settingsMap = {
    birthday: "birthday_bonus",
    first_visit: "first_visit_bonus",
    referral: "referral_bonus"
  };
  const txType = bonusMap[bonusType];
  const bonusPoints = program.settings?.[settingsMap[bonusType]] ?? 0;
  if (!txType || bonusPoints <= 0) return null;
  const { data: client } = await supabase.from("client_profiles").select("loyalty_points").eq("id", clientId).maybeSingle();
  const currentBalance = client?.loyalty_points ?? 0;
  const newBalance = currentBalance + bonusPoints;
  const { data: tx, error } = await supabase.from("loyalty_transactions").insert({
    organization_id: organizationId,
    client_id: clientId,
    type: txType,
    points: bonusPoints,
    balance_after: newBalance,
    reference_id: referenceId,
    notes: `Bonus: ${bonusType}`,
    created_by: createdBy
  }).select().single();
  if (error) throw error;
  await _updateClientPointsAndTier({ clientId, newBalance, programId: program.id });
  _invalidate(organizationId, clientId);
  return tx;
}
async function saveLoyaltyProgram({ organizationId, ...fields }) {
  const { data: existing } = await supabase.from("loyalty_programs").select("id").eq("organization_id", organizationId).maybeSingle();
  let result;
  if (existing) {
    const { data, error } = await supabase.from("loyalty_programs").update({ ...fields, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", existing.id).select().single();
    if (error) throw error;
    result = data;
  } else {
    const { data, error } = await supabase.from("loyalty_programs").insert({ organization_id: organizationId, ...fields }).select().single();
    if (error) throw error;
    result = data;
  }
  mutate(PROGRAM_KEY(organizationId));
  return result;
}
async function saveLoyaltyTier({ id, programId, organizationId, ...fields }) {
  let result;
  if (id) {
    const { data, error } = await supabase.from("loyalty_tiers").update({ ...fields, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id).select().single();
    if (error) throw error;
    result = data;
  } else {
    const { data, error } = await supabase.from("loyalty_tiers").insert({ program_id: programId, ...fields }).select().single();
    if (error) throw error;
    result = data;
  }
  mutate(TIERS_KEY(organizationId));
  return result;
}
async function deleteLoyaltyTier(tierId, organizationId) {
  const { error } = await supabase.from("loyalty_tiers").update({ deleted_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", tierId);
  if (error) throw error;
  mutate(TIERS_KEY(organizationId));
}
async function _updateClientPointsAndTier({ clientId, newBalance, programId }) {
  const { data: tiers } = await supabase.from("loyalty_tiers").select("id, min_points").eq("program_id", programId).is("deleted_at", null).order("min_points", { ascending: false });
  const matchedTier = tiers?.find((t) => newBalance >= t.min_points);
  await supabase.from("client_profiles").update({
    loyalty_points: newBalance,
    ...matchedTier ? { loyalty_tier_id: matchedTier.id } : {}
  }).eq("id", clientId);
}
function _invalidate(organizationId, clientId) {
  mutate((key) => typeof key === "string" && key.startsWith("loyalty-"), void 0, {
    revalidate: true
  });
  if (clientId) {
    mutate(CLIENT_BALANCE_KEY(clientId));
  }
}
export {
  applyBonusPoints as a,
  useGetLoyaltyProgram as b,
  saveLoyaltyProgram as c,
  useGetLoyaltyTransactions as d,
  deleteLoyaltyTier as e,
  earnPointsFromSale as f,
  useGetClientLoyaltyBalance as g,
  saveLoyaltyTier as s,
  useGetLoyaltyTiers as u
};
