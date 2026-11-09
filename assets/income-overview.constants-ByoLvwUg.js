const ITEM_TYPE_LABELS = {
  service: "Service",
  product: "Product",
  package: "Package",
  addon: "Add-on",
  discount_plan_deposit: "Discount Plan",
  discount_plan_unused_revenue: "Unused Plan Revenue",
  package_deposit: "Package Deposit"
};
const ITEM_TYPE_COLOR = {
  service: "info",
  product: "success",
  package: "warning",
  addon: "warning",
  discount_plan_unused_revenue: "secondary"
};
const PAYMENT_METHOD_LABELS = {
  cash: "Cash",
  credit_card: "Credit Card",
  debit_card: "Debit Card",
  mobile_payment: "Mobile Payment",
  bank_transfer: "Bank Transfer",
  gift_card: "Gift Card",
  loyalty_points: "Loyalty Points",
  other: "Other"
};
const PAYMENT_METHOD_COLORS = {
  cash: "#22C55E",
  credit_card: "#3B82F6",
  debit_card: "#6366F1",
  mobile_payment: "#F59E0B",
  bank_transfer: "#14B8A6",
  gift_card: "#EC4899",
  loyalty_points: "#8B5CF6",
  other: "#94A3B8"
};
const STATUS_COLOR = {
  completed: "success",
  pending: "warning",
  cancelled: "error",
  refunded: "error",
  partially_refunded: "warning",
  forfeited: "default"
};
const TRANSACTION_TABS = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "pending", label: "Pending" },
  { value: "refunded", label: "Refunded" },
  { value: "cancelled", label: "Cancelled" },
  { value: "forfeited_deposits", label: "Forfeited Deposits" }
];
const TREND_PERIOD_OPTIONS = [
  { value: 3, label: "Last 3 months" },
  { value: 6, label: "Last 6 months" },
  { value: 12, label: "Last 12 months" },
  { value: 24, label: "Last 24 months" }
];
export {
  ITEM_TYPE_COLOR as I,
  PAYMENT_METHOD_LABELS as P,
  STATUS_COLOR as S,
  TRANSACTION_TABS as T,
  ITEM_TYPE_LABELS as a,
  TREND_PERIOD_OPTIONS as b,
  PAYMENT_METHOD_COLORS as c
};
