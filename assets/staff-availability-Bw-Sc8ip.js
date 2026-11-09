import { r as reactExports, t as toast, j as jsxRuntimeExports, S as Stack, B as Box, c as Typography, d as Button, a2 as Chip, a as Iconify, a5 as alpha, I as IconButton, aw as fTime, E as Ee, y as Card, K as Divider, bG as fIsAfter, h as dayjs, M as MenuItem, av as useAuthContext, an as fDate } from "./index-B08HRm4A.js";
import { o } from "./index-Di_Bgabu.js";
import { a as useGetEmployeeSchedules, b as useGetEmployeeExceptions } from "./staff-hooks-CXExa9Nb.js";
import { z as updateEmployeeSchedule, y as createEmployeeSchedules, A as deleteEmployeeSchedule, B as updateAvailabilityException, C as createAvailabilityException, D as deleteAvailabilityException } from "./staff-service-CYDKVOm2.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { a as useForm, b as u, F as Form, C as Controller } from "./form-provider-u_wAFv-h.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { o as object, u as union, a as array, s as string, d as date, b as boolean } from "./schemas-BVeYYbTr.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
const DAYS_OF_WEEK = [
  { key: "monday", label: "Monday" },
  { key: "tuesday", label: "Tuesday" },
  { key: "wednesday", label: "Wednesday" },
  { key: "thursday", label: "Thursday" },
  { key: "friday", label: "Friday" },
  { key: "saturday", label: "Saturday" },
  { key: "sunday", label: "Sunday" }
];
const ScheduleSchema = object({
  branch_id: string().min(1, { message: "Branch is required" }),
  selected_days: array(string()).min(1, { message: "Please select at least one day" }),
  start_time: union([string(), date()]).refine((val) => val, {
    message: "Start time is required"
  }),
  end_time: union([string(), date()]).refine((val) => val, {
    message: "End time is required"
  })
});
function StaffScheduleDialog({
  open,
  onClose,
  staffId,
  staffData,
  editingSchedule,
  onSuccess
}) {
  const timeStringToDate = (timeString) => {
    if (!timeString) return null;
    const [hours, minutes] = timeString.split(":");
    const date2 = /* @__PURE__ */ new Date();
    date2.setHours(parseInt(hours, 10));
    date2.setMinutes(parseInt(minutes, 10));
    date2.setSeconds(0);
    return date2;
  };
  const defaultValues = {
    branch_id: editingSchedule?.branch_id || staffData.branches?.[0]?.branch_id || "",
    selected_days: editingSchedule ? [editingSchedule.day_of_week] : [],
    start_time: editingSchedule ? timeStringToDate(editingSchedule.start_time) : timeStringToDate("09:00"),
    end_time: editingSchedule ? timeStringToDate(editingSchedule.end_time) : timeStringToDate("17:00")
  };
  const methods = useForm({
    mode: "all",
    resolver: u(ScheduleSchema),
    defaultValues
  });
  const {
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    if (open) {
      reset(defaultValues);
    }
  }, [open, editingSchedule, reset]);
  const values = watch();
  const handleDayToggle = (dayKey) => {
    const isSelected = values.selected_days.includes(dayKey);
    const newDays = isSelected ? values.selected_days.filter((d) => d !== dayKey) : [...values.selected_days, dayKey];
    setValue("selected_days", newDays, { shouldValidate: true });
  };
  const handleSelectAllDays = () => {
    setValue(
      "selected_days",
      DAYS_OF_WEEK.map((d) => d.key),
      { shouldValidate: true }
    );
  };
  const handleSelectWeekdays = () => {
    setValue("selected_days", ["monday", "tuesday", "wednesday", "thursday", "friday"], {
      shouldValidate: true
    });
  };
  const handleDeselectAllDays = () => {
    setValue("selected_days", [], { shouldValidate: true });
  };
  const formatTimeForDB = (value) => {
    if (!value) return null;
    const formatTime = (dateObj) => {
      const hours = dateObj.getHours().toString().padStart(2, "0");
      const minutes = dateObj.getMinutes().toString().padStart(2, "0");
      const seconds = dateObj.getSeconds().toString().padStart(2, "0");
      return `${hours}:${minutes}:${seconds}`;
    };
    if (typeof value === "string") {
      if (value.includes("T")) {
        return formatTime(new Date(value));
      }
      if (/^\d{2}:\d{2}$/.test(value)) {
        return `${value}:00`;
      }
      return value;
    }
    if (value instanceof Date) {
      return formatTime(value);
    }
    return null;
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      const startTime = formatTimeForDB(data.start_time);
      const endTime = formatTimeForDB(data.end_time);
      if (editingSchedule) {
        await updateEmployeeSchedule(editingSchedule.id, {
          branch_id: data.branch_id,
          day_of_week: data.selected_days[0],
          start_time: startTime,
          end_time: endTime
        });
        toast.success("Schedule updated successfully");
      } else {
        const schedules = data.selected_days.map((day) => ({
          employee_id: staffId,
          branch_id: data.branch_id,
          day_of_week: day,
          start_time: startTime,
          end_time: endTime
        }));
        await createEmployeeSchedules(schedules);
        toast.success(
          `Schedule${data.selected_days.length > 1 ? "s" : ""} created successfully for ${data.selected_days.length} day${data.selected_days.length > 1 ? "s" : ""}`
        );
      }
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error("Error saving schedule:", error);
      toast.error("Failed to save schedule");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editingSchedule ? "Edit Schedule" : "Add Schedule" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { mt: 2 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "branch_id",
            control: methods.control,
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              BranchSelect,
              {
                branches: staffData.branches?.map((b) => ({
                  id: b.branch_id || b.id,
                  name: b.branch_name || b.name,
                  location_type: b.location_type
                })) || [],
                value: field.value,
                onChange: (val) => field.onChange(val),
                label: "Branch",
                showAllOption: false,
                size: "small"
              }
            )
          }
        ),
        editingSchedule ? /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { native: true, name: "selected_days[0]", label: "Day of Week", disabled: true, children: DAYS_OF_WEEK.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: day.key, children: day.label }, day.key)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: "Select Days" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: values.selected_days.length === 5 && values.selected_days.every(
                        (day) => ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)
                      ) ? "contained" : "outlined",
                      size: "small",
                      onClick: handleSelectWeekdays,
                      children: "Weekdays"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: values.selected_days.length === 7 ? "contained" : "outlined",
                      size: "small",
                      onClick: handleSelectAllDays,
                      children: "All"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", size: "small", onClick: handleDeselectAllDays, children: "Clear" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Stack,
            {
              direction: "row",
              justifyContent: "center",
              spacing: 1,
              flexWrap: "wrap",
              useFlexGap: true,
              children: DAYS_OF_WEEK.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: day.label.slice(0, 3),
                  onClick: () => handleDayToggle(day.key),
                  color: values.selected_days.includes(day.key) ? "primary" : "default",
                  variant: values.selected_days.includes(day.key) ? "filled" : "outlined",
                  sx: {
                    minWidth: 65,
                    my: 1,
                    fontWeight: values.selected_days.includes(day.key) ? 600 : 400,
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: values.selected_days.includes(day.key) ? "primary.dark" : "action.hover"
                    }
                  }
                },
                day.key
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Typography,
            {
              variant: "caption",
              color: "text.secondary",
              sx: { mt: 2, display: "block" },
              children: [
                values.selected_days.length,
                " day",
                values.selected_days.length > 1 ? "s" : "",
                " selected"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.TimePicker, { name: "start_time", label: "Start Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.TimePicker, { name: "end_time", label: "End Time" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isSubmitting, children: isSubmitting ? "Saving..." : "Save" })
      ] })
    ] })
  ] });
}
StaffScheduleDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  staffId: o.string.isRequired,
  staffData: o.object.isRequired,
  editingSchedule: o.object,
  onSuccess: o.func
};
const DAY_ORDER$1 = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
function StaffScheduleDetailDialog({ open, onClose, selectedBranch, onEdit, onDelete }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Dialog,
    {
      open,
      onClose,
      maxWidth: "md",
      fullWidth: true,
      PaperProps: {
        sx: { borderRadius: 2 }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                sx: {
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                  display: "inline-flex"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Iconify,
                  {
                    icon: "solar:buildings-bold-duotone",
                    width: 28,
                    sx: { color: "primary.main" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: selectedBranch?.branchName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Weekly Schedule Details" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableContainer,
          {
            sx: {
              mt: 2,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: 600 }, children: "Day" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: 600 }, children: "Start Time" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: 600 }, children: "End Time" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: 600 }, children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: selectedBranch?.schedules?.sort(
                (a, b) => DAY_ORDER$1.indexOf(a.day_of_week) - DAY_ORDER$1.indexOf(b.day_of_week)
              ).map((schedule) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  sx: {
                    "&:hover": {
                      bgcolor: "action.hover"
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        variant: "body2",
                        sx: { textTransform: "capitalize", fontWeight: 500 },
                        children: schedule.day_of_week
                      }
                    ) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:clock-circle-bold", width: 18, color: "success.main" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 500 }, children: fTime(/* @__PURE__ */ new Date(`2000-01-01T${schedule.start_time}`)) })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:clock-circle-bold", width: 18, color: "error.main" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: 500 }, children: fTime(/* @__PURE__ */ new Date(`2000-01-01T${schedule.end_time}`)) })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Chip,
                      {
                        label: schedule.is_active ? "Active" : "Inactive",
                        color: schedule.is_active ? "success" : "default",
                        size: "small",
                        variant: "soft"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, justifyContent: "flex-end", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        IconButton,
                        {
                          size: "small",
                          onClick: (e) => {
                            e.stopPropagation();
                            onEdit(schedule);
                          },
                          sx: {
                            color: "primary.main",
                            "&:hover": {
                              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08)
                            }
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        IconButton,
                        {
                          size: "small",
                          onClick: (e) => {
                            e.stopPropagation();
                            onDelete(schedule.id);
                          },
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              bgcolor: (theme) => alpha(theme.palette.error.main, 0.08)
                            }
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold" })
                        }
                      )
                    ] }) })
                  ]
                },
                schedule.id
              )) })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: onClose, children: "Close" }) })
      ]
    }
  );
}
StaffScheduleDetailDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  selectedBranch: o.shape({
    branchId: o.string,
    branchName: o.string,
    schedules: o.array
  }),
  onEdit: o.func.isRequired,
  onDelete: o.func.isRequired
};
const DAY_ORDER = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
function StaffSchedule({ staffId, staffData }) {
  const { schedules, schedulesRefetch } = useGetEmployeeSchedules(staffId);
  const confirmDialog = Ee();
  const [openDialog, setOpenDialog] = reactExports.useState(false);
  const [editingSchedule, setEditingSchedule] = reactExports.useState(null);
  const [selectedBranch, setSelectedBranch] = reactExports.useState(null);
  const [openDetailModal, setOpenDetailModal] = reactExports.useState(false);
  const schedulesByBranch = schedules.reduce((acc, schedule) => {
    const branchId = schedule.branch?.id || "no-branch";
    const branchName = schedule.branch?.name || "Unassigned";
    if (!acc[branchId]) {
      acc[branchId] = {
        branchId,
        branchName,
        schedules: []
      };
    }
    acc[branchId].schedules.push(schedule);
    return acc;
  }, {});
  reactExports.useEffect(() => {
    if (selectedBranch && openDetailModal) {
      const updatedBranchData = schedulesByBranch[selectedBranch.branchId];
      if (updatedBranchData) {
        setSelectedBranch({
          ...selectedBranch,
          schedules: updatedBranchData.schedules
        });
      } else {
        handleCloseDetailModal();
      }
    }
  }, [schedules]);
  const handleAddSchedule = () => {
    setEditingSchedule(null);
    setOpenDialog(true);
  };
  const handleEditSchedule = (schedule) => {
    setEditingSchedule(schedule);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingSchedule(null);
  };
  const handleScheduleSuccess = async () => {
    await schedulesRefetch();
  };
  const handleCardClick = (branchData) => {
    setSelectedBranch(branchData);
    setOpenDetailModal(true);
  };
  const handleCloseDetailModal = () => {
    setOpenDetailModal(false);
    setSelectedBranch(null);
  };
  const handleDeleteSchedule = async () => {
    const scheduleId = confirmDialog.value;
    try {
      await deleteEmployeeSchedule(scheduleId);
      toast.success("Schedule deleted successfully");
      await schedulesRefetch();
    } catch (error) {
      console.error("Error deleting schedule:", error);
      toast.error("Failed to delete schedule");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", sx: { mb: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Weekly Schedule" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          size: "small",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
          onClick: handleAddSchedule,
          children: "Add Schedule"
        }
      )
    ] }),
    Object.keys(schedulesByBranch).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { textAlign: "center", py: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No schedules configured yet. Add your first schedule to get started." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 3, children: Object.entries(schedulesByBranch).map(
      ([branchId, { branchName, schedules: branchSchedules }]) => {
        const sortedSchedules = [...branchSchedules].sort(
          (a, b) => DAY_ORDER.indexOf(a.day_of_week) - DAY_ORDER.indexOf(b.day_of_week)
        );
        const timeGroups = {};
        sortedSchedules.forEach((s) => {
          const timeKey = `${s.start_time}-${s.end_time}`;
          if (!timeGroups[timeKey]) {
            timeGroups[timeKey] = {
              start: s.start_time,
              end: s.end_time,
              days: []
            };
          }
          timeGroups[timeKey].days.push(s.day_of_week);
        });
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, sx: { width: "100%" }, sizes: { xs: 12, sm: 6, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            sx: {
              p: 3,
              height: "100%",
              cursor: "pointer",
              position: "relative",
              transition: "all 0.3s ease",
              border: "1px solid",
              borderColor: "divider"
            },
            onClick: () => handleCardClick({ branchId, branchName, schedules: branchSchedules }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 0.5 }, children: branchName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Click to view details" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: `${branchSchedules.length} day${branchSchedules.length !== 1 ? "s" : ""}`,
                    size: "small",
                    color: "primary",
                    variant: "soft"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, children: Object.values(timeGroups).map((group, idx) => {
                const formattedStart = fTime(/* @__PURE__ */ new Date(`2000-01-01T${group.start}`));
                const formattedEnd = fTime(/* @__PURE__ */ new Date(`2000-01-01T${group.end}`));
                const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
                const isWeekdays = group.days.length === 5 && group.days.every((d) => weekdays.includes(d)) && weekdays.every((d) => group.days.includes(d));
                let daysLabel;
                if (isWeekdays) {
                  daysLabel = "Mon-Fri";
                } else {
                  const dayIndices = group.days.map((d) => DAY_ORDER.indexOf(d)).sort((a, b) => a - b);
                  const isConsecutive = dayIndices.every(
                    (dayIdx, i) => i === 0 || dayIdx === dayIndices[i - 1] + 1
                  );
                  if (isConsecutive && group.days.length > 2) {
                    const firstDay = group.days[0].slice(0, 3);
                    const lastDay = group.days[group.days.length - 1].slice(0, 3);
                    daysLabel = `${firstDay.charAt(0).toUpperCase() + firstDay.slice(1)}-${lastDay.charAt(0).toUpperCase() + lastDay.slice(1)}`;
                  } else {
                    daysLabel = group.days.map((d) => d.slice(0, 3).charAt(0).toUpperCase() + d.slice(1, 3)).join(", ");
                  }
                }
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      p: 1.5,
                      borderRadius: 1.5,
                      bgcolor: "background.neutral",
                      border: "1px solid",
                      borderColor: "divider"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Box,
                        {
                          sx: {
                            width: 40,
                            height: 40,
                            borderRadius: 1,
                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Iconify,
                            {
                              icon: "solar:calendar-bold",
                              width: 20,
                              sx: { color: "primary.main" }
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flexGrow: 1, minWidth: 0 }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Typography,
                          {
                            variant: "caption",
                            sx: {
                              fontWeight: 700,
                              color: "primary.main",
                              textTransform: "uppercase"
                            },
                            children: daysLabel
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Typography,
                          {
                            variant: "body2",
                            sx: { fontWeight: 500, fontSize: "0.75rem" },
                            children: [
                              formattedStart,
                              " - ",
                              formattedEnd
                            ]
                          }
                        )
                      ] })
                    ] })
                  },
                  idx
                );
              }) })
            ] })
          }
        ) }, branchId);
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StaffScheduleDialog,
      {
        open: openDialog,
        onClose: handleCloseDialog,
        staffId,
        staffData,
        editingSchedule,
        onSuccess: handleScheduleSuccess
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: confirmDialog.setFalse,
        title: "Delete Schedule",
        content: "Are you sure you want to delete this schedule?",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "error",
            onClick: () => {
              handleDeleteSchedule();
              confirmDialog.onFalse();
            },
            children: "Delete"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StaffScheduleDetailDialog,
      {
        open: openDetailModal,
        onClose: handleCloseDetailModal,
        selectedBranch,
        onEdit: (schedule) => {
          handleEditSchedule(schedule);
          handleCloseDetailModal();
        },
        onDelete: (e) => {
          confirmDialog.setValue(e);
        }
      }
    )
  ] });
}
StaffSchedule.propTypes = {
  staffData: o.object,
  staffId: o.string
};
const EXCEPTION_TYPES = [
  { value: "vacation", label: "Vacation" },
  { value: "sick_day", label: "Sick Day" },
  { value: "personal_day", label: "Personal Day" },
  { value: "holiday", label: "Holiday" },
  { value: "unavailable", label: "Unavailable" },
  { value: "training", label: "Training" },
  { value: "meeting", label: "Meeting" }
];
const ABSENCE_TYPES = ["vacation", "sick_day", "personal_day", "holiday", "unavailable"];
const ExceptionSchema = object({
  exception_type: string().min(1, { message: "Type is required" }),
  start_datetime: union([string(), date()]).refine((val) => val, {
    message: "Start date is required"
  }),
  end_datetime: union([string(), date()]).refine((val) => val, {
    message: "End date is required"
  }),
  is_paid: boolean().default(false),
  reason: string().optional(),
  branch_id: string().nullable().optional()
});
function StaffExceptionDialog({
  open,
  onClose,
  currentException,
  staffId,
  userId,
  branchId,
  onSuccess
}) {
  const defaultValues = {
    exception_type: currentException?.exception_type || "vacation",
    start_datetime: currentException?.start_datetime ? new Date(currentException.start_datetime) : null,
    end_datetime: currentException?.end_datetime ? new Date(currentException.end_datetime) : null,
    is_paid: currentException?.is_paid ?? false,
    reason: currentException?.reason || "",
    branch_id: currentException?.branch_id || branchId || null
  };
  const methods = useForm({
    mode: "all",
    resolver: u(ExceptionSchema),
    defaultValues
  });
  const {
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    if (open) {
      reset(defaultValues);
    }
  }, [open, currentException, reset]);
  const values = watch();
  const dateError = fIsAfter(values.start_datetime, values.end_datetime);
  const onSubmit = handleSubmit(async (data) => {
    if (dateError) {
      return;
    }
    try {
      if (currentException?.id) {
        const { error: updateError } = await updateAvailabilityException(currentException.id, data);
        if (updateError) {
          throw new Error("Failed to update time off request");
        }
        toast.success("Time off request updated successfully");
      } else {
        const { error: createError } = await createAvailabilityException({
          employee_id: staffId,
          created_by: userId,
          approved_by: userId,
          approved_at: (/* @__PURE__ */ new Date()).toISOString(),
          ...data,
          status: "approved"
          // Auto-approve for now, can be changed to 'pending' if approval workflow is needed
        });
        if (createError) {
          throw new Error("Failed to save time off request");
        }
        toast.success("Time off request submitted successfully");
      }
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error("Error saving exception:", error);
      toast.error("Failed to save time off request");
    }
  });
  const amountOfDays = dayjs(values.end_datetime).diff(dayjs(values.start_datetime), "day").toString();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: currentException ? "Edit Time Off Request" : "Request Time Off" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { mt: 2 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { native: true, name: "exception_type", label: "Type", children: EXCEPTION_TYPES.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: type.value, children: type.label }, type.value)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DateTimePicker, { name: "start_datetime", label: "Start Date & Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field.DateTimePicker,
            {
              name: "end_datetime",
              label: "End Date & Time",
              error: dateError,
              slotProps: {
                textField: {
                  error: dateError,
                  helperText: dateError ? "End date must be later than start date" : null
                }
              }
            }
          )
        ] }),
        amountOfDays && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { children: [
          "Total time: ",
          isNaN(amountOfDays) ? " - " : amountOfDays,
          " days"
        ] }),
        ABSENCE_TYPES.includes(values.exception_type) && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Checkbox,
          {
            name: "is_paid",
            label: "Paid leave — days are not deducted from salary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "reason", label: "Reason", multiline: true, rows: 3 })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: isSubmitting, children: currentException ? "Update" : "Submit " })
      ] })
    ] })
  ] });
}
StaffExceptionDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  currentException: o.object,
  staffId: o.string.isRequired,
  userId: o.string.isRequired,
  branchId: o.string,
  onSuccess: o.func
};
function StatCard({ icon, label, value, color, bgColor }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 2.5, flex: 1, minWidth: 130 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", spacing: 1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: "block", mb: 0.5 }, children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { color }, children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1.5,
          bgcolor: bgColor,
          flexShrink: 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon, width: 24, sx: { color } })
      }
    )
  ] }) });
}
function StaffAvailability({ staffId, staffData }) {
  const { user } = useAuthContext();
  const { exceptions, exceptionsRefetch } = useGetEmployeeExceptions(staffId);
  const [openDialog, setOpenDialog] = reactExports.useState(false);
  const deleteDialog = Ee();
  const [currentException, setCurrentException] = reactExports.useState(null);
  const handleAddException = () => {
    setCurrentException(null);
    setOpenDialog(true);
  };
  const handleEditException = (exception) => {
    setCurrentException(exception);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentException(null);
  };
  const handleSuccess = () => {
    exceptionsRefetch();
  };
  const handleDeleteException = async (_) => {
    const exceptionId = deleteDialog.value;
    try {
      await deleteAvailabilityException(exceptionId);
      toast.success("Time off request deleted successfully");
      exceptionsRefetch();
    } catch (error) {
      console.error("Error deleting exception:", error);
      toast.error("Failed to delete time off request");
    } finally {
      deleteDialog.onFalse();
    }
  };
  const getStatusColor = (status) => {
    const colors = {
      pending: "warning",
      approved: "success",
      rejected: "error",
      cancelled: "default"
    };
    return colors[status] || "default";
  };
  const getTypeColor = (type) => {
    const colors = {
      vacation: "info",
      sick_day: "error",
      personal_day: "warning",
      holiday: "success",
      unavailable: "default",
      training: "primary",
      meeting: "secondary"
    };
    return colors[type] || "default";
  };
  const pendingCount = exceptions.filter((e) => e.status === "pending").length;
  const approvedCount = exceptions.filter((e) => e.status === "approved").length;
  const rejectedCount = exceptions.filter((e) => e.status === "rejected").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, sx: { mt: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "solar:calendar-mark-bold-duotone",
          label: "Total Requests",
          value: exceptions.length,
          color: "#3B82F6",
          bgColor: "rgba(59,130,246,0.08)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "solar:clock-circle-bold-duotone",
          label: "Pending",
          value: pendingCount,
          color: pendingCount > 0 ? "#F59E0B" : "#94A3B8",
          bgColor: pendingCount > 0 ? "rgba(245,158,11,0.08)" : "rgba(148,163,184,0.08)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "solar:check-circle-bold-duotone",
          label: "Approved",
          value: approvedCount,
          color: "#22C55E",
          bgColor: "rgba(34,197,94,0.08)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "solar:close-circle-bold-duotone",
          label: "Rejected",
          value: rejectedCount,
          color: rejectedCount > 0 ? "#EF4444" : "#94A3B8",
          bgColor: rejectedCount > 0 ? "rgba(239,68,68,0.08)" : "rgba(148,163,184,0.08)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { size: { xs: 12, md: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaffSchedule, { staffId, staffData }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, md: 12 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            spacing: 1.5,
            sx: { py: 2.5 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Time Off " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "small",
                  variant: "contained",
                  startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
                  onClick: handleAddException,
                  children: "Add Time Off"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Start Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "End Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Reason" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Pay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
              exceptions.map((exception) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: exception.exception_type.replace("_", " "),
                    color: getTypeColor(exception.exception_type),
                    size: "small",
                    variant: "soft",
                    sx: { textTransform: "capitalize" }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: fDate(exception.start_datetime, "DD/MM/YYYY") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: fDate(exception.end_datetime, "DD/MM/YYYY") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: exception.reason }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: exception.status,
                    color: getStatusColor(exception.status),
                    size: "small",
                    variant: "soft",
                    sx: { textTransform: "capitalize" }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: [
                  "vacation",
                  "sick_day",
                  "personal_day",
                  "holiday",
                  "unavailable"
                ].includes(exception.exception_type) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: exception.is_paid ? "Paid" : "Unpaid",
                    color: exception.is_paid ? "success" : "default",
                    size: "small",
                    variant: "soft"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, justifyContent: "flex-end", children: [
                  exception.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => handleEditException(exception), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:pen-bold", width: 16 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      color: "error",
                      onClick: () => deleteDialog.setValue(exception.id),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 16 })
                    }
                  )
                ] }) })
              ] }, exception.id)),
              exceptions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, align: "center", sx: { py: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, alignItems: "center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Iconify,
                  {
                    icon: "solar:calendar-bold-duotone",
                    width: 40,
                    sx: { color: "text.disabled" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No time off requests found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "small",
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
                    onClick: handleAddException,
                    children: "Add First Request"
                  }
                )
              ] }) }) })
            ] })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: deleteDialog.value,
        onClose: deleteDialog.onFalse,
        title: "Delete",
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Are you sure want to delete?" }),
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "error", onClick: handleDeleteException, children: "Delete" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StaffExceptionDialog,
      {
        open: openDialog,
        onClose: handleCloseDialog,
        currentException,
        staffId,
        userId: user?.id,
        branchId: staffData?.branches?.[0]?.branch_id,
        onSuccess: handleSuccess
      }
    )
  ] });
}
StaffAvailability.propTypes = {
  staffData: o.object,
  staffId: o.string
};
StaffAvailability.propTypes = {
  staffData: o.object,
  staffId: o.string
};
export {
  StaffAvailability as S
};
