(function() {
    "use strict";
    function ownKeys(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            if (t) r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            });
            n.push.apply(n, r)
        }
        return n
    }

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            if (t % 2) ownKeys(Object(n), true).forEach(function(t) {
                _defineProperty(e, t, n[t])
            });
            else if (Object.getOwnPropertyDescriptors) Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
            else ownKeys(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
        }
        return e
    }

    function _defineProperty(e, t, n) {
        if (t in e) Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else e[t] = n;
        return e
    }
    var POS_PREFIX_25 = "--pos-banner-fluid-25__",
        posOptionsInitialBanner25 = {
            background: "#50b3ff",
            "grid-template-columns": "100%",
            "grid-template-rows": "292px auto",
            "max-width": "100%",
            "text-font-size": "20px",
            "text-margin": "0 0 24px 0",
            "button-wrap-max-width": "100%",
            "bg-url": "url('https://pos.gosuslugi.ru/bin/banner-fluid/25/banner-fluid-bg-25-2.svg')",
            "bg-url-position": "center bottom",
            "content-padding": "24px",
            "content-grid-row": "0",
            "logo-wrap-padding": "16px 12px 12px",
            "logo-width": "65px",
            "logo-wrap-top": "0",
            "logo-wrap-right": "0",
            "slogan-font-size": "12px"
        },
        setStyles = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : POS_PREFIX_25;
            Object.keys(e).forEach(function(r) {
                t.style.setProperty(n + r, e[r])
            })
        },
        removeStyles = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : POS_PREFIX_25;
            Object.keys(e).forEach(function(e) {
                t.style.removeProperty(n + e)
            })
        };

    function changePosBannerOnResize() {
        var e = document.documentElement,
            t = _objectSpread({}, posOptionsInitialBanner25),
            n = document.getElementById("js-show-iframe-wrapper"),
            r = n ? n.offsetWidth : document.body.offsetWidth;
        // if (r > 308) t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/25/banner-fluid-bg-25-1.svg')", t["bg-url-position"] = "center calc(100% + 22px)";
        // if (r > 340) t["button-wrap-max-width"] = "206px";
        // if (r > 568) t["grid-template-columns"] = "1fr 292px", t["grid-template-rows"] = "100%", t["content-grid-row"] = "1", t["content-padding"] = "32px 24px", t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/25/banner-fluid-bg-25-2.svg')", t["bg-url-position"] = "center bottom";
        // if (r > 610) t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/25/banner-fluid-bg-25-1.svg')", t["bg-url-position"] = "calc(50% + 29px) calc(100% + 25px)";
        // if (r > 782) t["grid-template-columns"] = "1fr 400px";
        // if (r > 820) t["grid-template-columns"] = "1fr 420px", t["bg-url-position"] = "center -12px";
        // if (r > 1098) t["grid-template-columns"] = "1fr 557px", t["text-font-size"] = "28px", t["content-padding"] = "32px 32px 32px 50px", t["logo-width"] = "78px", t["slogan-font-size"] = "15px", t["logo-wrap-padding"] = "20px 16px 16px";
        // if (r > 1300) t["content-padding"] = "32px 40px 32px 140px", t["bg-url-position"] = "center calc(100% + 33px)";
        // if (r > 1422) t["max-width"] = "1422px", t["grid-template-columns"] = "1fr 720px", t["text-font-size"] = "32px", t.background = "linear-gradient(90deg, #50b3ff 50%, #ffffff 50%)";

        // Костыль для избежания динамического бага --> Чтобы вернуть назад, раскомментировать ИФЫ выше и убрать этот словарь!
        t = {
            'grid-template-columns': '1fr 557px',
            'grid-template-rows': '100%',
            'max-width': '100%',
            'text-font-size': '28px',
            'text-margin': '0 0 24px 0',
            'button-wrap-max-width': '206px',
            'content-padding': '32px 32px 32px 50px',
            'content-grid-row': '1',
            'bg-url-position': 'center -12px',
            'bg-url': 'url("https://pos.gosuslugi.ru/bin/banner-fluid/25/banner-fluid-bg-25-1.svg")',
            'logo-wrap-padding': '20px 16px 16px',
            'logo-width': '78px',
            'logo-wrap-top': '0',
            'logo-wrap-right': '0',
            'slogan-font-size': '15px'
        };
        setStyles(t, e)
    }
    changePosBannerOnResize(), window.addEventListener("resize", changePosBannerOnResize), window.onunload = function() {
        var e = document.documentElement,
            t = _objectSpread({}, posOptionsInitialBanner25);
        window.removeEventListener("resize", changePosBannerOnResize), removeStyles(t, e)
    };
})()