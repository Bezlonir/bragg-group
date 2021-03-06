"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-animation-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-checked-classlist-cssanimations-csscalc-csscolumns-cssfilters-cssgradients-csshyphens_softhyphens_softhyphensfind-csspointerevents-csspseudoanimations-csstransforms-csstransitions-cssvhunit-ellipsis-es5-es5array-es5function-es5object-es5string-es5syntax-es6array-es6math-es6number-es6object-es6string-eventlistener-flexbox-flexwrap-fontface-generatedcontent-hsla-htmlimports-ie8compat-input-intl-mediaqueries-notification-opacity-performance-pointerevents-requestanimationframe-unicode-unicoderange-video-webgl-websockets-setclasses !*/
!function (window, document, undefined) {
  function is(e, t) {
    return (typeof e === "undefined" ? "undefined" : _typeof(e)) === t;
  }function testRunner() {
    var e, t, r, n, o, i, s;for (var a in tests) {
      if (tests.hasOwnProperty(a)) {
        if (e = [], t = tests[a], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (r = 0; r < t.options.aliases.length; r++) {
          e.push(t.options.aliases[r].toLowerCase());
        }for (n = is(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) {
          i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = n : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = n), classes.push((n ? "" : "no-") + s.join("-"));
        }
      }
    }
  }function setClasses(e) {
    var t = docElement.className,
        r = Modernizr._config.classPrefix || "";if (isSVG && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var n = new RegExp("(^|\\s)" + r + "no-js(\\s|$)");t = t.replace(n, "$1" + r + "js$2");
    }Modernizr._config.enableClasses && (t += " " + r + e.join(" " + r), isSVG ? docElement.className.baseVal = t : docElement.className = t);
  }function createElement() {
    return "function" != typeof document.createElement ? document.createElement(arguments[0]) : isSVG ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]) : document.createElement.apply(document, arguments);
  }function contains(e, t) {
    return !!~("" + e).indexOf(t);
  }function computedStyle(e, t, r) {
    var n;if ("getComputedStyle" in window) {
      n = getComputedStyle.call(window, e, t);var o = window.console;if (null !== n) r && (n = n.getPropertyValue(r));else if (o) {
        var i = o.error ? "error" : "log";o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else n = !t && e.currentStyle && e.currentStyle[r];return n;
  }function roundedEquals(e, t) {
    return e - 1 === t || e === t || e + 1 === t;
  }function cssToDOM(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, r) {
      return t + r.toUpperCase();
    }).replace(/^-/, "");
  }function addTest(e, t) {
    if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var r in e) {
      hasOwnProp(e, r) && addTest(r, e[r]);
    } else {
      e = e.toLowerCase();var n = e.split("."),
          o = Modernizr[n[0]];if (2 == n.length && (o = o[n[1]]), "undefined" != typeof o) return Modernizr;t = "function" == typeof t ? t() : t, 1 == n.length ? Modernizr[n[0]] = t : (!Modernizr[n[0]] || Modernizr[n[0]] instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])), Modernizr[n[0]][n[1]] = t), setClasses([(t && 0 != t ? "" : "no-") + n.join("-")]), Modernizr._trigger(e, t);
    }return Modernizr;
  }function getBody() {
    var e = document.body;return e || (e = createElement(isSVG ? "svg" : "body"), e.fake = !0), e;
  }function injectElementWithStyles(e, t, r, n) {
    var o,
        i,
        s,
        a,
        d = "modernizr",
        l = createElement("div"),
        c = getBody();if (parseInt(r, 10)) for (; r--;) {
      s = createElement("div"), s.id = n ? n[r] : d + (r + 1), l.appendChild(s);
    }return o = createElement("style"), o.type = "text/css", o.id = "s" + d, (c.fake ? c : l).appendChild(o), c.appendChild(l), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e)), l.id = d, c.fake && (c.style.background = "", c.style.overflow = "hidden", a = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(c)), i = t(l, e), c.fake ? (c.parentNode.removeChild(c), docElement.style.overflow = a, docElement.offsetHeight) : l.parentNode.removeChild(l), !!i;
  }function fnBind(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }function testDOMProps(e, t, r) {
    var n;for (var o in e) {
      if (e[o] in t) return r === !1 ? e[o] : (n = t[e[o]], is(n, "function") ? fnBind(n, r || t) : n);
    }return !1;
  }function domToCSS(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function nativeTestProps(e, t) {
    var r = e.length;if ("CSS" in window && "supports" in window.CSS) {
      for (; r--;) {
        if (window.CSS.supports(domToCSS(e[r]), t)) return !0;
      }return !1;
    }if ("CSSSupportsRule" in window) {
      for (var n = []; r--;) {
        n.push("(" + domToCSS(e[r]) + ":" + t + ")");
      }return n = n.join(" or "), injectElementWithStyles("@supports (" + n + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == computedStyle(e, null, "position");
      });
    }return undefined;
  }function testProps(e, t, r, n) {
    function o() {
      s && (delete mStyle.style, delete mStyle.modElem);
    }if (n = is(n, "undefined") ? !1 : n, !is(r, "undefined")) {
      var i = nativeTestProps(e, r);if (!is(i, "undefined")) return i;
    }for (var s, a, d, l, c, u = ["modernizr", "tspan", "samp"]; !mStyle.style && u.length;) {
      s = !0, mStyle.modElem = createElement(u.shift()), mStyle.style = mStyle.modElem.style;
    }for (d = e.length, a = 0; d > a; a++) {
      if (l = e[a], c = mStyle.style[l], contains(l, "-") && (l = cssToDOM(l)), mStyle.style[l] !== undefined) {
        if (n || is(r, "undefined")) return o(), "pfx" == t ? l : !0;try {
          mStyle.style[l] = r;
        } catch (p) {}if (mStyle.style[l] != c) return o(), "pfx" == t ? l : !0;
      }
    }return o(), !1;
  }function testPropsAll(e, t, r, n, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        s = (e + " " + cssomPrefixes.join(i + " ") + i).split(" ");return is(t, "string") || is(t, "undefined") ? testProps(s, t, n, o) : (s = (e + " " + domPrefixes.join(i + " ") + i).split(" "), testDOMProps(s, t, r));
  }function testAllProps(e, t, r) {
    return testPropsAll(e, undefined, undefined, t, r);
  }var classes = [],
      tests = [],
      ModernizrProto = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function on(e, t) {
      var r = this;setTimeout(function () {
        t(r[e]);
      }, 0);
    }, addTest: function addTest(e, t, r) {
      tests.push({ name: e, fn: t, options: r });
    }, addAsyncTest: function addAsyncTest(e) {
      tests.push({ name: null, fn: e });
    } },
      Modernizr = function Modernizr() {};Modernizr.prototype = ModernizrProto, Modernizr = new Modernizr(), Modernizr.addTest("eventlistener", "addEventListener" in window), Modernizr.addTest("ie8compat", !window.addEventListener && !!document.documentMode && 7 === document.documentMode), Modernizr.addTest("notification", function () {
    if (!window.Notification || !window.Notification.requestPermission) return !1;if ("granted" === window.Notification.permission) return !0;try {
      new window.Notification("");
    } catch (e) {
      if ("TypeError" === e.name) return !1;
    }return !0;
  });var supports = !1;try {
    supports = "WebSocket" in window && 2 === window.WebSocket.CLOSING;
  } catch (e) {}Modernizr.addTest("websockets", supports), Modernizr.addTest("es5array", function () {
    return !!(Array.prototype && Array.prototype.every && Array.prototype.filter && Array.prototype.forEach && Array.prototype.indexOf && Array.prototype.lastIndexOf && Array.prototype.map && Array.prototype.some && Array.prototype.reduce && Array.prototype.reduceRight && Array.isArray);
  }), Modernizr.addTest("es5function", function () {
    return !(!Function.prototype || !Function.prototype.bind);
  }), Modernizr.addTest("es5object", function () {
    return !!(Object.keys && Object.create && Object.getPrototypeOf && Object.getOwnPropertyNames && Object.isSealed && Object.isFrozen && Object.isExtensible && Object.getOwnPropertyDescriptor && Object.defineProperty && Object.defineProperties && Object.seal && Object.freeze && Object.preventExtensions);
  }), Modernizr.addTest("es5string", function () {
    return !(!String.prototype || !String.prototype.trim);
  }), Modernizr.addTest("es5syntax", function () {
    var value, obj, stringAccess, getter, setter, reservedWords, zeroWidthChars;try {
      return stringAccess = eval('"foobar"[3] === "b"'), getter = eval("({ get x(){ return 1 } }).x === 1"), eval("({ set x(v){ value = v; } }).x = 1"), setter = 1 === value, eval("obj = ({ if: 1 })"), reservedWords = 1 === obj["if"], zeroWidthChars = eval("_‌‍ = true"), stringAccess && getter && setter && reservedWords && zeroWidthChars;
    } catch (ignore) {
      return !1;
    }
  }), Modernizr.addTest("es6array", !!(Array.prototype && Array.prototype.copyWithin && Array.prototype.fill && Array.prototype.find && Array.prototype.findIndex && Array.prototype.keys && Array.prototype.entries && Array.prototype.values && Array.from && Array.of)), Modernizr.addTest("es6math", !!(Math && Math.clz32 && Math.cbrt && Math.imul && Math.sign && Math.log10 && Math.log2 && Math.log1p && Math.expm1 && Math.cosh && Math.sinh && Math.tanh && Math.acosh && Math.asinh && Math.atanh && Math.hypot && Math.trunc && Math.fround)), Modernizr.addTest("es6number", !!(Number.isFinite && Number.isInteger && Number.isSafeInteger && Number.isNaN && Number.parseInt && Number.parseFloat && Number.isInteger(Number.MAX_SAFE_INTEGER) && Number.isInteger(Number.MIN_SAFE_INTEGER) && Number.isFinite(Number.EPSILON))), Modernizr.addTest("es6object", !!(Object.assign && Object.is && Object.setPrototypeOf)), Modernizr.addTest("es6string", !!(String.fromCodePoint && String.raw && String.prototype.codePointAt && String.prototype.repeat && String.prototype.startsWith && String.prototype.endsWith && String.prototype.includes));var docElement = document.documentElement;Modernizr.addTest("classlist", "classList" in docElement);var isSVG = "svg" === docElement.nodeName.toLowerCase();Modernizr.addTest("webanimations", "animate" in createElement("div")), Modernizr.addTest("webgl", function () {
    var e = createElement("canvas"),
        t = "probablySupportsContext" in e ? "probablySupportsContext" : "supportsContext";return t in e ? e[t]("webgl") || e[t]("experimental-webgl") : "WebGLRenderingContext" in window;
  }), Modernizr.addTest("bgpositionshorthand", function () {
    var e = createElement("a"),
        t = e.style,
        r = "right 10px bottom 10px";return t.cssText = "background-position: " + r + ";", t.backgroundPosition === r;
  }), Modernizr.addTest("video", function () {
    var e = createElement("video"),
        t = !1;try {
      t = !!e.canPlayType, t && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""));
    } catch (r) {}return t;
  }), Modernizr.addTest("csspointerevents", function () {
    var e = createElement("a").style;return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents;
  });var inputElem = createElement("input"),
      inputattrs = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
      attrs = {};Modernizr.input = function (e) {
    for (var t = 0, r = e.length; r > t; t++) {
      attrs[e[t]] = !!(e[t] in inputElem);
    }return attrs.list && (attrs.list = !(!createElement("datalist") || !window.HTMLDataListElement)), attrs;
  }(inputattrs);var hasEvent = function () {
    function e(e, r) {
      var n;return e ? (r && "string" != typeof r || (r = createElement(r || "div")), e = "on" + e, n = e in r, !n && t && (r.setAttribute || (r = createElement("div")), r.setAttribute(e, ""), n = "function" == typeof r[e], r[e] !== undefined && (r[e] = undefined), r.removeAttribute(e)), n) : !1;
    }var t = !("onblur" in document.documentElement);return e;
  }();ModernizrProto.hasEvent = hasEvent;var prefixes = ModernizrProto._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];ModernizrProto._prefixes = prefixes, Modernizr.addTest("csscalc", function () {
    var e = "width:",
        t = "calc(10px);",
        r = createElement("a");return r.style.cssText = e + prefixes.join(t + e), !!r.style.length;
  }), Modernizr.addTest("cssgradients", function () {
    for (var e, t = "background-image:", r = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "", o = 0, i = prefixes.length - 1; i > o; o++) {
      e = 0 === o ? "to " : "", n += t + prefixes[o] + "linear-gradient(" + e + "left top, #9f9, white);";
    }Modernizr._config.usePrefixes && (n += t + "-webkit-" + r);var s = createElement("a"),
        a = s.style;return a.cssText = n, ("" + a.backgroundImage).indexOf("gradient") > -1;
  }), Modernizr.addTest("opacity", function () {
    var e = createElement("a").style;return e.cssText = prefixes.join("opacity:.55;"), /^0.55$/.test(e.opacity);
  });var newSyntax = "CSS" in window && "supports" in window.CSS,
      oldSyntax = "supportsCSS" in window;Modernizr.addTest("supports", newSyntax || oldSyntax), Modernizr.addTest("hsla", function () {
    var e = createElement("a").style;return e.cssText = "background-color:hsla(120,40%,100%,.5)", contains(e.backgroundColor, "rgba") || contains(e.backgroundColor, "hsla");
  }), Modernizr.addTest("es5date", function () {
    var e = "2013-04-12T06:06:37.307Z",
        t = !1;try {
      t = !!Date.parse(e);
    } catch (r) {}return !!(Date.now && Date.prototype && Date.prototype.toISOString && Date.prototype.toJSON && t);
  }), Modernizr.addTest("strictmode", function () {
    "use strict";
    return !this;
  }()), Modernizr.addTest("json", "JSON" in window && "parse" in JSON && "stringify" in JSON), Modernizr.addTest("es5undefined", function () {
    var e, t;try {
      t = window.undefined, window.undefined = 12345, e = "undefined" == typeof window.undefined, window.undefined = t;
    } catch (r) {
      return !1;
    }return e;
  }), Modernizr.addTest("es5", function () {
    return !!(Modernizr.es5array && Modernizr.es5date && Modernizr.es5function && Modernizr.es5object && Modernizr.strictmode && Modernizr.es5string && Modernizr.json && Modernizr.es5syntax && Modernizr.es5undefined);
  });var hasOwnProp;!function () {
    var e = {}.hasOwnProperty;hasOwnProp = is(e, "undefined") || is(e.call, "undefined") ? function (e, t) {
      return t in e && is(e.constructor.prototype[t], "undefined");
    } : function (t, r) {
      return e.call(t, r);
    };
  }(), ModernizrProto._l = {}, ModernizrProto.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, ModernizrProto._trigger = function (e, t) {
    if (this._l[e]) {
      var r = this._l[e];setTimeout(function () {
        var e, n;for (e = 0; e < r.length; e++) {
          (n = r[e])(t);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    ModernizrProto.addTest = addTest;
  }), addTest("htmlimports", "import" in createElement("link"));var omPrefixes = "Moz O ms Webkit",
      domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(" ") : [];ModernizrProto._domPrefixes = domPrefixes, Modernizr.addTest("pointerevents", function () {
    var e = !1,
        t = domPrefixes.length;for (e = Modernizr.hasEvent("pointerdown"); t-- && !e;) {
      hasEvent(domPrefixes[t] + "pointerdown") && (e = !0);
    }return e;
  });var cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(" ") : [];ModernizrProto._cssomPrefixes = cssomPrefixes;var atRule = function atRule(e) {
    var t,
        r = prefixes.length,
        n = window.CSSRule;if ("undefined" == typeof n) return undefined;if (!e) return !1;if (e = e.replace(/^@/, ""), t = e.replace(/-/g, "_").toUpperCase() + "_RULE", t in n) return "@" + e;for (var o = 0; r > o; o++) {
      var i = prefixes[o],
          s = i.toUpperCase() + "_" + t;if (s in n) return "@-" + i.toLowerCase() + "-" + e;
    }return !1;
  };ModernizrProto.atRule = atRule;var testStyles = ModernizrProto.testStyles = injectElementWithStyles;Modernizr.addTest("unicoderange", function () {
    return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}', function (e) {
      for (var t = [".", ".", "m", "m"], r = 0; r < t.length; r++) {
        var n = createElement("span");n.innerHTML = t[r], n.className = r % 2 ? "mono" : "", e.appendChild(n), t[r] = n.clientWidth;
      }return t[0] !== t[1] && t[2] === t[3];
    });
  }), Modernizr.addTest("unicode", function () {
    var e,
        t = createElement("span"),
        r = createElement("span");return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}", function (n) {
      t.innerHTML = isSVG ? "妇" : "&#5987;", r.innerHTML = isSVG ? "☆" : "&#9734;", n.appendChild(t), n.appendChild(r), e = "offsetWidth" in t && t.offsetWidth !== r.offsetWidth;
    }), e;
  }), Modernizr.addTest("checked", function () {
    return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function (e) {
      var t = createElement("input");return t.setAttribute("type", "checkbox"), t.setAttribute("checked", "checked"), e.appendChild(t), 20 === t.offsetLeft;
    });
  });var blacklist = function () {
    var e = navigator.userAgent,
        t = e.match(/w(eb)?osbrowser/gi),
        r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;return t || r;
  }();blacklist ? Modernizr.addTest("fontface", !1) : testStyles('@font-face {font-family:"font";src:url("https://")}', function (e, t) {
    var r = document.getElementById("smodernizr"),
        n = r.sheet || r.styleSheet,
        o = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "",
        i = /src/i.test(o) && 0 === o.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface", i);
  }), testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function (e) {
    Modernizr.addTest("generatedcontent", e.offsetHeight >= 6);
  }), testStyles("#modernizr { height: 50vh; }", function (e) {
    var t = parseInt(window.innerHeight / 2, 10),
        r = parseInt(computedStyle(e, null, "height"), 10);Modernizr.addTest("cssvhunit", roundedEquals(r, t));
  });var mq = function () {
    var e = window.matchMedia || window.msMatchMedia;return e ? function (t) {
      var r = e(t);return r && r.matches || !1;
    } : function (e) {
      var t = !1;return injectElementWithStyles("@media " + e + " { #modernizr { position: absolute; } }", function (e) {
        t = "absolute" == (window.getComputedStyle ? window.getComputedStyle(e, null) : e.currentStyle).position;
      }), t;
    };
  }();ModernizrProto.mq = mq, Modernizr.addTest("mediaqueries", mq("only all"));var modElem = { elem: createElement("modernizr") };Modernizr._q.push(function () {
    delete modElem.elem;
  });var mStyle = { style: modElem.elem.style };Modernizr._q.unshift(function () {
    delete mStyle.style;
  }), ModernizrProto.testAllProps = testPropsAll;var prefixed = ModernizrProto.prefixed = function (e, t, r) {
    return 0 === e.indexOf("@") ? atRule(e) : (-1 != e.indexOf("-") && (e = cssToDOM(e)), t ? testPropsAll(e, t, r) : testPropsAll(e, "pfx"));
  };Modernizr.addTest("intl", !!prefixed("Intl", window)), Modernizr.addTest("performance", !!prefixed("performance", window)), Modernizr.addTest("requestanimationframe", !!prefixed("requestAnimationFrame", window), { aliases: ["raf"] }), Modernizr.addTest("backgroundblendmode", prefixed("backgroundBlendMode", "text")), ModernizrProto.testAllProps = testAllProps, Modernizr.addTest("cssanimations", testAllProps("animationName", "a", !0)), Modernizr.addTest("csspseudoanimations", function () {
    var e = !1;if (!Modernizr.cssanimations || !window.getComputedStyle) return e;var t = ["@", Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/, ""), '#modernizr:before { content:" "; font-size:5px;', Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"), "}"].join("");return Modernizr.testStyles(t, function (t) {
      e = "10px" === window.getComputedStyle(t, ":before").getPropertyValue("font-size");
    }), e;
  }), Modernizr.addTest("backgroundcliptext", function () {
    return testAllProps("backgroundClip", "text");
  }), Modernizr.addTest("bgpositionxy", function () {
    return testAllProps("backgroundPositionX", "3px", !0) && testAllProps("backgroundPositionY", "5px", !0);
  }), Modernizr.addTest("bgrepeatround", testAllProps("backgroundRepeat", "round")), Modernizr.addTest("bgrepeatspace", testAllProps("backgroundRepeat", "space")), Modernizr.addTest("backgroundsize", testAllProps("backgroundSize", "100%", !0)), Modernizr.addTest("bgsizecover", testAllProps("backgroundSize", "cover")), Modernizr.addTest("borderimage", testAllProps("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", testAllProps("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", testAllProps("boxShadow", "1px 1px", !0)), Modernizr.addTest("boxsizing", testAllProps("boxSizing", "border-box", !0) && (document.documentMode === undefined || document.documentMode > 7)), function () {
    Modernizr.addTest("csscolumns", function () {
      var e = !1,
          t = testAllProps("columnCount");try {
        e = !!t, e && (e = new Boolean(e));
      } catch (r) {}return e;
    });for (var e, t, r = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], n = 0; n < r.length; n++) {
      e = r[n].toLowerCase(), t = testAllProps("column" + r[n]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || testAllProps(r[n])), Modernizr.addTest("csscolumns." + e, t);
    }
  }(), Modernizr.addTest("ellipsis", testAllProps("textOverflow", "ellipsis")), Modernizr.addTest("cssfilters", function () {
    if (Modernizr.supports) return testAllProps("filter", "blur(2px)");var e = createElement("a");return e.style.cssText = prefixes.join("filter:blur(2px); "), !!e.style.length && (document.documentMode === undefined || document.documentMode > 9);
  }), Modernizr.addTest("flexbox", testAllProps("flexBasis", "1px", !0)), Modernizr.addTest("flexwrap", testAllProps("flexWrap", "wrap", !0)), Modernizr.addTest("csstransforms", function () {
    return -1 === navigator.userAgent.indexOf("Android 2.") && testAllProps("transform", "scale(1)", !0);
  }), Modernizr.addTest("csstransitions", testAllProps("transition", "all", !0)), Modernizr.addAsyncTest(function () {
    function e() {
      function r() {
        try {
          var e = createElement("div"),
              t = createElement("span"),
              r = e.style,
              n = 0,
              o = 0,
              i = !1,
              s = document.body.firstElementChild || document.body.firstChild;return e.appendChild(t), t.innerHTML = "Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.", document.body.insertBefore(e, s), r.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;", n = t.offsetHeight, o = t.offsetWidth, r.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;" + prefixes.join("hyphens:auto; "), i = t.offsetHeight != n || t.offsetWidth != o, document.body.removeChild(e), e.removeChild(t), i;
        } catch (a) {
          return !1;
        }
      }function n(e, t) {
        try {
          var r = createElement("div"),
              n = createElement("span"),
              o = r.style,
              i = 0,
              s = !1,
              a = !1,
              d = !1,
              l = document.body.firstElementChild || document.body.firstChild;return o.cssText = "position:absolute;top:0;left:0;overflow:visible;width:1.25em;", r.appendChild(n), document.body.insertBefore(r, l), n.innerHTML = "mm", i = n.offsetHeight, n.innerHTML = "m" + e + "m", a = n.offsetHeight > i, t ? (n.innerHTML = "m<br />m", i = n.offsetWidth, n.innerHTML = "m" + e + "m", d = n.offsetWidth > i) : d = !0, a === !0 && d === !0 && (s = !0), document.body.removeChild(r), r.removeChild(n), s;
        } catch (c) {
          return !1;
        }
      }function o(e) {
        try {
          var t,
              r = createElement("input"),
              n = createElement("div"),
              o = "lebowski",
              i = !1,
              s = document.body.firstElementChild || document.body.firstChild;n.innerHTML = o + e + o, document.body.insertBefore(n, s), document.body.insertBefore(r, n), r.setSelectionRange ? (r.focus(), r.setSelectionRange(0, 0)) : r.createTextRange && (t = r.createTextRange(), t.collapse(!0), t.moveEnd("character", 0), t.moveStart("character", 0), t.select());try {
            window.find ? i = window.find(o + o) : (t = window.self.document.body.createTextRange(), i = t.findText(o + o));
          } catch (a) {
            i = !1;
          }return document.body.removeChild(n), document.body.removeChild(r), i;
        } catch (a) {
          return !1;
        }
      }return document.body || document.getElementsByTagName("body")[0] ? (addTest("csshyphens", function () {
        if (!testAllProps("hyphens", "auto", !0)) return !1;try {
          return r();
        } catch (e) {
          return !1;
        }
      }), addTest("softhyphens", function () {
        try {
          return n("&#173;", !0) && n("&#8203;", !1);
        } catch (e) {
          return !1;
        }
      }), void addTest("softhyphensfind", function () {
        try {
          return o("&#173;") && o("&#8203;");
        } catch (e) {
          return !1;
        }
      })) : void setTimeout(e, t);
    }var t = 300;setTimeout(e, t);
  }), testRunner(), setClasses(classes), delete ModernizrProto.addTest, delete ModernizrProto.addAsyncTest;for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }window.Modernizr = Modernizr;
}(window, document);