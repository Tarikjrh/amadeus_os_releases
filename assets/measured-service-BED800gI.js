import { D as DEFAULT_MEASURE_UNIT_LABEL, a as DEFAULT_MEASURE_AMOUNT, b as DEFAULT_MEASURE_STEP, M as MEASURE_DECIMALS } from "./measured-service.constants-DhXw6UJq.js";
function isMeasuredService(service) {
  return !!service?.is_measured;
}
function isMeasuredItem(item) {
  return item?.item_type === "service" && item?.measure_quantity != null;
}
function getMeasureUnitLabel(source) {
  return source?.measure_unit_label || DEFAULT_MEASURE_UNIT_LABEL;
}
function getMeasureStep(service) {
  const step = parseFloat(service?.measure_step);
  return Number.isFinite(step) && step > 0 ? step : DEFAULT_MEASURE_STEP;
}
function getMeasureDefaultAmount(service) {
  const amount = parseFloat(service?.measure_default);
  return Number.isFinite(amount) && amount > 0 ? amount : DEFAULT_MEASURE_AMOUNT;
}
function roundMeasure(amount) {
  return parseFloat(Number(amount).toFixed(MEASURE_DECIMALS));
}
function measuredUnitPrice(amount, pricePerUnit) {
  const total = (parseFloat(amount) || 0) * (parseFloat(pricePerUnit) || 0);
  return parseFloat(total.toFixed(2));
}
function formatMeasureAmount(amount, unitLabel) {
  const value = parseFloat(amount) || 0;
  const printed = String(roundMeasure(value));
  const label = unitLabel || DEFAULT_MEASURE_UNIT_LABEL;
  return `${printed} ${value === 1 ? label : `${label}s`}`;
}
function formatMeasureSummary(item) {
  if (!isMeasuredItem(item)) return null;
  return `${formatMeasureAmount(item.measure_quantity, item.measure_unit_label)} × $${(parseFloat(item.measure_unit_price) || 0).toFixed(2)}`;
}
export {
  isMeasuredService as a,
  getMeasureDefaultAmount as b,
  getMeasureStep as c,
  formatMeasureAmount as d,
  formatMeasureSummary as f,
  getMeasureUnitLabel as g,
  isMeasuredItem as i,
  measuredUnitPrice as m,
  roundMeasure as r
};
