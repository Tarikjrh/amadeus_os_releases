import { r as reactExports, t as toast, j as jsxRuntimeExports, a4 as DashboardContent, c as Typography, y as Card, S as Stack, M as MenuItem, a8 as FormControlLabel, at as Switch, K as Divider, d as Button, C as CONFIG } from "./index-B08HRm4A.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { P as PrinterSettingsSchema } from "./printer-settings.schema-7Wlmy5bs.js";
import { P as PRINTER_SETTINGS_KEY, D as DEFAULT_PRINTER_SETTINGS } from "./printer-settings.constants-c9EyPjes.js";
import "./TextField-CIuP940C.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./InputAdornment-BqZyQBIE.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./Dialog-C5RfKkDi.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./with-selector-ClfCuV5M.js";
import "./schemas-BVeYYbTr.js";
function PrinterSettingsView() {
  const [printers, setPrinters] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (window.isElectron && window.electron?.getPrinters) {
      window.electron.getPrinters().then(setPrinters).catch((err) => console.error("Failed to load printers:", err));
    }
  }, []);
  const savedSettings = (() => {
    try {
      const stored = localStorage.getItem(PRINTER_SETTINGS_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  })();
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(PrinterSettingsSchema),
    defaultValues: savedSettings || DEFAULT_PRINTER_SETTINGS
  });
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting }
  } = methods;
  const autoPrintReceipt = watch("autoPrintReceipt");
  const autoOpenDrawer = watch("autoOpenDrawer");
  const onSubmit = handleSubmit((data) => {
    localStorage.setItem(PRINTER_SETTINGS_KEY, JSON.stringify(data));
    toast.success("Printer settings saved!");
  });
  const handleTestDrawer = async () => {
    const printerName = methods.getValues("printerName");
    if (!printerName) {
      toast.error("Please select a printer first");
      return;
    }
    toast.loading("Opening drawer…", { id: "drawer-test" });
    const result = await window.electron.openCashDrawer(printerName);
    if (result?.success) {
      toast.success("Cash drawer opened!", { id: "drawer-test" });
    } else {
      toast.error(`Failed to open drawer: ${result?.error || "Unknown error"}`, {
        id: "drawer-test"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { mb: 4 }, children: "Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 3 }, children: "Printer Configuration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Select,
          {
            name: "printerName",
            label: "Receipt Printer",
            helperText: printers.length === 0 && window.isElectron ? "No printers detected — enter a name manually or check your printer connection" : "Select the printer used for silent receipt printing",
            children: printers.map((printer) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: printer.name, children: [
              printer.displayName,
              printer.isDefault ? " (Default)" : ""
            ] }, printer.name))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormControlLabel,
          {
            control: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: !!autoPrintReceipt,
                onChange: (e) => setValue("autoPrintReceipt", e.target.checked)
              }
            ),
            label: "Auto-print receipt after every POS sale"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: "Cash Drawer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "The cash drawer connects to the printer's RJ11 drawer-kick port. The open command is sent to the receipt printer selected above via USB." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormControlLabel,
          {
            control: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: !!autoOpenDrawer,
                onChange: (e) => setValue("autoOpenDrawer", e.target.checked)
              }
            ),
            label: "Auto-open cash drawer after every POS sale"
          }
        ),
        window.isElectron && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: handleTestDrawer, sx: { alignSelf: "flex-start" }, children: "Test — Open Drawer Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", size: "large", disabled: isSubmitting, children: "Save Settings" })
      ] }) })
    ] })
  ] });
}
const metadata = { title: `Settings | Dashboard - ${CONFIG.appName}` };
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrinterSettingsView, {})
  ] });
}
export {
  Page as default
};
