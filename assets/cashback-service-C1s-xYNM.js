import { u as useSWR, s as supabase, m as mutate } from "./index-B08HRm4A.js";
const PROGRAM_KEY = (orgId) => `cashback-program-${orgId}`;
const RULES_KEY = (orgId) => `cashback-rules-${orgId}`;
const WALLET_KEY = (clientId) => `cashback-wallet-${clientId}`;
const WALLETS_KEY = (params) => JSON.stringify(["cashback-wallets", ...params]);
function useGetCashbackProgram(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? PROGRAM_KEY(organizationId) : null,
    () => fetchCashbackProgram(organizationId)
  );
  return { program: data, programLoading: isLoading, programError: error };
}
function useGetCashbackRules(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? RULES_KEY(organizationId) : null,
    () => fetchCashbackRules(organizationId)
  );
  return { rules: data || [], rulesLoading: isLoading, rulesError: error };
}
function useGetClientCashbackWallet(clientId) {
  const { data, error, isLoading } = useSWR(
    clientId ? WALLET_KEY(clientId) : null,
    () => fetchClientWallet(clientId)
  );
  return { wallet: data, walletLoading: isLoading, walletError: error };
}
function useGetCashbackWallets({
  organizationId,
  page = 0,
  pageSize = 20,
  searchQuery = "",
  filterItems = [],
  orderBy = "balance",
  order = "desc"
}) {
  const cacheKey = organizationId ? WALLETS_KEY([organizationId, page, pageSize, searchQuery, orderBy, order, filterItems]) : null;
  const { data, error, isLoading } = useSWR(
    cacheKey,
    () => fetchAllWallets({ organizationId, page, pageSize, searchQuery, filterItems, orderBy, order })
  );
  return {
    wallets: data?.data || [],
    totalCount: data?.count || 0,
    walletsLoading: isLoading,
    walletsError: error
  };
}
async function fetchCashbackProgram(organizationId) {
  const { data, error } = await supabase.from("cashback_programs").select("*").eq("organization_id", organizationId).maybeSingle();
  if (error) throw error;
  return data;
}
async function fetchCashbackRules(organizationId) {
  const { data: program } = await supabase.from("cashback_programs").select("id").eq("organization_id", organizationId).maybeSingle();
  if (!program) return [];
  const { data, error } = await supabase.from("cashback_rules").select("*").eq("program_id", program.id).order("category", { ascending: true });
  if (error) throw error;
  return data || [];
}
async function fetchClientWallet(clientId) {
  const { data, error } = await supabase.from("cashback_wallets").select(
    `
      *,
      client_profiles!client_id(first_name, last_name, client_number, phone_primary)
      `
  ).eq("client_id", clientId).maybeSingle();
  if (error) throw error;
  return data;
}
async function fetchAllWallets({
  organizationId,
  page,
  pageSize,
  searchQuery = "",
  filterItems = [],
  orderBy = "balance",
  order = "desc"
}) {
  let query = supabase.from("cashback_wallets").select(
    `
      *,
      client_profiles!client_id!inner(first_name, last_name, client_number, phone_primary)
      `,
    { count: "exact" }
  ).eq("organization_id", organizationId);
  if (searchQuery) {
    const term = searchQuery.trim();
    query = query.or(
      `first_name.ilike.%${term}%,last_name.ilike.%${term}%,client_number.ilike.%${term}%`,
      { referencedTable: "client_profiles" }
    );
  }
  if (filterItems && filterItems.length > 0) {
    for (const item of filterItems) {
      const { field, operator, value } = item;
      if (value === void 0 || value === null || value === "") continue;
      if (["balance", "total_earned", "total_redeemed"].includes(field)) {
        const num = Number(value);
        if (operator === "=") query = query.eq(field, num);
        else if (operator === "!=") query = query.neq(field, num);
        else if (operator === ">") query = query.gt(field, num);
        else if (operator === ">=") query = query.gte(field, num);
        else if (operator === "<") query = query.lt(field, num);
        else if (operator === "<=") query = query.lte(field, num);
      } else if (field === "updated_at") {
        const dateValue = value instanceof Date ? value.toISOString() : value;
        if (operator === "is") query = query.eq(field, dateValue);
        else if (operator === "after") query = query.gt(field, dateValue);
        else if (operator === "onOrAfter") query = query.gte(field, dateValue);
        else if (operator === "before") query = query.lt(field, dateValue);
        else if (operator === "onOrBefore") query = query.lte(field, dateValue);
      }
    }
  }
  const sortableColumns = ["balance", "total_earned", "total_redeemed", "updated_at"];
  const resolvedOrderBy = sortableColumns.includes(orderBy) ? orderBy : "balance";
  query = query.order(resolvedOrderBy, { ascending: order === "asc" });
  query = query.range(page * pageSize, page * pageSize + pageSize - 1);
  const { data, error, count } = await query;
  if (error) throw error;
  return { data: data || [], count: count || 0 };
}
async function creditCashbackFromSale({
  organizationId,
  clientId,
  saleId,
  saleItems = [],
  createdBy
}) {
  const { data: program } = await supabase.from("cashback_programs").select("id, is_active, credit_timing, expiry_days").eq("organization_id", organizationId).maybeSingle();
  if (!program?.is_active) return null;
  const { data: rules } = await supabase.from("cashback_rules").select("category, cashback_percentage").eq("program_id", program.id).eq("is_active", true);
  if (!rules?.length) return null;
  const ruleMap = Object.fromEntries(rules.map((r) => [r.category, r.cashback_percentage]));
  let cashbackAmount = 0;
  saleItems.forEach((item) => {
    if (item.item_type === "addon") return;
    const category = item.item_type === "service" ? item.service_category : item.product_category;
    const pct = ruleMap[category] ?? ruleMap["all"] ?? 0;
    const lineTotal = item.line_total ?? item.unit_price * (item.quantity ?? 1) - (item.discount_amount ?? 0);
    cashbackAmount += lineTotal * pct / 100;
  });
  cashbackAmount = Math.round(cashbackAmount * 100) / 100;
  if (cashbackAmount <= 0) return null;
  const wallet = await _ensureWallet(organizationId, clientId);
  const newBalance = wallet.balance + cashbackAmount;
  const expiresAt = /* @__PURE__ */ new Date();
  expiresAt.setDate(expiresAt.getDate() + program.expiry_days);
  const { data: tx, error } = await supabase.from("cashback_transactions").insert({
    wallet_id: wallet.id,
    organization_id: organizationId,
    type: "earn",
    amount: cashbackAmount,
    balance_after: newBalance,
    sale_id: saleId,
    status: program.credit_timing === "instant" ? "confirmed" : "pending",
    expires_at: expiresAt.toISOString(),
    created_by: createdBy,
    notes: `Cashback from sale`
  }).select().single();
  if (error) throw error;
  if (program.credit_timing === "instant") {
    await supabase.from("cashback_wallets").update({ balance: newBalance, total_earned: wallet.total_earned + cashbackAmount }).eq("id", wallet.id);
  }
  _invalidate(organizationId, clientId, wallet.id);
  return tx;
}
async function redeemCashback({
  organizationId,
  clientId,
  amount,
  saleId = null,
  createdBy
}) {
  const wallet = await _ensureWallet(organizationId, clientId);
  const { data: program } = await supabase.from("cashback_programs").select("min_redemption_amount, allowed_uses").eq("organization_id", organizationId).maybeSingle();
  if (amount < (program?.min_redemption_amount ?? 0)) {
    throw new Error(`Minimum redemption amount is ${program?.min_redemption_amount}`);
  }
  if (amount > wallet.balance) throw new Error("Insufficient cashback balance");
  const newBalance = wallet.balance - amount;
  const { data: tx, error } = await supabase.from("cashback_transactions").insert({
    wallet_id: wallet.id,
    organization_id: organizationId,
    type: "redeem",
    amount: -amount,
    balance_after: newBalance,
    sale_id: saleId,
    status: "confirmed",
    notes: "Cashback redeemed",
    created_by: createdBy
  }).select().single();
  if (error) throw error;
  await supabase.from("cashback_wallets").update({ balance: newBalance, total_redeemed: wallet.total_redeemed + amount }).eq("id", wallet.id);
  _invalidate(organizationId, clientId, wallet.id);
  return tx;
}
async function saveCashbackProgram({ organizationId, ...fields }) {
  const { data: existing } = await supabase.from("cashback_programs").select("id").eq("organization_id", organizationId).maybeSingle();
  let result;
  if (existing) {
    const { data, error } = await supabase.from("cashback_programs").update({ ...fields, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", existing.id).select().single();
    if (error) throw error;
    result = data;
  } else {
    const { data, error } = await supabase.from("cashback_programs").insert({ organization_id: organizationId, ...fields }).select().single();
    if (error) throw error;
    result = data;
  }
  mutate(PROGRAM_KEY(organizationId));
  return result;
}
async function saveCashbackRule({ id, programId, organizationId, ...fields }) {
  let result;
  if (id) {
    const { data, error } = await supabase.from("cashback_rules").update({ ...fields }).eq("id", id).select().single();
    if (error) throw error;
    result = data;
  } else {
    const { data, error } = await supabase.from("cashback_rules").insert({ program_id: programId, ...fields }).select().single();
    if (error) throw error;
    result = data;
  }
  mutate(RULES_KEY(organizationId));
  return result;
}
async function deleteCashbackRule(ruleId, organizationId) {
  const { error } = await supabase.from("cashback_rules").delete().eq("id", ruleId);
  if (error) throw error;
  mutate(RULES_KEY(organizationId));
}
async function _ensureWallet(organizationId, clientId) {
  const { data: existing } = await supabase.from("cashback_wallets").select("*").eq("organization_id", organizationId).eq("client_id", clientId).maybeSingle();
  if (existing) return existing;
  const { data: created, error } = await supabase.from("cashback_wallets").insert({ organization_id: organizationId, client_id: clientId }).select().single();
  if (error) throw error;
  return created;
}
function _invalidate(organizationId, clientId, walletId) {
  mutate((key) => typeof key === "string" && key.startsWith("cashback-"), void 0, {
    revalidate: true
  });
}
export {
  saveCashbackProgram as a,
  useGetCashbackRules as b,
  useGetCashbackWallets as c,
  deleteCashbackRule as d,
  useGetClientCashbackWallet as e,
  creditCashbackFromSale as f,
  redeemCashback as r,
  saveCashbackRule as s,
  useGetCashbackProgram as u
};
