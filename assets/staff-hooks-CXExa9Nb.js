import { u as useSWR, r as reactExports, s as supabase, h as dayjs, m as mutate } from "./index-B08HRm4A.js";
import { u as updateEmployeeLevel, c as createStaffPenalty, e as deleteStaffPenalty, f as updateStaffPenalty, h as getStylistSales, i as getApprovedAbsences, j as getStylistServices, k as getAllServices, l as assignServiceToStylist, r as removeServiceFromStylist, m as bulkAssignServicesToStylist, n as bulkRemoveServicesFromStylist, o as getEmployeeExceptions, p as getEmployeeSchedules, q as getStaffPenalties, s as getAllAvailabilityExceptions, t as getEmployee, v as getEmployeeLevels } from "./staff-service-CYDKVOm2.js";
function useGetEmployeeProfile(employeeId) {
  const {
    data,
    error,
    isLoading,
    mutate: mutateProfile
  } = useSWR(
    employeeId ? `/api/employees/${employeeId}` : null,
    () => getEmployee(employeeId).then((res) => res.data),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const mutateProfileRef = reactExports.useRef(mutateProfile);
  reactExports.useEffect(() => {
    mutateProfileRef.current = mutateProfile;
  });
  reactExports.useEffect(() => {
    if (!employeeId || !supabase.channel) {
      return void 0;
    }
    const channel = supabase.channel(`employee-${employeeId}-${crypto.randomUUID()}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "profiles",
        filter: `id=eq.${employeeId}`
      },
      (payload) => {
        mutateProfileRef.current();
      }
    ).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "branch_access",
        filter: `user_id=eq.${employeeId}`
      },
      (payload) => {
        mutateProfileRef.current();
      }
    ).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "user_roles",
        filter: `user_id=eq.${employeeId}`
      },
      (payload) => {
        mutateProfileRef.current();
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [employeeId]);
  const memoizedValue = reactExports.useMemo(() => {
    const profile = data ? {
      id: data.id,
      email: data.email,
      display_name: data.display_name,
      first_name: data.first_name,
      last_name: data.last_name,
      avatar_url: data.avatar_url,
      phone: data.phone,
      status: data.status,
      date_of_birth: data.date_of_birth,
      gender: data.gender,
      address: data.address,
      city: data.city,
      state: data.state,
      postal_code: data.postal_code,
      country: data.country,
      // Extract roles from user_roles
      roles: data.user_roles?.map((ur) => ur.role) || [],
      // Extract branches from branch_access
      branches: data.branch_access?.map((ba) => ({
        branch_id: ba.branch?.id,
        branch_name: ba.branch?.name,
        branch_slug: ba.branch?.slug,
        location_type: ba.branch?.location_type,
        is_primary: ba.is_primary,
        granted_at: ba.granted_at,
        country: ba.branch?.country
      })) || []
    } : null;
    return {
      employee: profile,
      employeeLoading: isLoading,
      employeeError: error,
      employeeEmpty: !isLoading && !data,
      employeeRefetch: mutateProfile
    };
  }, [data, error, isLoading, mutateProfile]);
  return memoizedValue;
}
function useGetEmployeeSchedules(employeeId, branchId = null) {
  const {
    data,
    error,
    isLoading,
    mutate: mutateSchedules
  } = useSWR(
    employeeId ? `/api/employees/${employeeId}/schedules${branchId ? `?branch=${branchId}` : ""}` : null,
    () => getEmployeeSchedules(employeeId, branchId).then((res) => res.data),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const mutateSchedulesRef = reactExports.useRef(mutateSchedules);
  reactExports.useEffect(() => {
    mutateSchedulesRef.current = mutateSchedules;
  });
  reactExports.useEffect(() => {
    if (!employeeId || !supabase.channel) {
      return void 0;
    }
    const channel = supabase.channel(`employee-schedules-${employeeId}-${crypto.randomUUID()}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "employee_schedules",
        filter: `employee_id=eq.${employeeId}`
      },
      (payload) => {
        mutateSchedulesRef.current();
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [employeeId]);
  const memoizedValue = reactExports.useMemo(
    () => ({
      schedules: data || [],
      schedulesLoading: isLoading,
      schedulesError: error,
      schedulesEmpty: !isLoading && (!data || data.length === 0),
      schedulesRefetch: mutateSchedules
    }),
    [data, error, isLoading, mutateSchedules]
  );
  return memoizedValue;
}
function useGetEmployeeExceptions(employeeId, branchId = null, status = null) {
  const {
    data,
    error,
    isLoading,
    mutate: mutateExceptions
  } = useSWR(
    employeeId ? `/api/employees/${employeeId}/exceptions${branchId ? `?branch=${branchId}` : ""}${status ? `&status=${status}` : ""}` : null,
    () => getEmployeeExceptions(employeeId, branchId, status).then((res) => res.data),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const memoizedValue = reactExports.useMemo(
    () => ({
      exceptions: data || [],
      exceptionsLoading: isLoading,
      exceptionsError: error,
      exceptionsEmpty: !isLoading && (!data || data.length === 0),
      exceptionsRefetch: mutateExceptions
    }),
    [data, error, isLoading, mutateExceptions]
  );
  return memoizedValue;
}
function useGetAllAvailabilityExceptions(branchId = null, status = null) {
  const {
    data,
    error,
    isLoading,
    mutate: mutateAllExceptions
  } = useSWR(
    `/api/availability-exceptions${branchId ? `?branch=${branchId}` : ""}${status ? `&status=${status}` : ""}`,
    () => getAllAvailabilityExceptions(branchId, status).then((res) => res.data),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const memoizedValue = reactExports.useMemo(
    () => ({
      allExceptions: data || [],
      allExceptionsLoading: isLoading,
      allExceptionsError: error,
      allExceptionsEmpty: !isLoading && (!data || data.length === 0),
      allExceptionsRefetch: mutateAllExceptions
    }),
    [data, error, isLoading, mutateAllExceptions]
  );
  return memoizedValue;
}
function useGetEmployeeLevels(employeeId) {
  const {
    data,
    error,
    isLoading,
    mutate: mutateLevels
  } = useSWR(
    employeeId ? `/api/employees/${employeeId}/levels` : null,
    () => getEmployeeLevels(employeeId).then((res) => res.data),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const mutateLevelsRef = reactExports.useRef(mutateLevels);
  reactExports.useEffect(() => {
    mutateLevelsRef.current = mutateLevels;
  });
  reactExports.useEffect(() => {
    if (!employeeId || !supabase.channel) {
      return void 0;
    }
    const channel = supabase.channel(`employee-levels-${employeeId}-${crypto.randomUUID()}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "employee_levels",
        filter: `user_id=eq.${employeeId}`
      },
      (payload) => {
        mutateLevelsRef.current();
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [employeeId]);
  const memoizedValue = reactExports.useMemo(
    () => ({
      employeeLevels: data || [],
      employeeLevelsLoading: isLoading,
      employeeLevelsError: error,
      employeeLevelsEmpty: !isLoading && (!data || data.length === 0),
      employeeLevelsRefetch: mutateLevels
    }),
    [data, error, isLoading, mutateLevels]
  );
  return memoizedValue;
}
function useEmployeeLevelMutation() {
  const updateLevel = reactExports.useCallback(async (levelData) => {
    const result = await updateEmployeeLevel(levelData);
    if (result.error) {
      throw new Error(result.error.message || "Failed to update employee level");
    }
    mutate((key) => typeof key === "string" && key.includes("/levels"));
    return result.data;
  }, []);
  return {
    updateEmployeeLevel: updateLevel,
    isUpdating: false
    // You could add loading state management here if needed
  };
}
function useGetStylistServices(employeeId, branchId) {
  const {
    data,
    error,
    isLoading,
    mutate: mutateServices
  } = useSWR(
    employeeId && branchId ? `/api/stylist-services/${employeeId}/${branchId}` : null,
    () => getStylistServices(employeeId, branchId).then((res) => res.data),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const mutateServicesRef = reactExports.useRef(mutateServices);
  reactExports.useEffect(() => {
    mutateServicesRef.current = mutateServices;
  });
  reactExports.useEffect(() => {
    if (!employeeId || !branchId || !supabase.channel) {
      return void 0;
    }
    const channel = supabase.channel(`stylist-services-${employeeId}-${branchId}-${crypto.randomUUID()}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "stylist_services",
        filter: `user_id=eq.${employeeId}`
      },
      () => {
        mutateServicesRef.current();
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [employeeId, branchId]);
  const memoizedValue = reactExports.useMemo(
    () => ({
      stylistServices: data || [],
      stylistServicesLoading: isLoading,
      stylistServicesError: error,
      stylistServicesEmpty: !isLoading && (!data || data.length === 0),
      stylistServicesRefetch: mutateServices
    }),
    [data, error, isLoading, mutateServices]
  );
  return memoizedValue;
}
function useGetAllServices(organizationId = null) {
  const {
    data,
    error,
    isLoading,
    mutate: mutateAllServices
  } = useSWR(
    `/api/all-services/${organizationId || "all"}`,
    () => getAllServices(organizationId).then((res) => res.data),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const memoizedValue = reactExports.useMemo(
    () => ({
      allServices: data || [],
      allServicesLoading: isLoading,
      allServicesError: error,
      allServicesEmpty: !isLoading && (!data || data.length === 0),
      allServicesRefetch: mutateAllServices
    }),
    [data, error, isLoading, mutateAllServices]
  );
  return memoizedValue;
}
function useStylistServicesMutation() {
  const assignService = reactExports.useCallback(async (assignmentData) => {
    const result = await assignServiceToStylist(assignmentData);
    if (result.error) {
      throw new Error(result.error.message || "Failed to assign service");
    }
    mutate((key) => typeof key === "string" && key.includes("/stylist-services"));
    return result.data;
  }, []);
  const removeService = reactExports.useCallback(async (userId, branchId, serviceId) => {
    const result = await removeServiceFromStylist(userId, branchId, serviceId);
    if (result.error) {
      throw new Error(result.error.message || "Failed to remove service");
    }
    mutate((key) => typeof key === "string" && key.includes("/stylist-services"));
    return result.data;
  }, []);
  const bulkAssignServices = reactExports.useCallback(async (bulkData) => {
    const result = await bulkAssignServicesToStylist(bulkData);
    if (result.error) {
      throw new Error(result.error.message || "Failed to bulk assign services");
    }
    mutate((key) => typeof key === "string" && key.includes("/stylist-services"));
    return result.data;
  }, []);
  const bulkRemoveServices = reactExports.useCallback(async (userId, branchId, serviceIds) => {
    const result = await bulkRemoveServicesFromStylist(userId, branchId, serviceIds);
    if (result.error) {
      throw new Error(result.error.message || "Failed to bulk remove services");
    }
    mutate((key) => typeof key === "string" && key.includes("/stylist-services"));
    return result.data;
  }, []);
  return {
    assignServiceToStylist: assignService,
    removeServiceFromStylist: removeService,
    bulkAssignServicesToStylist: bulkAssignServices,
    bulkRemoveServicesFromStylist: bulkRemoveServices,
    isMutating: false
    // You could add loading state management here if needed
  };
}
function countWorkingDays(start, end) {
  let count = 0;
  let current = dayjs(start).startOf("day");
  const endDay = dayjs(end).startOf("day");
  while (!current.isAfter(endDay)) {
    if (current.day() !== 0) count++;
    current = current.add(1, "day");
  }
  return count;
}
function countAbsentWorkingDays(absences, periodStart, periodEnd) {
  const absentSet = /* @__PURE__ */ new Set();
  const pStart = dayjs(periodStart).startOf("day");
  const pEnd = dayjs(periodEnd).startOf("day");
  for (const absence of absences) {
    let cur = dayjs(absence.start_datetime).startOf("day");
    const absEnd = dayjs(absence.end_datetime).startOf("day");
    if (cur.isBefore(pStart)) cur = pStart;
    const end = absEnd.isAfter(pEnd) ? pEnd : absEnd;
    while (!cur.isAfter(end)) {
      if (cur.day() !== 0) absentSet.add(cur.format("YYYY-MM-DD"));
      cur = cur.add(1, "day");
    }
  }
  return absentSet.size;
}
function useStylistSales(stylistId, startDate, endDate) {
  const { data, error, isLoading } = useSWR(
    stylistId && startDate && endDate ? `stylist-sales-${stylistId}-${startDate}-${endDate}` : null,
    () => getStylistSales(stylistId, startDate, endDate),
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );
  return { sales: data || [], salesLoading: isLoading, salesError: error };
}
function useApprovedAbsences(employeeId, startDate, endDate) {
  const { data, isLoading } = useSWR(
    employeeId && startDate && endDate ? `approved-absences-${employeeId}-${startDate}-${endDate}` : null,
    () => getApprovedAbsences(employeeId, startDate, endDate),
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );
  return { absences: data || [], absencesLoading: isLoading };
}
function useStaffPenalties(employeeId, branchId, startDate, endDate) {
  const {
    data,
    isLoading,
    mutate: mutatePenalties
  } = useSWR(
    employeeId && branchId && startDate && endDate ? `staff-penalties-${employeeId}-${branchId}-${startDate}-${endDate}` : null,
    () => getStaffPenalties(employeeId, branchId, startDate, endDate),
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );
  return { penalties: data || [], penaltiesLoading: isLoading, penaltiesRefetch: mutatePenalties };
}
function useStaffPenaltiesMutation() {
  const addPenalty = reactExports.useCallback(
    async ({
      staffId,
      branchId,
      deduction_type,
      amount,
      percentage,
      reason,
      issued_at,
      issuedBy
    }) => {
      const result = await createStaffPenalty({
        userId: staffId,
        branchId,
        amount: deduction_type === "amount" ? Number(amount) : null,
        percentage: deduction_type === "percentage" ? Number(percentage) : null,
        reason,
        issuedAt: issued_at,
        issuedBy
      });
      mutate(
        (key) => typeof key === "string" && key.startsWith(`staff-penalties-${staffId}`),
        void 0,
        { revalidate: true }
      );
      return result;
    },
    []
  );
  const removePenalty = reactExports.useCallback(async (penaltyId, staffId) => {
    await deleteStaffPenalty(penaltyId);
    mutate(
      (key) => typeof key === "string" && key.startsWith(`staff-penalties-${staffId}`),
      void 0,
      { revalidate: true }
    );
  }, []);
  const editPenalty = reactExports.useCallback(async (penaltyId, staffId, formData) => {
    const result = await updateStaffPenalty(penaltyId, formData);
    mutate(
      (key) => typeof key === "string" && key.startsWith(`staff-penalties-${staffId}`),
      void 0,
      { revalidate: true }
    );
    return result;
  }, []);
  return { addPenalty, removePenalty, editPenalty };
}
export {
  useGetEmployeeSchedules as a,
  useGetEmployeeExceptions as b,
  useStylistSales as c,
  useApprovedAbsences as d,
  useGetEmployeeLevels as e,
  countWorkingDays as f,
  countAbsentWorkingDays as g,
  useStaffPenalties as h,
  useStaffPenaltiesMutation as i,
  useGetStylistServices as j,
  useGetAllServices as k,
  useStylistServicesMutation as l,
  useEmployeeLevelMutation as m,
  useGetEmployeeProfile as n,
  useGetAllAvailabilityExceptions as u
};
