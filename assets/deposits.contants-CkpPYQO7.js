const PAYMENT_METHOD_OPTIONS = [
  { value: "cash", label: "Cash" },
  { value: "credit_card", label: "Credit Card" },
  { value: "debit_card", label: "Debit Card" },
  { value: "mobile_payment", label: "Mobile Payment" },
  { value: "bank_transfer", label: "Bank Transfer" }
];
const DEPOSIT_STATUS_COLOR = {
  held: "warning",
  applied: "success",
  refunded: "error",
  forfeited: "default"
};
const DEPOSIT_STATUS_LABEL = {
  held: "Held",
  applied: "Applied to Sale",
  refunded: "Refunded",
  forfeited: "Forfeited"
};
const STATUS_TABS = [
  { value: "all", label: "All" },
  { value: "appointment_deposits", label: "Appointment Deposits" },
  { value: "held", label: "Held" },
  { value: "applied", label: "Applied" },
  { value: "refunded", label: "Refunded" },
  { value: "forfeited", label: "Forfeited" },
  { value: "packages", label: "Package Deposits" },
  { value: "discount_plans", label: "Discount Plan Deposits" }
];
const PACKAGE_STATUS_COLOR = {
  active: "success",
  expired: "default",
  cancelled: "error",
  paused: "warning"
};
const PACKAGE_COMMISSION_COLOR = {
  finalized: "success",
  pending: "warning"
};
const DISCOUNT_PLAN_STATUS_COLOR = {
  active: "success",
  expired: "default",
  cancelled: "error",
  paused: "warning"
};
export {
  DEPOSIT_STATUS_LABEL as D,
  PACKAGE_STATUS_COLOR as P,
  STATUS_TABS as S,
  DEPOSIT_STATUS_COLOR as a,
  DISCOUNT_PLAN_STATUS_COLOR as b,
  PACKAGE_COMMISSION_COLOR as c,
  PAYMENT_METHOD_OPTIONS as d
};
