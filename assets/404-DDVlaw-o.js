import { j as jsxRuntimeExports, B as Box, b4 as j, b5 as layoutClasses, b6 as LayoutSection, b7 as MainSection, b8 as HeaderSection, b9 as merge, Y as Link, Z as RouterLink, a3 as paths, ba as SettingsButton, bb as Logo, ax as Alert, bc as Container, bd as MotionContainer, be as m, c as Typography, bf as varBounce, bg as PageNotFoundIllustration, d as Button, C as CONFIG } from "./index-B08HRm4A.js";
function SimpleCompactContent({ sx, children, className, layoutQuery = "md", ...other }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      className: j([layoutClasses.content, className]),
      sx: [
        (theme) => ({
          width: 1,
          mx: "auto",
          display: "flex",
          flex: "1 1 auto",
          textAlign: "center",
          flexDirection: "column",
          p: theme.spacing(3, 2, 10, 2),
          maxWidth: "var(--layout-simple-content-compact-width)",
          [theme.breakpoints.up(layoutQuery)]: {
            justifyContent: "center",
            p: theme.spacing(10, 0, 10, 0)
          }
        }),
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...other,
      children
    }
  );
}
function SimpleLayout({ sx, cssVars, children, slotProps, layoutQuery = "md" }) {
  const renderHeader = () => {
    const headerSlotProps = { container: { maxWidth: false } };
    const headerSlots = {
      topArea: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", sx: { display: "none", borderRadius: 0 }, children: "This is an info Alert." }),
      leftArea: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
      rightArea: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: { xs: 1, sm: 1.5 } }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            href: paths.faqs,
            component: RouterLink,
            color: "inherit",
            sx: { typography: "subtitle2" },
            children: "Need help?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsButton, {})
      ] })
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeaderSection,
      {
        layoutQuery,
        ...slotProps?.header,
        slots: { ...headerSlots, ...slotProps?.header?.slots },
        slotProps: merge(headerSlotProps, slotProps?.header?.slotProps ?? {}),
        sx: slotProps?.header?.sx
      }
    );
  };
  const renderFooter = () => null;
  const renderMain = () => {
    const { compact, ...restContentProps } = slotProps?.content ?? {};
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MainSection, { ...slotProps?.main, children: compact ? /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleCompactContent, { layoutQuery, ...restContentProps, children }) : children });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    LayoutSection,
    {
      headerSection: renderHeader(),
      footerSection: renderFooter(),
      cssVars: { "--layout-simple-content-compact-width": "448px", ...cssVars },
      sx,
      children: renderMain()
    }
  );
}
function NotFoundView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SimpleLayout,
    {
      slotProps: {
        content: { compact: true }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { component: MotionContainer, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(m.div, { variants: varBounce("in"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", sx: { mb: 2 }, children: "Sorry, page not found!" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(m.div, { variants: varBounce("in"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { color: "text.secondary" }, children: "Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(m.div, { variants: varBounce("in"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageNotFoundIllustration, { sx: { my: { xs: 5, sm: 10 } } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { component: RouterLink, href: "/", size: "large", variant: "contained", children: "Go to home" })
      ] })
    }
  );
}
const metadata = { title: `404 page not found! | Error - ${CONFIG.appName}` };
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundView, {})
  ] });
}
export {
  Page as default
};
