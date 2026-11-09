const clientTagsOptions = [
  { value: "vip", label: "VIP" },
  { value: "new_client", label: "New Client" },
  { value: "regular", label: "Regular" },
  { value: "color_client", label: "Color Client" },
  { value: "bridal", label: "Bridal" },
  { value: "celebrity", label: "Celebrity" },
  { value: "influencer", label: "Influencer" },
  { value: "referral_source", label: "Referral Source" },
  { value: "loyal_customer", label: "Loyal Customer" },
  { value: "high_spender", label: "High Spender" },
  { value: "problematic", label: "Problematic" },
  { value: "allergic", label: "Allergic" },
  { value: "pregnant", label: "Pregnant" },
  { value: "senior", label: "Senior" },
  { value: "student", label: "Student" },
  { value: "corporate", label: "Corporate" }
];
const referralOptions = [
  { value: "word_of_mouth", label: "Word of Mouth" },
  { value: "social_media", label: "Social Media" },
  { value: "website", label: "Website" },
  { value: "referral", label: "Referral" },
  { value: "advertisement", label: "Advertisement" },
  { value: "walk_in", label: "Walk-in" },
  { value: "other", label: "Other" }
];
const maritalStatusOptions = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
  { value: "separated", label: "Separated" },
  { value: "prefer_not_to_say", label: "Prefer not to say" }
];
const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "non_binary", label: "Non-binary" },
  { value: "prefer_not_to_say", label: "Prefer not to say" }
];
const HAIR_COLOR_MAP = {
  black: "#1a1a1a",
  "dark brown": "#3b1f0e",
  brown: "#6b3a2a",
  "light brown": "#9b6347",
  auburn: "#8b2500",
  chestnut: "#7b3f2b",
  red: "#c0392b",
  copper: "#b87333",
  strawberry: "#e8856a",
  blonde: "#f5d77e",
  "dark blonde": "#c9a84c",
  "light blonde": "#faf0be",
  platinum: "#f2efe9",
  white: "#f5f5f5",
  gray: "#9e9e9e",
  grey: "#9e9e9e",
  silver: "#c0c0c0",
  pink: "#f48fb1",
  purple: "#9c27b0",
  blue: "#1565c0",
  green: "#2e7d32",
  teal: "#00796b",
  orange: "#e65100",
  balayage: "#d4a96a",
  ombre: "#a0785a",
  highlighted: "#e8d5a3"
};
const LIGHT_COLORS = /* @__PURE__ */ new Set(["platinum", "white", "light blonde", "highlighted"]);
const TEXTURE_OPTIONS = [
  { key: "fine", label: "Fine", icon: "carbon:chart-area-smooth" },
  { key: "medium", label: "Medium", icon: "meteor-icons:wave" },
  { key: "coarse", label: "Coarse", icon: "mingcute:wave-fill" },
  { key: "straight", label: "Straight", icon: "solar:align-left-bold" },
  { key: "wavy", label: "Wavy", icon: "solar:wind-bold" },
  { key: "curly", label: "Curly", icon: "solar:refresh-circle-bold" }
  //   { key: 'coily', label: 'Coily', icon: 'game-icons:spring' },
  //   { key: 'kinky', label: 'Kinky', icon: 'cbi:nanoleaf-ropelight' },
];
const LENGTH_SCALE = [
  "buzz",
  "short",
  "ear",
  "chin",
  "shoulder",
  "medium",
  "bra_strap",
  "long",
  "waist",
  "extra_long",
  "floor"
];
const LENGTH_LABELS = {
  buzz: "Buzz",
  short: "Short",
  ear: "Ear",
  chin: "Chin",
  shoulder: "Shoulder",
  medium: "Medium",
  bra_strap: "Bra Strap",
  long: "Long",
  waist: "Waist",
  extra_long: "Extra Long",
  floor: "Floor"
};
const DENSITY_CONFIG = {
  fine: { label: "Fine", fill: 1, color: "#90caf9" },
  thin: { label: "Thin", fill: 1, color: "#90caf9" },
  light: { label: "Light", fill: 2, color: "#64b5f6" },
  medium: { label: "Medium", fill: 3, color: "#42a5f5" },
  thick: { label: "Thick", fill: 4, color: "#1e88e5" },
  coarse: { label: "Coarse", fill: 5, color: "#1565c0" }
};
const POROSITY_CONFIG = {
  low: { label: "Low", description: "Resists moisture", score: 1, color: "#4caf50" },
  normal: { label: "Normal", description: "Balanced", score: 2, color: "#ff9800" },
  medium: { label: "Medium", description: "Balanced", score: 2, color: "#ff9800" },
  high: { label: "High", description: "Absorbs quickly", score: 3, color: "#f44336" }
};
const SCALP_CONFIG = {
  normal: { color: "success", label: "Normal" },
  dry: { color: "warning", label: "Dry" },
  oily: { color: "info", label: "Oily" },
  sensitive: { color: "error", label: "Sensitive" },
  combination: { color: "secondary", label: "Combination" },
  dandruff: { color: "error", label: "Dandruff" },
  psoriasis: { color: "error", label: "Psoriasis" },
  flaky: { color: "warning", label: "Flaky" }
};
const FALLBACK_HAIR_COLOR = "#bdbdbd";
function resolveHairColor(colorStr) {
  if (!colorStr) return null;
  const lower = colorStr.toLowerCase().trim();
  const keys = Object.keys(HAIR_COLOR_MAP).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (lower.includes(key)) return HAIR_COLOR_MAP[key];
  }
  return FALLBACK_HAIR_COLOR;
}
function isLightHairColor(hex) {
  if (!hex) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 186;
}
export {
  DENSITY_CONFIG as D,
  HAIR_COLOR_MAP as H,
  LENGTH_SCALE as L,
  POROSITY_CONFIG as P,
  SCALP_CONFIG as S,
  TEXTURE_OPTIONS as T,
  LENGTH_LABELS as a,
  LIGHT_COLORS as b,
  clientTagsOptions as c,
  resolveHairColor as d,
  genderOptions as g,
  isLightHairColor as i,
  maritalStatusOptions as m,
  referralOptions as r
};
