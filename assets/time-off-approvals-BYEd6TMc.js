import { av as useAuthContext, r as reactExports, E as Ee, t as toast, j as jsxRuntimeExports, a7 as LoadingScreen, a4 as DashboardContent, S as Stack, c as Typography, y as Card, M as MenuItem, ar as Scrollbar, al as Avatar, a2 as Chip, an as fDate, aw as fTime, as as fDateTime, I as IconButton, a as Iconify, B as Box, K as Divider, d as Button, C as CONFIG } from "./index-B08HRm4A.js";
import { w as updateExceptionStatus } from "./staff-service-CYDKVOm2.js";
import { u as useGetAllAvailabilityExceptions } from "./staff-hooks-CXExa9Nb.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { D as DialogContentText } from "./DialogContentText-XMbzPiIe.js";
function TimeOffApprovalsView() {
  const { user } = useAuthContext();
  const [statusFilter, setStatusFilter] = reactExports.useState("pending");
  const [branchFilter, setBranchFilter] = reactExports.useState(null);
  const { allExceptions, allExceptionsLoading, allExceptionsRefetch } = useGetAllAvailabilityExceptions(branchFilter, statusFilter);
  const reviewDialog = Ee();
  const [selectedRequest, setSelectedRequest] = reactExports.useState(null);
  const [reviewAction, setReviewAction] = reactExports.useState(null);
  const [reviewNote, setReviewNote] = reactExports.useState("");
  const handleOpenReviewDialog = reactExports.useCallback(
    (request, action) => {
      setSelectedRequest(request);
      setReviewAction(action);
      setReviewNote("");
      reviewDialog.onTrue();
    },
    [reviewDialog]
  );
  const handleCloseReviewDialog = reactExports.useCallback(() => {
    setSelectedRequest(null);
    setReviewAction(null);
    setReviewNote("");
    reviewDialog.onFalse();
  }, [reviewDialog]);
  const handleConfirmReview = reactExports.useCallback(async () => {
    if (!selectedRequest) return;
    try {
      const status = reviewAction === "approve" ? "approved" : "rejected";
      await updateExceptionStatus(selectedRequest.id, status, user.id);
      toast.success(
        `Time off request ${status === "approved" ? "approved" : "rejected"} successfully`
      );
      allExceptionsRefetch();
      handleCloseReviewDialog();
    } catch (error) {
      console.error("Error updating exception status:", error);
      toast.error("Failed to update time off request");
    }
  }, [selectedRequest, reviewAction, user.id, allExceptionsRefetch, handleCloseReviewDialog]);
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
      meeting: "secondary",
      special_hours: "info"
    };
    return colors[type] || "default";
  };
  const getTypeLabel = (type) => {
    const labels = {
      vacation: "Vacation",
      sick_day: "Sick Day",
      personal_day: "Personal Day",
      holiday: "Holiday",
      unavailable: "Unavailable",
      training: "Training",
      meeting: "Meeting",
      special_hours: "Special Hours"
    };
    return labels[type] || type;
  };
  if (allExceptionsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DashboardContent,
      {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 3
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: "Time Off Requests" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.secondary", mt: 1 }, children: "Review and manage employee availability exceptions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TextField,
            {
              select: true,
              label: "Status",
              value: statusFilter,
              onChange: (e) => setStatusFilter(e.target.value),
              sx: { minWidth: 200 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "pending", children: "Pending" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "approved", children: "Approved" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "rejected", children: "Rejected" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "All" })
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { sx: { minWidth: 800 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Employee" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Start Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "End Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Duration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Reason" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Requested" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: allExceptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 9, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              EmptyContent,
              {
                filled: true,
                title: "No Requests",
                description: `No ${statusFilter || "time off"} requests found`,
                sx: { py: 10 }
              }
            ) }) }) : allExceptions.map((request) => {
              const employeeName = request.employee?.display_name || `${request.employee?.first_name || ""} ${request.employee?.last_name || ""}`.trim() || request.employee?.email || "Unknown";
              const startDate = new Date(request.start_datetime);
              const endDate = new Date(request.end_datetime);
              const durationDays = Math.ceil((endDate - startDate) / (1e3 * 60 * 60 * 24));
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Avatar,
                    {
                      src: request.employee?.avatar_url,
                      alt: employeeName,
                      sx: { width: 40, height: 40 },
                      children: employeeName.charAt(0).toUpperCase()
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: employeeName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: request.employee?.email })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: getTypeLabel(request.exception_type),
                    color: getTypeColor(request.exception_type),
                    size: "small",
                    variant: "soft"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(request.start_datetime) }),
                  !request.is_all_day && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: fTime(request.start_datetime) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDate(request.end_datetime) }),
                  !request.is_all_day && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: fTime(request.end_datetime) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: request.is_all_day ? `${durationDays} day${durationDays > 1 ? "s" : ""}` : "Partial day" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    variant: "body2",
                    sx: {
                      maxWidth: 200,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    children: request.reason || "-"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: request.status,
                      color: getStatusColor(request.status),
                      size: "small",
                      variant: "soft"
                    }
                  ),
                  request.approved_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Typography,
                    {
                      variant: "caption",
                      sx: { color: "text.secondary", mt: 0.5, display: "block" },
                      children: [
                        "by",
                        " ",
                        request.approved_by_profile?.display_name || request.approved_by_profile?.first_name || "Unknown"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: fDateTime(request.created_at) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: [
                    "by",
                    " ",
                    request.created_by_profile?.display_name || request.created_by_profile?.first_name || "Self"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "right", children: [
                  request.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, justifyContent: "flex-end", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        color: "success",
                        onClick: () => handleOpenReviewDialog(request, "approve"),
                        sx: {
                          bgcolor: (theme) => theme.palette.success.lighter,
                          "&:hover": {
                            bgcolor: (theme) => theme.palette.success.light
                          }
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:checkmark-circle-2-fill" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        color: "error",
                        onClick: () => handleOpenReviewDialog(request, "reject"),
                        sx: {
                          bgcolor: (theme) => theme.palette.error.lighter,
                          "&:hover": {
                            bgcolor: (theme) => theme.palette.error.light
                          }
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-circle-fill" })
                      }
                    )
                  ] }),
                  request.status !== "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: request.status })
                ] })
              ] }, request.id);
            }) })
          ] }) }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: reviewDialog.value, onClose: handleCloseReviewDialog, maxWidth: "sm", fullWidth: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: reviewAction === "approve" ? "Approve Time Off Request" : "Reject Time Off Request" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentText, { sx: { mb: 3 }, children: reviewAction === "approve" ? "Are you sure you want to approve this time off request?" : "Are you sure you want to reject this time off request?" }),
        selectedRequest && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 3 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { mb: 2 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Employee:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: selectedRequest.employee?.display_name || `${selectedRequest.employee?.first_name} ${selectedRequest.employee?.last_name}` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Type:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: getTypeLabel(selectedRequest.exception_type) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Start:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: fDateTime(selectedRequest.start_datetime) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "End:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: fDateTime(selectedRequest.end_datetime) })
            ] }),
            selectedRequest.reason && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Reason:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "body2",
                  fontWeight: 600,
                  sx: { maxWidth: "60%", textAlign: "right" },
                  children: selectedRequest.reason
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { mt: 2 } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            fullWidth: true,
            multiline: true,
            rows: 3,
            label: "Notes (optional)",
            value: reviewNote,
            onChange: (e) => setReviewNote(e.target.value),
            placeholder: "Add any notes about this decision..."
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleCloseReviewDialog, variant: "outlined", color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleConfirmReview,
            variant: "contained",
            color: reviewAction === "approve" ? "success" : "error",
            children: reviewAction === "approve" ? "Approve" : "Reject"
          }
        )
      ] })
    ] })
  ] });
}
const metadata = { title: `Time Off Approvals | Dashboard - ${CONFIG.appName}` };
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TimeOffApprovalsView, {})
  ] });
}
export {
  Page as default
};
