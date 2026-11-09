import { r as reactExports, j as jsxRuntimeExports, S as Stack, c as Typography, I as IconButton, a as Iconify, a2 as Chip, M as MenuItem, d as Button, t as toast, B as Box, K as Divider, a8 as FormControlLabel, at as Switch, av as useAuthContext, a7 as LoadingScreen, a4 as DashboardContent, y as Card, ax as Alert, T as Tooltip, C as CONFIG, bn as RoleBasedGuard } from "./index-B08HRm4A.js";
import { r as removeRole, a as assignRole, b as getAllBranches, u as updateBranchAccess, d as revokeBranchAccess, g as grantBranchAccess, e as getUser, f as getUserStats, h as getAllUsers, i as updateUserStatus } from "./user-service-BmyEAxOq.js";
import { K as KpiCardGrid } from "./KpiCard-D7DSr9FT.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { T as TableContainer } from "./TableContainer-DEbdt_0_.js";
import { T as Table, a as TableHead, b as TableRow, c as TableBody } from "./TableHead-Dfclrc85.js";
import { T as TableCell } from "./TableCell-B_5fJIbm.js";
import { T as TablePagination } from "./TablePagination-BOFMLJYr.js";
import "./Grid-D21oDAlg.js";
import "./Skeleton-BC-WlQQE.js";
import "./render-location-type-B-TZb61z.js";
const AVAILABLE_ROLES = ["admin", "manager", "stylist", "stock", "receptionist", "staff", "user"];
const ROLE_COLORS$2 = {
  admin: "error",
  manager: "warning",
  stylist: "primary",
  cashier: "info",
  stock: "secondary",
  receptionist: "success",
  user: "default"
};
function AssignRoleDialog({ open, user, onClose }) {
  const [selectedRoles, setSelectedRoles] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [localRoles, setLocalRoles] = reactExports.useState([]);
  const [hasChanged, setHasChanged] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (open) {
      setLocalRoles(user?.roles || []);
      setHasChanged(false);
    } else {
      setSelectedRoles([]);
    }
  }, [open, user]);
  const handleAssignRole = async () => {
    if (!selectedRoles.length || !user) return;
    setLoading(true);
    try {
      const results = await Promise.all(selectedRoles.map((role) => assignRole(user.id, role)));
      const failed = results.filter((r) => r.error);
      if (failed.length) throw failed[0].error;
      setLocalRoles((prev) => [...prev, ...selectedRoles]);
      setHasChanged(true);
      toast.success(`Successfully assigned: ${selectedRoles.join(", ")}`);
      setSelectedRoles([]);
    } catch (err) {
      console.error("Error assigning role:", err);
      toast.error(err.message || "Failed to assign role");
    } finally {
      setLoading(false);
    }
  };
  const handleRemoveRole = async (role) => {
    if (!user) return;
    setLoading(true);
    try {
      const { error: removeError } = await removeRole(user.id, role);
      if (removeError) throw removeError;
      setLocalRoles((prev) => prev.filter((r) => r !== role));
      setHasChanged(true);
      toast.success(`Successfully removed ${role} role`);
    } catch (err) {
      console.error("Error removing role:", err);
      toast.error(err.message || "Failed to remove role");
    } finally {
      setLoading(false);
    }
  };
  const availableRolesToAssign = AVAILABLE_ROLES.filter((role) => !localRoles.includes(role));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: () => onClose(hasChanged), maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Assign Roles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => onClose(hasChanged), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-fill" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: user && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: user.display_name || `${user.first_name} ${user.last_name}`.trim() || user.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: user.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Current Roles" }),
        localRoles.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", children: localRoles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: role,
            color: ROLE_COLORS$2[role] || "default",
            onDelete: () => handleRemoveRole(role),
            disabled: loading
          },
          role
        )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No roles assigned" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Assign New Role" }),
        availableRolesToAssign.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              select: true,
              fullWidth: true,
              label: "Select roles",
              value: selectedRoles,
              onChange: (e) => setSelectedRoles(e.target.value),
              disabled: loading,
              SelectProps: {
                multiple: true,
                renderValue: (selected) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", children: selected.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: role,
                    size: "small",
                    color: ROLE_COLORS$2[role] || "default"
                  },
                  role
                )) })
              },
              children: availableRolesToAssign.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: role, children: role.charAt(0).toUpperCase() + role.slice(1) }, role))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              onClick: handleAssignRole,
              disabled: !selectedRoles.length || loading,
              children: "Assign"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "All available roles have been assigned" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onClose(hasChanged), disabled: loading, children: "Close" }) })
  ] });
}
const STATUS_COLORS$1 = {
  active: "success",
  inactive: "default",
  suspended: "error",
  pending: "warning"
};
const ROLE_COLORS$1 = {
  admin: "error",
  manager: "warning",
  stylist: "primary",
  cashier: "info",
  user: "default"
};
function UserDetailsDialog({ open, user, onClose }) {
  if (!user) return null;
  const roles = user.roles || [];
  const branches = user.branches || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "User Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-fill" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "Basic Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, sx: { mt: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 120 }, children: "Display Name:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: user.display_name || "Not set" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 120 }, children: "Full Name:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: `${user.first_name || ""} ${user.last_name || ""}`.trim() || "Not set" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 120 }, children: "Email:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: user.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 120 }, children: "Phone:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: user.phone_number || "Not set" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 120 }, children: "Status:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: user.status,
                color: STATUS_COLORS$1[user.status] || "default",
                size: "small"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "Global Roles" }),
        roles.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", sx: { mt: 2 }, children: roles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: role.charAt(0).toUpperCase() + role.slice(1),
            color: ROLE_COLORS$1[role] || "default"
          },
          role
        )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 1 }, children: "No global roles assigned" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", gutterBottom: true, children: [
          "Branch Access (",
          branches.length,
          ")"
        ] }),
        branches.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.5, sx: { mt: 2 }, children: branches.map((access) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              p: 2,
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              backgroundColor: access.is_primary ? "action.hover" : "transparent"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: access.branch?.name || "Unknown Branch" }),
                access.is_primary && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Primary", color: "primary", size: "small" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                access.branch?.country?.name,
                " •",
                " ",
                access.branch?.country?.organization?.name
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Role:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    label: access.role,
                    size: "small",
                    color: ROLE_COLORS$1[access.role] || "default"
                  }
                )
              ] }),
              access.granted_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                "Granted: ",
                new Date(access.granted_at).toLocaleDateString()
              ] }),
              access.expires_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                "Expires: ",
                new Date(access.expires_at).toLocaleDateString()
              ] })
            ] })
          },
          access.id
        )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 1 }, children: "No branch access granted" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "Account Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1.5, sx: { mt: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 120 }, children: "User ID:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontFamily: "monospace", fontSize: "0.75rem" }, children: user.id })
          ] }),
          user.created_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 120 }, children: "Created:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
              new Date(user.created_at).toLocaleDateString(),
              " ",
              new Date(user.created_at).toLocaleTimeString()
            ] })
          ] }),
          user.last_sign_in_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { minWidth: 120 }, children: "Last Sign In:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
              new Date(user.last_sign_in_at).toLocaleDateString(),
              " ",
              new Date(user.last_sign_in_at).toLocaleTimeString()
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "Close" }) })
  ] });
}
function GrantBranchAccessDialog({ open, user, onClose }) {
  const [branches, setBranches] = reactExports.useState([]);
  const [localBranchAccess, setLocalBranchAccess] = reactExports.useState([]);
  const [selectedBranch, setSelectedBranch] = reactExports.useState("");
  const [selectedRole, setSelectedRole] = reactExports.useState("user");
  const [isPrimary, setIsPrimary] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [hasChanged, setHasChanged] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (open) {
      const initialAccess = user?.branches || [];
      setLocalBranchAccess(initialAccess);
      loadBranches();
      setHasChanged(false);
      setIsPrimary(initialAccess.length === 0);
    } else {
      setSelectedBranch("");
      setSelectedRole("user");
      setIsPrimary(false);
      setLocalBranchAccess([]);
    }
  }, [open]);
  const refreshBranchAccess = async () => {
    if (!user?.id) return;
    const { data } = await getUser(user.id);
    if (data) {
      const updated = data.branch_access || [];
      setLocalBranchAccess(updated);
    }
  };
  const loadBranches = async () => {
    const { data, error: branchError } = await getAllBranches();
    if (branchError) {
      toast.error("Failed to load branches");
      return;
    }
    setBranches(data || []);
  };
  const handleGrantAccess = async () => {
    if (!selectedBranch || !user) return;
    setLoading(true);
    try {
      const { error: grantError } = await grantBranchAccess(
        user.id,
        selectedBranch,
        selectedRole,
        isPrimary
      );
      if (grantError) throw grantError;
      toast.success("Successfully granted branch access");
      setHasChanged(true);
      setSelectedBranch("");
      setSelectedRole("user");
      await refreshBranchAccess();
      setIsPrimary(false);
    } catch (err) {
      console.error("Error granting access:", err);
      toast.error(err.message || "Failed to grant branch access");
    } finally {
      setLoading(false);
    }
  };
  const handleRevokeAccess = async (accessId) => {
    if (!user) return;
    setLoading(true);
    try {
      const { error: revokeError } = await revokeBranchAccess(accessId);
      if (revokeError) throw revokeError;
      toast.success("Successfully revoked branch access");
      setHasChanged(true);
      await refreshBranchAccess();
    } catch (err) {
      console.error("Error revoking access:", err);
      toast.error(err.message || "Failed to revoke branch access");
    } finally {
      setLoading(false);
    }
  };
  const handleTogglePrimary = async (access) => {
    setLoading(true);
    try {
      const { error: updateError } = await updateBranchAccess(access.id, {
        is_primary: !access.is_primary
      });
      if (updateError) throw updateError;
      toast.success("Successfully updated primary branch");
      setHasChanged(true);
      await refreshBranchAccess();
    } catch (err) {
      console.error("Error updating access:", err);
      toast.error(err.message || "Failed to update branch access");
    } finally {
      setLoading(false);
    }
  };
  const availableBranches = branches.filter(
    (branch) => !localBranchAccess.some((access) => access.branch_id === branch.id)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: () => onClose(hasChanged), maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Grant Branch Access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => onClose(hasChanged), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-fill" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: user && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: user.display_name || `${user.first_name} ${user.last_name}`.trim() || user.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: user.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Current Branch Access" }),
        localBranchAccess.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1, children: localBranchAccess.map((access) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            sx: {
              p: 2,
              border: 1,
              borderColor: "divider",
              borderRadius: 1
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, flex: 1, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: access.branch?.name || "Unknown Branch" }),
                  access.is_primary && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: "Primary", color: "primary", size: "small" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: access.branch?.country?.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
                !access.is_primary && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "small",
                    variant: access.is_primary ? "outlined" : "contained",
                    onClick: () => handleTogglePrimary(access),
                    disabled: loading || access.is_primary,
                    children: access.is_primary ? "Primary" : "Set Primary"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    size: "small",
                    color: "error",
                    onClick: () => handleRevokeAccess(access.id),
                    disabled: loading,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:trash-2-fill" })
                  }
                )
              ] })
            ]
          },
          access.id
        )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No branch access granted" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: "Grant New Access" }),
        availableBranches.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              select: true,
              fullWidth: true,
              label: "Branch",
              value: selectedBranch,
              onChange: (e) => setSelectedBranch(e.target.value),
              disabled: loading,
              children: availableBranches.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: branch.id, children: [
                branch.name,
                " (",
                branch.country?.name,
                ")"
              ] }, branch.id))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormControlLabel,
            {
              control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: isPrimary,
                  onChange: (e) => setIsPrimary(e.target.checked),
                  disabled: loading
                }
              ),
              label: "Set as primary branch"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              onClick: handleGrantAccess,
              disabled: !selectedBranch || loading,
              fullWidth: true,
              children: "Grant Access"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "All available branches have been assigned" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onClose(hasChanged), disabled: loading, children: "Close" }) })
  ] });
}
const STATUS_OPTIONS = [
  { value: "", label: "All Statuses" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "suspended", label: "Suspended" },
  { value: "pending", label: "Pending" }
];
const ROLE_OPTIONS = [
  { value: "", label: "All Roles" },
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "stylist", label: "Stylist" },
  { value: "user", label: "User" },
  { value: "staff", label: "Staff" }
];
const ROWS_PER_PAGE_OPTIONS = [10, 25, 50];
const STATUS_COLORS = {
  active: "success",
  inactive: "default",
  suspended: "error",
  pending: "warning"
};
const ROLE_COLORS = {
  admin: "error",
  manager: "warning",
  stylist: "primary",
  cashier: "info",
  user: "default"
};
function UserManagementView() {
  const { user: currentUser } = useAuthContext();
  const [users, setUsers] = reactExports.useState([]);
  const [stats, setStats] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [totalCount, setTotalCount] = reactExports.useState(0);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [debouncedSearch, setDebouncedSearch] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("active");
  const [roleFilter, setRoleFilter] = reactExports.useState("");
  const [branchFilter, setBranchFilter] = reactExports.useState("");
  const [branches, setBranches] = reactExports.useState([]);
  const [page, setPage] = reactExports.useState(0);
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(10);
  const [activeDialog, setActiveDialog] = reactExports.useState({ type: null, user: null });
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setPage(0);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchTerm]);
  reactExports.useEffect(() => {
    setPage(0);
  }, [statusFilter, roleFilter, branchFilter]);
  reactExports.useEffect(() => {
    getUserStats().then((result) => {
      if (!result.error) setStats(result.data);
    });
    getAllBranches().then((result) => {
      if (!result.error) setBranches(result.data || []);
    });
  }, []);
  const loadData = reactExports.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const usersResult = await getAllUsers({
        searchTerm: debouncedSearch,
        status: statusFilter || void 0,
        role: roleFilter || void 0,
        branchId: branchFilter || void 0,
        limit: rowsPerPage,
        offset: page * rowsPerPage
      });
      if (usersResult.error) throw usersResult.error;
      setUsers(usersResult.data || []);
      setTotalCount(usersResult.count ?? 0);
    } catch (err) {
      console.error("Error loading data:", err);
      setError(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, statusFilter, roleFilter, branchFilter, page, rowsPerPage]);
  reactExports.useEffect(() => {
    loadData();
  }, [loadData]);
  const handleStatusChange = async (userId, newStatus) => {
    try {
      const { error: updateError } = await updateUserStatus(userId, newStatus);
      if (updateError) throw updateError;
      await loadData();
    } catch (err) {
      console.error("Error updating status:", err);
      setError(err.message || "Failed to update user status");
    }
  };
  const handleOpenAssignRole = (user) => setActiveDialog({ type: "assignRole", user });
  const handleOpenGrantAccess = (user) => setActiveDialog({ type: "grantAccess", user });
  const handleOpenDetails = (user) => setActiveDialog({ type: "details", user });
  const handleCloseDialogs = (changed = false) => {
    setActiveDialog({ type: null, user: null });
    if (changed) loadData();
  };
  const kpiCards = reactExports.useMemo(() => {
    if (!stats) return [];
    return [
      {
        label: "Total Clients",
        value: stats.total_users,
        icon: "solar:users-group-rounded-bold-duotone",
        color: "#6366F1",
        bgColor: "rgba(99,102,241,0.08)"
      },
      {
        label: "Active Clients",
        value: stats.active_users,
        icon: "solar:users-group-rounded-bold-duotone",
        color: "#10B981",
        bgColor: "rgba(16,185,129,0.08)"
      },
      {
        label: "Admins",
        value: stats.admins,
        icon: "solar:shield-user-bold-duotone",
        color: "#EF4444",
        bgColor: "rgba(239,68,68,0.08)"
      },
      {
        label: "Managers",
        value: stats.managers,
        icon: "solar:user-bold-duotone",
        color: "#F59E0B",
        bgColor: "rgba(245,158,11,0.08)"
      }
    ];
  }, [stats]);
  if (loading && !users.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: "User Management" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCardGrid, { cards: kpiCards, loading, skeletonCount: 4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { p: 2, mb: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          size: "small",
          fullWidth: true,
          placeholder: "Search by name or email...",
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          InputProps: {
            startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill", sx: { mr: 1, color: "text.disabled" } })
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          select: true,
          size: "small",
          label: "Status",
          value: statusFilter,
          onChange: (e) => setStatusFilter(e.target.value),
          sx: { minWidth: 160 },
          children: STATUS_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          select: true,
          size: "small",
          label: "Role",
          value: roleFilter,
          onChange: (e) => setRoleFilter(e.target.value),
          sx: { minWidth: 140 },
          children: ROLE_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BranchSelect,
        {
          branches,
          value: branchFilter || "all",
          onChange: (val) => setBranchFilter(val === "all" ? "" : val),
          allLabel: "All Branches"
        }
      )
    ] }) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", sx: { mb: 3 }, onClose: () => setError(null), children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Roles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Branches" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
          users.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", children: user.display_name || `${user.first_name} ${user.last_name}`.trim() || "N/A" }),
              user.id === currentUser?.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: "You",
                  size: "small",
                  color: "primary",
                  sx: { width: "fit-content" }
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: user.email }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: user.status,
                color: STATUS_COLORS[user.status] || "default",
                size: "small"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", children: user.roles?.length > 0 ? user.roles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: role,
                size: "small",
                color: ROLE_COLORS[role] || "default"
              },
              role
            )) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", children: "No roles" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
              user.branches?.length || 0,
              " branch",
              user.branches?.length !== 1 ? "es" : ""
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, justifyContent: "flex-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "View Details", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => handleOpenDetails(user), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:eye-fill" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Assign Roles", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => handleOpenAssignRole(user),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:person-add-fill" })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Grant Branch Access", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  size: "small",
                  color: "secondary",
                  onClick: () => handleOpenGrantAccess(user),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:home-fill" })
                }
              ) }),
              user.id !== currentUser?.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  title: user.status === "active" ? "Suspend User" : "Activate User",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      color: user.status === "active" ? "error" : "success",
                      onClick: () => handleStatusChange(
                        user.id,
                        user.status === "active" ? "suspended" : "active"
                      ),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Iconify,
                        {
                          icon: user.status === "active" ? "eva:slash-fill" : "eva:checkmark-fill"
                        }
                      )
                    }
                  )
                }
              )
            ] }) })
          ] }, user.id)),
          users.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, align: "center", sx: { py: 5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "No users found" }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TablePagination,
        {
          component: "div",
          count: totalCount,
          page,
          onPageChange: (_, newPage) => setPage(newPage),
          rowsPerPage,
          onRowsPerPageChange: (e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          },
          rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AssignRoleDialog,
      {
        open: activeDialog.type === "assignRole",
        user: activeDialog.user,
        onClose: handleCloseDialogs
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GrantBranchAccessDialog,
      {
        open: activeDialog.type === "grantAccess",
        user: activeDialog.user,
        onClose: handleCloseDialogs
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UserDetailsDialog,
      {
        open: activeDialog.type === "details",
        user: activeDialog.user,
        onClose: handleCloseDialogs
      }
    )
  ] });
}
const metadata = { title: `User Management | Dashboard - ${CONFIG.appName}` };
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBasedGuard, { roles: ["admin"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserManagementView, {}) })
  ] });
}
export {
  Page as default
};
