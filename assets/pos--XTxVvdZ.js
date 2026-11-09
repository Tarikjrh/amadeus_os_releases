const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./deposit-service-DjFWmn8Y.js","./index-B08HRm4A.js","./index-DCQoYTVP.css","./sale-service-CWyXC78v.js","./package-service-U57UHzc2.js"])))=>i.map(i=>d[i]);
import { r as reactExports, j as jsxRuntimeExports, B as Box, c as Typography, S as Stack, d as Button, I as IconButton, a as Iconify, a2 as Chip, cJ as useHideSeniorPrice, s as supabase, b as CircularProgress, M as MenuItem, al as Avatar, cz as useColorScheme, ar as Scrollbar, a5 as alpha, T as Tooltip, y as Card, cR as POS_CARD_TITLE_FONT_SIZE, a0 as fCurrency, cS as PLANS_FILTER_TABS, cT as usePosBranchProducts, t as toast, ax as Alert, x as Select, aD as recordServiceUsage, h as dayjs, ap as Tabs, aq as Tab, H as Menu, K as Divider, L as Label, a1 as LinearProgress, ay as __vitePreload, av as useAuthContext, bY as usePermissions, a6 as useUserBranches, E as Ee, cU as LS_KEY_ALLOW_SERVICE_USAGE, cV as LS_KEY_COMMISSION_DIALOG, cW as CATALOG_MIN_HEIGHT, a4 as DashboardContent, cX as TABS, cY as TAX_RATE, cZ as CATALOG_BOTTOM_GAP, C as CONFIG } from "./index-B08HRm4A.js";
import { f as formatPhoneNumberIntl } from "./index-C4JOln-R.js";
import { j as useGetBranchServices, b as SERVICE_GROUPS, h as useGetServices, q as useGetBranchServiceCount } from "./services-UhlA7T7c.js";
import { g as useGetBranchAddons, b as ADDON_CATEGORY_OPTIONS, h as useGetBranchAddonCount } from "./addons.constants-Dge4b02l.js";
import { createClientPackage, toFirstOfMonth, redeemPackage, getActivePackagesForServicesBatch, useGetServicesByIds, useGetClientPackages, useGetPackageTemplates } from "./package-service-U57UHzc2.js";
import { u as useClientAutocomplete, a as useClient } from "./client-service-swr-DnF01Wop.js";
import { f as earnPointsFromSale, g as useGetClientLoyaltyBalance } from "./loyalty-service-D710t09P.js";
import { j as createClientDiscountPlan, k as redeemDiscountPlan, l as getActiveDiscountPlansForServicesBatch, m as getBatchPlanUsageCounts, t as toFirstOfMonth$1, u as useGetDiscountPlanUsages, n as useGetClientDiscountPlans, o as useGetDiscountPlanTemplates, p as checkClientHasDiscountPlan } from "./discount-plan-service-DWSzNOBf.js";
import { n as needsHairRecord, d as hasHairRecord, c as PosProductStylistSelectDialog, b as PosServiceStylistSelectionDialog, e as buildHairRecordEntries, h as handleSilentPrint, P as PosPaymentDialog, I as InvoiceReceipt } from "./pos-payment-dialog-D68iINOQ.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { C as ClientImportanceLabel } from "./index-Dha6iQ4E.js";
import { P as PRINTER_SETTINGS_KEY } from "./printer-settings.constants-c9EyPjes.js";
import { e as updateAppointmentStatus, f as useAppointments, C as ClientQuickAddDialog } from "./client-quick-add-dialog-Ckc4WOT8.js";
import { m as measuredUnitPrice, r as roundMeasure, i as isMeasuredItem, f as formatMeasureSummary, g as getMeasureUnitLabel, a as isMeasuredService, b as getMeasureDefaultAmount, c as getMeasureStep } from "./measured-service-BED800gI.js";
import { o } from "./index-Di_Bgabu.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { T as TextField, F as FormControl, I as InputLabel } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { L as LoadingButton } from "./LoadingButton-DJQpPOpu.js";
import { H as HairRecordDialog, c as createHairRecordsForSale } from "./hair-record-dialog-CLUtdK51.js";
import { e as MEASURE_QUICK_AMOUNTS, b as DEFAULT_MEASURE_STEP } from "./measured-service.constants-DhXw6UJq.js";
import { u as useStaffData } from "./useStaffData-BIkbeKJv.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { S as Skeleton } from "./Skeleton-BC-WlQQE.js";
import { s as ss } from "./index-CtpEzAlo.js";
import { P as PRODUCT_CATEGORIES } from "./product-categories.constants-BbDELu5c.js";
import { v as validateDiscountCode, l as validateVoucher, p as processTransaction, m as useGetClientVouchers } from "./sale-service-CWyXC78v.js";
import { v as validateRedeemCode, m as markRedemptionUsed, a as useGetRewardRedemptions } from "./rewards-service-B3yYaPmf.js";
import { e as useGetClientCashbackWallet, r as redeemCashback, f as creditCashbackFromSale } from "./cashback-service-C1s-xYNM.js";
import { A as Accordion, a as AccordionSummary, b as AccordionDetails } from "./AccordionDetails-O5tQthbm.js";
import { a as applyDepositsToSale } from "./deposit-service-DjFWmn8Y.js";
import { u as useBarcodeScanner } from "./use-barcode-scanner-CEYdIlFE.js";
import { D as DatePicker } from "./DatePicker-D3PAml74.js";
import { P as PackageServicesDialog } from "./package-services-dialog-B7t0UyM9.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./staff-service-CYDKVOm2.js";
import "./Checkbox-Br8xlIAK.js";
import "./render-location-type-B-TZb61z.js";
import "./form-provider-u_wAFv-h.js";
import "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import "./with-selector-ClfCuV5M.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./schema-utils-CG9_JlGr.js";
import "./schemas-BVeYYbTr.js";
import "./coerce-5-WTXoHr.js";
const ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  UPDATE_QTY: "UPDATE_QTY",
  UPDATE_PRICE: "UPDATE_PRICE",
  UPDATE_MEASURE: "UPDATE_MEASURE",
  ZERO_PRICE: "ZERO_PRICE",
  RESTORE_PRICE: "RESTORE_PRICE",
  RESET: "RESET",
  SET_ITEMS: "SET_ITEMS",
  SET_HAIR_RECORD: "SET_HAIR_RECORD"
};
function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      const item = action.payload;
      if (item.item_type === "package") {
        return [...state, { ...item, quantity: 1, line_total: item.unit_price }];
      }
      if (item.item_type === "addon" && item.is_custom_price) {
        return [...state, { ...item, quantity: 1, line_total: item.unit_price }];
      }
      if (item.item_type === "service" && item.measure_quantity != null) {
        return [...state, { ...item, quantity: 1, line_total: item.unit_price }];
      }
      const isSame = (i) => {
        if (i.item_type !== item.item_type) return false;
        if (item.item_type === "product")
          return i.product_id === item.product_id && !!i.is_service_usage === !!item.is_service_usage;
        if (item.item_type === "addon")
          return i.addon_id === item.addon_id && i.stylist_id === item.stylist_id;
        return i.service_id === item.service_id && i.stylist_id === item.stylist_id;
      };
      const existingIndex = state.findIndex(isSame);
      if (existingIndex >= 0) {
        return state.map(
          (i, idx) => idx === existingIndex ? {
            ...i,
            quantity: i.quantity + 1,
            line_total: (i.quantity + 1) * i.unit_price
          } : i
        );
      }
      return [...state, { ...item, quantity: 1, line_total: item.unit_price }];
    }
    case ACTIONS.REMOVE:
      return state.filter((_, i) => i !== action.payload);
    case ACTIONS.UPDATE_QTY: {
      const { index, quantity } = action.payload;
      if (quantity <= 0) return state.filter((_, i) => i !== index);
      return state.map(
        (item, i) => i === index ? { ...item, quantity, line_total: quantity * item.unit_price } : item
      );
    }
    case ACTIONS.UPDATE_PRICE: {
      const { index, price } = action.payload;
      return state.map((item, i) => {
        if (i !== index) return item;
        const measureUnitPrice = item.measure_quantity > 0 ? parseFloat((price / item.measure_quantity).toFixed(2)) : item.measure_unit_price;
        return {
          ...item,
          unit_price: price,
          line_total: item.quantity * price,
          ...item.measure_quantity != null && { measure_unit_price: measureUnitPrice }
        };
      });
    }
    // Re-price a measured service line after the stylist corrects the amount used.
    case ACTIONS.UPDATE_MEASURE: {
      const { index, measureQuantity } = action.payload;
      return state.map((item, i) => {
        if (i !== index) return item;
        const unitPrice = measuredUnitPrice(measureQuantity, item.measure_unit_price);
        return {
          ...item,
          measure_quantity: measureQuantity,
          unit_price: unitPrice,
          line_total: item.quantity * unitPrice
        };
      });
    }
    case ACTIONS.ZERO_PRICE: {
      const { index } = action.payload;
      return state.map(
        (item, i) => i === index ? { ...item, original_unit_price: item.unit_price, unit_price: 0, line_total: 0 } : item
      );
    }
    case ACTIONS.RESTORE_PRICE: {
      const { index } = action.payload;
      return state.map((item, i) => {
        if (i !== index || item.original_unit_price == null) return item;
        const { original_unit_price, ...rest } = item;
        return { ...rest, unit_price: original_unit_price, line_total: item.quantity * original_unit_price };
      });
    }
    // The colour formula the stylist captured for this line. Held on the cart
    // until checkout, then written as a client hair record linked to the sale.
    case ACTIONS.SET_HAIR_RECORD: {
      const { index, hairRecord } = action.payload;
      return state.map((item, i) => i === index ? { ...item, hair_record: hairRecord } : item);
    }
    case ACTIONS.RESET:
      return [];
    case ACTIONS.SET_ITEMS:
      return action.payload;
    default:
      return state;
  }
}
function useCart(TAX_RATE2 = 0, storageKey = null) {
  const [items, dispatch] = reactExports.useReducer(cartReducer, [], () => {
    if (!storageKey) return [];
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch (_) {
      return [];
    }
  });
  reactExports.useEffect(() => {
    if (!storageKey) return;
    if (items.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } else {
      localStorage.removeItem(storageKey);
    }
  }, [items, storageKey]);
  const addItem = reactExports.useCallback((item) => dispatch({ type: ACTIONS.ADD, payload: item }), []);
  const removeItem = reactExports.useCallback((index) => dispatch({ type: ACTIONS.REMOVE, payload: index }), []);
  const updateQuantity = reactExports.useCallback(
    (index, quantity) => dispatch({ type: ACTIONS.UPDATE_QTY, payload: { index, quantity } }),
    []
  );
  const updatePrice = reactExports.useCallback(
    (index, price) => dispatch({ type: ACTIONS.UPDATE_PRICE, payload: { index, price } }),
    []
  );
  const updateMeasure = reactExports.useCallback(
    (index, measureQuantity) => dispatch({ type: ACTIONS.UPDATE_MEASURE, payload: { index, measureQuantity } }),
    []
  );
  const zeroPrice = reactExports.useCallback(
    (index) => dispatch({ type: ACTIONS.ZERO_PRICE, payload: { index } }),
    []
  );
  const restorePrice = reactExports.useCallback(
    (index) => dispatch({ type: ACTIONS.RESTORE_PRICE, payload: { index } }),
    []
  );
  const setHairRecord = reactExports.useCallback(
    (index, hairRecord) => dispatch({ type: ACTIONS.SET_HAIR_RECORD, payload: { index, hairRecord } }),
    []
  );
  const resetCart = reactExports.useCallback(() => dispatch({ type: ACTIONS.RESET }), []);
  const setItems = reactExports.useCallback(
    (newItems) => dispatch({ type: ACTIONS.SET_ITEMS, payload: newItems }),
    []
  );
  const totals = reactExports.useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.line_total, 0);
    return { subtotal };
  }, [items]);
  return {
    items,
    ...totals,
    addItem,
    removeItem,
    updateQuantity,
    updatePrice,
    updateMeasure,
    zeroPrice,
    restorePrice,
    setHairRecord,
    resetCart,
    setItems
  };
}
function PosPriceEditDialog({ open, item, onClose, onConfirm }) {
  const [price, setPrice] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (open && item) {
      setPrice(item.unit_price != null ? String(item.unit_price) : "");
      setError("");
    }
  }, [open, item]);
  const handleClose = () => {
    setPrice("");
    setError("");
    onClose();
  };
  const handleConfirm = () => {
    const parsed = parseFloat(price);
    if (Number.isNaN(parsed) || parsed < 0) {
      setError("Please enter a valid price");
      return;
    }
    onConfirm(parsed);
    setPrice("");
    setError("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleConfirm();
  };
  if (!item) return null;
  const name = item.item_type === "product" ? item.product_name : item.item_type === "addon" ? item.addon_name : item.service_name;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "xs", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Edit Price" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 2 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: name }),
        item.stylist_name && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: item.stylist_name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Enter the new unit price:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            autoFocus: true,
            fullWidth: true,
            type: "number",
            inputProps: { min: 0, step: "0.01" },
            value: price,
            onChange: (e) => {
              setPrice(e.target.value);
              setError("");
            },
            onKeyDown: handleKeyDown,
            error: !!error,
            helperText: error,
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: handleClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { variant: "contained", onClick: handleConfirm, disabled: price === "", children: "Update Price" })
    ] })
  ] });
}
PosPriceEditDialog.propTypes = {
  open: o.bool.isRequired,
  item: o.object,
  onClose: o.func.isRequired,
  onConfirm: o.func.isRequired
};
function PosHairFormulaDialog({ open, cartItem, clientId, onClose, onConfirm }) {
  const handleSubmit = reactExports.useCallback(
    async (payload) => {
      onConfirm(payload);
    },
    [onConfirm]
  );
  const existing = cartItem?.hair_record ?? null;
  const record = reactExports.useMemo(
    () => existing ? { ...existing, record_type: "color" } : null,
    [existing]
  );
  if (!cartItem) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    HairRecordDialog,
    {
      open,
      onClose,
      onSubmit: handleSubmit,
      clientId,
      serviceId: cartItem.service_id,
      serviceName: cartItem.service_name,
      record,
      title: "Colour formula",
      submitLabel: "Save to sale",
      showTypeAndDate: false
    }
  );
}
PosHairFormulaDialog.propTypes = {
  open: o.bool.isRequired,
  cartItem: o.object,
  clientId: o.string,
  onClose: o.func.isRequired,
  onConfirm: o.func.isRequired
};
function PosServiceUnitsDialog({
  open,
  serviceName,
  unitLabel,
  pricePerUnit,
  step,
  initialAmount,
  onClose,
  onConfirm
}) {
  const [amount, setAmount] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (open) {
      setAmount(initialAmount != null ? String(initialAmount) : "");
      setError("");
    }
  }, [open, initialAmount]);
  const parsed = parseFloat(amount);
  const isValid = Number.isFinite(parsed) && parsed > 0;
  const linePrice = isValid ? measuredUnitPrice(parsed, pricePerUnit) : 0;
  const handleStep = (direction) => {
    const base = Number.isFinite(parsed) ? parsed : 0;
    const next = roundMeasure(base + direction * step);
    setAmount(String(next > 0 ? next : step));
    setError("");
  };
  const handleConfirm = () => {
    if (!isValid) {
      setError(`Enter how many ${unitLabel}s were used`);
      return;
    }
    onConfirm(roundMeasure(parsed));
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleConfirm();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "xs", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Amount Used" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 2 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: serviceName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
          "$",
          (parseFloat(pricePerUnit) || 0).toFixed(2),
          " per ",
          unitLabel
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              onClick: () => handleStep(-1),
              disabled: !Number.isFinite(parsed) || parsed <= step,
              sx: { border: "1.5px solid", borderColor: "divider" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:minus-fill", width: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              autoFocus: true,
              fullWidth: true,
              type: "number",
              value: amount,
              onChange: (event) => {
                setAmount(event.target.value);
                setError("");
              },
              onKeyDown: handleKeyDown,
              error: !!error,
              helperText: error,
              inputProps: { min: 0, step, style: { textAlign: "center", fontWeight: 700 } },
              InputProps: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(InputAdornment, { position: "end", children: [
                  unitLabel,
                  "s"
                ] })
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              onClick: () => handleStep(1),
              sx: { border: "1.5px solid", borderColor: "divider" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:plus-fill", width: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.75, flexWrap: "wrap", useFlexGap: true, children: MEASURE_QUICK_AMOUNTS.map((quick) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: quick,
            clickable: true,
            size: "small",
            color: parsed === quick ? "primary" : "default",
            variant: parsed === quick ? "filled" : "outlined",
            onClick: () => {
              setAmount(String(quick));
              setError("");
            }
          },
          quick
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            sx: { px: 1.5, py: 1.25, borderRadius: 1, bgcolor: "background.neutral" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Line price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h6", fontWeight: 700, children: [
                "$",
                linePrice.toFixed(2)
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", onClick: handleConfirm, disabled: !isValid, children: "Confirm" })
    ] })
  ] });
}
PosServiceUnitsDialog.propTypes = {
  open: o.bool.isRequired,
  serviceName: o.string,
  unitLabel: o.string.isRequired,
  pricePerUnit: o.number,
  step: o.number.isRequired,
  initialAmount: o.number,
  onClose: o.func.isRequired,
  onConfirm: o.func.isRequired
};
function processPricing(data, branchId) {
  const byLevel = { junior: null, senior: null, prive: null };
  data?.forEach((p) => {
    if (p.is_active && (!p.valid_until || new Date(p.valid_until) > /* @__PURE__ */ new Date())) {
      if (!byLevel[p.stylist_level] || branchId && p.branch_id === branchId) {
        byLevel[p.stylist_level] = p;
      }
    }
  });
  return {
    junior: byLevel.junior?.price ?? 0,
    senior: byLevel.senior?.price ?? 0,
    prive: byLevel.prive?.price ?? 0
  };
}
function PosServiceReassignDialog({
  open,
  cartItem,
  branchId,
  onClose,
  onConfirm
}) {
  const [selectedLevel, setSelectedLevel] = reactExports.useState(null);
  const [selectedStaff, setSelectedStaff] = reactExports.useState(null);
  const [prices, setPrices] = reactExports.useState({ junior: 0, senior: 0, prive: 0 });
  const [loadingPrices, setLoadingPrices] = reactExports.useState(false);
  const { staff, loading: staffLoading } = useStaffData(branchId);
  const hideSeniorPrice = useHideSeniorPrice();
  reactExports.useEffect(() => {
    if (!open || !cartItem) return;
    setSelectedLevel(cartItem.stylist_level || null);
    setSelectedStaff(null);
    if (cartItem.junior_price !== void 0 || cartItem.senior_price !== void 0 || cartItem.prive_price !== void 0) {
      setPrices({
        junior: cartItem.junior_price ?? 0,
        senior: cartItem.senior_price ?? 0,
        prive: cartItem.prive_price ?? 0
      });
      return;
    }
    let cancelled = false;
    setLoadingPrices(true);
    supabase.from("service_pricing").select("stylist_level, price, branch_id, is_active, valid_until").eq("service_id", cartItem.service_id).then(({ data }) => {
      if (cancelled) return;
      setPrices(processPricing(data, branchId));
      setLoadingPrices(false);
    });
    return () => {
      cancelled = true;
    };
  }, [open, cartItem, branchId]);
  reactExports.useEffect(() => {
    if (!open || !cartItem?.stylist_id || !staff?.length) return;
    const found = staff.find((s) => s.id === cartItem.stylist_id);
    setSelectedStaff(found || null);
  }, [open, cartItem, staff]);
  const getAvailableStaff = () => {
    if (!staff || !selectedLevel) return [];
    return staff.filter((member) => {
      const hasLevel = member.level?.toLowerCase() === selectedLevel.toLowerCase();
      const canPerform = !cartItem || !member.services?.length || member.services.some((s) => s.service_id === cartItem.service_id);
      return hasLevel && canPerform;
    });
  };
  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setSelectedStaff(null);
  };
  const handleConfirm = () => {
    if (!selectedLevel) return;
    const price = prices[selectedLevel] ?? 0;
    onConfirm({
      staffMember: selectedStaff,
      stylistLevel: selectedLevel,
      price
    });
    onClose();
  };
  const handleClearStaff = () => {
    const price = prices[selectedLevel] ?? 0;
    onConfirm({
      staffMember: null,
      stylistLevel: selectedLevel,
      price
    });
    onClose();
  };
  if (!cartItem) return null;
  const levelConfig = [
    { key: "junior", label: "Junior", color: "info", subtitle: "Entry level" },
    { key: "senior", label: "Senior", color: "warning", subtitle: "Experienced" },
    { key: "prive", label: "Privé", color: "success", subtitle: "Master level" }
    // keep senior visible when the item is already assigned to it, so the current
    // assignment is never hidden from the user
  ].filter(({ key }) => key !== "senior" || !hideSeniorPrice || selectedLevel === "senior");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Reassign Service Stylist" }),
      cartItem.service_category && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Chip,
        {
          label: cartItem.service_category,
          size: "small",
          sx: { textTransform: "capitalize" }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 600, children: cartItem.service_name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Choose the stylist level for this service:" }),
      loadingPrices ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1.5, children: levelConfig.map(({ key, label, color, subtitle }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: selectedLevel === key ? "contained" : "outlined",
          color,
          size: "medium",
          onClick: () => handleLevelSelect(key),
          sx: { flex: 1, p: 1, borderWidth: 2, "&:hover": { borderWidth: 2 } },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "column", alignItems: "center", spacing: 0.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                color: selectedLevel === key ? "white" : "text.secondary",
                children: subtitle
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "h6",
                color: selectedLevel === key ? "white" : `${color}.main`,
                children: [
                  "$",
                  parseFloat(prices[key] || 0).toFixed(2)
                ]
              }
            )
          ] })
        },
        key
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1.5 }, children: "Select staff member (optional):" }),
        staffLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Autocomplete,
          {
            options: getAvailableStaff(),
            getOptionLabel: (option) => option?.display_name || "",
            isOptionEqualToValue: (option, value) => option?.id === value?.id,
            value: selectedStaff,
            onChange: (_, newValue) => setSelectedStaff(newValue),
            disabled: !selectedLevel,
            renderOption: (props, option) => /* @__PURE__ */ reactExports.createElement(MenuItem, { ...props, key: option.id }, /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5, width: "100%" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { src: option.avatar, sx: { width: 32, height: 32 }, children: option.display_name?.[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: option.display_name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Typography,
                  {
                    variant: "caption",
                    color: "text.secondary",
                    textTransform: "capitalize",
                    children: [
                      option.level,
                      " Stylist"
                    ]
                  }
                )
              ] })
            ] })),
            renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                ...params,
                placeholder: selectedLevel ? "Search staff..." : "Select a level first",
                size: "small"
              }
            ),
            noOptionsText: !selectedLevel ? "Select a level to see available staff" : "No staff found for this level"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClearStaff, color: "inherit", disabled: !selectedLevel, children: "Clear Staff" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          onClick: handleConfirm,
          disabled: !selectedLevel,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:user-check-bold" }),
          children: "Update"
        }
      )
    ] })
  ] });
}
PosServiceReassignDialog.propTypes = {
  open: o.bool.isRequired,
  cartItem: o.object,
  branchId: o.string,
  onClose: o.func.isRequired,
  onConfirm: o.func.isRequired
};
function PosCart({
  items,
  packageCoverage = {},
  planCoverage = {},
  onUpdateQuantity,
  onUpdatePrice,
  onUpdateMeasure,
  onRemoveItem,
  onAssignStaff,
  onReassignService,
  onZeroPrice,
  onRestorePrice,
  onSetHairRecord,
  clientId,
  branchId,
  canRemoveItems = true,
  canZeroPrice = false
}) {
  const isDarkMode = useColorScheme().mode === "dark";
  const longPressTimer = reactExports.useRef(null);
  const [reassignIndex, setReassignIndex] = reactExports.useState(null);
  const [reassignDialogOpen, setReassignDialogOpen] = reactExports.useState(false);
  const [serviceReassignIndex, setServiceReassignIndex] = reactExports.useState(null);
  const [serviceReassignDialogOpen, setServiceReassignDialogOpen] = reactExports.useState(false);
  const [priceEditIndex, setPriceEditIndex] = reactExports.useState(null);
  const [priceEditDialogOpen, setPriceEditDialogOpen] = reactExports.useState(false);
  const [measureIndex, setMeasureIndex] = reactExports.useState(null);
  const [measureDialogOpen, setMeasureDialogOpen] = reactExports.useState(false);
  const [formulaIndex, setFormulaIndex] = reactExports.useState(null);
  const [formulaDialogOpen, setFormulaDialogOpen] = reactExports.useState(false);
  const handleFormulaOpen = reactExports.useCallback((index) => {
    setFormulaIndex(index);
    setFormulaDialogOpen(true);
  }, []);
  const handleFormulaClose = reactExports.useCallback(() => {
    setFormulaDialogOpen(false);
  }, []);
  const handleFormulaConfirm = reactExports.useCallback(
    (payload) => {
      if (onSetHairRecord) onSetHairRecord(formulaIndex, payload);
      setFormulaDialogOpen(false);
    },
    [onSetHairRecord, formulaIndex]
  );
  const handlePointerDown = reactExports.useCallback((index, itemType) => {
    longPressTimer.current = setTimeout(() => {
      if (itemType === "service") {
        setServiceReassignIndex(index);
        setServiceReassignDialogOpen(true);
      } else {
        setReassignIndex(index);
        setReassignDialogOpen(true);
      }
    }, 500);
  }, []);
  const handlePointerUp = reactExports.useCallback(() => {
    clearTimeout(longPressTimer.current);
  }, []);
  const handleReassignConfirm = reactExports.useCallback(
    (staffMember) => {
      if (onAssignStaff) onAssignStaff(reassignIndex, staffMember);
      setReassignDialogOpen(false);
    },
    [onAssignStaff, reassignIndex]
  );
  const handleReassignClose = reactExports.useCallback(() => {
    setReassignDialogOpen(false);
  }, []);
  const handleServiceReassignConfirm = reactExports.useCallback(
    (result) => {
      if (onReassignService) onReassignService(serviceReassignIndex, result);
      setServiceReassignDialogOpen(false);
    },
    [onReassignService, serviceReassignIndex]
  );
  const handleServiceReassignClose = reactExports.useCallback(() => {
    setServiceReassignDialogOpen(false);
  }, []);
  const handleMeasureOpen = reactExports.useCallback((index) => {
    setMeasureIndex(index);
    setMeasureDialogOpen(true);
  }, []);
  const handleMeasureClose = reactExports.useCallback(() => {
    setMeasureDialogOpen(false);
  }, []);
  const handleMeasureConfirm = reactExports.useCallback(
    (amount) => {
      if (onUpdateMeasure) onUpdateMeasure(measureIndex, amount);
      setMeasureDialogOpen(false);
    },
    [onUpdateMeasure, measureIndex]
  );
  const measureItem = measureIndex != null ? items[measureIndex] : null;
  const handlePriceEditOpen = reactExports.useCallback((index) => {
    setPriceEditIndex(index);
    setPriceEditDialogOpen(true);
  }, []);
  const handlePriceEditClose = reactExports.useCallback(() => {
    setPriceEditDialogOpen(false);
  }, []);
  const handlePriceEditConfirm = reactExports.useCallback(
    (newPrice) => {
      if (onUpdatePrice) onUpdatePrice(priceEditIndex, newPrice);
      setPriceEditDialogOpen(false);
    },
    [onUpdatePrice, priceEditIndex]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Scrollbar, { sx: { flex: 1, minHeight: 0, overflow: "auto" }, children: [
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 7, textAlign: "center", color: "text.disabled" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Iconify,
        {
          icon: "solar:cart-large-minimalistic-bold-duotone",
          width: 44,
          sx: { mb: 1.5, opacity: 0.2 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 500, children: "Cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: "Add products, services or packages" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { children: items.map((item, index) => {
      const isCovered = !!packageCoverage[index];
      const coveredByPkg = isCovered ? packageCoverage[index] : null;
      const coveredQty = coveredByPkg?.covered_quantity ?? item.quantity ?? 1;
      const isPartiallyCovered = isCovered && coveredQty < (item.quantity ?? 1);
      const hasPlanDiscount = !isCovered && !!planCoverage[index];
      const planDiscount = hasPlanDiscount ? planCoverage[index] : null;
      const name = item.item_type === "product" ? item.product_name : item.item_type === "addon" ? item.addon_name : item.item_type === "package" || item.item_type === "package_deposit" ? item.package_name : item.item_type === "discount_plan" || item.item_type === "discount_plan_deposit" ? item.plan_name : item.service_name;
      const isServiceUsage = !!item.is_service_usage;
      const isProduct = item.item_type === "product";
      const isService = item.item_type === "service";
      const isAddon = item.item_type === "addon";
      const isLongPressable = isProduct || isService || isAddon;
      const isPriceEditable = !!onUpdatePrice && !isCovered && !isServiceUsage && (isProduct || isService || isAddon);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          alignItems: "center",
          spacing: 1,
          onPointerDown: isLongPressable ? () => handlePointerDown(index, item.item_type) : void 0,
          onPointerUp: isLongPressable ? handlePointerUp : void 0,
          onPointerLeave: isLongPressable ? handlePointerUp : void 0,
          sx: {
            px: 2,
            py: 1.25,
            borderBottom: "1px solid",
            borderColor: "divider",
            transition: "background 0.12s",
            "&:last-child": { borderBottom: "none" },
            "&:hover": { bgcolor: "action.hover" },
            ...isLongPressable && { userSelect: "none", touchAction: "none" },
            ...isCovered && {
              bgcolor: (t) => alpha(t.palette.success.lighter, isDarkMode ? 0.1 : 0.5)
            },
            ...hasPlanDiscount && !isCovered && {
              bgcolor: (t) => alpha(t.palette.info.lighter, isDarkMode ? 0.1 : 0.5)
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: isCovered ? (t) => alpha(t.palette.success.main, 0.15) : hasPlanDiscount ? (t) => alpha(t.palette.info.main, 0.15) : "background.neutral",
                  border: "1.5px solid",
                  borderColor: isCovered ? "success.light" : hasPlanDiscount ? "info.light" : "divider"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "caption",
                    fontWeight: 700,
                    sx: {
                      color: isCovered ? "success.dark" : hasPlanDiscount ? "info.dark" : "text.secondary",
                      lineHeight: 1
                    },
                    children: index + 1
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: name, placement: "top", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, noWrap: true, children: name }) }),
                isCovered && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: isPartiallyCovered ? `${coveredQty}/${item.quantity} free` : "Free",
                    size: "small",
                    color: "success",
                    sx: { height: 16, fontSize: 9, fontWeight: 700, px: 0.25 }
                  }
                ),
                isServiceUsage && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: "Usage",
                    size: "small",
                    color: "warning",
                    sx: { height: 16, fontSize: 9, fontWeight: 700, px: 0.25 }
                  }
                ),
                hasPlanDiscount && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: `-${planDiscount.discount_percent}%`,
                    size: "small",
                    color: "info",
                    sx: { height: 16, fontSize: 9, fontWeight: 700, px: 0.25 }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", children: isServiceUsage ? ["Stock only, not charged", item.stylist_name].filter(Boolean).join(" · ") : isCovered ? isPartiallyCovered ? `${coveredQty}/${item.quantity} covered by ${coveredByPkg?.package_templates?.name}` : `Covered by ${coveredByPkg?.package_templates?.name}` : hasPlanDiscount ? `${planDiscount.discount_percent}% off via ${planDiscount.plan_name}` : item.item_type === "addon" ? [item.addon_category, item.stylist_name].filter(Boolean).join(" · ") : (item.item_type === "service" || item.item_type === "product") && item.stylist_name ? item.stylist_name : item.item_type === "package" || item.item_type === "package_deposit" ? "Package · 1 month" : item.item_type === "discount_plan" || item.item_type === "discount_plan_deposit" ? "Discount Plan · 1 month" : `$${item.unit_price.toFixed(2)} each` }),
              isMeasuredItem(item) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  size: "small",
                  clickable: !!onUpdateMeasure && !isCovered,
                  onClick: onUpdateMeasure && !isCovered ? (event) => {
                    event.stopPropagation();
                    handleMeasureOpen(index);
                  } : void 0,
                  onPointerDown: (event) => event.stopPropagation(),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pipette-bold", width: 13 }),
                  label: formatMeasureSummary(item),
                  color: "secondary",
                  variant: "soft",
                  sx: {
                    mt: 0.5,
                    mr: 0.5,
                    height: 20,
                    fontSize: 10,
                    fontWeight: 600,
                    "& .MuiChip-icon": { ml: 0.5, mr: -0.25 }
                  }
                }
              ),
              !!onSetHairRecord && needsHairRecord(item) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  size: "small",
                  clickable: true,
                  onClick: (event) => {
                    event.stopPropagation();
                    handleFormulaOpen(index);
                  },
                  onPointerDown: (event) => event.stopPropagation(),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: hasHairRecord(item) ? "solar:check-circle-bold" : "solar:palette-bold",
                      width: 13
                    }
                  ),
                  label: hasHairRecord(item) ? item.hair_record?.formula?.[0]?.shade ? `Formula · ${item.hair_record.formula[0].shade}` : "Formula saved" : "Add formula",
                  color: hasHairRecord(item) ? "success" : "default",
                  variant: hasHairRecord(item) ? "soft" : "outlined",
                  sx: {
                    mt: 0.5,
                    height: 20,
                    fontSize: 10,
                    fontWeight: 600,
                    ...!hasHairRecord(item) && {
                      borderStyle: "dashed",
                      color: "text.secondary"
                    },
                    "& .MuiChip-icon": { ml: 0.5, mr: -0.25 }
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.25, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  size: "small",
                  onClick: () => onUpdateQuantity(index, item.quantity - 1),
                  disabled: item.quantity <= 1,
                  sx: {
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    border: "1.5px solid",
                    borderColor: "divider",
                    p: 0,
                    color: "text.secondary",
                    "&:hover": { borderColor: "primary.main", color: "primary.main" },
                    "&.Mui-disabled": { opacity: 0.35 }
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:minus-fill", width: 11 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "body2",
                  fontWeight: 700,
                  sx: { minWidth: 20, textAlign: "center" },
                  children: item.quantity
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  size: "small",
                  onClick: () => onUpdateQuantity(index, item.quantity + 1),
                  sx: {
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    border: "1.5px solid",
                    borderColor: "divider",
                    p: 0,
                    color: "text.secondary",
                    "&:hover": { borderColor: "primary.main", color: "primary.main" }
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:plus-fill", width: 11 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                onClick: isPriceEditable ? () => handlePriceEditOpen(index) : void 0,
                sx: {
                  textAlign: "right",
                  minWidth: 54,
                  flexShrink: 0,
                  ...isPriceEditable && {
                    cursor: "pointer",
                    borderRadius: 1,
                    px: 0.5,
                    "&:hover": { bgcolor: "action.hover" }
                  }
                },
                children: isCovered ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Typography,
                    {
                      variant: "caption",
                      color: "text.disabled",
                      sx: { textDecoration: "line-through", display: "block", lineHeight: 1.3 },
                      children: [
                        "$",
                        item.line_total.toFixed(2)
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 700, color: "success.dark", children: isPartiallyCovered ? `$${((item.quantity - coveredQty) * item.unit_price).toFixed(2)}` : "$0.00" })
                ] }) : hasPlanDiscount ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Typography,
                    {
                      variant: "caption",
                      color: "text.disabled",
                      sx: { textDecoration: "line-through", display: "block", lineHeight: 1.3 },
                      children: [
                        "$",
                        item.line_total.toFixed(2)
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 700, color: "info.dark", children: [
                    "$",
                    (item.line_total * (1 - planDiscount.discount_percent / 100)).toFixed(2)
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 700, children: [
                  "$",
                  item.line_total.toFixed(2)
                ] })
              }
            ),
            canRemoveItems && /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                onClick: () => onRemoveItem(index),
                sx: {
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  p: 0,
                  color: "error.main",
                  flexShrink: 0,
                  opacity: 0.65,
                  "&:hover": { opacity: 1, bgcolor: (t) => alpha(t.palette.error.main, 0.1) }
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:close-circle-bold", width: 18 })
              }
            ),
            canZeroPrice && (item.original_unit_price != null ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: `Restore to $${item.original_unit_price.toFixed(2)}`, placement: "top", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                onClick: () => onRestorePrice(index),
                sx: {
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  p: 0,
                  color: "success.dark",
                  flexShrink: 0,
                  opacity: 0.65,
                  "&:hover": { opacity: 1, bgcolor: (t) => alpha(t.palette.success.main, 0.1) }
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:refresh-bold", width: 16 })
              }
            ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Set price to $0", placement: "top", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                onClick: () => onZeroPrice(index),
                sx: {
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  p: 0,
                  color: "warning.dark",
                  flexShrink: 0,
                  opacity: 0.65,
                  "&:hover": { opacity: 1, bgcolor: (t) => alpha(t.palette.warning.main, 0.1) }
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:dollar-minimalistic-bold", width: 16 })
              }
            ) }))
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosProductStylistSelectDialog,
      {
        open: reassignDialogOpen,
        itemName: reassignIndex !== null ? items[reassignIndex]?.addon_name || items[reassignIndex]?.product_name : null,
        itemPrice: reassignIndex !== null ? items[reassignIndex]?.unit_price : null,
        itemKind: items[reassignIndex]?.item_type === "addon" ? "addon" : "product",
        branchId,
        onClose: handleReassignClose,
        onConfirm: handleReassignConfirm,
        mode: "reassign",
        initialStaff: reassignIndex !== null && items[reassignIndex]?.stylist_id ? {
          id: items[reassignIndex].stylist_id,
          display_name: items[reassignIndex].stylist_name
        } : null
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosServiceReassignDialog,
      {
        open: serviceReassignDialogOpen,
        cartItem: serviceReassignIndex !== null ? items[serviceReassignIndex] : null,
        branchId,
        onClose: handleServiceReassignClose,
        onConfirm: handleServiceReassignConfirm
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosServiceUnitsDialog,
      {
        open: measureDialogOpen,
        serviceName: measureItem?.service_name,
        unitLabel: getMeasureUnitLabel(measureItem),
        pricePerUnit: parseFloat(measureItem?.measure_unit_price) || 0,
        step: parseFloat(measureItem?.measure_step) || DEFAULT_MEASURE_STEP,
        initialAmount: parseFloat(measureItem?.measure_quantity) || void 0,
        onClose: handleMeasureClose,
        onConfirm: handleMeasureConfirm
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosPriceEditDialog,
      {
        open: priceEditDialogOpen,
        item: priceEditIndex !== null ? items[priceEditIndex] : null,
        onClose: handlePriceEditClose,
        onConfirm: handlePriceEditConfirm
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosHairFormulaDialog,
      {
        open: formulaDialogOpen,
        cartItem: formulaIndex !== null ? items[formulaIndex] : null,
        clientId,
        onClose: handleFormulaClose,
        onConfirm: handleFormulaConfirm
      }
    )
  ] });
}
PosCart.propTypes = {
  items: o.array,
  packageCoverage: o.object,
  onUpdateQuantity: o.func,
  onUpdatePrice: o.func,
  onUpdateMeasure: o.func,
  onRemoveItem: o.func,
  onAssignStaff: o.func,
  onReassignService: o.func,
  onZeroPrice: o.func,
  onRestorePrice: o.func,
  onSetHairRecord: o.func,
  clientId: o.string,
  branchId: o.string,
  canRemoveItems: o.bool,
  canZeroPrice: o.bool
};
const PosCart$1 = reactExports.memo(PosCart);
function TotalsRow({ label, value, color, strong }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: strong ? "subtitle1" : "body2", color: color ?? "text.secondary", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: strong ? "subtitle1" : "body2",
        fontWeight: strong ? 700 : 400,
        color: color ?? (strong ? "text.primary" : "text.primary"),
        children: value
      }
    )
  ] });
}
TotalsRow.propTypes = {
  label: o.string,
  value: o.string,
  color: o.string,
  strong: o.bool
};
function PosTotals({
  subtotal,
  discountAmount,
  discountLabel,
  manualDiscountAmount,
  voucherAmount,
  appliedCashback,
  packageCoveredAmount,
  planDiscountAmount,
  deliveryCharge,
  depositAmount,
  taxRate,
  taxAmount,
  total,
  canPay,
  onPay
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { overflow: "hidden", borderRadius: 0 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TotalsRow, { label: "Subtotal", value: `$${subtotal.toFixed(2)}` }),
      discountAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TotalsRow,
        {
          label: discountLabel || "Discount",
          value: `-$${discountAmount.toFixed(2)}`,
          color: "success.main"
        }
      ),
      manualDiscountAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TotalsRow,
        {
          label: "Manual Discount",
          value: `-$${manualDiscountAmount.toFixed(2)}`,
          color: "success.main"
        }
      ),
      voucherAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TotalsRow,
        {
          label: "Voucher",
          value: `-$${voucherAmount.toFixed(2)}`,
          color: "success.main"
        }
      ),
      appliedCashback > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TotalsRow,
        {
          label: "Cashback",
          value: `-$${appliedCashback.toFixed(2)}`,
          color: "success.main"
        }
      ),
      packageCoveredAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TotalsRow,
        {
          label: "Package Coverage",
          value: `-$${packageCoveredAmount.toFixed(2)}`,
          color: "success.main"
        }
      ),
      planDiscountAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TotalsRow,
        {
          label: "Discount Plan",
          value: `-$${planDiscountAmount.toFixed(2)}`,
          color: "info.main"
        }
      ),
      depositAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TotalsRow,
        {
          label: "Deposit Paid",
          value: `-$${depositAmount.toFixed(2)}`,
          color: "info.main"
        }
      ),
      deliveryCharge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TotalsRow,
        {
          label: "Delivery",
          value: `+$${deliveryCharge.toFixed(2)}`,
          color: "text.primary"
        }
      ),
      taxRate > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TotalsRow, { label: `Tax (${taxRate}%)`, value: `$${taxAmount.toFixed(2)}` })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          px: 2,
          pt: 2,
          pb: 2.5,
          // background: (t) =>
          //   canPay
          //     ? `linear-gradient(135deg, ${t.palette.primary.darker ?? t.palette.primary.dark} 0%, ${t.palette.primary.main} 100%)`
          //     : t.palette.action.disabledBackground,
          transition: "background 0.3s ease"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "baseline", sx: { mb: 2 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: "Total Due" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "h4",
                fontWeight: 800,
                sx: {
                  color: canPay ? "primary.main" : "text.disabled",
                  letterSpacing: "-0.5px"
                },
                children: [
                  "$",
                  total.toFixed(2)
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              fullWidth: true,
              disabled: !canPay,
              onClick: onPay,
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:card-bold" }),
              sx: {
                // py: 1.5,
                // fontSize: '1rem',
                fontWeight: 700,
                // bgcolor: canPay ? 'rgba(255,255,255,0.2)' : undefined,
                backdropFilter: "blur(8px)",
                border: canPay ? "1.5px solid rgba(255,255,255,0.35)" : void 0,
                // color: canPay ? 'white' : undefined,
                boxShadow: "none",
                // '&:hover': {
                //   bgcolor: 'rgba(255,255,255,0.3)',
                //   boxShadow: (t) => `0 4px 16px ${alpha(t.palette.common.black, 0.2)}`,
                // },
                "&.Mui-disabled": {
                  bgcolor: "action.disabledBackground"
                }
              },
              children: canPay ? `Charge $${total.toFixed(2)}` : "Add items & customer to pay"
            }
          )
        ]
      }
    )
  ] });
}
PosTotals.propTypes = {
  subtotal: o.number,
  discountAmount: o.number,
  discountLabel: o.string,
  manualDiscountAmount: o.number,
  voucherAmount: o.number,
  appliedCashback: o.number,
  packageCoveredAmount: o.number,
  planDiscountAmount: o.number,
  deliveryCharge: o.number,
  depositAmount: o.number,
  taxRate: o.number,
  taxAmount: o.number,
  total: o.number,
  canPay: o.bool,
  onPay: o.func
};
const PosTotals$1 = reactExports.memo(PosTotals);
function PosPackageCard({ template, onAddToCart }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      elevation: 0,
      onClick: onAddToCart,
      sx: {
        p: 1.5,
        height: "100%",
        cursor: "pointer",
        border: "1px solid",
        borderColor: "divider",
        borderLeft: "3px solid",
        borderLeftColor: template.color || "primary.main",
        borderRadius: 0,
        "&:hover": {
          borderColor: "primary.main",
          borderLeftColor: template.color || "primary.main",
          boxShadow: (t) => `0 4px 16px ${alpha(t.palette.primary.main, 0.14)}`
        }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 28,
                  height: 28,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: (t) => alpha(t.palette.info.main, 0.12),
                  flexShrink: 0
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:gift-bold-duotone", width: 16, sx: { color: "info.dark" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "subtitle2",
                fontWeight: 700,
                noWrap: true,
                sx: { fontSize: POS_CARD_TITLE_FONT_SIZE, textTransform: "capitalize" },
                children: template.name
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: "Package",
              sx: {
                height: 18,
                fontSize: 10,
                fontWeight: 700,
                flexShrink: 0,
                ml: 0.5,
                bgcolor: (t) => alpha(t.palette.info.main, 0.12),
                color: "info.dark"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            color: "text.secondary",
            sx: {
              fontSize: "0.65rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            },
            children: template.description || "--"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 700, color: "primary.main", children: [
            "$",
            Number(template.price || 0).toFixed(2)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.5, alignItems: "center", children: template.max_uses_per_month ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: `${template.max_uses_per_month}x / mo`,
              sx: { height: 18, fontSize: 10 }
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: "Unlimited",
              color: "success",
              sx: { height: 18, fontSize: 10 }
            }
          ) })
        ] })
      ] })
    }
  ) });
}
function PosDiscountPlanCard({ template, onAddToCart }) {
  const discounts = template.service_discounts || {};
  const serviceIds = template.service_ids || [];
  const discountValues = serviceIds.map((id) => discounts[id]).filter(Boolean);
  const minDiscount = discountValues.length ? Math.min(...discountValues) : 0;
  const maxDiscount = discountValues.length ? Math.max(...discountValues) : 0;
  const planColor = template.color || "#635BFF";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      elevation: 0,
      onClick: onAddToCart,
      sx: {
        p: 1.5,
        height: "100%",
        cursor: "pointer",
        border: "1px solid",
        borderColor: "divider",
        borderLeft: "3px solid",
        borderLeftColor: planColor,
        borderRadius: 0,
        "&:hover": {
          borderColor: "primary.main",
          borderLeftColor: planColor,
          boxShadow: (t) => `0 4px 16px ${alpha(t.palette.primary.main, 0.14)}`
        }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 28,
                  height: 28,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: alpha(planColor, 0.14),
                  flexShrink: 0
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:tag-price-bold-duotone", width: 16, sx: { color: planColor } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "body2",
                fontWeight: 700,
                noWrap: true,
                sx: { fontSize: POS_CARD_TITLE_FONT_SIZE },
                children: template.name
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: "Discount Plan",
              sx: {
                height: 18,
                fontSize: 10,
                fontWeight: 700,
                flexShrink: 0,
                ml: 0.5,
                bgcolor: (t) => alpha(t.palette.warning.main, 0.12),
                color: "warning.dark"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, alignItems: "center", children: [
          minDiscount === maxDiscount ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: `${minDiscount}% off`,
              sx: {
                bgcolor: alpha(planColor, 0.12),
                color: planColor,
                fontWeight: 700,
                fontSize: 10,
                height: 18
              }
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: `${minDiscount}–${maxDiscount}% off`,
              sx: {
                bgcolor: alpha(planColor, 0.12),
                color: planColor,
                fontWeight: 700,
                fontSize: 10,
                height: 18
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              title: serviceIds.length ? `Covers ${serviceIds.length} service(s)` : "No services set",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                serviceIds.length,
                " service",
                serviceIds.length !== 1 ? "s" : ""
              ] })
            }
          )
        ] }),
        template.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            color: "text.secondary",
            noWrap: true,
            sx: { display: "block", fontSize: "0.65rem" },
            children: template.description
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 700, color: "text.primary", children: fCurrency(template.price) })
      ] })
    }
  ) });
}
function PosPlansList({
  packageTemplates,
  discountPlanTemplates,
  packagesLoading,
  discountPlansLoading,
  searchQuery = "",
  onAddPackage,
  onAddDiscountPlan
}) {
  const [filter, setFilter] = reactExports.useState("all");
  const loading = packagesLoading || discountPlansLoading;
  const allItems = reactExports.useMemo(() => {
    const packages = (packageTemplates || []).map((t) => ({ ...t, _type: "package" }));
    const plans = (discountPlanTemplates || []).map((t) => ({ ...t, _type: "discount-plan" }));
    return [...packages, ...plans];
  }, [packageTemplates, discountPlanTemplates]);
  const matchesSearch = (t) => !searchQuery || t.name?.toLowerCase().includes(searchQuery.toLowerCase()) || t.description?.toLowerCase().includes(searchQuery.toLowerCase());
  const filtered = reactExports.useMemo(() => {
    let items = allItems;
    if (filter !== "all") items = items.filter((t) => t._type === filter);
    return items.filter(matchesSearch);
  }, [allItems, filter, searchQuery]);
  const counts = reactExports.useMemo(
    () => ({
      all: allItems.filter(matchesSearch).length,
      package: allItems.filter((t) => t._type === "package" && matchesSearch(t)).length,
      "discount-plan": allItems.filter((t) => t._type === "discount-plan" && matchesSearch(t)).length
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allItems, searchQuery]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { height: "100%", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.5, sx: { mb: 1.5, flexShrink: 0 }, children: PLANS_FILTER_TABS.map(({ key, label, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        onClick: () => setFilter(key),
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          px: 1.25,
          py: 0.5,
          borderRadius: 1,
          cursor: "pointer",
          userSelect: "none",
          transition: "all 0.15s ease",
          ...filter === key ? {
            bgcolor: "text.primary",
            color: "background.paper"
          } : {
            border: "1px solid",
            borderColor: "divider",
            color: "text.secondary",
            "&:hover": { bgcolor: "action.hover", color: "text.primary" }
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 13 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: filter === key ? 700 : 500, children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                minWidth: 16,
                height: 16,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 0.5,
                bgcolor: filter === key ? "rgba(255,255,255,0.2)" : "action.selected"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 700, lineHeight: 1, sx: { fontSize: 10 }, children: counts[key] })
            }
          )
        ]
      },
      key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { sx: { flex: 1, minHeight: 0 }, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { px: 0.5, mb: 1, display: "block" }, children: "Loading plans…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 0, children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 1.5, border: "1px solid", borderColor: "divider" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { mb: 0.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "circular", width: 12, height: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", sx: { flex: 1 }, height: 20 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: "75%", height: 16, sx: { mb: 0.75 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 48, height: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: 60, height: 20, sx: { borderRadius: 3 } })
        ] })
      ] }) }, i)) })
    ] }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 8, textAlign: "center", color: "text.disabled" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:gift-bold-duotone", width: 48, sx: { mb: 1, opacity: 0.4 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: "No plans or packages found" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 0, children: filtered.map(
      (template) => template._type === "package" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        PosPackageCard,
        {
          template,
          onAddToCart: () => onAddPackage(template)
        },
        `pkg-${template.id}`
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        PosDiscountPlanCard,
        {
          template,
          onAddToCart: () => onAddDiscountPlan(template)
        },
        `plan-${template.id}`
      )
    ) }) })
  ] });
}
const PosAddonCard = reactExports.memo(function PosAddonCard2({ addon, onAddonClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: addon.name, placement: "top", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      elevation: 0,
      sx: {
        p: 1.5,
        cursor: "pointer",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 0,
        height: "100%",
        "&:hover": {
          borderColor: "warning.main",
          boxShadow: (t) => `0 4px 16px ${alpha(t.palette.warning.main, 0.14)}`
        }
      },
      onClick: () => onAddonClick(addon),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, sx: { height: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "subtitle1",
            fontWeight: 700,
            noWrap: true,
            sx: { textTransform: "capitalize", fontSize: POS_CARD_TITLE_FONT_SIZE },
            children: addon.name
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.75, alignItems: "center", sx: { mt: "auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: addon.category,
              size: "small",
              variant: "soft",
              color: "default",
              sx: { fontSize: "0.65rem" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: addon.is_custom_price ? "Custom" : fCurrency(addon.price),
              size: "small",
              variant: "soft",
              color: addon.is_custom_price ? "warning" : "success",
              sx: { fontSize: "0.65rem" }
            }
          )
        ] })
      ] })
    }
  ) });
});
PosAddonCard.propTypes = {
  addon: o.object.isRequired,
  onAddonClick: o.func.isRequired
};
function PosAddonPriceDialog({ open, addon, onClose, onConfirm }) {
  const [price, setPrice] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const handleClose = () => {
    setPrice("");
    setError("");
    onClose();
  };
  const handleConfirm = () => {
    const parsed = parseFloat(price);
    if (Number.isNaN(parsed) || parsed < 0) {
      setError("Please enter a valid price");
      return;
    }
    onConfirm(parsed);
    setPrice("");
    setError("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleConfirm();
  };
  if (!addon) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "xs", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Set Price" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 1.5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: addon.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: addon.category })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Enter the amount to charge:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            autoFocus: true,
            fullWidth: true,
            type: "number",
            inputProps: { min: 0, step: "0.01" },
            value: price,
            onChange: (e) => {
              setPrice(e.target.value);
              setError("");
            },
            onKeyDown: handleKeyDown,
            error: !!error,
            helperText: error,
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: handleClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { variant: "contained", onClick: handleConfirm, disabled: !price, children: "Add to cart" })
    ] })
  ] });
}
PosAddonPriceDialog.propTypes = {
  open: o.bool.isRequired,
  addon: o.object,
  onClose: o.func.isRequired,
  onConfirm: o.func.isRequired
};
const GridList$1 = reactExports.forwardRef(({ style, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Box,
  {
    ref,
    ...props,
    style,
    sx: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"
    },
    children
  }
));
GridList$1.displayName = "GridList";
const GridItem$1 = ({ children, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...props, children });
function PosAddonList({
  branchId,
  searchQuery = "",
  onAddToCart,
  onTotalCountChange
}) {
  const [selectedAddon, setSelectedAddon] = reactExports.useState(null);
  const [priceDialogOpen, setPriceDialogOpen] = reactExports.useState(false);
  const [pendingPrice, setPendingPrice] = reactExports.useState(null);
  const [staffDialogOpen, setStaffDialogOpen] = reactExports.useState(false);
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const [canScrollLeft, setCanScrollLeft] = reactExports.useState(false);
  const [canScrollRight, setCanScrollRight] = reactExports.useState(false);
  const groupScrollRef = reactExports.useRef(null);
  const [debouncedSearch, setDebouncedSearch] = reactExports.useState(searchQuery);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  const { addons, addonsLoading } = useGetBranchAddons(branchId, {
    fetchAll: true,
    filters: { ...debouncedSearch && { name: debouncedSearch } }
  });
  reactExports.useEffect(() => {
    if (onTotalCountChange) onTotalCountChange(addons?.length ?? 0);
  }, [addons?.length, onTotalCountChange]);
  const filteredAddons = reactExports.useMemo(() => {
    if (activeCategory === "all") return addons || [];
    return (addons || []).filter((a) => a.category === activeCategory);
  }, [addons, activeCategory]);
  const checkScrollability = () => {
    if (groupScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = groupScrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };
  const scrollGroupLeft = () => {
    if (groupScrollRef.current) groupScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  const scrollGroupRight = () => {
    if (groupScrollRef.current) groupScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  reactExports.useEffect(() => {
    checkScrollability();
  }, [addons, addonsLoading]);
  reactExports.useEffect(() => {
    const container = groupScrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      return () => container.removeEventListener("scroll", checkScrollability);
    }
    return () => {
    };
  }, []);
  const handleAddonClick = reactExports.useCallback((addon) => {
    setSelectedAddon(addon);
    if (addon.is_custom_price) {
      setPriceDialogOpen(true);
    } else {
      setPendingPrice(parseFloat(addon.price));
      setStaffDialogOpen(true);
    }
  }, []);
  const handlePriceConfirm = reactExports.useCallback((price) => {
    setPriceDialogOpen(false);
    setPendingPrice(price);
    setStaffDialogOpen(true);
  }, []);
  const handlePriceDialogClose = reactExports.useCallback(() => {
    setPriceDialogOpen(false);
    setSelectedAddon(null);
    setPendingPrice(null);
  }, []);
  const handleStaffConfirm = reactExports.useCallback(
    (staffMember) => {
      if (selectedAddon) {
        onAddToCart(selectedAddon, pendingPrice, staffMember);
      }
    },
    [selectedAddon, pendingPrice, onAddToCart]
  );
  const handleStaffDialogClose = reactExports.useCallback(() => {
    setStaffDialogOpen(false);
    setSelectedAddon(null);
    setPendingPrice(null);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { height: "100%", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { position: "relative", mb: 1.5, flexShrink: 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          onClick: scrollGroupLeft,
          disabled: !canScrollLeft,
          size: "small",
          sx: {
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            width: 26,
            height: 26,
            boxShadow: 1,
            "&.Mui-disabled": { opacity: 0.3 }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "1.1rem", lineHeight: 1 }, children: "‹" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          ref: groupScrollRef,
          sx: {
            mx: "30px",
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.75, sx: { minWidth: "max-content", py: 0.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-group": "all",
                variant: activeCategory === "all" ? "contained" : "outlined",
                size: "small",
                color: "primary",
                onClick: () => setActiveCategory("all"),
                sx: {
                  minWidth: "auto",
                  px: 1.5,
                  py: 0.25,
                  fontSize: "0.75rem",
                  borderRadius: 1.5,
                  whiteSpace: "nowrap",
                  textTransform: "none"
                },
                children: "All"
              }
            ),
            ADDON_CATEGORY_OPTIONS.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-group": value,
                variant: activeCategory === value ? "contained" : "outlined",
                size: "small",
                color: "primary",
                onClick: () => setActiveCategory(value),
                sx: {
                  minWidth: "auto",
                  px: 1.5,
                  py: 0.25,
                  fontSize: "0.75rem",
                  borderRadius: 1.5,
                  whiteSpace: "nowrap",
                  textTransform: "none"
                },
                children: label
              },
              value
            ))
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          onClick: scrollGroupRight,
          disabled: !canScrollRight,
          size: "small",
          sx: {
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            width: 26,
            height: 26,
            boxShadow: 1,
            "&.Mui-disabled": { opacity: 0.3 }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "1.1rem", lineHeight: 1 }, children: "›" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1, minHeight: 0, overflow: "hidden" }, children: addonsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { px: 0.5, mb: 1, display: "block" }, children: "Loading add-ons…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            pt: 0.5
          },
          children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", height: 36, sx: { mb: 0.75, borderRadius: 1 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 80, height: 20, sx: { mb: 0.25 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 55, height: 20 })
          ] }, i))
        }
      )
    ] }) : filteredAddons.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 8, textAlign: "center", color: "text.disabled" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:add-square-bold-duotone", width: 40, sx: { mb: 1, opacity: 0.3 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: "No add-ons found" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      ss,
      {
        style: { height: "100%" },
        data: filteredAddons,
        components: { List: GridList$1, Item: GridItem$1 },
        itemContent: (_, addon) => /* @__PURE__ */ jsxRuntimeExports.jsx(PosAddonCard, { addon, onAddonClick: handleAddonClick })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosAddonPriceDialog,
      {
        open: priceDialogOpen,
        addon: selectedAddon,
        onClose: handlePriceDialogClose,
        onConfirm: handlePriceConfirm
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosProductStylistSelectDialog,
      {
        open: staffDialogOpen,
        itemName: selectedAddon?.name,
        itemPrice: pendingPrice,
        itemKind: "addon",
        branchId,
        onClose: handleStaffDialogClose,
        onConfirm: handleStaffConfirm
      }
    )
  ] });
}
PosAddonList.propTypes = {
  branchId: o.string,
  searchQuery: o.string,
  onAddToCart: o.func.isRequired,
  onTotalCountChange: o.func
};
const ProductCategoryNavTabs = reactExports.forwardRef(function ProductCategoryNavTabs2({
  scrollCategoryLeft,
  scrollCategoryRight,
  canScrollLeft,
  canScrollRight,
  activeCategory,
  setActiveCategory
}, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { position: "relative", mb: 1.5 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        onClick: scrollCategoryLeft,
        disabled: !canScrollLeft,
        size: "small",
        sx: {
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          bgcolor: "background.paper",
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
          width: 26,
          height: 26,
          boxShadow: 1,
          "&.Mui-disabled": { opacity: 0.3 }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "1.1rem", lineHeight: 1 }, children: "‹" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        ref,
        sx: {
          mx: "30px",
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.75, sx: { minWidth: "max-content", py: 0.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-category": "all",
              variant: activeCategory === "all" ? "contained" : "outlined",
              size: "small",
              color: "primary",
              onClick: () => setActiveCategory("all"),
              sx: {
                minWidth: "auto",
                px: 1.5,
                py: 0.25,
                fontSize: "0.75rem",
                borderRadius: 1.5,
                whiteSpace: "nowrap",
                textTransform: "none"
              },
              children: "All"
            }
          ),
          PRODUCT_CATEGORIES.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-category": value,
              variant: activeCategory === value ? "contained" : "outlined",
              size: "small",
              color: "primary",
              onClick: () => setActiveCategory(value),
              sx: {
                minWidth: "auto",
                px: 1.5,
                py: 0.25,
                fontSize: "0.75rem",
                borderRadius: 1.5,
                whiteSpace: "nowrap",
                textTransform: "none"
              },
              children: label
            },
            value
          ))
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        onClick: scrollCategoryRight,
        disabled: !canScrollRight,
        size: "small",
        sx: {
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          bgcolor: "background.paper",
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
          width: 26,
          height: 26,
          boxShadow: 1,
          "&.Mui-disabled": { opacity: 0.3 }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "1.1rem", lineHeight: 1 }, children: "›" })
      }
    )
  ] });
});
function PosProductList({
  branchId,
  searchQuery = "",
  onAddToCart,
  onAddUsage,
  onTotalCountChange,
  showCommissionDialog = true
}) {
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const [canScrollLeft, setCanScrollLeft] = reactExports.useState(false);
  const [canScrollRight, setCanScrollRight] = reactExports.useState(false);
  const groupScrollRef = reactExports.useRef(null);
  const [pendingProduct, setPendingProduct] = reactExports.useState(null);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const handleProductClick = reactExports.useCallback(
    (product) => {
      if (!showCommissionDialog) {
        onAddToCart(product, null);
        return;
      }
      setPendingProduct(product);
      setDialogOpen(true);
    },
    [showCommissionDialog, onAddToCart]
  );
  const handleDialogConfirm = reactExports.useCallback(
    (staffMember) => {
      onAddToCart(pendingProduct, staffMember);
    },
    [onAddToCart, pendingProduct]
  );
  const handleDialogClose = reactExports.useCallback(() => {
    setDialogOpen(false);
    setPendingProduct(null);
  }, []);
  const [debouncedSearch, setDebouncedSearch] = reactExports.useState(searchQuery);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  const { products, productsLoading, isLoadingMore, totalCount, hasMore, loadMore } = usePosBranchProducts(branchId, { search: debouncedSearch, category: activeCategory });
  reactExports.useEffect(() => {
    if (onTotalCountChange) onTotalCountChange(totalCount);
  }, [totalCount, onTotalCountChange]);
  const checkScrollability = () => {
    if (groupScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = groupScrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };
  const scrollCategoryLeft = () => {
    if (groupScrollRef.current) groupScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  const scrollCategoryRight = () => {
    if (groupScrollRef.current) groupScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  reactExports.useEffect(() => {
    checkScrollability();
  }, [products]);
  reactExports.useEffect(() => {
    const container = groupScrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      return () => container.removeEventListener("scroll", checkScrollability);
    }
    return () => {
    };
  }, []);
  reactExports.useEffect(() => {
    if (groupScrollRef.current) {
      const btn = groupScrollRef.current.querySelector(`[data-category="${activeCategory}"]`);
      if (btn) {
        const container = groupScrollRef.current;
        const left = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
        container.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
      }
    }
  }, [activeCategory]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { height: "100%", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCategoryNavTabs,
      {
        ref: groupScrollRef,
        scrollCategoryLeft,
        scrollCategoryRight,
        canScrollLeft,
        canScrollRight,
        activeCategory,
        setActiveCategory
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Scrollbar, { sx: { flex: 1, minHeight: 0 }, children: [
      productsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { px: 0.5, mb: 1, display: "block" }, children: "Loading products…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 0, children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 1.5, border: "1px solid", borderColor: "divider" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", height: 22, sx: { mb: 0.5, borderRadius: 0.5 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: "70%", height: 16, sx: { mb: 1 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 52, height: 20 })
        ] }) }, i)) })
      ] }) : products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 8, textAlign: "center", color: "text.disabled" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:box-bold", width: 40, sx: { mb: 1, opacity: 0.3 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "No products found" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 0, children: products.map((product) => {
        const outOfStock = (product.totalAvailable ?? 0) <= 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: product.name, placement: "top", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            elevation: 0,
            onClick: () => handleProductClick(product),
            sx: {
              p: 1.5,
              cursor: "pointer",
              border: "1px solid",
              borderColor: outOfStock ? "error.light" : "divider",
              borderRadius: 0,
              height: "100%",
              position: "relative",
              opacity: outOfStock ? 0.65 : 1,
              transition: "all 0.15s ease",
              "&:hover": {
                borderColor: outOfStock ? "error.main" : "primary.main",
                boxShadow: (t) => `0 4px 16px ${alpha(outOfStock ? t.palette.error.main : t.palette.primary.main, 0.14)}`
              }
            },
            children: [
              onAddUsage && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Use in service (deduct stock, no charge)", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  size: "small",
                  disabled: outOfStock,
                  onClick: (event) => {
                    event.stopPropagation();
                    onAddUsage(product);
                  },
                  sx: {
                    position: "absolute",
                    top: 4,
                    right: 4,
                    width: 22,
                    height: 22,
                    color: "text.secondary",
                    "&:hover": { color: "warning.main" }
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pipette-bold", width: 14 })
                }
              ) }),
              outOfStock && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: "Out of Stock",
                  size: "small",
                  color: "error",
                  variant: "soft",
                  sx: {
                    position: "absolute",
                    bottom: 10,
                    right: 6,
                    fontSize: "0.6rem",
                    height: 18,
                    px: 0.5
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "subtitle1",
                  fontWeight: 700,
                  noWrap: true,
                  sx: {
                    textTransform: "capitalize",
                    mb: 0.5,
                    pr: onAddUsage ? 2.5 : 0,
                    fontSize: POS_CARD_TITLE_FONT_SIZE
                  },
                  children: product.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "caption",
                  color: "text.secondary",
                  sx: { display: "block", mb: 1, fontSize: "0.65rem" },
                  children: [
                    "Code: ",
                    product.sku || "-",
                    " | Stock: ",
                    product.totalAvailable ?? 0
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", fontWeight: 700, color: "primary.main", children: fCurrency(product.retail_price) })
            ]
          }
        ) }) }, product.id);
      }) }),
      hasMore && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { pt: 2, pb: 1, textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          size: "small",
          onClick: loadMore,
          disabled: isLoadingMore,
          startIcon: isLoadingMore ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 14 }) : null,
          children: isLoadingMore ? "Loading…" : "Load More"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosProductStylistSelectDialog,
      {
        open: dialogOpen,
        itemName: pendingProduct?.name,
        itemPrice: pendingProduct?.retail_price,
        branchId,
        onClose: handleDialogClose,
        onConfirm: handleDialogConfirm
      }
    )
  ] });
}
PosProductList.propTypes = {
  branchId: o.string,
  searchQuery: o.string,
  onAddToCart: o.func,
  onAddUsage: o.func,
  onTotalCountChange: o.func,
  showCommissionDialog: o.bool
};
const PosServiceCard = reactExports.memo(function PosServiceCard2({ service, onServiceClick, onChipClick }) {
  const hideSeniorPrice = useHideSeniorPrice();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: service.service_name, placement: "top", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      elevation: 0,
      sx: {
        p: 1.5,
        cursor: "pointer",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 0,
        height: "100%",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: (t) => `0 4px 16px ${alpha(t.palette.primary.main, 0.14)}`
        }
      },
      onClick: () => onServiceClick(service),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1.5, alignItems: "flex-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "subtitle1",
            fontWeight: 700,
            noWrap: true,
            sx: { textTransform: "capitalize", fontSize: POS_CARD_TITLE_FONT_SIZE },
            children: service.service_name
          }
        ) }),
        isMeasuredService(service) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", sx: { mt: -0.5 }, children: [
          "per ",
          getMeasureUnitLabel(service)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: `J: $${parseFloat(service.junior_price || 0)}`,
              size: "small",
              color: "info",
              variant: "soft",
              disabled: !service.junior_price,
              sx: { fontSize: "0.65rem", width: "100%" },
              onClick: (event) => onChipClick(event, service, "junior")
            }
          ),
          !hideSeniorPrice && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: `S: $${parseFloat(service.senior_price || 0)}`,
              size: "small",
              color: "warning",
              variant: "soft",
              disabled: !service.senior_price,
              sx: { fontSize: "0.65rem", width: "100%" },
              onClick: (event) => onChipClick(event, service, "senior")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: `P: $${parseFloat(service.prive_price || 0)}`,
              size: "small",
              color: "success",
              variant: "soft",
              disabled: !service.prive_price,
              sx: { fontSize: "0.65rem", width: "100%" },
              onClick: (event) => onChipClick(event, service, "prive")
            }
          )
        ] })
      ] })
    }
  ) });
});
PosServiceCard.propTypes = {
  service: o.object.isRequired,
  onServiceClick: o.func.isRequired,
  onChipClick: o.func.isRequired
};
const GridList = reactExports.forwardRef(({ style, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Box,
  {
    ref,
    ...props,
    style,
    sx: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"
    },
    children
  }
));
GridList.displayName = "GridList";
const GridItem = ({ children, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...props, children });
function PosServiceList({
  branchId,
  searchQuery = "",
  onAddToCart,
  onTotalCountChange
}) {
  const [selectedService, setSelectedService] = reactExports.useState(null);
  const [preSelectedLevel, setPreSelectedLevel] = reactExports.useState(null);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [pendingMeasure, setPendingMeasure] = reactExports.useState(null);
  const [activeGroup, setActiveGroup] = reactExports.useState("all");
  const [canScrollLeft, setCanScrollLeft] = reactExports.useState(false);
  const [canScrollRight, setCanScrollRight] = reactExports.useState(false);
  const groupScrollRef = reactExports.useRef(null);
  const [debouncedSearch, setDebouncedSearch] = reactExports.useState(searchQuery);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  const { services, servicesLoading } = useGetBranchServices(branchId, {
    fetchAll: true,
    filters: { ...debouncedSearch && { name: debouncedSearch } }
  });
  reactExports.useEffect(() => {
    if (onTotalCountChange) onTotalCountChange(services?.length ?? 0);
  }, [services?.length, onTotalCountChange]);
  const filteredServices = reactExports.useMemo(() => {
    if (activeGroup === "all") return services || [];
    return (services || []).filter(
      (s) => (s.service_group || s.category || "other") === activeGroup
    );
  }, [services, activeGroup]);
  const handleGroupChange = (group) => {
    setActiveGroup(group);
  };
  const checkScrollability = () => {
    if (groupScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = groupScrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };
  const scrollGroupLeft = () => {
    if (groupScrollRef.current) groupScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  const scrollGroupRight = () => {
    if (groupScrollRef.current) groupScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  reactExports.useEffect(() => {
    checkScrollability();
  }, [services, servicesLoading]);
  reactExports.useEffect(() => {
    const container = groupScrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      return () => container.removeEventListener("scroll", checkScrollability);
    }
    return () => {
    };
  }, []);
  reactExports.useEffect(() => {
    if (groupScrollRef.current) {
      const btn = groupScrollRef.current.querySelector(`[data-group="${activeGroup}"]`);
      if (btn) {
        const container = groupScrollRef.current;
        const left = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
        container.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
      }
    }
  }, [activeGroup]);
  const handleServiceClick = reactExports.useCallback((service) => {
    setSelectedService(service);
    setDialogOpen(true);
  }, []);
  const handleChipClick = reactExports.useCallback((event, service, level) => {
    event.stopPropagation();
    setSelectedService(service);
    setPreSelectedLevel(level);
    setDialogOpen(true);
  }, []);
  const handleDialogClose = reactExports.useCallback(() => {
    setDialogOpen(false);
    setSelectedService(null);
    setPreSelectedLevel(null);
  }, []);
  const handleConfirmSelection = reactExports.useCallback(
    ({ service: svc, stylistLevel, price, staffMember }) => {
      setDialogOpen(false);
      setSelectedService(null);
      setPreSelectedLevel(null);
      if (isMeasuredService(svc)) {
        setPendingMeasure({ service: svc, stylistLevel, pricePerUnit: price, staffMember });
        return;
      }
      onAddToCart(svc, stylistLevel, price, staffMember);
    },
    [onAddToCart]
  );
  const handleMeasureClose = reactExports.useCallback(() => setPendingMeasure(null), []);
  const handleMeasureConfirm = reactExports.useCallback(
    (amount) => {
      if (!pendingMeasure) return;
      const { service: svc, stylistLevel, pricePerUnit, staffMember } = pendingMeasure;
      onAddToCart(svc, stylistLevel, pricePerUnit, staffMember, {
        quantity: amount,
        unitLabel: getMeasureUnitLabel(svc),
        unitPrice: pricePerUnit
      });
      setPendingMeasure(null);
    },
    [onAddToCart, pendingMeasure]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { height: "100%", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { position: "relative", mb: 1.5, flexShrink: 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          onClick: scrollGroupLeft,
          disabled: !canScrollLeft,
          size: "small",
          sx: {
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            width: 26,
            height: 26,
            boxShadow: 1,
            "&.Mui-disabled": { opacity: 0.3 }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "1.1rem", lineHeight: 1 }, children: "‹" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          ref: groupScrollRef,
          sx: {
            mx: "30px",
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.75, sx: { minWidth: "max-content", py: 0.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-group": "all",
                variant: activeGroup === "all" ? "contained" : "outlined",
                size: "small",
                color: "primary",
                onClick: () => handleGroupChange("all"),
                sx: {
                  minWidth: "auto",
                  px: 1.5,
                  py: 0.25,
                  fontSize: "0.75rem",
                  borderRadius: 1.5,
                  whiteSpace: "nowrap",
                  textTransform: "none"
                },
                children: "All"
              }
            ),
            SERVICE_GROUPS.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-group": value,
                variant: activeGroup === value ? "contained" : "outlined",
                size: "small",
                color: "primary",
                onClick: () => handleGroupChange(value),
                sx: {
                  minWidth: "auto",
                  px: 1.5,
                  py: 0.25,
                  fontSize: "0.75rem",
                  borderRadius: 1.5,
                  whiteSpace: "nowrap",
                  textTransform: "none"
                },
                children: label
              },
              value
            ))
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          onClick: scrollGroupRight,
          disabled: !canScrollRight,
          size: "small",
          sx: {
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            width: 26,
            height: 26,
            boxShadow: 1,
            "&.Mui-disabled": { opacity: 0.3 }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "1.1rem", lineHeight: 1 }, children: "›" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1, minHeight: 0, overflow: "hidden" }, children: servicesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { px: 0.5, mb: 1, display: "block" }, children: "Loading services…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            pt: 0.5
          },
          children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", height: 36, sx: { mb: 0.75, borderRadius: 1 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, sx: { mb: 0.5 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: 52, height: 20, sx: { borderRadius: 3 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "rounded", width: 52, height: 20, sx: { borderRadius: 3 } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { variant: "text", width: 60, height: 20 })
          ] }, i))
        }
      )
    ] }) : filteredServices.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 8, textAlign: "center", color: "text.disabled" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:scissors-bold", width: 40, sx: { mb: 1, opacity: 0.3 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: "No services found" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      ss,
      {
        style: { height: "100%" },
        data: filteredServices,
        components: { List: GridList, Item: GridItem },
        itemContent: (index, service) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PosServiceCard,
          {
            service,
            onServiceClick: handleServiceClick,
            onChipClick: handleChipClick
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosServiceStylistSelectionDialog,
      {
        open: dialogOpen,
        service: selectedService,
        branchId,
        onClose: handleDialogClose,
        onConfirm: handleConfirmSelection,
        preSelectedLevel
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosServiceUnitsDialog,
      {
        open: !!pendingMeasure,
        serviceName: pendingMeasure?.service?.service_name,
        unitLabel: getMeasureUnitLabel(pendingMeasure?.service),
        pricePerUnit: pendingMeasure?.pricePerUnit ?? 0,
        step: getMeasureStep(pendingMeasure?.service),
        initialAmount: getMeasureDefaultAmount(pendingMeasure?.service),
        onClose: handleMeasureClose,
        onConfirm: handleMeasureConfirm
      }
    )
  ] });
}
PosServiceList.propTypes = {
  branchId: o.string,
  searchQuery: o.string,
  onAddToCart: o.func.isRequired,
  onTotalCountChange: o.func
};
function useDiscounts({ subtotal, organizationId, branchId, clientId, cartItems = [] }) {
  const [discountCode, setDiscountCode] = reactExports.useState("");
  const [voucherCode, setVoucherCode] = reactExports.useState("");
  const [discountData, setDiscountData] = reactExports.useState(null);
  const [voucherData, setVoucherData] = reactExports.useState(null);
  const [appliedRedemptionId, setAppliedRedemptionId] = reactExports.useState(null);
  const [cashbackInput, setCashbackInput] = reactExports.useState("");
  const [appliedCashback, setAppliedCashback] = reactExports.useState(0);
  const [manualDiscount, setManualDiscount] = reactExports.useState("");
  const [discountType, setDiscountType] = reactExports.useState("fixed_amount");
  const { wallet: cashbackWallet } = useGetClientCashbackWallet(clientId ?? null);
  const amounts = reactExports.useMemo(() => {
    let discountAmount = 0;
    if (discountData?.reward_discount_pct != null) {
      discountAmount = subtotal * discountData.reward_discount_pct / 100;
    } else if (discountData?.reward_item_type === "product_voucher") {
      const targetId = discountData.reward_product_id;
      const item = targetId ? cartItems.find((i) => i.item_type === "product" && i.product_id === targetId) : cartItems.find((i) => i.item_type === "product");
      discountAmount = item ? item.unit_price : 0;
    } else if (discountData?.reward_item_type === "free_service") {
      const targetId = discountData.reward_service_id;
      const item = targetId ? cartItems.find((i) => i.item_type === "service" && i.service_id === targetId) : cartItems.find((i) => i.item_type === "service");
      discountAmount = item ? item.unit_price : 0;
    } else if (discountData?.reward_item_type === "free_addon") {
      const targetId = discountData.reward_service_id;
      const item = targetId ? cartItems.find((i) => i.item_type === "service" && i.service_id === targetId) : cartItems.reduce((min, i) => !min || i.unit_price < min.unit_price ? i : min, null);
      discountAmount = item ? item.unit_price : 0;
    } else {
      discountAmount = discountData?.calculated_discount ?? 0;
    }
    const manualDiscountAmount = manualDiscount ? discountType === "percentage" ? subtotal * parseFloat(manualDiscount) / 100 : parseFloat(manualDiscount) : 0;
    const voucherAmount = voucherData?.applicable_amount ?? 0;
    return { discountAmount, manualDiscountAmount, voucherAmount };
  }, [discountData, manualDiscount, discountType, subtotal, voucherData, cartItems]);
  const handleApplyDiscount = reactExports.useCallback(async () => {
    if (!discountCode) return;
    if (!clientId) {
      toast.error("Please select a customer before applying a discount code");
      return;
    }
    if (discountCode.startsWith("RW-")) {
      try {
        const redemption = await validateRedeemCode(discountCode, organizationId);
        const reward = redemption.rewards_catalog;
        const rewardType = reward?.type;
        setAppliedRedemptionId(redemption.id);
        if (rewardType === "discount_coupon") {
          const discountPct = reward.value?.discount_pct ?? 0;
          const maxUses = reward.value?.max_uses ?? 1;
          const usedSoFar = redemption.use_count ?? 0;
          const remaining = maxUses - usedSoFar;
          setDiscountData({
            reward_discount_pct: discountPct,
            is_valid: true,
            label: `${reward.name} (${discountPct}% off${maxUses > 1 ? ` · ${remaining} use${remaining !== 1 ? "s" : ""} left` : ""})`
          });
          toast.success(
            `Reward coupon applied: ${discountPct}% off${maxUses > 1 ? ` — ${remaining} use${remaining !== 1 ? "s" : ""} remaining` : ""}`
          );
        } else if (rewardType === "free_service") {
          const serviceId = reward.value?.service_id ?? null;
          const serviceName = reward.value?.service_name ?? null;
          setDiscountData({
            calculated_discount: 0,
            reward_item_type: "free_service",
            reward_service_id: serviceId,
            is_valid: true,
            label: `✓ Free Service: ${serviceName ?? reward.name}`
          });
          toast.success(
            `Reward validated: "${reward.name}"${serviceName ? ` — add "${serviceName}" to the cart` : " — provide the free service"} and complete the sale.`
          );
        } else if (rewardType === "free_addon") {
          const serviceId = reward.value?.service_id ?? null;
          const serviceName = reward.value?.service_name ?? null;
          setDiscountData({
            calculated_discount: 0,
            reward_item_type: "free_addon",
            reward_service_id: serviceId,
            is_valid: true,
            label: `✓ Free Add-on: ${serviceName ?? reward.name}`
          });
          toast.success(
            `Reward validated: "${reward.name}"${serviceName ? ` — add "${serviceName}" to the cart` : " — add the free add-on"} and complete the sale.`
          );
        } else if (rewardType === "product_voucher") {
          const productId = reward.value?.product_id ?? null;
          const productName = reward.value?.product_name ?? null;
          setDiscountData({
            calculated_discount: 0,
            reward_item_type: "product_voucher",
            reward_product_id: productId,
            is_valid: true,
            label: `✓ Product Voucher: ${productName ?? reward.name}`
          });
          toast.success(
            `Reward validated: "${reward.name}"${productName ? ` — add "${productName}" to the cart` : " — give the client the product"} and complete the sale.`
          );
        } else {
          setDiscountData({
            calculated_discount: 0,
            is_valid: true,
            label: `✓ Reward: ${reward?.name ?? "Unknown"}`
          });
          toast.success(`Reward code validated: "${reward?.name ?? discountCode}"`);
        }
      } catch (err) {
        toast.error(err.message || "Invalid reward code");
        setDiscountData(null);
        setAppliedRedemptionId(null);
      }
      return;
    }
    const { data, error } = await validateDiscountCode(discountCode, branchId, clientId, subtotal);
    if (error || !data?.valid) {
      toast.error(`Failed to redeem: ${data?.error || "Invalid discount code"}`);
      setDiscountData(null);
      return;
    }
    const label = data.discount_type === "percentage" ? `${discountCode} (${data.discount_value}% off)` : `${discountCode} (-$${Number(data.discount_value).toFixed(2)})`;
    const calculatedDiscount = Number(data.discount_amount);
    setDiscountData({
      ...data,
      calculated_discount: calculatedDiscount,
      label
    });
    toast.success(`Discount applied: ${label} → -$${calculatedDiscount.toFixed(2)}`);
  }, [discountCode, clientId, organizationId, subtotal, branchId]);
  const handleApplyVoucher = reactExports.useCallback(async () => {
    if (!voucherCode) return;
    const afterDiscount = subtotal - (amounts.discountAmount + amounts.manualDiscountAmount);
    const { data, error } = await validateVoucher(voucherCode, branchId, clientId, afterDiscount);
    if (error || !data?.is_valid) {
      toast.error(data?.message || "Invalid voucher");
      setVoucherData(null);
      return;
    }
    setVoucherData(data);
    toast.success(`Voucher applied: $${data.applicable_amount.toFixed(2)}`);
  }, [
    voucherCode,
    branchId,
    clientId,
    subtotal,
    amounts.discountAmount,
    amounts.manualDiscountAmount
  ]);
  const handleApplyCashback = reactExports.useCallback(
    (inputAmt) => {
      const remaining = subtotal - amounts.discountAmount - amounts.manualDiscountAmount - amounts.voucherAmount;
      const amt = Math.min(
        parseFloat(inputAmt) || 0,
        cashbackWallet?.balance ?? 0,
        Math.max(0, remaining)
      );
      if (amt > 0) setAppliedCashback(parseFloat(amt.toFixed(2)));
    },
    [subtotal, amounts, cashbackWallet?.balance]
  );
  const handleApplyMaxCashback = reactExports.useCallback(() => {
    const remaining = subtotal - amounts.discountAmount - amounts.manualDiscountAmount - amounts.voucherAmount;
    const amt = Math.min(cashbackWallet?.balance ?? 0, Math.max(0, remaining));
    setCashbackInput(amt.toFixed(2));
    if (amt > 0) setAppliedCashback(parseFloat(amt.toFixed(2)));
  }, [subtotal, amounts, cashbackWallet?.balance]);
  const postSaleDiscountActions = reactExports.useCallback(
    async ({ saleId, createdBy }) => {
      const promises = [];
      if (appliedRedemptionId) {
        promises.push(
          markRedemptionUsed({
            redemptionId: appliedRedemptionId,
            saleId,
            usedBy: createdBy
          }).catch((err) => {
            console.error("[POS] Failed to mark reward redemption used:", err);
            toast.warning("Warning: reward coupon could not be marked as used. Contact support.");
          })
        );
      }
      if (appliedCashback > 0 && clientId) {
        promises.push(
          redeemCashback({
            organizationId,
            clientId,
            amount: appliedCashback,
            saleId,
            createdBy
          }).catch((err) => {
            console.error("[POS] Failed to deduct cashback wallet:", err);
            toast.error(
              `Warning: $${appliedCashback.toFixed(2)} cashback could not be deducted from the client's wallet. Please reconcile manually.`
            );
          })
        );
      }
      await Promise.all(promises);
    },
    [appliedRedemptionId, appliedCashback, clientId, organizationId]
  );
  const resetDiscounts = reactExports.useCallback(() => {
    setDiscountCode("");
    setVoucherCode("");
    setDiscountData(null);
    setVoucherData(null);
    setAppliedRedemptionId(null);
    setCashbackInput("");
    setAppliedCashback(0);
    setManualDiscount("");
    setDiscountType("fixed_amount");
  }, []);
  return {
    // State
    discountCode,
    setDiscountCode,
    voucherCode,
    setVoucherCode,
    discountData,
    voucherData,
    cashbackInput,
    setCashbackInput,
    appliedCashback,
    setAppliedCashback,
    manualDiscount,
    setManualDiscount,
    discountType,
    setDiscountType,
    cashbackWallet,
    // Computed
    ...amounts,
    // Handlers
    handleApplyDiscount,
    handleApplyVoucher,
    handleApplyCashback,
    handleApplyMaxCashback,
    postSaleDiscountActions,
    resetDiscounts
  };
}
function PosDiscounts({
  // Manual discount
  manualDiscount,
  onManualDiscountChange,
  discountType,
  onDiscountTypeChange,
  // Discount code
  discountCode,
  onDiscountCodeChange,
  onApplyDiscount,
  discountData,
  discountAmount,
  // Voucher
  voucherCode,
  onVoucherCodeChange,
  onApplyVoucher,
  voucherData,
  // Cashback
  cashbackWallet,
  cashbackInput,
  onCashbackInputChange,
  onApplyCashback,
  onApplyMaxCashback,
  appliedCashback,
  onClearCashback
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { px: 2, borderRadius: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { defaultExpanded: false, disableGutters: true, elevation: 0, square: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionSummary,
      {
        expandIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-downward-fill", width: 18 }),
        sx: { px: 2, minHeight: 44, "& .MuiAccordionSummary-content": { my: 0 } },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Discounts & Vouchers" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionDetails, { sx: { px: 2, pb: 2, pt: 0 }, children: [
      voucherData && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "success", sx: { mt: 1.5 }, children: [
        "Voucher: -$",
        voucherData.applicable_amount.toFixed(2)
      ] }),
      discountData && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "success", sx: { mb: 2 }, children: discountData.label ? discountAmount > 0 ? `${discountData.label}: -$${discountAmount.toFixed(2)}` : discountData.label : `-$${discountAmount.toFixed(2)}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          fullWidth: true,
          size: "small",
          label: "Manual Discount",
          type: "number",
          value: manualDiscount,
          onChange: (e) => onManualDiscountChange(e.target.value),
          sx: { mb: 2 },
          InputProps: {
            endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: discountType,
                onChange: (e) => onDiscountTypeChange(e.target.value),
                size: "small",
                sx: { minWidth: 72, "& .MuiSelect-select": { py: 0.5 } },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "fixed_amount", children: "$" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "percentage", children: "%" })
                ]
              }
            ) })
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          fullWidth: true,
          size: "small",
          label: "Discount Code",
          value: discountCode,
          onChange: (e) => onDiscountCodeChange(e.target.value.toUpperCase()),
          onKeyDown: (e) => e.key === "Enter" && onApplyDiscount(),
          sx: { mb: discountData ? 1.5 : 2 },
          InputProps: {
            endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onApplyDiscount, size: "small", edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold" }) }) })
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          fullWidth: true,
          size: "small",
          label: "Voucher Code",
          value: voucherCode,
          onChange: (e) => onVoucherCodeChange(e.target.value.toUpperCase()),
          onKeyDown: (e) => e.key === "Enter" && onApplyVoucher(),
          InputProps: {
            endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: onApplyVoucher, size: "small", children: "Validate" }) })
          }
        }
      ),
      (cashbackWallet?.balance ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: 2 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, sx: { mb: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:wallet-bold", width: 16, sx: { color: "success.main" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "success.dark", fontWeight: 600, children: [
            "Cashback available: $",
            (cashbackWallet?.balance ?? 0).toFixed(2)
          ] })
        ] }),
        appliedCashback > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "success", onClose: onClearCashback, children: [
          "Cashback applied: -$",
          appliedCashback.toFixed(2)
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              size: "small",
              label: "Use cashback ($)",
              type: "number",
              value: cashbackInput,
              onChange: (e) => onCashbackInputChange(e.target.value),
              onKeyDown: (e) => e.key === "Enter" && onApplyCashback(cashbackInput),
              inputProps: { min: 0, max: cashbackWallet?.balance ?? 0, step: 0.01 },
              sx: { flex: 1 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              color: "success",
              size: "small",
              onClick: () => onApplyCashback(cashbackInput),
              children: "Apply"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              color: "success",
              size: "small",
              onClick: onApplyMaxCashback,
              children: "All"
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
PosDiscounts.propTypes = {
  manualDiscount: o.string,
  onManualDiscountChange: o.func,
  discountType: o.string,
  onDiscountTypeChange: o.func,
  discountCode: o.string,
  onDiscountCodeChange: o.func,
  onApplyDiscount: o.func,
  discountData: o.object,
  discountAmount: o.number,
  voucherCode: o.string,
  onVoucherCodeChange: o.func,
  onApplyVoucher: o.func,
  voucherData: o.object,
  cashbackWallet: o.object,
  cashbackInput: o.string,
  onCashbackInputChange: o.func,
  onApplyCashback: o.func,
  onApplyMaxCashback: o.func,
  appliedCashback: o.number,
  onClearCashback: o.func
};
const PosDiscounts$1 = reactExports.memo(PosDiscounts);
function usePosCheckout({
  cartItems,
  packageCoverage,
  planCoverage = {},
  selectedClient,
  organizationId,
  branchId,
  discountCode,
  rewardDiscountAmount,
  voucherCode,
  manualDiscount,
  discountType,
  appliedCashback,
  deliveryCharge,
  deliveryMethod,
  appointmentId,
  notes,
  saleDate,
  taxRate,
  cashierId,
  postSaleDiscountActions,
  onSuccess
}) {
  const handleProcessPayment = reactExports.useCallback(
    async (payments, overrideInfo = null) => {
      if (cartItems.length === 0) throw new Error("Cart is empty");
      if (!selectedClient) throw new Error("Please select a customer");
      if (!organizationId) throw new Error("Organization ID is missing. Please contact support.");
      if (!branchId) throw new Error("Branch is not selected. Please select a branch.");
      if (cartItems.every((i) => i.is_service_usage)) {
        const clientName = [selectedClient.first_name, selectedClient.last_name].filter(Boolean).join(" ");
        const results = await Promise.allSettled(
          cartItems.map(
            (usage) => recordServiceUsage({
              productId: usage.product_id,
              quantity: usage.quantity ?? 1,
              branchId,
              notes: clientName ? `POS usage for ${clientName}` : "POS usage"
            })
          )
        );
        const failed = results.find((r) => r.status === "rejected");
        if (failed) throw failed.reason;
        toast.success("Service usage recorded");
        onSuccess?.();
        return;
      }
      const processedItems = cartItems.map((item, idx) => {
        if (item.is_service_usage) return null;
        if (item.item_type === "package") {
          return {
            item_type: "package_deposit",
            template_id: item.template_id,
            package_name: item.package_name,
            quantity: item.quantity ?? 1,
            unit_price: item.unit_price,
            discount_amount: 0
          };
        }
        if (item.item_type === "discount_plan") {
          return {
            item_type: "discount_plan_deposit",
            template_id: item.template_id,
            plan_name: item.plan_name,
            quantity: item.quantity ?? 1,
            unit_price: item.unit_price,
            discount_amount: 0
          };
        }
        if (item.item_type === "service") {
          const covered = packageCoverage[idx];
          const planCovered = !covered ? planCoverage[idx] : null;
          const discountPercent = planCovered?.discount_percent ?? 0;
          return {
            item_type: "service",
            service_id: item.service_id,
            service_name: item.service_name,
            service_category: item.service_category ?? null,
            stylist_id: item.stylist_id ?? null,
            quantity: item.quantity ?? 1,
            unit_price: item.unit_price,
            // Measured services: how much material was consumed. `quantity`
            // stays the number of times the service was performed so reports
            // never count a fraction of a service.
            measure_quantity: item.measure_quantity ?? null,
            measure_unit_label: item.measure_unit_label ?? null,
            measure_unit_price: item.measure_unit_price ?? null,
            discount_amount: covered ? item.unit_price * (covered.covered_quantity ?? item.quantity ?? 1) : planCovered ? item.unit_price * (item.quantity ?? 1) * discountPercent / 100 : item.discount_amount ?? 0,
            original_unit_price: covered || planCovered ? item.unit_price : null,
            paid_via_package: !!covered,
            package_name: covered?.package_templates?.name ?? null,
            notes: item.notes ?? null
          };
        }
        if (item.item_type === "addon") {
          return {
            item_type: "addon",
            addon_id: item.addon_id,
            addon_name: item.addon_name,
            addon_category: item.addon_category ?? null,
            quantity: item.quantity ?? 1,
            unit_price: item.unit_price,
            discount_amount: 0,
            line_total: item.unit_price * (item.quantity ?? 1),
            stylist_id: item.stylist_id ?? null,
            stylist_name: item.stylist_name ?? null,
            tax_rate: taxRate,
            tax_amount: 0
          };
        }
        return {
          item_type: "product",
          product_id: item.product_id,
          product_name: item.product_name,
          product_sku: item.product_sku ?? null,
          product_category: item.product_category ?? null,
          quantity: item.quantity ?? 1,
          unit_price: item.unit_price,
          discount_amount: item.discount_amount ?? 0,
          stylist_id: item.stylist_id ?? null,
          notes: item.notes ?? null
        };
      }).filter(Boolean);
      const loadingToastId = toast.loading("Processing payment...");
      const { data, error } = await processTransaction({
        organizationId,
        branchId,
        clientId: selectedClient.id,
        appointmentId: appointmentId || null,
        items: processedItems,
        payments,
        discountCode: discountCode || null,
        rewardDiscountAmount: rewardDiscountAmount || 0,
        voucher: voucherCode || null,
        manualDiscount: manualDiscount || null,
        manualDiscountType: discountType || null,
        cashbackRedemption: appliedCashback || null,
        deliveryCharge: deliveryCharge || 0,
        deliveryMethod: deliveryMethod || "standard",
        taxRate,
        notes,
        cashierId,
        saleDate: saleDate.toISOString(),
        overrideAuthorizedBy: overrideInfo?.authorizedBy ?? null,
        overrideType: overrideInfo?.type ?? null
      });
      if (error || !data) {
        toast.dismiss(loadingToastId);
        throw new Error("Failed to process transaction");
      }
      toast.success(`Sale completed! Sale #${data.sale_number}`, { id: loadingToastId });
      cartItems.filter((i) => i.is_service_usage).forEach((usage) => {
        recordServiceUsage({
          productId: usage.product_id,
          quantity: usage.quantity ?? 1,
          branchId,
          notes: `Sale #${data.sale_number}`
        }).catch((err) => {
          console.error("[POS] Failed to record service usage:", err);
          toast.error(
            `Warning: stock for "${usage.product_name}" could not be deducted. ${err?.message ?? ""}`
          );
        });
      });
      cartItems.filter((i) => i.item_type === "package").forEach((pkgItem) => {
        const pkgKey = `${pkgItem.template_id}:${pkgItem.valid_month}`;
        createClientPackage({
          organizationId,
          branchId,
          clientId: selectedClient.id,
          templateId: pkgItem.template_id,
          validMonth: pkgItem.valid_month || toFirstOfMonth(),
          pricePaid: pkgItem.unit_price,
          saleId: data.id,
          createdBy: cashierId
        }).then(({ data: newPkg, error: pkgError }) => {
          if (pkgError || !newPkg) {
            toast.error("Warning: package record could not be saved. Contact support.");
            return;
          }
          Object.entries(packageCoverage).filter(
            ([, pkg]) => pkg.fromCartPackage && `${pkg.templateId}:${pkg.validMonth}` === pkgKey
          ).forEach(([idxStr, pkg]) => {
            const cartItem = cartItems[Number(idxStr)];
            if (!cartItem) return;
            const coveredQty = pkg.covered_quantity ?? 1;
            for (let i = 0; i < coveredQty; i++) {
              redeemPackage({
                clientPackageId: newPkg.id,
                saleId: data.id,
                serviceId: cartItem.service_id,
                serviceName: cartItem.service_name,
                stylistId: cartItem.stylist_id ?? null,
                stylistName: cartItem.stylist_name ?? null,
                branchId,
                createdBy: cashierId
              }).catch((err) => {
                console.error("[POS] Failed to redeem package usage:", err);
                toast.error("Warning: package usage could not be recorded. Contact support.");
              });
            }
          });
        }).catch((err) => {
          console.error("[POS] Failed to create client package:", err);
          toast.error("Warning: package record could not be saved. Contact support.");
        });
      });
      cartItems.filter((i) => i.item_type === "discount_plan").forEach((planItem) => {
        createClientDiscountPlan({
          organizationId,
          branchId,
          clientId: selectedClient.id,
          templateId: planItem.template_id,
          validMonth: planItem.valid_month || toFirstOfMonth(),
          pricePaid: planItem.unit_price,
          saleId: data.id,
          createdBy: cashierId
        }).catch((err) => {
          console.error("[POS] Failed to create client discount plan:", err);
          toast.error("Warning: discount plan record could not be saved. Contact support.");
        });
      });
      Object.entries(packageCoverage).forEach(([idxStr, pkg]) => {
        if (pkg.fromCartPackage) return;
        const cartItem = cartItems[Number(idxStr)];
        if (!cartItem) return;
        const coveredQty = pkg.covered_quantity ?? 1;
        for (let i = 0; i < coveredQty; i++) {
          redeemPackage({
            clientPackageId: pkg.id,
            saleId: data.id,
            serviceId: cartItem.service_id,
            serviceName: cartItem.service_name,
            stylistId: cartItem.stylist_id ?? null,
            stylistName: cartItem.stylist_name ?? null,
            branchId,
            createdBy: cashierId
          }).catch((err) => {
            console.error("[POS] Failed to redeem package usage:", err);
            toast.error("Warning: package usage could not be recorded. Contact support.");
          });
        }
      });
      Object.entries(planCoverage).forEach(([idxStr, plan]) => {
        const cartItem = cartItems[Number(idxStr)];
        if (!cartItem || cartItem.item_type !== "service") return;
        redeemDiscountPlan({
          clientPlanId: plan.id,
          saleId: data.id,
          serviceId: cartItem.service_id,
          serviceName: cartItem.service_name,
          stylistId: cartItem.stylist_id ?? null,
          stylistName: cartItem.stylist_name ?? null,
          branchId,
          originalServicePrice: cartItem.unit_price,
          discountPercent: plan.discount_percent,
          discountAmount: cartItem.unit_price * (cartItem.quantity ?? 1) * plan.discount_percent / 100,
          createdBy: cashierId
        }).catch((err) => {
          console.error("[POS] Failed to redeem discount plan usage:", err);
          toast.error("Warning: discount plan usage could not be recorded. Contact support.");
        });
      });
      const hairEntries = buildHairRecordEntries(cartItems);
      if (hairEntries.length) {
        createHairRecordsForSale({
          saleId: data.id,
          clientId: selectedClient.id,
          organizationId,
          branchId,
          createdBy: cashierId,
          performedAt: saleDate.toISOString(),
          entries: hairEntries
        }).catch((err) => {
          console.error("[POS] Failed to record hair formulas:", err);
          toast.error("Warning: the colour formula could not be saved to the client.");
        });
      }
      earnPointsFromSale({
        organizationId,
        clientId: selectedClient.id,
        saleId: data.id,
        totalAmount: data.total_amount,
        createdBy: cashierId
      }).catch((err) => console.error("[POS] Failed to earn loyalty points:", err));
      postSaleDiscountActions({ saleId: data.id, createdBy: cashierId }).then(
        () => creditCashbackFromSale({
          organizationId,
          clientId: selectedClient.id,
          saleId: data.id,
          saleItems: cartItems.filter((i) => !i.is_service_usage),
          createdBy: cashierId
        }).catch((err) => console.error("[POS] Failed to credit cashback:", err))
      ).catch((err) => console.error("[POS] Failed to run post-sale discount actions:", err));
      if (appointmentId) {
        const primaryPaymentMethod = payments.reduce(
          (best, p) => parseFloat(p.amount) > parseFloat(best?.amount || 0) ? p : best,
          null
        )?.payment_method || null;
        updateAppointmentStatus(appointmentId, "completed", {
          payment_status: "paid",
          paid_at: (/* @__PURE__ */ new Date()).toISOString(),
          sale_id: data.id,
          ...primaryPaymentMethod && { payment_method: primaryPaymentMethod }
        }).catch((err) => console.error("[POS] Failed to mark appointment as paid:", err));
        applyDepositsToSale({ appointmentId, saleId: data.id }).catch((err) => {
          console.error("[POS] Failed to apply appointment deposits to sale:", err);
          toast.error("Warning: deposit could not be applied to this sale. Please reconcile manually.");
        });
      }
      onSuccess?.(data);
    },
    [
      cartItems,
      packageCoverage,
      planCoverage,
      selectedClient,
      organizationId,
      branchId,
      discountCode,
      rewardDiscountAmount,
      voucherCode,
      manualDiscount,
      discountType,
      appliedCashback,
      deliveryCharge,
      deliveryMethod,
      appointmentId,
      notes,
      saleDate,
      taxRate,
      cashierId,
      postSaleDiscountActions,
      onSuccess
    ]
  );
  return { handleProcessPayment };
}
function useDeliveryCharge() {
  const [deliveryEnabled, setDeliveryEnabled] = reactExports.useState(false);
  const [deliveryChargeInput, setDeliveryChargeInput] = reactExports.useState("");
  const [deliveryMethod, setDeliveryMethod] = reactExports.useState("standard");
  const deliveryCharge = reactExports.useMemo(() => {
    const parsed = parseFloat(deliveryChargeInput);
    return isNaN(parsed) ? 0 : Math.max(0, parsed);
  }, [deliveryChargeInput]);
  const toggleDelivery = reactExports.useCallback(() => {
    setDeliveryEnabled((prev) => !prev);
  }, []);
  const setDeliveryAmount = reactExports.useCallback((amount) => {
    if (amount === "" || amount === null || amount === void 0) {
      setDeliveryChargeInput("");
    } else {
      const parsed = parseFloat(amount);
      if (!isNaN(parsed) && parsed >= 0) {
        setDeliveryChargeInput(amount);
      }
    }
  }, []);
  const resetDelivery = reactExports.useCallback(() => {
    setDeliveryEnabled(false);
    setDeliveryChargeInput("");
    setDeliveryMethod("standard");
  }, []);
  return {
    deliveryEnabled,
    deliveryCharge,
    // numeric value for calculations
    deliveryChargeInput,
    // string value for input field
    deliveryMethod,
    toggleDelivery,
    setDeliveryEnabled,
    setDeliveryAmount,
    setDeliveryMethod,
    resetDelivery
  };
}
function usePackageCoverage({ clientId, cartItems }) {
  const [packageCoverage, setPackageCoverage] = reactExports.useState({});
  const [isChecking, setIsChecking] = reactExports.useState(false);
  const { serviceItemsKey, serviceItems, cartPackageItems, cartPackageKey } = reactExports.useMemo(() => {
    const items = cartItems.map(
      (item, idx) => item.item_type === "service" && item.service_id ? { idx, serviceId: item.service_id, quantity: item.quantity ?? 1 } : null
    ).filter(Boolean);
    const pkgItems = cartItems.filter(
      (i) => i.item_type === "package" && i.service_ids?.length
    );
    return {
      serviceItems: items,
      serviceItemsKey: items.map((i) => `${i.idx}:${i.serviceId}:${i.quantity}`).join(","),
      cartPackageItems: pkgItems,
      cartPackageKey: pkgItems.map((p) => `${p.template_id}:${p.valid_month}:${p.max_uses_per_month}`).join(",")
    };
  }, [cartItems]);
  reactExports.useEffect(() => {
    if (!clientId || !serviceItemsKey) {
      setPackageCoverage({});
      setIsChecking(false);
      return void 0;
    }
    let cancelled = false;
    setIsChecking(true);
    const serviceIds = serviceItems.map((i) => i.serviceId);
    getActivePackagesForServicesBatch({ clientId, serviceIds }).then(({ data: coverageMap }) => {
      if (cancelled) return;
      const result = {};
      const assignedByPackage = {};
      const assignedByPackageService = {};
      serviceItems.forEach(({ idx, serviceId, quantity }) => {
        const coverage = coverageMap[serviceId];
        if (!coverage) return;
        const pkgId = coverage.id;
        const serviceKey = `${pkgId}:${serviceId}`;
        const usedTotal = assignedByPackage[pkgId] || 0;
        const usedService = assignedByPackageService[serviceKey] || 0;
        const budgetTotal = coverage.remaining_total === null ? Infinity : coverage.remaining_total - usedTotal;
        const budgetService = coverage.remaining_per_service === null ? Infinity : coverage.remaining_per_service - usedService;
        const budget = Math.min(budgetTotal, budgetService);
        if (budget <= 0) return;
        const coveredQty = Math.min(quantity, budget);
        result[idx] = { ...coverage, covered_quantity: coveredQty };
        assignedByPackage[pkgId] = usedTotal + coveredQty;
        assignedByPackageService[serviceKey] = usedService + coveredQty;
      });
      if (cartPackageItems.length > 0) {
        const cartPkgUsedTotal = {};
        const cartPkgUsedService = {};
        serviceItems.forEach(({ idx, serviceId, quantity }) => {
          if (result[idx]) return;
          for (let pkgIdx = 0; pkgIdx < cartPackageItems.length; pkgIdx++) {
            const pkgItem = cartPackageItems[pkgIdx];
            if (!pkgItem.service_ids.includes(serviceId)) continue;
            const usedTotal = cartPkgUsedTotal[pkgIdx] || 0;
            const usedService = cartPkgUsedService[`${pkgIdx}:${serviceId}`] || 0;
            const budgetTotal = pkgItem.max_uses_per_month == null ? Infinity : pkgItem.max_uses_per_month - usedTotal;
            const serviceLimit = pkgItem.service_max_uses?.[serviceId];
            const budgetService = serviceLimit == null ? Infinity : serviceLimit - usedService;
            const budget = Math.min(budgetTotal, budgetService);
            if (budget <= 0) continue;
            const coveredQty = Math.min(quantity, budget);
            result[idx] = {
              fromCartPackage: true,
              templateId: pkgItem.template_id,
              validMonth: pkgItem.valid_month,
              covered_quantity: coveredQty,
              package_templates: { name: pkgItem.package_name }
            };
            cartPkgUsedTotal[pkgIdx] = usedTotal + coveredQty;
            cartPkgUsedService[`${pkgIdx}:${serviceId}`] = usedService + coveredQty;
            break;
          }
        });
      }
      setPackageCoverage(result);
      setIsChecking(false);
    });
    return () => {
      cancelled = true;
    };
  }, [clientId, serviceItemsKey, cartPackageKey]);
  return { packageCoverage, isChecking };
}
function getMonthOptions$1() {
  const options = [];
  const now = /* @__PURE__ */ new Date();
  for (let i = -3; i <= 6; i += 1) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    options.push({
      label: d.toLocaleString("en-US", { month: "long", year: "numeric" }),
      value: toFirstOfMonth(d)
    });
  }
  return options;
}
const MONTH_OPTIONS$1 = getMonthOptions$1();
function PosPackageAddDialog({
  open,
  onClose,
  template,
  /** The currently selected client in POS (may be null) */
  posSelectedClient,
  /** Called with { client, month } when user confirms */
  onConfirm
}) {
  const [client, setClient] = reactExports.useState(posSelectedClient || null);
  const [clientSearch, setClientSearch] = reactExports.useState("");
  const [month, setMonth] = reactExports.useState(MONTH_OPTIONS$1[3].value);
  const { clients: clientOptions, clientsLoading } = useClientAutocomplete(
    clientSearch,
    15,
    null,
    open
  );
  const { services } = useGetServices({ pageSize: 500, enabled: open });
  const coveredServices = template && services.length && template.service_ids?.length ? services.filter((s) => template.service_ids.includes(s.id)) : [];
  reactExports.useEffect(() => {
    if (open) {
      setClient(posSelectedClient || null);
      setClientSearch(
        posSelectedClient ? `${posSelectedClient.first_name} ${posSelectedClient.last_name}` : ""
      );
      setMonth(MONTH_OPTIONS$1[3].value);
    }
  }, [open, posSelectedClient]);
  const handleConfirm = () => {
    onConfirm({ client, month });
  };
  if (!template) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { sx: { pb: 1 }, children: "Add Package to Cart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          alignItems: "center",
          spacing: 1.5,
          sx: {
            p: 1.5,
            borderRadius: 1.5,
            border: "2px solid",
            borderColor: template.color || "primary.main",
            bgcolor: "background.neutral"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  bgcolor: template.color || "primary.main",
                  flexShrink: 0
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "subtitle2",
                  fontWeight: 700,
                  noWrap: true,
                  sx: { textTransform: "capitalize" },
                  children: template?.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: template.description || "No Description" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", spacing: 0.5, flexShrink: 0, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", fontWeight: 700, color: "primary.main", children: [
                "$",
                Number(template.price || 0).toFixed(2)
              ] }),
              template.max_uses_per_month ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  size: "small",
                  label: `${template.max_uses_per_month}x / mo`,
                  sx: { height: 20, fontSize: 10 }
                }
              ) : !template.service_max_uses ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  size: "small",
                  label: "Unlimited",
                  color: "success",
                  sx: { height: 20, fontSize: 10 }
                }
              ) : null
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { pt: 0.5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            color: "text.secondary",
            sx: { mb: 0.75, display: "block" },
            children: "Services covered"
          }
        ),
        coveredServices.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", flexWrap: "wrap", gap: 0.75 }, children: coveredServices.map((s) => {
          const perServiceLimit = template.service_max_uses?.[s.id];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: perServiceLimit ? `${s?.name} · ${perServiceLimit}x/mo` : s?.name,
              sx: { height: 22, fontSize: 11, textTransform: "capitalize" }
            },
            s.id
          );
        }) }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            color: "text.secondary",
            sx: { mb: 0.75, display: "block" },
            children: "Client"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Autocomplete,
          {
            options: clientOptions,
            loading: clientsLoading,
            value: client,
            inputValue: clientSearch,
            onChange: (_, v) => {
              setClient(v);
              setClientSearch(v ? `${v.first_name} ${v.last_name}` : "");
            },
            onInputChange: (_, v, reason) => {
              if (reason !== "reset") setClientSearch(v);
            },
            isOptionEqualToValue: (o2, v) => o2.id === v.id,
            filterOptions: (x) => x,
            getOptionLabel: (o2) => `${o2.first_name} ${o2.last_name}`,
            renderOption: (props, o2) => /* @__PURE__ */ reactExports.createElement(Box, { component: "li", ...props, key: o2.id, sx: { py: "6px !important" } }, /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.25, alignItems: "center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Avatar,
                {
                  sx: {
                    width: 25,
                    height: 25,
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:user-bold", width: 15 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, textTransform: "capitalize", children: [
                  o2.first_name,
                  " ",
                  o2.last_name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: [formatPhoneNumberIntl(o2.phone_primary), o2.email].filter(Boolean).join(" · ") || "No contact info" })
              ] })
            ] })),
            noOptionsText: clientSearch ? "No clients found" : "Type to search…",
            renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                ...params,
                placeholder: "Select client",
                size: "small",
                InputProps: {
                  // make the text bold
                  style: { fontWeight: 600 },
                  ...params.InputProps,
                  startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", sx: { pl: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:user-bold-duotone", width: 18 }) })
                }
              }
            )
          }
        ),
        !client && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "warning.main", sx: { mt: 0.5, display: "block" }, children: "No client selected — POS will remain walk-in after adding" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", fullWidth: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Package Month" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Package Month", value: month, onChange: (e) => setMonth(e.target.value), children: MONTH_OPTIONS$1.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.value, children: opt.label }, opt.value)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, color: "inherit", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          onClick: handleConfirm,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:cart-plus-bold" }),
          children: "Add to Cart"
        }
      )
    ] })
  ] });
}
const STATUS_TABS = [
  { value: "all", label: "All" },
  { value: "confirmed", label: "Confirmed" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
  { value: "no_show", label: "No Show" }
];
const STATUS_COLORS = {
  confirmed: "success",
  pending: "warning",
  completed: "info",
  cancelled: "error",
  no_show: "default"
};
function PosAppointmentDialog({ open, onClose, branchId, onSelect }) {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedDate, setSelectedDate] = reactExports.useState(dayjs());
  const [statusTab, setStatusTab] = reactExports.useState("all");
  const dateString = selectedDate.format("YYYY-MM-DD");
  const { appointments, loading: appointmentsLoading } = useAppointments({
    branchId,
    startDate: dateString,
    endDate: dateString,
    slim: true,
    // Only fetch once the dialog is actually open -- see pos-package-add-dialog.
    enabled: open
  });
  const filteredAppointments = reactExports.useMemo(() => {
    let result = appointments;
    if (statusTab !== "all") {
      result = result.filter((apt) => apt.status === statusTab);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (apt) => apt.appointment_number?.toLowerCase().includes(query) || apt.client?.first_name?.toLowerCase().includes(query) || apt.client?.last_name?.toLowerCase().includes(query) || apt.client?.phone_primary?.toLowerCase().includes(query)
      );
    }
    return result;
  }, [appointments, searchQuery, statusTab]);
  const getTabCount = (tabValue) => {
    if (tabValue === "all") return appointments.length;
    return appointments.filter((apt) => apt.status === tabValue).length;
  };
  const handleSelect = (appointment) => {
    onSelect(appointment.id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      "Load from Appointment",
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, sx: { position: "absolute", right: 8, top: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-fill" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { dividers: true, sx: { minHeight: "500px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, sx: { mb: 3, mt: 0.8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            fullWidth: true,
            size: "small",
            placeholder: "Search by appointment number, client name, or phone...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            InputProps: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill" }) })
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, alignItems: "center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: selectedDate.isSame(dayjs(), "day") ? "contained" : "outlined",
              size: "small",
              onClick: () => setSelectedDate(dayjs()),
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:calendar-bold" }),
              children: "Today"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: selectedDate.isSame(dayjs().add(1, "day"), "day") ? "contained" : "outlined",
              size: "small",
              onClick: () => setSelectedDate(dayjs().add(1, "day")),
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:calendar-bold" }),
              children: "Tomorrow"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DatePicker,
            {
              label: "Select Date",
              value: selectedDate,
              onChange: (newValue) => setSelectedDate(newValue),
              slotProps: {
                textField: {
                  size: "small",
                  sx: { flex: 1 }
                }
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tabs,
        {
          value: statusTab,
          onChange: (_, newValue) => setStatusTab(newValue),
          variant: "scrollable",
          scrollButtons: "auto",
          sx: { mb: 2, borderBottom: 1, borderColor: "divider" },
          children: STATUS_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tab,
            {
              value: tab.value,
              label: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: getTabCount(tab.value),
                    size: "small",
                    sx: { height: 18, fontSize: "0.65rem", "& .MuiChip-label": { px: 0.75 } }
                  }
                )
              ] })
            },
            tab.value
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { sx: { maxHeight: 360 }, children: appointmentsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { align: "center", sx: { py: 3 }, children: "Loading appointments..." }) : filteredAppointments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 8, textAlign: "center", color: "text.disabled" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:calendar-bold-duotone", width: 64, sx: { mb: 2, opacity: 0.5 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { children: [
          "No appointments found for ",
          selectedDate.format("MMM D, YYYY")
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1 }, children: filteredAppointments.map((appointment) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            p: 1.25,
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            cursor: "pointer",
            transition: "all 0.2s",
            "&:hover": {
              borderColor: "primary.main",
              bgcolor: "action.hover"
            }
          },
          onClick: () => handleSelect(appointment),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Stack,
            {
              direction: "row",
              justifyContent: "space-between",
              alignItems: "center",
              spacing: 1,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, sx: { flex: 1, minWidth: 0 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, noWrap: true, children: [
                    appointment.client?.first_name,
                    " ",
                    appointment.client?.last_name
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: appointment.status?.replace("_", " "),
                      size: "small",
                      color: STATUS_COLORS[appointment.status] || "default",
                      sx: {
                        textTransform: "capitalize",
                        height: 18,
                        fontSize: "0.65rem",
                        "& .MuiChip-label": { px: 0.75 }
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: [
                    appointment.appointment_number,
                    " •",
                    " ",
                    appointment.client?.phone_primary || appointment.client?.email
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Typography,
                    {
                      variant: "caption",
                      color: "primary",
                      fontWeight: "medium",
                      sx: { whiteSpace: "nowrap" },
                      children: [
                        "$",
                        parseFloat(appointment.total_amount || 0).toFixed(2)
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", children: [
                  appointment.services?.slice(0, 3).map((service, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: service.service_name,
                      size: "small",
                      variant: "outlined",
                      sx: {
                        height: 18,
                        fontSize: "0.65rem",
                        "& .MuiChip-label": { px: 0.75 }
                      }
                    },
                    idx
                  )),
                  appointment.services?.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: `+${appointment.services.length - 3} more`,
                      size: "small",
                      variant: "outlined",
                      sx: {
                        height: 18,
                        fontSize: "0.65rem",
                        "& .MuiChip-label": { px: 0.75 }
                      }
                    }
                  )
                ] })
              ] })
            }
          )
        },
        appointment.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, color: "inherit", children: "Close" }) })
  ] });
}
PosAppointmentDialog.propTypes = {
  open: o.bool,
  onClose: o.func,
  branchId: o.string,
  onSelect: o.func
};
function useDiscountPlanCoverage({ clientId, cartItems }) {
  const [planCoverage, setPlanCoverage] = reactExports.useState({});
  const [isChecking, setIsChecking] = reactExports.useState(false);
  const { serviceItemsKey, serviceItems } = reactExports.useMemo(() => {
    const items = cartItems.map(
      (item, idx) => item.item_type === "service" && item.service_id ? { idx, serviceId: item.service_id, quantity: item.quantity ?? 1 } : null
    ).filter(Boolean);
    return {
      serviceItems: items,
      serviceItemsKey: items.map((i) => `${i.idx}:${i.serviceId}:${i.quantity}`).join(",")
    };
  }, [cartItems]);
  reactExports.useEffect(() => {
    if (!clientId || !serviceItemsKey) {
      setPlanCoverage({});
      setIsChecking(false);
      return void 0;
    }
    let cancelled = false;
    setIsChecking(true);
    const serviceIds = serviceItems.map((i) => i.serviceId);
    const run = async () => {
      try {
        const { data: coverageMap } = await getActiveDiscountPlansForServicesBatch({
          clientId,
          serviceIds
        });
        if (cancelled) return;
        const cartUsesByService = {};
        cartItems.forEach((item) => {
          if (item.item_type === "service" && item.service_id) {
            const qty = item.quantity ?? 1;
            cartUsesByService[item.service_id] = (cartUsesByService[item.service_id] || 0) + qty;
          }
        });
        const planIds = [...new Set(Object.values(coverageMap).map((c) => c.id))];
        let usageCountsByPlan = {};
        try {
          usageCountsByPlan = await getBatchPlanUsageCounts(planIds);
        } catch (err) {
          console.error("[use-discount-plan-coverage] Failed to fetch usage counts:", err);
        }
        const result = {};
        serviceItems.forEach(({ idx, serviceId }) => {
          const coverage = coverageMap[serviceId];
          if (!coverage) return;
          const dbUsages = usageCountsByPlan[coverage.id]?.[serviceId] ?? 0;
          const cartUsages = cartUsesByService[serviceId] ?? 0;
          const serviceMaxUses = coverage.service_max_uses?.[serviceId];
          if (serviceMaxUses === null || serviceMaxUses === void 0) {
            result[idx] = coverage;
            return;
          }
          if (dbUsages + cartUsages <= serviceMaxUses) {
            result[idx] = coverage;
          }
        });
        if (!cancelled) setPlanCoverage(result);
      } catch (err) {
        console.error("[use-discount-plan-coverage] Error checking coverage:", err);
        if (!cancelled) setPlanCoverage({});
      } finally {
        if (!cancelled) setIsChecking(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [clientId, serviceItemsKey]);
  return { planCoverage, isChecking };
}
function getMonthOptions() {
  const options = [];
  const now = /* @__PURE__ */ new Date();
  for (let i = -3; i <= 6; i += 1) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    options.push({
      label: d.toLocaleString("en-US", { month: "long", year: "numeric" }),
      value: toFirstOfMonth$1(d)
    });
  }
  return options;
}
const MONTH_OPTIONS = getMonthOptions();
function PosDiscountPlanAddDialog({
  open,
  onClose,
  template,
  posSelectedClient,
  onConfirm
}) {
  const [month, setMonth] = reactExports.useState(MONTH_OPTIONS[3].value);
  reactExports.useEffect(() => {
    if (open) {
      setMonth(MONTH_OPTIONS[3].value);
    }
  }, [open]);
  const discounts = template?.service_discounts || {};
  const serviceIds = template?.service_ids || [];
  const { services: resolvedServices } = useGetServicesByIds(serviceIds);
  const serviceNameMap = Object.fromEntries(resolvedServices.map((s) => [s.id, s.name]));
  if (!template) return null;
  const handleConfirm = () => {
    onConfirm({ month });
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: template.color || "#635BFF",
            flexShrink: 0
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: template.name })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 0.5 }, children: [
      posSelectedClient && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:user-bold-duotone", width: 18, sx: { color: "text.secondary" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
          posSelectedClient.first_name,
          " ",
          posSelectedClient.last_name
        ] })
      ] }),
      serviceIds.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Included discounts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0.75, children: serviceIds.map((svcId) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", noWrap: true, sx: { flex: 1 }, children: serviceNameMap[svcId] || svcId }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  size: "small",
                  label: `${discounts[svcId] ?? 0}% off`,
                  color: "info",
                  variant: "soft"
                }
              )
            ]
          },
          svcId
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, size: "small", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Valid month" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Valid month", value: month, onChange: (e) => setMonth(e.target.value), children: MONTH_OPTIONS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: m.value, children: m.label }, m.value)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          sx: {
            p: 1.5,
            borderRadius: 1.5,
            bgcolor: "background.neutral",
            border: "1px solid",
            borderColor: "divider"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Plan price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: template.price > 0 ? `${template.price}` : "Free" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", onClick: handleConfirm, children: "Add to cart" })
    ] })
  ] });
}
function PosBarcodeSetupButton({
  isConnected,
  isConnecting,
  selectedPort,
  ports,
  portsLoading,
  error,
  onOpen,
  // called when the menu opens (triggers port refresh)
  onConnect,
  // (portPath) => void
  onDisconnect,
  // () => void
  onForget
  // () => void
}) {
  const [anchor, setAnchor] = reactExports.useState(null);
  const handleOpenMenu = (e) => {
    setAnchor(e.currentTarget);
    onOpen?.();
  };
  const handleClose = () => setAnchor(null);
  const handleConnect = (portPath) => {
    onConnect(portPath);
    handleClose();
  };
  const handleDisconnect = () => {
    onDisconnect();
    handleClose();
  };
  const handleForget = () => {
    onForget();
    handleClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tooltip,
      {
        title: isConnected ? `Barcode scanner connected (${selectedPort})` : "Connect barcode scanner",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outlined",
            size: "small",
            onClick: handleOpenMenu,
            startIcon: isConnecting ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 14, color: "inherit" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Iconify,
              {
                icon: "solar:scanner-bold-duotone",
                width: 16,
                sx: { color: isConnected ? "success.main" : "text.secondary" }
              }
            ),
            sx: {
              whiteSpace: "nowrap",
              borderColor: isConnected ? "success.main" : "divider",
              color: isConnected ? "success.dark" : "text.secondary",
              bgcolor: isConnected ? "success.lighter" : "transparent",
              "&:hover": {
                borderColor: isConnected ? "success.dark" : "text.secondary",
                bgcolor: isConnected ? "success.light" : "action.hover"
              }
            },
            children: [
              isConnected ? "Scanner" : "Scanner",
              isConnected && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  sx: {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "success.main",
                    ml: 0.75,
                    flexShrink: 0
                  }
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Menu,
      {
        anchorEl: anchor,
        open: Boolean(anchor),
        onClose: handleClose,
        transformOrigin: { horizontal: "right", vertical: "top" },
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
        PaperProps: { sx: { minWidth: 260, mt: 0.5 } },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { px: 2, py: 1.25 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", fontWeight: 700, children: "Barcode Scanner" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: isConnected ? `Connected · ${selectedPort}` : "Select a serial port to connect your scanner" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { px: 2, py: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "error.main", children: error }) }),
          isConnected ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { px: 2, py: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: "Connected",
                color: "success",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold", width: 14 })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { onClick: handleDisconnect, sx: { color: "error.main", gap: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:plug-circle-bold", width: 16 }),
              "Disconnect"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { onClick: handleForget, sx: { color: "warning.main", gap: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 }),
              "Forget device"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { px: 2, pt: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Available ports" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onOpen?.(), disabled: portsLoading, children: portsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 12 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:refresh-bold", width: 14 }) })
            ] }) }),
            ports.length === 0 && !portsLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { px: 2, py: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "No serial ports found" }) }),
            ports.map((port) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              MenuItem,
              {
                onClick: () => handleConnect(port.path),
                disabled: isConnecting,
                sx: { gap: 1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:usb-bold", width: 16, sx: { color: "text.secondary" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: port.path }),
                    (port.manufacturer || port.pnpId) && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: port.manufacturer ?? port.pnpId })
                  ] })
                ]
              },
              port.path
            )),
            ports.length === 0 && portsLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { px: 2, py: 1, display: "flex", alignItems: "center", gap: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 12 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Scanning ports…" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function DiscountPlanServicesDialog({ open, onClose, plan, template: templateProp }) {
  const tpl = templateProp ?? plan?.discount_plan_templates;
  const serviceIds = tpl?.service_ids ?? [];
  const serviceDiscounts = tpl?.service_discounts ?? {};
  const serviceMaxUses = tpl?.service_max_uses ?? {};
  const { services, servicesLoading } = useGetServicesByIds(open ? serviceIds : null);
  const { usages, usagesLoading } = useGetDiscountPlanUsages(open && plan?.id ? plan.id : null);
  const usagesByService = usages.reduce((acc, usage) => {
    acc[usage.service_id] = (acc[usage.service_id] || 0) + 1;
    return acc;
  }, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:tag-price-bold-duotone", width: 24, color: "info.main" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Discount Plan Services" }),
          tpl?.name && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: tpl.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, sx: { pt: 2 }, children: servicesLoading || usagesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "center", sx: { py: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }) : services.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "center", spacing: 1, sx: { py: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "warning", children: "No services configured" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 3, sx: { py: 1 }, children: services.map((s) => {
      const pct = serviceDiscounts[s.id];
      const used = usagesByService[s.id] || 0;
      const maxUses = serviceMaxUses[s.id];
      const progressValue = maxUses != null ? used / maxUses * 100 : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: s.name }),
            pct != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
              pct,
              "% off"
            ] })
          ] }),
          maxUses != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { fontWeight: 600 }, children: [
            used,
            "/",
            maxUses
          ] })
        ] }),
        maxUses != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
          LinearProgress,
          {
            variant: "determinate",
            value: progressValue,
            color: "primary",
            sx: {
              height: 8,
              borderRadius: 1,
              backgroundColor: "action.disabledBackground"
            }
          }
        )
      ] }, s.id);
    }) }) })
  ] });
}
const Pill = reactExports.forwardRef(function Pill2({ icon, iconColor, children, onClick, sx = {}, ...other }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Stack,
    {
      ref,
      component: "span",
      direction: "row",
      alignItems: "center",
      spacing: 0.6,
      onClick,
      ...other,
      sx: {
        display: "inline-flex",
        px: 1.25,
        py: 0.45,
        borderRadius: 5,
        border: "1px solid",
        borderColor: iconColor,
        bgcolor: (t) => alpha(iconColor || t.palette.primary.main, 0.1),
        flexShrink: 0,
        ...onClick && {
          cursor: "pointer",
          userSelect: "none",
          transition: "all 0.15s",
          "&:hover": {
            bgcolor: (t) => alpha(iconColor || t.palette.primary.main, 0.2)
          }
        },
        ...sx
      },
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 13, sx: { color: iconColor, flexShrink: 0 } }),
        children
      ]
    }
  );
});
function PosClientBenefitsStrip({
  selectedClient,
  loyaltyBalance,
  cashbackWallet,
  organizationId,
  saleDate
}) {
  const clientId = selectedClient?.id ?? null;
  const { client: fullClient, clientLoading } = useClient(clientId);
  const { clientPackages, clientPackagesLoading } = useGetClientPackages(clientId, {
    onlyActive: true
  });
  const { clientPlans, clientPlansLoading } = useGetClientDiscountPlans(clientId, {
    onlyActive: true
  });
  const { vouchers, vouchersLoading } = useGetClientVouchers(clientId);
  const { redemptions, redemptionsLoading } = useGetRewardRedemptions({
    organizationId,
    clientId,
    pageSize: 50,
    requireClientId: true
  });
  const birthdayInfo = reactExports.useMemo(() => {
    const dob = fullClient?.date_of_birth;
    if (!dob) return null;
    const today = dayjs();
    let birthday = dayjs(dob).year(today.year());
    if (birthday.isBefore(today, "day")) birthday = birthday.add(1, "year");
    const daysUntil = birthday.diff(today, "day");
    if (daysUntil > 7) return null;
    return { daysUntil };
  }, [fullClient?.date_of_birth]);
  const activePackages = reactExports.useMemo(() => {
    const ref = saleDate ? dayjs(saleDate) : dayjs();
    return clientPackages.filter(
      (p) => p.status === "active" && dayjs(p.valid_month).isSame(ref, "month")
    );
  }, [clientPackages, saleDate]);
  const activeDiscountPlans = reactExports.useMemo(() => {
    const ref = saleDate ? dayjs(saleDate) : dayjs();
    return clientPlans.filter(
      (p) => p.status === "active" && dayjs(p.valid_month).isSame(ref, "month")
    );
  }, [clientPlans, saleDate]);
  const activeRedemptions = reactExports.useMemo(
    () => redemptions.filter((r) => r.status === "active" && dayjs().isBefore(dayjs(r.expires_at))),
    [redemptions]
  );
  const [selectedTemplate, setSelectedTemplate] = reactExports.useState(null);
  const [selectedPlan, setSelectedPlan] = reactExports.useState(null);
  const hasPoints = (loyaltyBalance?.loyalty_points ?? 0) > 0;
  const hasCashback = (cashbackWallet?.balance ?? 0) > 0;
  const hasAny = birthdayInfo || hasPoints || hasCashback || activePackages.length > 0 || activeDiscountPlans.length > 0 || vouchers.length > 0 || activeRedemptions.length > 0;
  const isLoading = clientLoading || clientPackagesLoading || clientPlansLoading || vouchersLoading || redemptionsLoading;
  if (!selectedClient) return null;
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Stack,
      {
        component: Card,
        direction: "row",
        variant: "outlined",
        alignItems: "center",
        gap: 1,
        sx: { mb: 1, px: 2, py: 1.25, borderRadius: 1.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 14, thickness: 5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: "Checking benefits... you can only complete the sale after this loads" })
        ]
      }
    );
  }
  if (!hasAny) return null;
  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      const { toast: toast2 } = await __vitePreload(async () => {
        const { toast: toast3 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
        return { toast: toast3 };
      }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
      toast2.success(`"${code}" copied to clipboard`);
    } catch (_) {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Stack,
    {
      component: Card,
      direction: "row",
      variant: "outlined",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 0.75,
      sx: {
        mb: 1,
        px: 2,
        py: 1.25,
        borderRadius: 1.5
      },
      children: [
        birthdayInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            title: `${selectedClient.first_name}'s birthday ${birthdayInfo.daysUntil === 0 ? "is today" : `is in ${birthdayInfo.daysUntil} day${birthdayInfo.daysUntil > 1 ? "s" : ""}`}`,
            arrow: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { iconColor: "#e91e63", sx: { borderColor: "#f48fb1", bgcolor: "#fce4ec" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 700, sx: { color: "#c2185b", fontSize: 11 }, children: birthdayInfo.daysUntil === 0 ? "🎂 Birthday today!" : `🎂 Birthday in ${birthdayInfo.daysUntil} day${birthdayInfo.daysUntil > 1 ? "s" : ""}` }) })
          }
        ),
        hasPoints && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Loyalty points balance", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Pill,
          {
            icon: loyaltyBalance?.loyalty_tiers?.icon || "solar:loyalty-card-bold",
            iconColor: loyaltyBalance?.loyalty_tiers?.color || "#ff9800",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", fontWeight: 600, children: [
                loyaltyBalance.loyalty_points,
                " pts"
              ] }),
              loyaltyBalance?.loyalty_tiers?.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  component: "span",
                  sx: {
                    px: 0.65,
                    py: 0.1,
                    borderRadius: 4,
                    bgcolor: loyaltyBalance.loyalty_tiers.color ?? "primary.main",
                    lineHeight: 1,
                    display: "inline-flex",
                    alignItems: "center"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      component: "span",
                      variant: "caption",
                      sx: { color: "white", fontWeight: 700, fontSize: 9, lineHeight: 1 },
                      children: loyaltyBalance.loyalty_tiers.name
                    }
                  )
                }
              )
            ]
          }
        ) }),
        hasCashback && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Available cashback balance", arrow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { icon: "solar:wallet-bold", iconColor: "#2e7d32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", fontWeight: 600, sx: { color: "#2e7d32" }, children: [
          "$",
          cashbackWallet.balance.toFixed(2),
          " cashback"
        ] }) }) }),
        activePackages.map((pkg) => {
          const template = pkg.package_templates;
          const maxUses = pkg.max_uses_override ?? template?.max_uses_per_month;
          const used = pkg.uses_count ?? 0;
          const color = template?.color || "#5c6bc0";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              title: `Package · valid ${dayjs(pkg.valid_month).format("MMM YYYY")}${maxUses != null ? ` · ${used}/${maxUses} uses` : ""} · click to view services`,
              arrow: true,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Pill,
                {
                  icon: "solar:gift-bold-duotone",
                  iconColor: color,
                  onClick: () => setSelectedTemplate(template),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 600, sx: { color }, children: template?.name || "Package" }),
                    maxUses != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { color: "text.secondary", fontSize: 10 }, children: [
                      used,
                      "/",
                      maxUses
                    ] })
                  ]
                }
              )
            },
            pkg.id
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PackageServicesDialog,
          {
            open: !!selectedTemplate,
            onClose: () => setSelectedTemplate(null),
            template: selectedTemplate
          }
        ),
        activeDiscountPlans.map((plan) => {
          const tpl = plan.discount_plan_templates;
          const color = tpl?.color || "#0288d1";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              title: `Discount Plan · valid ${dayjs(plan.valid_month).format("MMM YYYY")} · click to view discounts`,
              arrow: true,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Pill,
                {
                  icon: "solar:tag-price-bold-duotone",
                  iconColor: color,
                  onClick: () => setSelectedPlan(plan),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 600, sx: { color }, children: tpl?.name || "Discount Plan" })
                }
              )
            },
            plan.id
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DiscountPlanServicesDialog,
          {
            open: !!selectedPlan,
            onClose: () => setSelectedPlan(null),
            plan: selectedPlan
          }
        ),
        vouchers.map((voucher) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            title: `Click to copy · $${parseFloat(voucher.remaining_value).toFixed(2)} remaining${voucher.valid_until ? ` · expires ${dayjs(voucher.valid_until).format("MMM D")}` : ""}`,
            arrow: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                component: "span",
                direction: "row",
                alignItems: "center",
                spacing: 0.6,
                onClick: () => handleCopy(voucher.code),
                sx: {
                  display: "inline-flex",
                  px: 1.25,
                  py: 0.45,
                  borderRadius: 5,
                  border: "1px solid",
                  borderColor: (t) => alpha(t.palette.warning.dark, 0.4),
                  bgcolor: (t) => alpha(t.palette.warning.main, 0.1),
                  cursor: "pointer",
                  userSelect: "none",
                  flexShrink: 0,
                  transition: "all 0.15s",
                  "&:hover": {
                    bgcolor: (t) => alpha(t.palette.warning.main, 0.2),
                    borderColor: "warning.main"
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:tag-bold",
                      width: 13,
                      sx: { color: "warning.dark", flexShrink: 0 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      fontWeight: 700,
                      sx: { color: "warning.dark", fontFamily: "monospace", letterSpacing: 0.3 },
                      children: voucher.code
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { color: "text.secondary", fontSize: 10 }, children: [
                    "$",
                    parseFloat(voucher.remaining_value).toFixed(2)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:copy-bold-duotone",
                      width: 11,
                      sx: { color: "text.disabled", flexShrink: 0 }
                    }
                  )
                ]
              }
            )
          },
          voucher.id
        )),
        activeRedemptions.map((redemption) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            title: `Click to copy · ${redemption.rewards_catalog?.name || "Reward"} · expires ${dayjs(redemption.expires_at).format("MMM D, YYYY")}`,
            arrow: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                component: "span",
                direction: "row",
                alignItems: "center",
                spacing: 0.6,
                onClick: () => handleCopy(redemption.redeem_code),
                sx: {
                  display: "inline-flex",
                  px: 1.25,
                  py: 0.45,
                  borderRadius: 5,
                  border: "1px solid",
                  borderColor: (t) => alpha(t.palette.info.dark, 0.35),
                  bgcolor: (t) => alpha(t.palette.info.main, 0.1),
                  cursor: "pointer",
                  userSelect: "none",
                  flexShrink: 0,
                  transition: "all 0.15s",
                  "&:hover": {
                    bgcolor: (t) => alpha(t.palette.info.main, 0.2),
                    borderColor: "info.main"
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:star-bold-duotone",
                      width: 13,
                      sx: { color: "info.dark", flexShrink: 0 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "caption",
                      fontWeight: 700,
                      sx: { color: "info.dark", fontFamily: "monospace", letterSpacing: 0.3 },
                      children: redemption.redeem_code
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:copy-bold-duotone",
                      width: 11,
                      sx: { color: "text.disabled", flexShrink: 0 }
                    }
                  )
                ]
              }
            )
          },
          redemption.id
        ))
      ]
    }
  );
}
function PosView() {
  const { user } = useAuthContext();
  const { isAdmin, isManager, hasRole } = usePermissions();
  const isPrivilegedUser = isAdmin || isManager;
  const isReceptionist = hasRole("receptionist");
  const { branches, primaryBranch, hasMultipleBranches } = useUserBranches();
  const currentBranch = primaryBranch || user?.primaryBranch;
  const organizationId = currentBranch?.organization_id || user?.organization_id;
  const [selectedBranch, setSelectedBranch] = reactExports.useState(currentBranch);
  const cartStorageKey = isReceptionist && user?.id && selectedBranch?.id ? `pos_cart_${user.id}_${selectedBranch.id}` : null;
  const [activeTab, setActiveTab] = reactExports.useState("services");
  const [catalogSearch, setCatalogSearch] = reactExports.useState("");
  const [selectedClient, setSelectedClient] = reactExports.useState(null);
  const [clientSearch, setClientSearch] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState("");
  const [saleDate, setSaleDate] = reactExports.useState(dayjs());
  const [clientPickerOpen, setClientPickerOpen] = reactExports.useState(false);
  const [linkedAppointmentId, setLinkedAppointmentId] = reactExports.useState(null);
  const [linkedDepositAmount, setLinkedDepositAmount] = reactExports.useState(0);
  const paymentDialog = Ee();
  const appointmentDialog = Ee();
  const quickAddClientDialog = Ee();
  const packageDialog = Ee();
  const discountPlanDialog = Ee();
  const [pendingPackageTemplate, setPendingPackageTemplate] = reactExports.useState(null);
  const [pendingDiscountPlanTemplate, setPendingDiscountPlanTemplate] = reactExports.useState(null);
  const [productTotalCount, setProductTotalCount] = reactExports.useState(0);
  const [serviceTotalCount, setServiceTotalCount] = reactExports.useState(0);
  const [addonTotalCount, setAddonTotalCount] = reactExports.useState(0);
  const [allowServiceUsage] = reactExports.useState(
    () => localStorage.getItem(LS_KEY_ALLOW_SERVICE_USAGE) !== "false"
  );
  const [showCommissionDialog] = reactExports.useState(
    () => localStorage.getItem(LS_KEY_COMMISSION_DIALOG) !== "false"
  );
  const [completedSaleData, setCompletedSaleData] = reactExports.useState(null);
  const receiptRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!completedSaleData || !window.isElectron) return;
    const stored = localStorage.getItem(PRINTER_SETTINGS_KEY);
    const settings = stored ? JSON.parse(stored) : {};
    if (settings.autoOpenDrawer && settings.printerName) {
      window.electron.openCashDrawer(settings.printerName).catch((err) => console.error("[POS] Failed to open cash drawer:", err));
    }
    if (settings.autoPrintReceipt) {
      const timer = setTimeout(() => {
        handleSilentPrint(receiptRef);
        setCompletedSaleData(null);
      }, 500);
      return () => clearTimeout(timer);
    }
    return void 0;
  }, [completedSaleData]);
  const handleOpenDrawer = () => {
    if (!window.isElectron) return;
    const stored = localStorage.getItem(PRINTER_SETTINGS_KEY);
    const settings = stored ? JSON.parse(stored) : {};
    if (!settings.printerName) {
      __vitePreload(async () => {
        const { toast: toast2 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
        return { toast: toast2 };
      }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url).then(
        ({ toast: toast2 }) => toast2.error("No printer configured. Go to Settings → Printer Configuration.")
      );
      return;
    }
    window.electron.openCashDrawer(settings.printerName).then((result) => {
      if (!result?.success) {
        __vitePreload(async () => {
          const { toast: toast2 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
          return { toast: toast2 };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url).then(
          ({ toast: toast2 }) => toast2.error(`Could not open drawer: ${result?.error || "Unknown error"}`)
        );
      }
    }).catch((err) => console.error("[POS] Failed to open cash drawer:", err));
  };
  const [addonsPrefetchBranchId, setAddonsPrefetchBranchId] = reactExports.useState(null);
  const cachedServiceCount = useGetBranchServiceCount(selectedBranch?.id);
  const cachedAddonCount = useGetBranchAddonCount(addonsPrefetchBranchId);
  const {
    clients: clientOptions,
    clientsLoading,
    mutateClients
  } = useClientAutocomplete(clientSearch, 30, selectedBranch?.id ?? null);
  const { templates: packageTemplates, templatesLoading: packagesLoading } = useGetPackageTemplates(
    organizationId ?? null
  );
  const { templates: discountPlanTemplates, templatesLoading: discountPlansLoading } = useGetDiscountPlanTemplates(organizationId ?? null);
  const { balance: loyaltyBalance } = useGetClientLoyaltyBalance(selectedClient?.id ?? null);
  const {
    deliveryEnabled,
    deliveryCharge,
    deliveryChargeInput,
    deliveryMethod,
    setDeliveryEnabled,
    setDeliveryAmount,
    resetDelivery
  } = useDeliveryCharge();
  const [productsPrefetchBranchId, setProductsPrefetchBranchId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const branchId = selectedBranch?.id;
    setProductsPrefetchBranchId(null);
    setAddonsPrefetchBranchId(null);
    if (!branchId) return void 0;
    const idleCallback = typeof window !== "undefined" && window.requestIdleCallback ? window.requestIdleCallback : (cb) => setTimeout(cb, 200);
    const cancelIdleCallback = typeof window !== "undefined" && window.cancelIdleCallback ? window.cancelIdleCallback : clearTimeout;
    const idleId = idleCallback(() => {
      setAddonsPrefetchBranchId(branchId);
      setProductsPrefetchBranchId(branchId);
    });
    return () => cancelIdleCallback(idleId);
  }, [selectedBranch?.id]);
  usePosBranchProducts(productsPrefetchBranchId, { search: "", category: "all" });
  const {
    items: cartItems,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    updatePrice,
    updateMeasure,
    zeroPrice,
    restorePrice,
    setHairRecord,
    resetCart,
    setItems
  } = useCart(TAX_RATE, cartStorageKey);
  const { packageCoverage, isChecking: isPackageCheckPending } = usePackageCoverage({
    clientId: selectedClient?.id,
    cartItems
  });
  const { planCoverage, isChecking: isPlanCheckPending } = useDiscountPlanCoverage({
    clientId: selectedClient?.id,
    cartItems
  });
  const discounts = useDiscounts({
    subtotal,
    organizationId,
    branchId: currentBranch?.id,
    clientId: selectedClient?.id,
    cartItems
  });
  const { discountAmount, manualDiscountAmount, voucherAmount, appliedCashback } = discounts;
  const { resetDiscounts, setAppliedCashback, setCashbackInput } = discounts;
  const packageCoveredAmount = reactExports.useMemo(
    () => cartItems.reduce((sum, item, idx) => {
      const cov = packageCoverage[idx];
      if (cov) {
        const covQty = cov.covered_quantity ?? item.quantity ?? 1;
        return sum + covQty * (item.unit_price ?? 0);
      }
      return sum;
    }, 0),
    [cartItems, packageCoverage]
  );
  const planDiscountAmount = reactExports.useMemo(
    () => cartItems.reduce((sum, item, idx) => {
      if (!packageCoverage[idx] && planCoverage[idx]) {
        const pct = planCoverage[idx].discount_percent ?? 0;
        return sum + (item.line_total ?? item.unit_price * (item.quantity ?? 1)) * pct / 100;
      }
      return sum;
    }, 0),
    [cartItems, packageCoverage, planCoverage]
  );
  const taxableAmount = subtotal - discountAmount - manualDiscountAmount - voucherAmount - appliedCashback - packageCoveredAmount - planDiscountAmount;
  const { taxAmount, total } = reactExports.useMemo(() => {
    const tax = Math.max(0, taxableAmount) * TAX_RATE / 100;
    const finalDeliveryCharge = deliveryEnabled ? deliveryCharge : 0;
    return { taxAmount: tax, total: Math.max(0, taxableAmount) + tax + finalDeliveryCharge };
  }, [taxableAmount, deliveryEnabled, deliveryCharge]);
  const amountDue = Math.max(0, total - linkedDepositAmount);
  const { handleProcessPayment } = usePosCheckout({
    cartItems,
    packageCoverage,
    planCoverage,
    selectedClient,
    organizationId,
    branchId: selectedBranch?.id,
    discountCode: discounts.discountCode,
    rewardDiscountAmount: discounts.discountCode?.startsWith("RW-") ? discounts.discountAmount : 0,
    voucherCode: discounts.voucherCode,
    manualDiscount: discounts.manualDiscount,
    discountType: discounts.discountType,
    appliedCashback,
    deliveryCharge: deliveryEnabled ? deliveryCharge : 0,
    deliveryMethod,
    notes,
    saleDate,
    appointmentId: linkedAppointmentId,
    taxRate: TAX_RATE,
    cashierId: user?.id,
    postSaleDiscountActions: discounts.postSaleDiscountActions,
    onSuccess: reactExports.useCallback(
      (saleData) => {
        if (window.isElectron && saleData) {
          setCompletedSaleData({
            ...saleData,
            client: selectedClient,
            cashier: user,
            branch: selectedBranch
          });
        }
        resetCart();
        setSelectedClient(null);
        setClientSearch("");
        setNotes("");
        setLinkedAppointmentId(null);
        setLinkedDepositAmount(0);
        resetDiscounts();
        resetDelivery();
        paymentDialog.onFalse();
      },
      [
        resetCart,
        resetDiscounts,
        resetDelivery,
        paymentDialog.onFalse,
        selectedClient,
        user,
        selectedBranch
      ]
    )
  });
  const handleLoadAppointment = reactExports.useCallback(
    async (appointmentId) => {
      const { loadAppointmentForPOS } = await __vitePreload(async () => {
        const { loadAppointmentForPOS: loadAppointmentForPOS2 } = await import("./sale-service-CWyXC78v.js").then((n) => n.o);
        return { loadAppointmentForPOS: loadAppointmentForPOS2 };
      }, true ? __vite__mapDeps([3,1,2]) : void 0, import.meta.url);
      const { toast: toast2 } = await __vitePreload(async () => {
        const { toast: toast3 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
        return { toast: toast3 };
      }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
      const { data, error } = await loadAppointmentForPOS(appointmentId);
      if (error || !data) {
        toast2.error("Failed to load appointment");
        return;
      }
      setSelectedClient(data.client);
      setClientSearch(`${data.client.first_name} ${data.client.last_name}`);
      setItems(data.items);
      setNotes(data.notes || "");
      setLinkedAppointmentId(appointmentId);
      appointmentDialog.onFalse();
      try {
        const { getHeldDepositTotal } = await __vitePreload(async () => {
          const { getHeldDepositTotal: getHeldDepositTotal2 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.d);
          return { getHeldDepositTotal: getHeldDepositTotal2 };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
        const heldTotal = await getHeldDepositTotal(appointmentId);
        setLinkedDepositAmount(heldTotal);
      } catch (_) {
        setLinkedDepositAmount(0);
      }
      toast2.success("Appointment loaded");
    },
    [setItems, appointmentDialog]
  );
  const handleClientCreated = reactExports.useCallback(
    async (client) => {
      setSelectedClient(client);
      setClientSearch(`${client.first_name} ${client.last_name}`);
      quickAddClientDialog.onFalse();
      mutateClients();
      const { toast: toast2 } = await __vitePreload(async () => {
        const { toast: toast3 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
        return { toast: toast3 };
      }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
      toast2.success("Client added");
    },
    [quickAddClientDialog, mutateClients]
  );
  const handleBranchChange = reactExports.useCallback(
    (newBranch) => {
      setSelectedBranch(newBranch);
      resetCart();
      setLinkedAppointmentId(null);
      setLinkedDepositAmount(0);
      resetDiscounts();
    },
    [resetCart, resetDiscounts]
  );
  const handleAddProduct = reactExports.useCallback(
    async (product, staffMember) => {
      if ((product.totalAvailable ?? 0) <= 0) {
        const { toast: toast2 } = await __vitePreload(async () => {
          const { toast: toast3 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
          return { toast: toast3 };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
        toast2.warning(
          `${product.name} is out of stock. Please check inventory levels before completing the sale.`
        );
      }
      addItem({
        item_type: "product",
        product_id: product.id,
        product_name: product.name,
        product_sku: product.sku,
        product_category: product.category,
        unit_price: parseFloat(product.retail_price),
        discount_amount: 0,
        stylist_id: staffMember?.id || null,
        stylist_name: staffMember?.display_name || null
      });
    },
    [addItem]
  );
  const handleAddProductUsage = reactExports.useCallback(
    async (product) => {
      if ((product.totalAvailable ?? 0) <= 0) {
        const { toast: toast2 } = await __vitePreload(async () => {
          const { toast: toast3 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
          return { toast: toast3 };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
        toast2.warning(`${product.name} is out of stock.`);
        return;
      }
      addItem({
        item_type: "product",
        is_service_usage: true,
        product_id: product.id,
        product_name: product.name,
        product_sku: product.sku,
        product_category: product.category,
        unit_price: 0,
        discount_amount: 0
      });
    },
    [addItem]
  );
  const handleAddService = reactExports.useCallback(
    (service, stylistLevel, price, staffMember, measure = null) => addItem({
      item_type: "service",
      service_id: service.id,
      service_name: service.service_name,
      service_category: service.category,
      stylist_level: stylistLevel,
      unit_price: measure ? measuredUnitPrice(measure.quantity, measure.unitPrice) : price,
      measure_quantity: measure?.quantity ?? null,
      measure_unit_label: measure?.unitLabel ?? null,
      measure_unit_price: measure?.unitPrice ?? null,
      // Cart-only: keeps the stepper in the cart's amount dialog on the same
      // increment the service is configured with. Not persisted to the sale.
      measure_step: measure ? service.measure_step ?? null : null,
      junior_price: service.junior_price ?? 0,
      senior_price: service.senior_price ?? 0,
      prive_price: service.prive_price ?? 0,
      discount_amount: 0,
      stylist_id: staffMember?.id || null,
      stylist_name: staffMember?.display_name || null
    }),
    [addItem]
  );
  const handleAddAddon = reactExports.useCallback(
    (addon, customPrice, staffMember) => addItem({
      item_type: "addon",
      addon_id: addon.id,
      addon_name: addon.name,
      addon_category: addon.category,
      is_custom_price: addon.is_custom_price,
      unit_price: customPrice ?? parseFloat(addon.price),
      discount_amount: 0,
      stylist_id: staffMember?.id || null,
      stylist_name: staffMember?.display_name || null
    }),
    [addItem]
  );
  const handleAssignProductStaff = reactExports.useCallback(
    (index, staffMember) => {
      setItems(
        cartItems.map(
          (item, i) => i === index ? {
            ...item,
            stylist_id: staffMember?.id || null,
            stylist_name: staffMember?.display_name || null
          } : item
        )
      );
    },
    [cartItems, setItems]
  );
  const handleReassignService = reactExports.useCallback(
    (index, { staffMember, stylistLevel, price }) => {
      setItems(
        cartItems.map((item, i) => {
          if (i !== index) return item;
          const isMeasured = item.measure_quantity != null;
          const unitPrice = isMeasured ? measuredUnitPrice(item.measure_quantity, price) : price;
          return {
            ...item,
            stylist_id: staffMember?.id || null,
            stylist_name: staffMember?.display_name || null,
            stylist_level: stylistLevel,
            unit_price: unitPrice,
            line_total: item.quantity * unitPrice,
            ...isMeasured && { measure_unit_price: price }
          };
        })
      );
    },
    [cartItems, setItems]
  );
  const handleAddPackage = reactExports.useCallback(
    (template) => {
      setPendingPackageTemplate(template);
      packageDialog.onTrue();
    },
    [packageDialog]
  );
  const handleAddDiscountPlan = reactExports.useCallback(
    (template) => {
      setPendingDiscountPlanTemplate(template);
      discountPlanDialog.onTrue();
    },
    [discountPlanDialog]
  );
  const handleConfirmDiscountPlanAdd = reactExports.useCallback(
    async ({ month }) => {
      const alreadyInCart = cartItems.some(
        (item) => item.item_type === "discount_plan" && item.template_id === pendingDiscountPlanTemplate.id && item.valid_month === month
      );
      if (alreadyInCart) {
        const { toast: toast2 } = await __vitePreload(async () => {
          const { toast: toast3 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
          return { toast: toast3 };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
        toast2.error(`${pendingDiscountPlanTemplate.name} is already in the cart for this month.`);
        return;
      }
      if (selectedClient) {
        try {
          const alreadyOwned = await checkClientHasDiscountPlan(
            selectedClient.id,
            pendingDiscountPlanTemplate.id,
            month
          );
          if (alreadyOwned) {
            const { toast: toast2 } = await __vitePreload(async () => {
              const { toast: toast3 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
              return { toast: toast3 };
            }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
            const monthLabel = new Date(month).toLocaleString("en-US", {
              month: "long",
              year: "numeric"
            });
            toast2.error(
              `${selectedClient.first_name} already has ${pendingDiscountPlanTemplate.name} for ${monthLabel}.`
            );
            return;
          }
        } catch (err) {
          console.error("[POS] checkClientHasDiscountPlan error:", err);
        }
      }
      addItem({
        item_type: "discount_plan",
        template_id: pendingDiscountPlanTemplate.id,
        plan_name: pendingDiscountPlanTemplate.name,
        unit_price: parseFloat(pendingDiscountPlanTemplate.price || 0),
        discount_amount: 0,
        valid_month: month,
        service_ids: pendingDiscountPlanTemplate.service_ids ?? null,
        service_discounts: pendingDiscountPlanTemplate.service_discounts ?? null,
        color: pendingDiscountPlanTemplate.color ?? null
      });
      discountPlanDialog.onFalse();
      setPendingDiscountPlanTemplate(null);
    },
    [addItem, cartItems, pendingDiscountPlanTemplate, selectedClient, discountPlanDialog]
  );
  const handleConfirmPackageAdd = reactExports.useCallback(
    async ({ client, month }) => {
      const resolvedClient = client || selectedClient;
      const alreadyInCart = cartItems.some(
        (item) => item.item_type === "package" && item.template_id === pendingPackageTemplate.id && item.valid_month === month
      );
      if (alreadyInCart) {
        const { toast: toast2 } = await __vitePreload(async () => {
          const { toast: toast3 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
          return { toast: toast3 };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
        toast2.error(`${pendingPackageTemplate.name} is already in the cart for this month.`);
        return;
      }
      if (resolvedClient) {
        try {
          const { checkClientHasPackage } = await __vitePreload(async () => {
            const { checkClientHasPackage: checkClientHasPackage2 } = await import("./package-service-U57UHzc2.js");
            return { checkClientHasPackage: checkClientHasPackage2 };
          }, true ? __vite__mapDeps([4,1,2]) : void 0, import.meta.url);
          const alreadyOwned = await checkClientHasPackage(
            resolvedClient.id,
            pendingPackageTemplate.id,
            month
          );
          if (alreadyOwned) {
            const { toast: toast2 } = await __vitePreload(async () => {
              const { toast: toast3 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
              return { toast: toast3 };
            }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
            const monthLabel = new Date(month).toLocaleString("en-US", {
              month: "long",
              year: "numeric"
            });
            toast2.error(
              `${resolvedClient.first_name} already has ${pendingPackageTemplate.name} for ${monthLabel}.`
            );
            return;
          }
        } catch (err) {
          console.error("[POS] checkClientHasPackage error:", err);
        }
      }
      if (client && client.id !== selectedClient?.id) {
        setSelectedClient(client);
        setClientSearch(`${client.first_name} ${client.last_name}`);
        resetDiscounts();
      }
      addItem({
        item_type: "package",
        template_id: pendingPackageTemplate.id,
        package_name: pendingPackageTemplate.name,
        unit_price: parseFloat(pendingPackageTemplate.price || 0),
        discount_amount: 0,
        valid_month: month,
        service_ids: pendingPackageTemplate.service_ids ?? null,
        max_uses_per_month: pendingPackageTemplate.max_uses_per_month ?? null,
        service_max_uses: pendingPackageTemplate.service_max_uses ?? null,
        color: pendingPackageTemplate.color ?? null
      });
      packageDialog.onFalse();
      setPendingPackageTemplate(null);
    },
    [addItem, cartItems, pendingPackageTemplate, selectedClient, packageDialog, resetDiscounts]
  );
  const tabCounts = reactExports.useMemo(
    () => ({
      products: productTotalCount,
      services: serviceTotalCount || cachedServiceCount,
      plans: (packageTemplates?.length || 0) + (discountPlanTemplates?.length || 0),
      addons: addonTotalCount || cachedAddonCount
    }),
    [
      productTotalCount,
      serviceTotalCount,
      cachedServiceCount,
      packageTemplates?.length,
      discountPlanTemplates?.length,
      addonTotalCount,
      cachedAddonCount
    ]
  );
  const handleClearCashback = reactExports.useCallback(() => {
    setAppliedCashback(0);
    setCashbackInput("");
  }, [setAppliedCashback, setCashbackInput]);
  const canPay = cartItems.length > 0 && !!selectedClient && total >= 0 && !isPackageCheckPending && !isPlanCheckPending;
  const barcodeCacheRef = reactExports.useRef({});
  const handleBarcodeScanned = reactExports.useCallback(
    async (barcode) => {
      const { toast: toast2 } = await __vitePreload(async () => {
        const { toast: toast3 } = await import("./deposit-service-DjFWmn8Y.js").then((n) => n.i);
        return { toast: toast3 };
      }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
      const cached = barcodeCacheRef.current[barcode];
      if (cached) {
        console.log(`[POS] barcode "${barcode}" — served from cache:`, cached.name);
        if ((cached.totalAvailable ?? 0) <= 0) {
          toast2.warning(
            `${cached.name} is out of stock. Adding to cart anyway — please check inventory.`
          );
        } else {
          toast2.success(`Added to cart: ${cached.name}`);
        }
        addItem({
          item_type: "product",
          product_id: cached.id,
          product_name: cached.name,
          product_sku: cached.sku,
          product_category: cached.category,
          unit_price: parseFloat(cached.retail_price),
          discount_amount: 0
        });
        return;
      }
      console.log(`[POS] barcode scanned: "${barcode}" — looking up product…`);
      const fetchingToastId = toast2.loading(`Fetching product for barcode: ${barcode}…`);
      try {
        const { getProductByBarcode } = await __vitePreload(async () => {
          const { getProductByBarcode: getProductByBarcode2 } = await import("./index-B08HRm4A.js").then((n) => n.ek);
          return { getProductByBarcode: getProductByBarcode2 };
        }, true ? __vite__mapDeps([1,2]) : void 0, import.meta.url);
        const product = await getProductByBarcode(barcode, selectedBranch?.id);
        toast2.dismiss(fetchingToastId);
        if (!product) {
          console.warn(`[POS] no product found for barcode: "${barcode}"`);
          toast2.error(`No product found for barcode: ${barcode}`);
          return;
        }
        console.log(
          `[POS] product found:`,
          product.name,
          `(id: ${product.id}, sku: ${product.sku}, stock: ${product.totalAvailable})`
        );
        barcodeCacheRef.current[barcode] = product;
        if ((product.totalAvailable ?? 0) <= 0) {
          toast2.warning(
            `${product.name} is out of stock. Adding to cart anyway — please check inventory.`
          );
        } else {
          toast2.success(`Added to cart: ${product.name}`);
        }
        addItem({
          item_type: "product",
          product_id: product.id,
          product_name: product.name,
          product_sku: product.sku,
          product_category: product.category,
          unit_price: parseFloat(product.retail_price),
          discount_amount: 0
        });
      } catch (err) {
        toast2.dismiss(fetchingToastId);
        toast2.error("Failed to look up barcode");
        console.error("[POS] barcode lookup error:", err);
      }
    },
    [addItem, selectedBranch?.id]
  );
  const barcodeScanner = useBarcodeScanner({ onBarcode: handleBarcodeScanned });
  const catalogRowRef = reactExports.useRef(null);
  const [catalogHeight, setCatalogHeight] = reactExports.useState(CATALOG_MIN_HEIGHT);
  reactExports.useLayoutEffect(() => {
    const el = catalogRowRef.current;
    if (!el) return void 0;
    const updateHeight = () => {
      const top = el.getBoundingClientRect().top;
      setCatalogHeight(Math.max(CATALOG_MIN_HEIGHT, window.innerHeight - top - CATALOG_BOTTOM_GAP));
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(document.body);
    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { maxWidth: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        sx: {
          mb: 1,
          px: 2.5,
          py: 1.5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            spacing: 1,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { flexDirection: "row", alignItems: "center" }, spacing: 2, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Autocomplete,
                  {
                    open: clientPickerOpen,
                    onOpen: () => {
                      setClientPickerOpen(true);
                      mutateClients();
                    },
                    onClose: () => setClientPickerOpen(false),
                    options: clientOptions,
                    loading: clientsLoading,
                    value: selectedClient,
                    inputValue: clientSearch,
                    size: "small",
                    onChange: (_, v) => {
                      setSelectedClient(v);
                      setClientSearch(v ? `${v.first_name} ${v.last_name}` : "");
                      discounts.resetDiscounts();
                      setClientPickerOpen(false);
                    },
                    onInputChange: (_, v, reason) => {
                      if (reason !== "reset") setClientSearch(v);
                    },
                    isOptionEqualToValue: (o2, v) => o2.id === v.id,
                    filterOptions: (x) => x,
                    getOptionLabel: (o2) => `${o2.first_name} ${o2.last_name}`,
                    renderOption: (props, o2) => /* @__PURE__ */ reactExports.createElement(Box, { component: "li", ...props, key: o2.id, sx: { py: "6px !important" } }, /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.25, alignItems: "center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Avatar,
                        {
                          sx: {
                            width: 25,
                            height: 25,
                            fontSize: 12,
                            fontWeight: 700,
                            flexShrink: 0
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:user-bold", width: 15 })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, textTransform: "capitalize", children: [
                            o2.first_name,
                            " ",
                            o2.last_name
                          ] }),
                          o2.client_importance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ClientImportanceLabel,
                            {
                              clientImportance: o2.client_importance,
                              sx: { ml: 0.5 }
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: [formatPhoneNumberIntl(o2.phone_primary), o2.email].filter(Boolean).join(" · ") || "No contact info" })
                      ] })
                    ] })),
                    noOptionsText: clientSearch ? "No clients found" : "No clients yet",
                    sx: { width: { xs: 200, md: 350 } },
                    renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TextField,
                      {
                        ...params,
                        placeholder: "Select client",
                        size: "small",
                        InputProps: {
                          // make the text bold
                          style: { fontWeight: 600 },
                          ...params.InputProps,
                          startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", sx: { pl: 1 }, children: selectedClient?.client_importance > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ClientImportanceLabel,
                            {
                              clientImportance: selectedClient?.client_importance
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:user-bold-duotone", width: 18 }) })
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outlined",
                    onClick: quickAddClientDialog.onTrue,
                    sx: { whiteSpace: "nowrap", fontWeight: 600 },
                    children: "+ New Client"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
                hasMultipleBranches ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  BranchSelect,
                  {
                    showAllOption: false,
                    branches,
                    value: selectedBranch?.id || "",
                    onChange: (id) => {
                      const branch = branches.find((b) => b.id === id);
                      handleBranchChange(branch);
                    },
                    size: "small",
                    minWidth: 180
                  }
                ) : currentBranch?.name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    alignItems: "center",
                    spacing: 0.75,
                    sx: {
                      px: 1.5,
                      py: 0.75,
                      borderRadius: 1.5,
                      border: "1px solid",
                      borderColor: "divider",
                      bgcolor: "background.paper"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Iconify,
                        {
                          icon: "solar:buildings-2-bold",
                          width: 15,
                          sx: { color: "text.secondary" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Box,
                        {
                          sx: {
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            bgcolor: "success.main",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: currentBranch.name })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:calendar-bold-duotone" }),
                    onClick: appointmentDialog.onTrue,
                    children: "Select Appointment"
                  }
                ),
                barcodeScanner.isElectron && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PosBarcodeSetupButton,
                  {
                    isConnected: barcodeScanner.isConnected,
                    isConnecting: barcodeScanner.isConnecting,
                    selectedPort: barcodeScanner.selectedPort,
                    ports: barcodeScanner.ports,
                    portsLoading: barcodeScanner.portsLoading,
                    error: barcodeScanner.error,
                    onOpen: barcodeScanner.loadPorts,
                    onConnect: barcodeScanner.connect,
                    onDisconnect: barcodeScanner.disconnect,
                    onForget: barcodeScanner.forgetPort
                  }
                ),
                window.isElectron && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outlined",
                    size: "small",
                    startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:safe-2-bold-duotone" }),
                    onClick: handleOpenDrawer,
                    children: "Open Drawer"
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosClientBenefitsStrip,
      {
        selectedClient,
        loyaltyBalance,
        cashbackWallet: discounts.cashbackWallet,
        organizationId,
        saleDate
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 1, ref: catalogRowRef, sx: { height: catalogHeight }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, lg: 8 }, sx: { height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                sx: {
                  px: 2.5,
                  py: 1.75,
                  flexShrink: 0,
                  borderBottom: "1px solid",
                  borderColor: "divider"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Stack,
                    {
                      direction: "row",
                      spacing: 0.5,
                      alignItems: "center",
                      sx: { flex: 1, flexWrap: "wrap", gap: 0.5 },
                      children: TABS.map(({ key, label, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Box,
                        {
                          onClick: () => {
                            setActiveTab(key);
                            setCatalogSearch("");
                          },
                          sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            px: 1.5,
                            py: 0.625,
                            borderRadius: 1,
                            cursor: "pointer",
                            userSelect: "none",
                            transition: "all 0.15s ease",
                            ...activeTab === key ? {
                              bgcolor: "primary.main",
                              color: "white",
                              boxShadow: (t) => `0 2px 8px ${alpha(t.palette.primary.main, 0.4)}`
                            } : {
                              color: "text.secondary",
                              border: "1px solid",
                              borderColor: "divider",
                              "&:hover": { bgcolor: "action.hover", color: "text.primary" }
                            }
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 15 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: activeTab === key ? 700 : 500, children: label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Box,
                              {
                                sx: {
                                  minWidth: 18,
                                  height: 17,
                                  borderRadius: "8px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  px: 0.5,
                                  bgcolor: activeTab === key ? "rgba(255,255,255,0.22)" : "action.selected"
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Typography,
                                  {
                                    variant: "caption",
                                    fontWeight: 700,
                                    lineHeight: 1,
                                    sx: { fontSize: 10 },
                                    children: tabCounts[key]
                                  }
                                )
                              }
                            )
                          ]
                        },
                        key
                      ))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TextField,
                    {
                      size: "small",
                      placeholder: `Search ${activeTab}...`,
                      value: catalogSearch,
                      onChange: (e) => setCatalogSearch(e.target.value),
                      InputProps: {
                        startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill", sx: { color: "text.disabled" }, width: 16 }) }),
                        endAdornment: catalogSearch ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => setCatalogSearch(""), edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line", width: 14 }) }) }) : null
                      },
                      sx: { width: 240, "& .MuiOutlinedInput-root": { borderRadius: 1.5 } }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 2, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }, children: [
              activeTab === "products" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                PosProductList,
                {
                  branchId: selectedBranch?.id,
                  searchQuery: catalogSearch.trim(),
                  onAddToCart: handleAddProduct,
                  onAddUsage: allowServiceUsage ? handleAddProductUsage : void 0,
                  onTotalCountChange: setProductTotalCount,
                  showCommissionDialog
                }
              ),
              activeTab === "services" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                PosServiceList,
                {
                  branchId: selectedBranch?.id,
                  searchQuery: catalogSearch.trim(),
                  onAddToCart: handleAddService,
                  onTotalCountChange: setServiceTotalCount
                }
              ),
              activeTab === "plans" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                PosPlansList,
                {
                  packageTemplates,
                  discountPlanTemplates,
                  packagesLoading,
                  discountPlansLoading,
                  searchQuery: catalogSearch.trim(),
                  onAddPackage: handleAddPackage,
                  onAddDiscountPlan: handleAddDiscountPlan
                }
              ),
              activeTab === "addons" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                PosAddonList,
                {
                  branchId: selectedBranch?.id,
                  searchQuery: catalogSearch.trim(),
                  onAddToCart: handleAddAddon,
                  onTotalCountChange: setAddonTotalCount
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, lg: 4 }, sx: { height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          elevation: 0,
          sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                sx: {
                  px: 2.5,
                  py: 2,
                  flexShrink: 0,
                  borderBottom: "1px solid",
                  borderColor: "divider"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.25, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Iconify,
                      {
                        icon: "solar:cart-large-minimalistic-bold-duotone",
                        width: 20,
                        sx: { color: "text.primary" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: "Order Summary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: cartItems.length === 0 ? "No items yet" : `${cartItems.length} item${cartItems.length > 1 ? "s" : ""} in cart` })
                    ] })
                  ] }),
                  cartItems.length > 0 && !isReceptionist && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: () => {
                        resetCart();
                        setSelectedClient(null);
                        setClientSearch("");
                        setSaleDate(dayjs());
                        resetDiscounts();
                        resetDelivery();
                      },
                      sx: {
                        color: "error.main",
                        bgcolor: (t) => alpha(t.palette.error.main, 0.08),
                        borderRadius: 1.5,
                        "&:hover": { bgcolor: (t) => alpha(t.palette.error.main, 0.16) }
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 18 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              PosCart$1,
              {
                items: cartItems,
                packageCoverage,
                planCoverage,
                onUpdateQuantity: updateQuantity,
                onUpdatePrice: updatePrice,
                onRemoveItem: removeItem,
                onAssignStaff: handleAssignProductStaff,
                onReassignService: handleReassignService,
                onUpdateMeasure: updateMeasure,
                onSetHairRecord: selectedClient ? setHairRecord : void 0,
                clientId: selectedClient?.id,
                branchId: selectedBranch?.id,
                canRemoveItems: !isReceptionist,
                canZeroPrice: isReceptionist,
                onZeroPrice: zeroPrice,
                onRestorePrice: restorePrice
              }
            ),
            Object.keys(packageCoverage).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  mx: 2,
                  mb: 1,
                  p: 1.25,
                  borderRadius: 1.5,
                  border: "1px solid",
                  borderColor: "success.light",
                  bgcolor: (t) => alpha(t.palette.success.lighter, 0.7)
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "flex-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:gift-bold-duotone",
                      width: 18,
                      sx: { color: "success.dark", mt: 0.2, flexShrink: 0 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.4, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 700, color: "success.dark", children: "Package coverage detected" }),
                    Object.entries(packageCoverage).map(([idx, pkg]) => {
                      const item = cartItems[Number(idx)];
                      const covQty = pkg.covered_quantity ?? item?.quantity ?? 1;
                      const isPartial = covQty < (item?.quantity ?? 1);
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "success.dark", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item?.service_name }),
                        " ",
                        isPartial ? `(${covQty}/${item.quantity}) ` : "",
                        "covered by",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: pkg.package_templates?.name })
                      ] }, idx);
                    })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  borderTop: "1px solid",
                  borderColor: "divider",
                  p: 2,
                  bgcolor: deliveryEnabled ? (t) => alpha(t.palette.primary.main, 0.04) : "transparent",
                  transition: "all 0.3s ease"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Box,
                      {
                        sx: {
                          p: 0.75,
                          borderRadius: 1,
                          bgcolor: deliveryEnabled ? "primary.main" : "action.hover",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Iconify,
                          {
                            icon: "solar:delivery-bold-duotone",
                            width: 18,
                            sx: { color: deliveryEnabled ? "white" : "text.secondary" }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, sx: { flex: 1 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", fontWeight: 700, children: "Delivery" }),
                      deliveryEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        TextField,
                        {
                          type: "number",
                          size: "small",
                          placeholder: "0.00",
                          value: deliveryChargeInput,
                          onChange: (e) => setDeliveryAmount(e.target.value),
                          InputProps: {
                            startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" }),
                            sx: { fontWeight: 600, fontSize: "0.875rem" }
                          },
                          sx: { maxWidth: 100 },
                          inputProps: { step: "0.01" }
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "small",
                      variant: deliveryEnabled ? "contained" : "outlined",
                      onClick: () => setDeliveryEnabled(!deliveryEnabled),
                      sx: {
                        minWidth: 90,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: 0.5
                      },
                      children: deliveryEnabled ? "Remove" : "+ Add"
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { borderTop: "1px solid", borderColor: "divider" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              PosDiscounts$1,
              {
                manualDiscount: discounts.manualDiscount,
                onManualDiscountChange: discounts.setManualDiscount,
                discountType: discounts.discountType,
                onDiscountTypeChange: discounts.setDiscountType,
                discountCode: discounts.discountCode,
                onDiscountCodeChange: discounts.setDiscountCode,
                onApplyDiscount: discounts.handleApplyDiscount,
                discountData: discounts.discountData,
                discountAmount,
                voucherCode: discounts.voucherCode,
                onVoucherCodeChange: discounts.setVoucherCode,
                onApplyVoucher: discounts.handleApplyVoucher,
                voucherData: discounts.voucherData,
                cashbackWallet: discounts.cashbackWallet,
                cashbackInput: discounts.cashbackInput,
                onCashbackInputChange: discounts.setCashbackInput,
                onApplyCashback: discounts.handleApplyCashback,
                onApplyMaxCashback: discounts.handleApplyMaxCashback,
                appliedCashback,
                onClearCashback: handleClearCashback
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              PosTotals$1,
              {
                subtotal,
                discountAmount,
                discountLabel: discounts.discountCode?.startsWith("RW-") && discounts.discountData?.label ? discounts.discountData.label : void 0,
                manualDiscountAmount,
                voucherAmount,
                appliedCashback,
                packageCoveredAmount,
                planDiscountAmount,
                deliveryCharge: deliveryEnabled ? deliveryCharge : 0,
                depositAmount: linkedDepositAmount,
                taxRate: TAX_RATE,
                taxAmount,
                total: amountDue,
                canPay,
                onPay: paymentDialog.onTrue
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosPaymentDialog,
      {
        open: paymentDialog.value,
        onClose: paymentDialog.onFalse,
        totalAmount: amountDue,
        depositAmount: linkedDepositAmount,
        deliveryCharge: deliveryEnabled ? deliveryCharge : 0,
        cartItems,
        packageCoverage,
        planCoverage,
        onSubmit: (payments, paymentOverrideSupervisorId) => handleProcessPayment(
          payments,
          paymentOverrideSupervisorId ? { authorizedBy: paymentOverrideSupervisorId, type: "partial_payment" } : null
        ),
        isPrivilegedUser
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosAppointmentDialog,
      {
        open: appointmentDialog.value,
        onClose: appointmentDialog.onFalse,
        branchId: selectedBranch?.id,
        onSelect: handleLoadAppointment
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ClientQuickAddDialog,
      {
        openDialog: quickAddClientDialog.value,
        setOpenDialog: quickAddClientDialog.onFalse,
        onSuccess: handleClientCreated
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosPackageAddDialog,
      {
        open: packageDialog.value,
        onClose: () => {
          packageDialog.onFalse();
          setPendingPackageTemplate(null);
        },
        template: pendingPackageTemplate,
        posSelectedClient: selectedClient,
        onConfirm: handleConfirmPackageAdd
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosDiscountPlanAddDialog,
      {
        open: discountPlanDialog.value,
        onClose: () => {
          discountPlanDialog.onFalse();
          setPendingDiscountPlanTemplate(null);
        },
        template: pendingDiscountPlanTemplate,
        posSelectedClient: selectedClient,
        onConfirm: handleConfirmDiscountPlanAdd
      }
    ),
    completedSaleData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", left: "-9999px", top: "-9999px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceReceipt, { ref: receiptRef, invoice: completedSaleData }) })
  ] });
}
const metadata = { title: `Point of Sale | Dashboard - ${CONFIG.appName}` };
function PosPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PosView, {})
  ] });
}
export {
  PosPage as default
};
