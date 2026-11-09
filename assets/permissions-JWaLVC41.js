function hasRole(user, role) {
  if (!user) return false;
  return user.roles?.includes(role) || false;
}
function isAdmin(user) {
  return user?.isAdmin || hasRole(user, "admin");
}
const PERMISSIONS = {
  // Client permissions
  CLIENT_VIEW: "client:view",
  CLIENT_CREATE: "client:create",
  CLIENT_EDIT: "client:edit",
  CLIENT_DELETE: "client:delete",
  // User management permissions
  USER_VIEW: "user:view",
  USER_CREATE: "user:create",
  USER_EDIT: "user:edit",
  USER_DELETE: "user:delete",
  USER_ASSIGN_ROLES: "user:assign_roles",
  // Branch permissions
  BRANCH_VIEW: "branch:view",
  BRANCH_CREATE: "branch:create",
  BRANCH_EDIT: "branch:edit",
  BRANCH_DELETE: "branch:delete",
  // Organization permissions
  ORG_VIEW: "org:view",
  ORG_CREATE: "org:create",
  ORG_EDIT: "org:edit",
  ORG_DELETE: "org:delete",
  // Report permissions
  REPORTS_VIEW: "reports:view",
  REPORTS_EXPORT: "reports:export"
};
({
  admin: [
    // Admins have all permissions
    ...Object.values(PERMISSIONS)
  ]
});
export {
  isAdmin as i
};
