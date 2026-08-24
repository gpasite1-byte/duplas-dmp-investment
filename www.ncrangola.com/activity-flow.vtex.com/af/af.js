function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _createForOfIteratorHelper(e, t) {
    var n, r, o, a, i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (i) return o = !(r = !0), {
        s: function() {
            i = i.call(e)
        },
        n: function() {
            var e = i.next();
            return r = e.done, e
        },
        e: function(e) {
            o = !0, n = e
        },
        f: function() {
            try {
                r || null == i.return || i.return()
            } finally {
                if (o) throw n
            }
        }
    };
    if (Array.isArray(e) || (i = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) return i && (e = i), a = 0, {
        s: t = function() {},
        n: function() {
            return a >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[a++]
            }
        },
        e: function(e) {
            throw e
        },
        f: t
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
    var n;
    if (e) return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (n = "Object" === (n = {}.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function _iterableToArrayLimit(e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var r, o, a, i, c = [],
            u = !0,
            s = !1;
        try {
            if (a = (n = n.call(e)).next, 0 === t) {
                if (Object(n) !== n) return;
                u = !1
            } else
                for (; !(u = (r = a.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                if (!u && null != n.return && (i = n.return(), Object(i) !== i)) return
            } finally {
                if (s) throw o
            }
        }
        return c
    }
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

function _regeneratorValues(e) {
    if (null != e) {
        var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
            n = 0;
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) return {
            next: function() {
                return {
                    value: (e = e && n >= e.length ? void 0 : e) && e[n++],
                    done: !e
                }
            }
        }
    }
    throw new TypeError(_typeof(e) + " is not iterable")
}

function _regenerator() {
    var p, e = "function" == typeof Symbol ? Symbol : {},
        t = e.iterator || "@@iterator",
        n = e.toStringTag || "@@toStringTag";

    function r(e, t, n, r) {
        var o, a, i, c, u, s, l, f, d, t = t && t.prototype instanceof y ? t : y,
            t = Object.create(t.prototype);
        return _regeneratorDefine2(t, "_invoke", (o = e, a = n, l = r || [], f = !1, d = {
            p: s = 0,
            n: 0,
            v: p,
            a: v,
            f: v.bind(p, 4),
            d: function(e, t) {
                return i = e, c = 0, u = p, d.n = t, m
            }
        }, function(e, t, n) {
            if (1 < s) throw TypeError("Generator is already running");
            for (f && 1 === t && v(t, n), c = t, u = n;
                (g = c < 2 ? p : u) || !f;) {
                i || (c ? c < 3 ? (1 < c && (d.n = -1), v(c, u)) : d.n = u : d.v = u);
                try {
                    if (s = 2, i) {
                        if (g = i[e = c ? e : "next"]) {
                            if (!(g = g.call(i, u))) throw TypeError("iterator result is not an object");
                            if (!g.done) return g;
                            u = g.value, c < 2 && (c = 0)
                        } else 1 === c && (g = i.return) && g.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + e + "' method"), c = 1);
                        i = p
                    } else if ((g = (f = d.n < 0) ? u : o.call(a, d)) !== m) break
                } catch (e) {
                    i = p, c = 1, u = e
                } finally {
                    s = 1
                }
            }
            return {
                value: g,
                done: f
            }
        }), !0), t;

        function v(e, t) {
            for (c = e, u = t, g = 0; !f && s && !n && g < l.length; g++) {
                var n, r = l[g],
                    o = d.p,
                    a = r[2];
                3 < e ? (n = a === t) && (u = r[(c = r[4]) ? 5 : c = 3], r[4] = r[5] = p) : r[0] <= o && ((n = e < 2 && o < r[1]) ? (c = 0, d.v = t, d.n = r[1]) : o < a && (n = e < 3 || r[0] > t || a < t) && (r[4] = e, r[5] = t, d.n = a, c = 0))
            }
            if (n || 1 < e) return m;
            throw f = !0, t
        }
    }
    var m = {};

    function y() {}

    function o() {}

    function a() {}
    var g = Object.getPrototypeOf,
        e = [][t] ? g(g([][t]())) : (_regeneratorDefine2(g = {}, t, function() {
            return this
        }), g),
        i = a.prototype = y.prototype = Object.create(e);

    function c(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, _regeneratorDefine2(e, n, "GeneratorFunction")), e.prototype = Object.create(i), e
    }
    return _regeneratorDefine2(i, "constructor", o.prototype = a), _regeneratorDefine2(a, "constructor", o), _regeneratorDefine2(a, n, o.displayName = "GeneratorFunction"), _regeneratorDefine2(i), _regeneratorDefine2(i, n, "Generator"), _regeneratorDefine2(i, t, function() {
        return this
    }), _regeneratorDefine2(i, "toString", function() {
        return "[object Generator]"
    }), (_regenerator = function() {
        return {
            w: r,
            m: c
        }
    })()
}

function _regeneratorDefine2(e, t, n, r) {
    var a = Object.defineProperty;
    try {
        a({}, "", {})
    } catch (e) {
        a = 0
    }(_regeneratorDefine2 = function(e, t, n, r) {
        function o(t, n) {
            _regeneratorDefine2(e, t, function(e) {
                return this._invoke(t, n, e)
            })
        }
        t ? a ? a(e, t, {
            value: n,
            enumerable: !r,
            configurable: !r,
            writable: !r
        }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2))
    })(e, t, n, r)
}(() => {
    function d(e, t) {
        var n = {};
        for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
        return n
    }

    function v(e, i, c, u) {
        return new(c = c || Promise)(function(n, t) {
            function r(e) {
                try {
                    a(u.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function o(e) {
                try {
                    a(u.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function a(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                    e(t)
                })).then(r, o)
            }
            a((u = u.apply(e, i || [])).next())
        })
    }
    var M = "https://da-flags.vtex.com/",
        P = "activityflow",
        F = 3,
        V = 8e3;

    function U(e, t, n) {
        var r = new AbortController,
            o = setTimeout(function() {
                return r.abort()
            }, n);
        return fetch(e, Object.assign(Object.assign({}, t), {
            signal: r.signal
        })).finally(function() {
            return clearTimeout(o)
        })
    }

    function W(e, t, r) {
        var o = function() {},
            n = new Promise(function(e, t) {
                var n = setTimeout(function() {
                    return t(new Error("Request timeout"))
                }, r);
                o = function() {
                    return clearTimeout(n)
                }
            });
        return Promise.race([fetch(e, t).finally(o), n])
    }
    var H = "af_ff_";

    function q(s, l) {
        return v(this, void 0, void 0, _regenerator().m(function e() {
            var r, o, a, i, c, u;
            return _regenerator().w(function(e) {
                for (;;) switch (e.p = e.n) {
                    case 0:
                        if (t = s, n = l, r = "".concat(H).concat(t, "_").concat(null != n ? n : "default"), null !== (o = (t => {
                                try {
                                    var e = sessionStorage.getItem(t);
                                    return e ? JSON.parse(e) : null
                                } catch (e) {
                                    return sessionStorage.removeItem(t), null
                                }
                            })(r))) return e.a(2, o);
                        e.n = 1;
                        break;
                    case 1:
                        return o = new URLSearchParams({
                                application: P,
                                featureKey: s,
                                flag: l
                            }).toString(), c = "".concat(M, "?").concat(o), e.p = 2, e.n = 3,
                            function(l, r, e) {
                                var f = 2 < arguments.length && void 0 !== e ? e : F;
                                return v(this, void 0, void 0, _regenerator().m(function e() {
                                    var a, i, c, u, t, n, s;
                                    return _regenerator().w(function(e) {
                                        for (;;) switch (e.n) {
                                            case 0:
                                                t = r.timeout, a = void 0 === t ? V : t, i = r.retryOn, c = d(r, ["timeout", "retryOn"]), u = "undefined" != typeof AbortController ? U : W, t = _regenerator().m(function e() {
                                                    var t, n, r, o;
                                                    return _regenerator().w(function(e) {
                                                        for (;;) switch (e.p = e.n) {
                                                            case 0:
                                                                return e.p = 0, e.n = 1, u(l, c, a);
                                                            case 1:
                                                                if (t = e.v, null != i && i(t) && s < f) return n = 1e3 * Math.pow(2, s), e.n = 2, new Promise(function(e) {
                                                                    return setTimeout(e, n)
                                                                });
                                                                e.n = 3;
                                                                break;
                                                            case 2:
                                                                return e.a(2, 0);
                                                            case 3:
                                                                return e.a(2, {
                                                                    v: t
                                                                });
                                                            case 4:
                                                                if (e.p = 4, o = e.v, s === f) throw o;
                                                                e.n = 5;
                                                                break;
                                                            case 5:
                                                                return r = 1e3 * Math.pow(2, s), e.n = 6, new Promise(function(e) {
                                                                    return setTimeout(e, r)
                                                                });
                                                            case 6:
                                                                return e.a(2)
                                                        }
                                                    }, e, null, [
                                                        [0, 4]
                                                    ])
                                                }), s = 0;
                                            case 1:
                                                if (s <= f) return e.d(_regeneratorValues(t()), 2);
                                                e.n = 5;
                                                break;
                                            case 2:
                                                if (0 === (n = e.v)) return e.a(3, 4);
                                                e.n = 3;
                                                break;
                                            case 3:
                                                if (n) return e.a(2, n.v);
                                                e.n = 4;
                                                break;
                                            case 4:
                                                s++, e.n = 1;
                                                break;
                                            case 5:
                                                throw new Error("resilientFetch: unexpected end of retry loop");
                                            case 6:
                                                return e.a(2)
                                        }
                                    }, e)
                                }))
                            }(c, {
                                method: "GET",
                                retryOn: function(e) {
                                    return 500 <= e.status || 404 === e.status
                                }
                            });
                    case 3:
                        a = e.v, e.n = 5;
                        break;
                    case 4:
                        return e.p = 4, c = e.v, y({
                            context: "feature_flags",
                            message: "Feature flags request failed after retries (network error, featureKey: ".concat(s, ", flag: ").concat(l, ")"),
                            error: c,
                            useDefaultRate: !0
                        }), e.a(2, null);
                    case 5:
                        if (a.ok) {
                            e.n = 6;
                            break
                        }
                        return y({
                            context: "feature_flags",
                            message: "Failed to fetch feature flags (status: ".concat(a.status, " ").concat(a.statusText, ", featureKey: ").concat(s, ", flag: ").concat(l, ")"),
                            useDefaultRate: !0
                        }), e.a(2, null);
                    case 6:
                        return i = null, e.p = 7, e.n = 8, a.json();
                    case 8:
                        u = e.v, i = u.data, e.n = 10;
                        break;
                    case 9:
                        return e.p = 9, y({
                            context: "feature_flags",
                            message: (u = e.v) instanceof SyntaxError ? "Error parsing feature flags JSON response" : "Error reading feature flags response body",
                            error: u,
                            useDefaultRate: !0
                        }), e.a(2, null);
                    case 10:
                        n = t = void 0;
                        t = r, n = i;
                        try {
                            sessionStorage.setItem(t, JSON.stringify(n))
                        } catch (e) {
                            g({
                                context: "featureFlags",
                                message: "Failed to cache feature flag",
                                error: e,
                                useDefaultRate: !0
                            })
                        }
                        return e.a(2, i)
                }
                var t, n
            }, e, null, [
                [7, 9],
                [2, 4]
            ])
        }))
    }
    var B = "VtexRCSessionIdv7",
        G = "VtexRCMacIdv7",
        X = "VtexWorkspace",
        J = 18e5,
        K = 31536e6,
        Y = 2;

    function n(e) {
        e = new RegExp("(^| )".concat(e, "=([^;]+)")), e = document.cookie.match(e);
        if (e) return decodeURI(e[Y])
    }

    function $(e, t, n) {
        var t = encodeURI(t),
            r = (r = window.location.hostname.replace("www.", ""), 2 < (r = (o = r).split(".")).length && "com" === r[r.length - 1] && (o = r.slice(-2).join(".")), 3 < r.length && "com" !== r[r.length - 1] && (o = r.slice(-3).join(".")), ".".concat(o)),
            o = new Date,
            n = (o.setTime(o.getTime() + n), o.toUTCString());
        document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(n, "; path=/; domain=").concat(r)
    }

    function z() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }

    function o() {
        var e = ne(),
            t = null != e ? e : z();
        return $(B, t, J), {
            sessionID: t,
            isNewSessionID: !e
        }
    }

    function Q() {
        var e = n(G),
            t = null != e ? e : z();
        return $(G, t, K), {
            macID: t,
            isNewUser: !e
        }
    }

    function Z() {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, o()), Q()), l()), {
            url: f(),
            ref: re(),
            workspace: oe(),
            ckInfo: window.document.cookie,
            checkout: te()
        })
    }

    function l() {
        var e = null == (e = null == (e = window.document) ? void 0 : e.querySelector('meta[name="storefront"]')) ? void 0 : e.getAttribute("content"),
            t = null != (t = null != (t = null != (t = null == (t = window.VTEX_METADATA) ? void 0 : t.account) ? t : null == (t = window.__RUNTIME__) ? void 0 : t.account) ? t : window.jsnomeLoja) ? t : (() => {
                var e = null != (e = null == (e = window.vtexafenv) ? void 0 : e.account) ? e : null != (e = null == (e = null == document ? void 0 : document.currentScript) ? void 0 : e.getAttribute("an")) ? e : null == (e = null == document ? void 0 : document.currentScript) ? void 0 : e.getAttribute("data-an");
                return ee = e ? e : ee
            })();
        return e ? {
            accountName: t,
            accountEnvironment: e
        } : null != (e = window.__RUNTIME__) && e.account ? {
            accountName: t,
            accountEnvironment: "store_framework"
        } : window.jsnomeLoja ? {
            accountName: t,
            accountEnvironment: "portal"
        } : {
            accountName: t,
            accountEnvironment: window.__NEXT_DATA__ || window.___gatsby ? "fast_store" : void 0
        }
    }
    var ee = "";

    function te() {
        var e, t;
        return null != (e = null == (e = window.vtex) ? void 0 : e.checkout) && e.version ? (t = (e = window.vtex.checkout.version).startsWith("v") ? "checkout_".concat(e.slice(0, 2)) : "checkout", {
            version: e,
            type: t
        }) : null != (e = window.__FASTCHECKOUT__) && e.version ? {
            version: window.__FASTCHECKOUT__.version,
            type: "fastcheckout"
        } : void 0
    }

    function ne() {
        return n(B)
    }

    function f() {
        return window.location.href
    }

    function re() {
        return window.document.referrer
    }

    function oe() {
        var e;
        return null != (e = null != (e = _slicedToArray(null != (e = null == (e = n(X)) ? void 0 : e.split(":")) ? e : [], 1)[0]) ? e : null == (e = new RegExp(/[?&]workspace=([^&]+)(&|$)/).exec(window.location.search)) ? void 0 : e[1]) ? e : null == (e = null == window ? void 0 : window.__RUNTIME__) ? void 0 : e.workspace
    }

    function ae(e) {
        var t = (() => {
            if ("undefined" != typeof window) return window.crypto || window.msCrypto;
            try {
                return require("crypto").webcrypto
            } catch (e) {}
        })();
        return (null != t && t.getRandomValues ? _toConsumableArray(t.getRandomValues(new Uint8Array(e))).map(function(e) {
            return e.toString(16).padStart(2, "0")
        }) : Array.from({
            length: 2 * e
        }, function() {
            return (16 * Math.random() | 0).toString(16)
        })).join("")
    }
    var ie = "activity_flow_web_script",
        ce = "https://stable.vtexobservability.com",
        p = {
            WARN: .01,
            ERROR: .01,
            INFO: 0,
            DEBUG: 0
        },
        a = {
            WARN: null,
            ERROR: null,
            INFO: null,
            DEBUG: null
        },
        ue = null,
        m = null;

    function se(r) {
        return v(this, void 0, void 0, _regenerator().m(function e() {
            var t, n;
            return _regenerator().w(function(e) {
                for (;;) switch (e.n) {
                    case 0:
                        if (null !== a[r]) return e.a(2, a[r]);
                        e.n = 1;
                        break;
                    case 1:
                        return e.n = 2, q("telemetry_log_rate_by_severity", window.location.hostname);
                    case 2:
                        n = e.v, t = null;
                        try {
                            t = JSON.parse(n)[r]
                        } catch (e) {
                            t = null
                        }
                        return ((n = "number" == typeof t ? t : p[r]) < 0 || 1 < n) && (n = p[r]), a[r] = n, e.a(2, n)
                }
            }, e)
        }))
    }

    function le() {
        return ue = ue || ae(16)
    }
    var fe = function(n) {
        return JSON.stringify(Object.assign({
            name: n.name,
            message: n.message,
            stack: n.stack
        }, Object.getOwnPropertyNames(n).reduce(function(e, t) {
            return ["name", "message", "stack"].includes(t) || (e[t] = n[t]), e
        }, {})))
    };

    function de(s) {
        v(this, void 0, void 0, _regenerator().m(function e() {
            var r, o, a, i, c, u;
            return _regenerator().w(function(e) {
                for (;;) switch (e.n) {
                    case 0:
                        if ("DEBUG" === s.severityText) return e.n = 1,
                            function(r) {
                                return v(this, void 0, void 0, _regenerator().m(function e() {
                                    var t = this;
                                    return _regenerator().w(function(e) {
                                        for (;;)
                                            if (0 === e.n) return m = m || v(t, void 0, void 0, _regenerator().m(function e() {
                                                var t, n;
                                                return _regenerator().w(function(e) {
                                                    for (;;) switch (e.n) {
                                                        case 0:
                                                            r ? (n = p.DEBUG, e.n = 3) : e.n = 1;
                                                            break;
                                                        case 1:
                                                            return e.n = 2, se("DEBUG");
                                                        case 2:
                                                            n = e.v;
                                                        case 3:
                                                            return t = n, e.a(2, Math.random() < t)
                                                    }
                                                }, e)
                                            })), e.a(2, m)
                                    }, e)
                                }))
                            }(s.useDefaultRate);
                        e.n = 2;
                        break;
                    case 1:
                        u = e.v, e.n = 4;
                        break;
                    case 2:
                        return e.n = 3,
                            function(r, o) {
                                return v(this, void 0, void 0, _regenerator().m(function e() {
                                    var t, n;
                                    return _regenerator().w(function(e) {
                                        for (;;) switch (e.n) {
                                            case 0:
                                                o ? (n = p[r], e.n = 3) : e.n = 1;
                                                break;
                                            case 1:
                                                return e.n = 2, se(r);
                                            case 2:
                                                n = e.v;
                                            case 3:
                                                return t = n, e.a(2, Math.random() < t)
                                        }
                                    }, e)
                                }))
                            }(s.severityText, s.useDefaultRate);
                    case 3:
                        u = e.v;
                    case 4:
                        if (u) {
                            e.n = 5;
                            break
                        }
                        return e.a(2);
                    case 5:
                        r = l(), o = 1e6 * Date.now(), c = s.message || ((n = s.error) instanceof Error ? n.message : "string" == typeof n ? n : "Unexpected error from Activity Flow Web Script"), a = s.error instanceof Error ? fe(s.error) : c, i = "undefined" != typeof window && window.location ? window.location.search : void 0, c = {
                            resourceLogs: [{
                                resource: {
                                    attributes: [{
                                        key: "_msg",
                                        value: {
                                            stringValue: c
                                        }
                                    }, {
                                        key: "account_name",
                                        value: {
                                            stringValue: r.accountName || "undefined"
                                        }
                                    }, {
                                        key: "account_environment",
                                        value: {
                                            stringValue: r.accountEnvironment || "undefined"
                                        }
                                    }, {
                                        key: "checkout_data",
                                        value: {
                                            stringValue: JSON.stringify(te())
                                        }
                                    }, {
                                        key: "workspace",
                                        value: {
                                            stringValue: oe() || "undefined"
                                        }
                                    }, {
                                        key: "context",
                                        value: {
                                            stringValue: s.context
                                        }
                                    }, {
                                        key: "browserInfos",
                                        value: {
                                            stringValue: JSON.stringify((t = n = void 0, t = "undefined" != typeof window, {
                                                url: f(),
                                                ref: re(),
                                                userAgent: !t || null == (n = window.navigator) ? void 0 : n.userAgent,
                                                language: !t || null == (n = window.navigator) ? void 0 : n.language,
                                                viewportWidth: t ? window.innerWidth : void 0,
                                                viewportHeight: t ? window.innerHeight : void 0
                                            }))
                                        }
                                    }, {
                                        key: "searchParams",
                                        value: {
                                            stringValue: i
                                        }
                                    }]
                                },
                                scopeLogs: [{
                                    scope: {},
                                    logRecords: [{
                                        timeUnixNano: o.toString(),
                                        observedTimeUnixNano: o.toString(),
                                        severityText: s.severityText,
                                        severityNumber: {
                                            DEBUG: 5,
                                            INFO: 9,
                                            WARN: 13,
                                            ERROR: 17
                                        }[s.severityText],
                                        attributes: [{
                                            key: "vtex.search_index",
                                            value: {
                                                stringValue: ie
                                            }
                                        }, {
                                            key: "body",
                                            value: {
                                                stringValue: a
                                            }
                                        }],
                                        traceId: s.traceId || le(),
                                        spanId: s.spanId || ae(8)
                                    }]
                                }]
                            }]
                        };
                        try {
                            fetch("".concat(ce, "/v1/logs"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(c)
                            })
                        } catch (e) {
                            console.error("Failed to send log:", e)
                        }
                    case 6:
                        return e.a(2)
                }
                var t, n
            }, e)
        }))
    }

    function y(e) {
        de(Object.assign(Object.assign({}, e), {
            severityText: "ERROR"
        }))
    }

    function g(e) {
        de(Object.assign(Object.assign({}, e), {
            severityText: "WARN"
        }))
    }
    var ve = "https://af-origin.vtex.com/api/activity-flow",
        pe = "Event",
        me = 1e4,
        ye = new Map;

    function ge(n, r) {
        new Promise(function(e) {
            var t = new XMLHttpRequest;
            t.timeout = me, t.open("POST", n, !0), t.setRequestHeader("Content-Type", "application/json"), t.send(r), t.onload = function() {
                if (200 === t.status || 202 === t.status) return o(), e(r);
                y({
                    context: "createRequest",
                    message: "XHR failed with status ".concat(t.status)
                })
            }, t.onerror = function() {
                y({
                    context: "createRequest",
                    message: "XHR network error sending to ".concat(n)
                })
            }, t.ontimeout = function() {
                y({
                    context: "createRequest",
                    message: "XHR timed out after ".concat(me, "ms sending to ").concat(n)
                })
            }
        })
    }

    function he(e) {
        var t = {
                SessionId: (t = Z()).sessionID,
                MacId: t.macID,
                IsNewUser: t.isNewUser,
                Url: t.url,
                Ref: t.ref,
                accountName: t.accountName,
                accountEnvironment: t.accountEnvironment,
                clientdate: (new Date).getTime(),
                isFirstEvent: t.isNewSessionID,
                workspace: t.workspace,
                ckInfo: t.ckInfo,
                checkout: t.checkout
            },
            n = t.IsNewUser,
            r = t.isFirstEvent,
            t = d(t, ["IsNewUser", "isFirstEvent"]),
            t = Object.assign(Object.assign(Object.assign({}, e), {
                DataType: pe
            }), t);
        return "pageView" === e.eventType ? Object.assign(Object.assign({}, t), {
            IsNewUser: n,
            isFirstEvent: r
        }) : "userSession" === e.eventType ? Object.assign(Object.assign({}, t), {
            IsNewUser: n
        }) : t
    }

    function we(e, t) {
        var n, t = 1 < arguments.length && void 0 !== t && t;
        null != e.eventType && (n = d(e, ["eventType"]), t = t ? n : he(e), (n = ye.get(e.eventType)) ? (n = "".concat(ve, "/").concat(n), t = JSON.stringify(t), n = n, navigator.sendBeacon ? navigator.sendBeacon(n, t) || (g({
            context: "sendData",
            message: "sendBeacon returned false (queue full or restricted). Fallback to XHR"
        }), ge(n, t)) : (g({
            context: "sendData",
            message: "sendBeacon not supported, falling back to XHR"
        }), ge(n, t))) : y({
            context: "handleSendEvent",
            message: 'No Activity Flow route registered for eventType "'.concat(String(e.eventType), '". Event will not be sent.')
        }))
    }

    function i(t, e) {
        var n = 1 < arguments.length && void 0 !== e && e;
        v(this, void 0, void 0, _regenerator().m(function e() {
            return _regenerator().w(function(e) {
                for (;;) switch (e.n) {
                    case 0:
                        if (null == t.eventType) return e.a(2);
                        e.n = 1;
                        break;
                    case 1:
                        "userSession" === t.eventType || ne() || we({
                            eventType: "userSession"
                        }), we(t, n);
                    case 2:
                        return e.a(2)
                }
            }, e)
        }))
    }
    var c = {
            adId: "van-aid",
            campaignId: "van-cid",
            productId: "van-prod-id",
            productName: "van-prod-name",
            adRequestId: "van-req-id",
            adResponseId: "van-res-id",
            actionCost: "van-cpc",
            position: "van-position",
            placement: "van-placement",
            bannerImageId: "van-banner-imageid"
        },
        be = 1e3,
        _e = {},
        Te = {};

    function Ee(a, i) {
        var c;
        "VIEWED" !== s(i) && (c = new window.IntersectionObserver(function(e) {
            e.forEach(function(e) {
                var e = {
                        id: i,
                        observer: c,
                        element: a,
                        entry: e
                    },
                    t = e.id,
                    n = e.element,
                    r = e.observer,
                    o = e.entry;
                switch (s(t)) {
                    case "NOT_VIEWED":
                        o.isIntersecting && (u(t, "IN_VIEW"), ((e, t) => {
                            var n = e;
                            (n = Te[n]) && clearTimeout(n);
                            var r = setTimeout(function() {
                                "IN_VIEW" === s(e) && t()
                            }, be);
                            Te[e] = r
                        })(t, function() {
                            u(t, "VIEWED"), r.disconnect(), n.dispatchEvent(new Event("view"))
                        }));
                        break;
                    case "IN_VIEW":
                        o.isIntersecting || u(t, "NOT_VIEWED");
                        break;
                    case "VIEWED":
                        r.disconnect()
                }
            })
        }, {
            threshold: .5,
            rootMargin: "0px"
        })).observe(a)
    }

    function u(e, t) {
        _e[e] = t
    }

    function s(e) {
        return null != (e = _e[e]) ? e : "NOT_VIEWED"
    }

    function h(e) {
        return "".concat(e.adId, "-").concat(e.adRequestId)
    }

    function Se(e) {
        e = (e => {
            for (var t = {}, n = Object.keys(c), r = 0, o = n; r < o.length; r++) {
                var a = o[r],
                    i = c[a],
                    i = null != (i = e.getAttribute("data-".concat(i))) ? i : "";
                t[a] = i
            }
            return t
        })(e);
        return Object.assign(Object.assign({}, e), {
            actionCost: Number(e.actionCost),
            position: Number(e.position)
        })
    }
    var Ie = 6e4,
        xe = "SCRIPT_VTEX_ACTIVITY_FLOW",
        Ae = {};

    function Oe(e, o) {
        e.addEventListener("click", function() {
            var e, t = h(o),
                n = Ae[t],
                r = (r = n, e = Ie, performance.now() - r <= e);
            !!n && r || (Ae[t] = performance.now(), w(o, "click"))
        })
    }

    function w(e, t) {
        i(Object.assign(Object.assign({}, e), {
            actionType: t,
            eventType: "ads",
            adsSourcingComponents: [xe]
        }))
    }

    function ke(e) {
        var t, n, r = Se(e);
        h(t = r), w(t, "impression"), Ee(t = e, h(n = r)), t.addEventListener("view", function() {
            return w(n, "view")
        }), Oe(e, r)
    }
    var Ne = ["div", "section", "a", "article"];

    function je(e, t) {
        n = t;
        var n, r = Ne.map(function(e) {
                return "".concat(e, "[").concat(n, "]")
            }).join(","),
            o = null != (o = null == e ? void 0 : e.hasAttribute) && o.call(e, t) ? e.parentElement : e;
        return null != (t = null == o ? void 0 : o.querySelectorAll(r)) ? t : []
    }

    function Le(o, a, e) {
        t = a, n = je(n = e, o), Array.from(n).forEach(function(e) {
            return t(e)
        });
        var t, n = new MutationObserver(function(e) {
            e.forEach(function(e) {
                for (var e = e.addedNodes, t = 0, n = Array.from(e); t < n.length; t++) {
                    var r = n[t];
                    if (!(r instanceof HTMLElement)) return;
                    r = je(r, o);
                    Array.from(r).forEach(function(e) {
                        return a(e)
                    })
                }
            })
        });
        n.observe(e, {
            childList: !0,
            subtree: !0,
            characterData: !1,
            attributes: !1
        })
    }

    function Re(o, e, t) {
        var a = 1 < arguments.length && void 0 !== e ? e : 1e4,
            i = 2 < arguments.length && void 0 !== t ? t : 300;
        return v(this, void 0, void 0, _regenerator().m(function e() {
            var r, t;
            return _regenerator().w(function(e) {
                for (;;) switch (e.n) {
                    case 0:
                        if (r = performance.now(), t = o()) return e.a(2, Promise.resolve(t));
                        e.n = 1;
                        break;
                    case 1:
                        return e.a(2, new Promise(function(t) {
                            var n = setInterval(function() {
                                var e = o();
                                e ? (clearInterval(n), t(e)) : performance.now() - r > a && (clearInterval(n), t(null))
                            }, i)
                        }))
                }
            }, e)
        }))
    }
    var De = ["lojasrede", "drogariavenancio"];

    function Ce() {
        return v(this, void 0, void 0, _regenerator().m(function e() {
            var r, o;
            return _regenerator().w(function(e) {
                for (;;) switch (e.n) {
                    case 0:
                        if (n = t = void 0, t = l().accountName, n = (n = window.location.pathname).includes("/search") || n.includes("/pesquisa"), null != t && De.includes(t) && n) return e.n = 1, Re(function() {
                            var e;
                            return null == (e = document.querySelector("impulse-search")) ? void 0 : e.shadowRoot
                        });
                        e.n = 2;
                        break;
                    case 1:
                        o = e.v, e.n = 4;
                        break;
                    case 2:
                        return e.n = 3, Re(function() {
                            return document.body
                        });
                    case 3:
                        o = e.v;
                    case 4:
                        return r = o, e.a(2, r)
                }
                var t, n
            }, e)
        }))
    }
    var Me = {
            eventType: "ads",
            route: "ads",
            init: function() {
                return v(this, void 0, void 0, _regenerator().m(function e() {
                    var t, n;
                    return _regenerator().w(function(e) {
                        for (;;) switch (e.n) {
                            case 0:
                                return t = "data-".concat(c.adId), e.n = 1, Ce();
                            case 1:
                                n = e.v, Le(t, ke, n);
                            case 2:
                                return e.a(2)
                        }
                    }, e)
                }))
            }
        },
        b = "data-af",
        _ = "".concat(b, "-element"),
        Pe = "".concat(b, "-onimpression"),
        Fe = "".concat(b, "-onclick"),
        T = "".concat(b, "-onview");

    function E(e) {
        for (var t = {}, n = [_, Pe, Fe, T], r = 0, o = Array.from(e.attributes); r < o.length; r++) {
            var a = o[r];
            a.name.startsWith("".concat(b, "-")) && "" !== a.value.trim() && !n.includes(a.name) && (t[a.name] = a.value)
        }
        return t
    }

    function Ve(e) {
        var t, n;
        e.target instanceof HTMLElement && (t = e.target.closest("[".concat(Fe, "]"))) && t.hasAttribute(_) && (n = E(t), i({
            element: t.tagName.toLowerCase(),
            eventType: "click",
            pageX: e.pageX,
            pageY: e.pageY,
            attributes: n,
            elementSource: t.getAttribute(_)
        }))
    }
    var Ue = {
            eventType: "click",
            route: "click",
            init: function() {
                document.addEventListener("click", Ve, !0)
            }
        },
        We = /add[\s_-]*to[\s_-]*cart/i,
        He = /remove[\s_-]*from[\s_-]*cart/i,
        qe = 2e3,
        Be = "__af_cart_dedup__";

    function Ge(e) {
        e = e;
        var t, n, r, e = We.test(e) ? "add" : He.test(e) ? "remove" : null;
        if (e) return (t = window)[Be] || (t[Be] = new Map), n = null != (n = (t = t[Be]).get(e)) ? n : 0, r = Date.now(), t.set(e, r), r - n < qe ? void 0 : 1
    }
    var Xe = "__af_patched__",
        Je = {
            eventType: "dataLayer",
            route: "data-layer",
            init: function() {
                var r;
                window.dataLayer && !window.dataLayer.push[Xe] && (r = window.dataLayer.push, window.dataLayer.push = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.forEach(function(e) {
                        null != e && e.event && Ge(e.event) && i({
                            eventType: "dataLayer",
                            dataLayer: e
                        })
                    }), r.apply(window.dataLayer, t)
                }, window.dataLayer.push[Xe] = !0)
            }
        };

    function Ke(e) {
        "complete" === document.readyState ? setTimeout(e, 0) : window.attachEvent ? window.attachEvent("onload", e) : window.addEventListener("DOMContentLoaded", e, !1)
    }

    function Ye(e) {
        if (window.history) {
            try {
                window.history.pushState = $e("pushState", e)
            } catch (e) {
                y({
                    context: "addChangeUrlListener",
                    message: "pushState proxy FAILED",
                    error: e
                })
            }
            try {
                window.history.replaceState = $e("replaceState", e)
            } catch (e) {
                y({
                    context: "addChangeUrlListener",
                    message: "replaceState proxy FAILED",
                    error: e
                })
            }
            window.addEventListener("popstate", function() {
                return e()
            }), window.addEventListener("hashchange", function() {
                return e()
            })
        } else setInterval(function() {
            return e()
        }, 1e3);
        e()
    }

    function $e(a, i) {
        var c = window.history[a];
        return function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = c.apply(this, t),
                o = new Event(a.toLowerCase());
            return i(), o.arguments = t, window.dispatchEvent(o), r
        }
    }
    var ze = null,
        Qe = new WeakMap,
        Ze = "";

    function et(r, e) {
        var t, e = 1 < arguments.length && void 0 !== e ? e : document.body;
        e && (e = e.querySelectorAll("[".concat(Pe, "]")), t = Array.from(e).filter(function(e) {
            return e.hasAttribute(_)
        }), e.length > t.length && g({
            context: "event.impression",
            message: "Found element with the data-af-impression attribute but without the data-af-element attribute"
        }), 0 !== t.length) && t.forEach(function(e) {
            var t = E(e),
                n = Object.entries(t).map(function(e) {
                    var e = _slicedToArray(e, 2),
                        t = e[0],
                        e = e[1];
                    return "".concat(t, "=").concat(e)
                }).join(",");
            Qe.get(e) !== n && (Qe.set(e, n), i({
                eventType: "impression",
                element: e.tagName.toLowerCase(),
                impressionType: r,
                attributes: t,
                elementSource: e.getAttribute(_)
            }))
        })
    }

    function tt() {
        if (document.body) {
            var e = f();
            if (Ze !== e) return Ze = e, ze && ze.disconnect(), et("first_render"), (e = new MutationObserver(function(e) {
                var t, n, r, o = _createForOfIteratorHelper(e);
                try {
                    for (o.s(); !(r = o.n()).done;) {
                        var a = r.value;
                        "childList" === a.type ? a.addedNodes.forEach(function(e) {
                            e instanceof HTMLElement && et("rerender", null != (e = e.parentElement) ? e : document.body)
                        }) : "attributes" === a.type && null != (t = a.attributeName) && t.startsWith(b) && et("rerender", null != (n = a.target.parentElement) ? n : document.body)
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
            })).observe(document.body, {
                childList: !0,
                subtree: !0,
                attributes: !0
            }), ze = e
        } else "complete" === document.readyState && g({
            context: "event.impression",
            message: "document.body is null even though readyState is complete; deferring handler to next tick"
        }), Ke(tt)
    }
    var nt = {
        eventType: "impression",
        route: "impression",
        init: function() {
            Ye(tt)
        }
    };

    function rt() {
        var n = {},
            e = document.querySelectorAll('head meta[property^="product:"]');
        if (0 !== e.length) return e.forEach(function(e) {
            var t = e.getAttribute("property"),
                e = e.getAttribute("content");
            t && e && (n[t] = e)
        }), n
    }

    function ot(e) {
        return null != e && "object" === _typeof(e)
    }
    var at = 1e4,
        it = {
            childList: !0,
            subtree: !0,
            attributes: !0
        },
        ct = "",
        t = null,
        ut = !0,
        st = void 0;

    function lt(e) {
        var t = !0;
        try {
            t = ! function e(t, n) {
                if (void 0 === t && void 0 === n) return 1;
                if (!(void 0 === t && void 0 !== n || void 0 !== t && void 0 === n)) {
                    var r = Object.keys(t),
                        o = Object.keys(n);
                    if (r.length === o.length) {
                        for (var a = 0, i = r; a < i.length; a++) {
                            var c = i[a],
                                u = t[c],
                                c = n[c],
                                s = ot(u) && ot(c);
                            if (s && !e(u, c) || !s && u !== c) return
                        }
                        return 1
                    }
                }
            }(st, e)
        } catch (e) {}
        return st = e, t
    }

    function ft() {
        t && (t.disconnect(), t = null)
    }

    function dt(e, t) {
        ut = !1, i({
            eventType: "pageView",
            isDelayed: e,
            productTags: t
        })
    }
    var vt = {
            eventType: "pageView",
            route: "page-views",
            init: function() {
                Ye(function() {
                    var e = f();
                    ct !== e && (ct = e, ft(), lt(e = rt()) && ut ? dt(!1, e) : (dt(!1), (e = document.querySelector("head")) && ((t = new MutationObserver(function(e, t) {
                        var n, r = _createForOfIteratorHelper(e);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var o, a, i = n.value,
                                    c = !1;
                                if ("childList" === i.type && 0 < i.addedNodes.length)
                                    for (var u = 0, s = Array.from(i.addedNodes); u < s.length; u++) {
                                        var l = s[u];
                                        if ("META" === l.nodeName && "og:title" === l.getAttribute("property")) {
                                            c = !0;
                                            break
                                        }
                                    }
                                if (c = "attributes" === i.type && "META" === (o = i.target).nodeName && "og:title" === o.getAttribute("property") ? !0 : c) return t.disconnect(), void(lt(a = rt()) && dt(!0, a))
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    })).observe(e, it), setTimeout(function() {
                        ft()
                    }, at))))
                })
            }
        },
        pt = {
            eventType: "userSession",
            route: "user-session",
            init: function() {
                o().isNewSessionID && i({
                    eventType: "userSession"
                })
            }
        },
        mt = new Map,
        yt = new Set,
        gt = null,
        ht = "",
        wt = 1e3,
        bt = 1e4;

    function _t(e) {
        var t = e.entry,
            n = e.intersectionObserver,
            r = t.target;
        mt.has(r) || (t.isIntersecting ? (e = setTimeout(function() {
            var e, t = E(r);
            mt.set(r, (e = E(e = r), Object.entries(e).map(function(e) {
                var e = _slicedToArray(e, 2),
                    t = e[0],
                    e = e[1];
                return "".concat(t, "=").concat(e)
            }).join(","))), yt.delete(r), i({
                eventType: "view",
                element: r.tagName.toLowerCase(),
                elementSource: r.getAttribute(_),
                attributes: t
            }), n.unobserve(r)
        }, wt), r.dataset.viewTimer = e.toString()) : (t = r.dataset.viewTimer) && (clearTimeout(Number(t)), delete r.dataset.viewTimer))
    }

    function S(e, t) {
        var n, t = null != t ? t : document.body;
        t && (t = Array.from(t.querySelectorAll("[".concat(T, "]"))).filter(function(e) {
            return e.hasAttribute(_)
        }), n = e, t.filter(function(e) {
            return !yt.has(e) && !mt.has(e)
        }).forEach(function(e) {
            n.observe(e), yt.add(e)
        }))
    }

    function Tt() {
        if (document.body) {
            var a, e, t = f();
            if (ht !== t) return ht = t, gt && gt.disconnect(), S(a = new window.IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    return _t({
                        intersectionObserver: a,
                        entry: e
                    })
                })
            }, {
                threshold: .5,
                rootMargin: "0px",
                root: null
            })), (e = new MutationObserver(function(e) {
                var t, n, r = _createForOfIteratorHelper(e);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var o = n.value;
                        "childList" === o.type ? o.addedNodes.forEach(function(e) {
                            e instanceof HTMLElement && (e.hasAttribute(T) && S(a, e), S(a, e.parentElement))
                        }) : "attributes" === o.type && null != (t = o.attributeName) && t.startsWith("".concat(b, "-")) && S(a, o.target)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            })).observe(document.body, {
                childList: !0,
                subtree: !0,
                attributes: !0
            }), gt = e, setTimeout(function() {
                e.disconnect()
            }, bt), e
        } else "complete" === document.readyState && g({
            context: "event.view",
            message: "document.body is null even though readyState is complete; deferring handler to next tick"
        }), Ke(Tt)
    }

    function Et(i, c) {
        c = c || {}, Pt(jt(function() {
            function e(e) {
                e.forEach(function(e) {
                    var t, n;
                    e.hadRecentInput || (t = o[0], n = o[o.length - 1], r && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (r += e.value, o.push(e)) : (r = e.value, o = [e]))
                }), r > n.value && (n.value = r, n.entries = o, t())
            }
            var t, n = A("CLS", 0),
                r = 0,
                o = [],
                a = O("layout-shift", e);
            a && (t = k(i, n, Ft, c.reportAllChanges), N(function() {
                e(a.takeRecords()), t(!0)
            }), I(function() {
                n = A("CLS", r = 0), t = k(i, n, Ft, c.reportAllChanges), Nt(function() {
                    return t()
                })
            }), setTimeout(t, 0))
        }))
    }

    function St(a, i) {
        "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (i = i || {}, j(function() {
            var e;
            qt();

            function t(t) {
                Kt(function() {
                    t.forEach(Jt);
                    var e = Gt();
                    e && e.latency !== n.value && (n.value = e.latency, n.entries = e.entries, o())
                })
            }
            var n = A("INP"),
                r = O("event", t, {
                    durationThreshold: null != (e = i.durationThreshold) ? e : 40
                }),
                o = k(a, n, Yt, i.reportAllChanges);
            r && (r.observe({
                type: "first-input",
                buffered: !0
            }), N(function() {
                t(r.takeRecords()), o(!0)
            }), I(function() {
                Bt = Ht(), R.length = 0, D.clear(), n = A("INP"), o = k(a, n, Yt, i.reportAllChanges)
            }))
        }))
    }

    function It(i, c) {
        c = c || {}, j(function() {
            function e(e) {
                (e = c.reportAllChanges ? e : e.slice(-1)).forEach(function(e) {
                    e.startTime < r.firstHiddenTime && (o.value = Math.max(e.startTime - x(), 0), o.entries = [e], t())
                })
            }
            var t, n, r = Ct(),
                o = A("LCP"),
                a = O("largest-contentful-paint", e);
            a && (t = k(i, o, $t, c.reportAllChanges), n = jt(function() {
                zt[o.id] || (e(a.takeRecords()), a.disconnect(), zt[o.id] = !0, t(!0))
            }), ["keydown", "click"].forEach(function(e) {
                addEventListener(e, function() {
                    return Kt(n)
                }, {
                    once: !0,
                    capture: !0
                })
            }), N(n), I(function(e) {
                o = A("LCP"), t = k(i, o, $t, c.reportAllChanges), Nt(function() {
                    o.value = performance.now() - e.timeStamp, zt[o.id] = !0, t(!0)
                })
            }))
        })
    }
    var xt, At = {
            eventType: "view",
            route: "view",
            init: function() {
                Ye(Tt)
            }
        },
        Ot = -1,
        I = function(t) {
            addEventListener("pageshow", function(e) {
                e.persisted && (Ot = e.timeStamp, t(e))
            }, !0)
        },
        kt = function() {
            var e = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
            if (e && 0 < e.responseStart && e.responseStart < performance.now()) return e
        },
        x = function() {
            var e = kt();
            return e && e.activationStart || 0
        },
        A = function(e, t) {
            var n = kt(),
                r = "navigate";
            return 0 <= Ot ? r = "back-forward-cache" : n && (document.prerendering || 0 < x() ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: r
            }
        },
        O = function(e, t, n) {
            try {
                var r;
                if (PerformanceObserver.supportedEntryTypes.includes(e)) return (r = new PerformanceObserver(function(e) {
                    Promise.resolve().then(function() {
                        t(e.getEntries())
                    })
                })).observe(Object.assign({
                    type: e,
                    buffered: !0
                }, n || {})), r
            } catch (e) {}
        },
        k = function(t, n, r, o) {
            var a, i;
            return function(e) {
                0 <= n.value && (e || o) && ((i = n.value - (a || 0)) || void 0 === a) && (a = n.value, n.delta = i, n.rating = (e = n.value) > r[1] ? "poor" : e > r[0] ? "needs-improvement" : "good", t(n))
            }
        },
        Nt = function(e) {
            requestAnimationFrame(function() {
                return requestAnimationFrame(function() {
                    return e()
                })
            })
        },
        N = function(e) {
            document.addEventListener("visibilitychange", function() {
                "hidden" === document.visibilityState && e()
            })
        },
        jt = function(e) {
            var t = !1;
            return function() {
                t || (e(), t = !0)
            }
        },
        r = -1,
        Lt = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        e = function(e) {
            "hidden" === document.visibilityState && -1 < r && (r = "visibilitychange" === e.type ? e.timeStamp : 0, Dt())
        },
        Rt = function() {
            addEventListener("visibilitychange", e, !0), addEventListener("prerenderingchange", e, !0)
        },
        Dt = function() {
            removeEventListener("visibilitychange", e, !0), removeEventListener("prerenderingchange", e, !0)
        },
        Ct = function() {
            return r < 0 && (r = Lt(), Rt(), I(function() {
                setTimeout(function() {
                    r = Lt(), Rt()
                }, 0)
            })), {
                get firstHiddenTime() {
                    return r
                }
            }
        },
        j = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", function() {
                return e()
            }, !0) : e()
        },
        Mt = [1800, 3e3],
        Pt = function(a, i) {
            i = i || {}, j(function() {
                var t, n = Ct(),
                    r = A("FCP"),
                    o = O("paint", function(e) {
                        e.forEach(function(e) {
                            "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < n.firstHiddenTime) && (r.value = Math.max(e.startTime - x(), 0), r.entries.push(e), t(!0))
                        })
                    });
                o && (t = k(a, r, Mt, i.reportAllChanges), I(function(e) {
                    r = A("FCP"), t = k(a, r, Mt, i.reportAllChanges), Nt(function() {
                        r.value = performance.now() - e.timeStamp, t(!0)
                    })
                }))
            })
        },
        Ft = [.1, .25],
        Vt = 0,
        Ut = 1 / 0,
        L = 0,
        Wt = function(e) {
            e.forEach(function(e) {
                e.interactionId && (Ut = Math.min(Ut, e.interactionId), L = Math.max(L, e.interactionId), Vt = L ? (L - Ut) / 7 + 1 : 0)
            })
        },
        Ht = function() {
            return xt ? Vt : performance.interactionCount || 0
        },
        qt = function() {
            "interactionCount" in performance || (xt = xt || O("event", Wt, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        },
        R = [],
        D = new Map,
        Bt = 0,
        Gt = function() {
            var e = Math.min(R.length - 1, Math.floor((Ht() - Bt) / 50));
            return R[e]
        },
        Xt = [],
        Jt = function(t) {
            var e, n;
            Xt.forEach(function(e) {
                return e(t)
            }), !t.interactionId && "first-input" !== t.entryType || (n = R[R.length - 1], ((e = D.get(t.interactionId)) || R.length < 10 || t.duration > n.latency) && (e ? t.duration > e.latency ? (e.entries = [t], e.latency = t.duration) : t.duration === e.latency && t.startTime === e.entries[0].startTime && e.entries.push(t) : (n = {
                id: t.interactionId,
                latency: t.duration,
                entries: [t]
            }, D.set(n.id, n), R.push(n)), R.sort(function(e, t) {
                return t.latency - e.latency
            }), 10 < R.length) && R.splice(10).forEach(function(e) {
                return D.delete(e.id)
            }))
        },
        Kt = function(e) {
            var t = self.requestIdleCallback || self.setTimeout,
                n = -1;
            return e = jt(e), "hidden" === document.visibilityState ? e() : (n = t(e), N(e)), n
        },
        Yt = [200, 500],
        $t = [2500, 4e3],
        zt = {},
        Qt = [800, 1800],
        Zt = function e(t) {
            document.prerendering ? j(function() {
                return e(t)
            }) : "complete" !== document.readyState ? addEventListener("load", function() {
                return e(t)
            }, !0) : setTimeout(t, 0)
        };

    function C(e) {
        i(Object.assign({
            eventType: "webVitals"
        }, e))
    }[pt, vt, Me, {
        eventType: "webVitals",
        route: "web-vitals",
        init: function() {
            var t, n, r, o;
            Et(C), "undefined" == typeof PerformanceEventTiming ? g({
                context: "event.web_vitals",
                message: "PerformanceEventTiming is undefined; skipping INP collection for unsupported browsers"
            }) : St(C), It(C), t = C, n = n || {}, r = A("TTFB"), o = k(t, r, Qt, n.reportAllChanges), Zt(function() {
                var e = kt();
                e && (r.value = Math.max(e.responseStart - x(), 0), r.entries = [e], o(!0), I(function() {
                    r = A("TTFB", 0), (o = k(t, r, Qt, n.reportAllChanges))(!0)
                }))
            })
        }
    }, Ue, nt, At, Je].forEach(function(e) {
        try {
            t = e.eventType, n = e.route, ye.set(t, n)
        } catch (e) {
            return void y({
                context: "af.init",
                error: e
            })
        }
        var t = e.eventType,
            n = e.init;
        try {
            n()
        } catch (e) {
            y({
                context: "event.".concat(t),
                error: e
            })
        }
    })
})();
//# sourceMappingURL=af.js.map