import { r as reactExports, t as toast, j as jsxRuntimeExports, a4 as DashboardContent, ao as CustomBreadcrumbs, y as Card, S as Stack, a as Iconify, c as Typography, B as Box, a2 as Chip, K as Divider, d as Button, I as IconButton, b as CircularProgress, au as MenuList, M as MenuItem, C as CONFIG } from "./index-B08HRm4A.js";
import "./styles-Ddj8daWs.js";
import "./printer-settings.schema-7Wlmy5bs.js";
import { u as useBarcodeScanner } from "./use-barcode-scanner-CEYdIlFE.js";
import "./TextField-CIuP940C.js";
import "./with-selector-ClfCuV5M.js";
import "./schemas-BVeYYbTr.js";
function BarcodeScannerSettingsView() {
  const isElectron = typeof window !== "undefined" && !!window.isElectron;
  const {
    ports,
    portsLoading,
    selectedPort,
    isConnected,
    isConnecting,
    error,
    loadPorts,
    connect,
    disconnect,
    forgetPort
  } = useBarcodeScanner();
  reactExports.useEffect(() => {
    if (isElectron) loadPorts();
  }, [isElectron]);
  const handleConnect = reactExports.useCallback(
    async (portPath) => {
      await connect(portPath);
      toast.success(`Connected to ${portPath}`);
    },
    [connect]
  );
  const handleDisconnect = reactExports.useCallback(async () => {
    await disconnect();
    toast.success("Scanner disconnected");
  }, [disconnect]);
  const handleForget = reactExports.useCallback(async () => {
    await forgetPort();
    toast.success("Scanner device forgotten");
  }, [forgetPort]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Barcode Scanner",
        links: [{ name: "Barcode Scanner" }],
        sx: { mb: 3 }
      }
    ),
    !isElectron ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        sx: {
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          p: 3
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "center", spacing: 1.5, sx: { py: 4 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: "solar:scanner-bold-duotone",
              width: 48,
              sx: { color: "text.disabled" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", color: "text.secondary", children: "Barcode scanner settings are only available in the desktop app" })
        ] })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          sx: {
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            overflow: "hidden",
            mb: 3
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { px: 3, py: 2, borderBottom: "1px solid", borderColor: "divider" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: "Connection Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "The scanner connects over a USB serial port and persists between sessions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Stack,
              {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                sx: { px: 3, py: 2.5 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Iconify,
                      {
                        icon: "solar:scanner-bold-duotone",
                        width: 28,
                        sx: { color: isConnected ? "success.main" : "text.disabled" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: isConnected ? `Connected · ${selectedPort}` : "Not connected" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: isConnected ? "Barcode scanner is active and ready" : selectedPort ? `Last used port: ${selectedPort}` : "Select a port below to connect your scanner" })
                    ] })
                  ] }),
                  isConnected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Connected", color: "success", size: "small" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Disconnected", size: "small" })
                ]
              }
            ),
            error && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { px: 3, py: 1.5, bgcolor: "error.lighter" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:danger-bold", width: 16, sx: { color: "error.main" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "error.dark", children: error })
              ] }) })
            ] }),
            isConnected && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1.5, sx: { px: 3, py: 2 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outlined",
                    color: "error",
                    size: "small",
                    startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:plug-circle-bold", width: 16 }),
                    onClick: handleDisconnect,
                    children: "Disconnect"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outlined",
                    color: "warning",
                    size: "small",
                    startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 }),
                    onClick: handleForget,
                    children: "Forget device"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      !isConnected && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          sx: {
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                sx: {
                  px: 3,
                  py: 2,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: "Available Serial Ports" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Select the port your USB barcode scanner is connected to (baud rate: 9600)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: loadPorts,
                      disabled: portsLoading,
                      title: "Refresh ports",
                      children: portsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:refresh-bold", width: 18 })
                    }
                  )
                ]
              }
            ),
            portsLoading && ports.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, sx: { px: 3, py: 3 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Scanning for serial ports…" })
            ] }) : ports.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "center", spacing: 1, sx: { py: 4, px: 3 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:usb-bold", width: 32, sx: { color: "text.disabled" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No serial ports detected" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", textAlign: "center", children: "Make sure your scanner is plugged in, then click the refresh button" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MenuList, { disablePadding: true, children: ports.map((port, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                MenuItem,
                {
                  onClick: () => handleConnect(port.path),
                  disabled: isConnecting,
                  sx: { px: 3, py: 2, gap: 2 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Iconify,
                      {
                        icon: "solar:usb-bold",
                        width: 20,
                        sx: { color: "text.secondary", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: port.path }),
                      (port.manufacturer || port.pnpId) && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: port.manufacturer ?? port.pnpId })
                    ] }),
                    isConnecting ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Iconify,
                      {
                        icon: "solar:arrow-right-bold",
                        width: 16,
                        sx: { color: "text.disabled" }
                      }
                    )
                  ]
                }
              )
            ] }, port.path)) })
          ]
        }
      )
    ] })
  ] });
}
const metadata = { title: `Barcode Scanner Settings | Dashboard - ${CONFIG.appName}` };
function BarcodeScannerSettingsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BarcodeScannerSettingsView, {})
  ] });
}
export {
  BarcodeScannerSettingsPage as default
};
