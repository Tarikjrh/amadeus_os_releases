import { s as supabase, u as useSWR, r as reactExports, m as mutate } from "./index-B08HRm4A.js";
const options$1 = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  keepPreviousData: true
};
function useRealtimeSubscription$1(channelName, tableConfigs, mutateFn) {
  const mutateFnRef = reactExports.useRef(mutateFn);
  reactExports.useEffect(() => {
    mutateFnRef.current = mutateFn;
  }, [mutateFn]);
  const configKey = JSON.stringify(tableConfigs);
  reactExports.useEffect(() => {
    const configs = JSON.parse(configKey);
    const channel = supabase.channel(channelName);
    configs.forEach(({ table, filter }) => {
      channel.on(
        "postgres_changes",
        { event: "*", schema: "public", table, filter },
        () => mutateFnRef.current()
      );
    });
    channel.subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [channelName, configKey]);
}
async function validateDiscountCode(code, branchId, clientId, purchaseAmount) {
  try {
    const { data, error } = await supabase.rpc("validate_discount_code", {
      p_code: code,
      p_branch_id: branchId,
      p_client_id: clientId,
      p_purchase_amount: purchaseAmount
    });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error validating discount code:", error);
    return { data: null, error };
  }
}
async function validateVoucher(code, branchId, clientId, purchaseAmount) {
  try {
    const { data, error } = await supabase.rpc("validate_voucher", {
      p_code: code,
      p_branch_id: branchId,
      p_client_id: clientId,
      p_purchase_amount: purchaseAmount
    });
    if (error) throw error;
    const result = Array.isArray(data) ? data[0] ?? null : data ?? null;
    return { data: result, error: null };
  } catch (error) {
    console.error("Error validating voucher:", error);
    return { data: null, error };
  }
}
function useGetClientVouchers(clientId) {
  const cacheKey = clientId ? `client-vouchers-${clientId}` : null;
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateLocal
  } = useSWR(cacheKey, () => fetchClientVouchers(clientId), options$1);
  const tableConfigs = [{ table: "vouchers" }];
  useRealtimeSubscription$1(
    `client-vouchers-changes-${clientId || "none"}`,
    tableConfigs,
    mutateLocal
  );
  const memoizedValue = reactExports.useMemo(
    () => ({
      vouchers: data || [],
      vouchersLoading: isLoading,
      vouchersError: error,
      vouchersValidating: isValidating,
      vouchersEmpty: !isLoading && !data?.length
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
async function fetchClientVouchers(clientId) {
  try {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const { data, error } = await supabase.from("vouchers").select("*").or(`client_id.eq.${clientId},client_id.is.null`).eq("status", "active").gt("remaining_value", 0).or(`valid_until.is.null,valid_until.gte.${now}`).order("valid_until", { ascending: true });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching client vouchers:", error);
    throw error;
  }
}
async function loadAppointmentForPOS(appointmentId) {
  try {
    const { data, error } = await supabase.from("appointments").select(
      `
          id,
          client_notes,
          special_requests,
          stylist_id,
          client:client_profiles (
            id,
            first_name,
            last_name,
            email,
            phone_primary
          ),
          services:appointment_services (
            service_id,
            service_name,
            service_category,
            performed_by,
            price,
            performed_by_stylist:profiles!performed_by (first_name, last_name),
            service:services (is_measured, measure_unit_label, measure_default)
          )
        `
    ).eq("id", appointmentId).single();
    if (error) throw error;
    const items = data.services.map((service) => {
      const bookedPrice = parseFloat(service.price) || 0;
      const isMeasured = !!service.service?.is_measured;
      const measureQuantity = isMeasured ? parseFloat(service.service?.measure_default) || 1 : null;
      const unitPrice = isMeasured ? parseFloat((measureQuantity * bookedPrice).toFixed(2)) : bookedPrice;
      return {
        item_type: "service",
        service_id: service.service_id,
        service_name: service.service_name,
        service_category: service.service_category ?? null,
        stylist_id: service.performed_by || data.stylist_id || null,
        stylist_name: service.performed_by_stylist ? `${service.performed_by_stylist.first_name} ${service.performed_by_stylist.last_name}` : null,
        quantity: 1,
        unit_price: unitPrice,
        measure_quantity: measureQuantity,
        measure_unit_label: isMeasured ? service.service?.measure_unit_label ?? null : null,
        measure_unit_price: isMeasured ? bookedPrice : null,
        discount_amount: 0,
        line_total: unitPrice
      };
    });
    return {
      data: {
        client: data.client,
        items,
        appointmentId: data.id,
        notes: data.special_requests
      },
      error: null
    };
  } catch (error) {
    console.error("Error loading appointment for POS:", error);
    return { data: null, error };
  }
}
const posService = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loadAppointmentForPOS,
  useGetClientVouchers,
  validateDiscountCode,
  validateVoucher
}, Symbol.toStringTag, { value: "Module" }));
const options = {
  revalidateOnFocus: false,
  // Realtime subscriptions handle cache invalidation
  revalidateOnReconnect: true,
  // Refetch when internet reconnects
  dedupingInterval: 2e3,
  // Dedupe requests within 2 seconds
  keepPreviousData: true,
  // Keep old data while fetching new
  shouldRetryOnError: true,
  // Auto-retry on error
  errorRetryCount: 3
  // Max retry attempts
};
function useRealtimeSubscription(channelName, tableConfigs) {
  const configKey = JSON.stringify(tableConfigs);
  reactExports.useEffect(() => {
    const configs = JSON.parse(configKey);
    const uniqueName = `${channelName}-${crypto.randomUUID()}`;
    const channel = supabase.channel(uniqueName);
    configs.forEach(({ table, filter }) => {
      channel.on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table,
          ...filter && { filter }
        },
        (payload) => {
          mutate((key) => typeof key === "string" && key.includes("sales"), void 0, {
            revalidate: true
          });
        }
      );
    });
    return () => {
      supabase.removeChannel(channel);
    };
  }, [channelName, configKey]);
}
async function createSale(saleData, { skipMutate = false } = {}) {
  try {
    const { data, error } = await supabase.from("sales").insert([saleData]).select().single();
    if (error) throw error;
    if (!skipMutate) {
      await mutate((key) => typeof key === "string" && key.includes("sales"));
    }
    return { data, error: null };
  } catch (error) {
    console.error("Error creating sale:", error);
    return { data: null, error };
  }
}
async function addSaleItems(saleId, items, { skipMutate = false } = {}) {
  try {
    const itemsWithSaleId = items.map((item) => ({
      sale_id: saleId,
      item_type: item.item_type,
      service_id: item.service_id || null,
      product_id: item.product_id || null,
      template_id: item.template_id || null,
      stylist_id: item.stylist_id || null,
      product_name: item.product_name || null,
      service_name: item.service_name || null,
      package_name: item.package_name || item.plan_name || null,
      product_sku: item.product_sku || null,
      service_category: item.service_category || null,
      addon_id: item.addon_id || null,
      addon_name: item.addon_name || null,
      addon_category: item.addon_category || null,
      quantity: item.quantity,
      unit_price: item.unit_price,
      // Measured services (priced by material consumed) — null on every other line
      measure_quantity: item.measure_quantity ?? null,
      measure_unit_label: item.measure_unit_label ?? null,
      measure_unit_price: item.measure_unit_price ?? null,
      discount_amount: item.discount_amount || 0,
      tax_rate: item.tax_rate || 0,
      tax_amount: item.tax_amount || 0,
      line_total: item.line_total,
      original_unit_price: item.original_unit_price ?? null,
      paid_via_package: item.paid_via_package ?? false,
      notes: item.notes || null
    }));
    const { error } = await supabase.from("sale_items").insert(itemsWithSaleId);
    if (error) throw error;
    if (!skipMutate) {
      await mutate((key) => typeof key === "string" && key.includes(`sale-${saleId}`));
    }
    return { data: null, error: null };
  } catch (error) {
    console.error("Error adding sale items:", error);
    return { data: null, error };
  }
}
async function updateSaleItemQuantity(saleItemId, newQuantity, updatedBy) {
  try {
    const { data: currentItem, error: fetchError } = await supabase.from("sale_items").select(
      "*, sale:sales(branch_id, status, payment_status, sale_number, inventory_reserved, inventory_deducted)"
    ).eq("id", saleItemId).single();
    if (fetchError) throw fetchError;
    const sale = currentItem.sale;
    if (sale.status === "cancelled") {
      throw new Error("Cannot edit cancelled sales.");
    }
    const quantityDifference = newQuantity - currentItem.quantity;
    if (currentItem.product_id && quantityDifference !== 0) {
      const mode = sale.inventory_deducted ? "deduct" : "reserve";
      await adjustInventory(currentItem.product_id, sale.branch_id, quantityDifference, mode, {
        reference_type: "sale_item",
        movement_type: "sale_edit",
        reference_id: saleItemId,
        performed_by: updatedBy,
        notes: `Quantity updated from ${currentItem.quantity} to ${newQuantity} in sale ${sale.sale_number}`
      });
    }
    const newLineTotal = newQuantity * currentItem.unit_price - currentItem.discount_amount + currentItem.tax_amount;
    const { data: updatedItem, error: updateError } = await supabase.from("sale_items").update({
      quantity: newQuantity,
      line_total: newLineTotal
    }).eq("id", saleItemId).select().single();
    if (updateError) throw updateError;
    await mutate((key) => typeof key === "string" && key.includes(`sale-${currentItem.sale_id}`));
    await mutate((key) => typeof key === "string" && key.includes("product"));
    return { data: updatedItem, error: null };
  } catch (error) {
    console.error("Error updating sale item quantity:", error);
    return { data: null, error };
  }
}
async function adjustInventory(productId, branchId, qtyDelta, mode, movementData = {}) {
  const { data: rows, error: fetchErr } = await supabase.from("product_inventory").select("id, quantity, reserved_quantity").eq("product_id", productId).eq("branch_id", branchId).limit(1);
  if (fetchErr) throw fetchErr;
  const inv = rows?.[0];
  if (!inv) {
    console.warn(
      `[inventory] No inventory row found for product ${productId} at branch ${branchId}. Skipping adjustment.`
    );
    return;
  }
  let updatePayload;
  if (mode === "reserve") {
    updatePayload = {
      reserved_quantity: Math.max(0, inv.reserved_quantity + qtyDelta)
    };
  } else {
    updatePayload = {
      quantity: Math.max(0, inv.quantity - qtyDelta)
    };
  }
  const { error: updateErr } = await supabase.from("product_inventory").update(updatePayload).eq("id", inv.id);
  if (updateErr) throw updateErr;
  if (mode === "deduct" && movementData.reference_type && movementData.reference_id) {
    const qtyDeltaMovement = qtyDelta;
    const { error: movementErr } = await supabase.from("product_movements").insert({
      product_id: productId,
      from_branch_id: branchId,
      movement_type: movementData.movement_type || "sale",
      qty_delta: qtyDeltaMovement,
      reference_type: movementData.reference_type,
      reference_id: movementData.reference_id,
      performed_by: movementData.performed_by || null,
      notes: movementData.notes || null,
      performed_at: (/* @__PURE__ */ new Date()).toISOString()
    });
    if (movementErr) {
      console.error("Error recording product movement:", movementErr);
    }
  }
}
async function addSaleItemExistingSale(saleId, item, userId = null) {
  try {
    const { data: sale, error: saleErr } = await supabase.from("sales").select("branch_id, inventory_reserved, inventory_deducted,sale_number").eq("id", saleId).single();
    if (saleErr) throw saleErr;
    const qty = item.quantity || 1;
    const { data, error } = await supabase.from("sale_items").insert([
      {
        sale_id: saleId,
        item_type: item.item_type,
        service_id: item.service_id || null,
        product_id: item.product_id || null,
        stylist_id: item.stylist_id || null,
        product_name: item.product_name || null,
        service_name: item.service_name || null,
        product_sku: item.product_sku || null,
        service_category: item.service_category || null,
        quantity: qty,
        unit_price: item.unit_price,
        discount_amount: item.discount_amount || 0,
        tax_rate: item.tax_rate || 0,
        tax_amount: item.tax_amount || 0,
        line_total: item.line_total ?? parseFloat(item.unit_price) * qty
      }
    ]).select().single();
    if (error) throw error;
    if (item.item_type === "product" && item.product_id) {
      const mode = sale.inventory_deducted ? "deduct" : "reserve";
      await adjustInventory(item.product_id, sale.branch_id, qty, mode, {
        reference_type: "sale_item",
        reference_id: data.id,
        performed_by: userId,
        movement_type: "sale_edit",
        notes: `Added to existing sale ${sale.sale_number}`
      });
    }
    await mutate((key) => typeof key === "string" && key.includes(`sale-${saleId}`));
    await mutate((key) => typeof key === "string" && key.includes("product"));
    return { data, error: null };
  } catch (error) {
    console.error("Error adding sale item:", error);
    return { data: null, error };
  }
}
async function removeSaleItemExistingSale(saleItemId, saleId, { skipInventory = false } = {}, updatedBy = null, saleNumber = null) {
  try {
    let saleItem = null;
    let sale = null;
    if (!skipInventory) {
      const { data: item, error: itemErr } = await supabase.from("sale_items").select("product_id, quantity, item_type").eq("id", saleItemId).single();
      if (itemErr) throw itemErr;
      saleItem = item;
      const { data: saleData, error: saleErr } = await supabase.from("sales").select("branch_id, inventory_reserved, inventory_deducted").eq("id", saleId).single();
      if (saleErr) throw saleErr;
      sale = saleData;
    }
    const { error } = await supabase.from("sale_items").update({ deleted_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", saleItemId);
    if (error) throw error;
    if (!skipInventory && saleItem?.item_type === "product" && saleItem?.product_id) {
      const mode = sale.inventory_deducted ? "deduct" : "reserve";
      await adjustInventory(saleItem.product_id, sale.branch_id, -saleItem.quantity, mode, {
        reference_type: "sale_item",
        movement_type: "sale_edit",
        reference_id: saleItemId,
        performed_by: updatedBy,
        notes: `Removed from existing sale ${saleNumber}`
      });
    }
    await mutate((key) => typeof key === "string" && key.includes(`sale-${saleId}`));
    if (!skipInventory) {
      await mutate((key) => typeof key === "string" && key.includes("product"));
    }
    return { error: null };
  } catch (error) {
    console.error("Error removing sale item:", error);
    return { error };
  }
}
async function updateSaleDetails(saleId, updates) {
  try {
    const { error } = await supabase.from("sales").update(updates).eq("id", saleId);
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.includes(`sale-${saleId}`));
    return { data: null, error: null };
  } catch (error) {
    console.error("Error updating sale details:", error);
    return { data: null, error };
  }
}
async function updateSaleManualDiscount(saleId, { type, value }) {
  try {
    const { data: sale, error: fetchError } = await supabase.from("sales").select(
      "subtotal, tax_amount, discount_amount, voucher_amount, cashback_redemption_amount, delivery_charge"
    ).eq("id", saleId).single();
    if (fetchError) throw fetchError;
    const numericValue = parseFloat(value) || 0;
    if (numericValue < 0) throw new Error("Discount cannot be negative");
    if (type === "percentage" && numericValue > 100) {
      throw new Error("Percentage discount cannot exceed 100%");
    }
    const subtotal = Number(sale.subtotal) || 0;
    const rawAmount = type === "percentage" ? subtotal * numericValue / 100 : numericValue;
    const remaining = Math.max(subtotal - (Number(sale.discount_amount) || 0), 0);
    const manualAmount = Math.round(Math.min(rawAmount, remaining) * 100) / 100;
    const hasDiscount = numericValue > 0 && !!type;
    const totalAmount = subtotal + (Number(sale.tax_amount) || 0) - (Number(sale.discount_amount) || 0) - manualAmount - (Number(sale.voucher_amount) || 0) - (Number(sale.cashback_redemption_amount) || 0) + (Number(sale.delivery_charge) || 0);
    const { error } = await supabase.from("sales").update({
      manual_discount_type: hasDiscount ? type : null,
      manual_discount_value: hasDiscount ? numericValue : 0,
      manual_discount_amount: hasDiscount ? manualAmount : 0,
      total_amount: Math.max(totalAmount, 0)
    }).eq("id", saleId);
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.includes(`sale-${saleId}`));
    await mutate((key) => typeof key === "string" && key.includes("sales"));
    return { data: null, error: null };
  } catch (error) {
    console.error("Error updating sale discount:", error);
    return { data: null, error };
  }
}
async function updateSaleStatus(saleId, updates) {
  try {
    const patch = { status: updates.status };
    if (updates.authorizedBy) patch.override_authorized_by = updates.authorizedBy;
    if (updates.overrideType) patch.override_type = updates.overrideType;
    const { error } = await supabase.from("sales").update(patch).eq("id", saleId);
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.includes(`sale-${saleId}`));
    await mutate((key) => typeof key === "string" && key.includes("sales"));
    if (updates.status === "cancelled") {
      await reverseSalePackageEffects(saleId);
    }
    return { data: null, error: null };
  } catch (error) {
    console.error("Error updating sale details:", error);
    return { data: null, error };
  }
}
async function updateSaleItemStylist(saleItemId, stylistId, saleId) {
  try {
    const { error } = await supabase.from("sale_items").update({ stylist_id: stylistId }).eq("id", saleItemId);
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.includes(`sale-${saleId}`));
    return { data: null, error: null };
  } catch (error) {
    console.error("Error updating sale item stylist:", error);
    return { data: null, error };
  }
}
async function addSalePayment(saleId, paymentData) {
  try {
    const { data, error } = await supabase.from("sale_payments").insert([{ ...paymentData, sale_id: saleId }]).select().single();
    if (error) throw error;
    const { data: aggRow, error: aggErr } = await supabase.from("sale_payments").select("amount").eq("sale_id", saleId);
    if (aggErr) throw aggErr;
    const totalPaid = aggRow?.reduce((sum, p) => sum + parseFloat(p.amount), 0) || 0;
    const { data: sale, error: saleReadErr } = await supabase.from("sales").select("total_amount").eq("id", saleId).single();
    if (saleReadErr) throw saleReadErr;
    const paymentStatus = totalPaid >= parseFloat(sale?.total_amount || 0) ? "paid" : "partially_paid";
    const { error: updateErr } = await supabase.from("sales").update({
      status: paymentStatus === "paid" ? "completed" : "pending",
      amount_paid: totalPaid,
      payment_status: paymentStatus
    }).eq("id", saleId);
    if (updateErr) throw updateErr;
    await mutate((key) => typeof key === "string" && key.includes(`sale-${saleId}`));
    return { data, error: null };
  } catch (error) {
    console.error("Error adding sale payment:", error);
    return { data: null, error };
  }
}
async function completeSale(saleId, cashierId, { totalAmount: knownTotal, amountPaid: knownPaid } = {}) {
  try {
    let totalAmount;
    let amountPaid;
    if (knownTotal !== void 0 && knownPaid !== void 0) {
      totalAmount = knownTotal;
      amountPaid = knownPaid;
    } else {
      const { data: currentSale, error: fetchError } = await supabase.from("sales").select("total_amount, amount_paid").eq("id", saleId).single();
      if (fetchError) throw fetchError;
      totalAmount = parseFloat(currentSale.total_amount || 0);
      amountPaid = parseFloat(currentSale.amount_paid || 0);
    }
    const isFullyPaid = amountPaid >= totalAmount;
    const paymentStatus = isFullyPaid ? "paid" : "partially_paid";
    const saleStatus = isFullyPaid ? "completed" : "pending";
    const updatePayload = {
      status: saleStatus,
      payment_status: paymentStatus,
      cashier_id: cashierId,
      ...isFullyPaid && { completed_at: (/* @__PURE__ */ new Date()).toISOString() }
    };
    const { data, error } = await supabase.from("sales").update(updatePayload).eq("id", saleId).select().single();
    if (error) throw error;
    await mutate((key) => typeof key === "string" && key.includes("sales"));
    await mutate((key) => typeof key === "string" && key.includes("product"));
    return { data, error: null };
  } catch (error) {
    console.error("Error completing sale:", error);
    return { data: null, error };
  }
}
async function processTransaction(transactionData) {
  let sale = null;
  try {
    const {
      branchId,
      clientId,
      appointmentId,
      items,
      payments,
      discountCode,
      rewardDiscountAmount,
      voucher,
      manualDiscount,
      manualDiscountType,
      cashbackRedemption,
      deliveryCharge,
      deliveryMethod,
      taxRate,
      notes,
      cashierId,
      overrideAuthorizedBy,
      overrideType
    } = transactionData;
    const subtotal = items.reduce((sum, item) => {
      const lineTotal = item.quantity * item.unit_price - (item.discount_amount || 0);
      return sum + lineTotal;
    }, 0);
    let discountAmount = 0;
    let discountCodeId = null;
    if (discountCode) {
      if (discountCode.startsWith("RW-")) {
        discountAmount = parseFloat(rewardDiscountAmount) || 0;
      } else {
        const { data: discountValidation } = await validateDiscountCode(
          discountCode,
          branchId,
          clientId,
          subtotal
        );
        if (discountValidation?.valid) {
          discountAmount = discountValidation.discount_amount;
          discountCodeId = discountValidation.discount_code_id;
        }
      }
    }
    let manualDiscountAmount = 0;
    if (manualDiscount && parseFloat(manualDiscount) > 0) {
      if (manualDiscountType === "percentage") {
        manualDiscountAmount = subtotal * parseFloat(manualDiscount) / 100;
      } else {
        manualDiscountAmount = parseFloat(manualDiscount);
      }
    }
    let voucherAmount = 0;
    let voucherId = null;
    if (voucher) {
      const { data: voucherValidation } = await validateVoucher(
        voucher,
        branchId,
        clientId,
        subtotal - discountAmount - manualDiscountAmount
      );
      if (voucherValidation?.is_valid) {
        voucherAmount = voucherValidation.applicable_amount;
        voucherId = voucherValidation.voucher_id;
      }
    }
    const cashbackRedemptionAmount = Math.max(0, parseFloat(cashbackRedemption) || 0);
    const cappedDiscountAmount = Math.min(discountAmount, subtotal);
    let remaining = subtotal - cappedDiscountAmount;
    const cappedManualDiscountAmount = Math.min(manualDiscountAmount, remaining);
    remaining -= cappedManualDiscountAmount;
    const cappedVoucherAmount = Math.min(voucherAmount, remaining);
    remaining -= cappedVoucherAmount;
    const cappedCashbackRedemptionAmount = Math.min(cashbackRedemptionAmount, remaining);
    const taxableAmount = subtotal - cappedDiscountAmount - cappedManualDiscountAmount - cappedVoucherAmount - cappedCashbackRedemptionAmount;
    const taxAmount = Math.max(0, taxableAmount) * (taxRate || 0) / 100;
    const finalDeliveryCharge = Math.max(0, parseFloat(deliveryCharge) || 0);
    const totalAmount = Math.max(0, taxableAmount) + taxAmount + finalDeliveryCharge;
    const { data: createdSale, error: saleError } = await createSale(
      {
        organization_id: transactionData.organizationId,
        branch_id: branchId,
        client_id: clientId,
        appointment_id: appointmentId,
        // Honour the cashier-selected date (backdated sales support)
        sale_date: transactionData.saleDate || (/* @__PURE__ */ new Date()).toISOString(),
        subtotal,
        discount_amount: cappedDiscountAmount,
        discount_code_id: discountCodeId,
        manual_discount_type: manualDiscountType || null,
        manual_discount_value: manualDiscount ? parseFloat(manualDiscount) : 0,
        manual_discount_amount: cappedManualDiscountAmount,
        voucher_id: voucherId,
        voucher_amount: cappedVoucherAmount,
        cashback_redemption_amount: cappedCashbackRedemptionAmount,
        delivery_charge: finalDeliveryCharge,
        delivery_method: deliveryMethod || "standard",
        tax_rate: taxRate || 0,
        tax_amount: taxAmount,
        total_amount: totalAmount,
        notes,
        cashier_id: cashierId,
        override_authorized_by: overrideAuthorizedBy ?? null,
        override_type: overrideType ?? null,
        status: "pending"
      },
      { skipMutate: true }
    );
    if (saleError) throw saleError;
    sale = createdSale;
    const itemsToInsert = items.map((item) => {
      const lineTotal = item.quantity * item.unit_price - (item.discount_amount || 0);
      const itemTaxAmount = lineTotal * (taxRate || 0) / 100;
      return {
        ...item,
        tax_rate: taxRate || 0,
        tax_amount: itemTaxAmount,
        line_total: lineTotal + itemTaxAmount
      };
    });
    const validPayments = payments.filter((p) => (parseFloat(p.amount) || 0) > 0);
    const paymentsToInsert = validPayments.map((p) => ({
      ...p,
      sale_id: sale.id,
      processed_by: cashierId
    }));
    const [{ error: itemsError }, { error: paymentsInsertErr }] = await Promise.all([
      addSaleItems(sale.id, itemsToInsert, { skipMutate: true }),
      validPayments.length > 0 ? supabase.from("sale_payments").insert(paymentsToInsert).then(({ error }) => ({ error })) : Promise.resolve({ error: null })
    ]);
    if (itemsError) throw itemsError;
    if (paymentsInsertErr) throw paymentsInsertErr;
    const totalPaid = validPayments.reduce((sum, p) => sum + (parseFloat(p.amount) || 0), 0);
    const parallelWrites = [
      supabase.from("sales").update({ amount_paid: totalPaid }).eq("id", sale.id).then(({ error }) => {
        if (error) throw error;
      })
    ];
    if (discountCodeId) {
      parallelWrites.push(
        supabase.from("discount_code_usage").insert([
          {
            discount_code_id: discountCodeId,
            sale_id: sale.id,
            client_id: clientId,
            discount_amount: cappedDiscountAmount
          }
        ]).then(({ error }) => {
          if (error) console.error("Failed to record discount usage:", error);
        })
      );
    }
    if (voucherId) {
      parallelWrites.push(
        supabase.from("voucher_usage").insert([
          {
            voucher_id: voucherId,
            sale_id: sale.id,
            amount_used: cappedVoucherAmount
          }
        ]).then(({ error }) => {
          if (error) console.error("Failed to record voucher usage:", error);
        })
      );
    }
    await Promise.all(parallelWrites);
    const { data: completedSale, error: completeError } = await completeSale(sale.id, cashierId, {
      totalAmount,
      amountPaid: totalPaid
    });
    if (completeError) throw completeError;
    return { data: { ...completedSale, items: itemsToInsert }, error: null };
  } catch (error) {
    console.error("Error processing transaction:", error);
    if (sale?.id) {
      try {
        await Promise.all([
          supabase.from("sale_items").delete().eq("sale_id", sale.id),
          supabase.from("sale_payments").delete().eq("sale_id", sale.id)
        ]);
        await supabase.from("sales").delete().eq("id", sale.id);
        console.warn("[processTransaction] Orphaned sale cleaned up:", sale.id);
      } catch (cleanupErr) {
        console.error("[processTransaction] Failed to clean up orphaned sale:", cleanupErr);
      }
    }
    return { data: null, error };
  }
}
function useGetSale(saleId) {
  const cacheKey = `sale-${saleId}`;
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: saleMutate
  } = useSWR(cacheKey, () => fetchSale(saleId), options);
  const tableConfigs = [
    { table: "sales", filter: `id=eq.${saleId}` },
    { table: "sale_items", filter: `sale_id=eq.${saleId}` },
    { table: "sale_payments", filter: `sale_id=eq.${saleId}` }
  ];
  useRealtimeSubscription(`sale-changes-${saleId}`, tableConfigs);
  const memoizedValue = reactExports.useMemo(
    () => ({
      sale: data || null,
      saleLoading: isLoading,
      saleError: error,
      saleValidating: isValidating,
      saleMutate
    }),
    [data, error, isLoading, isValidating, saleMutate]
  );
  return memoizedValue;
}
async function fetchSale(saleId) {
  try {
    const { data, error } = await supabase.from("sales").select(
      `
          *,
          branch:branches (name, address, city, state, postal_code, phone, country:countries (name)),
          client:client_profiles (
            id,
            first_name,
            last_name,
            email,
            phone_primary
          ),
          cashier:profiles!cashier_id (
            id,
            first_name,
            last_name
          ),
          items:sale_items (
            *,
            product:products (name, sku),
            service:services (name),
            stylist:profiles!stylist_id (first_name, last_name)
          ),
          payments:sale_payments (
            *,
            processed_by_user:profiles!processed_by (first_name, last_name)
          ),
         
          discount_code:discount_codes (code, name, discount_type, discount_value),
          voucher:vouchers (code, voucher_value),
          reward_redemptions!used_in_sale_id (
            id, redeem_code, points_spent,
            rewards_catalog!reward_id (name, type, value)
          ),
          plan_usages:discount_plan_usages!sale_id (
            id, discount_amount, service_name, discount_percent,
            client_discount_plans (
              discount_plan_templates (name, color)
            )
          ),
          package_usages:package_usages!sale_id (
            id, service_id
          )
        `
    ).eq("id", saleId).single();
    if (error) throw error;
    if (data?.items) {
      data.items = data.items.filter((item) => !item.deleted_at);
    }
    return data;
  } catch (error) {
    console.error("Error fetching sale:", error);
    throw error;
  }
}
function useGetSales({
  branchId,
  startDate,
  endDate,
  status,
  search = "",
  page = 0,
  pageSize = 20,
  sortField = "created_at",
  sortOrder = "desc",
  itemType = "all",
  itemSearch = "",
  columnFilters = [],
  excludeLegacy = false
} = {}) {
  const cacheKey = JSON.stringify([
    "sales",
    branchId,
    startDate,
    endDate,
    status,
    search,
    page,
    pageSize,
    sortField,
    sortOrder,
    itemType,
    itemSearch,
    columnFilters,
    excludeLegacy
  ]);
  const { data, isLoading, error, isValidating } = useSWR(
    cacheKey,
    () => fetchSales({
      branchId,
      startDate,
      endDate,
      status,
      search,
      page,
      pageSize,
      sortField,
      sortOrder,
      itemType,
      itemSearch,
      columnFilters,
      excludeLegacy
    }),
    options
  );
  const tableConfigs = reactExports.useMemo(
    () => branchId ? [{ table: "sales", filter: `branch_id=eq.${branchId}` }, { table: "sale_items" }] : [{ table: "sales" }, { table: "sale_items" }],
    [branchId]
  );
  useRealtimeSubscription(`sales-list-changes`, tableConfigs);
  const memoizedValue = reactExports.useMemo(
    () => ({
      sales: data?.sales || [],
      salesLoading: isLoading,
      salesError: error,
      salesValidating: isValidating,
      totalCount: data?.totalCount || 0,
      salesEmpty: !isLoading && !data?.sales?.length
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
function useGetSalesCounts({
  branchId,
  startDate,
  endDate,
  search = "",
  excludeLegacy = false
} = {}) {
  const cacheKey = JSON.stringify([
    "sales-counts",
    branchId,
    startDate,
    endDate,
    search,
    excludeLegacy
  ]);
  const { data, isLoading } = useSWR(
    cacheKey,
    () => fetchSalesCounts({ branchId, startDate, endDate, search, excludeLegacy }),
    options
  );
  const memoizedValue = reactExports.useMemo(
    () => ({
      counts: data || { all: 0, completed: 0, pending: 0, cancelled: 0, refunded: 0 },
      countsLoading: isLoading
    }),
    [data, isLoading]
  );
  return memoizedValue;
}
async function resolveSearchClause(search) {
  const term = search?.trim();
  if (!term) return null;
  let clientIdsClause = "";
  try {
    const parts = term.split(/\s+/);
    let clientQuery = supabase.from("client_profiles").select("id");
    const CLIENT_ID_LIMIT = 150;
    if (parts.length >= 2) {
      const firstName = parts[0];
      const lastName = parts.slice(1).join(" ");
      const [{ data: fullNameClients }, { data: singleTermClients }] = await Promise.all([
        clientQuery.ilike("first_name", `%${firstName}%`).ilike("last_name", `%${lastName}%`).limit(CLIENT_ID_LIMIT),
        supabase.from("client_profiles").select("id").or(`first_name.ilike.%${term}%,last_name.ilike.%${term}%,phone_primary.ilike.%${term}%`).limit(CLIENT_ID_LIMIT)
      ]);
      const allClients = [...fullNameClients || [], ...singleTermClients || []];
      const uniqueIds = [...new Set(allClients.map((c) => c.id))];
      if (uniqueIds.length > 0) {
        clientIdsClause = `,client_id.in.(${uniqueIds.join(",")})`;
      }
    } else {
      const { data: clients } = await clientQuery.or(`first_name.ilike.%${term}%,last_name.ilike.%${term}%,phone_primary.ilike.%${term}%`).limit(CLIENT_ID_LIMIT);
      if (clients && clients.length > 0) {
        const ids = clients.map((c) => c.id).join(",");
        clientIdsClause = `,client_id.in.(${ids})`;
      }
    }
  } catch (_) {
  }
  return `sale_number.ilike.%${term}%${clientIdsClause}`;
}
function applyColumnFilters(query, columnFilters = []) {
  for (const { field, operator, value } of columnFilters) {
    const isEmptyOp = operator === "isEmpty";
    const isNotEmptyOp = operator === "isNotEmpty";
    if (!isEmptyOp && !isNotEmptyOp && (value === void 0 || value === null || value === "")) {
      continue;
    }
    const val = value instanceof Date ? value.toISOString() : value;
    switch (operator) {
      case "contains":
        query = query.ilike(field, `%${val}%`);
        break;
      case "equals":
      case "is":
      case "=":
        query = query.eq(field, val);
        break;
      case "startsWith":
        query = query.ilike(field, `${val}%`);
        break;
      case "endsWith":
        query = query.ilike(field, `%${val}`);
        break;
      case "not":
      case "!=":
        query = query.neq(field, val);
        break;
      case ">":
      case "after":
        query = query.gt(field, val);
        break;
      case ">=":
      case "onOrAfter":
        query = query.gte(field, val);
        break;
      case "<":
      case "before":
        query = query.lt(field, val);
        break;
      case "<=":
      case "onOrBefore":
        query = query.lte(field, val);
        break;
      case "isEmpty":
        query = query.is(field, null);
        break;
      case "isNotEmpty":
        query = query.not(field, "is", null);
        break;
    }
  }
  return query;
}
async function fetchSales({
  branchId,
  startDate,
  endDate,
  status,
  search,
  page,
  pageSize,
  sortField = "created_at",
  sortOrder = "desc",
  itemType = "all",
  itemSearch = "",
  columnFilters = [],
  excludeLegacy = false
}) {
  try {
    if (columnFilters.length === 0) {
      return await fetchSalesViaRpc({
        branchId,
        startDate,
        endDate,
        status,
        search,
        page,
        pageSize,
        sortField,
        sortOrder,
        itemType,
        itemSearch,
        excludeLegacy
      });
    }
    const searchClause = await resolveSearchClause(search);
    let query = supabase.from("sales").select(
      `
          *,
          client:client_profiles (first_name, last_name),
          cashier:profiles!cashier_id (first_name, last_name),
          items:sale_items (
            id,
            item_type,
            package_name,
            original_unit_price,
            discount_amount,
            line_total,
            paid_via_package,
            service:services (name),
            product:products (name, sku)
          ),
          discount_code:discount_codes (code, name, discount_type, discount_value),
          voucher:vouchers (code, voucher_value),
          plan_usages:discount_plan_usages!sale_id (
            client_discount_plans (
              discount_plan_templates (name, color)
            )
          )
        `,
      { count: "exact" }
    ).order(sortField, { ascending: sortOrder === "asc" });
    if (branchId) query = query.eq("branch_id", branchId);
    if (status && status !== "all") query = query.eq("status", status);
    if (startDate) query = query.gte("created_at", startDate);
    if (endDate) query = query.lte("created_at", endDate);
    if (searchClause) query = query.or(searchClause);
    if (excludeLegacy) query = query.eq("is_legacy", false);
    query = applyColumnFilters(query, columnFilters);
    if (itemType && itemType !== "all") {
      const { data: saleIdsWithType } = await supabase.from("sale_items").select("sale_id").eq("item_type", itemType).is("deleted_at", null).limit(1e3);
      const ids = [...new Set((saleIdsWithType || []).map((r) => r.sale_id))];
      if (ids.length === 0) return { sales: [], totalCount: 0 };
      query = query.in("id", ids);
    }
    if (itemSearch && itemSearch.trim()) {
      const term = itemSearch.trim();
      const { data: saleIdsWithItem } = await supabase.from("sale_items").select("sale_id").or(
        `service_name.ilike.%${term}%,product_name.ilike.%${term}%,package_name.ilike.%${term}%`
      ).is("deleted_at", null).limit(1e3);
      const ids = [...new Set((saleIdsWithItem || []).map((r) => r.sale_id))];
      if (ids.length === 0) return { sales: [], totalCount: 0 };
      query = query.in("id", ids);
    }
    const from = page * pageSize;
    query = query.range(from, from + pageSize - 1);
    const { data, error, count } = await query;
    if (error) throw error;
    return { sales: data, totalCount: count };
  } catch (error) {
    console.error("Error fetching sales:", error);
    throw error;
  }
}
async function getSalesCountFromCache(branchId, status, excludeLegacy = false) {
  let query = supabase.from("sales_count_cache").select("status, count");
  if (branchId) query = query.eq("branch_id", branchId);
  if (status && status !== "all") query = query.eq("status", status);
  if (excludeLegacy) query = query.eq("is_legacy", false);
  const { data } = await query;
  return (data || []).reduce((sum, row) => sum + (row.count || 0), 0);
}
async function fetchSalesViaRpc({
  branchId,
  startDate,
  endDate,
  status,
  search,
  page,
  pageSize,
  sortField,
  sortOrder,
  itemType,
  itemSearch,
  excludeLegacy
}) {
  const rpcParams = {
    p_branch_id: branchId || null,
    p_search: search || null,
    p_status: status || null,
    p_start_date: startDate || null,
    p_end_date: endDate || null,
    p_item_type: itemType !== "all" ? itemType : null,
    p_item_search: itemSearch || null,
    p_exclude_legacy: excludeLegacy || false
  };
  const hasTextSearch = !!search?.trim();
  const hasItemFilters = !!(itemType && itemType !== "all") || !!itemSearch?.trim();
  const hasDateOnlyFilters = !!(startDate || endDate) && !hasItemFilters;
  const canUseCountRpc = !hasTextSearch && hasDateOnlyFilters;
  const [{ data, error }, countResult] = await Promise.all([
    supabase.rpc("search_sales", {
      ...rpcParams,
      p_sort_field: sortField,
      p_sort_order: sortOrder,
      p_page: page,
      p_page_size: pageSize
    }),
    canUseCountRpc ? supabase.rpc("search_sales_count", rpcParams).then(({ data: n, error: e }) => {
      if (e) throw e;
      return Number(n ?? 0);
    }) : getSalesCountFromCache(branchId, status, excludeLegacy)
  ]);
  if (error) throw error;
  const rows = data || [];
  const offset = page * pageSize;
  const isLastPage = rows.length < pageSize;
  const useInferredCount = hasTextSearch || hasItemFilters;
  const totalCount = isLastPage ? offset + rows.length : useInferredCount ? offset + rows.length + 1 : Number(countResult ?? 0);
  return {
    sales: rows.map((row) => row.sale_data),
    totalCount
  };
}
async function fetchSalesCounts({ branchId, startDate, endDate, search, excludeLegacy = false }) {
  try {
    const filtered = !!(startDate || endDate);
    if (!filtered) {
      let cacheQuery = supabase.from("sales_count_cache").select("status, count");
      if (branchId) cacheQuery = cacheQuery.eq("branch_id", branchId);
      if (excludeLegacy) cacheQuery = cacheQuery.eq("is_legacy", false);
      const { data: data2, error: error2 } = await cacheQuery;
      if (error2) throw error2;
      const counts2 = {
        all: 0,
        completed: 0,
        pending: 0,
        cancelled: 0,
        refunded: 0,
        partially_refunded: 0
      };
      (data2 || []).forEach(({ status, count }) => {
        counts2[status] = (counts2[status] || 0) + (count || 0);
        counts2.all += count || 0;
      });
      return counts2;
    }
    const { data, error } = await supabase.rpc("get_sales_counts", {
      p_branch_id: branchId || null,
      p_search: search || null,
      p_start_date: startDate || null,
      p_end_date: endDate || null,
      p_exclude_legacy: excludeLegacy || false
    });
    if (error) throw error;
    const counts = {
      all: 0,
      completed: 0,
      pending: 0,
      cancelled: 0,
      refunded: 0,
      partially_refunded: 0
    };
    (data || []).forEach(({ status, count }) => {
      counts[status] = Number(count);
    });
    return counts;
  } catch (error) {
    console.error("Error fetching sales counts:", error);
    return { all: 0, completed: 0, pending: 0, cancelled: 0, refunded: 0, partially_refunded: 0 };
  }
}
async function createRefund(refundData) {
  try {
    if (!refundData.refunded_items || refundData.refunded_items.length === 0) {
      throw new Error("Refund must include at least one item");
    }
    const { data: sale, error: saleError } = await supabase.from("sales").select("total_amount, status").eq("id", refundData.sale_id).single();
    if (saleError) throw saleError;
    if (sale.status === "cancelled") {
      throw new Error("Cannot refund a cancelled sale");
    }
    const { data, error } = await supabase.from("sale_refunds").insert([refundData]).select().single();
    if (error) throw error;
    const newStatus = parseFloat(refundData.amount) >= parseFloat(sale.total_amount) ? "refunded" : "partially_refunded";
    const { error: statusErr } = await supabase.from("sales").update({ status: newStatus, payment_status: "refunded" }).eq("id", refundData.sale_id);
    if (statusErr) throw statusErr;
    await mutate((key) => typeof key === "string" && key.includes("sales"));
    await mutate((key) => typeof key === "string" && key.includes("product"));
    await reverseSalePackageEffects(refundData.sale_id);
    return { data, error: null };
  } catch (error) {
    console.error("Error creating refund:", error);
    return { data: null, error };
  }
}
async function reverseSalePackageEffects(saleId) {
  try {
    await supabase.from("package_usages").delete().eq("sale_id", saleId);
    await supabase.from("client_packages").update({ status: "cancelled", updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("sale_id", saleId).neq("status", "cancelled");
    await supabase.from("discount_plan_usages").delete().eq("sale_id", saleId);
    await supabase.from("client_discount_plans").update({ status: "cancelled", updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("sale_id", saleId).neq("status", "cancelled");
    await mutate((key) => typeof key === "string" && key.startsWith("package-"));
    await mutate((key) => typeof key === "string" && key.startsWith("client-packages-"));
    await mutate((key) => typeof key === "string" && key.startsWith("all-client-packages-"));
    await mutate((key) => typeof key === "string" && key.startsWith("staff-pkg-commissions-"));
    await mutate((key) => typeof key === "string" && key.startsWith("discount-plan-"));
    await mutate((key) => typeof key === "string" && key.startsWith("client-discount-plans-"));
  } catch (err) {
    console.error("[sale-service] reverseSalePackageEffects failed:", err);
  }
}
function useGetClientSales(clientId, page = 0, pageSize = 50) {
  const cacheKey = `client-sales-${clientId}-${page}-${pageSize}`;
  const { data, isLoading, error, isValidating } = useSWR(
    cacheKey,
    () => fetchClientSales(clientId, page, pageSize),
    options
  );
  const tableConfigs = [{ table: "sales", filter: `client_id=eq.${clientId}` }];
  useRealtimeSubscription(`client-sales-changes-${clientId}`, tableConfigs);
  const memoizedValue = reactExports.useMemo(
    () => ({
      sales: data?.sales || [],
      salesLoading: isLoading,
      salesError: error,
      salesValidating: isValidating,
      totalCount: data?.totalCount || 0,
      salesEmpty: !isLoading && !data?.sales?.length
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
async function fetchClientSales(clientId, page, pageSize) {
  try {
    let query = supabase.from("sales").select(
      `
          *,
          client:client_profiles (first_name, last_name),
          cashier:profiles!cashier_id (first_name, last_name),
          items:sale_items (
            *,
            product:products (name, sku),
            service:services (name)
          )
        `,
      { count: "exact" }
    ).eq("client_id", clientId).eq("status", "completed").order("created_at", { ascending: false });
    const from = page * pageSize;
    const to = from + pageSize - 1;
    query = query.range(from, to);
    const { data, error, count } = await query;
    if (error) throw error;
    return {
      sales: data,
      totalCount: count
    };
  } catch (error) {
    console.error("Error fetching client sales:", error);
    throw error;
  }
}
async function fetchSaleAuditLogs(saleId, paymentIds = [], itemIds = []) {
  try {
    if (!saleId) return [];
    const SELECT_FIELDS = `
      *,
      user:profiles!user_id (
        first_name,
        last_name
      )
    `;
    const { data: saleLogs, error: saleError } = await supabase.from("audit_logs").select(SELECT_FIELDS).eq("resource_type", "sale").eq("resource_id", saleId).order("created_at", { ascending: false });
    if (saleError) throw saleError;
    let paymentLogs = [];
    if (paymentIds.length > 0) {
      const { data: pLogs, error: pError } = await supabase.from("audit_logs").select(SELECT_FIELDS).eq("resource_type", "sale_payment").in("resource_id", paymentIds).order("created_at", { ascending: false });
      if (pError) throw pError;
      paymentLogs = pLogs || [];
    }
    let itemLogs = [];
    if (itemIds.length > 0) {
      const { data: iLogs, error: iError } = await supabase.from("audit_logs").select(SELECT_FIELDS).eq("resource_type", "sale_item").in("resource_id", itemIds).order("created_at", { ascending: false });
      if (iError) throw iError;
      itemLogs = iLogs || [];
    }
    const all = [...saleLogs || [], ...paymentLogs, ...itemLogs];
    all.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return all;
  } catch (error) {
    console.error("Error fetching sale audit logs:", error);
    return [];
  }
}
function useSaleAuditLogs(saleId, paymentIds = [], itemIds = []) {
  const cacheKey = saleId ? `sale-audit:${saleId}` : null;
  const {
    data,
    error,
    isLoading,
    mutate: revalidate
  } = useSWR(cacheKey, () => fetchSaleAuditLogs(saleId, paymentIds, itemIds), options);
  return {
    auditLogs: data || [],
    auditLogsLoading: isLoading,
    auditLogsError: error,
    revalidateAuditLogs: revalidate
  };
}
export {
  useGetSalesCounts as a,
  useSaleAuditLogs as b,
  useGetSale as c,
  addSalePayment as d,
  createRefund as e,
  updateSaleStatus as f,
  updateSaleItemQuantity as g,
  updateSaleItemStylist as h,
  addSaleItemExistingSale as i,
  updateSaleDetails as j,
  updateSaleManualDiscount as k,
  validateVoucher as l,
  useGetClientVouchers as m,
  useGetClientSales as n,
  posService as o,
  processTransaction as p,
  removeSaleItemExistingSale as r,
  useGetSales as u,
  validateDiscountCode as v
};
