import { r as reactExports, j as jsxRuntimeExports, T as Tooltip, I as IconButton, a as Iconify, b as CircularProgress, an as fDate, a0 as fCurrency, B as Box, c as Typography, S as Stack, L as Label, U, d as Button, bz as ButtonBase, bA as Collapse, h as dayjs, bX as useTheme, av as useAuthContext, bL as useGetProducts, t as toast, K as Divider } from "./index-B08HRm4A.js";
import { o } from "./index-Di_Bgabu.js";
import { h as handleSilentPrint, I as InvoiceReceipt, b as PosServiceStylistSelectionDialog, c as PosProductStylistSelectDialog } from "./pos-payment-dialog-D68iINOQ.js";
import { P as PDFDownloadLink, a as PDFViewer, D as Document, b as Page, S as StyleSheet, V as View, I as Image, T as Text, F as Font } from "./react-pdf.browser-DOUvi50W.js";
import { u as useMediaQuery } from "./useMobilePicker-D3Q_Tt3t.js";
import { j as useGetBranchServices } from "./services-UhlA7T7c.js";
import { e as useClientList } from "./client-service-swr-DnF01Wop.js";
import { g as getBranchEmployees } from "./staff-service-CYDKVOm2.js";
import { T as ToggleButtonGroup } from "./ToggleButtonGroup-CJXz0-w5.js";
import { b as ToggleButton } from "./ToggleButton-D4MfeHtt.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { f as formatPhoneNumberIntl } from "./index-C4JOln-R.js";
import { D as DateTimePicker } from "./DateTimePicker-D7Yo7M4k.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { r as removeSaleItemExistingSale, g as updateSaleItemQuantity, h as updateSaleItemStylist, i as addSaleItemExistingSale, j as updateSaleDetails, k as updateSaleManualDiscount } from "./sale-service-CWyXC78v.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { D as DialogContentText } from "./DialogContentText-XMbzPiIe.js";
const ITEM_TYPE_LABELS = {
  service: "Service",
  product: "Product",
  package: "Package",
  package_deposit: "Package Deposit",
  discount_plan_deposit: "Discount Plan",
  discount_plan_unused_revenue: "Unused Plan Revenue",
  addon: "Add-on"
};
const ITEMS_COLUMN_SHOW_LIMIT = 1;
const getItemColor = (type) => {
  switch (type) {
    case "service":
      return "info";
    case "product":
      return "success";
    case "addon":
      return "warning";
    case "package":
      return "primary";
    case "package_deposit":
      return "warning";
    case "discount_plan_deposit":
      return "secondary";
    case "discount_plan_unused_revenue":
      return "error";
    default:
      return "default";
  }
};
const getItemLabel = (item) => {
  switch (item.item_type) {
    case "service":
      return item.service?.name ?? "Service";
    case "product":
      return item.product?.name ?? "Product";
    case "package":
      return item.package_name ?? "Package";
    case "package_deposit":
      return `${item.package_name ?? "Package"} (dep.)`;
    case "discount_plan_deposit":
      return "Plan Deposit";
    case "discount_plan_unused_revenue":
      return "Plan Revenue";
    case "addon":
      return "Add-on";
    default:
      return item.item_type;
  }
};
const getItemFullName = (item) => {
  switch (item.item_type) {
    case "service":
      return item.service?.name ?? "Service";
    case "product":
      return item.product?.name ?? "Product";
    case "package":
      return item.package_name ?? "Package";
    case "package_deposit":
      return `${item.package_name ?? "Package"} — Deposit`;
    case "discount_plan_deposit":
      return "Discount Plan Deposit";
    case "discount_plan_unused_revenue":
      return "Unused Plan Revenue";
    case "addon":
      return "Add-on";
    default:
      return item.item_type;
  }
};
function PrintReceiptButton({ invoice }) {
  const contentRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Print Receipt", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => handleSilentPrint(contentRef), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:printer-minimalistic-bold" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", left: "-9999px", top: "-9999px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceReceipt, { ref: contentRef, invoice }) })
  ] });
}
PrintReceiptButton.propTypes = {
  invoice: o.object.isRequired
};
function InvoicePDFDownload({ invoice, currentStatus }) {
  const renderButton = (loading) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Download", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24, color: "inherit" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:cloud-download-fill" }) }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    PDFDownloadLink,
    {
      document: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoicePdfDocument, { invoice, currentStatus }),
      fileName: invoice?.sale_number,
      style: { textDecoration: "none" },
      children: ({ loading }) => renderButton(loading)
    }
  );
}
function InvoicePDFViewer({ invoice, currentStatus }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PDFViewer, { width: "100%", height: "100%", style: { border: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoicePdfDocument, { invoice, currentStatus }) });
}
Font.register({
  family: "Roboto",
  // fonts from public folder
  fonts: [{ src: "/fonts/Roboto-Regular.ttf" }, { src: "/fonts/Roboto-Bold.ttf" }]
});
const useStyles = () => reactExports.useMemo(
  () => StyleSheet.create({
    // layout
    page: {
      fontSize: 9,
      lineHeight: 1.6,
      fontFamily: "Roboto",
      backgroundColor: "#FFFFFF",
      padding: "40px 24px 120px 24px"
    },
    footer: {
      left: 0,
      right: 0,
      bottom: 0,
      padding: 24,
      margin: "auto",
      borderTopWidth: 1,
      borderStyle: "solid",
      position: "absolute",
      borderColor: "#e9ecef"
    },
    container: { flexDirection: "row", justifyContent: "space-between" },
    // margin
    mb4: { marginBottom: 4 },
    mb8: { marginBottom: 8 },
    mb40: { marginBottom: 40 },
    // text
    h3: { fontSize: 16, fontWeight: 700, lineHeight: 1.2 },
    h4: { fontSize: 12, fontWeight: 700 },
    text1: { fontSize: 10 },
    text2: { fontSize: 9 },
    text1Bold: { fontSize: 10, fontWeight: 700 },
    text2Bold: { fontSize: 9, fontWeight: 700 },
    // table
    table: { display: "flex", width: "100%" },
    row: {
      padding: "5px 0 4px 0",
      flexDirection: "row",
      borderBottomWidth: 1,
      borderStyle: "solid",
      borderColor: "#e9ecef"
    },
    cell_1: { width: "5%" },
    cell_2: { width: "35%" },
    cell_sku: { width: "10%" },
    cell_3: { width: "15%" },
    cell_4: { width: "10%", paddingLeft: 8 },
    cell_5: { width: "10%" },
    noBorder: { paddingTop: "5px", paddingBottom: 0, borderBottomWidth: 0 }
  }),
  []
);
function InvoicePdfDocument({ invoice: sale, currentStatus }) {
  const {
    items,
    subtotal,
    discount_amount,
    voucher_amount,
    voucher,
    discount_code,
    tax_amount,
    total_amount,
    amount_paid,
    client,
    branch,
    cashier,
    created_at,
    sale_number,
    payments,
    notes,
    manual_discount_amount,
    manual_discount_type,
    manual_discount_value,
    cashback_redemption_amount,
    reward_redemptions
  } = sale ?? {};
  const styles = useStyles();
  const rewardRedemption = reward_redemptions?.[0] ?? null;
  const remainingAmount = (total_amount ?? 0) - (amount_paid ?? 0);
  const renderHeader = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: [styles.container, styles.mb40], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: { flexDirection: "row", alignItems: "flex-start", gap: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { source: "/logo/logo-full.png", style: { width: 48, height: 48 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text1Bold], children: "Amadeus Beauty Factory" }),
        branch?.name && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: branch.name })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: { alignItems: "flex-end" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.h3, styles.mb4, { textTransform: "capitalize" }], children: currentStatus }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2, styles.mb4], children: sale_number }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: fDate(created_at) })
    ] })
  ] });
  const renderFooter = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: [styles.container, styles.footer], fixed: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: { width: "75%" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold, styles.mb4], children: "NOTES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: notes || "We appreciate your business. Thank you for choosing us!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: { width: "25%", textAlign: "right" }, children: cashier && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold, styles.mb4], children: "Served by" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: [styles.text2], children: [
        cashier.first_name,
        " ",
        cashier.last_name
      ] })
    ] }) })
  ] });
  const renderBillingInfo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: [styles.container, styles.mb40], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: { width: "50%" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text1Bold, styles.mb4], children: "Bill to" }),
      client ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: [styles.text2Bold], children: [
          client.first_name,
          " ",
          client.last_name
        ] }),
        client.phone_primary && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: client.phone_primary }),
        client.email && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: client.email })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: "Walk-in customer" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: { width: "50%", alignItems: "flex-end" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text1Bold, styles.mb4], children: "Payment status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2, { textTransform: "capitalize" }], children: remainingAmount <= 0 ? "Paid" : remainingAmount < (total_amount ?? 0) ? "Partially paid" : "Unpaid" })
    ] })
  ] });
  const renderDates = () => null;
  const renderTable = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text1Bold], children: "Sale details" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.table, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(View, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.row, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "#" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "Description" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_sku, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "SKU" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "Type" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "Qty" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "Unit price" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.cell_5, { textAlign: "right" }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "Total" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { children: [
        items?.map((item, index) => {
          const isCovered = item.item_type === "service" && item.original_unit_price != null;
          const displayName = item.item_type === "product" ? item.product_name : item.item_type === "addon" ? item.addon_name : item.item_type === "package" || item.item_type === "package_deposit" || item.item_type === "discount_plan_deposit" ? item.package_name : item.service_name;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.row, wrap: false, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: index + 1 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.cell_2, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: displayName }),
              item.stylist && /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: [styles.text2], children: [
                "By: ",
                item.stylist.first_name,
                " ",
                item.stylist.last_name
              ] }),
              isCovered && item.package_name && /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: [styles.text2], children: [
                "Package: ",
                item.package_name
              ] }),
              isCovered && /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: [styles.text2], children: [
                "Covered by package — original ",
                fCurrency(item.original_unit_price)
              ] }),
              item.item_type === "addon" && item.addon_category && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: item.addon_category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_sku, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: item.item_type === "product" && item.product_sku ? item.product_sku : "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: ITEM_TYPE_LABELS[item.item_type] ?? item.item_type }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: item.quantity }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: isCovered ? "FREE" : fCurrency(item.unit_price) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.cell_5, { textAlign: "right" }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: isCovered ? fCurrency(0) : fCurrency(item.line_total) }) })
          ] }, item.id);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: [styles.row, styles.noBorder], wrap: false, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: [styles.text2], children: [
            "Total items: ",
            items?.reduce((sum, item) => sum + (item.quantity ?? 1), 0) ?? 0
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_sku }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_5 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(View, { wrap: false, children: [
          { name: "Subtotal", value: subtotal },
          discount_code && discount_amount ? {
            name: `Discount (${discount_code.code})`,
            value: -discount_amount,
            negative: true
          } : discount_amount ? { name: "Discount", value: -discount_amount, negative: true } : null,
          manual_discount_amount ? {
            name: `Manual discount${manual_discount_type === "percentage" ? ` (${manual_discount_value}%)` : ""}`,
            value: -manual_discount_amount,
            negative: true
          } : null,
          voucher_amount ? {
            name: `Voucher${voucher?.code ? ` (${voucher.code})` : ""}`,
            value: -voucher_amount,
            negative: true
          } : null,
          cashback_redemption_amount ? { name: "Cashback redeemed", value: -cashback_redemption_amount, negative: true } : null,
          rewardRedemption ? {
            name: `Reward: ${rewardRedemption.rewards_catalog?.name ?? rewardRedemption.redeem_code}`,
            value: -(rewardRedemption.rewards_catalog?.value ?? 0),
            negative: true
          } : null,
          tax_amount ? { name: "Tax", value: tax_amount } : null,
          { name: "Total", value: total_amount, bold: true },
          amount_paid > 0 ? { name: "Amount paid", value: amount_paid } : null,
          remainingAmount > 0 ? { name: "Remaining", value: remainingAmount, bold: true } : null
        ].filter(Boolean).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: [styles.row, styles.noBorder], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_sku }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: styles.cell_4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [item.bold ? styles.h4 : styles.text2], children: item.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: [styles.cell_5, { textAlign: "right" }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Text,
            {
              style: [
                item.bold ? styles.h4 : styles.text2,
                item.negative ? { color: "#B71D18" } : {}
              ],
              children: fCurrency(item.value)
            }
          ) })
        ] }, item.name)) })
      ] })
    ] })
  ] });
  const renderPayments = () => {
    if (!payments?.length) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: [styles.mb40, { marginTop: 24 }], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text1Bold, styles.mb8], children: "Payment history" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.table, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.row, wrap: false, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: { width: "5%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "#" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: { width: "55%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "Method" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: { width: "20%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "Date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: { width: "20%", textAlign: "right" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2Bold], children: "Amount" }) })
        ] }),
        payments.map((payment, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { style: styles.row, wrap: false, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: { width: "5%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: index + 1 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: { width: "55%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2, { textTransform: "capitalize" }], children: payment.payment_method.replace(/_/g, " ") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: { width: "20%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: payment.created_at ? fDate(payment.created_at) : "" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(View, { style: { width: "20%", textAlign: "right" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: [styles.text2], children: fCurrency(payment.amount) }) })
        ] }, payment.id))
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Document, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page, { size: "A4", style: styles.page, children: [
    renderHeader(),
    renderBillingInfo(),
    renderDates(),
    renderTable(),
    renderPayments(),
    renderFooter()
  ] }) });
}
const money$1 = { fontVariantNumeric: "tabular-nums" };
function QuantityStepper({ line, onChange }) {
  if (!line.canQty || line.removed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { ...money$1, width: 96, textAlign: "center" }, children: line.qty });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Stack,
    {
      direction: "row",
      alignItems: "center",
      sx: {
        width: 96,
        height: 32,
        borderRadius: 1,
        border: "1px solid",
        borderColor: "divider"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            size: "small",
            "aria-label": `Decrease quantity of ${line.name}`,
            disabled: line.qty <= 1,
            onClick: () => onChange(line, line.qty - 1),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:minus-fill", width: 16 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { ...money$1, flex: 1, textAlign: "center" }, children: line.qty }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            size: "small",
            "aria-label": `Increase quantity of ${line.name}`,
            onClick: () => onChange(line, line.qty + 1),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:plus-fill", width: 16 })
          }
        )
      ]
    }
  );
}
function StaffButton({ line, onClick }) {
  const isProduct = line.kind === "product" || line.kind === "addon";
  const label = line.staff?.display_name ? line.staff.display_name : isProduct ? "Assign commission" : "Assign stylist";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: isProduct ? "Change commission staff" : "Change stylist", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      size: "small",
      color: "inherit",
      disabled: line.removed,
      onClick: () => onClick(line),
      startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:user-circle-bold", width: 14 }),
      sx: {
        px: 0.75,
        py: 0,
        minWidth: 0,
        height: 22,
        typography: "caption",
        fontWeight: line.staffChanged ? "fontWeightSemiBold" : "fontWeightRegular",
        color: line.staff ? "text.secondary" : "text.disabled",
        textTransform: "none",
        "& .MuiButton-startIcon": { mr: 0.5 }
      },
      children: label
    }
  ) });
}
function SaleEditLines({ lines, onQty, onRemove, onRestore, onStaff }) {
  if (lines.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          py: 6,
          px: 3,
          textAlign: "center",
          borderRadius: 1.5,
          border: "1px dashed",
          borderColor: "divider"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "This sale has no items" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: "Search above to add a product or service." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { borderRadius: 1.5, border: "1px solid", borderColor: "divider", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Stack,
      {
        direction: "row",
        alignItems: "center",
        spacing: 2,
        sx: {
          px: 2,
          py: 1,
          bgcolor: "background.neutral",
          borderBottom: "1px solid",
          borderColor: "divider",
          color: "text.secondary",
          typography: "overline"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1 }, children: "Item" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: 96, textAlign: "center", display: { xs: "none", sm: "block" } }, children: "Qty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: 88, textAlign: "right", display: { xs: "none", sm: "block" } }, children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: 40 } })
        ]
      }
    ),
    lines.map((line) => {
      const qtyChanged = !line.isNew && !line.removed && line.qty !== line.origQty;
      const totalChanged = !line.isNew && !line.removed && Math.abs(line.lineTotal - line.origLineTotal) > 4e-3;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          alignItems: "center",
          spacing: 2,
          sx: {
            px: 2,
            py: 1.5,
            flexWrap: { xs: "wrap", sm: "nowrap" },
            rowGap: 1,
            borderBottom: "1px solid",
            borderColor: "divider",
            "&:last-of-type": { borderBottom: 0 },
            transition: (t) => t.transitions.create("background-color", { duration: 200 }),
            bgcolor: line.isNew ? (t) => U(t.vars.palette.success.mainChannel, 0.06) : "transparent"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0, opacity: line.removed ? 0.5 : 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "subtitle2",
                    noWrap: true,
                    sx: { textDecoration: line.removed ? "line-through" : "none" },
                    children: line.name
                  }
                ),
                line.isNew && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "success", sx: { height: 18, fontSize: 10 }, children: "New" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, sx: { mt: 0.25, flexWrap: "wrap" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: getItemColor(line.kind), sx: { height: 18, fontSize: 10 }, children: ITEM_TYPE_LABELS[line.kind] ?? line.kind }),
                line.sku && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: line.sku }),
                line.coveredNote && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: line.coveredNote }),
                line.kind !== "package" && line.kind !== "package_deposit" && /* @__PURE__ */ jsxRuntimeExports.jsx(StaffButton, { line, onClick: onStaff })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "center", sx: { opacity: line.removed ? 0.5 : 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(QuantityStepper, { line, onChange: onQty }),
              qtyChanged && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", sx: { mt: 0.25 }, children: [
                "was ",
                line.origQty
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { width: 88, textAlign: "right", opacity: line.removed ? 0.5 : 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "subtitle2",
                  sx: { ...money$1, textDecoration: line.removed ? "line-through" : "none" },
                  children: fCurrency(line.removed ? line.origLineTotal : line.lineTotal)
                }
              ),
              totalChanged && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", sx: { ...money$1, display: "block" }, children: [
                "was ",
                fCurrency(line.origLineTotal)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: 40, display: "flex", justifyContent: "flex-end" }, children: line.removed ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Keep this item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onRestore(line), "aria-label": `Restore ${line.name}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:restart-bold", width: 18 }) }) }) : line.canRemove && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Remove item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                color: "error",
                onClick: () => onRemove(line),
                "aria-label": `Remove ${line.name}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 18 })
              }
            ) }) })
          ]
        },
        line.key
      );
    })
  ] });
}
const lineShape = o.shape({
  key: o.string,
  name: o.string,
  qty: o.number
});
QuantityStepper.propTypes = { line: lineShape, onChange: o.func };
StaffButton.propTypes = { line: lineShape, onClick: o.func };
SaleEditLines.propTypes = {
  lines: o.array.isRequired,
  onQty: o.func.isRequired,
  onRemove: o.func.isRequired,
  onRestore: o.func.isRequired,
  onStaff: o.func.isRequired
};
const round2 = (n) => Math.round((Number(n) || 0) * 100) / 100;
const personId = (p) => p?.user_id || p?.id || null;
const staffName = (s) => {
  if (!s) return "";
  return s.display_name || [s.first_name, s.last_name].filter(Boolean).join(" ") || s.name || "";
};
const itemName = (item) => item.product_name || item.service_name || item.addon_name || item.package_name || item.product?.name || item.service?.name || ITEM_TYPE_LABELS[item.item_type] || "Item";
const canEditQuantity = (item) => item.item_type === "product" || item.item_type === "service" && !(Number(item.discount_amount) > 0) && !item.paid_via_package;
const canRemoveItem = (item) => item.item_type !== "addon";
const lineTotalFor = (item, qty) => qty === Number(item.quantity) ? Number(item.line_total) || 0 : qty * Number(item.unit_price) - Number(item.discount_amount || 0) + Number(item.tax_amount || 0);
function manualDiscountFor({ subtotal, codeDiscount, type, value }) {
  const numeric = parseFloat(value) || 0;
  if (!type || numeric <= 0) return 0;
  const raw = type === "percentage" ? subtotal * numeric / 100 : numeric;
  const room = Math.max(subtotal - codeDiscount, 0);
  return round2(Math.min(raw, room));
}
function computeDraftTotals({ sale, lines, discountType, discountValue }) {
  const kept = lines.filter((l) => !l.removed);
  const subtotal = round2(kept.reduce((sum, l) => sum + l.lineTotal, 0));
  const tax = round2(kept.reduce((sum, l) => sum + l.taxAmount, 0));
  const packageCovered = round2(
    kept.reduce((sum, l) => sum + (l.paidViaPackage ? l.lineTotal : 0), 0)
  );
  const codeDiscount = Number(sale.discount_amount) || 0;
  const voucher = Number(sale.voucher_amount) || 0;
  const cashback = Number(sale.cashback_redemption_amount) || 0;
  const delivery = Number(sale.delivery_charge) || 0;
  const paid = Number(sale.amount_paid) || 0;
  const manual = manualDiscountFor({
    subtotal,
    codeDiscount,
    type: discountType,
    value: discountValue
  });
  const total = Math.max(
    round2(subtotal + tax - codeDiscount - manual - voucher - cashback + delivery),
    0
  );
  return {
    subtotal,
    tax,
    codeDiscount,
    manual,
    voucher,
    cashback,
    delivery,
    packageCovered,
    paid,
    total,
    balance: round2(total - paid - packageCovered)
  };
}
function totalsFromSale(sale) {
  const items = (sale.items ?? []).filter((i) => !i.deleted_at);
  const packageCovered = round2(
    items.reduce((sum, i) => sum + (i.paid_via_package ? Number(i.line_total) || 0 : 0), 0)
  );
  const paid = Number(sale.amount_paid) || 0;
  const total = Number(sale.total_amount) || 0;
  return {
    subtotal: Number(sale.subtotal) || 0,
    tax: Number(sale.tax_amount) || 0,
    codeDiscount: Number(sale.discount_amount) || 0,
    manual: Number(sale.manual_discount_amount) || 0,
    voucher: Number(sale.voucher_amount) || 0,
    cashback: Number(sale.cashback_redemption_amount) || 0,
    delivery: Number(sale.delivery_charge) || 0,
    packageCovered,
    paid,
    total,
    balance: round2(total - paid - packageCovered)
  };
}
const money = { fontVariantNumeric: "tabular-nums" };
function Row$1({ label, value, was, negative, tone, children }) {
  const changed = was != null && Math.abs(round2(was) - round2(value)) > 4e-3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", spacing: 2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { pt: children ? 0.75 : 0 }, children: label }),
    children ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { textAlign: "right" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { ...money, color: tone ? `${tone}.main` : "text.primary" }, children: [
        negative && value > 0 ? "− " : "",
        fCurrency(value)
      ] }),
      changed && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.disabled", sx: { ...money, display: "block" }, children: [
        "was ",
        negative && was > 0 ? "− " : "",
        fCurrency(was)
      ] })
    ] })
  ] });
}
const TONE_COLOR = { success: "success.main", error: "error.main", info: "info.main" };
function SaleEditLedger({
  before,
  after,
  draft,
  onDiscountChange,
  discountChanged,
  changes,
  authorization,
  onDiscardAll
}) {
  const delta = round2(after.total - before.total);
  const overpaid = after.balance < -4e-3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { p: { xs: 2, md: 3 } }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { mb: 2 }, children: "Updated totals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.25, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Subtotal", value: after.subtotal, was: before.subtotal }),
        after.codeDiscount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Code / reward", value: after.codeDiscount, negative: true, tone: "error" }),
        after.voucher > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Voucher", value: after.voucher, negative: true, tone: "error" }),
        after.cashback > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Cashback", value: after.cashback, negative: true, tone: "error" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Discount", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { textAlign: "right" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", justifyContent: "flex-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              ToggleButtonGroup,
              {
                exclusive: true,
                size: "small",
                value: draft.discountType,
                onChange: (_, v) => v && onDiscountChange({ discountType: v }),
                "aria-label": "Discount type",
                sx: { "& .MuiToggleButton-root": { px: 1.25, py: 0.5, minWidth: 36 } },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButton, { value: "fixed_amount", "aria-label": "Fixed amount", children: "$" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButton, { value: "percentage", "aria-label": "Percentage", children: "%" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                size: "small",
                type: "number",
                placeholder: "0",
                value: draft.discountValue,
                onChange: (e) => onDiscountChange({ discountValue: e.target.value }),
                error: draft.discountType === "percentage" && parseFloat(draft.discountValue) > 100,
                slotProps: {
                  htmlInput: {
                    min: 0,
                    max: draft.discountType === "percentage" ? 100 : void 0,
                    step: 0.01,
                    "aria-label": "Discount value",
                    style: { textAlign: "right", ...money }
                  },
                  input: {
                    startAdornment: draft.discountType === "fixed_amount" ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" }) : void 0,
                    endAdornment: draft.discountType === "percentage" ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "%" }) : void 0
                  }
                },
                sx: { width: 104 }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Typography,
            {
              variant: "caption",
              sx: { ...money, display: "block", mt: 0.5 },
              color: after.manual > 0 ? "error.main" : "text.disabled",
              children: [
                after.manual > 0 ? `− ${fCurrency(after.manual)}` : "No manual discount",
                discountChanged && before.manual !== after.manual && before.manual > 0 ? ` (was ${fCurrency(before.manual)})` : ""
              ]
            }
          )
        ] }) }),
        after.delivery > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Delivery", value: after.delivery }),
        after.tax > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Tax", value: after.tax, was: before.tax })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            mt: 2,
            pt: 2,
            borderTop: "1px dashed",
            borderColor: "divider"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "baseline", justifyContent: "space-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: "New total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", sx: money, "aria-live": "polite", children: fCurrency(after.total) })
            ] }),
            Math.abs(delta) > 4e-3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "caption",
                sx: { ...money, display: "block", textAlign: "right" },
                color: delta > 0 ? "warning.main" : "success.main",
                children: [
                  delta > 0 ? "+" : "−",
                  " ",
                  fCurrency(Math.abs(delta)),
                  " vs. ",
                  fCurrency(before.total)
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.75, sx: { mt: 2 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Paid so far", value: after.paid }),
              after.packageCovered > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Covered by package", value: after.packageCovered, tone: "success" }),
              overpaid ? /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Paid over the new total", value: Math.abs(after.balance), tone: "warning" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { label: "Balance due", value: Math.max(after.balance, 0), was: Math.max(before.balance, 0) })
            ] }),
            overpaid && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                spacing: 1,
                sx: {
                  mt: 1.5,
                  p: 1.25,
                  borderRadius: 1,
                  typography: "caption",
                  bgcolor: "warning.lighter",
                  color: "warning.darker"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:restart-bold", width: 16, sx: { flexShrink: 0, mt: "1px" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Customer has paid more than the new total. Saving does not refund the difference." })
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 1.5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", children: [
          "Changes",
          changes.length > 0 ? ` (${changes.length})` : ""
        ] }),
        changes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", color: "inherit", onClick: onDiscardAll, children: "Discard all" })
      ] }),
      changes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Nothing changed yet. Edits stay here until you save them together." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { component: "ul", spacing: 0.75, sx: { m: 0, p: 0, listStyle: "none" }, children: changes.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { component: "li", direction: "row", spacing: 1.25, alignItems: "flex-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              mt: "7px",
              width: 6,
              height: 6,
              flexShrink: 0,
              borderRadius: "50%",
              bgcolor: TONE_COLOR[c.tone] ?? "text.secondary"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: c.text })
      ] }, c.key)) })
    ] }),
    authorization && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", sx: { color: "text.secondary" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:shield-check-bold", width: 16 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: authorization })
    ] })
  ] });
}
Row$1.propTypes = {
  label: o.string,
  value: o.number,
  was: o.number,
  negative: o.bool,
  tone: o.string,
  children: o.node
};
SaleEditLedger.propTypes = {
  before: o.object.isRequired,
  after: o.object.isRequired,
  draft: o.object.isRequired,
  onDiscountChange: o.func.isRequired,
  discountChanged: o.bool,
  changes: o.array.isRequired,
  authorization: o.string,
  onDiscardAll: o.func.isRequired
};
function SaleEditDetails({
  open,
  onToggle,
  draft,
  changed,
  onChange,
  clients,
  clientsLoading,
  employees,
  employeesLoading
}) {
  const clientName = draft.client ? `${draft.client.first_name} ${draft.client.last_name}` : "No client";
  const cashierName = staffName(draft.cashier) || "No cashier";
  const anyChanged = Object.values(changed).some(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { borderRadius: 1.5, border: "1px solid", borderColor: "divider", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      ButtonBase,
      {
        onClick: onToggle,
        "aria-expanded": open,
        sx: {
          px: 2,
          py: 1.5,
          width: 1,
          gap: 1.5,
          justifyContent: "flex-start",
          textAlign: "left"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: "eva:arrow-ios-forward-fill",
              width: 18,
              sx: {
                flexShrink: 0,
                transition: (t) => t.transitions.create("transform", { duration: 150 }),
                transform: open ? "rotate(90deg)" : "none"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Sale details" }),
            !open && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", noWrap: true, component: "div", sx: { textTransform: "capitalize" }, children: [
              clientName,
              " · ",
              cashierName,
              " · ",
              draft.date ? fDate(draft.date) : "—"
            ] })
          ] }),
          anyChanged && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "warning", sx: { height: 20, fontSize: 11 }, children: "Edited" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: open, unmountOnExit: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          px: 2,
          pb: 2,
          pt: 0.5,
          gap: 2,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DateTimePicker,
            {
              label: "Date & time",
              value: draft.date,
              onChange: (v) => onChange({ date: v }),
              slotProps: { textField: { fullWidth: true, size: "small" } }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Autocomplete,
            {
              size: "small",
              options: clients || [],
              loading: clientsLoading,
              value: draft.client,
              onChange: (_, v) => onChange({ client: v }),
              getOptionLabel: (o2) => `${o2.first_name} ${o2.last_name}`,
              isOptionEqualToValue: (o2, v) => o2?.id === v?.id,
              renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { ...params, label: "Client" }),
              renderOption: (props, o2) => {
                const { key, ...rest } = props;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "li", ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { fontWeight: 600, textTransform: "capitalize" }, children: [
                    o2.first_name,
                    " ",
                    o2.last_name
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: [formatPhoneNumberIntl(o2.phone_primary), o2.email].filter(Boolean).join(" · ") || "No contact info" })
                ] }) }, key);
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Autocomplete,
            {
              size: "small",
              options: employees || [],
              loading: employeesLoading,
              value: draft.cashier,
              onChange: (_, v) => onChange({ cashier: v }),
              getOptionLabel: (o2) => o2 ? staffName(o2) : "",
              isOptionEqualToValue: (o2, v) => Boolean(personId(o2)) && personId(o2) === personId(v),
              renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { ...params, label: "Cashier" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              multiline: true,
              minRows: 2,
              size: "small",
              label: "Notes",
              value: draft.notes,
              onChange: (e) => onChange({ notes: e.target.value }),
              sx: { gridColumn: { sm: "1 / -1" } }
            }
          )
        ]
      }
    ) })
  ] });
}
SaleEditDetails.propTypes = {
  open: o.bool,
  onToggle: o.func,
  draft: o.object.isRequired,
  changed: o.object.isRequired,
  onChange: o.func.isRequired,
  clients: o.array,
  clientsLoading: o.bool,
  employees: o.array,
  employeesLoading: o.bool
};
const initialDraft = (sale) => ({
  qty: {},
  removed: {},
  staff: {},
  added: [],
  notes: sale.notes || "",
  date: dayjs(sale.created_at),
  client: sale.client || null,
  cashier: sale.cashier || null,
  discountType: sale.manual_discount_type || "fixed_amount",
  discountValue: Number(sale.manual_discount_value) > 0 ? String(sale.manual_discount_value) : ""
});
let tempCounter = 0;
const nextTempId = () => {
  tempCounter += 1;
  return `new-${tempCounter}`;
};
function useSaleEditDraft({ open, sale }) {
  const [draft, setDraft] = reactExports.useState(null);
  const saleRef = reactExports.useRef(sale);
  saleRef.current = sale;
  reactExports.useEffect(() => {
    if (open && saleRef.current) setDraft(initialDraft(saleRef.current));
    if (!open) setDraft(null);
  }, [open, sale?.id]);
  const reset = reactExports.useCallback(() => {
    if (saleRef.current) setDraft(initialDraft(saleRef.current));
  }, []);
  const patch = reactExports.useCallback((partial) => setDraft((d) => d ? { ...d, ...partial } : d), []);
  const lines = reactExports.useMemo(() => {
    if (!sale || !draft) return [];
    const existing = (sale.items ?? []).filter((item) => !item.deleted_at).map((item) => {
      const origQty = Number(item.quantity);
      const qty = item.id in draft.qty ? draft.qty[item.id] : origQty;
      const staffChanged = item.id in draft.staff;
      const staff = staffChanged ? draft.staff[item.id] : item.stylist_id ? { id: item.stylist_id, display_name: staffName(item.stylist) } : null;
      return {
        key: item.id,
        id: item.id,
        isNew: false,
        kind: item.item_type,
        serviceId: item.service_id || null,
        name: itemName(item),
        sku: item.product_sku || item.product?.sku || null,
        category: item.service_category || item.addon_category || null,
        unitPrice: Number(item.unit_price) || 0,
        origQty,
        qty,
        removed: !!draft.removed[item.id],
        staff,
        staffChanged,
        canQty: canEditQuantity(item),
        canRemove: canRemoveItem(item),
        taxAmount: Number(item.tax_amount) || 0,
        paidViaPackage: !!item.paid_via_package,
        lineTotal: lineTotalFor(item, qty),
        origLineTotal: Number(item.line_total) || 0,
        coveredNote: item.paid_via_package ? "Covered by package" : Number(item.discount_amount) > 0 ? "Discount plan applied" : null
      };
    });
    const added = draft.added.map((a) => ({
      key: a.tempId,
      id: a.tempId,
      isNew: true,
      kind: a.kind,
      serviceId: a.serviceId || null,
      name: a.name,
      sku: a.sku || null,
      category: a.category || null,
      unitPrice: a.unitPrice,
      origQty: 0,
      qty: a.qty,
      removed: false,
      staff: a.staff,
      staffChanged: false,
      canQty: true,
      canRemove: true,
      taxAmount: 0,
      paidViaPackage: false,
      lineTotal: a.unitPrice * a.qty,
      origLineTotal: 0,
      coveredNote: null
    }));
    return [...existing, ...added];
  }, [sale, draft]);
  const before = reactExports.useMemo(() => sale ? totalsFromSale(sale) : null, [sale]);
  const after = reactExports.useMemo(
    () => sale && draft ? computeDraftTotals({
      sale,
      lines,
      discountType: draft.discountType,
      discountValue: draft.discountValue
    }) : null,
    [sale, draft, lines]
  );
  const setLineQty = reactExports.useCallback((line, qty) => {
    const next = Math.max(1, qty);
    setDraft((d) => {
      if (!d) return d;
      if (line.isNew) {
        return { ...d, added: d.added.map((a) => a.tempId === line.id ? { ...a, qty: next } : a) };
      }
      const nextQty = { ...d.qty };
      if (next === line.origQty) delete nextQty[line.id];
      else nextQty[line.id] = next;
      return { ...d, qty: nextQty };
    });
  }, []);
  const removeLine = reactExports.useCallback((line) => {
    setDraft((d) => {
      if (!d) return d;
      if (line.isNew) return { ...d, added: d.added.filter((a) => a.tempId !== line.id) };
      return { ...d, removed: { ...d.removed, [line.id]: true } };
    });
  }, []);
  const restoreLine = reactExports.useCallback((line) => {
    setDraft((d) => {
      if (!d) return d;
      const removed = { ...d.removed };
      delete removed[line.id];
      return { ...d, removed };
    });
  }, []);
  const setLineStaff = reactExports.useCallback(
    (line, staffMember) => {
      const normalized = staffMember ? { id: staffMember.id, display_name: staffName(staffMember) } : null;
      setDraft((d) => {
        if (!d) return d;
        if (line.isNew) {
          return {
            ...d,
            added: d.added.map((a) => a.tempId === line.id ? { ...a, staff: normalized } : a)
          };
        }
        const original = saleRef.current?.items?.find((i) => i.id === line.id)?.stylist_id ?? null;
        const nextStaff = { ...d.staff };
        if ((normalized?.id ?? null) === original) delete nextStaff[line.id];
        else nextStaff[line.id] = normalized;
        return { ...d, staff: nextStaff };
      });
    },
    []
  );
  const addProduct = reactExports.useCallback((product) => {
    setDraft((d) => {
      const s = saleRef.current;
      if (!d || !s) return d;
      const existing = (s.items ?? []).find(
        (i) => !i.deleted_at && i.item_type === "product" && i.product_id === product.id
      );
      if (existing) {
        const removed = { ...d.removed };
        delete removed[existing.id];
        const current = existing.id in d.qty ? d.qty[existing.id] : Number(existing.quantity);
        return {
          ...d,
          removed,
          qty: { ...d.qty, [existing.id]: d.removed[existing.id] ? current : current + 1 }
        };
      }
      const pending = d.added.find((a) => a.kind === "product" && a.productId === product.id);
      if (pending) {
        return {
          ...d,
          added: d.added.map((a) => a === pending ? { ...a, qty: a.qty + 1 } : a)
        };
      }
      return {
        ...d,
        added: [
          ...d.added,
          {
            tempId: nextTempId(),
            kind: "product",
            productId: product.id,
            name: product.name,
            sku: product.sku,
            unitPrice: parseFloat(product.retail_price) || 0,
            qty: 1,
            staff: null
          }
        ]
      };
    });
  }, []);
  const addService = reactExports.useCallback(({ service, price, staffMember }) => {
    setDraft((d) => {
      const s = saleRef.current;
      if (!d || !s) return d;
      const serviceId = service.service_id || service.id;
      const staffId = staffMember?.id || null;
      const existing = (s.items ?? []).find(
        (i) => !i.deleted_at && i.item_type === "service" && i.service_id === serviceId && (i.stylist_id ?? null) === staffId && canEditQuantity(i)
      );
      if (existing && !d.removed[existing.id]) {
        const current = existing.id in d.qty ? d.qty[existing.id] : Number(existing.quantity);
        return { ...d, qty: { ...d.qty, [existing.id]: current + 1 } };
      }
      const pending = d.added.find(
        (a) => a.kind === "service" && a.serviceId === serviceId && (a.staff?.id ?? null) === staffId
      );
      if (pending) {
        return {
          ...d,
          added: d.added.map((a) => a === pending ? { ...a, qty: a.qty + 1 } : a)
        };
      }
      return {
        ...d,
        added: [
          ...d.added,
          {
            tempId: nextTempId(),
            kind: "service",
            serviceId,
            name: service.service_name,
            category: service.category,
            unitPrice: parseFloat(price) || 0,
            qty: 1,
            staff: staffMember ? { id: staffMember.id, display_name: staffName(staffMember) } : null
          }
        ]
      };
    });
  }, []);
  const detailChanges = reactExports.useMemo(() => {
    if (!sale || !draft) return { notes: false, date: false, client: false, cashier: false };
    return {
      notes: (sale.notes || "") !== draft.notes,
      date: !!draft.date && !draft.date.isSame(dayjs(sale.created_at)),
      client: (draft.client?.id ?? null) !== (sale.client?.id ?? sale.client_id ?? null),
      cashier: personId(draft.cashier) !== (sale.cashier_id ?? sale.cashier?.id ?? null)
    };
  }, [sale, draft]);
  const discountChanged = reactExports.useMemo(() => {
    if (!sale || !draft) return false;
    const value = parseFloat(draft.discountValue) || 0;
    const origValue = Number(sale.manual_discount_value) || 0;
    return value !== origValue || value > 0 && draft.discountType !== sale.manual_discount_type;
  }, [sale, draft]);
  const changes = reactExports.useMemo(() => {
    if (!sale || !draft) return [];
    const list = [];
    lines.forEach((l) => {
      if (l.isNew) {
        list.push({
          key: `add-${l.key}`,
          tone: "success",
          text: `Add ${l.name}${l.qty > 1 ? ` ×${l.qty}` : ""}${l.staff ? ` · ${l.staff.display_name}` : ""}`
        });
        return;
      }
      if (l.removed) {
        list.push({ key: `rm-${l.key}`, tone: "error", text: `Remove ${l.name}` });
        return;
      }
      if (l.qty !== l.origQty) {
        list.push({
          key: `qty-${l.key}`,
          tone: "info",
          text: `${l.name}: quantity ${l.origQty} → ${l.qty}`
        });
      }
      if (l.staffChanged) {
        list.push({
          key: `staff-${l.key}`,
          tone: "info",
          text: `${l.name}: staff → ${l.staff?.display_name || "none"}`
        });
      }
    });
    if (discountChanged) {
      const value = parseFloat(draft.discountValue) || 0;
      const fmt = (type, v) => type === "percentage" ? `${v}%` : fCurrency(v);
      const was = Number(sale.manual_discount_value) > 0 ? fmt(sale.manual_discount_type, Number(sale.manual_discount_value)) : "none";
      const now = value > 0 ? fmt(draft.discountType, value) : "none";
      list.push({ key: "discount", tone: "info", text: `Discount: ${was} → ${now}` });
    }
    if (detailChanges.client) {
      list.push({
        key: "client",
        tone: "info",
        text: `Client → ${draft.client ? `${draft.client.first_name} ${draft.client.last_name}` : "none"}`
      });
    }
    if (detailChanges.cashier) {
      list.push({ key: "cashier", tone: "info", text: `Cashier → ${staffName(draft.cashier) || "none"}` });
    }
    if (detailChanges.date) list.push({ key: "date", tone: "info", text: "Sale date & time" });
    if (detailChanges.notes) list.push({ key: "notes", tone: "info", text: "Notes" });
    return list;
  }, [sale, draft, lines, discountChanged, detailChanges]);
  const itemsTouched = reactExports.useMemo(
    () => lines.some((l) => l.isNew || l.removed || l.qty !== l.origQty || l.staffChanged),
    [lines]
  );
  const apply = reactExports.useCallback(
    async ({ userId }) => {
      const s = saleRef.current;
      if (!s || !draft) return { failures: [], applied: 0 };
      const failures = [];
      let applied = 0;
      const run = async (label, fn) => {
        const { error } = await fn();
        if (error) failures.push(label);
        else applied += 1;
      };
      for (const l of lines.filter((x) => !x.isNew && x.removed)) {
        await run(
          `Remove ${l.name}`,
          () => removeSaleItemExistingSale(l.id, s.id, {}, userId, s.sale_number)
        );
      }
      for (const l of lines.filter((x) => !x.isNew && !x.removed && x.qty !== x.origQty)) {
        await run(`Quantity of ${l.name}`, () => updateSaleItemQuantity(l.id, l.qty, userId));
      }
      for (const l of lines.filter((x) => !x.isNew && !x.removed && x.staffChanged)) {
        await run(`Staff on ${l.name}`, () => updateSaleItemStylist(l.id, l.staff?.id ?? null, s.id));
      }
      for (const l of lines.filter((x) => x.isNew)) {
        const base = l.kind === "product" ? {
          item_type: "product",
          product_id: draft.added.find((a) => a.tempId === l.id)?.productId,
          product_name: l.name,
          product_sku: l.sku
        } : {
          item_type: "service",
          service_id: draft.added.find((a) => a.tempId === l.id)?.serviceId,
          service_name: l.name,
          service_category: l.category
        };
        await run(
          `Add ${l.name}`,
          () => addSaleItemExistingSale(
            s.id,
            {
              ...base,
              stylist_id: l.staff?.id || null,
              quantity: l.qty,
              unit_price: l.unitPrice,
              line_total: l.unitPrice * l.qty
            },
            userId
          )
        );
      }
      if (Object.values(detailChanges).some(Boolean)) {
        await run(
          "Sale details",
          () => updateSaleDetails(s.id, {
            notes: draft.notes || null,
            created_at: draft.date ? draft.date.toISOString() : void 0,
            client_id: draft.client?.id || null,
            cashier_id: personId(draft.cashier)
          })
        );
      }
      const hadManual = Number(s.manual_discount_amount) > 0;
      if (discountChanged || itemsTouched && (hadManual || parseFloat(draft.discountValue) > 0)) {
        await run(
          "Discount",
          () => updateSaleManualDiscount(s.id, {
            type: draft.discountType,
            value: parseFloat(draft.discountValue) || 0
          })
        );
      }
      return { failures, applied };
    },
    [draft, lines, detailChanges, discountChanged, itemsTouched]
  );
  return {
    ready: !!draft,
    draft,
    lines,
    before,
    after,
    changes,
    isDirty: changes.length > 0,
    discountChanged,
    detailChanges,
    patch,
    reset,
    apply,
    setLineQty,
    removeLine,
    restoreLine,
    setLineStaff,
    addProduct,
    addService
  };
}
const MAX_RESULTS = 40;
function SaleEditCatalogSearch({ products, services, loading, onPickProduct, onPickService }) {
  const [input, setInput] = reactExports.useState("");
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = document.activeElement;
      const typing = el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
      if (typing) return;
      e.preventDefault();
      inputRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  const options = reactExports.useMemo(() => {
    const svc = (services ?? []).map((s) => {
      const prices = [s.junior_price, s.senior_price, s.prive_price].map(Number).filter((n) => n > 0);
      return {
        kind: "service",
        group: "Services",
        id: `s-${s.service_id || s.id}`,
        label: s.service_name || "",
        meta: s.category || "",
        search: `${s.service_name} ${s.category}`.toLowerCase(),
        price: prices.length ? Math.min(...prices) : null,
        raw: s
      };
    });
    const prod = (products ?? []).map((p) => ({
      kind: "product",
      group: "Products",
      id: `p-${p.id}`,
      label: p.name || "",
      meta: p.sku ? `SKU ${p.sku}` : "",
      search: `${p.name} ${p.sku}`.toLowerCase(),
      price: Number(p.retail_price) || 0,
      stock: p.totalAvailable ?? 0,
      raw: p
    }));
    return [...svc, ...prod];
  }, [products, services]);
  const filterOptions = (opts, { inputValue }) => {
    const q = inputValue.trim().toLowerCase();
    const matched = q ? opts.filter((o2) => o2.search.includes(q)) : opts;
    return matched.slice(0, MAX_RESULTS);
  };
  const handlePick = (option) => {
    if (!option) return;
    setInput("");
    if (option.kind === "product") onPickProduct(option.raw);
    else onPickService(option.raw);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Autocomplete,
    {
      fullWidth: true,
      value: null,
      inputValue: input,
      onInputChange: (_, v) => setInput(v),
      options,
      loading,
      groupBy: (o2) => o2.group,
      getOptionLabel: (o2) => o2.label,
      getOptionKey: (o2) => o2.id,
      filterOptions,
      getOptionDisabled: (o2) => o2.kind === "product" && !(o2.stock > 0),
      onChange: (_, option) => handlePick(option),
      noOptionsText: "No product or service matches",
      loadingText: "Loading catalog…",
      blurOnSelect: false,
      slotProps: { paper: { sx: { boxShadow: (t) => t.customShadows?.dropdown } } },
      renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          ...params,
          inputRef: (el) => {
            inputRef.current = el;
            const { ref } = params.inputProps;
            if (typeof ref === "function") ref(el);
            else if (ref) ref.current = el;
          },
          placeholder: "Add a product or service — start typing, or press /",
          slotProps: {
            input: {
              ...params.InputProps,
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill", sx: { color: "text.disabled" } }) }),
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16, sx: { mr: 1 } }) : null,
                params.InputProps.endAdornment
              ] })
            }
          }
        }
      ),
      renderOption: (props, option) => {
        const { key, ...rest } = props;
        const outOfStock = option.kind === "product" && !(option.stock > 0);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "li", ...rest, sx: { py: "8px !important" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, sx: { width: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", noWrap: true, sx: { fontWeight: "fontWeightMedium" }, children: option.label }),
            option.meta && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, component: "div", children: option.meta })
          ] }),
          option.kind === "product" && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: outOfStock ? "error" : "success", sx: { height: 20, fontSize: 11 }, children: outOfStock ? "Out of stock" : `${option.stock} in stock` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              variant: "body2",
              sx: { minWidth: 72, textAlign: "right", fontVariantNumeric: "tabular-nums" },
              children: option.price == null ? "" : `${option.kind === "service" ? "from " : ""}${fCurrency(option.price)}`
            }
          )
        ] }) }, key);
      }
    }
  );
}
SaleEditCatalogSearch.propTypes = {
  loading: o.bool,
  products: o.array,
  services: o.array,
  onPickProduct: o.func.isRequired,
  onPickService: o.func.isRequired
};
function SaleEditDialog({ open, onClose, sale, branchId, authorization }) {
  const theme = useTheme();
  const fullScreen = !useMediaQuery(theme.breakpoints.up("md"));
  const { user } = useAuthContext();
  const edit = useSaleEditDraft({ open, sale });
  const { draft, lines, before, after } = edit;
  const [saving, setSaving] = reactExports.useState(false);
  const [detailsOpen, setDetailsOpen] = reactExports.useState(false);
  const [confirmDiscard, setConfirmDiscard] = reactExports.useState(false);
  const [pendingService, setPendingService] = reactExports.useState(null);
  const [staffLine, setStaffLine] = reactExports.useState(null);
  const [employees, setEmployees] = reactExports.useState([]);
  const [employeesLoading, setEmployeesLoading] = reactExports.useState(false);
  const { products, productsLoading } = useGetProducts({ branchId, pageSize: 200 });
  const { services, servicesLoading } = useGetBranchServices(branchId, {
    filters: { pageSize: 200 }
  });
  const { clients, clientsLoading } = useClientList();
  reactExports.useEffect(() => {
    if (!open) {
      setDetailsOpen(false);
      setConfirmDiscard(false);
      return void 0;
    }
    if (!branchId) return void 0;
    let active = true;
    setEmployeesLoading(true);
    getBranchEmployees({ branchId }).then(({ data, error }) => {
      if (!active) return;
      if (!error && data) setEmployees(data);
      setEmployeesLoading(false);
    });
    return () => {
      active = false;
    };
  }, [open, branchId]);
  const handlePickProduct = (product) => {
    if (!(product.totalAvailable > 0)) {
      toast.error(`${product.name} is out of stock`);
      return;
    }
    edit.addProduct(product);
  };
  const handleServiceConfirm = ({ service, price, staffMember }) => {
    setPendingService(null);
    edit.addService({ service, price, staffMember });
  };
  const handleStaffConfirm = (staffMember) => {
    if (staffLine) edit.setLineStaff(staffLine, staffMember);
    setStaffLine(null);
  };
  const handleRequestClose = () => {
    if (saving) return;
    if (edit.isDirty) setConfirmDiscard(true);
    else onClose();
  };
  const handleSave = async () => {
    if (!edit.isDirty || saving) return;
    if (draft.discountType === "percentage" && parseFloat(draft.discountValue) > 100) {
      toast.error("A percentage discount cannot exceed 100%");
      return;
    }
    setSaving(true);
    const toastId = toast.loading(`Saving ${edit.changes.length} change${edit.changes.length > 1 ? "s" : ""}…`);
    const { failures } = await edit.apply({ userId: user?.id });
    toast.dismiss(toastId);
    setSaving(false);
    if (failures.length === 0) {
      toast.success("Sale updated");
    } else {
      toast.error(
        `Some changes could not be saved: ${failures.slice(0, 3).join(", ")}${failures.length > 3 ? "…" : ""}. Review the sale before editing again.`
      );
    }
    onClose();
  };
  if (!sale) return null;
  const staffItemName = staffLine?.name || null;
  const isCommissionLine = staffLine && (staffLine.kind === "product" || staffLine.kind === "addon");
  const serviceForStaff = staffLine && !isCommissionLine ? (services || []).find((s) => s.service_id === staffLine.serviceId || s.id === staffLine.serviceId) || (services || []).find((s) => s.service_name === staffLine.name) || null : null;
  const delta = draft && after && before ? after.total - before.total : 0;
  const detailsChanged = edit.detailChanges;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Dialog,
      {
        open,
        onClose: handleRequestClose,
        fullScreen,
        maxWidth: "lg",
        fullWidth: true,
        slotProps: {
          paper: { sx: { height: { md: "min(820px, 92vh)" } } }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { sx: { pb: 2, borderBottom: "1px solid", borderColor: "divider" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h6", noWrap: true, children: [
                  "Edit ",
                  sale.sale_number
                ] }),
                edit.isDirty && /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { color: "warning", children: [
                  edit.changes.length,
                  " unsaved change",
                  edit.changes.length > 1 ? "s" : ""
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "body2",
                  color: "text.secondary",
                  noWrap: true,
                  sx: { textTransform: "capitalize", fontWeight: "fontWeightRegular" },
                  children: [
                    sale.client ? `${sale.client.first_name} ${sale.client.last_name}` : "Walk-in",
                    sale.branch?.name ? ` · ${sale.branch.name}` : ""
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: handleRequestClose, "aria-label": "Close editor", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DialogContent,
            {
              sx: {
                p: 0,
                display: "grid",
                overflow: { xs: "auto", md: "hidden" },
                gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 380px" }
              },
              children: draft ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    spacing: 2.5,
                    sx: { p: { xs: 2, md: 3 }, overflowY: { md: "auto" }, minWidth: 0 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SaleEditCatalogSearch,
                        {
                          products,
                          services,
                          loading: productsLoading || servicesLoading,
                          onPickProduct: handlePickProduct,
                          onPickService: setPendingService
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SaleEditLines,
                        {
                          lines,
                          onQty: edit.setLineQty,
                          onRemove: edit.removeLine,
                          onRestore: edit.restoreLine,
                          onStaff: setStaffLine
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SaleEditDetails,
                        {
                          open: detailsOpen,
                          onToggle: () => setDetailsOpen((v) => !v),
                          draft,
                          changed: detailsChanged,
                          onChange: edit.patch,
                          clients,
                          clientsLoading,
                          employees,
                          employeesLoading
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      minWidth: 0,
                      overflowY: { md: "auto" },
                      bgcolor: "background.neutral",
                      borderTop: { xs: "1px solid", md: 0 },
                      borderLeft: { md: "1px solid" },
                      borderColor: "divider"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SaleEditLedger,
                      {
                        before,
                        after,
                        draft,
                        onDiscountChange: edit.patch,
                        discountChanged: edit.discountChanged,
                        changes: edit.changes,
                        authorization,
                        onDiscardAll: edit.reset
                      }
                    )
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { gridColumn: "1 / -1", py: 10, display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 28 }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DialogActions,
            {
              sx: { px: 3, py: 2, gap: 1, borderTop: "1px solid", borderColor: "divider" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1, minWidth: 0, display: { xs: "block", md: "none" } }, children: after && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { fontVariantNumeric: "tabular-nums" }, children: fCurrency(after.total) }),
                  Math.abs(delta) > 4e-3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Typography,
                    {
                      variant: "caption",
                      color: delta > 0 ? "warning.main" : "success.main",
                      sx: { fontVariantNumeric: "tabular-nums" },
                      children: [
                        delta > 0 ? "+" : "−",
                        " ",
                        fCurrency(Math.abs(delta))
                      ]
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1, display: { xs: "none", md: "block" } } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "inherit", variant: "outlined", onClick: handleRequestClose, disabled: saving, children: edit.isDirty ? "Cancel" : "Close" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "contained",
                    onClick: handleSave,
                    disabled: !edit.isDirty || saving,
                    startIcon: saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16, color: "inherit" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:diskette-bold" }),
                    children: edit.isDirty ? `Save ${edit.changes.length} change${edit.changes.length > 1 ? "s" : ""}` : "Save changes"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: confirmDiscard, onClose: () => setConfirmDiscard(false), maxWidth: "xs", fullWidth: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Discard unsaved changes?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContentText, { children: [
        edit.changes.length,
        " change",
        edit.changes.length > 1 ? "s have" : " has",
        " not been saved and will be lost."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "inherit", onClick: () => setConfirmDiscard(false), children: "Keep editing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "error",
            variant: "contained",
            onClick: () => {
              setConfirmDiscard(false);
              onClose();
            },
            children: "Discard"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosServiceStylistSelectionDialog,
      {
        open: !!pendingService,
        service: pendingService,
        branchId,
        onClose: () => setPendingService(null),
        onConfirm: handleServiceConfirm
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosServiceStylistSelectionDialog,
      {
        open: !!staffLine && !isCommissionLine,
        service: serviceForStaff,
        branchId,
        onClose: () => setStaffLine(null),
        onConfirm: ({ staffMember }) => handleStaffConfirm(staffMember)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PosProductStylistSelectDialog,
      {
        open: !!staffLine && !!isCommissionLine,
        itemName: staffItemName,
        itemPrice: staffLine?.unitPrice ?? null,
        itemKind: staffLine?.kind === "addon" ? "addon" : "product",
        branchId,
        onClose: () => setStaffLine(null),
        onConfirm: handleStaffConfirm,
        mode: "reassign",
        initialStaff: staffLine?.staff ?? null
      }
    )
  ] });
}
SaleEditDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  sale: o.object,
  branchId: o.string,
  authorization: o.string
};
const REWARD_LABELS = {
  discount_coupon: "Reward coupon",
  free_service: "Free service",
  free_addon: "Free add-on",
  product_voucher: "Product voucher"
};
function Row({ label, hint, value, tone, sign, strong, sx }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: [
        {
          gap: 3,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between"
        },
        ...Array.isArray(sx) ? sx : [sx]
      ],
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", sx: { color: strong ? "text.primary" : "text.secondary", minWidth: 0 }, children: [
          label,
          hint && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", sx: { ml: 1, typography: "caption", color: "text.disabled" }, children: hint })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            component: "span",
            sx: {
              flexShrink: 0,
              textAlign: "right",
              fontVariantNumeric: "tabular-nums",
              fontWeight: strong ? "fontWeightBold" : "fontWeightMedium",
              color: tone ? `${tone}.main` : "text.primary"
            },
            children: [
              sign,
              fCurrency(value)
            ]
          }
        )
      ]
    }
  );
}
Row.propTypes = {
  sx: o.any,
  hint: o.string,
  sign: o.string,
  tone: o.string,
  strong: o.bool,
  label: o.node,
  value: o.number
};
function SaleTotalSummary({
  sx,
  taxes,
  shipping,
  subtotal,
  discount,
  discountCode,
  voucherAmount,
  voucher,
  totalAmount,
  manual_discount_amount,
  amount_paid,
  manual_discount_value,
  manual_discount_type,
  cashbackRedemptionAmount,
  rewardRedemption,
  deliveryCharge,
  deliveryMethod,
  items,
  planUsages,
  ...other
}) {
  const packageCoveredAmount = (items ?? []).reduce(
    (sum, item) => sum + (item.paid_via_package ? item.line_total ?? 0 : 0),
    0
  );
  const planDiscountsByName = (planUsages ?? []).reduce((acc, u) => {
    const name = u.client_discount_plans?.discount_plan_templates?.name ?? "Discount plan";
    acc[name] = (acc[name] ?? 0) + Number(u.discount_amount ?? 0);
    return acc;
  }, {});
  const planDiscountEntries = Object.entries(planDiscountsByName);
  const paid = Number(amount_paid) || 0;
  const total = Number(totalAmount) || 0;
  const remaining = total - paid - packageCoveredAmount;
  const settled = total > 0 && remaining <= 4e-3;
  const rewardLabel = rewardRedemption ? `${REWARD_LABELS[rewardRedemption.rewards_catalog?.type] ?? "Reward"}: ${rewardRedemption.rewards_catalog?.name ?? rewardRedemption.redeem_code}` : null;
  const manualHint = manual_discount_type === "percentage" && manual_discount_value ? `${manual_discount_value}%` : void 0;
  const hasReductions = !!discountCode || !!rewardRedemption || !!voucher || (cashbackRedemptionAmount ?? 0) > 0 || Number(manual_discount_amount) > 0 || planDiscountEntries.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: [
        {
          mt: 3,
          mb: 5,
          ml: "auto",
          width: 1,
          maxWidth: 380,
          gap: 1.25,
          display: "flex",
          typography: "body2",
          flexDirection: "column"
        },
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...other,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Subtotal", value: Number(subtotal) || 0 }),
        hasReductions && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          discountCode && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Row,
            {
              label: `Code ${discountCode.code}`,
              hint: discountCode.name,
              value: Number(discount) || 0,
              sign: "− ",
              tone: "error"
            }
          ),
          rewardRedemption && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: rewardLabel, value: Number(discount) || 0, sign: "− ", tone: "error" }),
          voucher && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Row,
            {
              label: `Voucher ${voucher.code}`,
              value: Number(voucherAmount) || 0,
              sign: "− ",
              tone: "error"
            }
          ),
          (cashbackRedemptionAmount ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Row,
            {
              label: "Cashback redeemed",
              value: Number(cashbackRedemptionAmount),
              sign: "− ",
              tone: "error"
            }
          ),
          Number(manual_discount_amount) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Row,
            {
              label: "Discount",
              hint: manualHint,
              value: Number(manual_discount_amount),
              sign: "− ",
              tone: "error"
            }
          ),
          planDiscountEntries.map(([name, amount]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Row,
            {
              label: `Plan: ${name}`,
              hint: "already in prices",
              value: amount,
              tone: "info"
            },
            name
          ))
        ] }),
        shipping ? /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Shipping", value: Number(shipping), sign: "− ", tone: "error" }) : null,
        deliveryCharge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Row,
          {
            label: "Delivery",
            hint: deliveryMethod || void 0,
            value: Number(deliveryCharge)
          }
        ),
        Number(taxes) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Tax", value: Number(taxes) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed", my: 0.5 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Total", value: total, strong: true, sx: { typography: "h6", alignItems: "center" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: 1, gap: 1.25, display: "flex", flexDirection: "column" }, children: [
          paid > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Paid", value: paid }),
          packageCoveredAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Covered by package", value: packageCoveredAmount, tone: "success" }),
          settled ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "success", children: "Paid in full" }) }) : remaining > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Balance due", value: remaining, strong: true, tone: "warning" })
        ] })
      ]
    }
  );
}
SaleTotalSummary.propTypes = {
  sx: o.any,
  taxes: o.number,
  shipping: o.number,
  subtotal: o.number,
  discount: o.number,
  discountCode: o.object,
  voucherAmount: o.number,
  voucher: o.object,
  totalAmount: o.number,
  manual_discount_amount: o.number,
  amount_paid: o.number,
  manual_discount_value: o.number,
  manual_discount_type: o.string,
  cashbackRedemptionAmount: o.number,
  rewardRedemption: o.object,
  deliveryCharge: o.number,
  deliveryMethod: o.string,
  items: o.array,
  planUsages: o.array
};
export {
  ITEMS_COLUMN_SHOW_LIMIT as I,
  PrintReceiptButton as P,
  SaleTotalSummary as S,
  getItemFullName as a,
  getItemColor as b,
  InvoicePDFDownload as c,
  InvoicePDFViewer as d,
  ITEM_TYPE_LABELS as e,
  SaleEditDialog as f,
  getItemLabel as g
};
