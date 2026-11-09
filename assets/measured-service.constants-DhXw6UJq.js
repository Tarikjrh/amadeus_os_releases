const DEFAULT_MEASURE_UNIT_LABEL = "unit";
const DEFAULT_MEASURE_STEP = 0.5;
const DEFAULT_MEASURE_AMOUNT = 1;
const MEASURE_DECIMALS = 3;
const MEASURE_QUICK_AMOUNTS = [0.5, 1, 1.5, 2, 3];
const MEASURE_UNIT_OPTIONS = [
  { value: "unit", label: "Unit" },
  { value: "scoop", label: "Scoop" },
  { value: "tube", label: "Tube" },
  { value: "gram", label: "Gram" },
  { value: "ml", label: "Millilitre" },
  { value: "sachet", label: "Sachet" }
];
const MEASURE_STEP_OPTIONS = [0.1, 0.25, 0.5, 1];
export {
  DEFAULT_MEASURE_UNIT_LABEL as D,
  MEASURE_DECIMALS as M,
  DEFAULT_MEASURE_AMOUNT as a,
  DEFAULT_MEASURE_STEP as b,
  MEASURE_UNIT_OPTIONS as c,
  MEASURE_STEP_OPTIONS as d,
  MEASURE_QUICK_AMOUNTS as e
};
