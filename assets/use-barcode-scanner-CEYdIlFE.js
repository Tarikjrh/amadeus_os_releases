import { r as reactExports } from "./index-B08HRm4A.js";
const STORAGE_KEY = "pos_barcode_scanner_port";
const DEFAULT_BAUD_RATE = 9600;
function useBarcodeScanner({ onBarcode } = {}) {
  const isElectron = typeof window !== "undefined" && !!window.isElectron;
  reactExports.useEffect(() => {
    console.log(
      "[useBarcodeScanner] mounted — isElectron:",
      isElectron,
      "| window.isElectron:",
      window?.isElectron,
      "| window.electron:",
      window?.electron
    );
  }, []);
  const [ports, setPorts] = reactExports.useState([]);
  const [portsLoading, setPortsLoading] = reactExports.useState(false);
  const [selectedPort, setSelectedPort] = reactExports.useState(() => localStorage.getItem(STORAGE_KEY) ?? "");
  const [isConnected, setIsConnected] = reactExports.useState(false);
  const [isConnecting, setIsConnecting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const onBarcodeRef = reactExports.useRef(onBarcode);
  reactExports.useEffect(() => {
    onBarcodeRef.current = onBarcode;
  });
  reactExports.useEffect(() => {
    console.log("[useBarcodeScanner] IPC listener effect — isElectron:", isElectron);
    if (!isElectron) return void 0;
    window.electron.onBarcodeScanned((barcode) => {
      console.log(`[useBarcodeScanner] IPC received barcode: "${barcode}"`);
      if (onBarcodeRef.current) onBarcodeRef.current(barcode);
    });
    window.electron.onSerialPortError((message) => {
      setError(message);
      setIsConnected(false);
    });
    window.electron.onSerialPortClosed(() => {
      setIsConnected(false);
    });
    return () => {
      window.electron.removeAllBarcodeListeners();
    };
  }, [isElectron]);
  reactExports.useEffect(() => {
    if (!isElectron) return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const timer = setTimeout(async () => {
      console.log(`[useBarcodeScanner] auto-connecting to saved port: ${saved}`);
      const result = await window.electron.serialOpen(saved, DEFAULT_BAUD_RATE);
      if (result?.success) {
        console.log(`[useBarcodeScanner] auto-connect successful: ${saved}`);
        setIsConnected(true);
        setSelectedPort(saved);
        setError(null);
      } else {
        console.warn(`[useBarcodeScanner] auto-connect failed:`, result?.error);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [isElectron]);
  const loadPorts = reactExports.useCallback(async () => {
    if (!isElectron) return;
    setPortsLoading(true);
    try {
      const list = await window.electron.serialListPorts();
      setPorts(list ?? []);
    } catch (err) {
      console.error("[useBarcodeScanner] listPorts error:", err);
    } finally {
      setPortsLoading(false);
    }
  }, [isElectron]);
  const connect = reactExports.useCallback(
    async (portPath) => {
      if (!isElectron) return;
      setError(null);
      setIsConnecting(true);
      try {
        console.log(`[useBarcodeScanner] connecting to port: ${portPath}`);
        const result = await window.electron.serialOpen(portPath, DEFAULT_BAUD_RATE);
        if (result?.success) {
          console.log(`[useBarcodeScanner] connected to: ${portPath}`);
          setIsConnected(true);
          setSelectedPort(portPath);
          localStorage.setItem(STORAGE_KEY, portPath);
        } else {
          console.warn(`[useBarcodeScanner] failed to connect:`, result?.error);
          setError(result?.error ?? "Failed to open port");
        }
      } catch (err) {
        console.error(`[useBarcodeScanner] connect error:`, err);
        setError(err.message ?? "Unknown error");
      } finally {
        setIsConnecting(false);
      }
    },
    [isElectron]
  );
  const disconnect = reactExports.useCallback(async () => {
    if (!isElectron) return;
    await window.electron.serialClose();
    setIsConnected(false);
  }, [isElectron]);
  const forgetPort = reactExports.useCallback(async () => {
    await disconnect();
    localStorage.removeItem(STORAGE_KEY);
    setSelectedPort("");
  }, [disconnect]);
  return {
    isElectron,
    ports,
    portsLoading,
    selectedPort,
    setSelectedPort,
    isConnected,
    isConnecting,
    error,
    loadPorts,
    connect,
    disconnect,
    forgetPort
  };
}
export {
  useBarcodeScanner as u
};
