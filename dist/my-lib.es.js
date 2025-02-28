import * as O from "react";
import ir from "react";
var xe = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function lr() {
  if ($e) return be;
  $e = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(o, s, a) {
    var c = null;
    if (a !== void 0 && (c = "" + a), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      a = {};
      for (var b in s)
        b !== "key" && (a[b] = s[b]);
    } else a = s;
    return s = a.ref, {
      $$typeof: r,
      type: o,
      key: c,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return be.Fragment = n, be.jsx = t, be.jsxs = t, be;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function cr() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === S ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case f:
          return "Fragment";
        case F:
          return "Portal";
        case ue:
          return "Profiler";
        case N:
          return "StrictMode";
        case Z:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return (e.displayName || "Context") + ".Provider";
          case fe:
            return (e._context.displayName || "Context") + ".Consumer";
          case oe:
            var d = e.render;
            return e = e.displayName, e || (e = d.displayName || d.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case P:
            return d = e.displayName || null, d !== null ? d : r(e.type) || "Memo";
          case M:
            d = e._payload, e = e._init;
            try {
              return r(e(d));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function t(e) {
      try {
        n(e);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var u = d.error, h = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), n(e);
      }
    }
    function o() {
    }
    function s() {
      if ($ === 0) {
        Q = console.log, ae = console.info, D = console.warn, ze = console.error, Ne = console.group, Oe = console.groupCollapsed, Pe = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      $++;
    }
    function a() {
      if ($--, $ === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: W({}, e, { value: Q }),
          info: W({}, e, { value: ae }),
          warn: W({}, e, { value: D }),
          error: W({}, e, { value: ze }),
          group: W({}, e, { value: Ne }),
          groupCollapsed: W({}, e, { value: Oe }),
          groupEnd: W({}, e, { value: Pe })
        });
      }
      0 > $ && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function c(e) {
      if (we === void 0)
        try {
          throw Error();
        } catch (u) {
          var d = u.stack.trim().match(/\n( *(at )?)/);
          we = d && d[1] || "", Me = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + we + e + Me;
    }
    function b(e, d) {
      if (!e || Ee) return "";
      var u = ke.get(e);
      if (u !== void 0) return u;
      Ee = !0, u = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var h = null;
      h = E.H, E.H = null, s();
      try {
        var T = {
          DetermineComponentFrameRoot: function() {
            try {
              if (d) {
                var B = function() {
                  throw Error();
                };
                if (Object.defineProperty(B.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(B, []);
                  } catch (U) {
                    var ve = U;
                  }
                  Reflect.construct(e, [], B);
                } else {
                  try {
                    B.call();
                  } catch (U) {
                    ve = U;
                  }
                  e.call(B.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (U) {
                  ve = U;
                }
                (B = e()) && typeof B.catch == "function" && B.catch(function() {
                });
              }
            } catch (U) {
              if (U && ve && typeof U.stack == "string")
                return [U.stack, ve.stack];
            }
            return [null, null];
          }
        };
        T.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var w = Object.getOwnPropertyDescriptor(
          T.DetermineComponentFrameRoot,
          "name"
        );
        w && w.configurable && Object.defineProperty(
          T.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var g = T.DetermineComponentFrameRoot(), L = g[0], ie = g[1];
        if (L && ie) {
          var _ = L.split(`
`), ee = ie.split(`
`);
          for (g = w = 0; w < _.length && !_[w].includes(
            "DetermineComponentFrameRoot"
          ); )
            w++;
          for (; g < ee.length && !ee[g].includes(
            "DetermineComponentFrameRoot"
          ); )
            g++;
          if (w === _.length || g === ee.length)
            for (w = _.length - 1, g = ee.length - 1; 1 <= w && 0 <= g && _[w] !== ee[g]; )
              g--;
          for (; 1 <= w && 0 <= g; w--, g--)
            if (_[w] !== ee[g]) {
              if (w !== 1 || g !== 1)
                do
                  if (w--, g--, 0 > g || _[w] !== ee[g]) {
                    var pe = `
` + _[w].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", e.displayName)), typeof e == "function" && ke.set(e, pe), pe;
                  }
                while (1 <= w && 0 <= g);
              break;
            }
        }
      } finally {
        Ee = !1, E.H = h, a(), Error.prepareStackTrace = u;
      }
      return _ = (_ = e ? e.displayName || e.name : "") ? c(_) : "", typeof e == "function" && ke.set(e, _), _;
    }
    function p(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var d = e.prototype;
        return b(
          e,
          !(!d || !d.isReactComponent)
        );
      }
      if (typeof e == "string") return c(e);
      switch (e) {
        case Z:
          return c("Suspense");
        case I:
          return c("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case oe:
            return e = b(e.render, !1), e;
          case P:
            return p(e.type);
          case M:
            d = e._payload, e = e._init;
            try {
              return p(e(d));
            } catch {
            }
        }
      return "";
    }
    function v() {
      var e = E.A;
      return e === null ? null : e.getOwner();
    }
    function y(e) {
      if (K.call(e, "key")) {
        var d = Object.getOwnPropertyDescriptor(e, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function A(e, d) {
      function u() {
        Ve || (Ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: u,
        configurable: !0
      });
    }
    function j() {
      var e = r(this.type);
      return Ge[e] || (Ge[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function Y(e, d, u, h, T, w) {
      return u = w.ref, e = {
        $$typeof: G,
        type: e,
        key: d,
        props: w,
        _owner: T
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: j
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function C(e, d, u, h, T, w) {
      if (typeof e == "string" || typeof e == "function" || e === f || e === ue || e === N || e === Z || e === I || e === x || typeof e == "object" && e !== null && (e.$$typeof === M || e.$$typeof === P || e.$$typeof === X || e.$$typeof === fe || e.$$typeof === oe || e.$$typeof === he || e.getModuleId !== void 0)) {
        var g = d.children;
        if (g !== void 0)
          if (h)
            if (se(g)) {
              for (h = 0; h < g.length; h++)
                R(g[h], e);
              Object.freeze && Object.freeze(g);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else R(g, e);
      } else
        g = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? h = "null" : se(e) ? h = "array" : e !== void 0 && e.$$typeof === G ? (h = "<" + (r(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          h,
          g
        );
      if (K.call(d, "key")) {
        g = r(e);
        var L = Object.keys(d).filter(function(_) {
          return _ !== "key";
        });
        h = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", Ie[g + h] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h,
          g,
          L,
          g
        ), Ie[g + h] = !0);
      }
      if (g = null, u !== void 0 && (t(u), g = "" + u), y(d) && (t(d.key), g = "" + d.key), "key" in d) {
        u = {};
        for (var ie in d)
          ie !== "key" && (u[ie] = d[ie]);
      } else u = d;
      return g && A(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), Y(e, g, w, T, v(), u);
    }
    function R(e, d) {
      if (typeof e == "object" && e && e.$$typeof !== ar) {
        if (se(e))
          for (var u = 0; u < e.length; u++) {
            var h = e[u];
            z(h) && V(h, d);
          }
        else if (z(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? u = null : (u = ne && e[ne] || e["@@iterator"], u = typeof u == "function" ? u : null), typeof u == "function" && u !== e.entries && (u = u.call(e), u !== e))
          for (; !(e = u.next()).done; )
            z(e.value) && V(e.value, d);
      }
    }
    function z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === G;
    }
    function V(e, d) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, d = J(d), !We[d])) {
        We[d] = !0;
        var u = "";
        e && e._owner != null && e._owner !== v() && (u = null, typeof e._owner.tag == "number" ? u = r(e._owner.type) : typeof e._owner.name == "string" && (u = e._owner.name), u = " It was passed a child from " + u + ".");
        var h = E.getCurrentStack;
        E.getCurrentStack = function() {
          var T = p(e.type);
          return h && (T += h() || ""), T;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          d,
          u
        ), E.getCurrentStack = h;
      }
    }
    function J(e) {
      var d = "", u = v();
      return u && (u = r(u.type)) && (d = `

Check the render method of \`` + u + "`."), d || (e = r(e)) && (d = `

Check the top-level render call using <` + e + ">."), d;
    }
    var H = ir, G = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), ue = Symbol.for("react.profiler"), fe = Symbol.for("react.consumer"), X = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), ne = Symbol.iterator, S = Symbol.for("react.client.reference"), E = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, W = Object.assign, he = Symbol.for("react.client.reference"), se = Array.isArray, $ = 0, Q, ae, D, ze, Ne, Oe, Pe;
    o.__reactDisabledLog = !0;
    var we, Me, Ee = !1, ke = new (typeof WeakMap == "function" ? WeakMap : Map)(), ar = Symbol.for("react.client.reference"), Ve, Ge = {}, Ie = {}, We = {};
    ge.Fragment = f, ge.jsx = function(e, d, u, h, T) {
      return C(e, d, u, !1, h, T);
    }, ge.jsxs = function(e, d, u, h, T) {
      return C(e, d, u, !0, h, T);
    };
  }()), ge;
}
var Le;
function dr() {
  return Le || (Le = 1, process.env.NODE_ENV === "production" ? xe.exports = lr() : xe.exports = cr()), xe.exports;
}
var me = dr();
function Ue(r, n) {
  if (typeof r == "function")
    return r(n);
  r != null && (r.current = n);
}
function ur(...r) {
  return (n) => {
    let t = !1;
    const o = r.map((s) => {
      const a = Ue(s, n);
      return !t && typeof a == "function" && (t = !0), a;
    });
    if (t)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const a = o[s];
          typeof a == "function" ? a() : Ue(r[s], null);
        }
      };
  };
}
var Xe = O.forwardRef((r, n) => {
  const { children: t, ...o } = r, s = O.Children.toArray(t), a = s.find(pr);
  if (a) {
    const c = a.props.children, b = s.map((p) => p === a ? O.Children.count(c) > 1 ? O.Children.only(null) : O.isValidElement(c) ? c.props.children : null : p);
    return /* @__PURE__ */ me.jsx(Re, { ...o, ref: n, children: O.isValidElement(c) ? O.cloneElement(c, void 0, b) : null });
  }
  return /* @__PURE__ */ me.jsx(Re, { ...o, ref: n, children: t });
});
Xe.displayName = "Slot";
var Re = O.forwardRef((r, n) => {
  const { children: t, ...o } = r;
  if (O.isValidElement(t)) {
    const s = gr(t), a = br(o, t.props);
    return t.type !== O.Fragment && (a.ref = n ? ur(n, s) : s), O.cloneElement(t, a);
  }
  return O.Children.count(t) > 1 ? O.Children.only(null) : null;
});
Re.displayName = "SlotClone";
var fr = ({ children: r }) => /* @__PURE__ */ me.jsx(me.Fragment, { children: r });
function pr(r) {
  return O.isValidElement(r) && r.type === fr;
}
function br(r, n) {
  const t = { ...n };
  for (const o in n) {
    const s = r[o], a = n[o];
    /^on[A-Z]/.test(o) ? s && a ? t[o] = (...b) => {
      a(...b), s(...b);
    } : s && (t[o] = s) : o === "style" ? t[o] = { ...s, ...a } : o === "className" && (t[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...r, ...t };
}
function gr(r) {
  var o, s;
  let n = (o = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? r.ref : (n = (s = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : s.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? r.props.ref : r.props.ref || r.ref);
}
function Ze(r) {
  var n, t, o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var s = r.length;
    for (n = 0; n < s; n++) r[n] && (t = Ze(r[n])) && (o && (o += " "), o += t);
  } else for (t in r) r[t] && (o && (o += " "), o += t);
  return o;
}
function Ke() {
  for (var r, n, t = 0, o = "", s = arguments.length; t < s; t++) (r = arguments[t]) && (n = Ze(r)) && (o && (o += " "), o += n);
  return o;
}
const Fe = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Be = Ke, mr = (r, n) => (t) => {
  var o;
  if ((n == null ? void 0 : n.variants) == null) return Be(r, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: s, defaultVariants: a } = n, c = Object.keys(s).map((v) => {
    const y = t == null ? void 0 : t[v], A = a == null ? void 0 : a[v];
    if (y === null) return null;
    const j = Fe(y) || Fe(A);
    return s[v][j];
  }), b = t && Object.entries(t).reduce((v, y) => {
    let [A, j] = y;
    return j === void 0 || (v[A] = j), v;
  }, {}), p = n == null || (o = n.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((v, y) => {
    let { class: A, className: j, ...Y } = y;
    return Object.entries(Y).every((C) => {
      let [R, z] = C;
      return Array.isArray(z) ? z.includes({
        ...a,
        ...b
      }[R]) : {
        ...a,
        ...b
      }[R] === z;
    }) ? [
      ...v,
      A,
      j
    ] : v;
  }, []);
  return Be(r, c, p, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, _e = "-", hr = (r) => {
  const n = xr(r), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: o
  } = r;
  return {
    getClassGroupId: (c) => {
      const b = c.split(_e);
      return b[0] === "" && b.length !== 1 && b.shift(), Qe(b, n) || vr(c);
    },
    getConflictingClassGroupIds: (c, b) => {
      const p = t[c] || [];
      return b && o[c] ? [...p, ...o[c]] : p;
    }
  };
}, Qe = (r, n) => {
  var c;
  if (r.length === 0)
    return n.classGroupId;
  const t = r[0], o = n.nextPart.get(t), s = o ? Qe(r.slice(1), o) : void 0;
  if (s)
    return s;
  if (n.validators.length === 0)
    return;
  const a = r.join(_e);
  return (c = n.validators.find(({
    validator: b
  }) => b(a))) == null ? void 0 : c.classGroupId;
}, qe = /^\[(.+)\]$/, vr = (r) => {
  if (qe.test(r)) {
    const n = qe.exec(r)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, xr = (r) => {
  const {
    theme: n,
    classGroups: t
  } = r, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in t)
    Se(t[s], o, s, n);
  return o;
}, Se = (r, n, t, o) => {
  r.forEach((s) => {
    if (typeof s == "string") {
      const a = s === "" ? n : Je(n, s);
      a.classGroupId = t;
      return;
    }
    if (typeof s == "function") {
      if (yr(s)) {
        Se(s(o), n, t, o);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: t
      });
      return;
    }
    Object.entries(s).forEach(([a, c]) => {
      Se(c, Je(n, a), t, o);
    });
  });
}, Je = (r, n) => {
  let t = r;
  return n.split(_e).forEach((o) => {
    t.nextPart.has(o) || t.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(o);
  }), t;
}, yr = (r) => r.isThemeGetter, wr = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (a, c) => {
    t.set(a, c), n++, n > r && (n = 0, o = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let c = t.get(a);
      if (c !== void 0)
        return c;
      if ((c = o.get(a)) !== void 0)
        return s(a, c), c;
    },
    set(a, c) {
      t.has(a) ? t.set(a, c) : s(a, c);
    }
  };
}, Ae = "!", Te = ":", Er = Te.length, kr = (r) => {
  const {
    prefix: n,
    experimentalParseClassName: t
  } = r;
  let o = (s) => {
    const a = [];
    let c = 0, b = 0, p = 0, v;
    for (let C = 0; C < s.length; C++) {
      let R = s[C];
      if (c === 0 && b === 0) {
        if (R === Te) {
          a.push(s.slice(p, C)), p = C + Er;
          continue;
        }
        if (R === "/") {
          v = C;
          continue;
        }
      }
      R === "[" ? c++ : R === "]" ? c-- : R === "(" ? b++ : R === ")" && b--;
    }
    const y = a.length === 0 ? s : s.substring(p), A = Cr(y), j = A !== y, Y = v && v > p ? v - p : void 0;
    return {
      modifiers: a,
      hasImportantModifier: j,
      baseClassName: A,
      maybePostfixModifierPosition: Y
    };
  };
  if (n) {
    const s = n + Te, a = o;
    o = (c) => c.startsWith(s) ? a(c.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: c,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const s = o;
    o = (a) => t({
      className: a,
      parseClassName: s
    });
  }
  return o;
}, Cr = (r) => r.endsWith(Ae) ? r.substring(0, r.length - 1) : r.startsWith(Ae) ? r.substring(1) : r, Rr = (r) => {
  const n = Object.fromEntries(r.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const s = [];
    let a = [];
    return o.forEach((c) => {
      c[0] === "[" || n[c] ? (s.push(...a.sort(), c), a = []) : a.push(c);
    }), s.push(...a.sort()), s;
  };
}, Sr = (r) => ({
  cache: wr(r.cacheSize),
  parseClassName: kr(r),
  sortModifiers: Rr(r),
  ...hr(r)
}), Ar = /\s+/, Tr = (r, n) => {
  const {
    parseClassName: t,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = n, c = [], b = r.trim().split(Ar);
  let p = "";
  for (let v = b.length - 1; v >= 0; v -= 1) {
    const y = b[v], {
      isExternal: A,
      modifiers: j,
      hasImportantModifier: Y,
      baseClassName: C,
      maybePostfixModifierPosition: R
    } = t(y);
    if (A) {
      p = y + (p.length > 0 ? " " + p : p);
      continue;
    }
    let z = !!R, V = o(z ? C.substring(0, R) : C);
    if (!V) {
      if (!z) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (V = o(C), !V) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      z = !1;
    }
    const J = a(j).join(":"), H = Y ? J + Ae : J, G = H + V;
    if (c.includes(G))
      continue;
    c.push(G);
    const F = s(V, z);
    for (let f = 0; f < F.length; ++f) {
      const N = F[f];
      c.push(H + N);
    }
    p = y + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function _r() {
  let r = 0, n, t, o = "";
  for (; r < arguments.length; )
    (n = arguments[r++]) && (t = De(n)) && (o && (o += " "), o += t);
  return o;
}
const De = (r) => {
  if (typeof r == "string")
    return r;
  let n, t = "";
  for (let o = 0; o < r.length; o++)
    r[o] && (n = De(r[o])) && (t && (t += " "), t += n);
  return t;
};
function jr(r, ...n) {
  let t, o, s, a = c;
  function c(p) {
    const v = n.reduce((y, A) => A(y), r());
    return t = Sr(v), o = t.cache.get, s = t.cache.set, a = b, b(p);
  }
  function b(p) {
    const v = o(p);
    if (v)
      return v;
    const y = Tr(p, t);
    return s(p, y), y;
  }
  return function() {
    return a(_r.apply(null, arguments));
  };
}
const k = (r) => {
  const n = (t) => t[r] || [];
  return n.isThemeGetter = !0, n;
}, er = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, rr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, zr = /^\d+\/\d+$/, Nr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Or = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Mr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Vr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, le = (r) => zr.test(r), m = (r) => !!r && !Number.isNaN(Number(r)), re = (r) => !!r && Number.isInteger(Number(r)), He = (r) => r.endsWith("%") && m(r.slice(0, -1)), q = (r) => Nr.test(r), Gr = () => !0, Ir = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Or.test(r) && !Pr.test(r)
), je = () => !1, Wr = (r) => Mr.test(r), $r = (r) => Vr.test(r), Yr = (r) => !i(r) && !l(r), Lr = (r) => ce(r, nr, je), i = (r) => er.test(r), te = (r) => ce(r, sr, Ir), Ce = (r) => ce(r, Dr, m), Ur = (r) => ce(r, tr, je), Fr = (r) => ce(r, or, $r), Br = (r) => ce(r, je, Wr), l = (r) => rr.test(r), ye = (r) => de(r, sr), qr = (r) => de(r, et), Jr = (r) => de(r, tr), Hr = (r) => de(r, nr), Xr = (r) => de(r, or), Zr = (r) => de(r, rt, !0), ce = (r, n, t) => {
  const o = er.exec(r);
  return o ? o[1] ? n(o[1]) : t(o[2]) : !1;
}, de = (r, n, t = !1) => {
  const o = rr.exec(r);
  return o ? o[1] ? n(o[1]) : t : !1;
}, tr = (r) => r === "position", Kr = /* @__PURE__ */ new Set(["image", "url"]), or = (r) => Kr.has(r), Qr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), nr = (r) => Qr.has(r), sr = (r) => r === "length", Dr = (r) => r === "number", et = (r) => r === "family-name", rt = (r) => r === "shadow", tt = () => {
  const r = k("color"), n = k("font"), t = k("text"), o = k("font-weight"), s = k("tracking"), a = k("leading"), c = k("breakpoint"), b = k("container"), p = k("spacing"), v = k("radius"), y = k("shadow"), A = k("inset-shadow"), j = k("drop-shadow"), Y = k("blur"), C = k("perspective"), R = k("aspect"), z = k("ease"), V = k("animate"), J = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", "contain", "none"], f = () => [l, i, p], N = () => [le, "full", "auto", ...f()], ue = () => [re, "none", "subgrid", l, i], fe = () => ["auto", {
    span: ["full", re, l, i]
  }, l, i], X = () => [re, "auto", l, i], oe = () => ["auto", "min", "max", "fr", l, i], Z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], I = () => ["start", "end", "center", "stretch"], P = () => ["auto", ...f()], M = () => [le, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...f()], x = () => [r, l, i], ne = () => [He, te], S = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    v,
    l,
    i
  ], E = () => ["", m, ye, te], K = () => ["solid", "dashed", "dotted", "double"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], he = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    Y,
    l,
    i
  ], se = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l, i], $ = () => ["none", m, l, i], Q = () => ["none", m, l, i], ae = () => [m, l, i], D = () => [le, "full", ...f()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [q],
      breakpoint: [q],
      color: [Gr],
      container: [q],
      "drop-shadow": [q],
      ease: ["in", "out", "in-out"],
      font: [Yr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [q],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [q],
      shadow: [q],
      spacing: ["px", m],
      text: [q],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", le, i, l, R]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [m, i, l, b]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": J()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": J()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...H(), i, l]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: G()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": G()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": G()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: N()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": N()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": N()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: N()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: N()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: N()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: N()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: N()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: N()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [re, "auto", l, i]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [le, "full", "auto", b, ...f()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [m, le, "auto", "initial", "none", i]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", m, l, i]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", m, l, i]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [re, "first", "last", "none", l, i]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ue()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: fe()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": X()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": X()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ue()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: fe()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": X()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": X()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": oe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": oe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: f()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": f()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": f()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Z(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...I(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...I()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Z()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...I(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...I(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Z()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...I(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...I()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: f()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: f()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: f()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: f()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: f()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: f()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: f()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: f()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: f()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: P()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: P()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: P()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: P()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: P()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: P()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: P()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: P()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: P()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": f()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": f()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: M()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [b, "screen", ...M()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          b,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...M()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          b,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [c]
          },
          ...M()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...M()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...M()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...M()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, ye, te]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, l, Ce]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", He, i]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qr, i, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, l, i]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [m, "none", l, Ce]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...f()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", l, i]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", l, i]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: x()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: x()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [m, "from-font", "auto", l, te]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: x()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [m, "auto", l, i]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: f()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l, i]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", l, i]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...H(), Jr, Ur]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Hr, Lr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, re, l, i],
          radial: ["", l, i],
          conic: [re, l, i]
        }, Xr, Fr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: x()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ne()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ne()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ne()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: x()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: x()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: x()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: S()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": S()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": S()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": S()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": S()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": S()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": S()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": S()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": S()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": S()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": S()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": S()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": S()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": S()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": S()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: E()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": E()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": E()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": E()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": E()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": E()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": E()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": E()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": E()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": E()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": E()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...K(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...K(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: x()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": x()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": x()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": x()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": x()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": x()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": x()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": x()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": x()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: x()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [m, l, i]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", m, ye, te]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          y,
          Zr,
          Br
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: x()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", l, i, A]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": x()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: E()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: x()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [m, te]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": x()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": E()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": x()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [m, l, i]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...W(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          l,
          i
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: he()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [m, l, i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [m, l, i]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          j,
          l,
          i
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", m, l, i]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m, l, i]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", m, l, i]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [m, l, i]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", m, l, i]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          l,
          i
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": he()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [m, l, i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [m, l, i]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", m, l, i]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m, l, i]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", m, l, i]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [m, l, i]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [m, l, i]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", m, l, i]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": f()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": f()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": f()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", l, i]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [m, "initial", l, i]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", z, l, i]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [m, l, i]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", V, l, i]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [C, l, i]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": se()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: $()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": $()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": $()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": $()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Q()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Q()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Q()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Q()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ae()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ae()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ae()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [l, i, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: se()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: D()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": D()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": D()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": D()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: x()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: x()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l, i]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": f()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": f()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": f()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": f()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": f()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": f()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": f()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": f()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": f()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": f()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": f()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": f()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": f()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": f()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": f()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": f()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": f()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": f()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", l, i]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...x()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [m, ye, te, Ce]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...x()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, ot = /* @__PURE__ */ jr(tt);
function nt(...r) {
  return ot(Ke(r));
}
const st = mr(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function it({
  className: r,
  variant: n,
  size: t,
  asChild: o = !1,
  ...s
}) {
  const a = o ? Xe : "button";
  return /* @__PURE__ */ me.jsx(
    a,
    {
      "data-slot": "button",
      className: nt(st({ variant: n, size: t, className: r })),
      ...s
    }
  );
}
export {
  it as Button,
  st as buttonVariants
};
