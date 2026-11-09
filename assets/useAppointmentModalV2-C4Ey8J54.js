import { r as reactExports, bX as useTheme, X as menuItemClasses, c8 as listClasses, j as jsxRuntimeExports, c9 as Popover, ca as I, B as Box, c as Typography, a2 as Chip, a as Iconify, cb as CATEGORY_LABELS, b as CircularProgress, cc as CATEGORY_COLORS, a5 as alpha, d as Button, T as Tooltip, I as IconButton, al as Avatar, h as dayjs, bo as useRouter, a6 as useUserBranches, cd as ASSIGNMENT_MODE, t as toast, a3 as paths, K as Divider, S as Stack, ce as STATUS_OPTIONS, cf as STATUS_MUI_COLORS, x as Select, M as MenuItem, bA as Collapse, ax as Alert, L as Label } from "./index-B08HRm4A.js";
import { g as getPopoverOrigin, a as getPaperOffsetStyles, A as Arrow } from "./styles-BdIysWnF.js";
import { a as useForm, b as u, c as useFieldArray } from "./form-provider-u_wAFv-h.js";
import { u as useMediaQuery } from "./useMobilePicker-D3Q_Tt3t.js";
import { b as SERVICE_GROUPS, j as useGetBranchServices } from "./services-UhlA7T7c.js";
import { u as updateAppointment, c as createAppointment, i as invalidateAppointments, C as ClientQuickAddDialog, d as deleteAppointment } from "./client-quick-add-dialog-Ckc4WOT8.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as ClientAutocompleteField } from "./client-autocomplete-C_9PlkEm.js";
import { u as useStaffData } from "./useStaffData-BIkbeKJv.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { T as TextField, F as FormControl, I as InputLabel, b as FormHelperText } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { C as Checkbox } from "./Checkbox-Br8xlIAK.js";
import { o as object, a as array, s as string, n as number } from "./schemas-BVeYYbTr.js";
import { T as TimePicker } from "./fields-CnHGHSTe.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { D as DatePicker } from "./DatePicker-D3PAml74.js";
import { T as ToggleButtonGroup } from "./ToggleButtonGroup-CJXz0-w5.js";
import { b as ToggleButton } from "./ToggleButton-D4MfeHtt.js";
function toNumber(value) {
  if (!value) return 0;
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}
function extractTranslate(translate) {
  if (!translate || translate === "none") return { translateX: 0, translateY: 0 };
  const [x, y] = translate.split(" ");
  return {
    translateX: toNumber(x),
    translateY: toNumber(y)
  };
}
function useElementRect(element, context, open) {
  const [rect, setRect] = reactExports.useState(null);
  const updateRect = reactExports.useCallback(() => {
    if (!element || !open) return;
    let nextRect;
    if (context === "popoverPaper") {
      const { top, left, width, height, marginTop, marginLeft, translate } = getComputedStyle(element);
      const { translateX, translateY } = extractTranslate(translate);
      nextRect = {
        width: toNumber(width),
        height: toNumber(height),
        top: toNumber(top) + toNumber(marginTop) + translateY,
        left: toNumber(left) + toNumber(marginLeft) + translateX
      };
    } else {
      const domRect = element.getBoundingClientRect();
      nextRect = {
        top: domRect.top,
        left: domRect.left,
        width: domRect.width,
        height: domRect.height
      };
    }
    setRect(nextRect);
  }, [context, element, open]);
  reactExports.useEffect(() => {
    if (!element || !open) return;
    updateRect();
    const resizeObserver = new ResizeObserver(updateRect);
    resizeObserver.observe(element);
    window.addEventListener("resize", updateRect, { passive: true });
    window.addEventListener("scroll", updateRect, { capture: true });
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, [element, open, updateRect]);
  return rect;
}
const DEFAULT_ARROW_SIZE = 14;
const DEFAULT_ARROW_PLACEMENT = "top-right";
const DEFAULT_PAPER_OFFSET = [8, 2];
function CustomPopover({ open, onClose, children, anchorEl, slotProps, ...other }) {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const { arrow: arrowProps, paper: paperProps, ...otherSlotProps } = slotProps ?? {};
  const arrowSize = arrowProps?.size ?? DEFAULT_ARROW_SIZE;
  const arrowPlacement = arrowProps?.placement ?? DEFAULT_ARROW_PLACEMENT;
  const paperOffset = paperProps?.offset ?? DEFAULT_PAPER_OFFSET;
  const { anchorOrigin, transformOrigin } = getPopoverOrigin(arrowPlacement, isRtl);
  const paperRef = reactExports.useRef(null);
  const paperRect = useElementRect(paperRef.current, "popoverPaper", open);
  const anchorRect = useElementRect(anchorEl, "anchor", open);
  const isArrowVisible = !arrowProps?.hide && !!paperRect && !!anchorRect;
  const paperStyles = {
    ...getPaperOffsetStyles(arrowPlacement, paperOffset, isRtl),
    overflow: "inherit",
    [`& .${listClasses.root}`]: { minWidth: 140 },
    [`& .${menuItemClasses.root}`]: { gap: 2 }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Popover,
    {
      "aria-hidden": !open,
      open: !!open,
      anchorEl,
      onClose,
      anchorOrigin,
      transformOrigin,
      slotProps: {
        ...otherSlotProps,
        paper: {
          ...paperProps,
          ref: I([paperRef, paperProps?.ref]),
          sx: [paperStyles, ...Array.isArray(paperProps?.sx) ? paperProps.sx : [paperProps?.sx]]
        }
      },
      ...other,
      children: [
        isArrowVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Arrow,
          {
            size: arrowSize,
            placement: arrowPlacement,
            paperRect,
            anchorRect,
            sx: arrowProps?.sx
          }
        ),
        children
      ]
    }
  );
}
Object.fromEntries(SERVICE_GROUPS.map((g) => [g.value, g.label]));
const getPriceForLevel = (service, level) => {
  if (level === "junior") return service.junior_price || 0;
  if (level === "senior") return service.senior_price || 0;
  if (level === "prive") return service.prive_price || 0;
  return service.junior_price || service.senior_price || service.prive_price || 0;
};
function ServicePickerDialog({ open, onClose, branchId, alreadySelectedIds = [] }) {
  const [search, setSearch] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("all");
  const [checked, setChecked] = reactExports.useState([]);
  const { services, servicesLoading } = useGetBranchServices(branchId || null, {
    filters: { pageSize: 200 }
  });
  reactExports.useEffect(() => {
    if (open) {
      setChecked([]);
      setSearch("");
      setSelectedCategory("all");
    }
  }, [open]);
  const categories = reactExports.useMemo(() => {
    const cats = [...new Set(services.map((s) => s.category).filter(Boolean))];
    return ["all", ...cats];
  }, [services]);
  const filtered = reactExports.useMemo(() => {
    let result = services;
    if (selectedCategory !== "all") {
      result = result.filter((s) => s.category === selectedCategory);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((s) => s.service_name?.toLowerCase().includes(q));
    }
    return result;
  }, [services, selectedCategory, search]);
  const toggleService = (svc) => {
    setChecked((prev) => {
      const exists = prev.find((s) => s.id === svc.id);
      return exists ? prev.filter((s) => s.id !== svc.id) : [...prev, svc];
    });
  };
  const isChecked = (svc) => checked.some((s) => s.id === svc.id);
  const isAlreadyAdded = (svc) => alreadySelectedIds.includes(svc.id);
  const handleAdd = () => {
    onClose(checked);
  };
  const handleCancel = () => {
    onClose(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: handleCancel, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Add Services" }),
      checked.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: `${checked.length} selected`, size: "small", color: "primary" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { dividers: true, sx: { p: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          size: "small",
          placeholder: "Search services...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          fullWidth: true,
          sx: { mb: 2 },
          slotProps: {
            input: {
              startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill", width: 18, sx: { color: "text.disabled" } }) })
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", gap: 0.75, flexWrap: "wrap", mb: 2 }, children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Chip,
        {
          label: cat === "all" ? "All" : CATEGORY_LABELS[cat] ?? cat,
          size: "small",
          variant: selectedCategory === cat ? "filled" : "outlined",
          color: selectedCategory === cat ? "primary" : "default",
          onClick: () => setSelectedCategory(cat)
        },
        cat
      )) }),
      servicesLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 28 }) }),
      !servicesLoading && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", textAlign: "center", sx: { py: 4 }, children: "No services found" }),
      !servicesLoading && filtered.map((svc) => {
        const alreadyAdded = isAlreadyAdded(svc);
        const selected = isChecked(svc);
        const basePrice = svc.junior_price ?? svc.senior_price ?? null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            onClick: () => !alreadyAdded && toggleService(svc),
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: 1.5,
              mb: 0.75,
              borderRadius: 1.5,
              border: "1px solid",
              borderColor: selected ? "primary.main" : "divider",
              bgcolor: (theme) => selected ? alpha(theme.palette.primary.main, 0.08) : "background.paper",
              cursor: alreadyAdded ? "not-allowed" : "pointer",
              opacity: alreadyAdded ? 0.5 : 1,
              transition: "border-color 0.15s, background-color 0.15s",
              "&:hover": (theme) => !alreadyAdded ? {
                borderColor: selected ? "primary.dark" : "primary.light",
                bgcolor: selected ? alpha(theme.palette.primary.main, 0.08) : "action.hover"
              } : {}
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  checked: alreadyAdded || selected,
                  disabled: alreadyAdded,
                  size: "small",
                  sx: { p: 0, flexShrink: 0 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, noWrap: true, children: svc.service_name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                  svc.duration_minutes,
                  " min",
                  alreadyAdded && " · Already added"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { textAlign: "right", flexShrink: 0 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: CATEGORY_LABELS[svc.category] ?? svc.category,
                    size: "small",
                    sx: {
                      height: 18,
                      fontSize: "0.6rem",
                      mb: 0.5,
                      bgcolor: CATEGORY_COLORS[svc.category] ?? CATEGORY_COLORS.other,
                      color: "white"
                    }
                  }
                ),
                basePrice !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", display: "block", fontWeight: 600, children: [
                  "$",
                  basePrice
                ] })
              ] })
            ]
          },
          svc.id
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleCancel, color: "inherit", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "contained", onClick: handleAdd, disabled: checked.length === 0, children: [
        "Add ",
        checked.length > 0 ? `(${checked.length})` : ""
      ] })
    ] })
  ] });
}
const serviceItemSchema = object({
  row_id: string().optional(),
  // appointment_services.id — present when editing
  service_id: string().min(1),
  service_name: string(),
  service_category: string().nullable().optional(),
  duration_minutes: number().int().positive(),
  price: number().nonnegative(),
  stylist_level: string().nullable().optional(),
  performed_by: string().nullable().optional(),
  // stylist UUID
  start_time: string().nullable().optional(),
  // HH:mm
  end_time: string().nullable().optional()
  // HH:mm
});
const AppointmentDialogSchema = object({
  branch_id: string().min(1, "Branch is required"),
  client_id: string().min(1, "Client is required"),
  appointment_date: string().min(1, "Date is required"),
  start_time: string().min(1, "Start time is required"),
  end_time: string().min(1, "End time is required"),
  status: string().default("scheduled"),
  client_notes: string().optional().default(""),
  internal_notes: string().optional().default(""),
  services: array(serviceItemSchema).default([])
});
function parsTimeToView(timeStr) {
  if (!timeStr) return null;
  const parsed = dayjs(`2000-01-01T${timeStr}`);
  return parsed.isValid() ? parsed : null;
}
function AppointmentDialogServiceRow({
  service,
  index,
  branchId,
  staff = [],
  showStylist,
  onTimeChange,
  onStylistChange,
  onRemove
}) {
  const categoryColor = CATEGORY_COLORS[service.service_category] ?? CATEGORY_COLORS.other;
  const categoryLabel = CATEGORY_LABELS[service.service_category] ?? service.service_category ?? "—";
  const selectedStylist = staff.find((s) => s.id === service.performed_by) ?? null;
  const [localStart, setLocalStart] = reactExports.useState(() => parsTimeToView(service.start_time));
  const [localEnd, setLocalEnd] = reactExports.useState(() => parsTimeToView(service.end_time));
  reactExports.useEffect(() => {
    setLocalStart(parsTimeToView(service.start_time));
  }, [service.start_time]);
  reactExports.useEffect(() => {
    setLocalEnd(parsTimeToView(service.end_time));
  }, [service.end_time]);
  const commitStart = (val) => {
    if (!val?.isValid()) return;
    const startStr = val.format("HH:mm");
    const currentEnd = parsTimeToView(service.end_time);
    const currentStart = parsTimeToView(service.start_time);
    let endStr;
    if (currentEnd && currentStart) {
      const deltaMins = val.diff(currentStart, "minute");
      endStr = currentEnd.add(deltaMins, "minute").format("HH:mm");
    } else {
      endStr = val.add(service.duration_minutes, "minute").format("HH:mm");
    }
    onTimeChange(index, startStr, endStr);
  };
  const commitEnd = (val) => {
    if (!val?.isValid()) return;
    onTimeChange(index, service.start_time, val.format("HH:mm"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        p: 1.5,
        mb: 1,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.neutral"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "flex-start", gap: 1, mb: 1.25 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                width: 6,
                alignSelf: "stretch",
                borderRadius: 1,
                flexShrink: 0,
                bgcolor: categoryColor,
                mr: 0.5
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.75, flexWrap: "wrap" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 700, noWrap: true, children: service.service_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: categoryLabel,
                  size: "small",
                  sx: {
                    height: 16,
                    fontSize: "0.58rem",
                    bgcolor: categoryColor,
                    color: "white",
                    flexShrink: 0
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
              service.duration_minutes,
              " min",
              service.price > 0 ? ` · $${Number(service.price).toFixed(2)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Remove service", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => onRemove(index), sx: { flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-fill", width: 16 }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, mb: showStylist ? 1.25 : 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TimePicker,
            {
              label: "Start time",
              value: localStart,
              onChange: setLocalStart,
              onAccept: commitStart,
              format: "hh:mm a",
              slotProps: {
                textField: {
                  size: "small",
                  sx: { flex: 1 },
                  onBlur: () => commitStart(localStart)
                }
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: "eva:arrow-forward-fill",
              width: 14,
              sx: { color: "text.disabled", flexShrink: 0 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TimePicker,
            {
              label: "End time",
              value: localEnd,
              onChange: setLocalEnd,
              onAccept: commitEnd,
              format: "hh:mm a",
              slotProps: {
                textField: {
                  size: "small",
                  sx: { flex: 1 },
                  onBlur: () => commitEnd(localEnd)
                }
              }
            }
          )
        ] }),
        showStylist && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Autocomplete,
          {
            size: "small",
            value: selectedStylist,
            options: staff,
            getOptionLabel: (opt) => opt.display_name ?? "",
            isOptionEqualToValue: (a, b) => a.id === b.id,
            onChange: (_, val) => onStylistChange(index, val?.id ?? null),
            disabled: !branchId,
            renderOption: (props, opt) => {
              const { key, ...rest } = props;
              return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, py: 0.25 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Avatar,
                  {
                    src: opt.avatar,
                    sx: {
                      width: 28,
                      height: 28,
                      fontSize: 11,
                      bgcolor: opt.calendar_color ?? "primary.main"
                    },
                    children: opt.display_name?.[0]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, sx: { lineHeight: 1.3 }, children: opt.display_name }),
                  opt.level && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", sx: { lineHeight: 1 }, children: opt.level })
                ] })
              ] }) }, key);
            },
            renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { ...params, label: "Assign stylist", placeholder: "No stylist assigned" })
          }
        )
      ]
    }
  );
}
function timeStrToDayjs(str) {
  if (!str) return null;
  const parsed = dayjs(`2000-01-01T${str}`);
  return parsed.isValid() ? parsed : null;
}
function dayjsToTimeStr(dj) {
  if (!dj?.isValid()) return "";
  return dj.format("HH:mm");
}
function stackServiceTimes(services, startTimeStr) {
  if (!startTimeStr || services.length === 0) return services;
  let [h, m] = startTimeStr.split(":").map(Number);
  let cursor = h * 60 + m;
  return services.map((svc) => {
    const startMin = cursor;
    const endMin = cursor + (svc.duration_minutes || 0);
    cursor = endMin;
    const toHHmm = (mins) => `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`;
    return { ...svc, start_time: toHHmm(startMin), end_time: toHHmm(endMin) };
  });
}
function buildDefaultValues(event, primaryBranch) {
  const base = {
    branch_id: primaryBranch?.id ?? "",
    client_id: "",
    appointment_date: dayjs().format("YYYY-MM-DD"),
    start_time: "09:00",
    end_time: "10:00",
    status: "scheduled",
    client_notes: "",
    internal_notes: "",
    services: []
  };
  if (!event) return base;
  const ep = event.extendedProps ?? {};
  const isEdit = Boolean(ep.appointmentId);
  if (!isEdit) {
    return {
      ...base,
      branch_id: primaryBranch?.id ?? "",
      appointment_date: ep.selectedDate ?? dayjs(event.start).format("YYYY-MM-DD"),
      start_time: ep.selectedStartTime ?? "09:00",
      end_time: ep.selectedEndTime ?? "10:00"
    };
  }
  const services = (ep.services ?? []).slice().sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0)).map((s) => ({
    row_id: s.id,
    service_id: s.service_id,
    service_name: s.service_name,
    service_category: s.service_category ?? null,
    duration_minutes: s.duration_minutes,
    price: Number(s.price ?? 0),
    stylist_level: s.stylist_level ?? null,
    performed_by: s.performed_by ?? null,
    start_time: s.start_time ?? null,
    end_time: s.end_time ?? null
  }));
  return {
    branch_id: ep.branch_id ?? primaryBranch?.id ?? "",
    client_id: ep.client?.id ?? "",
    appointment_date: dayjs(event.start).format("YYYY-MM-DD"),
    start_time: ep.appointmentStartTime ?? "09:00",
    end_time: ep.appointmentEndTime ?? "10:00",
    status: ep.status ?? "scheduled",
    client_notes: ep.clientNotes ?? "",
    internal_notes: ep.internalNotes ?? "",
    services
  };
}
function AppointmentDialog({ open, onClose, currentEvent = null }) {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { primaryBranch, branchesOnly: branches } = useUserBranches();
  const isEdit = Boolean(currentEvent?.extendedProps?.appointmentId);
  const appointmentId = currentEvent?.extendedProps?.appointmentId ?? null;
  const defaultValues = buildDefaultValues(currentEvent, primaryBranch);
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(AppointmentDialogSchema),
    defaultValues
  });
  const {
    reset,
    watch,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = methods;
  const {
    fields: serviceFields,
    append,
    remove,
    update
  } = useFieldArray({
    control: methods.control,
    name: "services"
  });
  const watchedBranchId = watch("branch_id");
  const watchedStartTime = watch("start_time");
  const watchedDate = watch("appointment_date");
  const watchedStatus = watch("status");
  const prevStartTimeRef = reactExports.useRef(watchedStartTime);
  const { staff } = useStaffData(watchedBranchId);
  const { services: branchServices } = useGetBranchServices(watchedBranchId || null, {
    filters: { pageSize: 200 }
  });
  const getPricingForStylist = reactExports.useCallback(
    (row, stylistId) => {
      const catalogSvc = branchServices.find((svc) => svc.id === row.service_id);
      const stylist = stylistId ? staff.find((st) => st.id === stylistId) : null;
      const level = stylist?.level ?? null;
      const stylistSvc = stylist?.services?.find((svc) => svc.service_id === row.service_id);
      if (stylistSvc?.price != null) {
        return { price: Number(stylistSvc.price), stylist_level: level };
      }
      if (catalogSvc) {
        return { price: Number(getPriceForLevel(catalogSvc, level)), stylist_level: level };
      }
      return { price: row.price, stylist_level: level ?? row.stylist_level ?? null };
    },
    [branchServices, staff]
  );
  const [selectedClient, setSelectedClient] = reactExports.useState(null);
  const [quickAddClientOpen, setQuickAddClientOpen] = reactExports.useState(false);
  const [assignmentMode, setAssignmentMode] = reactExports.useState(ASSIGNMENT_MODE.INDIVIDUAL);
  const [globalStylist, setGlobalStylist] = reactExports.useState(null);
  const [pickerOpen, setPickerOpen] = reactExports.useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const [notesOpen, setNotesOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (open) {
      const fresh = buildDefaultValues(currentEvent, primaryBranch);
      reset(fresh);
      prevStartTimeRef.current = fresh.start_time;
      const ep2 = currentEvent?.extendedProps;
      setNotesOpen(Boolean(ep2?.clientNotes || ep2?.internalNotes));
      const ep = currentEvent?.extendedProps;
      if (ep?.client) {
        setSelectedClient(ep.client);
      } else {
        setSelectedClient(null);
      }
      const services = fresh.services;
      if (services.length > 0) {
        const firstStylist = services[0].performed_by;
        const allSame = firstStylist && services.every((s) => s.performed_by === firstStylist);
        setAssignmentMode(allSame ? ASSIGNMENT_MODE.ALL : ASSIGNMENT_MODE.INDIVIDUAL);
        if (allSame) {
          setGlobalStylist(staff.find((s) => s.id === firstStylist) ?? null);
        } else {
          setGlobalStylist(null);
        }
      } else {
        setAssignmentMode(ASSIGNMENT_MODE.INDIVIDUAL);
        setGlobalStylist(null);
      }
    }
  }, [open, currentEvent?.extendedProps?.appointmentId]);
  reactExports.useEffect(() => {
    if (assignmentMode === ASSIGNMENT_MODE.ALL && globalStylist) {
      const current = getValues("services");
      current.forEach((row, i) => {
        if (row.performed_by === globalStylist.id) return;
        update(i, {
          ...row,
          performed_by: globalStylist.id,
          ...getPricingForStylist(row, globalStylist.id)
        });
      });
    }
  }, [globalStylist, assignmentMode]);
  reactExports.useEffect(() => {
    if (watchedStartTime === prevStartTimeRef.current) return;
    prevStartTimeRef.current = watchedStartTime;
    const current = getValues("services");
    if (current.length === 0) return;
    const restacked = stackServiceTimes(current, watchedStartTime);
    restacked.forEach((svc, i) => update(i, svc));
    const lastEnd = restacked[restacked.length - 1]?.end_time;
    if (lastEnd) setValue("end_time", lastEnd);
  }, [watchedStartTime]);
  const handlePickerClose = reactExports.useCallback(
    (picked) => {
      setPickerOpen(false);
      if (!picked || picked.length === 0) return;
      const current = getValues("services");
      const lastEnd = current.length > 0 ? current[current.length - 1].end_time : watchedStartTime;
      let cursor = lastEnd ?? watchedStartTime ?? "09:00";
      const [h, m] = cursor.split(":").map(Number);
      let cursorMinutes = h * 60 + m;
      const toHHmm = (mins) => `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`;
      picked.forEach((svc) => {
        const basePrice = svc.junior_price ?? svc.senior_price ?? 0;
        const start_time = toHHmm(cursorMinutes);
        cursorMinutes += svc.duration_minutes ?? 0;
        const end_time = toHHmm(cursorMinutes);
        const performedBy = assignmentMode === ASSIGNMENT_MODE.ALL && globalStylist ? globalStylist.id : null;
        const newRow = {
          service_id: svc.id,
          service_name: svc.service_name,
          service_category: svc.category ?? null,
          duration_minutes: svc.duration_minutes ?? 0,
          price: Number(basePrice),
          stylist_level: null,
          performed_by: performedBy,
          start_time,
          end_time
        };
        if (performedBy) {
          const stylist = staff.find((st) => st.id === performedBy);
          const level = stylist?.level ?? null;
          const stylistSvc = stylist?.services?.find((s) => s.service_id === svc.id);
          newRow.price = Number(stylistSvc?.price ?? getPriceForLevel(svc, level));
          newRow.stylist_level = level;
        }
        append(newRow);
      });
      const newEnd = toHHmm(cursorMinutes);
      setValue("end_time", newEnd);
    },
    [append, assignmentMode, getValues, globalStylist, setValue, staff, watchedStartTime]
  );
  const handleServiceTimeChange = reactExports.useCallback(
    (index, newStart, newEnd) => {
      const current = getValues("services");
      update(index, { ...current[index], start_time: newStart, end_time: newEnd });
      const updated = getValues("services");
      const lastEnd = updated[updated.length - 1]?.end_time;
      if (lastEnd) setValue("end_time", lastEnd);
      const firstStart = updated[0]?.start_time;
      if (firstStart) setValue("start_time", firstStart);
    },
    [getValues, setValue, update]
  );
  const handleServiceStylistChange = reactExports.useCallback(
    (index, stylistId) => {
      const current = getValues("services");
      const row = current[index];
      update(index, { ...row, performed_by: stylistId, ...getPricingForStylist(row, stylistId) });
    },
    [getPricingForStylist, getValues, update]
  );
  const onSubmit = handleSubmit(async (data) => {
    const totalDuration = data.services.reduce((sum, s) => sum + s.duration_minutes, 0);
    const payload = {
      branch_id: data.branch_id,
      client_id: data.client_id,
      appointment_date: data.appointment_date,
      start_time: data.start_time,
      end_time: data.end_time,
      duration_minutes: totalDuration || 60,
      status: data.status || "scheduled",
      client_notes: data.client_notes || null,
      internal_notes: data.internal_notes || null,
      services: data.services.map((s, i) => ({
        service_id: s.service_id,
        service_name: s.service_name,
        service_category: s.service_category ?? "other",
        duration_minutes: s.duration_minutes,
        price: s.price,
        stylist_level: s.stylist_level ?? "junior",
        performed_by: s.performed_by ?? null,
        start_time: s.start_time ?? null,
        end_time: s.end_time ?? null,
        display_order: i
      }))
    };
    try {
      if (isEdit) {
        const { error } = await updateAppointment(appointmentId, payload);
        if (error) throw error;
        toast.success("Appointment updated");
      } else {
        const { error } = await createAppointment(payload);
        if (error) throw error;
        toast.success("Appointment created");
      }
      invalidateAppointments();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error(isEdit ? "Failed to update appointment" : "Failed to create appointment");
    }
  });
  const handleDelete = async () => {
    try {
      const { error } = await deleteAppointment(appointmentId);
      if (error) throw error;
      toast.success("Appointment cancelled");
      invalidateAppointments();
      setDeleteDialogOpen(false);
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to cancel appointment");
    }
  };
  const selectedServiceIds = serviceFields.map((f) => f.service_id);
  const endTimeDisplay = watch("end_time");
  const watchedClientNotes = watch("client_notes");
  const watchedInternalNotes = watch("internal_notes");
  const watchedBranch = (branches ?? []).find((b) => b.id === watchedBranchId) ?? null;
  const paymentStatus = currentEvent?.extendedProps?.paymentStatus ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Dialog,
      {
        open,
        onClose,
        maxWidth: "lg",
        fullWidth: true,
        fullScreen: isMobile,
        PaperProps: { sx: { borderRadius: isMobile ? 0 : 2 } },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { sx: { pb: 1.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  width: 36,
                  height: 36,
                  borderRadius: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "primary.lighter",
                  flexShrink: 0
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Iconify,
                  {
                    icon: "mingcute:calendar-add-line",
                    width: 20,
                    sx: { color: "primary.main" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { lineHeight: 1.2 }, children: isEdit ? "Edit Appointment" : "New Appointment" }),
              isEdit && currentEvent?.extendedProps?.appointmentNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                "#",
                currentEvent.extendedProps.appointmentNumber
              ] })
            ] }),
            isEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outlined",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:eye-bold" }),
                onClick: () => {
                  onClose();
                  router.push(paths.dashboard.appointments.details(appointmentId));
                },
                children: "View Details"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-fill", width: 20 }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DialogContent,
            {
              sx: {
                p: 0,
                display: "flex",
                overflow: "hidden",
                flexDirection: { xs: "column", md: "row" }
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1, p: 2.5, overflowY: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { id: "appointment-dialog-form", onSubmit, noValidate: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
                  isEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", children: STATUS_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: opt.label,
                      color: STATUS_MUI_COLORS[opt.value],
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: opt.icon, height: 12 }),
                      onClick: () => setValue("status", opt.value),
                      sx: {
                        fontWeight: 600,
                        borderRadius: 1,
                        border: "none",
                        bgcolor: watchedStatus === opt.value ? STATUS_MUI_COLORS[opt.value] ?? "grey.400" : "action.selected",
                        color: watchedStatus === opt.value ? "white" : "text.secondary",
                        cursor: "pointer",
                        "&:hover": {
                          bgcolor: STATUS_MUI_COLORS[opt.value] ?? "grey.400",
                          color: "white"
                        }
                      }
                    },
                    opt.value
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Box,
                    {
                      sx: {
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr auto" },
                        gap: 2
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "flex-start", gap: 1 }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ClientAutocompleteField,
                            {
                              label: "Client",
                              branchId: watchedBranchId,
                              value: selectedClient,
                              size: "medium",
                              error: !!errors.client_id,
                              helperText: errors.client_id?.message,
                              onChange: (client) => {
                                setSelectedClient(client);
                                setValue("client_id", client?.id ?? "", { shouldValidate: true });
                              },
                              sx: { flex: 1, minWidth: 0 }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Quick add client", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            IconButton,
                            {
                              onClick: () => setQuickAddClientOpen(true),
                              sx: {
                                width: 56,
                                height: 56,
                                flexShrink: 0,
                                borderRadius: 1,
                                border: (t) => `1px solid ${t.vars.palette.divider}`
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line", width: 20 })
                            }
                          ) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          FormControl,
                          {
                            size: "medium",
                            sx: { minWidth: { xs: "100%", sm: 180 } },
                            error: !!errors.branch_id,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Branch" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Select,
                                {
                                  label: "Branch",
                                  value: watchedBranchId,
                                  onChange: (e) => setValue("branch_id", e.target.value, { shouldValidate: true }),
                                  children: (branches ?? []).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: b.id, children: b.name }, b.id))
                                }
                              ),
                              errors.branch_id && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { children: errors.branch_id.message })
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Box,
                    {
                      sx: {
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 2
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          DatePicker,
                          {
                            label: "Date",
                            value: watchedDate ? dayjs(watchedDate) : null,
                            onChange: (val) => setValue("appointment_date", val?.format("YYYY-MM-DD") ?? "", {
                              shouldValidate: true
                            }),
                            slotProps: {
                              textField: {
                                size: "medium",
                                error: !!errors.appointment_date,
                                helperText: errors.appointment_date?.message
                              }
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { position: "relative" }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            TimePicker,
                            {
                              label: "Appointment time",
                              value: timeStrToDayjs(watchedStartTime),
                              onChange: (val) => {
                                const str = dayjsToTimeStr(val);
                                setValue("start_time", str, { shouldValidate: true });
                              },
                              format: "hh:mm a",
                              slotProps: {
                                textField: {
                                  size: "medium",
                                  fullWidth: true,
                                  error: !!errors.start_time,
                                  helperText: errors.start_time?.message
                                }
                              }
                            }
                          ),
                          endTimeDisplay && endTimeDisplay !== watchedStartTime && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Typography,
                            {
                              variant: "caption",
                              color: "text.disabled",
                              sx: { position: "absolute", bottom: -18, left: 2 },
                              children: [
                                "ends ",
                                timeStrToDayjs(endTimeDisplay)?.format("h:mm A")
                              ]
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Box,
                      {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 1.5
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: 700, children: "Services" }),
                            serviceFields.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Chip,
                              {
                                label: serviceFields.length,
                                size: "small",
                                color: "primary",
                                variant: "soft"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "small",
                              variant: "outlined",
                              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:plus-fill" }),
                              onClick: () => setPickerOpen(true),
                              disabled: !watchedBranchId,
                              children: "Add services"
                            }
                          )
                        ]
                      }
                    ),
                    serviceFields.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mb: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Iconify,
                          {
                            icon: "mingcute:user-star-line",
                            width: 16,
                            sx: { color: "text.secondary" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", fontWeight: 600, children: "Stylist assignment:" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        ToggleButtonGroup,
                        {
                          size: "small",
                          exclusive: true,
                          value: assignmentMode,
                          onChange: (_, val) => {
                            if (!val) return;
                            setAssignmentMode(val);
                            if (val === ASSIGNMENT_MODE.INDIVIDUAL) {
                              setGlobalStylist(null);
                            }
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ToggleButton,
                              {
                                value: ASSIGNMENT_MODE.INDIVIDUAL,
                                sx: { px: 1.5, py: 0.5 },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 600, children: "Per service" })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButton, { value: ASSIGNMENT_MODE.ALL, sx: { px: 1.5, py: 0.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 600, children: "Same for all" }) })
                          ]
                        }
                      ),
                      assignmentMode === ASSIGNMENT_MODE.ALL && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1, minWidth: 200 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Autocomplete,
                        {
                          size: "small",
                          value: globalStylist,
                          options: staff,
                          getOptionLabel: (opt) => opt.display_name ?? "",
                          isOptionEqualToValue: (a, b) => a.id === b.id,
                          onChange: (_, val) => setGlobalStylist(val),
                          disabled: !watchedBranchId,
                          renderOption: (props, opt) => {
                            const { key, ...rest } = props;
                            return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Avatar,
                                {
                                  src: opt.avatar,
                                  sx: {
                                    width: 26,
                                    height: 26,
                                    fontSize: 10,
                                    bgcolor: opt.calendar_color ?? "primary.main"
                                  },
                                  children: opt.display_name?.[0]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: opt.display_name })
                            ] }) }, key);
                          },
                          renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { ...params, label: "Stylist for all" })
                        }
                      ) })
                    ] }) }),
                    serviceFields.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Box,
                      {
                        sx: {
                          py: 4,
                          textAlign: "center",
                          border: "1px dashed",
                          borderColor: "divider",
                          borderRadius: 2
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Iconify,
                            {
                              icon: "mingcute:scissors-line",
                              width: 32,
                              sx: { color: "text.disabled", mb: 1 }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No services added yet" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: 'Click "Add services" to get started' })
                        ]
                      }
                    ) : serviceFields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      AppointmentDialogServiceRow,
                      {
                        service: field,
                        index,
                        branchId: watchedBranchId,
                        staff,
                        showStylist: assignmentMode === ASSIGNMENT_MODE.INDIVIDUAL,
                        onTimeChange: handleServiceTimeChange,
                        onStylistChange: handleServiceStylistChange,
                        onRemove: (i) => {
                          remove(i);
                          const remaining = getValues("services").filter((_, ri) => ri !== i);
                          if (remaining.length > 0) {
                            setValue(
                              "end_time",
                              remaining[remaining.length - 1]?.end_time ?? watchedStartTime
                            );
                          } else {
                            const startMin = watchedStartTime?.split(":").reduce(
                              (h, m, idx) => idx === 0 ? h + Number(m) * 60 : h + Number(m),
                              0
                            ) ?? 540;
                            const endH = Math.floor((startMin + 60) / 60);
                            const endM = (startMin + 60) % 60;
                            setValue(
                              "end_time",
                              `${String(endH).padStart(2, "0")}:${String(endM).padStart(2, "0")}`
                            );
                          }
                        }
                      },
                      field.id
                    )),
                    serviceFields.length > 0 && (() => {
                      const totalPrice = serviceFields.reduce(
                        (sum, s) => sum + (Number(s.price) || 0),
                        0
                      );
                      const totalDuration = serviceFields.reduce(
                        (sum, s) => sum + (Number(s.duration_minutes) || 0),
                        0
                      );
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Box,
                        {
                          sx: {
                            mt: 1.5,
                            px: 2,
                            py: 1.25,
                            borderRadius: 1.5,
                            bgcolor: "background.neutral",
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.75 }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Iconify,
                                {
                                  icon: "solar:clock-circle-bold",
                                  width: 16,
                                  sx: { color: "text.disabled" }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
                                totalDuration,
                                " min"
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { orientation: "vertical", flexItem: true }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.75 }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Iconify,
                                {
                                  icon: "solar:tag-price-bold",
                                  width: 16,
                                  sx: { color: "text.disabled" }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
                                serviceFields.length,
                                " service",
                                serviceFields.length !== 1 ? "s" : ""
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1 } }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", fontWeight: 700, children: [
                              "Total: $",
                              totalPrice.toFixed(2)
                            ] })
                          ]
                        }
                      );
                    })()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "small",
                        color: "inherit",
                        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Iconify,
                          {
                            icon: notesOpen ? "eva:chevron-up-fill" : "eva:chevron-down-fill",
                            width: 16
                          }
                        ),
                        onClick: () => setNotesOpen((p) => !p),
                        sx: { color: "text.secondary", mb: 0.5 },
                        children: [
                          "Notes ",
                          notesOpen ? "" : "(optional)"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: notesOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        NativeTextarea,
                        {
                          label: "Client notes",
                          fieldName: "client_notes",
                          watch,
                          setValue
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        NativeTextarea,
                        {
                          label: "Internal notes",
                          fieldName: "internal_notes",
                          watch,
                          setValue
                        }
                      )
                    ] }) })
                  ] }),
                  Object.keys(errors).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", variant: "outlined", children: "Please fill in all required fields before saving." })
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Box,
                  {
                    sx: {
                      width: { xs: "100%", md: 260 },
                      flexShrink: 0,
                      p: 2.5,
                      overflowY: "auto",
                      borderLeft: { xs: "none", md: "1px solid" },
                      borderTop: { xs: "1px solid", md: "none" },
                      borderColor: "divider",
                      bgcolor: "background.neutral",
                      display: { xs: "none", md: "block" }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", fontWeight: 700, sx: { mb: 2 }, children: "Summary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Typography,
                            {
                              variant: "caption",
                              color: "text.disabled",
                              fontWeight: 600,
                              sx: { textTransform: "uppercase", letterSpacing: 0.5 },
                              children: "Client"
                            }
                          ),
                          selectedClient ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, mt: 0.75 }, children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { sx: { width: 32, height: 32, fontSize: 13 }, children: [
                              selectedClient.first_name?.[0],
                              selectedClient.last_name?.[0]
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, children: [
                                selectedClient.first_name,
                                " ",
                                selectedClient.last_name
                              ] }),
                              (selectedClient.phone_primary || selectedClient.email) && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: selectedClient.phone_primary || selectedClient.email })
                            ] })
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", sx: { mt: 0.5 }, children: "No client selected" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Typography,
                            {
                              variant: "caption",
                              color: "text.disabled",
                              fontWeight: 600,
                              sx: { textTransform: "uppercase", letterSpacing: 0.5 },
                              children: "Date & Time"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, sx: { mt: 0.75 }, children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.75 }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Iconify,
                                {
                                  icon: "solar:calendar-bold",
                                  width: 14,
                                  sx: { color: "text.disabled" }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: watchedDate ? dayjs(watchedDate).format("ddd, MMM D YYYY") : "—" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.75 }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Iconify,
                                {
                                  icon: "solar:clock-circle-bold",
                                  width: 14,
                                  sx: { color: "text.disabled" }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
                                watchedStartTime ? timeStrToDayjs(watchedStartTime)?.format("h:mm A") : "—",
                                endTimeDisplay && endTimeDisplay !== watchedStartTime ? ` → ${timeStrToDayjs(endTimeDisplay)?.format("h:mm A")}` : ""
                              ] })
                            ] })
                          ] })
                        ] }),
                        watchedBranch && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Typography,
                              {
                                variant: "caption",
                                color: "text.disabled",
                                fontWeight: 600,
                                sx: { textTransform: "uppercase", letterSpacing: 0.5 },
                                children: "Branch"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.75, mt: 0.75 }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Iconify,
                                {
                                  icon: "solar:buildings-bold",
                                  width: 14,
                                  sx: { color: "text.disabled" }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: watchedBranch.name })
                            ] })
                          ] })
                        ] }),
                        serviceFields.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Typography,
                              {
                                variant: "caption",
                                color: "text.disabled",
                                fontWeight: 600,
                                sx: { textTransform: "uppercase", letterSpacing: 0.5 },
                                children: "Services"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.75, sx: { mt: 0.75 }, children: [
                              serviceFields.map((svc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                Box,
                                {
                                  sx: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { flex: 1, lineHeight: 1.5 }, children: svc.service_name }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                      Typography,
                                      {
                                        variant: "caption",
                                        color: "text.secondary",
                                        sx: { flexShrink: 0, ml: 1 },
                                        children: [
                                          "$",
                                          Number(svc.price).toFixed(2)
                                        ]
                                      }
                                    )
                                  ]
                                },
                                i
                              )),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 0.25 } }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "space-between" }, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 700, children: "Total" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", fontWeight: 700, children: [
                                  "$",
                                  serviceFields.reduce((s, sv) => s + (Number(sv.price) || 0), 0).toFixed(2)
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        isEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Typography,
                              {
                                variant: "caption",
                                color: "text.disabled",
                                fontWeight: 600,
                                sx: { textTransform: "uppercase", letterSpacing: 0.5 },
                                children: "Payment"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mt: 0.75 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Label,
                              {
                                variant: "soft",
                                color: paymentStatus === "paid" ? "success" : paymentStatus === "partial" ? "warning" : "error",
                                children: paymentStatus || "unpaid"
                              }
                            ) })
                          ] })
                        ] }),
                        (watchedClientNotes || watchedInternalNotes) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Typography,
                              {
                                variant: "caption",
                                color: "text.disabled",
                                fontWeight: 600,
                                sx: { textTransform: "uppercase", letterSpacing: 0.5 },
                                children: "Notes"
                              }
                            ),
                            watchedClientNotes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: 0.75 }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", fontWeight: 600, children: "Client" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Typography,
                                {
                                  variant: "caption",
                                  color: "text.secondary",
                                  display: "block",
                                  sx: { mt: 0.25, wordBreak: "break-word" },
                                  children: watchedClientNotes
                                }
                              )
                            ] }),
                            watchedInternalNotes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: 0.75 }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", fontWeight: 600, children: "Internal" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Typography,
                                {
                                  variant: "caption",
                                  color: "text.secondary",
                                  display: "block",
                                  sx: { mt: 0.25, wordBreak: "break-word" },
                                  children: watchedInternalNotes
                                }
                              )
                            ] })
                          ] })
                        ] })
                      ] })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { sx: { px: 2.5, py: 1.5, gap: 1, flexWrap: "wrap" }, children: [
            isEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Cancel appointment", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "error",
                variant: "soft",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:trash-2-outline" }),
                onClick: () => setDeleteDialogOpen(true),
                children: "Cancel appt."
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "inherit", onClick: onClose, children: "Close" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                form: "appointment-dialog-form",
                variant: "contained",
                disabled: isSubmitting,
                startIcon: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "svg-spinners:ring-resize" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: isEdit ? "eva:save-fill" : "eva:plus-fill" }),
                children: isEdit ? "Save changes" : "Create appointment"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServicePickerDialog,
      {
        open: pickerOpen,
        onClose: handlePickerClose,
        branchId: watchedBranchId,
        alreadySelectedIds: selectedServiceIds
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ClientQuickAddDialog,
      {
        openDialog: quickAddClientOpen,
        setOpenDialog: setQuickAddClientOpen,
        onSuccess: (client) => {
          setSelectedClient(client);
          setValue("client_id", client?.id ?? "", { shouldValidate: true });
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: deleteDialogOpen,
        onClose: () => setDeleteDialogOpen(false),
        title: "Cancel Appointment",
        content: "Are you sure you want to cancel this appointment? This action cannot be undone.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleDelete, children: "Yes, cancel it" })
      }
    )
  ] });
}
function NativeTextarea({ label, fieldName, watch: watchFn, setValue: setValueFn }) {
  const value = watchFn(fieldName) ?? "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TextField,
    {
      label,
      multiline: true,
      minRows: 2,
      size: "small",
      fullWidth: true,
      value,
      onChange: (e) => setValueFn(fieldName, e.target.value)
    }
  );
}
function useAppointmentModalV2() {
  const [open, setOpen] = reactExports.useState(false);
  const [currentEvent, setCurrentEvent] = reactExports.useState(null);
  const handleOpen = reactExports.useCallback((event = null) => {
    setCurrentEvent(event);
    setOpen(true);
  }, []);
  const handleClose = reactExports.useCallback(() => {
    setOpen(false);
    setCurrentEvent(null);
  }, []);
  const handleNew = reactExports.useCallback(() => {
    setCurrentEvent(null);
    setOpen(true);
  }, []);
  return {
    open,
    currentEvent,
    onOpen: handleOpen,
    onClose: handleClose,
    onNew: handleNew,
    setCurrentEvent
  };
}
export {
  AppointmentDialog as A,
  CustomPopover as C,
  useAppointmentModalV2 as u
};
