import { u as useSWR, s as supabase, m as mutate } from "./index-B08HRm4A.js";
const TEMPLATES_KEY = (orgId) => `discount-plan-templates-${orgId}`;
const TEMPLATES_SERVER_KEY = (orgId, params) => `discount-plan-templates-server-${orgId}-${JSON.stringify(params)}`;
const CLIENT_PLANS_KEY = (clientId) => `client-discount-plans-${clientId}`;
const USAGES_KEY = (planId) => `discount-plan-usages-${planId}`;
const ALL_PLANS_SERVER_KEY = (orgId, params) => `all-client-discount-plans-server-${orgId}-${JSON.stringify(params)}`;
const STAFF_PLAN_COMMISSIONS_KEY = (staffId, start, end) => `staff-plan-commissions-${staffId}-${start}-${end}`;
const PLAN_DEPOSITS_KEY = (orgId, branchIds, start, end) => `plan-deposits-${orgId}-${JSON.stringify(branchIds)}-${start}-${end}`;
const templatesOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  keepPreviousData: true
};
function toFirstOfMonth(d) {
  const date = d ? new Date(d) : /* @__PURE__ */ new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-01`;
}
function useGetDiscountPlanTemplates(organizationId) {
  const { data, error, isLoading } = useSWR(
    organizationId ? TEMPLATES_KEY(organizationId) : null,
    () => fetchDiscountPlanTemplates(organizationId),
    templatesOptions
  );
  return {
    templates: data || [],
    templatesLoading: isLoading,
    templatesError: error
  };
}
function useGetDiscountPlanTemplatesServer(organizationId, params) {
  const { data, error, isLoading } = useSWR(
    organizationId ? TEMPLATES_SERVER_KEY(organizationId, params) : null,
    () => fetchDiscountPlanTemplatesServer(organizationId, params)
  );
  return {
    templates: data?.rows || [],
    templatesTotal: data?.total || 0,
    templatesLoading: isLoading,
    templatesError: error
  };
}
function useGetClientDiscountPlans(clientId, { onlyActive = false } = {}) {
  const cacheKey = clientId ? `${CLIENT_PLANS_KEY(clientId)}-${onlyActive}` : null;
  const { data, error, isLoading } = useSWR(
    cacheKey,
    () => fetchClientDiscountPlans(clientId, { onlyActive })
  );
  return {
    clientPlans: data || [],
    clientPlansLoading: isLoading,
    clientPlansError: error
  };
}
function useGetAllClientDiscountPlansServer(organizationId, params) {
  const { data, error, isLoading } = useSWR(
    organizationId ? ALL_PLANS_SERVER_KEY(organizationId, params) : null,
    () => fetchAllClientDiscountPlansServer(organizationId, params)
  );
  return {
    allPlans: data?.rows || [],
    allPlansTotal: data?.total || 0,
    allPlansLoading: isLoading,
    allPlansError: error
  };
}
function useGetDiscountPlanUsages(clientPlanId) {
  const { data, error, isLoading } = useSWR(
    clientPlanId ? USAGES_KEY(clientPlanId) : null,
    () => fetchDiscountPlanUsages(clientPlanId)
  );
  return {
    usages: data || [],
    usagesLoading: isLoading,
    usagesError: error
  };
}
function useGetStaffDiscountPlanCommissions(staffId, startDate, endDate) {
  const { data, error, isLoading } = useSWR(
    staffId && startDate && endDate ? STAFF_PLAN_COMMISSIONS_KEY(staffId, startDate, endDate) : null,
    () => fetchStaffDiscountPlanCommissions(staffId, startDate, endDate)
  );
  return {
    planUsages: data || [],
    planUsagesLoading: isLoading,
    planUsagesError: error
  };
}
function useGetClientDiscountPlanDeposits(organizationId, branchIds, startDate, endDate) {
  const { data, error, isLoading } = useSWR(
    organizationId && branchIds?.length && startDate && endDate ? PLAN_DEPOSITS_KEY(organizationId, branchIds, startDate, endDate) : null,
    () => fetchClientDiscountPlanDeposits(organizationId, branchIds, startDate, endDate)
  );
  return {
    planDeposits: data || [],
    planDepositsLoading: isLoading,
    planDepositsError: error
  };
}
async function fetchDiscountPlanTemplates(organizationId) {
  const { data, error } = await supabase.from("discount_plan_templates").select("*").eq("organization_id", organizationId).eq("is_active", true).order("display_order", { ascending: true });
  if (error) throw error;
  return data || [];
}
async function fetchDiscountPlanTemplatesServer(organizationId, { paginationModel, sortModel, filterModel }) {
  const { page, pageSize } = paginationModel;
  const from = page * pageSize;
  const to = from + pageSize - 1;
  let query = supabase.from("discount_plan_templates").select("*", { count: "exact" }).eq("organization_id", organizationId);
  if (filterModel?.items?.length) {
    for (const item of filterModel.items) {
      const { field, operator, value } = item;
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
        case "is":
          query = query.eq(field, value === "true" || value === true);
          break;
      }
    }
  }
  if (filterModel?.quickFilterValues?.length) {
    for (const term of filterModel.quickFilterValues) {
      if (term.trim()) {
        query = query.or(`name.ilike.%${term}%,description.ilike.%${term}%`);
      }
    }
  }
  if (sortModel?.length) {
    for (const { field, sort } of sortModel) {
      query = query.order(field, { ascending: sort === "asc" });
    }
  } else {
    query = query.order("display_order", { ascending: true });
  }
  query = query.range(from, to);
  const { data, error, count } = await query;
  if (error) throw error;
  const rows = data || [];
  const allServiceIds = [...new Set(rows.flatMap((r) => r.service_ids || []))];
  if (allServiceIds.length) {
    const { data: svcData } = await supabase.from("services").select("id, name").in("id", allServiceIds);
    const svcMap = Object.fromEntries((svcData || []).map((s) => [s.id, s]));
    rows.forEach((row) => {
      row.services = (row.service_ids || []).map((id) => svcMap[id]).filter(Boolean);
    });
  } else {
    rows.forEach((row) => {
      row.services = [];
    });
  }
  return { rows, total: count || 0 };
}
async function fetchClientDiscountPlans(clientId, { onlyActive = false } = {}) {
  let query = supabase.from("client_discount_plans").select(
    `
      *,
      discount_plan_templates (id, name, description, service_ids, service_discounts, service_max_uses, price, currency, color),
      branches (id, name)
    `
  ).eq("client_id", clientId).order("valid_month", { ascending: false });
  if (onlyActive) query = query.eq("status", "active");
  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}
async function fetchAllClientDiscountPlansServer(organizationId, { month, paginationModel, sortModel, filterModel, clientSearch }) {
  const { page, pageSize } = paginationModel;
  const from = page * pageSize;
  const to = from + pageSize - 1;
  const JOINED_FIELDS = { client: "client_profiles", plan: "discount_plan_templates" };
  let query = supabase.from("client_discount_plans").select(
    `
      *,
      discount_plan_templates (id, name, description, color, service_max_uses, service_ids, service_discounts),
      client_profiles (id, first_name, last_name, email, phone_primary),
      branches (id, name)
    `,
    { count: "exact" }
  ).eq("organization_id", organizationId);
  if (month) query = query.eq("valid_month", month);
  if (clientSearch?.trim()) {
    const term = clientSearch.trim();
    const spaceIndex = term.indexOf(" ");
    let clientQuery = supabase.from("client_profiles").select("id");
    if (spaceIndex !== -1) {
      clientQuery = clientQuery.ilike("first_name", `%${term.slice(0, spaceIndex)}%`).ilike("last_name", `%${term.slice(spaceIndex + 1)}%`);
    } else {
      clientQuery = clientQuery.or(`first_name.ilike.%${term}%,last_name.ilike.%${term}%`);
    }
    const { data: matchingClients, error: clientErr } = await clientQuery;
    if (clientErr) throw clientErr;
    if (!matchingClients?.length) return { rows: [], total: 0 };
    query = query.in(
      "client_id",
      matchingClients.map((c) => c.id)
    );
  }
  if (filterModel?.items?.length) {
    for (const item of filterModel.items) {
      const { field, operator, value } = item;
      if (field in JOINED_FIELDS) continue;
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
        case "isEmpty":
          query = query.is(field, null);
          break;
        case "isNotEmpty":
          query = query.not(field, "is", null);
          break;
        case "is":
          query = query.eq(field, value === "true" || value === true);
          break;
      }
    }
  }
  if (filterModel?.quickFilterValues?.length) {
    for (const term of filterModel.quickFilterValues) {
      if (term.trim()) {
        const { data: matchingClients } = await supabase.from("client_profiles").select("id").or(`first_name.ilike.%${term}%,last_name.ilike.%${term}%`);
        if (matchingClients?.length) {
          query = query.in(
            "client_id",
            matchingClients.map((c) => c.id)
          );
        }
      }
    }
  }
  if (sortModel?.length) {
    for (const { field, sort } of sortModel) {
      const ascending = sort === "asc";
      if (field === "client_id") {
        query = query.order("client_profiles(first_name)", { ascending });
      } else if (field === "template_id") {
        query = query.order("discount_plan_templates(name)", { ascending });
      } else {
        query = query.order(field, { ascending });
      }
    }
  } else {
    query = query.order("created_at", { ascending: false });
  }
  query = query.range(from, to);
  const { data, error, count } = await query;
  if (error) throw error;
  return { rows: data || [], total: count || 0 };
}
async function fetchDiscountPlanUsages(clientPlanId) {
  const { data, error } = await supabase.from("discount_plan_usages").select("*").eq("client_plan_id", clientPlanId).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function fetchStaffDiscountPlanCommissions(staffId, startDate, endDate) {
  const { data, error } = await supabase.from("discount_plan_usages").select(
    `
      *,
      client_discount_plans!inner (
        id, valid_month, price_paid, status, is_commission_finalized,
        discount_plan_templates (id, name, color)
      )
    `
  ).eq("stylist_id", staffId).gte("created_at", `${startDate}T00:00:00`).lte("created_at", `${endDate}T23:59:59`).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function fetchClientDiscountPlanDeposits(organizationId, branchIds, startDate, endDate) {
  const { data, error } = await supabase.from("client_discount_plans").select(
    `
      *,
      discount_plan_templates (id, name, color),
      client_profiles (id, first_name, last_name),
      branches (id, name)
    `
  ).eq("organization_id", organizationId).in("branch_id", branchIds).gte("created_at", startDate).lte("created_at", endDate).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function getBatchPlanUsageCounts(planIds) {
  if (!planIds?.length) return {};
  const { data, error } = await supabase.from("discount_plan_usages").select("client_plan_id, service_id").in("client_plan_id", planIds);
  if (error) throw error;
  const result = {};
  (data || []).forEach(({ client_plan_id, service_id }) => {
    if (!service_id) return;
    if (!result[client_plan_id]) result[client_plan_id] = {};
    result[client_plan_id][service_id] = (result[client_plan_id][service_id] || 0) + 1;
  });
  return result;
}
async function createDiscountPlanTemplate({
  organizationId,
  name,
  description,
  price,
  color,
  serviceIds,
  serviceDiscounts,
  serviceMaxUses,
  createdBy
}) {
  const { data, error } = await supabase.from("discount_plan_templates").insert({
    organization_id: organizationId,
    name,
    description: description || null,
    price,
    color: color || "#635BFF",
    service_ids: serviceIds || [],
    service_discounts: serviceDiscounts || {},
    service_max_uses: serviceMaxUses && Object.keys(serviceMaxUses).length ? serviceMaxUses : null,
    created_by: createdBy
  }).select().single();
  if (error) throw error;
  mutate(
    (key) => typeof key === "string" && key.startsWith("discount-plan-templates-"),
    void 0,
    { revalidate: true }
  );
  return data;
}
async function updateDiscountPlanTemplate(id, updates) {
  const { data, error } = await supabase.from("discount_plan_templates").update(updates).eq("id", id).select().single();
  if (error) throw error;
  mutate(
    (key) => typeof key === "string" && key.startsWith("discount-plan-templates-"),
    void 0,
    { revalidate: true }
  );
  return data;
}
async function deactivateDiscountPlanTemplate(id) {
  return updateDiscountPlanTemplate(id, { is_active: false });
}
async function reactivateDiscountPlanTemplate(id) {
  return updateDiscountPlanTemplate(id, { is_active: true });
}
async function createClientDiscountPlan({
  organizationId,
  branchId,
  clientId,
  templateId,
  validMonth,
  pricePaid,
  saleId,
  createdBy
}) {
  const { data, error } = await supabase.from("client_discount_plans").insert({
    organization_id: organizationId,
    branch_id: branchId,
    client_id: clientId,
    template_id: templateId,
    valid_month: validMonth,
    price_paid: pricePaid,
    sale_id: saleId || null,
    created_by: createdBy
  }).select().single();
  if (error) throw error;
  mutate((key) => typeof key === "string" && key.startsWith("client-discount-plans-"), void 0, {
    revalidate: true
  });
  return { data, error: null };
}
async function redeemDiscountPlan({
  clientPlanId,
  saleId,
  serviceId,
  serviceName,
  stylistId,
  stylistName,
  branchId,
  originalServicePrice,
  discountPercent,
  discountAmount,
  createdBy
}) {
  const { data, error } = await supabase.from("discount_plan_usages").insert({
    client_plan_id: clientPlanId,
    sale_id: saleId || null,
    service_id: serviceId,
    service_name: serviceName || null,
    stylist_id: stylistId || null,
    stylist_name: stylistName || null,
    branch_id: branchId || null,
    original_service_price: originalServicePrice,
    discount_percent: discountPercent,
    discount_amount: discountAmount,
    created_by: createdBy || null
  }).select().single();
  if (error) throw error;
  mutate(
    (key) => typeof key === "string" && key.startsWith(`discount-plan-usages-${clientPlanId}`),
    void 0,
    { revalidate: true }
  );
  return { data, error: null };
}
async function cancelClientDiscountPlan(planId, clientId, organizationId) {
  const { error } = await supabase.from("client_discount_plans").update({ status: "cancelled" }).eq("id", planId);
  if (error) return { error };
  mutate(
    (key) => typeof key === "string" && (key.startsWith(`client-discount-plans-${clientId}`) || key.startsWith(`all-client-discount-plans-server-${organizationId}`)),
    void 0,
    { revalidate: true }
  );
  return { error: null };
}
async function getActiveDiscountPlansForServicesBatch({ clientId, serviceIds }) {
  if (!clientId || !serviceIds?.length) return { data: {} };
  const { data: rows, error } = await supabase.rpc("pos_check_discount_plan_coverage", {
    p_client_id: clientId,
    p_service_ids: serviceIds
  });
  if (error) {
    console.error("[discount-plan-service] pos_check_discount_plan_coverage error:", error);
    return { data: {} };
  }
  const coverageMap = {};
  (rows || []).forEach((row) => {
    coverageMap[row.service_id] = {
      id: row.client_plan_id,
      template_id: row.template_id,
      plan_name: row.plan_name,
      color: row.color,
      discount_percent: row.discount_percent,
      plan_service_ids: row.plan_service_ids,
      service_max_uses: row.service_max_uses
    };
  });
  return { data: coverageMap };
}
async function checkClientHasDiscountPlan(clientId, templateId, validMonth) {
  const { data, error } = await supabase.from("client_discount_plans").select("id").eq("client_id", clientId).eq("template_id", templateId).eq("valid_month", validMonth).in("status", ["active", "expired"]).maybeSingle();
  if (error) throw error;
  return Boolean(data);
}
async function finalizeExpiredDiscountPlanCommissions({ orgId, branchId }) {
  await supabase.rpc("expire_old_discount_plans");
  const now = /* @__PURE__ */ new Date();
  `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
  const { data: plans, error: plansErr } = await supabase.from("client_discount_plans").select(
    `
      id, price_paid, uses_count, client_id, branch_id, valid_month,
      discount_plan_templates (id, name, service_max_uses)
    `
  ).eq("organization_id", orgId).or("is_commission_finalized.eq.false,is_commission_finalized.is.null");
  if (plansErr) return { finalized: 0, error: plansErr };
  if (!plans?.length) return { finalized: 0, error: null };
  const { data: compRates } = await supabase.from("compensation_rules").select("*").eq("branch_id", branchId);
  const { data: serviceOverrides } = await supabase.from("service_commission_mapping").select("*").eq("branch_id", branchId);
  let finalized = 0;
  for (const plan of plans) {
    const template = plan.discount_plan_templates;
    const pricePaid = Number(plan.price_paid) || 0;
    const serviceMaxUses = template?.service_max_uses || {};
    const hasPerServiceLimits = Object.keys(serviceMaxUses).length > 0;
    const totalCapacity = hasPerServiceLimits ? Object.values(serviceMaxUses).reduce((s, v) => s + Number(v || 0), 0) : 0;
    const pricePerSlot = totalCapacity > 0 ? pricePaid / totalCapacity : 0;
    const { data: usages, error: usagesErr } = await supabase.from("discount_plan_usages").select("*").eq("client_plan_id", plan.id);
    if (usagesErr) console.error(`[finalize] plan ${plan.id} usages fetch error:`, usagesErr);
    const usagesList = usagesErr ? [] : usages || [];
    let unusedCount = 0;
    if (hasPerServiceLimits) {
      const usedPerService = {};
      for (const usage of usagesList) {
        if (usage.service_id) {
          usedPerService[usage.service_id] = (usedPerService[usage.service_id] || 0) + 1;
        }
      }
      for (const [serviceId, max] of Object.entries(serviceMaxUses)) {
        const used = usedPerService[serviceId] || 0;
        unusedCount += Math.max(0, Number(max) - used);
      }
    } else {
      unusedCount = totalCapacity > 0 ? Math.max(0, totalCapacity - usagesList.length) : 0;
    }
    const unusedRevenue = unusedCount * pricePerSlot;
    if (unusedRevenue > 0 && template?.id) {
      const saleNumber = `FIN-${(/* @__PURE__ */ new Date()).getFullYear().toString().slice(-2)}${plan.id.slice(-4)}`;
      const { data: existingSale } = await supabase.from("sales").select("id").eq("sale_number", saleNumber).maybeSingle();
      let finSaleId = existingSale?.id;
      if (!existingSale) {
        const { data: insertedSale, error: finSaleErr } = await supabase.from("sales").insert({
          organization_id: orgId,
          branch_id: plan.branch_id || branchId,
          sale_number: saleNumber,
          // service_name: `${template.name || 'Discount Plan'} — Unused Slot Revenue`,
          client_id: plan.client_id || null,
          subtotal: unusedRevenue,
          total_amount: unusedRevenue,
          amount_paid: unusedRevenue,
          status: "completed",
          payment_status: "paid",
          notes: `${template.name || "Discount Plan"} — Month-end finalization: ${unusedCount} of ${totalCapacity} slot${totalCapacity !== 1 ? "s" : ""} expired unused`
        }).select("id").single();
        if (finSaleErr) {
          console.error(
            `[finalize] plan ${plan.id} | sale insert error:`,
            JSON.stringify(finSaleErr)
          );
          continue;
        }
        finSaleId = insertedSale.id;
      }
      const { data: existingItem } = await supabase.from("sale_items").select("id").eq("sale_id", finSaleId).eq("item_type", "discount_plan_unused_revenue").maybeSingle();
      if (!existingItem) {
        const { error: unusedItemErr } = await supabase.from("sale_items").insert({
          sale_id: finSaleId,
          item_type: "discount_plan_unused_revenue",
          template_id: template.id,
          package_name: template.name || "Discount Plan",
          quantity: unusedCount,
          service_name: `${template.name || "Discount Plan"} — Unused Slot Revenue`,
          unit_price: pricePerSlot,
          discount_amount: 0,
          tax_rate: 0,
          tax_amount: 0,
          line_total: unusedRevenue,
          notes: `Client used ${usagesList.length} of ${totalCapacity} available slot${totalCapacity !== 1 ? "s" : ""}. ${unusedCount} slot${unusedCount !== 1 ? "s" : ""} expired unused at ${pricePerSlot.toFixed(2)} each.`
        });
        if (unusedItemErr) {
          console.error(
            `[finalize] plan ${plan.id} | item insert error:`,
            JSON.stringify(unusedItemErr)
          );
          console.error(`[finalize] plan ${plan.id} | item payload:`, {
            finSaleId,
            templateId: template.id,
            unusedCount,
            pricePerSlot,
            unusedRevenue
          });
          continue;
        }
      }
    }
    if (!usagesList.length) {
      await supabase.from("client_discount_plans").update({ is_commission_finalized: true, status: "cancelled" }).eq("id", plan.id);
      finalized += 1;
      continue;
    }
    for (const usage of usagesList) {
      if (!usage.id) continue;
      await supabase.from("discount_plan_usages").update({ per_usage_value: pricePerSlot }).eq("id", usage.id);
    }
    const commissionRows = [];
    for (const usage of usagesList) {
      if (!usage.stylist_id) continue;
      const ruleForStylist = (compRates || []).find(
        (r) => r.user_id === usage.stylist_id && r.commission_category === "services"
      );
      const defaultRate = ruleForStylist?.rate ?? 0;
      const override = (serviceOverrides || []).find(
        (o) => o.service_id === usage.service_id && o.user_id === usage.stylist_id
      );
      const rate = override?.rate ?? defaultRate;
      const discountedPrice = Number(usage.original_service_price) * (1 - Number(usage.discount_percent || 0) / 100);
      const commissionAmount = discountedPrice * rate / 100;
      if (commissionAmount > 0) {
        commissionRows.push({
          user_id: usage.stylist_id,
          user_name: usage.stylist_name || null,
          branch_id: branchId,
          commission_category: "discount_plan",
          commission_amount: commissionAmount,
          service_date: usage.created_at?.slice(0, 10) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
          client_plan_id: plan.id,
          notes: `Discount Plan: ${template?.name || ""} — ${usage.service_name || ""}`,
          is_paid: false
        });
      }
    }
    if (commissionRows.length) {
      const { error: insertErr } = await supabase.from("commission_history").insert(commissionRows);
      if (insertErr) {
        console.error("[discount-plan-service] commission insert error:", insertErr);
        continue;
      }
    }
    await supabase.from("client_discount_plans").update({ is_commission_finalized: true, status: "cancelled" }).eq("id", plan.id);
    mutate(
      (key) => typeof key === "string" && key.startsWith(`all-client-discount-plans-server-${orgId}`),
      void 0,
      { revalidate: true }
    );
    mutate(
      (key) => typeof key === "string" && key.startsWith("staff-plan-commissions-"),
      void 0,
      { revalidate: true }
    );
    finalized += 1;
  }
  return { finalized, error: null };
}
export {
  useGetClientDiscountPlanDeposits as a,
  useGetStaffDiscountPlanCommissions as b,
  updateDiscountPlanTemplate as c,
  createDiscountPlanTemplate as d,
  useGetAllClientDiscountPlansServer as e,
  useGetDiscountPlanTemplatesServer as f,
  cancelClientDiscountPlan as g,
  finalizeExpiredDiscountPlanCommissions as h,
  deactivateDiscountPlanTemplate as i,
  createClientDiscountPlan as j,
  redeemDiscountPlan as k,
  getActiveDiscountPlansForServicesBatch as l,
  getBatchPlanUsageCounts as m,
  useGetClientDiscountPlans as n,
  useGetDiscountPlanTemplates as o,
  checkClientHasDiscountPlan as p,
  reactivateDiscountPlanTemplate as r,
  toFirstOfMonth as t,
  useGetDiscountPlanUsages as u
};
