import { s as supabase, av as useAuthContext, r as reactExports, t as toast, j as jsxRuntimeExports, y as Card, c as Typography, S as Stack, B as Box, M as MenuItem, d as Button, I as IconButton, a as Iconify, a4 as DashboardContent, ao as CustomBreadcrumbs, ap as Tabs, aq as Tab, C as CONFIG } from "./index-B08HRm4A.js";
import { a as useForm, b as u, F as Form } from "./form-provider-u_wAFv-h.js";
import { i as isValidPhoneNumber } from "./index-C4JOln-R.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { s as schemaUtils } from "./schema-utils-CG9_JlGr.js";
import { G as Grid } from "./Grid-D21oDAlg.js";
import { L as LoadingButton } from "./LoadingButton-DJQpPOpu.js";
import { o as object, s as string, i as _enum } from "./schemas-BVeYYbTr.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { S as StaffAvailability } from "./staff-availability-Bw-Sc8ip.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./index-Di_Bgabu.js";
import "./TextField-CIuP940C.js";
import "./Autocomplete-BReuRGf-.js";
import "./Checkbox-Br8xlIAK.js";
import "./DatePicker-D3PAml74.js";
import "./useMobilePicker-D3Q_Tt3t.js";
import "./Dialog-C5RfKkDi.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./with-selector-ClfCuV5M.js";
import "./staff-hooks-CXExa9Nb.js";
import "./staff-service-CYDKVOm2.js";
import "./confirm-dialog-BCXWHns4.js";
import "./DialogTitle-B3pdxJpB.js";
import "./branch-select--7cbYlRe.js";
import "./render-location-type-B-TZb61z.js";
import "./TableContainer-DEbdt_0_.js";
import "./TableHead-Dfclrc85.js";
import "./TableCell-B_5fJIbm.js";
async function getCurrentUserProfile() {
  try {
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser();
    if (authError) throw authError;
    if (!user) throw new Error("No user found");
    const { data, error } = await supabase.from("profiles").select(
      `
        *,
        user_roles!user_roles_user_id_fkey(role),
        branch_access!branch_access_user_id_fkey(
          id,
          branch_id,
          role,
          is_primary,
          branch:branches(id, name, slug)
        )
      `
    ).eq("id", user.id).single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching current user profile:", error);
    return { data: null, error };
  }
}
async function updateUserProfile(profileData) {
  try {
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser();
    if (authError) throw authError;
    if (!user) throw new Error("No user found");
    const { email, id, created_at, updated_at, ...allowedFields } = profileData;
    const { data, error } = await supabase.from("profiles").update({
      ...allowedFields,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", user.id).select().single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating profile:", error);
    return { data: null, error };
  }
}
async function changePassword(newPassword) {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword
    });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error changing password:", error);
    return { data: null, error };
  }
}
const ProfileInfoSchema = object({
  //   display_name: z.string().optional(),
  first_name: string().min(1, "First name is required"),
  last_name: string().min(1, "Last name is required"),
  phone: schemaUtils.phoneNumber({ isValid: isValidPhoneNumber }).optional().nullable(),
  date_of_birth: string().optional().nullable(),
  gender: _enum(["male", "female", "other", "prefer_not_to_say"]).optional().nullable(),
  address: string().optional(),
  city: string().optional(),
  state: string().optional(),
  postal_code: string().optional(),
  country: string().optional()
});
function ProfileGeneralInfo() {
  const { user, checkUserSession } = useAuthContext();
  const [loading, setLoading] = reactExports.useState(false);
  const methods = useForm({
    resolver: u(ProfileInfoSchema),
    defaultValues: {
      //   display_name: '',
      first_name: "",
      last_name: "",
      phone: "",
      date_of_birth: null,
      gender: null,
      address: "",
      city: "",
      state: "",
      postal_code: "",
      country: ""
    }
  });
  const { handleSubmit, reset, watch } = methods;
  reactExports.useEffect(() => {
    const loadProfile = async () => {
      const { data, error } = await getCurrentUserProfile();
      if (error) {
        console.error("Error loading profile:", error);
        toast.error("Failed to load profile");
        return;
      }
      if (data) {
        reset({
          display_name: data.display_name || "",
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          phone: data.phone || "",
          date_of_birth: data.date_of_birth || null,
          gender: data.gender || null,
          address: data.address || "",
          city: data.city || "",
          state: data.state || "",
          postal_code: data.postal_code || "",
          country: data.country || ""
        });
      }
    };
    loadProfile();
  }, [reset]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      data = { ...data, display_name: `${data.first_name} ${data.last_name}` };
      setLoading(true);
      const { error } = await updateUserProfile(data);
      if (error) throw error;
      await checkUserSession();
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 3 }, children: "General Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            p: 2,
            bgcolor: "background.neutral",
            borderRadius: 1
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Email:" }),
              " ",
              user?.email
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.disabled", sx: { mt: 0.5, display: "block" }, children: "Email cannot be changed as it's used for authentication" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "first_name", label: "First Name", required: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "last_name", label: "Last Name", required: true }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Phone, { name: "phone", label: "Phone Number", defaultCountry: "LB" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.DatePicker, { name: "date_of_birth", label: "Date of Birth" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Field.Select,
          {
            name: "gender",
            label: "Gender",
            slotProps: { inputLabel: { shrink: watch("gender") } },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "Select Gender" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "male", children: "Male" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "female", children: "Female" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "other", children: "Other" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "prefer_not_to_say", children: "Prefer not to say" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "address", label: "Address", multiline: true, rows: 2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "city", label: "City" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "state", label: "State/Province" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "postal_code", label: "Postal Code" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field.CountrySelect, { name: "country", label: "Country" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, sx: { justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: () => reset(), children: "Reset" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { type: "submit", variant: "contained", loading, children: "Save Changes" })
      ] })
    ] }) })
  ] });
}
const PasswordSchema = object({
  newPassword: string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: string().min(1, "Please confirm your password")
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});
function ProfileChangePassword() {
  const [loading, setLoading] = reactExports.useState(false);
  const [showNewPassword, setShowNewPassword] = reactExports.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = reactExports.useState(false);
  const methods = useForm({
    resolver: u(PasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: ""
    }
  });
  const { handleSubmit, reset } = methods;
  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const { error } = await changePassword(data.newPassword);
      if (error) throw error;
      toast.success("Password changed successfully!");
      reset();
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(error.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { p: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 3 }, children: "Change Password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "newPassword",
          label: "New Password",
          type: showNewPassword ? "text" : "password",
          slotProps: {
            input: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => setShowNewPassword(!showNewPassword), edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Iconify,
                {
                  icon: showNewPassword ? "solar:eye-bold" : "solar:eye-closed-bold"
                }
              ) }) })
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field.Text,
        {
          name: "confirmPassword",
          label: "Confirm New Password",
          type: showConfirmPassword ? "text" : "password",
          slotProps: {
            input: {
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  onClick: () => setShowConfirmPassword(!showConfirmPassword),
                  edge: "end",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Iconify,
                    {
                      icon: showConfirmPassword ? "solar:eye-bold" : "solar:eye-closed-bold"
                    }
                  )
                }
              ) })
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 2, sx: { justifyContent: "flex-end" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { type: "submit", variant: "contained", loading, children: "Update Password" }) })
    ] }) })
  ] });
}
const TABS = [
  {
    value: "general",
    label: "General",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:user-id-bold", width: 24 })
  },
  {
    value: "availability",
    label: "Availability",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:calendar-bold", width: 24 })
  },
  {
    value: "security",
    label: "Security",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:shield-keyhole-bold", width: 24 })
  }
];
function ProfileView() {
  const [currentTab, setCurrentTab] = reactExports.useState("general");
  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };
  const { user } = useAuthContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBreadcrumbs,
      {
        heading: "Profile",
        links: [{ name: "Dashboard", href: "/dashboard" }, { name: "Profile" }],
        sx: { mb: 3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tabs,
      {
        value: currentTab,
        onChange: handleChangeTab,
        sx: {
          px: 3
          // boxShadow: (theme) => `inset 0 -2px 0 0 ${theme.vars.palette.divider}`,
        },
        children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tab,
          {
            iconPosition: "start",
            value: tab.value,
            label: tab.label,
            icon: tab.icon
          },
          tab.value
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: 3 }, children: [
      currentTab === "general" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileGeneralInfo, {}),
      currentTab === "security" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileChangePassword, {}),
      currentTab === "availability" && /* @__PURE__ */ jsxRuntimeExports.jsx(StaffAvailability, { staffId: user?.id, staffData: user })
    ] })
  ] });
}
const metadata = { title: `Profile | Dashboard - ${CONFIG.appName}` };
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileView, {})
  ] });
}
export {
  Page as default
};
