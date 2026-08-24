"object" != typeof JSON_EGOIMMERCE && "object" == typeof window.JSON && window.JSON.stringify && window.JSON.parse ? JSON_EGOIMMERCE = window.JSON : function() {
        var e = {};
        /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        (function() {
            var t = "function" == typeof define && define.amd,
                i = {
                    function: !0,
                    object: !0
                },
                n = i[typeof e] && e && !e.nodeType && e,
                r = i[typeof window] && window || this,
                o = n && i[typeof module] && module && !module.nodeType && "object" == typeof global && global;

            function a(e, t) {
                e || (e = r.Object()), t || (t = r.Object());
                var n = e.Number || r.Number,
                    o = e.String || r.String,
                    s = e.Object || r.Object,
                    c = e.Date || r.Date,
                    u = e.SyntaxError || r.SyntaxError,
                    l = e.TypeError || r.TypeError,
                    f = e.Math || r.Math,
                    d = e.JSON || r.JSON;
                "object" == typeof d && d && (t.stringify = d.stringify, t.parse = d.parse);
                var g, m, h, p = s.prototype,
                    k = p.toString,
                    C = new c(-0xc782b5b800cec);
                try {
                    C = -109252 == C.getUTCFullYear() && 0 === C.getUTCMonth() && 1 === C.getUTCDate() && 10 == C.getUTCHours() && 37 == C.getUTCMinutes() && 6 == C.getUTCSeconds() && 708 == C.getUTCMilliseconds()
                } catch (e) {}

                function T(e) {
                    if (T[e] !== h) return T[e];
                    var i;
                    if ("bug-string-char-index" == e) i = "a" != "a" [0];
                    else if ("json" == e) i = T("json-stringify") && T("json-parse");
                    else {
                        var r, a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == e) {
                            var s = t.stringify,
                                u = "function" == typeof s && C;
                            if (u) {
                                (r = function() {
                                    return 1
                                }).toJSON = r;
                                try {
                                    u = "0" === s(0) && "0" === s(new n) && '""' == s(new o) && s(k) === h && s(h) === h && s() === h && "1" === s(r) && "[1]" == s([r]) && "[null]" == s([h]) && "null" == s(null) && "[null,null,null]" == s([h, k, null]) && s({
                                        a: [r, !0, !1, null, "\0\b\n\f\r\t"]
                                    }) == a && "1" === s(null, r) && "[\n 1,\n 2\n]" == s([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == s(new c(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == s(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == s(new c(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == s(new c(-1))
                                } catch (e) {
                                    u = !1
                                }
                            }
                            i = u
                        }
                        if ("json-parse" == e) {
                            var l = t.parse;
                            if ("function" == typeof l) try {
                                if (0 === l("0") && !l(!1)) {
                                    var f = 5 == (r = l(a)).a.length && 1 === r.a[0];
                                    if (f) {
                                        try {
                                            f = !l('"\t"')
                                        } catch (e) {}
                                        if (f) try {
                                            f = 1 !== l("01")
                                        } catch (e) {}
                                        if (f) try {
                                            f = 1 !== l("1.")
                                        } catch (e) {}
                                    }
                                }
                            } catch (e) {
                                f = !1
                            }
                            i = f
                        }
                    }
                    return T[e] = !!i
                }
                if (!T("json")) {
                    var b = "[object Function]",
                        v = "[object Number]",
                        y = "[object String]",
                        A = "[object Array]",
                        w = T("bug-string-char-index");
                    if (!C) var I = f.floor,
                        N = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                        E = function(e, t) {
                            return N[t] + 365 * (e - 1970) + I((e - 1969 + (t = +(t > 1))) / 4) - I((e - 1901 + t) / 100) + I((e - 1601 + t) / 400)
                        };
                    if ((g = p.hasOwnProperty) || (g = function(e) {
                            var t, i = {};
                            return (i.__proto__ = null, i.__proto__ = {
                                toString: 1
                            }, i).toString != k ? g = function(e) {
                                var t = this.__proto__,
                                    i = e in (this.__proto__ = null, this);
                                return this.__proto__ = t, i
                            } : (t = i.constructor, g = function(e) {
                                var i = (this.constructor || t).prototype;
                                return e in this && !(e in i && this[e] === i[e])
                            }), i = null, g.call(this, e)
                        }), m = function(e, t) {
                            var n, r, o, a = 0;
                            for (o in (n = function() {
                                    this.valueOf = 0
                                }).prototype.valueOf = 0, r = new n) g.call(r, o) && a++;
                            return n = r = null, a ? m = 2 == a ? function(e, t) {
                                var i, n = {},
                                    r = k.call(e) == b;
                                for (i in e) r && "prototype" == i || g.call(n, i) || !(n[i] = 1) || !g.call(e, i) || t(i)
                            } : function(e, t) {
                                var i, n, r = k.call(e) == b;
                                for (i in e) r && "prototype" == i || !g.call(e, i) || (n = "constructor" === i) || t(i);
                                (n || g.call(e, i = "constructor")) && t(i)
                            } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], m = function(e, t) {
                                var n, o, a = k.call(e) == b,
                                    s = !a && "function" != typeof e.constructor && i[typeof e.hasOwnProperty] && e.hasOwnProperty || g;
                                for (n in e) a && "prototype" == n || !s.call(e, n) || t(n);
                                for (o = r.length; n = r[--o]; s.call(e, n) && t(n));
                            }), m(e, t)
                        }, !T("json-stringify")) {
                        var O = {
                                92: "\\\\",
                                34: '\\"',
                                8: "\\b",
                                12: "\\f",
                                10: "\\n",
                                13: "\\r",
                                9: "\\t"
                            },
                            S = function(e, t) {
                                return ("000000" + (t || 0)).slice(-e)
                            },
                            R = function(e) {
                                for (var t = '"', i = 0, n = e.length, r = !w || n > 10, o = r && (w ? e.split("") : e); i < n; i++) {
                                    var a = e.charCodeAt(i);
                                    switch (a) {
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 12:
                                        case 13:
                                        case 34:
                                        case 92:
                                            t += O[a];
                                            break;
                                        default:
                                            if (a < 32) {
                                                t += "\\u00" + S(2, a.toString(16));
                                                break
                                            }
                                            t += r ? o[i] : e.charAt(i)
                                    }
                                }
                                return t + '"'
                            },
                            D = function(e, t, i, n, r, o, a) {
                                var s, c, u, f, d, p, C, T, b, w, N, O, P, q, V, _;
                                try {
                                    s = t[e]
                                } catch (e) {}
                                if ("object" == typeof s && s)
                                    if ("[object Date]" != (c = k.call(s)) || g.call(s, "toJSON")) "function" == typeof s.toJSON && (c != v && c != y && c != A || g.call(s, "toJSON")) && (s = s.toJSON(e));
                                    else if (s > -1 / 0 && s < 1 / 0) {
                                    if (E) {
                                        for (d = I(s / 864e5), u = I(d / 365.2425) + 1970 - 1; E(u + 1, 0) <= d; u++);
                                        for (f = I((d - E(u, 0)) / 30.42); E(u, f + 1) <= d; f++);
                                        d = 1 + d - E(u, f), C = I((p = (s % 864e5 + 864e5) % 864e5) / 36e5) % 24, T = I(p / 6e4) % 60, b = I(p / 1e3) % 60, w = p % 1e3
                                    } else u = s.getUTCFullYear(), f = s.getUTCMonth(), d = s.getUTCDate(), C = s.getUTCHours(), T = s.getUTCMinutes(), b = s.getUTCSeconds(), w = s.getUTCMilliseconds();
                                    s = (u <= 0 || u >= 1e4 ? (u < 0 ? "-" : "+") + S(6, u < 0 ? -u : u) : S(4, u)) + "-" + S(2, f + 1) + "-" + S(2, d) + "T" + S(2, C) + ":" + S(2, T) + ":" + S(2, b) + "." + S(3, w) + "Z"
                                } else s = null;
                                if (i && (s = i.call(t, e, s)), null === s) return "null";
                                if ("[object Boolean]" == (c = k.call(s))) return "" + s;
                                if (c == v) return s > -1 / 0 && s < 1 / 0 ? "" + s : "null";
                                if (c == y) return R("" + s);
                                if ("object" == typeof s) {
                                    for (q = a.length; q--;)
                                        if (a[q] === s) throw l();
                                    if (a.push(s), N = [], V = o, o += r, c == A) {
                                        for (P = 0, q = s.length; P < q; P++) O = D(P, s, i, n, r, o, a), N.push(O === h ? "null" : O);
                                        _ = N.length ? r ? "[\n" + o + N.join(",\n" + o) + "\n" + V + "]" : "[" + N.join(",") + "]" : "[]"
                                    } else m(n || s, (function(e) {
                                        var t = D(e, s, i, n, r, o, a);
                                        t !== h && N.push(R(e) + ":" + (r ? " " : "") + t)
                                    })), _ = N.length ? r ? "{\n" + o + N.join(",\n" + o) + "\n" + V + "}" : "{" + N.join(",") + "}" : "{}";
                                    return a.pop(), _
                                }
                            };
                        t.stringify = function(e, t, n) {
                            var r, o, a, s;
                            if (i[typeof t] && t)
                                if ((s = k.call(t)) == b) o = t;
                                else if (s == A) {
                                a = {};
                                for (var c, u = 0, l = t.length; u < l; c = t[u++], ((s = k.call(c)) == y || s == v) && (a[c] = 1));
                            }
                            if (n)
                                if ((s = k.call(n)) == v) {
                                    if ((n -= n % 1) > 0)
                                        for (r = "", n > 10 && (n = 10); r.length < n; r += " ");
                                } else s == y && (r = n.length <= 10 ? n : n.slice(0, 10));
                            return D("", ((c = {})[""] = e, c), o, a, r, "", [])
                        }
                    }
                    if (!T("json-parse")) {
                        var P, q, V = o.fromCharCode,
                            _ = {
                                92: "\\",
                                34: '"',
                                47: "/",
                                98: "\b",
                                116: "\t",
                                110: "\n",
                                102: "\f",
                                114: "\r"
                            },
                            U = function() {
                                throw P = q = null, u()
                            },
                            x = function() {
                                for (var e, t, i, n, r, o = q, a = o.length; P < a;) switch (r = o.charCodeAt(P)) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        P++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return e = w ? o.charAt(P) : o[P], P++, e;
                                    case 34:
                                        for (e = "@", P++; P < a;)
                                            if ((r = o.charCodeAt(P)) < 32) U();
                                            else if (92 == r) switch (r = o.charCodeAt(++P)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                e += _[r], P++;
                                                break;
                                            case 117:
                                                for (t = ++P, i = P + 4; P < i; P++)(r = o.charCodeAt(P)) >= 48 && r <= 57 || r >= 97 && r <= 102 || r >= 65 && r <= 70 || U();
                                                e += V("0x" + o.slice(t, P));
                                                break;
                                            default:
                                                U()
                                        } else {
                                            if (34 == r) break;
                                            for (r = o.charCodeAt(P), t = P; r >= 32 && 92 != r && 34 != r;) r = o.charCodeAt(++P);
                                            e += o.slice(t, P)
                                        }
                                        if (34 == o.charCodeAt(P)) return P++, e;
                                        U();
                                    default:
                                        if (t = P, 45 == r && (n = !0, r = o.charCodeAt(++P)), r >= 48 && r <= 57) {
                                            for (48 == r && ((r = o.charCodeAt(P + 1)) >= 48 && r <= 57) && U(), n = !1; P < a && ((r = o.charCodeAt(P)) >= 48 && r <= 57); P++);
                                            if (46 == o.charCodeAt(P)) {
                                                for (i = ++P; i < a && ((r = o.charCodeAt(i)) >= 48 && r <= 57); i++);
                                                i == P && U(), P = i
                                            }
                                            if (101 == (r = o.charCodeAt(P)) || 69 == r) {
                                                for (43 != (r = o.charCodeAt(++P)) && 45 != r || P++, i = P; i < a && ((r = o.charCodeAt(i)) >= 48 && r <= 57); i++);
                                                i == P && U(), P = i
                                            }
                                            return +o.slice(t, P)
                                        }
                                        if (n && U(), "true" == o.slice(P, P + 4)) return P += 4, !0;
                                        if ("false" == o.slice(P, P + 5)) return P += 5, !1;
                                        if ("null" == o.slice(P, P + 4)) return P += 4, null;
                                        U()
                                }
                                return "$"
                            },
                            L = function(e) {
                                var t, i;
                                if ("$" == e && U(), "string" == typeof e) {
                                    if ("@" == (w ? e.charAt(0) : e[0])) return e.slice(1);
                                    if ("[" == e) {
                                        for (t = [];
                                            "]" != (e = x()); i || (i = !0)) i && ("," == e ? "]" == (e = x()) && U() : U()), "," == e && U(), t.push(L(e));
                                        return t
                                    }
                                    if ("{" == e) {
                                        for (t = {};
                                            "}" != (e = x()); i || (i = !0)) i && ("," == e ? "}" == (e = x()) && U() : U()), "," != e && "string" == typeof e && "@" == (w ? e.charAt(0) : e[0]) && ":" == x() || U(), t[e.slice(1)] = L(x());
                                        return t
                                    }
                                    U()
                                }
                                return e
                            },
                            H = function(e, t, i) {
                                var n = F(e, t, i);
                                n === h ? delete e[t] : e[t] = n
                            },
                            F = function(e, t, i) {
                                var n, r = e[t];
                                if ("object" == typeof r && r)
                                    if (k.call(r) == A)
                                        for (n = r.length; n--;) H(r, n, i);
                                    else m(r, (function(e) {
                                        H(r, e, i)
                                    }));
                                return i.call(e, t, r)
                            };
                        t.parse = function(e, t) {
                            var i, n;
                            return P = 0, q = "" + e, i = L(x()), "$" != x() && U(), P = q = null, t && k.call(t) == b ? F(((n = {})[""] = i, n), "", t) : i
                        }
                    }
                }
                return t.runInContext = a, t
            }
            if (!o || o.global !== o && o.window !== o && o.self !== o || (r = o), n && !t) a(r, n);
            else {
                var s = r.JSON,
                    c = r.JSON3,
                    u = !1,
                    l = a(r, r.JSON3 = {
                        noConflict: function() {
                            return u || (u = !0, r.JSON = s, r.JSON3 = c, s = c = null), l
                        }
                    });
                r.JSON = {
                    parse: l.parse,
                    stringify: l.stringify
                }
            }
            t && define((function() {
                return l
            }))
        }).call(this), JSON_EGOIMMERCE = e
    }(), "object" != typeof _egoiaq && (_egoiaq = []), "object" != typeof window.Egoimmerce && (window.Egoimmerce = function() {
        "use strict";
        var expireDateTime, plugins = {},
            eventHandlers = {},
            documentAlias = document,
            navigatorAlias = navigator,
            screenAlias = screen,
            windowAlias = window,
            performanceAlias = windowAlias.performance || windowAlias.mozPerformance || windowAlias.msPerformance || windowAlias.webkitPerformance,
            encodeWrapper = windowAlias.encodeURIComponent,
            decodeWrapper = windowAlias.decodeURIComponent,
            urldecode = unescape,
            asyncTrackers = [],
            iterator, Egoimmerce, missedPluginTrackerCalls = [];

        function safeDecodeWrapper(e) {
            try {
                return decodeWrapper(e)
            } catch (t) {
                return unescape(e)
            }
        }

        function isDefined(e) {
            return "undefined" !== typeof e
        }

        function isFunction(e) {
            return "function" == typeof e
        }

        function isObject(e) {
            return "object" == typeof e
        }

        function isString(e) {
            return "string" == typeof e || e instanceof String
        }

        function isObjectEmpty(e) {
            if (!e) return !0;
            var t, i = !0;
            for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (i = !1);
            return i
        }

        function logConsoleError(e) {
            "undefined" !== typeof console && console && console.error && console.error(e)
        }

        function apply() {
            var e, t, i, n, r;
            for (e = 0; e < arguments.length; e += 1) {
                var o, a;
                if (r = null, arguments[e] && arguments[e].slice && (r = arguments[e].slice()), isString(i = (n = arguments[e]).shift()) && i.indexOf("::") > 0) a = (o = i.split("::"))[0], i = o[1], "object" == typeof Egoimmerce[a] && "function" == typeof Egoimmerce[a][i] ? Egoimmerce[a][i].apply(Egoimmerce[a], n) : r && missedPluginTrackerCalls.push(r);
                else
                    for (t = 0; t < asyncTrackers.length; t++)
                        if (isString(i)) {
                            a = asyncTrackers[t];
                            var s = i.indexOf(".") > 0;
                            if (s)
                                if (o = i.split("."), a && "object" == typeof a[o[0]]) a = a[o[0]], i = o[1];
                                else if (r) {
                                missedPluginTrackerCalls.push(r);
                                break
                            }
                            if (a[i]) a[i].apply(a, n);
                            else {
                                var c = "The method '" + i + '\' was not found in "_egoiaq" variable.  Please have a look at the Egoimmerce tracker documentation: http://developer.piwik.org/api-reference/tracking-javascript';
                                if (logConsoleError(c), !s) throw new TypeError(c)
                            }
                            if ("addTracker" === i) break;
                            if ("setTrackerUrl" === i || "setClientId" === i) break
                        } else i.apply(asyncTrackers[t], n)
            }
        }

        function addEventListener(e, t, i, n) {
            return e.addEventListener ? (e.addEventListener(t, i, n), !0) : e.attachEvent ? e.attachEvent("on" + t, i) : void(e["on" + t] = i)
        }

        function trackCallbackOnLoad(e) {
            "complete" === documentAlias.readyState ? e() : windowAlias.addEventListener ? windowAlias.addEventListener("load", e) : windowAlias.attachEvent && windowAlias.attachEvent("onload", e)
        }

        function trackCallbackOnReady(e) {
            var t = !1;
            (t = documentAlias.attachEvent ? "complete" === documentAlias.readyState : "loading" !== documentAlias.readyState) ? e(): (documentAlias.addEventListener ? addEventListener(documentAlias, "DOMContentLoaded", (function i() {
                documentAlias.removeEventListener("DOMContentLoaded", i, !1), t || (t = !0, e())
            })) : documentAlias.attachEvent && (documentAlias.attachEvent("onreadystatechange", (function i() {
                "complete" === documentAlias.readyState && (documentAlias.detachEvent("onreadystatechange", i), t || (t = !0, e()))
            })), documentAlias.documentElement.doScroll && windowAlias === windowAlias.top && function i() {
                if (!t) {
                    try {
                        documentAlias.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(i, 0)
                    }
                    t = !0, e()
                }
            }()), addEventListener(windowAlias, "load", (function() {
                t || (t = !0, e())
            }), !1))
        }

        function executePluginMethod(e, t, i) {
            if (!e) return "";
            var n, r, o = "";
            for (n in plugins) Object.prototype.hasOwnProperty.call(plugins, n) && (plugins[n] && "function" == typeof plugins[n][e]) && (r = (0, plugins[n][e])(t || {}, i)) && (o += r);
            return o
        }

        function beforeUnloadHandler() {
            var e;
            if (executePluginMethod("unload"), expireDateTime)
                do {
                    e = new Date
                } while (e.getTimeAlias() < expireDateTime)
        }

        function loadScript(e, t) {
            var i = documentAlias.createElement("script");
            i.type = "text/javascript", i.src = e, i.readyState ? i.onreadystatechange = function() {
                var e = this.readyState;
                "loaded" !== e && "complete" !== e || (i.onreadystatechange = null, t())
            } : i.onload = t, documentAlias.getElementsByTagName("head")[0].appendChild(i)
        }

        function getReferrer() {
            var e = "";
            try {
                e = windowAlias.top.document.referrer
            } catch (t) {
                if (windowAlias.parent) try {
                    e = windowAlias.parent.document.referrer
                } catch (t) {
                    e = ""
                }
            }
            return "" === e && (e = documentAlias.referrer), e
        }

        function getProtocolScheme(e) {
            var t = new RegExp("^([a-z]+):").exec(e);
            return t ? t[1] : null
        }

        function getHostName(e) {
            var t = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)").exec(e);
            return t ? t[1] : e
        }

        function stringStartsWith(e, t) {
            return 0 === (e = String(e)).lastIndexOf(t, 0)
        }

        function stringEndsWith(e, t) {
            return -1 !== (e = String(e)).indexOf(t, e.length - t.length)
        }

        function stringContains(e, t) {
            return -1 !== (e = String(e)).indexOf(t)
        }

        function removeCharactersFromEndOfString(e, t) {
            return (e = String(e)).substr(0, e.length - t)
        }

        function addUrlParameter(e, t, i) {
            i || (i = "");
            var n = (e = String(e)).indexOf("#"),
                r = e.length; - 1 === n && (n = r);
            var o = e.substr(0, n),
                a = e.substr(n, r - n);
            return -1 === o.indexOf("?") ? o += "?" : stringEndsWith(o, "?") || (o += "&"), o + encodeWrapper(t) + "=" + encodeWrapper(i) + a
        }

        function removeUrlParameter(e, t) {
            if (-1 === (e = String(e)).indexOf("?" + t + "=") && -1 === e.indexOf("&" + t + "=")) return e;
            var i = e.indexOf("?");
            if (-1 === i) return e;
            var n = e.substr(i + 1),
                r = e.substr(0, i);
            if (n) {
                var o = "",
                    a = n.indexOf("#"); - 1 !== a && (o = n.substr(a + 1), n = n.substr(0, a));
                for (var s = n.split("&"), c = s.length - 1; c >= 0; c--) s[c].split("=")[0] === t && s.splice(c, 1);
                var u = s.join("&");
                u && (r = r + "?" + u), o && (r += "#" + o)
            }
            return r
        }

        function getUrlParameter(e, t) {
            var i = new RegExp("[\\?&#]" + t + "=([^&#]*)").exec(e);
            return i ? decodeWrapper(i[1]) : ""
        }

        function trim(e) {
            return e && String(e) === e ? e.replace(/^\s+|\s+$/g, "") : e
        }

        function utf8_encode(e) {
            return unescape(encodeWrapper(e))
        }

        function sha1(e) {
            var t, i, n, r, o, a, s, c, u, l, f = function(e, t) {
                    return e << t | e >>> 32 - t
                },
                d = function(e) {
                    var t, i = "";
                    for (t = 7; t >= 0; t--) i += (e >>> 4 * t & 15).toString(16);
                    return i
                },
                g = [],
                m = 1732584193,
                h = 4023233417,
                p = 2562383102,
                k = 271733878,
                C = 3285377520,
                T = [];
            for (l = (e = utf8_encode(e)).length, i = 0; i < l - 3; i += 4) n = e.charCodeAt(i) << 24 | e.charCodeAt(i + 1) << 16 | e.charCodeAt(i + 2) << 8 | e.charCodeAt(i + 3), T.push(n);
            switch (3 & l) {
                case 0:
                    i = 2147483648;
                    break;
                case 1:
                    i = e.charCodeAt(l - 1) << 24 | 8388608;
                    break;
                case 2:
                    i = e.charCodeAt(l - 2) << 24 | e.charCodeAt(l - 1) << 16 | 32768;
                    break;
                case 3:
                    i = e.charCodeAt(l - 3) << 24 | e.charCodeAt(l - 2) << 16 | e.charCodeAt(l - 1) << 8 | 128
            }
            for (T.push(i); 14 != (15 & T.length);) T.push(0);
            for (T.push(l >>> 29), T.push(l << 3 & 4294967295), t = 0; t < T.length; t += 16) {
                for (i = 0; i < 16; i++) g[i] = T[t + i];
                for (i = 16; i <= 79; i++) g[i] = f(g[i - 3] ^ g[i - 8] ^ g[i - 14] ^ g[i - 16], 1);
                for (r = m, o = h, a = p, s = k, c = C, i = 0; i <= 19; i++) u = f(r, 5) + (o & a | ~o & s) + c + g[i] + 1518500249 & 4294967295, c = s, s = a, a = f(o, 30), o = r, r = u;
                for (i = 20; i <= 39; i++) u = f(r, 5) + (o ^ a ^ s) + c + g[i] + 1859775393 & 4294967295, c = s, s = a, a = f(o, 30), o = r, r = u;
                for (i = 40; i <= 59; i++) u = f(r, 5) + (o & a | o & s | a & s) + c + g[i] + 2400959708 & 4294967295, c = s, s = a, a = f(o, 30), o = r, r = u;
                for (i = 60; i <= 79; i++) u = f(r, 5) + (o ^ a ^ s) + c + g[i] + 3395469782 & 4294967295, c = s, s = a, a = f(o, 30), o = r, r = u;
                m = m + r & 4294967295, h = h + o & 4294967295, p = p + a & 4294967295, k = k + s & 4294967295, C = C + c & 4294967295
            }
            return (u = d(m) + d(h) + d(p) + d(k) + d(C)).toLowerCase()
        }

        function urlFixup(e, t, i) {
            return e || (e = ""), t || (t = ""), "translate.googleusercontent.com" === e ? ("" === i && (i = t), e = getHostName(t = getUrlParameter(t, "u"))) : "cc.bingj.com" !== e && "webcache.googleusercontent.com" !== e && "74.6." !== e.slice(0, 5) || (e = getHostName(t = documentAlias.links[0].href)), [e, t, i]
        }

        function domainFixup(e) {
            var t = e.length;
            return "." === e.charAt(--t) && (e = e.slice(0, t)), "*." === e.slice(0, 2) && (e = e.slice(1)), -1 !== e.indexOf("/") && (e = e.substr(0, e.indexOf("/"))), e
        }

        function titleFixup(e) {
            if (!isString(e = e && e.text ? e.text : e)) {
                var t = documentAlias.getElementsByTagName("title");
                t && isDefined(t[0]) && (e = t[0].text)
            }
            return e
        }

        function getChildrenFromNode(e) {
            return e && (!isDefined(e.children) && isDefined(e.childNodes) || isDefined(e.children)) ? e.children : []
        }

        function containsNodeElement(e, t) {
            return !(!e || !t) && (e.contains ? e.contains(t) : e === t || !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))
        }

        function indexOfArray(e, t) {
            if (e && e.indexOf) return e.indexOf(t);
            if (!isDefined(e) || null === e) return -1;
            if (!e.length) return -1;
            var i = e.length;
            if (0 === i) return -1;
            for (var n = 0; n < i;) {
                if (e[n] === t) return n;
                n++
            }
            return -1
        }

        function isVisible(e) {
            if (!e) return !1;

            function t(e, t) {
                return windowAlias.getComputedStyle ? documentAlias.defaultView.getComputedStyle(e, null)[t] : e.currentStyle ? e.currentStyle[t] : void 0
            }
            return function i(n, r, o, a, s, c, u) {
                var l = n.parentNode;
                return !! function(e) {
                    for (e = e.parentNode; e;) {
                        if (e === documentAlias) return !0;
                        e = e.parentNode
                    }
                    return !1
                }(n) && (9 === l.nodeType || "0" !== t(n, "opacity") && "none" !== t(n, "display") && "hidden" !== t(n, "visibility") && (isDefined(r) && isDefined(o) && isDefined(a) && isDefined(s) && isDefined(c) && isDefined(u) || (r = n.offsetTop, s = n.offsetLeft, a = r + n.offsetHeight, o = s + n.offsetWidth, c = n.offsetWidth, u = n.offsetHeight), (e !== n || 0 !== u && 0 !== c || "hidden" !== t(n, "overflow")) && (!l || ("hidden" !== t(l, "overflow") && "scroll" !== t(l, "overflow") || !(s + 1 > l.offsetWidth + l.scrollLeft || s + c - 1 < l.scrollLeft || r + 1 > l.offsetHeight + l.scrollTop || r + u - 1 < l.scrollTop)) && (n.offsetParent === l && (s += l.offsetLeft, r += l.offsetTop), i(l, r, o, a, s, c, u)))))
            }(e)
        }
        var query = {
                htmlCollectionToArray: function(e) {
                    var t, i = [];
                    if (!e || !e.length) return i;
                    for (t = 0; t < e.length; t++) i.push(e[t]);
                    return i
                },
                find: function(e) {
                    if (!document.querySelectorAll || !e) return [];
                    var t = document.querySelectorAll(e);
                    return this.htmlCollectionToArray(t)
                },
                findMultiple: function(e) {
                    if (!e || !e.length) return [];
                    var t, i, n = [];
                    for (t = 0; t < e.length; t++) i = this.find(e[t]), n = n.concat(i);
                    return n = this.makeNodesUnique(n)
                },
                findNodesByTagName: function(e, t) {
                    if (!e || !t || !e.getElementsByTagName) return [];
                    var i = e.getElementsByTagName(t);
                    return this.htmlCollectionToArray(i)
                },
                makeNodesUnique: function(e) {
                    var t = [].concat(e);
                    if (e.sort((function(e, i) {
                            if (e === i) return 0;
                            var n = indexOfArray(t, e),
                                r = indexOfArray(t, i);
                            return n === r ? 0 : n > r ? -1 : 1
                        })), e.length <= 1) return e;
                    var i, n = 0,
                        r = 0,
                        o = [];
                    for (i = e[n++]; i;) i === e[n] && (r = o.push(n)), i = e[n++] || null;
                    for (; r--;) e.splice(o[r], 1);
                    return e
                },
                getAttributeValueFromNode: function(e, t) {
                    if (this.hasNodeAttribute(e, t)) {
                        if (e && e.getAttribute) return e.getAttribute(t);
                        if (e && e.attributes)
                            if ("undefined" !== typeof e.attributes[t]) {
                                if (e.attributes[t].value) return e.attributes[t].value;
                                if (e.attributes[t].nodeValue) return e.attributes[t].nodeValue;
                                var i, n = e.attributes;
                                if (n) {
                                    for (i = 0; i < n.length; i++)
                                        if (n[i].nodeName === t) return n[i].nodeValue;
                                    return null
                                }
                            }
                    }
                },
                hasNodeAttributeWithValue: function(e, t) {
                    return !!this.getAttributeValueFromNode(e, t)
                },
                hasNodeAttribute: function(e, t) {
                    return e && e.hasAttribute ? e.hasAttribute(t) : !(!e || !e.attributes) && "undefined" !== typeof e.attributes[t]
                },
                hasNodeCssClass: function(e, t) {
                    if (e && t && e.className && -1 !== indexOfArray("string" == typeof e.className ? e.className.split(" ") : [], t)) return !0;
                    return !1
                },
                findNodesHavingAttribute: function(e, t, i) {
                    if (i || (i = []), !e || !t) return i;
                    var n, r, o = getChildrenFromNode(e);
                    if (!o || !o.length) return i;
                    for (n = 0; n < o.length; n++) r = o[n], this.hasNodeAttribute(r, t) && i.push(r), i = this.findNodesHavingAttribute(r, t, i);
                    return i
                },
                findFirstNodeHavingAttribute: function(e, t) {
                    if (e && t) {
                        if (this.hasNodeAttribute(e, t)) return e;
                        var i = this.findNodesHavingAttribute(e, t);
                        return i && i.length ? i[0] : void 0
                    }
                },
                findFirstNodeHavingAttributeWithValue: function(e, t) {
                    if (e && t) {
                        if (this.hasNodeAttributeWithValue(e, t)) return e;
                        var i, n = this.findNodesHavingAttribute(e, t);
                        if (n && n.length)
                            for (i = 0; i < n.length; i++)
                                if (this.getAttributeValueFromNode(n[i], t)) return n[i]
                    }
                },
                findNodesHavingCssClass: function(e, t, i) {
                    if (i || (i = []), !e || !t) return i;
                    if (e.getElementsByClassName) {
                        var n = e.getElementsByClassName(t);
                        return this.htmlCollectionToArray(n)
                    }
                    var r, o, a = getChildrenFromNode(e);
                    if (!a || !a.length) return [];
                    for (r = 0; r < a.length; r++) o = a[r], this.hasNodeCssClass(o, t) && i.push(o), i = this.findNodesHavingCssClass(o, t, i);
                    return i
                },
                findFirstNodeHavingClass: function(e, t) {
                    if (e && t) {
                        if (this.hasNodeCssClass(e, t)) return e;
                        var i = this.findNodesHavingCssClass(e, t);
                        return i && i.length ? i[0] : void 0
                    }
                },
                isLinkElement: function(e) {
                    if (!e) return !1;
                    return -1 !== indexOfArray(["a", "area"], String(e.nodeName).toLowerCase())
                },
                setAnyAttribute: function(e, t, i) {
                    e && t && (e.setAttribute ? e.setAttribute(t, i) : e[t] = i)
                }
            },
            content = {
                CONTENT_ATTR: "data-track-content",
                CONTENT_CLASS: "egoimmerceTrackContent",
                CONTENT_NAME_ATTR: "data-content-name",
                CONTENT_PIECE_ATTR: "data-content-piece",
                CONTENT_PIECE_CLASS: "egoimmerceContentPiece",
                CONTENT_TARGET_ATTR: "data-content-target",
                CONTENT_TARGET_CLASS: "egoimmerceContentTarget",
                CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
                CONTENT_IGNOREINTERACTION_CLASS: "egoimmerceContentIgnoreInteraction",
                location: void 0,
                findContentNodes: function() {
                    var e = "." + this.CONTENT_CLASS,
                        t = "[" + this.CONTENT_ATTR + "]";
                    return query.findMultiple([e, t])
                },
                findContentNodesWithinNode: function(e) {
                    if (!e) return [];
                    var t, i = query.findNodesHavingCssClass(e, this.CONTENT_CLASS),
                        n = query.findNodesHavingAttribute(e, this.CONTENT_ATTR);
                    if (n && n.length)
                        for (t = 0; t < n.length; t++) i.push(n[t]);
                    return (query.hasNodeAttribute(e, this.CONTENT_ATTR) || query.hasNodeCssClass(e, this.CONTENT_CLASS)) && i.push(e), i = query.makeNodesUnique(i)
                },
                findParentContentNode: function(e) {
                    if (e)
                        for (var t = e, i = 0; t && t !== documentAlias && t.parentNode;) {
                            if (query.hasNodeAttribute(t, this.CONTENT_ATTR)) return t;
                            if (query.hasNodeCssClass(t, this.CONTENT_CLASS)) return t;
                            if (t = t.parentNode, i > 1e3) break;
                            i++
                        }
                },
                findPieceNode: function(e) {
                    var t;
                    return (t = query.findFirstNodeHavingAttribute(e, this.CONTENT_PIECE_ATTR)) || (t = query.findFirstNodeHavingClass(e, this.CONTENT_PIECE_CLASS)), t || e
                },
                findTargetNodeNoDefault: function(e) {
                    if (e) {
                        var t = query.findFirstNodeHavingAttributeWithValue(e, this.CONTENT_TARGET_ATTR);
                        return t || ((t = query.findFirstNodeHavingAttribute(e, this.CONTENT_TARGET_ATTR)) ? t : (t = query.findFirstNodeHavingClass(e, this.CONTENT_TARGET_CLASS)) || void 0)
                    }
                },
                findTargetNode: function(e) {
                    var t = this.findTargetNodeNoDefault(e);
                    return t || e
                },
                findContentName: function(e) {
                    if (e) {
                        var t = query.findFirstNodeHavingAttributeWithValue(e, this.CONTENT_NAME_ATTR);
                        if (t) return query.getAttributeValueFromNode(t, this.CONTENT_NAME_ATTR);
                        var i = this.findContentPiece(e);
                        if (i) return this.removeDomainIfIsInLink(i);
                        if (query.hasNodeAttributeWithValue(e, "title")) return query.getAttributeValueFromNode(e, "title");
                        var n = this.findPieceNode(e);
                        if (query.hasNodeAttributeWithValue(n, "title")) return query.getAttributeValueFromNode(n, "title");
                        var r = this.findTargetNode(e);
                        return query.hasNodeAttributeWithValue(r, "title") ? query.getAttributeValueFromNode(r, "title") : void 0
                    }
                },
                findContentPiece: function(e) {
                    if (e) {
                        var t = query.findFirstNodeHavingAttributeWithValue(e, this.CONTENT_PIECE_ATTR);
                        if (t) return query.getAttributeValueFromNode(t, this.CONTENT_PIECE_ATTR);
                        var i = this.findPieceNode(e),
                            n = this.findMediaUrlInNode(i);
                        return n ? this.toAbsoluteUrl(n) : void 0
                    }
                },
                findContentTarget: function(e) {
                    if (e) {
                        var t, i = this.findTargetNode(e);
                        if (query.hasNodeAttributeWithValue(i, this.CONTENT_TARGET_ATTR)) return query.getAttributeValueFromNode(i, this.CONTENT_TARGET_ATTR);
                        if (query.hasNodeAttributeWithValue(i, "href")) return t = query.getAttributeValueFromNode(i, "href"), this.toAbsoluteUrl(t);
                        var n = this.findPieceNode(e);
                        return query.hasNodeAttributeWithValue(n, "href") ? (t = query.getAttributeValueFromNode(n, "href"), this.toAbsoluteUrl(t)) : void 0
                    }
                },
                isSameDomain: function(e) {
                    if (!e || !e.indexOf) return !1;
                    if (0 === e.indexOf(this.getLocation().origin)) return !0;
                    var t = e.indexOf(this.getLocation().host);
                    return 8 >= t && 0 <= t
                },
                removeDomainIfIsInLink: function(e) {
                    return e && e.search && -1 !== e.search(new RegExp("^https?://[^/]+")) && this.isSameDomain(e) && ((e = e.replace(new RegExp("^.*//[^/]+"), "")) || (e = "/")), e
                },
                findMediaUrlInNode: function(e) {
                    if (e) {
                        var t = e.nodeName.toLowerCase();
                        if (-1 !== indexOfArray(["img", "embed", "video", "audio"], t) && query.findFirstNodeHavingAttributeWithValue(e, "src")) {
                            var i = query.findFirstNodeHavingAttributeWithValue(e, "src");
                            return query.getAttributeValueFromNode(i, "src")
                        }
                        if ("object" === t && query.hasNodeAttributeWithValue(e, "data")) return query.getAttributeValueFromNode(e, "data");
                        if ("object" === t) {
                            var n, r = query.findNodesByTagName(e, "param");
                            if (r && r.length)
                                for (n = 0; n < r.length; n++)
                                    if ("movie" === query.getAttributeValueFromNode(r[n], "name") && query.hasNodeAttributeWithValue(r[n], "value")) return query.getAttributeValueFromNode(r[n], "value");
                            var o = query.findNodesByTagName(e, "embed");
                            if (o && o.length) return this.findMediaUrlInNode(o[0])
                        }
                    }
                },
                trim: function(e) {
                    return trim(e)
                },
                isOrWasNodeInViewport: function(e) {
                    if (!e || !e.getBoundingClientRect || 1 !== e.nodeType) return !0;
                    var t = e.getBoundingClientRect(),
                        i = documentAlias.documentElement || {},
                        n = t.top < 0;
                    n && e.offsetTop && (n = e.offsetTop + t.height > 0);
                    var r = i.clientWidth;
                    windowAlias.innerWidth && r > windowAlias.innerWidth && (r = windowAlias.innerWidth);
                    var o = i.clientHeight;
                    return windowAlias.innerHeight && o > windowAlias.innerHeight && (o = windowAlias.innerHeight), (t.bottom > 0 || n) && t.right > 0 && t.left < r && (t.top < o || n)
                },
                isNodeVisible: function(e) {
                    var t = isVisible(e),
                        i = this.isOrWasNodeInViewport(e);
                    return t && i
                },
                buildInteractionRequestParams: function(e, t, i, n) {
                    var r = "";
                    return e && (r += "c_i=" + encodeWrapper(e)), t && (r && (r += "&"), r += "c_n=" + encodeWrapper(t)), i && (r && (r += "&"), r += "c_p=" + encodeWrapper(i)), n && (r && (r += "&"), r += "c_t=" + encodeWrapper(n)), r
                },
                buildImpressionRequestParams: function(e, t, i) {
                    var n = "c_n=" + encodeWrapper(e) + "&c_p=" + encodeWrapper(t);
                    return i && (n += "&c_t=" + encodeWrapper(i)), n
                },
                buildContentBlock: function(e) {
                    if (e) {
                        var t = this.findContentName(e),
                            i = this.findContentPiece(e),
                            n = this.findContentTarget(e);
                        return {
                            name: (t = this.trim(t)) || "Unknown",
                            piece: (i = this.trim(i)) || "Unknown",
                            target: (n = this.trim(n)) || ""
                        }
                    }
                },
                collectContent: function(e) {
                    if (!e || !e.length) return [];
                    var t, i, n = [];
                    for (t = 0; t < e.length; t++) isDefined(i = this.buildContentBlock(e[t])) && n.push(i);
                    return n
                },
                setLocation: function(e) {
                    this.location = e
                },
                getLocation: function() {
                    var e = this.location || windowAlias.location;
                    return e.origin || (e.origin = e.protocol + "//" + e.hostname + (e.port ? ":" + e.port : "")), e
                },
                toAbsoluteUrl: function(e) {
                    if ((!e || String(e) !== e) && "" !== e) return e;
                    if ("" === e) return this.getLocation().href;
                    if (-1 !== e.search(/^\/\//)) return this.getLocation().protocol + e;
                    if (-1 !== e.search(/:\/\//)) return e;
                    if (0 === e.indexOf("#")) return this.getLocation().origin + this.getLocation().pathname + e;
                    if (0 === e.indexOf("?")) return this.getLocation().origin + this.getLocation().pathname + e;
                    if (0 === e.search("^[a-zA-Z]{2,11}:")) return e;
                    if (-1 !== e.search(/^\//)) return this.getLocation().origin + e;
                    return this.getLocation().origin + this.getLocation().pathname.match(new RegExp("(.*/)"))[0] + e
                },
                isUrlToCurrentDomain: function(e) {
                    var t = this.toAbsoluteUrl(e);
                    if (!t) return !1;
                    var i = this.getLocation().origin;
                    return i === t || 0 === String(t).indexOf(i) && ":" !== String(t).substr(i.length, 1)
                },
                setHrefAttribute: function(e, t) {
                    e && t && query.setAnyAttribute(e, "href", t)
                },
                shouldIgnoreInteraction: function(e) {
                    var t = query.hasNodeAttribute(e, this.CONTENT_IGNOREINTERACTION_ATTR),
                        i = query.hasNodeCssClass(e, this.CONTENT_IGNOREINTERACTION_CLASS);
                    return t || i
                }
            };

        function getEgoimmerceUrlForOverlay(e, t) {
            if (t) return t;
            if (stringContains(e = content.toAbsoluteUrl(e), "?")) {
                var i = e.indexOf("?");
                e = e.slice(0, i)
            }
            if (stringEndsWith(e, "piwik.php")) e = removeCharactersFromEndOfString(e, 9);
            else if (stringEndsWith(e, ".php")) {
                var n = e.lastIndexOf("/");
                e = e.slice(0, n + 1)
            }
            return stringEndsWith(e, "/js/") && (e = removeCharactersFromEndOfString(e, 3)), e
        }

        function isOverlaySession(e) {
            var t = "Egoimmerce_Overlay",
                i = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&clientid=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$").exec(documentAlias.referrer);
            if (i) {
                if (i[1] !== String(e)) return !1;
                var n = i[2],
                    r = i[3],
                    o = i[4];
                o ? 0 === o.indexOf("&segment=") && (o = o.substr(9)) : o = "", windowAlias.name = t + "###" + n + "###" + r + "###" + o
            }
            var a = windowAlias.name.split("###");
            return 4 === a.length && a[0] === t
        }

        function injectOverlayScripts(e, t, i) {
            var n = windowAlias.name.split("###"),
                r = n[1],
                o = n[2],
                a = n[3],
                s = getEgoimmerceUrlForOverlay(e, t);
            loadScript(s + "plugins/Overlay/client/client.js?v=1", (function() {
                Egoimmerce_Overlay_Client.initialize(s, i, r, o, a)
            }))
        }

        function isInsideAnIframe() {
            var e;
            try {
                e = windowAlias.frameElement
            } catch (e) {
                return !0
            }
            if (isDefined(e)) return !(!e || "iframe" !== String(e.nodeName).toLowerCase());
            try {
                return windowAlias.self !== windowAlias.top
            } catch (e) {
                return !0
            }
        }

        function Tracker(trackerUrl, clientId, subscriber, listId, campaignId) {
            var registeredHooks = {},
                trackerInstance = this,
                locationArray = urlFixup(documentAlias.domain, windowAlias.location.href, getReferrer()),
                domainAlias = domainFixup(locationArray[0]),
                locationHrefAlias = safeDecodeWrapper(locationArray[1]),
                configReferrerUrl = safeDecodeWrapper(locationArray[2]),
                enableJSErrorTracking = !1,
                defaultRequestMethod = "GET",
                configRequestMethod = defaultRequestMethod,
                defaultRequestContentType = "application/x-www-form-urlencoded; charset=UTF-8",
                configRequestContentType = defaultRequestContentType,
                configTrackerUrl = trackerUrl || "",
                configApiUrl = "",
                configAppendToTrackingUrl = "",
                configTrackerClientId = clientId || "",
                configTrackerSubscriber = subscriber || "",
                configTrackerListId = listId || "",
                configTrackerCampaignId = campaignId || "",
                configUserId = "",
                visitorUUID = "",
                configCustomUrl, configTitle = "",
                configDownloadExtensions = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                configHostsAlias = [domainAlias],
                configIgnoreClasses = [],
                configDownloadClasses = [],
                configLinkClasses = [],
                configTrackerPause = 500,
                configMinimumVisitTime, configHeartBeatDelay, heartBeatPingIfActivityAlias, configDiscardHashTag, configCustomData, configCampaignNameParameters = ["pk_campaign", "egoimmerce_campaign", "utm_campaign", "utm_source", "utm_medium"],
                configCampaignKeywordParameters = ["pk_kwd", "egoimmerce_kwd", "utm_term"],
                configCookieNamePrefix = "_pk_",
                configVisitorIdUrlParameter = "pk_vid",
                configVisitorIdUrlParameterTimeoutInSeconds = 180,
                configCookieDomain, configCookiePath, configCookiesDisabled = !1,
                configDoNotTrack, configCountPreRendered, configConversionAttributionFirstReferrer, configVisitorCookieTimeout = 339552e5,
                configSessionCookieTimeout = 18e5,
                configReferralCookieTimeout = 15768e6,
                configPerformanceTrackingEnabled = !0,
                configPerformanceGenerationTime = 0,
                configStoreCustomVariablesInCookie = !1,
                customVariables = !1,
                configCustomRequestContentProcessing, customProductView = null,
                customCategoryView = null,
                customVariablesPage = {},
                customVariablesEvent = {},
                customDimensions = {},
                customVariableMaximumLength = 200,
                ecommerceItems = {},
                browserFeatures = {},
                trackedContentImpressions = [],
                isTrackOnlyVisibleContentEnabled = !1,
                timeNextTrackingRequestCanBeExecutedImmediately = !1,
                linkTrackingInstalled = !1,
                linkTrackingEnabled = !1,
                crossDomainTrackingEnabled = !1,
                heartBeatSetUp = !1,
                hadWindowFocusAtLeastOnce = isInsideAnIframe(),
                lastTrackerRequestTime = null,
                heartBeatTimeout, lastButton, lastTarget, hash = sha1,
                domainHash, configIdPageView, numTrackedPageviews = 0,
                configCookiesToDelete = ["id", "ses", "cvar", "ref"],
                secureCookie = !1;
            try {
                configTitle = documentAlias.title
            } catch (e) {
                configTitle = ""
            }

            function setCookie(e, t, i, n, r) {
                var o;
                configCookiesDisabled || (i && (o = new Date).setTime(o.getTime() + i), documentAlias.cookie = e + "=" + encodeWrapper(t) + (i ? ";expires=" + o.toGMTString() : "") + ";path=" + (n || "/") + (r ? ";domain=" + r : "") + (secureCookie ? ";secure" : ""))
            }

            function unshort(e) {
                var t = "0123456789abcdfghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ",
                    i = e.length - 1;
                e = e.split("");
                var n = t.indexOf(e.pop());
                for (var r in e) {
                    var o = e[r];
                    n += t.indexOf(o) * Math.pow(60, i - r)
                }
                return n
            }

            function decodeUrl(e) {
                var t = e.match(/^http[s]?:\/\/.*?\/([a-zA-Z-_]+)\/([0-9a-zA-Z-_]+).*$/);
                if (t) {
                    var i = t[1],
                        n = t[2].split("e"),
                        r = "",
                        o = "",
                        a = "";
                    "g" == i && 7 == n.length && unshort(n[3]) == configTrackerClientId && (r = n[1].replace("-", "e"), o = unshort(n[5]), a = unshort(n[2]), r && setCookie(getCookieName("Subscriber"), r, configVisitorCookieTimeout), o && setCookie(getCookieName("CampaignId"), o, configReferralCookieTimeout), a && setCookie(getCookieName("ListId"), a, configVisitorCookieTimeout))
                }
            }

            function setSecureCookie(e) {
                secureCookie = !!e
            }

            function isSecureCookie() {
                return secureCookie
            }

            function getCookie(e) {
                if (configCookiesDisabled) return 0;
                var t = new RegExp("(^|;)[ ]*" + e + "=([^;]*)").exec(documentAlias.cookie);
                return t ? decodeWrapper(t[2]) : 0
            }

            function purify(e) {
                var t;
                return e = removeUrlParameter(e, configVisitorIdUrlParameter), configDiscardHashTag ? (t = new RegExp("#.*"), e.replace(t, "")) : e
            }

            function resolveRelativeReference(e, t) {
                var i;
                return getProtocolScheme(t) ? t : "/" === t.slice(0, 1) ? getProtocolScheme(e) + "://" + getHostName(e) + t : ((i = (e = purify(e)).indexOf("?")) >= 0 && (e = e.slice(0, i)), (i = e.lastIndexOf("/")) !== e.length - 1 && (e = e.slice(0, i + 1)), e + t)
            }

            function isSameHost(e, t) {
                var i;
                if ((e = String(e).toLowerCase()) === (t = String(t).toLowerCase())) return !0;
                if ("." === t.slice(0, 1)) {
                    if (e === t.slice(1)) return !0;
                    if ((i = e.length - t.length) > 0 && e.slice(i) === t) return !0
                }
                return !1
            }

            function getPathName(e) {
                var t = document.createElement("a");
                return 0 !== e.indexOf("//") && 0 !== e.indexOf("http") && (0 === e.indexOf("*") && (e = e.substr(1)), 0 === e.indexOf(".") && (e = e.substr(1)), e = "http://" + e), t.href = content.toAbsoluteUrl(e), t.pathname ? t.pathname : ""
            }

            function isSitePath(e, t) {
                stringStartsWith(t, "/") || (t = "/" + t), stringStartsWith(e, "/") || (e = "/" + e);
                var i = "/" === t || "/*" === t;
                return !!i || (e === t || (t = String(t).toLowerCase(), e = String(e).toLowerCase(), stringEndsWith(t, "*") ? !!(i = !(t = t.slice(0, -1)) || "/" === t) || (e === t || 0 === e.indexOf(t)) : (stringEndsWith(e, "/") || (e += "/"), stringEndsWith(t, "/") || (t += "/"), 0 === e.indexOf(t))))
            }

            function isSiteHostPath(e, t) {
                var i, n, r;
                for (i = 0; i < configHostsAlias.length; i++)
                    if (n = domainFixup(configHostsAlias[i]), r = getPathName(configHostsAlias[i]), isSameHost(e, n) && isSitePath(t, r)) return !0;
                return !1
            }

            function isSiteHostName(e) {
                var t, i, n;
                for (t = 0; t < configHostsAlias.length; t++) {
                    if (e === (i = domainFixup(configHostsAlias[t].toLowerCase()))) return !0;
                    if ("." === i.slice(0, 1)) {
                        if (e === i.slice(1)) return !0;
                        if ((n = e.length - i.length) > 0 && e.slice(n) === i) return !0
                    }
                }
                return !1
            }

            function getImage(e, t) {
                var i = new Image(1, 1);
                i.onload = function() {
                    iterator = 0, "function" == typeof t && t()
                }, e = e.replace("send_image=0", "send_image=1"), i.src = configTrackerUrl + (configTrackerUrl.indexOf("?") < 0 ? "?" : "&") + e
            }

            function sendXmlHttpRequest(e, t, i) {
                isDefined(i) && null !== i || (i = !0);
                try {
                    var n = windowAlias.XMLHttpRequest ? new windowAlias.XMLHttpRequest : windowAlias.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                    n.open("POST", configTrackerUrl, !0), n.onreadystatechange = function() {
                        4 !== this.readyState || this.status >= 200 && this.status < 300 || !i ? 4 === this.readyState && "function" == typeof t && t() : getImage(e, t)
                    }, n.setRequestHeader("Content-Type", configRequestContentType), n.send(e)
                } catch (n) {
                    i && getImage(e, t)
                }
            }

            function setExpireDateTime(e) {
                var t = (new Date).getTime() + e;
                (!expireDateTime || t > expireDateTime) && (expireDateTime = t)
            }

            function heartBeatUp(e) {
                !heartBeatTimeout && configHeartBeatDelay && (heartBeatTimeout = setTimeout((function() {
                    if (heartBeatTimeout = null, hadWindowFocusAtLeastOnce || (hadWindowFocusAtLeastOnce = !documentAlias.hasFocus || documentAlias.hasFocus()), hadWindowFocusAtLeastOnce) {
                        if (!heartBeatPingIfActivityAlias()) {
                            var e = new Date,
                                t = configHeartBeatDelay - (e.getTime() - lastTrackerRequestTime);
                            heartBeatUp(t = Math.min(configHeartBeatDelay, t))
                        }
                    } else heartBeatUp(configHeartBeatDelay)
                }), e || configHeartBeatDelay))
            }

            function heartBeatDown() {
                heartBeatTimeout && (clearTimeout(heartBeatTimeout), heartBeatTimeout = null)
            }

            function heartBeatOnFocus() {
                hadWindowFocusAtLeastOnce = !0, heartBeatPingIfActivityAlias() || heartBeatUp()
            }

            function heartBeatOnBlur() {
                heartBeatDown()
            }

            function setUpHeartBeat() {
                !heartBeatSetUp && configHeartBeatDelay && (heartBeatSetUp = !0, addEventListener(windowAlias, "focus", heartBeatOnFocus), addEventListener(windowAlias, "blur", heartBeatOnBlur), heartBeatUp())
            }

            function makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation(e) {
                var t = (new Date).getTime();
                if (lastTrackerRequestTime = t, timeNextTrackingRequestCanBeExecutedImmediately && t < timeNextTrackingRequestCanBeExecutedImmediately) {
                    var i = timeNextTrackingRequestCanBeExecutedImmediately - t;
                    return setTimeout(e, i), setExpireDateTime(i + 50), void(timeNextTrackingRequestCanBeExecutedImmediately += 50)
                }
                if (!1 === timeNextTrackingRequestCanBeExecutedImmediately) {
                    timeNextTrackingRequestCanBeExecutedImmediately = t + 800
                }
                e()
            }

            function sendRequest(e, t, i) {
                !configDoNotTrack && e && makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation((function() {
                    "POST" === configRequestMethod || String(e).length > 2e3 ? sendXmlHttpRequest(e, i) : getImage(e, i), setExpireDateTime(t)
                })), heartBeatSetUp ? heartBeatUp() : setUpHeartBeat()
            }

            function canSendBulkRequest(e) {
                return !configDoNotTrack && (e && e.length)
            }

            function sendBulkRequest(e, t) {
                if (canSendBulkRequest(e)) {
                    var i = '{"requests":["?' + e.join('","?') + '"]}';
                    makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation((function() {
                        sendXmlHttpRequest(i, null, !1), setExpireDateTime(t)
                    }))
                }
            }

            function getCookieName(e) {
                return configCookieNamePrefix + e + "." + configTrackerClientId + "." + domainHash
            }

            function hasCookies() {
                if (configCookiesDisabled) return "0";
                if (!isDefined(navigatorAlias.cookieEnabled)) {
                    var e = getCookieName("testcookie");
                    return setCookie(e, "1"), "1" === getCookie(e) ? "1" : "0"
                }
                return navigatorAlias.cookieEnabled ? "1" : "0"
            }

            function updateDomainHash() {
                domainHash = hash((configCookieDomain || domainAlias) + (configCookiePath || "/")).slice(0, 4)
            }

            function getCustomVariablesFromCookie() {
                var e = getCookie(getCookieName("cvar"));
                return e.length && isObject(e = JSON_EGOIMMERCE.parse(e)) ? e : {}
            }

            function loadCustomVariables() {
                !1 === customVariables && (customVariables = getCustomVariablesFromCookie())
            }

            function generateRandomUuid() {
                return hash((navigatorAlias.userAgent || "") + (navigatorAlias.platform || "") + JSON_EGOIMMERCE.stringify(browserFeatures) + (new Date).getTime() + Math.random()).slice(0, 16)
            }

            function generateBrowserSpecificId() {
                return hash((navigatorAlias.userAgent || "") + (navigatorAlias.platform || "") + JSON_EGOIMMERCE.stringify(browserFeatures)).slice(0, 6)
            }

            function getCurrentTimestampInSeconds() {
                return Math.floor((new Date).getTime() / 1e3)
            }

            function makeCrossDomainDeviceId() {
                var e = getCurrentTimestampInSeconds(),
                    t = generateBrowserSpecificId();
                return String(e) + t
            }

            function isSameCrossDomainDevice(e) {
                e = String(e);
                var t = generateBrowserSpecificId(),
                    i = t.length,
                    n = e.substr(-1 * i, i),
                    r = parseInt(e.substr(0, e.length - i), 10);
                if (r && n && n === t) {
                    var o = getCurrentTimestampInSeconds();
                    if (configVisitorIdUrlParameterTimeoutInSeconds <= 0) return !0;
                    if (o >= r && o <= r + configVisitorIdUrlParameterTimeoutInSeconds) return !0
                }
                return !1
            }

            function getVisitorIdFromUrl(e) {
                if (!crossDomainTrackingEnabled) return "";
                var t = getUrlParameter(e, configVisitorIdUrlParameter);
                if (!t) return "";
                t = String(t);
                var i = new RegExp("^[a-zA-Z0-9]+$");
                if (32 === t.length && i.test(t) && isSameCrossDomainDevice(t.substr(16, 32))) return t.substr(0, 16);
                return ""
            }

            function loadVisitorIdCookie() {
                visitorUUID || (visitorUUID = getVisitorIdFromUrl(locationHrefAlias));
                var e, t = new Date,
                    i = Math.round(t.getTime() / 1e3),
                    n = getCookie(getCookieName("id"));
                return n ? ((e = n.split(".")).unshift("0"), visitorUUID.length && (e[1] = visitorUUID), e) : e = ["1", visitorUUID.length ? visitorUUID : "0" === hasCookies() ? "" : generateRandomUuid(), i, 0, i, "", ""]
            }

            function getValuesFromVisitorIdCookie() {
                var e = loadVisitorIdCookie(),
                    t = e[0],
                    i = e[1],
                    n = e[2],
                    r = e[3],
                    o = e[4],
                    a = e[5];
                return isDefined(e[6]) || (e[6] = ""), {
                    newVisitor: t,
                    uuid: i,
                    createTs: n,
                    visitCount: r,
                    currentVisitTs: o,
                    lastVisitTs: a,
                    lastEcommerceOrderTs: e[6]
                }
            }

            function getRemainingVisitorCookieTimeout() {
                var e = (new Date).getTime(),
                    t = getValuesFromVisitorIdCookie().createTs;
                return 1e3 * parseInt(t, 10) + configVisitorCookieTimeout - e
            }

            function setVisitorIdCookie(e) {
                if (configTrackerClientId) {
                    var t = new Date,
                        i = Math.round(t.getTime() / 1e3);
                    isDefined(e) || (e = getValuesFromVisitorIdCookie());
                    var n = e.uuid + "." + e.createTs + "." + e.visitCount + "." + i + "." + e.lastVisitTs + "." + e.lastEcommerceOrderTs;
                    setCookie(getCookieName("id"), n, getRemainingVisitorCookieTimeout(), configCookiePath, configCookieDomain)
                }
            }

            function loadReferrerAttributionCookie() {
                var e = getCookie(getCookieName("ref"));
                if (e.length) try {
                    if (isObject(e = JSON_EGOIMMERCE.parse(e))) return e
                } catch (e) {}
                return ["", "", 0, ""]
            }

            function deleteCookie(e, t, i) {
                setCookie(e, "", -86400, t, i)
            }

            function isPossibleToSetCookieOnDomain(e) {
                var t = "testvalue";
                return setCookie("test", t, 1e4, null, e), getCookie("test") === t && (deleteCookie("test", null, e), !0)
            }

            function deleteCookies() {
                var e, t, i = configCookiesDisabled;
                for (configCookiesDisabled = !1, e = 0; e < configCookiesToDelete.length; e++) 0 !== getCookie(t = getCookieName(configCookiesToDelete[e])) && deleteCookie(t, configCookiePath, configCookieDomain);
                configCookiesDisabled = i
            }

            function setClientId(e) {
                configTrackerClientId = e, decodeUrl(configReferrerUrl), setVisitorIdCookie()
            }

            function sortObjectByKeys(e) {
                if (e && isObject(e)) {
                    var t, i = [];
                    for (t in e) Object.prototype.hasOwnProperty.call(e, t) && i.push(t);
                    var n = {};
                    i.sort();
                    var r, o = i.length;
                    for (r = 0; r < o; r++) n[i[r]] = e[i[r]];
                    return n
                }
            }

            function setSessionCookie() {
                setCookie(getCookieName("ses"), "*", configSessionCookieTimeout, configCookiePath, configCookieDomain)
            }

            function generateUniqueId() {
                var e, t = "",
                    i = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (e = 0; e < 6; e++) t += i.charAt(Math.floor(62 * Math.random()));
                return t
            }

            function getRequest(e, t, i, n) {
                var r, o, a, s, c, u, l, f = new Date,
                    d = Math.round(f.getTime() / 1e3),
                    g = customVariables,
                    m = getCookieName("ses"),
                    h = getCookieName("ref"),
                    p = getCookieName("cvar"),
                    k = getCookie(m),
                    C = loadReferrerAttributionCookie(),
                    T = configCustomUrl || locationHrefAlias;
                if (configCookiesDisabled && deleteCookies(), configDoNotTrack) return "";
                var b = getValuesFromVisitorIdCookie();
                isDefined(n) || (n = "");
                var v = documentAlias.characterSet || documentAlias.charset;
                if (v && "utf-8" !== v.toLowerCase() || (v = null), u = C[0], l = C[1], o = C[2], a = C[3], !k) {
                    var y = configSessionCookieTimeout / 1e3;
                    if ((!b.lastVisitTs || d - b.lastVisitTs > y) && (b.visitCount++, b.lastVisitTs = b.currentVisitTs), !configConversionAttributionFirstReferrer || !u.length) {
                        for (r in configCampaignNameParameters)
                            if (Object.prototype.hasOwnProperty.call(configCampaignNameParameters, r) && (u = getUrlParameter(T, configCampaignNameParameters[r])).length) break;
                        for (r in configCampaignKeywordParameters)
                            if (Object.prototype.hasOwnProperty.call(configCampaignKeywordParameters, r) && (l = getUrlParameter(T, configCampaignKeywordParameters[r])).length) break
                    }
                    s = getHostName(configReferrerUrl), c = a.length ? getHostName(a) : "", !s.length || isSiteHostName(s) || configConversionAttributionFirstReferrer && c.length && !isSiteHostName(c) || (a = configReferrerUrl), (a.length || u.length) && (C = [u, l, o = d, purify(a.slice(0, 1024))], setCookie(h, JSON_EGOIMMERCE.stringify(C), configReferralCookieTimeout, configCookiePath, configCookieDomain))
                }
                var A = getUrlParameter(configCustomUrl || locationHrefAlias, "eg_sub");
                if (A && !getCookie(getCookieName("Subscriber"))) configTrackerSubscriber = A, setCookie(getCookieName("Subscriber"), configTrackerSubscriber, configVisitorCookieTimeout);
                else if (getCookie(getCookieName("Subscriber"))) configTrackerSubscriber = getCookie(getCookieName("Subscriber"));
                else if (getCookie("_ewp_egoiWebPushAllow_[A-Za-z(0-9)*]+")) {
                    var w = getCookie("_ewp_egoiWebPushAllow_[A-Za-z(0-9)*]+").match("egoiWebPushAllow_[A-Za-z(0-9)*]+_([A-Za-z(0-9)*]+)(_[0-9]*)?");
                    w.length > 1 && (configTrackerSubscriber = w[1], setCookie(getCookieName("Subscriber"), configTrackerSubscriber, configVisitorCookieTimeout))
                }
                var I = getUrlParameter(configCustomUrl || locationHrefAlias, "eg_list");
                I ? (configTrackerListId = I, setCookie(getCookieName("ListId"), configTrackerListId, configVisitorCookieTimeout)) : getCookie(getCookieName("ListId")) && (configTrackerListId = getCookie(getCookieName("ListId")));
                var N = getUrlParameter(configCustomUrl || locationHrefAlias, "eg_cam");
                for (r in N ? (configTrackerCampaignId = N, setCookie(getCookieName("CampaignId"), configTrackerCampaignId, configReferralCookieTimeout)) : getCookie(getCookieName("CampaignId")) && (configTrackerCampaignId = getCookie(getCookieName("CampaignId"))), e += "&clientid=" + configTrackerClientId + "&listid=" + configTrackerListId + "&subscriber=" + encodeWrapper(configTrackerSubscriber) + "&campaign=" + configTrackerCampaignId + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + f.getHours() + "&m=" + f.getMinutes() + "&s=" + f.getSeconds() + "&url=" + encodeWrapper(purify(T)) + (configReferrerUrl.length ? "&urlref=" + encodeWrapper(purify(configReferrerUrl)) : "") + (configUserId && configUserId.length ? "&uid=" + encodeWrapper(configUserId) : "") + "&_id=" + b.uuid + "&_idts=" + b.createTs + "&_idvc=" + b.visitCount + "&_idn=" + b.newVisitor + (u.length ? "&_rcn=" + encodeWrapper(u) : "") + (l.length ? "&_rck=" + encodeWrapper(l) : "") + "&_refts=" + o + "&_viewts=" + b.lastVisitTs + (String(b.lastEcommerceOrderTs).length ? "&_ects=" + b.lastEcommerceOrderTs : "") + (String(a).length ? "&_ref=" + encodeWrapper(purify(a.slice(0, 1024))) : "") + (v ? "&cs=" + encodeWrapper(v) : "") + "&send_image=0", browserFeatures) Object.prototype.hasOwnProperty.call(browserFeatures, r) && (e += "&" + r + "=" + browserFeatures[r]);
                var E = [];
                if (t)
                    for (r in t)
                        if (Object.prototype.hasOwnProperty.call(t, r) && /^dimension\d+$/.test(r)) {
                            var O = r.replace("dimension", "");
                            E.push(parseInt(O, 10)), E.push(String(O)), e += "&" + r + "=" + t[r], delete t[r]
                        }
                for (r in t && isObjectEmpty(t) && (t = null), customDimensions) {
                    if (Object.prototype.hasOwnProperty.call(customDimensions, r)) - 1 === indexOfArray(E, r) && (e += "&dimension" + r + "=" + customDimensions[r])
                }

                function S(e, t) {
                    var i = JSON_EGOIMMERCE.stringify(e);
                    return i.length > 2 ? "&" + t + "=" + encodeWrapper(i) : ""
                }
                t ? e += "&data=" + encodeWrapper(JSON_EGOIMMERCE.stringify(t)) : configCustomData && (e += "&data=" + encodeWrapper(JSON_EGOIMMERCE.stringify(configCustomData)));
                var R = sortObjectByKeys(customVariablesPage),
                    D = sortObjectByKeys(customVariablesEvent);
                if (e += S(R, "cvar"), e += S(D, "e_cvar"), customVariables) {
                    for (r in e += S(customVariables, "_cvar"), g) Object.prototype.hasOwnProperty.call(g, r) && ("" !== customVariables[r][0] && "" !== customVariables[r][1] || delete customVariables[r]);
                    configStoreCustomVariablesInCookie && setCookie(p, JSON_EGOIMMERCE.stringify(customVariables), configSessionCookieTimeout, configCookiePath, configCookieDomain)
                }
                return customProductView && (e += "&_pks=" + customProductView), customCategoryView && !customProductView && (e += "&_pkc=" + customCategoryView), configPerformanceTrackingEnabled && (configPerformanceGenerationTime ? e += "&gt_ms=" + configPerformanceGenerationTime : performanceAlias && performanceAlias.timing && performanceAlias.timing.requestStart && performanceAlias.timing.responseEnd && (e += "&gt_ms=" + (performanceAlias.timing.responseEnd - performanceAlias.timing.requestStart))), configIdPageView && (e += "&pv_id=" + configIdPageView), b.lastEcommerceOrderTs = isDefined(n) && String(n).length ? n : b.lastEcommerceOrderTs, setVisitorIdCookie(b), setSessionCookie(), e += executePluginMethod(i, {
                    tracker: trackerInstance,
                    request: e
                }), configAppendToTrackingUrl.length && (e += "&" + configAppendToTrackingUrl), isFunction(configCustomRequestContentProcessing) && (e = configCustomRequestContentProcessing(e)), e
            }

            function logEcommerce(e, t, i, n, r, o) {
                var a, s, c = "idgoal=0",
                    u = new Date,
                    l = [],
                    f = String(e).length;
                if (f && (c += "&ec_id=" + encodeWrapper(e), a = Math.round(u.getTime() / 1e3)), c += "&revenue=" + t, String(i).length && (c += "&ec_st=" + i), String(n).length && (c += "&ec_tx=" + n), String(r).length && (c += "&ec_sh=" + r), String(o).length && (c += "&ec_dt=" + o), ecommerceItems) {
                    for (s in ecommerceItems) Object.prototype.hasOwnProperty.call(ecommerceItems, s) && (isDefined(ecommerceItems[s][1]) || (ecommerceItems[s][1] = ""), isDefined(ecommerceItems[s][2]) || (ecommerceItems[s][2] = ""), isDefined(ecommerceItems[s][3]) && 0 !== String(ecommerceItems[s][3]).length || (ecommerceItems[s][3] = 0), isDefined(ecommerceItems[s][4]) && 0 !== String(ecommerceItems[s][4]).length || (ecommerceItems[s][4] = 1), l.push(ecommerceItems[s]));
                    c += "&ec_items=" + encodeWrapper(JSON_EGOIMMERCE.stringify(l))
                }
                sendRequest(c = getRequest(c, configCustomData, "ecommerce", a), configTrackerPause), f && (ecommerceItems = {})
            }

            function logEcommerceOrder(e, t, i, n, r, o) {
                String(e).length && isDefined(t) && logEcommerce(e, t, i, n, r, o)
            }

            function logEcommerceCartUpdate(e) {
                isDefined(e) && logEcommerce("", e, "", "", "", "")
            }

            function logPageView(e, t, i) {
                configIdPageView = generateUniqueId(), sendRequest(getRequest("action_name=" + encodeWrapper(titleFixup(e || configTitle)), t, "log"), configTrackerPause, i)
            }

            function getClassesRegExp(e, t) {
                var i, n = "(^| )(egoimmerce[_-]" + t;
                if (e)
                    for (i = 0; i < e.length; i++) n += "|" + e[i];
                return n += ")( |$)", new RegExp(n)
            }

            function startsUrlWithTrackerUrl(e) {
                return configTrackerUrl && e && 0 === String(e).indexOf(configTrackerUrl)
            }

            function getLinkType(e, t, i, n) {
                if (startsUrlWithTrackerUrl(t)) return 0;
                var r = getClassesRegExp(configDownloadClasses, "download"),
                    o = getClassesRegExp(configLinkClasses, "link"),
                    a = new RegExp("\\.(" + configDownloadExtensions.join("|") + ")([?&#]|$)", "i");
                return o.test(e) ? "link" : n || r.test(e) || a.test(t) ? "download" : i ? 0 : "link"
            }

            function getSourceElement(e) {
                var t;
                for (t = e.parentNode; null !== t && isDefined(t) && !query.isLinkElement(e);) t = (e = t).parentNode;
                return e
            }

            function getLinkIfShouldBeProcessed(e) {
                if ((e = getSourceElement(e), query.hasNodeAttribute(e, "href")) && (isDefined(e.href) && !startsUrlWithTrackerUrl(query.getAttributeValueFromNode(e, "href")))) {
                    var t = e.pathname || getPathName(e.href),
                        i = e.hostname || getHostName(e.href),
                        n = i.toLowerCase(),
                        r = e.href.replace(i, n);
                    if (!new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i").test(r)) {
                        var o = getLinkType(e.className, r, isSiteHostPath(n, t), query.hasNodeAttribute(e, "download"));
                        if (o) return {
                            type: o,
                            href: r
                        }
                    }
                }
            }

            function buildContentInteractionRequest(e, t, i, n) {
                var r = content.buildInteractionRequestParams(e, t, i, n);
                if (r) return getRequest(r, null, "contentInteraction")
            }

            function buildContentInteractionTrackingRedirectUrl(e, t, i, n, r) {
                if (isDefined(e)) {
                    if (startsUrlWithTrackerUrl(e)) return e;
                    var o = content.toAbsoluteUrl(e),
                        a = "redirecturl=" + encodeWrapper(o) + "&";
                    a += buildContentInteractionRequest(t, i, n, r || e);
                    var s = "&";
                    return configTrackerUrl.indexOf("?") < 0 && (s = "?"), configTrackerUrl + s + a
                }
            }

            function isNodeAuthorizedToTriggerInteraction(e, t) {
                if (!e || !t) return !1;
                var i = content.findTargetNode(e);
                return !content.shouldIgnoreInteraction(i) && !((i = content.findTargetNodeNoDefault(e)) && !containsNodeElement(i, t))
            }

            function getContentInteractionToRequestIfPossible(e, t, i) {
                if (e) {
                    var n = content.findParentContentNode(e);
                    if (n && isNodeAuthorizedToTriggerInteraction(n, e)) {
                        var r = content.buildContentBlock(n);
                        if (r) return !r.target && i && (r.target = i), content.buildInteractionRequestParams(t, r.name, r.piece, r.target)
                    }
                }
            }

            function wasContentImpressionAlreadyTracked(e) {
                if (!trackedContentImpressions || !trackedContentImpressions.length) return !1;
                var t, i;
                for (t = 0; t < trackedContentImpressions.length; t++)
                    if ((i = trackedContentImpressions[t]) && i.name === e.name && i.piece === e.piece && i.target === e.target) return !0;
                return !1
            }

            function replaceHrefIfInternalLink(e) {
                if (!e) return !1;
                var t = content.findTargetNode(e);
                if (!t || content.shouldIgnoreInteraction(t)) return !1;
                var i = getLinkIfShouldBeProcessed(t);
                if (linkTrackingEnabled && i && i.type) return !1;
                if (query.isLinkElement(t) && query.hasNodeAttributeWithValue(t, "href")) {
                    var n = String(query.getAttributeValueFromNode(t, "href"));
                    if (0 === n.indexOf("#")) return !1;
                    if (startsUrlWithTrackerUrl(n)) return !0;
                    if (!content.isUrlToCurrentDomain(n)) return !1;
                    var r = content.buildContentBlock(e);
                    if (!r) return;
                    var o = r.name,
                        a = r.piece,
                        s = r.target;
                    query.hasNodeAttributeWithValue(t, content.CONTENT_TARGET_ATTR) && !t.wasContentTargetAttrReplaced || (t.wasContentTargetAttrReplaced = !0, s = content.toAbsoluteUrl(n), query.setAnyAttribute(t, content.CONTENT_TARGET_ATTR, s));
                    var c = buildContentInteractionTrackingRedirectUrl(n, "click", o, a, s);
                    return content.setHrefAttribute(t, c), !0
                }
                return !1
            }

            function replaceHrefsIfInternalLink(e) {
                var t;
                if (e && e.length)
                    for (t = 0; t < e.length; t++) replaceHrefIfInternalLink(e[t])
            }

            function trackContentImpressionClickInteraction(e) {
                return function(t) {
                    if (e) {
                        var i, n = content.findParentContentNode(e);
                        if (t && (i = t.target || t.srcElement), i || (i = e), isNodeAuthorizedToTriggerInteraction(n, i)) {
                            if (setExpireDateTime(configTrackerPause), query.isLinkElement(e) && query.hasNodeAttributeWithValue(e, "href") && query.hasNodeAttributeWithValue(e, content.CONTENT_TARGET_ATTR)) !startsUrlWithTrackerUrl(query.getAttributeValueFromNode(e, "href")) && e.wasContentTargetAttrReplaced && query.setAnyAttribute(e, content.CONTENT_TARGET_ATTR, "");
                            var r = getLinkIfShouldBeProcessed(e);
                            if (linkTrackingInstalled && r && r.type) return r.type;
                            if (replaceHrefIfInternalLink(n)) return "href";
                            var o = content.buildContentBlock(n);
                            if (o) {
                                var a = buildContentInteractionRequest("click", o.name, o.piece, o.target);
                                return sendRequest(a, configTrackerPause), a
                            }
                        }
                    }
                }
            }

            function setupInteractionsTracking(e) {
                var t, i;
                if (e && e.length)
                    for (t = 0; t < e.length; t++)(i = content.findTargetNode(e[t])) && !i.contentInteractionTrackingSetupDone && (i.contentInteractionTrackingSetupDone = !0, addEventListener(i, "click", trackContentImpressionClickInteraction(i)))
            }

            function buildContentImpressionsRequests(e, t) {
                if (!e || !e.length) return [];
                var i, n;
                for (i = 0; i < e.length; i++) wasContentImpressionAlreadyTracked(e[i]) ? (e.splice(i, 1), i--) : trackedContentImpressions.push(e[i]);
                if (!e || !e.length) return [];
                replaceHrefsIfInternalLink(t), setupInteractionsTracking(t);
                var r = [];
                for (i = 0; i < e.length; i++)(n = getRequest(content.buildImpressionRequestParams(e[i].name, e[i].piece, e[i].target), void 0, "contentImpressions")) && r.push(n);
                return r
            }

            function getContentImpressionsRequestsFromNodes(e) {
                return buildContentImpressionsRequests(content.collectContent(e), e)
            }

            function getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet(e) {
                if (!e || !e.length) return [];
                var t;
                for (t = 0; t < e.length; t++) content.isNodeVisible(e[t]) || (e.splice(t, 1), t--);
                return e && e.length ? getContentImpressionsRequestsFromNodes(e) : []
            }

            function buildContentImpressionRequest(e, t, i) {
                return getRequest(content.buildImpressionRequestParams(e, t, i), null, "contentImpression")
            }

            function buildContentInteractionRequestNode(e, t) {
                if (e) {
                    var i = content.findParentContentNode(e),
                        n = content.buildContentBlock(i);
                    if (n) return t || (t = "Unknown"), buildContentInteractionRequest(t, n.name, n.piece, n.target)
                }
            }

            function buildEventRequest(e, t, i, n) {
                return "e_c=" + encodeWrapper(e) + "&e_a=" + encodeWrapper(t) + (isDefined(i) ? "&e_n=" + encodeWrapper(i) : "") + (isDefined(n) ? "&e_v=" + encodeWrapper(n) : "")
            }

            function logEvent(e, t, i, n, r, o) {
                if (0 === trim(String(e)).length || 0 === trim(String(t)).length) return logConsoleError("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces"), !1;
                sendRequest(getRequest(buildEventRequest(e, t, i, n), r, "event"), configTrackerPause, o)
            }

            function logSiteSearch(e, t, i, n) {
                sendRequest(getRequest("search=" + encodeWrapper(e) + (t ? "&search_cat=" + encodeWrapper(t) : "") + (isDefined(i) ? "&search_count=" + i : ""), n, "sitesearch"), configTrackerPause)
            }

            function logGoal(e, t, i) {
                sendRequest(getRequest("idgoal=" + e + (t ? "&revenue=" + t : ""), i, "goal"), configTrackerPause)
            }

            function logLink(e, t, i, n, r) {
                var o = t + "=" + encodeWrapper(purify(e)),
                    a = getContentInteractionToRequestIfPossible(r, "click", e);
                a && (o += "&" + a), sendRequest(getRequest(o, i, "link"), configTrackerPause, n)
            }

            function prefixPropertyName(e, t) {
                return "" !== e ? e + t.charAt(0).toUpperCase() + t.slice(1) : t
            }

            function trackCallback(e) {
                var t, i, n, r = ["", "webkit", "ms", "moz"];
                if (!configCountPreRendered)
                    for (i = 0; i < r.length; i++)
                        if (n = r[i], Object.prototype.hasOwnProperty.call(documentAlias, prefixPropertyName(n, "hidden"))) {
                            "prerender" === documentAlias[prefixPropertyName(n, "visibilityState")] && (t = !0);
                            break
                        }
                t ? addEventListener(documentAlias, n + "visibilitychange", (function t() {
                    documentAlias.removeEventListener(n + "visibilitychange", t, !1), e()
                })) : e()
            }

            function replaceHrefForCrossDomainLink(e) {
                if (e && query.hasNodeAttribute(e, "href")) {
                    var t = query.getAttributeValueFromNode(e, "href");
                    if (t && !startsUrlWithTrackerUrl(t)) {
                        (t = removeUrlParameter(t, configVisitorIdUrlParameter)).indexOf("?") > 0 ? t += "&" : t += "?";
                        var i = getValuesFromVisitorIdCookie().uuid,
                            n = makeCrossDomainDeviceId();
                        t = addUrlParameter(t, configVisitorIdUrlParameter, i + n), query.setAnyAttribute(e, "href", t)
                    }
                }
            }

            function isLinkToDifferentDomainButSameEgoimmerceWebsite(e) {
                var t = query.getAttributeValueFromNode(e, "href");
                if (!t) return !1;
                if (!(0 === (t = String(t)).indexOf("//") || 0 === t.indexOf("http://") || 0 === t.indexOf("https://"))) return !1;
                var i = e.pathname || getPathName(e.href),
                    n = (e.hostname || getHostName(e.href)).toLowerCase();
                return !!isSiteHostPath(n, i) && !isSameHost(domainAlias, domainFixup(n))
            }

            function processClick(e) {
                var t = getLinkIfShouldBeProcessed(e);
                if (t && t.type) return t.href = safeDecodeWrapper(t.href), void logLink(t.href, t.type, void 0, null, e);
                crossDomainTrackingEnabled && isLinkToDifferentDomainButSameEgoimmerceWebsite(e = getSourceElement(e)) && replaceHrefForCrossDomainLink(e)
            }

            function isIE8orOlder() {
                return documentAlias.all && !documentAlias.addEventListener
            }

            function getKeyCodeFromEvent(e) {
                var t = e.which,
                    i = typeof e.button;
                return t || "undefined" === i || (isIE8orOlder() ? 1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2) : 0 === e.button || "0" === e.button ? t = 1 : 1 & e.button ? t = 2 : 2 & e.button && (t = 3)), t
            }

            function getNameOfClickedButton(e) {
                switch (getKeyCodeFromEvent(e)) {
                    case 1:
                        return "left";
                    case 2:
                        return "middle";
                    case 3:
                        return "right"
                }
            }

            function getTargetElementFromEvent(e) {
                return e.target || e.srcElement
            }

            function clickHandler(e) {
                return function(t) {
                    var i = getNameOfClickedButton(t = t || windowAlias.event),
                        n = getTargetElementFromEvent(t);
                    if ("click" === t.type) {
                        var r = !1;
                        e && "middle" === i && (r = !0), n && !r && processClick(n)
                    } else "mousedown" === t.type ? "middle" === i && n ? (lastButton = i, lastTarget = n) : lastButton = lastTarget = null : "mouseup" === t.type ? (i === lastButton && n === lastTarget && processClick(n), lastButton = lastTarget = null) : "contextmenu" === t.type && processClick(n)
                }
            }

            function addClickListener(e, t) {
                "undefined" === typeof t && (t = !0), addEventListener(e, "click", clickHandler(t), !1), t && (addEventListener(e, "mouseup", clickHandler(t), !1), addEventListener(e, "mousedown", clickHandler(t), !1), addEventListener(e, "contextmenu", clickHandler(t), !1))
            }

            function addClickListeners(e, t) {
                linkTrackingInstalled = !0;
                var i, n = getClassesRegExp(configIgnoreClasses, "ignore"),
                    r = documentAlias.links,
                    o = null;
                if (r)
                    for (i = 0; i < r.length; i++) o = r[i], n.test(o.className) || ("undefined" === typeof o.egoimmerceTrackers && (o.egoimmerceTrackers = []), -1 === indexOfArray(o.egoimmerceTrackers, t) && (o.egoimmerceTrackers.push(t), addClickListener(o, e)))
            }

            function enableTrackOnlyVisibleContent(e, t, i) {
                if (isTrackOnlyVisibleContentEnabled) return !0;
                isTrackOnlyVisibleContentEnabled = !0;
                var n, r, o = !1;

                function a() {
                    o = !0
                }
                trackCallbackOnLoad((function() {
                    if (e) {
                        for (n = ["scroll", "resize"], r = 0; r < n.length; r++) documentAlias.addEventListener ? documentAlias.addEventListener(n[r], a) : windowAlias.attachEvent("on" + n[r], a);
                        ! function e(t) {
                            setTimeout((function() {
                                isTrackOnlyVisibleContentEnabled && (o && (o = !1, i.trackVisibleContentImpressions()), e(t))
                            }), t)
                        }(100)
                    }
                    t && t > 0 && function e(t) {
                        setTimeout((function() {
                            isTrackOnlyVisibleContentEnabled && (o = !1, i.trackVisibleContentImpressions(), e(t))
                        }), t)
                    }(t = parseInt(t, 10))
                }))
            }

            function detectBrowserFeatures() {
                var e, t, i = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    dir: "application/x-director",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    gears: "application/x-googlegears",
                    ag: "application/x-silverlight"
                };
                if (!new RegExp("MSIE").test(navigatorAlias.userAgent)) {
                    if (navigatorAlias.mimeTypes && navigatorAlias.mimeTypes.length)
                        for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (t = navigatorAlias.mimeTypes[i[e]], browserFeatures[e] = t && t.enabledPlugin ? "1" : "0");
                    "unknown" != typeof navigator.javaEnabled && isDefined(navigatorAlias.javaEnabled) && navigatorAlias.javaEnabled() && (browserFeatures.java = "1"), isFunction(windowAlias.GearsFactory) && (browserFeatures.gears = "1"), browserFeatures.cookie = hasCookies()
                }
                var n = parseInt(screenAlias.width, 10),
                    r = parseInt(screenAlias.height, 10);
                browserFeatures.res = parseInt(n, 10) + "x" + parseInt(r, 10)
            }

            function registerHook(hookName, userHook) {
                var hookObj = null;
                if (isString(hookName) && !isDefined(registeredHooks[hookName]) && userHook) {
                    if (isObject(userHook)) hookObj = userHook;
                    else if (isString(userHook)) try {
                        eval("hookObj =" + userHook)
                    } catch (e) {}
                    registeredHooks[hookName] = hookObj
                }
                return hookObj
            }
            heartBeatPingIfActivityAlias = function() {
                var e = new Date;
                return lastTrackerRequestTime + configHeartBeatDelay <= e.getTime() && (sendRequest(getRequest("ping=1", null, "ping"), configTrackerPause), !0)
            }, detectBrowserFeatures(), updateDomainHash(), setVisitorIdCookie(), executePluginMethod("run", null, registerHook), this.hook = registeredHooks, this.getHook = function(e) {
                return registeredHooks[e]
            }, this.getQuery = function() {
                return query
            }, this.getContent = function() {
                return content
            }, this.buildContentImpressionRequest = buildContentImpressionRequest, this.buildContentInteractionRequest = buildContentInteractionRequest, this.buildContentInteractionRequestNode = buildContentInteractionRequestNode, this.buildContentInteractionTrackingRedirectUrl = buildContentInteractionTrackingRedirectUrl, this.getContentImpressionsRequestsFromNodes = getContentImpressionsRequestsFromNodes, this.getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet = getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet, this.trackCallbackOnLoad = trackCallbackOnLoad, this.trackCallbackOnReady = trackCallbackOnReady, this.buildContentImpressionsRequests = buildContentImpressionsRequests, this.wasContentImpressionAlreadyTracked = wasContentImpressionAlreadyTracked, this.appendContentInteractionToRequestIfPossible = getContentInteractionToRequestIfPossible, this.setupInteractionsTracking = setupInteractionsTracking, this.trackContentImpressionClickInteraction = trackContentImpressionClickInteraction, this.internalIsNodeVisible = isVisible, this.isNodeAuthorizedToTriggerInteraction = isNodeAuthorizedToTriggerInteraction, this.replaceHrefIfInternalLink = replaceHrefIfInternalLink, this.getDomains = function() {
                return configHostsAlias
            }, this.getConfigIdPageView = function() {
                return configIdPageView
            }, this.getConfigDownloadExtensions = function() {
                return configDownloadExtensions
            }, this.enableTrackOnlyVisibleContent = function(e, t) {
                return enableTrackOnlyVisibleContent(e, t, this)
            }, this.clearTrackedContentImpressions = function() {
                trackedContentImpressions = []
            }, this.getTrackedContentImpressions = function() {
                return trackedContentImpressions
            }, this.clearEnableTrackOnlyVisibleContent = function() {
                isTrackOnlyVisibleContentEnabled = !1
            }, this.disableLinkTracking = function() {
                linkTrackingInstalled = !1, linkTrackingEnabled = !1
            }, this.getConfigVisitorCookieTimeout = function() {
                return configVisitorCookieTimeout
            }, this.removeAllAsyncTrackersButFirst = function() {
                var e = asyncTrackers[0];
                asyncTrackers = [e]
            }, this.getRemainingVisitorCookieTimeout = getRemainingVisitorCookieTimeout, this.getVisitorId = function() {
                return getValuesFromVisitorIdCookie().uuid
            }, this.getVisitorInfo = function() {
                return loadVisitorIdCookie()
            }, this.getAttributionInfo = function() {
                return loadReferrerAttributionCookie()
            }, this.getAttributionCampaignName = function() {
                return loadReferrerAttributionCookie()[0]
            }, this.getAttributionCampaignKeyword = function() {
                return loadReferrerAttributionCookie()[1]
            }, this.getAttributionReferrerTimestamp = function() {
                return loadReferrerAttributionCookie()[2]
            }, this.getAttributionReferrerUrl = function() {
                return loadReferrerAttributionCookie()[3]
            }, this.setTrackerUrl = function(e) {
                configTrackerUrl = e
            }, this.getTrackerUrl = function() {
                return configTrackerUrl
            }, this.setSubscriber = function(e) {
                var t = getUrlParameter(configCustomUrl || locationHrefAlias, "eg_sub");
                (configTrackerSubscriber = e || (t && !getCookie(getCookieName("Subscriber")) ? t : getCookie(getCookieName("Subscriber")))) && setCookie(getCookieName("Subscriber"), configTrackerSubscriber, configVisitorCookieTimeout)
            }, this.setListId = function(e) {
                var t = getUrlParameter(configCustomUrl || locationHrefAlias, "eg_list");
                t && (configTrackerListId = e = t, setCookie(getCookieName("ListId"), e, configVisitorCookieTimeout)), configTrackerListId = getCookie(getCookieName("ListId")) || e
            }, this.setCampaignId = function(e) {
                var t = getUrlParameter(configCustomUrl || locationHrefAlias, "eg_cam");
                t && (configTrackerCampaignId = e = t, setCookie(getCookieName("CampaignId"), e, configReferralCookieTimeout)), configTrackerCampaignId = getCookie(getCookieName("CampaignId")) || e
            }, this.getEgoimmerceUrl = function() {
                return getEgoimmerceUrlForOverlay(this.getTrackerUrl(), configApiUrl)
            }, this.addTracker = function(e, t) {
                if (!t) throw new Error("A clientId must be given to add a new tracker");
                isDefined(e) && null !== e || (e = this.getTrackerUrl());
                var i = new Tracker(e, t);
                return asyncTrackers.push(i), i
            }, this.getClientId = function() {
                return configTrackerClientId
            }, this.getSubscriber = function() {
                return configTrackerSubscriber
            }, this.setClientId = function(e) {
                setClientId(e)
            }, this.setUserId = function(e) {
                isDefined(e) && e.length && (visitorUUID = hash(configUserId = e).substr(0, 16))
            }, this.getUserId = function() {
                return configUserId
            }, this.setCustomData = function(e, t) {
                isObject(e) ? configCustomData = e : (configCustomData || (configCustomData = {}), configCustomData[e] = t)
            }, this.getCustomData = function() {
                return configCustomData
            }, this.setCustomRequestProcessing = function(e) {
                configCustomRequestContentProcessing = e
            }, this.appendToTrackingUrl = function(e) {
                configAppendToTrackingUrl = e
            }, this.getRequest = function(e) {
                return getRequest(e)
            }, this.addPlugin = function(e, t) {
                plugins[e] = t
            }, this.setCustomDimension = function(e, t) {
                (e = parseInt(e, 10)) > 0 && (isDefined(t) || (t = ""), isString(t) || (t = String(t)), customDimensions[e] = t)
            }, this.getCustomDimension = function(e) {
                if ((e = parseInt(e, 10)) > 0 && Object.prototype.hasOwnProperty.call(customDimensions, e)) return customDimensions[e]
            }, this.deleteCustomDimension = function(e) {
                (e = parseInt(e, 10)) > 0 && delete customDimensions[e]
            }, this.setCustomVariable = function(e, t, i, n) {
                var r;
                isDefined(n) || (n = "visit"), isDefined(t) && (isDefined(i) || (i = ""), e > 0 && (t = isString(t) ? t : String(t), i = isString(i) ? i : String(i), r = [t.slice(0, customVariableMaximumLength), i.slice(0, customVariableMaximumLength)], "visit" === n || 2 === n ? (loadCustomVariables(), customVariables[e] = r) : "page" === n || 3 === n ? customVariablesPage[e] = r : "event" === n && (customVariablesEvent[e] = r)))
            }, this.getCustomVariable = function(e, t) {
                var i;
                return isDefined(t) || (t = "visit"), "page" === t || 3 === t ? i = customVariablesPage[e] : "event" === t ? i = customVariablesEvent[e] : "visit" !== t && 2 !== t || (loadCustomVariables(), i = customVariables[e]), !(!isDefined(i) || i && "" === i[0]) && i
            }, this.deleteCustomVariable = function(e, t) {
                this.getCustomVariable(e, t) && this.setCustomVariable(e, "", "", t)
            }, this.deleteCustomVariables = function(e) {
                "page" === e || 3 === e ? customVariablesPage = {} : "event" === e ? customVariablesEvent = {} : "visit" !== e && 2 !== e || (customVariables = {})
            }, this.storeCustomVariablesInCookie = function() {
                configStoreCustomVariablesInCookie = !0
            }, this.setLinkTrackingTimer = function(e) {
                configTrackerPause = e
            }, this.getLinkTrackingTimer = function() {
                return configTrackerPause
            }, this.setDownloadExtensions = function(e) {
                isString(e) && (e = e.split("|")), configDownloadExtensions = e
            }, this.addDownloadExtensions = function(e) {
                var t;
                for (isString(e) && (e = e.split("|")), t = 0; t < e.length; t++) configDownloadExtensions.push(e[t])
            }, this.removeDownloadExtensions = function(e) {
                var t, i = [];
                for (isString(e) && (e = e.split("|")), t = 0; t < configDownloadExtensions.length; t++) - 1 === indexOfArray(e, configDownloadExtensions[t]) && i.push(configDownloadExtensions[t]);
                configDownloadExtensions = i
            }, this.setDomains = function(e) {
                configHostsAlias = isString(e) ? [e] : e;
                for (var t, i = !1, n = 0; n < configHostsAlias.length; n++) {
                    if (t = String(configHostsAlias[n]), isSameHost(domainAlias, domainFixup(t))) {
                        i = !0;
                        break
                    }
                    var r = getPathName(t);
                    if (r && "/" !== r && "/*" !== r) {
                        i = !0;
                        break
                    }
                }
                i || configHostsAlias.push(domainAlias)
            }, this.enableCrossDomainLinking = function() {
                crossDomainTrackingEnabled = !0
            }, this.disableCrossDomainLinking = function() {
                crossDomainTrackingEnabled = !1
            }, this.isCrossDomainLinkingEnabled = function() {
                return crossDomainTrackingEnabled
            }, this.setCrossDomainLinkingTimeout = function(e) {
                configVisitorIdUrlParameterTimeoutInSeconds = e
            }, this.setIgnoreClasses = function(e) {
                configIgnoreClasses = isString(e) ? [e] : e
            }, this.setRequestMethod = function(e) {
                configRequestMethod = e || defaultRequestMethod
            }, this.setRequestContentType = function(e) {
                configRequestContentType = e || defaultRequestContentType
            }, this.setReferrerUrl = function(e) {
                configReferrerUrl = e
            }, this.setCustomUrl = function(e) {
                configCustomUrl = resolveRelativeReference(locationHrefAlias, e)
            }, this.getCurrentUrl = function() {
                return configCustomUrl || locationHrefAlias
            }, this.setDocumentTitle = function(e) {
                configTitle = e
            }, this.setAPIUrl = function(e) {
                configApiUrl = e
            }, this.setDownloadClasses = function(e) {
                configDownloadClasses = isString(e) ? [e] : e
            }, this.setLinkClasses = function(e) {
                configLinkClasses = isString(e) ? [e] : e
            }, this.setCampaignNameKey = function(e) {
                configCampaignNameParameters = isString(e) ? [e] : e
            }, this.setCampaignKeywordKey = function(e) {
                configCampaignKeywordParameters = isString(e) ? [e] : e
            }, this.discardHashTag = function(e) {
                configDiscardHashTag = e
            }, this.setCookieNamePrefix = function(e) {
                configCookieNamePrefix = e, customVariables = getCustomVariablesFromCookie()
            }, this.setCookieDomain = function(e) {
                var t = domainFixup(e);
                isPossibleToSetCookieOnDomain(t) && (configCookieDomain = t, updateDomainHash())
            }, this.getCookieDomain = function() {
                return configCookieDomain
            }, this.hasCookies = function() {
                return "1" === hasCookies()
            }, this.setSessionCookie = function(e, t, i) {
                if (!e) throw new Error("Missing cookie name");
                isDefined(i) || (i = configSessionCookieTimeout), configCookiesToDelete.push(e), setCookie(getCookieName(e), t, i, configCookiePath, configCookieDomain)
            }, this.getCookie = function(e) {
                var t = getCookie(getCookieName(e));
                return 0 === t ? null : t
            }, this.setCookiePath = function(e) {
                configCookiePath = e, updateDomainHash()
            }, this.getCookiePath = function(e) {
                return configCookiePath
            }, this.setVisitorCookieTimeout = function(e) {
                configVisitorCookieTimeout = 1e3 * e
            }, this.setSessionCookieTimeout = function(e) {
                configSessionCookieTimeout = 1e3 * e
            }, this.getSessionCookieTimeout = function() {
                return configSessionCookieTimeout
            }, this.setReferralCookieTimeout = function(e) {
                configReferralCookieTimeout = 1e3 * e
            }, this.setConversionAttributionFirstReferrer = function(e) {
                configConversionAttributionFirstReferrer = e
            }, this.disableCookies = function() {
                configCookiesDisabled = !0, browserFeatures.cookie = "0", configTrackerClientId && deleteCookies()
            }, this.deleteCookies = function() {
                deleteCookies()
            }, this.setDoNotTrack = function(e) {
                var t = navigatorAlias.doNotTrack || navigatorAlias.msDoNotTrack;
                (configDoNotTrack = e && ("yes" === t || "1" === t)) && this.disableCookies()
            }, this.addListener = function(e, t) {
                addClickListener(e, t)
            }, this.enableLinkTracking = function(e) {
                linkTrackingEnabled = !0;
                var t = this;
                trackCallback((function() {
                    trackCallbackOnReady((function() {
                        addClickListeners(e, t)
                    }))
                }))
            }, this.enableJSErrorTracking = function() {
                if (!enableJSErrorTracking) {
                    enableJSErrorTracking = !0;
                    var e = windowAlias.onerror;
                    windowAlias.onerror = function(t, i, n, r, o) {
                        return trackCallback((function() {
                            var e = i + ":" + n;
                            r && (e += ":" + r), logEvent("JavaScript Errors", e, t)
                        })), !!e && e(t, i, n, r, o)
                    }
                }
            }, this.disablePerformanceTracking = function() {
                configPerformanceTrackingEnabled = !1
            }, this.setGenerationTimeMs = function(e) {
                configPerformanceGenerationTime = parseInt(e, 10)
            }, this.enableHeartBeatTimer = function(e) {
                e = Math.max(e, 1), configHeartBeatDelay = 1e3 * (e || 15), null !== lastTrackerRequestTime && setUpHeartBeat()
            }, this.disableHeartBeatTimer = function() {
                heartBeatDown(), (configHeartBeatDelay || heartBeatSetUp) && (windowAlias.removeEventListener ? (windowAlias.removeEventListener("focus", heartBeatOnFocus, !0), windowAlias.removeEventListener("blur", heartBeatOnBlur, !0)) : windowAlias.detachEvent && (windowAlias.detachEvent("onfocus", heartBeatOnFocus), windowAlias.detachEvent("onblur", heartBeatOnBlur))), configHeartBeatDelay = null, heartBeatSetUp = !1
            }, this.killFrame = function() {
                windowAlias.location !== windowAlias.top.location && (windowAlias.top.location = windowAlias.location)
            }, this.redirectFile = function(e) {
                "file:" === windowAlias.location.protocol && (windowAlias.location = e)
            }, this.setCountPreRendered = function(e) {
                configCountPreRendered = e
            }, this.trackGoal = function(e, t, i) {
                trackCallback((function() {
                    logGoal(e, t, i)
                }))
            }, this.trackLink = function(e, t, i, n) {
                trackCallback((function() {
                    logLink(e, t, i, n)
                }))
            }, this.getNumTrackedPageViews = function() {
                return numTrackedPageviews
            }, this.trackPageView = function(e, t, i) {
                trackedContentImpressions = [], isOverlaySession(configTrackerClientId) ? trackCallback((function() {
                    injectOverlayScripts(configTrackerUrl, configApiUrl, configTrackerClientId)
                })) : trackCallback((function() {
                    numTrackedPageviews++, logPageView(e, t, i)
                }))
            }, this.trackAllContentImpressions = function() {
                isOverlaySession(configTrackerClientId) || trackCallback((function() {
                    trackCallbackOnReady((function() {
                        sendBulkRequest(getContentImpressionsRequestsFromNodes(content.findContentNodes()), configTrackerPause)
                    }))
                }))
            }, this.trackVisibleContentImpressions = function(e, t) {
                isOverlaySession(configTrackerClientId) || (isDefined(e) || (e = !0), isDefined(t) || (t = 750), enableTrackOnlyVisibleContent(e, t, this), trackCallback((function() {
                    trackCallbackOnLoad((function() {
                        sendBulkRequest(getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet(content.findContentNodes()), configTrackerPause)
                    }))
                })))
            }, this.trackContentImpression = function(e, t, i) {
                isOverlaySession(configTrackerClientId) || (e = trim(e), t = trim(t), i = trim(i), e && (t = t || "Unknown", trackCallback((function() {
                    sendRequest(buildContentImpressionRequest(e, t, i), configTrackerPause)
                }))))
            }, this.trackContentImpressionsWithinNode = function(e) {
                !isOverlaySession(configTrackerClientId) && e && trackCallback((function() {
                    isTrackOnlyVisibleContentEnabled ? trackCallbackOnLoad((function() {
                        sendBulkRequest(getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet(content.findContentNodesWithinNode(e)), configTrackerPause)
                    })) : trackCallbackOnReady((function() {
                        sendBulkRequest(getContentImpressionsRequestsFromNodes(content.findContentNodesWithinNode(e)), configTrackerPause)
                    }))
                }))
            }, this.trackContentInteraction = function(e, t, i, n) {
                isOverlaySession(configTrackerClientId) || (e = trim(e), t = trim(t), i = trim(i), n = trim(n), e && t && (i = i || "Unknown", trackCallback((function() {
                    sendRequest(buildContentInteractionRequest(e, t, i, n), configTrackerPause)
                }))))
            }, this.trackContentInteractionNode = function(e, t) {
                !isOverlaySession(configTrackerClientId) && e && trackCallback((function() {
                    sendRequest(buildContentInteractionRequestNode(e, t), configTrackerPause)
                }))
            }, this.logAllContentBlocksOnPage = function() {
                var e = content.findContentNodes(),
                    t = content.collectContent(e);
                "undefined" !== typeof console && console && console.log && console.log(t)
            }, this.trackEvent = function(e, t, i, n, r, o) {
                trackCallback((function() {
                    logEvent(e, t, i, n, r, o)
                }))
            }, this.trackSiteSearch = function(e, t, i, n) {
                trackCallback((function() {
                    logSiteSearch(e, t, i, n)
                }))
            }, this.setEcommerceView = function(e, t, i, n) {
                isDefined(i) && i.length ? i instanceof Array && (i = JSON_EGOIMMERCE.stringify(i)) : i = "", customVariablesPage[5] = ["_pkc", i], customCategoryView = i, isDefined(n) && String(n).length && (customVariablesPage[2] = ["_pkp", n]), (isDefined(e) && e.length || isDefined(t) && t.length) && (isDefined(e) && e.length && (customVariablesPage[3] = ["_pks", e], customProductView = e), isDefined(t) && t.length || (t = ""), customVariablesPage[4] = ["_pkn", t])
            }, this.addEcommerceItem = function(e, t, i, n, r) {
                e.length && (ecommerceItems[e] = [e, t, i, n, r])
            }, this.trackEcommerceOrder = function(e, t, i, n, r, o) {
                logEcommerceOrder(e, t, i, n, r, o)
            }, this.trackEcommerceCartUpdate = function(e) {
                logEcommerceCartUpdate(e)
            }, this.trackRequest = function(e, t, i, n) {
                trackCallback((function() {
                    sendRequest(getRequest(e, t, n), configTrackerPause, i)
                }))
            }, Egoimmerce.trigger("TrackerSetup", [this])
        }

        function TrackerProxy() {
            return {
                push: apply
            }
        }

        function applyMethodsInOrder(e, t) {
            var i, n, r = {};
            for (i = 0; i < t.length; i++) {
                var o = t[i];
                for (r[o] = 1, n = 0; n < e.length; n++)
                    if (e[n] && e[n][0]) {
                        var a = e[n][0];
                        o === a && (apply(e[n]), delete e[n], r[a] > 1 && logConsoleError("The method " + a + ' is registered more than once in "_egoiaq" variable. Only the last call has an effect. Please have a look at the multiple Egoimmerce trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers'), r[a]++)
                    }
            }
            return e
        }
        var applyFirst = ["addTracker", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCrossDomainLinkingTimeout", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setClientId", "enableLinkTracking", "setSecureCookie"];

        function createFirstTracker(e, t) {
            var i = new Tracker(e, t);
            for (asyncTrackers.push(i), _egoiaq = applyMethodsInOrder(_egoiaq, applyFirst), iterator = 0; iterator < _egoiaq.length; iterator++) _egoiaq[iterator] && apply(_egoiaq[iterator]);
            return _egoiaq = new TrackerProxy, i
        }
        return addEventListener(windowAlias, "beforeunload", beforeUnloadHandler, !1), Date.prototype.getTimeAlias = Date.prototype.getTime, Egoimmerce = {
            initialized: !1,
            JSON: JSON_EGOIMMERCE,
            DOM: {
                addEventListener: function(e, t, i, n) {
                    "undefined" === typeof n && (n = !1), addEventListener(e, t, i, n)
                },
                onLoad: trackCallbackOnLoad,
                onReady: trackCallbackOnReady,
                isNodeVisible: isVisible,
                isOrWasNodeVisible: content.isNodeVisible
            },
            on: function(e, t) {
                eventHandlers[e] || (eventHandlers[e] = []), eventHandlers[e].push(t)
            },
            off: function(e, t) {
                if (eventHandlers[e])
                    for (var i = 0; i < eventHandlers[e].length; i++) eventHandlers[e][i] === t && eventHandlers[e].splice(i, 1)
            },
            trigger: function(e, t, i) {
                if (eventHandlers[e])
                    for (var n = 0; n < eventHandlers[e].length; n++) eventHandlers[e][n].apply(i || windowAlias, t)
            },
            addPlugin: function(e, t) {
                plugins[e] = t
            },
            getTracker: function(e, t) {
                return isDefined(t) || (t = this.getAsyncTracker().getClientId()), isDefined(e) || (e = this.getAsyncTracker().getTrackerUrl()), new Tracker(e, t)
            },
            getAsyncTrackers: function() {
                return asyncTrackers
            },
            addTracker: function(e, t) {
                asyncTrackers.length ? asyncTrackers[0].addTracker(e, t) : createFirstTracker(e, t)
            },
            getAsyncTracker: function(e, t) {
                var i;
                if (!(asyncTrackers && asyncTrackers.length && asyncTrackers[0])) return createFirstTracker(e, t);
                if (i = asyncTrackers[0], !t && !e) return i;
                isDefined(t) && null !== t || !i || (t = i.getClientId()), isDefined(e) && null !== e || !i || (e = i.getTrackerUrl());
                for (var n, r = 0; r < asyncTrackers.length; r++)
                    if ((n = asyncTrackers[r]) && String(n.getClientId()) === String(t) && n.getTrackerUrl() === e) return n
            },
            retryMissedPluginCalls: function() {
                var e = missedPluginTrackerCalls;
                missedPluginTrackerCalls = [];
                for (var t = 0; t < e.length; t++) apply(e[t])
            }
        }, "function" == typeof define && define.amd && define("egoimmerce", [], (function() {
            return Egoimmerce
        })), Egoimmerce
    }())
    /*!! pluginTrackerHook */
    ,
    function() {
        "use strict";
        if (window && "object" == typeof window.egoimmercePluginAsyncInit && window.egoimmercePluginAsyncInit.length)
            for (var e = 0; e < window.egoimmercePluginAsyncInit.length; e++) "function" == typeof window.egoimmercePluginAsyncInit[e] && window.egoimmercePluginAsyncInit[e]();
        window && window.egoimmerceAsyncInit && window.egoimmerceAsyncInit(), window.Egoimmerce.getAsyncTrackers().length || ("object" == typeof _egoiaq && void 0 !== _egoiaq.length && _egoiaq.length ? window.Egoimmerce.addTracker() : _egoiaq = {
            push: function(e) {
                "undefined" !== typeof console && console && console.error && console.error("_egoiaq.push() was used but Egoimmerce tracker was not initialized before the egoimmerce.js file was loaded. Make sure to configure the tracker via _egoiaq.push before loading egoimmerce.js. Alternatively, you can create a tracker via Egoimmerce.addTracker() manually and then use _egoiaq.push but it may not fully work as tracker methods may not be executed in the correct order.", e)
            }
        }), window.Egoimmerce.trigger("EgoimmerceInitialized", []), window.Egoimmerce.initialized = !0
    }(), "undefined" == typeof AnalyticsTracker && (AnalyticsTracker = window.Egoimmerce), "function" != typeof egoimmerce_log && (egoimmerce_log = function(e, t, i, n) {
        "use strict";

        function r(e) {
            try {
                if (window["egoimmerce_" + e]) return window["egoimmerce_" + e]
            } catch (e) {}
        }
        var o, a = window.Egoimmerce.getTracker(i, t);
        a.setDocumentTitle(e), a.setCustomData(n), (o = r("tracker_pause")) && a.setLinkTrackingTimer(o), (o = r("download_extensions")) && a.setDownloadExtensions(o), (o = r("hosts_alias")) && a.setDomains(o), (o = r("ignore_classes")) && a.setIgnoreClasses(o), a.trackPageView(), r("install_tracker") && (egoimmerce_track = function(e, t, i, n) {
            a.setClientId(t), a.setTrackerUrl(i), a.trackLink(e, n)
        }, a.enableLinkTracking())
    })
/*! @license-end */
;