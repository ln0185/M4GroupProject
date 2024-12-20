var mf = (e) => {
  throw TypeError(e);
};
var hl = (e, t, i) => t.has(e) || mf("Cannot " + i);
var S = (e, t, i) => (
    hl(e, t, "read from private field"), i ? i.call(e) : t.get(e)
  ),
  G = (e, t, i) =>
    t.has(e)
      ? mf("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, i),
  W = (e, t, i, o) => (
    hl(e, t, "write to private field"), o ? o.call(e, i) : t.set(e, i), i
  ),
  ie = (e, t, i) => (hl(e, t, "access private method"), i);
var ss = (e, t, i, o) => ({
  set _(s) {
    W(e, t, s, i);
  },
  get _() {
    return S(e, t, o);
  },
});
function Tv(e, t) {
  for (var i = 0; i < t.length; i++) {
    const o = t[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in e)) {
          const l = Object.getOwnPropertyDescriptor(o, s);
          l &&
            Object.defineProperty(
              e,
              s,
              l.get ? l : { enumerable: !0, get: () => o[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const l of s)
      if (l.type === "childList")
        for (const c of l.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const l = {};
    return (
      s.integrity && (l.integrity = s.integrity),
      s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const l = i(s);
    fetch(s.href, l);
  }
})();
var Mv =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function hp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var fp = { exports: {} },
  ha = {},
  dp = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ro = Symbol.for("react.element"),
  Ov = Symbol.for("react.portal"),
  zv = Symbol.for("react.fragment"),
  Nv = Symbol.for("react.strict_mode"),
  Rv = Symbol.for("react.profiler"),
  Iv = Symbol.for("react.provider"),
  jv = Symbol.for("react.context"),
  Av = Symbol.for("react.forward_ref"),
  Dv = Symbol.for("react.suspense"),
  Bv = Symbol.for("react.memo"),
  bv = Symbol.for("react.lazy"),
  gf = Symbol.iterator;
function Fv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gf && e[gf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  mp = Object.assign,
  gp = {};
function Cr(e, t, i) {
  (this.props = e),
    (this.context = t),
    (this.refs = gp),
    (this.updater = i || pp);
}
Cr.prototype.isReactComponent = {};
Cr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vp() {}
vp.prototype = Cr.prototype;
function ec(e, t, i) {
  (this.props = e),
    (this.context = t),
    (this.refs = gp),
    (this.updater = i || pp);
}
var tc = (ec.prototype = new vp());
tc.constructor = ec;
mp(tc, Cr.prototype);
tc.isPureReactComponent = !0;
var vf = Array.isArray,
  _p = Object.prototype.hasOwnProperty,
  nc = { current: null },
  yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function wp(e, t, i) {
  var o,
    s = {},
    l = null,
    c = null;
  if (t != null)
    for (o in (t.ref !== void 0 && (c = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      _p.call(t, o) && !yp.hasOwnProperty(o) && (s[o] = t[o]);
  var d = arguments.length - 2;
  if (d === 1) s.children = i;
  else if (1 < d) {
    for (var f = Array(d), m = 0; m < d; m++) f[m] = arguments[m + 2];
    s.children = f;
  }
  if (e && e.defaultProps)
    for (o in ((d = e.defaultProps), d)) s[o] === void 0 && (s[o] = d[o]);
  return {
    $$typeof: Ro,
    type: e,
    key: l,
    ref: c,
    props: s,
    _owner: nc.current,
  };
}
function Zv(e, t) {
  return {
    $$typeof: Ro,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ic(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ro;
}
function Hv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (i) {
      return t[i];
    })
  );
}
var _f = /\/+/g;
function fl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Hv("" + e.key)
    : t.toString(36);
}
function ks(e, t, i, o, s) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var c = !1;
  if (e === null) c = !0;
  else
    switch (l) {
      case "string":
      case "number":
        c = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ro:
          case Ov:
            c = !0;
        }
    }
  if (c)
    return (
      (c = e),
      (s = s(c)),
      (e = o === "" ? "." + fl(c, 0) : o),
      vf(s)
        ? ((i = ""),
          e != null && (i = e.replace(_f, "$&/") + "/"),
          ks(s, t, i, "", function (m) {
            return m;
          }))
        : s != null &&
          (ic(s) &&
            (s = Zv(
              s,
              i +
                (!s.key || (c && c.key === s.key)
                  ? ""
                  : ("" + s.key).replace(_f, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((c = 0), (o = o === "" ? "." : o + ":"), vf(e)))
    for (var d = 0; d < e.length; d++) {
      l = e[d];
      var f = o + fl(l, d);
      c += ks(l, t, i, f, s);
    }
  else if (((f = Fv(e)), typeof f == "function"))
    for (e = f.call(e), d = 0; !(l = e.next()).done; )
      (l = l.value), (f = o + fl(l, d++)), (c += ks(l, t, i, f, s));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return c;
}
function as(e, t, i) {
  if (e == null) return e;
  var o = [],
    s = 0;
  return (
    ks(e, o, "", "", function (l) {
      return t.call(i, l, s++);
    }),
    o
  );
}
function Uv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (i) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = i));
        },
        function (i) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = i));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var et = { current: null },
  Ls = { transition: null },
  Wv = {
    ReactCurrentDispatcher: et,
    ReactCurrentBatchConfig: Ls,
    ReactCurrentOwner: nc,
  };
function xp() {
  throw Error("act(...) is not supported in production builds of React.");
}
ne.Children = {
  map: as,
  forEach: function (e, t, i) {
    as(
      e,
      function () {
        t.apply(this, arguments);
      },
      i
    );
  },
  count: function (e) {
    var t = 0;
    return (
      as(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      as(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ic(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ne.Component = Cr;
ne.Fragment = zv;
ne.Profiler = Rv;
ne.PureComponent = ec;
ne.StrictMode = Nv;
ne.Suspense = Dv;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wv;
ne.act = xp;
ne.cloneElement = function (e, t, i) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var o = mp({}, e.props),
    s = e.key,
    l = e.ref,
    c = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (c = nc.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var d = e.type.defaultProps;
    for (f in t)
      _p.call(t, f) &&
        !yp.hasOwnProperty(f) &&
        (o[f] = t[f] === void 0 && d !== void 0 ? d[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) o.children = i;
  else if (1 < f) {
    d = Array(f);
    for (var m = 0; m < f; m++) d[m] = arguments[m + 2];
    o.children = d;
  }
  return { $$typeof: Ro, type: e.type, key: s, ref: l, props: o, _owner: c };
};
ne.createContext = function (e) {
  return (
    (e = {
      $$typeof: jv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Iv, _context: e }),
    (e.Consumer = e)
  );
};
ne.createElement = wp;
ne.createFactory = function (e) {
  var t = wp.bind(null, e);
  return (t.type = e), t;
};
ne.createRef = function () {
  return { current: null };
};
ne.forwardRef = function (e) {
  return { $$typeof: Av, render: e };
};
ne.isValidElement = ic;
ne.lazy = function (e) {
  return { $$typeof: bv, _payload: { _status: -1, _result: e }, _init: Uv };
};
ne.memo = function (e, t) {
  return { $$typeof: Bv, type: e, compare: t === void 0 ? null : t };
};
ne.startTransition = function (e) {
  var t = Ls.transition;
  Ls.transition = {};
  try {
    e();
  } finally {
    Ls.transition = t;
  }
};
ne.unstable_act = xp;
ne.useCallback = function (e, t) {
  return et.current.useCallback(e, t);
};
ne.useContext = function (e) {
  return et.current.useContext(e);
};
ne.useDebugValue = function () {};
ne.useDeferredValue = function (e) {
  return et.current.useDeferredValue(e);
};
ne.useEffect = function (e, t) {
  return et.current.useEffect(e, t);
};
ne.useId = function () {
  return et.current.useId();
};
ne.useImperativeHandle = function (e, t, i) {
  return et.current.useImperativeHandle(e, t, i);
};
ne.useInsertionEffect = function (e, t) {
  return et.current.useInsertionEffect(e, t);
};
ne.useLayoutEffect = function (e, t) {
  return et.current.useLayoutEffect(e, t);
};
ne.useMemo = function (e, t) {
  return et.current.useMemo(e, t);
};
ne.useReducer = function (e, t, i) {
  return et.current.useReducer(e, t, i);
};
ne.useRef = function (e) {
  return et.current.useRef(e);
};
ne.useState = function (e) {
  return et.current.useState(e);
};
ne.useSyncExternalStore = function (e, t, i) {
  return et.current.useSyncExternalStore(e, t, i);
};
ne.useTransition = function () {
  return et.current.useTransition();
};
ne.version = "18.3.1";
dp.exports = ne;
var z = dp.exports;
const Ds = hp(z),
  Vv = Tv({ __proto__: null, default: Ds }, [z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qv = z,
  $v = Symbol.for("react.element"),
  Gv = Symbol.for("react.fragment"),
  Kv = Object.prototype.hasOwnProperty,
  qv = Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Yv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cp(e, t, i) {
  var o,
    s = {},
    l = null,
    c = null;
  i !== void 0 && (l = "" + i),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (c = t.ref);
  for (o in t) Kv.call(t, o) && !Yv.hasOwnProperty(o) && (s[o] = t[o]);
  if (e && e.defaultProps)
    for (o in ((t = e.defaultProps), t)) s[o] === void 0 && (s[o] = t[o]);
  return {
    $$typeof: $v,
    type: e,
    key: l,
    ref: c,
    props: s,
    _owner: qv.current,
  };
}
ha.Fragment = Gv;
ha.jsx = Cp;
ha.jsxs = Cp;
fp.exports = ha;
var O = fp.exports,
  Sp = { exports: {} },
  mt = {},
  Pp = { exports: {} },
  kp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, Y) {
    var B = I.length;
    I.push(Y);
    e: for (; 0 < B; ) {
      var q = (B - 1) >>> 1,
        ae = I[q];
      if (0 < s(ae, Y)) (I[q] = Y), (I[B] = ae), (B = q);
      else break e;
    }
  }
  function i(I) {
    return I.length === 0 ? null : I[0];
  }
  function o(I) {
    if (I.length === 0) return null;
    var Y = I[0],
      B = I.pop();
    if (B !== Y) {
      I[0] = B;
      e: for (var q = 0, ae = I.length, Ne = ae >>> 1; q < Ne; ) {
        var de = 2 * (q + 1) - 1,
          ue = I[de],
          X = de + 1,
          nt = I[X];
        if (0 > s(ue, B))
          X < ae && 0 > s(nt, ue)
            ? ((I[q] = nt), (I[X] = B), (q = X))
            : ((I[q] = ue), (I[de] = B), (q = de));
        else if (X < ae && 0 > s(nt, B)) (I[q] = nt), (I[X] = B), (q = X);
        else break e;
      }
    }
    return Y;
  }
  function s(I, Y) {
    var B = I.sortIndex - Y.sortIndex;
    return B !== 0 ? B : I.id - Y.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var c = Date,
      d = c.now();
    e.unstable_now = function () {
      return c.now() - d;
    };
  }
  var f = [],
    m = [],
    y = 1,
    g = null,
    x = 3,
    k = !1,
    M = !1,
    P = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    C = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(I) {
    for (var Y = i(m); Y !== null; ) {
      if (Y.callback === null) o(m);
      else if (Y.startTime <= I)
        o(m), (Y.sortIndex = Y.expirationTime), t(f, Y);
      else break;
      Y = i(m);
    }
  }
  function N(I) {
    if (((P = !1), w(I), !M))
      if (i(f) !== null) (M = !0), Be(D);
      else {
        var Y = i(m);
        Y !== null && Jt(N, Y.startTime - I);
      }
  }
  function D(I, Y) {
    (M = !1), P && ((P = !1), C(b), (b = -1)), (k = !0);
    var B = x;
    try {
      for (
        w(Y), g = i(f);
        g !== null && (!(g.expirationTime > Y) || (I && !se()));

      ) {
        var q = g.callback;
        if (typeof q == "function") {
          (g.callback = null), (x = g.priorityLevel);
          var ae = q(g.expirationTime <= Y);
          (Y = e.unstable_now()),
            typeof ae == "function" ? (g.callback = ae) : g === i(f) && o(f),
            w(Y);
        } else o(f);
        g = i(f);
      }
      if (g !== null) var Ne = !0;
      else {
        var de = i(m);
        de !== null && Jt(N, de.startTime - Y), (Ne = !1);
      }
      return Ne;
    } finally {
      (g = null), (x = B), (k = !1);
    }
  }
  var Z = !1,
    F = null,
    b = -1,
    Q = 5,
    K = -1;
  function se() {
    return !(e.unstable_now() - K < Q);
  }
  function ye() {
    if (F !== null) {
      var I = e.unstable_now();
      K = I;
      var Y = !0;
      try {
        Y = F(!0, I);
      } finally {
        Y ? qn() : ((Z = !1), (F = null));
      }
    } else Z = !1;
  }
  var qn;
  if (typeof v == "function")
    qn = function () {
      v(ye);
    };
  else if (typeof MessageChannel < "u") {
    var vt = new MessageChannel(),
      Oa = vt.port2;
    (vt.port1.onmessage = ye),
      (qn = function () {
        Oa.postMessage(null);
      });
  } else
    qn = function () {
      R(ye, 0);
    };
  function Be(I) {
    (F = I), Z || ((Z = !0), qn());
  }
  function Jt(I, Y) {
    b = R(function () {
      I(e.unstable_now());
    }, Y);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      M || k || ((M = !0), Be(D));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return x;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return i(f);
    }),
    (e.unstable_next = function (I) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = x;
      }
      var B = x;
      x = Y;
      try {
        return I();
      } finally {
        x = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, Y) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var B = x;
      x = I;
      try {
        return Y();
      } finally {
        x = B;
      }
    }),
    (e.unstable_scheduleCallback = function (I, Y, B) {
      var q = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? q + B : q))
          : (B = q),
        I)
      ) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return (
        (ae = B + ae),
        (I = {
          id: y++,
          callback: Y,
          priorityLevel: I,
          startTime: B,
          expirationTime: ae,
          sortIndex: -1,
        }),
        B > q
          ? ((I.sortIndex = B),
            t(m, I),
            i(f) === null &&
              I === i(m) &&
              (P ? (C(b), (b = -1)) : (P = !0), Jt(N, B - q)))
          : ((I.sortIndex = ae), t(f, I), M || k || ((M = !0), Be(D))),
        I
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (I) {
      var Y = x;
      return function () {
        var B = x;
        x = Y;
        try {
          return I.apply(this, arguments);
        } finally {
          x = B;
        }
      };
    });
})(kp);
Pp.exports = kp;
var Xv = Pp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jv = z,
  pt = Xv;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1;
    i < arguments.length;
    i++
  )
    t += "&args[]=" + encodeURIComponent(arguments[i]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lp = new Set(),
  ao = {};
function Si(e, t) {
  mr(e, t), mr(e + "Capture", t);
}
function mr(e, t) {
  for (ao[e] = t, e = 0; e < t.length; e++) Lp.add(t[e]);
}
var hn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ul = Object.prototype.hasOwnProperty,
  e2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yf = {},
  wf = {};
function t2(e) {
  return Ul.call(wf, e)
    ? !0
    : Ul.call(yf, e)
    ? !1
    : e2.test(e)
    ? (wf[e] = !0)
    : ((yf[e] = !0), !1);
}
function n2(e, t, i, o) {
  if (i !== null && i.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return o
        ? !1
        : i !== null
        ? !i.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function i2(e, t, i, o) {
  if (t === null || typeof t > "u" || n2(e, t, i, o)) return !0;
  if (o) return !1;
  if (i !== null)
    switch (i.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function tt(e, t, i, o, s, l, c) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = o),
    (this.attributeNamespace = s),
    (this.mustUseProperty = i),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = c);
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new tt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ue[t] = new tt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ue[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ue[e] = new tt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ue[e] = new tt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ue[e] = new tt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ue[e] = new tt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ue[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var rc = /[\-:]([a-z])/g;
function oc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(rc, oc);
    Ue[t] = new tt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(rc, oc);
    Ue[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(rc, oc);
  Ue[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ue[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new tt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ue[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function sc(e, t, i, o) {
  var s = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (s !== null
    ? s.type !== 0
    : o ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (i2(t, i, s, o) && (i = null),
    o || s === null
      ? t2(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i))
      : s.mustUseProperty
      ? (e[s.propertyName] = i === null ? (s.type === 3 ? !1 : "") : i)
      : ((t = s.attributeName),
        (o = s.attributeNamespace),
        i === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (i = s === 3 || (s === 4 && i === !0) ? "" : "" + i),
            o ? e.setAttributeNS(o, t, i) : e.setAttribute(t, i))));
}
var mn = Jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ls = Symbol.for("react.element"),
  Di = Symbol.for("react.portal"),
  Bi = Symbol.for("react.fragment"),
  ac = Symbol.for("react.strict_mode"),
  Wl = Symbol.for("react.profiler"),
  Ep = Symbol.for("react.provider"),
  Tp = Symbol.for("react.context"),
  lc = Symbol.for("react.forward_ref"),
  Vl = Symbol.for("react.suspense"),
  Ql = Symbol.for("react.suspense_list"),
  uc = Symbol.for("react.memo"),
  xn = Symbol.for("react.lazy"),
  Mp = Symbol.for("react.offscreen"),
  xf = Symbol.iterator;
function br(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xf && e[xf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Se = Object.assign,
  dl;
function $r(e) {
  if (dl === void 0)
    try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      dl = (t && t[1]) || "";
    }
  return (
    `
` +
    dl +
    e
  );
}
var pl = !1;
function ml(e, t) {
  if (!e || pl) return "";
  pl = !0;
  var i = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (m) {
          var o = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          o = m;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (m) {
        o = m;
      }
      e();
    }
  } catch (m) {
    if (m && o && typeof m.stack == "string") {
      for (
        var s = m.stack.split(`
`),
          l = o.stack.split(`
`),
          c = s.length - 1,
          d = l.length - 1;
        1 <= c && 0 <= d && s[c] !== l[d];

      )
        d--;
      for (; 1 <= c && 0 <= d; c--, d--)
        if (s[c] !== l[d]) {
          if (c !== 1 || d !== 1)
            do
              if ((c--, d--, 0 > d || s[c] !== l[d])) {
                var f =
                  `
` + s[c].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    f.includes("<anonymous>") &&
                    (f = f.replace("<anonymous>", e.displayName)),
                  f
                );
              }
            while (1 <= c && 0 <= d);
          break;
        }
    }
  } finally {
    (pl = !1), (Error.prepareStackTrace = i);
  }
  return (e = e ? e.displayName || e.name : "") ? $r(e) : "";
}
function r2(e) {
  switch (e.tag) {
    case 5:
      return $r(e.type);
    case 16:
      return $r("Lazy");
    case 13:
      return $r("Suspense");
    case 19:
      return $r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ml(e.type, !1)), e;
    case 11:
      return (e = ml(e.type.render, !1)), e;
    case 1:
      return (e = ml(e.type, !0)), e;
    default:
      return "";
  }
}
function $l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bi:
      return "Fragment";
    case Di:
      return "Portal";
    case Wl:
      return "Profiler";
    case ac:
      return "StrictMode";
    case Vl:
      return "Suspense";
    case Ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Tp:
        return (e.displayName || "Context") + ".Consumer";
      case Ep:
        return (e._context.displayName || "Context") + ".Provider";
      case lc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case uc:
        return (
          (t = e.displayName || null), t !== null ? t : $l(e.type) || "Memo"
        );
      case xn:
        (t = e._payload), (e = e._init);
        try {
          return $l(e(t));
        } catch {}
    }
  return null;
}
function o2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $l(t);
    case 8:
      return t === ac ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Wn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Op(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function s2(e) {
  var t = Op(e) ? "checked" : "value",
    i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    o = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof i < "u" &&
    typeof i.get == "function" &&
    typeof i.set == "function"
  ) {
    var s = i.get,
      l = i.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (c) {
          (o = "" + c), l.call(this, c);
        },
      }),
      Object.defineProperty(e, t, { enumerable: i.enumerable }),
      {
        getValue: function () {
          return o;
        },
        setValue: function (c) {
          o = "" + c;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function us(e) {
  e._valueTracker || (e._valueTracker = s2(e));
}
function zp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var i = t.getValue(),
    o = "";
  return (
    e && (o = Op(e) ? (e.checked ? "true" : "false") : e.value),
    (e = o),
    e !== i ? (t.setValue(e), !0) : !1
  );
}
function Bs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gl(e, t) {
  var i = t.checked;
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: i ?? e._wrapperState.initialChecked,
  });
}
function Cf(e, t) {
  var i = t.defaultValue == null ? "" : t.defaultValue,
    o = t.checked != null ? t.checked : t.defaultChecked;
  (i = Wn(t.value != null ? t.value : i)),
    (e._wrapperState = {
      initialChecked: o,
      initialValue: i,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Np(e, t) {
  (t = t.checked), t != null && sc(e, "checked", t, !1);
}
function Kl(e, t) {
  Np(e, t);
  var i = Wn(t.value),
    o = t.type;
  if (i != null)
    o === "number"
      ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
      : e.value !== "" + i && (e.value = "" + i);
  else if (o === "submit" || o === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ql(e, t.type, i)
    : t.hasOwnProperty("defaultValue") && ql(e, t.type, Wn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Sf(e, t, i) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var o = t.type;
    if (
      !(
        (o !== "submit" && o !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      i || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (i = e.name),
    i !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    i !== "" && (e.name = i);
}
function ql(e, t, i) {
  (t !== "number" || Bs(e.ownerDocument) !== e) &&
    (i == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
}
var Gr = Array.isArray;
function Ki(e, t, i, o) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < i.length; s++) t["$" + i[s]] = !0;
    for (i = 0; i < e.length; i++)
      (s = t.hasOwnProperty("$" + e[i].value)),
        e[i].selected !== s && (e[i].selected = s),
        s && o && (e[i].defaultSelected = !0);
  } else {
    for (i = "" + Wn(i), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === i) {
        (e[s].selected = !0), o && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return Se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pf(e, t) {
  var i = t.value;
  if (i == null) {
    if (((i = t.children), (t = t.defaultValue), i != null)) {
      if (t != null) throw Error(A(92));
      if (Gr(i)) {
        if (1 < i.length) throw Error(A(93));
        i = i[0];
      }
      t = i;
    }
    t == null && (t = ""), (i = t);
  }
  e._wrapperState = { initialValue: Wn(i) };
}
function Rp(e, t) {
  var i = Wn(t.value),
    o = Wn(t.defaultValue);
  i != null &&
    ((i = "" + i),
    i !== e.value && (e.value = i),
    t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
    o != null && (e.defaultValue = "" + o);
}
function kf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ip(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ip(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var cs,
  jp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, i, o, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, i, o, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        cs = cs || document.createElement("div"),
          cs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = cs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function lo(e, t) {
  if (t) {
    var i = e.firstChild;
    if (i && i === e.lastChild && i.nodeType === 3) {
      i.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  a2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xr).forEach(function (e) {
  a2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xr[t] = Xr[e]);
  });
});
function Ap(e, t, i) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : i || typeof t != "number" || t === 0 || (Xr.hasOwnProperty(e) && Xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Dp(e, t) {
  e = e.style;
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      var o = i.indexOf("--") === 0,
        s = Ap(i, t[i], o);
      i === "float" && (i = "cssFloat"), o ? e.setProperty(i, s) : (e[i] = s);
    }
}
var l2 = Se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Jl(e, t) {
  if (t) {
    if (l2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function eu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var tu = null;
function cc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var nu = null,
  qi = null,
  Yi = null;
function Lf(e) {
  if ((e = Ao(e))) {
    if (typeof nu != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = ga(t)), nu(e.stateNode, e.type, t));
  }
}
function Bp(e) {
  qi ? (Yi ? Yi.push(e) : (Yi = [e])) : (qi = e);
}
function bp() {
  if (qi) {
    var e = qi,
      t = Yi;
    if (((Yi = qi = null), Lf(e), t)) for (e = 0; e < t.length; e++) Lf(t[e]);
  }
}
function Fp(e, t) {
  return e(t);
}
function Zp() {}
var gl = !1;
function Hp(e, t, i) {
  if (gl) return e(t, i);
  gl = !0;
  try {
    return Fp(e, t, i);
  } finally {
    (gl = !1), (qi !== null || Yi !== null) && (Zp(), bp());
  }
}
function uo(e, t) {
  var i = e.stateNode;
  if (i === null) return null;
  var o = ga(i);
  if (o === null) return null;
  i = o[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (o = !o.disabled) ||
        ((e = e.type),
        (o = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !o);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (i && typeof i != "function") throw Error(A(231, t, typeof i));
  return i;
}
var iu = !1;
if (hn)
  try {
    var Fr = {};
    Object.defineProperty(Fr, "passive", {
      get: function () {
        iu = !0;
      },
    }),
      window.addEventListener("test", Fr, Fr),
      window.removeEventListener("test", Fr, Fr);
  } catch {
    iu = !1;
  }
function u2(e, t, i, o, s, l, c, d, f) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(i, m);
  } catch (y) {
    this.onError(y);
  }
}
var Jr = !1,
  bs = null,
  Fs = !1,
  ru = null,
  c2 = {
    onError: function (e) {
      (Jr = !0), (bs = e);
    },
  };
function h2(e, t, i, o, s, l, c, d, f) {
  (Jr = !1), (bs = null), u2.apply(c2, arguments);
}
function f2(e, t, i, o, s, l, c, d, f) {
  if ((h2.apply(this, arguments), Jr)) {
    if (Jr) {
      var m = bs;
      (Jr = !1), (bs = null);
    } else throw Error(A(198));
    Fs || ((Fs = !0), (ru = m));
  }
}
function Pi(e) {
  var t = e,
    i = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (i = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? i : null;
}
function Up(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ef(e) {
  if (Pi(e) !== e) throw Error(A(188));
}
function d2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pi(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var i = e, o = t; ; ) {
    var s = i.return;
    if (s === null) break;
    var l = s.alternate;
    if (l === null) {
      if (((o = s.return), o !== null)) {
        i = o;
        continue;
      }
      break;
    }
    if (s.child === l.child) {
      for (l = s.child; l; ) {
        if (l === i) return Ef(s), e;
        if (l === o) return Ef(s), t;
        l = l.sibling;
      }
      throw Error(A(188));
    }
    if (i.return !== o.return) (i = s), (o = l);
    else {
      for (var c = !1, d = s.child; d; ) {
        if (d === i) {
          (c = !0), (i = s), (o = l);
          break;
        }
        if (d === o) {
          (c = !0), (o = s), (i = l);
          break;
        }
        d = d.sibling;
      }
      if (!c) {
        for (d = l.child; d; ) {
          if (d === i) {
            (c = !0), (i = l), (o = s);
            break;
          }
          if (d === o) {
            (c = !0), (o = l), (i = s);
            break;
          }
          d = d.sibling;
        }
        if (!c) throw Error(A(189));
      }
    }
    if (i.alternate !== o) throw Error(A(190));
  }
  if (i.tag !== 3) throw Error(A(188));
  return i.stateNode.current === i ? e : t;
}
function Wp(e) {
  return (e = d2(e)), e !== null ? Vp(e) : null;
}
function Vp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qp = pt.unstable_scheduleCallback,
  Tf = pt.unstable_cancelCallback,
  p2 = pt.unstable_shouldYield,
  m2 = pt.unstable_requestPaint,
  Ee = pt.unstable_now,
  g2 = pt.unstable_getCurrentPriorityLevel,
  hc = pt.unstable_ImmediatePriority,
  $p = pt.unstable_UserBlockingPriority,
  Zs = pt.unstable_NormalPriority,
  v2 = pt.unstable_LowPriority,
  Gp = pt.unstable_IdlePriority,
  fa = null,
  Yt = null;
function _2(e) {
  if (Yt && typeof Yt.onCommitFiberRoot == "function")
    try {
      Yt.onCommitFiberRoot(fa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : x2,
  y2 = Math.log,
  w2 = Math.LN2;
function x2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((y2(e) / w2) | 0)) | 0;
}
var hs = 64,
  fs = 4194304;
function Kr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hs(e, t) {
  var i = e.pendingLanes;
  if (i === 0) return 0;
  var o = 0,
    s = e.suspendedLanes,
    l = e.pingedLanes,
    c = i & 268435455;
  if (c !== 0) {
    var d = c & ~s;
    d !== 0 ? (o = Kr(d)) : ((l &= c), l !== 0 && (o = Kr(l)));
  } else (c = i & ~s), c !== 0 ? (o = Kr(c)) : l !== 0 && (o = Kr(l));
  if (o === 0) return 0;
  if (
    t !== 0 &&
    t !== o &&
    !(t & s) &&
    ((s = o & -o), (l = t & -t), s >= l || (s === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((o & 4 && (o |= i & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= o; 0 < t; )
      (i = 31 - Dt(t)), (s = 1 << i), (o |= e[i]), (t &= ~s);
  return o;
}
function C2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function S2(e, t) {
  for (
    var i = e.suspendedLanes,
      o = e.pingedLanes,
      s = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var c = 31 - Dt(l),
      d = 1 << c,
      f = s[c];
    f === -1
      ? (!(d & i) || d & o) && (s[c] = C2(d, t))
      : f <= t && (e.expiredLanes |= d),
      (l &= ~d);
  }
}
function ou(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Kp() {
  var e = hs;
  return (hs <<= 1), !(hs & 4194240) && (hs = 64), e;
}
function vl(e) {
  for (var t = [], i = 0; 31 > i; i++) t.push(e);
  return t;
}
function Io(e, t, i) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dt(t)),
    (e[t] = i);
}
function P2(e, t) {
  var i = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var o = e.eventTimes;
  for (e = e.expirationTimes; 0 < i; ) {
    var s = 31 - Dt(i),
      l = 1 << s;
    (t[s] = 0), (o[s] = -1), (e[s] = -1), (i &= ~l);
  }
}
function fc(e, t) {
  var i = (e.entangledLanes |= t);
  for (e = e.entanglements; i; ) {
    var o = 31 - Dt(i),
      s = 1 << o;
    (s & t) | (e[o] & t) && (e[o] |= t), (i &= ~s);
  }
}
var fe = 0;
function qp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Yp,
  dc,
  Xp,
  Jp,
  em,
  su = !1,
  ds = [],
  jn = null,
  An = null,
  Dn = null,
  co = new Map(),
  ho = new Map(),
  Sn = [],
  k2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Mf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jn = null;
      break;
    case "dragenter":
    case "dragleave":
      An = null;
      break;
    case "mouseover":
    case "mouseout":
      Dn = null;
      break;
    case "pointerover":
    case "pointerout":
      co.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ho.delete(t.pointerId);
  }
}
function Zr(e, t, i, o, s, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: i,
        eventSystemFlags: o,
        nativeEvent: l,
        targetContainers: [s],
      }),
      t !== null && ((t = Ao(t)), t !== null && dc(t)),
      e)
    : ((e.eventSystemFlags |= o),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function L2(e, t, i, o, s) {
  switch (t) {
    case "focusin":
      return (jn = Zr(jn, e, t, i, o, s)), !0;
    case "dragenter":
      return (An = Zr(An, e, t, i, o, s)), !0;
    case "mouseover":
      return (Dn = Zr(Dn, e, t, i, o, s)), !0;
    case "pointerover":
      var l = s.pointerId;
      return co.set(l, Zr(co.get(l) || null, e, t, i, o, s)), !0;
    case "gotpointercapture":
      return (
        (l = s.pointerId), ho.set(l, Zr(ho.get(l) || null, e, t, i, o, s)), !0
      );
  }
  return !1;
}
function tm(e) {
  var t = oi(e.target);
  if (t !== null) {
    var i = Pi(t);
    if (i !== null) {
      if (((t = i.tag), t === 13)) {
        if (((t = Up(i)), t !== null)) {
          (e.blockedOn = t),
            em(e.priority, function () {
              Xp(i);
            });
          return;
        }
      } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Es(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var i = au(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (i === null) {
      i = e.nativeEvent;
      var o = new i.constructor(i.type, i);
      (tu = o), i.target.dispatchEvent(o), (tu = null);
    } else return (t = Ao(i)), t !== null && dc(t), (e.blockedOn = i), !1;
    t.shift();
  }
  return !0;
}
function Of(e, t, i) {
  Es(e) && i.delete(t);
}
function E2() {
  (su = !1),
    jn !== null && Es(jn) && (jn = null),
    An !== null && Es(An) && (An = null),
    Dn !== null && Es(Dn) && (Dn = null),
    co.forEach(Of),
    ho.forEach(Of);
}
function Hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    su ||
      ((su = !0),
      pt.unstable_scheduleCallback(pt.unstable_NormalPriority, E2)));
}
function fo(e) {
  function t(s) {
    return Hr(s, e);
  }
  if (0 < ds.length) {
    Hr(ds[0], e);
    for (var i = 1; i < ds.length; i++) {
      var o = ds[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
  }
  for (
    jn !== null && Hr(jn, e),
      An !== null && Hr(An, e),
      Dn !== null && Hr(Dn, e),
      co.forEach(t),
      ho.forEach(t),
      i = 0;
    i < Sn.length;
    i++
  )
    (o = Sn[i]), o.blockedOn === e && (o.blockedOn = null);
  for (; 0 < Sn.length && ((i = Sn[0]), i.blockedOn === null); )
    tm(i), i.blockedOn === null && Sn.shift();
}
var Xi = mn.ReactCurrentBatchConfig,
  Us = !0;
function T2(e, t, i, o) {
  var s = fe,
    l = Xi.transition;
  Xi.transition = null;
  try {
    (fe = 1), pc(e, t, i, o);
  } finally {
    (fe = s), (Xi.transition = l);
  }
}
function M2(e, t, i, o) {
  var s = fe,
    l = Xi.transition;
  Xi.transition = null;
  try {
    (fe = 4), pc(e, t, i, o);
  } finally {
    (fe = s), (Xi.transition = l);
  }
}
function pc(e, t, i, o) {
  if (Us) {
    var s = au(e, t, i, o);
    if (s === null) El(e, t, o, Ws, i), Mf(e, o);
    else if (L2(s, e, t, i, o)) o.stopPropagation();
    else if ((Mf(e, o), t & 4 && -1 < k2.indexOf(e))) {
      for (; s !== null; ) {
        var l = Ao(s);
        if (
          (l !== null && Yp(l),
          (l = au(e, t, i, o)),
          l === null && El(e, t, o, Ws, i),
          l === s)
        )
          break;
        s = l;
      }
      s !== null && o.stopPropagation();
    } else El(e, t, o, null, i);
  }
}
var Ws = null;
function au(e, t, i, o) {
  if (((Ws = null), (e = cc(o)), (e = oi(e)), e !== null))
    if (((t = Pi(e)), t === null)) e = null;
    else if (((i = t.tag), i === 13)) {
      if (((e = Up(t)), e !== null)) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ws = e), null;
}
function nm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (g2()) {
        case hc:
          return 1;
        case $p:
          return 4;
        case Zs:
        case v2:
          return 16;
        case Gp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nn = null,
  mc = null,
  Ts = null;
function im() {
  if (Ts) return Ts;
  var e,
    t = mc,
    i = t.length,
    o,
    s = "value" in Nn ? Nn.value : Nn.textContent,
    l = s.length;
  for (e = 0; e < i && t[e] === s[e]; e++);
  var c = i - e;
  for (o = 1; o <= c && t[i - o] === s[l - o]; o++);
  return (Ts = s.slice(e, 1 < o ? 1 - o : void 0));
}
function Ms(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ps() {
  return !0;
}
function zf() {
  return !1;
}
function gt(e) {
  function t(i, o, s, l, c) {
    (this._reactName = i),
      (this._targetInst = s),
      (this.type = o),
      (this.nativeEvent = l),
      (this.target = c),
      (this.currentTarget = null);
    for (var d in e)
      e.hasOwnProperty(d) && ((i = e[d]), (this[d] = i ? i(l) : l[d]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? ps
        : zf),
      (this.isPropagationStopped = zf),
      this
    );
  }
  return (
    Se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i &&
          (i.preventDefault
            ? i.preventDefault()
            : typeof i.returnValue != "unknown" && (i.returnValue = !1),
          (this.isDefaultPrevented = ps));
      },
      stopPropagation: function () {
        var i = this.nativeEvent;
        i &&
          (i.stopPropagation
            ? i.stopPropagation()
            : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
          (this.isPropagationStopped = ps));
      },
      persist: function () {},
      isPersistent: ps,
    }),
    t
  );
}
var Sr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  gc = gt(Sr),
  jo = Se({}, Sr, { view: 0, detail: 0 }),
  O2 = gt(jo),
  _l,
  yl,
  Ur,
  da = Se({}, jo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ur &&
            (Ur && e.type === "mousemove"
              ? ((_l = e.screenX - Ur.screenX), (yl = e.screenY - Ur.screenY))
              : (yl = _l = 0),
            (Ur = e)),
          _l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : yl;
    },
  }),
  Nf = gt(da),
  z2 = Se({}, da, { dataTransfer: 0 }),
  N2 = gt(z2),
  R2 = Se({}, jo, { relatedTarget: 0 }),
  wl = gt(R2),
  I2 = Se({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  j2 = gt(I2),
  A2 = Se({}, Sr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  D2 = gt(A2),
  B2 = Se({}, Sr, { data: 0 }),
  Rf = gt(B2),
  b2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  F2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Z2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function H2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Z2[e]) ? !!t[e] : !1;
}
function vc() {
  return H2;
}
var U2 = Se({}, jo, {
    key: function (e) {
      if (e.key) {
        var t = b2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ms(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? F2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vc,
    charCode: function (e) {
      return e.type === "keypress" ? Ms(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ms(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  W2 = gt(U2),
  V2 = Se({}, da, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  If = gt(V2),
  Q2 = Se({}, jo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vc,
  }),
  $2 = gt(Q2),
  G2 = Se({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  K2 = gt(G2),
  q2 = Se({}, da, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Y2 = gt(q2),
  X2 = [9, 13, 27, 32],
  _c = hn && "CompositionEvent" in window,
  eo = null;
hn && "documentMode" in document && (eo = document.documentMode);
var J2 = hn && "TextEvent" in window && !eo,
  rm = hn && (!_c || (eo && 8 < eo && 11 >= eo)),
  jf = " ",
  Af = !1;
function om(e, t) {
  switch (e) {
    case "keyup":
      return X2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function sm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var bi = !1;
function e_(e, t) {
  switch (e) {
    case "compositionend":
      return sm(t);
    case "keypress":
      return t.which !== 32 ? null : ((Af = !0), jf);
    case "textInput":
      return (e = t.data), e === jf && Af ? null : e;
    default:
      return null;
  }
}
function t_(e, t) {
  if (bi)
    return e === "compositionend" || (!_c && om(e, t))
      ? ((e = im()), (Ts = mc = Nn = null), (bi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return rm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var n_ = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Df(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!n_[e.type] : t === "textarea";
}
function am(e, t, i, o) {
  Bp(o),
    (t = Vs(t, "onChange")),
    0 < t.length &&
      ((i = new gc("onChange", "change", null, i, o)),
      e.push({ event: i, listeners: t }));
}
var to = null,
  po = null;
function i_(e) {
  _m(e, 0);
}
function pa(e) {
  var t = Hi(e);
  if (zp(t)) return e;
}
function r_(e, t) {
  if (e === "change") return t;
}
var lm = !1;
if (hn) {
  var xl;
  if (hn) {
    var Cl = "oninput" in document;
    if (!Cl) {
      var Bf = document.createElement("div");
      Bf.setAttribute("oninput", "return;"),
        (Cl = typeof Bf.oninput == "function");
    }
    xl = Cl;
  } else xl = !1;
  lm = xl && (!document.documentMode || 9 < document.documentMode);
}
function bf() {
  to && (to.detachEvent("onpropertychange", um), (po = to = null));
}
function um(e) {
  if (e.propertyName === "value" && pa(po)) {
    var t = [];
    am(t, po, e, cc(e)), Hp(i_, t);
  }
}
function o_(e, t, i) {
  e === "focusin"
    ? (bf(), (to = t), (po = i), to.attachEvent("onpropertychange", um))
    : e === "focusout" && bf();
}
function s_(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pa(po);
}
function a_(e, t) {
  if (e === "click") return pa(t);
}
function l_(e, t) {
  if (e === "input" || e === "change") return pa(t);
}
function u_(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bt = typeof Object.is == "function" ? Object.is : u_;
function mo(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var i = Object.keys(e),
    o = Object.keys(t);
  if (i.length !== o.length) return !1;
  for (o = 0; o < i.length; o++) {
    var s = i[o];
    if (!Ul.call(t, s) || !bt(e[s], t[s])) return !1;
  }
  return !0;
}
function Ff(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Zf(e, t) {
  var i = Ff(e);
  e = 0;
  for (var o; i; ) {
    if (i.nodeType === 3) {
      if (((o = e + i.textContent.length), e <= t && o >= t))
        return { node: i, offset: t - e };
      e = o;
    }
    e: {
      for (; i; ) {
        if (i.nextSibling) {
          i = i.nextSibling;
          break e;
        }
        i = i.parentNode;
      }
      i = void 0;
    }
    i = Ff(i);
  }
}
function cm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? cm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function hm() {
  for (var e = window, t = Bs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var i = typeof t.contentWindow.location.href == "string";
    } catch {
      i = !1;
    }
    if (i) e = t.contentWindow;
    else break;
    t = Bs(e.document);
  }
  return t;
}
function yc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function c_(e) {
  var t = hm(),
    i = e.focusedElem,
    o = e.selectionRange;
  if (
    t !== i &&
    i &&
    i.ownerDocument &&
    cm(i.ownerDocument.documentElement, i)
  ) {
    if (o !== null && yc(i)) {
      if (
        ((t = o.start),
        (e = o.end),
        e === void 0 && (e = t),
        "selectionStart" in i)
      )
        (i.selectionStart = t), (i.selectionEnd = Math.min(e, i.value.length));
      else if (
        ((e = ((t = i.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = i.textContent.length,
          l = Math.min(o.start, s);
        (o = o.end === void 0 ? l : Math.min(o.end, s)),
          !e.extend && l > o && ((s = o), (o = l), (l = s)),
          (s = Zf(i, l));
        var c = Zf(i, o);
        s &&
          c &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== c.node ||
            e.focusOffset !== c.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          l > o
            ? (e.addRange(t), e.extend(c.node, c.offset))
            : (t.setEnd(c.node, c.offset), e.addRange(t)));
      }
    }
    for (t = [], e = i; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)
      (e = t[i]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var h_ = hn && "documentMode" in document && 11 >= document.documentMode,
  Fi = null,
  lu = null,
  no = null,
  uu = !1;
function Hf(e, t, i) {
  var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
  uu ||
    Fi == null ||
    Fi !== Bs(o) ||
    ((o = Fi),
    "selectionStart" in o && yc(o)
      ? (o = { start: o.selectionStart, end: o.selectionEnd })
      : ((o = (
          (o.ownerDocument && o.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (o = {
          anchorNode: o.anchorNode,
          anchorOffset: o.anchorOffset,
          focusNode: o.focusNode,
          focusOffset: o.focusOffset,
        })),
    (no && mo(no, o)) ||
      ((no = o),
      (o = Vs(lu, "onSelect")),
      0 < o.length &&
        ((t = new gc("onSelect", "select", null, t, i)),
        e.push({ event: t, listeners: o }),
        (t.target = Fi))));
}
function ms(e, t) {
  var i = {};
  return (
    (i[e.toLowerCase()] = t.toLowerCase()),
    (i["Webkit" + e] = "webkit" + t),
    (i["Moz" + e] = "moz" + t),
    i
  );
}
var Zi = {
    animationend: ms("Animation", "AnimationEnd"),
    animationiteration: ms("Animation", "AnimationIteration"),
    animationstart: ms("Animation", "AnimationStart"),
    transitionend: ms("Transition", "TransitionEnd"),
  },
  Sl = {},
  fm = {};
hn &&
  ((fm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zi.animationend.animation,
    delete Zi.animationiteration.animation,
    delete Zi.animationstart.animation),
  "TransitionEvent" in window || delete Zi.transitionend.transition);
function ma(e) {
  if (Sl[e]) return Sl[e];
  if (!Zi[e]) return e;
  var t = Zi[e],
    i;
  for (i in t) if (t.hasOwnProperty(i) && i in fm) return (Sl[e] = t[i]);
  return e;
}
var dm = ma("animationend"),
  pm = ma("animationiteration"),
  mm = ma("animationstart"),
  gm = ma("transitionend"),
  vm = new Map(),
  Uf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qn(e, t) {
  vm.set(e, t), Si(t, [e]);
}
for (var Pl = 0; Pl < Uf.length; Pl++) {
  var kl = Uf[Pl],
    f_ = kl.toLowerCase(),
    d_ = kl[0].toUpperCase() + kl.slice(1);
  Qn(f_, "on" + d_);
}
Qn(dm, "onAnimationEnd");
Qn(pm, "onAnimationIteration");
Qn(mm, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(gm, "onTransitionEnd");
mr("onMouseEnter", ["mouseout", "mouseover"]);
mr("onMouseLeave", ["mouseout", "mouseover"]);
mr("onPointerEnter", ["pointerout", "pointerover"]);
mr("onPointerLeave", ["pointerout", "pointerover"]);
Si(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Si(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Si("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Si(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Si(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Si(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var qr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  p_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));
function Wf(e, t, i) {
  var o = e.type || "unknown-event";
  (e.currentTarget = i), f2(o, t, void 0, e), (e.currentTarget = null);
}
function _m(e, t) {
  t = (t & 4) !== 0;
  for (var i = 0; i < e.length; i++) {
    var o = e[i],
      s = o.event;
    o = o.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var c = o.length - 1; 0 <= c; c--) {
          var d = o[c],
            f = d.instance,
            m = d.currentTarget;
          if (((d = d.listener), f !== l && s.isPropagationStopped())) break e;
          Wf(s, d, m), (l = f);
        }
      else
        for (c = 0; c < o.length; c++) {
          if (
            ((d = o[c]),
            (f = d.instance),
            (m = d.currentTarget),
            (d = d.listener),
            f !== l && s.isPropagationStopped())
          )
            break e;
          Wf(s, d, m), (l = f);
        }
    }
  }
  if (Fs) throw ((e = ru), (Fs = !1), (ru = null), e);
}
function ge(e, t) {
  var i = t[pu];
  i === void 0 && (i = t[pu] = new Set());
  var o = e + "__bubble";
  i.has(o) || (ym(t, e, 2, !1), i.add(o));
}
function Ll(e, t, i) {
  var o = 0;
  t && (o |= 4), ym(i, e, o, t);
}
var gs = "_reactListening" + Math.random().toString(36).slice(2);
function go(e) {
  if (!e[gs]) {
    (e[gs] = !0),
      Lp.forEach(function (i) {
        i !== "selectionchange" && (p_.has(i) || Ll(i, !1, e), Ll(i, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gs] || ((t[gs] = !0), Ll("selectionchange", !1, t));
  }
}
function ym(e, t, i, o) {
  switch (nm(t)) {
    case 1:
      var s = T2;
      break;
    case 4:
      s = M2;
      break;
    default:
      s = pc;
  }
  (i = s.bind(null, t, i, e)),
    (s = void 0),
    !iu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    o
      ? s !== void 0
        ? e.addEventListener(t, i, { capture: !0, passive: s })
        : e.addEventListener(t, i, !0)
      : s !== void 0
      ? e.addEventListener(t, i, { passive: s })
      : e.addEventListener(t, i, !1);
}
function El(e, t, i, o, s) {
  var l = o;
  if (!(t & 1) && !(t & 2) && o !== null)
    e: for (;;) {
      if (o === null) return;
      var c = o.tag;
      if (c === 3 || c === 4) {
        var d = o.stateNode.containerInfo;
        if (d === s || (d.nodeType === 8 && d.parentNode === s)) break;
        if (c === 4)
          for (c = o.return; c !== null; ) {
            var f = c.tag;
            if (
              (f === 3 || f === 4) &&
              ((f = c.stateNode.containerInfo),
              f === s || (f.nodeType === 8 && f.parentNode === s))
            )
              return;
            c = c.return;
          }
        for (; d !== null; ) {
          if (((c = oi(d)), c === null)) return;
          if (((f = c.tag), f === 5 || f === 6)) {
            o = l = c;
            continue e;
          }
          d = d.parentNode;
        }
      }
      o = o.return;
    }
  Hp(function () {
    var m = l,
      y = cc(i),
      g = [];
    e: {
      var x = vm.get(e);
      if (x !== void 0) {
        var k = gc,
          M = e;
        switch (e) {
          case "keypress":
            if (Ms(i) === 0) break e;
          case "keydown":
          case "keyup":
            k = W2;
            break;
          case "focusin":
            (M = "focus"), (k = wl);
            break;
          case "focusout":
            (M = "blur"), (k = wl);
            break;
          case "beforeblur":
          case "afterblur":
            k = wl;
            break;
          case "click":
            if (i.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Nf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = N2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = $2;
            break;
          case dm:
          case pm:
          case mm:
            k = j2;
            break;
          case gm:
            k = K2;
            break;
          case "scroll":
            k = O2;
            break;
          case "wheel":
            k = Y2;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = D2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = If;
        }
        var P = (t & 4) !== 0,
          R = !P && e === "scroll",
          C = P ? (x !== null ? x + "Capture" : null) : x;
        P = [];
        for (var v = m, w; v !== null; ) {
          w = v;
          var N = w.stateNode;
          if (
            (w.tag === 5 &&
              N !== null &&
              ((w = N),
              C !== null && ((N = uo(v, C)), N != null && P.push(vo(v, N, w)))),
            R)
          )
            break;
          v = v.return;
        }
        0 < P.length &&
          ((x = new k(x, M, null, i, y)), g.push({ event: x, listeners: P }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((x = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          x &&
            i !== tu &&
            (M = i.relatedTarget || i.fromElement) &&
            (oi(M) || M[fn]))
        )
          break e;
        if (
          (k || x) &&
          ((x =
            y.window === y
              ? y
              : (x = y.ownerDocument)
              ? x.defaultView || x.parentWindow
              : window),
          k
            ? ((M = i.relatedTarget || i.toElement),
              (k = m),
              (M = M ? oi(M) : null),
              M !== null &&
                ((R = Pi(M)), M !== R || (M.tag !== 5 && M.tag !== 6)) &&
                (M = null))
            : ((k = null), (M = m)),
          k !== M)
        ) {
          if (
            ((P = Nf),
            (N = "onMouseLeave"),
            (C = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((P = If),
              (N = "onPointerLeave"),
              (C = "onPointerEnter"),
              (v = "pointer")),
            (R = k == null ? x : Hi(k)),
            (w = M == null ? x : Hi(M)),
            (x = new P(N, v + "leave", k, i, y)),
            (x.target = R),
            (x.relatedTarget = w),
            (N = null),
            oi(y) === m &&
              ((P = new P(C, v + "enter", M, i, y)),
              (P.target = w),
              (P.relatedTarget = R),
              (N = P)),
            (R = N),
            k && M)
          )
            t: {
              for (P = k, C = M, v = 0, w = P; w; w = Ai(w)) v++;
              for (w = 0, N = C; N; N = Ai(N)) w++;
              for (; 0 < v - w; ) (P = Ai(P)), v--;
              for (; 0 < w - v; ) (C = Ai(C)), w--;
              for (; v--; ) {
                if (P === C || (C !== null && P === C.alternate)) break t;
                (P = Ai(P)), (C = Ai(C));
              }
              P = null;
            }
          else P = null;
          k !== null && Vf(g, x, k, P, !1),
            M !== null && R !== null && Vf(g, R, M, P, !0);
        }
      }
      e: {
        if (
          ((x = m ? Hi(m) : window),
          (k = x.nodeName && x.nodeName.toLowerCase()),
          k === "select" || (k === "input" && x.type === "file"))
        )
          var D = r_;
        else if (Df(x))
          if (lm) D = l_;
          else {
            D = s_;
            var Z = o_;
          }
        else
          (k = x.nodeName) &&
            k.toLowerCase() === "input" &&
            (x.type === "checkbox" || x.type === "radio") &&
            (D = a_);
        if (D && (D = D(e, m))) {
          am(g, D, i, y);
          break e;
        }
        Z && Z(e, x, m),
          e === "focusout" &&
            (Z = x._wrapperState) &&
            Z.controlled &&
            x.type === "number" &&
            ql(x, "number", x.value);
      }
      switch (((Z = m ? Hi(m) : window), e)) {
        case "focusin":
          (Df(Z) || Z.contentEditable === "true") &&
            ((Fi = Z), (lu = m), (no = null));
          break;
        case "focusout":
          no = lu = Fi = null;
          break;
        case "mousedown":
          uu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (uu = !1), Hf(g, i, y);
          break;
        case "selectionchange":
          if (h_) break;
        case "keydown":
        case "keyup":
          Hf(g, i, y);
      }
      var F;
      if (_c)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        bi
          ? om(e, i) && (b = "onCompositionEnd")
          : e === "keydown" && i.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (rm &&
          i.locale !== "ko" &&
          (bi || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && bi && (F = im())
            : ((Nn = y),
              (mc = "value" in Nn ? Nn.value : Nn.textContent),
              (bi = !0))),
        (Z = Vs(m, b)),
        0 < Z.length &&
          ((b = new Rf(b, e, null, i, y)),
          g.push({ event: b, listeners: Z }),
          F ? (b.data = F) : ((F = sm(i)), F !== null && (b.data = F)))),
        (F = J2 ? e_(e, i) : t_(e, i)) &&
          ((m = Vs(m, "onBeforeInput")),
          0 < m.length &&
            ((y = new Rf("onBeforeInput", "beforeinput", null, i, y)),
            g.push({ event: y, listeners: m }),
            (y.data = F)));
    }
    _m(g, t);
  });
}
function vo(e, t, i) {
  return { instance: e, listener: t, currentTarget: i };
}
function Vs(e, t) {
  for (var i = t + "Capture", o = []; e !== null; ) {
    var s = e,
      l = s.stateNode;
    s.tag === 5 &&
      l !== null &&
      ((s = l),
      (l = uo(e, i)),
      l != null && o.unshift(vo(e, l, s)),
      (l = uo(e, t)),
      l != null && o.push(vo(e, l, s))),
      (e = e.return);
  }
  return o;
}
function Ai(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vf(e, t, i, o, s) {
  for (var l = t._reactName, c = []; i !== null && i !== o; ) {
    var d = i,
      f = d.alternate,
      m = d.stateNode;
    if (f !== null && f === o) break;
    d.tag === 5 &&
      m !== null &&
      ((d = m),
      s
        ? ((f = uo(i, l)), f != null && c.unshift(vo(i, f, d)))
        : s || ((f = uo(i, l)), f != null && c.push(vo(i, f, d)))),
      (i = i.return);
  }
  c.length !== 0 && e.push({ event: t, listeners: c });
}
var m_ = /\r\n?/g,
  g_ = /\u0000|\uFFFD/g;
function Qf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      m_,
      `
`
    )
    .replace(g_, "");
}
function vs(e, t, i) {
  if (((t = Qf(t)), Qf(e) !== t && i)) throw Error(A(425));
}
function Qs() {}
var cu = null,
  hu = null;
function fu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var du = typeof setTimeout == "function" ? setTimeout : void 0,
  v_ = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $f = typeof Promise == "function" ? Promise : void 0,
  __ =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $f < "u"
      ? function (e) {
          return $f.resolve(null).then(e).catch(y_);
        }
      : du;
function y_(e) {
  setTimeout(function () {
    throw e;
  });
}
function Tl(e, t) {
  var i = t,
    o = 0;
  do {
    var s = i.nextSibling;
    if ((e.removeChild(i), s && s.nodeType === 8))
      if (((i = s.data), i === "/$")) {
        if (o === 0) {
          e.removeChild(s), fo(t);
          return;
        }
        o--;
      } else (i !== "$" && i !== "$?" && i !== "$!") || o++;
    i = s;
  } while (i);
  fo(t);
}
function Bn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var i = e.data;
      if (i === "$" || i === "$!" || i === "$?") {
        if (t === 0) return e;
        t--;
      } else i === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pr = Math.random().toString(36).slice(2),
  qt = "__reactFiber$" + Pr,
  _o = "__reactProps$" + Pr,
  fn = "__reactContainer$" + Pr,
  pu = "__reactEvents$" + Pr,
  w_ = "__reactListeners$" + Pr,
  x_ = "__reactHandles$" + Pr;
function oi(e) {
  var t = e[qt];
  if (t) return t;
  for (var i = e.parentNode; i; ) {
    if ((t = i[fn] || i[qt])) {
      if (
        ((i = t.alternate),
        t.child !== null || (i !== null && i.child !== null))
      )
        for (e = Gf(e); e !== null; ) {
          if ((i = e[qt])) return i;
          e = Gf(e);
        }
      return t;
    }
    (e = i), (i = e.parentNode);
  }
  return null;
}
function Ao(e) {
  return (
    (e = e[qt] || e[fn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Hi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function ga(e) {
  return e[_o] || null;
}
var mu = [],
  Ui = -1;
function $n(e) {
  return { current: e };
}
function ve(e) {
  0 > Ui || ((e.current = mu[Ui]), (mu[Ui] = null), Ui--);
}
function me(e, t) {
  Ui++, (mu[Ui] = e.current), (e.current = t);
}
var Vn = {},
  Ge = $n(Vn),
  at = $n(!1),
  vi = Vn;
function gr(e, t) {
  var i = e.type.contextTypes;
  if (!i) return Vn;
  var o = e.stateNode;
  if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
    return o.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    l;
  for (l in i) s[l] = t[l];
  return (
    o &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function lt(e) {
  return (e = e.childContextTypes), e != null;
}
function $s() {
  ve(at), ve(Ge);
}
function Kf(e, t, i) {
  if (Ge.current !== Vn) throw Error(A(168));
  me(Ge, t), me(at, i);
}
function wm(e, t, i) {
  var o = e.stateNode;
  if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
    return i;
  o = o.getChildContext();
  for (var s in o) if (!(s in t)) throw Error(A(108, o2(e) || "Unknown", s));
  return Se({}, i, o);
}
function Gs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vn),
    (vi = Ge.current),
    me(Ge, e),
    me(at, at.current),
    !0
  );
}
function qf(e, t, i) {
  var o = e.stateNode;
  if (!o) throw Error(A(169));
  i
    ? ((e = wm(e, t, vi)),
      (o.__reactInternalMemoizedMergedChildContext = e),
      ve(at),
      ve(Ge),
      me(Ge, e))
    : ve(at),
    me(at, i);
}
var an = null,
  va = !1,
  Ml = !1;
function xm(e) {
  an === null ? (an = [e]) : an.push(e);
}
function C_(e) {
  (va = !0), xm(e);
}
function Gn() {
  if (!Ml && an !== null) {
    Ml = !0;
    var e = 0,
      t = fe;
    try {
      var i = an;
      for (fe = 1; e < i.length; e++) {
        var o = i[e];
        do o = o(!0);
        while (o !== null);
      }
      (an = null), (va = !1);
    } catch (s) {
      throw (an !== null && (an = an.slice(e + 1)), Qp(hc, Gn), s);
    } finally {
      (fe = t), (Ml = !1);
    }
  }
  return null;
}
var Wi = [],
  Vi = 0,
  Ks = null,
  qs = 0,
  St = [],
  Pt = 0,
  _i = null,
  ln = 1,
  un = "";
function ni(e, t) {
  (Wi[Vi++] = qs), (Wi[Vi++] = Ks), (Ks = e), (qs = t);
}
function Cm(e, t, i) {
  (St[Pt++] = ln), (St[Pt++] = un), (St[Pt++] = _i), (_i = e);
  var o = ln;
  e = un;
  var s = 32 - Dt(o) - 1;
  (o &= ~(1 << s)), (i += 1);
  var l = 32 - Dt(t) + s;
  if (30 < l) {
    var c = s - (s % 5);
    (l = (o & ((1 << c) - 1)).toString(32)),
      (o >>= c),
      (s -= c),
      (ln = (1 << (32 - Dt(t) + s)) | (i << s) | o),
      (un = l + e);
  } else (ln = (1 << l) | (i << s) | o), (un = e);
}
function wc(e) {
  e.return !== null && (ni(e, 1), Cm(e, 1, 0));
}
function xc(e) {
  for (; e === Ks; )
    (Ks = Wi[--Vi]), (Wi[Vi] = null), (qs = Wi[--Vi]), (Wi[Vi] = null);
  for (; e === _i; )
    (_i = St[--Pt]),
      (St[Pt] = null),
      (un = St[--Pt]),
      (St[Pt] = null),
      (ln = St[--Pt]),
      (St[Pt] = null);
}
var dt = null,
  ft = null,
  _e = !1,
  jt = null;
function Sm(e, t) {
  var i = kt(5, null, null, 0);
  (i.elementType = "DELETED"),
    (i.stateNode = t),
    (i.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i);
}
function Yf(e, t) {
  switch (e.tag) {
    case 5:
      var i = e.type;
      return (
        (t =
          t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (dt = e), (ft = Bn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (dt = e), (ft = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((i = _i !== null ? { id: ln, overflow: un } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: i,
              retryLane: 1073741824,
            }),
            (i = kt(18, null, null, 0)),
            (i.stateNode = t),
            (i.return = e),
            (e.child = i),
            (dt = e),
            (ft = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function gu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vu(e) {
  if (_e) {
    var t = ft;
    if (t) {
      var i = t;
      if (!Yf(e, t)) {
        if (gu(e)) throw Error(A(418));
        t = Bn(i.nextSibling);
        var o = dt;
        t && Yf(e, t)
          ? Sm(o, i)
          : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (dt = e));
      }
    } else {
      if (gu(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (_e = !1), (dt = e);
    }
  }
}
function Xf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  dt = e;
}
function _s(e) {
  if (e !== dt) return !1;
  if (!_e) return Xf(e), (_e = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !fu(e.type, e.memoizedProps))),
    t && (t = ft))
  ) {
    if (gu(e)) throw (Pm(), Error(A(418)));
    for (; t; ) Sm(e, t), (t = Bn(t.nextSibling));
  }
  if ((Xf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var i = e.data;
          if (i === "/$") {
            if (t === 0) {
              ft = Bn(e.nextSibling);
              break e;
            }
            t--;
          } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ft = null;
    }
  } else ft = dt ? Bn(e.stateNode.nextSibling) : null;
  return !0;
}
function Pm() {
  for (var e = ft; e; ) e = Bn(e.nextSibling);
}
function vr() {
  (ft = dt = null), (_e = !1);
}
function Cc(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
var S_ = mn.ReactCurrentBatchConfig;
function Wr(e, t, i) {
  if (
    ((e = i.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (i._owner) {
      if (((i = i._owner), i)) {
        if (i.tag !== 1) throw Error(A(309));
        var o = i.stateNode;
      }
      if (!o) throw Error(A(147, e));
      var s = o,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (c) {
            var d = s.refs;
            c === null ? delete d[l] : (d[l] = c);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!i._owner) throw Error(A(290, e));
  }
  return e;
}
function ys(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Jf(e) {
  var t = e._init;
  return t(e._payload);
}
function km(e) {
  function t(C, v) {
    if (e) {
      var w = C.deletions;
      w === null ? ((C.deletions = [v]), (C.flags |= 16)) : w.push(v);
    }
  }
  function i(C, v) {
    if (!e) return null;
    for (; v !== null; ) t(C, v), (v = v.sibling);
    return null;
  }
  function o(C, v) {
    for (C = new Map(); v !== null; )
      v.key !== null ? C.set(v.key, v) : C.set(v.index, v), (v = v.sibling);
    return C;
  }
  function s(C, v) {
    return (C = Hn(C, v)), (C.index = 0), (C.sibling = null), C;
  }
  function l(C, v, w) {
    return (
      (C.index = w),
      e
        ? ((w = C.alternate),
          w !== null
            ? ((w = w.index), w < v ? ((C.flags |= 2), v) : w)
            : ((C.flags |= 2), v))
        : ((C.flags |= 1048576), v)
    );
  }
  function c(C) {
    return e && C.alternate === null && (C.flags |= 2), C;
  }
  function d(C, v, w, N) {
    return v === null || v.tag !== 6
      ? ((v = Al(w, C.mode, N)), (v.return = C), v)
      : ((v = s(v, w)), (v.return = C), v);
  }
  function f(C, v, w, N) {
    var D = w.type;
    return D === Bi
      ? y(C, v, w.props.children, N, w.key)
      : v !== null &&
        (v.elementType === D ||
          (typeof D == "object" &&
            D !== null &&
            D.$$typeof === xn &&
            Jf(D) === v.type))
      ? ((N = s(v, w.props)), (N.ref = Wr(C, v, w)), (N.return = C), N)
      : ((N = As(w.type, w.key, w.props, null, C.mode, N)),
        (N.ref = Wr(C, v, w)),
        (N.return = C),
        N);
  }
  function m(C, v, w, N) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== w.containerInfo ||
      v.stateNode.implementation !== w.implementation
      ? ((v = Dl(w, C.mode, N)), (v.return = C), v)
      : ((v = s(v, w.children || [])), (v.return = C), v);
  }
  function y(C, v, w, N, D) {
    return v === null || v.tag !== 7
      ? ((v = gi(w, C.mode, N, D)), (v.return = C), v)
      : ((v = s(v, w)), (v.return = C), v);
  }
  function g(C, v, w) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Al("" + v, C.mode, w)), (v.return = C), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ls:
          return (
            (w = As(v.type, v.key, v.props, null, C.mode, w)),
            (w.ref = Wr(C, null, v)),
            (w.return = C),
            w
          );
        case Di:
          return (v = Dl(v, C.mode, w)), (v.return = C), v;
        case xn:
          var N = v._init;
          return g(C, N(v._payload), w);
      }
      if (Gr(v) || br(v))
        return (v = gi(v, C.mode, w, null)), (v.return = C), v;
      ys(C, v);
    }
    return null;
  }
  function x(C, v, w, N) {
    var D = v !== null ? v.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return D !== null ? null : d(C, v, "" + w, N);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ls:
          return w.key === D ? f(C, v, w, N) : null;
        case Di:
          return w.key === D ? m(C, v, w, N) : null;
        case xn:
          return (D = w._init), x(C, v, D(w._payload), N);
      }
      if (Gr(w) || br(w)) return D !== null ? null : y(C, v, w, N, null);
      ys(C, w);
    }
    return null;
  }
  function k(C, v, w, N, D) {
    if ((typeof N == "string" && N !== "") || typeof N == "number")
      return (C = C.get(w) || null), d(v, C, "" + N, D);
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case ls:
          return (C = C.get(N.key === null ? w : N.key) || null), f(v, C, N, D);
        case Di:
          return (C = C.get(N.key === null ? w : N.key) || null), m(v, C, N, D);
        case xn:
          var Z = N._init;
          return k(C, v, w, Z(N._payload), D);
      }
      if (Gr(N) || br(N)) return (C = C.get(w) || null), y(v, C, N, D, null);
      ys(v, N);
    }
    return null;
  }
  function M(C, v, w, N) {
    for (
      var D = null, Z = null, F = v, b = (v = 0), Q = null;
      F !== null && b < w.length;
      b++
    ) {
      F.index > b ? ((Q = F), (F = null)) : (Q = F.sibling);
      var K = x(C, F, w[b], N);
      if (K === null) {
        F === null && (F = Q);
        break;
      }
      e && F && K.alternate === null && t(C, F),
        (v = l(K, v, b)),
        Z === null ? (D = K) : (Z.sibling = K),
        (Z = K),
        (F = Q);
    }
    if (b === w.length) return i(C, F), _e && ni(C, b), D;
    if (F === null) {
      for (; b < w.length; b++)
        (F = g(C, w[b], N)),
          F !== null &&
            ((v = l(F, v, b)), Z === null ? (D = F) : (Z.sibling = F), (Z = F));
      return _e && ni(C, b), D;
    }
    for (F = o(C, F); b < w.length; b++)
      (Q = k(F, C, b, w[b], N)),
        Q !== null &&
          (e && Q.alternate !== null && F.delete(Q.key === null ? b : Q.key),
          (v = l(Q, v, b)),
          Z === null ? (D = Q) : (Z.sibling = Q),
          (Z = Q));
    return (
      e &&
        F.forEach(function (se) {
          return t(C, se);
        }),
      _e && ni(C, b),
      D
    );
  }
  function P(C, v, w, N) {
    var D = br(w);
    if (typeof D != "function") throw Error(A(150));
    if (((w = D.call(w)), w == null)) throw Error(A(151));
    for (
      var Z = (D = null), F = v, b = (v = 0), Q = null, K = w.next();
      F !== null && !K.done;
      b++, K = w.next()
    ) {
      F.index > b ? ((Q = F), (F = null)) : (Q = F.sibling);
      var se = x(C, F, K.value, N);
      if (se === null) {
        F === null && (F = Q);
        break;
      }
      e && F && se.alternate === null && t(C, F),
        (v = l(se, v, b)),
        Z === null ? (D = se) : (Z.sibling = se),
        (Z = se),
        (F = Q);
    }
    if (K.done) return i(C, F), _e && ni(C, b), D;
    if (F === null) {
      for (; !K.done; b++, K = w.next())
        (K = g(C, K.value, N)),
          K !== null &&
            ((v = l(K, v, b)), Z === null ? (D = K) : (Z.sibling = K), (Z = K));
      return _e && ni(C, b), D;
    }
    for (F = o(C, F); !K.done; b++, K = w.next())
      (K = k(F, C, b, K.value, N)),
        K !== null &&
          (e && K.alternate !== null && F.delete(K.key === null ? b : K.key),
          (v = l(K, v, b)),
          Z === null ? (D = K) : (Z.sibling = K),
          (Z = K));
    return (
      e &&
        F.forEach(function (ye) {
          return t(C, ye);
        }),
      _e && ni(C, b),
      D
    );
  }
  function R(C, v, w, N) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === Bi &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case ls:
          e: {
            for (var D = w.key, Z = v; Z !== null; ) {
              if (Z.key === D) {
                if (((D = w.type), D === Bi)) {
                  if (Z.tag === 7) {
                    i(C, Z.sibling),
                      (v = s(Z, w.props.children)),
                      (v.return = C),
                      (C = v);
                    break e;
                  }
                } else if (
                  Z.elementType === D ||
                  (typeof D == "object" &&
                    D !== null &&
                    D.$$typeof === xn &&
                    Jf(D) === Z.type)
                ) {
                  i(C, Z.sibling),
                    (v = s(Z, w.props)),
                    (v.ref = Wr(C, Z, w)),
                    (v.return = C),
                    (C = v);
                  break e;
                }
                i(C, Z);
                break;
              } else t(C, Z);
              Z = Z.sibling;
            }
            w.type === Bi
              ? ((v = gi(w.props.children, C.mode, N, w.key)),
                (v.return = C),
                (C = v))
              : ((N = As(w.type, w.key, w.props, null, C.mode, N)),
                (N.ref = Wr(C, v, w)),
                (N.return = C),
                (C = N));
          }
          return c(C);
        case Di:
          e: {
            for (Z = w.key; v !== null; ) {
              if (v.key === Z)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === w.containerInfo &&
                  v.stateNode.implementation === w.implementation
                ) {
                  i(C, v.sibling),
                    (v = s(v, w.children || [])),
                    (v.return = C),
                    (C = v);
                  break e;
                } else {
                  i(C, v);
                  break;
                }
              else t(C, v);
              v = v.sibling;
            }
            (v = Dl(w, C.mode, N)), (v.return = C), (C = v);
          }
          return c(C);
        case xn:
          return (Z = w._init), R(C, v, Z(w._payload), N);
      }
      if (Gr(w)) return M(C, v, w, N);
      if (br(w)) return P(C, v, w, N);
      ys(C, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        v !== null && v.tag === 6
          ? (i(C, v.sibling), (v = s(v, w)), (v.return = C), (C = v))
          : (i(C, v), (v = Al(w, C.mode, N)), (v.return = C), (C = v)),
        c(C))
      : i(C, v);
  }
  return R;
}
var _r = km(!0),
  Lm = km(!1),
  Ys = $n(null),
  Xs = null,
  Qi = null,
  Sc = null;
function Pc() {
  Sc = Qi = Xs = null;
}
function kc(e) {
  var t = Ys.current;
  ve(Ys), (e._currentValue = t);
}
function _u(e, t, i) {
  for (; e !== null; ) {
    var o = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
        : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
      e === i)
    )
      break;
    e = e.return;
  }
}
function Ji(e, t) {
  (Xs = e),
    (Sc = Qi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (st = !0), (e.firstContext = null));
}
function Et(e) {
  var t = e._currentValue;
  if (Sc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qi === null)) {
      if (Xs === null) throw Error(A(308));
      (Qi = e), (Xs.dependencies = { lanes: 0, firstContext: e });
    } else Qi = Qi.next = e;
  return t;
}
var si = null;
function Lc(e) {
  si === null ? (si = [e]) : si.push(e);
}
function Em(e, t, i, o) {
  var s = t.interleaved;
  return (
    s === null ? ((i.next = i), Lc(t)) : ((i.next = s.next), (s.next = i)),
    (t.interleaved = i),
    dn(e, o)
  );
}
function dn(e, t) {
  e.lanes |= t;
  var i = e.alternate;
  for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (i = e.alternate),
      i !== null && (i.childLanes |= t),
      (i = e),
      (e = e.return);
  return i.tag === 3 ? i.stateNode : null;
}
var Cn = !1;
function Ec(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Tm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function cn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bn(e, t, i) {
  var o = e.updateQueue;
  if (o === null) return null;
  if (((o = o.shared), le & 2)) {
    var s = o.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (o.pending = t),
      dn(e, i)
    );
  }
  return (
    (s = o.interleaved),
    s === null ? ((t.next = t), Lc(o)) : ((t.next = s.next), (s.next = t)),
    (o.interleaved = t),
    dn(e, i)
  );
}
function Os(e, t, i) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))
  ) {
    var o = t.lanes;
    (o &= e.pendingLanes), (i |= o), (t.lanes = i), fc(e, i);
  }
}
function ed(e, t) {
  var i = e.updateQueue,
    o = e.alternate;
  if (o !== null && ((o = o.updateQueue), i === o)) {
    var s = null,
      l = null;
    if (((i = i.firstBaseUpdate), i !== null)) {
      do {
        var c = {
          eventTime: i.eventTime,
          lane: i.lane,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        };
        l === null ? (s = l = c) : (l = l.next = c), (i = i.next);
      } while (i !== null);
      l === null ? (s = l = t) : (l = l.next = t);
    } else s = l = t;
    (i = {
      baseState: o.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: l,
      shared: o.shared,
      effects: o.effects,
    }),
      (e.updateQueue = i);
    return;
  }
  (e = i.lastBaseUpdate),
    e === null ? (i.firstBaseUpdate = t) : (e.next = t),
    (i.lastBaseUpdate = t);
}
function Js(e, t, i, o) {
  var s = e.updateQueue;
  Cn = !1;
  var l = s.firstBaseUpdate,
    c = s.lastBaseUpdate,
    d = s.shared.pending;
  if (d !== null) {
    s.shared.pending = null;
    var f = d,
      m = f.next;
    (f.next = null), c === null ? (l = m) : (c.next = m), (c = f);
    var y = e.alternate;
    y !== null &&
      ((y = y.updateQueue),
      (d = y.lastBaseUpdate),
      d !== c &&
        (d === null ? (y.firstBaseUpdate = m) : (d.next = m),
        (y.lastBaseUpdate = f)));
  }
  if (l !== null) {
    var g = s.baseState;
    (c = 0), (y = m = f = null), (d = l);
    do {
      var x = d.lane,
        k = d.eventTime;
      if ((o & x) === x) {
        y !== null &&
          (y = y.next =
            {
              eventTime: k,
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            });
        e: {
          var M = e,
            P = d;
          switch (((x = t), (k = i), P.tag)) {
            case 1:
              if (((M = P.payload), typeof M == "function")) {
                g = M.call(k, g, x);
                break e;
              }
              g = M;
              break e;
            case 3:
              M.flags = (M.flags & -65537) | 128;
            case 0:
              if (
                ((M = P.payload),
                (x = typeof M == "function" ? M.call(k, g, x) : M),
                x == null)
              )
                break e;
              g = Se({}, g, x);
              break e;
            case 2:
              Cn = !0;
          }
        }
        d.callback !== null &&
          d.lane !== 0 &&
          ((e.flags |= 64),
          (x = s.effects),
          x === null ? (s.effects = [d]) : x.push(d));
      } else
        (k = {
          eventTime: k,
          lane: x,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null,
        }),
          y === null ? ((m = y = k), (f = g)) : (y = y.next = k),
          (c |= x);
      if (((d = d.next), d === null)) {
        if (((d = s.shared.pending), d === null)) break;
        (x = d),
          (d = x.next),
          (x.next = null),
          (s.lastBaseUpdate = x),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (y === null && (f = g),
      (s.baseState = f),
      (s.firstBaseUpdate = m),
      (s.lastBaseUpdate = y),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (c |= s.lane), (s = s.next);
      while (s !== t);
    } else l === null && (s.shared.lanes = 0);
    (wi |= c), (e.lanes = c), (e.memoizedState = g);
  }
}
function td(e, t, i) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var o = e[t],
        s = o.callback;
      if (s !== null) {
        if (((o.callback = null), (o = i), typeof s != "function"))
          throw Error(A(191, s));
        s.call(o);
      }
    }
}
var Do = {},
  Xt = $n(Do),
  yo = $n(Do),
  wo = $n(Do);
function ai(e) {
  if (e === Do) throw Error(A(174));
  return e;
}
function Tc(e, t) {
  switch ((me(wo, t), me(yo, e), me(Xt, Do), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Xl(t, e));
  }
  ve(Xt), me(Xt, t);
}
function yr() {
  ve(Xt), ve(yo), ve(wo);
}
function Mm(e) {
  ai(wo.current);
  var t = ai(Xt.current),
    i = Xl(t, e.type);
  t !== i && (me(yo, e), me(Xt, i));
}
function Mc(e) {
  yo.current === e && (ve(Xt), ve(yo));
}
var xe = $n(0);
function ea(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var i = t.memoizedState;
      if (
        i !== null &&
        ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ol = [];
function Oc() {
  for (var e = 0; e < Ol.length; e++)
    Ol[e]._workInProgressVersionPrimary = null;
  Ol.length = 0;
}
var zs = mn.ReactCurrentDispatcher,
  zl = mn.ReactCurrentBatchConfig,
  yi = 0,
  Ce = null,
  Re = null,
  Ae = null,
  ta = !1,
  io = !1,
  xo = 0,
  P_ = 0;
function We() {
  throw Error(A(321));
}
function zc(e, t) {
  if (t === null) return !1;
  for (var i = 0; i < t.length && i < e.length; i++)
    if (!bt(e[i], t[i])) return !1;
  return !0;
}
function Nc(e, t, i, o, s, l) {
  if (
    ((yi = l),
    (Ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zs.current = e === null || e.memoizedState === null ? T_ : M_),
    (e = i(o, s)),
    io)
  ) {
    l = 0;
    do {
      if (((io = !1), (xo = 0), 25 <= l)) throw Error(A(301));
      (l += 1),
        (Ae = Re = null),
        (t.updateQueue = null),
        (zs.current = O_),
        (e = i(o, s));
    } while (io);
  }
  if (
    ((zs.current = na),
    (t = Re !== null && Re.next !== null),
    (yi = 0),
    (Ae = Re = Ce = null),
    (ta = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function Rc() {
  var e = xo !== 0;
  return (xo = 0), e;
}
function Vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ae === null ? (Ce.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae;
}
function Tt() {
  if (Re === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = Ae === null ? Ce.memoizedState : Ae.next;
  if (t !== null) (Ae = t), (Re = e);
  else {
    if (e === null) throw Error(A(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      Ae === null ? (Ce.memoizedState = Ae = e) : (Ae = Ae.next = e);
  }
  return Ae;
}
function Co(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Nl(e) {
  var t = Tt(),
    i = t.queue;
  if (i === null) throw Error(A(311));
  i.lastRenderedReducer = e;
  var o = Re,
    s = o.baseQueue,
    l = i.pending;
  if (l !== null) {
    if (s !== null) {
      var c = s.next;
      (s.next = l.next), (l.next = c);
    }
    (o.baseQueue = s = l), (i.pending = null);
  }
  if (s !== null) {
    (l = s.next), (o = o.baseState);
    var d = (c = null),
      f = null,
      m = l;
    do {
      var y = m.lane;
      if ((yi & y) === y)
        f !== null &&
          (f = f.next =
            {
              lane: 0,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
          (o = m.hasEagerState ? m.eagerState : e(o, m.action));
      else {
        var g = {
          lane: y,
          action: m.action,
          hasEagerState: m.hasEagerState,
          eagerState: m.eagerState,
          next: null,
        };
        f === null ? ((d = f = g), (c = o)) : (f = f.next = g),
          (Ce.lanes |= y),
          (wi |= y);
      }
      m = m.next;
    } while (m !== null && m !== l);
    f === null ? (c = o) : (f.next = d),
      bt(o, t.memoizedState) || (st = !0),
      (t.memoizedState = o),
      (t.baseState = c),
      (t.baseQueue = f),
      (i.lastRenderedState = o);
  }
  if (((e = i.interleaved), e !== null)) {
    s = e;
    do (l = s.lane), (Ce.lanes |= l), (wi |= l), (s = s.next);
    while (s !== e);
  } else s === null && (i.lanes = 0);
  return [t.memoizedState, i.dispatch];
}
function Rl(e) {
  var t = Tt(),
    i = t.queue;
  if (i === null) throw Error(A(311));
  i.lastRenderedReducer = e;
  var o = i.dispatch,
    s = i.pending,
    l = t.memoizedState;
  if (s !== null) {
    i.pending = null;
    var c = (s = s.next);
    do (l = e(l, c.action)), (c = c.next);
    while (c !== s);
    bt(l, t.memoizedState) || (st = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (i.lastRenderedState = l);
  }
  return [l, o];
}
function Om() {}
function zm(e, t) {
  var i = Ce,
    o = Tt(),
    s = t(),
    l = !bt(o.memoizedState, s);
  if (
    (l && ((o.memoizedState = s), (st = !0)),
    (o = o.queue),
    Ic(Im.bind(null, i, o, e), [e]),
    o.getSnapshot !== t || l || (Ae !== null && Ae.memoizedState.tag & 1))
  ) {
    if (
      ((i.flags |= 2048),
      So(9, Rm.bind(null, i, o, s, t), void 0, null),
      De === null)
    )
      throw Error(A(349));
    yi & 30 || Nm(i, t, s);
  }
  return s;
}
function Nm(e, t, i) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: i }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.stores = [e]))
      : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
}
function Rm(e, t, i, o) {
  (t.value = i), (t.getSnapshot = o), jm(t) && Am(e);
}
function Im(e, t, i) {
  return i(function () {
    jm(t) && Am(e);
  });
}
function jm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var i = t();
    return !bt(e, i);
  } catch {
    return !0;
  }
}
function Am(e) {
  var t = dn(e, 1);
  t !== null && Bt(t, e, 1, -1);
}
function nd(e) {
  var t = Vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Co,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = E_.bind(null, Ce, e)),
    [t.memoizedState, e]
  );
}
function So(e, t, i, o) {
  return (
    (e = { tag: e, create: t, destroy: i, deps: o, next: null }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((i = t.lastEffect),
        i === null
          ? (t.lastEffect = e.next = e)
          : ((o = i.next), (i.next = e), (e.next = o), (t.lastEffect = e))),
    e
  );
}
function Dm() {
  return Tt().memoizedState;
}
function Ns(e, t, i, o) {
  var s = Vt();
  (Ce.flags |= e),
    (s.memoizedState = So(1 | t, i, void 0, o === void 0 ? null : o));
}
function _a(e, t, i, o) {
  var s = Tt();
  o = o === void 0 ? null : o;
  var l = void 0;
  if (Re !== null) {
    var c = Re.memoizedState;
    if (((l = c.destroy), o !== null && zc(o, c.deps))) {
      s.memoizedState = So(t, i, l, o);
      return;
    }
  }
  (Ce.flags |= e), (s.memoizedState = So(1 | t, i, l, o));
}
function id(e, t) {
  return Ns(8390656, 8, e, t);
}
function Ic(e, t) {
  return _a(2048, 8, e, t);
}
function Bm(e, t) {
  return _a(4, 2, e, t);
}
function bm(e, t) {
  return _a(4, 4, e, t);
}
function Fm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Zm(e, t, i) {
  return (
    (i = i != null ? i.concat([e]) : null), _a(4, 4, Fm.bind(null, t, e), i)
  );
}
function jc() {}
function Hm(e, t) {
  var i = Tt();
  t = t === void 0 ? null : t;
  var o = i.memoizedState;
  return o !== null && t !== null && zc(t, o[1])
    ? o[0]
    : ((i.memoizedState = [e, t]), e);
}
function Um(e, t) {
  var i = Tt();
  t = t === void 0 ? null : t;
  var o = i.memoizedState;
  return o !== null && t !== null && zc(t, o[1])
    ? o[0]
    : ((e = e()), (i.memoizedState = [e, t]), e);
}
function Wm(e, t, i) {
  return yi & 21
    ? (bt(i, t) || ((i = Kp()), (Ce.lanes |= i), (wi |= i), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = i));
}
function k_(e, t) {
  var i = fe;
  (fe = i !== 0 && 4 > i ? i : 4), e(!0);
  var o = zl.transition;
  zl.transition = {};
  try {
    e(!1), t();
  } finally {
    (fe = i), (zl.transition = o);
  }
}
function Vm() {
  return Tt().memoizedState;
}
function L_(e, t, i) {
  var o = Zn(e);
  if (
    ((i = {
      lane: o,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qm(e))
  )
    $m(t, i);
  else if (((i = Em(e, t, i, o)), i !== null)) {
    var s = Je();
    Bt(i, e, o, s), Gm(i, t, o);
  }
}
function E_(e, t, i) {
  var o = Zn(e),
    s = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
  if (Qm(e)) $m(t, s);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var c = t.lastRenderedState,
          d = l(c, i);
        if (((s.hasEagerState = !0), (s.eagerState = d), bt(d, c))) {
          var f = t.interleaved;
          f === null
            ? ((s.next = s), Lc(t))
            : ((s.next = f.next), (f.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (i = Em(e, t, s, o)),
      i !== null && ((s = Je()), Bt(i, e, o, s), Gm(i, t, o));
  }
}
function Qm(e) {
  var t = e.alternate;
  return e === Ce || (t !== null && t === Ce);
}
function $m(e, t) {
  io = ta = !0;
  var i = e.pending;
  i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
    (e.pending = t);
}
function Gm(e, t, i) {
  if (i & 4194240) {
    var o = t.lanes;
    (o &= e.pendingLanes), (i |= o), (t.lanes = i), fc(e, i);
  }
}
var na = {
    readContext: Et,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
  T_ = {
    readContext: Et,
    useCallback: function (e, t) {
      return (Vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Et,
    useEffect: id,
    useImperativeHandle: function (e, t, i) {
      return (
        (i = i != null ? i.concat([e]) : null),
        Ns(4194308, 4, Fm.bind(null, t, e), i)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ns(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ns(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var i = Vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (i.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, i) {
      var o = Vt();
      return (
        (t = i !== void 0 ? i(t) : t),
        (o.memoizedState = o.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (o.queue = e),
        (e = e.dispatch = L_.bind(null, Ce, e)),
        [o.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: nd,
    useDebugValue: jc,
    useDeferredValue: function (e) {
      return (Vt().memoizedState = e);
    },
    useTransition: function () {
      var e = nd(!1),
        t = e[0];
      return (e = k_.bind(null, e[1])), (Vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, i) {
      var o = Ce,
        s = Vt();
      if (_e) {
        if (i === void 0) throw Error(A(407));
        i = i();
      } else {
        if (((i = t()), De === null)) throw Error(A(349));
        yi & 30 || Nm(o, t, i);
      }
      s.memoizedState = i;
      var l = { value: i, getSnapshot: t };
      return (
        (s.queue = l),
        id(Im.bind(null, o, l, e), [e]),
        (o.flags |= 2048),
        So(9, Rm.bind(null, o, l, i, t), void 0, null),
        i
      );
    },
    useId: function () {
      var e = Vt(),
        t = De.identifierPrefix;
      if (_e) {
        var i = un,
          o = ln;
        (i = (o & ~(1 << (32 - Dt(o) - 1))).toString(32) + i),
          (t = ":" + t + "R" + i),
          (i = xo++),
          0 < i && (t += "H" + i.toString(32)),
          (t += ":");
      } else (i = P_++), (t = ":" + t + "r" + i.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  M_ = {
    readContext: Et,
    useCallback: Hm,
    useContext: Et,
    useEffect: Ic,
    useImperativeHandle: Zm,
    useInsertionEffect: Bm,
    useLayoutEffect: bm,
    useMemo: Um,
    useReducer: Nl,
    useRef: Dm,
    useState: function () {
      return Nl(Co);
    },
    useDebugValue: jc,
    useDeferredValue: function (e) {
      var t = Tt();
      return Wm(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Nl(Co)[0],
        t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Om,
    useSyncExternalStore: zm,
    useId: Vm,
    unstable_isNewReconciler: !1,
  },
  O_ = {
    readContext: Et,
    useCallback: Hm,
    useContext: Et,
    useEffect: Ic,
    useImperativeHandle: Zm,
    useInsertionEffect: Bm,
    useLayoutEffect: bm,
    useMemo: Um,
    useReducer: Rl,
    useRef: Dm,
    useState: function () {
      return Rl(Co);
    },
    useDebugValue: jc,
    useDeferredValue: function (e) {
      var t = Tt();
      return Re === null ? (t.memoizedState = e) : Wm(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Rl(Co)[0],
        t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Om,
    useSyncExternalStore: zm,
    useId: Vm,
    unstable_isNewReconciler: !1,
  };
function Nt(e, t) {
  if (e && e.defaultProps) {
    (t = Se({}, t)), (e = e.defaultProps);
    for (var i in e) t[i] === void 0 && (t[i] = e[i]);
    return t;
  }
  return t;
}
function yu(e, t, i, o) {
  (t = e.memoizedState),
    (i = i(o, t)),
    (i = i == null ? t : Se({}, t, i)),
    (e.memoizedState = i),
    e.lanes === 0 && (e.updateQueue.baseState = i);
}
var ya = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pi(e) === e : !1;
  },
  enqueueSetState: function (e, t, i) {
    e = e._reactInternals;
    var o = Je(),
      s = Zn(e),
      l = cn(o, s);
    (l.payload = t),
      i != null && (l.callback = i),
      (t = bn(e, l, s)),
      t !== null && (Bt(t, e, s, o), Os(t, e, s));
  },
  enqueueReplaceState: function (e, t, i) {
    e = e._reactInternals;
    var o = Je(),
      s = Zn(e),
      l = cn(o, s);
    (l.tag = 1),
      (l.payload = t),
      i != null && (l.callback = i),
      (t = bn(e, l, s)),
      t !== null && (Bt(t, e, s, o), Os(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var i = Je(),
      o = Zn(e),
      s = cn(i, o);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = bn(e, s, o)),
      t !== null && (Bt(t, e, o, i), Os(t, e, o));
  },
};
function rd(e, t, i, o, s, l, c) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(o, l, c)
      : t.prototype && t.prototype.isPureReactComponent
      ? !mo(i, o) || !mo(s, l)
      : !0
  );
}
function Km(e, t, i) {
  var o = !1,
    s = Vn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Et(l))
      : ((s = lt(t) ? vi : Ge.current),
        (o = t.contextTypes),
        (l = (o = o != null) ? gr(e, s) : Vn)),
    (t = new t(i, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ya),
    (e.stateNode = t),
    (t._reactInternals = e),
    o &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function od(e, t, i, o) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(i, o),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(i, o),
    t.state !== e && ya.enqueueReplaceState(t, t.state, null);
}
function wu(e, t, i, o) {
  var s = e.stateNode;
  (s.props = i), (s.state = e.memoizedState), (s.refs = {}), Ec(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (s.context = Et(l))
    : ((l = lt(t) ? vi : Ge.current), (s.context = gr(e, l))),
    (s.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (yu(e, t, l, i), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && ya.enqueueReplaceState(s, s.state, null),
      Js(e, i, s, o),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t) {
  try {
    var i = "",
      o = t;
    do (i += r2(o)), (o = o.return);
    while (o);
    var s = i;
  } catch (l) {
    s =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Il(e, t, i) {
  return { value: e, source: null, stack: i ?? null, digest: t ?? null };
}
function xu(e, t) {
  try {
    console.error(t.value);
  } catch (i) {
    setTimeout(function () {
      throw i;
    });
  }
}
var z_ = typeof WeakMap == "function" ? WeakMap : Map;
function qm(e, t, i) {
  (i = cn(-1, i)), (i.tag = 3), (i.payload = { element: null });
  var o = t.value;
  return (
    (i.callback = function () {
      ra || ((ra = !0), (zu = o)), xu(e, t);
    }),
    i
  );
}
function Ym(e, t, i) {
  (i = cn(-1, i)), (i.tag = 3);
  var o = e.type.getDerivedStateFromError;
  if (typeof o == "function") {
    var s = t.value;
    (i.payload = function () {
      return o(s);
    }),
      (i.callback = function () {
        xu(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (i.callback = function () {
        xu(e, t),
          typeof o != "function" &&
            (Fn === null ? (Fn = new Set([this])) : Fn.add(this));
        var c = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: c !== null ? c : "",
        });
      }),
    i
  );
}
function sd(e, t, i) {
  var o = e.pingCache;
  if (o === null) {
    o = e.pingCache = new z_();
    var s = new Set();
    o.set(t, s);
  } else (s = o.get(t)), s === void 0 && ((s = new Set()), o.set(t, s));
  s.has(i) || (s.add(i), (e = V_.bind(null, e, t, i)), t.then(e, e));
}
function ad(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ld(e, t, i, o, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (i.flags |= 131072),
          (i.flags &= -52805),
          i.tag === 1 &&
            (i.alternate === null
              ? (i.tag = 17)
              : ((t = cn(-1, 1)), (t.tag = 2), bn(i, t, 1))),
          (i.lanes |= 1)),
      e);
}
var N_ = mn.ReactCurrentOwner,
  st = !1;
function Xe(e, t, i, o) {
  t.child = e === null ? Lm(t, null, i, o) : _r(t, e.child, i, o);
}
function ud(e, t, i, o, s) {
  i = i.render;
  var l = t.ref;
  return (
    Ji(t, s),
    (o = Nc(e, t, i, o, l, s)),
    (i = Rc()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        pn(e, t, s))
      : (_e && i && wc(t), (t.flags |= 1), Xe(e, t, o, s), t.child)
  );
}
function cd(e, t, i, o, s) {
  if (e === null) {
    var l = i.type;
    return typeof l == "function" &&
      !Uc(l) &&
      l.defaultProps === void 0 &&
      i.compare === null &&
      i.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Xm(e, t, l, o, s))
      : ((e = As(i.type, null, o, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & s))) {
    var c = l.memoizedProps;
    if (
      ((i = i.compare), (i = i !== null ? i : mo), i(c, o) && e.ref === t.ref)
    )
      return pn(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Hn(l, o)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Xm(e, t, i, o, s) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (mo(l, o) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = o = l), (e.lanes & s) !== 0))
        e.flags & 131072 && (st = !0);
      else return (t.lanes = e.lanes), pn(e, t, s);
  }
  return Cu(e, t, i, o, s);
}
function Jm(e, t, i) {
  var o = t.pendingProps,
    s = o.children,
    l = e !== null ? e.memoizedState : null;
  if (o.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        me(Gi, ht),
        (ht |= i);
    else {
      if (!(i & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | i : i),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          me(Gi, ht),
          (ht |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (o = l !== null ? l.baseLanes : i),
        me(Gi, ht),
        (ht |= o);
    }
  else
    l !== null ? ((o = l.baseLanes | i), (t.memoizedState = null)) : (o = i),
      me(Gi, ht),
      (ht |= o);
  return Xe(e, t, s, i), t.child;
}
function e0(e, t) {
  var i = t.ref;
  ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cu(e, t, i, o, s) {
  var l = lt(i) ? vi : Ge.current;
  return (
    (l = gr(t, l)),
    Ji(t, s),
    (i = Nc(e, t, i, o, l, s)),
    (o = Rc()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        pn(e, t, s))
      : (_e && o && wc(t), (t.flags |= 1), Xe(e, t, i, s), t.child)
  );
}
function hd(e, t, i, o, s) {
  if (lt(i)) {
    var l = !0;
    Gs(t);
  } else l = !1;
  if ((Ji(t, s), t.stateNode === null))
    Rs(e, t), Km(t, i, o), wu(t, i, o, s), (o = !0);
  else if (e === null) {
    var c = t.stateNode,
      d = t.memoizedProps;
    c.props = d;
    var f = c.context,
      m = i.contextType;
    typeof m == "object" && m !== null
      ? (m = Et(m))
      : ((m = lt(i) ? vi : Ge.current), (m = gr(t, m)));
    var y = i.getDerivedStateFromProps,
      g =
        typeof y == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
        typeof c.componentWillReceiveProps != "function") ||
      ((d !== o || f !== m) && od(t, c, o, m)),
      (Cn = !1);
    var x = t.memoizedState;
    (c.state = x),
      Js(t, o, c, s),
      (f = t.memoizedState),
      d !== o || x !== f || at.current || Cn
        ? (typeof y == "function" && (yu(t, i, y, o), (f = t.memoizedState)),
          (d = Cn || rd(t, i, d, o, x, f, m))
            ? (g ||
                (typeof c.UNSAFE_componentWillMount != "function" &&
                  typeof c.componentWillMount != "function") ||
                (typeof c.componentWillMount == "function" &&
                  c.componentWillMount(),
                typeof c.UNSAFE_componentWillMount == "function" &&
                  c.UNSAFE_componentWillMount()),
              typeof c.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = o),
              (t.memoizedState = f)),
          (c.props = o),
          (c.state = f),
          (c.context = m),
          (o = d))
        : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
          (o = !1));
  } else {
    (c = t.stateNode),
      Tm(e, t),
      (d = t.memoizedProps),
      (m = t.type === t.elementType ? d : Nt(t.type, d)),
      (c.props = m),
      (g = t.pendingProps),
      (x = c.context),
      (f = i.contextType),
      typeof f == "object" && f !== null
        ? (f = Et(f))
        : ((f = lt(i) ? vi : Ge.current), (f = gr(t, f)));
    var k = i.getDerivedStateFromProps;
    (y =
      typeof k == "function" ||
      typeof c.getSnapshotBeforeUpdate == "function") ||
      (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
        typeof c.componentWillReceiveProps != "function") ||
      ((d !== g || x !== f) && od(t, c, o, f)),
      (Cn = !1),
      (x = t.memoizedState),
      (c.state = x),
      Js(t, o, c, s);
    var M = t.memoizedState;
    d !== g || x !== M || at.current || Cn
      ? (typeof k == "function" && (yu(t, i, k, o), (M = t.memoizedState)),
        (m = Cn || rd(t, i, m, o, x, M, f) || !1)
          ? (y ||
              (typeof c.UNSAFE_componentWillUpdate != "function" &&
                typeof c.componentWillUpdate != "function") ||
              (typeof c.componentWillUpdate == "function" &&
                c.componentWillUpdate(o, M, f),
              typeof c.UNSAFE_componentWillUpdate == "function" &&
                c.UNSAFE_componentWillUpdate(o, M, f)),
            typeof c.componentDidUpdate == "function" && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof c.componentDidUpdate != "function" ||
              (d === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" ||
              (d === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = o),
            (t.memoizedState = M)),
        (c.props = o),
        (c.state = M),
        (c.context = f),
        (o = m))
      : (typeof c.componentDidUpdate != "function" ||
          (d === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 4),
        typeof c.getSnapshotBeforeUpdate != "function" ||
          (d === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 1024),
        (o = !1));
  }
  return Su(e, t, i, o, l, s);
}
function Su(e, t, i, o, s, l) {
  e0(e, t);
  var c = (t.flags & 128) !== 0;
  if (!o && !c) return s && qf(t, i, !1), pn(e, t, l);
  (o = t.stateNode), (N_.current = t);
  var d =
    c && typeof i.getDerivedStateFromError != "function" ? null : o.render();
  return (
    (t.flags |= 1),
    e !== null && c
      ? ((t.child = _r(t, e.child, null, l)), (t.child = _r(t, null, d, l)))
      : Xe(e, t, d, l),
    (t.memoizedState = o.state),
    s && qf(t, i, !0),
    t.child
  );
}
function t0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Kf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Kf(e, t.context, !1),
    Tc(e, t.containerInfo);
}
function fd(e, t, i, o, s) {
  return vr(), Cc(s), (t.flags |= 256), Xe(e, t, i, o), t.child;
}
var Pu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ku(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function n0(e, t, i) {
  var o = t.pendingProps,
    s = xe.current,
    l = !1,
    c = (t.flags & 128) !== 0,
    d;
  if (
    ((d = c) ||
      (d = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    d
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    me(xe, s & 1),
    e === null)
  )
    return (
      vu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((c = o.children),
          (e = o.fallback),
          l
            ? ((o = t.mode),
              (l = t.child),
              (c = { mode: "hidden", children: c }),
              !(o & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = c))
                : (l = Ca(c, o, 0, null)),
              (e = gi(e, o, i, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ku(i)),
              (t.memoizedState = Pu),
              e)
            : Ac(t, c))
    );
  if (((s = e.memoizedState), s !== null && ((d = s.dehydrated), d !== null)))
    return R_(e, t, c, o, d, s, i);
  if (l) {
    (l = o.fallback), (c = t.mode), (s = e.child), (d = s.sibling);
    var f = { mode: "hidden", children: o.children };
    return (
      !(c & 1) && t.child !== s
        ? ((o = t.child),
          (o.childLanes = 0),
          (o.pendingProps = f),
          (t.deletions = null))
        : ((o = Hn(s, f)), (o.subtreeFlags = s.subtreeFlags & 14680064)),
      d !== null ? (l = Hn(d, l)) : ((l = gi(l, c, i, null)), (l.flags |= 2)),
      (l.return = t),
      (o.return = t),
      (o.sibling = l),
      (t.child = o),
      (o = l),
      (l = t.child),
      (c = e.child.memoizedState),
      (c =
        c === null
          ? ku(i)
          : {
              baseLanes: c.baseLanes | i,
              cachePool: null,
              transitions: c.transitions,
            }),
      (l.memoizedState = c),
      (l.childLanes = e.childLanes & ~i),
      (t.memoizedState = Pu),
      o
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (o = Hn(l, { mode: "visible", children: o.children })),
    !(t.mode & 1) && (o.lanes = i),
    (o.return = t),
    (o.sibling = null),
    e !== null &&
      ((i = t.deletions),
      i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
    (t.child = o),
    (t.memoizedState = null),
    o
  );
}
function Ac(e, t) {
  return (
    (t = Ca({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ws(e, t, i, o) {
  return (
    o !== null && Cc(o),
    _r(t, e.child, null, i),
    (e = Ac(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function R_(e, t, i, o, s, l, c) {
  if (i)
    return t.flags & 256
      ? ((t.flags &= -257), (o = Il(Error(A(422)))), ws(e, t, c, o))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = o.fallback),
        (s = t.mode),
        (o = Ca({ mode: "visible", children: o.children }, s, 0, null)),
        (l = gi(l, s, c, null)),
        (l.flags |= 2),
        (o.return = t),
        (l.return = t),
        (o.sibling = l),
        (t.child = o),
        t.mode & 1 && _r(t, e.child, null, c),
        (t.child.memoizedState = ku(c)),
        (t.memoizedState = Pu),
        l);
  if (!(t.mode & 1)) return ws(e, t, c, null);
  if (s.data === "$!") {
    if (((o = s.nextSibling && s.nextSibling.dataset), o)) var d = o.dgst;
    return (o = d), (l = Error(A(419))), (o = Il(l, o, void 0)), ws(e, t, c, o);
  }
  if (((d = (c & e.childLanes) !== 0), st || d)) {
    if (((o = De), o !== null)) {
      switch (c & -c) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (o.suspendedLanes | c) ? 0 : s),
        s !== 0 &&
          s !== l.retryLane &&
          ((l.retryLane = s), dn(e, s), Bt(o, e, s, -1));
    }
    return Hc(), (o = Il(Error(A(421)))), ws(e, t, c, o);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Q_.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (ft = Bn(s.nextSibling)),
      (dt = t),
      (_e = !0),
      (jt = null),
      e !== null &&
        ((St[Pt++] = ln),
        (St[Pt++] = un),
        (St[Pt++] = _i),
        (ln = e.id),
        (un = e.overflow),
        (_i = t)),
      (t = Ac(t, o.children)),
      (t.flags |= 4096),
      t);
}
function dd(e, t, i) {
  e.lanes |= t;
  var o = e.alternate;
  o !== null && (o.lanes |= t), _u(e.return, t, i);
}
function jl(e, t, i, o, s) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: i,
        tailMode: s,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = o),
      (l.tail = i),
      (l.tailMode = s));
}
function i0(e, t, i) {
  var o = t.pendingProps,
    s = o.revealOrder,
    l = o.tail;
  if ((Xe(e, t, o.children, i), (o = xe.current), o & 2))
    (o = (o & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && dd(e, i, t);
        else if (e.tag === 19) dd(e, i, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    o &= 1;
  }
  if ((me(xe, o), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (i = t.child, s = null; i !== null; )
          (e = i.alternate),
            e !== null && ea(e) === null && (s = i),
            (i = i.sibling);
        (i = s),
          i === null
            ? ((s = t.child), (t.child = null))
            : ((s = i.sibling), (i.sibling = null)),
          jl(t, !1, s, i, l);
        break;
      case "backwards":
        for (i = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && ea(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = i), (i = s), (s = e);
        }
        jl(t, !0, i, null, l);
        break;
      case "together":
        jl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Rs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pn(e, t, i) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wi |= t.lanes),
    !(i & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, i = Hn(e, e.pendingProps), t.child = i, i.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (i = i.sibling = Hn(e, e.pendingProps)), (i.return = t);
    i.sibling = null;
  }
  return t.child;
}
function I_(e, t, i) {
  switch (t.tag) {
    case 3:
      t0(t), vr();
      break;
    case 5:
      Mm(t);
      break;
    case 1:
      lt(t.type) && Gs(t);
      break;
    case 4:
      Tc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var o = t.type._context,
        s = t.memoizedProps.value;
      me(Ys, o._currentValue), (o._currentValue = s);
      break;
    case 13:
      if (((o = t.memoizedState), o !== null))
        return o.dehydrated !== null
          ? (me(xe, xe.current & 1), (t.flags |= 128), null)
          : i & t.child.childLanes
          ? n0(e, t, i)
          : (me(xe, xe.current & 1),
            (e = pn(e, t, i)),
            e !== null ? e.sibling : null);
      me(xe, xe.current & 1);
      break;
    case 19:
      if (((o = (i & t.childLanes) !== 0), e.flags & 128)) {
        if (o) return i0(e, t, i);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        me(xe, xe.current),
        o)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Jm(e, t, i);
  }
  return pn(e, t, i);
}
var r0, Lu, o0, s0;
r0 = function (e, t) {
  for (var i = t.child; i !== null; ) {
    if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
    else if (i.tag !== 4 && i.child !== null) {
      (i.child.return = i), (i = i.child);
      continue;
    }
    if (i === t) break;
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === t) return;
      i = i.return;
    }
    (i.sibling.return = i.return), (i = i.sibling);
  }
};
Lu = function () {};
o0 = function (e, t, i, o) {
  var s = e.memoizedProps;
  if (s !== o) {
    (e = t.stateNode), ai(Xt.current);
    var l = null;
    switch (i) {
      case "input":
        (s = Gl(e, s)), (o = Gl(e, o)), (l = []);
        break;
      case "select":
        (s = Se({}, s, { value: void 0 })),
          (o = Se({}, o, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (s = Yl(e, s)), (o = Yl(e, o)), (l = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof o.onClick == "function" &&
          (e.onclick = Qs);
    }
    Jl(i, o);
    var c;
    i = null;
    for (m in s)
      if (!o.hasOwnProperty(m) && s.hasOwnProperty(m) && s[m] != null)
        if (m === "style") {
          var d = s[m];
          for (c in d) d.hasOwnProperty(c) && (i || (i = {}), (i[c] = ""));
        } else
          m !== "dangerouslySetInnerHTML" &&
            m !== "children" &&
            m !== "suppressContentEditableWarning" &&
            m !== "suppressHydrationWarning" &&
            m !== "autoFocus" &&
            (ao.hasOwnProperty(m)
              ? l || (l = [])
              : (l = l || []).push(m, null));
    for (m in o) {
      var f = o[m];
      if (
        ((d = s != null ? s[m] : void 0),
        o.hasOwnProperty(m) && f !== d && (f != null || d != null))
      )
        if (m === "style")
          if (d) {
            for (c in d)
              !d.hasOwnProperty(c) ||
                (f && f.hasOwnProperty(c)) ||
                (i || (i = {}), (i[c] = ""));
            for (c in f)
              f.hasOwnProperty(c) &&
                d[c] !== f[c] &&
                (i || (i = {}), (i[c] = f[c]));
          } else i || (l || (l = []), l.push(m, i)), (i = f);
        else
          m === "dangerouslySetInnerHTML"
            ? ((f = f ? f.__html : void 0),
              (d = d ? d.__html : void 0),
              f != null && d !== f && (l = l || []).push(m, f))
            : m === "children"
            ? (typeof f != "string" && typeof f != "number") ||
              (l = l || []).push(m, "" + f)
            : m !== "suppressContentEditableWarning" &&
              m !== "suppressHydrationWarning" &&
              (ao.hasOwnProperty(m)
                ? (f != null && m === "onScroll" && ge("scroll", e),
                  l || d === f || (l = []))
                : (l = l || []).push(m, f));
    }
    i && (l = l || []).push("style", i);
    var m = l;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
s0 = function (e, t, i, o) {
  i !== o && (t.flags |= 4);
};
function Vr(e, t) {
  if (!_e)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var i = null; t !== null; )
          t.alternate !== null && (i = t), (t = t.sibling);
        i === null ? (e.tail = null) : (i.sibling = null);
        break;
      case "collapsed":
        i = e.tail;
        for (var o = null; i !== null; )
          i.alternate !== null && (o = i), (i = i.sibling);
        o === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (o.sibling = null);
    }
}
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    i = 0,
    o = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (i |= s.lanes | s.childLanes),
        (o |= s.subtreeFlags & 14680064),
        (o |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (i |= s.lanes | s.childLanes),
        (o |= s.subtreeFlags),
        (o |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= o), (e.childLanes = i), t;
}
function j_(e, t, i) {
  var o = t.pendingProps;
  switch ((xc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ve(t), null;
    case 1:
      return lt(t.type) && $s(), Ve(t), null;
    case 3:
      return (
        (o = t.stateNode),
        yr(),
        ve(at),
        ve(Ge),
        Oc(),
        o.pendingContext &&
          ((o.context = o.pendingContext), (o.pendingContext = null)),
        (e === null || e.child === null) &&
          (_s(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), jt !== null && (Iu(jt), (jt = null)))),
        Lu(e, t),
        Ve(t),
        null
      );
    case 5:
      Mc(t);
      var s = ai(wo.current);
      if (((i = t.type), e !== null && t.stateNode != null))
        o0(e, t, i, o, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!o) {
          if (t.stateNode === null) throw Error(A(166));
          return Ve(t), null;
        }
        if (((e = ai(Xt.current)), _s(t))) {
          (o = t.stateNode), (i = t.type);
          var l = t.memoizedProps;
          switch (((o[qt] = t), (o[_o] = l), (e = (t.mode & 1) !== 0), i)) {
            case "dialog":
              ge("cancel", o), ge("close", o);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", o);
              break;
            case "video":
            case "audio":
              for (s = 0; s < qr.length; s++) ge(qr[s], o);
              break;
            case "source":
              ge("error", o);
              break;
            case "img":
            case "image":
            case "link":
              ge("error", o), ge("load", o);
              break;
            case "details":
              ge("toggle", o);
              break;
            case "input":
              Cf(o, l), ge("invalid", o);
              break;
            case "select":
              (o._wrapperState = { wasMultiple: !!l.multiple }),
                ge("invalid", o);
              break;
            case "textarea":
              Pf(o, l), ge("invalid", o);
          }
          Jl(i, l), (s = null);
          for (var c in l)
            if (l.hasOwnProperty(c)) {
              var d = l[c];
              c === "children"
                ? typeof d == "string"
                  ? o.textContent !== d &&
                    (l.suppressHydrationWarning !== !0 &&
                      vs(o.textContent, d, e),
                    (s = ["children", d]))
                  : typeof d == "number" &&
                    o.textContent !== "" + d &&
                    (l.suppressHydrationWarning !== !0 &&
                      vs(o.textContent, d, e),
                    (s = ["children", "" + d]))
                : ao.hasOwnProperty(c) &&
                  d != null &&
                  c === "onScroll" &&
                  ge("scroll", o);
            }
          switch (i) {
            case "input":
              us(o), Sf(o, l, !0);
              break;
            case "textarea":
              us(o), kf(o);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (o.onclick = Qs);
          }
          (o = s), (t.updateQueue = o), o !== null && (t.flags |= 4);
        } else {
          (c = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ip(i)),
            e === "http://www.w3.org/1999/xhtml"
              ? i === "script"
                ? ((e = c.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof o.is == "string"
                ? (e = c.createElement(i, { is: o.is }))
                : ((e = c.createElement(i)),
                  i === "select" &&
                    ((c = e),
                    o.multiple
                      ? (c.multiple = !0)
                      : o.size && (c.size = o.size)))
              : (e = c.createElementNS(e, i)),
            (e[qt] = t),
            (e[_o] = o),
            r0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((c = eu(i, o)), i)) {
              case "dialog":
                ge("cancel", e), ge("close", e), (s = o);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), (s = o);
                break;
              case "video":
              case "audio":
                for (s = 0; s < qr.length; s++) ge(qr[s], e);
                s = o;
                break;
              case "source":
                ge("error", e), (s = o);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", e), ge("load", e), (s = o);
                break;
              case "details":
                ge("toggle", e), (s = o);
                break;
              case "input":
                Cf(e, o), (s = Gl(e, o)), ge("invalid", e);
                break;
              case "option":
                s = o;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!o.multiple }),
                  (s = Se({}, o, { value: void 0 })),
                  ge("invalid", e);
                break;
              case "textarea":
                Pf(e, o), (s = Yl(e, o)), ge("invalid", e);
                break;
              default:
                s = o;
            }
            Jl(i, s), (d = s);
            for (l in d)
              if (d.hasOwnProperty(l)) {
                var f = d[l];
                l === "style"
                  ? Dp(e, f)
                  : l === "dangerouslySetInnerHTML"
                  ? ((f = f ? f.__html : void 0), f != null && jp(e, f))
                  : l === "children"
                  ? typeof f == "string"
                    ? (i !== "textarea" || f !== "") && lo(e, f)
                    : typeof f == "number" && lo(e, "" + f)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (ao.hasOwnProperty(l)
                      ? f != null && l === "onScroll" && ge("scroll", e)
                      : f != null && sc(e, l, f, c));
              }
            switch (i) {
              case "input":
                us(e), Sf(e, o, !1);
                break;
              case "textarea":
                us(e), kf(e);
                break;
              case "option":
                o.value != null && e.setAttribute("value", "" + Wn(o.value));
                break;
              case "select":
                (e.multiple = !!o.multiple),
                  (l = o.value),
                  l != null
                    ? Ki(e, !!o.multiple, l, !1)
                    : o.defaultValue != null &&
                      Ki(e, !!o.multiple, o.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Qs);
            }
            switch (i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
          }
          o && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) s0(e, t, e.memoizedProps, o);
      else {
        if (typeof o != "string" && t.stateNode === null) throw Error(A(166));
        if (((i = ai(wo.current)), ai(Xt.current), _s(t))) {
          if (
            ((o = t.stateNode),
            (i = t.memoizedProps),
            (o[qt] = t),
            (l = o.nodeValue !== i) && ((e = dt), e !== null))
          )
            switch (e.tag) {
              case 3:
                vs(o.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vs(o.nodeValue, i, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o)),
            (o[qt] = t),
            (t.stateNode = o);
      }
      return Ve(t), null;
    case 13:
      if (
        (ve(xe),
        (o = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (_e && ft !== null && t.mode & 1 && !(t.flags & 128))
          Pm(), vr(), (t.flags |= 98560), (l = !1);
        else if (((l = _s(t)), o !== null && o.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(A(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(A(317));
            l[qt] = t;
          } else
            vr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ve(t), (l = !1);
        } else jt !== null && (Iu(jt), (jt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = i), t)
        : ((o = o !== null),
          o !== (e !== null && e.memoizedState !== null) &&
            o &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || xe.current & 1 ? Ie === 0 && (Ie = 3) : Hc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ve(t),
          null);
    case 4:
      return (
        yr(), Lu(e, t), e === null && go(t.stateNode.containerInfo), Ve(t), null
      );
    case 10:
      return kc(t.type._context), Ve(t), null;
    case 17:
      return lt(t.type) && $s(), Ve(t), null;
    case 19:
      if ((ve(xe), (l = t.memoizedState), l === null)) return Ve(t), null;
      if (((o = (t.flags & 128) !== 0), (c = l.rendering), c === null))
        if (o) Vr(l, !1);
        else {
          if (Ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((c = ea(e)), c !== null)) {
                for (
                  t.flags |= 128,
                    Vr(l, !1),
                    o = c.updateQueue,
                    o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    o = i,
                    i = t.child;
                  i !== null;

                )
                  (l = i),
                    (e = o),
                    (l.flags &= 14680066),
                    (c = l.alternate),
                    c === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = c.childLanes),
                        (l.lanes = c.lanes),
                        (l.child = c.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = c.memoizedProps),
                        (l.memoizedState = c.memoizedState),
                        (l.updateQueue = c.updateQueue),
                        (l.type = c.type),
                        (e = c.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (i = i.sibling);
                return me(xe, (xe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Ee() > xr &&
            ((t.flags |= 128), (o = !0), Vr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!o)
          if (((e = ea(c)), e !== null)) {
            if (
              ((t.flags |= 128),
              (o = !0),
              (i = e.updateQueue),
              i !== null && ((t.updateQueue = i), (t.flags |= 4)),
              Vr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !c.alternate && !_e)
            )
              return Ve(t), null;
          } else
            2 * Ee() - l.renderingStartTime > xr &&
              i !== 1073741824 &&
              ((t.flags |= 128), (o = !0), Vr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((c.sibling = t.child), (t.child = c))
          : ((i = l.last),
            i !== null ? (i.sibling = c) : (t.child = c),
            (l.last = c));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Ee()),
          (t.sibling = null),
          (i = xe.current),
          me(xe, o ? (i & 1) | 2 : i & 1),
          t)
        : (Ve(t), null);
    case 22:
    case 23:
      return (
        Zc(),
        (o = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
        o && t.mode & 1
          ? ht & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function A_(e, t) {
  switch ((xc(t), t.tag)) {
    case 1:
      return (
        lt(t.type) && $s(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yr(),
        ve(at),
        ve(Ge),
        Oc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Mc(t), null;
    case 13:
      if (
        (ve(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        vr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ve(xe), null;
    case 4:
      return yr(), null;
    case 10:
      return kc(t.type._context), null;
    case 22:
    case 23:
      return Zc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xs = !1,
  $e = !1,
  D_ = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function $i(e, t) {
  var i = e.ref;
  if (i !== null)
    if (typeof i == "function")
      try {
        i(null);
      } catch (o) {
        ke(e, t, o);
      }
    else i.current = null;
}
function Eu(e, t, i) {
  try {
    i();
  } catch (o) {
    ke(e, t, o);
  }
}
var pd = !1;
function B_(e, t) {
  if (((cu = Us), (e = hm()), yc(e))) {
    if ("selectionStart" in e)
      var i = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        i = ((i = e.ownerDocument) && i.defaultView) || window;
        var o = i.getSelection && i.getSelection();
        if (o && o.rangeCount !== 0) {
          i = o.anchorNode;
          var s = o.anchorOffset,
            l = o.focusNode;
          o = o.focusOffset;
          try {
            i.nodeType, l.nodeType;
          } catch {
            i = null;
            break e;
          }
          var c = 0,
            d = -1,
            f = -1,
            m = 0,
            y = 0,
            g = e,
            x = null;
          t: for (;;) {
            for (
              var k;
              g !== i || (s !== 0 && g.nodeType !== 3) || (d = c + s),
                g !== l || (o !== 0 && g.nodeType !== 3) || (f = c + o),
                g.nodeType === 3 && (c += g.nodeValue.length),
                (k = g.firstChild) !== null;

            )
              (x = g), (g = k);
            for (;;) {
              if (g === e) break t;
              if (
                (x === i && ++m === s && (d = c),
                x === l && ++y === o && (f = c),
                (k = g.nextSibling) !== null)
              )
                break;
              (g = x), (x = g.parentNode);
            }
            g = k;
          }
          i = d === -1 || f === -1 ? null : { start: d, end: f };
        } else i = null;
      }
    i = i || { start: 0, end: 0 };
  } else i = null;
  for (hu = { focusedElem: e, selectionRange: i }, Us = !1, U = t; U !== null; )
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (U = e);
    else
      for (; U !== null; ) {
        t = U;
        try {
          var M = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (M !== null) {
                  var P = M.memoizedProps,
                    R = M.memoizedState,
                    C = t.stateNode,
                    v = C.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? P : Nt(t.type, P),
                      R
                    );
                  C.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (N) {
          ke(t, t.return, N);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (U = e);
          break;
        }
        U = t.return;
      }
  return (M = pd), (pd = !1), M;
}
function ro(e, t, i) {
  var o = t.updateQueue;
  if (((o = o !== null ? o.lastEffect : null), o !== null)) {
    var s = (o = o.next);
    do {
      if ((s.tag & e) === e) {
        var l = s.destroy;
        (s.destroy = void 0), l !== void 0 && Eu(t, i, l);
      }
      s = s.next;
    } while (s !== o);
  }
}
function wa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var i = (t = t.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.create;
        i.destroy = o();
      }
      i = i.next;
    } while (i !== t);
  }
}
function Tu(e) {
  var t = e.ref;
  if (t !== null) {
    var i = e.stateNode;
    switch (e.tag) {
      case 5:
        e = i;
        break;
      default:
        e = i;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function a0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), a0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qt], delete t[_o], delete t[pu], delete t[w_], delete t[x_])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function l0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function md(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || l0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Mu(e, t, i) {
  var o = e.tag;
  if (o === 5 || o === 6)
    (e = e.stateNode),
      t
        ? i.nodeType === 8
          ? i.parentNode.insertBefore(e, t)
          : i.insertBefore(e, t)
        : (i.nodeType === 8
            ? ((t = i.parentNode), t.insertBefore(e, i))
            : ((t = i), t.appendChild(e)),
          (i = i._reactRootContainer),
          i != null || t.onclick !== null || (t.onclick = Qs));
  else if (o !== 4 && ((e = e.child), e !== null))
    for (Mu(e, t, i), e = e.sibling; e !== null; ) Mu(e, t, i), (e = e.sibling);
}
function Ou(e, t, i) {
  var o = e.tag;
  if (o === 5 || o === 6)
    (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
  else if (o !== 4 && ((e = e.child), e !== null))
    for (Ou(e, t, i), e = e.sibling; e !== null; ) Ou(e, t, i), (e = e.sibling);
}
var Fe = null,
  It = !1;
function yn(e, t, i) {
  for (i = i.child; i !== null; ) u0(e, t, i), (i = i.sibling);
}
function u0(e, t, i) {
  if (Yt && typeof Yt.onCommitFiberUnmount == "function")
    try {
      Yt.onCommitFiberUnmount(fa, i);
    } catch {}
  switch (i.tag) {
    case 5:
      $e || $i(i, t);
    case 6:
      var o = Fe,
        s = It;
      (Fe = null),
        yn(e, t, i),
        (Fe = o),
        (It = s),
        Fe !== null &&
          (It
            ? ((e = Fe),
              (i = i.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
            : Fe.removeChild(i.stateNode));
      break;
    case 18:
      Fe !== null &&
        (It
          ? ((e = Fe),
            (i = i.stateNode),
            e.nodeType === 8
              ? Tl(e.parentNode, i)
              : e.nodeType === 1 && Tl(e, i),
            fo(e))
          : Tl(Fe, i.stateNode));
      break;
    case 4:
      (o = Fe),
        (s = It),
        (Fe = i.stateNode.containerInfo),
        (It = !0),
        yn(e, t, i),
        (Fe = o),
        (It = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !$e &&
        ((o = i.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
      ) {
        s = o = o.next;
        do {
          var l = s,
            c = l.destroy;
          (l = l.tag),
            c !== void 0 && (l & 2 || l & 4) && Eu(i, t, c),
            (s = s.next);
        } while (s !== o);
      }
      yn(e, t, i);
      break;
    case 1:
      if (
        !$e &&
        ($i(i, t),
        (o = i.stateNode),
        typeof o.componentWillUnmount == "function")
      )
        try {
          (o.props = i.memoizedProps),
            (o.state = i.memoizedState),
            o.componentWillUnmount();
        } catch (d) {
          ke(i, t, d);
        }
      yn(e, t, i);
      break;
    case 21:
      yn(e, t, i);
      break;
    case 22:
      i.mode & 1
        ? (($e = (o = $e) || i.memoizedState !== null), yn(e, t, i), ($e = o))
        : yn(e, t, i);
      break;
    default:
      yn(e, t, i);
  }
}
function gd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var i = e.stateNode;
    i === null && (i = e.stateNode = new D_()),
      t.forEach(function (o) {
        var s = $_.bind(null, e, o);
        i.has(o) || (i.add(o), o.then(s, s));
      });
  }
}
function zt(e, t) {
  var i = t.deletions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var s = i[o];
      try {
        var l = e,
          c = t,
          d = c;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              (Fe = d.stateNode), (It = !1);
              break e;
            case 3:
              (Fe = d.stateNode.containerInfo), (It = !0);
              break e;
            case 4:
              (Fe = d.stateNode.containerInfo), (It = !0);
              break e;
          }
          d = d.return;
        }
        if (Fe === null) throw Error(A(160));
        u0(l, c, s), (Fe = null), (It = !1);
        var f = s.alternate;
        f !== null && (f.return = null), (s.return = null);
      } catch (m) {
        ke(s, t, m);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) c0(t, e), (t = t.sibling);
}
function c0(e, t) {
  var i = e.alternate,
    o = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((zt(t, e), Wt(e), o & 4)) {
        try {
          ro(3, e, e.return), wa(3, e);
        } catch (P) {
          ke(e, e.return, P);
        }
        try {
          ro(5, e, e.return);
        } catch (P) {
          ke(e, e.return, P);
        }
      }
      break;
    case 1:
      zt(t, e), Wt(e), o & 512 && i !== null && $i(i, i.return);
      break;
    case 5:
      if (
        (zt(t, e),
        Wt(e),
        o & 512 && i !== null && $i(i, i.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          lo(s, "");
        } catch (P) {
          ke(e, e.return, P);
        }
      }
      if (o & 4 && ((s = e.stateNode), s != null)) {
        var l = e.memoizedProps,
          c = i !== null ? i.memoizedProps : l,
          d = e.type,
          f = e.updateQueue;
        if (((e.updateQueue = null), f !== null))
          try {
            d === "input" && l.type === "radio" && l.name != null && Np(s, l),
              eu(d, c);
            var m = eu(d, l);
            for (c = 0; c < f.length; c += 2) {
              var y = f[c],
                g = f[c + 1];
              y === "style"
                ? Dp(s, g)
                : y === "dangerouslySetInnerHTML"
                ? jp(s, g)
                : y === "children"
                ? lo(s, g)
                : sc(s, y, g, m);
            }
            switch (d) {
              case "input":
                Kl(s, l);
                break;
              case "textarea":
                Rp(s, l);
                break;
              case "select":
                var x = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!l.multiple;
                var k = l.value;
                k != null
                  ? Ki(s, !!l.multiple, k, !1)
                  : x !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Ki(s, !!l.multiple, l.defaultValue, !0)
                      : Ki(s, !!l.multiple, l.multiple ? [] : "", !1));
            }
            s[_o] = l;
          } catch (P) {
            ke(e, e.return, P);
          }
      }
      break;
    case 6:
      if ((zt(t, e), Wt(e), o & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (s = e.stateNode), (l = e.memoizedProps);
        try {
          s.nodeValue = l;
        } catch (P) {
          ke(e, e.return, P);
        }
      }
      break;
    case 3:
      if (
        (zt(t, e), Wt(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
      )
        try {
          fo(t.containerInfo);
        } catch (P) {
          ke(e, e.return, P);
        }
      break;
    case 4:
      zt(t, e), Wt(e);
      break;
    case 13:
      zt(t, e),
        Wt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((l = s.memoizedState !== null),
          (s.stateNode.isHidden = l),
          !l ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (bc = Ee())),
        o & 4 && gd(e);
      break;
    case 22:
      if (
        ((y = i !== null && i.memoizedState !== null),
        e.mode & 1 ? (($e = (m = $e) || y), zt(t, e), ($e = m)) : zt(t, e),
        Wt(e),
        o & 8192)
      ) {
        if (
          ((m = e.memoizedState !== null),
          (e.stateNode.isHidden = m) && !y && e.mode & 1)
        )
          for (U = e, y = e.child; y !== null; ) {
            for (g = U = y; U !== null; ) {
              switch (((x = U), (k = x.child), x.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ro(4, x, x.return);
                  break;
                case 1:
                  $i(x, x.return);
                  var M = x.stateNode;
                  if (typeof M.componentWillUnmount == "function") {
                    (o = x), (i = x.return);
                    try {
                      (t = o),
                        (M.props = t.memoizedProps),
                        (M.state = t.memoizedState),
                        M.componentWillUnmount();
                    } catch (P) {
                      ke(o, i, P);
                    }
                  }
                  break;
                case 5:
                  $i(x, x.return);
                  break;
                case 22:
                  if (x.memoizedState !== null) {
                    _d(g);
                    continue;
                  }
              }
              k !== null ? ((k.return = x), (U = k)) : _d(g);
            }
            y = y.sibling;
          }
        e: for (y = null, g = e; ; ) {
          if (g.tag === 5) {
            if (y === null) {
              y = g;
              try {
                (s = g.stateNode),
                  m
                    ? ((l = s.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((d = g.stateNode),
                      (f = g.memoizedProps.style),
                      (c =
                        f != null && f.hasOwnProperty("display")
                          ? f.display
                          : null),
                      (d.style.display = Ap("display", c)));
              } catch (P) {
                ke(e, e.return, P);
              }
            }
          } else if (g.tag === 6) {
            if (y === null)
              try {
                g.stateNode.nodeValue = m ? "" : g.memoizedProps;
              } catch (P) {
                ke(e, e.return, P);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            y === g && (y = null), (g = g.return);
          }
          y === g && (y = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      zt(t, e), Wt(e), o & 4 && gd(e);
      break;
    case 21:
      break;
    default:
      zt(t, e), Wt(e);
  }
}
function Wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var i = e.return; i !== null; ) {
          if (l0(i)) {
            var o = i;
            break e;
          }
          i = i.return;
        }
        throw Error(A(160));
      }
      switch (o.tag) {
        case 5:
          var s = o.stateNode;
          o.flags & 32 && (lo(s, ""), (o.flags &= -33));
          var l = md(e);
          Ou(e, l, s);
          break;
        case 3:
        case 4:
          var c = o.stateNode.containerInfo,
            d = md(e);
          Mu(e, d, c);
          break;
        default:
          throw Error(A(161));
      }
    } catch (f) {
      ke(e, e.return, f);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function b_(e, t, i) {
  (U = e), h0(e);
}
function h0(e, t, i) {
  for (var o = (e.mode & 1) !== 0; U !== null; ) {
    var s = U,
      l = s.child;
    if (s.tag === 22 && o) {
      var c = s.memoizedState !== null || xs;
      if (!c) {
        var d = s.alternate,
          f = (d !== null && d.memoizedState !== null) || $e;
        d = xs;
        var m = $e;
        if (((xs = c), ($e = f) && !m))
          for (U = s; U !== null; )
            (c = U),
              (f = c.child),
              c.tag === 22 && c.memoizedState !== null
                ? yd(s)
                : f !== null
                ? ((f.return = c), (U = f))
                : yd(s);
        for (; l !== null; ) (U = l), h0(l), (l = l.sibling);
        (U = s), (xs = d), ($e = m);
      }
      vd(e);
    } else
      s.subtreeFlags & 8772 && l !== null ? ((l.return = s), (U = l)) : vd(e);
  }
}
function vd(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var i = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              $e || wa(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !$e)
                if (i === null) o.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? i.memoizedProps
                      : Nt(t.type, i.memoizedProps);
                  o.componentDidUpdate(
                    s,
                    i.memoizedState,
                    o.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && td(t, l, o);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (((i = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      i = t.child.stateNode;
                      break;
                    case 1:
                      i = t.child.stateNode;
                  }
                td(t, c, i);
              }
              break;
            case 5:
              var d = t.stateNode;
              if (i === null && t.flags & 4) {
                i = d;
                var f = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    f.autoFocus && i.focus();
                    break;
                  case "img":
                    f.src && (i.src = f.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var m = t.alternate;
                if (m !== null) {
                  var y = m.memoizedState;
                  if (y !== null) {
                    var g = y.dehydrated;
                    g !== null && fo(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        $e || (t.flags & 512 && Tu(t));
      } catch (x) {
        ke(t, t.return, x);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (((i = t.sibling), i !== null)) {
      (i.return = t.return), (U = i);
      break;
    }
    U = t.return;
  }
}
function _d(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (U = i);
      break;
    }
    U = t.return;
  }
}
function yd(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var i = t.return;
          try {
            wa(4, t);
          } catch (f) {
            ke(t, i, f);
          }
          break;
        case 1:
          var o = t.stateNode;
          if (typeof o.componentDidMount == "function") {
            var s = t.return;
            try {
              o.componentDidMount();
            } catch (f) {
              ke(t, s, f);
            }
          }
          var l = t.return;
          try {
            Tu(t);
          } catch (f) {
            ke(t, l, f);
          }
          break;
        case 5:
          var c = t.return;
          try {
            Tu(t);
          } catch (f) {
            ke(t, c, f);
          }
      }
    } catch (f) {
      ke(t, t.return, f);
    }
    if (t === e) {
      U = null;
      break;
    }
    var d = t.sibling;
    if (d !== null) {
      (d.return = t.return), (U = d);
      break;
    }
    U = t.return;
  }
}
var F_ = Math.ceil,
  ia = mn.ReactCurrentDispatcher,
  Dc = mn.ReactCurrentOwner,
  Lt = mn.ReactCurrentBatchConfig,
  le = 0,
  De = null,
  Oe = null,
  He = 0,
  ht = 0,
  Gi = $n(0),
  Ie = 0,
  Po = null,
  wi = 0,
  xa = 0,
  Bc = 0,
  oo = null,
  ot = null,
  bc = 0,
  xr = 1 / 0,
  sn = null,
  ra = !1,
  zu = null,
  Fn = null,
  Cs = !1,
  Rn = null,
  oa = 0,
  so = 0,
  Nu = null,
  Is = -1,
  js = 0;
function Je() {
  return le & 6 ? Ee() : Is !== -1 ? Is : (Is = Ee());
}
function Zn(e) {
  return e.mode & 1
    ? le & 2 && He !== 0
      ? He & -He
      : S_.transition !== null
      ? (js === 0 && (js = Kp()), js)
      : ((e = fe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : nm(e.type))),
        e)
    : 1;
}
function Bt(e, t, i, o) {
  if (50 < so) throw ((so = 0), (Nu = null), Error(A(185)));
  Io(e, i, o),
    (!(le & 2) || e !== De) &&
      (e === De && (!(le & 2) && (xa |= i), Ie === 4 && Pn(e, He)),
      ut(e, o),
      i === 1 && le === 0 && !(t.mode & 1) && ((xr = Ee() + 500), va && Gn()));
}
function ut(e, t) {
  var i = e.callbackNode;
  S2(e, t);
  var o = Hs(e, e === De ? He : 0);
  if (o === 0)
    i !== null && Tf(i), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = o & -o), e.callbackPriority !== t)) {
    if ((i != null && Tf(i), t === 1))
      e.tag === 0 ? C_(wd.bind(null, e)) : xm(wd.bind(null, e)),
        __(function () {
          !(le & 6) && Gn();
        }),
        (i = null);
    else {
      switch (qp(o)) {
        case 1:
          i = hc;
          break;
        case 4:
          i = $p;
          break;
        case 16:
          i = Zs;
          break;
        case 536870912:
          i = Gp;
          break;
        default:
          i = Zs;
      }
      i = y0(i, f0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = i);
  }
}
function f0(e, t) {
  if (((Is = -1), (js = 0), le & 6)) throw Error(A(327));
  var i = e.callbackNode;
  if (er() && e.callbackNode !== i) return null;
  var o = Hs(e, e === De ? He : 0);
  if (o === 0) return null;
  if (o & 30 || o & e.expiredLanes || t) t = sa(e, o);
  else {
    t = o;
    var s = le;
    le |= 2;
    var l = p0();
    (De !== e || He !== t) && ((sn = null), (xr = Ee() + 500), mi(e, t));
    do
      try {
        U_();
        break;
      } catch (d) {
        d0(e, d);
      }
    while (!0);
    Pc(),
      (ia.current = l),
      (le = s),
      Oe !== null ? (t = 0) : ((De = null), (He = 0), (t = Ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = ou(e)), s !== 0 && ((o = s), (t = Ru(e, s)))), t === 1)
    )
      throw ((i = Po), mi(e, 0), Pn(e, o), ut(e, Ee()), i);
    if (t === 6) Pn(e, o);
    else {
      if (
        ((s = e.current.alternate),
        !(o & 30) &&
          !Z_(s) &&
          ((t = sa(e, o)),
          t === 2 && ((l = ou(e)), l !== 0 && ((o = l), (t = Ru(e, l)))),
          t === 1))
      )
        throw ((i = Po), mi(e, 0), Pn(e, o), ut(e, Ee()), i);
      switch (((e.finishedWork = s), (e.finishedLanes = o), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          ii(e, ot, sn);
          break;
        case 3:
          if (
            (Pn(e, o), (o & 130023424) === o && ((t = bc + 500 - Ee()), 10 < t))
          ) {
            if (Hs(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & o) !== o)) {
              Je(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = du(ii.bind(null, e, ot, sn), t);
            break;
          }
          ii(e, ot, sn);
          break;
        case 4:
          if ((Pn(e, o), (o & 4194240) === o)) break;
          for (t = e.eventTimes, s = -1; 0 < o; ) {
            var c = 31 - Dt(o);
            (l = 1 << c), (c = t[c]), c > s && (s = c), (o &= ~l);
          }
          if (
            ((o = s),
            (o = Ee() - o),
            (o =
              (120 > o
                ? 120
                : 480 > o
                ? 480
                : 1080 > o
                ? 1080
                : 1920 > o
                ? 1920
                : 3e3 > o
                ? 3e3
                : 4320 > o
                ? 4320
                : 1960 * F_(o / 1960)) - o),
            10 < o)
          ) {
            e.timeoutHandle = du(ii.bind(null, e, ot, sn), o);
            break;
          }
          ii(e, ot, sn);
          break;
        case 5:
          ii(e, ot, sn);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return ut(e, Ee()), e.callbackNode === i ? f0.bind(null, e) : null;
}
function Ru(e, t) {
  var i = oo;
  return (
    e.current.memoizedState.isDehydrated && (mi(e, t).flags |= 256),
    (e = sa(e, t)),
    e !== 2 && ((t = ot), (ot = i), t !== null && Iu(t)),
    e
  );
}
function Iu(e) {
  ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function Z_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var i = t.updateQueue;
      if (i !== null && ((i = i.stores), i !== null))
        for (var o = 0; o < i.length; o++) {
          var s = i[o],
            l = s.getSnapshot;
          s = s.value;
          try {
            if (!bt(l(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
      (i.return = t), (t = i);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Pn(e, t) {
  for (
    t &= ~Bc,
      t &= ~xa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var i = 31 - Dt(t),
      o = 1 << i;
    (e[i] = -1), (t &= ~o);
  }
}
function wd(e) {
  if (le & 6) throw Error(A(327));
  er();
  var t = Hs(e, 0);
  if (!(t & 1)) return ut(e, Ee()), null;
  var i = sa(e, t);
  if (e.tag !== 0 && i === 2) {
    var o = ou(e);
    o !== 0 && ((t = o), (i = Ru(e, o)));
  }
  if (i === 1) throw ((i = Po), mi(e, 0), Pn(e, t), ut(e, Ee()), i);
  if (i === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ii(e, ot, sn),
    ut(e, Ee()),
    null
  );
}
function Fc(e, t) {
  var i = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    (le = i), le === 0 && ((xr = Ee() + 500), va && Gn());
  }
}
function xi(e) {
  Rn !== null && Rn.tag === 0 && !(le & 6) && er();
  var t = le;
  le |= 1;
  var i = Lt.transition,
    o = fe;
  try {
    if (((Lt.transition = null), (fe = 1), e)) return e();
  } finally {
    (fe = o), (Lt.transition = i), (le = t), !(le & 6) && Gn();
  }
}
function Zc() {
  (ht = Gi.current), ve(Gi);
}
function mi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var i = e.timeoutHandle;
  if ((i !== -1 && ((e.timeoutHandle = -1), v_(i)), Oe !== null))
    for (i = Oe.return; i !== null; ) {
      var o = i;
      switch ((xc(o), o.tag)) {
        case 1:
          (o = o.type.childContextTypes), o != null && $s();
          break;
        case 3:
          yr(), ve(at), ve(Ge), Oc();
          break;
        case 5:
          Mc(o);
          break;
        case 4:
          yr();
          break;
        case 13:
          ve(xe);
          break;
        case 19:
          ve(xe);
          break;
        case 10:
          kc(o.type._context);
          break;
        case 22:
        case 23:
          Zc();
      }
      i = i.return;
    }
  if (
    ((De = e),
    (Oe = e = Hn(e.current, null)),
    (He = ht = t),
    (Ie = 0),
    (Po = null),
    (Bc = xa = wi = 0),
    (ot = oo = null),
    si !== null)
  ) {
    for (t = 0; t < si.length; t++)
      if (((i = si[t]), (o = i.interleaved), o !== null)) {
        i.interleaved = null;
        var s = o.next,
          l = i.pending;
        if (l !== null) {
          var c = l.next;
          (l.next = s), (o.next = c);
        }
        i.pending = o;
      }
    si = null;
  }
  return e;
}
function d0(e, t) {
  do {
    var i = Oe;
    try {
      if ((Pc(), (zs.current = na), ta)) {
        for (var o = Ce.memoizedState; o !== null; ) {
          var s = o.queue;
          s !== null && (s.pending = null), (o = o.next);
        }
        ta = !1;
      }
      if (
        ((yi = 0),
        (Ae = Re = Ce = null),
        (io = !1),
        (xo = 0),
        (Dc.current = null),
        i === null || i.return === null)
      ) {
        (Ie = 1), (Po = t), (Oe = null);
        break;
      }
      e: {
        var l = e,
          c = i.return,
          d = i,
          f = t;
        if (
          ((t = He),
          (d.flags |= 32768),
          f !== null && typeof f == "object" && typeof f.then == "function")
        ) {
          var m = f,
            y = d,
            g = y.tag;
          if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var x = y.alternate;
            x
              ? ((y.updateQueue = x.updateQueue),
                (y.memoizedState = x.memoizedState),
                (y.lanes = x.lanes))
              : ((y.updateQueue = null), (y.memoizedState = null));
          }
          var k = ad(c);
          if (k !== null) {
            (k.flags &= -257),
              ld(k, c, d, l, t),
              k.mode & 1 && sd(l, m, t),
              (t = k),
              (f = m);
            var M = t.updateQueue;
            if (M === null) {
              var P = new Set();
              P.add(f), (t.updateQueue = P);
            } else M.add(f);
            break e;
          } else {
            if (!(t & 1)) {
              sd(l, m, t), Hc();
              break e;
            }
            f = Error(A(426));
          }
        } else if (_e && d.mode & 1) {
          var R = ad(c);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              ld(R, c, d, l, t),
              Cc(wr(f, d));
            break e;
          }
        }
        (l = f = wr(f, d)),
          Ie !== 4 && (Ie = 2),
          oo === null ? (oo = [l]) : oo.push(l),
          (l = c);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var C = qm(l, f, t);
              ed(l, C);
              break e;
            case 1:
              d = f;
              var v = l.type,
                w = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (Fn === null || !Fn.has(w))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var N = Ym(l, d, t);
                ed(l, N);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      g0(i);
    } catch (D) {
      (t = D), Oe === i && i !== null && (Oe = i = i.return);
      continue;
    }
    break;
  } while (!0);
}
function p0() {
  var e = ia.current;
  return (ia.current = na), e === null ? na : e;
}
function Hc() {
  (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4),
    De === null || (!(wi & 268435455) && !(xa & 268435455)) || Pn(De, He);
}
function sa(e, t) {
  var i = le;
  le |= 2;
  var o = p0();
  (De !== e || He !== t) && ((sn = null), mi(e, t));
  do
    try {
      H_();
      break;
    } catch (s) {
      d0(e, s);
    }
  while (!0);
  if ((Pc(), (le = i), (ia.current = o), Oe !== null)) throw Error(A(261));
  return (De = null), (He = 0), Ie;
}
function H_() {
  for (; Oe !== null; ) m0(Oe);
}
function U_() {
  for (; Oe !== null && !p2(); ) m0(Oe);
}
function m0(e) {
  var t = _0(e.alternate, e, ht);
  (e.memoizedProps = e.pendingProps),
    t === null ? g0(e) : (Oe = t),
    (Dc.current = null);
}
function g0(e) {
  var t = e;
  do {
    var i = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((i = A_(i, t)), i !== null)) {
        (i.flags &= 32767), (Oe = i);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ie = 6), (Oe = null);
        return;
      }
    } else if (((i = j_(i, t, ht)), i !== null)) {
      Oe = i;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Oe = t;
      return;
    }
    Oe = t = e;
  } while (t !== null);
  Ie === 0 && (Ie = 5);
}
function ii(e, t, i) {
  var o = fe,
    s = Lt.transition;
  try {
    (Lt.transition = null), (fe = 1), W_(e, t, i, o);
  } finally {
    (Lt.transition = s), (fe = o);
  }
  return null;
}
function W_(e, t, i, o) {
  do er();
  while (Rn !== null);
  if (le & 6) throw Error(A(327));
  i = e.finishedWork;
  var s = e.finishedLanes;
  if (i === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = i.lanes | i.childLanes;
  if (
    (P2(e, l),
    e === De && ((Oe = De = null), (He = 0)),
    (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
      Cs ||
      ((Cs = !0),
      y0(Zs, function () {
        return er(), null;
      })),
    (l = (i.flags & 15990) !== 0),
    i.subtreeFlags & 15990 || l)
  ) {
    (l = Lt.transition), (Lt.transition = null);
    var c = fe;
    fe = 1;
    var d = le;
    (le |= 4),
      (Dc.current = null),
      B_(e, i),
      c0(i, e),
      c_(hu),
      (Us = !!cu),
      (hu = cu = null),
      (e.current = i),
      b_(i),
      m2(),
      (le = d),
      (fe = c),
      (Lt.transition = l);
  } else e.current = i;
  if (
    (Cs && ((Cs = !1), (Rn = e), (oa = s)),
    (l = e.pendingLanes),
    l === 0 && (Fn = null),
    _2(i.stateNode),
    ut(e, Ee()),
    t !== null)
  )
    for (o = e.onRecoverableError, i = 0; i < t.length; i++)
      (s = t[i]), o(s.value, { componentStack: s.stack, digest: s.digest });
  if (ra) throw ((ra = !1), (e = zu), (zu = null), e);
  return (
    oa & 1 && e.tag !== 0 && er(),
    (l = e.pendingLanes),
    l & 1 ? (e === Nu ? so++ : ((so = 0), (Nu = e))) : (so = 0),
    Gn(),
    null
  );
}
function er() {
  if (Rn !== null) {
    var e = qp(oa),
      t = Lt.transition,
      i = fe;
    try {
      if (((Lt.transition = null), (fe = 16 > e ? 16 : e), Rn === null))
        var o = !1;
      else {
        if (((e = Rn), (Rn = null), (oa = 0), le & 6)) throw Error(A(331));
        var s = le;
        for (le |= 4, U = e.current; U !== null; ) {
          var l = U,
            c = l.child;
          if (U.flags & 16) {
            var d = l.deletions;
            if (d !== null) {
              for (var f = 0; f < d.length; f++) {
                var m = d[f];
                for (U = m; U !== null; ) {
                  var y = U;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ro(8, y, l);
                  }
                  var g = y.child;
                  if (g !== null) (g.return = y), (U = g);
                  else
                    for (; U !== null; ) {
                      y = U;
                      var x = y.sibling,
                        k = y.return;
                      if ((a0(y), y === m)) {
                        U = null;
                        break;
                      }
                      if (x !== null) {
                        (x.return = k), (U = x);
                        break;
                      }
                      U = k;
                    }
                }
              }
              var M = l.alternate;
              if (M !== null) {
                var P = M.child;
                if (P !== null) {
                  M.child = null;
                  do {
                    var R = P.sibling;
                    (P.sibling = null), (P = R);
                  } while (P !== null);
                }
              }
              U = l;
            }
          }
          if (l.subtreeFlags & 2064 && c !== null) (c.return = l), (U = c);
          else
            e: for (; U !== null; ) {
              if (((l = U), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ro(9, l, l.return);
                }
              var C = l.sibling;
              if (C !== null) {
                (C.return = l.return), (U = C);
                break e;
              }
              U = l.return;
            }
        }
        var v = e.current;
        for (U = v; U !== null; ) {
          c = U;
          var w = c.child;
          if (c.subtreeFlags & 2064 && w !== null) (w.return = c), (U = w);
          else
            e: for (c = v; U !== null; ) {
              if (((d = U), d.flags & 2048))
                try {
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wa(9, d);
                  }
                } catch (D) {
                  ke(d, d.return, D);
                }
              if (d === c) {
                U = null;
                break e;
              }
              var N = d.sibling;
              if (N !== null) {
                (N.return = d.return), (U = N);
                break e;
              }
              U = d.return;
            }
        }
        if (
          ((le = s), Gn(), Yt && typeof Yt.onPostCommitFiberRoot == "function")
        )
          try {
            Yt.onPostCommitFiberRoot(fa, e);
          } catch {}
        o = !0;
      }
      return o;
    } finally {
      (fe = i), (Lt.transition = t);
    }
  }
  return !1;
}
function xd(e, t, i) {
  (t = wr(i, t)),
    (t = qm(e, t, 1)),
    (e = bn(e, t, 1)),
    (t = Je()),
    e !== null && (Io(e, 1, t), ut(e, t));
}
function ke(e, t, i) {
  if (e.tag === 3) xd(e, e, i);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xd(t, e, i);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof o.componentDidCatch == "function" &&
            (Fn === null || !Fn.has(o)))
        ) {
          (e = wr(i, e)),
            (e = Ym(t, e, 1)),
            (t = bn(t, e, 1)),
            (e = Je()),
            t !== null && (Io(t, 1, e), ut(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function V_(e, t, i) {
  var o = e.pingCache;
  o !== null && o.delete(t),
    (t = Je()),
    (e.pingedLanes |= e.suspendedLanes & i),
    De === e &&
      (He & i) === i &&
      (Ie === 4 || (Ie === 3 && (He & 130023424) === He && 500 > Ee() - bc)
        ? mi(e, 0)
        : (Bc |= i)),
    ut(e, t);
}
function v0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = fs), (fs <<= 1), !(fs & 130023424) && (fs = 4194304))
      : (t = 1));
  var i = Je();
  (e = dn(e, t)), e !== null && (Io(e, t, i), ut(e, i));
}
function Q_(e) {
  var t = e.memoizedState,
    i = 0;
  t !== null && (i = t.retryLane), v0(e, i);
}
function $_(e, t) {
  var i = 0;
  switch (e.tag) {
    case 13:
      var o = e.stateNode,
        s = e.memoizedState;
      s !== null && (i = s.retryLane);
      break;
    case 19:
      o = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  o !== null && o.delete(t), v0(e, i);
}
var _0;
_0 = function (e, t, i) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || at.current) st = !0;
    else {
      if (!(e.lanes & i) && !(t.flags & 128)) return (st = !1), I_(e, t, i);
      st = !!(e.flags & 131072);
    }
  else (st = !1), _e && t.flags & 1048576 && Cm(t, qs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var o = t.type;
      Rs(e, t), (e = t.pendingProps);
      var s = gr(t, Ge.current);
      Ji(t, i), (s = Nc(null, t, o, e, s, i));
      var l = Rc();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            lt(o) ? ((l = !0), Gs(t)) : (l = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Ec(t),
            (s.updater = ya),
            (t.stateNode = s),
            (s._reactInternals = t),
            wu(t, o, e, i),
            (t = Su(null, t, o, !0, l, i)))
          : ((t.tag = 0), _e && l && wc(t), Xe(null, t, s, i), (t = t.child)),
        t
      );
    case 16:
      o = t.elementType;
      e: {
        switch (
          (Rs(e, t),
          (e = t.pendingProps),
          (s = o._init),
          (o = s(o._payload)),
          (t.type = o),
          (s = t.tag = K_(o)),
          (e = Nt(o, e)),
          s)
        ) {
          case 0:
            t = Cu(null, t, o, e, i);
            break e;
          case 1:
            t = hd(null, t, o, e, i);
            break e;
          case 11:
            t = ud(null, t, o, e, i);
            break e;
          case 14:
            t = cd(null, t, o, Nt(o.type, e), i);
            break e;
        }
        throw Error(A(306, o, ""));
      }
      return t;
    case 0:
      return (
        (o = t.type),
        (s = t.pendingProps),
        (s = t.elementType === o ? s : Nt(o, s)),
        Cu(e, t, o, s, i)
      );
    case 1:
      return (
        (o = t.type),
        (s = t.pendingProps),
        (s = t.elementType === o ? s : Nt(o, s)),
        hd(e, t, o, s, i)
      );
    case 3:
      e: {
        if ((t0(t), e === null)) throw Error(A(387));
        (o = t.pendingProps),
          (l = t.memoizedState),
          (s = l.element),
          Tm(e, t),
          Js(t, o, null, i);
        var c = t.memoizedState;
        if (((o = c.element), l.isDehydrated))
          if (
            ((l = {
              element: o,
              isDehydrated: !1,
              cache: c.cache,
              pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
              transitions: c.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (s = wr(Error(A(423)), t)), (t = fd(e, t, o, i, s));
            break e;
          } else if (o !== s) {
            (s = wr(Error(A(424)), t)), (t = fd(e, t, o, i, s));
            break e;
          } else
            for (
              ft = Bn(t.stateNode.containerInfo.firstChild),
                dt = t,
                _e = !0,
                jt = null,
                i = Lm(t, null, o, i),
                t.child = i;
              i;

            )
              (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
        else {
          if ((vr(), o === s)) {
            t = pn(e, t, i);
            break e;
          }
          Xe(e, t, o, i);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Mm(t),
        e === null && vu(t),
        (o = t.type),
        (s = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (c = s.children),
        fu(o, s) ? (c = null) : l !== null && fu(o, l) && (t.flags |= 32),
        e0(e, t),
        Xe(e, t, c, i),
        t.child
      );
    case 6:
      return e === null && vu(t), null;
    case 13:
      return n0(e, t, i);
    case 4:
      return (
        Tc(t, t.stateNode.containerInfo),
        (o = t.pendingProps),
        e === null ? (t.child = _r(t, null, o, i)) : Xe(e, t, o, i),
        t.child
      );
    case 11:
      return (
        (o = t.type),
        (s = t.pendingProps),
        (s = t.elementType === o ? s : Nt(o, s)),
        ud(e, t, o, s, i)
      );
    case 7:
      return Xe(e, t, t.pendingProps, i), t.child;
    case 8:
      return Xe(e, t, t.pendingProps.children, i), t.child;
    case 12:
      return Xe(e, t, t.pendingProps.children, i), t.child;
    case 10:
      e: {
        if (
          ((o = t.type._context),
          (s = t.pendingProps),
          (l = t.memoizedProps),
          (c = s.value),
          me(Ys, o._currentValue),
          (o._currentValue = c),
          l !== null)
        )
          if (bt(l.value, c)) {
            if (l.children === s.children && !at.current) {
              t = pn(e, t, i);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var d = l.dependencies;
              if (d !== null) {
                c = l.child;
                for (var f = d.firstContext; f !== null; ) {
                  if (f.context === o) {
                    if (l.tag === 1) {
                      (f = cn(-1, i & -i)), (f.tag = 2);
                      var m = l.updateQueue;
                      if (m !== null) {
                        m = m.shared;
                        var y = m.pending;
                        y === null
                          ? (f.next = f)
                          : ((f.next = y.next), (y.next = f)),
                          (m.pending = f);
                      }
                    }
                    (l.lanes |= i),
                      (f = l.alternate),
                      f !== null && (f.lanes |= i),
                      _u(l.return, i, t),
                      (d.lanes |= i);
                    break;
                  }
                  f = f.next;
                }
              } else if (l.tag === 10) c = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((c = l.return), c === null)) throw Error(A(341));
                (c.lanes |= i),
                  (d = c.alternate),
                  d !== null && (d.lanes |= i),
                  _u(c, i, t),
                  (c = l.sibling);
              } else c = l.child;
              if (c !== null) c.return = l;
              else
                for (c = l; c !== null; ) {
                  if (c === t) {
                    c = null;
                    break;
                  }
                  if (((l = c.sibling), l !== null)) {
                    (l.return = c.return), (c = l);
                    break;
                  }
                  c = c.return;
                }
              l = c;
            }
        Xe(e, t, s.children, i), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (o = t.pendingProps.children),
        Ji(t, i),
        (s = Et(s)),
        (o = o(s)),
        (t.flags |= 1),
        Xe(e, t, o, i),
        t.child
      );
    case 14:
      return (
        (o = t.type),
        (s = Nt(o, t.pendingProps)),
        (s = Nt(o.type, s)),
        cd(e, t, o, s, i)
      );
    case 15:
      return Xm(e, t, t.type, t.pendingProps, i);
    case 17:
      return (
        (o = t.type),
        (s = t.pendingProps),
        (s = t.elementType === o ? s : Nt(o, s)),
        Rs(e, t),
        (t.tag = 1),
        lt(o) ? ((e = !0), Gs(t)) : (e = !1),
        Ji(t, i),
        Km(t, o, s),
        wu(t, o, s, i),
        Su(null, t, o, !0, e, i)
      );
    case 19:
      return i0(e, t, i);
    case 22:
      return Jm(e, t, i);
  }
  throw Error(A(156, t.tag));
};
function y0(e, t) {
  return Qp(e, t);
}
function G_(e, t, i, o) {
  (this.tag = e),
    (this.key = i),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = o),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function kt(e, t, i, o) {
  return new G_(e, t, i, o);
}
function Uc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function K_(e) {
  if (typeof e == "function") return Uc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lc)) return 11;
    if (e === uc) return 14;
  }
  return 2;
}
function Hn(e, t) {
  var i = e.alternate;
  return (
    i === null
      ? ((i = kt(e.tag, t, e.key, e.mode)),
        (i.elementType = e.elementType),
        (i.type = e.type),
        (i.stateNode = e.stateNode),
        (i.alternate = e),
        (e.alternate = i))
      : ((i.pendingProps = t),
        (i.type = e.type),
        (i.flags = 0),
        (i.subtreeFlags = 0),
        (i.deletions = null)),
    (i.flags = e.flags & 14680064),
    (i.childLanes = e.childLanes),
    (i.lanes = e.lanes),
    (i.child = e.child),
    (i.memoizedProps = e.memoizedProps),
    (i.memoizedState = e.memoizedState),
    (i.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (i.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (i.sibling = e.sibling),
    (i.index = e.index),
    (i.ref = e.ref),
    i
  );
}
function As(e, t, i, o, s, l) {
  var c = 2;
  if (((o = e), typeof e == "function")) Uc(e) && (c = 1);
  else if (typeof e == "string") c = 5;
  else
    e: switch (e) {
      case Bi:
        return gi(i.children, s, l, t);
      case ac:
        (c = 8), (s |= 8);
        break;
      case Wl:
        return (
          (e = kt(12, i, t, s | 2)), (e.elementType = Wl), (e.lanes = l), e
        );
      case Vl:
        return (e = kt(13, i, t, s)), (e.elementType = Vl), (e.lanes = l), e;
      case Ql:
        return (e = kt(19, i, t, s)), (e.elementType = Ql), (e.lanes = l), e;
      case Mp:
        return Ca(i, s, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ep:
              c = 10;
              break e;
            case Tp:
              c = 9;
              break e;
            case lc:
              c = 11;
              break e;
            case uc:
              c = 14;
              break e;
            case xn:
              (c = 16), (o = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = kt(c, i, t, s)), (t.elementType = e), (t.type = o), (t.lanes = l), t
  );
}
function gi(e, t, i, o) {
  return (e = kt(7, e, o, t)), (e.lanes = i), e;
}
function Ca(e, t, i, o) {
  return (
    (e = kt(22, e, o, t)),
    (e.elementType = Mp),
    (e.lanes = i),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Al(e, t, i) {
  return (e = kt(6, e, null, t)), (e.lanes = i), e;
}
function Dl(e, t, i) {
  return (
    (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = i),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function q_(e, t, i, o, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = vl(0)),
    (this.expirationTimes = vl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vl(0)),
    (this.identifierPrefix = o),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Wc(e, t, i, o, s, l, c, d, f) {
  return (
    (e = new q_(e, t, i, d, f)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = kt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ec(l),
    e
  );
}
function Y_(e, t, i) {
  var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Di,
    key: o == null ? null : "" + o,
    children: e,
    containerInfo: t,
    implementation: i,
  };
}
function w0(e) {
  if (!e) return Vn;
  e = e._reactInternals;
  e: {
    if (Pi(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (lt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var i = e.type;
    if (lt(i)) return wm(e, i, t);
  }
  return t;
}
function x0(e, t, i, o, s, l, c, d, f) {
  return (
    (e = Wc(i, o, !0, e, s, l, c, d, f)),
    (e.context = w0(null)),
    (i = e.current),
    (o = Je()),
    (s = Zn(i)),
    (l = cn(o, s)),
    (l.callback = t ?? null),
    bn(i, l, s),
    (e.current.lanes = s),
    Io(e, s, o),
    ut(e, o),
    e
  );
}
function Sa(e, t, i, o) {
  var s = t.current,
    l = Je(),
    c = Zn(s);
  return (
    (i = w0(i)),
    t.context === null ? (t.context = i) : (t.pendingContext = i),
    (t = cn(l, c)),
    (t.payload = { element: e }),
    (o = o === void 0 ? null : o),
    o !== null && (t.callback = o),
    (e = bn(s, t, c)),
    e !== null && (Bt(e, s, c, l), Os(e, s, c)),
    c
  );
}
function aa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var i = e.retryLane;
    e.retryLane = i !== 0 && i < t ? i : t;
  }
}
function Vc(e, t) {
  Cd(e, t), (e = e.alternate) && Cd(e, t);
}
function X_() {
  return null;
}
var C0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qc(e) {
  this._internalRoot = e;
}
Pa.prototype.render = Qc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Sa(e, t, null, null);
};
Pa.prototype.unmount = Qc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xi(function () {
      Sa(null, e, null, null);
    }),
      (t[fn] = null);
  }
};
function Pa(e) {
  this._internalRoot = e;
}
Pa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jp();
    e = { blockedOn: null, target: e, priority: t };
    for (var i = 0; i < Sn.length && t !== 0 && t < Sn[i].priority; i++);
    Sn.splice(i, 0, e), i === 0 && tm(e);
  }
};
function $c(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ka(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sd() {}
function J_(e, t, i, o, s) {
  if (s) {
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var m = aa(c);
        l.call(m);
      };
    }
    var c = x0(t, o, e, 0, null, !1, !1, "", Sd);
    return (
      (e._reactRootContainer = c),
      (e[fn] = c.current),
      go(e.nodeType === 8 ? e.parentNode : e),
      xi(),
      c
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof o == "function") {
    var d = o;
    o = function () {
      var m = aa(f);
      d.call(m);
    };
  }
  var f = Wc(e, 0, !1, null, null, !1, !1, "", Sd);
  return (
    (e._reactRootContainer = f),
    (e[fn] = f.current),
    go(e.nodeType === 8 ? e.parentNode : e),
    xi(function () {
      Sa(t, f, i, o);
    }),
    f
  );
}
function La(e, t, i, o, s) {
  var l = i._reactRootContainer;
  if (l) {
    var c = l;
    if (typeof s == "function") {
      var d = s;
      s = function () {
        var f = aa(c);
        d.call(f);
      };
    }
    Sa(t, c, e, s);
  } else c = J_(i, t, e, s, o);
  return aa(c);
}
Yp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var i = Kr(t.pendingLanes);
        i !== 0 &&
          (fc(t, i | 1), ut(t, Ee()), !(le & 6) && ((xr = Ee() + 500), Gn()));
      }
      break;
    case 13:
      xi(function () {
        var o = dn(e, 1);
        if (o !== null) {
          var s = Je();
          Bt(o, e, 1, s);
        }
      }),
        Vc(e, 1);
  }
};
dc = function (e) {
  if (e.tag === 13) {
    var t = dn(e, 134217728);
    if (t !== null) {
      var i = Je();
      Bt(t, e, 134217728, i);
    }
    Vc(e, 134217728);
  }
};
Xp = function (e) {
  if (e.tag === 13) {
    var t = Zn(e),
      i = dn(e, t);
    if (i !== null) {
      var o = Je();
      Bt(i, e, t, o);
    }
    Vc(e, t);
  }
};
Jp = function () {
  return fe;
};
em = function (e, t) {
  var i = fe;
  try {
    return (fe = e), t();
  } finally {
    fe = i;
  }
};
nu = function (e, t, i) {
  switch (t) {
    case "input":
      if ((Kl(e, i), (t = i.name), i.type === "radio" && t != null)) {
        for (i = e; i.parentNode; ) i = i.parentNode;
        for (
          i = i.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < i.length;
          t++
        ) {
          var o = i[t];
          if (o !== e && o.form === e.form) {
            var s = ga(o);
            if (!s) throw Error(A(90));
            zp(o), Kl(o, s);
          }
        }
      }
      break;
    case "textarea":
      Rp(e, i);
      break;
    case "select":
      (t = i.value), t != null && Ki(e, !!i.multiple, t, !1);
  }
};
Fp = Fc;
Zp = xi;
var e1 = { usingClientEntryPoint: !1, Events: [Ao, Hi, ga, Bp, bp, Fc] },
  Qr = {
    findFiberByHostInstance: oi,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  t1 = {
    bundleType: Qr.bundleType,
    version: Qr.version,
    rendererPackageName: Qr.rendererPackageName,
    rendererConfig: Qr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qr.findFiberByHostInstance || X_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ss.isDisabled && Ss.supportsFiber)
    try {
      (fa = Ss.inject(t1)), (Yt = Ss);
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e1;
mt.createPortal = function (e, t) {
  var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$c(t)) throw Error(A(200));
  return Y_(e, t, null, i);
};
mt.createRoot = function (e, t) {
  if (!$c(e)) throw Error(A(299));
  var i = !1,
    o = "",
    s = C0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (i = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Wc(e, 1, !1, null, null, i, !1, o, s)),
    (e[fn] = t.current),
    go(e.nodeType === 8 ? e.parentNode : e),
    new Qc(t)
  );
};
mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = Wp(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
  return xi(e);
};
mt.hydrate = function (e, t, i) {
  if (!ka(t)) throw Error(A(200));
  return La(null, e, t, !0, i);
};
mt.hydrateRoot = function (e, t, i) {
  if (!$c(e)) throw Error(A(405));
  var o = (i != null && i.hydratedSources) || null,
    s = !1,
    l = "",
    c = C0;
  if (
    (i != null &&
      (i.unstable_strictMode === !0 && (s = !0),
      i.identifierPrefix !== void 0 && (l = i.identifierPrefix),
      i.onRecoverableError !== void 0 && (c = i.onRecoverableError)),
    (t = x0(t, null, e, 1, i ?? null, s, !1, l, c)),
    (e[fn] = t.current),
    go(e),
    o)
  )
    for (e = 0; e < o.length; e++)
      (i = o[e]),
        (s = i._getVersion),
        (s = s(i._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [i, s])
          : t.mutableSourceEagerHydrationData.push(i, s);
  return new Pa(t);
};
mt.render = function (e, t, i) {
  if (!ka(t)) throw Error(A(200));
  return La(null, e, t, !1, i);
};
mt.unmountComponentAtNode = function (e) {
  if (!ka(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (xi(function () {
        La(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[fn] = null);
        });
      }),
      !0)
    : !1;
};
mt.unstable_batchedUpdates = Fc;
mt.unstable_renderSubtreeIntoContainer = function (e, t, i, o) {
  if (!ka(i)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return La(e, t, i, !1, o);
};
mt.version = "18.3.1-next-f1338f8080-20240426";
function S0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S0);
    } catch (e) {
      console.error(e);
    }
}
S0(), (Sp.exports = mt);
var P0 = Sp.exports,
  k0,
  Pd = P0;
(k0 = Pd.createRoot), Pd.hydrateRoot;
var Bo = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ci = typeof window > "u" || "Deno" in globalThis;
function Ct() {}
function n1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ju(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function L0(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function tr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function At(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kd(e, t) {
  const {
    type: i = "all",
    exact: o,
    fetchStatus: s,
    predicate: l,
    queryKey: c,
    stale: d,
  } = e;
  if (c) {
    if (o) {
      if (t.queryHash !== Gc(c, t.options)) return !1;
    } else if (!Lo(t.queryKey, c)) return !1;
  }
  if (i !== "all") {
    const f = t.isActive();
    if ((i === "active" && !f) || (i === "inactive" && f)) return !1;
  }
  return !(
    (typeof d == "boolean" && t.isStale() !== d) ||
    (s && s !== t.state.fetchStatus) ||
    (l && !l(t))
  );
}
function Ld(e, t) {
  const { exact: i, status: o, predicate: s, mutationKey: l } = e;
  if (l) {
    if (!t.options.mutationKey) return !1;
    if (i) {
      if (ko(t.options.mutationKey) !== ko(l)) return !1;
    } else if (!Lo(t.options.mutationKey, l)) return !1;
  }
  return !((o && t.state.status !== o) || (s && !s(t)));
}
function Gc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ko)(e);
}
function ko(e) {
  return JSON.stringify(e, (t, i) =>
    Du(i)
      ? Object.keys(i)
          .sort()
          .reduce((o, s) => ((o[s] = i[s]), o), {})
      : i
  );
}
function Lo(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((i) => !Lo(e[i], t[i]))
    : !1;
}
function E0(e, t) {
  if (e === t) return e;
  const i = Ed(e) && Ed(t);
  if (i || (Du(e) && Du(t))) {
    const o = i ? e : Object.keys(e),
      s = o.length,
      l = i ? t : Object.keys(t),
      c = l.length,
      d = i ? [] : {};
    let f = 0;
    for (let m = 0; m < c; m++) {
      const y = i ? m : l[m];
      ((!i && o.includes(y)) || i) && e[y] === void 0 && t[y] === void 0
        ? ((d[y] = void 0), f++)
        : ((d[y] = E0(e[y], t[y])), d[y] === e[y] && e[y] !== void 0 && f++);
    }
    return s === c && f === s ? e : d;
  }
  return t;
}
function Au(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const i in e) if (e[i] !== t[i]) return !1;
  return !0;
}
function Ed(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Du(e) {
  if (!Td(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const i = t.prototype;
  return !(
    !Td(i) ||
    !i.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Td(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function i1(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Bu(e, t, i) {
  return typeof i.structuralSharing == "function"
    ? i.structuralSharing(e, t)
    : i.structuralSharing !== !1
    ? E0(e, t)
    : t;
}
function r1(e, t, i = 0) {
  const o = [...e, t];
  return i && o.length > i ? o.slice(1) : o;
}
function o1(e, t, i = 0) {
  const o = [t, ...e];
  return i && o.length > i ? o.slice(0, -1) : o;
}
var Kc = Symbol();
function T0(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Kc
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var li,
  kn,
  nr,
  np,
  s1 =
    ((np = class extends Bo {
      constructor() {
        super();
        G(this, li);
        G(this, kn);
        G(this, nr);
        W(this, nr, (t) => {
          if (!Ci && window.addEventListener) {
            const i = () => t();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        });
      }
      onSubscribe() {
        S(this, kn) || this.setEventListener(S(this, nr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = S(this, kn)) == null || t.call(this), W(this, kn, void 0));
      }
      setEventListener(t) {
        var i;
        W(this, nr, t),
          (i = S(this, kn)) == null || i.call(this),
          W(
            this,
            kn,
            t((o) => {
              typeof o == "boolean" ? this.setFocused(o) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        S(this, li) !== t && (W(this, li, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((i) => {
          i(t);
        });
      }
      isFocused() {
        var t;
        return typeof S(this, li) == "boolean"
          ? S(this, li)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (li = new WeakMap()),
    (kn = new WeakMap()),
    (nr = new WeakMap()),
    np),
  qc = new s1(),
  ir,
  Ln,
  rr,
  ip,
  a1 =
    ((ip = class extends Bo {
      constructor() {
        super();
        G(this, ir, !0);
        G(this, Ln);
        G(this, rr);
        W(this, rr, (t) => {
          if (!Ci && window.addEventListener) {
            const i = () => t(!0),
              o = () => t(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", o, !1),
              () => {
                window.removeEventListener("online", i),
                  window.removeEventListener("offline", o);
              }
            );
          }
        });
      }
      onSubscribe() {
        S(this, Ln) || this.setEventListener(S(this, rr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = S(this, Ln)) == null || t.call(this), W(this, Ln, void 0));
      }
      setEventListener(t) {
        var i;
        W(this, rr, t),
          (i = S(this, Ln)) == null || i.call(this),
          W(this, Ln, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        S(this, ir) !== t &&
          (W(this, ir, t),
          this.listeners.forEach((o) => {
            o(t);
          }));
      }
      isOnline() {
        return S(this, ir);
      }
    }),
    (ir = new WeakMap()),
    (Ln = new WeakMap()),
    (rr = new WeakMap()),
    ip),
  la = new a1();
function bu() {
  let e, t;
  const i = new Promise((s, l) => {
    (e = s), (t = l);
  });
  (i.status = "pending"), i.catch(() => {});
  function o(s) {
    Object.assign(i, s), delete i.resolve, delete i.reject;
  }
  return (
    (i.resolve = (s) => {
      o({ status: "fulfilled", value: s }), e(s);
    }),
    (i.reject = (s) => {
      o({ status: "rejected", reason: s }), t(s);
    }),
    i
  );
}
function l1(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function M0(e) {
  return (e ?? "online") === "online" ? la.isOnline() : !0;
}
var O0 = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Bl(e) {
  return e instanceof O0;
}
function z0(e) {
  let t = !1,
    i = 0,
    o = !1,
    s;
  const l = bu(),
    c = (P) => {
      var R;
      o || (x(new O0(P)), (R = e.abort) == null || R.call(e));
    },
    d = () => {
      t = !0;
    },
    f = () => {
      t = !1;
    },
    m = () =>
      qc.isFocused() &&
      (e.networkMode === "always" || la.isOnline()) &&
      e.canRun(),
    y = () => M0(e.networkMode) && e.canRun(),
    g = (P) => {
      var R;
      o ||
        ((o = !0),
        (R = e.onSuccess) == null || R.call(e, P),
        s == null || s(),
        l.resolve(P));
    },
    x = (P) => {
      var R;
      o ||
        ((o = !0),
        (R = e.onError) == null || R.call(e, P),
        s == null || s(),
        l.reject(P));
    },
    k = () =>
      new Promise((P) => {
        var R;
        (s = (C) => {
          (o || m()) && P(C);
        }),
          (R = e.onPause) == null || R.call(e);
      }).then(() => {
        var P;
        (s = void 0), o || (P = e.onContinue) == null || P.call(e);
      }),
    M = () => {
      if (o) return;
      let P;
      const R = i === 0 ? e.initialPromise : void 0;
      try {
        P = R ?? e.fn();
      } catch (C) {
        P = Promise.reject(C);
      }
      Promise.resolve(P)
        .then(g)
        .catch((C) => {
          var Z;
          if (o) return;
          const v = e.retry ?? (Ci ? 0 : 3),
            w = e.retryDelay ?? l1,
            N = typeof w == "function" ? w(i, C) : w,
            D =
              v === !0 ||
              (typeof v == "number" && i < v) ||
              (typeof v == "function" && v(i, C));
          if (t || !D) {
            x(C);
            return;
          }
          i++,
            (Z = e.onFail) == null || Z.call(e, i, C),
            i1(N)
              .then(() => (m() ? void 0 : k()))
              .then(() => {
                t ? x(C) : M();
              });
        });
    };
  return {
    promise: l,
    cancel: c,
    continue: () => (s == null || s(), l),
    cancelRetry: d,
    continueRetry: f,
    canStart: y,
    start: () => (y() ? M() : k().then(M), l),
  };
}
function u1() {
  let e = [],
    t = 0,
    i = (d) => {
      d();
    },
    o = (d) => {
      d();
    },
    s = (d) => setTimeout(d, 0);
  const l = (d) => {
      t
        ? e.push(d)
        : s(() => {
            i(d);
          });
    },
    c = () => {
      const d = e;
      (e = []),
        d.length &&
          s(() => {
            o(() => {
              d.forEach((f) => {
                i(f);
              });
            });
          });
    };
  return {
    batch: (d) => {
      let f;
      t++;
      try {
        f = d();
      } finally {
        t--, t || c();
      }
      return f;
    },
    batchCalls:
      (d) =>
      (...f) => {
        l(() => {
          d(...f);
        });
      },
    schedule: l,
    setNotifyFunction: (d) => {
      i = d;
    },
    setBatchNotifyFunction: (d) => {
      o = d;
    },
    setScheduler: (d) => {
      s = d;
    },
  };
}
var Ze = u1(),
  ui,
  rp,
  N0 =
    ((rp = class {
      constructor() {
        G(this, ui);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          ju(this.gcTime) &&
            W(
              this,
              ui,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Ci ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        S(this, ui) && (clearTimeout(S(this, ui)), W(this, ui, void 0));
      }
    }),
    (ui = new WeakMap()),
    rp),
  or,
  sr,
  xt,
  Qe,
  Mo,
  ci,
  Rt,
  on,
  op,
  c1 =
    ((op = class extends N0 {
      constructor(t) {
        super();
        G(this, Rt);
        G(this, or);
        G(this, sr);
        G(this, xt);
        G(this, Qe);
        G(this, Mo);
        G(this, ci);
        W(this, ci, !1),
          W(this, Mo, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          W(this, xt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          W(this, or, h1(this.options)),
          (this.state = t.state ?? S(this, or)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = S(this, Qe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...S(this, Mo), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          S(this, xt).remove(this);
      }
      setData(t, i) {
        const o = Bu(this.state.data, t, this.options);
        return (
          ie(this, Rt, on).call(this, {
            data: o,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
            manual: i == null ? void 0 : i.manual,
          }),
          o
        );
      }
      setState(t, i) {
        ie(this, Rt, on).call(this, {
          type: "setState",
          state: t,
          setStateOptions: i,
        });
      }
      cancel(t) {
        var o, s;
        const i = (o = S(this, Qe)) == null ? void 0 : o.promise;
        return (
          (s = S(this, Qe)) == null || s.cancel(t),
          i ? i.then(Ct).catch(Ct) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(S(this, or));
      }
      isActive() {
        return this.observers.some((t) => At(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Kc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !L0(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var i;
        const t = this.observers.find((o) => o.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (i = S(this, Qe)) == null || i.continue();
      }
      onOnline() {
        var i;
        const t = this.observers.find((o) => o.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (i = S(this, Qe)) == null || i.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          S(this, xt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((i) => i !== t)),
          this.observers.length ||
            (S(this, Qe) &&
              (S(this, ci)
                ? S(this, Qe).cancel({ revert: !0 })
                : S(this, Qe).cancelRetry()),
            this.scheduleGc()),
          S(this, xt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ie(this, Rt, on).call(this, { type: "invalidate" });
      }
      fetch(t, i) {
        var f, m, y;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && i != null && i.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (S(this, Qe))
            return S(this, Qe).continueRetry(), S(this, Qe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const g = this.observers.find((x) => x.options.queryFn);
          g && this.setOptions(g.options);
        }
        const o = new AbortController(),
          s = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (W(this, ci, !0), o.signal),
            });
          },
          l = () => {
            const g = T0(this.options, i),
              x = { queryKey: this.queryKey, meta: this.meta };
            return (
              s(x),
              W(this, ci, !1),
              this.options.persister ? this.options.persister(g, x, this) : g(x)
            );
          },
          c = {
            fetchOptions: i,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: l,
          };
        s(c),
          (f = this.options.behavior) == null || f.onFetch(c, this),
          W(this, sr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((m = c.fetchOptions) == null ? void 0 : m.meta)) &&
            ie(this, Rt, on).call(this, {
              type: "fetch",
              meta: (y = c.fetchOptions) == null ? void 0 : y.meta,
            });
        const d = (g) => {
          var x, k, M, P;
          (Bl(g) && g.silent) ||
            ie(this, Rt, on).call(this, { type: "error", error: g }),
            Bl(g) ||
              ((k = (x = S(this, xt).config).onError) == null ||
                k.call(x, g, this),
              (P = (M = S(this, xt).config).onSettled) == null ||
                P.call(M, this.state.data, g, this)),
            this.scheduleGc();
        };
        return (
          W(
            this,
            Qe,
            z0({
              initialPromise: i == null ? void 0 : i.initialPromise,
              fn: c.fetchFn,
              abort: o.abort.bind(o),
              onSuccess: (g) => {
                var x, k, M, P;
                if (g === void 0) {
                  d(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(g);
                } catch (R) {
                  d(R);
                  return;
                }
                (k = (x = S(this, xt).config).onSuccess) == null ||
                  k.call(x, g, this),
                  (P = (M = S(this, xt).config).onSettled) == null ||
                    P.call(M, g, this.state.error, this),
                  this.scheduleGc();
              },
              onError: d,
              onFail: (g, x) => {
                ie(this, Rt, on).call(this, {
                  type: "failed",
                  failureCount: g,
                  error: x,
                });
              },
              onPause: () => {
                ie(this, Rt, on).call(this, { type: "pause" });
              },
              onContinue: () => {
                ie(this, Rt, on).call(this, { type: "continue" });
              },
              retry: c.options.retry,
              retryDelay: c.options.retryDelay,
              networkMode: c.options.networkMode,
              canRun: () => !0,
            })
          ),
          S(this, Qe).start()
        );
      }
    }),
    (or = new WeakMap()),
    (sr = new WeakMap()),
    (xt = new WeakMap()),
    (Qe = new WeakMap()),
    (Mo = new WeakMap()),
    (ci = new WeakMap()),
    (Rt = new WeakSet()),
    (on = function (t) {
      const i = (o) => {
        switch (t.type) {
          case "failed":
            return {
              ...o,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...o, fetchStatus: "paused" };
          case "continue":
            return { ...o, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...o,
              ...R0(o.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...o,
              data: t.data,
              dataUpdateCount: o.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const s = t.error;
            return Bl(s) && s.revert && S(this, sr)
              ? { ...S(this, sr), fetchStatus: "idle" }
              : {
                  ...o,
                  error: s,
                  errorUpdateCount: o.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: o.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...o, isInvalidated: !0 };
          case "setState":
            return { ...o, ...t.state };
        }
      };
      (this.state = i(this.state)),
        Ze.batch(() => {
          this.observers.forEach((o) => {
            o.onQueryUpdate();
          }),
            S(this, xt).notify({ query: this, type: "updated", action: t });
        });
    }),
    op);
function R0(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: M0(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function h1(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    i = t !== void 0,
    o = i
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: i ? o ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: i ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Qt,
  sp,
  f1 =
    ((sp = class extends Bo {
      constructor(t = {}) {
        super();
        G(this, Qt);
        (this.config = t), W(this, Qt, new Map());
      }
      build(t, i, o) {
        const s = i.queryKey,
          l = i.queryHash ?? Gc(s, i);
        let c = this.get(l);
        return (
          c ||
            ((c = new c1({
              cache: this,
              queryKey: s,
              queryHash: l,
              options: t.defaultQueryOptions(i),
              state: o,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(c)),
          c
        );
      }
      add(t) {
        S(this, Qt).has(t.queryHash) ||
          (S(this, Qt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const i = S(this, Qt).get(t.queryHash);
        i &&
          (t.destroy(),
          i === t && S(this, Qt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ze.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return S(this, Qt).get(t);
      }
      getAll() {
        return [...S(this, Qt).values()];
      }
      find(t) {
        const i = { exact: !0, ...t };
        return this.getAll().find((o) => kd(i, o));
      }
      findAll(t = {}) {
        const i = this.getAll();
        return Object.keys(t).length > 0 ? i.filter((o) => kd(t, o)) : i;
      }
      notify(t) {
        Ze.batch(() => {
          this.listeners.forEach((i) => {
            i(t);
          });
        });
      }
      onFocus() {
        Ze.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ze.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Qt = new WeakMap()),
    sp),
  $t,
  qe,
  hi,
  Gt,
  wn,
  ap,
  d1 =
    ((ap = class extends N0 {
      constructor(t) {
        super();
        G(this, Gt);
        G(this, $t);
        G(this, qe);
        G(this, hi);
        (this.mutationId = t.mutationId),
          W(this, qe, t.mutationCache),
          W(this, $t, []),
          (this.state = t.state || p1()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        S(this, $t).includes(t) ||
          (S(this, $t).push(t),
          this.clearGcTimeout(),
          S(this, qe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        W(
          this,
          $t,
          S(this, $t).filter((i) => i !== t)
        ),
          this.scheduleGc(),
          S(this, qe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        S(this, $t).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : S(this, qe).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = S(this, hi)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, l, c, d, f, m, y, g, x, k, M, P, R, C, v, w, N, D, Z, F;
        W(
          this,
          hi,
          z0({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (b, Q) => {
              ie(this, Gt, wn).call(this, {
                type: "failed",
                failureCount: b,
                error: Q,
              });
            },
            onPause: () => {
              ie(this, Gt, wn).call(this, { type: "pause" });
            },
            onContinue: () => {
              ie(this, Gt, wn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => S(this, qe).canRun(this),
          })
        );
        const i = this.state.status === "pending",
          o = !S(this, hi).canStart();
        try {
          if (!i) {
            ie(this, Gt, wn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((l = (s = S(this, qe).config).onMutate) == null
                ? void 0
                : l.call(s, t, this));
            const Q = await ((d = (c = this.options).onMutate) == null
              ? void 0
              : d.call(c, t));
            Q !== this.state.context &&
              ie(this, Gt, wn).call(this, {
                type: "pending",
                context: Q,
                variables: t,
                isPaused: o,
              });
          }
          const b = await S(this, hi).start();
          return (
            await ((m = (f = S(this, qe).config).onSuccess) == null
              ? void 0
              : m.call(f, b, t, this.state.context, this)),
            await ((g = (y = this.options).onSuccess) == null
              ? void 0
              : g.call(y, b, t, this.state.context)),
            await ((k = (x = S(this, qe).config).onSettled) == null
              ? void 0
              : k.call(
                  x,
                  b,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((P = (M = this.options).onSettled) == null
              ? void 0
              : P.call(M, b, null, t, this.state.context)),
            ie(this, Gt, wn).call(this, { type: "success", data: b }),
            b
          );
        } catch (b) {
          try {
            throw (
              (await ((C = (R = S(this, qe).config).onError) == null
                ? void 0
                : C.call(R, b, t, this.state.context, this)),
              await ((w = (v = this.options).onError) == null
                ? void 0
                : w.call(v, b, t, this.state.context)),
              await ((D = (N = S(this, qe).config).onSettled) == null
                ? void 0
                : D.call(
                    N,
                    void 0,
                    b,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((F = (Z = this.options).onSettled) == null
                ? void 0
                : F.call(Z, void 0, b, t, this.state.context)),
              b)
            );
          } finally {
            ie(this, Gt, wn).call(this, { type: "error", error: b });
          }
        } finally {
          S(this, qe).runNext(this);
        }
      }
    }),
    ($t = new WeakMap()),
    (qe = new WeakMap()),
    (hi = new WeakMap()),
    (Gt = new WeakSet()),
    (wn = function (t) {
      const i = (o) => {
        switch (t.type) {
          case "failed":
            return {
              ...o,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...o, isPaused: !0 };
          case "continue":
            return { ...o, isPaused: !1 };
          case "pending":
            return {
              ...o,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...o,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...o,
              data: void 0,
              error: t.error,
              failureCount: o.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = i(this.state)),
        Ze.batch(() => {
          S(this, $t).forEach((o) => {
            o.onMutationUpdate(t);
          }),
            S(this, qe).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    ap);
function p1() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var ct,
  Oo,
  lp,
  m1 =
    ((lp = class extends Bo {
      constructor(t = {}) {
        super();
        G(this, ct);
        G(this, Oo);
        (this.config = t), W(this, ct, new Map()), W(this, Oo, Date.now());
      }
      build(t, i, o) {
        const s = new d1({
          mutationCache: this,
          mutationId: ++ss(this, Oo)._,
          options: t.defaultMutationOptions(i),
          state: o,
        });
        return this.add(s), s;
      }
      add(t) {
        const i = Ps(t),
          o = S(this, ct).get(i) ?? [];
        o.push(t),
          S(this, ct).set(i, o),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var o;
        const i = Ps(t);
        if (S(this, ct).has(i)) {
          const s =
            (o = S(this, ct).get(i)) == null
              ? void 0
              : o.filter((l) => l !== t);
          s && (s.length === 0 ? S(this, ct).delete(i) : S(this, ct).set(i, s));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var o;
        const i =
          (o = S(this, ct).get(Ps(t))) == null
            ? void 0
            : o.find((s) => s.state.status === "pending");
        return !i || i === t;
      }
      runNext(t) {
        var o;
        const i =
          (o = S(this, ct).get(Ps(t))) == null
            ? void 0
            : o.find((s) => s !== t && s.state.isPaused);
        return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
      }
      clear() {
        Ze.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...S(this, ct).values()].flat();
      }
      find(t) {
        const i = { exact: !0, ...t };
        return this.getAll().find((o) => Ld(i, o));
      }
      findAll(t = {}) {
        return this.getAll().filter((i) => Ld(t, i));
      }
      notify(t) {
        Ze.batch(() => {
          this.listeners.forEach((i) => {
            i(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((i) => i.state.isPaused);
        return Ze.batch(() =>
          Promise.all(t.map((i) => i.continue().catch(Ct)))
        );
      }
    }),
    (ct = new WeakMap()),
    (Oo = new WeakMap()),
    lp);
function Ps(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function Md(e) {
  return {
    onFetch: (t, i) => {
      var y, g, x, k, M;
      const o = t.options,
        s =
          (x =
            (g = (y = t.fetchOptions) == null ? void 0 : y.meta) == null
              ? void 0
              : g.fetchMore) == null
            ? void 0
            : x.direction,
        l = ((k = t.state.data) == null ? void 0 : k.pages) || [],
        c = ((M = t.state.data) == null ? void 0 : M.pageParams) || [];
      let d = { pages: [], pageParams: [] },
        f = 0;
      const m = async () => {
        let P = !1;
        const R = (w) => {
            Object.defineProperty(w, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (P = !0)
                  : t.signal.addEventListener("abort", () => {
                      P = !0;
                    }),
                t.signal
              ),
            });
          },
          C = T0(t.options, t.fetchOptions),
          v = async (w, N, D) => {
            if (P) return Promise.reject();
            if (N == null && w.pages.length) return Promise.resolve(w);
            const Z = {
              queryKey: t.queryKey,
              pageParam: N,
              direction: D ? "backward" : "forward",
              meta: t.options.meta,
            };
            R(Z);
            const F = await C(Z),
              { maxPages: b } = t.options,
              Q = D ? o1 : r1;
            return {
              pages: Q(w.pages, F, b),
              pageParams: Q(w.pageParams, N, b),
            };
          };
        if (s && l.length) {
          const w = s === "backward",
            N = w ? g1 : Od,
            D = { pages: l, pageParams: c },
            Z = N(o, D);
          d = await v(D, Z, w);
        } else {
          const w = e ?? l.length;
          do {
            const N = f === 0 ? c[0] ?? o.initialPageParam : Od(o, d);
            if (f > 0 && N == null) break;
            (d = await v(d, N)), f++;
          } while (f < w);
        }
        return d;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var P, R;
            return (R = (P = t.options).persister) == null
              ? void 0
              : R.call(
                  P,
                  m,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  i
                );
          })
        : (t.fetchFn = m);
    },
  };
}
function Od(e, { pages: t, pageParams: i }) {
  const o = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[o], t, i[o], i) : void 0;
}
function g1(e, { pages: t, pageParams: i }) {
  var o;
  return t.length > 0
    ? (o = e.getPreviousPageParam) == null
      ? void 0
      : o.call(e, t[0], t, i[0], i)
    : void 0;
}
var Pe,
  En,
  Tn,
  ar,
  lr,
  Mn,
  ur,
  cr,
  up,
  v1 =
    ((up = class {
      constructor(e = {}) {
        G(this, Pe);
        G(this, En);
        G(this, Tn);
        G(this, ar);
        G(this, lr);
        G(this, Mn);
        G(this, ur);
        G(this, cr);
        W(this, Pe, e.queryCache || new f1()),
          W(this, En, e.mutationCache || new m1()),
          W(this, Tn, e.defaultOptions || {}),
          W(this, ar, new Map()),
          W(this, lr, new Map()),
          W(this, Mn, 0);
      }
      mount() {
        ss(this, Mn)._++,
          S(this, Mn) === 1 &&
            (W(
              this,
              ur,
              qc.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), S(this, Pe).onFocus());
              })
            ),
            W(
              this,
              cr,
              la.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), S(this, Pe).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        ss(this, Mn)._--,
          S(this, Mn) === 0 &&
            ((e = S(this, ur)) == null || e.call(this),
            W(this, ur, void 0),
            (t = S(this, cr)) == null || t.call(this),
            W(this, cr, void 0));
      }
      isFetching(e) {
        return S(this, Pe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return S(this, En).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var i;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (i = S(this, Pe).get(t.queryHash)) == null
          ? void 0
          : i.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const i = this.defaultQueryOptions(e),
            o = S(this, Pe).build(this, i);
          return (
            e.revalidateIfStale &&
              o.isStaleByTime(tr(i.staleTime, o)) &&
              this.prefetchQuery(i),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return S(this, Pe)
          .findAll(e)
          .map(({ queryKey: t, state: i }) => {
            const o = i.data;
            return [t, o];
          });
      }
      setQueryData(e, t, i) {
        const o = this.defaultQueryOptions({ queryKey: e }),
          s = S(this, Pe).get(o.queryHash),
          l = s == null ? void 0 : s.state.data,
          c = n1(t, l);
        if (c !== void 0)
          return S(this, Pe)
            .build(this, o)
            .setData(c, { ...i, manual: !0 });
      }
      setQueriesData(e, t, i) {
        return Ze.batch(() =>
          S(this, Pe)
            .findAll(e)
            .map(({ queryKey: o }) => [o, this.setQueryData(o, t, i)])
        );
      }
      getQueryState(e) {
        var i;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (i = S(this, Pe).get(t.queryHash)) == null ? void 0 : i.state;
      }
      removeQueries(e) {
        const t = S(this, Pe);
        Ze.batch(() => {
          t.findAll(e).forEach((i) => {
            t.remove(i);
          });
        });
      }
      resetQueries(e, t) {
        const i = S(this, Pe),
          o = { type: "active", ...e };
        return Ze.batch(
          () => (
            i.findAll(e).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries(o, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const i = { revert: !0, ...t },
          o = Ze.batch(() =>
            S(this, Pe)
              .findAll(e)
              .map((s) => s.cancel(i))
          );
        return Promise.all(o).then(Ct).catch(Ct);
      }
      invalidateQueries(e = {}, t = {}) {
        return Ze.batch(() => {
          if (
            (S(this, Pe)
              .findAll(e)
              .forEach((o) => {
                o.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const i = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(i, t);
        });
      }
      refetchQueries(e = {}, t) {
        const i = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          o = Ze.batch(() =>
            S(this, Pe)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let l = s.fetch(void 0, i);
                return (
                  i.throwOnError || (l = l.catch(Ct)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : l
                );
              })
          );
        return Promise.all(o).then(Ct);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const i = S(this, Pe).build(this, t);
        return i.isStaleByTime(tr(t.staleTime, i))
          ? i.fetch(t)
          : Promise.resolve(i.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Ct).catch(Ct);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Md(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Ct).catch(Ct);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Md(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return la.isOnline()
          ? S(this, En).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return S(this, Pe);
      }
      getMutationCache() {
        return S(this, En);
      }
      getDefaultOptions() {
        return S(this, Tn);
      }
      setDefaultOptions(e) {
        W(this, Tn, e);
      }
      setQueryDefaults(e, t) {
        S(this, ar).set(ko(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...S(this, ar).values()];
        let i = {};
        return (
          t.forEach((o) => {
            Lo(e, o.queryKey) && (i = { ...i, ...o.defaultOptions });
          }),
          i
        );
      }
      setMutationDefaults(e, t) {
        S(this, lr).set(ko(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...S(this, lr).values()];
        let i = {};
        return (
          t.forEach((o) => {
            Lo(e, o.mutationKey) && (i = { ...i, ...o.defaultOptions });
          }),
          i
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...S(this, Tn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Gc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === Kc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...S(this, Tn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        S(this, Pe).clear(), S(this, En).clear();
      }
    }),
    (Pe = new WeakMap()),
    (En = new WeakMap()),
    (Tn = new WeakMap()),
    (ar = new WeakMap()),
    (lr = new WeakMap()),
    (Mn = new WeakMap()),
    (ur = new WeakMap()),
    (cr = new WeakMap()),
    up),
  rt,
  re,
  zo,
  Ye,
  fi,
  hr,
  On,
  Kt,
  No,
  fr,
  dr,
  di,
  pi,
  zn,
  pr,
  he,
  Yr,
  Fu,
  Zu,
  Hu,
  Uu,
  Wu,
  Vu,
  Qu,
  I0,
  cp,
  _1 =
    ((cp = class extends Bo {
      constructor(t, i) {
        super();
        G(this, he);
        G(this, rt);
        G(this, re);
        G(this, zo);
        G(this, Ye);
        G(this, fi);
        G(this, hr);
        G(this, On);
        G(this, Kt);
        G(this, No);
        G(this, fr);
        G(this, dr);
        G(this, di);
        G(this, pi);
        G(this, zn);
        G(this, pr, new Set());
        (this.options = i),
          W(this, rt, t),
          W(this, Kt, null),
          W(this, On, bu()),
          this.options.experimental_prefetchInRender ||
            S(this, On).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            ),
          this.bindMethods(),
          this.setOptions(i);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (S(this, re).addObserver(this),
          zd(S(this, re), this.options)
            ? ie(this, he, Yr).call(this)
            : this.updateResult(),
          ie(this, he, Uu).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return $u(S(this, re), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return $u(S(this, re), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          ie(this, he, Wu).call(this),
          ie(this, he, Vu).call(this),
          S(this, re).removeObserver(this);
      }
      setOptions(t, i) {
        const o = this.options,
          s = S(this, re);
        if (
          ((this.options = S(this, rt).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof At(this.options.enabled, S(this, re)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        ie(this, he, Qu).call(this),
          S(this, re).setOptions(this.options),
          o._defaulted &&
            !Au(this.options, o) &&
            S(this, rt)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: S(this, re),
                observer: this,
              });
        const l = this.hasListeners();
        l && Nd(S(this, re), s, this.options, o) && ie(this, he, Yr).call(this),
          this.updateResult(i),
          l &&
            (S(this, re) !== s ||
              At(this.options.enabled, S(this, re)) !==
                At(o.enabled, S(this, re)) ||
              tr(this.options.staleTime, S(this, re)) !==
                tr(o.staleTime, S(this, re))) &&
            ie(this, he, Fu).call(this);
        const c = ie(this, he, Zu).call(this);
        l &&
          (S(this, re) !== s ||
            At(this.options.enabled, S(this, re)) !==
              At(o.enabled, S(this, re)) ||
            c !== S(this, zn)) &&
          ie(this, he, Hu).call(this, c);
      }
      getOptimisticResult(t) {
        const i = S(this, rt).getQueryCache().build(S(this, rt), t),
          o = this.createResult(i, t);
        return (
          w1(this, o) &&
            (W(this, Ye, o),
            W(this, hr, this.options),
            W(this, fi, S(this, re).state)),
          o
        );
      }
      getCurrentResult() {
        return S(this, Ye);
      }
      trackResult(t, i) {
        const o = {};
        return (
          Object.keys(t).forEach((s) => {
            Object.defineProperty(o, s, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(s), i == null || i(s), t[s]),
            });
          }),
          o
        );
      }
      trackProp(t) {
        S(this, pr).add(t);
      }
      getCurrentQuery() {
        return S(this, re);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const i = S(this, rt).defaultQueryOptions(t),
          o = S(this, rt).getQueryCache().build(S(this, rt), i);
        return o.fetch().then(() => this.createResult(o, i));
      }
      fetch(t) {
        return ie(this, he, Yr)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), S(this, Ye)));
      }
      createResult(t, i) {
        var b;
        const o = S(this, re),
          s = this.options,
          l = S(this, Ye),
          c = S(this, fi),
          d = S(this, hr),
          m = t !== o ? t.state : S(this, zo),
          { state: y } = t;
        let g = { ...y },
          x = !1,
          k;
        if (i._optimisticResults) {
          const Q = this.hasListeners(),
            K = !Q && zd(t, i),
            se = Q && Nd(t, o, i, s);
          (K || se) && (g = { ...g, ...R0(y.data, t.options) }),
            i._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
        }
        let { error: M, errorUpdatedAt: P, status: R } = g;
        if (i.select && g.data !== void 0)
          if (
            l &&
            g.data === (c == null ? void 0 : c.data) &&
            i.select === S(this, No)
          )
            k = S(this, fr);
          else
            try {
              W(this, No, i.select),
                (k = i.select(g.data)),
                (k = Bu(l == null ? void 0 : l.data, k, i)),
                W(this, fr, k),
                W(this, Kt, null);
            } catch (Q) {
              W(this, Kt, Q);
            }
        else k = g.data;
        if (i.placeholderData !== void 0 && k === void 0 && R === "pending") {
          let Q;
          if (
            l != null &&
            l.isPlaceholderData &&
            i.placeholderData === (d == null ? void 0 : d.placeholderData)
          )
            Q = l.data;
          else if (
            ((Q =
              typeof i.placeholderData == "function"
                ? i.placeholderData(
                    (b = S(this, dr)) == null ? void 0 : b.state.data,
                    S(this, dr)
                  )
                : i.placeholderData),
            i.select && Q !== void 0)
          )
            try {
              (Q = i.select(Q)), W(this, Kt, null);
            } catch (K) {
              W(this, Kt, K);
            }
          Q !== void 0 &&
            ((R = "success"),
            (k = Bu(l == null ? void 0 : l.data, Q, i)),
            (x = !0));
        }
        S(this, Kt) &&
          ((M = S(this, Kt)),
          (k = S(this, fr)),
          (P = Date.now()),
          (R = "error"));
        const C = g.fetchStatus === "fetching",
          v = R === "pending",
          w = R === "error",
          N = v && C,
          D = k !== void 0,
          F = {
            status: R,
            fetchStatus: g.fetchStatus,
            isPending: v,
            isSuccess: R === "success",
            isError: w,
            isInitialLoading: N,
            isLoading: N,
            data: k,
            dataUpdatedAt: g.dataUpdatedAt,
            error: M,
            errorUpdatedAt: P,
            failureCount: g.fetchFailureCount,
            failureReason: g.fetchFailureReason,
            errorUpdateCount: g.errorUpdateCount,
            isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
            isFetchedAfterMount:
              g.dataUpdateCount > m.dataUpdateCount ||
              g.errorUpdateCount > m.errorUpdateCount,
            isFetching: C,
            isRefetching: C && !v,
            isLoadingError: w && !D,
            isPaused: g.fetchStatus === "paused",
            isPlaceholderData: x,
            isRefetchError: w && D,
            isStale: Yc(t, i),
            refetch: this.refetch,
            promise: S(this, On),
          };
        if (this.options.experimental_prefetchInRender) {
          const Q = (ye) => {
              F.status === "error"
                ? ye.reject(F.error)
                : F.data !== void 0 && ye.resolve(F.data);
            },
            K = () => {
              const ye = W(this, On, (F.promise = bu()));
              Q(ye);
            },
            se = S(this, On);
          switch (se.status) {
            case "pending":
              t.queryHash === o.queryHash && Q(se);
              break;
            case "fulfilled":
              (F.status === "error" || F.data !== se.value) && K();
              break;
            case "rejected":
              (F.status !== "error" || F.error !== se.reason) && K();
              break;
          }
        }
        return F;
      }
      updateResult(t) {
        const i = S(this, Ye),
          o = this.createResult(S(this, re), this.options);
        if (
          (W(this, fi, S(this, re).state),
          W(this, hr, this.options),
          S(this, fi).data !== void 0 && W(this, dr, S(this, re)),
          Au(o, i))
        )
          return;
        W(this, Ye, o);
        const s = {},
          l = () => {
            if (!i) return !0;
            const { notifyOnChangeProps: c } = this.options,
              d = typeof c == "function" ? c() : c;
            if (d === "all" || (!d && !S(this, pr).size)) return !0;
            const f = new Set(d ?? S(this, pr));
            return (
              this.options.throwOnError && f.add("error"),
              Object.keys(S(this, Ye)).some((m) => {
                const y = m;
                return S(this, Ye)[y] !== i[y] && f.has(y);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && l() && (s.listeners = !0),
          ie(this, he, I0).call(this, { ...s, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && ie(this, he, Uu).call(this);
      }
    }),
    (rt = new WeakMap()),
    (re = new WeakMap()),
    (zo = new WeakMap()),
    (Ye = new WeakMap()),
    (fi = new WeakMap()),
    (hr = new WeakMap()),
    (On = new WeakMap()),
    (Kt = new WeakMap()),
    (No = new WeakMap()),
    (fr = new WeakMap()),
    (dr = new WeakMap()),
    (di = new WeakMap()),
    (pi = new WeakMap()),
    (zn = new WeakMap()),
    (pr = new WeakMap()),
    (he = new WeakSet()),
    (Yr = function (t) {
      ie(this, he, Qu).call(this);
      let i = S(this, re).fetch(this.options, t);
      return (t != null && t.throwOnError) || (i = i.catch(Ct)), i;
    }),
    (Fu = function () {
      ie(this, he, Wu).call(this);
      const t = tr(this.options.staleTime, S(this, re));
      if (Ci || S(this, Ye).isStale || !ju(t)) return;
      const o = L0(S(this, Ye).dataUpdatedAt, t) + 1;
      W(
        this,
        di,
        setTimeout(() => {
          S(this, Ye).isStale || this.updateResult();
        }, o)
      );
    }),
    (Zu = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(S(this, re))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Hu = function (t) {
      ie(this, he, Vu).call(this),
        W(this, zn, t),
        !(
          Ci ||
          At(this.options.enabled, S(this, re)) === !1 ||
          !ju(S(this, zn)) ||
          S(this, zn) === 0
        ) &&
          W(
            this,
            pi,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || qc.isFocused()) &&
                ie(this, he, Yr).call(this);
            }, S(this, zn))
          );
    }),
    (Uu = function () {
      ie(this, he, Fu).call(this),
        ie(this, he, Hu).call(this, ie(this, he, Zu).call(this));
    }),
    (Wu = function () {
      S(this, di) && (clearTimeout(S(this, di)), W(this, di, void 0));
    }),
    (Vu = function () {
      S(this, pi) && (clearInterval(S(this, pi)), W(this, pi, void 0));
    }),
    (Qu = function () {
      const t = S(this, rt).getQueryCache().build(S(this, rt), this.options);
      if (t === S(this, re)) return;
      const i = S(this, re);
      W(this, re, t),
        W(this, zo, t.state),
        this.hasListeners() &&
          (i == null || i.removeObserver(this), t.addObserver(this));
    }),
    (I0 = function (t) {
      Ze.batch(() => {
        t.listeners &&
          this.listeners.forEach((i) => {
            i(S(this, Ye));
          }),
          S(this, rt)
            .getQueryCache()
            .notify({ query: S(this, re), type: "observerResultsUpdated" });
      });
    }),
    cp);
function y1(e, t) {
  return (
    At(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function zd(e, t) {
  return y1(e, t) || (e.state.data !== void 0 && $u(e, t, t.refetchOnMount));
}
function $u(e, t, i) {
  if (At(t.enabled, e) !== !1) {
    const o = typeof i == "function" ? i(e) : i;
    return o === "always" || (o !== !1 && Yc(e, t));
  }
  return !1;
}
function Nd(e, t, i, o) {
  return (
    (e !== t || At(o.enabled, e) === !1) &&
    (!i.suspense || e.state.status !== "error") &&
    Yc(e, i)
  );
}
function Yc(e, t) {
  return At(t.enabled, e) !== !1 && e.isStaleByTime(tr(t.staleTime, e));
}
function w1(e, t) {
  return !Au(e.getCurrentResult(), t);
}
var j0 = z.createContext(void 0),
  x1 = (e) => {
    const t = z.useContext(j0);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  C1 = ({ client: e, children: t }) => (
    z.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    O.jsx(j0.Provider, { value: e, children: t })
  ),
  A0 = z.createContext(!1),
  S1 = () => z.useContext(A0);
A0.Provider;
function P1() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var k1 = z.createContext(P1()),
  L1 = () => z.useContext(k1);
function E1(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Rd() {}
var T1 = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  M1 = (e) => {
    z.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  O1 = ({ result: e, errorResetBoundary: t, throwOnError: i, query: o }) =>
    e.isError && !t.isReset() && !e.isFetching && o && E1(i, [e.error, o]),
  z1 = (e) => {
    e.suspense &&
      (e.staleTime === void 0 && (e.staleTime = 1e3),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  N1 = (e, t) => e.isLoading && e.isFetching && !t,
  R1 = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  Id = (e, t, i) =>
    t.fetchOptimistic(e).catch(() => {
      i.clearReset();
    });
function I1(e, t, i) {
  var y, g, x, k, M;
  const o = x1(),
    s = S1(),
    l = L1(),
    c = o.defaultQueryOptions(e);
  (g =
    (y = o.getDefaultOptions().queries) == null
      ? void 0
      : y._experimental_beforeQuery) == null || g.call(y, c),
    (c._optimisticResults = s ? "isRestoring" : "optimistic"),
    z1(c),
    T1(c, l),
    M1(l);
  const d = !o.getQueryCache().get(c.queryHash),
    [f] = z.useState(() => new t(o, c)),
    m = f.getOptimisticResult(c);
  if (
    (z.useSyncExternalStore(
      z.useCallback(
        (P) => {
          const R = s ? Rd : f.subscribe(Ze.batchCalls(P));
          return f.updateResult(), R;
        },
        [f, s]
      ),
      () => f.getCurrentResult(),
      () => f.getCurrentResult()
    ),
    z.useEffect(() => {
      f.setOptions(c, { listeners: !1 });
    }, [c, f]),
    R1(c, m))
  )
    throw Id(c, f, l);
  if (
    O1({
      result: m,
      errorResetBoundary: l,
      throwOnError: c.throwOnError,
      query: o.getQueryCache().get(c.queryHash),
    })
  )
    throw m.error;
  if (
    ((k =
      (x = o.getDefaultOptions().queries) == null
        ? void 0
        : x._experimental_afterQuery) == null || k.call(x, c, m),
    c.experimental_prefetchInRender && !Ci && N1(m, s))
  ) {
    const P = d
      ? Id(c, f, l)
      : (M = o.getQueryCache().get(c.queryHash)) == null
      ? void 0
      : M.promise;
    P == null ||
      P.catch(Rd).finally(() => {
        f.updateResult();
      });
  }
  return c.notifyOnChangeProps ? m : f.trackResult(m);
}
function j1(e, t) {
  return I1(e, _1);
}
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Eo() {
  return (
    (Eo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
          }
          return e;
        }),
    Eo.apply(this, arguments)
  );
}
var In;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(In || (In = {}));
const jd = "popstate";
function A1(e) {
  e === void 0 && (e = {});
  function t(s, l) {
    let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
    } = ki(s.location.hash.substr(1));
    return (
      !c.startsWith("/") && !c.startsWith(".") && (c = "/" + c),
      Gu(
        "",
        { pathname: c, search: d, hash: f },
        (l.state && l.state.usr) || null,
        (l.state && l.state.key) || "default"
      )
    );
  }
  function i(s, l) {
    let c = s.document.querySelector("base"),
      d = "";
    if (c && c.getAttribute("href")) {
      let f = s.location.href,
        m = f.indexOf("#");
      d = m === -1 ? f : f.slice(0, m);
    }
    return d + "#" + (typeof l == "string" ? l : ua(l));
  }
  function o(s, l) {
    Xc(
      s.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(l) +
        ")"
    );
  }
  return B1(t, i, o, e);
}
function ze(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Xc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function D1() {
  return Math.random().toString(36).substr(2, 8);
}
function Ad(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Gu(e, t, i, o) {
  return (
    i === void 0 && (i = null),
    Eo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ki(t) : t,
      { state: i, key: (t && t.key) || o || D1() }
    )
  );
}
function ua(e) {
  let { pathname: t = "/", search: i = "", hash: o = "" } = e;
  return (
    i && i !== "?" && (t += i.charAt(0) === "?" ? i : "?" + i),
    o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o),
    t
  );
}
function ki(e) {
  let t = {};
  if (e) {
    let i = e.indexOf("#");
    i >= 0 && ((t.hash = e.substr(i)), (e = e.substr(0, i)));
    let o = e.indexOf("?");
    o >= 0 && ((t.search = e.substr(o)), (e = e.substr(0, o))),
      e && (t.pathname = e);
  }
  return t;
}
function B1(e, t, i, o) {
  o === void 0 && (o = {});
  let { window: s = document.defaultView, v5Compat: l = !1 } = o,
    c = s.history,
    d = In.Pop,
    f = null,
    m = y();
  m == null && ((m = 0), c.replaceState(Eo({}, c.state, { idx: m }), ""));
  function y() {
    return (c.state || { idx: null }).idx;
  }
  function g() {
    d = In.Pop;
    let R = y(),
      C = R == null ? null : R - m;
    (m = R), f && f({ action: d, location: P.location, delta: C });
  }
  function x(R, C) {
    d = In.Push;
    let v = Gu(P.location, R, C);
    i && i(v, R), (m = y() + 1);
    let w = Ad(v, m),
      N = P.createHref(v);
    try {
      c.pushState(w, "", N);
    } catch (D) {
      if (D instanceof DOMException && D.name === "DataCloneError") throw D;
      s.location.assign(N);
    }
    l && f && f({ action: d, location: P.location, delta: 1 });
  }
  function k(R, C) {
    d = In.Replace;
    let v = Gu(P.location, R, C);
    i && i(v, R), (m = y());
    let w = Ad(v, m),
      N = P.createHref(v);
    c.replaceState(w, "", N),
      l && f && f({ action: d, location: P.location, delta: 0 });
  }
  function M(R) {
    let C = s.location.origin !== "null" ? s.location.origin : s.location.href,
      v = typeof R == "string" ? R : ua(R);
    return (
      (v = v.replace(/ $/, "%20")),
      ze(
        C,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, C)
    );
  }
  let P = {
    get action() {
      return d;
    },
    get location() {
      return e(s, c);
    },
    listen(R) {
      if (f) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(jd, g),
        (f = R),
        () => {
          s.removeEventListener(jd, g), (f = null);
        }
      );
    },
    createHref(R) {
      return t(s, R);
    },
    createURL: M,
    encodeLocation(R) {
      let C = M(R);
      return { pathname: C.pathname, search: C.search, hash: C.hash };
    },
    push: x,
    replace: k,
    go(R) {
      return c.go(R);
    },
  };
  return P;
}
var Dd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Dd || (Dd = {}));
function b1(e, t, i) {
  return i === void 0 && (i = "/"), F1(e, t, i, !1);
}
function F1(e, t, i, o) {
  let s = typeof t == "string" ? ki(t) : t,
    l = Jc(s.pathname || "/", i);
  if (l == null) return null;
  let c = D0(e);
  Z1(c);
  let d = null;
  for (let f = 0; d == null && f < c.length; ++f) {
    let m = X1(l);
    d = q1(c[f], m, o);
  }
  return d;
}
function D0(e, t, i, o) {
  t === void 0 && (t = []), i === void 0 && (i = []), o === void 0 && (o = "");
  let s = (l, c, d) => {
    let f = {
      relativePath: d === void 0 ? l.path || "" : d,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: c,
      route: l,
    };
    f.relativePath.startsWith("/") &&
      (ze(
        f.relativePath.startsWith(o),
        'Absolute route path "' +
          f.relativePath +
          '" nested under path ' +
          ('"' + o + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (f.relativePath = f.relativePath.slice(o.length)));
    let m = Un([o, f.relativePath]),
      y = i.concat(f);
    l.children &&
      l.children.length > 0 &&
      (ze(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".')
      ),
      D0(l.children, t, y, m)),
      !(l.path == null && !l.index) &&
        t.push({ path: m, score: G1(m, l.index), routesMeta: y });
  };
  return (
    e.forEach((l, c) => {
      var d;
      if (l.path === "" || !((d = l.path) != null && d.includes("?"))) s(l, c);
      else for (let f of B0(l.path)) s(l, c, f);
    }),
    t
  );
}
function B0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [i, ...o] = t,
    s = i.endsWith("?"),
    l = i.replace(/\?$/, "");
  if (o.length === 0) return s ? [l, ""] : [l];
  let c = B0(o.join("/")),
    d = [];
  return (
    d.push(...c.map((f) => (f === "" ? l : [l, f].join("/")))),
    s && d.push(...c),
    d.map((f) => (e.startsWith("/") && f === "" ? "/" : f))
  );
}
function Z1(e) {
  e.sort((t, i) =>
    t.score !== i.score
      ? i.score - t.score
      : K1(
          t.routesMeta.map((o) => o.childrenIndex),
          i.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
const H1 = /^:[\w-]+$/,
  U1 = 3,
  W1 = 2,
  V1 = 1,
  Q1 = 10,
  $1 = -2,
  Bd = (e) => e === "*";
function G1(e, t) {
  let i = e.split("/"),
    o = i.length;
  return (
    i.some(Bd) && (o += $1),
    t && (o += W1),
    i
      .filter((s) => !Bd(s))
      .reduce((s, l) => s + (H1.test(l) ? U1 : l === "" ? V1 : Q1), o)
  );
}
function K1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((o, s) => o === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function q1(e, t, i) {
  let { routesMeta: o } = e,
    s = {},
    l = "/",
    c = [];
  for (let d = 0; d < o.length; ++d) {
    let f = o[d],
      m = d === o.length - 1,
      y = l === "/" ? t : t.slice(l.length) || "/",
      g = bd(
        { path: f.relativePath, caseSensitive: f.caseSensitive, end: m },
        y
      ),
      x = f.route;
    if (
      (!g &&
        m &&
        i &&
        !o[o.length - 1].route.index &&
        (g = bd(
          { path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 },
          y
        )),
      !g)
    )
      return null;
    Object.assign(s, g.params),
      c.push({
        params: s,
        pathname: Un([l, g.pathname]),
        pathnameBase: ny(Un([l, g.pathnameBase])),
        route: x,
      }),
      g.pathnameBase !== "/" && (l = Un([l, g.pathnameBase]));
  }
  return c;
}
function bd(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [i, o] = Y1(e.path, e.caseSensitive, e.end),
    s = t.match(i);
  if (!s) return null;
  let l = s[0],
    c = l.replace(/(.)\/+$/, "$1"),
    d = s.slice(1);
  return {
    params: o.reduce((m, y, g) => {
      let { paramName: x, isOptional: k } = y;
      if (x === "*") {
        let P = d[g] || "";
        c = l.slice(0, l.length - P.length).replace(/(.)\/+$/, "$1");
      }
      const M = d[g];
      return (
        k && !M ? (m[x] = void 0) : (m[x] = (M || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: l,
    pathnameBase: c,
    pattern: e,
  };
}
function Y1(e, t, i) {
  t === void 0 && (t = !1),
    i === void 0 && (i = !0),
    Xc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let o = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, d, f) => (
            o.push({ paramName: d, isOptional: f != null }),
            f ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), o]
  );
}
function X1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Xc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Jc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let i = t.endsWith("/") ? t.length - 1 : t.length,
    o = e.charAt(i);
  return o && o !== "/" ? null : e.slice(i) || "/";
}
function J1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: i,
    search: o = "",
    hash: s = "",
  } = typeof e == "string" ? ki(e) : e;
  return {
    pathname: i ? (i.startsWith("/") ? i : ey(i, t)) : t,
    search: iy(o),
    hash: ry(s),
  };
}
function ey(e, t) {
  let i = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? i.length > 1 && i.pop() : s !== "." && i.push(s);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function bl(e, t, i, o) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(o) +
      "].  Please separate it out to the ") +
    ("`to." + i + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ty(e) {
  return e.filter(
    (t, i) => i === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function b0(e, t) {
  let i = ty(e);
  return t
    ? i.map((o, s) => (s === i.length - 1 ? o.pathname : o.pathnameBase))
    : i.map((o) => o.pathnameBase);
}
function F0(e, t, i, o) {
  o === void 0 && (o = !1);
  let s;
  typeof e == "string"
    ? (s = ki(e))
    : ((s = Eo({}, e)),
      ze(
        !s.pathname || !s.pathname.includes("?"),
        bl("?", "pathname", "search", s)
      ),
      ze(
        !s.pathname || !s.pathname.includes("#"),
        bl("#", "pathname", "hash", s)
      ),
      ze(!s.search || !s.search.includes("#"), bl("#", "search", "hash", s)));
  let l = e === "" || s.pathname === "",
    c = l ? "/" : s.pathname,
    d;
  if (c == null) d = i;
  else {
    let g = t.length - 1;
    if (!o && c.startsWith("..")) {
      let x = c.split("/");
      for (; x[0] === ".."; ) x.shift(), (g -= 1);
      s.pathname = x.join("/");
    }
    d = g >= 0 ? t[g] : "/";
  }
  let f = J1(s, d),
    m = c && c !== "/" && c.endsWith("/"),
    y = (l || c === ".") && i.endsWith("/");
  return !f.pathname.endsWith("/") && (m || y) && (f.pathname += "/"), f;
}
const Un = (e) => e.join("/").replace(/\/\/+/g, "/"),
  ny = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  iy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ry = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function oy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Z0 = ["post", "put", "patch", "delete"];
new Set(Z0);
const sy = ["get", ...Z0];
new Set(sy);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function To() {
  return (
    (To = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
          }
          return e;
        }),
    To.apply(this, arguments)
  );
}
const eh = z.createContext(null),
  ay = z.createContext(null),
  Li = z.createContext(null),
  Ea = z.createContext(null),
  Kn = z.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  H0 = z.createContext(null);
function ly(e, t) {
  let { relative: i } = t === void 0 ? {} : t;
  bo() || ze(!1);
  let { basename: o, navigator: s } = z.useContext(Li),
    { hash: l, pathname: c, search: d } = W0(e, { relative: i }),
    f = c;
  return (
    o !== "/" && (f = c === "/" ? o : Un([o, c])),
    s.createHref({ pathname: f, search: d, hash: l })
  );
}
function bo() {
  return z.useContext(Ea) != null;
}
function Ta() {
  return bo() || ze(!1), z.useContext(Ea).location;
}
function U0(e) {
  z.useContext(Li).static || z.useLayoutEffect(e);
}
function Ma() {
  let { isDataRoute: e } = z.useContext(Kn);
  return e ? Cy() : uy();
}
function uy() {
  bo() || ze(!1);
  let e = z.useContext(eh),
    { basename: t, future: i, navigator: o } = z.useContext(Li),
    { matches: s } = z.useContext(Kn),
    { pathname: l } = Ta(),
    c = JSON.stringify(b0(s, i.v7_relativeSplatPath)),
    d = z.useRef(!1);
  return (
    U0(() => {
      d.current = !0;
    }),
    z.useCallback(
      function (m, y) {
        if ((y === void 0 && (y = {}), !d.current)) return;
        if (typeof m == "number") {
          o.go(m);
          return;
        }
        let g = F0(m, JSON.parse(c), l, y.relative === "path");
        e == null &&
          t !== "/" &&
          (g.pathname = g.pathname === "/" ? t : Un([t, g.pathname])),
          (y.replace ? o.replace : o.push)(g, y.state, y);
      },
      [t, o, c, l, e]
    )
  );
}
function cy() {
  let { matches: e } = z.useContext(Kn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function W0(e, t) {
  let { relative: i } = t === void 0 ? {} : t,
    { future: o } = z.useContext(Li),
    { matches: s } = z.useContext(Kn),
    { pathname: l } = Ta(),
    c = JSON.stringify(b0(s, o.v7_relativeSplatPath));
  return z.useMemo(() => F0(e, JSON.parse(c), l, i === "path"), [e, c, l, i]);
}
function hy(e, t) {
  return fy(e, t);
}
function fy(e, t, i, o) {
  bo() || ze(!1);
  let { navigator: s } = z.useContext(Li),
    { matches: l } = z.useContext(Kn),
    c = l[l.length - 1],
    d = c ? c.params : {};
  c && c.pathname;
  let f = c ? c.pathnameBase : "/";
  c && c.route;
  let m = Ta(),
    y;
  if (t) {
    var g;
    let R = typeof t == "string" ? ki(t) : t;
    f === "/" || ((g = R.pathname) != null && g.startsWith(f)) || ze(!1),
      (y = R);
  } else y = m;
  let x = y.pathname || "/",
    k = x;
  if (f !== "/") {
    let R = f.replace(/^\//, "").split("/");
    k = "/" + x.replace(/^\//, "").split("/").slice(R.length).join("/");
  }
  let M = b1(e, { pathname: k }),
    P = vy(
      M &&
        M.map((R) =>
          Object.assign({}, R, {
            params: Object.assign({}, d, R.params),
            pathname: Un([
              f,
              s.encodeLocation
                ? s.encodeLocation(R.pathname).pathname
                : R.pathname,
            ]),
            pathnameBase:
              R.pathnameBase === "/"
                ? f
                : Un([
                    f,
                    s.encodeLocation
                      ? s.encodeLocation(R.pathnameBase).pathname
                      : R.pathnameBase,
                  ]),
          })
        ),
      l,
      i,
      o
    );
  return t && P
    ? z.createElement(
        Ea.Provider,
        {
          value: {
            location: To(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              y
            ),
            navigationType: In.Pop,
          },
        },
        P
      )
    : P;
}
function dy() {
  let e = xy(),
    t = oy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    i = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return z.createElement(
    z.Fragment,
    null,
    z.createElement("h2", null, "Unexpected Application Error!"),
    z.createElement("h3", { style: { fontStyle: "italic" } }, t),
    i ? z.createElement("pre", { style: s }, i) : null,
    null
  );
}
const py = z.createElement(dy, null);
class my extends z.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, i) {
    return i.location !== t.location ||
      (i.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : i.error,
          location: i.location,
          revalidation: t.revalidation || i.revalidation,
        };
  }
  componentDidCatch(t, i) {
    console.error(
      "React Router caught the following error during render",
      t,
      i
    );
  }
  render() {
    return this.state.error !== void 0
      ? z.createElement(
          Kn.Provider,
          { value: this.props.routeContext },
          z.createElement(H0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function gy(e) {
  let { routeContext: t, match: i, children: o } = e,
    s = z.useContext(eh);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = i.route.id),
    z.createElement(Kn.Provider, { value: t }, o)
  );
}
function vy(e, t, i, o) {
  var s;
  if (
    (t === void 0 && (t = []),
    i === void 0 && (i = null),
    o === void 0 && (o = null),
    e == null)
  ) {
    var l;
    if (!i) return null;
    if (i.errors) e = i.matches;
    else if (
      (l = o) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !i.initialized &&
      i.matches.length > 0
    )
      e = i.matches;
    else return null;
  }
  let c = e,
    d = (s = i) == null ? void 0 : s.errors;
  if (d != null) {
    let y = c.findIndex(
      (g) => g.route.id && (d == null ? void 0 : d[g.route.id]) !== void 0
    );
    y >= 0 || ze(!1), (c = c.slice(0, Math.min(c.length, y + 1)));
  }
  let f = !1,
    m = -1;
  if (i && o && o.v7_partialHydration)
    for (let y = 0; y < c.length; y++) {
      let g = c[y];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (m = y),
        g.route.id)
      ) {
        let { loaderData: x, errors: k } = i,
          M =
            g.route.loader &&
            x[g.route.id] === void 0 &&
            (!k || k[g.route.id] === void 0);
        if (g.route.lazy || M) {
          (f = !0), m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((y, g, x) => {
    let k,
      M = !1,
      P = null,
      R = null;
    i &&
      ((k = d && g.route.id ? d[g.route.id] : void 0),
      (P = g.route.errorElement || py),
      f &&
        (m < 0 && x === 0
          ? ((M = !0), (R = null))
          : m === x &&
            ((M = !0), (R = g.route.hydrateFallbackElement || null))));
    let C = t.concat(c.slice(0, x + 1)),
      v = () => {
        let w;
        return (
          k
            ? (w = P)
            : M
            ? (w = R)
            : g.route.Component
            ? (w = z.createElement(g.route.Component, null))
            : g.route.element
            ? (w = g.route.element)
            : (w = y),
          z.createElement(gy, {
            match: g,
            routeContext: { outlet: y, matches: C, isDataRoute: i != null },
            children: w,
          })
        );
      };
    return i && (g.route.ErrorBoundary || g.route.errorElement || x === 0)
      ? z.createElement(my, {
          location: i.location,
          revalidation: i.revalidation,
          component: P,
          error: k,
          children: v(),
          routeContext: { outlet: null, matches: C, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var V0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(V0 || {}),
  ca = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ca || {});
function _y(e) {
  let t = z.useContext(eh);
  return t || ze(!1), t;
}
function yy(e) {
  let t = z.useContext(ay);
  return t || ze(!1), t;
}
function wy(e) {
  let t = z.useContext(Kn);
  return t || ze(!1), t;
}
function Q0(e) {
  let t = wy(),
    i = t.matches[t.matches.length - 1];
  return i.route.id || ze(!1), i.route.id;
}
function xy() {
  var e;
  let t = z.useContext(H0),
    i = yy(ca.UseRouteError),
    o = Q0(ca.UseRouteError);
  return t !== void 0 ? t : (e = i.errors) == null ? void 0 : e[o];
}
function Cy() {
  let { router: e } = _y(V0.UseNavigateStable),
    t = Q0(ca.UseNavigateStable),
    i = z.useRef(!1);
  return (
    U0(() => {
      i.current = !0;
    }),
    z.useCallback(
      function (s, l) {
        l === void 0 && (l = {}),
          i.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, To({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
const Fd = {};
function Sy(e, t) {
  Fd[t] || ((Fd[t] = !0), console.warn(t));
}
const Zd = (e, t, i) =>
  Sy(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + i + ".")
  );
function Py(e, t) {
  (e != null && e.v7_startTransition) ||
    Zd(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      Zd(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function ri(e) {
  ze(!1);
}
function ky(e) {
  let {
    basename: t = "/",
    children: i = null,
    location: o,
    navigationType: s = In.Pop,
    navigator: l,
    static: c = !1,
    future: d,
  } = e;
  bo() && ze(!1);
  let f = t.replace(/^\/*/, "/"),
    m = z.useMemo(
      () => ({
        basename: f,
        navigator: l,
        static: c,
        future: To({ v7_relativeSplatPath: !1 }, d),
      }),
      [f, d, l, c]
    );
  typeof o == "string" && (o = ki(o));
  let {
      pathname: y = "/",
      search: g = "",
      hash: x = "",
      state: k = null,
      key: M = "default",
    } = o,
    P = z.useMemo(() => {
      let R = Jc(y, f);
      return R == null
        ? null
        : {
            location: { pathname: R, search: g, hash: x, state: k, key: M },
            navigationType: s,
          };
    }, [f, y, g, x, k, M, s]);
  return P == null
    ? null
    : z.createElement(
        Li.Provider,
        { value: m },
        z.createElement(Ea.Provider, { children: i, value: P })
      );
}
function Ly(e) {
  let { children: t, location: i } = e;
  return hy(Ku(t), i);
}
new Promise(() => {});
function Ku(e, t) {
  t === void 0 && (t = []);
  let i = [];
  return (
    z.Children.forEach(e, (o, s) => {
      if (!z.isValidElement(o)) return;
      let l = [...t, s];
      if (o.type === z.Fragment) {
        i.push.apply(i, Ku(o.props.children, l));
        return;
      }
      o.type !== ri && ze(!1), !o.props.index || !o.props.children || ze(!1);
      let c = {
        id: o.props.id || l.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.ErrorBoundary != null || o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      o.props.children && (c.children = Ku(o.props.children, l)), i.push(c);
    }),
    i
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qu() {
  return (
    (qu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
          }
          return e;
        }),
    qu.apply(this, arguments)
  );
}
function Ey(e, t) {
  if (e == null) return {};
  var i = {},
    o = Object.keys(e),
    s,
    l;
  for (l = 0; l < o.length; l++)
    (s = o[l]), !(t.indexOf(s) >= 0) && (i[s] = e[s]);
  return i;
}
function Ty(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function My(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ty(e);
}
const Oy = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  zy = "6";
try {
  window.__reactRouterVersion = zy;
} catch {}
const Ny = "startTransition",
  Hd = Vv[Ny];
function Ry(e) {
  let { basename: t, children: i, future: o, window: s } = e,
    l = z.useRef();
  l.current == null && (l.current = A1({ window: s, v5Compat: !0 }));
  let c = l.current,
    [d, f] = z.useState({ action: c.action, location: c.location }),
    { v7_startTransition: m } = o || {},
    y = z.useCallback(
      (g) => {
        m && Hd ? Hd(() => f(g)) : f(g);
      },
      [f, m]
    );
  return (
    z.useLayoutEffect(() => c.listen(y), [c, y]),
    z.useEffect(() => Py(o), [o]),
    z.createElement(ky, {
      basename: t,
      children: i,
      location: d.location,
      navigationType: d.action,
      navigator: c,
      future: o,
    })
  );
}
const Iy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  jy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fl = z.forwardRef(function (t, i) {
    let {
        onClick: o,
        relative: s,
        reloadDocument: l,
        replace: c,
        state: d,
        target: f,
        to: m,
        preventScrollReset: y,
        viewTransition: g,
      } = t,
      x = Ey(t, Oy),
      { basename: k } = z.useContext(Li),
      M,
      P = !1;
    if (typeof m == "string" && jy.test(m) && ((M = m), Iy))
      try {
        let w = new URL(window.location.href),
          N = m.startsWith("//") ? new URL(w.protocol + m) : new URL(m),
          D = Jc(N.pathname, k);
        N.origin === w.origin && D != null
          ? (m = D + N.search + N.hash)
          : (P = !0);
      } catch {}
    let R = ly(m, { relative: s }),
      C = Ay(m, {
        replace: c,
        state: d,
        target: f,
        preventScrollReset: y,
        relative: s,
        viewTransition: g,
      });
    function v(w) {
      o && o(w), w.defaultPrevented || C(w);
    }
    return z.createElement(
      "a",
      qu({}, x, { href: M || R, onClick: P || l ? o : v, ref: i, target: f })
    );
  });
var Ud;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ud || (Ud = {}));
var Wd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Wd || (Wd = {}));
function Ay(e, t) {
  let {
      target: i,
      replace: o,
      state: s,
      preventScrollReset: l,
      relative: c,
      viewTransition: d,
    } = t === void 0 ? {} : t,
    f = Ma(),
    m = Ta(),
    y = W0(e, { relative: c });
  return z.useCallback(
    (g) => {
      if (My(g, i)) {
        g.preventDefault();
        let x = o !== void 0 ? o : ua(m) === ua(y);
        f(e, {
          replace: x,
          state: s,
          preventScrollReset: l,
          relative: c,
          viewTransition: d,
        });
      }
    },
    [m, f, y, o, s, i, e, l, c, d]
  );
}
const Dy =
    "data:image/svg+xml,%3csvg%20width='31'%20height='24'%20viewBox='0%200%2031%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.7074%203.91824C13.1689%202.04111%209.87758%201.00467%206.46741%201.00856C4.84733%201.00856%203.29193%201.23707%201.84741%201.65854V19.7488C3.33139%2019.3172%204.89379%2019.0974%206.46741%2019.0989C10.0171%2019.0989%2013.2557%2020.1995%2015.7074%2022.0085M15.7074%203.91824C18.2459%202.04101%2021.5372%201.00455%2024.9474%201.00856C26.5675%201.00856%2028.1229%201.23707%2029.5674%201.65854V19.7488C28.0834%2019.3172%2026.521%2019.0974%2024.9474%2019.0989C21.5372%2019.095%2018.2459%2020.1314%2015.7074%2022.0085M15.7074%203.91824V22.0085'%20stroke='%23F0ECDD'%20stroke-width='2.01114'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  By =
    "data:image/svg+xml,%3csvg%20width='32'%20height='25'%20viewBox='0%200%2032%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.6633%204.54825C13.0039%202.58174%209.55587%201.49595%205.98331%201.50001C4.28608%201.50001%202.65662%201.7394%201.14331%202.18095V21.1327C2.69795%2020.6805%204.33475%2020.4503%205.98331%2020.4518C9.70204%2020.4518%2013.0949%2021.6048%2015.6633%2023.5M15.6633%204.54825C18.3226%202.58163%2021.7707%201.49582%2025.3433%201.50001C27.0405%201.50001%2028.67%201.7394%2030.1833%202.18095V21.1327C28.6287%2020.6805%2026.9919%2020.4503%2025.3433%2020.4518C21.7707%2020.4477%2018.3227%2021.5335%2015.6633%2023.5M15.6633%204.54825V23.5Z'%20fill='%23F0ECDD'/%3e%3cpath%20d='M15.6633%204.54825C13.0039%202.58174%209.55587%201.49595%205.98331%201.50001C4.28608%201.50001%202.65662%201.7394%201.14331%202.18095V21.1327C2.69795%2020.6805%204.33475%2020.4503%205.98331%2020.4518C9.70204%2020.4518%2013.0949%2021.6048%2015.6633%2023.5M15.6633%204.54825C18.3226%202.58163%2021.7707%201.49582%2025.3433%201.50001C27.0405%201.50001%2028.67%201.7394%2030.1833%202.18095V21.1327C28.6287%2020.6805%2026.9919%2020.4503%2025.3433%2020.4518C21.7707%2020.4477%2018.3227%2021.5335%2015.6633%2023.5M15.6633%204.54825V23.5'%20stroke='%231A1616'%20stroke-width='2.01114'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  $0 =
    "data:image/svg+xml,%3csvg%20width='26'%20height='25'%20viewBox='0%200%2026%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.5235%2025L14.9679%2015.4455C14.2049%2016.0955%2013.3274%2016.5985%2012.3356%2016.9545C11.3437%2017.3105%2010.3467%2017.4886%209.34465%2017.4886C6.90106%2017.4886%204.83286%2016.6428%203.14005%2014.9512C1.44724%2013.2596%200.60083%2011.1921%200.60083%208.74886C0.60083%206.30557%201.44622%204.23711%203.137%202.54349C4.82777%200.849866%206.89496%200.00203804%209.33855%203.65896e-06C11.7821%20-0.00203072%2013.8514%200.844272%2015.5462%202.53891C17.241%204.23355%2018.0885%206.30201%2018.0885%208.74428C18.0885%209.80419%2017.9008%2010.83%2017.5254%2011.8218C17.15%2012.8136%2016.6566%2013.6619%2016.0452%2014.3668L25.6008%2023.9197L24.5235%2025ZM9.34618%2015.9612C11.3706%2015.9612%2013.0797%2015.2645%2014.4734%2013.8709C15.8672%2012.4774%2016.564%2010.768%2016.564%208.74275C16.564%206.71753%2015.8672%205.00865%2014.4734%203.61612C13.0797%202.22358%2011.3706%201.52681%209.34618%201.52579C7.32172%201.52477%205.61212%202.22155%204.21738%203.61612C2.82265%205.01068%202.12578%206.71956%202.1268%208.74275C2.12782%2010.7659%202.82468%2012.4748%204.21738%2013.8694C5.61009%2015.264%207.31918%2015.9607%209.34465%2015.9597'%20fill='%23F0ECDD'/%3e%3c/svg%3e",
  by =
    "data:image/svg+xml,%3csvg%20width='21'%20height='25'%20viewBox='0%200%2021%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.7439%2024.0517L10.7438%2024.0518C10.5389%2024.2329%2010.2809%2024.3299%2010.0172%2024.3296C9.75383%2024.3294%209.49631%2024.2322%209.2918%2024.0511C9.29157%2024.0509%209.29133%2024.0507%209.29109%2024.0505L8.90713%2023.7077C8.90675%2023.7073%208.90637%2023.707%208.90599%2023.7066C3.34006%2018.6947%200.688936%2014.2426%200.688936%2010.2889C0.688936%207.73186%201.67638%205.28324%203.42822%203.48079C5.17943%201.67898%207.55045%200.670381%2010.0186%200.670381C12.4867%200.670381%2014.8577%201.67898%2016.6089%203.48079C18.3607%205.28324%2019.3482%207.73186%2019.3482%2010.2889C19.3482%2014.3342%2016.5724%2018.9016%2010.7439%2024.0517ZM10.0186%205.66126C8.81444%205.66126%207.66363%206.15359%206.81818%207.02346C5.97336%207.89269%205.50202%209.06765%205.50202%2010.2889C5.50202%2011.5102%205.97336%2012.6851%206.81818%2013.5544C7.66363%2014.4242%208.81444%2014.9166%2010.0186%2014.9166C11.2227%2014.9166%2012.3735%2014.4242%2013.2189%2013.5544C14.0637%2012.6851%2014.5351%2011.5102%2014.5351%2010.2889C14.5351%209.06765%2014.0637%207.89269%2013.2189%207.02346C12.3735%206.15359%2011.2227%205.66126%2010.0186%205.66126Z'%20stroke='%23F0ECDD'%20stroke-width='1.34076'/%3e%3c/svg%3e",
  Fy =
    "data:image/svg+xml,%3csvg%20width='21'%20height='25'%20viewBox='0%200%2021%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.1279%2024.0603L11.1279%2024.0603C10.9229%2024.2415%2010.665%2024.3384%2010.4013%2024.3382C10.1379%2024.3379%209.88035%2024.2407%209.67584%2024.0596C9.6756%2024.0594%209.67536%2024.0592%209.67513%2024.059L9.29117%2023.7162C9.29079%2023.7159%209.29041%2023.7155%209.29003%2023.7152C3.72409%2018.7032%201.07297%2014.2512%201.07297%2010.2975C1.07297%207.7404%202.06041%205.29179%203.81225%203.48933C5.56346%201.68753%207.93448%200.678926%2010.4026%200.678926C12.8707%200.678926%2015.2417%201.68753%2016.9929%203.48933C18.7448%205.29179%2019.7322%207.7404%2019.7322%2010.2975C19.7322%2014.3428%2016.9564%2018.9102%2011.1279%2024.0603ZM10.4026%205.6698C9.19847%205.6698%208.04766%206.16214%207.20221%207.03201C6.3574%207.90123%205.88605%209.07619%205.88605%2010.2975C5.88605%2011.5187%206.3574%2012.6937%207.20221%2013.5629C8.04766%2014.4328%209.19847%2014.9251%2010.4026%2014.9251C11.6067%2014.9251%2012.7575%2014.4328%2013.603%2013.5629C14.4478%2012.6937%2014.9191%2011.5187%2014.9191%2010.2975C14.9191%209.07619%2014.4478%207.90123%2013.603%207.03201C12.7575%206.16214%2011.6067%205.6698%2010.4026%205.6698Z'%20fill='%23F0ECDD'%20stroke='%231A1616'%20stroke-width='1.34076'/%3e%3c/svg%3e",
  Zy =
    "data:image/svg+xml,%3csvg%20width='32'%20height='31'%20viewBox='0%200%2032%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.4025%207.98265C18.4025%207.54625%2018.637%207.15164%2018.9081%206.80375C19.1867%206.44726%2019.3481%206.02438%2019.3481%205.57077C19.3481%204.29722%2018.0785%203.26584%2016.5113%203.26584C14.9441%203.26584%2013.6744%204.29845%2013.6744%205.57077C13.6744%206.02438%2013.8358%206.44726%2014.1145%206.80375C14.3855%207.15164%2014.6201%207.54625%2014.6201%207.98265C14.6206%208.08806%2014.5994%208.1925%2014.5578%208.28977C14.5161%208.38704%2014.4548%208.47516%2014.3775%208.54889C14.3003%208.62262%2014.2086%208.68046%2014.108%208.71897C14.0073%208.75748%2013.8998%208.77589%2013.7917%208.77308C12.0375%208.72381%2010.2863%208.60077%208.54292%208.4043C8.77743%2010.3871%208.91234%2012.3995%208.94007%2014.4364C8.94124%2014.5433%208.92063%2014.6493%208.87943%2014.7483C8.83823%2014.8473%208.77727%2014.9373%208.70008%2015.0131C8.62289%2015.089%208.53102%2015.1491%208.4298%2015.19C8.32858%2015.2309%208.22003%2015.2518%208.11046%2015.2515C7.66287%2015.2515%207.25814%2015.0228%206.90133%2014.7585C6.53995%2014.4833%206.09529%2014.3324%205.63674%2014.3295C4.33053%2014.3295%203.27271%2015.5674%203.27271%2017.0954C3.27271%2018.6234%204.33179%2019.8613%205.63674%2019.8613C6.10198%2019.8613%206.5357%2019.704%206.90133%2019.4323C7.25814%2019.168%207.66287%2018.9394%208.11046%2018.9394C8.50131%2018.9394%208.81021%2019.259%208.78121%2019.6401C8.62438%2021.7243%208.35419%2023.799%207.97177%2025.8554C9.88569%2026.0889%2011.8273%2026.2352%2013.7917%2026.2905C13.8998%2026.2934%2014.0073%2026.2749%2014.108%2026.2364C14.2086%2026.1979%2014.3003%2026.1401%2014.3775%2026.0664C14.4548%2025.9926%2014.5161%2025.9045%2014.5578%2025.8072C14.5994%2025.71%2014.6206%2025.6055%2014.6201%2025.5001C14.6201%2025.0637%2014.3855%2024.6691%2014.1145%2024.3212C13.8322%2023.9689%2013.6775%2023.5353%2013.6744%2023.0882C13.6744%2021.8159%2014.9453%2020.7833%2016.5113%2020.7833C18.0785%2020.7833%2019.3481%2021.8159%2019.3481%2023.0882C19.3481%2023.5418%2019.1867%2023.9647%2018.9081%2024.3212C18.637%2024.6691%2018.4038%2025.0637%2018.4038%2025.5001C18.4038%2025.9095%2018.753%2026.2365%2019.1729%2026.2131C21.4669%2026.0816%2023.7514%2025.823%2026.0153%2025.4386C26.3579%2023.5188%2026.6028%2021.5835%2026.7491%2019.6401C26.7557%2019.5502%2026.7432%2019.46%2026.7124%2019.3751C26.6816%2019.2902%2026.6331%2019.2124%2026.57%2019.1467C26.5069%2019.0809%2026.4306%2019.0285%2026.3457%2018.9928C26.2609%2018.9572%2026.1695%2018.939%2026.0771%2018.9394C25.6295%2018.9394%2025.2248%2019.168%2024.868%2019.4323C24.5023%2019.704%2024.0686%2019.8613%2023.6034%2019.8613C22.2984%2019.8613%2021.2393%2018.6234%2021.2393%2017.0954C21.2393%2015.5674%2022.2984%2014.3295%2023.6034%2014.3295C24.0699%2014.3295%2024.5023%2014.4869%2024.868%2014.7585C25.2248%2015.0228%2025.6295%2015.2515%2026.0783%2015.2515C26.1879%2015.2518%2026.2965%2015.2309%2026.3977%2015.19C26.4989%2015.1491%2026.5908%2015.089%2026.668%2015.0131C26.7452%2014.9373%2026.8061%2014.8473%2026.8473%2014.7483C26.8885%2014.6493%2026.9091%2014.5433%2026.908%2014.4364C26.8777%2012.2334%2026.7219%2010.0337%2026.4415%207.84742C24.0636%208.26784%2021.6378%208.55304%2019.1716%208.69441C19.0723%208.69978%2018.973%208.68529%2018.8797%208.65184C18.7864%208.61838%2018.7011%208.56668%2018.6291%208.49989C18.557%208.43311%2018.4998%208.35266%2018.4608%208.26349C18.4218%208.17433%2018.402%208.07957%2018.4025%207.98265Z'%20stroke='%23F0ECDD'%20stroke-width='2.05122'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Hy =
    "data:image/svg+xml,%3csvg%20width='31'%20height='30'%20viewBox='0%200%2031%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.3851%207.60875C18.3851%207.165%2018.6236%206.76375%2018.8992%206.41C19.1825%206.0475%2019.3466%205.6175%2019.3466%205.15625C19.3466%203.86125%2018.0556%202.8125%2016.462%202.8125C14.8684%202.8125%2013.5774%203.8625%2013.5774%205.15625C13.5774%205.6175%2013.7415%206.0475%2014.0248%206.41C14.3005%206.76375%2014.5389%207.165%2014.5389%207.60875C14.5395%207.71594%2014.518%207.82214%2014.4756%207.92105C14.4332%208.01995%2014.3709%208.10956%2014.2924%208.18453C14.2138%208.2595%2014.1206%208.31831%2014.0182%208.35747C13.9159%208.39664%2013.8065%208.41535%2013.6966%208.4125C11.9129%208.3624%2010.1322%208.23728%208.35946%208.0375C8.59792%2010.0538%208.7351%2012.1%208.76331%2014.1713C8.7645%2014.2799%208.74354%2014.3877%208.70164%2014.4883C8.65975%2014.589%208.59776%2014.6805%208.51927%2014.7576C8.44078%2014.8347%208.34737%2014.8959%208.24444%2014.9375C8.14152%2014.9791%208.03114%2015.0003%207.91972%2015C7.46459%2015%207.05305%2014.7675%206.69023%2014.4988C6.32276%2014.2189%205.87061%2014.0655%205.40433%2014.0625C4.07613%2014.0625%203.00049%2015.3213%203.00049%2016.875C3.00049%2018.4288%204.07741%2019.6875%205.40433%2019.6875C5.87741%2019.6875%206.31844%2019.5275%206.69023%2019.2513C7.05305%2018.9825%207.46459%2018.75%207.91972%2018.75C8.31715%2018.75%208.63126%2019.075%208.60177%2019.4625C8.4423%2021.5819%208.16756%2023.6915%207.77869%2025.7825C9.72485%2026.02%2011.6992%2026.1688%2013.6966%2026.225C13.8065%2026.2279%2013.9159%2026.2091%2014.0182%2026.17C14.1206%2026.1308%2014.2138%2026.072%2014.2924%2025.997C14.3709%2025.9221%2014.4332%2025.8325%2014.4756%2025.7335C14.518%2025.6346%2014.5395%2025.5284%2014.5389%2025.4213C14.5389%2024.9775%2014.3005%2024.5763%2014.0248%2024.2225C13.7378%2023.8642%2013.5805%2023.4234%2013.5774%2022.9688C13.5774%2021.675%2014.8697%2020.625%2016.462%2020.625C18.0556%2020.625%2019.3466%2021.675%2019.3466%2022.9688C19.3466%2023.43%2019.1825%2023.86%2018.8992%2024.2225C18.6236%2024.5763%2018.3864%2024.9775%2018.3864%2025.4213C18.3864%2025.8375%2018.7415%2026.17%2019.1684%2026.1463C21.5011%2026.0125%2023.8241%2025.7496%2026.1261%2025.3588C26.4744%2023.4065%2026.7235%2021.4387%2026.8723%2019.4625C26.879%2019.3712%2026.8663%2019.2794%2026.8349%2019.1931C26.8036%2019.1068%2026.7543%2019.0277%2026.6902%2018.9608C26.626%2018.8939%2026.5484%2018.8407%2026.4621%2018.8044C26.3759%2018.7681%2026.2829%2018.7496%2026.1889%2018.75C25.7338%2018.75%2025.3223%2018.9825%2024.9595%2019.2513C24.5877%2019.5275%2024.1466%2019.6875%2023.6736%2019.6875C22.3466%2019.6875%2021.2697%2018.4288%2021.2697%2016.875C21.2697%2015.3213%2022.3466%2014.0625%2023.6736%2014.0625C24.1479%2014.0625%2024.5877%2014.2225%2024.9595%2014.4988C25.3223%2014.7675%2025.7338%2015%2026.1902%2015C26.3016%2015.0003%2026.412%2014.9791%2026.515%2014.9375C26.6179%2014.8959%2026.7113%2014.8347%2026.7898%2014.7576C26.8683%2014.6805%2026.9303%2014.589%2026.9722%2014.4883C27.014%2014.3877%2027.035%2014.2799%2027.0338%2014.1713C27.003%2011.9311%2026.8446%209.6943%2026.5595%207.47125C24.1415%207.89875%2021.6748%208.18875%2019.1672%208.3325C19.0662%208.33796%2018.9652%208.32323%2018.8704%208.28921C18.7755%208.2552%2018.6888%208.20262%2018.6155%208.13471C18.5423%208.0668%2018.484%207.98499%2018.4444%207.89433C18.4048%207.80366%2018.3846%207.7073%2018.3851%207.60875Z'%20fill='%23F0ECDD'/%3e%3c/svg%3e",
  Uy =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%207L17%2017M17%207L7%2017'%20stroke='%23F0ECDD'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",
  Yu = "/Sagnir/assets/huldufolk%201-DVpisFML.png",
  Zl = "/Sagnir/assets/huldu1%201-CJw3zHXs.png",
  Hl = "/Sagnir/assets/MYND4-CxoIp5OT.png",
  Vd = "/Sagnir/assets/MYND3-yTOW6P53.png",
  Qd = "/Sagnir/assets/MYND2-DGZcNat4.png",
  $d = "/Sagnir/assets/MYND1-D_6zPXhi.png",
  Gd = "/Sagnir/assets/ghosts-BH2H6Qhf.png",
  Kd = "/Sagnir/assets/hidden%20people-7bEuss-1.svg",
  qd = "/Sagnir/assets/hidden%20people%202-CpSBXkZT.svg",
  Yd = "/Sagnir/assets/MYND5-DxxCEBWS.png",
  Xd = "/Sagnir/assets/gillitrut-C1So8w9d.png",
  G0 = ({ data: e, categoryName: t }) => {
    const [i, o] = z.useState([]),
      [, s] = z.useState(!1),
      l = Ma(),
      c = {
        default: [Yu, Zl, Hl, Vd, Qd, $d, Gd, Kd, qd, Yd, Zl, Xd],
        troll: [Vd, $d, Qd],
        draug: [Gd, Hl, Xd],
        alfa: [Yu, qd, Kd],
        efra: [Zl, Hl, Yd],
      },
      d = (typeof t == "string" && c[t.toLowerCase()]) || c.default,
      f = {
        "Álfadrottning í álögum": "alfa-dr",
        "Álfafólkið í Loðmundarfirði": "a-lodmfj",
        "Álfakóngurinn í Seley": "seley",
        "Ábæjar-Skotta": "skotta3",
        "Átján draugar úr Blöndu": "18draug",
        "Átján sendingar í senn": "18send",
        "Átján Skólabræður": "18skolab",
        "Andrarímur og Hallgrímsrímur": "andra",
        "Bergþór Bláfellingur": "blafell",
        Bakkastaður: "bakka",
        "Brytinn í Skálholti": "brytinn",
        "Dansinn í Hruna": "hruna",
      };
    z.useEffect(() => {
      if (t === "alfa" && e) {
        const y = Object.keys(f).filter((g) =>
          [
            "Álfadrottning í álögum",
            "Álfafólkið í Loðmundarfirði",
            "Álfakóngurinn í Seley",
          ].includes(g)
        );
        o(y);
      } else if (t === "all" && e) {
        const y = Array.isArray(e)
          ? e.flatMap((g) =>
              Object.values(g == null ? void 0 : g.stories.stories).flat()
            )
          : Object.values((e == null ? void 0 : e.stories) || {});
        s(!0), o(y);
      } else if (!Array.isArray(e) && e.category !== "all") {
        const y = Object.values((e == null ? void 0 : e.stories) || {});
        s(!1), o(y);
      }
    }, [e, t]);
    const m = (y, g) => {
      const x = {
          Allt: "all",
          Tröll: "troll",
          Draugar: "draugar",
          "alfar-og-huldufolk": "alfa",
          Helgisögur: "ur-efra-og-nedra-helgisogur",
        },
        k = {
          "Álfadrottning í álögum": "alfa-dr",
          "Álfafólkið í Loðmundarfirði": "a-lodmfj",
          "Álfakóngurinn í Seley": "seley",
          "Ábæjar-Skotta": "skotta3",
          "Átján draugar úr Blöndu": "18draug",
          "Átján sendingar í senn": "18send",
          "Átján Skólabræður": "18skolab",
          "Andrarímur og Hallgrímsrímur": "andra",
          "Bergþór Bláfellingur": "blafell",
          Bakkastaður: "bakka",
          "Brytinn í Skálholti": "brytinn",
          "Dansinn í Hruna": "hruna",
        },
        M = x[g] || g,
        P = k[y] || y;
      l(`/stories/${M}/${P}`);
    };
    return !i || i.length === 0
      ? O.jsx("p", {
          className: "text-center",
          children: "No stories available for this category.",
        })
      : O.jsx("div", {
          className:
            "bg-sagnir-100 flex flex-wrap flex-col justify-center w-full gap-4",
          children: i.slice(0, t === "all" ? 12 : 3).map((y, g) => {
            const x =
                (y == null ? void 0 : y.replace(/[/]/g, "")) || "Untitled",
              k = d[g] || "default-photo-path.svg";
            return O.jsx(
              "figure",
              {
                className: "flex flex-col items-center w-full",
                children: O.jsxs("header", {
                  className: "relative w-full",
                  children: [
                    O.jsx("img", {
                      src: k,
                      alt: `Story ${x}`,
                      className: "w-full h-auto rounded-lg",
                    }),
                    O.jsx("h2", {
                      className:
                        "absolute bottom-2 left-2 text-sagnir-200 font-serifExtra text-2xl md:text-5xl px-2 py-1 rounded-md cursor-pointer",
                      onClick: () => m(y, t),
                      children: x,
                    }),
                  ],
                }),
              },
              g
            );
          }),
        });
  },
  K0 = ({ isSearchOpen: e, setIsSearchOpen: t }) => {
    const [i, o] = z.useState(""),
      [s, l] = z.useState([]),
      [c, d] = z.useState([]),
      f = [
        "Álfadrottning í álögum",
        "Álfafólkið í Loðmundarfirði",
        "Álfakóngurinn í Seley",
        "Ábæjar-Skotta",
        "Átján draugar úr Blöndu",
        "Átján sendingar í senn",
        "Átján Skólabræður",
        "Andrarímur og Hallgrímsrímur",
        "Bergþór Bláfellingur",
        "Bakkastaður",
        "Brytinn í Skálholti",
        "Dansinn í Hruna",
      ];
    return (
      z.useEffect(() => {
        (async () => {
          const g = await (
              await fetch("https://m4groupproject.onrender.com/all")
            ).json(),
            k = (
              g == null
                ? void 0
                : g.flatMap((M) => {
                    const P = Object.values(M.stories.stories);
                    return console.log("Stories", P), P.map((R) => R);
                  })
            ).filter((M) => f.includes(M));
          console.log("filtered stories", k), l(k);
        })();
      }, []),
      z.useEffect(() => {
        if ((console.log("All stories", s), !s.length)) {
          d([]);
          return;
        }
        if (i.trim() === "") {
          d([]);
          return;
        }
        const m = s.filter((y) => y.toLowerCase().includes(i.toLowerCase()));
        d(m);
      }, [s, i]),
      O.jsxs("div", {
        className: `fixed inset-0 bg-sagnir-100 bg-opacity-50 z-50 transition-opacity duration-300 ${
          e
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`,
        children: [
          O.jsx("div", {
            className:
              "absolute bottom-12 inset-x-4 mb-2 md:inset-x-96 w-[350px] md:w-[465px]  bg-sagnir-100 p-4 rounded-md shadow-lg flex items-center space-x-3",
            children: O.jsxs("div", {
              className: "relative flex items-center w-full",
              children: [
                O.jsx("img", {
                  src: $0,
                  alt: "Search Icon",
                  className: "absolute left-3 h-5 w-5",
                }),
                O.jsx("input", {
                  className:
                    "bg-sagnir-100 text-sagnir-200 font-glare px-10 py-2 rounded-md w-full border border-sagnir-200 focus:outline-none focus:ring-2 focus:ring-sagnir-300",
                  type: "text",
                  placeholder: "Search...",
                  value: i,
                  onChange: (m) => o(m.target.value),
                }),
                O.jsx("button", {
                  onClick: () => t(!1),
                  className: "absolute right-3",
                  children: O.jsx("img", {
                    src: Uy,
                    alt: "Close Icon",
                    className: "h-5 w-5",
                  }),
                }),
              ],
            }),
          }),
          O.jsx("div", {
            className:
              "absolute bottom-24 left-4 right-4 mb-2 -z-10 md:left-96 md:right-96 w-[350px] md:w-[465px] text-sagnir-200 bg-sagnir-100 rounded-lg shadow-md p-4 font-glare",
            children:
              c && c.length
                ? O.jsx(G0, {
                    data: { category: "", stories: c },
                    categoryName: "all",
                  })
                : null,
          }),
        ],
      })
    );
  },
  Wy = () => {
    const [e, t] = z.useState("StoriesPage"),
      [i, o] = z.useState(!1);
    return O.jsxs(O.Fragment, {
      children: [
        O.jsx(K0, { isSearchOpen: i, setIsSearchOpen: o }),
        O.jsx("nav", {
          className:
            "w-full bg-sagnir-100 fixed bottom-0 border-t border-s-sagnir-200",
          children: O.jsxs("ul", {
            className: "flex justify-around items-center py-4",
            children: [
              O.jsx("li", {
                onClick: () => t("StoriesPage"),
                children: O.jsx(Fl, {
                  to: "/stories",
                  children: O.jsx("img", {
                    src: e === "StoriesPage" ? By : Dy,
                    alt: "StoriesPage",
                    className: "h-7 w-7",
                  }),
                }),
              }),
              O.jsx("li", {
                onClick: () => {
                  t("SearchPage"), o(!0);
                },
                children: O.jsx("img", {
                  src: $0,
                  alt: "Search",
                  className: "h-6 w-6 cursor-pointer",
                }),
              }),
              O.jsx("li", {
                onClick: () => t("MapPage"),
                children: O.jsx(Fl, {
                  to: "/map",
                  children: O.jsx("img", {
                    src: e === "MapPage" ? Fy : by,
                    alt: "MapPage",
                    className: "h-6 w-6",
                  }),
                }),
              }),
              O.jsx("li", {
                onClick: () => t("QuizPage"),
                children: O.jsx(Fl, {
                  to: "/quiz",
                  children: O.jsx("img", {
                    src: e === "QuizPage" ? Hy : Zy,
                    alt: "quizpage",
                    className: "h-7 w-7",
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  q0 = (e) => {
    const {
      data: t,
      isLoading: i,
      error: o,
    } = j1({
      queryKey: [e],
      queryFn: async () => await (await fetch(e)).json(),
      staleTime: 6e3,
      retry: 1,
    });
    return { data: t, isLoading: i, error: o };
  },
  Vy = "/Sagnir/assets/Logo-BaKtupv0.svg",
  Qy = () =>
    O.jsxs("header", {
      className: "w-full p-5 bg-sagnir-100 sticky top-0 z-30",
      children: [
        O.jsx("div", {
          className: "flex flex-col md:flex md:flex-row md:justify-center",
          children: O.jsx("div", {
            className: "w-11 h-11 mb-7",
            children: O.jsx("img", { src: Vy }),
          }),
        }),
        O.jsx("h1", {
          className:
            "font-glare text-4xl text-sagnir-200 mb-5 md:text-5xl md:text-center",
          children: "SÖGUR",
        }),
        O.jsx("p", {
          className:
            "font-glare text-sagnir-200 text-md md:text-2xl md:text-center",
          children: "Sökkvum okkur ofan í íslenskar þjóðsögur",
        }),
      ],
    }),
  $y = ({ data: e, setClickedCategory: t }) => {
    const [i, o] = z.useState("Allt"),
      s = (l) => {
        let c = l;
        c === "Allt" && (c = "all"),
          c === "Tröll" && (c = "troll"),
          c === "Draugar" && (c = "draug"),
          c === "Álfar og huldufólk" && (c = "alfa"),
          c === "Helgisögur" && (c = "efra"),
          console.log("Category test", c),
          o(l),
          t(c);
      };
    return O.jsx("div", {
      className: "flex flex-row bg-sagnir-100 text-sagnir-200 text-lg",
      children: O.jsxs("ul", {
        className:
          "flex flex-row gap-10 justify-between overflow-x-scroll md:w-full md:text-2xl py-4 px-4",
        children: [
          e.length > 0
            ? O.jsx("li", {
                onClick: (l) => s(l.target.innerText),
                className: `pl-2 cursor-pointer ${
                  i === "Allt"
                    ? "border-b-2 border-sagnir-200"
                    : "hover:border-b-2 hover:border-sagnir-200"
                }`,
                children: "Allt",
              })
            : null,
          e.length > 0
            ? e.map((l) =>
                O.jsx(
                  "li",
                  {
                    onClick: () => s(l),
                    className: `flex-align font-glare text-md text-nowrap cursor-pointer ${
                      i === l
                        ? "border-b-2 border-sagnir-200"
                        : "hover:border-b-2 hover:border-sagnir-200"
                    }`,
                    children: l,
                  },
                  l
                )
              )
            : null,
        ],
      }),
    });
  },
  Jd = () => {
    const [e, t] = z.useState([]),
      [i, o] = z.useState([]),
      [s, l] = z.useState("all"),
      [c, d] = z.useState(null),
      { data: f, isLoading: m, error: y } = q0("https://m4groupproject.onrender.com/");
    return (
      z.useEffect(() => {
        const g = [];
        f && g.push(f[0], f[1], f[4], f[5]), t(g);
      }, [f]),
      z.useEffect(() => {
        const x = [...e].reduce(
          (M, P, R) => (
            P != null && P.category && (M[`category_${R}`] = P.category), M
          ),
          {}
        );
        (x.category_0 = "Álfar og huldufólk"),
          (x.category_1 = "Draugar"),
          (x.category_2 = "Tröll"),
          (x.category_3 = "Helgisögur");
        const k = Object.values(x);
        o(k);
      }, [e]),
      z.useEffect(() => {
        (async (x) => {
          try {
            const M = await (
              await fetch(`https://m4groupproject.onrender.com/${x}`)
            ).json();
            d(M);
          } catch (k) {
            console.error("Error fetching category stories:", k);
          }
        })(s);
      }, [s]),
      O.jsxs("div", {
        className: "z-10 bg-sagnir-100 pb-8",
        children: [
          O.jsx(Qy, {}),
          i.length > 0 && !m && !y
            ? O.jsx("div", {
                className: "sticky top-[190px] z-30 bg-sagnir-100",
                children: O.jsx($y, { data: i, setClickedCategory: l }),
              })
            : null,
          O.jsx("div", {
            className: "pt-2 pb-9 overflow-hidden",
            children: c ? O.jsx(G0, { data: c, categoryName: s }) : null,
          }),
        ],
      })
    );
  };
function Y0(e, t) {
  const i = z.useRef(t);
  z.useEffect(
    function () {
      t !== i.current &&
        e.attributionControl != null &&
        (i.current != null && e.attributionControl.removeAttribution(i.current),
        t != null && e.attributionControl.addAttribution(t)),
        (i.current = t);
    },
    [e, t]
  );
}
const Gy = 1;
function Ky(e) {
  return Object.freeze({ __version: Gy, map: e });
}
function qy(e, t) {
  return Object.freeze({ ...e, ...t });
}
const X0 = z.createContext(null),
  J0 = X0.Provider;
function eg() {
  const e = z.useContext(X0);
  if (e == null)
    throw new Error(
      "No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>"
    );
  return e;
}
function Yy(e) {
  function t(i, o) {
    const { instance: s, context: l } = e(i).current;
    return (
      z.useImperativeHandle(o, () => s),
      i.children == null ? null : Ds.createElement(J0, { value: l }, i.children)
    );
  }
  return z.forwardRef(t);
}
function Xy(e) {
  function t(i, o) {
    const [s, l] = z.useState(!1),
      { instance: c } = e(i, l).current;
    z.useImperativeHandle(o, () => c),
      z.useEffect(
        function () {
          s && c.update();
        },
        [c, s, i.children]
      );
    const d = c._contentNode;
    return d ? P0.createPortal(i.children, d) : null;
  }
  return z.forwardRef(t);
}
function Jy(e) {
  function t(i, o) {
    const { instance: s } = e(i).current;
    return z.useImperativeHandle(o, () => s), null;
  }
  return z.forwardRef(t);
}
function tg(e, t) {
  const i = z.useRef();
  z.useEffect(
    function () {
      return (
        t != null && e.instance.on(t),
        (i.current = t),
        function () {
          i.current != null && e.instance.off(i.current), (i.current = null);
        }
      );
    },
    [e, t]
  );
}
function th(e, t) {
  const i = e.pane ?? t.pane;
  return i ? { ...e, pane: i } : e;
}
function ew(e, t) {
  return function (o, s) {
    const l = eg(),
      c = e(th(o, l), l);
    return (
      Y0(l.map, o.attribution),
      tg(c.current, o.eventHandlers),
      t(c.current, l, o, s),
      c
    );
  };
}
var Xu = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (e, t) {
  (function (i, o) {
    o(t);
  })(Mv, function (i) {
    var o = "1.9.4";
    function s(n) {
      var r, a, u, h;
      for (a = 1, u = arguments.length; a < u; a++) {
        h = arguments[a];
        for (r in h) n[r] = h[r];
      }
      return n;
    }
    var l =
      Object.create ||
      (function () {
        function n() {}
        return function (r) {
          return (n.prototype = r), new n();
        };
      })();
    function c(n, r) {
      var a = Array.prototype.slice;
      if (n.bind) return n.bind.apply(n, a.call(arguments, 1));
      var u = a.call(arguments, 2);
      return function () {
        return n.apply(r, u.length ? u.concat(a.call(arguments)) : arguments);
      };
    }
    var d = 0;
    function f(n) {
      return "_leaflet_id" in n || (n._leaflet_id = ++d), n._leaflet_id;
    }
    function m(n, r, a) {
      var u, h, p, _;
      return (
        (_ = function () {
          (u = !1), h && (p.apply(a, h), (h = !1));
        }),
        (p = function () {
          u
            ? (h = arguments)
            : (n.apply(a, arguments), setTimeout(_, r), (u = !0));
        }),
        p
      );
    }
    function y(n, r, a) {
      var u = r[1],
        h = r[0],
        p = u - h;
      return n === u && a ? n : ((((n - h) % p) + p) % p) + h;
    }
    function g() {
      return !1;
    }
    function x(n, r) {
      if (r === !1) return n;
      var a = Math.pow(10, r === void 0 ? 6 : r);
      return Math.round(n * a) / a;
    }
    function k(n) {
      return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
    }
    function M(n) {
      return k(n).split(/\s+/);
    }
    function P(n, r) {
      Object.prototype.hasOwnProperty.call(n, "options") ||
        (n.options = n.options ? l(n.options) : {});
      for (var a in r) n.options[a] = r[a];
      return n.options;
    }
    function R(n, r, a) {
      var u = [];
      for (var h in n)
        u.push(
          encodeURIComponent(a ? h.toUpperCase() : h) +
            "=" +
            encodeURIComponent(n[h])
        );
      return (!r || r.indexOf("?") === -1 ? "?" : "&") + u.join("&");
    }
    var C = /\{ *([\w_ -]+) *\}/g;
    function v(n, r) {
      return n.replace(C, function (a, u) {
        var h = r[u];
        if (h === void 0)
          throw new Error("No value provided for variable " + a);
        return typeof h == "function" && (h = h(r)), h;
      });
    }
    var w =
      Array.isArray ||
      function (n) {
        return Object.prototype.toString.call(n) === "[object Array]";
      };
    function N(n, r) {
      for (var a = 0; a < n.length; a++) if (n[a] === r) return a;
      return -1;
    }
    var D = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function Z(n) {
      return window["webkit" + n] || window["moz" + n] || window["ms" + n];
    }
    var F = 0;
    function b(n) {
      var r = +new Date(),
        a = Math.max(0, 16 - (r - F));
      return (F = r + a), window.setTimeout(n, a);
    }
    var Q = window.requestAnimationFrame || Z("RequestAnimationFrame") || b,
      K =
        window.cancelAnimationFrame ||
        Z("CancelAnimationFrame") ||
        Z("CancelRequestAnimationFrame") ||
        function (n) {
          window.clearTimeout(n);
        };
    function se(n, r, a) {
      if (a && Q === b) n.call(r);
      else return Q.call(window, c(n, r));
    }
    function ye(n) {
      n && K.call(window, n);
    }
    var qn = {
      __proto__: null,
      extend: s,
      create: l,
      bind: c,
      get lastId() {
        return d;
      },
      stamp: f,
      throttle: m,
      wrapNum: y,
      falseFn: g,
      formatNum: x,
      trim: k,
      splitWords: M,
      setOptions: P,
      getParamString: R,
      template: v,
      isArray: w,
      indexOf: N,
      emptyImageUrl: D,
      requestFn: Q,
      cancelFn: K,
      requestAnimFrame: se,
      cancelAnimFrame: ye,
    };
    function vt() {}
    (vt.extend = function (n) {
      var r = function () {
          P(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks();
        },
        a = (r.__super__ = this.prototype),
        u = l(a);
      (u.constructor = r), (r.prototype = u);
      for (var h in this)
        Object.prototype.hasOwnProperty.call(this, h) &&
          h !== "prototype" &&
          h !== "__super__" &&
          (r[h] = this[h]);
      return (
        n.statics && s(r, n.statics),
        n.includes && (Oa(n.includes), s.apply(null, [u].concat(n.includes))),
        s(u, n),
        delete u.statics,
        delete u.includes,
        u.options &&
          ((u.options = a.options ? l(a.options) : {}),
          s(u.options, n.options)),
        (u._initHooks = []),
        (u.callInitHooks = function () {
          if (!this._initHooksCalled) {
            a.callInitHooks && a.callInitHooks.call(this),
              (this._initHooksCalled = !0);
            for (var p = 0, _ = u._initHooks.length; p < _; p++)
              u._initHooks[p].call(this);
          }
        }),
        r
      );
    }),
      (vt.include = function (n) {
        var r = this.prototype.options;
        return (
          s(this.prototype, n),
          n.options &&
            ((this.prototype.options = r), this.mergeOptions(n.options)),
          this
        );
      }),
      (vt.mergeOptions = function (n) {
        return s(this.prototype.options, n), this;
      }),
      (vt.addInitHook = function (n) {
        var r = Array.prototype.slice.call(arguments, 1),
          a =
            typeof n == "function"
              ? n
              : function () {
                  this[n].apply(this, r);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(a),
          this
        );
      });
    function Oa(n) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        n = w(n) ? n : [n];
        for (var r = 0; r < n.length; r++)
          n[r] === L.Mixin.Events &&
            console.warn(
              "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
              new Error().stack
            );
      }
    }
    var Be = {
      on: function (n, r, a) {
        if (typeof n == "object") for (var u in n) this._on(u, n[u], r);
        else {
          n = M(n);
          for (var h = 0, p = n.length; h < p; h++) this._on(n[h], r, a);
        }
        return this;
      },
      off: function (n, r, a) {
        if (!arguments.length) delete this._events;
        else if (typeof n == "object") for (var u in n) this._off(u, n[u], r);
        else {
          n = M(n);
          for (var h = arguments.length === 1, p = 0, _ = n.length; p < _; p++)
            h ? this._off(n[p]) : this._off(n[p], r, a);
        }
        return this;
      },
      _on: function (n, r, a, u) {
        if (typeof r != "function") {
          console.warn("wrong listener type: " + typeof r);
          return;
        }
        if (this._listens(n, r, a) === !1) {
          a === this && (a = void 0);
          var h = { fn: r, ctx: a };
          u && (h.once = !0),
            (this._events = this._events || {}),
            (this._events[n] = this._events[n] || []),
            this._events[n].push(h);
        }
      },
      _off: function (n, r, a) {
        var u, h, p;
        if (this._events && ((u = this._events[n]), !!u)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (h = 0, p = u.length; h < p; h++) u[h].fn = g;
            delete this._events[n];
            return;
          }
          if (typeof r != "function") {
            console.warn("wrong listener type: " + typeof r);
            return;
          }
          var _ = this._listens(n, r, a);
          if (_ !== !1) {
            var E = u[_];
            this._firingCount &&
              ((E.fn = g), (this._events[n] = u = u.slice())),
              u.splice(_, 1);
          }
        }
      },
      fire: function (n, r, a) {
        if (!this.listens(n, a)) return this;
        var u = s({}, r, {
          type: n,
          target: this,
          sourceTarget: (r && r.sourceTarget) || this,
        });
        if (this._events) {
          var h = this._events[n];
          if (h) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var p = 0, _ = h.length; p < _; p++) {
              var E = h[p],
                T = E.fn;
              E.once && this.off(n, T, E.ctx), T.call(E.ctx || this, u);
            }
            this._firingCount--;
          }
        }
        return a && this._propagateEvent(u), this;
      },
      listens: function (n, r, a, u) {
        typeof n != "string" && console.warn('"string" type argument expected');
        var h = r;
        typeof r != "function" && ((u = !!r), (h = void 0), (a = void 0));
        var p = this._events && this._events[n];
        if (p && p.length && this._listens(n, h, a) !== !1) return !0;
        if (u) {
          for (var _ in this._eventParents)
            if (this._eventParents[_].listens(n, r, a, u)) return !0;
        }
        return !1;
      },
      _listens: function (n, r, a) {
        if (!this._events) return !1;
        var u = this._events[n] || [];
        if (!r) return !!u.length;
        a === this && (a = void 0);
        for (var h = 0, p = u.length; h < p; h++)
          if (u[h].fn === r && u[h].ctx === a) return h;
        return !1;
      },
      once: function (n, r, a) {
        if (typeof n == "object") for (var u in n) this._on(u, n[u], r, !0);
        else {
          n = M(n);
          for (var h = 0, p = n.length; h < p; h++) this._on(n[h], r, a, !0);
        }
        return this;
      },
      addEventParent: function (n) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[f(n)] = n),
          this
        );
      },
      removeEventParent: function (n) {
        return this._eventParents && delete this._eventParents[f(n)], this;
      },
      _propagateEvent: function (n) {
        for (var r in this._eventParents)
          this._eventParents[r].fire(
            n.type,
            s({ layer: n.target, propagatedFrom: n.target }, n),
            !0
          );
      },
    };
    (Be.addEventListener = Be.on),
      (Be.removeEventListener = Be.clearAllEventListeners = Be.off),
      (Be.addOneTimeEventListener = Be.once),
      (Be.fireEvent = Be.fire),
      (Be.hasEventListeners = Be.listens);
    var Jt = vt.extend(Be);
    function I(n, r, a) {
      (this.x = a ? Math.round(n) : n), (this.y = a ? Math.round(r) : r);
    }
    var Y =
      Math.trunc ||
      function (n) {
        return n > 0 ? Math.floor(n) : Math.ceil(n);
      };
    I.prototype = {
      clone: function () {
        return new I(this.x, this.y);
      },
      add: function (n) {
        return this.clone()._add(B(n));
      },
      _add: function (n) {
        return (this.x += n.x), (this.y += n.y), this;
      },
      subtract: function (n) {
        return this.clone()._subtract(B(n));
      },
      _subtract: function (n) {
        return (this.x -= n.x), (this.y -= n.y), this;
      },
      divideBy: function (n) {
        return this.clone()._divideBy(n);
      },
      _divideBy: function (n) {
        return (this.x /= n), (this.y /= n), this;
      },
      multiplyBy: function (n) {
        return this.clone()._multiplyBy(n);
      },
      _multiplyBy: function (n) {
        return (this.x *= n), (this.y *= n), this;
      },
      scaleBy: function (n) {
        return new I(this.x * n.x, this.y * n.y);
      },
      unscaleBy: function (n) {
        return new I(this.x / n.x, this.y / n.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = Y(this.x)), (this.y = Y(this.y)), this;
      },
      distanceTo: function (n) {
        n = B(n);
        var r = n.x - this.x,
          a = n.y - this.y;
        return Math.sqrt(r * r + a * a);
      },
      equals: function (n) {
        return (n = B(n)), n.x === this.x && n.y === this.y;
      },
      contains: function (n) {
        return (
          (n = B(n)),
          Math.abs(n.x) <= Math.abs(this.x) && Math.abs(n.y) <= Math.abs(this.y)
        );
      },
      toString: function () {
        return "Point(" + x(this.x) + ", " + x(this.y) + ")";
      },
    };
    function B(n, r, a) {
      return n instanceof I
        ? n
        : w(n)
        ? new I(n[0], n[1])
        : n == null
        ? n
        : typeof n == "object" && "x" in n && "y" in n
        ? new I(n.x, n.y)
        : new I(n, r, a);
    }
    function q(n, r) {
      if (n)
        for (var a = r ? [n, r] : n, u = 0, h = a.length; u < h; u++)
          this.extend(a[u]);
    }
    q.prototype = {
      extend: function (n) {
        var r, a;
        if (!n) return this;
        if (n instanceof I || typeof n[0] == "number" || "x" in n) r = a = B(n);
        else if (((n = ae(n)), (r = n.min), (a = n.max), !r || !a)) return this;
        return (
          !this.min && !this.max
            ? ((this.min = r.clone()), (this.max = a.clone()))
            : ((this.min.x = Math.min(r.x, this.min.x)),
              (this.max.x = Math.max(a.x, this.max.x)),
              (this.min.y = Math.min(r.y, this.min.y)),
              (this.max.y = Math.max(a.y, this.max.y))),
          this
        );
      },
      getCenter: function (n) {
        return B(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          n
        );
      },
      getBottomLeft: function () {
        return B(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return B(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (n) {
        var r, a;
        return (
          typeof n[0] == "number" || n instanceof I ? (n = B(n)) : (n = ae(n)),
          n instanceof q ? ((r = n.min), (a = n.max)) : (r = a = n),
          r.x >= this.min.x &&
            a.x <= this.max.x &&
            r.y >= this.min.y &&
            a.y <= this.max.y
        );
      },
      intersects: function (n) {
        n = ae(n);
        var r = this.min,
          a = this.max,
          u = n.min,
          h = n.max,
          p = h.x >= r.x && u.x <= a.x,
          _ = h.y >= r.y && u.y <= a.y;
        return p && _;
      },
      overlaps: function (n) {
        n = ae(n);
        var r = this.min,
          a = this.max,
          u = n.min,
          h = n.max,
          p = h.x > r.x && u.x < a.x,
          _ = h.y > r.y && u.y < a.y;
        return p && _;
      },
      isValid: function () {
        return !!(this.min && this.max);
      },
      pad: function (n) {
        var r = this.min,
          a = this.max,
          u = Math.abs(r.x - a.x) * n,
          h = Math.abs(r.y - a.y) * n;
        return ae(B(r.x - u, r.y - h), B(a.x + u, a.y + h));
      },
      equals: function (n) {
        return n
          ? ((n = ae(n)),
            this.min.equals(n.getTopLeft()) &&
              this.max.equals(n.getBottomRight()))
          : !1;
      },
    };
    function ae(n, r) {
      return !n || n instanceof q ? n : new q(n, r);
    }
    function Ne(n, r) {
      if (n)
        for (var a = r ? [n, r] : n, u = 0, h = a.length; u < h; u++)
          this.extend(a[u]);
    }
    Ne.prototype = {
      extend: function (n) {
        var r = this._southWest,
          a = this._northEast,
          u,
          h;
        if (n instanceof ue) (u = n), (h = n);
        else if (n instanceof Ne) {
          if (((u = n._southWest), (h = n._northEast), !u || !h)) return this;
        } else return n ? this.extend(X(n) || de(n)) : this;
        return (
          !r && !a
            ? ((this._southWest = new ue(u.lat, u.lng)),
              (this._northEast = new ue(h.lat, h.lng)))
            : ((r.lat = Math.min(u.lat, r.lat)),
              (r.lng = Math.min(u.lng, r.lng)),
              (a.lat = Math.max(h.lat, a.lat)),
              (a.lng = Math.max(h.lng, a.lng))),
          this
        );
      },
      pad: function (n) {
        var r = this._southWest,
          a = this._northEast,
          u = Math.abs(r.lat - a.lat) * n,
          h = Math.abs(r.lng - a.lng) * n;
        return new Ne(
          new ue(r.lat - u, r.lng - h),
          new ue(a.lat + u, a.lng + h)
        );
      },
      getCenter: function () {
        return new ue(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new ue(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new ue(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (n) {
        typeof n[0] == "number" || n instanceof ue || "lat" in n
          ? (n = X(n))
          : (n = de(n));
        var r = this._southWest,
          a = this._northEast,
          u,
          h;
        return (
          n instanceof Ne
            ? ((u = n.getSouthWest()), (h = n.getNorthEast()))
            : (u = h = n),
          u.lat >= r.lat && h.lat <= a.lat && u.lng >= r.lng && h.lng <= a.lng
        );
      },
      intersects: function (n) {
        n = de(n);
        var r = this._southWest,
          a = this._northEast,
          u = n.getSouthWest(),
          h = n.getNorthEast(),
          p = h.lat >= r.lat && u.lat <= a.lat,
          _ = h.lng >= r.lng && u.lng <= a.lng;
        return p && _;
      },
      overlaps: function (n) {
        n = de(n);
        var r = this._southWest,
          a = this._northEast,
          u = n.getSouthWest(),
          h = n.getNorthEast(),
          p = h.lat > r.lat && u.lat < a.lat,
          _ = h.lng > r.lng && u.lng < a.lng;
        return p && _;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (n, r) {
        return n
          ? ((n = de(n)),
            this._southWest.equals(n.getSouthWest(), r) &&
              this._northEast.equals(n.getNorthEast(), r))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      },
    };
    function de(n, r) {
      return n instanceof Ne ? n : new Ne(n, r);
    }
    function ue(n, r, a) {
      if (isNaN(n) || isNaN(r))
        throw new Error("Invalid LatLng object: (" + n + ", " + r + ")");
      (this.lat = +n), (this.lng = +r), a !== void 0 && (this.alt = +a);
    }
    ue.prototype = {
      equals: function (n, r) {
        if (!n) return !1;
        n = X(n);
        var a = Math.max(
          Math.abs(this.lat - n.lat),
          Math.abs(this.lng - n.lng)
        );
        return a <= (r === void 0 ? 1e-9 : r);
      },
      toString: function (n) {
        return "LatLng(" + x(this.lat, n) + ", " + x(this.lng, n) + ")";
      },
      distanceTo: function (n) {
        return gn.distance(this, X(n));
      },
      wrap: function () {
        return gn.wrapLatLng(this);
      },
      toBounds: function (n) {
        var r = (180 * n) / 40075017,
          a = r / Math.cos((Math.PI / 180) * this.lat);
        return de([this.lat - r, this.lng - a], [this.lat + r, this.lng + a]);
      },
      clone: function () {
        return new ue(this.lat, this.lng, this.alt);
      },
    };
    function X(n, r, a) {
      return n instanceof ue
        ? n
        : w(n) && typeof n[0] != "object"
        ? n.length === 3
          ? new ue(n[0], n[1], n[2])
          : n.length === 2
          ? new ue(n[0], n[1])
          : null
        : n == null
        ? n
        : typeof n == "object" && "lat" in n
        ? new ue(n.lat, "lng" in n ? n.lng : n.lon, n.alt)
        : r === void 0
        ? null
        : new ue(n, r, a);
    }
    var nt = {
        latLngToPoint: function (n, r) {
          var a = this.projection.project(n),
            u = this.scale(r);
          return this.transformation._transform(a, u);
        },
        pointToLatLng: function (n, r) {
          var a = this.scale(r),
            u = this.transformation.untransform(n, a);
          return this.projection.unproject(u);
        },
        project: function (n) {
          return this.projection.project(n);
        },
        unproject: function (n) {
          return this.projection.unproject(n);
        },
        scale: function (n) {
          return 256 * Math.pow(2, n);
        },
        zoom: function (n) {
          return Math.log(n / 256) / Math.LN2;
        },
        getProjectedBounds: function (n) {
          if (this.infinite) return null;
          var r = this.projection.bounds,
            a = this.scale(n),
            u = this.transformation.transform(r.min, a),
            h = this.transformation.transform(r.max, a);
          return new q(u, h);
        },
        infinite: !1,
        wrapLatLng: function (n) {
          var r = this.wrapLng ? y(n.lng, this.wrapLng, !0) : n.lng,
            a = this.wrapLat ? y(n.lat, this.wrapLat, !0) : n.lat,
            u = n.alt;
          return new ue(a, r, u);
        },
        wrapLatLngBounds: function (n) {
          var r = n.getCenter(),
            a = this.wrapLatLng(r),
            u = r.lat - a.lat,
            h = r.lng - a.lng;
          if (u === 0 && h === 0) return n;
          var p = n.getSouthWest(),
            _ = n.getNorthEast(),
            E = new ue(p.lat - u, p.lng - h),
            T = new ue(_.lat - u, _.lng - h);
          return new Ne(E, T);
        },
      },
      gn = s({}, nt, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (n, r) {
          var a = Math.PI / 180,
            u = n.lat * a,
            h = r.lat * a,
            p = Math.sin(((r.lat - n.lat) * a) / 2),
            _ = Math.sin(((r.lng - n.lng) * a) / 2),
            E = p * p + Math.cos(u) * Math.cos(h) * _ * _,
            T = 2 * Math.atan2(Math.sqrt(E), Math.sqrt(1 - E));
          return this.R * T;
        },
      }),
      rh = 6378137,
      za = {
        R: rh,
        MAX_LATITUDE: 85.0511287798,
        project: function (n) {
          var r = Math.PI / 180,
            a = this.MAX_LATITUDE,
            u = Math.max(Math.min(a, n.lat), -a),
            h = Math.sin(u * r);
          return new I(
            this.R * n.lng * r,
            (this.R * Math.log((1 + h) / (1 - h))) / 2
          );
        },
        unproject: function (n) {
          var r = 180 / Math.PI;
          return new ue(
            (2 * Math.atan(Math.exp(n.y / this.R)) - Math.PI / 2) * r,
            (n.x * r) / this.R
          );
        },
        bounds: (function () {
          var n = rh * Math.PI;
          return new q([-n, -n], [n, n]);
        })(),
      };
    function Na(n, r, a, u) {
      if (w(n)) {
        (this._a = n[0]), (this._b = n[1]), (this._c = n[2]), (this._d = n[3]);
        return;
      }
      (this._a = n), (this._b = r), (this._c = a), (this._d = u);
    }
    Na.prototype = {
      transform: function (n, r) {
        return this._transform(n.clone(), r);
      },
      _transform: function (n, r) {
        return (
          (r = r || 1),
          (n.x = r * (this._a * n.x + this._b)),
          (n.y = r * (this._c * n.y + this._d)),
          n
        );
      },
      untransform: function (n, r) {
        return (
          (r = r || 1),
          new I((n.x / r - this._b) / this._a, (n.y / r - this._d) / this._c)
        );
      },
    };
    function kr(n, r, a, u) {
      return new Na(n, r, a, u);
    }
    var Ra = s({}, gn, {
        code: "EPSG:3857",
        projection: za,
        transformation: (function () {
          var n = 0.5 / (Math.PI * za.R);
          return kr(n, 0.5, -n, 0.5);
        })(),
      }),
      rg = s({}, Ra, { code: "EPSG:900913" });
    function oh(n) {
      return document.createElementNS("http://www.w3.org/2000/svg", n);
    }
    function sh(n, r) {
      var a = "",
        u,
        h,
        p,
        _,
        E,
        T;
      for (u = 0, p = n.length; u < p; u++) {
        for (E = n[u], h = 0, _ = E.length; h < _; h++)
          (T = E[h]), (a += (h ? "L" : "M") + T.x + " " + T.y);
        a += r ? (V.svg ? "z" : "x") : "";
      }
      return a || "M0 0";
    }
    var Ia = document.documentElement.style,
      Zo = "ActiveXObject" in window,
      og = Zo && !document.addEventListener,
      ah = "msLaunchUri" in navigator && !("documentMode" in document),
      ja = Ft("webkit"),
      lh = Ft("android"),
      uh = Ft("android 2") || Ft("android 3"),
      sg = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      ag = lh && Ft("Google") && sg < 537 && !("AudioNode" in window),
      Aa = !!window.opera,
      ch = !ah && Ft("chrome"),
      hh = Ft("gecko") && !ja && !Aa && !Zo,
      lg = !ch && Ft("safari"),
      fh = Ft("phantom"),
      dh = "OTransition" in Ia,
      ug = navigator.platform.indexOf("Win") === 0,
      ph = Zo && "transition" in Ia,
      Da =
        "WebKitCSSMatrix" in window &&
        "m11" in new window.WebKitCSSMatrix() &&
        !uh,
      mh = "MozPerspective" in Ia,
      cg = !window.L_DISABLE_3D && (ph || Da || mh) && !dh && !fh,
      Lr = typeof orientation < "u" || Ft("mobile"),
      hg = Lr && ja,
      fg = Lr && Da,
      gh = !window.PointerEvent && window.MSPointerEvent,
      vh = !!(window.PointerEvent || gh),
      _h = "ontouchstart" in window || !!window.TouchEvent,
      dg = !window.L_NO_TOUCH && (_h || vh),
      pg = Lr && Aa,
      mg = Lr && hh,
      gg =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      vg = (function () {
        var n = !1;
        try {
          var r = Object.defineProperty({}, "passive", {
            get: function () {
              n = !0;
            },
          });
          window.addEventListener("testPassiveEventSupport", g, r),
            window.removeEventListener("testPassiveEventSupport", g, r);
        } catch {}
        return n;
      })(),
      _g = (function () {
        return !!document.createElement("canvas").getContext;
      })(),
      Ba = !!(document.createElementNS && oh("svg").createSVGRect),
      yg =
        !!Ba &&
        (function () {
          var n = document.createElement("div");
          return (
            (n.innerHTML = "<svg/>"),
            (n.firstChild && n.firstChild.namespaceURI) ===
              "http://www.w3.org/2000/svg"
          );
        })(),
      wg =
        !Ba &&
        (function () {
          try {
            var n = document.createElement("div");
            n.innerHTML = '<v:shape adj="1"/>';
            var r = n.firstChild;
            return (
              (r.style.behavior = "url(#default#VML)"),
              r && typeof r.adj == "object"
            );
          } catch {
            return !1;
          }
        })(),
      xg = navigator.platform.indexOf("Mac") === 0,
      Cg = navigator.platform.indexOf("Linux") === 0;
    function Ft(n) {
      return navigator.userAgent.toLowerCase().indexOf(n) >= 0;
    }
    var V = {
        ie: Zo,
        ielt9: og,
        edge: ah,
        webkit: ja,
        android: lh,
        android23: uh,
        androidStock: ag,
        opera: Aa,
        chrome: ch,
        gecko: hh,
        safari: lg,
        phantom: fh,
        opera12: dh,
        win: ug,
        ie3d: ph,
        webkit3d: Da,
        gecko3d: mh,
        any3d: cg,
        mobile: Lr,
        mobileWebkit: hg,
        mobileWebkit3d: fg,
        msPointer: gh,
        pointer: vh,
        touch: dg,
        touchNative: _h,
        mobileOpera: pg,
        mobileGecko: mg,
        retina: gg,
        passiveEvents: vg,
        canvas: _g,
        svg: Ba,
        vml: wg,
        inlineSvg: yg,
        mac: xg,
        linux: Cg,
      },
      yh = V.msPointer ? "MSPointerDown" : "pointerdown",
      wh = V.msPointer ? "MSPointerMove" : "pointermove",
      xh = V.msPointer ? "MSPointerUp" : "pointerup",
      Ch = V.msPointer ? "MSPointerCancel" : "pointercancel",
      ba = { touchstart: yh, touchmove: wh, touchend: xh, touchcancel: Ch },
      Sh = { touchstart: Tg, touchmove: Ho, touchend: Ho, touchcancel: Ho },
      Ei = {},
      Ph = !1;
    function Sg(n, r, a) {
      return (
        r === "touchstart" && Eg(),
        Sh[r]
          ? ((a = Sh[r].bind(this, a)), n.addEventListener(ba[r], a, !1), a)
          : (console.warn("wrong event specified:", r), g)
      );
    }
    function Pg(n, r, a) {
      if (!ba[r]) {
        console.warn("wrong event specified:", r);
        return;
      }
      n.removeEventListener(ba[r], a, !1);
    }
    function kg(n) {
      Ei[n.pointerId] = n;
    }
    function Lg(n) {
      Ei[n.pointerId] && (Ei[n.pointerId] = n);
    }
    function kh(n) {
      delete Ei[n.pointerId];
    }
    function Eg() {
      Ph ||
        (document.addEventListener(yh, kg, !0),
        document.addEventListener(wh, Lg, !0),
        document.addEventListener(xh, kh, !0),
        document.addEventListener(Ch, kh, !0),
        (Ph = !0));
    }
    function Ho(n, r) {
      if (r.pointerType !== (r.MSPOINTER_TYPE_MOUSE || "mouse")) {
        r.touches = [];
        for (var a in Ei) r.touches.push(Ei[a]);
        (r.changedTouches = [r]), n(r);
      }
    }
    function Tg(n, r) {
      r.MSPOINTER_TYPE_TOUCH &&
        r.pointerType === r.MSPOINTER_TYPE_TOUCH &&
        be(r),
        Ho(n, r);
    }
    function Mg(n) {
      var r = {},
        a,
        u;
      for (u in n) (a = n[u]), (r[u] = a && a.bind ? a.bind(n) : a);
      return (
        (n = r),
        (r.type = "dblclick"),
        (r.detail = 2),
        (r.isTrusted = !1),
        (r._simulated = !0),
        r
      );
    }
    var Og = 200;
    function zg(n, r) {
      n.addEventListener("dblclick", r);
      var a = 0,
        u;
      function h(p) {
        if (p.detail !== 1) {
          u = p.detail;
          return;
        }
        if (
          !(
            p.pointerType === "mouse" ||
            (p.sourceCapabilities && !p.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var _ = Oh(p);
          if (
            !(
              _.some(function (T) {
                return T instanceof HTMLLabelElement && T.attributes.for;
              }) &&
              !_.some(function (T) {
                return (
                  T instanceof HTMLInputElement ||
                  T instanceof HTMLSelectElement
                );
              })
            )
          ) {
            var E = Date.now();
            E - a <= Og ? (u++, u === 2 && r(Mg(p))) : (u = 1), (a = E);
          }
        }
      }
      return n.addEventListener("click", h), { dblclick: r, simDblclick: h };
    }
    function Ng(n, r) {
      n.removeEventListener("dblclick", r.dblclick),
        n.removeEventListener("click", r.simDblclick);
    }
    var Fa = Vo([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform",
      ]),
      Er = Vo([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition",
      ]),
      Lh =
        Er === "webkitTransition" || Er === "OTransition"
          ? Er + "End"
          : "transitionend";
    function Eh(n) {
      return typeof n == "string" ? document.getElementById(n) : n;
    }
    function Tr(n, r) {
      var a = n.style[r] || (n.currentStyle && n.currentStyle[r]);
      if ((!a || a === "auto") && document.defaultView) {
        var u = document.defaultView.getComputedStyle(n, null);
        a = u ? u[r] : null;
      }
      return a === "auto" ? null : a;
    }
    function ce(n, r, a) {
      var u = document.createElement(n);
      return (u.className = r || ""), a && a.appendChild(u), u;
    }
    function we(n) {
      var r = n.parentNode;
      r && r.removeChild(n);
    }
    function Uo(n) {
      for (; n.firstChild; ) n.removeChild(n.firstChild);
    }
    function Ti(n) {
      var r = n.parentNode;
      r && r.lastChild !== n && r.appendChild(n);
    }
    function Mi(n) {
      var r = n.parentNode;
      r && r.firstChild !== n && r.insertBefore(n, r.firstChild);
    }
    function Za(n, r) {
      if (n.classList !== void 0) return n.classList.contains(r);
      var a = Wo(n);
      return a.length > 0 && new RegExp("(^|\\s)" + r + "(\\s|$)").test(a);
    }
    function ee(n, r) {
      if (n.classList !== void 0)
        for (var a = M(r), u = 0, h = a.length; u < h; u++)
          n.classList.add(a[u]);
      else if (!Za(n, r)) {
        var p = Wo(n);
        Ha(n, (p ? p + " " : "") + r);
      }
    }
    function Le(n, r) {
      n.classList !== void 0
        ? n.classList.remove(r)
        : Ha(n, k((" " + Wo(n) + " ").replace(" " + r + " ", " ")));
    }
    function Ha(n, r) {
      n.className.baseVal === void 0
        ? (n.className = r)
        : (n.className.baseVal = r);
    }
    function Wo(n) {
      return (
        n.correspondingElement && (n = n.correspondingElement),
        n.className.baseVal === void 0 ? n.className : n.className.baseVal
      );
    }
    function _t(n, r) {
      "opacity" in n.style
        ? (n.style.opacity = r)
        : "filter" in n.style && Rg(n, r);
    }
    function Rg(n, r) {
      var a = !1,
        u = "DXImageTransform.Microsoft.Alpha";
      try {
        a = n.filters.item(u);
      } catch {
        if (r === 1) return;
      }
      (r = Math.round(r * 100)),
        a
          ? ((a.Enabled = r !== 100), (a.Opacity = r))
          : (n.style.filter += " progid:" + u + "(opacity=" + r + ")");
    }
    function Vo(n) {
      for (var r = document.documentElement.style, a = 0; a < n.length; a++)
        if (n[a] in r) return n[a];
      return !1;
    }
    function Yn(n, r, a) {
      var u = r || new I(0, 0);
      n.style[Fa] =
        (V.ie3d
          ? "translate(" + u.x + "px," + u.y + "px)"
          : "translate3d(" + u.x + "px," + u.y + "px,0)") +
        (a ? " scale(" + a + ")" : "");
    }
    function Te(n, r) {
      (n._leaflet_pos = r),
        V.any3d
          ? Yn(n, r)
          : ((n.style.left = r.x + "px"), (n.style.top = r.y + "px"));
    }
    function Xn(n) {
      return n._leaflet_pos || new I(0, 0);
    }
    var Mr, Or, Ua;
    if ("onselectstart" in document)
      (Mr = function () {
        J(window, "selectstart", be);
      }),
        (Or = function () {
          pe(window, "selectstart", be);
        });
    else {
      var zr = Vo([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect",
      ]);
      (Mr = function () {
        if (zr) {
          var n = document.documentElement.style;
          (Ua = n[zr]), (n[zr] = "none");
        }
      }),
        (Or = function () {
          zr && ((document.documentElement.style[zr] = Ua), (Ua = void 0));
        });
    }
    function Wa() {
      J(window, "dragstart", be);
    }
    function Va() {
      pe(window, "dragstart", be);
    }
    var Qo, Qa;
    function $a(n) {
      for (; n.tabIndex === -1; ) n = n.parentNode;
      n.style &&
        ($o(),
        (Qo = n),
        (Qa = n.style.outlineStyle),
        (n.style.outlineStyle = "none"),
        J(window, "keydown", $o));
    }
    function $o() {
      Qo &&
        ((Qo.style.outlineStyle = Qa),
        (Qo = void 0),
        (Qa = void 0),
        pe(window, "keydown", $o));
    }
    function Th(n) {
      do n = n.parentNode;
      while ((!n.offsetWidth || !n.offsetHeight) && n !== document.body);
      return n;
    }
    function Ga(n) {
      var r = n.getBoundingClientRect();
      return {
        x: r.width / n.offsetWidth || 1,
        y: r.height / n.offsetHeight || 1,
        boundingClientRect: r,
      };
    }
    var Ig = {
      __proto__: null,
      TRANSFORM: Fa,
      TRANSITION: Er,
      TRANSITION_END: Lh,
      get: Eh,
      getStyle: Tr,
      create: ce,
      remove: we,
      empty: Uo,
      toFront: Ti,
      toBack: Mi,
      hasClass: Za,
      addClass: ee,
      removeClass: Le,
      setClass: Ha,
      getClass: Wo,
      setOpacity: _t,
      testProp: Vo,
      setTransform: Yn,
      setPosition: Te,
      getPosition: Xn,
      get disableTextSelection() {
        return Mr;
      },
      get enableTextSelection() {
        return Or;
      },
      disableImageDrag: Wa,
      enableImageDrag: Va,
      preventOutline: $a,
      restoreOutline: $o,
      getSizedParentNode: Th,
      getScale: Ga,
    };
    function J(n, r, a, u) {
      if (r && typeof r == "object") for (var h in r) qa(n, h, r[h], a);
      else {
        r = M(r);
        for (var p = 0, _ = r.length; p < _; p++) qa(n, r[p], a, u);
      }
      return this;
    }
    var Zt = "_leaflet_events";
    function pe(n, r, a, u) {
      if (arguments.length === 1) Mh(n), delete n[Zt];
      else if (r && typeof r == "object") for (var h in r) Ya(n, h, r[h], a);
      else if (((r = M(r)), arguments.length === 2))
        Mh(n, function (E) {
          return N(r, E) !== -1;
        });
      else for (var p = 0, _ = r.length; p < _; p++) Ya(n, r[p], a, u);
      return this;
    }
    function Mh(n, r) {
      for (var a in n[Zt]) {
        var u = a.split(/\d/)[0];
        (!r || r(u)) && Ya(n, u, null, null, a);
      }
    }
    var Ka = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel",
    };
    function qa(n, r, a, u) {
      var h = r + f(a) + (u ? "_" + f(u) : "");
      if (n[Zt] && n[Zt][h]) return this;
      var p = function (E) {
          return a.call(u || n, E || window.event);
        },
        _ = p;
      !V.touchNative && V.pointer && r.indexOf("touch") === 0
        ? (p = Sg(n, r, p))
        : V.touch && r === "dblclick"
        ? (p = zg(n, p))
        : "addEventListener" in n
        ? r === "touchstart" ||
          r === "touchmove" ||
          r === "wheel" ||
          r === "mousewheel"
          ? n.addEventListener(
              Ka[r] || r,
              p,
              V.passiveEvents ? { passive: !1 } : !1
            )
          : r === "mouseenter" || r === "mouseleave"
          ? ((p = function (E) {
              (E = E || window.event), Ja(n, E) && _(E);
            }),
            n.addEventListener(Ka[r], p, !1))
          : n.addEventListener(r, _, !1)
        : n.attachEvent("on" + r, p),
        (n[Zt] = n[Zt] || {}),
        (n[Zt][h] = p);
    }
    function Ya(n, r, a, u, h) {
      h = h || r + f(a) + (u ? "_" + f(u) : "");
      var p = n[Zt] && n[Zt][h];
      if (!p) return this;
      !V.touchNative && V.pointer && r.indexOf("touch") === 0
        ? Pg(n, r, p)
        : V.touch && r === "dblclick"
        ? Ng(n, p)
        : "removeEventListener" in n
        ? n.removeEventListener(Ka[r] || r, p, !1)
        : n.detachEvent("on" + r, p),
        (n[Zt][h] = null);
    }
    function Jn(n) {
      return (
        n.stopPropagation
          ? n.stopPropagation()
          : n.originalEvent
          ? (n.originalEvent._stopped = !0)
          : (n.cancelBubble = !0),
        this
      );
    }
    function Xa(n) {
      return qa(n, "wheel", Jn), this;
    }
    function Nr(n) {
      return (
        J(n, "mousedown touchstart dblclick contextmenu", Jn),
        (n._leaflet_disable_click = !0),
        this
      );
    }
    function be(n) {
      return n.preventDefault ? n.preventDefault() : (n.returnValue = !1), this;
    }
    function ei(n) {
      return be(n), Jn(n), this;
    }
    function Oh(n) {
      if (n.composedPath) return n.composedPath();
      for (var r = [], a = n.target; a; ) r.push(a), (a = a.parentNode);
      return r;
    }
    function zh(n, r) {
      if (!r) return new I(n.clientX, n.clientY);
      var a = Ga(r),
        u = a.boundingClientRect;
      return new I(
        (n.clientX - u.left) / a.x - r.clientLeft,
        (n.clientY - u.top) / a.y - r.clientTop
      );
    }
    var jg =
      V.linux && V.chrome
        ? window.devicePixelRatio
        : V.mac
        ? window.devicePixelRatio * 3
        : window.devicePixelRatio > 0
        ? 2 * window.devicePixelRatio
        : 1;
    function Nh(n) {
      return V.edge
        ? n.wheelDeltaY / 2
        : n.deltaY && n.deltaMode === 0
        ? -n.deltaY / jg
        : n.deltaY && n.deltaMode === 1
        ? -n.deltaY * 20
        : n.deltaY && n.deltaMode === 2
        ? -n.deltaY * 60
        : n.deltaX || n.deltaZ
        ? 0
        : n.wheelDelta
        ? (n.wheelDeltaY || n.wheelDelta) / 2
        : n.detail && Math.abs(n.detail) < 32765
        ? -n.detail * 20
        : n.detail
        ? (n.detail / -32765) * 60
        : 0;
    }
    function Ja(n, r) {
      var a = r.relatedTarget;
      if (!a) return !0;
      try {
        for (; a && a !== n; ) a = a.parentNode;
      } catch {
        return !1;
      }
      return a !== n;
    }
    var Ag = {
        __proto__: null,
        on: J,
        off: pe,
        stopPropagation: Jn,
        disableScrollPropagation: Xa,
        disableClickPropagation: Nr,
        preventDefault: be,
        stop: ei,
        getPropagationPath: Oh,
        getMousePosition: zh,
        getWheelDelta: Nh,
        isExternalTarget: Ja,
        addListener: J,
        removeListener: pe,
      },
      Rh = Jt.extend({
        run: function (n, r, a, u) {
          this.stop(),
            (this._el = n),
            (this._inProgress = !0),
            (this._duration = a || 0.25),
            (this._easeOutPower = 1 / Math.max(u || 0.5, 0.2)),
            (this._startPos = Xn(n)),
            (this._offset = r.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire("start"),
            this._animate();
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = se(this._animate, this)), this._step();
        },
        _step: function (n) {
          var r = +new Date() - this._startTime,
            a = this._duration * 1e3;
          r < a
            ? this._runFrame(this._easeOut(r / a), n)
            : (this._runFrame(1), this._complete());
        },
        _runFrame: function (n, r) {
          var a = this._startPos.add(this._offset.multiplyBy(n));
          r && a._round(), Te(this._el, a), this.fire("step");
        },
        _complete: function () {
          ye(this._animId), (this._inProgress = !1), this.fire("end");
        },
        _easeOut: function (n) {
          return 1 - Math.pow(1 - n, this._easeOutPower);
        },
      }),
      oe = Jt.extend({
        options: {
          crs: Ra,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (n, r) {
          (r = P(this, r)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(n),
            this._initLayout(),
            (this._onResize = c(this._onResize, this)),
            this._initEvents(),
            r.maxBounds && this.setMaxBounds(r.maxBounds),
            r.zoom !== void 0 && (this._zoom = this._limitZoom(r.zoom)),
            r.center &&
              r.zoom !== void 0 &&
              this.setView(X(r.center), r.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated =
              Er && V.any3d && !V.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              J(this._proxy, Lh, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (n, r, a) {
          if (
            ((r = r === void 0 ? this._zoom : this._limitZoom(r)),
            (n = this._limitCenter(X(n), r, this.options.maxBounds)),
            (a = a || {}),
            this._stop(),
            this._loaded && !a.reset && a !== !0)
          ) {
            a.animate !== void 0 &&
              ((a.zoom = s({ animate: a.animate }, a.zoom)),
              (a.pan = s({ animate: a.animate, duration: a.duration }, a.pan)));
            var u =
              this._zoom !== r
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(n, r, a.zoom)
                : this._tryAnimatedPan(n, a.pan);
            if (u) return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(n, r, a.pan && a.pan.noMoveStart), this;
        },
        setZoom: function (n, r) {
          return this._loaded
            ? this.setView(this.getCenter(), n, { zoom: r })
            : ((this._zoom = n), this);
        },
        zoomIn: function (n, r) {
          return (
            (n = n || (V.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + n, r)
          );
        },
        zoomOut: function (n, r) {
          return (
            (n = n || (V.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - n, r)
          );
        },
        setZoomAround: function (n, r, a) {
          var u = this.getZoomScale(r),
            h = this.getSize().divideBy(2),
            p = n instanceof I ? n : this.latLngToContainerPoint(n),
            _ = p.subtract(h).multiplyBy(1 - 1 / u),
            E = this.containerPointToLatLng(h.add(_));
          return this.setView(E, r, { zoom: a });
        },
        _getBoundsCenterZoom: function (n, r) {
          (r = r || {}), (n = n.getBounds ? n.getBounds() : de(n));
          var a = B(r.paddingTopLeft || r.padding || [0, 0]),
            u = B(r.paddingBottomRight || r.padding || [0, 0]),
            h = this.getBoundsZoom(n, !1, a.add(u));
          if (
            ((h = typeof r.maxZoom == "number" ? Math.min(r.maxZoom, h) : h),
            h === 1 / 0)
          )
            return { center: n.getCenter(), zoom: h };
          var p = u.subtract(a).divideBy(2),
            _ = this.project(n.getSouthWest(), h),
            E = this.project(n.getNorthEast(), h),
            T = this.unproject(_.add(E).divideBy(2).add(p), h);
          return { center: T, zoom: h };
        },
        fitBounds: function (n, r) {
          if (((n = de(n)), !n.isValid()))
            throw new Error("Bounds are not valid.");
          var a = this._getBoundsCenterZoom(n, r);
          return this.setView(a.center, a.zoom, r);
        },
        fitWorld: function (n) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            n
          );
        },
        panTo: function (n, r) {
          return this.setView(n, this._zoom, { pan: r });
        },
        panBy: function (n, r) {
          if (((n = B(n).round()), (r = r || {}), !n.x && !n.y))
            return this.fire("moveend");
          if (r.animate !== !0 && !this.getSize().contains(n))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(n)),
                this.getZoom()
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new Rh()),
              this._panAnim.on(
                {
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd,
                },
                this
              )),
            r.noMoveStart || this.fire("movestart"),
            r.animate !== !1)
          ) {
            ee(this._mapPane, "leaflet-pan-anim");
            var a = this._getMapPanePos().subtract(n).round();
            this._panAnim.run(
              this._mapPane,
              a,
              r.duration || 0.25,
              r.easeLinearity
            );
          } else this._rawPanBy(n), this.fire("move").fire("moveend");
          return this;
        },
        flyTo: function (n, r, a) {
          if (((a = a || {}), a.animate === !1 || !V.any3d))
            return this.setView(n, r, a);
          this._stop();
          var u = this.project(this.getCenter()),
            h = this.project(n),
            p = this.getSize(),
            _ = this._zoom;
          (n = X(n)), (r = r === void 0 ? _ : r);
          var E = Math.max(p.x, p.y),
            T = E * this.getZoomScale(_, r),
            j = h.distanceTo(u) || 1,
            H = 1.42,
            $ = H * H;
          function te(Me) {
            var os = Me ? -1 : 1,
              Pv = Me ? T : E,
              kv = T * T - E * E + os * $ * $ * j * j,
              Lv = 2 * Pv * $ * j,
              cl = kv / Lv,
              pf = Math.sqrt(cl * cl + 1) - cl,
              Ev = pf < 1e-9 ? -18 : Math.log(pf);
            return Ev;
          }
          function Ke(Me) {
            return (Math.exp(Me) - Math.exp(-Me)) / 2;
          }
          function je(Me) {
            return (Math.exp(Me) + Math.exp(-Me)) / 2;
          }
          function wt(Me) {
            return Ke(Me) / je(Me);
          }
          var it = te(0);
          function ji(Me) {
            return E * (je(it) / je(it + H * Me));
          }
          function wv(Me) {
            return (E * (je(it) * wt(it + H * Me) - Ke(it))) / $;
          }
          function xv(Me) {
            return 1 - Math.pow(1 - Me, 1.5);
          }
          var Cv = Date.now(),
            ff = (te(1) - it) / H,
            Sv = a.duration ? 1e3 * a.duration : 1e3 * ff * 0.8;
          function df() {
            var Me = (Date.now() - Cv) / Sv,
              os = xv(Me) * ff;
            Me <= 1
              ? ((this._flyToFrame = se(df, this)),
                this._move(
                  this.unproject(
                    u.add(h.subtract(u).multiplyBy(wv(os) / j)),
                    _
                  ),
                  this.getScaleZoom(E / ji(os), _),
                  { flyTo: !0 }
                ))
              : this._move(n, r)._moveEnd(!0);
          }
          return this._moveStart(!0, a.noMoveStart), df.call(this), this;
        },
        flyToBounds: function (n, r) {
          var a = this._getBoundsCenterZoom(n, r);
          return this.flyTo(a.center, a.zoom, r);
        },
        setMaxBounds: function (n) {
          return (
            (n = de(n)),
            this.listens("moveend", this._panInsideMaxBounds) &&
              this.off("moveend", this._panInsideMaxBounds),
            n.isValid()
              ? ((this.options.maxBounds = n),
                this._loaded && this._panInsideMaxBounds(),
                this.on("moveend", this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (n) {
          var r = this.options.minZoom;
          return (
            (this.options.minZoom = n),
            this._loaded &&
            r !== n &&
            (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom)
              ? this.setZoom(n)
              : this
          );
        },
        setMaxZoom: function (n) {
          var r = this.options.maxZoom;
          return (
            (this.options.maxZoom = n),
            this._loaded &&
            r !== n &&
            (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom)
              ? this.setZoom(n)
              : this
          );
        },
        panInsideBounds: function (n, r) {
          this._enforcingBounds = !0;
          var a = this.getCenter(),
            u = this._limitCenter(a, this._zoom, de(n));
          return (
            a.equals(u) || this.panTo(u, r), (this._enforcingBounds = !1), this
          );
        },
        panInside: function (n, r) {
          r = r || {};
          var a = B(r.paddingTopLeft || r.padding || [0, 0]),
            u = B(r.paddingBottomRight || r.padding || [0, 0]),
            h = this.project(this.getCenter()),
            p = this.project(n),
            _ = this.getPixelBounds(),
            E = ae([_.min.add(a), _.max.subtract(u)]),
            T = E.getSize();
          if (!E.contains(p)) {
            this._enforcingBounds = !0;
            var j = p.subtract(E.getCenter()),
              H = E.extend(p).getSize().subtract(T);
            (h.x += j.x < 0 ? -H.x : H.x),
              (h.y += j.y < 0 ? -H.y : H.y),
              this.panTo(this.unproject(h), r),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (n) {
          if (!this._loaded) return this;
          n = s({ animate: !1, pan: !0 }, n === !0 ? { animate: !0 } : n);
          var r = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var a = this.getSize(),
            u = r.divideBy(2).round(),
            h = a.divideBy(2).round(),
            p = u.subtract(h);
          return !p.x && !p.y
            ? this
            : (n.animate && n.pan
                ? this.panBy(p)
                : (n.pan && this._rawPanBy(p),
                  this.fire("move"),
                  n.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(
                        c(this.fire, this, "moveend"),
                        200
                      )))
                    : this.fire("moveend")),
              this.fire("resize", { oldSize: r, newSize: a }));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
          );
        },
        locate: function (n) {
          if (
            ((n = this._locateOptions = s({ timeout: 1e4, watch: !1 }, n)),
            !("geolocation" in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported.",
              }),
              this
            );
          var r = c(this._handleGeolocationResponse, this),
            a = c(this._handleGeolocationError, this);
          return (
            n.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(
                  r,
                  a,
                  n
                ))
              : navigator.geolocation.getCurrentPosition(r, a, n),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (n) {
          if (this._container._leaflet_id) {
            var r = n.code,
              a =
                n.message ||
                (r === 1
                  ? "permission denied"
                  : r === 2
                  ? "position unavailable"
                  : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire("locationerror", {
                code: r,
                message: "Geolocation error: " + a + ".",
              });
          }
        },
        _handleGeolocationResponse: function (n) {
          if (this._container._leaflet_id) {
            var r = n.coords.latitude,
              a = n.coords.longitude,
              u = new ue(r, a),
              h = u.toBounds(n.coords.accuracy * 2),
              p = this._locateOptions;
            if (p.setView) {
              var _ = this.getBoundsZoom(h);
              this.setView(u, p.maxZoom ? Math.min(_, p.maxZoom) : _);
            }
            var E = { latlng: u, bounds: h, timestamp: n.timestamp };
            for (var T in n.coords)
              typeof n.coords[T] == "number" && (E[T] = n.coords[T]);
            this.fire("locationfound", E);
          }
        },
        addHandler: function (n, r) {
          if (!r) return this;
          var a = (this[n] = new r(this));
          return this._handlers.push(a), this.options[n] && a.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error(
              "Map container is being reused by another instance"
            );
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            (this._container._leaflet_id = void 0),
              (this._containerId = void 0);
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            we(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest &&
              (ye(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire("unload");
          var n;
          for (n in this._layers) this._layers[n].remove();
          for (n in this._panes) we(this._panes[n]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (n, r) {
          var a =
              "leaflet-pane" +
              (n ? " leaflet-" + n.replace("Pane", "") + "-pane" : ""),
            u = ce("div", a, r || this._mapPane);
          return n && (this._panes[n] = u), u;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var n = this.getPixelBounds(),
            r = this.unproject(n.getBottomLeft()),
            a = this.unproject(n.getTopRight());
          return new Ne(r, a);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0
            ? this._layersMinZoom || 0
            : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (n, r, a) {
          (n = de(n)), (a = B(a || [0, 0]));
          var u = this.getZoom() || 0,
            h = this.getMinZoom(),
            p = this.getMaxZoom(),
            _ = n.getNorthWest(),
            E = n.getSouthEast(),
            T = this.getSize().subtract(a),
            j = ae(this.project(E, u), this.project(_, u)).getSize(),
            H = V.any3d ? this.options.zoomSnap : 1,
            $ = T.x / j.x,
            te = T.y / j.y,
            Ke = r ? Math.max($, te) : Math.min($, te);
          return (
            (u = this.getScaleZoom(Ke, u)),
            H &&
              ((u = Math.round(u / (H / 100)) * (H / 100)),
              (u = r ? Math.ceil(u / H) * H : Math.floor(u / H) * H)),
            Math.max(h, Math.min(p, u))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new I(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (n, r) {
          var a = this._getTopLeftPoint(n, r);
          return new q(a, a.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (n) {
          return this.options.crs.getProjectedBounds(
            n === void 0 ? this.getZoom() : n
          );
        },
        getPane: function (n) {
          return typeof n == "string" ? this._panes[n] : n;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (n, r) {
          var a = this.options.crs;
          return (r = r === void 0 ? this._zoom : r), a.scale(n) / a.scale(r);
        },
        getScaleZoom: function (n, r) {
          var a = this.options.crs;
          r = r === void 0 ? this._zoom : r;
          var u = a.zoom(n * a.scale(r));
          return isNaN(u) ? 1 / 0 : u;
        },
        project: function (n, r) {
          return (
            (r = r === void 0 ? this._zoom : r),
            this.options.crs.latLngToPoint(X(n), r)
          );
        },
        unproject: function (n, r) {
          return (
            (r = r === void 0 ? this._zoom : r),
            this.options.crs.pointToLatLng(B(n), r)
          );
        },
        layerPointToLatLng: function (n) {
          var r = B(n).add(this.getPixelOrigin());
          return this.unproject(r);
        },
        latLngToLayerPoint: function (n) {
          var r = this.project(X(n))._round();
          return r._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (n) {
          return this.options.crs.wrapLatLng(X(n));
        },
        wrapLatLngBounds: function (n) {
          return this.options.crs.wrapLatLngBounds(de(n));
        },
        distance: function (n, r) {
          return this.options.crs.distance(X(n), X(r));
        },
        containerPointToLayerPoint: function (n) {
          return B(n).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (n) {
          return B(n).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (n) {
          var r = this.containerPointToLayerPoint(B(n));
          return this.layerPointToLatLng(r);
        },
        latLngToContainerPoint: function (n) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(X(n)));
        },
        mouseEventToContainerPoint: function (n) {
          return zh(n, this._container);
        },
        mouseEventToLayerPoint: function (n) {
          return this.containerPointToLayerPoint(
            this.mouseEventToContainerPoint(n)
          );
        },
        mouseEventToLatLng: function (n) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(n));
        },
        _initContainer: function (n) {
          var r = (this._container = Eh(n));
          if (r) {
            if (r._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          J(r, "scroll", this._onScroll, this), (this._containerId = f(r));
        },
        _initLayout: function () {
          var n = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && V.any3d),
            ee(
              n,
              "leaflet-container" +
                (V.touch ? " leaflet-touch" : "") +
                (V.retina ? " leaflet-retina" : "") +
                (V.ielt9 ? " leaflet-oldie" : "") +
                (V.safari ? " leaflet-safari" : "") +
                (this._fadeAnimated ? " leaflet-fade-anim" : "")
            );
          var r = Tr(n, "position");
          r !== "absolute" &&
            r !== "relative" &&
            r !== "fixed" &&
            r !== "sticky" &&
            (n.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var n = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane("mapPane", this._container)),
            Te(this._mapPane, new I(0, 0)),
            this.createPane("tilePane"),
            this.createPane("overlayPane"),
            this.createPane("shadowPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation ||
              (ee(n.markerPane, "leaflet-zoom-hide"),
              ee(n.shadowPane, "leaflet-zoom-hide"));
        },
        _resetView: function (n, r, a) {
          Te(this._mapPane, new I(0, 0));
          var u = !this._loaded;
          (this._loaded = !0),
            (r = this._limitZoom(r)),
            this.fire("viewprereset");
          var h = this._zoom !== r;
          this._moveStart(h, a)._move(n, r)._moveEnd(h),
            this.fire("viewreset"),
            u && this.fire("load");
        },
        _moveStart: function (n, r) {
          return n && this.fire("zoomstart"), r || this.fire("movestart"), this;
        },
        _move: function (n, r, a, u) {
          r === void 0 && (r = this._zoom);
          var h = this._zoom !== r;
          return (
            (this._zoom = r),
            (this._lastCenter = n),
            (this._pixelOrigin = this._getNewPixelOrigin(n)),
            u
              ? a && a.pinch && this.fire("zoom", a)
              : ((h || (a && a.pinch)) && this.fire("zoom", a),
                this.fire("move", a)),
            this
          );
        },
        _moveEnd: function (n) {
          return n && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function () {
          return (
            ye(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
          );
        },
        _rawPanBy: function (n) {
          Te(this._mapPane, this._getMapPanePos().subtract(n));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        _initEvents: function (n) {
          (this._targets = {}), (this._targets[f(this._container)] = this);
          var r = n ? pe : J;
          r(
            this._container,
            "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
            this._handleDOMEvent,
            this
          ),
            this.options.trackResize &&
              r(window, "resize", this._onResize, this),
            V.any3d &&
              this.options.transform3DLimit &&
              (n ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function () {
          ye(this._resizeRequest),
            (this._resizeRequest = se(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var n = this._getMapPanePos();
          Math.max(Math.abs(n.x), Math.abs(n.y)) >=
            this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (n, r) {
          for (
            var a = [],
              u,
              h = r === "mouseout" || r === "mouseover",
              p = n.target || n.srcElement,
              _ = !1;
            p;

          ) {
            if (
              ((u = this._targets[f(p)]),
              u &&
                (r === "click" || r === "preclick") &&
                this._draggableMoved(u))
            ) {
              _ = !0;
              break;
            }
            if (
              (u && u.listens(r, !0) && ((h && !Ja(p, n)) || (a.push(u), h))) ||
              p === this._container
            )
              break;
            p = p.parentNode;
          }
          return (
            !a.length && !_ && !h && this.listens(r, !0) && (a = [this]), a
          );
        },
        _isClickDisabled: function (n) {
          for (; n && n !== this._container; ) {
            if (n._leaflet_disable_click) return !0;
            n = n.parentNode;
          }
        },
        _handleDOMEvent: function (n) {
          var r = n.target || n.srcElement;
          if (
            !(
              !this._loaded ||
              r._leaflet_disable_events ||
              (n.type === "click" && this._isClickDisabled(r))
            )
          ) {
            var a = n.type;
            a === "mousedown" && $a(r), this._fireDOMEvent(n, a);
          }
        },
        _mouseEvents: [
          "click",
          "dblclick",
          "mouseover",
          "mouseout",
          "contextmenu",
        ],
        _fireDOMEvent: function (n, r, a) {
          if (n.type === "click") {
            var u = s({}, n);
            (u.type = "preclick"), this._fireDOMEvent(u, u.type, a);
          }
          var h = this._findEventTargets(n, r);
          if (a) {
            for (var p = [], _ = 0; _ < a.length; _++)
              a[_].listens(r, !0) && p.push(a[_]);
            h = p.concat(h);
          }
          if (h.length) {
            r === "contextmenu" && be(n);
            var E = h[0],
              T = { originalEvent: n };
            if (
              n.type !== "keypress" &&
              n.type !== "keydown" &&
              n.type !== "keyup"
            ) {
              var j = E.getLatLng && (!E._radius || E._radius <= 10);
              (T.containerPoint = j
                ? this.latLngToContainerPoint(E.getLatLng())
                : this.mouseEventToContainerPoint(n)),
                (T.layerPoint = this.containerPointToLayerPoint(
                  T.containerPoint
                )),
                (T.latlng = j
                  ? E.getLatLng()
                  : this.layerPointToLatLng(T.layerPoint));
            }
            for (_ = 0; _ < h.length; _++)
              if (
                (h[_].fire(r, T, !0),
                T.originalEvent._stopped ||
                  (h[_].options.bubblingMouseEvents === !1 &&
                    N(this._mouseEvents, r) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (n) {
          return (
            (n = n.dragging && n.dragging.enabled() ? n : this),
            (n.dragging && n.dragging.moved()) ||
              (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var n = 0, r = this._handlers.length; n < r; n++)
            this._handlers[n].disable();
        },
        whenReady: function (n, r) {
          return (
            this._loaded
              ? n.call(r || this, { target: this })
              : this.on("load", n, r),
            this
          );
        },
        _getMapPanePos: function () {
          return Xn(this._mapPane) || new I(0, 0);
        },
        _moved: function () {
          var n = this._getMapPanePos();
          return n && !n.equals([0, 0]);
        },
        _getTopLeftPoint: function (n, r) {
          var a =
            n && r !== void 0
              ? this._getNewPixelOrigin(n, r)
              : this.getPixelOrigin();
          return a.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (n, r) {
          var a = this.getSize()._divideBy(2);
          return this.project(n, r)
            ._subtract(a)
            ._add(this._getMapPanePos())
            ._round();
        },
        _latLngToNewLayerPoint: function (n, r, a) {
          var u = this._getNewPixelOrigin(a, r);
          return this.project(n, r)._subtract(u);
        },
        _latLngBoundsToNewLayerBounds: function (n, r, a) {
          var u = this._getNewPixelOrigin(a, r);
          return ae([
            this.project(n.getSouthWest(), r)._subtract(u),
            this.project(n.getNorthWest(), r)._subtract(u),
            this.project(n.getSouthEast(), r)._subtract(u),
            this.project(n.getNorthEast(), r)._subtract(u),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (n) {
          return this.latLngToLayerPoint(n).subtract(
            this._getCenterLayerPoint()
          );
        },
        _limitCenter: function (n, r, a) {
          if (!a) return n;
          var u = this.project(n, r),
            h = this.getSize().divideBy(2),
            p = new q(u.subtract(h), u.add(h)),
            _ = this._getBoundsOffset(p, a, r);
          return Math.abs(_.x) <= 1 && Math.abs(_.y) <= 1
            ? n
            : this.unproject(u.add(_), r);
        },
        _limitOffset: function (n, r) {
          if (!r) return n;
          var a = this.getPixelBounds(),
            u = new q(a.min.add(n), a.max.add(n));
          return n.add(this._getBoundsOffset(u, r));
        },
        _getBoundsOffset: function (n, r, a) {
          var u = ae(
              this.project(r.getNorthEast(), a),
              this.project(r.getSouthWest(), a)
            ),
            h = u.min.subtract(n.min),
            p = u.max.subtract(n.max),
            _ = this._rebound(h.x, -p.x),
            E = this._rebound(h.y, -p.y);
          return new I(_, E);
        },
        _rebound: function (n, r) {
          return n + r > 0
            ? Math.round(n - r) / 2
            : Math.max(0, Math.ceil(n)) - Math.max(0, Math.floor(r));
        },
        _limitZoom: function (n) {
          var r = this.getMinZoom(),
            a = this.getMaxZoom(),
            u = V.any3d ? this.options.zoomSnap : 1;
          return u && (n = Math.round(n / u) * u), Math.max(r, Math.min(a, n));
        },
        _onPanTransitionStep: function () {
          this.fire("move");
        },
        _onPanTransitionEnd: function () {
          Le(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function (n, r) {
          var a = this._getCenterOffset(n)._trunc();
          return (r && r.animate) !== !0 && !this.getSize().contains(a)
            ? !1
            : (this.panBy(a, r), !0);
        },
        _createAnimProxy: function () {
          var n = (this._proxy = ce(
            "div",
            "leaflet-proxy leaflet-zoom-animated"
          ));
          this._panes.mapPane.appendChild(n),
            this.on(
              "zoomanim",
              function (r) {
                var a = Fa,
                  u = this._proxy.style[a];
                Yn(
                  this._proxy,
                  this.project(r.center, r.zoom),
                  this.getZoomScale(r.zoom, 1)
                ),
                  u === this._proxy.style[a] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd();
              },
              this
            ),
            this.on("load moveend", this._animMoveEnd, this),
            this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          we(this._proxy),
            this.off("load moveend", this._animMoveEnd, this),
            delete this._proxy;
        },
        _animMoveEnd: function () {
          var n = this.getCenter(),
            r = this.getZoom();
          Yn(this._proxy, this.project(n, r), this.getZoomScale(r, 1));
        },
        _catchTransitionEnd: function (n) {
          this._animatingZoom &&
            n.propertyName.indexOf("transform") >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName(
            "leaflet-zoom-animated"
          ).length;
        },
        _tryAnimatedZoom: function (n, r, a) {
          if (this._animatingZoom) return !0;
          if (
            ((a = a || {}),
            !this._zoomAnimated ||
              a.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(r - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var u = this.getZoomScale(r),
            h = this._getCenterOffset(n)._divideBy(1 - 1 / u);
          return a.animate !== !0 && !this.getSize().contains(h)
            ? !1
            : (se(function () {
                this._moveStart(!0, a.noMoveStart || !1)._animateZoom(n, r, !0);
              }, this),
              !0);
        },
        _animateZoom: function (n, r, a, u) {
          this._mapPane &&
            (a &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = n),
              (this._animateToZoom = r),
              ee(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", { center: n, zoom: r, noUpdate: u }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(c(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && Le(this._mapPane, "leaflet-zoom-anim"),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire("zoom"),
            delete this._tempFireZoomEvent,
            this.fire("move"),
            this._moveEnd(!0));
        },
      });
    function Dg(n, r) {
      return new oe(n, r);
    }
    var Mt = vt.extend({
        options: { position: "topright" },
        initialize: function (n) {
          P(this, n);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (n) {
          var r = this._map;
          return (
            r && r.removeControl(this),
            (this.options.position = n),
            r && r.addControl(this),
            this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (n) {
          this.remove(), (this._map = n);
          var r = (this._container = this.onAdd(n)),
            a = this.getPosition(),
            u = n._controlCorners[a];
          return (
            ee(r, "leaflet-control"),
            a.indexOf("bottom") !== -1
              ? u.insertBefore(r, u.firstChild)
              : u.appendChild(r),
            this._map.on("unload", this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (we(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off("unload", this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (n) {
          this._map &&
            n &&
            n.screenX > 0 &&
            n.screenY > 0 &&
            this._map.getContainer().focus();
        },
      }),
      Rr = function (n) {
        return new Mt(n);
      };
    oe.include({
      addControl: function (n) {
        return n.addTo(this), this;
      },
      removeControl: function (n) {
        return n.remove(), this;
      },
      _initControlPos: function () {
        var n = (this._controlCorners = {}),
          r = "leaflet-",
          a = (this._controlContainer = ce(
            "div",
            r + "control-container",
            this._container
          ));
        function u(h, p) {
          var _ = r + h + " " + r + p;
          n[h + p] = ce("div", _, a);
        }
        u("top", "left"),
          u("top", "right"),
          u("bottom", "left"),
          u("bottom", "right");
      },
      _clearControlPos: function () {
        for (var n in this._controlCorners) we(this._controlCorners[n]);
        we(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer;
      },
    });
    var Ih = Mt.extend({
        options: {
          collapsed: !0,
          position: "topright",
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (n, r, a, u) {
            return a < u ? -1 : u < a ? 1 : 0;
          },
        },
        initialize: function (n, r, a) {
          P(this, a),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1),
            (this._preventClick = !1);
          for (var u in n) this._addLayer(n[u], u);
          for (u in r) this._addLayer(r[u], u, !0);
        },
        onAdd: function (n) {
          this._initLayout(),
            this._update(),
            (this._map = n),
            n.on("zoomend", this._checkDisabledLayers, this);
          for (var r = 0; r < this._layers.length; r++)
            this._layers[r].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function (n) {
          return Mt.prototype.addTo.call(this, n), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var n = 0; n < this._layers.length; n++)
            this._layers[n].layer.off("add remove", this._onLayerChange, this);
        },
        addBaseLayer: function (n, r) {
          return this._addLayer(n, r), this._map ? this._update() : this;
        },
        addOverlay: function (n, r) {
          return this._addLayer(n, r, !0), this._map ? this._update() : this;
        },
        removeLayer: function (n) {
          n.off("add remove", this._onLayerChange, this);
          var r = this._getLayer(f(n));
          return (
            r && this._layers.splice(this._layers.indexOf(r), 1),
            this._map ? this._update() : this
          );
        },
        expand: function () {
          ee(this._container, "leaflet-control-layers-expanded"),
            (this._section.style.height = null);
          var n = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            n < this._section.clientHeight
              ? (ee(this._section, "leaflet-control-layers-scrollbar"),
                (this._section.style.height = n + "px"))
              : Le(this._section, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return Le(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function () {
          var n = "leaflet-control-layers",
            r = (this._container = ce("div", n)),
            a = this.options.collapsed;
          r.setAttribute("aria-haspopup", !0), Nr(r), Xa(r);
          var u = (this._section = ce("section", n + "-list"));
          a &&
            (this._map.on("click", this.collapse, this),
            J(
              r,
              { mouseenter: this._expandSafely, mouseleave: this.collapse },
              this
            ));
          var h = (this._layersLink = ce("a", n + "-toggle", r));
          (h.href = "#"),
            (h.title = "Layers"),
            h.setAttribute("role", "button"),
            J(
              h,
              {
                keydown: function (p) {
                  p.keyCode === 13 && this._expandSafely();
                },
                click: function (p) {
                  be(p), this._expandSafely();
                },
              },
              this
            ),
            a || this.expand(),
            (this._baseLayersList = ce("div", n + "-base", u)),
            (this._separator = ce("div", n + "-separator", u)),
            (this._overlaysList = ce("div", n + "-overlays", u)),
            r.appendChild(u);
        },
        _getLayer: function (n) {
          for (var r = 0; r < this._layers.length; r++)
            if (this._layers[r] && f(this._layers[r].layer) === n)
              return this._layers[r];
        },
        _addLayer: function (n, r, a) {
          this._map && n.on("add remove", this._onLayerChange, this),
            this._layers.push({ layer: n, name: r, overlay: a }),
            this.options.sortLayers &&
              this._layers.sort(
                c(function (u, h) {
                  return this.options.sortFunction(
                    u.layer,
                    h.layer,
                    u.name,
                    h.name
                  );
                }, this)
              ),
            this.options.autoZIndex &&
              n.setZIndex &&
              (this._lastZIndex++, n.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          Uo(this._baseLayersList),
            Uo(this._overlaysList),
            (this._layerControlInputs = []);
          var n,
            r,
            a,
            u,
            h = 0;
          for (a = 0; a < this._layers.length; a++)
            (u = this._layers[a]),
              this._addItem(u),
              (r = r || u.overlay),
              (n = n || !u.overlay),
              (h += u.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((n = n && h > 1),
              (this._baseLayersList.style.display = n ? "" : "none")),
            (this._separator.style.display = r && n ? "" : "none"),
            this
          );
        },
        _onLayerChange: function (n) {
          this._handlingClick || this._update();
          var r = this._getLayer(f(n.target)),
            a = r.overlay
              ? n.type === "add"
                ? "overlayadd"
                : "overlayremove"
              : n.type === "add"
              ? "baselayerchange"
              : null;
          a && this._map.fire(a, r);
        },
        _createRadioElement: function (n, r) {
          var a =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              n +
              '"' +
              (r ? ' checked="checked"' : "") +
              "/>",
            u = document.createElement("div");
          return (u.innerHTML = a), u.firstChild;
        },
        _addItem: function (n) {
          var r = document.createElement("label"),
            a = this._map.hasLayer(n.layer),
            u;
          n.overlay
            ? ((u = document.createElement("input")),
              (u.type = "checkbox"),
              (u.className = "leaflet-control-layers-selector"),
              (u.defaultChecked = a))
            : (u = this._createRadioElement(
                "leaflet-base-layers_" + f(this),
                a
              )),
            this._layerControlInputs.push(u),
            (u.layerId = f(n.layer)),
            J(u, "click", this._onInputClick, this);
          var h = document.createElement("span");
          h.innerHTML = " " + n.name;
          var p = document.createElement("span");
          r.appendChild(p), p.appendChild(u), p.appendChild(h);
          var _ = n.overlay ? this._overlaysList : this._baseLayersList;
          return _.appendChild(r), this._checkDisabledLayers(), r;
        },
        _onInputClick: function () {
          if (!this._preventClick) {
            var n = this._layerControlInputs,
              r,
              a,
              u = [],
              h = [];
            this._handlingClick = !0;
            for (var p = n.length - 1; p >= 0; p--)
              (r = n[p]),
                (a = this._getLayer(r.layerId).layer),
                r.checked ? u.push(a) : r.checked || h.push(a);
            for (p = 0; p < h.length; p++)
              this._map.hasLayer(h[p]) && this._map.removeLayer(h[p]);
            for (p = 0; p < u.length; p++)
              this._map.hasLayer(u[p]) || this._map.addLayer(u[p]);
            (this._handlingClick = !1), this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function () {
          for (
            var n = this._layerControlInputs,
              r,
              a,
              u = this._map.getZoom(),
              h = n.length - 1;
            h >= 0;
            h--
          )
            (r = n[h]),
              (a = this._getLayer(r.layerId).layer),
              (r.disabled =
                (a.options.minZoom !== void 0 && u < a.options.minZoom) ||
                (a.options.maxZoom !== void 0 && u > a.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function () {
          var n = this._section;
          (this._preventClick = !0), J(n, "click", be), this.expand();
          var r = this;
          setTimeout(function () {
            pe(n, "click", be), (r._preventClick = !1);
          });
        },
      }),
      Bg = function (n, r, a) {
        return new Ih(n, r, a);
      },
      el = Mt.extend({
        options: {
          position: "topleft",
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: "Zoom in",
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: "Zoom out",
        },
        onAdd: function (n) {
          var r = "leaflet-control-zoom",
            a = ce("div", r + " leaflet-bar"),
            u = this.options;
          return (
            (this._zoomInButton = this._createButton(
              u.zoomInText,
              u.zoomInTitle,
              r + "-in",
              a,
              this._zoomIn
            )),
            (this._zoomOutButton = this._createButton(
              u.zoomOutText,
              u.zoomOutTitle,
              r + "-out",
              a,
              this._zoomOut
            )),
            this._updateDisabled(),
            n.on("zoomend zoomlevelschange", this._updateDisabled, this),
            a
          );
        },
        onRemove: function (n) {
          n.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (n) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(
              this._map.options.zoomDelta * (n.shiftKey ? 3 : 1)
            );
        },
        _zoomOut: function (n) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(
              this._map.options.zoomDelta * (n.shiftKey ? 3 : 1)
            );
        },
        _createButton: function (n, r, a, u, h) {
          var p = ce("a", a, u);
          return (
            (p.innerHTML = n),
            (p.href = "#"),
            (p.title = r),
            p.setAttribute("role", "button"),
            p.setAttribute("aria-label", r),
            Nr(p),
            J(p, "click", ei),
            J(p, "click", h, this),
            J(p, "click", this._refocusOnMap, this),
            p
          );
        },
        _updateDisabled: function () {
          var n = this._map,
            r = "leaflet-disabled";
          Le(this._zoomInButton, r),
            Le(this._zoomOutButton, r),
            this._zoomInButton.setAttribute("aria-disabled", "false"),
            this._zoomOutButton.setAttribute("aria-disabled", "false"),
            (this._disabled || n._zoom === n.getMinZoom()) &&
              (ee(this._zoomOutButton, r),
              this._zoomOutButton.setAttribute("aria-disabled", "true")),
            (this._disabled || n._zoom === n.getMaxZoom()) &&
              (ee(this._zoomInButton, r),
              this._zoomInButton.setAttribute("aria-disabled", "true"));
        },
      });
    oe.mergeOptions({ zoomControl: !0 }),
      oe.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new el()), this.addControl(this.zoomControl));
      });
    var bg = function (n) {
        return new el(n);
      },
      jh = Mt.extend({
        options: {
          position: "bottomleft",
          maxWidth: 100,
          metric: !0,
          imperial: !0,
        },
        onAdd: function (n) {
          var r = "leaflet-control-scale",
            a = ce("div", r),
            u = this.options;
          return (
            this._addScales(u, r + "-line", a),
            n.on(u.updateWhenIdle ? "moveend" : "move", this._update, this),
            n.whenReady(this._update, this),
            a
          );
        },
        onRemove: function (n) {
          n.off(
            this.options.updateWhenIdle ? "moveend" : "move",
            this._update,
            this
          );
        },
        _addScales: function (n, r, a) {
          n.metric && (this._mScale = ce("div", r, a)),
            n.imperial && (this._iScale = ce("div", r, a));
        },
        _update: function () {
          var n = this._map,
            r = n.getSize().y / 2,
            a = n.distance(
              n.containerPointToLatLng([0, r]),
              n.containerPointToLatLng([this.options.maxWidth, r])
            );
          this._updateScales(a);
        },
        _updateScales: function (n) {
          this.options.metric && n && this._updateMetric(n),
            this.options.imperial && n && this._updateImperial(n);
        },
        _updateMetric: function (n) {
          var r = this._getRoundNum(n),
            a = r < 1e3 ? r + " m" : r / 1e3 + " km";
          this._updateScale(this._mScale, a, r / n);
        },
        _updateImperial: function (n) {
          var r = n * 3.2808399,
            a,
            u,
            h;
          r > 5280
            ? ((a = r / 5280),
              (u = this._getRoundNum(a)),
              this._updateScale(this._iScale, u + " mi", u / a))
            : ((h = this._getRoundNum(r)),
              this._updateScale(this._iScale, h + " ft", h / r));
        },
        _updateScale: function (n, r, a) {
          (n.style.width = Math.round(this.options.maxWidth * a) + "px"),
            (n.innerHTML = r);
        },
        _getRoundNum: function (n) {
          var r = Math.pow(10, (Math.floor(n) + "").length - 1),
            a = n / r;
          return (
            (a = a >= 10 ? 10 : a >= 5 ? 5 : a >= 3 ? 3 : a >= 2 ? 2 : 1), r * a
          );
        },
      }),
      Fg = function (n) {
        return new jh(n);
      },
      Zg =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      tl = Mt.extend({
        options: {
          position: "bottomright",
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (V.inlineSvg ? Zg + " " : "") +
            "Leaflet</a>",
        },
        initialize: function (n) {
          P(this, n), (this._attributions = {});
        },
        onAdd: function (n) {
          (n.attributionControl = this),
            (this._container = ce("div", "leaflet-control-attribution")),
            Nr(this._container);
          for (var r in n._layers)
            n._layers[r].getAttribution &&
              this.addAttribution(n._layers[r].getAttribution());
          return (
            this._update(),
            n.on("layeradd", this._addAttribution, this),
            this._container
          );
        },
        onRemove: function (n) {
          n.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function (n) {
          n.layer.getAttribution &&
            (this.addAttribution(n.layer.getAttribution()),
            n.layer.once(
              "remove",
              function () {
                this.removeAttribution(n.layer.getAttribution());
              },
              this
            ));
        },
        setPrefix: function (n) {
          return (this.options.prefix = n), this._update(), this;
        },
        addAttribution: function (n) {
          return n
            ? (this._attributions[n] || (this._attributions[n] = 0),
              this._attributions[n]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (n) {
          return n
            ? (this._attributions[n] &&
                (this._attributions[n]--, this._update()),
              this)
            : this;
        },
        _update: function () {
          if (this._map) {
            var n = [];
            for (var r in this._attributions)
              this._attributions[r] && n.push(r);
            var a = [];
            this.options.prefix && a.push(this.options.prefix),
              n.length && a.push(n.join(", ")),
              (this._container.innerHTML = a.join(
                ' <span aria-hidden="true">|</span> '
              ));
          }
        },
      });
    oe.mergeOptions({ attributionControl: !0 }),
      oe.addInitHook(function () {
        this.options.attributionControl && new tl().addTo(this);
      });
    var Hg = function (n) {
      return new tl(n);
    };
    (Mt.Layers = Ih),
      (Mt.Zoom = el),
      (Mt.Scale = jh),
      (Mt.Attribution = tl),
      (Rr.layers = Bg),
      (Rr.zoom = bg),
      (Rr.scale = Fg),
      (Rr.attribution = Hg);
    var Ht = vt.extend({
      initialize: function (n) {
        this._map = n;
      },
      enable: function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    Ht.addTo = function (n, r) {
      return n.addHandler(r, this), this;
    };
    var Ug = { Events: Be },
      Ah = V.touch ? "touchstart mousedown" : "mousedown",
      vn = Jt.extend({
        options: { clickTolerance: 3 },
        initialize: function (n, r, a, u) {
          P(this, u),
            (this._element = n),
            (this._dragStartTarget = r || n),
            (this._preventOutline = a);
        },
        enable: function () {
          this._enabled ||
            (J(this._dragStartTarget, Ah, this._onDown, this),
            (this._enabled = !0));
        },
        disable: function () {
          this._enabled &&
            (vn._dragging === this && this.finishDrag(!0),
            pe(this._dragStartTarget, Ah, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (n) {
          if (
            this._enabled &&
            ((this._moved = !1), !Za(this._element, "leaflet-zoom-anim"))
          ) {
            if (n.touches && n.touches.length !== 1) {
              vn._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(
                vn._dragging ||
                n.shiftKey ||
                (n.which !== 1 && n.button !== 1 && !n.touches)
              ) &&
              ((vn._dragging = this),
              this._preventOutline && $a(this._element),
              Wa(),
              Mr(),
              !this._moving)
            ) {
              this.fire("down");
              var r = n.touches ? n.touches[0] : n,
                a = Th(this._element);
              (this._startPoint = new I(r.clientX, r.clientY)),
                (this._startPos = Xn(this._element)),
                (this._parentScale = Ga(a));
              var u = n.type === "mousedown";
              J(document, u ? "mousemove" : "touchmove", this._onMove, this),
                J(
                  document,
                  u ? "mouseup" : "touchend touchcancel",
                  this._onUp,
                  this
                );
            }
          }
        },
        _onMove: function (n) {
          if (this._enabled) {
            if (n.touches && n.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var r = n.touches && n.touches.length === 1 ? n.touches[0] : n,
              a = new I(r.clientX, r.clientY)._subtract(this._startPoint);
            (!a.x && !a.y) ||
              Math.abs(a.x) + Math.abs(a.y) < this.options.clickTolerance ||
              ((a.x /= this._parentScale.x),
              (a.y /= this._parentScale.y),
              be(n),
              this._moved ||
                (this.fire("dragstart"),
                (this._moved = !0),
                ee(document.body, "leaflet-dragging"),
                (this._lastTarget = n.target || n.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                ee(this._lastTarget, "leaflet-drag-target")),
              (this._newPos = this._startPos.add(a)),
              (this._moving = !0),
              (this._lastEvent = n),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var n = { originalEvent: this._lastEvent };
          this.fire("predrag", n),
            Te(this._element, this._newPos),
            this.fire("drag", n);
        },
        _onUp: function () {
          this._enabled && this.finishDrag();
        },
        finishDrag: function (n) {
          Le(document.body, "leaflet-dragging"),
            this._lastTarget &&
              (Le(this._lastTarget, "leaflet-drag-target"),
              (this._lastTarget = null)),
            pe(document, "mousemove touchmove", this._onMove, this),
            pe(document, "mouseup touchend touchcancel", this._onUp, this),
            Va(),
            Or();
          var r = this._moved && this._moving;
          (this._moving = !1),
            (vn._dragging = !1),
            r &&
              this.fire("dragend", {
                noInertia: n,
                distance: this._newPos.distanceTo(this._startPos),
              });
        },
      });
    function Dh(n, r, a) {
      var u,
        h = [1, 4, 2, 8],
        p,
        _,
        E,
        T,
        j,
        H,
        $,
        te;
      for (p = 0, H = n.length; p < H; p++) n[p]._code = ti(n[p], r);
      for (E = 0; E < 4; E++) {
        for ($ = h[E], u = [], p = 0, H = n.length, _ = H - 1; p < H; _ = p++)
          (T = n[p]),
            (j = n[_]),
            T._code & $
              ? j._code & $ ||
                ((te = Go(j, T, $, r, a)), (te._code = ti(te, r)), u.push(te))
              : (j._code & $ &&
                  ((te = Go(j, T, $, r, a)),
                  (te._code = ti(te, r)),
                  u.push(te)),
                u.push(T));
        n = u;
      }
      return n;
    }
    function Bh(n, r) {
      var a, u, h, p, _, E, T, j, H;
      if (!n || n.length === 0) throw new Error("latlngs not passed");
      yt(n) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (n = n[0]));
      var $ = X([0, 0]),
        te = de(n),
        Ke =
          te.getNorthWest().distanceTo(te.getSouthWest()) *
          te.getNorthEast().distanceTo(te.getNorthWest());
      Ke < 1700 && ($ = nl(n));
      var je = n.length,
        wt = [];
      for (a = 0; a < je; a++) {
        var it = X(n[a]);
        wt.push(r.project(X([it.lat - $.lat, it.lng - $.lng])));
      }
      for (E = T = j = 0, a = 0, u = je - 1; a < je; u = a++)
        (h = wt[a]),
          (p = wt[u]),
          (_ = h.y * p.x - p.y * h.x),
          (T += (h.x + p.x) * _),
          (j += (h.y + p.y) * _),
          (E += _ * 3);
      E === 0 ? (H = wt[0]) : (H = [T / E, j / E]);
      var ji = r.unproject(B(H));
      return X([ji.lat + $.lat, ji.lng + $.lng]);
    }
    function nl(n) {
      for (var r = 0, a = 0, u = 0, h = 0; h < n.length; h++) {
        var p = X(n[h]);
        (r += p.lat), (a += p.lng), u++;
      }
      return X([r / u, a / u]);
    }
    var Wg = {
      __proto__: null,
      clipPolygon: Dh,
      polygonCenter: Bh,
      centroid: nl,
    };
    function bh(n, r) {
      if (!r || !n.length) return n.slice();
      var a = r * r;
      return (n = $g(n, a)), (n = Qg(n, a)), n;
    }
    function Fh(n, r, a) {
      return Math.sqrt(Ir(n, r, a, !0));
    }
    function Vg(n, r, a) {
      return Ir(n, r, a);
    }
    function Qg(n, r) {
      var a = n.length,
        u = typeof Uint8Array < "u" ? Uint8Array : Array,
        h = new u(a);
      (h[0] = h[a - 1] = 1), il(n, h, r, 0, a - 1);
      var p,
        _ = [];
      for (p = 0; p < a; p++) h[p] && _.push(n[p]);
      return _;
    }
    function il(n, r, a, u, h) {
      var p = 0,
        _,
        E,
        T;
      for (E = u + 1; E <= h - 1; E++)
        (T = Ir(n[E], n[u], n[h], !0)), T > p && ((_ = E), (p = T));
      p > a && ((r[_] = 1), il(n, r, a, u, _), il(n, r, a, _, h));
    }
    function $g(n, r) {
      for (var a = [n[0]], u = 1, h = 0, p = n.length; u < p; u++)
        Gg(n[u], n[h]) > r && (a.push(n[u]), (h = u));
      return h < p - 1 && a.push(n[p - 1]), a;
    }
    var Zh;
    function Hh(n, r, a, u, h) {
      var p = u ? Zh : ti(n, a),
        _ = ti(r, a),
        E,
        T,
        j;
      for (Zh = _; ; ) {
        if (!(p | _)) return [n, r];
        if (p & _) return !1;
        (E = p || _),
          (T = Go(n, r, E, a, h)),
          (j = ti(T, a)),
          E === p ? ((n = T), (p = j)) : ((r = T), (_ = j));
      }
    }
    function Go(n, r, a, u, h) {
      var p = r.x - n.x,
        _ = r.y - n.y,
        E = u.min,
        T = u.max,
        j,
        H;
      return (
        a & 8
          ? ((j = n.x + (p * (T.y - n.y)) / _), (H = T.y))
          : a & 4
          ? ((j = n.x + (p * (E.y - n.y)) / _), (H = E.y))
          : a & 2
          ? ((j = T.x), (H = n.y + (_ * (T.x - n.x)) / p))
          : a & 1 && ((j = E.x), (H = n.y + (_ * (E.x - n.x)) / p)),
        new I(j, H, h)
      );
    }
    function ti(n, r) {
      var a = 0;
      return (
        n.x < r.min.x ? (a |= 1) : n.x > r.max.x && (a |= 2),
        n.y < r.min.y ? (a |= 4) : n.y > r.max.y && (a |= 8),
        a
      );
    }
    function Gg(n, r) {
      var a = r.x - n.x,
        u = r.y - n.y;
      return a * a + u * u;
    }
    function Ir(n, r, a, u) {
      var h = r.x,
        p = r.y,
        _ = a.x - h,
        E = a.y - p,
        T = _ * _ + E * E,
        j;
      return (
        T > 0 &&
          ((j = ((n.x - h) * _ + (n.y - p) * E) / T),
          j > 1
            ? ((h = a.x), (p = a.y))
            : j > 0 && ((h += _ * j), (p += E * j))),
        (_ = n.x - h),
        (E = n.y - p),
        u ? _ * _ + E * E : new I(h, p)
      );
    }
    function yt(n) {
      return !w(n[0]) || (typeof n[0][0] != "object" && typeof n[0][0] < "u");
    }
    function Uh(n) {
      return (
        console.warn(
          "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
        ),
        yt(n)
      );
    }
    function Wh(n, r) {
      var a, u, h, p, _, E, T, j;
      if (!n || n.length === 0) throw new Error("latlngs not passed");
      yt(n) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (n = n[0]));
      var H = X([0, 0]),
        $ = de(n),
        te =
          $.getNorthWest().distanceTo($.getSouthWest()) *
          $.getNorthEast().distanceTo($.getNorthWest());
      te < 1700 && (H = nl(n));
      var Ke = n.length,
        je = [];
      for (a = 0; a < Ke; a++) {
        var wt = X(n[a]);
        je.push(r.project(X([wt.lat - H.lat, wt.lng - H.lng])));
      }
      for (a = 0, u = 0; a < Ke - 1; a++) u += je[a].distanceTo(je[a + 1]) / 2;
      if (u === 0) j = je[0];
      else
        for (a = 0, p = 0; a < Ke - 1; a++)
          if (
            ((_ = je[a]),
            (E = je[a + 1]),
            (h = _.distanceTo(E)),
            (p += h),
            p > u)
          ) {
            (T = (p - u) / h),
              (j = [E.x - T * (E.x - _.x), E.y - T * (E.y - _.y)]);
            break;
          }
      var it = r.unproject(B(j));
      return X([it.lat + H.lat, it.lng + H.lng]);
    }
    var Kg = {
        __proto__: null,
        simplify: bh,
        pointToSegmentDistance: Fh,
        closestPointOnSegment: Vg,
        clipSegment: Hh,
        _getEdgeIntersection: Go,
        _getBitCode: ti,
        _sqClosestPointOnSegment: Ir,
        isFlat: yt,
        _flat: Uh,
        polylineCenter: Wh,
      },
      rl = {
        project: function (n) {
          return new I(n.lng, n.lat);
        },
        unproject: function (n) {
          return new ue(n.y, n.x);
        },
        bounds: new q([-180, -90], [180, 90]),
      },
      ol = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new q(
          [-2003750834279e-5, -1549657073972e-5],
          [2003750834279e-5, 1876465623138e-5]
        ),
        project: function (n) {
          var r = Math.PI / 180,
            a = this.R,
            u = n.lat * r,
            h = this.R_MINOR / a,
            p = Math.sqrt(1 - h * h),
            _ = p * Math.sin(u),
            E =
              Math.tan(Math.PI / 4 - u / 2) /
              Math.pow((1 - _) / (1 + _), p / 2);
          return (
            (u = -a * Math.log(Math.max(E, 1e-10))), new I(n.lng * r * a, u)
          );
        },
        unproject: function (n) {
          for (
            var r = 180 / Math.PI,
              a = this.R,
              u = this.R_MINOR / a,
              h = Math.sqrt(1 - u * u),
              p = Math.exp(-n.y / a),
              _ = Math.PI / 2 - 2 * Math.atan(p),
              E = 0,
              T = 0.1,
              j;
            E < 15 && Math.abs(T) > 1e-7;
            E++
          )
            (j = h * Math.sin(_)),
              (j = Math.pow((1 - j) / (1 + j), h / 2)),
              (T = Math.PI / 2 - 2 * Math.atan(p * j) - _),
              (_ += T);
          return new ue(_ * r, (n.x * r) / a);
        },
      },
      qg = { __proto__: null, LonLat: rl, Mercator: ol, SphericalMercator: za },
      Yg = s({}, gn, {
        code: "EPSG:3395",
        projection: ol,
        transformation: (function () {
          var n = 0.5 / (Math.PI * ol.R);
          return kr(n, 0.5, -n, 0.5);
        })(),
      }),
      Vh = s({}, gn, {
        code: "EPSG:4326",
        projection: rl,
        transformation: kr(1 / 180, 1, -1 / 180, 0.5),
      }),
      Xg = s({}, nt, {
        projection: rl,
        transformation: kr(1, 0, -1, 0),
        scale: function (n) {
          return Math.pow(2, n);
        },
        zoom: function (n) {
          return Math.log(n) / Math.LN2;
        },
        distance: function (n, r) {
          var a = r.lng - n.lng,
            u = r.lat - n.lat;
          return Math.sqrt(a * a + u * u);
        },
        infinite: !0,
      });
    (nt.Earth = gn),
      (nt.EPSG3395 = Yg),
      (nt.EPSG3857 = Ra),
      (nt.EPSG900913 = rg),
      (nt.EPSG4326 = Vh),
      (nt.Simple = Xg);
    var Ot = Jt.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0,
      },
      addTo: function (n) {
        return n.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (n) {
        return n && n.removeLayer(this), this;
      },
      getPane: function (n) {
        return this._map.getPane(n ? this.options[n] || n : this.options.pane);
      },
      addInteractiveTarget: function (n) {
        return (this._map._targets[f(n)] = this), this;
      },
      removeInteractiveTarget: function (n) {
        return delete this._map._targets[f(n)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (n) {
        var r = n.target;
        if (r.hasLayer(this)) {
          if (
            ((this._map = r),
            (this._zoomAnimated = r._zoomAnimated),
            this.getEvents)
          ) {
            var a = this.getEvents();
            r.on(a, this),
              this.once(
                "remove",
                function () {
                  r.off(a, this);
                },
                this
              );
          }
          this.onAdd(r), this.fire("add"), r.fire("layeradd", { layer: this });
        }
      },
    });
    oe.include({
      addLayer: function (n) {
        if (!n._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var r = f(n);
        return this._layers[r]
          ? this
          : ((this._layers[r] = n),
            (n._mapToAdd = this),
            n.beforeAdd && n.beforeAdd(this),
            this.whenReady(n._layerAdd, n),
            this);
      },
      removeLayer: function (n) {
        var r = f(n);
        return this._layers[r]
          ? (this._loaded && n.onRemove(this),
            delete this._layers[r],
            this._loaded &&
              (this.fire("layerremove", { layer: n }), n.fire("remove")),
            (n._map = n._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (n) {
        return f(n) in this._layers;
      },
      eachLayer: function (n, r) {
        for (var a in this._layers) n.call(r, this._layers[a]);
        return this;
      },
      _addLayers: function (n) {
        n = n ? (w(n) ? n : [n]) : [];
        for (var r = 0, a = n.length; r < a; r++) this.addLayer(n[r]);
      },
      _addZoomLimit: function (n) {
        (!isNaN(n.options.maxZoom) || !isNaN(n.options.minZoom)) &&
          ((this._zoomBoundLayers[f(n)] = n), this._updateZoomLevels());
      },
      _removeZoomLimit: function (n) {
        var r = f(n);
        this._zoomBoundLayers[r] &&
          (delete this._zoomBoundLayers[r], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var n = 1 / 0,
          r = -1 / 0,
          a = this._getZoomSpan();
        for (var u in this._zoomBoundLayers) {
          var h = this._zoomBoundLayers[u].options;
          (n = h.minZoom === void 0 ? n : Math.min(n, h.minZoom)),
            (r = h.maxZoom === void 0 ? r : Math.max(r, h.maxZoom));
        }
        (this._layersMaxZoom = r === -1 / 0 ? void 0 : r),
          (this._layersMinZoom = n === 1 / 0 ? void 0 : n),
          a !== this._getZoomSpan() && this.fire("zoomlevelschange"),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      },
    });
    var Oi = Ot.extend({
        initialize: function (n, r) {
          P(this, r), (this._layers = {});
          var a, u;
          if (n) for (a = 0, u = n.length; a < u; a++) this.addLayer(n[a]);
        },
        addLayer: function (n) {
          var r = this.getLayerId(n);
          return (
            (this._layers[r] = n), this._map && this._map.addLayer(n), this
          );
        },
        removeLayer: function (n) {
          var r = n in this._layers ? n : this.getLayerId(n);
          return (
            this._map &&
              this._layers[r] &&
              this._map.removeLayer(this._layers[r]),
            delete this._layers[r],
            this
          );
        },
        hasLayer: function (n) {
          var r = typeof n == "number" ? n : this.getLayerId(n);
          return r in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (n) {
          var r = Array.prototype.slice.call(arguments, 1),
            a,
            u;
          for (a in this._layers)
            (u = this._layers[a]), u[n] && u[n].apply(u, r);
          return this;
        },
        onAdd: function (n) {
          this.eachLayer(n.addLayer, n);
        },
        onRemove: function (n) {
          this.eachLayer(n.removeLayer, n);
        },
        eachLayer: function (n, r) {
          for (var a in this._layers) n.call(r, this._layers[a]);
          return this;
        },
        getLayer: function (n) {
          return this._layers[n];
        },
        getLayers: function () {
          var n = [];
          return this.eachLayer(n.push, n), n;
        },
        setZIndex: function (n) {
          return this.invoke("setZIndex", n);
        },
        getLayerId: function (n) {
          return f(n);
        },
      }),
      Jg = function (n, r) {
        return new Oi(n, r);
      },
      en = Oi.extend({
        addLayer: function (n) {
          return this.hasLayer(n)
            ? this
            : (n.addEventParent(this),
              Oi.prototype.addLayer.call(this, n),
              this.fire("layeradd", { layer: n }));
        },
        removeLayer: function (n) {
          return this.hasLayer(n)
            ? (n in this._layers && (n = this._layers[n]),
              n.removeEventParent(this),
              Oi.prototype.removeLayer.call(this, n),
              this.fire("layerremove", { layer: n }))
            : this;
        },
        setStyle: function (n) {
          return this.invoke("setStyle", n);
        },
        bringToFront: function () {
          return this.invoke("bringToFront");
        },
        bringToBack: function () {
          return this.invoke("bringToBack");
        },
        getBounds: function () {
          var n = new Ne();
          for (var r in this._layers) {
            var a = this._layers[r];
            n.extend(a.getBounds ? a.getBounds() : a.getLatLng());
          }
          return n;
        },
      }),
      ev = function (n, r) {
        return new en(n, r);
      },
      zi = vt.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          crossOrigin: !1,
        },
        initialize: function (n) {
          P(this, n);
        },
        createIcon: function (n) {
          return this._createIcon("icon", n);
        },
        createShadow: function (n) {
          return this._createIcon("shadow", n);
        },
        _createIcon: function (n, r) {
          var a = this._getIconUrl(n);
          if (!a) {
            if (n === "icon")
              throw new Error(
                "iconUrl not set in Icon options (see the docs)."
              );
            return null;
          }
          var u = this._createImg(a, r && r.tagName === "IMG" ? r : null);
          return (
            this._setIconStyles(u, n),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (u.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            u
          );
        },
        _setIconStyles: function (n, r) {
          var a = this.options,
            u = a[r + "Size"];
          typeof u == "number" && (u = [u, u]);
          var h = B(u),
            p = B(
              (r === "shadow" && a.shadowAnchor) ||
                a.iconAnchor ||
                (h && h.divideBy(2, !0))
            );
          (n.className = "leaflet-marker-" + r + " " + (a.className || "")),
            p &&
              ((n.style.marginLeft = -p.x + "px"),
              (n.style.marginTop = -p.y + "px")),
            h && ((n.style.width = h.x + "px"), (n.style.height = h.y + "px"));
        },
        _createImg: function (n, r) {
          return (r = r || document.createElement("img")), (r.src = n), r;
        },
        _getIconUrl: function (n) {
          return (
            (V.retina && this.options[n + "RetinaUrl"]) ||
            this.options[n + "Url"]
          );
        },
      });
    function tv(n) {
      return new zi(n);
    }
    var jr = zi.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (n) {
          return (
            typeof jr.imagePath != "string" &&
              (jr.imagePath = this._detectIconPath()),
            (this.options.imagePath || jr.imagePath) +
              zi.prototype._getIconUrl.call(this, n)
          );
        },
        _stripUrl: function (n) {
          var r = function (a, u, h) {
            var p = u.exec(a);
            return p && p[h];
          };
          return (
            (n = r(n, /^url\((['"])?(.+)\1\)$/, 2)),
            n && r(n, /^(.*)marker-icon\.png$/, 1)
          );
        },
        _detectIconPath: function () {
          var n = ce("div", "leaflet-default-icon-path", document.body),
            r = Tr(n, "background-image") || Tr(n, "backgroundImage");
          if ((document.body.removeChild(n), (r = this._stripUrl(r)), r))
            return r;
          var a = document.querySelector('link[href$="leaflet.css"]');
          return a ? a.href.substring(0, a.href.length - 11 - 1) : "";
        },
      }),
      Qh = Ht.extend({
        initialize: function (n) {
          this._marker = n;
        },
        addHooks: function () {
          var n = this._marker._icon;
          this._draggable || (this._draggable = new vn(n, n, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this
              )
              .enable(),
            ee(n, "leaflet-marker-draggable");
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .disable(),
            this._marker._icon &&
              Le(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (n) {
          var r = this._marker,
            a = r._map,
            u = this._marker.options.autoPanSpeed,
            h = this._marker.options.autoPanPadding,
            p = Xn(r._icon),
            _ = a.getPixelBounds(),
            E = a.getPixelOrigin(),
            T = ae(_.min._subtract(E).add(h), _.max._subtract(E).subtract(h));
          if (!T.contains(p)) {
            var j = B(
              (Math.max(T.max.x, p.x) - T.max.x) / (_.max.x - T.max.x) -
                (Math.min(T.min.x, p.x) - T.min.x) / (_.min.x - T.min.x),
              (Math.max(T.max.y, p.y) - T.max.y) / (_.max.y - T.max.y) -
                (Math.min(T.min.y, p.y) - T.min.y) / (_.min.y - T.min.y)
            ).multiplyBy(u);
            a.panBy(j, { animate: !1 }),
              this._draggable._newPos._add(j),
              this._draggable._startPos._add(j),
              Te(r._icon, this._draggable._newPos),
              this._onDrag(n),
              (this._panRequest = se(this._adjustPan.bind(this, n)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function (n) {
          this._marker.options.autoPan &&
            (ye(this._panRequest),
            (this._panRequest = se(this._adjustPan.bind(this, n))));
        },
        _onDrag: function (n) {
          var r = this._marker,
            a = r._shadow,
            u = Xn(r._icon),
            h = r._map.layerPointToLatLng(u);
          a && Te(a, u),
            (r._latlng = h),
            (n.latlng = h),
            (n.oldLatLng = this._oldLatLng),
            r.fire("move", n).fire("drag", n);
        },
        _onDragEnd: function (n) {
          ye(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", n);
        },
      }),
      Ko = Ot.extend({
        options: {
          icon: new jr(),
          interactive: !0,
          keyboard: !0,
          title: "",
          alt: "Marker",
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: "markerPane",
          shadowPane: "shadowPane",
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (n, r) {
          P(this, r), (this._latlng = X(n));
        },
        onAdd: function (n) {
          (this._zoomAnimated =
            this._zoomAnimated && n.options.markerZoomAnimation),
            this._zoomAnimated && n.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (n) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && n.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (n) {
          var r = this._latlng;
          return (
            (this._latlng = X(n)),
            this.update(),
            this.fire("move", { oldLatLng: r, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (n) {
          return (this.options.zIndexOffset = n), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (n) {
          return (
            (this.options.icon = n),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var n = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(n);
          }
          return this;
        },
        _initIcon: function () {
          var n = this.options,
            r = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
            a = n.icon.createIcon(this._icon),
            u = !1;
          a !== this._icon &&
            (this._icon && this._removeIcon(),
            (u = !0),
            n.title && (a.title = n.title),
            a.tagName === "IMG" && (a.alt = n.alt || "")),
            ee(a, r),
            n.keyboard &&
              ((a.tabIndex = "0"), a.setAttribute("role", "button")),
            (this._icon = a),
            n.riseOnHover &&
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex,
              }),
            this.options.autoPanOnFocus &&
              J(a, "focus", this._panOnFocus, this);
          var h = n.icon.createShadow(this._shadow),
            p = !1;
          h !== this._shadow && (this._removeShadow(), (p = !0)),
            h && (ee(h, r), (h.alt = "")),
            (this._shadow = h),
            n.opacity < 1 && this._updateOpacity(),
            u && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            h && p && this.getPane(n.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
            this.options.autoPanOnFocus &&
              pe(this._icon, "focus", this._panOnFocus, this),
            we(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && we(this._shadow), (this._shadow = null);
        },
        _setPos: function (n) {
          this._icon && Te(this._icon, n),
            this._shadow && Te(this._shadow, n),
            (this._zIndex = n.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (n) {
          this._icon && (this._icon.style.zIndex = this._zIndex + n);
        },
        _animateZoom: function (n) {
          var r = this._map
            ._latLngToNewLayerPoint(this._latlng, n.zoom, n.center)
            .round();
          this._setPos(r);
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (ee(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            Qh)
          ) {
            var n = this.options.draggable;
            this.dragging &&
              ((n = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new Qh(this)),
              n && this.dragging.enable();
          }
        },
        setOpacity: function (n) {
          return (
            (this.options.opacity = n), this._map && this._updateOpacity(), this
          );
        },
        _updateOpacity: function () {
          var n = this.options.opacity;
          this._icon && _t(this._icon, n), this._shadow && _t(this._shadow, n);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var n = this._map;
          if (n) {
            var r = this.options.icon.options,
              a = r.iconSize ? B(r.iconSize) : B(0, 0),
              u = r.iconAnchor ? B(r.iconAnchor) : B(0, 0);
            n.panInside(this._latlng, {
              paddingTopLeft: u,
              paddingBottomRight: a.subtract(u),
            });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function nv(n, r) {
      return new Ko(n, r);
    }
    var _n = Ot.extend({
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round",
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: "evenodd",
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (n) {
          this._renderer = n.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (n) {
          return (
            P(this, n),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                n &&
                Object.prototype.hasOwnProperty.call(n, "weight") &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      qo = _n.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (n, r) {
          P(this, r),
            (this._latlng = X(n)),
            (this._radius = this.options.radius);
        },
        setLatLng: function (n) {
          var r = this._latlng;
          return (
            (this._latlng = X(n)),
            this.redraw(),
            this.fire("move", { oldLatLng: r, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (n) {
          return (this.options.radius = this._radius = n), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (n) {
          var r = (n && n.radius) || this._radius;
          return _n.prototype.setStyle.call(this, n), this.setRadius(r), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds();
        },
        _updateBounds: function () {
          var n = this._radius,
            r = this._radiusY || n,
            a = this._clickTolerance(),
            u = [n + a, r + a];
          this._pxBounds = new q(this._point.subtract(u), this._point.add(u));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return (
            this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          );
        },
        _containsPoint: function (n) {
          return (
            n.distanceTo(this._point) <= this._radius + this._clickTolerance()
          );
        },
      });
    function iv(n, r) {
      return new qo(n, r);
    }
    var sl = qo.extend({
      initialize: function (n, r, a) {
        if (
          (typeof r == "number" && (r = s({}, a, { radius: r })),
          P(this, r),
          (this._latlng = X(n)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (n) {
        return (this._mRadius = n), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var n = [this._radius, this._radiusY || this._radius];
        return new Ne(
          this._map.layerPointToLatLng(this._point.subtract(n)),
          this._map.layerPointToLatLng(this._point.add(n))
        );
      },
      setStyle: _n.prototype.setStyle,
      _project: function () {
        var n = this._latlng.lng,
          r = this._latlng.lat,
          a = this._map,
          u = a.options.crs;
        if (u.distance === gn.distance) {
          var h = Math.PI / 180,
            p = this._mRadius / gn.R / h,
            _ = a.project([r + p, n]),
            E = a.project([r - p, n]),
            T = _.add(E).divideBy(2),
            j = a.unproject(T).lat,
            H =
              Math.acos(
                (Math.cos(p * h) - Math.sin(r * h) * Math.sin(j * h)) /
                  (Math.cos(r * h) * Math.cos(j * h))
              ) / h;
          (isNaN(H) || H === 0) && (H = p / Math.cos((Math.PI / 180) * r)),
            (this._point = T.subtract(a.getPixelOrigin())),
            (this._radius = isNaN(H) ? 0 : T.x - a.project([j, n - H]).x),
            (this._radiusY = T.y - _.y);
        } else {
          var $ = u.unproject(
            u.project(this._latlng).subtract([this._mRadius, 0])
          );
          (this._point = a.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - a.latLngToLayerPoint($).x);
        }
        this._updateBounds();
      },
    });
    function rv(n, r, a) {
      return new sl(n, r, a);
    }
    var tn = _n.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (n, r) {
        P(this, r), this._setLatLngs(n);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (n) {
        return this._setLatLngs(n), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (n) {
        for (
          var r = 1 / 0, a = null, u = Ir, h, p, _ = 0, E = this._parts.length;
          _ < E;
          _++
        )
          for (var T = this._parts[_], j = 1, H = T.length; j < H; j++) {
            (h = T[j - 1]), (p = T[j]);
            var $ = u(n, h, p, !0);
            $ < r && ((r = $), (a = u(n, h, p)));
          }
        return a && (a.distance = Math.sqrt(r)), a;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Wh(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (n, r) {
        return (
          (r = r || this._defaultShape()),
          (n = X(n)),
          r.push(n),
          this._bounds.extend(n),
          this.redraw()
        );
      },
      _setLatLngs: function (n) {
        (this._bounds = new Ne()), (this._latlngs = this._convertLatLngs(n));
      },
      _defaultShape: function () {
        return yt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (n) {
        for (var r = [], a = yt(n), u = 0, h = n.length; u < h; u++)
          a
            ? ((r[u] = X(n[u])), this._bounds.extend(r[u]))
            : (r[u] = this._convertLatLngs(n[u]));
        return r;
      },
      _project: function () {
        var n = new q();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, n),
          this._bounds.isValid() &&
            n.isValid() &&
            ((this._rawPxBounds = n), this._updateBounds());
      },
      _updateBounds: function () {
        var n = this._clickTolerance(),
          r = new I(n, n);
        this._rawPxBounds &&
          (this._pxBounds = new q([
            this._rawPxBounds.min.subtract(r),
            this._rawPxBounds.max.add(r),
          ]));
      },
      _projectLatlngs: function (n, r, a) {
        var u = n[0] instanceof ue,
          h = n.length,
          p,
          _;
        if (u) {
          for (_ = [], p = 0; p < h; p++)
            (_[p] = this._map.latLngToLayerPoint(n[p])), a.extend(_[p]);
          r.push(_);
        } else for (p = 0; p < h; p++) this._projectLatlngs(n[p], r, a);
      },
      _clipPoints: function () {
        var n = this._renderer._bounds;
        if (
          ((this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(n)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var r = this._parts,
            a,
            u,
            h,
            p,
            _,
            E,
            T;
          for (a = 0, h = 0, p = this._rings.length; a < p; a++)
            for (T = this._rings[a], u = 0, _ = T.length; u < _ - 1; u++)
              (E = Hh(T[u], T[u + 1], n, u, !0)),
                E &&
                  ((r[h] = r[h] || []),
                  r[h].push(E[0]),
                  (E[1] !== T[u + 1] || u === _ - 2) && (r[h].push(E[1]), h++));
        }
      },
      _simplifyPoints: function () {
        for (
          var n = this._parts,
            r = this.options.smoothFactor,
            a = 0,
            u = n.length;
          a < u;
          a++
        )
          n[a] = bh(n[a], r);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (n, r) {
        var a,
          u,
          h,
          p,
          _,
          E,
          T = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(n)) return !1;
        for (a = 0, p = this._parts.length; a < p; a++)
          for (
            E = this._parts[a], u = 0, _ = E.length, h = _ - 1;
            u < _;
            h = u++
          )
            if (!(!r && u === 0) && Fh(n, E[h], E[u]) <= T) return !0;
        return !1;
      },
    });
    function ov(n, r) {
      return new tn(n, r);
    }
    tn._flat = Uh;
    var Ni = tn.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Bh(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (n) {
        var r = tn.prototype._convertLatLngs.call(this, n),
          a = r.length;
        return (
          a >= 2 && r[0] instanceof ue && r[0].equals(r[a - 1]) && r.pop(), r
        );
      },
      _setLatLngs: function (n) {
        tn.prototype._setLatLngs.call(this, n),
          yt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return yt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var n = this._renderer._bounds,
          r = this.options.weight,
          a = new I(r, r);
        if (
          ((n = new q(n.min.subtract(a), n.max.add(a))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(n)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var u = 0, h = this._rings.length, p; u < h; u++)
            (p = Dh(this._rings[u], n, !0)), p.length && this._parts.push(p);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (n) {
        var r = !1,
          a,
          u,
          h,
          p,
          _,
          E,
          T,
          j;
        if (!this._pxBounds || !this._pxBounds.contains(n)) return !1;
        for (p = 0, T = this._parts.length; p < T; p++)
          for (
            a = this._parts[p], _ = 0, j = a.length, E = j - 1;
            _ < j;
            E = _++
          )
            (u = a[_]),
              (h = a[E]),
              u.y > n.y != h.y > n.y &&
                n.x < ((h.x - u.x) * (n.y - u.y)) / (h.y - u.y) + u.x &&
                (r = !r);
        return r || tn.prototype._containsPoint.call(this, n, !0);
      },
    });
    function sv(n, r) {
      return new Ni(n, r);
    }
    var nn = en.extend({
      initialize: function (n, r) {
        P(this, r), (this._layers = {}), n && this.addData(n);
      },
      addData: function (n) {
        var r = w(n) ? n : n.features,
          a,
          u,
          h;
        if (r) {
          for (a = 0, u = r.length; a < u; a++)
            (h = r[a]),
              (h.geometries || h.geometry || h.features || h.coordinates) &&
                this.addData(h);
          return this;
        }
        var p = this.options;
        if (p.filter && !p.filter(n)) return this;
        var _ = Yo(n, p);
        return _
          ? ((_.feature = es(n)),
            (_.defaultOptions = _.options),
            this.resetStyle(_),
            p.onEachFeature && p.onEachFeature(n, _),
            this.addLayer(_))
          : this;
      },
      resetStyle: function (n) {
        return n === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((n.options = s({}, n.defaultOptions)),
            this._setLayerStyle(n, this.options.style),
            this);
      },
      setStyle: function (n) {
        return this.eachLayer(function (r) {
          this._setLayerStyle(r, n);
        }, this);
      },
      _setLayerStyle: function (n, r) {
        n.setStyle &&
          (typeof r == "function" && (r = r(n.feature)), n.setStyle(r));
      },
    });
    function Yo(n, r) {
      var a = n.type === "Feature" ? n.geometry : n,
        u = a ? a.coordinates : null,
        h = [],
        p = r && r.pointToLayer,
        _ = (r && r.coordsToLatLng) || al,
        E,
        T,
        j,
        H;
      if (!u && !a) return null;
      switch (a.type) {
        case "Point":
          return (E = _(u)), $h(p, n, E, r);
        case "MultiPoint":
          for (j = 0, H = u.length; j < H; j++)
            (E = _(u[j])), h.push($h(p, n, E, r));
          return new en(h);
        case "LineString":
        case "MultiLineString":
          return (T = Xo(u, a.type === "LineString" ? 0 : 1, _)), new tn(T, r);
        case "Polygon":
        case "MultiPolygon":
          return (T = Xo(u, a.type === "Polygon" ? 1 : 2, _)), new Ni(T, r);
        case "GeometryCollection":
          for (j = 0, H = a.geometries.length; j < H; j++) {
            var $ = Yo(
              {
                geometry: a.geometries[j],
                type: "Feature",
                properties: n.properties,
              },
              r
            );
            $ && h.push($);
          }
          return new en(h);
        case "FeatureCollection":
          for (j = 0, H = a.features.length; j < H; j++) {
            var te = Yo(a.features[j], r);
            te && h.push(te);
          }
          return new en(h);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function $h(n, r, a, u) {
      return n ? n(r, a) : new Ko(a, u && u.markersInheritOptions && u);
    }
    function al(n) {
      return new ue(n[1], n[0], n[2]);
    }
    function Xo(n, r, a) {
      for (var u = [], h = 0, p = n.length, _; h < p; h++)
        (_ = r ? Xo(n[h], r - 1, a) : (a || al)(n[h])), u.push(_);
      return u;
    }
    function ll(n, r) {
      return (
        (n = X(n)),
        n.alt !== void 0
          ? [x(n.lng, r), x(n.lat, r), x(n.alt, r)]
          : [x(n.lng, r), x(n.lat, r)]
      );
    }
    function Jo(n, r, a, u) {
      for (var h = [], p = 0, _ = n.length; p < _; p++)
        h.push(r ? Jo(n[p], yt(n[p]) ? 0 : r - 1, a, u) : ll(n[p], u));
      return !r && a && h.length > 0 && h.push(h[0].slice()), h;
    }
    function Ri(n, r) {
      return n.feature ? s({}, n.feature, { geometry: r }) : es(r);
    }
    function es(n) {
      return n.type === "Feature" || n.type === "FeatureCollection"
        ? n
        : { type: "Feature", properties: {}, geometry: n };
    }
    var ul = {
      toGeoJSON: function (n) {
        return Ri(this, {
          type: "Point",
          coordinates: ll(this.getLatLng(), n),
        });
      },
    };
    Ko.include(ul),
      sl.include(ul),
      qo.include(ul),
      tn.include({
        toGeoJSON: function (n) {
          var r = !yt(this._latlngs),
            a = Jo(this._latlngs, r ? 1 : 0, !1, n);
          return Ri(this, {
            type: (r ? "Multi" : "") + "LineString",
            coordinates: a,
          });
        },
      }),
      Ni.include({
        toGeoJSON: function (n) {
          var r = !yt(this._latlngs),
            a = r && !yt(this._latlngs[0]),
            u = Jo(this._latlngs, a ? 2 : r ? 1 : 0, !0, n);
          return (
            r || (u = [u]),
            Ri(this, { type: (a ? "Multi" : "") + "Polygon", coordinates: u })
          );
        },
      }),
      Oi.include({
        toMultiPoint: function (n) {
          var r = [];
          return (
            this.eachLayer(function (a) {
              r.push(a.toGeoJSON(n).geometry.coordinates);
            }),
            Ri(this, { type: "MultiPoint", coordinates: r })
          );
        },
        toGeoJSON: function (n) {
          var r =
            this.feature && this.feature.geometry && this.feature.geometry.type;
          if (r === "MultiPoint") return this.toMultiPoint(n);
          var a = r === "GeometryCollection",
            u = [];
          return (
            this.eachLayer(function (h) {
              if (h.toGeoJSON) {
                var p = h.toGeoJSON(n);
                if (a) u.push(p.geometry);
                else {
                  var _ = es(p);
                  _.type === "FeatureCollection"
                    ? u.push.apply(u, _.features)
                    : u.push(_);
                }
              }
            }),
            a
              ? Ri(this, { geometries: u, type: "GeometryCollection" })
              : { type: "FeatureCollection", features: u }
          );
        },
      });
    function Gh(n, r) {
      return new nn(n, r);
    }
    var av = Gh,
      ts = Ot.extend({
        options: {
          opacity: 1,
          alt: "",
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: "",
          zIndex: 1,
          className: "",
        },
        initialize: function (n, r, a) {
          (this._url = n), (this._bounds = de(r)), P(this, a);
        },
        onAdd: function () {
          this._image ||
            (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (ee(this._image, "leaflet-interactive"),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          we(this._image),
            this.options.interactive &&
              this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (n) {
          return (
            (this.options.opacity = n),
            this._image && this._updateOpacity(),
            this
          );
        },
        setStyle: function (n) {
          return n.opacity && this.setOpacity(n.opacity), this;
        },
        bringToFront: function () {
          return this._map && Ti(this._image), this;
        },
        bringToBack: function () {
          return this._map && Mi(this._image), this;
        },
        setUrl: function (n) {
          return (this._url = n), this._image && (this._image.src = n), this;
        },
        setBounds: function (n) {
          return (this._bounds = de(n)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var n = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
        },
        setZIndex: function (n) {
          return (this.options.zIndex = n), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var n = this._url.tagName === "IMG",
            r = (this._image = n ? this._url : ce("img"));
          if (
            (ee(r, "leaflet-image-layer"),
            this._zoomAnimated && ee(r, "leaflet-zoom-animated"),
            this.options.className && ee(r, this.options.className),
            (r.onselectstart = g),
            (r.onmousemove = g),
            (r.onload = c(this.fire, this, "load")),
            (r.onerror = c(this._overlayOnError, this, "error")),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (r.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            n)
          ) {
            this._url = r.src;
            return;
          }
          (r.src = this._url), (r.alt = this.options.alt);
        },
        _animateZoom: function (n) {
          var r = this._map.getZoomScale(n.zoom),
            a = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              n.zoom,
              n.center
            ).min;
          Yn(this._image, a, r);
        },
        _reset: function () {
          var n = this._image,
            r = new q(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ),
            a = r.getSize();
          Te(n, r.min),
            (n.style.width = a.x + "px"),
            (n.style.height = a.y + "px");
        },
        _updateOpacity: function () {
          _t(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire("error");
          var n = this.options.errorOverlayUrl;
          n && this._url !== n && ((this._url = n), (this._image.src = n));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      lv = function (n, r, a) {
        return new ts(n, r, a);
      },
      Kh = ts.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0,
        },
        _initImage: function () {
          var n = this._url.tagName === "VIDEO",
            r = (this._image = n ? this._url : ce("video"));
          if (
            (ee(r, "leaflet-image-layer"),
            this._zoomAnimated && ee(r, "leaflet-zoom-animated"),
            this.options.className && ee(r, this.options.className),
            (r.onselectstart = g),
            (r.onmousemove = g),
            (r.onloadeddata = c(this.fire, this, "load")),
            n)
          ) {
            for (
              var a = r.getElementsByTagName("source"), u = [], h = 0;
              h < a.length;
              h++
            )
              u.push(a[h].src);
            this._url = a.length > 0 ? u : [r.src];
            return;
          }
          w(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(r.style, "objectFit") &&
              (r.style.objectFit = "fill"),
            (r.autoplay = !!this.options.autoplay),
            (r.loop = !!this.options.loop),
            (r.muted = !!this.options.muted),
            (r.playsInline = !!this.options.playsInline);
          for (var p = 0; p < this._url.length; p++) {
            var _ = ce("source");
            (_.src = this._url[p]), r.appendChild(_);
          }
        },
      });
    function uv(n, r, a) {
      return new Kh(n, r, a);
    }
    var qh = ts.extend({
      _initImage: function () {
        var n = (this._image = this._url);
        ee(n, "leaflet-image-layer"),
          this._zoomAnimated && ee(n, "leaflet-zoom-animated"),
          this.options.className && ee(n, this.options.className),
          (n.onselectstart = g),
          (n.onmousemove = g);
      },
    });
    function cv(n, r, a) {
      return new qh(n, r, a);
    }
    var Ut = Ot.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: "",
      },
      initialize: function (n, r) {
        n && (n instanceof ue || w(n))
          ? ((this._latlng = X(n)), P(this, r))
          : (P(this, n), (this._source = r)),
          this.options.content && (this._content = this.options.content);
      },
      openOn: function (n) {
        return (
          (n = arguments.length ? n : this._source._map),
          n.hasLayer(this) || n.addLayer(this),
          this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (n) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = n) : (n = this._source),
              this._prepareOpen(),
              this.openOn(n._map)),
          this
        );
      },
      onAdd: function (n) {
        (this._zoomAnimated = n._zoomAnimated),
          this._container || this._initLayout(),
          n._fadeAnimated && _t(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          n._fadeAnimated && _t(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (ee(this._container, "leaflet-interactive"),
            this.addInteractiveTarget(this._container));
      },
      onRemove: function (n) {
        n._fadeAnimated
          ? (_t(this._container, 0),
            (this._removeTimeout = setTimeout(
              c(we, void 0, this._container),
              200
            )))
          : we(this._container),
          this.options.interactive &&
            (Le(this._container, "leaflet-interactive"),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (n) {
        return (
          (this._latlng = X(n)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (n) {
        return (this._content = n), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var n = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && Ti(this._container), this;
      },
      bringToBack: function () {
        return this._map && Mi(this._container), this;
      },
      _prepareOpen: function (n) {
        var r = this._source;
        if (!r._map) return !1;
        if (r instanceof en) {
          r = null;
          var a = this._source._layers;
          for (var u in a)
            if (a[u]._map) {
              r = a[u];
              break;
            }
          if (!r) return !1;
          this._source = r;
        }
        if (!n)
          if (r.getCenter) n = r.getCenter();
          else if (r.getLatLng) n = r.getLatLng();
          else if (r.getBounds) n = r.getBounds().getCenter();
          else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(n), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (this._content) {
          var n = this._contentNode,
            r =
              typeof this._content == "function"
                ? this._content(this._source || this)
                : this._content;
          if (typeof r == "string") n.innerHTML = r;
          else {
            for (; n.hasChildNodes(); ) n.removeChild(n.firstChild);
            n.appendChild(r);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var n = this._map.latLngToLayerPoint(this._latlng),
            r = B(this.options.offset),
            a = this._getAnchor();
          this._zoomAnimated
            ? Te(this._container, n.add(a))
            : (r = r.add(n).add(a));
          var u = (this._containerBottom = -r.y),
            h = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + r.x);
          (this._container.style.bottom = u + "px"),
            (this._container.style.left = h + "px");
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    oe.include({
      _initOverlay: function (n, r, a, u) {
        var h = r;
        return (
          h instanceof n || (h = new n(u).setContent(r)), a && h.setLatLng(a), h
        );
      },
    }),
      Ot.include({
        _initOverlay: function (n, r, a, u) {
          var h = a;
          return (
            h instanceof n
              ? (P(h, u), (h._source = this))
              : ((h = r && !u ? r : new n(u, this)), h.setContent(a)),
            h
          );
        },
      });
    var ns = Ut.extend({
        options: {
          pane: "popupPane",
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: "",
        },
        openOn: function (n) {
          return (
            (n = arguments.length ? n : this._source._map),
            !n.hasLayer(this) &&
              n._popup &&
              n._popup.options.autoClose &&
              n.removeLayer(n._popup),
            (n._popup = this),
            Ut.prototype.openOn.call(this, n)
          );
        },
        onAdd: function (n) {
          Ut.prototype.onAdd.call(this, n),
            n.fire("popupopen", { popup: this }),
            this._source &&
              (this._source.fire("popupopen", { popup: this }, !0),
              this._source instanceof _n || this._source.on("preclick", Jn));
        },
        onRemove: function (n) {
          Ut.prototype.onRemove.call(this, n),
            n.fire("popupclose", { popup: this }),
            this._source &&
              (this._source.fire("popupclose", { popup: this }, !0),
              this._source instanceof _n || this._source.off("preclick", Jn));
        },
        getEvents: function () {
          var n = Ut.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) &&
              (n.preclick = this.close),
            this.options.keepInView && (n.moveend = this._adjustPan),
            n
          );
        },
        _initLayout: function () {
          var n = "leaflet-popup",
            r = (this._container = ce(
              "div",
              n +
                " " +
                (this.options.className || "") +
                " leaflet-zoom-animated"
            )),
            a = (this._wrapper = ce("div", n + "-content-wrapper", r));
          if (
            ((this._contentNode = ce("div", n + "-content", a)),
            Nr(r),
            Xa(this._contentNode),
            J(r, "contextmenu", Jn),
            (this._tipContainer = ce("div", n + "-tip-container", r)),
            (this._tip = ce("div", n + "-tip", this._tipContainer)),
            this.options.closeButton)
          ) {
            var u = (this._closeButton = ce("a", n + "-close-button", r));
            u.setAttribute("role", "button"),
              u.setAttribute("aria-label", "Close popup"),
              (u.href = "#close"),
              (u.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              J(
                u,
                "click",
                function (h) {
                  be(h), this.close();
                },
                this
              );
          }
        },
        _updateLayout: function () {
          var n = this._contentNode,
            r = n.style;
          (r.width = ""), (r.whiteSpace = "nowrap");
          var a = n.offsetWidth;
          (a = Math.min(a, this.options.maxWidth)),
            (a = Math.max(a, this.options.minWidth)),
            (r.width = a + 1 + "px"),
            (r.whiteSpace = ""),
            (r.height = "");
          var u = n.offsetHeight,
            h = this.options.maxHeight,
            p = "leaflet-popup-scrolled";
          h && u > h ? ((r.height = h + "px"), ee(n, p)) : Le(n, p),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (n) {
          var r = this._map._latLngToNewLayerPoint(
              this._latlng,
              n.zoom,
              n.center
            ),
            a = this._getAnchor();
          Te(this._container, r.add(a));
        },
        _adjustPan: function () {
          if (this.options.autoPan) {
            if (
              (this._map._panAnim && this._map._panAnim.stop(),
              this._autopanning)
            ) {
              this._autopanning = !1;
              return;
            }
            var n = this._map,
              r = parseInt(Tr(this._container, "marginBottom"), 10) || 0,
              a = this._container.offsetHeight + r,
              u = this._containerWidth,
              h = new I(this._containerLeft, -a - this._containerBottom);
            h._add(Xn(this._container));
            var p = n.layerPointToContainerPoint(h),
              _ = B(this.options.autoPanPadding),
              E = B(this.options.autoPanPaddingTopLeft || _),
              T = B(this.options.autoPanPaddingBottomRight || _),
              j = n.getSize(),
              H = 0,
              $ = 0;
            p.x + u + T.x > j.x && (H = p.x + u - j.x + T.x),
              p.x - H - E.x < 0 && (H = p.x - E.x),
              p.y + a + T.y > j.y && ($ = p.y + a - j.y + T.y),
              p.y - $ - E.y < 0 && ($ = p.y - E.y),
              (H || $) &&
                (this.options.keepInView && (this._autopanning = !0),
                n.fire("autopanstart").panBy([H, $]));
          }
        },
        _getAnchor: function () {
          return B(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0]
          );
        },
      }),
      hv = function (n, r) {
        return new ns(n, r);
      };
    oe.mergeOptions({ closePopupOnClick: !0 }),
      oe.include({
        openPopup: function (n, r, a) {
          return this._initOverlay(ns, n, r, a).openOn(this), this;
        },
        closePopup: function (n) {
          return (n = arguments.length ? n : this._popup), n && n.close(), this;
        },
      }),
      Ot.include({
        bindPopup: function (n, r) {
          return (
            (this._popup = this._initOverlay(ns, this._popup, n, r)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (n) {
          return (
            this._popup &&
              (this instanceof en || (this._popup._source = this),
              this._popup._prepareOpen(n || this._latlng) &&
                this._popup.openOn(this._map)),
            this
          );
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (n) {
          return this._popup && this._popup.setContent(n), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (n) {
          if (!(!this._popup || !this._map)) {
            ei(n);
            var r = n.layer || n.target;
            if (this._popup._source === r && !(r instanceof _n)) {
              this._map.hasLayer(this._popup)
                ? this.closePopup()
                : this.openPopup(n.latlng);
              return;
            }
            (this._popup._source = r), this.openPopup(n.latlng);
          }
        },
        _movePopup: function (n) {
          this._popup.setLatLng(n.latlng);
        },
        _onKeyPress: function (n) {
          n.originalEvent.keyCode === 13 && this._openPopup(n);
        },
      });
    var is = Ut.extend({
        options: {
          pane: "tooltipPane",
          offset: [0, 0],
          direction: "auto",
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (n) {
          Ut.prototype.onAdd.call(this, n),
            this.setOpacity(this.options.opacity),
            n.fire("tooltipopen", { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function (n) {
          Ut.prototype.onRemove.call(this, n),
            n.fire("tooltipclose", { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function () {
          var n = Ut.prototype.getEvents.call(this);
          return this.options.permanent || (n.preclick = this.close), n;
        },
        _initLayout: function () {
          var n = "leaflet-tooltip",
            r =
              n +
              " " +
              (this.options.className || "") +
              " leaflet-zoom-" +
              (this._zoomAnimated ? "animated" : "hide");
          (this._contentNode = this._container = ce("div", r)),
            this._container.setAttribute("role", "tooltip"),
            this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (n) {
          var r,
            a,
            u = this._map,
            h = this._container,
            p = u.latLngToContainerPoint(u.getCenter()),
            _ = u.layerPointToContainerPoint(n),
            E = this.options.direction,
            T = h.offsetWidth,
            j = h.offsetHeight,
            H = B(this.options.offset),
            $ = this._getAnchor();
          E === "top"
            ? ((r = T / 2), (a = j))
            : E === "bottom"
            ? ((r = T / 2), (a = 0))
            : E === "center"
            ? ((r = T / 2), (a = j / 2))
            : E === "right"
            ? ((r = 0), (a = j / 2))
            : E === "left"
            ? ((r = T), (a = j / 2))
            : _.x < p.x
            ? ((E = "right"), (r = 0), (a = j / 2))
            : ((E = "left"), (r = T + (H.x + $.x) * 2), (a = j / 2)),
            (n = n.subtract(B(r, a, !0)).add(H).add($)),
            Le(h, "leaflet-tooltip-right"),
            Le(h, "leaflet-tooltip-left"),
            Le(h, "leaflet-tooltip-top"),
            Le(h, "leaflet-tooltip-bottom"),
            ee(h, "leaflet-tooltip-" + E),
            Te(h, n);
        },
        _updatePosition: function () {
          var n = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(n);
        },
        setOpacity: function (n) {
          (this.options.opacity = n), this._container && _t(this._container, n);
        },
        _animateZoom: function (n) {
          var r = this._map._latLngToNewLayerPoint(
            this._latlng,
            n.zoom,
            n.center
          );
          this._setPosition(r);
        },
        _getAnchor: function () {
          return B(
            this._source &&
              this._source._getTooltipAnchor &&
              !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          );
        },
      }),
      fv = function (n, r) {
        return new is(n, r);
      };
    oe.include({
      openTooltip: function (n, r, a) {
        return this._initOverlay(is, n, r, a).openOn(this), this;
      },
      closeTooltip: function (n) {
        return n.close(), this;
      },
    }),
      Ot.include({
        bindTooltip: function (n, r) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(is, this._tooltip, n, r)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (n) {
          if (!(!n && this._tooltipHandlersAdded)) {
            var r = n ? "off" : "on",
              a = { remove: this.closeTooltip, move: this._moveTooltip };
            this._tooltip.options.permanent
              ? (a.add = this._openTooltip)
              : ((a.mouseover = this._openTooltip),
                (a.mouseout = this.closeTooltip),
                (a.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (a.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (a.mousemove = this._moveTooltip),
              this[r](a),
              (this._tooltipHandlersAdded = !n);
          }
        },
        openTooltip: function (n) {
          return (
            this._tooltip &&
              (this instanceof en || (this._tooltip._source = this),
              this._tooltip._prepareOpen(n) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (n) {
          return this._tooltip && this._tooltip.setContent(n), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer &&
              this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (n) {
          var r = typeof n.getElement == "function" && n.getElement();
          r &&
            (J(
              r,
              "focus",
              function () {
                (this._tooltip._source = n), this.openTooltip();
              },
              this
            ),
            J(r, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (n) {
          var r = typeof n.getElement == "function" && n.getElement();
          r && r.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function (n) {
          if (!(!this._tooltip || !this._map)) {
            if (
              this._map.dragging &&
              this._map.dragging.moving() &&
              !this._openOnceFlag
            ) {
              this._openOnceFlag = !0;
              var r = this;
              this._map.once("moveend", function () {
                (r._openOnceFlag = !1), r._openTooltip(n);
              });
              return;
            }
            (this._tooltip._source = n.layer || n.target),
              this.openTooltip(
                this._tooltip.options.sticky ? n.latlng : void 0
              );
          }
        },
        _moveTooltip: function (n) {
          var r = n.latlng,
            a,
            u;
          this._tooltip.options.sticky &&
            n.originalEvent &&
            ((a = this._map.mouseEventToContainerPoint(n.originalEvent)),
            (u = this._map.containerPointToLayerPoint(a)),
            (r = this._map.layerPointToLatLng(u))),
            this._tooltip.setLatLng(r);
        },
      });
    var Yh = zi.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon",
      },
      createIcon: function (n) {
        var r = n && n.tagName === "DIV" ? n : document.createElement("div"),
          a = this.options;
        if (
          (a.html instanceof Element
            ? (Uo(r), r.appendChild(a.html))
            : (r.innerHTML = a.html !== !1 ? a.html : ""),
          a.bgPos)
        ) {
          var u = B(a.bgPos);
          r.style.backgroundPosition = -u.x + "px " + -u.y + "px";
        }
        return this._setIconStyles(r, "icon"), r;
      },
      createShadow: function () {
        return null;
      },
    });
    function dv(n) {
      return new Yh(n);
    }
    zi.Default = jr;
    var Ar = Ot.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: V.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (n) {
        P(this, n);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView();
      },
      beforeAdd: function (n) {
        n._addZoomLimit(this);
      },
      onRemove: function (n) {
        this._removeAllTiles(),
          we(this._container),
          n._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return (
          this._map && (Ti(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (Mi(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (n) {
        return (this.options.opacity = n), this._updateOpacity(), this;
      },
      setZIndex: function (n) {
        return (this.options.zIndex = n), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var n = this._clampZoom(this._map.getZoom());
          n !== this._tileZoom && ((this._tileZoom = n), this._updateLevels()),
            this._update();
        }
        return this;
      },
      getEvents: function () {
        var n = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = m(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (n.move = this._onMove)),
          this._zoomAnimated && (n.zoomanim = this._animateZoom),
          n
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var n = this.options.tileSize;
        return n instanceof I ? n : new I(n, n);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (n) {
        for (
          var r = this.getPane().children,
            a = -n(-1 / 0, 1 / 0),
            u = 0,
            h = r.length,
            p;
          u < h;
          u++
        )
          (p = r[u].style.zIndex),
            r[u] !== this._container && p && (a = n(a, +p));
        isFinite(a) &&
          ((this.options.zIndex = a + n(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !V.ielt9) {
          _t(this._container, this.options.opacity);
          var n = +new Date(),
            r = !1,
            a = !1;
          for (var u in this._tiles) {
            var h = this._tiles[u];
            if (!(!h.current || !h.loaded)) {
              var p = Math.min(1, (n - h.loaded) / 200);
              _t(h.el, p),
                p < 1
                  ? (r = !0)
                  : (h.active ? (a = !0) : this._onOpaqueTile(h),
                    (h.active = !0));
            }
          }
          a && !this._noPrune && this._pruneTiles(),
            r &&
              (ye(this._fadeFrame),
              (this._fadeFrame = se(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: g,
      _initContainer: function () {
        this._container ||
          ((this._container = ce(
            "div",
            "leaflet-layer " + (this.options.className || "")
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var n = this._tileZoom,
          r = this.options.maxZoom;
        if (n !== void 0) {
          for (var a in this._levels)
            (a = Number(a)),
              this._levels[a].el.children.length || a === n
                ? ((this._levels[a].el.style.zIndex = r - Math.abs(n - a)),
                  this._onUpdateLevel(a))
                : (we(this._levels[a].el),
                  this._removeTilesAtZoom(a),
                  this._onRemoveLevel(a),
                  delete this._levels[a]);
          var u = this._levels[n],
            h = this._map;
          return (
            u ||
              ((u = this._levels[n] = {}),
              (u.el = ce(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container
              )),
              (u.el.style.zIndex = r),
              (u.origin = h
                .project(h.unproject(h.getPixelOrigin()), n)
                .round()),
              (u.zoom = n),
              this._setZoomTransform(u, h.getCenter(), h.getZoom()),
              g(u.el.offsetWidth),
              this._onCreateLevel(u)),
            (this._level = u),
            u
          );
        }
      },
      _onUpdateLevel: g,
      _onRemoveLevel: g,
      _onCreateLevel: g,
      _pruneTiles: function () {
        if (this._map) {
          var n,
            r,
            a = this._map.getZoom();
          if (a > this.options.maxZoom || a < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (n in this._tiles) (r = this._tiles[n]), (r.retain = r.current);
          for (n in this._tiles)
            if (((r = this._tiles[n]), r.current && !r.active)) {
              var u = r.coords;
              this._retainParent(u.x, u.y, u.z, u.z - 5) ||
                this._retainChildren(u.x, u.y, u.z, u.z + 2);
            }
          for (n in this._tiles) this._tiles[n].retain || this._removeTile(n);
        }
      },
      _removeTilesAtZoom: function (n) {
        for (var r in this._tiles)
          this._tiles[r].coords.z === n && this._removeTile(r);
      },
      _removeAllTiles: function () {
        for (var n in this._tiles) this._removeTile(n);
      },
      _invalidateAll: function () {
        for (var n in this._levels)
          we(this._levels[n].el),
            this._onRemoveLevel(Number(n)),
            delete this._levels[n];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (n, r, a, u) {
        var h = Math.floor(n / 2),
          p = Math.floor(r / 2),
          _ = a - 1,
          E = new I(+h, +p);
        E.z = +_;
        var T = this._tileCoordsToKey(E),
          j = this._tiles[T];
        return j && j.active
          ? ((j.retain = !0), !0)
          : (j && j.loaded && (j.retain = !0),
            _ > u ? this._retainParent(h, p, _, u) : !1);
      },
      _retainChildren: function (n, r, a, u) {
        for (var h = 2 * n; h < 2 * n + 2; h++)
          for (var p = 2 * r; p < 2 * r + 2; p++) {
            var _ = new I(h, p);
            _.z = a + 1;
            var E = this._tileCoordsToKey(_),
              T = this._tiles[E];
            if (T && T.active) {
              T.retain = !0;
              continue;
            } else T && T.loaded && (T.retain = !0);
            a + 1 < u && this._retainChildren(h, p, a + 1, u);
          }
      },
      _resetView: function (n) {
        var r = n && (n.pinch || n.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), r, r);
      },
      _animateZoom: function (n) {
        this._setView(n.center, n.zoom, !0, n.noUpdate);
      },
      _clampZoom: function (n) {
        var r = this.options;
        return r.minNativeZoom !== void 0 && n < r.minNativeZoom
          ? r.minNativeZoom
          : r.maxNativeZoom !== void 0 && r.maxNativeZoom < n
          ? r.maxNativeZoom
          : n;
      },
      _setView: function (n, r, a, u) {
        var h = Math.round(r);
        (this.options.maxZoom !== void 0 && h > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && h < this.options.minZoom)
          ? (h = void 0)
          : (h = this._clampZoom(h));
        var p = this.options.updateWhenZooming && h !== this._tileZoom;
        (!u || p) &&
          ((this._tileZoom = h),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          h !== void 0 && this._update(n),
          a || this._pruneTiles(),
          (this._noPrune = !!a)),
          this._setZoomTransforms(n, r);
      },
      _setZoomTransforms: function (n, r) {
        for (var a in this._levels)
          this._setZoomTransform(this._levels[a], n, r);
      },
      _setZoomTransform: function (n, r, a) {
        var u = this._map.getZoomScale(a, n.zoom),
          h = n.origin
            .multiplyBy(u)
            .subtract(this._map._getNewPixelOrigin(r, a))
            .round();
        V.any3d ? Yn(n.el, h, u) : Te(n.el, h);
      },
      _resetGrid: function () {
        var n = this._map,
          r = n.options.crs,
          a = (this._tileSize = this.getTileSize()),
          u = this._tileZoom,
          h = this._map.getPixelWorldBounds(this._tileZoom);
        h && (this._globalTileRange = this._pxBoundsToTileRange(h)),
          (this._wrapX = r.wrapLng &&
            !this.options.noWrap && [
              Math.floor(n.project([0, r.wrapLng[0]], u).x / a.x),
              Math.ceil(n.project([0, r.wrapLng[1]], u).x / a.y),
            ]),
          (this._wrapY = r.wrapLat &&
            !this.options.noWrap && [
              Math.floor(n.project([r.wrapLat[0], 0], u).y / a.x),
              Math.ceil(n.project([r.wrapLat[1], 0], u).y / a.y),
            ]);
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (n) {
        var r = this._map,
          a = r._animatingZoom
            ? Math.max(r._animateToZoom, r.getZoom())
            : r.getZoom(),
          u = r.getZoomScale(a, this._tileZoom),
          h = r.project(n, this._tileZoom).floor(),
          p = r.getSize().divideBy(u * 2);
        return new q(h.subtract(p), h.add(p));
      },
      _update: function (n) {
        var r = this._map;
        if (r) {
          var a = this._clampZoom(r.getZoom());
          if (
            (n === void 0 && (n = r.getCenter()), this._tileZoom !== void 0)
          ) {
            var u = this._getTiledPixelBounds(n),
              h = this._pxBoundsToTileRange(u),
              p = h.getCenter(),
              _ = [],
              E = this.options.keepBuffer,
              T = new q(
                h.getBottomLeft().subtract([E, -E]),
                h.getTopRight().add([E, -E])
              );
            if (
              !(
                isFinite(h.min.x) &&
                isFinite(h.min.y) &&
                isFinite(h.max.x) &&
                isFinite(h.max.y)
              )
            )
              throw new Error("Attempted to load an infinite number of tiles");
            for (var j in this._tiles) {
              var H = this._tiles[j].coords;
              (H.z !== this._tileZoom || !T.contains(new I(H.x, H.y))) &&
                (this._tiles[j].current = !1);
            }
            if (Math.abs(a - this._tileZoom) > 1) {
              this._setView(n, a);
              return;
            }
            for (var $ = h.min.y; $ <= h.max.y; $++)
              for (var te = h.min.x; te <= h.max.x; te++) {
                var Ke = new I(te, $);
                if (((Ke.z = this._tileZoom), !!this._isValidTile(Ke))) {
                  var je = this._tiles[this._tileCoordsToKey(Ke)];
                  je ? (je.current = !0) : _.push(Ke);
                }
              }
            if (
              (_.sort(function (it, ji) {
                return it.distanceTo(p) - ji.distanceTo(p);
              }),
              _.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              var wt = document.createDocumentFragment();
              for (te = 0; te < _.length; te++) this._addTile(_[te], wt);
              this._level.el.appendChild(wt);
            }
          }
        }
      },
      _isValidTile: function (n) {
        var r = this._map.options.crs;
        if (!r.infinite) {
          var a = this._globalTileRange;
          if (
            (!r.wrapLng && (n.x < a.min.x || n.x > a.max.x)) ||
            (!r.wrapLat && (n.y < a.min.y || n.y > a.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var u = this._tileCoordsToBounds(n);
        return de(this.options.bounds).overlaps(u);
      },
      _keyToBounds: function (n) {
        return this._tileCoordsToBounds(this._keyToTileCoords(n));
      },
      _tileCoordsToNwSe: function (n) {
        var r = this._map,
          a = this.getTileSize(),
          u = n.scaleBy(a),
          h = u.add(a),
          p = r.unproject(u, n.z),
          _ = r.unproject(h, n.z);
        return [p, _];
      },
      _tileCoordsToBounds: function (n) {
        var r = this._tileCoordsToNwSe(n),
          a = new Ne(r[0], r[1]);
        return this.options.noWrap || (a = this._map.wrapLatLngBounds(a)), a;
      },
      _tileCoordsToKey: function (n) {
        return n.x + ":" + n.y + ":" + n.z;
      },
      _keyToTileCoords: function (n) {
        var r = n.split(":"),
          a = new I(+r[0], +r[1]);
        return (a.z = +r[2]), a;
      },
      _removeTile: function (n) {
        var r = this._tiles[n];
        r &&
          (we(r.el),
          delete this._tiles[n],
          this.fire("tileunload", {
            tile: r.el,
            coords: this._keyToTileCoords(n),
          }));
      },
      _initTile: function (n) {
        ee(n, "leaflet-tile");
        var r = this.getTileSize();
        (n.style.width = r.x + "px"),
          (n.style.height = r.y + "px"),
          (n.onselectstart = g),
          (n.onmousemove = g),
          V.ielt9 && this.options.opacity < 1 && _t(n, this.options.opacity);
      },
      _addTile: function (n, r) {
        var a = this._getTilePos(n),
          u = this._tileCoordsToKey(n),
          h = this.createTile(this._wrapCoords(n), c(this._tileReady, this, n));
        this._initTile(h),
          this.createTile.length < 2 &&
            se(c(this._tileReady, this, n, null, h)),
          Te(h, a),
          (this._tiles[u] = { el: h, coords: n, current: !0 }),
          r.appendChild(h),
          this.fire("tileloadstart", { tile: h, coords: n });
      },
      _tileReady: function (n, r, a) {
        r && this.fire("tileerror", { error: r, tile: a, coords: n });
        var u = this._tileCoordsToKey(n);
        (a = this._tiles[u]),
          a &&
            ((a.loaded = +new Date()),
            this._map._fadeAnimated
              ? (_t(a.el, 0),
                ye(this._fadeFrame),
                (this._fadeFrame = se(this._updateOpacity, this)))
              : ((a.active = !0), this._pruneTiles()),
            r ||
              (ee(a.el, "leaflet-tile-loaded"),
              this.fire("tileload", { tile: a.el, coords: n })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire("load"),
              V.ielt9 || !this._map._fadeAnimated
                ? se(this._pruneTiles, this)
                : setTimeout(c(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (n) {
        return n.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (n) {
        var r = new I(
          this._wrapX ? y(n.x, this._wrapX) : n.x,
          this._wrapY ? y(n.y, this._wrapY) : n.y
        );
        return (r.z = n.z), r;
      },
      _pxBoundsToTileRange: function (n) {
        var r = this.getTileSize();
        return new q(
          n.min.unscaleBy(r).floor(),
          n.max.unscaleBy(r).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var n in this._tiles) if (!this._tiles[n].loaded) return !1;
        return !0;
      },
    });
    function pv(n) {
      return new Ar(n);
    }
    var Ii = Ar.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (n, r) {
        (this._url = n),
          (r = P(this, r)),
          r.detectRetina && V.retina && r.maxZoom > 0
            ? ((r.tileSize = Math.floor(r.tileSize / 2)),
              r.zoomReverse
                ? (r.zoomOffset--,
                  (r.minZoom = Math.min(r.maxZoom, r.minZoom + 1)))
                : (r.zoomOffset++,
                  (r.maxZoom = Math.max(r.minZoom, r.maxZoom - 1))),
              (r.minZoom = Math.max(0, r.minZoom)))
            : r.zoomReverse
            ? (r.minZoom = Math.min(r.maxZoom, r.minZoom))
            : (r.maxZoom = Math.max(r.minZoom, r.maxZoom)),
          typeof r.subdomains == "string" &&
            (r.subdomains = r.subdomains.split("")),
          this.on("tileunload", this._onTileRemove);
      },
      setUrl: function (n, r) {
        return (
          this._url === n && r === void 0 && (r = !0),
          (this._url = n),
          r || this.redraw(),
          this
        );
      },
      createTile: function (n, r) {
        var a = document.createElement("img");
        return (
          J(a, "load", c(this._tileOnLoad, this, r, a)),
          J(a, "error", c(this._tileOnError, this, r, a)),
          (this.options.crossOrigin || this.options.crossOrigin === "") &&
            (a.crossOrigin =
              this.options.crossOrigin === !0 ? "" : this.options.crossOrigin),
          typeof this.options.referrerPolicy == "string" &&
            (a.referrerPolicy = this.options.referrerPolicy),
          (a.alt = ""),
          (a.src = this.getTileUrl(n)),
          a
        );
      },
      getTileUrl: function (n) {
        var r = {
          r: V.retina ? "@2x" : "",
          s: this._getSubdomain(n),
          x: n.x,
          y: n.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var a = this._globalTileRange.max.y - n.y;
          this.options.tms && (r.y = a), (r["-y"] = a);
        }
        return v(this._url, s(r, this.options));
      },
      _tileOnLoad: function (n, r) {
        V.ielt9 ? setTimeout(c(n, this, null, r), 0) : n(null, r);
      },
      _tileOnError: function (n, r, a) {
        var u = this.options.errorTileUrl;
        u && r.getAttribute("src") !== u && (r.src = u), n(a, r);
      },
      _onTileRemove: function (n) {
        n.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var n = this._tileZoom,
          r = this.options.maxZoom,
          a = this.options.zoomReverse,
          u = this.options.zoomOffset;
        return a && (n = r - n), n + u;
      },
      _getSubdomain: function (n) {
        var r = Math.abs(n.x + n.y) % this.options.subdomains.length;
        return this.options.subdomains[r];
      },
      _abortLoading: function () {
        var n, r;
        for (n in this._tiles)
          if (
            this._tiles[n].coords.z !== this._tileZoom &&
            ((r = this._tiles[n].el),
            (r.onload = g),
            (r.onerror = g),
            !r.complete)
          ) {
            r.src = D;
            var a = this._tiles[n].coords;
            we(r),
              delete this._tiles[n],
              this.fire("tileabort", { tile: r, coords: a });
          }
      },
      _removeTile: function (n) {
        var r = this._tiles[n];
        if (r)
          return (
            r.el.setAttribute("src", D), Ar.prototype._removeTile.call(this, n)
          );
      },
      _tileReady: function (n, r, a) {
        if (!(!this._map || (a && a.getAttribute("src") === D)))
          return Ar.prototype._tileReady.call(this, n, r, a);
      },
    });
    function Xh(n, r) {
      return new Ii(n, r);
    }
    var Jh = Ii.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (n, r) {
        this._url = n;
        var a = s({}, this.defaultWmsParams);
        for (var u in r) u in this.options || (a[u] = r[u]);
        r = P(this, r);
        var h = r.detectRetina && V.retina ? 2 : 1,
          p = this.getTileSize();
        (a.width = p.x * h), (a.height = p.y * h), (this.wmsParams = a);
      },
      onAdd: function (n) {
        (this._crs = this.options.crs || n.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var r = this._wmsVersion >= 1.3 ? "crs" : "srs";
        (this.wmsParams[r] = this._crs.code), Ii.prototype.onAdd.call(this, n);
      },
      getTileUrl: function (n) {
        var r = this._tileCoordsToNwSe(n),
          a = this._crs,
          u = ae(a.project(r[0]), a.project(r[1])),
          h = u.min,
          p = u.max,
          _ = (
            this._wmsVersion >= 1.3 && this._crs === Vh
              ? [h.y, h.x, p.y, p.x]
              : [h.x, h.y, p.x, p.y]
          ).join(","),
          E = Ii.prototype.getTileUrl.call(this, n);
        return (
          E +
          R(this.wmsParams, E, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          _
        );
      },
      setParams: function (n, r) {
        return s(this.wmsParams, n), r || this.redraw(), this;
      },
    });
    function mv(n, r) {
      return new Jh(n, r);
    }
    (Ii.WMS = Jh), (Xh.wms = mv);
    var rn = Ot.extend({
        options: { padding: 0.1 },
        initialize: function (n) {
          P(this, n), f(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            ee(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this);
        },
        onRemove: function () {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var n = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return this._zoomAnimated && (n.zoomanim = this._onAnimZoom), n;
        },
        _onAnimZoom: function (n) {
          this._updateTransform(n.center, n.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (n, r) {
          var a = this._map.getZoomScale(r, this._zoom),
            u = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            h = this._map.project(this._center, r),
            p = u
              .multiplyBy(-a)
              .add(h)
              .subtract(this._map._getNewPixelOrigin(n, r));
          V.any3d ? Yn(this._container, p, a) : Te(this._container, p);
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var n in this._layers) this._layers[n]._reset();
        },
        _onZoomEnd: function () {
          for (var n in this._layers) this._layers[n]._project();
        },
        _updatePaths: function () {
          for (var n in this._layers) this._layers[n]._update();
        },
        _update: function () {
          var n = this.options.padding,
            r = this._map.getSize(),
            a = this._map.containerPointToLayerPoint(r.multiplyBy(-n)).round();
          (this._bounds = new q(a, a.add(r.multiplyBy(1 + n * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        },
      }),
      ef = rn.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var n = rn.prototype.getEvents.call(this);
          return (n.viewprereset = this._onViewPreReset), n;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          rn.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var n = (this._container = document.createElement("canvas"));
          J(n, "mousemove", this._onMouseMove, this),
            J(
              n,
              "click dblclick mousedown mouseup contextmenu",
              this._onClick,
              this
            ),
            J(n, "mouseout", this._handleMouseOut, this),
            (n._leaflet_disable_events = !0),
            (this._ctx = n.getContext("2d"));
        },
        _destroyContainer: function () {
          ye(this._redrawRequest),
            delete this._ctx,
            we(this._container),
            pe(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var n;
            this._redrawBounds = null;
            for (var r in this._layers) (n = this._layers[r]), n._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            rn.prototype._update.call(this);
            var n = this._bounds,
              r = this._container,
              a = n.getSize(),
              u = V.retina ? 2 : 1;
            Te(r, n.min),
              (r.width = u * a.x),
              (r.height = u * a.y),
              (r.style.width = a.x + "px"),
              (r.style.height = a.y + "px"),
              V.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-n.min.x, -n.min.y),
              this.fire("update");
          }
        },
        _reset: function () {
          rn.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (n) {
          this._updateDashArray(n), (this._layers[f(n)] = n);
          var r = (n._order = { layer: n, prev: this._drawLast, next: null });
          this._drawLast && (this._drawLast.next = r),
            (this._drawLast = r),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (n) {
          this._requestRedraw(n);
        },
        _removePath: function (n) {
          var r = n._order,
            a = r.next,
            u = r.prev;
          a ? (a.prev = u) : (this._drawLast = u),
            u ? (u.next = a) : (this._drawFirst = a),
            delete n._order,
            delete this._layers[f(n)],
            this._requestRedraw(n);
        },
        _updatePath: function (n) {
          this._extendRedrawBounds(n),
            n._project(),
            n._update(),
            this._requestRedraw(n);
        },
        _updateStyle: function (n) {
          this._updateDashArray(n), this._requestRedraw(n);
        },
        _updateDashArray: function (n) {
          if (typeof n.options.dashArray == "string") {
            var r = n.options.dashArray.split(/[, ]+/),
              a = [],
              u,
              h;
            for (h = 0; h < r.length; h++) {
              if (((u = Number(r[h])), isNaN(u))) return;
              a.push(u);
            }
            n.options._dashArray = a;
          } else n.options._dashArray = n.options.dashArray;
        },
        _requestRedraw: function (n) {
          this._map &&
            (this._extendRedrawBounds(n),
            (this._redrawRequest =
              this._redrawRequest || se(this._redraw, this)));
        },
        _extendRedrawBounds: function (n) {
          if (n._pxBounds) {
            var r = (n.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new q()),
              this._redrawBounds.extend(n._pxBounds.min.subtract([r, r])),
              this._redrawBounds.extend(n._pxBounds.max.add([r, r]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var n = this._redrawBounds;
          if (n) {
            var r = n.getSize();
            this._ctx.clearRect(n.min.x, n.min.y, r.x, r.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(
                0,
                0,
                this._container.width,
                this._container.height
              ),
              this._ctx.restore();
        },
        _draw: function () {
          var n,
            r = this._redrawBounds;
          if ((this._ctx.save(), r)) {
            var a = r.getSize();
            this._ctx.beginPath(),
              this._ctx.rect(r.min.x, r.min.y, a.x, a.y),
              this._ctx.clip();
          }
          this._drawing = !0;
          for (var u = this._drawFirst; u; u = u.next)
            (n = u.layer),
              (!r || (n._pxBounds && n._pxBounds.intersects(r))) &&
                n._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (n, r) {
          if (this._drawing) {
            var a,
              u,
              h,
              p,
              _ = n._parts,
              E = _.length,
              T = this._ctx;
            if (E) {
              for (T.beginPath(), a = 0; a < E; a++) {
                for (u = 0, h = _[a].length; u < h; u++)
                  (p = _[a][u]), T[u ? "lineTo" : "moveTo"](p.x, p.y);
                r && T.closePath();
              }
              this._fillStroke(T, n);
            }
          }
        },
        _updateCircle: function (n) {
          if (!(!this._drawing || n._empty())) {
            var r = n._point,
              a = this._ctx,
              u = Math.max(Math.round(n._radius), 1),
              h = (Math.max(Math.round(n._radiusY), 1) || u) / u;
            h !== 1 && (a.save(), a.scale(1, h)),
              a.beginPath(),
              a.arc(r.x, r.y / h, u, 0, Math.PI * 2, !1),
              h !== 1 && a.restore(),
              this._fillStroke(a, n);
          }
        },
        _fillStroke: function (n, r) {
          var a = r.options;
          a.fill &&
            ((n.globalAlpha = a.fillOpacity),
            (n.fillStyle = a.fillColor || a.color),
            n.fill(a.fillRule || "evenodd")),
            a.stroke &&
              a.weight !== 0 &&
              (n.setLineDash &&
                n.setLineDash((r.options && r.options._dashArray) || []),
              (n.globalAlpha = a.opacity),
              (n.lineWidth = a.weight),
              (n.strokeStyle = a.color),
              (n.lineCap = a.lineCap),
              (n.lineJoin = a.lineJoin),
              n.stroke());
        },
        _onClick: function (n) {
          for (
            var r = this._map.mouseEventToLayerPoint(n),
              a,
              u,
              h = this._drawFirst;
            h;
            h = h.next
          )
            (a = h.layer),
              a.options.interactive &&
                a._containsPoint(r) &&
                (!(n.type === "click" || n.type === "preclick") ||
                  !this._map._draggableMoved(a)) &&
                (u = a);
          this._fireEvent(u ? [u] : !1, n);
        },
        _onMouseMove: function (n) {
          if (
            !(
              !this._map ||
              this._map.dragging.moving() ||
              this._map._animatingZoom
            )
          ) {
            var r = this._map.mouseEventToLayerPoint(n);
            this._handleMouseHover(n, r);
          }
        },
        _handleMouseOut: function (n) {
          var r = this._hoveredLayer;
          r &&
            (Le(this._container, "leaflet-interactive"),
            this._fireEvent([r], n, "mouseout"),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (n, r) {
          if (!this._mouseHoverThrottled) {
            for (var a, u, h = this._drawFirst; h; h = h.next)
              (a = h.layer),
                a.options.interactive && a._containsPoint(r) && (u = a);
            u !== this._hoveredLayer &&
              (this._handleMouseOut(n),
              u &&
                (ee(this._container, "leaflet-interactive"),
                this._fireEvent([u], n, "mouseover"),
                (this._hoveredLayer = u))),
              this._fireEvent(
                this._hoveredLayer ? [this._hoveredLayer] : !1,
                n
              ),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                c(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32
              );
          }
        },
        _fireEvent: function (n, r, a) {
          this._map._fireDOMEvent(r, a || r.type, n);
        },
        _bringToFront: function (n) {
          var r = n._order;
          if (r) {
            var a = r.next,
              u = r.prev;
            if (a) a.prev = u;
            else return;
            u ? (u.next = a) : a && (this._drawFirst = a),
              (r.prev = this._drawLast),
              (this._drawLast.next = r),
              (r.next = null),
              (this._drawLast = r),
              this._requestRedraw(n);
          }
        },
        _bringToBack: function (n) {
          var r = n._order;
          if (r) {
            var a = r.next,
              u = r.prev;
            if (u) u.next = a;
            else return;
            a ? (a.prev = u) : u && (this._drawLast = u),
              (r.prev = null),
              (r.next = this._drawFirst),
              (this._drawFirst.prev = r),
              (this._drawFirst = r),
              this._requestRedraw(n);
          }
        },
      });
    function tf(n) {
      return V.canvas ? new ef(n) : null;
    }
    var Dr = (function () {
        try {
          return (
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function (n) {
              return document.createElement("<lvml:" + n + ' class="lvml">');
            }
          );
        } catch {}
        return function (n) {
          return document.createElement(
            "<" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      })(),
      gv = {
        _initContainer: function () {
          this._container = ce("div", "leaflet-vml-container");
        },
        _update: function () {
          this._map._animatingZoom ||
            (rn.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function (n) {
          var r = (n._container = Dr("shape"));
          ee(r, "leaflet-vml-shape " + (this.options.className || "")),
            (r.coordsize = "1 1"),
            (n._path = Dr("path")),
            r.appendChild(n._path),
            this._updateStyle(n),
            (this._layers[f(n)] = n);
        },
        _addPath: function (n) {
          var r = n._container;
          this._container.appendChild(r),
            n.options.interactive && n.addInteractiveTarget(r);
        },
        _removePath: function (n) {
          var r = n._container;
          we(r), n.removeInteractiveTarget(r), delete this._layers[f(n)];
        },
        _updateStyle: function (n) {
          var r = n._stroke,
            a = n._fill,
            u = n.options,
            h = n._container;
          (h.stroked = !!u.stroke),
            (h.filled = !!u.fill),
            u.stroke
              ? (r || (r = n._stroke = Dr("stroke")),
                h.appendChild(r),
                (r.weight = u.weight + "px"),
                (r.color = u.color),
                (r.opacity = u.opacity),
                u.dashArray
                  ? (r.dashStyle = w(u.dashArray)
                      ? u.dashArray.join(" ")
                      : u.dashArray.replace(/( *, *)/g, " "))
                  : (r.dashStyle = ""),
                (r.endcap = u.lineCap.replace("butt", "flat")),
                (r.joinstyle = u.lineJoin))
              : r && (h.removeChild(r), (n._stroke = null)),
            u.fill
              ? (a || (a = n._fill = Dr("fill")),
                h.appendChild(a),
                (a.color = u.fillColor || u.color),
                (a.opacity = u.fillOpacity))
              : a && (h.removeChild(a), (n._fill = null));
        },
        _updateCircle: function (n) {
          var r = n._point.round(),
            a = Math.round(n._radius),
            u = Math.round(n._radiusY || a);
          this._setPath(
            n,
            n._empty()
              ? "M0 0"
              : "AL " +
                  r.x +
                  "," +
                  r.y +
                  " " +
                  a +
                  "," +
                  u +
                  " 0," +
                  65535 * 360
          );
        },
        _setPath: function (n, r) {
          n._path.v = r;
        },
        _bringToFront: function (n) {
          Ti(n._container);
        },
        _bringToBack: function (n) {
          Mi(n._container);
        },
      },
      rs = V.vml ? Dr : oh,
      Br = rn.extend({
        _initContainer: function () {
          (this._container = rs("svg")),
            this._container.setAttribute("pointer-events", "none"),
            (this._rootGroup = rs("g")),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          we(this._container),
            pe(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            rn.prototype._update.call(this);
            var n = this._bounds,
              r = n.getSize(),
              a = this._container;
            (!this._svgSize || !this._svgSize.equals(r)) &&
              ((this._svgSize = r),
              a.setAttribute("width", r.x),
              a.setAttribute("height", r.y)),
              Te(a, n.min),
              a.setAttribute("viewBox", [n.min.x, n.min.y, r.x, r.y].join(" ")),
              this.fire("update");
          }
        },
        _initPath: function (n) {
          var r = (n._path = rs("path"));
          n.options.className && ee(r, n.options.className),
            n.options.interactive && ee(r, "leaflet-interactive"),
            this._updateStyle(n),
            (this._layers[f(n)] = n);
        },
        _addPath: function (n) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(n._path),
            n.addInteractiveTarget(n._path);
        },
        _removePath: function (n) {
          we(n._path),
            n.removeInteractiveTarget(n._path),
            delete this._layers[f(n)];
        },
        _updatePath: function (n) {
          n._project(), n._update();
        },
        _updateStyle: function (n) {
          var r = n._path,
            a = n.options;
          r &&
            (a.stroke
              ? (r.setAttribute("stroke", a.color),
                r.setAttribute("stroke-opacity", a.opacity),
                r.setAttribute("stroke-width", a.weight),
                r.setAttribute("stroke-linecap", a.lineCap),
                r.setAttribute("stroke-linejoin", a.lineJoin),
                a.dashArray
                  ? r.setAttribute("stroke-dasharray", a.dashArray)
                  : r.removeAttribute("stroke-dasharray"),
                a.dashOffset
                  ? r.setAttribute("stroke-dashoffset", a.dashOffset)
                  : r.removeAttribute("stroke-dashoffset"))
              : r.setAttribute("stroke", "none"),
            a.fill
              ? (r.setAttribute("fill", a.fillColor || a.color),
                r.setAttribute("fill-opacity", a.fillOpacity),
                r.setAttribute("fill-rule", a.fillRule || "evenodd"))
              : r.setAttribute("fill", "none"));
        },
        _updatePoly: function (n, r) {
          this._setPath(n, sh(n._parts, r));
        },
        _updateCircle: function (n) {
          var r = n._point,
            a = Math.max(Math.round(n._radius), 1),
            u = Math.max(Math.round(n._radiusY), 1) || a,
            h = "a" + a + "," + u + " 0 1,0 ",
            p = n._empty()
              ? "M0 0"
              : "M" +
                (r.x - a) +
                "," +
                r.y +
                h +
                a * 2 +
                ",0 " +
                h +
                -a * 2 +
                ",0 ";
          this._setPath(n, p);
        },
        _setPath: function (n, r) {
          n._path.setAttribute("d", r);
        },
        _bringToFront: function (n) {
          Ti(n._path);
        },
        _bringToBack: function (n) {
          Mi(n._path);
        },
      });
    V.vml && Br.include(gv);
    function nf(n) {
      return V.svg || V.vml ? new Br(n) : null;
    }
    oe.include({
      getRenderer: function (n) {
        var r =
          n.options.renderer ||
          this._getPaneRenderer(n.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          r || (r = this._renderer = this._createRenderer()),
          this.hasLayer(r) || this.addLayer(r),
          r
        );
      },
      _getPaneRenderer: function (n) {
        if (n === "overlayPane" || n === void 0) return !1;
        var r = this._paneRenderers[n];
        return (
          r === void 0 &&
            ((r = this._createRenderer({ pane: n })),
            (this._paneRenderers[n] = r)),
          r
        );
      },
      _createRenderer: function (n) {
        return (this.options.preferCanvas && tf(n)) || nf(n);
      },
    });
    var rf = Ni.extend({
      initialize: function (n, r) {
        Ni.prototype.initialize.call(this, this._boundsToLatLngs(n), r);
      },
      setBounds: function (n) {
        return this.setLatLngs(this._boundsToLatLngs(n));
      },
      _boundsToLatLngs: function (n) {
        return (
          (n = de(n)),
          [
            n.getSouthWest(),
            n.getNorthWest(),
            n.getNorthEast(),
            n.getSouthEast(),
          ]
        );
      },
    });
    function vv(n, r) {
      return new rf(n, r);
    }
    (Br.create = rs),
      (Br.pointsToPath = sh),
      (nn.geometryToLayer = Yo),
      (nn.coordsToLatLng = al),
      (nn.coordsToLatLngs = Xo),
      (nn.latLngToCoords = ll),
      (nn.latLngsToCoords = Jo),
      (nn.getFeature = Ri),
      (nn.asFeature = es),
      oe.mergeOptions({ boxZoom: !0 });
    var of = Ht.extend({
      initialize: function (n) {
        (this._map = n),
          (this._container = n._container),
          (this._pane = n._panes.overlayPane),
          (this._resetStateTimeout = 0),
          n.on("unload", this._destroy, this);
      },
      addHooks: function () {
        J(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function () {
        pe(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        we(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout),
          (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (n) {
        if (!n.shiftKey || (n.which !== 1 && n.button !== 1)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          Mr(),
          Wa(),
          (this._startPoint = this._map.mouseEventToContainerPoint(n)),
          J(
            document,
            {
              contextmenu: ei,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseMove: function (n) {
        this._moved ||
          ((this._moved = !0),
          (this._box = ce("div", "leaflet-zoom-box", this._container)),
          ee(this._container, "leaflet-crosshair"),
          this._map.fire("boxzoomstart")),
          (this._point = this._map.mouseEventToContainerPoint(n));
        var r = new q(this._point, this._startPoint),
          a = r.getSize();
        Te(this._box, r.min),
          (this._box.style.width = a.x + "px"),
          (this._box.style.height = a.y + "px");
      },
      _finish: function () {
        this._moved &&
          (we(this._box), Le(this._container, "leaflet-crosshair")),
          Or(),
          Va(),
          pe(
            document,
            {
              contextmenu: ei,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseUp: function (n) {
        if (
          !(n.which !== 1 && n.button !== 1) &&
          (this._finish(), !!this._moved)
        ) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(
              c(this._resetState, this),
              0
            ));
          var r = new Ne(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(r).fire("boxzoomend", { boxZoomBounds: r });
        }
      },
      _onKeyDown: function (n) {
        n.keyCode === 27 &&
          (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    oe.addInitHook("addHandler", "boxZoom", of),
      oe.mergeOptions({ doubleClickZoom: !0 });
    var sf = Ht.extend({
      addHooks: function () {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function (n) {
        var r = this._map,
          a = r.getZoom(),
          u = r.options.zoomDelta,
          h = n.originalEvent.shiftKey ? a - u : a + u;
        r.options.doubleClickZoom === "center"
          ? r.setZoom(h)
          : r.setZoomAround(n.containerPoint, h);
      },
    });
    oe.addInitHook("addHandler", "doubleClickZoom", sf),
      oe.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      });
    var af = Ht.extend({
      addHooks: function () {
        if (!this._draggable) {
          var n = this._map;
          (this._draggable = new vn(n._mapPane, n._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            ),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            n.options.worldCopyJump &&
              (this._draggable.on("predrag", this._onPreDragWrap, this),
              n.on("zoomend", this._onZoomEnd, this),
              n.whenReady(this._onZoomEnd, this));
        }
        ee(this._map._container, "leaflet-grab leaflet-touch-drag"),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        Le(this._map._container, "leaflet-grab"),
          Le(this._map._container, "leaflet-touch-drag"),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var n = this._map;
        if (
          (n._stop(),
          this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var r = de(this._map.options.maxBounds);
          (this._offsetLimit = ae(
            this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(r.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize())
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            ));
        } else this._offsetLimit = null;
        n.fire("movestart").fire("dragstart"),
          n.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (n) {
        if (this._map.options.inertia) {
          var r = (this._lastTime = +new Date()),
            a = (this._lastPos =
              this._draggable._absPos || this._draggable._newPos);
          this._positions.push(a), this._times.push(r), this._prunePositions(r);
        }
        this._map.fire("move", n).fire("drag", n);
      },
      _prunePositions: function (n) {
        for (; this._positions.length > 1 && n - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var n = this._map.getSize().divideBy(2),
          r = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = r.subtract(n).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (n, r) {
        return n - (n - r) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var n = this._draggable._newPos.subtract(this._draggable._startPos),
            r = this._offsetLimit;
          n.x < r.min.x && (n.x = this._viscousLimit(n.x, r.min.x)),
            n.y < r.min.y && (n.y = this._viscousLimit(n.y, r.min.y)),
            n.x > r.max.x && (n.x = this._viscousLimit(n.x, r.max.x)),
            n.y > r.max.y && (n.y = this._viscousLimit(n.y, r.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(n));
        }
      },
      _onPreDragWrap: function () {
        var n = this._worldWidth,
          r = Math.round(n / 2),
          a = this._initialWorldOffset,
          u = this._draggable._newPos.x,
          h = ((u - r + a) % n) + r - a,
          p = ((u + r + a) % n) - r - a,
          _ = Math.abs(h + a) < Math.abs(p + a) ? h : p;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = _);
      },
      _onDragEnd: function (n) {
        var r = this._map,
          a = r.options,
          u = !a.inertia || n.noInertia || this._times.length < 2;
        if ((r.fire("dragend", n), u)) r.fire("moveend");
        else {
          this._prunePositions(+new Date());
          var h = this._lastPos.subtract(this._positions[0]),
            p = (this._lastTime - this._times[0]) / 1e3,
            _ = a.easeLinearity,
            E = h.multiplyBy(_ / p),
            T = E.distanceTo([0, 0]),
            j = Math.min(a.inertiaMaxSpeed, T),
            H = E.multiplyBy(j / T),
            $ = j / (a.inertiaDeceleration * _),
            te = H.multiplyBy(-$ / 2).round();
          !te.x && !te.y
            ? r.fire("moveend")
            : ((te = r._limitOffset(te, r.options.maxBounds)),
              se(function () {
                r.panBy(te, {
                  duration: $,
                  easeLinearity: _,
                  noMoveStart: !0,
                  animate: !0,
                });
              }));
        }
      },
    });
    oe.addInitHook("addHandler", "dragging", af),
      oe.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
    var lf = Ht.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (n) {
        (this._map = n),
          this._setPanDelta(n.options.keyboardPanDelta),
          this._setZoomDelta(n.options.zoomDelta);
      },
      addHooks: function () {
        var n = this._map._container;
        n.tabIndex <= 0 && (n.tabIndex = "0"),
          J(
            n,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.on(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      removeHooks: function () {
        this._removeHooks(),
          pe(
            this._map._container,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.off(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var n = document.body,
            r = document.documentElement,
            a = n.scrollTop || r.scrollTop,
            u = n.scrollLeft || r.scrollLeft;
          this._map._container.focus(), window.scrollTo(u, a);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire("focus");
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire("blur");
      },
      _setPanDelta: function (n) {
        var r = (this._panKeys = {}),
          a = this.keyCodes,
          u,
          h;
        for (u = 0, h = a.left.length; u < h; u++) r[a.left[u]] = [-1 * n, 0];
        for (u = 0, h = a.right.length; u < h; u++) r[a.right[u]] = [n, 0];
        for (u = 0, h = a.down.length; u < h; u++) r[a.down[u]] = [0, n];
        for (u = 0, h = a.up.length; u < h; u++) r[a.up[u]] = [0, -1 * n];
      },
      _setZoomDelta: function (n) {
        var r = (this._zoomKeys = {}),
          a = this.keyCodes,
          u,
          h;
        for (u = 0, h = a.zoomIn.length; u < h; u++) r[a.zoomIn[u]] = n;
        for (u = 0, h = a.zoomOut.length; u < h; u++) r[a.zoomOut[u]] = -n;
      },
      _addHooks: function () {
        J(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function () {
        pe(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function (n) {
        if (!(n.altKey || n.ctrlKey || n.metaKey)) {
          var r = n.keyCode,
            a = this._map,
            u;
          if (r in this._panKeys) {
            if (!a._panAnim || !a._panAnim._inProgress)
              if (
                ((u = this._panKeys[r]),
                n.shiftKey && (u = B(u).multiplyBy(3)),
                a.options.maxBounds &&
                  (u = a._limitOffset(B(u), a.options.maxBounds)),
                a.options.worldCopyJump)
              ) {
                var h = a.wrapLatLng(
                  a.unproject(a.project(a.getCenter()).add(u))
                );
                a.panTo(h);
              } else a.panBy(u);
          } else if (r in this._zoomKeys)
            a.setZoom(a.getZoom() + (n.shiftKey ? 3 : 1) * this._zoomKeys[r]);
          else if (r === 27 && a._popup && a._popup.options.closeOnEscapeKey)
            a.closePopup();
          else return;
          ei(n);
        }
      },
    });
    oe.addInitHook("addHandler", "keyboard", lf),
      oe.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60,
      });
    var uf = Ht.extend({
      addHooks: function () {
        J(this._map._container, "wheel", this._onWheelScroll, this),
          (this._delta = 0);
      },
      removeHooks: function () {
        pe(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function (n) {
        var r = Nh(n),
          a = this._map.options.wheelDebounceTime;
        (this._delta += r),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(n)),
          this._startTime || (this._startTime = +new Date());
        var u = Math.max(a - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer),
          (this._timer = setTimeout(c(this._performZoom, this), u)),
          ei(n);
      },
      _performZoom: function () {
        var n = this._map,
          r = n.getZoom(),
          a = this._map.options.zoomSnap || 0;
        n._stop();
        var u = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          h = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(u))))) / Math.LN2,
          p = a ? Math.ceil(h / a) * a : h,
          _ = n._limitZoom(r + (this._delta > 0 ? p : -p)) - r;
        (this._delta = 0),
          (this._startTime = null),
          _ &&
            (n.options.scrollWheelZoom === "center"
              ? n.setZoom(r + _)
              : n.setZoomAround(this._lastMousePos, r + _));
      },
    });
    oe.addInitHook("addHandler", "scrollWheelZoom", uf);
    var _v = 600;
    oe.mergeOptions({
      tapHold: V.touchNative && V.safari && V.mobile,
      tapTolerance: 15,
    });
    var cf = Ht.extend({
      addHooks: function () {
        J(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function () {
        pe(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function (n) {
        if ((clearTimeout(this._holdTimeout), n.touches.length === 1)) {
          var r = n.touches[0];
          (this._startPos = this._newPos = new I(r.clientX, r.clientY)),
            (this._holdTimeout = setTimeout(
              c(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (J(document, "touchend", be),
                    J(
                      document,
                      "touchend touchcancel",
                      this._cancelClickPrevent
                    ),
                    this._simulateEvent("contextmenu", r));
              }, this),
              _v
            )),
            J(document, "touchend touchcancel contextmenu", this._cancel, this),
            J(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function n() {
        pe(document, "touchend", be), pe(document, "touchend touchcancel", n);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          pe(document, "touchend touchcancel contextmenu", this._cancel, this),
          pe(document, "touchmove", this._onMove, this);
      },
      _onMove: function (n) {
        var r = n.touches[0];
        this._newPos = new I(r.clientX, r.clientY);
      },
      _isTapValid: function () {
        return (
          this._newPos.distanceTo(this._startPos) <=
          this._map.options.tapTolerance
        );
      },
      _simulateEvent: function (n, r) {
        var a = new MouseEvent(n, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: r.screenX,
          screenY: r.screenY,
          clientX: r.clientX,
          clientY: r.clientY,
        });
        (a._simulated = !0), r.target.dispatchEvent(a);
      },
    });
    oe.addInitHook("addHandler", "tapHold", cf),
      oe.mergeOptions({ touchZoom: V.touch, bounceAtZoomLimits: !0 });
    var hf = Ht.extend({
      addHooks: function () {
        ee(this._map._container, "leaflet-touch-zoom"),
          J(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function () {
        Le(this._map._container, "leaflet-touch-zoom"),
          pe(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function (n) {
        var r = this._map;
        if (
          !(
            !n.touches ||
            n.touches.length !== 2 ||
            r._animatingZoom ||
            this._zooming
          )
        ) {
          var a = r.mouseEventToContainerPoint(n.touches[0]),
            u = r.mouseEventToContainerPoint(n.touches[1]);
          (this._centerPoint = r.getSize()._divideBy(2)),
            (this._startLatLng = r.containerPointToLatLng(this._centerPoint)),
            r.options.touchZoom !== "center" &&
              (this._pinchStartLatLng = r.containerPointToLatLng(
                a.add(u)._divideBy(2)
              )),
            (this._startDist = a.distanceTo(u)),
            (this._startZoom = r.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            r._stop(),
            J(document, "touchmove", this._onTouchMove, this),
            J(document, "touchend touchcancel", this._onTouchEnd, this),
            be(n);
        }
      },
      _onTouchMove: function (n) {
        if (!(!n.touches || n.touches.length !== 2 || !this._zooming)) {
          var r = this._map,
            a = r.mouseEventToContainerPoint(n.touches[0]),
            u = r.mouseEventToContainerPoint(n.touches[1]),
            h = a.distanceTo(u) / this._startDist;
          if (
            ((this._zoom = r.getScaleZoom(h, this._startZoom)),
            !r.options.bounceAtZoomLimits &&
              ((this._zoom < r.getMinZoom() && h < 1) ||
                (this._zoom > r.getMaxZoom() && h > 1)) &&
              (this._zoom = r._limitZoom(this._zoom)),
            r.options.touchZoom === "center")
          ) {
            if (((this._center = this._startLatLng), h === 1)) return;
          } else {
            var p = a._add(u)._divideBy(2)._subtract(this._centerPoint);
            if (h === 1 && p.x === 0 && p.y === 0) return;
            this._center = r.unproject(
              r.project(this._pinchStartLatLng, this._zoom).subtract(p),
              this._zoom
            );
          }
          this._moved || (r._moveStart(!0, !1), (this._moved = !0)),
            ye(this._animRequest);
          var _ = c(
            r._move,
            r,
            this._center,
            this._zoom,
            { pinch: !0, round: !1 },
            void 0
          );
          (this._animRequest = se(_, this, !0)), be(n);
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        (this._zooming = !1),
          ye(this._animRequest),
          pe(document, "touchmove", this._onTouchMove, this),
          pe(document, "touchend touchcancel", this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              );
      },
    });
    oe.addInitHook("addHandler", "touchZoom", hf),
      (oe.BoxZoom = of),
      (oe.DoubleClickZoom = sf),
      (oe.Drag = af),
      (oe.Keyboard = lf),
      (oe.ScrollWheelZoom = uf),
      (oe.TapHold = cf),
      (oe.TouchZoom = hf),
      (i.Bounds = q),
      (i.Browser = V),
      (i.CRS = nt),
      (i.Canvas = ef),
      (i.Circle = sl),
      (i.CircleMarker = qo),
      (i.Class = vt),
      (i.Control = Mt),
      (i.DivIcon = Yh),
      (i.DivOverlay = Ut),
      (i.DomEvent = Ag),
      (i.DomUtil = Ig),
      (i.Draggable = vn),
      (i.Evented = Jt),
      (i.FeatureGroup = en),
      (i.GeoJSON = nn),
      (i.GridLayer = Ar),
      (i.Handler = Ht),
      (i.Icon = zi),
      (i.ImageOverlay = ts),
      (i.LatLng = ue),
      (i.LatLngBounds = Ne),
      (i.Layer = Ot),
      (i.LayerGroup = Oi),
      (i.LineUtil = Kg),
      (i.Map = oe),
      (i.Marker = Ko),
      (i.Mixin = Ug),
      (i.Path = _n),
      (i.Point = I),
      (i.PolyUtil = Wg),
      (i.Polygon = Ni),
      (i.Polyline = tn),
      (i.Popup = ns),
      (i.PosAnimation = Rh),
      (i.Projection = qg),
      (i.Rectangle = rf),
      (i.Renderer = rn),
      (i.SVG = Br),
      (i.SVGOverlay = qh),
      (i.TileLayer = Ii),
      (i.Tooltip = is),
      (i.Transformation = Na),
      (i.Util = qn),
      (i.VideoOverlay = Kh),
      (i.bind = c),
      (i.bounds = ae),
      (i.canvas = tf),
      (i.circle = rv),
      (i.circleMarker = iv),
      (i.control = Rr),
      (i.divIcon = dv),
      (i.extend = s),
      (i.featureGroup = ev),
      (i.geoJSON = Gh),
      (i.geoJson = av),
      (i.gridLayer = pv),
      (i.icon = tv),
      (i.imageOverlay = lv),
      (i.latLng = X),
      (i.latLngBounds = de),
      (i.layerGroup = Jg),
      (i.map = Dg),
      (i.marker = nv),
      (i.point = B),
      (i.polygon = sv),
      (i.polyline = ov),
      (i.popup = hv),
      (i.rectangle = vv),
      (i.setOptions = P),
      (i.stamp = f),
      (i.svg = nf),
      (i.svgOverlay = cv),
      (i.tileLayer = Xh),
      (i.tooltip = fv),
      (i.transformation = kr),
      (i.version = o),
      (i.videoOverlay = uv);
    var yv = window.L;
    (i.noConflict = function () {
      return (window.L = yv), this;
    }),
      (window.L = i);
  });
})(Xu, Xu.exports);
var Fo = Xu.exports;
const ng = hp(Fo);
function nh(e, t, i) {
  return Object.freeze({ instance: e, context: t, container: i });
}
function ih(e, t) {
  return t == null
    ? function (o, s) {
        const l = z.useRef();
        return l.current || (l.current = e(o, s)), l;
      }
    : function (o, s) {
        const l = z.useRef();
        l.current || (l.current = e(o, s));
        const c = z.useRef(o),
          { instance: d } = l.current;
        return (
          z.useEffect(
            function () {
              c.current !== o && (t(d, o, c.current), (c.current = o));
            },
            [d, o, s]
          ),
          l
        );
      };
}
function tw(e, t) {
  z.useEffect(
    function () {
      return (
        (t.layerContainer ?? t.map).addLayer(e.instance),
        function () {
          var l;
          (l = t.layerContainer) == null || l.removeLayer(e.instance),
            t.map.removeLayer(e.instance);
        }
      );
    },
    [t, e]
  );
}
function ig(e) {
  return function (i) {
    const o = eg(),
      s = e(th(i, o), o);
    return (
      Y0(o.map, i.attribution),
      tg(s.current, i.eventHandlers),
      tw(s.current, o),
      s
    );
  };
}
function nw(e, t) {
  const i = ih(e, t),
    o = ig(i);
  return Yy(o);
}
function iw(e, t) {
  const i = ih(e),
    o = ew(i, t);
  return Xy(o);
}
function rw(e, t) {
  const i = ih(e, t),
    o = ig(i);
  return Jy(o);
}
function ow(e, t, i) {
  const { opacity: o, zIndex: s } = t;
  o != null && o !== i.opacity && e.setOpacity(o),
    s != null && s !== i.zIndex && e.setZIndex(s);
}
function Ju() {
  return (
    (Ju =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var o in i)
            Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
        }
        return e;
      }),
    Ju.apply(this, arguments)
  );
}
function sw(
  {
    bounds: e,
    boundsOptions: t,
    center: i,
    children: o,
    className: s,
    id: l,
    placeholder: c,
    style: d,
    whenReady: f,
    zoom: m,
    ...y
  },
  g
) {
  const [x] = z.useState({ className: s, id: l, style: d }),
    [k, M] = z.useState(null);
  z.useImperativeHandle(g, () => (k == null ? void 0 : k.map) ?? null, [k]);
  const P = z.useCallback((C) => {
    if (C !== null && k === null) {
      const v = new Fo.Map(C, y);
      i != null && m != null ? v.setView(i, m) : e != null && v.fitBounds(e, t),
        f != null && v.whenReady(f),
        M(Ky(v));
    }
  }, []);
  z.useEffect(
    () => () => {
      k == null || k.map.remove();
    },
    [k]
  );
  const R = k ? Ds.createElement(J0, { value: k }, o) : c ?? null;
  return Ds.createElement("div", Ju({}, x, { ref: P }), R);
}
const aw = z.forwardRef(sw),
  ep = nw(
    function ({ position: t, ...i }, o) {
      const s = new Fo.Marker(t, i);
      return nh(s, qy(o, { overlayContainer: s }));
    },
    function (t, i, o) {
      i.position !== o.position && t.setLatLng(i.position),
        i.icon != null && i.icon !== o.icon && t.setIcon(i.icon),
        i.zIndexOffset != null &&
          i.zIndexOffset !== o.zIndexOffset &&
          t.setZIndexOffset(i.zIndexOffset),
        i.opacity != null && i.opacity !== o.opacity && t.setOpacity(i.opacity),
        t.dragging != null &&
          i.draggable !== o.draggable &&
          (i.draggable === !0 ? t.dragging.enable() : t.dragging.disable());
    }
  ),
  tp = iw(
    function (t, i) {
      const o = new Fo.Popup(t, i.overlayContainer);
      return nh(o, i);
    },
    function (t, i, { position: o }, s) {
      z.useEffect(
        function () {
          const { instance: c } = t;
          function d(m) {
            m.popup === c && (c.update(), s(!0));
          }
          function f(m) {
            m.popup === c && s(!1);
          }
          return (
            i.map.on({ popupopen: d, popupclose: f }),
            i.overlayContainer == null
              ? (o != null && c.setLatLng(o), c.openOn(i.map))
              : i.overlayContainer.bindPopup(c),
            function () {
              var y;
              i.map.off({ popupopen: d, popupclose: f }),
                (y = i.overlayContainer) == null || y.unbindPopup(),
                i.map.removeLayer(c);
            }
          );
        },
        [t, i, s, o]
      );
    }
  ),
  lw = rw(
    function ({ url: t, ...i }, o) {
      const s = new Fo.TileLayer(t, th(i, o));
      return nh(s, o);
    },
    function (t, i, o) {
      ow(t, i, o);
      const { url: s } = i;
      s != null && s !== o.url && t.setUrl(s);
    }
  ),
  uw = new ng.Icon({
    iconUrl: "./marker.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  cw = ng.icon({
    iconUrl: "./geolocation.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 0],
  }),
  hw = [
    {
      id: 1,
      position: [63.3177774, -20.4972221],
      title: "Geirfuglasker",
      category: "Huldufólk",
      description:
        "Í fyrri tíð bjó prestur einn á Melstað er Ásmundur hét; hann var ríkur maður og vel metinn. Hann átti tvær dætur...",
    },
    {
      id: 2,
      position: [65.1841666, -13.759167],
      title: "Loðmundarfjörður",
      category: "Huldufólk",
      description:
        "Rík hjón voru eitt sinn á bæ í Loðmundarfirði; þau héldu tvo vinnumenn og tvær vinnukonur...",
    },
    {
      id: 3,
      position: [65.6695917, -22.607964],
      title: "Melstaðarkirkja",
      category: "Huldufólk",
      description:
        "Í fyrri tíð bjó prestur einn á Melstað er Ásmundur hét; hann var ríkur maður og vel metinn. Hann átti tvær dætur...",
    },
    {
      id: 4,
      position: [64.08799549, -16.98293665],
      title: "Skaftafell",
      category: "Tröll",
      description:
        "Í Skaftafelli er sagt að mjög lengi hafi búið sami ættleggur, en helst er getið eins manns er Einar hét...",
    },
    {
      id: 5,
      position: [64.1540458, -21.2815924],
      title: "Jórukleif",
      category: "Tröll",
      description:
        "Jórunn hét stúlka ein; hún var bóndadóttir einhvers staðar úr Sandvíkurhrepp í Flóanum; ung var hún og efnileg, en heldur þótti hún skapstór. Hún var matselja hjá föður sínum. Einhvern dag bar svo við, að hestaat var haldið skammt frá bæ Jórunnar; átti faðir hennar annan hestinn, er etja skyldi, og hafði Jórunn miklar mætur á honum. Hún var viðstödd hestaatið og fleiri konur; en er atið byrjaði, sá hún, að hestur föður hennar fór heldur halloka fyrir.",
    },
    {
      id: 6,
      position: [63.7153782, -19.8436617],
      title: "Eyvindarmúli",
      category: "Tröll",
      description:
        'Það var eitthvort sinn þá hann var ungur að hann var sendur til sauða upp til fjalls, en skelldi yfir níðaþoku svo hann vissi ekki hvað hann fór. Og þá hann var lengi búinn að gánga heyrði hann að kallað var og sagt: "Tökum við hann. Þá kom rödd úr annari átt sem sagði: Tökum við hann ekki.',
    },
    {
      id: 7,
      position: [65.110218, -13.8434718],
      title: "Rafnkelsstaðir",
      category: "Draugar",
      description:
        "Bergþór bjó á Hrakkellsstöðum (=Rafnkelsstöðum) fyri og eftir miðbik 18. aldar (lifði 1767). Hann var maður fjáður, einkum að sjávarútvegi og átti mörg skip. Það var þá siður að gjalda sjómönnum skiplag sitt í mjöli, hverjum tvo fjórðunga, eða þá annan í mjöli, en hinn í hörðum fiski, og færið skyldu þeir fá að vertíðarlokum; flestir létu þá fá stykki úr gömlu færi. Þar var með sjómönnum Bergþórs unglingspiltur úr Norðurlandi ósjóvanur.",
    },
    {
      id: 8,
      position: [65.0625528, -15.1571429],
      title: "Snjóholt",
      category: "Draugar",
      description:
        "Í tíð Brynjólfs biskups Sveinssonar kom í Skálholt margt umferðarfólk meðal hvörs að var kerling ein að nafni Sezelja sem vandi komur sínar þangað oftlega, og höfðu skólapiltar við hana ýmsar glettingar og var einn hvað mest fyrir þeim í þessu, að nafni Eiríkur, og dugði ei þó biskup aðvaraði hann að erta ekki kerlingu upp.",
    },
    {
      id: 9,
      position: [64.5194429, -21.9365519],
      title: "Reynisstaðarkirkja",
      category: "Draugar",
      description:
        "Um haustið 1780 sendi Halldór Bjarnason, er þá hélt Reynistaðarklaustur, son sinn tvítugan, er Bjarni hét, og mann með, er Jón hét og var kallaður Austmann, suður um land til fjárkaupa því fyrirfarandi ár hafði mjög fallið fé á Norðurlandi. Síðar um haustið sendi og Halldór yngri son sinn suður, er Einar hét, ellefu ára að aldri, og mann með honum, er Sigurður hét, og áttu þeir að hjálpa hinum til að reka féð norður er þeir höfðu keypt. Það er mælt að Einar hafi nauðugur farið þessa för og hafi sagt að hann mundi ekki aftur heim koma.",
    },
    {
      id: 10,
      position: [65.6579815, -20.2929826],
      title: "Húnavatnssýsla",
      category: "Helgisögur",
      description:
        "Um lok 18. aldar bjó sá bóndi í Húnavatnssýslu sem Ketill hét. Meðan kona hans var þunguð dreymdi hana að satan kæmi til sín og beiddi sig að láta barnið sem hún gengi með heita í höfuðið á sér. Af því það er almenn trú að það verði barninu fyrir einhverju góðu ef maður verður við tilmælum þess sem vitjar nafns til konu ætluðu hjónin að láta barnið heita Satan.",
    },
    {
      id: 11,
      position: [64.1384228, -20.2621234],
      title: "Hruni",
      category: "Helgisögur",
      description:
        "Einu sinni til forna var prestur í Hruna í Árnessýslu, sem mjög var gefinn fyrir skemmtanir og gleðskap. Það var ávallt vani þessa prests, þegar fólkið var komið til kirkju á jólanóttina, að hann embættaði ekki fyrri part næturinnar, heldur hafði dansferð mikla í kirkjunni með sóknarfólkinu, drykkju og spil og aðrar ósæmilegar skemmtanir langt fram á nótt. Presturinn átti gamla móður, sem Una hét; henni var mjög á móti skapi þetta athæfi sonar síns og fann oft að því við hann.",
    },
  ],
  fw = () => {
    const [e, t] = z.useState(null);
    let i = Ma();
    function o(s, l) {
      l === "Huldufólk" && (l = "alfa"),
        l === "Helgisögur" && (l = "efra"),
        l === "Draugar" && (l = "draug"),
        l === "Tröll" && (l = "troll"),
        s === "Geirfuglasker" && (s = "geirfugl"),
        s === "Loðmundarfjörður" && (s = "a-lodmfj"),
        s === "Melstaðarkirkja" && (s = "jonas"),
        s === "Skaftafell" && (s = "einar-sk"),
        s === "Jórukleif" && (s = "jora"),
        s === "Eyvindarmúli" && (s = "gudm-eyv"),
        s === "Rafnkelsstaðir" && (s = "flugan"),
        s === "Snjóholt" && (s = "setta2"),
        s === "Reynisstaðarkirkja" && (s = "reynis"),
        s === "Húnavatnssýsla" && (s = "sat-nafn"),
        s === "Hruni" && (s = "hruna"),
        i(`/stories/${l}/${s}`);
    }
    return (
      z.useEffect(() => {
        navigator.geolocation
          ? navigator.geolocation.getCurrentPosition(
              (s) => {
                t([s.coords.latitude, s.coords.longitude]);
              },
              (s) => {
                console.error("Error obtaining geolocation:", s);
              }
            )
          : console.error("Geolocation is not supported by this browser.");
      }, []),
      O.jsx("div", {
        className: "relative w-full h-full",
        children: O.jsxs(aw, {
          center: [64.9631, -19.0208],
          zoom: 6,
          className: "w-full h-full",
          children: [
            O.jsx(lw, {
              url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
              attribution:
                '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>',
            }),
            hw.map((s) =>
              O.jsx(
                ep,
                {
                  position: s.position,
                  icon: uw,
                  children: O.jsx(tp, {
                    className: "custom-popup",
                    children: O.jsxs("div", {
                      onClick: () => o(s.title, s.category),
                      className:
                        "!bg-sagnir-100 !text-sagnir-200 !rounded-none !w-[18rem] !h-auto !shadow-none m-1 p-2",
                      children: [
                        O.jsx("h2", {
                          className:
                            "!bg-sagnir-100 !text-xl !font-serifExtra p-1 m-1",
                          children: s.title,
                        }),
                        O.jsx("h3", {
                          className:
                            "!bg-sagnir-100 !text-sagnir-200 !text-md !font-glare !inline-block p-1 m-1",
                          children: s.category,
                        }),
                        O.jsx("p", {
                          className:
                            " !bg-sagnir-100 !text-sagnir-200 !font-glare !p-1 m-1",
                          children: s.description,
                        }),
                        O.jsx("button", {
                          className:
                            "!text-sagnir-200 !font-glare !text-sm m-1",
                          onClick: () => o(s.title, s.category),
                          children: "Read More →",
                        }),
                      ],
                    }),
                  }),
                },
                s.id
              )
            ),
            e &&
              O.jsx(ep, {
                position: e,
                icon: cw,
                children: O.jsx(tp, {
                  className: "custom-popup",
                  children: O.jsx("div", {
                    className:
                      "!bg-sagnir-100 !text-sagnir-200 !border-sagnir-200 !rounded-none !w-[10rem] !h-auto !p-0.5 !shadow-none",
                    children: O.jsx("h3", {
                      className:
                        "!text-sagnir-200 !text-xl text-center !font-glare !inline-block",
                      children: "Þú ert her !",
                    }),
                  }),
                }),
              }),
          ],
        }),
      })
    );
  },
  dw = () =>
    O.jsx("div", {
      className: "fixed inset-0",
      children: O.jsx("div", {
        className: "absolute inset-0 bottom-22",
        children: O.jsx(fw, {}),
      }),
    }),
  pw = ({
    label: e,
    text: t,
    isSelected: i,
    isIncorrect: o,
    showCorrectAnswer: s,
    isCorrect: l,
    onClick: c,
  }) =>
    O.jsxs("button", {
      className: `w-full py-3 px-6 flex items-center text-left border rounded-lg transition-all duration-200 ${
        s
          ? "bg-sagnir-200 border-sagnir-200 text-sagnir-100"
          : o
          ? "bg-sagnir-100 border-sagnir-200 text-sagnir-200"
          : i
          ? l
            ? "bg-sagnir-100 border-sagnir-200 text-sagnir-100"
            : "bg-sagnir-100 border-sagnir-100 text-sagnir-200"
          : "bg-sagnir-100 border-sagnir-200"
      }`,
      onClick: c,
      children: [
        O.jsx("span", {
          className: `font-glare text-xl ${
            s || (i && l) ? "text-sagnir-100" : "text-sagnir-200"
          }`,
          children: e,
        }),
        O.jsx("div", { className: "w-px h-9 bg-sagnir-200 mx-4" }),
        O.jsx("span", {
          className: `font-glare text-xl ${
            s || (i && l) ? "text-sagnir-100" : "text-sagnir-200"
          }`,
          children: t,
        }),
        o &&
          O.jsx("span", {
            className: "font-serifExtra ml-auto text-sagnir-200",
            children: O.jsx("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: O.jsx("path", {
                d: "M7 7L17 17M17 7L7 17",
                stroke: "#F0ECDD",
                "stroke-width": "2",
                "stroke-linecap": "round",
              }),
            }),
          }),
        s &&
          O.jsx("span", {
            className: "ml-auto",
            children: O.jsx("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "text-sagnir-100",
              children: O.jsx("path", {
                d: "M19 7L9.66667 16L5 11.5",
                stroke: "#1A1616",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          }),
      ],
    }),
  mw = ({ questionNumber: e, totalQuestions: t }) => {
    const i = (e / t) * 100;
    return O.jsxs("div", {
      className: "w-full",
      children: [
        O.jsx("div", {
          className: "flex items-center justify-between pb-2",
          children: O.jsx("span", {
            className: "font-glare text-sagnir-200 text-base",
            children: `Question ${e}/${t}`,
          }),
        }),
        O.jsx("div", {
          className: "w-full h-2 bg-sagnir-300 rounded overflow-hidden",
          children: O.jsx("div", {
            className: "h-full bg-sagnir-200",
            style: { width: `${i}%` },
          }),
        }),
      ],
    });
  },
  gw = ({ onClick: e }) =>
    O.jsx("button", {
      onClick: e,
      className:
        "w-8 h-20 flex items-center justify-center bg-transparent rounded-full hover:text-black transition",
      children: O.jsx("svg", {
        width: "38",
        height: "21",
        viewBox: "0 0 38 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "transform scale-x-[-1]",
        children: O.jsx("path", {
          d: "M1.38268 9.3826C0.848652 9.91663 0.848652 10.7825 1.38268 11.3165L10.0853 20.0191C10.6193 20.5531 11.4851 20.5531 12.0192 20.0191C12.5532 19.485 12.5532 18.6192 12.0192 18.0852L4.28354 10.3495L12.0192 2.61393C12.5532 2.07989 12.5532 1.21405 12.0192 0.680021C11.4851 0.145988 10.6193 0.145988 10.0853 0.680021L1.38268 9.3826ZM37.9041 8.98207L2.34964 8.98207V11.717L37.9041 11.717V8.98207Z",
          fill: "white",
        }),
      }),
    }),
  vw = "/Sagnir/assets/Quizpic-lagarfljot-6dWnN0-H.svg",
  _w = "/Sagnir/assets/grylaa-9u8n3kkp.svg",
  yw = "/Sagnir/assets/quizhellir-DmoPgDss.svg",
  ww = "/Sagnir/assets/djakninn-Dk9bAgnt.svg",
  xw = "/Sagnir/assets/quizalfarsvg-D9Y6G2Qq.svg",
  Cw = () => {
    const [e, t] = z.useState(0),
      [i, o] = z.useState(null),
      [s, l] = z.useState(!1),
      [c, d] = z.useState(!1),
      f = [
        {
          questionNumber: 1,
          totalQuestions: 5,
          questionText: "Hvar á landinu er Lagarfljót?",
          imageSrc: vw,
          options: [
            { label: "A", text: "Hólmavík" },
            { label: "B", text: "Egilsstaðir" },
            { label: "C", text: "Héraðsflóa" },
            { label: "D", text: "Eyrarbakki" },
          ],
          correctAnswer: "Héraðsflóa",
        },
        {
          questionNumber: 2,
          totalQuestions: 5,
          questionText: "Hvað á grýla gamla mörg börn?",
          imageSrc: _w,
          options: [
            { label: "A", text: "Þrjátíu" },
            { label: "B", text: "Fimm" },
            { label: "C", text: "Þrettán" },
            { label: "D", text: "Tuttugu" },
          ],
          correctAnswer: "Tuttugu",
        },
        {
          questionNumber: 3,
          totalQuestions: 5,
          questionText: "Hvar á landinu er Skessuhellir?",
          imageSrc: yw,
          options: [
            { label: "A", text: "Húsagili" },
            { label: "B", text: "Vestfjörðum" },
            { label: "C", text: "Barðastrandarsýslu" },
            { label: "D", text: "Heiðnabjargi" },
          ],
          correctAnswer: "Húsagili",
        },
        {
          questionNumber: 4,
          totalQuestions: 5,
          questionText: "Hví segir Djákninn Garún?",
          imageSrc: ww,
          options: [
            { label: "A", text: "Hún hét Garún" },
            { label: "B", text: "Hann gat ekki sagt guðrún" },
            { label: "C", text: "Hann var undir álögum" },
            { label: "D", text: "Ekkert að ofan" },
          ],
          correctAnswer: "Hann gat ekki sagt guðrún",
        },
        {
          questionNumber: 5,
          totalQuestions: 5,
          questionText: "Hvað heitir kerlingin sem vann ullina?",
          imageSrc: xw,
          options: [
            { label: "A", text: "Grýla" },
            { label: "B", text: "Gilitrutt" },
            { label: "C", text: "Trunta" },
            { label: "D", text: "Svanhvít" },
          ],
          correctAnswer: "Gilitrutt",
        },
      ],
      m = f[e],
      y = (k) => {
        s || (o(k), l(!0));
      },
      g = () => {
        e < f.length - 1 ? (t(e + 1), o(null), l(!1)) : d(!0);
      },
      x = () => {
        d(!1);
      };
    return O.jsxs("div", {
      className:
        "flex items-center justify-center bg-sagnir-100 text-sagnir-200 h-auto w-screen",
      children: [
        O.jsxs("div", {
          className: "flex flex-col w-full max-w-4xl",
          children: [
            O.jsx("div", {
              className: "flex-none mx-8 mt-12 mb-6 md:mt-15",
              children: O.jsx(mw, {
                questionNumber: m.questionNumber,
                totalQuestions: m.totalQuestions,
              }),
            }),
            O.jsx("h2", {
              className: "mx-8 font-glare text-4xl text-sagnir-200 text-left",
              children: m.questionText,
            }),
            O.jsx("div", {
              className: "w-full flex",
              children: O.jsx("img", {
                src: m.imageSrc,
                alt: `Question ${m.questionNumber}`,
                className:
                  "pt-5 w-full justify-center h-[300px] md:w-[950px] md:h-[480px]",
              }),
            }),
            O.jsx("div", {
              className:
                "w-full justify-content px-8 mb-16 mt-5 grid grid-cols-1 gap-4",
              children: m.options.map((k) =>
                O.jsx(
                  pw,
                  {
                    label: k.label,
                    text: k.text,
                    isSelected: i === k.text,
                    isCorrect: k.text === m.correctAnswer,
                    showCorrectAnswer: s && k.text === m.correctAnswer,
                    isIncorrect:
                      s && i === k.text && k.text !== m.correctAnswer,
                    onClick: () => y(k.text),
                  },
                  k.label
                )
              ),
            }),
            s &&
              O.jsx("div", {
                className:
                  "absolute bottom-[3.5rem] right-[1.25rem] md:right-[21rem] md:bottom-[3.5rem]",
                children: O.jsx(gw, { onClick: g }),
              }),
            O.jsx("div", { className: "h-20" }),
          ],
        }),
        c &&
          O.jsx("div", {
            className:
              "fixed inset-0 flex items-center justify-center bg-sagnir-100 bg-opacity-50",
            children: O.jsxs("div", {
              className:
                "bg-sagnir-200 text-sagnir-100 rounded-lg p-8 shadow-lg w-80 text-center",
              children: [
                O.jsx("h2", {
                  className: "font-glare text-2xl mb-4",
                  children: "Allt búið í dag!",
                }),
                O.jsx("p", {
                  className: "font-glare text-lg mb-6",
                  children: "Vel gert meistari",
                }),
                O.jsx("button", {
                  onClick: x,
                  className:
                    "font-glare px-4 py-2 bg-sagnir-100 text-sagnir-200 rounded-lg",
                  children: "Loka",
                }),
              ],
            }),
          }),
      ],
    });
  },
  Sw =
    "data:image/svg+xml,%3csvg%20width='49'%20height='51'%20viewBox='0%200%2049%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.03332%2025.033C5.49929%2025.5671%205.49929%2026.4329%206.03332%2026.967L14.7359%2035.6695C15.2699%2036.2036%2016.1358%2036.2036%2016.6698%2035.6695C17.2038%2035.1355%2017.2038%2034.2697%2016.6698%2033.7356L8.93418%2026L16.6698%2018.2644C17.2038%2017.7303%2017.2038%2016.8645%2016.6698%2016.3305C16.1358%2015.7964%2015.2699%2015.7964%2014.7359%2016.3305L6.03332%2025.033ZM42.5547%2024.6325L7.00027%2024.6325V27.3675L42.5547%2027.3675V24.6325Z'%20fill='white'/%3e%3c/svg%3e",
  Pw = ({ onClick: e }) =>
    O.jsx("div", {
      className: "pt-8 pb-6 pl-9",
      children: O.jsx("button", {
        onClick: e,
        className:
          "w-38 h-21 flex items-center justify-center bg-transparent rounded-full hover:text-black transition",
        children: O.jsx("img", { src: Sw, className: "w-38 h-21" }),
      }),
    }),
  kw =
    "data:image/svg+xml,%3csvg%20width='41'%20height='41'%20viewBox='0%200%2041%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='20.5'%20cy='20.5'%20r='20.5'%20fill='%23F0ECDD'/%3e%3cpath%20d='M16.9374%2020.6875H16.3437C15.0319%2020.6875%2013.9687%2021.7525%2013.9687%2023.067V25.433C13.9687%2026.7471%2015.0319%2027.8125%2016.3437%2027.8125H16.9374C17.5932%2027.8125%2018.1249%2027.2796%2018.1249%2026.6228V21.8772C18.1249%2021.22%2017.5932%2020.6875%2016.9374%2020.6875ZM24.6562%2020.6875H24.0624C23.4067%2020.6875%2022.8749%2021.22%2022.8749%2021.8772V26.6228C22.8749%2027.2796%2023.4067%2027.8125%2024.0624%2027.8125H24.6562C25.968%2027.8125%2027.0312%2026.7471%2027.0312%2025.433V23.067C27.0312%2021.7529%2025.968%2020.6875%2024.6562%2020.6875ZM20.4999%2011.1875C15.19%2011.1875%2011.1695%2015.6083%2010.9999%2020.6875V24.8438C10.9999%2025.1718%2011.2656%2025.4375%2011.5937%2025.4375H12.1874C12.5155%2025.4375%2012.7812%2025.1718%2012.7812%2024.8438V20.6875C12.7812%2016.4322%2016.2446%2012.9762%2020.4999%2012.9754C24.7553%2012.9762%2028.2187%2016.4322%2028.2187%2020.6875V24.8438C28.2187%2025.1718%2028.4844%2025.4375%2028.8124%2025.4375H29.4062C29.7342%2025.4375%2029.9999%2025.1718%2029.9999%2024.8438V20.6875C29.8303%2015.6083%2025.8099%2011.1875%2020.4999%2011.1875Z'%20fill='%231A1616'/%3e%3c/svg%3e",
  Lw = () => {
    const { storyName: e, categoryName: t } = cy(),
      i = Ma(),
      {
        data: o,
        isLoading: s,
        error: l,
      } = q0(`https://m4groupproject.onrender.com/${t}/${e}`);
    console.log(o);
    const c = () => {
      i(-1);
    };
    return s
      ? O.jsx("div", { children: "Loading..." })
      : l
      ? O.jsx("div", { children: "Error loading story." })
      : O.jsxs("div", {
          className: "bg-sagnir-100",
          children: [
            O.jsx(Pw, { onClick: c }),
            O.jsxs("div", {
              className: "flex-col flex items-center mb-12",
              children: [
                O.jsx("img", {
                  src: Yu,
                  alt: "Huldufolk",
                  className: "w-full h-full md:h-2/3 md:w-full",
                }),
                O.jsx("h2", {
                  className:
                    "font-glare text-center text-sagnir-200 p-2 pb-4 text-4xl md:p-6 md:text-6xl",
                  children:
                    (o == null ? void 0 : o.title[0]) +
                    (o == null ? void 0 : o.title.slice(1).toLowerCase()),
                }),
                O.jsx("img", {
                  src: kw,
                  alt: "Listen icon",
                  className: "w-10 h-10",
                }),
                O.jsx("p", {
                  className:
                    "text-sagnir-200 font-glare text-xs pt-4 pb-3 md:text-xl",
                  children: "Listen",
                }),
                O.jsx("hr", { className: "h-0.010 w-full bg-sagnir-200" }),
                O.jsx("p", {
                  className:
                    "font-glare text-[16px] text-sagnir-200 flex-col tracking-wide justify-center p-8 pt-5 leading-relaxed md:leading-loose md:p-10",
                  children: o == null ? void 0 : o.body,
                }),
              ],
            }),
          ],
        });
  };
function Ew() {
  return O.jsx("div", {
    className: "h-full relative",
    children: O.jsxs(Ry, {
      children: [
        O.jsxs(Ly, {
          children: [
            O.jsx(ri, { path: "/", element: O.jsx(Jd, {}) }),
            O.jsx(ri, { path: "/stories", element: O.jsx(Jd, {}) }),
            O.jsx(ri, {
              path: "/stories/:categoryName/:storyName",
              element: O.jsx(Lw, {}),
            }),
            O.jsx(ri, {
              path: "/search",
              element: O.jsx(K0, {
                isSearchOpen: !1,
                setIsSearchOpen: () => {},
              }),
            }),
            O.jsx(ri, { path: "/map", element: O.jsx(dw, {}) }),
            O.jsx(ri, { path: "/quiz", element: O.jsx(Cw, {}) }),
          ],
        }),
        O.jsx(Wy, {}),
      ],
    }),
  });
}
const Tw = new v1();
k0(document.getElementById("root")).render(
  O.jsx(z.StrictMode, {
    children: O.jsx(C1, { client: Tw, children: O.jsx(Ew, {}) }),
  })
);
