import { r as reactExports, E as Ee, j as jsxRuntimeExports, S as Stack, B as Box, T as Tooltip, I as IconButton, a as Iconify, b as CircularProgress, m as mutate } from "./index-B08HRm4A.js";
import { u as useFormContext, C as Controller } from "./form-provider-u_wAFv-h.js";
import { u as useSupplierAutocomplete } from "./supplier-service-CvoEEgb8.js";
import { Q as QuickAddSupplierDialog } from "./quick-add-supplier-dialog-DtmRFzkH.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { T as TextField } from "./TextField-CIuP940C.js";
function SupplierAutocomplete({
  name,
  label = "Supplier",
  helperText,
  placeholder = "Search suppliers…",
  defaultLimit = 5,
  searchLimit = 10,
  quickAdd = false,
  storeId = false,
  ...other
}) {
  const { control, setValue } = useFormContext();
  const [inputValue, setInputValue] = reactExports.useState("");
  const quickAddOpen = Ee();
  const handleCreated = (newSupplier) => {
    mutate((key) => Array.isArray(key) && key[0] === "supplier-autocomplete", void 0, {
      revalidate: true
    });
    setValue(name, storeId ? newSupplier.id : newSupplier.name, { shouldValidate: true });
    quickAddOpen.onFalse();
  };
  const limit = inputValue ? searchLimit : defaultLimit;
  const { suppliers, suppliersLoading } = useSupplierAutocomplete(inputValue || null, limit);
  const options = reactExports.useMemo(() => suppliers, [suppliers]);
  const autocomplete = /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => {
        const savedValue = field.value || null;
        const matchedOption = savedValue ? storeId ? options.find((o) => o.id === savedValue) ?? { id: savedValue, name: savedValue } : options.find((o) => o.name === savedValue) ?? { id: "__saved__", name: savedValue } : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Autocomplete,
          {
            value: matchedOption,
            id: `${name}-supplier-autocomplete`,
            options,
            getOptionLabel: (option) => typeof option === "string" ? option : option?.name ?? "",
            isOptionEqualToValue: (option, value) => storeId ? option?.id === value?.id : option?.name === value?.name,
            onChange: (_, newValue) => {
              setValue(name, storeId ? newValue?.id ?? "" : newValue?.name ?? "", {
                shouldValidate: true
              });
            },
            onInputChange: (_, newInputValue, reason) => {
              if (reason !== "reset") setInputValue(newInputValue);
            },
            loading: suppliersLoading,
            filterOptions: (x) => x,
            renderOption: (props, option) => {
              const { key, ...rest } = props;
              return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600 }, children: option.name }),
                (option.contact_name || option.email || option.phone) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", opacity: 0.65 }, children: [option.contact_name, option.email, option.phone].filter(Boolean).join(" · ") })
              ] }) }, key);
            },
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
                      suppliersLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { color: "inherit", size: 20 }) : null,
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
    }
  );
  if (!quickAdd) return autocomplete;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", spacing: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1 }, children: autocomplete }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Quick add supplier", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          onClick: quickAddOpen.onTrue,
          sx: { mt: 1, border: "1px dashed", borderColor: "divider", borderRadius: 1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuickAddSupplierDialog,
      {
        open: quickAddOpen.value,
        onClose: quickAddOpen.onFalse,
        onCreated: handleCreated
      }
    )
  ] });
}
export {
  SupplierAutocomplete as S
};
