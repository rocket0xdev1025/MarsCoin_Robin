(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) v(m);
  new MutationObserver((m) => {
    for (const y of m)
      if (y.type === "childList")
        for (const k of y.addedNodes)
          k.tagName === "LINK" && k.rel === "modulepreload" && v(k);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(m) {
    const y = {};
    return (
      m.integrity && (y.integrity = m.integrity),
      m.referrerPolicy && (y.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === "use-credentials"
        ? (y.credentials = "include")
        : m.crossOrigin === "anonymous"
        ? (y.credentials = "omit")
        : (y.credentials = "same-origin"),
      y
    );
  }
  function v(m) {
    if (m.ep) return;
    m.ep = !0;
    const y = u(m);
    fetch(m.href, y);
  }
})();
var Zi = { exports: {} },
  zr = {},
  qi = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc;
function Xf() {
  if (sc) return X;
  sc = 1;
  var i = Symbol.for("react.element"),
    c = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    k = Symbol.for("react.context"),
    R = Symbol.for("react.forward_ref"),
    E = Symbol.for("react.suspense"),
    F = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    z = Symbol.iterator;
  function U(h) {
    return h === null || typeof h != "object"
      ? null
      : ((h = (z && h[z]) || h["@@iterator"]),
        typeof h == "function" ? h : null);
  }
  var oe = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    W = Object.assign,
    K = {};
  function Q(h, N, G) {
    (this.props = h),
      (this.context = N),
      (this.refs = K),
      (this.updater = G || oe);
  }
  (Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (h, N) {
      if (typeof h != "object" && typeof h != "function" && h != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, h, N, "setState");
    }),
    (Q.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    });
  function ne() {}
  ne.prototype = Q.prototype;
  function we(h, N, G) {
    (this.props = h),
      (this.context = N),
      (this.refs = K),
      (this.updater = G || oe);
  }
  var Me = (we.prototype = new ne());
  (Me.constructor = we), W(Me, Q.prototype), (Me.isPureReactComponent = !0);
  var ge = Array.isArray,
    Ee = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    _e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Te(h, N, G) {
    var Z,
      J = {},
      ee = null,
      ae = null;
    if (N != null)
      for (Z in (N.ref !== void 0 && (ae = N.ref),
      N.key !== void 0 && (ee = "" + N.key),
      N))
        Ee.call(N, Z) && !_e.hasOwnProperty(Z) && (J[Z] = N[Z]);
    var re = arguments.length - 2;
    if (re === 1) J.children = G;
    else if (1 < re) {
      for (var fe = Array(re), Je = 0; Je < re; Je++)
        fe[Je] = arguments[Je + 2];
      J.children = fe;
    }
    if (h && h.defaultProps)
      for (Z in ((re = h.defaultProps), re)) J[Z] === void 0 && (J[Z] = re[Z]);
    return {
      $$typeof: i,
      type: h,
      key: ee,
      ref: ae,
      props: J,
      _owner: Ne.current,
    };
  }
  function He(h, N) {
    return {
      $$typeof: i,
      type: h.type,
      key: N,
      ref: h.ref,
      props: h.props,
      _owner: h._owner,
    };
  }
  function Ze(h) {
    return typeof h == "object" && h !== null && h.$$typeof === i;
  }
  function dt(h) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      h.replace(/[=:]/g, function (G) {
        return N[G];
      })
    );
  }
  var qe = /\/+/g;
  function me(h, N) {
    return typeof h == "object" && h !== null && h.key != null
      ? dt("" + h.key)
      : N.toString(36);
  }
  function $e(h, N, G, Z, J) {
    var ee = typeof h;
    (ee === "undefined" || ee === "boolean") && (h = null);
    var ae = !1;
    if (h === null) ae = !0;
    else
      switch (ee) {
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case i:
            case c:
              ae = !0;
          }
      }
    if (ae)
      return (
        (ae = h),
        (J = J(ae)),
        (h = Z === "" ? "." + me(ae, 0) : Z),
        ge(J)
          ? ((G = ""),
            h != null && (G = h.replace(qe, "$&/") + "/"),
            $e(J, N, G, "", function (Je) {
              return Je;
            }))
          : J != null &&
            (Ze(J) &&
              (J = He(
                J,
                G +
                  (!J.key || (ae && ae.key === J.key)
                    ? ""
                    : ("" + J.key).replace(qe, "$&/") + "/") +
                  h
              )),
            N.push(J)),
        1
      );
    if (((ae = 0), (Z = Z === "" ? "." : Z + ":"), ge(h)))
      for (var re = 0; re < h.length; re++) {
        ee = h[re];
        var fe = Z + me(ee, re);
        ae += $e(ee, N, G, fe, J);
      }
    else if (((fe = U(h)), typeof fe == "function"))
      for (h = fe.call(h), re = 0; !(ee = h.next()).done; )
        (ee = ee.value), (fe = Z + me(ee, re++)), (ae += $e(ee, N, G, fe, J));
    else if (ee === "object")
      throw (
        ((N = String(h)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(h).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ae;
  }
  function yt(h, N, G) {
    if (h == null) return h;
    var Z = [],
      J = 0;
    return (
      $e(h, Z, "", "", function (ee) {
        return N.call(G, ee, J++);
      }),
      Z
    );
  }
  function Ve(h) {
    if (h._status === -1) {
      var N = h._result;
      (N = N()),
        N.then(
          function (G) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 1), (h._result = G));
          },
          function (G) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 2), (h._result = G));
          }
        ),
        h._status === -1 && ((h._status = 0), (h._result = N));
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var xe = { current: null },
    L = { transition: null },
    H = {
      ReactCurrentDispatcher: xe,
      ReactCurrentBatchConfig: L,
      ReactCurrentOwner: Ne,
    };
  function O() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (X.Children = {
      map: yt,
      forEach: function (h, N, G) {
        yt(
          h,
          function () {
            N.apply(this, arguments);
          },
          G
        );
      },
      count: function (h) {
        var N = 0;
        return (
          yt(h, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (h) {
        return (
          yt(h, function (N) {
            return N;
          }) || []
        );
      },
      only: function (h) {
        if (!Ze(h))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return h;
      },
    }),
    (X.Component = Q),
    (X.Fragment = u),
    (X.Profiler = m),
    (X.PureComponent = we),
    (X.StrictMode = v),
    (X.Suspense = E),
    (X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
    (X.act = O),
    (X.cloneElement = function (h, N, G) {
      if (h == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            h +
            "."
        );
      var Z = W({}, h.props),
        J = h.key,
        ee = h.ref,
        ae = h._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((ee = N.ref), (ae = Ne.current)),
          N.key !== void 0 && (J = "" + N.key),
          h.type && h.type.defaultProps)
        )
          var re = h.type.defaultProps;
        for (fe in N)
          Ee.call(N, fe) &&
            !_e.hasOwnProperty(fe) &&
            (Z[fe] = N[fe] === void 0 && re !== void 0 ? re[fe] : N[fe]);
      }
      var fe = arguments.length - 2;
      if (fe === 1) Z.children = G;
      else if (1 < fe) {
        re = Array(fe);
        for (var Je = 0; Je < fe; Je++) re[Je] = arguments[Je + 2];
        Z.children = re;
      }
      return {
        $$typeof: i,
        type: h.type,
        key: J,
        ref: ee,
        props: Z,
        _owner: ae,
      };
    }),
    (X.createContext = function (h) {
      return (
        (h = {
          $$typeof: k,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (h.Provider = { $$typeof: y, _context: h }),
        (h.Consumer = h)
      );
    }),
    (X.createElement = Te),
    (X.createFactory = function (h) {
      var N = Te.bind(null, h);
      return (N.type = h), N;
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (h) {
      return { $$typeof: R, render: h };
    }),
    (X.isValidElement = Ze),
    (X.lazy = function (h) {
      return { $$typeof: P, _payload: { _status: -1, _result: h }, _init: Ve };
    }),
    (X.memo = function (h, N) {
      return { $$typeof: F, type: h, compare: N === void 0 ? null : N };
    }),
    (X.startTransition = function (h) {
      var N = L.transition;
      L.transition = {};
      try {
        h();
      } finally {
        L.transition = N;
      }
    }),
    (X.unstable_act = O),
    (X.useCallback = function (h, N) {
      return xe.current.useCallback(h, N);
    }),
    (X.useContext = function (h) {
      return xe.current.useContext(h);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (h) {
      return xe.current.useDeferredValue(h);
    }),
    (X.useEffect = function (h, N) {
      return xe.current.useEffect(h, N);
    }),
    (X.useId = function () {
      return xe.current.useId();
    }),
    (X.useImperativeHandle = function (h, N, G) {
      return xe.current.useImperativeHandle(h, N, G);
    }),
    (X.useInsertionEffect = function (h, N) {
      return xe.current.useInsertionEffect(h, N);
    }),
    (X.useLayoutEffect = function (h, N) {
      return xe.current.useLayoutEffect(h, N);
    }),
    (X.useMemo = function (h, N) {
      return xe.current.useMemo(h, N);
    }),
    (X.useReducer = function (h, N, G) {
      return xe.current.useReducer(h, N, G);
    }),
    (X.useRef = function (h) {
      return xe.current.useRef(h);
    }),
    (X.useState = function (h) {
      return xe.current.useState(h);
    }),
    (X.useSyncExternalStore = function (h, N, G) {
      return xe.current.useSyncExternalStore(h, N, G);
    }),
    (X.useTransition = function () {
      return xe.current.useTransition();
    }),
    (X.version = "18.3.1"),
    X
  );
}
var ac;
function is() {
  return ac || ((ac = 1), (qi.exports = Xf())), qi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function Zf() {
  if (uc) return zr;
  uc = 1;
  var i = is(),
    c = Symbol.for("react.element"),
    u = Symbol.for("react.fragment"),
    v = Object.prototype.hasOwnProperty,
    m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(R, E, F) {
    var P,
      z = {},
      U = null,
      oe = null;
    F !== void 0 && (U = "" + F),
      E.key !== void 0 && (U = "" + E.key),
      E.ref !== void 0 && (oe = E.ref);
    for (P in E) v.call(E, P) && !y.hasOwnProperty(P) && (z[P] = E[P]);
    if (R && R.defaultProps)
      for (P in ((E = R.defaultProps), E)) z[P] === void 0 && (z[P] = E[P]);
    return {
      $$typeof: c,
      type: R,
      key: U,
      ref: oe,
      props: z,
      _owner: m.current,
    };
  }
  return (zr.Fragment = u), (zr.jsx = k), (zr.jsxs = k), zr;
}
var cc;
function qf() {
  return cc || ((cc = 1), (Zi.exports = Zf())), Zi.exports;
}
var s = qf(),
  T = is(),
  Wl = {},
  Ji = { exports: {} },
  Xe = {},
  es = { exports: {} },
  ts = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc;
function Jf() {
  return (
    dc ||
      ((dc = 1),
      (function (i) {
        function c(L, H) {
          var O = L.length;
          L.push(H);
          e: for (; 0 < O; ) {
            var h = (O - 1) >>> 1,
              N = L[h];
            if (0 < m(N, H)) (L[h] = H), (L[O] = N), (O = h);
            else break e;
          }
        }
        function u(L) {
          return L.length === 0 ? null : L[0];
        }
        function v(L) {
          if (L.length === 0) return null;
          var H = L[0],
            O = L.pop();
          if (O !== H) {
            L[0] = O;
            e: for (var h = 0, N = L.length, G = N >>> 1; h < G; ) {
              var Z = 2 * (h + 1) - 1,
                J = L[Z],
                ee = Z + 1,
                ae = L[ee];
              if (0 > m(J, O))
                ee < N && 0 > m(ae, J)
                  ? ((L[h] = ae), (L[ee] = O), (h = ee))
                  : ((L[h] = J), (L[Z] = O), (h = Z));
              else if (ee < N && 0 > m(ae, O))
                (L[h] = ae), (L[ee] = O), (h = ee);
              else break e;
            }
          }
          return H;
        }
        function m(L, H) {
          var O = L.sortIndex - H.sortIndex;
          return O !== 0 ? O : L.id - H.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var y = performance;
          i.unstable_now = function () {
            return y.now();
          };
        } else {
          var k = Date,
            R = k.now();
          i.unstable_now = function () {
            return k.now() - R;
          };
        }
        var E = [],
          F = [],
          P = 1,
          z = null,
          U = 3,
          oe = !1,
          W = !1,
          K = !1,
          Q = typeof setTimeout == "function" ? setTimeout : null,
          ne = typeof clearTimeout == "function" ? clearTimeout : null,
          we = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Me(L) {
          for (var H = u(F); H !== null; ) {
            if (H.callback === null) v(F);
            else if (H.startTime <= L)
              v(F), (H.sortIndex = H.expirationTime), c(E, H);
            else break;
            H = u(F);
          }
        }
        function ge(L) {
          if (((K = !1), Me(L), !W))
            if (u(E) !== null) (W = !0), Ve(Ee);
            else {
              var H = u(F);
              H !== null && xe(ge, H.startTime - L);
            }
        }
        function Ee(L, H) {
          (W = !1), K && ((K = !1), ne(Te), (Te = -1)), (oe = !0);
          var O = U;
          try {
            for (
              Me(H), z = u(E);
              z !== null && (!(z.expirationTime > H) || (L && !dt()));

            ) {
              var h = z.callback;
              if (typeof h == "function") {
                (z.callback = null), (U = z.priorityLevel);
                var N = h(z.expirationTime <= H);
                (H = i.unstable_now()),
                  typeof N == "function"
                    ? (z.callback = N)
                    : z === u(E) && v(E),
                  Me(H);
              } else v(E);
              z = u(E);
            }
            if (z !== null) var G = !0;
            else {
              var Z = u(F);
              Z !== null && xe(ge, Z.startTime - H), (G = !1);
            }
            return G;
          } finally {
            (z = null), (U = O), (oe = !1);
          }
        }
        var Ne = !1,
          _e = null,
          Te = -1,
          He = 5,
          Ze = -1;
        function dt() {
          return !(i.unstable_now() - Ze < He);
        }
        function qe() {
          if (_e !== null) {
            var L = i.unstable_now();
            Ze = L;
            var H = !0;
            try {
              H = _e(!0, L);
            } finally {
              H ? me() : ((Ne = !1), (_e = null));
            }
          } else Ne = !1;
        }
        var me;
        if (typeof we == "function")
          me = function () {
            we(qe);
          };
        else if (typeof MessageChannel < "u") {
          var $e = new MessageChannel(),
            yt = $e.port2;
          ($e.port1.onmessage = qe),
            (me = function () {
              yt.postMessage(null);
            });
        } else
          me = function () {
            Q(qe, 0);
          };
        function Ve(L) {
          (_e = L), Ne || ((Ne = !0), me());
        }
        function xe(L, H) {
          Te = Q(function () {
            L(i.unstable_now());
          }, H);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            W || oe || ((W = !0), Ve(Ee));
          }),
          (i.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (He = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return U;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return u(E);
          }),
          (i.unstable_next = function (L) {
            switch (U) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = U;
            }
            var O = U;
            U = H;
            try {
              return L();
            } finally {
              U = O;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (L, H) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var O = U;
            U = L;
            try {
              return H();
            } finally {
              U = O;
            }
          }),
          (i.unstable_scheduleCallback = function (L, H, O) {
            var h = i.unstable_now();
            switch (
              (typeof O == "object" && O !== null
                ? ((O = O.delay),
                  (O = typeof O == "number" && 0 < O ? h + O : h))
                : (O = h),
              L)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = O + N),
              (L = {
                id: P++,
                callback: H,
                priorityLevel: L,
                startTime: O,
                expirationTime: N,
                sortIndex: -1,
              }),
              O > h
                ? ((L.sortIndex = O),
                  c(F, L),
                  u(E) === null &&
                    L === u(F) &&
                    (K ? (ne(Te), (Te = -1)) : (K = !0), xe(ge, O - h)))
                : ((L.sortIndex = N), c(E, L), W || oe || ((W = !0), Ve(Ee))),
              L
            );
          }),
          (i.unstable_shouldYield = dt),
          (i.unstable_wrapCallback = function (L) {
            var H = U;
            return function () {
              var O = U;
              U = H;
              try {
                return L.apply(this, arguments);
              } finally {
                U = O;
              }
            };
          });
      })(ts)),
    ts
  );
}
var fc;
function ep() {
  return fc || ((fc = 1), (es.exports = Jf())), es.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc;
function tp() {
  if (pc) return Xe;
  pc = 1;
  var i = is(),
    c = ep();
  function u(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var v = new Set(),
    m = {};
  function y(e, t) {
    k(e, t), k(e + "Capture", t);
  }
  function k(e, t) {
    for (m[e] = t, e = 0; e < t.length; e++) v.add(t[e]);
  }
  var R = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    E = Object.prototype.hasOwnProperty,
    F =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    P = {},
    z = {};
  function U(e) {
    return E.call(z, e)
      ? !0
      : E.call(P, e)
      ? !1
      : F.test(e)
      ? (z[e] = !0)
      : ((P[e] = !0), !1);
  }
  function oe(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function W(e, t, n, r) {
    if (t === null || typeof t > "u" || oe(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
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
  function K(e, t, n, r, l, o, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = a);
  }
  var Q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Q[e] = new K(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Q[t] = new K(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      Q[e] = new K(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Q[e] = new K(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Q[e] = new K(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Q[e] = new K(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Q[e] = new K(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Q[e] = new K(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Q[e] = new K(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var ne = /[\-:]([a-z])/g;
  function we(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(ne, we);
      Q[t] = new K(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ne, we);
        Q[t] = new K(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(ne, we);
      Q[t] = new K(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Q[e] = new K(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Q.xlinkHref = new K(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Q[e] = new K(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Me(e, t, n, r) {
    var l = Q.hasOwnProperty(t) ? Q[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (W(t, n, l, r) && (n = null),
      r || l === null
        ? U(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ge = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ee = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    _e = Symbol.for("react.fragment"),
    Te = Symbol.for("react.strict_mode"),
    He = Symbol.for("react.profiler"),
    Ze = Symbol.for("react.provider"),
    dt = Symbol.for("react.context"),
    qe = Symbol.for("react.forward_ref"),
    me = Symbol.for("react.suspense"),
    $e = Symbol.for("react.suspense_list"),
    yt = Symbol.for("react.memo"),
    Ve = Symbol.for("react.lazy"),
    xe = Symbol.for("react.offscreen"),
    L = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (L && e[L]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var O = Object.assign,
    h;
  function N(e) {
    if (h === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        h = (t && t[1]) || "";
      }
    return (
      `
` +
      h +
      e
    );
  }
  var G = !1;
  function Z(e, t) {
    if (!e || G) return "";
    G = !0;
    var n = Error.prepareStackTrace;
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
          } catch (w) {
            var r = w;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (w) {
            r = w;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (w) {
          r = w;
        }
        e();
      }
    } catch (w) {
      if (w && r && typeof w.stack == "string") {
        for (
          var l = w.stack.split(`
`),
            o = r.stack.split(`
`),
            a = l.length - 1,
            d = o.length - 1;
          1 <= a && 0 <= d && l[a] !== o[d];

        )
          d--;
        for (; 1 <= a && 0 <= d; a--, d--)
          if (l[a] !== o[d]) {
            if (a !== 1 || d !== 1)
              do
                if ((a--, d--, 0 > d || l[a] !== o[d])) {
                  var f =
                    `
` + l[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      f.includes("<anonymous>") &&
                      (f = f.replace("<anonymous>", e.displayName)),
                    f
                  );
                }
              while (1 <= a && 0 <= d);
            break;
          }
      }
    } finally {
      (G = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function J(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Z(e.type, !1)), e;
      case 11:
        return (e = Z(e.type.render, !1)), e;
      case 1:
        return (e = Z(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case _e:
        return "Fragment";
      case Ne:
        return "Portal";
      case He:
        return "Profiler";
      case Te:
        return "StrictMode";
      case me:
        return "Suspense";
      case $e:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case dt:
          return (e.displayName || "Context") + ".Consumer";
        case Ze:
          return (e._context.displayName || "Context") + ".Provider";
        case qe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case yt:
          return (
            (t = e.displayName || null), t !== null ? t : ee(e.type) || "Memo"
          );
        case Ve:
          (t = e._payload), (e = e._init);
          try {
            return ee(e(t));
          } catch {}
      }
    return null;
  }
  function ae(e) {
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
        return ee(t);
      case 8:
        return t === Te ? "StrictMode" : "Mode";
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
  function re(e) {
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
  function fe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Je(e) {
    var t = fe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (a) {
            (r = "" + a), o.call(this, a);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (a) {
            r = "" + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Or(e) {
    e._valueTracker || (e._valueTracker = Je(e));
  }
  function ps(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = fe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Fr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ro(e, t) {
    var n = t.checked;
    return O({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ms(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = re(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function hs(e, t) {
    (t = t.checked), t != null && Me(e, "checked", t, !1);
  }
  function lo(e, t) {
    hs(e, t);
    var n = re(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? oo(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && oo(e, t.type, re(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function vs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function oo(e, t, n) {
    (t !== "number" || Fr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Kn = Array.isArray;
  function xn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + re(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function io(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return O({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function gs(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(u(92));
        if (Kn(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: re(n) };
  }
  function xs(e, t) {
    var n = re(t.value),
      r = re(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function ys(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ws(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function so(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ws(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Dr,
    ks = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Dr = Dr || document.createElement("div"),
            Dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Dr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Yn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gn = {
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
    Jc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Gn).forEach(function (e) {
    Jc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]);
    });
  });
  function Ss(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Gn.hasOwnProperty(e) && Gn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Ns(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ss(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var ed = O(
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
  function ao(e, t) {
    if (t) {
      if (ed[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function uo(e, t) {
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
  var co = null;
  function fo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var po = null,
    yn = null,
    wn = null;
  function js(e) {
    if ((e = gr(e))) {
      if (typeof po != "function") throw Error(u(280));
      var t = e.stateNode;
      t && ((t = il(t)), po(e.stateNode, e.type, t));
    }
  }
  function Es(e) {
    yn ? (wn ? wn.push(e) : (wn = [e])) : (yn = e);
  }
  function _s() {
    if (yn) {
      var e = yn,
        t = wn;
      if (((wn = yn = null), js(e), t)) for (e = 0; e < t.length; e++) js(t[e]);
    }
  }
  function Cs(e, t) {
    return e(t);
  }
  function Rs() {}
  var mo = !1;
  function Ts(e, t, n) {
    if (mo) return e(t, n);
    mo = !0;
    try {
      return Cs(e, t, n);
    } finally {
      (mo = !1), (yn !== null || wn !== null) && (Rs(), _s());
    }
  }
  function Xn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = il(n);
    if (r === null) return null;
    n = r[t];
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
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var ho = !1;
  if (R)
    try {
      var Zn = {};
      Object.defineProperty(Zn, "passive", {
        get: function () {
          ho = !0;
        },
      }),
        window.addEventListener("test", Zn, Zn),
        window.removeEventListener("test", Zn, Zn);
    } catch {
      ho = !1;
    }
  function td(e, t, n, r, l, o, a, d, f) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, w);
    } catch (j) {
      this.onError(j);
    }
  }
  var qn = !1,
    Ar = null,
    Ir = !1,
    vo = null,
    nd = {
      onError: function (e) {
        (qn = !0), (Ar = e);
      },
    };
  function rd(e, t, n, r, l, o, a, d, f) {
    (qn = !1), (Ar = null), td.apply(nd, arguments);
  }
  function ld(e, t, n, r, l, o, a, d, f) {
    if ((rd.apply(this, arguments), qn)) {
      if (qn) {
        var w = Ar;
        (qn = !1), (Ar = null);
      } else throw Error(u(198));
      Ir || ((Ir = !0), (vo = w));
    }
  }
  function rn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ls(e) {
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
  function Ps(e) {
    if (rn(e) !== e) throw Error(u(188));
  }
  function od(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = rn(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Ps(l), e;
          if (o === r) return Ps(l), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var a = !1, d = l.child; d; ) {
          if (d === n) {
            (a = !0), (n = l), (r = o);
            break;
          }
          if (d === r) {
            (a = !0), (r = l), (n = o);
            break;
          }
          d = d.sibling;
        }
        if (!a) {
          for (d = o.child; d; ) {
            if (d === n) {
              (a = !0), (n = o), (r = l);
              break;
            }
            if (d === r) {
              (a = !0), (r = o), (n = l);
              break;
            }
            d = d.sibling;
          }
          if (!a) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function zs(e) {
    return (e = od(e)), e !== null ? Ms(e) : null;
  }
  function Ms(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ms(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var $s = c.unstable_scheduleCallback,
    Os = c.unstable_cancelCallback,
    id = c.unstable_shouldYield,
    sd = c.unstable_requestPaint,
    ke = c.unstable_now,
    ad = c.unstable_getCurrentPriorityLevel,
    go = c.unstable_ImmediatePriority,
    Fs = c.unstable_UserBlockingPriority,
    br = c.unstable_NormalPriority,
    ud = c.unstable_LowPriority,
    Ds = c.unstable_IdlePriority,
    Br = null,
    wt = null;
  function cd(e) {
    if (wt && typeof wt.onCommitFiberRoot == "function")
      try {
        wt.onCommitFiberRoot(Br, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ft = Math.clz32 ? Math.clz32 : pd,
    dd = Math.log,
    fd = Math.LN2;
  function pd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((dd(e) / fd) | 0)) | 0;
  }
  var Ur = 64,
    Hr = 4194304;
  function Jn(e) {
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
  function Vr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var d = a & ~l;
      d !== 0 ? (r = Jn(d)) : ((o &= a), o !== 0 && (r = Jn(o)));
    } else (a = n & ~l), a !== 0 ? (r = Jn(a)) : o !== 0 && (r = Jn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ft(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function md(e, t) {
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
  function hd(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var a = 31 - ft(o),
        d = 1 << a,
        f = l[a];
      f === -1
        ? ((d & n) === 0 || (d & r) !== 0) && (l[a] = md(d, t))
        : f <= t && (e.expiredLanes |= d),
        (o &= ~d);
    }
  }
  function xo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function As() {
    var e = Ur;
    return (Ur <<= 1), (Ur & 4194240) === 0 && (Ur = 64), e;
  }
  function yo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function er(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ft(t)),
      (e[t] = n);
  }
  function vd(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ft(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function wo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ft(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var le = 0;
  function Is(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var bs,
    ko,
    Bs,
    Us,
    Hs,
    So = !1,
    Wr = [],
    Dt = null,
    At = null,
    It = null,
    tr = new Map(),
    nr = new Map(),
    bt = [],
    gd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Vs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dt = null;
        break;
      case "dragenter":
      case "dragleave":
        At = null;
        break;
      case "mouseover":
      case "mouseout":
        It = null;
        break;
      case "pointerover":
      case "pointerout":
        tr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nr.delete(t.pointerId);
    }
  }
  function rr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = gr(t)), t !== null && ko(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function xd(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Dt = rr(Dt, e, t, n, r, l)), !0;
      case "dragenter":
        return (At = rr(At, e, t, n, r, l)), !0;
      case "mouseover":
        return (It = rr(It, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return tr.set(o, rr(tr.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), nr.set(o, rr(nr.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Ws(e) {
    var t = ln(e.target);
    if (t !== null) {
      var n = rn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ls(n)), t !== null)) {
            (e.blockedOn = t),
              Hs(e.priority, function () {
                Bs(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Qr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (co = r), n.target.dispatchEvent(r), (co = null);
      } else return (t = gr(n)), t !== null && ko(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Qs(e, t, n) {
    Qr(e) && n.delete(t);
  }
  function yd() {
    (So = !1),
      Dt !== null && Qr(Dt) && (Dt = null),
      At !== null && Qr(At) && (At = null),
      It !== null && Qr(It) && (It = null),
      tr.forEach(Qs),
      nr.forEach(Qs);
  }
  function lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      So ||
        ((So = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, yd)));
  }
  function or(e) {
    function t(l) {
      return lr(l, e);
    }
    if (0 < Wr.length) {
      lr(Wr[0], e);
      for (var n = 1; n < Wr.length; n++) {
        var r = Wr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Dt !== null && lr(Dt, e),
        At !== null && lr(At, e),
        It !== null && lr(It, e),
        tr.forEach(t),
        nr.forEach(t),
        n = 0;
      n < bt.length;
      n++
    )
      (r = bt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < bt.length && ((n = bt[0]), n.blockedOn === null); )
      Ws(n), n.blockedOn === null && bt.shift();
  }
  var kn = ge.ReactCurrentBatchConfig,
    Kr = !0;
  function wd(e, t, n, r) {
    var l = le,
      o = kn.transition;
    kn.transition = null;
    try {
      (le = 1), No(e, t, n, r);
    } finally {
      (le = l), (kn.transition = o);
    }
  }
  function kd(e, t, n, r) {
    var l = le,
      o = kn.transition;
    kn.transition = null;
    try {
      (le = 4), No(e, t, n, r);
    } finally {
      (le = l), (kn.transition = o);
    }
  }
  function No(e, t, n, r) {
    if (Kr) {
      var l = jo(e, t, n, r);
      if (l === null) Bo(e, t, r, Yr, n), Vs(e, r);
      else if (xd(l, e, t, n, r)) r.stopPropagation();
      else if ((Vs(e, r), t & 4 && -1 < gd.indexOf(e))) {
        for (; l !== null; ) {
          var o = gr(l);
          if (
            (o !== null && bs(o),
            (o = jo(e, t, n, r)),
            o === null && Bo(e, t, r, Yr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Bo(e, t, r, null, n);
    }
  }
  var Yr = null;
  function jo(e, t, n, r) {
    if (((Yr = null), (e = fo(r)), (e = ln(e)), e !== null))
      if (((t = rn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ls(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Yr = e), null;
  }
  function Ks(e) {
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
        switch (ad()) {
          case go:
            return 1;
          case Fs:
            return 4;
          case br:
          case ud:
            return 16;
          case Ds:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Bt = null,
    Eo = null,
    Gr = null;
  function Ys() {
    if (Gr) return Gr;
    var e,
      t = Eo,
      n = t.length,
      r,
      l = "value" in Bt ? Bt.value : Bt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === l[o - r]; r++);
    return (Gr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Xr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Zr() {
    return !0;
  }
  function Gs() {
    return !1;
  }
  function et(e) {
    function t(n, r, l, o, a) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = a),
        (this.currentTarget = null);
      for (var d in e)
        e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(o) : o[d]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Zr
          : Gs),
        (this.isPropagationStopped = Gs),
        this
      );
    }
    return (
      O(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Zr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Zr));
        },
        persist: function () {},
        isPersistent: Zr,
      }),
      t
    );
  }
  var Sn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    _o = et(Sn),
    ir = O({}, Sn, { view: 0, detail: 0 }),
    Sd = et(ir),
    Co,
    Ro,
    sr,
    qr = O({}, ir, {
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
      getModifierState: Lo,
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
          : (e !== sr &&
              (sr && e.type === "mousemove"
                ? ((Co = e.screenX - sr.screenX), (Ro = e.screenY - sr.screenY))
                : (Ro = Co = 0),
              (sr = e)),
            Co);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ro;
      },
    }),
    Xs = et(qr),
    Nd = O({}, qr, { dataTransfer: 0 }),
    jd = et(Nd),
    Ed = O({}, ir, { relatedTarget: 0 }),
    To = et(Ed),
    _d = O({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cd = et(_d),
    Rd = O({}, Sn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Td = et(Rd),
    Ld = O({}, Sn, { data: 0 }),
    Zs = et(Ld),
    Pd = {
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
    zd = {
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
    Md = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function $d(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Md[e])
      ? !!t[e]
      : !1;
  }
  function Lo() {
    return $d;
  }
  var Od = O({}, ir, {
      key: function (e) {
        if (e.key) {
          var t = Pd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Xr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? zd[e.keyCode] || "Unidentified"
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
      getModifierState: Lo,
      charCode: function (e) {
        return e.type === "keypress" ? Xr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Xr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Fd = et(Od),
    Dd = O({}, qr, {
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
    qs = et(Dd),
    Ad = O({}, ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Lo,
    }),
    Id = et(Ad),
    bd = O({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bd = et(bd),
    Ud = O({}, qr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
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
    Hd = et(Ud),
    Vd = [9, 13, 27, 32],
    Po = R && "CompositionEvent" in window,
    ar = null;
  R && "documentMode" in document && (ar = document.documentMode);
  var Wd = R && "TextEvent" in window && !ar,
    Js = R && (!Po || (ar && 8 < ar && 11 >= ar)),
    ea = " ",
    ta = !1;
  function na(e, t) {
    switch (e) {
      case "keyup":
        return Vd.indexOf(t.keyCode) !== -1;
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
  function ra(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Nn = !1;
  function Qd(e, t) {
    switch (e) {
      case "compositionend":
        return ra(t);
      case "keypress":
        return t.which !== 32 ? null : ((ta = !0), ea);
      case "textInput":
        return (e = t.data), e === ea && ta ? null : e;
      default:
        return null;
    }
  }
  function Kd(e, t) {
    if (Nn)
      return e === "compositionend" || (!Po && na(e, t))
        ? ((e = Ys()), (Gr = Eo = Bt = null), (Nn = !1), e)
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
        return Js && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Yd = {
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
  function la(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yd[e.type] : t === "textarea";
  }
  function oa(e, t, n, r) {
    Es(r),
      (t = rl(t, "onChange")),
      0 < t.length &&
        ((n = new _o("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var ur = null,
    cr = null;
  function Gd(e) {
    Na(e, 0);
  }
  function Jr(e) {
    var t = Rn(e);
    if (ps(t)) return e;
  }
  function Xd(e, t) {
    if (e === "change") return t;
  }
  var ia = !1;
  if (R) {
    var zo;
    if (R) {
      var Mo = "oninput" in document;
      if (!Mo) {
        var sa = document.createElement("div");
        sa.setAttribute("oninput", "return;"),
          (Mo = typeof sa.oninput == "function");
      }
      zo = Mo;
    } else zo = !1;
    ia = zo && (!document.documentMode || 9 < document.documentMode);
  }
  function aa() {
    ur && (ur.detachEvent("onpropertychange", ua), (cr = ur = null));
  }
  function ua(e) {
    if (e.propertyName === "value" && Jr(cr)) {
      var t = [];
      oa(t, cr, e, fo(e)), Ts(Gd, t);
    }
  }
  function Zd(e, t, n) {
    e === "focusin"
      ? (aa(), (ur = t), (cr = n), ur.attachEvent("onpropertychange", ua))
      : e === "focusout" && aa();
  }
  function qd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Jr(cr);
  }
  function Jd(e, t) {
    if (e === "click") return Jr(t);
  }
  function ef(e, t) {
    if (e === "input" || e === "change") return Jr(t);
  }
  function tf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pt = typeof Object.is == "function" ? Object.is : tf;
  function dr(e, t) {
    if (pt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!E.call(t, l) || !pt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ca(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function da(e, t) {
    var n = ca(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ca(n);
    }
  }
  function fa(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? fa(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function pa() {
    for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fr(e.document);
    }
    return t;
  }
  function $o(e) {
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
  function nf(e) {
    var t = pa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      fa(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && $o(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = da(n, o));
          var a = da(n, r);
          l &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var rf = R && "documentMode" in document && 11 >= document.documentMode,
    jn = null,
    Oo = null,
    fr = null,
    Fo = !1;
  function ma(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fo ||
      jn == null ||
      jn !== Fr(r) ||
      ((r = jn),
      "selectionStart" in r && $o(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (fr && dr(fr, r)) ||
        ((fr = r),
        (r = rl(Oo, "onSelect")),
        0 < r.length &&
          ((t = new _o("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = jn))));
  }
  function el(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var En = {
      animationend: el("Animation", "AnimationEnd"),
      animationiteration: el("Animation", "AnimationIteration"),
      animationstart: el("Animation", "AnimationStart"),
      transitionend: el("Transition", "TransitionEnd"),
    },
    Do = {},
    ha = {};
  R &&
    ((ha = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete En.animationend.animation,
      delete En.animationiteration.animation,
      delete En.animationstart.animation),
    "TransitionEvent" in window || delete En.transitionend.transition);
  function tl(e) {
    if (Do[e]) return Do[e];
    if (!En[e]) return e;
    var t = En[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ha) return (Do[e] = t[n]);
    return e;
  }
  var va = tl("animationend"),
    ga = tl("animationiteration"),
    xa = tl("animationstart"),
    ya = tl("transitionend"),
    wa = new Map(),
    ka =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ut(e, t) {
    wa.set(e, t), y(t, [e]);
  }
  for (var Ao = 0; Ao < ka.length; Ao++) {
    var Io = ka[Ao],
      lf = Io.toLowerCase(),
      of = Io[0].toUpperCase() + Io.slice(1);
    Ut(lf, "on" + of);
  }
  Ut(va, "onAnimationEnd"),
    Ut(ga, "onAnimationIteration"),
    Ut(xa, "onAnimationStart"),
    Ut("dblclick", "onDoubleClick"),
    Ut("focusin", "onFocus"),
    Ut("focusout", "onBlur"),
    Ut(ya, "onTransitionEnd"),
    k("onMouseEnter", ["mouseout", "mouseover"]),
    k("onMouseLeave", ["mouseout", "mouseover"]),
    k("onPointerEnter", ["pointerout", "pointerover"]),
    k("onPointerLeave", ["pointerout", "pointerover"]),
    y(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    y(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    y("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    y(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    y(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    y(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var pr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    sf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(pr)
    );
  function Sa(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), ld(r, t, void 0, e), (e.currentTarget = null);
  }
  function Na(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var d = r[a],
              f = d.instance,
              w = d.currentTarget;
            if (((d = d.listener), f !== o && l.isPropagationStopped()))
              break e;
            Sa(l, d, w), (o = f);
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((d = r[a]),
              (f = d.instance),
              (w = d.currentTarget),
              (d = d.listener),
              f !== o && l.isPropagationStopped())
            )
              break e;
            Sa(l, d, w), (o = f);
          }
      }
    }
    if (Ir) throw ((e = vo), (Ir = !1), (vo = null), e);
  }
  function ce(e, t) {
    var n = t[Ko];
    n === void 0 && (n = t[Ko] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ja(t, e, 2, !1), n.add(r));
  }
  function bo(e, t, n) {
    var r = 0;
    t && (r |= 4), ja(n, e, r, t);
  }
  var nl = "_reactListening" + Math.random().toString(36).slice(2);
  function mr(e) {
    if (!e[nl]) {
      (e[nl] = !0),
        v.forEach(function (n) {
          n !== "selectionchange" && (sf.has(n) || bo(n, !1, e), bo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[nl] || ((t[nl] = !0), bo("selectionchange", !1, t));
    }
  }
  function ja(e, t, n, r) {
    switch (Ks(t)) {
      case 1:
        var l = wd;
        break;
      case 4:
        l = kd;
        break;
      default:
        l = No;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !ho ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Bo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var d = r.stateNode.containerInfo;
          if (d === l || (d.nodeType === 8 && d.parentNode === l)) break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var f = a.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = a.stateNode.containerInfo),
                f === l || (f.nodeType === 8 && f.parentNode === l))
              )
                return;
              a = a.return;
            }
          for (; d !== null; ) {
            if (((a = ln(d)), a === null)) return;
            if (((f = a.tag), f === 5 || f === 6)) {
              r = o = a;
              continue e;
            }
            d = d.parentNode;
          }
        }
        r = r.return;
      }
    Ts(function () {
      var w = o,
        j = fo(n),
        _ = [];
      e: {
        var S = wa.get(e);
        if (S !== void 0) {
          var M = _o,
            D = e;
          switch (e) {
            case "keypress":
              if (Xr(n) === 0) break e;
            case "keydown":
            case "keyup":
              M = Fd;
              break;
            case "focusin":
              (D = "focus"), (M = To);
              break;
            case "focusout":
              (D = "blur"), (M = To);
              break;
            case "beforeblur":
            case "afterblur":
              M = To;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = Xs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = jd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = Id;
              break;
            case va:
            case ga:
            case xa:
              M = Cd;
              break;
            case ya:
              M = Bd;
              break;
            case "scroll":
              M = Sd;
              break;
            case "wheel":
              M = Hd;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Td;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = qs;
          }
          var A = (t & 4) !== 0,
            Se = !A && e === "scroll",
            g = A ? (S !== null ? S + "Capture" : null) : S;
          A = [];
          for (var p = w, x; p !== null; ) {
            x = p;
            var C = x.stateNode;
            if (
              (x.tag === 5 &&
                C !== null &&
                ((x = C),
                g !== null &&
                  ((C = Xn(p, g)), C != null && A.push(hr(p, C, x)))),
              Se)
            )
              break;
            p = p.return;
          }
          0 < A.length &&
            ((S = new M(S, D, null, n, j)), _.push({ event: S, listeners: A }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((S = e === "mouseover" || e === "pointerover"),
            (M = e === "mouseout" || e === "pointerout"),
            S &&
              n !== co &&
              (D = n.relatedTarget || n.fromElement) &&
              (ln(D) || D[_t]))
          )
            break e;
          if (
            (M || S) &&
            ((S =
              j.window === j
                ? j
                : (S = j.ownerDocument)
                ? S.defaultView || S.parentWindow
                : window),
            M
              ? ((D = n.relatedTarget || n.toElement),
                (M = w),
                (D = D ? ln(D) : null),
                D !== null &&
                  ((Se = rn(D)), D !== Se || (D.tag !== 5 && D.tag !== 6)) &&
                  (D = null))
              : ((M = null), (D = w)),
            M !== D)
          ) {
            if (
              ((A = Xs),
              (C = "onMouseLeave"),
              (g = "onMouseEnter"),
              (p = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((A = qs),
                (C = "onPointerLeave"),
                (g = "onPointerEnter"),
                (p = "pointer")),
              (Se = M == null ? S : Rn(M)),
              (x = D == null ? S : Rn(D)),
              (S = new A(C, p + "leave", M, n, j)),
              (S.target = Se),
              (S.relatedTarget = x),
              (C = null),
              ln(j) === w &&
                ((A = new A(g, p + "enter", D, n, j)),
                (A.target = x),
                (A.relatedTarget = Se),
                (C = A)),
              (Se = C),
              M && D)
            )
              t: {
                for (A = M, g = D, p = 0, x = A; x; x = _n(x)) p++;
                for (x = 0, C = g; C; C = _n(C)) x++;
                for (; 0 < p - x; ) (A = _n(A)), p--;
                for (; 0 < x - p; ) (g = _n(g)), x--;
                for (; p--; ) {
                  if (A === g || (g !== null && A === g.alternate)) break t;
                  (A = _n(A)), (g = _n(g));
                }
                A = null;
              }
            else A = null;
            M !== null && Ea(_, S, M, A, !1),
              D !== null && Se !== null && Ea(_, Se, D, A, !0);
          }
        }
        e: {
          if (
            ((S = w ? Rn(w) : window),
            (M = S.nodeName && S.nodeName.toLowerCase()),
            M === "select" || (M === "input" && S.type === "file"))
          )
            var I = Xd;
          else if (la(S))
            if (ia) I = ef;
            else {
              I = qd;
              var b = Zd;
            }
          else
            (M = S.nodeName) &&
              M.toLowerCase() === "input" &&
              (S.type === "checkbox" || S.type === "radio") &&
              (I = Jd);
          if (I && (I = I(e, w))) {
            oa(_, I, n, j);
            break e;
          }
          b && b(e, S, w),
            e === "focusout" &&
              (b = S._wrapperState) &&
              b.controlled &&
              S.type === "number" &&
              oo(S, "number", S.value);
        }
        switch (((b = w ? Rn(w) : window), e)) {
          case "focusin":
            (la(b) || b.contentEditable === "true") &&
              ((jn = b), (Oo = w), (fr = null));
            break;
          case "focusout":
            fr = Oo = jn = null;
            break;
          case "mousedown":
            Fo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Fo = !1), ma(_, n, j);
            break;
          case "selectionchange":
            if (rf) break;
          case "keydown":
          case "keyup":
            ma(_, n, j);
        }
        var B;
        if (Po)
          e: {
            switch (e) {
              case "compositionstart":
                var V = "onCompositionStart";
                break e;
              case "compositionend":
                V = "onCompositionEnd";
                break e;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break e;
            }
            V = void 0;
          }
        else
          Nn
            ? na(e, n) && (V = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (V = "onCompositionStart");
        V &&
          (Js &&
            n.locale !== "ko" &&
            (Nn || V !== "onCompositionStart"
              ? V === "onCompositionEnd" && Nn && (B = Ys())
              : ((Bt = j),
                (Eo = "value" in Bt ? Bt.value : Bt.textContent),
                (Nn = !0))),
          (b = rl(w, V)),
          0 < b.length &&
            ((V = new Zs(V, e, null, n, j)),
            _.push({ event: V, listeners: b }),
            B ? (V.data = B) : ((B = ra(n)), B !== null && (V.data = B)))),
          (B = Wd ? Qd(e, n) : Kd(e, n)) &&
            ((w = rl(w, "onBeforeInput")),
            0 < w.length &&
              ((j = new Zs("onBeforeInput", "beforeinput", null, n, j)),
              _.push({ event: j, listeners: w }),
              (j.data = B)));
      }
      Na(_, t);
    });
  }
  function hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function rl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Xn(e, n)),
        o != null && r.unshift(hr(e, o, l)),
        (o = Xn(e, t)),
        o != null && r.push(hr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function _n(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ea(e, t, n, r, l) {
    for (var o = t._reactName, a = []; n !== null && n !== r; ) {
      var d = n,
        f = d.alternate,
        w = d.stateNode;
      if (f !== null && f === r) break;
      d.tag === 5 &&
        w !== null &&
        ((d = w),
        l
          ? ((f = Xn(n, o)), f != null && a.unshift(hr(n, f, d)))
          : l || ((f = Xn(n, o)), f != null && a.push(hr(n, f, d)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var af = /\r\n?/g,
    uf = /\u0000|\uFFFD/g;
  function _a(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        af,
        `
`
      )
      .replace(uf, "");
  }
  function ll(e, t, n) {
    if (((t = _a(t)), _a(e) !== t && n)) throw Error(u(425));
  }
  function ol() {}
  var Uo = null,
    Ho = null;
  function Vo(e, t) {
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
  var Wo = typeof setTimeout == "function" ? setTimeout : void 0,
    cf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ca = typeof Promise == "function" ? Promise : void 0,
    df =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ca < "u"
        ? function (e) {
            return Ca.resolve(null).then(e).catch(ff);
          }
        : Wo;
  function ff(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Qo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), or(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    or(t);
  }
  function Ht(e) {
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
  function Ra(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Cn = Math.random().toString(36).slice(2),
    kt = "__reactFiber$" + Cn,
    vr = "__reactProps$" + Cn,
    _t = "__reactContainer$" + Cn,
    Ko = "__reactEvents$" + Cn,
    pf = "__reactListeners$" + Cn,
    mf = "__reactHandles$" + Cn;
  function ln(e) {
    var t = e[kt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[_t] || n[kt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ra(e); e !== null; ) {
            if ((n = e[kt])) return n;
            e = Ra(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function gr(e) {
    return (
      (e = e[kt] || e[_t]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Rn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function il(e) {
    return e[vr] || null;
  }
  var Yo = [],
    Tn = -1;
  function Vt(e) {
    return { current: e };
  }
  function de(e) {
    0 > Tn || ((e.current = Yo[Tn]), (Yo[Tn] = null), Tn--);
  }
  function ue(e, t) {
    Tn++, (Yo[Tn] = e.current), (e.current = t);
  }
  var Wt = {},
    De = Vt(Wt),
    We = Vt(!1),
    on = Wt;
  function Ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Wt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Qe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function sl() {
    de(We), de(De);
  }
  function Ta(e, t, n) {
    if (De.current !== Wt) throw Error(u(168));
    ue(De, t), ue(We, n);
  }
  function La(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, ae(e) || "Unknown", l));
    return O({}, n, r);
  }
  function al(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Wt),
      (on = De.current),
      ue(De, e),
      ue(We, We.current),
      !0
    );
  }
  function Pa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n
      ? ((e = La(e, t, on)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        de(We),
        de(De),
        ue(De, e))
      : de(We),
      ue(We, n);
  }
  var Ct = null,
    ul = !1,
    Go = !1;
  function za(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
  }
  function hf(e) {
    (ul = !0), za(e);
  }
  function Qt() {
    if (!Go && Ct !== null) {
      Go = !0;
      var e = 0,
        t = le;
      try {
        var n = Ct;
        for (le = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Ct = null), (ul = !1);
      } catch (l) {
        throw (Ct !== null && (Ct = Ct.slice(e + 1)), $s(go, Qt), l);
      } finally {
        (le = t), (Go = !1);
      }
    }
    return null;
  }
  var Pn = [],
    zn = 0,
    cl = null,
    dl = 0,
    lt = [],
    ot = 0,
    sn = null,
    Rt = 1,
    Tt = "";
  function an(e, t) {
    (Pn[zn++] = dl), (Pn[zn++] = cl), (cl = e), (dl = t);
  }
  function Ma(e, t, n) {
    (lt[ot++] = Rt), (lt[ot++] = Tt), (lt[ot++] = sn), (sn = e);
    var r = Rt;
    e = Tt;
    var l = 32 - ft(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - ft(t) + l;
    if (30 < o) {
      var a = l - (l % 5);
      (o = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (l -= a),
        (Rt = (1 << (32 - ft(t) + l)) | (n << l) | r),
        (Tt = o + e);
    } else (Rt = (1 << o) | (n << l) | r), (Tt = e);
  }
  function Xo(e) {
    e.return !== null && (an(e, 1), Ma(e, 1, 0));
  }
  function Zo(e) {
    for (; e === cl; )
      (cl = Pn[--zn]), (Pn[zn] = null), (dl = Pn[--zn]), (Pn[zn] = null);
    for (; e === sn; )
      (sn = lt[--ot]),
        (lt[ot] = null),
        (Tt = lt[--ot]),
        (lt[ot] = null),
        (Rt = lt[--ot]),
        (lt[ot] = null);
  }
  var tt = null,
    nt = null,
    pe = !1,
    mt = null;
  function $a(e, t) {
    var n = ut(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Oa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (tt = e), (nt = Ht(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (tt = e), (nt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = sn !== null ? { id: Rt, overflow: Tt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ut(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (tt = e),
              (nt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function qo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Jo(e) {
    if (pe) {
      var t = nt;
      if (t) {
        var n = t;
        if (!Oa(e, t)) {
          if (qo(e)) throw Error(u(418));
          t = Ht(n.nextSibling);
          var r = tt;
          t && Oa(e, t)
            ? $a(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (tt = e));
        }
      } else {
        if (qo(e)) throw Error(u(418));
        (e.flags = (e.flags & -4097) | 2), (pe = !1), (tt = e);
      }
    }
  }
  function Fa(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    tt = e;
  }
  function fl(e) {
    if (e !== tt) return !1;
    if (!pe) return Fa(e), (pe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Vo(e.type, e.memoizedProps))),
      t && (t = nt))
    ) {
      if (qo(e)) throw (Da(), Error(u(418)));
      for (; t; ) $a(e, t), (t = Ht(t.nextSibling));
    }
    if ((Fa(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                nt = Ht(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        nt = null;
      }
    } else nt = tt ? Ht(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    for (var e = nt; e; ) e = Ht(e.nextSibling);
  }
  function Mn() {
    (nt = tt = null), (pe = !1);
  }
  function ei(e) {
    mt === null ? (mt = [e]) : mt.push(e);
  }
  var vf = ge.ReactCurrentBatchConfig;
  function xr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (a) {
              var d = l.refs;
              a === null ? delete d[o] : (d[o] = a);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function pl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        u(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Aa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ia(e) {
    function t(g, p) {
      if (e) {
        var x = g.deletions;
        x === null ? ((g.deletions = [p]), (g.flags |= 16)) : x.push(p);
      }
    }
    function n(g, p) {
      if (!e) return null;
      for (; p !== null; ) t(g, p), (p = p.sibling);
      return null;
    }
    function r(g, p) {
      for (g = new Map(); p !== null; )
        p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
      return g;
    }
    function l(g, p) {
      return (g = en(g, p)), (g.index = 0), (g.sibling = null), g;
    }
    function o(g, p, x) {
      return (
        (g.index = x),
        e
          ? ((x = g.alternate),
            x !== null
              ? ((x = x.index), x < p ? ((g.flags |= 2), p) : x)
              : ((g.flags |= 2), p))
          : ((g.flags |= 1048576), p)
      );
    }
    function a(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function d(g, p, x, C) {
      return p === null || p.tag !== 6
        ? ((p = Wi(x, g.mode, C)), (p.return = g), p)
        : ((p = l(p, x)), (p.return = g), p);
    }
    function f(g, p, x, C) {
      var I = x.type;
      return I === _e
        ? j(g, p, x.props.children, C, x.key)
        : p !== null &&
          (p.elementType === I ||
            (typeof I == "object" &&
              I !== null &&
              I.$$typeof === Ve &&
              Aa(I) === p.type))
        ? ((C = l(p, x.props)), (C.ref = xr(g, p, x)), (C.return = g), C)
        : ((C = Dl(x.type, x.key, x.props, null, g.mode, C)),
          (C.ref = xr(g, p, x)),
          (C.return = g),
          C);
    }
    function w(g, p, x, C) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== x.containerInfo ||
        p.stateNode.implementation !== x.implementation
        ? ((p = Qi(x, g.mode, C)), (p.return = g), p)
        : ((p = l(p, x.children || [])), (p.return = g), p);
    }
    function j(g, p, x, C, I) {
      return p === null || p.tag !== 7
        ? ((p = vn(x, g.mode, C, I)), (p.return = g), p)
        : ((p = l(p, x)), (p.return = g), p);
    }
    function _(g, p, x) {
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return (p = Wi("" + p, g.mode, x)), (p.return = g), p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Ee:
            return (
              (x = Dl(p.type, p.key, p.props, null, g.mode, x)),
              (x.ref = xr(g, null, p)),
              (x.return = g),
              x
            );
          case Ne:
            return (p = Qi(p, g.mode, x)), (p.return = g), p;
          case Ve:
            var C = p._init;
            return _(g, C(p._payload), x);
        }
        if (Kn(p) || H(p))
          return (p = vn(p, g.mode, x, null)), (p.return = g), p;
        pl(g, p);
      }
      return null;
    }
    function S(g, p, x, C) {
      var I = p !== null ? p.key : null;
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return I !== null ? null : d(g, p, "" + x, C);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Ee:
            return x.key === I ? f(g, p, x, C) : null;
          case Ne:
            return x.key === I ? w(g, p, x, C) : null;
          case Ve:
            return (I = x._init), S(g, p, I(x._payload), C);
        }
        if (Kn(x) || H(x)) return I !== null ? null : j(g, p, x, C, null);
        pl(g, x);
      }
      return null;
    }
    function M(g, p, x, C, I) {
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return (g = g.get(x) || null), d(p, g, "" + C, I);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Ee:
            return (
              (g = g.get(C.key === null ? x : C.key) || null), f(p, g, C, I)
            );
          case Ne:
            return (
              (g = g.get(C.key === null ? x : C.key) || null), w(p, g, C, I)
            );
          case Ve:
            var b = C._init;
            return M(g, p, x, b(C._payload), I);
        }
        if (Kn(C) || H(C)) return (g = g.get(x) || null), j(p, g, C, I, null);
        pl(p, C);
      }
      return null;
    }
    function D(g, p, x, C) {
      for (
        var I = null, b = null, B = p, V = (p = 0), ze = null;
        B !== null && V < x.length;
        V++
      ) {
        B.index > V ? ((ze = B), (B = null)) : (ze = B.sibling);
        var te = S(g, B, x[V], C);
        if (te === null) {
          B === null && (B = ze);
          break;
        }
        e && B && te.alternate === null && t(g, B),
          (p = o(te, p, V)),
          b === null ? (I = te) : (b.sibling = te),
          (b = te),
          (B = ze);
      }
      if (V === x.length) return n(g, B), pe && an(g, V), I;
      if (B === null) {
        for (; V < x.length; V++)
          (B = _(g, x[V], C)),
            B !== null &&
              ((p = o(B, p, V)),
              b === null ? (I = B) : (b.sibling = B),
              (b = B));
        return pe && an(g, V), I;
      }
      for (B = r(g, B); V < x.length; V++)
        (ze = M(B, g, V, x[V], C)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              B.delete(ze.key === null ? V : ze.key),
            (p = o(ze, p, V)),
            b === null ? (I = ze) : (b.sibling = ze),
            (b = ze));
      return (
        e &&
          B.forEach(function (tn) {
            return t(g, tn);
          }),
        pe && an(g, V),
        I
      );
    }
    function A(g, p, x, C) {
      var I = H(x);
      if (typeof I != "function") throw Error(u(150));
      if (((x = I.call(x)), x == null)) throw Error(u(151));
      for (
        var b = (I = null), B = p, V = (p = 0), ze = null, te = x.next();
        B !== null && !te.done;
        V++, te = x.next()
      ) {
        B.index > V ? ((ze = B), (B = null)) : (ze = B.sibling);
        var tn = S(g, B, te.value, C);
        if (tn === null) {
          B === null && (B = ze);
          break;
        }
        e && B && tn.alternate === null && t(g, B),
          (p = o(tn, p, V)),
          b === null ? (I = tn) : (b.sibling = tn),
          (b = tn),
          (B = ze);
      }
      if (te.done) return n(g, B), pe && an(g, V), I;
      if (B === null) {
        for (; !te.done; V++, te = x.next())
          (te = _(g, te.value, C)),
            te !== null &&
              ((p = o(te, p, V)),
              b === null ? (I = te) : (b.sibling = te),
              (b = te));
        return pe && an(g, V), I;
      }
      for (B = r(g, B); !te.done; V++, te = x.next())
        (te = M(B, g, V, te.value, C)),
          te !== null &&
            (e &&
              te.alternate !== null &&
              B.delete(te.key === null ? V : te.key),
            (p = o(te, p, V)),
            b === null ? (I = te) : (b.sibling = te),
            (b = te));
      return (
        e &&
          B.forEach(function (Gf) {
            return t(g, Gf);
          }),
        pe && an(g, V),
        I
      );
    }
    function Se(g, p, x, C) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === _e &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case Ee:
            e: {
              for (var I = x.key, b = p; b !== null; ) {
                if (b.key === I) {
                  if (((I = x.type), I === _e)) {
                    if (b.tag === 7) {
                      n(g, b.sibling),
                        (p = l(b, x.props.children)),
                        (p.return = g),
                        (g = p);
                      break e;
                    }
                  } else if (
                    b.elementType === I ||
                    (typeof I == "object" &&
                      I !== null &&
                      I.$$typeof === Ve &&
                      Aa(I) === b.type)
                  ) {
                    n(g, b.sibling),
                      (p = l(b, x.props)),
                      (p.ref = xr(g, b, x)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                  n(g, b);
                  break;
                } else t(g, b);
                b = b.sibling;
              }
              x.type === _e
                ? ((p = vn(x.props.children, g.mode, C, x.key)),
                  (p.return = g),
                  (g = p))
                : ((C = Dl(x.type, x.key, x.props, null, g.mode, C)),
                  (C.ref = xr(g, p, x)),
                  (C.return = g),
                  (g = C));
            }
            return a(g);
          case Ne:
            e: {
              for (b = x.key; p !== null; ) {
                if (p.key === b)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === x.containerInfo &&
                    p.stateNode.implementation === x.implementation
                  ) {
                    n(g, p.sibling),
                      (p = l(p, x.children || [])),
                      (p.return = g),
                      (g = p);
                    break e;
                  } else {
                    n(g, p);
                    break;
                  }
                else t(g, p);
                p = p.sibling;
              }
              (p = Qi(x, g.mode, C)), (p.return = g), (g = p);
            }
            return a(g);
          case Ve:
            return (b = x._init), Se(g, p, b(x._payload), C);
        }
        if (Kn(x)) return D(g, p, x, C);
        if (H(x)) return A(g, p, x, C);
        pl(g, x);
      }
      return (typeof x == "string" && x !== "") || typeof x == "number"
        ? ((x = "" + x),
          p !== null && p.tag === 6
            ? (n(g, p.sibling), (p = l(p, x)), (p.return = g), (g = p))
            : (n(g, p), (p = Wi(x, g.mode, C)), (p.return = g), (g = p)),
          a(g))
        : n(g, p);
    }
    return Se;
  }
  var $n = Ia(!0),
    ba = Ia(!1),
    ml = Vt(null),
    hl = null,
    On = null,
    ti = null;
  function ni() {
    ti = On = hl = null;
  }
  function ri(e) {
    var t = ml.current;
    de(ml), (e._currentValue = t);
  }
  function li(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Fn(e, t) {
    (hl = e),
      (ti = On = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ke = !0), (e.firstContext = null));
  }
  function it(e) {
    var t = e._currentValue;
    if (ti !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
        if (hl === null) throw Error(u(308));
        (On = e), (hl.dependencies = { lanes: 0, firstContext: e });
      } else On = On.next = e;
    return t;
  }
  var un = null;
  function oi(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  function Ba(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), oi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Lt(e, r)
    );
  }
  function Lt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Kt = !1;
  function ii(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ua(e, t) {
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
  function Pt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Yt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (q & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Lt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), oi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Lt(e, n)
    );
  }
  function vl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), wo(e, n);
    }
  }
  function Ha(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = a) : (o = o.next = a), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function gl(e, t, n, r) {
    var l = e.updateQueue;
    Kt = !1;
    var o = l.firstBaseUpdate,
      a = l.lastBaseUpdate,
      d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var f = d,
        w = f.next;
      (f.next = null), a === null ? (o = w) : (a.next = w), (a = f);
      var j = e.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (d = j.lastBaseUpdate),
        d !== a &&
          (d === null ? (j.firstBaseUpdate = w) : (d.next = w),
          (j.lastBaseUpdate = f)));
    }
    if (o !== null) {
      var _ = l.baseState;
      (a = 0), (j = w = f = null), (d = o);
      do {
        var S = d.lane,
          M = d.eventTime;
        if ((r & S) === S) {
          j !== null &&
            (j = j.next =
              {
                eventTime: M,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var D = e,
              A = d;
            switch (((S = t), (M = n), A.tag)) {
              case 1:
                if (((D = A.payload), typeof D == "function")) {
                  _ = D.call(M, _, S);
                  break e;
                }
                _ = D;
                break e;
              case 3:
                D.flags = (D.flags & -65537) | 128;
              case 0:
                if (
                  ((D = A.payload),
                  (S = typeof D == "function" ? D.call(M, _, S) : D),
                  S == null)
                )
                  break e;
                _ = O({}, _, S);
                break e;
              case 2:
                Kt = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64),
            (S = l.effects),
            S === null ? (l.effects = [d]) : S.push(d));
        } else
          (M = {
            eventTime: M,
            lane: S,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            j === null ? ((w = j = M), (f = _)) : (j = j.next = M),
            (a |= S);
        if (((d = d.next), d === null)) {
          if (((d = l.shared.pending), d === null)) break;
          (S = d),
            (d = S.next),
            (S.next = null),
            (l.lastBaseUpdate = S),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (j === null && (f = _),
        (l.baseState = f),
        (l.firstBaseUpdate = w),
        (l.lastBaseUpdate = j),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (a |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (fn |= a), (e.lanes = a), (e.memoizedState = _);
    }
  }
  function Va(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(u(191, l));
          l.call(r);
        }
      }
  }
  var yr = {},
    St = Vt(yr),
    wr = Vt(yr),
    kr = Vt(yr);
  function cn(e) {
    if (e === yr) throw Error(u(174));
    return e;
  }
  function si(e, t) {
    switch ((ue(kr, t), ue(wr, e), ue(St, yr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : so(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = so(t, e));
    }
    de(St), ue(St, t);
  }
  function Dn() {
    de(St), de(wr), de(kr);
  }
  function Wa(e) {
    cn(kr.current);
    var t = cn(St.current),
      n = so(t, e.type);
    t !== n && (ue(wr, e), ue(St, n));
  }
  function ai(e) {
    wr.current === e && (de(St), de(wr));
  }
  var he = Vt(0);
  function xl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
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
  var ui = [];
  function ci() {
    for (var e = 0; e < ui.length; e++)
      ui[e]._workInProgressVersionPrimary = null;
    ui.length = 0;
  }
  var yl = ge.ReactCurrentDispatcher,
    di = ge.ReactCurrentBatchConfig,
    dn = 0,
    ve = null,
    Ce = null,
    Le = null,
    wl = !1,
    Sr = !1,
    Nr = 0,
    gf = 0;
  function Ae() {
    throw Error(u(321));
  }
  function fi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!pt(e[n], t[n])) return !1;
    return !0;
  }
  function pi(e, t, n, r, l, o) {
    if (
      ((dn = o),
      (ve = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (yl.current = e === null || e.memoizedState === null ? kf : Sf),
      (e = n(r, l)),
      Sr)
    ) {
      o = 0;
      do {
        if (((Sr = !1), (Nr = 0), 25 <= o)) throw Error(u(301));
        (o += 1),
          (Le = Ce = null),
          (t.updateQueue = null),
          (yl.current = Nf),
          (e = n(r, l));
      } while (Sr);
    }
    if (
      ((yl.current = Nl),
      (t = Ce !== null && Ce.next !== null),
      (dn = 0),
      (Le = Ce = ve = null),
      (wl = !1),
      t)
    )
      throw Error(u(300));
    return e;
  }
  function mi() {
    var e = Nr !== 0;
    return (Nr = 0), e;
  }
  function Nt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Le === null ? (ve.memoizedState = Le = e) : (Le = Le.next = e), Le;
  }
  function st() {
    if (Ce === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Le === null ? ve.memoizedState : Le.next;
    if (t !== null) (Le = t), (Ce = e);
    else {
      if (e === null) throw Error(u(310));
      (Ce = e),
        (e = {
          memoizedState: Ce.memoizedState,
          baseState: Ce.baseState,
          baseQueue: Ce.baseQueue,
          queue: Ce.queue,
          next: null,
        }),
        Le === null ? (ve.memoizedState = Le = e) : (Le = Le.next = e);
    }
    return Le;
  }
  function jr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hi(e) {
    var t = st(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Ce,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var a = l.next;
        (l.next = o.next), (o.next = a);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var d = (a = null),
        f = null,
        w = o;
      do {
        var j = w.lane;
        if ((dn & j) === j)
          f !== null &&
            (f = f.next =
              {
                lane: 0,
                action: w.action,
                hasEagerState: w.hasEagerState,
                eagerState: w.eagerState,
                next: null,
              }),
            (r = w.hasEagerState ? w.eagerState : e(r, w.action));
        else {
          var _ = {
            lane: j,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          };
          f === null ? ((d = f = _), (a = r)) : (f = f.next = _),
            (ve.lanes |= j),
            (fn |= j);
        }
        w = w.next;
      } while (w !== null && w !== o);
      f === null ? (a = r) : (f.next = d),
        pt(r, t.memoizedState) || (Ke = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = f),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (ve.lanes |= o), (fn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function vi(e) {
    var t = st(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var a = (l = l.next);
      do (o = e(o, a.action)), (a = a.next);
      while (a !== l);
      pt(o, t.memoizedState) || (Ke = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Qa() {}
  function Ka(e, t) {
    var n = ve,
      r = st(),
      l = t(),
      o = !pt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ke = !0)),
      (r = r.queue),
      gi(Xa.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Le !== null && Le.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Er(9, Ga.bind(null, n, r, l, t), void 0, null),
        Pe === null)
      )
        throw Error(u(349));
      (dn & 30) !== 0 || Ya(n, t, l);
    }
    return l;
  }
  function Ya(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ve.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ga(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Za(t) && qa(e);
  }
  function Xa(e, t, n) {
    return n(function () {
      Za(t) && qa(e);
    });
  }
  function Za(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !pt(e, n);
    } catch {
      return !0;
    }
  }
  function qa(e) {
    var t = Lt(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function Ja(e) {
    var t = Nt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = wf.bind(null, ve, e)),
      [t.memoizedState, e]
    );
  }
  function Er(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ve.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function eu() {
    return st().memoizedState;
  }
  function kl(e, t, n, r) {
    var l = Nt();
    (ve.flags |= e),
      (l.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Sl(e, t, n, r) {
    var l = st();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ce !== null) {
      var a = Ce.memoizedState;
      if (((o = a.destroy), r !== null && fi(r, a.deps))) {
        l.memoizedState = Er(t, n, o, r);
        return;
      }
    }
    (ve.flags |= e), (l.memoizedState = Er(1 | t, n, o, r));
  }
  function tu(e, t) {
    return kl(8390656, 8, e, t);
  }
  function gi(e, t) {
    return Sl(2048, 8, e, t);
  }
  function nu(e, t) {
    return Sl(4, 2, e, t);
  }
  function ru(e, t) {
    return Sl(4, 4, e, t);
  }
  function lu(e, t) {
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
  function ou(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Sl(4, 4, lu.bind(null, t, e), n)
    );
  }
  function xi() {}
  function iu(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function su(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function au(e, t, n) {
    return (dn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n))
      : (pt(n, t) ||
          ((n = As()), (ve.lanes |= n), (fn |= n), (e.baseState = !0)),
        t);
  }
  function xf(e, t) {
    var n = le;
    (le = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = di.transition;
    di.transition = {};
    try {
      e(!1), t();
    } finally {
      (le = n), (di.transition = r);
    }
  }
  function uu() {
    return st().memoizedState;
  }
  function yf(e, t, n) {
    var r = qt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cu(e))
    )
      du(t, n);
    else if (((n = Ba(e, t, n, r)), n !== null)) {
      var l = Ue();
      xt(n, e, r, l), fu(n, t, r);
    }
  }
  function wf(e, t, n) {
    var r = qt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (cu(e)) du(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var a = t.lastRenderedState,
            d = o(a, n);
          if (((l.hasEagerState = !0), (l.eagerState = d), pt(d, a))) {
            var f = t.interleaved;
            f === null
              ? ((l.next = l), oi(t))
              : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ba(e, t, l, r)),
        n !== null && ((l = Ue()), xt(n, e, r, l), fu(n, t, r));
    }
  }
  function cu(e) {
    var t = e.alternate;
    return e === ve || (t !== null && t === ve);
  }
  function du(e, t) {
    Sr = wl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function fu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), wo(e, n);
    }
  }
  var Nl = {
      readContext: it,
      useCallback: Ae,
      useContext: Ae,
      useEffect: Ae,
      useImperativeHandle: Ae,
      useInsertionEffect: Ae,
      useLayoutEffect: Ae,
      useMemo: Ae,
      useReducer: Ae,
      useRef: Ae,
      useState: Ae,
      useDebugValue: Ae,
      useDeferredValue: Ae,
      useTransition: Ae,
      useMutableSource: Ae,
      useSyncExternalStore: Ae,
      useId: Ae,
      unstable_isNewReconciler: !1,
    },
    kf = {
      readContext: it,
      useCallback: function (e, t) {
        return (Nt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: it,
      useEffect: tu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          kl(4194308, 4, lu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return kl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return kl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Nt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Nt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = yf.bind(null, ve, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Nt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ja,
      useDebugValue: xi,
      useDeferredValue: function (e) {
        return (Nt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ja(!1),
          t = e[0];
        return (e = xf.bind(null, e[1])), (Nt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ve,
          l = Nt();
        if (pe) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), Pe === null)) throw Error(u(349));
          (dn & 30) !== 0 || Ya(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          tu(Xa.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Er(9, Ga.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Nt(),
          t = Pe.identifierPrefix;
        if (pe) {
          var n = Tt,
            r = Rt;
          (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Nr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = gf++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Sf = {
      readContext: it,
      useCallback: iu,
      useContext: it,
      useEffect: gi,
      useImperativeHandle: ou,
      useInsertionEffect: nu,
      useLayoutEffect: ru,
      useMemo: su,
      useReducer: hi,
      useRef: eu,
      useState: function () {
        return hi(jr);
      },
      useDebugValue: xi,
      useDeferredValue: function (e) {
        var t = st();
        return au(t, Ce.memoizedState, e);
      },
      useTransition: function () {
        var e = hi(jr)[0],
          t = st().memoizedState;
        return [e, t];
      },
      useMutableSource: Qa,
      useSyncExternalStore: Ka,
      useId: uu,
      unstable_isNewReconciler: !1,
    },
    Nf = {
      readContext: it,
      useCallback: iu,
      useContext: it,
      useEffect: gi,
      useImperativeHandle: ou,
      useInsertionEffect: nu,
      useLayoutEffect: ru,
      useMemo: su,
      useReducer: vi,
      useRef: eu,
      useState: function () {
        return vi(jr);
      },
      useDebugValue: xi,
      useDeferredValue: function (e) {
        var t = st();
        return Ce === null ? (t.memoizedState = e) : au(t, Ce.memoizedState, e);
      },
      useTransition: function () {
        var e = vi(jr)[0],
          t = st().memoizedState;
        return [e, t];
      },
      useMutableSource: Qa,
      useSyncExternalStore: Ka,
      useId: uu,
      unstable_isNewReconciler: !1,
    };
  function ht(e, t) {
    if (e && e.defaultProps) {
      (t = O({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function yi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : O({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var jl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? rn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ue(),
        l = qt(e),
        o = Pt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Yt(e, o, l)),
        t !== null && (xt(t, e, l, r), vl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ue(),
        l = qt(e),
        o = Pt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Yt(e, o, l)),
        t !== null && (xt(t, e, l, r), vl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ue(),
        r = qt(e),
        l = Pt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Yt(e, l, r)),
        t !== null && (xt(t, e, r, n), vl(t, e, r));
    },
  };
  function pu(e, t, n, r, l, o, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !dr(n, r) || !dr(l, o)
        : !0
    );
  }
  function mu(e, t, n) {
    var r = !1,
      l = Wt,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = it(o))
        : ((l = Qe(t) ? on : De.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Ln(e, l) : Wt)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = jl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function hu(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && jl.enqueueReplaceState(t, t.state, null);
  }
  function wi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ii(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = it(o))
      : ((o = Qe(t) ? on : De.current), (l.context = Ln(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (yi(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && jl.enqueueReplaceState(l, l.state, null),
        gl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function An(e, t) {
    try {
      var n = "",
        r = t;
      do (n += J(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ki(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Si(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var jf = typeof WeakMap == "function" ? WeakMap : Map;
  function vu(e, t, n) {
    (n = Pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Pl || ((Pl = !0), (Di = r)), Si(e, t);
      }),
      n
    );
  }
  function gu(e, t, n) {
    (n = Pt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Si(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          Si(e, t),
            typeof r != "function" &&
              (Xt === null ? (Xt = new Set([this])) : Xt.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function xu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new jf();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Af.bind(null, e, t, n)), t.then(e, e));
  }
  function yu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function wu(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Pt(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Ef = ge.ReactCurrentOwner,
    Ke = !1;
  function Be(e, t, n, r) {
    t.child = e === null ? ba(t, null, n, r) : $n(t, e.child, n, r);
  }
  function ku(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Fn(t, l),
      (r = pi(e, t, n, r, o, l)),
      (n = mi()),
      e !== null && !Ke
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (pe && n && Xo(t), (t.flags |= 1), Be(e, t, r, l), t.child)
    );
  }
  function Su(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Vi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Nu(e, t, o, r, l))
        : ((e = Dl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var a = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : dr), n(a, r) && e.ref === t.ref)
      )
        return zt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = en(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Nu(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (dr(o, r) && e.ref === t.ref)
        if (((Ke = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else return (t.lanes = e.lanes), zt(e, t, l);
    }
    return Ni(e, t, n, r, l);
  }
  function ju(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ue(bn, rt),
          (rt |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ue(bn, rt),
            (rt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ue(bn, rt),
          (rt |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ue(bn, rt),
        (rt |= r);
    return Be(e, t, l, n), t.child;
  }
  function Eu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ni(e, t, n, r, l) {
    var o = Qe(n) ? on : De.current;
    return (
      (o = Ln(t, o)),
      Fn(t, l),
      (n = pi(e, t, n, r, o, l)),
      (r = mi()),
      e !== null && !Ke
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (pe && r && Xo(t), (t.flags |= 1), Be(e, t, n, l), t.child)
    );
  }
  function _u(e, t, n, r, l) {
    if (Qe(n)) {
      var o = !0;
      al(t);
    } else o = !1;
    if ((Fn(t, l), t.stateNode === null))
      _l(e, t), mu(t, n, r), wi(t, n, r, l), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        d = t.memoizedProps;
      a.props = d;
      var f = a.context,
        w = n.contextType;
      typeof w == "object" && w !== null
        ? (w = it(w))
        : ((w = Qe(n) ? on : De.current), (w = Ln(t, w)));
      var j = n.getDerivedStateFromProps,
        _ =
          typeof j == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      _ ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((d !== r || f !== w) && hu(t, a, r, w)),
        (Kt = !1);
      var S = t.memoizedState;
      (a.state = S),
        gl(t, r, a, l),
        (f = t.memoizedState),
        d !== r || S !== f || We.current || Kt
          ? (typeof j == "function" && (yi(t, n, j, r), (f = t.memoizedState)),
            (d = Kt || pu(t, n, d, r, S, f, w))
              ? (_ ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = f)),
            (a.props = r),
            (a.state = f),
            (a.context = w),
            (r = d))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (a = t.stateNode),
        Ua(e, t),
        (d = t.memoizedProps),
        (w = t.type === t.elementType ? d : ht(t.type, d)),
        (a.props = w),
        (_ = t.pendingProps),
        (S = a.context),
        (f = n.contextType),
        typeof f == "object" && f !== null
          ? (f = it(f))
          : ((f = Qe(n) ? on : De.current), (f = Ln(t, f)));
      var M = n.getDerivedStateFromProps;
      (j =
        typeof M == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((d !== _ || S !== f) && hu(t, a, r, f)),
        (Kt = !1),
        (S = t.memoizedState),
        (a.state = S),
        gl(t, r, a, l);
      var D = t.memoizedState;
      d !== _ || S !== D || We.current || Kt
        ? (typeof M == "function" && (yi(t, n, M, r), (D = t.memoizedState)),
          (w = Kt || pu(t, n, w, r, S, D, f) || !1)
            ? (j ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, D, f),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, D, f)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (d === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = D)),
          (a.props = r),
          (a.state = D),
          (a.context = f),
          (r = w))
        : (typeof a.componentDidUpdate != "function" ||
            (d === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ji(e, t, n, r, o, l);
  }
  function ji(e, t, n, r, l, o) {
    Eu(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return l && Pa(t, n, !1), zt(e, t, o);
    (r = t.stateNode), (Ef.current = t);
    var d =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = $n(t, e.child, null, o)), (t.child = $n(t, null, d, o)))
        : Be(e, t, d, o),
      (t.memoizedState = r.state),
      l && Pa(t, n, !0),
      t.child
    );
  }
  function Cu(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ta(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ta(e, t.context, !1),
      si(e, t.containerInfo);
  }
  function Ru(e, t, n, r, l) {
    return Mn(), ei(l), (t.flags |= 256), Be(e, t, n, r), t.child;
  }
  var Ei = { dehydrated: null, treeContext: null, retryLane: 0 };
  function _i(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Tu(e, t, n) {
    var r = t.pendingProps,
      l = he.current,
      o = !1,
      a = (t.flags & 128) !== 0,
      d;
    if (
      ((d = a) ||
        (d = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      d
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ue(he, l & 1),
      e === null)
    )
      return (
        Jo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((a = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (a = { mode: "hidden", children: a }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = a))
                  : (o = Al(a, r, 0, null)),
                (e = vn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = _i(n)),
                (t.memoizedState = Ei),
                e)
              : Ci(t, a))
      );
    if (((l = e.memoizedState), l !== null && ((d = l.dehydrated), d !== null)))
      return _f(e, t, a, r, d, l, n);
    if (o) {
      (o = r.fallback), (a = t.mode), (l = e.child), (d = l.sibling);
      var f = { mode: "hidden", children: r.children };
      return (
        (a & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = f),
            (t.deletions = null))
          : ((r = en(l, f)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        d !== null ? (o = en(d, o)) : ((o = vn(o, a, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? _i(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (o.memoizedState = a),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ei),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = en(o, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ci(e, t) {
    return (
      (t = Al({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function El(e, t, n, r) {
    return (
      r !== null && ei(r),
      $n(t, e.child, null, n),
      (e = Ci(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function _f(e, t, n, r, l, o, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ki(Error(u(422)))), El(e, t, a, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Al({ mode: "visible", children: r.children }, l, 0, null)),
          (o = vn(o, l, a, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          (t.mode & 1) !== 0 && $n(t, e.child, null, a),
          (t.child.memoizedState = _i(a)),
          (t.memoizedState = Ei),
          o);
    if ((t.mode & 1) === 0) return El(e, t, a, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var d = r.dgst;
      return (
        (r = d), (o = Error(u(419))), (r = ki(o, r, void 0)), El(e, t, a, r)
      );
    }
    if (((d = (a & e.childLanes) !== 0), Ke || d)) {
      if (((r = Pe), r !== null)) {
        switch (a & -a) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (r.suspendedLanes | a)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Lt(e, l), xt(r, e, l, -1));
      }
      return Hi(), (r = ki(Error(u(421)))), El(e, t, a, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = If.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (nt = Ht(l.nextSibling)),
        (tt = t),
        (pe = !0),
        (mt = null),
        e !== null &&
          ((lt[ot++] = Rt),
          (lt[ot++] = Tt),
          (lt[ot++] = sn),
          (Rt = e.id),
          (Tt = e.overflow),
          (sn = t)),
        (t = Ci(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Lu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), li(e.return, t, n);
  }
  function Ri(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function Pu(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Be(e, t, r.children, n), (r = he.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Lu(e, n, t);
          else if (e.tag === 19) Lu(e, n, t);
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
      r &= 1;
    }
    if ((ue(he, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && xl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Ri(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && xl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Ri(t, !0, n, null, o);
          break;
        case "together":
          Ri(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function _l(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function zt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (fn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = en(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Cf(e, t, n) {
    switch (t.tag) {
      case 3:
        Cu(t), Mn();
        break;
      case 5:
        Wa(t);
        break;
      case 1:
        Qe(t.type) && al(t);
        break;
      case 4:
        si(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ue(ml, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ue(he, he.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? Tu(e, t, n)
            : (ue(he, he.current & 1),
              (e = zt(e, t, n)),
              e !== null ? e.sibling : null);
        ue(he, he.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Pu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ue(he, he.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ju(e, t, n);
    }
    return zt(e, t, n);
  }
  var zu, Ti, Mu, $u;
  (zu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Ti = function () {}),
    (Mu = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), cn(St.current);
        var o = null;
        switch (n) {
          case "input":
            (l = ro(e, l)), (r = ro(e, r)), (o = []);
            break;
          case "select":
            (l = O({}, l, { value: void 0 })),
              (r = O({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = io(e, l)), (r = io(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ol);
        }
        ao(n, r);
        var a;
        n = null;
        for (w in l)
          if (!r.hasOwnProperty(w) && l.hasOwnProperty(w) && l[w] != null)
            if (w === "style") {
              var d = l[w];
              for (a in d) d.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
            } else
              w !== "dangerouslySetInnerHTML" &&
                w !== "children" &&
                w !== "suppressContentEditableWarning" &&
                w !== "suppressHydrationWarning" &&
                w !== "autoFocus" &&
                (m.hasOwnProperty(w)
                  ? o || (o = [])
                  : (o = o || []).push(w, null));
        for (w in r) {
          var f = r[w];
          if (
            ((d = l != null ? l[w] : void 0),
            r.hasOwnProperty(w) && f !== d && (f != null || d != null))
          )
            if (w === "style")
              if (d) {
                for (a in d)
                  !d.hasOwnProperty(a) ||
                    (f && f.hasOwnProperty(a)) ||
                    (n || (n = {}), (n[a] = ""));
                for (a in f)
                  f.hasOwnProperty(a) &&
                    d[a] !== f[a] &&
                    (n || (n = {}), (n[a] = f[a]));
              } else n || (o || (o = []), o.push(w, n)), (n = f);
            else
              w === "dangerouslySetInnerHTML"
                ? ((f = f ? f.__html : void 0),
                  (d = d ? d.__html : void 0),
                  f != null && d !== f && (o = o || []).push(w, f))
                : w === "children"
                ? (typeof f != "string" && typeof f != "number") ||
                  (o = o || []).push(w, "" + f)
                : w !== "suppressContentEditableWarning" &&
                  w !== "suppressHydrationWarning" &&
                  (m.hasOwnProperty(w)
                    ? (f != null && w === "onScroll" && ce("scroll", e),
                      o || d === f || (o = []))
                    : (o = o || []).push(w, f));
        }
        n && (o = o || []).push("style", n);
        var w = o;
        (t.updateQueue = w) && (t.flags |= 4);
      }
    }),
    ($u = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function _r(e, t) {
    if (!pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Rf(e, t, n) {
    var r = t.pendingProps;
    switch ((Zo(t), t.tag)) {
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
        return Ie(t), null;
      case 1:
        return Qe(t.type) && sl(), Ie(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Dn(),
          de(We),
          de(De),
          ci(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (fl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), mt !== null && (bi(mt), (mt = null)))),
          Ti(e, t),
          Ie(t),
          null
        );
      case 5:
        ai(t);
        var l = cn(kr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Mu(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Ie(t), null;
          }
          if (((e = cn(St.current)), fl(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[kt] = t), (r[vr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ce("cancel", r), ce("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < pr.length; l++) ce(pr[l], r);
                break;
              case "source":
                ce("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", r), ce("load", r);
                break;
              case "details":
                ce("toggle", r);
                break;
              case "input":
                ms(r, o), ce("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  ce("invalid", r);
                break;
              case "textarea":
                gs(r, o), ce("invalid", r);
            }
            ao(n, o), (l = null);
            for (var a in o)
              if (o.hasOwnProperty(a)) {
                var d = o[a];
                a === "children"
                  ? typeof d == "string"
                    ? r.textContent !== d &&
                      (o.suppressHydrationWarning !== !0 &&
                        ll(r.textContent, d, e),
                      (l = ["children", d]))
                    : typeof d == "number" &&
                      r.textContent !== "" + d &&
                      (o.suppressHydrationWarning !== !0 &&
                        ll(r.textContent, d, e),
                      (l = ["children", "" + d]))
                  : m.hasOwnProperty(a) &&
                    d != null &&
                    a === "onScroll" &&
                    ce("scroll", r);
              }
            switch (n) {
              case "input":
                Or(r), vs(r, o, !0);
                break;
              case "textarea":
                Or(r), ys(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ol);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ws(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = a.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
                : (e = a.createElementNS(e, n)),
              (e[kt] = t),
              (e[vr] = r),
              zu(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = uo(n, r)), n)) {
                case "dialog":
                  ce("cancel", e), ce("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ce("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < pr.length; l++) ce(pr[l], e);
                  l = r;
                  break;
                case "source":
                  ce("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ce("error", e), ce("load", e), (l = r);
                  break;
                case "details":
                  ce("toggle", e), (l = r);
                  break;
                case "input":
                  ms(e, r), (l = ro(e, r)), ce("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = O({}, r, { value: void 0 })),
                    ce("invalid", e);
                  break;
                case "textarea":
                  gs(e, r), (l = io(e, r)), ce("invalid", e);
                  break;
                default:
                  l = r;
              }
              ao(n, l), (d = l);
              for (o in d)
                if (d.hasOwnProperty(o)) {
                  var f = d[o];
                  o === "style"
                    ? Ns(e, f)
                    : o === "dangerouslySetInnerHTML"
                    ? ((f = f ? f.__html : void 0), f != null && ks(e, f))
                    : o === "children"
                    ? typeof f == "string"
                      ? (n !== "textarea" || f !== "") && Yn(e, f)
                      : typeof f == "number" && Yn(e, "" + f)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (m.hasOwnProperty(o)
                        ? f != null && o === "onScroll" && ce("scroll", e)
                        : f != null && Me(e, o, f, a));
                }
              switch (n) {
                case "input":
                  Or(e), vs(e, r, !1);
                  break;
                case "textarea":
                  Or(e), ys(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + re(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? xn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        xn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ol);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ie(t), null;
      case 6:
        if (e && t.stateNode != null) $u(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (((n = cn(kr.current)), cn(St.current), fl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[kt] = t),
              (o = r.nodeValue !== n) && ((e = tt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ll(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ll(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[kt] = t),
              (t.stateNode = r);
        }
        return Ie(t), null;
      case 13:
        if (
          (de(he),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (pe && nt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Da(), Mn(), (t.flags |= 98560), (o = !1);
          else if (((o = fl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(u(317));
              o[kt] = t;
            } else
              Mn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ie(t), (o = !1);
          } else mt !== null && (bi(mt), (mt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (he.current & 1) !== 0
                  ? Re === 0 && (Re = 3)
                  : Hi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ie(t),
            null);
      case 4:
        return (
          Dn(),
          Ti(e, t),
          e === null && mr(t.stateNode.containerInfo),
          Ie(t),
          null
        );
      case 10:
        return ri(t.type._context), Ie(t), null;
      case 17:
        return Qe(t.type) && sl(), Ie(t), null;
      case 19:
        if ((de(he), (o = t.memoizedState), o === null)) return Ie(t), null;
        if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
          if (r) _r(o, !1);
          else {
            if (Re !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((a = xl(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      _r(o, !1),
                      r = a.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (a = o.alternate),
                      a === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = a.childLanes),
                          (o.lanes = a.lanes),
                          (o.child = a.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = a.memoizedProps),
                          (o.memoizedState = a.memoizedState),
                          (o.updateQueue = a.updateQueue),
                          (o.type = a.type),
                          (e = a.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ue(he, (he.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              ke() > Bn &&
              ((t.flags |= 128), (r = !0), _r(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = xl(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                _r(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !a.alternate &&
                  !pe)
              )
                return Ie(t), null;
            } else
              2 * ke() - o.renderingStartTime > Bn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), _r(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((n = o.last),
              n !== null ? (n.sibling = a) : (t.child = a),
              (o.last = a));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = ke()),
            (t.sibling = null),
            (n = he.current),
            ue(he, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ie(t), null);
      case 22:
      case 23:
        return (
          Ui(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (rt & 1073741824) !== 0 &&
              (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ie(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Tf(e, t) {
    switch ((Zo(t), t.tag)) {
      case 1:
        return (
          Qe(t.type) && sl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Dn(),
          de(We),
          de(De),
          ci(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return ai(t), null;
      case 13:
        if (
          (de(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          Mn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return de(he), null;
      case 4:
        return Dn(), null;
      case 10:
        return ri(t.type._context), null;
      case 22:
      case 23:
        return Ui(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Cl = !1,
    be = !1,
    Lf = typeof WeakSet == "function" ? WeakSet : Set,
    $ = null;
  function In(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ye(e, t, r);
        }
      else n.current = null;
  }
  function Li(e, t, n) {
    try {
      n();
    } catch (r) {
      ye(e, t, r);
    }
  }
  var Ou = !1;
  function Pf(e, t) {
    if (((Uo = Kr), (e = pa()), $o(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var a = 0,
              d = -1,
              f = -1,
              w = 0,
              j = 0,
              _ = e,
              S = null;
            t: for (;;) {
              for (
                var M;
                _ !== n || (l !== 0 && _.nodeType !== 3) || (d = a + l),
                  _ !== o || (r !== 0 && _.nodeType !== 3) || (f = a + r),
                  _.nodeType === 3 && (a += _.nodeValue.length),
                  (M = _.firstChild) !== null;

              )
                (S = _), (_ = M);
              for (;;) {
                if (_ === e) break t;
                if (
                  (S === n && ++w === l && (d = a),
                  S === o && ++j === r && (f = a),
                  (M = _.nextSibling) !== null)
                )
                  break;
                (_ = S), (S = _.parentNode);
              }
              _ = M;
            }
            n = d === -1 || f === -1 ? null : { start: d, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ho = { focusedElem: e, selectionRange: n }, Kr = !1, $ = t;
      $ !== null;

    )
      if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), ($ = e);
      else
        for (; $ !== null; ) {
          t = $;
          try {
            var D = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (D !== null) {
                    var A = D.memoizedProps,
                      Se = D.memoizedState,
                      g = t.stateNode,
                      p = g.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? A : ht(t.type, A),
                        Se
                      );
                    g.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var x = t.stateNode.containerInfo;
                  x.nodeType === 1
                    ? (x.textContent = "")
                    : x.nodeType === 9 &&
                      x.documentElement &&
                      x.removeChild(x.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (C) {
            ye(t, t.return, C);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), ($ = e);
            break;
          }
          $ = t.return;
        }
    return (D = Ou), (Ou = !1), D;
  }
  function Cr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && Li(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Rl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Pi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Fu(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Fu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[kt],
          delete t[vr],
          delete t[Ko],
          delete t[pf],
          delete t[mf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Du(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Au(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Du(e.return)) return null;
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
  function zi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ol));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (zi(e, t, n), e = e.sibling; e !== null; )
        zi(e, t, n), (e = e.sibling);
  }
  function Mi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Mi(e, t, n), e = e.sibling; e !== null; )
        Mi(e, t, n), (e = e.sibling);
  }
  var Oe = null,
    vt = !1;
  function Gt(e, t, n) {
    for (n = n.child; n !== null; ) Iu(e, t, n), (n = n.sibling);
  }
  function Iu(e, t, n) {
    if (wt && typeof wt.onCommitFiberUnmount == "function")
      try {
        wt.onCommitFiberUnmount(Br, n);
      } catch {}
    switch (n.tag) {
      case 5:
        be || In(n, t);
      case 6:
        var r = Oe,
          l = vt;
        (Oe = null),
          Gt(e, t, n),
          (Oe = r),
          (vt = l),
          Oe !== null &&
            (vt
              ? ((e = Oe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Oe.removeChild(n.stateNode));
        break;
      case 18:
        Oe !== null &&
          (vt
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8
                ? Qo(e.parentNode, n)
                : e.nodeType === 1 && Qo(e, n),
              or(e))
            : Qo(Oe, n.stateNode));
        break;
      case 4:
        (r = Oe),
          (l = vt),
          (Oe = n.stateNode.containerInfo),
          (vt = !0),
          Gt(e, t, n),
          (Oe = r),
          (vt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !be &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              a = o.destroy;
            (o = o.tag),
              a !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Li(n, t, a),
              (l = l.next);
          } while (l !== r);
        }
        Gt(e, t, n);
        break;
      case 1:
        if (
          !be &&
          (In(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (d) {
            ye(n, t, d);
          }
        Gt(e, t, n);
        break;
      case 21:
        Gt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((be = (r = be) || n.memoizedState !== null), Gt(e, t, n), (be = r))
          : Gt(e, t, n);
        break;
      default:
        Gt(e, t, n);
    }
  }
  function bu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Lf()),
        t.forEach(function (r) {
          var l = bf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function gt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            a = t,
            d = a;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                (Oe = d.stateNode), (vt = !1);
                break e;
              case 3:
                (Oe = d.stateNode.containerInfo), (vt = !0);
                break e;
              case 4:
                (Oe = d.stateNode.containerInfo), (vt = !0);
                break e;
            }
            d = d.return;
          }
          if (Oe === null) throw Error(u(160));
          Iu(o, a, l), (Oe = null), (vt = !1);
          var f = l.alternate;
          f !== null && (f.return = null), (l.return = null);
        } catch (w) {
          ye(l, t, w);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Bu(t, e), (t = t.sibling);
  }
  function Bu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((gt(t, e), jt(e), r & 4)) {
          try {
            Cr(3, e, e.return), Rl(3, e);
          } catch (A) {
            ye(e, e.return, A);
          }
          try {
            Cr(5, e, e.return);
          } catch (A) {
            ye(e, e.return, A);
          }
        }
        break;
      case 1:
        gt(t, e), jt(e), r & 512 && n !== null && In(n, n.return);
        break;
      case 5:
        if (
          (gt(t, e),
          jt(e),
          r & 512 && n !== null && In(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Yn(l, "");
          } catch (A) {
            ye(e, e.return, A);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            a = n !== null ? n.memoizedProps : o,
            d = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              d === "input" && o.type === "radio" && o.name != null && hs(l, o),
                uo(d, a);
              var w = uo(d, o);
              for (a = 0; a < f.length; a += 2) {
                var j = f[a],
                  _ = f[a + 1];
                j === "style"
                  ? Ns(l, _)
                  : j === "dangerouslySetInnerHTML"
                  ? ks(l, _)
                  : j === "children"
                  ? Yn(l, _)
                  : Me(l, j, _, w);
              }
              switch (d) {
                case "input":
                  lo(l, o);
                  break;
                case "textarea":
                  xs(l, o);
                  break;
                case "select":
                  var S = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var M = o.value;
                  M != null
                    ? xn(l, !!o.multiple, M, !1)
                    : S !== !!o.multiple &&
                      (o.defaultValue != null
                        ? xn(l, !!o.multiple, o.defaultValue, !0)
                        : xn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[vr] = o;
            } catch (A) {
              ye(e, e.return, A);
            }
        }
        break;
      case 6:
        if ((gt(t, e), jt(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (A) {
            ye(e, e.return, A);
          }
        }
        break;
      case 3:
        if (
          (gt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            or(t.containerInfo);
          } catch (A) {
            ye(e, e.return, A);
          }
        break;
      case 4:
        gt(t, e), jt(e);
        break;
      case 13:
        gt(t, e),
          jt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Fi = ke())),
          r & 4 && bu(e);
        break;
      case 22:
        if (
          ((j = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((be = (w = be) || j), gt(t, e), (be = w)) : gt(t, e),
          jt(e),
          r & 8192)
        ) {
          if (
            ((w = e.memoizedState !== null),
            (e.stateNode.isHidden = w) && !j && (e.mode & 1) !== 0)
          )
            for ($ = e, j = e.child; j !== null; ) {
              for (_ = $ = j; $ !== null; ) {
                switch (((S = $), (M = S.child), S.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Cr(4, S, S.return);
                    break;
                  case 1:
                    In(S, S.return);
                    var D = S.stateNode;
                    if (typeof D.componentWillUnmount == "function") {
                      (r = S), (n = S.return);
                      try {
                        (t = r),
                          (D.props = t.memoizedProps),
                          (D.state = t.memoizedState),
                          D.componentWillUnmount();
                      } catch (A) {
                        ye(r, n, A);
                      }
                    }
                    break;
                  case 5:
                    In(S, S.return);
                    break;
                  case 22:
                    if (S.memoizedState !== null) {
                      Vu(_);
                      continue;
                    }
                }
                M !== null ? ((M.return = S), ($ = M)) : Vu(_);
              }
              j = j.sibling;
            }
          e: for (j = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (j === null) {
                j = _;
                try {
                  (l = _.stateNode),
                    w
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((d = _.stateNode),
                        (f = _.memoizedProps.style),
                        (a =
                          f != null && f.hasOwnProperty("display")
                            ? f.display
                            : null),
                        (d.style.display = Ss("display", a)));
                } catch (A) {
                  ye(e, e.return, A);
                }
              }
            } else if (_.tag === 6) {
              if (j === null)
                try {
                  _.stateNode.nodeValue = w ? "" : _.memoizedProps;
                } catch (A) {
                  ye(e, e.return, A);
                }
            } else if (
              ((_.tag !== 22 && _.tag !== 23) ||
                _.memoizedState === null ||
                _ === e) &&
              _.child !== null
            ) {
              (_.child.return = _), (_ = _.child);
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              j === _ && (j = null), (_ = _.return);
            }
            j === _ && (j = null),
              (_.sibling.return = _.return),
              (_ = _.sibling);
          }
        }
        break;
      case 19:
        gt(t, e), jt(e), r & 4 && bu(e);
        break;
      case 21:
        break;
      default:
        gt(t, e), jt(e);
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Du(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Yn(l, ""), (r.flags &= -33));
            var o = Au(e);
            Mi(e, o, l);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              d = Au(e);
            zi(e, d, a);
            break;
          default:
            throw Error(u(161));
        }
      } catch (f) {
        ye(e, e.return, f);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function zf(e, t, n) {
    ($ = e), Uu(e);
  }
  function Uu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; $ !== null; ) {
      var l = $,
        o = l.child;
      if (l.tag === 22 && r) {
        var a = l.memoizedState !== null || Cl;
        if (!a) {
          var d = l.alternate,
            f = (d !== null && d.memoizedState !== null) || be;
          d = Cl;
          var w = be;
          if (((Cl = a), (be = f) && !w))
            for ($ = l; $ !== null; )
              (a = $),
                (f = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? Wu(l)
                  : f !== null
                  ? ((f.return = a), ($ = f))
                  : Wu(l);
          for (; o !== null; ) ($ = o), Uu(o), (o = o.sibling);
          ($ = l), (Cl = d), (be = w);
        }
        Hu(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = l), ($ = o))
          : Hu(e);
    }
  }
  function Hu(e) {
    for (; $ !== null; ) {
      var t = $;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                be || Rl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !be)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ht(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Va(t, o, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Va(t, a, n);
                }
                break;
              case 5:
                var d = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = d;
                  var f = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      f.autoFocus && n.focus();
                      break;
                    case "img":
                      f.src && (n.src = f.src);
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
                  var w = t.alternate;
                  if (w !== null) {
                    var j = w.memoizedState;
                    if (j !== null) {
                      var _ = j.dehydrated;
                      _ !== null && or(_);
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
                throw Error(u(163));
            }
          be || (t.flags & 512 && Pi(t));
        } catch (S) {
          ye(t, t.return, S);
        }
      }
      if (t === e) {
        $ = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), ($ = n);
        break;
      }
      $ = t.return;
    }
  }
  function Vu(e) {
    for (; $ !== null; ) {
      var t = $;
      if (t === e) {
        $ = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), ($ = n);
        break;
      }
      $ = t.return;
    }
  }
  function Wu(e) {
    for (; $ !== null; ) {
      var t = $;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Rl(4, t);
            } catch (f) {
              ye(t, n, f);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (f) {
                ye(t, l, f);
              }
            }
            var o = t.return;
            try {
              Pi(t);
            } catch (f) {
              ye(t, o, f);
            }
            break;
          case 5:
            var a = t.return;
            try {
              Pi(t);
            } catch (f) {
              ye(t, a, f);
            }
        }
      } catch (f) {
        ye(t, t.return, f);
      }
      if (t === e) {
        $ = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        (d.return = t.return), ($ = d);
        break;
      }
      $ = t.return;
    }
  }
  var Mf = Math.ceil,
    Tl = ge.ReactCurrentDispatcher,
    $i = ge.ReactCurrentOwner,
    at = ge.ReactCurrentBatchConfig,
    q = 0,
    Pe = null,
    je = null,
    Fe = 0,
    rt = 0,
    bn = Vt(0),
    Re = 0,
    Rr = null,
    fn = 0,
    Ll = 0,
    Oi = 0,
    Tr = null,
    Ye = null,
    Fi = 0,
    Bn = 1 / 0,
    Mt = null,
    Pl = !1,
    Di = null,
    Xt = null,
    zl = !1,
    Zt = null,
    Ml = 0,
    Lr = 0,
    Ai = null,
    $l = -1,
    Ol = 0;
  function Ue() {
    return (q & 6) !== 0 ? ke() : $l !== -1 ? $l : ($l = ke());
  }
  function qt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (q & 2) !== 0 && Fe !== 0
      ? Fe & -Fe
      : vf.transition !== null
      ? (Ol === 0 && (Ol = As()), Ol)
      : ((e = le),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ks(e.type))),
        e);
  }
  function xt(e, t, n, r) {
    if (50 < Lr) throw ((Lr = 0), (Ai = null), Error(u(185)));
    er(e, n, r),
      ((q & 2) === 0 || e !== Pe) &&
        (e === Pe && ((q & 2) === 0 && (Ll |= n), Re === 4 && Jt(e, Fe)),
        Ge(e, r),
        n === 1 &&
          q === 0 &&
          (t.mode & 1) === 0 &&
          ((Bn = ke() + 500), ul && Qt()));
  }
  function Ge(e, t) {
    var n = e.callbackNode;
    hd(e, t);
    var r = Vr(e, e === Pe ? Fe : 0);
    if (r === 0)
      n !== null && Os(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Os(n), t === 1))
        e.tag === 0 ? hf(Ku.bind(null, e)) : za(Ku.bind(null, e)),
          df(function () {
            (q & 6) === 0 && Qt();
          }),
          (n = null);
      else {
        switch (Is(r)) {
          case 1:
            n = go;
            break;
          case 4:
            n = Fs;
            break;
          case 16:
            n = br;
            break;
          case 536870912:
            n = Ds;
            break;
          default:
            n = br;
        }
        n = tc(n, Qu.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Qu(e, t) {
    if ((($l = -1), (Ol = 0), (q & 6) !== 0)) throw Error(u(327));
    var n = e.callbackNode;
    if (Un() && e.callbackNode !== n) return null;
    var r = Vr(e, e === Pe ? Fe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Fl(e, r);
    else {
      t = r;
      var l = q;
      q |= 2;
      var o = Gu();
      (Pe !== e || Fe !== t) && ((Mt = null), (Bn = ke() + 500), mn(e, t));
      do
        try {
          Ff();
          break;
        } catch (d) {
          Yu(e, d);
        }
      while (!0);
      ni(),
        (Tl.current = o),
        (q = l),
        je !== null ? (t = 0) : ((Pe = null), (Fe = 0), (t = Re));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = xo(e)), l !== 0 && ((r = l), (t = Ii(e, l)))),
        t === 1)
      )
        throw ((n = Rr), mn(e, 0), Jt(e, r), Ge(e, ke()), n);
      if (t === 6) Jt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !$f(l) &&
            ((t = Fl(e, r)),
            t === 2 && ((o = xo(e)), o !== 0 && ((r = o), (t = Ii(e, o)))),
            t === 1))
        )
          throw ((n = Rr), mn(e, 0), Jt(e, r), Ge(e, ke()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            hn(e, Ye, Mt);
            break;
          case 3:
            if (
              (Jt(e, r),
              (r & 130023424) === r && ((t = Fi + 500 - ke()), 10 < t))
            ) {
              if (Vr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ue(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Wo(hn.bind(null, e, Ye, Mt), t);
              break;
            }
            hn(e, Ye, Mt);
            break;
          case 4:
            if ((Jt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var a = 31 - ft(r);
              (o = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~o);
            }
            if (
              ((r = l),
              (r = ke() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Mf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Wo(hn.bind(null, e, Ye, Mt), r);
              break;
            }
            hn(e, Ye, Mt);
            break;
          case 5:
            hn(e, Ye, Mt);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return Ge(e, ke()), e.callbackNode === n ? Qu.bind(null, e) : null;
  }
  function Ii(e, t) {
    var n = Tr;
    return (
      e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256),
      (e = Fl(e, t)),
      e !== 2 && ((t = Ye), (Ye = n), t !== null && bi(t)),
      e
    );
  }
  function bi(e) {
    Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
  }
  function $f(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!pt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
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
  function Jt(e, t) {
    for (
      t &= ~Oi,
        t &= ~Ll,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ft(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ku(e) {
    if ((q & 6) !== 0) throw Error(u(327));
    Un();
    var t = Vr(e, 0);
    if ((t & 1) === 0) return Ge(e, ke()), null;
    var n = Fl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = xo(e);
      r !== 0 && ((t = r), (n = Ii(e, r)));
    }
    if (n === 1) throw ((n = Rr), mn(e, 0), Jt(e, t), Ge(e, ke()), n);
    if (n === 6) throw Error(u(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      hn(e, Ye, Mt),
      Ge(e, ke()),
      null
    );
  }
  function Bi(e, t) {
    var n = q;
    q |= 1;
    try {
      return e(t);
    } finally {
      (q = n), q === 0 && ((Bn = ke() + 500), ul && Qt());
    }
  }
  function pn(e) {
    Zt !== null && Zt.tag === 0 && (q & 6) === 0 && Un();
    var t = q;
    q |= 1;
    var n = at.transition,
      r = le;
    try {
      if (((at.transition = null), (le = 1), e)) return e();
    } finally {
      (le = r), (at.transition = n), (q = t), (q & 6) === 0 && Qt();
    }
  }
  function Ui() {
    (rt = bn.current), de(bn);
  }
  function mn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), cf(n)), je !== null))
      for (n = je.return; n !== null; ) {
        var r = n;
        switch ((Zo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && sl();
            break;
          case 3:
            Dn(), de(We), de(De), ci();
            break;
          case 5:
            ai(r);
            break;
          case 4:
            Dn();
            break;
          case 13:
            de(he);
            break;
          case 19:
            de(he);
            break;
          case 10:
            ri(r.type._context);
            break;
          case 22:
          case 23:
            Ui();
        }
        n = n.return;
      }
    if (
      ((Pe = e),
      (je = e = en(e.current, null)),
      (Fe = rt = t),
      (Re = 0),
      (Rr = null),
      (Oi = Ll = fn = 0),
      (Ye = Tr = null),
      un !== null)
    ) {
      for (t = 0; t < un.length; t++)
        if (((n = un[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var a = o.next;
            (o.next = l), (r.next = a);
          }
          n.pending = r;
        }
      un = null;
    }
    return e;
  }
  function Yu(e, t) {
    do {
      var n = je;
      try {
        if ((ni(), (yl.current = Nl), wl)) {
          for (var r = ve.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          wl = !1;
        }
        if (
          ((dn = 0),
          (Le = Ce = ve = null),
          (Sr = !1),
          (Nr = 0),
          ($i.current = null),
          n === null || n.return === null)
        ) {
          (Re = 1), (Rr = t), (je = null);
          break;
        }
        e: {
          var o = e,
            a = n.return,
            d = n,
            f = t;
          if (
            ((t = Fe),
            (d.flags |= 32768),
            f !== null && typeof f == "object" && typeof f.then == "function")
          ) {
            var w = f,
              j = d,
              _ = j.tag;
            if ((j.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var S = j.alternate;
              S
                ? ((j.updateQueue = S.updateQueue),
                  (j.memoizedState = S.memoizedState),
                  (j.lanes = S.lanes))
                : ((j.updateQueue = null), (j.memoizedState = null));
            }
            var M = yu(a);
            if (M !== null) {
              (M.flags &= -257),
                wu(M, a, d, o, t),
                M.mode & 1 && xu(o, w, t),
                (t = M),
                (f = w);
              var D = t.updateQueue;
              if (D === null) {
                var A = new Set();
                A.add(f), (t.updateQueue = A);
              } else D.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                xu(o, w, t), Hi();
                break e;
              }
              f = Error(u(426));
            }
          } else if (pe && d.mode & 1) {
            var Se = yu(a);
            if (Se !== null) {
              (Se.flags & 65536) === 0 && (Se.flags |= 256),
                wu(Se, a, d, o, t),
                ei(An(f, d));
              break e;
            }
          }
          (o = f = An(f, d)),
            Re !== 4 && (Re = 2),
            Tr === null ? (Tr = [o]) : Tr.push(o),
            (o = a);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = vu(o, f, t);
                Ha(o, g);
                break e;
              case 1:
                d = f;
                var p = o.type,
                  x = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof p.getDerivedStateFromError == "function" ||
                    (x !== null &&
                      typeof x.componentDidCatch == "function" &&
                      (Xt === null || !Xt.has(x))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var C = gu(o, d, t);
                  Ha(o, C);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Zu(n);
      } catch (I) {
        (t = I), je === n && n !== null && (je = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Gu() {
    var e = Tl.current;
    return (Tl.current = Nl), e === null ? Nl : e;
  }
  function Hi() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
      Pe === null ||
        ((fn & 268435455) === 0 && (Ll & 268435455) === 0) ||
        Jt(Pe, Fe);
  }
  function Fl(e, t) {
    var n = q;
    q |= 2;
    var r = Gu();
    (Pe !== e || Fe !== t) && ((Mt = null), mn(e, t));
    do
      try {
        Of();
        break;
      } catch (l) {
        Yu(e, l);
      }
    while (!0);
    if ((ni(), (q = n), (Tl.current = r), je !== null)) throw Error(u(261));
    return (Pe = null), (Fe = 0), Re;
  }
  function Of() {
    for (; je !== null; ) Xu(je);
  }
  function Ff() {
    for (; je !== null && !id(); ) Xu(je);
  }
  function Xu(e) {
    var t = ec(e.alternate, e, rt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Zu(e) : (je = t),
      ($i.current = null);
  }
  function Zu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Rf(n, t, rt)), n !== null)) {
          je = n;
          return;
        }
      } else {
        if (((n = Tf(n, t)), n !== null)) {
          (n.flags &= 32767), (je = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Re = 6), (je = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        je = t;
        return;
      }
      je = t = e;
    } while (t !== null);
    Re === 0 && (Re = 5);
  }
  function hn(e, t, n) {
    var r = le,
      l = at.transition;
    try {
      (at.transition = null), (le = 1), Df(e, t, n, r);
    } finally {
      (at.transition = l), (le = r);
    }
    return null;
  }
  function Df(e, t, n, r) {
    do Un();
    while (Zt !== null);
    if ((q & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(u(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (vd(e, o),
      e === Pe && ((je = Pe = null), (Fe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        zl ||
        ((zl = !0),
        tc(br, function () {
          return Un(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = at.transition), (at.transition = null);
      var a = le;
      le = 1;
      var d = q;
      (q |= 4),
        ($i.current = null),
        Pf(e, n),
        Bu(n, e),
        nf(Ho),
        (Kr = !!Uo),
        (Ho = Uo = null),
        (e.current = n),
        zf(n),
        sd(),
        (q = d),
        (le = a),
        (at.transition = o);
    } else e.current = n;
    if (
      (zl && ((zl = !1), (Zt = e), (Ml = l)),
      (o = e.pendingLanes),
      o === 0 && (Xt = null),
      cd(n.stateNode),
      Ge(e, ke()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Pl) throw ((Pl = !1), (e = Di), (Di = null), e);
    return (
      (Ml & 1) !== 0 && e.tag !== 0 && Un(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Ai ? Lr++ : ((Lr = 0), (Ai = e))) : (Lr = 0),
      Qt(),
      null
    );
  }
  function Un() {
    if (Zt !== null) {
      var e = Is(Ml),
        t = at.transition,
        n = le;
      try {
        if (((at.transition = null), (le = 16 > e ? 16 : e), Zt === null))
          var r = !1;
        else {
          if (((e = Zt), (Zt = null), (Ml = 0), (q & 6) !== 0))
            throw Error(u(331));
          var l = q;
          for (q |= 4, $ = e.current; $ !== null; ) {
            var o = $,
              a = o.child;
            if (($.flags & 16) !== 0) {
              var d = o.deletions;
              if (d !== null) {
                for (var f = 0; f < d.length; f++) {
                  var w = d[f];
                  for ($ = w; $ !== null; ) {
                    var j = $;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cr(8, j, o);
                    }
                    var _ = j.child;
                    if (_ !== null) (_.return = j), ($ = _);
                    else
                      for (; $ !== null; ) {
                        j = $;
                        var S = j.sibling,
                          M = j.return;
                        if ((Fu(j), j === w)) {
                          $ = null;
                          break;
                        }
                        if (S !== null) {
                          (S.return = M), ($ = S);
                          break;
                        }
                        $ = M;
                      }
                  }
                }
                var D = o.alternate;
                if (D !== null) {
                  var A = D.child;
                  if (A !== null) {
                    D.child = null;
                    do {
                      var Se = A.sibling;
                      (A.sibling = null), (A = Se);
                    } while (A !== null);
                  }
                }
                $ = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && a !== null)
              (a.return = o), ($ = a);
            else
              e: for (; $ !== null; ) {
                if (((o = $), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cr(9, o, o.return);
                  }
                var g = o.sibling;
                if (g !== null) {
                  (g.return = o.return), ($ = g);
                  break e;
                }
                $ = o.return;
              }
          }
          var p = e.current;
          for ($ = p; $ !== null; ) {
            a = $;
            var x = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && x !== null)
              (x.return = a), ($ = x);
            else
              e: for (a = p; $ !== null; ) {
                if (((d = $), (d.flags & 2048) !== 0))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rl(9, d);
                    }
                  } catch (I) {
                    ye(d, d.return, I);
                  }
                if (d === a) {
                  $ = null;
                  break e;
                }
                var C = d.sibling;
                if (C !== null) {
                  (C.return = d.return), ($ = C);
                  break e;
                }
                $ = d.return;
              }
          }
          if (
            ((q = l), Qt(), wt && typeof wt.onPostCommitFiberRoot == "function")
          )
            try {
              wt.onPostCommitFiberRoot(Br, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (le = n), (at.transition = t);
      }
    }
    return !1;
  }
  function qu(e, t, n) {
    (t = An(n, t)),
      (t = vu(e, t, 1)),
      (e = Yt(e, t, 1)),
      (t = Ue()),
      e !== null && (er(e, 1, t), Ge(e, t));
  }
  function ye(e, t, n) {
    if (e.tag === 3) qu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          qu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Xt === null || !Xt.has(r)))
          ) {
            (e = An(n, e)),
              (e = gu(t, e, 1)),
              (t = Yt(t, e, 1)),
              (e = Ue()),
              t !== null && (er(t, 1, e), Ge(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Af(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ue()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Pe === e &&
        (Fe & n) === n &&
        (Re === 4 || (Re === 3 && (Fe & 130023424) === Fe && 500 > ke() - Fi)
          ? mn(e, 0)
          : (Oi |= n)),
      Ge(e, t);
  }
  function Ju(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Hr), (Hr <<= 1), (Hr & 130023424) === 0 && (Hr = 4194304)));
    var n = Ue();
    (e = Lt(e, t)), e !== null && (er(e, t, n), Ge(e, n));
  }
  function If(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Ju(e, n);
  }
  function bf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), Ju(e, n);
  }
  var ec;
  ec = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || We.current) Ke = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (Ke = !1), Cf(e, t, n);
        Ke = (e.flags & 131072) !== 0;
      }
    else (Ke = !1), pe && (t.flags & 1048576) !== 0 && Ma(t, dl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        _l(e, t), (e = t.pendingProps);
        var l = Ln(t, De.current);
        Fn(t, n), (l = pi(null, t, r, e, l, n));
        var o = mi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Qe(r) ? ((o = !0), al(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              ii(t),
              (l.updater = jl),
              (t.stateNode = l),
              (l._reactInternals = t),
              wi(t, r, e, n),
              (t = ji(null, t, r, !0, o, n)))
            : ((t.tag = 0), pe && o && Xo(t), Be(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (_l(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Uf(r)),
            (e = ht(r, e)),
            l)
          ) {
            case 0:
              t = Ni(null, t, r, e, n);
              break e;
            case 1:
              t = _u(null, t, r, e, n);
              break e;
            case 11:
              t = ku(null, t, r, e, n);
              break e;
            case 14:
              t = Su(null, t, r, ht(r.type, e), n);
              break e;
          }
          throw Error(u(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          Ni(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          _u(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Cu(t), e === null)) throw Error(u(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Ua(e, t),
            gl(t, r, null, n);
          var a = t.memoizedState;
          if (((r = a.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = An(Error(u(423)), t)), (t = Ru(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = An(Error(u(424)), t)), (t = Ru(e, t, r, n, l));
              break e;
            } else
              for (
                nt = Ht(t.stateNode.containerInfo.firstChild),
                  tt = t,
                  pe = !0,
                  mt = null,
                  n = ba(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Mn(), r === l)) {
              t = zt(e, t, n);
              break e;
            }
            Be(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Wa(t),
          e === null && Jo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (a = l.children),
          Vo(r, l) ? (a = null) : o !== null && Vo(r, o) && (t.flags |= 32),
          Eu(e, t),
          Be(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && Jo(t), null;
      case 13:
        return Tu(e, t, n);
      case 4:
        return (
          si(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = $n(t, null, r, n)) : Be(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          ku(e, t, r, l, n)
        );
      case 7:
        return Be(e, t, t.pendingProps, n), t.child;
      case 8:
        return Be(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Be(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (a = l.value),
            ue(ml, r._currentValue),
            (r._currentValue = a),
            o !== null)
          )
            if (pt(o.value, a)) {
              if (o.children === l.children && !We.current) {
                t = zt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var d = o.dependencies;
                if (d !== null) {
                  a = o.child;
                  for (var f = d.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (o.tag === 1) {
                        (f = Pt(-1, n & -n)), (f.tag = 2);
                        var w = o.updateQueue;
                        if (w !== null) {
                          w = w.shared;
                          var j = w.pending;
                          j === null
                            ? (f.next = f)
                            : ((f.next = j.next), (j.next = f)),
                            (w.pending = f);
                        }
                      }
                      (o.lanes |= n),
                        (f = o.alternate),
                        f !== null && (f.lanes |= n),
                        li(o.return, n, t),
                        (d.lanes |= n);
                      break;
                    }
                    f = f.next;
                  }
                } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((a = o.return), a === null)) throw Error(u(341));
                  (a.lanes |= n),
                    (d = a.alternate),
                    d !== null && (d.lanes |= n),
                    li(a, n, t),
                    (a = o.sibling);
                } else a = o.child;
                if (a !== null) a.return = o;
                else
                  for (a = o; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((o = a.sibling), o !== null)) {
                      (o.return = a.return), (a = o);
                      break;
                    }
                    a = a.return;
                  }
                o = a;
              }
          Be(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Fn(t, n),
          (l = it(l)),
          (r = r(l)),
          (t.flags |= 1),
          Be(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ht(r, t.pendingProps)),
          (l = ht(r.type, l)),
          Su(e, t, r, l, n)
        );
      case 15:
        return Nu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          _l(e, t),
          (t.tag = 1),
          Qe(r) ? ((e = !0), al(t)) : (e = !1),
          Fn(t, n),
          mu(t, r, l),
          wi(t, r, l, n),
          ji(null, t, r, !0, e, n)
        );
      case 19:
        return Pu(e, t, n);
      case 22:
        return ju(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function tc(e, t) {
    return $s(e, t);
  }
  function Bf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
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
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ut(e, t, n, r) {
    return new Bf(e, t, n, r);
  }
  function Vi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Uf(e) {
    if (typeof e == "function") return Vi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === qe)) return 11;
      if (e === yt) return 14;
    }
    return 2;
  }
  function en(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ut(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Dl(e, t, n, r, l, o) {
    var a = 2;
    if (((r = e), typeof e == "function")) Vi(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case _e:
          return vn(n.children, l, o, t);
        case Te:
          (a = 8), (l |= 8);
          break;
        case He:
          return (
            (e = ut(12, n, t, l | 2)), (e.elementType = He), (e.lanes = o), e
          );
        case me:
          return (e = ut(13, n, t, l)), (e.elementType = me), (e.lanes = o), e;
        case $e:
          return (e = ut(19, n, t, l)), (e.elementType = $e), (e.lanes = o), e;
        case xe:
          return Al(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ze:
                a = 10;
                break e;
              case dt:
                a = 9;
                break e;
              case qe:
                a = 11;
                break e;
              case yt:
                a = 14;
                break e;
              case Ve:
                (a = 16), (r = null);
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ut(a, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function vn(e, t, n, r) {
    return (e = ut(7, e, r, t)), (e.lanes = n), e;
  }
  function Al(e, t, n, r) {
    return (
      (e = ut(22, e, r, t)),
      (e.elementType = xe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Wi(e, t, n) {
    return (e = ut(6, e, null, t)), (e.lanes = n), e;
  }
  function Qi(e, t, n) {
    return (
      (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Hf(e, t, n, r, l) {
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
      (this.eventTimes = yo(0)),
      (this.expirationTimes = yo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ki(e, t, n, r, l, o, a, d, f) {
    return (
      (e = new Hf(e, t, n, d, f)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ut(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ii(o),
      e
    );
  }
  function Vf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ne,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function nc(e) {
    if (!e) return Wt;
    e = e._reactInternals;
    e: {
      if (rn(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Qe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Qe(n)) return La(e, n, t);
    }
    return t;
  }
  function rc(e, t, n, r, l, o, a, d, f) {
    return (
      (e = Ki(n, r, !0, e, l, o, a, d, f)),
      (e.context = nc(null)),
      (n = e.current),
      (r = Ue()),
      (l = qt(n)),
      (o = Pt(r, l)),
      (o.callback = t ?? null),
      Yt(n, o, l),
      (e.current.lanes = l),
      er(e, l, r),
      Ge(e, r),
      e
    );
  }
  function Il(e, t, n, r) {
    var l = t.current,
      o = Ue(),
      a = qt(l);
    return (
      (n = nc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Pt(o, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Yt(l, t, a)),
      e !== null && (xt(e, l, a, o), vl(e, l, a)),
      a
    );
  }
  function bl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function lc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Yi(e, t) {
    lc(e, t), (e = e.alternate) && lc(e, t);
  }
  function Wf() {
    return null;
  }
  var oc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Gi(e) {
    this._internalRoot = e;
  }
  (Bl.prototype.render = Gi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      Il(e, t, null, null);
    }),
    (Bl.prototype.unmount = Gi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          pn(function () {
            Il(null, e, null, null);
          }),
            (t[_t] = null);
        }
      });
  function Bl(e) {
    this._internalRoot = e;
  }
  Bl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Us();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++);
      bt.splice(n, 0, e), n === 0 && Ws(e);
    }
  };
  function Xi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ul(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function ic() {}
  function Qf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var w = bl(a);
          o.call(w);
        };
      }
      var a = rc(t, r, e, 0, null, !1, !1, "", ic);
      return (
        (e._reactRootContainer = a),
        (e[_t] = a.current),
        mr(e.nodeType === 8 ? e.parentNode : e),
        pn(),
        a
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var d = r;
      r = function () {
        var w = bl(f);
        d.call(w);
      };
    }
    var f = Ki(e, 0, !1, null, null, !1, !1, "", ic);
    return (
      (e._reactRootContainer = f),
      (e[_t] = f.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      pn(function () {
        Il(t, f, n, r);
      }),
      f
    );
  }
  function Hl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var a = o;
      if (typeof l == "function") {
        var d = l;
        l = function () {
          var f = bl(a);
          d.call(f);
        };
      }
      Il(t, a, e, l);
    } else a = Qf(n, t, e, l, r);
    return bl(a);
  }
  (bs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Jn(t.pendingLanes);
          n !== 0 &&
            (wo(t, n | 1),
            Ge(t, ke()),
            (q & 6) === 0 && ((Bn = ke() + 500), Qt()));
        }
        break;
      case 13:
        pn(function () {
          var r = Lt(e, 1);
          if (r !== null) {
            var l = Ue();
            xt(r, e, 1, l);
          }
        }),
          Yi(e, 1);
    }
  }),
    (ko = function (e) {
      if (e.tag === 13) {
        var t = Lt(e, 134217728);
        if (t !== null) {
          var n = Ue();
          xt(t, e, 134217728, n);
        }
        Yi(e, 134217728);
      }
    }),
    (Bs = function (e) {
      if (e.tag === 13) {
        var t = qt(e),
          n = Lt(e, t);
        if (n !== null) {
          var r = Ue();
          xt(n, e, t, r);
        }
        Yi(e, t);
      }
    }),
    (Us = function () {
      return le;
    }),
    (Hs = function (e, t) {
      var n = le;
      try {
        return (le = e), t();
      } finally {
        le = n;
      }
    }),
    (po = function (e, t, n) {
      switch (t) {
        case "input":
          if ((lo(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = il(r);
                if (!l) throw Error(u(90));
                ps(r), lo(r, l);
              }
            }
          }
          break;
        case "textarea":
          xs(e, n);
          break;
        case "select":
          (t = n.value), t != null && xn(e, !!n.multiple, t, !1);
      }
    }),
    (Cs = Bi),
    (Rs = pn);
  var Kf = { usingClientEntryPoint: !1, Events: [gr, Rn, il, Es, _s, Bi] },
    Pr = {
      findFiberByHostInstance: ln,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Yf = {
      bundleType: Pr.bundleType,
      version: Pr.version,
      rendererPackageName: Pr.rendererPackageName,
      rendererConfig: Pr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ge.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = zs(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Pr.findFiberByHostInstance || Wf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber)
      try {
        (Br = Vl.inject(Yf)), (wt = Vl);
      } catch {}
  }
  return (
    (Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kf),
    (Xe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xi(t)) throw Error(u(200));
      return Vf(e, t, null, n);
    }),
    (Xe.createRoot = function (e, t) {
      if (!Xi(e)) throw Error(u(299));
      var n = !1,
        r = "",
        l = oc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ki(e, 1, !1, null, null, n, !1, r, l)),
        (e[_t] = t.current),
        mr(e.nodeType === 8 ? e.parentNode : e),
        new Gi(t)
      );
    }),
    (Xe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(u(188))
          : ((e = Object.keys(e).join(",")), Error(u(268, e)));
      return (e = zs(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Xe.flushSync = function (e) {
      return pn(e);
    }),
    (Xe.hydrate = function (e, t, n) {
      if (!Ul(t)) throw Error(u(200));
      return Hl(null, e, t, !0, n);
    }),
    (Xe.hydrateRoot = function (e, t, n) {
      if (!Xi(e)) throw Error(u(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        a = oc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = rc(t, null, e, 1, n ?? null, l, !1, o, a)),
        (e[_t] = t.current),
        mr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Bl(t);
    }),
    (Xe.render = function (e, t, n) {
      if (!Ul(t)) throw Error(u(200));
      return Hl(null, e, t, !1, n);
    }),
    (Xe.unmountComponentAtNode = function (e) {
      if (!Ul(e)) throw Error(u(40));
      return e._reactRootContainer
        ? (pn(function () {
            Hl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[_t] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Xe.unstable_batchedUpdates = Bi),
    (Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ul(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return Hl(e, t, n, !1, r);
    }),
    (Xe.version = "18.3.1-next-f1338f8080-20240426"),
    Xe
  );
}
var mc;
function Mc() {
  if (mc) return Ji.exports;
  mc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (c) {
        console.error(c);
      }
  }
  return i(), (Ji.exports = tp()), Ji.exports;
}
var hc;
function np() {
  if (hc) return Wl;
  hc = 1;
  var i = Mc();
  return (Wl.createRoot = i.createRoot), (Wl.hydrateRoot = i.hydrateRoot), Wl;
}
var rp = np();
const $r = new Map(),
  rs = new Map(),
  Yl = new Set(),
  Y = {
    reverse: !0,
    travel: 0,
    target: 0,
    velocity: 0,
    max: 0,
    vh: typeof window < "u" ? window.innerHeight : 800,
    progress: 0,
    content: null,
  };
let Vn = null,
  Gl = !1;
function ql() {
  const i = window.scrollY;
  (Y.target = Y.reverse ? Y.max - i : i),
    (Y.progress = Y.max > 0 ? Math.min(1, Math.max(0, i / Y.max)) : 0);
}
function gn(i, c) {
  const u = i.style.transform;
  i.style.transform = "none";
  const v = i.getBoundingClientRect(),
    m = Y.content ? Y.content.getBoundingClientRect().top : -window.scrollY;
  (c.top = v.top - m),
    (c.height = v.height),
    (c.center = c.top + v.height / 2),
    (i.style.transform = u);
}
function ss() {
  (Y.vh = window.innerHeight),
    $r.forEach((i, c) => gn(c, i)),
    rs.forEach((i, c) => gn(c, i));
}
function as() {
  ql(), (Y.travel = Y.target), (Y.velocity = 0), $c();
}
function $c() {
  const { travel: i, vh: c } = Y;
  Y.content &&
    (Y.content.style.transform = `translate3d(0, ${(-i).toFixed(2)}px, 0)`),
    $r.forEach((u, v) => {
      const m = (i + c / 2 - u.center) / c,
        y = Math.max(-1.6, Math.min(1.6, m)),
        k = y * u.speed * 100,
        R = y * u.x * 100,
        E = y * u.rotate,
        F = 1 + y * u.scale;
      (v.style.transform = `translate3d(${R.toFixed(2)}px, ${k.toFixed(
        2
      )}px, 0) rotate(${E.toFixed(2)}deg) scale(${F.toFixed(3)})`),
        u.fade &&
          (v.style.opacity = String(
            Math.max(0, Math.min(1, 1 - Math.abs(y) * u.fade))
          ));
    }),
    Yl.forEach((u) => u(Y));
}
function Oc() {
  const i = Y.travel,
    c = Gl ? 1 : 0.12;
  (Y.travel += (Y.target - Y.travel) * c),
    Math.abs(Y.target - Y.travel) < 0.06 && (Y.travel = Y.target),
    (Y.velocity = Y.travel - i),
    $c(),
    (Vn = requestAnimationFrame(Oc));
}
function Fc() {
  ql();
}
function Dc() {
  ss(), as();
}
function us() {
  Vn == null &&
    ((Gl = window.matchMedia("(prefers-reduced-motion: reduce)").matches),
    (Y.vh = window.innerHeight),
    ql(),
    (Y.travel = Y.target),
    (Vn = requestAnimationFrame(Oc)),
    window.addEventListener("scroll", Fc, { passive: !0 }),
    window.addEventListener("resize", Dc));
}
function cs() {
  Vn != null &&
    ($r.size ||
      Yl.size ||
      Y.content ||
      (cancelAnimationFrame(Vn),
      (Vn = null),
      window.removeEventListener("scroll", Fc),
      window.removeEventListener("resize", Dc)));
}
function lp(i, { max: c = 0, reverse: u = !0 } = {}) {
  (Y.content = i), (Y.max = c), (Y.reverse = u), us(), ss(), as();
}
function op(i) {
  (Y.max = i), ql();
}
function ip() {
  Y.content && (Y.content.style.transform = ""), (Y.content = null), cs();
}
function Ac(i) {
  return (
    Yl.add(i),
    us(),
    () => {
      Yl.delete(i), cs();
    }
  );
}
function Wn(i = 0.15, c = {}) {
  const u = T.useRef(null),
    v = JSON.stringify(c);
  return (
    T.useEffect(() => {
      const m = u.current;
      if (
        !m ||
        ((Gl = window.matchMedia("(prefers-reduced-motion: reduce)").matches),
        Gl)
      )
        return;
      const {
        x: y = 0,
        rotate: k = 0,
        scale: R = 0,
        fade: E = 0,
        minWidth: F = 0,
      } = JSON.parse(v);
      if (F && window.innerWidth < F) return;
      const P = {
        speed: i,
        x: y,
        rotate: k,
        scale: R,
        fade: E,
        top: 0,
        height: 0,
        center: 0,
      };
      gn(m, P), m.classList.add("parallax-el"), $r.set(m, P), us();
      const z = setTimeout(() => gn(m, P), 500);
      return () => {
        clearTimeout(z), $r.delete(m), (m.style.transform = ""), cs();
      };
    }, [i, v]),
    u
  );
}
function Ic(i = {}) {
  const {
      threshold: c = 0.18,
      rootMargin: u = "0px 0px -8% 0px",
      once: v = !0,
    } = i,
    m = T.useRef(null),
    [y, k] = T.useState(!1);
  return (
    T.useEffect(() => {
      const R = m.current;
      if (!R) return;
      if (typeof IntersectionObserver > "u") {
        k(!0);
        return;
      }
      const E = new IntersectionObserver(
        ([F]) => {
          F.isIntersecting ? (k(!0), v && E.disconnect()) : v || k(!1);
        },
        { threshold: c, rootMargin: u }
      );
      return E.observe(R), () => E.disconnect();
    }, [c, u, v]),
    [m, y]
  );
}
function sp() {
  const i = T.useRef(null),
    [c, u] = T.useState(0);
  return (
    T.useEffect(() => {
      const v = i.current;
      if (!v) return;
      const m = {
        speed: 0,
        x: 0,
        rotate: 0,
        scale: 0,
        fade: 0,
        top: 0,
        height: 0,
        center: 0,
      };
      gn(v, m), rs.set(v, m);
      let y = -1;
      const k = Ac(({ travel: F, vh: P }) => {
          const z = m.top - F,
            U = Math.max(0, Math.min(1, (P - z) / (m.height + P)));
          Math.abs(U - y) > 0.004 && ((y = U), u(U));
        }),
        R = setTimeout(() => gn(v, m), 500),
        E = () => gn(v, m);
      return (
        window.addEventListener("resize", E),
        () => {
          clearTimeout(R),
            window.removeEventListener("resize", E),
            rs.delete(v),
            k();
        }
      );
    }, []),
    [i, c]
  );
}
function Jl(i) {
  const c = T.useRef(i);
  (c.current = i), T.useEffect(() => Ac((u) => c.current(u)), []);
}
const ap = !0;
function up({ children: i }) {
  const c = T.useRef(null),
    u = T.useRef(null);
  return (
    T.useLayoutEffect(() => {
      var F;
      const v = c.current,
        m = u.current;
      if (!v || !m) return;
      const y = () => {
        const P = v.offsetHeight;
        (m.style.height = `${P}px`),
          op(Math.max(0, P - window.innerHeight)),
          ss(),
          as();
      };
      lp(v, {
        max: Math.max(0, v.offsetHeight - window.innerHeight),
        reverse: ap,
      }),
        y();
      const k = new ResizeObserver(y);
      k.observe(v), window.addEventListener("resize", y);
      const R = setTimeout(y, 400),
        E = setTimeout(y, 1400);
      return (
        (F = document.fonts) == null || F.ready.then(y).catch(() => {}),
        () => {
          clearTimeout(R),
            clearTimeout(E),
            k.disconnect(),
            window.removeEventListener("resize", y),
            ip();
        }
      );
    }, []),
    T.useEffect(() => {
      window.location.hash &&
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
    }, []),
    T.useEffect(() => {
      const v = (m) => {
        var oe, W;
        if (m.defaultPrevented || m.button !== 0 || m.metaKey || m.ctrlKey)
          return;
        const y =
          (W = (oe = m.target).closest) == null
            ? void 0
            : W.call(oe, 'a[href^="#"]');
        if (!y) return;
        const k = y.getAttribute("href").slice(1),
          R = k ? document.getElementById(k) : null,
          E = c.current;
        if (!R || !E) return;
        if ((m.preventDefault(), k === "top")) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const F = R.getBoundingClientRect().top - E.getBoundingClientRect().top,
          z = Math.max(0, F - 24),
          U = Y.max - z;
        window.scrollTo({
          top: Math.max(0, Math.min(Y.max, U)),
          behavior: "smooth",
        });
      };
      return (
        document.addEventListener("click", v),
        () => document.removeEventListener("click", v)
      );
    }, []),
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", { ref: u, "aria-hidden": "true" }),
        s.jsx("div", {
          className: "fixed inset-0 overflow-hidden",
          children: s.jsx("div", {
            ref: c,
            className: "w-full will-change-transform flex flex-col-reverse",
            children: i,
          }),
        }),
      ],
    })
  );
}
const ie = {
    name: "Mars Coin",
    nameTop: "MARS",
    nameBottom: "COIN",
    ticker: "$MARSCOIN",
    chain: "Robinhood Chain",
  },
  Ft = "0x56e82e94b1354c771f5901e4af7ee4f1b08d4011",
  Ot = /^0x0*$/i.test(Ft),
  se = {
    ticker: "$SPCX",
    address: "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa",
    minHold: "100K+",
  },
  cp = `https://www.ponsfamily.com/launchpad/${Ft}`,
  dp = `Buy ${ie.ticker}`,
  bc = [
    {
      id: "x",
      label: "X / Twitter",
      handle: "@MarsCoinOnRH",
      href: "https://x.com/MarsCoinOnRH",
      tint: "bg-earth",
      emoji: "🛰️",
    },
    {
      id: "telegram",
      label: "Telegram",
      handle: "t.me/MarsCoin_RH",
      href: "https://t.me/MarsCoin_RH",
      tint: "bg-solar",
      emoji: "📡",
    },
  ],
  vc = [
    {
      n: 1,
      label: "Total supply",
      value: "1 Billion",
      tint: "var(--color-ion)",
    },
    {
      n: 2,
      label: "Launchpad",
      value: "Pons family",
      tint: "var(--color-solar)",
    },
    {
      n: 3,
      label: "Reward",
      value: se.ticker,
      tint: "var(--color-mars-light)",
    },
    {
      n: 4,
      label: "Reward token CA",
      value: se.address,
      tint: "var(--color-aurora)",
      kind: "ca",
    },
  ],
  Hn = [
    { id: "top", name: "Launch Pad", sub: "Earth, sea level", glyph: "🛫" },
    { id: "narrative", name: "The Narrative", sub: "Why we left", glyph: "📖" },
    { id: "memes", name: "Meme Bay", sub: "Cargo hold", glyph: "🖼️" },
    {
      id: "approach",
      name: "The Rewards Feed",
      sub: `${se.ticker} distributions`,
      glyph: "🔴",
    },
    {
      id: "stats",
      name: `${ie.ticker} Numbers`,
      sub: "Live numbers",
      glyph: "📊",
    },
    { id: "tokenomics", name: "Tokenomics", sub: "The numbers", glyph: "🧮" },
    {
      id: "buy",
      name: `${ie.ticker} Mechanics`,
      sub: "How it works",
      glyph: "🎟️",
    },
    { id: "board", name: "Board Now", sub: "Final call", glyph: "🚀" },
  ],
  Xl = (i = Ft, c = 6, u = 6) =>
    i.length > c + u + 3 ? `${i.slice(0, c)}...${i.slice(-u)}` : i,
  fp = {
    VITE_API_BASE_URL: "https://api.marscoin.meme",
    VITE_USE_MOCK: "false",
  },
  Bc = fp ?? {},
  Uc = String(Bc.VITE_USE_MOCK ?? "").toLowerCase() === "true",
  Zl = String(Bc.VITE_API_BASE_URL ?? "")
    .trim()
    .replace(/\/+$/, ""),
  gc = !Uc && Zl ? `${Zl}/rewards` : "",
  pp = !Uc && Zl ? `${Zl}/distribution` : "",
  mp = 700,
  Mr = 1,
  hp = "https://robinhoodchain.blockscout.com/tx/";
function vp(i, c) {
  const u =
      (i == null ? void 0 : i.data) ??
      (i == null ? void 0 : i.transactions) ??
      (i == null ? void 0 : i.items) ??
      (i == null ? void 0 : i.distributions) ??
      (i == null ? void 0 : i.rows) ??
      (Array.isArray(i) ? i : []),
    v = c ?? {},
    m = Number(
      v.collectedQuote ??
        (i == null ? void 0 : i.accumulated) ??
        (i == null ? void 0 : i.pending) ??
        0
    );
  return {
    accumulated: Number.isFinite(m) ? m : 0,
    distributing:
      v.status !== void 0
        ? v.status === "distributing"
        : !!(
            (i == null ? void 0 : i.distributing) ??
            (i == null ? void 0 : i.is_distributing) ??
            !1
          ),
    distributions: u.map(gp).filter((y) => y.txHash),
  };
}
function gp(i, c) {
  const u =
      (i == null ? void 0 : i.timestamp) ??
      (i == null ? void 0 : i.time) ??
      (i == null ? void 0 : i.created_at) ??
      (i == null ? void 0 : i.at) ??
      null,
    v = u === null ? NaN : new Date(u).getTime();
  return {
    id: String(
      (i == null ? void 0 : i.id) ??
        (i == null ? void 0 : i.txHash) ??
        (i == null ? void 0 : i.tx_hash) ??
        c
    ),
    amount: Number(
      (i == null ? void 0 : i.amount) ?? (i == null ? void 0 : i.value) ?? 0
    ),
    wallet: String(
      (i == null ? void 0 : i.wallet) ??
        (i == null ? void 0 : i.address) ??
        (i == null ? void 0 : i.to) ??
        ""
    ),
    txHash: String(
      (i == null ? void 0 : i.txHash) ??
        (i == null ? void 0 : i.tx_hash) ??
        (i == null ? void 0 : i.hash) ??
        ""
    ),
    txUrl: String((i == null ? void 0 : i.txUrl) ?? ""),
    at: Number.isFinite(v) ? v : Date.now(),
  };
}
const xc = [
    "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa",
    "0x8Ba1f109551bD432803012645Ac136ddd64DBA72",
    "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
    "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
    "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
  ],
  xp = (i) =>
    Array.from(
      { length: i },
      () => "0123456789abcdef"[Math.floor(Math.random() * 16)]
    ).join("");
function yp() {
  const i = Date.now(),
    c = Array.from({ length: 8 }, (u, v) => ({
      id: `mock-${v}`,
      amount: 42e-7 + Math.random() * 9e-5,
      wallet: xc[v % xc.length],
      txHash: `0x${xp(64)}`,
      at: i - (v * 37 + Math.floor(Math.random() * 25)) * 6e4,
    }));
  return {
    accumulated: Number((Math.random() * 0.94).toFixed(4)),
    distributing: !1,
    distributions: c,
  };
}
async function yc(i, c) {
  const u = await fetch(i, {
    signal: c,
    headers: { accept: "application/json" },
  });
  if (!u.ok) throw new Error(`Rewards request failed (${u.status})`);
  return u.json();
}
async function wp({ signal: i } = {}) {
  if (gc) {
    const [c, u] = await Promise.allSettled([yc(gc, i), yc(pp, i)]);
    if (c.status === "rejected") throw c.reason;
    return vp(c.value, u.status === "fulfilled" ? u.value : null);
  }
  return new Promise((c, u) => {
    const v = setTimeout(() => c(yp()), mp);
    i == null ||
      i.addEventListener("abort", () => {
        clearTimeout(v), u(new DOMException("Aborted", "AbortError"));
      });
  });
}
function Hc(i) {
  if (!Number.isFinite(i) || i <= 0) return "0";
  if (i >= 1) return i.toFixed(4).replace(/\.?0+$/, "");
  const c = Math.min(18, Math.ceil(-Math.log10(i)) + 4);
  return i.toFixed(c).replace(/0+$/, "").replace(/\.$/, "");
}
function wc(i = "", c = 6, u = 4) {
  return i.length > c + u + 1 ? `${i.slice(0, c)}…${i.slice(-u)}` : i;
}
function kp(i, c = Date.now()) {
  const u = Math.max(0, Math.round((c - i) / 1e3));
  if (u < 45) return "just now";
  const v = Math.round(u / 60);
  if (v < 60) return `${v} minute${v === 1 ? "" : "s"} ago`;
  const m = Math.round(v / 60);
  if (m < 24) return `${m} hour${m === 1 ? "" : "s"} ago`;
  const y = Math.round(m / 24);
  return `${y} day${y === 1 ? "" : "s"} ago`;
}
function Sp({ pollMs: i = 2e4 } = {}) {
  const [c, u] = T.useState({ status: "loading", data: null, error: null }),
    v = T.useRef(null),
    m = T.useCallback(async ({ silent: y = !1 } = {}) => {
      var R;
      (R = v.current) == null || R.abort();
      const k = new AbortController();
      (v.current = k),
        y ||
          u((E) => ({
            ...E,
            status: E.data ? "refreshing" : "loading",
            error: null,
          }));
      try {
        const E = await wp({ signal: k.signal });
        if (k.signal.aborted) return;
        u({ status: "success", data: E, error: null });
      } catch (E) {
        if ((E == null ? void 0 : E.name) === "AbortError") return;
        u((F) => ({
          status: "error",
          data: F.data,
          error: (E == null ? void 0 : E.message) ?? "Feed unavailable.",
        }));
      }
    }, []);
  return (
    T.useEffect(
      () => (
        m(),
        () => {
          var y;
          return (y = v.current) == null ? void 0 : y.abort();
        }
      ),
      [m]
    ),
    T.useEffect(() => {
      if (!i) return;
      const y = setInterval(() => m({ silent: !0 }), i);
      return () => clearInterval(y);
    }, [i, m]),
    c
  );
}
const Np = "/gifs/rewards.webp";
function jp() {
  const { status: i, data: c, error: u } = Sp(),
    v = i === "loading",
    m = (c == null ? void 0 : c.distributions) ?? [];
  return s.jsxs("div", {
    className:
      "mx-auto flex max-h-[calc(100svh-8vh-11rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[1.75rem] border-[3px] border-cream/25 bg-void/85 shadow-[0_28px_70px_-18px_rgb(0_0_0/0.9)] backdrop-blur-md sm:max-h-[calc(100svh-8vh-8rem)]",
    children: [
      s.jsxs("div", {
        className:
          "flex items-center gap-2.5 border-b-2 border-cream/10 px-5 py-3",
        children: [
          s.jsx("span", {
            className: "anim-hud-tick h-2 w-2 shrink-0 rounded-full bg-solar",
            "aria-hidden": "true",
          }),
          s.jsxs("p", {
            className:
              "font-body text-[0.68rem] font-bold uppercase tracking-[0.24em] text-cream/55 sm:text-xs",
            children: [se.ticker, " live distribution"],
          }),
        ],
      }),
      s.jsx(Ep, {
        accumulated: (c == null ? void 0 : c.accumulated) ?? 0,
        distributing: (c == null ? void 0 : c.distributing) ?? !1,
        loading: v,
      }),
      s.jsx("img", {
        src: Np,
        alt: "",
        loading: "lazy",
        decoding: "async",
        className:
          "mx-auto block min-h-0 w-auto max-w-[14rem] flex-1 object-contain sm:max-w-[17rem]",
      }),
      s.jsx("div", {
        className: "shrink-0 border-t-2 border-cream/10 p-3 sm:p-5",
        children: v
          ? s.jsx("div", {
              className: "flex gap-3 overflow-hidden",
              children: [0, 1, 2].map((y) =>
                s.jsx(
                  "div",
                  {
                    className:
                      "h-28 w-64 shrink-0 animate-pulse rounded-2xl bg-cream/8",
                  },
                  y
                )
              ),
            })
          : m.length
          ? s.jsx("ul", {
              className:
                "-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2",
              children: m.map((y) => s.jsx(_p, { row: y }, y.id)),
            })
          : s.jsx("p", {
              className: "font-body text-sm font-bold text-cream/45",
              children: u
                ? `Feed unavailable — ${u}`
                : "No distributions yet. The first batch is on its way.",
            }),
      }),
    ],
  });
}
function Ep({ accumulated: i, distributing: c, loading: u }) {
  const v = Math.min(100, Math.max(0, (i / Mr) * 100)),
    m = c || i >= Mr;
  return s.jsxs("div", {
    className: "px-5 py-4",
    children: [
      s.jsxs("div", {
        className: "flex items-baseline justify-between gap-3",
        children: [
          s.jsx("p", {
            className: `min-w-0 font-body text-[0.62rem] font-bold uppercase leading-tight tracking-[0.18em] sm:text-xs sm:tracking-[0.22em] ${
              m ? "anim-hud-tick text-solar" : "text-cream/45"
            }`,
            children: m ? "Distributing" : "Accumulating fees",
          }),
          s.jsxs("p", {
            className:
              "shrink-0 whitespace-nowrap font-display text-sm font-black text-cream sm:text-xl",
            children: [
              u ? "—" : Hc(i),
              s.jsxs("span", {
                className: "text-cream/40",
                children: [" / ", Mr, " ", se.ticker],
              }),
            ],
          }),
        ],
      }),
      s.jsx("div", {
        className:
          "mt-3 h-4 w-full overflow-hidden rounded-full border-2 border-cream/15 bg-void/80",
        children: s.jsx("div", {
          className:
            "h-full rounded-full transition-[width] duration-1000 ease-out",
          style: {
            width: `${u ? 0 : v}%`,
            background: m
              ? "var(--color-solar)"
              : "linear-gradient(90deg, var(--color-mars) 0%, var(--color-ember) 60%, var(--color-solar) 100%)",
            boxShadow:
              "0 0 14px color-mix(in srgb, var(--color-ember) 55%, transparent)",
          },
        }),
      }),
      s.jsx("p", {
        className:
          "mt-2 font-body text-xs font-bold text-cream/35 sm:text-[0.8rem]",
        children: m
          ? `Sending ${Mr} ${se.ticker} to every eligible holder, then the meter resets.`
          : `Every transaction pays in. At ${Mr} ${se.ticker} the batch goes out.`,
      }),
    ],
  });
}
function _p({ row: i }) {
  return s.jsxs("li", {
    className:
      "w-64 shrink-0 snap-start rounded-2xl border-2 border-cream/12 bg-deep/70 p-4",
    children: [
      s.jsx("p", {
        className:
          "truncate font-display text-base font-black leading-none text-cream",
        title: `${i.amount}`,
        children: Hc(i.amount),
      }),
      s.jsxs("p", {
        className:
          "mt-1.5 font-body text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cream/35",
        children: [
          s.jsx("span", { className: "text-mars-light", children: se.ticker }),
          " received",
        ],
      }),
      s.jsx("p", {
        className: "mt-3 font-mono text-xs text-cream/60",
        title: i.wallet,
        children: wc(i.wallet),
      }),
      s.jsx("p", {
        className: "mt-1 font-body text-[0.72rem] font-bold text-cream/35",
        children: kp(i.at),
      }),
      s.jsxs("a", {
        href: `${hp}${i.txHash}`,
        target: "_blank",
        rel: "noreferrer noopener",
        className:
          "mt-2 inline-flex items-center gap-1 font-mono text-[0.72rem] text-ion transition-colors duration-200 hover:text-cream",
        title: i.txHash,
        children: [
          wc(i.txHash, 8, 4),
          s.jsx("span", { "aria-hidden": "true", children: "↗" }),
        ],
      }),
    ],
  });
}
const Ql = "var(--color-ink)",
  kc = "#8e93b5",
  Cp = "#4a4f70",
  Rp = "/asteroid.webp",
  Tp = "/satellite.webp",
  Sc = {
    "var(--color-violet)": "hue-rotate(-18deg) saturate(0.85) brightness(0.9)",
    "var(--color-earth)": "hue-rotate(12deg) saturate(0.9) brightness(1.08)",
    "var(--color-aurora)": "hue-rotate(-10deg) saturate(0.8) brightness(1.05)",
    "var(--color-regolith)": "saturate(0.72) brightness(1.04)",
    "#7d6f66": "saturate(0.55) brightness(0.92)",
    "#6c6068": "hue-rotate(-14deg) saturate(0.5) brightness(0.82)",
  },
  Lp = { chunk: 0, shard: 128, slab: 241 },
  Vc = (i) => (Sc[i] ? { filter: Sc[i] } : null);
function Wc({ variant: i = "chunk", from: c, className: u = "", style: v }) {
  return s.jsx("img", {
    src: Rp,
    width: 420,
    height: 377,
    alt: "",
    loading: "lazy",
    decoding: "async",
    className: u,
    style: { rotate: `${Lp[i] ?? 0}deg`, ...Vc(c), ...v },
  });
}
function ls({ className: i = "", style: c, tint: u }) {
  return s.jsx("img", {
    src: Tp,
    width: 420,
    height: 348,
    alt: "",
    loading: "lazy",
    decoding: "async",
    className: i,
    style: { ...Vc(u), ...c },
  });
}
const Pp = "/rocketship.webp",
  zp = 520,
  Mp = 878,
  $p = 1;
function Op({ className: i = "", style: c }) {
  return s.jsx("img", {
    src: Pp,
    width: zp,
    height: Mp,
    alt: "Mars Coin rocket",
    decoding: "async",
    className: i,
    style: c,
  });
}
function Fp({ className: i = "", style: c }) {
  const u = T.useId().replace(/:/g, "");
  return s.jsxs("svg", {
    viewBox: "0 0 240 340",
    className: i,
    style: c,
    "aria-hidden": "true",
    children: [
      s.jsxs("defs", {
        children: [
          s.jsxs("linearGradient", {
            id: `fl-${u}`,
            x1: "0",
            y1: "0",
            x2: "0",
            y2: "1",
            children: [
              s.jsx("stop", { offset: "0%", stopColor: "#fff6d8" }),
              s.jsx("stop", { offset: "26%", stopColor: "var(--color-solar)" }),
              s.jsx("stop", { offset: "62%", stopColor: "var(--color-ember)" }),
              s.jsx("stop", { offset: "100%", stopColor: "rgba(255,90,40,0)" }),
            ],
          }),
          s.jsxs("linearGradient", {
            id: `co-${u}`,
            x1: "0",
            y1: "0",
            x2: "0",
            y2: "1",
            children: [
              s.jsx("stop", { offset: "0%", stopColor: "#ffffff" }),
              s.jsx("stop", { offset: "55%", stopColor: "#cfe8ff" }),
              s.jsx("stop", {
                offset: "100%",
                stopColor: "rgba(180,220,255,0)",
              }),
            ],
          }),
          s.jsxs("radialGradient", {
            id: `sm-${u}`,
            cx: "0.5",
            cy: "0.5",
            r: "0.5",
            children: [
              s.jsx("stop", {
                offset: "0%",
                stopColor: "rgba(190,190,205,0.5)",
              }),
              s.jsx("stop", {
                offset: "100%",
                stopColor: "rgba(150,150,170,0)",
              }),
            ],
          }),
        ],
      }),
      s.jsx("g", {
        children: [
          [66, 150, 54],
          [176, 176, 62],
          [104, 236, 70],
          [156, 288, 58],
          [72, 300, 46],
        ].map(([v, m, y], k) =>
          s.jsx("circle", { cx: v, cy: m, r: y, fill: `url(#sm-${u})` }, k)
        ),
      }),
      s.jsxs("g", {
        className: "anim-flicker",
        children: [
          s.jsx("path", {
            d: "M120 0c40 0 54 46 54 96 0 78-30 148-54 244-24-96-54-166-54-244C66 46 80 0 120 0Z",
            fill: `url(#fl-${u})`,
          }),
          s.jsx("path", {
            d: "M120 4c20 0 27 30 27 66 0 52-14 100-27 162-13-62-27-110-27-162C93 34 100 4 120 4Z",
            fill: `url(#co-${u})`,
          }),
        ],
      }),
    ],
  });
}
function Dp({ className: i = "", style: c }) {
  return s.jsx("svg", {
    viewBox: "0 0 360 200",
    className: i,
    style: c,
    "aria-hidden": "true",
    children: s.jsx("g", {
      stroke: Ql,
      strokeWidth: "8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      children: [-1, 1].map((u) =>
        s.jsxs(
          "g",
          {
            children: [
              s.jsx("path", {
                d: `M${180 + u * 42} 14 L ${180 + u * 140} 150`,
                stroke: Ql,
                strokeWidth: "20",
              }),
              s.jsx("path", {
                d: `M${180 + u * 42} 14 L ${180 + u * 140} 150`,
                stroke: kc,
                strokeWidth: "11",
              }),
              s.jsx("path", {
                d: `M${180 + u * 48} 78 L ${180 + u * 116} 112`,
                stroke: Ql,
                strokeWidth: "14",
              }),
              s.jsx("path", {
                d: `M${180 + u * 48} 78 L ${180 + u * 116} 112`,
                stroke: Cp,
                strokeWidth: "7",
              }),
              s.jsx("ellipse", {
                cx: 180 + u * 142,
                cy: 158,
                rx: "34",
                ry: "14",
                fill: kc,
                stroke: Ql,
                strokeWidth: "8",
              }),
            ],
          },
          u
        )
      ),
    }),
  });
}
function Qc({
  count: i = 14,
  className: c = "",
  tint: u = "var(--color-cream)",
}) {
  return s.jsx("div", {
    className: `pointer-events-none absolute inset-0 overflow-hidden ${c}`,
    "aria-hidden": "true",
    children: Array.from({ length: i }).map((v, m) =>
      s.jsx(
        "span",
        {
          className: "anim-twinkle absolute rounded-full",
          style: {
            left: `${(m * 37) % 97}%`,
            top: `${(m * 53) % 88}%`,
            height: m % 5 === 0 ? "3px" : "2px",
            width: m % 5 === 0 ? "3px" : "2px",
            background: m % 3 === 0 ? "var(--color-ion)" : u,
            animationDelay: `${(m % 7) * 1.1}s`,
            animationDuration: `${8 + (m % 5)}s`,
            boxShadow: `0 0 10px ${m % 3 === 0 ? "var(--color-ion)" : u}`,
          },
        },
        m
      )
    ),
  });
}
const Ap = "/bg.webp",
  Nc = 1280 / 2880,
  Ip =
    "data:image/webp;base64,UklGRnYCAABXRUJQVlA4IGoCAADQDACdASogAEgAPulmqE4pJiQiMzgMASAdCWwAswXA1X5XC3Ucxmt2KdoGzPuHQpu/Z1SJw/T74j4WyZml9EFtSqa6hQn9rKY4Pgz6SXAZGeOwdrXX3JlVMlejXKI/V0uOtXMSZ/sN1yE0HBLnKoAA/uaGG/q8CeTDeL9s2y7QE/Ql7HAzY/dnH8xszfrvy98/KwGk5T8eppHeK7B2xFH3Sp9b3rFpWyAdhz1aXJWRL2tHnDyKJQSs0pv6F6E7Pzcr2KV06RlmgywD+OMjfNr/j3iAB2borzbjCclDtxEo/b8TpPTQmVhgZLPUVsPe5tdd5A9EEhzgYrli0E2yd5+Li1Y7RMxkBL2uF280qomz4qW2IcAN7PpITHazfaTZSYW0tnq3zAxOf+JcOn8zaPx4rFcCpie0tMfC247rZneebElME7vMrgfeOV5WkO/iPTQxYqyFZyJlwGygqizJpUeMajXgmj1QToTUjgtssNehEMvBx30HvBOov2sRqoOCIw0GX5AOGTF17v1ir8/iYDpIxNvr/sb/gHMlhE29AqLfp5TFiBupYY3V1OhyoPrUE+FFTTlYlC/qTNn4HjrE8uAHr+uzE0NK/Z38gOdQy1u8JQ710qGwO6WlxE0+NYjyd+dFmxFL7kzYy1kxz3Zs30MQMkE0ZrA95fMVTecm9FzMnoPJCu4MGm4lFtpcDKdaJSgkxPlGa/rTGdeGJjbogPNtO0oI7QwHxTftiJJS4OnE5uaQISSqOZEU68LPvgTwuzRGvGOehKjHqTRMb0o++eAXSM+fIXnr4/GKXgYO7BP9u7qn8xxSqzn+AAA=",
  bp = 3.4,
  Bp = 0.945,
  Up = (i) => (i < 640 ? 0.71 : 0.78),
  Hp = 0.088,
  Vp = 0.4,
  Wp = 0.46,
  Qp = 1.1,
  Kp = 0.16,
  Yp = 0.26,
  Gp = 0.26,
  Xp = 0.62,
  Zp = 0.85,
  Kc = 620,
  qp = (i, c) => ((i % c) + c) % c,
  ct = (i) => Math.min(1, Math.max(0, i)),
  ns = (i) => i * i * (3 - 2 * i);
function Jp() {
  const i = T.useRef(null),
    c = T.useRef(null),
    u = T.useRef(null),
    v = T.useRef(null),
    m = T.useRef(null),
    y = T.useRef(null),
    k = T.useRef(null),
    R = T.useRef(null),
    E = T.useRef(null),
    F = T.useRef({ w: 0, h: 0, rest: 0, end: 0 }),
    P = T.useRef(0.78),
    z = T.useRef(0),
    U = T.useRef(1 / 0),
    oe = T.useRef(0);
  return (
    T.useEffect(() => {
      var ne;
      const W = () => {
        var He;
        const we = window.innerWidth,
          Me = window.innerHeight,
          ge = Y.content,
          Ee = Math.max(we / Nc, Me * bp);
        if (
          ((P.current = Up(we)),
          (F.current = {
            w: Ee * Nc,
            h: Ee,
            rest: P.current * Me - Ee * Bp,
            end: Math.min(0, Vp * Me - Ee * Hp),
          }),
          i.current &&
            ((i.current.style.width = `${F.current.w}px`),
            (i.current.style.height = `${Ee}px`)),
          (z.current =
            ((He = u.current) == null ? void 0 : He.offsetHeight) ?? 0),
          !ge)
        )
          return;
        const Ne = ge.getBoundingClientRect().top,
          _e =
            document.querySelector("#approach h2") ||
            document.getElementById("memes");
        _e && (U.current = _e.getBoundingClientRect().top - Ne);
        const Te = document.getElementById("mars-side");
        Te && (oe.current = Te.getBoundingClientRect().bottom - Ne);
      };
      W();
      const K = setTimeout(W, 600),
        Q = setTimeout(W, 1600);
      return (
        window.addEventListener("resize", W),
        (ne = document.fonts) == null || ne.ready.then(W).catch(() => {}),
        () => {
          clearTimeout(K),
            clearTimeout(Q),
            window.removeEventListener("resize", W);
        }
      );
    }, []),
    Jl(({ travel: W, max: K, vh: Q }) => {
      const ne = K - W,
        we = Math.max(1, K - oe.current),
        Me = ns(ct((K - W) / we)),
        { rest: ge, end: Ee } = F.current;
      if (i.current) {
        const me = ge + (Ee - ge) * Me;
        i.current.style.transform = `translate3d(-50%, ${me.toFixed(1)}px, 0)`;
      }
      const Ne = ns(ct(ne / (Q * Qp))),
        _e = Q * (P.current + (Wp - P.current) * Ne),
        Te = U.current - W,
        He = ct((Te / Q - Yp) / Gp),
        Ze = ns(ct((Te / Q - Xp) / Zp)),
        dt = 1 - ct(Ze / 0.5);
      if (c.current) {
        const me = Ze * Q * 0.06,
          $e = _e + me - z.current * $p;
        (c.current.style.transform = `translate3d(-50%, ${$e.toFixed(
          1
        )}px, 0)`),
          (c.current.style.opacity = dt.toFixed(3));
      }
      if (v.current) {
        const me = ct(ne / (Q * Kp)) * (1 - ct(He / 0.7));
        v.current.style.opacity = me.toFixed(3);
      }
      m.current && (m.current.style.opacity = ct((He - 0.35) / 0.4).toFixed(3)),
        y.current &&
          ((y.current.style.opacity = (dt * ct(ne / (Q * 0.4))).toFixed(3)),
          (y.current.style.transform = `translate3d(0, ${qp(
            -W * 0.5,
            Kc
          ).toFixed(1)}px, 0)`)),
        E.current &&
          (E.current.style.opacity = (ct((ne / Q - 0.5) / 0.8) * dt).toFixed(
            3
          ));
      const qe = ct((oe.current - W) / (Q * 0.6));
      if (
        (R.current && (R.current.style.opacity = (qe * 0.86).toFixed(3)),
        k.current)
      ) {
        const me = ct((Ze - 0.72) / 0.22) * (1 - qe),
          $e = k.current;
        ($e.style.opacity = me.toFixed(3)),
          ($e.style.visibility = me > 0.01 ? "visible" : "hidden"),
          ($e.style.pointerEvents = me > 0.5 ? "auto" : "none");
      }
    }),
    s.jsxs(s.Fragment, {
      children: [
        s.jsxs("div", {
          className:
            "pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0a0f0d]",
          "aria-hidden": "true",
          children: [
            s.jsxs("div", {
              ref: i,
              className:
                "absolute left-1/2 top-0 will-change-transform bg-cover",
              style: {
                backgroundImage: `url("${Ip}")`,
                backgroundSize: "100% 100%",
                transform: "translate3d(-50%, 0, 0)",
              },
              children: [
                s.jsx("img", {
                  src: Ap,
                  alt: "",
                  decoding: "async",
                  fetchpriority: "high",
                  className: "block h-full w-full select-none",
                }),
                s.jsx("div", {
                  className:
                    "absolute inset-x-0 bottom-0 h-[6%] bg-gradient-to-b from-transparent to-[#0a0f0d]",
                }),
              ],
            }),
            s.jsx("div", {
              ref: E,
              className: "absolute inset-0",
              style: { opacity: 0 },
              children: s.jsx(Qc, { count: 22 }),
            }),
            s.jsx("div", {
              ref: c,
              className:
                "absolute left-1/2 top-0 w-56 origin-top sm:w-72 lg:w-80",
              style: { transform: "translate3d(-50%, 60vh, 0)" },
              children: s.jsx("div", {
                className: "relative flex flex-col items-center",
                children: s.jsxs("div", {
                  ref: u,
                  className: "relative z-10",
                  children: [
                    s.jsx(Op, {
                      className: "block w-28 float-shadow sm:w-36 lg:w-44",
                    }),
                    s.jsx("div", {
                      ref: v,
                      className: "absolute inset-x-[22%] top-[97%] -z-10",
                      style: { opacity: 0 },
                      children: s.jsx(Fp, { className: "w-full" }),
                    }),
                    s.jsx("div", {
                      ref: m,
                      className: "absolute -inset-x-[18%] top-[78%] -z-10",
                      style: { opacity: 0 },
                      children: s.jsx(Dp, { className: "w-full" }),
                    }),
                  ],
                }),
              }),
            }),
            s.jsx("div", {
              ref: y,
              className: "absolute inset-0 will-change-transform",
              style: { opacity: 0 },
              children: s.jsx("div", {
                className: "absolute inset-x-0 -top-[620px] h-0",
                children: em.map((W, K) =>
                  s.jsx(
                    "div",
                    {
                      className: "absolute anim-tumble",
                      style: {
                        top: `${W.top}px`,
                        [W.side]: W.inset,
                        width: W.width,
                        animationDelay: `${K * 0.9}s`,
                        animationDuration: `${9 + (K % 4) * 2}s`,
                        opacity: W.opacity,
                      },
                      children:
                        W.kind === "sat"
                          ? s.jsx(ls, { className: "w-full", tint: W.tint })
                          : s.jsx(Wc, {
                              className: "w-full",
                              variant: W.variant,
                              from: W.tint,
                              to: "#2c2530",
                            }),
                    },
                    K
                  )
                ),
              }),
            }),
            s.jsx("div", {
              ref: R,
              className: "absolute inset-0 bg-[#04070d]",
              style: { opacity: 0 },
            }),
          ],
        }),
        s.jsx("div", {
          ref: k,
          className:
            "pointer-events-none fixed inset-x-0 top-[8vh] z-[45] flex justify-center px-3 sm:px-4",
          style: { opacity: 0, visibility: "hidden" },
          children: s.jsx(jp, {}),
        }),
      ],
    })
  );
}
const jc = [
    {
      top: 40,
      side: "left",
      inset: "6%",
      width: "5rem",
      variant: "chunk",
      tint: "var(--color-regolith)",
      opacity: 0.85,
    },
    {
      top: 190,
      side: "right",
      inset: "9%",
      width: "3.5rem",
      variant: "shard",
      tint: "#7d6f66",
      opacity: 0.7,
    },
    {
      top: 330,
      side: "left",
      inset: "16%",
      width: "2.5rem",
      variant: "slab",
      tint: "#6c6068",
      opacity: 0.6,
    },
    {
      top: 450,
      side: "right",
      inset: "4%",
      width: "7rem",
      kind: "sat",
      tint: "var(--color-earth)",
      opacity: 0.9,
    },
  ],
  em = [
    ...jc,
    ...jc.map((i, c) => ({
      ...i,
      top: i.top + Kc,
      side: i.side === "left" ? "right" : "left",
      inset: c % 2 ? "12%" : "7%",
      kind: c === 1 ? "sat" : void 0,
      tint: c === 1 ? "var(--color-violet)" : i.tint,
    })),
  ],
  tm = "/marscoin-title.webp",
  nm = 1100,
  rm = 498;
function lm() {
  const i = Wn(0.1, { fade: 0.3 }),
    c = Wn(-0.44, { rotate: 7, x: -0.05 }),
    u = Wn(-0.5, { rotate: -9, x: 0.05 }),
    v = T.useRef(null);
  return (
    Jl(({ travel: m, max: y, vh: k }) => {
      const R = v.current;
      R && (R.style.opacity = Math.max(0, 1 - (y - m) / (k * 0.2)).toFixed(3));
    }),
    s.jsxs("section", {
      id: "top",
      className: "relative isolate min-h-[100svh] overflow-hidden",
      children: [
        s.jsx("div", {
          className:
            "relative z-20 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center px-4 pt-[5vh] sm:pt-[7vh]",
          children: s.jsxs("div", {
            ref: i,
            id: "hero-card",
            className: "relative w-full max-w-3xl text-center",
            children: [
              s.jsx("h1", {
                className: "anim-wordmark-float",
                children: s.jsx("img", {
                  src: tm,
                  width: nm,
                  height: rm,
                  alt: `${ie.nameTop} ${ie.nameBottom}`,
                  fetchpriority: "high",
                  decoding: "async",
                  className:
                    "anim-wordmark-glow mx-auto h-auto w-full max-w-[36rem]",
                }),
              }),
              s.jsxs("p", {
                className:
                  "glass-soft mx-auto mt-6 w-fit rounded-full px-6 py-3 font-body text-base font-bold leading-snug text-cream sm:px-8 sm:text-xl",
                children: [
                  "Hold ",
                  s.jsx("span", {
                    className: "text-mars-light",
                    children: ie.ticker,
                  }),
                  " and get",
                  " ",
                  s.jsx("span", { className: "text-ion", children: se.ticker }),
                ],
              }),
            ],
          }),
        }),
        s.jsxs("div", {
          ref: v,
          className:
            "pointer-events-none absolute left-3 top-[36%] z-30 flex select-none items-center gap-2.5 rounded-full border-2 border-cream/15 bg-void/55 py-1.5 pl-1.5 pr-4 backdrop-blur-md sm:left-7 sm:top-[54%] sm:gap-3 sm:pr-5",
          style: { rotate: "-2deg" },
          children: [
            s.jsx("span", {
              className:
                "grid h-10 w-10 shrink-0 place-items-center rounded-2xl border-[3px] border-ink bg-mars pill-shadow sm:h-12 sm:w-12",
              children: s.jsx("span", {
                className:
                  "anim-nudge font-display text-xl leading-none text-cream sm:text-2xl",
                children: "↓",
              }),
            }),
            s.jsxs("span", {
              className:
                "font-display text-[0.65rem] uppercase leading-[1.15] tracking-[0.14em] text-cream puffy sm:text-sm",
              children: [
                "Scroll down",
                s.jsx("br", {}),
                s.jsx("span", {
                  className: "text-ion",
                  children: "Rocket goes up",
                }),
              ],
            }),
          ],
        }),
        s.jsx("div", {
          ref: c,
          className:
            "pointer-events-none absolute -left-10 top-[20%] z-10 hidden w-28 anim-tumble-wide sm:block sm:w-36 lg:w-44",
          children: s.jsx(ls, { tint: "var(--color-earth)" }),
        }),
        s.jsx("div", {
          ref: u,
          className:
            "pointer-events-none absolute -right-10 top-[24%] z-10 hidden w-24 anim-tumble-wide sm:block sm:w-32 lg:w-40",
          style: { animationDelay: "1.4s" },
          children: s.jsx(ls, { tint: "var(--color-violet)" }),
        }),
      ],
    })
  );
}
const om = 38,
  im = 22;
function sm(i = 1) {
  const c = T.useRef(null),
    u = T.useRef(null),
    v = T.useRef({ top: 0, height: 0 });
  return (
    T.useEffect(() => {
      const m = () => {
        const R = c.current,
          E = Y.content;
        if (!R || !E) return;
        const F = R.getBoundingClientRect();
        v.current = {
          top: F.top - E.getBoundingClientRect().top,
          height: F.height,
        };
      };
      m();
      const y = setTimeout(m, 600),
        k = setTimeout(m, 1600);
      return (
        window.addEventListener("resize", m),
        () => {
          clearTimeout(y),
            clearTimeout(k),
            window.removeEventListener("resize", m);
        }
      );
    }, []),
    Jl(({ travel: m, vh: y }) => {
      const k = u.current,
        { top: R, height: E } = v.current;
      if (!k || !E) return;
      const F = R - m,
        P = Math.max(0, Math.min(1, (y - F) / (y + E))),
        z = Math.sin(Math.PI * P);
      k.style.transform = `translate3d(${(z * om * i).toFixed(1)}px, ${(
        z * im
      ).toFixed(1)}px, 0)`;
    }),
    [c, u]
  );
}
function eo({
  side: i,
  width: c = "max-w-xl lg:max-w-[calc(50vw-11rem)]",
  children: u,
}) {
  const [v, m] = sm(i === "right" ? -1 : 1);
  return s.jsx("div", {
    className: `flex ${i === "right" ? "justify-end" : "justify-start"}`,
    children: s.jsx("div", {
      ref: v,
      className: `w-full ${c}`,
      children: s.jsx("div", {
        ref: m,
        className: "will-change-transform",
        children: u,
      }),
    }),
  });
}
function am(i, c, u) {
  if (i <= 0 || c <= 0) return "";
  const v = Math.min(42, c * 0.22),
    m = c - v,
    y = Math.min(46, m * 0.32, i * 0.16);
  if (m <= y * 2 || i <= y * 2) return "";
  const k = Math.min(58, i * 0.13);
  let R, E, F;
  u === "center"
    ? ((R = i / 2 + k / 2), (E = i / 2 - k / 2), (F = i / 2))
    : u === "right"
    ? ((R = Math.max(y + 14, i * 0.26)), (E = R - k), (F = Math.max(6, R - 20)))
    : ((R = Math.min(i - y - 14, i * 0.74)),
      (E = R + k),
      (F = Math.min(i - 6, R + 20)));
  const [P, z] = u === "left" ? [R, E] : [E, R];
  return [
    `M ${y},0`,
    `H ${i - y}`,
    `A ${y},${y} 0 0 1 ${i},${y}`,
    `V ${m - y}`,
    `A ${y},${y} 0 0 1 ${i - y},${m}`,
    `H ${P}`,
    `L ${F},${c}`,
    `L ${z},${m}`,
    `H ${y}`,
    `A ${y},${y} 0 0 1 0,${m - y}`,
    `V ${y}`,
    `A ${y},${y} 0 0 1 ${y},0`,
    "Z",
  ].join(" ");
}
function um({
  children: i,
  side: c = "left",
  pad: u = "px-7 pb-16 pt-7 sm:px-10 sm:pb-20 sm:pt-9",
  className: v = "",
}) {
  const m = T.useRef(null),
    [y, k] = T.useState({ w: 0, h: 0 });
  T.useEffect(() => {
    const E = m.current;
    if (!E) return;
    const F = () => {
      const z = E.getBoundingClientRect();
      k((U) =>
        Math.abs(U.w - z.width) > 0.5 || Math.abs(U.h - z.height) > 0.5
          ? { w: z.width, h: z.height }
          : U
      );
    };
    F();
    const P = new ResizeObserver(F);
    return P.observe(E), () => P.disconnect();
  }, []);
  const R = y.w && y.h ? am(y.w, y.h, c) : "";
  return s.jsxs("div", {
    ref: m,
    className: `relative drop-shadow-[0_22px_38px_rgba(0,0,0,0.6)] ${v}`,
    children: [
      s.jsx("div", {
        className: "blob-fill absolute inset-0",
        style: R ? { clipPath: `path("${R}")` } : { borderRadius: "2.5rem" },
      }),
      R &&
        s.jsx("svg", {
          className:
            "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
          viewBox: `0 0 ${y.w} ${y.h}`,
          preserveAspectRatio: "none",
          "aria-hidden": "true",
          children: s.jsx("path", {
            d: R,
            fill: "none",
            stroke: "color-mix(in srgb, var(--color-cream) 30%, transparent)",
            strokeWidth: "3",
          }),
        }),
      s.jsx("div", { className: `relative ${u}`, children: i }),
    ],
  });
}
const cm = "/gifs/narrative.webp",
  dm = [
    {
      emoji: "🚀",
      title: "Built for the people who believe in rockets.",
      body: "New technology, hard engineering, and the mission of taking humanity beyond Earth. If that is the future you want to see, this is the room for it.",
      accent: "text-ion",
    },
    {
      emoji: "🌍",
      title: "A community around the Mars narrative.",
      body: "The goal is simple: bring the believers together, build something that lasts, and grow with the future of space exploration.",
      accent: "text-earth",
    },
    {
      emoji: "💸",
      title: `Hold ${ie.ticker}, earn ${se.ticker}.`,
      body: `${ie.ticker} is paired with ${se.ticker} at the centre of the project. Eligible holders receive ${se.ticker} rewards simply for holding.`,
      accent: "text-mars-light",
    },
  ];
function fm() {
  return s.jsx("section", {
    id: "narrative",
    className: "relative py-20 sm:py-28",
    children: s.jsx("div", {
      className: "mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10",
      children: s.jsxs("div", {
        className: "flex flex-col-reverse gap-10 sm:gap-12",
        children: [
          s.jsxs(os, {
            flank: "right",
            children: [
              s.jsxs("p", {
                className:
                  "font-display text-xl leading-tight text-cream sm:text-3xl",
                children: [ie.ticker, " is paired with ", se.ticker, "."],
              }),
              s.jsxs("p", {
                className:
                  "mt-4 font-body text-base font-bold leading-relaxed text-cream/75 sm:text-lg",
                children: [
                  "That pairing sits at the centre of the project: hold ",
                  ie.ticker,
                  " and eligible holders receive ",
                  se.ticker,
                  " rewards.",
                ],
              }),
              s.jsxs("p", {
                className:
                  "mt-5 inline-flex items-center gap-2 rounded-full border-2 border-mars-light/40 bg-void/50 px-4 py-2 font-body text-sm font-bold text-cream sm:text-base",
                children: [
                  s.jsx("span", { "aria-hidden": "true", children: "🔒" }),
                  "Minimum hold:",
                  " ",
                  s.jsxs("span", {
                    className: "text-mars-light",
                    children: [se.minHold, " ", ie.ticker],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs(os, {
            flank: "left",
            children: [
              s.jsx("span", {
                className:
                  "font-body text-xs font-bold uppercase tracking-[0.3em] text-ion sm:text-sm",
                children: "Chapter one",
              }),
              s.jsx("h2", {
                className:
                  "mt-2 font-display text-[clamp(1.9rem,4.6vw,3.6rem)] font-black leading-[0.95] text-cream",
                children: "The Narrative",
              }),
              s.jsxs("p", {
                className:
                  "mt-4 font-body text-base font-bold leading-relaxed text-cream/75 sm:text-lg",
                children: [
                  ie.name,
                  " is a community built around the idea of exploring Mars and the future of space — people who believe in rockets, new technology, and taking humanity beyond Earth.",
                ],
              }),
              s.jsx("img", {
                src: cm,
                alt: "",
                loading: "lazy",
                decoding: "async",
                className:
                  "mx-auto -mb-[22px] mt-5 block w-full max-w-[18rem] sm:-mb-[38px]",
              }),
            ],
          }),
          s.jsx("ol", {
            className: "flex flex-col-reverse gap-10 sm:gap-12",
            children: dm.map((i, c) =>
              s.jsx(pm, { beat: i, index: c }, i.title)
            ),
          }),
        ],
      }),
    }),
  });
}
function os({ flank: i, pad: c, children: u }) {
  return s.jsx(eo, {
    side: i,
    children: s.jsx(um, {
      side: i,
      pad: c,
      className: "transition-transform duration-500 hover:-translate-y-1.5",
      children: u,
    }),
  });
}
function pm({ beat: i, index: c }) {
  const u = Wn(-0.04 - c * 0.035),
    v = c % 2 ? "left" : "right";
  return s.jsx("li", {
    ref: u,
    children: s.jsxs(os, {
      flank: v,
      pad: "flex gap-4 px-6 pb-14 pt-6",
      children: [
        s.jsx("span", {
          className:
            "grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-2 border-cream/20 bg-void/60 text-3xl anim-floaty",
          style: { animationDelay: `${c * 400}ms` },
          "aria-hidden": "true",
          children: i.emoji,
        }),
        s.jsxs("div", {
          children: [
            s.jsx("h3", {
              className: `font-display text-lg leading-tight ${i.accent}`,
              children: i.title,
            }),
            s.jsx("p", {
              className: "mt-1.5 font-body font-bold text-cream/65",
              children: i.body,
            }),
          ],
        }),
      ],
    }),
  });
}
var mm = Mc();
const Ec = [
    "from-mars/40 to-void",
    "from-earth/35 to-void",
    "from-plasma/35 to-void",
    "from-ion/30 to-void",
    "from-violet/35 to-void",
    "from-solar/30 to-void",
  ],
  Qn = [
    { src: "/memes/1.webp", tilt: -2.5, speed: -0.1 },
    { src: "/memes/2.webp", tilt: 1.5, speed: -0.16 },
    { src: "/memes/3.webp", tilt: 1, speed: -0.12 },
    { src: "/memes/4.webp", tilt: -1.5, speed: -0.18 },
    { src: "/memes/5.webp", tilt: 2, speed: -0.14 },
    { src: "/memes/6.webp", tilt: -1, speed: -0.1 },
    { src: "/memes/7.webp", tilt: 2.5, speed: -0.15 },
    { src: "/memes/8.webp", tilt: -2, speed: -0.11 },
    { src: "/memes/9.webp", tilt: 1.2, speed: -0.17 },
    { src: "/memes/10.webp", tilt: -1.8, speed: -0.13 },
  ],
  hm = "max-w-[16rem] sm:max-w-[18rem] lg:max-w-[min(21rem,calc(50vw-11rem))]";
function _c({ index: i, src: c, className: u = "", eager: v = !1 }) {
  return s.jsxs("div", {
    className: `relative aspect-square w-full overflow-hidden rounded-[1.75rem] border-2 border-cream/20 bg-gradient-to-br ${
      Ec[i % Ec.length]
    } shadow-[0_18px_40px_-16px_rgb(0_0_0/0.85)] ${u}`,
    children: [
      s.jsx("img", {
        src: c,
        alt: "",
        loading: v ? "eager" : "lazy",
        decoding: "async",
        className:
          "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
      }),
      s.jsx("div", {
        className:
          "pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent",
      }),
      s.jsx("div", {
        className:
          "pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-cream/10 transition-all duration-1000 group-hover:left-full",
      }),
    ],
  });
}
function Yc({ index: i, tile: c, onOpen: u, big: v = !1 }) {
  return v
    ? s.jsx(_c, { index: i, src: c.src, eager: !0 })
    : s.jsx("button", {
        type: "button",
        onClick: u,
        "aria-label": `Open picture ${i + 1} of ${Qn.length}`,
        className:
          "group block w-full cursor-pointer text-left transition-transform duration-500 hover:-translate-y-2 hover:rotate-0",
        style: { rotate: `${c.tilt}deg` },
        children: s.jsx(_c, { index: i, src: c.src }),
      });
}
function vm({ index: i, onClose: c, onStep: u }) {
  return (
    T.useEffect(() => {
      const v = (y) => {
        y.key === "Escape" && c(),
          y.key === "ArrowRight" && u(1),
          y.key === "ArrowLeft" && u(-1);
      };
      window.addEventListener("keydown", v);
      const m = document.body.style.overflow;
      return (
        (document.body.style.overflow = "hidden"),
        () => {
          window.removeEventListener("keydown", v),
            (document.body.style.overflow = m);
        }
      );
    }, [c, u]),
    mm.createPortal(
      s.jsx("div", {
        className:
          "fixed inset-0 z-50 grid place-items-center bg-void/88 p-4 backdrop-blur-md sm:p-8",
        onClick: c,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Meme viewer",
        children: s.jsxs("div", {
          className:
            "flex w-full max-w-[min(88vw,26rem)] flex-col items-center gap-6 anim-pop",
          onClick: (v) => v.stopPropagation(),
          children: [
            s.jsxs("div", {
              className: "relative w-full",
              children: [
                s.jsx(Yc, { index: i, tile: Qn[i], big: !0 }),
                s.jsx("button", {
                  type: "button",
                  onClick: c,
                  "aria-label": "Close",
                  className:
                    "absolute -right-3 -top-5 grid h-11 w-11 place-items-center rounded-full border-4 border-ink bg-solar font-display text-xl text-ink pill-shadow lift",
                  children: "✕",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                s.jsx("button", {
                  type: "button",
                  onClick: () => u(-1),
                  "aria-label": "Previous",
                  className:
                    "grid h-12 w-12 place-items-center rounded-full border-4 border-ink bg-cream font-display text-xl text-ink pill-shadow lift",
                  children: "‹",
                }),
                s.jsx("div", {
                  className: "flex gap-2",
                  children: Qn.map((v, m) =>
                    s.jsx(
                      "span",
                      {
                        className: `h-2.5 w-2.5 rounded-full border-2 border-ink ${
                          m === i ? "bg-ion" : "bg-cream/30"
                        }`,
                        "aria-hidden": "true",
                      },
                      m
                    )
                  ),
                }),
                s.jsx("button", {
                  type: "button",
                  onClick: () => u(1),
                  "aria-label": "Next",
                  className:
                    "grid h-12 w-12 place-items-center rounded-full border-4 border-ink bg-cream font-display text-xl text-ink pill-shadow lift",
                  children: "›",
                }),
              ],
            }),
          ],
        }),
      }),
      document.body
    )
  );
}
function gm({ index: i, tile: c, onOpen: u }) {
  const v = Wn(c.speed, { minWidth: 768 }),
    [m, y] = Ic({ threshold: 0.15 }),
    k = i % 2 ? "right" : "left";
  return s.jsx("div", {
    ref: v,
    children: s.jsx(eo, {
      side: k,
      width: hm,
      children: s.jsx("div", {
        ref: m,
        className: y ? "reveal-unfurl is-in" : "reveal-unfurl",
        children: s.jsx(Yc, { index: i, tile: c, onOpen: u }),
      }),
    }),
  });
}
function xm() {
  const i = Wn(-0.36, { rotate: 18 }),
    [c, u] = T.useState(null),
    v = T.useCallback((y) => {
      u((k) => (k === null ? k : (k + y + Qn.length) % Qn.length));
    }, []),
    m = T.useCallback(() => u(null), []);
  return s.jsxs("section", {
    id: "memes",
    className: "relative overflow-hidden py-20 sm:py-28",
    children: [
      s.jsx(Qc, { count: 18 }),
      s.jsx("div", {
        ref: i,
        className:
          "pointer-events-none absolute -right-16 top-1/3 w-36 opacity-50 anim-tumble sm:w-52",
        children: s.jsx(Wc, {
          variant: "shard",
          from: "#7d6f66",
          to: "#221c26",
        }),
      }),
      s.jsx("div", {
        className: "relative mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10",
        children: s.jsxs("div", {
          className: "flex flex-col-reverse gap-12 sm:gap-16",
          children: [
            s.jsxs(eo, {
              side: "right",
              children: [
                s.jsx("span", {
                  className:
                    "inline-block rounded-full border-2 border-ion/40 bg-ion/10 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.24em] text-ion backdrop-blur sm:text-sm",
                  children: "cargo hold",
                }),
                s.jsx("h2", {
                  className:
                    "mt-4 font-display text-[clamp(2rem,5.5vw,4rem)] font-black leading-none text-cream puffy",
                  children: "MEME BAY",
                }),
              ],
            }),
            Qn.map((y, k) =>
              s.jsx(gm, { index: k, tile: y, onOpen: () => u(k) }, k)
            ),
          ],
        }),
      }),
      c !== null && s.jsx(vm, { index: c, onClose: m, onStep: v }),
    ],
  });
}
function ym() {
  return s.jsx("section", {
    id: "approach",
    className:
      "relative flex min-h-[88vh] items-start pb-10 pt-[54vh] lg:pb-16 lg:pt-[56vh]",
    children: s.jsx("div", {
      className: "mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-10",
      children: s.jsx(eo, {
        side: "left",
        width: "max-w-md lg:max-w-[calc(50vw-16rem)]",
        children: s.jsxs("div", {
          className:
            "rounded-[1.75rem] bg-void/50 p-4 backdrop-blur-md sm:p-5 lg:bg-transparent lg:p-0 lg:backdrop-blur-none",
          children: [
            s.jsx("span", {
              className:
                "inline-block rounded-full border-2 border-mars-light/45 bg-mars/15 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.24em] text-mars-light backdrop-blur sm:text-sm",
              children: "The Rewards Feed",
            }),
            s.jsxs("h2", {
              className:
                "mt-4 font-display text-[clamp(1.4rem,3.6vw,2.9rem)] font-black leading-[1.02] text-cream puffy",
              children: [se.ticker, " Distributions to all eligible holders"],
            }),
          ],
        }),
      }),
    }),
  });
}
function wm() {
  return s.jsx("section", {
    id: "colony",
    className: "relative min-h-[215vh]",
    "aria-hidden": "true",
  });
}
const km = {
    VITE_API_BASE_URL: "https://api.marscoin.meme",
    VITE_USE_MOCK: "false",
  },
  Gc = km ?? {},
  Sm = String(Gc.VITE_USE_MOCK ?? "").toLowerCase() === "true",
  Cc = String(Gc.VITE_API_BASE_URL ?? "")
    .trim()
    .replace(/\/+$/, ""),
  Rc = !Sm && Cc ? `${Cc}/stats` : "",
  Nm = 900;
function Et(...i) {
  for (const c of i) {
    if (c == null || c === "") continue;
    const u = Number(c);
    if (Number.isFinite(u)) return u;
  }
  return null;
}
function Xc(i) {
  return {
    marketCap: Et(i.marketCap, i.market_cap_usd, i.market_cap),
    holders: Et(i.holders, i.totalHolders, i.holder_count),
    rewardsDistributed: Et(
      i.rewardsDistributed,
      i.rewardDistributed,
      i.totalRewarded,
      i.ketDistributed,
      i.rewards_distributed
    ),
    rewardsDistributedUsd: Et(
      i.totalRewardedUsd,
      i.rewardUsd,
      i.rewarded,
      i.spcxRewarded
    ),
    feesEarned: Et(i.feesEarned),
    feesEarnedUsd: Et(i.feesEarnedUsd),
    priceUsd: Et(i.priceUsd, i.price, i.price_usd),
    change24h: Et(i.change24h, i.price_change_24h),
    volume24h: Et(i.volume24h, i.volume_24h),
    liquidity: Et(i.liquidityUsd, i.liquidity, i.liquidity_usd),
    updatedAt: i.updatedAt ?? new Date().toISOString(),
  };
}
const $t = {
  marketCap: 482e4,
  holders: 12486,
  rewardsDistributed: 18420,
  feesEarned: 18.6445290771059,
  priceUsd: 48e-5,
  change24h: 18.4,
  volume24h: 962400,
  liquidity: 415e3,
};
function nn(i, c = 0.04) {
  return i * (1 + (Math.random() * 2 - 1) * c);
}
function jm() {
  return Xc({
    ...$t,
    marketCap: Math.round(nn($t.marketCap)),
    holders: Math.round(nn($t.holders, 0.01)),
    rewardsDistributed: Math.round(nn($t.rewardsDistributed, 0.03)),
    feesEarned: nn($t.feesEarned, 0.03),
    priceUsd: nn($t.priceUsd),
    change24h: Number(nn($t.change24h, 0.3).toFixed(1)),
    volume24h: Math.round(nn($t.volume24h, 0.12)),
    liquidity: Math.round(nn($t.liquidity, 0.05)),
  });
}
async function Em({ signal: i } = {}) {
  if (Rc) {
    const c = await fetch(Rc, {
      signal: i,
      headers: { accept: "application/json" },
    });
    if (!c.ok) throw new Error(`Stats request failed (${c.status})`);
    return Xc(await c.json());
  }
  return new Promise((c, u) => {
    const v =
        typeof window < "u" &&
        new URLSearchParams(window.location.search).get("statsFail") === "1",
      m = setTimeout(() => {
        v
          ? u(new Error("Could not reach the Robinhood Chain indexer."))
          : c(jm());
      }, Nm);
    i == null ||
      i.addEventListener("abort", () => {
        clearTimeout(m), u(new DOMException("Aborted", "AbortError"));
      });
  });
}
function _m(i) {
  return Number.isFinite(i)
    ? i >= 1e9
      ? `$${(i / 1e9).toFixed(2)}B`
      : i >= 1e6
      ? `$${(i / 1e6).toFixed(2)}M`
      : i >= 1e3
      ? `$${(i / 1e3).toFixed(1)}K`
      : i >= 1
      ? `$${i.toFixed(2)}`
      : `$${i.toFixed(6)}`
    : "--";
}
function Cm(i, c = 2) {
  return Number.isFinite(i)
    ? i.toLocaleString("en-US", {
        minimumFractionDigits: c,
        maximumFractionDigits: c,
      })
    : "--";
}
function Rm({ pollMs: i = 45e3 } = {}) {
  const [c, u] = T.useState({ status: "loading", data: null, error: null }),
    [v, m] = T.useState(0),
    y = T.useRef(null),
    k = T.useCallback(async ({ silent: E = !1 } = {}) => {
      var P;
      (P = y.current) == null || P.abort();
      const F = new AbortController();
      (y.current = F),
        E ||
          u((z) => ({
            ...z,
            status: z.data ? "refreshing" : "loading",
            error: null,
          }));
      try {
        const z = await Em({ signal: F.signal });
        if (F.signal.aborted) return;
        u({ status: "success", data: z, error: null });
      } catch (z) {
        if ((z == null ? void 0 : z.name) === "AbortError") return;
        u((U) => ({
          status: "error",
          data: U.data,
          error: (z == null ? void 0 : z.message) ?? "Something went wrong.",
        }));
      }
    }, []);
  T.useEffect(
    () => (
      k(),
      () => {
        var E;
        return (E = y.current) == null ? void 0 : E.abort();
      }
    ),
    [k, v]
  ),
    T.useEffect(() => {
      if (!i || c.status === "error") return;
      const E = setInterval(() => k({ silent: !0 }), i);
      return () => clearInterval(E);
    }, [i, k, c.status]);
  const R = T.useCallback(() => m((E) => E + 1), []);
  return { ...c, retry: R };
}
const Tm = "/logo.webp";
function to({
  id: i,
  tint: c = "var(--color-ion)",
  className: u = "",
  children: v,
}) {
  return s.jsxs("section", {
    id: i,
    className: `relative flex min-h-[92vh] items-center px-4 pb-[calc(7vh+13rem)] pt-[calc(7vh+5.5rem)] sm:pb-[11vh] sm:pt-[11vh] ${u}`,
    children: [
      s.jsx("div", {
        className: "pointer-events-none absolute inset-0",
        style: {
          background: `radial-gradient(58% 44% at 50% 46%, color-mix(in srgb, ${c} 15%, transparent) 0%, transparent 72%)`,
        },
      }),
      s.jsx("div", {
        className: "relative mx-auto w-full max-w-6xl",
        children: v,
      }),
    ],
  });
}
function ds({ kicker: i, lede: c, children: u, className: v = "" }) {
  return s.jsxs("header", {
    className: `flex flex-col items-center gap-3 text-center ${v}`,
    children: [
      i &&
        s.jsx("p", {
          className:
            "font-body text-[0.7rem] font-bold uppercase tracking-[0.32em] text-ion/85 sm:text-xs",
          children: i,
        }),
      s.jsx("h2", {
        className:
          "font-display text-[clamp(1.9rem,6vw,4.2rem)] font-black leading-[0.96] text-cream puffy",
        children: u,
      }),
      c &&
        s.jsx("p", {
          className:
            "max-w-xl font-body text-base font-bold text-cream/60 sm:text-lg",
          children: c,
        }),
    ],
  });
}
function no({
  tint: i = "var(--color-ion)",
  className: c = "",
  style: u,
  children: v,
}) {
  return s.jsx("div", {
    className: "deck-slab h-full",
    style: { "--tint": i, ...u },
    children: s.jsx("div", { className: c, children: v }),
  });
}
function Lm({
  tint: i = "var(--color-cream)",
  className: c = "",
  children: u,
  ...v
}) {
  const m = v.onClick || v.href ? (v.href ? "a" : "button") : "span";
  return s.jsx(m, {
    ...(m === "button" ? { type: "button" } : null),
    ...v,
    className: `inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 font-body text-sm font-bold text-cream/85 transition-colors sm:text-base ${
      m === "span" ? "" : "hover:text-ink"
    } ${c}`,
    style: {
      borderColor: `color-mix(in srgb, ${i} 45%, transparent)`,
      background: `color-mix(in srgb, ${i} 10%, #080a14)`,
    },
    children: u,
  });
}
function Pm({ width: i = "w-24 sm:w-32", className: c = "" }) {
  return s.jsx("div", {
    className: `relative flex items-end justify-center ${c}`,
    children: s.jsx("div", {
      className: "anim-breathe",
      children: s.jsx("img", {
        src: Tm,
        width: 256,
        height: 256,
        alt: "",
        loading: "lazy",
        decoding: "async",
        className: `${i} aspect-square float-shadow`,
      }),
    }),
  });
}
function Tc(i, c, u = 1400) {
  const [v, m] = T.useState(0),
    y = T.useRef(0);
  return (
    T.useEffect(() => {
      if (!c || !Number.isFinite(i)) return;
      const k = y.current,
        R = performance.now();
      let E;
      const F = (P) => {
        const z = Math.min(1, (P - R) / u),
          U = 1 - Math.pow(1 - z, 3);
        m(k + (i - k) * U),
          z < 1 ? (E = requestAnimationFrame(F)) : (y.current = i);
      };
      return (E = requestAnimationFrame(F)), () => cancelAnimationFrame(E);
    }, [i, c, u]),
    v
  );
}
function Lc({ label: i, tint: c, value: u, loading: v }) {
  return s.jsxs(no, {
    tint: c,
    className: "px-5 py-4 sm:px-6 sm:py-5",
    children: [
      s.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          s.jsx("span", {
            className: "anim-hud-tick h-1.5 w-1.5 shrink-0 rounded-full",
            style: { background: c },
            "aria-hidden": "true",
          }),
          s.jsx("p", {
            className:
              "font-body text-[0.68rem] font-bold uppercase leading-tight tracking-[0.2em] sm:text-xs",
            style: { color: c },
            children: i,
          }),
        ],
      }),
      s.jsx("p", {
        className:
          "mt-1.5 pl-[0.875rem] font-display text-[clamp(1.6rem,4vw,2.5rem)] font-black leading-none text-cream",
        children: v
          ? s.jsx("span", {
              className:
                "inline-block h-[0.8em] w-[5ch] animate-pulse rounded-2xl bg-cream/12 align-middle",
            })
          : u,
      }),
    ],
  });
}
const zm = "/gifs/stats.webp";
function Mm() {
  return s.jsxs("div", {
    className:
      "relative aspect-square w-full overflow-hidden rounded-3xl border-[3px] border-cream/25 bg-void/70",
    children: [
      s.jsx("img", {
        src: zm,
        alt: "",
        loading: "lazy",
        decoding: "async",
        className: "h-full w-full object-contain",
      }),
      s.jsx("span", {
        className: "pointer-events-none absolute inset-0 opacity-25",
        style: {
          backgroundImage:
            "repeating-linear-gradient(0deg, color-mix(in srgb, var(--color-cream) 22%, transparent) 0 1px, transparent 1px 4px)",
        },
        "aria-hidden": "true",
      }),
      s.jsx("span", {
        className:
          "anim-hud-sweep pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-14deg] bg-cream/10",
        "aria-hidden": "true",
      }),
      s.jsx("span", {
        className: "pointer-events-none absolute inset-3",
        "aria-hidden": "true",
        children: [
          "left-0 top-0 border-l-2 border-t-2",
          "right-0 top-0 border-r-2 border-t-2",
          "left-0 bottom-0 border-l-2 border-b-2",
          "right-0 bottom-0 border-r-2 border-b-2",
        ].map((i) =>
          s.jsx(
            "span",
            { className: `absolute h-5 w-5 border-solar/70 ${i}` },
            i
          )
        ),
      }),
    ],
  });
}
function $m() {
  const { status: i, data: c, error: u, retry: v } = Rm(),
    [m, y] = Ic(),
    k = i === "loading",
    R = i === "error" && !c,
    E = Tc((c == null ? void 0 : c.marketCap) ?? 0, y && !!c),
    F = Tc((c == null ? void 0 : c.feesEarned) ?? 0, y && !!c);
  return s.jsx(to, {
    id: "stats",
    tint: "var(--color-solar)",
    children: s.jsxs("div", {
      ref: m,
      className: "flex flex-col items-center gap-10",
      children: [
        s.jsxs(ds, { children: [ie.ticker, " Numbers"] }),
        R
          ? s.jsxs(no, {
              tint: "var(--color-ember)",
              className: "max-w-xl p-8 text-center sm:p-10",
              children: [
                s.jsx("p", {
                  className: "text-6xl anim-floaty",
                  "aria-hidden": "true",
                  children: "📡",
                }),
                s.jsx("h3", {
                  className:
                    "mt-4 font-display text-xl font-black text-cream sm:text-2xl",
                  children: "Lost the downlink",
                }),
                s.jsx("p", {
                  className: "mt-2 font-body font-bold text-cream/55",
                  children: u,
                }),
                s.jsxs("button", {
                  type: "button",
                  onClick: v,
                  className:
                    "mt-6 inline-flex items-center gap-2 rounded-full border-4 border-ink bg-ion px-7 py-3.5 font-display text-base font-bold text-ink pill-shadow lift",
                  children: [
                    s.jsx("span", { "aria-hidden": "true", children: "🔄" }),
                    " Try again",
                  ],
                }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("div", {
                  className:
                    "grid w-full items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8",
                  children: [
                    s.jsxs("div", {
                      className: "flex flex-col gap-4 sm:gap-5",
                      children: [
                        s.jsx(Lc, {
                          label: "Market cap",
                          tint: "var(--color-solar)",
                          loading: k,
                          value: _m(E),
                        }),
                        s.jsx(Lc, {
                          label: `${se.ticker} distributed to holders`,
                          tint: "var(--color-earth)",
                          loading: k,
                          value: s.jsxs(s.Fragment, {
                            children: [
                              Number.isFinite(c == null ? void 0 : c.feesEarned)
                                ? Cm(F)
                                : "--",
                              " ",
                              s.jsx("span", {
                                className: "text-[0.55em] text-cream/50",
                                children: se.ticker,
                              }),
                            ],
                          }),
                        }),
                        s.jsx("div", {
                          className: "flex flex-wrap items-center gap-3",
                          children: s.jsx(Lm, {
                            tint: "var(--color-ion)",
                            onClick: v,
                            className: "text-ion hover:bg-ion",
                            children: "🔄 Refresh",
                          }),
                        }),
                      ],
                    }),
                    s.jsx(Mm, {}),
                  ],
                }),
                i === "error" &&
                  c &&
                  s.jsxs("p", {
                    className:
                      "text-center font-body text-sm font-bold text-ember",
                    children: [
                      "Showing the last numbers we had — refresh failed: ",
                      u,
                    ],
                  }),
              ],
            }),
      ],
    }),
  });
}
function Zc(i, c = 1800) {
  const [u, v] = T.useState(!1),
    m = T.useRef(null);
  T.useEffect(() => () => clearTimeout(m.current), []);
  const y = T.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(i);
    } catch {
      const k = document.createElement("textarea");
      (k.value = i),
        (k.style.position = "fixed"),
        (k.style.opacity = "0"),
        document.body.appendChild(k),
        k.select(),
        document.execCommand("copy"),
        k.remove();
    }
    v(!0), clearTimeout(m.current), (m.current = setTimeout(() => v(!1), c));
  }, [i, c]);
  return [u, y];
}
function Om() {
  const [i, c] = sp(),
    u = Math.min(1, Math.max(0, (1 - c - 0.05) / 0.42));
  return s.jsx(to, {
    id: "tokenomics",
    tint: "var(--color-mars)",
    className: "scroll-mt-24",
    children: s.jsxs("div", {
      ref: i,
      className: "flex flex-col items-center gap-9",
      children: [
        s.jsxs(ds, {
          children: [
            "TOKEN",
            s.jsx("span", { className: "text-mars-light", children: "OMICS" }),
          ],
        }),
        s.jsx("ol", {
          className: "grid w-full gap-4",
          children: vc.map((v, m) =>
            s.jsx(Fm, { row: v, lit: u > (m + 0.5) / vc.length }, v.n)
          ),
        }),
      ],
    }),
  });
}
function Fm({ row: i, lit: c }) {
  const u = i.kind === "ca";
  return s.jsx("li", {
    children: s.jsxs(no, {
      tint: i.tint,
      className: `flex flex-col gap-4 p-5 transition-opacity duration-500 sm:p-6 ${
        u ? "" : "sm:flex-row sm:items-center"
      } ${c ? "opacity-100" : "opacity-60"}`,
      children: [
        s.jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            s.jsx("span", {
              className:
                "grid h-11 w-11 shrink-0 place-items-center rounded-full border-[3px] font-display text-base font-black sm:h-12 sm:w-12 sm:text-lg",
              style: {
                borderColor: i.tint,
                color: i.tint,
                background: "#06070f",
              },
              "aria-hidden": "true",
              children: i.n,
            }),
            s.jsx("span", {
              className:
                "font-body text-sm font-bold uppercase tracking-[0.2em] text-cream/55 sm:text-base",
              children: i.label,
            }),
            !u &&
              s.jsx("span", {
                className:
                  "ml-auto text-right font-display text-xl font-black leading-none sm:text-3xl",
                style: { color: i.tint },
                children: i.value,
              }),
          ],
        }),
        u && s.jsx(Dm, { address: i.value, tint: i.tint }),
      ],
    }),
  });
}
function Dm({ address: i, tint: c }) {
  const [u, v] = Zc(i);
  return s.jsxs("div", {
    className:
      "flex items-stretch gap-2 rounded-2xl border-2 border-cream/12 bg-[#04060d] p-2 sm:gap-3 sm:p-2.5",
    children: [
      s.jsx("code", {
        className:
          "flex min-w-0 flex-1 items-center break-all px-2 font-mono text-[0.68rem] font-bold leading-snug text-cream/85 sm:px-3 sm:text-sm",
        children: i,
      }),
      s.jsxs("button", {
        type: "button",
        onClick: v,
        "aria-label": `Copy ${se.ticker} contract address`,
        className:
          "flex shrink-0 items-center gap-2 rounded-xl border-[3px] border-ink px-3 py-2.5 font-display text-xs font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5 sm:px-4 sm:text-sm",
        style: { background: u ? "var(--color-aurora)" : c },
        children: [
          s.jsx("span", { "aria-hidden": "true", children: u ? "✓" : "⧉" }),
          s.jsx("span", {
            className: "hidden sm:inline",
            children: u ? "Copied" : "Copy",
          }),
        ],
      }),
    ],
  });
}
function fs({
  className: i = "",
  size: c = "md",
  label: u = dp,
  tone: v = "mars",
  style: m,
  trim: y = null,
}) {
  const k = {
      sm: "px-4 py-2 text-xs border-[3px]",
      md: "px-5 py-3 text-sm sm:px-7 sm:text-base border-4",
      lg: "px-7 py-4 text-base sm:px-9 sm:text-xl border-4",
      xl: "px-8 py-5 text-lg sm:px-11 sm:text-2xl border-[5px]",
    },
    R = {
      mars: "bg-mars text-cream hover:bg-mars-light hover:text-ink",
      ion: "bg-ion text-ink hover:bg-cream",
      cream: "bg-cream text-ink hover:bg-ion",
    };
  return s.jsxs("a", {
    href: cp,
    target: "_blank",
    rel: "noreferrer noopener",
    style: m,
    className: `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-ink font-display font-bold pill-shadow lift ${k[c]} ${R[v]} ${i}`,
    children: [
      s.jsx("span", {
        className: "relative z-10 whitespace-nowrap",
        children: u,
      }),
      s.jsx("span", {
        className:
          "relative z-10 inline-block transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-12",
        children: "🚀",
      }),
      s.jsx("span", {
        className:
          "pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-cream/25 transition-all duration-700 group-hover:left-full",
      }),
      y,
    ],
  });
}
const Am = [
  {
    n: "01",
    emoji: "🚀",
    title: "Head to Pons Launchpad",
    body: `Where every ${ie.ticker} swap goes through.`,
    tint: "var(--color-earth)",
  },
  {
    n: "02",
    emoji: "👛",
    title: `Acquire ${se.minHold} ${ie.ticker}`,
    body: "That is the threshold to be eligible for rewards.",
    tint: "var(--color-solar)",
  },
  {
    n: "03",
    emoji: "⚙️",
    title: "The system collects fees",
    body: `Every transaction pays in, until a full 1 ${se.ticker} worth of fees has accumulated.`,
    tint: "var(--color-mars-light)",
  },
  {
    n: "04",
    emoji: "💠",
    title: "Distributed to holders",
    body: `That ${se.ticker} goes out to every eligible holder. Holding is the whole job.`,
    tint: "var(--color-ion)",
  },
];
function Im() {
  return s.jsx(to, {
    id: "buy",
    tint: "var(--color-earth)",
    children: s.jsxs("div", {
      className: "flex flex-col items-center gap-10",
      children: [
        s.jsxs(ds, { children: [ie.ticker, " Mechanics"] }),
        s.jsxs("div", {
          className: "relative w-full",
          children: [
            s.jsx("div", {
              className:
                "nav-thread absolute left-0 right-0 top-9 hidden h-[3px] xl:block",
              "aria-hidden": "true",
            }),
            s.jsx("ol", {
              className:
                "relative grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4",
              children: Am.map((i) =>
                s.jsx(
                  "li",
                  {
                    className: "relative pl-0",
                    children: s.jsxs(no, {
                      tint: i.tint,
                      className: "h-full p-6",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            s.jsx("span", {
                              className:
                                "grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] font-display text-base font-black",
                              style: {
                                borderColor: i.tint,
                                color: i.tint,
                                background: "#06070f",
                              },
                              children: i.n,
                            }),
                            s.jsx("span", {
                              className: "text-4xl anim-floaty",
                              "aria-hidden": "true",
                              children: i.emoji,
                            }),
                          ],
                        }),
                        s.jsx("h3", {
                          className:
                            "mt-4 font-display text-lg font-black leading-tight text-cream sm:text-xl",
                          children: i.title,
                        }),
                        s.jsx("p", {
                          className: "mt-2 font-body font-bold text-cream/55",
                          children: i.body,
                        }),
                      ],
                    }),
                  },
                  i.n
                )
              ),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "flex flex-col items-center gap-4 text-center",
          children: [
            s.jsx(fs, { size: "xl" }),
            s.jsx("p", {
              className:
                "font-body text-sm font-bold text-cream/45 sm:text-base",
              children:
                "Always double-check the contract address before you swap.",
            }),
          ],
        }),
      ],
    }),
  });
}
function bm() {
  return s.jsx(to, {
    id: "board",
    tint: "var(--color-mars)",
    children: s.jsxs("div", {
      className: "flex flex-col items-center gap-8 text-center",
      children: [
        s.jsx(Pm, { width: "w-24 sm:w-32" }),
        s.jsxs("h2", {
          className:
            "font-display text-[clamp(1.9rem,7.5vw,5rem)] font-black leading-[0.92] text-cream puffy",
          children: [
            "Final call.",
            s.jsx("br", {}),
            "Get ",
            s.jsxs("span", {
              className: "shimmer-text",
              children: [ie.nameTop, " ", ie.nameBottom],
            }),
          ],
        }),
        s.jsxs("p", {
          className:
            "max-w-lg font-body text-lg font-bold text-cream/60 sm:text-xl",
          children: [
            "Hold ",
            ie.ticker,
            ", collect ",
            se.ticker,
            ". There is room on board for everyone",
          ],
        }),
        s.jsx(fs, { size: "xl", tone: "ion" }),
      ],
    }),
  });
}
const Bm = {
  x: s.jsx("path", {
    d: "M18.9 2.3h3.1l-6.8 7.8 8 10.6h-6.3l-4.9-6.4-5.6 6.4H3.3l7.3-8.3L2.9 2.3h6.4l4.5 5.9 5.1-5.9Zm-1.1 16.5h1.7L7.4 4h-1.9l12.3 14.8Z",
  }),
  telegram: s.jsx("path", {
    d: "M21.8 4.2 2.9 11.5c-1.1.4-1.1 1.7 0 2.1l4.7 1.6 1.8 5.6c.2.7 1.1.9 1.6.4l2.6-2.5 4.7 3.5c.7.5 1.7.1 1.8-.7l2.9-15.6c.2-.9-.7-1.6-1.6-1.3ZM9.2 14.8l8.9-5.6-7.4 6.6-.3 3.4-1.2-4.4Z",
  }),
};
function qc({ id: i, emoji: c, className: u = "h-5 w-5" }) {
  const v = Bm[i];
  return v
    ? s.jsx("svg", {
        viewBox: "0 0 24 24",
        className: u,
        fill: "currentColor",
        "aria-hidden": "true",
        children: v,
      })
    : s.jsx("span", {
        "aria-hidden": "true",
        className: "text-lg",
        children: c,
      });
}
const Um = "/logo.webp";
function Hm() {
  return s.jsx("footer", {
    className:
      "relative flex min-h-screen items-center px-4 pb-[calc(7vh+15rem)] pt-[7vh] text-cream sm:pb-[calc(10vh+7rem)] sm:pt-[10vh]",
    children: s.jsxs("div", {
      className: "mx-auto w-full max-w-6xl",
      children: [
        s.jsx("div", {
          className: "nav-thread h-[3px] w-full opacity-60",
          "aria-hidden": "true",
        }),
        s.jsxs("div", {
          className: "mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr]",
          children: [
            s.jsxs("div", {
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    s.jsx("img", {
                      src: Um,
                      width: 256,
                      height: 256,
                      alt: "",
                      loading: "lazy",
                      decoding: "async",
                      className: "h-14 w-14 shrink-0",
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("p", {
                          className:
                            "font-display text-2xl font-black leading-none text-cream",
                          children: ie.name,
                        }),
                        s.jsx("p", {
                          className:
                            "font-body text-xs font-bold uppercase tracking-[0.24em] text-ion",
                          children: ie.chain,
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("p", {
                  className: "mt-5 max-w-md font-body font-bold text-cream/50",
                  children:
                    "Memecoins are highly volatile assets. This project is for community engagement and entertainment purposes only. This is not financial advice. Always do your own research (DYOR) and only risk capital you can afford to completely lose.",
                }),
                s.jsxs("div", {
                  className:
                    "mt-5 grid gap-1.5 font-mono text-[0.7rem] text-cream/30 sm:text-xs",
                  children: [
                    s.jsxs("p", {
                      className: "break-all",
                      children: [
                        s.jsxs("span", {
                          className: "text-cream/45",
                          children: [ie.ticker, " CA:"],
                        }),
                        " ",
                        Ot
                          ? s.jsx("span", {
                              className: "text-cream/40",
                              children: "dropping at launch",
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx("span", {
                                  className: "hidden sm:inline",
                                  children: Ft,
                                }),
                                s.jsx("span", {
                                  className: "sm:hidden",
                                  children: Xl(),
                                }),
                              ],
                            }),
                      ],
                    }),
                    s.jsxs("p", {
                      className: "break-all",
                      children: [
                        s.jsxs("span", {
                          className: "text-cream/45",
                          children: [se.ticker, " CA:"],
                        }),
                        " ",
                        s.jsx("span", {
                          className: "hidden sm:inline",
                          children: se.address,
                        }),
                        s.jsx("span", {
                          className: "sm:hidden",
                          children: Xl(se.address),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "lg:justify-self-end",
              children: [
                s.jsx("p", {
                  className:
                    "font-body text-xs font-bold uppercase tracking-[0.24em] text-cream/40 sm:text-sm",
                  children: "Come out to the colony",
                }),
                s.jsx("ul", {
                  className: "mt-4 flex flex-wrap gap-3",
                  children: bc.map((i) =>
                    s.jsx(
                      "li",
                      {
                        children: s.jsxs("a", {
                          href: i.href,
                          target: "_blank",
                          rel: "noreferrer noopener",
                          className:
                            "flex items-center gap-2 rounded-full border-2 border-cream/12 bg-[#06070f] px-4 py-2.5 font-display text-xs font-bold text-cream/80 transition-colors duration-300 hover:border-ion hover:text-ion sm:text-sm",
                          children: [
                            s.jsx(qc, {
                              id: i.id,
                              emoji: i.emoji,
                              className: "h-4 w-4",
                            }),
                            i.label,
                          ],
                        }),
                      },
                      i.id
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className:
            "mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 font-body text-xs font-bold text-cream/30 sm:mt-14 sm:flex-row sm:text-sm",
          children: [
            s.jsxs("p", {
              children: [
                "© ",
                new Date().getFullYear(),
                " ",
                ie.name,
                ". Flown by the crew.",
              ],
            }),
            s.jsx("a", {
              href: "#top",
              className:
                "text-cream/45 transition-colors duration-300 hover:text-ion",
              children: "Back down to the pad",
            }),
            s.jsx("p", { children: "Mind the airlock." }),
          ],
        }),
      ],
    }),
  });
}
function Vm() {
  return s.jsxs("div", {
    id: "mars-side",
    className: "relative flex flex-col-reverse",
    children: [
      s.jsx($m, {}),
      s.jsx(Om, {}),
      s.jsx(Im, {}),
      s.jsx(bm, {}),
      s.jsx(Hm, {}),
    ],
  });
}
const Wm = "/logo.webp",
  Qm = ["telegram", "x"],
  Km = Qm.map((i) => bc.find((c) => c.id === i)).filter(Boolean),
  Kl = "var(--color-ink)",
  Ym = [
    `drop-shadow(3.5px 0 0 ${Kl})`,
    `drop-shadow(-3.5px 0 0 ${Kl})`,
    `drop-shadow(0 3.5px 0 ${Kl})`,
    `drop-shadow(0 -3.5px 0 ${Kl})`,
    "drop-shadow(0 9px 0 rgb(0 0 0 / 0.45))",
    "drop-shadow(0 16px 20px rgb(0 0 0 / 0.6))",
  ].join(" ");
function Gm(i, c, u) {
  if (i <= 0 || c <= 0) return "";
  const v = Math.max(12, Math.min(30, i * 0.11)),
    m = Math.max(8, Math.min(18, i * 0.05)),
    y = Math.min(c * 0.3, 16),
    k = c / 2;
  return u === "left"
    ? [
        `M ${i},0`,
        `L ${v + m},0`,
        `L ${v},${(c - y * 2) / 2 - 2}`,
        `L 0,${k - y}`,
        `L 0,${k + y}`,
        `L ${v},${c - (c - y * 2) / 2 + 2}`,
        `L ${v + m},${c}`,
        `L ${i},${c}`,
        "Z",
      ].join(" ")
    : [
        "M 0,0",
        `L ${i - v - m},0`,
        `L ${i - v},${(c - y * 2) / 2 - 2}`,
        `L ${i},${k - y}`,
        `L ${i},${k + y}`,
        `L ${i - v},${c - (c - y * 2) / 2 + 2}`,
        `L ${i - v - m},${c}`,
        `L 0,${c}`,
        "Z",
      ].join(" ");
}
function Pc({ side: i, tone: c = "dark" }) {
  const u = c === "dark",
    v = u ? "bg-cream/45" : "bg-ink/30",
    m = u ? "bg-solar" : "bg-mars",
    y = i === "left" ? "left-7" : "right-7",
    k = i === "left" ? "right-8" : "left-8";
  return s.jsxs("span", {
    className: "pointer-events-none absolute inset-0 overflow-hidden",
    "aria-hidden": "true",
    children: [
      s.jsx("span", { className: `absolute inset-x-3 top-[5px] h-px ${v}` }),
      s.jsx("span", { className: `absolute inset-x-3 bottom-[5px] h-px ${v}` }),
      s.jsx("span", {
        className: `absolute ${k} top-2.5 flex gap-1`,
        children: [0, 1, 2].map((R) =>
          s.jsx(
            "span",
            {
              className: `anim-hud-tick h-1 w-2.5 rounded-[1px] ${m}`,
              style: { animationDelay: `${R * 0.42}s` },
            },
            R
          )
        ),
      }),
      s.jsx("span", {
        className: `absolute ${k} bottom-2.5 flex gap-1`,
        children: [0, 1].map((R) =>
          s.jsx(
            "span",
            {
              className: `anim-hud-tick h-1 w-4 rounded-[1px] ${v}`,
              style: { animationDelay: `${0.9 + R * 0.5}s` },
            },
            R
          )
        ),
      }),
      s.jsx("span", {
        className: `absolute ${y} top-1/2 flex -translate-y-1/2 gap-[3px]`,
        children: [0, 1, 2].map((R) =>
          s.jsx("span", { className: `h-4 w-[3px] -skew-x-[20deg] ${v}` }, R)
        ),
      }),
      s.jsx("span", {
        className: `anim-hud-edge absolute inset-x-6 ${
          i === "left" ? "bottom-0" : "top-0"
        } h-[3px] ${m}`,
      }),
      s.jsx("span", {
        className: `anim-hud-sweep absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-20deg] ${
          u ? "bg-cream/20" : "bg-ink/8"
        }`,
      }),
    ],
  });
}
function zc(i, c) {
  const u = T.useRef(null),
    [v, m] = T.useState({ w: 0, h: 0 });
  T.useEffect(() => {
    const k = u.current;
    if (!k) return;
    const R = () => {
      const F = k.getBoundingClientRect();
      m((P) =>
        Math.abs(P.w - F.width) > 0.5 || Math.abs(P.h - F.height) > 0.5
          ? { w: F.width, h: F.height }
          : P
      );
    };
    R();
    const E = new ResizeObserver(R);
    return E.observe(k), () => E.disconnect();
  }, []);
  const y = c ? Gm(v.w, v.h, i) : "";
  return [u, y ? { clipPath: `path("${y}")`, filter: Ym } : void 0];
}
function Xm(i) {
  const [c, u] = T.useState(
    () => typeof window < "u" && window.matchMedia(i).matches
  );
  return (
    T.useEffect(() => {
      const v = window.matchMedia(i),
        m = () => u(v.matches);
      return (
        m(),
        v.addEventListener("change", m),
        () => v.removeEventListener("change", m)
      );
    }, [i]),
    c
  );
}
function Zm() {
  const i = Xm("(min-width: 640px)"),
    [c, u] = zc("left", i),
    [v, m] = zc("right", i);
  return s.jsxs("div", {
    className: "pointer-events-none fixed inset-x-0 bottom-0 z-40",
    children: [
      s.jsx("div", {
        className:
          "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void/80 via-void/30 to-transparent",
      }),
      s.jsxs("div", {
        className:
          "relative mx-auto flex max-w-[1700px] flex-col gap-3 px-4 pb-4 sm:px-6 sm:pb-6 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:items-center xl:gap-4",
        children: [
          s.jsxs("div", {
            className:
              "pointer-events-auto flex flex-wrap items-center justify-center gap-2 sm:flex-nowrap sm:gap-0 xl:order-2",
            children: [
              s.jsx("div", {
                ref: c,
                className: "relative order-1 flex sm:z-0 sm:-mr-9",
                children: s.jsx(fs, {
                  size: "md",
                  style: u,
                  className:
                    "sm:rounded-none sm:border-0 sm:py-5 sm:pl-16 sm:pr-20 sm:shadow-none",
                  trim: i ? s.jsx(Pc, { side: "left", tone: "dark" }) : null,
                }),
              }),
              s.jsx("img", {
                src: Wm,
                width: 256,
                height: 256,
                alt: "",
                decoding: "async",
                className:
                  "relative order-3 hidden h-14 w-14 shrink-0 drop-shadow-[0_10px_0_rgb(0_0_0/0.45)] sm:order-2 sm:z-10 sm:block sm:h-24 sm:w-24",
              }),
              s.jsx("div", {
                ref: v,
                className: "relative order-2 flex sm:order-3 sm:z-0 sm:-ml-9",
                children: s.jsxs("a", {
                  href: "#approach",
                  style: m,
                  className:
                    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-4 border-ink bg-cream px-5 py-3 font-display text-sm font-bold text-ink pill-shadow lift sm:rounded-none sm:border-0 sm:py-5 sm:pl-20 sm:pr-16 sm:text-base sm:shadow-none",
                  children: [
                    s.jsxs("span", {
                      className: "relative z-10 whitespace-nowrap",
                      children: [se.ticker, " Live Distribution"],
                    }),
                    s.jsx("span", {
                      className:
                        "pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-ink/10 transition-all duration-700 group-hover:left-full",
                    }),
                    i && s.jsx(Pc, { side: "right", tone: "light" }),
                  ],
                }),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center justify-between gap-3 xl:contents",
            children: [
              s.jsx(qm, {}),
              s.jsx("div", {
                className:
                  "pointer-events-auto flex items-center gap-3 xl:order-3 xl:justify-self-end",
                children: Km.map((y) => s.jsx(Jm, { social: y }, y.id)),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function qm() {
  const [i, c] = Zc(Ft);
  return s.jsxs("button", {
    type: "button",
    onClick: Ot ? void 0 : c,
    disabled: Ot,
    title: Ot ? `${ie.ticker} contract address coming soon` : Ft,
    "aria-label": Ot
      ? `${ie.ticker} contract address coming soon`
      : `Copy ${ie.ticker} contract address ${Ft}`,
    className: `group pointer-events-auto flex min-w-0 items-center gap-3 rounded-full border-[3px] border-cream/35 bg-void/70 py-1.5 pl-4 pr-3 backdrop-blur transition-all duration-300 sm:py-2 sm:pl-6 sm:pr-3.5 xl:order-1 xl:justify-self-start ${
      Ot ? "cursor-default" : "hover:-translate-y-1 hover:border-ion"
    }`,
    children: [
      s.jsx("span", {
        className:
          "shrink-0 font-body text-[0.68rem] font-bold uppercase tracking-[0.18em] text-mars-light sm:text-sm",
        children: ie.ticker,
      }),
      Ot
        ? s.jsx("span", {
            className:
              "truncate font-body text-[0.78rem] font-bold tracking-tight text-cream/70 sm:text-[0.95rem]",
            children: "CA coming soon",
          })
        : s.jsxs("span", {
            className:
              "truncate font-mono text-[0.78rem] font-bold tracking-tight text-cream/85 sm:text-[0.95rem]",
            children: [
              s.jsx("span", {
                className: "hidden sm:inline xl:hidden 2xl:inline",
                children: Xl(Ft, 10, 8),
              }),
              s.jsx("span", {
                className: "sm:hidden xl:inline 2xl:hidden",
                children: Xl(Ft),
              }),
            ],
          }),
      s.jsx("span", {
        className: `grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm transition-colors sm:h-9 sm:w-9 ${
          Ot
            ? "bg-nebula/50 text-cream/40"
            : i
            ? "bg-ion text-ink"
            : "bg-nebula/80 text-cream/80 group-hover:bg-ion group-hover:text-ink"
        }`,
        "aria-hidden": "true",
        children: Ot ? "⋯" : i ? "✓" : "⧉",
      }),
    ],
  });
}
function Jm({ social: i }) {
  return s.jsx("a", {
    href: i.href,
    target: "_blank",
    rel: "noreferrer noopener",
    title: `${i.label} — ${i.handle}`,
    "aria-label": i.label,
    className:
      "grid h-12 w-12 place-items-center rounded-full border-[3px] border-cream/35 bg-void/70 text-cream/85 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-ion hover:bg-nebula hover:text-ion sm:h-14 sm:w-14",
    children: s.jsx(qc, {
      id: i.id,
      emoji: i.emoji,
      className: "h-6 w-6 sm:h-7 sm:w-7",
    }),
  });
}
function eh() {
  const [i, c] = T.useState(!1),
    [u, v] = T.useState(Hn[0].id),
    m = T.useRef([]),
    y = T.useRef(Hn[0].id),
    k = T.useRef(null),
    R = T.useRef(null),
    E = T.useRef(null);
  T.useEffect(() => {
    var oe;
    const P = () => {
      const W = Y.content;
      if (!W) return;
      const K = W.getBoundingClientRect().top;
      m.current = Hn.map((Q) => {
        const ne = document.getElementById(Q.id);
        if (!ne) return null;
        const we = ne.getBoundingClientRect();
        return { id: Q.id, top: we.top - K, height: we.height };
      }).filter(Boolean);
    };
    P();
    const z = setTimeout(P, 700),
      U = setTimeout(P, 1800);
    return (
      window.addEventListener("resize", P),
      (oe = document.fonts) == null || oe.ready.then(P).catch(() => {}),
      () => {
        clearTimeout(z),
          clearTimeout(U),
          window.removeEventListener("resize", P);
      }
    );
  }, []),
    Jl(({ travel: P, vh: z, progress: U }) => {
      const oe = Math.round(U * 100);
      R.current &&
        R.current.textContent !== `${oe}%` &&
        (R.current.textContent = `${oe}%`),
        E.current && (E.current.style.height = `${U * 100}%`);
      const W = P + z * 0.5;
      let K = null,
        Q = 1 / 0;
      for (const ne of m.current) {
        if (W >= ne.top && W <= ne.top + ne.height) {
          K = ne.id;
          break;
        }
        const we = Math.min(
          Math.abs(W - ne.top),
          Math.abs(W - (ne.top + ne.height))
        );
        we < Q && ((Q = we), (K = ne.id));
      }
      K && K !== y.current && ((y.current = K), v(K));
    }),
    T.useEffect(() => {
      if (!i) return;
      const P = (U) => U.key === "Escape" && c(!1),
        z = (U) => {
          var oe;
          ((oe = k.current) != null && oe.contains(U.target)) || c(!1);
        };
      return (
        window.addEventListener("keydown", P),
        document.addEventListener("pointerdown", z),
        () => {
          window.removeEventListener("keydown", P),
            document.removeEventListener("pointerdown", z);
        }
      );
    }, [i]);
  const F = Hn.find((P) => P.id === u) ?? Hn[0];
  return s.jsx("div", {
    ref: k,
    className:
      "pointer-events-none fixed right-3 top-3 z-[45] sm:right-5 sm:top-5",
    children: s.jsxs("div", {
      className: "pointer-events-auto flex flex-col items-end gap-2",
      children: [
        s.jsxs("button", {
          type: "button",
          onClick: () => c((P) => !P),
          "aria-expanded": i,
          "aria-controls": "fast-travel-panel",
          className: `group flex items-center gap-2.5 rounded-full border-[3px] py-2 pl-3 pr-3.5 backdrop-blur-md transition-all duration-300 sm:gap-3 sm:pl-4 sm:pr-5 ${
            i
              ? "border-ember bg-ember/20 text-ember"
              : "anim-beacon-halo bg-void/85 text-cream hover:-translate-y-0.5 hover:border-ember hover:text-ember"
          }`,
          children: [
            s.jsxs("span", {
              className:
                "relative grid h-6 w-6 shrink-0 place-items-center sm:h-7 sm:w-7",
              children: [
                !i &&
                  s.jsx("span", {
                    className:
                      "anim-beacon-ring absolute inset-0 rounded-full border-2 border-ember",
                    "aria-hidden": "true",
                  }),
                s.jsx("span", {
                  className:
                    "absolute inset-0 rounded-full border-2 border-current opacity-45",
                }),
                s.jsx("span", { className: "h-2 w-2 rounded-full bg-current" }),
              ],
            }),
            s.jsxs("span", {
              className: "text-left leading-none",
              children: [
                s.jsx("span", {
                  className:
                    "block font-body text-[0.55rem] font-bold uppercase tracking-[0.24em] opacity-80",
                  children: "Fast travel",
                }),
                s.jsx("span", {
                  className:
                    "mt-0.5 block font-display text-[0.7rem] font-black sm:text-sm",
                  children: F.name,
                }),
              ],
            }),
            s.jsx("span", {
              className: `ml-0.5 font-display text-xs transition-transform duration-300 ${
                i ? "rotate-180" : ""
              }`,
              "aria-hidden": "true",
              children: "▾",
            }),
          ],
        }),
        s.jsxs("div", {
          id: "fast-travel-panel",
          className: `w-[15.5rem] origin-top-right overflow-hidden rounded-3xl border-[3px] border-cream/20 bg-void/85 backdrop-blur-xl transition-all duration-300 sm:w-[18rem] ${
            i
              ? "pointer-events-auto max-h-[76vh] scale-100 opacity-100 shadow-[0_30px_70px_-20px_rgb(0_0_0/0.85)]"
              : "pointer-events-none max-h-0 scale-95 border-transparent opacity-0"
          }`,
          children: [
            s.jsxs("div", {
              className:
                "flex items-center justify-between gap-3 border-b border-cream/12 px-4 py-3",
              children: [
                s.jsx("span", {
                  className:
                    "font-body text-[0.6rem] font-bold uppercase tracking-[0.26em] text-cream/45",
                  children: "Distance flown",
                }),
                s.jsx("span", {
                  ref: R,
                  className: "font-display text-sm font-black text-ion",
                  children: "0%",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "relative max-h-[62vh] overflow-y-auto px-3 py-3",
              children: [
                s.jsx("div", {
                  className:
                    "absolute bottom-3 left-[1.85rem] top-3 w-[3px] rounded-full bg-cream/12",
                  "aria-hidden": "true",
                  children: s.jsx("div", {
                    ref: E,
                    className:
                      "w-full rounded-full bg-gradient-to-b from-mars-light to-ion transition-[height] duration-200",
                    style: { height: "0%" },
                  }),
                }),
                s.jsx("ul", {
                  className: "relative flex flex-col-reverse gap-1",
                  children: Hn.map((P) => {
                    const z = P.id === u;
                    return s.jsx(
                      "li",
                      {
                        children: s.jsxs("a", {
                          href: `#${P.id}`,
                          onClick: () => c(!1),
                          "aria-current": z ? "true" : void 0,
                          className: `flex items-center gap-3 rounded-2xl px-2 py-2 transition-colors duration-200 ${
                            z ? "bg-ion/12" : "hover:bg-cream/8"
                          }`,
                          children: [
                            s.jsx("span", {
                              className: `grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 text-sm transition-colors duration-200 ${
                                z
                                  ? "border-ion bg-void text-ion"
                                  : "border-cream/25 bg-void text-cream/70"
                              }`,
                              "aria-hidden": "true",
                              children: P.glyph,
                            }),
                            s.jsxs("span", {
                              className: "min-w-0 leading-tight",
                              children: [
                                s.jsx("span", {
                                  className: `block truncate font-display text-[0.72rem] font-bold sm:text-sm ${
                                    z ? "text-ion" : "text-cream/85"
                                  }`,
                                  children: P.name,
                                }),
                                s.jsx("span", {
                                  className:
                                    "block truncate font-body text-[0.62rem] font-bold text-cream/40 sm:text-xs",
                                  children: P.sub,
                                }),
                              ],
                            }),
                            z &&
                              s.jsx("span", {
                                className:
                                  "ml-auto shrink-0 font-body text-[0.55rem] font-bold uppercase tracking-[0.18em] text-ion/80",
                                children: "here",
                              }),
                          ],
                        }),
                      },
                      P.id
                    );
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function th() {
  return s.jsxs("div", {
    className: "bg-void",
    children: [
      s.jsx(Jp, {}),
      s.jsxs(up, {
        children: [
          s.jsx(lm, {}),
          s.jsx(fm, {}),
          s.jsx(xm, {}),
          s.jsx(ym, {}),
          s.jsx(wm, {}),
          s.jsx(Vm, {}),
        ],
      }),
      s.jsx(eh, {}),
      s.jsx(Zm, {}),
    ],
  });
}
rp.createRoot(document.getElementById("root")).render(
  s.jsx(T.StrictMode, { children: s.jsx(th, {}) })
);
