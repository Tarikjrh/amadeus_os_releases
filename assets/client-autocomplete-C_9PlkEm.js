import { r as reactExports, j as jsxRuntimeExports, b as CircularProgress, T as Tooltip, a as Iconify, B as Box, al as Avatar, c as Typography } from "./index-B08HRm4A.js";
import { u as useFormContext, C as Controller } from "./form-provider-u_wAFv-h.js";
import { f as formatPhoneNumberIntl } from "./index-C4JOln-R.js";
import { u as useClientAutocomplete, a as useClient } from "./client-service-swr-DnF01Wop.js";
import { C as ClientImportanceLabel } from "./index-Dha6iQ4E.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
function isBirthdayThisWeek(dateOfBirth, referenceDate = /* @__PURE__ */ new Date()) {
  if (!dateOfBirth) return false;
  const ref = new Date(referenceDate);
  const weekStart = new Date(ref);
  weekStart.setDate(ref.getDate() - ref.getDay());
  weekStart.setHours(0, 0, 0, 0);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);
  const [, month, day] = dateOfBirth.split("-").map(Number);
  for (const year of [ref.getFullYear() - 1, ref.getFullYear(), ref.getFullYear() + 1]) {
    const bday = new Date(year, month - 1, day);
    if (bday >= weekStart && bday <= weekEnd) return true;
  }
  return false;
}
function isBirthdayToday(dateOfBirth, referenceDate = /* @__PURE__ */ new Date()) {
  if (!dateOfBirth) return false;
  const [, month, day] = dateOfBirth.split("-").map(Number);
  const ref = new Date(referenceDate);
  return ref.getMonth() + 1 === month && ref.getDate() === day;
}
function ClientAutocompleteField({
  label = "Search clients",
  placeholder = "Type to search...",
  helperText,
  error,
  value = null,
  onChange,
  limit = 20,
  disabled = false,
  size = "medium",
  compactImportance = false,
  branchId,
  sx,
  ...other
}) {
  const getOptionLabelFn = (option) => {
    if (!option || Array.isArray(option) || !option.first_name) return "";
    return `${option.first_name} ${option.last_name}${option.preferred_name ? ` (${option.preferred_name})` : ""}`;
  };
  const [inputValue, setInputValue] = reactExports.useState(
    () => Array.isArray(value) ? "" : getOptionLabelFn(value)
  );
  reactExports.useEffect(() => {
    if (!Array.isArray(value)) setInputValue(getOptionLabelFn(value));
  }, [value?.id]);
  const { clients, clientsLoading } = useClientAutocomplete(inputValue, limit, branchId);
  const getOptionLabel = getOptionLabelFn;
  const renderOption = (props, option) => {
    const { key, ...rest } = props;
    const hasBirthday = isBirthdayThisWeek(option.date_of_birth);
    const isToday = isBirthdayToday(option.date_of_birth);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5, py: 0.5 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { position: "relative", flexShrink: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { src: option.profile_photo_url, sx: { width: 32, height: 32, fontSize: 13 }, children: [
          option.first_name?.[0].toUpperCase(),
          option.last_name?.[0].toUpperCase()
        ] }),
        compactImportance && option.client_importance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientImportanceLabel,
          {
            sx: {
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 9,
              height: 14,
              px: 0.4,
              minWidth: 14
            },
            clientImportance: option.client_importance
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { fontWeight: 600, lineHeight: 1.3 }, children: [
            option.first_name,
            " ",
            option.last_name,
            !compactImportance && option.client_importance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ClientImportanceLabel,
              {
                sx: { fontSize: 10, ml: 3 },
                clientImportance: option.client_importance
              }
            ),
            option.preferred_name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                component: "span",
                variant: "caption",
                color: "text.secondary",
                sx: { ml: 0.5 },
                children: [
                  "(",
                  option.preferred_name,
                  ")"
                ]
              }
            )
          ] }),
          hasBirthday && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: isToday ? "Birthday today! 🎂" : "Birthday this week! 🎂", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "noto:birthday-cake", width: 18, sx: { flexShrink: 0 } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", children: [formatPhoneNumberIntl(option.phone_primary), option.email].filter(Boolean).join(" · ") || "No contact info" })
      ] })
    ] }) }, key);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Autocomplete,
    {
      value,
      inputValue,
      options: clients,
      getOptionLabel,
      isOptionEqualToValue: (a, b) => a?.id === b?.id,
      renderOption,
      filterOptions: (x) => x,
      loading: clientsLoading,
      disabled,
      onChange: (_, newValue) => onChange?.(newValue),
      onInputChange: (_, newInputValue, reason) => {
        if (reason !== "reset") setInputValue(newInputValue);
      },
      sx,
      renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          ...params,
          label,
          placeholder,
          error: !!error,
          helperText: error?.message ?? helperText,
          size,
          slotProps: {
            input: {
              ...params.InputProps,
              startAdornment: value && isBirthdayThisWeek(value.date_of_birth) ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", sx: { ml: 0.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  title: isBirthdayToday(value.date_of_birth) ? "Birthday today! 🎂" : "Birthday this week! 🎂",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "noto:birthday-cake", width: 16 })
                }
              ) }) : params.InputProps.startAdornment,
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                clientsLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { color: "inherit", size: 20 }),
                params.InputProps.endAdornment
              ] })
            }
          }
        }
      ),
      ...other
    }
  );
}
function ClientAutocomplete({
  name,
  label,
  helperText,
  placeholder = "Search clients...",
  limit = 10,
  excludeId,
  branchId,
  compactImportance = false,
  ...other
}) {
  const { control, setValue, watch } = useFormContext();
  const [inputValue, setInputValue] = reactExports.useState("");
  const currentValue = watch(name);
  const { client: selectedClientData } = useClient(
    typeof currentValue === "string" ? currentValue : null
  );
  const { clients, clientsLoading } = useClientAutocomplete(inputValue, limit, branchId);
  const options = reactExports.useMemo(
    () => excludeId ? clients.filter((c) => c.id !== excludeId) : clients,
    [clients, excludeId]
  );
  const autocompleteValue = selectedClientData || null;
  const getOptionLabel = (option) => {
    if (typeof option === "string") return option;
    return option ? `${option.first_name} ${option.last_name}${option.preferred_name ? ` (${option.preferred_name})` : ""}` : "";
  };
  const renderOption = (props, option) => {
    const { key, ...otherProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { ...otherProps, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { position: "relative", flexShrink: 0, mr: 1.5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { sx: { width: 28, height: 28, fontSize: 12 }, children: [
          option.first_name?.[0]?.toUpperCase(),
          option.last_name?.[0]?.toUpperCase()
        ] }),
        compactImportance && option.client_importance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientImportanceLabel,
          {
            sx: {
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 9,
              height: 14,
              px: 0.4,
              minWidth: 14
            },
            clientImportance: option.client_importance
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, lineHeight: 1.3, children: [
          option.first_name,
          " ",
          option.last_name,
          !compactImportance && option.client_importance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ClientImportanceLabel,
            {
              sx: { fontSize: 10, ml: 3 },
              clientImportance: option.client_importance
            }
          ),
          option.preferred_name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Typography,
            {
              component: "span",
              variant: "caption",
              color: "text.secondary",
              sx: { ml: 0.5 },
              children: [
                "(",
                option.preferred_name,
                ")"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", children: [option.phone_primary, option.email].filter(Boolean).join(" · ") || "No contact info" })
      ] })
    ] }, key);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Autocomplete,
        {
          value: autocompleteValue,
          id: `${name}-client-autocomplete`,
          options,
          getOptionLabel,
          renderOption,
          onChange: (event, newValue) => {
            setValue(name, newValue?.id || newValue, { shouldValidate: true });
          },
          onInputChange: (event, newInputValue) => {
            setInputValue(newInputValue);
          },
          loading: clientsLoading,
          filterOptions: (x) => x,
          renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              ...params,
              label,
              placeholder,
              error: !!error,
              helperText: error?.message ?? helperText,
              slotProps: {
                input: {
                  ...params.InputProps,
                  endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    clientsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { color: "inherit", size: 20 }) : null,
                    params.InputProps.endAdornment
                  ] })
                }
              }
            }
          ),
          ...other
        }
      )
    }
  );
}
export {
  ClientAutocomplete as C,
  ClientAutocompleteField as a,
  isBirthdayToday as b,
  isBirthdayThisWeek as i
};
