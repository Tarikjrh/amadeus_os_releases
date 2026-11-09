import { o as object, b as boolean, s as string } from "./schemas-BVeYYbTr.js";
const PrinterSettingsSchema = object({
  printerName: string().min(1, "Please select a printer"),
  autoPrintReceipt: boolean().optional().default(false),
  autoOpenDrawer: boolean().optional().default(false)
});
export {
  PrinterSettingsSchema as P
};
