import { q as styled, j as jsxRuntimeExports, B as Box, a as Iconify, V as ViewColumnsIcon, z as Badge, A as FilterIcon, D as Me, G as ExportIcon, H as Menu, M as MenuItem, T as Tooltip, d as Button, I as IconButton } from "./index-B08HRm4A.js";
import { u as useGridApiContext, Q as QuickFilter, a as QuickFilterControl, b as QuickFilterClear, C as ColumnsPanelTrigger, F as FilterPanelTrigger, E as ExportPrint, c as ExportCsv } from "./ExportPrint-CAqo1wR3.js";
import { T as TextField } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
function ToolbarButtonBase({ sx, label, icon, showLabel = true, ...other }) {
  const Component = showLabel ? Button : IconButton;
  const baseProps = showLabel ? { size: "small" } : {};
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: label, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Component,
    {
      ...baseProps,
      ...other,
      sx: [
        {
          gap: showLabel ? 0.75 : 0,
          "& svg": {
            width: showLabel ? 18 : 20,
            height: showLabel ? 18 : 20
          }
        },
        ...Array.isArray(sx) ? sx : [sx]
      ],
      children: [
        icon,
        showLabel && label
      ]
    }
  ) });
}
function CustomToolbarColumnsButton({ showLabel }) {
  const apiRef = useGridApiContext();
  const label = apiRef.current.getLocaleText("toolbarColumns");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ColumnsPanelTrigger,
    {
      render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ToolbarButtonBase,
        {
          ...props,
          label: String(label),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ViewColumnsIcon, {}),
          showLabel
        }
      )
    }
  );
}
function CustomToolbarFilterButton({ showLabel }) {
  const apiRef = useGridApiContext();
  const label = apiRef.current.getLocaleText("toolbarFilters");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FilterPanelTrigger,
    {
      render: (props, state) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ToolbarButtonBase,
        {
          ...props,
          label: String(label),
          showLabel,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "dot", color: "error", badgeContent: state.filterCount, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterIcon, {}) })
        }
      )
    }
  );
}
function CustomToolbarExportButton({ showLabel }) {
  const apiRef = useGridApiContext();
  const label = apiRef.current.getLocaleText("toolbarExport");
  const csvLabel = apiRef.current.getLocaleText("toolbarExportCSV");
  const printLabel = apiRef.current.getLocaleText("toolbarExportPrint");
  const { open, anchorEl, onClose, onOpen } = Me();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButtonBase,
      {
        id: "export-menu-trigger",
        "aria-controls": "export-menu",
        "aria-haspopup": "true",
        "aria-expanded": open ? "true" : void 0,
        onClick: onOpen,
        label: String(label),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExportIcon, {}),
        showLabel
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Menu,
      {
        id: "export-menu",
        open,
        anchorEl,
        onClose,
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
        slotProps: {
          list: {
            "aria-labelledby": "export-menu-trigger"
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExportPrint, { render: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, {}), onClick: onClose, children: printLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExportCsv, { render: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, {}), onClick: onClose, children: csvLabel })
        ]
      }
    )
  ] });
}
function CustomToolbarQuickFilter({ sx, slotProps, size = "medium", ...other }) {
  const apiRef = useGridApiContext();
  const label = apiRef.current.getLocaleText("toolbarQuickFilterLabel");
  const placeholder = apiRef.current.getLocaleText("toolbarQuickFilterPlaceholder");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    QuickFilter,
    {
      ...other,
      render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          ...props,
          sx: [{ width: 1, maxWidth: { md: 260 } }, ...Array.isArray(sx) ? sx : [sx]],
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuickFilterControl,
            {
              render: ({ ref, ...controlProps }, state) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  ...controlProps,
                  fullWidth: true,
                  size,
                  inputRef: ref,
                  "aria-label": label,
                  placeholder,
                  slotProps: {
                    input: {
                      startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill" }) }),
                      endAdornment: state.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuickFilterClear, { edge: "end", size: "small", "aria-label": "Clear search", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line", width: 16 }) }) }) : null,
                      ...controlProps.slotProps?.input
                    },
                    ...controlProps.slotProps,
                    ...slotProps?.textField?.slotProps
                  },
                  ...slotProps?.textField
                }
              )
            }
          )
        }
      )
    }
  );
}
const ToolbarContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    flexDirection: "row"
  }
}));
const ToolbarLeftPanel = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row"
  }
}));
const ToolbarRightPanel = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.spacing(1)
}));
export {
  CustomToolbarQuickFilter as C,
  ToolbarButtonBase as T,
  ToolbarContainer as a,
  ToolbarLeftPanel as b,
  ToolbarRightPanel as c,
  CustomToolbarColumnsButton as d,
  CustomToolbarFilterButton as e,
  CustomToolbarExportButton as f
};
