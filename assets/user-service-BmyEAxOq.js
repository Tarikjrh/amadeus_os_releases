import { s as supabase } from "./index-B08HRm4A.js";
async function getAllUsers({
  searchTerm,
  role,
  status,
  branchId,
  limit = 50,
  offset = 0
} = {}) {
  try {
    let query = supabase.from("profiles").select(
      `
        *,
        user_roles!user_roles_user_id_fkey(role),
        branch_access!branch_access_user_id_fkey(
          id,
          branch_id,
          role,
          is_primary,
          granted_at,
          expires_at,
          branch:branches(id, name, slug)
        )
      `,
      { count: "exact" }
    ).order("created_at", { ascending: false }).range(offset, offset + limit - 1);
    if (searchTerm) {
      query = query.or(
        `email.ilike.%${searchTerm}%,display_name.ilike.%${searchTerm}%,first_name.ilike.%${searchTerm}%,last_name.ilike.%${searchTerm}%`
      );
    }
    if (status) {
      query = query.eq("status", status);
    }
    if (role) {
      const { data: roleUsers } = await supabase.from("user_roles").select("user_id").eq("role", role);
      const userIds = roleUsers?.map((r) => r.user_id) || [];
      if (userIds.length === 0) return { data: [], count: 0, error: null };
      query = query.in("id", userIds);
    }
    if (branchId) {
      const { data: branchUsers } = await supabase.from("branch_access").select("user_id").eq("branch_id", branchId);
      const userIds = branchUsers?.map((r) => r.user_id) || [];
      if (userIds.length === 0) return { data: [], count: 0, error: null };
      query = query.in("id", userIds);
    }
    const { data, error, count } = await query;
    if (error) throw error;
    const transformedData = data?.map((user) => ({
      ...user,
      roles: user.user_roles?.map((ur) => ur.role) || [],
      branches: user.branch_access || []
    }));
    return { data: transformedData, count: count ?? 0, error: null };
  } catch (error) {
    console.error("Error fetching users:", error);
    return { data: null, count: 0, error };
  }
}
async function getUser(userId) {
  try {
    const { data, error } = await supabase.from("profiles").select(
      `
        *,
        user_roles!user_roles_user_id_fkey(role, created_at, created_by),
        branch_access!branch_access_user_id_fkey(
          id,
          branch_id,
          role,
          is_primary,
          granted_at,
          granted_by,
          expires_at,
          branch:branches(
            id,
            name,
            slug,
            country:countries(id, name, code),
            organization:countries(organization:organizations(id, name))
          )
        )
      `
    ).eq("id", userId).single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching user:", error);
    return { data: null, error };
  }
}
async function assignRole(userId, role) {
  try {
    const { data: currentUser } = await supabase.auth.getUser();
    const { data, error } = await supabase.from("user_roles").insert({
      user_id: userId,
      role,
      created_by: currentUser?.user?.id
    }).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error assigning role:", error);
    return { data: null, error };
  }
}
async function removeRole(userId, role) {
  try {
    const { error } = await supabase.from("user_roles").delete().eq("user_id", userId).eq("role", role);
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error("Error removing role:", error);
    return { error };
  }
}
async function grantBranchAccess(userId, branchId, role, isPrimary = false) {
  try {
    const { data: currentUser } = await supabase.auth.getUser();
    if (isPrimary) {
      await supabase.from("branch_access").update({ is_primary: false }).eq("user_id", userId);
    }
    const { data, error } = await supabase.from("branch_access").insert({
      user_id: userId,
      branch_id: branchId,
      role,
      is_primary: isPrimary,
      granted_by: currentUser?.user?.id
    }).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error granting branch access:", error);
    return { data: null, error };
  }
}
async function updateBranchAccess(accessId, updates) {
  try {
    if (updates.is_primary) {
      const { data: currentAccess } = await supabase.from("branch_access").select("user_id").eq("id", accessId).single();
      if (currentAccess) {
        await supabase.from("branch_access").update({ is_primary: false }).eq("user_id", currentAccess.user_id);
      }
    }
    const { data, error } = await supabase.from("branch_access").update(updates).eq("id", accessId).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating branch access:", error);
    return { data: null, error };
  }
}
async function revokeBranchAccess(accessId) {
  try {
    const { error } = await supabase.from("branch_access").delete().eq("id", accessId);
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error("Error revoking branch access:", error);
    return { error };
  }
}
async function getAllBranches() {
  try {
    const { data, error } = await supabase.from("branches").select(
      `
        *,
        country:countries(
          id,
          name,
          code,
          organization:organizations(id, name)
        )
      `
    ).is("deleted_at", null).eq("is_active", true).order("name");
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching branches:", error);
    return { data: null, error };
  }
}
async function updateUserStatus(userId, status) {
  try {
    const { data, error } = await supabase.functions.invoke("update-user-status", {
      body: { user_id: userId, status }
    });
    if (error) throw error;
    if (!data?.success) throw new Error(data?.error || "Failed to update user status");
    return { data: data.data, error: null };
  } catch (error) {
    console.error("Error updating user status:", error);
    return { data: null, error };
  }
}
async function getUserStats() {
  try {
    const { data: profiles, error: profilesError } = await supabase.from("profiles").select("status, id");
    if (profilesError) throw profilesError;
    const { data: roles, error: rolesError } = await supabase.from("user_roles").select("role, user_id");
    if (rolesError) throw rolesError;
    const stats = {
      total_users: profiles?.length || 0,
      active_users: profiles?.filter((p) => p.status === "active").length || 0,
      inactive_users: profiles?.filter((p) => p.status === "inactive").length || 0,
      suspended_users: profiles?.filter((p) => p.status === "suspended").length || 0,
      pending_users: profiles?.filter((p) => p.status === "pending").length || 0,
      admins: new Set(roles?.filter((r) => r.role === "admin").map((r) => r.user_id)).size || 0,
      managers: new Set(roles?.filter((r) => r.role === "manager").map((r) => r.user_id)).size || 0,
      stylists: new Set(roles?.filter((r) => r.role === "stylist").map((r) => r.user_id)).size || 0,
      cashiers: new Set(roles?.filter((r) => r.role === "cashier").map((r) => r.user_id)).size || 0
    };
    return { data: stats, error: null };
  } catch (error) {
    console.error("Error fetching user stats:", error);
    return { data: null, error };
  }
}
async function createStaffAccount({
  email,
  password,
  firstName,
  lastName,
  phone,
  branchId,
  role,
  isPrimary = true
}) {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session?.session?.access_token) {
      throw new Error("No valid session found");
    }
    const supabaseUrl = supabase.supabaseUrl;
    const supabaseKey = supabase.supabaseKey;
    const response = await fetch(`${supabaseUrl}/functions/v1/create-staff-account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.session.access_token}`,
        apikey: supabaseKey
      },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        phone,
        branchId,
        role,
        isPrimary
      })
    });
    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || "Failed to create staff account");
    }
    return { data: result.data, error: null };
  } catch (error) {
    console.error("Error creating staff account:", error);
    return { data: null, error };
  }
}
export {
  assignRole as a,
  getAllBranches as b,
  createStaffAccount as c,
  revokeBranchAccess as d,
  getUser as e,
  getUserStats as f,
  grantBranchAccess as g,
  getAllUsers as h,
  updateUserStatus as i,
  removeRole as r,
  updateBranchAccess as u
};
