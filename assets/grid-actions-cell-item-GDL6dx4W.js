import { r as reactExports, j as jsxRuntimeExports, X as menuItemClasses, Y as Link, Z as RouterLink, _ as m } from "./index-B08HRm4A.js";
import { G as GridActionsCellItem } from "./DataGrid-HciY9Sqp.js";
const getLinkProps = (href) => {
  if (!href) return {};
  return m(href) ? { component: Link, href, target: "_blank", rel: "noopener noreferrer" } : { component: RouterLink, href };
};
function CustomGridActionsCellItem({ href, showInMenu, ...other }) {
  const linkProps = reactExports.useMemo(() => getLinkProps(href), [href]);
  const Wrapper = href ? "li" : reactExports.Fragment;
  if (showInMenu) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper, { ...href && { className: menuItemClasses.root }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GridActionsCellItem, { ...other, ...linkProps, showInMenu: true }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GridActionsCellItem, { ...other, ...linkProps, showInMenu: false });
}
export {
  CustomGridActionsCellItem as C
};
