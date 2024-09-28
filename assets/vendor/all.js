!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.AOS = t());
})(this, function () {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        t = "Expected a function",
        i = NaN,
        s = /^\s+|\s+$/g,
        n = /^[-+]0x[0-9a-f]+$/i,
        r = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        o = parseInt,
        l = "object" == typeof e && e && e.Object === Object && e,
        d = "object" == typeof self && self && self.Object === Object && self,
        c = l || d || Function("return this")(),
        u = Object.prototype.toString,
        h = Math.max,
        p = Math.min,
        f = function () {
            return c.Date.now();
        };
    function m(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function g(e) {
        if ("number" == typeof e) return e;
        if ("symbol" == typeof (t = e) || ((l = t) && "object" == typeof l && "[object Symbol]" == u.call(t))) return i;
        if (m(e)) {
            var t,
                l,
                d = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = m(d) ? d + "" : d;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(s, "");
        var c = r.test(e);
        return c || a.test(e) ? o(e.slice(2), c ? 2 : 8) : n.test(e) ? i : +e;
    }
    var v = function (e, i, s) {
            var n = !0,
                r = !0;
            if ("function" != typeof e) throw TypeError(t);
            return (
                m(s) && ((n = "leading" in s ? !!s.leading : n), (r = "trailing" in s ? !!s.trailing : r)),
                (function e(i, s, n) {
                    var r,
                        a,
                        o,
                        l,
                        d,
                        c,
                        u = 0,
                        v = !1,
                        $ = !1,
                        y = !0;
                    if ("function" != typeof i) throw TypeError(t);
                    function b(e) {
                        var t = r,
                            s = a;
                        return (r = a = void 0), (u = e), (l = i.apply(s, t));
                    }
                    function w(e) {
                        var t = e - c;
                        return void 0 === c || t >= s || t < 0 || ($ && e - u >= o);
                    }
                    function _() {
                        var e,
                            t,
                            i = f();
                        if (w(i)) return x(i);
                        d = setTimeout(_, ((e = i), (t = s - (e - c)), $ ? p(t, o - (e - u)) : t));
                    }
                    function x(e) {
                        return (d = void 0), y && r ? b(e) : ((r = a = void 0), l);
                    }
                    function E() {
                        var e,
                            t = f(),
                            i = w(t);
                        if (((r = arguments), (a = this), (c = t), i)) {
                            if (void 0 === d) return (u = e = c), (d = setTimeout(_, s)), v ? b(e) : l;
                            if ($) return (d = setTimeout(_, s)), b(c);
                        }
                        return void 0 === d && (d = setTimeout(_, s)), l;
                    }
                    return (
                        (s = g(s) || 0),
                        m(n) && ((v = !!n.leading), (o = ($ = "maxWait" in n) ? h(g(n.maxWait) || 0, s) : o), (y = "trailing" in n ? !!n.trailing : y)),
                        (E.cancel = function () {
                            void 0 !== d && clearTimeout(d), (u = 0), (r = c = a = d = void 0);
                        }),
                        (E.flush = function () {
                            return void 0 === d ? l : x(f());
                        }),
                        E
                    );
                })(e, i, { leading: n, maxWait: i, trailing: r })
            );
        },
        $ = NaN,
        y = /^\s+|\s+$/g,
        b = /^[-+]0x[0-9a-f]+$/i,
        w = /^0b[01]+$/i,
        _ = /^0o[0-7]+$/i,
        x = parseInt,
        E = "object" == typeof e && e && e.Object === Object && e,
        C = "object" == typeof self && self && self.Object === Object && self,
        S = E || C || Function("return this")(),
        T = Object.prototype.toString,
        k = Math.max,
        A = Math.min,
        L = function () {
            return S.Date.now();
        };
    function P(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function z(e) {
        if ("number" == typeof e) return e;
        if ("symbol" == typeof (t = e) || ((i = t) && "object" == typeof i && "[object Symbol]" == T.call(t))) return $;
        if (P(e)) {
            var t,
                i,
                s = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = P(s) ? s + "" : s;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(y, "");
        var n = w.test(e);
        return n || _.test(e) ? x(e.slice(2), n ? 2 : 8) : b.test(e) ? $ : +e;
    }
    var I = function (e, t, i) {
            var s,
                n,
                r,
                a,
                o,
                l,
                d = 0,
                c = !1,
                u = !1,
                h = !0;
            if ("function" != typeof e) throw TypeError("Expected a function");
            function p(t) {
                var i = s,
                    r = n;
                return (s = n = void 0), (d = t), (a = e.apply(r, i));
            }
            function f(e) {
                var i = e - l;
                return void 0 === l || i >= t || i < 0 || (u && e - d >= r);
            }
            function m() {
                var e,
                    i,
                    s = L();
                if (f(s)) return g(s);
                o = setTimeout(m, ((e = s), (i = t - (e - l)), u ? A(i, r - (e - d)) : i));
            }
            function g(e) {
                return (o = void 0), h && s ? p(e) : ((s = n = void 0), a);
            }
            function v() {
                var e,
                    i = L(),
                    r = f(i);
                if (((s = arguments), (n = this), (l = i), r)) {
                    if (void 0 === o) return (d = e = l), (o = setTimeout(m, t)), c ? p(e) : a;
                    if (u) return (o = setTimeout(m, t)), p(l);
                }
                return void 0 === o && (o = setTimeout(m, t)), a;
            }
            return (
                (t = z(t) || 0),
                P(i) && ((c = !!i.leading), (r = (u = "maxWait" in i) ? k(z(i.maxWait) || 0, t) : r), (h = "trailing" in i ? !!i.trailing : h)),
                (v.cancel = function () {
                    void 0 !== o && clearTimeout(o), (d = 0), (s = l = n = o = void 0);
                }),
                (v.flush = function () {
                    return void 0 === o ? a : g(L());
                }),
                v
            );
        },
        O = function () {};
    function M(e) {
        e &&
            e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    i = Array.prototype.slice.call(e.removedNodes);
                if (
                    (function e(t) {
                        var i = void 0,
                            s = void 0;
                        for (i = 0; i < t.length; i += 1) if (((s = t[i]).dataset && s.dataset.aos) || (s.children && e(s.children))) return !0;
                        return !1;
                    })(t.concat(i))
                )
                    return O();
            });
    }
    function D() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }
    var N = {
            isSupported: function () {
                return !!D();
            },
            ready: function (e, t) {
                var i = window.document,
                    s = new (D())(M);
                (O = t), s.observe(i.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
            },
        },
        H = function (e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        },
        W = (function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
                }
            }
            return function (t, i, s) {
                return i && e(t.prototype, i), s && e(t, s), t;
            };
        })(),
        B =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
                }
                return e;
            },
        q = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        Y = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        R = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        X = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    function j() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
    }
    var F = new ((function () {
            function e() {
                H(this, e);
            }
            return (
                W(e, [
                    {
                        key: "phone",
                        value: function () {
                            var e = j();
                            return !(!q.test(e) && !Y.test(e.substr(0, 4)));
                        },
                    },
                    {
                        key: "mobile",
                        value: function () {
                            var e = j();
                            return !(!R.test(e) && !X.test(e.substr(0, 4)));
                        },
                    },
                    {
                        key: "tablet",
                        value: function () {
                            return this.mobile() && !this.phone();
                        },
                    },
                    {
                        key: "ie11",
                        value: function () {
                            return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                        },
                    },
                ]),
                e
            );
        })())(),
        G = function (e, t) {
            var i = void 0;
            return F.ie11() ? (i = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, { detail: t }) : (i = new CustomEvent(e, { detail: t })), document.dispatchEvent(i);
        },
        V = function (e) {
            return e.forEach(function (e, t) {
                var i, s, n, r, a, o, l, d;
                return (
                    (i = e),
                    (s = window.pageYOffset),
                    (n = i.options),
                    (r = i.position),
                    (a = i.node),
                    (o =
                        (i.data,
                        function () {
                            var e, t;
                            i.animated &&
                                ((e = a),
                                (t = n.animatedClassNames) &&
                                    t.forEach(function (t) {
                                        return e.classList.remove(t);
                                    }),
                                G("aos:out", a),
                                i.options.id && G("aos:in:" + i.options.id, a),
                                (i.animated = !1));
                        })),
                    void (n.mirror && s >= r.out && !n.once
                        ? o()
                        : s >= r.in
                        ? i.animated ||
                          ((l = a),
                          (d = n.animatedClassNames) &&
                              d.forEach(function (e) {
                                  return l.classList.add(e);
                              }),
                          G("aos:in", a),
                          i.options.id && G("aos:in:" + i.options.id, a),
                          (i.animated = !0))
                        : i.animated && !n.once && o())
                );
            });
        },
        U = function (e) {
            for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); ) (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)), (i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)), (e = e.offsetParent);
            return { top: i, left: t };
        },
        Q = function (e, t, i) {
            var s = e.getAttribute("data-aos-" + t);
            if (void 0 !== s) {
                if ("true" === s) return !0;
                if ("false" === s) return !1;
            }
            return s || i;
        },
        K = function () {
            var e = document.querySelectorAll("[data-aos]");
            return Array.prototype.map.call(e, function (e) {
                return { node: e };
            });
        },
        Z = [],
        J = !1,
        ee = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom",
            startEvent: "DOMContentLoaded",
            animatedClassName: "aos-animate",
            initClassName: "aos-init",
            useClassNames: !1,
            disableMutationObserver: !1,
            throttleDelay: 99,
            debounceDelay: 50,
        },
        et = function () {
            return document.all && !window.atob;
        },
        ei = function () {
            var e, t;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (J = !0),
                J &&
                    ((Z =
                        ((e = Z),
                        (t = ee),
                        e.forEach(function (e, i) {
                            var s,
                                n,
                                r,
                                a,
                                o,
                                l = Q(e.node, "mirror", t.mirror),
                                d = Q(e.node, "once", t.once),
                                c = Q(e.node, "id"),
                                u = t.useClassNames && e.node.getAttribute("data-aos"),
                                h = [t.animatedClassName].concat(u ? u.split(" ") : []).filter(function (e) {
                                    return "string" == typeof e;
                                });
                            t.initClassName && e.node.classList.add(t.initClassName),
                                (e.position = {
                                    in: (function (e, t, i) {
                                        var s = window.innerHeight,
                                            n = Q(e, "anchor"),
                                            r = Q(e, "anchor-placement"),
                                            a = Number(Q(e, "offset", r ? 0 : t)),
                                            o = r || i,
                                            l = e;
                                        n && document.querySelectorAll(n) && (l = document.querySelectorAll(n)[0]);
                                        var d = U(l).top - s;
                                        switch (o) {
                                            case "top-bottom":
                                                break;
                                            case "center-bottom":
                                                d += l.offsetHeight / 2;
                                                break;
                                            case "bottom-bottom":
                                                d += l.offsetHeight;
                                                break;
                                            case "top-center":
                                                d += s / 2;
                                                break;
                                            case "center-center":
                                                d += s / 2 + l.offsetHeight / 2;
                                                break;
                                            case "bottom-center":
                                                d += s / 2 + l.offsetHeight;
                                                break;
                                            case "top-top":
                                                d += s;
                                                break;
                                            case "bottom-top":
                                                d += s + l.offsetHeight;
                                                break;
                                            case "center-top":
                                                d += s + l.offsetHeight / 2;
                                        }
                                        return d + a;
                                    })(e.node, t.offset, t.anchorPlacement),
                                    out:
                                        l &&
                                        ((s = e.node),
                                        (n = t.offset),
                                        window.innerHeight,
                                        (r = Q(s, "anchor")),
                                        (a = Q(s, "offset", n)),
                                        (o = s),
                                        r && document.querySelectorAll(r) && (o = document.querySelectorAll(r)[0]),
                                        U(o).top + o.offsetHeight - a),
                                }),
                                (e.options = { once: d, mirror: l, animatedClassNames: h, id: c });
                        }),
                        e)),
                    V(Z),
                    window.addEventListener(
                        "scroll",
                        v(function () {
                            V(Z, ee.once);
                        }, ee.throttleDelay)
                    ));
        },
        es = function () {
            if (((Z = K()), er(ee.disable) || et())) return en();
            ei();
        },
        en = function () {
            Z.forEach(function (e, t) {
                e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay"),
                    ee.initClassName && e.node.classList.remove(ee.initClassName),
                    ee.animatedClassName && e.node.classList.remove(ee.animatedClassName);
            });
        },
        er = function (e) {
            return !0 === e || ("mobile" === e && F.mobile()) || ("phone" === e && F.phone()) || ("tablet" === e && F.tablet()) || ("function" == typeof e && !0 === e());
        };
    return {
        init: function (e) {
            return (
                (ee = B(ee, e)),
                (Z = K()),
                ee.disableMutationObserver ||
                    N.isSupported() ||
                    (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                    (ee.disableMutationObserver = !0)),
                ee.disableMutationObserver || N.ready("[data-aos]", es),
                er(ee.disable) || et()
                    ? en()
                    : (document.querySelector("body").setAttribute("data-aos-easing", ee.easing),
                      document.querySelector("body").setAttribute("data-aos-duration", ee.duration),
                      document.querySelector("body").setAttribute("data-aos-delay", ee.delay),
                      -1 === ["DOMContentLoaded", "load"].indexOf(ee.startEvent)
                          ? document.addEventListener(ee.startEvent, function () {
                                ei(!0);
                            })
                          : window.addEventListener("load", function () {
                                ei(!0);
                            }),
                      "DOMContentLoaded" === ee.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && ei(!0),
                      window.addEventListener("resize", I(ei, ee.debounceDelay, !0)),
                      window.addEventListener("orientationchange", I(ei, ee.debounceDelay, !0)),
                      Z)
            );
        },
        refresh: ei,
        refreshHard: es,
    };
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t());
    })(this, function () {
        "use strict";
        let e = new Map(),
            t = {
                set(t, i, s) {
                    e.has(t) || e.set(t, new Map());
                    let n = e.get(t);
                    n.has(i) || 0 === n.size ? n.set(i, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
                },
                get: (t, i) => (e.has(t) && e.get(t).get(i)) || null,
                remove(t, i) {
                    if (!e.has(t)) return;
                    let s = e.get(t);
                    s.delete(i), 0 === s.size && e.delete(t);
                },
            },
            i = "transitionend",
            s = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)), e),
            n = (e) => {
                e.dispatchEvent(new Event(i));
            },
            r = (e) => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
            a = (e) => (r(e) ? (e.jquery ? e[0] : e) : "string" == typeof e && e.length > 0 ? document.querySelector(s(e)) : null),
            o = (e) => {
                if (!r(e) || 0 === e.getClientRects().length) return !1;
                let t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                    i = e.closest("details:not([open])");
                if (!i) return t;
                if (i !== e) {
                    let s = e.closest("summary");
                    if ((s && s.parentNode !== i) || null === s) return !1;
                }
                return t;
            },
            l = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
            d = (e) => {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    let t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null;
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? d(e.parentNode) : null;
            },
            c = () => {},
            u = (e) => {
                e.offsetHeight;
            },
            h = () => (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null),
            p = [],
            f = () => "rtl" === document.documentElement.dir,
            m = (e) => {
                var t;
                (t = () => {
                    let t = h();
                    if (t) {
                        let i = e.NAME,
                            s = t.fn[i];
                        (t.fn[i] = e.jQueryInterface), (t.fn[i].Constructor = e), (t.fn[i].noConflict = () => ((t.fn[i] = s), e.jQueryInterface));
                    }
                }),
                    "loading" === document.readyState
                        ? (p.length ||
                              document.addEventListener("DOMContentLoaded", () => {
                                  for (let e of p) e();
                              }),
                          p.push(t))
                        : t();
            },
            g = (e, t = [], i = e) => ("function" == typeof e ? e(...t) : i),
            v = (e, t, s = !0) => {
                if (!s) return void g(e);
                let r =
                        ((e) => {
                            if (!e) return 0;
                            let { transitionDuration: t, transitionDelay: i } = window.getComputedStyle(e),
                                s = Number.parseFloat(t),
                                n = Number.parseFloat(i);
                            return s || n ? ((t = t.split(",")[0]), (i = i.split(",")[0]), 1e3 * (Number.parseFloat(t) + Number.parseFloat(i))) : 0;
                        })(t) + 5,
                    a = !1,
                    o = ({ target: s }) => {
                        s === t && ((a = !0), t.removeEventListener(i, o), g(e));
                    };
                t.addEventListener(i, o),
                    setTimeout(() => {
                        a || n(t);
                    }, r);
            },
            $ = (e, t, i, s) => {
                let n = e.length,
                    r = e.indexOf(t);
                return -1 === r ? (!i && s ? e[n - 1] : e[0]) : ((r += i ? 1 : -1), s && (r = (r + n) % n), e[Math.max(0, Math.min(r, n - 1))]);
            },
            y = /[^.]*(?=\..*)\.|.*/,
            b = /\..*/,
            w = /::\d+$/,
            _ = {},
            x = 1,
            E = { mouseenter: "mouseover", mouseleave: "mouseout" },
            C = new Set([
                "click",
                "dblclick",
                "mouseup",
                "mousedown",
                "contextmenu",
                "mousewheel",
                "DOMMouseScroll",
                "mouseover",
                "mouseout",
                "mousemove",
                "selectstart",
                "selectend",
                "keydown",
                "keypress",
                "keyup",
                "orientationchange",
                "touchstart",
                "touchmove",
                "touchend",
                "touchcancel",
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointerleave",
                "pointercancel",
                "gesturestart",
                "gesturechange",
                "gestureend",
                "focus",
                "blur",
                "change",
                "reset",
                "select",
                "submit",
                "focusin",
                "focusout",
                "load",
                "unload",
                "beforeunload",
                "resize",
                "move",
                "DOMContentLoaded",
                "readystatechange",
                "error",
                "abort",
                "scroll",
            ]);
        function S(e, t) {
            return (t && `${t}::${x++}`) || e.uidEvent || x++;
        }
        function T(e) {
            let t = S(e);
            return (e.uidEvent = t), (_[t] = _[t] || {}), _[t];
        }
        function k(e, t, i = null) {
            return Object.values(e).find((e) => e.callable === t && e.delegationSelector === i);
        }
        function A(e, t, i) {
            let s = "string" == typeof t,
                n = I(e);
            return C.has(n) || (n = e), [s, s ? i : t || i, n];
        }
        function L(e, t, i, s, n) {
            var r, a, o, l, d, c;
            if ("string" != typeof t || !e) return;
            let [u, h, p] = A(t, i, s);
            t in E &&
                (h =
                    ((r = h),
                    function (e) {
                        if (!e.relatedTarget || (e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))) return r.call(this, e);
                    }));
            let f = T(e),
                m = f[p] || (f[p] = {}),
                g = k(m, h, u ? i : null);
            if (g) return void (g.oneOff = g.oneOff && n);
            let v = S(h, t.replace(y, "")),
                $ = u
                    ? ((a = e),
                      (o = i),
                      (l = h),
                      function e(t) {
                          let i = a.querySelectorAll(o);
                          for (let { target: s } = t; s && s !== this; s = s.parentNode) for (let n of i) if (n === s) return M(t, { delegateTarget: s }), e.oneOff && O.off(a, t.type, o, l), l.apply(s, [t]);
                      })
                    : ((d = e),
                      (c = h),
                      function e(t) {
                          return M(t, { delegateTarget: d }), e.oneOff && O.off(d, t.type, c), c.apply(d, [t]);
                      });
            ($.delegationSelector = u ? i : null), ($.callable = h), ($.oneOff = n), ($.uidEvent = v), (m[v] = $), e.addEventListener(p, $, u);
        }
        function P(e, t, i, s, n) {
            let r = k(t[i], s, n);
            r && (e.removeEventListener(i, r, Boolean(n)), delete t[i][r.uidEvent]);
        }
        function z(e, t, i, s) {
            let n = t[i] || {};
            for (let [r, a] of Object.entries(n)) r.includes(s) && P(e, t, i, a.callable, a.delegationSelector);
        }
        function I(e) {
            return E[(e = e.replace(b, ""))] || e;
        }
        let O = {
            on(e, t, i, s) {
                L(e, t, i, s, !1);
            },
            one(e, t, i, s) {
                L(e, t, i, s, !0);
            },
            off(e, t, i, s) {
                if ("string" != typeof t || !e) return;
                let [n, r, a] = A(t, i, s),
                    o = a !== t,
                    l = T(e),
                    d = l[a] || {},
                    c = t.startsWith(".");
                if (void 0 === r) {
                    if (c) for (let u of Object.keys(l)) z(e, l, u, t.slice(1));
                    for (let [h, p] of Object.entries(d)) {
                        let f = h.replace(w, "");
                        (o && !t.includes(f)) || P(e, l, a, p.callable, p.delegationSelector);
                    }
                } else {
                    if (!Object.keys(d).length) return;
                    P(e, l, a, r, n ? i : null);
                }
            },
            trigger(e, t, i) {
                if ("string" != typeof t || !e) return null;
                let s = h(),
                    n = null,
                    r = !0,
                    a = !0,
                    o = !1;
                t !== I(t) && s && ((n = s.Event(t, i)), s(e).trigger(n), (r = !n.isPropagationStopped()), (a = !n.isImmediatePropagationStopped()), (o = n.isDefaultPrevented()));
                let l = M(new Event(t, { bubbles: r, cancelable: !0 }), i);
                return o && l.preventDefault(), a && e.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l;
            },
        };
        function M(e, t = {}) {
            for (let [i, s] of Object.entries(t))
                try {
                    e[i] = s;
                } catch (n) {
                    Object.defineProperty(e, i, { configurable: !0, get: () => s });
                }
            return e;
        }
        function D(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e === Number(e).toString()) return Number(e);
            if ("" === e || "null" === e) return null;
            if ("string" != typeof e) return e;
            try {
                return JSON.parse(decodeURIComponent(e));
            } catch (t) {
                return e;
            }
        }
        function N(e) {
            return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
        }
        let H = {
            setDataAttribute(e, t, i) {
                e.setAttribute(`data-bs-${N(t)}`, i);
            },
            removeDataAttribute(e, t) {
                e.removeAttribute(`data-bs-${N(t)}`);
            },
            getDataAttributes(e) {
                if (!e) return {};
                let t = {},
                    i = Object.keys(e.dataset).filter((e) => e.startsWith("bs") && !e.startsWith("bsConfig"));
                for (let s of i) {
                    let n = s.replace(/^bs/, "");
                    t[(n = n.charAt(0).toLowerCase() + n.slice(1, n.length))] = D(e.dataset[s]);
                }
                return t;
            },
            getDataAttribute: (e, t) => D(e.getAttribute(`data-bs-${N(t)}`)),
        };
        class W {
            static get Default() {
                return {};
            }
            static get DefaultType() {
                return {};
            }
            static get NAME() {
                throw Error('You have to implement the static method "NAME", for each component!');
            }
            _getConfig(e) {
                return (e = this._mergeConfigObj(e)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
            }
            _configAfterMerge(e) {
                return e;
            }
            _mergeConfigObj(e, t) {
                let i = r(t) ? H.getDataAttribute(t, "config") : {};
                return { ...this.constructor.Default, ...("object" == typeof i ? i : {}), ...(r(t) ? H.getDataAttributes(t) : {}), ...("object" == typeof e ? e : {}) };
            }
            _typeCheckConfig(e, t = this.constructor.DefaultType) {
                var i;
                for (let [s, n] of Object.entries(t)) {
                    let a = e[s],
                        o = r(a)
                            ? "element"
                            : null == (i = a)
                            ? `${i}`
                            : Object.prototype.toString
                                  .call(i)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                    if (!RegExp(n).test(o)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`);
                }
            }
        }
        class B extends W {
            constructor(e, i) {
                super(), (e = a(e)) && ((this._element = e), (this._config = this._getConfig(i)), t.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
                for (let e of (t.remove(this._element, this.constructor.DATA_KEY), O.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this))) this[e] = null;
            }
            _queueCallback(e, t, i = !0) {
                v(e, t, i);
            }
            _getConfig(e) {
                return (e = this._mergeConfigObj(e, this._element)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
            }
            static getInstance(e) {
                return t.get(a(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
                return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
            }
            static get VERSION() {
                return "5.3.2";
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`;
            }
            static eventName(e) {
                return `${e}${this.EVENT_KEY}`;
            }
        }
        let q = (e) => {
                let t = e.getAttribute("data-bs-target");
                if (!t || "#" === t) {
                    let i = e.getAttribute("href");
                    if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                    i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), (t = i && "#" !== i ? s(i.trim()) : null);
                }
                return t;
            },
            Y = {
                find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
                findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
                children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
                parents(e, t) {
                    let i = [],
                        s = e.parentNode.closest(t);
                    for (; s; ) i.push(s), (s = s.parentNode.closest(t));
                    return i;
                },
                prev(e, t) {
                    let i = e.previousElementSibling;
                    for (; i; ) {
                        if (i.matches(t)) return [i];
                        i = i.previousElementSibling;
                    }
                    return [];
                },
                next(e, t) {
                    let i = e.nextElementSibling;
                    for (; i; ) {
                        if (i.matches(t)) return [i];
                        i = i.nextElementSibling;
                    }
                    return [];
                },
                focusableChildren(e) {
                    let t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(",");
                    return this.find(t, e).filter((e) => !l(e) && o(e));
                },
                getSelectorFromElement(e) {
                    let t = q(e);
                    return t && Y.findOne(t) ? t : null;
                },
                getElementFromSelector(e) {
                    let t = q(e);
                    return t ? Y.findOne(t) : null;
                },
                getMultipleElementsFromSelector(e) {
                    let t = q(e);
                    return t ? Y.find(t) : [];
                },
            },
            R = (e, t = "hide") => {
                let i = `click.dismiss${e.EVENT_KEY}`,
                    s = e.NAME;
                O.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
                    if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this))) return;
                    let n = Y.getElementFromSelector(this) || this.closest(`.${s}`);
                    e.getOrCreateInstance(n)[t]();
                });
            },
            X = ".bs.alert",
            j = `close${X}`,
            F = `closed${X}`;
        class G extends B {
            static get NAME() {
                return "alert";
            }
            close() {
                if (O.trigger(this._element, j).defaultPrevented) return;
                this._element.classList.remove("show");
                let e = this._element.classList.contains("fade");
                this._queueCallback(() => this._destroyElement(), this._element, e);
            }
            _destroyElement() {
                this._element.remove(), O.trigger(this._element, F), this.dispose();
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = G.getOrCreateInstance(this);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        R(G, "close"), m(G);
        let V = '[data-bs-toggle="button"]';
        class U extends B {
            static get NAME() {
                return "button";
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = U.getOrCreateInstance(this);
                    "toggle" === e && t[e]();
                });
            }
        }
        O.on(document, "click.bs.button.data-api", V, (e) => {
            e.preventDefault();
            let t = e.target.closest(V);
            U.getOrCreateInstance(t).toggle();
        }),
            m(U);
        let Q = ".bs.swipe",
            K = `touchstart${Q}`,
            Z = `touchmove${Q}`,
            J = `touchend${Q}`,
            ee = `pointerdown${Q}`,
            et = `pointerup${Q}`,
            ei = { endCallback: null, leftCallback: null, rightCallback: null },
            es = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
        class en extends W {
            constructor(e, t) {
                super(), (this._element = e), e && en.isSupported() && ((this._config = this._getConfig(t)), (this._deltaX = 0), (this._supportPointerEvents = Boolean(window.PointerEvent)), this._initEvents());
            }
            static get Default() {
                return ei;
            }
            static get DefaultType() {
                return es;
            }
            static get NAME() {
                return "swipe";
            }
            dispose() {
                O.off(this._element, Q);
            }
            _start(e) {
                this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : (this._deltaX = e.touches[0].clientX);
            }
            _end(e) {
                this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
            }
            _move(e) {
                this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
                let e = Math.abs(this._deltaX);
                if (e <= 40) return;
                let t = e / this._deltaX;
                (this._deltaX = 0), t && g(t > 0 ? this._config.rightCallback : this._config.leftCallback);
            }
            _initEvents() {
                this._supportPointerEvents
                    ? (O.on(this._element, ee, (e) => this._start(e)), O.on(this._element, et, (e) => this._end(e)), this._element.classList.add("pointer-event"))
                    : (O.on(this._element, K, (e) => this._start(e)), O.on(this._element, Z, (e) => this._move(e)), O.on(this._element, J, (e) => this._end(e)));
            }
            _eventIsPointerPenTouch(e) {
                return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType);
            }
            static isSupported() {
                return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
            }
        }
        let er = ".bs.carousel",
            ea = ".data-api",
            eo = "next",
            el = "prev",
            ed = "left",
            ec = "right",
            eu = `slide${er}`,
            eh = `slid${er}`,
            ep = `keydown${er}`,
            ef = `mouseenter${er}`,
            em = `mouseleave${er}`,
            eg = `dragstart${er}`,
            ev = `load${er}${ea}`,
            e$ = `click${er}${ea}`,
            ey = "carousel",
            eb = "active",
            ew = ".active",
            e_ = ".carousel-item",
            ex = ew + e_,
            e8 = { ArrowLeft: ec, ArrowRight: ed },
            eE = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 },
            eC = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
        class eS extends B {
            constructor(e, t) {
                super(e, t),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this._swipeHelper = null),
                    (this._indicatorsElement = Y.findOne(".carousel-indicators", this._element)),
                    this._addEventListeners(),
                    this._config.ride === ey && this.cycle();
            }
            static get Default() {
                return eE;
            }
            static get DefaultType() {
                return eC;
            }
            static get NAME() {
                return "carousel";
            }
            next() {
                this._slide(eo);
            }
            nextWhenVisible() {
                !document.hidden && o(this._element) && this.next();
            }
            prev() {
                this._slide(el);
            }
            pause() {
                this._isSliding && n(this._element), this._clearInterval();
            }
            cycle() {
                this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
            }
            _maybeEnableCycle() {
                this._config.ride && (this._isSliding ? O.one(this._element, eh, () => this.cycle()) : this.cycle());
            }
            to(e) {
                let t = this._getItems();
                if (e > t.length - 1 || e < 0) return;
                if (this._isSliding) return void O.one(this._element, eh, () => this.to(e));
                let i = this._getItemIndex(this._getActive());
                i !== e && this._slide(e > i ? eo : el, t[e]);
            }
            dispose() {
                this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(e) {
                return (e.defaultInterval = e.interval), e;
            }
            _addEventListeners() {
                this._config.keyboard && O.on(this._element, ep, (e) => this._keydown(e)),
                    "hover" === this._config.pause && (O.on(this._element, ef, () => this.pause()), O.on(this._element, em, () => this._maybeEnableCycle())),
                    this._config.touch && en.isSupported() && this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                for (let e of Y.find(".carousel-item img", this._element)) O.on(e, eg, (e) => e.preventDefault());
                this._swipeHelper = new en(this._element, {
                    leftCallback: () => this._slide(this._directionToOrder(ed)),
                    rightCallback: () => this._slide(this._directionToOrder(ec)),
                    endCallback: () => {
                        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)));
                    },
                });
            }
            _keydown(e) {
                if (/input|textarea/i.test(e.target.tagName)) return;
                let t = e8[e.key];
                t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
            }
            _getItemIndex(e) {
                return this._getItems().indexOf(e);
            }
            _setActiveIndicatorElement(e) {
                if (!this._indicatorsElement) return;
                let t = Y.findOne(ew, this._indicatorsElement);
                t.classList.remove(eb), t.removeAttribute("aria-current");
                let i = Y.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
                i && (i.classList.add(eb), i.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
                let e = this._activeElement || this._getActive();
                if (!e) return;
                let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                this._config.interval = t || this._config.defaultInterval;
            }
            _slide(e, t = null) {
                if (this._isSliding) return;
                let i = this._getActive(),
                    s = e === eo,
                    n = t || $(this._getItems(), i, s, this._config.wrap);
                if (n === i) return;
                let r = this._getItemIndex(n),
                    a = (t) => O.trigger(this._element, t, { relatedTarget: n, direction: this._orderToDirection(e), from: this._getItemIndex(i), to: r });
                if (a(eu).defaultPrevented || !i || !n) return;
                let o = Boolean(this._interval);
                this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(r), (this._activeElement = n);
                let l = s ? "carousel-item-start" : "carousel-item-end",
                    d = s ? "carousel-item-next" : "carousel-item-prev";
                n.classList.add(d),
                    u(n),
                    i.classList.add(l),
                    n.classList.add(l),
                    this._queueCallback(
                        () => {
                            n.classList.remove(l, d), n.classList.add(eb), i.classList.remove(eb, d, l), (this._isSliding = !1), a(eh);
                        },
                        i,
                        this._isAnimated()
                    ),
                    o && this.cycle();
            }
            _isAnimated() {
                return this._element.classList.contains("slide");
            }
            _getActive() {
                return Y.findOne(ex, this._element);
            }
            _getItems() {
                return Y.find(e_, this._element);
            }
            _clearInterval() {
                this._interval && (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(e) {
                return f() ? (e === ed ? el : eo) : e === ed ? eo : el;
            }
            _orderToDirection(e) {
                return f() ? (e === el ? ed : ec) : e === el ? ec : ed;
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = eS.getOrCreateInstance(this, e);
                    if ("number" != typeof e) {
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    } else t.to(e);
                });
            }
        }
        O.on(document, e$, "[data-bs-slide], [data-bs-slide-to]", function (e) {
            let t = Y.getElementFromSelector(this);
            if (!t || !t.classList.contains(ey)) return;
            e.preventDefault();
            let i = eS.getOrCreateInstance(t),
                s = this.getAttribute("data-bs-slide-to");
            return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === H.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
        }),
            O.on(window, ev, () => {
                let e = Y.find('[data-bs-ride="carousel"]');
                for (let t of e) eS.getOrCreateInstance(t);
            }),
            m(eS);
        let eT = ".bs.collapse",
            ek = `show${eT}`,
            e9 = `shown${eT}`,
            eA = `hide${eT}`,
            eL = `hidden${eT}`,
            eP = `click${eT}.data-api`,
            ez = "show",
            eI = "collapse",
            eO = "collapsing",
            eM = `:scope .${eI} .${eI}`,
            eD = '[data-bs-toggle="collapse"]',
            e0 = { parent: null, toggle: !0 },
            eN = { parent: "(null|element)", toggle: "boolean" };
        class eH extends B {
            constructor(e, t) {
                super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
                let i = Y.find(eD);
                for (let s of i) {
                    let n = Y.getSelectorFromElement(s),
                        r = Y.find(n).filter((e) => e === this._element);
                    null !== n && r.length && this._triggerArray.push(s);
                }
                this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
            }
            static get Default() {
                return e0;
            }
            static get DefaultType() {
                return eN;
            }
            static get NAME() {
                return "collapse";
            }
            toggle() {
                this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let e = [];
                if (
                    (this._config.parent &&
                        (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
                            .filter((e) => e !== this._element)
                            .map((e) => eH.getOrCreateInstance(e, { toggle: !1 }))),
                    (e.length && e[0]._isTransitioning) || O.trigger(this._element, ek).defaultPrevented)
                )
                    return;
                for (let t of e) t.hide();
                let i = this._getDimension();
                this._element.classList.remove(eI), this._element.classList.add(eO), (this._element.style[i] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
                let s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1), this._element.classList.remove(eO), this._element.classList.add(eI, ez), (this._element.style[i] = ""), O.trigger(this._element, e9);
                    },
                    this._element,
                    !0
                ),
                    (this._element.style[i] = `${this._element[s]}px`);
            }
            hide() {
                if (this._isTransitioning || !this._isShown() || O.trigger(this._element, eA).defaultPrevented) return;
                let e = this._getDimension();
                for (let t of ((this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`), u(this._element), this._element.classList.add(eO), this._element.classList.remove(eI, ez), this._triggerArray)) {
                    let i = Y.getElementFromSelector(t);
                    i && !this._isShown(i) && this._addAriaAndCollapsedClass([t], !1);
                }
                (this._isTransitioning = !0),
                    (this._element.style[e] = ""),
                    this._queueCallback(
                        () => {
                            (this._isTransitioning = !1), this._element.classList.remove(eO), this._element.classList.add(eI), O.trigger(this._element, eL);
                        },
                        this._element,
                        !0
                    );
            }
            _isShown(e = this._element) {
                return e.classList.contains(ez);
            }
            _configAfterMerge(e) {
                return (e.toggle = Boolean(e.toggle)), (e.parent = a(e.parent)), e;
            }
            _getDimension() {
                return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                let e = this._getFirstLevelChildren(eD);
                for (let t of e) {
                    let i = Y.getElementFromSelector(t);
                    i && this._addAriaAndCollapsedClass([t], this._isShown(i));
                }
            }
            _getFirstLevelChildren(e) {
                let t = Y.find(eM, this._config.parent);
                return Y.find(e, this._config.parent).filter((e) => !t.includes(e));
            }
            _addAriaAndCollapsedClass(e, t) {
                if (e.length) for (let i of e) i.classList.toggle("collapsed", !t), i.setAttribute("aria-expanded", t);
            }
            static jQueryInterface(e) {
                let t = {};
                return (
                    "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
                    this.each(function () {
                        let i = eH.getOrCreateInstance(this, t);
                        if ("string" == typeof e) {
                            if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
                            i[e]();
                        }
                    })
                );
            }
        }
        O.on(document, eP, eD, function (e) {
            for (let t of (("A" === e.target.tagName || (e.delegateTarget && "A" === e.delegateTarget.tagName)) && e.preventDefault(), Y.getMultipleElementsFromSelector(this))) eH.getOrCreateInstance(t, { toggle: !1 }).toggle();
        }),
            m(eH);
        var eW = "top",
            eB = "bottom",
            eq = "right",
            e1 = "left",
            eY = "auto",
            e3 = [eW, eB, eq, e1],
            eR = "start",
            eX = "clippingParents",
            ej = "viewport",
            eF = "popper",
            eG = "reference",
            eV = e3.reduce(function (e, t) {
                return e.concat([t + "-" + eR, t + "-end"]);
            }, []),
            e5 = [].concat(e3, [eY]).reduce(function (e, t) {
                return e.concat([t, t + "-" + eR, t + "-end"]);
            }, []),
            e2 = "beforeRead",
            e6 = "read",
            e7 = "afterRead",
            e4 = "beforeMain",
            eU = "main",
            eQ = "afterMain",
            eK = "beforeWrite",
            eZ = "write",
            eJ = "afterWrite",
            te = [e2, e6, e7, e4, eU, eQ, eK, eZ, eJ];
        function tt(e) {
            return e ? (e.nodeName || "").toLowerCase() : null;
        }
        function ti(e) {
            if (null == e) return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return (t && t.defaultView) || window;
            }
            return e;
        }
        function ts(e) {
            return e instanceof ti(e).Element || e instanceof Element;
        }
        function tn(e) {
            return e instanceof ti(e).HTMLElement || e instanceof HTMLElement;
        }
        function tr(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ti(e).ShadowRoot || e instanceof ShadowRoot);
        }
        let ta = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach(function (e) {
                    var i = t.styles[e] || {},
                        s = t.attributes[e] || {},
                        n = t.elements[e];
                    tn(n) &&
                        tt(n) &&
                        (Object.assign(n.style, i),
                        Object.keys(s).forEach(function (e) {
                            var t = s[e];
                            !1 === t ? n.removeAttribute(e) : n.setAttribute(e, !0 === t ? "" : t);
                        }));
                });
            },
            effect: function (e) {
                var t = e.state,
                    i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                return (
                    Object.assign(t.elements.popper.style, i.popper),
                    (t.styles = i),
                    t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
                    function () {
                        Object.keys(t.elements).forEach(function (e) {
                            var s = t.elements[e],
                                n = t.attributes[e] || {},
                                r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]).reduce(function (e, t) {
                                    return (e[t] = ""), e;
                                }, {});
                            tn(s) &&
                                tt(s) &&
                                (Object.assign(s.style, r),
                                Object.keys(n).forEach(function (e) {
                                    s.removeAttribute(e);
                                }));
                        });
                    }
                );
            },
            requires: ["computeStyles"],
        };
        function to(e) {
            return e.split("-")[0];
        }
        var tl = Math.max,
            td = Math.min,
            tc = Math.round;
        function tu() {
            var e = navigator.userAgentData;
            return null != e && e.brands && Array.isArray(e.brands)
                ? e.brands
                      .map(function (e) {
                          return e.brand + "/" + e.version;
                      })
                      .join(" ")
                : navigator.userAgent;
        }
        function th() {
            return !/^((?!chrome|android).)*safari/i.test(tu());
        }
        function tp(e, t, i) {
            void 0 === t && (t = !1), void 0 === i && (i = !1);
            var s = e.getBoundingClientRect(),
                n = 1,
                r = 1;
            t && tn(e) && ((n = (e.offsetWidth > 0 && tc(s.width) / e.offsetWidth) || 1), (r = (e.offsetHeight > 0 && tc(s.height) / e.offsetHeight) || 1));
            var a = (ts(e) ? ti(e) : window).visualViewport,
                o = !th() && i,
                l = (s.left + (o && a ? a.offsetLeft : 0)) / n,
                d = (s.top + (o && a ? a.offsetTop : 0)) / r,
                c = s.width / n,
                u = s.height / r;
            return { width: c, height: u, top: d, right: l + c, bottom: d + u, left: l, x: l, y: d };
        }
        function tf(e) {
            var t = tp(e),
                i = e.offsetWidth,
                s = e.offsetHeight;
            return 1 >= Math.abs(t.width - i) && (i = t.width), 1 >= Math.abs(t.height - s) && (s = t.height), { x: e.offsetLeft, y: e.offsetTop, width: i, height: s };
        }
        function tm(e, t) {
            var i = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (i && tr(i)) {
                var s = t;
                do {
                    if (s && e.isSameNode(s)) return !0;
                    s = s.parentNode || s.host;
                } while (s);
            }
            return !1;
        }
        function tg(e) {
            return ti(e).getComputedStyle(e);
        }
        function tv(e) {
            return ["table", "td", "th"].indexOf(tt(e)) >= 0;
        }
        function t$(e) {
            return ((ts(e) ? e.ownerDocument : e.document) || window.document).documentElement;
        }
        function ty(e) {
            return "html" === tt(e) ? e : e.assignedSlot || e.parentNode || (tr(e) ? e.host : null) || t$(e);
        }
        function tb(e) {
            return tn(e) && "fixed" !== tg(e).position ? e.offsetParent : null;
        }
        function tw(e) {
            for (var t = ti(e), i = tb(e); i && tv(i) && "static" === tg(i).position; ) i = tb(i);
            return i && ("html" === tt(i) || ("body" === tt(i) && "static" === tg(i).position))
                ? t
                : i ||
                      (function (e) {
                          var t = /firefox/i.test(tu());
                          if (/Trident/i.test(tu()) && tn(e) && "fixed" === tg(e).position) return null;
                          var i = ty(e);
                          for (tr(i) && (i = i.host); tn(i) && 0 > ["html", "body"].indexOf(tt(i)); ) {
                              var s = tg(i);
                              if (
                                  "none" !== s.transform ||
                                  "none" !== s.perspective ||
                                  "paint" === s.contain ||
                                  -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                                  (t && "filter" === s.willChange) ||
                                  (t && s.filter && "none" !== s.filter)
                              )
                                  return i;
                              i = i.parentNode;
                          }
                          return null;
                      })(e) ||
                      t;
        }
        function t_(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }
        function tx(e, t, i) {
            return tl(e, td(t, i));
        }
        function t8(e) {
            return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
        }
        function tE(e, t) {
            return t.reduce(function (t, i) {
                return (t[i] = e), t;
            }, {});
        }
        let tC = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t,
                    i = e.state,
                    s = e.name,
                    n = e.options,
                    r = i.elements.arrow,
                    a = i.modifiersData.popperOffsets,
                    o = to(i.placement),
                    l = t_(o),
                    d = [e1, eq].indexOf(o) >= 0 ? "height" : "width";
                if (r && a) {
                    var c,
                        u,
                        h = ((c = n.padding), (u = i), t8("number" != typeof (c = "function" == typeof c ? c(Object.assign({}, u.rects, { placement: u.placement })) : c) ? c : tE(c, e3))),
                        p = tf(r),
                        f = i.rects.reference[d] + i.rects.reference[l] - a[l] - i.rects.popper[d],
                        m = a[l] - i.rects.reference[l],
                        g = tw(r),
                        v = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
                        $ = h["y" === l ? eW : e1],
                        y = v - p[d] - h["y" === l ? eB : eq],
                        b = v / 2 - p[d] / 2 + (f / 2 - m / 2),
                        w = tx($, b, y),
                        _ = l;
                    i.modifiersData[s] = (((t = {})[_] = w), (t.centerOffset = w - b), t);
                }
            },
            effect: function (e) {
                var t = e.state,
                    i = e.options.element,
                    s = void 0 === i ? "[data-popper-arrow]" : i;
                null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && tm(t.elements.popper, s) && (t.elements.arrow = s);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
        };
        function tS(e) {
            return e.split("-")[1];
        }
        var tT = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function tk(e) {
            var t,
                i = e.popper,
                s = e.popperRect,
                n = e.placement,
                r = e.variation,
                a = e.offsets,
                o = e.position,
                l = e.gpuAcceleration,
                d = e.adaptive,
                c = e.roundOffsets,
                u = e.isFixed,
                h = a.x,
                p = void 0 === h ? 0 : h,
                f = a.y,
                m = void 0 === f ? 0 : f,
                g = "function" == typeof c ? c({ x: p, y: m }) : { x: p, y: m };
            (p = g.x), (m = g.y);
            var v = a.hasOwnProperty("x"),
                $ = a.hasOwnProperty("y"),
                y = e1,
                b = eW,
                w = window;
            if (d) {
                var _ = tw(i),
                    x = "clientHeight",
                    E = "clientWidth";
                _ === ti(i) && "static" !== tg((_ = t$(i))).position && "absolute" === o && ((x = "scrollHeight"), (E = "scrollWidth")),
                    (n === eW || ((n === e1 || n === eq) && "end" === r)) && ((b = eB), (m -= (u && _ === w && w.visualViewport ? w.visualViewport.height : _[x]) - s.height), (m *= l ? 1 : -1)),
                    (n !== e1 && ((n !== eW && n !== eB) || "end" !== r)) || ((y = eq), (p -= (u && _ === w && w.visualViewport ? w.visualViewport.width : _[E]) - s.width), (p *= l ? 1 : -1));
            }
            var C,
                S,
                T,
                k,
                A,
                L,
                P = Object.assign({ position: o }, d && tT),
                z = !0 === c ? ((C = { x: p, y: m }), (S = ti(i)), (T = C.x), (k = C.y), { x: tc(T * (A = S.devicePixelRatio || 1)) / A || 0, y: tc(k * A) / A || 0 }) : { x: p, y: m };
            return (
                (p = z.x),
                (m = z.y),
                l
                    ? Object.assign({}, P, (((L = {})[b] = $ ? "0" : ""), (L[y] = v ? "0" : ""), (L.transform = 1 >= (w.devicePixelRatio || 1) ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)"), L))
                    : Object.assign({}, P, (((t = {})[b] = $ ? m + "px" : ""), (t[y] = v ? p + "px" : ""), (t.transform = ""), t))
            );
        }
        let t9 = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
                var t = e.state,
                    i = e.options,
                    s = i.gpuAcceleration,
                    n = i.adaptive,
                    r = i.roundOffsets,
                    a = void 0 === r || r,
                    o = { placement: to(t.placement), variation: tS(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: void 0 === s || s, isFixed: "fixed" === t.options.strategy };
                null != t.modifiersData.popperOffsets &&
                    (t.styles.popper = Object.assign({}, t.styles.popper, tk(Object.assign({}, o, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: void 0 === n || n, roundOffsets: a })))),
                    null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, tk(Object.assign({}, o, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: a })))),
                    (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
            },
            data: {},
        };
        var tA = { passive: !0 };
        let tL = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
                var t = e.state,
                    i = e.instance,
                    s = e.options,
                    n = s.scroll,
                    r = void 0 === n || n,
                    a = s.resize,
                    o = void 0 === a || a,
                    l = ti(t.elements.popper),
                    d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return (
                    r &&
                        d.forEach(function (e) {
                            e.addEventListener("scroll", i.update, tA);
                        }),
                    o && l.addEventListener("resize", i.update, tA),
                    function () {
                        r &&
                            d.forEach(function (e) {
                                e.removeEventListener("scroll", i.update, tA);
                            }),
                            o && l.removeEventListener("resize", i.update, tA);
                    }
                );
            },
            data: {},
        };
        var tP = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function tz(e) {
            return e.replace(/left|right|bottom|top/g, function (e) {
                return tP[e];
            });
        }
        var tI = { start: "end", end: "start" };
        function tO(e) {
            return e.replace(/start|end/g, function (e) {
                return tI[e];
            });
        }
        function tM(e) {
            var t = ti(e);
            return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
        }
        function tD(e) {
            return tp(t$(e)).left + tM(e).scrollLeft;
        }
        function t0(e) {
            var t = tg(e),
                i = t.overflow,
                s = t.overflowX,
                n = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(i + n + s);
        }
        function tN(e, t) {
            void 0 === t && (t = []);
            var i,
                s = (function e(t) {
                    return ["html", "body", "#document"].indexOf(tt(t)) >= 0 ? t.ownerDocument.body : tn(t) && t0(t) ? t : e(ty(t));
                })(e),
                n = s === (null == (i = e.ownerDocument) ? void 0 : i.body),
                r = ti(s),
                a = n ? [r].concat(r.visualViewport || [], t0(s) ? s : []) : s,
                o = t.concat(a);
            return n ? o : o.concat(tN(ty(a)));
        }
        function tH(e) {
            return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
        }
        function tW(e, t, i) {
            var s, n, r, a, o, l, d, c, u, h, p, f;
            return t === ej
                ? tH(
                      (function (e, t) {
                          var i = ti(e),
                              s = t$(e),
                              n = i.visualViewport,
                              r = s.clientWidth,
                              a = s.clientHeight,
                              o = 0,
                              l = 0;
                          if (n) {
                              (r = n.width), (a = n.height);
                              var d = th();
                              (d || (!d && "fixed" === t)) && ((o = n.offsetLeft), (l = n.offsetTop));
                          }
                          return { width: r, height: a, x: o + tD(e), y: l };
                      })(e, i)
                  )
                : ts(t)
                ? (((r = tp((s = t), !1, "fixed" === (n = i))).top = r.top + s.clientTop),
                  (r.left = r.left + s.clientLeft),
                  (r.bottom = r.top + s.clientHeight),
                  (r.right = r.left + s.clientWidth),
                  (r.width = s.clientWidth),
                  (r.height = s.clientHeight),
                  (r.x = r.left),
                  (r.y = r.top),
                  r)
                : tH(
                      ((a = t$(e)),
                      (l = t$(a)),
                      (d = tM(a)),
                      (c = null == (o = a.ownerDocument) ? void 0 : o.body),
                      (u = tl(l.scrollWidth, l.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0)),
                      (h = tl(l.scrollHeight, l.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0)),
                      (p = -d.scrollLeft + tD(a)),
                      (f = -d.scrollTop),
                      "rtl" === tg(c || l).direction && (p += tl(l.clientWidth, c ? c.clientWidth : 0) - u),
                      { width: u, height: h, x: p, y: f })
                  );
        }
        function tB(e) {
            var t,
                i = e.reference,
                s = e.element,
                n = e.placement,
                r = n ? to(n) : null,
                a = n ? tS(n) : null,
                o = i.x + i.width / 2 - s.width / 2,
                l = i.y + i.height / 2 - s.height / 2;
            switch (r) {
                case eW:
                    t = { x: o, y: i.y - s.height };
                    break;
                case eB:
                    t = { x: o, y: i.y + i.height };
                    break;
                case eq:
                    t = { x: i.x + i.width, y: l };
                    break;
                case e1:
                    t = { x: i.x - s.width, y: l };
                    break;
                default:
                    t = { x: i.x, y: i.y };
            }
            var d = r ? t_(r) : null;
            if (null != d) {
                var c = "y" === d ? "height" : "width";
                switch (a) {
                    case eR:
                        t[d] = t[d] - (i[c] / 2 - s[c] / 2);
                        break;
                    case "end":
                        t[d] = t[d] + (i[c] / 2 - s[c] / 2);
                }
            }
            return t;
        }
        function tq(e, t) {
            void 0 === t && (t = {});
            var i,
                s,
                n,
                r,
                a,
                o,
                l,
                d,
                c,
                u,
                h = t,
                p = h.placement,
                f = void 0 === p ? e.placement : p,
                m = h.strategy,
                g = void 0 === m ? e.strategy : m,
                v = h.boundary,
                $ = h.rootBoundary,
                y = h.elementContext,
                b = void 0 === y ? eF : y,
                w = h.altBoundary,
                _ = h.padding,
                x = void 0 === _ ? 0 : _,
                E = t8("number" != typeof x ? x : tE(x, e3)),
                C = e.rects.popper,
                S = e.elements[void 0 !== w && w ? (b === eF ? eG : eF) : b],
                T =
                    ((i = ts(S) ? S : S.contextElement || t$(e.elements.popper)),
                    (s = void 0 === v ? eX : v),
                    (n = void 0 === $ ? ej : $),
                    (r = g),
                    (c = (d = [].concat(
                        "clippingParents" === s
                            ? ((a = i),
                              (o = tN(ty(a))),
                              (l = ["absolute", "fixed"].indexOf(tg(a).position) >= 0 && tn(a) ? tw(a) : a),
                              ts(l)
                                  ? o.filter(function (e) {
                                        return ts(e) && tm(e, l) && "body" !== tt(e);
                                    })
                                  : [])
                            : [].concat(s),
                        [n]
                    ))[0]),
                    ((u = d.reduce(function (e, t) {
                        var s = tW(i, t, r);
                        return (e.top = tl(s.top, e.top)), (e.right = td(s.right, e.right)), (e.bottom = td(s.bottom, e.bottom)), (e.left = tl(s.left, e.left)), e;
                    }, tW(i, c, r))).width = u.right - u.left),
                    (u.height = u.bottom - u.top),
                    (u.x = u.left),
                    (u.y = u.top),
                    u),
                k = tp(e.elements.reference),
                A = tB({ reference: k, element: C, strategy: "absolute", placement: f }),
                L = tH(Object.assign({}, C, A)),
                P = b === eF ? L : k,
                z = { top: T.top - P.top + E.top, bottom: P.bottom - T.bottom + E.bottom, left: T.left - P.left + E.left, right: P.right - T.right + E.right },
                I = e.modifiersData.offset;
            if (b === eF && I) {
                var O = I[f];
                Object.keys(z).forEach(function (e) {
                    var t = [eq, eB].indexOf(e) >= 0 ? 1 : -1,
                        i = [eW, eB].indexOf(e) >= 0 ? "y" : "x";
                    z[e] += O[i] * t;
                });
            }
            return z;
        }
        let t1 = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    i = e.options,
                    s = e.name;
                if (!t.modifiersData[s]._skip) {
                    for (
                        var n = i.mainAxis,
                            r = void 0 === n || n,
                            a = i.altAxis,
                            o = void 0 === a || a,
                            l = i.fallbackPlacements,
                            d = i.padding,
                            c = i.boundary,
                            u = i.rootBoundary,
                            h = i.altBoundary,
                            p = i.flipVariations,
                            f = void 0 === p || p,
                            m = i.allowedAutoPlacements,
                            g = t.options.placement,
                            v = to(g),
                            $ =
                                l ||
                                (v !== g && f
                                    ? (function (e) {
                                          if (to(e) === eY) return [];
                                          var t = tz(e);
                                          return [tO(e), t, tO(t)];
                                      })(g)
                                    : [tz(g)]),
                            y = [g].concat($).reduce(function (e, i) {
                                var s, n, r, a, o, l, h, p, g, v, $, y, b, w;
                                return e.concat(
                                    to(i) === eY
                                        ? ((s = t),
                                          (a = (r = n = { placement: i, boundary: c, rootBoundary: u, padding: d, flipVariations: f, allowedAutoPlacements: m }).placement),
                                          (o = r.boundary),
                                          (l = r.rootBoundary),
                                          (h = r.padding),
                                          (p = r.flipVariations),
                                          (v = void 0 === (g = r.allowedAutoPlacements) ? e5 : g),
                                          0 ===
                                              (b = (y = ($ = tS(a))
                                                  ? p
                                                      ? eV
                                                      : eV.filter(function (e) {
                                                            return tS(e) === $;
                                                        })
                                                  : e3).filter(function (e) {
                                                  return v.indexOf(e) >= 0;
                                              })).length && (b = y),
                                          Object.keys(
                                              (w = b.reduce(function (e, t) {
                                                  return (e[t] = tq(s, { placement: t, boundary: o, rootBoundary: l, padding: h })[to(t)]), e;
                                              }, {}))
                                          ).sort(function (e, t) {
                                              return w[e] - w[t];
                                          }))
                                        : i
                                );
                            }, []),
                            b = t.rects.reference,
                            w = t.rects.popper,
                            _ = new Map(),
                            x = !0,
                            E = y[0],
                            C = 0;
                        C < y.length;
                        C++
                    ) {
                        var S = y[C],
                            T = to(S),
                            k = tS(S) === eR,
                            A = [eW, eB].indexOf(T) >= 0,
                            L = A ? "width" : "height",
                            P = tq(t, { placement: S, boundary: c, rootBoundary: u, altBoundary: h, padding: d }),
                            z = A ? (k ? eq : e1) : k ? eB : eW;
                        b[L] > w[L] && (z = tz(z));
                        var I = tz(z),
                            O = [];
                        if (
                            (r && O.push(P[T] <= 0),
                            o && O.push(P[z] <= 0, P[I] <= 0),
                            O.every(function (e) {
                                return e;
                            }))
                        ) {
                            (E = S), (x = !1);
                            break;
                        }
                        _.set(S, O);
                    }
                    if (x)
                        for (
                            var M = function (e) {
                                    var t = y.find(function (t) {
                                        var i = _.get(t);
                                        if (i)
                                            return i.slice(0, e).every(function (e) {
                                                return e;
                                            });
                                    });
                                    if (t) return (E = t), "break";
                                },
                                D = f ? 3 : 1;
                            D > 0 && "break" !== M(D);
                            D--
                        );
                    t.placement !== E && ((t.modifiersData[s]._skip = !0), (t.placement = E), (t.reset = !0));
                }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
        };
        function tY(e, t, i) {
            return void 0 === i && (i = { x: 0, y: 0 }), { top: e.top - t.height - i.y, right: e.right - t.width + i.x, bottom: e.bottom - t.height + i.y, left: e.left - t.width - i.x };
        }
        function t3(e) {
            return [eW, eq, eB, e1].some(function (t) {
                return e[t] >= 0;
            });
        }
        let tR = {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function (e) {
                    var t = e.state,
                        i = e.name,
                        s = t.rects.reference,
                        n = t.rects.popper,
                        r = t.modifiersData.preventOverflow,
                        a = tq(t, { elementContext: "reference" }),
                        o = tq(t, { altBoundary: !0 }),
                        l = tY(a, s),
                        d = tY(o, n, r),
                        c = t3(l),
                        u = t3(d);
                    (t.modifiersData[i] = { referenceClippingOffsets: l, popperEscapeOffsets: d, isReferenceHidden: c, hasPopperEscaped: u }),
                        (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": u }));
                },
            },
            tX = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function (e) {
                    var t = e.state,
                        i = e.options,
                        s = e.name,
                        n = i.offset,
                        r = void 0 === n ? [0, 0] : n,
                        a = e5.reduce(function (e, i) {
                            var s, n, a, o, l, d, c, u;
                            return (
                                (e[i] =
                                    ((s = i),
                                    (n = t.rects),
                                    (a = r),
                                    (l = [e1, eW].indexOf((o = to(s))) >= 0 ? -1 : 1),
                                    (c = (d = "function" == typeof a ? a(Object.assign({}, n, { placement: s })) : a)[0]),
                                    (u = d[1]),
                                    (c = c || 0),
                                    (u = (u || 0) * l),
                                    [e1, eq].indexOf(o) >= 0 ? { x: u, y: c } : { x: c, y: u })),
                                e
                            );
                        }, {}),
                        o = a[t.placement],
                        l = o.x,
                        d = o.y;
                    null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += d)), (t.modifiersData[s] = a);
                },
            },
            tj = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function (e) {
                    var t = e.state,
                        i = e.name;
                    t.modifiersData[i] = tB({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
                },
                data: {},
            },
            tF = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                    var t = e.state,
                        i = e.options,
                        s = e.name,
                        n = i.mainAxis,
                        r = i.altAxis,
                        a = i.boundary,
                        o = i.rootBoundary,
                        l = i.altBoundary,
                        d = i.padding,
                        c = i.tether,
                        u = void 0 === c || c,
                        h = i.tetherOffset,
                        p = void 0 === h ? 0 : h,
                        f = tq(t, { boundary: a, rootBoundary: o, padding: d, altBoundary: l }),
                        m = to(t.placement),
                        g = tS(t.placement),
                        v = !g,
                        $ = t_(m),
                        y = "x" === $ ? "y" : "x",
                        b = t.modifiersData.popperOffsets,
                        w = t.rects.reference,
                        _ = t.rects.popper,
                        x = "function" == typeof p ? p(Object.assign({}, t.rects, { placement: t.placement })) : p,
                        E = "number" == typeof x ? { mainAxis: x, altAxis: x } : Object.assign({ mainAxis: 0, altAxis: 0 }, x),
                        C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        S = { x: 0, y: 0 };
                    if (b) {
                        if (void 0 === n || n) {
                            var T,
                                k = "y" === $ ? eW : e1,
                                A = "y" === $ ? eB : eq,
                                L = "y" === $ ? "height" : "width",
                                P = b[$],
                                z = P + f[k],
                                I = P - f[A],
                                O = u ? -_[L] / 2 : 0,
                                M = g === eR ? w[L] : _[L],
                                D = g === eR ? -_[L] : -w[L],
                                N = t.elements.arrow,
                                H = u && N ? tf(N) : { width: 0, height: 0 },
                                W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                                B = W[k],
                                q = W[A],
                                Y = tx(0, w[L], H[L]),
                                R = v ? w[L] / 2 - O - Y - B - E.mainAxis : M - Y - B - E.mainAxis,
                                X = v ? -w[L] / 2 + O + Y + q + E.mainAxis : D + Y + q + E.mainAxis,
                                j = t.elements.arrow && tw(t.elements.arrow),
                                F = j ? ("y" === $ ? j.clientTop || 0 : j.clientLeft || 0) : 0,
                                G = null != (T = null == C ? void 0 : C[$]) ? T : 0,
                                V = tx(u ? td(z, P + R - G - F) : z, P, u ? tl(I, P + X - G) : I);
                            (b[$] = V), (S[$] = V - P);
                        }
                        if (void 0 !== r && r) {
                            var U,
                                Q,
                                K,
                                Z,
                                J,
                                ee = b[y],
                                et = "y" === y ? "height" : "width",
                                ei = ee + f["x" === $ ? eW : e1],
                                es = ee - f["x" === $ ? eB : eq],
                                en = -1 !== [eW, e1].indexOf(m),
                                er = null != (J = null == C ? void 0 : C[y]) ? J : 0,
                                ea = en ? ei : ee - w[et] - _[et] - er + E.altAxis,
                                eo = en ? ee + w[et] + _[et] - er - E.altAxis : es,
                                el = u && en ? ((U = ea), (Q = ee), (K = eo), (Z = tx(U, Q, K)) > K ? K : Z) : tx(u ? ea : ei, ee, u ? eo : es);
                            (b[y] = el), (S[y] = el - ee);
                        }
                        t.modifiersData[s] = S;
                    }
                },
                requiresIfExists: ["offset"],
            };
        var tG = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function tV() {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return !t.some(function (e) {
                return !(e && "function" == typeof e.getBoundingClientRect);
            });
        }
        function t5(e) {
            void 0 === e && (e = {});
            var t = e,
                i = t.defaultModifiers,
                s = void 0 === i ? [] : i,
                n = t.defaultOptions,
                r = void 0 === n ? tG : n;
            return function (e, t, i) {
                void 0 === i && (i = r);
                var n,
                    a,
                    o = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, tG, r), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
                    l = [],
                    d = !1,
                    c = {
                        state: o,
                        setOptions: function (i) {
                            var n,
                                a,
                                d,
                                h,
                                p,
                                f,
                                m = "function" == typeof i ? i(o.options) : i;
                            u(), (o.options = Object.assign({}, r, o.options, m)), (o.scrollParents = { reference: ts(e) ? tN(e) : e.contextElement ? tN(e.contextElement) : [], popper: tN(t) });
                            var g,
                                v,
                                $ =
                                    ((f =
                                        ((a = n = Object.keys(
                                            (v = (g = [].concat(s, o.options.modifiers)).reduce(function (e, t) {
                                                var i = e[t.name];
                                                return (e[t.name] = i ? Object.assign({}, i, t, { options: Object.assign({}, i.options, t.options), data: Object.assign({}, i.data, t.data) }) : t), e;
                                            }, {}))
                                        ).map(function (e) {
                                            return v[e];
                                        })),
                                        (d = new Map()),
                                        (h = new Set()),
                                        (p = []),
                                        a.forEach(function (e) {
                                            d.set(e.name, e);
                                        }),
                                        a.forEach(function (e) {
                                            h.has(e.name) ||
                                                (function e(t) {
                                                    h.add(t.name),
                                                        [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                                                            if (!h.has(t)) {
                                                                var i = d.get(t);
                                                                i && e(i);
                                                            }
                                                        }),
                                                        p.push(t);
                                                })(e);
                                        }),
                                        p)),
                                    te.reduce(function (e, t) {
                                        return e.concat(
                                            f.filter(function (e) {
                                                return e.phase === t;
                                            })
                                        );
                                    }, []));
                            return (
                                (o.orderedModifiers = $.filter(function (e) {
                                    return e.enabled;
                                })),
                                o.orderedModifiers.forEach(function (e) {
                                    var t = e.name,
                                        i = e.options,
                                        s = e.effect;
                                    if ("function" == typeof s) {
                                        var n = s({ state: o, name: t, instance: c, options: void 0 === i ? {} : i });
                                        l.push(n || function () {});
                                    }
                                }),
                                c.update()
                            );
                        },
                        forceUpdate: function () {
                            if (!d) {
                                var e,
                                    t,
                                    i,
                                    s,
                                    n,
                                    r,
                                    a,
                                    l,
                                    u,
                                    h,
                                    p,
                                    f,
                                    m,
                                    g,
                                    v,
                                    $ = o.elements,
                                    y = $.reference,
                                    b = $.popper;
                                if (tV(y, b)) {
                                    (o.rects = {
                                        reference:
                                            ((e = y),
                                            (t = tw(b)),
                                            (i = "fixed" === o.options.strategy),
                                            (h = tn(t)),
                                            (p = tn(t) && ((r = tc((n = (s = t).getBoundingClientRect()).width) / s.offsetWidth || 1), (a = tc(n.height) / s.offsetHeight || 1), 1 !== r || 1 !== a)),
                                            (f = t$(t)),
                                            (m = tp(e, p, i)),
                                            (g = { scrollLeft: 0, scrollTop: 0 }),
                                            (v = { x: 0, y: 0 }),
                                            (h || (!h && !i)) &&
                                                (("body" !== tt(t) || t0(f)) && (g = (l = t) !== ti(l) && tn(l) ? { scrollLeft: (u = l).scrollLeft, scrollTop: u.scrollTop } : tM(l)),
                                                tn(t) ? (((v = tp(t, !0)).x += t.clientLeft), (v.y += t.clientTop)) : f && (v.x = tD(f))),
                                            { x: m.left + g.scrollLeft - v.x, y: m.top + g.scrollTop - v.y, width: m.width, height: m.height }),
                                        popper: tf(b),
                                    }),
                                        (o.reset = !1),
                                        (o.placement = o.options.placement),
                                        o.orderedModifiers.forEach(function (e) {
                                            return (o.modifiersData[e.name] = Object.assign({}, e.data));
                                        });
                                    for (var w = 0; w < o.orderedModifiers.length; w++)
                                        if (!0 !== o.reset) {
                                            var _ = o.orderedModifiers[w],
                                                x = _.fn,
                                                E = _.options,
                                                C = void 0 === E ? {} : E,
                                                S = _.name;
                                            "function" == typeof x && (o = x({ state: o, options: C, name: S, instance: c }) || o);
                                        } else (o.reset = !1), (w = -1);
                                }
                            }
                        },
                        update:
                            ((n = function () {
                                return new Promise(function (e) {
                                    c.forceUpdate(), e(o);
                                });
                            }),
                            function () {
                                return (
                                    a ||
                                        (a = new Promise(function (e) {
                                            Promise.resolve().then(function () {
                                                (a = void 0), e(n());
                                            });
                                        })),
                                    a
                                );
                            }),
                        destroy: function () {
                            u(), (d = !0);
                        },
                    };
                if (!tV(e, t)) return c;
                function u() {
                    l.forEach(function (e) {
                        return e();
                    }),
                        (l = []);
                }
                return (
                    c.setOptions(i).then(function (e) {
                        !d && i.onFirstUpdate && i.onFirstUpdate(e);
                    }),
                    c
                );
            };
        }
        var t2 = t5(),
            t6 = t5({ defaultModifiers: [tL, tj, t9, ta] }),
            t7 = t5({ defaultModifiers: [tL, tj, t9, ta, tX, t1, tF, tC, tR] });
        let t4 = Object.freeze(
                Object.defineProperty(
                    {
                        __proto__: null,
                        afterMain: eQ,
                        afterRead: e7,
                        afterWrite: eJ,
                        applyStyles: ta,
                        arrow: tC,
                        auto: eY,
                        basePlacements: e3,
                        beforeMain: e4,
                        beforeRead: e2,
                        beforeWrite: eK,
                        bottom: eB,
                        clippingParents: eX,
                        computeStyles: t9,
                        createPopper: t7,
                        createPopperBase: t2,
                        createPopperLite: t6,
                        detectOverflow: tq,
                        end: "end",
                        eventListeners: tL,
                        flip: t1,
                        hide: tR,
                        left: e1,
                        main: eU,
                        modifierPhases: te,
                        offset: tX,
                        placements: e5,
                        popper: eF,
                        popperGenerator: t5,
                        popperOffsets: tj,
                        preventOverflow: tF,
                        read: e6,
                        reference: eG,
                        right: eq,
                        start: eR,
                        top: eW,
                        variationPlacements: eV,
                        viewport: ej,
                        write: eZ,
                    },
                    Symbol.toStringTag,
                    { value: "Module" }
                )
            ),
            tU = "dropdown",
            tQ = ".bs.dropdown",
            tK = ".data-api",
            tZ = "ArrowDown",
            tJ = `hide${tQ}`,
            ie = `hidden${tQ}`,
            it = `show${tQ}`,
            ii = `shown${tQ}`,
            is = `click${tQ}${tK}`,
            ir = `keydown${tQ}${tK}`,
            ia = `keyup${tQ}${tK}`,
            io = "show",
            il = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            id = `${il}.${io}`,
            ic = ".dropdown-menu",
            iu = f() ? "top-end" : "top-start",
            ih = f() ? "top-start" : "top-end",
            ip = f() ? "bottom-end" : "bottom-start",
            im = f() ? "bottom-start" : "bottom-end",
            ig = f() ? "left-start" : "right-start",
            iv = f() ? "right-start" : "left-start",
            i$ = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" },
            iy = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
        class ib extends B {
            constructor(e, t) {
                super(e, t),
                    (this._popper = null),
                    (this._parent = this._element.parentNode),
                    (this._menu = Y.next(this._element, ic)[0] || Y.prev(this._element, ic)[0] || Y.findOne(ic, this._parent)),
                    (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
                return i$;
            }
            static get DefaultType() {
                return iy;
            }
            static get NAME() {
                return tU;
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (l(this._element) || this._isShown()) return;
                let e = { relatedTarget: this._element };
                if (!O.trigger(this._element, it, e).defaultPrevented) {
                    if ((this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))) for (let t of [].concat(...document.body.children)) O.on(t, "mouseover", c);
                    this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(io), this._element.classList.add(io), O.trigger(this._element, ii, e);
                }
            }
            hide() {
                if (l(this._element) || !this._isShown()) return;
                let e = { relatedTarget: this._element };
                this._completeHide(e);
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
                (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
            }
            _completeHide(e) {
                if (!O.trigger(this._element, tJ, e).defaultPrevented) {
                    if ("ontouchstart" in document.documentElement) for (let t of [].concat(...document.body.children)) O.off(t, "mouseover", c);
                    this._popper && this._popper.destroy(),
                        this._menu.classList.remove(io),
                        this._element.classList.remove(io),
                        this._element.setAttribute("aria-expanded", "false"),
                        H.removeDataAttribute(this._menu, "popper"),
                        O.trigger(this._element, ie, e);
                }
            }
            _getConfig(e) {
                if ("object" == typeof (e = super._getConfig(e)).reference && !r(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
                    throw TypeError(`${tU.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                return e;
            }
            _createPopper() {
                if (void 0 === t4) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let e = this._element;
                "parent" === this._config.reference ? (e = this._parent) : r(this._config.reference) ? (e = a(this._config.reference)) : "object" == typeof this._config.reference && (e = this._config.reference);
                let t = this._getPopperConfig();
                this._popper = t7(e, this._menu, t);
            }
            _isShown() {
                return this._menu.classList.contains(io);
            }
            _getPlacement() {
                let e = this._parent;
                if (e.classList.contains("dropend")) return ig;
                if (e.classList.contains("dropstart")) return iv;
                if (e.classList.contains("dropup-center")) return "top";
                if (e.classList.contains("dropdown-center")) return "bottom";
                let t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return e.classList.contains("dropup") ? (t ? ih : iu) : t ? im : ip;
            }
            _detectNavbar() {
                return null !== this._element.closest(".navbar");
            }
            _getOffset() {
                let { offset: e } = this._config;
                return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
            }
            _getPopperConfig() {
                let e = {
                    placement: this._getPlacement(),
                    modifiers: [
                        { name: "preventOverflow", options: { boundary: this._config.boundary } },
                        { name: "offset", options: { offset: this._getOffset() } },
                    ],
                };
                return (this._inNavbar || "static" === this._config.display) && (H.setDataAttribute(this._menu, "popper", "static"), (e.modifiers = [{ name: "applyStyles", enabled: !1 }])), { ...e, ...g(this._config.popperConfig, [e]) };
            }
            _selectMenuItem({ key: e, target: t }) {
                let i = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e) => o(e));
                i.length && $(i, t, e === tZ, !i.includes(t)).focus();
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = ib.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
            static clearMenus(e) {
                if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)) return;
                let t = Y.find(id);
                for (let i of t) {
                    let s = ib.getInstance(i);
                    if (!s || !1 === s._config.autoClose) continue;
                    let n = e.composedPath(),
                        r = n.includes(s._menu);
                    if (
                        n.includes(s._element) ||
                        ("inside" === s._config.autoClose && !r) ||
                        ("outside" === s._config.autoClose && r) ||
                        (s._menu.contains(e.target) && (("keyup" === e.type && "Tab" === e.key) || /input|select|option|textarea|form/i.test(e.target.tagName)))
                    )
                        continue;
                    let a = { relatedTarget: s._element };
                    "click" === e.type && (a.clickEvent = e), s._completeHide(a);
                }
            }
            static dataApiKeydownHandler(e) {
                let t = /input|textarea/i.test(e.target.tagName),
                    i = "Escape" === e.key,
                    s = ["ArrowUp", tZ].includes(e.key);
                if ((!s && !i) || (t && !i)) return;
                e.preventDefault();
                let n = this.matches(il) ? this : Y.prev(this, il)[0] || Y.next(this, il)[0] || Y.findOne(il, e.delegateTarget.parentNode),
                    r = ib.getOrCreateInstance(n);
                if (s) return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
                r._isShown() && (e.stopPropagation(), r.hide(), n.focus());
            }
        }
        O.on(document, ir, il, ib.dataApiKeydownHandler),
            O.on(document, ir, ic, ib.dataApiKeydownHandler),
            O.on(document, is, ib.clearMenus),
            O.on(document, ia, ib.clearMenus),
            O.on(document, is, il, function (e) {
                e.preventDefault(), ib.getOrCreateInstance(this).toggle();
            }),
            m(ib);
        let iw = "backdrop",
            i_ = "show",
            ix = `mousedown.bs.${iw}`,
            i8 = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },
            iE = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
        class iC extends W {
            constructor(e) {
                super(), (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
            }
            static get Default() {
                return i8;
            }
            static get DefaultType() {
                return iE;
            }
            static get NAME() {
                return iw;
            }
            show(e) {
                if (!this._config.isVisible) return void g(e);
                this._append();
                let t = this._getElement();
                this._config.isAnimated && u(t),
                    t.classList.add(i_),
                    this._emulateAnimation(() => {
                        g(e);
                    });
            }
            hide(e) {
                this._config.isVisible
                    ? (this._getElement().classList.remove(i_),
                      this._emulateAnimation(() => {
                          this.dispose(), g(e);
                      }))
                    : g(e);
            }
            dispose() {
                this._isAppended && (O.off(this._element, ix), this._element.remove(), (this._isAppended = !1));
            }
            _getElement() {
                if (!this._element) {
                    let e = document.createElement("div");
                    (e.className = this._config.className), this._config.isAnimated && e.classList.add("fade"), (this._element = e);
                }
                return this._element;
            }
            _configAfterMerge(e) {
                return (e.rootElement = a(e.rootElement)), e;
            }
            _append() {
                if (this._isAppended) return;
                let e = this._getElement();
                this._config.rootElement.append(e),
                    O.on(e, ix, () => {
                        g(this._config.clickCallback);
                    }),
                    (this._isAppended = !0);
            }
            _emulateAnimation(e) {
                v(e, this._getElement(), this._config.isAnimated);
            }
        }
        let iS = ".bs.focustrap",
            iT = `focusin${iS}`,
            ik = `keydown.tab${iS}`,
            i9 = "backward",
            iA = { autofocus: !0, trapElement: null },
            iL = { autofocus: "boolean", trapElement: "element" };
        class iP extends W {
            constructor(e) {
                super(), (this._config = this._getConfig(e)), (this._isActive = !1), (this._lastTabNavDirection = null);
            }
            static get Default() {
                return iA;
            }
            static get DefaultType() {
                return iL;
            }
            static get NAME() {
                return "focustrap";
            }
            activate() {
                this._isActive ||
                    (this._config.autofocus && this._config.trapElement.focus(), O.off(document, iS), O.on(document, iT, (e) => this._handleFocusin(e)), O.on(document, ik, (e) => this._handleKeydown(e)), (this._isActive = !0));
            }
            deactivate() {
                this._isActive && ((this._isActive = !1), O.off(document, iS));
            }
            _handleFocusin(e) {
                let { trapElement: t } = this._config;
                if (e.target === document || e.target === t || t.contains(e.target)) return;
                let i = Y.focusableChildren(t);
                0 === i.length ? t.focus() : this._lastTabNavDirection === i9 ? i[i.length - 1].focus() : i[0].focus();
            }
            _handleKeydown(e) {
                "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? i9 : "forward");
            }
        }
        let iz = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            iI = ".sticky-top",
            iO = "padding-right",
            iM = "margin-right";
        class iD {
            constructor() {
                this._element = document.body;
            }
            getWidth() {
                let e = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - e);
            }
            hide() {
                let e = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, iO, (t) => t + e), this._setElementAttributes(iz, iO, (t) => t + e), this._setElementAttributes(iI, iM, (t) => t - e);
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, iO), this._resetElementAttributes(iz, iO), this._resetElementAttributes(iI, iM);
            }
            isOverflowing() {
                return this.getWidth() > 0;
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, t, i) {
                let s = this.getWidth();
                this._applyManipulationCallback(e, (e) => {
                    if (e !== this._element && window.innerWidth > e.clientWidth + s) return;
                    this._saveInitialAttribute(e, t);
                    let n = window.getComputedStyle(e).getPropertyValue(t);
                    e.style.setProperty(t, `${i(Number.parseFloat(n))}px`);
                });
            }
            _saveInitialAttribute(e, t) {
                let i = e.style.getPropertyValue(t);
                i && H.setDataAttribute(e, t, i);
            }
            _resetElementAttributes(e, t) {
                this._applyManipulationCallback(e, (e) => {
                    let i = H.getDataAttribute(e, t);
                    null !== i ? (H.removeDataAttribute(e, t), e.style.setProperty(t, i)) : e.style.removeProperty(t);
                });
            }
            _applyManipulationCallback(e, t) {
                if (r(e)) t(e);
                else for (let i of Y.find(e, this._element)) t(i);
            }
        }
        let i0 = ".bs.modal",
            iN = `hide${i0}`,
            iH = `hidePrevented${i0}`,
            iW = `hidden${i0}`,
            iB = `show${i0}`,
            iq = `shown${i0}`,
            i1 = `resize${i0}`,
            iY = `click.dismiss${i0}`,
            i3 = `mousedown.dismiss${i0}`,
            iR = `keydown.dismiss${i0}`,
            iX = `click${i0}.data-api`,
            ij = "modal-open",
            iF = "show",
            iG = "modal-static",
            iV = { backdrop: !0, focus: !0, keyboard: !0 },
            i5 = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
        class i2 extends B {
            constructor(e, t) {
                super(e, t),
                    (this._dialog = Y.findOne(".modal-dialog", this._element)),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._focustrap = this._initializeFocusTrap()),
                    (this._isShown = !1),
                    (this._isTransitioning = !1),
                    (this._scrollBar = new iD()),
                    this._addEventListeners();
            }
            static get Default() {
                return iV;
            }
            static get DefaultType() {
                return i5;
            }
            static get NAME() {
                return "modal";
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                this._isShown ||
                    this._isTransitioning ||
                    O.trigger(this._element, iB, { relatedTarget: e }).defaultPrevented ||
                    ((this._isShown = !0), (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(ij), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
                this._isShown &&
                    !this._isTransitioning &&
                    (O.trigger(this._element, iN).defaultPrevented ||
                        ((this._isShown = !1), (this._isTransitioning = !0), this._focustrap.deactivate(), this._element.classList.remove(iF), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
            }
            dispose() {
                O.off(window, i0), O.off(this._dialog, i0), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _initializeBackDrop() {
                return new iC({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
            }
            _initializeFocusTrap() {
                return new iP({ trapElement: this._element });
            }
            _showElement(e) {
                document.body.contains(this._element) || document.body.append(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    (this._element.scrollTop = 0);
                let t = Y.findOne(".modal-body", this._dialog);
                t && (t.scrollTop = 0),
                    u(this._element),
                    this._element.classList.add(iF),
                    this._queueCallback(
                        () => {
                            this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), O.trigger(this._element, iq, { relatedTarget: e });
                        },
                        this._dialog,
                        this._isAnimated()
                    );
            }
            _addEventListeners() {
                O.on(this._element, iR, (e) => {
                    "Escape" === e.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
                }),
                    O.on(window, i1, () => {
                        this._isShown && !this._isTransitioning && this._adjustDialog();
                    }),
                    O.on(this._element, i3, (e) => {
                        O.one(this._element, iY, (t) => {
                            this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                        });
                    });
            }
            _hideModal() {
                (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    (this._isTransitioning = !1),
                    this._backdrop.hide(() => {
                        document.body.classList.remove(ij), this._resetAdjustments(), this._scrollBar.reset(), O.trigger(this._element, iW);
                    });
            }
            _isAnimated() {
                return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
                if (O.trigger(this._element, iH).defaultPrevented) return;
                let e = this._element.scrollHeight > document.documentElement.clientHeight,
                    t = this._element.style.overflowY;
                "hidden" === t ||
                    this._element.classList.contains(iG) ||
                    (e || (this._element.style.overflowY = "hidden"),
                    this._element.classList.add(iG),
                    this._queueCallback(() => {
                        this._element.classList.remove(iG),
                            this._queueCallback(() => {
                                this._element.style.overflowY = t;
                            }, this._dialog);
                    }, this._dialog),
                    this._element.focus());
            }
            _adjustDialog() {
                let e = this._element.scrollHeight > document.documentElement.clientHeight,
                    t = this._scrollBar.getWidth(),
                    i = t > 0;
                if (i && !e) {
                    let s = f() ? "paddingLeft" : "paddingRight";
                    this._element.style[s] = `${t}px`;
                }
                if (!i && e) {
                    let n = f() ? "paddingRight" : "paddingLeft";
                    this._element.style[n] = `${t}px`;
                }
            }
            _resetAdjustments() {
                (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
            }
            static jQueryInterface(e, t) {
                return this.each(function () {
                    let i = i2.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
                        i[e](t);
                    }
                });
            }
        }
        O.on(document, iX, '[data-bs-toggle="modal"]', function (e) {
            let t = Y.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                O.one(t, iB, (e) => {
                    e.defaultPrevented ||
                        O.one(t, iW, () => {
                            o(this) && this.focus();
                        });
                });
            let i = Y.findOne(".modal.show");
            i && i2.getInstance(i).hide(), i2.getOrCreateInstance(t).toggle(this);
        }),
            R(i2),
            m(i2);
        let i6 = ".bs.offcanvas",
            i7 = ".data-api",
            i4 = `load${i6}${i7}`,
            iU = "show",
            iQ = "showing",
            iK = "hiding",
            iZ = ".offcanvas.show",
            iJ = `show${i6}`,
            se = `shown${i6}`,
            st = `hide${i6}`,
            si = `hidePrevented${i6}`,
            ss = `hidden${i6}`,
            sn = `resize${i6}`,
            sr = `click${i6}${i7}`,
            sa = `keydown.dismiss${i6}`,
            so = { backdrop: !0, keyboard: !0, scroll: !1 },
            sl = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
        class sd extends B {
            constructor(e, t) {
                super(e, t), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
            }
            static get Default() {
                return so;
            }
            static get DefaultType() {
                return sl;
            }
            static get NAME() {
                return "offcanvas";
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                this._isShown ||
                    O.trigger(this._element, iJ, { relatedTarget: e }).defaultPrevented ||
                    ((this._isShown = !0),
                    this._backdrop.show(),
                    this._config.scroll || new iD().hide(),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add(iQ),
                    this._queueCallback(
                        () => {
                            (this._config.scroll && !this._config.backdrop) || this._focustrap.activate(), this._element.classList.add(iU), this._element.classList.remove(iQ), O.trigger(this._element, se, { relatedTarget: e });
                        },
                        this._element,
                        !0
                    ));
            }
            hide() {
                this._isShown &&
                    (O.trigger(this._element, st).defaultPrevented ||
                        (this._focustrap.deactivate(),
                        this._element.blur(),
                        (this._isShown = !1),
                        this._element.classList.add(iK),
                        this._backdrop.hide(),
                        this._queueCallback(
                            () => {
                                this._element.classList.remove(iU, iK), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new iD().reset(), O.trigger(this._element, ss);
                            },
                            this._element,
                            !0
                        )));
            }
            dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            _initializeBackDrop() {
                let e = Boolean(this._config.backdrop);
                return new iC({
                    className: "offcanvas-backdrop",
                    isVisible: e,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: e
                        ? () => {
                              "static" !== this._config.backdrop ? this.hide() : O.trigger(this._element, si);
                          }
                        : null,
                });
            }
            _initializeFocusTrap() {
                return new iP({ trapElement: this._element });
            }
            _addEventListeners() {
                O.on(this._element, sa, (e) => {
                    "Escape" === e.key && (this._config.keyboard ? this.hide() : O.trigger(this._element, si));
                });
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = sd.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        O.on(document, sr, '[data-bs-toggle="offcanvas"]', function (e) {
            let t = Y.getElementFromSelector(this);
            if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this))) return;
            O.one(t, ss, () => {
                o(this) && this.focus();
            });
            let i = Y.findOne(iZ);
            i && i !== t && sd.getInstance(i).hide(), sd.getOrCreateInstance(t).toggle(this);
        }),
            O.on(window, i4, () => {
                for (let e of Y.find(iZ)) sd.getOrCreateInstance(e).show();
            }),
            O.on(window, sn, () => {
                for (let e of Y.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && sd.getOrCreateInstance(e).hide();
            }),
            R(sd),
            m(sd);
        let sc = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            su = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            sh = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            sp = (e, t) => {
                let i = e.nodeName.toLowerCase();
                return t.includes(i) ? !su.has(i) || Boolean(sh.test(e.nodeValue)) : t.filter((e) => e instanceof RegExp).some((e) => e.test(i));
            },
            sf = { allowList: sc, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" },
            sm = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" },
            sg = { entry: "(string|element|function|null)", selector: "(string|element)" };
        class sv extends W {
            constructor(e) {
                super(), (this._config = this._getConfig(e));
            }
            static get Default() {
                return sf;
            }
            static get DefaultType() {
                return sm;
            }
            static get NAME() {
                return "TemplateFactory";
            }
            getContent() {
                return Object.values(this._config.content)
                    .map((e) => this._resolvePossibleFunction(e))
                    .filter(Boolean);
            }
            hasContent() {
                return this.getContent().length > 0;
            }
            changeContent(e) {
                return this._checkContent(e), (this._config.content = { ...this._config.content, ...e }), this;
            }
            toHtml() {
                let e = document.createElement("div");
                for (let [t, i] of ((e.innerHTML = this._maybeSanitize(this._config.template)), Object.entries(this._config.content))) this._setContent(e, i, t);
                let s = e.children[0],
                    n = this._resolvePossibleFunction(this._config.extraClass);
                return n && s.classList.add(...n.split(" ")), s;
            }
            _typeCheckConfig(e) {
                super._typeCheckConfig(e), this._checkContent(e.content);
            }
            _checkContent(e) {
                for (let [t, i] of Object.entries(e)) super._typeCheckConfig({ selector: t, entry: i }, sg);
            }
            _setContent(e, t, i) {
                let s = Y.findOne(i, e);
                s && ((t = this._resolvePossibleFunction(t)) ? (r(t) ? this._putElementInTemplate(a(t), s) : this._config.html ? (s.innerHTML = this._maybeSanitize(t)) : (s.textContent = t)) : s.remove());
            }
            _maybeSanitize(e) {
                return this._config.sanitize
                    ? (function (e, t, i) {
                          if (!e.length) return e;
                          if (i && "function" == typeof i) return i(e);
                          let s = new window.DOMParser().parseFromString(e, "text/html"),
                              n = [].concat(...s.body.querySelectorAll("*"));
                          for (let r of n) {
                              let a = r.nodeName.toLowerCase();
                              if (!Object.keys(t).includes(a)) {
                                  r.remove();
                                  continue;
                              }
                              let o = [].concat(...r.attributes),
                                  l = [].concat(t["*"] || [], t[a] || []);
                              for (let d of o) sp(d, l) || r.removeAttribute(d.nodeName);
                          }
                          return s.body.innerHTML;
                      })(e, this._config.allowList, this._config.sanitizeFn)
                    : e;
            }
            _resolvePossibleFunction(e) {
                return g(e, [this]);
            }
            _putElementInTemplate(e, t) {
                if (this._config.html) return (t.innerHTML = ""), void t.append(e);
                t.textContent = e.textContent;
            }
        }
        let s$ = new Set(["sanitize", "allowList", "sanitizeFn"]),
            sy = "fade",
            sb = "show",
            sw = ".modal",
            s_ = "hide.bs.modal",
            sx = "hover",
            s8 = "focus",
            sE = { AUTO: "auto", TOP: "top", RIGHT: f() ? "left" : "right", BOTTOM: "bottom", LEFT: f() ? "right" : "left" },
            sC = {
                allowList: sc,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                html: !1,
                offset: [0, 6],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus",
            },
            sS = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
            };
        class sT extends B {
            constructor(e, t) {
                if (void 0 === t4) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(e, t),
                    (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._isHovered = null),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this._templateFactory = null),
                    (this._newContent = null),
                    (this.tip = null),
                    this._setListeners(),
                    this._config.selector || this._fixTitle();
            }
            static get Default() {
                return sC;
            }
            static get DefaultType() {
                return sS;
            }
            static get NAME() {
                return "tooltip";
            }
            enable() {
                this._isEnabled = !0;
            }
            disable() {
                this._isEnabled = !1;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle() {
                this._isEnabled && ((this._activeTrigger.click = !this._activeTrigger.click), this._isShown() ? this._leave() : this._enter());
            }
            dispose() {
                clearTimeout(this._timeout),
                    O.off(this._element.closest(sw), s_, this._hideModalHandler),
                    this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                    this._disposePopper(),
                    super.dispose();
            }
            show() {
                if ("none" === this._element.style.display) throw Error("Please use show on visible elements");
                if (!this._isWithContent() || !this._isEnabled) return;
                let e = O.trigger(this._element, this.constructor.eventName("show")),
                    t = (d(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                if (e.defaultPrevented || !t) return;
                this._disposePopper();
                let i = this._getTipElement();
                this._element.setAttribute("aria-describedby", i.getAttribute("id"));
                let { container: s } = this._config;
                if (
                    (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(i), O.trigger(this._element, this.constructor.eventName("inserted"))),
                    (this._popper = this._createPopper(i)),
                    i.classList.add(sb),
                    "ontouchstart" in document.documentElement)
                )
                    for (let n of [].concat(...document.body.children)) O.on(n, "mouseover", c);
                this._queueCallback(
                    () => {
                        O.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), (this._isHovered = !1);
                    },
                    this.tip,
                    this._isAnimated()
                );
            }
            hide() {
                if (this._isShown() && !O.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                    if ((this._getTipElement().classList.remove(sb), "ontouchstart" in document.documentElement)) for (let e of [].concat(...document.body.children)) O.off(e, "mouseover", c);
                    (this._activeTrigger.click = !1),
                        (this._activeTrigger[s8] = !1),
                        (this._activeTrigger[sx] = !1),
                        (this._isHovered = null),
                        this._queueCallback(
                            () => {
                                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), O.trigger(this._element, this.constructor.eventName("hidden")));
                            },
                            this.tip,
                            this._isAnimated()
                        );
                }
            }
            update() {
                this._popper && this._popper.update();
            }
            _isWithContent() {
                return Boolean(this._getTitle());
            }
            _getTipElement() {
                return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
            }
            _createTipElement(e) {
                let t = this._getTemplateFactory(e).toHtml();
                if (!t) return null;
                t.classList.remove(sy, sb), t.classList.add(`bs-${this.constructor.NAME}-auto`);
                let i = ((e) => {
                    do e += Math.floor(1e6 * Math.random());
                    while (document.getElementById(e));
                    return e;
                })(this.constructor.NAME).toString();
                return t.setAttribute("id", i), this._isAnimated() && t.classList.add(sy), t;
            }
            setContent(e) {
                (this._newContent = e), this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(e) {
                return (
                    this._templateFactory ? this._templateFactory.changeContent(e) : (this._templateFactory = new sv({ ...this._config, content: e, extraClass: this._resolvePossibleFunction(this._config.customClass) })),
                    this._templateFactory
                );
            }
            _getContentForTemplate() {
                return { ".tooltip-inner": this._getTitle() };
            }
            _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
            }
            _initializeOnDelegatedTarget(e) {
                return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
            }
            _isAnimated() {
                return this._config.animation || (this.tip && this.tip.classList.contains(sy));
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(sb);
            }
            _createPopper(e) {
                let t = sE[g(this._config.placement, [this, e, this._element]).toUpperCase()];
                return t7(this._element, e, this._getPopperConfig(t));
            }
            _getOffset() {
                let { offset: e } = this._config;
                return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
            }
            _resolvePossibleFunction(e) {
                return g(e, [this._element]);
            }
            _getPopperConfig(e) {
                let t = {
                    placement: e,
                    modifiers: [
                        { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                        { name: "offset", options: { offset: this._getOffset() } },
                        { name: "preventOverflow", options: { boundary: this._config.boundary } },
                        { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                        {
                            name: "preSetPlacement",
                            enabled: !0,
                            phase: "beforeMain",
                            fn: (e) => {
                                this._getTipElement().setAttribute("data-popper-placement", e.state.placement);
                            },
                        },
                    ],
                };
                return { ...t, ...g(this._config.popperConfig, [t]) };
            }
            _setListeners() {
                let e = this._config.trigger.split(" ");
                for (let t of e)
                    if ("click" === t)
                        O.on(this._element, this.constructor.eventName("click"), this._config.selector, (e) => {
                            this._initializeOnDelegatedTarget(e).toggle();
                        });
                    else if ("manual" !== t) {
                        let i = t === sx ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                            s = t === sx ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                        O.on(this._element, i, this._config.selector, (e) => {
                            let t = this._initializeOnDelegatedTarget(e);
                            (t._activeTrigger["focusin" === e.type ? s8 : sx] = !0), t._enter();
                        }),
                            O.on(this._element, s, this._config.selector, (e) => {
                                let t = this._initializeOnDelegatedTarget(e);
                                (t._activeTrigger["focusout" === e.type ? s8 : sx] = t._element.contains(e.relatedTarget)), t._leave();
                            });
                    }
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                    O.on(this._element.closest(sw), s_, this._hideModalHandler);
            }
            _fixTitle() {
                let e = this._element.getAttribute("title");
                e &&
                    (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e),
                    this._element.setAttribute("data-bs-original-title", e),
                    this._element.removeAttribute("title"));
            }
            _enter() {
                this._isShown() || this._isHovered
                    ? (this._isHovered = !0)
                    : ((this._isHovered = !0),
                      this._setTimeout(() => {
                          this._isHovered && this.show();
                      }, this._config.delay.show));
            }
            _leave() {
                this._isWithActiveTrigger() ||
                    ((this._isHovered = !1),
                    this._setTimeout(() => {
                        this._isHovered || this.hide();
                    }, this._config.delay.hide));
            }
            _setTimeout(e, t) {
                clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(e) {
                let t = H.getDataAttributes(this._element);
                for (let i of Object.keys(t)) s$.has(i) && delete t[i];
                return (e = { ...t, ...("object" == typeof e && e ? e : {}) }), (e = this._mergeConfigObj(e)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
            }
            _configAfterMerge(e) {
                return (
                    (e.container = !1 === e.container ? document.body : a(e.container)),
                    "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
                    "number" == typeof e.title && (e.title = e.title.toString()),
                    "number" == typeof e.content && (e.content = e.content.toString()),
                    e
                );
            }
            _getDelegateConfig() {
                let e = {};
                for (let [t, i] of Object.entries(this._config)) this.constructor.Default[t] !== i && (e[t] = i);
                return (e.selector = !1), (e.trigger = "manual"), e;
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), (this._popper = null)), this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = sT.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        m(sT);
        let sk = {
                ...sT.Default,
                content: "",
                offset: [0, 8],
                placement: "right",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click",
            },
            s9 = { ...sT.DefaultType, content: "(null|string|element|function)" };
        class sA extends sT {
            static get Default() {
                return sk;
            }
            static get DefaultType() {
                return s9;
            }
            static get NAME() {
                return "popover";
            }
            _isWithContent() {
                return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
                return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = sA.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        m(sA);
        let sL = ".bs.scrollspy",
            sP = `activate${sL}`,
            sz = `click${sL}`,
            sI = `load${sL}.data-api`,
            sO = "active",
            sM = "[href]",
            sD = ".nav-link",
            s0 = `${sD}, .nav-item > ${sD}, .list-group-item`,
            sN = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] },
            sH = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
        class sW extends B {
            constructor(e, t) {
                super(e, t),
                    (this._targetLinks = new Map()),
                    (this._observableSections = new Map()),
                    (this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element),
                    (this._activeTarget = null),
                    (this._observer = null),
                    (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
                    this.refresh();
            }
            static get Default() {
                return sN;
            }
            static get DefaultType() {
                return sH;
            }
            static get NAME() {
                return "scrollspy";
            }
            refresh() {
                for (let e of (this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver()), this._observableSections.values()))
                    this._observer.observe(e);
            }
            dispose() {
                this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(e) {
                return (
                    (e.target = a(e.target) || document.body), (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin), "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((e) => Number.parseFloat(e))), e
                );
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll &&
                    (O.off(this._config.target, sz),
                    O.on(this._config.target, sz, sM, (e) => {
                        let t = this._observableSections.get(e.target.hash);
                        if (t) {
                            e.preventDefault();
                            let i = this._rootElement || window,
                                s = t.offsetTop - this._element.offsetTop;
                            if (i.scrollTo) return void i.scrollTo({ top: s, behavior: "smooth" });
                            i.scrollTop = s;
                        }
                    }));
            }
            _getNewObserver() {
                let e = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
                return new IntersectionObserver((e) => this._observerCallback(e), e);
            }
            _observerCallback(e) {
                let t = (e) => this._targetLinks.get(`#${e.target.id}`),
                    i = (e) => {
                        (this._previousScrollData.visibleEntryTop = e.target.offsetTop), this._process(t(e));
                    },
                    s = (this._rootElement || document.documentElement).scrollTop,
                    n = s >= this._previousScrollData.parentScrollTop;
                for (let r of ((this._previousScrollData.parentScrollTop = s), e)) {
                    if (!r.isIntersecting) {
                        (this._activeTarget = null), this._clearActiveClass(t(r));
                        continue;
                    }
                    let a = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (n && a) {
                        if ((i(r), !s)) return;
                    } else n || a || i(r);
                }
            }
            _initializeTargetsAndObservables() {
                (this._targetLinks = new Map()), (this._observableSections = new Map());
                let e = Y.find(sM, this._config.target);
                for (let t of e) {
                    if (!t.hash || l(t)) continue;
                    let i = Y.findOne(decodeURI(t.hash), this._element);
                    o(i) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, i));
                }
            }
            _process(e) {
                this._activeTarget !== e && (this._clearActiveClass(this._config.target), (this._activeTarget = e), e.classList.add(sO), this._activateParents(e), O.trigger(this._element, sP, { relatedTarget: e }));
            }
            _activateParents(e) {
                if (e.classList.contains("dropdown-item")) Y.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(sO);
                else for (let t of Y.parents(e, ".nav, .list-group")) for (let i of Y.prev(t, s0)) i.classList.add(sO);
            }
            _clearActiveClass(e) {
                e.classList.remove(sO);
                let t = Y.find(`${sM}.${sO}`, e);
                for (let i of t) i.classList.remove(sO);
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = sW.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        O.on(window, sI, () => {
            for (let e of Y.find('[data-bs-spy="scroll"]')) sW.getOrCreateInstance(e);
        }),
            m(sW);
        let sB = ".bs.tab",
            sq = `hide${sB}`,
            s1 = `hidden${sB}`,
            sY = `show${sB}`,
            s3 = `shown${sB}`,
            sR = `click${sB}`,
            sX = `keydown${sB}`,
            sj = `load${sB}`,
            sF = "ArrowRight",
            sG = "ArrowDown",
            sV = "Home",
            s5 = "active",
            s2 = "fade",
            s6 = "show",
            s7 = ".dropdown-toggle",
            s4 = `:not(${s7})`,
            sU = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            sQ = `.nav-link${s4}, .list-group-item${s4}, [role="tab"]${s4}, ${sU}`,
            sK = `.${s5}[data-bs-toggle="tab"], .${s5}[data-bs-toggle="pill"], .${s5}[data-bs-toggle="list"]`;
        class sZ extends B {
            constructor(e) {
                super(e), (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), O.on(this._element, sX, (e) => this._keydown(e)));
            }
            static get NAME() {
                return "tab";
            }
            show() {
                let e = this._element;
                if (this._elemIsActive(e)) return;
                let t = this._getActiveElem(),
                    i = t ? O.trigger(t, sq, { relatedTarget: e }) : null;
                O.trigger(e, sY, { relatedTarget: t }).defaultPrevented || (i && i.defaultPrevented) || (this._deactivate(t, e), this._activate(e, t));
            }
            _activate(e, t) {
                e &&
                    (e.classList.add(s5),
                    this._activate(Y.getElementFromSelector(e)),
                    this._queueCallback(
                        () => {
                            "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), O.trigger(e, s3, { relatedTarget: t })) : e.classList.add(s6);
                        },
                        e,
                        e.classList.contains(s2)
                    ));
            }
            _deactivate(e, t) {
                e &&
                    (e.classList.remove(s5),
                    e.blur(),
                    this._deactivate(Y.getElementFromSelector(e)),
                    this._queueCallback(
                        () => {
                            "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), O.trigger(e, s1, { relatedTarget: t })) : e.classList.remove(s6);
                        },
                        e,
                        e.classList.contains(s2)
                    ));
            }
            _keydown(e) {
                if (!["ArrowLeft", sF, "ArrowUp", sG, sV, "End"].includes(e.key)) return;
                e.stopPropagation(), e.preventDefault();
                let t = this._getChildren().filter((e) => !l(e)),
                    i;
                if ([sV, "End"].includes(e.key)) i = t[e.key === sV ? 0 : t.length - 1];
                else {
                    let s = [sF, sG].includes(e.key);
                    i = $(t, e.target, s, !0);
                }
                i && (i.focus({ preventScroll: !0 }), sZ.getOrCreateInstance(i).show());
            }
            _getChildren() {
                return Y.find(sQ, this._parent);
            }
            _getActiveElem() {
                return this._getChildren().find((e) => this._elemIsActive(e)) || null;
            }
            _setInitialAttributes(e, t) {
                for (let i of (this._setAttributeIfNotExists(e, "role", "tablist"), t)) this._setInitialAttributesOnChild(i);
            }
            _setInitialAttributesOnChild(e) {
                e = this._getInnerElement(e);
                let t = this._elemIsActive(e),
                    i = this._getOuterElement(e);
                e.setAttribute("aria-selected", t),
                    i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
                    t || e.setAttribute("tabindex", "-1"),
                    this._setAttributeIfNotExists(e, "role", "tab"),
                    this._setInitialAttributesOnTargetPanel(e);
            }
            _setInitialAttributesOnTargetPanel(e) {
                let t = Y.getElementFromSelector(e);
                t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
            }
            _toggleDropDown(e, t) {
                let i = this._getOuterElement(e);
                if (!i.classList.contains("dropdown")) return;
                let s = (e, s) => {
                    let n = Y.findOne(e, i);
                    n && n.classList.toggle(s, t);
                };
                s(s7, s5), s(".dropdown-menu", s6), i.setAttribute("aria-expanded", t);
            }
            _setAttributeIfNotExists(e, t, i) {
                e.hasAttribute(t) || e.setAttribute(t, i);
            }
            _elemIsActive(e) {
                return e.classList.contains(s5);
            }
            _getInnerElement(e) {
                return e.matches(sQ) ? e : Y.findOne(sQ, e);
            }
            _getOuterElement(e) {
                return e.closest(".nav-item, .list-group-item") || e;
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = sZ.getOrCreateInstance(this);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        O.on(document, sR, sU, function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this) || sZ.getOrCreateInstance(this).show();
        }),
            O.on(window, sj, () => {
                for (let e of Y.find(sK)) sZ.getOrCreateInstance(e);
            }),
            m(sZ);
        let sJ = ".bs.toast",
            ne = `mouseover${sJ}`,
            nt = `mouseout${sJ}`,
            ni = `focusin${sJ}`,
            ns = `focusout${sJ}`,
            nn = `hide${sJ}`,
            nr = `hidden${sJ}`,
            na = `show${sJ}`,
            no = `shown${sJ}`,
            nl = "hide",
            nd = "show",
            nc = "showing",
            nu = { animation: "boolean", autohide: "boolean", delay: "number" },
            nh = { animation: !0, autohide: !0, delay: 5e3 };
        class np extends B {
            constructor(e, t) {
                super(e, t), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
            }
            static get Default() {
                return nh;
            }
            static get DefaultType() {
                return nu;
            }
            static get NAME() {
                return "toast";
            }
            show() {
                O.trigger(this._element, na).defaultPrevented ||
                    (this._clearTimeout(),
                    this._config.animation && this._element.classList.add("fade"),
                    this._element.classList.remove(nl),
                    u(this._element),
                    this._element.classList.add(nd, nc),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove(nc), O.trigger(this._element, no), this._maybeScheduleHide();
                        },
                        this._element,
                        this._config.animation
                    ));
            }
            hide() {
                this.isShown() &&
                    (O.trigger(this._element, nn).defaultPrevented ||
                        (this._element.classList.add(nc),
                        this._queueCallback(
                            () => {
                                this._element.classList.add(nl), this._element.classList.remove(nc, nd), O.trigger(this._element, nr);
                            },
                            this._element,
                            this._config.animation
                        )));
            }
            dispose() {
                this._clearTimeout(), this.isShown() && this._element.classList.remove(nd), super.dispose();
            }
            isShown() {
                return this._element.classList.contains(nd);
            }
            _maybeScheduleHide() {
                this._config.autohide &&
                    (this._hasMouseInteraction ||
                        this._hasKeyboardInteraction ||
                        (this._timeout = setTimeout(() => {
                            this.hide();
                        }, this._config.delay)));
            }
            _onInteraction(e, t) {
                switch (e.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = t;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = t;
                }
                if (t) return void this._clearTimeout();
                let i = e.relatedTarget;
                this._element === i || this._element.contains(i) || this._maybeScheduleHide();
            }
            _setListeners() {
                O.on(this._element, ne, (e) => this._onInteraction(e, !0)),
                    O.on(this._element, nt, (e) => this._onInteraction(e, !1)),
                    O.on(this._element, ni, (e) => this._onInteraction(e, !0)),
                    O.on(this._element, ns, (e) => this._onInteraction(e, !1));
            }
            _clearTimeout() {
                clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = np.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        return R(np), m(np), { Alert: G, Button: U, Carousel: eS, Collapse: eH, Dropdown: ib, Modal: i2, Offcanvas: sd, Popover: sA, ScrollSpy: sW, Tab: sZ, Toast: np, Tooltip: sT };
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).GLightbox = t());
    })(this, function () {
        "use strict";
        function e(t) {
            return (e =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(t);
        }
        function t(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
            }
        }
        function s(e, t, s) {
            return t && i(e.prototype, t), s && i(e, s), e;
        }
        var n = Date.now();
        function r() {
            var e = {},
                t = !0,
                i = 0,
                s = arguments.length;
            for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && ((t = arguments[0]), i++); i < s; i++) {
                var n = arguments[i];
                !(function (i) {
                    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t && "[object Object]" === Object.prototype.toString.call(i[s]) ? (e[s] = r(!0, e[s], i[s])) : (e[s] = i[s]));
                })(n);
            }
            return e;
        }
        function a(e, t) {
            if (((E(e) || e === window || e === document) && (e = [e]), S(e) || T(e) || (e = [e]), 0 != L(e))) {
                if (S(e) && !T(e)) for (var i = e.length, s = 0; s < i && !1 !== t.call(e[s], e[s], s, e); s++);
                else if (T(e)) {
                    for (var n in e) if (A(e, n) && !1 === t.call(e[n], e[n], n, e)) break;
                }
            }
        }
        function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                s = (e[n] = e[n] || []),
                r = { all: s, evt: null, found: null };
            return (
                t &&
                    i &&
                    L(s) > 0 &&
                    a(s, function (e, s) {
                        if (e.eventName == t && e.fn.toString() == i.toString()) return (r.found = !0), (r.evt = s), !1;
                    }),
                r
            );
        }
        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = t.onElement,
                s = t.withCallback,
                n = t.avoidDuplicate,
                r = void 0 === n || n,
                l = t.once,
                d = void 0 !== l && l,
                c = t.useCapture,
                u = void 0 !== c && c,
                h = arguments.length > 2 ? arguments[2] : void 0,
                p = i || [];
            function f(e) {
                _(s) && s.call(h, e, this), d && f.destroy();
            }
            return (
                x(p) && (p = document.querySelectorAll(p)),
                (f.destroy = function () {
                    a(p, function (t) {
                        var i = o(t, e, f);
                        i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, f, u);
                    });
                }),
                a(p, function (t) {
                    var i = o(t, e, f);
                    ((t.addEventListener && r && !i.found) || !r) && (t.addEventListener(e, f, u), i.all.push({ eventName: e, fn: f }));
                }),
                f
            );
        }
        function d(e, t) {
            a(t.split(" "), function (t) {
                return e.classList.add(t);
            });
        }
        function c(e, t) {
            a(t.split(" "), function (t) {
                return e.classList.remove(t);
            });
        }
        function u(e, t) {
            return e.classList.contains(t);
        }
        function h(e, t) {
            for (; e !== document.body; ) {
                if (!(e = e.parentElement)) return !1;
                if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
            }
        }
        function p(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e || "" === t) return !1;
            if ("none" === t) return _(i) && i(), !1;
            var s = (function e() {
                    var t,
                        i = document.createElement("fakeelement"),
                        s = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "animationend", WebkitAnimation: "webkitAnimationEnd" };
                    for (t in s) if (void 0 !== i.style[t]) return s[t];
                })(),
                n = t.split(" ");
            a(n, function (t) {
                d(e, "g" + t);
            }),
                l(s, {
                    onElement: e,
                    avoidDuplicate: !1,
                    once: !0,
                    withCallback: function (e, t) {
                        a(n, function (e) {
                            c(t, "g" + e);
                        }),
                            _(i) && i();
                    },
                });
        }
        function f(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if ("" === t) return (e.style.webkitTransform = ""), (e.style.MozTransform = ""), (e.style.msTransform = ""), (e.style.OTransform = ""), (e.style.transform = ""), !1;
            (e.style.webkitTransform = t), (e.style.MozTransform = t), (e.style.msTransform = t), (e.style.OTransform = t), (e.style.transform = t);
        }
        function m(e) {
            e.style.display = "block";
        }
        function g(e) {
            e.style.display = "none";
        }
        function v(e) {
            var t = document.createDocumentFragment(),
                i = document.createElement("div");
            for (i.innerHTML = e; i.firstChild; ) t.appendChild(i.firstChild);
            return t;
        }
        function $() {
            return { width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight };
        }
        function y(e, t, i, s) {
            if (e()) t();
            else {
                i || (i = 100);
                var n,
                    r = setInterval(function () {
                        e() && (clearInterval(r), n && clearTimeout(n), t());
                    }, i);
                s &&
                    (n = setTimeout(function () {
                        clearInterval(r);
                    }, s));
            }
        }
        function b(e, t, i) {
            if (k(e)) console.error("Inject assets error");
            else if ((_(t) && ((i = t), (t = !1)), x(t) && t in window)) _(i) && i();
            else {
                var s;
                if (-1 !== e.indexOf(".css")) {
                    if ((s = document.querySelectorAll('link[href="' + e + '"]')) && s.length > 0) return void (_(i) && i());
                    var n = document.getElementsByTagName("head")[0],
                        r = n.querySelectorAll('link[rel="stylesheet"]'),
                        a = document.createElement("link");
                    return (a.rel = "stylesheet"), (a.type = "text/css"), (a.href = e), (a.media = "all"), r ? n.insertBefore(a, r[0]) : n.appendChild(a), void (_(i) && i());
                }
                if ((s = document.querySelectorAll('script[src="' + e + '"]')) && s.length > 0) {
                    if (_(i)) {
                        if (x(t))
                            return (
                                y(
                                    function () {
                                        return void 0 !== window[t];
                                    },
                                    function () {
                                        i();
                                    }
                                ),
                                !1
                            );
                        i();
                    }
                } else {
                    var o = document.createElement("script");
                    (o.type = "text/javascript"),
                        (o.src = e),
                        (o.onload = function () {
                            if (_(i)) {
                                if (x(t))
                                    return (
                                        y(
                                            function () {
                                                return void 0 !== window[t];
                                            },
                                            function () {
                                                i();
                                            }
                                        ),
                                        !1
                                    );
                                i();
                            }
                        }),
                        document.body.appendChild(o);
                }
            }
        }
        function w() {
            return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
        }
        function _(e) {
            return "function" == typeof e;
        }
        function x(e) {
            return "string" == typeof e;
        }
        function E(e) {
            return !(!e || !e.nodeType || 1 != e.nodeType);
        }
        function C(e) {
            return Array.isArray(e);
        }
        function S(e) {
            return e && e.length && isFinite(e.length);
        }
        function T(t) {
            return "object" === e(t) && null != t && !_(t) && !C(t);
        }
        function k(e) {
            return null == e;
        }
        function A(e, t) {
            return null !== e && hasOwnProperty.call(e, t);
        }
        function L(e) {
            if (T(e)) {
                if (e.keys) return e.keys().length;
                var t = 0;
                for (var i in e) A(e, i) && t++;
                return t;
            }
            return e.length;
        }
        function P(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        }
        function z() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
            if (!t.length) return !1;
            if (1 == t.length) return t[0];
            "string" == typeof e && (e = parseInt(e));
            var i = [];
            a(t, function (e) {
                i.push(e.getAttribute("data-taborder"));
            });
            var s = Math.max.apply(
                    Math,
                    i.map(function (e) {
                        return parseInt(e);
                    })
                ),
                n = e < 0 ? 1 : e + 1;
            n > s && (n = "1");
            var r = i
                .filter(function (e) {
                    return e >= parseInt(n);
                })
                .sort()[0];
            return document.querySelector('.gbtn[data-taborder="'.concat(r, '"]'));
        }
        function I(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        var O = (function () {
            function e(i) {
                t(this, e), (this.handlers = []), (this.el = i);
            }
            return (
                s(e, [
                    {
                        key: "add",
                        value: function (e) {
                            this.handlers.push(e);
                        },
                    },
                    {
                        key: "del",
                        value: function (e) {
                            e || (this.handlers = []);
                            for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1);
                        },
                    },
                    {
                        key: "dispatch",
                        value: function () {
                            for (var e = 0, t = this.handlers.length; e < t; e++) {
                                var i = this.handlers[e];
                                "function" == typeof i && i.apply(this.el, arguments);
                            }
                        },
                    },
                ]),
                e
            );
        })();
        function M(e, t) {
            var i = new O(e);
            return i.add(t), i;
        }
        var D = (function () {
            function e(i, s) {
                t(this, e),
                    (this.element = "string" == typeof i ? document.querySelector(i) : i),
                    (this.start = this.start.bind(this)),
                    (this.move = this.move.bind(this)),
                    (this.end = this.end.bind(this)),
                    (this.cancel = this.cancel.bind(this)),
                    this.element.addEventListener("touchstart", this.start, !1),
                    this.element.addEventListener("touchmove", this.move, !1),
                    this.element.addEventListener("touchend", this.end, !1),
                    this.element.addEventListener("touchcancel", this.cancel, !1),
                    (this.preV = { x: null, y: null }),
                    (this.pinchStartLen = null),
                    (this.zoom = 1),
                    (this.isDoubleTap = !1);
                var n = function () {};
                (this.rotate = M(this.element, s.rotate || n)),
                    (this.touchStart = M(this.element, s.touchStart || n)),
                    (this.multipointStart = M(this.element, s.multipointStart || n)),
                    (this.multipointEnd = M(this.element, s.multipointEnd || n)),
                    (this.pinch = M(this.element, s.pinch || n)),
                    (this.swipe = M(this.element, s.swipe || n)),
                    (this.tap = M(this.element, s.tap || n)),
                    (this.doubleTap = M(this.element, s.doubleTap || n)),
                    (this.longTap = M(this.element, s.longTap || n)),
                    (this.singleTap = M(this.element, s.singleTap || n)),
                    (this.pressMove = M(this.element, s.pressMove || n)),
                    (this.twoFingerPressMove = M(this.element, s.twoFingerPressMove || n)),
                    (this.touchMove = M(this.element, s.touchMove || n)),
                    (this.touchEnd = M(this.element, s.touchEnd || n)),
                    (this.touchCancel = M(this.element, s.touchCancel || n)),
                    (this.translateContainer = this.element),
                    (this._cancelAllHandler = this.cancelAll.bind(this)),
                    window.addEventListener("scroll", this._cancelAllHandler),
                    (this.delta = null),
                    (this.last = null),
                    (this.now = null),
                    (this.tapTimeout = null),
                    (this.singleTapTimeout = null),
                    (this.longTapTimeout = null),
                    (this.swipeTimeout = null),
                    (this.x1 = this.x2 = this.y1 = this.y2 = null),
                    (this.preTapPosition = { x: null, y: null });
            }
            return (
                s(e, [
                    {
                        key: "start",
                        value: function (e) {
                            if (e.touches) {
                                if (e.target && e.target.nodeName && ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                                else {
                                    (this.now = Date.now()),
                                        (this.x1 = e.touches[0].pageX),
                                        (this.y1 = e.touches[0].pageY),
                                        (this.delta = this.now - (this.last || this.now)),
                                        this.touchStart.dispatch(e, this.element),
                                        null !== this.preTapPosition.x &&
                                            ((this.isDoubleTap = this.delta > 0 && this.delta <= 250 && 30 > Math.abs(this.preTapPosition.x - this.x1) && 30 > Math.abs(this.preTapPosition.y - this.y1)),
                                            this.isDoubleTap && clearTimeout(this.singleTapTimeout)),
                                        (this.preTapPosition.x = this.x1),
                                        (this.preTapPosition.y = this.y1),
                                        (this.last = this.now);
                                    var t = this.preV;
                                    if (e.touches.length > 1) {
                                        this._cancelLongTap(), this._cancelSingleTap();
                                        var i = { x: e.touches[1].pageX - this.x1, y: e.touches[1].pageY - this.y1 };
                                        (t.x = i.x), (t.y = i.y), (this.pinchStartLen = I(t)), this.multipointStart.dispatch(e, this.element);
                                    }
                                    (this._preventTap = !1),
                                        (this.longTapTimeout = setTimeout(
                                            function () {
                                                this.longTap.dispatch(e, this.element), (this._preventTap = !0);
                                            }.bind(this),
                                            750
                                        ));
                                }
                            }
                        },
                    },
                    {
                        key: "move",
                        value: function (e) {
                            if (e.touches) {
                                var t = this.preV,
                                    i = e.touches.length,
                                    s = e.touches[0].pageX,
                                    n = e.touches[0].pageY;
                                if (((this.isDoubleTap = !1), i > 1)) {
                                    var r,
                                        a,
                                        o,
                                        l,
                                        d,
                                        c = e.touches[1].pageX,
                                        u = e.touches[1].pageY,
                                        h = { x: e.touches[1].pageX - s, y: e.touches[1].pageY - n };
                                    null !== t.x &&
                                        (this.pinchStartLen > 0 && ((e.zoom = I(h) / this.pinchStartLen), this.pinch.dispatch(e, this.element)),
                                        (e.angle =
                                            ((o = (function (e, t) {
                                                var i = I(e) * I(t);
                                                if (0 === i) return 0;
                                                var s,
                                                    n,
                                                    r = ((s = e), (n = t), (s.x * n.x + s.y * n.y) / i);
                                                return r > 1 && (r = 1), Math.acos(r);
                                            })((r = h), (a = t))),
                                            (l = r),
                                            (d = a),
                                            l.x * d.y - d.x * l.y > 0 && (o *= -1),
                                            (180 * o) / Math.PI)),
                                        this.rotate.dispatch(e, this.element)),
                                        (t.x = h.x),
                                        (t.y = h.y),
                                        null !== this.x2 && null !== this.sx2 ? ((e.deltaX = (s - this.x2 + c - this.sx2) / 2), (e.deltaY = (n - this.y2 + u - this.sy2) / 2)) : ((e.deltaX = 0), (e.deltaY = 0)),
                                        this.twoFingerPressMove.dispatch(e, this.element),
                                        (this.sx2 = c),
                                        (this.sy2 = u);
                                } else {
                                    if (null !== this.x2) {
                                        (e.deltaX = s - this.x2), (e.deltaY = n - this.y2);
                                        var p = Math.abs(this.x1 - this.x2),
                                            f = Math.abs(this.y1 - this.y2);
                                        (p > 10 || f > 10) && (this._preventTap = !0);
                                    } else (e.deltaX = 0), (e.deltaY = 0);
                                    this.pressMove.dispatch(e, this.element);
                                }
                                this.touchMove.dispatch(e, this.element), this._cancelLongTap(), (this.x2 = s), (this.y2 = n), i > 1 && e.preventDefault();
                            }
                        },
                    },
                    {
                        key: "end",
                        value: function (e) {
                            if (e.changedTouches) {
                                this._cancelLongTap();
                                var t = this;
                                e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), (this.sx2 = this.sy2 = null)),
                                    (this.x2 && Math.abs(this.x1 - this.x2) > 30) || (this.y2 && Math.abs(this.y1 - this.y2) > 30)
                                        ? ((e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2)),
                                          (this.swipeTimeout = setTimeout(function () {
                                              t.swipe.dispatch(e, t.element);
                                          }, 0)))
                                        : ((this.tapTimeout = setTimeout(function () {
                                              t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), (t.isDoubleTap = !1));
                                          }, 0)),
                                          t.isDoubleTap ||
                                              (t.singleTapTimeout = setTimeout(function () {
                                                  t.singleTap.dispatch(e, t.element);
                                              }, 250))),
                                    this.touchEnd.dispatch(e, this.element),
                                    (this.preV.x = 0),
                                    (this.preV.y = 0),
                                    (this.zoom = 1),
                                    (this.pinchStartLen = null),
                                    (this.x1 = this.x2 = this.y1 = this.y2 = null);
                            }
                        },
                    },
                    {
                        key: "cancelAll",
                        value: function () {
                            (this._preventTap = !0), clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
                        },
                    },
                    {
                        key: "cancel",
                        value: function (e) {
                            this.cancelAll(), this.touchCancel.dispatch(e, this.element);
                        },
                    },
                    {
                        key: "_cancelLongTap",
                        value: function () {
                            clearTimeout(this.longTapTimeout);
                        },
                    },
                    {
                        key: "_cancelSingleTap",
                        value: function () {
                            clearTimeout(this.singleTapTimeout);
                        },
                    },
                    {
                        key: "_swipeDirection",
                        value: function (e, t, i, s) {
                            return Math.abs(e - t) >= Math.abs(i - s) ? (e - t > 0 ? "Left" : "Right") : i - s > 0 ? "Up" : "Down";
                        },
                    },
                    {
                        key: "on",
                        value: function (e, t) {
                            this[e] && this[e].add(t);
                        },
                    },
                    {
                        key: "off",
                        value: function (e, t) {
                            this[e] && this[e].del(t);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return (
                                this.singleTapTimeout && clearTimeout(this.singleTapTimeout),
                                this.tapTimeout && clearTimeout(this.tapTimeout),
                                this.longTapTimeout && clearTimeout(this.longTapTimeout),
                                this.swipeTimeout && clearTimeout(this.swipeTimeout),
                                this.element.removeEventListener("touchstart", this.start),
                                this.element.removeEventListener("touchmove", this.move),
                                this.element.removeEventListener("touchend", this.end),
                                this.element.removeEventListener("touchcancel", this.cancel),
                                this.rotate.del(),
                                this.touchStart.del(),
                                this.multipointStart.del(),
                                this.multipointEnd.del(),
                                this.pinch.del(),
                                this.swipe.del(),
                                this.tap.del(),
                                this.doubleTap.del(),
                                this.longTap.del(),
                                this.singleTap.del(),
                                this.pressMove.del(),
                                this.twoFingerPressMove.del(),
                                this.touchMove.del(),
                                this.touchEnd.del(),
                                this.touchCancel.del(),
                                (this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null),
                                window.removeEventListener("scroll", this._cancelAllHandler),
                                null
                            );
                        },
                    },
                ]),
                e
            );
        })();
        function N(e) {
            var t = (function () {
                    var e,
                        t = document.createElement("fakeelement"),
                        i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                    for (e in i) if (void 0 !== t.style[e]) return i[e];
                })(),
                i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                s = u(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
                n = h(s, ".ginner-container"),
                r = e.querySelector(".gslide-description");
            i > 769 && (s = n),
                d(s, "greset"),
                f(s, "translate3d(0, 0, 0)"),
                l(t, {
                    onElement: s,
                    once: !0,
                    withCallback: function (e, t) {
                        c(s, "greset");
                    },
                }),
                (s.style.opacity = ""),
                r && (r.style.opacity = "");
        }
        var H = (function () {
                function e(i, s) {
                    var n = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if ((t(this, e), (this.img = i), (this.slide = s), (this.onclose = r), this.img.setZoomEvents)) return !1;
                    (this.active = !1),
                        (this.zoomedIn = !1),
                        (this.dragging = !1),
                        (this.currentX = null),
                        (this.currentY = null),
                        (this.initialX = null),
                        (this.initialY = null),
                        (this.xOffset = 0),
                        (this.yOffset = 0),
                        this.img.addEventListener(
                            "mousedown",
                            function (e) {
                                return n.dragStart(e);
                            },
                            !1
                        ),
                        this.img.addEventListener(
                            "mouseup",
                            function (e) {
                                return n.dragEnd(e);
                            },
                            !1
                        ),
                        this.img.addEventListener(
                            "mousemove",
                            function (e) {
                                return n.drag(e);
                            },
                            !1
                        ),
                        this.img.addEventListener(
                            "click",
                            function (e) {
                                return n.slide.classList.contains("dragging-nav") ? (n.zoomOut(), !1) : n.zoomedIn ? void (n.zoomedIn && !n.dragging && n.zoomOut()) : n.zoomIn();
                            },
                            !1
                        ),
                        (this.img.setZoomEvents = !0);
                }
                return (
                    s(e, [
                        {
                            key: "zoomIn",
                            value: function () {
                                var e = this.widowWidth();
                                if (!(this.zoomedIn || e <= 768)) {
                                    var t = this.img;
                                    if ((t.setAttribute("data-style", t.getAttribute("style")), (t.style.maxWidth = t.naturalWidth + "px"), (t.style.maxHeight = t.naturalHeight + "px"), t.naturalWidth > e)) {
                                        var i = e / 2 - t.naturalWidth / 2;
                                        this.setTranslate(this.img.parentNode, i, 0);
                                    }
                                    this.slide.classList.add("zoomed"), (this.zoomedIn = !0);
                                }
                            },
                        },
                        {
                            key: "zoomOut",
                            value: function () {
                                this.img.parentNode.setAttribute("style", ""),
                                    this.img.setAttribute("style", this.img.getAttribute("data-style")),
                                    this.slide.classList.remove("zoomed"),
                                    (this.zoomedIn = !1),
                                    (this.currentX = null),
                                    (this.currentY = null),
                                    (this.initialX = null),
                                    (this.initialY = null),
                                    (this.xOffset = 0),
                                    (this.yOffset = 0),
                                    this.onclose && "function" == typeof this.onclose && this.onclose();
                            },
                        },
                        {
                            key: "dragStart",
                            value: function (e) {
                                e.preventDefault(),
                                    this.zoomedIn
                                        ? ("touchstart" === e.type
                                              ? ((this.initialX = e.touches[0].clientX - this.xOffset), (this.initialY = e.touches[0].clientY - this.yOffset))
                                              : ((this.initialX = e.clientX - this.xOffset), (this.initialY = e.clientY - this.yOffset)),
                                          e.target === this.img && ((this.active = !0), this.img.classList.add("dragging")))
                                        : (this.active = !1);
                            },
                        },
                        {
                            key: "dragEnd",
                            value: function (e) {
                                var t = this;
                                e.preventDefault(),
                                    (this.initialX = this.currentX),
                                    (this.initialY = this.currentY),
                                    (this.active = !1),
                                    setTimeout(function () {
                                        (t.dragging = !1), (t.img.isDragging = !1), t.img.classList.remove("dragging");
                                    }, 100);
                            },
                        },
                        {
                            key: "drag",
                            value: function (e) {
                                this.active &&
                                    (e.preventDefault(),
                                    "touchmove" === e.type
                                        ? ((this.currentX = e.touches[0].clientX - this.initialX), (this.currentY = e.touches[0].clientY - this.initialY))
                                        : ((this.currentX = e.clientX - this.initialX), (this.currentY = e.clientY - this.initialY)),
                                    (this.xOffset = this.currentX),
                                    (this.yOffset = this.currentY),
                                    (this.img.isDragging = !0),
                                    (this.dragging = !0),
                                    this.setTranslate(this.img, this.currentX, this.currentY));
                            },
                        },
                        {
                            key: "onMove",
                            value: function (e) {
                                if (this.zoomedIn) {
                                    var t = e.clientX - this.img.naturalWidth / 2,
                                        i = e.clientY - this.img.naturalHeight / 2;
                                    this.setTranslate(this.img, t, i);
                                }
                            },
                        },
                        {
                            key: "setTranslate",
                            value: function (e, t, i) {
                                e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
                            },
                        },
                        {
                            key: "widowWidth",
                            value: function () {
                                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                            },
                        },
                    ]),
                    e
                );
            })(),
            W = (function () {
                function e() {
                    var i = this,
                        s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t(this, e);
                    var n = s.dragEl,
                        r = s.toleranceX,
                        a = s.toleranceY,
                        o = s.slide,
                        l = s.instance;
                    (this.el = n),
                        (this.active = !1),
                        (this.dragging = !1),
                        (this.currentX = null),
                        (this.currentY = null),
                        (this.initialX = null),
                        (this.initialY = null),
                        (this.xOffset = 0),
                        (this.yOffset = 0),
                        (this.direction = null),
                        (this.lastDirection = null),
                        (this.toleranceX = void 0 === r ? 40 : r),
                        (this.toleranceY = void 0 === a ? 65 : a),
                        (this.toleranceReached = !1),
                        (this.dragContainer = this.el),
                        (this.slide = void 0 === o ? null : o),
                        (this.instance = void 0 === l ? null : l),
                        this.el.addEventListener(
                            "mousedown",
                            function (e) {
                                return i.dragStart(e);
                            },
                            !1
                        ),
                        this.el.addEventListener(
                            "mouseup",
                            function (e) {
                                return i.dragEnd(e);
                            },
                            !1
                        ),
                        this.el.addEventListener(
                            "mousemove",
                            function (e) {
                                return i.drag(e);
                            },
                            !1
                        );
                }
                return (
                    s(e, [
                        {
                            key: "dragStart",
                            value: function (e) {
                                if (this.slide.classList.contains("zoomed")) this.active = !1;
                                else {
                                    "touchstart" === e.type
                                        ? ((this.initialX = e.touches[0].clientX - this.xOffset), (this.initialY = e.touches[0].clientY - this.yOffset))
                                        : ((this.initialX = e.clientX - this.xOffset), (this.initialY = e.clientY - this.yOffset));
                                    var t = e.target.nodeName.toLowerCase();
                                    e.target.classList.contains("nodrag") || h(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t)
                                        ? (this.active = !1)
                                        : (e.preventDefault(),
                                          (e.target === this.el || ("img" !== t && h(e.target, ".gslide-inline"))) && ((this.active = !0), this.el.classList.add("dragging"), (this.dragContainer = h(e.target, ".ginner-container"))));
                                }
                            },
                        },
                        {
                            key: "dragEnd",
                            value: function (e) {
                                var t = this;
                                e && e.preventDefault(),
                                    (this.initialX = 0),
                                    (this.initialY = 0),
                                    (this.currentX = null),
                                    (this.currentY = null),
                                    (this.initialX = null),
                                    (this.initialY = null),
                                    (this.xOffset = 0),
                                    (this.yOffset = 0),
                                    (this.active = !1),
                                    this.doSlideChange && ((this.instance.preventOutsideClick = !0), "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()),
                                    this.doSlideClose && this.instance.close(),
                                    this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0),
                                    setTimeout(function () {
                                        (t.instance.preventOutsideClick = !1),
                                            (t.toleranceReached = !1),
                                            (t.lastDirection = null),
                                            (t.dragging = !1),
                                            (t.el.isDragging = !1),
                                            t.el.classList.remove("dragging"),
                                            t.slide.classList.remove("dragging-nav"),
                                            (t.dragContainer.style.transform = ""),
                                            (t.dragContainer.style.transition = "");
                                    }, 100);
                            },
                        },
                        {
                            key: "drag",
                            value: function (e) {
                                if (this.active) {
                                    e.preventDefault(),
                                        this.slide.classList.add("dragging-nav"),
                                        "touchmove" === e.type
                                            ? ((this.currentX = e.touches[0].clientX - this.initialX), (this.currentY = e.touches[0].clientY - this.initialY))
                                            : ((this.currentX = e.clientX - this.initialX), (this.currentY = e.clientY - this.initialY)),
                                        (this.xOffset = this.currentX),
                                        (this.yOffset = this.currentY),
                                        (this.el.isDragging = !0),
                                        (this.dragging = !0),
                                        (this.doSlideChange = !1),
                                        (this.doSlideClose = !1);
                                    var t = Math.abs(this.currentX),
                                        i = Math.abs(this.currentY);
                                    if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                                        (this.yOffset = 0), (this.lastDirection = "x"), this.setTranslate(this.dragContainer, this.currentX, 0);
                                        var s = this.shouldChange();
                                        if ((!this.instance.settings.dragAutoSnap && s && (this.doSlideChange = s), this.instance.settings.dragAutoSnap && s))
                                            return (
                                                (this.instance.preventOutsideClick = !0),
                                                (this.toleranceReached = !0),
                                                (this.active = !1),
                                                (this.instance.preventOutsideClick = !0),
                                                this.dragEnd(null),
                                                "right" == s && this.instance.prevSlide(),
                                                void ("left" == s && this.instance.nextSlide())
                                            );
                                    }
                                    if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                                        (this.xOffset = 0), (this.lastDirection = "y"), this.setTranslate(this.dragContainer, 0, this.currentY);
                                        var n = this.shouldClose();
                                        return !this.instance.settings.dragAutoSnap && n && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && n && this.instance.close());
                                    }
                                }
                            },
                        },
                        {
                            key: "shouldChange",
                            value: function () {
                                var e = !1;
                                if (Math.abs(this.currentX) >= this.toleranceX) {
                                    var t = this.currentX > 0 ? "right" : "left";
                                    (("left" == t && this.slide !== this.slide.parentNode.lastChild) || ("right" == t && this.slide !== this.slide.parentNode.firstChild)) && (e = t);
                                }
                                return e;
                            },
                        },
                        {
                            key: "shouldClose",
                            value: function () {
                                var e = !1;
                                return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e;
                            },
                        },
                        {
                            key: "setTranslate",
                            value: function (e, t, i) {
                                var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                (e.style.transition = s ? "all .2s ease" : ""), (e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)"));
                            },
                        },
                    ]),
                    e
                );
            })();
        function B(e, t, i, s) {
            var n = this,
                r = e.querySelector(".ginner-container"),
                a = "gvideo" + i,
                o = e.querySelector(".gslide-media"),
                l = this.getAllPlayers();
            d(r, "gvideo-container"), o.insertBefore(v('<div class="gvideo-wrapper"></div>'), o.firstChild);
            var c = e.querySelector(".gvideo-wrapper");
            b(this.settings.plyr.css, "Plyr");
            var u = t.href,
                h = null == t ? void 0 : t.videoProvider,
                p = !1;
            (o.style.maxWidth = t.width),
                b(this.settings.plyr.js, "Plyr", function () {
                    if (
                        (!h && u.match(/vimeo\.com\/([0-9]*)/) && (h = "vimeo"),
                        !h &&
                            (u.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || u.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || u.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) &&
                            (h = "youtube"),
                        "local" === h || !h)
                    ) {
                        h = "local";
                        var r = '<video id="' + a + '" ';
                        (r += 'style="background:#000; max-width: '.concat(t.width, ';" ')),
                            (r += 'preload="metadata" '),
                            (r += 'x-webkit-airplay="allow" '),
                            (r += "playsinline "),
                            (r += "controls "),
                            (r += 'class="gvideo-local">'),
                            (r += '<source src="'.concat(u, '">')),
                            (p = v((r += "</video>")));
                    }
                    var o = p || v('<div id="'.concat(a, '" data-plyr-provider="').concat(h, '" data-plyr-embed-id="').concat(u, '"></div>'));
                    d(c, "".concat(h, "-video gvideo")), c.appendChild(o), c.setAttribute("data-id", a), c.setAttribute("data-index", i);
                    var f = A(n.settings.plyr, "config") ? n.settings.plyr.config : {},
                        m = new Plyr("#" + a, f);
                    m.on("ready", function (e) {
                        (l[a] = e.detail.plyr), _(s) && s();
                    }),
                        y(
                            function () {
                                return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready;
                            },
                            function () {
                                n.resize(e);
                            }
                        ),
                        m.on("enterfullscreen", q),
                        m.on("exitfullscreen", q);
                });
        }
        function q(e) {
            var t = h(e.target, ".gslide-media");
            "enterfullscreen" === e.type && d(t, "fullscreen"), "exitfullscreen" === e.type && c(t, "fullscreen");
        }
        function Y(e, t, i, s) {
            var n,
                r = this,
                a = e.querySelector(".gslide-media"),
                o = !(!A(t, "href") || !t.href) && t.href.split("#").pop().trim(),
                c = !(!A(t, "content") || !t.content) && t.content;
            if (c && (x(c) && (n = v('<div class="ginlined-content">'.concat(c, "</div>"))), E(c))) {
                "none" == c.style.display && (c.style.display = "block");
                var u = document.createElement("div");
                (u.className = "ginlined-content"), u.appendChild(c), (n = u);
            }
            if (o) {
                var h = document.getElementById(o);
                if (!h) return !1;
                var p = h.cloneNode(!0);
                (p.style.height = t.height), (p.style.maxWidth = t.width), d(p, "ginlined-content"), (n = p);
            }
            if (!n) return console.error("Unable to append inline slide content", t), !1;
            (a.style.height = t.height),
                (a.style.width = t.width),
                a.appendChild(n),
                (this.events["inlineclose" + o] = l("click", {
                    onElement: a.querySelectorAll(".gtrigger-close"),
                    withCallback: function (e) {
                        e.preventDefault(), r.close();
                    },
                })),
                _(s) && s();
        }
        function R(e, t, i, s) {
            var n,
                r,
                a,
                o,
                l,
                c,
                u = e.querySelector(".gslide-media"),
                h =
                    ((r = (n = { url: t.href, callback: s }).url),
                    (a = n.allow),
                    (o = n.callback),
                    (l = n.appendTo),
                    ((c = document.createElement("iframe")).className = "vimeo-video gvideo"),
                    (c.src = r),
                    (c.style.width = "100%"),
                    (c.style.height = "100%"),
                    a && c.setAttribute("allow", a),
                    (c.onload = function () {
                        (c.onload = null), d(c, "node-ready"), _(o) && o();
                    }),
                    l && l.appendChild(c),
                    c);
            (u.parentNode.style.maxWidth = t.width), (u.parentNode.style.height = t.height), u.appendChild(h);
        }
        var X = (function () {
                function e() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t(this, e),
                        (this.defaults = {
                            href: "",
                            sizes: "",
                            srcset: "",
                            title: "",
                            type: "",
                            videoProvider: "",
                            description: "",
                            alt: "",
                            descPosition: "bottom",
                            effect: "",
                            width: "",
                            height: "",
                            content: !1,
                            zoomable: !0,
                            draggable: !0,
                        }),
                        T(i) && (this.defaults = r(this.defaults, i));
                }
                return (
                    s(e, [
                        {
                            key: "sourceType",
                            value: function (e) {
                                var t = e;
                                return null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)
                                    ? "image"
                                    : e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) ||
                                      e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                                      e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) ||
                                      e.match(/vimeo\.com\/([0-9]*)/) ||
                                      null !== e.match(/\.(mp4|ogg|webm|mov)/)
                                    ? "video"
                                    : null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)
                                    ? "audio"
                                    : e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()
                                    ? "inline"
                                    : e.indexOf("goajax=true") > -1
                                    ? "ajax"
                                    : "external";
                            },
                        },
                        {
                            key: "parseConfig",
                            value: function (e, t) {
                                var i,
                                    s = this,
                                    n = r({ descPosition: t.descPosition }, this.defaults);
                                if (T(e) && !E(e)) {
                                    A(e, "type") || (A(e, "content") && e.content ? (e.type = "inline") : A(e, "href") && (e.type = this.sourceType(e.href)));
                                    var o = r(n, e);
                                    return this.setSize(o, t), o;
                                }
                                var l = "",
                                    d = e.getAttribute("data-glightbox"),
                                    c = e.nodeName.toLowerCase();
                                if (
                                    ("a" === c && (l = e.href),
                                    "img" === c && ((l = e.src), (n.alt = e.alt)),
                                    (n.href = l),
                                    a(n, function (i, r) {
                                        A(t, r) && "width" !== r && (n[r] = t[r]);
                                        var a = e.dataset[r];
                                        k(a) || (n[r] = s.sanitizeValue(a));
                                    }),
                                    n.content && (n.type = "inline"),
                                    !n.type && l && (n.type = this.sourceType(l)),
                                    k(d))
                                ) {
                                    if (!n.title && "a" == c) {
                                        var u = e.title;
                                        k(u) || "" === u || (n.title = u);
                                    }
                                    if (!n.title && "img" == c) {
                                        var h = e.alt;
                                        k(h) || "" === h || (n.title = h);
                                    }
                                } else {
                                    var p = [];
                                    a(n, function (e, t) {
                                        p.push(";\\s?" + t);
                                    }),
                                        (p = p.join("\\s?:|")),
                                        "" !== d.trim() &&
                                            a(n, function (e, t) {
                                                var i = RegExp("s?" + t + "s?:s?(.*?)(" + p + "s?:|$)"),
                                                    r = d.match(i);
                                                if (r && r.length && r[1]) {
                                                    var a = r[1].trim().replace(/;\s*$/, "");
                                                    n[t] = s.sanitizeValue(a);
                                                }
                                            });
                                }
                                if (n.description && "." === n.description.substring(0, 1)) {
                                    try {
                                        i = document.querySelector(n.description).innerHTML;
                                    } catch (f) {
                                        if (!(f instanceof DOMException)) throw f;
                                    }
                                    i && (n.description = i);
                                }
                                if (!n.description) {
                                    var m = e.querySelector(".glightbox-desc");
                                    m && (n.description = m.innerHTML);
                                }
                                return this.setSize(n, t, e), (this.slideConfig = n), n;
                            },
                        },
                        {
                            key: "setSize",
                            value: function (e, t) {
                                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                    s = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
                                    n = this.checkSize(t.height);
                                return (
                                    (e.width = A(e, "width") && "" !== e.width ? this.checkSize(e.width) : s),
                                    (e.height = A(e, "height") && "" !== e.height ? this.checkSize(e.height) : n),
                                    i && "image" == e.type && ((e._hasCustomWidth = !!i.dataset.width), (e._hasCustomHeight = !!i.dataset.height)),
                                    e
                                );
                            },
                        },
                        {
                            key: "checkSize",
                            value: function (e) {
                                return P(e) ? "".concat(e, "px") : e;
                            },
                        },
                        {
                            key: "sanitizeValue",
                            value: function (e) {
                                return "true" !== e && "false" !== e ? e : "true" === e;
                            },
                        },
                    ]),
                    e
                );
            })(),
            j = (function () {
                function e(i, s, n) {
                    t(this, e), (this.element = i), (this.instance = s), (this.index = n);
                }
                return (
                    s(e, [
                        {
                            key: "setContent",
                            value: function () {
                                var e,
                                    t,
                                    i,
                                    s,
                                    n,
                                    r,
                                    a = this,
                                    o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (u(o, "loaded")) return !1;
                                var c = this.instance.settings,
                                    h = this.slideConfig,
                                    p = w();
                                _(c.beforeSlideLoad) && c.beforeSlideLoad({ index: this.index, slide: o, player: !1 });
                                var f = h.type,
                                    m = h.descPosition,
                                    g = o.querySelector(".gslide-media"),
                                    v = o.querySelector(".gslide-title"),
                                    $ = o.querySelector(".gslide-desc"),
                                    y = o.querySelector(".gdesc-inner"),
                                    b = l,
                                    x = "gSlideTitle_" + this.index,
                                    E = "gSlideDesc_" + this.index;
                                if (
                                    (_(c.afterSlideLoad) &&
                                        (b = function () {
                                            _(l) && l(), c.afterSlideLoad({ index: a.index, slide: o, player: a.instance.getSlidePlayerInstance(a.index) });
                                        }),
                                    "" == h.title && "" == h.description
                                        ? y && y.parentNode.parentNode.removeChild(y.parentNode)
                                        : (v && "" !== h.title ? ((v.id = x), (v.innerHTML = h.title)) : v.parentNode.removeChild(v),
                                          $ && "" !== h.description
                                              ? (($.id = E),
                                                p && c.moreLength > 0
                                                    ? ((h.smallDescription = this.slideShortDesc(h.description, c.moreLength, c.moreText)), ($.innerHTML = h.smallDescription), this.descriptionEvents($, h))
                                                    : ($.innerHTML = h.description))
                                              : $.parentNode.removeChild($),
                                          d(g.parentNode, "desc-".concat(m)),
                                          d(y.parentNode, "description-".concat(m))),
                                    d(g, "gslide-".concat(f)),
                                    d(o, "loaded"),
                                    "video" !== f)
                                ) {
                                    if ("external" !== f)
                                        return "inline" === f
                                            ? (Y.apply(this.instance, [o, h, this.index, b]),
                                              void (h.draggable && new W({ dragEl: o.querySelector(".gslide-inline"), toleranceX: c.dragToleranceX, toleranceY: c.dragToleranceY, slide: o, instance: this.instance })))
                                            : void ("image" !== f
                                                  ? _(b) && b()
                                                  : ((e = o),
                                                    (t = h),
                                                    (i = this.index),
                                                    (s = function () {
                                                        var e = o.querySelector("img");
                                                        h.draggable && new W({ dragEl: e, toleranceX: c.dragToleranceX, toleranceY: c.dragToleranceY, slide: o, instance: a.instance }),
                                                            h.zoomable &&
                                                                e.naturalWidth > e.offsetWidth &&
                                                                (d(e, "zoomable"),
                                                                new H(e, o, function () {
                                                                    a.instance.resize();
                                                                })),
                                                            _(b) && b();
                                                    }),
                                                    (n = e.querySelector(".gslide-media")),
                                                    void ((r = new Image()).addEventListener(
                                                        "load",
                                                        function () {
                                                            _(s) && s();
                                                        },
                                                        !1
                                                    ),
                                                    (r.src = t.href),
                                                    "" != t.sizes && "" != t.srcset && ((r.sizes = t.sizes), (r.srcset = t.srcset)),
                                                    (r.alt = ""),
                                                    k(t.alt) || "" === t.alt || (r.alt = t.alt),
                                                    "" !== t.title && r.setAttribute("aria-labelledby", "gSlideTitle_" + i),
                                                    "" !== t.description && r.setAttribute("aria-describedby", "gSlideDesc_" + i),
                                                    t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (r.style.width = t.width),
                                                    t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (r.style.height = t.height),
                                                    n.insertBefore(r, n.firstChild))));
                                    R.apply(this, [o, h, this.index, b]);
                                } else B.apply(this.instance, [o, h, this.index, b]);
                            },
                        },
                        {
                            key: "slideShortDesc",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    s = document.createElement("div");
                                if (((s.innerHTML = e), (e = s.innerText.trim()).length <= t)) return e;
                                var n = e.substr(0, t - 1);
                                return i ? ((s = null), n + '... <a href="#" class="desc-more">' + i + "</a>") : n;
                            },
                        },
                        {
                            key: "descriptionEvents",
                            value: function (e, t) {
                                var i = this,
                                    s = e.querySelector(".desc-more");
                                if (!s) return !1;
                                l("click", {
                                    onElement: s,
                                    withCallback: function (e, s) {
                                        e.preventDefault();
                                        var n = document.body,
                                            r = h(s, ".gslide-desc");
                                        if (!r) return !1;
                                        (r.innerHTML = t.description), d(n, "gdesc-open");
                                        var a = l("click", {
                                            onElement: [n, h(r, ".gslide-description")],
                                            withCallback: function (e, s) {
                                                "a" !== e.target.nodeName.toLowerCase() &&
                                                    (c(n, "gdesc-open"),
                                                    d(n, "gdesc-closed"),
                                                    (r.innerHTML = t.smallDescription),
                                                    i.descriptionEvents(r, t),
                                                    setTimeout(function () {
                                                        c(n, "gdesc-closed");
                                                    }, 400),
                                                    a.destroy());
                                            },
                                        });
                                    },
                                });
                            },
                        },
                        {
                            key: "create",
                            value: function () {
                                return v(this.instance.settings.slideHTML);
                            },
                        },
                        {
                            key: "getConfig",
                            value: function () {
                                E(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                                var e = new X(this.instance.settings.slideExtraAttributes);
                                return (this.slideConfig = e.parseConfig(this.element, this.instance.settings)), this.slideConfig;
                            },
                        },
                    ]),
                    e
                );
            })(),
            F = w(),
            G = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
            V = document.getElementsByTagName("html")[0],
            U = {
                selector: ".glightbox",
                elements: null,
                skin: "clean",
                theme: "clean",
                closeButton: !0,
                startAt: null,
                autoplayVideos: !0,
                autofocusVideos: !0,
                descPosition: "bottom",
                width: "900px",
                height: "506px",
                videosWidth: "960px",
                beforeSlideChange: null,
                afterSlideChange: null,
                beforeSlideLoad: null,
                afterSlideLoad: null,
                slideInserted: null,
                slideRemoved: null,
                slideExtraAttributes: null,
                onOpen: null,
                onClose: null,
                loop: !1,
                zoomable: !0,
                draggable: !0,
                dragAutoSnap: !1,
                dragToleranceX: 40,
                dragToleranceY: 65,
                preload: !0,
                oneSlidePerOpen: !1,
                touchNavigation: !0,
                touchFollowAxis: !0,
                keyboardNavigation: !0,
                closeOnOutsideClick: !0,
                plugins: !1,
                plyr: {
                    css: "https://cdn.plyr.io/3.6.12/plyr.css",
                    js: "https://cdn.plyr.io/3.6.12/plyr.js",
                    config: { ratio: "16:9", fullscreen: { enabled: !0, iosNative: !0 }, youtube: { noCookie: !0, rel: 0, showinfo: 0, iv_load_policy: 3 }, vimeo: { byline: !1, portrait: !1, title: !1, transparent: !1 } },
                },
                openEffect: "zoom",
                closeEffect: "zoom",
                slideEffect: "slide",
                moreText: "See more",
                moreLength: 60,
                cssEfects: {
                    fade: { in: "fadeIn", out: "fadeOut" },
                    zoom: { in: "zoomIn", out: "zoomOut" },
                    slide: { in: "slideInRight", out: "slideOutLeft" },
                    slideBack: { in: "slideInLeft", out: "slideOutRight" },
                    none: { in: "none", out: "none" },
                },
                svg: {
                    close:
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                    next:
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                    prev:
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>',
                },
                slideHTML:
                    '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
                lightboxHTML:
                    '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>',
            },
            Q = (function () {
                function e() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t(this, e), (this.customOptions = i), (this.settings = r(U, i)), (this.effectsClasses = this.getAnimationClasses()), (this.videoPlayers = {}), (this.apiEvents = []), (this.fullElementsList = !1);
                }
                return (
                    s(e, [
                        {
                            key: "init",
                            value: function () {
                                var e = this,
                                    t = this.getSelector();
                                t &&
                                    (this.baseEvents = l("click", {
                                        onElement: t,
                                        withCallback: function (t, i) {
                                            t.preventDefault(), e.open(i);
                                        },
                                    })),
                                    (this.elements = this.getElements());
                            },
                        },
                        {
                            key: "open",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                if (0 === this.elements.length) return !1;
                                (this.activeSlide = null), (this.prevActiveSlideIndex = null), (this.prevActiveSlide = null);
                                var i = P(t) ? t : this.settings.startAt;
                                if (E(e)) {
                                    var s = e.getAttribute("data-gallery");
                                    s && ((this.fullElementsList = this.elements), (this.elements = this.getGalleryElements(this.elements, s))), k(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
                                }
                                P(i) || (i = 0), this.build(), p(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                                var n = document.body,
                                    r = window.innerWidth - document.documentElement.clientWidth;
                                if (r > 0) {
                                    var a = document.createElement("style");
                                    (a.type = "text/css"), (a.className = "gcss-styles"), (a.innerText = ".gscrollbar-fixer {margin-right: ".concat(r, "px}")), document.head.appendChild(a), d(n, "gscrollbar-fixer");
                                }
                                d(n, "glightbox-open"),
                                    d(V, "glightbox-open"),
                                    F && (d(document.body, "glightbox-mobile"), (this.settings.slideEffect = "slide")),
                                    this.showSlide(i, !0),
                                    1 === this.elements.length
                                        ? (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden"))
                                        : (c(this.prevButton, "glightbox-button-hidden"), c(this.nextButton, "glightbox-button-hidden")),
                                    (this.lightboxOpen = !0),
                                    this.trigger("open"),
                                    _(this.settings.onOpen) && this.settings.onOpen(),
                                    G &&
                                        this.settings.touchNavigation &&
                                        (function e(t) {
                                            if (t.events.hasOwnProperty("touch")) return !1;
                                            var i,
                                                s,
                                                n,
                                                r = $(),
                                                a = r.width,
                                                o = r.height,
                                                l = !1,
                                                p = null,
                                                m = null,
                                                g = null,
                                                v = !1,
                                                y = 1,
                                                b = 1,
                                                w = !1,
                                                _ = !1,
                                                x = null,
                                                E = null,
                                                C = null,
                                                S = null,
                                                T = 0,
                                                k = 0,
                                                A = !1,
                                                L = !1,
                                                P = {},
                                                z = {},
                                                I = 0,
                                                O = 0,
                                                M = document.getElementById("glightbox-slider"),
                                                H = document.querySelector(".goverlay"),
                                                W = new D(M, {
                                                    touchStart: function (e) {
                                                        (l = !0),
                                                            (u(e.targetTouches[0].target, "ginner-container") || h(e.targetTouches[0].target, ".gslide-desc") || "a" == e.targetTouches[0].target.nodeName.toLowerCase()) && (l = !1),
                                                            h(e.targetTouches[0].target, ".gslide-inline") && !u(e.targetTouches[0].target.parentNode, "gslide-inline") && (l = !1),
                                                            !l ||
                                                                ((z = e.targetTouches[0]),
                                                                (P.pageX = e.targetTouches[0].pageX),
                                                                (P.pageY = e.targetTouches[0].pageY),
                                                                (I = e.targetTouches[0].clientX),
                                                                (O = e.targetTouches[0].clientY),
                                                                (m = (p = t.activeSlide).querySelector(".gslide-media")),
                                                                (n = p.querySelector(".gslide-inline")),
                                                                (g = null),
                                                                u(m, "gslide-image") && (g = m.querySelector("img")),
                                                                (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (m = p.querySelector(".ginner-container")),
                                                                c(H, "greset"),
                                                                (e.pageX > 20 && e.pageX < window.innerWidth - 20) || e.preventDefault());
                                                    },
                                                    touchMove: function (e) {
                                                        if (l && ((z = e.targetTouches[0]), !w && !_)) {
                                                            var r;
                                                            if (n && n.offsetHeight > o && 13 >= Math.abs(P.pageX - z.pageX)) return !1;
                                                            if (
                                                                ((v = !0),
                                                                Math.abs(I - e.targetTouches[0].clientX) > Math.abs(O - e.targetTouches[0].clientY) ? ((A = !1), (L = !0)) : ((L = !1), (A = !0)),
                                                                (T = (100 * (i = z.pageX - P.pageX)) / a),
                                                                (k = (100 * (s = z.pageY - P.pageY)) / o),
                                                                A && g && ((r = 1 - Math.abs(s) / o), (H.style.opacity = r), t.settings.touchFollowAxis && (T = 0)),
                                                                L && ((r = 1 - Math.abs(i) / a), (m.style.opacity = r), t.settings.touchFollowAxis && (k = 0)),
                                                                !g)
                                                            )
                                                                return f(m, "translate3d(".concat(T, "%, 0, 0)"));
                                                            f(m, "translate3d(".concat(T, "%, ").concat(k, "%, 0)"));
                                                        }
                                                    },
                                                    touchEnd: function () {
                                                        if (l) {
                                                            if (((v = !1), _ || w)) return (C = x), void (S = E);
                                                            var e = Math.abs(parseInt(k)),
                                                                i = Math.abs(parseInt(T));
                                                            if (!(e > 29 && g)) return e < 29 && i < 25 ? (d(H, "greset"), (H.style.opacity = 1), N(m)) : void 0;
                                                            t.close();
                                                        }
                                                    },
                                                    multipointEnd: function () {
                                                        setTimeout(function () {
                                                            w = !1;
                                                        }, 50);
                                                    },
                                                    multipointStart: function () {
                                                        (w = !0), (y = b || 1);
                                                    },
                                                    pinch: function (e) {
                                                        if (!g || v) return !1;
                                                        (w = !0), (g.scaleX = g.scaleY = y * e.zoom);
                                                        var t = y * e.zoom;
                                                        if (((_ = !0), t <= 1)) return (_ = !1), (t = 1), (S = null), (C = null), (x = null), (E = null), void g.setAttribute("style", "");
                                                        t > 4.5 && (t = 4.5), (g.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)")), (b = t);
                                                    },
                                                    pressMove: function (e) {
                                                        if (_ && !w) {
                                                            var t = z.pageX - P.pageX,
                                                                i = z.pageY - P.pageY;
                                                            C && (t += C), S && (i += S), (x = t), (E = i);
                                                            var s = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                                                            b && (s += " scale3d(".concat(b, ", ").concat(b, ", 1)")), f(g, s);
                                                        }
                                                    },
                                                    swipe: function (e) {
                                                        if (!_) {
                                                            if (w) w = !1;
                                                            else {
                                                                if ("Left" == e.direction) {
                                                                    if (t.index == t.elements.length - 1) return N(m);
                                                                    t.nextSlide();
                                                                }
                                                                if ("Right" == e.direction) {
                                                                    if (0 == t.index) return N(m);
                                                                    t.prevSlide();
                                                                }
                                                            }
                                                        }
                                                    },
                                                });
                                            t.events.touch = W;
                                        })(this),
                                    this.settings.keyboardNavigation &&
                                        (function e(t) {
                                            if (t.events.hasOwnProperty("keyboard")) return !1;
                                            t.events.keyboard = l("keydown", {
                                                onElement: window,
                                                withCallback: function (e, i) {
                                                    var s = (e = e || window.event).keyCode;
                                                    if (9 == s) {
                                                        var n = document.querySelector(".gbtn.focused");
                                                        if (!n) {
                                                            var r = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                                                            if ("input" == r || "textarea" == r || "button" == r) return;
                                                        }
                                                        e.preventDefault();
                                                        var a = document.querySelectorAll(".gbtn[data-taborder]");
                                                        if (!a || a.length <= 0) return;
                                                        if (!n) {
                                                            var o = z();
                                                            return void (o && (o.focus(), d(o, "focused")));
                                                        }
                                                        var l = z(n.getAttribute("data-taborder"));
                                                        c(n, "focused"), l && (l.focus(), d(l, "focused"));
                                                    }
                                                    39 == s && t.nextSlide(), 37 == s && t.prevSlide(), 27 == s && t.close();
                                                },
                                            });
                                        })(this);
                            },
                        },
                        {
                            key: "openAt",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                this.open(null, e);
                            },
                        },
                        {
                            key: "showSlide",
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                m(this.loader), (this.index = parseInt(t));
                                var s = this.slidesContainer.querySelector(".current");
                                s && c(s, "current"), this.slideAnimateOut();
                                var n = this.slidesContainer.querySelectorAll(".gslide")[t];
                                if (u(n, "loaded")) this.slideAnimateIn(n, i), g(this.loader);
                                else {
                                    m(this.loader);
                                    var r = this.elements[t],
                                        a = { index: this.index, slide: n, slideNode: n, slideConfig: r.slideConfig, slideIndex: this.index, trigger: r.node, player: null };
                                    this.trigger("slide_before_load", a),
                                        r.instance.setContent(n, function () {
                                            g(e.loader), e.resize(), e.slideAnimateIn(n, i), e.trigger("slide_after_load", a);
                                        });
                                }
                                (this.slideDescription = n.querySelector(".gslide-description")),
                                    (this.slideDescriptionContained = this.slideDescription && u(this.slideDescription.parentNode, "gslide-media")),
                                    this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)),
                                    this.updateNavigationClasses(),
                                    (this.activeSlide = n);
                            },
                        },
                        {
                            key: "preloadSlide",
                            value: function (e) {
                                var t = this;
                                if (e < 0 || e > this.elements.length - 1 || k(this.elements[e])) return !1;
                                var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                                if (u(i, "loaded")) return !1;
                                var s = this.elements[e],
                                    n = s.type,
                                    r = { index: e, slide: i, slideNode: i, slideConfig: s.slideConfig, slideIndex: e, trigger: s.node, player: null };
                                this.trigger("slide_before_load", r),
                                    "video" === n || "external" === n
                                        ? setTimeout(function () {
                                              s.instance.setContent(i, function () {
                                                  t.trigger("slide_after_load", r);
                                              });
                                          }, 200)
                                        : s.instance.setContent(i, function () {
                                              t.trigger("slide_after_load", r);
                                          });
                            },
                        },
                        {
                            key: "prevSlide",
                            value: function () {
                                this.goToSlide(this.index - 1);
                            },
                        },
                        {
                            key: "nextSlide",
                            value: function () {
                                this.goToSlide(this.index + 1);
                            },
                        },
                        {
                            key: "goToSlide",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (((this.prevActiveSlide = this.activeSlide), (this.prevActiveSlideIndex = this.index), !this.loop() && (e < 0 || e > this.elements.length - 1))) return !1;
                                e < 0 ? (e = this.elements.length - 1) : e >= this.elements.length && (e = 0), this.showSlide(e);
                            },
                        },
                        {
                            key: "insertSlide",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                                t < 0 && (t = this.elements.length);
                                var i = new j(e, this, t),
                                    s = i.getConfig(),
                                    n = r({}, s),
                                    a = i.create(),
                                    o = this.elements.length - 1;
                                (n.index = t), (n.node = !1), (n.instance = i), (n.slideConfig = s), this.elements.splice(t, 0, n);
                                var l = null,
                                    d = null;
                                if (this.slidesContainer) {
                                    if (t > o) this.slidesContainer.appendChild(a);
                                    else {
                                        var c = this.slidesContainer.querySelectorAll(".gslide")[t];
                                        this.slidesContainer.insertBefore(a, c);
                                    }
                                    ((this.settings.preload && 0 == this.index && 0 == t) || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t),
                                        0 === this.index && 0 === t && (this.index = 1),
                                        this.updateNavigationClasses(),
                                        (l = this.slidesContainer.querySelectorAll(".gslide")[t]),
                                        (d = this.getSlidePlayerInstance(t)),
                                        (n.slideNode = l);
                                }
                                this.trigger("slide_inserted", { index: t, slide: l, slideNode: l, slideConfig: s, slideIndex: t, trigger: null, player: d }),
                                    _(this.settings.slideInserted) && this.settings.slideInserted({ index: t, slide: l, player: d });
                            },
                        },
                        {
                            key: "removeSlide",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                                if (e < 0 || e > this.elements.length - 1) return !1;
                                var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                                t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)),
                                    this.elements.splice(e, 1),
                                    this.trigger("slide_removed", e),
                                    _(this.settings.slideRemoved) && this.settings.slideRemoved(e);
                            },
                        },
                        {
                            key: "slideAnimateIn",
                            value: function (e, t) {
                                var i = this,
                                    s = e.querySelector(".gslide-media"),
                                    n = e.querySelector(".gslide-description"),
                                    r = {
                                        index: this.prevActiveSlideIndex,
                                        slide: this.prevActiveSlide,
                                        slideNode: this.prevActiveSlide,
                                        slideIndex: this.prevActiveSlide,
                                        slideConfig: k(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                                        trigger: k(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex),
                                    },
                                    a = {
                                        index: this.index,
                                        slide: this.activeSlide,
                                        slideNode: this.activeSlide,
                                        slideConfig: this.elements[this.index].slideConfig,
                                        slideIndex: this.index,
                                        trigger: this.elements[this.index].node,
                                        player: this.getSlidePlayerInstance(this.index),
                                    };
                                if ((s.offsetWidth > 0 && n && (g(n), (n.style.display = "")), c(e, this.effectsClasses), t))
                                    p(e, this.settings.cssEfects[this.settings.openEffect].in, function () {
                                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", { prev: r, current: a }), _(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [r, a]);
                                    });
                                else {
                                    var o = this.settings.slideEffect,
                                        l = "none" !== o ? this.settings.cssEfects[o].in : o;
                                    this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (l = this.settings.cssEfects.slideBack.in),
                                        p(e, l, function () {
                                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", { prev: r, current: a }), _(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [r, a]);
                                        });
                                }
                                setTimeout(function () {
                                    i.resize(e);
                                }, 100),
                                    d(e, "current");
                            },
                        },
                        {
                            key: "slideAnimateOut",
                            value: function () {
                                if (!this.prevActiveSlide) return !1;
                                var e = this.prevActiveSlide;
                                c(e, this.effectsClasses), d(e, "prev");
                                var t = this.settings.slideEffect,
                                    i = "none" !== t ? this.settings.cssEfects[t].out : t;
                                this.slidePlayerPause(e),
                                    this.trigger("slide_before_change", {
                                        prev: {
                                            index: this.prevActiveSlideIndex,
                                            slide: this.prevActiveSlide,
                                            slideNode: this.prevActiveSlide,
                                            slideIndex: this.prevActiveSlideIndex,
                                            slideConfig: k(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                                            trigger: k(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex),
                                        },
                                        current: {
                                            index: this.index,
                                            slide: this.activeSlide,
                                            slideNode: this.activeSlide,
                                            slideIndex: this.index,
                                            slideConfig: this.elements[this.index].slideConfig,
                                            trigger: this.elements[this.index].node,
                                            player: this.getSlidePlayerInstance(this.index),
                                        },
                                    }),
                                    _(this.settings.beforeSlideChange) &&
                                        this.settings.beforeSlideChange.apply(this, [
                                            { index: this.prevActiveSlideIndex, slide: this.prevActiveSlide, player: this.getSlidePlayerInstance(this.prevActiveSlideIndex) },
                                            { index: this.index, slide: this.activeSlide, player: this.getSlidePlayerInstance(this.index) },
                                        ]),
                                    this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out),
                                    p(e, i, function () {
                                        var t = e.querySelector(".ginner-container"),
                                            i = e.querySelector(".gslide-media"),
                                            s = e.querySelector(".gslide-description");
                                        (t.style.transform = ""), (i.style.transform = ""), c(i, "greset"), (i.style.opacity = ""), s && (s.style.opacity = ""), c(e, "prev");
                                    });
                            },
                        },
                        {
                            key: "getAllPlayers",
                            value: function () {
                                return this.videoPlayers;
                            },
                        },
                        {
                            key: "getSlidePlayerInstance",
                            value: function (e) {
                                var t = "gvideo" + e,
                                    i = this.getAllPlayers();
                                return !(!A(i, t) || !i[t]) && i[t];
                            },
                        },
                        {
                            key: "stopSlideVideo",
                            value: function (e) {
                                if (E(e)) {
                                    var t = e.querySelector(".gvideo-wrapper");
                                    t && (e = t.getAttribute("data-index"));
                                }
                                console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                                var i = this.getSlidePlayerInstance(e);
                                i && i.playing && i.pause();
                            },
                        },
                        {
                            key: "slidePlayerPause",
                            value: function (e) {
                                if (E(e)) {
                                    var t = e.querySelector(".gvideo-wrapper");
                                    t && (e = t.getAttribute("data-index"));
                                }
                                var i = this.getSlidePlayerInstance(e);
                                i && i.playing && i.pause();
                            },
                        },
                        {
                            key: "playSlideVideo",
                            value: function (e) {
                                if (E(e)) {
                                    var t = e.querySelector(".gvideo-wrapper");
                                    t && (e = t.getAttribute("data-index"));
                                }
                                console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                                var i = this.getSlidePlayerInstance(e);
                                i && !i.playing && i.play();
                            },
                        },
                        {
                            key: "slidePlayerPlay",
                            value: function (e) {
                                var t;
                                if (!F || (null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted)) {
                                    if (E(e)) {
                                        var i = e.querySelector(".gvideo-wrapper");
                                        i && (e = i.getAttribute("data-index"));
                                    }
                                    var s = this.getSlidePlayerInstance(e);
                                    s && !s.playing && (s.play(), this.settings.autofocusVideos && s.elements.container.focus());
                                }
                            },
                        },
                        {
                            key: "setElements",
                            value: function (e) {
                                var t = this;
                                this.settings.elements = !1;
                                var i = [];
                                e &&
                                    e.length &&
                                    a(e, function (e, s) {
                                        var n = new j(e, t, s),
                                            a = n.getConfig(),
                                            o = r({}, a);
                                        (o.slideConfig = a), (o.instance = n), (o.index = s), i.push(o);
                                    }),
                                    (this.elements = i),
                                    this.lightboxOpen &&
                                        ((this.slidesContainer.innerHTML = ""),
                                        this.elements.length &&
                                            (a(this.elements, function () {
                                                var e = v(t.settings.slideHTML);
                                                t.slidesContainer.appendChild(e);
                                            }),
                                            this.showSlide(0, !0)));
                            },
                        },
                        {
                            key: "getElementIndex",
                            value: function (e) {
                                var t = !1;
                                return (
                                    a(this.elements, function (i, s) {
                                        if (A(i, "node") && i.node == e) return (t = s), !0;
                                    }),
                                    t
                                );
                            },
                        },
                        {
                            key: "getElements",
                            value: function () {
                                var e = this,
                                    t = [];
                                (this.elements = this.elements ? this.elements : []),
                                    !k(this.settings.elements) &&
                                        C(this.settings.elements) &&
                                        this.settings.elements.length &&
                                        a(this.settings.elements, function (i, s) {
                                            var n = new j(i, e, s),
                                                a = n.getConfig(),
                                                o = r({}, a);
                                            (o.node = !1), (o.index = s), (o.instance = n), (o.slideConfig = a), t.push(o);
                                        });
                                var i = !1;
                                return (
                                    this.getSelector() && (i = document.querySelectorAll(this.getSelector())),
                                    i &&
                                        a(i, function (i, s) {
                                            var n = new j(i, e, s),
                                                a = n.getConfig(),
                                                o = r({}, a);
                                            (o.node = i), (o.index = s), (o.instance = n), (o.slideConfig = a), (o.gallery = i.getAttribute("data-gallery")), t.push(o);
                                        }),
                                    t
                                );
                            },
                        },
                        {
                            key: "getGalleryElements",
                            value: function (e, t) {
                                return e.filter(function (e) {
                                    return e.gallery == t;
                                });
                            },
                        },
                        {
                            key: "getSelector",
                            value: function () {
                                return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
                            },
                        },
                        {
                            key: "getActiveSlide",
                            value: function () {
                                return this.slidesContainer.querySelectorAll(".gslide")[this.index];
                            },
                        },
                        {
                            key: "getActiveSlideIndex",
                            value: function () {
                                return this.index;
                            },
                        },
                        {
                            key: "getAnimationClasses",
                            value: function () {
                                var e = [];
                                for (var t in this.settings.cssEfects)
                                    if (this.settings.cssEfects.hasOwnProperty(t)) {
                                        var i = this.settings.cssEfects[t];
                                        e.push("g".concat(i.in)), e.push("g".concat(i.out));
                                    }
                                return e.join(" ");
                            },
                        },
                        {
                            key: "build",
                            value: function () {
                                var e = this;
                                if (this.built) return !1;
                                var t = document.body.childNodes,
                                    i = [];
                                a(t, function (e) {
                                    e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"));
                                });
                                var s = A(this.settings.svg, "next") ? this.settings.svg.next : "",
                                    n = A(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                                    r = A(this.settings.svg, "close") ? this.settings.svg.close : "",
                                    o = this.settings.lightboxHTML;
                                (o = v((o = (o = (o = o.replace(/{nextSVG}/g, s)).replace(/{prevSVG}/g, n)).replace(/{closeSVG}/g, r)))), document.body.appendChild(o);
                                var c = document.getElementById("glightbox-body");
                                this.modal = c;
                                var p = c.querySelector(".gclose");
                                (this.prevButton = c.querySelector(".gprev")),
                                    (this.nextButton = c.querySelector(".gnext")),
                                    (this.overlay = c.querySelector(".goverlay")),
                                    (this.loader = c.querySelector(".gloader")),
                                    (this.slidesContainer = document.getElementById("glightbox-slider")),
                                    (this.bodyHiddenChildElms = i),
                                    (this.events = {}),
                                    d(this.modal, "glightbox-" + this.settings.skin),
                                    this.settings.closeButton &&
                                        p &&
                                        (this.events.close = l("click", {
                                            onElement: p,
                                            withCallback: function (t, i) {
                                                t.preventDefault(), e.close();
                                            },
                                        })),
                                    p && !this.settings.closeButton && p.parentNode.removeChild(p),
                                    this.nextButton &&
                                        (this.events.next = l("click", {
                                            onElement: this.nextButton,
                                            withCallback: function (t, i) {
                                                t.preventDefault(), e.nextSlide();
                                            },
                                        })),
                                    this.prevButton &&
                                        (this.events.prev = l("click", {
                                            onElement: this.prevButton,
                                            withCallback: function (t, i) {
                                                t.preventDefault(), e.prevSlide();
                                            },
                                        })),
                                    this.settings.closeOnOutsideClick &&
                                        (this.events.outClose = l("click", {
                                            onElement: c,
                                            withCallback: function (t, i) {
                                                e.preventOutsideClick || u(document.body, "glightbox-mobile") || h(t.target, ".ginner-container") || h(t.target, ".gbtn") || u(t.target, "gnext") || u(t.target, "gprev") || e.close();
                                            },
                                        })),
                                    a(this.elements, function (t, i) {
                                        e.slidesContainer.appendChild(t.instance.create()), (t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]);
                                    }),
                                    G && d(document.body, "glightbox-touch"),
                                    (this.events.resize = l("resize", {
                                        onElement: window,
                                        withCallback: function () {
                                            e.resize();
                                        },
                                    })),
                                    (this.built = !0);
                            },
                        },
                        {
                            key: "resize",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                if ((e = e || this.activeSlide) && !u(e, "zoomed")) {
                                    var t = $(),
                                        i = e.querySelector(".gvideo-wrapper"),
                                        s = e.querySelector(".gslide-image"),
                                        n = this.slideDescription,
                                        r = t.width,
                                        a = t.height;
                                    if ((r <= 768 ? d(document.body, "glightbox-mobile") : c(document.body, "glightbox-mobile"), i || s)) {
                                        var o = !1;
                                        if ((n && (u(n, "description-bottom") || u(n, "description-top")) && !u(n, "gabsolute") && (o = !0), s)) {
                                            if (r <= 768) s.querySelector("img");
                                            else if (o) {
                                                var l = n.offsetHeight,
                                                    h = s.querySelector("img");
                                                h.setAttribute("style", "max-height: calc(100vh - ".concat(l, "px)")), n.setAttribute("style", "max-width: ".concat(h.offsetWidth, "px;"));
                                            }
                                        }
                                        if (i) {
                                            var p = A(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                            if (!p) {
                                                var f = i.clientWidth,
                                                    m = i.clientHeight,
                                                    g = f / m;
                                                p = "".concat(f / g, ":").concat(m / g);
                                            }
                                            var v = p.split(":"),
                                                y = this.settings.videosWidth,
                                                b = this.settings.videosWidth,
                                                w =
                                                    (b =
                                                        P(y) || -1 !== y.indexOf("px")
                                                            ? parseInt(y)
                                                            : -1 !== y.indexOf("vw")
                                                            ? (r * parseInt(y)) / 100
                                                            : -1 !== y.indexOf("vh")
                                                            ? (a * parseInt(y)) / 100
                                                            : -1 !== y.indexOf("%")
                                                            ? (r * parseInt(y)) / 100
                                                            : parseInt(i.clientWidth)) /
                                                    (parseInt(v[0]) / parseInt(v[1]));
                                            if (((w = Math.floor(w)), o && (a -= n.offsetHeight), b > r || w > a || (a < w && r > b))) {
                                                var _ = i.offsetWidth,
                                                    x = i.offsetHeight,
                                                    E = a / x,
                                                    C = { width: _ * E, height: x * E };
                                                i.parentNode.setAttribute("style", "max-width: ".concat(C.width, "px")), o && n.setAttribute("style", "max-width: ".concat(C.width, "px;"));
                                            } else (i.parentNode.style.maxWidth = "".concat(y)), o && n.setAttribute("style", "max-width: ".concat(y, ";"));
                                        }
                                    }
                                }
                            },
                        },
                        {
                            key: "reload",
                            value: function () {
                                this.init();
                            },
                        },
                        {
                            key: "updateNavigationClasses",
                            value: function () {
                                var e = this.loop();
                                c(this.nextButton, "disabled"),
                                    c(this.prevButton, "disabled"),
                                    0 == this.index && this.elements.length - 1 == 0
                                        ? (d(this.prevButton, "disabled"), d(this.nextButton, "disabled"))
                                        : 0 !== this.index || e
                                        ? this.index !== this.elements.length - 1 || e || d(this.nextButton, "disabled")
                                        : d(this.prevButton, "disabled");
                            },
                        },
                        {
                            key: "loop",
                            value: function () {
                                var e = A(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                                return A(this.settings, "loop") ? this.settings.loop : e;
                            },
                        },
                        {
                            key: "close",
                            value: function () {
                                var e = this;
                                if (!this.lightboxOpen) {
                                    if (this.events) {
                                        for (var t in this.events) this.events.hasOwnProperty(t) && this.events[t].destroy();
                                        this.events = null;
                                    }
                                    return !1;
                                }
                                if (this.closing) return !1;
                                (this.closing = !0),
                                    this.slidePlayerPause(this.activeSlide),
                                    this.fullElementsList && (this.elements = this.fullElementsList),
                                    this.bodyHiddenChildElms.length &&
                                        a(this.bodyHiddenChildElms, function (e) {
                                            e.removeAttribute("aria-hidden");
                                        }),
                                    d(this.modal, "glightbox-closing"),
                                    p(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out),
                                    p(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function () {
                                        if (((e.activeSlide = null), (e.prevActiveSlideIndex = null), (e.prevActiveSlide = null), (e.built = !1), e.events)) {
                                            for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();
                                            e.events = null;
                                        }
                                        var i = document.body;
                                        c(V, "glightbox-open"),
                                            c(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),
                                            e.modal.parentNode.removeChild(e.modal),
                                            e.trigger("close"),
                                            _(e.settings.onClose) && e.settings.onClose();
                                        var s = document.querySelector(".gcss-styles");
                                        s && s.parentNode.removeChild(s), (e.lightboxOpen = !1), (e.closing = null);
                                    });
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
                            },
                        },
                        {
                            key: "on",
                            value: function (e, t) {
                                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (!e || !_(t)) throw TypeError("Event name and callback must be defined");
                                this.apiEvents.push({ evt: e, once: i, callback: t });
                            },
                        },
                        {
                            key: "once",
                            value: function (e, t) {
                                this.on(e, t, !0);
                            },
                        },
                        {
                            key: "trigger",
                            value: function (e) {
                                var t = this,
                                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                    s = [];
                                a(this.apiEvents, function (t, n) {
                                    var r = t.evt,
                                        a = t.once,
                                        o = t.callback;
                                    r == e && (o(i), a && s.push(n));
                                }),
                                    s.length &&
                                        a(s, function (e) {
                                            return t.apiEvents.splice(e, 1);
                                        });
                            },
                        },
                        {
                            key: "clearAllEvents",
                            value: function () {
                                this.apiEvents.splice(0, this.apiEvents.length);
                            },
                        },
                        {
                            key: "version",
                            value: function () {
                                return "3.1.0";
                            },
                        },
                    ]),
                    e
                );
            })();
        return function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = new Q(e);
            return t.init(), t;
        };
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
                  return t(e, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = t(e, require("jquery")))
            : (e.jQueryBridget = t(e, e.jQuery));
    })(window, function (e, t) {
        "use strict";
        function i(i, r, o) {
            (o = o || t || e.jQuery) &&
                (r.prototype.option ||
                    (r.prototype.option = function (e) {
                        o.isPlainObject(e) && (this.options = o.extend(!0, this.options, e));
                    }),
                (o.fn[i] = function (e) {
                    if ("string" == typeof e) {
                        var t,
                            s,
                            l,
                            d,
                            c,
                            u = n.call(arguments, 1);
                        return (
                            (t = this),
                            (s = e),
                            (l = u),
                            (c = "$()." + i + '("' + s + '")'),
                            t.each(function (e, t) {
                                var n = o.data(t, i);
                                if (!n) return void a(i + " not initialized. Cannot call methods, i.e. " + c);
                                var r = n[s];
                                if (!r || "_" == s.charAt(0)) return void a(c + " is not a valid method");
                                var u = r.apply(n, l);
                                d = void 0 === d ? u : d;
                            }),
                            void 0 !== d ? d : t
                        );
                    }
                    return (
                        (function e(t, s) {
                            t.each(function (e, t) {
                                var n = o.data(t, i);
                                n ? (n.option(s), n._init()) : ((n = new r(t, s)), o.data(t, i, n));
                            });
                        })(this, e),
                        this
                    );
                }),
                s(o));
        }
        function s(e) {
            !e || (e && e.bridget) || (e.bridget = i);
        }
        var n = Array.prototype.slice,
            r = e.console,
            a =
                void 0 === r
                    ? function () {}
                    : function (e) {
                          r.error(e);
                      };
        return s(t || e.jQuery), i;
    }),
    (function (e, t) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? (module.exports = t()) : (e.EvEmitter = t());
    })("undefined" != typeof window ? window : this, function () {
        function e() {}
        var t = e.prototype;
        return (
            (t.on = function (e, t) {
                if (e && t) {
                    var i = (this._events = this._events || {}),
                        s = (i[e] = i[e] || []);
                    return -1 == s.indexOf(t) && s.push(t), this;
                }
            }),
            (t.once = function (e, t) {
                if (e && t) {
                    this.on(e, t);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[e] = i[e] || {})[t] = !0), this;
                }
            }),
            (t.off = function (e, t) {
                var i = this._events && this._events[e];
                if (i && i.length) {
                    var s = i.indexOf(t);
                    return -1 != s && i.splice(s, 1), this;
                }
            }),
            (t.emitEvent = function (e, t) {
                var i = this._events && this._events[e];
                if (i && i.length) {
                    (i = i.slice(0)), (t = t || []);
                    for (var s = this._onceEvents && this._onceEvents[e], n = 0; n < i.length; n++) {
                        var r = i[n];
                        s && s[r] && (this.off(e, r), delete s[r]), r.apply(this, t);
                    }
                    return this;
                }
            }),
            (t.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            e
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? (module.exports = t()) : (e.getSize = t());
    })(window, function () {
        "use strict";
        function e(e) {
            var t = parseFloat(e);
            return -1 == e.indexOf("%") && !isNaN(t) && t;
        }
        function t(e) {
            var t = getComputedStyle(e);
            return t || n("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t;
        }
        function i(n) {
            if (
                ((function n() {
                    if (!o) {
                        o = !0;
                        var r = document.createElement("div");
                        (r.style.width = "200px"), (r.style.padding = "1px 2px 3px 4px"), (r.style.borderStyle = "solid"), (r.style.borderWidth = "1px 2px 3px 4px"), (r.style.boxSizing = "border-box");
                        var a = document.body || document.documentElement;
                        a.appendChild(r), (s = 200 == Math.round(e(t(r).width))), (i.isBoxSizeOuter = s), a.removeChild(r);
                    }
                })(),
                "string" == typeof n && (n = document.querySelector(n)),
                n && "object" == typeof n && n.nodeType)
            ) {
                var l = t(n);
                if ("none" == l.display)
                    return (function e() {
                        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, i = 0; i < a; i++) t[r[i]] = 0;
                        return t;
                    })();
                var d = {};
                (d.width = n.offsetWidth), (d.height = n.offsetHeight);
                for (var c = (d.isBorderBox = "border-box" == l.boxSizing), u = 0; u < a; u++) {
                    var h = r[u],
                        p = parseFloat(l[h]);
                    d[h] = isNaN(p) ? 0 : p;
                }
                var f = d.paddingLeft + d.paddingRight,
                    m = d.paddingTop + d.paddingBottom,
                    g = d.marginLeft + d.marginRight,
                    v = d.marginTop + d.marginBottom,
                    $ = d.borderLeftWidth + d.borderRightWidth,
                    y = d.borderTopWidth + d.borderBottomWidth,
                    b = c && s,
                    w = e(l.width);
                !1 !== w && (d.width = w + (b ? 0 : f + $));
                var _ = e(l.height);
                return !1 !== _ && (d.height = _ + (b ? 0 : m + y)), (d.innerWidth = d.width - (f + $)), (d.innerHeight = d.height - (m + y)), (d.outerWidth = d.width + g), (d.outerHeight = d.height + v), d;
            }
        }
        var s,
            n =
                "undefined" == typeof console
                    ? function e() {}
                    : function (e) {
                          console.error(e);
                      },
            r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            a = r.length,
            o = !1;
        return i;
    }),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? (module.exports = t()) : (e.matchesSelector = t());
    })(window, function () {
        "use strict";
        var e = (function () {
            var e = window.Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
                var s = t[i] + "MatchesSelector";
                if (e[s]) return s;
            }
        })();
        return function (t, i) {
            return t[e](i);
        };
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
                  return t(e, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = t(e, require("desandro-matches-selector")))
            : (e.fizzyUIUtils = t(e, e.matchesSelector));
    })(window, function (e, t) {
        var i = {};
        (i.extend = function (e, t) {
            for (var i in t) e[i] = t[i];
            return e;
        }),
            (i.modulo = function (e, t) {
                return ((e % t) + t) % t;
            });
        var s = Array.prototype.slice;
        (i.makeArray = function (e) {
            return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? s.call(e) : [e];
        }),
            (i.removeFrom = function (e, t) {
                var i = e.indexOf(t);
                -1 != i && e.splice(i, 1);
            }),
            (i.getParent = function (e, i) {
                for (; e.parentNode && e != document.body; ) if (t((e = e.parentNode), i)) return e;
            }),
            (i.getQueryElement = function (e) {
                return "string" == typeof e ? document.querySelector(e) : e;
            }),
            (i.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (i.filterFindElements = function (e, s) {
                e = i.makeArray(e);
                var n = [];
                return (
                    e.forEach(function (e) {
                        if (e instanceof HTMLElement) {
                            if (!s) return void n.push(e);
                            t(e, s) && n.push(e);
                            for (var i = e.querySelectorAll(s), r = 0; r < i.length; r++) n.push(i[r]);
                        }
                    }),
                    n
                );
            }),
            (i.debounceMethod = function (e, t, i) {
                i = i || 100;
                var s = e.prototype[t],
                    n = t + "Timeout";
                e.prototype[t] = function () {
                    clearTimeout(this[n]);
                    var e = arguments,
                        t = this;
                    this[n] = setTimeout(function () {
                        s.apply(t, e), delete t[n];
                    }, i);
                };
            }),
            (i.docReady = function (e) {
                var t = document.readyState;
                "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
            }),
            (i.toDashed = function (e) {
                return e
                    .replace(/(.)([A-Z])/g, function (e, t, i) {
                        return t + "-" + i;
                    })
                    .toLowerCase();
            });
        var n = e.console;
        return (
            (i.htmlInit = function (t, s) {
                i.docReady(function () {
                    var r = i.toDashed(s),
                        a = "data-" + r,
                        o = document.querySelectorAll("[" + a + "]"),
                        l = document.querySelectorAll(".js-" + r),
                        d = i.makeArray(o).concat(i.makeArray(l)),
                        c = a + "-options",
                        u = e.jQuery;
                    d.forEach(function (e) {
                        var i,
                            r = e.getAttribute(a) || e.getAttribute(c);
                        try {
                            i = r && JSON.parse(r);
                        } catch (o) {
                            return void (n && n.error("Error parsing " + a + " on " + e.className + ": " + o));
                        }
                        var l = new t(e, i);
                        u && u.data(e, s, l);
                    });
                });
            }),
            i
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t)
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("ev-emitter"), require("get-size")))
            : ((e.Outlayer = {}), (e.Outlayer.Item = t(e.EvEmitter, e.getSize)));
    })(window, function (e, t) {
        "use strict";
        function i(e, t) {
            e && ((this.element = e), (this.layout = t), (this.position = { x: 0, y: 0 }), this._create());
        }
        var s,
            n = document.documentElement.style,
            r = "string" == typeof n.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof n.transform ? "transform" : "WebkitTransform",
            o = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
            l = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
            d = (i.prototype = Object.create(e.prototype));
        (d.constructor = i),
            (d._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (d.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (d.getSize = function () {
                this.size = t(this.element);
            }),
            (d.css = function (e) {
                var t = this.element.style;
                for (var i in e) t[l[i] || i] = e[i];
            }),
            (d.getPosition = function () {
                var e = getComputedStyle(this.element),
                    t = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    s = e[t ? "left" : "right"],
                    n = e[i ? "top" : "bottom"],
                    r = parseFloat(s),
                    a = parseFloat(n),
                    o = this.layout.size;
                -1 != s.indexOf("%") && (r = (r / 100) * o.width),
                    -1 != n.indexOf("%") && (a = (a / 100) * o.height),
                    (r = isNaN(r) ? 0 : r),
                    (a = isNaN(a) ? 0 : a),
                    (r -= t ? o.paddingLeft : o.paddingRight),
                    (a -= i ? o.paddingTop : o.paddingBottom),
                    (this.position.x = r),
                    (this.position.y = a);
            }),
            (d.layoutPosition = function () {
                var e = this.layout.size,
                    t = {},
                    i = this.layout._getOption("originLeft"),
                    s = this.layout._getOption("originTop"),
                    n = i ? "left" : "right",
                    r = i ? "right" : "left",
                    a = this.position.x + e[i ? "paddingLeft" : "paddingRight"];
                (t[n] = this.getXValue(a)), (t[r] = "");
                var o = s ? "top" : "bottom",
                    l = s ? "bottom" : "top",
                    d = this.position.y + e[s ? "paddingTop" : "paddingBottom"];
                (t[o] = this.getYValue(d)), (t[l] = ""), this.css(t), this.emitEvent("layout", [this]);
            }),
            (d.getXValue = function (e) {
                var t = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !t ? (e / this.layout.size.width) * 100 + "%" : e + "px";
            }),
            (d.getYValue = function (e) {
                var t = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && t ? (e / this.layout.size.height) * 100 + "%" : e + "px";
            }),
            (d._transitionTo = function (e, t) {
                this.getPosition();
                var i = this.position.x,
                    s = this.position.y,
                    n = e == this.position.x && t == this.position.y;
                if ((this.setPosition(e, t), n && !this.isTransitioning)) return void this.layoutPosition();
                var r = {};
                (r.transform = this.getTranslate(e - i, t - s)), this.transition({ to: r, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }),
            (d.getTranslate = function (e, t) {
                var i = this.layout._getOption("originLeft"),
                    s = this.layout._getOption("originTop");
                return "translate3d(" + (e = i ? e : -e) + "px, " + (t = s ? t : -t) + "px, 0)";
            }),
            (d.goTo = function (e, t) {
                this.setPosition(e, t), this.layoutPosition();
            }),
            (d.moveTo = d._transitionTo),
            (d.setPosition = function (e, t) {
                (this.position.x = parseFloat(e)), (this.position.y = parseFloat(t));
            }),
            (d._nonTransition = function (e) {
                for (var t in (this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd)) e.onTransitionEnd[t].call(this);
            }),
            (d.transition = function (e) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
                var t = this._transn;
                for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
                for (i in e.to) (t.ingProperties[i] = !0), e.isCleaning && (t.clean[i] = !0);
                if (e.from) {
                    this.css(e.from);
                    var s = this.element.offsetHeight;
                    s = null;
                }
                this.enableTransition(e.to), this.css(e.to), (this.isTransitioning = !0);
            });
        var c =
            "opacity," +
            (s = a).replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase();
            });
        (d.enableTransition = function () {
            if (!this.isTransitioning) {
                var e = this.layout.options.transitionDuration;
                (e = "number" == typeof e ? e + "ms" : e), this.css({ transitionProperty: c, transitionDuration: e, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(o, this, !1);
            }
        }),
            (d.onwebkitTransitionEnd = function (e) {
                this.ontransitionend(e);
            }),
            (d.onotransitionend = function (e) {
                this.ontransitionend(e);
            });
        var u = { "-webkit-transform": "transform" };
        (d.ontransitionend = function (e) {
            if (e.target === this.element) {
                var t = this._transn,
                    i = u[e.propertyName] || e.propertyName;
                delete t.ingProperties[i],
                    (function e(t) {
                        for (var i in t) return !1;
                        return (i = null), !0;
                    })(t.ingProperties) && this.disableTransition(),
                    i in t.clean && ((this.element.style[e.propertyName] = ""), delete t.clean[i]),
                    i in t.onEnd && (t.onEnd[i].call(this), delete t.onEnd[i]),
                    this.emitEvent("transitionEnd", [this]);
            }
        }),
            (d.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), (this.isTransitioning = !1);
            }),
            (d._removeStyles = function (e) {
                var t = {};
                for (var i in e) t[i] = "";
                this.css(t);
            });
        var h = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (d.removeTransitionStyles = function () {
                this.css(h);
            }),
            (d.stagger = function (e) {
                (e = isNaN(e) ? 0 : e), (this.staggerDelay = e + "ms");
            }),
            (d.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (d.remove = function () {
                return r && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (d.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var e = this.layout.options,
                    t = {};
                (t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: e.hiddenStyle, to: e.visibleStyle, isCleaning: !0, onTransitionEnd: t });
            }),
            (d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (d.getHideRevealTransitionEndProperty = function (e) {
                var t = this.layout.options[e];
                if (t.opacity) return "opacity";
                for (var i in t) return i;
            }),
            (d.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var e = this.layout.options,
                    t = {};
                (t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: e.visibleStyle, to: e.hiddenStyle, isCleaning: !0, onTransitionEnd: t });
            }),
            (d.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (d.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            i
        );
    }),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, s, n, r) {
                  return t(e, i, s, n, r);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item));
    })(window, function (e, t, i, s, n) {
        "use strict";
        function r(e, t) {
            var i = s.getQueryElement(e);
            if (!i) return void (o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || e)));
            (this.element = i), l && (this.$element = l(this.element)), (this.options = s.extend({}, this.constructor.defaults)), this.option(t);
            var n = ++c;
            (this.element.outlayerGUID = n), (u[n] = this), this._create(), this._getOption("initLayout") && this.layout();
        }
        function a(e) {
            function t() {
                e.apply(this, arguments);
            }
            return (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), t;
        }
        var o = e.console,
            l = e.jQuery,
            d = function () {},
            c = 0,
            u = {};
        (r.namespace = "outlayer"),
            (r.Item = n),
            (r.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var h = r.prototype;
        s.extend(h, t.prototype),
            (h.option = function (e) {
                s.extend(this.options, e);
            }),
            (h._getOption = function (e) {
                var t = this.constructor.compatOptions[e];
                return t && void 0 !== this.options[t] ? this.options[t] : this.options[e];
            }),
            (r.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (h._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
            }),
            (h.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (h._itemize = function (e) {
                for (var t = this._filterFindItemElements(e), i = this.constructor.Item, s = [], n = 0; n < t.length; n++) {
                    var r = t[n],
                        a = new i(r, this);
                    s.push(a);
                }
                return s;
            }),
            (h._filterFindItemElements = function (e) {
                return s.filterFindElements(e, this.options.itemSelector);
            }),
            (h.getItemElements = function () {
                return this.items.map(function (e) {
                    return e.element;
                });
            }),
            (h.layout = function () {
                this._resetLayout(), this._manageStamps();
                var e = this._getOption("layoutInstant"),
                    t = void 0 !== e ? e : !this._isLayoutInited;
                this.layoutItems(this.items, t), (this._isLayoutInited = !0);
            }),
            (h._init = h.layout),
            (h._resetLayout = function () {
                this.getSize();
            }),
            (h.getSize = function () {
                this.size = i(this.element);
            }),
            (h._getMeasurement = function (e, t) {
                var s,
                    n = this.options[e];
                n ? ("string" == typeof n ? (s = this.element.querySelector(n)) : n instanceof HTMLElement && (s = n), (this[e] = s ? i(s)[t] : n)) : (this[e] = 0);
            }),
            (h.layoutItems = function (e, t) {
                (e = this._getItemsForLayout(e)), this._layoutItems(e, t), this._postLayout();
            }),
            (h._getItemsForLayout = function (e) {
                return e.filter(function (e) {
                    return !e.isIgnored;
                });
            }),
            (h._layoutItems = function (e, t) {
                if ((this._emitCompleteOnItems("layout", e), e && e.length)) {
                    var i = [];
                    e.forEach(function (e) {
                        var s = this._getItemLayoutPosition(e);
                        (s.item = e), (s.isInstant = t || e.isLayoutInstant), i.push(s);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (h._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (h._processLayoutQueue = function (e) {
                this.updateStagger(),
                    e.forEach(function (e, t) {
                        this._positionItem(e.item, e.x, e.y, e.isInstant, t);
                    }, this);
            }),
            (h.updateStagger = function () {
                var e = this.options.stagger;
                return null == e
                    ? void (this.stagger = 0)
                    : ((this.stagger = (function e(t) {
                          if ("number" == typeof t) return t;
                          var i = t.match(/(^\d*\.?\d*)(\w*)/),
                              s = i && i[1],
                              n = i && i[2];
                          return s.length ? (s = parseFloat(s)) * (p[n] || 1) : 0;
                      })(e)),
                      this.stagger);
            }),
            (h._positionItem = function (e, t, i, s, n) {
                s ? e.goTo(t, i) : (e.stagger(n * this.stagger), e.moveTo(t, i));
            }),
            (h._postLayout = function () {
                this.resizeContainer();
            }),
            (h.resizeContainer = function () {
                if (this._getOption("resizeContainer")) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
                }
            }),
            (h._getContainerSize = d),
            (h._setContainerMeasure = function (e, t) {
                if (void 0 !== e) {
                    var i = this.size;
                    i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        (e = Math.max(e, 0)),
                        (this.element.style[t ? "width" : "height"] = e + "px");
                }
            }),
            (h._emitCompleteOnItems = function (e, t) {
                function i() {
                    n.dispatchEvent(e + "Complete", null, [t]);
                }
                function s() {
                    ++a == r && i();
                }
                var n = this,
                    r = t.length;
                if (!t || !r) return void i();
                var a = 0;
                t.forEach(function (t) {
                    t.once(e, s);
                });
            }),
            (h.dispatchEvent = function (e, t, i) {
                var s = t ? [t].concat(i) : i;
                if ((this.emitEvent(e, s), l)) {
                    if (((this.$element = this.$element || l(this.element)), t)) {
                        var n = l.Event(t);
                        (n.type = e), this.$element.trigger(n, i);
                    } else this.$element.trigger(e, i);
                }
            }),
            (h.ignore = function (e) {
                var t = this.getItem(e);
                t && (t.isIgnored = !0);
            }),
            (h.unignore = function (e) {
                var t = this.getItem(e);
                t && delete t.isIgnored;
            }),
            (h.stamp = function (e) {
                (e = this._find(e)) && ((this.stamps = this.stamps.concat(e)), e.forEach(this.ignore, this));
            }),
            (h.unstamp = function (e) {
                (e = this._find(e)) &&
                    e.forEach(function (e) {
                        s.removeFrom(this.stamps, e), this.unignore(e);
                    }, this);
            }),
            (h._find = function (e) {
                if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), (e = s.makeArray(e));
            }),
            (h._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (h._getBoundingRect = function () {
                var e = this.element.getBoundingClientRect(),
                    t = this.size;
                this._boundingRect = {
                    left: e.left + t.paddingLeft + t.borderLeftWidth,
                    top: e.top + t.paddingTop + t.borderTopWidth,
                    right: e.right - (t.paddingRight + t.borderRightWidth),
                    bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth),
                };
            }),
            (h._manageStamp = d),
            (h._getElementOffset = function (e) {
                var t = e.getBoundingClientRect(),
                    s = this._boundingRect,
                    n = i(e);
                return { left: t.left - s.left - n.marginLeft, top: t.top - s.top - n.marginTop, right: s.right - t.right - n.marginRight, bottom: s.bottom - t.bottom - n.marginBottom };
            }),
            (h.handleEvent = s.handleEvent),
            (h.bindResize = function () {
                e.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (h.unbindResize = function () {
                e.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (h.onresize = function () {
                this.resize();
            }),
            s.debounceMethod(r, "onresize", 100),
            (h.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (h.needsResizeLayout = function () {
                var e = i(this.element);
                return this.size && e && e.innerWidth !== this.size.innerWidth;
            }),
            (h.addItems = function (e) {
                var t = this._itemize(e);
                return t.length && (this.items = this.items.concat(t)), t;
            }),
            (h.appended = function (e) {
                var t = this.addItems(e);
                t.length && (this.layoutItems(t, !0), this.reveal(t));
            }),
            (h.prepended = function (e) {
                var t = this._itemize(e);
                if (t.length) {
                    var i = this.items.slice(0);
                    (this.items = t.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i);
                }
            }),
            (h.reveal = function (e) {
                if ((this._emitCompleteOnItems("reveal", e), e && e.length)) {
                    var t = this.updateStagger();
                    e.forEach(function (e, i) {
                        e.stagger(i * t), e.reveal();
                    });
                }
            }),
            (h.hide = function (e) {
                if ((this._emitCompleteOnItems("hide", e), e && e.length)) {
                    var t = this.updateStagger();
                    e.forEach(function (e, i) {
                        e.stagger(i * t), e.hide();
                    });
                }
            }),
            (h.revealItemElements = function (e) {
                var t = this.getItems(e);
                this.reveal(t);
            }),
            (h.hideItemElements = function (e) {
                var t = this.getItems(e);
                this.hide(t);
            }),
            (h.getItem = function (e) {
                for (var t = 0; t < this.items.length; t++) {
                    var i = this.items[t];
                    if (i.element == e) return i;
                }
            }),
            (h.getItems = function (e) {
                e = s.makeArray(e);
                var t = [];
                return (
                    e.forEach(function (e) {
                        var i = this.getItem(e);
                        i && t.push(i);
                    }, this),
                    t
                );
            }),
            (h.remove = function (e) {
                var t = this.getItems(e);
                this._emitCompleteOnItems("remove", t),
                    t &&
                        t.length &&
                        t.forEach(function (e) {
                            e.remove(), s.removeFrom(this.items, e);
                        }, this);
            }),
            (h.destroy = function () {
                var e = this.element.style;
                (e.height = ""),
                    (e.position = ""),
                    (e.width = ""),
                    this.items.forEach(function (e) {
                        e.destroy();
                    }),
                    this.unbindResize(),
                    delete u[this.element.outlayerGUID],
                    delete this.element.outlayerGUID,
                    l && l.removeData(this.element, this.constructor.namespace);
            }),
            (r.data = function (e) {
                var t = (e = s.getQueryElement(e)) && e.outlayerGUID;
                return t && u[t];
            }),
            (r.create = function (e, t) {
                var i = a(r);
                return (
                    (i.defaults = s.extend({}, r.defaults)),
                    s.extend(i.defaults, t),
                    (i.compatOptions = s.extend({}, r.compatOptions)),
                    (i.namespace = e),
                    (i.data = r.data),
                    (i.Item = a(n)),
                    s.htmlInit(i, e),
                    l && l.bridget && l.bridget(e, i),
                    i
                );
            });
        var p = { ms: 1, s: 1e3 };
        return (r.Item = n), r;
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/item", ["outlayer/outlayer"], t)
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("outlayer")))
            : ((e.Isotope = e.Isotope || {}), (e.Isotope.Item = t(e.Outlayer)));
    })(window, function (e) {
        "use strict";
        function t() {
            e.Item.apply(this, arguments);
        }
        var i = (t.prototype = Object.create(e.Item.prototype)),
            s = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++), s.call(this), (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                    var e = this.layout.options.getSortData,
                        t = this.layout._sorters;
                    for (var i in e) {
                        var s = t[i];
                        this.sortData[i] = s(this.element, this);
                    }
                }
            });
        var n = i.destroy;
        return (
            (i.destroy = function () {
                n.apply(this, arguments), this.css({ display: "" });
            }),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t)
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("get-size"), require("outlayer")))
            : ((e.Isotope = e.Isotope || {}), (e.Isotope.LayoutMode = t(e.getSize, e.Outlayer)));
    })(window, function (e, t) {
        "use strict";
        function i(e) {
            (this.isotope = e), e && ((this.options = e.options[this.namespace]), (this.element = e.element), (this.items = e.filteredItems), (this.size = e.size));
        }
        var s = i.prototype;
        return (
            ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (e) {
                s[e] = function () {
                    return t.prototype[e].apply(this.isotope, arguments);
                };
            }),
            (s.needsVerticalResizeLayout = function () {
                var t = e(this.isotope.element);
                return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight;
            }),
            (s._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (s.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (s.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (s.getSegmentSize = function (e, t) {
                var i = e + t,
                    s = "outer" + t;
                if ((this._getMeasurement(i, s), !this[i])) {
                    var n = this.getFirstItemSize();
                    this[i] = (n && n[s]) || this.isotope.size["inner" + t];
                }
            }),
            (s.getFirstItemSize = function () {
                var t = this.isotope.filteredItems[0];
                return t && t.element && e(t.element);
            }),
            (s.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (s.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (i.modes = {}),
            (i.create = function (e, t) {
                function n() {
                    i.apply(this, arguments);
                }
                return (n.prototype = Object.create(s)), (n.prototype.constructor = n), t && (n.options = t), (n.prototype.namespace = e), (i.modes[e] = n), n;
            }),
            i
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t)
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("outlayer"), require("get-size")))
            : (e.Masonry = t(e.Outlayer, e.getSize));
    })(window, function (e, t) {
        var i = e.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var s = i.prototype;
        return (
            (s._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var e = 0; e < this.cols; e++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (s.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var e = this.items[0],
                        i = e && e.element;
                    this.columnWidth = (i && t(i).outerWidth) || this.containerWidth;
                }
                var s = (this.columnWidth += this.gutter),
                    n = this.containerWidth + this.gutter,
                    r = n / s,
                    a = s - (n % s);
                (r = Math[a && a < 1 ? "round" : "floor"](r)), (this.cols = Math.max(r, 1));
            }),
            (s.getContainerWidth = function () {
                var e = t(this._getOption("fitWidth") ? this.element.parentNode : this.element);
                this.containerWidth = e && e.innerWidth;
            }),
            (s._getItemLayoutPosition = function (e) {
                e.getSize();
                var t = e.size.outerWidth % this.columnWidth,
                    i = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
                i = Math.min(i, this.cols);
                for (
                    var s = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", n = this[s](i, e), r = { x: this.columnWidth * n.col, y: n.y }, a = n.y + e.size.outerHeight, o = i + n.col, l = n.col;
                    l < o;
                    l++
                )
                    this.colYs[l] = a;
                return r;
            }),
            (s._getTopColPosition = function (e) {
                var t = this._getTopColGroup(e),
                    i = Math.min.apply(Math, t);
                return { col: t.indexOf(i), y: i };
            }),
            (s._getTopColGroup = function (e) {
                if (e < 2) return this.colYs;
                for (var t = [], i = this.cols + 1 - e, s = 0; s < i; s++) t[s] = this._getColGroupY(s, e);
                return t;
            }),
            (s._getColGroupY = function (e, t) {
                if (t < 2) return this.colYs[e];
                var i = this.colYs.slice(e, e + t);
                return Math.max.apply(Math, i);
            }),
            (s._getHorizontalColPosition = function (e, t) {
                var i = this.horizontalColIndex % this.cols;
                i = e > 1 && i + e > this.cols ? 0 : i;
                var s = t.size.outerWidth && t.size.outerHeight;
                return (this.horizontalColIndex = s ? i + e : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, e) };
            }),
            (s._manageStamp = function (e) {
                var i = t(e),
                    s = this._getElementOffset(e),
                    n = this._getOption("originLeft") ? s.left : s.right,
                    r = n + i.outerWidth,
                    a = Math.floor(n / this.columnWidth);
                a = Math.max(0, a);
                var o = Math.floor(r / this.columnWidth);
                (o -= r % this.columnWidth ? 0 : 1), (o = Math.min(this.cols - 1, o));
                for (var l = this._getOption("originTop"), d = (l ? s.top : s.bottom) + i.outerHeight, c = a; c <= o; c++) this.colYs[c] = Math.max(d, this.colYs[c]);
            }),
            (s._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var e = { height: this.maxY };
                return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e;
            }),
            (s._getContainerFitWidth = function () {
                for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; ) e++;
                return (this.cols - e) * this.columnWidth - this.gutter;
            }),
            (s.needsResizeLayout = function () {
                var e = this.containerWidth;
                return this.getContainerWidth(), e != this.containerWidth;
            }),
            i
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t)
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("../layout-mode"), require("masonry-layout")))
            : t(e.Isotope.LayoutMode, e.Masonry);
    })(window, function (e, t) {
        "use strict";
        var i = e.create("masonry"),
            s = i.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var r in t.prototype) n[r] || (s[r] = t.prototype[r]);
        var a = s.measureColumns;
        s.measureColumns = function () {
            (this.items = this.isotope.filteredItems), a.call(this);
        };
        var o = s._getOption;
        return (
            (s._getOption = function (e) {
                return "fitWidth" == e ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : o.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? (module.exports = t(require("../layout-mode"))) : t(e.Isotope.LayoutMode);
    })(window, function (e) {
        "use strict";
        var t = e.create("fitRows"),
            i = t.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (e) {
                e.getSize();
                var t = e.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && t + this.x > i && ((this.x = 0), (this.y = this.maxY));
                var s = { x: this.x, y: this.y };
                return (this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight)), (this.x += t), s;
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t)
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("../layout-mode")))
            : t(e.Isotope.LayoutMode);
    })(window, function (e) {
        "use strict";
        var t = e.create("vertical", { horizontalAlignment: 0 }),
            i = t.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (e) {
                e.getSize();
                var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += e.size.outerHeight), { x: t, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define([
                  "outlayer/outlayer",
                  "get-size/get-size",
                  "desandro-matches-selector/matches-selector",
                  "fizzy-ui-utils/utils",
                  "isotope-layout/js/item",
                  "isotope-layout/js/layout-mode",
                  "isotope-layout/js/layout-modes/masonry",
                  "isotope-layout/js/layout-modes/fit-rows",
                  "isotope-layout/js/layout-modes/vertical",
              ], function (i, s, n, r, a, o) {
                  return t(e, i, s, n, r, a, o);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = t(
                  e,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope-layout/js/item"),
                  require("isotope-layout/js/layout-mode"),
                  require("isotope-layout/js/layout-modes/masonry"),
                  require("isotope-layout/js/layout-modes/fit-rows"),
                  require("isotope-layout/js/layout-modes/vertical")
              ))
            : (e.Isotope = t(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode));
    })(window, function (e, t, i, s, n, r, a) {
        var o = e.jQuery,
            l = String.prototype.trim
                ? function (e) {
                      return e.trim();
                  }
                : function (e) {
                      return e.replace(/^\s+|\s+$/g, "");
                  },
            d = t.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        (d.Item = r), (d.LayoutMode = a);
        var c = d.prototype;
        (c._create = function () {
            for (var e in ((this.itemGUID = 0), (this._sorters = {}), this._getSorters(), t.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]), a.modes))
                this._initLayoutMode(e);
        }),
            (c.reloadItems = function () {
                (this.itemGUID = 0), t.prototype.reloadItems.call(this);
            }),
            (c._itemize = function () {
                for (var e = t.prototype._itemize.apply(this, arguments), i = 0; i < e.length; i++) e[i].id = this.itemGUID++;
                return this._updateItemsSortData(e), e;
            }),
            (c._initLayoutMode = function (e) {
                var t = a.modes[e],
                    i = this.options[e] || {};
                (this.options[e] = t.options ? n.extend(t.options, i) : i), (this.modes[e] = new t(this));
            }),
            (c.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
            }),
            (c._layout = function () {
                var e = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), (this._isLayoutInited = !0);
            }),
            (c.arrange = function (e) {
                this.option(e), this._getIsInstant();
                var t = this._filter(this.items);
                (this.filteredItems = t.matches), this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout();
            }),
            (c._init = c.arrange),
            (c._hideReveal = function (e) {
                this.reveal(e.needReveal), this.hide(e.needHide);
            }),
            (c._getIsInstant = function () {
                var e = this._getOption("layoutInstant"),
                    t = void 0 !== e ? e : !this._isLayoutInited;
                return (this._isInstant = t), t;
            }),
            (c._bindArrangeComplete = function () {
                function e() {
                    t && i && s && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
                }
                var t,
                    i,
                    s,
                    n = this;
                this.once("layoutComplete", function () {
                    (t = !0), e();
                }),
                    this.once("hideComplete", function () {
                        (i = !0), e();
                    }),
                    this.once("revealComplete", function () {
                        (s = !0), e();
                    });
            }),
            (c._filter = function (e) {
                var t = this.options.filter;
                t = t || "*";
                for (var i = [], s = [], n = [], r = this._getFilterTest(t), a = 0; a < e.length; a++) {
                    var o = e[a];
                    if (!o.isIgnored) {
                        var l = r(o);
                        l && i.push(o), l && o.isHidden ? s.push(o) : l || o.isHidden || n.push(o);
                    }
                }
                return { matches: i, needReveal: s, needHide: n };
            }),
            (c._getFilterTest = function (e) {
                return o && this.options.isJQueryFiltering
                    ? function (t) {
                          return o(t.element).is(e);
                      }
                    : "function" == typeof e
                    ? function (t) {
                          return e(t.element);
                      }
                    : function (t) {
                          return s(t.element, e);
                      };
            }),
            (c.updateSortData = function (e) {
                var t;
                e ? ((e = n.makeArray(e)), (t = this.getItems(e))) : (t = this.items), this._getSorters(), this._updateItemsSortData(t);
            }),
            (c._getSorters = function () {
                var e = this.options.getSortData;
                for (var t in e) {
                    var i = e[t];
                    this._sorters[t] = u(i);
                }
            }),
            (c._updateItemsSortData = function (e) {
                for (var t = e && e.length, i = 0; t && i < t; i++) e[i].updateSortData();
            });
        var u = function e(t) {
            if ("string" != typeof t) return t;
            var i,
                s,
                n = l(t).split(" "),
                r = n[0],
                a = r.match(/^\[(.+)\]$/),
                o =
                    ((i = a && a[1]),
                    (s = r),
                    i
                        ? function (e) {
                              return e.getAttribute(i);
                          }
                        : function (e) {
                              var t = e.querySelector(s);
                              return t && t.textContent;
                          }),
                c = d.sortDataParsers[n[1]];
            return (t = c
                ? function (e) {
                      return e && c(o(e));
                  }
                : function (e) {
                      return e && o(e);
                  });
        };
        (d.sortDataParsers = {
            parseInt: function (e) {
                return parseInt(e, 10);
            },
            parseFloat: function (e) {
                return parseFloat(e);
            },
        }),
            (c._sort = function () {
                if (this.options.sortBy) {
                    var e,
                        t,
                        i = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(i) || (this.sortHistory = i.concat(this.sortHistory));
                    var s =
                        ((e = this.sortHistory),
                        (t = this.options.sortAscending),
                        function (i, s) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n],
                                    a = i.sortData[r],
                                    o = s.sortData[r];
                                if (a > o || a < o) return (a > o ? 1 : -1) * ((void 0 !== t[r] ? t[r] : t) ? 1 : -1);
                            }
                            return 0;
                        });
                    this.filteredItems.sort(s);
                }
            }),
            (c._getIsSameSortBy = function (e) {
                for (var t = 0; t < e.length; t++) if (e[t] != this.sortHistory[t]) return !1;
                return !0;
            }),
            (c._mode = function () {
                var e = this.options.layoutMode,
                    t = this.modes[e];
                if (!t) throw Error("No layout mode: " + e);
                return (t.options = this.options[e]), t;
            }),
            (c._resetLayout = function () {
                t.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }),
            (c._getItemLayoutPosition = function (e) {
                return this._mode()._getItemLayoutPosition(e);
            }),
            (c._manageStamp = function (e) {
                this._mode()._manageStamp(e);
            }),
            (c._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (c.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (c.appended = function (e) {
                var t = this.addItems(e);
                if (t.length) {
                    var i = this._filterRevealAdded(t);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }),
            (c.prepended = function (e) {
                var t = this._itemize(e);
                if (t.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(t);
                    this.layoutItems(this.filteredItems), (this.filteredItems = i.concat(this.filteredItems)), (this.items = t.concat(this.items));
                }
            }),
            (c._filterRevealAdded = function (e) {
                var t = this._filter(e);
                return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches;
            }),
            (c.insert = function (e) {
                var t = this.addItems(e);
                if (t.length) {
                    var i,
                        s,
                        n = t.length;
                    for (i = 0; i < n; i++) (s = t[i]), this.element.appendChild(s.element);
                    var r = this._filter(t).matches;
                    for (i = 0; i < n; i++) t[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++) delete t[i].isLayoutInstant;
                    this.reveal(r);
                }
            });
        var h = c.remove;
        return (
            (c.remove = function (e) {
                e = n.makeArray(e);
                var t = this.getItems(e);
                h.call(this, e);
                for (var i = t && t.length, s = 0; i && s < i; s++) {
                    var r = t[s];
                    n.removeFrom(this.filteredItems, r);
                }
            }),
            (c.shuffle = function () {
                for (var e = 0; e < this.items.length; e++) this.items[e].sortData.random = Math.random();
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (c._noTransition = function (e, t) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var s = e.apply(this, t);
                return (this.options.transitionDuration = i), s;
            }),
            (c.getFilteredItemElements = function () {
                return this.filteredItems.map(function (e) {
                    return e.element;
                });
            }),
            d
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.PureCounter = t()) : (e.PureCounter = t());
    })(self, function () {
        var e, t, i;
        return (
            (e = {
                638: function (e) {
                    function t(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
                        return s;
                    }
                    function i(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = {};
                        for (var s in e)
                            if (t == {} || t.hasOwnProperty(s)) {
                                var n = r(e[s]);
                                (i[s] = n), s.match(/duration|pulse/) && (i[s] = "boolean" != typeof n ? 1e3 * n : n);
                            }
                        return Object.assign({}, t, i);
                    }
                    function s(e, t) {
                        return Math.pow(e, t);
                    }
                    function n(e, t) {
                        var i = { minimumFractionDigits: t.decimals, maximumFractionDigits: t.decimals },
                            n = "string" == typeof t.formater ? t.formater : void 0;
                        return (
                            (e = (function (e, t) {
                                if (t.filesizing || t.currency) {
                                    e = Math.abs(Number(e));
                                    var i = 1e3,
                                        n = t.currency && "string" == typeof t.currency ? t.currency : "",
                                        r = t.decimals || 1,
                                        a = ["", "K", "M", "B", "T"],
                                        o = "";
                                    t.filesizing && ((i = 1024), (a = ["bytes", "KB", "MB", "GB", "TB"]));
                                    for (var l = 4; l >= 0; l--)
                                        if ((0 === l && (o = "".concat(e.toFixed(r), " ").concat(a[l])), e >= s(i, l))) {
                                            o = "".concat((e / s(i, l)).toFixed(r), " ").concat(a[l]);
                                            break;
                                        }
                                    return n + o;
                                }
                                return parseFloat(e);
                            })(e, t)),
                            (function (e, t) {
                                if (t.formater) {
                                    var i,
                                        s = t.separator ? ("string" == typeof t.separator ? t.separator : ",") : "";
                                    return "en-US" !== t.formater && !0 === t.separator
                                        ? e
                                        : ((i = s),
                                          e.replace(/^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([\.,]?\d{0,2}?)$/gi, function (e, t, s, n, r) {
                                              var a = "",
                                                  o = "";
                                              if (
                                                  (void 0 !== t ? ((a = t.replace(RegExp(/,/gi, "gi"), i)), (o = ",")) : void 0 !== s ? (a = s.replace(RegExp(/\./gi, "gi"), i)) : void 0 !== n && (a = n.replace(RegExp(/ /gi, "gi"), i)),
                                                  void 0 !== r)
                                              ) {
                                                  var l = "," !== o && "," !== i ? "," : ".";
                                                  a += void 0 !== r ? r.replace(RegExp(/\.|,/gi, "gi"), l) : "";
                                              }
                                              return a;
                                          }));
                                }
                                return e;
                            })((e = t.formater ? e.toLocaleString(n, i) : parseInt(e).toString()), t)
                        );
                    }
                    function r(e) {
                        return /^[0-9]+\.[0-9]+$/.test(e) ? parseFloat(e) : /^[0-9]+$/.test(e) ? parseInt(e) : /^true|false/i.test(e) ? /^true/i.test(e) : e;
                    }
                    function a(e) {
                        for (var t = e.offsetTop, i = e.offsetLeft, s = e.offsetWidth, n = e.offsetHeight; e.offsetParent; ) (t += (e = e.offsetParent).offsetTop), (i += e.offsetLeft);
                        return t >= window.pageYOffset && i >= window.pageXOffset && t + n <= window.pageYOffset + window.innerHeight && i + s <= window.pageXOffset + window.innerWidth;
                    }
                    e.exports = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            s = i(e, { start: 0, end: 100, duration: 2e3, delay: 10, once: !0, pulse: !1, decimals: 0, legacy: !0, filesizing: !1, currency: !1, separator: !1, formater: "us-US", selector: ".purecounter" });
                        function o(e) {
                            e.forEach(function (e) {
                                !0 === d(e).legacy && a(e) && l([e]);
                            });
                        }
                        function l(e, t) {
                            e.forEach(function (e) {
                                var i = e.target || e,
                                    s = d(i);
                                if (s.duration <= 0) return (i.innerHTML = n(s.end, s));
                                if ((!t && !a(e)) || (t && e.intersectionRatio < 0.5)) {
                                    var o = s.start > s.end ? s.end : s.start;
                                    return (i.innerHTML = n(o, s));
                                }
                                setTimeout(function () {
                                    var e, t, a, o, l, d;
                                    return (
                                        (e = i),
                                        (a = ((t = s).end - t.start) / (t.duration / t.delay)),
                                        (o = "inc"),
                                        t.start > t.end && ((o = "dec"), (a *= -1)),
                                        (l = r(t.start)),
                                        (e.innerHTML = n(l, t)),
                                        !0 === t.once && e.setAttribute("data-purecounter-duration", 0),
                                        void (d = setInterval(function () {
                                            var i = (function (e, t) {
                                                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "inc";
                                                return (e = r(e)), (t = r(t)), parseFloat("inc" === i ? e + t : e - t);
                                            })(l, a, o);
                                            (e.innerHTML = n(i, t)),
                                                (((l = i) >= t.end && "inc" == o) || (l <= t.end && "dec" == o)) &&
                                                    ((e.innerHTML = n(t.end, t)),
                                                    t.pulse &&
                                                        (e.setAttribute("data-purecounter-duration", 0),
                                                        setTimeout(function () {
                                                            e.setAttribute("data-purecounter-duration", t.duration / 1e3);
                                                        }, t.pulse)),
                                                    clearInterval(d));
                                        }, t.delay))
                                    );
                                }, s.delay);
                            });
                        }
                        function d(e) {
                            var n,
                                a = [].filter.call(e.attributes, function (e) {
                                    return /^data-purecounter-/.test(e.name);
                                });
                            return i(
                                0 != a.length
                                    ? Object.assign.apply(
                                          Object,
                                          [{}].concat(
                                              (function (e) {
                                                  if (Array.isArray(e)) return t(e);
                                              })(
                                                  (n = a.map(function (e) {
                                                      var t,
                                                          i,
                                                          s,
                                                          n = e.name,
                                                          a = e.value;
                                                      return (
                                                          (t = {}),
                                                          (i = n.replace("data-purecounter-", "").toLowerCase()),
                                                          (s = r(a)),
                                                          i in t ? Object.defineProperty(t, i, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (t[i] = s),
                                                          t
                                                      );
                                                  }))
                                              ) ||
                                                  (function (e) {
                                                      if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                                                  })(n) ||
                                                  (function (e, i) {
                                                      if (e) {
                                                          if ("string" == typeof e) return t(e, i);
                                                          var s = Object.prototype.toString.call(e).slice(8, -1);
                                                          return (
                                                              "Object" === s && e.constructor && (s = e.constructor.name),
                                                              "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? t(e, i) : void 0
                                                          );
                                                      }
                                                  })(n) ||
                                                  (function () {
                                                      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                  })()
                                          )
                                      )
                                    : {},
                                s
                            );
                        }
                        (function e() {
                            var t = document.querySelectorAll(s.selector);
                            if (0 !== t.length) {
                                if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
                                    var i = new IntersectionObserver(l.bind(this), { root: null, rootMargin: "20px", threshold: 0.5 });
                                    t.forEach(function (e) {
                                        i.observe(e);
                                    });
                                } else
                                    window.addEventListener &&
                                        (o(t),
                                        window.addEventListener(
                                            "scroll",
                                            function (e) {
                                                o(t);
                                            },
                                            { passive: !0 }
                                        ));
                            }
                        })();
                    };
                },
            }),
            (t = {}),
            (i = (function i(s) {
                var n = t[s];
                if (void 0 !== n) return n.exports;
                var r = (t[s] = { exports: {} });
                return e[s](r, r.exports, i), r.exports;
            })(638))
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e || self).Typed = t());
    })(this, function () {
        function e() {
            return (e = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var i = arguments[t];
                          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        var t = {
                strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                stringsElement: null,
                typeSpeed: 0,
                startDelay: 0,
                backSpeed: 0,
                smartBackspace: !0,
                shuffle: !1,
                backDelay: 700,
                fadeOut: !1,
                fadeOutClass: "typed-fade-out",
                fadeOutDelay: 500,
                loop: !1,
                loopCount: 1 / 0,
                showCursor: !0,
                cursorChar: "|",
                autoInsertCss: !0,
                attr: null,
                bindInputFocusEvents: !1,
                contentType: "html",
                onBegin: function (e) {},
                onComplete: function (e) {},
                preStringTyped: function (e, t) {},
                onStringTyped: function (e, t) {},
                onLastStringBackspaced: function (e) {},
                onTypingPaused: function (e, t) {},
                onTypingResumed: function (e, t) {},
                onReset: function (e) {},
                onStop: function (e, t) {},
                onStart: function (e, t) {},
                onDestroy: function (e) {},
            },
            i = new ((function () {
                function i() {}
                var s = i.prototype;
                return (
                    (s.load = function (i, s, n) {
                        if (
                            ((i.el = "string" == typeof n ? document.querySelector(n) : n),
                            (i.options = e({}, t, s)),
                            (i.isInput = "input" === i.el.tagName.toLowerCase()),
                            (i.attr = i.options.attr),
                            (i.bindInputFocusEvents = i.options.bindInputFocusEvents),
                            (i.showCursor = !i.isInput && i.options.showCursor),
                            (i.cursorChar = i.options.cursorChar),
                            (i.cursorBlinking = !0),
                            (i.elContent = i.attr ? i.el.getAttribute(i.attr) : i.el.textContent),
                            (i.contentType = i.options.contentType),
                            (i.typeSpeed = i.options.typeSpeed),
                            (i.startDelay = i.options.startDelay),
                            (i.backSpeed = i.options.backSpeed),
                            (i.smartBackspace = i.options.smartBackspace),
                            (i.backDelay = i.options.backDelay),
                            (i.fadeOut = i.options.fadeOut),
                            (i.fadeOutClass = i.options.fadeOutClass),
                            (i.fadeOutDelay = i.options.fadeOutDelay),
                            (i.isPaused = !1),
                            (i.strings = i.options.strings.map(function (e) {
                                return e.trim();
                            })),
                            (i.stringsElement = "string" == typeof i.options.stringsElement ? document.querySelector(i.options.stringsElement) : i.options.stringsElement),
                            i.stringsElement)
                        ) {
                            (i.strings = []), (i.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
                            var r = Array.prototype.slice.apply(i.stringsElement.children),
                                a = r.length;
                            if (a) for (var o = 0; o < a; o += 1) i.strings.push(r[o].innerHTML.trim());
                        }
                        for (var l in ((i.strPos = 0),
                        (i.currentElContent = this.getCurrentElContent(i)),
                        i.currentElContent && i.currentElContent.length > 0 && ((i.strPos = i.currentElContent.length - 1), i.strings.unshift(i.currentElContent)),
                        (i.sequence = []),
                        i.strings))
                            i.sequence[l] = l;
                        (i.arrayPos = 0),
                            (i.stopNum = 0),
                            (i.loop = i.options.loop),
                            (i.loopCount = i.options.loopCount),
                            (i.curLoop = 0),
                            (i.shuffle = i.options.shuffle),
                            (i.pause = { status: !1, typewrite: !0, curString: "", curStrPos: 0 }),
                            (i.typingComplete = !1),
                            (i.autoInsertCss = i.options.autoInsertCss),
                            i.autoInsertCss && (this.appendCursorAnimationCss(i), this.appendFadeOutAnimationCss(i));
                    }),
                    (s.getCurrentElContent = function (e) {
                        return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent;
                    }),
                    (s.appendCursorAnimationCss = function (e) {
                        var t = "data-typed-js-cursor-css";
                        if (e.showCursor && !document.querySelector("[" + t + "]")) {
                            var i = document.createElement("style");
                            i.setAttribute(t, "true"),
                                (i.innerHTML =
                                    "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                                document.body.appendChild(i);
                        }
                    }),
                    (s.appendFadeOutAnimationCss = function (e) {
                        var t = "data-typed-fadeout-js-css";
                        if (e.fadeOut && !document.querySelector("[" + t + "]")) {
                            var i = document.createElement("style");
                            i.setAttribute(t, "true"),
                                (i.innerHTML =
                                    "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                                document.body.appendChild(i);
                        }
                    }),
                    i
                );
            })())(),
            s = new ((function () {
                function e() {}
                var t = e.prototype;
                return (
                    (t.typeHtmlChars = function (e, t, i) {
                        if ("html" !== i.contentType) return t;
                        var s,
                            n = e.substring(t).charAt(0);
                        if ("<" === n || "&" === n) {
                            for (s = "<" === n ? ">" : ";"; e.substring(t + 1).charAt(0) !== s && !(1 + ++t > e.length); );
                            t++;
                        }
                        return t;
                    }),
                    (t.backSpaceHtmlChars = function (e, t, i) {
                        if ("html" !== i.contentType) return t;
                        var s,
                            n = e.substring(t).charAt(0);
                        if (">" === n || ";" === n) {
                            for (s = ">" === n ? "<" : "&"; e.substring(t - 1).charAt(0) !== s && !(--t < 0); );
                            t--;
                        }
                        return t;
                    }),
                    e
                );
            })())();
        return (function () {
            function e(e, t) {
                i.load(this, t, e), this.begin();
            }
            var t = e.prototype;
            return (
                (t.toggle = function () {
                    this.pause.status ? this.start() : this.stop();
                }),
                (t.stop = function () {
                    this.typingComplete || this.pause.status || (this.toggleBlinking(!0), (this.pause.status = !0), this.options.onStop(this.arrayPos, this));
                }),
                (t.start = function () {
                    this.typingComplete ||
                        (this.pause.status &&
                            ((this.pause.status = !1),
                            this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
                            this.options.onStart(this.arrayPos, this)));
                }),
                (t.destroy = function () {
                    this.reset(!1), this.options.onDestroy(this);
                }),
                (t.reset = function (e) {
                    void 0 === e && (e = !0),
                        clearInterval(this.timeout),
                        this.replaceText(""),
                        this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), (this.cursor = null)),
                        (this.strPos = 0),
                        (this.arrayPos = 0),
                        (this.curLoop = 0),
                        e && (this.insertCursor(), this.options.onReset(this), this.begin());
                }),
                (t.begin = function () {
                    var e = this;
                    this.options.onBegin(this),
                        (this.typingComplete = !1),
                        this.shuffleStringsIfNeeded(this),
                        this.insertCursor(),
                        this.bindInputFocusEvents && this.bindFocusEvents(),
                        (this.timeout = setTimeout(function () {
                            0 === e.strPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos) : e.backspace(e.strings[e.sequence[e.arrayPos]], e.strPos);
                        }, this.startDelay));
                }),
                (t.typewrite = function (e, t) {
                    var i = this;
                    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                    var n = this.humanizer(this.typeSpeed),
                        r = 1;
                    !0 !== this.pause.status
                        ? (this.timeout = setTimeout(function () {
                              t = s.typeHtmlChars(e, t, i);
                              var n = 0,
                                  a = e.substring(t);
                              if ("^" === a.charAt(0) && /^\^\d+/.test(a)) {
                                  var o = 1;
                                  (o += (a = /\d+/.exec(a)[0]).length), (n = parseInt(a)), (i.temporaryPause = !0), i.options.onTypingPaused(i.arrayPos, i), (e = e.substring(0, t) + e.substring(t + o)), i.toggleBlinking(!0);
                              }
                              if ("`" === a.charAt(0)) {
                                  for (; "`" !== e.substring(t + r).charAt(0) && !(t + ++r > e.length); );
                                  var l = e.substring(0, t),
                                      d = e.substring(l.length + 1, t + r);
                                  (e = l + d + e.substring(t + r + 1)), r--;
                              }
                              i.timeout = setTimeout(function () {
                                  i.toggleBlinking(!1), t >= e.length ? i.doneTyping(e, t) : i.keepTyping(e, t, r), i.temporaryPause && ((i.temporaryPause = !1), i.options.onTypingResumed(i.arrayPos, i));
                              }, n);
                          }, n))
                        : this.setPauseStatus(e, t, !0);
                }),
                (t.keepTyping = function (e, t, i) {
                    0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
                    var s = e.substring(0, (t += i));
                    this.replaceText(s), this.typewrite(e, t);
                }),
                (t.doneTyping = function (e, t) {
                    var i = this;
                    this.options.onStringTyped(this.arrayPos, this),
                        this.toggleBlinking(!0),
                        (this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount)) ||
                            (this.timeout = setTimeout(function () {
                                i.backspace(e, t);
                            }, this.backDelay));
                }),
                (t.backspace = function (e, t) {
                    var i = this;
                    if (!0 !== this.pause.status) {
                        if (this.fadeOut) return this.initFadeOut();
                        this.toggleBlinking(!1);
                        var n = this.humanizer(this.backSpeed);
                        this.timeout = setTimeout(function () {
                            t = s.backSpaceHtmlChars(e, t, i);
                            var n = e.substring(0, t);
                            if ((i.replaceText(n), i.smartBackspace)) {
                                var r = i.strings[i.arrayPos + 1];
                                i.stopNum = r && n === r.substring(0, t) ? t : 0;
                            }
                            t > i.stopNum
                                ? (t--, i.backspace(e, t))
                                : t <= i.stopNum &&
                                  (i.arrayPos++, i.arrayPos === i.strings.length ? ((i.arrayPos = 0), i.options.onLastStringBackspaced(), i.shuffleStringsIfNeeded(), i.begin()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], t));
                        }, n);
                    } else this.setPauseStatus(e, t, !1);
                }),
                (t.complete = function () {
                    this.options.onComplete(this), this.loop ? this.curLoop++ : (this.typingComplete = !0);
                }),
                (t.setPauseStatus = function (e, t, i) {
                    (this.pause.typewrite = i), (this.pause.curString = e), (this.pause.curStrPos = t);
                }),
                (t.toggleBlinking = function (e) {
                    this.cursor && (this.pause.status || (this.cursorBlinking !== e && ((this.cursorBlinking = e), e ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink"))));
                }),
                (t.humanizer = function (e) {
                    return Math.round((Math.random() * e) / 2) + e;
                }),
                (t.shuffleStringsIfNeeded = function () {
                    this.shuffle &&
                        (this.sequence = this.sequence.sort(function () {
                            return Math.random() - 0.5;
                        }));
                }),
                (t.initFadeOut = function () {
                    var e = this;
                    return (
                        (this.el.className += " " + this.fadeOutClass),
                        this.cursor && (this.cursor.className += " " + this.fadeOutClass),
                        setTimeout(function () {
                            e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), (e.arrayPos = 0));
                        }, this.fadeOutDelay)
                    );
                }),
                (t.replaceText = function (e) {
                    this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? (this.el.value = e) : "html" === this.contentType ? (this.el.innerHTML = e) : (this.el.textContent = e);
                }),
                (t.bindFocusEvents = function () {
                    var e = this;
                    this.isInput &&
                        (this.el.addEventListener("focus", function (t) {
                            e.stop();
                        }),
                        this.el.addEventListener("blur", function (t) {
                            (e.el.value && 0 !== e.el.value.length) || e.start();
                        }));
                }),
                (t.insertCursor = function () {
                    this.showCursor &&
                        (this.cursor ||
                            ((this.cursor = document.createElement("span")),
                            (this.cursor.className = "typed-cursor"),
                            this.cursor.setAttribute("aria-hidden", !0),
                            (this.cursor.innerHTML = this.cursorChar),
                            this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
                }),
                e
            );
        })();
    }),
    (function () {
        "use strict";
        var e = 0,
            t = {};
        function i(s) {
            if (!s) throw Error("No options passed to Waypoint constructor");
            if (!s.element) throw Error("No element option passed to Waypoint constructor");
            if (!s.handler) throw Error("No handler option passed to Waypoint constructor");
            (this.key = "waypoint-" + e),
                (this.options = i.Adapter.extend({}, i.defaults, s)),
                (this.element = this.options.element),
                (this.adapter = new i.Adapter(this.element)),
                (this.callback = s.handler),
                (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
                (this.enabled = this.options.enabled),
                (this.triggerPoint = null),
                (this.group = i.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
                (this.context = i.Context.findOrCreateByElement(this.options.context)),
                i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]),
                this.group.add(this),
                this.context.add(this),
                (t[this.key] = this),
                (e += 1);
        }
        (i.prototype.queueTrigger = function (e) {
            this.group.queueTrigger(this, e);
        }),
            (i.prototype.trigger = function (e) {
                this.enabled && this.callback && this.callback.apply(this, e);
            }),
            (i.prototype.destroy = function () {
                this.context.remove(this), this.group.remove(this), delete t[this.key];
            }),
            (i.prototype.disable = function () {
                return (this.enabled = !1), this;
            }),
            (i.prototype.enable = function () {
                return this.context.refresh(), (this.enabled = !0), this;
            }),
            (i.prototype.next = function () {
                return this.group.next(this);
            }),
            (i.prototype.previous = function () {
                return this.group.previous(this);
            }),
            (i.invokeAll = function (e) {
                var i = [];
                for (var s in t) i.push(t[s]);
                for (var n = 0, r = i.length; n < r; n++) i[n][e]();
            }),
            (i.destroyAll = function () {
                i.invokeAll("destroy");
            }),
            (i.disableAll = function () {
                i.invokeAll("disable");
            }),
            (i.enableAll = function () {
                for (var e in (i.Context.refreshAll(), t)) t[e].enabled = !0;
                return this;
            }),
            (i.refreshAll = function () {
                i.Context.refreshAll();
            }),
            (i.viewportHeight = function () {
                return window.innerHeight || document.documentElement.clientHeight;
            }),
            (i.viewportWidth = function () {
                return document.documentElement.clientWidth;
            }),
            (i.adapters = []),
            (i.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }),
            (i.offsetAliases = {
                "bottom-in-view": function () {
                    return this.context.innerHeight() - this.adapter.outerHeight();
                },
                "right-in-view": function () {
                    return this.context.innerWidth() - this.adapter.outerWidth();
                },
            }),
            (window.Waypoint = i);
    })(),
    (function () {
        "use strict";
        function e(e) {
            window.setTimeout(e, 1e3 / 60);
        }
        var t = 0,
            i = {},
            s = window.Waypoint,
            n = window.onload;
        function r(e) {
            (this.element = e),
                (this.Adapter = s.Adapter),
                (this.adapter = new this.Adapter(e)),
                (this.key = "waypoint-context-" + t),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (e.waypointContextKey = this.key),
                (i[e.waypointContextKey] = this),
                (t += 1),
                s.windowContext || ((s.windowContext = !0), (s.windowContext = new r(window))),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        (r.prototype.add = function (e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[t][e.key] = e), this.refresh();
        }),
            (r.prototype.checkEmpty = function () {
                var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    t = this.Adapter.isEmptyObject(this.waypoints.vertical),
                    s = this.element == this.element.window;
                e && t && !s && (this.adapter.off(".waypoints"), delete i[this.key]);
            }),
            (r.prototype.createThrottledResizeHandler = function () {
                var e = this;
                function t() {
                    e.handleResize(), (e.didResize = !1);
                }
                this.adapter.on("resize.waypoints", function () {
                    e.didResize || ((e.didResize = !0), s.requestAnimationFrame(t));
                });
            }),
            (r.prototype.createThrottledScrollHandler = function () {
                var e = this;
                function t() {
                    e.handleScroll(), (e.didScroll = !1);
                }
                this.adapter.on("scroll.waypoints", function () {
                    (!e.didScroll || s.isTouch) && ((e.didScroll = !0), s.requestAnimationFrame(t));
                });
            }),
            (r.prototype.handleResize = function () {
                s.Context.refreshAll();
            }),
            (r.prototype.handleScroll = function () {
                var e = {},
                    t = {
                        horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" },
                        vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" },
                    };
                for (var i in t) {
                    var s = t[i],
                        n = s.newScroll > s.oldScroll ? s.forward : s.backward;
                    for (var r in this.waypoints[i]) {
                        var a = this.waypoints[i][r];
                        if (null !== a.triggerPoint) {
                            var o = s.oldScroll < a.triggerPoint,
                                l = s.newScroll >= a.triggerPoint,
                                d = o && l,
                                c = !o && !l;
                            (d || c) && (a.queueTrigger(n), (e[a.group.id] = a.group));
                        }
                    }
                }
                for (var u in e) e[u].flushTriggers();
                this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll };
            }),
            (r.prototype.innerHeight = function () {
                return this.element == this.element.window ? s.viewportHeight() : this.adapter.innerHeight();
            }),
            (r.prototype.remove = function (e) {
                delete this.waypoints[e.axis][e.key], this.checkEmpty();
            }),
            (r.prototype.innerWidth = function () {
                return this.element == this.element.window ? s.viewportWidth() : this.adapter.innerWidth();
            }),
            (r.prototype.destroy = function () {
                var e = [];
                for (var t in this.waypoints) for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
                for (var s = 0, n = e.length; s < n; s++) e[s].destroy();
            }),
            (r.prototype.refresh = function () {
                var e = this.element == this.element.window,
                    t = e ? void 0 : this.adapter.offset(),
                    i = {};
                for (var n in (this.handleScroll(),
                (o = {
                    horizontal: { contextOffset: e ? 0 : t.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" },
                    vertical: { contextOffset: e ? 0 : t.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" },
                }))) {
                    var r = o[n];
                    for (var a in this.waypoints[n]) {
                        var o,
                            l,
                            d,
                            c,
                            u,
                            h,
                            p = this.waypoints[n][a],
                            f = p.options.offset,
                            m = p.triggerPoint,
                            g = 0,
                            v = null == m;
                        p.element !== p.element.window && (g = p.adapter.offset()[r.offsetProp]),
                            "function" == typeof f ? (f = f.apply(p)) : "string" == typeof f && ((f = parseFloat(f)), p.options.offset.indexOf("%") > -1 && (f = Math.ceil((r.contextDimension * f) / 100))),
                            (l = r.contextScroll - r.contextOffset),
                            (p.triggerPoint = Math.floor(g + l - f)),
                            (d = m < r.oldScroll),
                            (c = p.triggerPoint >= r.oldScroll),
                            (u = d && c),
                            (h = !d && !c),
                            !v && u
                                ? (p.queueTrigger(r.backward), (i[p.group.id] = p.group))
                                : !v && h
                                ? (p.queueTrigger(r.forward), (i[p.group.id] = p.group))
                                : v && r.oldScroll >= p.triggerPoint && (p.queueTrigger(r.forward), (i[p.group.id] = p.group));
                    }
                }
                return (
                    s.requestAnimationFrame(function () {
                        for (var e in i) i[e].flushTriggers();
                    }),
                    this
                );
            }),
            (r.findOrCreateByElement = function (e) {
                return r.findByElement(e) || new r(e);
            }),
            (r.refreshAll = function () {
                for (var e in i) i[e].refresh();
            }),
            (r.findByElement = function (e) {
                return i[e.waypointContextKey];
            }),
            (window.onload = function () {
                n && n(), r.refreshAll();
            }),
            (s.requestAnimationFrame = function (t) {
                (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t);
            }),
            (s.Context = r);
    })(),
    (function () {
        "use strict";
        function e(e, t) {
            return e.triggerPoint - t.triggerPoint;
        }
        function t(e, t) {
            return t.triggerPoint - e.triggerPoint;
        }
        var i = { vertical: {}, horizontal: {} },
            s = window.Waypoint;
        function n(e) {
            (this.name = e.name), (this.axis = e.axis), (this.id = this.name + "-" + this.axis), (this.waypoints = []), this.clearTriggerQueues(), (i[this.axis][this.name] = this);
        }
        (n.prototype.add = function (e) {
            this.waypoints.push(e);
        }),
            (n.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (n.prototype.flushTriggers = function () {
                for (var i in this.triggerQueues) {
                    var s = this.triggerQueues[i],
                        n = "up" === i || "left" === i;
                    s.sort(n ? t : e);
                    for (var r = 0, a = s.length; r < a; r += 1) {
                        var o = s[r];
                        (o.options.continuous || r === s.length - 1) && o.trigger([i]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (n.prototype.next = function (t) {
                this.waypoints.sort(e);
                var i = s.Adapter.inArray(t, this.waypoints);
                return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1];
            }),
            (n.prototype.previous = function (t) {
                this.waypoints.sort(e);
                var i = s.Adapter.inArray(t, this.waypoints);
                return i ? this.waypoints[i - 1] : null;
            }),
            (n.prototype.queueTrigger = function (e, t) {
                this.triggerQueues[t].push(e);
            }),
            (n.prototype.remove = function (e) {
                var t = s.Adapter.inArray(e, this.waypoints);
                t > -1 && this.waypoints.splice(t, 1);
            }),
            (n.prototype.first = function () {
                return this.waypoints[0];
            }),
            (n.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (n.findOrCreate = function (e) {
                return i[e.axis][e.name] || new n(e);
            }),
            (s.Group = n);
    })(),
    (function () {
        "use strict";
        var e = window.Waypoint;
        function t(e) {
            return e === e.window;
        }
        function i(e) {
            return t(e) ? e : e.defaultView;
        }
        function s(e) {
            (this.element = e), (this.handlers = {});
        }
        (s.prototype.innerHeight = function () {
            return t(this.element) ? this.element.innerHeight : this.element.clientHeight;
        }),
            (s.prototype.innerWidth = function () {
                return t(this.element) ? this.element.innerWidth : this.element.clientWidth;
            }),
            (s.prototype.off = function (e, t) {
                function i(e, t, i) {
                    for (var s = 0, n = t.length - 1; s < n; s++) {
                        var r = t[s];
                        (i && i !== r) || e.removeEventListener(r);
                    }
                }
                var s = e.split("."),
                    n = s[0],
                    r = s[1],
                    a = this.element;
                if (r && this.handlers[r] && n) i(a, this.handlers[r][n], t), (this.handlers[r][n] = []);
                else if (n) for (var o in this.handlers) i(a, this.handlers[o][n] || [], t), (this.handlers[o][n] = []);
                else if (r && this.handlers[r]) {
                    for (var l in this.handlers[r]) i(a, this.handlers[r][l], t);
                    this.handlers[r] = {};
                }
            }),
            (s.prototype.offset = function () {
                if (!this.element.ownerDocument) return null;
                var e = this.element.ownerDocument.documentElement,
                    t = i(this.element.ownerDocument),
                    s = { top: 0, left: 0 };
                return this.element.getBoundingClientRect && (s = this.element.getBoundingClientRect()), { top: s.top + t.pageYOffset - e.clientTop, left: s.left + t.pageXOffset - e.clientLeft };
            }),
            (s.prototype.on = function (e, t) {
                var i = e.split("."),
                    s = i[0],
                    n = i[1] || "__default",
                    r = (this.handlers[n] = this.handlers[n] || {});
                (r[s] = r[s] || []).push(t), this.element.addEventListener(s, t);
            }),
            (s.prototype.outerHeight = function (e) {
                var i,
                    s = this.innerHeight();
                return e && !t(this.element) && ((s += parseInt((i = window.getComputedStyle(this.element)).marginTop, 10)), (s += parseInt(i.marginBottom, 10))), s;
            }),
            (s.prototype.outerWidth = function (e) {
                var i,
                    s = this.innerWidth();
                return e && !t(this.element) && ((s += parseInt((i = window.getComputedStyle(this.element)).marginLeft, 10)), (s += parseInt(i.marginRight, 10))), s;
            }),
            (s.prototype.scrollLeft = function () {
                var e = i(this.element);
                return e ? e.pageXOffset : this.element.scrollLeft;
            }),
            (s.prototype.scrollTop = function () {
                var e = i(this.element);
                return e ? e.pageYOffset : this.element.scrollTop;
            }),
            (s.extend = function () {
                var e = Array.prototype.slice.call(arguments);
                function t(e, t) {
                    if ("object" == typeof e && "object" == typeof t) for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                    return e;
                }
                for (var i = 1, s = e.length; i < s; i++) t(e[0], e[i]);
                return e[0];
            }),
            (s.inArray = function (e, t, i) {
                return null == t ? -1 : t.indexOf(e, i);
            }),
            (s.isEmptyObject = function (e) {
                for (var t in e) return !1;
                return !0;
            }),
            e.adapters.push({ name: "noframework", Adapter: s }),
            (e.Adapter = s);
    })(),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t());
    })(this, function () {
        "use strict";
        function e(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
        }
        function t(i, s) {
            void 0 === i && (i = {}),
                void 0 === s && (s = {}),
                Object.keys(s).forEach((n) => {
                    void 0 === i[n] ? (i[n] = s[n]) : e(s[n]) && e(i[n]) && Object.keys(s[n]).length > 0 && t(i[n], s[n]);
                });
        }
        let i = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: { blur() {}, nodeName: "" },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({ initEvent() {} }),
            createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
        };
        function s() {
            let e = "undefined" != typeof document ? document : {};
            return t(e, i), e;
        }
        let n = {
            document: i,
            navigator: { userAgent: "" },
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            history: { replaceState() {}, pushState() {}, go() {}, back() {} },
            CustomEvent: function () {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({ getPropertyValue: () => "" }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: (e) => ("undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e);
            },
        };
        function r() {
            let e = "undefined" != typeof window ? window : {};
            return t(e, n), e;
        }
        class a extends Array {
            constructor(e) {
                "number" == typeof e
                    ? super(e)
                    : (super(...(e || [])),
                      (function (e) {
                          let t = e.__proto__;
                          Object.defineProperty(e, "__proto__", {
                              get: () => t,
                              set(e) {
                                  t.__proto__ = e;
                              },
                          });
                      })(this));
            }
        }
        function o(e) {
            void 0 === e && (e = []);
            let t = [];
            return (
                e.forEach((e) => {
                    Array.isArray(e) ? t.push(...o(e)) : t.push(e);
                }),
                t
            );
        }
        function l(e, t) {
            return Array.prototype.filter.call(e, t);
        }
        function d(e, t) {
            let i = r(),
                n = s(),
                o = [];
            if (!t && e instanceof a) return e;
            if (!e) return new a(o);
            if ("string" == typeof e) {
                let l = e.trim();
                if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
                    let d = "div";
                    0 === l.indexOf("<li") && (d = "ul"),
                        0 === l.indexOf("<tr") && (d = "tbody"),
                        (0 !== l.indexOf("<td") && 0 !== l.indexOf("<th")) || (d = "tr"),
                        0 === l.indexOf("<tbody") && (d = "table"),
                        0 === l.indexOf("<option") && (d = "select");
                    let c = n.createElement(d);
                    c.innerHTML = l;
                    for (let u = 0; u < c.childNodes.length; u += 1) o.push(c.childNodes[u]);
                } else
                    o = (function (e, t) {
                        if ("string" != typeof e) return [e];
                        let i = [],
                            s = t.querySelectorAll(e);
                        for (let n = 0; n < s.length; n += 1) i.push(s[n]);
                        return i;
                    })(e.trim(), t || n);
            } else if (e.nodeType || e === i || e === n) o.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof a) return e;
                o = e;
            }
            return new a(
                (function (e) {
                    let t = [];
                    for (let i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
                    return t;
                })(o)
            );
        }
        d.fn = a.prototype;
        let c = {
            addClass: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let s = o(t.map((e) => e.split(" ")));
                return (
                    this.forEach((e) => {
                        e.classList.add(...s);
                    }),
                    this
                );
            },
            removeClass: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let s = o(t.map((e) => e.split(" ")));
                return (
                    this.forEach((e) => {
                        e.classList.remove(...s);
                    }),
                    this
                );
            },
            hasClass: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let s = o(t.map((e) => e.split(" ")));
                return l(this, (e) => s.filter((t) => e.classList.contains(t)).length > 0).length > 0;
            },
            toggleClass: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let s = o(t.map((e) => e.split(" ")));
                this.forEach((e) => {
                    s.forEach((t) => {
                        e.classList.toggle(t);
                    });
                });
            },
            attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (let i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(e, t);
                    else for (let s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
                return this;
            },
            removeAttr: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this;
            },
            transform: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this;
            },
            transition: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this;
            },
            on: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let [s, n, r, a] = t;
                function o(e) {
                    let t = e.target;
                    if (!t) return;
                    let i = e.target.dom7EventData || [];
                    if ((0 > i.indexOf(e) && i.unshift(e), d(t).is(n))) r.apply(t, i);
                    else {
                        let s = d(t).parents();
                        for (let a = 0; a < s.length; a += 1) d(s[a]).is(n) && r.apply(s[a], i);
                    }
                }
                function l(e) {
                    let t = (e && e.target && e.target.dom7EventData) || [];
                    0 > t.indexOf(e) && t.unshift(e), r.apply(this, t);
                }
                "function" == typeof t[1] && (([s, r, a] = t), (n = void 0)), a || (a = !1);
                let c = s.split(" "),
                    u;
                for (let h = 0; h < this.length; h += 1) {
                    let p = this[h];
                    if (n)
                        for (u = 0; u < c.length; u += 1) {
                            let f = c[u];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({ listener: r, proxyListener: o }), p.addEventListener(f, o, a);
                        }
                    else
                        for (u = 0; u < c.length; u += 1) {
                            let m = c[u];
                            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[m] || (p.dom7Listeners[m] = []), p.dom7Listeners[m].push({ listener: r, proxyListener: l }), p.addEventListener(m, l, a);
                        }
                }
                return this;
            },
            off: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let [s, n, r, a] = t;
                "function" == typeof t[1] && (([s, r, a] = t), (n = void 0)), a || (a = !1);
                let o = s.split(" ");
                for (let l = 0; l < o.length; l += 1) {
                    let d = o[l];
                    for (let c = 0; c < this.length; c += 1) {
                        let u = this[c],
                            h;
                        if ((!n && u.dom7Listeners ? (h = u.dom7Listeners[d]) : n && u.dom7LiveListeners && (h = u.dom7LiveListeners[d]), h && h.length))
                            for (let p = h.length - 1; p >= 0; p -= 1) {
                                let f = h[p];
                                (r && f.listener === r) || (r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r)
                                    ? (u.removeEventListener(d, f.proxyListener, a), h.splice(p, 1))
                                    : r || (u.removeEventListener(d, f.proxyListener, a), h.splice(p, 1));
                            }
                    }
                }
                return this;
            },
            trigger: function () {
                let e = r();
                for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                let n = i[0].split(" "),
                    a = i[1];
                for (let o = 0; o < n.length; o += 1) {
                    let l = n[o];
                    for (let d = 0; d < this.length; d += 1) {
                        let c = this[d];
                        if (e.CustomEvent) {
                            let u = new e.CustomEvent(l, { detail: a, bubbles: !0, cancelable: !0 });
                            (c.dom7EventData = i.filter((e, t) => t > 0)), c.dispatchEvent(u), (c.dom7EventData = []), delete c.dom7EventData;
                        }
                    }
                }
                return this;
            },
            transitionEnd: function (e) {
                let t = this;
                return (
                    e &&
                        t.on("transitionend", function i(s) {
                            s.target === this && (e.call(this, s), t.off("transitionend", i));
                        }),
                    this
                );
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        let t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        let t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            styles: function () {
                let e = r();
                return this[0] ? e.getComputedStyle(this[0], null) : {};
            },
            offset: function () {
                if (this.length > 0) {
                    let e = r(),
                        t = s(),
                        i = this[0],
                        n = i.getBoundingClientRect(),
                        a = t.body,
                        o = i.clientTop || a.clientTop || 0,
                        l = i.clientLeft || a.clientLeft || 0,
                        d = i === e ? e.scrollY : i.scrollTop,
                        c = i === e ? e.scrollX : i.scrollLeft;
                    return { top: n.top + d - o, left: n.left + c - l };
                }
                return null;
            },
            css: function (e, t) {
                let i = r(),
                    s;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (s = 0; s < this.length; s += 1) for (let n in e) this[s].style[n] = e[n];
                        return this;
                    }
                    if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                return this;
            },
            each: function (e) {
                return (
                    e &&
                        this.forEach((t, i) => {
                            e.apply(t, [t, i]);
                        }),
                    this
                );
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this;
            },
            is: function (e) {
                let t = r(),
                    i = s(),
                    n = this[0],
                    o,
                    l;
                if (!n || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (n.matches) return n.matches(e);
                    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                    if (n.msMatchesSelector) return n.msMatchesSelector(e);
                    for (o = d(e), l = 0; l < o.length; l += 1) if (o[l] === n) return !0;
                    return !1;
                }
                if (e === i) return n === i;
                if (e === t) return n === t;
                if (e.nodeType || e instanceof a) {
                    for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1) if (o[l] === n) return !0;
                }
                return !1;
            },
            index: function () {
                let e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                let t = this.length;
                if (e > t - 1) return d([]);
                if (e < 0) {
                    let i = t + e;
                    return d(i < 0 ? [] : [this[i]]);
                }
                return d([this[e]]);
            },
            append: function () {
                let e,
                    t = s();
                for (let i = 0; i < arguments.length; i += 1) {
                    e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    for (let n = 0; n < this.length; n += 1)
                        if ("string" == typeof e) {
                            let r = t.createElement("div");
                            for (r.innerHTML = e; r.firstChild; ) this[n].appendChild(r.firstChild);
                        } else if (e instanceof a) for (let o = 0; o < e.length; o += 1) this[n].appendChild(e[o]);
                        else this[n].appendChild(e);
                }
                return this;
            },
            prepend: function (e) {
                let t = s(),
                    i,
                    n;
                for (i = 0; i < this.length; i += 1)
                    if ("string" == typeof e) {
                        let r = t.createElement("div");
                        for (r.innerHTML = e, n = r.childNodes.length - 1; n >= 0; n -= 1) this[i].insertBefore(r.childNodes[n], this[i].childNodes[0]);
                    } else if (e instanceof a) for (n = 0; n < e.length; n += 1) this[i].insertBefore(e[n], this[i].childNodes[0]);
                    else this[i].insertBefore(e, this[i].childNodes[0]);
                return this;
            },
            next: function (e) {
                return this.length > 0 ? (e ? (this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([])) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([])) : d([]);
            },
            nextAll: function (e) {
                let t = [],
                    i = this[0];
                if (!i) return d([]);
                for (; i.nextElementSibling; ) {
                    let s = i.nextElementSibling;
                    e ? d(s).is(e) && t.push(s) : t.push(s), (i = s);
                }
                return d(t);
            },
            prev: function (e) {
                if (this.length > 0) {
                    let t = this[0];
                    return e ? (t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([])) : t.previousElementSibling ? d([t.previousElementSibling]) : d([]);
                }
                return d([]);
            },
            prevAll: function (e) {
                let t = [],
                    i = this[0];
                if (!i) return d([]);
                for (; i.previousElementSibling; ) {
                    let s = i.previousElementSibling;
                    e ? d(s).is(e) && t.push(s) : t.push(s), (i = s);
                }
                return d(t);
            },
            parent: function (e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? d(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return d(t);
            },
            parents: function (e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].parentNode;
                    for (; s; ) e ? d(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
                }
                return d(t);
            },
            closest: function (e) {
                let t = this;
                return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
            },
            find: function (e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].querySelectorAll(e);
                    for (let n = 0; n < s.length; n += 1) t.push(s[n]);
                }
                return d(t);
            },
            children: function (e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].children;
                    for (let n = 0; n < s.length; n += 1) (e && !d(s[n]).is(e)) || t.push(s[n]);
                }
                return d(t);
            },
            filter: function (e) {
                return d(l(this, e));
            },
            remove: function () {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            },
        };
        function u(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t);
        }
        function h() {
            return Date.now();
        }
        function p(e, t) {
            void 0 === t && (t = "x");
            let i = r(),
                s,
                n,
                a,
                o = (function (e) {
                    let t = r(),
                        i;
                    return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i;
                })(e);
            return (
                i.WebKitCSSMatrix
                    ? ((n = o.transform || o.webkitTransform).split(",").length > 6 &&
                          (n = n
                              .split(", ")
                              .map((e) => e.replace(",", "."))
                              .join(", ")),
                      (a = new i.WebKitCSSMatrix("none" === n ? "" : n)))
                    : (s = (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                "x" === t && (n = i.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
                "y" === t && (n = i.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
                n || 0
            );
        }
        function f(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
        }
        function m(e) {
            return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
        }
        function g() {
            let e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < arguments.length; i += 1) {
                let s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (null != s && !m(s)) {
                    let n = Object.keys(Object(s)).filter((e) => 0 > t.indexOf(e));
                    for (let r = 0, a = n.length; r < a; r += 1) {
                        let o = n[r],
                            l = Object.getOwnPropertyDescriptor(s, o);
                        void 0 !== l && l.enumerable && (f(e[o]) && f(s[o]) ? (s[o].__swiper__ ? (e[o] = s[o]) : g(e[o], s[o])) : !f(e[o]) && f(s[o]) ? ((e[o] = {}), s[o].__swiper__ ? (e[o] = s[o]) : g(e[o], s[o])) : (e[o] = s[o]));
                    }
                }
            }
            return e;
        }
        function v(e, t, i) {
            e.style.setProperty(t, i);
        }
        function $(e) {
            let { swiper: t, targetPosition: i, side: s } = e,
                n = r(),
                a = -t.translate,
                o,
                l = null,
                d = t.params.speed;
            (t.wrapperEl.style.scrollSnapType = "none"), n.cancelAnimationFrame(t.cssModeFrameID);
            let c = i > a ? "next" : "prev",
                u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
                h = () => {
                    (o = new Date().getTime()), null === l && (l = o);
                    let e = Math.max(Math.min((o - l) / d, 1), 0),
                        r = a + (0.5 - Math.cos(e * Math.PI) / 2) * (i - a);
                    if ((u(r, i) && (r = i), t.wrapperEl.scrollTo({ [s]: r }), u(r, i)))
                        return (
                            (t.wrapperEl.style.overflow = "hidden"),
                            (t.wrapperEl.style.scrollSnapType = ""),
                            setTimeout(() => {
                                (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [s]: r });
                            }),
                            void n.cancelAnimationFrame(t.cssModeFrameID)
                        );
                    t.cssModeFrameID = n.requestAnimationFrame(h);
                };
            h();
        }
        let y, b, w;
        function _() {
            return (
                y ||
                    (y = (function () {
                        let e = r(),
                            t = s();
                        return {
                            smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                            touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                            passiveListener: (function () {
                                let t = !1;
                                try {
                                    let i = Object.defineProperty({}, "passive", {
                                        get() {
                                            t = !0;
                                        },
                                    });
                                    e.addEventListener("testPassiveListener", null, i);
                                } catch (s) {}
                                return t;
                            })(),
                            gestures: "ongesturestart" in e,
                        };
                    })()),
                y
            );
        }
        function x(e) {
            let { swiper: t, runCallbacks: i, direction: s, step: n } = e,
                { activeIndex: r, previousIndex: a } = t,
                o = s;
            if ((o || (o = r > a ? "next" : r < a ? "prev" : "reset"), t.emit(`transition${n}`), i && r !== a)) {
                if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
                t.emit(`slideChangeTransition${n}`), "next" === o ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`);
            }
        }
        function E(e) {
            let t = this,
                i = s(),
                n = r(),
                a = t.touchEventsData,
                { params: o, touches: l, enabled: c } = t;
            if (!c || (t.animating && o.preventInteractionOnTransition)) return;
            !t.animating && o.cssMode && o.loop && t.loopFix();
            let u = e;
            u.originalEvent && (u = u.originalEvent);
            let p = d(u.target);
            if (
                ("wrapper" === o.touchEventsTarget && !p.closest(t.wrapperEl).length) ||
                ((a.isTouchEvent = "touchstart" === u.type), !a.isTouchEvent && "which" in u && 3 === u.which) ||
                (!a.isTouchEvent && "button" in u && u.button > 0) ||
                (a.isTouched && a.isMoved)
            )
                return;
            let f = !!o.noSwipingClass && "" !== o.noSwipingClass,
                m = e.composedPath ? e.composedPath() : e.path;
            f && u.target && u.target.shadowRoot && m && (p = d(m[0]));
            let g = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
                v = !(!u.target || !u.target.shadowRoot);
            if (
                o.noSwiping &&
                (v
                    ? (function (e, t) {
                          return (
                              void 0 === t && (t = this),
                              (function t(i) {
                                  if (!i || i === s() || i === r()) return null;
                                  i.assignedSlot && (i = i.assignedSlot);
                                  let n = i.closest(e);
                                  return n || i.getRootNode ? n || t(i.getRootNode().host) : null;
                              })(t)
                          );
                      })(g, p[0])
                    : p.closest(g)[0])
            )
                return void (t.allowClick = !0);
            if (o.swipeHandler && !p.closest(o.swipeHandler)[0]) return;
            (l.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX), (l.currentY = "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY);
            let $ = l.currentX,
                y = l.currentY,
                b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                w = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
            if (b && ($ <= w || $ >= n.innerWidth - w)) {
                if ("prevent" !== b) return;
                e.preventDefault();
            }
            if (
                (Object.assign(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                (l.startX = $),
                (l.startY = y),
                (a.touchStartTime = h()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                o.threshold > 0 && (a.allowThresholdMove = !1),
                "touchstart" !== u.type)
            ) {
                let _ = !0;
                p.is(a.focusableElements) && ((_ = !1), "SELECT" === p[0].nodeName && (a.isTouched = !1)), i.activeElement && d(i.activeElement).is(a.focusableElements) && i.activeElement !== p[0] && i.activeElement.blur();
                let x = _ && t.allowTouchMove && o.touchStartPreventDefault;
                (o.touchStartForcePreventDefault || x) && !p[0].isContentEditable && u.preventDefault();
            }
            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", u);
        }
        function C(e) {
            let t = s(),
                i = this,
                n = i.touchEventsData,
                { params: r, touches: a, rtlTranslate: o, enabled: l } = i;
            if (!l) return;
            let c = e;
            if ((c.originalEvent && (c = c.originalEvent), !n.isTouched)) return void (n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", c));
            if (n.isTouchEvent && "touchmove" !== c.type) return;
            let u = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                p = "touchmove" === c.type ? u.pageX : c.pageX,
                f = "touchmove" === c.type ? u.pageY : c.pageY;
            if (c.preventedByNestedSwiper) return (a.startX = p), void (a.startY = f);
            if (!i.allowTouchMove) return d(c.target).is(n.focusableElements) || (i.allowClick = !1), void (n.isTouched && (Object.assign(a, { startX: p, startY: f, currentX: p, currentY: f }), (n.touchStartTime = h())));
            if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
                if (i.isVertical()) {
                    if ((f < a.startY && i.translate <= i.maxTranslate()) || (f > a.startY && i.translate >= i.minTranslate())) return (n.isTouched = !1), void (n.isMoved = !1);
                } else if ((p < a.startX && i.translate <= i.maxTranslate()) || (p > a.startX && i.translate >= i.minTranslate())) return;
            }
            if (n.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(n.focusableElements)) return (n.isMoved = !0), void (i.allowClick = !1);
            if ((n.allowTouchCallbacks && i.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1)) return;
            (a.currentX = p), (a.currentY = f);
            let m = a.currentX - a.startX,
                g = a.currentY - a.startY;
            if (i.params.threshold && Math.sqrt(m ** 2 + g ** 2) < i.params.threshold) return;
            if (void 0 === n.isScrolling) {
                let v;
                (i.isHorizontal() && a.currentY === a.startY) || (i.isVertical() && a.currentX === a.startX)
                    ? (n.isScrolling = !1)
                    : m * m + g * g >= 25 && ((v = (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI), (n.isScrolling = i.isHorizontal() ? v > r.touchAngle : 90 - v > r.touchAngle));
            }
            if ((n.isScrolling && i.emit("touchMoveOpposite", c), void 0 === n.startMoving && ((a.currentX === a.startX && a.currentY === a.startY) || (n.startMoving = !0)), n.isScrolling)) return void (n.isTouched = !1);
            if (!n.startMoving) return;
            (i.allowClick = !1),
                !r.cssMode && c.cancelable && c.preventDefault(),
                r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
                n.isMoved ||
                    (r.loop && !r.cssMode && i.loopFix(),
                    (n.startTranslate = i.getTranslate()),
                    i.setTransition(0),
                    i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    (n.allowMomentumBounce = !1),
                    r.grabCursor && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!0),
                    i.emit("sliderFirstMove", c)),
                i.emit("sliderMove", c),
                (n.isMoved = !0);
            let $ = i.isHorizontal() ? m : g;
            (a.diff = $), ($ *= r.touchRatio), o && ($ = -$), (i.swipeDirection = $ > 0 ? "prev" : "next"), (n.currentTranslate = $ + n.startTranslate);
            let y = !0,
                b = r.resistanceRatio;
            if (
                (r.touchReleaseOnEdges && (b = 0),
                $ > 0 && n.currentTranslate > i.minTranslate()
                    ? ((y = !1), r.resistance && (n.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + n.startTranslate + $) ** b))
                    : $ < 0 && n.currentTranslate < i.maxTranslate() && ((y = !1), r.resistance && (n.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - n.startTranslate - $) ** b)),
                y && (c.preventedByNestedSwiper = !0),
                !i.allowSlideNext && "next" === i.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
                !i.allowSlidePrev && "prev" === i.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
                i.allowSlidePrev || i.allowSlideNext || (n.currentTranslate = n.startTranslate),
                r.threshold > 0)
            ) {
                if (!(Math.abs($) > r.threshold || n.allowThresholdMove)) return void (n.currentTranslate = n.startTranslate);
                if (!n.allowThresholdMove)
                    return (n.allowThresholdMove = !0), (a.startX = a.currentX), (a.startY = a.currentY), (n.currentTranslate = n.startTranslate), void (a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
            }
            r.followFinger &&
                !r.cssMode &&
                (((r.freeMode && r.freeMode.enabled && i.freeMode) || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()),
                i.params.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
                i.updateProgress(n.currentTranslate),
                i.setTranslate(n.currentTranslate));
        }
        function S(e) {
            let t = this,
                i = t.touchEventsData,
                { params: s, touches: n, rtlTranslate: r, slidesGrid: a, enabled: o } = t;
            if (!o) return;
            let l = e;
            if ((l.originalEvent && (l = l.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", l), (i.allowTouchCallbacks = !1), !i.isTouched))
                return i.isMoved && s.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
            s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            let d = h(),
                c = d - i.touchStartTime;
            if (t.allowClick) {
                let p = l.path || (l.composedPath && l.composedPath());
                t.updateClickedSlide((p && p[0]) || l.target), t.emit("tap click", l), c < 300 && d - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", l);
            }
            if (
                ((i.lastClickTime = h()),
                u(() => {
                    t.destroyed || (t.allowClick = !0);
                }),
                !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate)
            )
                return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
            let f;
            if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (f = s.followFinger ? (r ? t.translate : -t.translate) : -i.currentTranslate), s.cssMode)) return;
            if (t.params.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: f });
            let m = 0,
                g = t.slidesSizesGrid[0];
            for (let v = 0; v < a.length; v += v < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                let $ = v < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== a[v + $] ? f >= a[v] && f < a[v + $] && ((m = v), (g = a[v + $] - a[v])) : f >= a[v] && ((m = v), (g = a[a.length - 1] - a[a.length - 2]));
            }
            let y = null,
                b = null;
            s.rewind && (t.isBeginning ? (b = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (y = 0));
            let w = (f - a[m]) / g,
                _ = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (c > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (w >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? y : m + _) : t.slideTo(m)),
                    "prev" === t.swipeDirection && (w > 1 - s.longSwipesRatio ? t.slideTo(m + _) : null !== b && w < 0 && Math.abs(w) > s.longSwipesRatio ? t.slideTo(b) : t.slideTo(m));
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
                    ? l.target === t.navigation.nextEl
                        ? t.slideTo(m + _)
                        : t.slideTo(m)
                    : ("next" === t.swipeDirection && t.slideTo(null !== y ? y : m + _), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : m));
            }
        }
        function T() {
            let e = this,
                { params: t, el: i } = e;
            if (i && 0 === i.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            let { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
            (e.allowSlideNext = !0),
                (e.allowSlidePrev = !0),
                e.updateSize(),
                e.updateSlides(),
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
                (e.allowSlidePrev = n),
                (e.allowSlideNext = s),
                e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
        function k(e) {
            this.enabled && (this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
        }
        function A() {
            let e = this,
                { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
            if (!s) return;
            let n;
            (e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop), 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            let r = e.maxTranslate() - e.minTranslate();
            (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
        }
        Object.keys(c).forEach((e) => {
            Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
        });
        let L = !1;
        function P() {}
        let z = (e, t) => {
                let i = s(),
                    { params: n, touchEvents: r, el: a, wrapperEl: o, device: l, support: d } = e,
                    c = !!n.nested,
                    u = "on" === t ? "addEventListener" : "removeEventListener",
                    h = t;
                if (d.touch) {
                    let p = !("touchstart" !== r.start || !d.passiveListener || !n.passiveListeners) && { passive: !0, capture: !1 };
                    a[u](r.start, e.onTouchStart, p), a[u](r.move, e.onTouchMove, d.passiveListener ? { passive: !1, capture: c } : c), a[u](r.end, e.onTouchEnd, p), r.cancel && a[u](r.cancel, e.onTouchEnd, p);
                } else a[u](r.start, e.onTouchStart, !1), i[u](r.move, e.onTouchMove, c), i[u](r.end, e.onTouchEnd, !1);
                (n.preventClicks || n.preventClicksPropagation) && a[u]("click", e.onClick, !0),
                    n.cssMode && o[u]("scroll", e.onScroll),
                    n.updateOnWindowResize ? e[h](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", T, !0) : e[h]("observerUpdate", T, !0);
            },
            I = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var O = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: !0,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1,
        };
        let M = {
                eventsEmitter: {
                    on(e, t, i) {
                        let s = this;
                        if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                        let n = i ? "unshift" : "push";
                        return (
                            e.split(" ").forEach((e) => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t);
                            }),
                            s
                        );
                    },
                    once(e, t, i) {
                        let s = this;
                        if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                        function n() {
                            s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                            for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                            t.apply(s, r);
                        }
                        return (n.__emitterProxy = t), s.on(e, n, i);
                    },
                    onAny(e, t) {
                        return !this.eventsListeners || this.destroyed || "function" != typeof e || (0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e)), this;
                    },
                    offAny(e) {
                        if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                        let t = this.eventsAnyListeners.indexOf(e);
                        return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
                    },
                    off(e, t) {
                        let i = this;
                        return (
                            !i.eventsListeners ||
                                i.destroyed ||
                                (i.eventsListeners &&
                                    e.split(" ").forEach((e) => {
                                        void 0 === t
                                            ? (i.eventsListeners[e] = [])
                                            : i.eventsListeners[e] &&
                                              i.eventsListeners[e].forEach((s, n) => {
                                                  (s === t || (s.__emitterProxy && s.__emitterProxy === t)) && i.eventsListeners[e].splice(n, 1);
                                              });
                                    })),
                            i
                        );
                    },
                    emit() {
                        let e = this;
                        if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
                        let t, i, s;
                        for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (
                            "string" == typeof r[0] || Array.isArray(r[0]) ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e)) : ((t = r[0].events), (i = r[0].data), (s = r[0].context || e)),
                            i.unshift(s),
                            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
                                e.eventsAnyListeners &&
                                    e.eventsAnyListeners.length &&
                                    e.eventsAnyListeners.forEach((e) => {
                                        e.apply(s, [t, ...i]);
                                    }),
                                    e.eventsListeners &&
                                        e.eventsListeners[t] &&
                                        e.eventsListeners[t].forEach((e) => {
                                            e.apply(s, i);
                                        });
                            }),
                            e
                        );
                    },
                },
                update: {
                    updateSize: function () {
                        let e,
                            t,
                            i = this.$el;
                        (e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth),
                            (t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight),
                            (0 === e && this.isHorizontal()) ||
                                (0 === t && this.isVertical()) ||
                                ((e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10)),
                                (t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10)),
                                Number.isNaN(e) && (e = 0),
                                Number.isNaN(t) && (t = 0),
                                Object.assign(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
                    },
                    updateSlides: function () {
                        let e = this;
                        function t(t) {
                            return e.isHorizontal()
                                ? t
                                : {
                                      width: "height",
                                      "margin-top": "margin-left",
                                      "margin-bottom ": "margin-right",
                                      "margin-left": "margin-top",
                                      "margin-right": "margin-bottom",
                                      "padding-left": "padding-top",
                                      "padding-right": "padding-bottom",
                                      marginRight: "marginBottom",
                                  }[t];
                        }
                        function i(e, i) {
                            return parseFloat(e.getPropertyValue(t(i)) || 0);
                        }
                        let s = e.params,
                            { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: o } = e,
                            l = e.virtual && s.virtual.enabled,
                            d = l ? e.virtual.slides.length : e.slides.length,
                            c = n.children(`.${e.params.slideClass}`),
                            u = l ? e.virtual.slides.length : c.length,
                            h = [],
                            p = [],
                            f = [],
                            m = s.slidesOffsetBefore;
                        "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
                        let g = s.slidesOffsetAfter;
                        "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
                        let $ = e.snapGrid.length,
                            y = e.slidesGrid.length,
                            b = s.spaceBetween,
                            w = -m,
                            _ = 0,
                            x = 0;
                        if (void 0 === r) return;
                        "string" == typeof b && b.indexOf("%") >= 0 && (b = (parseFloat(b.replace("%", "")) / 100) * r),
                            (e.virtualSize = -b),
                            a ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                            s.centeredSlides && s.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
                        let E = s.grid && s.grid.rows > 1 && e.grid,
                            C;
                        E && e.grid.initSlides(u);
                        let S = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e) => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
                        for (let T = 0; T < u; T += 1) {
                            C = 0;
                            let k = c.eq(T);
                            if ((E && e.grid.updateSlide(T, k, u, t), "none" !== k.css("display"))) {
                                if ("auto" === s.slidesPerView) {
                                    S && (c[T].style[t("width")] = "");
                                    let A = getComputedStyle(k[0]),
                                        L = k[0].style.transform,
                                        P = k[0].style.webkitTransform;
                                    if ((L && (k[0].style.transform = "none"), P && (k[0].style.webkitTransform = "none"), s.roundLengths)) C = e.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0);
                                    else {
                                        let z = i(A, "width"),
                                            I = i(A, "padding-left"),
                                            O = i(A, "padding-right"),
                                            M = i(A, "margin-left"),
                                            D = i(A, "margin-right"),
                                            N = A.getPropertyValue("box-sizing");
                                        if (N && "border-box" === N) C = z + M + D;
                                        else {
                                            let { clientWidth: H, offsetWidth: W } = k[0];
                                            C = z + I + O + M + D + (W - H);
                                        }
                                    }
                                    L && (k[0].style.transform = L), P && (k[0].style.webkitTransform = P), s.roundLengths && (C = Math.floor(C));
                                } else (C = (r - (s.slidesPerView - 1) * b) / s.slidesPerView), s.roundLengths && (C = Math.floor(C)), c[T] && (c[T].style[t("width")] = `${C}px`);
                                c[T] && (c[T].swiperSlideSize = C),
                                    f.push(C),
                                    s.centeredSlides
                                        ? ((w = w + C / 2 + _ / 2 + b),
                                          0 === _ && 0 !== T && (w = w - r / 2 - b),
                                          0 === T && (w = w - r / 2 - b),
                                          0.001 > Math.abs(w) && (w = 0),
                                          s.roundLengths && (w = Math.floor(w)),
                                          x % s.slidesPerGroup == 0 && h.push(w),
                                          p.push(w))
                                        : (s.roundLengths && (w = Math.floor(w)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && h.push(w), p.push(w), (w = w + C + b)),
                                    (e.virtualSize += C + b),
                                    (_ = C),
                                    (x += 1);
                            }
                        }
                        if (
                            ((e.virtualSize = Math.max(e.virtualSize, r) + g),
                            a && o && ("slide" === s.effect || "coverflow" === s.effect) && n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
                            s.setWrapperSize && n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
                            E && e.grid.updateWrapperSize(C, h, t),
                            !s.centeredSlides)
                        ) {
                            let B = [];
                            for (let q = 0; q < h.length; q += 1) {
                                let Y = h[q];
                                s.roundLengths && (Y = Math.floor(Y)), h[q] <= e.virtualSize - r && B.push(Y);
                            }
                            (h = B), Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - r);
                        }
                        if ((0 === h.length && (h = [0]), 0 !== s.spaceBetween)) {
                            let R = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                            c.filter((e, t) => !s.cssMode || t !== c.length - 1).css({ [R]: `${b}px` });
                        }
                        if (s.centeredSlides && s.centeredSlidesBounds) {
                            let X = 0;
                            f.forEach((e) => {
                                X += e + (s.spaceBetween ? s.spaceBetween : 0);
                            }),
                                (X -= s.spaceBetween);
                            let j = X - r;
                            h = h.map((e) => (e < 0 ? -m : e > j ? j + g : e));
                        }
                        if (s.centerInsufficientSlides) {
                            let F = 0;
                            if (
                                (f.forEach((e) => {
                                    F += e + (s.spaceBetween ? s.spaceBetween : 0);
                                }),
                                (F -= s.spaceBetween) < r)
                            ) {
                                let G = (r - F) / 2;
                                h.forEach((e, t) => {
                                    h[t] = e - G;
                                }),
                                    p.forEach((e, t) => {
                                        p[t] = e + G;
                                    });
                            }
                        }
                        if ((Object.assign(e, { slides: c, snapGrid: h, slidesGrid: p, slidesSizesGrid: f }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)) {
                            v(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                            let V = -e.snapGrid[0],
                                U = -e.slidesGrid[0];
                            (e.snapGrid = e.snapGrid.map((e) => e + V)), (e.slidesGrid = e.slidesGrid.map((e) => e + U));
                        }
                        if (
                            (u !== d && e.emit("slidesLengthChange"),
                            h.length !== $ && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                            p.length !== y && e.emit("slidesGridLengthChange"),
                            s.watchSlidesProgress && e.updateSlidesOffset(),
                            !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
                        ) {
                            let Q = `${s.containerModifierClass}backface-hidden`,
                                K = e.$el.hasClass(Q);
                            u <= s.maxBackfaceHiddenSlides ? K || e.$el.addClass(Q) : K && e.$el.removeClass(Q);
                        }
                    },
                    updateAutoHeight: function (e) {
                        let t = this,
                            i = [],
                            s = t.virtual && t.params.virtual.enabled,
                            n,
                            r = 0;
                        "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                        let a = (e) => (s ? t.slides.filter((t) => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0]);
                        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
                            if (t.params.centeredSlides)
                                (t.visibleSlides || d([])).each((e) => {
                                    i.push(e);
                                });
                            else
                                for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                                    let o = t.activeIndex + n;
                                    if (o > t.slides.length && !s) break;
                                    i.push(a(o));
                                }
                        } else i.push(a(t.activeIndex));
                        for (n = 0; n < i.length; n += 1)
                            if (void 0 !== i[n]) {
                                let l = i[n].offsetHeight;
                                r = l > r ? l : r;
                            }
                        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
                    },
                    updateSlidesOffset: function () {
                        let e = this.slides;
                        for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
                    },
                    updateSlidesProgress: function (e) {
                        void 0 === e && (e = (this && this.translate) || 0);
                        let t = this,
                            i = t.params,
                            { slides: s, rtlTranslate: n, snapGrid: r } = t;
                        if (0 === s.length) return;
                        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                        let a = -e;
                        n && (a = e), s.removeClass(i.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
                        for (let o = 0; o < s.length; o += 1) {
                            let l = s[o],
                                c = l.swiperSlideOffset;
                            i.cssMode && i.centeredSlides && (c -= s[0].swiperSlideOffset);
                            let u = (a + (i.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + i.spaceBetween),
                                h = (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + i.spaceBetween),
                                p = -(a - c),
                                f = p + t.slidesSizesGrid[o];
                            ((p >= 0 && p < t.size - 1) || (f > 1 && f <= t.size) || (p <= 0 && f >= t.size)) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(o), s.eq(o).addClass(i.slideVisibleClass)),
                                (l.progress = n ? -u : u),
                                (l.originalProgress = n ? -h : h);
                        }
                        t.visibleSlides = d(t.visibleSlides);
                    },
                    updateProgress: function (e) {
                        if (void 0 === e) {
                            let t = this.rtlTranslate ? -1 : 1;
                            e = (this && this.translate && this.translate * t) || 0;
                        }
                        let i = this.params,
                            s = this.maxTranslate() - this.minTranslate(),
                            { progress: n, isBeginning: r, isEnd: a } = this,
                            o = r,
                            l = a;
                        0 === s ? ((n = 0), (r = !0), (a = !0)) : ((r = (n = (e - this.minTranslate()) / s) <= 0), (a = n >= 1)),
                            Object.assign(this, { progress: n, isBeginning: r, isEnd: a }),
                            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) && this.updateSlidesProgress(e),
                            r && !o && this.emit("reachBeginning toEdge"),
                            a && !l && this.emit("reachEnd toEdge"),
                            ((o && !r) || (l && !a)) && this.emit("fromEdge"),
                            this.emit("progress", n);
                    },
                    updateSlidesClasses: function () {
                        let { slides: e, params: t, $wrapperEl: i, activeIndex: s, realIndex: n } = this,
                            r = this.virtual && t.virtual.enabled,
                            a;
                        e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`),
                            (a = r ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${s}"]`) : e.eq(s)).addClass(t.slideActiveClass),
                            t.loop &&
                                (a.hasClass(t.slideDuplicateClass)
                                    ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(t.slideDuplicateActiveClass)
                                    : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(t.slideDuplicateActiveClass));
                        let o = a.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
                        t.loop && 0 === o.length && (o = e.eq(0)).addClass(t.slideNextClass);
                        let l = a.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
                        t.loop && 0 === l.length && (l = e.eq(-1)).addClass(t.slidePrevClass),
                            t.loop &&
                                (o.hasClass(t.slideDuplicateClass)
                                    ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass)
                                    : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass),
                                l.hasClass(t.slideDuplicateClass)
                                    ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)
                                    : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)),
                            this.emitSlidesClasses();
                    },
                    updateActiveIndex: function (e) {
                        let t = this,
                            i = t.rtlTranslate ? t.translate : -t.translate,
                            { slidesGrid: s, snapGrid: n, params: r, activeIndex: a, realIndex: o, snapIndex: l } = t,
                            d,
                            c = e;
                        if (void 0 === c) {
                            for (let u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? (i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? (c = u) : i >= s[u] && i < s[u + 1] && (c = u + 1)) : i >= s[u] && (c = u);
                            r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
                        }
                        if (n.indexOf(i) >= 0) d = n.indexOf(i);
                        else {
                            let h = Math.min(r.slidesPerGroupSkip, c);
                            d = h + Math.floor((c - h) / r.slidesPerGroup);
                        }
                        if ((d >= n.length && (d = n.length - 1), c === a)) return void (d !== l && ((t.snapIndex = d), t.emit("snapIndexChange")));
                        let p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                        Object.assign(t, { snapIndex: d, realIndex: p, previousIndex: a, activeIndex: c }),
                            t.emit("activeIndexChange"),
                            t.emit("snapIndexChange"),
                            o !== p && t.emit("realIndexChange"),
                            (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
                    },
                    updateClickedSlide: function (e) {
                        let t = this,
                            i = t.params,
                            s = d(e).closest(`.${i.slideClass}`)[0],
                            n,
                            r = !1;
                        if (s) {
                            for (let a = 0; a < t.slides.length; a += 1)
                                if (t.slides[a] === s) {
                                    (r = !0), (n = a);
                                    break;
                                }
                        }
                        if (!s || !r) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                        (t.clickedSlide = s),
                            t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(d(s).attr("data-swiper-slide-index"), 10)) : (t.clickedIndex = n),
                            i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
                    },
                },
                translate: {
                    getTranslate: function (e) {
                        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                        let { params: t, rtlTranslate: i, translate: s, $wrapperEl: n } = this;
                        if (t.virtualTranslate) return i ? -s : s;
                        if (t.cssMode) return s;
                        let r = p(n[0], e);
                        return i && (r = -r), r || 0;
                    },
                    setTranslate: function (e, t) {
                        let i = this,
                            { rtlTranslate: s, params: n, $wrapperEl: r, wrapperEl: a, progress: o } = i,
                            l,
                            d = 0,
                            c = 0;
                        i.isHorizontal() ? (d = s ? -e : e) : (c = e),
                            n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
                            n.cssMode ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -d : -c) : n.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`),
                            (i.previousTranslate = i.translate),
                            (i.translate = i.isHorizontal() ? d : c);
                        let u = i.maxTranslate() - i.minTranslate();
                        (l = 0 === u ? 0 : (e - i.minTranslate()) / u) !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t);
                    },
                    minTranslate: function () {
                        return -this.snapGrid[0];
                    },
                    maxTranslate: function () {
                        return -this.snapGrid[this.snapGrid.length - 1];
                    },
                    translateTo: function (e, t, i, s, n) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                        let r = this,
                            { params: a, wrapperEl: o } = r;
                        if (r.animating && a.preventInteractionOnTransition) return !1;
                        let l = r.minTranslate(),
                            d = r.maxTranslate(),
                            c;
                        if (((c = s && e > l ? l : s && e < d ? d : e), r.updateProgress(c), a.cssMode)) {
                            let u = r.isHorizontal();
                            if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -c;
                            else {
                                if (!r.support.smoothScroll) return $({ swiper: r, targetPosition: -c, side: u ? "left" : "top" }), !0;
                                o.scrollTo({ [u ? "left" : "top"]: -c, behavior: "smooth" });
                            }
                            return !0;
                        }
                        return (
                            0 === t
                                ? (r.setTransition(0), r.setTranslate(c), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
                                : (r.setTransition(t),
                                  r.setTranslate(c),
                                  i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")),
                                  r.animating ||
                                      ((r.animating = !0),
                                      r.onTranslateToWrapperTransitionEnd ||
                                          (r.onTranslateToWrapperTransitionEnd = function (e) {
                                              r &&
                                                  !r.destroyed &&
                                                  e.target === this &&
                                                  (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                                  r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                                                  (r.onTranslateToWrapperTransitionEnd = null),
                                                  delete r.onTranslateToWrapperTransitionEnd,
                                                  i && r.emit("transitionEnd"));
                                          }),
                                      r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                      r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                            !0
                        );
                    },
                },
                transition: {
                    setTransition: function (e, t) {
                        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
                    },
                    transitionStart: function (e, t) {
                        void 0 === e && (e = !0);
                        let { params: i } = this;
                        i.cssMode || (i.autoHeight && this.updateAutoHeight(), x({ swiper: this, runCallbacks: e, direction: t, step: "Start" }));
                    },
                    transitionEnd: function (e, t) {
                        void 0 === e && (e = !0);
                        let i = this,
                            { params: s } = i;
                        (i.animating = !1), s.cssMode || (i.setTransition(0), x({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
                    },
                },
                slide: {
                    slideTo: function (e, t, i, s, n) {
                        if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e))
                            throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                        if ("string" == typeof e) {
                            let r = parseInt(e, 10);
                            if (!isFinite(r)) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                            e = r;
                        }
                        let a = this,
                            o = e;
                        o < 0 && (o = 0);
                        let { params: l, snapGrid: d, slidesGrid: c, previousIndex: u, activeIndex: h, rtlTranslate: p, wrapperEl: f, enabled: m } = a;
                        if ((a.animating && l.preventInteractionOnTransition) || (!m && !s && !n)) return !1;
                        let g = Math.min(a.params.slidesPerGroupSkip, o),
                            v = g + Math.floor((o - g) / a.params.slidesPerGroup);
                        v >= d.length && (v = d.length - 1);
                        let y = -d[v];
                        if (l.normalizeSlideIndex)
                            for (let b = 0; b < c.length; b += 1) {
                                let w = -Math.floor(100 * y),
                                    _ = Math.floor(100 * c[b]),
                                    x = Math.floor(100 * c[b + 1]);
                                void 0 !== c[b + 1] ? (w >= _ && w < x - (x - _) / 2 ? (o = b) : w >= _ && w < x && (o = b + 1)) : w >= _ && (o = b);
                            }
                        if (a.initialized && o !== h && ((!a.allowSlideNext && y < a.translate && y < a.minTranslate()) || (!a.allowSlidePrev && y > a.translate && y > a.maxTranslate() && (h || 0) !== o))) return !1;
                        let E;
                        if ((o !== (u || 0) && i && a.emit("beforeSlideChangeStart"), a.updateProgress(y), (E = o > h ? "next" : o < h ? "prev" : "reset"), (p && -y === a.translate) || (!p && y === a.translate)))
                            return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(y), "reset" !== E && (a.transitionStart(i, E), a.transitionEnd(i, E)), !1;
                        if (l.cssMode) {
                            let C = a.isHorizontal(),
                                S = p ? y : -y;
                            if (0 === t) {
                                let T = a.virtual && a.params.virtual.enabled;
                                T && ((a.wrapperEl.style.scrollSnapType = "none"), (a._immediateVirtual = !0)),
                                    (f[C ? "scrollLeft" : "scrollTop"] = S),
                                    T &&
                                        requestAnimationFrame(() => {
                                            (a.wrapperEl.style.scrollSnapType = ""), (a._swiperImmediateVirtual = !1);
                                        });
                            } else {
                                if (!a.support.smoothScroll) return $({ swiper: a, targetPosition: S, side: C ? "left" : "top" }), !0;
                                f.scrollTo({ [C ? "left" : "top"]: S, behavior: "smooth" });
                            }
                            return !0;
                        }
                        return (
                            a.setTransition(t),
                            a.setTranslate(y),
                            a.updateActiveIndex(o),
                            a.updateSlidesClasses(),
                            a.emit("beforeTransitionStart", t, s),
                            a.transitionStart(i, E),
                            0 === t
                                ? a.transitionEnd(i, E)
                                : a.animating ||
                                  ((a.animating = !0),
                                  a.onSlideToWrapperTransitionEnd ||
                                      (a.onSlideToWrapperTransitionEnd = function (e) {
                                          a &&
                                              !a.destroyed &&
                                              e.target === this &&
                                              (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                              a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                                              (a.onSlideToWrapperTransitionEnd = null),
                                              delete a.onSlideToWrapperTransitionEnd,
                                              a.transitionEnd(i, E));
                                      }),
                                  a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                  a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)),
                            !0
                        );
                    },
                    slideToLoop: function (e, t, i, s) {
                        if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e)) {
                            let n = parseInt(e, 10);
                            if (!isFinite(n)) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                            e = n;
                        }
                        let r = e;
                        return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, s);
                    },
                    slideNext: function (e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        let s = this,
                            { animating: n, enabled: r, params: a } = s;
                        if (!r) return s;
                        let o = a.slidesPerGroup;
                        "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                        let l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
                        if (a.loop) {
                            if (n && a.loopPreventsSlide) return !1;
                            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
                        }
                        return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + l, e, t, i);
                    },
                    slidePrev: function (e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        let s = this,
                            { params: n, animating: r, snapGrid: a, slidesGrid: o, rtlTranslate: l, enabled: d } = s;
                        if (!d) return s;
                        if (n.loop) {
                            if (r && n.loopPreventsSlide) return !1;
                            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
                        }
                        function c(e) {
                            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                        }
                        let u = c(l ? s.translate : -s.translate),
                            h = a.map((e) => c(e)),
                            p = a[h.indexOf(u) - 1];
                        if (void 0 === p && n.cssMode) {
                            let f;
                            a.forEach((e, t) => {
                                u >= e && (f = t);
                            }),
                                void 0 !== f && (p = a[f > 0 ? f - 1 : f]);
                        }
                        let m = 0;
                        if (
                            (void 0 !== p &&
                                ((m = o.indexOf(p)) < 0 && (m = s.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (m = Math.max((m = m - s.slidesPerViewDynamic("previous", !0) + 1), 0))),
                            n.rewind && s.isBeginning)
                        ) {
                            let g = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                            return s.slideTo(g, e, t, i);
                        }
                        return s.slideTo(m, e, t, i);
                    },
                    slideReset: function (e, t, i) {
                        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
                    },
                    slideToClosest: function (e, t, i, s) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = 0.5);
                        let n = this.activeIndex,
                            r = Math.min(this.params.slidesPerGroupSkip, n),
                            a = r + Math.floor((n - r) / this.params.slidesPerGroup),
                            o = this.rtlTranslate ? this.translate : -this.translate;
                        if (o >= this.snapGrid[a]) {
                            let l = this.snapGrid[a];
                            o - l > (this.snapGrid[a + 1] - l) * s && (n += this.params.slidesPerGroup);
                        } else {
                            let d = this.snapGrid[a - 1];
                            o - d <= (this.snapGrid[a] - d) * s && (n -= this.params.slidesPerGroup);
                        }
                        return (n = Math.min((n = Math.max(n, 0)), this.slidesGrid.length - 1)), this.slideTo(n, e, t, i);
                    },
                    slideToClickedSlide: function () {
                        let e = this,
                            { params: t, $wrapperEl: i } = e,
                            s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView,
                            n,
                            r = e.clickedIndex;
                        if (t.loop) {
                            if (e.animating) return;
                            (n = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
                                t.centeredSlides
                                    ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2
                                        ? (e.loopFix(),
                                          (r = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                                          u(() => {
                                              e.slideTo(r);
                                          }))
                                        : e.slideTo(r)
                                    : r > e.slides.length - s
                                    ? (e.loopFix(),
                                      (r = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                                      u(() => {
                                          e.slideTo(r);
                                      }))
                                    : e.slideTo(r);
                        } else e.slideTo(r);
                    },
                },
                loop: {
                    loopCreate: function () {
                        let e = this,
                            t = s(),
                            { params: i, $wrapperEl: n } = e,
                            r = n.children().length > 0 ? d(n.children()[0].parentNode) : n;
                        r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                        let a = r.children(`.${i.slideClass}`);
                        if (i.loopFillGroupWithBlank) {
                            let o = i.slidesPerGroup - (a.length % i.slidesPerGroup);
                            if (o !== i.slidesPerGroup) {
                                for (let l = 0; l < o; l += 1) {
                                    let c = d(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                    r.append(c);
                                }
                                a = r.children(`.${i.slideClass}`);
                            }
                        }
                        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length),
                            (e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10))),
                            (e.loopedSlides += i.loopAdditionalSlides),
                            e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
                        let u = [],
                            h = [];
                        a.each((e, t) => {
                            d(e).attr("data-swiper-slide-index", t);
                        });
                        for (let p = 0; p < e.loopedSlides; p += 1) {
                            let f = p - Math.floor(p / a.length) * a.length;
                            h.push(a.eq(f)[0]), u.unshift(a.eq(a.length - f - 1)[0]);
                        }
                        for (let m = 0; m < h.length; m += 1) r.append(d(h[m].cloneNode(!0)).addClass(i.slideDuplicateClass));
                        for (let g = u.length - 1; g >= 0; g -= 1) r.prepend(d(u[g].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    },
                    loopFix: function () {
                        let e = this;
                        e.emit("beforeLoopFix");
                        let { activeIndex: t, slides: i, loopedSlides: s, allowSlidePrev: n, allowSlideNext: r, snapGrid: a, rtlTranslate: o } = e,
                            l;
                        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                        let d = -a[t] - e.getTranslate();
                        t < s
                            ? ((l = i.length - 3 * s + t), (l += s), e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d))
                            : t >= i.length - s && ((l = -i.length + t + s), (l += s), e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)),
                            (e.allowSlidePrev = n),
                            (e.allowSlideNext = r),
                            e.emit("loopFix");
                    },
                    loopDestroy: function () {
                        let { $wrapperEl: e, params: t, slides: i } = this;
                        e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index");
                    },
                },
                grabCursor: {
                    setGrabCursor: function (e) {
                        if (this.support.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode) return;
                        let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                        (t.style.cursor = "move"), (t.style.cursor = e ? "grabbing" : "grab");
                    },
                    unsetGrabCursor: function () {
                        let e = this;
                        e.support.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
                    },
                },
                events: {
                    attachEvents: function () {
                        let e = this,
                            t = s(),
                            { params: i, support: n } = e;
                        (e.onTouchStart = E.bind(e)),
                            (e.onTouchMove = C.bind(e)),
                            (e.onTouchEnd = S.bind(e)),
                            i.cssMode && (e.onScroll = A.bind(e)),
                            (e.onClick = k.bind(e)),
                            n.touch && !L && (t.addEventListener("touchstart", P), (L = !0)),
                            z(e, "on");
                    },
                    detachEvents: function () {
                        z(this, "off");
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        let e = this,
                            { activeIndex: t, initialized: i, loopedSlides: s = 0, params: n, $el: r } = e,
                            a = n.breakpoints;
                        if (!a || (a && 0 === Object.keys(a).length)) return;
                        let o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                        if (!o || e.currentBreakpoint === o) return;
                        let l = (o in a ? a[o] : void 0) || e.originalParams,
                            d = I(e, n),
                            c = I(e, l),
                            u = n.enabled;
                        d && !c
                            ? (r.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses())
                            : !d &&
                              c &&
                              (r.addClass(`${n.containerModifierClass}grid`),
                              ((l.grid.fill && "column" === l.grid.fill) || (!l.grid.fill && "column" === n.grid.fill)) && r.addClass(`${n.containerModifierClass}grid-column`),
                              e.emitContainerClasses()),
                            ["navigation", "pagination", "scrollbar"].forEach((t) => {
                                let i = n[t] && n[t].enabled,
                                    s = l[t] && l[t].enabled;
                                i && !s && e[t].disable(), !i && s && e[t].enable();
                            });
                        let h = l.direction && l.direction !== n.direction,
                            p = n.loop && (l.slidesPerView !== n.slidesPerView || h);
                        h && i && e.changeDirection(), g(e.params, l);
                        let f = e.params.enabled;
                        Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                            u && !f ? e.disable() : !u && f && e.enable(),
                            (e.currentBreakpoint = o),
                            e.emit("_beforeBreakpoint", l),
                            p && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)),
                            e.emit("breakpoint", l);
                    },
                    getBreakpoint: function (e, t, i) {
                        if ((void 0 === t && (t = "window"), !e || ("container" === t && !i))) return;
                        let s = !1,
                            n = r(),
                            a = "window" === t ? n.innerHeight : i.clientHeight,
                            o = Object.keys(e).map((e) => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    let t = parseFloat(e.substr(1));
                                    return { value: a * t, point: e };
                                }
                                return { value: e, point: e };
                            });
                        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                        for (let l = 0; l < o.length; l += 1) {
                            let { point: d, value: c } = o[l];
                            "window" === t ? n.matchMedia(`(min-width: ${c}px)`).matches && (s = d) : c <= i.clientWidth && (s = d);
                        }
                        return s || "max";
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        let e = this,
                            { isLocked: t, params: i } = e,
                            { slidesOffsetBefore: s } = i;
                        if (s) {
                            let n = e.slides.length - 1,
                                r = e.slidesGrid[n] + e.slidesSizesGrid[n] + 2 * s;
                            e.isLocked = e.size > r;
                        } else e.isLocked = 1 === e.snapGrid.length;
                        !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                            !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                            t && t !== e.isLocked && (e.isEnd = !1),
                            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
                    },
                },
                classes: {
                    addClasses: function () {
                        let { classNames: e, params: t, rtl: i, $el: s, device: n, support: r } = this,
                            a = (function (e, t) {
                                let i = [];
                                return (
                                    e.forEach((e) => {
                                        "object" == typeof e
                                            ? Object.keys(e).forEach((s) => {
                                                  e[s] && i.push(t + s);
                                              })
                                            : "string" == typeof e && i.push(t + e);
                                    }),
                                    i
                                );
                            })(
                                [
                                    "initialized",
                                    t.direction,
                                    { "pointer-events": !r.touch },
                                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                                    { autoheight: t.autoHeight },
                                    { rtl: i },
                                    { grid: t.grid && t.grid.rows > 1 },
                                    { "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill },
                                    { android: n.android },
                                    { ios: n.ios },
                                    { "css-mode": t.cssMode },
                                    { centered: t.cssMode && t.centeredSlides },
                                    { "watch-progress": t.watchSlidesProgress },
                                ],
                                t.containerModifierClass
                            );
                        e.push(...a), s.addClass([...e].join(" ")), this.emitContainerClasses();
                    },
                    removeClasses: function () {
                        let { $el: e, classNames: t } = this;
                        e.removeClass(t.join(" ")), this.emitContainerClasses();
                    },
                },
                images: {
                    loadImage: function (e, t, i, s, n, a) {
                        let o = r(),
                            l;
                        function c() {
                            a && a();
                        }
                        d(e).parent("picture")[0] || (e.complete && n) ? c() : t ? (((l = new o.Image()).onload = c), (l.onerror = c), s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : c();
                    },
                    preloadImages: function () {
                        let e = this;
                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                            let s = e.imagesToLoad[i];
                            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
                        }
                    },
                },
            },
            D = {};
        class N {
            constructor() {
                let e, t;
                for (var i, s = arguments.length, n = Array(s), a = 0; a < s; a++) n[a] = arguments[a];
                if ((1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? (t = n[0]) : ([e, t] = n), t || (t = {}), (t = g({}, t)), e && !t.el && (t.el = e), t.el && d(t.el).length > 1)) {
                    let o = [];
                    return (
                        d(t.el).each((e) => {
                            let i = g({}, t, { el: e });
                            o.push(new N(i));
                        }),
                        o
                    );
                }
                let l = this;
                (l.__swiper__ = !0),
                    (l.support = _()),
                    (l.device =
                        ((i = { userAgent: t.userAgent }),
                        b ||
                            (b = (function (e) {
                                let { userAgent: t } = void 0 === e ? {} : e,
                                    i = _(),
                                    s = r(),
                                    n = s.navigator.platform,
                                    a = t || s.navigator.userAgent,
                                    o = { ios: !1, android: !1 },
                                    l = s.screen.width,
                                    d = s.screen.height,
                                    c = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                                    u = a.match(/(iPad).*OS\s([\d_]+)/),
                                    h = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                                    p = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                    f = "MacIntel" === n;
                                return (
                                    !u &&
                                        f &&
                                        i.touch &&
                                        ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 &&
                                        ((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), (f = !1)),
                                    c && "Win32" !== n && ((o.os = "android"), (o.android = !0)),
                                    (u || p || h) && ((o.os = "ios"), (o.ios = !0)),
                                    o
                                );
                            })(i)),
                        b)),
                    (l.browser =
                        (w ||
                            (w = (function () {
                                let e = r();
                                return {
                                    isSafari: (function () {
                                        let t = e.navigator.userAgent.toLowerCase();
                                        return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android");
                                    })(),
                                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                                };
                            })()),
                        w)),
                    (l.eventsListeners = {}),
                    (l.eventsAnyListeners = []),
                    (l.modules = [...l.__modules__]),
                    t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
                let c = {};
                l.modules.forEach((e) => {
                    var i, s;
                    e({
                        swiper: l,
                        extendParams:
                            ((i = t),
                            (s = c),
                            function (e) {
                                void 0 === e && (e = {});
                                let t = Object.keys(e)[0],
                                    n = e[t];
                                "object" == typeof n &&
                                    null !== n &&
                                    (["navigation", "pagination", "scrollbar"].indexOf(t) >= 0 && !0 === i[t] && (i[t] = { auto: !0 }),
                                    t in i && "enabled" in n && (!0 === i[t] && (i[t] = { enabled: !0 }), "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = { enabled: !1 }))),
                                    g(s, e);
                            }),
                        on: l.on.bind(l),
                        once: l.once.bind(l),
                        off: l.off.bind(l),
                        emit: l.emit.bind(l),
                    });
                });
                let u = g({}, O, c);
                return (
                    (l.params = g({}, u, D, t)),
                    (l.originalParams = g({}, l.params)),
                    (l.passedParams = g({}, t)),
                    l.params &&
                        l.params.on &&
                        Object.keys(l.params.on).forEach((e) => {
                            l.on(e, l.params.on[e]);
                        }),
                    l.params && l.params.onAny && l.onAny(l.params.onAny),
                    (l.$ = d),
                    Object.assign(l, {
                        enabled: l.params.enabled,
                        el: e,
                        classNames: [],
                        slides: d(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === l.params.direction,
                        isVertical: () => "vertical" === l.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: (function () {
                            let e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return (
                                (l.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }),
                                (l.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                                l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop
                            );
                        })(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: l.params.focusableElements,
                            lastClickTime: h(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0,
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                        imagesToLoad: [],
                        imagesLoaded: 0,
                    }),
                    l.emit("_swiper"),
                    l.params.init && l.init(),
                    l
                );
            }
            enable() {
                let e = this;
                e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
            }
            disable() {
                let e = this;
                e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
            }
            setProgress(e, t) {
                e = Math.min(Math.max(e, 0), 1);
                let i = this.minTranslate(),
                    s = (this.maxTranslate() - i) * e + i;
                this.translateTo(s, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses();
            }
            emitContainerClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el) return;
                let t = e.el.className.split(" ").filter((t) => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                e.emit("_containerClasses", t.join(" "));
            }
            getSlideClasses(e) {
                let t = this;
                return t.destroyed
                    ? ""
                    : e.className
                          .split(" ")
                          .filter((e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
                          .join(" ");
            }
            emitSlidesClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el) return;
                let t = [];
                e.slides.each((i) => {
                    let s = e.getSlideClasses(i);
                    t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
                }),
                    e.emit("_slideClasses", t);
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                let { params: i, slides: s, slidesGrid: n, slidesSizesGrid: r, size: a, activeIndex: o } = this,
                    l = 1;
                if (i.centeredSlides) {
                    let d,
                        c = s[o].swiperSlideSize;
                    for (let u = o + 1; u < s.length; u += 1) s[u] && !d && ((c += s[u].swiperSlideSize), (l += 1), c > a && (d = !0));
                    for (let h = o - 1; h >= 0; h -= 1) s[h] && !d && ((c += s[h].swiperSlideSize), (l += 1), c > a && (d = !0));
                } else if ("current" === e) for (let p = o + 1; p < s.length; p += 1) (t ? n[p] + r[p] - n[o] < a : n[p] - n[o] < a) && (l += 1);
                else for (let f = o - 1; f >= 0; f -= 1) n[o] - n[f] < a && (l += 1);
                return l;
            }
            update() {
                let e = this;
                if (!e || e.destroyed) return;
                let { snapGrid: t, params: i } = e;
                function s() {
                    let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
                }
                let n;
                i.breakpoints && e.setBreakpoint(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateProgress(),
                    e.updateSlidesClasses(),
                    e.params.freeMode && e.params.freeMode.enabled
                        ? (s(), e.params.autoHeight && e.updateAutoHeight())
                        : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                    i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                    e.emit("update");
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                let i = this,
                    s = i.params.direction;
                return (
                    e || (e = "horizontal" === s ? "vertical" : "horizontal"),
                    e === s ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (i.$el.removeClass(`${i.params.containerModifierClass}${s}`).addClass(`${i.params.containerModifierClass}${e}`),
                        i.emitContainerClasses(),
                        (i.params.direction = e),
                        i.slides.each((t) => {
                            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                        }),
                        i.emit("changeDirection"),
                        t && i.update()),
                    i
                );
            }
            changeLanguageDirection(e) {
                let t = this;
                (t.rtl && "rtl" === e) ||
                    (!t.rtl && "ltr" === e) ||
                    ((t.rtl = "rtl" === e),
                    (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
                    t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = "rtl")) : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = "ltr")),
                    t.update());
            }
            mount(e) {
                let t = this;
                if (t.mounted) return !0;
                let i = d(e || t.params.el);
                if (!(e = i[0])) return !1;
                e.swiper = t;
                let n = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
                    r = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            let t = d(e.shadowRoot.querySelector(n()));
                            return (t.children = (e) => i.children(e)), t;
                        }
                        return i.children ? i.children(n()) : d(i).children(n());
                    })();
                if (0 === r.length && t.params.createElements) {
                    let a = s().createElement("div");
                    (r = d(a)),
                        (a.className = t.params.wrapperClass),
                        i.append(a),
                        i.children(`.${t.params.slideClass}`).each((e) => {
                            r.append(e);
                        });
                }
                return (
                    Object.assign(t, {
                        $el: i,
                        el: e,
                        $wrapperEl: r,
                        wrapperEl: r[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                        wrongRTL: "-webkit-box" === r.css("display"),
                    }),
                    !0
                );
            }
            init(e) {
                let t = this;
                return (
                    t.initialized ||
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                    t
                );
            }
            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                let i = this,
                    { params: s, $el: n, $wrapperEl: r, slides: a } = i;
                return (
                    void 0 === i.params ||
                        i.destroyed ||
                        (i.emit("beforeDestroy"),
                        (i.initialized = !1),
                        i.detachEvents(),
                        s.loop && i.loopDestroy(),
                        t &&
                            (i.removeClasses(),
                            n.removeAttr("style"),
                            r.removeAttr("style"),
                            a && a.length && a.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                        i.emit("destroy"),
                        Object.keys(i.eventsListeners).forEach((e) => {
                            i.off(e);
                        }),
                        !1 !== e &&
                            ((i.$el[0].swiper = null),
                            (function (e) {
                                let t = e;
                                Object.keys(t).forEach((e) => {
                                    try {
                                        t[e] = null;
                                    } catch (i) {}
                                    try {
                                        delete t[e];
                                    } catch (s) {}
                                });
                            })(i)),
                        (i.destroyed = !0)),
                    null
                );
            }
            static extendDefaults(e) {
                g(D, e);
            }
            static get extendedDefaults() {
                return D;
            }
            static get defaults() {
                return O;
            }
            static installModule(e) {
                N.prototype.__modules__ || (N.prototype.__modules__ = []);
                let t = N.prototype.__modules__;
                "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach((e) => N.installModule(e)), N) : (N.installModule(e), N);
            }
        }
        function H(e, t, i, n) {
            let r = s();
            return (
                e.params.createElements &&
                    Object.keys(n).forEach((s) => {
                        if (!i[s] && !0 === i.auto) {
                            let a = e.$el.children(`.${n[s]}`)[0];
                            a || (((a = r.createElement("div")).className = n[s]), e.$el.append(a)), (i[s] = a), (t[s] = a);
                        }
                    }),
                i
            );
        }
        function W(e) {
            return (
                void 0 === e && (e = ""),
                `.${e
                    .trim()
                    .replace(/([\.:!\/])/g, "\\$1")
                    .replace(/ /g, ".")}`
            );
        }
        function B(e) {
            let { $wrapperEl: t, params: i } = this;
            if ((i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)) for (let s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
            else t.append(e);
            i.loop && this.loopCreate(), i.observer || this.update();
        }
        function q(e) {
            let { params: t, $wrapperEl: i, activeIndex: s } = this;
            t.loop && this.loopDestroy();
            let n = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (let r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                n = s + e.length;
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer || this.update(), this.slideTo(n, 0, !1);
        }
        function Y(e, t) {
            let i = this,
                { $wrapperEl: s, params: n, activeIndex: r } = i,
                a = r;
            n.loop && ((a -= i.loopedSlides), i.loopDestroy(), (i.slides = s.children(`.${n.slideClass}`)));
            let o = i.slides.length;
            if (e <= 0) return void i.prependSlide(t);
            if (e >= o) return void i.appendSlide(t);
            let l = a > e ? a + 1 : a,
                d = [];
            for (let c = o - 1; c >= e; c -= 1) {
                let u = i.slides.eq(c);
                u.remove(), d.unshift(u);
            }
            if ("object" == typeof t && "length" in t) {
                for (let h = 0; h < t.length; h += 1) t[h] && s.append(t[h]);
                l = a > e ? a + t.length : a;
            } else s.append(t);
            for (let p = 0; p < d.length; p += 1) s.append(d[p]);
            n.loop && i.loopCreate(), n.observer || i.update(), n.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1);
        }
        function R(e) {
            let t = this,
                { params: i, $wrapperEl: s, activeIndex: n } = t,
                r = n;
            i.loop && ((r -= t.loopedSlides), t.loopDestroy(), (t.slides = s.children(`.${i.slideClass}`)));
            let a,
                o = r;
            if ("object" == typeof e && "length" in e) {
                for (let l = 0; l < e.length; l += 1) (a = e[l]), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
                o = Math.max(o, 0);
            } else (a = e), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), (o = Math.max(o, 0));
            i.loop && t.loopCreate(), i.observer || t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
        }
        function X() {
            let e = [];
            for (let t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
        }
        function j(e) {
            let { effect: t, swiper: i, on: s, setTranslate: n, setTransition: r, overwriteParams: a, perspective: o, recreateShadows: l, getEffectParams: d } = e,
                c;
            s("beforeInit", () => {
                if (i.params.effect !== t) return;
                i.classNames.push(`${i.params.containerModifierClass}${t}`), o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
                let e = a ? a() : {};
                Object.assign(i.params, e), Object.assign(i.originalParams, e);
            }),
                s("setTranslate", () => {
                    i.params.effect === t && n();
                }),
                s("setTransition", (e, s) => {
                    i.params.effect === t && r(s);
                }),
                s("transitionEnd", () => {
                    i.params.effect === t &&
                        l &&
                        d &&
                        d().slideShadows &&
                        (i.slides.each((e) => {
                            i.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
                        }),
                        l());
                }),
                s("virtualUpdate", () => {
                    i.params.effect === t &&
                        (i.slides.length || (c = !0),
                        requestAnimationFrame(() => {
                            c && i.slides && i.slides.length && (n(), (c = !1));
                        }));
                });
        }
        function F(e, t) {
            return e.transformEl ? t.find(e.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : t;
        }
        function G(e) {
            let { swiper: t, duration: i, transformEl: s, allSlides: n } = e,
                { slides: r, activeIndex: a, $wrapperEl: o } = t;
            if (t.params.virtualTranslate && 0 !== i) {
                let l,
                    d = !1;
                (l = n ? (s ? r.find(s) : r) : s ? r.eq(a).find(s) : r.eq(a)).transitionEnd(() => {
                    if (d || !t || t.destroyed) return;
                    (d = !0), (t.animating = !1);
                    let e = ["webkitTransitionEnd", "transitionend"];
                    for (let i = 0; i < e.length; i += 1) o.trigger(e[i]);
                });
            }
        }
        function V(e, t, i) {
            let s = "swiper-slide-shadow" + (i ? `-${i}` : ""),
                n = e.transformEl ? t.find(e.transformEl) : t,
                r = n.children(`.${s}`);
            return r.length || ((r = d(`<div class="swiper-slide-shadow${i ? `-${i}` : ""}"></div>`)), n.append(r)), r;
        }
        Object.keys(M).forEach((e) => {
            Object.keys(M[e]).forEach((t) => {
                N.prototype[t] = M[e][t];
            });
        }),
            N.use([
                function (e) {
                    let { swiper: t, on: i, emit: s } = e,
                        n = r(),
                        a = null,
                        o = null,
                        l = () => {
                            t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"));
                        },
                        d = () => {
                            t && !t.destroyed && t.initialized && s("orientationchange");
                        };
                    i("init", () => {
                        t.params.resizeObserver && void 0 !== n.ResizeObserver
                            ? t &&
                              !t.destroyed &&
                              t.initialized &&
                              (a = new ResizeObserver((e) => {
                                  o = n.requestAnimationFrame(() => {
                                      let { width: i, height: s } = t,
                                          n = i,
                                          r = s;
                                      e.forEach((e) => {
                                          let { contentBoxSize: i, contentRect: s, target: a } = e;
                                          (a && a !== t.el) || ((n = s ? s.width : (i[0] || i).inlineSize), (r = s ? s.height : (i[0] || i).blockSize));
                                      }),
                                          (n === i && r === s) || l();
                                  });
                              })).observe(t.el)
                            : (n.addEventListener("resize", l), n.addEventListener("orientationchange", d));
                    }),
                        i("destroy", () => {
                            o && n.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", d);
                        });
                },
                function (e) {
                    let { swiper: t, extendParams: i, on: s, emit: n } = e,
                        a = [],
                        o = r(),
                        l = function (e, t) {
                            void 0 === t && (t = {});
                            let i = new (o.MutationObserver || o.WebkitMutationObserver)((e) => {
                                if (1 === e.length) return void n("observerUpdate", e[0]);
                                let t = function () {
                                    n("observerUpdate", e[0]);
                                };
                                o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0);
                            });
                            i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.push(i);
                        };
                    i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                        s("init", () => {
                            if (t.params.observer) {
                                if (t.params.observeParents) {
                                    let e = t.$el.parents();
                                    for (let i = 0; i < e.length; i += 1) l(e[i]);
                                }
                                l(t.$el[0], { childList: t.params.observeSlideChildren }), l(t.$wrapperEl[0], { attributes: !1 });
                            }
                        }),
                        s("destroy", () => {
                            a.forEach((e) => {
                                e.disconnect();
                            }),
                                a.splice(0, a.length);
                        });
                },
            ]);
        let U = [
            function (e) {
                let t,
                    { swiper: i, extendParams: s, on: n, emit: r } = e;
                function a(e, t) {
                    let s = i.params.virtual;
                    if (s.cache && i.virtual.cache[t]) return i.virtual.cache[t];
                    let n = s.renderSlide ? d(s.renderSlide.call(i, e, t)) : d(`<div class="${i.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                    return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t), s.cache && (i.virtual.cache[t] = n), n;
                }
                function o(e) {
                    let { slidesPerView: t, slidesPerGroup: s, centeredSlides: n } = i.params,
                        { addSlidesBefore: o, addSlidesAfter: l } = i.params.virtual,
                        { from: d, to: c, slides: u, slidesGrid: h, offset: p } = i.virtual;
                    i.params.cssMode || i.updateActiveIndex();
                    let f = i.activeIndex || 0,
                        m,
                        g,
                        v;
                    (m = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top"), n ? ((g = Math.floor(t / 2) + s + l), (v = Math.floor(t / 2) + s + o)) : ((g = t + (s - 1) + l), (v = s + o));
                    let $ = Math.max((f || 0) - v, 0),
                        y = Math.min((f || 0) + g, u.length - 1),
                        b = (i.slidesGrid[$] || 0) - (i.slidesGrid[0] || 0);
                    function w() {
                        i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load(), r("virtualUpdate");
                    }
                    if ((Object.assign(i.virtual, { from: $, to: y, offset: b, slidesGrid: i.slidesGrid }), d === $ && c === y && !e))
                        return i.slidesGrid !== h && b !== p && i.slides.css(m, `${b}px`), i.updateProgress(), void r("virtualUpdate");
                    if (i.params.virtual.renderExternal)
                        return (
                            i.params.virtual.renderExternal.call(i, {
                                offset: b,
                                from: $,
                                to: y,
                                slides: (function () {
                                    let e = [];
                                    for (let t = $; t <= y; t += 1) e.push(u[t]);
                                    return e;
                                })(),
                            }),
                            void (i.params.virtual.renderExternalUpdate ? w() : r("virtualUpdate"))
                        );
                    let _ = [],
                        x = [];
                    if (e) i.$wrapperEl.find(`.${i.params.slideClass}`).remove();
                    else for (let E = d; E <= c; E += 1) (E < $ || E > y) && i.$wrapperEl.find(`.${i.params.slideClass}[data-swiper-slide-index="${E}"]`).remove();
                    for (let C = 0; C < u.length; C += 1) C >= $ && C <= y && (void 0 === c || e ? x.push(C) : (C > c && x.push(C), C < d && _.push(C)));
                    x.forEach((e) => {
                        i.$wrapperEl.append(a(u[e], e));
                    }),
                        _.sort((e, t) => t - e).forEach((e) => {
                            i.$wrapperEl.prepend(a(u[e], e));
                        }),
                        i.$wrapperEl.children(".swiper-slide").css(m, `${b}px`),
                        w();
                }
                s({ virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } }),
                    (i.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] }),
                    n("beforeInit", () => {
                        i.params.virtual.enabled &&
                            ((i.virtual.slides = i.params.virtual.slides),
                            i.classNames.push(`${i.params.containerModifierClass}virtual`),
                            (i.params.watchSlidesProgress = !0),
                            (i.originalParams.watchSlidesProgress = !0),
                            i.params.initialSlide || o());
                    }),
                    n("setTranslate", () => {
                        i.params.virtual.enabled &&
                            (i.params.cssMode && !i._immediateVirtual
                                ? (clearTimeout(t),
                                  (t = setTimeout(() => {
                                      o();
                                  }, 100)))
                                : o());
                    }),
                    n("init update resize", () => {
                        i.params.virtual.enabled && i.params.cssMode && v(i.wrapperEl, "--swiper-virtual-size", `${i.virtualSize}px`);
                    }),
                    Object.assign(i.virtual, {
                        appendSlide: function (e) {
                            if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && i.virtual.slides.push(e[t]);
                            else i.virtual.slides.push(e);
                            o(!0);
                        },
                        prependSlide: function (e) {
                            let t = i.activeIndex,
                                s = t + 1,
                                n = 1;
                            if (Array.isArray(e)) {
                                for (let r = 0; r < e.length; r += 1) e[r] && i.virtual.slides.unshift(e[r]);
                                (s = t + e.length), (n = e.length);
                            } else i.virtual.slides.unshift(e);
                            if (i.params.virtual.cache) {
                                let a = i.virtual.cache,
                                    l = {};
                                Object.keys(a).forEach((e) => {
                                    let t = a[e],
                                        i = t.attr("data-swiper-slide-index");
                                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + n), (l[parseInt(e, 10) + n] = t);
                                }),
                                    (i.virtual.cache = l);
                            }
                            o(!0), i.slideTo(s, 0);
                        },
                        removeSlide: function (e) {
                            if (null == e) return;
                            let t = i.activeIndex;
                            if (Array.isArray(e)) for (let s = e.length - 1; s >= 0; s -= 1) i.virtual.slides.splice(e[s], 1), i.params.virtual.cache && delete i.virtual.cache[e[s]], e[s] < t && (t -= 1), (t = Math.max(t, 0));
                            else i.virtual.slides.splice(e, 1), i.params.virtual.cache && delete i.virtual.cache[e], e < t && (t -= 1), (t = Math.max(t, 0));
                            o(!0), i.slideTo(t, 0);
                        },
                        removeAllSlides: function () {
                            (i.virtual.slides = []), i.params.virtual.cache && (i.virtual.cache = {}), o(!0), i.slideTo(0, 0);
                        },
                        update: o,
                    });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: n, emit: a } = e,
                    o = s(),
                    l = r();
                function c(e) {
                    if (!t.enabled) return;
                    let { rtlTranslate: i } = t,
                        s = e;
                    s.originalEvent && (s = s.originalEvent);
                    let n = s.keyCode || s.charCode,
                        r = t.params.keyboard.pageUpDown,
                        d = r && 33 === n,
                        c = r && 34 === n,
                        u = 37 === n,
                        h = 39 === n,
                        p = 38 === n,
                        f = 40 === n;
                    if ((!t.allowSlideNext && ((t.isHorizontal() && h) || (t.isVertical() && f) || c)) || (!t.allowSlidePrev && ((t.isHorizontal() && u) || (t.isVertical() && p) || d))) return !1;
                    if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || (o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase())))) {
                        if (t.params.keyboard.onlyInViewport && (d || c || u || h || p || f)) {
                            let m = !1;
                            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                            let g = t.$el,
                                v = g[0].clientWidth,
                                $ = g[0].clientHeight,
                                y = l.innerWidth,
                                b = l.innerHeight,
                                w = t.$el.offset();
                            i && (w.left -= t.$el[0].scrollLeft);
                            let _ = [
                                [w.left, w.top],
                                [w.left + v, w.top],
                                [w.left, w.top + $],
                                [w.left + v, w.top + $],
                            ];
                            for (let x = 0; x < _.length; x += 1) {
                                let E = _[x];
                                if (E[0] >= 0 && E[0] <= y && E[1] >= 0 && E[1] <= b) {
                                    if (0 === E[0] && 0 === E[1]) continue;
                                    m = !0;
                                }
                            }
                            if (!m) return;
                        }
                        t.isHorizontal()
                            ? ((d || c || u || h) && (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)), (((c || h) && !i) || ((d || u) && i)) && t.slideNext(), (((d || u) && !i) || ((c || h) && i)) && t.slidePrev())
                            : ((d || c || p || f) && (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)), (c || f) && t.slideNext(), (d || p) && t.slidePrev()),
                            a("keyPress", n);
                    }
                }
                function u() {
                    t.keyboard.enabled || (d(o).on("keydown", c), (t.keyboard.enabled = !0));
                }
                function h() {
                    t.keyboard.enabled && (d(o).off("keydown", c), (t.keyboard.enabled = !1));
                }
                (t.keyboard = { enabled: !1 }),
                    i({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
                    n("init", () => {
                        t.params.keyboard.enabled && u();
                    }),
                    n("destroy", () => {
                        t.keyboard.enabled && h();
                    }),
                    Object.assign(t.keyboard, { enable: u, disable: h });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s, emit: n } = e,
                    a = r(),
                    o;
                i({ mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }), (t.mousewheel = { enabled: !1 });
                let l,
                    c = h(),
                    p = [];
                function f() {
                    t.enabled && (t.mouseEntered = !0);
                }
                function m() {
                    t.enabled && (t.mouseEntered = !1);
                }
                function g(e) {
                    return (
                        !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) &&
                        !(t.params.mousewheel.thresholdTime && h() - c < t.params.mousewheel.thresholdTime) &&
                        ((e.delta >= 6 && h() - c < 60) ||
                            (e.direction < 0 ? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), n("scroll", e.raw)) : (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), n("scroll", e.raw)),
                            (c = new a.Date().getTime()),
                            !1))
                    );
                }
                function v(e) {
                    var i;
                    let s = e,
                        r = !0;
                    if (!t.enabled) return;
                    let a = t.params.mousewheel;
                    t.params.cssMode && s.preventDefault();
                    let c = t.$el;
                    if (("container" !== t.params.mousewheel.eventsTarget && (c = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !c[0].contains(s.target) && !a.releaseOnEdges)) return !0;
                    s.originalEvent && (s = s.originalEvent);
                    let f = 0,
                        m,
                        v,
                        $,
                        y,
                        b = t.rtlTranslate ? -1 : 1,
                        w =
                            ((i = s),
                            (m = 0),
                            (v = 0),
                            ($ = 0),
                            (y = 0),
                            "detail" in i && (v = i.detail),
                            "wheelDelta" in i && (v = -i.wheelDelta / 120),
                            "wheelDeltaY" in i && (v = -i.wheelDeltaY / 120),
                            "wheelDeltaX" in i && (m = -i.wheelDeltaX / 120),
                            "axis" in i && i.axis === i.HORIZONTAL_AXIS && ((m = v), (v = 0)),
                            ($ = 10 * m),
                            (y = 10 * v),
                            "deltaY" in i && (y = i.deltaY),
                            "deltaX" in i && ($ = i.deltaX),
                            i.shiftKey && !$ && (($ = y), (y = 0)),
                            ($ || y) && i.deltaMode && (1 === i.deltaMode ? (($ *= 40), (y *= 40)) : (($ *= 800), (y *= 800))),
                            $ && !m && (m = $ < 1 ? -1 : 1),
                            y && !v && (v = y < 1 ? -1 : 1),
                            { spinX: m, spinY: v, pixelX: $, pixelY: y });
                    if (a.forceToAxis) {
                        if (t.isHorizontal()) {
                            if (!(Math.abs(w.pixelX) > Math.abs(w.pixelY))) return !0;
                            f = -w.pixelX * b;
                        } else {
                            if (!(Math.abs(w.pixelY) > Math.abs(w.pixelX))) return !0;
                            f = -w.pixelY;
                        }
                    } else f = Math.abs(w.pixelX) > Math.abs(w.pixelY) ? -w.pixelX * b : -w.pixelY;
                    if (0 === f) return !0;
                    a.invert && (f = -f);
                    let _ = t.getTranslate() + f * a.sensitivity;
                    if (
                        (_ >= t.minTranslate() && (_ = t.minTranslate()),
                        _ <= t.maxTranslate() && (_ = t.maxTranslate()),
                        (r = !!t.params.loop || !(_ === t.minTranslate() || _ === t.maxTranslate())) && t.params.nested && s.stopPropagation(),
                        t.params.freeMode && t.params.freeMode.enabled)
                    ) {
                        let x = { time: h(), delta: Math.abs(f), direction: Math.sign(f) },
                            E = l && x.time < l.time + 500 && x.delta <= l.delta && x.direction === l.direction;
                        if (!E) {
                            (l = void 0), t.params.loop && t.loopFix();
                            let C = t.getTranslate() + f * a.sensitivity,
                                S = t.isBeginning,
                                T = t.isEnd;
                            if (
                                (C >= t.minTranslate() && (C = t.minTranslate()),
                                C <= t.maxTranslate() && (C = t.maxTranslate()),
                                t.setTransition(0),
                                t.setTranslate(C),
                                t.updateProgress(),
                                t.updateActiveIndex(),
                                t.updateSlidesClasses(),
                                ((!S && t.isBeginning) || (!T && t.isEnd)) && t.updateSlidesClasses(),
                                t.params.freeMode.sticky)
                            ) {
                                clearTimeout(o), (o = void 0), p.length >= 15 && p.shift();
                                let k = p.length ? p[p.length - 1] : void 0,
                                    A = p[0];
                                if ((p.push(x), k && (x.delta > k.delta || x.direction !== k.direction))) p.splice(0);
                                else if (p.length >= 15 && x.time - A.time < 500 && A.delta - x.delta >= 1 && x.delta <= 6) {
                                    let L = f > 0 ? 0.8 : 0.2;
                                    (l = x),
                                        p.splice(0),
                                        (o = u(() => {
                                            t.slideToClosest(t.params.speed, !0, void 0, L);
                                        }, 0));
                                }
                                o ||
                                    (o = u(() => {
                                        (l = x), p.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                                    }, 500));
                            }
                            if ((E || n("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), C === t.minTranslate() || C === t.maxTranslate())) return !0;
                        }
                    } else {
                        let P = { time: h(), delta: Math.abs(f), direction: Math.sign(f), raw: e };
                        p.length >= 2 && p.shift();
                        let z = p.length ? p[p.length - 1] : void 0;
                        if (
                            (p.push(P),
                            z ? (P.direction !== z.direction || P.delta > z.delta || P.time > z.time + 150) && g(P) : g(P),
                            (function (e) {
                                let i = t.params.mousewheel;
                                if (e.direction < 0) {
                                    if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0;
                                } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges) return !0;
                                return !1;
                            })(P))
                        )
                            return !0;
                    }
                    return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
                }
                function $(e) {
                    let i = t.$el;
                    "container" !== t.params.mousewheel.eventsTarget && (i = d(t.params.mousewheel.eventsTarget)), i[e]("mouseenter", f), i[e]("mouseleave", m), i[e]("wheel", v);
                }
                function y() {
                    return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && ($("on"), (t.mousewheel.enabled = !0), !0);
                }
                function b() {
                    return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && ($("off"), (t.mousewheel.enabled = !1), !0);
                }
                s("init", () => {
                    !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && y();
                }),
                    s("destroy", () => {
                        t.params.cssMode && y(), t.mousewheel.enabled && b();
                    }),
                    Object.assign(t.mousewheel, { enable: y, disable: b });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s, emit: n } = e;
                function r(e) {
                    let i;
                    return e && ((i = d(e)), t.params.uniqueNavElements && "string" == typeof e && i.length > 1 && 1 === t.$el.find(e).length && (i = t.$el.find(e))), i;
                }
                function a(e, i) {
                    let s = t.params.navigation;
                    e &&
                        e.length > 0 &&
                        (e[i ? "addClass" : "removeClass"](s.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
                }
                function o() {
                    if (t.params.loop) return;
                    let { $nextEl: e, $prevEl: i } = t.navigation;
                    a(i, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind);
                }
                function l(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), n("navigationPrev"));
                }
                function c(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), n("navigationNext"));
                }
                function u() {
                    let e = t.params.navigation;
                    if (((t.params.navigation = H(t, t.originalParams.navigation, t.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })), !e.nextEl && !e.prevEl)) return;
                    let i = r(e.nextEl),
                        s = r(e.prevEl);
                    i && i.length > 0 && i.on("click", c),
                        s && s.length > 0 && s.on("click", l),
                        Object.assign(t.navigation, { $nextEl: i, nextEl: i && i[0], $prevEl: s, prevEl: s && s[0] }),
                        t.enabled || (i && i.addClass(e.lockClass), s && s.addClass(e.lockClass));
                }
                function h() {
                    let { $nextEl: e, $prevEl: i } = t.navigation;
                    e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), i && i.length && (i.off("click", l), i.removeClass(t.params.navigation.disabledClass));
                }
                i({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled",
                    },
                }),
                    (t.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }),
                    s("init", () => {
                        !1 === t.params.navigation.enabled ? p() : (u(), o());
                    }),
                    s("toEdge fromEdge lock unlock", () => {
                        o();
                    }),
                    s("destroy", () => {
                        h();
                    }),
                    s("enable disable", () => {
                        let { $nextEl: e, $prevEl: i } = t.navigation;
                        e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), i && i[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
                    }),
                    s("click", (e, i) => {
                        let { $nextEl: s, $prevEl: r } = t.navigation,
                            a = i.target;
                        if (t.params.navigation.hideOnClick && !d(a).is(r) && !d(a).is(s)) {
                            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;
                            let o;
                            s ? (o = s.hasClass(t.params.navigation.hiddenClass)) : r && (o = r.hasClass(t.params.navigation.hiddenClass)),
                                n(!0 === o ? "navigationShow" : "navigationHide"),
                                s && s.toggleClass(t.params.navigation.hiddenClass),
                                r && r.toggleClass(t.params.navigation.hiddenClass);
                        }
                    });
                let p = () => {
                    t.$el.addClass(t.params.navigation.navigationDisabledClass), h();
                };
                Object.assign(t.navigation, {
                    enable() {
                        t.$el.removeClass(t.params.navigation.navigationDisabledClass), u(), o();
                    },
                    disable: p,
                    update: o,
                    init: u,
                    destroy: h,
                });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s, emit: n } = e,
                    r = "swiper-pagination",
                    a;
                i({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: (e) => e,
                        formatFractionTotal: (e) => e,
                        bulletClass: `${r}-bullet`,
                        bulletActiveClass: `${r}-bullet-active`,
                        modifierClass: `${r}-`,
                        currentClass: `${r}-current`,
                        totalClass: `${r}-total`,
                        hiddenClass: `${r}-hidden`,
                        progressbarFillClass: `${r}-progressbar-fill`,
                        progressbarOppositeClass: `${r}-progressbar-opposite`,
                        clickableClass: `${r}-clickable`,
                        lockClass: `${r}-lock`,
                        horizontalClass: `${r}-horizontal`,
                        verticalClass: `${r}-vertical`,
                        paginationDisabledClass: `${r}-disabled`,
                    },
                }),
                    (t.pagination = { el: null, $el: null, bullets: [] });
                let o = 0;
                function l() {
                    return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
                }
                function c(e, i) {
                    let { bulletActiveClass: s } = t.params.pagination;
                    e[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
                }
                function u() {
                    let e = t.rtl,
                        i = t.params.pagination;
                    if (l()) return;
                    let s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        r = t.pagination.$el,
                        u,
                        h = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (
                        (t.params.loop
                            ? ((u = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > s - 1 - 2 * t.loopedSlides && (u -= s - 2 * t.loopedSlides),
                              u > h - 1 && (u -= h),
                              u < 0 && "bullets" !== t.params.paginationType && (u = h + u))
                            : (u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
                        "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0)
                    ) {
                        let p = t.pagination.bullets,
                            f,
                            m,
                            g;
                        if (
                            (i.dynamicBullets &&
                                ((a = p.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                r.css(t.isHorizontal() ? "width" : "height", a * (i.dynamicMainBullets + 4) + "px"),
                                i.dynamicMainBullets > 1 && void 0 !== t.previousIndex && ((o += u - (t.previousIndex - t.loopedSlides || 0)) > i.dynamicMainBullets - 1 ? (o = i.dynamicMainBullets - 1) : o < 0 && (o = 0)),
                                (g = ((m = (f = Math.max(u - o, 0)) + (Math.min(p.length, i.dynamicMainBullets) - 1)) + f) / 2)),
                            p.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e) => `${i.bulletActiveClass}${e}`).join(" ")),
                            r.length > 1)
                        )
                            p.each((e) => {
                                let t = d(e),
                                    s = t.index();
                                s === u && t.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= f && s <= m && t.addClass(`${i.bulletActiveClass}-main`), s === f && c(t, "prev"), s === m && c(t, "next"));
                            });
                        else {
                            let v = p.eq(u),
                                $ = v.index();
                            if ((v.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                                let y = p.eq(f),
                                    b = p.eq(m);
                                for (let w = f; w <= m; w += 1) p.eq(w).addClass(`${i.bulletActiveClass}-main`);
                                if (t.params.loop) {
                                    if ($ >= p.length) {
                                        for (let _ = i.dynamicMainBullets; _ >= 0; _ -= 1) p.eq(p.length - _).addClass(`${i.bulletActiveClass}-main`);
                                        p.eq(p.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`);
                                    } else c(y, "prev"), c(b, "next");
                                } else c(y, "prev"), c(b, "next");
                            }
                        }
                        if (i.dynamicBullets) {
                            let x = Math.min(p.length, i.dynamicMainBullets + 4),
                                E = (a * x - a) / 2 - g * a;
                            p.css(t.isHorizontal() ? (e ? "right" : "left") : "top", `${E}px`);
                        }
                    }
                    if (("fraction" === i.type && (r.find(W(i.currentClass)).text(i.formatFractionCurrent(u + 1)), r.find(W(i.totalClass)).text(i.formatFractionTotal(h))), "progressbar" === i.type)) {
                        let C;
                        C = i.progressbarOpposite ? (t.isHorizontal() ? "vertical" : "horizontal") : t.isHorizontal() ? "horizontal" : "vertical";
                        let S = (u + 1) / h,
                            T = 1,
                            k = 1;
                        "horizontal" === C ? (T = S) : (k = S), r.find(W(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${T}) scaleY(${k})`).transition(t.params.speed);
                    }
                    "custom" === i.type && i.renderCustom ? (r.html(i.renderCustom(t, u + 1, h)), n("paginationRender", r[0])) : n("paginationUpdate", r[0]),
                        t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](i.lockClass);
                }
                function h() {
                    let e = t.params.pagination;
                    if (l()) return;
                    let i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        s = t.pagination.$el,
                        r = "";
                    if ("bullets" === e.type) {
                        let a = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && a > i && (a = i);
                        for (let o = 0; o < a; o += 1) e.renderBullet ? (r += e.renderBullet.call(t, o, e.bulletClass)) : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
                        s.html(r), (t.pagination.bullets = s.find(W(e.bulletClass)));
                    }
                    "fraction" === e.type && ((r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), s.html(r)),
                        "progressbar" === e.type && ((r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), s.html(r)),
                        "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
                }
                function p() {
                    t.params.pagination = H(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" });
                    let e = t.params.pagination;
                    if (!e.el) return;
                    let i = d(e.el);
                    0 !== i.length &&
                        (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && (i = t.$el.find(e.el)).length > 1 && (i = i.filter((e) => d(e).parents(".swiper")[0] === t.el)),
                        "bullets" === e.type && e.clickable && i.addClass(e.clickableClass),
                        i.addClass(e.modifierClass + e.type),
                        i.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                        "bullets" === e.type && e.dynamicBullets && (i.addClass(`${e.modifierClass}${e.type}-dynamic`), (o = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                        "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass),
                        e.clickable &&
                            i.on("click", W(e.bulletClass), function (e) {
                                e.preventDefault();
                                let i = d(this).index() * t.params.slidesPerGroup;
                                t.params.loop && (i += t.loopedSlides), t.slideTo(i);
                            }),
                        Object.assign(t.pagination, { $el: i, el: i[0] }),
                        t.enabled || i.addClass(e.lockClass));
                }
                function f() {
                    let e = t.params.pagination;
                    if (l()) return;
                    let i = t.pagination.$el;
                    i.removeClass(e.hiddenClass),
                        i.removeClass(e.modifierClass + e.type),
                        i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                        t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass),
                        e.clickable && i.off("click", W(e.bulletClass));
                }
                s("init", () => {
                    !1 === t.params.pagination.enabled ? m() : (p(), h(), u());
                }),
                    s("activeIndexChange", () => {
                        (t.params.loop || void 0 === t.snapIndex) && u();
                    }),
                    s("snapIndexChange", () => {
                        t.params.loop || u();
                    }),
                    s("slidesLengthChange", () => {
                        t.params.loop && (h(), u());
                    }),
                    s("snapGridLengthChange", () => {
                        t.params.loop || (h(), u());
                    }),
                    s("destroy", () => {
                        f();
                    }),
                    s("enable disable", () => {
                        let { $el: e } = t.pagination;
                        e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
                    }),
                    s("lock unlock", () => {
                        u();
                    }),
                    s("click", (e, i) => {
                        let s = i.target,
                            { $el: r } = t.pagination;
                        if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(s).hasClass(t.params.pagination.bulletClass)) {
                            if (t.navigation && ((t.navigation.nextEl && s === t.navigation.nextEl) || (t.navigation.prevEl && s === t.navigation.prevEl))) return;
                            let a = r.hasClass(t.params.pagination.hiddenClass);
                            n(!0 === a ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass);
                        }
                    });
                let m = () => {
                    t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), f();
                };
                Object.assign(t.pagination, {
                    enable() {
                        t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), p(), h(), u();
                    },
                    disable: m,
                    render: h,
                    update: u,
                    init: p,
                    destroy: f,
                });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: n, emit: r } = e,
                    a = s(),
                    o,
                    l,
                    c,
                    h,
                    p = !1,
                    f = null,
                    m = null;
                function g() {
                    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                    let { scrollbar: e, rtlTranslate: i, progress: s } = t,
                        { $dragEl: n, $el: r } = e,
                        a = t.params.scrollbar,
                        o = l,
                        d = (c - l) * s;
                    i ? ((d = -d) > 0 ? ((o = l - d), (d = 0)) : -d + l > c && (o = c + d)) : d < 0 ? ((o = l + d), (d = 0)) : d + l > c && (o = c - d),
                        t.isHorizontal() ? (n.transform(`translate3d(${d}px, 0, 0)`), (n[0].style.width = `${o}px`)) : (n.transform(`translate3d(0px, ${d}px, 0)`), (n[0].style.height = `${o}px`)),
                        a.hide &&
                            (clearTimeout(f),
                            (r[0].style.opacity = 1),
                            (f = setTimeout(() => {
                                (r[0].style.opacity = 0), r.transition(400);
                            }, 1e3)));
                }
                function v() {
                    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                    let { scrollbar: e } = t,
                        { $dragEl: i, $el: s } = e;
                    (i[0].style.width = ""),
                        (i[0].style.height = ""),
                        (c = t.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight),
                        (h = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0))),
                        (l = "auto" === t.params.scrollbar.dragSize ? c * h : parseInt(t.params.scrollbar.dragSize, 10)),
                        t.isHorizontal() ? (i[0].style.width = `${l}px`) : (i[0].style.height = `${l}px`),
                        (s[0].style.display = h >= 1 ? "none" : ""),
                        t.params.scrollbar.hide && (s[0].style.opacity = 0),
                        t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
                }
                function $(e) {
                    return t.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX) : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
                }
                function y(e) {
                    let { scrollbar: i, rtlTranslate: s } = t,
                        { $el: n } = i,
                        r;
                    (r = Math.max(Math.min((r = ($(e) - n.offset()[t.isHorizontal() ? "left" : "top"] - (null !== o ? o : l / 2)) / (c - l)), 1), 0)), s && (r = 1 - r);
                    let a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
                    t.updateProgress(a), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
                }
                function b(e) {
                    let i = t.params.scrollbar,
                        { scrollbar: s, $wrapperEl: n } = t,
                        { $el: a, $dragEl: l } = s;
                    (p = !0),
                        (o = e.target === l[0] || e.target === l ? $(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null),
                        e.preventDefault(),
                        e.stopPropagation(),
                        n.transition(100),
                        l.transition(100),
                        y(e),
                        clearTimeout(m),
                        a.transition(0),
                        i.hide && a.css("opacity", 1),
                        t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
                        r("scrollbarDragStart", e);
                }
                function w(e) {
                    let { scrollbar: i, $wrapperEl: s } = t,
                        { $el: n, $dragEl: a } = i;
                    p && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), y(e), s.transition(0), n.transition(0), a.transition(0), r("scrollbarDragMove", e));
                }
                function _(e) {
                    let i = t.params.scrollbar,
                        { scrollbar: s, $wrapperEl: n } = t,
                        { $el: a } = s;
                    p &&
                        ((p = !1),
                        t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), n.transition("")),
                        i.hide &&
                            (clearTimeout(m),
                            (m = u(() => {
                                a.css("opacity", 0), a.transition(400);
                            }, 1e3))),
                        r("scrollbarDragEnd", e),
                        i.snapOnRelease && t.slideToClosest());
                }
                function x(e) {
                    let { scrollbar: i, touchEventsTouch: s, touchEventsDesktop: n, params: r, support: o } = t,
                        l = i.$el;
                    if (!l) return;
                    let d = l[0],
                        c = !(!o.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                        u = !(!o.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                    if (!d) return;
                    let h = "on" === e ? "addEventListener" : "removeEventListener";
                    o.touch ? (d[h](s.start, b, c), d[h](s.move, w, c), d[h](s.end, _, u)) : (d[h](n.start, b, c), a[h](n.move, w, c), a[h](n.end, _, u));
                }
                function E() {
                    let { scrollbar: e, $el: i } = t;
                    t.params.scrollbar = H(t, t.originalParams.scrollbar, t.params.scrollbar, { el: "swiper-scrollbar" });
                    let s = t.params.scrollbar;
                    if (!s.el) return;
                    let n = d(s.el);
                    t.params.uniqueNavElements && "string" == typeof s.el && n.length > 1 && 1 === i.find(s.el).length && (n = i.find(s.el)), n.addClass(t.isHorizontal() ? s.horizontalClass : s.verticalClass);
                    let r = n.find(`.${t.params.scrollbar.dragClass}`);
                    0 === r.length && ((r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`)), n.append(r)),
                        Object.assign(e, { $el: n, el: n[0], $dragEl: r, dragEl: r[0] }),
                        s.draggable && t.params.scrollbar.el && t.scrollbar.el && x("on"),
                        n && n[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
                }
                function C() {
                    let e = t.params.scrollbar,
                        i = t.scrollbar.$el;
                    i && i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && x("off");
                }
                i({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: "swiper-scrollbar-horizontal",
                        verticalClass: "swiper-scrollbar-vertical",
                    },
                }),
                    (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
                    n("init", () => {
                        !1 === t.params.scrollbar.enabled ? S() : (E(), v(), g());
                    }),
                    n("update resize observerUpdate lock unlock", () => {
                        v();
                    }),
                    n("setTranslate", () => {
                        g();
                    }),
                    n("setTransition", (e, i) => {
                        var s;
                        (s = i), t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(s);
                    }),
                    n("enable disable", () => {
                        let { $el: e } = t.scrollbar;
                        e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
                    }),
                    n("destroy", () => {
                        C();
                    });
                let S = () => {
                    t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), C();
                };
                Object.assign(t.scrollbar, {
                    enable() {
                        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), E(), v(), g();
                    },
                    disable: S,
                    updateSize: v,
                    setTranslate: g,
                    init: E,
                    destroy: C,
                });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                i({ parallax: { enabled: !1 } });
                let n = (e, i) => {
                        let { rtl: s } = t,
                            n = d(e),
                            r = s ? -1 : 1,
                            a = n.attr("data-swiper-parallax") || "0",
                            o = n.attr("data-swiper-parallax-x"),
                            l = n.attr("data-swiper-parallax-y"),
                            c = n.attr("data-swiper-parallax-scale"),
                            u = n.attr("data-swiper-parallax-opacity");
                        o || l ? ((o = o || "0"), (l = l || "0")) : t.isHorizontal() ? ((o = a), (l = "0")) : ((l = a), (o = "0")),
                            (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i * r + "%" : o * i * r + "px"),
                            (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px"),
                            null != u && (n[0].style.opacity = u - (u - 1) * (1 - Math.abs(i))),
                            null == c ? n.transform(`translate3d(${o}, ${l}, 0px)`) : n.transform(`translate3d(${o}, ${l}, 0px) scale(${c - (c - 1) * (1 - Math.abs(i))})`);
                    },
                    r = () => {
                        let { $el: e, slides: i, progress: s, snapGrid: r } = t;
                        e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e) => {
                            n(e, s);
                        }),
                            i.each((e, i) => {
                                let a = e.progress;
                                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (a += Math.ceil(i / 2) - s * (r.length - 1)),
                                    (a = Math.min(Math.max(a, -1), 1)),
                                    d(e)
                                        .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                        .each((e) => {
                                            n(e, a);
                                        });
                            });
                    };
                s("beforeInit", () => {
                    t.params.parallax.enabled && ((t.params.watchSlidesProgress = !0), (t.originalParams.watchSlidesProgress = !0));
                }),
                    s("init", () => {
                        t.params.parallax.enabled && r();
                    }),
                    s("setTranslate", () => {
                        t.params.parallax.enabled && r();
                    }),
                    s("setTransition", (e, i) => {
                        t.params.parallax.enabled &&
                            (function (e) {
                                void 0 === e && (e = t.params.speed);
                                let { $el: i } = t;
                                i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t) => {
                                    let i = d(t),
                                        s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                                    0 === e && (s = 0), i.transition(s);
                                });
                            })(i);
                    });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s, emit: n } = e,
                    a = r();
                i({ zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), (t.zoom = { enabled: !1 });
                let o,
                    l,
                    c,
                    u = 1,
                    h = !1,
                    f = { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                    m = {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {},
                    },
                    g = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                    v = 1;
                function $(e) {
                    if (e.targetTouches.length < 2) return 1;
                    let t = e.targetTouches[0].pageX,
                        i = e.targetTouches[0].pageY,
                        s = e.targetTouches[1].pageX,
                        n = e.targetTouches[1].pageY;
                    return Math.sqrt((s - t) ** 2 + (n - i) ** 2);
                }
                function y(e) {
                    let i = t.support,
                        s = t.params.zoom;
                    if (((l = !1), (c = !1), !i.gestures)) {
                        if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                        (l = !0), (f.scaleStart = $(e));
                    }
                    (f.$slideEl && f.$slideEl.length) ||
                    ((f.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
                    0 === f.$slideEl.length && (f.$slideEl = t.slides.eq(t.activeIndex)),
                    (f.$imageEl = f.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0)),
                    (f.$imageWrapEl = f.$imageEl.parent(`.${s.containerClass}`)),
                    (f.maxRatio = f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                    0 !== f.$imageWrapEl.length)
                        ? (f.$imageEl && f.$imageEl.transition(0), (h = !0))
                        : (f.$imageEl = void 0);
                }
                function b(e) {
                    let i = t.support,
                        s = t.params.zoom,
                        n = t.zoom;
                    if (!i.gestures) {
                        if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                        (c = !0), (f.scaleMove = $(e));
                    }
                    f.$imageEl && 0 !== f.$imageEl.length
                        ? (i.gestures ? (n.scale = e.scale * u) : (n.scale = (f.scaleMove / f.scaleStart) * u),
                          n.scale > f.maxRatio && (n.scale = f.maxRatio - 1 + (n.scale - f.maxRatio + 1) ** 0.5),
                          n.scale < s.minRatio && (n.scale = s.minRatio + 1 - (s.minRatio - n.scale + 1) ** 0.5),
                          f.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`))
                        : "gesturechange" === e.type && y(e);
                }
                function w(e) {
                    let i = t.device,
                        s = t.support,
                        n = t.params.zoom,
                        r = t.zoom;
                    if (!s.gestures) {
                        if (!l || !c || "touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !i.android)) return;
                        (l = !1), (c = !1);
                    }
                    f.$imageEl &&
                        0 !== f.$imageEl.length &&
                        ((r.scale = Math.max(Math.min(r.scale, f.maxRatio), n.minRatio)),
                        f.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),
                        (u = r.scale),
                        (h = !1),
                        1 === r.scale && (f.$slideEl = void 0));
                }
                function _(e) {
                    let i = t.zoom;
                    if (!f.$imageEl || 0 === f.$imageEl.length || ((t.allowClick = !1), !m.isTouched || !f.$slideEl)) return;
                    m.isMoved ||
                        ((m.width = f.$imageEl[0].offsetWidth),
                        (m.height = f.$imageEl[0].offsetHeight),
                        (m.startX = p(f.$imageWrapEl[0], "x") || 0),
                        (m.startY = p(f.$imageWrapEl[0], "y") || 0),
                        (f.slideWidth = f.$slideEl[0].offsetWidth),
                        (f.slideHeight = f.$slideEl[0].offsetHeight),
                        f.$imageWrapEl.transition(0));
                    let s = m.width * i.scale,
                        n = m.height * i.scale;
                    if (!(s < f.slideWidth && n < f.slideHeight)) {
                        if (
                            ((m.minX = Math.min(f.slideWidth / 2 - s / 2, 0)),
                            (m.maxX = -m.minX),
                            (m.minY = Math.min(f.slideHeight / 2 - n / 2, 0)),
                            (m.maxY = -m.minY),
                            (m.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (m.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                            !m.isMoved &&
                                !h &&
                                ((t.isHorizontal() && ((Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x) || (Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x))) ||
                                    (!t.isHorizontal() && ((Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y) || (Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)))))
                        )
                            return void (m.isTouched = !1);
                        e.cancelable && e.preventDefault(),
                            e.stopPropagation(),
                            (m.isMoved = !0),
                            (m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX),
                            (m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY),
                            m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8),
                            m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8),
                            m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8),
                            m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8),
                            g.prevPositionX || (g.prevPositionX = m.touchesCurrent.x),
                            g.prevPositionY || (g.prevPositionY = m.touchesCurrent.y),
                            g.prevTime || (g.prevTime = Date.now()),
                            (g.x = (m.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2),
                            (g.y = (m.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2),
                            2 > Math.abs(m.touchesCurrent.x - g.prevPositionX) && (g.x = 0),
                            2 > Math.abs(m.touchesCurrent.y - g.prevPositionY) && (g.y = 0),
                            (g.prevPositionX = m.touchesCurrent.x),
                            (g.prevPositionY = m.touchesCurrent.y),
                            (g.prevTime = Date.now()),
                            f.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`);
                    }
                }
                function x() {
                    let e = t.zoom;
                    f.$slideEl &&
                        t.previousIndex !== t.activeIndex &&
                        (f.$imageEl && f.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                        f.$imageWrapEl && f.$imageWrapEl.transform("translate3d(0,0,0)"),
                        (e.scale = 1),
                        (u = 1),
                        (f.$slideEl = void 0),
                        (f.$imageEl = void 0),
                        (f.$imageWrapEl = void 0));
                }
                function E(e) {
                    let i = t.zoom,
                        s = t.params.zoom;
                    if (
                        (f.$slideEl ||
                            (e && e.target && (f.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
                            f.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? (f.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`)) : (f.$slideEl = t.slides.eq(t.activeIndex))),
                            (f.$imageEl = f.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0)),
                            (f.$imageWrapEl = f.$imageEl.parent(`.${s.containerClass}`))),
                        !f.$imageEl || 0 === f.$imageEl.length || !f.$imageWrapEl || 0 === f.$imageWrapEl.length)
                    )
                        return;
                    let n, r, o, l, c, h, p, g, v, $, y, b, w, _, x, E, C, S;
                    t.params.cssMode && ((t.wrapperEl.style.overflow = "hidden"), (t.wrapperEl.style.touchAction = "none")),
                        f.$slideEl.addClass(`${s.zoomedSlideClass}`),
                        void 0 === m.touchesStart.x && e
                            ? ((n = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                            : ((n = m.touchesStart.x), (r = m.touchesStart.y)),
                        (i.scale = f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                        (u = f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                        e
                            ? ((C = f.$slideEl[0].offsetWidth),
                              (S = f.$slideEl[0].offsetHeight),
                              (o = f.$slideEl.offset().left + a.scrollX),
                              (l = f.$slideEl.offset().top + a.scrollY),
                              (c = o + C / 2 - n),
                              (h = l + S / 2 - r),
                              (v = f.$imageEl[0].offsetWidth),
                              ($ = f.$imageEl[0].offsetHeight),
                              (y = v * i.scale),
                              (b = $ * i.scale),
                              (w = Math.min(C / 2 - y / 2, 0)),
                              (_ = Math.min(S / 2 - b / 2, 0)),
                              (x = -w),
                              (E = -_),
                              (p = c * i.scale),
                              (g = h * i.scale),
                              p < w && (p = w),
                              p > x && (p = x),
                              g < _ && (g = _),
                              g > E && (g = E))
                            : ((p = 0), (g = 0)),
                        f.$imageWrapEl.transition(300).transform(`translate3d(${p}px, ${g}px,0)`),
                        f.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${i.scale})`);
                }
                function C() {
                    let e = t.zoom,
                        i = t.params.zoom;
                    f.$slideEl ||
                        (t.params.virtual && t.params.virtual.enabled && t.virtual ? (f.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`)) : (f.$slideEl = t.slides.eq(t.activeIndex)),
                        (f.$imageEl = f.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0)),
                        (f.$imageWrapEl = f.$imageEl.parent(`.${i.containerClass}`))),
                        f.$imageEl &&
                            0 !== f.$imageEl.length &&
                            f.$imageWrapEl &&
                            0 !== f.$imageWrapEl.length &&
                            (t.params.cssMode && ((t.wrapperEl.style.overflow = ""), (t.wrapperEl.style.touchAction = "")),
                            (e.scale = 1),
                            (u = 1),
                            f.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                            f.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                            f.$slideEl.removeClass(`${i.zoomedSlideClass}`),
                            (f.$slideEl = void 0));
                }
                function S(e) {
                    let i = t.zoom;
                    i.scale && 1 !== i.scale ? C() : E(e);
                }
                function T() {
                    let e = t.support;
                    return {
                        passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 },
                        activeListenerWithCapture: !e.passiveListener || { passive: !1, capture: !0 },
                    };
                }
                function k() {
                    return `.${t.params.slideClass}`;
                }
                function A(e) {
                    let { passiveListener: i } = T(),
                        s = k();
                    t.$wrapperEl[e]("gesturestart", s, y, i), t.$wrapperEl[e]("gesturechange", s, b, i), t.$wrapperEl[e]("gestureend", s, w, i);
                }
                function L() {
                    o || ((o = !0), A("on"));
                }
                function P() {
                    o && ((o = !1), A("off"));
                }
                function z() {
                    let e = t.zoom;
                    if (e.enabled) return;
                    e.enabled = !0;
                    let i = t.support,
                        { passiveListener: s, activeListenerWithCapture: n } = T(),
                        r = k();
                    i.gestures
                        ? (t.$wrapperEl.on(t.touchEvents.start, L, s), t.$wrapperEl.on(t.touchEvents.end, P, s))
                        : "touchstart" === t.touchEvents.start &&
                          (t.$wrapperEl.on(t.touchEvents.start, r, y, s), t.$wrapperEl.on(t.touchEvents.move, r, b, n), t.$wrapperEl.on(t.touchEvents.end, r, w, s), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, w, s)),
                        t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, _, n);
                }
                function I() {
                    let e = t.zoom;
                    if (!e.enabled) return;
                    let i = t.support;
                    e.enabled = !1;
                    let { passiveListener: s, activeListenerWithCapture: n } = T(),
                        r = k();
                    i.gestures
                        ? (t.$wrapperEl.off(t.touchEvents.start, L, s), t.$wrapperEl.off(t.touchEvents.end, P, s))
                        : "touchstart" === t.touchEvents.start &&
                          (t.$wrapperEl.off(t.touchEvents.start, r, y, s),
                          t.$wrapperEl.off(t.touchEvents.move, r, b, n),
                          t.$wrapperEl.off(t.touchEvents.end, r, w, s),
                          t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, w, s)),
                        t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, _, n);
                }
                Object.defineProperty(t.zoom, "scale", {
                    get: () => v,
                    set(e) {
                        if (v !== e) {
                            let t = f.$imageEl ? f.$imageEl[0] : void 0,
                                i = f.$slideEl ? f.$slideEl[0] : void 0;
                            n("zoomChange", e, t, i);
                        }
                        v = e;
                    },
                }),
                    s("init", () => {
                        t.params.zoom.enabled && z();
                    }),
                    s("destroy", () => {
                        I();
                    }),
                    s("touchStart", (e, i) => {
                        t.zoom.enabled &&
                            (function (e) {
                                let i = t.device;
                                f.$imageEl &&
                                    0 !== f.$imageEl.length &&
                                    (m.isTouched ||
                                        (i.android && e.cancelable && e.preventDefault(),
                                        (m.isTouched = !0),
                                        (m.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                                        (m.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
                            })(i);
                    }),
                    s("touchEnd", (e, i) => {
                        t.zoom.enabled &&
                            (function () {
                                let e = t.zoom;
                                if (!f.$imageEl || 0 === f.$imageEl.length) return;
                                if (!m.isTouched || !m.isMoved) return (m.isTouched = !1), void (m.isMoved = !1);
                                (m.isTouched = !1), (m.isMoved = !1);
                                let i = 300,
                                    s = 300,
                                    n = g.x * i,
                                    r = m.currentX + n,
                                    a = g.y * s,
                                    o = m.currentY + a;
                                0 !== g.x && (i = Math.abs((r - m.currentX) / g.x)), 0 !== g.y && (s = Math.abs((o - m.currentY) / g.y));
                                let l = Math.max(i, s);
                                (m.currentX = r), (m.currentY = o);
                                let d = m.width * e.scale,
                                    c = m.height * e.scale;
                                (m.minX = Math.min(f.slideWidth / 2 - d / 2, 0)),
                                    (m.maxX = -m.minX),
                                    (m.minY = Math.min(f.slideHeight / 2 - c / 2, 0)),
                                    (m.maxY = -m.minY),
                                    (m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX)),
                                    (m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY)),
                                    f.$imageWrapEl.transition(l).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`);
                            })();
                    }),
                    s("doubleTap", (e, i) => {
                        !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(i);
                    }),
                    s("transitionEnd", () => {
                        t.zoom.enabled && t.params.zoom.enabled && x();
                    }),
                    s("slideChange", () => {
                        t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && x();
                    }),
                    Object.assign(t.zoom, { enable: z, disable: I, in: E, out: C, toggle: S });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s, emit: n } = e;
                i({
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                }),
                    (t.lazy = {});
                let a = !1,
                    o = !1;
                function l(e, i) {
                    void 0 === i && (i = !0);
                    let s = t.params.lazy;
                    if (void 0 === e || 0 === t.slides.length) return;
                    let r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                        a = r.find(`.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`);
                    !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || a.push(r[0]),
                        0 !== a.length &&
                            a.each((e) => {
                                let a = d(e);
                                a.addClass(s.loadingClass);
                                let o = a.attr("data-background"),
                                    c = a.attr("data-src"),
                                    u = a.attr("data-srcset"),
                                    h = a.attr("data-sizes"),
                                    p = a.parent("picture");
                                t.loadImage(a[0], c || o, u, h, !1, () => {
                                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                                        if (
                                            (o
                                                ? (a.css("background-image", `url("${o}")`), a.removeAttr("data-background"))
                                                : (u && (a.attr("srcset", u), a.removeAttr("data-srcset")),
                                                  h && (a.attr("sizes", h), a.removeAttr("data-sizes")),
                                                  p.length &&
                                                      p.children("source").each((e) => {
                                                          let t = d(e);
                                                          t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                                                      }),
                                                  c && (a.attr("src", c), a.removeAttr("data-src"))),
                                            a.addClass(s.loadedClass).removeClass(s.loadingClass),
                                            r.find(`.${s.preloaderClass}`).remove(),
                                            t.params.loop && i)
                                        ) {
                                            let e = r.attr("data-swiper-slide-index");
                                            r.hasClass(t.params.slideDuplicateClass)
                                                ? l(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                                                : l(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1);
                                        }
                                        n("lazyImageReady", r[0], a[0]), t.params.autoHeight && t.updateAutoHeight();
                                    }
                                }),
                                    n("lazyImageLoad", r[0], a[0]);
                            });
                }
                function c() {
                    let { $wrapperEl: e, params: i, slides: s, activeIndex: n } = t,
                        r = t.virtual && i.virtual.enabled,
                        a = i.lazy,
                        c = i.slidesPerView;
                    function u(t) {
                        if (r) {
                            if (e.children(`.${i.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0;
                        } else if (s[t]) return !0;
                        return !1;
                    }
                    function h(e) {
                        return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
                    }
                    if (("auto" === c && (c = 0), o || (o = !0), t.params.watchSlidesProgress))
                        e.children(`.${i.slideVisibleClass}`).each((e) => {
                            l(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
                        });
                    else if (c > 1) for (let p = n; p < n + c; p += 1) u(p) && l(p);
                    else l(n);
                    if (a.loadPrevNext) {
                        if (c > 1 || (a.loadPrevNextAmount && a.loadPrevNextAmount > 1)) {
                            let f = a.loadPrevNextAmount,
                                m = Math.ceil(c),
                                g = Math.min(n + m + Math.max(f, m), s.length),
                                v = Math.max(n - Math.max(m, f), 0);
                            for (let $ = n + m; $ < g; $ += 1) u($) && l($);
                            for (let y = v; y < n; y += 1) u(y) && l(y);
                        } else {
                            let b = e.children(`.${i.slideNextClass}`);
                            b.length > 0 && l(h(b));
                            let w = e.children(`.${i.slidePrevClass}`);
                            w.length > 0 && l(h(w));
                        }
                    }
                }
                function u() {
                    let e = r();
                    if (!t || t.destroyed) return;
                    let i = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
                        s = i[0] === e,
                        n = s ? e.innerWidth : i[0].offsetWidth,
                        o = s ? e.innerHeight : i[0].offsetHeight,
                        l = t.$el.offset(),
                        { rtlTranslate: h } = t,
                        p = !1;
                    h && (l.left -= t.$el[0].scrollLeft);
                    let f = [
                        [l.left, l.top],
                        [l.left + t.width, l.top],
                        [l.left, l.top + t.height],
                        [l.left + t.width, l.top + t.height],
                    ];
                    for (let m = 0; m < f.length; m += 1) {
                        let g = f[m];
                        if (g[0] >= 0 && g[0] <= n && g[1] >= 0 && g[1] <= o) {
                            if (0 === g[0] && 0 === g[1]) continue;
                            p = !0;
                        }
                    }
                    let v = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
                    p ? (c(), i.off("scroll", u, v)) : a || ((a = !0), i.on("scroll", u, v));
                }
                s("beforeInit", () => {
                    t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
                }),
                    s("init", () => {
                        t.params.lazy.enabled && (t.params.lazy.checkInView ? u() : c());
                    }),
                    s("scroll", () => {
                        t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c();
                    }),
                    s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
                        t.params.lazy.enabled && (t.params.lazy.checkInView ? u() : c());
                    }),
                    s("transitionStart", () => {
                        t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || (!t.params.lazy.loadOnTransitionStart && !o)) && (t.params.lazy.checkInView ? u() : c());
                    }),
                    s("transitionEnd", () => {
                        t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? u() : c());
                    }),
                    s("slideChange", () => {
                        let { lazy: e, cssMode: i, watchSlidesProgress: s, touchReleaseOnEdges: n, resistanceRatio: r } = t.params;
                        e.enabled && (i || (s && (n || 0 === r))) && c();
                    }),
                    s("destroy", () => {
                        t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass);
                    }),
                    Object.assign(t.lazy, { load: c, loadInSlide: l });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                function n(e, t) {
                    let i,
                        s,
                        n,
                        r = (e, t) => {
                            for (s = -1, i = e.length; i - s > 1; ) e[(n = (i + s) >> 1)] <= t ? (s = n) : (i = n);
                            return i;
                        },
                        a,
                        o;
                    return (
                        (this.x = e),
                        (this.y = t),
                        (this.lastIndex = e.length - 1),
                        (this.interpolate = function (e) {
                            return e ? ((a = (o = r(this.x, e)) - 1), ((e - this.x[a]) * (this.y[o] - this.y[a])) / (this.x[o] - this.x[a]) + this.y[a]) : 0;
                        }),
                        this
                    );
                }
                function r() {
                    t.controller.control && t.controller.spline && ((t.controller.spline = void 0), delete t.controller.spline);
                }
                i({ controller: { control: void 0, inverse: !1, by: "slide" } }),
                    (t.controller = { control: void 0 }),
                    s("beforeInit", () => {
                        t.controller.control = t.params.controller.control;
                    }),
                    s("update", () => {
                        r();
                    }),
                    s("resize", () => {
                        r();
                    }),
                    s("observerUpdate", () => {
                        r();
                    }),
                    s("setTranslate", (e, i, s) => {
                        t.controller.control && t.controller.setTranslate(i, s);
                    }),
                    s("setTransition", (e, i, s) => {
                        t.controller.control && t.controller.setTransition(i, s);
                    }),
                    Object.assign(t.controller, {
                        setTranslate: function (e, i) {
                            let s = t.controller.control,
                                r,
                                a,
                                o = t.constructor;
                            function l(e) {
                                var i;
                                let s = t.rtlTranslate ? -t.translate : t.translate;
                                "slide" === t.params.controller.by &&
                                    ((i = e), t.controller.spline || (t.controller.spline = t.params.loop ? new n(t.slidesGrid, i.slidesGrid) : new n(t.snapGrid, i.snapGrid)), (a = -t.controller.spline.interpolate(-s))),
                                    (a && "container" !== t.params.controller.by) || ((r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate())), (a = (s - t.minTranslate()) * r + e.minTranslate())),
                                    t.params.controller.inverse && (a = e.maxTranslate() - a),
                                    e.updateProgress(a),
                                    e.setTranslate(a, t),
                                    e.updateActiveIndex(),
                                    e.updateSlidesClasses();
                            }
                            if (Array.isArray(s)) for (let d = 0; d < s.length; d += 1) s[d] !== i && s[d] instanceof o && l(s[d]);
                            else s instanceof o && i !== s && l(s);
                        },
                        setTransition: function (e, i) {
                            let s = t.constructor,
                                n = t.controller.control,
                                r;
                            function a(i) {
                                i.setTransition(e, t),
                                    0 !== e &&
                                        (i.transitionStart(),
                                        i.params.autoHeight &&
                                            u(() => {
                                                i.updateAutoHeight();
                                            }),
                                        i.$wrapperEl.transitionEnd(() => {
                                            n && (i.params.loop && "slide" === t.params.controller.by && i.loopFix(), i.transitionEnd());
                                        }));
                            }
                            if (Array.isArray(n)) for (r = 0; r < n.length; r += 1) n[r] !== i && n[r] instanceof s && a(n[r]);
                            else n instanceof s && i !== n && a(n);
                        },
                    });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                i({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null,
                    },
                }),
                    (t.a11y = { clicked: !1 });
                let n = null;
                function r(e) {
                    let t = n;
                    0 !== t.length && (t.html(""), t.html(e));
                }
                function a(e) {
                    e.attr("tabIndex", "0");
                }
                function o(e) {
                    e.attr("tabIndex", "-1");
                }
                function l(e, t) {
                    e.attr("role", t);
                }
                function c(e, t) {
                    e.attr("aria-roledescription", t);
                }
                function u(e, t) {
                    e.attr("aria-label", t);
                }
                function h(e) {
                    e.attr("aria-disabled", !0);
                }
                function p(e) {
                    e.attr("aria-disabled", !1);
                }
                function f(e) {
                    if (13 !== e.keyCode && 32 !== e.keyCode) return;
                    let i = t.params.a11y,
                        s = d(e.target);
                    t.navigation && t.navigation.$nextEl && s.is(t.navigation.$nextEl) && ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? r(i.lastSlideMessage) : r(i.nextSlideMessage)),
                        t.navigation && t.navigation.$prevEl && s.is(t.navigation.$prevEl) && ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? r(i.firstSlideMessage) : r(i.prevSlideMessage)),
                        t.pagination && s.is(W(t.params.pagination.bulletClass)) && s[0].click();
                }
                function m() {
                    return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
                }
                function g() {
                    return m() && t.params.pagination.clickable;
                }
                let v = (e, t, i) => {
                        a(e),
                            "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", f)),
                            u(e, i),
                            (function (e, t) {
                                e.attr("aria-controls", t);
                            })(e, t);
                    },
                    $ = () => {
                        t.a11y.clicked = !0;
                    },
                    y = () => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                t.destroyed || (t.a11y.clicked = !1);
                            });
                        });
                    },
                    b = (e) => {
                        if (t.a11y.clicked) return;
                        let i = e.target.closest(`.${t.params.slideClass}`);
                        if (!i || !t.slides.includes(i)) return;
                        let s = t.slides.indexOf(i) === t.activeIndex,
                            n = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(i);
                        s || n || (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) || (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0), t.slideTo(t.slides.indexOf(i), 0));
                    },
                    w = () => {
                        let e = t.params.a11y;
                        e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && l(d(t.slides), e.slideRole);
                        let i = t.params.loop ? t.slides.filter((e) => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
                        e.slideLabelMessage &&
                            t.slides.each((s, n) => {
                                let r = d(s),
                                    a = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : n;
                                u(r, e.slideLabelMessage.replace(/\{\{index\}\}/, a + 1).replace(/\{\{slidesLength\}\}/, i));
                            });
                    },
                    _ = () => {
                        var e, i;
                        let s = t.params.a11y;
                        t.$el.append(n);
                        let r = t.$el;
                        s.containerRoleDescriptionMessage && c(r, s.containerRoleDescriptionMessage), s.containerMessage && u(r, s.containerMessage);
                        let a = t.$wrapperEl,
                            o = s.id || a.attr("id") || `swiper-wrapper-${((e = 16), "x".repeat(e).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))}`,
                            l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite",
                            d,
                            h;
                        (i = o),
                            a.attr("id", i),
                            (function (e, t) {
                                e.attr("aria-live", t);
                            })(a, l),
                            w(),
                            t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl),
                            t.navigation && t.navigation.$prevEl && (h = t.navigation.$prevEl),
                            d && d.length && v(d, o, s.nextSlideMessage),
                            h && h.length && v(h, o, s.prevSlideMessage),
                            g() && t.pagination.$el.on("keydown", W(t.params.pagination.bulletClass), f),
                            t.$el.on("focus", b, !0),
                            t.$el.on("pointerdown", $, !0),
                            t.$el.on("pointerup", y, !0);
                    };
                s("beforeInit", () => {
                    n = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
                }),
                    s("afterInit", () => {
                        t.params.a11y.enabled && _();
                    }),
                    s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
                        t.params.a11y.enabled && w();
                    }),
                    s("fromEdge toEdge afterInit lock unlock", () => {
                        t.params.a11y.enabled &&
                            (function () {
                                if (t.params.loop || t.params.rewind || !t.navigation) return;
                                let { $nextEl: e, $prevEl: i } = t.navigation;
                                i && i.length > 0 && (t.isBeginning ? (h(i), o(i)) : (p(i), a(i))), e && e.length > 0 && (t.isEnd ? (h(e), o(e)) : (p(e), a(e)));
                            })();
                    }),
                    s("paginationUpdate", () => {
                        t.params.a11y.enabled &&
                            (function () {
                                let e = t.params.a11y;
                                m() &&
                                    t.pagination.bullets.each((i) => {
                                        let s = d(i);
                                        t.params.pagination.clickable && (a(s), t.params.pagination.renderBullet || (l(s, "button"), u(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)))),
                                            s.is(`.${t.params.pagination.bulletActiveClass}`) ? s.attr("aria-current", "true") : s.removeAttr("aria-current");
                                    });
                            })();
                    }),
                    s("destroy", () => {
                        let e, i;
                        t.params.a11y.enabled &&
                            (n && n.length > 0 && n.remove(),
                            t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
                            t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl),
                            e && e.off("keydown", f),
                            i && i.off("keydown", f),
                            g() && t.pagination.$el.off("keydown", W(t.params.pagination.bulletClass), f),
                            t.$el.off("focus", b, !0),
                            t.$el.off("pointerdown", $, !0),
                            t.$el.off("pointerup", y, !0));
                    });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                i({ history: { enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1 } });
                let n = !1,
                    a = {},
                    o = (e) =>
                        e
                            .toString()
                            .replace(/\s+/g, "-")
                            .replace(/[^\w-]+/g, "")
                            .replace(/--+/g, "-")
                            .replace(/^-+/, "")
                            .replace(/-+$/, ""),
                    l = (e) => {
                        let t = r(),
                            i;
                        i = e ? new URL(e) : t.location;
                        let s = i.pathname
                                .slice(1)
                                .split("/")
                                .filter((e) => "" !== e),
                            n = s.length;
                        return { key: s[n - 2], value: s[n - 1] };
                    },
                    d = (e, i) => {
                        let s = r();
                        if (!n || !t.params.history.enabled) return;
                        let a;
                        a = t.params.url ? new URL(t.params.url) : s.location;
                        let l = t.slides.eq(i),
                            d = o(l.attr("data-history"));
                        if (t.params.history.root.length > 0) {
                            let c = t.params.history.root;
                            "/" === c[c.length - 1] && (c = c.slice(0, c.length - 1)), (d = `${c}/${e}/${d}`);
                        } else a.pathname.includes(e) || (d = `${e}/${d}`);
                        t.params.history.keepQuery && (d += a.search);
                        let u = s.history.state;
                        (u && u.value === d) || (t.params.history.replaceState ? s.history.replaceState({ value: d }, null, d) : s.history.pushState({ value: d }, null, d));
                    },
                    c = (e, i, s) => {
                        if (i)
                            for (let n = 0, r = t.slides.length; n < r; n += 1) {
                                let a = t.slides.eq(n);
                                if (o(a.attr("data-history")) === i && !a.hasClass(t.params.slideDuplicateClass)) {
                                    let l = a.index();
                                    t.slideTo(l, e, s);
                                }
                            }
                        else t.slideTo(0, e, s);
                    },
                    u = () => {
                        (a = l(t.params.url)), c(t.params.speed, a.value, !1);
                    };
                s("init", () => {
                    t.params.history.enabled &&
                        (() => {
                            let e = r();
                            if (t.params.history) {
                                if (!e.history || !e.history.pushState) return (t.params.history.enabled = !1), void (t.params.hashNavigation.enabled = !0);
                                (n = !0), ((a = l(t.params.url)).key || a.value) && (c(0, a.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", u));
                            }
                        })();
                }),
                    s("destroy", () => {
                        t.params.history.enabled &&
                            (() => {
                                let e = r();
                                t.params.history.replaceState || e.removeEventListener("popstate", u);
                            })();
                    }),
                    s("transitionEnd _freeModeNoMomentumRelease", () => {
                        n && d(t.params.history.key, t.activeIndex);
                    }),
                    s("slideChange", () => {
                        n && t.params.cssMode && d(t.params.history.key, t.activeIndex);
                    });
            },
            function (e) {
                let { swiper: t, extendParams: i, emit: n, on: a } = e,
                    o = !1,
                    l = s(),
                    c = r();
                i({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
                let u = () => {
                        n("hashChange");
                        let e = l.location.hash.replace("#", "");
                        if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                            let i = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                            if (void 0 === i) return;
                            t.slideTo(i);
                        }
                    },
                    h = () => {
                        if (o && t.params.hashNavigation.enabled) {
                            if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), n("hashSet");
                            else {
                                let e = t.slides.eq(t.activeIndex),
                                    i = e.attr("data-hash") || e.attr("data-history");
                                (l.location.hash = i || ""), n("hashSet");
                            }
                        }
                    };
                a("init", () => {
                    t.params.hashNavigation.enabled &&
                        (() => {
                            if (!t.params.hashNavigation.enabled || (t.params.history && t.params.history.enabled)) return;
                            o = !0;
                            let e = l.location.hash.replace("#", "");
                            if (e)
                                for (let i = 0, s = t.slides.length; i < s; i += 1) {
                                    let n = t.slides.eq(i);
                                    if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(t.params.slideDuplicateClass)) {
                                        let r = n.index();
                                        t.slideTo(r, 0, t.params.runCallbacksOnInit, !0);
                                    }
                                }
                            t.params.hashNavigation.watchState && d(c).on("hashchange", u);
                        })();
                }),
                    a("destroy", () => {
                        t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", u);
                    }),
                    a("transitionEnd _freeModeNoMomentumRelease", () => {
                        o && h();
                    }),
                    a("slideChange", () => {
                        o && t.params.cssMode && h();
                    });
            },
            function (e) {
                let t,
                    { swiper: i, extendParams: n, on: r, emit: a } = e;
                function o() {
                    if (!i.size) return (i.autoplay.running = !1), void (i.autoplay.paused = !1);
                    let e = i.slides.eq(i.activeIndex),
                        s = i.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (s = e.attr("data-swiper-autoplay") || i.params.autoplay.delay),
                        clearTimeout(t),
                        (t = u(() => {
                            let e;
                            i.params.autoplay.reverseDirection
                                ? i.params.loop
                                    ? (i.loopFix(), (e = i.slidePrev(i.params.speed, !0, !0)), a("autoplay"))
                                    : i.isBeginning
                                    ? i.params.autoplay.stopOnLastSlide
                                        ? d()
                                        : ((e = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0)), a("autoplay"))
                                    : ((e = i.slidePrev(i.params.speed, !0, !0)), a("autoplay"))
                                : i.params.loop
                                ? (i.loopFix(), (e = i.slideNext(i.params.speed, !0, !0)), a("autoplay"))
                                : i.isEnd
                                ? i.params.autoplay.stopOnLastSlide
                                    ? d()
                                    : ((e = i.slideTo(0, i.params.speed, !0, !0)), a("autoplay"))
                                : ((e = i.slideNext(i.params.speed, !0, !0)), a("autoplay")),
                                ((i.params.cssMode && i.autoplay.running) || !1 === e) && o();
                        }, s));
                }
                function l() {
                    return void 0 === t && !i.autoplay.running && ((i.autoplay.running = !0), a("autoplayStart"), o(), !0);
                }
                function d() {
                    return !!i.autoplay.running && void 0 !== t && (t && (clearTimeout(t), (t = void 0)), (i.autoplay.running = !1), a("autoplayStop"), !0);
                }
                function c(e) {
                    i.autoplay.running &&
                        (i.autoplay.paused ||
                            (t && clearTimeout(t),
                            (i.autoplay.paused = !0),
                            0 !== e && i.params.autoplay.waitForTransition
                                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                                      i.$wrapperEl[0].addEventListener(e, p);
                                  })
                                : ((i.autoplay.paused = !1), o())));
                }
                function h() {
                    let e = s();
                    "hidden" === e.visibilityState && i.autoplay.running && c(), "visible" === e.visibilityState && i.autoplay.paused && (o(), (i.autoplay.paused = !1));
                }
                function p(e) {
                    i &&
                        !i.destroyed &&
                        i.$wrapperEl &&
                        e.target === i.$wrapperEl[0] &&
                        (["transitionend", "webkitTransitionEnd"].forEach((e) => {
                            i.$wrapperEl[0].removeEventListener(e, p);
                        }),
                        (i.autoplay.paused = !1),
                        i.autoplay.running ? o() : d());
                }
                function f() {
                    i.params.autoplay.disableOnInteraction ? d() : (a("autoplayPause"), c()),
                        ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                            i.$wrapperEl[0].removeEventListener(e, p);
                        });
                }
                function m() {
                    i.params.autoplay.disableOnInteraction || ((i.autoplay.paused = !1), a("autoplayResume"), o());
                }
                (i.autoplay = { running: !1, paused: !1 }),
                    n({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } }),
                    r("init", () => {
                        i.params.autoplay.enabled && (l(), s().addEventListener("visibilitychange", h), i.params.autoplay.pauseOnMouseEnter && (i.$el.on("mouseenter", f), i.$el.on("mouseleave", m)));
                    }),
                    r("beforeTransitionStart", (e, t, s) => {
                        i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(t) : d());
                    }),
                    r("sliderFirstMove", () => {
                        i.autoplay.running && (i.params.autoplay.disableOnInteraction ? d() : c());
                    }),
                    r("touchEnd", () => {
                        i.params.cssMode && i.autoplay.paused && !i.params.autoplay.disableOnInteraction && o();
                    }),
                    r("destroy", () => {
                        i.$el.off("mouseenter", f), i.$el.off("mouseleave", m), i.autoplay.running && d(), s().removeEventListener("visibilitychange", h);
                    }),
                    Object.assign(i.autoplay, { pause: c, run: o, start: l, stop: d });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                i({ thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
                let n = !1,
                    r = !1;
                function a() {
                    let e = t.thumbs.swiper;
                    if (!e || e.destroyed) return;
                    let i = e.clickedIndex,
                        s = e.clickedSlide;
                    if ((s && d(s).hasClass(t.params.thumbs.slideThumbActiveClass)) || null == i) return;
                    let n;
                    if (((n = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : i), t.params.loop)) {
                        let r = t.activeIndex;
                        t.slides.eq(r).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), (t._clientLeft = t.$wrapperEl[0].clientLeft), (r = t.activeIndex));
                        let a = t.slides.eq(r).prevAll(`[data-swiper-slide-index="${n}"]`).eq(0).index(),
                            o = t.slides.eq(r).nextAll(`[data-swiper-slide-index="${n}"]`).eq(0).index();
                        n = void 0 === a ? o : void 0 === o ? a : o - r < r - a ? o : a;
                    }
                    t.slideTo(n);
                }
                function o() {
                    let { thumbs: e } = t.params;
                    if (n) return !1;
                    n = !0;
                    let i = t.constructor;
                    if (e.swiper instanceof i)
                        (t.thumbs.swiper = e.swiper),
                            Object.assign(t.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                            Object.assign(t.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 });
                    else if (f(e.swiper)) {
                        let s = Object.assign({}, e.swiper);
                        Object.assign(s, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (t.thumbs.swiper = new i(s)), (r = !0);
                    }
                    return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", a), !0;
                }
                function l(e) {
                    let i = t.thumbs.swiper;
                    if (!i || i.destroyed) return;
                    let s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView,
                        n = 1,
                        r = t.params.thumbs.slideThumbActiveClass;
                    if (
                        (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView),
                        t.params.thumbs.multipleActiveThumbs || (n = 1),
                        (n = Math.floor(n)),
                        i.slides.removeClass(r),
                        i.params.loop || (i.params.virtual && i.params.virtual.enabled))
                    )
                        for (let a = 0; a < n; a += 1) i.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + a}"]`).addClass(r);
                    else for (let o = 0; o < n; o += 1) i.slides.eq(t.realIndex + o).addClass(r);
                    let l = t.params.thumbs.autoScrollOffset,
                        d = l && !i.params.loop;
                    if (t.realIndex !== i.realIndex || d) {
                        let c,
                            u,
                            h = i.activeIndex;
                        if (i.params.loop) {
                            i.slides.eq(h).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), (h = i.activeIndex));
                            let p = i.slides.eq(h).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                                f = i.slides.eq(h).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                            (c = void 0 === p ? f : void 0 === f ? p : f - h == h - p ? (i.params.slidesPerGroup > 1 ? f : h) : f - h < h - p ? f : p), (u = t.activeIndex > t.previousIndex ? "next" : "prev");
                        } else u = (c = t.realIndex) > t.previousIndex ? "next" : "prev";
                        d && (c += "next" === u ? l : -1 * l),
                            i.visibleSlidesIndexes &&
                                0 > i.visibleSlidesIndexes.indexOf(c) &&
                                (i.params.centeredSlides ? (c = c > h ? c - Math.floor(s / 2) + 1 : c + Math.floor(s / 2) - 1) : c > h && i.params.slidesPerGroup, i.slideTo(c, e ? 0 : void 0));
                    }
                }
                (t.thumbs = { swiper: null }),
                    s("beforeInit", () => {
                        let { thumbs: e } = t.params;
                        e && e.swiper && (o(), l(!0));
                    }),
                    s("slideChange update resize observerUpdate", () => {
                        l();
                    }),
                    s("setTransition", (e, i) => {
                        let s = t.thumbs.swiper;
                        s && !s.destroyed && s.setTransition(i);
                    }),
                    s("beforeDestroy", () => {
                        let e = t.thumbs.swiper;
                        e && !e.destroyed && r && e.destroy();
                    }),
                    Object.assign(t.thumbs, { init: o, update: l });
            },
            function (e) {
                let { swiper: t, extendParams: i, emit: s, once: n } = e;
                i({ freeMode: { enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: 0.02 } }),
                    Object.assign(t, {
                        freeMode: {
                            onTouchStart: function () {
                                let e = t.getTranslate();
                                t.setTranslate(e), t.setTransition(0), (t.touchEventsData.velocities.length = 0), t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
                            },
                            onTouchMove: function () {
                                let { touchEventsData: e, touches: i } = t;
                                0 === e.velocities.length && e.velocities.push({ position: i[t.isHorizontal() ? "startX" : "startY"], time: e.touchStartTime }),
                                    e.velocities.push({ position: i[t.isHorizontal() ? "currentX" : "currentY"], time: h() });
                            },
                            onTouchEnd: function (e) {
                                let { currentPos: i } = e,
                                    { params: r, $wrapperEl: a, rtlTranslate: o, snapGrid: l, touchEventsData: d } = t,
                                    c = h() - d.touchStartTime;
                                if (i < -t.minTranslate()) t.slideTo(t.activeIndex);
                                else if (i > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                                else {
                                    if (r.freeMode.momentum) {
                                        if (d.velocities.length > 1) {
                                            let u = d.velocities.pop(),
                                                p = d.velocities.pop(),
                                                f = u.position - p.position,
                                                m = u.time - p.time;
                                            (t.velocity = f / m), (t.velocity /= 2), Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (m > 150 || h() - u.time > 300) && (t.velocity = 0);
                                        } else t.velocity = 0;
                                        (t.velocity *= r.freeMode.momentumVelocityRatio), (d.velocities.length = 0);
                                        let g = 1e3 * r.freeMode.momentumRatio,
                                            v = t.velocity * g,
                                            $ = t.translate + v;
                                        o && ($ = -$);
                                        let y,
                                            b = !1,
                                            w = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio,
                                            _;
                                        if ($ < t.maxTranslate())
                                            r.freeMode.momentumBounce ? ($ + t.maxTranslate() < -w && ($ = t.maxTranslate() - w), (y = t.maxTranslate()), (b = !0), (d.allowMomentumBounce = !0)) : ($ = t.maxTranslate()),
                                                r.loop && r.centeredSlides && (_ = !0);
                                        else if ($ > t.minTranslate())
                                            r.freeMode.momentumBounce ? ($ - t.minTranslate() > w && ($ = t.minTranslate() + w), (y = t.minTranslate()), (b = !0), (d.allowMomentumBounce = !0)) : ($ = t.minTranslate()),
                                                r.loop && r.centeredSlides && (_ = !0);
                                        else if (r.freeMode.sticky) {
                                            let x;
                                            for (let E = 0; E < l.length; E += 1)
                                                if (l[E] > -$) {
                                                    x = E;
                                                    break;
                                                }
                                            $ = -($ = Math.abs(l[x] - $) < Math.abs(l[x - 1] - $) || "next" === t.swipeDirection ? l[x] : l[x - 1]);
                                        }
                                        if (
                                            (_ &&
                                                n("transitionEnd", () => {
                                                    t.loopFix();
                                                }),
                                            0 !== t.velocity)
                                        ) {
                                            if (((g = o ? Math.abs((-$ - t.translate) / t.velocity) : Math.abs(($ - t.translate) / t.velocity)), r.freeMode.sticky)) {
                                                let C = Math.abs((o ? -$ : $) - t.translate),
                                                    S = t.slidesSizesGrid[t.activeIndex];
                                                g = C < S ? r.speed : C < 2 * S ? 1.5 * r.speed : 2.5 * r.speed;
                                            }
                                        } else if (r.freeMode.sticky) return void t.slideToClosest();
                                        r.freeMode.momentumBounce && b
                                            ? (t.updateProgress(y),
                                              t.setTransition(g),
                                              t.setTranslate($),
                                              t.transitionStart(!0, t.swipeDirection),
                                              (t.animating = !0),
                                              a.transitionEnd(() => {
                                                  t &&
                                                      !t.destroyed &&
                                                      d.allowMomentumBounce &&
                                                      (s("momentumBounce"),
                                                      t.setTransition(r.speed),
                                                      setTimeout(() => {
                                                          t.setTranslate(y),
                                                              a.transitionEnd(() => {
                                                                  t && !t.destroyed && t.transitionEnd();
                                                              });
                                                      }, 0));
                                              }))
                                            : t.velocity
                                            ? (s("_freeModeNoMomentumRelease"),
                                              t.updateProgress($),
                                              t.setTransition(g),
                                              t.setTranslate($),
                                              t.transitionStart(!0, t.swipeDirection),
                                              t.animating ||
                                                  ((t.animating = !0),
                                                  a.transitionEnd(() => {
                                                      t && !t.destroyed && t.transitionEnd();
                                                  })))
                                            : t.updateProgress($),
                                            t.updateActiveIndex(),
                                            t.updateSlidesClasses();
                                    } else {
                                        if (r.freeMode.sticky) return void t.slideToClosest();
                                        r.freeMode && s("_freeModeNoMomentumRelease");
                                    }
                                    (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                                }
                            },
                        },
                    });
            },
            function (e) {
                let t,
                    i,
                    s,
                    { swiper: n, extendParams: r } = e;
                r({ grid: { rows: 1, fill: "column" } }),
                    (n.grid = {
                        initSlides(e) {
                            let { slidesPerView: r } = n.params,
                                { rows: a, fill: o } = n.params.grid;
                            (i = t / a), (s = Math.floor(e / a)), (t = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a), "auto" !== r && "row" === o && (t = Math.max(t, r * a));
                        },
                        updateSlide(e, r, a, o) {
                            let { slidesPerGroup: l, spaceBetween: d } = n.params,
                                { rows: c, fill: u } = n.params.grid,
                                h,
                                p,
                                f;
                            if ("row" === u && l > 1) {
                                let m = Math.floor(e / (l * c)),
                                    g = e - c * l * m,
                                    v = 0 === m ? l : Math.min(Math.ceil((a - m * c * l) / c), l);
                                (f = Math.floor(g / v)), (h = (p = g - f * v + m * l) + (f * t) / c), r.css({ "-webkit-order": h, order: h });
                            } else "column" === u ? ((p = Math.floor(e / c)), (f = e - p * c), (p > s || (p === s && f === c - 1)) && (f += 1) >= c && ((f = 0), (p += 1))) : ((f = Math.floor(e / i)), (p = e - f * i));
                            r.css(o("margin-top"), 0 !== f ? d && `${d}px` : "");
                        },
                        updateWrapperSize(e, i, s) {
                            let { spaceBetween: r, centeredSlides: a, roundLengths: o } = n.params,
                                { rows: l } = n.params.grid;
                            if (((n.virtualSize = (e + r) * t), (n.virtualSize = Math.ceil(n.virtualSize / l) - r), n.$wrapperEl.css({ [s("width")]: `${n.virtualSize + r}px` }), a)) {
                                i.splice(0, i.length);
                                let d = [];
                                for (let c = 0; c < i.length; c += 1) {
                                    let u = i[c];
                                    o && (u = Math.floor(u)), i[c] < n.virtualSize + i[0] && d.push(u);
                                }
                                i.push(...d);
                            }
                        },
                    });
            },
            function (e) {
                let { swiper: t } = e;
                Object.assign(t, { appendSlide: B.bind(t), prependSlide: q.bind(t), addSlide: Y.bind(t), removeSlide: R.bind(t), removeAllSlides: X.bind(t) });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                i({ fadeEffect: { crossFade: !1, transformEl: null } }),
                    j({
                        effect: "fade",
                        swiper: t,
                        on: s,
                        setTranslate() {
                            let { slides: e } = t,
                                i = t.params.fadeEffect;
                            for (let s = 0; s < e.length; s += 1) {
                                let n = t.slides.eq(s),
                                    r = -n[0].swiperSlideOffset;
                                t.params.virtualTranslate || (r -= t.translate);
                                let a = 0;
                                t.isHorizontal() || ((a = r), (r = 0));
                                let o = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                                F(i, n).css({ opacity: o }).transform(`translate3d(${r}px, ${a}px, 0px)`);
                            }
                        },
                        setTransition(e) {
                            let { transformEl: i } = t.params.fadeEffect;
                            (i ? t.slides.find(i) : t.slides).transition(e), G({ swiper: t, duration: e, transformEl: i, allSlides: !0 });
                        },
                        overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }),
                    });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                i({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
                let n = (e, t, i) => {
                    let s = i ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                        n = i ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                    0 === s.length && ((s = d(`<div class="swiper-slide-shadow-${i ? "left" : "top"}"></div>`)), e.append(s)),
                        0 === n.length && ((n = d(`<div class="swiper-slide-shadow-${i ? "right" : "bottom"}"></div>`)), e.append(n)),
                        s.length && (s[0].style.opacity = Math.max(-t, 0)),
                        n.length && (n[0].style.opacity = Math.max(t, 0));
                };
                j({
                    effect: "cube",
                    swiper: t,
                    on: s,
                    setTranslate() {
                        let { $el: e, $wrapperEl: i, slides: s, width: r, height: a, rtlTranslate: o, size: l, browser: c } = t,
                            u = t.params.cubeEffect,
                            h = t.isHorizontal(),
                            p = t.virtual && t.params.virtual.enabled,
                            f,
                            m = 0;
                        u.shadow &&
                            (h
                                ? (0 === (f = i.find(".swiper-cube-shadow")).length && ((f = d('<div class="swiper-cube-shadow"></div>')), i.append(f)), f.css({ height: `${r}px` }))
                                : 0 === (f = e.find(".swiper-cube-shadow")).length && ((f = d('<div class="swiper-cube-shadow"></div>')), e.append(f)));
                        for (let g = 0; g < s.length; g += 1) {
                            let v = s.eq(g),
                                $ = g;
                            p && ($ = parseInt(v.attr("data-swiper-slide-index"), 10));
                            let y = 90 * $,
                                b = Math.floor(y / 360);
                            o && (b = Math.floor(-(y = -y) / 360));
                            let w = Math.max(Math.min(v[0].progress, 1), -1),
                                _ = 0,
                                x = 0,
                                E = 0;
                            $ % 4 == 0 ? ((_ = -(4 * b) * l), (E = 0)) : ($ - 1) % 4 == 0 ? ((_ = 0), (E = -(4 * b) * l)) : ($ - 2) % 4 == 0 ? ((_ = l + 4 * b * l), (E = l)) : ($ - 3) % 4 == 0 && ((_ = -l), (E = 3 * l + 4 * l * b)),
                                o && (_ = -_),
                                h || ((x = _), (_ = 0));
                            let C = `rotateX(${h ? 0 : -y}deg) rotateY(${h ? y : 0}deg) translate3d(${_}px, ${x}px, ${E}px)`;
                            w <= 1 && w > -1 && ((m = 90 * $ + 90 * w), o && (m = -(90 * $) - 90 * w)), v.transform(C), u.slideShadows && n(v, w, h);
                        }
                        if ((i.css({ "-webkit-transform-origin": `50% 50% -${l / 2}px`, "transform-origin": `50% 50% -${l / 2}px` }), u.shadow)) {
                            if (h) f.transform(`translate3d(0px, ${r / 2 + u.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`);
                            else {
                                let S = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                                    T = u.shadowScale,
                                    k = u.shadowScale / (1.5 - (Math.sin((2 * S * Math.PI) / 360) / 2 + Math.cos((2 * S * Math.PI) / 360) / 2)),
                                    A = u.shadowOffset;
                                f.transform(`scale3d(${T}, 1, ${k}) translate3d(0px, ${a / 2 + A}px, ${-a / 2 / k}px) rotateX(-90deg)`);
                            }
                        }
                        let L = c.isSafari || c.isWebView ? -l / 2 : 0;
                        i.transform(`translate3d(0px,0,${L}px) rotateX(${t.isHorizontal() ? 0 : m}deg) rotateY(${t.isHorizontal() ? -m : 0}deg)`), i[0].style.setProperty("--swiper-cube-translate-z", `${L}px`);
                    },
                    setTransition(e) {
                        let { $el: i, slides: s } = t;
                        s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                            t.params.cubeEffect.shadow && !t.isHorizontal() && i.find(".swiper-cube-shadow").transition(e);
                    },
                    recreateShadows() {
                        let e = t.isHorizontal();
                        t.slides.each((t) => {
                            let i = Math.max(Math.min(t.progress, 1), -1);
                            n(d(t), i, e);
                        });
                    },
                    getEffectParams: () => t.params.cubeEffect,
                    perspective: () => !0,
                    overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }),
                });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                i({ flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null } });
                let n = (e, i, s) => {
                    let n = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                        r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                    0 === n.length && (n = V(s, e, t.isHorizontal() ? "left" : "top")),
                        0 === r.length && (r = V(s, e, t.isHorizontal() ? "right" : "bottom")),
                        n.length && (n[0].style.opacity = Math.max(-i, 0)),
                        r.length && (r[0].style.opacity = Math.max(i, 0));
                };
                j({
                    effect: "flip",
                    swiper: t,
                    on: s,
                    setTranslate() {
                        let { slides: e, rtlTranslate: i } = t,
                            s = t.params.flipEffect;
                        for (let r = 0; r < e.length; r += 1) {
                            let a = e.eq(r),
                                o = a[0].progress;
                            t.params.flipEffect.limitRotation && (o = Math.max(Math.min(a[0].progress, 1), -1));
                            let l = a[0].swiperSlideOffset,
                                d = -180 * o,
                                c = 0,
                                u = t.params.cssMode ? -l - t.translate : -l,
                                h = 0;
                            t.isHorizontal() ? i && (d = -d) : ((h = u), (u = 0), (c = -d), (d = 0)), (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length), s.slideShadows && n(a, o, s);
                            let p = `translate3d(${u}px, ${h}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                            F(s, a).transform(p);
                        }
                    },
                    setTransition(e) {
                        let { transformEl: i } = t.params.flipEffect;
                        (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                            G({ swiper: t, duration: e, transformEl: i });
                    },
                    recreateShadows() {
                        let e = t.params.flipEffect;
                        t.slides.each((i) => {
                            let s = d(i),
                                r = s[0].progress;
                            t.params.flipEffect.limitRotation && (r = Math.max(Math.min(i.progress, 1), -1)), n(s, r, e);
                        });
                    },
                    getEffectParams: () => t.params.flipEffect,
                    perspective: () => !0,
                    overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }),
                });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                i({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0, transformEl: null } }),
                    j({
                        effect: "coverflow",
                        swiper: t,
                        on: s,
                        setTranslate() {
                            let { width: e, height: i, slides: s, slidesSizesGrid: n } = t,
                                r = t.params.coverflowEffect,
                                a = t.isHorizontal(),
                                o = t.translate,
                                l = a ? e / 2 - o : i / 2 - o,
                                d = a ? r.rotate : -r.rotate,
                                c = r.depth;
                            for (let u = 0, h = s.length; u < h; u += 1) {
                                let p = s.eq(u),
                                    f = n[u],
                                    m = (l - p[0].swiperSlideOffset - f / 2) / f,
                                    g = "function" == typeof r.modifier ? r.modifier(m) : m * r.modifier,
                                    v = a ? d * g : 0,
                                    $ = a ? 0 : d * g,
                                    y = -c * Math.abs(g),
                                    b = r.stretch;
                                "string" == typeof b && -1 !== b.indexOf("%") && (b = (parseFloat(r.stretch) / 100) * f);
                                let w = a ? 0 : b * g,
                                    _ = a ? b * g : 0,
                                    x = 1 - (1 - r.scale) * Math.abs(g);
                                0.001 > Math.abs(_) && (_ = 0), 0.001 > Math.abs(w) && (w = 0), 0.001 > Math.abs(y) && (y = 0), 0.001 > Math.abs(v) && (v = 0), 0.001 > Math.abs($) && ($ = 0), 0.001 > Math.abs(x) && (x = 0);
                                let E = `translate3d(${_}px,${w}px,${y}px)  rotateX(${$}deg) rotateY(${v}deg) scale(${x})`;
                                if ((F(r, p).transform(E), (p[0].style.zIndex = 1 - Math.abs(Math.round(g))), r.slideShadows)) {
                                    let C = a ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                                        S = a ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                                    0 === C.length && (C = V(r, p, a ? "left" : "top")),
                                        0 === S.length && (S = V(r, p, a ? "right" : "bottom")),
                                        C.length && (C[0].style.opacity = g > 0 ? g : 0),
                                        S.length && (S[0].style.opacity = -g > 0 ? -g : 0);
                                }
                            }
                        },
                        setTransition(e) {
                            let { transformEl: i } = t.params.coverflowEffect;
                            (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({ watchSlidesProgress: !0 }),
                    });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                i({
                    creativeEffect: {
                        transformEl: null,
                        limitProgress: 1,
                        shadowPerProgress: !1,
                        progressMultiplier: 1,
                        perspective: !0,
                        prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
                        next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
                    },
                });
                let n = (e) => ("string" == typeof e ? e : `${e}px`);
                j({
                    effect: "creative",
                    swiper: t,
                    on: s,
                    setTranslate() {
                        let { slides: e, $wrapperEl: i, slidesSizesGrid: s } = t,
                            r = t.params.creativeEffect,
                            { progressMultiplier: a } = r,
                            o = t.params.centeredSlides;
                        if (o) {
                            let l = s[0] / 2 - t.params.slidesOffsetBefore || 0;
                            i.transform(`translateX(calc(50% - ${l}px))`);
                        }
                        for (let d = 0; d < e.length; d += 1) {
                            let c = e.eq(d),
                                u = c[0].progress,
                                h = Math.min(Math.max(c[0].progress, -r.limitProgress), r.limitProgress),
                                p = h;
                            o || (p = Math.min(Math.max(c[0].originalProgress, -r.limitProgress), r.limitProgress));
                            let f = c[0].swiperSlideOffset,
                                m = [t.params.cssMode ? -f - t.translate : -f, 0, 0],
                                g = [0, 0, 0],
                                v = !1;
                            t.isHorizontal() || ((m[1] = m[0]), (m[0] = 0));
                            let $ = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
                            h < 0 ? (($ = r.next), (v = !0)) : h > 0 && (($ = r.prev), (v = !0)),
                                m.forEach((e, t) => {
                                    m[t] = `calc(${e}px + (${n($.translate[t])} * ${Math.abs(h * a)}))`;
                                }),
                                g.forEach((e, t) => {
                                    g[t] = $.rotate[t] * Math.abs(h * a);
                                }),
                                (c[0].style.zIndex = -Math.abs(Math.round(u)) + e.length);
                            let y = m.join(", "),
                                b = `rotateX(${g[0]}deg) rotateY(${g[1]}deg) rotateZ(${g[2]}deg)`,
                                w = p < 0 ? `scale(${1 + (1 - $.scale) * p * a})` : `scale(${1 - (1 - $.scale) * p * a})`,
                                _ = p < 0 ? 1 + (1 - $.opacity) * p * a : 1 - (1 - $.opacity) * p * a,
                                x = `translate3d(${y}) ${b} ${w}`;
                            if ((v && $.shadow) || !v) {
                                let E = c.children(".swiper-slide-shadow");
                                if ((0 === E.length && $.shadow && (E = V(r, c)), E.length)) {
                                    let C = r.shadowPerProgress ? h * (1 / r.limitProgress) : h;
                                    E[0].style.opacity = Math.min(Math.max(Math.abs(C), 0), 1);
                                }
                            }
                            let S = F(r, c);
                            S.transform(x).css({ opacity: _ }), $.origin && S.css("transform-origin", $.origin);
                        }
                    },
                    setTransition(e) {
                        let { transformEl: i } = t.params.creativeEffect;
                        (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), G({ swiper: t, duration: e, transformEl: i, allSlides: !0 });
                    },
                    perspective: () => t.params.creativeEffect.perspective,
                    overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }),
                });
            },
            function (e) {
                let { swiper: t, extendParams: i, on: s } = e;
                i({ cardsEffect: { slideShadows: !0, transformEl: null, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } }),
                    j({
                        effect: "cards",
                        swiper: t,
                        on: s,
                        setTranslate() {
                            let { slides: e, activeIndex: i } = t,
                                s = t.params.cardsEffect,
                                { startTranslate: n, isTouched: r } = t.touchEventsData,
                                a = t.translate;
                            for (let o = 0; o < e.length; o += 1) {
                                let l = e.eq(o),
                                    d = l[0].progress,
                                    c = Math.min(Math.max(d, -4), 4),
                                    u = l[0].swiperSlideOffset;
                                t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                                let h = t.params.cssMode ? -u - t.translate : -u,
                                    p = 0,
                                    f = -100 * Math.abs(c),
                                    m = 1,
                                    g = -s.perSlideRotate * c,
                                    v = s.perSlideOffset - 0.75 * Math.abs(c),
                                    $ = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
                                    y = ($ === i || $ === i - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && a < n,
                                    b = ($ === i || $ === i + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && a > n;
                                if (y || b) {
                                    let w = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                                    (g += -28 * c * w), (m += -0.5 * w), (v += 96 * w), (p = -25 * w * Math.abs(c) + "%");
                                }
                                if (((h = c < 0 ? `calc(${h}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${h}px + (-${v * Math.abs(c)}%))` : `${h}px`), !t.isHorizontal())) {
                                    let _ = p;
                                    (p = h), (h = _);
                                }
                                let x = c < 0 ? "" + (1 + (1 - m) * c) : "" + (1 - (1 - m) * c),
                                    E = `
        translate3d(${h}, ${p}, ${f}px)
        rotateZ(${s.rotate ? g : 0}deg)
        scale(${x})
      `;
                                if (s.slideShadows) {
                                    let C = l.find(".swiper-slide-shadow");
                                    0 === C.length && (C = V(s, l)), C.length && (C[0].style.opacity = Math.min(Math.max((Math.abs(c) - 0.5) / 0.5, 0), 1));
                                }
                                (l[0].style.zIndex = -Math.abs(Math.round(d)) + e.length), F(s, l).transform(E);
                            }
                        },
                        setTransition(e) {
                            let { transformEl: i } = t.params.cardsEffect;
                            (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), G({ swiper: t, duration: e, transformEl: i });
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }),
                    });
            },
        ];
        return N.use(U), N;
    });
