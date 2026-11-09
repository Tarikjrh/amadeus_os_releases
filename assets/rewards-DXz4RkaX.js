import { c0 as useGetProductCatalog, r as reactExports, j as jsxRuntimeExports, S as Stack, x as Select, M as MenuItem, B as Box, c as Typography, a8 as FormControlLabel, at as Switch, d as Button, t as toast, f as r, a as Iconify, T as Tooltip, I as IconButton, K as Divider, a2 as Chip, c6 as fNumber, an as fDate, av as useAuthContext, b as CircularProgress, ax as Alert, al as Avatar, E as Ee, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, ap as Tabs, aq as Tab, a1 as LinearProgress, L as Label, bn as RoleBasedGuard, C as CONFIG } from "./index-B08HRm4A.js";
import { s as saveReward, v as validateRedeemCode, m as markRedemptionUsed, r as redeemReward, u as useGetRewardsCatalog, a as useGetRewardRedemptions, d as deleteReward } from "./rewards-service-B3yYaPmf.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as useForm, C as Controller, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { h as useGetServices } from "./services-UhlA7T7c.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { T as TextField, F as FormControl, I as InputLabel } from "./TextField-CIuP940C.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { u as useClientAutocomplete } from "./client-service-swr-DnF01Wop.js";
import "./styles-Ddj8daWs.js";
import { o as object, s as string, n as number } from "./schemas-BVeYYbTr.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { T as TablePagination } from "./TablePagination-BOFMLJYr.js";
import "./with-selector-ClfCuV5M.js";
const REWARD_TYPES = [
  { value: "free_service", label: "Free Service" },
  // { value: 'free_addon', label: 'Free Add-on' },
  { value: "discount_coupon", label: "Discount Coupon" },
  { value: "product_voucher", label: "Product Voucher" }
];
const EMPTY_DEFAULTS = {
  name: "",
  description: "",
  type: "free_service",
  points_cost: 100,
  stock: "",
  valid_days: 30,
  is_active: true,
  service_id: null,
  service_name: "",
  product_id: null,
  product_name: "",
  discount_pct: "",
  max_uses: ""
};
function RewardDialog({ open, onClose, reward, organizationId }) {
  const isEdit = !!reward?.id;
  const { services } = useGetServices({ pageSize: 200, filters: { isActive: true } });
  const { catalog: products } = useGetProductCatalog();
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    setValue,
    formState: { isSubmitting, errors }
  } = useForm({ defaultValues: EMPTY_DEFAULTS });
  const watchedType = watch("type");
  reactExports.useEffect(() => {
    if (reward) {
      reset({
        name: reward.name,
        description: reward.description || "",
        type: reward.type,
        points_cost: reward.points_cost,
        stock: reward.stock ?? "",
        valid_days: reward.valid_days,
        is_active: reward.is_active,
        service_id: reward.value?.service_id ?? null,
        service_name: reward.value?.service_name ?? "",
        product_id: reward.value?.product_id ?? null,
        product_name: reward.value?.product_name ?? "",
        discount_pct: reward.value?.discount_pct ?? "",
        max_uses: reward.value?.max_uses ?? ""
      });
    } else {
      reset(EMPTY_DEFAULTS);
    }
  }, [reward, reset]);
  const onSubmit = async (values) => {
    try {
      const value = {};
      if (values.type === "free_service" || values.type === "free_addon") {
        if (values.service_id) {
          value.service_id = values.service_id;
          value.service_name = values.service_name;
        }
      }
      if (values.type === "discount_coupon") {
        if (values.discount_pct !== "") value.discount_pct = Number(values.discount_pct);
        if (values.max_uses !== "") value.max_uses = Number(values.max_uses);
      }
      if (values.type === "product_voucher") {
        if (values.product_id) {
          value.product_id = values.product_id;
          value.product_name = values.product_name;
        }
      }
      await saveReward({
        ...isEdit ? { id: reward.id } : {},
        organizationId,
        name: values.name,
        description: values.description || null,
        type: values.type,
        points_cost: Number(values.points_cost),
        stock: values.stock !== "" ? Number(values.stock) : null,
        valid_days: Number(values.valid_days),
        is_active: values.is_active,
        value
      });
      toast.success(isEdit ? "Reward updated" : "Reward created");
      onClose();
    } catch (err) {
      toast.error(err.message || "Failed to save reward");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Edit Reward" : "Add Reward" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            label: "Reward Name",
            fullWidth: true,
            ...register("name", { required: "Required" }),
            error: !!errors.name,
            helperText: errors.name?.message
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            label: "Description",
            fullWidth: true,
            multiline: true,
            rows: 2,
            ...register("description")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "type",
            control,
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Reward Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { ...field, label: "Reward Type", children: REWARD_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: t.value, children: t.label }, t.value)) })
            ] })
          }
        ),
        (watchedType === "free_service" || watchedType === "free_addon") && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "service_id",
            control,
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Autocomplete,
              {
                options: services,
                getOptionLabel: (o) => typeof o === "string" ? o : o.name ?? "",
                value: services.find((s) => s.id === field.value) ?? null,
                onChange: (_, newVal) => {
                  setValue("service_id", newVal?.id ?? null);
                  setValue("service_name", newVal?.name ?? "");
                },
                renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextField,
                  {
                    ...params,
                    label: watchedType === "free_service" ? "Specific Service (optional)" : "Specific Add-on (optional)",
                    helperText: "Leave empty to apply to any service in the cart"
                  }
                )
              }
            )
          }
        ),
        watchedType === "discount_coupon" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              label: "Discount Percentage",
              type: "number",
              fullWidth: true,
              inputProps: { min: 0, max: 100 },
              ...register("discount_pct"),
              InputProps: { endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "%" }) }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              label: "Max Uses per Code",
              type: "number",
              fullWidth: true,
              inputProps: { min: 1 },
              ...register("max_uses"),
              InputProps: { endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "×" }) },
              helperText: "Leave empty for single-use"
            }
          )
        ] }),
        watchedType === "product_voucher" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "product_id",
            control,
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Autocomplete,
              {
                options: products,
                getOptionLabel: (o) => typeof o === "string" ? o : o.name ?? "",
                value: products.find((p) => p.id === field.value) ?? null,
                onChange: (_, newVal) => {
                  setValue("product_id", newVal?.id ?? null);
                  setValue("product_name", newVal?.name ?? "");
                },
                renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextField,
                  {
                    ...params,
                    label: "Specific Product (optional)",
                    helperText: "Leave empty to apply to any product in the cart"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              label: "Points Cost",
              type: "number",
              fullWidth: true,
              inputProps: { min: 1 },
              ...register("points_cost", { required: "Required", min: 1 }),
              InputProps: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "pts" })
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              label: "Valid for",
              type: "number",
              fullWidth: true,
              inputProps: { min: 1 },
              ...register("valid_days"),
              InputProps: { endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: "days" }) }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Stock (leave empty for unlimited)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              fullWidth: true,
              type: "number",
              placeholder: "Unlimited",
              inputProps: { min: 0 },
              ...register("stock"),
              sx: { mt: 0.5 }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "is_active",
            control,
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormControlLabel,
              {
                control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    checked: field.value,
                    onChange: (e) => field.onChange(e.target.checked)
                  }
                ),
                label: "Active"
              }
            )
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isSubmitting, children: isSubmitting ? "Saving…" : isEdit ? "Update" : "Create" })
      ] })
    ] })
  ] });
}
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var qrcodegen;
((qrcodegen2) => {
  const _QrCode = class _QrCode2 {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(version, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.modules = [];
      this.isFunction = [];
      if (version < _QrCode2.MIN_VERSION || version > _QrCode2.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (msk < -1 || msk > 7)
        throw new RangeError("Mask value out of range");
      this.size = version * 4 + 17;
      let row = [];
      for (let i = 0; i < this.size; i++)
        row.push(false);
      for (let i = 0; i < this.size; i++) {
        this.modules.push(row.slice());
        this.isFunction.push(row.slice());
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);
      if (msk == -1) {
        let minPenalty = 1e9;
        for (let i = 0; i < 8; i++) {
          this.applyMask(i);
          this.drawFormatBits(i);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) {
            msk = i;
            minPenalty = penalty;
          }
          this.applyMask(i);
        }
      }
      assert(0 <= msk && msk <= 7);
      this.mask = msk;
      this.applyMask(msk);
      this.drawFormatBits(msk);
      this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(text, ecl) {
      const segs = qrcodegen2.QrSegment.makeSegments(text);
      return _QrCode2.encodeSegments(segs, ecl);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(data, ecl) {
      const seg = qrcodegen2.QrSegment.makeBytes(data);
      return _QrCode2.encodeSegments([seg], ecl);
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(_QrCode2.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= _QrCode2.MAX_VERSION) || mask < -1 || mask > 7)
        throw new RangeError("Invalid value");
      let version;
      let dataUsedBits;
      for (version = minVersion; ; version++) {
        const dataCapacityBits2 = _QrCode2.getNumDataCodewords(version, ecl) * 8;
        const usedBits = QrSegment.getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version >= maxVersion)
          throw new RangeError("Data too long");
      }
      for (const newEcl of [_QrCode2.Ecc.MEDIUM, _QrCode2.Ecc.QUARTILE, _QrCode2.Ecc.HIGH]) {
        if (boostEcl && dataUsedBits <= _QrCode2.getNumDataCodewords(version, newEcl) * 8)
          ecl = newEcl;
      }
      let bb = [];
      for (const seg of segs) {
        appendBits(seg.mode.modeBits, 4, bb);
        appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
        for (const b of seg.getData())
          bb.push(b);
      }
      assert(bb.length == dataUsedBits);
      const dataCapacityBits = _QrCode2.getNumDataCodewords(version, ecl) * 8;
      assert(bb.length <= dataCapacityBits);
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      assert(bb.length % 8 == 0);
      for (let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17)
        appendBits(padByte, 8, bb);
      let dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length)
        dataCodewords.push(0);
      bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << 7 - (i & 7));
      return new _QrCode2(version, ecl, dataCodewords, mask);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(x, y) {
      return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 == 0);
        this.setFunctionModule(i, 6, i % 2 == 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      const alignPatPos = this.getAlignmentPatternPositions();
      const numAlign = alignPatPos.length;
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0))
            this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(mask) {
      const data = this.errorCorrectionLevel.formatBits << 3 | mask;
      let rem = data;
      for (let i = 0; i < 10; i++)
        rem = rem << 1 ^ (rem >>> 9) * 1335;
      const bits = (data << 10 | rem) ^ 21522;
      assert(bits >>> 15 == 0);
      for (let i = 0; i <= 5; i++)
        this.setFunctionModule(8, i, getBit(bits, i));
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i = 9; i < 15; i++)
        this.setFunctionModule(14 - i, 8, getBit(bits, i));
      for (let i = 0; i < 8; i++)
        this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
      for (let i = 8; i < 15; i++)
        this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
      this.setFunctionModule(8, this.size - 8, true);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let rem = this.version;
      for (let i = 0; i < 12; i++)
        rem = rem << 1 ^ (rem >>> 11) * 7973;
      const bits = this.version << 12 | rem;
      assert(bits >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const color = getBit(bits, i);
        const a = this.size - 11 + i % 3;
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, color);
        this.setFunctionModule(b, a, color);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx;
          const yy = y + dy;
          if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size)
            this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
        }
      }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++)
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
      }
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      if (data.length != _QrCode2.getNumDataCodewords(ver, ecl))
        throw new RangeError("Invalid argument");
      const numBlocks = _QrCode2.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = _QrCode2.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const rawCodewords = Math.floor(_QrCode2.getNumRawDataModules(ver) / 8);
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);
      let blocks = [];
      const rsDiv = _QrCode2.reedSolomonComputeDivisor(blockEccLen);
      for (let i = 0, k = 0; i < numBlocks; i++) {
        let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
        k += dat.length;
        const ecc = _QrCode2.reedSolomonComputeRemainder(dat, rsDiv);
        if (i < numShortBlocks)
          dat.push(0);
        blocks.push(dat.concat(ecc));
      }
      let result = [];
      for (let i = 0; i < blocks[0].length; i++) {
        blocks.forEach((block, j) => {
          if (i != shortBlockLen - blockEccLen || j >= numShortBlocks)
            result.push(block[i]);
        });
      }
      assert(result.length == rawCodewords);
      return result;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(data) {
      if (data.length != Math.floor(_QrCode2.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right == 6)
          right = 5;
        for (let vert = 0; vert < this.size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const upward = (right + 1 & 2) == 0;
            const y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
      assert(i == data.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(mask) {
      if (mask < 0 || mask > 7)
        throw new RangeError("Mask value out of range");
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          let invert;
          switch (mask) {
            case 0:
              invert = (x + y) % 2 == 0;
              break;
            case 1:
              invert = y % 2 == 0;
              break;
            case 2:
              invert = x % 3 == 0;
              break;
            case 3:
              invert = (x + y) % 3 == 0;
              break;
            case 4:
              invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
              break;
            case 5:
              invert = x * y % 2 + x * y % 3 == 0;
              break;
            case 6:
              invert = (x * y % 2 + x * y % 3) % 2 == 0;
              break;
            case 7:
              invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y][x] && invert)
            this.modules[y][x] = !this.modules[y][x];
        }
      }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let result = 0;
      for (let y = 0; y < this.size; y++) {
        let runColor = false;
        let runX = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++) {
          if (this.modules[y][x] == runColor) {
            runX++;
            if (runX == 5)
              result += _QrCode2.PENALTY_N1;
            else if (runX > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _QrCode2.PENALTY_N3;
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * _QrCode2.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let runColor = false;
        let runY = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++) {
          if (this.modules[y][x] == runColor) {
            runY++;
            if (runY == 5)
              result += _QrCode2.PENALTY_N1;
            else if (runY > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _QrCode2.PENALTY_N3;
            runColor = this.modules[y][x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * _QrCode2.PENALTY_N3;
      }
      for (let y = 0; y < this.size - 1; y++) {
        for (let x = 0; x < this.size - 1; x++) {
          const color = this.modules[y][x];
          if (color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1])
            result += _QrCode2.PENALTY_N2;
        }
      }
      let dark = 0;
      for (const row of this.modules)
        dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
      const total = this.size * this.size;
      const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      assert(0 <= k && k <= 9);
      result += k * _QrCode2.PENALTY_N4;
      assert(0 <= result && result <= 2568888);
      return result;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      else {
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
        let result = [6];
        for (let pos = this.size - 7; result.length < numAlign; pos -= step)
          result.splice(1, 0, pos);
        return result;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(ver) {
      if (ver < _QrCode2.MIN_VERSION || ver > _QrCode2.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7)
          result -= 36;
      }
      assert(208 <= result && result <= 29648);
      return result;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(ver, ecl) {
      return Math.floor(_QrCode2.getNumRawDataModules(ver) / 8) - _QrCode2.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * _QrCode2.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255)
        throw new RangeError("Degree out of range");
      let result = [];
      for (let i = 0; i < degree - 1; i++)
        result.push(0);
      result.push(1);
      let root = 1;
      for (let i = 0; i < degree; i++) {
        for (let j = 0; j < result.length; j++) {
          result[j] = _QrCode2.reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length)
            result[j] ^= result[j + 1];
        }
        root = _QrCode2.reedSolomonMultiply(root, 2);
      }
      return result;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(data, divisor) {
      let result = divisor.map((_) => 0);
      for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => result[i] ^= _QrCode2.reedSolomonMultiply(coef, factor));
      }
      return result;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(x, y) {
      if (x >>> 8 != 0 || y >>> 8 != 0)
        throw new RangeError("Byte out of range");
      let z = 0;
      for (let i = 7; i >= 0; i--) {
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
      }
      assert(z >>> 8 == 0);
      return z;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(runHistory) {
      const n = runHistory[1];
      assert(n <= this.size * 3);
      const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
      return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] == 0)
        currentRunLength += this.size;
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
  };
  _QrCode.MIN_VERSION = 1;
  _QrCode.MAX_VERSION = 40;
  _QrCode.PENALTY_N1 = 3;
  _QrCode.PENALTY_N2 = 3;
  _QrCode.PENALTY_N3 = 40;
  _QrCode.PENALTY_N4 = 10;
  _QrCode.ECC_CODEWORDS_PER_BLOCK = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Low
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    // Medium
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Quartile
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    // High
  ];
  _QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    // Low
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    // Medium
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    // Quartile
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    // High
  ];
  qrcodegen2.QrCode = _QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len != 0)
      throw new RangeError("Value out of range");
    for (let i = len - 1; i >= 0; i--)
      bb.push(val >>> i & 1);
  }
  function getBit(x, i) {
    return (x >>> i & 1) != 0;
  }
  function assert(cond) {
    if (!cond)
      throw new Error("Assertion error");
  }
  const _QrSegment = class _QrSegment2 {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
      if (numChars < 0)
        throw new RangeError("Invalid argument");
      this.bitData = bitData.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(data) {
      let bb = [];
      for (const b of data)
        appendBits(b, 8, bb);
      return new _QrSegment2(_QrSegment2.Mode.BYTE, data.length, bb);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(digits) {
      if (!_QrSegment2.isNumeric(digits))
        throw new RangeError("String contains non-numeric characters");
      let bb = [];
      for (let i = 0; i < digits.length; ) {
        const n = Math.min(digits.length - i, 3);
        appendBits(parseInt(digits.substring(i, i + n), 10), n * 3 + 1, bb);
        i += n;
      }
      return new _QrSegment2(_QrSegment2.Mode.NUMERIC, digits.length, bb);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(text) {
      if (!_QrSegment2.isAlphanumeric(text))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let bb = [];
      let i;
      for (i = 0; i + 2 <= text.length; i += 2) {
        let temp = _QrSegment2.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += _QrSegment2.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
      }
      if (i < text.length)
        appendBits(_QrSegment2.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
      return new _QrSegment2(_QrSegment2.Mode.ALPHANUMERIC, text.length, bb);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(text) {
      if (text == "")
        return [];
      else if (_QrSegment2.isNumeric(text))
        return [_QrSegment2.makeNumeric(text)];
      else if (_QrSegment2.isAlphanumeric(text))
        return [_QrSegment2.makeAlphanumeric(text)];
      else
        return [_QrSegment2.makeBytes(_QrSegment2.toUtf8ByteArray(text))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(assignVal) {
      let bb = [];
      if (assignVal < 0)
        throw new RangeError("ECI assignment value out of range");
      else if (assignVal < 1 << 7)
        appendBits(assignVal, 8, bb);
      else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else
        throw new RangeError("ECI assignment value out of range");
      return new _QrSegment2(_QrSegment2.Mode.ECI, 0, bb);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(text) {
      return _QrSegment2.NUMERIC_REGEX.test(text);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(text) {
      return _QrSegment2.ALPHANUMERIC_REGEX.test(text);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(segs, version) {
      let result = 0;
      for (const seg of segs) {
        const ccbits = seg.mode.numCharCountBits(version);
        if (seg.numChars >= 1 << ccbits)
          return Infinity;
        result += 4 + ccbits + seg.bitData.length;
      }
      return result;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(str) {
      str = encodeURI(str);
      let result = [];
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != "%")
          result.push(str.charCodeAt(i));
        else {
          result.push(parseInt(str.substring(i + 1, i + 3), 16));
          i += 2;
        }
      }
      return result;
    }
  };
  _QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
  _QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
  _QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  let QrSegment = _QrSegment;
  qrcodegen2.QrSegment = _QrSegment;
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  ((QrCode2) => {
    const _Ecc = class _Ecc {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(ordinal, formatBits) {
        this.ordinal = ordinal;
        this.formatBits = formatBits;
      }
    };
    _Ecc.LOW = new _Ecc(0, 1);
    _Ecc.MEDIUM = new _Ecc(1, 0);
    _Ecc.QUARTILE = new _Ecc(2, 3);
    _Ecc.HIGH = new _Ecc(3, 2);
    QrCode2.Ecc = _Ecc;
  })(qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  ((QrSegment2) => {
    const _Mode = class _Mode {
      /*-- Constructor and fields --*/
      constructor(modeBits, numBitsCharCount) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
      }
    };
    _Mode.NUMERIC = new _Mode(1, [10, 12, 14]);
    _Mode.ALPHANUMERIC = new _Mode(2, [9, 11, 13]);
    _Mode.BYTE = new _Mode(4, [8, 16, 16]);
    _Mode.KANJI = new _Mode(8, [8, 10, 12]);
    _Mode.ECI = new _Mode(7, [0, 0, 0]);
    QrSegment2.Mode = _Mode;
  })(qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var qrcodegen_default = qrcodegen;
var ERROR_LEVEL_MAP = {
  L: qrcodegen_default.QrCode.Ecc.LOW,
  M: qrcodegen_default.QrCode.Ecc.MEDIUM,
  Q: qrcodegen_default.QrCode.Ecc.QUARTILE,
  H: qrcodegen_default.QrCode.Ecc.HIGH
};
var DEFAULT_SIZE = 128;
var DEFAULT_LEVEL = "L";
var DEFAULT_BGCOLOR = "#FFFFFF";
var DEFAULT_FGCOLOR = "#000000";
var DEFAULT_INCLUDEMARGIN = false;
var DEFAULT_MINVERSION = 1;
var SPEC_MARGIN_SIZE = 4;
var DEFAULT_MARGIN_SIZE = 0;
var DEFAULT_IMG_SCALE = 0.1;
function generatePath(modules, margin = 0) {
  const ops = [];
  modules.forEach(function(row, y) {
    let start = null;
    row.forEach(function(cell, x) {
      if (!cell && start !== null) {
        ops.push(
          `M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`
        );
        start = null;
        return;
      }
      if (x === row.length - 1) {
        if (!cell) {
          return;
        }
        if (start === null) {
          ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
        } else {
          ops.push(
            `M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`
          );
        }
        return;
      }
      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join("");
}
function excavateModules(modules, excavation) {
  return modules.slice().map((row, y) => {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }
    return row.map((cell, x) => {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }
      return false;
    });
  });
}
function getImageSettings(cells, size, margin, imageSettings) {
  if (imageSettings == null) {
    return null;
  }
  const numCells = cells.length + margin * 2;
  const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  const scale = numCells / size;
  const w = (imageSettings.width || defaultSize) * scale;
  const h = (imageSettings.height || defaultSize) * scale;
  const x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
  const y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
  const opacity = imageSettings.opacity == null ? 1 : imageSettings.opacity;
  let excavation = null;
  if (imageSettings.excavate) {
    let floorX = Math.floor(x);
    let floorY = Math.floor(y);
    let ceilW = Math.ceil(w + x - floorX);
    let ceilH = Math.ceil(h + y - floorY);
    excavation = { x: floorX, y: floorY, w: ceilW, h: ceilH };
  }
  const crossOrigin = imageSettings.crossOrigin;
  return { x, y, h, w, excavation, opacity, crossOrigin };
}
function getMarginSize(includeMargin, marginSize) {
  if (marginSize != null) {
    return Math.max(Math.floor(marginSize), 0);
  }
  return includeMargin ? SPEC_MARGIN_SIZE : DEFAULT_MARGIN_SIZE;
}
function useQRCode({
  value,
  level,
  minVersion,
  includeMargin,
  marginSize,
  imageSettings,
  size,
  boostLevel
}) {
  let qrcode = r.useMemo(() => {
    const values = Array.isArray(value) ? value : [value];
    const segments = values.reduce((accum, v) => {
      accum.push(...qrcodegen_default.QrSegment.makeSegments(v));
      return accum;
    }, []);
    return qrcodegen_default.QrCode.encodeSegments(
      segments,
      ERROR_LEVEL_MAP[level],
      minVersion,
      void 0,
      void 0,
      boostLevel
    );
  }, [value, level, minVersion, boostLevel]);
  const { cells, margin, numCells, calculatedImageSettings } = r.useMemo(() => {
    let cells2 = qrcode.getModules();
    const margin2 = getMarginSize(includeMargin, marginSize);
    const numCells2 = cells2.length + margin2 * 2;
    const calculatedImageSettings2 = getImageSettings(
      cells2,
      size,
      margin2,
      imageSettings
    );
    return {
      cells: cells2,
      margin: margin2,
      numCells: numCells2,
      calculatedImageSettings: calculatedImageSettings2
    };
  }, [qrcode, size, imageSettings, includeMargin, marginSize]);
  return {
    qrcode,
    margin,
    cells,
    numCells,
    calculatedImageSettings
  };
}
var SUPPORTS_PATH2D = (function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }
  return true;
})();
var QRCodeCanvas = r.forwardRef(
  function QRCodeCanvas2(props, forwardedRef) {
    const _a = props, {
      value,
      size = DEFAULT_SIZE,
      level = DEFAULT_LEVEL,
      bgColor = DEFAULT_BGCOLOR,
      fgColor = DEFAULT_FGCOLOR,
      includeMargin = DEFAULT_INCLUDEMARGIN,
      minVersion = DEFAULT_MINVERSION,
      boostLevel,
      marginSize,
      imageSettings
    } = _a, extraProps = __objRest(_a, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "marginSize",
      "imageSettings"
    ]);
    const _b = extraProps, { style } = _b, otherProps = __objRest(_b, ["style"]);
    const imgSrc = imageSettings == null ? void 0 : imageSettings.src;
    const _canvas = r.useRef(null);
    const _image = r.useRef(null);
    const setCanvasRef = r.useCallback(
      (node) => {
        _canvas.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef]
    );
    const [isImgLoaded, setIsImageLoaded] = r.useState(false);
    const { margin, cells, numCells, calculatedImageSettings } = useQRCode({
      value,
      level,
      minVersion,
      boostLevel,
      includeMargin,
      marginSize,
      imageSettings,
      size
    });
    r.useEffect(() => {
      if (_canvas.current != null) {
        const canvas = _canvas.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          return;
        }
        let cellsToDraw = cells;
        const image = _image.current;
        const haveImageToRender = calculatedImageSettings != null && image !== null && image.complete && image.naturalHeight !== 0 && image.naturalWidth !== 0;
        if (haveImageToRender) {
          if (calculatedImageSettings.excavation != null) {
            cellsToDraw = excavateModules(
              cells,
              calculatedImageSettings.excavation
            );
          }
        }
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.height = canvas.width = size * pixelRatio;
        const scale = size / numCells * pixelRatio;
        ctx.scale(scale, scale);
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, numCells, numCells);
        ctx.fillStyle = fgColor;
        if (SUPPORTS_PATH2D) {
          ctx.fill(new Path2D(generatePath(cellsToDraw, margin)));
        } else {
          cells.forEach(function(row, rdx) {
            row.forEach(function(cell, cdx) {
              if (cell) {
                ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
              }
            });
          });
        }
        if (calculatedImageSettings) {
          ctx.globalAlpha = calculatedImageSettings.opacity;
        }
        if (haveImageToRender) {
          ctx.drawImage(
            image,
            calculatedImageSettings.x + margin,
            calculatedImageSettings.y + margin,
            calculatedImageSettings.w,
            calculatedImageSettings.h
          );
        }
      }
    });
    r.useEffect(() => {
      setIsImageLoaded(false);
    }, [imgSrc]);
    const canvasStyle = __spreadValues({ height: size, width: size }, style);
    let img = null;
    if (imgSrc != null) {
      img = /* @__PURE__ */ r.createElement(
        "img",
        {
          src: imgSrc,
          key: imgSrc,
          style: { display: "none" },
          onLoad: () => {
            setIsImageLoaded(true);
          },
          ref: _image,
          crossOrigin: calculatedImageSettings == null ? void 0 : calculatedImageSettings.crossOrigin
        }
      );
    }
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      "canvas",
      __spreadValues({
        style: canvasStyle,
        height: size,
        width: size,
        ref: setCanvasRef,
        role: "img"
      }, otherProps)
    ), img);
  }
);
QRCodeCanvas.displayName = "QRCodeCanvas";
var QRCodeSVG = r.forwardRef(
  function QRCodeSVG2(props, forwardedRef) {
    const _a = props, {
      value,
      size = DEFAULT_SIZE,
      level = DEFAULT_LEVEL,
      bgColor = DEFAULT_BGCOLOR,
      fgColor = DEFAULT_FGCOLOR,
      includeMargin = DEFAULT_INCLUDEMARGIN,
      minVersion = DEFAULT_MINVERSION,
      boostLevel,
      title,
      marginSize,
      imageSettings
    } = _a, otherProps = __objRest(_a, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "title",
      "marginSize",
      "imageSettings"
    ]);
    const { margin, cells, numCells, calculatedImageSettings } = useQRCode({
      value,
      level,
      minVersion,
      boostLevel,
      includeMargin,
      marginSize,
      imageSettings,
      size
    });
    let cellsToDraw = cells;
    let image = null;
    if (imageSettings != null && calculatedImageSettings != null) {
      if (calculatedImageSettings.excavation != null) {
        cellsToDraw = excavateModules(
          cells,
          calculatedImageSettings.excavation
        );
      }
      image = /* @__PURE__ */ r.createElement(
        "image",
        {
          href: imageSettings.src,
          height: calculatedImageSettings.h,
          width: calculatedImageSettings.w,
          x: calculatedImageSettings.x + margin,
          y: calculatedImageSettings.y + margin,
          preserveAspectRatio: "none",
          opacity: calculatedImageSettings.opacity,
          crossOrigin: calculatedImageSettings.crossOrigin
        }
      );
    }
    const fgPath = generatePath(cellsToDraw, margin);
    return /* @__PURE__ */ r.createElement(
      "svg",
      __spreadValues({
        height: size,
        width: size,
        viewBox: `0 0 ${numCells} ${numCells}`,
        ref: forwardedRef,
        role: "img"
      }, otherProps),
      !!title && /* @__PURE__ */ r.createElement("title", null, title),
      /* @__PURE__ */ r.createElement(
        "path",
        {
          fill: bgColor,
          d: `M0,0 h${numCells}v${numCells}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ r.createElement("path", { fill: fgColor, d: fgPath, shapeRendering: "crispEdges" }),
      image
    );
  }
);
QRCodeSVG.displayName = "QRCodeSVG";
function RedeemCodeDialog({ open, onClose, redemption }) {
  if (!redemption) return null;
  const handleCopyCode = () => {
    navigator.clipboard.writeText(redemption.redeem_code);
    toast.success("Code copied!");
  };
  const reward = redemption.rewards_catalog;
  const client = redemption.client_profiles;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:gift-bold", width: 24, color: "primary.main" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reward Redemption" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, alignItems: "center", sx: { pt: 1 }, children: [
      client && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", color: "text.secondary", children: [
        client.first_name,
        " ",
        client.last_name,
        " · ",
        client.client_number
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", textAlign: "center", children: reward?.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            p: 2,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            bgcolor: "background.paper"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            QRCodeSVG,
            {
              value: redemption.qr_data || redemption.redeem_code,
              size: 200,
              level: "M",
              includeMargin: false
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              py: 1.5,
              px: 3,
              bgcolor: "action.hover",
              borderRadius: 1,
              border: "2px dashed",
              borderColor: "primary.main"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "h4",
                fontFamily: "monospace",
                letterSpacing: 4,
                color: "primary.main",
                textAlign: "center",
                children: redemption.redeem_code
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Copy code", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: handleCopyCode, color: "primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:copy-bold", width: 20 }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { flexItem: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Points Spent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              label: `${fNumber(redemption.points_spent)} pts`,
              color: "primary",
              variant: "outlined"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Issued" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: fDate(redemption.created_at) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Expires" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "error.main", children: fDate(redemption.expires_at) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "Close" }) })
  ] });
}
function ValidateCodeDialog({ open, onClose, organizationId }) {
  const { user } = useAuthContext();
  const [code, setCode] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [validating, setValidating] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [error, setError] = reactExports.useState("");
  const handleValidate = async () => {
    if (!code.trim()) return;
    setValidating(true);
    setResult(null);
    setError("");
    try {
      const data = await validateRedeemCode(code.trim().toUpperCase(), organizationId);
      setResult(data);
    } catch (err) {
      setError(err.message || "Invalid code");
    } finally {
      setValidating(false);
    }
  };
  const handleMarkUsed = async () => {
    if (!result) return;
    setLoading(true);
    try {
      await markRedemptionUsed({ redemptionId: result.id, usedBy: user?.id });
      toast.success("Reward marked as used");
      handleClose();
    } catch (err) {
      toast.error(err.message || "Failed to mark as used");
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => {
    setCode("");
    setResult(null);
    setError("");
    onClose();
  };
  const reward = result?.rewards_catalog;
  const client = result?.client_profiles;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleClose, maxWidth: "xs", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:qr-code-bold", width: 22, color: "primary.main" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Validate Redeem Code" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            label: "Redeem Code",
            fullWidth: true,
            value: code,
            onChange: (e) => setCode(e.target.value.toUpperCase()),
            onKeyDown: (e) => {
              if (e.key === "Enter") handleValidate();
            },
            placeholder: "RW-XXXXXX",
            inputProps: { style: { fontFamily: "monospace", letterSpacing: 2 } },
            InputProps: {
              endAdornment: validating ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 18 }) }) : null
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            onClick: handleValidate,
            disabled: validating || !code.trim(),
            children: "Check"
          }
        )
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", children: error }),
      result && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            p: 2,
            border: "1px solid",
            borderColor: "success.light",
            borderRadius: 1.5,
            bgcolor: "success.lighter"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold", color: "success.main", width: 22 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", color: "success.main", children: "Valid Code" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Client" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: client ? `${client.first_name} ${client.last_name}` : "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Reward" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: reward?.name ?? "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Points Spent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    size: "small",
                    label: `${fNumber(result.points_spent)} pts`,
                    color: "primary",
                    variant: "outlined"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Expires" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "error.main", children: fDate(result.expires_at) })
              ] })
            ] })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, children: "Cancel" }),
      result && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          color: "success",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:check-circle-bold" }),
          onClick: handleMarkUsed,
          disabled: loading,
          children: loading ? "Marking…" : "Mark as Used"
        }
      )
    ] })
  ] });
}
const RedeemForClientSchema = object({
  client: object({
    id: string(),
    first_name: string(),
    last_name: string(),
    client_number: string().optional().nullable(),
    loyalty_points: number().optional().nullable(),
    phone_primary: string().optional().nullable(),
    email: string().optional().nullable()
  }).nullable().refine((val) => val !== null, { message: "Please select a client" })
});
function RedeemForClientDialog({
  open,
  onClose,
  reward,
  organizationId,
  onRedeemed
}) {
  const { user } = useAuthContext();
  const [inputValue, setInputValue] = reactExports.useState("");
  const { clients, clientsLoading } = useClientAutocomplete(inputValue, 10);
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(RedeemForClientSchema),
    defaultValues: { client: null }
  });
  const {
    reset,
    control,
    watch,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const selectedClient = watch("client");
  const onSubmit = handleSubmit(async (data) => {
    if (!reward) return;
    try {
      const result = await redeemReward({
        organizationId,
        clientId: data.client.id,
        rewardId: reward.id,
        createdBy: user?.id
      });
      toast.success("Reward redeemed! Show the code to the client.");
      const enriched = {
        ...result,
        rewards_catalog: result.reward ?? reward,
        client_profiles: {
          first_name: data.client.first_name,
          last_name: data.client.last_name,
          client_number: data.client.client_number ?? ""
        }
      };
      handleClose();
      onRedeemed(enriched);
    } catch (err) {
      toast.error(err.message || "Redemption failed");
    }
  });
  const handleClose = () => {
    reset();
    setInputValue("");
    onClose();
  };
  const notEnoughPoints = selectedClient && reward && (selectedClient.loyalty_points ?? 0) < reward.points_cost;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onClose: handleClose, maxWidth: "xs", fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:gift-bold", width: 22, color: "primary.main" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Redeem for Client" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
      reward && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            p: 1.5,
            borderRadius: 1.5,
            bgcolor: "action.hover",
            border: "1px solid",
            borderColor: "divider"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { sx: { bgcolor: "primary.lighter", width: 36, height: 36 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:gift-bold", width: 18, color: "primary.main" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", noWrap: true, children: reward.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                reward.valid_days,
                " days valid"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:star-bold", width: 14 }),
                label: `${fNumber(reward.points_cost)} pts`,
                size: "small",
                color: "primary",
                variant: "outlined"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "client",
          control,
          render: ({ field, fieldState: { error } }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Autocomplete,
            {
              options: clients,
              loading: clientsLoading,
              value: field.value,
              onChange: (_, newValue) => field.onChange(newValue),
              onInputChange: (_, newInput) => setInputValue(newInput),
              getOptionLabel: (option) => option ? `${option.first_name} ${option.last_name}` : "",
              isOptionEqualToValue: (a, b) => a.id === b.id,
              filterOptions: (x) => x,
              renderOption: (props, option) => {
                const { key, ...rest } = props;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
                    option.first_name,
                    " ",
                    option.last_name
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                    option.phone_primary || option.email || "No contact info",
                    option.loyalty_points != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      " · ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:star-bold-duotone", width: 12 }),
                      ` ${fNumber(option.loyalty_points)} pts`
                    ] })
                  ] })
                ] }) }, key);
              },
              renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  ...params,
                  label: "Search client",
                  placeholder: "Name, phone or email…",
                  error: !!error,
                  helperText: error?.message,
                  slotProps: {
                    input: {
                      ...params.InputProps,
                      endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        clientsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 18 }) : null,
                        params.InputProps.endAdornment
                      ] })
                    }
                  }
                }
              )
            }
          )
        }
      ),
      notEnoughPoints && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:danger-triangle-bold", width: 18, color: "error.main" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "error.main", children: [
          "Client only has ",
          fNumber(selectedClient.loyalty_points ?? 0),
          " pts — needs",
          " ",
          fNumber(reward.points_cost),
          " pts."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          variant: "contained",
          color: "primary",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:gift-bold" }),
          disabled: isSubmitting || !selectedClient || notEnoughPoints,
          loading: isSubmitting,
          children: isSubmitting ? "Redeeming…" : "Redeem"
        }
      )
    ] })
  ] }) });
}
const REWARD_TYPE_META = {
  free_service: { label: "Free Service", color: "#1877F2", icon: "solar:scissors-bold" },
  free_addon: { label: "Free Add-on", color: "#00A76F", icon: "solar:add-circle-bold" },
  discount_coupon: { label: "Discount Coupon", color: "#FFAB00", icon: "solar:tag-price-bold" },
  product_voucher: { label: "Product Voucher", color: "#FF5630", icon: "solar:gift-bold" }
};
const REDEEM_STATUS_COLOR = {
  active: "success",
  used: "default",
  expired: "error",
  cancelled: "warning"
};
function RewardsOverviewView() {
  const { user } = useAuthContext();
  const organizationId = user?.branches?.[0]?.organization_id;
  const [activeTab, setActiveTab] = reactExports.useState("catalog");
  const [redPage, setRedPage] = reactExports.useState(0);
  const redPageSize = 20;
  const rewardDialog = Ee();
  const redeemDialog = Ee();
  const validateDialog = Ee();
  const confirmDelete = Ee();
  const redeemForClientDialog = Ee();
  const [redeemingReward, setRedeemingReward] = reactExports.useState(null);
  const [editingReward, setEditingReward] = reactExports.useState(null);
  const [selectedRedemption, setSelectedRedemption] = reactExports.useState(null);
  const [deletingRewardId, setDeletingRewardId] = reactExports.useState(null);
  const { catalog, catalogLoading } = useGetRewardsCatalog(organizationId);
  const { redemptions, totalCount, redemptionsLoading } = useGetRewardRedemptions({
    organizationId,
    page: redPage,
    pageSize: redPageSize
  });
  const handleDeleteReward = reactExports.useCallback(async () => {
    try {
      await deleteReward(deletingRewardId, organizationId);
      toast.success("Reward deleted");
      confirmDelete.onFalse();
    } catch {
      toast.error("Failed to delete reward");
    }
  }, [deletingRewardId, organizationId, confirmDelete]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Rewards Catalog",
        links: [{ name: "Dashboard", href: "/" }, { name: "Rewards" }],
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:qr-code-bold" }),
              onClick: validateDialog.onTrue,
              children: "Validate Code"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
              onClick: () => {
                setEditingReward(null);
                rewardDialog.onTrue();
              },
              children: "Add Reward"
            }
          )
        ] }),
        sx: { mb: 3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { height: 600 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Tabs,
        {
          value: activeTab,
          onChange: (_, v) => setActiveTab(v),
          sx: { px: 2, borderBottom: 1, borderColor: "divider" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: "catalog", label: `Catalog (${catalog.length})` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { value: "redemptions", label: "Redemptions" })
          ]
        }
      ),
      activeTab === "catalog" && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: catalogLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {}) : catalog.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No rewards yet. Add one to get started." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Reward" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Points" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Stock" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Validity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: catalog.map((reward) => {
          const meta = REWARD_TYPE_META[reward.type] || {};
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { sx: { bgcolor: `${meta.color}22`, width: 36, height: 36 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: meta.icon, width: 18, sx: { color: meta.color } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: reward.name }),
                reward.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "caption",
                    color: "text.secondary",
                    noWrap: true,
                    sx: { maxWidth: 260, display: "block" },
                    children: reward.description
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: meta.label, size: "small" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                spacing: 0.5,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: "solar:star-bold",
                      width: 14,
                      sx: { color: "primary.main" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fNumber(reward.points_cost) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: reward.stock !== null ? /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: reward.stock > 0 ? "info" : "error", children: reward.stock }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", children: "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
              reward.valid_days,
              "d"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: reward.is_active ? "success" : "default", children: reward.is_active ? "Active" : "Off" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Stack,
              {
                direction: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                spacing: 0.5,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  RoleBasedGuard,
                  {
                    roles: ["admin", "receptionist", "manager"],
                    hasContent: false,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Redeem for a client", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "small",
                          variant: "contained",
                          color: "primary",
                          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:gift-bold", width: 14 }),
                          disabled: !reward.is_active || reward.stock !== null && reward.stock <= 0,
                          onClick: () => {
                            setRedeemingReward(reward);
                            redeemForClientDialog.onTrue();
                          },
                          children: "Redeem"
                        }
                      ) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        IconButton,
                        {
                          size: "small",
                          onClick: () => {
                            setEditingReward(reward);
                            rewardDialog.onTrue();
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16 })
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        IconButton,
                        {
                          size: "small",
                          color: "error",
                          onClick: () => {
                            setDeletingRewardId(reward.id);
                            confirmDelete.onTrue();
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 })
                        }
                      ) })
                    ]
                  }
                )
              }
            ) })
          ] }, reward.id);
        }) })
      ] }) }) }),
      activeTab === "redemptions" && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: redemptionsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, {}) : redemptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { title: "No redemptions yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Client" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Reward" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Points" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Expires" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: "QR" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: redemptions.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: fDate(r2.created_at) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r2.client_profiles ? `${r2.client_profiles.first_name} ${r2.client_profiles.last_name}` : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: r2.rewards_catalog?.name ?? "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "body2",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: 1,
                children: r2.redeem_code
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: fNumber(r2.points_spent) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: fDate(r2.expires_at) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: REDEEM_STATUS_COLOR[r2.status] || "default", children: r2.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: r2.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Show QR Code", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "small",
                color: "primary",
                onClick: () => {
                  setSelectedRedemption(r2);
                  redeemDialog.onTrue();
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:qr-code-bold", width: 18 })
              }
            ) }) })
          ] }, r2.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TablePagination,
          {
            component: "div",
            count: totalCount,
            page: redPage,
            rowsPerPage: redPageSize,
            rowsPerPageOptions: [20],
            onPageChange: (_, p) => setRedPage(p)
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RewardDialog,
      {
        open: rewardDialog.value,
        onClose: rewardDialog.onFalse,
        reward: editingReward,
        organizationId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RedeemCodeDialog,
      {
        open: redeemDialog.value,
        onClose: redeemDialog.onFalse,
        redemption: selectedRedemption
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RedeemForClientDialog,
      {
        open: redeemForClientDialog.value,
        onClose: redeemForClientDialog.onFalse,
        reward: redeemingReward,
        organizationId,
        onRedeemed: (enriched) => {
          setSelectedRedemption(enriched);
          redeemDialog.onTrue();
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ValidateCodeDialog,
      {
        open: validateDialog.value,
        onClose: validateDialog.onFalse,
        organizationId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDelete.value,
        onClose: confirmDelete.onFalse,
        title: "Delete Reward",
        content: "Are you sure you want to delete this reward?",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleDeleteReward, children: "Delete" })
      }
    )
  ] });
}
const metadata = { title: `Rewards Catalog | Dashboard - ${CONFIG.appName}` };
function RewardsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RewardsOverviewView, {})
  ] });
}
export {
  RewardsPage as default
};
