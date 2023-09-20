! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).bitcoinjs = t()
    }
}(function() {
    return function() {
        return function t(e, r, n) {
            function i(s, f) {
                if (!r[s]) {
                    if (!e[s]) {
                        var a = "function" == typeof require && require;
                        if (!f && a) return a(s, !0);
                        if (o) return o(s, !0);
                        var u = new Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = r[s] = {
                        exports: {}
                    };
                    e[s][0].call(c.exports, function(t) {
                        return i(e[s][1][t] || t)
                    }, c, c.exports, t, e, r, n)
                }
                return r[s].exports
            }
            for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]);
            return i
        }
    }()({
        1: [function(t, e, r) {
            (function(r) {
                (function() {
                    "use strict";
                    var n = t("object-assign");

                    function i(t, e) {
                        if (t === e) return 0;
                        for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                            if (t[i] !== e[i]) {
                                r = t[i], n = e[i];
                                break
                            } return r < n ? -1 : n < r ? 1 : 0
                    }

                    function o(t) {
                        return r.Buffer && "function" == typeof r.Buffer.isBuffer ? r.Buffer.isBuffer(t) : !(null == t || !t._isBuffer)
                    }
                    var s = t("util/"),
                        f = Object.prototype.hasOwnProperty,
                        a = Array.prototype.slice,
                        u = "foo" === function() {}.name;

                    function c(t) {
                        return Object.prototype.toString.call(t)
                    }

                    function h(t) {
                        return !o(t) && ("function" == typeof r.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer))))
                    }
                    var d = e.exports = g,
                        l = /\s*function\s+([^\(\s]*)\s*/;

                    function p(t) {
                        if (s.isFunction(t)) {
                            if (u) return t.name;
                            var e = t.toString().match(l);
                            return e && e[1]
                        }
                    }

                    function b(t, e) {
                        return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t
                    }

                    function m(t) {
                        if (u || !s.isFunction(t)) return s.inspect(t);
                        var e = p(t);
                        return "[Function" + (e ? ": " + e : "") + "]"
                    }

                    function y(t, e, r, n, i) {
                        throw new d.AssertionError({
                            message: r,
                            actual: t,
                            expected: e,
                            operator: n,
                            stackStartFunction: i
                        })
                    }

                    function g(t, e) {
                        t || y(t, !0, e, "==", d.ok)
                    }

                    function v(t, e, r, n) {
                        if (t === e) return !0;
                        if (o(t) && o(e)) return 0 === i(t, e);
                        if (s.isDate(t) && s.isDate(e)) return t.getTime() === e.getTime();
                        if (s.isRegExp(t) && s.isRegExp(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;
                        if (null !== t && "object" == typeof t || null !== e && "object" == typeof e) {
                            if (h(t) && h(e) && c(t) === c(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === i(new Uint8Array(t.buffer), new Uint8Array(e.buffer));
                            if (o(t) !== o(e)) return !1;
                            var f = (n = n || {
                                actual: [],
                                expected: []
                            }).actual.indexOf(t);
                            return -1 !== f && f === n.expected.indexOf(e) || (n.actual.push(t), n.expected.push(e), function(t, e, r, n) {
                                if (null === t || void 0 === t || null === e || void 0 === e) return !1;
                                if (s.isPrimitive(t) || s.isPrimitive(e)) return t === e;
                                if (r && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
                                var i = w(t),
                                    o = w(e);
                                if (i && !o || !i && o) return !1;
                                if (i) return t = a.call(t), e = a.call(e), v(t, e, r);
                                var f, u, c = E(t),
                                    h = E(e);
                                if (c.length !== h.length) return !1;
                                for (c.sort(), h.sort(), u = c.length - 1; u >= 0; u--)
                                    if (c[u] !== h[u]) return !1;
                                for (u = c.length - 1; u >= 0; u--)
                                    if (f = c[u], !v(t[f], e[f], r, n)) return !1;
                                return !0
                            }(t, e, r, n))
                        }
                        return r ? t === e : t == e
                    }

                    function w(t) {
                        return "[object Arguments]" == Object.prototype.toString.call(t)
                    }

                    function _(t, e) {
                        if (!t || !e) return !1;
                        if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t);
                        try {
                            if (t instanceof e) return !0
                        } catch (t) {}
                        return !Error.isPrototypeOf(e) && !0 === e.call({}, t)
                    }

                    function S(t, e, r, n) {
                        var i;
                        if ("function" != typeof e) throw new TypeError('"block" argument must be a function');
                        "string" == typeof r && (n = r, r = null), i = function(t) {
                            var e;
                            try {
                                t()
                            } catch (t) {
                                e = t
                            }
                            return e
                        }(e), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), t && !i && y(i, r, "Missing expected exception" + n);
                        var o = "string" == typeof n,
                            f = !t && s.isError(i),
                            a = !t && i && !r;
                        if ((f && o && _(i, r) || a) && y(i, r, "Got unwanted exception" + n), t && i && r && !_(i, r) || !t && i) throw i
                    }
                    d.AssertionError = function(t) {
                        var e;
                        this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = b(m((e = this).actual), 128) + " " + e.operator + " " + b(m(e.expected), 128), this.generatedMessage = !0);
                        var r = t.stackStartFunction || y;
                        if (Error.captureStackTrace) Error.captureStackTrace(this, r);
                        else {
                            var n = new Error;
                            if (n.stack) {
                                var i = n.stack,
                                    o = p(r),
                                    s = i.indexOf("\n" + o);
                                if (s >= 0) {
                                    var f = i.indexOf("\n", s + 1);
                                    i = i.substring(f + 1)
                                }
                                this.stack = i
                            }
                        }
                    }, s.inherits(d.AssertionError, Error), d.fail = y, d.ok = g, d.equal = function(t, e, r) {
                        t != e && y(t, e, r, "==", d.equal)
                    }, d.notEqual = function(t, e, r) {
                        t == e && y(t, e, r, "!=", d.notEqual)
                    }, d.deepEqual = function(t, e, r) {
                        v(t, e, !1) || y(t, e, r, "deepEqual", d.deepEqual)
                    }, d.deepStrictEqual = function(t, e, r) {
                        v(t, e, !0) || y(t, e, r, "deepStrictEqual", d.deepStrictEqual)
                    }, d.notDeepEqual = function(t, e, r) {
                        v(t, e, !1) && y(t, e, r, "notDeepEqual", d.notDeepEqual)
                    }, d.notDeepStrictEqual = function t(e, r, n) {
                        v(e, r, !0) && y(e, r, n, "notDeepStrictEqual", t)
                    }, d.strictEqual = function(t, e, r) {
                        t !== e && y(t, e, r, "===", d.strictEqual)
                    }, d.notStrictEqual = function(t, e, r) {
                        t === e && y(t, e, r, "!==", d.notStrictEqual)
                    }, d.throws = function(t, e, r) {
                        S(!0, t, e, r)
                    }, d.doesNotThrow = function(t, e, r) {
                        S(!1, t, e, r)
                    }, d.ifError = function(t) {
                        if (t) throw t
                    }, d.strict = n(function t(e, r) {
                        e || y(e, !0, r, "==", t)
                    }, d, {
                        equal: d.strictEqual,
                        deepEqual: d.deepStrictEqual,
                        notEqual: d.notStrictEqual,
                        notDeepEqual: d.notDeepStrictEqual
                    }), d.strict.strict = d.strict;
                    var E = Object.keys || function(t) {
                        var e = [];
                        for (var r in t) f.call(t, r) && e.push(r);
                        return e
                    }
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "object-assign": 12,
            "util/": 4
        }],
        2: [function(t, e, r) {
            "function" == typeof Object.create ? e.exports = function(t, e) {
                t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : e.exports = function(t, e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
            }
        }, {}],
        3: [function(t, e, r) {
            e.exports = function(t) {
                return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
            }
        }, {}],
        4: [function(t, e, r) {
            (function(e, n) {
                (function() {
                    var i = /%[sdj%]/g;
                    r.format = function(t) {
                        if (!y(t)) {
                            for (var e = [], r = 0; r < arguments.length; r++) e.push(f(arguments[r]));
                            return e.join(" ")
                        }
                        r = 1;
                        for (var n = arguments, o = n.length, s = String(t).replace(i, function(t) {
                                if ("%%" === t) return "%";
                                if (r >= o) return t;
                                switch (t) {
                                    case "%s":
                                        return String(n[r++]);
                                    case "%d":
                                        return Number(n[r++]);
                                    case "%j":
                                        try {
                                            return JSON.stringify(n[r++])
                                        } catch (t) {
                                            return "[Circular]"
                                        }
                                        default:
                                            return t
                                }
                            }), a = n[r]; r < o; a = n[++r]) b(a) || !w(a) ? s += " " + a : s += " " + f(a);
                        return s
                    }, r.deprecate = function(t, i) {
                        if (g(n.process)) return function() {
                            return r.deprecate(t, i).apply(this, arguments)
                        };
                        if (!0 === e.noDeprecation) return t;
                        var o = !1;
                        return function() {
                            if (!o) {
                                if (e.throwDeprecation) throw new Error(i);
                                e.traceDeprecation ? console.trace(i) : console.error(i), o = !0
                            }
                            return t.apply(this, arguments)
                        }
                    };
                    var o, s = {};

                    function f(t, e) {
                        var n = {
                            seen: [],
                            stylize: u
                        };
                        return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), p(e) ? n.showHidden = e : e && r._extend(n, e), g(n.showHidden) && (n.showHidden = !1), g(n.depth) && (n.depth = 2), g(n.colors) && (n.colors = !1), g(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = a), c(n, t, n.depth)
                    }

                    function a(t, e) {
                        var r = f.styles[e];
                        return r ? "[" + f.colors[r][0] + "m" + t + "[" + f.colors[r][1] + "m" : t
                    }

                    function u(t, e) {
                        return t
                    }

                    function c(t, e, n) {
                        if (t.customInspect && e && E(e.inspect) && e.inspect !== r.inspect && (!e.constructor || e.constructor.prototype !== e)) {
                            var i = e.inspect(n, t);
                            return y(i) || (i = c(t, i, n)), i
                        }
                        var o = function(t, e) {
                            if (g(e)) return t.stylize("undefined", "undefined");
                            if (y(e)) {
                                var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                                return t.stylize(r, "string")
                            }
                            if (m(e)) return t.stylize("" + e, "number");
                            if (p(e)) return t.stylize("" + e, "boolean");
                            if (b(e)) return t.stylize("null", "null")
                        }(t, e);
                        if (o) return o;
                        var s = Object.keys(e),
                            f = function(t) {
                                var e = {};
                                return t.forEach(function(t, r) {
                                    e[t] = !0
                                }), e
                            }(s);
                        if (t.showHidden && (s = Object.getOwnPropertyNames(e)), S(e) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return h(e);
                        if (0 === s.length) {
                            if (E(e)) {
                                var a = e.name ? ": " + e.name : "";
                                return t.stylize("[Function" + a + "]", "special")
                            }
                            if (v(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp");
                            if (_(e)) return t.stylize(Date.prototype.toString.call(e), "date");
                            if (S(e)) return h(e)
                        }
                        var u, w = "",
                            M = !1,
                            O = ["{", "}"];
                        (l(e) && (M = !0, O = ["[", "]"]), E(e)) && (w = " [Function" + (e.name ? ": " + e.name : "") + "]");
                        return v(e) && (w = " " + RegExp.prototype.toString.call(e)), _(e) && (w = " " + Date.prototype.toUTCString.call(e)), S(e) && (w = " " + h(e)), 0 !== s.length || M && 0 != e.length ? n < 0 ? v(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(e), u = M ? function(t, e, r, n, i) {
                            for (var o = [], s = 0, f = e.length; s < f; ++s) k(e, String(s)) ? o.push(d(t, e, r, n, String(s), !0)) : o.push("");
                            return i.forEach(function(i) {
                                i.match(/^\d+$/) || o.push(d(t, e, r, n, i, !0))
                            }), o
                        }(t, e, n, f, s) : s.map(function(r) {
                            return d(t, e, n, f, r, M)
                        }), t.seen.pop(), function(t, e, r) {
                            if (t.reduce(function(t, e) {
                                    return 0, e.indexOf("\n") >= 0 && 0, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                                }, 0) > 60) return r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1];
                            return r[0] + e + " " + t.join(", ") + " " + r[1]
                        }(u, w, O)) : O[0] + w + O[1]
                    }

                    function h(t) {
                        return "[" + Error.prototype.toString.call(t) + "]"
                    }

                    function d(t, e, r, n, i, o) {
                        var s, f, a;
                        if ((a = Object.getOwnPropertyDescriptor(e, i) || {
                                value: e[i]
                            }).get ? f = a.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : a.set && (f = t.stylize("[Setter]", "special")), k(n, i) || (s = "[" + i + "]"), f || (t.seen.indexOf(a.value) < 0 ? (f = b(r) ? c(t, a.value, null) : c(t, a.value, r - 1)).indexOf("\n") > -1 && (f = o ? f.split("\n").map(function(t) {
                                return "  " + t
                            }).join("\n").substr(2) : "\n" + f.split("\n").map(function(t) {
                                return "   " + t
                            }).join("\n")) : f = t.stylize("[Circular]", "special")), g(s)) {
                            if (o && i.match(/^\d+$/)) return f;
                            (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
                        }
                        return s + ": " + f
                    }

                    function l(t) {
                        return Array.isArray(t)
                    }

                    function p(t) {
                        return "boolean" == typeof t
                    }

                    function b(t) {
                        return null === t
                    }

                    function m(t) {
                        return "number" == typeof t
                    }

                    function y(t) {
                        return "string" == typeof t
                    }

                    function g(t) {
                        return void 0 === t
                    }

                    function v(t) {
                        return w(t) && "[object RegExp]" === M(t)
                    }

                    function w(t) {
                        return "object" == typeof t && null !== t
                    }

                    function _(t) {
                        return w(t) && "[object Date]" === M(t)
                    }

                    function S(t) {
                        return w(t) && ("[object Error]" === M(t) || t instanceof Error)
                    }

                    function E(t) {
                        return "function" == typeof t
                    }

                    function M(t) {
                        return Object.prototype.toString.call(t)
                    }

                    function O(t) {
                        return t < 10 ? "0" + t.toString(10) : t.toString(10)
                    }
                    r.debuglog = function(t) {
                        if (g(o) && (o = e.env.NODE_DEBUG || ""), t = t.toUpperCase(), !s[t])
                            if (new RegExp("\\b" + t + "\\b", "i").test(o)) {
                                var n = e.pid;
                                s[t] = function() {
                                    var e = r.format.apply(r, arguments);
                                    console.error("%s %d: %s", t, n, e)
                                }
                            } else s[t] = function() {};
                        return s[t]
                    }, r.inspect = f, f.colors = {
                        bold: [1, 22],
                        italic: [3, 23],
                        underline: [4, 24],
                        inverse: [7, 27],
                        white: [37, 39],
                        grey: [90, 39],
                        black: [30, 39],
                        blue: [34, 39],
                        cyan: [36, 39],
                        green: [32, 39],
                        magenta: [35, 39],
                        red: [31, 39],
                        yellow: [33, 39]
                    }, f.styles = {
                        special: "cyan",
                        number: "yellow",
                        boolean: "yellow",
                        undefined: "grey",
                        null: "bold",
                        string: "green",
                        date: "magenta",
                        regexp: "red"
                    }, r.isArray = l, r.isBoolean = p, r.isNull = b, r.isNullOrUndefined = function(t) {
                        return null == t
                    }, r.isNumber = m, r.isString = y, r.isSymbol = function(t) {
                        return "symbol" == typeof t
                    }, r.isUndefined = g, r.isRegExp = v, r.isObject = w, r.isDate = _, r.isError = S, r.isFunction = E, r.isPrimitive = function(t) {
                        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
                    }, r.isBuffer = t("./support/isBuffer");
                    var A = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                    function k(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }
                    r.log = function() {
                        var t, e;
                        console.log("%s - %s", (t = new Date, e = [O(t.getHours()), O(t.getMinutes()), O(t.getSeconds())].join(":"), [t.getDate(), A[t.getMonth()], e].join(" ")), r.format.apply(r, arguments))
                    }, r.inherits = t("inherits"), r._extend = function(t, e) {
                        if (!e || !w(e)) return t;
                        for (var r = Object.keys(e), n = r.length; n--;) t[r[n]] = e[r[n]];
                        return t
                    }
                }).call(this)
            }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./support/isBuffer": 3,
            _process: 13,
            inherits: 2
        }],
        5: [function(t, e, r) {
            "use strict";
            r.byteLength = function(t) {
                var e = u(t),
                    r = e[0],
                    n = e[1];
                return 3 * (r + n) / 4 - n
            }, r.toByteArray = function(t) {
                var e, r, n = u(t),
                    s = n[0],
                    f = n[1],
                    a = new o(function(t, e, r) {
                        return 3 * (e + r) / 4 - r
                    }(0, s, f)),
                    c = 0,
                    h = f > 0 ? s - 4 : s;
                for (r = 0; r < h; r += 4) e = i[t.charCodeAt(r)] << 18 | i[t.charCodeAt(r + 1)] << 12 | i[t.charCodeAt(r + 2)] << 6 | i[t.charCodeAt(r + 3)], a[c++] = e >> 16 & 255, a[c++] = e >> 8 & 255, a[c++] = 255 & e;
                2 === f && (e = i[t.charCodeAt(r)] << 2 | i[t.charCodeAt(r + 1)] >> 4, a[c++] = 255 & e);
                1 === f && (e = i[t.charCodeAt(r)] << 10 | i[t.charCodeAt(r + 1)] << 4 | i[t.charCodeAt(r + 2)] >> 2, a[c++] = e >> 8 & 255, a[c++] = 255 & e);
                return a
            }, r.fromByteArray = function(t) {
                for (var e, r = t.length, i = r % 3, o = [], s = 0, f = r - i; s < f; s += 16383) o.push(c(t, s, s + 16383 > f ? f : s + 16383));
                1 === i ? (e = t[r - 1], o.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1], o.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
                return o.join("")
            };
            for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, a = s.length; f < a; ++f) n[f] = s[f], i[s.charCodeAt(f)] = f;

            function u(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("=");
                return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
            }

            function c(t, e, r) {
                for (var i, o, s = [], f = e; f < r; f += 3) i = (t[f] << 16 & 16711680) + (t[f + 1] << 8 & 65280) + (255 & t[f + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
                return s.join("")
            }
            i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
        }, {}],
        6: [function(t, e, r) {}, {}],
        7: [function(t, e, r) {
            (function(e) {
                (function() {
                    "use strict";
                    var e = t("base64-js"),
                        n = t("ieee754");
                    r.Buffer = s, r.SlowBuffer = function(t) {
                        +t != t && (t = 0);
                        return s.alloc(+t)
                    }, r.INSPECT_MAX_BYTES = 50;
                    var i = 2147483647;

                    function o(t) {
                        if (t > i) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                        var e = new Uint8Array(t);
                        return e.__proto__ = s.prototype, e
                    }

                    function s(t, e, r) {
                        if ("number" == typeof t) {
                            if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                            return u(t)
                        }
                        return f(t, e, r)
                    }

                    function f(t, e, r) {
                        if ("string" == typeof t) return function(t, e) {
                            "string" == typeof e && "" !== e || (e = "utf8");
                            if (!s.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                            var r = 0 | d(t, e),
                                n = o(r),
                                i = n.write(t, e);
                            i !== r && (n = n.slice(0, i));
                            return n
                        }(t, e);
                        if (ArrayBuffer.isView(t)) return c(t);
                        if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                        if (C(t, ArrayBuffer) || t && C(t.buffer, ArrayBuffer)) return function(t, e, r) {
                            if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                            if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                            var n;
                            n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r);
                            return n.__proto__ = s.prototype, n
                        }(t, e, r);
                        if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                        var n = t.valueOf && t.valueOf();
                        if (null != n && n !== t) return s.from(n, e, r);
                        var i = function(t) {
                            if (s.isBuffer(t)) {
                                var e = 0 | h(t.length),
                                    r = o(e);
                                return 0 === r.length ? r : (t.copy(r, 0, 0, e), r)
                            }
                            if (void 0 !== t.length) return "number" != typeof t.length || q(t.length) ? o(0) : c(t);
                            if ("Buffer" === t.type && Array.isArray(t.data)) return c(t.data)
                        }(t);
                        if (i) return i;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), e, r);
                        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                    }

                    function a(t) {
                        if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                        if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
                    }

                    function u(t) {
                        return a(t), o(t < 0 ? 0 : 0 | h(t))
                    }

                    function c(t) {
                        for (var e = t.length < 0 ? 0 : 0 | h(t.length), r = o(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
                        return r
                    }

                    function h(t) {
                        if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                        return 0 | t
                    }

                    function d(t, e) {
                        if (s.isBuffer(t)) return t.length;
                        if (ArrayBuffer.isView(t) || C(t, ArrayBuffer)) return t.byteLength;
                        if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                        var r = t.length,
                            n = arguments.length > 2 && !0 === arguments[2];
                        if (!n && 0 === r) return 0;
                        for (var i = !1;;) switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                                return j(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            case "base64":
                                return U(t).length;
                            default:
                                if (i) return n ? -1 : j(t).length;
                                e = ("" + e).toLowerCase(), i = !0
                        }
                    }

                    function l(t, e, r) {
                        var n = t[e];
                        t[e] = t[r], t[r] = n
                    }

                    function p(t, e, r, n, i) {
                        if (0 === t.length) return -1;
                        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), q(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                            if (i) return -1;
                            r = t.length - 1
                        } else if (r < 0) {
                            if (!i) return -1;
                            r = 0
                        }
                        if ("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, r, n, i);
                        if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : b(t, [e], r, n, i);
                        throw new TypeError("val must be string, number or Buffer")
                    }

                    function b(t, e, r, n, i) {
                        var o, s = 1,
                            f = t.length,
                            a = e.length;
                        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                            if (t.length < 2 || e.length < 2) return -1;
                            s = 2, f /= 2, a /= 2, r /= 2
                        }

                        function u(t, e) {
                            return 1 === s ? t[e] : t.readUInt16BE(e * s)
                        }
                        if (i) {
                            var c = -1;
                            for (o = r; o < f; o++)
                                if (u(t, o) === u(e, -1 === c ? 0 : o - c)) {
                                    if (-1 === c && (c = o), o - c + 1 === a) return c * s
                                } else -1 !== c && (o -= o - c), c = -1
                        } else
                            for (r + a > f && (r = f - a), o = r; o >= 0; o--) {
                                for (var h = !0, d = 0; d < a; d++)
                                    if (u(t, o + d) !== u(e, d)) {
                                        h = !1;
                                        break
                                    } if (h) return o
                            }
                        return -1
                    }

                    function m(t, e, r, n) {
                        r = Number(r) || 0;
                        var i = t.length - r;
                        n ? (n = Number(n)) > i && (n = i) : n = i;
                        var o = e.length;
                        n > o / 2 && (n = o / 2);
                        for (var s = 0; s < n; ++s) {
                            var f = parseInt(e.substr(2 * s, 2), 16);
                            if (q(f)) return s;
                            t[r + s] = f
                        }
                        return s
                    }

                    function y(t, e, r, n) {
                        return D(j(e, t.length - r), t, r, n)
                    }

                    function g(t, e, r, n) {
                        return D(function(t) {
                            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                            return e
                        }(e), t, r, n)
                    }

                    function v(t, e, r, n) {
                        return g(t, e, r, n)
                    }

                    function w(t, e, r, n) {
                        return D(U(e), t, r, n)
                    }

                    function _(t, e, r, n) {
                        return D(function(t, e) {
                            for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                            return o
                        }(e, t.length - r), t, r, n)
                    }

                    function S(t, r, n) {
                        return 0 === r && n === t.length ? e.fromByteArray(t) : e.fromByteArray(t.slice(r, n))
                    }

                    function E(t, e, r) {
                        r = Math.min(t.length, r);
                        for (var n = [], i = e; i < r;) {
                            var o, s, f, a, u = t[i],
                                c = null,
                                h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                            if (i + h <= r) switch (h) {
                                case 1:
                                    u < 128 && (c = u);
                                    break;
                                case 2:
                                    128 == (192 & (o = t[i + 1])) && (a = (31 & u) << 6 | 63 & o) > 127 && (c = a);
                                    break;
                                case 3:
                                    o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (a = (15 & u) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (a < 55296 || a > 57343) && (c = a);
                                    break;
                                case 4:
                                    o = t[i + 1], s = t[i + 2], f = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & f) && (a = (15 & u) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & f) > 65535 && a < 1114112 && (c = a)
                            }
                            null === c ? (c = 65533, h = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), i += h
                        }
                        return function(t) {
                            var e = t.length;
                            if (e <= M) return String.fromCharCode.apply(String, t);
                            var r = "",
                                n = 0;
                            for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += M));
                            return r
                        }(n)
                    }
                    r.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = function() {
                        try {
                            var t = new Uint8Array(1);
                            return t.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function() {
                                    return 42
                                }
                            }, 42 === t.foo()
                        } catch (t) {
                            return !1
                        }
                    }(), s.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
                        enumerable: !0,
                        get: function() {
                            if (s.isBuffer(this)) return this.buffer
                        }
                    }), Object.defineProperty(s.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            if (s.isBuffer(this)) return this.byteOffset
                        }
                    }), "undefined" != typeof Symbol && null != Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                        value: null,
                        configurable: !0,
                        enumerable: !1,
                        writable: !1
                    }), s.poolSize = 8192, s.from = function(t, e, r) {
                        return f(t, e, r)
                    }, s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, s.alloc = function(t, e, r) {
                        return function(t, e, r) {
                            return a(t), t <= 0 ? o(t) : void 0 !== e ? "string" == typeof r ? o(t).fill(e, r) : o(t).fill(e) : o(t)
                        }(t, e, r)
                    }, s.allocUnsafe = function(t) {
                        return u(t)
                    }, s.allocUnsafeSlow = function(t) {
                        return u(t)
                    }, s.isBuffer = function(t) {
                        return null != t && !0 === t._isBuffer && t !== s.prototype
                    }, s.compare = function(t, e) {
                        if (C(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), C(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (t === e) return 0;
                        for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                            if (t[i] !== e[i]) {
                                r = t[i], n = e[i];
                                break
                            } return r < n ? -1 : n < r ? 1 : 0
                    }, s.isEncoding = function(t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, s.concat = function(t, e) {
                        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return s.alloc(0);
                        var r;
                        if (void 0 === e)
                            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                        var n = s.allocUnsafe(e),
                            i = 0;
                        for (r = 0; r < t.length; ++r) {
                            var o = t[r];
                            if (C(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                            o.copy(n, i), i += o.length
                        }
                        return n
                    }, s.byteLength = d, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                        var t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var e = 0; e < t; e += 2) l(this, e, e + 1);
                        return this
                    }, s.prototype.swap32 = function() {
                        var t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var e = 0; e < t; e += 4) l(this, e, e + 3), l(this, e + 1, e + 2);
                        return this
                    }, s.prototype.swap64 = function() {
                        var t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var e = 0; e < t; e += 8) l(this, e, e + 7), l(this, e + 1, e + 6), l(this, e + 2, e + 5), l(this, e + 3, e + 4);
                        return this
                    }, s.prototype.toString = function() {
                        var t = this.length;
                        return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : function(t, e, r) {
                            var n = !1;
                            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                            if ((r >>>= 0) <= (e >>>= 0)) return "";
                            for (t || (t = "utf8");;) switch (t) {
                                case "hex":
                                    return k(this, e, r);
                                case "utf8":
                                case "utf-8":
                                    return E(this, e, r);
                                case "ascii":
                                    return O(this, e, r);
                                case "latin1":
                                case "binary":
                                    return A(this, e, r);
                                case "base64":
                                    return S(this, e, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return T(this, e, r);
                                default:
                                    if (n) throw new TypeError("Unknown encoding: " + t);
                                    t = (t + "").toLowerCase(), n = !0
                            }
                        }.apply(this, arguments)
                    }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
                        if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === s.compare(this, t)
                    }, s.prototype.inspect = function() {
                        var t = "",
                            e = r.INSPECT_MAX_BYTES;
                        return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
                    }, s.prototype.compare = function(t, e, r, n, i) {
                        if (C(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                        if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                        if (n >= i && e >= r) return 0;
                        if (n >= i) return -1;
                        if (e >= r) return 1;
                        if (e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;
                        for (var o = i - n, f = r - e, a = Math.min(o, f), u = this.slice(n, i), c = t.slice(e, r), h = 0; h < a; ++h)
                            if (u[h] !== c[h]) {
                                o = u[h], f = c[h];
                                break
                            } return o < f ? -1 : f < o ? 1 : 0
                    }, s.prototype.includes = function(t, e, r) {
                        return -1 !== this.indexOf(t, e, r)
                    }, s.prototype.indexOf = function(t, e, r) {
                        return p(this, t, e, r, !0)
                    }, s.prototype.lastIndexOf = function(t, e, r) {
                        return p(this, t, e, r, !1)
                    }, s.prototype.write = function(t, e, r, n) {
                        if (void 0 === e) n = "utf8", r = this.length, e = 0;
                        else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                        else {
                            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                        }
                        var i = this.length - e;
                        if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var o = !1;;) switch (n) {
                            case "hex":
                                return m(this, t, e, r);
                            case "utf8":
                            case "utf-8":
                                return y(this, t, e, r);
                            case "ascii":
                                return g(this, t, e, r);
                            case "latin1":
                            case "binary":
                                return v(this, t, e, r);
                            case "base64":
                                return w(this, t, e, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return _(this, t, e, r);
                            default:
                                if (o) throw new TypeError("Unknown encoding: " + n);
                                n = ("" + n).toLowerCase(), o = !0
                        }
                    }, s.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    };
                    var M = 4096;

                    function O(t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                        return n
                    }

                    function A(t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                        return n
                    }

                    function k(t, e, r) {
                        var n = t.length;
                        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                        for (var i = "", o = e; o < r; ++o) i += L(t[o]);
                        return i
                    }

                    function T(t, e, r) {
                        for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                        return i
                    }

                    function x(t, e, r) {
                        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                        if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
                    }

                    function I(t, e, r, n, i, o) {
                        if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                        if (r + n > t.length) throw new RangeError("Index out of range")
                    }

                    function P(t, e, r, n, i, o) {
                        if (r + n > t.length) throw new RangeError("Index out of range");
                        if (r < 0) throw new RangeError("Index out of range")
                    }

                    function R(t, e, r, i, o) {
                        return e = +e, r >>>= 0, o || P(t, 0, r, 4), n.write(t, e, r, i, 23, 4), r + 4
                    }

                    function B(t, e, r, i, o) {
                        return e = +e, r >>>= 0, o || P(t, 0, r, 8), n.write(t, e, r, i, 52, 8), r + 8
                    }
                    s.prototype.slice = function(t, e) {
                        var r = this.length;
                        t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                        var n = this.subarray(t, e);
                        return n.__proto__ = s.prototype, n
                    }, s.prototype.readUIntLE = function(t, e, r) {
                        t >>>= 0, e >>>= 0, r || x(t, e, this.length);
                        for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                        return n
                    }, s.prototype.readUIntBE = function(t, e, r) {
                        t >>>= 0, e >>>= 0, r || x(t, e, this.length);
                        for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
                        return n
                    }, s.prototype.readUInt8 = function(t, e) {
                        return t >>>= 0, e || x(t, 1, this.length), this[t]
                    }, s.prototype.readUInt16LE = function(t, e) {
                        return t >>>= 0, e || x(t, 2, this.length), this[t] | this[t + 1] << 8
                    }, s.prototype.readUInt16BE = function(t, e) {
                        return t >>>= 0, e || x(t, 2, this.length), this[t] << 8 | this[t + 1]
                    }, s.prototype.readUInt32LE = function(t, e) {
                        return t >>>= 0, e || x(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                    }, s.prototype.readUInt32BE = function(t, e) {
                        return t >>>= 0, e || x(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                    }, s.prototype.readIntLE = function(t, e, r) {
                        t >>>= 0, e >>>= 0, r || x(t, e, this.length);
                        for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                        return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
                    }, s.prototype.readIntBE = function(t, e, r) {
                        t >>>= 0, e >>>= 0, r || x(t, e, this.length);
                        for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
                        return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
                    }, s.prototype.readInt8 = function(t, e) {
                        return t >>>= 0, e || x(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                    }, s.prototype.readInt16LE = function(t, e) {
                        t >>>= 0, e || x(t, 2, this.length);
                        var r = this[t] | this[t + 1] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }, s.prototype.readInt16BE = function(t, e) {
                        t >>>= 0, e || x(t, 2, this.length);
                        var r = this[t + 1] | this[t] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }, s.prototype.readInt32LE = function(t, e) {
                        return t >>>= 0, e || x(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                    }, s.prototype.readInt32BE = function(t, e) {
                        return t >>>= 0, e || x(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                    }, s.prototype.readFloatLE = function(t, e) {
                        return t >>>= 0, e || x(t, 4, this.length), n.read(this, t, !0, 23, 4)
                    }, s.prototype.readFloatBE = function(t, e) {
                        return t >>>= 0, e || x(t, 4, this.length), n.read(this, t, !1, 23, 4)
                    }, s.prototype.readDoubleLE = function(t, e) {
                        return t >>>= 0, e || x(t, 8, this.length), n.read(this, t, !0, 52, 8)
                    }, s.prototype.readDoubleBE = function(t, e) {
                        return t >>>= 0, e || x(t, 8, this.length), n.read(this, t, !1, 52, 8)
                    }, s.prototype.writeUIntLE = function(t, e, r, n) {
                        (t = +t, e >>>= 0, r >>>= 0, n) || I(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        var i = 1,
                            o = 0;
                        for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                        return e + r
                    }, s.prototype.writeUIntBE = function(t, e, r, n) {
                        (t = +t, e >>>= 0, r >>>= 0, n) || I(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        var i = r - 1,
                            o = 1;
                        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                        return e + r
                    }, s.prototype.writeUInt8 = function(t, e, r) {
                        return t = +t, e >>>= 0, r || I(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                    }, s.prototype.writeUInt16LE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || I(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                    }, s.prototype.writeUInt16BE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || I(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                    }, s.prototype.writeUInt32LE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || I(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                    }, s.prototype.writeUInt32BE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || I(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                    }, s.prototype.writeIntLE = function(t, e, r, n) {
                        if (t = +t, e >>>= 0, !n) {
                            var i = Math.pow(2, 8 * r - 1);
                            I(this, t, e, r, i - 1, -i)
                        }
                        var o = 0,
                            s = 1,
                            f = 0;
                        for (this[e] = 255 & t; ++o < r && (s *= 256);) t < 0 && 0 === f && 0 !== this[e + o - 1] && (f = 1), this[e + o] = (t / s >> 0) - f & 255;
                        return e + r
                    }, s.prototype.writeIntBE = function(t, e, r, n) {
                        if (t = +t, e >>>= 0, !n) {
                            var i = Math.pow(2, 8 * r - 1);
                            I(this, t, e, r, i - 1, -i)
                        }
                        var o = r - 1,
                            s = 1,
                            f = 0;
                        for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === f && 0 !== this[e + o + 1] && (f = 1), this[e + o] = (t / s >> 0) - f & 255;
                        return e + r
                    }, s.prototype.writeInt8 = function(t, e, r) {
                        return t = +t, e >>>= 0, r || I(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                    }, s.prototype.writeInt16LE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || I(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                    }, s.prototype.writeInt16BE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || I(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                    }, s.prototype.writeInt32LE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || I(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                    }, s.prototype.writeInt32BE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || I(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                    }, s.prototype.writeFloatLE = function(t, e, r) {
                        return R(this, t, e, !0, r)
                    }, s.prototype.writeFloatBE = function(t, e, r) {
                        return R(this, t, e, !1, r)
                    }, s.prototype.writeDoubleLE = function(t, e, r) {
                        return B(this, t, e, !0, r)
                    }, s.prototype.writeDoubleBE = function(t, e, r) {
                        return B(this, t, e, !1, r)
                    }, s.prototype.copy = function(t, e, r, n) {
                        if (!s.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                        if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                        var i = n - r;
                        if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, n);
                        else if (this === t && r < e && e < n)
                            for (var o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
                        else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                        return i
                    }, s.prototype.fill = function(t, e, r, n) {
                        if ("string" == typeof t) {
                            if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                            if ("string" == typeof n && !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                            if (1 === t.length) {
                                var i = t.charCodeAt(0);
                                ("utf8" === n && i < 128 || "latin1" === n) && (t = i)
                            }
                        } else "number" == typeof t && (t &= 255);
                        if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                        if (r <= e) return this;
                        var o;
                        if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                            for (o = e; o < r; ++o) this[o] = t;
                        else {
                            var f = s.isBuffer(t) ? t : s.from(t, n),
                                a = f.length;
                            if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                            for (o = 0; o < r - e; ++o) this[o + e] = f[o % a]
                        }
                        return this
                    };
                    var N = /[^+/0-9A-Za-z-_]/g;

                    function L(t) {
                        return t < 16 ? "0" + t.toString(16) : t.toString(16)
                    }

                    function j(t, e) {
                        var r;
                        e = e || 1 / 0;
                        for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                            if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                                if (!i) {
                                    if (r > 56319) {
                                        (e -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    if (s + 1 === n) {
                                        (e -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    i = r;
                                    continue
                                }
                                if (r < 56320) {
                                    (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                                    continue
                                }
                                r = 65536 + (i - 55296 << 10 | r - 56320)
                            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                            if (i = null, r < 128) {
                                if ((e -= 1) < 0) break;
                                o.push(r)
                            } else if (r < 2048) {
                                if ((e -= 2) < 0) break;
                                o.push(r >> 6 | 192, 63 & r | 128)
                            } else if (r < 65536) {
                                if ((e -= 3) < 0) break;
                                o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                            } else {
                                if (!(r < 1114112)) throw new Error("Invalid code point");
                                if ((e -= 4) < 0) break;
                                o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                            }
                        }
                        return o
                    }

                    function U(t) {
                        return e.toByteArray(function(t) {
                            if ((t = (t = t.split("=")[0]).trim().replace(N, "")).length < 2) return "";
                            for (; t.length % 4 != 0;) t += "=";
                            return t
                        }(t))
                    }

                    function D(t, e, r, n) {
                        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                        return i
                    }

                    function C(t, e) {
                        return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                    }

                    function q(t) {
                        return t != t
                    }
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, {
            "base64-js": 5,
            buffer: 7,
            ieee754: 9
        }],
        8: [function(t, e, r) {
            "use strict";
            var n, i = "object" == typeof Reflect ? Reflect : null,
                o = i && "function" == typeof i.apply ? i.apply : function(t, e, r) {
                    return Function.prototype.apply.call(t, e, r)
                };
            n = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            } : function(t) {
                return Object.getOwnPropertyNames(t)
            };
            var s = Number.isNaN || function(t) {
                return t != t
            };

            function f() {
                f.init.call(this)
            }
            e.exports = f, e.exports.once = function(t, e) {
                return new Promise(function(r, n) {
                    function i(r) {
                        t.removeListener(e, o), n(r)
                    }

                    function o() {
                        "function" == typeof t.removeListener && t.removeListener("error", i), r([].slice.call(arguments))
                    }
                    m(t, e, o, {
                        once: !0
                    }), "error" !== e && function(t, e, r) {
                        "function" == typeof t.on && m(t, "error", e, r)
                    }(t, i, {
                        once: !0
                    })
                })
            }, f.EventEmitter = f, f.prototype._events = void 0, f.prototype._eventsCount = 0, f.prototype._maxListeners = void 0;
            var a = 10;

            function u(t) {
                if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
            }

            function c(t) {
                return void 0 === t._maxListeners ? f.defaultMaxListeners : t._maxListeners
            }

            function h(t, e, r, n) {
                var i, o, s, f;
                if (u(r), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), s = o[e]), void 0 === s) s = o[e] = r, ++t._eventsCount;
                else if ("function" == typeof s ? s = o[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), (i = c(t)) > 0 && s.length > i && !s.warned) {
                    s.warned = !0;
                    var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, f = a, console && console.warn && console.warn(f)
                }
                return t
            }

            function d(t, e, r) {
                var n = {
                        fired: !1,
                        wrapFn: void 0,
                        target: t,
                        type: e,
                        listener: r
                    },
                    i = function() {
                        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                    }.bind(n);
                return i.listener = r, n.wrapFn = i, i
            }

            function l(t, e, r) {
                var n = t._events;
                if (void 0 === n) return [];
                var i = n[e];
                return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(t) {
                    for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
                    return e
                }(i) : b(i, i.length)
            }

            function p(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var r = e[t];
                    if ("function" == typeof r) return 1;
                    if (void 0 !== r) return r.length
                }
                return 0
            }

            function b(t, e) {
                for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
                return r
            }

            function m(t, e, r, n) {
                if ("function" == typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
                else {
                    if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                    t.addEventListener(e, function i(o) {
                        n.once && t.removeEventListener(e, i), r(o)
                    })
                }
            }
            Object.defineProperty(f, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    a = t
                }
            }), f.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, f.prototype.setMaxListeners = function(t) {
                if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t, this
            }, f.prototype.getMaxListeners = function() {
                return c(this)
            }, f.prototype.emit = function(t) {
                for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
                var n = "error" === t,
                    i = this._events;
                if (void 0 !== i) n = n && void 0 === i.error;
                else if (!n) return !1;
                if (n) {
                    var s;
                    if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
                    var f = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                    throw f.context = s, f
                }
                var a = i[t];
                if (void 0 === a) return !1;
                if ("function" == typeof a) o(a, this, e);
                else {
                    var u = a.length,
                        c = b(a, u);
                    for (r = 0; r < u; ++r) o(c[r], this, e)
                }
                return !0
            }, f.prototype.addListener = function(t, e) {
                return h(this, t, e, !1)
            }, f.prototype.on = f.prototype.addListener, f.prototype.prependListener = function(t, e) {
                return h(this, t, e, !0)
            }, f.prototype.once = function(t, e) {
                return u(e), this.on(t, d(this, t, e)), this
            }, f.prototype.prependOnceListener = function(t, e) {
                return u(e), this.prependListener(t, d(this, t, e)), this
            }, f.prototype.removeListener = function(t, e) {
                var r, n, i, o, s;
                if (u(e), void 0 === (n = this._events)) return this;
                if (void 0 === (r = n[t])) return this;
                if (r === e || r.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, r.listener || e));
                else if ("function" != typeof r) {
                    for (i = -1, o = r.length - 1; o >= 0; o--)
                        if (r[o] === e || r[o].listener === e) {
                            s = r[o].listener, i = o;
                            break
                        } if (i < 0) return this;
                    0 === i ? r.shift() : function(t, e) {
                        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                        t.pop()
                    }(r, i), 1 === r.length && (n[t] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", t, s || e)
                }
                return this
            }, f.prototype.off = f.prototype.removeListener, f.prototype.removeAllListeners = function(t) {
                var e, r, n;
                if (void 0 === (r = this._events)) return this;
                if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]), this;
                if (0 === arguments.length) {
                    var i, o = Object.keys(r);
                    for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(e = r[t])) this.removeListener(t, e);
                else if (void 0 !== e)
                    for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
                return this
            }, f.prototype.listeners = function(t) {
                return l(this, t, !0)
            }, f.prototype.rawListeners = function(t) {
                return l(this, t, !1)
            }, f.listenerCount = function(t, e) {
                return "function" == typeof t.listenerCount ? t.listenerCount(e) : p.call(t, e)
            }, f.prototype.listenerCount = p, f.prototype.eventNames = function() {
                return this._eventsCount > 0 ? n(this._events) : []
            }
        }, {}],
        9: [function(t, e, r) {
            r.read = function(t, e, r, n, i) {
                var o, s, f = 8 * i - n - 1,
                    a = (1 << f) - 1,
                    u = a >> 1,
                    c = -7,
                    h = r ? i - 1 : 0,
                    d = r ? -1 : 1,
                    l = t[e + h];
                for (h += d, o = l & (1 << -c) - 1, l >>= -c, c += f; c > 0; o = 256 * o + t[e + h], h += d, c -= 8);
                for (s = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; s = 256 * s + t[e + h], h += d, c -= 8);
                if (0 === o) o = 1 - u;
                else {
                    if (o === a) return s ? NaN : 1 / 0 * (l ? -1 : 1);
                    s += Math.pow(2, n), o -= u
                }
                return (l ? -1 : 1) * s * Math.pow(2, o - n)
            }, r.write = function(t, e, r, n, i, o) {
                var s, f, a, u = 8 * o - i - 1,
                    c = (1 << u) - 1,
                    h = c >> 1,
                    d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    l = n ? 0 : o - 1,
                    p = n ? 1 : -1,
                    b = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (a = Math.pow(2, -s)) < 1 && (s--, a *= 2), (e += s + h >= 1 ? d / a : d * Math.pow(2, 1 - h)) * a >= 2 && (s++, a /= 2), s + h >= c ? (f = 0, s = c) : s + h >= 1 ? (f = (e * a - 1) * Math.pow(2, i), s += h) : (f = e * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + l] = 255 & f, l += p, f /= 256, i -= 8);
                for (s = s << i | f, u += i; u > 0; t[r + l] = 255 & s, l += p, s /= 256, u -= 8);
                t[r + l - p] |= 128 * b
            }
        }, {}],
        10: [function(t, e, r) {
            "function" == typeof Object.create ? e.exports = function(t, e) {
                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function(t, e) {
                if (e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }
            }
        }, {}],
        11: [function(t, e, r) {
            function n(t) {
                return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
            }
            e.exports = function(t) {
                return null != t && (n(t) || function(t) {
                    return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
                }(t) || !!t._isBuffer)
            }
        }, {}],
        12: [function(t, e, r) {
            "use strict";
            var n = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                            return e[t]
                        }).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                        n[t] = t
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function(t, e) {
                for (var r, s, f = function(t) {
                        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(t)
                    }(t), a = 1; a < arguments.length; a++) {
                    for (var u in r = Object(arguments[a])) i.call(r, u) && (f[u] = r[u]);
                    if (n) {
                        s = n(r);
                        for (var c = 0; c < s.length; c++) o.call(r, s[c]) && (f[s[c]] = r[s[c]])
                    }
                }
                return f
            }
        }, {}],
        13: [function(t, e, r) {
            var n, i, o = e.exports = {};

            function s() {
                throw new Error("setTimeout has not been defined")
            }

            function f() {
                throw new Error("clearTimeout has not been defined")
            }

            function a(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : s
                } catch (t) {
                    n = s
                }
                try {
                    i = "function" == typeof clearTimeout ? clearTimeout : f
                } catch (t) {
                    i = f
                }
            }();
            var u, c = [],
                h = !1,
                d = -1;

            function l() {
                h && u && (h = !1, u.length ? c = u.concat(c) : d = -1, c.length && p())
            }

            function p() {
                if (!h) {
                    var t = a(l);
                    h = !0;
                    for (var e = c.length; e;) {
                        for (u = c, c = []; ++d < e;) u && u[d].run();
                        d = -1, e = c.length
                    }
                    u = null, h = !1,
                        function(t) {
                            if (i === clearTimeout) return clearTimeout(t);
                            if ((i === f || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                            try {
                                i(t)
                            } catch (e) {
                                try {
                                    return i.call(null, t)
                                } catch (e) {
                                    return i.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function b(t, e) {
                this.fun = t, this.array = e
            }

            function m() {}
            o.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                c.push(new b(t, e)), 1 !== c.length || h || a(p)
            }, b.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(t) {
                return []
            }, o.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        }, {}],
        14: [function(t, e, r) {
            var n = t("buffer"),
                i = n.Buffer;

            function o(t, e) {
                for (var r in t) e[r] = t[r]
            }

            function s(t, e, r) {
                return i(t, e, r)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, r), r.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function(t, e, r) {
                if ("number" == typeof t) throw new TypeError("Argument must not be a number");
                return i(t, e, r)
            }, s.alloc = function(t, e, r) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                var n = i(t);
                return void 0 !== e ? "string" == typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n
            }, s.allocUnsafe = function(t) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                return i(t)
            }, s.allocUnsafeSlow = function(t) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                return n.SlowBuffer(t)
            }
        }, {
            buffer: 7
        }],
        15: [function(t, e, r) {
            e.exports = i;
            var n = t("events").EventEmitter;

            function i() {
                n.call(this)
            }
            t("inherits")(i, n), i.Readable = t("readable-stream/lib/_stream_readable.js"), i.Writable = t("readable-stream/lib/_stream_writable.js"), i.Duplex = t("readable-stream/lib/_stream_duplex.js"), i.Transform = t("readable-stream/lib/_stream_transform.js"), i.PassThrough = t("readable-stream/lib/_stream_passthrough.js"), i.finished = t("readable-stream/lib/internal/streams/end-of-stream.js"), i.pipeline = t("readable-stream/lib/internal/streams/pipeline.js"), i.Stream = i, i.prototype.pipe = function(t, e) {
                var r = this;

                function i(e) {
                    t.writable && !1 === t.write(e) && r.pause && r.pause()
                }

                function o() {
                    r.readable && r.resume && r.resume()
                }
                r.on("data", i), t.on("drain", o), t._isStdio || e && !1 === e.end || (r.on("end", f), r.on("close", a));
                var s = !1;

                function f() {
                    s || (s = !0, t.end())
                }

                function a() {
                    s || (s = !0, "function" == typeof t.destroy && t.destroy())
                }

                function u(t) {
                    if (c(), 0 === n.listenerCount(this, "error")) throw t
                }

                function c() {
                    r.removeListener("data", i), t.removeListener("drain", o), r.removeListener("end", f), r.removeListener("close", a), r.removeListener("error", u), t.removeListener("error", u), r.removeListener("end", c), r.removeListener("close", c), t.removeListener("close", c)
                }
                return r.on("error", u), t.on("error", u), r.on("end", c), r.on("close", c), t.on("close", c), t.emit("pipe", r), t
            }
        }, {
            events: 8,
            inherits: 10,
            "readable-stream/lib/_stream_duplex.js": 17,
            "readable-stream/lib/_stream_passthrough.js": 18,
            "readable-stream/lib/_stream_readable.js": 19,
            "readable-stream/lib/_stream_transform.js": 20,
            "readable-stream/lib/_stream_writable.js": 21,
            "readable-stream/lib/internal/streams/end-of-stream.js": 25,
            "readable-stream/lib/internal/streams/pipeline.js": 27
        }],
        16: [function(t, e, r) {
            "use strict";
            var n = {};

            function i(t, e, r) {
                r || (r = Error);
                var i = function(t) {
                    var r, n;

                    function i(r, n, i) {
                        return t.call(this, function(t, r, n) {
                            return "string" == typeof e ? e : e(t, r, n)
                        }(r, n, i)) || this
                    }
                    return n = t, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n, i
                }(r);
                i.prototype.name = r.name, i.prototype.code = t, n[t] = i
            }

            function o(t, e) {
                if (Array.isArray(t)) {
                    var r = t.length;
                    return t = t.map(function(t) {
                        return String(t)
                    }), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : 2 === r ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0])
                }
                return "of ".concat(e, " ").concat(String(t))
            }
            i("ERR_INVALID_OPT_VALUE", function(t, e) {
                return 'The value "' + e + '" is invalid for option "' + t + '"'
            }, TypeError), i("ERR_INVALID_ARG_TYPE", function(t, e, r) {
                var n, i, s, f;
                if ("string" == typeof e && (i = "not ", e.substr(!s || s < 0 ? 0 : +s, i.length) === i) ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be", function(t, e, r) {
                        return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e
                    }(t, " argument")) f = "The ".concat(t, " ").concat(n, " ").concat(o(e, "type"));
                else {
                    var a = function(t, e, r) {
                        return "number" != typeof r && (r = 0), !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                    }(t, ".") ? "property" : "argument";
                    f = 'The "'.concat(t, '" ').concat(a, " ").concat(n, " ").concat(o(e, "type"))
                }
                return f += ". Received type ".concat(typeof r)
            }, TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
                return "The " + t + " method is not implemented"
            }), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", function(t) {
                return "Cannot call " + t + " after a stream was destroyed"
            }), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", function(t) {
                return "Unknown encoding: " + t
            }, TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.codes = n
        }, {}],
        17: [function(t, e, r) {
            (function(r) {
                (function() {
                    "use strict";
                    var n = Object.keys || function(t) {
                        var e = [];
                        for (var r in t) e.push(r);
                        return e
                    };
                    e.exports = u;
                    var i = t("./_stream_readable"),
                        o = t("./_stream_writable");
                    t("inherits")(u, i);
                    for (var s = n(o.prototype), f = 0; f < s.length; f++) {
                        var a = s[f];
                        u.prototype[a] || (u.prototype[a] = o.prototype[a])
                    }

                    function u(t) {
                        if (!(this instanceof u)) return new u(t);
                        i.call(this, t), o.call(this, t), this.allowHalfOpen = !0, t && (!1 === t.readable && (this.readable = !1), !1 === t.writable && (this.writable = !1), !1 === t.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", c)))
                    }

                    function c() {
                        this._writableState.ended || r.nextTick(h, this)
                    }

                    function h(t) {
                        t.end()
                    }
                    Object.defineProperty(u.prototype, "writableHighWaterMark", {
                        enumerable: !1,
                        get: function() {
                            return this._writableState.highWaterMark
                        }
                    }), Object.defineProperty(u.prototype, "writableBuffer", {
                        enumerable: !1,
                        get: function() {
                            return this._writableState && this._writableState.getBuffer()
                        }
                    }), Object.defineProperty(u.prototype, "writableLength", {
                        enumerable: !1,
                        get: function() {
                            return this._writableState.length
                        }
                    }), Object.defineProperty(u.prototype, "destroyed", {
                        enumerable: !1,
                        get: function() {
                            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                        },
                        set: function(t) {
                            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
                        }
                    })
                }).call(this)
            }).call(this, t("_process"))
        }, {
            "./_stream_readable": 19,
            "./_stream_writable": 21,
            _process: 13,
            inherits: 10
        }],
        18: [function(t, e, r) {
            "use strict";
            e.exports = i;
            var n = t("./_stream_transform");

            function i(t) {
                if (!(this instanceof i)) return new i(t);
                n.call(this, t)
            }
            t("inherits")(i, n), i.prototype._transform = function(t, e, r) {
                r(null, t)
            }
        }, {
            "./_stream_transform": 20,
            inherits: 10
        }],
        19: [function(t, e, r) {
            (function(r, n) {
                (function() {
                    "use strict";
                    var i;
                    e.exports = O, O.ReadableState = M;
                    t("events").EventEmitter;
                    var o = function(t, e) {
                            return t.listeners(e).length
                        },
                        s = t("./internal/streams/stream"),
                        f = t("buffer").Buffer,
                        a = n.Uint8Array || function() {};
                    var u, c = t("util");
                    u = c && c.debuglog ? c.debuglog("stream") : function() {};
                    var h, d, l, p = t("./internal/streams/buffer_list"),
                        b = t("./internal/streams/destroy"),
                        m = t("./internal/streams/state").getHighWaterMark,
                        y = t("../errors").codes,
                        g = y.ERR_INVALID_ARG_TYPE,
                        v = y.ERR_STREAM_PUSH_AFTER_EOF,
                        w = y.ERR_METHOD_NOT_IMPLEMENTED,
                        _ = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                    t("inherits")(O, s);
                    var S = b.errorOrDestroy,
                        E = ["error", "close", "destroy", "pause", "resume"];

                    function M(e, r, n) {
                        i = i || t("./_stream_duplex"), e = e || {}, "boolean" != typeof n && (n = r instanceof i), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = m(this, e, "readableHighWaterMark", n), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (h || (h = t("string_decoder/").StringDecoder), this.decoder = new h(e.encoding), this.encoding = e.encoding)
                    }

                    function O(e) {
                        if (i = i || t("./_stream_duplex"), !(this instanceof O)) return new O(e);
                        var r = this instanceof i;
                        this._readableState = new M(e, this, r), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), s.call(this)
                    }

                    function A(t, e, r, n, i) {
                        u("readableAddChunk", e);
                        var o, s = t._readableState;
                        if (null === e) s.reading = !1,
                            function(t, e) {
                                if (u("onEofChunk"), e.ended) return;
                                if (e.decoder) {
                                    var r = e.decoder.end();
                                    r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length)
                                }
                                e.ended = !0, e.sync ? I(t) : (e.needReadable = !1, e.emittedReadable || (e.emittedReadable = !0, P(t)))
                            }(t, s);
                        else if (i || (o = function(t, e) {
                                var r;
                                n = e, f.isBuffer(n) || n instanceof a || "string" == typeof e || void 0 === e || t.objectMode || (r = new g("chunk", ["string", "Buffer", "Uint8Array"], e));
                                var n;
                                return r
                            }(s, e)), o) S(t, o);
                        else if (s.objectMode || e && e.length > 0)
                            if ("string" == typeof e || s.objectMode || Object.getPrototypeOf(e) === f.prototype || (e = function(t) {
                                    return f.from(t)
                                }(e)), n) s.endEmitted ? S(t, new _) : k(t, s, e, !0);
                            else if (s.ended) S(t, new v);
                        else {
                            if (s.destroyed) return !1;
                            s.reading = !1, s.decoder && !r ? (e = s.decoder.write(e), s.objectMode || 0 !== e.length ? k(t, s, e, !1) : R(t, s)) : k(t, s, e, !1)
                        } else n || (s.reading = !1, R(t, s));
                        return !s.ended && (s.length < s.highWaterMark || 0 === s.length)
                    }

                    function k(t, e, r, n) {
                        e.flowing && 0 === e.length && !e.sync ? (e.awaitDrain = 0, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, n ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && I(t)), R(t, e)
                    }
                    Object.defineProperty(O.prototype, "destroyed", {
                        enumerable: !1,
                        get: function() {
                            return void 0 !== this._readableState && this._readableState.destroyed
                        },
                        set: function(t) {
                            this._readableState && (this._readableState.destroyed = t)
                        }
                    }), O.prototype.destroy = b.destroy, O.prototype._undestroy = b.undestroy, O.prototype._destroy = function(t, e) {
                        e(t)
                    }, O.prototype.push = function(t, e) {
                        var r, n = this._readableState;
                        return n.objectMode ? r = !0 : "string" == typeof t && ((e = e || n.defaultEncoding) !== n.encoding && (t = f.from(t, e), e = ""), r = !0), A(this, t, e, !1, r)
                    }, O.prototype.unshift = function(t) {
                        return A(this, t, null, !0, !1)
                    }, O.prototype.isPaused = function() {
                        return !1 === this._readableState.flowing
                    }, O.prototype.setEncoding = function(e) {
                        h || (h = t("string_decoder/").StringDecoder);
                        var r = new h(e);
                        this._readableState.decoder = r, this._readableState.encoding = this._readableState.decoder.encoding;
                        for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += r.write(n.data), n = n.next;
                        return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
                    };
                    var T = 1073741824;

                    function x(t, e) {
                        return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
                            return t >= T ? t = T : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
                        }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
                    }

                    function I(t) {
                        var e = t._readableState;
                        u("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, e.emittedReadable || (u("emitReadable", e.flowing), e.emittedReadable = !0, r.nextTick(P, t))
                    }

                    function P(t) {
                        var e = t._readableState;
                        u("emitReadable_", e.destroyed, e.length, e.ended), e.destroyed || !e.length && !e.ended || (t.emit("readable"), e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, U(t)
                    }

                    function R(t, e) {
                        e.readingMore || (e.readingMore = !0, r.nextTick(B, t, e))
                    }

                    function B(t, e) {
                        for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && 0 === e.length);) {
                            var r = e.length;
                            if (u("maybeReadMore read 0"), t.read(0), r === e.length) break
                        }
                        e.readingMore = !1
                    }

                    function N(t) {
                        var e = t._readableState;
                        e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume()
                    }

                    function L(t) {
                        u("readable nexttick read 0"), t.read(0)
                    }

                    function j(t, e) {
                        u("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = !1, t.emit("resume"), U(t), e.flowing && !e.reading && t.read(0)
                    }

                    function U(t) {
                        var e = t._readableState;
                        for (u("flow", e.flowing); e.flowing && null !== t.read(););
                    }

                    function D(t, e) {
                        return 0 === e.length ? null : (e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r);
                        var r
                    }

                    function C(t) {
                        var e = t._readableState;
                        u("endReadable", e.endEmitted), e.endEmitted || (e.ended = !0, r.nextTick(q, e, t))
                    }

                    function q(t, e) {
                        if (u("endReadableNT", t.endEmitted, t.length), !t.endEmitted && 0 === t.length && (t.endEmitted = !0, e.readable = !1, e.emit("end"), t.autoDestroy)) {
                            var r = e._writableState;
                            (!r || r.autoDestroy && r.finished) && e.destroy()
                        }
                    }

                    function H(t, e) {
                        for (var r = 0, n = t.length; r < n; r++)
                            if (t[r] === e) return r;
                        return -1
                    }
                    O.prototype.read = function(t) {
                        u("read", t), t = parseInt(t, 10);
                        var e = this._readableState,
                            r = t;
                        if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && ((0 !== e.highWaterMark ? e.length >= e.highWaterMark : e.length > 0) || e.ended)) return u("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? C(this) : I(this), null;
                        if (0 === (t = x(t, e)) && e.ended) return 0 === e.length && C(this), null;
                        var n, i = e.needReadable;
                        return u("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && u("length less than watermark", i = !0), e.ended || e.reading ? u("reading or ended", i = !1) : i && (u("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = x(r, e))), null === (n = t > 0 ? D(t, e) : null) ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.awaitDrain = 0), 0 === e.length && (e.ended || (e.needReadable = !0), r !== t && e.ended && C(this)), null !== n && this.emit("data", n), n
                    }, O.prototype._read = function(t) {
                        S(this, new w("_read()"))
                    }, O.prototype.pipe = function(t, e) {
                        var n = this,
                            i = this._readableState;
                        switch (i.pipesCount) {
                            case 0:
                                i.pipes = t;
                                break;
                            case 1:
                                i.pipes = [i.pipes, t];
                                break;
                            default:
                                i.pipes.push(t)
                        }
                        i.pipesCount += 1, u("pipe count=%d opts=%j", i.pipesCount, e);
                        var s = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? a : m;

                        function f(e, r) {
                            u("onunpipe"), e === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, u("cleanup"), t.removeListener("close", p), t.removeListener("finish", b), t.removeListener("drain", c), t.removeListener("error", l), t.removeListener("unpipe", f), n.removeListener("end", a), n.removeListener("end", m), n.removeListener("data", d), h = !0, !i.awaitDrain || t._writableState && !t._writableState.needDrain || c())
                        }

                        function a() {
                            u("onend"), t.end()
                        }
                        i.endEmitted ? r.nextTick(s) : n.once("end", s), t.on("unpipe", f);
                        var c = function(t) {
                            return function() {
                                var e = t._readableState;
                                u("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && o(t, "data") && (e.flowing = !0, U(t))
                            }
                        }(n);
                        t.on("drain", c);
                        var h = !1;

                        function d(e) {
                            u("ondata");
                            var r = t.write(e);
                            u("dest.write", r), !1 === r && ((1 === i.pipesCount && i.pipes === t || i.pipesCount > 1 && -1 !== H(i.pipes, t)) && !h && (u("false write response, pause", i.awaitDrain), i.awaitDrain++), n.pause())
                        }

                        function l(e) {
                            u("onerror", e), m(), t.removeListener("error", l), 0 === o(t, "error") && S(t, e)
                        }

                        function p() {
                            t.removeListener("finish", b), m()
                        }

                        function b() {
                            u("onfinish"), t.removeListener("close", p), m()
                        }

                        function m() {
                            u("unpipe"), n.unpipe(t)
                        }
                        return n.on("data", d),
                            function(t, e, r) {
                                if ("function" == typeof t.prependListener) return t.prependListener(e, r);
                                t._events && t._events[e] ? Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]] : t.on(e, r)
                            }(t, "error", l), t.once("close", p), t.once("finish", b), t.emit("pipe", n), i.flowing || (u("pipe resume"), n.resume()), t
                    }, O.prototype.unpipe = function(t) {
                        var e = this._readableState,
                            r = {
                                hasUnpiped: !1
                            };
                        if (0 === e.pipesCount) return this;
                        if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, r), this);
                        if (!t) {
                            var n = e.pipes,
                                i = e.pipesCount;
                            e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                            for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {
                                hasUnpiped: !1
                            });
                            return this
                        }
                        var s = H(e.pipes, t);
                        return -1 === s ? this : (e.pipes.splice(s, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r), this)
                    }, O.prototype.on = function(t, e) {
                        var n = s.prototype.on.call(this, t, e),
                            i = this._readableState;
                        return "data" === t ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === t && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, u("on readable", i.length, i.reading), i.length ? I(this) : i.reading || r.nextTick(L, this))), n
                    }, O.prototype.addListener = O.prototype.on, O.prototype.removeListener = function(t, e) {
                        var n = s.prototype.removeListener.call(this, t, e);
                        return "readable" === t && r.nextTick(N, this), n
                    }, O.prototype.removeAllListeners = function(t) {
                        var e = s.prototype.removeAllListeners.apply(this, arguments);
                        return "readable" !== t && void 0 !== t || r.nextTick(N, this), e
                    }, O.prototype.resume = function() {
                        var t = this._readableState;
                        return t.flowing || (u("resume"), t.flowing = !t.readableListening, function(t, e) {
                            e.resumeScheduled || (e.resumeScheduled = !0, r.nextTick(j, t, e))
                        }(this, t)), t.paused = !1, this
                    }, O.prototype.pause = function() {
                        return u("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (u("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                    }, O.prototype.wrap = function(t) {
                        var e = this,
                            r = this._readableState,
                            n = !1;
                        for (var i in t.on("end", function() {
                                if (u("wrapped end"), r.decoder && !r.ended) {
                                    var t = r.decoder.end();
                                    t && t.length && e.push(t)
                                }
                                e.push(null)
                            }), t.on("data", function(i) {
                                (u("wrapped data"), r.decoder && (i = r.decoder.write(i)), !r.objectMode || null !== i && void 0 !== i) && ((r.objectMode || i && i.length) && (e.push(i) || (n = !0, t.pause())))
                            }), t) void 0 === this[i] && "function" == typeof t[i] && (this[i] = function(e) {
                            return function() {
                                return t[e].apply(t, arguments)
                            }
                        }(i));
                        for (var o = 0; o < E.length; o++) t.on(E[o], this.emit.bind(this, E[o]));
                        return this._read = function(e) {
                            u("wrapped _read", e), n && (n = !1, t.resume())
                        }, this
                    }, "function" == typeof Symbol && (O.prototype[Symbol.asyncIterator] = function() {
                        return void 0 === d && (d = t("./internal/streams/async_iterator")), d(this)
                    }), Object.defineProperty(O.prototype, "readableHighWaterMark", {
                        enumerable: !1,
                        get: function() {
                            return this._readableState.highWaterMark
                        }
                    }), Object.defineProperty(O.prototype, "readableBuffer", {
                        enumerable: !1,
                        get: function() {
                            return this._readableState && this._readableState.buffer
                        }
                    }), Object.defineProperty(O.prototype, "readableFlowing", {
                        enumerable: !1,
                        get: function() {
                            return this._readableState.flowing
                        },
                        set: function(t) {
                            this._readableState && (this._readableState.flowing = t)
                        }
                    }), O._fromList = D, Object.defineProperty(O.prototype, "readableLength", {
                        enumerable: !1,
                        get: function() {
                            return this._readableState.length
                        }
                    }), "function" == typeof Symbol && (O.from = function(e, r) {
                        return void 0 === l && (l = t("./internal/streams/from")), l(O, e, r)
                    })
                }).call(this)
            }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "../errors": 16,
            "./_stream_duplex": 17,
            "./internal/streams/async_iterator": 22,
            "./internal/streams/buffer_list": 23,
            "./internal/streams/destroy": 24,
            "./internal/streams/from": 26,
            "./internal/streams/state": 28,
            "./internal/streams/stream": 29,
            _process: 13,
            buffer: 7,
            events: 8,
            inherits: 10,
            "string_decoder/": 30,
            util: 6
        }],
        20: [function(t, e, r) {
            "use strict";
            e.exports = u;
            var n = t("../errors").codes,
                i = n.ERR_METHOD_NOT_IMPLEMENTED,
                o = n.ERR_MULTIPLE_CALLBACK,
                s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                f = n.ERR_TRANSFORM_WITH_LENGTH_0,
                a = t("./_stream_duplex");

            function u(t) {
                if (!(this instanceof u)) return new u(t);
                a.call(this, t), this._transformState = {
                    afterTransform: function(t, e) {
                        var r = this._transformState;
                        r.transforming = !1;
                        var n = r.writecb;
                        if (null === n) return this.emit("error", new o);
                        r.writechunk = null, r.writecb = null, null != e && this.push(e), n(t);
                        var i = this._readableState;
                        i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                    }.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", c)
            }

            function c() {
                var t = this;
                "function" != typeof this._flush || this._readableState.destroyed ? h(this, null, null) : this._flush(function(e, r) {
                    h(t, e, r)
                })
            }

            function h(t, e, r) {
                if (e) return t.emit("error", e);
                if (null != r && t.push(r), t._writableState.length) throw new f;
                if (t._transformState.transforming) throw new s;
                return t.push(null)
            }
            t("inherits")(u, a), u.prototype.push = function(t, e) {
                return this._transformState.needTransform = !1, a.prototype.push.call(this, t, e)
            }, u.prototype._transform = function(t, e, r) {
                r(new i("_transform()"))
            }, u.prototype._write = function(t, e, r) {
                var n = this._transformState;
                if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
                    var i = this._readableState;
                    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                }
            }, u.prototype._read = function(t) {
                var e = this._transformState;
                null === e.writechunk || e.transforming ? e.needTransform = !0 : (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform))
            }, u.prototype._destroy = function(t, e) {
                a.prototype._destroy.call(this, t, function(t) {
                    e(t)
                })
            }
        }, {
            "../errors": 16,
            "./_stream_duplex": 17,
            inherits: 10
        }],
        21: [function(t, e, r) {
            (function(r, n) {
                (function() {
                    "use strict";

                    function i(t) {
                        var e = this;
                        this.next = null, this.entry = null, this.finish = function() {
                            ! function(t, e, r) {
                                var n = t.entry;
                                t.entry = null;
                                for (; n;) {
                                    var i = n.callback;
                                    e.pendingcb--, i(r), n = n.next
                                }
                                e.corkedRequestsFree.next = t
                            }(e, t)
                        }
                    }
                    var o;
                    e.exports = O, O.WritableState = M;
                    var s = {
                            deprecate: t("util-deprecate")
                        },
                        f = t("./internal/streams/stream"),
                        a = t("buffer").Buffer,
                        u = n.Uint8Array || function() {};
                    var c, h = t("./internal/streams/destroy"),
                        d = t("./internal/streams/state").getHighWaterMark,
                        l = t("../errors").codes,
                        p = l.ERR_INVALID_ARG_TYPE,
                        b = l.ERR_METHOD_NOT_IMPLEMENTED,
                        m = l.ERR_MULTIPLE_CALLBACK,
                        y = l.ERR_STREAM_CANNOT_PIPE,
                        g = l.ERR_STREAM_DESTROYED,
                        v = l.ERR_STREAM_NULL_VALUES,
                        w = l.ERR_STREAM_WRITE_AFTER_END,
                        _ = l.ERR_UNKNOWN_ENCODING,
                        S = h.errorOrDestroy;

                    function E() {}

                    function M(e, n, s) {
                        o = o || t("./_stream_duplex"), e = e || {}, "boolean" != typeof s && (s = n instanceof o), this.objectMode = !!e.objectMode, s && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = d(this, e, "writableHighWaterMark", s), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                        var f = !1 === e.decodeStrings;
                        this.decodeStrings = !f, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(t) {
                            ! function(t, e) {
                                var n = t._writableState,
                                    i = n.sync,
                                    o = n.writecb;
                                if ("function" != typeof o) throw new m;
                                if (function(t) {
                                        t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
                                    }(n), e) ! function(t, e, n, i, o) {
                                    --e.pendingcb, n ? (r.nextTick(o, i), r.nextTick(P, t, e), t._writableState.errorEmitted = !0, S(t, i)) : (o(i), t._writableState.errorEmitted = !0, S(t, i), P(t, e))
                                }(t, n, i, e, o);
                                else {
                                    var s = x(n) || t.destroyed;
                                    s || n.corked || n.bufferProcessing || !n.bufferedRequest || T(t, n), i ? r.nextTick(k, t, n, s, o) : k(t, n, s, o)
                                }
                            }(n, t)
                        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this)
                    }

                    function O(e) {
                        var r = this instanceof(o = o || t("./_stream_duplex"));
                        if (!r && !c.call(O, this)) return new O(e);
                        this._writableState = new M(e, this, r), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), f.call(this)
                    }

                    function A(t, e, r, n, i, o, s) {
                        e.writelen = n, e.writecb = s, e.writing = !0, e.sync = !0, e.destroyed ? e.onwrite(new g("write")) : r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1
                    }

                    function k(t, e, r, n) {
                        r || function(t, e) {
                            0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
                        }(t, e), e.pendingcb--, n(), P(t, e)
                    }

                    function T(t, e) {
                        e.bufferProcessing = !0;
                        var r = e.bufferedRequest;
                        if (t._writev && r && r.next) {
                            var n = e.bufferedRequestCount,
                                o = new Array(n),
                                s = e.corkedRequestsFree;
                            s.entry = r;
                            for (var f = 0, a = !0; r;) o[f] = r, r.isBuf || (a = !1), r = r.next, f += 1;
                            o.allBuffers = a, A(t, e, !0, e.length, o, "", s.finish), e.pendingcb++, e.lastBufferedRequest = null, s.next ? (e.corkedRequestsFree = s.next, s.next = null) : e.corkedRequestsFree = new i(e), e.bufferedRequestCount = 0
                        } else {
                            for (; r;) {
                                var u = r.chunk,
                                    c = r.encoding,
                                    h = r.callback;
                                if (A(t, e, !1, e.objectMode ? 1 : u.length, u, c, h), r = r.next, e.bufferedRequestCount--, e.writing) break
                            }
                            null === r && (e.lastBufferedRequest = null)
                        }
                        e.bufferedRequest = r, e.bufferProcessing = !1
                    }

                    function x(t) {
                        return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
                    }

                    function I(t, e) {
                        t._final(function(r) {
                            e.pendingcb--, r && S(t, r), e.prefinished = !0, t.emit("prefinish"), P(t, e)
                        })
                    }

                    function P(t, e) {
                        var n = x(e);
                        if (n && (function(t, e) {
                                e.prefinished || e.finalCalled || ("function" != typeof t._final || e.destroyed ? (e.prefinished = !0, t.emit("prefinish")) : (e.pendingcb++, e.finalCalled = !0, r.nextTick(I, t, e)))
                            }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"), e.autoDestroy))) {
                            var i = t._readableState;
                            (!i || i.autoDestroy && i.endEmitted) && t.destroy()
                        }
                        return n
                    }
                    t("inherits")(O, f), M.prototype.getBuffer = function() {
                            for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
                            return e
                        },
                        function() {
                            try {
                                Object.defineProperty(M.prototype, "buffer", {
                                    get: s.deprecate(function() {
                                        return this.getBuffer()
                                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                                })
                            } catch (t) {}
                        }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance], Object.defineProperty(O, Symbol.hasInstance, {
                            value: function(t) {
                                return !!c.call(this, t) || this === O && (t && t._writableState instanceof M)
                            }
                        })) : c = function(t) {
                            return t instanceof this
                        }, O.prototype.pipe = function() {
                            S(this, new y)
                        }, O.prototype.write = function(t, e, n) {
                            var i, o = this._writableState,
                                s = !1,
                                f = !o.objectMode && (i = t, a.isBuffer(i) || i instanceof u);
                            return f && !a.isBuffer(t) && (t = function(t) {
                                return a.from(t)
                            }(t)), "function" == typeof e && (n = e, e = null), f ? e = "buffer" : e || (e = o.defaultEncoding), "function" != typeof n && (n = E), o.ending ? function(t, e) {
                                var n = new w;
                                S(t, n), r.nextTick(e, n)
                            }(this, n) : (f || function(t, e, n, i) {
                                var o;
                                return null === n ? o = new v : "string" == typeof n || e.objectMode || (o = new p("chunk", ["string", "Buffer"], n)), !o || (S(t, o), r.nextTick(i, o), !1)
                            }(this, o, t, n)) && (o.pendingcb++, s = function(t, e, r, n, i, o) {
                                if (!r) {
                                    var s = function(t, e, r) {
                                        t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = a.from(e, r));
                                        return e
                                    }(e, n, i);
                                    n !== s && (r = !0, i = "buffer", n = s)
                                }
                                var f = e.objectMode ? 1 : n.length;
                                e.length += f;
                                var u = e.length < e.highWaterMark;
                                u || (e.needDrain = !0);
                                if (e.writing || e.corked) {
                                    var c = e.lastBufferedRequest;
                                    e.lastBufferedRequest = {
                                        chunk: n,
                                        encoding: i,
                                        isBuf: r,
                                        callback: o,
                                        next: null
                                    }, c ? c.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
                                } else A(t, e, !1, f, n, i, o);
                                return u
                            }(this, o, f, t, e, n)), s
                        }, O.prototype.cork = function() {
                            this._writableState.corked++
                        }, O.prototype.uncork = function() {
                            var t = this._writableState;
                            t.corked && (t.corked--, t.writing || t.corked || t.bufferProcessing || !t.bufferedRequest || T(this, t))
                        }, O.prototype.setDefaultEncoding = function(t) {
                            if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new _(t);
                            return this._writableState.defaultEncoding = t, this
                        }, Object.defineProperty(O.prototype, "writableBuffer", {
                            enumerable: !1,
                            get: function() {
                                return this._writableState && this._writableState.getBuffer()
                            }
                        }), Object.defineProperty(O.prototype, "writableHighWaterMark", {
                            enumerable: !1,
                            get: function() {
                                return this._writableState.highWaterMark
                            }
                        }), O.prototype._write = function(t, e, r) {
                            r(new b("_write()"))
                        }, O.prototype._writev = null, O.prototype.end = function(t, e, n) {
                            var i = this._writableState;
                            return "function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, e = null), null !== t && void 0 !== t && this.write(t, e), i.corked && (i.corked = 1, this.uncork()), i.ending || function(t, e, n) {
                                e.ending = !0, P(t, e), n && (e.finished ? r.nextTick(n) : t.once("finish", n));
                                e.ended = !0, t.writable = !1
                            }(this, i, n), this
                        }, Object.defineProperty(O.prototype, "writableLength", {
                            enumerable: !1,
                            get: function() {
                                return this._writableState.length
                            }
                        }), Object.defineProperty(O.prototype, "destroyed", {
                            enumerable: !1,
                            get: function() {
                                return void 0 !== this._writableState && this._writableState.destroyed
                            },
                            set: function(t) {
                                this._writableState && (this._writableState.destroyed = t)
                            }
                        }), O.prototype.destroy = h.destroy, O.prototype._undestroy = h.undestroy, O.prototype._destroy = function(t, e) {
                            e(t)
                        }
                }).call(this)
            }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "../errors": 16,
            "./_stream_duplex": 17,
            "./internal/streams/destroy": 24,
            "./internal/streams/state": 28,
            "./internal/streams/stream": 29,
            _process: 13,
            buffer: 7,
            inherits: 10,
            "util-deprecate": 31
        }],
        22: [function(t, e, r) {
            (function(r) {
                (function() {
                    "use strict";
                    var n;

                    function i(t, e, r) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r, t
                    }
                    var o = t("./end-of-stream"),
                        s = Symbol("lastResolve"),
                        f = Symbol("lastReject"),
                        a = Symbol("error"),
                        u = Symbol("ended"),
                        c = Symbol("lastPromise"),
                        h = Symbol("handlePromise"),
                        d = Symbol("stream");

                    function l(t, e) {
                        return {
                            value: t,
                            done: e
                        }
                    }

                    function p(t) {
                        var e = t[s];
                        if (null !== e) {
                            var r = t[d].read();
                            null !== r && (t[c] = null, t[s] = null, t[f] = null, e(l(r, !1)))
                        }
                    }
                    var b = Object.getPrototypeOf(function() {}),
                        m = Object.setPrototypeOf((i(n = {
                            get stream() {
                                return this[d]
                            },
                            next: function() {
                                var t = this,
                                    e = this[a];
                                if (null !== e) return Promise.reject(e);
                                if (this[u]) return Promise.resolve(l(void 0, !0));
                                if (this[d].destroyed) return new Promise(function(e, n) {
                                    r.nextTick(function() {
                                        t[a] ? n(t[a]) : e(l(void 0, !0))
                                    })
                                });
                                var n, i = this[c];
                                if (i) n = new Promise(function(t, e) {
                                    return function(r, n) {
                                        t.then(function() {
                                            e[u] ? r(l(void 0, !0)) : e[h](r, n)
                                        }, n)
                                    }
                                }(i, this));
                                else {
                                    var o = this[d].read();
                                    if (null !== o) return Promise.resolve(l(o, !1));
                                    n = new Promise(this[h])
                                }
                                return this[c] = n, n
                            }
                        }, Symbol.asyncIterator, function() {
                            return this
                        }), i(n, "return", function() {
                            var t = this;
                            return new Promise(function(e, r) {
                                t[d].destroy(null, function(t) {
                                    t ? r(t) : e(l(void 0, !0))
                                })
                            })
                        }), n), b);
                    e.exports = function(t) {
                        var e, n = Object.create(m, (i(e = {}, d, {
                            value: t,
                            writable: !0
                        }), i(e, s, {
                            value: null,
                            writable: !0
                        }), i(e, f, {
                            value: null,
                            writable: !0
                        }), i(e, a, {
                            value: null,
                            writable: !0
                        }), i(e, u, {
                            value: t._readableState.endEmitted,
                            writable: !0
                        }), i(e, h, {
                            value: function(t, e) {
                                var r = n[d].read();
                                r ? (n[c] = null, n[s] = null, n[f] = null, t(l(r, !1))) : (n[s] = t, n[f] = e)
                            },
                            writable: !0
                        }), e));
                        return n[c] = null, o(t, function(t) {
                            if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                                var e = n[f];
                                return null !== e && (n[c] = null, n[s] = null, n[f] = null, e(t)), void(n[a] = t)
                            }
                            var r = n[s];
                            null !== r && (n[c] = null, n[s] = null, n[f] = null, r(l(void 0, !0))), n[u] = !0
                        }), t.on("readable", function(t) {
                            r.nextTick(p, t)
                        }.bind(null, n)), n
                    }
                }).call(this)
            }).call(this, t("_process"))
        }, {
            "./end-of-stream": 25,
            _process: 13
        }],
        23: [function(t, e, r) {
            "use strict";

            function n(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var s = t("buffer").Buffer,
                f = t("util").inspect,
                a = f && f.custom || "inspect";
            e.exports = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.head = null, this.tail = null, this.length = 0
                }
                var e, r, u;
                return e = t, (r = [{
                    key: "push",
                    value: function(t) {
                        var e = {
                            data: t,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(t) {
                        var e = {
                            data: t,
                            next: this.head
                        };
                        0 === this.length && (this.tail = e), this.head = e, ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (0 !== this.length) {
                            var t = this.head.data;
                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null, this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(t) {
                        if (0 === this.length) return "";
                        for (var e = this.head, r = "" + e.data; e = e.next;) r += t + e.data;
                        return r
                    }
                }, {
                    key: "concat",
                    value: function(t) {
                        if (0 === this.length) return s.alloc(0);
                        for (var e, r, n, i = s.allocUnsafe(t >>> 0), o = this.head, f = 0; o;) e = o.data, r = i, n = f, s.prototype.copy.call(e, r, n), f += o.data.length, o = o.next;
                        return i
                    }
                }, {
                    key: "consume",
                    value: function(t, e) {
                        var r;
                        return t < this.head.data.length ? (r = this.head.data.slice(0, t), this.head.data = this.head.data.slice(t)) : r = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t), r
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(t) {
                        var e = this.head,
                            r = 1,
                            n = e.data;
                        for (t -= n.length; e = e.next;) {
                            var i = e.data,
                                o = t > i.length ? i.length : t;
                            if (o === i.length ? n += i : n += i.slice(0, t), 0 === (t -= o)) {
                                o === i.length ? (++r, e.next ? this.head = e.next : this.head = this.tail = null) : (this.head = e, e.data = i.slice(o));
                                break
                            }++r
                        }
                        return this.length -= r, n
                    }
                }, {
                    key: "_getBuffer",
                    value: function(t) {
                        var e = s.allocUnsafe(t),
                            r = this.head,
                            n = 1;
                        for (r.data.copy(e), t -= r.data.length; r = r.next;) {
                            var i = r.data,
                                o = t > i.length ? i.length : t;
                            if (i.copy(e, e.length - t, 0, o), 0 === (t -= o)) {
                                o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o));
                                break
                            }++n
                        }
                        return this.length -= n, e
                    }
                }, {
                    key: a,
                    value: function(t, e) {
                        return f(this, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? n(Object(r), !0).forEach(function(e) {
                                    i(t, e, r[e])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                })
                            }
                            return t
                        }({}, e, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }]) && o(e.prototype, r), u && o(e, u), t
            }()
        }, {
            buffer: 7,
            util: 6
        }],
        24: [function(t, e, r) {
            (function(t) {
                (function() {
                    "use strict";

                    function r(t, e) {
                        i(t, e), n(t)
                    }

                    function n(t) {
                        t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close")
                    }

                    function i(t, e) {
                        t.emit("error", e)
                    }
                    e.exports = {
                        destroy: function(e, o) {
                            var s = this,
                                f = this._readableState && this._readableState.destroyed,
                                a = this._writableState && this._writableState.destroyed;
                            return f || a ? (o ? o(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, t.nextTick(i, this, e)) : t.nextTick(i, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                                !o && e ? s._writableState ? s._writableState.errorEmitted ? t.nextTick(n, s) : (s._writableState.errorEmitted = !0, t.nextTick(r, s, e)) : t.nextTick(r, s, e) : o ? (t.nextTick(n, s), o(e)) : t.nextTick(n, s)
                            }), this)
                        },
                        undestroy: function() {
                            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                        },
                        errorOrDestroy: function(t, e) {
                            var r = t._readableState,
                                n = t._writableState;
                            r && r.autoDestroy || n && n.autoDestroy ? t.destroy(e) : t.emit("error", e)
                        }
                    }
                }).call(this)
            }).call(this, t("_process"))
        }, {
            _process: 13
        }],
        25: [function(t, e, r) {
            "use strict";
            var n = t("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;

            function i() {}
            e.exports = function t(e, r, o) {
                if ("function" == typeof r) return t(e, null, r);
                r || (r = {}), o = function(t) {
                    var e = !1;
                    return function() {
                        if (!e) {
                            e = !0;
                            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                            t.apply(this, n)
                        }
                    }
                }(o || i);
                var s = r.readable || !1 !== r.readable && e.readable,
                    f = r.writable || !1 !== r.writable && e.writable,
                    a = function() {
                        e.writable || c()
                    },
                    u = e._writableState && e._writableState.finished,
                    c = function() {
                        f = !1, u = !0, s || o.call(e)
                    },
                    h = e._readableState && e._readableState.endEmitted,
                    d = function() {
                        s = !1, h = !0, f || o.call(e)
                    },
                    l = function(t) {
                        o.call(e, t)
                    },
                    p = function() {
                        var t;
                        return s && !h ? (e._readableState && e._readableState.ended || (t = new n), o.call(e, t)) : f && !u ? (e._writableState && e._writableState.ended || (t = new n), o.call(e, t)) : void 0
                    },
                    b = function() {
                        e.req.on("finish", c)
                    };
                return function(t) {
                        return t.setHeader && "function" == typeof t.abort
                    }(e) ? (e.on("complete", c), e.on("abort", p), e.req ? b() : e.on("request", b)) : f && !e._writableState && (e.on("end", a), e.on("close", a)), e.on("end", d), e.on("finish", c), !1 !== r.error && e.on("error", l), e.on("close", p),
                    function() {
                        e.removeListener("complete", c), e.removeListener("abort", p), e.removeListener("request", b), e.req && e.req.removeListener("finish", c), e.removeListener("end", a), e.removeListener("close", a), e.removeListener("finish", c), e.removeListener("end", d), e.removeListener("error", l), e.removeListener("close", p)
                    }
            }
        }, {
            "../../../errors": 16
        }],
        26: [function(t, e, r) {
            e.exports = function() {
                throw new Error("Readable.from is not available in the browser")
            }
        }, {}],
        27: [function(t, e, r) {
            "use strict";
            var n;
            var i = t("../../../errors").codes,
                o = i.ERR_MISSING_ARGS,
                s = i.ERR_STREAM_DESTROYED;

            function f(t) {
                if (t) throw t
            }

            function a(t) {
                t()
            }

            function u(t, e) {
                return t.pipe(e)
            }
            e.exports = function() {
                for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                var c, h = function(t) {
                    return t.length ? "function" != typeof t[t.length - 1] ? f : t.pop() : f
                }(r);
                if (Array.isArray(r[0]) && (r = r[0]), r.length < 2) throw new o("streams");
                var d = r.map(function(e, i) {
                    var o = i < r.length - 1;
                    return function(e, r, i, o) {
                        o = function(t) {
                            var e = !1;
                            return function() {
                                e || (e = !0, t.apply(void 0, arguments))
                            }
                        }(o);
                        var f = !1;
                        e.on("close", function() {
                            f = !0
                        }), void 0 === n && (n = t("./end-of-stream")), n(e, {
                            readable: r,
                            writable: i
                        }, function(t) {
                            if (t) return o(t);
                            f = !0, o()
                        });
                        var a = !1;
                        return function(t) {
                            if (!f && !a) return a = !0,
                                function(t) {
                                    return t.setHeader && "function" == typeof t.abort
                                }(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void o(t || new s("pipe"))
                        }
                    }(e, o, i > 0, function(t) {
                        c || (c = t), t && d.forEach(a), o || (d.forEach(a), h(c))
                    })
                });
                return r.reduce(u)
            }
        }, {
            "../../../errors": 16,
            "./end-of-stream": 25
        }],
        28: [function(t, e, r) {
            "use strict";
            var n = t("../../../errors").codes.ERR_INVALID_OPT_VALUE;
            e.exports = {
                getHighWaterMark: function(t, e, r, i) {
                    var o = function(t, e, r) {
                        return null != t.highWaterMark ? t.highWaterMark : e ? t[r] : null
                    }(e, i, r);
                    if (null != o) {
                        if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r : "highWaterMark", o);
                        return Math.floor(o)
                    }
                    return t.objectMode ? 16 : 16384
                }
            }
        }, {
            "../../../errors": 16
        }],
        29: [function(t, e, r) {
            e.exports = t("events").EventEmitter
        }, {
            events: 8
        }],
        30: [function(t, e, r) {
            "use strict";
            var n = t("safe-buffer").Buffer,
                i = n.isEncoding || function(t) {
                    switch ((t = "" + t) && t.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function o(t) {
                var e;
                switch (this.encoding = function(t) {
                        var e = function(t) {
                            if (!t) return "utf8";
                            for (var e;;) switch (t) {
                                case "utf8":
                                case "utf-8":
                                    return "utf8";
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return "utf16le";
                                case "latin1":
                                case "binary":
                                    return "latin1";
                                case "base64":
                                case "ascii":
                                case "hex":
                                    return t;
                                default:
                                    if (e) return;
                                    t = ("" + t).toLowerCase(), e = !0
                            }
                        }(t);
                        if ("string" != typeof e && (n.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);
                        return e || t
                    }(t), this.encoding) {
                    case "utf16le":
                        this.text = a, this.end = u, e = 4;
                        break;
                    case "utf8":
                        this.fillLast = f, e = 4;
                        break;
                    case "base64":
                        this.text = c, this.end = h, e = 3;
                        break;
                    default:
                        return this.write = d, void(this.end = l)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(e)
            }

            function s(t) {
                return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
            }

            function f(t) {
                var e = this.lastTotal - this.lastNeed,
                    r = function(t, e, r) {
                        if (128 != (192 & e[0])) return t.lastNeed = 0, "ï¿½";
                        if (t.lastNeed > 1 && e.length > 1) {
                            if (128 != (192 & e[1])) return t.lastNeed = 1, "ï¿½";
                            if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "ï¿½"
                        }
                    }(this, t);
                return void 0 !== r ? r : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
            }

            function a(t, e) {
                if ((t.length - e) % 2 == 0) {
                    var r = t.toString("utf16le", e);
                    if (r) {
                        var n = r.charCodeAt(r.length - 1);
                        if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1)
                    }
                    return r
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
            }

            function u(t) {
                var e = t && t.length ? this.write(t) : "";
                if (this.lastNeed) {
                    var r = this.lastTotal - this.lastNeed;
                    return e + this.lastChar.toString("utf16le", 0, r)
                }
                return e
            }

            function c(t, e) {
                var r = (t.length - e) % 3;
                return 0 === r ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r))
            }

            function h(t) {
                var e = t && t.length ? this.write(t) : "";
                return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
            }

            function d(t) {
                return t.toString(this.encoding)
            }

            function l(t) {
                return t && t.length ? this.write(t) : ""
            }
            r.StringDecoder = o, o.prototype.write = function(t) {
                if (0 === t.length) return "";
                var e, r;
                if (this.lastNeed) {
                    if (void 0 === (e = this.fillLast(t))) return "";
                    r = this.lastNeed, this.lastNeed = 0
                } else r = 0;
                return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || ""
            }, o.prototype.end = function(t) {
                var e = t && t.length ? this.write(t) : "";
                return this.lastNeed ? e + "ï¿½" : e
            }, o.prototype.text = function(t, e) {
                var r = function(t, e, r) {
                    var n = e.length - 1;
                    if (n < r) return 0;
                    var i = s(e[n]);
                    if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
                    if (--n < r || -2 === i) return 0;
                    if ((i = s(e[n])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
                    if (--n < r || -2 === i) return 0;
                    if ((i = s(e[n])) >= 0) return i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i;
                    return 0
                }(this, t, e);
                if (!this.lastNeed) return t.toString("utf8", e);
                this.lastTotal = r;
                var n = t.length - (r - this.lastNeed);
                return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n)
            }, o.prototype.fillLast = function(t) {
                if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
            }
        }, {
            "safe-buffer": 14
        }],
        31: [function(t, e, r) {
            (function(t) {
                (function() {
                    function r(e) {
                        try {
                            if (!t.localStorage) return !1
                        } catch (t) {
                            return !1
                        }
                        var r = t.localStorage[e];
                        return null != r && "true" === String(r).toLowerCase()
                    }
                    e.exports = function(t, e) {
                        if (r("noDeprecation")) return t;
                        var n = !1;
                        return function() {
                            if (!n) {
                                if (r("throwDeprecation")) throw new Error(e);
                                r("traceDeprecation") ? console.trace(e) : console.warn(e), n = !0
                            }
                            return t.apply(this, arguments)
                        }
                    }
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        "/": [function(t, e, r) {
            const n = t("./script");
            e.exports = {
                Block: t("./block"),
                ECPair: t("./ecpair"),
                Transaction: t("./transaction"),
                TransactionBuilder: t("./transaction_builder"),
                bigi: t("bigi"),
                Buffer: t("safe-buffer").Buffer,
                address: t("./address"),
                bip32: t("bip32"),
                crypto: t("./crypto"),
                networks: t("./networks"),
                opcodes: t("bitcoin-ops"),
                payments: t("./payments"),
                script: n
            }
        }, {
            "./address": 125,
            "./block": 126,
            "./crypto": 129,
            "./ecpair": 130,
            "./networks": 131,
            "./payments": 133,
            "./script": 141,
            "./transaction": 165,
            "./transaction_builder": 166,
            bigi: 36,
            bip32: 39,
            "bitcoin-ops": 41,
            "safe-buffer": 106
        }],
        32: [function(t, e, r) {
            "use strict";
            var n = t("safe-buffer").Buffer;
            e.exports = function(t) {
                if (t.length >= 255) throw new TypeError("Alphabet too long");
                for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
                for (var i = 0; i < t.length; i++) {
                    var o = t.charAt(i),
                        s = o.charCodeAt(0);
                    if (255 !== e[s]) throw new TypeError(o + " is ambiguous");
                    e[s] = i
                }
                var f = t.length,
                    a = t.charAt(0),
                    u = Math.log(f) / Math.log(256),
                    c = Math.log(256) / Math.log(f);

                function h(t) {
                    if ("string" != typeof t) throw new TypeError("Expected String");
                    if (0 === t.length) return n.alloc(0);
                    var r = 0;
                    if (" " !== t[r]) {
                        for (var i = 0, o = 0; t[r] === a;) i++, r++;
                        for (var s = (t.length - r) * u + 1 >>> 0, c = new Uint8Array(s); t[r];) {
                            var h = e[t.charCodeAt(r)];
                            if (255 === h) return;
                            for (var d = 0, l = s - 1;
                                (0 !== h || d < o) && -1 !== l; l--, d++) h += f * c[l] >>> 0, c[l] = h % 256 >>> 0, h = h / 256 >>> 0;
                            if (0 !== h) throw new Error("Non-zero carry");
                            o = d, r++
                        }
                        if (" " !== t[r]) {
                            for (var p = s - o; p !== s && 0 === c[p];) p++;
                            var b = n.allocUnsafe(i + (s - p));
                            b.fill(0, 0, i);
                            for (var m = i; p !== s;) b[m++] = c[p++];
                            return b
                        }
                    }
                }
                return {
                    encode: function(e) {
                        if ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)), !n.isBuffer(e)) throw new TypeError("Expected Buffer");
                        if (0 === e.length) return "";
                        for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o];) o++, r++;
                        for (var u = (s - o) * c + 1 >>> 0, h = new Uint8Array(u); o !== s;) {
                            for (var d = e[o], l = 0, p = u - 1;
                                (0 !== d || l < i) && -1 !== p; p--, l++) d += 256 * h[p] >>> 0, h[p] = d % f >>> 0, d = d / f >>> 0;
                            if (0 !== d) throw new Error("Non-zero carry");
                            i = l, o++
                        }
                        for (var b = u - i; b !== u && 0 === h[b];) b++;
                        for (var m = a.repeat(r); b < u; ++b) m += t.charAt(h[b]);
                        return m
                    },
                    decodeUnsafe: h,
                    decode: function(t) {
                        var e = h(t);
                        if (e) return e;
                        throw new Error("Non-base" + f + " character")
                    }
                }
            }
        }, {
            "safe-buffer": 106
        }],
        33: [function(t, e, r) {
            "use strict";
            for (var n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", i = {}, o = 0; o < n.length; o++) {
                var s = n.charAt(o);
                if (void 0 !== i[s]) throw new TypeError(s + " is ambiguous");
                i[s] = o
            }

            function f(t) {
                var e = t >> 25;
                return (33554431 & t) << 5 ^ 996825010 & -(e >> 0 & 1) ^ 642813549 & -(e >> 1 & 1) ^ 513874426 & -(e >> 2 & 1) ^ 1027748829 & -(e >> 3 & 1) ^ 705979059 & -(e >> 4 & 1)
            }

            function a(t) {
                for (var e = 1, r = 0; r < t.length; ++r) {
                    var n = t.charCodeAt(r);
                    if (n < 33 || n > 126) return "Invalid prefix (" + t + ")";
                    e = f(e) ^ n >> 5
                }
                for (e = f(e), r = 0; r < t.length; ++r) {
                    var i = t.charCodeAt(r);
                    e = f(e) ^ 31 & i
                }
                return e
            }

            function u(t, e) {
                if (e = e || 90, t.length < 8) return t + " too short";
                if (t.length > e) return "Exceeds length limit";
                var r = t.toLowerCase(),
                    n = t.toUpperCase();
                if (t !== r && t !== n) return "Mixed-case string " + t;
                var o = (t = r).lastIndexOf("1");
                if (-1 === o) return "No separator character for " + t;
                if (0 === o) return "Missing prefix for " + t;
                var s = t.slice(0, o),
                    u = t.slice(o + 1);
                if (u.length < 6) return "Data too short";
                var c = a(s);
                if ("string" == typeof c) return c;
                for (var h = [], d = 0; d < u.length; ++d) {
                    var l = u.charAt(d),
                        p = i[l];
                    if (void 0 === p) return "Unknown character " + l;
                    c = f(c) ^ p, d + 6 >= u.length || h.push(p)
                }
                return 1 !== c ? "Invalid checksum for " + t : {
                    prefix: s,
                    words: h
                }
            }

            function c(t, e, r, n) {
                for (var i = 0, o = 0, s = (1 << r) - 1, f = [], a = 0; a < t.length; ++a)
                    for (i = i << e | t[a], o += e; o >= r;) o -= r, f.push(i >> o & s);
                if (n) o > 0 && f.push(i << r - o & s);
                else {
                    if (o >= e) return "Excess padding";
                    if (i << r - o & s) return "Non-zero padding"
                }
                return f
            }
            e.exports = {
                decodeUnsafe: function() {
                    var t = u.apply(null, arguments);
                    if ("object" == typeof t) return t
                },
                decode: function(t) {
                    var e = u.apply(null, arguments);
                    if ("object" == typeof e) return e;
                    throw new Error(e)
                },
                encode: function(t, e, r) {
                    if (r = r || 90, t.length + 7 + e.length > r) throw new TypeError("Exceeds length limit");
                    var i = a(t = t.toLowerCase());
                    if ("string" == typeof i) throw new Error(i);
                    for (var o = t + "1", s = 0; s < e.length; ++s) {
                        var u = e[s];
                        if (u >> 5 != 0) throw new Error("Non 5-bit word");
                        i = f(i) ^ u, o += n.charAt(u)
                    }
                    for (s = 0; s < 6; ++s) i = f(i);
                    for (i ^= 1, s = 0; s < 6; ++s) {
                        var c = i >> 5 * (5 - s) & 31;
                        o += n.charAt(c)
                    }
                    return o
                },
                toWordsUnsafe: function(t) {
                    var e = c(t, 8, 5, !0);
                    if (Array.isArray(e)) return e
                },
                toWords: function(t) {
                    var e = c(t, 8, 5, !0);
                    if (Array.isArray(e)) return e;
                    throw new Error(e)
                },
                fromWordsUnsafe: function(t) {
                    var e = c(t, 5, 8, !1);
                    if (Array.isArray(e)) return e
                },
                fromWords: function(t) {
                    var e = c(t, 5, 8, !1);
                    if (Array.isArray(e)) return e;
                    throw new Error(e)
                }
            }
        }, {}],
        34: [function(t, e, r) {
            function n(t, e, r) {
                if (!(this instanceof n)) return new n(t, e, r);
                null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
            }
            var i = n.prototype;
            i.__bigi = t("../package.json").version, n.isBigInteger = function(t, e) {
                return t && t.__bigi && (!e || t.__bigi === i.__bigi)
            }, n.prototype.am = function(t, e, r, n, i, o) {
                for (; --o >= 0;) {
                    var s = e * this[t++] + r[n] + i;
                    i = Math.floor(s / 67108864), r[n++] = 67108863 & s
                }
                return i
            }, n.prototype.DB = 26, n.prototype.DM = 67108863;
            var o = n.prototype.DV = 1 << 26;
            n.prototype.FV = Math.pow(2, 52), n.prototype.F1 = 26, n.prototype.F2 = 0;
            var s, f, a = "0123456789abcdefghijklmnopqrstuvwxyz",
                u = new Array;
            for (s = "0".charCodeAt(0), f = 0; f <= 9; ++f) u[s++] = f;
            for (s = "a".charCodeAt(0), f = 10; f < 36; ++f) u[s++] = f;
            for (s = "A".charCodeAt(0), f = 10; f < 36; ++f) u[s++] = f;

            function c(t) {
                return a.charAt(t)
            }

            function h(t, e) {
                var r = u[t.charCodeAt(e)];
                return null == r ? -1 : r
            }

            function d(t) {
                var e = new n;
                return e.fromInt(t), e
            }

            function l(t) {
                var e, r = 1;
                return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r
            }

            function p(t) {
                this.m = t
            }

            function b(t) {
                this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
            }

            function m(t, e) {
                return t & e
            }

            function y(t, e) {
                return t | e
            }

            function g(t, e) {
                return t ^ e
            }

            function v(t, e) {
                return t & ~e
            }

            function w(t) {
                if (0 == t) return -1;
                var e = 0;
                return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
            }

            function _(t) {
                for (var e = 0; 0 != t;) t &= t - 1, ++e;
                return e
            }

            function S() {}

            function E(t) {
                return t
            }

            function M(t) {
                this.r2 = new n, this.q3 = new n, n.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
            }
            p.prototype.convert = function(t) {
                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
            }, p.prototype.revert = function(t) {
                return t
            }, p.prototype.reduce = function(t) {
                t.divRemTo(this.m, null, t)
            }, p.prototype.mulTo = function(t, e, r) {
                t.multiplyTo(e, r), this.reduce(r)
            }, p.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e)
            }, b.prototype.convert = function(t) {
                var e = new n;
                return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(n.ZERO) > 0 && this.m.subTo(e, e), e
            }, b.prototype.revert = function(t) {
                var e = new n;
                return t.copyTo(e), this.reduce(e), e
            }, b.prototype.reduce = function(t) {
                for (; t.t <= this.mt2;) t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var r = 32767 & t[e],
                        n = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (t[r = e + this.m.t] += this.m.am(0, n, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
                }
                t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
            }, b.prototype.mulTo = function(t, e, r) {
                t.multiplyTo(e, r), this.reduce(r)
            }, b.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e)
            }, i.copyTo = function(t) {
                for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                t.t = this.t, t.s = this.s
            }, i.fromInt = function(t) {
                this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + o : this.t = 0
            }, i.fromString = function(t, e) {
                var r;
                if (16 == e) r = 4;
                else if (8 == e) r = 3;
                else if (256 == e) r = 8;
                else if (2 == e) r = 1;
                else if (32 == e) r = 5;
                else {
                    if (4 != e) return void this.fromRadix(t, e);
                    r = 2
                }
                this.t = 0, this.s = 0;
                for (var i = t.length, o = !1, s = 0; --i >= 0;) {
                    var f = 8 == r ? 255 & t[i] : h(t, i);
                    f < 0 ? "-" == t.charAt(i) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = f : s + r > this.DB ? (this[this.t - 1] |= (f & (1 << this.DB - s) - 1) << s, this[this.t++] = f >> this.DB - s) : this[this.t - 1] |= f << s, (s += r) >= this.DB && (s -= this.DB))
                }
                8 == r && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), o && n.ZERO.subTo(this, this)
            }, i.clamp = function() {
                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
            }, i.dlShiftTo = function(t, e) {
                var r;
                for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
                for (r = t - 1; r >= 0; --r) e[r] = 0;
                e.t = this.t + t, e.s = this.s
            }, i.drShiftTo = function(t, e) {
                for (var r = t; r < this.t; ++r) e[r - t] = this[r];
                e.t = Math.max(this.t - t, 0), e.s = this.s
            }, i.lShiftTo = function(t, e) {
                var r, n = t % this.DB,
                    i = this.DB - n,
                    o = (1 << i) - 1,
                    s = Math.floor(t / this.DB),
                    f = this.s << n & this.DM;
                for (r = this.t - 1; r >= 0; --r) e[r + s + 1] = this[r] >> i | f, f = (this[r] & o) << n;
                for (r = s - 1; r >= 0; --r) e[r] = 0;
                e[s] = f, e.t = this.t + s + 1, e.s = this.s, e.clamp()
            }, i.rShiftTo = function(t, e) {
                e.s = this.s;
                var r = Math.floor(t / this.DB);
                if (r >= this.t) e.t = 0;
                else {
                    var n = t % this.DB,
                        i = this.DB - n,
                        o = (1 << n) - 1;
                    e[0] = this[r] >> n;
                    for (var s = r + 1; s < this.t; ++s) e[s - r - 1] |= (this[s] & o) << i, e[s - r] = this[s] >> n;
                    n > 0 && (e[this.t - r - 1] |= (this.s & o) << i), e.t = this.t - r, e.clamp()
                }
            }, i.subTo = function(t, e) {
                for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i;) n += this[r] - t[r], e[r++] = n & this.DM, n >>= this.DB;
                if (t.t < this.t) {
                    for (n -= t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
                    n += this.s
                } else {
                    for (n += this.s; r < t.t;) n -= t[r], e[r++] = n & this.DM, n >>= this.DB;
                    n -= t.s
                }
                e.s = n < 0 ? -1 : 0, n < -1 ? e[r++] = this.DV + n : n > 0 && (e[r++] = n), e.t = r, e.clamp()
            }, i.multiplyTo = function(t, e) {
                var r = this.abs(),
                    i = t.abs(),
                    o = r.t;
                for (e.t = o + i.t; --o >= 0;) e[o] = 0;
                for (o = 0; o < i.t; ++o) e[o + r.t] = r.am(0, i[o], e, o, 0, r.t);
                e.s = 0, e.clamp(), this.s != t.s && n.ZERO.subTo(e, e)
            }, i.squareTo = function(t) {
                for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0;) t[r] = 0;
                for (r = 0; r < e.t - 1; ++r) {
                    var n = e.am(r, e[r], t, 2 * r, 0, 1);
                    (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
                }
                t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
            }, i.divRemTo = function(t, e, r) {
                var i = t.abs();
                if (!(i.t <= 0)) {
                    var o = this.abs();
                    if (o.t < i.t) return null != e && e.fromInt(0), void(null != r && this.copyTo(r));
                    null == r && (r = new n);
                    var s = new n,
                        f = this.s,
                        a = t.s,
                        u = this.DB - l(i[i.t - 1]);
                    u > 0 ? (i.lShiftTo(u, s), o.lShiftTo(u, r)) : (i.copyTo(s), o.copyTo(r));
                    var c = s.t,
                        h = s[c - 1];
                    if (0 != h) {
                        var d = h * (1 << this.F1) + (c > 1 ? s[c - 2] >> this.F2 : 0),
                            p = this.FV / d,
                            b = (1 << this.F1) / d,
                            m = 1 << this.F2,
                            y = r.t,
                            g = y - c,
                            v = null == e ? new n : e;
                        for (s.dlShiftTo(g, v), r.compareTo(v) >= 0 && (r[r.t++] = 1, r.subTo(v, r)), n.ONE.dlShiftTo(c, v), v.subTo(s, s); s.t < c;) s[s.t++] = 0;
                        for (; --g >= 0;) {
                            var w = r[--y] == h ? this.DM : Math.floor(r[y] * p + (r[y - 1] + m) * b);
                            if ((r[y] += s.am(0, w, r, g, 0, c)) < w)
                                for (s.dlShiftTo(g, v), r.subTo(v, r); r[y] < --w;) r.subTo(v, r)
                        }
                        null != e && (r.drShiftTo(c, e), f != a && n.ZERO.subTo(e, e)), r.t = c, r.clamp(), u > 0 && r.rShiftTo(u, r), f < 0 && n.ZERO.subTo(r, r)
                    }
                }
            }, i.invDigit = function() {
                if (this.t < 1) return 0;
                var t = this[0];
                if (0 == (1 & t)) return 0;
                var e = 3 & t;
                return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
            }, i.isEven = function() {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }, i.exp = function(t, e) {
                if (t > 4294967295 || t < 1) return n.ONE;
                var r = new n,
                    i = new n,
                    o = e.convert(this),
                    s = l(t) - 1;
                for (o.copyTo(r); --s >= 0;)
                    if (e.sqrTo(r, i), (t & 1 << s) > 0) e.mulTo(i, o, r);
                    else {
                        var f = r;
                        r = i, i = f
                    } return e.revert(r)
            }, i.toString = function(t) {
                var e;
                if (this.s < 0) return "-" + this.negate().toString(t);
                if (16 == t) e = 4;
                else if (8 == t) e = 3;
                else if (2 == t) e = 1;
                else if (32 == t) e = 5;
                else {
                    if (4 != t) return this.toRadix(t);
                    e = 2
                }
                var r, n = (1 << e) - 1,
                    i = !1,
                    o = "",
                    s = this.t,
                    f = this.DB - s * this.DB % e;
                if (s-- > 0)
                    for (f < this.DB && (r = this[s] >> f) > 0 && (i = !0, o = c(r)); s >= 0;) f < e ? (r = (this[s] & (1 << f) - 1) << e - f, r |= this[--s] >> (f += this.DB - e)) : (r = this[s] >> (f -= e) & n, f <= 0 && (f += this.DB, --s)), r > 0 && (i = !0), i && (o += c(r));
                return i ? o : "0"
            }, i.negate = function() {
                var t = new n;
                return n.ZERO.subTo(this, t), t
            }, i.abs = function() {
                return this.s < 0 ? this.negate() : this
            }, i.compareTo = function(t) {
                var e = this.s - t.s;
                if (0 != e) return e;
                var r = this.t;
                if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
                for (; --r >= 0;)
                    if (0 != (e = this[r] - t[r])) return e;
                return 0
            }, i.bitLength = function() {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + l(this[this.t - 1] ^ this.s & this.DM)
            }, i.byteLength = function() {
                return this.bitLength() >> 3
            }, i.mod = function(t) {
                var e = new n;
                return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(n.ZERO) > 0 && t.subTo(e, e), e
            }, i.modPowInt = function(t, e) {
                var r;
                return r = t < 256 || e.isEven() ? new p(e) : new b(e), this.exp(t, r)
            }, S.prototype.convert = E, S.prototype.revert = E, S.prototype.mulTo = function(t, e, r) {
                t.multiplyTo(e, r)
            }, S.prototype.sqrTo = function(t, e) {
                t.squareTo(e)
            }, M.prototype.convert = function(t) {
                if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                if (t.compareTo(this.m) < 0) return t;
                var e = new n;
                return t.copyTo(e), this.reduce(e), e
            }, M.prototype.revert = function(t) {
                return t
            }, M.prototype.reduce = function(t) {
                for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
            }, M.prototype.mulTo = function(t, e, r) {
                t.multiplyTo(e, r), this.reduce(r)
            }, M.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e)
            };
            var O = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                A = (1 << 26) / O[O.length - 1];
            i.chunkSize = function(t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t))
            }, i.toRadix = function(t) {
                if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
                var e = this.chunkSize(t),
                    r = Math.pow(t, e),
                    i = d(r),
                    o = new n,
                    s = new n,
                    f = "";
                for (this.divRemTo(i, o, s); o.signum() > 0;) f = (r + s.intValue()).toString(t).substr(1) + f, o.divRemTo(i, o, s);
                return s.intValue().toString(t) + f
            }, i.fromRadix = function(t, e) {
                this.fromInt(0), null == e && (e = 10);
                for (var r = this.chunkSize(e), i = Math.pow(e, r), o = !1, s = 0, f = 0, a = 0; a < t.length; ++a) {
                    var u = h(t, a);
                    u < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (o = !0) : (f = e * f + u, ++s >= r && (this.dMultiply(i), this.dAddOffset(f, 0), s = 0, f = 0))
                }
                s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(f, 0)), o && n.ZERO.subTo(this, this)
            }, i.fromNumber = function(t, e, r) {
                if ("number" == typeof e)
                    if (t < 2) this.fromInt(1);
                    else
                        for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(n.ONE.shiftLeft(t - 1), y, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(n.ONE.shiftLeft(t - 1), this);
                else {
                    var i = new Array,
                        o = 7 & t;
                    i.length = 1 + (t >> 3), e.nextBytes(i), o > 0 ? i[0] &= (1 << o) - 1 : i[0] = 0, this.fromString(i, 256)
                }
            }, i.bitwiseTo = function(t, e, r) {
                var n, i, o = Math.min(t.t, this.t);
                for (n = 0; n < o; ++n) r[n] = e(this[n], t[n]);
                if (t.t < this.t) {
                    for (i = t.s & this.DM, n = o; n < this.t; ++n) r[n] = e(this[n], i);
                    r.t = this.t
                } else {
                    for (i = this.s & this.DM, n = o; n < t.t; ++n) r[n] = e(i, t[n]);
                    r.t = t.t
                }
                r.s = e(this.s, t.s), r.clamp()
            }, i.changeBit = function(t, e) {
                var r = n.ONE.shiftLeft(t);
                return this.bitwiseTo(r, e, r), r
            }, i.addTo = function(t, e) {
                for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i;) n += this[r] + t[r], e[r++] = n & this.DM, n >>= this.DB;
                if (t.t < this.t) {
                    for (n += t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
                    n += this.s
                } else {
                    for (n += this.s; r < t.t;) n += t[r], e[r++] = n & this.DM, n >>= this.DB;
                    n += t.s
                }
                e.s = n < 0 ? -1 : 0, n > 0 ? e[r++] = n : n < -1 && (e[r++] = this.DV + n), e.t = r, e.clamp()
            }, i.dMultiply = function(t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
            }, i.dAddOffset = function(t, e) {
                if (0 != t) {
                    for (; this.t <= e;) this[this.t++] = 0;
                    for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                }
            }, i.multiplyLowerTo = function(t, e, r) {
                var n, i = Math.min(this.t + t.t, e);
                for (r.s = 0, r.t = i; i > 0;) r[--i] = 0;
                for (n = r.t - this.t; i < n; ++i) r[i + this.t] = this.am(0, t[i], r, i, 0, this.t);
                for (n = Math.min(t.t, e); i < n; ++i) this.am(0, t[i], r, i, 0, e - i);
                r.clamp()
            }, i.multiplyUpperTo = function(t, e, r) {
                --e;
                var n = r.t = this.t + t.t - e;
                for (r.s = 0; --n >= 0;) r[n] = 0;
                for (n = Math.max(e - this.t, 0); n < t.t; ++n) r[this.t + n - e] = this.am(e - n, t[n], r, 0, 0, this.t + n - e);
                r.clamp(), r.drShiftTo(1, r)
            }, i.modInt = function(t) {
                if (t <= 0) return 0;
                var e = this.DV % t,
                    r = this.s < 0 ? t - 1 : 0;
                if (this.t > 0)
                    if (0 == e) r = this[0] % t;
                    else
                        for (var n = this.t - 1; n >= 0; --n) r = (e * r + this[n]) % t;
                return r
            }, i.millerRabin = function(t) {
                var e = this.subtract(n.ONE),
                    r = e.getLowestSetBit();
                if (r <= 0) return !1;
                var i = e.shiftRight(r);
                (t = t + 1 >> 1) > O.length && (t = O.length);
                for (var o = new n(null), s = [], f = 0; f < t; ++f) {
                    for (; u = O[Math.floor(Math.random() * O.length)], -1 != s.indexOf(u););
                    s.push(u), o.fromInt(u);
                    var a = o.modPow(i, this);
                    if (0 != a.compareTo(n.ONE) && 0 != a.compareTo(e)) {
                        for (var u = 1; u++ < r && 0 != a.compareTo(e);)
                            if (0 == (a = a.modPowInt(2, this)).compareTo(n.ONE)) return !1;
                        if (0 != a.compareTo(e)) return !1
                    }
                }
                return !0
            }, i.clone = function() {
                var t = new n;
                return this.copyTo(t), t
            }, i.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1
                } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }, i.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }, i.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }, i.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }, i.toByteArray = function() {
                var t = this.t,
                    e = new Array;
                e[0] = this.s;
                var r, n = this.DB - t * this.DB % 8,
                    i = 0;
                if (t-- > 0)
                    for (n < this.DB && (r = this[t] >> n) != (this.s & this.DM) >> n && (e[i++] = r | this.s << this.DB - n); t >= 0;) n < 8 ? (r = (this[t] & (1 << n) - 1) << 8 - n, r |= this[--t] >> (n += this.DB - 8)) : (r = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --t)), 0 != (128 & r) && (r |= -256), 0 === i && (128 & this.s) != (128 & r) && ++i, (i > 0 || r != this.s) && (e[i++] = r);
                return e
            }, i.equals = function(t) {
                return 0 == this.compareTo(t)
            }, i.min = function(t) {
                return this.compareTo(t) < 0 ? this : t
            }, i.max = function(t) {
                return this.compareTo(t) > 0 ? this : t
            }, i.and = function(t) {
                var e = new n;
                return this.bitwiseTo(t, m, e), e
            }, i.or = function(t) {
                var e = new n;
                return this.bitwiseTo(t, y, e), e
            }, i.xor = function(t) {
                var e = new n;
                return this.bitwiseTo(t, g, e), e
            }, i.andNot = function(t) {
                var e = new n;
                return this.bitwiseTo(t, v, e), e
            }, i.not = function() {
                for (var t = new n, e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                return t.t = this.t, t.s = ~this.s, t
            }, i.shiftLeft = function(t) {
                var e = new n;
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
            }, i.shiftRight = function(t) {
                var e = new n;
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
            }, i.getLowestSetBit = function() {
                for (var t = 0; t < this.t; ++t)
                    if (0 != this[t]) return t * this.DB + w(this[t]);
                return this.s < 0 ? this.t * this.DB : -1
            }, i.bitCount = function() {
                for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r) t += _(this[r] ^ e);
                return t
            }, i.testBit = function(t) {
                var e = Math.floor(t / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
            }, i.setBit = function(t) {
                return this.changeBit(t, y)
            }, i.clearBit = function(t) {
                return this.changeBit(t, v)
            }, i.flipBit = function(t) {
                return this.changeBit(t, g)
            }, i.add = function(t) {
                var e = new n;
                return this.addTo(t, e), e
            }, i.subtract = function(t) {
                var e = new n;
                return this.subTo(t, e), e
            }, i.multiply = function(t) {
                var e = new n;
                return this.multiplyTo(t, e), e
            }, i.divide = function(t) {
                var e = new n;
                return this.divRemTo(t, e, null), e
            }, i.remainder = function(t) {
                var e = new n;
                return this.divRemTo(t, null, e), e
            }, i.divideAndRemainder = function(t) {
                var e = new n,
                    r = new n;
                return this.divRemTo(t, e, r), new Array(e, r)
            }, i.modPow = function(t, e) {
                var r, i, o = t.bitLength(),
                    s = d(1);
                if (o <= 0) return s;
                r = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6, i = o < 8 ? new p(e) : e.isEven() ? new M(e) : new b(e);
                var f = new Array,
                    a = 3,
                    u = r - 1,
                    c = (1 << r) - 1;
                if (f[1] = i.convert(this), r > 1) {
                    var h = new n;
                    for (i.sqrTo(f[1], h); a <= c;) f[a] = new n, i.mulTo(h, f[a - 2], f[a]), a += 2
                }
                var m, y, g = t.t - 1,
                    v = !0,
                    w = new n;
                for (o = l(t[g]) - 1; g >= 0;) {
                    for (o >= u ? m = t[g] >> o - u & c : (m = (t[g] & (1 << o + 1) - 1) << u - o, g > 0 && (m |= t[g - 1] >> this.DB + o - u)), a = r; 0 == (1 & m);) m >>= 1, --a;
                    if ((o -= a) < 0 && (o += this.DB, --g), v) f[m].copyTo(s), v = !1;
                    else {
                        for (; a > 1;) i.sqrTo(s, w), i.sqrTo(w, s), a -= 2;
                        a > 0 ? i.sqrTo(s, w) : (y = s, s = w, w = y), i.mulTo(w, f[m], s)
                    }
                    for (; g >= 0 && 0 == (t[g] & 1 << o);) i.sqrTo(s, w), y = s, s = w, w = y, --o < 0 && (o = this.DB - 1, --g)
                }
                return i.revert(s)
            }, i.modInverse = function(t) {
                var e = t.isEven();
                if (0 === this.signum()) throw new Error("division by zero");
                if (this.isEven() && e || 0 == t.signum()) return n.ZERO;
                for (var r = t.clone(), i = this.clone(), o = d(1), s = d(0), f = d(0), a = d(1); 0 != r.signum();) {
                    for (; r.isEven();) r.rShiftTo(1, r), e ? (o.isEven() && s.isEven() || (o.addTo(this, o), s.subTo(t, s)), o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                    for (; i.isEven();) i.rShiftTo(1, i), e ? (f.isEven() && a.isEven() || (f.addTo(this, f), a.subTo(t, a)), f.rShiftTo(1, f)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
                    r.compareTo(i) >= 0 ? (r.subTo(i, r), e && o.subTo(f, o), s.subTo(a, s)) : (i.subTo(r, i), e && f.subTo(o, f), a.subTo(s, a))
                }
                if (0 != i.compareTo(n.ONE)) return n.ZERO;
                for (; a.compareTo(t) >= 0;) a.subTo(t, a);
                for (; a.signum() < 0;) a.addTo(t, a);
                return a
            }, i.pow = function(t) {
                return this.exp(t, new S)
            }, i.gcd = function(t) {
                var e = this.s < 0 ? this.negate() : this.clone(),
                    r = t.s < 0 ? t.negate() : t.clone();
                if (e.compareTo(r) < 0) {
                    var n = e;
                    e = r, r = n
                }
                var i = e.getLowestSetBit(),
                    o = r.getLowestSetBit();
                if (o < 0) return e;
                for (i < o && (o = i), o > 0 && (e.rShiftTo(o, e), r.rShiftTo(o, r)); e.signum() > 0;)(i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e), (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r), e.compareTo(r) >= 0 ? (e.subTo(r, e), e.rShiftTo(1, e)) : (r.subTo(e, r), r.rShiftTo(1, r));
                return o > 0 && r.lShiftTo(o, r), r
            }, i.isProbablePrime = function(t) {
                var e, r = this.abs();
                if (1 == r.t && r[0] <= O[O.length - 1]) {
                    for (e = 0; e < O.length; ++e)
                        if (r[0] == O[e]) return !0;
                    return !1
                }
                if (r.isEven()) return !1;
                for (e = 1; e < O.length;) {
                    for (var n = O[e], i = e + 1; i < O.length && n < A;) n *= O[i++];
                    for (n = r.modInt(n); e < i;)
                        if (n % O[e++] == 0) return !1
                }
                return r.millerRabin(t)
            }, i.square = function() {
                var t = new n;
                return this.squareTo(t), t
            }, n.ZERO = d(0), n.ONE = d(1), n.valueOf = d, e.exports = n
        }, {
            "../package.json": 37
        }],
        35: [function(t, e, r) {
            (function(e) {
                (function() {
                    var r = t("assert"),
                        n = t("./bigi");
                    n.fromByteArrayUnsigned = function(t) {
                        return 128 & t[0] ? new n([0].concat(t)) : new n(t)
                    }, n.prototype.toByteArrayUnsigned = function() {
                        var t = this.toByteArray();
                        return 0 === t[0] ? t.slice(1) : t
                    }, n.fromDERInteger = function(t) {
                        return new n(t)
                    }, n.prototype.toDERInteger = n.prototype.toByteArray, n.fromBuffer = function(t) {
                        if (128 & t[0]) {
                            var e = Array.prototype.slice.call(t);
                            return new n([0].concat(e))
                        }
                        return new n(t)
                    }, n.fromHex = function(t) {
                        return "" === t ? n.ZERO : (r.equal(t, t.match(/^[A-Fa-f0-9]+/), "Invalid hex string"), r.equal(t.length % 2, 0, "Incomplete hex"), new n(t, 16))
                    }, n.prototype.toBuffer = function(t) {
                        for (var r = this.toByteArrayUnsigned(), n = [], i = t - r.length; n.length < i;) n.push(0);
                        return new e(n.concat(r))
                    }, n.prototype.toHex = function(t) {
                        return this.toBuffer(t).toString("hex")
                    }
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, {
            "./bigi": 34,
            assert: 1,
            buffer: 7
        }],
        36: [function(t, e, r) {
            var n = t("./bigi");
            t("./convert"), e.exports = n
        }, {
            "./bigi": 34,
            "./convert": 35
        }],
        37: [function(t, e, r) {
            e.exports = {
                name: "bigi",
                version: "1.4.2",
                description: "Big integers.",
                keywords: ["cryptography", "math", "bitcoin", "arbitrary", "precision", "arithmetic", "big", "integer", "int", "number", "biginteger", "bigint", "bignumber", "decimal", "float"],
                devDependencies: {
                    coveralls: "^2.11.2",
                    istanbul: "^0.3.5",
                    jshint: "^2.5.1",
                    mocha: "^2.1.0",
                    mochify: "^2.1.0"
                },
                repository: {
                    url: "https://github.com/cryptocoinjs/bigi",
                    type: "git"
                },
                main: "./lib/index.js",
                scripts: {
                    "browser-test": "./node_modules/.bin/mochify --wd -R spec",
                    test: "./node_modules/.bin/_mocha -- test/*.js",
                    jshint: "./node_modules/.bin/jshint --config jshint.json lib/*.js ; true",
                    unit: "./node_modules/.bin/mocha",
                    coverage: "./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",
                    coveralls: "npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"
                },
                dependencies: {},
                testling: {
                    files: "test/*.js",
                    harness: "mocha",
                    browsers: ["ie/9..latest", "firefox/latest", "chrome/latest", "safari/6.0..latest", "iphone/6.0..latest", "android-browser/4.2..latest"]
                }
            }
        }, {}],
        38: [function(t, e, r) {
            let n = t("create-hash"),
                i = t("create-hmac");
            e.exports = {
                hash160: function(t) {
                    const e = n("sha256").update(t).digest();
                    try {
                        return n("rmd160").update(e).digest()
                    } catch (t) {
                        return n("ripemd160").update(e).digest()
                    }
                },
                hmacSHA512: function(t, e) {
                    return i("sha512", t).update(e).digest()
                }
            }
        }, {
            "create-hash": 49,
            "create-hmac": 51
        }],
        39: [function(t, e, r) {
            let n = t("safe-buffer").Buffer,
                i = t("bs58check"),
                o = t("./crypto"),
                s = t("tiny-secp256k1"),
                f = t("typeforce"),
                a = t("wif"),
                u = f.BufferN(32),
                c = f.compile({
                    wif: f.UInt8,
                    bip32: {
                        public: f.UInt32,
                        private: f.UInt32
                    }
                }),
                h = {
                    wif: 128,
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    }
                };

            function d(t, e, r, n) {
                f(c, n), this.__d = t || null, this.__Q = e || null, this.chainCode = r, this.depth = 0, this.index = 0, this.network = n, this.parentFingerprint = 0
            }
            Object.defineProperty(d.prototype, "identifier", {
                get: function() {
                    return o.hash160(this.publicKey)
                }
            }), Object.defineProperty(d.prototype, "fingerprint", {
                get: function() {
                    return this.identifier.slice(0, 4)
                }
            }), Object.defineProperty(d.prototype, "privateKey", {
                enumerable: !1,
                get: function() {
                    return this.__d
                }
            }), Object.defineProperty(d.prototype, "publicKey", {
                get: function() {
                    return this.__Q || (this.__Q = s.pointFromScalar(this.__d, this.compressed)), this.__Q
                }
            }), d.prototype.isNeutered = function() {
                return null === this.__d
            }, d.prototype.neutered = function() {
                let t = y(this.publicKey, this.chainCode, this.network);
                return t.depth = this.depth, t.index = this.index, t.parentFingerprint = this.parentFingerprint, t
            }, d.prototype.toBase58 = function() {
                let t = this.network,
                    e = this.isNeutered() ? t.bip32.public : t.bip32.private,
                    r = n.allocUnsafe(78);
                return r.writeUInt32BE(e, 0), r.writeUInt8(this.depth, 4), r.writeUInt32BE(this.parentFingerprint, 5), r.writeUInt32BE(this.index, 9), this.chainCode.copy(r, 13), this.isNeutered() ? this.publicKey.copy(r, 45) : (r.writeUInt8(0, 45), this.privateKey.copy(r, 46)), i.encode(r)
            }, d.prototype.toWIF = function() {
                if (!this.privateKey) throw new TypeError("Missing private key");
                return a.encode(this.network.wif, this.privateKey, !0)
            };
            d.prototype.derive = function(t) {
                f(f.UInt32, t);
                let e = t >= 2147483648,
                    r = n.allocUnsafe(37);
                if (e) {
                    if (this.isNeutered()) throw new TypeError("Missing private key for hardened child key");
                    r[0] = 0, this.privateKey.copy(r, 1), r.writeUInt32BE(t, 33)
                } else this.publicKey.copy(r, 0), r.writeUInt32BE(t, 33);
                let i, a = o.hmacSHA512(this.chainCode, r),
                    u = a.slice(0, 32),
                    c = a.slice(32);
                if (!s.isPrivate(u)) return this.derive(t + 1);
                if (this.isNeutered()) {
                    let e = s.pointAddScalar(this.publicKey, u, !0);
                    if (null === e) return this.derive(t + 1);
                    i = y(e, c, this.network)
                } else {
                    let e = s.privateAdd(this.privateKey, u);
                    if (null == e) return this.derive(t + 1);
                    i = m(e, c, this.network)
                }
                return i.depth = this.depth + 1, i.index = t, i.parentFingerprint = this.fingerprint.readUInt32BE(0), i
            };
            let l = Math.pow(2, 31) - 1;

            function p(t) {
                return f.UInt32(t) && t <= l
            }

            function b(t) {
                return f.String(t) && t.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
            }

            function m(t, e, r) {
                if (f({
                        privateKey: u,
                        chainCode: u
                    }, {
                        privateKey: t,
                        chainCode: e
                    }), r = r || h, !s.isPrivate(t)) throw new TypeError("Private key not in range [1, n)");
                return new d(t, null, e, r)
            }

            function y(t, e, r) {
                if (f({
                        publicKey: f.BufferN(33),
                        chainCode: u
                    }, {
                        publicKey: t,
                        chainCode: e
                    }), r = r || h, !s.isPoint(t)) throw new TypeError("Point is not on the curve");
                return new d(null, t, e, r)
            }
            d.prototype.deriveHardened = function(t) {
                return f(p, t), this.derive(t + 2147483648)
            }, d.prototype.derivePath = function(t) {
                f(b, t);
                let e = t.split("/");
                if ("m" === e[0]) {
                    if (this.parentFingerprint) throw new TypeError("Expected master, got child");
                    e = e.slice(1)
                }
                return e.reduce(function(t, e) {
                    let r;
                    return "'" === e.slice(-1) ? (r = parseInt(e.slice(0, -1), 10), t.deriveHardened(r)) : (r = parseInt(e, 10), t.derive(r))
                }, this)
            }, d.prototype.sign = function(t) {
                return s.sign(t, this.privateKey)
            }, d.prototype.verify = function(t, e) {
                return s.verify(t, this.publicKey, e)
            }, e.exports = {
                fromBase58: function(t, e) {
                    let r = i.decode(t);
                    if (78 !== r.length) throw new TypeError("Invalid buffer length");
                    e = e || h;
                    let n = r.readUInt32BE(0);
                    if (n !== e.bip32.private && n !== e.bip32.public) throw new TypeError("Invalid network version");
                    let o = r[4],
                        s = r.readUInt32BE(5);
                    if (0 === o && 0 !== s) throw new TypeError("Invalid parent fingerprint");
                    let f = r.readUInt32BE(9);
                    if (0 === o && 0 !== f) throw new TypeError("Invalid index");
                    let a, u = r.slice(13, 45);
                    if (n === e.bip32.private) {
                        if (0 !== r.readUInt8(45)) throw new TypeError("Invalid private key");
                        a = m(r.slice(46, 78), u, e)
                    } else a = y(r.slice(45, 78), u, e);
                    return a.depth = o, a.index = f, a.parentFingerprint = s, a
                },
                fromPrivateKey: m,
                fromPublicKey: y,
                fromSeed: function(t, e) {
                    if (f(f.Buffer, t), t.length < 16) throw new TypeError("Seed should be at least 128 bits");
                    if (t.length > 64) throw new TypeError("Seed should be at most 512 bits");
                    e = e || h;
                    let r = o.hmacSHA512("Bitcoin seed", t);
                    return m(r.slice(0, 32), r.slice(32), e)
                }
            }
        }, {
            "./crypto": 38,
            bs58check: 47,
            "safe-buffer": 106,
            "tiny-secp256k1": 116,
            typeforce: 120,
            wif: 124
        }],
        40: [function(t, e, r) {
            var n = t("safe-buffer").Buffer;
            e.exports = {
                check: function(t) {
                    if (t.length < 8) return !1;
                    if (t.length > 72) return !1;
                    if (48 !== t[0]) return !1;
                    if (t[1] !== t.length - 2) return !1;
                    if (2 !== t[2]) return !1;
                    var e = t[3];
                    if (0 === e) return !1;
                    if (5 + e >= t.length) return !1;
                    if (2 !== t[4 + e]) return !1;
                    var r = t[5 + e];
                    return !(0 === r || 6 + e + r !== t.length || 128 & t[4] || e > 1 && 0 === t[4] && !(128 & t[5]) || 128 & t[e + 6] || r > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
                },
                decode: function(t) {
                    if (t.length < 8) throw new Error("DER sequence length is too short");
                    if (t.length > 72) throw new Error("DER sequence length is too long");
                    if (48 !== t[0]) throw new Error("Expected DER sequence");
                    if (t[1] !== t.length - 2) throw new Error("DER sequence length is invalid");
                    if (2 !== t[2]) throw new Error("Expected DER integer");
                    var e = t[3];
                    if (0 === e) throw new Error("R length is zero");
                    if (5 + e >= t.length) throw new Error("R length is too long");
                    if (2 !== t[4 + e]) throw new Error("Expected DER integer (2)");
                    var r = t[5 + e];
                    if (0 === r) throw new Error("S length is zero");
                    if (6 + e + r !== t.length) throw new Error("S length is invalid");
                    if (128 & t[4]) throw new Error("R value is negative");
                    if (e > 1 && 0 === t[4] && !(128 & t[5])) throw new Error("R value excessively padded");
                    if (128 & t[e + 6]) throw new Error("S value is negative");
                    if (r > 1 && 0 === t[e + 6] && !(128 & t[e + 7])) throw new Error("S value excessively padded");
                    return {
                        r: t.slice(4, 4 + e),
                        s: t.slice(6 + e)
                    }
                },
                encode: function(t, e) {
                    var r = t.length,
                        i = e.length;
                    if (0 === r) throw new Error("R length is zero");
                    if (0 === i) throw new Error("S length is zero");
                    if (r > 33) throw new Error("R length is too long");
                    if (i > 33) throw new Error("S length is too long");
                    if (128 & t[0]) throw new Error("R value is negative");
                    if (128 & e[0]) throw new Error("S value is negative");
                    if (r > 1 && 0 === t[0] && !(128 & t[1])) throw new Error("R value excessively padded");
                    if (i > 1 && 0 === e[0] && !(128 & e[1])) throw new Error("S value excessively padded");
                    var o = n.allocUnsafe(6 + r + i);
                    return o[0] = 48, o[1] = o.length - 2, o[2] = 2, o[3] = t.length, t.copy(o, 4), o[4 + r] = 2, o[5 + r] = e.length, e.copy(o, 6 + r), o
                }
            }
        }, {
            "safe-buffer": 106
        }],
        41: [function(t, e, r) {
            e.exports = {
                OP_FALSE: 0,
                OP_0: 0,
                OP_PUSHDATA1: 76,
                OP_PUSHDATA2: 77,
                OP_PUSHDATA4: 78,
                OP_1NEGATE: 79,
                OP_RESERVED: 80,
                OP_TRUE: 81,
                OP_1: 81,
                OP_2: 82,
                OP_3: 83,
                OP_4: 84,
                OP_5: 85,
                OP_6: 86,
                OP_7: 87,
                OP_8: 88,
                OP_9: 89,
                OP_10: 90,
                OP_11: 91,
                OP_12: 92,
                OP_13: 93,
                OP_14: 94,
                OP_15: 95,
                OP_16: 96,
                OP_NOP: 97,
                OP_VER: 98,
                OP_IF: 99,
                OP_NOTIF: 100,
                OP_VERIF: 101,
                OP_VERNOTIF: 102,
                OP_ELSE: 103,
                OP_ENDIF: 104,
                OP_VERIFY: 105,
                OP_RETURN: 106,
                OP_TOALTSTACK: 107,
                OP_FROMALTSTACK: 108,
                OP_2DROP: 109,
                OP_2DUP: 110,
                OP_3DUP: 111,
                OP_2OVER: 112,
                OP_2ROT: 113,
                OP_2SWAP: 114,
                OP_IFDUP: 115,
                OP_DEPTH: 116,
                OP_DROP: 117,
                OP_DUP: 118,
                OP_NIP: 119,
                OP_OVER: 120,
                OP_PICK: 121,
                OP_ROLL: 122,
                OP_ROT: 123,
                OP_SWAP: 124,
                OP_TUCK: 125,
                OP_CAT: 126,
                OP_SUBSTR: 127,
                OP_LEFT: 128,
                OP_RIGHT: 129,
                OP_SIZE: 130,
                OP_INVERT: 131,
                OP_AND: 132,
                OP_OR: 133,
                OP_XOR: 134,
                OP_EQUAL: 135,
                OP_EQUALVERIFY: 136,
                OP_RESERVED1: 137,
                OP_RESERVED2: 138,
                OP_1ADD: 139,
                OP_1SUB: 140,
                OP_2MUL: 141,
                OP_2DIV: 142,
                OP_NEGATE: 143,
                OP_ABS: 144,
                OP_NOT: 145,
                OP_0NOTEQUAL: 146,
                OP_ADD: 147,
                OP_SUB: 148,
                OP_MUL: 149,
                OP_DIV: 150,
                OP_MOD: 151,
                OP_LSHIFT: 152,
                OP_RSHIFT: 153,
                OP_BOOLAND: 154,
                OP_BOOLOR: 155,
                OP_NUMEQUAL: 156,
                OP_NUMEQUALVERIFY: 157,
                OP_NUMNOTEQUAL: 158,
                OP_LESSTHAN: 159,
                OP_GREATERTHAN: 160,
                OP_LESSTHANOREQUAL: 161,
                OP_GREATERTHANOREQUAL: 162,
                OP_MIN: 163,
                OP_MAX: 164,
                OP_WITHIN: 165,
                OP_RIPEMD160: 166,
                OP_SHA1: 167,
                OP_SHA256: 168,
                OP_HASH160: 169,
                OP_HASH256: 170,
                OP_CODESEPARATOR: 171,
                OP_CHECKSIG: 172,
                OP_CHECKSIGVERIFY: 173,
                OP_CHECKMULTISIG: 174,
                OP_CHECKMULTISIGVERIFY: 175,
                OP_NOP1: 176,
                OP_NOP2: 177,
                OP_CHECKLOCKTIMEVERIFY: 177,
                OP_NOP3: 178,
                OP_CHECKSEQUENCEVERIFY: 178,
                OP_NOP4: 179,
                OP_NOP5: 180,
                OP_NOP6: 181,
                OP_NOP7: 182,
                OP_NOP8: 183,
                OP_NOP9: 184,
                OP_NOP10: 185,
                OP_PUBKEYHASH: 253,
                OP_PUBKEY: 254,
                OP_INVALIDOPCODE: 255
            }
        }, {}],
        42: [function(t, e, r) {
            var n = t("./index.json"),
                i = {};
            for (var o in n) {
                i[n[o]] = o
            }
            e.exports = i
        }, {
            "./index.json": 41
        }],
        43: [function(t, e, r) {
            ! function(e, r) {
                "use strict";

                function n(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                var s;
                "object" == typeof e ? e.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : t("buffer").Buffer
                } catch (t) {}

                function f(t, e) {
                    var r = t.charCodeAt(e);
                    return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                }

                function a(t, e, r) {
                    var n = f(t, r);
                    return r - 1 >= e && (n |= f(t, r - 1) << 4), n
                }

                function u(t, e, r, n) {
                    for (var i = 0, o = Math.min(t.length, r), s = e; s < o; s++) {
                        var f = t.charCodeAt(s) - 48;
                        i *= n, i += f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f
                    }
                    return i
                }
                o.isBN = function(t) {
                    return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                }, o.max = function(t, e) {
                    return t.cmp(e) > 0 ? t : e
                }, o.min = function(t, e) {
                    return t.cmp(e) < 0 ? t : e
                }, o.prototype._init = function(t, e, r) {
                    if ("number" == typeof t) return this._initNumber(t, e, r);
                    if ("object" == typeof t) return this._initArray(t, e, r);
                    "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                    var i = 0;
                    "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)))
                }, o.prototype._initNumber = function(t, e, r) {
                    t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                }, o.prototype._initArray = function(t, e, r) {
                    if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, s, f = 0;
                    if ("be" === r)
                        for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << f & 67108863, this.words[o + 1] = s >>> 26 - f & 67108863, (f += 24) >= 26 && (f -= 26, o++);
                    else if ("le" === r)
                        for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << f & 67108863, this.words[o + 1] = s >>> 26 - f & 67108863, (f += 24) >= 26 && (f -= 26, o++);
                    return this.strip()
                }, o.prototype._parseHex = function(t, e, r) {
                    this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                    for (var n = 0; n < this.length; n++) this.words[n] = 0;
                    var i, o = 0,
                        s = 0;
                    if ("be" === r)
                        for (n = t.length - 1; n >= e; n -= 2) i = a(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                    else
                        for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) i = a(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                    this.strip()
                }, o.prototype._parseBase = function(t, e, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                    n--, i = i / e | 0;
                    for (var o = t.length - r, s = o % n, f = Math.min(o, o - s) + r, a = 0, c = r; c < f; c += n) a = u(t, c, c + n, e), this.imuln(i), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                    if (0 !== s) {
                        var h = 1;
                        for (a = u(t, c, t.length, e), c = 0; c < s; c++) h *= e;
                        this.imuln(h), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                    }
                    this.strip()
                }, o.prototype.copy = function(t) {
                    t.words = new Array(this.length);
                    for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                    t.length = this.length, t.negative = this.negative, t.red = this.red
                }, o.prototype.clone = function() {
                    var t = new o(null);
                    return this.copy(t), t
                }, o.prototype._expand = function(t) {
                    for (; this.length < t;) this.words[this.length++] = 0;
                    return this
                }, o.prototype.strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, o.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, o.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function l(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var n = t.length + e.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        s = i * o,
                        f = 67108863 & s,
                        a = s / 67108864 | 0;
                    r.words[0] = f;
                    for (var u = 1; u < n; u++) {
                        for (var c = a >>> 26, h = 67108863 & a, d = Math.min(u, e.length - 1), l = Math.max(0, u - t.length + 1); l <= d; l++) {
                            var p = u - l | 0;
                            c += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + h) / 67108864 | 0, h = 67108863 & s
                        }
                        r.words[u] = 0 | h, a = 0 | c
                    }
                    return 0 !== a ? r.words[u] = 0 | a : r.length--, r.strip()
                }
                o.prototype.toString = function(t, e) {
                    var r;
                    if (t = t || 10, e = 0 | e || 1, 16 === t || "hex" === t) {
                        r = "";
                        for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                            var f = this.words[s],
                                a = (16777215 & (f << i | o)).toString(16);
                            r = 0 !== (o = f >>> 24 - i & 16777215) || s !== this.length - 1 ? c[6 - a.length] + a + r : a + r, (i += 2) >= 26 && (i -= 26, s--)
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var u = h[t],
                            l = d[t];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var b = p.modn(l).toString(t);
                            r = (p = p.idivn(l)).isZero() ? b + r : c[u - b.length] + b + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16)
                }, o.prototype.toBuffer = function(t, e) {
                    return n(void 0 !== s), this.toArrayLike(s, t, e)
                }, o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, r) {
                    var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                    var s, f, a = "le" === e,
                        u = new t(o),
                        c = this.clone();
                    if (a) {
                        for (f = 0; !c.isZero(); f++) s = c.andln(255), c.iushrn(8), u[f] = s;
                        for (; f < o; f++) u[f] = 0
                    } else {
                        for (f = 0; f < o - i; f++) u[f] = 0;
                        for (f = 0; !c.isZero(); f++) s = c.andln(255), c.iushrn(8), u[o - f - 1] = s
                    }
                    return u
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return 26 * (this.length - 1) + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this.strip()
                }, o.prototype.ior = function(t) {
                    return n(0 == (this.negative | t.negative)), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this.strip()
                }, o.prototype.iand = function(t) {
                    return n(0 == (this.negative | t.negative)), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                    if (this !== e)
                        for (; n < e.length; n++) this.words[n] = e.words[n];
                    return this.length = e.length, this.strip()
                }, o.prototype.ixor = function(t) {
                    return n(0 == (this.negative | t.negative)), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    n("number" == typeof t && t >= 0);
                    var r = t / 26 | 0,
                        i = t % 26;
                    return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function(t) {
                    var e, r, n;
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e = this.iadd(t);
                        return t.negative = 1, e._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var r, n, i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = t) : (r = t, n = this);
                    for (var o = 0, s = 0; s < n.length; s++) o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    if (0 === o && s < r.length && r !== this)
                        for (; s < r.length; s++) this.words[s] = r.words[s];
                    return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var p = function(t, e, r) {
                    var n, i, o, s = t.words,
                        f = e.words,
                        a = r.words,
                        u = 0,
                        c = 0 | s[0],
                        h = 8191 & c,
                        d = c >>> 13,
                        l = 0 | s[1],
                        p = 8191 & l,
                        b = l >>> 13,
                        m = 0 | s[2],
                        y = 8191 & m,
                        g = m >>> 13,
                        v = 0 | s[3],
                        w = 8191 & v,
                        _ = v >>> 13,
                        S = 0 | s[4],
                        E = 8191 & S,
                        M = S >>> 13,
                        O = 0 | s[5],
                        A = 8191 & O,
                        k = O >>> 13,
                        T = 0 | s[6],
                        x = 8191 & T,
                        I = T >>> 13,
                        P = 0 | s[7],
                        R = 8191 & P,
                        B = P >>> 13,
                        N = 0 | s[8],
                        L = 8191 & N,
                        j = N >>> 13,
                        U = 0 | s[9],
                        D = 8191 & U,
                        C = U >>> 13,
                        q = 0 | f[0],
                        H = 8191 & q,
                        z = q >>> 13,
                        F = 0 | f[1],
                        K = 8191 & F,
                        W = F >>> 13,
                        V = 0 | f[2],
                        G = 8191 & V,
                        J = V >>> 13,
                        Y = 0 | f[3],
                        Z = 8191 & Y,
                        Q = Y >>> 13,
                        X = 0 | f[4],
                        $ = 8191 & X,
                        tt = X >>> 13,
                        et = 0 | f[5],
                        rt = 8191 & et,
                        nt = et >>> 13,
                        it = 0 | f[6],
                        ot = 8191 & it,
                        st = it >>> 13,
                        ft = 0 | f[7],
                        at = 8191 & ft,
                        ut = ft >>> 13,
                        ct = 0 | f[8],
                        ht = 8191 & ct,
                        dt = ct >>> 13,
                        lt = 0 | f[9],
                        pt = 8191 & lt,
                        bt = lt >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var mt = (u + (n = Math.imul(h, H)) | 0) + ((8191 & (i = (i = Math.imul(h, z)) + Math.imul(d, H) | 0)) << 13) | 0;
                    u = ((o = Math.imul(d, z)) + (i >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, n = Math.imul(p, H), i = (i = Math.imul(p, z)) + Math.imul(b, H) | 0, o = Math.imul(b, z);
                    var yt = (u + (n = n + Math.imul(h, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, W) | 0) + Math.imul(d, K) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, W) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(y, H), i = (i = Math.imul(y, z)) + Math.imul(g, H) | 0, o = Math.imul(g, z), n = n + Math.imul(p, K) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(b, K) | 0, o = o + Math.imul(b, W) | 0;
                    var gt = (u + (n = n + Math.imul(h, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, J) | 0) + Math.imul(d, G) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, J) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(w, H), i = (i = Math.imul(w, z)) + Math.imul(_, H) | 0, o = Math.imul(_, z), n = n + Math.imul(y, K) | 0, i = (i = i + Math.imul(y, W) | 0) + Math.imul(g, K) | 0, o = o + Math.imul(g, W) | 0, n = n + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(b, G) | 0, o = o + Math.imul(b, J) | 0;
                    var vt = (u + (n = n + Math.imul(h, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Q) | 0) + Math.imul(d, Z) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, Q) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(E, H), i = (i = Math.imul(E, z)) + Math.imul(M, H) | 0, o = Math.imul(M, z), n = n + Math.imul(w, K) | 0, i = (i = i + Math.imul(w, W) | 0) + Math.imul(_, K) | 0, o = o + Math.imul(_, W) | 0, n = n + Math.imul(y, G) | 0, i = (i = i + Math.imul(y, J) | 0) + Math.imul(g, G) | 0, o = o + Math.imul(g, J) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, Q) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, Q) | 0;
                    var wt = (u + (n = n + Math.imul(h, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tt) | 0) + Math.imul(d, $) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(A, H), i = (i = Math.imul(A, z)) + Math.imul(k, H) | 0, o = Math.imul(k, z), n = n + Math.imul(E, K) | 0, i = (i = i + Math.imul(E, W) | 0) + Math.imul(M, K) | 0, o = o + Math.imul(M, W) | 0, n = n + Math.imul(w, G) | 0, i = (i = i + Math.imul(w, J) | 0) + Math.imul(_, G) | 0, o = o + Math.imul(_, J) | 0, n = n + Math.imul(y, Z) | 0, i = (i = i + Math.imul(y, Q) | 0) + Math.imul(g, Z) | 0, o = o + Math.imul(g, Q) | 0, n = n + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(b, $) | 0, o = o + Math.imul(b, tt) | 0;
                    var _t = (u + (n = n + Math.imul(h, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, nt) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, nt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(x, H), i = (i = Math.imul(x, z)) + Math.imul(I, H) | 0, o = Math.imul(I, z), n = n + Math.imul(A, K) | 0, i = (i = i + Math.imul(A, W) | 0) + Math.imul(k, K) | 0, o = o + Math.imul(k, W) | 0, n = n + Math.imul(E, G) | 0, i = (i = i + Math.imul(E, J) | 0) + Math.imul(M, G) | 0, o = o + Math.imul(M, J) | 0, n = n + Math.imul(w, Z) | 0, i = (i = i + Math.imul(w, Q) | 0) + Math.imul(_, Z) | 0, o = o + Math.imul(_, Q) | 0, n = n + Math.imul(y, $) | 0, i = (i = i + Math.imul(y, tt) | 0) + Math.imul(g, $) | 0, o = o + Math.imul(g, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(b, rt) | 0, o = o + Math.imul(b, nt) | 0;
                    var St = (u + (n = n + Math.imul(h, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, st) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, st) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(R, H), i = (i = Math.imul(R, z)) + Math.imul(B, H) | 0, o = Math.imul(B, z), n = n + Math.imul(x, K) | 0, i = (i = i + Math.imul(x, W) | 0) + Math.imul(I, K) | 0, o = o + Math.imul(I, W) | 0, n = n + Math.imul(A, G) | 0, i = (i = i + Math.imul(A, J) | 0) + Math.imul(k, G) | 0, o = o + Math.imul(k, J) | 0, n = n + Math.imul(E, Z) | 0, i = (i = i + Math.imul(E, Q) | 0) + Math.imul(M, Z) | 0, o = o + Math.imul(M, Q) | 0, n = n + Math.imul(w, $) | 0, i = (i = i + Math.imul(w, tt) | 0) + Math.imul(_, $) | 0, o = o + Math.imul(_, tt) | 0, n = n + Math.imul(y, rt) | 0, i = (i = i + Math.imul(y, nt) | 0) + Math.imul(g, rt) | 0, o = o + Math.imul(g, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0;
                    var Et = (u + (n = n + Math.imul(h, at) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ut) | 0) + Math.imul(d, at) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, ut) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(L, H), i = (i = Math.imul(L, z)) + Math.imul(j, H) | 0, o = Math.imul(j, z), n = n + Math.imul(R, K) | 0, i = (i = i + Math.imul(R, W) | 0) + Math.imul(B, K) | 0, o = o + Math.imul(B, W) | 0, n = n + Math.imul(x, G) | 0, i = (i = i + Math.imul(x, J) | 0) + Math.imul(I, G) | 0, o = o + Math.imul(I, J) | 0, n = n + Math.imul(A, Z) | 0, i = (i = i + Math.imul(A, Q) | 0) + Math.imul(k, Z) | 0, o = o + Math.imul(k, Q) | 0, n = n + Math.imul(E, $) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(M, $) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(w, rt) | 0, i = (i = i + Math.imul(w, nt) | 0) + Math.imul(_, rt) | 0, o = o + Math.imul(_, nt) | 0, n = n + Math.imul(y, ot) | 0, i = (i = i + Math.imul(y, st) | 0) + Math.imul(g, ot) | 0, o = o + Math.imul(g, st) | 0, n = n + Math.imul(p, at) | 0, i = (i = i + Math.imul(p, ut) | 0) + Math.imul(b, at) | 0, o = o + Math.imul(b, ut) | 0;
                    var Mt = (u + (n = n + Math.imul(h, ht) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, dt) | 0) + Math.imul(d, ht) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, dt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(D, H), i = (i = Math.imul(D, z)) + Math.imul(C, H) | 0, o = Math.imul(C, z), n = n + Math.imul(L, K) | 0, i = (i = i + Math.imul(L, W) | 0) + Math.imul(j, K) | 0, o = o + Math.imul(j, W) | 0, n = n + Math.imul(R, G) | 0, i = (i = i + Math.imul(R, J) | 0) + Math.imul(B, G) | 0, o = o + Math.imul(B, J) | 0, n = n + Math.imul(x, Z) | 0, i = (i = i + Math.imul(x, Q) | 0) + Math.imul(I, Z) | 0, o = o + Math.imul(I, Q) | 0, n = n + Math.imul(A, $) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(k, $) | 0, o = o + Math.imul(k, tt) | 0, n = n + Math.imul(E, rt) | 0, i = (i = i + Math.imul(E, nt) | 0) + Math.imul(M, rt) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(w, ot) | 0, i = (i = i + Math.imul(w, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, n = n + Math.imul(y, at) | 0, i = (i = i + Math.imul(y, ut) | 0) + Math.imul(g, at) | 0, o = o + Math.imul(g, ut) | 0, n = n + Math.imul(p, ht) | 0, i = (i = i + Math.imul(p, dt) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, dt) | 0;
                    var Ot = (u + (n = n + Math.imul(h, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, bt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, bt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(D, K), i = (i = Math.imul(D, W)) + Math.imul(C, K) | 0, o = Math.imul(C, W), n = n + Math.imul(L, G) | 0, i = (i = i + Math.imul(L, J) | 0) + Math.imul(j, G) | 0, o = o + Math.imul(j, J) | 0, n = n + Math.imul(R, Z) | 0, i = (i = i + Math.imul(R, Q) | 0) + Math.imul(B, Z) | 0, o = o + Math.imul(B, Q) | 0, n = n + Math.imul(x, $) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(I, $) | 0, o = o + Math.imul(I, tt) | 0, n = n + Math.imul(A, rt) | 0, i = (i = i + Math.imul(A, nt) | 0) + Math.imul(k, rt) | 0, o = o + Math.imul(k, nt) | 0, n = n + Math.imul(E, ot) | 0, i = (i = i + Math.imul(E, st) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, st) | 0, n = n + Math.imul(w, at) | 0, i = (i = i + Math.imul(w, ut) | 0) + Math.imul(_, at) | 0, o = o + Math.imul(_, ut) | 0, n = n + Math.imul(y, ht) | 0, i = (i = i + Math.imul(y, dt) | 0) + Math.imul(g, ht) | 0, o = o + Math.imul(g, dt) | 0;
                    var At = (u + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, bt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(b, bt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(D, G), i = (i = Math.imul(D, J)) + Math.imul(C, G) | 0, o = Math.imul(C, J), n = n + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, Q) | 0) + Math.imul(j, Z) | 0, o = o + Math.imul(j, Q) | 0, n = n + Math.imul(R, $) | 0, i = (i = i + Math.imul(R, tt) | 0) + Math.imul(B, $) | 0, o = o + Math.imul(B, tt) | 0, n = n + Math.imul(x, rt) | 0, i = (i = i + Math.imul(x, nt) | 0) + Math.imul(I, rt) | 0, o = o + Math.imul(I, nt) | 0, n = n + Math.imul(A, ot) | 0, i = (i = i + Math.imul(A, st) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, st) | 0, n = n + Math.imul(E, at) | 0, i = (i = i + Math.imul(E, ut) | 0) + Math.imul(M, at) | 0, o = o + Math.imul(M, ut) | 0, n = n + Math.imul(w, ht) | 0, i = (i = i + Math.imul(w, dt) | 0) + Math.imul(_, ht) | 0, o = o + Math.imul(_, dt) | 0;
                    var kt = (u + (n = n + Math.imul(y, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, bt) | 0) + Math.imul(g, pt) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(g, bt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(D, Z), i = (i = Math.imul(D, Q)) + Math.imul(C, Z) | 0, o = Math.imul(C, Q), n = n + Math.imul(L, $) | 0, i = (i = i + Math.imul(L, tt) | 0) + Math.imul(j, $) | 0, o = o + Math.imul(j, tt) | 0, n = n + Math.imul(R, rt) | 0, i = (i = i + Math.imul(R, nt) | 0) + Math.imul(B, rt) | 0, o = o + Math.imul(B, nt) | 0, n = n + Math.imul(x, ot) | 0, i = (i = i + Math.imul(x, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, n = n + Math.imul(A, at) | 0, i = (i = i + Math.imul(A, ut) | 0) + Math.imul(k, at) | 0, o = o + Math.imul(k, ut) | 0, n = n + Math.imul(E, ht) | 0, i = (i = i + Math.imul(E, dt) | 0) + Math.imul(M, ht) | 0, o = o + Math.imul(M, dt) | 0;
                    var Tt = (u + (n = n + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, bt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(_, bt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(D, $), i = (i = Math.imul(D, tt)) + Math.imul(C, $) | 0, o = Math.imul(C, tt), n = n + Math.imul(L, rt) | 0, i = (i = i + Math.imul(L, nt) | 0) + Math.imul(j, rt) | 0, o = o + Math.imul(j, nt) | 0, n = n + Math.imul(R, ot) | 0, i = (i = i + Math.imul(R, st) | 0) + Math.imul(B, ot) | 0, o = o + Math.imul(B, st) | 0, n = n + Math.imul(x, at) | 0, i = (i = i + Math.imul(x, ut) | 0) + Math.imul(I, at) | 0, o = o + Math.imul(I, ut) | 0, n = n + Math.imul(A, ht) | 0, i = (i = i + Math.imul(A, dt) | 0) + Math.imul(k, ht) | 0, o = o + Math.imul(k, dt) | 0;
                    var xt = (u + (n = n + Math.imul(E, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, bt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(M, bt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(D, rt), i = (i = Math.imul(D, nt)) + Math.imul(C, rt) | 0, o = Math.imul(C, nt), n = n + Math.imul(L, ot) | 0, i = (i = i + Math.imul(L, st) | 0) + Math.imul(j, ot) | 0, o = o + Math.imul(j, st) | 0, n = n + Math.imul(R, at) | 0, i = (i = i + Math.imul(R, ut) | 0) + Math.imul(B, at) | 0, o = o + Math.imul(B, ut) | 0, n = n + Math.imul(x, ht) | 0, i = (i = i + Math.imul(x, dt) | 0) + Math.imul(I, ht) | 0, o = o + Math.imul(I, dt) | 0;
                    var It = (u + (n = n + Math.imul(A, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, bt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(k, bt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(D, ot), i = (i = Math.imul(D, st)) + Math.imul(C, ot) | 0, o = Math.imul(C, st), n = n + Math.imul(L, at) | 0, i = (i = i + Math.imul(L, ut) | 0) + Math.imul(j, at) | 0, o = o + Math.imul(j, ut) | 0, n = n + Math.imul(R, ht) | 0, i = (i = i + Math.imul(R, dt) | 0) + Math.imul(B, ht) | 0, o = o + Math.imul(B, dt) | 0;
                    var Pt = (u + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, bt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(I, bt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(D, at), i = (i = Math.imul(D, ut)) + Math.imul(C, at) | 0, o = Math.imul(C, ut), n = n + Math.imul(L, ht) | 0, i = (i = i + Math.imul(L, dt) | 0) + Math.imul(j, ht) | 0, o = o + Math.imul(j, dt) | 0;
                    var Rt = (u + (n = n + Math.imul(R, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, bt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(B, bt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(D, ht), i = (i = Math.imul(D, dt)) + Math.imul(C, ht) | 0, o = Math.imul(C, dt);
                    var Bt = (u + (n = n + Math.imul(L, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, bt) | 0) + Math.imul(j, pt) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(j, bt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863;
                    var Nt = (u + (n = Math.imul(D, pt)) | 0) + ((8191 & (i = (i = Math.imul(D, bt)) + Math.imul(C, pt) | 0)) << 13) | 0;
                    return u = ((o = Math.imul(C, bt)) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, a[0] = mt, a[1] = yt, a[2] = gt, a[3] = vt, a[4] = wt, a[5] = _t, a[6] = St, a[7] = Et, a[8] = Mt, a[9] = Ot, a[10] = At, a[11] = kt, a[12] = Tt, a[13] = xt, a[14] = It, a[15] = Pt, a[16] = Rt, a[17] = Bt, a[18] = Nt, 0 !== u && (a[19] = u, r.length++), r
                };

                function b(t, e, r) {
                    return (new m).mulp(t, e, r)
                }

                function m(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (p = l), o.prototype.mulTo = function(t, e) {
                    var r = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? p(this, t, e) : r < 63 ? l(this, t, e) : r < 1024 ? function(t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var f = 67108863 & n, a = Math.min(o, e.length - 1), u = Math.max(0, o - t.length + 1); u <= a; u++) {
                                var c = o - u,
                                    h = (0 | t.words[c]) * (0 | e.words[u]),
                                    d = 67108863 & h;
                                f = 67108863 & (d = d + f | 0), i += (s = (s = s + (h / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            r.words[o] = f, n = s, s = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, t, e) : b(this, t, e)
                }, m.prototype.makeRBT = function(t) {
                    for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                    return e
                }, m.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                    return n
                }, m.prototype.permute = function(t, e, r, n, i, o) {
                    for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]]
                }, m.prototype.transform = function(t, e, r, n, i, o) {
                    this.permute(o, t, e, r, n, i);
                    for (var s = 1; s < i; s <<= 1)
                        for (var f = s << 1, a = Math.cos(2 * Math.PI / f), u = Math.sin(2 * Math.PI / f), c = 0; c < i; c += f)
                            for (var h = a, d = u, l = 0; l < s; l++) {
                                var p = r[c + l],
                                    b = n[c + l],
                                    m = r[c + l + s],
                                    y = n[c + l + s],
                                    g = h * m - d * y;
                                y = h * y + d * m, m = g, r[c + l] = p + m, n[c + l] = b + y, r[c + l + s] = p - m, n[c + l + s] = b - y, l !== f && (g = a * h - u * d, d = a * d + u * h, h = g)
                            }
                }, m.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, m.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = t[n];
                            t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                        }
                }, m.prototype.normalize13b = function(t, e) {
                    for (var r = 0, n = 0; n < e / 2; n++) {
                        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, m.prototype.convert13b = function(t, e, r, i) {
                    for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                    for (s = 2 * e; s < i; ++s) r[s] = 0;
                    n(0 === o), n(0 == (-8192 & o))
                }, m.prototype.stub = function(t) {
                    for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, m.prototype.mulp = function(t, e, r) {
                    var n = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        s = new Array(n),
                        f = new Array(n),
                        a = new Array(n),
                        u = new Array(n),
                        c = new Array(n),
                        h = new Array(n),
                        d = r.words;
                    d.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, u, n), this.transform(s, o, f, a, n, i), this.transform(u, o, c, h, n, i);
                    for (var l = 0; l < n; l++) {
                        var p = f[l] * c[l] - a[l] * h[l];
                        a[l] = f[l] * h[l] + a[l] * c[l], f[l] = p
                    }
                    return this.conjugate(f, a, n), this.transform(f, a, d, o, n, i), this.conjugate(d, o, n), this.normalize13b(d, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), b(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    n("number" == typeof t), n(t < 67108864);
                    for (var e = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * t,
                            o = (67108863 & i) + (67108863 & e);
                        e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o
                    }
                    return 0 !== e && (this.words[r] = e, this.length++), this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            e[r] = (t.words[n] & 1 << i) >>> i
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                    if (++n < e.length)
                        for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e, r = t % 26,
                        i = (t - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var s = 0;
                        for (e = 0; e < this.length; e++) {
                            var f = this.words[e] & o,
                                a = (0 | this.words[e]) - f << r;
                            this.words[e] = a | s, s = f >>> 26 - r
                        }
                        s && (this.words[e] = s, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function(t) {
                    return n(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, r) {
                    var i;
                    n("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var o = t % 26,
                        s = Math.min((t - o) / 26, this.length),
                        f = 67108863 ^ 67108863 >>> o << o,
                        a = r;
                    if (i -= s, i = Math.max(0, i), a) {
                        for (var u = 0; u < s; u++) a.words[u] = this.words[u];
                        a.length = s
                    }
                    if (0 === s);
                    else if (this.length > s)
                        for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
                    else this.words[0] = 0, this.length = 1;
                    var c = 0;
                    for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
                        var h = 0 | this.words[u];
                        this.words[u] = c << 26 - o | h >>> o, c = h & f
                    }
                    return a && 0 !== c && (a.words[a.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function(t, e, r) {
                    return n(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    return !(this.length <= r) && !!(this.words[r] & i)
                }, o.prototype.imaskn = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                        var i = 67108863 ^ 67108863 >>> e << e;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this.strip()
                }, o.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(t, e, r) {
                    var i, o, s = t.length + r;
                    this._expand(s);
                    var f = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + r]) + f;
                        var a = (0 | t.words[i]) * e;
                        f = ((o -= 67108863 & a) >> 26) - (a / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) f = (o = (0 | this.words[i + r]) + f) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === f) return this.strip();
                    for (n(-1 === f), f = 0, i = 0; i < this.length; i++) f = (o = -(0 | this.words[i]) + f) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var r = (this.length, t.length),
                        n = this.clone(),
                        i = t,
                        s = 0 | i.words[i.length - 1];
                    0 !== (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
                    var f, a = n.length - i.length;
                    if ("mod" !== e) {
                        (f = new o(null)).length = a + 1, f.words = new Array(f.length);
                        for (var u = 0; u < f.length; u++) f.words[u] = 0
                    }
                    var c = n.clone()._ishlnsubmul(i, 1, a);
                    0 === c.negative && (n = c, f && (f.words[a] = 1));
                    for (var h = a - 1; h >= 0; h--) {
                        var d = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
                        for (d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(i, d, h); 0 !== n.negative;) d--, n.negative = 0, n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
                        f && (f.words[h] = d)
                    }
                    return f && f.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), {
                        div: f || null,
                        mod: n
                    }
                }, o.prototype.divmod = function(t, e, r) {
                    return n(!t.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (f = this.neg().divmod(t, e), "mod" !== e && (i = f.div.neg()), "div" !== e && (s = f.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                        div: i,
                        mod: s
                    }) : 0 === this.negative && 0 !== t.negative ? (f = this.divmod(t.neg(), e), "mod" !== e && (i = f.div.neg()), {
                        div: i,
                        mod: f.mod
                    }) : 0 != (this.negative & t.negative) ? (f = this.neg().divmod(t.neg(), e), "div" !== e && (s = f.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                        div: f.div,
                        mod: s
                    }) : t.length > this.length || this.cmp(t) < 0 ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new o(this.modn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modn(t.words[0]))
                    } : this._wordDiv(t, e);
                    var i, s, f
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        n = t.ushrn(1),
                        i = t.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modn = function(t) {
                    n(t <= 67108863);
                    for (var e = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
                    return r
                }, o.prototype.idivn = function(t) {
                    n(t <= 67108863);
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 67108864 * e;
                        this.words[r] = i / t | 0, e = i % t
                    }
                    return this.strip()
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), s = new o(0), f = new o(0), a = new o(1), u = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++u;
                    for (var c = r.clone(), h = e.clone(); !e.isZero();) {
                        for (var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d, l <<= 1);
                        if (d > 0)
                            for (e.iushrn(d); d-- > 0;)(i.isOdd() || s.isOdd()) && (i.iadd(c), s.isub(h)), i.iushrn(1), s.iushrn(1);
                        for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(f.isOdd() || a.isOdd()) && (f.iadd(c), a.isub(h)), f.iushrn(1), a.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), i.isub(f), s.isub(a)) : (r.isub(e), f.isub(i), a.isub(s))
                    }
                    return {
                        a: f,
                        b: a,
                        gcd: r.iushln(u)
                    }
                }, o.prototype._invmp = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i, s = new o(1), f = new o(0), a = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var u = 0, c = 1; 0 == (e.words[0] & c) && u < 26; ++u, c <<= 1);
                        if (u > 0)
                            for (e.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(a), s.iushrn(1);
                        for (var h = 0, d = 1; 0 == (r.words[0] & d) && h < 26; ++h, d <<= 1);
                        if (h > 0)
                            for (r.iushrn(h); h-- > 0;) f.isOdd() && f.iadd(a), f.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), s.isub(f)) : (r.isub(e), f.isub(s))
                    }
                    return (i = 0 === e.cmpn(1) ? s : f).cmpn(0) < 0 && i.iadd(t), i
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = e.cmp(r);
                        if (i < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return 0 == (1 & this.words[0])
                }, o.prototype.isOdd = function() {
                    return 1 == (1 & this.words[0])
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    n("number" == typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                        var f = 0 | this.words[s];
                        o = (f += o) >>> 26, f &= 67108863, this.words[s] = f
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), n(t <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        e = i === t ? 0 : i < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | t.words[r];
                        if (n !== i) {
                            n < i ? e = -1 : n > i && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function(t) {
                    return this.cmpn(t) <= 0
                }, o.prototype.lte = function(t) {
                    return this.cmp(t) <= 0
                }, o.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, o.red = function(t) {
                    return new E(t)
                }, o.prototype.toRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var y = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function g(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function v() {
                    g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function w() {
                    g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function _() {
                    g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function S() {
                    g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function E(t) {
                    if ("string" == typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function M(t) {
                    E.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                g.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = new Array(Math.ceil(this.n / 13)), t
                }, g.prototype.ireduce = function(t) {
                    var e, r = t;
                    do {
                        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (e > this.n);
                    var n = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, g.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, g.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(v, g), v.prototype.split = function(t, e) {
                    for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n];
                    if (e.length = r, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                    var i = t.words[9];
                    for (e.words[e.length++] = 4194303 & i, n = 10; n < t.length; n++) {
                        var o = 0 | t.words[n];
                        t.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                    }
                    i >>>= 22, t.words[n - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, v.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(w, g), i(_, g), i(S, g), S.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 19 * (0 | t.words[r]) + e,
                            i = 67108863 & n;
                        n >>>= 26, t.words[r] = i, e = n
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    if (y[t]) return y[t];
                    var e;
                    if ("k256" === t) e = new v;
                    else if ("p224" === t) e = new w;
                    else if ("p192" === t) e = new _;
                    else {
                        if ("p25519" !== t) throw new Error("Unknown prime " + t);
                        e = new S
                    }
                    return y[t] = e, e
                }, E.prototype._verify1 = function(t) {
                    n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                }, E.prototype._verify2 = function(t, e) {
                    n(0 == (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                }, E.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                }, E.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, E.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, E.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, E.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, E.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, E.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, E.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, E.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, E.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, E.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, E.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (n(e % 2 == 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                    n(!i.isZero());
                    var f = new o(1).toRed(this),
                        a = f.redNeg(),
                        u = this.m.subn(1).iushrn(1),
                        c = this.m.bitLength();
                    for (c = new o(2 * c * c).toRed(this); 0 !== this.pow(c, u).cmp(a);) c.redIAdd(a);
                    for (var h = this.pow(c, i), d = this.pow(t, i.addn(1).iushrn(1)), l = this.pow(t, i), p = s; 0 !== l.cmp(f);) {
                        for (var b = l, m = 0; 0 !== b.cmp(f); m++) b = b.redSqr();
                        n(m < p);
                        var y = this.pow(h, new o(1).iushln(p - m - 1));
                        d = d.redMul(y), h = y.redSqr(), l = l.redMul(h), p = m
                    }
                    return d
                }, E.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, E.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                    var i = r[0],
                        s = 0,
                        f = 0,
                        a = e.bitLength() % 26;
                    for (0 === a && (a = 26), n = e.length - 1; n >= 0; n--) {
                        for (var u = e.words[n], c = a - 1; c >= 0; c--) {
                            var h = u >> c & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== s ? (s <<= 1, s |= h, (4 === ++f || 0 === n && 0 === c) && (i = this.mul(i, r[s]), f = 0, s = 0)) : f = 0
                        }
                        a = 26
                    }
                    return i
                }, E.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, E.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new M(t)
                }, i(M, E), M.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, M.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, M.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, M.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        s = i;
                    return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                }, M.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(void 0 === e || e, this)
        }, {
            buffer: 6
        }],
        44: [function(t, e, r) {
            var n;

            function i(t) {
                this.rand = t
            }
            if (e.exports = function(t) {
                    return n || (n = new i(null)), n.generate(t)
                }, e.exports.Rand = i, i.prototype.generate = function(t) {
                    return this._rand(t)
                }, i.prototype._rand = function(t) {
                    if (this.rand.getBytes) return this.rand.getBytes(t);
                    for (var e = new Uint8Array(t), r = 0; r < e.length; r++) e[r] = this.rand.getByte();
                    return e
                }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(t) {
                var e = new Uint8Array(t);
                return self.crypto.getRandomValues(e), e
            } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(t) {
                var e = new Uint8Array(t);
                return self.msCrypto.getRandomValues(e), e
            } : "object" == typeof window && (i.prototype._rand = function() {
                throw new Error("Not implemented yet")
            });
            else try {
                var o = t("crypto");
                if ("function" != typeof o.randomBytes) throw new Error("Not supported");
                i.prototype._rand = function(t) {
                    return o.randomBytes(t)
                }
            } catch (t) {}
        }, {
            crypto: 6
        }],
        45: [function(t, e, r) {
            var n = t("base-x");
            e.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        }, {
            "base-x": 32
        }],
        46: [function(t, e, r) {
            "use strict";
            var n = t("bs58"),
                i = t("safe-buffer").Buffer;
            e.exports = function(t) {
                function e(e) {
                    var r = e.slice(0, -4),
                        n = e.slice(-4),
                        i = t(r);
                    if (!(n[0] ^ i[0] | n[1] ^ i[1] | n[2] ^ i[2] | n[3] ^ i[3])) return r
                }
                return {
                    encode: function(e) {
                        var r = t(e);
                        return n.encode(i.concat([e, r], e.length + 4))
                    },
                    decode: function(t) {
                        var r = e(n.decode(t));
                        if (!r) throw new Error("Invalid checksum");
                        return r
                    },
                    decodeUnsafe: function(t) {
                        var r = n.decodeUnsafe(t);
                        if (r) return e(r)
                    }
                }
            }
        }, {
            bs58: 45,
            "safe-buffer": 106
        }],
        47: [function(t, e, r) {
            "use strict";
            var n = t("create-hash"),
                i = t("./base");
            e.exports = i(function(t) {
                var e = n("sha256").update(t).digest();
                return n("sha256").update(e).digest()
            })
        }, {
            "./base": 46,
            "create-hash": 49
        }],
        48: [function(t, e, r) {
            var n = t("safe-buffer").Buffer,
                i = t("stream").Transform,
                o = t("string_decoder").StringDecoder;

            function s(t) {
                i.call(this), this.hashMode = "string" == typeof t, this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
            }
            t("inherits")(s, i), s.prototype.update = function(t, e, r) {
                "string" == typeof t && (t = n.from(t, e));
                var i = this._update(t);
                return this.hashMode ? this : (r && (i = this._toString(i, r)), i)
            }, s.prototype.setAutoPadding = function() {}, s.prototype.getAuthTag = function() {
                throw new Error("trying to get auth tag in unsupported state")
            }, s.prototype.setAuthTag = function() {
                throw new Error("trying to set auth tag in unsupported state")
            }, s.prototype.setAAD = function() {
                throw new Error("trying to set aad in unsupported state")
            }, s.prototype._transform = function(t, e, r) {
                var n;
                try {
                    this.hashMode ? this._update(t) : this.push(this._update(t))
                } catch (t) {
                    n = t
                } finally {
                    r(n)
                }
            }, s.prototype._flush = function(t) {
                var e;
                try {
                    this.push(this.__final())
                } catch (t) {
                    e = t
                }
                t(e)
            }, s.prototype._finalOrDigest = function(t) {
                var e = this.__final() || n.alloc(0);
                return t && (e = this._toString(e, t, !0)), e
            }, s.prototype._toString = function(t, e, r) {
                if (this._decoder || (this._decoder = new o(e), this._encoding = e), this._encoding !== e) throw new Error("can't switch encodings");
                var n = this._decoder.write(t);
                return r && (n += this._decoder.end()), n
            }, e.exports = s
        }, {
            inherits: 83,
            "safe-buffer": 106,
            stream: 15,
            string_decoder: 30
        }],
        49: [function(t, e, r) {
            "use strict";
            var n = t("inherits"),
                i = t("md5.js"),
                o = t("ripemd160"),
                s = t("sha.js"),
                f = t("cipher-base");

            function a(t) {
                f.call(this, "digest"), this._hash = t
            }
            n(a, f), a.prototype._update = function(t) {
                this._hash.update(t)
            }, a.prototype._final = function() {
                return this._hash.digest()
            }, e.exports = function(t) {
                return "md5" === (t = t.toLowerCase()) ? new i : "rmd160" === t || "ripemd160" === t ? new o : new a(s(t))
            }
        }, {
            "cipher-base": 48,
            inherits: 83,
            "md5.js": 84,
            ripemd160: 105,
            "sha.js": 108
        }],
        50: [function(t, e, r) {
            var n = t("md5.js");
            e.exports = function(t) {
                return (new n).update(t).digest()
            }
        }, {
            "md5.js": 84
        }],
        51: [function(t, e, r) {
            "use strict";
            var n = t("inherits"),
                i = t("./legacy"),
                o = t("cipher-base"),
                s = t("safe-buffer").Buffer,
                f = t("create-hash/md5"),
                a = t("ripemd160"),
                u = t("sha.js"),
                c = s.alloc(128);

            function h(t, e) {
                o.call(this, "digest"), "string" == typeof e && (e = s.from(e));
                var r = "sha512" === t || "sha384" === t ? 128 : 64;
                (this._alg = t, this._key = e, e.length > r) ? e = ("rmd160" === t ? new a : u(t)).update(e).digest(): e.length < r && (e = s.concat([e, c], r));
                for (var n = this._ipad = s.allocUnsafe(r), i = this._opad = s.allocUnsafe(r), f = 0; f < r; f++) n[f] = 54 ^ e[f], i[f] = 92 ^ e[f];
                this._hash = "rmd160" === t ? new a : u(t), this._hash.update(n)
            }
            n(h, o), h.prototype._update = function(t) {
                this._hash.update(t)
            }, h.prototype._final = function() {
                var t = this._hash.digest();
                return ("rmd160" === this._alg ? new a : u(this._alg)).update(this._opad).update(t).digest()
            }, e.exports = function(t, e) {
                return "rmd160" === (t = t.toLowerCase()) || "ripemd160" === t ? new h("rmd160", e) : "md5" === t ? new i(f, e) : new h(t, e)
            }
        }, {
            "./legacy": 52,
            "cipher-base": 48,
            "create-hash/md5": 50,
            inherits: 83,
            ripemd160: 105,
            "safe-buffer": 106,
            "sha.js": 108
        }],
        52: [function(t, e, r) {
            "use strict";
            var n = t("inherits"),
                i = t("safe-buffer").Buffer,
                o = t("cipher-base"),
                s = i.alloc(128),
                f = 64;

            function a(t, e) {
                o.call(this, "digest"), "string" == typeof e && (e = i.from(e)), this._alg = t, this._key = e, e.length > f ? e = t(e) : e.length < f && (e = i.concat([e, s], f));
                for (var r = this._ipad = i.allocUnsafe(f), n = this._opad = i.allocUnsafe(f), a = 0; a < f; a++) r[a] = 54 ^ e[a], n[a] = 92 ^ e[a];
                this._hash = [r]
            }
            n(a, o), a.prototype._update = function(t) {
                this._hash.push(t)
            }, a.prototype._final = function() {
                var t = this._alg(i.concat(this._hash));
                return this._alg(i.concat([this._opad, t]))
            }, e.exports = a
        }, {
            "cipher-base": 48,
            inherits: 83,
            "safe-buffer": 106
        }],
        53: [function(t, e, r) {
            "use strict";
            var n = r;
            n.version = t("../package.json").version, n.utils = t("./elliptic/utils"), n.rand = t("brorand"), n.curve = t("./elliptic/curve"), n.curves = t("./elliptic/curves"), n.ec = t("./elliptic/ec"), n.eddsa = t("./elliptic/eddsa")
        }, {
            "../package.json": 68,
            "./elliptic/curve": 56,
            "./elliptic/curves": 59,
            "./elliptic/ec": 60,
            "./elliptic/eddsa": 63,
            "./elliptic/utils": 67,
            brorand: 44
        }],
        54: [function(t, e, r) {
            "use strict";
            var n = t("bn.js"),
                i = t("../utils"),
                o = i.getNAF,
                s = i.getJSF,
                f = i.assert;

            function a(t, e) {
                this.type = t, this.p = new n(e.p, 16), this.red = e.prime ? n.red(e.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = e.n && new n(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function u(t, e) {
                this.curve = t, this.type = e, this.precomputed = null
            }
            e.exports = a, a.prototype.point = function() {
                throw new Error("Not implemented")
            }, a.prototype.validate = function() {
                throw new Error("Not implemented")
            }, a.prototype._fixedNafMul = function(t, e) {
                f(t.precomputed);
                var r = t._getDoubles(),
                    n = o(e, 1, this._bitLength),
                    i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                i /= 3;
                var s, a, u = [];
                for (s = 0; s < n.length; s += r.step) {
                    a = 0;
                    for (var c = s + r.step - 1; c >= s; c--) a = (a << 1) + n[c];
                    u.push(a)
                }
                for (var h = this.jpoint(null, null, null), d = this.jpoint(null, null, null), l = i; l > 0; l--) {
                    for (s = 0; s < u.length; s++)(a = u[s]) === l ? d = d.mixedAdd(r.points[s]) : a === -l && (d = d.mixedAdd(r.points[s].neg()));
                    h = h.add(d)
                }
                return h.toP()
            }, a.prototype._wnafMul = function(t, e) {
                var r = 4,
                    n = t._getNAFPoints(r);
                r = n.wnd;
                for (var i = n.points, s = o(e, r, this._bitLength), a = this.jpoint(null, null, null), u = s.length - 1; u >= 0; u--) {
                    for (var c = 0; u >= 0 && 0 === s[u]; u--) c++;
                    if (u >= 0 && c++, a = a.dblp(c), u < 0) break;
                    var h = s[u];
                    f(0 !== h), a = "affine" === t.type ? h > 0 ? a.mixedAdd(i[h - 1 >> 1]) : a.mixedAdd(i[-h - 1 >> 1].neg()) : h > 0 ? a.add(i[h - 1 >> 1]) : a.add(i[-h - 1 >> 1].neg())
                }
                return "affine" === t.type ? a.toP() : a
            }, a.prototype._wnafMulAdd = function(t, e, r, n, i) {
                var f, a, u, c = this._wnafT1,
                    h = this._wnafT2,
                    d = this._wnafT3,
                    l = 0;
                for (f = 0; f < n; f++) {
                    var p = (u = e[f])._getNAFPoints(t);
                    c[f] = p.wnd, h[f] = p.points
                }
                for (f = n - 1; f >= 1; f -= 2) {
                    var b = f - 1,
                        m = f;
                    if (1 === c[b] && 1 === c[m]) {
                        var y = [e[b], null, null, e[m]];
                        0 === e[b].y.cmp(e[m].y) ? (y[1] = e[b].add(e[m]), y[2] = e[b].toJ().mixedAdd(e[m].neg())) : 0 === e[b].y.cmp(e[m].y.redNeg()) ? (y[1] = e[b].toJ().mixedAdd(e[m]), y[2] = e[b].add(e[m].neg())) : (y[1] = e[b].toJ().mixedAdd(e[m]), y[2] = e[b].toJ().mixedAdd(e[m].neg()));
                        var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                            v = s(r[b], r[m]);
                        for (l = Math.max(v[0].length, l), d[b] = new Array(l), d[m] = new Array(l), a = 0; a < l; a++) {
                            var w = 0 | v[0][a],
                                _ = 0 | v[1][a];
                            d[b][a] = g[3 * (w + 1) + (_ + 1)], d[m][a] = 0, h[b] = y
                        }
                    } else d[b] = o(r[b], c[b], this._bitLength), d[m] = o(r[m], c[m], this._bitLength), l = Math.max(d[b].length, l), l = Math.max(d[m].length, l)
                }
                var S = this.jpoint(null, null, null),
                    E = this._wnafT4;
                for (f = l; f >= 0; f--) {
                    for (var M = 0; f >= 0;) {
                        var O = !0;
                        for (a = 0; a < n; a++) E[a] = 0 | d[a][f], 0 !== E[a] && (O = !1);
                        if (!O) break;
                        M++, f--
                    }
                    if (f >= 0 && M++, S = S.dblp(M), f < 0) break;
                    for (a = 0; a < n; a++) {
                        var A = E[a];
                        0 !== A && (A > 0 ? u = h[a][A - 1 >> 1] : A < 0 && (u = h[a][-A - 1 >> 1].neg()), S = "affine" === u.type ? S.mixedAdd(u) : S.add(u))
                    }
                }
                for (f = 0; f < n; f++) h[f] = null;
                return i ? S : S.toP()
            }, a.BasePoint = u, u.prototype.eq = function() {
                throw new Error("Not implemented")
            }, u.prototype.validate = function() {
                return this.curve.validate(this)
            }, a.prototype.decodePoint = function(t, e) {
                t = i.toArray(t, e);
                var r = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? f(t[t.length - 1] % 2 == 0) : 7 === t[0] && f(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                throw new Error("Unknown point format")
            }, u.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }, u.prototype._encode = function(t) {
                var e = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
            }, u.prototype.encode = function(t, e) {
                return i.encode(this._encode(e), t)
            }, u.prototype.precompute = function(t) {
                if (this.precomputed) return this;
                var e = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
            }, u.prototype._hasDoubles = function(t) {
                if (!this.precomputed) return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }, u.prototype._getDoubles = function(t, e) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], n = this, i = 0; i < e; i += t) {
                    for (var o = 0; o < t; o++) n = n.dbl();
                    r.push(n)
                }
                return {
                    step: t,
                    points: r
                }
            }, u.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) e[i] = e[i - 1].add(n);
                return {
                    wnd: t,
                    points: e
                }
            }, u.prototype._getBeta = function() {
                return null
            }, u.prototype.dblp = function(t) {
                for (var e = this, r = 0; r < t; r++) e = e.dbl();
                return e
            }
        }, {
            "../utils": 67,
            "bn.js": 43
        }],
        55: [function(t, e, r) {
            "use strict";
            var n = t("../utils"),
                i = t("bn.js"),
                o = t("inherits"),
                s = t("./base"),
                f = n.assert;

            function a(t) {
                this.twisted = 1 != (0 | t.a), this.mOneA = this.twisted && -1 == (0 | t.a), this.extended = this.mOneA, s.call(this, "edwards", t), this.a = new i(t.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(t.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(t.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), f(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | t.c)
            }

            function u(t, e, r, n, o) {
                s.BasePoint.call(this, t, "projective"), null === e && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(e, 16), this.y = new i(r, 16), this.z = n ? new i(n, 16) : this.curve.one, this.t = o && new i(o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
            }
            o(a, s), e.exports = a, a.prototype._mulA = function(t) {
                return this.mOneA ? t.redNeg() : this.a.redMul(t)
            }, a.prototype._mulC = function(t) {
                return this.oneC ? t : this.c.redMul(t)
            }, a.prototype.jpoint = function(t, e, r, n) {
                return this.point(t, e, r, n)
            }, a.prototype.pointFromX = function(t, e) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr(),
                    n = this.c2.redSub(this.a.redMul(r)),
                    o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                    s = n.redMul(o.redInvm()),
                    f = s.redSqrt();
                if (0 !== f.redSqr().redSub(s).cmp(this.zero)) throw new Error("invalid point");
                var a = f.fromRed().isOdd();
                return (e && !a || !e && a) && (f = f.redNeg()), this.point(t, f)
            }, a.prototype.pointFromY = function(t, e) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr(),
                    n = r.redSub(this.c2),
                    o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                    s = n.redMul(o.redInvm());
                if (0 === s.cmp(this.zero)) {
                    if (e) throw new Error("invalid point");
                    return this.point(this.zero, t)
                }
                var f = s.redSqrt();
                if (0 !== f.redSqr().redSub(s).cmp(this.zero)) throw new Error("invalid point");
                return f.fromRed().isOdd() !== e && (f = f.redNeg()), this.point(f, t)
            }, a.prototype.validate = function(t) {
                if (t.isInfinity()) return !0;
                t.normalize();
                var e = t.x.redSqr(),
                    r = t.y.redSqr(),
                    n = e.redMul(this.a).redAdd(r),
                    i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
                return 0 === n.cmp(i)
            }, o(u, s.BasePoint), a.prototype.pointFromJSON = function(t) {
                return u.fromJSON(this, t)
            }, a.prototype.point = function(t, e, r, n) {
                return new u(this, t, e, r, n)
            }, u.fromJSON = function(t, e) {
                return new u(t, e[0], e[1], e[2])
            }, u.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, u.prototype.isInfinity = function() {
                return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
            }, u.prototype._extDbl = function() {
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr();
                r = r.redIAdd(r);
                var n = this.curve._mulA(t),
                    i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),
                    o = n.redAdd(e),
                    s = o.redSub(r),
                    f = n.redSub(e),
                    a = i.redMul(s),
                    u = o.redMul(f),
                    c = i.redMul(f),
                    h = s.redMul(o);
                return this.curve.point(a, u, h, c)
            }, u.prototype._projDbl = function() {
                var t, e, r, n, i, o, s = this.x.redAdd(this.y).redSqr(),
                    f = this.x.redSqr(),
                    a = this.y.redSqr();
                if (this.curve.twisted) {
                    var u = (n = this.curve._mulA(f)).redAdd(a);
                    this.zOne ? (t = s.redSub(f).redSub(a).redMul(u.redSub(this.curve.two)), e = u.redMul(n.redSub(a)), r = u.redSqr().redSub(u).redSub(u)) : (i = this.z.redSqr(), o = u.redSub(i).redISub(i), t = s.redSub(f).redISub(a).redMul(o), e = u.redMul(n.redSub(a)), r = u.redMul(o))
                } else n = f.redAdd(a), i = this.curve._mulC(this.z).redSqr(), o = n.redSub(i).redSub(i), t = this.curve._mulC(s.redISub(n)).redMul(o), e = this.curve._mulC(n).redMul(f.redISub(a)), r = n.redMul(o);
                return this.curve.point(t, e, r)
            }, u.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }, u.prototype._extAdd = function(t) {
                var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
                    r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
                    n = this.t.redMul(this.curve.dd).redMul(t.t),
                    i = this.z.redMul(t.z.redAdd(t.z)),
                    o = r.redSub(e),
                    s = i.redSub(n),
                    f = i.redAdd(n),
                    a = r.redAdd(e),
                    u = o.redMul(s),
                    c = f.redMul(a),
                    h = o.redMul(a),
                    d = s.redMul(f);
                return this.curve.point(u, c, d, h)
            }, u.prototype._projAdd = function(t) {
                var e, r, n = this.z.redMul(t.z),
                    i = n.redSqr(),
                    o = this.x.redMul(t.x),
                    s = this.y.redMul(t.y),
                    f = this.curve.d.redMul(o).redMul(s),
                    a = i.redSub(f),
                    u = i.redAdd(f),
                    c = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(s),
                    h = n.redMul(a).redMul(c);
                return this.curve.twisted ? (e = n.redMul(u).redMul(s.redSub(this.curve._mulA(o))), r = a.redMul(u)) : (e = n.redMul(u).redMul(s.redSub(o)), r = this.curve._mulC(a).redMul(u)), this.curve.point(h, e, r)
            }, u.prototype.add = function(t) {
                return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t)
            }, u.prototype.mul = function(t) {
                return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t)
            }, u.prototype.mulAdd = function(t, e, r) {
                return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1)
            }, u.prototype.jmulAdd = function(t, e, r) {
                return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0)
            }, u.prototype.normalize = function() {
                if (this.zOne) return this;
                var t = this.z.redInvm();
                return this.x = this.x.redMul(t), this.y = this.y.redMul(t), this.t && (this.t = this.t.redMul(t)), this.z = this.curve.one, this.zOne = !0, this
            }, u.prototype.neg = function() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }, u.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }, u.prototype.getY = function() {
                return this.normalize(), this.y.fromRed()
            }, u.prototype.eq = function(t) {
                return this === t || 0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY())
            }, u.prototype.eqXToP = function(t) {
                var e = t.toRed(this.curve.red).redMul(this.z);
                if (0 === this.x.cmp(e)) return !0;
                for (var r = t.clone(), n = this.curve.redN.redMul(this.z);;) {
                    if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
                    if (e.redIAdd(n), 0 === this.x.cmp(e)) return !0
                }
            }, u.prototype.toP = u.prototype.normalize, u.prototype.mixedAdd = u.prototype.add
        }, {
            "../utils": 67,
            "./base": 54,
            "bn.js": 43,
            inherits: 83
        }],
        56: [function(t, e, r) {
            "use strict";
            var n = r;
            n.base = t("./base"), n.short = t("./short"), n.mont = t("./mont"), n.edwards = t("./edwards")
        }, {
            "./base": 54,
            "./edwards": 55,
            "./mont": 57,
            "./short": 58
        }],
        57: [function(t, e, r) {
            "use strict";
            var n = t("bn.js"),
                i = t("inherits"),
                o = t("./base"),
                s = t("../utils");

            function f(t) {
                o.call(this, "mont", t), this.a = new n(t.a, 16).toRed(this.red), this.b = new n(t.b, 16).toRed(this.red), this.i4 = new n(4).toRed(this.red).redInvm(), this.two = new n(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }

            function a(t, e, r) {
                o.BasePoint.call(this, t, "projective"), null === e && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new n(e, 16), this.z = new n(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
            }
            i(f, o), e.exports = f, f.prototype.validate = function(t) {
                var e = t.normalize().x,
                    r = e.redSqr(),
                    n = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
                return 0 === n.redSqrt().redSqr().cmp(n)
            }, i(a, o.BasePoint), f.prototype.decodePoint = function(t, e) {
                return this.point(s.toArray(t, e), 1)
            }, f.prototype.point = function(t, e) {
                return new a(this, t, e)
            }, f.prototype.pointFromJSON = function(t) {
                return a.fromJSON(this, t)
            }, a.prototype.precompute = function() {}, a.prototype._encode = function() {
                return this.getX().toArray("be", this.curve.p.byteLength())
            }, a.fromJSON = function(t, e) {
                return new a(t, e[0], e[1] || t.one)
            }, a.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, a.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }, a.prototype.dbl = function() {
                var t = this.x.redAdd(this.z).redSqr(),
                    e = this.x.redSub(this.z).redSqr(),
                    r = t.redSub(e),
                    n = t.redMul(e),
                    i = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
                return this.curve.point(n, i)
            }, a.prototype.add = function() {
                throw new Error("Not supported on Montgomery curve")
            }, a.prototype.diffAdd = function(t, e) {
                var r = this.x.redAdd(this.z),
                    n = this.x.redSub(this.z),
                    i = t.x.redAdd(t.z),
                    o = t.x.redSub(t.z).redMul(r),
                    s = i.redMul(n),
                    f = e.z.redMul(o.redAdd(s).redSqr()),
                    a = e.x.redMul(o.redISub(s).redSqr());
                return this.curve.point(f, a)
            }, a.prototype.mul = function(t) {
                for (var e = t.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== e.cmpn(0); e.iushrn(1)) i.push(e.andln(1));
                for (var o = i.length - 1; o >= 0; o--) 0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());
                return n
            }, a.prototype.mulAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, a.prototype.jumlAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, a.prototype.eq = function(t) {
                return 0 === this.getX().cmp(t.getX())
            }, a.prototype.normalize = function() {
                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
            }, a.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }
        }, {
            "../utils": 67,
            "./base": 54,
            "bn.js": 43,
            inherits: 83
        }],
        58: [function(t, e, r) {
            "use strict";
            var n = t("../utils"),
                i = t("bn.js"),
                o = t("inherits"),
                s = t("./base"),
                f = n.assert;

            function a(t) {
                s.call(this, "short", t), this.a = new i(t.a, 16).toRed(this.red), this.b = new i(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }

            function u(t, e, r, n) {
                s.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(e, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function c(t, e, r, n) {
                s.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(e, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            o(a, s), e.exports = a, a.prototype._getEndomorphism = function(t) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var e, r;
                    if (t.beta) e = new i(t.beta, 16).toRed(this.red);
                    else {
                        var n = this._getEndoRoots(this.p);
                        e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                    }
                    if (t.lambda) r = new i(t.lambda, 16);
                    else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1], f(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                    }
                    return {
                        beta: e,
                        lambda: r,
                        basis: t.basis ? t.basis.map(function(t) {
                            return {
                                a: new i(t.a, 16),
                                b: new i(t.b, 16)
                            }
                        }) : this._getEndoBasis(r)
                    }
                }
            }, a.prototype._getEndoRoots = function(t) {
                var e = t === this.p ? this.red : i.mont(t),
                    r = new i(2).toRed(e).redInvm(),
                    n = r.redNeg(),
                    o = new i(3).toRed(e).redNeg().redSqrt().redMul(r);
                return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
            }, a.prototype._getEndoBasis = function(t) {
                for (var e, r, n, o, s, f, a, u, c, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = t, l = this.n.clone(), p = new i(1), b = new i(0), m = new i(0), y = new i(1), g = 0; 0 !== d.cmpn(0);) {
                    var v = l.div(d);
                    u = l.sub(v.mul(d)), c = m.sub(v.mul(p));
                    var w = y.sub(v.mul(b));
                    if (!n && u.cmp(h) < 0) e = a.neg(), r = p, n = u.neg(), o = c;
                    else if (n && 2 == ++g) break;
                    a = u, l = d, d = u, m = p, p = c, y = b, b = w
                }
                s = u.neg(), f = c;
                var _ = n.sqr().add(o.sqr());
                return s.sqr().add(f.sqr()).cmp(_) >= 0 && (s = e, f = r), n.negative && (n = n.neg(), o = o.neg()), s.negative && (s = s.neg(), f = f.neg()), [{
                    a: n,
                    b: o
                }, {
                    a: s,
                    b: f
                }]
            }, a.prototype._endoSplit = function(t) {
                var e = this.endo.basis,
                    r = e[0],
                    n = e[1],
                    i = n.b.mul(t).divRound(this.n),
                    o = r.b.neg().mul(t).divRound(this.n),
                    s = i.mul(r.a),
                    f = o.mul(n.a),
                    a = i.mul(r.b),
                    u = o.mul(n.b);
                return {
                    k1: t.sub(s).sub(f),
                    k2: a.add(u).neg()
                }
            }, a.prototype.pointFromX = function(t, e) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                    n = r.redSqrt();
                if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
                var o = n.fromRed().isOdd();
                return (e && !o || !e && o) && (n = n.redNeg()), this.point(t, n)
            }, a.prototype.validate = function(t) {
                if (t.inf) return !0;
                var e = t.x,
                    r = t.y,
                    n = this.a.redMul(e),
                    i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
                return 0 === r.redSqr().redISub(i).cmpn(0)
            }, a.prototype._endoWnafMulAdd = function(t, e, r) {
                for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                    var s = this._endoSplit(e[o]),
                        f = t[o],
                        a = f._getBeta();
                    s.k1.negative && (s.k1.ineg(), f = f.neg(!0)), s.k2.negative && (s.k2.ineg(), a = a.neg(!0)), n[2 * o] = f, n[2 * o + 1] = a, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
                }
                for (var u = this._wnafMulAdd(1, n, i, 2 * o, r), c = 0; c < 2 * o; c++) n[c] = null, i[c] = null;
                return u
            }, o(u, s.BasePoint), a.prototype.point = function(t, e, r) {
                return new u(this, t, e, r)
            }, a.prototype.pointFromJSON = function(t, e) {
                return u.fromJSON(this, t, e)
            }, u.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var r = this.curve,
                            n = function(t) {
                                return r.point(t.x.redMul(r.endo.beta), t.y)
                            };
                        t.beta = e, e.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(n)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(n)
                            }
                        }
                    }
                    return e
                }
            }, u.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, u.fromJSON = function(t, e, r) {
                "string" == typeof e && (e = JSON.parse(e));
                var n = t.point(e[0], e[1], r);
                if (!e[2]) return n;

                function i(e) {
                    return t.point(e[0], e[1], r)
                }
                var o = e[2];
                return n.precomputed = {
                    beta: null,
                    doubles: o.doubles && {
                        step: o.doubles.step,
                        points: [n].concat(o.doubles.points.map(i))
                    },
                    naf: o.naf && {
                        wnd: o.naf.wnd,
                        points: [n].concat(o.naf.points.map(i))
                    }
                }, n
            }, u.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, u.prototype.isInfinity = function() {
                return this.inf
            }, u.prototype.add = function(t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t)) return this.curve.point(null, null);
                if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var r = e.redSqr().redISub(this.x).redISub(t.x),
                    n = e.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, n)
            }, u.prototype.dbl = function() {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var e = this.curve.a,
                    r = this.x.redSqr(),
                    n = t.redInvm(),
                    i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
                    o = i.redSqr().redISub(this.x.redAdd(this.x)),
                    s = i.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, s)
            }, u.prototype.getX = function() {
                return this.x.fromRed()
            }, u.prototype.getY = function() {
                return this.y.fromRed()
            }, u.prototype.mul = function(t) {
                return t = new i(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }, u.prototype.mulAdd = function(t, e, r) {
                var n = [this, e],
                    i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
            }, u.prototype.jmulAdd = function(t, e, r) {
                var n = [this, e],
                    i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
            }, u.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, u.prototype.neg = function(t) {
                if (this.inf) return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var r = this.precomputed,
                        n = function(t) {
                            return t.neg()
                        };
                    e.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(n)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(n)
                        }
                    }
                }
                return e
            }, u.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, o(c, s.BasePoint), a.prototype.jpoint = function(t, e, r) {
                return new c(this, t, e, r)
            }, c.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(),
                    e = t.redSqr(),
                    r = this.x.redMul(e),
                    n = this.y.redMul(e).redMul(t);
                return this.curve.point(r, n)
            }, c.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, c.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.z.redSqr(),
                    r = this.z.redSqr(),
                    n = this.x.redMul(e),
                    i = t.x.redMul(r),
                    o = this.y.redMul(e.redMul(t.z)),
                    s = t.y.redMul(r.redMul(this.z)),
                    f = n.redSub(i),
                    a = o.redSub(s);
                if (0 === f.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var u = f.redSqr(),
                    c = u.redMul(f),
                    h = n.redMul(u),
                    d = a.redSqr().redIAdd(c).redISub(h).redISub(h),
                    l = a.redMul(h.redISub(d)).redISub(o.redMul(c)),
                    p = this.z.redMul(t.z).redMul(f);
                return this.curve.jpoint(d, l, p)
            }, c.prototype.mixedAdd = function(t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var e = this.z.redSqr(),
                    r = this.x,
                    n = t.x.redMul(e),
                    i = this.y,
                    o = t.y.redMul(e).redMul(this.z),
                    s = r.redSub(n),
                    f = i.redSub(o);
                if (0 === s.cmpn(0)) return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var a = s.redSqr(),
                    u = a.redMul(s),
                    c = r.redMul(a),
                    h = f.redSqr().redIAdd(u).redISub(c).redISub(c),
                    d = f.redMul(c.redISub(h)).redISub(i.redMul(u)),
                    l = this.z.redMul(s);
                return this.curve.jpoint(h, d, l)
            }, c.prototype.dblp = function(t) {
                if (0 === t) return this;
                if (this.isInfinity()) return this;
                if (!t) return this.dbl();
                var e;
                if (this.curve.zeroA || this.curve.threeA) {
                    var r = this;
                    for (e = 0; e < t; e++) r = r.dbl();
                    return r
                }
                var n = this.curve.a,
                    i = this.curve.tinv,
                    o = this.x,
                    s = this.y,
                    f = this.z,
                    a = f.redSqr().redSqr(),
                    u = s.redAdd(s);
                for (e = 0; e < t; e++) {
                    var c = o.redSqr(),
                        h = u.redSqr(),
                        d = h.redSqr(),
                        l = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(a)),
                        p = o.redMul(h),
                        b = l.redSqr().redISub(p.redAdd(p)),
                        m = p.redISub(b),
                        y = l.redMul(m);
                    y = y.redIAdd(y).redISub(d);
                    var g = u.redMul(f);
                    e + 1 < t && (a = a.redMul(d)), o = b, f = g, u = y
                }
                return this.curve.jpoint(o, u.redMul(i), f)
            }, c.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, c.prototype._zeroDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var f = n.redAdd(n).redIAdd(n),
                        a = f.redSqr().redISub(s).redISub(s),
                        u = o.redIAdd(o);
                    u = (u = u.redIAdd(u)).redIAdd(u), t = a, e = f.redMul(s.redISub(a)).redISub(u), r = this.y.redAdd(this.y)
                } else {
                    var c = this.x.redSqr(),
                        h = this.y.redSqr(),
                        d = h.redSqr(),
                        l = this.x.redAdd(h).redSqr().redISub(c).redISub(d);
                    l = l.redIAdd(l);
                    var p = c.redAdd(c).redIAdd(c),
                        b = p.redSqr(),
                        m = d.redIAdd(d);
                    m = (m = m.redIAdd(m)).redIAdd(m), t = b.redISub(l).redISub(l), e = p.redMul(l.redISub(t)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(t, e, r)
            }, c.prototype._threeDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var f = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                        a = f.redSqr().redISub(s).redISub(s);
                    t = a;
                    var u = o.redIAdd(o);
                    u = (u = u.redIAdd(u)).redIAdd(u), e = f.redMul(s.redISub(a)).redISub(u), r = this.y.redAdd(this.y)
                } else {
                    var c = this.z.redSqr(),
                        h = this.y.redSqr(),
                        d = this.x.redMul(h),
                        l = this.x.redSub(c).redMul(this.x.redAdd(c));
                    l = l.redAdd(l).redIAdd(l);
                    var p = d.redIAdd(d),
                        b = (p = p.redIAdd(p)).redAdd(p);
                    t = l.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c);
                    var m = h.redSqr();
                    m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), e = l.redMul(p.redISub(t)).redISub(m)
                }
                return this.curve.jpoint(t, e, r)
            }, c.prototype._dbl = function() {
                var t = this.curve.a,
                    e = this.x,
                    r = this.y,
                    n = this.z,
                    i = n.redSqr().redSqr(),
                    o = e.redSqr(),
                    s = r.redSqr(),
                    f = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
                    a = e.redAdd(e),
                    u = (a = a.redIAdd(a)).redMul(s),
                    c = f.redSqr().redISub(u.redAdd(u)),
                    h = u.redISub(c),
                    d = s.redSqr();
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var l = f.redMul(h).redISub(d),
                    p = r.redAdd(r).redMul(n);
                return this.curve.jpoint(c, l, p)
            }, c.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr(),
                    n = e.redSqr(),
                    i = t.redAdd(t).redIAdd(t),
                    o = i.redSqr(),
                    s = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
                    f = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
                    a = n.redIAdd(n);
                a = (a = (a = a.redIAdd(a)).redIAdd(a)).redIAdd(a);
                var u = i.redIAdd(s).redSqr().redISub(o).redISub(f).redISub(a),
                    c = e.redMul(u);
                c = (c = c.redIAdd(c)).redIAdd(c);
                var h = this.x.redMul(f).redISub(c);
                h = (h = h.redIAdd(h)).redIAdd(h);
                var d = this.y.redMul(u.redMul(a.redISub(u)).redISub(s.redMul(f)));
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var l = this.z.redAdd(s).redSqr().redISub(r).redISub(f);
                return this.curve.jpoint(h, d, l)
            }, c.prototype.mul = function(t, e) {
                return t = new i(t, e), this.curve._wnafMul(this, t)
            }, c.prototype.eq = function(t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var e = this.z.redSqr(),
                    r = t.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                var n = e.redMul(this.z),
                    i = r.redMul(t.z);
                return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
            }, c.prototype.eqXToP = function(t) {
                var e = this.z.redSqr(),
                    r = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(r)) return !0;
                for (var n = t.clone(), i = this.curve.redN.redMul(e);;) {
                    if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
                }
            }, c.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, c.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }
        }, {
            "../utils": 67,
            "./base": 54,
            "bn.js": 43,
            inherits: 83
        }],
        59: [function(t, e, r) {
            "use strict";
            var n, i = r,
                o = t("hash.js"),
                s = t("./curve"),
                f = t("./utils").assert;

            function a(t) {
                "short" === t.type ? this.curve = new s.short(t) : "edwards" === t.type ? this.curve = new s.edwards(t) : this.curve = new s.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, f(this.g.validate(), "Invalid curve"), f(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }

            function u(t, e) {
                Object.defineProperty(i, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var r = new a(e);
                        return Object.defineProperty(i, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: r
                        }), r
                    }
                })
            }
            i.PresetCurve = a, u("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: o.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }), u("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: o.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }), u("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: o.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }), u("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: o.sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }), u("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: o.sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }), u("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: o.sha256,
                gRed: !1,
                g: ["9"]
            }), u("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: o.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                n = t("./precomputed/secp256k1")
            } catch (t) {
                n = void 0
            }
            u("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: o.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
            })
        }, {
            "./curve": 56,
            "./precomputed/secp256k1": 66,
            "./utils": 67,
            "hash.js": 70
        }],
        60: [function(t, e, r) {
            "use strict";
            var n = t("bn.js"),
                i = t("hmac-drbg"),
                o = t("../utils"),
                s = t("../curves"),
                f = t("brorand"),
                a = o.assert,
                u = t("./key"),
                c = t("./signature");

            function h(t) {
                if (!(this instanceof h)) return new h(t);
                "string" == typeof t && (a(Object.prototype.hasOwnProperty.call(s, t), "Unknown curve " + t), t = s[t]), t instanceof s.PresetCurve && (t = {
                    curve: t
                }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }
            e.exports = h, h.prototype.keyPair = function(t) {
                return new u(this, t)
            }, h.prototype.keyFromPrivate = function(t, e) {
                return u.fromPrivate(this, t, e)
            }, h.prototype.keyFromPublic = function(t, e) {
                return u.fromPublic(this, t, e)
            }, h.prototype.genKeyPair = function(t) {
                t || (t = {});
                for (var e = new i({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || "utf8",
                        entropy: t.entropy || f(this.hash.hmacStrength),
                        entropyEnc: t.entropy && t.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), o = this.n.sub(new n(2));;) {
                    var s = new n(e.generate(r));
                    if (!(s.cmp(o) > 0)) return s.iaddn(1), this.keyFromPrivate(s)
                }
            }, h.prototype._truncateToN = function(t, e) {
                var r = 8 * t.byteLength() - this.n.bitLength();
                return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            }, h.prototype.sign = function(t, e, r, o) {
                "object" == typeof r && (o = r, r = null), o || (o = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new n(t, 16));
                for (var s = this.n.byteLength(), f = e.getPrivate().toArray("be", s), a = t.toArray("be", s), u = new i({
                        hash: this.hash,
                        entropy: f,
                        nonce: a,
                        pers: o.pers,
                        persEnc: o.persEnc || "utf8"
                    }), h = this.n.sub(new n(1)), d = 0;; d++) {
                    var l = o.k ? o.k(d) : new n(u.generate(this.n.byteLength()));
                    if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(h) >= 0)) {
                        var p = this.g.mul(l);
                        if (!p.isInfinity()) {
                            var b = p.getX(),
                                m = b.umod(this.n);
                            if (0 !== m.cmpn(0)) {
                                var y = l.invm(this.n).mul(m.mul(e.getPrivate()).iadd(t));
                                if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                                    var g = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(m) ? 2 : 0);
                                    return o.canonical && y.cmp(this.nh) > 0 && (y = this.n.sub(y), g ^= 1), new c({
                                        r: m,
                                        s: y,
                                        recoveryParam: g
                                    })
                                }
                            }
                        }
                    }
                }
            }, h.prototype.verify = function(t, e, r, i) {
                t = this._truncateToN(new n(t, 16)), r = this.keyFromPublic(r, i);
                var o = (e = new c(e, "hex")).r,
                    s = e.s;
                if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                var f, a = s.invm(this.n),
                    u = a.mul(t).umod(this.n),
                    h = a.mul(o).umod(this.n);
                return this.curve._maxwellTrick ? !(f = this.g.jmulAdd(u, r.getPublic(), h)).isInfinity() && f.eqXToP(o) : !(f = this.g.mulAdd(u, r.getPublic(), h)).isInfinity() && 0 === f.getX().umod(this.n).cmp(o)
            }, h.prototype.recoverPubKey = function(t, e, r, i) {
                a((3 & r) === r, "The recovery param is more than two bits"), e = new c(e, i);
                var o = this.n,
                    s = new n(t),
                    f = e.r,
                    u = e.s,
                    h = 1 & r,
                    d = r >> 1;
                if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d) throw new Error("Unable to find sencond key candinate");
                f = d ? this.curve.pointFromX(f.add(this.curve.n), h) : this.curve.pointFromX(f, h);
                var l = e.r.invm(o),
                    p = o.sub(s).mul(l).umod(o),
                    b = u.mul(l).umod(o);
                return this.g.mulAdd(p, f, b)
            }, h.prototype.getKeyRecoveryParam = function(t, e, r, n) {
                if (null !== (e = new c(e, n)).recoveryParam) return e.recoveryParam;
                for (var i = 0; i < 4; i++) {
                    var o;
                    try {
                        o = this.recoverPubKey(t, e, i)
                    } catch (t) {
                        continue
                    }
                    if (o.eq(r)) return i
                }
                throw new Error("Unable to find valid recovery factor")
            }
        }, {
            "../curves": 59,
            "../utils": 67,
            "./key": 61,
            "./signature": 62,
            "bn.js": 43,
            brorand: 44,
            "hmac-drbg": 82
        }],
        61: [function(t, e, r) {
            "use strict";
            var n = t("bn.js"),
                i = t("../utils").assert;

            function o(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            e.exports = o, o.fromPublic = function(t, e, r) {
                return e instanceof o ? e : new o(t, {
                    pub: e,
                    pubEnc: r
                })
            }, o.fromPrivate = function(t, e, r) {
                return e instanceof o ? e : new o(t, {
                    priv: e,
                    privEnc: r
                })
            }, o.prototype.validate = function() {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, o.prototype.getPublic = function(t, e) {
                return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
            }, o.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, o.prototype._importPrivate = function(t, e) {
                this.priv = new n(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, o.prototype._importPublic = function(t, e) {
                if (t.x || t.y) return "mont" === this.ec.curve.type ? i(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
                this.pub = this.ec.curve.decodePoint(t, e)
            }, o.prototype.derive = function(t) {
                return t.validate() || i(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, o.prototype.sign = function(t, e, r) {
                return this.ec.sign(t, this, e, r)
            }, o.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }, o.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }
        }, {
            "../utils": 67,
            "bn.js": 43
        }],
        62: [function(t, e, r) {
            "use strict";
            var n = t("bn.js"),
                i = t("../utils"),
                o = i.assert;

            function s(t, e) {
                if (t instanceof s) return t;
                this._importDER(t, e) || (o(t.r && t.s, "Signature without r or s"), this.r = new n(t.r, 16), this.s = new n(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }

            function f(t, e) {
                var r = t[e.place++];
                if (!(128 & r)) return r;
                var n = 15 & r;
                if (0 === n || n > 4) return !1;
                for (var i = 0, o = 0, s = e.place; o < n; o++, s++) i <<= 8, i |= t[s], i >>>= 0;
                return !(i <= 127) && (e.place = s, i)
            }

            function a(t) {
                for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function u(t, e) {
                if (e < 128) t.push(e);
                else {
                    var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                    for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                    t.push(e)
                }
            }
            e.exports = s, s.prototype._importDER = function(t, e) {
                t = i.toArray(t, e);
                var r = new function() {
                    this.place = 0
                };
                if (48 !== t[r.place++]) return !1;
                var o = f(t, r);
                if (!1 === o) return !1;
                if (o + r.place !== t.length) return !1;
                if (2 !== t[r.place++]) return !1;
                var s = f(t, r);
                if (!1 === s) return !1;
                var a = t.slice(r.place, s + r.place);
                if (r.place += s, 2 !== t[r.place++]) return !1;
                var u = f(t, r);
                if (!1 === u) return !1;
                if (t.length !== u + r.place) return !1;
                var c = t.slice(r.place, u + r.place);
                if (0 === a[0]) {
                    if (!(128 & a[1])) return !1;
                    a = a.slice(1)
                }
                if (0 === c[0]) {
                    if (!(128 & c[1])) return !1;
                    c = c.slice(1)
                }
                return this.r = new n(a), this.s = new n(c), this.recoveryParam = null, !0
            }, s.prototype.toDER = function(t) {
                var e = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = a(e), r = a(r); !(r[0] || 128 & r[1]);) r = r.slice(1);
                var n = [2];
                u(n, e.length), (n = n.concat(e)).push(2), u(n, r.length);
                var o = n.concat(r),
                    s = [48];
                return u(s, o.length), s = s.concat(o), i.encode(s, t)
            }
        }, {
            "../utils": 67,
            "bn.js": 43
        }],
        63: [function(t, e, r) {
            "use strict";
            var n = t("hash.js"),
                i = t("../curves"),
                o = t("../utils"),
                s = o.assert,
                f = o.parseBytes,
                a = t("./key"),
                u = t("./signature");

            function c(t) {
                if (s("ed25519" === t, "only tested with ed25519 so far"), !(this instanceof c)) return new c(t);
                t = i[t].curve, this.curve = t, this.g = t.g, this.g.precompute(t.n.bitLength() + 1), this.pointClass = t.point().constructor, this.encodingLength = Math.ceil(t.n.bitLength() / 8), this.hash = n.sha512
            }
            e.exports = c, c.prototype.sign = function(t, e) {
                t = f(t);
                var r = this.keyFromSecret(e),
                    n = this.hashInt(r.messagePrefix(), t),
                    i = this.g.mul(n),
                    o = this.encodePoint(i),
                    s = this.hashInt(o, r.pubBytes(), t).mul(r.priv()),
                    a = n.add(s).umod(this.curve.n);
                return this.makeSignature({
                    R: i,
                    S: a,
                    Rencoded: o
                })
            }, c.prototype.verify = function(t, e, r) {
                t = f(t), e = this.makeSignature(e);
                var n = this.keyFromPublic(r),
                    i = this.hashInt(e.Rencoded(), n.pubBytes(), t),
                    o = this.g.mul(e.S());
                return e.R().add(n.pub().mul(i)).eq(o)
            }, c.prototype.hashInt = function() {
                for (var t = this.hash(), e = 0; e < arguments.length; e++) t.update(arguments[e]);
                return o.intFromLE(t.digest()).umod(this.curve.n)
            }, c.prototype.keyFromPublic = function(t) {
                return a.fromPublic(this, t)
            }, c.prototype.keyFromSecret = function(t) {
                return a.fromSecret(this, t)
            }, c.prototype.makeSignature = function(t) {
                return t instanceof u ? t : new u(this, t)
            }, c.prototype.encodePoint = function(t) {
                var e = t.getY().toArray("le", this.encodingLength);
                return e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0, e
            }, c.prototype.decodePoint = function(t) {
                var e = (t = o.parseBytes(t)).length - 1,
                    r = t.slice(0, e).concat(-129 & t[e]),
                    n = 0 != (128 & t[e]),
                    i = o.intFromLE(r);
                return this.curve.pointFromY(i, n)
            }, c.prototype.encodeInt = function(t) {
                return t.toArray("le", this.encodingLength)
            }, c.prototype.decodeInt = function(t) {
                return o.intFromLE(t)
            }, c.prototype.isPoint = function(t) {
                return t instanceof this.pointClass
            }
        }, {
            "../curves": 59,
            "../utils": 67,
            "./key": 64,
            "./signature": 65,
            "hash.js": 70
        }],
        64: [function(t, e, r) {
            "use strict";
            var n = t("../utils"),
                i = n.assert,
                o = n.parseBytes,
                s = n.cachedProperty;

            function f(t, e) {
                this.eddsa = t, this._secret = o(e.secret), t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = o(e.pub)
            }
            f.fromPublic = function(t, e) {
                return e instanceof f ? e : new f(t, {
                    pub: e
                })
            }, f.fromSecret = function(t, e) {
                return e instanceof f ? e : new f(t, {
                    secret: e
                })
            }, f.prototype.secret = function() {
                return this._secret
            }, s(f, "pubBytes", function() {
                return this.eddsa.encodePoint(this.pub())
            }), s(f, "pub", function() {
                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
            }), s(f, "privBytes", function() {
                var t = this.eddsa,
                    e = this.hash(),
                    r = t.encodingLength - 1,
                    n = e.slice(0, t.encodingLength);
                return n[0] &= 248, n[r] &= 127, n[r] |= 64, n
            }), s(f, "priv", function() {
                return this.eddsa.decodeInt(this.privBytes())
            }), s(f, "hash", function() {
                return this.eddsa.hash().update(this.secret()).digest()
            }), s(f, "messagePrefix", function() {
                return this.hash().slice(this.eddsa.encodingLength)
            }), f.prototype.sign = function(t) {
                return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this)
            }, f.prototype.verify = function(t, e) {
                return this.eddsa.verify(t, e, this)
            }, f.prototype.getSecret = function(t) {
                return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), t)
            }, f.prototype.getPublic = function(t) {
                return n.encode(this.pubBytes(), t)
            }, e.exports = f
        }, {
            "../utils": 67
        }],
        65: [function(t, e, r) {
            "use strict";
            var n = t("bn.js"),
                i = t("../utils"),
                o = i.assert,
                s = i.cachedProperty,
                f = i.parseBytes;

            function a(t, e) {
                this.eddsa = t, "object" != typeof e && (e = f(e)), Array.isArray(e) && (e = {
                    R: e.slice(0, t.encodingLength),
                    S: e.slice(t.encodingLength)
                }), o(e.R && e.S, "Signature without R or S"), t.isPoint(e.R) && (this._R = e.R), e.S instanceof n && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded
            }
            s(a, "S", function() {
                return this.eddsa.decodeInt(this.Sencoded())
            }), s(a, "R", function() {
                return this.eddsa.decodePoint(this.Rencoded())
            }), s(a, "Rencoded", function() {
                return this.eddsa.encodePoint(this.R())
            }), s(a, "Sencoded", function() {
                return this.eddsa.encodeInt(this.S())
            }), a.prototype.toBytes = function() {
                return this.Rencoded().concat(this.Sencoded())
            }, a.prototype.toHex = function() {
                return i.encode(this.toBytes(), "hex").toUpperCase()
            }, e.exports = a
        }, {
            "../utils": 67,
            "bn.js": 43
        }],
        66: [function(t, e, r) {
            e.exports = {
                doubles: {
                    step: 4,
                    points: [
                        ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                        ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                        ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                        ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                        ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                        ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                        ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                        ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                        ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                        ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                        ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                        ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                        ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                        ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                        ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                        ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                        ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                        ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                        ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                        ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                        ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                        ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                        ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                        ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                        ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                        ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                        ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                        ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                        ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                        ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                        ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                        ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                        ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                        ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                        ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                        ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                        ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                        ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                        ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                        ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                        ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                        ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                        ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                        ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                        ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                        ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                        ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                        ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                        ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                        ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                        ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                        ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                        ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                        ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                        ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                        ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                        ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                        ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                        ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                        ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                        ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                        ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                        ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                        ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                        ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                    ]
                },
                naf: {
                    wnd: 7,
                    points: [
                        ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                        ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                        ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                        ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                        ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                        ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                        ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                        ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                        ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                        ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                        ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                        ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                        ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                        ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                        ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                        ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                        ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                        ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                        ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                        ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                        ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                        ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                        ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                        ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                        ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                        ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                        ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                        ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                        ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                        ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                        ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                        ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                        ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                        ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                        ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                        ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                        ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                        ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                        ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                        ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                        ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                        ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                        ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                        ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                        ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                        ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                        ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                        ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                        ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                        ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                        ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                        ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                        ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                        ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                        ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                        ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                        ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                        ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                        ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                        ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                        ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                        ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                        ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                        ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                        ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                        ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                        ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                        ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                        ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                        ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                        ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                        ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                        ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                        ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                        ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                        ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                        ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                        ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                        ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                        ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                        ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                        ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                        ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                        ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                        ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                        ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                        ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                        ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                        ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                        ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                        ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                        ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                        ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                        ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                        ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                        ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                        ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                        ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                        ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                        ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                        ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                        ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                        ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                        ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                        ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                        ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                        ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                        ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                        ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                        ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                        ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                        ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                        ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                        ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                        ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                        ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                        ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                        ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                        ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                        ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                        ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                        ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                        ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                        ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                        ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                        ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                        ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                    ]
                }
            }
        }, {}],
        67: [function(t, e, r) {
            "use strict";
            var n = r,
                i = t("bn.js"),
                o = t("minimalistic-assert"),
                s = t("minimalistic-crypto-utils");
            n.assert = o, n.toArray = s.toArray, n.zero2 = s.zero2, n.toHex = s.toHex, n.encode = s.encode, n.getNAF = function(t, e, r) {
                var n = new Array(Math.max(t.bitLength(), r) + 1);
                n.fill(0);
                for (var i = 1 << e + 1, o = t.clone(), s = 0; s < n.length; s++) {
                    var f, a = o.andln(i - 1);
                    o.isOdd() ? (f = a > (i >> 1) - 1 ? (i >> 1) - a : a, o.isubn(f)) : f = 0, n[s] = f, o.iushrn(1)
                }
                return n
            }, n.getJSF = function(t, e) {
                var r = [
                    [],
                    []
                ];
                t = t.clone(), e = e.clone();
                for (var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0;) {
                    var s, f, a = t.andln(3) + i & 3,
                        u = e.andln(3) + o & 3;
                    3 === a && (a = -1), 3 === u && (u = -1), s = 0 == (1 & a) ? 0 : 3 != (n = t.andln(7) + i & 7) && 5 !== n || 2 !== u ? a : -a, r[0].push(s), f = 0 == (1 & u) ? 0 : 3 != (n = e.andln(7) + o & 7) && 5 !== n || 2 !== a ? u : -u, r[1].push(f), 2 * i === s + 1 && (i = 1 - i), 2 * o === f + 1 && (o = 1 - o), t.iushrn(1), e.iushrn(1)
                }
                return r
            }, n.cachedProperty = function(t, e, r) {
                var n = "_" + e;
                t.prototype[e] = function() {
                    return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                }
            }, n.parseBytes = function(t) {
                return "string" == typeof t ? n.toArray(t, "hex") : t
            }, n.intFromLE = function(t) {
                return new i(t, "hex", "le")
            }
        }, {
            "bn.js": 43,
            "minimalistic-assert": 86,
            "minimalistic-crypto-utils": 87
        }],
        68: [function(t, e, r) {
            e.exports = {
                name: "elliptic",
                version: "6.5.4",
                description: "EC cryptography",
                main: "lib/elliptic.js",
                files: ["lib"],
                scripts: {
                    lint: "eslint lib test",
                    "lint:fix": "npm run lint -- --fix",
                    unit: "istanbul test _mocha --reporter=spec test/index.js",
                    test: "npm run lint && npm run unit",
                    version: "grunt dist && git add dist/"
                },
                repository: {
                    type: "git",
                    url: "git@github.com:indutny/elliptic"
                },
                keywords: ["EC", "Elliptic", "curve", "Cryptography"],
                author: "Fedor Indutny <fedor@indutny.com>",
                license: "MIT",
                bugs: {
                    url: "https://github.com/indutny/elliptic/issues"
                },
                homepage: "https://github.com/indutny/elliptic",
                devDependencies: {
                    brfs: "^2.0.2",
                    coveralls: "^3.1.0",
                    eslint: "^7.6.0",
                    grunt: "^1.2.1",
                    "grunt-browserify": "^5.3.0",
                    "grunt-cli": "^1.3.2",
                    "grunt-contrib-connect": "^3.0.0",
                    "grunt-contrib-copy": "^1.0.0",
                    "grunt-contrib-uglify": "^5.0.0",
                    "grunt-mocha-istanbul": "^5.0.2",
                    "grunt-saucelabs": "^9.0.1",
                    istanbul: "^0.4.5",
                    mocha: "^8.0.1"
                },
                dependencies: {
                    "bn.js": "^4.11.9",
                    brorand: "^1.1.0",
                    "hash.js": "^1.0.0",
                    "hmac-drbg": "^1.0.1",
                    inherits: "^2.0.4",
                    "minimalistic-assert": "^1.0.1",
                    "minimalistic-crypto-utils": "^1.0.1"
                }
            }
        }, {}],
        69: [function(t, e, r) {
            "use strict";
            var n = t("safe-buffer").Buffer,
                i = t("readable-stream").Transform;

            function o(t) {
                i.call(this), this._block = n.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
            }
            t("inherits")(o, i), o.prototype._transform = function(t, e, r) {
                var n = null;
                try {
                    this.update(t, e)
                } catch (t) {
                    n = t
                }
                r(n)
            }, o.prototype._flush = function(t) {
                var e = null;
                try {
                    this.push(this.digest())
                } catch (t) {
                    e = t
                }
                t(e)
            }, o.prototype.update = function(t, e) {
                if (function(t, e) {
                        if (!n.isBuffer(t) && "string" != typeof t) throw new TypeError(e + " must be a string or a buffer")
                    }(t, "Data"), this._finalized) throw new Error("Digest already called");
                n.isBuffer(t) || (t = n.from(t, e));
                for (var r = this._block, i = 0; this._blockOffset + t.length - i >= this._blockSize;) {
                    for (var o = this._blockOffset; o < this._blockSize;) r[o++] = t[i++];
                    this._update(), this._blockOffset = 0
                }
                for (; i < t.length;) r[this._blockOffset++] = t[i++];
                for (var s = 0, f = 8 * t.length; f > 0; ++s) this._length[s] += f, (f = this._length[s] / 4294967296 | 0) > 0 && (this._length[s] -= 4294967296 * f);
                return this
            }, o.prototype._update = function() {
                throw new Error("_update is not implemented")
            }, o.prototype.digest = function(t) {
                if (this._finalized) throw new Error("Digest already called");
                this._finalized = !0;
                var e = this._digest();
                void 0 !== t && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;
                for (var r = 0; r < 4; ++r) this._length[r] = 0;
                return e
            }, o.prototype._digest = function() {
                throw new Error("_digest is not implemented")
            }, e.exports = o
        }, {
            inherits: 83,
            "readable-stream": 104,
            "safe-buffer": 106
        }],
        70: [function(t, e, r) {
            var n = r;
            n.utils = t("./hash/utils"), n.common = t("./hash/common"), n.sha = t("./hash/sha"), n.ripemd = t("./hash/ripemd"), n.hmac = t("./hash/hmac"), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160
        }, {
            "./hash/common": 71,
            "./hash/hmac": 72,
            "./hash/ripemd": 73,
            "./hash/sha": 74,
            "./hash/utils": 81
        }],
        71: [function(t, e, r) {
            "use strict";
            var n = t("./utils"),
                i = t("minimalistic-assert");

            function o() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            r.BlockHash = o, o.prototype.update = function(t, e) {
                if (t = n.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                    var r = (t = this.pending).length % this._delta8;
                    this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = n.join32(t, 0, t.length - r, this.endian);
                    for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
                }
                return this
            }, o.prototype.digest = function(t) {
                return this.update(this._pad()), i(null === this.pending), this._digest(t)
            }, o.prototype._pad = function() {
                var t = this.pendingTotal,
                    e = this._delta8,
                    r = e - (t + this.padLength) % e,
                    n = new Array(r + this.padLength);
                n[0] = 128;
                for (var i = 1; i < r; i++) n[i] = 0;
                if (t <<= 3, "big" === this.endian) {
                    for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                    n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = t >>> 24 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 8 & 255, n[i++] = 255 & t
                } else
                    for (n[i++] = 255 & t, n[i++] = t >>> 8 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
                return n
            }
        }, {
            "./utils": 81,
            "minimalistic-assert": 86
        }],
        72: [function(t, e, r) {
            "use strict";
            var n = t("./utils"),
                i = t("minimalistic-assert");

            function o(t, e, r) {
                if (!(this instanceof o)) return new o(t, e, r);
                this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(e, r))
            }
            e.exports = o, o.prototype._init = function(t) {
                t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), i(t.length <= this.blockSize);
                for (var e = t.length; e < this.blockSize; e++) t.push(0);
                for (e = 0; e < t.length; e++) t[e] ^= 54;
                for (this.inner = (new this.Hash).update(t), e = 0; e < t.length; e++) t[e] ^= 106;
                this.outer = (new this.Hash).update(t)
            }, o.prototype.update = function(t, e) {
                return this.inner.update(t, e), this
            }, o.prototype.digest = function(t) {
                return this.outer.update(this.inner.digest()), this.outer.digest(t)
            }
        }, {
            "./utils": 81,
            "minimalistic-assert": 86
        }],
        73: [function(t, e, r) {
            "use strict";
            var n = t("./utils"),
                i = t("./common"),
                o = n.rotl32,
                s = n.sum32,
                f = n.sum32_3,
                a = n.sum32_4,
                u = i.BlockHash;

            function c() {
                if (!(this instanceof c)) return new c;
                u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function h(t, e, r, n) {
                return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n)
            }

            function d(t) {
                return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
            }

            function l(t) {
                return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
            }
            n.inherits(c, u), r.ripemd160 = c, c.blockSize = 512, c.outSize = 160, c.hmacStrength = 192, c.padLength = 64, c.prototype._update = function(t, e) {
                for (var r = this.h[0], n = this.h[1], i = this.h[2], u = this.h[3], c = this.h[4], g = r, v = n, w = i, _ = u, S = c, E = 0; E < 80; E++) {
                    var M = s(o(a(r, h(E, n, i, u), t[p[E] + e], d(E)), m[E]), c);
                    r = c, c = u, u = o(i, 10), i = n, n = M, M = s(o(a(g, h(79 - E, v, w, _), t[b[E] + e], l(E)), y[E]), S), g = S, S = _, _ = o(w, 10), w = v, v = M
                }
                M = f(this.h[1], i, _), this.h[1] = f(this.h[2], u, S), this.h[2] = f(this.h[3], c, g), this.h[3] = f(this.h[4], r, v), this.h[4] = f(this.h[0], n, w), this.h[0] = M
            }, c.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
            };
            var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
        }, {
            "./common": 71,
            "./utils": 81
        }],
        74: [function(t, e, r) {
            "use strict";
            r.sha1 = t("./sha/1"), r.sha224 = t("./sha/224"), r.sha256 = t("./sha/256"), r.sha384 = t("./sha/384"), r.sha512 = t("./sha/512")
        }, {
            "./sha/1": 75,
            "./sha/224": 76,
            "./sha/256": 77,
            "./sha/384": 78,
            "./sha/512": 79
        }],
        75: [function(t, e, r) {
            "use strict";
            var n = t("../utils"),
                i = t("../common"),
                o = t("./common"),
                s = n.rotl32,
                f = n.sum32,
                a = n.sum32_5,
                u = o.ft_1,
                c = i.BlockHash,
                h = [1518500249, 1859775393, 2400959708, 3395469782];

            function d() {
                if (!(this instanceof d)) return new d;
                c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
            }
            n.inherits(d, c), e.exports = d, d.blockSize = 512, d.outSize = 160, d.hmacStrength = 80, d.padLength = 64, d.prototype._update = function(t, e) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
                for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
                var i = this.h[0],
                    o = this.h[1],
                    c = this.h[2],
                    d = this.h[3],
                    l = this.h[4];
                for (n = 0; n < r.length; n++) {
                    var p = ~~(n / 20),
                        b = a(s(i, 5), u(p, o, c, d), l, r[n], h[p]);
                    l = d, d = c, c = s(o, 30), o = i, i = b
                }
                this.h[0] = f(this.h[0], i), this.h[1] = f(this.h[1], o), this.h[2] = f(this.h[2], c), this.h[3] = f(this.h[3], d), this.h[4] = f(this.h[4], l)
            }, d.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        }, {
            "../common": 71,
            "../utils": 81,
            "./common": 80
        }],
        76: [function(t, e, r) {
            "use strict";
            var n = t("../utils"),
                i = t("./256");

            function o() {
                if (!(this instanceof o)) return new o;
                i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            n.inherits(o, i), e.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
            }
        }, {
            "../utils": 81,
            "./256": 77
        }],
        77: [function(t, e, r) {
            "use strict";
            var n = t("../utils"),
                i = t("../common"),
                o = t("./common"),
                s = t("minimalistic-assert"),
                f = n.sum32,
                a = n.sum32_4,
                u = n.sum32_5,
                c = o.ch32,
                h = o.maj32,
                d = o.s0_256,
                l = o.s1_256,
                p = o.g0_256,
                b = o.g1_256,
                m = i.BlockHash,
                y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function g() {
                if (!(this instanceof g)) return new g;
                m.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = y, this.W = new Array(64)
            }
            n.inherits(g, m), e.exports = g, g.blockSize = 512, g.outSize = 256, g.hmacStrength = 192, g.padLength = 64, g.prototype._update = function(t, e) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
                for (; n < r.length; n++) r[n] = a(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
                var i = this.h[0],
                    o = this.h[1],
                    m = this.h[2],
                    y = this.h[3],
                    g = this.h[4],
                    v = this.h[5],
                    w = this.h[6],
                    _ = this.h[7];
                for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
                    var S = u(_, l(g), c(g, v, w), this.k[n], r[n]),
                        E = f(d(i), h(i, o, m));
                    _ = w, w = v, v = g, g = f(y, S), y = m, m = o, o = i, i = f(S, E)
                }
                this.h[0] = f(this.h[0], i), this.h[1] = f(this.h[1], o), this.h[2] = f(this.h[2], m), this.h[3] = f(this.h[3], y), this.h[4] = f(this.h[4], g), this.h[5] = f(this.h[5], v), this.h[6] = f(this.h[6], w), this.h[7] = f(this.h[7], _)
            }, g.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        }, {
            "../common": 71,
            "../utils": 81,
            "./common": 80,
            "minimalistic-assert": 86
        }],
        78: [function(t, e, r) {
            "use strict";
            var n = t("../utils"),
                i = t("./512");

            function o() {
                if (!(this instanceof o)) return new o;
                i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            n.inherits(o, i), e.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
            }
        }, {
            "../utils": 81,
            "./512": 79
        }],
        79: [function(t, e, r) {
            "use strict";
            var n = t("../utils"),
                i = t("../common"),
                o = t("minimalistic-assert"),
                s = n.rotr64_hi,
                f = n.rotr64_lo,
                a = n.shr64_hi,
                u = n.shr64_lo,
                c = n.sum64,
                h = n.sum64_hi,
                d = n.sum64_lo,
                l = n.sum64_4_hi,
                p = n.sum64_4_lo,
                b = n.sum64_5_hi,
                m = n.sum64_5_lo,
                y = i.BlockHash,
                g = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function v() {
                if (!(this instanceof v)) return new v;
                y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = g, this.W = new Array(160)
            }

            function w(t, e, r, n, i) {
                var o = t & r ^ ~t & i;
                return o < 0 && (o += 4294967296), o
            }

            function _(t, e, r, n, i, o) {
                var s = e & n ^ ~e & o;
                return s < 0 && (s += 4294967296), s
            }

            function S(t, e, r, n, i) {
                var o = t & r ^ t & i ^ r & i;
                return o < 0 && (o += 4294967296), o
            }

            function E(t, e, r, n, i, o) {
                var s = e & n ^ e & o ^ n & o;
                return s < 0 && (s += 4294967296), s
            }

            function M(t, e) {
                var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function O(t, e) {
                var r = f(t, e, 28) ^ f(e, t, 2) ^ f(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function A(t, e) {
                var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
                return r < 0 && (r += 4294967296), r
            }

            function k(t, e) {
                var r = f(t, e, 14) ^ f(t, e, 18) ^ f(e, t, 9);
                return r < 0 && (r += 4294967296), r
            }

            function T(t, e) {
                var r = s(t, e, 1) ^ s(t, e, 8) ^ a(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function x(t, e) {
                var r = f(t, e, 1) ^ f(t, e, 8) ^ u(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function I(t, e) {
                var r = s(t, e, 19) ^ s(e, t, 29) ^ a(t, e, 6);
                return r < 0 && (r += 4294967296), r
            }

            function P(t, e) {
                var r = f(t, e, 19) ^ f(e, t, 29) ^ u(t, e, 6);
                return r < 0 && (r += 4294967296), r
            }
            n.inherits(v, y), e.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function(t, e) {
                for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
                for (; n < r.length; n += 2) {
                    var i = I(r[n - 4], r[n - 3]),
                        o = P(r[n - 4], r[n - 3]),
                        s = r[n - 14],
                        f = r[n - 13],
                        a = T(r[n - 30], r[n - 29]),
                        u = x(r[n - 30], r[n - 29]),
                        c = r[n - 32],
                        h = r[n - 31];
                    r[n] = l(i, o, s, f, a, u, c, h), r[n + 1] = p(i, o, s, f, a, u, c, h)
                }
            }, v.prototype._update = function(t, e) {
                this._prepareBlock(t, e);
                var r = this.W,
                    n = this.h[0],
                    i = this.h[1],
                    s = this.h[2],
                    f = this.h[3],
                    a = this.h[4],
                    u = this.h[5],
                    l = this.h[6],
                    p = this.h[7],
                    y = this.h[8],
                    g = this.h[9],
                    v = this.h[10],
                    T = this.h[11],
                    x = this.h[12],
                    I = this.h[13],
                    P = this.h[14],
                    R = this.h[15];
                o(this.k.length === r.length);
                for (var B = 0; B < r.length; B += 2) {
                    var N = P,
                        L = R,
                        j = A(y, g),
                        U = k(y, g),
                        D = w(y, g, v, T, x),
                        C = _(y, g, v, T, x, I),
                        q = this.k[B],
                        H = this.k[B + 1],
                        z = r[B],
                        F = r[B + 1],
                        K = b(N, L, j, U, D, C, q, H, z, F),
                        W = m(N, L, j, U, D, C, q, H, z, F);
                    N = M(n, i), L = O(n, i), j = S(n, i, s, f, a), U = E(n, i, s, f, a, u);
                    var V = h(N, L, j, U),
                        G = d(N, L, j, U);
                    P = x, R = I, x = v, I = T, v = y, T = g, y = h(l, p, K, W), g = d(p, p, K, W), l = a, p = u, a = s, u = f, s = n, f = i, n = h(K, W, V, G), i = d(K, W, V, G)
                }
                c(this.h, 0, n, i), c(this.h, 2, s, f), c(this.h, 4, a, u), c(this.h, 6, l, p), c(this.h, 8, y, g), c(this.h, 10, v, T), c(this.h, 12, x, I), c(this.h, 14, P, R)
            }, v.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        }, {
            "../common": 71,
            "../utils": 81,
            "minimalistic-assert": 86
        }],
        80: [function(t, e, r) {
            "use strict";
            var n = t("../utils").rotr32;

            function i(t, e, r) {
                return t & e ^ ~t & r
            }

            function o(t, e, r) {
                return t & e ^ t & r ^ e & r
            }

            function s(t, e, r) {
                return t ^ e ^ r
            }
            r.ft_1 = function(t, e, r, n) {
                return 0 === t ? i(e, r, n) : 1 === t || 3 === t ? s(e, r, n) : 2 === t ? o(e, r, n) : void 0
            }, r.ch32 = i, r.maj32 = o, r.p32 = s, r.s0_256 = function(t) {
                return n(t, 2) ^ n(t, 13) ^ n(t, 22)
            }, r.s1_256 = function(t) {
                return n(t, 6) ^ n(t, 11) ^ n(t, 25)
            }, r.g0_256 = function(t) {
                return n(t, 7) ^ n(t, 18) ^ t >>> 3
            }, r.g1_256 = function(t) {
                return n(t, 17) ^ n(t, 19) ^ t >>> 10
            }
        }, {
            "../utils": 81
        }],
        81: [function(t, e, r) {
            "use strict";
            var n = t("minimalistic-assert"),
                i = t("inherits");

            function o(t, e) {
                return 55296 == (64512 & t.charCodeAt(e)) && (!(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1)))
            }

            function s(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }

            function f(t) {
                return 1 === t.length ? "0" + t : t
            }

            function a(t) {
                return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
            }
            r.inherits = i, r.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" == typeof t)
                    if (e) {
                        if ("hex" === e)
                            for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
                    } else
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var s = t.charCodeAt(i);
                            s < 128 ? r[n++] = s : s < 2048 ? (r[n++] = s >> 6 | 192, r[n++] = 63 & s | 128) : o(t, i) ? (s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i)), r[n++] = s >> 18 | 240, r[n++] = s >> 12 & 63 | 128, r[n++] = s >> 6 & 63 | 128, r[n++] = 63 & s | 128) : (r[n++] = s >> 12 | 224, r[n++] = s >> 6 & 63 | 128, r[n++] = 63 & s | 128)
                        } else
                            for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
                return r
            }, r.toHex = function(t) {
                for (var e = "", r = 0; r < t.length; r++) e += f(t[r].toString(16));
                return e
            }, r.htonl = s, r.toHex32 = function(t, e) {
                for (var r = "", n = 0; n < t.length; n++) {
                    var i = t[n];
                    "little" === e && (i = s(i)), r += a(i.toString(16))
                }
                return r
            }, r.zero2 = f, r.zero8 = a, r.join32 = function(t, e, r, i) {
                var o = r - e;
                n(o % 4 == 0);
                for (var s = new Array(o / 4), f = 0, a = e; f < s.length; f++, a += 4) {
                    var u;
                    u = "big" === i ? t[a] << 24 | t[a + 1] << 16 | t[a + 2] << 8 | t[a + 3] : t[a + 3] << 24 | t[a + 2] << 16 | t[a + 1] << 8 | t[a], s[f] = u >>> 0
                }
                return s
            }, r.split32 = function(t, e) {
                for (var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
                    var o = t[n];
                    "big" === e ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
                }
                return r
            }, r.rotr32 = function(t, e) {
                return t >>> e | t << 32 - e
            }, r.rotl32 = function(t, e) {
                return t << e | t >>> 32 - e
            }, r.sum32 = function(t, e) {
                return t + e >>> 0
            }, r.sum32_3 = function(t, e, r) {
                return t + e + r >>> 0
            }, r.sum32_4 = function(t, e, r, n) {
                return t + e + r + n >>> 0
            }, r.sum32_5 = function(t, e, r, n, i) {
                return t + e + r + n + i >>> 0
            }, r.sum64 = function(t, e, r, n) {
                var i = t[e],
                    o = n + t[e + 1] >>> 0,
                    s = (o < n ? 1 : 0) + r + i;
                t[e] = s >>> 0, t[e + 1] = o
            }, r.sum64_hi = function(t, e, r, n) {
                return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0
            }, r.sum64_lo = function(t, e, r, n) {
                return e + n >>> 0
            }, r.sum64_4_hi = function(t, e, r, n, i, o, s, f) {
                var a = 0,
                    u = e;
                return a += (u = u + n >>> 0) < e ? 1 : 0, a += (u = u + o >>> 0) < o ? 1 : 0, t + r + i + s + (a += (u = u + f >>> 0) < f ? 1 : 0) >>> 0
            }, r.sum64_4_lo = function(t, e, r, n, i, o, s, f) {
                return e + n + o + f >>> 0
            }, r.sum64_5_hi = function(t, e, r, n, i, o, s, f, a, u) {
                var c = 0,
                    h = e;
                return c += (h = h + n >>> 0) < e ? 1 : 0, c += (h = h + o >>> 0) < o ? 1 : 0, c += (h = h + f >>> 0) < f ? 1 : 0, t + r + i + s + a + (c += (h = h + u >>> 0) < u ? 1 : 0) >>> 0
            }, r.sum64_5_lo = function(t, e, r, n, i, o, s, f, a, u) {
                return e + n + o + f + u >>> 0
            }, r.rotr64_hi = function(t, e, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, r.rotr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, r.shr64_hi = function(t, e, r) {
                return t >>> r
            }, r.shr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }
        }, {
            inherits: 83,
            "minimalistic-assert": 86
        }],
        82: [function(t, e, r) {
            "use strict";
            var n = t("hash.js"),
                i = t("minimalistic-crypto-utils"),
                o = t("minimalistic-assert");

            function s(t) {
                if (!(this instanceof s)) return new s(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var e = i.toArray(t.entropy, t.entropyEnc || "hex"),
                    r = i.toArray(t.nonce, t.nonceEnc || "hex"),
                    n = i.toArray(t.pers, t.persEnc || "hex");
                o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n)
            }
            e.exports = s, s.prototype._init = function(t, e, r) {
                var n = t.concat(e).concat(r);
                this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
            }, s.prototype._hmac = function() {
                return new n.hmac(this.hash, this.K)
            }, s.prototype._update = function(t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, s.prototype.reseed = function(t, e, r, n) {
                "string" != typeof e && (n = r, r = e, e = null), t = i.toArray(t, e), r = i.toArray(r, n), o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
            }, s.prototype.generate = function(t, e, r, n) {
                if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                "string" != typeof e && (n = r, r = e, e = null), r && (r = i.toArray(r, n || "hex"), this._update(r));
                for (var o = []; o.length < t;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
                var s = o.slice(0, t);
                return this._update(r), this._reseed++, i.encode(s, e)
            }
        }, {
            "hash.js": 70,
            "minimalistic-assert": 86,
            "minimalistic-crypto-utils": 87
        }],
        83: [function(t, e, r) {
            arguments[4][10][0].apply(r, arguments)
        }, {
            dup: 10
        }],
        84: [function(t, e, r) {
            "use strict";
            var n = t("inherits"),
                i = t("hash-base"),
                o = t("safe-buffer").Buffer,
                s = new Array(16);

            function f() {
                i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
            }

            function a(t, e) {
                return t << e | t >>> 32 - e
            }

            function u(t, e, r, n, i, o, s) {
                return a(t + (e & r | ~e & n) + i + o | 0, s) + e | 0
            }

            function c(t, e, r, n, i, o, s) {
                return a(t + (e & n | r & ~n) + i + o | 0, s) + e | 0
            }

            function h(t, e, r, n, i, o, s) {
                return a(t + (e ^ r ^ n) + i + o | 0, s) + e | 0
            }

            function d(t, e, r, n, i, o, s) {
                return a(t + (r ^ (e | ~n)) + i + o | 0, s) + e | 0
            }
            n(f, i), f.prototype._update = function() {
                for (var t = s, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
                var r = this._a,
                    n = this._b,
                    i = this._c,
                    o = this._d;
                n = d(n = d(n = d(n = d(n = h(n = h(n = h(n = h(n = c(n = c(n = c(n = c(n = u(n = u(n = u(n = u(n, i = u(i, o = u(o, r = u(r, n, i, o, t[0], 3614090360, 7), n, i, t[1], 3905402710, 12), r, n, t[2], 606105819, 17), o, r, t[3], 3250441966, 22), i = u(i, o = u(o, r = u(r, n, i, o, t[4], 4118548399, 7), n, i, t[5], 1200080426, 12), r, n, t[6], 2821735955, 17), o, r, t[7], 4249261313, 22), i = u(i, o = u(o, r = u(r, n, i, o, t[8], 1770035416, 7), n, i, t[9], 2336552879, 12), r, n, t[10], 4294925233, 17), o, r, t[11], 2304563134, 22), i = u(i, o = u(o, r = u(r, n, i, o, t[12], 1804603682, 7), n, i, t[13], 4254626195, 12), r, n, t[14], 2792965006, 17), o, r, t[15], 1236535329, 22), i = c(i, o = c(o, r = c(r, n, i, o, t[1], 4129170786, 5), n, i, t[6], 3225465664, 9), r, n, t[11], 643717713, 14), o, r, t[0], 3921069994, 20), i = c(i, o = c(o, r = c(r, n, i, o, t[5], 3593408605, 5), n, i, t[10], 38016083, 9), r, n, t[15], 3634488961, 14), o, r, t[4], 3889429448, 20), i = c(i, o = c(o, r = c(r, n, i, o, t[9], 568446438, 5), n, i, t[14], 3275163606, 9), r, n, t[3], 4107603335, 14), o, r, t[8], 1163531501, 20), i = c(i, o = c(o, r = c(r, n, i, o, t[13], 2850285829, 5), n, i, t[2], 4243563512, 9), r, n, t[7], 1735328473, 14), o, r, t[12], 2368359562, 20), i = h(i, o = h(o, r = h(r, n, i, o, t[5], 4294588738, 4), n, i, t[8], 2272392833, 11), r, n, t[11], 1839030562, 16), o, r, t[14], 4259657740, 23), i = h(i, o = h(o, r = h(r, n, i, o, t[1], 2763975236, 4), n, i, t[4], 1272893353, 11), r, n, t[7], 4139469664, 16), o, r, t[10], 3200236656, 23), i = h(i, o = h(o, r = h(r, n, i, o, t[13], 681279174, 4), n, i, t[0], 3936430074, 11), r, n, t[3], 3572445317, 16), o, r, t[6], 76029189, 23), i = h(i, o = h(o, r = h(r, n, i, o, t[9], 3654602809, 4), n, i, t[12], 3873151461, 11), r, n, t[15], 530742520, 16), o, r, t[2], 3299628645, 23), i = d(i, o = d(o, r = d(r, n, i, o, t[0], 4096336452, 6), n, i, t[7], 1126891415, 10), r, n, t[14], 2878612391, 15), o, r, t[5], 4237533241, 21), i = d(i, o = d(o, r = d(r, n, i, o, t[12], 1700485571, 6), n, i, t[3], 2399980690, 10), r, n, t[10], 4293915773, 15), o, r, t[1], 2240044497, 21), i = d(i, o = d(o, r = d(r, n, i, o, t[8], 1873313359, 6), n, i, t[15], 4264355552, 10), r, n, t[6], 2734768916, 15), o, r, t[13], 1309151649, 21), i = d(i, o = d(o, r = d(r, n, i, o, t[4], 4149444226, 6), n, i, t[11], 3174756917, 10), r, n, t[2], 718787259, 15), o, r, t[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + o | 0
            }, f.prototype._digest = function() {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var t = o.allocUnsafe(16);
                return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t
            }, e.exports = f
        }, {
            "hash-base": 69,
            inherits: 83,
            "safe-buffer": 106
        }],
        85: [function(t, e, r) {
            (function(t) {
                (function() {
                    e.exports = function(e, r) {
                        if (!Array.isArray(e)) throw TypeError("Expected values Array");
                        if ("function" != typeof r) throw TypeError("Expected digest Function");
                        for (var n = e.length, i = e.concat(); n > 1;) {
                            for (var o = 0, s = 0; s < n; s += 2, ++o) {
                                var f = i[s],
                                    a = s + 1 === n ? f : i[s + 1],
                                    u = t.concat([f, a]);
                                i[o] = r(u)
                            }
                            n = o
                        }
                        return i[0]
                    }
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, {
            buffer: 7
        }],
        86: [function(t, e, r) {
            function n(t, e) {
                if (!t) throw new Error(e || "Assertion failed")
            }
            e.exports = n, n.equal = function(t, e, r) {
                if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
            }
        }, {}],
        87: [function(t, e, r) {
            "use strict";
            var n = r;

            function i(t) {
                return 1 === t.length ? "0" + t : t
            }

            function o(t) {
                for (var e = "", r = 0; r < t.length; r++) e += i(t[r].toString(16));
                return e
            }
            n.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" != typeof t) {
                    for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
                    return r
                }
                if ("hex" === e)
                    for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16));
                else
                    for (n = 0; n < t.length; n++) {
                        var i = t.charCodeAt(n),
                            o = i >> 8,
                            s = 255 & i;
                        o ? r.push(o, s) : r.push(s)
                    }
                return r
            }, n.zero2 = i, n.toHex = o, n.encode = function(t, e) {
                return "hex" === e ? o(t) : t
            }
        }, {}],
        88: [function(t, e, r) {
            var n = t("bitcoin-ops");

            function i(t) {
                return t < n.OP_PUSHDATA1 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5
            }
            e.exports = {
                encodingLength: i,
                encode: function(t, e, r) {
                    var o = i(e);
                    return 1 === o ? t.writeUInt8(e, r) : 2 === o ? (t.writeUInt8(n.OP_PUSHDATA1, r), t.writeUInt8(e, r + 1)) : 3 === o ? (t.writeUInt8(n.OP_PUSHDATA2, r), t.writeUInt16LE(e, r + 1)) : (t.writeUInt8(n.OP_PUSHDATA4, r), t.writeUInt32LE(e, r + 1)), o
                },
                decode: function(t, e) {
                    var r, i, o = t.readUInt8(e);
                    if (o < n.OP_PUSHDATA1) r = o, i = 1;
                    else if (o === n.OP_PUSHDATA1) {
                        if (e + 2 > t.length) return null;
                        r = t.readUInt8(e + 1), i = 2
                    } else if (o === n.OP_PUSHDATA2) {
                        if (e + 3 > t.length) return null;
                        r = t.readUInt16LE(e + 1), i = 3
                    } else {
                        if (e + 5 > t.length) return null;
                        if (o !== n.OP_PUSHDATA4) throw new Error("Unexpected opcode");
                        r = t.readUInt32LE(e + 1), i = 5
                    }
                    return {
                        opcode: o,
                        number: r,
                        size: i
                    }
                }
            }
        }, {
            "bitcoin-ops": 41
        }],
        89: [function(t, e, r) {
            (function(r, n) {
                (function() {
                    "use strict";
                    var i = 65536,
                        o = 4294967295;
                    var s = t("safe-buffer").Buffer,
                        f = n.crypto || n.msCrypto;
                    f && f.getRandomValues ? e.exports = function(t, e) {
                        if (t > o) throw new RangeError("requested too many random bytes");
                        var n = s.allocUnsafe(t);
                        if (t > 0)
                            if (t > i)
                                for (var a = 0; a < t; a += i) f.getRandomValues(n.slice(a, a + i));
                            else f.getRandomValues(n);
                        if ("function" == typeof e) return r.nextTick(function() {
                            e(null, n)
                        });
                        return n
                    } : e.exports = function() {
                        throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
                    }
                }).call(this)
            }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            _process: 13,
            "safe-buffer": 106
        }],
        90: [function(t, e, r) {
            arguments[4][16][0].apply(r, arguments)
        }, {
            dup: 16
        }],
        91: [function(t, e, r) {
            arguments[4][17][0].apply(r, arguments)
        }, {
            "./_stream_readable": 93,
            "./_stream_writable": 95,
            _process: 13,
            dup: 17,
            inherits: 83
        }],
        92: [function(t, e, r) {
            arguments[4][18][0].apply(r, arguments)
        }, {
            "./_stream_transform": 94,
            dup: 18,
            inherits: 83
        }],
        93: [function(t, e, r) {
            arguments[4][19][0].apply(r, arguments)
        }, {
            "../errors": 90,
            "./_stream_duplex": 91,
            "./internal/streams/async_iterator": 96,
            "./internal/streams/buffer_list": 97,
            "./internal/streams/destroy": 98,
            "./internal/streams/from": 100,
            "./internal/streams/state": 102,
            "./internal/streams/stream": 103,
            _process: 13,
            buffer: 7,
            dup: 19,
            events: 8,
            inherits: 83,
            "string_decoder/": 115,
            util: 6
        }],
        94: [function(t, e, r) {
            arguments[4][20][0].apply(r, arguments)
        }, {
            "../errors": 90,
            "./_stream_duplex": 91,
            dup: 20,
            inherits: 83
        }],
        95: [function(t, e, r) {
            arguments[4][21][0].apply(r, arguments)
        }, {
            "../errors": 90,
            "./_stream_duplex": 91,
            "./internal/streams/destroy": 98,
            "./internal/streams/state": 102,
            "./internal/streams/stream": 103,
            _process: 13,
            buffer: 7,
            dup: 21,
            inherits: 83,
            "util-deprecate": 122
        }],
        96: [function(t, e, r) {
            arguments[4][22][0].apply(r, arguments)
        }, {
            "./end-of-stream": 99,
            _process: 13,
            dup: 22
        }],
        97: [function(t, e, r) {
            arguments[4][23][0].apply(r, arguments)
        }, {
            buffer: 7,
            dup: 23,
            util: 6
        }],
        98: [function(t, e, r) {
            arguments[4][24][0].apply(r, arguments)
        }, {
            _process: 13,
            dup: 24
        }],
        99: [function(t, e, r) {
            arguments[4][25][0].apply(r, arguments)
        }, {
            "../../../errors": 90,
            dup: 25
        }],
        100: [function(t, e, r) {
            arguments[4][26][0].apply(r, arguments)
        }, {
            dup: 26
        }],
        101: [function(t, e, r) {
            arguments[4][27][0].apply(r, arguments)
        }, {
            "../../../errors": 90,
            "./end-of-stream": 99,
            dup: 27
        }],
        102: [function(t, e, r) {
            arguments[4][28][0].apply(r, arguments)
        }, {
            "../../../errors": 90,
            dup: 28
        }],
        103: [function(t, e, r) {
            arguments[4][29][0].apply(r, arguments)
        }, {
            dup: 29,
            events: 8
        }],
        104: [function(t, e, r) {
            (r = e.exports = t("./lib/_stream_readable.js")).Stream = r, r.Readable = r, r.Writable = t("./lib/_stream_writable.js"), r.Duplex = t("./lib/_stream_duplex.js"), r.Transform = t("./lib/_stream_transform.js"), r.PassThrough = t("./lib/_stream_passthrough.js"), r.finished = t("./lib/internal/streams/end-of-stream.js"), r.pipeline = t("./lib/internal/streams/pipeline.js")
        }, {
            "./lib/_stream_duplex.js": 91,
            "./lib/_stream_passthrough.js": 92,
            "./lib/_stream_readable.js": 93,
            "./lib/_stream_transform.js": 94,
            "./lib/_stream_writable.js": 95,
            "./lib/internal/streams/end-of-stream.js": 99,
            "./lib/internal/streams/pipeline.js": 101
        }],
        105: [function(t, e, r) {
            "use strict";
            var n = t("buffer").Buffer,
                i = t("inherits"),
                o = t("hash-base"),
                s = new Array(16),
                f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                a = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                u = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                c = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
                h = [0, 1518500249, 1859775393, 2400959708, 2840853838],
                d = [1352829926, 1548603684, 1836072691, 2053994217, 0];

            function l() {
                o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
            }

            function p(t, e) {
                return t << e | t >>> 32 - e
            }

            function b(t, e, r, n, i, o, s, f) {
                return p(t + (e ^ r ^ n) + o + s | 0, f) + i | 0
            }

            function m(t, e, r, n, i, o, s, f) {
                return p(t + (e & r | ~e & n) + o + s | 0, f) + i | 0
            }

            function y(t, e, r, n, i, o, s, f) {
                return p(t + ((e | ~r) ^ n) + o + s | 0, f) + i | 0
            }

            function g(t, e, r, n, i, o, s, f) {
                return p(t + (e & n | r & ~n) + o + s | 0, f) + i | 0
            }

            function v(t, e, r, n, i, o, s, f) {
                return p(t + (e ^ (r | ~n)) + o + s | 0, f) + i | 0
            }
            i(l, o), l.prototype._update = function() {
                for (var t = s, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
                for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, l = 0 | this._e, w = 0 | this._a, _ = 0 | this._b, S = 0 | this._c, E = 0 | this._d, M = 0 | this._e, O = 0; O < 80; O += 1) {
                    var A, k;
                    O < 16 ? (A = b(r, n, i, o, l, t[f[O]], h[0], u[O]), k = v(w, _, S, E, M, t[a[O]], d[0], c[O])) : O < 32 ? (A = m(r, n, i, o, l, t[f[O]], h[1], u[O]), k = g(w, _, S, E, M, t[a[O]], d[1], c[O])) : O < 48 ? (A = y(r, n, i, o, l, t[f[O]], h[2], u[O]), k = y(w, _, S, E, M, t[a[O]], d[2], c[O])) : O < 64 ? (A = g(r, n, i, o, l, t[f[O]], h[3], u[O]), k = m(w, _, S, E, M, t[a[O]], d[3], c[O])) : (A = v(r, n, i, o, l, t[f[O]], h[4], u[O]), k = b(w, _, S, E, M, t[a[O]], d[4], c[O])), r = l, l = o, o = p(i, 10), i = n, n = A, w = M, M = E, E = p(S, 10), S = _, _ = k
                }
                var T = this._b + i + E | 0;
                this._b = this._c + o + M | 0, this._c = this._d + l + w | 0, this._d = this._e + r + _ | 0, this._e = this._a + n + S | 0, this._a = T
            }, l.prototype._digest = function() {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var t = n.alloc ? n.alloc(20) : new n(20);
                return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t
            }, e.exports = l
        }, {
            buffer: 7,
            "hash-base": 69,
            inherits: 83
        }],
        106: [function(t, e, r) {
            arguments[4][14][0].apply(r, arguments)
        }, {
            buffer: 7,
            dup: 14
        }],
        107: [function(t, e, r) {
            var n = t("safe-buffer").Buffer;

            function i(t, e) {
                this._block = n.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0
            }
            i.prototype.update = function(t, e) {
                "string" == typeof t && (e = e || "utf8", t = n.from(t, e));
                for (var r = this._block, i = this._blockSize, o = t.length, s = this._len, f = 0; f < o;) {
                    for (var a = s % i, u = Math.min(o - f, i - a), c = 0; c < u; c++) r[a + c] = t[f + c];
                    f += u, (s += u) % i == 0 && this._update(r)
                }
                return this._len += o, this
            }, i.prototype.digest = function(t) {
                var e = this._len % this._blockSize;
                this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
                var r = 8 * this._len;
                if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
                else {
                    var n = (4294967295 & r) >>> 0,
                        i = (r - n) / 4294967296;
                    this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
                }
                this._update(this._block);
                var o = this._hash();
                return t ? o.toString(t) : o
            }, i.prototype._update = function() {
                throw new Error("_update must be implemented by subclass")
            }, e.exports = i
        }, {
            "safe-buffer": 106
        }],
        108: [function(t, e, r) {
            (r = e.exports = function(t) {
                t = t.toLowerCase();
                var e = r[t];
                if (!e) throw new Error(t + " is not supported (we accept pull requests)");
                return new e
            }).sha = t("./sha"), r.sha1 = t("./sha1"), r.sha224 = t("./sha224"), r.sha256 = t("./sha256"), r.sha384 = t("./sha384"), r.sha512 = t("./sha512")
        }, {
            "./sha": 109,
            "./sha1": 110,
            "./sha224": 111,
            "./sha256": 112,
            "./sha384": 113,
            "./sha512": 114
        }],
        109: [function(t, e, r) {
            var n = t("inherits"),
                i = t("./hash"),
                o = t("safe-buffer").Buffer,
                s = [1518500249, 1859775393, -1894007588, -899497514],
                f = new Array(80);

            function a() {
                this.init(), this._w = f, i.call(this, 64, 56)
            }

            function u(t) {
                return t << 30 | t >>> 2
            }

            function c(t, e, r, n) {
                return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
            }
            n(a, i), a.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, a.prototype._update = function(t) {
                for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, f = 0 | this._d, a = 0 | this._e, h = 0; h < 16; ++h) r[h] = t.readInt32BE(4 * h);
                for (; h < 80; ++h) r[h] = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16];
                for (var d = 0; d < 80; ++d) {
                    var l = ~~(d / 20),
                        p = 0 | ((e = n) << 5 | e >>> 27) + c(l, i, o, f) + a + r[d] + s[l];
                    a = f, f = o, o = u(i), i = n, n = p
                }
                this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = f + this._d | 0, this._e = a + this._e | 0
            }, a.prototype._hash = function() {
                var t = o.allocUnsafe(20);
                return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
            }, e.exports = a
        }, {
            "./hash": 107,
            inherits: 83,
            "safe-buffer": 106
        }],
        110: [function(t, e, r) {
            var n = t("inherits"),
                i = t("./hash"),
                o = t("safe-buffer").Buffer,
                s = [1518500249, 1859775393, -1894007588, -899497514],
                f = new Array(80);

            function a() {
                this.init(), this._w = f, i.call(this, 64, 56)
            }

            function u(t) {
                return t << 5 | t >>> 27
            }

            function c(t) {
                return t << 30 | t >>> 2
            }

            function h(t, e, r, n) {
                return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
            }
            n(a, i), a.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, a.prototype._update = function(t) {
                for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, f = 0 | this._d, a = 0 | this._e, d = 0; d < 16; ++d) r[d] = t.readInt32BE(4 * d);
                for (; d < 80; ++d) r[d] = (e = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16]) << 1 | e >>> 31;
                for (var l = 0; l < 80; ++l) {
                    var p = ~~(l / 20),
                        b = u(n) + h(p, i, o, f) + a + r[l] + s[p] | 0;
                    a = f, f = o, o = c(i), i = n, n = b
                }
                this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = f + this._d | 0, this._e = a + this._e | 0
            }, a.prototype._hash = function() {
                var t = o.allocUnsafe(20);
                return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
            }, e.exports = a
        }, {
            "./hash": 107,
            inherits: 83,
            "safe-buffer": 106
        }],
        111: [function(t, e, r) {
            var n = t("inherits"),
                i = t("./sha256"),
                o = t("./hash"),
                s = t("safe-buffer").Buffer,
                f = new Array(64);

            function a() {
                this.init(), this._w = f, o.call(this, 64, 56)
            }
            n(a, i), a.prototype.init = function() {
                return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
            }, a.prototype._hash = function() {
                var t = s.allocUnsafe(28);
                return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t
            }, e.exports = a
        }, {
            "./hash": 107,
            "./sha256": 112,
            inherits: 83,
            "safe-buffer": 106
        }],
        112: [function(t, e, r) {
            var n = t("inherits"),
                i = t("./hash"),
                o = t("safe-buffer").Buffer,
                s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                f = new Array(64);

            function a() {
                this.init(), this._w = f, i.call(this, 64, 56)
            }

            function u(t, e, r) {
                return r ^ t & (e ^ r)
            }

            function c(t, e, r) {
                return t & e | r & (t | e)
            }

            function h(t) {
                return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
            }

            function d(t) {
                return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
            }

            function l(t) {
                return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
            }
            n(a, i), a.prototype.init = function() {
                return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
            }, a.prototype._update = function(t) {
                for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, f = 0 | this._d, a = 0 | this._e, p = 0 | this._f, b = 0 | this._g, m = 0 | this._h, y = 0; y < 16; ++y) r[y] = t.readInt32BE(4 * y);
                for (; y < 64; ++y) r[y] = 0 | (((e = r[y - 2]) >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) + r[y - 7] + l(r[y - 15]) + r[y - 16];
                for (var g = 0; g < 64; ++g) {
                    var v = m + d(a) + u(a, p, b) + s[g] + r[g] | 0,
                        w = h(n) + c(n, i, o) | 0;
                    m = b, b = p, p = a, a = f + v | 0, f = o, o = i, i = n, n = v + w | 0
                }
                this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = f + this._d | 0, this._e = a + this._e | 0, this._f = p + this._f | 0, this._g = b + this._g | 0, this._h = m + this._h | 0
            }, a.prototype._hash = function() {
                var t = o.allocUnsafe(32);
                return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
            }, e.exports = a
        }, {
            "./hash": 107,
            inherits: 83,
            "safe-buffer": 106
        }],
        113: [function(t, e, r) {
            var n = t("inherits"),
                i = t("./sha512"),
                o = t("./hash"),
                s = t("safe-buffer").Buffer,
                f = new Array(160);

            function a() {
                this.init(), this._w = f, o.call(this, 128, 112)
            }
            n(a, i), a.prototype.init = function() {
                return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
            }, a.prototype._hash = function() {
                var t = s.allocUnsafe(48);

                function e(e, r, n) {
                    t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4)
                }
                return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t
            }, e.exports = a
        }, {
            "./hash": 107,
            "./sha512": 114,
            inherits: 83,
            "safe-buffer": 106
        }],
        114: [function(t, e, r) {
            var n = t("inherits"),
                i = t("./hash"),
                o = t("safe-buffer").Buffer,
                s = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                f = new Array(160);

            function a() {
                this.init(), this._w = f, i.call(this, 128, 112)
            }

            function u(t, e, r) {
                return r ^ t & (e ^ r)
            }

            function c(t, e, r) {
                return t & e | r & (t | e)
            }

            function h(t, e) {
                return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
            }

            function d(t, e) {
                return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
            }

            function l(t, e) {
                return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
            }

            function p(t, e) {
                return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
            }

            function b(t, e) {
                return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
            }

            function m(t, e) {
                return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
            }

            function y(t, e) {
                return t >>> 0 < e >>> 0 ? 1 : 0
            }
            n(a, i), a.prototype.init = function() {
                return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
            }, a.prototype._update = function(t) {
                for (var e = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, f = 0 | this._eh, a = 0 | this._fh, g = 0 | this._gh, v = 0 | this._hh, w = 0 | this._al, _ = 0 | this._bl, S = 0 | this._cl, E = 0 | this._dl, M = 0 | this._el, O = 0 | this._fl, A = 0 | this._gl, k = 0 | this._hl, T = 0; T < 32; T += 2) e[T] = t.readInt32BE(4 * T), e[T + 1] = t.readInt32BE(4 * T + 4);
                for (; T < 160; T += 2) {
                    var x = e[T - 30],
                        I = e[T - 30 + 1],
                        P = l(x, I),
                        R = p(I, x),
                        B = b(x = e[T - 4], I = e[T - 4 + 1]),
                        N = m(I, x),
                        L = e[T - 14],
                        j = e[T - 14 + 1],
                        U = e[T - 32],
                        D = e[T - 32 + 1],
                        C = R + j | 0,
                        q = P + L + y(C, R) | 0;
                    q = (q = q + B + y(C = C + N | 0, N) | 0) + U + y(C = C + D | 0, D) | 0, e[T] = q, e[T + 1] = C
                }
                for (var H = 0; H < 160; H += 2) {
                    q = e[H], C = e[H + 1];
                    var z = c(r, n, i),
                        F = c(w, _, S),
                        K = h(r, w),
                        W = h(w, r),
                        V = d(f, M),
                        G = d(M, f),
                        J = s[H],
                        Y = s[H + 1],
                        Z = u(f, a, g),
                        Q = u(M, O, A),
                        X = k + G | 0,
                        $ = v + V + y(X, k) | 0;
                    $ = ($ = ($ = $ + Z + y(X = X + Q | 0, Q) | 0) + J + y(X = X + Y | 0, Y) | 0) + q + y(X = X + C | 0, C) | 0;
                    var tt = W + F | 0,
                        et = K + z + y(tt, W) | 0;
                    v = g, k = A, g = a, A = O, a = f, O = M, f = o + $ + y(M = E + X | 0, E) | 0, o = i, E = S, i = n, S = _, n = r, _ = w, r = $ + et + y(w = X + tt | 0, X) | 0
                }
                this._al = this._al + w | 0, this._bl = this._bl + _ | 0, this._cl = this._cl + S | 0, this._dl = this._dl + E | 0, this._el = this._el + M | 0, this._fl = this._fl + O | 0, this._gl = this._gl + A | 0, this._hl = this._hl + k | 0, this._ah = this._ah + r + y(this._al, w) | 0, this._bh = this._bh + n + y(this._bl, _) | 0, this._ch = this._ch + i + y(this._cl, S) | 0, this._dh = this._dh + o + y(this._dl, E) | 0, this._eh = this._eh + f + y(this._el, M) | 0, this._fh = this._fh + a + y(this._fl, O) | 0, this._gh = this._gh + g + y(this._gl, A) | 0, this._hh = this._hh + v + y(this._hl, k) | 0
            }, a.prototype._hash = function() {
                var t = o.allocUnsafe(64);

                function e(e, r, n) {
                    t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4)
                }
                return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t
            }, e.exports = a
        }, {
            "./hash": 107,
            inherits: 83,
            "safe-buffer": 106
        }],
        115: [function(t, e, r) {
            arguments[4][30][0].apply(r, arguments)
        }, {
            dup: 30,
            "safe-buffer": 106
        }],
        116: [function(t, e, r) {
            (function(r) {
                (function() {
                    const n = t("bn.js"),
                        i = new(0, t("elliptic").ec)("secp256k1"),
                        o = t("./rfc6979"),
                        s = r.alloc(32, 0),
                        f = r.from("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", "hex"),
                        a = r.from("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f", "hex"),
                        u = i.curve.n,
                        c = u.shrn(1),
                        h = i.curve.g,
                        d = "Expected Private",
                        l = "Expected Point",
                        p = "Expected Tweak",
                        b = "Expected Hash",
                        m = "Expected Signature",
                        y = "Expected Extra Data (32 bytes)";

                    function g(t) {
                        return r.isBuffer(t) && 32 === t.length
                    }

                    function v(t) {
                        return !!g(t) && t.compare(f) < 0
                    }

                    function w(t) {
                        if (!r.isBuffer(t)) return !1;
                        if (t.length < 33) return !1;
                        const e = t[0],
                            n = t.slice(1, 33);
                        if (0 === n.compare(s)) return !1;
                        if (n.compare(a) >= 0) return !1;
                        if ((2 === e || 3 === e) && 33 === t.length) {
                            try {
                                A(t)
                            } catch (t) {
                                return !1
                            }
                            return !0
                        }
                        const i = t.slice(33);
                        return 0 !== i.compare(s) && (!(i.compare(a) >= 0) && (4 === e && 65 === t.length))
                    }

                    function _(t) {
                        return 4 !== t[0]
                    }

                    function S(t) {
                        return !!g(t) && (t.compare(s) > 0 && t.compare(f) < 0)
                    }

                    function E(t, e) {
                        return void 0 === t && void 0 !== e ? _(e) : void 0 === t || t
                    }

                    function M(t) {
                        return new n(t)
                    }

                    function O(t) {
                        return t.toArrayLike(r, "be", 32)
                    }

                    function A(t) {
                        return i.curve.decodePoint(t)
                    }

                    function k(t, e) {
                        return r.from(t._encode(e))
                    }

                    function T(t, e, n) {
                        if (!g(t)) throw new TypeError(b);
                        if (!S(e)) throw new TypeError(d);
                        if (void 0 !== n && !g(n)) throw new TypeError(y);
                        const i = M(e),
                            s = M(t);
                        let f, a;
                        o(t, e, function(t) {
                            const e = M(t),
                                r = h.mul(e);
                            return !r.isInfinity() && 0 !== (f = r.x.umod(u)).isZero() && 0 !== (a = e.invm(u).mul(s.add(i.mul(f))).umod(u)).isZero()
                        }, S, n), a.cmp(c) > 0 && (a = u.sub(a));
                        const l = r.allocUnsafe(64);
                        return O(f).copy(l, 0), O(a).copy(l, 32), l
                    }
                    e.exports = {
                        isPoint: w,
                        isPointCompressed: function(t) {
                            return !!w(t) && _(t)
                        },
                        isPrivate: S,
                        pointAdd: function(t, e, r) {
                            if (!w(t)) throw new TypeError(l);
                            if (!w(e)) throw new TypeError(l);
                            const n = A(t),
                                i = A(e),
                                o = n.add(i);
                            return o.isInfinity() ? null : k(o, E(r, t))
                        },
                        pointAddScalar: function(t, e, r) {
                            if (!w(t)) throw new TypeError(l);
                            if (!v(e)) throw new TypeError(p);
                            const n = E(r, t),
                                i = A(t);
                            if (0 === e.compare(s)) return k(i, n);
                            const o = M(e),
                                f = h.mul(o),
                                a = i.add(f);
                            return a.isInfinity() ? null : k(a, n)
                        },
                        pointCompress: function(t, e) {
                            if (!w(t)) throw new TypeError(l);
                            const r = A(t);
                            if (r.isInfinity()) throw new TypeError(l);
                            return k(r, E(e, t))
                        },
                        pointFromScalar: function(t, e) {
                            if (!S(t)) throw new TypeError(d);
                            const r = M(t),
                                n = h.mul(r);
                            return n.isInfinity() ? null : k(n, E(e))
                        },
                        pointMultiply: function(t, e, r) {
                            if (!w(t)) throw new TypeError(l);
                            if (!v(e)) throw new TypeError(p);
                            const n = E(r, t),
                                i = A(t),
                                o = M(e),
                                s = i.mul(o);
                            return s.isInfinity() ? null : k(s, n)
                        },
                        privateAdd: function(t, e) {
                            if (!S(t)) throw new TypeError(d);
                            if (!v(e)) throw new TypeError(p);
                            const r = M(t),
                                n = M(e),
                                i = O(r.add(n).umod(u));
                            return S(i) ? i : null
                        },
                        privateSub: function(t, e) {
                            if (!S(t)) throw new TypeError(d);
                            if (!v(e)) throw new TypeError(p);
                            const r = M(t),
                                n = M(e),
                                i = O(r.sub(n).umod(u));
                            return S(i) ? i : null
                        },
                        sign: function(t, e) {
                            return T(t, e)
                        },
                        signWithEntropy: function(t, e, r) {
                            return T(t, e, r)
                        },
                        verify: function(t, e, n, i) {
                            if (!g(t)) throw new TypeError(b);
                            if (!w(e)) throw new TypeError(l);
                            if (! function(t) {
                                    const e = t.slice(0, 32),
                                        n = t.slice(32, 64);
                                    return r.isBuffer(t) && 64 === t.length && e.compare(f) < 0 && n.compare(f) < 0
                                }(n)) throw new TypeError(m);
                            const o = A(e),
                                s = M(n.slice(0, 32)),
                                a = M(n.slice(32, 64));
                            if (i && a.cmp(c) > 0) return !1;
                            if (s.gtn(0) <= 0) return !1;
                            if (a.gtn(0) <= 0) return !1;
                            const d = M(t),
                                p = a.invm(u),
                                y = d.mul(p).umod(u),
                                v = s.mul(p).umod(u),
                                _ = h.mulAdd(y, o, v);
                            return !_.isInfinity() && _.x.umod(u).eq(s)
                        }
                    }
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, {
            "./rfc6979": 117,
            "bn.js": 43,
            buffer: 7,
            elliptic: 53
        }],
        117: [function(t, e, r) {
            (function(r) {
                (function() {
                    const n = t("create-hmac"),
                        i = r.alloc(1, 1),
                        o = r.alloc(1, 0);
                    e.exports = function(t, e, s, f, a) {
                        let u = r.alloc(32, 0),
                            c = r.alloc(32, 1);
                        u = n("sha256", u).update(c).update(o).update(e).update(t).update(a || "").digest(), c = n("sha256", u).update(c).digest(), u = n("sha256", u).update(c).update(i).update(e).update(t).update(a || "").digest(), c = n("sha256", u).update(c).digest();
                        let h = c = n("sha256", u).update(c).digest();
                        for (; !f(h) || !s(h);) u = n("sha256", u).update(c).update(o).digest(), c = n("sha256", u).update(c).digest(), h = c = n("sha256", u).update(c).digest();
                        return h
                    }
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, {
            buffer: 7,
            "create-hmac": 51
        }],
        118: [function(t, e, r) {
            var n = t("./native");

            function i(t) {
                return t.name || t.toString().match(/function (.*?)\s*\(/)[1]
            }

            function o(t) {
                return n.Nil(t) ? "" : i(t.constructor)
            }

            function s(t, e) {
                Error.captureStackTrace && Error.captureStackTrace(t, e)
            }

            function f(t) {
                return n.Function(t) ? t.toJSON ? t.toJSON() : i(t) : n.Array(t) ? "Array" : t && n.Object(t) ? "Object" : void 0 !== t ? t : ""
            }

            function a(t, e, r) {
                var i = function(t) {
                    return n.Function(t) ? "" : n.String(t) ? JSON.stringify(t) : t && n.Object(t) ? "" : t
                }(e);
                return "Expected " + f(t) + ", got" + ("" !== r ? " " + r : "") + ("" !== i ? " " + i : "")
            }

            function u(t, e, r) {
                r = r || o(e), this.message = a(t, e, r), s(this, u), this.__type = t, this.__value = e, this.__valueTypeName = r
            }

            function c(t, e, r, n, i) {
                t ? (i = i || o(n), this.message = function(t, e, r, n, i) {
                    var o = '" of type ';
                    return "key" === e && (o = '" with key type '), a('property "' + f(r) + o + f(t), n, i)
                }(t, r, e, n, i)) : this.message = 'Unexpected property "' + e + '"', s(this, u), this.__label = r, this.__property = e, this.__type = t, this.__value = n, this.__valueTypeName = i
            }
            u.prototype = Object.create(Error.prototype), u.prototype.constructor = u, c.prototype = Object.create(Error.prototype), c.prototype.constructor = u, e.exports = {
                TfTypeError: u,
                TfPropertyTypeError: c,
                tfCustomError: function(t, e) {
                    return new u(t, {}, e)
                },
                tfSubError: function(t, e, r) {
                    return t instanceof c ? (e = e + "." + t.__property, t = new c(t.__type, e, t.__label, t.__value, t.__valueTypeName)) : t instanceof u && (t = new c(t.__type, e, r, t.__value, t.__valueTypeName)), s(t), t
                },
                tfJSON: f,
                getValueTypeName: o
            }
        }, {
            "./native": 121
        }],
        119: [function(t, e, r) {
            (function(r) {
                (function() {
                    var n = t("./native"),
                        i = t("./errors");

                    function o(t) {
                        return r.isBuffer(t)
                    }

                    function s(t) {
                        return "string" == typeof t && /^([0-9a-f]{2})+$/i.test(t)
                    }

                    function f(t, e) {
                        var r = t.toJSON();

                        function n(n) {
                            if (!t(n)) return !1;
                            if (n.length === e) return !0;
                            throw i.tfCustomError(r + "(Length: " + e + ")", r + "(Length: " + n.length + ")")
                        }
                        return n.toJSON = function() {
                            return r
                        }, n
                    }
                    var a = f.bind(null, n.Array),
                        u = f.bind(null, o),
                        c = f.bind(null, s),
                        h = f.bind(null, n.String);
                    var d = Math.pow(2, 53) - 1;
                    var l = {
                        ArrayN: a,
                        Buffer: o,
                        BufferN: u,
                        Finite: function(t) {
                            return "number" == typeof t && isFinite(t)
                        },
                        Hex: s,
                        HexN: c,
                        Int8: function(t) {
                            return t << 24 >> 24 === t
                        },
                        Int16: function(t) {
                            return t << 16 >> 16 === t
                        },
                        Int32: function(t) {
                            return (0 | t) === t
                        },
                        Int53: function(t) {
                            return "number" == typeof t && t >= -d && t <= d && Math.floor(t) === t
                        },
                        Range: function(t, e, r) {
                            function i(n, i) {
                                return r(n, i) && n > t && n < e
                            }
                            return r = r || n.Number, i.toJSON = function() {
                                return `${r.toJSON()} between [${t}, ${e}]`
                            }, i
                        },
                        StringN: h,
                        UInt8: function(t) {
                            return (255 & t) === t
                        },
                        UInt16: function(t) {
                            return (65535 & t) === t
                        },
                        UInt32: function(t) {
                            return t >>> 0 === t
                        },
                        UInt53: function(t) {
                            return "number" == typeof t && t >= 0 && t <= d && Math.floor(t) === t
                        }
                    };
                    for (var p in l) l[p].toJSON = function(t) {
                        return t
                    }.bind(null, p);
                    e.exports = l
                }).call(this)
            }).call(this, {
                isBuffer: t("../../../../../../root/.nvm/versions/node/v16.9.1/lib/node_modules/browserify/node_modules/is-buffer/index.js")
            })
        }, {
            "../../../../../../root/.nvm/versions/node/v16.9.1/lib/node_modules/browserify/node_modules/is-buffer/index.js": 11,
            "./errors": 118,
            "./native": 121
        }],
        120: [function(t, e, r) {
            var n = t("./errors"),
                i = t("./native"),
                o = n.tfJSON,
                s = n.TfTypeError,
                f = n.TfPropertyTypeError,
                a = n.tfSubError,
                u = n.getValueTypeName,
                c = {
                    arrayOf: function(t, e) {
                        function r(r, n) {
                            return !!i.Array(r) && (!i.Nil(r) && (!(void 0 !== e.minLength && r.length < e.minLength) && (!(void 0 !== e.maxLength && r.length > e.maxLength) && ((void 0 === e.length || r.length === e.length) && r.every(function(e, r) {
                                try {
                                    return d(t, e, n)
                                } catch (t) {
                                    throw a(t, r)
                                }
                            })))))
                        }
                        return t = h(t), e = e || {}, r.toJSON = function() {
                            var r = "[" + o(t) + "]";
                            return void 0 !== e.length ? r += "{" + e.length + "}" : void 0 === e.minLength && void 0 === e.maxLength || (r += "{" + (void 0 === e.minLength ? 0 : e.minLength) + "," + (void 0 === e.maxLength ? 1 / 0 : e.maxLength) + "}"), r
                        }, r
                    },
                    maybe: function t(e) {
                        function r(r, n) {
                            return i.Nil(r) || e(r, n, t)
                        }
                        return e = h(e), r.toJSON = function() {
                            return "?" + o(e)
                        }, r
                    },
                    map: function(t, e) {
                        function r(r, n) {
                            if (!i.Object(r)) return !1;
                            if (i.Nil(r)) return !1;
                            for (var o in r) {
                                try {
                                    e && d(e, o, n)
                                } catch (t) {
                                    throw a(t, o, "key")
                                }
                                try {
                                    var s = r[o];
                                    d(t, s, n)
                                } catch (t) {
                                    throw a(t, o)
                                }
                            }
                            return !0
                        }
                        return t = h(t), e && (e = h(e)), r.toJSON = e ? function() {
                            return "{" + o(e) + ": " + o(t) + "}"
                        } : function() {
                            return "{" + o(t) + "}"
                        }, r
                    },
                    object: function(t) {
                        var e = {};
                        for (var r in t) e[r] = h(t[r]);

                        function n(t, r) {
                            if (!i.Object(t)) return !1;
                            if (i.Nil(t)) return !1;
                            var n;
                            try {
                                for (n in e) {
                                    d(e[n], t[n], r)
                                }
                            } catch (t) {
                                throw a(t, n)
                            }
                            if (r)
                                for (n in t)
                                    if (!e[n]) throw new f(void 0, n);
                            return !0
                        }
                        return n.toJSON = function() {
                            return o(e)
                        }, n
                    },
                    anyOf: function() {
                        var t = [].slice.call(arguments).map(h);

                        function e(e, r) {
                            return t.some(function(t) {
                                try {
                                    return d(t, e, r)
                                } catch (t) {
                                    return !1
                                }
                            })
                        }
                        return e.toJSON = function() {
                            return t.map(o).join("|")
                        }, e
                    },
                    allOf: function() {
                        var t = [].slice.call(arguments).map(h);

                        function e(e, r) {
                            return t.every(function(t) {
                                try {
                                    return d(t, e, r)
                                } catch (t) {
                                    return !1
                                }
                            })
                        }
                        return e.toJSON = function() {
                            return t.map(o).join(" & ")
                        }, e
                    },
                    quacksLike: function(t) {
                        function e(e) {
                            return t === u(e)
                        }
                        return e.toJSON = function() {
                            return t
                        }, e
                    },
                    tuple: function() {
                        var t = [].slice.call(arguments).map(h);

                        function e(e, r) {
                            return !i.Nil(e) && (!i.Nil(e.length) && ((!r || e.length === t.length) && t.every(function(t, n) {
                                try {
                                    return d(t, e[n], r)
                                } catch (t) {
                                    throw a(t, n)
                                }
                            })))
                        }
                        return e.toJSON = function() {
                            return "(" + t.map(o).join(", ") + ")"
                        }, e
                    },
                    value: function(t) {
                        function e(e) {
                            return e === t
                        }
                        return e.toJSON = function() {
                            return t
                        }, e
                    }
                };

            function h(t) {
                if (i.String(t)) return "?" === t[0] ? c.maybe(t.slice(1)) : i[t] || c.quacksLike(t);
                if (t && i.Object(t)) {
                    if (i.Array(t)) {
                        if (1 !== t.length) throw new TypeError("Expected compile() parameter of type Array of length 1");
                        return c.arrayOf(t[0])
                    }
                    return c.object(t)
                }
                return i.Function(t) ? t : c.value(t)
            }

            function d(t, e, r, n) {
                if (i.Function(t)) {
                    if (t(e, r)) return !0;
                    throw new s(n || t, e)
                }
                return d(h(t), e, r)
            }
            for (var l in c.oneOf = c.anyOf, i) d[l] = i[l];
            for (l in c) d[l] = c[l];
            var p = t("./extra");
            for (l in p) d[l] = p[l];
            d.compile = h, d.TfTypeError = s, d.TfPropertyTypeError = f, e.exports = d
        }, {
            "./errors": 118,
            "./extra": 119,
            "./native": 121
        }],
        121: [function(t, e, r) {
            var n = {
                Array: function(t) {
                    return null !== t && void 0 !== t && t.constructor === Array
                },
                Boolean: function(t) {
                    return "boolean" == typeof t
                },
                Function: function(t) {
                    return "function" == typeof t
                },
                Nil: function(t) {
                    return void 0 === t || null === t
                },
                Number: function(t) {
                    return "number" == typeof t
                },
                Object: function(t) {
                    return "object" == typeof t
                },
                String: function(t) {
                    return "string" == typeof t
                },
                "": function() {
                    return !0
                }
            };
            for (var i in n.Null = n.Nil, n) n[i].toJSON = function(t) {
                return t
            }.bind(null, i);
            e.exports = n
        }, {}],
        122: [function(t, e, r) {
            arguments[4][31][0].apply(r, arguments)
        }, {
            dup: 31
        }],
        123: [function(t, e, r) {
            "use strict";
            var n = t("safe-buffer").Buffer,
                i = 9007199254740991;

            function o(t) {
                if (t < 0 || t > i || t % 1 != 0) throw new RangeError("value out of range")
            }

            function s(t) {
                return o(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9
            }
            e.exports = {
                encode: function t(e, r, i) {
                    if (o(e), r || (r = n.allocUnsafe(s(e))), !n.isBuffer(r)) throw new TypeError("buffer must be a Buffer instance");
                    return i || (i = 0), e < 253 ? (r.writeUInt8(e, i), t.bytes = 1) : e <= 65535 ? (r.writeUInt8(253, i), r.writeUInt16LE(e, i + 1), t.bytes = 3) : e <= 4294967295 ? (r.writeUInt8(254, i), r.writeUInt32LE(e, i + 1), t.bytes = 5) : (r.writeUInt8(255, i), r.writeUInt32LE(e >>> 0, i + 1), r.writeUInt32LE(e / 4294967296 | 0, i + 5), t.bytes = 9), r
                },
                decode: function t(e, r) {
                    if (!n.isBuffer(e)) throw new TypeError("buffer must be a Buffer instance");
                    r || (r = 0);
                    var i = e.readUInt8(r);
                    if (i < 253) return t.bytes = 1, i;
                    if (253 === i) return t.bytes = 3, e.readUInt16LE(r + 1);
                    if (254 === i) return t.bytes = 5, e.readUInt32LE(r + 1);
                    t.bytes = 9;
                    var s = e.readUInt32LE(r + 1),
                        f = 4294967296 * e.readUInt32LE(r + 5) + s;
                    return o(f), f
                },
                encodingLength: s
            }
        }, {
            "safe-buffer": 106
        }],
        124: [function(t, e, r) {
            (function(r) {
                (function() {
                    var n = t("bs58check");

                    function i(t, e) {
                        if (void 0 !== e && t[0] !== e) throw new Error("Invalid network version");
                        if (33 === t.length) return {
                            version: t[0],
                            privateKey: t.slice(1, 33),
                            compressed: !1
                        };
                        if (34 !== t.length) throw new Error("Invalid WIF length");
                        if (1 !== t[33]) throw new Error("Invalid compression flag");
                        return {
                            version: t[0],
                            privateKey: t.slice(1, 33),
                            compressed: !0
                        }
                    }

                    function o(t, e, n) {
                        var i = new r(n ? 34 : 33);
                        return i.writeUInt8(t, 0), e.copy(i, 1), n && (i[33] = 1), i
                    }
                    e.exports = {
                        decode: function(t, e) {
                            return i(n.decode(t), e)
                        },
                        decodeRaw: i,
                        encode: function(t, e, r) {
                            return "number" == typeof t ? n.encode(o(t, e, r)) : n.encode(o(t.version, t.privateKey, t.compressed))
                        },
                        encodeRaw: o
                    }
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, {
            bs58check: 47,
            buffer: 7
        }],
        125: [function(t, e, r) {
            const n = t("safe-buffer").Buffer,
                i = t("bech32"),
                o = t("bs58check"),
                s = t("./script"),
                f = t("./networks"),
                a = t("typeforce"),
                u = t("./types"),
                c = t("./payments");

            function h(t) {
                const e = o.decode(t);
                if (e.length < 21) throw new TypeError(t + " is too short");
                if (e.length > 21) throw new TypeError(t + " is too long");
                return {
                    version: e.readUInt8(0),
                    hash: e.slice(1)
                }
            }

            function d(t) {
                const e = i.decode(t),
                    r = i.fromWords(e.words.slice(1));
                return {
                    version: e.words[0],
                    prefix: e.prefix,
                    data: n.from(r)
                }
            }
            e.exports = {
                fromBase58Check: h,
                fromBech32: d,
                fromOutputScript: function(t, e) {
                    e = e || f.bitcoin;
                    try {
                        return c.p2pkh({
                            output: t,
                            network: e
                        }).address
                    } catch (t) {}
                    try {
                        return c.p2sh({
                            output: t,
                            network: e
                        }).address
                    } catch (t) {}
                    try {
                        return c.p2wpkh({
                            output: t,
                            network: e
                        }).address
                    } catch (t) {}
                    try {
                        return c.p2wsh({
                            output: t,
                            network: e
                        }).address
                    } catch (t) {}
                    throw new Error(s.toASM(t) + " has no matching Address")
                },
                toBase58Check: function(t, e) {
                    a(u.tuple(u.Hash160bit, u.UInt8), arguments);
                    const r = n.allocUnsafe(21);
                    return r.writeUInt8(e, 0), t.copy(r, 1), o.encode(r)
                },
                toBech32: function(t, e, r) {
                    const n = i.toWords(t);
                    return n.unshift(e), i.encode(r, n)
                },
                toOutputScript: function(t, e) {
                    let r;
                    e = e || f.bitcoin;
                    try {
                        r = h(t)
                    } catch (t) {}
                    if (r) {
                        if (r.version === e.pubKeyHash) return c.p2pkh({
                            hash: r.hash
                        }).output;
                        if (r.version === e.scriptHash) return c.p2sh({
                            hash: r.hash
                        }).output
                    } else {
                        try {
                            r = d(t)
                        } catch (t) {}
                        if (r) {
                            if (r.prefix !== e.bech32) throw new Error(t + " has an invalid prefix");
                            if (0 === r.version) {
                                if (20 === r.data.length) return c.p2wpkh({
                                    hash: r.data
                                }).output;
                                if (32 === r.data.length) return c.p2wsh({
                                    hash: r.data
                                }).output
                            }
                        }
                    }
                    throw new Error(t + " has no matching Script")
                }
            }
        }, {
            "./networks": 131,
            "./payments": 133,
            "./script": 141,
            "./types": 167,
            bech32: 33,
            bs58check: 47,
            "safe-buffer": 106,
            typeforce: 120
        }],
        126: [function(t, e, r) {
            const n = t("safe-buffer").Buffer,
                i = t("./crypto"),
                o = t("merkle-lib/fastRoot"),
                s = t("typeforce"),
                f = t("./types"),
                a = t("varuint-bitcoin"),
                u = t("./transaction");

            function c() {
                this.version = 1, this.prevHash = null, this.merkleRoot = null, this.timestamp = 0, this.bits = 0, this.nonce = 0
            }
            c.fromBuffer = function(t) {
                if (t.length < 80) throw new Error("Buffer too small (< 80 bytes)");
                let e = 0;

                function r(r) {
                    return e += r, t.slice(e - r, e)
                }

                function n() {
                    const r = t.readUInt32LE(e);
                    return e += 4, r
                }
                const i = new c;
                if (i.version = function() {
                        const r = t.readInt32LE(e);
                        return e += 4, r
                    }(), i.prevHash = r(32), i.merkleRoot = r(32), i.timestamp = n(), i.bits = n(), i.nonce = n(), 80 === t.length) return i;

                function o() {
                    const r = u.fromBuffer(t.slice(e), !0);
                    return e += r.byteLength(), r
                }
                const s = function() {
                    const r = a.decode(t, e);
                    return e += a.decode.bytes, r
                }();
                i.transactions = [];
                for (var f = 0; f < s; ++f) {
                    const t = o();
                    i.transactions.push(t)
                }
                return i
            }, c.prototype.byteLength = function(t) {
                return t || !this.transactions ? 80 : 80 + a.encodingLength(this.transactions.length) + this.transactions.reduce(function(t, e) {
                    return t + e.byteLength()
                }, 0)
            }, c.fromHex = function(t) {
                return c.fromBuffer(n.from(t, "hex"))
            }, c.prototype.getHash = function() {
                return i.hash256(this.toBuffer(!0))
            }, c.prototype.getId = function() {
                return this.getHash().reverse().toString("hex")
            }, c.prototype.getUTCDate = function() {
                const t = new Date(0);
                return t.setUTCSeconds(this.timestamp), t
            }, c.prototype.toBuffer = function(t) {
                const e = n.allocUnsafe(this.byteLength(t));
                let r = 0;

                function i(t) {
                    t.copy(e, r), r += t.length
                }

                function o(t) {
                    e.writeUInt32LE(t, r), r += 4
                }
                var s;
                return s = this.version, e.writeInt32LE(s, r), r += 4, i(this.prevHash), i(this.merkleRoot), o(this.timestamp), o(this.bits), o(this.nonce), t || !this.transactions ? e : (a.encode(this.transactions.length, e, r), r += a.encode.bytes, this.transactions.forEach(function(t) {
                    const n = t.byteLength();
                    t.toBuffer(e, r), r += n
                }), e)
            }, c.prototype.toHex = function(t) {
                return this.toBuffer(t).toString("hex")
            }, c.calculateTarget = function(t) {
                const e = ((4278190080 & t) >> 24) - 3,
                    r = 8388607 & t,
                    i = n.alloc(32, 0);
                return i.writeUInt32BE(r, 28 - e), i
            }, c.calculateMerkleRoot = function(t) {
                if (s([{
                        getHash: f.Function
                    }], t), 0 === t.length) throw TypeError("Cannot compute merkle root for zero transactions");
                const e = t.map(function(t) {
                    return t.getHash()
                });
                return o(e, i.hash256)
            }, c.prototype.checkMerkleRoot = function() {
                if (!this.transactions) return !1;
                const t = c.calculateMerkleRoot(this.transactions);
                return 0 === this.merkleRoot.compare(t)
            }, c.prototype.checkProofOfWork = function() {
                const t = this.getHash().reverse(),
                    e = c.calculateTarget(this.bits);
                return t.compare(e) <= 0
            }, e.exports = c
        }, {
            "./crypto": 129,
            "./transaction": 165,
            "./types": 167,
            "merkle-lib/fastRoot": 85,
            "safe-buffer": 106,
            typeforce: 120,
            "varuint-bitcoin": 123
        }],
        127: [function(t, e, r) {
            function n(t, e) {
                if ("number" != typeof t) throw new Error("cannot write a non-number as a number");
                if (t < 0) throw new Error("specified a negative value for writing an unsigned value");
                if (t > e) throw new Error("RangeError: value out of range");
                if (Math.floor(t) !== t) throw new Error("value has a fractional component")
            }
            e.exports = {
                readUInt64LE: function(t, e) {
                    const r = t.readUInt32LE(e);
                    let i = t.readUInt32LE(e + 4);
                    return n((i *= 4294967296) + r, 9007199254740991), i + r
                },
                writeUInt64LE: function(t, e, r) {
                    return n(e, 9007199254740991), t.writeInt32LE(-1 & e, r), t.writeUInt32LE(Math.floor(e / 4294967296), r + 4), r + 8
                }
            }
        }, {}],
        128: [function(t, e, r) {
            const n = t("./script").decompile,
                i = t("./templates/multisig"),
                o = t("./templates/nulldata"),
                s = t("./templates/pubkey"),
                f = t("./templates/pubkeyhash"),
                a = t("./templates/scripthash"),
                u = t("./templates/witnesspubkeyhash"),
                c = t("./templates/witnessscripthash"),
                h = t("./templates/witnesscommitment"),
                d = {
                    P2MS: "multisig",
                    NONSTANDARD: "nonstandard",
                    NULLDATA: "nulldata",
                    P2PK: "pubkey",
                    P2PKH: "pubkeyhash",
                    P2SH: "scripthash",
                    P2WPKH: "witnesspubkeyhash",
                    P2WSH: "witnessscripthash",
                    WITNESS_COMMITMENT: "witnesscommitment"
                };
            e.exports = {
                input: function(t, e) {
                    const r = n(t);
                    if (!r) throw new TypeError("Invalid script");
                    return f.input.check(r) ? d.P2PKH : a.input.check(r, e) ? d.P2SH : i.input.check(r, e) ? d.P2MS : s.input.check(r) ? d.P2PK : d.NONSTANDARD
                },
                output: function(t) {
                    if (u.output.check(t)) return d.P2WPKH;
                    if (c.output.check(t)) return d.P2WSH;
                    if (f.output.check(t)) return d.P2PKH;
                    if (a.output.check(t)) return d.P2SH;
                    const e = n(t);
                    if (!e) throw new TypeError("Invalid script");
                    return i.output.check(e) ? d.P2MS : s.output.check(e) ? d.P2PK : h.output.check(e) ? d.WITNESS_COMMITMENT : o.output.check(e) ? d.NULLDATA : d.NONSTANDARD
                },
                witness: function(t, e) {
                    const r = n(t);
                    if (!r) throw new TypeError("Invalid script");
                    return u.input.check(r) ? d.P2WPKH : c.input.check(r, e) ? d.P2WSH : d.NONSTANDARD
                },
                types: d
            }
        }, {
            "./script": 141,
            "./templates/multisig": 144,
            "./templates/nulldata": 147,
            "./templates/pubkey": 148,
            "./templates/pubkeyhash": 151,
            "./templates/scripthash": 154,
            "./templates/witnesscommitment": 157,
            "./templates/witnesspubkeyhash": 159,
            "./templates/witnessscripthash": 162
        }],
        129: [function(t, e, r) {
            const n = t("create-hash");

            function i(t) {
                return n("rmd160").update(t).digest()
            }

            function o(t) {
                return n("sha256").update(t).digest()
            }
            e.exports = {
                hash160: function(t) {
                    return i(o(t))
                },
                hash256: function(t) {
                    return o(o(t))
                },
                ripemd160: i,
                sha1: function(t) {
                    return n("sha1").update(t).digest()
                },
                sha256: o
            }
        }, {
            "create-hash": 49
        }],
        130: [function(t, e, r) {
            const n = t("tiny-secp256k1"),
                i = t("randombytes"),
                o = t("typeforce"),
                s = t("./types"),
                f = t("wif"),
                a = t("./networks"),
                u = o.maybe(o.compile({
                    compressed: s.maybe(s.Boolean),
                    network: s.maybe(s.Network)
                }));

            function c(t, e, r) {
                r = r || {}, this.compressed = void 0 === r.compressed || r.compressed, this.network = r.network || a.bitcoin, this.__d = t || null, this.__Q = null, e && (this.__Q = n.pointCompress(e, this.compressed))
            }

            function h(t, e) {
                if (o(s.Buffer256bit, t), !n.isPrivate(t)) throw new TypeError("Private key not in range [1, n)");
                return o(u, e), new c(t, null, e)
            }
            Object.defineProperty(c.prototype, "privateKey", {
                enumerable: !1,
                get: function() {
                    return this.__d
                }
            }), Object.defineProperty(c.prototype, "publicKey", {
                get: function() {
                    return this.__Q || (this.__Q = n.pointFromScalar(this.__d, this.compressed)), this.__Q
                }
            }), c.prototype.toWIF = function() {
                if (!this.__d) throw new Error("Missing private key");
                return f.encode(this.network.wif, this.__d, this.compressed)
            }, c.prototype.sign = function(t) {
                if (!this.__d) throw new Error("Missing private key");
                return n.sign(t, this.__d)
            }, c.prototype.verify = function(t, e) {
                return n.verify(t, this.publicKey, e)
            }, e.exports = {
                makeRandom: function(t) {
                    o(u, t);
                    const e = (t = t || {}).rng || i;
                    let r;
                    do {
                        r = e(32), o(s.Buffer256bit, r)
                    } while (!n.isPrivate(r));
                    return h(r, t)
                },
                fromPrivateKey: h,
                fromPublicKey: function(t, e) {
                    return o(n.isPoint, t), o(u, e), new c(null, t, e)
                },
                fromWIF: function(t, e) {
                    const r = f.decode(t),
                        n = r.version;
                    if (s.Array(e)) {
                        if (!(e = e.filter(function(t) {
                                return n === t.wif
                            }).pop())) throw new Error("Unknown network version")
                    } else if (e = e || a.bitcoin, n !== e.wif) throw new Error("Invalid network version");
                    return h(r.privateKey, {
                        compressed: r.compressed,
                        network: e
                    })
                }
            }
        }, {
            "./networks": 131,
            "./types": 167,
            randombytes: 89,
            "tiny-secp256k1": 116,
            typeforce: 120,
            wif: 124
        }],
        131: [function(t, e, r) {
            e.exports = {
                bitcoingold: {
                    messagePrefix: "Bitcoin Gold Signed Message:\n",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 38,
                    scriptHash: 23,
                    wif: 128
                },
                bitcoin: {
                    messagePrefix: "Bitcoin Signed Message:\n",
                    bech32: "bc",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 0,
                    scriptHash: 5,
                    wif: 128
                },
                testnet: {
                    messagePrefix: "Bitcoin Signed Message:\n",
                    bech32: "tb",
                    bip32: {
                        public: 70617039,
                        private: 70615956
                    },
                    pubKeyHash: 111,
                    scriptHash: 196,
                    wif: 239
                }
            }
        }, {}],
        132: [function(t, e, r) {
            const n = t("./lazy"),
                i = t("typeforce"),
                o = t("bitcoin-ops"),
                s = t("../script"),
                f = t("../networks").bitcoin;
            e.exports = function(t, e) {
                if (!t.data && !t.output) throw new TypeError("Not enough data");
                e = Object.assign({
                    validate: !0
                }, e || {}), i({
                    network: i.maybe(i.Object),
                    output: i.maybe(i.Buffer),
                    data: i.maybe(i.arrayOf(i.Buffer))
                }, t);
                const r = {
                    network: t.network || f
                };
                if (n.prop(r, "output", function() {
                        if (t.data) return s.compile([o.OP_RETURN].concat(t.data))
                    }), n.prop(r, "data", function() {
                        if (t.output) return s.decompile(t.output).slice(1)
                    }), e.validate && t.output) {
                    const e = s.decompile(t.output);
                    if (e[0] !== o.OP_RETURN) throw new TypeError("Output is invalid");
                    if (!e.slice(1).every(i.Buffer)) throw new TypeError("Output is invalid");
                    if (t.data && ! function(t, e) {
                            return t.length === e.length && t.every(function(t, r) {
                                return t.equals(e[r])
                            })
                        }(t.data, r.data)) throw new TypeError("Data mismatch")
                }
                return Object.assign(r, t)
            }
        }, {
            "../networks": 131,
            "../script": 141,
            "./lazy": 134,
            "bitcoin-ops": 41,
            typeforce: 120
        }],
        133: [function(t, e, r) {
            const n = t("./embed"),
                i = t("./p2ms"),
                o = t("./p2pk"),
                s = t("./p2pkh"),
                f = t("./p2sh"),
                a = t("./p2wpkh"),
                u = t("./p2wsh");
            e.exports = {
                embed: n,
                p2ms: i,
                p2pk: o,
                p2pkh: s,
                p2sh: f,
                p2wpkh: a,
                p2wsh: u
            }
        }, {
            "./embed": 132,
            "./p2ms": 135,
            "./p2pk": 136,
            "./p2pkh": 137,
            "./p2sh": 138,
            "./p2wpkh": 139,
            "./p2wsh": 140
        }],
        134: [function(t, e, r) {
            e.exports = {
                prop: function(t, e, r) {
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            let t = r.call(this);
                            return this[e] = t, t
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                configurable: !0,
                                enumerable: !0,
                                value: t,
                                writable: !0
                            })
                        }
                    })
                },
                value: function(t) {
                    let e;
                    return function() {
                        return void 0 !== e ? e : e = t()
                    }
                }
            }
        }, {}],
        135: [function(t, e, r) {
            const n = t("./lazy"),
                i = t("typeforce"),
                o = t("bitcoin-ops"),
                s = t("tiny-secp256k1"),
                f = t("../script"),
                a = t("../networks").bitcoin,
                u = o.OP_RESERVED;

            function c(t, e) {
                return t.length === e.length && t.every(function(t, r) {
                    return t.equals(e[r])
                })
            }
            e.exports = function(t, e) {
                if (!(t.input || t.output || t.pubkeys && void 0 !== t.m || t.signatures)) throw new TypeError("Not enough data");

                function r(t) {
                    return f.isCanonicalScriptSignature(t) || e.allowIncomplete && t === o.OP_0
                }
                e = Object.assign({
                    validate: !0
                }, e || {}), i({
                    network: i.maybe(i.Object),
                    m: i.maybe(i.Number),
                    n: i.maybe(i.Number),
                    output: i.maybe(i.Buffer),
                    pubkeys: i.maybe(i.arrayOf(s.isPoint)),
                    signatures: i.maybe(i.arrayOf(r)),
                    input: i.maybe(i.Buffer)
                }, t);
                const h = {
                    network: t.network || a
                };
                let d, l = !1;

                function p(t) {
                    l || (l = !0, d = f.decompile(t), h.m = d[0] - u, h.n = d[d.length - 2] - u, h.pubkeys = d.slice(1, -2))
                }
                if (n.prop(h, "output", function() {
                        if (t.m && h.n && t.pubkeys) return f.compile([].concat(u + t.m, t.pubkeys, u + h.n, o.OP_CHECKMULTISIG))
                    }), n.prop(h, "m", function() {
                        if (h.output) return p(h.output), h.m
                    }), n.prop(h, "n", function() {
                        if (h.pubkeys) return h.pubkeys.length
                    }), n.prop(h, "pubkeys", function() {
                        if (t.output) return p(t.output), h.pubkeys
                    }), n.prop(h, "signatures", function() {
                        if (t.input) return f.decompile(t.input).slice(1)
                    }), n.prop(h, "input", function() {
                        if (t.signatures) return f.compile([o.OP_0].concat(t.signatures))
                    }), n.prop(h, "witness", function() {
                        if (h.input) return []
                    }), e.validate) {
                    if (t.output) {
                        if (p(t.output), !i.Number(d[0])) throw new TypeError("Output is invalid");
                        if (!i.Number(d[d.length - 2])) throw new TypeError("Output is invalid");
                        if (d[d.length - 1] !== o.OP_CHECKMULTISIG) throw new TypeError("Output is invalid");
                        if (h.m <= 0 || h.n > 16 || h.m > h.n || h.n !== d.length - 3) throw new TypeError("Output is invalid");
                        if (!h.pubkeys.every(t => s.isPoint(t))) throw new TypeError("Output is invalid");
                        if (void 0 !== t.m && t.m !== h.m) throw new TypeError("m mismatch");
                        if (void 0 !== t.n && t.n !== h.n) throw new TypeError("n mismatch");
                        if (t.pubkeys && !c(t.pubkeys, h.pubkeys)) throw new TypeError("Pubkeys mismatch")
                    }
                    if (t.pubkeys) {
                        if (void 0 !== t.n && t.n !== t.pubkeys.length) throw new TypeError("Pubkey count mismatch");
                        if (h.n = t.pubkeys.length, h.n < h.m) throw new TypeError("Pubkey count cannot be less than m")
                    }
                    if (t.signatures) {
                        if (t.signatures.length < h.m) throw new TypeError("Not enough signatures provided");
                        if (t.signatures.length > h.m) throw new TypeError("Too many signatures provided")
                    }
                    if (t.input) {
                        if (t.input[0] !== o.OP_0) throw new TypeError("Input is invalid");
                        if (0 === h.signatures.length || !h.signatures.every(r)) throw new TypeError("Input has invalid signature(s)");
                        if (t.signatures && !c(t.signatures.equals(h.signatures))) throw new TypeError("Signature mismatch");
                        if (void 0 !== t.m && t.m !== t.signatures.length) throw new TypeError("Signature count mismatch")
                    }
                }
                return Object.assign(h, t)
            }
        }, {
            "../networks": 131,
            "../script": 141,
            "./lazy": 134,
            "bitcoin-ops": 41,
            "tiny-secp256k1": 116,
            typeforce: 120
        }],
        136: [function(t, e, r) {
            const n = t("./lazy"),
                i = t("typeforce"),
                o = t("bitcoin-ops"),
                s = t("tiny-secp256k1"),
                f = t("../script"),
                a = t("../networks").bitcoin;
            e.exports = function(t, e) {
                if (!(t.input || t.output || t.pubkey || t.input || t.signature)) throw new TypeError("Not enough data");
                e = Object.assign({
                    validate: !0
                }, e || {}), i({
                    network: i.maybe(i.Object),
                    output: i.maybe(i.Buffer),
                    pubkey: i.maybe(s.isPoint),
                    signature: i.maybe(f.isCanonicalScriptSignature),
                    input: i.maybe(i.Buffer)
                }, t);
                const r = n.value(function() {
                        return f.decompile(t.input)
                    }),
                    u = {
                        network: t.network || a
                    };
                if (n.prop(u, "output", function() {
                        if (t.pubkey) return f.compile([t.pubkey, o.OP_CHECKSIG])
                    }), n.prop(u, "pubkey", function() {
                        if (t.output) return t.output.slice(1, -1)
                    }), n.prop(u, "signature", function() {
                        if (t.input) return r()[0]
                    }), n.prop(u, "input", function() {
                        if (t.signature) return f.compile([t.signature])
                    }), n.prop(u, "witness", function() {
                        if (u.input) return []
                    }), e.validate) {
                    if (t.output) {
                        if (t.output[t.output.length - 1] !== o.OP_CHECKSIG) throw new TypeError("Output is invalid");
                        if (!s.isPoint(u.pubkey)) throw new TypeError("Output pubkey is invalid");
                        if (t.pubkey && !t.pubkey.equals(u.pubkey)) throw new TypeError("Pubkey mismatch")
                    }
                    if (t.signature && t.input && !t.input.equals(u.input)) throw new TypeError("Signature mismatch");
                    if (t.input) {
                        if (1 !== r().length) throw new TypeError("Input is invalid");
                        if (!f.isCanonicalScriptSignature(u.signature)) throw new TypeError("Input has invalid signature")
                    }
                }
                return Object.assign(u, t)
            }
        }, {
            "../networks": 131,
            "../script": 141,
            "./lazy": 134,
            "bitcoin-ops": 41,
            "tiny-secp256k1": 116,
            typeforce: 120
        }],
        137: [function(t, e, r) {
            (function(r) {
                (function() {
                    const n = t("./lazy"),
                        i = t("typeforce"),
                        o = t("bitcoin-ops"),
                        s = t("tiny-secp256k1"),
                        f = t("../crypto"),
                        a = t("../script"),
                        u = t("../networks").bitcoin,
                        c = t("bs58check");
                    e.exports = function(t, e) {
                        if (!(t.address || t.hash || t.output || t.pubkey || t.input)) throw new TypeError("Not enough data");
                        e = Object.assign({
                            validate: !0
                        }, e || {}), i({
                            network: i.maybe(i.Object),
                            address: i.maybe(i.String),
                            hash: i.maybe(i.BufferN(20)),
                            output: i.maybe(i.BufferN(25)),
                            pubkey: i.maybe(s.isPoint),
                            signature: i.maybe(a.isCanonicalScriptSignature),
                            input: i.maybe(i.Buffer)
                        }, t);
                        const h = n.value(function() {
                                const e = c.decode(t.address);
                                return {
                                    version: e.readUInt8(0),
                                    hash: e.slice(1)
                                }
                            }),
                            d = n.value(function() {
                                return a.decompile(t.input)
                            }),
                            l = t.network || u,
                            p = {
                                network: l
                            };
                        if (n.prop(p, "address", function() {
                                if (!p.hash) return;
                                const t = r.allocUnsafe(21);
                                return t.writeUInt8(l.pubKeyHash, 0), p.hash.copy(t, 1), c.encode(t)
                            }), n.prop(p, "hash", function() {
                                return t.output ? t.output.slice(3, 23) : t.address ? h().hash : t.pubkey || p.pubkey ? f.hash160(t.pubkey || p.pubkey) : void 0
                            }), n.prop(p, "output", function() {
                                if (p.hash) return a.compile([o.OP_DUP, o.OP_HASH160, p.hash, o.OP_EQUALVERIFY, o.OP_CHECKSIG])
                            }), n.prop(p, "pubkey", function() {
                                if (t.input) return d()[1]
                            }), n.prop(p, "signature", function() {
                                if (t.input) return d()[0]
                            }), n.prop(p, "input", function() {
                                if (t.pubkey && t.signature) return a.compile([t.signature, t.pubkey])
                            }), n.prop(p, "witness", function() {
                                if (p.input) return []
                            }), e.validate) {
                            let e;
                            if (t.address) {
                                if (h().version !== l.pubKeyHash) throw new TypeError("Invalid version or Network mismatch");
                                if (20 !== h().hash.length) throw new TypeError("Invalid address");
                                e = h().hash
                            }
                            if (t.hash) {
                                if (e && !e.equals(t.hash)) throw new TypeError("Hash mismatch");
                                e = t.hash
                            }
                            if (t.output) {
                                if (25 !== t.output.length || t.output[0] !== o.OP_DUP || t.output[1] !== o.OP_HASH160 || 20 !== t.output[2] || t.output[23] !== o.OP_EQUALVERIFY || t.output[24] !== o.OP_CHECKSIG) throw new TypeError("Output is invalid");
                                const r = t.output.slice(3, 23);
                                if (e && !e.equals(r)) throw new TypeError("Hash mismatch");
                                e = r
                            }
                            if (t.pubkey) {
                                const r = f.hash160(t.pubkey);
                                if (e && !e.equals(r)) throw new TypeError("Hash mismatch");
                                e = r
                            }
                            if (t.input) {
                                const r = d();
                                if (2 !== r.length) throw new TypeError("Input is invalid");
                                if (!a.isCanonicalScriptSignature(r[0])) throw new TypeError("Input has invalid signature");
                                if (!s.isPoint(r[1])) throw new TypeError("Input has invalid pubkey");
                                if (t.signature && !t.signature.equals(r[0])) throw new TypeError("Signature mismatch");
                                if (t.pubkey && !t.pubkey.equals(r[1])) throw new TypeError("Pubkey mismatch");
                                const n = f.hash160(r[1]);
                                if (e && !e.equals(n)) throw new TypeError("Hash mismatch")
                            }
                        }
                        return Object.assign(p, t)
                    }
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, {
            "../crypto": 129,
            "../networks": 131,
            "../script": 141,
            "./lazy": 134,
            "bitcoin-ops": 41,
            bs58check: 47,
            buffer: 7,
            "tiny-secp256k1": 116,
            typeforce: 120
        }],
        138: [function(t, e, r) {
            (function(r) {
                (function() {
                    const n = t("./lazy"),
                        i = t("typeforce"),
                        o = t("bitcoin-ops"),
                        s = t("../crypto"),
                        f = t("../script"),
                        a = t("../networks").bitcoin,
                        u = t("bs58check");
                    e.exports = function(t, e) {
                        if (!(t.address || t.hash || t.output || t.redeem || t.input)) throw new TypeError("Not enough data");
                        e = Object.assign({
                            validate: !0
                        }, e || {}), i({
                            network: i.maybe(i.Object),
                            address: i.maybe(i.String),
                            hash: i.maybe(i.BufferN(20)),
                            output: i.maybe(i.BufferN(23)),
                            redeem: i.maybe({
                                network: i.maybe(i.Object),
                                output: i.maybe(i.Buffer),
                                input: i.maybe(i.Buffer),
                                witness: i.maybe(i.arrayOf(i.Buffer))
                            }),
                            input: i.maybe(i.Buffer),
                            witness: i.maybe(i.arrayOf(i.Buffer))
                        }, t);
                        let c = t.network;
                        c || (c = t.redeem && t.redeem.network || a);
                        const h = {
                                network: c
                            },
                            d = n.value(function() {
                                const e = u.decode(t.address);
                                return {
                                    version: e.readUInt8(0),
                                    hash: e.slice(1)
                                }
                            }),
                            l = n.value(function() {
                                return f.decompile(t.input)
                            }),
                            p = n.value(function() {
                                const e = l();
                                return {
                                    network: c,
                                    output: e[e.length - 1],
                                    input: f.compile(e.slice(0, -1)),
                                    witness: t.witness || []
                                }
                            });
                        if (n.prop(h, "address", function() {
                                if (!h.hash) return;
                                const t = r.allocUnsafe(21);
                                return t.writeUInt8(c.scriptHash, 0), h.hash.copy(t, 1), u.encode(t)
                            }), n.prop(h, "hash", function() {
                                return t.output ? t.output.slice(2, 22) : t.address ? d().hash : h.redeem && h.redeem.output ? s.hash160(h.redeem.output) : void 0
                            }), n.prop(h, "output", function() {
                                if (h.hash) return f.compile([o.OP_HASH160, h.hash, o.OP_EQUAL])
                            }), n.prop(h, "redeem", function() {
                                if (t.input) return p()
                            }), n.prop(h, "input", function() {
                                if (t.redeem && t.redeem.input && t.redeem.output) return f.compile([].concat(f.decompile(t.redeem.input), t.redeem.output))
                            }), n.prop(h, "witness", function() {
                                return h.redeem && h.redeem.witness ? h.redeem.witness : h.input ? [] : void 0
                            }), e.validate) {
                            let e;
                            if (t.address) {
                                if (d().version !== c.scriptHash) throw new TypeError("Invalid version or Network mismatch");
                                if (20 !== d().hash.length) throw new TypeError("Invalid address");
                                e = d().hash
                            }
                            if (t.hash) {
                                if (e && !e.equals(t.hash)) throw new TypeError("Hash mismatch");
                                e = t.hash
                            }
                            if (t.output) {
                                if (23 !== t.output.length || t.output[0] !== o.OP_HASH160 || 20 !== t.output[1] || t.output[22] !== o.OP_EQUAL) throw new TypeError("Output is invalid");
                                const r = t.output.slice(2, 22);
                                if (e && !e.equals(r)) throw new TypeError("Hash mismatch");
                                e = r
                            }
                            const n = function(t) {
                                if (t.output) {
                                    const r = f.decompile(t.output);
                                    if (!r || r.length < 1) throw new TypeError("Redeem.output too short");
                                    const n = s.hash160(t.output);
                                    if (e && !e.equals(n)) throw new TypeError("Hash mismatch");
                                    e = n
                                }
                                if (t.input) {
                                    const e = t.input.length > 0,
                                        r = t.witness && t.witness.length > 0;
                                    if (!e && !r) throw new TypeError("Empty input");
                                    if (e && r) throw new TypeError("Input and witness provided");
                                    if (e) {
                                        const e = f.decompile(t.input);
                                        if (!f.isPushOnly(e)) throw new TypeError("Non push-only scriptSig")
                                    }
                                }
                            };
                            if (t.input) {
                                const t = l();
                                if (!t || t.length < 1) throw new TypeError("Input too short");
                                if (!r.isBuffer(p().output)) throw new TypeError("Input is invalid");
                                n(p())
                            }
                            if (t.redeem) {
                                if (t.redeem.network && t.redeem.network !== c) throw new TypeError("Network mismatch");
                                if (t.input) {
                                    const e = p();
                                    if (t.redeem.output && !t.redeem.output.equals(e.output)) throw new TypeError("Redeem.output mismatch");
                                    if (t.redeem.input && !t.redeem.input.equals(e.input)) throw new TypeError("Redeem.input mismatch")
                                }
                                n(t.redeem)
                            }
                            if (t.witness && t.redeem && t.redeem.witness && ! function(t, e) {
                                    return t.length === e.length && t.every(function(t, r) {
                                        return t.equals(e[r])
                                    })
                                }(t.redeem.witness, t.witness)) throw new TypeError("Witness and redeem.witness mismatch")
                        }
                        return Object.assign(h, t)
                    }
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, {
            "../crypto": 129,
            "../networks": 131,
            "../script": 141,
            "./lazy": 134,
            "bitcoin-ops": 41,
            bs58check: 47,
            buffer: 7,
            typeforce: 120
        }],
        139: [function(t, e, r) {
            (function(r) {
                (function() {
                    const n = t("./lazy"),
                        i = t("typeforce"),
                        o = t("bitcoin-ops"),
                        s = t("tiny-secp256k1"),
                        f = t("../crypto"),
                        a = t("bech32"),
                        u = t("../script"),
                        c = t("../networks").bitcoin,
                        h = r.alloc(0);
                    e.exports = function(t, e) {
                        if (!(t.address || t.hash || t.output || t.pubkey || t.witness)) throw new TypeError("Not enough data");
                        e = Object.assign({
                            validate: !0
                        }, e || {}), i({
                            address: i.maybe(i.String),
                            hash: i.maybe(i.BufferN(20)),
                            input: i.maybe(i.BufferN(0)),
                            network: i.maybe(i.Object),
                            output: i.maybe(i.BufferN(22)),
                            pubkey: i.maybe(s.isPoint),
                            signature: i.maybe(u.isCanonicalScriptSignature),
                            witness: i.maybe(i.arrayOf(i.Buffer))
                        }, t);
                        const d = n.value(function() {
                                const e = a.decode(t.address),
                                    n = e.words.shift(),
                                    i = a.fromWords(e.words);
                                return {
                                    version: n,
                                    prefix: e.prefix,
                                    data: r.from(i)
                                }
                            }),
                            l = t.network || c,
                            p = {
                                network: l
                            };
                        if (n.prop(p, "address", function() {
                                if (!p.hash) return;
                                const t = a.toWords(p.hash);
                                return t.unshift(0), a.encode(l.bech32, t)
                            }), n.prop(p, "hash", function() {
                                return t.output ? t.output.slice(2, 22) : t.address ? d().data : t.pubkey || p.pubkey ? f.hash160(t.pubkey || p.pubkey) : void 0
                            }), n.prop(p, "output", function() {
                                if (p.hash) return u.compile([o.OP_0, p.hash])
                            }), n.prop(p, "pubkey", function() {
                                return t.pubkey ? t.pubkey : t.witness ? t.witness[1] : void 0
                            }), n.prop(p, "signature", function() {
                                if (t.witness) return t.witness[0]
                            }), n.prop(p, "input", function() {
                                if (p.witness) return h
                            }), n.prop(p, "witness", function() {
                                if (t.pubkey && t.signature) return [t.signature, t.pubkey]
                            }), e.validate) {
                            let e;
                            if (t.address) {
                                if (l && l.bech32 !== d().prefix) throw new TypeError("Invalid prefix or Network mismatch");
                                if (0 !== d().version) throw new TypeError("Invalid address version");
                                if (20 !== d().data.length) throw new TypeError("Invalid address data");
                                e = d().data
                            }
                            if (t.hash) {
                                if (e && !e.equals(t.hash)) throw new TypeError("Hash mismatch");
                                e = t.hash
                            }
                            if (t.output) {
                                if (22 !== t.output.length || t.output[0] !== o.OP_0 || 20 !== t.output[1]) throw new TypeError("Output is invalid");
                                if (e && !e.equals(t.output.slice(2))) throw new TypeError("Hash mismatch");
                                e = t.output.slice(2)
                            }
                            if (t.pubkey) {
                                const r = f.hash160(t.pubkey);
                                if (e && !e.equals(r)) throw new TypeError("Hash mismatch");
                                e = r
                            }
                            if (t.witness) {
                                if (2 !== t.witness.length) throw new TypeError("Witness is invalid");
                                if (!u.isCanonicalScriptSignature(t.witness[0])) throw new TypeError("Witness has invalid signature");
                                if (!s.isPoint(t.witness[1])) throw new TypeError("Witness has invalid pubkey");
                                if (t.signature && !t.signature.equals(t.witness[0])) throw new TypeError("Signature mismatch");
                                if (t.pubkey && !t.pubkey.equals(t.witness[1])) throw new TypeError("Pubkey mismatch");
                                const r = f.hash160(t.witness[1]);
                                if (e && !e.equals(r)) throw new TypeError("Hash mismatch")
                            }
                        }
                        return Object.assign(p, t)
                    }
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, {
            "../crypto": 129,
            "../networks": 131,
            "../script": 141,
            "./lazy": 134,
            bech32: 33,
            "bitcoin-ops": 41,
            buffer: 7,
            "tiny-secp256k1": 116,
            typeforce: 120
        }],
        140: [function(t, e, r) {
            (function(r) {
                (function() {
                    const n = t("./lazy"),
                        i = t("typeforce"),
                        o = t("bitcoin-ops"),
                        s = t("bech32"),
                        f = t("../crypto"),
                        a = t("../script"),
                        u = t("../networks").bitcoin,
                        c = r.alloc(0);
                    e.exports = function(t, e) {
                        if (!(t.address || t.hash || t.output || t.redeem || t.witness)) throw new TypeError("Not enough data");
                        e = Object.assign({
                            validate: !0
                        }, e || {}), i({
                            network: i.maybe(i.Object),
                            address: i.maybe(i.String),
                            hash: i.maybe(i.BufferN(32)),
                            output: i.maybe(i.BufferN(34)),
                            redeem: i.maybe({
                                input: i.maybe(i.Buffer),
                                network: i.maybe(i.Object),
                                output: i.maybe(i.Buffer),
                                witness: i.maybe(i.arrayOf(i.Buffer))
                            }),
                            input: i.maybe(i.BufferN(0)),
                            witness: i.maybe(i.arrayOf(i.Buffer))
                        }, t);
                        const h = n.value(function() {
                                const e = s.decode(t.address),
                                    n = e.words.shift(),
                                    i = s.fromWords(e.words);
                                return {
                                    version: n,
                                    prefix: e.prefix,
                                    data: r.from(i)
                                }
                            }),
                            d = n.value(function() {
                                return a.decompile(t.redeem.input)
                            });
                        let l = t.network;
                        l || (l = t.redeem && t.redeem.network || u);
                        const p = {
                            network: l
                        };
                        if (n.prop(p, "address", function() {
                                if (!p.hash) return;
                                const t = s.toWords(p.hash);
                                return t.unshift(0), s.encode(l.bech32, t)
                            }), n.prop(p, "hash", function() {
                                return t.output ? t.output.slice(2) : t.address ? h().data : p.redeem && p.redeem.output ? f.sha256(p.redeem.output) : void 0
                            }), n.prop(p, "output", function() {
                                if (p.hash) return a.compile([o.OP_0, p.hash])
                            }), n.prop(p, "redeem", function() {
                                if (t.witness) return {
                                    output: t.witness[t.witness.length - 1],
                                    input: c,
                                    witness: t.witness.slice(0, -1)
                                }
                            }), n.prop(p, "input", function() {
                                if (p.witness) return c
                            }), n.prop(p, "witness", function() {
                                if (t.redeem && t.redeem.input && t.redeem.input.length > 0 && t.redeem.output && t.redeem.output.length > 0) {
                                    const e = a.toStack(d());
                                    return p.redeem = Object.assign({
                                        witness: e
                                    }, t.redeem), p.redeem.input = c, [].concat(e, t.redeem.output)
                                }
                                if (t.redeem && t.redeem.output && t.redeem.witness) return [].concat(t.redeem.witness, t.redeem.output)
                            }), e.validate) {
                            let e;
                            if (t.address) {
                                if (h().prefix !== l.bech32) throw new TypeError("Invalid prefix or Network mismatch");
                                if (0 !== h().version) throw new TypeError("Invalid address version");
                                if (32 !== h().data.length) throw new TypeError("Invalid address data");
                                e = h().data
                            }
                            if (t.hash) {
                                if (e && !e.equals(t.hash)) throw new TypeError("Hash mismatch");
                                e = t.hash
                            }
                            if (t.output) {
                                if (34 !== t.output.length || t.output[0] !== o.OP_0 || 32 !== t.output[1]) throw new TypeError("Output is invalid");
                                const r = t.output.slice(2);
                                if (e && !e.equals(r)) throw new TypeError("Hash mismatch");
                                e = r
                            }
                            if (t.redeem) {
                                if (t.redeem.network && t.redeem.network !== l) throw new TypeError("Network mismatch");
                                if (t.redeem.input && t.redeem.input.length > 0 && t.redeem.witness && t.redeem.witness.length > 0) throw new TypeError("Ambiguous witness source");
                                if (t.redeem.output) {
                                    if (0 === a.decompile(t.redeem.output).length) throw new TypeError("Redeem.output is invalid");
                                    const r = f.sha256(t.redeem.output);
                                    if (e && !e.equals(r)) throw new TypeError("Hash mismatch");
                                    e = r
                                }
                                if (t.redeem.input && !a.isPushOnly(d())) throw new TypeError("Non push-only scriptSig");
                                if (t.witness && t.redeem.witness && ! function(t, e) {
                                        return t.length === e.length && t.every(function(t, r) {
                                            return t.equals(e[r])
                                        })
                                    }(t.witness, t.redeem.witness)) throw new TypeError("Witness and redeem.witness mismatch")
                            }
                            if (t.witness && t.redeem && t.redeem.output && !t.redeem.output.equals(t.witness[t.witness.length - 1])) throw new TypeError("Witness and redeem.output mismatch")
                        }
                        return Object.assign(p, t)
                    }
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, {
            "../crypto": 129,
            "../networks": 131,
            "../script": 141,
            "./lazy": 134,
            bech32: 33,
            "bitcoin-ops": 41,
            buffer: 7,
            typeforce: 120
        }],
        141: [function(t, e, r) {
            const n = t("safe-buffer").Buffer,
                i = t("bip66"),
                o = t("tiny-secp256k1"),
                s = t("pushdata-bitcoin"),
                f = t("typeforce"),
                a = t("./types"),
                u = t("./script_number"),
                c = t("bitcoin-ops"),
                h = t("bitcoin-ops/map"),
                d = c.OP_RESERVED;

            function l(t) {
                return a.Buffer(t) || function(t) {
                    return a.Number(t) && (t === c.OP_0 || t >= c.OP_1 && t <= c.OP_16 || t === c.OP_1NEGATE)
                }(t)
            }

            function p(t) {
                return a.Array(t) && t.every(l)
            }

            function b(t) {
                return 0 === t.length ? c.OP_0 : 1 === t.length ? t[0] >= 1 && t[0] <= 16 ? d + t[0] : 129 === t[0] ? c.OP_1NEGATE : void 0 : void 0
            }

            function m(t) {
                if (n.isBuffer(t)) return t;
                f(a.Array, t);
                const e = t.reduce(function(t, e) {
                        return n.isBuffer(e) ? 1 === e.length && void 0 !== b(e) ? t + 1 : t + s.encodingLength(e.length) + e.length : t + 1
                    }, 0),
                    r = n.allocUnsafe(e);
                let i = 0;
                if (t.forEach(function(t) {
                        if (n.isBuffer(t)) {
                            const e = b(t);
                            if (void 0 !== e) return r.writeUInt8(e, i), void(i += 1);
                            i += s.encode(r, t.length, i), t.copy(r, i), i += t.length
                        } else r.writeUInt8(t, i), i += 1
                    }), i !== r.length) throw new Error("Could not decode chunks");
                return r
            }

            function y(t) {
                if (a.Array(t)) return t;
                f(a.Buffer, t);
                const e = [];
                let r = 0;
                for (; r < t.length;) {
                    const n = t[r];
                    if (n > c.OP_0 && n <= c.OP_PUSHDATA4) {
                        const n = s.decode(t, r);
                        if (null === n) return null;
                        if ((r += n.size) + n.number > t.length) return null;
                        const i = t.slice(r, r + n.number);
                        r += n.number;
                        const o = b(i);
                        void 0 !== o ? e.push(o) : e.push(i)
                    } else e.push(n), r += 1
                }
                return e
            }

            function g(t) {
                const e = -193 & t;
                return e > 0 && e < 4
            }
            e.exports = {
                compile: m,
                decompile: y,
                fromASM: function(t) {
                    return f(a.String, t), m(t.split(" ").map(function(t) {
                        return void 0 !== c[t] ? c[t] : (f(a.Hex, t), n.from(t, "hex"))
                    }))
                },
                toASM: function(t) {
                    return n.isBuffer(t) && (t = y(t)), t.map(function(t) {
                        if (n.isBuffer(t)) {
                            const e = b(t);
                            if (void 0 === e) return t.toString("hex");
                            t = e
                        }
                        return h[t]
                    }).join(" ")
                },
                toStack: function(t) {
                    return t = y(t), f(p, t), t.map(function(t) {
                        return n.isBuffer(t) ? t : t === c.OP_0 ? n.allocUnsafe(0) : u.encode(t - d)
                    })
                },
                number: t("./script_number"),
                signature: t("./script_signature"),
                isCanonicalPubKey: function(t) {
                    return o.isPoint(t)
                },
                isCanonicalScriptSignature: function(t) {
                    return !!n.isBuffer(t) && !!g(t[t.length - 1]) && i.check(t.slice(0, -1))
                },
                isPushOnly: p,
                isDefinedHashType: g
            }
        }, {
            "./script_number": 142,
            "./script_signature": 143,
            "./types": 167,
            bip66: 40,
            "bitcoin-ops": 41,
            "bitcoin-ops/map": 42,
            "pushdata-bitcoin": 88,
            "safe-buffer": 106,
            "tiny-secp256k1": 116,
            typeforce: 120
        }],
        142: [function(t, e, r) {
            const n = t("safe-buffer").Buffer;
            e.exports = {
                decode: function(t, e, r) {
                    e = e || 4, r = void 0 === r || r;
                    const n = t.length;
                    if (0 === n) return 0;
                    if (n > e) throw new TypeError("Script number overflow");
                    if (r && 0 == (127 & t[n - 1]) && (n <= 1 || 0 == (128 & t[n - 2]))) throw new Error("Non-minimally encoded script number");
                    if (5 === n) {
                        const e = t.readUInt32LE(0),
                            r = t.readUInt8(4);
                        return 128 & r ? -(4294967296 * (-129 & r) + e) : 4294967296 * r + e
                    }
                    let i = 0;
                    for (var o = 0; o < n; ++o) i |= t[o] << 8 * o;
                    return 128 & t[n - 1] ? -(i & ~(128 << 8 * (n - 1))) : i
                },
                encode: function(t) {
                    let e = Math.abs(t);
                    const r = function(t) {
                            return t > 2147483647 ? 5 : t > 8388607 ? 4 : t > 32767 ? 3 : t > 127 ? 2 : t > 0 ? 1 : 0
                        }(e),
                        i = n.allocUnsafe(r),
                        o = t < 0;
                    for (var s = 0; s < r; ++s) i.writeUInt8(255 & e, s), e >>= 8;
                    return 128 & i[r - 1] ? i.writeUInt8(o ? 128 : 0, r - 1) : o && (i[r - 1] |= 128), i
                }
            }
        }, {
            "safe-buffer": 106
        }],
        143: [function(t, e, r) {
            const n = t("bip66"),
                i = t("safe-buffer").Buffer,
                o = t("typeforce"),
                s = t("./types"),
                f = i.alloc(1, 0);

            function a(t) {
                let e = 0;
                for (; 0 === t[e];) ++e;
                return e === t.length ? f : 128 & (t = t.slice(e))[0] ? i.concat([f, t], 1 + t.length) : t
            }

            function u(t) {
                0 === t[0] && (t = t.slice(1));
                const e = i.alloc(32, 0),
                    r = Math.max(0, 32 - t.length);
                return t.copy(e, r), e
            }
            e.exports = {
                decode: function(t) {
                    const e = t.readUInt8(t.length - 1),
                        r = -193 & e;
                    if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + r);
                    const o = n.decode(t.slice(0, -1)),
                        s = u(o.r),
                        f = u(o.s);
                    return {
                        signature: i.concat([s, f], 64),
                        hashType: e
                    }
                },
                encode: function(t, e) {
                    o({
                        signature: s.BufferN(64),
                        hashType: s.UInt8
                    }, {
                        signature: t,
                        hashType: e
                    });
                    const r = -193 & e;
                    if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + e);
                    const f = i.allocUnsafe(1);
                    f.writeUInt8(e, 0);
                    const u = a(t.slice(0, 32)),
                        c = a(t.slice(32, 64));
                    return i.concat([n.encode(u, c), f])
                }
            }
        }, {
            "./types": 167,
            bip66: 40,
            "safe-buffer": 106,
            typeforce: 120
        }],
        144: [function(t, e, r) {
            e.exports = {
                input: t("./input"),
                output: t("./output")
            }
        }, {
            "./input": 145,
            "./output": 146
        }],
        145: [function(t, e, r) {
            const n = t("../../script"),
                i = t("bitcoin-ops");

            function o(t) {
                return t === i.OP_0 || n.isCanonicalScriptSignature(t)
            }

            function s(t, e) {
                const r = n.decompile(t);
                return !(r.length < 2) && (r[0] === i.OP_0 && (e ? r.slice(1).every(o) : r.slice(1).every(n.isCanonicalScriptSignature)))
            }
            s.toJSON = function() {
                return "multisig input"
            }, e.exports = {
                check: s
            }
        }, {
            "../../script": 141,
            "bitcoin-ops": 41
        }],
        146: [function(t, e, r) {
            const n = t("../../script"),
                i = t("../../types"),
                o = t("bitcoin-ops"),
                s = o.OP_RESERVED;

            function f(t, e) {
                const r = n.decompile(t);
                if (r.length < 4) return !1;
                if (r[r.length - 1] !== o.OP_CHECKMULTISIG) return !1;
                if (!i.Number(r[0])) return !1;
                if (!i.Number(r[r.length - 2])) return !1;
                const f = r[0] - s,
                    a = r[r.length - 2] - s;
                return !(f <= 0) && (!(a > 16) && (!(f > a) && (a === r.length - 3 && (!!e || r.slice(1, -2).every(n.isCanonicalPubKey)))))
            }
            f.toJSON = function() {
                return "multi-sig output"
            }, e.exports = {
                check: f
            }
        }, {
            "../../script": 141,
            "../../types": 167,
            "bitcoin-ops": 41
        }],
        147: [function(t, e, r) {
            const n = t("../script"),
                i = t("bitcoin-ops");

            function o(t) {
                const e = n.compile(t);
                return e.length > 1 && e[0] === i.OP_RETURN
            }
            o.toJSON = function() {
                return "null data output"
            }, e.exports = {
                output: {
                    check: o
                }
            }
        }, {
            "../script": 141,
            "bitcoin-ops": 41
        }],
        148: [function(t, e, r) {
            arguments[4][144][0].apply(r, arguments)
        }, {
            "./input": 149,
            "./output": 150,
            dup: 144
        }],
        149: [function(t, e, r) {
            const n = t("../../script");

            function i(t) {
                const e = n.decompile(t);
                return 1 === e.length && n.isCanonicalScriptSignature(e[0])
            }
            i.toJSON = function() {
                return "pubKey input"
            }, e.exports = {
                check: i
            }
        }, {
            "../../script": 141
        }],
        150: [function(t, e, r) {
            const n = t("../../script"),
                i = t("bitcoin-ops");

            function o(t) {
                const e = n.decompile(t);
                return 2 === e.length && n.isCanonicalPubKey(e[0]) && e[1] === i.OP_CHECKSIG
            }
            o.toJSON = function() {
                return "pubKey output"
            }, e.exports = {
                check: o
            }
        }, {
            "../../script": 141,
            "bitcoin-ops": 41
        }],
        151: [function(t, e, r) {
            arguments[4][144][0].apply(r, arguments)
        }, {
            "./input": 152,
            "./output": 153,
            dup: 144
        }],
        152: [function(t, e, r) {
            const n = t("../../script");

            function i(t) {
                const e = n.decompile(t);
                return 2 === e.length && n.isCanonicalScriptSignature(e[0]) && n.isCanonicalPubKey(e[1])
            }
            i.toJSON = function() {
                return "pubKeyHash input"
            }, e.exports = {
                check: i
            }
        }, {
            "../../script": 141
        }],
        153: [function(t, e, r) {
            const n = t("../../script"),
                i = t("bitcoin-ops");

            function o(t) {
                const e = n.compile(t);
                return 25 === e.length && e[0] === i.OP_DUP && e[1] === i.OP_HASH160 && 20 === e[2] && e[23] === i.OP_EQUALVERIFY && e[24] === i.OP_CHECKSIG
            }
            o.toJSON = function() {
                return "pubKeyHash output"
            }, e.exports = {
                check: o
            }
        }, {
            "../../script": 141,
            "bitcoin-ops": 41
        }],
        154: [function(t, e, r) {
            arguments[4][144][0].apply(r, arguments)
        }, {
            "./input": 155,
            "./output": 156,
            dup: 144
        }],
        155: [function(t, e, r) {
            const n = t("safe-buffer").Buffer,
                i = t("../../script"),
                o = t("../multisig/"),
                s = t("../pubkey/"),
                f = t("../pubkeyhash/"),
                a = t("../witnesspubkeyhash/output"),
                u = t("../witnessscripthash/output");

            function c(t, e) {
                const r = i.decompile(t);
                if (r.length < 1) return !1;
                const c = r[r.length - 1];
                if (!n.isBuffer(c)) return !1;
                const h = i.decompile(i.compile(r.slice(0, -1))),
                    d = i.decompile(c);
                return !!d && (!!i.isPushOnly(h) && (1 === r.length ? u.check(d) || a.check(d) : !(!f.input.check(h) || !f.output.check(d)) || (!(!o.input.check(h, e) || !o.output.check(d)) || !(!s.input.check(h) || !s.output.check(d)))))
            }
            c.toJSON = function() {
                return "scriptHash input"
            }, e.exports = {
                check: c
            }
        }, {
            "../../script": 141,
            "../multisig/": 144,
            "../pubkey/": 148,
            "../pubkeyhash/": 151,
            "../witnesspubkeyhash/output": 161,
            "../witnessscripthash/output": 164,
            "safe-buffer": 106
        }],
        156: [function(t, e, r) {
            const n = t("../../script"),
                i = t("bitcoin-ops");

            function o(t) {
                const e = n.compile(t);
                return 23 === e.length && e[0] === i.OP_HASH160 && 20 === e[1] && e[22] === i.OP_EQUAL
            }
            o.toJSON = function() {
                return "scriptHash output"
            }, e.exports = {
                check: o
            }
        }, {
            "../../script": 141,
            "bitcoin-ops": 41
        }],
        157: [function(t, e, r) {
            e.exports = {
                output: t("./output")
            }
        }, {
            "./output": 158
        }],
        158: [function(t, e, r) {
            const n = t("safe-buffer").Buffer,
                i = t("../../script"),
                o = t("../../types"),
                s = t("typeforce"),
                f = t("bitcoin-ops"),
                a = n.from("aa21a9ed", "hex");

            function u(t) {
                const e = i.compile(t);
                return e.length > 37 && e[0] === f.OP_RETURN && 36 === e[1] && e.slice(2, 6).equals(a)
            }
            u.toJSON = function() {
                return "Witness commitment output"
            }, e.exports = {
                check: u,
                decode: function(t) {
                    return s(u, t), i.decompile(t)[1].slice(4, 36)
                },
                encode: function(t) {
                    s(o.Hash256bit, t);
                    const e = n.allocUnsafe(36);
                    return a.copy(e, 0), t.copy(e, 4), i.compile([f.OP_RETURN, e])
                }
            }
        }, {
            "../../script": 141,
            "../../types": 167,
            "bitcoin-ops": 41,
            "safe-buffer": 106,
            typeforce: 120
        }],
        159: [function(t, e, r) {
            arguments[4][144][0].apply(r, arguments)
        }, {
            "./input": 160,
            "./output": 161,
            dup: 144
        }],
        160: [function(t, e, r) {
            const n = t("../../script");

            function i(t) {
                const e = n.decompile(t);
                return 2 === e.length && n.isCanonicalScriptSignature(e[0]) && (r = e[1], n.isCanonicalPubKey(r) && 33 === r.length);
                var r
            }
            i.toJSON = function() {
                return "witnessPubKeyHash input"
            }, e.exports = {
                check: i
            }
        }, {
            "../../script": 141
        }],
        161: [function(t, e, r) {
            const n = t("../../script"),
                i = t("bitcoin-ops");

            function o(t) {
                const e = n.compile(t);
                return 22 === e.length && e[0] === i.OP_0 && 20 === e[1]
            }
            o.toJSON = function() {
                return "Witness pubKeyHash output"
            }, e.exports = {
                check: o
            }
        }, {
            "../../script": 141,
            "bitcoin-ops": 41
        }],
        162: [function(t, e, r) {
            arguments[4][144][0].apply(r, arguments)
        }, {
            "./input": 163,
            "./output": 164,
            dup: 144
        }],
        163: [function(t, e, r) {
            (function(r) {
                (function() {
                    const n = t("../../script"),
                        i = t("../../types"),
                        o = t("typeforce"),
                        s = t("../multisig/"),
                        f = t("../pubkey/"),
                        a = t("../pubkeyhash/");

                    function u(t, e) {
                        if (o(i.Array, t), t.length < 1) return !1;
                        const u = t[t.length - 1];
                        if (!r.isBuffer(u)) return !1;
                        const c = n.decompile(u);
                        if (!c || 0 === c.length) return !1;
                        const h = n.compile(t.slice(0, -1));
                        return !(!a.input.check(h) || !a.output.check(c)) || (!(!s.input.check(h, e) || !s.output.check(c)) || !(!f.input.check(h) || !f.output.check(c)))
                    }
                    u.toJSON = function() {
                        return "witnessScriptHash input"
                    }, e.exports = {
                        check: u
                    }
                }).call(this)
            }).call(this, {
                isBuffer: t("../../../../../../../root/.nvm/versions/node/v16.9.1/lib/node_modules/browserify/node_modules/is-buffer/index.js")
            })
        }, {
            "../../../../../../../root/.nvm/versions/node/v16.9.1/lib/node_modules/browserify/node_modules/is-buffer/index.js": 11,
            "../../script": 141,
            "../../types": 167,
            "../multisig/": 144,
            "../pubkey/": 148,
            "../pubkeyhash/": 151,
            typeforce: 120
        }],
        164: [function(t, e, r) {
            const n = t("../../script"),
                i = t("bitcoin-ops");

            function o(t) {
                const e = n.compile(t);
                return 34 === e.length && e[0] === i.OP_0 && 32 === e[1]
            }
            o.toJSON = function() {
                return "Witness scriptHash output"
            }, e.exports = {
                check: o
            }
        }, {
            "../../script": 141,
            "bitcoin-ops": 41
        }],
        165: [function(t, e, r) {
            const n = t("safe-buffer").Buffer,
                i = t("./crypto"),
                o = t("./script"),
                s = t("./bufferutils"),
                f = t("bitcoin-ops"),
                a = t("typeforce"),
                u = t("./types"),
                c = t("varuint-bitcoin");

            function h(t) {
                const e = t.length;
                return c.encodingLength(e) + e
            }

            function d() {
                this.version = 1, this.locktime = 0, this.ins = [], this.outs = []
            }
            d.DEFAULT_SEQUENCE = 4294967295, d.SIGHASH_ALL = 1, d.SIGHASH_NONE = 2, d.SIGHASH_SINGLE = 3, d.SIGHASH_ANYONECANPAY = 128, d.SIGHASH_BITCOINCASHBIP143 = 64, d.ADVANCED_TRANSACTION_MARKER = 0, d.ADVANCED_TRANSACTION_FLAG = 1, d.FORKID_BTG = 79, d.FORKID_BCH = 0, d.FORKID_RVL = 41;
            const l = n.allocUnsafe(0),
                p = [],
                b = n.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"),
                m = n.from("0000000000000000000000000000000000000000000000000000000000000001", "hex"),
                y = n.from("ffffffffffffffff", "hex"),
                g = {
                    script: l,
                    valueBuffer: y
                };
            d.fromBuffer = function(t, e) {
                let r = 0;

                function n(e) {
                    return r += e, t.slice(r - e, r)
                }

                function i() {
                    const e = t.readUInt32LE(r);
                    return r += 4, e
                }

                function o() {
                    const e = s.readUInt64LE(t, r);
                    return r += 8, e
                }

                function f() {
                    const e = c.decode(t, r);
                    return r += c.decode.bytes, e
                }

                function a() {
                    return n(f())
                }

                function u() {
                    const t = f(),
                        e = [];
                    for (var r = 0; r < t; r++) e.push(a());
                    return e
                }
                const h = new d;
                h.version = function() {
                    const e = t.readInt32LE(r);
                    return r += 4, e
                }();
                const l = t.readUInt8(r),
                    b = t.readUInt8(r + 1);
                let m = !1;
                l === d.ADVANCED_TRANSACTION_MARKER && b === d.ADVANCED_TRANSACTION_FLAG && (r += 2, m = !0);
                const y = f();
                for (var g = 0; g < y; ++g) h.ins.push({
                    hash: n(32),
                    index: i(),
                    script: a(),
                    sequence: i(),
                    witness: p
                });
                const v = f();
                for (g = 0; g < v; ++g) h.outs.push({
                    value: o(),
                    script: a()
                });
                if (m) {
                    for (g = 0; g < y; ++g) h.ins[g].witness = u();
                    if (!h.hasWitnesses()) throw new Error("Transaction has superfluous witness data")
                }
                if (h.locktime = i(), e) return h;
                if (r !== t.length) throw new Error("Transaction has unexpected data");
                return h
            }, d.fromHex = function(t) {
                return d.fromBuffer(n.from(t, "hex"))
            }, d.isCoinbaseHash = function(t) {
                a(u.Hash256bit, t);
                for (var e = 0; e < 32; ++e)
                    if (0 !== t[e]) return !1;
                return !0
            }, d.prototype.isCoinbase = function() {
                return 1 === this.ins.length && d.isCoinbaseHash(this.ins[0].hash)
            }, d.prototype.addInput = function(t, e, r, n) {
                return a(u.tuple(u.Hash256bit, u.UInt32, u.maybe(u.UInt32), u.maybe(u.Buffer)), arguments), u.Null(r) && (r = d.DEFAULT_SEQUENCE), this.ins.push({
                    hash: t,
                    index: e,
                    script: n || l,
                    sequence: r,
                    witness: p
                }) - 1
            }, d.prototype.addOutput = function(t, e) {
                return a(u.tuple(u.Buffer, u.Satoshi), arguments), this.outs.push({
                    script: t,
                    value: e
                }) - 1
            }, d.prototype.hasWitnesses = function() {
                return this.ins.some(function(t) {
                    return 0 !== t.witness.length
                })
            }, d.prototype.weight = function() {
                return 3 * this.__byteLength(!1) + this.__byteLength(!0)
            }, d.prototype.virtualSize = function() {
                return Math.ceil(this.weight() / 4)
            }, d.prototype.byteLength = function() {
                return this.__byteLength(!0)
            }, d.prototype.__byteLength = function(t) {
                const e = t && this.hasWitnesses();
                return (e ? 10 : 8) + c.encodingLength(this.ins.length) + c.encodingLength(this.outs.length) + this.ins.reduce(function(t, e) {
                    return t + 40 + h(e.script)
                }, 0) + this.outs.reduce(function(t, e) {
                    return t + 8 + h(e.script)
                }, 0) + (e ? this.ins.reduce(function(t, e) {
                    return t + function(t) {
                        const e = t.length;
                        return c.encodingLength(e) + t.reduce(function(t, e) {
                            return t + h(e)
                        }, 0)
                    }(e.witness)
                }, 0) : 0)
            }, d.prototype.clone = function() {
                const t = new d;
                return t.version = this.version, t.locktime = this.locktime, t.ins = this.ins.map(function(t) {
                    return {
                        hash: t.hash,
                        index: t.index,
                        script: t.script,
                        sequence: t.sequence,
                        witness: t.witness
                    }
                }), t.outs = this.outs.map(function(t) {
                    return {
                        script: t.script,
                        value: t.value
                    }
                }), t
            }, d.prototype.hashForSignature = function(t, e, r) {
                if (a(u.tuple(u.UInt32, u.Buffer, u.Number), arguments), t >= this.ins.length) return m;
                const s = o.compile(o.decompile(e).filter(function(t) {
                        return t !== f.OP_CODESEPARATOR
                    })),
                    c = this.clone();
                if ((31 & r) === d.SIGHASH_NONE) c.outs = [], c.ins.forEach(function(e, r) {
                    r !== t && (e.sequence = 0)
                });
                else if ((31 & r) === d.SIGHASH_SINGLE) {
                    if (t >= this.outs.length) return m;
                    c.outs.length = t + 1;
                    for (var h = 0; h < t; h++) c.outs[h] = g;
                    c.ins.forEach(function(e, r) {
                        r !== t && (e.sequence = 0)
                    })
                }
                r & d.SIGHASH_ANYONECANPAY ? (c.ins = [c.ins[t]], c.ins[0].script = s) : (c.ins.forEach(function(t) {
                    t.script = l
                }), c.ins[t].script = s);
                const p = n.allocUnsafe(c.__byteLength(!1) + 4);
                return p.writeInt32LE(r, p.length - 4), c.__toBuffer(p, 0, !1), i.hash256(p)
            }, d.prototype.hashForWitnessV0 = function(t, e, r, o) {
                let f, l;

                function p(t) {
                    l += t.copy(f, l)
                }

                function m(t) {
                    l = f.writeUInt32LE(t, l)
                }

                function y(t) {
                    l = s.writeUInt64LE(f, t, l)
                }

                function g(t) {
                    var e;
                    e = t.length, c.encode(e, f, l), l += c.encode.bytes, p(t)
                }
                a(u.tuple(u.UInt32, u.Buffer, u.Satoshi, u.UInt32), arguments);
                let v = b,
                    w = b,
                    _ = b;
                if (o & d.SIGHASH_ANYONECANPAY || (f = n.allocUnsafe(36 * this.ins.length), l = 0, this.ins.forEach(function(t) {
                        p(t.hash), m(t.index)
                    }), w = i.hash256(f)), o & d.SIGHASH_ANYONECANPAY || (31 & o) === d.SIGHASH_SINGLE || (31 & o) === d.SIGHASH_NONE || (f = n.allocUnsafe(4 * this.ins.length), l = 0, this.ins.forEach(function(t) {
                        m(t.sequence)
                    }), _ = i.hash256(f)), (31 & o) !== d.SIGHASH_SINGLE && (31 & o) !== d.SIGHASH_NONE) {
                    const t = this.outs.reduce(function(t, e) {
                        return t + 8 + h(e.script)
                    }, 0);
                    f = n.allocUnsafe(t), l = 0, this.outs.forEach(function(t) {
                        y(t.value), g(t.script)
                    }), v = i.hash256(f)
                } else if ((31 & o) === d.SIGHASH_SINGLE && t < this.outs.length) {
                    const e = this.outs[t];
                    f = n.allocUnsafe(8 + h(e.script)), l = 0, y(e.value), g(e.script), v = i.hash256(f)
                }
                f = n.allocUnsafe(156 + h(e)), l = 0;
                const S = this.ins[t];
                return m(this.version), p(w), p(_), p(S.hash), m(S.index), g(e), y(r), m(S.sequence), p(v), m(this.locktime), m(o), i.hash256(f)
            }, d.prototype.hashForCashSignature = function(t, e, r, n) {
                if (a(u.tuple(u.UInt32, u.Buffer, u.Number, u.maybe(u.UInt53)), arguments), n & d.SIGHASH_BITCOINCASHBIP143) {
                    if (u.Null(r)) throw new Error("Bitcoin Cash sighash requires value of input to be signed.");
                    return this.hashForWitnessV0(t, e, r, n)
                }
                return this.hashForSignature(t, e, n)
            }, d.prototype.hashForRVLSignature = function(t, e, r, n) {
                if (a(u.tuple(u.UInt32, u.Buffer, u.Number, u.maybe(u.UInt53)), arguments), n & d.FORKID_RVL) {
                    if (u.Null(r)) throw new Error("Ravencoin Lite sighash requires value of input to be signed.");
                    return this.hashForWitnessV0(t, e, r, n)
                }
                return this.hashForSignature(t, e, n)
            }, d.prototype.hashForGoldSignature = function(t, e, r, n, i) {
                a(u.tuple(u.UInt32, u.Buffer, u.Number, u.maybe(u.UInt53)), arguments);
                var o = n,
                    s = (n & d.SIGHASH_BITCOINCASHBIP143) > 0;
                if (s && (o |= d.FORKID_RVL << 8), i || s) {
                    if (u.Null(r)) throw new Error("Bitcoin Cash sighash requires value of input to be signed.");
                    return this.hashForWitnessV0(t, e, r, o)
                }
                return this.hashForSignature(t, e, o)
            }, d.prototype.getHash = function() {
                return i.hash256(this.__toBuffer(void 0, void 0, !1))
            }, d.prototype.getId = function() {
                return this.getHash().reverse().toString("hex")
            }, d.prototype.toBuffer = function(t, e) {
                return this.__toBuffer(t, e, !0)
            }, d.prototype.__toBuffer = function(t, e, r) {
                t || (t = n.allocUnsafe(this.__byteLength(r)));
                let i = e || 0;

                function o(e) {
                    i += e.copy(t, i)
                }

                function f(e) {
                    i = t.writeUInt8(e, i)
                }

                function a(e) {
                    i = t.writeUInt32LE(e, i)
                }

                function u(e) {
                    c.encode(e, t, i), i += c.encode.bytes
                }

                function h(t) {
                    u(t.length), o(t)
                }
                var l;
                l = this.version, i = t.writeInt32LE(l, i);
                const p = r && this.hasWitnesses();
                return p && (f(d.ADVANCED_TRANSACTION_MARKER), f(d.ADVANCED_TRANSACTION_FLAG)), u(this.ins.length), this.ins.forEach(function(t) {
                    o(t.hash), a(t.index), h(t.script), a(t.sequence)
                }), u(this.outs.length), this.outs.forEach(function(e) {
                    var r;
                    e.valueBuffer ? o(e.valueBuffer) : (r = e.value, i = s.writeUInt64LE(t, r, i)), h(e.script)
                }), p && this.ins.forEach(function(t) {
                    var e;
                    u((e = t.witness).length), e.forEach(h)
                }), a(this.locktime), void 0 !== e ? t.slice(e, i) : t
            }, d.prototype.toHex = function() {
                return this.toBuffer().toString("hex")
            }, d.prototype.setInputScript = function(t, e) {
                a(u.tuple(u.Number, u.Buffer), arguments), this.ins[t].script = e
            }, d.prototype.setWitness = function(t, e) {
                a(u.tuple(u.Number, [u.Buffer]), arguments), this.ins[t].witness = e
            }, e.exports = d
        }, {
            "./bufferutils": 127,
            "./crypto": 129,
            "./script": 141,
            "./types": 167,
            "bitcoin-ops": 41,
            "safe-buffer": 106,
            typeforce: 120,
            "varuint-bitcoin": 123
        }],
        166: [function(t, e, r) {
            const n = t("safe-buffer").Buffer,
                i = t("./address"),
                o = t("./crypto"),
                s = t("./script"),
                f = t("./networks"),
                a = t("bitcoin-ops"),
                u = t("./payments"),
                c = t("typeforce"),
                h = t("./types"),
                d = t("./classify"),
                l = d.types,
                p = t("./ecpair"),
                b = t("./transaction");

            function m(t, e) {
                c(h.Buffer, t);
                const r = d.output(t);
                switch (r) {
                    case l.P2PKH: {
                        if (!e) return {
                            type: r
                        };
                        const n = u.p2pkh({
                                output: t
                            }).hash,
                            i = o.hash160(e);
                        return n.equals(i) ? {
                            type: r,
                            pubkeys: [e],
                            signatures: [void 0]
                        } : {
                            type: r
                        }
                    }
                    case l.P2WPKH: {
                        if (!e) return {
                            type: r
                        };
                        const n = u.p2wpkh({
                                output: t
                            }).hash,
                            i = o.hash160(e);
                        return n.equals(i) ? {
                            type: r,
                            pubkeys: [e],
                            signatures: [void 0]
                        } : {
                            type: r
                        }
                    }
                    case l.P2PK:
                        return {
                            type: r, pubkeys: [u.p2pk({
                                output: t
                            }).pubkey], signatures: [void 0]
                        };
                    case l.P2MS: {
                        const e = u.p2ms({
                            output: t
                        });
                        return {
                            type: r,
                            pubkeys: e.pubkeys,
                            signatures: e.pubkeys.map(() => void 0),
                            maxSignatures: e.m
                        }
                    }
                }
                return {
                    type: r
                }
            }

            function y(t, e) {
                this.__prevTxSet = {}, this.network = t || f.bitcoin, this.maximumFeeRate = e || 2500, this.__inputs = [], this.__bitcoinCash = !1, this.__bitcoinGold = !1,  this.__rvl = !1, this.__tx = new b, this.__tx.version = 2
            }

            function g(t) {
                return void 0 !== t.signScript && void 0 !== t.signType && void 0 !== t.pubkeys && void 0 !== t.signatures && t.signatures.length === t.pubkeys.length && t.pubkeys.length > 0 && (!1 === t.hasWitness || void 0 !== t.value)
            }

            function v(t) {
                return t.readUInt8(t.length - 1)
            }
            y.prototype.enableBitcoinCash = function(t) {
                void 0 === t && (t = !0), this.__bitcoinCash = t
            }, y.prototype.enableRVL = function(t) {
                void 0 === t && (t = !0), this.__rvl = t
            }, y.prototype.enableBitcoinGold = function(t) {
                void 0 === t && (t = !0), this.__bitcoinGold = t
            }, y.prototype.setLockTime = function(t) {
                if (c(h.UInt32, t), this.__inputs.some(function(t) {
                        return !!t.signatures && t.signatures.some(function(t) {
                            return t
                        })
                    })) throw new Error("No, this would invalidate signatures");
                this.__tx.locktime = t
            }, y.prototype.setVersion = function(t) {
                c(h.UInt32, t), this.__tx.version = t
            }, y.fromTransaction = function(t, e, r) {
                const n = new y(e);
                return "number" == typeof r && (r === b.FORKID_BTG ? n.enableBitcoinGold(!0) : r === b.FORKID_RVL && n.enableRVL(!0)), n.setVersion(t.version), n.setLockTime(t.locktime), t.outs.forEach(function(t) {
                    n.addOutput(t.script, t.value)
                }), t.ins.forEach(function(t) {
                    n.__addInputUnsafe(t.hash, t.index, {
                        sequence: t.sequence,
                        script: t.script,
                        witness: t.witness,
                        value: t.value
                    })
                }), n.__inputs.forEach(function(e, r) {
                    ! function(t, e, r, n, i) {
                        if (t.redeemScriptType !== l.P2MS || !t.redeemScript) return;
                        if (t.pubkeys.length === t.signatures.length) return;
                        const o = t.signatures.concat();
                        t.signatures = t.pubkeys.map(function(i) {
                            const f = p.fromPublicKey(i);
                            let a;
                            return o.some(function(i, u) {
                                if (!i) return !1;
                                const c = s.signature.decode(i);
                                let h;
                                switch (64) {
                                    case b.FORKID_BCH:
                                        h = e.hashForCashSignature(r, t.redeemScript, n, c.hashType);
                                        break;
                                    case b.FORKID_RVL:
                                        h = e.hashForRVLSignature(r, t.redeemScript, n, c.hashType);
                                        break;
                                    default:
                                        h = t.witness ? e.hashForWitnessV0(r, t.redeemScript, n, c.hashType) : e.hashForSignature(r, t.redeemScript, c.hashType)
                                }
                                return !!f.verify(h, c.signature) && (o[u] = void 0, a = i, !0)
                            }), a
                        })
                    }(e, t, r, e.value)
                }), n
            }, y.prototype.addInput = function(t, e, r, i) {
                if (!this.__canModifyInputs()) throw new Error("No, this would invalidate signatures");
                let o;
                if ("string" == typeof t) t = n.from(t, "hex").reverse();
                else if (t instanceof b) {
                    const r = t.outs[e];
                    i = r.script, o = r.value, t = t.getHash()
                }
                return this.__addInputUnsafe(t, e, {
                    sequence: r,
                    prevOutScript: i,
                    value: o
                })
            }, y.prototype.__addInputUnsafe = function(t, e, r) {
                if (b.isCoinbaseHash(t)) throw new Error("coinbase inputs not supported");
                const n = t.toString("hex") + ":" + e;
                if (void 0 !== this.__prevTxSet[n]) throw new Error("Duplicate TxOut: " + n);
                let i = {};
                if (void 0 !== r.script && (i = function t(e, r, n, i) {
                        if (0 === e.length && 0 === r.length) return {};
                        if (!n) {
                            let t = d.input(e, !0),
                                i = d.witness(r, !0);
                            t === l.NONSTANDARD && (t = void 0), i === l.NONSTANDARD && (i = void 0), n = t || i
                        }
                        switch (n) {
                            case l.P2WPKH: {
                                const {
                                    output: t,
                                    pubkey: e,
                                    signature: n
                                } = u.p2wpkh({
                                    witness: r
                                });
                                return {
                                    prevOutScript: t,
                                    prevOutType: l.P2WPKH,
                                    pubkeys: [e],
                                    signatures: [n]
                                }
                            }
                            case l.P2PKH: {
                                const {
                                    output: t,
                                    pubkey: r,
                                    signature: n
                                } = u.p2pkh({
                                    input: e
                                });
                                return {
                                    prevOutScript: t,
                                    prevOutType: l.P2PKH,
                                    pubkeys: [r],
                                    signatures: [n]
                                }
                            }
                            case l.P2PK: {
                                const {
                                    signature: t
                                } = u.p2pk({
                                    input: e
                                });
                                return {
                                    prevOutType: l.P2PK,
                                    pubkeys: [void 0],
                                    signatures: [t]
                                }
                            }
                            case l.P2MS: {
                                const {
                                    m: t,
                                    pubkeys: r,
                                    signatures: n
                                } = u.p2ms({
                                    input: e,
                                    output: i
                                }, {
                                    allowIncomplete: !0
                                });
                                return {
                                    prevOutType: l.P2MS,
                                    pubkeys: r,
                                    signatures: n,
                                    maxSignatures: t
                                }
                            }
                        }
                        if (n === l.P2SH) {
                            const {
                                output: n,
                                redeem: i
                            } = u.p2sh({
                                input: e,
                                witness: r
                            }), o = d.output(i.output), s = t(i.input, i.witness, o, i.output);
                            return s.prevOutType ? {
                                prevOutScript: n,
                                prevOutType: l.P2SH,
                                redeemScript: i.output,
                                redeemScriptType: s.prevOutType,
                                witnessScript: s.witnessScript,
                                witnessScriptType: s.witnessScriptType,
                                pubkeys: s.pubkeys,
                                signatures: s.signatures
                            } : {}
                        }
                        if (n === l.P2WSH) {
                            const {
                                output: n,
                                redeem: i
                            } = u.p2wsh({
                                input: e,
                                witness: r
                            }), o = d.output(i.output);
                            let f;
                            return (f = o === l.P2WPKH ? t(i.input, i.witness, o) : t(s.compile(i.witness), [], o, i.output)).prevOutType ? {
                                prevOutScript: n,
                                prevOutType: l.P2WSH,
                                witnessScript: i.output,
                                witnessScriptType: f.prevOutType,
                                pubkeys: f.pubkeys,
                                signatures: f.signatures
                            } : {}
                        }
                        return {
                            prevOutType: l.NONSTANDARD,
                            prevOutScript: e
                        }
                    }(r.script, r.witness || [])), void 0 !== r.value && (i.value = r.value), !i.prevOutScript && r.prevOutScript) {
                    let t;
                    if (!i.pubkeys && !i.signatures) {
                        const e = m(r.prevOutScript);
                        e.pubkeys && (i.pubkeys = e.pubkeys, i.signatures = e.signatures), t = e.type
                    }
                    i.prevOutScript = r.prevOutScript, i.prevOutType = t || d.output(r.prevOutScript)
                }
                const o = this.__tx.addInput(t, e, r.sequence, r.scriptSig);
                return this.__inputs[o] = i, this.__prevTxSet[n] = !0, o
            }, y.prototype.addOutput = function(t, e) {
                if (!this.__canModifyOutputs()) throw new Error("No, this would invalidate signatures");
                return "string" == typeof t && (t = i.toOutputScript(t, this.network)), this.__tx.addOutput(t, e)
            }, y.prototype.build = function() {
                return this.__build(!1)
            }, y.prototype.buildIncomplete = function() {
                return this.__build(!0)
            }, y.prototype.__build = function(t) {
                if (!t) {
                    if (!this.__tx.ins.length) throw new Error("Transaction has no inputs");
                    if (!this.__tx.outs.length) throw new Error("Transaction has no outputs")
                }
                const e = this.__tx.clone();
                if (this.__inputs.forEach(function(r, n) {
                        if (!r.prevOutType && !t) throw new Error("Transaction is not complete");
                        const i = function t(e, r, n) {
                            const i = r.pubkeys || [];
                            let o = r.signatures || [];
                            switch (e) {
                                case l.P2PKH:
                                    if (0 === i.length) break;
                                    if (0 === o.length) break;
                                    return u.p2pkh({
                                        pubkey: i[0],
                                        signature: o[0]
                                    });
                                case l.P2WPKH:
                                    if (0 === i.length) break;
                                    if (0 === o.length) break;
                                    return u.p2wpkh({
                                        pubkey: i[0],
                                        signature: o[0]
                                    });
                                case l.P2PK:
                                    if (0 === i.length) break;
                                    if (0 === o.length) break;
                                    return u.p2pk({
                                        signature: o[0]
                                    });
                                case l.P2MS: {
                                    const t = r.maxSignatures;
                                    o = n ? o.map(t => t || a.OP_0) : o.filter(t => t);
                                    const e = !n || t === o.length;
                                    return u.p2ms({
                                        m: t,
                                        pubkeys: i,
                                        signatures: o
                                    }, {
                                        allowIncomplete: n,
                                        validate: e
                                    })
                                }
                                case l.P2SH: {
                                    const e = t(r.redeemScriptType, r, n);
                                    if (!e) return;
                                    return u.p2sh({
                                        redeem: {
                                            output: e.output || r.redeemScript,
                                            input: e.input,
                                            witness: e.witness
                                        }
                                    })
                                }
                                case l.P2WSH: {
                                    const e = t(r.witnessScriptType, r, n);
                                    if (!e) return;
                                    return u.p2wsh({
                                        redeem: {
                                            output: r.witnessScript,
                                            input: e.input,
                                            witness: e.witness
                                        }
                                    })
                                }
                            }
                        }(r.prevOutType, r, t);
                        if (i) e.setInputScript(n, i.input), e.setWitness(n, i.witness);
                        else {
                            if (!t && r.prevOutType === l.NONSTANDARD) throw new Error("Unknown input type");
                            if (!t) throw new Error("Not enough information")
                        }
                    }), !t && this.__overMaximumFees(e.virtualSize())) throw new Error("Transaction has absurd fees");
                return e
            }, y.prototype.sign = function(t, e, r, n, i, o) {
                if (e.network && e.network !== this.network) throw new TypeError("Inconsistent network");
                if (!this.__inputs[t]) throw new Error("No input at index: " + t);
                if (n = n || b.SIGHASH_ALL, this.__needsOutputs(n)) throw new Error("Transaction needs outputs");
                const f = this.__inputs[t];
                if (void 0 !== f.redeemScript && r && !f.redeemScript.equals(r)) throw new Error("Inconsistent redeemScript");
                const a = e.publicKey || e.getPublicKey();
                if (!g(f)) {
                    if (void 0 !== i) {
                        if (void 0 !== f.value && f.value !== i) throw new Error("Input didn't match witnessValue");
                        c(h.Satoshi, i), f.value = i
                    }
                    if (!g(f)) {
                        const t = function(t, e, r, n, i) {
                            if (r && i) {
                                const n = u.p2wsh({
                                        redeem: {
                                            output: i
                                        }
                                    }),
                                    o = u.p2wsh({
                                        output: r
                                    }),
                                    f = u.p2sh({
                                        redeem: {
                                            output: r
                                        }
                                    }),
                                    a = u.p2sh({
                                        redeem: n
                                    });
                                if (!n.hash.equals(o.hash)) throw new Error("Witness script inconsistent with prevOutScript");
                                if (!f.hash.equals(a.hash)) throw new Error("Redeem script inconsistent with prevOutScript");
                                const c = m(n.redeem.output, e);
                                if (!c.pubkeys) throw new Error(c.type + " not supported as witnessScript (" + s.toASM(i) + ")");
                                t.signatures && t.signatures.some(t => t) && (c.signatures = t.signatures);
                                let h = i;
                                if (c.type === l.P2WPKH) throw new Error("P2SH(P2WSH(P2WPKH)) is a consensus failure");
                                return {
                                    redeemScript: r,
                                    redeemScriptType: l.P2WSH,
                                    witnessScript: i,
                                    witnessScriptType: c.type,
                                    prevOutType: l.P2SH,
                                    prevOutScript: f.output,
                                    hasWitness: !0,
                                    signScript: h,
                                    signType: c.type,
                                    pubkeys: c.pubkeys,
                                    signatures: c.signatures,
                                    maxSignatures: c.maxSignatures
                                }
                            }
                            if (r) {
                                const n = u.p2sh({
                                    redeem: {
                                        output: r
                                    }
                                });
                                if (t.prevOutScript) {
                                    let e;
                                    try {
                                        e = u.p2sh({
                                            output: t.prevOutScript
                                        })
                                    } catch (t) {
                                        throw new Error("PrevOutScript must be P2SH")
                                    }
                                    if (!n.hash.equals(e.hash)) throw new Error("Redeem script inconsistent with prevOutScript")
                                }
                                const i = m(n.redeem.output, e);
                                if (!i.pubkeys) throw new Error(i.type + " not supported as redeemScript (" + s.toASM(r) + ")");
                                t.signatures && t.signatures.some(t => t) && (i.signatures = t.signatures);
                                let o = r;
                                return i.type === l.P2WPKH && (o = u.p2pkh({
                                    pubkey: i.pubkeys[0]
                                }).output), {
                                    redeemScript: r,
                                    redeemScriptType: i.type,
                                    prevOutType: l.P2SH,
                                    prevOutScript: n.output,
                                    hasWitness: i.type === l.P2WPKH,
                                    signScript: o,
                                    signType: i.type,
                                    pubkeys: i.pubkeys,
                                    signatures: i.signatures,
                                    maxSignatures: i.maxSignatures
                                }
                            }
                            if (i) {
                                const r = u.p2wsh({
                                    redeem: {
                                        output: i
                                    }
                                });
                                if (t.prevOutScript) {
                                    const e = u.p2wsh({
                                        output: t.prevOutScript
                                    });
                                    if (!r.hash.equals(e.hash)) throw new Error("Witness script inconsistent with prevOutScript")
                                }
                                const n = m(r.redeem.output, e);
                                if (!n.pubkeys) throw new Error(n.type + " not supported as witnessScript (" + s.toASM(i) + ")");
                                t.signatures && t.signatures.some(t => t) && (n.signatures = t.signatures);
                                let o = i;
                                if (n.type === l.P2WPKH) throw new Error("P2WSH(P2WPKH) is a consensus failure");
                                return {
                                    witnessScript: i,
                                    witnessScriptType: n.type,
                                    prevOutType: l.P2WSH,
                                    prevOutScript: r.output,
                                    hasWitness: !0,
                                    signScript: o,
                                    signType: n.type,
                                    pubkeys: n.pubkeys,
                                    signatures: n.signatures,
                                    maxSignatures: n.maxSignatures
                                }
                            }
                            if (t.prevOutType && t.prevOutScript) {
                                if (t.prevOutType === l.P2SH) throw new Error("PrevOutScript is " + t.prevOutType + ", requires redeemScript");
                                if (t.prevOutType === l.P2WSH) throw new Error("PrevOutScript is " + t.prevOutType + ", requires witnessScript");
                                if (!t.prevOutScript) throw new Error("PrevOutScript is missing");
                                const r = m(t.prevOutScript, e);
                                if (!r.pubkeys) throw new Error(r.type + " not supported (" + s.toASM(t.prevOutScript) + ")");
                                t.signatures && t.signatures.some(t => t) && (r.signatures = t.signatures);
                                let n = t.prevOutScript;
                                return r.type === l.P2WPKH && (n = u.p2pkh({
                                    pubkey: r.pubkeys[0]
                                }).output), {
                                    prevOutType: r.type,
                                    prevOutScript: t.prevOutScript,
                                    hasWitness: r.type === l.P2WPKH,
                                    signScript: n,
                                    signType: r.type,
                                    pubkeys: r.pubkeys,
                                    signatures: r.signatures,
                                    maxSignatures: r.maxSignatures
                                }
                            }
                            const o = u.p2pkh({
                                pubkey: e
                            }).output;
                            return {
                                prevOutType: l.P2PKH,
                                prevOutScript: o,
                                hasWitness: !1,
                                signScript: o,
                                signType: l.P2PKH,
                                pubkeys: [e],
                                signatures: [void 0]
                            }
                        }(f, a, r, 0, o);
                        Object.assign(f, t)
                    }
                    if (!g(f)) throw Error(f.prevOutType + " not supported")
                }
                var d;
                if (d = this.__bitcoinGold ? this.__tx.hashForGoldSignature(t, f.signScript, f.value, n, f.witness) : this.__bitcoinCash ? this.__tx.hashForCashSignature(t, f.signScript, f.value, n) : this.__rvl ? this.__tx.hashForRVLSignature(t, f.signScript, f.value, n) : f.hasWitness ? this.__tx.hashForWitnessV0(t, f.signScript, f.value, n) : this.__tx.hashForSignature(t, f.signScript, n), !f.pubkeys.some(function(t, r) {
                        if (!a.equals(t)) return !1;
                        if (f.signatures[r]) throw new Error("Signature already exists");
                        if (33 !== a.length && f.hasWitness) throw new Error("BIP143 rejects uncompressed public keys in P2WPKH or P2WSH");
                        const i = e.sign(d);
                        return f.signatures[r] = s.signature.encode(i, n), !0
                    })) throw new Error("Key pair cannot sign for this input")
            }, 
            y.prototype.__canModifyInputs = function() {
                return this.__inputs.every(function(t) {
                    return !t.signatures || t.signatures.every(function(t) {
                        if (!t) return !0;
                        return v(t) & b.SIGHASH_ANYONECANPAY
                    })
                })
            }, y.prototype.__needsOutputs = function(t) {
                return t === b.SIGHASH_ALL ? 0 === this.__tx.outs.length : 0 === this.__tx.outs.length && this.__inputs.some(t => !!t.signatures && t.signatures.some(t => {
                    if (!t) return !1;
                    return !(v(t) & b.SIGHASH_NONE)
                }))
            }, y.prototype.__canModifyOutputs = function() {
                const t = this.__tx.ins.length,
                    e = this.__tx.outs.length;
                return this.__inputs.every(function(r) {
                    return void 0 === r.signatures || r.signatures.every(function(r) {
                        if (!r) return !0;
                        const n = 31 & v(r);
                        return n === b.SIGHASH_NONE || (n === b.SIGHASH_SINGLE ? t <= e : void 0)
                    })
                })
            }, y.prototype.__overMaximumFees = function(t) {
                return (this.__inputs.reduce(function(t, e) {
                    return t + (e.value >>> 0)
                }, 0) - this.__tx.outs.reduce(function(t, e) {
                    return t + e.value
                }, 0)) / t > this.maximumFeeRate
            }, e.exports = y
        }, {
            "./address": 125,
            "./classify": 128,
            "./crypto": 129,
            "./ecpair": 130,
            "./networks": 131,
            "./payments": 133,
            "./script": 141,
            "./transaction": 165,
            "./types": 167,
            "bitcoin-ops": 41,
            "safe-buffer": 106,
            typeforce: 120
        }],
        167: [function(t, e, r) {
            const n = t("typeforce"),
                i = Math.pow(2, 31) - 1;

            function o(t) {
                return n.String(t) && t.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
            }
            o.toJSON = function() {
                return "BIP32 derivation path"
            };
            const s = 21e14;
            const f = n.quacksLike("Point"),
                a = n.compile({
                    messagePrefix: n.oneOf(n.Buffer, n.String),
                    bip32: {
                        public: n.UInt32,
                        private: n.UInt32
                    },
                    pubKeyHash: n.UInt8,
                    scriptHash: n.UInt8,
                    wif: n.UInt8
                }),
                u = {
                    BIP32Path: o,
                    Buffer256bit: n.BufferN(32),
                    ECPoint: f,
                    Hash160bit: n.BufferN(20),
                    Hash256bit: n.BufferN(32),
                    Network: a,
                    Satoshi: function(t) {
                        return n.UInt53(t) && t <= s
                    },
                    UInt31: function(t) {
                        return n.UInt32(t) && t <= i
                    }
                };
            for (var c in n) u[c] = n[c];
            e.exports = u
        }, {
            typeforce: 120
        }]
    }, {}, [])("/")
});