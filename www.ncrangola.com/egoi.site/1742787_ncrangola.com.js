if (!window._egconnected) {
    window._egconnected = true;
    window.__CONNECTED_DATA__ = {
        "client": "1742787",
        "domain": "ncrangola.com",
        "tags": [{
            "id": "vtex",
            "type": "integrated",
            "data": []
        }]
    };
    var _egoiaq = window._egoiaq || [];
    _egoiaq.push(['setClientId', '1742787']);
    _egoiaq.push(['setTrackerUrl', 'https://egoimmerce.e-goi.com/collect']);
    _egoiaq.push(['trackPageView']);
    _egoiaq.push(['enableLinkTracking']);
    var hs = Object.defineProperty;
    var ms = (ae, Ce, je) => Ce in ae ? hs(ae, Ce, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: je
    }) : ae[Ce] = je;
    var I = (ae, Ce, je) => ms(ae, typeof Ce != "symbol" ? Ce + "" : Ce, je);
    (function() {
        "use strict";

        function ae() {}

        function Ce(c) {
            return c()
        }

        function je() {
            return Object.create(null)
        }

        function Ge(c) {
            c.forEach(Ce)
        }

        function Di(c) {
            return typeof c == "function"
        }

        function Xt(c, r) {
            return c != c ? r == r : c !== r || c && typeof c == "object" || typeof c == "function"
        }
        let $t;

        function At(c, r) {
            return c === r ? !0 : ($t || ($t = document.createElement("a")), $t.href = r, c === $t.href)
        }

        function Gr(c) {
            return Object.keys(c).length === 0
        }

        function K(c, r) {
            c.appendChild(r)
        }

        function Fi(c, r, n) {
            const a = Zr(c);
            if (!a.getElementById(r)) {
                const f = oe("style");
                f.id = r, f.textContent = n, Xr(a, f)
            }
        }

        function Zr(c) {
            if (!c) return document;
            const r = c.getRootNode ? c.getRootNode() : c.ownerDocument;
            return r && r.host ? r : c.ownerDocument
        }

        function Xr(c, r) {
            return K(c.head || c, r), r.sheet
        }

        function Ze(c, r, n) {
            c.insertBefore(r, n || null)
        }

        function He(c) {
            c.parentNode && c.parentNode.removeChild(c)
        }

        function oe(c) {
            return document.createElement(c)
        }

        function Kt(c) {
            return document.createTextNode(c)
        }

        function Xe() {
            return Kt(" ")
        }

        function Nt(c, r, n, a) {
            return c.addEventListener(r, n, a), () => c.removeEventListener(r, n, a)
        }

        function P(c, r, n) {
            n == null ? c.removeAttribute(r) : c.getAttribute(r) !== n && c.setAttribute(r, n)
        }

        function Kr(c) {
            return Array.from(c.childNodes)
        }

        function lt(c, r, n, a) {
            n == null ? c.style.removeProperty(r) : c.style.setProperty(r, n, "")
        }

        function Yt(c, r, n) {
            c.classList.toggle(r, !!n)
        }

        function Yr(c) {
            const r = {};
            return c.childNodes.forEach(n => {
                r[n.slot || "default"] = !0
            }), r
        }
        let dt;

        function gt(c) {
            dt = c
        }

        function ji() {
            if (!dt) throw new Error("Function called outside component initialization");
            return dt
        }

        function Qt(c) {
            ji().$$.on_mount.push(c)
        }

        function Qr(c) {
            ji().$$.on_destroy.push(c)
        }
        const Ke = [],
            ht = [];
        let Ye = [];
        const Hi = [],
            en = Promise.resolve();
        let ei = !1;

        function tn() {
            ei || (ei = !0, en.then(mt))
        }

        function ti(c) {
            Ye.push(c)
        }
        const ii = new Set;
        let Qe = 0;

        function mt() {
            if (Qe !== 0) return;
            const c = dt;
            do {
                try {
                    for (; Qe < Ke.length;) {
                        const r = Ke[Qe];
                        Qe++, gt(r), rn(r.$$)
                    }
                } catch (r) {
                    throw Ke.length = 0, Qe = 0, r
                }
                for (gt(null), Ke.length = 0, Qe = 0; ht.length;) ht.pop()();
                for (let r = 0; r < Ye.length; r += 1) {
                    const n = Ye[r];
                    ii.has(n) || (ii.add(n), n())
                }
                Ye.length = 0
            } while (Ke.length);
            for (; Hi.length;) Hi.pop()();
            ei = !1, ii.clear(), gt(c)
        }

        function rn(c) {
            if (c.fragment !== null) {
                c.update(), Ge(c.before_update);
                const r = c.dirty;
                c.dirty = [-1], c.fragment && c.fragment.p(c.ctx, r), c.after_update.forEach(ti)
            }
        }

        function nn(c) {
            const r = [],
                n = [];
            Ye.forEach(a => c.indexOf(a) === -1 ? r.push(a) : n.push(a)), n.forEach(a => a()), Ye = r
        }
        const on = new Set;

        function sn(c, r) {
            c && c.i && (on.delete(c), c.i(r))
        }

        function an(c, r, n) {
            const {
                fragment: a,
                after_update: f
            } = c.$$;
            a && a.m(r, n), ti(() => {
                const p = c.$$.on_mount.map(Ce).filter(Di);
                c.$$.on_destroy ? c.$$.on_destroy.push(...p) : Ge(p), c.$$.on_mount = []
            }), f.forEach(ti)
        }

        function cn(c, r) {
            const n = c.$$;
            n.fragment !== null && (nn(n.after_update), Ge(n.on_destroy), n.fragment && n.fragment.d(r), n.on_destroy = n.fragment = null, n.ctx = [])
        }

        function un(c, r) {
            c.$$.dirty[0] === -1 && (Ke.push(c), tn(), c.$$.dirty.fill(0)), c.$$.dirty[r / 31 | 0] |= 1 << r % 31
        }

        function ri(c, r, n, a, f, p, m = null, T = [-1]) {
            const b = dt;
            gt(c);
            const A = c.$$ = {
                fragment: null,
                ctx: [],
                props: p,
                update: ae,
                not_equal: f,
                bound: je(),
                on_mount: [],
                on_destroy: [],
                on_disconnect: [],
                before_update: [],
                after_update: [],
                context: new Map(r.context || (b ? b.$$.context : [])),
                callbacks: je(),
                dirty: T,
                skip_bound: !1,
                root: r.target || b.$$.root
            };
            m && m(A.root);
            let x = !1;
            if (A.ctx = n ? n(c, r.props || {}, (v, O, ...N) => {
                    const y = N.length ? N[0] : O;
                    return A.ctx && f(A.ctx[v], A.ctx[v] = y) && (!A.skip_bound && A.bound[v] && A.bound[v](y), x && un(c, v)), O
                }) : [], A.update(), x = !0, Ge(A.before_update), A.fragment = a ? a(A.ctx) : !1, r.target) {
                if (r.hydrate) {
                    const v = Kr(r.target);
                    A.fragment && A.fragment.l(v), v.forEach(He)
                } else A.fragment && A.fragment.c();
                r.intro && sn(c.$$.fragment), an(c, r.target, r.anchor), mt()
            }
            gt(b)
        }
        let Ui;
        typeof HTMLElement == "function" && (Ui = class extends HTMLElement {
            constructor(r, n, a) {
                super();
                I(this, "$$ctor");
                I(this, "$$s");
                I(this, "$$c");
                I(this, "$$cn", !1);
                I(this, "$$d", {});
                I(this, "$$r", !1);
                I(this, "$$p_d", {});
                I(this, "$$l", {});
                I(this, "$$l_u", new Map);
                this.$$ctor = r, this.$$s = n, a && this.attachShadow({
                    mode: "open"
                })
            }
            addEventListener(r, n, a) {
                if (this.$$l[r] = this.$$l[r] || [], this.$$l[r].push(n), this.$$c) {
                    const f = this.$$c.$on(r, n);
                    this.$$l_u.set(n, f)
                }
                super.addEventListener(r, n, a)
            }
            removeEventListener(r, n, a) {
                if (super.removeEventListener(r, n, a), this.$$c) {
                    const f = this.$$l_u.get(n);
                    f && (f(), this.$$l_u.delete(n))
                }
                if (this.$$l[r]) {
                    const f = this.$$l[r].indexOf(n);
                    f >= 0 && this.$$l[r].splice(f, 1)
                }
            }
            async connectedCallback() {
                if (this.$$cn = !0, !this.$$c) {
                    let r = function(p) {
                        return () => {
                            let m;
                            return {
                                c: function() {
                                    m = oe("slot"), p !== "default" && P(m, "name", p)
                                },
                                m: function(A, x) {
                                    Ze(A, m, x)
                                },
                                d: function(A) {
                                    A && He(m)
                                }
                            }
                        }
                    };
                    if (await Promise.resolve(), !this.$$cn || this.$$c) return;
                    const n = {},
                        a = Yr(this);
                    for (const p of this.$$s) p in a && (n[p] = [r(p)]);
                    for (const p of this.attributes) {
                        const m = this.$$g_p(p.name);
                        m in this.$$d || (this.$$d[m] = Ot(m, p.value, this.$$p_d, "toProp"))
                    }
                    for (const p in this.$$p_d) !(p in this.$$d) && this[p] !== void 0 && (this.$$d[p] = this[p], delete this[p]);
                    this.$$c = new this.$$ctor({
                        target: this.shadowRoot || this,
                        props: { ...this.$$d,
                            $$slots: n,
                            $$scope: {
                                ctx: []
                            }
                        }
                    });
                    const f = () => {
                        this.$$r = !0;
                        for (const p in this.$$p_d)
                            if (this.$$d[p] = this.$$c.$$.ctx[this.$$c.$$.props[p]], this.$$p_d[p].reflect) {
                                const m = Ot(p, this.$$d[p], this.$$p_d, "toAttribute");
                                m == null ? this.removeAttribute(this.$$p_d[p].attribute || p) : this.setAttribute(this.$$p_d[p].attribute || p, m)
                            }
                        this.$$r = !1
                    };
                    this.$$c.$$.after_update.push(f), f();
                    for (const p in this.$$l)
                        for (const m of this.$$l[p]) {
                            const T = this.$$c.$on(p, m);
                            this.$$l_u.set(m, T)
                        }
                    this.$$l = {}
                }
            }
            attributeChangedCallback(r, n, a) {
                var f;
                this.$$r || (r = this.$$g_p(r), this.$$d[r] = Ot(r, a, this.$$p_d, "toProp"), (f = this.$$c) == null || f.$set({
                    [r]: this.$$d[r]
                }))
            }
            disconnectedCallback() {
                this.$$cn = !1, Promise.resolve().then(() => {
                    !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0)
                })
            }
            $$g_p(r) {
                return Object.keys(this.$$p_d).find(n => this.$$p_d[n].attribute === r || !this.$$p_d[n].attribute && n.toLowerCase() === r) || r
            }
        });

        function Ot(c, r, n, a) {
            var p;
            const f = (p = n[c]) == null ? void 0 : p.type;
            if (r = f === "Boolean" && typeof r != "boolean" ? r != null : r, !a || !n[c]) return r;
            if (a === "toAttribute") switch (f) {
                case "Object":
                case "Array":
                    return r == null ? null : JSON.stringify(r);
                case "Boolean":
                    return r ? "" : null;
                case "Number":
                    return r ? ? null;
                default:
                    return r
            } else switch (f) {
                case "Object":
                case "Array":
                    return r && JSON.parse(r);
                case "Boolean":
                    return r;
                case "Number":
                    return r != null ? +r : r;
                default:
                    return r
            }
        }

        function ni(c, r, n, a, f, p) {
            let m = class extends Ui {
                constructor() {
                    super(c, n, f), this.$$p_d = r
                }
                static get observedAttributes() {
                    return Object.keys(r).map(T => (r[T].attribute || T).toLowerCase())
                }
            };
            return Object.keys(r).forEach(T => {
                Object.defineProperty(m.prototype, T, {
                    get() {
                        return this.$$c && T in this.$$c ? this.$$c[T] : this.$$d[T]
                    },
                    set(b) {
                        var A;
                        b = Ot(T, b, r), this.$$d[T] = b, (A = this.$$c) == null || A.$set({
                            [T]: b
                        })
                    }
                })
            }), a.forEach(T => {
                Object.defineProperty(m.prototype, T, {
                    get() {
                        var b;
                        return (b = this.$$c) == null ? void 0 : b[T]
                    }
                })
            }), c.element = m, m
        }
        class oi {
            constructor() {
                I(this, "$$");
                I(this, "$$set")
            }
            $destroy() {
                cn(this, 1), this.$destroy = ae
            }
            $on(r, n) {
                if (!Di(n)) return ae;
                const a = this.$$.callbacks[r] || (this.$$.callbacks[r] = []);
                return a.push(n), () => {
                    const f = a.indexOf(n);
                    f !== -1 && a.splice(f, 1)
                }
            }
            $set(r) {
                this.$$set && !Gr(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1)
            }
        }
        const fn = "4";
        typeof window < "u" && (window.__svelte || (window.__svelte = {
            v: new Set
        })).v.add(fn);
        const pt = {
            url: "https://egoiapp2.com",
            assets: "https://cdn-static.egoiapp2.com",
            c2c: "https://cdn.egoi.site/clicktocall.js"
        };
        class ln {
            set(r, n, a = 31536e3) {
                const f = new Date;
                f.setTime(f.getTime() + a * 1e3), document.cookie = `${r}=${n}; expires=${f.toUTCString()}; path=/; SameSite=Lax; Secure`
            }
            get(r) {
                var n;
                return (n = document.cookie.split("; ").find(a => a.startsWith(`${r}=`))) == null ? void 0 : n.split("=")[1]
            }
            delete(r) {
                document.cookie = `${r}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax; Secure`
            }
            has(r) {
                return document.cookie.includes(`${r}=`)
            }
        }
        const vt = new ln;
        class dn {
            init() {
                return new Promise(r => {
                    if (window.Egoimmerce && window.Egoimmerce.initialized === !0) return r(window.Egoimmerce);
                    const n = setInterval(() => {
                        window.Egoimmerce && window.Egoimmerce.initialized === !0 && (clearInterval(n), r(window.Egoimmerce))
                    }, 50)
                })
            }
            getSubscriber() {
                return new URLSearchParams(document.location.search).get("eg_custom_uid") || new URLSearchParams(document.location.search).get("eg_sub") || window.Egoimmerce.getAsyncTracker().getSubscriber()
            }
            setSubscriber(r, n) {
                var a;
                (a = window.Egoimmerce) == null || a.getAsyncTracker().setSubscriber(r), n && vt.set(`eg_sub_${n}`, "*")
            }
            hasSubmitted(r = "") {
                return r.length > 2 && document.cookie.includes(`eg_sub_${r}`)
            }
        }
        const $e = new dn;
        class si {
            constructor(r = "") {
                I(this, "logs", []);
                I(this, "isBuffering", !1);
                I(this, "enabled", !1);
                I(this, "titleStyle", `
        border-left: 4px solid;
        padding: 20px 10px 5px;
        font-weight: bold;
    `);
                this.prefix = r, window.location.search.includes("eg_debug") && sessionStorage.setItem("eg_connected_debug", "true"), this.enabled = sessionStorage.getItem("eg_connected_debug") === "true"
            }
            clone(r) {
                return new si(this.prefix ? `${this.prefix} ${r}` : r)
            }
            startGroup() {
                this.isBuffering = !0, this.logs = []
            }
            endGroup(r) {
                if (this.isBuffering = !1, !this.enabled || this.logs.length === 0) return;
                const n = this.prefix ? `${this.prefix} ` : "";
                console.groupCollapsed(`${n}${r}`);
                for (const a of this.logs) switch (a.type) {
                    case "debug":
                        console.debug(a.message, ...a.args);
                        break;
                    case "title":
                        console.debug(`%c ${a.message}`, this.titleStyle, ...a.args);
                        break;
                    default:
                        console.error(a.message, ...a.args)
                }
                console.groupEnd(), window.dispatchEvent(new CustomEvent("eg-connected-log", {
                    detail: {
                        groupName: r,
                        logs: this.logs
                    }
                })), this.logs = []
            }
            title(r, ...n) {
                if (!this.enabled) return;
                if (this.isBuffering && this.prefix) {
                    this.logs.push({
                        type: "title",
                        message: r.toUpperCase(),
                        args: n
                    });
                    return
                }
                const a = this.prefix ? `${this.prefix} ` : "";
                console.debug(`[Connected] ${a}${r.toUpperCase()}`, this.titleStyle, ...n)
            }
            debug(r, ...n) {
                if (this.enabled) {
                    if (this.isBuffering && this.prefix) {
                        this.logs.push({
                            type: "debug",
                            message: r,
                            args: n
                        });
                        return
                    }
                    if (typeof r == "string") {
                        const a = this.prefix ? `${this.prefix} ` : "";
                        console.debug(`[Connected] ${a}${r}`, ...n)
                    } else console.debug(r, ...n)
                }
            }
            error(r, ...n) {
                if (this.isBuffering && this.prefix) {
                    this.logs.push({
                        type: "error",
                        message: r,
                        args: n
                    });
                    return
                }
                const a = this.prefix ? `${this.prefix} ` : "";
                console.error(`[Connected] ${a}${r}`, ...n)
            }
        }
        const gn = new si;
        class de {
            constructor(r) {
                I(this, "condition", !1);
                I(this, "canRetrigger", !1);
                I(this, "complexity", 0);
                this.trigger = r
            }
        }
        class hn extends de {
            constructor() {
                super(...arguments);
                I(this, "canRetrigger", !0);
                I(this, "complexity", 3)
            }
            handleEvent(n, a) {
                switch (a.actual) {
                    case "element_id_equals":
                    case "match_css_selector":
                        {
                            const f = n.target.matches(a.actual === "element_id_equals" ? `#${a.expected}` : a.expected);
                            return a.comparison === "equals" ? f : !f
                        }
                    case "click_any_element":
                        return !0;
                    default:
                        throw new Error(`Unknown condition type: ${a.actual}`)
                }
            }
            async match() {
                const n = this.trigger;
                return n.conditions.length ? new Promise((a, f) => {
                    const p = m => {
                        try {
                            n.conditions.every(b => this.handleEvent(m, b)) && (window.removeEventListener("click", p), a(!0))
                        } catch (T) {
                            window.removeEventListener("click", p), f(T)
                        }
                    };
                    window.addEventListener("click", p)
                }) : !1
            }
        }
        class mn extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 0);
                I(this, "condition", !0)
            }
            async match() {
                return !($e.getSubscriber().length > 3)
            }
        }
        class pn extends de {
            constructor() {
                super(...arguments);
                I(this, "canRetrigger", !0);
                I(this, "complexity", 3)
            }
            async match() {
                const n = this.trigger;
                return n.parameters.eventName ? new Promise(a => {
                    const f = () => {
                        window.removeEventListener(n.parameters.eventName, f), a(!0)
                    };
                    window.addEventListener(n.parameters.eventName, f)
                }) : !1
            }
        }

        function Mi(c) {
            return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 23, 59, 59)
        }

        function vn(c) {
            return new Date(c.getFullYear(), c.getMonth(), c.getDate())
        }
        class wn extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 1)
            }
            async match() {
                const n = this.trigger;
                if (!n.endDate || !n.startDate) return !1;
                const a = new Date,
                    f = vn(new Date(n.startDate)),
                    p = Mi(new Date(n.endDate));
                return a.getTime() >= f.getTime() && a.getTime() <= p.getTime()
            }
        }
        class bn extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 0);
                I(this, "condition", !0)
            }
            async match(n) {
                var a;
                return !$e.hasSubmitted((a = n.data) == null ? void 0 : a.hash)
            }
        }
        class _n extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 0);
                I(this, "condition", !0)
            }
            async match(n) {
                const a = `egc_day_${n.type}_${n.id}`;
                return !vt.has(a)
            }
            triggered(n) {
                const a = `egc_day_${n.type}_${n.id}`,
                    p = Mi(new Date);
                vt.set(a, n.type, p.getTime() / 1e3)
            }
        }
        class yn extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 0);
                I(this, "condition", !0)
            }
            async match(n) {
                return !vt.has(`egc_lifetime_${n.type}_${n.id}`)
            }
            triggered(n) {
                vt.set(`egc_lifetime_${n.type}_${n.id}`, "*")
            }
        }
        class Cn extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 0);
                I(this, "condition", !0)
            }
            async match(n) {
                const a = `egc_${n.type}_${n.id}`;
                return !sessionStorage.getItem(a)
            }
            triggered(n) {
                const a = `egc_${n.type}_${n.id}`;
                sessionStorage.setItem(a, n.type)
            }
        }
        class kn extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 0)
            }
            async match() {
                return !0
            }
        }
        class Tn extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 3)
            }
            checkPosition(n) {
                const a = window.scrollY,
                    f = window.innerHeight,
                    p = document.documentElement.scrollHeight;
                return a / (p - f) * 100 >= n
            }
            async match() {
                const n = this.trigger;
                return n.parameters.percentage ? this.checkPosition(n.parameters.percentage) ? !0 : new Promise((a, f) => {
                    const p = () => {
                        try {
                            this.checkPosition(n.parameters.percentage) && (window.removeEventListener("scroll", p), a(!0))
                        } catch (m) {
                            window.removeEventListener("scroll", p), f(m)
                        }
                    };
                    window.addEventListener("scroll", p)
                }) : !1
            }
        }

        function Sn() {
            const c = document.currentScript;
            return c ? new URL(c.src).origin : ""
        }
        class En extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 2);
                I(this, "condition", !0)
            }
            async match(n) {
                const a = this.trigger,
                    f = $e.getSubscriber(),
                    p = n.data.hash;
                if (!f || !p) return !1;
                const m = new Image;
                return m.src = `${Sn()}/c/s/${p}/${f}/${a.segments.join("/")}.gif`, new Promise(T => {
                    m.onload = () => T(!0), m.onerror = () => T(!1)
                })
            }
        }
        class xn extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 3)
            }
            async match() {
                const n = this.trigger;
                return n.parameters.triggerInterval > 0 && await new Promise(a => setTimeout(a, n.parameters.triggerInterval)), !0
            }
        }
        class $n extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 3)
            }
            async match() {
                return new Promise(n => {
                    const a = f => {
                        f.clientY < 3 && (window.removeEventListener("mouseleave", a), n(!0))
                    };
                    document.addEventListener("mouseleave", a)
                })
            }
        }

        function An(c, r, n) {
            if (c == null) return !1;
            const a = String(c.trim()),
                f = String(n.trim());
            switch (r) {
                case "equals":
                    return a === f;
                case "not_equals":
                    return a !== f;
                case "contains":
                    return a.includes(f);
                case "not_contains":
                    return !a.includes(f);
                case "starts_with":
                    return a.startsWith(f);
                case "not_starts_with":
                    return !a.startsWith(f);
                case "ends_with":
                    return a.endsWith(f);
                case "not_ends_with":
                    return !a.endsWith(f);
                case "regexp":
                    try {
                        return new RegExp(f).test(a)
                    } catch {
                        return !1
                    }
                case "not_regexp":
                    try {
                        return !new RegExp(f).test(a)
                    } catch {
                        return !1
                    }
                default:
                    return !1
            }
        }
        class Nn extends de {
            constructor() {
                super(...arguments);
                I(this, "complexity", 1)
            }
            async match() {
                return this.trigger.conditions.every(a => {
                    const f = a.actual === "PageUrl" ? window.location.href : document.referrer;
                    return An(f, a.comparison, a.expected)
                })
            }
        }
        const On = new Map([
            ["AllElementsClick", hn],
            ["Anonymous", mn],
            ["CustomEvent", pn],
            ["DateInterval", wn],
            ["HideAfterSubmission", bn],
            ["LimitOnceDay", _n],
            ["LimitOnceLifetime", yn],
            ["LimitOncePage", Cn],
            ["PageView", kn],
            ["ScrollReach", Tn],
            ["Segment", En],
            ["Timer", xn],
            ["WindowLeave", $n],
            ["WindowLoaded", Nn]
        ]);

        function In(c) {
            const r = On.get(c.type);
            if (!r) throw new Error(`Trigger ${c.type} not found`);
            return new r(c)
        }
        class Ue {
            constructor(r) {
                I(this, "canRetrigger", !1);
                I(this, "config");
                I(this, "logger");
                this.config = r, this.logger = gn.clone(`[${r.type}:${r.id}]`)
            }
            getSubscriber() {
                return $e.getSubscriber()
            }
            setSubscriber(r) {
                $e.setSubscriber(r)
            }
            async render() {
                throw new Error('Method "render" must be implemented.')
            }
            async shouldRender() {
                var a;
                if (!((a = this.config.triggers) != null && a.triggers.length)) return !0;
                let r = !1;
                const n = this.config.triggers.triggers.map(f => ({
                    name: f.type,
                    trigger: In(f)
                })).sort((f, p) => f.trigger.condition !== p.trigger.condition ? f.trigger.condition ? -1 : 1 : f.trigger.complexity - p.trigger.complexity);
                this.logger.title(`triggers '${this.config.triggers.triggerCondition}'`);
                for (const {
                        name: f,
                        trigger: p
                    } of n) {
                    const m = await p.match(this.config);
                    if (this.logger.debug(m ? `🟢 ${f}` : `🔴 ${f}`, {
                            trigger: p
                        }), !m && (this.config.triggers.triggerCondition === "and" || p.condition)) {
                        r = !1;
                        break
                    }
                    if (m && this.config.triggers.triggerCondition === "or") {
                        r = !0;
                        break
                    }
                    r = m
                }
                return r ? (n.some(f => f.trigger.canRetrigger) && (this.canRetrigger = !0), n.forEach(({
                    trigger: f
                }) => {
                    f.triggered && f.triggered(this.config)
                })) : this.canRetrigger = !1, r
            }
            initializeComponent(r) {
                const n = document.createElement(r);
                return n.config = this.config, document.body.appendChild(n), new Promise(a => {
                    n.addEventListener("close", () => (n.remove(), a(!0)))
                })
            }
            async append(r = 0) {
                this.logger.startGroup();
                let n = "🔵 skipped";
                try {
                    this.logger.title(`${this.config.type} tag - ${this.config.id}`), this.logger.debug(this.config), this.logger.debug("subscriber", this.getSubscriber()), await this.shouldRender() && (await this.render(), n = `🟢 triggered ${r?`${r+1} times`:""}`)
                } catch (a) {
                    this.logger.error(a.message), n = `🔴 ${a.message.replace("Error: ","")}`
                } finally {
                    this.logger.endGroup(n), this.canRetrigger && new Promise(a => setTimeout(a, 100)).then(() => this.append(r + 1))
                }
            }
        }
        class Ln extends Ue {
            async render() {
                if (!this.config.data.hash) throw new Error("Hash is required");
                if (document.getElementById(`c2c-${this.config.data.hash}`)) return !1;
                window._egoic2cf || (window._egoic2cf = {}), window._egoic2cf.code = this.config.data.hash;
                const r = document.createElement("script");
                return r.type = "text/javascript", r.defer = !0, r.async = !0, r.id = `c2c-${this.config.data.hash}`, r.src = pt.c2c, document.body.appendChild(r), !1
            }
        }
        class Pn {
            constructor() {
                I(this, "trackingParams", ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "msclkid", "fbclid"]);
                I(this, "params", new Map);
                for (const [a, f] of new URLSearchParams(document.location.search).entries())(a.startsWith("eg_") || this.trackingParams.includes(a)) && f && this.params.set(a, f);
                const r = this.egGetParamsCookie();
                r && Object.entries(r).forEach(([a, f]) => this.params.set(a, f));
                const n = encodeURIComponent(document.referrer);
                n && !this.params.has("referrer") && this.params.set("referrer", n), this.egSetParamsCookie(this.params)
            }
            egGetParamsCookie() {
                let r = document.cookie.split(";").find(n => n.includes("eg_params"));
                return r && (r = r.trim().replace("eg_params=", "")), JSON.parse(r || "{}")
            }
            egSetParamsCookie(r) {
                const n = location.hostname.split("."),
                    a = n.length > 2 ? n.slice(-2).join(".") : location.hostname,
                    f = new Date;
                f.setDate(f.getDate() + 90), document.cookie = `eg_params=${JSON.stringify(Object.fromEntries(r))};expires=${f.toUTCString()};path=/;domain=.${a};SameSite=None;Secure;`
            }
            appendToUrl(r) {
                const n = new URL(r);
                return this.params.forEach((a, f) => {
                    n.searchParams.set(f, a)
                }), n.toString()
            }
        }
        const Rn = new Pn,
            Vn = /[0-9a-f]{10}/i;

        function Bi(c, r, n) {
            const a = $e.getSubscriber();
            let f = Rn.appendToUrl(c);
            n && a && Vn.test(a) && r && c.includes(r) && (f = f.replace(r, `${r}e${a}`));
            const p = new URL(f);
            return p.searchParams.set("egParentWidth", String(window.innerWidth)), p.toString()
        }
        class Wi {
            constructor(r) {
                I(this, "url");
                I(this, "hash");
                I(this, "title");
                this.config = r;
                for (const n of ["url", "hash"])
                    if (!this.config.data[n]) throw new Error(`Missing attributes for embed (${n})`);
                this.url = this.config.data.url, this.hash = this.config.data.hash, this.title = this.config.data.title
            }
            append(r) {
                if (r.getAttribute("data-triggered") === "true") return;
                r.setAttribute("data-triggered", "true");
                const n = Bi(this.url, this.hash, this.config.data.smartform),
                    a = document.createElement("iframe");
                a.src = n, a.title = this.title, a.scrolling = "no", a.style.overflow = "hidden", a.style.width = "100%", a.style.border = "none", r.appendChild(a)
            }
            render() {
                window.addEventListener("message", n => {
                    var a, f;
                    if ((f = (a = n == null ? void 0 : n.data) == null ? void 0 : a.name) != null && f.includes("egoi-submission-form") && n.data.subscriber && $e.setSubscriber(n.data.subscriber, this.hash), n.data.egEmbedHeight) {
                        const p = Array.from(document.querySelectorAll("iframe")).find(m => m.contentWindow === n.source);
                        p && (p.style.height = n.data.egEmbedHeight)
                    }
                    if (n.data.action === "closeModal" && n.data.hash === this.hash) {
                        const p = document.querySelector(`.eg-embed-${this.hash}`);
                        p && (p.style.display = "none")
                    }
                }), new MutationObserver(() => {
                    const n = `eg-embed-${this.hash}`;
                    document.querySelectorAll(`.${n}:not([data-triggered="true"])`).forEach(f => this.append(f))
                }).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }), document.querySelectorAll(`.eg-embed-${this.hash}`).forEach(n => this.append(n))
            }
        }
        class qn extends Ue {
            async render() {
                return new Wi(this.config).render(), !1
            }
        }
        class Dn {
            init() {
                const r = {
                    add_cart(n) {
                        n.products.forEach(function(f) {
                            _egoiaq.push(["addEcommerceItem", f.product_id.toString(), f.name, "", f.price, f.qty])
                        });
                        const a = window.location.pathname.split("/");
                        a.includes("checkout") && a.includes("return") ? _egoiaq.push(["trackEcommerceOrder", n.id.toString(), n.total, n.subtotal, n.tax, n.shiping, n.discount]) : _egoiaq.push(["trackEcommerceCartUpdate", n.total])
                    },
                    start_tracking(n) {
                        n && _egoiaq.push(["setSubscriber", n]), _egoiaq.push(["trackPageView"]), Jumpseller && Jumpseller.isDefined("getCart") && Jumpseller.getCart({
                            callback: r.add_cart
                        }), Jumpseller && Jumpseller.isDefined("getCurrentProductInfo") && Jumpseller.getCurrentProductInfo({
                            callback: r.add_product_view_callbakc
                        })
                    },
                    get_email() {
                        jQuery.ajax({
                            url: "/customer/edit",
                            type: "GET",
                            dataType: "html",
                            success: function(n) {
                                let a = jQuery("<output>").append(jQuery.parseHTML(n)),
                                    f = jQuery("#customer_email", a).val();
                                f ? r.start_tracking(f) : r.fetchEmailFromCartOrOrder()
                            },
                            error: function(n) {
                                r.fetchEmailFromCartOrOrder()
                            }
                        })
                    },
                    fetchEmailFromCartOrOrder() {
                        Jumpseller && Jumpseller.isDefined("getCart") ? Jumpseller.getCart({
                            callback: r.start_tracking_email_from_order_callback
                        }) : r.start_tracking(null)
                    },
                    add_product_view_callbakc(n) {
                        n.status && n.status == 404 || r.add_product_view(n)
                    },
                    add_product_view(n) {
                        _egoiaq.push(["setEcommerceView", n.id.toString(), n.name, n.categories, n.price]), _egoiaq.push(["trackPageView"])
                    },
                    start_tracking_email_from_order_callback(n) {
                        !n.customer || !n.customer.email ? r.start_tracking(null) : r.start_tracking(n.customer.email)
                    }
                };
                r.get_email()
            }
        }
        class Fn {
            init() {
                if (typeof LS > "u") return;
                (function() {
                    let n, a = 0,
                        f = 0;
                    const p = 3;
                    let m = () => {
                            typeof Storage > "u" || (localStorage.getItem("user") == null || localStorage.getItem("user_id") == null || LS.customer != null && LS.customer !== "undefined" && localStorage.getItem("user_id") != LS.customer ? A() : (n = localStorage.getItem("user"), a++), x())
                        },
                        T = y => {
                            localStorage.setItem("user", y.email), localStorage.setItem("user_id", y.id), n = localStorage.getItem("user"), a++
                        },
                        b = (y, B) => {
                            let C = "//goidini.e-goi.com/cgi/api_nuvemshop.php?";
                            for (let w in y) C += w + "=" + y[w] + "&";
                            fetch(C).then(w => w.json()).then(B)
                        },
                        A = () => {
                            typeof LS.store > "u" || typeof LS.customer > "u" || LS.customer == null || b({
                                _storeid: LS.store.id,
                                customer_id: LS.customer
                            }, T)
                        },
                        x = () => a < 2 && f < p ? (f++, setTimeout(function() {
                            x()
                        }, 500), !1) : (function() {
                            f <= p && n !== "" && _egoiaq.push(["setSubscriber", n]), _egoiaq.push(["setCustomUrl", window.location.href]), _egoiaq.push(["trackPageView"])
                        }(), v(), O(), !0),
                        v = () => {
                            typeof LS.product > "u" || (_egoiaq.push(["setEcommerceView", LS.product.id.toString(), LS.product.name, LS.product.tags, 0]), _egoiaq.push(["setCustomUrl", window.location.href]), _egoiaq.push(["trackPageView"]))
                        },
                        O = () => {
                            typeof LS.cart > "u" || LS.cart.id === null || typeof LS.cart.items > "u" || LS.cart.items.length == 0 || (LS.cart.items.forEach(function(y) {
                                _egoiaq.push(["addEcommerceItem", y.letiant_id ? y.letiant_id.toString() : y.id.toString(), y.name, "", parseFloat(y.unit_price * .01).toFixed(2), y.quantity])
                            }), N())
                        },
                        N = () => {
                            if (typeof LS.order > "u") _egoiaq.push(["trackEcommerceCartUpdate", parseFloat(LS.cart.subtotal * .01).toFixed(2)]);
                            else {
                                let y = "_egoiaq_oid_" + LS.order.id.toString();
                                (!localStorage || !localStorage.getItem(y)) && (localStorage && localStorage.setItem(y, "true"), _egoiaq.push(["trackEcommerceOrder", LS.order.id.toString(), parseFloat(LS.order.total * .01).toFixed(2), parseFloat(LS.order.total * .01).toFixed(2), 0, 0, parseFloat(LS.order.discount * .01).toFixed(2)]))
                            }
                        };
                    m()
                })()
            }
        }
        class jn {
            checkCart() {
                fetch("/cart.js").then(function(r) {
                    return r.json()
                }).then(function(r) {
                    r.item_count && r.item_count > 0 && (r.items.forEach(n => {
                        window._egoiaq.push(["addEcommerceItem", n.product_id ? n.product_id.toString() : n.id.toString(), n.product_title, "", (n.price * .01).toFixed(2), n.quantity])
                    }), window._egoiaq.push(["trackEcommerceCartUpdate", (r.total_price * .01).toFixed(2)]))
                }).catch(() => {})
            }
            checkProductView() {
                var r, n, a, f;
                (a = (n = (r = window.ShopifyAnalytics) == null ? void 0 : r.meta) == null ? void 0 : n.product) != null && a.id && ((f = window.ShopifyAnalytics.meta.product.variants) == null ? void 0 : f.length) > 0 && (window._egoiaq.push(["setEcommerceView", window.ShopifyAnalytics.meta.product.id.toString(), window.ShopifyAnalytics.meta.product.variants[0].name, "", (window.ShopifyAnalytics.meta.product.variants[0].price * .01).toFixed(2)]), window._egoiaq.push(["trackPageView"]))
            }
            init() {
                this.checkCart(), this.checkProductView()
            }
        }
        class Hn {
            init() {
                const r = f => {
                        fetch(`/mvc/store/cart/count?loja=${f.id}&hash=${new Date().getTime()}`, {
                            headers: {
                                Accept: "application/json"
                            }
                        }).then(p => p.json()).then(p => {
                            if (!p || !p.cart || !p.cart.Products) return;
                            let m = 0;
                            p.cart.Products.forEach(T => {
                                console.log(T), _egoiaq.push(["addEcommerceItem", T.Variant ? T.Variant.id.toString() : T.id.toString(), T.name, "", parseFloat(T.price).toFixed(2), T.quantity]), m += parseFloat(T.price).toFixed(2) * T.quantity
                            }), _egoiaq.push(["trackEcommerceCartUpdate", parseFloat(m).toFixed(2)])
                        })
                    },
                    n = () => {
                        let p = document.getElementById("pageview-script").getAttribute("data-product-id");
                        p && (_egoiaq.push(["setEcommerceView", p.toString()]), _egoiaq.push(["trackPageView"]))
                    };
                (() => {
                    const f = window.store ? ? window.storeData;
                    !f || !f.id || fetch(`/mvc/store/greeting?loja=${f.id}`, {
                        headers: {
                            Accept: "application/json"
                        }
                    }).then(p => p.json()).then(p => {
                        !p.data || !p.data.email || _egoiaq.push(["setSubscriber", p.data.email])
                    }).then(() => {
                        n(), r(f)
                    })
                })()
            }
        }
        class Un {
            init() {
                const r = "key_egoi_data",
                    n = "key_egoi_client",
                    a = "key_te_data";

                function f() {
                    let y = document.cookie.match("_pk_id\\.[0-9]+\\.");
                    if (!y || y.length === 0) return;
                    const B = y[0].replace("_pk_id.", "").slice(0, -1);
                    x(n, B, 30)
                }
                async function p() {
                    f(), b();
                    const y = await T();
                    y ? window._egoiaq.push(["setSubscriber", y]) : v(r) !== "" ? window._egoiaq.push(["setSubscriber", v(r)]) : v(a) !== "" && window._egoiaq.push(["setSubscriber", v(a)]), window._egoiaq.push(["setCustomUrl", window.location.href]), window._egoiaq.push(["setTrackerUrl", "https://egoimmerce.e-goi.com/collect"]), window._egoiaq.push(["trackPageView"])
                }

                function m() {
                    typeof Fbits > "u" || !A(Fbits.Carrinho) || !Array.isArray(Fbits.Carrinho.Produtos) || !A(Fbits.Carrinho.Pedido) || Fbits.Carrinho.Pedido._fechando !== !1 || (Fbits.Carrinho.Produtos.forEach(function(y) {
                        window._egoiaq.push(["addEcommerceItem", y.ProdutoVarianteId ? y.ProdutoVarianteId.toString() : y.ProdutoId.toString(), y.Nome, y.Categoria, parseFloat(y.PrecoPor).toFixed(2), y.Quantidade])
                    }), window._egoiaq.push(["trackEcommerceCartUpdate", parseFloat(Fbits.Carrinho.ValorTotal).toFixed(2)]))
                }
                async function T() {
                    return typeof Fbits < "u" && A(Fbits.Usuario) && Fbits.Usuario.Email && Fbits.Usuario.Email !== "undefined" ? (x(r, Fbits.Usuario.Email, 30), Fbits.Usuario.Email) : typeof client < "u" && client.user && typeof client.user.get == "function" ? client.user.get().then(y => y && y.email && y.email !== "undefined" ? (x(r, y.email, 30), y.email) : null).catch(() => null) : null
                }

                function b() {
                    const y = location.search.split("eg_sub=")[1];
                    if (!y || y === "undefined") return;
                    const B = y.split("&")[0];
                    x(a, B, 30)
                }

                function A(y) {
                    return typeof y == "object" && y !== null
                }

                function x(y, B, C) {
                    const w = new Date;
                    w.setTime(w.getTime() + C * 24 * 60 * 60 * 1e3);
                    let H = "expires=" + w.toUTCString();
                    const Y = O(document.location.origin),
                        Q = `${y}=${B};${H};path=/;domain=${Y}`;
                    document.cookie = Q
                }

                function v(y) {
                    let B = y + "=",
                        w = decodeURIComponent(document.cookie).split(";");
                    for (let H = 0; H < w.length; H++) {
                        let Y = w[H].trim();
                        if (Y.indexOf(B) === 0) return Y.substring(B.length, Y.length)
                    }
                    return ""
                }

                function O(y) {
                    const B = new URL(y).hostname,
                        C = B.split(".");
                    return C.length >= 3 ? C.slice(-3).join(".") : (C.length === 2, B)
                }

                function N() {
                    p().then(m)
                }
                document.readyState === "complete" ? N() : (window.addEventListener("load", N, !1), document.addEventListener("DOMContentLoaded", N))
            }
        }
        class Mn {
            init() {
                let r = function() {
                        typeof vtexjs < "u" && typeof vtexjs.catalog < "u" && typeof vtexjs.catalog.getCurrentProductWithVariations() < "u" && vtexjs.catalog.getCurrentProductWithVariations().done(function(v) {
                            m(f(v))
                        })
                    },
                    n = function(v) {
                        let O = a(v, !0);
                        localStorage.setItem("egoi_cart", JSON.stringify({
                            email: O.email,
                            items: O.items,
                            order: O.order,
                            send: O.send
                        })), p(a(v)), $(window).on("checkoutRequestEnd.vtex", function(N, y) {
                            p(a(y)), localStorage.setItem("egoi_cart", JSON.stringify({}))
                        })
                    },
                    a = function(v, O = !1) {
                        let N = [];
                        typeof v.id < "u" && (O = !0), N.send = O;
                        let y = 0,
                            B = 0;
                        return v.clientProfileData != null ? N.email = v.clientProfileData.email != "undefined" ? v.clientProfileData.email : "" : N.email = "", v.items && v.items != "undefined" && v.items.length != 0 && (N.items = [], v.items.forEach(function(C, w) {
                            var Y;
                            let H = {};
                            if (H.sku = C.id != "undefined" ? C.id : C.productId, H.product_name = C.name != "undefined" ? C.name : "", H.product_cat = [], (Y = C == null ? void 0 : C.productCategories) != null && Y.length)
                                for (key in C.productCategories) C.productCategories.hasOwnProperty(key) && H.product_cat.push(C.productCategories[key]);
                            H.product_price = C.price != "undefined" ? C.price * .01 : 0, H.product_quantity = C.quantity != "undefined" ? C.quantity : 0, B += H.product_price * H.product_quantity, y += C.tax != "undefined" ? C.tax * .01 : 0, N.items.push(H)
                        })), N.order = {}, O ? (N.order.order_id = v.orderFormId != "undefined" ? v.orderFormId : 0, N.order.order_total = v.value != "undefined" ? v.value * .01 : 0, N.order.order_tax = y, N.order.order_subtotal = 0, N.order.order_discount = 0, N.order.order_shiping = 0, v.totalizers != "undefined" && v.totalizers.length > 0 && v.totalizers.forEach(function(C) {
                            N.order.order_subtotal += C.id == "Items" ? C.value * .01 : 0, N.order.order_discount += C.id == "Discounts" ? C.value * -.01 : 0, N.order.order_shiping += C.id == "Shipping" ? C.value * .01 : 0
                        }), N) : (N.order.order_total = v.value != "undefined" ? v.value * .01 : 0, N)
                    },
                    f = function(v) {
                        let O = {};
                        return O.sku = v.id !== void 0 ? v.id : v.productId, O.product_name = v.name !== void 0 ? v.name : "", O.product_cat = "", O.product_price = v.skus.length > 0 ? v.skus[0].bestPrice * .01 : 0, O
                    },
                    p = function(v) {
                        v.items && v.items.length != 0 && (v.items.forEach(function(O) {
                            window._egoiaq.push(["addEcommerceItem", O.sku.toString(), O.product_name, O.product_cat, parseFloat(O.product_price).toFixed(2), O.product_quantity])
                        }), v.send || window._egoiaq.push(["trackEcommerceCartUpdate", parseFloat(v.order.order_total).toFixed(2)]), window._egoiaq.push(["trackPageView"]))
                    },
                    m = function(v) {
                        v.sku && (window._egoiaq.push(["setEcommerceView", v.sku.toString(), v.product_name, v.product_cat, parseFloat(v.product_price).toFixed(2)]), window._egoiaq.push(["trackPageView"]))
                    },
                    T = function() {
                        if (!(typeof Storage > "u"))
                            if (!localStorage.getItem("egoi_user") || localStorage.getItem("egoi_user") == null || localStorage.getItem("egoi_user") == "null") setTimeout(function() {
                                b()
                            }, 0);
                            else if (r(), typeof vtexjs > "u" || typeof vtexjs.checkout > "u" || typeof vtexjs.checkout.getOrderForm() > "u") {
                            let v = window.location.pathname.split("/");
                            v.includes("checkout") && v.includes("orderPlaced") && p(JSON.parse(localStorage.getItem("egoi_cart")))
                        } else vtexjs.checkout.getOrderForm().then(function(v) {
                            n(v)
                        })
                    },
                    b = function() {
                        if (typeof vtexjs > "u" || typeof vtexjs.checkout > "u" || typeof vtexjs.checkout.getOrderForm() > "u") {
                            setTimeout(function() {
                                r()
                            }, 2e3);
                            return
                        }
                        vtexjs.checkout.getOrderForm().then(function(v) {
                            if (v.clientProfileData == null || typeof v.clientProfileData.email > "u") {
                                setTimeout(function() {
                                    r()
                                }, 2e3), n(v);
                                return
                            } else localStorage.setItem("egoi_user", v.clientProfileData.email), setTimeout(function() {
                                r()
                            }, 2e3), n(v)
                        })
                    };
                (function(v) {
                    document.readyState === "interactive" || document.readyState === "complete" ? v() : document.addEventListener("DOMContentLoaded", v)
                })(function() {
                    setTimeout(function() {
                        T()
                    }, 0)
                });
                let x = history.pushState;
                history.pushState = function() {
                    x.apply(history, arguments), setTimeout(function() {
                        T()
                    }, 0)
                }
            }
        }
        class Bn extends Ue {
            async render() {
                switch (this.config.id) {
                    case "jumpseller":
                        new Dn().init();
                        break;
                    case "nuvem":
                        new Fn().init();
                        break;
                    case "shopify":
                        new jn().init();
                        break;
                    case "tray":
                        new Hn().init();
                        break;
                    case "tray-corp":
                        new Un().init();
                        break;
                    case "vtex":
                        new Mn().init();
                        break;
                    default:
                        throw new Error(`Invalid integrated tag: ${this.config.id}`)
                }
                return !1
            }
        }
        class Wn extends Ue {
            async render() {
                switch (this.config.data.type) {
                    case "embed":
                        return new Wi(this.config).render(), !1;
                    case "slider":
                        return this.initializeComponent("eg-connected-slider");
                    default:
                        return this.initializeComponent("eg-connected-modal")
                }
            }
        }
        class zn extends Ue {
            async render() {
                return this.initializeComponent("eg-connected-modal")
            }
        }
        class Jn extends Ue {
            async render() {
                if (!this.config.data.code) throw new Error("Code is required");
                if (document.getElementById(`webpush-${this.config.data.code}`)) return !1;
                window._egoiwp || (window._egoiwp = {}), window._egoiwp.code = this.config.data.code;
                const r = document.createElement("script");
                return r.type = "text/javascript", r.defer = !0, r.async = !0, r.id = `webpush-${this.config.data.code}`, r.src = `${pt.assets}/webpush.js`, document.body.appendChild(r), !1
            }
        }
        class Gn extends Ue {
            async render() {
                if (!this.config.data.hash) throw new Error("Hash is required");
                if (document.getElementById(`whatsapp-${this.config.data.hash}`)) return !1;
                window._egoiwf || (window._egoiwf = {}), window._egoiwf.code = this.config.data.hash;
                const r = document.createElement("script");
                return r.type = "text/javascript", r.defer = !0, r.async = !0, r.id = `whatsapp-${this.config.data.hash}`, r.src = `${pt.assets}/whatsapp/js/whatsapp.js`, document.body.appendChild(r), !1
            }
        }
        const Zn = new Map([
            ["clicktocall", Ln],
            ["embed", qn],
            ["integrated", Bn],
            ["onsite", Wn],
            ["popup", zn],
            ["webpush", Jn],
            ["whatsapp", Gn]
        ]);

        function Xn(c) {
            const r = Zn.get(c.type);
            if (!r) throw new Error(`Tag ${c.type} not found`);
            return new r(c)
        }

        function Kn(c) {
            Fi(c, "svelte-5857j1", `.modal-container.svelte-5857j1{display:none;position:fixed;z-index:99998;left:0;top:0;align-items:center;justify-content:center;width:100%;height:100%;overflow:auto;pointer-events:none;&.fullscreen .content {
            width: 95% !important;
        };&.banner .content {
            max-width: 100%;
        };&.bottom,
        &.top {
            & .content {
                min-height: 100px;
                max-height: 50vh;
                /* override modal and sidebar styles to fill content */
                width: 100% !important;
                max-width: 100% !important;
                & iframe {
                    max-height: 50vh !important;
                }
            }
        };&.left {
            justify-content: flex-start;
            align-items: flex-start;
        };&.right {
            justify-content: flex-end;
            align-items: flex-start;
        };&.bottom {
            justify-content: center;
            align-items: flex-end;
        };&.top {
            justify-content: center;
            align-items: flex-start;
        }}.backdrop.svelte-5857j1{position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.4);pointer-events:auto;&.hide {
            background-color: transparent;
            pointer-events: none;
        }}.content.svelte-5857j1{position:relative;pointer-events:auto;max-width:95%}iframe.svelte-5857j1{width:100%;border:none;display:block;min-height:100px;max-height:95vh;max-height:95dvh;scrollbar-width:none;-ms-overflow-style:none}.close-btn.svelte-5857j1{position:absolute;cursor:pointer;background:transparent;border:0;opacity:0.8;border-radius:50%;margin:10px;right:0;top:0;line-height:0}`)
        }

        function Yn(c) {
            var B;
            let r, n, a, f, p, m = ((B = c[0].data.appearance) == null ? void 0 : B.closeButton) + "",
                T, b, A, x, v, O, N, y;
            return {
                c() {
                    r = oe("div"), n = oe("div"), a = Xe(), f = oe("div"), p = oe("button"), T = Xe(), b = oe("iframe"), P(n, "class", "backdrop svelte-5857j1"), Yt(n, "hide", !c[6]), P(p, "class", "close-btn svelte-5857j1"), P(p, "aria-label", "Close"), P(b, "scrolling", c[5]), At(b.src, A = c[2]) || P(b, "src", A), P(b, "referrerpolicy", "no-referrer-when-downgrade"), P(b, "title", x = c[0].data.title ? ? "Modal"), P(b, "class", "svelte-5857j1"), P(f, "class", "content svelte-5857j1"), lt(f, "width", c[1]), P(f, "role", "dialog"), P(f, "aria-modal", "true"), P(r, "id", v = "eg-" + c[0].type + "-container-" + c[0].id), P(r, "class", O = "modal-container " + c[7] + " " + c[0].data.type + " svelte-5857j1")
                },
                m(C, w) {
                    Ze(C, r, w), K(r, n), K(r, a), K(r, f), K(f, p), p.innerHTML = m, K(f, T), K(f, b), c[9](b), c[10](r), N || (y = [Nt(n, "click", c[8]), Nt(p, "click", c[8])], N = !0)
                },
                p(C, [w]) {
                    var H;
                    w & 64 && Yt(n, "hide", !C[6]), w & 1 && m !== (m = ((H = C[0].data.appearance) == null ? void 0 : H.closeButton) + "") && (p.innerHTML = m), w & 32 && P(b, "scrolling", C[5]), w & 4 && !At(b.src, A = C[2]) && P(b, "src", A), w & 1 && x !== (x = C[0].data.title ? ? "Modal") && P(b, "title", x), w & 2 && lt(f, "width", C[1]), w & 1 && v !== (v = "eg-" + C[0].type + "-container-" + C[0].id) && P(r, "id", v), w & 129 && O !== (O = "modal-container " + C[7] + " " + C[0].data.type + " svelte-5857j1") && P(r, "class", O)
                },
                i: ae,
                o: ae,
                d(C) {
                    C && He(r), c[9](null), c[10](null), N = !1, Ge(y)
                }
            }
        }

        function Qn(c, r, n) {
            let {
                config: a
            } = r, f = "600px", p = "", m, T, b = "no", A = !0, x = "";

            function v() {
                var C, w, H, Y;
                switch (a.data.type) {
                    case "modal":
                        (C = a.data.appearance) != null && C.width && n(1, f = `${a.data.appearance.width}px`);
                        break;
                    case "bar":
                        (w = a.data.appearance) != null && w.position && (n(6, A = !1), n(7, x = a.data.appearance.position)), (H = a.data.appearance) != null && H.width && n(1, f = `${a.data.appearance.width}px`);
                        break;
                    case "banner":
                        (Y = a.data.appearance) != null && Y.position && (n(6, A = !1), n(7, x = a.data.appearance.position)), n(1, f = "100%");
                        break
                }
            }

            function O(C) {
                var w, H;
                if (C.source === m.contentWindow) {
                    if (C.data.egEmbedHeight) {
                        n(3, m.style.height = C.data.egEmbedHeight, m);
                        const Y = parseFloat(C.data.egEmbedHeight) <= m.offsetHeight;
                        n(5, b = Y ? "no" : "yes")
                    }(H = (w = C.data) == null ? void 0 : w.name) != null && H.includes("egoi-submission-form") && C.data.subscriber && $e.setSubscriber(C.data.subscriber, a.data.hash), C.data.action == "closeModal" && N()
                }
            }

            function N() {
                T.dispatchEvent(new CustomEvent("close", {
                    bubbles: !0,
                    composed: !0
                }))
            }
            Qt(() => {
                v(), window.addEventListener("message", O), n(3, m.onload = () => {
                    n(4, T.style.display = "flex", T)
                }, m), a.data.url && n(2, p = Bi(a.data.url, a.data.hash, a.data.smartform))
            }), Qr(() => {
                window.removeEventListener("message", O)
            });

            function y(C) {
                ht[C ? "unshift" : "push"](() => {
                    m = C, n(3, m)
                })
            }

            function B(C) {
                ht[C ? "unshift" : "push"](() => {
                    T = C, n(4, T)
                })
            }
            return c.$$set = C => {
                "config" in C && n(0, a = C.config)
            }, [a, f, p, m, T, b, A, x, N, y, B]
        }
        class eo extends oi {
            constructor(r) {
                super(), ri(this, r, Qn, Yn, Xt, {
                    config: 0
                }, Kn)
            }
            get config() {
                return this.$$.ctx[0]
            }
            set config(r) {
                this.$$set({
                    config: r
                }), mt()
            }
        }
        customElements.define("eg-connected-modal", ni(eo, {
            config: {}
        }, [], [], !0));

        function to(c) {
            Fi(c, "svelte-1b1tvrd", `.slider.svelte-1b1tvrd{display:flex;position:fixed;z-index:999999999999999999;width:360px;padding:10px;animation:svelte-1b1tvrd-slide-in 0.5s forwards}@keyframes svelte-1b1tvrd-slide-in{100%{transform:translateX(0%)}}.grid-container.svelte-1b1tvrd{display:grid;grid-template-areas:'myArea myArea icon'
            'myArea myArea icon'
            'image image image';&.has-link {
            cursor: pointer;
        }}.description.svelte-1b1tvrd{grid-area:myArea;text-align:left}.icon.svelte-1b1tvrd{grid-area:icon;height:50px;margin:5px auto}.image.svelte-1b1tvrd{grid-area:image}.title.svelte-1b1tvrd{font-size:15px}.message.svelte-1b1tvrd{font-size:13px}.icon-img.svelte-1b1tvrd{height:50px;width:50px}.image-img.svelte-1b1tvrd{width:100%;padding-top:10px}.close-btn.svelte-1b1tvrd{position:absolute;cursor:pointer;opacity:0.8;margin:10px;right:0;top:0;line-height:0;background-color:transparent;border:0}`)
        }

        function io(c) {
            let r, n, a = c[2].title + "",
                f, p, m, T = c[2].message + "",
                b;
            return {
                c() {
                    r = oe("div"), n = oe("p"), f = Kt(a), p = Xe(), m = oe("p"), b = Kt(T), P(n, "class", "title svelte-1b1tvrd"), lt(n, "color", c[2].titleColor), P(m, "class", "message svelte-1b1tvrd"), lt(m, "color", c[2].messageColor), P(r, "class", "description svelte-1b1tvrd")
                },
                m(A, x) {
                    Ze(A, r, x), K(r, n), K(n, f), K(r, p), K(r, m), K(m, b)
                },
                p: ae,
                d(A) {
                    A && He(r)
                }
            }
        }

        function ro(c) {
            let r, n, a;
            return {
                c() {
                    r = oe("div"), n = oe("img"), At(n.src, a = c[2].icon) || P(n, "src", a), P(n, "alt", "icon"), P(n, "class", "icon-img svelte-1b1tvrd"), P(r, "class", "icon svelte-1b1tvrd")
                },
                m(f, p) {
                    Ze(f, r, p), K(r, n)
                },
                p: ae,
                d(f) {
                    f && He(r)
                }
            }
        }

        function no(c) {
            let r, n, a;
            return {
                c() {
                    r = oe("div"), n = oe("img"), At(n.src, a = c[2].image) || P(n, "src", a), P(n, "alt", "feature"), P(n, "class", "image-img svelte-1b1tvrd"), P(r, "class", "image svelte-1b1tvrd")
                },
                m(f, p) {
                    Ze(f, r, p), K(r, n)
                },
                p: ae,
                d(f) {
                    f && He(r)
                }
            }
        }

        function oo(c) {
            let r, n, a, f, p, m, T, b, A, x = (c[2].title || c[2].message) && io(c),
                v = c[2].icon && ro(c),
                O = c[2].image && no(c);
            return {
                c() {
                    r = oe("div"), n = oe("button"), n.innerHTML = '<svg width="16" height="16" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.28037 1.46356C2.43181 0.756429 1.17069 0.871077 0.463557 1.71963C-0.243571 2.56819 -0.128923 3.82931 0.719631 4.53644L3.28037 1.46356ZM30.7196 29.5364C31.5682 30.2436 32.8293 30.1289 33.5364 29.2804C34.2436 28.4318 34.1289 27.1707 33.2804 26.4636L30.7196 29.5364ZM0.719631 4.53644L15.7196 17.0364L18.2804 13.9636L3.28037 1.46356L0.719631 4.53644ZM15.7196 17.0364L30.7196 29.5364L33.2804 26.4636L18.2804 13.9636L15.7196 17.0364Z" fill="#000"></path><path d="M1.33451 27.2693C0.522486 28.0192 0.471142 29.2846 1.21983 30.0958C1.96851 30.9069 3.23372 30.9566 4.04574 30.2067L1.33451 27.2693ZM32.6655 3.77765C33.4775 3.02779 33.5288 1.76235 32.7802 0.951214C32.0315 0.140081 30.7663 0.0904142 29.9542 0.840281L32.6655 3.77765ZM4.04574 30.2067L18.3556 16.9922L15.6444 14.0548L1.33451 27.2693L4.04574 30.2067ZM18.3556 16.9922L32.6655 3.77765L29.9542 0.840281L15.6444 14.0548L18.3556 16.9922Z" fill="#000"></path></svg>', a = Xe(), f = oe("div"), x && x.c(), p = Xe(), v && v.c(), m = Xe(), O && O.c(), P(n, "class", "close-btn svelte-1b1tvrd"), P(n, "aria-label", "Close"), P(f, "class", "grid-container svelte-1b1tvrd"), lt(f, "font-family", c[2].textFont), P(f, "role", "presentation"), Yt(f, "has-link", !!c[2].link), P(r, "id", T = "slider-" + c[0].data.hash), P(r, "class", "slider svelte-1b1tvrd"), P(r, "style", c[3](c[2].position) + " background-color: " + c[2].backgroundColor + ";")
                },
                m(N, y) {
                    Ze(N, r, y), K(r, n), K(r, a), K(r, f), x && x.m(f, null), K(f, p), v && v.m(f, null), K(f, m), O && O.m(f, null), c[6](r), b || (A = [Nt(n, "click", c[5]), Nt(f, "click", c[4])], b = !0)
                },
                p(N, [y]) {
                    (N[2].title || N[2].message) && x.p(N, y), N[2].icon && v.p(N, y), N[2].image && O.p(N, y), y & 1 && T !== (T = "slider-" + N[0].data.hash) && P(r, "id", T)
                },
                i: ae,
                o: ae,
                d(N) {
                    N && He(r), x && x.d(), v && v.d(), O && O.d(), c[6](null), b = !1, Ge(A)
                }
            }
        }

        function so() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
                let r = Math.random() * 16 | 0;
                return (c == "x" ? r : r & 3 | 8).toString(16)
            })
        }

        function ao(c, r, n) {
            let a, {
                config: f
            } = r;
            if (!f.data.slider) throw new Error("Slider configuration is missing!");
            let p = f.data.slider;
            const m = x => {
                    const v = {
                        BottomLeft: "bottom: 10px; left: 10px; transform: translateX(-100%);",
                        BottomRight: "bottom: 10px; right: 10px; transform: translateX(100%);",
                        TopLeft: "top: 10px; left: 10px; transform: translateX(-100%);",
                        TopRight: "top: 10px; right: 10px; transform: translateX(100%);"
                    };
                    return v[x] || v.BottomRight
                },
                T = () => {
                    if (!p.link) return;
                    const x = localStorage.getItem("visitId");
                    fetch(`${pt.url}/landingpage/click/${f.data.hash}/slider?visitId=${x}`, {
                        method: "POST",
                        body: JSON.stringify({
                            link: p.link
                        })
                    }), window.open(p.link)
                };

            function b() {
                a.dispatchEvent(new CustomEvent("close", {
                    bubbles: !0,
                    composed: !0
                }))
            }
            Qt(() => {
                localStorage.getItem("visitId") || localStorage.setItem("visitId", so()), fetch(`https://${pt.url}/landingpage/visit/${f.data.hash}/slider?visitId=${localStorage.getItem("visitId")}`)
            });

            function A(x) {
                ht[x ? "unshift" : "push"](() => {
                    a = x, n(1, a)
                })
            }
            return c.$$set = x => {
                "config" in x && n(0, f = x.config)
            }, [f, a, p, m, T, b, A]
        }
        class co extends oi {
            constructor(r) {
                super(), ri(this, r, ao, oo, Xt, {
                    config: 0
                }, to)
            }
            get config() {
                return this.$$.ctx[0]
            }
            set config(r) {
                this.$$set({
                    config: r
                }), mt()
            }
        }
        customElements.define("eg-connected-slider", ni(co, {
            config: {}
        }, [], [], !0));

        function uo(c, r, n) {
            let {
                data: a
            } = r;
            return Qt(() => {
                var f;
                sessionStorage.getItem("eg_connected_debug") === "true" && ((f = a == null ? void 0 : a.tags) != null && f.length ? console.log(`[eg] ${a.tags.length} tags configured`, a.tags) : console.log("[eg] No tags configured"));
                for (const p of a.tags) Xn(p).append()
            }), c.$$set = f => {
                "data" in f && n(0, a = f.data)
            }, [a]
        }
        class zi extends oi {
            constructor(r) {
                super(), ri(this, r, uo, null, Xt, {
                    data: 0
                })
            }
            get data() {
                return this.$$.ctx[0]
            }
            set data(r) {
                this.$$set({
                    data: r
                }), mt()
            }
        }
        ni(zi, {
                data: {}
            }, [], [], !0), typeof window._egoiaq != "object" && (window._egoiaq = []), typeof window.Egoimmerce != "object" && (window.Egoimmerce = function() {
                var c, r = {},
                    n = {},
                    a = document,
                    f = navigator,
                    p = screen,
                    m = window,
                    T = m.performance || m.mozPerformance || m.msPerformance || m.webkitPerformance,
                    b = m.encodeURIComponent,
                    A = m.decodeURIComponent,
                    x = [],
                    v, O, N = [];
                let y = [];

                function B(t) {
                    y.push(t), y.length === 1 && setTimeout(() => {
                        console.group("_egoiaq calls"), y.forEach(o => console.log(o)), console.groupEnd(), y = []
                    }, 1e3)
                }

                function C(t) {
                    try {
                        return A(t)
                    } catch {
                        return unescape(t)
                    }
                }

                function w(t) {
                    var o = typeof t;
                    return o !== "undefined"
                }

                function H(t) {
                    return typeof t == "function"
                }

                function Y(t) {
                    return typeof t == "object"
                }

                function Q(t) {
                    return typeof t == "string" || t instanceof String
                }

                function lo(t) {
                    if (!t) return !0;
                    var o, u = !0;
                    for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (u = !1);
                    return u
                }

                function ai(t) {
                    var o = typeof console;
                    o !== "undefined" && console && console.error && console.error(t)
                }

                function It() {
                    var t, o, u, h, d;
                    for (t = 0; t < arguments.length; t += 1) {
                        d = null, arguments[t] && arguments[t].slice && (d = arguments[t].slice()), h = arguments[t], u = h.shift();
                        var k, E, V = Q(u) && u.indexOf("::") > 0;
                        if (V) k = u.split("::"), E = k[0], u = k[1], typeof O[E] == "object" && typeof O[E][u] == "function" ? O[E][u].apply(O[E], h) : d && N.push(d);
                        else
                            for (o = 0; o < x.length; o++)
                                if (Q(u)) {
                                    E = x[o];
                                    var F = u.indexOf(".") > 0;
                                    if (F) {
                                        if (k = u.split("."), E && typeof E[k[0]] == "object") E = E[k[0]], u = k[1];
                                        else if (d) {
                                            N.push(d);
                                            break
                                        }
                                    }
                                    if (E[u]) sessionStorage.getItem("eg_connected_debug") === "true" && B([u, h[0], new Error().stack.split(`
`).filter(U => !U.includes("Error")).map(U => U.trim())]), E[u].apply(E, h);
                                    else {
                                        var q = "The method '" + u + `' was not found in "_egoiaq" variable.  Please have a look at the Egoimmerce tracker documentation: http://developer.piwik.org/api-reference/tracking-javascript`;
                                        if (ai(q), !F) throw new TypeError(q)
                                    }
                                    if (u === "addTracker" || u === "setTrackerUrl" || u === "setClientId") break
                                } else u.apply(x[o], h)
                    }
                }

                function pe(t, o, u, h) {
                    if (t.addEventListener) return t.addEventListener(o, u, h), !0;
                    if (t.attachEvent) return t.attachEvent("on" + o, u);
                    t["on" + o] = u
                }

                function wt(t) {
                    a.readyState === "complete" ? t() : m.addEventListener ? m.addEventListener("load", t) : m.attachEvent && m.attachEvent("onload", t)
                }

                function bt(t) {
                    var o = !1;
                    if (a.attachEvent ? o = a.readyState === "complete" : o = a.readyState !== "loading", o) {
                        t();
                        return
                    }
                    a.addEventListener ? pe(a, "DOMContentLoaded", function u() {
                        a.removeEventListener("DOMContentLoaded", u, !1), o || (o = !0, t())
                    }) : a.attachEvent && (a.attachEvent("onreadystatechange", function u() {
                        a.readyState === "complete" && (a.detachEvent("onreadystatechange", u), o || (o = !0, t()))
                    }), a.documentElement.doScroll && m === m.top && function u() {
                        if (!o) {
                            try {
                                a.documentElement.doScroll("left")
                            } catch {
                                setTimeout(u, 0);
                                return
                            }
                            o = !0, t()
                        }
                    }()), pe(m, "load", function() {
                        o || (o = !0, t())
                    }, !1)
                }

                function ci(t, o, u) {
                    if (!t) return "";
                    var h = "",
                        d, k, E, V;
                    for (d in r) Object.prototype.hasOwnProperty.call(r, d) && (V = r[d] && typeof r[d][t] == "function", V && (k = r[d][t], E = k(o || {}, u), E && (h += E)));
                    return h
                }

                function go() {
                    var t;
                    if (ci("unload"), c)
                        do t = new Date; while (t.getTimeAlias() < c)
                }

                function ho(t, o) {
                    var u = a.createElement("script");
                    u.type = "text/javascript", u.src = t, u.readyState ? u.onreadystatechange = function() {
                        var h = this.readyState;
                        (h === "loaded" || h === "complete") && (u.onreadystatechange = null, o())
                    } : u.onload = o, a.getElementsByTagName("head")[0].appendChild(u)
                }

                function mo() {
                    var t = "";
                    try {
                        t = m.top.document.referrer
                    } catch {
                        if (m.parent) try {
                            t = m.parent.document.referrer
                        } catch {
                            t = ""
                        }
                    }
                    return t === "" && (t = a.referrer), t
                }

                function Gi(t) {
                    var o = new RegExp("^([a-z]+):"),
                        u = o.exec(t);
                    return u ? u[1] : null
                }

                function Me(t) {
                    var o = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                        u = o.exec(t);
                    return u ? u[1] : t
                }

                function Zi(t, o) {
                    return t = String(t), t.lastIndexOf(o, 0) === 0
                }

                function Be(t, o) {
                    return t = String(t), t.indexOf(o, t.length - o.length) !== -1
                }

                function po(t, o) {
                    return t = String(t), t.indexOf(o) !== -1
                }

                function Xi(t, o) {
                    return t = String(t), t.substr(0, t.length - o)
                }

                function vo(t, o, u) {
                    t = String(t), u || (u = "");
                    var h = t.indexOf("#"),
                        d = t.length;
                    h === -1 && (h = d);
                    var k = t.substr(0, h),
                        E = t.substr(h, d - h);
                    return k.indexOf("?") === -1 ? k += "?" : Be(k, "?") || (k += "&"), k + b(o) + "=" + b(u) + E
                }

                function Ki(t, o) {
                    if (t = String(t), t.indexOf("?" + o + "=") === -1 && t.indexOf("&" + o + "=") === -1) return t;
                    var u = t.indexOf("?");
                    if (u === -1) return t;
                    var h = t.substr(u + 1),
                        d = t.substr(0, u);
                    if (h) {
                        var k = "",
                            E = h.indexOf("#");
                        E !== -1 && (k = h.substr(E + 1), h = h.substr(0, E));
                        var V, F = h.split("&"),
                            q = F.length - 1;
                        for (q; q >= 0; q--) V = F[q].split("=")[0], V === o && F.splice(q, 1);
                        var U = F.join("&");
                        U && (d = d + "?" + U), k && (d += "#" + k)
                    }
                    return d
                }

                function ke(t, o) {
                    var u = "[\\?&#]" + o + "=([^&#]*)",
                        h = new RegExp(u),
                        d = h.exec(t);
                    return d ? A(d[1]) : ""
                }

                function Te(t) {
                    return t && String(t) === t ? t.replace(/^\s+|\s+$/g, "") : t
                }

                function wo(t) {
                    return unescape(b(t))
                }

                function bo(t) {
                    var o = function(se, ve) {
                            return se << ve | se >>> 32 - ve
                        },
                        u = function(se) {
                            var ve = "",
                                _e, Ae;
                            for (_e = 7; _e >= 0; _e--) Ae = se >>> _e * 4 & 15, ve += Ae.toString(16);
                            return ve
                        },
                        h, d, k, E = [],
                        V = 1732584193,
                        F = 4023233417,
                        q = 2562383102,
                        U = 271733878,
                        W = 3285377520,
                        z, ee, ie, re, J, ge, ue, M = [];
                    for (t = wo(t), ue = t.length, d = 0; d < ue - 3; d += 4) k = t.charCodeAt(d) << 24 | t.charCodeAt(d + 1) << 16 | t.charCodeAt(d + 2) << 8 | t.charCodeAt(d + 3), M.push(k);
                    switch (ue & 3) {
                        case 0:
                            d = 2147483648;
                            break;
                        case 1:
                            d = t.charCodeAt(ue - 1) << 24 | 8388608;
                            break;
                        case 2:
                            d = t.charCodeAt(ue - 2) << 24 | t.charCodeAt(ue - 1) << 16 | 32768;
                            break;
                        case 3:
                            d = t.charCodeAt(ue - 3) << 24 | t.charCodeAt(ue - 2) << 16 | t.charCodeAt(ue - 1) << 8 | 128;
                            break
                    }
                    for (M.push(d);
                        (M.length & 15) !== 14;) M.push(0);
                    for (M.push(ue >>> 29), M.push(ue << 3 & 4294967295), h = 0; h < M.length; h += 16) {
                        for (d = 0; d < 16; d++) E[d] = M[h + d];
                        for (d = 16; d <= 79; d++) E[d] = o(E[d - 3] ^ E[d - 8] ^ E[d - 14] ^ E[d - 16], 1);
                        for (z = V, ee = F, ie = q, re = U, J = W, d = 0; d <= 19; d++) ge = o(z, 5) + (ee & ie | ~ee & re) + J + E[d] + 1518500249 & 4294967295, J = re, re = ie, ie = o(ee, 30), ee = z, z = ge;
                        for (d = 20; d <= 39; d++) ge = o(z, 5) + (ee ^ ie ^ re) + J + E[d] + 1859775393 & 4294967295, J = re, re = ie, ie = o(ee, 30), ee = z, z = ge;
                        for (d = 40; d <= 59; d++) ge = o(z, 5) + (ee & ie | ee & re | ie & re) + J + E[d] + 2400959708 & 4294967295, J = re, re = ie, ie = o(ee, 30), ee = z, z = ge;
                        for (d = 60; d <= 79; d++) ge = o(z, 5) + (ee ^ ie ^ re) + J + E[d] + 3395469782 & 4294967295, J = re, re = ie, ie = o(ee, 30), ee = z, z = ge;
                        V = V + z & 4294967295, F = F + ee & 4294967295, q = q + ie & 4294967295, U = U + re & 4294967295, W = W + J & 4294967295
                    }
                    return ge = u(V) + u(F) + u(q) + u(U) + u(W), ge.toLowerCase()
                }

                function _o(t, o, u) {
                    return t || (t = ""), o || (o = ""), t === "translate.googleusercontent.com" ? (u === "" && (u = o), o = ke(o, "u"), t = Me(o)) : (t === "cc.bingj.com" || t === "webcache.googleusercontent.com" || t.slice(0, 5) === "74.6.") && (o = a.links[0].href, t = Me(o)), [t, o, u]
                }

                function et(t) {
                    var o = t.length;
                    return t.charAt(--o) === "." && (t = t.slice(0, o)), t.slice(0, 2) === "*." && (t = t.slice(1)), t.indexOf("/") !== -1 && (t = t.substr(0, t.indexOf("/"))), t
                }

                function yo(t) {
                    if (t = t && t.text ? t.text : t, !Q(t)) {
                        var o = a.getElementsByTagName("title");
                        o && w(o[0]) && (t = o[0].text)
                    }
                    return t
                }

                function Yi(t) {
                    return t ? !w(t.children) && w(t.childNodes) || w(t.children) ? t.children : [] : []
                }

                function Co(t, o) {
                    return !t || !o ? !1 : t.contains ? t.contains(o) : t === o ? !0 : t.compareDocumentPosition ? !!(t.compareDocumentPosition(o) & 16) : !1
                }

                function Le(t, o) {
                    if (t && t.indexOf) return t.indexOf(o);
                    if (!w(t) || t === null || !t.length) return -1;
                    var u = t.length;
                    if (u === 0) return -1;
                    for (var h = 0; h < u;) {
                        if (t[h] === o) return h;
                        h++
                    }
                    return -1
                }

                function ui(t) {
                    if (!t) return !1;

                    function o(d, k) {
                        if (m.getComputedStyle) return a.defaultView.getComputedStyle(d, null)[k];
                        if (d.currentStyle) return d.currentStyle[k]
                    }

                    function u(d) {
                        for (d = d.parentNode; d;) {
                            if (d === a) return !0;
                            d = d.parentNode
                        }
                        return !1
                    }

                    function h(d, k, E, V, F, q, U) {
                        var W = d.parentNode,
                            z = 1;
                        return u(d) ? W.nodeType === 9 ? !0 : o(d, "opacity") === "0" || o(d, "display") === "none" || o(d, "visibility") === "hidden" || ((!w(k) || !w(E) || !w(V) || !w(F) || !w(q) || !w(U)) && (k = d.offsetTop, F = d.offsetLeft, V = k + d.offsetHeight, E = F + d.offsetWidth, q = d.offsetWidth, U = d.offsetHeight), t === d && (U === 0 || q === 0) && o(d, "overflow") === "hidden") ? !1 : W ? (o(W, "overflow") === "hidden" || o(W, "overflow") === "scroll") && (F + z > W.offsetWidth + W.scrollLeft || F + q - z < W.scrollLeft || k + z > W.offsetHeight + W.scrollTop || k + U - z < W.scrollTop) ? !1 : (d.offsetParent === W && (F += W.offsetLeft, k += W.offsetTop), h(W, k, E, V, F, q, U)) : !0 : !1
                    }
                    return h(t)
                }
                var S = {
                        htmlCollectionToArray: function(t) {
                            var o = [],
                                u;
                            if (!t || !t.length) return o;
                            for (u = 0; u < t.length; u++) o.push(t[u]);
                            return o
                        },
                        find: function(t) {
                            if (!document.querySelectorAll || !t) return [];
                            var o = document.querySelectorAll(t);
                            return this.htmlCollectionToArray(o)
                        },
                        findMultiple: function(t) {
                            if (!t || !t.length) return [];
                            var o, u, h = [];
                            for (o = 0; o < t.length; o++) u = this.find(t[o]), h = h.concat(u);
                            return h = this.makeNodesUnique(h), h
                        },
                        findNodesByTagName: function(t, o) {
                            if (!t || !o || !t.getElementsByTagName) return [];
                            var u = t.getElementsByTagName(o);
                            return this.htmlCollectionToArray(u)
                        },
                        makeNodesUnique: function(t) {
                            var o = [].concat(t);
                            if (t.sort(function(E, V) {
                                    if (E === V) return 0;
                                    var F = Le(o, E),
                                        q = Le(o, V);
                                    return F === q ? 0 : F > q ? -1 : 1
                                }), t.length <= 1) return t;
                            var u = 0,
                                h = 0,
                                d = [],
                                k;
                            for (k = t[u++]; k;) k === t[u] && (h = d.push(u)), k = t[u++] || null;
                            for (; h--;) t.splice(d[h], 1);
                            return t
                        },
                        getAttributeValueFromNode: function(t, o) {
                            if (this.hasNodeAttribute(t, o)) {
                                if (t && t.getAttribute) return t.getAttribute(o);
                                if (!(!t || !t.attributes)) {
                                    var u = typeof t.attributes[o];
                                    if (u !== "undefined") {
                                        if (t.attributes[o].value) return t.attributes[o].value;
                                        if (t.attributes[o].nodeValue) return t.attributes[o].nodeValue;
                                        var h, d = t.attributes;
                                        if (d) {
                                            for (h = 0; h < d.length; h++)
                                                if (d[h].nodeName === o) return d[h].nodeValue;
                                            return null
                                        }
                                    }
                                }
                            }
                        },
                        hasNodeAttributeWithValue: function(t, o) {
                            var u = this.getAttributeValueFromNode(t, o);
                            return !!u
                        },
                        hasNodeAttribute: function(t, o) {
                            if (t && t.hasAttribute) return t.hasAttribute(o);
                            if (t && t.attributes) {
                                var u = typeof t.attributes[o];
                                return u !== "undefined"
                            }
                            return !1
                        },
                        hasNodeCssClass: function(t, o) {
                            if (t && o && t.className) {
                                var u = typeof t.className == "string" ? t.className.split(" ") : [];
                                if (Le(u, o) !== -1) return !0
                            }
                            return !1
                        },
                        findNodesHavingAttribute: function(t, o, u) {
                            if (u || (u = []), !t || !o) return u;
                            var h = Yi(t);
                            if (!h || !h.length) return u;
                            var d, k;
                            for (d = 0; d < h.length; d++) k = h[d], this.hasNodeAttribute(k, o) && u.push(k), u = this.findNodesHavingAttribute(k, o, u);
                            return u
                        },
                        findFirstNodeHavingAttribute: function(t, o) {
                            if (!(!t || !o)) {
                                if (this.hasNodeAttribute(t, o)) return t;
                                var u = this.findNodesHavingAttribute(t, o);
                                if (u && u.length) return u[0]
                            }
                        },
                        findFirstNodeHavingAttributeWithValue: function(t, o) {
                            if (!(!t || !o)) {
                                if (this.hasNodeAttributeWithValue(t, o)) return t;
                                var u = this.findNodesHavingAttribute(t, o);
                                if (!(!u || !u.length)) {
                                    var h;
                                    for (h = 0; h < u.length; h++)
                                        if (this.getAttributeValueFromNode(u[h], o)) return u[h]
                                }
                            }
                        },
                        findNodesHavingCssClass: function(t, o, u) {
                            if (u || (u = []), !t || !o) return u;
                            if (t.getElementsByClassName) {
                                var h = t.getElementsByClassName(o);
                                return this.htmlCollectionToArray(h)
                            }
                            var d = Yi(t);
                            if (!d || !d.length) return [];
                            var k, E;
                            for (k = 0; k < d.length; k++) E = d[k], this.hasNodeCssClass(E, o) && u.push(E), u = this.findNodesHavingCssClass(E, o, u);
                            return u
                        },
                        findFirstNodeHavingClass: function(t, o) {
                            if (!(!t || !o)) {
                                if (this.hasNodeCssClass(t, o)) return t;
                                var u = this.findNodesHavingCssClass(t, o);
                                if (u && u.length) return u[0]
                            }
                        },
                        isLinkElement: function(t) {
                            if (!t) return !1;
                            var o = String(t.nodeName).toLowerCase(),
                                u = ["a", "area"],
                                h = Le(u, o);
                            return h !== -1
                        },
                        setAnyAttribute: function(t, o, u) {
                            !t || !o || (t.setAttribute ? t.setAttribute(o, u) : t[o] = u)
                        }
                    },
                    R = {
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
                            var t = "." + this.CONTENT_CLASS,
                                o = "[" + this.CONTENT_ATTR + "]",
                                u = S.findMultiple([t, o]);
                            return u
                        },
                        findContentNodesWithinNode: function(t) {
                            if (!t) return [];
                            var o = S.findNodesHavingCssClass(t, this.CONTENT_CLASS),
                                u = S.findNodesHavingAttribute(t, this.CONTENT_ATTR);
                            if (u && u.length) {
                                var h;
                                for (h = 0; h < u.length; h++) o.push(u[h])
                            }
                            return (S.hasNodeAttribute(t, this.CONTENT_ATTR) || S.hasNodeCssClass(t, this.CONTENT_CLASS)) && o.push(t), o = S.makeNodesUnique(o), o
                        },
                        findParentContentNode: function(t) {
                            if (t)
                                for (var o = t, u = 0; o && o !== a && o.parentNode;) {
                                    if (S.hasNodeAttribute(o, this.CONTENT_ATTR) || S.hasNodeCssClass(o, this.CONTENT_CLASS)) return o;
                                    if (o = o.parentNode, u > 1e3) break;
                                    u++
                                }
                        },
                        findPieceNode: function(t) {
                            var o;
                            return o = S.findFirstNodeHavingAttribute(t, this.CONTENT_PIECE_ATTR), o || (o = S.findFirstNodeHavingClass(t, this.CONTENT_PIECE_CLASS)), o || t
                        },
                        findTargetNodeNoDefault: function(t) {
                            if (t) {
                                var o = S.findFirstNodeHavingAttributeWithValue(t, this.CONTENT_TARGET_ATTR);
                                if (o || (o = S.findFirstNodeHavingAttribute(t, this.CONTENT_TARGET_ATTR), o) || (o = S.findFirstNodeHavingClass(t, this.CONTENT_TARGET_CLASS), o)) return o
                            }
                        },
                        findTargetNode: function(t) {
                            var o = this.findTargetNodeNoDefault(t);
                            return o || t
                        },
                        findContentName: function(t) {
                            if (t) {
                                var o = S.findFirstNodeHavingAttributeWithValue(t, this.CONTENT_NAME_ATTR);
                                if (o) return S.getAttributeValueFromNode(o, this.CONTENT_NAME_ATTR);
                                var u = this.findContentPiece(t);
                                if (u) return this.removeDomainIfIsInLink(u);
                                if (S.hasNodeAttributeWithValue(t, "title")) return S.getAttributeValueFromNode(t, "title");
                                var h = this.findPieceNode(t);
                                if (S.hasNodeAttributeWithValue(h, "title")) return S.getAttributeValueFromNode(h, "title");
                                var d = this.findTargetNode(t);
                                if (S.hasNodeAttributeWithValue(d, "title")) return S.getAttributeValueFromNode(d, "title")
                            }
                        },
                        findContentPiece: function(t) {
                            if (t) {
                                var o = S.findFirstNodeHavingAttributeWithValue(t, this.CONTENT_PIECE_ATTR);
                                if (o) return S.getAttributeValueFromNode(o, this.CONTENT_PIECE_ATTR);
                                var u = this.findPieceNode(t),
                                    h = this.findMediaUrlInNode(u);
                                if (h) return this.toAbsoluteUrl(h)
                            }
                        },
                        findContentTarget: function(t) {
                            if (t) {
                                var o = this.findTargetNode(t);
                                if (S.hasNodeAttributeWithValue(o, this.CONTENT_TARGET_ATTR)) return S.getAttributeValueFromNode(o, this.CONTENT_TARGET_ATTR);
                                var u;
                                if (S.hasNodeAttributeWithValue(o, "href")) return u = S.getAttributeValueFromNode(o, "href"), this.toAbsoluteUrl(u);
                                var h = this.findPieceNode(t);
                                if (S.hasNodeAttributeWithValue(h, "href")) return u = S.getAttributeValueFromNode(h, "href"), this.toAbsoluteUrl(u)
                            }
                        },
                        isSameDomain: function(t) {
                            if (!t || !t.indexOf) return !1;
                            if (t.indexOf(this.getLocation().origin) === 0) return !0;
                            var o = t.indexOf(this.getLocation().host);
                            return 8 >= o && 0 <= o
                        },
                        removeDomainIfIsInLink: function(t) {
                            var o = "^https?://[^/]+",
                                u = "^.*//[^/]+";
                            return t && t.search && t.search(new RegExp(o)) !== -1 && this.isSameDomain(t) && (t = t.replace(new RegExp(u), ""), t || (t = "/")), t
                        },
                        findMediaUrlInNode: function(t) {
                            if (t) {
                                var o = ["img", "embed", "video", "audio"],
                                    u = t.nodeName.toLowerCase();
                                if (Le(o, u) !== -1 && S.findFirstNodeHavingAttributeWithValue(t, "src")) {
                                    var h = S.findFirstNodeHavingAttributeWithValue(t, "src");
                                    return S.getAttributeValueFromNode(h, "src")
                                }
                                if (u === "object" && S.hasNodeAttributeWithValue(t, "data")) return S.getAttributeValueFromNode(t, "data");
                                if (u === "object") {
                                    var d = S.findNodesByTagName(t, "param");
                                    if (d && d.length) {
                                        var k;
                                        for (k = 0; k < d.length; k++)
                                            if (S.getAttributeValueFromNode(d[k], "name") === "movie" && S.hasNodeAttributeWithValue(d[k], "value")) return S.getAttributeValueFromNode(d[k], "value")
                                    }
                                    var E = S.findNodesByTagName(t, "embed");
                                    if (E && E.length) return this.findMediaUrlInNode(E[0])
                                }
                            }
                        },
                        trim: function(t) {
                            return Te(t)
                        },
                        isOrWasNodeInViewport: function(t) {
                            if (!t || !t.getBoundingClientRect || t.nodeType !== 1) return !0;
                            var o = t.getBoundingClientRect(),
                                u = a.documentElement || {},
                                h = o.top < 0;
                            h && t.offsetTop && (h = t.offsetTop + o.height > 0);
                            var d = u.clientWidth;
                            m.innerWidth && d > m.innerWidth && (d = m.innerWidth);
                            var k = u.clientHeight;
                            return m.innerHeight && k > m.innerHeight && (k = m.innerHeight), (o.bottom > 0 || h) && o.right > 0 && o.left < d && (o.top < k || h)
                        },
                        isNodeVisible: function(t) {
                            var o = ui(t),
                                u = this.isOrWasNodeInViewport(t);
                            return o && u
                        },
                        buildInteractionRequestParams: function(t, o, u, h) {
                            var d = "";
                            return t && (d += "c_i=" + b(t)), o && (d && (d += "&"), d += "c_n=" + b(o)), u && (d && (d += "&"), d += "c_p=" + b(u)), h && (d && (d += "&"), d += "c_t=" + b(h)), d
                        },
                        buildImpressionRequestParams: function(t, o, u) {
                            var h = "c_n=" + b(t) + "&c_p=" + b(o);
                            return u && (h += "&c_t=" + b(u)), h
                        },
                        buildContentBlock: function(t) {
                            if (t) {
                                var o = this.findContentName(t),
                                    u = this.findContentPiece(t),
                                    h = this.findContentTarget(t);
                                return o = this.trim(o), u = this.trim(u), h = this.trim(h), {
                                    name: o || "Unknown",
                                    piece: u || "Unknown",
                                    target: h || ""
                                }
                            }
                        },
                        collectContent: function(t) {
                            if (!t || !t.length) return [];
                            var o = [],
                                u, h;
                            for (u = 0; u < t.length; u++) h = this.buildContentBlock(t[u]), w(h) && o.push(h);
                            return o
                        },
                        setLocation: function(t) {
                            this.location = t
                        },
                        getLocation: function() {
                            var t = this.location || m.location;
                            return t.origin || (t.origin = t.protocol + "//" + t.hostname + (t.port ? ":" + t.port : "")), t
                        },
                        toAbsoluteUrl: function(t) {
                            if ((!t || String(t) !== t) && t !== "") return t;
                            if (t === "") return this.getLocation().href;
                            if (t.search(/^\/\//) !== -1) return this.getLocation().protocol + t;
                            if (t.search(/:\/\//) !== -1) return t;
                            if (t.indexOf("#") === 0) return this.getLocation().origin + this.getLocation().pathname + t;
                            if (t.indexOf("?") === 0) return this.getLocation().origin + this.getLocation().pathname + t;
                            if (t.search("^[a-zA-Z]{2,11}:") === 0) return t;
                            if (t.search(/^\//) !== -1) return this.getLocation().origin + t;
                            var o = "(.*/)",
                                u = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(o))[0];
                            return u + t
                        },
                        isUrlToCurrentDomain: function(t) {
                            var o = this.toAbsoluteUrl(t);
                            if (!o) return !1;
                            var u = this.getLocation().origin;
                            return u === o ? !0 : String(o).indexOf(u) === 0 ? String(o).substr(u.length, 1) !== ":" : !1
                        },
                        setHrefAttribute: function(t, o) {
                            !t || !o || S.setAnyAttribute(t, "href", o)
                        },
                        shouldIgnoreInteraction: function(t) {
                            var o = S.hasNodeAttribute(t, this.CONTENT_IGNOREINTERACTION_ATTR),
                                u = S.hasNodeCssClass(t, this.CONTENT_IGNOREINTERACTION_CLASS);
                            return o || u
                        }
                    };

                function Qi(t, o) {
                    if (o) return o;
                    if (t = R.toAbsoluteUrl(t), po(t, "?")) {
                        var u = t.indexOf("?");
                        t = t.slice(0, u)
                    }
                    if (Be(t, "piwik.php")) t = Xi(t, 9);
                    else if (Be(t, ".php")) {
                        var h = t.lastIndexOf("/"),
                            d = 1;
                        t = t.slice(0, h + d)
                    }
                    return Be(t, "/js/") && (t = Xi(t, 3)), t
                }

                function We(t) {
                    var o = "Egoimmerce_Overlay",
                        u = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&clientid=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$"),
                        h = u.exec(a.referrer);
                    if (h) {
                        var d = h[1];
                        if (d !== String(t)) return !1;
                        var k = h[2],
                            E = h[3],
                            V = h[4];
                        V ? V.indexOf("&segment=") === 0 && (V = V.substr(9)) : V = "", m.name = o + "###" + k + "###" + E + "###" + V
                    }
                    var F = m.name.split("###");
                    return F.length === 4 && F[0] === o
                }

                function ko(t, o, u) {
                    var h = m.name.split("###"),
                        d = h[1],
                        k = h[2],
                        E = h[3],
                        V = Qi(t, o);
                    ho(V + "plugins/Overlay/client/client.js?v=1", function() {
                        Egoimmerce_Overlay_Client.initialize(V, u, d, k, E)
                    })
                }

                function To() {
                    var t;
                    try {
                        t = m.frameElement
                    } catch {
                        return !0
                    }
                    if (w(t)) return !!(t && String(t.nodeName).toLowerCase() === "iframe");
                    try {
                        return m.self !== m.top
                    } catch {
                        return !0
                    }
                }

                function fi(t, o, u, h, d) {
                    var k = {},
                        E = this,
                        V = _o(a.domain, m.location.href, mo()),
                        F = et(V[0]),
                        q = C(V[1]),
                        U = C(V[2]),
                        W = !1,
                        z = "GET",
                        ee = z,
                        ie = "application/x-www-form-urlencoded; charset=UTF-8",
                        re = ie,
                        J = t || "",
                        ge = "",
                        ue = "",
                        M = o || "",
                        se = u || "",
                        ve = h || "",
                        _e = d || "",
                        Ae = "",
                        ze = "",
                        Ne, Lt = "",
                        Pe = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                        Se = [F],
                        tr = [],
                        ir = [],
                        rr = [],
                        te = 500,
                        Ee, li, nr, Re, Pt = ["pk_campaign", "egoimmerce_campaign", "utm_campaign", "utm_source", "utm_medium"],
                        Rt = ["pk_kwd", "egoimmerce_kwd", "utm_term"],
                        or = "_pk_",
                        Vt = "pk_vid",
                        di = 180,
                        Oe, Ie, Ve = !1,
                        _t, sr, gi, xe = 339552e5,
                        tt = 18e5,
                        yt = 15768e6,
                        ar = !0,
                        hi = 0,
                        cr = !1,
                        he = !1,
                        mi, qt = null,
                        pi = null,
                        qe = {},
                        Dt = {},
                        Je = {},
                        ur = 200,
                        ce = {},
                        ye = {},
                        De = [],
                        it = !1,
                        rt = !1,
                        vi = !1,
                        wi = !1,
                        Ct = !1,
                        kt = !1,
                        Ft = To(),
                        jt = null,
                        nt, Ht, Ut, Mt = bo,
                        fr, Bt, lr = 0,
                        bi = ["id", "ses", "cvar", "ref"];
                    try {
                        Lt = a.title
                    } catch {
                        Lt = ""
                    }

                    function ne(e, i, s, l, g) {
                        if (!Ve) {
                            var _;
                            s && (_ = new Date, _.setTime(_.getTime() + s)), a.cookie = e + "=" + b(i) + (s ? ";expires=" + _.toGMTString() : "") + ";path=" + (l || "/") + (g ? ";domain=" + g : "")
                        }
                    }

                    function _i(e) {
                        var i = "0123456789abcdfghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ",
                            s = i.length,
                            l = e.length - 1;
                        e = e.split("");
                        var g = i.indexOf(e.pop());
                        for (var _ in e) {
                            var L = e[_];
                            g += i.indexOf(L) * Math.pow(s, l - _)
                        }
                        return g
                    }

                    function $o(e) {
                        var i = e.match(/^http[s]?:\/\/.*?\/([a-zA-Z-_]+)\/([0-9a-zA-Z-_]+).*$/);
                        if (i) {
                            var s = i[1],
                                l = i[2],
                                g = l.split("e"),
                                _ = "",
                                L = "",
                                j = "",
                                Z = "";
                            s == "g" && g.length == 7 && (j = _i(g[3]), j == M && (_ = g[1].replace("-", "e"), L = _i(g[5]), Z = _i(g[2]), _ && ne(D("Subscriber"), _, xe), L && ne(D("CampaignId"), L, yt), Z && ne(D("ListId"), Z, xe)))
                        }
                    }

                    function G(e) {
                        if (Ve) return 0;
                        var i = new RegExp("(^|;)[ ]*" + e + "=([^;]*)"),
                            s = i.exec(a.cookie);
                        return s ? A(s[2]) : 0
                    }

                    function ot(e) {
                        var i;
                        return e = Ki(e, Vt), nr ? (i = new RegExp("#.*"), e.replace(i, "")) : e
                    }

                    function Ao(e, i) {
                        var s = Gi(i),
                            l;
                        return s ? i : i.slice(0, 1) === "/" ? Gi(e) + "://" + Me(e) + i : (e = ot(e), l = e.indexOf("?"), l >= 0 && (e = e.slice(0, l)), l = e.lastIndexOf("/"), l !== e.length - 1 && (e = e.slice(0, l + 1)), e + i)
                    }

                    function yi(e, i) {
                        var s;
                        return e = String(e).toLowerCase(), i = String(i).toLowerCase(), e === i || i.slice(0, 1) === "." && (e === i.slice(1) || (s = e.length - i.length, s > 0 && e.slice(s) === i))
                    }

                    function Wt(e) {
                        var i = document.createElement("a");
                        return e.indexOf("//") !== 0 && e.indexOf("http") !== 0 && (e.indexOf("*") === 0 && (e = e.substr(1)), e.indexOf(".") === 0 && (e = e.substr(1)), e = "http://" + e), i.href = R.toAbsoluteUrl(e), i.pathname ? i.pathname : ""
                    }

                    function No(e, i) {
                        Zi(i, "/") || (i = "/" + i), Zi(e, "/") || (e = "/" + e);
                        var s = i === "/" || i === "/*";
                        return s || e === i ? !0 : (i = String(i).toLowerCase(), e = String(e).toLowerCase(), Be(i, "*") ? (i = i.slice(0, -1), s = !i || i === "/", s || e === i ? !0 : e.indexOf(i) === 0) : (Be(e, "/") || (e += "/"), Be(i, "/") || (i += "/"), e.indexOf(i) === 0))
                    }

                    function dr(e, i) {
                        var s, l, g;
                        for (s = 0; s < Se.length; s++)
                            if (l = et(Se[s]), g = Wt(Se[s]), yi(e, l) && No(i, g)) return !0;
                        return !1
                    }

                    function gr(e) {
                        var i, s, l;
                        for (i = 0; i < Se.length; i++)
                            if (s = et(Se[i].toLowerCase()), e === s || s.slice(0, 1) === "." && (e === s.slice(1) || (l = e.length - s.length, l > 0 && e.slice(l) === s))) return !0;
                        return !1
                    }

                    function Ci(e, i) {
                        var s = new Image(1, 1);
                        s.onload = function() {
                            v = 0, typeof i == "function" && i()
                        }, e = e.replace("send_image=0", "send_image=1"), s.src = J + (J.indexOf("?") < 0 ? "?" : "&") + e
                    }

                    function hr(e, i, s) {
                        (!w(s) || s === null) && (s = !0);
                        try {
                            var l = m.XMLHttpRequest ? new m.XMLHttpRequest : m.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                            l.open("POST", J, !0), l.onreadystatechange = function() {
                                this.readyState === 4 && !(this.status >= 200 && this.status < 300) && s ? Ci(e, i) : this.readyState === 4 && typeof i == "function" && i()
                            }, l.setRequestHeader("Content-Type", re), l.send(e)
                        } catch {
                            s && Ci(e, i)
                        }
                    }

                    function zt(e) {
                        var i = new Date,
                            s = i.getTime() + e;
                        (!c || s > c) && (c = s)
                    }

                    function Tt(e) {
                        nt || !Ee || (nt = setTimeout(function() {
                            if (nt = null, Ft || (Ft = !a.hasFocus || a.hasFocus()), !Ft) {
                                Tt(Ee);
                                return
                            }
                            if (!li()) {
                                var s = new Date,
                                    l = Ee - (s.getTime() - jt);
                                l = Math.min(Ee, l), Tt(l)
                            }
                        }, e || Ee))
                    }

                    function mr() {
                        nt && (clearTimeout(nt), nt = null)
                    }

                    function ki() {
                        Ft = !0, !li() && Tt()
                    }

                    function Ti() {
                        mr()
                    }

                    function pr() {
                        kt || !Ee || (kt = !0, pe(m, "focus", ki), pe(m, "blur", Ti), Tt())
                    }

                    function vr(e) {
                        var i = new Date,
                            s = i.getTime();
                        if (jt = s, rt && s < rt) {
                            var l = rt - s;
                            setTimeout(e, l), zt(l + 50), rt += 50;
                            return
                        }
                        if (rt === !1) {
                            var g = 800;
                            rt = s + g
                        }
                        e()
                    }

                    function we(e, i, s) {
                        !_t && e && vr(function() {
                            ee === "POST" || String(e).length > 2e3 ? hr(e, s) : Ci(e, s), zt(i)
                        }), kt ? Tt() : pr()
                    }

                    function Oo(e) {
                        return _t ? !1 : e && e.length
                    }

                    function Jt(e, i) {
                        if (Oo(e)) {
                            var s = '{"requests":["?' + e.join('","?') + '"]}';
                            vr(function() {
                                hr(s, null, !1), zt(i)
                            })
                        }
                    }

                    function D(e) {
                        return or + e + "." + M + "." + fr
                    }

                    function Si() {
                        if (Ve) return "0";
                        if (!w(f.cookieEnabled)) {
                            var e = D("testcookie");
                            return ne(e, "1"), G(e) === "1" ? "1" : "0"
                        }
                        return f.cookieEnabled ? "1" : "0"
                    }

                    function Ei() {
                        fr = Mt((Oe || F) + (Ie || "/")).slice(0, 4)
                    }

                    function wr() {
                        var e = D("cvar"),
                            i = G(e);
                        return i.length && (i = JSON.parse(i), Y(i)) ? i : {}
                    }

                    function br() {
                        he === !1 && (he = wr())
                    }

                    function Io() {
                        return Mt((f.userAgent || "") + (f.platform || "") + JSON.stringify(ye) + new Date().getTime() + Math.random()).slice(0, 16)
                    }

                    function _r() {
                        return Mt((f.userAgent || "") + (f.platform || "") + JSON.stringify(ye)).slice(0, 6)
                    }

                    function yr() {
                        return Math.floor(new Date().getTime() / 1e3)
                    }

                    function Lo() {
                        var e = yr(),
                            i = _r(),
                            s = String(e) + i;
                        return s
                    }

                    function Po(e) {
                        e = String(e);
                        var i = _r(),
                            s = i.length,
                            l = e.substr(-1 * s, s),
                            g = parseInt(e.substr(0, e.length - s), 10);
                        if (g && l && l === i) {
                            var _ = yr();
                            if (di <= 0 || _ >= g && _ <= g + di) return !0
                        }
                        return !1
                    }

                    function Ro(e) {
                        if (!Ct) return "";
                        var i = ke(e, Vt);
                        if (!i) return "";
                        i = String(i);
                        var s = new RegExp("^[a-zA-Z0-9]+$");
                        if (i.length === 32 && s.test(i)) {
                            var l = i.substr(16, 32);
                            if (Po(l)) {
                                var g = i.substr(0, 16);
                                return g
                            }
                        }
                        return ""
                    }

                    function Cr() {
                        ze || (ze = Ro(q));
                        var e = new Date,
                            i = Math.round(e.getTime() / 1e3),
                            s = D("id"),
                            l = G(s),
                            g, _;
                        return l ? (g = l.split("."), g.unshift("0"), ze.length && (g[1] = ze), g) : (ze.length ? _ = ze : Si() === "0" ? _ = "" : _ = Io(), g = ["1", _, i, 0, i, "", ""], g)
                    }

                    function St() {
                        var e = Cr(),
                            i = e[0],
                            s = e[1],
                            l = e[2],
                            g = e[3],
                            _ = e[4],
                            L = e[5];
                        w(e[6]) || (e[6] = "");
                        var j = e[6];
                        return {
                            newVisitor: i,
                            uuid: s,
                            createTs: l,
                            visitCount: g,
                            currentVisitTs: _,
                            lastVisitTs: L,
                            lastEcommerceOrderTs: j
                        }
                    }

                    function kr() {
                        var e = new Date,
                            i = e.getTime(),
                            s = St().createTs,
                            l = parseInt(s, 10),
                            g = l * 1e3 + xe - i;
                        return g
                    }

                    function xi(e) {
                        if (M) {
                            var i = new Date,
                                s = Math.round(i.getTime() / 1e3);
                            w(e) || (e = St());
                            var l = e.uuid + "." + e.createTs + "." + e.visitCount + "." + s + "." + e.lastVisitTs + "." + e.lastEcommerceOrderTs;
                            ne(D("id"), l, kr(), Ie, Oe)
                        }
                    }

                    function st() {
                        var e = G(D("ref"));
                        if (e.length) try {
                            if (e = JSON.parse(e), Y(e)) return e
                        } catch {}
                        return ["", "", 0, ""]
                    }

                    function Tr(e, i, s) {
                        ne(e, "", -86400, i, s)
                    }

                    function Vo(e) {
                        var i = "testvalue";
                        return ne("test", i, 1e4, null, e), G("test") === i ? (Tr("test", null, e), !0) : !1
                    }

                    function $i() {
                        var e = Ve;
                        Ve = !1;
                        var i, s;
                        for (i = 0; i < bi.length; i++) s = D(bi[i]), G(s) !== 0 && Tr(s, Ie, Oe);
                        Ve = e
                    }

                    function qo(e) {
                        M = e, $o(U), xi()
                    }

                    function Sr(e) {
                        if (!(!e || !Y(e))) {
                            var i = [],
                                s;
                            for (s in e) Object.prototype.hasOwnProperty.call(e, s) && i.push(s);
                            var l = {};
                            i.sort();
                            var g = i.length,
                                _;
                            for (_ = 0; _ < g; _++) l[i[_]] = e[i[_]];
                            return l
                        }
                    }

                    function Do() {
                        ne(D("ses"), "*", tt, Ie, Oe)
                    }

                    function Fo() {
                        var e = "",
                            i = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                            s = i.length,
                            l;
                        for (l = 0; l < 6; l++) e += i.charAt(Math.floor(Math.random() * s));
                        return e
                    }

                    function be(e, i, s, l) {
                        var g, _ = new Date,
                            L = Math.round(_.getTime() / 1e3),
                            j, Z, me = 1024,
                            X, ct, Hr = he,
                            rs = D("ses"),
                            ns = D("ref"),
                            os = D("cvar"),
                            ss = G(rs),
                            ut = st(),
                            Ri = Ne || q,
                            Fe, ft;
                        if (Ve && $i(), _t) return "";
                        var le = St();
                        w(l) || (l = "");
                        var xt = a.characterSet || a.charset;
                        if ((!xt || xt.toLowerCase() === "utf-8") && (xt = null), Fe = ut[0], ft = ut[1], j = ut[2], Z = ut[3], !ss) {
                            var as = tt / 1e3;
                            if ((!le.lastVisitTs || L - le.lastVisitTs > as) && (le.visitCount++, le.lastVisitTs = le.currentVisitTs), !gi || !Fe.length) {
                                for (g in Pt)
                                    if (Object.prototype.hasOwnProperty.call(Pt, g) && (Fe = ke(Ri, Pt[g]), Fe.length)) break;
                                for (g in Rt)
                                    if (Object.prototype.hasOwnProperty.call(Rt, g) && (ft = ke(Ri, Rt[g]), ft.length)) break
                            }
                            X = Me(U), ct = Z.length ? Me(Z) : "", X.length && !gr(X) && (!gi || !ct.length || gr(ct)) && (Z = U), (Z.length || Fe.length) && (j = L, ut = [Fe, ft, j, ot(Z.slice(0, me))], ne(ns, JSON.stringify(ut), yt, Ie, Oe))
                        }
                        var Ur = ke(Ne || q, "eg_sub");
                        if (Ur && !G(D("Subscriber"))) se = Ur, ne(D("Subscriber"), se, xe);
                        else if (G(D("Subscriber"))) se = G(D("Subscriber"));
                        else if (G("_ewp_egoiWebPushAllow_[A-Za-z(0-9)*]+")) {
                            var cs = G("_ewp_egoiWebPushAllow_[A-Za-z(0-9)*]+"),
                                Mr = cs.match("egoiWebPushAllow_[A-Za-z(0-9)*]+_([A-Za-z(0-9)*]+)(_[0-9]*)?");
                            Mr.length > 1 && (se = Mr[1], ne(D("Subscriber"), se, xe))
                        }
                        var Br = ke(Ne || q, "eg_list");
                        Br ? (ve = Br, ne(D("ListId"), ve, xe)) : G(D("ListId")) && (ve = G(D("ListId")));
                        var Wr = ke(Ne || q, "eg_cam");
                        Wr ? (_e = Wr, ne(D("CampaignId"), _e, yt)) : G(D("CampaignId")) && (_e = G(D("CampaignId"))), e += "&clientid=" + M + "&listid=" + ve + "&subscriber=" + b(se) + "&campaign=" + _e + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + _.getHours() + "&m=" + _.getMinutes() + "&s=" + _.getSeconds() + "&url=" + b(ot(Ri)) + (U.length ? "&urlref=" + b(ot(U)) : "") + (Ae && Ae.length ? "&uid=" + b(Ae) : "") + "&_id=" + le.uuid + "&_idts=" + le.createTs + "&_idvc=" + le.visitCount + "&_idn=" + le.newVisitor + (Fe.length ? "&_rcn=" + b(Fe) : "") + (ft.length ? "&_rck=" + b(ft) : "") + "&_refts=" + j + "&_viewts=" + le.lastVisitTs + (String(le.lastEcommerceOrderTs).length ? "&_ects=" + le.lastEcommerceOrderTs : "") + (String(Z).length ? "&_ref=" + b(ot(Z.slice(0, me))) : "") + (xt ? "&cs=" + b(xt) : "") + "&send_image=0";
                        for (g in ye) Object.prototype.hasOwnProperty.call(ye, g) && (e += "&" + g + "=" + ye[g]);
                        var Vi = [];
                        if (i) {
                            for (g in i)
                                if (Object.prototype.hasOwnProperty.call(i, g) && /^dimension\d+$/.test(g)) {
                                    var zr = g.replace("dimension", "");
                                    Vi.push(parseInt(zr, 10)), Vi.push(String(zr)), e += "&" + g + "=" + i[g], delete i[g]
                                }
                        }
                        i && lo(i) && (i = null);
                        for (g in Je)
                            if (Object.prototype.hasOwnProperty.call(Je, g)) {
                                var us = Le(Vi, g) === -1;
                                us && (e += "&dimension" + g + "=" + Je[g])
                            }
                        i ? e += "&data=" + b(JSON.stringify(i)) : Re && (e += "&data=" + b(JSON.stringify(Re)));

                        function qi(ds, gs) {
                            var Jr = JSON.stringify(ds);
                            return Jr.length > 2 ? "&" + gs + "=" + b(Jr) : ""
                        }
                        var fs = Sr(qe),
                            ls = Sr(Dt);
                        if (e += qi(fs, "cvar"), e += qi(ls, "e_cvar"), he) {
                            e += qi(he, "_cvar");
                            for (g in Hr) Object.prototype.hasOwnProperty.call(Hr, g) && (he[g][0] === "" || he[g][1] === "") && delete he[g];
                            cr && ne(os, JSON.stringify(he), tt, Ie, Oe)
                        }
                        return qt && (e += "&_pks=" + qt), pi && !qt && (e += "&_pkc=" + pi), ar && (hi ? e += "&gt_ms=" + hi : T && T.timing && T.timing.requestStart && T.timing.responseEnd && (e += "&gt_ms=" + (T.timing.responseEnd - T.timing.requestStart))), Bt && (e += "&pv_id=" + Bt), le.lastEcommerceOrderTs = w(l) && String(l).length ? l : le.lastEcommerceOrderTs, xi(le), Do(), e += ci(s, {
                            tracker: E,
                            request: e
                        }), ue.length && (e += "&" + ue), H(mi) && (e = mi(e)), e
                    }
                    li = function() {
                        var i = new Date;
                        if (jt + Ee <= i.getTime()) {
                            var s = be("ping=1", null, "ping");
                            return we(s, te), !0
                        }
                        return !1
                    };

                    function Er(e, i, s, l, g, _) {
                        var L = "idgoal=0",
                            j, Z = new Date,
                            me = [],
                            X, ct = String(e).length;
                        if (ct && (L += "&ec_id=" + b(e), j = Math.round(Z.getTime() / 1e3)), L += "&revenue=" + i, String(s).length && (L += "&ec_st=" + s), String(l).length && (L += "&ec_tx=" + l), String(g).length && (L += "&ec_sh=" + g), String(_).length && (L += "&ec_dt=" + _), ce) {
                            for (X in ce) Object.prototype.hasOwnProperty.call(ce, X) && (w(ce[X][1]) || (ce[X][1] = ""), w(ce[X][2]) || (ce[X][2] = ""), (!w(ce[X][3]) || String(ce[X][3]).length === 0) && (ce[X][3] = 0), (!w(ce[X][4]) || String(ce[X][4]).length === 0) && (ce[X][4] = 1), me.push(ce[X]));
                            L += "&ec_items=" + b(JSON.stringify(me))
                        }
                        L = be(L, Re, "ecommerce", j), we(L, te), ct && (ce = {})
                    }

                    function jo(e, i, s, l, g, _) {
                        String(e).length && w(i) && Er(e, i, s, l, g, _)
                    }

                    function Ho(e) {
                        w(e) && Er("", e, "", "", "", "")
                    }

                    function Uo(e, i, s) {
                        Bt = Fo();
                        var l = be("action_name=" + b(yo(e || Lt)), i, "log");
                        we(l, te, s)
                    }

                    function Ai(e, i) {
                        var s, l = "(^| )(egoimmerce[_-]" + i;
                        if (e)
                            for (s = 0; s < e.length; s++) l += "|" + e[s];
                        return l += ")( |$)", new RegExp(l)
                    }

                    function at(e) {
                        return J && e && String(e).indexOf(J) === 0
                    }

                    function Mo(e, i, s, l) {
                        if (at(i)) return 0;
                        var g = Ai(ir, "download"),
                            _ = Ai(rr, "link"),
                            L = new RegExp("\\.(" + Pe.join("|") + ")([?&#]|$)", "i");
                        return _.test(e) ? "link" : l || g.test(e) || L.test(i) ? "download" : s ? 0 : "link"
                    }

                    function xr(e) {
                        var i;
                        for (i = e.parentNode; i !== null && w(i) && !S.isLinkElement(e);) e = i, i = e.parentNode;
                        return e
                    }

                    function Ni(e) {
                        if (e = xr(e), !!S.hasNodeAttribute(e, "href") && w(e.href)) {
                            var i = S.getAttributeValueFromNode(e, "href");
                            if (!at(i)) {
                                var s = e.pathname || Wt(e.href),
                                    l = e.hostname || Me(e.href),
                                    g = l.toLowerCase(),
                                    _ = e.href.replace(l, g),
                                    L = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
                                if (!L.test(_)) {
                                    var j = Mo(e.className, _, dr(g, s), S.hasNodeAttribute(e, "download"));
                                    if (j) return {
                                        type: j,
                                        href: _
                                    }
                                }
                            }
                        }
                    }

                    function Et(e, i, s, l) {
                        var g = R.buildInteractionRequestParams(e, i, s, l);
                        if (g) return be(g, null, "contentInteraction")
                    }

                    function $r(e, i, s, l, g) {
                        if (w(e)) {
                            if (at(e)) return e;
                            var _ = R.toAbsoluteUrl(e),
                                L = "redirecturl=" + b(_) + "&";
                            L += Et(i, s, l, g || e);
                            var j = "&";
                            return J.indexOf("?") < 0 && (j = "?"), J + j + L
                        }
                    }

                    function Oi(e, i) {
                        if (!e || !i) return !1;
                        var s = R.findTargetNode(e);
                        return !(R.shouldIgnoreInteraction(s) || (s = R.findTargetNodeNoDefault(e), s && !Co(s, i)))
                    }

                    function Ar(e, i, s) {
                        if (e) {
                            var l = R.findParentContentNode(e);
                            if (l && Oi(l, e)) {
                                var g = R.buildContentBlock(l);
                                if (g) return !g.target && s && (g.target = s), R.buildInteractionRequestParams(i, g.name, g.piece, g.target)
                            }
                        }
                    }

                    function Nr(e) {
                        if (!De || !De.length) return !1;
                        var i, s;
                        for (i = 0; i < De.length; i++)
                            if (s = De[i], s && s.name === e.name && s.piece === e.piece && s.target === e.target) return !0;
                        return !1
                    }

                    function Ii(e) {
                        if (!e) return !1;
                        var i = R.findTargetNode(e);
                        if (!i || R.shouldIgnoreInteraction(i)) return !1;
                        var s = Ni(i);
                        if (wi && s && s.type) return !1;
                        if (S.isLinkElement(i) && S.hasNodeAttributeWithValue(i, "href")) {
                            var l = String(S.getAttributeValueFromNode(i, "href"));
                            if (l.indexOf("#") === 0) return !1;
                            if (at(l)) return !0;
                            if (!R.isUrlToCurrentDomain(l)) return !1;
                            var g = R.buildContentBlock(e);
                            if (!g) return;
                            var _ = g.name,
                                L = g.piece,
                                j = g.target;
                            (!S.hasNodeAttributeWithValue(i, R.CONTENT_TARGET_ATTR) || i.wasContentTargetAttrReplaced) && (i.wasContentTargetAttrReplaced = !0, j = R.toAbsoluteUrl(l), S.setAnyAttribute(i, R.CONTENT_TARGET_ATTR, j));
                            var Z = $r(l, "click", _, L, j);
                            return R.setHrefAttribute(i, Z), !0
                        }
                        return !1
                    }

                    function Bo(e) {
                        if (!(!e || !e.length)) {
                            var i;
                            for (i = 0; i < e.length; i++) Ii(e[i])
                        }
                    }

                    function Or(e) {
                        return function(i) {
                            if (e) {
                                var s = R.findParentContentNode(e),
                                    l;
                                if (i && (l = i.target || i.srcElement), l || (l = e), !!Oi(s, l)) {
                                    if (zt(te), S.isLinkElement(e) && S.hasNodeAttributeWithValue(e, "href") && S.hasNodeAttributeWithValue(e, R.CONTENT_TARGET_ATTR)) {
                                        var g = S.getAttributeValueFromNode(e, "href");
                                        !at(g) && e.wasContentTargetAttrReplaced && S.setAnyAttribute(e, R.CONTENT_TARGET_ATTR, "")
                                    }
                                    var _ = Ni(e);
                                    if (vi && _ && _.type) return _.type;
                                    if (Ii(s)) return "href";
                                    var L = R.buildContentBlock(s);
                                    if (L) {
                                        var j = L.name,
                                            Z = L.piece,
                                            me = L.target,
                                            X = Et("click", j, Z, me);
                                        return we(X, te), X
                                    }
                                }
                            }
                        }
                    }

                    function Ir(e) {
                        if (!(!e || !e.length)) {
                            var i, s;
                            for (i = 0; i < e.length; i++) s = R.findTargetNode(e[i]), s && !s.contentInteractionTrackingSetupDone && (s.contentInteractionTrackingSetupDone = !0, pe(s, "click", Or(s)))
                        }
                    }

                    function Lr(e, i) {
                        if (!e || !e.length) return [];
                        var s, l;
                        for (s = 0; s < e.length; s++) Nr(e[s]) ? (e.splice(s, 1), s--) : De.push(e[s]);
                        if (!e || !e.length) return [];
                        Bo(i), Ir(i);
                        var g = [];
                        for (s = 0; s < e.length; s++) l = be(R.buildImpressionRequestParams(e[s].name, e[s].piece, e[s].target), void 0, "contentImpressions"), l && g.push(l);
                        return g
                    }

                    function Gt(e) {
                        var i = R.collectContent(e);
                        return Lr(i, e)
                    }

                    function Li(e) {
                        if (!e || !e.length) return [];
                        var i;
                        for (i = 0; i < e.length; i++) R.isNodeVisible(e[i]) || (e.splice(i, 1), i--);
                        return !e || !e.length ? [] : Gt(e)
                    }

                    function Pr(e, i, s) {
                        var l = R.buildImpressionRequestParams(e, i, s);
                        return be(l, null, "contentImpression")
                    }

                    function Rr(e, i) {
                        if (e) {
                            var s = R.findParentContentNode(e),
                                l = R.buildContentBlock(s);
                            if (l) return i || (i = "Unknown"), Et(i, l.name, l.piece, l.target)
                        }
                    }

                    function Wo(e, i, s, l) {
                        return "e_c=" + b(e) + "&e_a=" + b(i) + (w(s) ? "&e_n=" + b(s) : "") + (w(l) ? "&e_v=" + b(l) : "")
                    }

                    function Vr(e, i, s, l, g, _) {
                        if (Te(String(e)).length === 0 || Te(String(i)).length === 0) return ai("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces"), !1;
                        var L = be(Wo(e, i, s, l), g, "event");
                        we(L, te, _)
                    }

                    function zo(e, i, s, l) {
                        var g = be("search=" + b(e) + (i ? "&search_cat=" + b(i) : "") + (w(s) ? "&search_count=" + s : ""), l, "sitesearch");
                        we(g, te)
                    }

                    function Jo(e, i, s) {
                        var l = be("idgoal=" + e + (i ? "&revenue=" + i : ""), s, "goal");
                        we(l, te)
                    }

                    function qr(e, i, s, l, g) {
                        var _ = i + "=" + b(ot(e)),
                            L = Ar(g, "click", e);
                        L && (_ += "&" + L);
                        var j = be(_, s, "link");
                        we(j, te, l)
                    }

                    function Dr(e, i) {
                        return e !== "" ? e + i.charAt(0).toUpperCase() + i.slice(1) : i
                    }

                    function fe(e) {
                        var i, s, l = ["", "webkit", "ms", "moz"],
                            g;
                        if (!sr) {
                            for (s = 0; s < l.length; s++)
                                if (g = l[s], Object.prototype.hasOwnProperty.call(a, Dr(g, "hidden"))) {
                                    a[Dr(g, "visibilityState")] === "prerender" && (i = !0);
                                    break
                                }
                        }
                        if (i) {
                            pe(a, g + "visibilitychange", function _() {
                                a.removeEventListener(g + "visibilitychange", _, !1), e()
                            });
                            return
                        }
                        e()
                    }

                    function Go(e) {
                        if (e && S.hasNodeAttribute(e, "href")) {
                            var i = S.getAttributeValueFromNode(e, "href");
                            if (!(!i || at(i))) {
                                i = Ki(i, Vt), i.indexOf("?") > 0 ? i += "&" : i += "?";
                                var s = St().uuid,
                                    l = Lo();
                                i = vo(i, Vt, s + l), S.setAnyAttribute(e, "href", i)
                            }
                        }
                    }

                    function Zo(e) {
                        var i = S.getAttributeValueFromNode(e, "href");
                        if (!i) return !1;
                        i = String(i);
                        var s = i.indexOf("//") === 0 || i.indexOf("http://") === 0 || i.indexOf("https://") === 0;
                        if (!s) return !1;
                        var l = e.pathname || Wt(e.href),
                            g = (e.hostname || Me(e.href)).toLowerCase();
                        return dr(g, l) ? !yi(F, et(g)) : !1
                    }

                    function Pi(e) {
                        var i = Ni(e);
                        if (i && i.type) {
                            i.href = C(i.href), qr(i.href, i.type, void 0, null, e);
                            return
                        }
                        Ct && (e = xr(e), Zo(e) && Go(e))
                    }

                    function Xo() {
                        return a.all && !a.addEventListener
                    }

                    function Ko(e) {
                        var i = e.which,
                            s = typeof e.button;
                        return !i && s !== "undefined" && (Xo() ? e.button & 1 ? i = 1 : e.button & 2 ? i = 3 : e.button & 4 && (i = 2) : e.button === 0 || e.button === "0" ? i = 1 : e.button & 1 ? i = 2 : e.button & 2 && (i = 3)), i
                    }

                    function Yo(e) {
                        switch (Ko(e)) {
                            case 1:
                                return "left";
                            case 2:
                                return "middle";
                            case 3:
                                return "right"
                        }
                    }

                    function Qo(e) {
                        return e.target || e.srcElement
                    }

                    function Zt(e) {
                        return function(i) {
                            i = i || m.event;
                            var s = Yo(i),
                                l = Qo(i);
                            if (i.type === "click") {
                                var g = !1;
                                e && s === "middle" && (g = !0), l && !g && Pi(l)
                            } else i.type === "mousedown" ? s === "middle" && l ? (Ht = s, Ut = l) : Ht = Ut = null : i.type === "mouseup" ? (s === Ht && l === Ut && Pi(l), Ht = Ut = null) : i.type === "contextmenu" && Pi(l)
                        }
                    }

                    function Fr(e, i) {
                        var s = typeof i;
                        s === "undefined" && (i = !0), pe(e, "click", Zt(i), !1), i && (pe(e, "mouseup", Zt(i), !1), pe(e, "mousedown", Zt(i), !1), pe(e, "contextmenu", Zt(i), !1))
                    }

                    function es(e, i) {
                        vi = !0;
                        var s, l = Ai(tr, "ignore"),
                            g = a.links,
                            _ = null,
                            L = null;
                        if (g)
                            for (s = 0; s < g.length; s++) _ = g[s], l.test(_.className) || (L = typeof _.egoimmerceTrackers, L === "undefined" && (_.egoimmerceTrackers = []), Le(_.egoimmerceTrackers, i) === -1 && (_.egoimmerceTrackers.push(i), Fr(_, e)))
                    }

                    function jr(e, i, s) {
                        if (it) return !0;
                        it = !0;
                        var l = !1,
                            g, _;

                        function L() {
                            l = !0
                        }
                        wt(function() {
                            function j(me) {
                                setTimeout(function() {
                                    it && (l = !1, s.trackVisibleContentImpressions(), j(me))
                                }, me)
                            }

                            function Z(me) {
                                setTimeout(function() {
                                    it && (l && (l = !1, s.trackVisibleContentImpressions()), Z(me))
                                }, me)
                            }
                            if (e) {
                                for (g = ["scroll", "resize"], _ = 0; _ < g.length; _++) a.addEventListener ? a.addEventListener(g[_], L) : m.attachEvent("on" + g[_], L);
                                Z(100)
                            }
                            i && i > 0 && (i = parseInt(i, 10), j(i))
                        })
                    }

                    function ts() {
                        var e, i, s = {
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
                        if (!new RegExp("MSIE").test(f.userAgent)) {
                            if (f.mimeTypes && f.mimeTypes.length)
                                for (e in s) Object.prototype.hasOwnProperty.call(s, e) && (i = f.mimeTypes[s[e]], ye[e] = i && i.enabledPlugin ? "1" : "0");
                            typeof navigator.javaEnabled != "unknown" && w(f.javaEnabled) && f.javaEnabled() && (ye.java = "1"), H(m.GearsFactory) && (ye.gears = "1"), ye.cookie = Si()
                        }
                        var l = parseInt(p.width, 10),
                            g = parseInt(p.height, 10);
                        ye.res = parseInt(l, 10) + "x" + parseInt(g, 10)
                    }

                    function is(e, i) {
                        var s = null;
                        if (Q(e) && !w(k[e]) && i) {
                            if (Y(i)) s = i;
                            else if (Q(i)) try {
                                s = new Function("return (" + i + ")")()
                            } catch {}
                            k[e] = s
                        }
                        return s
                    }
                    ts(), Ei(), xi(), ci("run", null, is), this.hook = k, this.getHook = function(e) {
                        return k[e]
                    }, this.getQuery = function() {
                        return S
                    }, this.getContent = function() {
                        return R
                    }, this.buildContentImpressionRequest = Pr, this.buildContentInteractionRequest = Et, this.buildContentInteractionRequestNode = Rr, this.buildContentInteractionTrackingRedirectUrl = $r, this.getContentImpressionsRequestsFromNodes = Gt, this.getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet = Li, this.trackCallbackOnLoad = wt, this.trackCallbackOnReady = bt, this.buildContentImpressionsRequests = Lr, this.wasContentImpressionAlreadyTracked = Nr, this.appendContentInteractionToRequestIfPossible = Ar, this.setupInteractionsTracking = Ir, this.trackContentImpressionClickInteraction = Or, this.internalIsNodeVisible = ui, this.isNodeAuthorizedToTriggerInteraction = Oi, this.replaceHrefIfInternalLink = Ii, this.getDomains = function() {
                        return Se
                    }, this.getConfigIdPageView = function() {
                        return Bt
                    }, this.getConfigDownloadExtensions = function() {
                        return Pe
                    }, this.enableTrackOnlyVisibleContent = function(e, i) {
                        return jr(e, i, this)
                    }, this.clearTrackedContentImpressions = function() {
                        De = []
                    }, this.getTrackedContentImpressions = function() {
                        return De
                    }, this.clearEnableTrackOnlyVisibleContent = function() {
                        it = !1
                    }, this.disableLinkTracking = function() {
                        vi = !1, wi = !1
                    }, this.getConfigVisitorCookieTimeout = function() {
                        return xe
                    }, this.removeAllAsyncTrackersButFirst = function() {
                        var e = x[0];
                        x = [e]
                    }, this.getRemainingVisitorCookieTimeout = kr, this.getVisitorId = function() {
                        return St().uuid
                    }, this.getVisitorInfo = function() {
                        return Cr()
                    }, this.getAttributionInfo = function() {
                        return st()
                    }, this.getAttributionCampaignName = function() {
                        return st()[0]
                    }, this.getAttributionCampaignKeyword = function() {
                        return st()[1]
                    }, this.getAttributionReferrerTimestamp = function() {
                        return st()[2]
                    }, this.getAttributionReferrerUrl = function() {
                        return st()[3]
                    }, this.setTrackerUrl = function(e) {
                        J = e
                    }, this.getTrackerUrl = function() {
                        return J
                    }, this.setSubscriber = function(e) {
                        var i = ke(Ne || q, "eg_sub");
                        e ? se = e : i && !G(D("Subscriber")) ? se = i : se = G(D("Subscriber")), se && ne(D("Subscriber"), se, xe)
                    }, this.setListId = function(e) {
                        var i = ke(Ne || q, "eg_list");
                        i && (ve = e = i, ne(D("ListId"), e, xe)), ve = G(D("ListId")) || e
                    }, this.setCampaignId = function(e) {
                        var i = ke(Ne || q, "eg_cam");
                        i && (_e = e = i, ne(D("CampaignId"), e, yt)), _e = G(D("CampaignId")) || e
                    }, this.getEgoimmerceUrl = function() {
                        return Qi(this.getTrackerUrl(), ge)
                    }, this.addTracker = function(e, i) {
                        if (!i) throw new Error("A clientId must be given to add a new tracker");
                        (!w(e) || e === null) && (e = this.getTrackerUrl());
                        var s = new fi(e, i);
                        return x.push(s), s
                    }, this.getClientId = function() {
                        return M
                    }, this.getSubscriber = function() {
                        return se
                    }, this.setClientId = function(e) {
                        qo(e)
                    }, this.setUserId = function(e) {
                        !w(e) || !e.length || (Ae = e, ze = Mt(Ae).substr(0, 16))
                    }, this.getUserId = function() {
                        return Ae
                    }, this.setCustomData = function(e, i) {
                        Y(e) ? Re = e : (Re || (Re = {}), Re[e] = i)
                    }, this.getCustomData = function() {
                        return Re
                    }, this.setCustomRequestProcessing = function(e) {
                        mi = e
                    }, this.appendToTrackingUrl = function(e) {
                        ue = e
                    }, this.getRequest = function(e) {
                        return be(e)
                    }, this.addPlugin = function(e, i) {
                        r[e] = i
                    }, this.setCustomDimension = function(e, i) {
                        e = parseInt(e, 10), e > 0 && (w(i) || (i = ""), Q(i) || (i = String(i)), Je[e] = i)
                    }, this.getCustomDimension = function(e) {
                        if (e = parseInt(e, 10), e > 0 && Object.prototype.hasOwnProperty.call(Je, e)) return Je[e]
                    }, this.deleteCustomDimension = function(e) {
                        e = parseInt(e, 10), e > 0 && delete Je[e]
                    }, this.setCustomVariable = function(e, i, s, l) {
                        var g;
                        w(l) || (l = "visit"), w(i) && (w(s) || (s = ""), e > 0 && (i = Q(i) ? i : String(i), s = Q(s) ? s : String(s), g = [i.slice(0, ur), s.slice(0, ur)], l === "visit" || l === 2 ? (br(), he[e] = g) : l === "page" || l === 3 ? qe[e] = g : l === "event" && (Dt[e] = g)))
                    }, this.getCustomVariable = function(e, i) {
                        var s;
                        return w(i) || (i = "visit"), i === "page" || i === 3 ? s = qe[e] : i === "event" ? s = Dt[e] : (i === "visit" || i === 2) && (br(), s = he[e]), !w(s) || s && s[0] === "" ? !1 : s
                    }, this.deleteCustomVariable = function(e, i) {
                        this.getCustomVariable(e, i) && this.setCustomVariable(e, "", "", i)
                    }, this.deleteCustomVariables = function(e) {
                        e === "page" || e === 3 ? qe = {} : e === "event" ? Dt = {} : (e === "visit" || e === 2) && (he = {})
                    }, this.storeCustomVariablesInCookie = function() {
                        cr = !0
                    }, this.setLinkTrackingTimer = function(e) {
                        te = e
                    }, this.getLinkTrackingTimer = function() {
                        return te
                    }, this.setDownloadExtensions = function(e) {
                        Q(e) && (e = e.split("|")), Pe = e
                    }, this.addDownloadExtensions = function(e) {
                        var i;
                        for (Q(e) && (e = e.split("|")), i = 0; i < e.length; i++) Pe.push(e[i])
                    }, this.removeDownloadExtensions = function(e) {
                        var i, s = [];
                        for (Q(e) && (e = e.split("|")), i = 0; i < Pe.length; i++) Le(e, Pe[i]) === -1 && s.push(Pe[i]);
                        Pe = s
                    }, this.setDomains = function(e) {
                        Se = Q(e) ? [e] : e;
                        var i = !1,
                            s = 0,
                            l;
                        for (s; s < Se.length; s++) {
                            if (l = String(Se[s]), yi(F, et(l))) {
                                i = !0;
                                break
                            }
                            var g = Wt(l);
                            if (g && g !== "/" && g !== "/*") {
                                i = !0;
                                break
                            }
                        }
                        i || Se.push(F)
                    }, this.enableCrossDomainLinking = function() {
                        Ct = !0
                    }, this.disableCrossDomainLinking = function() {
                        Ct = !1
                    }, this.isCrossDomainLinkingEnabled = function() {
                        return Ct
                    }, this.setCrossDomainLinkingTimeout = function(e) {
                        di = e
                    }, this.setIgnoreClasses = function(e) {
                        tr = Q(e) ? [e] : e
                    }, this.setRequestMethod = function(e) {
                        ee = e || z
                    }, this.setRequestContentType = function(e) {
                        re = e || ie
                    }, this.setReferrerUrl = function(e) {
                        U = e
                    }, this.setCustomUrl = function(e) {
                        Ne = Ao(q, e)
                    }, this.getCurrentUrl = function() {
                        return Ne || q
                    }, this.setDocumentTitle = function(e) {
                        Lt = e
                    }, this.setAPIUrl = function(e) {
                        ge = e
                    }, this.setDownloadClasses = function(e) {
                        ir = Q(e) ? [e] : e
                    }, this.setLinkClasses = function(e) {
                        rr = Q(e) ? [e] : e
                    }, this.setCampaignNameKey = function(e) {
                        Pt = Q(e) ? [e] : e
                    }, this.setCampaignKeywordKey = function(e) {
                        Rt = Q(e) ? [e] : e
                    }, this.discardHashTag = function(e) {
                        nr = e
                    }, this.setCookieNamePrefix = function(e) {
                        or = e, he = wr()
                    }, this.setCookieDomain = function(e) {
                        var i = et(e);
                        Vo(i) && (Oe = i, Ei())
                    }, this.getCookieDomain = function() {
                        return Oe
                    }, this.hasCookies = function() {
                        return Si() === "1"
                    }, this.setSessionCookie = function(e, i, s) {
                        if (!e) throw new Error("Missing cookie name");
                        w(s) || (s = tt), bi.push(e), ne(D(e), i, s, Ie, Oe)
                    }, this.getCookie = function(e) {
                        var i = G(D(e));
                        return i === 0 ? null : i
                    }, this.setCookiePath = function(e) {
                        Ie = e, Ei()
                    }, this.getCookiePath = function(e) {
                        return Ie
                    }, this.setVisitorCookieTimeout = function(e) {
                        xe = e * 1e3
                    }, this.setSessionCookieTimeout = function(e) {
                        tt = e * 1e3
                    }, this.getSessionCookieTimeout = function() {
                        return tt
                    }, this.setReferralCookieTimeout = function(e) {
                        yt = e * 1e3
                    }, this.setConversionAttributionFirstReferrer = function(e) {
                        gi = e
                    }, this.disableCookies = function() {
                        Ve = !0, ye.cookie = "0", M && $i()
                    }, this.deleteCookies = function() {
                        $i()
                    }, this.setDoNotTrack = function(e) {
                        var i = f.doNotTrack || f.msDoNotTrack;
                        _t = e && (i === "yes" || i === "1"), _t && this.disableCookies()
                    }, this.addListener = function(e, i) {
                        Fr(e, i)
                    }, this.enableLinkTracking = function(e) {
                        wi = !0;
                        var i = this;
                        fe(function() {
                            bt(function() {
                                es(e, i)
                            })
                        })
                    }, this.enableJSErrorTracking = function() {
                        if (!W) {
                            W = !0;
                            var e = m.onerror;
                            m.onerror = function(i, s, l, g, _) {
                                return fe(function() {
                                    var L = "JavaScript Errors",
                                        j = s + ":" + l;
                                    g && (j += ":" + g), Vr(L, j, i)
                                }), e ? e(i, s, l, g, _) : !1
                            }
                        }
                    }, this.disablePerformanceTracking = function() {
                        ar = !1
                    }, this.setGenerationTimeMs = function(e) {
                        hi = parseInt(e, 10)
                    }, this.enableHeartBeatTimer = function(e) {
                        e = Math.max(e, 1), Ee = (e || 15) * 1e3, jt !== null && pr()
                    }, this.disableHeartBeatTimer = function() {
                        mr(), (Ee || kt) && (m.removeEventListener ? (m.removeEventListener("focus", ki, !0), m.removeEventListener("blur", Ti, !0)) : m.detachEvent && (m.detachEvent("onfocus", ki), m.detachEvent("onblur", Ti))), Ee = null, kt = !1
                    }, this.killFrame = function() {
                        m.location !== m.top.location && (m.top.location = m.location)
                    }, this.redirectFile = function(e) {
                        m.location.protocol === "file:" && (m.location = e)
                    }, this.setCountPreRendered = function(e) {
                        sr = e
                    }, this.trackGoal = function(e, i, s) {
                        fe(function() {
                            Jo(e, i, s)
                        })
                    }, this.trackLink = function(e, i, s, l) {
                        fe(function() {
                            qr(e, i, s, l)
                        })
                    }, this.getNumTrackedPageViews = function() {
                        return lr
                    }, this.trackPageView = function(e, i, s) {
                        De = [], We(M) ? fe(function() {
                            ko(J, ge, M)
                        }) : fe(function() {
                            lr++, Uo(e, i, s)
                        })
                    }, this.trackAllContentImpressions = function() {
                        We(M) || fe(function() {
                            bt(function() {
                                var e = R.findContentNodes(),
                                    i = Gt(e);
                                Jt(i, te)
                            })
                        })
                    }, this.trackVisibleContentImpressions = function(e, i) {
                        We(M) || (w(e) || (e = !0), w(i) || (i = 750), jr(e, i, this), fe(function() {
                            wt(function() {
                                var s = R.findContentNodes(),
                                    l = Li(s);
                                Jt(l, te)
                            })
                        }))
                    }, this.trackContentImpression = function(e, i, s) {
                        We(M) || (e = Te(e), i = Te(i), s = Te(s), e && (i = i || "Unknown", fe(function() {
                            var l = Pr(e, i, s);
                            we(l, te)
                        })))
                    }, this.trackContentImpressionsWithinNode = function(e) {
                        We(M) || !e || fe(function() {
                            it ? wt(function() {
                                var i = R.findContentNodesWithinNode(e),
                                    s = Li(i);
                                Jt(s, te)
                            }) : bt(function() {
                                var i = R.findContentNodesWithinNode(e),
                                    s = Gt(i);
                                Jt(s, te)
                            })
                        })
                    }, this.trackContentInteraction = function(e, i, s, l) {
                        We(M) || (e = Te(e), i = Te(i), s = Te(s), l = Te(l), !(!e || !i) && (s = s || "Unknown", fe(function() {
                            var g = Et(e, i, s, l);
                            we(g, te)
                        })))
                    }, this.trackContentInteractionNode = function(e, i) {
                        We(M) || !e || fe(function() {
                            var s = Rr(e, i);
                            we(s, te)
                        })
                    }, this.logAllContentBlocksOnPage = function() {
                        var e = R.findContentNodes(),
                            i = R.collectContent(e),
                            s = typeof console;
                        s !== "undefined" && console && console.log && console.log(i)
                    }, this.trackEvent = function(e, i, s, l, g, _) {
                        fe(function() {
                            Vr(e, i, s, l, g, _)
                        })
                    }, this.trackSiteSearch = function(e, i, s, l) {
                        fe(function() {
                            zo(e, i, s, l)
                        })
                    }, this.setEcommerceView = function(e, i, s, l) {
                        !w(s) || !s.length ? s = "" : s instanceof Array && (s = JSON.stringify(s)), qe[5] = ["_pkc", s], pi = s, w(l) && String(l).length && (qe[2] = ["_pkp", l]), !((!w(e) || !e.length) && (!w(i) || !i.length)) && (w(e) && e.length && (qe[3] = ["_pks", e], qt = e), (!w(i) || !i.length) && (i = ""), qe[4] = ["_pkn", i])
                    }, this.addEcommerceItem = function(e, i, s, l, g) {
                        e.length && (ce[e] = [e, i, s, l, g])
                    }, this.trackEcommerceOrder = function(e, i, s, l, g, _) {
                        jo(e, i, s, l, g, _)
                    }, this.trackEcommerceCartUpdate = function(e) {
                        Ho(e)
                    }, this.trackRequest = function(e, i, s, l) {
                        fe(function() {
                            var g = be(e, i, l);
                            we(g, te, s)
                        })
                    }, O.trigger("TrackerSetup", [this])
                }

                function So() {
                    return {
                        push: It
                    }
                }

                function Eo(t, o) {
                    var u = {},
                        h, d;
                    for (h = 0; h < o.length; h++) {
                        var k = o[h];
                        for (u[k] = 1, d = 0; d < t.length; d++)
                            if (t[d] && t[d][0]) {
                                var E = t[d][0];
                                k === E && (It(t[d]), delete t[d], u[E] > 1 && ai("The method " + E + ' is registered more than once in "_egoiaq" variable. Only the last call has an effect. Please have a look at the multiple Egoimmerce trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers'), u[E]++)
                            }
                    }
                    return t
                }
                var xo = ["addTracker", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCrossDomainLinkingTimeout", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setClientId", "enableLinkTracking", "setSecureCookie"];

                function er(t, o) {
                    var u = new fi(t, o);
                    for (x.push(u), window._egoiaq = Eo(window._egoiaq, xo), v = 0; v < window._egoiaq.length; v++) window._egoiaq[v] && It(window._egoiaq[v]);
                    return window._egoiaq = new So, u
                }
                return pe(m, "beforeunload", go, !1), Date.prototype.getTimeAlias = Date.prototype.getTime, O = {
                    initialized: !1,
                    JSON,
                    DOM: {
                        addEventListener: function(t, o, u, h) {
                            var d = typeof h;
                            d === "undefined" && (h = !1), pe(t, o, u, h)
                        },
                        onLoad: wt,
                        onReady: bt,
                        isNodeVisible: ui,
                        isOrWasNodeVisible: R.isNodeVisible
                    },
                    on: function(t, o) {
                        n[t] || (n[t] = []), n[t].push(o)
                    },
                    off: function(t, o) {
                        if (n[t]) {
                            var u = 0;
                            for (u; u < n[t].length; u++) n[t][u] === o && n[t].splice(u, 1)
                        }
                    },
                    trigger: function(t, o, u) {
                        if (n[t]) {
                            var h = 0;
                            for (h; h < n[t].length; h++) n[t][h].apply(u || m, o)
                        }
                    },
                    addPlugin: function(t, o) {
                        r[t] = o
                    },
                    getTracker: function(t, o) {
                        return w(o) || (o = this.getAsyncTracker().getClientId()), w(t) || (t = this.getAsyncTracker().getTrackerUrl()), new fi(t, o)
                    },
                    getAsyncTrackers: function() {
                        return x
                    },
                    addTracker: function(t, o) {
                        x.length ? x[0].addTracker(t, o) : er(t, o)
                    },
                    getAsyncTracker: function(t, o) {
                        var u;
                        if (x && x.length && x[0]) u = x[0];
                        else return er(t, o);
                        if (!o && !t) return u;
                        (!w(o) || o === null) && u && (o = u.getClientId()), (!w(t) || t === null) && u && (t = u.getTrackerUrl());
                        var h, d = 0;
                        for (d; d < x.length; d++)
                            if (h = x[d], h && String(h.getClientId()) === String(o) && h.getTrackerUrl() === t) return h
                    },
                    retryMissedPluginCalls: function() {
                        var t = N;
                        N = [];
                        var o = 0;
                        for (o; o < t.length; o++) It(t[o])
                    }
                }, typeof define == "function" && define.amd && define("egoimmerce", [], function() {
                    return O
                }), O
            }()),
            function() {
                function c() {
                    if (typeof window._egoiaq != "object") return !1;
                    var n = typeof window._egoiaq.length;
                    return n === "undefined" ? !1 : !!window._egoiaq.length
                }
                if (window && typeof window.egoimmercePluginAsyncInit == "object" && window.egoimmercePluginAsyncInit.length) {
                    var r = 0;
                    for (r; r < window.egoimmercePluginAsyncInit.length; r++) typeof window.egoimmercePluginAsyncInit[r] == "function" && window.egoimmercePluginAsyncInit[r]()
                }
                window && window.egoimmerceAsyncInit && window.egoimmerceAsyncInit(), window.Egoimmerce.getAsyncTrackers().length || (c() ? window.Egoimmerce.addTracker() : window._egoiaq = {
                    push: function(n) {
                        var a = typeof console;
                        a !== "undefined" && console && console.error && console.error("_egoiaq.push() was used but Egoimmerce tracker was not initialized before the egoimmerce.js file was loaded. Make sure to configure the tracker via _egoiaq.push before loading egoimmerce.js. Alternatively, you can create a tracker via Egoimmerce.addTracker() manually and then use _egoiaq.push but it may not fully work as tracker methods may not be executed in the correct order.", n)
                    }
                }), window.Egoimmerce.trigger("EgoimmerceInitialized", []), window.Egoimmerce.initialized = !0
            }(); /*! @license-end */
        class fo {
            mtmWorkaround() {
                if (Array.isArray(window._mtm))
                    for (const r of window._mtm) r != null && r.event && window.dispatchEvent(new CustomEvent(r.event));
                window._mtm = {
                    push: r => {
                        r.event && window.dispatchEvent(new CustomEvent(r.event))
                    }
                }
            }
            constructor(r) {
                setTimeout(() => this.mtmWorkaround(), 1e3)
            }
        }

        function Ji() {
            const c = window.__CONNECTED_DATA__;
            new fo(c), new zi({
                target: document.body,
                props: {
                    data: c
                }
            })
        }
        $e.init().then(() => {
            document.body ? Ji() : document.addEventListener("DOMContentLoaded", Ji, {
                once: !0
            })
        })
    })();
}