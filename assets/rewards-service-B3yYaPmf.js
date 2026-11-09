import { u as useSWR, s as supabase, m as mutate } from "./index-B08HRm4A.js";
const CATALOG_KEY = (orgId) => `rewards-catalog-${orgId}`;
const REDEMPTIONS_KEY = (orgId, clientId, page, pageSize) => `rewards-redemptions-${orgId}-${clientId}-${page}-${pageSize}`;
function useGetRewardsCatalog(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? CATALOG_KEY(organizationId) : null,
    () => fetchCatalog(organizationId)
  );
  return { catalog: data || [], catalogLoading: isLoading, catalogError: error };
}
function useGetRewardRedemptions({
  organizationId,
  clientId = null,
  page = 0,
  pageSize = 20,
  requireClientId = false
}) {
  const { data, error, isLoading } = useSWR(
    organizationId && (!requireClientId || clientId) ? REDEMPTIONS_KEY(organizationId, clientId, page, pageSize) : null,
    () => fetchRedemptions({ organizationId, clientId, page, pageSize })
  );
  return {
    redemptions: data?.data || [],
    totalCount: data?.count || 0,
    redemptionsLoading: isLoading,
    redemptionsError: error
  };
}
async function fetchCatalog(organizationId) {
  const { data, error } = await supabase.from("rewards_catalog").select("*").eq("organization_id", organizationId).eq("is_active", true).order("points_cost", { ascending: true });
  if (error) throw error;
  return data || [];
}
async function fetchRedemptions({ organizationId, clientId, page, pageSize }) {
  let query = supabase.from("reward_redemptions").select(
    `
      *,
      rewards_catalog!reward_id(name, type, points_cost, value),
      client_profiles!client_id(first_name, last_name, client_number)
      `,
    { count: "exact" }
  ).eq("organization_id", organizationId);
  if (clientId) query = query.eq("client_id", clientId);
  query = query.order("created_at", { ascending: false }).range(page * pageSize, page * pageSize + pageSize - 1);
  const { data, error, count } = await query;
  if (error) throw error;
  return { data: data || [], count: count || 0 };
}
async function redeemReward({ organizationId, clientId, rewardId, createdBy }) {
  const { data: reward, error: rErr } = await supabase.from("rewards_catalog").select("*").eq("id", rewardId).eq("is_active", true).maybeSingle();
  if (rErr || !reward) throw new Error("Reward not found or inactive");
  if (reward.stock !== null && reward.stock <= 0) throw new Error("Reward is out of stock");
  const { data: client } = await supabase.from("client_profiles").select("loyalty_points").eq("id", clientId).maybeSingle();
  if ((client?.loyalty_points ?? 0) < reward.points_cost) {
    throw new Error("Insufficient loyalty points");
  }
  const code = _generateCode();
  const expiresAt = /* @__PURE__ */ new Date();
  expiresAt.setDate(expiresAt.getDate() + reward.valid_days);
  const qrData = JSON.stringify({
    code,
    org: organizationId,
    reward: rewardId,
    client: clientId,
    expires: expiresAt.toISOString()
  });
  const { data: redemption, error: redErr } = await supabase.from("reward_redemptions").insert({
    organization_id: organizationId,
    client_id: clientId,
    reward_id: rewardId,
    points_spent: reward.points_cost,
    redeem_code: code,
    qr_data: qrData,
    expires_at: expiresAt.toISOString(),
    issued_by: createdBy
  }).select().single();
  if (redErr) throw redErr;
  const newBalance = (client?.loyalty_points ?? 0) - reward.points_cost;
  await supabase.from("client_profiles").update({ loyalty_points: newBalance }).eq("id", clientId);
  await supabase.from("loyalty_transactions").insert({
    organization_id: organizationId,
    client_id: clientId,
    type: "redeem",
    points: -reward.points_cost,
    balance_after: newBalance,
    reference_id: redemption.id,
    notes: `Redeemed reward: ${reward.name}`,
    created_by: createdBy
  });
  if (reward.stock !== null) {
    await supabase.from("rewards_catalog").update({ stock: reward.stock - 1 }).eq("id", rewardId);
  }
  _invalidate();
  return { ...redemption, reward };
}
async function markRedemptionUsed({ redemptionId, saleId = null, usedBy }) {
  const { data: current, error: fetchErr } = await supabase.from("reward_redemptions").select("use_count, rewards_catalog!reward_id(type, value)").eq("id", redemptionId).eq("status", "active").maybeSingle();
  if (fetchErr) throw fetchErr;
  if (!current) throw new Error("Redemption not found or already used");
  const maxUses = current.rewards_catalog?.value?.max_uses ?? 1;
  const newUseCount = (current.use_count ?? 0) + 1;
  const isExhausted = newUseCount >= maxUses;
  const update = {
    use_count: newUseCount,
    used_in_sale_id: saleId,
    used_by: usedBy,
    ...isExhausted && {
      status: "used",
      used_at: (/* @__PURE__ */ new Date()).toISOString()
    }
  };
  const { data, error } = await supabase.from("reward_redemptions").update(update).eq("id", redemptionId).select().single();
  if (error) throw error;
  mutate((key) => typeof key === "string" && key.startsWith("rewards-"), void 0, {
    revalidate: true
  });
  return data;
}
async function validateRedeemCode(code, organizationId) {
  const { data, error } = await supabase.from("reward_redemptions").select(
    `
      *,
      rewards_catalog!reward_id(name, type, description, value),
      client_profiles!client_id(first_name, last_name, client_number)
      `
  ).eq("redeem_code", code).eq("organization_id", organizationId).maybeSingle();
  if (error) throw error;
  if (!data) throw new Error("Invalid code");
  if (data.status === "used") throw new Error("Code already used");
  if (data.status === "expired" || new Date(data.expires_at) < /* @__PURE__ */ new Date()) {
    throw new Error("Code has expired");
  }
  if (data.status === "cancelled") throw new Error("Code has been cancelled");
  return data;
}
async function saveReward({ id, organizationId, ...fields }) {
  let result;
  if (id) {
    const { data, error } = await supabase.from("rewards_catalog").update({ ...fields, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id).select().single();
    if (error) throw error;
    result = data;
  } else {
    const { data, error } = await supabase.from("rewards_catalog").insert({ organization_id: organizationId, ...fields }).select().single();
    if (error) throw error;
    result = data;
  }
  mutate(CATALOG_KEY(organizationId));
  return result;
}
async function deleteReward(rewardId, organizationId) {
  const { error } = await supabase.from("rewards_catalog").update({ is_active: false }).eq("id", rewardId);
  if (error) throw error;
  mutate(CATALOG_KEY(organizationId));
}
function _generateCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let segment = "";
  for (let i = 0; i < 6; i++) {
    segment += chars[Math.floor(Math.random() * chars.length)];
  }
  return `RW-${segment}`;
}
function _invalidate(organizationId) {
  mutate((key) => typeof key === "string" && key.startsWith("rewards-"), void 0, {
    revalidate: true
  });
  mutate((key) => typeof key === "string" && key.startsWith("loyalty-"), void 0, {
    revalidate: true
  });
}
export {
  useGetRewardRedemptions as a,
  deleteReward as d,
  markRedemptionUsed as m,
  redeemReward as r,
  saveReward as s,
  useGetRewardsCatalog as u,
  validateRedeemCode as v
};
