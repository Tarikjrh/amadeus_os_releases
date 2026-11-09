import { h as dayjs } from "./index-B08HRm4A.js";
import { a as array, u as union, f as file, s as string, _ as _null, n as number, b as boolean, p as preprocess, e as email, d as date } from "./schemas-BVeYYbTr.js";
const schemaUtils = {
  /**
   * Phone number
   * Apply for phone number input.
   */
  phoneNumber: (props) => string().min(1, { error: props?.error?.required ?? "Phone number is required!" }).refine((val) => props?.isValid?.(val), {
    error: props?.error?.invalid ?? "Invalid phone number!"
  }),
  /**
   * Email
   * Apply for email input.
   */
  email: (props) => email({
    error: ({ input, code }) => input && code.startsWith("invalid") ? props?.error?.invalid ?? "Email must be a valid email address!" : props?.error?.required ?? "Email is required!"
  }),
  /**
   * Date
   * Apply for date pickers.
   */
  date: (props) => preprocess(
    (val) => val === void 0 ? null : val,
    // Process input value before validation
    union([string(), number(), date(), _null()]).check((ctx) => {
      const value = ctx.value;
      if (value === null || value === "") {
        ctx.issues.push({
          code: "custom",
          message: props?.error?.required ?? "Date is required!",
          input: value
        });
        return;
      }
      if (!dayjs(value).isValid()) {
        ctx.issues.push({
          code: "custom",
          message: props?.error?.invalid ?? "Invalid date!",
          input: value
        });
      }
    })
  ),
  /**
   * Editor
   * Apply for editor
   */
  editor: (props) => string().refine(
    (val) => {
      const cleanedValue = val.trim();
      return cleanedValue !== "" && cleanedValue !== "<p></p>";
    },
    { error: props?.error ?? "Content is required!" }
  ),
  /**
   * Nullable Input
   * Apply for input, select... with null value.
   */
  nullableInput: (schema, options) => schema.nullable().refine((val) => val !== null && val !== void 0, {
    error: options?.error ?? "Field is required!"
  }),
  /**
   * Boolean
   * Apply for checkbox, switch...
   */
  boolean: (props) => boolean().refine((val) => val === true, {
    error: props?.error ?? "Field is required!"
  }),
  /**
   * Slider range
   * Apply for slider with range [min, max].
   */
  sliderRange: (props) => number().array().refine((val) => val[0] >= props.min && val[1] <= props.max, {
    error: props.error ?? `Range must be between ${props.min} and ${props.max}`
  }),
  /**
   * File
   * Apply for upload single file.
   */
  file: (props) => file().or(string()).or(_null()).check((ctx) => {
    const value = ctx.value;
    if (!value || typeof value === "string" && !value.length) {
      ctx.issues.push({
        code: "custom",
        message: props?.error ?? "File is required!",
        input: value
      });
    }
  }),
  /**
   * Files
   * Apply for upload multiple files.
   */
  files: (props) => array(union([string(), file()])).min(1, { error: props?.error ?? "Files is required!" })
};
export {
  schemaUtils as s
};
