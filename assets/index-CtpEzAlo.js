import { f as r, j as jsxRuntimeExports, r as reactExports, g as Io } from "./index-B08HRm4A.js";
const be = 0, Pt = 1, Qt = 2, Mn = 4;
function mn(t) {
  return () => t;
}
function So(t) {
  t();
}
function re(t, e) {
  return (n) => t(e(n));
}
function pn(t, e) {
  return () => t(e);
}
function xo(t, e) {
  return (n) => t(e, n);
}
function Ne(t) {
  return t !== void 0;
}
function vo(...t) {
  return () => {
    t.map(So);
  };
}
function te() {
}
function Re(t, e) {
  return e(t), t;
}
function To(t, e) {
  return e(t);
}
function st(...t) {
  return t;
}
function X(t, e) {
  return t(Pt, e);
}
function N(t, e) {
  t(be, e);
}
function De(t) {
  t(Qt);
}
function tt(t) {
  return t(Mn);
}
function z(t, e) {
  return X(t, xo(e, be));
}
function Et(t, e) {
  const n = t(Pt, (o) => {
    n(), e(o);
  });
  return n;
}
function hn(t) {
  let e, n;
  return (o) => (r2) => {
    e = r2, n && clearTimeout(n), n = setTimeout(() => {
      o(e);
    }, t);
  };
}
function Pn(t, e) {
  return t === e;
}
function ot(t = Pn) {
  let e;
  return (n) => (o) => {
    t(e, o) || (e = o, n(o));
  };
}
function V(t) {
  return (e) => (n) => {
    t(n) && e(n);
  };
}
function B(t) {
  return (e) => re(e, t);
}
function Ct(t) {
  return (e) => () => {
    e(t);
  };
}
function v(t, ...e) {
  const n = Co(...e);
  return ((o, r2) => {
    switch (o) {
      case Qt:
        De(t);
        return;
      case Pt:
        return X(t, n(r2));
    }
  });
}
function Ht(t, e) {
  return (n) => (o) => {
    n(e = t(e, o));
  };
}
function jt(t) {
  return (e) => (n) => {
    t > 0 ? t-- : e(n);
  };
}
function Wt(t) {
  let e = null, n;
  return (o) => (r2) => {
    e = r2, !n && (n = setTimeout(() => {
      n = void 0, o(e);
    }, t));
  };
}
function $(...t) {
  const e = Array.from({ length: t.length });
  let n = 0, o = null;
  const r2 = 2 ** t.length - 1;
  return t.forEach((s, i) => {
    const l = 2 ** i;
    X(s, (u) => {
      const d = n;
      n |= l, e[i] = u, d !== r2 && n === r2 && o && (o(), o = null);
    });
  }), (s) => (i) => {
    const l = () => {
      s([i].concat(e));
    };
    n === r2 ? l() : o = l;
  };
}
function Co(...t) {
  return (e) => t.reduceRight(To, e);
}
function wo(t) {
  let e, n;
  const o = () => e?.();
  return function(r2, s) {
    switch (r2) {
      case Pt:
        return s ? n === s ? void 0 : (o(), n = s, e = X(t, s), e) : (o(), te);
      case Qt:
        o(), n = null;
        return;
    }
  };
}
function y(t) {
  let e = t;
  const n = U();
  return ((o, r2) => {
    switch (o) {
      case be:
        e = r2;
        break;
      case Pt: {
        r2(e);
        break;
      }
      case Mn:
        return e;
    }
    return n(o, r2);
  });
}
function gt(t, e) {
  return Re(y(e), (n) => z(t, n));
}
function U() {
  const t = [];
  return ((e, n) => {
    switch (e) {
      case be:
        t.slice().forEach((o) => {
          o(n);
        });
        return;
      case Qt:
        t.splice(0);
        return;
      case Pt:
        return t.push(n), () => {
          const o = t.indexOf(n);
          o > -1 && t.splice(o, 1);
        };
    }
  });
}
function yt(t) {
  return Re(U(), (e) => z(t, e));
}
const yo = { singleton: true };
function Y(t, e = [], n = yo) {
  const { singleton: o } = n;
  return {
    constructor: t,
    dependencies: e,
    id: bo(),
    singleton: o
  };
}
const bo = () => /* @__PURE__ */ Symbol("id");
function Ro(t) {
  const e = /* @__PURE__ */ new Map(), n = ({ constructor: o, dependencies: r2, id: s, singleton: i }) => {
    if (i && e.has(s))
      return e.get(s);
    const l = o(r2.map((u) => n(u)));
    return i && e.set(s, l), l;
  };
  return n(t);
}
function mt(...t) {
  const e = U(), n = Array.from({ length: t.length });
  let o = 0;
  const r2 = 2 ** t.length - 1;
  return t.forEach((s, i) => {
    const l = 2 ** i;
    X(s, (u) => {
      n[i] = u, o |= l, o === r2 && N(e, n);
    });
  }), function(s, i) {
    switch (s) {
      case Qt: {
        De(e);
        return;
      }
      case Pt:
        return o === r2 && i(n), X(e, i);
    }
  };
}
function M(t, e = Pn) {
  return v(t, ot(e));
}
function Ce(...t) {
  return function(e, n) {
    switch (e) {
      case Qt:
        return;
      case Pt:
        return vo(...t.map((o) => X(o, n)));
    }
  };
}
const ht = {
  /** Detailed debugging information including item measurements */
  DEBUG: 0,
  /** General informational messages */
  INFO: 1,
  /** Warning messages for potential issues */
  WARN: 2,
  /** Error messages for failures (default level) */
  ERROR: 3
}, Ho = {
  [ht.DEBUG]: "debug",
  [ht.ERROR]: "error",
  [ht.INFO]: "log",
  [ht.WARN]: "warn"
}, Eo = () => typeof globalThis > "u" ? window : globalThis, Gt = Y(
  () => {
    const t = y(ht.ERROR);
    return {
      log: y((n, o, r2 = ht.INFO) => {
        const s = Eo().VIRTUOSO_LOG_LEVEL ?? tt(t);
        r2 >= s && console[Ho[r2]](
          "%creact-virtuoso: %c%s %o",
          "color: #0253b3; font-weight: bold",
          "color: initial",
          n,
          o
        );
      }),
      logLevel: t
    };
  },
  [],
  { singleton: true }
);
function ko(t) {
  return "self" in t ? t.document.documentElement : t;
}
function Gn(t) {
  const e = ko(t);
  return e.ownerDocument.defaultView.getComputedStyle(e).direction === "rtl";
}
function Nt(t, e) {
  return Gn(t) ? -e : e;
}
function gn(t, e) {
  return Gn(t) ? -e : e;
}
function Ot(t, e, n) {
  return $e(t, e, n).callbackRef;
}
function $e(t, e, n) {
  const o = r.useRef(null);
  let r$1 = (i) => {
  };
  const s = r.useMemo(() => typeof ResizeObserver < "u" ? new ResizeObserver((i) => {
    const l = () => {
      const u = i[0].target;
      u.offsetParent !== null && t(u);
    };
    n ? l() : requestAnimationFrame(l);
  }) : null, [t, n]);
  return r$1 = (i) => {
    i && e ? (s?.observe(i), o.current = i) : (o.current && s?.unobserve(o.current), o.current = null);
  }, { callbackRef: r$1, ref: o };
}
function An(t, e, n, o, r$1, s, i, l, u) {
  const d = r.useCallback(
    (f) => {
      const S = Bo(f.children, e, "offsetHeight", r$1);
      let h = f.parentElement;
      for (; h.dataset.virtuosoScroller === void 0; )
        h = h.parentElement;
      const m = h.lastElementChild?.dataset.viewportType === "window";
      let T;
      m && (T = h.ownerDocument.defaultView);
      const R = i ? i.scrollHeight : m ? T.document.documentElement.scrollHeight : h.scrollHeight, g = i ? i.offsetHeight : m ? T.innerHeight : h.offsetHeight, x = i ? i.scrollTop : m ? T.scrollY || T.document.documentElement.scrollTop : h.scrollTop;
      o({
        scrollHeight: R,
        scrollTop: Math.max(x, 0),
        viewportHeight: g
      }), S !== null && t(S);
    },
    [t, e, r$1, s, i, o, l]
  );
  return $e(d, n, u);
}
function Bo(t, e, n, o) {
  const r2 = t.length;
  if (r2 === 0)
    return null;
  const s = [];
  for (let i = 0; i < r2; i++) {
    const l = t.item(i);
    if (l.dataset.index === void 0)
      continue;
    const u = parseInt(l.dataset.index, 10), d = parseFloat(l.dataset.knownSize), f = e(l, n);
    if (f === 0 && o("Zero-sized element, this should not happen", { child: l }, ht.ERROR), f === d)
      continue;
    const S = s[s.length - 1];
    s.length === 0 || S.size !== f || S.endIndex !== u - 1 ? s.push({ endIndex: u, size: f, startIndex: u }) : s[s.length - 1].endIndex++;
  }
  return s;
}
const He = typeof document > "u" ? r.useEffect : r.useLayoutEffect;
function Ue(t, e, n) {
  const o = r.useRef(null), r$1 = r.useCallback(
    (u) => {
      if (!u?.offsetParent)
        return;
      const d = u.getBoundingClientRect(), f = d.width;
      let S, h;
      if (e) {
        const m = e.getBoundingClientRect(), T = d.top - m.top;
        h = m.height - Math.max(0, T), S = T + e.scrollTop;
      } else {
        const m = i.current.ownerDocument.defaultView;
        h = m.innerHeight - Math.max(0, d.top), S = d.top + m.scrollY;
      }
      o.current = {
        listHeight: d.height,
        offsetTop: S,
        visibleHeight: h,
        visibleWidth: f
      }, t(o.current);
    },
    // oxlint-disable-next-line exhaustive-deps
    [t, e]
  ), { callbackRef: s, ref: i } = $e(r$1, true, n), l = r.useCallback(() => {
    r$1(i.current);
  }, [r$1, i]);
  return r.useEffect(() => {
    if (e) {
      e.addEventListener("scroll", l);
      const d = new ResizeObserver(() => {
        requestAnimationFrame(l);
      });
      return d.observe(e), () => {
        e.removeEventListener("scroll", l), d.unobserve(e);
      };
    }
    const u = i.current?.ownerDocument.defaultView;
    return u?.addEventListener("scroll", l), u?.addEventListener("resize", l), () => {
      u?.removeEventListener("scroll", l), u?.removeEventListener("resize", l);
    };
  }, [l, e, i]), s;
}
const St = Y(
  () => {
    const t = U(), e = U(), n = y(0), o = U(), r2 = U(), s = y(0), i = U(), l = U(), u = y(0), d = y(0), f = y(0), S = y(0), h = U(), m = U(), T = y(false), R = y(false), g = y(false);
    return z(
      v(
        t,
        B(({ scrollTop: x }) => x)
      ),
      e
    ), z(
      v(
        t,
        B(({ scrollHeight: x }) => x)
      ),
      l
    ), z(e, s), {
      deviation: n,
      deviationCommitted: o,
      fixedFooterHeight: f,
      fixedHeaderHeight: d,
      footerHeight: S,
      headerHeight: u,
      horizontalDirection: R,
      scrollBy: m,
      // input
      scrollContainerState: t,
      scrollHeight: l,
      scrollingInProgress: T,
      // signals
      scrollTo: h,
      scrollTop: e,
      skipAnimationFrameInResizeObserver: g,
      smoothScrollTargetReached: r2,
      // state
      statefulScrollTop: s,
      viewportHeight: i
    };
  },
  [],
  { singleton: true }
), se = { lvl: 0 };
function _n(t, e) {
  const n = t.length;
  if (n === 0)
    return [];
  let { index: o, value: r2 } = e(t[0]);
  const s = [];
  for (let i = 1; i < n; i++) {
    const { index: l, value: u } = e(t[i]);
    s.push({ end: l - 1, start: o, value: r2 }), o = l, r2 = u;
  }
  return s.push({ end: 1 / 0, start: o, value: r2 }), s;
}
function J(t) {
  return t === se;
}
function ie(t, e) {
  if (!J(t))
    return e === t.k ? t.v : e < t.k ? ie(t.l, e) : ie(t.r, e);
}
function kt(t, e, n = "k") {
  if (J(t))
    return [-1 / 0, void 0];
  if (Number(t[n]) === e)
    return [t.k, t.v];
  if (Number(t[n]) < e) {
    const o = kt(t.r, e, n);
    return o[0] === -1 / 0 ? [t.k, t.v] : o;
  }
  return kt(t.l, e, n);
}
function xt(t, e, n) {
  return J(t) ? $n(e, n, 1) : e === t.k ? pt(t, { k: e, v: n }) : e < t.k ? Sn(pt(t, { l: xt(t.l, e, n) })) : Sn(pt(t, { r: xt(t.r, e, n) }));
}
function Dt() {
  return se;
}
function Xt(t, e, n) {
  if (J(t))
    return [];
  const o = kt(t, e)[0];
  return Lo(Me(t, o, n));
}
function We(t, e) {
  if (J(t))
    return se;
  const { k: n, l: o, r: r2 } = t;
  if (e === n) {
    if (J(o))
      return r2;
    if (J(r2))
      return o;
    const [s, i] = Dn(o);
    return ve(pt(t, { k: s, l: Nn(o), v: i }));
  }
  return e < n ? ve(pt(t, { l: We(o, e) })) : ve(pt(t, { r: We(r2, e) }));
}
function $t(t) {
  return J(t) ? [] : [...$t(t.l), { k: t.k, v: t.v }, ...$t(t.r)];
}
function Me(t, e, n) {
  if (J(t))
    return [];
  const { k: o, l: r2, r: s, v: i } = t;
  let l = [];
  return o > e && (l = l.concat(Me(r2, e, n))), o >= e && o <= n && l.push({ k: o, v: i }), o <= n && (l = l.concat(Me(s, e, n))), l;
}
function ve(t) {
  const { l: e, lvl: n, r: o } = t;
  if (o.lvl >= n - 1 && e.lvl >= n - 1)
    return t;
  if (n > o.lvl + 1) {
    if (Le(e))
      return Un(pt(t, { lvl: n - 1 }));
    if (!J(e) && !J(e.r))
      return pt(e.r, {
        l: pt(e, { r: e.r.l }),
        lvl: n,
        r: pt(t, {
          l: e.r.r,
          lvl: n - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  }
  if (Le(t))
    return Pe(pt(t, { lvl: n - 1 }));
  if (!J(o) && !J(o.l)) {
    const r2 = o.l, s = Le(r2) ? o.lvl - 1 : o.lvl;
    return pt(r2, {
      l: pt(t, {
        lvl: n - 1,
        r: r2.l
      }),
      lvl: r2.lvl + 1,
      r: Pe(pt(o, { l: r2.r, lvl: s }))
    });
  }
  throw new Error("Unexpected empty nodes");
}
function pt(t, e) {
  return $n(
    e.k === void 0 ? t.k : e.k,
    e.v === void 0 ? t.v : e.v,
    e.lvl === void 0 ? t.lvl : e.lvl,
    e.l === void 0 ? t.l : e.l,
    e.r === void 0 ? t.r : e.r
  );
}
function Nn(t) {
  return J(t.r) ? t.l : ve(pt(t, { r: Nn(t.r) }));
}
function Le(t) {
  return J(t) || t.lvl > t.r.lvl;
}
function Dn(t) {
  return J(t.r) ? [t.k, t.v] : Dn(t.r);
}
function $n(t, e, n, o = se, r2 = se) {
  return { k: t, l: o, lvl: n, r: r2, v: e };
}
function Sn(t) {
  return Pe(Un(t));
}
function Un(t) {
  const { l: e } = t;
  return !J(e) && e.lvl === t.lvl ? pt(e, { r: pt(t, { l: e.r }) }) : t;
}
function Pe(t) {
  const { lvl: e, r: n } = t;
  return !J(n) && !J(n.r) && n.lvl === e && n.r.lvl === e ? pt(n, { l: pt(t, { r: n.l }), lvl: e + 1 }) : t;
}
function Lo(t) {
  return _n(t, ({ k: e, v: n }) => ({ index: e, value: n }));
}
function Kn(t, e) {
  return !!(t && t.startIndex === e.startIndex && t.endIndex === e.endIndex);
}
function Jt(t, e) {
  return !!(t && t[0] === e[0] && t[1] === e[1]);
}
const Ke = Y(
  () => ({ recalcInProgress: y(false) }),
  [],
  { singleton: true }
);
function jn(t, e, n) {
  return t[we(t, e, n)];
}
function we(t, e, n, o = 0) {
  let r2 = t.length - 1;
  for (; o <= r2; ) {
    const s = Math.floor((o + r2) / 2), i = t[s], l = n(i, e);
    if (l === 0)
      return s;
    if (l === -1) {
      if (r2 - o < 2)
        return s - 1;
      r2 = s - 1;
    } else {
      if (r2 === o)
        return s;
      o = s + 1;
    }
  }
  throw new Error(`Failed binary finding record in array - ${t.join(",")}, searched for ${e}`);
}
function Oo(t, e, n, o) {
  const r2 = we(t, e, o), s = we(t, n, o, r2);
  return t.slice(r2, s + 1);
}
function Bt(t, e) {
  return Math.round(t.getBoundingClientRect()[e]);
}
function Ee(t) {
  return !J(t.groupOffsetTree);
}
function je({ index: t }, e) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function xn() {
  return {
    groupIndices: [],
    groupOffsetTree: Dt(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: Dt()
  };
}
function zo(t, e) {
  let n = J(t) ? 0 : 1 / 0;
  for (const o of e) {
    const { endIndex: r2, size: s, startIndex: i } = o;
    if (n = Math.min(n, i), J(t)) {
      t = xt(t, 0, s);
      continue;
    }
    const l = Xt(t, i - 1, r2 + 1);
    if (l.some(Ao(o)))
      continue;
    let u = false, d = false;
    for (const { end: f, start: S, value: h } of l)
      u ? (r2 >= S || s === h) && (t = We(t, S)) : (d = h !== s, u = true), f > r2 && r2 >= S && h !== s && (t = xt(t, r2 + 1, h));
    d && (t = xt(t, i, s));
  }
  return [t, n];
}
function Fo(t) {
  return t.groupIndex !== void 0;
}
function Vo({ offset: t }, e) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function le(t, e, n) {
  if (e.length === 0)
    return 0;
  const { index: o, offset: r2, size: s } = jn(e, t, je), i = t - o, l = s * i + (i - 1) * n + r2;
  return l > 0 ? l + n : l;
}
function qn(t, e) {
  if (!Ee(e))
    return t;
  let n = 0;
  for (; e.groupIndices[n] <= t + n; )
    n++;
  return t + n;
}
function Yn(t, e, n) {
  if (Fo(t))
    return e.groupIndices[t.groupIndex] + 1;
  const o = t.index === "LAST" ? n : t.index;
  let r2 = qn(o, e);
  return r2 = Math.max(0, Math.min(n, r2)), r2;
}
function Wo(t, e, n, o = 0) {
  return o > 0 && (e = Math.max(e, jn(t, o, je).offset)), _n(Oo(t, e, n, Vo), Go);
}
function Mo(t, [e, n, o, r2]) {
  e.length > 0 && o("received item sizes", e, ht.DEBUG);
  const s = t.sizeTree;
  let i = s, l = 0;
  if (n.length > 0 && J(s) && e.length === 2) {
    const h = e[0].size, m = e[1].size;
    i = n.reduce((T, R) => xt(xt(T, R, h), R + 1, m), i);
  } else
    [i, l] = zo(i, e);
  if (i === s)
    return t;
  const { lastIndex: u, lastOffset: d, lastSize: f, offsetTree: S } = Ge(t.offsetTree, l, i, r2);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((h, m) => xt(h, m, le(m, S, r2)), Dt()),
    lastIndex: u,
    lastOffset: d,
    lastSize: f,
    offsetTree: S,
    sizeTree: i
  };
}
function Po(t) {
  return $t(t).map(({ k: e, v: n }, o, r2) => {
    const s = r2[o + 1];
    return { endIndex: s === void 0 ? 1 / 0 : s.k - 1, size: n, startIndex: e };
  });
}
function vn(t, e) {
  let n = 0, o = 0;
  for (; n < t; )
    n += e[o + 1] - e[o] - 1, o++;
  return o - (n === t ? 0 : 1);
}
function Ge(t, e, n, o) {
  let r2 = t, s = 0, i = 0, l = 0, u = 0;
  if (e === 0)
    r2 = [];
  else {
    u = we(r2, e - 1, je), l = r2[u].offset;
    const f = kt(n, e - 1);
    s = f[0], i = f[1], r2.length && r2[u].size === kt(n, e)[1] && (u -= 1), r2 = r2.slice(0, u + 1);
  }
  for (const { start: d, value: f } of Xt(n, e, 1 / 0)) {
    const S = d - s, h = S * i + l + S * o;
    r2.push({
      index: d,
      offset: h,
      size: f
    }), s = d, l = h, i = f;
  }
  return {
    lastIndex: s,
    lastOffset: l,
    lastSize: i,
    offsetTree: r2
  };
}
function Go(t) {
  return { index: t.index, value: t };
}
function Ao(t) {
  const { endIndex: e, size: n, startIndex: o } = t;
  return (r2) => r2.start === o && (r2.end === e || r2.end === 1 / 0) && r2.value === n;
}
const _o = {
  offsetHeight: "height",
  offsetWidth: "width"
}, zt = Y(
  ([{ log: t }, { recalcInProgress: e }]) => {
    const n = U(), o = U(), r2 = gt(o, 0), s = U(), i = U(), l = y(0), u = y([]), d = y(void 0), f = y(void 0), S = y(void 0), h = y(void 0), m = y((c, p) => Bt(c, _o[p])), T = y(void 0), R = y(0), g = xn(), x = U(), a = gt(
      v(
        Ce(n, x),
        $(u, t, R),
        Ht((c, [p, ...b]) => {
          if (p === null) {
            const [L] = b;
            return {
              ...xn(),
              groupIndices: L,
              groupOffsetTree: L.reduce((O, F, P) => xt(O, F, P), Dt())
            };
          }
          return Mo(c, [p, ...b]);
        }, g),
        ot()
      ),
      g
    ), C = gt(
      v(
        u,
        ot(),
        Ht((c, p) => ({ current: p, prev: c.current }), {
          current: [],
          prev: []
        }),
        B(({ prev: c }) => c)
      ),
      []
    );
    z(
      v(
        u,
        V((c) => c.length > 0),
        $(a, R),
        B(([c, p, b]) => {
          const L = c.reduce((O, F, P) => xt(O, F, le(F, p.offsetTree, b) || P), Dt());
          return {
            ...p,
            groupIndices: c,
            groupOffsetTree: L
          };
        })
      ),
      a
    ), z(
      v(
        o,
        $(a),
        V(([c, { lastIndex: p }]) => c < p),
        B(([c, { lastIndex: p, lastSize: b }]) => [
          {
            endIndex: p,
            size: b,
            startIndex: c
          }
        ])
      ),
      n
    ), z(d, f);
    const I = gt(
      v(
        d,
        B((c) => c === void 0)
      ),
      true
    );
    z(
      v(
        f,
        V((c) => c !== void 0 && J(tt(a).sizeTree)),
        B((c) => {
          const p = tt(S), b = tt(u).length > 0;
          return p !== void 0 && p !== 0 ? b ? [
            { endIndex: 0, size: p, startIndex: 0 },
            { endIndex: 1, size: c, startIndex: 1 }
          ] : [] : [{ endIndex: 0, size: c, startIndex: 0 }];
        })
      ),
      n
    ), z(
      v(
        h,
        V((c) => c !== void 0 && c.length > 0 && J(tt(a).sizeTree)),
        B((c) => {
          const p = [];
          let b = c[0], L = 0;
          for (let O = 1; O < c.length; O++) {
            const F = c[O];
            F !== b && (p.push({
              endIndex: O - 1,
              size: b,
              startIndex: L
            }), b = F, L = O);
          }
          return p.push({
            endIndex: c.length - 1,
            size: b,
            startIndex: L
          }), p;
        })
      ),
      n
    ), z(
      v(
        u,
        $(S, f),
        V(([, c, p]) => c !== void 0 && p !== void 0),
        B(([c, p, b]) => {
          const L = [];
          for (let O = 0; O < c.length; O++) {
            const F = c[O], P = c[O + 1];
            L.push({
              startIndex: F,
              endIndex: F,
              size: p
            }), P !== void 0 && L.push({
              startIndex: F + 1,
              endIndex: P - 1,
              size: b
            });
          }
          return L;
        })
      ),
      n
    );
    const w = yt(
      v(
        n,
        $(a),
        Ht(
          ({ sizes: c }, [p, b]) => ({
            changed: b !== c,
            sizes: b
          }),
          { changed: false, sizes: g }
        ),
        B((c) => c.changed)
      )
    );
    X(
      v(
        l,
        Ht(
          (c, p) => ({ diff: c.prev - p, prev: p }),
          { diff: 0, prev: 0 }
        ),
        B((c) => c.diff)
      ),
      (c) => {
        const { groupIndices: p } = tt(a);
        if (c > 0)
          N(e, true), N(s, c + vn(c, p));
        else if (c < 0) {
          const b = tt(C);
          b.length > 0 && (c -= vn(-c, b)), N(i, c);
        }
      }
    ), X(v(l, $(t)), ([c, p]) => {
      c < 0 && p(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: l },
        ht.ERROR
      );
    });
    const k = yt(s);
    z(
      v(
        s,
        $(a),
        B(([c, p]) => {
          const b = p.groupIndices.length > 0, L = [], O = p.lastSize;
          if (b) {
            const F = ie(p.sizeTree, 0);
            let P = 0, Z = 0;
            for (; P < c; ) {
              const K = p.groupIndices[Z], lt = p.groupIndices.length === Z + 1 ? 1 / 0 : p.groupIndices[Z + 1] - K - 1;
              L.push({
                endIndex: K,
                size: F,
                startIndex: K
              }), L.push({
                endIndex: K + 1 + lt - 1,
                size: O,
                startIndex: K + 1
              }), Z++, P += lt + 1;
            }
            const W = $t(p.sizeTree);
            return P !== c && W.shift(), W.reduce(
              (K, { k: lt, v: ct }) => {
                let It = K.ranges;
                return K.prevSize !== 0 && (It = [
                  ...K.ranges,
                  {
                    endIndex: lt + c - 1,
                    size: K.prevSize,
                    startIndex: K.prevIndex
                  }
                ]), {
                  prevIndex: lt + c,
                  prevSize: ct,
                  ranges: It
                };
              },
              {
                prevIndex: c,
                prevSize: 0,
                ranges: L
              }
            ).ranges;
          }
          return $t(p.sizeTree).reduce(
            (F, { k: P, v: Z }) => ({
              prevIndex: P + c,
              prevSize: Z,
              ranges: [...F.ranges, { endIndex: P + c - 1, size: F.prevSize, startIndex: F.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: O,
              ranges: []
            }
          ).ranges;
        })
      ),
      n
    );
    const A = yt(
      v(
        i,
        $(a, R),
        B(([c, { offsetTree: p }, b]) => {
          const L = -c;
          return le(L, p, b);
        })
      )
    );
    return z(
      v(
        i,
        $(a, R),
        B(([c, p, b]) => {
          if (p.groupIndices.length > 0) {
            if (J(p.sizeTree))
              return p;
            let F = Dt();
            const P = tt(C);
            let Z = 0, W = 0, ft = 0;
            for (; Z < -c; ) {
              ft = P[W];
              const lt = P[W + 1] - ft - 1;
              W++, Z += lt + 1;
            }
            if (F = $t(p.sizeTree).reduce((lt, { k: ct, v: It }) => xt(lt, Math.max(0, ct + c), It), F), Z !== -c) {
              const lt = ie(p.sizeTree, ft);
              F = xt(F, 0, lt);
              const ct = kt(p.sizeTree, -c + 1)[1];
              F = xt(F, 1, ct);
            }
            return {
              ...p,
              sizeTree: F,
              ...Ge(p.offsetTree, 0, F, b)
            };
          }
          const O = $t(p.sizeTree).reduce((F, { k: P, v: Z }) => xt(F, Math.max(0, P + c), Z), Dt());
          return {
            ...p,
            sizeTree: O,
            ...Ge(p.offsetTree, 0, O, b)
          };
        })
      ),
      a
    ), {
      beforeUnshiftWith: k,
      // input
      data: T,
      defaultItemSize: f,
      firstItemIndex: l,
      fixedItemSize: d,
      fixedGroupSize: S,
      gap: R,
      groupIndices: u,
      heightEstimates: h,
      itemSize: m,
      listRefresh: w,
      resetSizes: x,
      shiftWith: i,
      shiftWithOffset: A,
      sizeRanges: n,
      // output
      sizes: a,
      statefulTotalCount: r2,
      totalCount: o,
      trackItemSizes: I,
      unshiftWith: s
    };
  },
  st(Gt, Ke),
  { singleton: true }
);
function No(t) {
  return t.reduce(
    (e, n) => (e.groupIndices.push(e.totalCount), e.totalCount += n + 1, e),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const Zn = Y(
  ([{ groupIndices: t, resetSizes: e, sizeRanges: n, sizes: o, statefulTotalCount: r2, totalCount: s, trackItemSizes: i }, { headerHeight: l, scrollTop: u }]) => {
    const d = U(), f = U(), S = yt(v(d, B(No))), h = gt(
      v(
        n,
        $(r2, t),
        V(([, m, T]) => m > T.length),
        Ct(true)
      ),
      false
    );
    return z(
      v(
        S,
        Ht(([, m], T) => [m, T], [
          { groupIndices: [], totalCount: 0 },
          { groupIndices: [], totalCount: 0 }
        ]),
        $(o, i, h),
        V(([[m, T], { sizeTree: R }, g, x]) => {
          const a = m.groupIndices.length > 0 && m.totalCount === m.groupIndices.length, C = T.totalCount > T.groupIndices.length;
          return g && !x && a && C && !J(R);
        }),
        Ct(null)
      ),
      e
    ), z(
      v(
        S,
        B((m) => m.totalCount)
      ),
      s
    ), z(
      v(
        S,
        B((m) => m.groupIndices)
      ),
      t
    ), z(
      v(
        mt(u, o, l),
        V(([m, T]) => Ee(T)),
        B(([m, T, R]) => kt(T.groupOffsetTree, Math.max(m - R, 0), "v")[0]),
        ot(),
        B((m) => [m])
      ),
      f
    ), { groupCounts: d, topItemsIndexes: f };
  },
  st(zt, St)
), At = Y(
  ([{ log: t }]) => {
    const e = y(false), n = yt(
      v(
        e,
        V((o) => o),
        ot()
      )
    );
    return X(e, (o) => {
      o && tt(t)("props updated", {}, ht.DEBUG);
    }), { didMount: n, propsReady: e };
  },
  st(Gt),
  { singleton: true }
), Do = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function Xn(t) {
  const e = typeof t == "number" ? { index: t } : { ...t };
  return e.align || (e.align = "start"), (!e.behavior || !Do) && (e.behavior = "auto"), e.offset === void 0 && (e.offset = 0), e;
}
const de = Y(
  ([
    { gap: t, listRefresh: e, sizes: n, totalCount: o },
    {
      fixedFooterHeight: r2,
      fixedHeaderHeight: s,
      footerHeight: i,
      headerHeight: l,
      scrollingInProgress: u,
      scrollTo: d,
      smoothScrollTargetReached: f,
      viewportHeight: S
    },
    { log: h }
  ]) => {
    const m = U(), T = U(), R = y(0);
    let g = null, x = null, a = null;
    function C() {
      g !== null && (g(), g = null), a !== null && (a(), a = null), x && (clearTimeout(x), x = null), N(u, false);
    }
    return z(
      v(
        m,
        $(n, S, o, R, l, i, h),
        $(t, s, r2),
        B(
          ([
            [I, w, k, A, c, p, b, L],
            O,
            F,
            P
          ]) => {
            const Z = Xn(I), { align: W, behavior: ft, offset: K } = Z, lt = A - 1, ct = Yn(Z, w, lt);
            let It = le(ct, w.offsetTree, O) + p;
            W === "end" ? (It += F + kt(w.sizeTree, ct)[1] - k + P, ct === lt && (It += b)) : W === "center" ? It += (F + kt(w.sizeTree, ct)[1] - k + P) / 2 : It -= c, K !== void 0 && K !== 0 && (It += K);
            const Ft = (vt) => {
              C(), vt ? (L("retrying to scroll to", { location: I }, ht.DEBUG), N(m, I)) : (N(T, true), L("list did not change, scroll successful", {}, ht.DEBUG));
            };
            if (C(), ft === "smooth") {
              let vt = false;
              a = X(e, (Lt) => {
                vt = vt || Lt;
              }), g = Et(f, () => {
                Ft(vt);
              });
            } else
              g = Et(v(e, $o(150)), Ft);
            return x = setTimeout(() => {
              C();
            }, 1200), N(u, true), L("scrolling from index to", { behavior: ft, index: ct, top: It }, ht.DEBUG), { behavior: ft, top: It };
          }
        )
      ),
      d
    ), {
      scrollTargetReached: T,
      scrollToIndex: m,
      topListHeight: R
    };
  },
  st(zt, St, Gt),
  { singleton: true }
);
function $o(t) {
  return (e) => {
    const n = setTimeout(() => {
      e(false);
    }, t);
    return (o) => {
      o && (e(true), clearTimeout(n));
    };
  };
}
function qe(t, e) {
  t === 0 ? e() : requestAnimationFrame(() => {
    qe(t - 1, e);
  });
}
function Ye(t, e) {
  if (t === void 0)
    return 0;
  const n = e - 1, o = typeof t == "number" ? t : t.index === "LAST" ? n : t.index;
  return Math.max(0, Math.min(o, n));
}
function Ae(t) {
  return t === void 0 ? true : typeof t == "number" ? t === 0 : t.index === 0 && (t.align === void 0 || t.align === "start") && (t.offset === void 0 || t.offset === 0);
}
const fe = Y(
  ([{ defaultItemSize: t, listRefresh: e, sizes: n }, { scrollTop: o }, { scrollTargetReached: r2, scrollToIndex: s }, { didMount: i }]) => {
    const l = y(true), u = y(0), d = y(true);
    return z(
      v(
        i,
        $(u),
        V(([f, S]) => !Ae(S)),
        Ct(false)
      ),
      l
    ), z(
      v(
        i,
        $(u),
        V(([f, S]) => !Ae(S)),
        Ct(false)
      ),
      d
    ), X(
      v(
        mt(e, i),
        $(l, n, t, d),
        V(([[, f], S, { sizeTree: h }, m, T]) => f && (!J(h) || Ne(m)) && !S && !T),
        $(u)
      ),
      ([, f]) => {
        if (f === void 0) {
          N(l, true), N(d, true);
          return;
        }
        Et(r2, () => {
          N(d, true);
        }), qe(4, () => {
          Et(o, () => {
            N(l, true);
          }), N(s, f);
        });
      }
    ), {
      initialItemFinalLocationReached: d,
      initialTopMostItemIndex: u,
      scrolledToInitialItem: l
    };
  },
  st(zt, St, de, At),
  { singleton: true }
);
function Jn(t, e) {
  return Math.abs(t - e) < 1.01;
}
const ce = "up", ne = "down", Uo = "none", Ko = {
  atBottom: false,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, jo = 0, me = Y(([{ footerHeight: t, headerHeight: e, scrollBy: n, scrollContainerState: o, scrollTop: r2, viewportHeight: s }]) => {
  const i = y(false), l = y(true), u = U(), d = U(), f = y(4), S = y(jo), h = gt(
    v(
      Ce(v(M(r2), jt(1), Ct(true)), v(M(r2), jt(1), Ct(false), hn(100))),
      ot()
    ),
    false
  ), m = gt(
    v(Ce(v(n, Ct(true)), v(n, Ct(false), hn(200))), ot()),
    false
  );
  z(
    v(
      mt(M(r2), M(S)),
      B(([a, C]) => a <= C),
      ot()
    ),
    l
  ), z(v(l, Wt(50)), d);
  const T = yt(
    v(
      mt(o, M(s), M(e), M(t), M(f)),
      Ht((a, [{ scrollHeight: C, scrollTop: I }, w, k, A, c]) => {
        const p = I + w - C > -c, b = {
          scrollHeight: C,
          scrollTop: I,
          viewportHeight: w
        };
        if (p) {
          let O, F;
          return I > a.state.scrollTop ? (O = "SCROLLED_DOWN", F = a.state.scrollTop - I) : (O = "SIZE_DECREASED", F = a.state.scrollTop - I || a.scrollTopDelta), {
            atBottom: true,
            atBottomBecause: O,
            scrollTopDelta: F,
            state: b
          };
        }
        let L;
        return b.scrollHeight > a.state.scrollHeight ? L = "SIZE_INCREASED" : w < a.state.viewportHeight ? L = "VIEWPORT_HEIGHT_DECREASING" : I < a.state.scrollTop ? L = "SCROLLING_UPWARDS" : L = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: false,
          notAtBottomBecause: L,
          state: b
        };
      }, Ko),
      ot((a, C) => a !== void 0 && a.atBottom === C.atBottom)
    )
  ), R = gt(
    v(
      o,
      Ht(
        (a, { scrollHeight: C, scrollTop: I, viewportHeight: w }) => {
          if (!Jn(a.scrollHeight, C)) {
            const k = C - (I + w) < 1;
            return a.scrollTop !== I && k ? {
              changed: true,
              jump: a.scrollTop - I,
              scrollHeight: C,
              scrollTop: I
            } : {
              changed: true,
              jump: 0,
              scrollHeight: C,
              scrollTop: I
            };
          }
          return {
            changed: false,
            jump: 0,
            scrollHeight: C,
            scrollTop: I
          };
        },
        { changed: false, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      V((a) => a.changed),
      B((a) => a.jump)
    ),
    0
  );
  z(
    v(
      T,
      B((a) => a.atBottom)
    ),
    i
  ), z(v(i, Wt(50)), u);
  const g = y(ne);
  z(
    v(
      o,
      B(({ scrollTop: a }) => a),
      ot(),
      Ht(
        (a, C) => tt(m) ? { direction: a.direction, prevScrollTop: C } : { direction: C < a.prevScrollTop ? ce : ne, prevScrollTop: C },
        { direction: ne, prevScrollTop: 0 }
      ),
      B((a) => a.direction)
    ),
    g
  ), z(v(o, Wt(50), Ct(Uo)), g);
  const x = y(0);
  return z(
    v(
      h,
      V((a) => !a),
      Ct(0)
    ),
    x
  ), z(
    v(
      r2,
      Wt(100),
      $(h),
      V(([a, C]) => C),
      Ht(([a, C], [I]) => [C, I], [0, 0]),
      B(([a, C]) => C - a)
    ),
    x
  ), {
    atBottomState: T,
    atBottomStateChange: u,
    atBottomThreshold: f,
    atTopStateChange: d,
    atTopThreshold: S,
    isAtBottom: i,
    isAtTop: l,
    isScrolling: h,
    lastJumpDueToItemResize: R,
    scrollDirection: g,
    scrollVelocity: x
  };
}, st(St)), ue = "top", ae = "bottom", Tn = "none";
function Cn(t, e, n) {
  return typeof t == "number" ? n === ce && e === ue || n === ne && e === ae ? t : 0 : n === ce ? e === ue ? t.main : t.reverse : e === ae ? t.main : t.reverse;
}
function wn(t, e) {
  return typeof t == "number" ? t : t[e] ?? 0;
}
const Ze = Y(
  ([{ deviation: t, fixedHeaderHeight: e, headerHeight: n, scrollTop: o, viewportHeight: r2 }]) => {
    const s = U(), i = y(0), l = y(0), u = y(0), d = gt(
      v(
        mt(
          M(o),
          M(r2),
          M(n),
          M(s, Jt),
          M(u),
          M(i),
          M(e),
          M(t),
          M(l)
        ),
        B(
          ([
            f,
            S,
            h,
            [m, T],
            R,
            g,
            x,
            a,
            C
          ]) => {
            const I = f - a, w = g + x, k = Math.max(h - I, 0);
            let A = Tn;
            const c = wn(C, ue), p = wn(C, ae);
            return m -= a, m += h + x, T += h + x, T -= a, m > f + w - c && (A = ce), T < f - k + S + p && (A = ne), A !== Tn ? [
              Math.max(I - h - Cn(R, ue, A) - c, 0),
              I - k - x + S + Cn(R, ae, A) + p
            ] : null;
          }
        ),
        V((f) => f !== null),
        ot(Jt)
      ),
      [0, 0]
    );
    return {
      increaseViewportBy: l,
      // input
      listBoundary: s,
      overscan: u,
      topListHeight: i,
      // output
      visibleRange: d
    };
  },
  st(St),
  { singleton: true }
);
function qo(t, e, n, o) {
  if (Ee(e)) {
    const r2 = o - e.groupIndices.length;
    if (r2 <= 0)
      return [{ index: e.groupIndices[0], offset: 0, size: 0 }];
    const s = qn(Math.min(t, r2 - 1), e);
    return [
      { index: kt(e.groupOffsetTree, s)[0], offset: 0, size: 0 },
      { data: n?.[0], index: s, offset: 0, size: 0 }
    ];
  }
  return [{ data: n?.[0], index: t, offset: 0, size: 0 }];
}
const Oe = {
  bottom: 0,
  firstItemIndex: 0,
  items: [],
  offsetBottom: 0,
  offsetTop: 0,
  top: 0,
  topItems: [],
  topListHeight: 0,
  totalCount: 0
};
function Te(t, e, n, o, r2, s) {
  const { lastIndex: i, lastOffset: l, lastSize: u } = r2;
  let d = 0, f = 0;
  if (t.length > 0) {
    d = t[0].offset;
    const R = t[t.length - 1];
    f = R.offset + R.size;
  }
  const S = n - i, h = l + S * u + (S - 1) * o, m = d, T = h - f;
  return {
    bottom: f,
    firstItemIndex: s,
    items: yn(t, r2, s),
    offsetBottom: T,
    offsetTop: d,
    top: m,
    topItems: yn(e, r2, s),
    topListHeight: e.reduce((R, g) => g.size + R, 0),
    totalCount: n
  };
}
function Qn(t, e, n, o, r2, s) {
  let i = 0;
  if (n.groupIndices.length > 0)
    for (const m of n.groupIndices) {
      if (m - i >= t)
        break;
      i++;
    }
  const l = t + i, u = s !== void 0, d = s?.length ?? 0, f = Ye(e, u ? d : l), S = u ? Math.max(0, Math.min(l, d - f)) : l, h = Array.from({ length: S }).map((m, T) => ({
    data: s?.[T + f],
    index: T + f,
    offset: 0,
    size: 0
  }));
  return Te(h, [], S, r2, n, o);
}
function yn(t, e, n) {
  if (t.length === 0)
    return [];
  if (!Ee(e))
    return t.map((d) => ({ ...d, index: d.index + n, originalIndex: d.index }));
  const o = t[0].index, r2 = t[t.length - 1].index, s = [], i = Xt(e.groupOffsetTree, o, r2);
  let l, u = 0;
  for (const d of t) {
    (!l || l.end < d.index) && (l = i.shift(), u = e.groupIndices.indexOf(l.start));
    let f;
    d.index === l.start ? f = {
      index: u,
      type: "group"
    } : f = {
      groupIndex: u,
      index: d.index - (u + 1) + n
    }, s.push({
      ...f,
      data: d.data,
      offset: d.offset,
      originalIndex: d.index,
      size: d.size
    });
  }
  return s;
}
function bn(t, e) {
  return t === void 0 ? 0 : typeof t == "number" ? t : t[e] ?? 0;
}
const qt = Y(
  ([
    { data: t, firstItemIndex: e, gap: n, sizes: o, totalCount: r2 },
    s,
    { listBoundary: i, topListHeight: l, visibleRange: u },
    { initialTopMostItemIndex: d, scrolledToInitialItem: f },
    { topListHeight: S },
    h,
    { didMount: m },
    { recalcInProgress: T }
  ]) => {
    const R = y([]), g = y(0), x = gt(
      v(
        o,
        V(({ sizeTree: c }) => !J(c)),
        Ct(true)
      ),
      false
    ), a = U(), C = y(0);
    z(s.topItemsIndexes, R);
    const I = gt(
      v(
        mt(
          m,
          T,
          M(u, Jt),
          M(r2),
          M(o),
          M(d),
          f,
          M(R),
          M(e),
          M(n),
          M(C),
          t,
          M(g)
        ),
        V(([c, p, , b, , , , , , , , L]) => {
          const O = L !== void 0 && L.length !== b;
          return c && !p && !O;
        }),
        B(
          ([
            ,
            ,
            [c, p],
            b,
            L,
            O,
            F,
            P,
            Z,
            W,
            ft,
            K,
            lt
          ]) => {
            const ct = L, { offsetTree: It, sizeTree: Ft } = ct;
            if (b === 0)
              return { ...Oe, totalCount: b };
            if (c === 0 && p === 0)
              return lt === 0 ? { ...Oe, totalCount: b } : Qn(lt, O, L, Z, W, K);
            if (J(Ft))
              return lt > 0 && !tt(x) ? null : Te(
                qo(Ye(O, b), ct, K, b),
                [],
                b,
                W,
                ct,
                Z
              );
            const vt = [];
            if (P.length > 0) {
              const q = P[0], Q = P[P.length - 1];
              let ut = 0;
              for (const it of Xt(Ft, q, Q)) {
                const et = it.value, dt = Math.max(it.start, q), Tt = Math.min(it.end, Q);
                for (let at = dt; at <= Tt; at++)
                  vt.push({ data: K?.[at], index: at, offset: ut, size: et }), ut += et;
              }
            }
            if (!F)
              return Te([], vt, b, W, ct, Z);
            const Lt = P.length > 0 ? P[P.length - 1] + 1 : 0, he = Wo(It, c, p, Lt);
            if (he.length === 0)
              return null;
            const Yt = b - 1, Vt = Re([], (q) => {
              for (const Q of he) {
                const ut = Q.value;
                let it = ut.offset, et = Q.start;
                const dt = ut.size;
                if (ut.offset < c) {
                  et += Math.floor((c - ut.offset + W) / (dt + W));
                  const at = et - Q.start;
                  it += at * dt + at * W;
                }
                et < Lt && (it += (Lt - et) * dt, et = Lt);
                const Tt = Math.min(Q.end, Yt);
                for (let at = et; at <= Tt && !(it >= p); at++)
                  q.push({ data: K?.[at], index: at, offset: it, size: dt }), it += dt + W;
              }
            }), H = bn(ft, ue), j = bn(ft, ae);
            if (Vt.length > 0 && (H > 0 || j > 0)) {
              const q = Vt[0], Q = Vt[Vt.length - 1];
              if (H > 0 && q.index > Lt) {
                const ut = Math.min(H, q.index - Lt), it = [];
                let et = q.offset;
                for (let dt = q.index - 1; dt >= q.index - ut; dt--) {
                  const at = Xt(Ft, dt, dt)[0]?.value ?? q.size;
                  et -= at + W, it.unshift({ data: K?.[dt], index: dt, offset: et, size: at });
                }
                Vt.unshift(...it);
              }
              if (j > 0 && Q.index < Yt) {
                const ut = Math.min(j, Yt - Q.index);
                let it = Q.offset + Q.size + W;
                for (let et = Q.index + 1; et <= Q.index + ut; et++) {
                  const Tt = Xt(Ft, et, et)[0]?.value ?? Q.size;
                  Vt.push({ data: K?.[et], index: et, offset: it, size: Tt }), it += Tt + W;
                }
              }
            }
            return Te(Vt, vt, b, W, ct, Z);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        V((c) => c !== null),
        ot()
      ),
      Oe
    );
    z(
      v(
        t,
        V(Ne),
        B((c) => c?.length)
      ),
      r2
    ), z(
      v(
        I,
        B((c) => c.topListHeight)
      ),
      S
    ), z(S, l), z(
      v(
        I,
        B((c) => [c.top, c.bottom])
      ),
      i
    ), z(
      v(
        I,
        B((c) => c.items)
      ),
      a
    );
    const w = yt(
      v(
        I,
        V(({ items: c }) => c.length > 0),
        $(r2, t),
        V(([{ items: c }, p]) => c[c.length - 1].originalIndex === p - 1),
        B(([{ items: c }, p, b]) => {
          const L = c[c.length - 1], O = L.type === "group" ? L.index + 1 : (L.groupIndex ?? -1) + 1;
          return [p - 1 - O, b];
        }),
        ot(Jt),
        // when every group is empty, only headers render and there is no item index to report.
        // Filter after the distinct check, so that the same index fires again once an item returns.
        V(([c]) => c >= 0),
        B(([c]) => c)
      )
    ), k = yt(
      v(
        I,
        Wt(200),
        V(({ items: c, topItems: p }) => c.length > 0 && c[0].originalIndex === p.length),
        B(({ items: c }) => c[0].index),
        ot()
      )
    ), A = yt(
      v(
        I,
        V(({ items: c }) => c.length > 0),
        // oxlint-disable-next-line array-callback-return -- callback always returns after trimming group sentinels
        B(({ items: c }) => {
          let p = 0, b = c.length - 1;
          for (; c[p].type === "group" && p < b; )
            p++;
          for (; c[b].type === "group" && b > p; )
            b--;
          return {
            endIndex: c[b].index,
            startIndex: c[p].index
          };
        }),
        ot(Kn)
      )
    );
    return {
      endReached: w,
      initialItemCount: g,
      itemsRendered: a,
      listState: I,
      minOverscanItemCount: C,
      rangeChanged: A,
      startReached: k,
      topItemsIndexes: R,
      ...h
    };
  },
  st(
    zt,
    Zn,
    Ze,
    fe,
    de,
    me,
    At,
    Ke
  ),
  { singleton: true }
), to = Y(
  ([{ fixedFooterHeight: t, fixedHeaderHeight: e, footerHeight: n, headerHeight: o }, { listState: r2 }]) => {
    const s = U(), i = gt(
      v(
        mt(n, t, o, e, r2),
        B(([l, u, d, f, S]) => l + u + d + f + S.offsetBottom + S.bottom)
      ),
      0
    );
    return z(M(i), s), { totalListHeight: i, totalListHeightChanged: s };
  },
  st(St, qt),
  { singleton: true }
), Yo = Y(
  ([{ viewportHeight: t }, { totalListHeight: e }]) => {
    const n = y(false), o = gt(
      v(
        mt(n, t, e),
        V(([r2]) => r2),
        B(([, r2, s]) => Math.max(0, r2 - s)),
        Wt(0),
        ot()
      ),
      0
    );
    return { alignToBottom: n, paddingTopAddition: o };
  },
  st(St, to),
  { singleton: true }
), eo = Y(() => ({
  context: y(null)
})), Zo = ({
  itemBottom: t,
  itemTop: e,
  locationParams: { align: n, behavior: o, ...r2 },
  viewportBottom: s,
  viewportTop: i
}) => e < i ? { ...r2, align: n ?? "start", ...o === void 0 ? {} : { behavior: o } } : t > s ? { ...r2, align: n ?? "end", ...o === void 0 ? {} : { behavior: o } } : null, no = Y(
  ([
    { gap: t, sizes: e, totalCount: n },
    { fixedFooterHeight: o, fixedHeaderHeight: r2, headerHeight: s, scrollingInProgress: i, scrollTop: l, viewportHeight: u },
    { scrollToIndex: d }
  ]) => {
    const f = U();
    return z(
      v(
        f,
        $(e, u, n, s, r2, o, l),
        $(t),
        B(([[S, h, m, T, R, g, x, a], C]) => {
          const { calculateViewLocation: I = Zo, done: w, ...k } = S, A = Yn(S, h, T - 1), c = le(A, h.offsetTree, C) + R + g, p = c + kt(h.sizeTree, A)[1], b = a + g, L = a + m - x, O = I({
            itemBottom: p,
            itemTop: c,
            locationParams: k,
            viewportBottom: L,
            viewportTop: b
          });
          return O === null ? w?.() : w && Et(
            v(
              i,
              V((F) => !F),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              jt(tt(i) ? 1 : 2)
            ),
            w
          ), O;
        }),
        V((S) => S !== null)
      ),
      d
    ), {
      scrollIntoView: f
    };
  },
  st(zt, St, de, qt, Gt),
  { singleton: true }
);
function Rn(t) {
  return t === false ? false : t === "smooth" ? "smooth" : "auto";
}
const Xo = (t, e) => typeof t == "function" ? Rn(t(e)) : e && Rn(t), Jo = Y(
  ([
    { listRefresh: t, totalCount: e, fixedItemSize: n, data: o },
    { atBottomState: r2, isAtBottom: s },
    { scrollToIndex: i },
    { scrolledToInitialItem: l },
    { didMount: u, propsReady: d },
    { log: f },
    { scrollingInProgress: S },
    { context: h },
    { scrollIntoView: m }
  ]) => {
    const T = y(false), R = U();
    let g = null;
    function x(w) {
      N(i, {
        align: "end",
        behavior: w,
        index: "LAST"
      });
    }
    X(
      v(
        mt(v(M(e), jt(1)), u),
        $(M(T), s, l, S),
        B(([[w, k], A, c, p, b]) => {
          let L = k && p, O = "auto";
          return L && (O = Xo(A, c || b), L = L && O !== false), { followOutputBehavior: O, shouldFollow: L, totalCount: w };
        }),
        V(({ shouldFollow: w }) => w)
      ),
      ({ followOutputBehavior: w, totalCount: k }) => {
        g !== null && (g(), g = null), tt(n) === void 0 ? g = Et(t, () => {
          tt(f)("following output to ", { totalCount: k }, ht.DEBUG), x(w), g = null;
        }) : requestAnimationFrame(() => {
          tt(f)("following output to ", { totalCount: k }, ht.DEBUG), x(w);
        });
      }
    );
    function a(w) {
      const k = Et(r2, (A) => {
        w && !A.atBottom && A.notAtBottomBecause === "SIZE_INCREASED" && g === null && (tt(f)("scrolling to bottom due to increased size", {}, ht.DEBUG), x("auto"));
      });
      setTimeout(k, 100);
    }
    X(
      v(
        mt(M(T), e, d),
        V(([w, , k]) => w !== false && k),
        Ht(
          ({ value: w }, [, k]) => ({ refreshed: w === k, value: k }),
          { refreshed: false, value: 0 }
        ),
        V(({ refreshed: w }) => w),
        $(T, e)
      ),
      ([, w]) => {
        tt(l) && a(w !== false);
      }
    ), X(R, () => {
      a(tt(T) !== false);
    }), X(mt(M(T), r2), ([w, k]) => {
      w !== false && !k.atBottom && k.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && x("auto");
    });
    const C = y(null), I = U();
    return z(
      Ce(
        v(
          M(o),
          B((w) => w?.length ?? 0)
        ),
        v(M(e))
      ),
      I
    ), X(
      v(
        mt(v(I, jt(1)), u),
        $(M(C), l, S, h),
        B(([[w, k], A, c, p, b]) => k && c && A?.({ context: b, totalCount: w, scrollingInProgress: p })),
        V((w) => !!w),
        Wt(0)
      ),
      (w) => {
        g !== null && (g(), g = null), tt(n) === void 0 ? g = Et(t, () => {
          tt(f)("scrolling into view", {}), N(m, w), g = null;
        }) : requestAnimationFrame(() => {
          tt(f)("scrolling into view", {}), N(m, w);
        });
      }
    ), { autoscrollToBottom: R, followOutput: T, scrollIntoViewOnChange: C };
  },
  st(
    zt,
    me,
    de,
    fe,
    At,
    Gt,
    St,
    eo,
    no
  )
), Qo = Y(
  ([{ data: t, firstItemIndex: e, gap: n, sizes: o }, { initialTopMostItemIndex: r2 }, { initialItemCount: s, listState: i }, { didMount: l }]) => (z(
    v(
      l,
      $(s),
      V(([, u]) => u !== 0),
      $(r2, o, e, n, t),
      B(([[, u], d, f, S, h, m]) => Qn(u, d, f, S, h, m))
    ),
    i
  ), {}),
  st(zt, fe, qt, At),
  { singleton: true }
), tr = Y(
  ([{ didMount: t }, { scrollTo: e }, { listState: n }]) => {
    const o = y(0);
    return X(
      v(
        t,
        $(o),
        V(([, r2]) => r2 !== 0),
        B(([, r2]) => ({ top: r2 }))
      ),
      (r2) => {
        Et(
          v(
            n,
            jt(1),
            V((s) => s.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              N(e, r2);
            });
          }
        );
      }
    ), {
      initialScrollTop: o
    };
  },
  st(At, St, qt),
  { singleton: true }
), oo = Y(
  ([{ scrollVelocity: t }]) => {
    const e = y(false), n = U(), o = y(false);
    return z(
      v(
        t,
        $(o, e, n),
        V(([r2, s]) => s !== false && s !== void 0),
        B(([r2, s, i, l]) => {
          const { enter: u, exit: d } = s;
          if (i) {
            if (d(r2, l))
              return false;
          } else if (u(r2, l))
            return true;
          return i;
        }),
        ot()
      ),
      e
    ), X(
      v(mt(e, t, n), $(o)),
      ([[r2, s, i], l]) => {
        r2 && l !== false && l !== void 0 && l.change && l.change(s, i);
      }
    ), { isSeeking: e, scrollSeekConfiguration: o, scrollSeekRangeChanged: n, scrollVelocity: t };
  },
  st(me),
  { singleton: true }
), Xe = Y(([{ scrollContainerState: t, scrollTo: e }]) => {
  const n = U(), o = U(), r2 = U(), s = y(false), i = y(void 0);
  return z(
    v(
      mt(n, o),
      B(([{ scrollTop: l, viewportHeight: u }, { offsetTop: d, listHeight: f }]) => ({
        scrollHeight: f,
        scrollTop: Math.max(0, l - d),
        viewportHeight: u
      }))
    ),
    t
  ), z(
    v(
      e,
      $(o),
      B(([l, { offsetTop: u }]) => ({
        ...l,
        top: l.top + u
      }))
    ),
    r2
  ), {
    customScrollParent: i,
    // config
    useWindowScroll: s,
    // input
    windowScrollContainerState: n,
    // signals
    windowScrollTo: r2,
    windowViewportRect: o
  };
}, st(St)), er = Y(
  ([
    { sizeRanges: t, sizes: e },
    { headerHeight: n, scrollTop: o },
    { initialTopMostItemIndex: r2 },
    { didMount: s },
    { useWindowScroll: i, windowScrollContainerState: l, windowViewportRect: u }
  ]) => {
    const d = U(), f = y(void 0), S = y(null), h = y(null);
    return z(l, S), z(u, h), X(
      v(
        d,
        $(e, o, i, S, h, n)
      ),
      ([m, T, R, g, x, a, C]) => {
        const I = Po(T.sizeTree);
        g && x !== null && a !== null && (R = x.scrollTop - a.offsetTop), R -= C, m({ ranges: I, scrollTop: R });
      }
    ), z(v(f, V(Ne), B(nr)), r2), z(
      v(
        s,
        $(f),
        V(([, m]) => m !== void 0),
        ot(),
        B(([, m]) => m.ranges)
      ),
      t
    ), {
      getState: d,
      restoreStateFrom: f
    };
  },
  st(zt, St, fe, At, Xe)
);
function nr(t) {
  return { align: "start", index: 0, offset: t.scrollTop };
}
const or = Y(([{ topItemsIndexes: t }]) => {
  const e = y(0);
  return z(
    v(
      e,
      V((n) => n >= 0),
      B((n) => Array.from({ length: n }).map((o, r2) => r2))
    ),
    t
  ), { topItemCount: e };
}, st(qt));
function ro(t) {
  let e = false, n;
  return (() => (e || (e = true, n = t()), n));
}
const rr = ro(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), sr = Y(
  ([
    { deviation: t, deviationCommitted: e, scrollBy: n, scrollingInProgress: o, scrollTop: r2 },
    { isAtBottom: s, isScrolling: i, lastJumpDueToItemResize: l, scrollDirection: u },
    { listState: d },
    { beforeUnshiftWith: f, gap: S, shiftWithOffset: h, sizes: m },
    { log: T },
    { recalcInProgress: R }
  ]) => {
    const g = yt(
      v(
        d,
        $(l),
        Ht(
          ([, I, w, k], [{ bottom: A, items: c, offsetBottom: p, totalCount: b }, L]) => {
            const O = A + p;
            let F = 0;
            return w === b && I.length > 0 && c.length > 0 && (c[0].originalIndex === 0 && I[0].originalIndex === 0 || (F = O - k, F !== 0 && (F += L))), [F, c, b, O];
          },
          [0, [], 0, 0]
        ),
        V(([I]) => I !== 0),
        $(r2, u, o, s, T, R),
        V(([, I, w, k, , , A]) => !A && !k && I !== 0 && w === ce),
        B(([[I], , , , , w]) => (w("Upward scrolling compensation", { amount: I }, ht.DEBUG), I))
      )
    );
    function x(I) {
      I > 0 ? (N(n, { behavior: "auto", top: -I }), N(t, 0)) : (N(t, 0), N(n, { behavior: "auto", top: -I }));
    }
    X(v(g, $(t, i)), ([I, w, k]) => {
      k && rr() ? N(t, w - I) : x(-I);
    }), X(
      v(
        mt(gt(i, false), t, R),
        V(([I, w, k]) => !I && !k && w !== 0),
        B(([I, w]) => w),
        Wt(1)
      ),
      x
    ), z(
      v(
        h,
        B((I) => ({ top: -I }))
      ),
      n
    );
    let a = null;
    function C() {
      if (a === null)
        return;
      const { offset: I } = a;
      a = null, N(n, { top: I }), requestAnimationFrame(() => {
        N(t, 0), N(R, false);
      });
    }
    return X(e, (I) => {
      a === null || !a.acknowledgeable || I === a.offset && C();
    }), X(
      v(
        f,
        $(m, S),
        B(([I, { groupIndices: w, lastSize: k, sizeTree: A }, c]) => {
          function p(P) {
            return P * (k + c);
          }
          if (w.length === 0)
            return p(I);
          let b = 0;
          const L = ie(A, 0);
          let O = 0, F = 0;
          for (; O < I; ) {
            O++, b += L;
            let P = w.length === F + 1 ? 1 / 0 : w[F + 1] - w[F] - 1;
            O + P > I && (b -= L, P = I - O + 1), O += P, b += p(P), F++;
          }
          return b;
        })
      ),
      (I) => {
        a = { acknowledgeable: tt(t) !== I, offset: I }, N(t, I), requestAnimationFrame(C);
      }
    ), { deviation: t };
  },
  st(St, me, qt, zt, Gt, Ke)
), ir = Y(
  ([
    t,
    e,
    n,
    o,
    r2,
    s,
    i,
    l,
    u,
    d,
    f
  ]) => ({
    ...t,
    ...e,
    ...n,
    ...o,
    ...r2,
    ...s,
    ...i,
    ...l,
    ...u,
    ...d,
    ...f
  }),
  st(
    Ze,
    Qo,
    At,
    oo,
    to,
    tr,
    Yo,
    Xe,
    no,
    Gt,
    eo
  )
), so = Y(
  ([
    {
      data: t,
      defaultItemSize: e,
      firstItemIndex: n,
      fixedItemSize: o,
      fixedGroupSize: r2,
      gap: s,
      groupIndices: i,
      heightEstimates: l,
      itemSize: u,
      sizeRanges: d,
      sizes: f,
      statefulTotalCount: S,
      totalCount: h,
      trackItemSizes: m
    },
    { initialItemFinalLocationReached: T, initialTopMostItemIndex: R, scrolledToInitialItem: g },
    x,
    a,
    C,
    I,
    { scrollToIndex: w },
    k,
    { topItemCount: A },
    { groupCounts: c },
    p
  ]) => {
    const { listState: b, minOverscanItemCount: L, topItemsIndexes: O, rangeChanged: F, ...P } = I;
    return z(F, p.scrollSeekRangeChanged), z(
      v(
        mt(p.windowViewportRect, x.headerHeight, x.fixedHeaderHeight),
        // Keep a measurement range active when a window-scrolling list starts below the viewport.
        // One content pixel beyond the headers is enough to render the probe item and estimate the full list height.
        B(([Z, W, ft]) => Math.max(W + ft + 1, Z.visibleHeight))
      ),
      x.viewportHeight
    ), {
      data: t,
      defaultItemHeight: e,
      firstItemIndex: n,
      fixedItemHeight: o,
      fixedGroupHeight: r2,
      gap: s,
      groupCounts: c,
      heightEstimates: l,
      initialItemFinalLocationReached: T,
      initialTopMostItemIndex: R,
      scrolledToInitialItem: g,
      sizeRanges: d,
      topItemCount: A,
      topItemsIndexes: O,
      // input
      totalCount: h,
      ...C,
      groupIndices: i,
      itemSize: u,
      listState: b,
      minOverscanItemCount: L,
      scrollToIndex: w,
      // output
      statefulTotalCount: S,
      trackItemSizes: m,
      // exported from stateFlagsSystem
      rangeChanged: F,
      ...P,
      // the bag of IO from featureGroup1System
      ...p,
      ...x,
      sizes: f,
      ...a
    };
  },
  st(
    zt,
    fe,
    St,
    er,
    Jo,
    qt,
    de,
    sr,
    or,
    Zn,
    ir
  )
);
function lr(t, e) {
  const n = {}, o = {};
  let r2 = 0;
  const s = t.length;
  for (; r2 < s; )
    o[t[r2]] = 1, r2 += 1;
  for (const i in e)
    Object.hasOwn(o, i) || (n[i] = e[i]);
  return n;
}
const Se = typeof document > "u" ? r.useEffect : r.useLayoutEffect;
function Je(t, e, n) {
  const o = Object.keys(e.required || {}), r$1 = Object.keys(e.optional || {}), s = Object.keys(e.methods || {}), i = Object.keys(e.events || {}), l = r.createContext({});
  function u(x, a) {
    x.propsReady !== void 0 && N(x.propsReady, false);
    for (const C of o) {
      const I = x[e.required[C]];
      N(I, a[C]);
    }
    for (const C of r$1)
      if (C in a) {
        const I = x[e.optional[C]];
        N(I, a[C]);
      }
    x.propsReady !== void 0 && N(x.propsReady, true);
  }
  function d(x) {
    return s.reduce((a, C) => (a[C] = (I) => {
      const w = x[e.methods[C]];
      N(w, I);
    }, a), {});
  }
  function f(x) {
    return i.reduce((a, C) => (a[C] = wo(x[e.events[C]]), a), {});
  }
  const S = r.forwardRef(function(a, C) {
    const { children: I, ...w } = a, [k] = r.useState(() => Re(Ro(t), (p) => {
      u(p, w);
    })), [A] = r.useState(pn(f, k));
    Se(() => {
      for (const p of i)
        p in w && X(A[p], w[p]);
      return () => {
        Object.values(A).map(De);
      };
    }, [w, A, k]), Se(() => {
      u(k, w);
    }), r.useImperativeHandle(C, mn(d(k)));
    const c = n;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(l.Provider, { value: k, children: n === void 0 ? I : /* @__PURE__ */ jsxRuntimeExports.jsx(c, { ...lr([...o, ...r$1, ...i], w), children: I }) });
  }), h = (x) => {
    const a = r.useContext(l);
    return r.useCallback(
      (C) => {
        N(a[x], C);
      },
      [a, x]
    );
  }, m = (x) => {
    const C = r.useContext(l)[x], I = r.useCallback(
      (w) => X(C, w),
      [C]
    );
    return r.useSyncExternalStore(
      I,
      () => tt(C),
      () => tt(C)
    );
  }, T = (x) => {
    const C = r.useContext(l)[x], [I, w] = r.useState(pn(tt, C));
    return Se(
      () => X(C, (k) => {
        k !== I && w(mn(k));
      }),
      [C, I]
    ), I;
  }, R = parseInt(r.version, 10) >= 18 ? m : T;
  return {
    Component: S,
    useEmitter: (x, a) => {
      const I = r.useContext(l)[x];
      Se(() => X(I, a), [a, I]);
    },
    useEmitterValue: R,
    usePublisher: h
  };
}
const pe = r.createContext(void 0), io = r.createContext(void 0), ze = "-webkit-sticky", Hn = "sticky", Qe = ro(() => {
  if (typeof document > "u")
    return Hn;
  const t = document.createElement("div");
  return t.style.position = ze, t.style.position === ze ? ze : Hn;
});
function Fe(t) {
  return "self" in t;
}
function cr(t) {
  return "body" in t;
}
function lo(t, e, n, o = te, r$1, s) {
  const i = r.useRef(null), l = r.useRef(null), u = r.useRef(null), d = r.useCallback(
    (h) => {
      let m, T, R;
      const g = h.target;
      if (cr(g) || Fe(g)) {
        const a = Fe(g) ? g : g.defaultView;
        R = s === true ? Nt(a, a.scrollX) : a.scrollY, m = s === true ? a.document.documentElement.scrollWidth : a.document.documentElement.scrollHeight, T = s === true ? a.innerWidth : a.innerHeight;
      } else
        R = s === true ? Nt(g, g.scrollLeft) : g.scrollTop, m = s === true ? g.scrollWidth : g.scrollHeight, T = s === true ? g.offsetWidth : g.offsetHeight;
      const x = () => {
        t({
          scrollHeight: m,
          scrollTop: Math.max(R, 0),
          viewportHeight: T
        });
      };
      h.suppressFlushSync === true ? x() : Io.flushSync(x), l.current !== null && (R === l.current || R <= 0 || R === m - T) && (l.current = null, e(true), u.current && (clearTimeout(u.current), u.current = null));
    },
    [t, e, s]
  );
  r.useEffect(() => {
    const h = r$1 ?? i.current;
    return o(r$1 ?? i.current), d({ suppressFlushSync: true, target: h }), h.addEventListener("scroll", d, { passive: true }), () => {
      o(null), h.removeEventListener("scroll", d);
    };
  }, [i, d, n, o, r$1]);
  function f(h) {
    const m = i.current;
    if (!m || (s === true ? "offsetWidth" in m && m.offsetWidth === 0 : "offsetHeight" in m && m.offsetHeight === 0))
      return;
    const T = h.behavior === "smooth";
    let R, g, x;
    Fe(m) ? (g = Math.max(
      Bt(m.document.documentElement, s === true ? "width" : "height"),
      s === true ? m.document.documentElement.scrollWidth : m.document.documentElement.scrollHeight
    ), R = s === true ? m.innerWidth : m.innerHeight, x = s === true ? Nt(m, m.scrollX) : m.scrollY) : (g = m[s === true ? "scrollWidth" : "scrollHeight"], R = Bt(m, s === true ? "width" : "height"), x = s === true ? Nt(m, m.scrollLeft) : m.scrollTop);
    const a = g - R;
    if (h.top === void 0) {
      m.scrollTo(h);
      return;
    }
    const C = Math.ceil(Math.max(Math.min(a, h.top), 0));
    if (h.top = C, Jn(R, g) || C === x) {
      t({ scrollHeight: g, scrollTop: x, viewportHeight: R }), T && e(true);
      return;
    }
    T ? (l.current = C, u.current && clearTimeout(u.current), u.current = setTimeout(() => {
      u.current = null, l.current = null, e(true);
    }, 1e3)) : l.current = null, s === true && (h = {
      ...h.behavior === void 0 ? {} : { behavior: h.behavior },
      left: gn(m, C)
    }), m.scrollTo(h);
  }
  return { scrollByCallback: r.useCallback(
    (h) => {
      s === true && (h = {
        ...h.behavior === void 0 ? {} : { behavior: h.behavior },
        ...h.top === void 0 ? {} : { left: gn(i.current, h.top) }
      }), i.current.scrollBy(h);
    },
    [s]
  ), scrollerRef: i, scrollToCallback: f };
}
function tn(t) {
  return t;
}
const ur = /* @__PURE__ */ Y(() => {
  const t = y((l) => `Item ${l}`), e = y((l) => `Group ${l}`), n = y({}), o = y(tn), r2 = y("div"), s = y(te), i = (l, u = null) => gt(
    v(
      n,
      B((d) => d[l]),
      ot()
    ),
    u
  );
  return {
    components: n,
    computeItemKey: o,
    EmptyPlaceholder: i("EmptyPlaceholder"),
    FooterComponent: i("Footer"),
    GroupComponent: i("Group", "div"),
    groupContent: e,
    HeaderComponent: i("Header"),
    HeaderFooterTag: r2,
    ItemComponent: i("Item", "div"),
    itemContent: t,
    ListComponent: i("List", "div"),
    ScrollerComponent: i("Scroller", "div"),
    scrollerRef: s,
    ScrollSeekPlaceholder: i("ScrollSeekPlaceholder"),
    TopItemListComponent: i("TopItemList")
  };
});
/* @__PURE__ */ Y(
  ([t, e]) => ({ ...t, ...e }),
  st(so, ur)
);
({ position: Qe() });
const pr = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, hr = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, ke = (t) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...void 0
}), en = (t, e, n = 0) => ({
  ...ke(),
  position: e ? "relative" : "absolute",
  top: e ? -n : 0
});
({
  position: Qe()
});
function rt(t, e) {
  if (typeof t != "string")
    return { context: e };
}
function uo(t, e) {
  return { item: typeof t == "string" ? void 0 : e };
}
function nn({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return r.memo(function({ children: s, style: i, context: l, ...u }) {
    const d = n("scrollContainerState"), f = e("ScrollerComponent"), S = n("smoothScrollTargetReached"), h = e("scrollerRef"), m = e("horizontalDirection") || false, { scrollByCallback: T, scrollerRef: R, scrollToCallback: g } = lo(
      d,
      S,
      f,
      h,
      void 0,
      m
    ), x = r.useContext(pe), a = r.useRef(0), C = r.useCallback((k) => {
      a.current = k;
    }, []);
    t("totalListHeight", C);
    const I = r.useCallback(
      (k) => {
        if (!x || k.top === void 0)
          return;
        const A = Math.max(a.current, x.viewportHeight), c = Math.ceil(Math.max(Math.min(A - x.viewportHeight, k.top), 0));
        d({ scrollHeight: A, scrollTop: c, viewportHeight: x.viewportHeight }), k.behavior === "smooth" && S(true);
      },
      [x, d, S]
    );
    return t("scrollTo", x ? I : g), t("scrollBy", T), /* @__PURE__ */ jsxRuntimeExports.jsx(
      f,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": true,
        ref: R,
        style: { ...m ? hr : pr, ...i },
        tabIndex: 0,
        ...u,
        ...rt(f, l),
        children: s
      }
    );
  });
}
function on({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return r.memo(function({ children: s, style: i, context: l, ...u }) {
    const d = n("windowScrollContainerState"), f = e("ScrollerComponent"), S = n("smoothScrollTargetReached"), h = e("totalListHeight"), m = e("deviation"), T = e("customScrollParent"), R = r.useRef(null), g = e("scrollerRef"), { scrollByCallback: x, scrollerRef: a, scrollToCallback: C } = lo(
      d,
      S,
      f,
      g,
      T
    );
    return He(() => (a.current = T ?? R.current?.ownerDocument.defaultView, () => {
      a.current = null;
    }), [a, T]), t("windowScrollTo", C), t("scrollBy", x), /* @__PURE__ */ jsxRuntimeExports.jsx(
      f,
      {
        ref: R,
        "data-virtuoso-scroller": true,
        style: { position: "relative", ...i, ...h === 0 ? void 0 : { height: h + m } },
        ...u,
        ...rt(f, l),
        children: s
      }
    );
  });
}
const br = /* @__PURE__ */ Y(() => {
  const t = y((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
    "Item $",
    d
  ] })), e = y(null), n = y((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 1e3, children: [
    "Group ",
    d
  ] })), o = y(null), r2 = y(null), s = y({}), i = y(tn), l = y(te), u = (d, f = null) => gt(
    v(
      s,
      B((S) => S[d]),
      ot()
    ),
    f
  );
  return {
    components: s,
    computeItemKey: i,
    context: e,
    EmptyPlaceholder: u("EmptyPlaceholder"),
    FillerRow: u("FillerRow"),
    fixedFooterContent: r2,
    fixedHeaderContent: o,
    itemContent: t,
    groupContent: n,
    ScrollerComponent: u("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: u("ScrollSeekPlaceholder"),
    TableBodyComponent: u("TableBody", "tbody"),
    TableComponent: u("Table", "table"),
    TableFooterComponent: u("TableFoot", "tfoot"),
    TableHeadComponent: u("TableHead", "thead"),
    TableRowComponent: u("TableRow", "tr"),
    GroupComponent: u("Group", "tr")
  };
}), Rr = /* @__PURE__ */ Y(
  ([t, e]) => ({ ...t, ...e }),
  st(so, br)
), Hr = ({ height: t }) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { height: t } }) }), Er = ({ height: t }) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { border: 0, height: t, padding: 0 } }) }), kr = { overflowAnchor: "none" }, kn = { position: Qe(), zIndex: 2, overflowAnchor: "none" }, Bn = /* @__PURE__ */ r.memo(function({ showTopList: e = false }) {
  const n = D("listState"), o = D("computeItemKey"), r2 = D("firstItemIndex"), s = D("context"), i = D("isSeeking"), l = D("fixedHeaderHeight"), u = D("groupIndices").length > 0, d = D("itemContent"), f = D("groupContent"), S = D("ScrollSeekPlaceholder") ?? Hr, h = D("GroupComponent"), m = D("TableRowComponent"), T = (e ? n.topItems : []).reduce((g, x, a) => (a === 0 ? g.push(x.size) : g.push(g[a - 1] + x.size), g), []);
  return (e ? n.topItems : n.items).map((g) => {
    const x = g.originalIndex, a = o(x + r2, g.data, s), C = e ? x === 0 ? 0 : T[x - 1] : 0;
    return i ? /* @__PURE__ */ reactExports.createElement(
      S,
      {
        ...rt(S, s),
        height: g.size,
        index: g.index,
        key: a,
        type: g.type || "item"
      }
    ) : g.type === "group" ? /* @__PURE__ */ reactExports.createElement(
      h,
      {
        ...rt(h, s),
        "data-index": x,
        "data-item-index": g.index,
        "data-known-size": g.size,
        key: a,
        style: {
          ...kn,
          top: l
        }
      },
      f(g.index, s)
    ) : /* @__PURE__ */ reactExports.createElement(
      m,
      {
        ...rt(m, s),
        ...uo(m, g.data),
        "data-index": x,
        "data-item-index": g.index,
        "data-known-size": g.size,
        "data-item-group-index": g.groupIndex,
        key: a,
        style: e ? { ...kn, top: l + C } : kr
      },
      u ? d(g.index, g.groupIndex, g.data, s) : d(g.index, g.data, s)
    );
  });
}), Br = /* @__PURE__ */ r.memo(function() {
  const e = D("listState"), n = D("topItemsIndexes").length > 0, o = bt("sizeRanges"), r$1 = D("useWindowScroll"), s = D("customScrollParent"), i = bt("windowScrollContainerState"), l = bt("scrollContainerState"), u = s || r$1 ? i : l, d = D("trackItemSizes"), f = D("itemSize"), S = D("log"), { callbackRef: h, ref: m } = An(
    o,
    f,
    d,
    u,
    S,
    void 0,
    s,
    false,
    D("skipAnimationFrameInResizeObserver")
  ), [T, R] = r.useState(0);
  sn("deviation", (O) => {
    T !== O && (m.current.style.marginTop = `${O}px`, R(O));
  });
  const g = bt("deviationCommitted");
  He(() => {
    g(T);
  }, [T, g]);
  const x = D("EmptyPlaceholder"), a = D("FillerRow") ?? Er, C = D("TableBodyComponent"), I = D("paddingTopAddition"), w = D("statefulTotalCount"), k = D("context");
  if (w === 0 && x !== null && x !== void 0)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(x, { ...rt(x, k) });
  const A = (n ? e.topItems : []).reduce((O, F) => O + F.size, 0), c = e.offsetTop + I + T - A, p = e.offsetBottom, b = c > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(a, { context: k, height: c }, "padding-top") : null, L = p > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(a, { context: k, height: p }, "padding-bottom") : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(C, { "data-testid": "virtuoso-item-list", ref: h, ...rt(C, k), children: [
    b,
    n && /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { showTopList: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, {}),
    L
  ] });
}), Lr = ({ children: t }) => {
  const e = r.useContext(pe), n = bt("viewportHeight"), o = bt("fixedItemHeight"), r$1 = Ot(
    r.useMemo(() => re(n, (s) => Bt(s, "height")), [n]),
    true,
    D("skipAnimationFrameInResizeObserver")
  );
  return r.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-viewport-type": "element", ref: r$1, style: ke(), children: t });
}, Or = ({ children: t }) => {
  const e = r.useContext(pe), n = bt("windowViewportRect"), o = bt("fixedItemHeight"), r$1 = D("customScrollParent"), s = D("useWindowScroll"), i = Ue(
    n,
    r$1,
    D("skipAnimationFrameInResizeObserver")
  );
  return r.useEffect(() => {
    e && (o(e.itemHeight), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-viewport-type": "window", ref: i, style: en(false, s), children: t });
}, zr = /* @__PURE__ */ r.memo(function(e) {
  const n = D("useWindowScroll"), o = D("customScrollParent"), r$1 = bt("fixedHeaderHeight"), s = bt("fixedFooterHeight"), i = D("fixedHeaderContent"), l = D("fixedFooterContent"), u = D("context"), d = Ot(
    r.useMemo(() => re(r$1, (a) => Bt(a, "height")), [r$1]),
    true,
    D("skipAnimationFrameInResizeObserver")
  ), f = Ot(
    r.useMemo(() => re(s, (a) => Bt(a, "height")), [s]),
    true,
    D("skipAnimationFrameInResizeObserver")
  ), S = o || n ? Vr : Fr, h = o || n ? Or : Lr, m = D("TableComponent"), T = D("TableHeadComponent"), R = D("TableFooterComponent"), g = i ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    T,
    {
      ref: d,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...rt(T, u),
      children: i()
    },
    "TableHead"
  ) : null, x = l ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    R,
    {
      ref: f,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...rt(R, u),
      children: l()
    },
    "TableFoot"
  ) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(S, { ...e, ...rt(S, u), children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(m, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...rt(m, u), children: [
    g,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Br, {}, "TableBody"),
    x
  ] }) }) });
}), {
  Component: fo,
  useEmitter: sn,
  useEmitterValue: D,
  usePublisher: bt
} = /* @__PURE__ */ Je(
  Rr,
  {
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      firstItemIndex: "firstItemIndex",
      itemContent: "itemContent",
      groupContent: "groupContent",
      fixedHeaderContent: "fixedHeaderContent",
      fixedFooterContent: "fixedFooterContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      minOverscanItemCount: "minOverscanItemCount",
      totalCount: "totalCount",
      topItemCount: "topItemCount",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      groupCounts: "groupCounts",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedGroupHeight: "fixedGroupHeight",
      // Must be set above 'fixedItemHeight'
      fixedItemHeight: "fixedItemHeight",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  zr
), Fr = /* @__PURE__ */ nn({ useEmitter: sn, useEmitterValue: D, usePublisher: bt }), Vr = /* @__PURE__ */ on({ useEmitter: sn, useEmitterValue: D, usePublisher: bt }), os = fo, Ln = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, Wr = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: On, floor: ye, max: oe, min: Ve, round: zn } = Math;
function Fn(t, e, n) {
  return Array.from({ length: e - t + 1 }).map((o, r2) => ({ data: n === null ? null : n[r2 + t], index: r2 + t }));
}
function Mr(t) {
  return {
    ...Wr,
    items: t
  };
}
function xe(t, e) {
  return t !== void 0 && t.width === e.width && t.height === e.height;
}
function Pr(t, e) {
  return t !== void 0 && t.column === e.column && t.row === e.row;
}
const Gr = /* @__PURE__ */ Y(
  ([
    { increaseViewportBy: t, listBoundary: e, overscan: n, visibleRange: o },
    { footerHeight: r2, headerHeight: s, scrollBy: i, scrollContainerState: l, scrollTo: u, scrollTop: d, smoothScrollTargetReached: f, viewportHeight: S },
    h,
    m,
    { didMount: T, propsReady: R },
    { customScrollParent: g, useWindowScroll: x, windowScrollContainerState: a, windowScrollTo: C, windowViewportRect: I },
    w
  ]) => {
    const k = y(0), A = y(0), c = y(Ln), p = y({ height: 0, width: 0 }), b = y({ height: 0, width: 0 }), L = U(), O = U(), F = y(0), P = y(null), Z = y({ column: 0, row: 0 }), W = U(), ft = U(), K = y(false), lt = y(0), ct = y(true), It = y(false), Ft = y(false);
    X(
      v(
        T,
        $(lt),
        V(([H, j]) => !Ae(j))
      ),
      () => {
        N(ct, false);
      }
    ), X(
      v(
        mt(T, ct, b, p, lt, It),
        V(([H, j, q, Q, , ut]) => H && !j && q.height !== 0 && Q.height !== 0 && !ut)
      ),
      ([, , , , H]) => {
        if (H === void 0) {
          N(ct, true);
          return;
        }
        N(It, true), qe(1, () => {
          N(L, H);
        }), Et(v(d), () => {
          N(e, [0, 0]), N(ct, true);
        });
      }
    ), z(
      v(
        ft,
        V((H) => H != null && H.scrollTop > 0),
        Ct(0)
      ),
      A
    ), X(
      v(
        T,
        $(ft),
        V(([, H]) => H != null)
      ),
      ([, H]) => {
        H && (N(p, H.viewport), N(b, H.item), N(Z, H.gap), H.scrollTop > 0 && (N(K, true), Et(v(d, jt(1)), (j) => {
          N(K, false);
        }), N(u, { top: H.scrollTop })));
      }
    ), z(
      v(
        p,
        B(({ height: H }) => H)
      ),
      S
    ), z(
      v(
        mt(
          M(p, xe),
          M(b, xe),
          M(Z, (H, j) => H !== void 0 && H.column === j.column && H.row === j.row),
          M(d)
        ),
        B(([H, j, q, Q]) => ({
          gap: q,
          item: j,
          scrollTop: Q,
          viewport: H
        }))
      ),
      W
    ), z(
      v(
        mt(
          M(k),
          o,
          M(Z, Pr),
          M(b, xe),
          M(p, xe),
          M(P),
          M(A),
          M(K),
          M(ct),
          M(lt)
        ),
        V(([, , , , , , , H]) => !H),
        B(
          ([
            H,
            [j, q],
            Q,
            ut,
            it,
            et,
            dt,
            ,
            Tt,
            at
          ]) => {
            const { column: Mt, row: ee } = Q, { height: ge, width: Be } = ut, { width: ln } = it;
            if (dt === 0 && (H === 0 || ln === 0))
              return Ln;
            if (Be === 0) {
              const fn = Ye(at, H), go = fn + Math.max(dt - 1, 0);
              return Mr(Fn(fn, go, et));
            }
            const Ie = mo(ln, Be, Mt);
            let Zt, _t;
            Tt ? j === 0 && q === 0 && dt > 0 ? (Zt = 0, _t = dt - 1) : (Zt = Ie * ye((j + ee) / (ge + ee)), _t = Ie * On((q + ee) / (ge + ee)) - 1, _t = Ve(H - 1, oe(_t, Ie - 1)), Zt = Ve(_t, oe(0, Zt))) : (Zt = 0, _t = -1);
            const cn = Fn(Zt, _t, et), { bottom: un, top: an } = Vn(it, Q, ut, cn), dn = On(H / Ie), ho = dn * ge + (dn - 1) * ee - un;
            return { bottom: un, itemHeight: ge, items: cn, itemWidth: Be, offsetBottom: ho, offsetTop: an, top: an };
          }
        )
      ),
      c
    ), z(
      v(
        P,
        V((H) => H !== null),
        B((H) => H.length)
      ),
      k
    ), z(
      v(
        mt(p, b, c, Z),
        V(([H, j, { items: q }]) => q.length > 0 && j.height !== 0 && H.height !== 0),
        B(([H, j, { items: q }, Q]) => {
          const { bottom: ut, top: it } = Vn(H, Q, j, q);
          return [it, ut];
        }),
        ot(Jt)
      ),
      e
    );
    const vt = y(false);
    z(
      v(
        d,
        $(vt),
        B(([H, j]) => j || H !== 0)
      ),
      vt
    );
    const Lt = yt(
      v(
        mt(c, k),
        // A data publish rebuilds gridState before it updates totalCount. Skipping that intermediate step
        // avoids reporting the previous end index against the new data.
        V(([{ items: H }, j]) => {
          const q = tt(P);
          return H.length > 0 && (q === null || q.length === j);
        }),
        $(vt),
        V(([[H, j], q]) => {
          const ut = H.items[H.items.length - 1].index === j - 1;
          return (q || H.bottom > 0 && H.itemHeight > 0 && H.offsetBottom === 0 && H.items.length === j) && ut;
        }),
        // Keying on the data array lets replaced data with a previously reported length fire again, matching
        // the list. withLatestFrom(data) subscribes after gridState and would still hold the previous array.
        B(([[, H]]) => [H - 1, tt(P)]),
        ot(Jt),
        B(([H]) => H)
      )
    ), he = yt(
      v(
        M(c),
        V(({ items: H }) => H.length > 0 && H[0].index === 0),
        Ct(0),
        ot()
      )
    ), Yt = yt(
      v(
        M(c),
        $(K),
        V(([{ items: H }, j]) => H.length > 0 && !j),
        B(([{ items: H }]) => ({
          endIndex: H[H.length - 1].index,
          startIndex: H[0].index
        })),
        ot(Kn),
        Wt(0)
      )
    );
    z(Yt, m.scrollSeekRangeChanged), z(
      v(
        L,
        $(p, b, k, Z),
        B(([H, j, q, Q, ut]) => {
          const it = Xn(H), { align: et, behavior: dt, offset: Tt } = it;
          let at = it.index;
          at === "LAST" && (at = Q - 1), at = oe(0, Ve(Q - 1, at));
          let Mt = _e(j, ut, q, at);
          return et === "end" ? Mt = zn(Mt - j.height + q.height) : et === "center" && (Mt = zn(Mt - j.height / 2 + q.height / 2)), Tt !== void 0 && Tt !== 0 && (Mt += Tt), { behavior: dt, top: Mt };
        })
      ),
      u
    );
    const Vt = gt(
      v(
        c,
        B((H) => H.offsetBottom + H.bottom)
      ),
      0
    );
    return z(
      v(
        I,
        B((H) => ({ height: H.visibleHeight, width: H.visibleWidth }))
      ),
      p
    ), {
      customScrollParent: g,
      // input
      data: P,
      deviation: F,
      footerHeight: r2,
      gap: Z,
      headerHeight: s,
      increaseViewportBy: t,
      initialItemCount: A,
      itemDimensions: b,
      overscan: n,
      restoreStateFrom: ft,
      scrollBy: i,
      scrollContainerState: l,
      scrollHeight: O,
      scrollTo: u,
      scrollToIndex: L,
      scrollTop: d,
      smoothScrollTargetReached: f,
      totalCount: k,
      useWindowScroll: x,
      viewportDimensions: p,
      windowScrollContainerState: a,
      windowScrollTo: C,
      windowViewportRect: I,
      ...m,
      // output
      gridState: c,
      horizontalDirection: Ft,
      initialTopMostItemIndex: lt,
      totalListHeight: Vt,
      ...h,
      endReached: Lt,
      propsReady: R,
      rangeChanged: Yt,
      startReached: he,
      stateChanged: W,
      stateRestoreInProgress: K,
      ...w
    };
  },
  st(Ze, St, me, oo, At, Xe, Gt)
);
function mo(t, e, n) {
  return oe(1, ye((t + n) / (ye(e) + n)));
}
function Vn(t, e, n, o) {
  const { height: r2 } = n;
  if (r2 === void 0 || o.length === 0)
    return { bottom: 0, top: 0 };
  const s = _e(t, e, n, o[0].index);
  return { bottom: _e(t, e, n, o[o.length - 1].index) + r2, top: s };
}
function _e(t, e, n, o) {
  const r2 = mo(t.width, n.width, e.column), s = ye(o / r2), i = s * n.height + oe(0, s - 1) * e.row;
  return i > 0 ? i + e.row : i;
}
const Ar = /* @__PURE__ */ Y(() => {
  const t = y((S) => `Item ${S}`), e = y({}), n = y(null), o = y("virtuoso-grid-item"), r2 = y("virtuoso-grid-list"), s = y(tn), i = y("div"), l = y(te), u = (S, h = null) => gt(
    v(
      e,
      B((m) => m[S]),
      ot()
    ),
    h
  ), d = y(false), f = y(false);
  return z(M(f), d), {
    components: e,
    computeItemKey: s,
    context: n,
    FooterComponent: u("Footer"),
    HeaderComponent: u("Header"),
    headerFooterTag: i,
    itemClassName: o,
    ItemComponent: u("Item", "div"),
    itemContent: t,
    listClassName: r2,
    ListComponent: u("List", "div"),
    readyStateChanged: d,
    reportReadyState: f,
    ScrollerComponent: u("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: u("ScrollSeekPlaceholder", "div")
  };
}), _r = /* @__PURE__ */ Y(
  ([t, e]) => ({ ...t, ...e }),
  st(Gr, Ar)
), Nr = /* @__PURE__ */ r.memo(function() {
  const e = nt("gridState"), n = nt("listClassName"), o = nt("itemClassName"), r$1 = nt("itemContent"), s = nt("computeItemKey"), i = nt("isSeeking"), l = Rt("scrollHeight"), u = nt("ItemComponent"), d = nt("ListComponent"), f = nt("ScrollSeekPlaceholder"), S = nt("context"), h = Rt("itemDimensions"), m = Rt("gap"), T = nt("log"), R = nt("stateRestoreInProgress"), g = Rt("reportReadyState"), x = Ot(
    r.useMemo(
      () => (a) => {
        const C = a.parentElement.parentElement.scrollHeight;
        l(C);
        const I = a.firstChild;
        if (I !== null) {
          const { height: w, width: k } = I.getBoundingClientRect();
          h({ height: w, width: k });
        }
        m({
          column: Wn("column-gap", getComputedStyle(a).columnGap, T),
          row: Wn("row-gap", getComputedStyle(a).rowGap, T)
        });
      },
      [l, h, m, T]
    ),
    true,
    false
  );
  return He(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && g(true);
  }, [e]), R ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(
    d,
    {
      className: n,
      ref: x,
      ...rt(d, S),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((a) => {
        const C = s(a.index, a.data, S);
        return i ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          f,
          {
            ...rt(f, S),
            height: e.itemHeight,
            index: a.index,
            width: e.itemWidth
          },
          C
        ) : /* @__PURE__ */ reactExports.createElement(
          u,
          {
            ...rt(u, S),
            className: o,
            "data-index": a.index,
            key: C
          },
          r$1(a.index, a.data, S)
        );
      })
    }
  );
}), Dr = r.memo(function() {
  const e = nt("HeaderComponent"), n = Rt("headerHeight"), o = nt("headerFooterTag"), r$1 = Ot(
    r.useMemo(
      () => (i) => {
        n(Bt(i, "height"));
      },
      [n]
    ),
    true,
    false
  ), s = nt("context");
  return e != null ? /* @__PURE__ */ jsxRuntimeExports.jsx(o, { ref: r$1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(e, { ...rt(e, s) }) }) : null;
}), $r = r.memo(function() {
  const e = nt("FooterComponent"), n = Rt("footerHeight"), o = nt("headerFooterTag"), r$1 = Ot(
    r.useMemo(
      () => (i) => {
        n(Bt(i, "height"));
      },
      [n]
    ),
    true,
    false
  ), s = nt("context");
  return e != null ? /* @__PURE__ */ jsxRuntimeExports.jsx(o, { ref: r$1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(e, { ...rt(e, s) }) }) : null;
}), Ur = ({ children: t }) => {
  const e = r.useContext(io), n = Rt("itemDimensions"), o = Rt("viewportDimensions"), r$1 = Ot(
    r.useMemo(
      () => (s) => {
        o(s.getBoundingClientRect());
      },
      [o]
    ),
    true,
    false
  );
  return r.useEffect(() => {
    e && (o({ height: e.viewportHeight, width: e.viewportWidth }), n({ height: e.itemHeight, width: e.itemWidth }));
  }, [e, o, n]), /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: r$1, style: ke(), children: t });
}, Kr = ({ children: t }) => {
  const e = r.useContext(io), n = Rt("windowViewportRect"), o = Rt("itemDimensions"), r$1 = nt("customScrollParent"), s = nt("useWindowScroll"), i = Ue(n, r$1, false);
  return r.useEffect(() => {
    e && (o({ height: e.itemHeight, width: e.itemWidth }), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: e.viewportWidth }));
  }, [e, n, o]), /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: i, style: en(false, s), children: t });
}, jr = /* @__PURE__ */ r.memo(function({ ...e }) {
  const n = nt("useWindowScroll"), o = nt("customScrollParent"), r2 = o || n ? Zr : Yr, s = o || n ? Kr : Ur, i = nt("context");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(r2, { ...e, ...rt(r2, i), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dr, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nr, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx($r, {})
  ] }) });
}), {
  Component: qr,
  useEmitter: po,
  useEmitterValue: nt,
  usePublisher: Rt
} = /* @__PURE__ */ Je(
  _r,
  {
    optional: {
      context: "context",
      totalCount: "totalCount",
      overscan: "overscan",
      itemContent: "itemContent",
      components: "components",
      computeItemKey: "computeItemKey",
      data: "data",
      initialItemCount: "initialItemCount",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "headerFooterTag",
      listClassName: "listClassName",
      itemClassName: "itemClassName",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      restoreStateFrom: "restoreStateFrom",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      increaseViewportBy: "increaseViewportBy"
    },
    methods: {
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      scrollToIndex: "scrollToIndex"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      stateChanged: "stateChanged",
      readyStateChanged: "readyStateChanged"
    }
  },
  jr
), Yr = /* @__PURE__ */ nn({ useEmitter: po, useEmitterValue: nt, usePublisher: Rt }), Zr = /* @__PURE__ */ on({ useEmitter: po, useEmitterValue: nt, usePublisher: Rt });
function Wn(t, e, n) {
  return e !== "normal" && e?.endsWith("px") !== true && n(`${t} was not resolved to pixel value correctly`, e, ht.WARN), e === "normal" ? 0 : parseInt(e ?? "0", 10);
}
const ss = qr;
export {
  os as o,
  ss as s
};
