import { c as _coercedNumber, g as _coercedDate, Z as ZodNumber, h as ZodDate } from "./schemas-BVeYYbTr.js";
function number(params) {
  return _coercedNumber(ZodNumber, params);
}
function date(params) {
  return _coercedDate(ZodDate, params);
}
export {
  date as d,
  number as n
};
