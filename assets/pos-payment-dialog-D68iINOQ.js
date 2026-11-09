import { r as reactExports, j as jsxRuntimeExports, an as fDate, aw as fTime, a0 as fCurrency, t as toast, B as Box, c as Typography, b as CircularProgress, M as MenuItem, al as Avatar, d as Button, a as Iconify, av as useAuthContext, c3 as Drawer, S as Stack, I as IconButton, K as Divider, cg as List, ch as ListItemButton, ci as ListItemAvatar, bm as ListItemText, L as Label, cJ as useHideSeniorPrice, a2 as Chip, ax as Alert, s as supabase } from "./index-B08HRm4A.js";
import { o } from "./index-Di_Bgabu.js";
import { a as formatPhoneNumber } from "./index-C4JOln-R.js";
import { g as getBranchEmployees, G as useStylistAutocomplete } from "./staff-service-CYDKVOm2.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { u as useStaffData } from "./useStaffData-BIkbeKJv.js";
import { m as useGetServiceStylistIds, n as updateServiceStylists } from "./services-UhlA7T7c.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
const imageToBase64 = (imagePath) => new Promise((resolve, reject) => {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    try {
      const dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    } catch (error) {
      reject(error);
    }
  };
  img.onerror = () => {
    reject(new Error(`Failed to load image: ${imagePath}`));
  };
  img.src = imagePath;
});
const imagesToBase64 = async (imageMap) => {
  const base64Images = {};
  for (const [name, path] of Object.entries(imageMap)) {
    try {
      base64Images[name] = await imageToBase64(path);
    } catch (error) {
      console.warn(`Failed to convert ${name} to base64:`, error);
      base64Images[name] = path;
    }
  }
  return base64Images;
};
const logoWordmark = "" + new URL("../logo/logo-receipt.png", import.meta.url).href;
const SERIF = "'EB Garamond', Georgia, 'Times New Roman', Times, serif";
const S = {
  container: {
    width: "72mm",
    fontSize: "11px",
    lineHeight: "1.5",
    color: "#000",
    fontWeight: 400,
    padding: "16px 12px",
    margin: "0",
    backgroundColor: "#fff",
    fontFamily: SERIF
  },
  center: {
    textAlign: "center"
  },
  addressBlock: {
    textAlign: "center",
    fontSize: "10px",
    lineHeight: "1",
    marginBottom: "16px"
  },
  dividerDash: {
    border: "none",
    borderTop: "1px dashed #000",
    margin: "10px 0"
  },
  dividerSolid: {
    border: "none",
    borderTop: "1px solid #000",
    margin: "8px 0"
  },
  invoiceMetaRow: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "9px",
    marginBottom: "6px"
  },
  clientName: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.5px",
    marginBottom: "10px",
    textTransform: "uppercase"
  },
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 28px 52px 52px",
    gap: "0 2px",
    fontSize: "10px",
    fontWeight: 700,
    borderTop: "1px solid #000",
    borderBottom: "1px solid #000",
    padding: "5px 0",
    marginBottom: "8px"
  },
  itemRow: {
    display: "grid",
    gridTemplateColumns: "1fr 28px 52px 52px",
    gap: "0 2px",
    fontSize: "10px",
    marginBottom: "10px",
    alignItems: "start"
  },
  numRight: {
    textAlign: "right"
  },
  totalsRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "10px",
    marginBottom: "6px"
  },
  totalFinal: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.5px",
    paddingTop: "6px"
  },
  footer: {
    textAlign: "right",
    fontSize: "10px",
    marginTop: "16px",
    lineHeight: "2"
  },
  bottomFooter: {
    textAlign: "center",
    fontSize: "10px",
    fontStyle: "italic",
    marginTop: "12px",
    paddingTop: "10px",
    borderTop: "1px dashed #000"
  },
  website: {
    marginTop: "12px",
    marginBottom: "32px",
    fontSize: "9px",
    fontWeight: 700
    // letterSpacing: '1px',
  }
};
const InvoiceReceipt = reactExports.forwardRef(({ invoice }, ref) => {
  const [base64Images, setBase64Images] = reactExports.useState({ logoWordmark });
  reactExports.useEffect(() => {
    const convertImages = async () => {
      try {
        const images = await imagesToBase64({ logoWordmark });
        setBase64Images(images);
      } catch (error) {
        console.warn("Failed to convert images to base64:", error);
      }
    };
    convertImages();
  }, []);
  const website = invoice?.branch?.website || "www.amadeus-sabra.com";
  if (!invoice) return null;
  const clientName = [invoice?.client?.first_name, invoice?.client?.last_name].filter(Boolean).join(" ");
  const cashierName = [invoice?.cashier?.first_name, invoice?.cashier?.last_name].filter(Boolean).join(" ") || "—";
  const saleDate = invoice?.sale_date || invoice?.created_at;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, style: S.container, className: "invoice-receipt", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: S.center, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: base64Images.logoWordmark || logoWordmark,
        alt: "Amadeus Sabra — The Beauty Factory",
        style: {
          width: "100%",
          maxWidth: "200px",
          height: "auto",
          display: "block",
          margin: "0 auto 8px",
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.addressBlock, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: invoice?.branch?.country?.name?.toUpperCase() }),
      invoice?.branch?.address && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700 }, children: invoice.branch.address }),
      invoice?.branch?.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700 }, children: formatPhoneNumber(invoice?.branch?.phone) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: S.website, children: website.replace(/^https?:\/\//, "").toUpperCase() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: S.dividerDash }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.invoiceMetaRow, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Invoice  ",
        invoice?.sale_number || "—"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        " ",
        fDate(saleDate, "DD/MM/YYYY")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        " ",
        fTime(saleDate).toUpperCase()
      ] })
    ] }),
    clientName && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: S.clientName, children: clientName }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.tableHeader, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Item" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: S.numRight, children: "Qty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: S.numRight, children: "Price" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: S.numRight, children: "Total" })
    ] }),
    invoice?.items?.map((item, index) => {
      const resolveName = (val) => val && typeof val === "object" ? val.name : val;
      const itemName = resolveName(item.addon_name) || resolveName(item.service_name) || resolveName(item.product_name) || resolveName(item.package_name) || "—";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.itemRow, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          itemName,
          item.item_type === "addon" && item.addon_category && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#666", fontSize: "9px" }, children: item.addon_category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: S.numRight, children: item.quantity }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: S.numRight, children: fCurrency(item.unit_price) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: S.numRight, children: fCurrency(item.line_total) })
      ] }, item.id || index);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: S.dividerSolid }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.totalsRow, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sub Total" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fCurrency(invoice?.subtotal) })
    ] }),
    invoice?.discount_amount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.totalsRow, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Discount",
        invoice?.discount_code?.code ? ` (${invoice.discount_code.code})` : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "- ",
        fCurrency(invoice.discount_amount)
      ] })
    ] }),
    invoice?.manual_discount_amount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.totalsRow, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Manual Discount",
        invoice?.manual_discount_type === "percentage" ? ` (${invoice.manual_discount_value}%)` : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "- ",
        fCurrency(invoice.manual_discount_amount)
      ] })
    ] }),
    invoice?.voucher_amount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.totalsRow, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Voucher" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "- ",
        fCurrency(invoice.voucher_amount)
      ] })
    ] }),
    invoice?.cashback_redemption_amount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.totalsRow, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cashback" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "- ",
        fCurrency(invoice.cashback_redemption_amount)
      ] })
    ] }),
    invoice?.tax_amount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.totalsRow, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Tax (",
        invoice.tax_rate,
        "%)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fCurrency(invoice.tax_amount) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: S.dividerSolid }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.totalFinal, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TOTAL" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fCurrency(invoice?.total_amount) })
    ] }),
    invoice?.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: S.dividerDash }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "10px", fontStyle: "italic" }, children: invoice.notes })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: S.footer, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Always thrilled to serve you," }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700, letterSpacing: "1px" }, children: cashierName.toUpperCase() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: S.bottomFooter, children: "Wishing you a pleasant time, looking forward to see you soon." })
  ] });
});
InvoiceReceipt.displayName = "InvoiceReceipt";
InvoiceReceipt.propTypes = {
  invoice: o.object.isRequired
};
const PRINTER_SETTINGS_KEY = "amadeus_printer_settings";
const handleSilentPrint = async (contentRef, copies = 1) => {
  const toastId = toast.loading("Sending receipt to printer…");
  try {
    const htmlContent = contentRef.current.outerHTML;
    const stored = localStorage.getItem(PRINTER_SETTINGS_KEY);
    const printerName = stored ? JSON.parse(stored).printerName : void 0;
    await window.electron.printReceiptSilently(htmlContent, copies, printerName);
    toast.dismiss(toastId);
    toast.success("Receipt sent to printer");
  } catch (error) {
    console.error("Error during silent print:", error);
    toast.dismiss(toastId);
    toast.error(`Print failed: ${error?.message || "Unknown error"}`);
  }
};
const HAIR_RECORD_CATEGORIES = ["coloring"];
function needsHairRecord(item) {
  return item?.item_type === "service" && HAIR_RECORD_CATEGORIES.includes(item?.service_category);
}
function hasHairRecord(item) {
  const record = item?.hair_record;
  if (!record) return false;
  return !!(record.formula?.length || record.result_hair_color);
}
function unrecordedHairItems(items = []) {
  return items.map((item, index) => ({ item, index })).filter(({ item }) => needsHairRecord(item) && !hasHairRecord(item));
}
function buildHairRecordEntries(items = []) {
  return items.filter(needsHairRecord).map((item) => ({
    service_id: item.service_id,
    service_name: item.service_name,
    stylist_id: item.stylist_id ?? null,
    record_type: "color",
    ...item.hair_record ?? {}
  }));
}
function PosProductStylistSelectDialog({
  open,
  itemName = null,
  itemPrice = null,
  itemKind = "product",
  branchId,
  onClose,
  onConfirm,
  mode = "add",
  initialStaff = null
}) {
  const [selectedStaff, setSelectedStaff] = reactExports.useState(null);
  const [staff, setStaff] = reactExports.useState([]);
  const [staffLoading, setStaffLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!open || !branchId) return;
    let cancelled = false;
    setStaffLoading(true);
    getBranchEmployees({ branchId }).then(({ data }) => {
      if (!cancelled) {
        setStaff(data || []);
        setStaffLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [open, branchId]);
  reactExports.useEffect(() => {
    if (open && initialStaff?.id && staff.length > 0) {
      const found = staff.find((s) => (s.user_id || s.id) === initialStaff.id);
      setSelectedStaff(found || null);
    } else if (open && !initialStaff) {
      setSelectedStaff(null);
    }
  }, [open, initialStaff, staff]);
  const getDisplayName = (s) => s?.display_name || `${s?.first_name || ""} ${s?.last_name || ""}`.trim();
  const handleSkip = () => {
    onConfirm(null);
    onClose();
  };
  const handleConfirm = () => {
    if (!selectedStaff) return;
    onConfirm({
      id: selectedStaff.user_id || selectedStaff.id,
      display_name: getDisplayName(selectedStaff)
    });
    onClose();
  };
  const isReassign = mode === "reassign";
  const isAddon = itemKind === "addon";
  if (!isReassign && !itemName) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isReassign ? "Reassign Staff Commission" : `Assign Staff for ${isAddon ? "Add-on" : "Product"} Sale` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      itemName && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 2 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: itemName }),
        itemPrice != null && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: fCurrency(itemPrice) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1.5 }, children: [
        "Select the staff member who ",
        isAddon ? "performed this add-on" : "sold this product",
        " (for commission tracking):"
      ] }),
      staffLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Autocomplete,
        {
          options: staff,
          getOptionLabel: getDisplayName,
          isOptionEqualToValue: (option, value) => (option?.user_id || option?.id) === (value?.user_id || value?.id),
          value: selectedStaff,
          onChange: (_, newValue) => setSelectedStaff(newValue),
          renderOption: (props, option) => {
            const name = getDisplayName(option);
            return /* @__PURE__ */ reactExports.createElement(MenuItem, { ...props, key: option.user_id || option.id }, /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5, width: "100%" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { src: option.avatar_url, sx: { width: 32, height: 32 }, children: name[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "caption",
                    color: "text.secondary",
                    textTransform: "capitalize",
                    children: option.role || "Staff"
                  }
                )
              ] })
            ] }));
          },
          renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { ...params, placeholder: "Search staff...", size: "small" }),
          noOptionsText: "No staff found"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSkip, color: "inherit", children: isReassign ? "Clear Assignment" : "Skip (No Commission)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          onClick: handleConfirm,
          disabled: !selectedStaff,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: isReassign ? "solar:user-check-bold" : "solar:cart-plus-bold" }),
          children: isReassign ? "Assign" : "Add to Cart"
        }
      )
    ] })
  ] });
}
PosProductStylistSelectDialog.propTypes = {
  open: o.bool.isRequired,
  itemName: o.string,
  itemPrice: o.oneOfType([o.string, o.number]),
  itemKind: o.oneOf(["product", "addon"]),
  branchId: o.string,
  onClose: o.func.isRequired,
  onConfirm: o.func.isRequired,
  mode: o.oneOf(["add", "reassign"]),
  initialStaff: o.shape({ id: o.string, display_name: o.string })
};
const LEVEL_COLORS = { junior: "info", senior: "warning", prive: "success" };
function PosAddServiceStylistDialog({ open, service, branchId, onClose, onAdded }) {
  const { user } = useAuthContext();
  const [selected, setSelected] = reactExports.useState([]);
  const [removeIds, setRemoveIds] = reactExports.useState(() => /* @__PURE__ */ new Set());
  const [saving, setSaving] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const serviceId = service?.service_id ?? service?.id;
  const { stylists, stylistsLoading } = useStylistAutocomplete(open ? branchId : null, "", 500);
  const { stylistIds } = useGetServiceStylistIds(open ? serviceId : null, branchId);
  reactExports.useEffect(() => {
    if (open) {
      setSelected([]);
      setRemoveIds(/* @__PURE__ */ new Set());
      setSearch("");
    }
  }, [open]);
  const assignedIds = reactExports.useMemo(() => new Set(stylistIds), [stylistIds]);
  const visible = reactExports.useMemo(() => {
    const term = search.trim().toLowerCase();
    const filtered = term ? stylists.filter((s) => s.display_name?.toLowerCase().includes(term)) : stylists;
    return [...filtered].sort(
      (x, y) => assignedIds.has(x.id) - assignedIds.has(y.id) || (x.display_name || "").localeCompare(y.display_name || "")
    );
  }, [stylists, search, assignedIds]);
  const selectable = reactExports.useMemo(
    () => visible.filter((m) => !assignedIds.has(m.id)),
    [visible, assignedIds]
  );
  const availableCount = stylists.filter((m) => !assignedIds.has(m.id)).length;
  const selectedIds = reactExports.useMemo(() => new Set(selected.map((m) => m.id)), [selected]);
  const toggleRemove = (id) => setRemoveIds((prev) => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  });
  const toggle = (member) => setSelected(
    (prev) => prev.some((m) => m.id === member.id) ? prev.filter((m) => m.id !== member.id) : [...prev, member]
  );
  const allVisibleSelected = selectable.length > 0 && selectable.every((m) => selectedIds.has(m.id));
  const toggleAllVisible = () => setSelected((prev) => {
    if (allVisibleSelected) return prev.filter((m) => !selectable.some((v) => v.id === m.id));
    const missing = selectable.filter((v) => !selectedIds.has(v.id));
    return [...prev, ...missing];
  });
  const handleSave = async (list = selected) => {
    const remove = [...removeIds];
    if (!list.length && !remove.length) return;
    setSaving(true);
    try {
      await updateServiceStylists({
        serviceId,
        branchId,
        add: list.map((m) => m.id),
        remove,
        assignedBy: user?.id
      });
      if (list.length && !remove.length) {
        toast.success(
          list.length === 1 ? `${list[0].display_name} can now perform ${service.service_name}` : `${list.length} stylists can now perform ${service.service_name}`
        );
      } else if (remove.length && !list.length) {
        toast.success(
          remove.length === 1 ? `Stylist removed from ${service.service_name}` : `${remove.length} stylists removed from ${service.service_name}`
        );
      } else {
        toast.success(`Stylists updated for ${service.service_name}`);
      }
      await onAdded?.(list, remove);
      onClose();
    } catch (error) {
      console.error("Error updating service stylists:", error);
      toast.error(error.message || "Failed to update stylists");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Drawer,
    {
      open,
      onClose,
      anchor: "right",
      slotProps: { backdrop: { invisible: false } },
      PaperProps: { sx: { width: { xs: 1, sm: 420 }, display: "flex", flexDirection: "column" } },
      sx: { zIndex: (theme) => theme.zIndex.modal + 10 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", sx: { p: 2.5, pb: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Manage stylists" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: [
              "Add or remove stylists for ",
              service?.service_name
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, sx: { p: 2.5, flexGrow: 1, minHeight: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              size: "small",
              placeholder: "Search staff...",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              slotProps: {
                input: {
                  startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill", sx: { color: "text.disabled" } }) })
                }
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: selected.length > 0 || removeIds.size > 0 ? [
              selected.length > 0 && `${selected.length} to add`,
              removeIds.size > 0 && `${removeIds.size} to remove`
            ].filter(Boolean).join(" · ") : `${availableCount} available · ${stylistIds.length} assigned` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", onClick: toggleAllVisible, disabled: !selectable.length || saving, children: allVisibleSelected ? "Clear" : "Select all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                border: (theme) => `1px solid ${theme.vars.palette.divider}`,
                borderRadius: 1.5,
                flexGrow: 1,
                minHeight: 0,
                overflow: "auto"
              },
              children: stylistsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(List, { disablePadding: true, children: [
                visible.map((member, index) => {
                  const isAssigned = assignedIds.has(member.id);
                  const startsGroup = index === 0 || assignedIds.has(visible[index - 1].id) !== isAssigned;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
                    startsGroup && index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      ListItemButton,
                      {
                        selected: selectedIds.has(member.id) || removeIds.has(member.id),
                        onClick: () => isAssigned ? toggleRemove(member.id) : toggle(member),
                        sx: { py: 0.75 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Checkbox,
                            {
                              edge: "start",
                              size: "small",
                              checked: isAssigned ? !removeIds.has(member.id) : selectedIds.has(member.id),
                              disableRipple: true,
                              tabIndex: -1
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemAvatar, { sx: { minWidth: 44 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Avatar,
                            {
                              src: member.avatar_url,
                              sx: { width: 32, height: 32, fontSize: 14 },
                              children: member.display_name?.[0]
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ListItemText,
                            {
                              primary: member.display_name,
                              slotProps: { primary: { variant: "body2", fontWeight: 600 } }
                            }
                          ),
                          removeIds.has(member.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "error", sx: { mr: 0.5 }, children: "Will be removed" }),
                          member.stylist_level && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Label,
                            {
                              variant: "soft",
                              color: LEVEL_COLORS[member.stylist_level] || "default",
                              sx: { textTransform: "capitalize" },
                              children: member.stylist_level
                            }
                          )
                        ]
                      }
                    )
                  ] }, member.id);
                }),
                !visible.length && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "body2",
                    color: "text.secondary",
                    sx: { py: 4, textAlign: "center" },
                    children: "No stylists found"
                  }
                )
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "flex-end", spacing: 1, sx: { p: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "inherit", onClick: onClose, children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              onClick: () => handleSave(selected),
              disabled: !selected.length && !removeIds.size || saving,
              children: saving ? "Saving..." : "Save changes"
            }
          )
        ] })
      ]
    }
  );
}
PosAddServiceStylistDialog.propTypes = {
  open: o.bool.isRequired,
  service: o.object,
  branchId: o.string,
  onClose: o.func.isRequired,
  onAdded: o.func
};
function PosServiceStylistSelectionDialog({
  open,
  service,
  branchId,
  onClose,
  onConfirm,
  preSelectedLevel
}) {
  const [selectedLevel, setSelectedLevel] = reactExports.useState(null);
  const [selectedStaff, setSelectedStaff] = reactExports.useState(null);
  const [autocompleteOpen, setAutocompleteOpen] = reactExports.useState(false);
  const [addStylistOpen, setAddStylistOpen] = reactExports.useState(false);
  const { staff, loading: staffLoading, mutate: refreshStaff } = useStaffData(branchId);
  const hideSeniorPrice = useHideSeniorPrice();
  reactExports.useEffect(() => {
    if (open) {
      setSelectedLevel(preSelectedLevel || null);
      setSelectedStaff(null);
      setAutocompleteOpen(false);
      setAddStylistOpen(false);
    }
  }, [open, service, preSelectedLevel]);
  const handleStylistAdded = async (added, removed = []) => {
    const fresh = await refreshStaff();
    if (selectedStaff && removed.includes(selectedStaff.id)) setSelectedStaff(null);
    if (added.length !== 1) return;
    const member = fresh?.find((m) => m.id === added[0].id) || added[0];
    const level = (member.level || selectedLevel || preSelectedLevel)?.toLowerCase();
    if (!level) return;
    setSelectedLevel(level);
    setSelectedStaff({ ...member, level });
  };
  reactExports.useEffect(() => {
    if (open && preSelectedLevel && !staffLoading) {
      setAutocompleteOpen(true);
    }
  }, [open, preSelectedLevel, staffLoading]);
  const getCategoryColor = (category) => {
    const colors = {
      haircut: "primary",
      coloring: "secondary",
      treatment: "success",
      styling: "info",
      makeup: "warning",
      nails: "error"
    };
    return colors[category] || "default";
  };
  const handleStylistLevelSelect = (stylistLevel) => {
    setSelectedLevel(stylistLevel);
    setSelectedStaff(null);
  };
  const handleConfirmSelection = () => {
    if (!service || !selectedLevel) return;
    const price = parseFloat(
      selectedLevel === "junior" ? service.junior_price : selectedLevel === "senior" ? service.senior_price : service.prive_price || 0
    );
    onConfirm({
      service,
      stylistLevel: selectedLevel,
      price,
      staffMember: selectedStaff
    });
  };
  const getAvailableStaff = () => {
    if (!staff || !selectedLevel) return [];
    return staff.filter((member) => {
      const hasCorrectLevel = !member.level || member.level.toLowerCase() === selectedLevel.toLowerCase();
      const canPerformService = !service || !member.services?.length || member.services.some((s) => s.service_id === (service.service_id ?? service.id));
      return hasCorrectLevel && canPerformService;
    });
  };
  if (!service) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Select Stylist Level" }),
      service?.category && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Chip,
        {
          label: service.category,
          size: "small",
          color: getCategoryColor(service.category),
          sx: { textTransform: "capitalize" }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: "medium", children: service?.service_name }),
      service?.duration_minutes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:clock-circle-bold", width: 16, sx: { mr: 0.5 } }),
        service.duration_minutes,
        " minutes"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 2 }, children: "Choose the stylist level for this service:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: selectedLevel === "junior" ? "contained" : "outlined",
            color: "info",
            size: "medium",
            onClick: () => handleStylistLevelSelect("junior"),
            sx: {
              flex: 1,
              p: 1,
              borderWidth: 2,
              "&:hover": { borderWidth: 2 }
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "column", alignItems: "center", spacing: 0.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Junior Stylist" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  color: selectedLevel === "junior" ? "white" : "text.secondary",
                  textAlign: "center",
                  children: "Entry level experience"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h6", color: selectedLevel === "junior" ? "white" : "info.main", children: [
                "$",
                parseFloat(service?.junior_price || 0).toFixed(2)
              ] })
            ] })
          }
        ),
        !hideSeniorPrice && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: selectedLevel === "senior" ? "contained" : "outlined",
            color: "warning",
            size: "medium",
            onClick: () => handleStylistLevelSelect("senior"),
            sx: {
              flex: 1,
              p: 1,
              borderWidth: 2,
              "&:hover": { borderWidth: 2 }
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "column", alignItems: "center", spacing: 0.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Senior Stylist" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  color: selectedLevel === "senior" ? "white" : "text.secondary",
                  textAlign: "center",
                  children: "Experienced professional"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "h6",
                  color: selectedLevel === "senior" ? "white" : "warning.main",
                  children: [
                    "$",
                    parseFloat(service?.senior_price || 0).toFixed(2)
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: selectedLevel === "prive" ? "contained" : "outlined",
            color: "success",
            size: "medium",
            onClick: () => handleStylistLevelSelect("prive"),
            sx: {
              flex: 1,
              p: 1,
              borderWidth: 2,
              "&:hover": { borderWidth: 2 }
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "column", alignItems: "center", spacing: 0.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Prive Stylist" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  color: selectedLevel === "prive" ? "white" : "text.secondary",
                  textAlign: "center",
                  children: "Master level expertise"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "h6",
                  color: selectedLevel === "prive" ? "white" : "success.main",
                  children: [
                    "$",
                    parseFloat(service?.prive_price || 0).toFixed(2)
                  ]
                }
              )
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Select staff member:" }),
        staffLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Autocomplete,
          {
            options: getAvailableStaff(),
            getOptionLabel: (option) => option?.display_name || "",
            value: selectedStaff,
            onChange: (event, newValue) => setSelectedStaff(newValue),
            open: autocompleteOpen,
            onOpen: () => setAutocompleteOpen(true),
            onClose: () => setAutocompleteOpen(false),
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
            renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { ...params, placeholder: "Search staff...", size: "small" }),
            noOptionsText: getAvailableStaff().length === 0 ? "please select a staff level to show options" : "No staff found"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "small",
            onClick: () => setAddStylistOpen(true),
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
            sx: { mt: 1 },
            children: "Manage stylists"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          onClick: handleConfirmSelection,
          disabled: !selectedLevel,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:cart-plus-bold" }),
          children: "Add to Cart"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosAddServiceStylistDialog,
      {
        open: addStylistOpen,
        service,
        branchId,
        onClose: () => setAddStylistOpen(false),
        onAdded: handleStylistAdded
      }
    )
  ] });
}
PosServiceStylistSelectionDialog.propTypes = {
  open: o.bool.isRequired,
  service: o.object,
  branchId: o.string,
  onClose: o.func.isRequired,
  onConfirm: o.func.isRequired,
  preSelectedLevel: o.string
};
function PosSupervisorOverrideDialog({ open, onClose, onSuccess, reason }) {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const handleClose = () => {
    setEmail("");
    setPassword("");
    setError("");
    setLoading(false);
    setShowPassword(false);
    onClose();
  };
  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Please enter supervisor email and password.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const { data, error: fnError } = await supabase.functions.invoke("verify-supervisor", {
        body: { email, password }
      });
      if (fnError) throw fnError;
      if (!data?.authorized) {
        setError(data?.error || "Authorization failed. Please try again.");
        return;
      }
      handleClose();
      onSuccess(data.displayName, data.supervisorUserId);
    } catch {
      setError("Could not verify credentials. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "xs", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { sx: { pb: 1.5 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.5, alignItems: "center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              width: 38,
              height: 38,
              borderRadius: 1.5,
              bgcolor: "warning.lighter",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Iconify,
              {
                icon: "solar:shield-warning-bold-duotone",
                width: 22,
                sx: { color: "warning.dark" }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, lineHeight: 1.3, children: "Supervisor Override" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: reason })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: handleClose, sx: { position: "absolute", right: 8, top: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-fill" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Alert,
        {
          severity: "info",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:lock-keyhole-bold-duotone", width: 18 }),
          children: "A manager or admin must authorize this action."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          fullWidth: true,
          label: "Supervisor Email",
          type: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          autoComplete: "new-email",
          autoFocus: true,
          onKeyDown: (e) => e.key === "Enter" && document.getElementById("supervisor-pw")?.focus()
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          id: "supervisor-pw",
          fullWidth: true,
          label: "Password",
          type: showPassword ? "text" : "password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && handleSubmit(),
          autoComplete: "new-password",
          slotProps: {
            input: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  onClick: () => setShowPassword((prev) => !prev),
                  edge: "end",
                  size: "small",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: showPassword ? "solar:eye-closed-bold" : "solar:eye-bold" })
                }
              ) })
            }
          }
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", children: error })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, color: "inherit", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          color: "warning",
          onClick: handleSubmit,
          loading,
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:shield-check-bold" }),
          children: "Authorize"
        }
      )
    ] })
  ] });
}
PosSupervisorOverrideDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  onSuccess: o.func.isRequired,
  reason: o.string.isRequired
};
const PAYMENT_METHODS = [
  { value: "cash", label: "Cash" },
  { value: "credit_card", label: "Credit Card" },
  { value: "debit_card", label: "Debit Card" },
  { value: "mobile_payment", label: "Mobile Payment" },
  { value: "bank_transfer", label: "Bank Transfer" },
  { value: "gift_card", label: "Gift Card" }
];
function PosPaymentDialog({
  open,
  onClose,
  totalAmount,
  depositAmount = 0,
  deliveryCharge = 0,
  cartItems = [],
  packageCoverage = {},
  planCoverage = {},
  onSubmit,
  isPrivilegedUser = false
}) {
  const [payment, setPayment] = reactExports.useState({
    payment_method: "cash",
    amount: totalAmount,
    notes: ""
  });
  const [loading, setLoading] = reactExports.useState(false);
  const [supervisorDialogOpen, setSupervisorDialogOpen] = reactExports.useState(false);
  const [supervisorOverrideGranted, setSupervisorOverrideGranted] = reactExports.useState(false);
  const [supervisorOverrideId, setSupervisorOverrideId] = reactExports.useState(null);
  const missingFormulas = reactExports.useMemo(() => unrecordedHairItems(cartItems), [cartItems]);
  reactExports.useEffect(() => {
    if (open) {
      setPayment({
        payment_method: "cash",
        amount: totalAmount,
        notes: ""
      });
      setLoading(false);
      setSupervisorOverrideGranted(false);
      setSupervisorOverrideId(null);
      setSupervisorDialogOpen(false);
    }
  }, [open, totalAmount]);
  const handlePaymentChange = (field, value) => {
    setPayment((prev) => ({ ...prev, [field]: value }));
  };
  const totalPaid = parseFloat(payment.amount) || 0;
  const changeAmount = totalPaid - totalAmount;
  const remainingAmount = totalAmount - totalPaid;
  const amountInvalid = totalPaid < 0;
  const executeSubmit = reactExports.useCallback(
    async (overrideGranted = false, overrideSupervisorId = null) => {
      if (totalPaid < 0) {
        toast.error("The payment amount cannot be negative.");
        return;
      }
      const effectivelyAuthorized = isPrivilegedUser || overrideGranted;
      if (totalPaid < totalAmount) {
        if (!effectivelyAuthorized) {
          setSupervisorDialogOpen(true);
          return;
        }
        toast.warning("Warning: Payment amount is less than total.");
      }
      setLoading(true);
      try {
        const supervisorId = overrideGranted ? overrideSupervisorId : null;
        await onSubmit([payment], supervisorId);
      } catch (err) {
        setLoading(false);
        console.error("[POS] Payment failed:", err);
        toast.error(err?.message || "Failed to process payment. Please try again.");
      }
    },
    [isPrivilegedUser, totalPaid, totalAmount, payment, onSubmit]
  );
  const handleSubmit = () => executeSubmit(supervisorOverrideGranted, supervisorOverrideId);
  const handleSupervisorSuccess = (displayName, userId) => {
    setSupervisorOverrideGranted(true);
    setSupervisorOverrideId(userId ?? null);
    setSupervisorDialogOpen(false);
    toast.success(`Override granted by ${displayName}`);
    executeSubmit(true, userId ?? null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      "Process Payment",
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, sx: { position: "absolute", right: 8, top: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-fill" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { dividers: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h4", color: "primary", gutterBottom: true, children: [
          "$",
          totalAmount.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: depositAmount > 0 ? "Remaining Balance Due" : "Total Amount Due" })
      ] }),
      depositAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "info", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:shield-keyhole-bold-duotone" }), children: [
        "Deposit already paid: ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          "$",
          depositAmount.toFixed(2)
        ] }),
        ". Only charge the remaining balance."
      ] }),
      missingFormulas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Alert,
        {
          severity: "warning",
          variant: "outlined",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:palette-bold" }),
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "inherit", size: "small", onClick: onClose, children: "Add it" }),
          children: [
            missingFormulas.length === 1 ? `No formula recorded for ${missingFormulas[0].item.service_name}.` : `${missingFormulas.length} colour services have no formula recorded.`,
            " ",
            "You can still take payment. It will be flagged on the client for later."
          ]
        }
      ),
      cartItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            spacing: 0.5,
            sx: {
              p: 1.5,
              borderRadius: 1,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.neutral"
            },
            children: [
              cartItems.map((item, idx) => {
                const isCovered = !!packageCoverage[idx];
                const pkg = packageCoverage[idx];
                const coveredQty = pkg?.covered_quantity ?? (item.quantity ?? 1);
                const isPartiallyCovered = isCovered && coveredQty < (item.quantity ?? 1);
                const hasPlanDiscount = !isCovered && !!planCoverage[idx];
                const planDiscount = planCoverage[idx];
                const name = item.item_type === "product" ? item.product_name : item.item_type === "package" || item.item_type === "package_deposit" ? item.package_name : item.item_type === "discount_plan" || item.item_type === "discount_plan_deposit" ? item.plan_name : item.item_type === "addon" ? item.addon_name : item.service_name;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    spacing: 1,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Stack,
                        {
                          direction: "row",
                          alignItems: "center",
                          spacing: 0.75,
                          sx: { flex: 1, minWidth: 0 },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", noWrap: true, sx: { flex: 1 }, children: [
                              item.quantity > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                Typography,
                                {
                                  component: "span",
                                  variant: "caption",
                                  color: "text.disabled",
                                  sx: { mr: 0.5 },
                                  children: [
                                    item.quantity,
                                    "×"
                                  ]
                                }
                              ),
                              name
                            ] }),
                            isCovered && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Chip,
                              {
                                label: isPartiallyCovered ? `${coveredQty}/${item.quantity} pkg` : "Package",
                                size: "small",
                                color: "success",
                                sx: { height: 16, fontSize: 9, fontWeight: 700 }
                              }
                            ),
                            hasPlanDiscount && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Chip,
                              {
                                label: `-${planDiscount.discount_percent}%`,
                                size: "small",
                                color: "info",
                                sx: { height: 16, fontSize: 9, fontWeight: 700 }
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", children: [
                        (isCovered || hasPlanDiscount) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Typography,
                          {
                            variant: "caption",
                            color: "text.disabled",
                            sx: { textDecoration: "line-through", lineHeight: 1 },
                            children: [
                              "$",
                              (item.unit_price * (item.quantity ?? 1)).toFixed(2)
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Typography,
                          {
                            variant: "caption",
                            fontWeight: 600,
                            color: isCovered ? "success.dark" : hasPlanDiscount ? "info.dark" : "text.primary",
                            children: isCovered ? isPartiallyCovered ? `$${((item.quantity - coveredQty) * item.unit_price).toFixed(2)}` : "FREE" : hasPlanDiscount ? `$${(item.unit_price * (item.quantity ?? 1) * (1 - planDiscount.discount_percent / 100)).toFixed(2)}` : `$${item.line_total.toFixed(2)}`
                          }
                        )
                      ] })
                    ]
                  },
                  idx
                );
              }),
              Object.keys(packageCoverage).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 0.5 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.5, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:gift-bold-duotone",
                      width: 14,
                      sx: { color: "success.dark" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "success.dark", fontWeight: 600, children: [
                    Object.entries(packageCoverage).map(([idx, pkg]) => {
                      const item = cartItems[Number(idx)];
                      const covQty = pkg.covered_quantity ?? (item?.quantity ?? 1);
                      const isPartial = covQty < (item?.quantity ?? 1);
                      return isPartial ? `${covQty}/${item.quantity} ${item.service_name}` : item?.service_name;
                    }).join(", "),
                    " ",
                    "covered by package"
                  ] })
                ] })
              ] }),
              deliveryCharge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 0.5 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.5, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Iconify,
                      {
                        icon: "solar:delivery-bold-duotone",
                        width: 14,
                        sx: { color: "text.primary" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 600, children: "Delivery Charge" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", fontWeight: 700, children: [
                    "+$",
                    deliveryCharge.toFixed(2)
                  ] })
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Payment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              sx: { flex: 2 },
              fullWidth: true,
              type: "number",
              label: "Amount",
              value: payment.amount,
              onChange: (e) => {
                const val = e.target.value;
                handlePaymentChange("amount", val === "" ? "" : parseFloat(val) || 0);
              },
              inputProps: { min: 0, step: 0.01 },
              error: amountInvalid,
              helperText: amountInvalid ? "Amount cannot be negative" : void 0,
              slotProps: {
                input: {
                  endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "small",
                      variant: "outlined",
                      onClick: () => handlePaymentChange("amount", totalAmount),
                      children: "Max"
                    }
                  ) })
                }
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              sx: { flex: 1 },
              select: true,
              fullWidth: true,
              label: "Payment Method",
              value: payment.payment_method,
              onChange: (e) => handlePaymentChange("payment_method", e.target.value),
              children: PAYMENT_METHODS.map((method) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: method.value, children: method.label }, method.value))
            }
          )
        ] }),
        (payment.payment_method === "credit_card" || payment.payment_method === "debit_card") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              label: "Card Last 4 Digits",
              value: payment.card_last4 || "",
              onChange: (e) => handlePaymentChange("card_last4", e.target.value),
              inputProps: { maxLength: 4 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              label: "Card Type",
              value: payment.card_type || "",
              onChange: (e) => handlePaymentChange("card_type", e.target.value),
              placeholder: "Visa, MasterCard..."
            }
          )
        ] }),
        (payment.payment_method === "bank_transfer" || payment.payment_method === "mobile_payment") && /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            label: "Transaction ID / Reference",
            value: payment.transaction_id || "",
            onChange: (e) => handlePaymentChange("transaction_id", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            fullWidth: true,
            multiline: true,
            rows: 2,
            label: "Notes (Optional)",
            value: payment.notes,
            onChange: (e) => handlePaymentChange("notes", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, sx: { p: 2, bgcolor: "background.neutral", borderRadius: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Total Due:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: "medium", children: [
            "$",
            totalAmount.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Total Paid:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Typography,
            {
              variant: "body2",
              fontWeight: "medium",
              color: totalPaid >= totalAmount ? "success.main" : "error.main",
              children: [
                "$",
                totalPaid.toFixed(2)
              ]
            }
          )
        ] }),
        changeAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Change:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: "medium", color: "warning.main", children: [
            "$",
            changeAmount.toFixed(2)
          ] })
        ] }),
        remainingAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Remaining:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: "medium", color: "warning.main", children: [
            "$",
            remainingAmount.toFixed(2)
          ] })
        ] })
      ] }),
      remainingAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Alert,
        {
          severity: "warning",
          variant: "outlined",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:lock-keyhole-bold-duotone" }),
          children: isPrivilegedUser ? "Payment is less than total. Override allowed for managers/admins." : "Payment is less than total. Supervisor override required to complete."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, color: "inherit", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          onClick: handleSubmit,
          loading,
          disabled: amountInvalid,
          children: "Complete Sale"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosSupervisorOverrideDialog,
      {
        open: supervisorDialogOpen,
        onClose: () => setSupervisorDialogOpen(false),
        onSuccess: handleSupervisorSuccess,
        reason: "Partial payment — collecting less than the total amount due."
      }
    )
  ] });
}
PosPaymentDialog.propTypes = {
  open: o.bool,
  onClose: o.func,
  totalAmount: o.number,
  depositAmount: o.number,
  deliveryCharge: o.number,
  cartItems: o.array,
  packageCoverage: o.object,
  planCoverage: o.object,
  onSubmit: o.func,
  isPrivilegedUser: o.bool
};
export {
  InvoiceReceipt as I,
  PosPaymentDialog as P,
  PosSupervisorOverrideDialog as a,
  PosServiceStylistSelectionDialog as b,
  PosProductStylistSelectDialog as c,
  hasHairRecord as d,
  buildHairRecordEntries as e,
  handleSilentPrint as h,
  needsHairRecord as n
};
