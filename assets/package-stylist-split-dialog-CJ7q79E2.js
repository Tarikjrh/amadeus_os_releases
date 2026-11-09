import { E as Ee, a6 as useUserBranches, r as reactExports, t as toast, j as jsxRuntimeExports, S as Stack, c as Typography, M as MenuItem, K as Divider, d as Button, b as CircularProgress, a as Iconify, I as IconButton, B as Box, L as Label, a1 as LinearProgress, al as Avatar } from "./index-B08HRm4A.js";
import { a as useForm, b as u, F as Form, C as Controller } from "./form-provider-u_wAFv-h.js";
import { p as processTransaction } from "./sale-service-CWyXC78v.js";
import { useGetPackageTemplates, createClientPackage, toFirstOfMonth, useGetStylistSplit, useGetPackageUsages, useGetServicesByIds, formatPackageMonth } from "./package-service-U57UHzc2.js";
import { F as Field } from "./fields-CnHGHSTe.js";
import "./styles-Ddj8daWs.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { a as ClientAutocompleteField } from "./client-autocomplete-C_9PlkEm.js";
import { o as object, s as string, p as preprocess, n as number, b as boolean } from "./schemas-BVeYYbTr.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { E as EmptyContent } from "./empty-content-CwygC76N.js";
const PALETTE_COLORS = [
  "#00B8D9",
  "#36B37E",
  "#FF5630",
  "#FFAB00",
  "#6554C0",
  "#FF7452",
  "#2684FF"
];
const PAYMENT_METHODS = [
  { value: "cash", label: "Cash" },
  { value: "credit_card", label: "Credit Card" },
  { value: "debit_card", label: "Debit Card" },
  { value: "mobile_payment", label: "Mobile Payment" },
  { value: "bank_transfer", label: "Bank Transfer" },
  { value: "gift_card", label: "Gift Card" }
];
const AssignPackageSchema = object({
  client: object({ id: string() }, { message: "Select a client" }).nullable().refine((v) => v !== null, { message: "Select a client" }),
  branchId: string().min(1, "Select a branch"),
  templateId: string().min(1, "Select a package"),
  month: string().min(1, "Select a month"),
  pricePaid: preprocess(
    (v) => v === "" || v == null ? void 0 : Number(v),
    number({ required_error: "Enter price paid", invalid_type_error: "Enter price paid" }).min(0, "Must be 0 or more")
  ),
  notes: string().optional(),
  createSale: boolean(),
  paymentMethod: string()
});
function getMonthOptions() {
  const options = [];
  const now = /* @__PURE__ */ new Date();
  for (let i = 0; i < 10; i += 1) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    options.push({
      label: d.toLocaleString("en-US", { month: "long", year: "numeric" }),
      value: toFirstOfMonth(d)
    });
  }
  return options;
}
const MONTH_OPTIONS = getMonthOptions();
function AssignPackageDialog({
  open,
  onClose,
  organizationId,
  branchId,
  createdBy,
  /** Pre-fill a specific client (from client profile page) */
  prefillClient = null
}) {
  const loading = Ee();
  const { templates = [] } = useGetPackageTemplates(organizationId);
  const {
    branchesOnly: userBranches,
    primaryBranch,
    hasMultipleBranchesOnly: hasMultipleBranches
  } = useUserBranches();
  const methods = useForm({
    mode: "onSubmit",
    resolver: u(AssignPackageSchema),
    defaultValues: {
      client: prefillClient,
      branchId: primaryBranch?.id || branchId || "",
      templateId: "",
      month: MONTH_OPTIONS[0].value,
      pricePaid: "",
      notes: "",
      createSale: true,
      paymentMethod: "cash"
    }
  });
  const { control, watch, reset, setValue, handleSubmit } = methods;
  reactExports.useEffect(() => {
    if (primaryBranch?.id) {
      setValue("branchId", primaryBranch.id);
    }
  }, [primaryBranch?.id, setValue]);
  const templateId = watch("templateId");
  reactExports.useEffect(() => {
    if (!templateId) return;
    const tpl = templates.find((t) => t.id === templateId);
    if (tpl) setValue("pricePaid", String(tpl.price));
  }, [templateId, templates, setValue]);
  const createSale = watch("createSale");
  const onSubmit = handleSubmit(async (data) => {
    loading.onTrue();
    try {
      const tpl = templates.find((t) => t.id === data.templateId);
      const activeBranchId = hasMultipleBranches ? data.branchId : branchId;
      let saleId = null;
      if (data.createSale) {
        const { data: saleData, error: saleError } = await processTransaction({
          organizationId,
          branchId: activeBranchId,
          clientId: data.client.id,
          items: [
            {
              item_type: "package_deposit",
              template_id: data.templateId,
              package_name: tpl?.name ?? "Package",
              quantity: 1,
              unit_price: Number(data.pricePaid),
              discount_amount: 0
            }
          ],
          payments: [{ payment_method: data.paymentMethod, amount: Number(data.pricePaid) }],
          taxRate: 0,
          notes: data.notes || null,
          cashierId: createdBy
        });
        if (saleError) throw saleError;
        saleId = saleData?.id ?? null;
      }
      const { error } = await createClientPackage({
        organizationId,
        branchId: activeBranchId,
        clientId: data.client.id,
        templateId: data.templateId,
        validMonth: data.month,
        pricePaid: data.pricePaid,
        notes: data.notes || null,
        createdBy,
        saleId
      });
      if (error) throw error;
      toast.success("Package assigned to client");
      reset();
      onClose(true);
    } catch (err) {
      toast.error(err.message || "Failed to assign package");
    } finally {
      loading.onFalse();
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose: () => onClose(false), maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Assign Package to Client" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, sx: { pt: 1 }, children: [
        !prefillClient && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "client",
            control,
            render: ({ field, fieldState: { error } }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              ClientAutocompleteField,
              {
                value: field.value,
                onChange: field.onChange,
                error
              }
            )
          }
        ),
        prefillClient && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", children: [
          "Client: ",
          prefillClient.first_name,
          " ",
          prefillClient.last_name
        ] }),
        hasMultipleBranches && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "branchId",
            control,
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              BranchSelect,
              {
                branches: userBranches,
                value: field.value,
                onChange: field.onChange,
                showAllOption: false,
                size: "medium",
                minWidth: "100%"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "templateId", label: "Package", children: templates.filter((t) => t.is_active).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: t.id, children: [
          t.name,
          " — ",
          t.currency ?? "USD",
          " ",
          Number(t.price).toFixed(2),
          t.max_uses_per_month ? ` · ${t.max_uses_per_month} uses/mo` : " · Unlimited"
        ] }, t.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "month", label: "Valid month", children: MONTH_OPTIONS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: m.value, children: m.label }, m.value)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Text,
          {
            name: "pricePaid",
            label: "Price paid",
            type: "number",
            helperText: "Can differ from template price (discounts, etc.)",
            slotProps: {
              input: {
                inputProps: { min: 0 },
                startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: "$" })
              }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Text, { name: "notes", label: "Notes (optional)", multiline: true, rows: 2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Field.Checkbox,
          {
            name: "createSale",
            label: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Create a sale record for this package" })
          }
        ),
        createSale && /* @__PURE__ */ jsxRuntimeExports.jsx(Field.Select, { name: "paymentMethod", label: "Payment method", children: PAYMENT_METHODS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: m.value, children: m.label }, m.value)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onClose(false), color: "inherit", disabled: loading.value, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            variant: "contained",
            disabled: loading.value,
            startIcon: loading.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : null,
            children: "Assign Package"
          }
        )
      ] })
    ] })
  ] });
}
function PackageStylistSplitDialog({ open, onClose, clientPackage }) {
  const { split, splitLoading } = useGetStylistSplit(clientPackage?.id);
  const { usages, usagesLoading } = useGetPackageUsages(clientPackage?.id);
  const tpl = clientPackage?.package_templates;
  const client = clientPackage?.client_profiles;
  const packageValue = Number(clientPackage?.price_paid ?? 0);
  const limitServiceIds = Object.keys(tpl?.service_max_uses ?? {});
  const { services: limitServices } = useGetServicesByIds(limitServiceIds);
  const serviceNameMap = {};
  limitServices.forEach((s) => {
    if (s.id && s.name) serviceNameMap[s.id] = s.name;
  });
  const serviceUsageCount = {};
  (usages ?? []).forEach((u2) => {
    if (u2.service_id) {
      const name = u2.service_name ?? u2.services?.name;
      if (name) serviceNameMap[u2.service_id] = name;
      serviceUsageCount[u2.service_id] = (serviceUsageCount[u2.service_id] ?? 0) + 1;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Iconify,
          {
            icon: "solar:users-group-rounded-bold-duotone",
            width: 24,
            color: "primary.main"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "Stylist Split Report" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { dividers: true, sx: { pt: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            p: 2,
            mb: 3,
            borderRadius: 1.5,
            bgcolor: "background.neutral",
            border: "1px solid",
            borderColor: "divider"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700 }, children: tpl?.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [
                clientPackage?.is_commission_finalized && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "success", children: "Finalized" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { variant: "soft", color: "primary", children: formatPackageMonth(clientPackage?.valid_month) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 3, flexWrap: "wrap", useFlexGap: true, children: [
              client && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Client" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
                  client.first_name,
                  " ",
                  client.last_name
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Package value" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
                  clientPackage?.currency ?? "USD",
                  " ",
                  packageValue.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Total visits" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: clientPackage?.uses_count ?? 0 })
              ] }),
              tpl?.max_uses_per_month && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Overall cap" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
                  tpl.max_uses_per_month,
                  " / mo"
                ] })
              ] })
            ] }),
            tpl?.service_max_uses && Object.keys(tpl.service_max_uses).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: 1.5, pt: 1.5, borderTop: "1px solid", borderColor: "divider" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: "block", mb: 1 }, children: "Per-service limits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 1.25, children: Object.entries(tpl.service_max_uses).map(([serviceId, maxUses]) => {
                const svcName = serviceNameMap[serviceId] ?? serviceId.slice(0, 8);
                const used = serviceUsageCount[serviceId] ?? 0;
                const pct = Math.min(used / maxUses * 100, 100);
                const isAtLimit = used >= maxUses;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Stack,
                    {
                      direction: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      sx: { mb: 0.5 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", fontWeight: 600, children: svcName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Typography,
                          {
                            variant: "caption",
                            color: isAtLimit ? "error.main" : "text.secondary",
                            fontWeight: isAtLimit ? 700 : 400,
                            children: [
                              used,
                              " / ",
                              maxUses
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    LinearProgress,
                    {
                      variant: "determinate",
                      value: pct,
                      color: isAtLimit ? "error" : pct >= 75 ? "warning" : "primary",
                      sx: { height: 6, borderRadius: 1 }
                    }
                  )
                ] }, serviceId);
              }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: [
        "Stylist breakdown ",
        !splitLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "primary", variant: "soft", sx: { ml: 0.5 }, children: split.length })
      ] }),
      splitLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "center", justifyContent: "center", sx: { py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) }) : split.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          title: "No usages recorded yet",
          description: "No visits have been made on this package.",
          sx: { py: 5 }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0, sx: { mb: 3 }, children: split.map((row, index) => {
        const amount = packageValue * (Number(row.percentage) / 100);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              direction: "row",
              alignItems: "center",
              justifyContent: "space-between",
              sx: { py: 1.5, px: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1.5, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Avatar,
                    {
                      sx: {
                        width: 32,
                        height: 32,
                        fontSize: 13,
                        bgcolor: "primary.lighter",
                        color: "primary.dark",
                        flexShrink: 0
                      },
                      children: (row.stylist_name ?? "U")[0]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: row.stylist_name ?? "Unassigned" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                      row.visit_count,
                      " visit",
                      row.visit_count !== 1 ? "s" : "",
                      " ·",
                      " ",
                      row.percentage,
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      LinearProgress,
                      {
                        variant: "determinate",
                        color: "primary",
                        value: Number(row.percentage),
                        sx: { height: 6, borderRadius: 1, width: 120, mt: 0.5 }
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", spacing: 0.25, flexShrink: 0, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 700, color: "primary.main", children: [
                    clientPackage?.currency ?? "USD",
                    " ",
                    amount.toFixed(2)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "earned" })
                ] })
              ]
            }
          ),
          index < split.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, row.stylist_id ?? "unassigned");
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: [
        "Visit history ",
        !usagesLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { color: "primary", variant: "soft", sx: { ml: 0.5 }, children: usages.length })
      ] }),
      usagesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { alignItems: "center", justifyContent: "center", sx: { py: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 32 }) }) : usages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyContent,
        {
          title: "No visits yet",
          description: "No visits have been recorded for this package.",
          sx: { py: 5 }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0, children: usages.map((u2, index) => {
        const perServiceLimit = tpl?.service_max_uses?.[u2.service_id] ?? null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              direction: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              sx: { py: 1.5, px: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "flex-start", spacing: 1.5, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      sx: {
                        mt: 0.5,
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "success.lighter",
                        color: "success.dark",
                        flexShrink: 0
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:calendar-mark-bold", width: 16 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.25, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: u2.service_name ?? u2.services?.name ?? "—" }),
                      perServiceLimit !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                        "(limit: ",
                        perServiceLimit,
                        "x/mo)"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: new Date(u2.used_at).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                      "Stylist: ",
                      u2.stylist_name ?? u2.profiles?.display_name ?? "—"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { alignItems: "flex-end", spacing: 0.25, flexShrink: 0, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "Appt." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", fontWeight: 600, children: u2.appointments?.appointment_number ?? "—" })
                ] })
              ]
            }
          ),
          index < usages.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, u2.id);
      }) })
    ] })
  ] });
}
export {
  AssignPackageDialog as A,
  PackageStylistSplitDialog as P,
  PALETTE_COLORS as a
};
