import { defineComponent as Me, inject as We, ref as h, onBeforeMount as be, useAttrs as Le, onMounted as cn, resolveComponent as Q, openBlock as _, createBlock as R, mergeProps as ne, toHandlers as Te, createCommentVNode as ae, useSlots as Mn, createSlots as en, withCtx as B, renderSlot as $e, renderList as Ye, computed as Ie, watch as He, createVNode as se, createTextVNode as ke, toDisplayString as Ce, createElementBlock as P, normalizeStyle as yt, Fragment as we, createElementVNode as ve, reactive as lt, normalizeClass as On, unref as zt, pushScopeId as hi, popScopeId as wi, nextTick as St, withModifiers as tj, resolveDynamicComponent as Ai, normalizeProps as nj, resolveDirective as lj, isRef as rj, withDirectives as uj } from "vue";
import { ElMessageBox as oj, ElMessage as Gn } from "element-plus";
const Oe = async (f, s) => {
  var o, D, p, m;
  const r = Object.assign({}, s, (o = f.desc) == null ? void 0 : o._attrs, (D = f.desc) == null ? void 0 : D.attrs, sj(f.desc));
  return f.desc.multiple && (r.multiple = !0, r.showCheckbox = !0, ["select"].indexOf(f.desc.type) >= 0 && (r.collapseTags = ((p = f.desc.attrs) == null ? void 0 : p.collapseTags) ?? !1, r.collapseTagsTooltip = ((m = f.desc.attrs) == null ? void 0 : m.collapseTagsTooltip) ?? !1)), f.desc.elType && (typeof f.desc.elType == "function" ? r.type = f.desc.elType(f.formData) : r.type = f.desc.elType), r;
}, Be = (f) => {
  var r;
  const s = {};
  return (r = f.desc) != null && r.on && Object.keys(f.desc.on).map((o) => {
    s[o] = (D) => {
      f.desc.on[o](f.formData, f.rowIndex, D);
    };
  }), s;
};
function sj(f) {
  if (!f || !f.type)
    return "";
  switch (f.type) {
    case "input":
    case "nbinput":
    case "password":
    case "number":
    case "validCode":
    case "tag":
      return { placeholder: (f == null ? void 0 : f.placeholder) || "请输入" + (f == null ? void 0 : f._label) };
    case "switch":
      return {};
    case "area":
    case "select":
    case "category":
    case "cascader":
      return { placeholder: (f == null ? void 0 : f.placeholder) || "请选择" + (f.remote ? f.initLoad !== !1 ? "（默认查10个，其余请输入搜索）" : "或输入进行搜索" : f == null ? void 0 : f._label) };
    case "data":
    case "datetime":
    case "datas":
      return { placeholder: "选择日期" };
    case "daterange":
    case "datetimerange":
    case "timerange":
    case "monthrange":
      return {
        startPlaceholder: "开始日期",
        endPlaceholder: "结束日期"
      };
    case "dates":
      return { placeholder: "选择一个或多个日期" };
    case "month":
      return { placeholder: "选择月" };
    case "time":
    case "timsPicker":
      return { placeholder: "请选择时间" };
    case "week":
      return { placeholder: "请选择周" };
    case "year":
      return { placeholder: "请选择年" };
    case "upimg":
      return { placeholder: "请上传" };
    case "upfile":
      return { placeholder: "点击上传" };
  }
}
const ij = {
  name: "ElPlusFormArea",
  inheritAttrs: !1,
  typeName: "area",
  customOptions: {}
}, aj = /* @__PURE__ */ Me({
  ...ij,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = We("globalData"), D = h([]), p = h({}), m = h(!1), N = h(Be(r)), d = h(r.modelValue);
    return s("update:modelValue", d), be(async () => {
      p.value = await Oe(r, { props: { value: "id", label: "name", children: "childs", checkStrictly: !!r.desc.checkStrictly }, clearable: !0, filterable: !0, ...Le() }), m.value = !0;
    }), cn(async () => {
      D.value = o.areaList || [];
    }), (c, z) => {
      const w = Q("el-cascader");
      return m.value ? (_(), R(w, ne({
        key: 0,
        class: "ElPlusFormArea-panel"
      }, p.value, Te(N.value), {
        modelValue: d.value,
        "onUpdate:modelValue": z[0] || (z[0] = (x) => d.value = x),
        options: D.value
      }), null, 16, ["modelValue", "options"])) : ae("", !0);
    };
  }
});
const Ge = (f, s) => {
  const r = f.__vccOpts || f;
  for (const [o, D] of s)
    r[o] = D;
  return r;
}, vi = /* @__PURE__ */ Ge(aj, [["__scopeId", "data-v-9acb5330"]]), cj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: vi }, Symbol.toStringTag, { value: "Module" })), Mj = {
  name: "ElPlusFormAutocomplete",
  inheritAttrs: !1,
  typeName: "autocomplete",
  customOptions: {}
}, fj = /* @__PURE__ */ Me({
  ...Mj,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue);
    s("update:modelValue", o);
    const D = h(Object.assign({}, Mn(), r.desc.slots)), p = h({}), m = h(Be(r));
    return be(async () => {
      p.value = await Oe(r, { autocomplete: "new-password", ...Le() });
    }), (N, d) => {
      const c = Q("el-autocomplete");
      return _(), R(c, ne({ class: "ElPlusFormAutocomplete-panel" }, p.value, Te(m.value), {
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (z) => o.value = z)
      }), en({
        default: B((z) => [
          $e(N.$slots, "default", { data: z }, void 0, !0)
        ]),
        _: 2
      }, [
        Ye(D.value, (z, w, x) => ({
          name: w,
          fn: B((C) => [
            $e(N.$slots, w, { data: C }, void 0, !0)
          ])
        }))
      ]), 1040, ["modelValue"]);
    };
  }
});
const Yi = /* @__PURE__ */ Ge(fj, [["__scopeId", "data-v-de84b568"]]), dj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Yi }, Symbol.toStringTag, { value: "Module" }));
var Al = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, jr = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
jr.exports;
(function(f, s) {
  (function() {
    var r, o = "4.17.21", D = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", m = "Expected a function", N = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", c = 500, z = "__lodash_placeholder__", w = 1, x = 2, C = 4, E = 1, U = 2, k = 1, K = 2, X = 4, de = 8, pe = 16, Y = 32, V = 64, F = 128, ge = 256, Ue = 512, Ke = 30, _t = "...", At = 800, tn = 16, nn = 1, dt = 2, Gt = 3, v = 1 / 0, T = 9007199254740991, q = 17976931348623157e292, ie = 0 / 0, _e = 4294967295, G = _e - 1, ee = _e >>> 1, te = [
      ["ary", F],
      ["bind", k],
      ["bindKey", K],
      ["curry", de],
      ["curryRight", pe],
      ["flip", Ue],
      ["partial", Y],
      ["partialRight", V],
      ["rearg", ge]
    ], J = "[object Arguments]", ze = "[object Array]", it = "[object AsyncFunction]", rt = "[object Boolean]", Zt = "[object Date]", hn = "[object DOMException]", Ht = "[object Error]", fn = "[object Function]", Sn = "[object GeneratorFunction]", gt = "[object Map]", ln = "[object Number]", I = "[object Null]", Z = "[object Object]", le = "[object Promise]", Xe = "[object Proxy]", ut = "[object RegExp]", Ve = "[object Set]", ct = "[object String]", kt = "[object Symbol]", wn = "[object Undefined]", Kt = "[object WeakMap]", Zn = "[object WeakSet]", rn = "[object ArrayBuffer]", ye = "[object DataView]", et = "[object Float32Array]", Nt = "[object Float64Array]", Pe = "[object Int8Array]", un = "[object Int16Array]", An = "[object Int32Array]", al = "[object Uint8Array]", zr = "[object Uint8ClampedArray]", yr = "[object Uint16Array]", Dr = "[object Uint32Array]", _a = /\b__p \+= '';/g, ma = /\b(__p \+=) '' \+/g, ha = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Bu = /&(?:amp|lt|gt|quot|#39);/g, Uu = /[&<>"']/g, wa = RegExp(Bu.source), Aa = RegExp(Uu.source), va = /<%-([\s\S]+?)%>/g, Ya = /<%([\s\S]+?)%>/g, Pu = /<%=([\s\S]+?)%>/g, Ia = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, La = /^\w*$/, Ta = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _r = /[\\^$.*+?()[\]{}|]/g, Ea = RegExp(_r.source), mr = /^\s+/, xa = /\s/, Ca = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ba = /\{\n\/\* \[wrapped with (.+)\] \*/, Oa = /,? & /, Sa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ka = /[()=,{}\[\]\/\s]/, Ba = /\\(\\)?/g, Ua = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Qu = /\w*$/, Pa = /^[-+]0x[0-9a-f]+$/i, Qa = /^0b[01]+$/i, Va = /^\[object .+?Constructor\]$/, Fa = /^0o[0-7]+$/i, Ra = /^(?:0|[1-9]\d*)$/, Wa = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ll = /($^)/, Ga = /['\n\r\u2028\u2029\\]/g, Tl = "\\ud800-\\udfff", Za = "\\u0300-\\u036f", Ha = "\\ufe20-\\ufe2f", Ka = "\\u20d0-\\u20ff", Vu = Za + Ha + Ka, Fu = "\\u2700-\\u27bf", Ru = "a-z\\xdf-\\xf6\\xf8-\\xff", Ja = "\\xac\\xb1\\xd7\\xf7", $a = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", qa = "\\u2000-\\u206f", Xa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Wu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Gu = "\\ufe0e\\ufe0f", Zu = Ja + $a + qa + Xa, hr = "['’]", ec = "[" + Tl + "]", Hu = "[" + Zu + "]", El = "[" + Vu + "]", Ku = "\\d+", tc = "[" + Fu + "]", Ju = "[" + Ru + "]", $u = "[^" + Tl + Zu + Ku + Fu + Ru + Wu + "]", wr = "\\ud83c[\\udffb-\\udfff]", nc = "(?:" + El + "|" + wr + ")", qu = "[^" + Tl + "]", Ar = "(?:\\ud83c[\\udde6-\\uddff]){2}", vr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Hn = "[" + Wu + "]", Xu = "\\u200d", eo = "(?:" + Ju + "|" + $u + ")", lc = "(?:" + Hn + "|" + $u + ")", to = "(?:" + hr + "(?:d|ll|m|re|s|t|ve))?", no = "(?:" + hr + "(?:D|LL|M|RE|S|T|VE))?", lo = nc + "?", ro = "[" + Gu + "]?", rc = "(?:" + Xu + "(?:" + [qu, Ar, vr].join("|") + ")" + ro + lo + ")*", uc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", oc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", uo = ro + lo + rc, sc = "(?:" + [tc, Ar, vr].join("|") + ")" + uo, ic = "(?:" + [qu + El + "?", El, Ar, vr, ec].join("|") + ")", ac = RegExp(hr, "g"), cc = RegExp(El, "g"), Yr = RegExp(wr + "(?=" + wr + ")|" + ic + uo, "g"), Mc = RegExp([
      Hn + "?" + Ju + "+" + to + "(?=" + [Hu, Hn, "$"].join("|") + ")",
      lc + "+" + no + "(?=" + [Hu, Hn + eo, "$"].join("|") + ")",
      Hn + "?" + eo + "+" + to,
      Hn + "+" + no,
      oc,
      uc,
      Ku,
      sc
    ].join("|"), "g"), fc = RegExp("[" + Xu + Tl + Vu + Gu + "]"), dc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, gc = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Nc = -1, Re = {};
    Re[et] = Re[Nt] = Re[Pe] = Re[un] = Re[An] = Re[al] = Re[zr] = Re[yr] = Re[Dr] = !0, Re[J] = Re[ze] = Re[rn] = Re[rt] = Re[ye] = Re[Zt] = Re[Ht] = Re[fn] = Re[gt] = Re[ln] = Re[Z] = Re[ut] = Re[Ve] = Re[ct] = Re[Kt] = !1;
    var Fe = {};
    Fe[J] = Fe[ze] = Fe[rn] = Fe[ye] = Fe[rt] = Fe[Zt] = Fe[et] = Fe[Nt] = Fe[Pe] = Fe[un] = Fe[An] = Fe[gt] = Fe[ln] = Fe[Z] = Fe[ut] = Fe[Ve] = Fe[ct] = Fe[kt] = Fe[al] = Fe[zr] = Fe[yr] = Fe[Dr] = !0, Fe[Ht] = Fe[fn] = Fe[Kt] = !1;
    var pc = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, jc = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, zc = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, yc = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Dc = parseFloat, _c = parseInt, oo = typeof Al == "object" && Al && Al.Object === Object && Al, mc = typeof self == "object" && self && self.Object === Object && self, Mt = oo || mc || Function("return this")(), Ir = s && !s.nodeType && s, kn = Ir && !0 && f && !f.nodeType && f, so = kn && kn.exports === Ir, Lr = so && oo.process, Bt = function() {
      try {
        var j = kn && kn.require && kn.require("util").types;
        return j || Lr && Lr.binding && Lr.binding("util");
      } catch {
      }
    }(), io = Bt && Bt.isArrayBuffer, ao = Bt && Bt.isDate, co = Bt && Bt.isMap, Mo = Bt && Bt.isRegExp, fo = Bt && Bt.isSet, go = Bt && Bt.isTypedArray;
    function Tt(j, L, A) {
      switch (A.length) {
        case 0:
          return j.call(L);
        case 1:
          return j.call(L, A[0]);
        case 2:
          return j.call(L, A[0], A[1]);
        case 3:
          return j.call(L, A[0], A[1], A[2]);
      }
      return j.apply(L, A);
    }
    function hc(j, L, A, H) {
      for (var ce = -1, Ee = j == null ? 0 : j.length; ++ce < Ee; ) {
        var ot = j[ce];
        L(H, ot, A(ot), j);
      }
      return H;
    }
    function Ut(j, L) {
      for (var A = -1, H = j == null ? 0 : j.length; ++A < H && L(j[A], A, j) !== !1; )
        ;
      return j;
    }
    function wc(j, L) {
      for (var A = j == null ? 0 : j.length; A-- && L(j[A], A, j) !== !1; )
        ;
      return j;
    }
    function No(j, L) {
      for (var A = -1, H = j == null ? 0 : j.length; ++A < H; )
        if (!L(j[A], A, j))
          return !1;
      return !0;
    }
    function vn(j, L) {
      for (var A = -1, H = j == null ? 0 : j.length, ce = 0, Ee = []; ++A < H; ) {
        var ot = j[A];
        L(ot, A, j) && (Ee[ce++] = ot);
      }
      return Ee;
    }
    function xl(j, L) {
      var A = j == null ? 0 : j.length;
      return !!A && Kn(j, L, 0) > -1;
    }
    function Tr(j, L, A) {
      for (var H = -1, ce = j == null ? 0 : j.length; ++H < ce; )
        if (A(L, j[H]))
          return !0;
      return !1;
    }
    function Ze(j, L) {
      for (var A = -1, H = j == null ? 0 : j.length, ce = Array(H); ++A < H; )
        ce[A] = L(j[A], A, j);
      return ce;
    }
    function Yn(j, L) {
      for (var A = -1, H = L.length, ce = j.length; ++A < H; )
        j[ce + A] = L[A];
      return j;
    }
    function Er(j, L, A, H) {
      var ce = -1, Ee = j == null ? 0 : j.length;
      for (H && Ee && (A = j[++ce]); ++ce < Ee; )
        A = L(A, j[ce], ce, j);
      return A;
    }
    function Ac(j, L, A, H) {
      var ce = j == null ? 0 : j.length;
      for (H && ce && (A = j[--ce]); ce--; )
        A = L(A, j[ce], ce, j);
      return A;
    }
    function xr(j, L) {
      for (var A = -1, H = j == null ? 0 : j.length; ++A < H; )
        if (L(j[A], A, j))
          return !0;
      return !1;
    }
    var vc = Cr("length");
    function Yc(j) {
      return j.split("");
    }
    function Ic(j) {
      return j.match(Sa) || [];
    }
    function po(j, L, A) {
      var H;
      return A(j, function(ce, Ee, ot) {
        if (L(ce, Ee, ot))
          return H = Ee, !1;
      }), H;
    }
    function Cl(j, L, A, H) {
      for (var ce = j.length, Ee = A + (H ? 1 : -1); H ? Ee-- : ++Ee < ce; )
        if (L(j[Ee], Ee, j))
          return Ee;
      return -1;
    }
    function Kn(j, L, A) {
      return L === L ? Pc(j, L, A) : Cl(j, jo, A);
    }
    function Lc(j, L, A, H) {
      for (var ce = A - 1, Ee = j.length; ++ce < Ee; )
        if (H(j[ce], L))
          return ce;
      return -1;
    }
    function jo(j) {
      return j !== j;
    }
    function zo(j, L) {
      var A = j == null ? 0 : j.length;
      return A ? Or(j, L) / A : ie;
    }
    function Cr(j) {
      return function(L) {
        return L == null ? r : L[j];
      };
    }
    function br(j) {
      return function(L) {
        return j == null ? r : j[L];
      };
    }
    function yo(j, L, A, H, ce) {
      return ce(j, function(Ee, ot, Qe) {
        A = H ? (H = !1, Ee) : L(A, Ee, ot, Qe);
      }), A;
    }
    function Tc(j, L) {
      var A = j.length;
      for (j.sort(L); A--; )
        j[A] = j[A].value;
      return j;
    }
    function Or(j, L) {
      for (var A, H = -1, ce = j.length; ++H < ce; ) {
        var Ee = L(j[H]);
        Ee !== r && (A = A === r ? Ee : A + Ee);
      }
      return A;
    }
    function Sr(j, L) {
      for (var A = -1, H = Array(j); ++A < j; )
        H[A] = L(A);
      return H;
    }
    function Ec(j, L) {
      return Ze(L, function(A) {
        return [A, j[A]];
      });
    }
    function Do(j) {
      return j && j.slice(0, wo(j) + 1).replace(mr, "");
    }
    function Et(j) {
      return function(L) {
        return j(L);
      };
    }
    function kr(j, L) {
      return Ze(L, function(A) {
        return j[A];
      });
    }
    function cl(j, L) {
      return j.has(L);
    }
    function _o(j, L) {
      for (var A = -1, H = j.length; ++A < H && Kn(L, j[A], 0) > -1; )
        ;
      return A;
    }
    function mo(j, L) {
      for (var A = j.length; A-- && Kn(L, j[A], 0) > -1; )
        ;
      return A;
    }
    function xc(j, L) {
      for (var A = j.length, H = 0; A--; )
        j[A] === L && ++H;
      return H;
    }
    var Cc = br(pc), bc = br(jc);
    function Oc(j) {
      return "\\" + yc[j];
    }
    function Sc(j, L) {
      return j == null ? r : j[L];
    }
    function Jn(j) {
      return fc.test(j);
    }
    function kc(j) {
      return dc.test(j);
    }
    function Bc(j) {
      for (var L, A = []; !(L = j.next()).done; )
        A.push(L.value);
      return A;
    }
    function Br(j) {
      var L = -1, A = Array(j.size);
      return j.forEach(function(H, ce) {
        A[++L] = [ce, H];
      }), A;
    }
    function ho(j, L) {
      return function(A) {
        return j(L(A));
      };
    }
    function In(j, L) {
      for (var A = -1, H = j.length, ce = 0, Ee = []; ++A < H; ) {
        var ot = j[A];
        (ot === L || ot === z) && (j[A] = z, Ee[ce++] = A);
      }
      return Ee;
    }
    function bl(j) {
      var L = -1, A = Array(j.size);
      return j.forEach(function(H) {
        A[++L] = H;
      }), A;
    }
    function Uc(j) {
      var L = -1, A = Array(j.size);
      return j.forEach(function(H) {
        A[++L] = [H, H];
      }), A;
    }
    function Pc(j, L, A) {
      for (var H = A - 1, ce = j.length; ++H < ce; )
        if (j[H] === L)
          return H;
      return -1;
    }
    function Qc(j, L, A) {
      for (var H = A + 1; H--; )
        if (j[H] === L)
          return H;
      return H;
    }
    function $n(j) {
      return Jn(j) ? Fc(j) : vc(j);
    }
    function Jt(j) {
      return Jn(j) ? Rc(j) : Yc(j);
    }
    function wo(j) {
      for (var L = j.length; L-- && xa.test(j.charAt(L)); )
        ;
      return L;
    }
    var Vc = br(zc);
    function Fc(j) {
      for (var L = Yr.lastIndex = 0; Yr.test(j); )
        ++L;
      return L;
    }
    function Rc(j) {
      return j.match(Yr) || [];
    }
    function Wc(j) {
      return j.match(Mc) || [];
    }
    var Gc = function j(L) {
      L = L == null ? Mt : qn.defaults(Mt.Object(), L, qn.pick(Mt, gc));
      var A = L.Array, H = L.Date, ce = L.Error, Ee = L.Function, ot = L.Math, Qe = L.Object, Ur = L.RegExp, Zc = L.String, Pt = L.TypeError, Ol = A.prototype, Hc = Ee.prototype, Xn = Qe.prototype, Sl = L["__core-js_shared__"], kl = Hc.toString, Se = Xn.hasOwnProperty, Kc = 0, Ao = function() {
        var e = /[^.]+$/.exec(Sl && Sl.keys && Sl.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Bl = Xn.toString, Jc = kl.call(Qe), $c = Mt._, qc = Ur(
        "^" + kl.call(Se).replace(_r, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ul = so ? L.Buffer : r, Ln = L.Symbol, Pl = L.Uint8Array, vo = Ul ? Ul.allocUnsafe : r, Ql = ho(Qe.getPrototypeOf, Qe), Yo = Qe.create, Io = Xn.propertyIsEnumerable, Vl = Ol.splice, Lo = Ln ? Ln.isConcatSpreadable : r, Ml = Ln ? Ln.iterator : r, Bn = Ln ? Ln.toStringTag : r, Fl = function() {
        try {
          var e = Fn(Qe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Xc = L.clearTimeout !== Mt.clearTimeout && L.clearTimeout, eM = H && H.now !== Mt.Date.now && H.now, tM = L.setTimeout !== Mt.setTimeout && L.setTimeout, Rl = ot.ceil, Wl = ot.floor, Pr = Qe.getOwnPropertySymbols, nM = Ul ? Ul.isBuffer : r, To = L.isFinite, lM = Ol.join, rM = ho(Qe.keys, Qe), st = ot.max, pt = ot.min, uM = H.now, oM = L.parseInt, Eo = ot.random, sM = Ol.reverse, Qr = Fn(L, "DataView"), fl = Fn(L, "Map"), Vr = Fn(L, "Promise"), el = Fn(L, "Set"), dl = Fn(L, "WeakMap"), gl = Fn(Qe, "create"), Gl = dl && new dl(), tl = {}, iM = Rn(Qr), aM = Rn(fl), cM = Rn(Vr), MM = Rn(el), fM = Rn(dl), Zl = Ln ? Ln.prototype : r, Nl = Zl ? Zl.valueOf : r, xo = Zl ? Zl.toString : r;
      function i(e) {
        if (qe(e) && !fe(e) && !(e instanceof he)) {
          if (e instanceof Qt)
            return e;
          if (Se.call(e, "__wrapped__"))
            return Cs(e);
        }
        return new Qt(e);
      }
      var nl = function() {
        function e() {
        }
        return function(t) {
          if (!Je(t))
            return {};
          if (Yo)
            return Yo(t);
          e.prototype = t;
          var n = new e();
          return e.prototype = r, n;
        };
      }();
      function Hl() {
      }
      function Qt(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      i.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: va,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ya,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Pu,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: i
        }
      }, i.prototype = Hl.prototype, i.prototype.constructor = i, Qt.prototype = nl(Hl.prototype), Qt.prototype.constructor = Qt;
      function he(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = _e, this.__views__ = [];
      }
      function dM() {
        var e = new he(this.__wrapped__);
        return e.__actions__ = vt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = vt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = vt(this.__views__), e;
      }
      function gM() {
        if (this.__filtered__) {
          var e = new he(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function NM() {
        var e = this.__wrapped__.value(), t = this.__dir__, n = fe(e), l = t < 0, u = n ? e.length : 0, a = If(0, u, this.__views__), M = a.start, g = a.end, y = g - M, b = l ? g : M - 1, O = this.__iteratees__, S = O.length, W = 0, $ = pt(y, this.__takeCount__);
        if (!n || !l && u == y && $ == y)
          return ns(e, this.__actions__);
        var ue = [];
        e:
          for (; y-- && W < $; ) {
            b += t;
            for (var je = -1, oe = e[b]; ++je < S; ) {
              var me = O[je], Ae = me.iteratee, bt = me.type, wt = Ae(oe);
              if (bt == dt)
                oe = wt;
              else if (!wt) {
                if (bt == nn)
                  continue e;
                break e;
              }
            }
            ue[W++] = oe;
          }
        return ue;
      }
      he.prototype = nl(Hl.prototype), he.prototype.constructor = he;
      function Un(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var l = e[t];
          this.set(l[0], l[1]);
        }
      }
      function pM() {
        this.__data__ = gl ? gl(null) : {}, this.size = 0;
      }
      function jM(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function zM(e) {
        var t = this.__data__;
        if (gl) {
          var n = t[e];
          return n === d ? r : n;
        }
        return Se.call(t, e) ? t[e] : r;
      }
      function yM(e) {
        var t = this.__data__;
        return gl ? t[e] !== r : Se.call(t, e);
      }
      function DM(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = gl && t === r ? d : t, this;
      }
      Un.prototype.clear = pM, Un.prototype.delete = jM, Un.prototype.get = zM, Un.prototype.has = yM, Un.prototype.set = DM;
      function dn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var l = e[t];
          this.set(l[0], l[1]);
        }
      }
      function _M() {
        this.__data__ = [], this.size = 0;
      }
      function mM(e) {
        var t = this.__data__, n = Kl(t, e);
        if (n < 0)
          return !1;
        var l = t.length - 1;
        return n == l ? t.pop() : Vl.call(t, n, 1), --this.size, !0;
      }
      function hM(e) {
        var t = this.__data__, n = Kl(t, e);
        return n < 0 ? r : t[n][1];
      }
      function wM(e) {
        return Kl(this.__data__, e) > -1;
      }
      function AM(e, t) {
        var n = this.__data__, l = Kl(n, e);
        return l < 0 ? (++this.size, n.push([e, t])) : n[l][1] = t, this;
      }
      dn.prototype.clear = _M, dn.prototype.delete = mM, dn.prototype.get = hM, dn.prototype.has = wM, dn.prototype.set = AM;
      function gn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var l = e[t];
          this.set(l[0], l[1]);
        }
      }
      function vM() {
        this.size = 0, this.__data__ = {
          hash: new Un(),
          map: new (fl || dn)(),
          string: new Un()
        };
      }
      function YM(e) {
        var t = sr(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function IM(e) {
        return sr(this, e).get(e);
      }
      function LM(e) {
        return sr(this, e).has(e);
      }
      function TM(e, t) {
        var n = sr(this, e), l = n.size;
        return n.set(e, t), this.size += n.size == l ? 0 : 1, this;
      }
      gn.prototype.clear = vM, gn.prototype.delete = YM, gn.prototype.get = IM, gn.prototype.has = LM, gn.prototype.set = TM;
      function Pn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.__data__ = new gn(); ++t < n; )
          this.add(e[t]);
      }
      function EM(e) {
        return this.__data__.set(e, d), this;
      }
      function xM(e) {
        return this.__data__.has(e);
      }
      Pn.prototype.add = Pn.prototype.push = EM, Pn.prototype.has = xM;
      function $t(e) {
        var t = this.__data__ = new dn(e);
        this.size = t.size;
      }
      function CM() {
        this.__data__ = new dn(), this.size = 0;
      }
      function bM(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
      }
      function OM(e) {
        return this.__data__.get(e);
      }
      function SM(e) {
        return this.__data__.has(e);
      }
      function kM(e, t) {
        var n = this.__data__;
        if (n instanceof dn) {
          var l = n.__data__;
          if (!fl || l.length < D - 1)
            return l.push([e, t]), this.size = ++n.size, this;
          n = this.__data__ = new gn(l);
        }
        return n.set(e, t), this.size = n.size, this;
      }
      $t.prototype.clear = CM, $t.prototype.delete = bM, $t.prototype.get = OM, $t.prototype.has = SM, $t.prototype.set = kM;
      function Co(e, t) {
        var n = fe(e), l = !n && Wn(e), u = !n && !l && bn(e), a = !n && !l && !u && ol(e), M = n || l || u || a, g = M ? Sr(e.length, Zc) : [], y = g.length;
        for (var b in e)
          (t || Se.call(e, b)) && !(M && // Safari 9 has enumerable `arguments.length` in strict mode.
          (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          u && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          a && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
          zn(b, y))) && g.push(b);
        return g;
      }
      function bo(e) {
        var t = e.length;
        return t ? e[Xr(0, t - 1)] : r;
      }
      function BM(e, t) {
        return ir(vt(e), Qn(t, 0, e.length));
      }
      function UM(e) {
        return ir(vt(e));
      }
      function Fr(e, t, n) {
        (n !== r && !qt(e[t], n) || n === r && !(t in e)) && Nn(e, t, n);
      }
      function pl(e, t, n) {
        var l = e[t];
        (!(Se.call(e, t) && qt(l, n)) || n === r && !(t in e)) && Nn(e, t, n);
      }
      function Kl(e, t) {
        for (var n = e.length; n--; )
          if (qt(e[n][0], t))
            return n;
        return -1;
      }
      function PM(e, t, n, l) {
        return Tn(e, function(u, a, M) {
          t(l, u, n(u), M);
        }), l;
      }
      function Oo(e, t) {
        return e && sn(t, at(t), e);
      }
      function QM(e, t) {
        return e && sn(t, It(t), e);
      }
      function Nn(e, t, n) {
        t == "__proto__" && Fl ? Fl(e, t, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : e[t] = n;
      }
      function Rr(e, t) {
        for (var n = -1, l = t.length, u = A(l), a = e == null; ++n < l; )
          u[n] = a ? r : wu(e, t[n]);
        return u;
      }
      function Qn(e, t, n) {
        return e === e && (n !== r && (e = e <= n ? e : n), t !== r && (e = e >= t ? e : t)), e;
      }
      function Vt(e, t, n, l, u, a) {
        var M, g = t & w, y = t & x, b = t & C;
        if (n && (M = u ? n(e, l, u, a) : n(e)), M !== r)
          return M;
        if (!Je(e))
          return e;
        var O = fe(e);
        if (O) {
          if (M = Tf(e), !g)
            return vt(e, M);
        } else {
          var S = jt(e), W = S == fn || S == Sn;
          if (bn(e))
            return us(e, g);
          if (S == Z || S == J || W && !u) {
            if (M = y || W ? {} : ws(e), !g)
              return y ? yf(e, QM(M, e)) : zf(e, Oo(M, e));
          } else {
            if (!Fe[S])
              return u ? e : {};
            M = Ef(e, S, g);
          }
        }
        a || (a = new $t());
        var $ = a.get(e);
        if ($)
          return $;
        a.set(e, M), Xs(e) ? e.forEach(function(oe) {
          M.add(Vt(oe, t, n, oe, e, a));
        }) : $s(e) && e.forEach(function(oe, me) {
          M.set(me, Vt(oe, t, n, me, e, a));
        });
        var ue = b ? y ? cu : au : y ? It : at, je = O ? r : ue(e);
        return Ut(je || e, function(oe, me) {
          je && (me = oe, oe = e[me]), pl(M, me, Vt(oe, t, n, me, e, a));
        }), M;
      }
      function VM(e) {
        var t = at(e);
        return function(n) {
          return So(n, e, t);
        };
      }
      function So(e, t, n) {
        var l = n.length;
        if (e == null)
          return !l;
        for (e = Qe(e); l--; ) {
          var u = n[l], a = t[u], M = e[u];
          if (M === r && !(u in e) || !a(M))
            return !1;
        }
        return !0;
      }
      function ko(e, t, n) {
        if (typeof e != "function")
          throw new Pt(m);
        return hl(function() {
          e.apply(r, n);
        }, t);
      }
      function jl(e, t, n, l) {
        var u = -1, a = xl, M = !0, g = e.length, y = [], b = t.length;
        if (!g)
          return y;
        n && (t = Ze(t, Et(n))), l ? (a = Tr, M = !1) : t.length >= D && (a = cl, M = !1, t = new Pn(t));
        e:
          for (; ++u < g; ) {
            var O = e[u], S = n == null ? O : n(O);
            if (O = l || O !== 0 ? O : 0, M && S === S) {
              for (var W = b; W--; )
                if (t[W] === S)
                  continue e;
              y.push(O);
            } else
              a(t, S, l) || y.push(O);
          }
        return y;
      }
      var Tn = cs(on), Bo = cs(Gr, !0);
      function FM(e, t) {
        var n = !0;
        return Tn(e, function(l, u, a) {
          return n = !!t(l, u, a), n;
        }), n;
      }
      function Jl(e, t, n) {
        for (var l = -1, u = e.length; ++l < u; ) {
          var a = e[l], M = t(a);
          if (M != null && (g === r ? M === M && !Ct(M) : n(M, g)))
            var g = M, y = a;
        }
        return y;
      }
      function RM(e, t, n, l) {
        var u = e.length;
        for (n = Ne(n), n < 0 && (n = -n > u ? 0 : u + n), l = l === r || l > u ? u : Ne(l), l < 0 && (l += u), l = n > l ? 0 : ti(l); n < l; )
          e[n++] = t;
        return e;
      }
      function Uo(e, t) {
        var n = [];
        return Tn(e, function(l, u, a) {
          t(l, u, a) && n.push(l);
        }), n;
      }
      function ft(e, t, n, l, u) {
        var a = -1, M = e.length;
        for (n || (n = Cf), u || (u = []); ++a < M; ) {
          var g = e[a];
          t > 0 && n(g) ? t > 1 ? ft(g, t - 1, n, l, u) : Yn(u, g) : l || (u[u.length] = g);
        }
        return u;
      }
      var Wr = Ms(), Po = Ms(!0);
      function on(e, t) {
        return e && Wr(e, t, at);
      }
      function Gr(e, t) {
        return e && Po(e, t, at);
      }
      function $l(e, t) {
        return vn(t, function(n) {
          return yn(e[n]);
        });
      }
      function Vn(e, t) {
        t = xn(t, e);
        for (var n = 0, l = t.length; e != null && n < l; )
          e = e[an(t[n++])];
        return n && n == l ? e : r;
      }
      function Qo(e, t, n) {
        var l = t(e);
        return fe(e) ? l : Yn(l, n(e));
      }
      function mt(e) {
        return e == null ? e === r ? wn : I : Bn && Bn in Qe(e) ? Yf(e) : Pf(e);
      }
      function Zr(e, t) {
        return e > t;
      }
      function WM(e, t) {
        return e != null && Se.call(e, t);
      }
      function GM(e, t) {
        return e != null && t in Qe(e);
      }
      function ZM(e, t, n) {
        return e >= pt(t, n) && e < st(t, n);
      }
      function Hr(e, t, n) {
        for (var l = n ? Tr : xl, u = e[0].length, a = e.length, M = a, g = A(a), y = 1 / 0, b = []; M--; ) {
          var O = e[M];
          M && t && (O = Ze(O, Et(t))), y = pt(O.length, y), g[M] = !n && (t || u >= 120 && O.length >= 120) ? new Pn(M && O) : r;
        }
        O = e[0];
        var S = -1, W = g[0];
        e:
          for (; ++S < u && b.length < y; ) {
            var $ = O[S], ue = t ? t($) : $;
            if ($ = n || $ !== 0 ? $ : 0, !(W ? cl(W, ue) : l(b, ue, n))) {
              for (M = a; --M; ) {
                var je = g[M];
                if (!(je ? cl(je, ue) : l(e[M], ue, n)))
                  continue e;
              }
              W && W.push(ue), b.push($);
            }
          }
        return b;
      }
      function HM(e, t, n, l) {
        return on(e, function(u, a, M) {
          t(l, n(u), a, M);
        }), l;
      }
      function zl(e, t, n) {
        t = xn(t, e), e = Is(e, t);
        var l = e == null ? e : e[an(Rt(t))];
        return l == null ? r : Tt(l, e, n);
      }
      function Vo(e) {
        return qe(e) && mt(e) == J;
      }
      function KM(e) {
        return qe(e) && mt(e) == rn;
      }
      function JM(e) {
        return qe(e) && mt(e) == Zt;
      }
      function yl(e, t, n, l, u) {
        return e === t ? !0 : e == null || t == null || !qe(e) && !qe(t) ? e !== e && t !== t : $M(e, t, n, l, yl, u);
      }
      function $M(e, t, n, l, u, a) {
        var M = fe(e), g = fe(t), y = M ? ze : jt(e), b = g ? ze : jt(t);
        y = y == J ? Z : y, b = b == J ? Z : b;
        var O = y == Z, S = b == Z, W = y == b;
        if (W && bn(e)) {
          if (!bn(t))
            return !1;
          M = !0, O = !1;
        }
        if (W && !O)
          return a || (a = new $t()), M || ol(e) ? _s(e, t, n, l, u, a) : Af(e, t, y, n, l, u, a);
        if (!(n & E)) {
          var $ = O && Se.call(e, "__wrapped__"), ue = S && Se.call(t, "__wrapped__");
          if ($ || ue) {
            var je = $ ? e.value() : e, oe = ue ? t.value() : t;
            return a || (a = new $t()), u(je, oe, n, l, a);
          }
        }
        return W ? (a || (a = new $t()), vf(e, t, n, l, u, a)) : !1;
      }
      function qM(e) {
        return qe(e) && jt(e) == gt;
      }
      function Kr(e, t, n, l) {
        var u = n.length, a = u, M = !l;
        if (e == null)
          return !a;
        for (e = Qe(e); u--; ) {
          var g = n[u];
          if (M && g[2] ? g[1] !== e[g[0]] : !(g[0] in e))
            return !1;
        }
        for (; ++u < a; ) {
          g = n[u];
          var y = g[0], b = e[y], O = g[1];
          if (M && g[2]) {
            if (b === r && !(y in e))
              return !1;
          } else {
            var S = new $t();
            if (l)
              var W = l(b, O, y, e, t, S);
            if (!(W === r ? yl(O, b, E | U, l, S) : W))
              return !1;
          }
        }
        return !0;
      }
      function Fo(e) {
        if (!Je(e) || Of(e))
          return !1;
        var t = yn(e) ? qc : Va;
        return t.test(Rn(e));
      }
      function XM(e) {
        return qe(e) && mt(e) == ut;
      }
      function ef(e) {
        return qe(e) && jt(e) == Ve;
      }
      function tf(e) {
        return qe(e) && gr(e.length) && !!Re[mt(e)];
      }
      function Ro(e) {
        return typeof e == "function" ? e : e == null ? Lt : typeof e == "object" ? fe(e) ? Zo(e[0], e[1]) : Go(e) : fi(e);
      }
      function Jr(e) {
        if (!ml(e))
          return rM(e);
        var t = [];
        for (var n in Qe(e))
          Se.call(e, n) && n != "constructor" && t.push(n);
        return t;
      }
      function nf(e) {
        if (!Je(e))
          return Uf(e);
        var t = ml(e), n = [];
        for (var l in e)
          l == "constructor" && (t || !Se.call(e, l)) || n.push(l);
        return n;
      }
      function $r(e, t) {
        return e < t;
      }
      function Wo(e, t) {
        var n = -1, l = Yt(e) ? A(e.length) : [];
        return Tn(e, function(u, a, M) {
          l[++n] = t(u, a, M);
        }), l;
      }
      function Go(e) {
        var t = fu(e);
        return t.length == 1 && t[0][2] ? vs(t[0][0], t[0][1]) : function(n) {
          return n === e || Kr(n, e, t);
        };
      }
      function Zo(e, t) {
        return gu(e) && As(t) ? vs(an(e), t) : function(n) {
          var l = wu(n, e);
          return l === r && l === t ? Au(n, e) : yl(t, l, E | U);
        };
      }
      function ql(e, t, n, l, u) {
        e !== t && Wr(t, function(a, M) {
          if (u || (u = new $t()), Je(a))
            lf(e, t, M, n, ql, l, u);
          else {
            var g = l ? l(pu(e, M), a, M + "", e, t, u) : r;
            g === r && (g = a), Fr(e, M, g);
          }
        }, It);
      }
      function lf(e, t, n, l, u, a, M) {
        var g = pu(e, n), y = pu(t, n), b = M.get(y);
        if (b) {
          Fr(e, n, b);
          return;
        }
        var O = a ? a(g, y, n + "", e, t, M) : r, S = O === r;
        if (S) {
          var W = fe(y), $ = !W && bn(y), ue = !W && !$ && ol(y);
          O = y, W || $ || ue ? fe(g) ? O = g : tt(g) ? O = vt(g) : $ ? (S = !1, O = us(y, !0)) : ue ? (S = !1, O = os(y, !0)) : O = [] : wl(y) || Wn(y) ? (O = g, Wn(g) ? O = ni(g) : (!Je(g) || yn(g)) && (O = ws(y))) : S = !1;
        }
        S && (M.set(y, O), u(O, y, l, a, M), M.delete(y)), Fr(e, n, O);
      }
      function Ho(e, t) {
        var n = e.length;
        if (n)
          return t += t < 0 ? n : 0, zn(t, n) ? e[t] : r;
      }
      function Ko(e, t, n) {
        t.length ? t = Ze(t, function(a) {
          return fe(a) ? function(M) {
            return Vn(M, a.length === 1 ? a[0] : a);
          } : a;
        }) : t = [Lt];
        var l = -1;
        t = Ze(t, Et(re()));
        var u = Wo(e, function(a, M, g) {
          var y = Ze(t, function(b) {
            return b(a);
          });
          return { criteria: y, index: ++l, value: a };
        });
        return Tc(u, function(a, M) {
          return jf(a, M, n);
        });
      }
      function rf(e, t) {
        return Jo(e, t, function(n, l) {
          return Au(e, l);
        });
      }
      function Jo(e, t, n) {
        for (var l = -1, u = t.length, a = {}; ++l < u; ) {
          var M = t[l], g = Vn(e, M);
          n(g, M) && Dl(a, xn(M, e), g);
        }
        return a;
      }
      function uf(e) {
        return function(t) {
          return Vn(t, e);
        };
      }
      function qr(e, t, n, l) {
        var u = l ? Lc : Kn, a = -1, M = t.length, g = e;
        for (e === t && (t = vt(t)), n && (g = Ze(e, Et(n))); ++a < M; )
          for (var y = 0, b = t[a], O = n ? n(b) : b; (y = u(g, O, y, l)) > -1; )
            g !== e && Vl.call(g, y, 1), Vl.call(e, y, 1);
        return e;
      }
      function $o(e, t) {
        for (var n = e ? t.length : 0, l = n - 1; n--; ) {
          var u = t[n];
          if (n == l || u !== a) {
            var a = u;
            zn(u) ? Vl.call(e, u, 1) : nu(e, u);
          }
        }
        return e;
      }
      function Xr(e, t) {
        return e + Wl(Eo() * (t - e + 1));
      }
      function of(e, t, n, l) {
        for (var u = -1, a = st(Rl((t - e) / (n || 1)), 0), M = A(a); a--; )
          M[l ? a : ++u] = e, e += n;
        return M;
      }
      function eu(e, t) {
        var n = "";
        if (!e || t < 1 || t > T)
          return n;
        do
          t % 2 && (n += e), t = Wl(t / 2), t && (e += e);
        while (t);
        return n;
      }
      function De(e, t) {
        return ju(Ys(e, t, Lt), e + "");
      }
      function sf(e) {
        return bo(sl(e));
      }
      function af(e, t) {
        var n = sl(e);
        return ir(n, Qn(t, 0, n.length));
      }
      function Dl(e, t, n, l) {
        if (!Je(e))
          return e;
        t = xn(t, e);
        for (var u = -1, a = t.length, M = a - 1, g = e; g != null && ++u < a; ) {
          var y = an(t[u]), b = n;
          if (y === "__proto__" || y === "constructor" || y === "prototype")
            return e;
          if (u != M) {
            var O = g[y];
            b = l ? l(O, y, g) : r, b === r && (b = Je(O) ? O : zn(t[u + 1]) ? [] : {});
          }
          pl(g, y, b), g = g[y];
        }
        return e;
      }
      var qo = Gl ? function(e, t) {
        return Gl.set(e, t), e;
      } : Lt, cf = Fl ? function(e, t) {
        return Fl(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Yu(t),
          writable: !0
        });
      } : Lt;
      function Mf(e) {
        return ir(sl(e));
      }
      function Ft(e, t, n) {
        var l = -1, u = e.length;
        t < 0 && (t = -t > u ? 0 : u + t), n = n > u ? u : n, n < 0 && (n += u), u = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var a = A(u); ++l < u; )
          a[l] = e[l + t];
        return a;
      }
      function ff(e, t) {
        var n;
        return Tn(e, function(l, u, a) {
          return n = t(l, u, a), !n;
        }), !!n;
      }
      function Xl(e, t, n) {
        var l = 0, u = e == null ? l : e.length;
        if (typeof t == "number" && t === t && u <= ee) {
          for (; l < u; ) {
            var a = l + u >>> 1, M = e[a];
            M !== null && !Ct(M) && (n ? M <= t : M < t) ? l = a + 1 : u = a;
          }
          return u;
        }
        return tu(e, t, Lt, n);
      }
      function tu(e, t, n, l) {
        var u = 0, a = e == null ? 0 : e.length;
        if (a === 0)
          return 0;
        t = n(t);
        for (var M = t !== t, g = t === null, y = Ct(t), b = t === r; u < a; ) {
          var O = Wl((u + a) / 2), S = n(e[O]), W = S !== r, $ = S === null, ue = S === S, je = Ct(S);
          if (M)
            var oe = l || ue;
          else
            b ? oe = ue && (l || W) : g ? oe = ue && W && (l || !$) : y ? oe = ue && W && !$ && (l || !je) : $ || je ? oe = !1 : oe = l ? S <= t : S < t;
          oe ? u = O + 1 : a = O;
        }
        return pt(a, G);
      }
      function Xo(e, t) {
        for (var n = -1, l = e.length, u = 0, a = []; ++n < l; ) {
          var M = e[n], g = t ? t(M) : M;
          if (!n || !qt(g, y)) {
            var y = g;
            a[u++] = M === 0 ? 0 : M;
          }
        }
        return a;
      }
      function es(e) {
        return typeof e == "number" ? e : Ct(e) ? ie : +e;
      }
      function xt(e) {
        if (typeof e == "string")
          return e;
        if (fe(e))
          return Ze(e, xt) + "";
        if (Ct(e))
          return xo ? xo.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -v ? "-0" : t;
      }
      function En(e, t, n) {
        var l = -1, u = xl, a = e.length, M = !0, g = [], y = g;
        if (n)
          M = !1, u = Tr;
        else if (a >= D) {
          var b = t ? null : hf(e);
          if (b)
            return bl(b);
          M = !1, u = cl, y = new Pn();
        } else
          y = t ? [] : g;
        e:
          for (; ++l < a; ) {
            var O = e[l], S = t ? t(O) : O;
            if (O = n || O !== 0 ? O : 0, M && S === S) {
              for (var W = y.length; W--; )
                if (y[W] === S)
                  continue e;
              t && y.push(S), g.push(O);
            } else
              u(y, S, n) || (y !== g && y.push(S), g.push(O));
          }
        return g;
      }
      function nu(e, t) {
        return t = xn(t, e), e = Is(e, t), e == null || delete e[an(Rt(t))];
      }
      function ts(e, t, n, l) {
        return Dl(e, t, n(Vn(e, t)), l);
      }
      function er(e, t, n, l) {
        for (var u = e.length, a = l ? u : -1; (l ? a-- : ++a < u) && t(e[a], a, e); )
          ;
        return n ? Ft(e, l ? 0 : a, l ? a + 1 : u) : Ft(e, l ? a + 1 : 0, l ? u : a);
      }
      function ns(e, t) {
        var n = e;
        return n instanceof he && (n = n.value()), Er(t, function(l, u) {
          return u.func.apply(u.thisArg, Yn([l], u.args));
        }, n);
      }
      function lu(e, t, n) {
        var l = e.length;
        if (l < 2)
          return l ? En(e[0]) : [];
        for (var u = -1, a = A(l); ++u < l; )
          for (var M = e[u], g = -1; ++g < l; )
            g != u && (a[u] = jl(a[u] || M, e[g], t, n));
        return En(ft(a, 1), t, n);
      }
      function ls(e, t, n) {
        for (var l = -1, u = e.length, a = t.length, M = {}; ++l < u; ) {
          var g = l < a ? t[l] : r;
          n(M, e[l], g);
        }
        return M;
      }
      function ru(e) {
        return tt(e) ? e : [];
      }
      function uu(e) {
        return typeof e == "function" ? e : Lt;
      }
      function xn(e, t) {
        return fe(e) ? e : gu(e, t) ? [e] : xs(xe(e));
      }
      var df = De;
      function Cn(e, t, n) {
        var l = e.length;
        return n = n === r ? l : n, !t && n >= l ? e : Ft(e, t, n);
      }
      var rs = Xc || function(e) {
        return Mt.clearTimeout(e);
      };
      function us(e, t) {
        if (t)
          return e.slice();
        var n = e.length, l = vo ? vo(n) : new e.constructor(n);
        return e.copy(l), l;
      }
      function ou(e) {
        var t = new e.constructor(e.byteLength);
        return new Pl(t).set(new Pl(e)), t;
      }
      function gf(e, t) {
        var n = t ? ou(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      function Nf(e) {
        var t = new e.constructor(e.source, Qu.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function pf(e) {
        return Nl ? Qe(Nl.call(e)) : {};
      }
      function os(e, t) {
        var n = t ? ou(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      function ss(e, t) {
        if (e !== t) {
          var n = e !== r, l = e === null, u = e === e, a = Ct(e), M = t !== r, g = t === null, y = t === t, b = Ct(t);
          if (!g && !b && !a && e > t || a && M && y && !g && !b || l && M && y || !n && y || !u)
            return 1;
          if (!l && !a && !b && e < t || b && n && u && !l && !a || g && n && u || !M && u || !y)
            return -1;
        }
        return 0;
      }
      function jf(e, t, n) {
        for (var l = -1, u = e.criteria, a = t.criteria, M = u.length, g = n.length; ++l < M; ) {
          var y = ss(u[l], a[l]);
          if (y) {
            if (l >= g)
              return y;
            var b = n[l];
            return y * (b == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function is(e, t, n, l) {
        for (var u = -1, a = e.length, M = n.length, g = -1, y = t.length, b = st(a - M, 0), O = A(y + b), S = !l; ++g < y; )
          O[g] = t[g];
        for (; ++u < M; )
          (S || u < a) && (O[n[u]] = e[u]);
        for (; b--; )
          O[g++] = e[u++];
        return O;
      }
      function as(e, t, n, l) {
        for (var u = -1, a = e.length, M = -1, g = n.length, y = -1, b = t.length, O = st(a - g, 0), S = A(O + b), W = !l; ++u < O; )
          S[u] = e[u];
        for (var $ = u; ++y < b; )
          S[$ + y] = t[y];
        for (; ++M < g; )
          (W || u < a) && (S[$ + n[M]] = e[u++]);
        return S;
      }
      function vt(e, t) {
        var n = -1, l = e.length;
        for (t || (t = A(l)); ++n < l; )
          t[n] = e[n];
        return t;
      }
      function sn(e, t, n, l) {
        var u = !n;
        n || (n = {});
        for (var a = -1, M = t.length; ++a < M; ) {
          var g = t[a], y = l ? l(n[g], e[g], g, n, e) : r;
          y === r && (y = e[g]), u ? Nn(n, g, y) : pl(n, g, y);
        }
        return n;
      }
      function zf(e, t) {
        return sn(e, du(e), t);
      }
      function yf(e, t) {
        return sn(e, ms(e), t);
      }
      function tr(e, t) {
        return function(n, l) {
          var u = fe(n) ? hc : PM, a = t ? t() : {};
          return u(n, e, re(l, 2), a);
        };
      }
      function ll(e) {
        return De(function(t, n) {
          var l = -1, u = n.length, a = u > 1 ? n[u - 1] : r, M = u > 2 ? n[2] : r;
          for (a = e.length > 3 && typeof a == "function" ? (u--, a) : r, M && ht(n[0], n[1], M) && (a = u < 3 ? r : a, u = 1), t = Qe(t); ++l < u; ) {
            var g = n[l];
            g && e(t, g, l, a);
          }
          return t;
        });
      }
      function cs(e, t) {
        return function(n, l) {
          if (n == null)
            return n;
          if (!Yt(n))
            return e(n, l);
          for (var u = n.length, a = t ? u : -1, M = Qe(n); (t ? a-- : ++a < u) && l(M[a], a, M) !== !1; )
            ;
          return n;
        };
      }
      function Ms(e) {
        return function(t, n, l) {
          for (var u = -1, a = Qe(t), M = l(t), g = M.length; g--; ) {
            var y = M[e ? g : ++u];
            if (n(a[y], y, a) === !1)
              break;
          }
          return t;
        };
      }
      function Df(e, t, n) {
        var l = t & k, u = _l(e);
        function a() {
          var M = this && this !== Mt && this instanceof a ? u : e;
          return M.apply(l ? n : this, arguments);
        }
        return a;
      }
      function fs(e) {
        return function(t) {
          t = xe(t);
          var n = Jn(t) ? Jt(t) : r, l = n ? n[0] : t.charAt(0), u = n ? Cn(n, 1).join("") : t.slice(1);
          return l[e]() + u;
        };
      }
      function rl(e) {
        return function(t) {
          return Er(ci(ai(t).replace(ac, "")), e, "");
        };
      }
      function _l(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = nl(e.prototype), l = e.apply(n, t);
          return Je(l) ? l : n;
        };
      }
      function _f(e, t, n) {
        var l = _l(e);
        function u() {
          for (var a = arguments.length, M = A(a), g = a, y = ul(u); g--; )
            M[g] = arguments[g];
          var b = a < 3 && M[0] !== y && M[a - 1] !== y ? [] : In(M, y);
          if (a -= b.length, a < n)
            return js(
              e,
              t,
              nr,
              u.placeholder,
              r,
              M,
              b,
              r,
              r,
              n - a
            );
          var O = this && this !== Mt && this instanceof u ? l : e;
          return Tt(O, this, M);
        }
        return u;
      }
      function ds(e) {
        return function(t, n, l) {
          var u = Qe(t);
          if (!Yt(t)) {
            var a = re(n, 3);
            t = at(t), n = function(g) {
              return a(u[g], g, u);
            };
          }
          var M = e(t, n, l);
          return M > -1 ? u[a ? t[M] : M] : r;
        };
      }
      function gs(e) {
        return jn(function(t) {
          var n = t.length, l = n, u = Qt.prototype.thru;
          for (e && t.reverse(); l--; ) {
            var a = t[l];
            if (typeof a != "function")
              throw new Pt(m);
            if (u && !M && or(a) == "wrapper")
              var M = new Qt([], !0);
          }
          for (l = M ? l : n; ++l < n; ) {
            a = t[l];
            var g = or(a), y = g == "wrapper" ? Mu(a) : r;
            y && Nu(y[0]) && y[1] == (F | de | Y | ge) && !y[4].length && y[9] == 1 ? M = M[or(y[0])].apply(M, y[3]) : M = a.length == 1 && Nu(a) ? M[g]() : M.thru(a);
          }
          return function() {
            var b = arguments, O = b[0];
            if (M && b.length == 1 && fe(O))
              return M.plant(O).value();
            for (var S = 0, W = n ? t[S].apply(this, b) : O; ++S < n; )
              W = t[S].call(this, W);
            return W;
          };
        });
      }
      function nr(e, t, n, l, u, a, M, g, y, b) {
        var O = t & F, S = t & k, W = t & K, $ = t & (de | pe), ue = t & Ue, je = W ? r : _l(e);
        function oe() {
          for (var me = arguments.length, Ae = A(me), bt = me; bt--; )
            Ae[bt] = arguments[bt];
          if ($)
            var wt = ul(oe), Ot = xc(Ae, wt);
          if (l && (Ae = is(Ae, l, u, $)), a && (Ae = as(Ae, a, M, $)), me -= Ot, $ && me < b) {
            var nt = In(Ae, wt);
            return js(
              e,
              t,
              nr,
              oe.placeholder,
              n,
              Ae,
              nt,
              g,
              y,
              b - me
            );
          }
          var Xt = S ? n : this, _n = W ? Xt[e] : e;
          return me = Ae.length, g ? Ae = Qf(Ae, g) : ue && me > 1 && Ae.reverse(), O && y < me && (Ae.length = y), this && this !== Mt && this instanceof oe && (_n = je || _l(_n)), _n.apply(Xt, Ae);
        }
        return oe;
      }
      function Ns(e, t) {
        return function(n, l) {
          return HM(n, e, t(l), {});
        };
      }
      function lr(e, t) {
        return function(n, l) {
          var u;
          if (n === r && l === r)
            return t;
          if (n !== r && (u = n), l !== r) {
            if (u === r)
              return l;
            typeof n == "string" || typeof l == "string" ? (n = xt(n), l = xt(l)) : (n = es(n), l = es(l)), u = e(n, l);
          }
          return u;
        };
      }
      function su(e) {
        return jn(function(t) {
          return t = Ze(t, Et(re())), De(function(n) {
            var l = this;
            return e(t, function(u) {
              return Tt(u, l, n);
            });
          });
        });
      }
      function rr(e, t) {
        t = t === r ? " " : xt(t);
        var n = t.length;
        if (n < 2)
          return n ? eu(t, e) : t;
        var l = eu(t, Rl(e / $n(t)));
        return Jn(t) ? Cn(Jt(l), 0, e).join("") : l.slice(0, e);
      }
      function mf(e, t, n, l) {
        var u = t & k, a = _l(e);
        function M() {
          for (var g = -1, y = arguments.length, b = -1, O = l.length, S = A(O + y), W = this && this !== Mt && this instanceof M ? a : e; ++b < O; )
            S[b] = l[b];
          for (; y--; )
            S[b++] = arguments[++g];
          return Tt(W, u ? n : this, S);
        }
        return M;
      }
      function ps(e) {
        return function(t, n, l) {
          return l && typeof l != "number" && ht(t, n, l) && (n = l = r), t = Dn(t), n === r ? (n = t, t = 0) : n = Dn(n), l = l === r ? t < n ? 1 : -1 : Dn(l), of(t, n, l, e);
        };
      }
      function ur(e) {
        return function(t, n) {
          return typeof t == "string" && typeof n == "string" || (t = Wt(t), n = Wt(n)), e(t, n);
        };
      }
      function js(e, t, n, l, u, a, M, g, y, b) {
        var O = t & de, S = O ? M : r, W = O ? r : M, $ = O ? a : r, ue = O ? r : a;
        t |= O ? Y : V, t &= ~(O ? V : Y), t & X || (t &= ~(k | K));
        var je = [
          e,
          t,
          u,
          $,
          S,
          ue,
          W,
          g,
          y,
          b
        ], oe = n.apply(r, je);
        return Nu(e) && Ls(oe, je), oe.placeholder = l, Ts(oe, e, t);
      }
      function iu(e) {
        var t = ot[e];
        return function(n, l) {
          if (n = Wt(n), l = l == null ? 0 : pt(Ne(l), 292), l && To(n)) {
            var u = (xe(n) + "e").split("e"), a = t(u[0] + "e" + (+u[1] + l));
            return u = (xe(a) + "e").split("e"), +(u[0] + "e" + (+u[1] - l));
          }
          return t(n);
        };
      }
      var hf = el && 1 / bl(new el([, -0]))[1] == v ? function(e) {
        return new el(e);
      } : Tu;
      function zs(e) {
        return function(t) {
          var n = jt(t);
          return n == gt ? Br(t) : n == Ve ? Uc(t) : Ec(t, e(t));
        };
      }
      function pn(e, t, n, l, u, a, M, g) {
        var y = t & K;
        if (!y && typeof e != "function")
          throw new Pt(m);
        var b = l ? l.length : 0;
        if (b || (t &= ~(Y | V), l = u = r), M = M === r ? M : st(Ne(M), 0), g = g === r ? g : Ne(g), b -= u ? u.length : 0, t & V) {
          var O = l, S = u;
          l = u = r;
        }
        var W = y ? r : Mu(e), $ = [
          e,
          t,
          n,
          l,
          u,
          O,
          S,
          a,
          M,
          g
        ];
        if (W && Bf($, W), e = $[0], t = $[1], n = $[2], l = $[3], u = $[4], g = $[9] = $[9] === r ? y ? 0 : e.length : st($[9] - b, 0), !g && t & (de | pe) && (t &= ~(de | pe)), !t || t == k)
          var ue = Df(e, t, n);
        else
          t == de || t == pe ? ue = _f(e, t, g) : (t == Y || t == (k | Y)) && !u.length ? ue = mf(e, t, n, l) : ue = nr.apply(r, $);
        var je = W ? qo : Ls;
        return Ts(je(ue, $), e, t);
      }
      function ys(e, t, n, l) {
        return e === r || qt(e, Xn[n]) && !Se.call(l, n) ? t : e;
      }
      function Ds(e, t, n, l, u, a) {
        return Je(e) && Je(t) && (a.set(t, e), ql(e, t, r, Ds, a), a.delete(t)), e;
      }
      function wf(e) {
        return wl(e) ? r : e;
      }
      function _s(e, t, n, l, u, a) {
        var M = n & E, g = e.length, y = t.length;
        if (g != y && !(M && y > g))
          return !1;
        var b = a.get(e), O = a.get(t);
        if (b && O)
          return b == t && O == e;
        var S = -1, W = !0, $ = n & U ? new Pn() : r;
        for (a.set(e, t), a.set(t, e); ++S < g; ) {
          var ue = e[S], je = t[S];
          if (l)
            var oe = M ? l(je, ue, S, t, e, a) : l(ue, je, S, e, t, a);
          if (oe !== r) {
            if (oe)
              continue;
            W = !1;
            break;
          }
          if ($) {
            if (!xr(t, function(me, Ae) {
              if (!cl($, Ae) && (ue === me || u(ue, me, n, l, a)))
                return $.push(Ae);
            })) {
              W = !1;
              break;
            }
          } else if (!(ue === je || u(ue, je, n, l, a))) {
            W = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), W;
      }
      function Af(e, t, n, l, u, a, M) {
        switch (n) {
          case ye:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case rn:
            return !(e.byteLength != t.byteLength || !a(new Pl(e), new Pl(t)));
          case rt:
          case Zt:
          case ln:
            return qt(+e, +t);
          case Ht:
            return e.name == t.name && e.message == t.message;
          case ut:
          case ct:
            return e == t + "";
          case gt:
            var g = Br;
          case Ve:
            var y = l & E;
            if (g || (g = bl), e.size != t.size && !y)
              return !1;
            var b = M.get(e);
            if (b)
              return b == t;
            l |= U, M.set(e, t);
            var O = _s(g(e), g(t), l, u, a, M);
            return M.delete(e), O;
          case kt:
            if (Nl)
              return Nl.call(e) == Nl.call(t);
        }
        return !1;
      }
      function vf(e, t, n, l, u, a) {
        var M = n & E, g = au(e), y = g.length, b = au(t), O = b.length;
        if (y != O && !M)
          return !1;
        for (var S = y; S--; ) {
          var W = g[S];
          if (!(M ? W in t : Se.call(t, W)))
            return !1;
        }
        var $ = a.get(e), ue = a.get(t);
        if ($ && ue)
          return $ == t && ue == e;
        var je = !0;
        a.set(e, t), a.set(t, e);
        for (var oe = M; ++S < y; ) {
          W = g[S];
          var me = e[W], Ae = t[W];
          if (l)
            var bt = M ? l(Ae, me, W, t, e, a) : l(me, Ae, W, e, t, a);
          if (!(bt === r ? me === Ae || u(me, Ae, n, l, a) : bt)) {
            je = !1;
            break;
          }
          oe || (oe = W == "constructor");
        }
        if (je && !oe) {
          var wt = e.constructor, Ot = t.constructor;
          wt != Ot && "constructor" in e && "constructor" in t && !(typeof wt == "function" && wt instanceof wt && typeof Ot == "function" && Ot instanceof Ot) && (je = !1);
        }
        return a.delete(e), a.delete(t), je;
      }
      function jn(e) {
        return ju(Ys(e, r, Ss), e + "");
      }
      function au(e) {
        return Qo(e, at, du);
      }
      function cu(e) {
        return Qo(e, It, ms);
      }
      var Mu = Gl ? function(e) {
        return Gl.get(e);
      } : Tu;
      function or(e) {
        for (var t = e.name + "", n = tl[t], l = Se.call(tl, t) ? n.length : 0; l--; ) {
          var u = n[l], a = u.func;
          if (a == null || a == e)
            return u.name;
        }
        return t;
      }
      function ul(e) {
        var t = Se.call(i, "placeholder") ? i : e;
        return t.placeholder;
      }
      function re() {
        var e = i.iteratee || Iu;
        return e = e === Iu ? Ro : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function sr(e, t) {
        var n = e.__data__;
        return bf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
      }
      function fu(e) {
        for (var t = at(e), n = t.length; n--; ) {
          var l = t[n], u = e[l];
          t[n] = [l, u, As(u)];
        }
        return t;
      }
      function Fn(e, t) {
        var n = Sc(e, t);
        return Fo(n) ? n : r;
      }
      function Yf(e) {
        var t = Se.call(e, Bn), n = e[Bn];
        try {
          e[Bn] = r;
          var l = !0;
        } catch {
        }
        var u = Bl.call(e);
        return l && (t ? e[Bn] = n : delete e[Bn]), u;
      }
      var du = Pr ? function(e) {
        return e == null ? [] : (e = Qe(e), vn(Pr(e), function(t) {
          return Io.call(e, t);
        }));
      } : Eu, ms = Pr ? function(e) {
        for (var t = []; e; )
          Yn(t, du(e)), e = Ql(e);
        return t;
      } : Eu, jt = mt;
      (Qr && jt(new Qr(new ArrayBuffer(1))) != ye || fl && jt(new fl()) != gt || Vr && jt(Vr.resolve()) != le || el && jt(new el()) != Ve || dl && jt(new dl()) != Kt) && (jt = function(e) {
        var t = mt(e), n = t == Z ? e.constructor : r, l = n ? Rn(n) : "";
        if (l)
          switch (l) {
            case iM:
              return ye;
            case aM:
              return gt;
            case cM:
              return le;
            case MM:
              return Ve;
            case fM:
              return Kt;
          }
        return t;
      });
      function If(e, t, n) {
        for (var l = -1, u = n.length; ++l < u; ) {
          var a = n[l], M = a.size;
          switch (a.type) {
            case "drop":
              e += M;
              break;
            case "dropRight":
              t -= M;
              break;
            case "take":
              t = pt(t, e + M);
              break;
            case "takeRight":
              e = st(e, t - M);
              break;
          }
        }
        return { start: e, end: t };
      }
      function Lf(e) {
        var t = e.match(ba);
        return t ? t[1].split(Oa) : [];
      }
      function hs(e, t, n) {
        t = xn(t, e);
        for (var l = -1, u = t.length, a = !1; ++l < u; ) {
          var M = an(t[l]);
          if (!(a = e != null && n(e, M)))
            break;
          e = e[M];
        }
        return a || ++l != u ? a : (u = e == null ? 0 : e.length, !!u && gr(u) && zn(M, u) && (fe(e) || Wn(e)));
      }
      function Tf(e) {
        var t = e.length, n = new e.constructor(t);
        return t && typeof e[0] == "string" && Se.call(e, "index") && (n.index = e.index, n.input = e.input), n;
      }
      function ws(e) {
        return typeof e.constructor == "function" && !ml(e) ? nl(Ql(e)) : {};
      }
      function Ef(e, t, n) {
        var l = e.constructor;
        switch (t) {
          case rn:
            return ou(e);
          case rt:
          case Zt:
            return new l(+e);
          case ye:
            return gf(e, n);
          case et:
          case Nt:
          case Pe:
          case un:
          case An:
          case al:
          case zr:
          case yr:
          case Dr:
            return os(e, n);
          case gt:
            return new l();
          case ln:
          case ct:
            return new l(e);
          case ut:
            return Nf(e);
          case Ve:
            return new l();
          case kt:
            return pf(e);
        }
      }
      function xf(e, t) {
        var n = t.length;
        if (!n)
          return e;
        var l = n - 1;
        return t[l] = (n > 1 ? "& " : "") + t[l], t = t.join(n > 2 ? ", " : " "), e.replace(Ca, `{
/* [wrapped with ` + t + `] */
`);
      }
      function Cf(e) {
        return fe(e) || Wn(e) || !!(Lo && e && e[Lo]);
      }
      function zn(e, t) {
        var n = typeof e;
        return t = t ?? T, !!t && (n == "number" || n != "symbol" && Ra.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function ht(e, t, n) {
        if (!Je(n))
          return !1;
        var l = typeof t;
        return (l == "number" ? Yt(n) && zn(t, n.length) : l == "string" && t in n) ? qt(n[t], e) : !1;
      }
      function gu(e, t) {
        if (fe(e))
          return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || Ct(e) ? !0 : La.test(e) || !Ia.test(e) || t != null && e in Qe(t);
      }
      function bf(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Nu(e) {
        var t = or(e), n = i[t];
        if (typeof n != "function" || !(t in he.prototype))
          return !1;
        if (e === n)
          return !0;
        var l = Mu(n);
        return !!l && e === l[0];
      }
      function Of(e) {
        return !!Ao && Ao in e;
      }
      var Sf = Sl ? yn : xu;
      function ml(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || Xn;
        return e === n;
      }
      function As(e) {
        return e === e && !Je(e);
      }
      function vs(e, t) {
        return function(n) {
          return n == null ? !1 : n[e] === t && (t !== r || e in Qe(n));
        };
      }
      function kf(e) {
        var t = fr(e, function(l) {
          return n.size === c && n.clear(), l;
        }), n = t.cache;
        return t;
      }
      function Bf(e, t) {
        var n = e[1], l = t[1], u = n | l, a = u < (k | K | F), M = l == F && n == de || l == F && n == ge && e[7].length <= t[8] || l == (F | ge) && t[7].length <= t[8] && n == de;
        if (!(a || M))
          return e;
        l & k && (e[2] = t[2], u |= n & k ? 0 : X);
        var g = t[3];
        if (g) {
          var y = e[3];
          e[3] = y ? is(y, g, t[4]) : g, e[4] = y ? In(e[3], z) : t[4];
        }
        return g = t[5], g && (y = e[5], e[5] = y ? as(y, g, t[6]) : g, e[6] = y ? In(e[5], z) : t[6]), g = t[7], g && (e[7] = g), l & F && (e[8] = e[8] == null ? t[8] : pt(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = u, e;
      }
      function Uf(e) {
        var t = [];
        if (e != null)
          for (var n in Qe(e))
            t.push(n);
        return t;
      }
      function Pf(e) {
        return Bl.call(e);
      }
      function Ys(e, t, n) {
        return t = st(t === r ? e.length - 1 : t, 0), function() {
          for (var l = arguments, u = -1, a = st(l.length - t, 0), M = A(a); ++u < a; )
            M[u] = l[t + u];
          u = -1;
          for (var g = A(t + 1); ++u < t; )
            g[u] = l[u];
          return g[t] = n(M), Tt(e, this, g);
        };
      }
      function Is(e, t) {
        return t.length < 2 ? e : Vn(e, Ft(t, 0, -1));
      }
      function Qf(e, t) {
        for (var n = e.length, l = pt(t.length, n), u = vt(e); l--; ) {
          var a = t[l];
          e[l] = zn(a, n) ? u[a] : r;
        }
        return e;
      }
      function pu(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var Ls = Es(qo), hl = tM || function(e, t) {
        return Mt.setTimeout(e, t);
      }, ju = Es(cf);
      function Ts(e, t, n) {
        var l = t + "";
        return ju(e, xf(l, Vf(Lf(l), n)));
      }
      function Es(e) {
        var t = 0, n = 0;
        return function() {
          var l = uM(), u = tn - (l - n);
          if (n = l, u > 0) {
            if (++t >= At)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function ir(e, t) {
        var n = -1, l = e.length, u = l - 1;
        for (t = t === r ? l : t; ++n < t; ) {
          var a = Xr(n, u), M = e[a];
          e[a] = e[n], e[n] = M;
        }
        return e.length = t, e;
      }
      var xs = kf(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ta, function(n, l, u, a) {
          t.push(u ? a.replace(Ba, "$1") : l || n);
        }), t;
      });
      function an(e) {
        if (typeof e == "string" || Ct(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -v ? "-0" : t;
      }
      function Rn(e) {
        if (e != null) {
          try {
            return kl.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Vf(e, t) {
        return Ut(te, function(n) {
          var l = "_." + n[0];
          t & n[1] && !xl(e, l) && e.push(l);
        }), e.sort();
      }
      function Cs(e) {
        if (e instanceof he)
          return e.clone();
        var t = new Qt(e.__wrapped__, e.__chain__);
        return t.__actions__ = vt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function Ff(e, t, n) {
        (n ? ht(e, t, n) : t === r) ? t = 1 : t = st(Ne(t), 0);
        var l = e == null ? 0 : e.length;
        if (!l || t < 1)
          return [];
        for (var u = 0, a = 0, M = A(Rl(l / t)); u < l; )
          M[a++] = Ft(e, u, u += t);
        return M;
      }
      function Rf(e) {
        for (var t = -1, n = e == null ? 0 : e.length, l = 0, u = []; ++t < n; ) {
          var a = e[t];
          a && (u[l++] = a);
        }
        return u;
      }
      function Wf() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = A(e - 1), n = arguments[0], l = e; l--; )
          t[l - 1] = arguments[l];
        return Yn(fe(n) ? vt(n) : [n], ft(t, 1));
      }
      var Gf = De(function(e, t) {
        return tt(e) ? jl(e, ft(t, 1, tt, !0)) : [];
      }), Zf = De(function(e, t) {
        var n = Rt(t);
        return tt(n) && (n = r), tt(e) ? jl(e, ft(t, 1, tt, !0), re(n, 2)) : [];
      }), Hf = De(function(e, t) {
        var n = Rt(t);
        return tt(n) && (n = r), tt(e) ? jl(e, ft(t, 1, tt, !0), r, n) : [];
      });
      function Kf(e, t, n) {
        var l = e == null ? 0 : e.length;
        return l ? (t = n || t === r ? 1 : Ne(t), Ft(e, t < 0 ? 0 : t, l)) : [];
      }
      function Jf(e, t, n) {
        var l = e == null ? 0 : e.length;
        return l ? (t = n || t === r ? 1 : Ne(t), t = l - t, Ft(e, 0, t < 0 ? 0 : t)) : [];
      }
      function $f(e, t) {
        return e && e.length ? er(e, re(t, 3), !0, !0) : [];
      }
      function qf(e, t) {
        return e && e.length ? er(e, re(t, 3), !0) : [];
      }
      function Xf(e, t, n, l) {
        var u = e == null ? 0 : e.length;
        return u ? (n && typeof n != "number" && ht(e, t, n) && (n = 0, l = u), RM(e, t, n, l)) : [];
      }
      function bs(e, t, n) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var u = n == null ? 0 : Ne(n);
        return u < 0 && (u = st(l + u, 0)), Cl(e, re(t, 3), u);
      }
      function Os(e, t, n) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var u = l - 1;
        return n !== r && (u = Ne(n), u = n < 0 ? st(l + u, 0) : pt(u, l - 1)), Cl(e, re(t, 3), u, !0);
      }
      function Ss(e) {
        var t = e == null ? 0 : e.length;
        return t ? ft(e, 1) : [];
      }
      function ed(e) {
        var t = e == null ? 0 : e.length;
        return t ? ft(e, v) : [];
      }
      function td(e, t) {
        var n = e == null ? 0 : e.length;
        return n ? (t = t === r ? 1 : Ne(t), ft(e, t)) : [];
      }
      function nd(e) {
        for (var t = -1, n = e == null ? 0 : e.length, l = {}; ++t < n; ) {
          var u = e[t];
          l[u[0]] = u[1];
        }
        return l;
      }
      function ks(e) {
        return e && e.length ? e[0] : r;
      }
      function ld(e, t, n) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var u = n == null ? 0 : Ne(n);
        return u < 0 && (u = st(l + u, 0)), Kn(e, t, u);
      }
      function rd(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ft(e, 0, -1) : [];
      }
      var ud = De(function(e) {
        var t = Ze(e, ru);
        return t.length && t[0] === e[0] ? Hr(t) : [];
      }), od = De(function(e) {
        var t = Rt(e), n = Ze(e, ru);
        return t === Rt(n) ? t = r : n.pop(), n.length && n[0] === e[0] ? Hr(n, re(t, 2)) : [];
      }), sd = De(function(e) {
        var t = Rt(e), n = Ze(e, ru);
        return t = typeof t == "function" ? t : r, t && n.pop(), n.length && n[0] === e[0] ? Hr(n, r, t) : [];
      });
      function id(e, t) {
        return e == null ? "" : lM.call(e, t);
      }
      function Rt(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function ad(e, t, n) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var u = l;
        return n !== r && (u = Ne(n), u = u < 0 ? st(l + u, 0) : pt(u, l - 1)), t === t ? Qc(e, t, u) : Cl(e, jo, u, !0);
      }
      function cd(e, t) {
        return e && e.length ? Ho(e, Ne(t)) : r;
      }
      var Md = De(Bs);
      function Bs(e, t) {
        return e && e.length && t && t.length ? qr(e, t) : e;
      }
      function fd(e, t, n) {
        return e && e.length && t && t.length ? qr(e, t, re(n, 2)) : e;
      }
      function dd(e, t, n) {
        return e && e.length && t && t.length ? qr(e, t, r, n) : e;
      }
      var gd = jn(function(e, t) {
        var n = e == null ? 0 : e.length, l = Rr(e, t);
        return $o(e, Ze(t, function(u) {
          return zn(u, n) ? +u : u;
        }).sort(ss)), l;
      });
      function Nd(e, t) {
        var n = [];
        if (!(e && e.length))
          return n;
        var l = -1, u = [], a = e.length;
        for (t = re(t, 3); ++l < a; ) {
          var M = e[l];
          t(M, l, e) && (n.push(M), u.push(l));
        }
        return $o(e, u), n;
      }
      function zu(e) {
        return e == null ? e : sM.call(e);
      }
      function pd(e, t, n) {
        var l = e == null ? 0 : e.length;
        return l ? (n && typeof n != "number" && ht(e, t, n) ? (t = 0, n = l) : (t = t == null ? 0 : Ne(t), n = n === r ? l : Ne(n)), Ft(e, t, n)) : [];
      }
      function jd(e, t) {
        return Xl(e, t);
      }
      function zd(e, t, n) {
        return tu(e, t, re(n, 2));
      }
      function yd(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var l = Xl(e, t);
          if (l < n && qt(e[l], t))
            return l;
        }
        return -1;
      }
      function Dd(e, t) {
        return Xl(e, t, !0);
      }
      function _d(e, t, n) {
        return tu(e, t, re(n, 2), !0);
      }
      function md(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var l = Xl(e, t, !0) - 1;
          if (qt(e[l], t))
            return l;
        }
        return -1;
      }
      function hd(e) {
        return e && e.length ? Xo(e) : [];
      }
      function wd(e, t) {
        return e && e.length ? Xo(e, re(t, 2)) : [];
      }
      function Ad(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ft(e, 1, t) : [];
      }
      function vd(e, t, n) {
        return e && e.length ? (t = n || t === r ? 1 : Ne(t), Ft(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Yd(e, t, n) {
        var l = e == null ? 0 : e.length;
        return l ? (t = n || t === r ? 1 : Ne(t), t = l - t, Ft(e, t < 0 ? 0 : t, l)) : [];
      }
      function Id(e, t) {
        return e && e.length ? er(e, re(t, 3), !1, !0) : [];
      }
      function Ld(e, t) {
        return e && e.length ? er(e, re(t, 3)) : [];
      }
      var Td = De(function(e) {
        return En(ft(e, 1, tt, !0));
      }), Ed = De(function(e) {
        var t = Rt(e);
        return tt(t) && (t = r), En(ft(e, 1, tt, !0), re(t, 2));
      }), xd = De(function(e) {
        var t = Rt(e);
        return t = typeof t == "function" ? t : r, En(ft(e, 1, tt, !0), r, t);
      });
      function Cd(e) {
        return e && e.length ? En(e) : [];
      }
      function bd(e, t) {
        return e && e.length ? En(e, re(t, 2)) : [];
      }
      function Od(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? En(e, r, t) : [];
      }
      function yu(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = vn(e, function(n) {
          if (tt(n))
            return t = st(n.length, t), !0;
        }), Sr(t, function(n) {
          return Ze(e, Cr(n));
        });
      }
      function Us(e, t) {
        if (!(e && e.length))
          return [];
        var n = yu(e);
        return t == null ? n : Ze(n, function(l) {
          return Tt(t, r, l);
        });
      }
      var Sd = De(function(e, t) {
        return tt(e) ? jl(e, t) : [];
      }), kd = De(function(e) {
        return lu(vn(e, tt));
      }), Bd = De(function(e) {
        var t = Rt(e);
        return tt(t) && (t = r), lu(vn(e, tt), re(t, 2));
      }), Ud = De(function(e) {
        var t = Rt(e);
        return t = typeof t == "function" ? t : r, lu(vn(e, tt), r, t);
      }), Pd = De(yu);
      function Qd(e, t) {
        return ls(e || [], t || [], pl);
      }
      function Vd(e, t) {
        return ls(e || [], t || [], Dl);
      }
      var Fd = De(function(e) {
        var t = e.length, n = t > 1 ? e[t - 1] : r;
        return n = typeof n == "function" ? (e.pop(), n) : r, Us(e, n);
      });
      function Ps(e) {
        var t = i(e);
        return t.__chain__ = !0, t;
      }
      function Rd(e, t) {
        return t(e), e;
      }
      function ar(e, t) {
        return t(e);
      }
      var Wd = jn(function(e) {
        var t = e.length, n = t ? e[0] : 0, l = this.__wrapped__, u = function(a) {
          return Rr(a, e);
        };
        return t > 1 || this.__actions__.length || !(l instanceof he) || !zn(n) ? this.thru(u) : (l = l.slice(n, +n + (t ? 1 : 0)), l.__actions__.push({
          func: ar,
          args: [u],
          thisArg: r
        }), new Qt(l, this.__chain__).thru(function(a) {
          return t && !a.length && a.push(r), a;
        }));
      });
      function Gd() {
        return Ps(this);
      }
      function Zd() {
        return new Qt(this.value(), this.__chain__);
      }
      function Hd() {
        this.__values__ === r && (this.__values__ = ei(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function Kd() {
        return this;
      }
      function Jd(e) {
        for (var t, n = this; n instanceof Hl; ) {
          var l = Cs(n);
          l.__index__ = 0, l.__values__ = r, t ? u.__wrapped__ = l : t = l;
          var u = l;
          n = n.__wrapped__;
        }
        return u.__wrapped__ = e, t;
      }
      function $d() {
        var e = this.__wrapped__;
        if (e instanceof he) {
          var t = e;
          return this.__actions__.length && (t = new he(this)), t = t.reverse(), t.__actions__.push({
            func: ar,
            args: [zu],
            thisArg: r
          }), new Qt(t, this.__chain__);
        }
        return this.thru(zu);
      }
      function qd() {
        return ns(this.__wrapped__, this.__actions__);
      }
      var Xd = tr(function(e, t, n) {
        Se.call(e, n) ? ++e[n] : Nn(e, n, 1);
      });
      function eg(e, t, n) {
        var l = fe(e) ? No : FM;
        return n && ht(e, t, n) && (t = r), l(e, re(t, 3));
      }
      function tg(e, t) {
        var n = fe(e) ? vn : Uo;
        return n(e, re(t, 3));
      }
      var ng = ds(bs), lg = ds(Os);
      function rg(e, t) {
        return ft(cr(e, t), 1);
      }
      function ug(e, t) {
        return ft(cr(e, t), v);
      }
      function og(e, t, n) {
        return n = n === r ? 1 : Ne(n), ft(cr(e, t), n);
      }
      function Qs(e, t) {
        var n = fe(e) ? Ut : Tn;
        return n(e, re(t, 3));
      }
      function Vs(e, t) {
        var n = fe(e) ? wc : Bo;
        return n(e, re(t, 3));
      }
      var sg = tr(function(e, t, n) {
        Se.call(e, n) ? e[n].push(t) : Nn(e, n, [t]);
      });
      function ig(e, t, n, l) {
        e = Yt(e) ? e : sl(e), n = n && !l ? Ne(n) : 0;
        var u = e.length;
        return n < 0 && (n = st(u + n, 0)), Nr(e) ? n <= u && e.indexOf(t, n) > -1 : !!u && Kn(e, t, n) > -1;
      }
      var ag = De(function(e, t, n) {
        var l = -1, u = typeof t == "function", a = Yt(e) ? A(e.length) : [];
        return Tn(e, function(M) {
          a[++l] = u ? Tt(t, M, n) : zl(M, t, n);
        }), a;
      }), cg = tr(function(e, t, n) {
        Nn(e, n, t);
      });
      function cr(e, t) {
        var n = fe(e) ? Ze : Wo;
        return n(e, re(t, 3));
      }
      function Mg(e, t, n, l) {
        return e == null ? [] : (fe(t) || (t = t == null ? [] : [t]), n = l ? r : n, fe(n) || (n = n == null ? [] : [n]), Ko(e, t, n));
      }
      var fg = tr(function(e, t, n) {
        e[n ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function dg(e, t, n) {
        var l = fe(e) ? Er : yo, u = arguments.length < 3;
        return l(e, re(t, 4), n, u, Tn);
      }
      function gg(e, t, n) {
        var l = fe(e) ? Ac : yo, u = arguments.length < 3;
        return l(e, re(t, 4), n, u, Bo);
      }
      function Ng(e, t) {
        var n = fe(e) ? vn : Uo;
        return n(e, dr(re(t, 3)));
      }
      function pg(e) {
        var t = fe(e) ? bo : sf;
        return t(e);
      }
      function jg(e, t, n) {
        (n ? ht(e, t, n) : t === r) ? t = 1 : t = Ne(t);
        var l = fe(e) ? BM : af;
        return l(e, t);
      }
      function zg(e) {
        var t = fe(e) ? UM : Mf;
        return t(e);
      }
      function yg(e) {
        if (e == null)
          return 0;
        if (Yt(e))
          return Nr(e) ? $n(e) : e.length;
        var t = jt(e);
        return t == gt || t == Ve ? e.size : Jr(e).length;
      }
      function Dg(e, t, n) {
        var l = fe(e) ? xr : ff;
        return n && ht(e, t, n) && (t = r), l(e, re(t, 3));
      }
      var _g = De(function(e, t) {
        if (e == null)
          return [];
        var n = t.length;
        return n > 1 && ht(e, t[0], t[1]) ? t = [] : n > 2 && ht(t[0], t[1], t[2]) && (t = [t[0]]), Ko(e, ft(t, 1), []);
      }), Mr = eM || function() {
        return Mt.Date.now();
      };
      function mg(e, t) {
        if (typeof t != "function")
          throw new Pt(m);
        return e = Ne(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Fs(e, t, n) {
        return t = n ? r : t, t = e && t == null ? e.length : t, pn(e, F, r, r, r, r, t);
      }
      function Rs(e, t) {
        var n;
        if (typeof t != "function")
          throw new Pt(m);
        return e = Ne(e), function() {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n;
        };
      }
      var Du = De(function(e, t, n) {
        var l = k;
        if (n.length) {
          var u = In(n, ul(Du));
          l |= Y;
        }
        return pn(e, l, t, n, u);
      }), Ws = De(function(e, t, n) {
        var l = k | K;
        if (n.length) {
          var u = In(n, ul(Ws));
          l |= Y;
        }
        return pn(t, l, e, n, u);
      });
      function Gs(e, t, n) {
        t = n ? r : t;
        var l = pn(e, de, r, r, r, r, r, t);
        return l.placeholder = Gs.placeholder, l;
      }
      function Zs(e, t, n) {
        t = n ? r : t;
        var l = pn(e, pe, r, r, r, r, r, t);
        return l.placeholder = Zs.placeholder, l;
      }
      function Hs(e, t, n) {
        var l, u, a, M, g, y, b = 0, O = !1, S = !1, W = !0;
        if (typeof e != "function")
          throw new Pt(m);
        t = Wt(t) || 0, Je(n) && (O = !!n.leading, S = "maxWait" in n, a = S ? st(Wt(n.maxWait) || 0, t) : a, W = "trailing" in n ? !!n.trailing : W);
        function $(nt) {
          var Xt = l, _n = u;
          return l = u = r, b = nt, M = e.apply(_n, Xt), M;
        }
        function ue(nt) {
          return b = nt, g = hl(me, t), O ? $(nt) : M;
        }
        function je(nt) {
          var Xt = nt - y, _n = nt - b, di = t - Xt;
          return S ? pt(di, a - _n) : di;
        }
        function oe(nt) {
          var Xt = nt - y, _n = nt - b;
          return y === r || Xt >= t || Xt < 0 || S && _n >= a;
        }
        function me() {
          var nt = Mr();
          if (oe(nt))
            return Ae(nt);
          g = hl(me, je(nt));
        }
        function Ae(nt) {
          return g = r, W && l ? $(nt) : (l = u = r, M);
        }
        function bt() {
          g !== r && rs(g), b = 0, l = y = u = g = r;
        }
        function wt() {
          return g === r ? M : Ae(Mr());
        }
        function Ot() {
          var nt = Mr(), Xt = oe(nt);
          if (l = arguments, u = this, y = nt, Xt) {
            if (g === r)
              return ue(y);
            if (S)
              return rs(g), g = hl(me, t), $(y);
          }
          return g === r && (g = hl(me, t)), M;
        }
        return Ot.cancel = bt, Ot.flush = wt, Ot;
      }
      var hg = De(function(e, t) {
        return ko(e, 1, t);
      }), wg = De(function(e, t, n) {
        return ko(e, Wt(t) || 0, n);
      });
      function Ag(e) {
        return pn(e, Ue);
      }
      function fr(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new Pt(m);
        var n = function() {
          var l = arguments, u = t ? t.apply(this, l) : l[0], a = n.cache;
          if (a.has(u))
            return a.get(u);
          var M = e.apply(this, l);
          return n.cache = a.set(u, M) || a, M;
        };
        return n.cache = new (fr.Cache || gn)(), n;
      }
      fr.Cache = gn;
      function dr(e) {
        if (typeof e != "function")
          throw new Pt(m);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function vg(e) {
        return Rs(2, e);
      }
      var Yg = df(function(e, t) {
        t = t.length == 1 && fe(t[0]) ? Ze(t[0], Et(re())) : Ze(ft(t, 1), Et(re()));
        var n = t.length;
        return De(function(l) {
          for (var u = -1, a = pt(l.length, n); ++u < a; )
            l[u] = t[u].call(this, l[u]);
          return Tt(e, this, l);
        });
      }), _u = De(function(e, t) {
        var n = In(t, ul(_u));
        return pn(e, Y, r, t, n);
      }), Ks = De(function(e, t) {
        var n = In(t, ul(Ks));
        return pn(e, V, r, t, n);
      }), Ig = jn(function(e, t) {
        return pn(e, ge, r, r, r, t);
      });
      function Lg(e, t) {
        if (typeof e != "function")
          throw new Pt(m);
        return t = t === r ? t : Ne(t), De(e, t);
      }
      function Tg(e, t) {
        if (typeof e != "function")
          throw new Pt(m);
        return t = t == null ? 0 : st(Ne(t), 0), De(function(n) {
          var l = n[t], u = Cn(n, 0, t);
          return l && Yn(u, l), Tt(e, this, u);
        });
      }
      function Eg(e, t, n) {
        var l = !0, u = !0;
        if (typeof e != "function")
          throw new Pt(m);
        return Je(n) && (l = "leading" in n ? !!n.leading : l, u = "trailing" in n ? !!n.trailing : u), Hs(e, t, {
          leading: l,
          maxWait: t,
          trailing: u
        });
      }
      function xg(e) {
        return Fs(e, 1);
      }
      function Cg(e, t) {
        return _u(uu(t), e);
      }
      function bg() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return fe(e) ? e : [e];
      }
      function Og(e) {
        return Vt(e, C);
      }
      function Sg(e, t) {
        return t = typeof t == "function" ? t : r, Vt(e, C, t);
      }
      function kg(e) {
        return Vt(e, w | C);
      }
      function Bg(e, t) {
        return t = typeof t == "function" ? t : r, Vt(e, w | C, t);
      }
      function Ug(e, t) {
        return t == null || So(e, t, at(t));
      }
      function qt(e, t) {
        return e === t || e !== e && t !== t;
      }
      var Pg = ur(Zr), Qg = ur(function(e, t) {
        return e >= t;
      }), Wn = Vo(function() {
        return arguments;
      }()) ? Vo : function(e) {
        return qe(e) && Se.call(e, "callee") && !Io.call(e, "callee");
      }, fe = A.isArray, Vg = io ? Et(io) : KM;
      function Yt(e) {
        return e != null && gr(e.length) && !yn(e);
      }
      function tt(e) {
        return qe(e) && Yt(e);
      }
      function Fg(e) {
        return e === !0 || e === !1 || qe(e) && mt(e) == rt;
      }
      var bn = nM || xu, Rg = ao ? Et(ao) : JM;
      function Wg(e) {
        return qe(e) && e.nodeType === 1 && !wl(e);
      }
      function Gg(e) {
        if (e == null)
          return !0;
        if (Yt(e) && (fe(e) || typeof e == "string" || typeof e.splice == "function" || bn(e) || ol(e) || Wn(e)))
          return !e.length;
        var t = jt(e);
        if (t == gt || t == Ve)
          return !e.size;
        if (ml(e))
          return !Jr(e).length;
        for (var n in e)
          if (Se.call(e, n))
            return !1;
        return !0;
      }
      function Zg(e, t) {
        return yl(e, t);
      }
      function Hg(e, t, n) {
        n = typeof n == "function" ? n : r;
        var l = n ? n(e, t) : r;
        return l === r ? yl(e, t, r, n) : !!l;
      }
      function mu(e) {
        if (!qe(e))
          return !1;
        var t = mt(e);
        return t == Ht || t == hn || typeof e.message == "string" && typeof e.name == "string" && !wl(e);
      }
      function Kg(e) {
        return typeof e == "number" && To(e);
      }
      function yn(e) {
        if (!Je(e))
          return !1;
        var t = mt(e);
        return t == fn || t == Sn || t == it || t == Xe;
      }
      function Js(e) {
        return typeof e == "number" && e == Ne(e);
      }
      function gr(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= T;
      }
      function Je(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function qe(e) {
        return e != null && typeof e == "object";
      }
      var $s = co ? Et(co) : qM;
      function Jg(e, t) {
        return e === t || Kr(e, t, fu(t));
      }
      function $g(e, t, n) {
        return n = typeof n == "function" ? n : r, Kr(e, t, fu(t), n);
      }
      function qg(e) {
        return qs(e) && e != +e;
      }
      function Xg(e) {
        if (Sf(e))
          throw new ce(p);
        return Fo(e);
      }
      function eN(e) {
        return e === null;
      }
      function tN(e) {
        return e == null;
      }
      function qs(e) {
        return typeof e == "number" || qe(e) && mt(e) == ln;
      }
      function wl(e) {
        if (!qe(e) || mt(e) != Z)
          return !1;
        var t = Ql(e);
        if (t === null)
          return !0;
        var n = Se.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && kl.call(n) == Jc;
      }
      var hu = Mo ? Et(Mo) : XM;
      function nN(e) {
        return Js(e) && e >= -T && e <= T;
      }
      var Xs = fo ? Et(fo) : ef;
      function Nr(e) {
        return typeof e == "string" || !fe(e) && qe(e) && mt(e) == ct;
      }
      function Ct(e) {
        return typeof e == "symbol" || qe(e) && mt(e) == kt;
      }
      var ol = go ? Et(go) : tf;
      function lN(e) {
        return e === r;
      }
      function rN(e) {
        return qe(e) && jt(e) == Kt;
      }
      function uN(e) {
        return qe(e) && mt(e) == Zn;
      }
      var oN = ur($r), sN = ur(function(e, t) {
        return e <= t;
      });
      function ei(e) {
        if (!e)
          return [];
        if (Yt(e))
          return Nr(e) ? Jt(e) : vt(e);
        if (Ml && e[Ml])
          return Bc(e[Ml]());
        var t = jt(e), n = t == gt ? Br : t == Ve ? bl : sl;
        return n(e);
      }
      function Dn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Wt(e), e === v || e === -v) {
          var t = e < 0 ? -1 : 1;
          return t * q;
        }
        return e === e ? e : 0;
      }
      function Ne(e) {
        var t = Dn(e), n = t % 1;
        return t === t ? n ? t - n : t : 0;
      }
      function ti(e) {
        return e ? Qn(Ne(e), 0, _e) : 0;
      }
      function Wt(e) {
        if (typeof e == "number")
          return e;
        if (Ct(e))
          return ie;
        if (Je(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Je(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Do(e);
        var n = Qa.test(e);
        return n || Fa.test(e) ? _c(e.slice(2), n ? 2 : 8) : Pa.test(e) ? ie : +e;
      }
      function ni(e) {
        return sn(e, It(e));
      }
      function iN(e) {
        return e ? Qn(Ne(e), -T, T) : e === 0 ? e : 0;
      }
      function xe(e) {
        return e == null ? "" : xt(e);
      }
      var aN = ll(function(e, t) {
        if (ml(t) || Yt(t)) {
          sn(t, at(t), e);
          return;
        }
        for (var n in t)
          Se.call(t, n) && pl(e, n, t[n]);
      }), li = ll(function(e, t) {
        sn(t, It(t), e);
      }), pr = ll(function(e, t, n, l) {
        sn(t, It(t), e, l);
      }), cN = ll(function(e, t, n, l) {
        sn(t, at(t), e, l);
      }), MN = jn(Rr);
      function fN(e, t) {
        var n = nl(e);
        return t == null ? n : Oo(n, t);
      }
      var dN = De(function(e, t) {
        e = Qe(e);
        var n = -1, l = t.length, u = l > 2 ? t[2] : r;
        for (u && ht(t[0], t[1], u) && (l = 1); ++n < l; )
          for (var a = t[n], M = It(a), g = -1, y = M.length; ++g < y; ) {
            var b = M[g], O = e[b];
            (O === r || qt(O, Xn[b]) && !Se.call(e, b)) && (e[b] = a[b]);
          }
        return e;
      }), gN = De(function(e) {
        return e.push(r, Ds), Tt(ri, r, e);
      });
      function NN(e, t) {
        return po(e, re(t, 3), on);
      }
      function pN(e, t) {
        return po(e, re(t, 3), Gr);
      }
      function jN(e, t) {
        return e == null ? e : Wr(e, re(t, 3), It);
      }
      function zN(e, t) {
        return e == null ? e : Po(e, re(t, 3), It);
      }
      function yN(e, t) {
        return e && on(e, re(t, 3));
      }
      function DN(e, t) {
        return e && Gr(e, re(t, 3));
      }
      function _N(e) {
        return e == null ? [] : $l(e, at(e));
      }
      function mN(e) {
        return e == null ? [] : $l(e, It(e));
      }
      function wu(e, t, n) {
        var l = e == null ? r : Vn(e, t);
        return l === r ? n : l;
      }
      function hN(e, t) {
        return e != null && hs(e, t, WM);
      }
      function Au(e, t) {
        return e != null && hs(e, t, GM);
      }
      var wN = Ns(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = Bl.call(t)), e[t] = n;
      }, Yu(Lt)), AN = Ns(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = Bl.call(t)), Se.call(e, t) ? e[t].push(n) : e[t] = [n];
      }, re), vN = De(zl);
      function at(e) {
        return Yt(e) ? Co(e) : Jr(e);
      }
      function It(e) {
        return Yt(e) ? Co(e, !0) : nf(e);
      }
      function YN(e, t) {
        var n = {};
        return t = re(t, 3), on(e, function(l, u, a) {
          Nn(n, t(l, u, a), l);
        }), n;
      }
      function IN(e, t) {
        var n = {};
        return t = re(t, 3), on(e, function(l, u, a) {
          Nn(n, u, t(l, u, a));
        }), n;
      }
      var LN = ll(function(e, t, n) {
        ql(e, t, n);
      }), ri = ll(function(e, t, n, l) {
        ql(e, t, n, l);
      }), TN = jn(function(e, t) {
        var n = {};
        if (e == null)
          return n;
        var l = !1;
        t = Ze(t, function(a) {
          return a = xn(a, e), l || (l = a.length > 1), a;
        }), sn(e, cu(e), n), l && (n = Vt(n, w | x | C, wf));
        for (var u = t.length; u--; )
          nu(n, t[u]);
        return n;
      });
      function EN(e, t) {
        return ui(e, dr(re(t)));
      }
      var xN = jn(function(e, t) {
        return e == null ? {} : rf(e, t);
      });
      function ui(e, t) {
        if (e == null)
          return {};
        var n = Ze(cu(e), function(l) {
          return [l];
        });
        return t = re(t), Jo(e, n, function(l, u) {
          return t(l, u[0]);
        });
      }
      function CN(e, t, n) {
        t = xn(t, e);
        var l = -1, u = t.length;
        for (u || (u = 1, e = r); ++l < u; ) {
          var a = e == null ? r : e[an(t[l])];
          a === r && (l = u, a = n), e = yn(a) ? a.call(e) : a;
        }
        return e;
      }
      function bN(e, t, n) {
        return e == null ? e : Dl(e, t, n);
      }
      function ON(e, t, n, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : Dl(e, t, n, l);
      }
      var oi = zs(at), si = zs(It);
      function SN(e, t, n) {
        var l = fe(e), u = l || bn(e) || ol(e);
        if (t = re(t, 4), n == null) {
          var a = e && e.constructor;
          u ? n = l ? new a() : [] : Je(e) ? n = yn(a) ? nl(Ql(e)) : {} : n = {};
        }
        return (u ? Ut : on)(e, function(M, g, y) {
          return t(n, M, g, y);
        }), n;
      }
      function kN(e, t) {
        return e == null ? !0 : nu(e, t);
      }
      function BN(e, t, n) {
        return e == null ? e : ts(e, t, uu(n));
      }
      function UN(e, t, n, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : ts(e, t, uu(n), l);
      }
      function sl(e) {
        return e == null ? [] : kr(e, at(e));
      }
      function PN(e) {
        return e == null ? [] : kr(e, It(e));
      }
      function QN(e, t, n) {
        return n === r && (n = t, t = r), n !== r && (n = Wt(n), n = n === n ? n : 0), t !== r && (t = Wt(t), t = t === t ? t : 0), Qn(Wt(e), t, n);
      }
      function VN(e, t, n) {
        return t = Dn(t), n === r ? (n = t, t = 0) : n = Dn(n), e = Wt(e), ZM(e, t, n);
      }
      function FN(e, t, n) {
        if (n && typeof n != "boolean" && ht(e, t, n) && (t = n = r), n === r && (typeof t == "boolean" ? (n = t, t = r) : typeof e == "boolean" && (n = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Dn(e), t === r ? (t = e, e = 0) : t = Dn(t)), e > t) {
          var l = e;
          e = t, t = l;
        }
        if (n || e % 1 || t % 1) {
          var u = Eo();
          return pt(e + u * (t - e + Dc("1e-" + ((u + "").length - 1))), t);
        }
        return Xr(e, t);
      }
      var RN = rl(function(e, t, n) {
        return t = t.toLowerCase(), e + (n ? ii(t) : t);
      });
      function ii(e) {
        return vu(xe(e).toLowerCase());
      }
      function ai(e) {
        return e = xe(e), e && e.replace(Wa, Cc).replace(cc, "");
      }
      function WN(e, t, n) {
        e = xe(e), t = xt(t);
        var l = e.length;
        n = n === r ? l : Qn(Ne(n), 0, l);
        var u = n;
        return n -= t.length, n >= 0 && e.slice(n, u) == t;
      }
      function GN(e) {
        return e = xe(e), e && Aa.test(e) ? e.replace(Uu, bc) : e;
      }
      function ZN(e) {
        return e = xe(e), e && Ea.test(e) ? e.replace(_r, "\\$&") : e;
      }
      var HN = rl(function(e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase();
      }), KN = rl(function(e, t, n) {
        return e + (n ? " " : "") + t.toLowerCase();
      }), JN = fs("toLowerCase");
      function $N(e, t, n) {
        e = xe(e), t = Ne(t);
        var l = t ? $n(e) : 0;
        if (!t || l >= t)
          return e;
        var u = (t - l) / 2;
        return rr(Wl(u), n) + e + rr(Rl(u), n);
      }
      function qN(e, t, n) {
        e = xe(e), t = Ne(t);
        var l = t ? $n(e) : 0;
        return t && l < t ? e + rr(t - l, n) : e;
      }
      function XN(e, t, n) {
        e = xe(e), t = Ne(t);
        var l = t ? $n(e) : 0;
        return t && l < t ? rr(t - l, n) + e : e;
      }
      function ep(e, t, n) {
        return n || t == null ? t = 0 : t && (t = +t), oM(xe(e).replace(mr, ""), t || 0);
      }
      function tp(e, t, n) {
        return (n ? ht(e, t, n) : t === r) ? t = 1 : t = Ne(t), eu(xe(e), t);
      }
      function np() {
        var e = arguments, t = xe(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var lp = rl(function(e, t, n) {
        return e + (n ? "_" : "") + t.toLowerCase();
      });
      function rp(e, t, n) {
        return n && typeof n != "number" && ht(e, t, n) && (t = n = r), n = n === r ? _e : n >>> 0, n ? (e = xe(e), e && (typeof t == "string" || t != null && !hu(t)) && (t = xt(t), !t && Jn(e)) ? Cn(Jt(e), 0, n) : e.split(t, n)) : [];
      }
      var up = rl(function(e, t, n) {
        return e + (n ? " " : "") + vu(t);
      });
      function op(e, t, n) {
        return e = xe(e), n = n == null ? 0 : Qn(Ne(n), 0, e.length), t = xt(t), e.slice(n, n + t.length) == t;
      }
      function sp(e, t, n) {
        var l = i.templateSettings;
        n && ht(e, t, n) && (t = r), e = xe(e), t = pr({}, t, l, ys);
        var u = pr({}, t.imports, l.imports, ys), a = at(u), M = kr(u, a), g, y, b = 0, O = t.interpolate || Ll, S = "__p += '", W = Ur(
          (t.escape || Ll).source + "|" + O.source + "|" + (O === Pu ? Ua : Ll).source + "|" + (t.evaluate || Ll).source + "|$",
          "g"
        ), $ = "//# sourceURL=" + (Se.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Nc + "]") + `
`;
        e.replace(W, function(oe, me, Ae, bt, wt, Ot) {
          return Ae || (Ae = bt), S += e.slice(b, Ot).replace(Ga, Oc), me && (g = !0, S += `' +
__e(` + me + `) +
'`), wt && (y = !0, S += `';
` + wt + `;
__p += '`), Ae && (S += `' +
((__t = (` + Ae + `)) == null ? '' : __t) +
'`), b = Ot + oe.length, oe;
        }), S += `';
`;
        var ue = Se.call(t, "variable") && t.variable;
        if (!ue)
          S = `with (obj) {
` + S + `
}
`;
        else if (ka.test(ue))
          throw new ce(N);
        S = (y ? S.replace(_a, "") : S).replace(ma, "$1").replace(ha, "$1;"), S = "function(" + (ue || "obj") + `) {
` + (ue ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + S + `return __p
}`;
        var je = Mi(function() {
          return Ee(a, $ + "return " + S).apply(r, M);
        });
        if (je.source = S, mu(je))
          throw je;
        return je;
      }
      function ip(e) {
        return xe(e).toLowerCase();
      }
      function ap(e) {
        return xe(e).toUpperCase();
      }
      function cp(e, t, n) {
        if (e = xe(e), e && (n || t === r))
          return Do(e);
        if (!e || !(t = xt(t)))
          return e;
        var l = Jt(e), u = Jt(t), a = _o(l, u), M = mo(l, u) + 1;
        return Cn(l, a, M).join("");
      }
      function Mp(e, t, n) {
        if (e = xe(e), e && (n || t === r))
          return e.slice(0, wo(e) + 1);
        if (!e || !(t = xt(t)))
          return e;
        var l = Jt(e), u = mo(l, Jt(t)) + 1;
        return Cn(l, 0, u).join("");
      }
      function fp(e, t, n) {
        if (e = xe(e), e && (n || t === r))
          return e.replace(mr, "");
        if (!e || !(t = xt(t)))
          return e;
        var l = Jt(e), u = _o(l, Jt(t));
        return Cn(l, u).join("");
      }
      function dp(e, t) {
        var n = Ke, l = _t;
        if (Je(t)) {
          var u = "separator" in t ? t.separator : u;
          n = "length" in t ? Ne(t.length) : n, l = "omission" in t ? xt(t.omission) : l;
        }
        e = xe(e);
        var a = e.length;
        if (Jn(e)) {
          var M = Jt(e);
          a = M.length;
        }
        if (n >= a)
          return e;
        var g = n - $n(l);
        if (g < 1)
          return l;
        var y = M ? Cn(M, 0, g).join("") : e.slice(0, g);
        if (u === r)
          return y + l;
        if (M && (g += y.length - g), hu(u)) {
          if (e.slice(g).search(u)) {
            var b, O = y;
            for (u.global || (u = Ur(u.source, xe(Qu.exec(u)) + "g")), u.lastIndex = 0; b = u.exec(O); )
              var S = b.index;
            y = y.slice(0, S === r ? g : S);
          }
        } else if (e.indexOf(xt(u), g) != g) {
          var W = y.lastIndexOf(u);
          W > -1 && (y = y.slice(0, W));
        }
        return y + l;
      }
      function gp(e) {
        return e = xe(e), e && wa.test(e) ? e.replace(Bu, Vc) : e;
      }
      var Np = rl(function(e, t, n) {
        return e + (n ? " " : "") + t.toUpperCase();
      }), vu = fs("toUpperCase");
      function ci(e, t, n) {
        return e = xe(e), t = n ? r : t, t === r ? kc(e) ? Wc(e) : Ic(e) : e.match(t) || [];
      }
      var Mi = De(function(e, t) {
        try {
          return Tt(e, r, t);
        } catch (n) {
          return mu(n) ? n : new ce(n);
        }
      }), pp = jn(function(e, t) {
        return Ut(t, function(n) {
          n = an(n), Nn(e, n, Du(e[n], e));
        }), e;
      });
      function jp(e) {
        var t = e == null ? 0 : e.length, n = re();
        return e = t ? Ze(e, function(l) {
          if (typeof l[1] != "function")
            throw new Pt(m);
          return [n(l[0]), l[1]];
        }) : [], De(function(l) {
          for (var u = -1; ++u < t; ) {
            var a = e[u];
            if (Tt(a[0], this, l))
              return Tt(a[1], this, l);
          }
        });
      }
      function zp(e) {
        return VM(Vt(e, w));
      }
      function Yu(e) {
        return function() {
          return e;
        };
      }
      function yp(e, t) {
        return e == null || e !== e ? t : e;
      }
      var Dp = gs(), _p = gs(!0);
      function Lt(e) {
        return e;
      }
      function Iu(e) {
        return Ro(typeof e == "function" ? e : Vt(e, w));
      }
      function mp(e) {
        return Go(Vt(e, w));
      }
      function hp(e, t) {
        return Zo(e, Vt(t, w));
      }
      var wp = De(function(e, t) {
        return function(n) {
          return zl(n, e, t);
        };
      }), Ap = De(function(e, t) {
        return function(n) {
          return zl(e, n, t);
        };
      });
      function Lu(e, t, n) {
        var l = at(t), u = $l(t, l);
        n == null && !(Je(t) && (u.length || !l.length)) && (n = t, t = e, e = this, u = $l(t, at(t)));
        var a = !(Je(n) && "chain" in n) || !!n.chain, M = yn(e);
        return Ut(u, function(g) {
          var y = t[g];
          e[g] = y, M && (e.prototype[g] = function() {
            var b = this.__chain__;
            if (a || b) {
              var O = e(this.__wrapped__), S = O.__actions__ = vt(this.__actions__);
              return S.push({ func: y, args: arguments, thisArg: e }), O.__chain__ = b, O;
            }
            return y.apply(e, Yn([this.value()], arguments));
          });
        }), e;
      }
      function vp() {
        return Mt._ === this && (Mt._ = $c), this;
      }
      function Tu() {
      }
      function Yp(e) {
        return e = Ne(e), De(function(t) {
          return Ho(t, e);
        });
      }
      var Ip = su(Ze), Lp = su(No), Tp = su(xr);
      function fi(e) {
        return gu(e) ? Cr(an(e)) : uf(e);
      }
      function Ep(e) {
        return function(t) {
          return e == null ? r : Vn(e, t);
        };
      }
      var xp = ps(), Cp = ps(!0);
      function Eu() {
        return [];
      }
      function xu() {
        return !1;
      }
      function bp() {
        return {};
      }
      function Op() {
        return "";
      }
      function Sp() {
        return !0;
      }
      function kp(e, t) {
        if (e = Ne(e), e < 1 || e > T)
          return [];
        var n = _e, l = pt(e, _e);
        t = re(t), e -= _e;
        for (var u = Sr(l, t); ++n < e; )
          t(n);
        return u;
      }
      function Bp(e) {
        return fe(e) ? Ze(e, an) : Ct(e) ? [e] : vt(xs(xe(e)));
      }
      function Up(e) {
        var t = ++Kc;
        return xe(e) + t;
      }
      var Pp = lr(function(e, t) {
        return e + t;
      }, 0), Qp = iu("ceil"), Vp = lr(function(e, t) {
        return e / t;
      }, 1), Fp = iu("floor");
      function Rp(e) {
        return e && e.length ? Jl(e, Lt, Zr) : r;
      }
      function Wp(e, t) {
        return e && e.length ? Jl(e, re(t, 2), Zr) : r;
      }
      function Gp(e) {
        return zo(e, Lt);
      }
      function Zp(e, t) {
        return zo(e, re(t, 2));
      }
      function Hp(e) {
        return e && e.length ? Jl(e, Lt, $r) : r;
      }
      function Kp(e, t) {
        return e && e.length ? Jl(e, re(t, 2), $r) : r;
      }
      var Jp = lr(function(e, t) {
        return e * t;
      }, 1), $p = iu("round"), qp = lr(function(e, t) {
        return e - t;
      }, 0);
      function Xp(e) {
        return e && e.length ? Or(e, Lt) : 0;
      }
      function ej(e, t) {
        return e && e.length ? Or(e, re(t, 2)) : 0;
      }
      return i.after = mg, i.ary = Fs, i.assign = aN, i.assignIn = li, i.assignInWith = pr, i.assignWith = cN, i.at = MN, i.before = Rs, i.bind = Du, i.bindAll = pp, i.bindKey = Ws, i.castArray = bg, i.chain = Ps, i.chunk = Ff, i.compact = Rf, i.concat = Wf, i.cond = jp, i.conforms = zp, i.constant = Yu, i.countBy = Xd, i.create = fN, i.curry = Gs, i.curryRight = Zs, i.debounce = Hs, i.defaults = dN, i.defaultsDeep = gN, i.defer = hg, i.delay = wg, i.difference = Gf, i.differenceBy = Zf, i.differenceWith = Hf, i.drop = Kf, i.dropRight = Jf, i.dropRightWhile = $f, i.dropWhile = qf, i.fill = Xf, i.filter = tg, i.flatMap = rg, i.flatMapDeep = ug, i.flatMapDepth = og, i.flatten = Ss, i.flattenDeep = ed, i.flattenDepth = td, i.flip = Ag, i.flow = Dp, i.flowRight = _p, i.fromPairs = nd, i.functions = _N, i.functionsIn = mN, i.groupBy = sg, i.initial = rd, i.intersection = ud, i.intersectionBy = od, i.intersectionWith = sd, i.invert = wN, i.invertBy = AN, i.invokeMap = ag, i.iteratee = Iu, i.keyBy = cg, i.keys = at, i.keysIn = It, i.map = cr, i.mapKeys = YN, i.mapValues = IN, i.matches = mp, i.matchesProperty = hp, i.memoize = fr, i.merge = LN, i.mergeWith = ri, i.method = wp, i.methodOf = Ap, i.mixin = Lu, i.negate = dr, i.nthArg = Yp, i.omit = TN, i.omitBy = EN, i.once = vg, i.orderBy = Mg, i.over = Ip, i.overArgs = Yg, i.overEvery = Lp, i.overSome = Tp, i.partial = _u, i.partialRight = Ks, i.partition = fg, i.pick = xN, i.pickBy = ui, i.property = fi, i.propertyOf = Ep, i.pull = Md, i.pullAll = Bs, i.pullAllBy = fd, i.pullAllWith = dd, i.pullAt = gd, i.range = xp, i.rangeRight = Cp, i.rearg = Ig, i.reject = Ng, i.remove = Nd, i.rest = Lg, i.reverse = zu, i.sampleSize = jg, i.set = bN, i.setWith = ON, i.shuffle = zg, i.slice = pd, i.sortBy = _g, i.sortedUniq = hd, i.sortedUniqBy = wd, i.split = rp, i.spread = Tg, i.tail = Ad, i.take = vd, i.takeRight = Yd, i.takeRightWhile = Id, i.takeWhile = Ld, i.tap = Rd, i.throttle = Eg, i.thru = ar, i.toArray = ei, i.toPairs = oi, i.toPairsIn = si, i.toPath = Bp, i.toPlainObject = ni, i.transform = SN, i.unary = xg, i.union = Td, i.unionBy = Ed, i.unionWith = xd, i.uniq = Cd, i.uniqBy = bd, i.uniqWith = Od, i.unset = kN, i.unzip = yu, i.unzipWith = Us, i.update = BN, i.updateWith = UN, i.values = sl, i.valuesIn = PN, i.without = Sd, i.words = ci, i.wrap = Cg, i.xor = kd, i.xorBy = Bd, i.xorWith = Ud, i.zip = Pd, i.zipObject = Qd, i.zipObjectDeep = Vd, i.zipWith = Fd, i.entries = oi, i.entriesIn = si, i.extend = li, i.extendWith = pr, Lu(i, i), i.add = Pp, i.attempt = Mi, i.camelCase = RN, i.capitalize = ii, i.ceil = Qp, i.clamp = QN, i.clone = Og, i.cloneDeep = kg, i.cloneDeepWith = Bg, i.cloneWith = Sg, i.conformsTo = Ug, i.deburr = ai, i.defaultTo = yp, i.divide = Vp, i.endsWith = WN, i.eq = qt, i.escape = GN, i.escapeRegExp = ZN, i.every = eg, i.find = ng, i.findIndex = bs, i.findKey = NN, i.findLast = lg, i.findLastIndex = Os, i.findLastKey = pN, i.floor = Fp, i.forEach = Qs, i.forEachRight = Vs, i.forIn = jN, i.forInRight = zN, i.forOwn = yN, i.forOwnRight = DN, i.get = wu, i.gt = Pg, i.gte = Qg, i.has = hN, i.hasIn = Au, i.head = ks, i.identity = Lt, i.includes = ig, i.indexOf = ld, i.inRange = VN, i.invoke = vN, i.isArguments = Wn, i.isArray = fe, i.isArrayBuffer = Vg, i.isArrayLike = Yt, i.isArrayLikeObject = tt, i.isBoolean = Fg, i.isBuffer = bn, i.isDate = Rg, i.isElement = Wg, i.isEmpty = Gg, i.isEqual = Zg, i.isEqualWith = Hg, i.isError = mu, i.isFinite = Kg, i.isFunction = yn, i.isInteger = Js, i.isLength = gr, i.isMap = $s, i.isMatch = Jg, i.isMatchWith = $g, i.isNaN = qg, i.isNative = Xg, i.isNil = tN, i.isNull = eN, i.isNumber = qs, i.isObject = Je, i.isObjectLike = qe, i.isPlainObject = wl, i.isRegExp = hu, i.isSafeInteger = nN, i.isSet = Xs, i.isString = Nr, i.isSymbol = Ct, i.isTypedArray = ol, i.isUndefined = lN, i.isWeakMap = rN, i.isWeakSet = uN, i.join = id, i.kebabCase = HN, i.last = Rt, i.lastIndexOf = ad, i.lowerCase = KN, i.lowerFirst = JN, i.lt = oN, i.lte = sN, i.max = Rp, i.maxBy = Wp, i.mean = Gp, i.meanBy = Zp, i.min = Hp, i.minBy = Kp, i.stubArray = Eu, i.stubFalse = xu, i.stubObject = bp, i.stubString = Op, i.stubTrue = Sp, i.multiply = Jp, i.nth = cd, i.noConflict = vp, i.noop = Tu, i.now = Mr, i.pad = $N, i.padEnd = qN, i.padStart = XN, i.parseInt = ep, i.random = FN, i.reduce = dg, i.reduceRight = gg, i.repeat = tp, i.replace = np, i.result = CN, i.round = $p, i.runInContext = j, i.sample = pg, i.size = yg, i.snakeCase = lp, i.some = Dg, i.sortedIndex = jd, i.sortedIndexBy = zd, i.sortedIndexOf = yd, i.sortedLastIndex = Dd, i.sortedLastIndexBy = _d, i.sortedLastIndexOf = md, i.startCase = up, i.startsWith = op, i.subtract = qp, i.sum = Xp, i.sumBy = ej, i.template = sp, i.times = kp, i.toFinite = Dn, i.toInteger = Ne, i.toLength = ti, i.toLower = ip, i.toNumber = Wt, i.toSafeInteger = iN, i.toString = xe, i.toUpper = ap, i.trim = cp, i.trimEnd = Mp, i.trimStart = fp, i.truncate = dp, i.unescape = gp, i.uniqueId = Up, i.upperCase = Np, i.upperFirst = vu, i.each = Qs, i.eachRight = Vs, i.first = ks, Lu(i, function() {
        var e = {};
        return on(i, function(t, n) {
          Se.call(i.prototype, n) || (e[n] = t);
        }), e;
      }(), { chain: !1 }), i.VERSION = o, Ut(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        i[e].placeholder = i;
      }), Ut(["drop", "take"], function(e, t) {
        he.prototype[e] = function(n) {
          n = n === r ? 1 : st(Ne(n), 0);
          var l = this.__filtered__ && !t ? new he(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = pt(n, l.__takeCount__) : l.__views__.push({
            size: pt(n, _e),
            type: e + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, he.prototype[e + "Right"] = function(n) {
          return this.reverse()[e](n).reverse();
        };
      }), Ut(["filter", "map", "takeWhile"], function(e, t) {
        var n = t + 1, l = n == nn || n == Gt;
        he.prototype[e] = function(u) {
          var a = this.clone();
          return a.__iteratees__.push({
            iteratee: re(u, 3),
            type: n
          }), a.__filtered__ = a.__filtered__ || l, a;
        };
      }), Ut(["head", "last"], function(e, t) {
        var n = "take" + (t ? "Right" : "");
        he.prototype[e] = function() {
          return this[n](1).value()[0];
        };
      }), Ut(["initial", "tail"], function(e, t) {
        var n = "drop" + (t ? "" : "Right");
        he.prototype[e] = function() {
          return this.__filtered__ ? new he(this) : this[n](1);
        };
      }), he.prototype.compact = function() {
        return this.filter(Lt);
      }, he.prototype.find = function(e) {
        return this.filter(e).head();
      }, he.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, he.prototype.invokeMap = De(function(e, t) {
        return typeof e == "function" ? new he(this) : this.map(function(n) {
          return zl(n, e, t);
        });
      }), he.prototype.reject = function(e) {
        return this.filter(dr(re(e)));
      }, he.prototype.slice = function(e, t) {
        e = Ne(e);
        var n = this;
        return n.__filtered__ && (e > 0 || t < 0) ? new he(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== r && (t = Ne(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
      }, he.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, he.prototype.toArray = function() {
        return this.take(_e);
      }, on(he.prototype, function(e, t) {
        var n = /^(?:filter|find|map|reject)|While$/.test(t), l = /^(?:head|last)$/.test(t), u = i[l ? "take" + (t == "last" ? "Right" : "") : t], a = l || /^find/.test(t);
        u && (i.prototype[t] = function() {
          var M = this.__wrapped__, g = l ? [1] : arguments, y = M instanceof he, b = g[0], O = y || fe(M), S = function(me) {
            var Ae = u.apply(i, Yn([me], g));
            return l && W ? Ae[0] : Ae;
          };
          O && n && typeof b == "function" && b.length != 1 && (y = O = !1);
          var W = this.__chain__, $ = !!this.__actions__.length, ue = a && !W, je = y && !$;
          if (!a && O) {
            M = je ? M : new he(this);
            var oe = e.apply(M, g);
            return oe.__actions__.push({ func: ar, args: [S], thisArg: r }), new Qt(oe, W);
          }
          return ue && je ? e.apply(this, g) : (oe = this.thru(S), ue ? l ? oe.value()[0] : oe.value() : oe);
        });
      }), Ut(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Ol[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
        i.prototype[e] = function() {
          var u = arguments;
          if (l && !this.__chain__) {
            var a = this.value();
            return t.apply(fe(a) ? a : [], u);
          }
          return this[n](function(M) {
            return t.apply(fe(M) ? M : [], u);
          });
        };
      }), on(he.prototype, function(e, t) {
        var n = i[t];
        if (n) {
          var l = n.name + "";
          Se.call(tl, l) || (tl[l] = []), tl[l].push({ name: t, func: n });
        }
      }), tl[nr(r, K).name] = [{
        name: "wrapper",
        func: r
      }], he.prototype.clone = dM, he.prototype.reverse = gM, he.prototype.value = NM, i.prototype.at = Wd, i.prototype.chain = Gd, i.prototype.commit = Zd, i.prototype.next = Hd, i.prototype.plant = Jd, i.prototype.reverse = $d, i.prototype.toJSON = i.prototype.valueOf = i.prototype.value = qd, i.prototype.first = i.prototype.head, Ml && (i.prototype[Ml] = Kd), i;
    }, qn = Gc();
    kn ? ((kn.exports = qn)._ = qn, Ir._ = qn) : Mt._ = qn;
  }).call(Al);
})(jr, jr.exports);
var Dt = jr.exports;
const gj = {
  name: "ElPlusFormBtn",
  inheritAttrs: !1,
  typeName: "btn",
  customOptions: {}
}, mn = /* @__PURE__ */ Me({
  ...gj,
  props: {
    field: {},
    rowIndex: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  setup(f) {
    const s = f, r = h(s.loading ?? !1), o = Ie(() => {
      var N;
      const m = Object.assign({}, Le(), s.desc, (N = s.desc) == null ? void 0 : N._attrs);
      return m.btnType && (m.type = m.btnType), m.plain || delete m.plain, m;
    }), D = Ie(() => {
      const m = {};
      if (s.desc && s.desc.on)
        for (const N in s.desc.on)
          N === "click" && s.desc.mask ? m[N] = function() {
            r.value = !0, s.desc.on[N]({
              row: s.formData,
              callBack: () => {
                setTimeout(() => r.value = !1, 500);
              },
              field: s.field,
              rowIndex: s.rowIndex
            });
          } : m[N] = function() {
            s.desc.on[N]({ row: Dt.cloneDeep(s.formData || {}), field: s.field, rowIndex: s.rowIndex });
          };
      return m;
    }), p = Ie(() => s.desc.btnLabel ? typeof s.desc.btnLabel == "function" ? s.desc.btnLabel(s.formData) : s.desc.btnLabel : s.desc.label ? typeof s.desc.label == "function" ? s.desc.label(s.formData) : s.desc.label : "");
    return He(
      () => s.loading,
      (m) => {
        r.value = m;
      }
    ), (m, N) => {
      const d = Q("el-button"), c = Q("el-popconfirm");
      return s.desc.confirm ? (_(), R(c, {
        key: 0,
        onConfirm: D.value.click,
        title: s.desc.confirm
      }, {
        reference: B(() => [
          se(d, ne({
            loading: r.value,
            size: s.desc.size || "small"
          }, o.value), en({ _: 2 }, [
            m.desc.label ? {
              name: "default",
              fn: B(() => [
                ke(Ce(p.value), 1)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["loading", "size"])
        ]),
        _: 1
      }, 8, ["onConfirm", "title"])) : (_(), R(d, ne({
        key: 1,
        loading: r.value,
        size: s.desc.size || "small"
      }, o.value, Te(D.value), {
        style: { pointerEvents: m.desc.isTag ? "none" : "all" }
      }), en({ _: 2 }, [
        s.desc.label ? {
          name: "default",
          fn: B(() => [
            ke(Ce(p.value), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["loading", "size", "style"]));
    };
  }
}), Nj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: mn }, Symbol.toStringTag, { value: "Module" })), pj = /* @__PURE__ */ ve("i", { class: "ele-ArrowDown el-icon--right" }, null, -1), jj = {
  name: "ElPlusFormBtns",
  inheritAttrs: !1,
  typeName: "btns",
  customOptions: {}
}, Ii = /* @__PURE__ */ Me({
  ...jj,
  props: {
    field: {},
    rowIndex: {},
    desc: {},
    formData: {}
  },
  setup(f) {
    const s = f, r = h([]), o = h([]), D = Ie(() => {
      switch (s.desc.align) {
        case "right":
          return "flex-end";
        case "center":
          return "center";
        case void 0:
        case "left":
          return "flex-start";
        default:
          return "flex-start";
      }
    }), p = Ie(() => (c) => {
      const z = {};
      if (c && c.on)
        for (const w in c.on)
          w === "click" && c.confirm ? z[w] = function() {
            oj.confirm(c.confirm, "提示", {
              type: "warning"
            }).then(() => {
              c.on[w]({ row: s.formData, field: s.field, rowIndex: s.rowIndex });
            });
          } : z[w] = function() {
            c.on[w]({ row: s.formData, field: s.field, rowIndex: s.rowIndex });
          };
      return z;
    }), m = () => {
      const c = [];
      s.desc.btns.length > 0 && s.desc.btns.map((w) => {
        N(w) && c.push(w);
      }), r.value = c;
      const z = s.desc.limit || 3;
      r.value.length > z && (o.value = r.value.splice(z - 1));
    }, N = (c) => typeof c.vif == "function" ? !!d(c.vif) : typeof c.vif == "boolean" ? c.vif : !0, d = (c) => c(s.formData);
    return He(
      () => s.desc,
      () => m()
    ), He(
      () => s.formData,
      () => m()
    ), cn(() => {
      m();
    }), (c, z) => {
      const w = Q("el-button"), x = Q("el-dropdown-item"), C = Q("el-dropdown-menu"), E = Q("el-dropdown");
      return _(), P("div", {
        class: "el-plus-form-btn-group",
        style: yt({ "justify-content": D.value })
      }, [
        (_(!0), P(we, null, Ye(r.value, (U, k) => (_(), R(mn, {
          key: k + (U.label || U.title || ""),
          type: "primary",
          field: c.field,
          desc: U || {},
          formData: c.formData,
          plain: (U && U.plain) ?? c.desc.plain ?? !0,
          text: c.desc.text,
          rowIndex: c.rowIndex
        }, null, 8, ["field", "desc", "formData", "plain", "text", "rowIndex"]))), 128)),
        o.value && o.value.length > 0 ? (_(), R(E, {
          key: 0,
          class: "group-menu-btn",
          size: c.desc.size || "small"
        }, {
          dropdown: B(() => [
            se(C, null, {
              default: B(() => [
                (_(!0), P(we, null, Ye(o.value, (U, k) => (_(), R(x, ne({
                  key: k + (U.label || U.title)
                }, Te(p.value(U))), {
                  default: B(() => [
                    ke(Ce(U.label || U.title), 1)
                  ]),
                  _: 2
                }, 1040))), 128))
              ]),
              _: 1
            })
          ]),
          default: B(() => [
            se(w, {
              type: "primary",
              size: c.desc.size || "small",
              plain: c.desc.plain ?? !0
            }, {
              default: B(() => [
                ke(" 更多"),
                pj
              ]),
              _: 1
            }, 8, ["size", "plain"])
          ]),
          _: 1
        }, 8, ["size"])) : ae("", !0)
      ], 4);
    };
  }
});
const zj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ii }, Symbol.toStringTag, { value: "Module" })), yj = {
  name: "ElPlusFormCascader",
  inheritAttrs: !1,
  typeName: "cascader",
  customOptions: {}
}, Dj = /* @__PURE__ */ Me({
  ...yj,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = We("globalData"), D = h(r.modelValue);
    s("update:modelValue", D);
    const p = h(!1), m = h({}), N = h(Be(r)), d = lt([]);
    return be(async () => {
      m.value = await Oe(r, { clearable: !0, props: { value: "value", label: "label", children: "children", checkStrictly: !!r.desc.checkStrictly }, ...Le() }), p.value = !0;
    }), He(
      () => r.desc.options,
      async (c) => {
        typeof c == "string" ? d.splice(0, d.length, ...o[c] || []) : typeof c == "function" ? d.splice(0, d.length, ...await c(r.formData)) : Array.isArray(c) ? c && d && !Dt.isEqual(c, d) && d.splice(0, d.length, ...c) : d.splice(0, d.length);
      },
      { immediate: !0 }
    ), (c, z) => {
      const w = Q("el-cascader");
      return p.value ? (_(), R(w, ne({
        key: 0,
        class: "ElPlusFormCascader-panel"
      }, m.value, Te(N.value), {
        options: d,
        modelValue: D.value,
        "onUpdate:modelValue": z[0] || (z[0] = (x) => D.value = x)
      }), null, 16, ["options", "modelValue"])) : ae("", !0);
    };
  }
});
const Li = /* @__PURE__ */ Ge(Dj, [["__scopeId", "data-v-eaec5973"]]), _j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Li }, Symbol.toStringTag, { value: "Module" })), mj = {
  name: "ElPlusFormCascaderPanel",
  inheritAttrs: !1,
  typeName: "cascaderPanel",
  customOptions: {}
}, hj = /* @__PURE__ */ Me({
  ...mj,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue);
    s("update:modelValue", o);
    const D = h(Object.assign({}, Mn(), r.desc.slots)), p = h({}), m = h(Be(r));
    return be(async () => {
      p.value = await Oe(r, {
        props: { value: "value", label: "label", children: "children" },
        fetchSuggestions(N, d) {
          d([]);
        },
        ...Le()
      });
    }), (N, d) => {
      const c = Q("el-cascader-panel");
      return _(), R(c, ne({ class: "ElPlusFormCascaderPanel-panel" }, p.value, Te(m.value), {
        options: r.desc.options,
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (z) => o.value = z)
      }), en({ _: 2 }, [
        Ye(D.value, (z, w, x) => ({
          name: w,
          fn: B((C) => [
            $e(N.$slots, w, { data: C }, void 0, !0)
          ])
        }))
      ]), 1040, ["options", "modelValue"]);
    };
  }
});
const Ti = /* @__PURE__ */ Ge(hj, [["__scopeId", "data-v-298c9c68"]]), wj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ti }, Symbol.toStringTag, { value: "Module" })), Aj = {
  name: "ElPlusFormCheckbox",
  inheritAttrs: !1,
  typeName: "checkbox",
  customOptions: {}
}, vj = /* @__PURE__ */ Me({
  ...Aj,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue);
    s("update:modelValue", o);
    const D = h({}), p = h(Be(r));
    return be(async () => {
      D.value = await Oe(r, { ...Le() });
    }), (m, N) => {
      const d = Q("el-checkbox"), c = Q("el-checkbox-group");
      return _(), R(c, ne({ class: "ElPlusFormCheckbox-panel" }, D.value, Te(p.value), {
        modelValue: o.value,
        "onUpdate:modelValue": N[0] || (N[0] = (z) => o.value = z)
      }), {
        default: B(() => [
          (_(!0), P(we, null, Ye(m.desc.options, (z) => (_(), R(d, ne({
            key: z.value,
            label: z.value
          }, z.attrs), {
            default: B(() => [
              ke(Ce(z.text), 1)
            ]),
            _: 2
          }, 1040, ["label"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
});
const Ei = /* @__PURE__ */ Ge(vj, [["__scopeId", "data-v-1fad6d4e"]]), Yj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ei }, Symbol.toStringTag, { value: "Module" })), Ij = {
  name: "ElPlusFormCheckboxButton",
  inheritAttrs: !1,
  typeName: "checkboxButton",
  customOptions: {}
}, Lj = /* @__PURE__ */ Me({
  ...Ij,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue);
    s("update:modelValue", o);
    const D = h({}), p = h(Be(r));
    return be(async () => {
      D.value = await Oe(r, { ...Le() });
    }), (m, N) => {
      const d = Q("el-checkbox-button"), c = Q("el-checkbox-group");
      return _(), R(c, ne({ class: "ElPlusFormCheckboxButton-panel" }, D.value, Te(p.value), {
        modelValue: o.value,
        "onUpdate:modelValue": N[0] || (N[0] = (z) => o.value = z)
      }), {
        default: B(() => [
          (_(!0), P(we, null, Ye(m.desc.options, (z) => (_(), R(d, ne({
            key: z.value,
            label: z.value
          }, z.attrs), {
            default: B(() => [
              ke(Ce(z.text), 1)
            ]),
            _: 2
          }, 1040, ["label"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
});
const xi = /* @__PURE__ */ Ge(Lj, [["__scopeId", "data-v-393cd84d"]]), Tj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: xi }, Symbol.toStringTag, { value: "Module" })), Ej = {
  name: "ElPlusFormColor",
  inheritAttrs: !1,
  typeName: "color",
  customOptions: {}
}, xj = /* @__PURE__ */ Me({
  ...Ej,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue), D = h({}), p = h(Be(r));
    return s("update:modelValue", o), be(async () => {
      D.value = await Oe(r, { ...Le() });
    }), (m, N) => {
      const d = Q("el-color-picker");
      return _(), R(d, ne({ class: "ElPlusFormColor-panel" }, D.value, Te(p.value), {
        modelValue: o.value,
        "onUpdate:modelValue": N[0] || (N[0] = (c) => o.value = c)
      }), null, 16, ["modelValue"]);
    };
  }
});
const Ci = /* @__PURE__ */ Ge(xj, [["__scopeId", "data-v-6e010f98"]]), Cj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ci }, Symbol.toStringTag, { value: "Module" })), bj = {
  name: "ElPlusFormDate",
  inheritAttrs: !1,
  typeName: "date",
  customOptions: {}
}, Oj = /* @__PURE__ */ Me({
  ...bj,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(!1), D = h({}), p = h(Be(r)), m = h(r.modelValue);
    return s("update:modelValue", m), be(async () => {
      D.value = await Oe(r, { valueFormat: "YYYY-MM-DD HH:mm:ss", editable: !1, ...Le() }), o.value = !0;
    }), (N, d) => {
      const c = Q("el-date-picker");
      return o.value ? (_(), R(c, ne({
        key: 0,
        class: "ElPlusFormDate-panel"
      }, D.value, Te(p.value), {
        modelValue: m.value,
        "onUpdate:modelValue": d[0] || (d[0] = (z) => m.value = z)
      }), null, 16, ["modelValue"])) : ae("", !0);
    };
  }
});
const bi = /* @__PURE__ */ Ge(Oj, [["__scopeId", "data-v-2b056ca7"]]), Sj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: bi }, Symbol.toStringTag, { value: "Module" })), kj = {
  name: "ElPlusFormDaterange",
  inheritAttrs: !1,
  typeName: "daterange",
  customOptions: {}
}, Bj = /* @__PURE__ */ Me({
  ...kj,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue), D = h(Object.assign({}, Mn(), r.desc.slots)), p = h({}), m = h(Be(r));
    return s("update:modelValue", o), be(async () => {
      p.value = await Oe(r, { type: "daterange", format: "YYYY-MM-DD", valueFormat: "x", editable: !1, ...Le() });
    }), (N, d) => {
      const c = Q("el-date-picker");
      return _(), R(c, ne({ class: "el-plusF-form-daterange-panel" }, p.value, Te(m.value), {
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (z) => o.value = z)
      }), en({ _: 2 }, [
        Ye(D.value, (z, w, x) => ({
          name: w,
          fn: B((C) => [
            $e(N.$slots, w, { data: C }, void 0, !0)
          ])
        }))
      ]), 1040, ["modelValue"]);
    };
  }
});
const Oi = /* @__PURE__ */ Ge(Bj, [["__scopeId", "data-v-21a80cbc"]]), Uj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Oi }, Symbol.toStringTag, { value: "Module" })), Pj = {
  name: "ElPlusFormDatetime",
  inheritAttrs: !1,
  typeName: "datetime",
  customOptions: {}
}, Qj = /* @__PURE__ */ Me({
  ...Pj,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue), D = h({}), p = h(Be(r));
    return s("update:modelValue", o), be(async () => {
      D.value = await Oe(r, { valueFormat: "YYYY-MM-DD HH:mm:ss", ...Le() });
    }), (m, N) => {
      const d = Q("el-date-picker");
      return _(), R(d, ne({ class: "ElPlusFormDatetime-panel" }, D.value, Te(p.value), {
        type: "datetime",
        modelValue: o.value,
        "onUpdate:modelValue": N[0] || (N[0] = (c) => o.value = c)
      }), null, 16, ["modelValue"]);
    };
  }
});
const Si = /* @__PURE__ */ Ge(Qj, [["__scopeId", "data-v-831e254a"]]), Vj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Si }, Symbol.toStringTag, { value: "Module" })), Fj = {
  name: "ElPlusFormDatetimerange",
  inheritAttrs: !1,
  typeName: "datetimerange",
  customOptions: {}
}, Rj = /* @__PURE__ */ Me({
  ...Fj,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue), D = h(Object.assign({}, Mn(), r.desc.slots)), p = h({}), m = h(Be(r));
    return s("update:modelValue", o), be(async () => {
      p.value = await Oe(r, { type: "datetimerange", format: "YYYY-MM-DD HH:mm:ss", valueFormat: "x", editable: !1, ...Le() });
    }), (N, d) => {
      const c = Q("el-date-picker");
      return _(), R(c, ne({ class: "el-plusF-form-datetimerange-panel" }, p.value, Te(m.value), {
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (z) => o.value = z)
      }), en({ _: 2 }, [
        Ye(D.value, (z, w, x) => ({
          name: w,
          fn: B((C) => [
            $e(N.$slots, w, { data: C }, void 0, !0)
          ])
        }))
      ]), 1040, ["modelValue"]);
    };
  }
});
const ki = /* @__PURE__ */ Ge(Rj, [["__scopeId", "data-v-0e3d5450"]]), Wj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ki }, Symbol.toStringTag, { value: "Module" })), gi = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5ET0Plm77moIc8L3RpdGxlPg0KICAgIDxnIGlkPSLkvpvlupTllYbnrqHnkIYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5L6b5bqU5ZWG566h55CGLeS+m+W6lOWVhuWIl+ihqOivpuaDhS0yMOadoemZhOS7tiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4My4wMDAwMDAsIC0xMDUxLjAwMDAwMCkiIGZpbGw9IiMzODc4REUiIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICAgICAgICA8ZyBpZD0i57yW57uELTIx5aSH5Lu9LTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3NS4wMDAwMDAsIDEwNDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9IkRPQ+WbvuaghyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDYgTDEzLDYgQzEzLjE3NjgxMSw2IDEzLjM0NjM4MDMsNi4wNzAyMzc4OSAxMy40NzE0MDQ1LDYuMTk1MjYyMTUgQzEzLjU5NjQyODgsNi4zMjAyODY0IDEzLjY2NjY2NjcsNi40ODk4NTU2OCAxMy42NjY2NjY3LDYuNjY2NjY2NjcgTDEzLjY2NjY2NjcsMTIuMzMzMzMzMyBDMTMuNjY2NjY2NywxMi43MDE1MjMyIDEzLjM2ODE4OTgsMTMgMTMsMTMgTDMsMTMgTDMsMTQuNjY2NjY2NyBDMywxNC43NTUwNzIyIDMuMDM1MTE4OTUsMTQuODM5ODU2OCAzLjA5NzYzMTA3LDE0LjkwMjM2ODkgQzMuMTYwMTQzMiwxNC45NjQ4ODExIDMuMjQ0OTI3ODMsMTUgMy4zMzMzMzMzMywxNSBMMTQuNjY2NjY2NywxNSBDMTQuODUwNzYxNiwxNSAxNSwxNC44NTA3NjE2IDE1LDE0LjY2NjY2NjcgTDE1LDQuODI1MzMzMzMgTDE0Ljg0MjMzMzMsNC42NjY2NjY2NyBMMTIuODY1MzMzMyw0LjY2NjY2NjY3IEMxMi4wMTkyMzMxLDQuNjY2NjY2NjcgMTEuMzMzMzMzMywzLjk4MDc2NjkxIDExLjMzMzMzMzMsMy4xMzQ2NjY2NyBMMTEuMzMzMzMzMywxLjEzNTMzMzMzIEwxMS4xOTg2NjY3LDEgTDMuMzMzMzMzMzMsMSBDMy4yNDQ5Mjc4MywxIDMuMTYwMTQzMiwxLjAzNTExODk1IDMuMDk3NjMxMDcsMS4wOTc2MzEwNyBDMy4wMzUxMTg5NSwxLjE2MDE0MzIgMywxLjI0NDkyNzgzIDMsMS4zMzMzMzMzMyBMMyw2IFogTTIsMTMgTDAuNjY2NjY2NjcyLDEzIEMwLjI5ODQ3NjgzNiwxMyAwLDEyLjcwMTUyMzIgMCwxMi4zMzMzMzMzIEwwLDYuNjY2NjY2NjcgQzAsNi40ODk4NTU2OCAwLjA3MDIzNzg5NDEsNi4zMjAyODY0IDAuMTk1MjYyMTQ3LDYuMTk1MjYyMTUgQzAuMzIwMjg2NDAxLDYuMDcwMjM3ODkgMC40ODk4NTU2NzcsNiAwLjY2NjY2NjY3Miw2IEwyLDYgTDIsMS4zMzMzMzMzMyBDMiwwLjU5Njk1MzY2NSAyLjU5Njk1MzY2LDAgMy4zMzMzMzMzMywwIEwxMS42MTUsMCBMMTYsNC40MTMzMzMzMyBMMTYsMTQuNjY2NjY2NyBDMTYsMTUuNDAzMDQ2MyAxNS40MDMwNDYzLDE2IDE0LjY2NjY2NjcsMTYgTDMuMzMzMzMzMzMsMTYgQzIuNTk2OTUzNjYsMTYgMiwxNS40MDMwNDYzIDIsMTQuNjY2NjY2NyBMMiwxMyBMMiwxMyBaIE0xLjAzLDcuMzgyNjY2NjcgTDEuMDMsMTEuNjY2NjY2NyBMMi40NTczMzMzMywxMS42NjY2NjY3IEMzLjA5MTY2NjY2LDExLjY2NjY2NjcgMy41NjczMzMzMywxMS40NzQ2NjY3IDMuODk1NjY2NjcsMTEuMDkwNjY2NyBDNC4yMDczMzMzNCwxMC43MjQ2NjY3IDQuMzY2LDEwLjIwMjY2NjcgNC4zNjYsOS41MjQ2NjY2NyBDNC4zNjYsOC44NDA2NjY2NyA0LjIwNzMzMzMzLDguMzE4NjY2NjcgMy44OTU2NjY2Nyw3Ljk1ODY2NjY3IEMzLjU2NzY2NjY3LDcuNTc0NjY2NjcgMy4wOTE2NjY2Nyw3LjM4MjY2NjY3IDIuNDU3MzMzMzMsNy4zODI2NjY2NyBMMS4wMyw3LjM4MjY2NjY3IFogTTEuNjcsNy45ODI2NjY2NyBMMi4zMzY2NjY2Nyw3Ljk4MjY2NjY3IEMyLjgyMzMzMzM0LDcuOTgyNjY2NjcgMy4xNzksOC4xMDI2NjY2NyAzLjQwMzMzMzMzLDguMzQ4NjY2NjcgQzMuNjIyLDguNTg4NjY2NjcgMy43MzEzMzMzMyw4Ljk4NDY2NjY3IDMuNzMxMzMzMzMsOS41MjQ2NjY2NyBDMy43MzEzMzMzMywxMC4wNTI2NjY3IDMuNjIyLDEwLjQ0MjY2NjcgMy40MDMsMTAuNjk0NjY2NyBDMy4xNzksMTAuOTQwNjY2NyAyLjgyMzMzMzMzLDExLjA2NjY2NjcgMi4zMzY2NjY2NywxMS4wNjY2NjY3IEwxLjY3LDExLjA2NjY2NjcgTDEuNjcsNy45ODI2NjY2NyBMMS42Nyw3Ljk4MjY2NjY3IFogTTYuNzAxMzMzMzMsNy4yOTg2NjY2NyBDNi4wOTk2NjY2Niw3LjI5ODY2NjY3IDUuNjI5MzMzMzMsNy41MDg2NjY2NyA1LjI5MDMzMzMzLDcuOTQwNjY2NjcgQzQuOTYyLDguMzQ4NjY2NjcgNC44MDM2NjY2Nyw4Ljg3NjY2NjY3IDQuODAzNjY2NjcsOS41MzA2NjY2NyBDNC44MDM2NjY2NywxMC4xNzg2NjY3IDQuOTYyLDEwLjcwNjY2NjcgNS4yOTAzMzMzMywxMS4xMTQ2NjY3IEM1LjYyOTMzMzMzLDExLjUzNDY2NjcgNi4wOTk2NjY2NiwxMS43NTA2NjY3IDYuNzAxMzMzMzMsMTEuNzUwNjY2NyBDNy4yOTczMzMzMywxMS43NTA2NjY3IDcuNzY3NjY2NjYsMTEuNTQwNjY2NyA4LjExMjMzMzMzLDExLjEyMDY2NjcgQzguNDQwMzMzMzMsMTAuNzE4NjY2NyA4LjYwNDMzMzMzLDEwLjE5MDY2NjcgOC42MDQzMzMzMyw5LjUzMDY2NjY3IEM4LjYwNDMzMzMzLDguODcwNjY2NjcgOC40NDAzMzMzMyw4LjMzNjY2NjY3IDguMTEyMzMzMzMsNy45MzQ2NjY2NyBDNy43Njc2NjY2Niw3LjUwODY2NjY3IDcuMjk3MzMzMzMsNy4yOTg2NjY2NyA2LjcwMTMzMzMzLDcuMjk4NjY2NjcgTDYuNzAxMzMzMzMsNy4yOTg2NjY2NyBaIE02LjcwMTMzMzMzLDcuOTE2NjY2NjcgQzcuMTA2LDcuOTE2NjY2NjcgNy40MTc2NjY2Niw4LjA1NDY2NjY3IDcuNjM2MzMzMzMsOC4zNDI2NjY2NyBDNy44NDk2NjY2Niw4LjYzMDY2NjY3IDcuOTU5LDkuMDI2NjY2NjcgNy45NTksOS41MzA2NjY2NyBDNy45NTksMTAuMDM0NjY2NyA3Ljg0OTY2NjY3LDEwLjQyNDY2NjcgNy42MzYzMzMzMywxMC43MDY2NjY3IEM3LjQxNzY2NjY2LDEwLjk4ODY2NjcgNy4xMDYsMTEuMTMyNjY2NyA2LjcwMTMzMzMzLDExLjEzMjY2NjcgQzYuMjk2NjY2NjYsMTEuMTMyNjY2NyA1Ljk3OTMzMzMzLDEwLjk4MjY2NjcgNS43NjA2NjY2NywxMC42ODg2NjY3IEM1LjU0NzMzMzM0LDEwLjQwMDY2NjcgNS40NDMzMzMzMywxMC4wMTY2NjY3IDUuNDQzMzMzMzMsOS41MzA2NjY2NyBDNS40NDMzMzMzMyw5LjAzODY2NjY3IDUuNTQ3MzMzMzMsOC42NTQ2NjY2NyA1Ljc2MDY2NjY3LDguMzY2NjY2NjcgQzUuOTg0NjY2NjcsOC4wNjY2NjY2NyA2LjI5NjY2NjY3LDcuOTE2NjY2NjcgNi43MDEzMzMzMyw3LjkxNjY2NjY3IEw2LjcwMTMzMzMzLDcuOTE2NjY2NjcgWiBNMTAuOTAxMzMzMyw3LjI5ODY2NjY3IEMxMC4yNzgsNy4yOTg2NjY2NyA5LjgwMiw3LjUyMDY2NjY3IDkuNDc0LDcuOTc2NjY2NjcgQzkuMTg0LDguMzcyNjY2NjcgOS4wNDIsOC44OTQ2NjY2NyA5LjA0Miw5LjUzMDY2NjY3IEM5LjA0MiwxMC4xNzg2NjY3IDkuMTc4NjY2NjcsMTAuNjk0NjY2NyA5LjQ1NzY2NjY3LDExLjA3ODY2NjcgQzkuNzc0NjY2NjcsMTEuNTIyNjY2NyAxMC4yNjEzMzMzLDExLjc1MDY2NjcgMTAuOTEyMzMzMywxMS43NTA2NjY3IEMxMS4zMzMzMzMzLDExLjc1MDY2NjcgMTEuNjk0MzMzMywxMS42MTg2NjY3IDExLjk5NSwxMS4zNTQ2NjY3IEMxMi4zMTc2NjY3LDExLjA3MjY2NjcgMTIuNTIsMTAuNjgyNjY2NyAxMi42MDc2NjY3LDEwLjE3ODY2NjcgTDExLjk4NDMzMzMsMTAuMTc4NjY2NyBDMTEuOTA3NjY2NywxMC41MDI2NjY3IDExLjc3NjMzMzMsMTAuNzQ4NjY2NyAxMS41OTAzMzMzLDEwLjkxMDY2NjcgQzExLjQxNTMzMzMsMTEuMDU0NjY2NyAxMS4xODU2NjY3LDExLjEzMjY2NjcgMTAuOTA3LDExLjEzMjY2NjcgQzEwLjQ4MDMzMzMsMTEuMTMyNjY2NyAxMC4xNjMsMTAuOTgyNjY2NyA5Ljk2MDY2NjY3LDEwLjY5NDY2NjcgQzkuNzc0NjY2NjcsMTAuNDI0NjY2NyA5LjY4MTY2NjY3LDEwLjAzNDY2NjcgOS42ODE2NjY2Nyw5LjUzMDY2NjY3IEM5LjY4MTY2NjY3LDkuMDM4NjY2NjcgOS43NzUsOC42NTQ2NjY2NyA5Ljk2NjMzMzMzLDguMzc4NjY2NjcgQzEwLjE3NCw4LjA2NjY2NjY3IDEwLjQ4MDMzMzMsNy45MTY2NjY2NyAxMC44OTAzMzMzLDcuOTE2NjY2NjcgQzExLjE2MzY2NjcsNy45MTY2NjY2NyAxMS4zODgsNy45NzY2NjY2NyAxMS41NjMsOC4xMDg2NjY2NyBDMTEuNzQzNjY2Nyw4LjI0MDY2NjY3IDExLjg2NCw4LjQ0NDY2NjY3IDExLjkyOTY2NjcsOC43MjY2NjY2NyBMMTIuNTUzLDguNzI2NjY2NjcgQzEyLjQ5Myw4LjI5NDY2NjY3IDEyLjMyMyw3Ljk0NjY2NjY3IDEyLjAzOSw3LjY5NDY2NjY3IEMxMS43NDM2NjY3LDcuNDMwNjY2NjcgMTEuMzYwNjY2Nyw3LjI5ODY2NjY3IDEwLjkwMTMzMzMsNy4yOTg2NjY2NyBMMTAuOTAxMzMzMyw3LjI5ODY2NjY3IFoiIGlkPSLlvaLnirYiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=", Gj = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT7pgJrnlKjmlofku7Y8L3RpdGxlPg0KICAgIDxnIGlkPSLkvpvlupTllYbnrqHnkIYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5L6b5bqU5ZWG566h55CGLeS+m+W6lOWVhuWIl+ihqOivpuaDhS0yMOadoemZhOS7tiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4My4wMDAwMDAsIC0xMDkxLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICAgICAgICA8ZyBpZD0i57yW57uELTIx5aSH5Lu9LTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzUuMDAwMDAwLCAxMDg1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSLpgJrnlKjmlofku7YiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuNjE1LDAgTDE2LDQuNDEzMzMzMzMgTDE2LDE0LjY2NjY2NjcgQzE2LDE1LjQwMzA0NjMgMTUuNDAzMDQ2MywxNiAxNC42NjY2NjY3LDE2IEwzLjMzMzMzMzMzLDE2IEMyLjU5Njk1MzY2LDE2IDIsMTUuNDAzMDQ2MyAyLDE0LjY2NjY2NjcgTDIsMTMgTDAuNjY2NjY2NjcyLDEzIEMwLjI5ODQ3NjgzNiwxMyAwLDEyLjcwMTUyMzIgMCwxMi4zMzMzMzMzIEwwLDYuNjY2NjY2NjcgQzAsNi40ODk4NTU2OCAwLjA3MDIzNzg5NDEsNi4zMjAyODY0IDAuMTk1MjYyMTQ3LDYuMTk1MjYyMTUgQzAuMzIwMjg2NDAxLDYuMDcwMjM3ODkgMC40ODk4NTU2NzcsNiAwLjY2NjY2NjY3Miw2IEwyLDYgTDIsMS4zMzMzMzMzMyBDMiwwLjU5Njk1MzY2NSAyLjU5Njk1MzY2LDAgMy4zMzMzMzMzMywwIEwxMS42MTUsMCBaIE0xMS4xOTg2NjY3LDEgTDMuMzMzMzMzMzMsMSBDMy4yNDQ5Mjc4MywxIDMuMTYwMTQzMiwxLjAzNTExODk1IDMuMDk3NjMxMDcsMS4wOTc2MzEwNyBDMy4wMzUxMTg5NSwxLjE2MDE0MzIgMywxLjI0NDkyNzgzIDMsMS4zMzMzMzMzMyBMMyw2IEwxMyw2IEMxMy4xNzY4MTEsNiAxMy4zNDYzODAzLDYuMDcwMjM3ODkgMTMuNDcxNDA0NSw2LjE5NTI2MjE1IEMxMy41OTY0Mjg4LDYuMzIwMjg2NCAxMy42NjY2NjY3LDYuNDg5ODU1NjggMTMuNjY2NjY2Nyw2LjY2NjY2NjY3IEwxMy42NjY2NjY3LDEyLjMzMzMzMzMgQzEzLjY2NjY2NjcsMTIuNzAxNTIzMiAxMy4zNjgxODk4LDEzIDEzLDEzIEwzLDEzIEwzLDE0LjY2NjY2NjcgQzMsMTQuNzU1MDcyMiAzLjAzNTExODk1LDE0LjgzOTg1NjggMy4wOTc2MzEwNywxNC45MDIzNjg5IEMzLjE2MDE0MzIsMTQuOTY0ODgxMSAzLjI0NDkyNzgzLDE1IDMuMzMzMzMzMzMsMTUgTDE0LjY2NjY2NjcsMTUgQzE0Ljg1MDc2MTYsMTUgMTUsMTQuODUwNzYxNiAxNSwxNC42NjY2NjY3IEwxNSw0LjgyNTMzMzMzIEwxNC44NDIzMzMzLDQuNjY2NjY2NjcgTDEyLjg2NTMzMzMsNC42NjY2NjY2NyBDMTIuMDE5MjMzMSw0LjY2NjY2NjY3IDExLjMzMzMzMzMsMy45ODA3NjY5MSAxMS4zMzMzMzMzLDMuMTM0NjY2NjcgTDExLjMzMzMzMzMsMS4xMzU2NjY2NyBMMTEuMTk4NjY2NywxIFoiIGlkPSLlvaLnirYiIGZpbGw9IiMxODkwRkYiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkZJTEUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNjAwMDAwLCA3LjQwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkYiIHBvaW50cz0iMi4zOTQgMC41OTQgMC42NzIgMC41OTQgMC42NzIgMS44MDYgMi4yNzQgMS44MDYgMi4yNzQgMi4zOTQgMC42NzIgMi4zOTQgMC42NzIgNC4xNjQgMCA0LjE2NCAwIDAgMi4zOTQgMCI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkkiIHBvaW50cz0iMy4xODYgNC4xNjQgMy4xODYgMCAzLjg1OCAwIDMuODU4IDQuMTY0Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iTCIgcG9pbnRzPSI1LjU3NCAzLjU2NCA3LjMyNiAzLjU2NCA3LjMyNiA0LjE2NCA0LjkwMiA0LjE2NCA0LjkwMiAwIDUuNTc0IDAiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJFIiBwb2ludHM9IjguNjY0IDMuNTY0IDEwLjUxMiAzLjU2NCAxMC41MTIgNC4xNjQgNy45OTIgNC4xNjQgNy45OTIgMCAxMC4zODYgMCAxMC4zODYgMC41OTQgOC42NjQgMC41OTQgOC42NjQgMS43MjggMTAuMjY2IDEuNzI4IDEwLjI2NiAyLjI5MiA4LjY2NCAyLjI5MiI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+", Ni = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5KUEVH5Zu+5qCHPC90aXRsZT4NCiAgICA8ZyBpZD0i5L6b5bqU5ZWG566h55CGIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IuS+m+W6lOWVhueuoeeQhi3kvpvlupTllYbliJfooajor6bmg4UtMjDmnaHpmYTku7YiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zODMuMDAwMDAwLCAtNzMxLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICAgICAgICA8ZyBpZD0i57yW57uELTIx5aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzUuMDAwMDAwLCA3MjUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9IkpQRUflm77moIciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuNjE1LDAgTDE2LDQuNDEzMzMzMzMgTDE2LDE0LjY2NjY2NjcgQzE2LDE1LjQwMzA0NjMgMTUuNDAzMDQ2MywxNiAxNC42NjY2NjY3LDE2IEwzLjMzMzMzMzMzLDE2IEMyLjU5Njk1MzY2LDE2IDIsMTUuNDAzMDQ2MyAyLDE0LjY2NjY2NjcgTDIsMTMgTDAuNjY2NjY2NjcyLDEzIEMwLjI5ODQ3NjgzNiwxMyAwLDEyLjcwMTUyMzIgMCwxMi4zMzMzMzMzIEwwLDYuNjY2NjY2NjcgQzAsNi40ODk4NTU2OCAwLjA3MDIzNzg5NDEsNi4zMjAyODY0IDAuMTk1MjYyMTQ3LDYuMTk1MjYyMTUgQzAuMzIwMjg2NDAxLDYuMDcwMjM3ODkgMC40ODk4NTU2NzcsNiAwLjY2NjY2NjY3Miw2IEwyLDYgTDIsMS4zMzMzMzMzMyBDMiwwLjU5Njk1MzY2NSAyLjU5Njk1MzY2LDAgMy4zMzMzMzMzMywwIEwxMS42MTUsMCBaIE0xMS4xOTg2NjY3LDEgTDMuMzMzMzMzMzMsMSBDMy4yNDQ5Mjc4MywxIDMuMTYwMTQzMiwxLjAzNTExODk1IDMuMDk3NjMxMDcsMS4wOTc2MzEwNyBDMy4wMzUxMTg5NSwxLjE2MDE0MzIgMywxLjI0NDkyNzgzIDMsMS4zMzMzMzMzMyBMMyw2IEwxMyw2IEMxMy4xNzY4MTEsNiAxMy4zNDYzODAzLDYuMDcwMjM3ODkgMTMuNDcxNDA0NSw2LjE5NTI2MjE1IEMxMy41OTY0Mjg4LDYuMzIwMjg2NCAxMy42NjY2NjY3LDYuNDg5ODU1NjggMTMuNjY2NjY2Nyw2LjY2NjY2NjY3IEwxMy42NjY2NjY3LDEyLjMzMzMzMzMgQzEzLjY2NjY2NjcsMTIuNzAxNTIzMiAxMy4zNjgxODk4LDEzIDEzLDEzIEwzLDEzIEwzLDE0LjY2NjY2NjcgQzMsMTQuNzU1MDcyMiAzLjAzNTExODk1LDE0LjgzOTg1NjggMy4wOTc2MzEwNywxNC45MDIzNjg5IEMzLjE2MDE0MzIsMTQuOTY0ODgxMSAzLjI0NDkyNzgzLDE1IDMuMzMzMzMzMzMsMTUgTDE0LjY2NjY2NjcsMTUgQzE0Ljg1MDc2MTYsMTUgMTUsMTQuODUwNzYxNiAxNSwxNC42NjY2NjY3IEwxNSw0LjgyNTMzMzMzIEwxNC44NDIzMzMzLDQuNjY2NjY2NjcgTDEyLjg2NTMzMzMsNC42NjY2NjY2NyBDMTIuMDE5MjMzMSw0LjY2NjY2NjY3IDExLjMzMzMzMzMsMy45ODA3NjY5MSAxMS4zMzMzMzMzLDMuMTM0NjY2NjcgTDExLjMzMzMzMzMsMS4xMzU2NjY2NyBMMTEuMTk4NjY2NywxIFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGNjc1MDAiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIuNDMyMzMzMzMsNy4zODI2NjY2NyBMMi45OTUsNy4zODI2NjY2NyBMMi45OTUsMTAuMjgwNjY2NyBDMi45OTUsMTAuNzcyNjY2NyAyLjkxMywxMS4xMzI2NjY3IDIuNzQ5NjY2NjcsMTEuMzcyNjY2NyBDMi41NjcsMTEuNjI0NjY2NyAyLjI3ODY2NjY3LDExLjc1MDY2NjcgMS44Nzk2NjY2NywxMS43NTA2NjY3IEMxLjUzMzMzMzM0LDExLjc1MDY2NjcgMS4yNjksMTEuNjMwNjY2NyAxLjA5MSwxMS4zOTA2NjY3IEMwLjkwODMzMzMyOCwxMS4xNTA2NjY3IDAuODE3LDEwLjgyMDY2NjcgMC44MTcsMTAuNDAwNjY2NyBMMC44MTcsMTAuMjYyNjY2NyBMMS4zNzkzMzMzMywxMC4yNjI2NjY3IEwxLjM3OTMzMzMzLDEwLjM5NDY2NjcgQzEuMzc5MzMzMzMsMTAuODg2NjY2NyAxLjU0NzY2NjY2LDExLjEzMjY2NjcgMS44ODkzMzMzMywxMS4xMzI2NjY3IEMyLjA3NjY2NjY2LDExLjEzMjY2NjcgMi4yMTYsMTEuMDYwNjY2NyAyLjMwMjY2NjY3LDEwLjkyMjY2NjcgQzIuMzg5MzMzMzQsMTAuNzg0NjY2NyAyLjQzMjY2NjY3LDEwLjU2MjY2NjcgMi40MzI2NjY2NywxMC4yNTY2NjY3IEwyLjQzMjY2NjY3LDcuMzgyNjY2NjcgTDIuNDMyMzMzMzMsNy4zODI2NjY2NyBaIE0zLjY2OCw3LjM4MjY2NjY3IEw1LjA5MSw3LjM4MjY2NjY3IEM1LjkxNzY2NjY3LDcuMzgyNjY2NjcgNi4zMzYsNy44MjA2NjY2NyA2LjMzNiw4LjY5NjY2NjY3IEM2LjMzNiw5LjU3ODY2NjY3IDUuOTE4LDEwLjAyMjY2NjcgNS4wODEzMzMzMywxMC4wMjI2NjY3IEw0LjIzMDMzMzMzLDEwLjAyMjY2NjcgTDQuMjMwMzMzMzMsMTEuNjY2NjY2NyBMMy42NjgsMTEuNjY2NjY2NyBMMy42NjgsNy4zODI2NjY2NyBaIE00LjIzMDMzMzMzLDcuOTgyNjY2NjcgTDQuMjMwMzMzMzMsOS40MjI2NjY2NyBMNS4wNDc2NjY2Nyw5LjQyMjY2NjY3IEM1LjI5NzY2NjY3LDkuNDIyNjY2NjcgNS40ODAzMzMzNCw5LjM2MjY2NjY3IDUuNTk1NjY2NjcsOS4yNTQ2NjY2NyBDNS43MTEzMzMzNCw5LjE0MDY2NjY3IDUuNzY5LDguOTU0NjY2NjcgNS43NjksOC42OTY2NjY2NyBDNS43NjksOC40Mzg2NjY2NyA1LjcwNjMzMzMzLDguMjU4NjY2NjcgNS41OTEsOC4xNTA2NjY2NyBDNS40NzU2NjY2Nyw4LjAzNjY2NjY3IDUuMjkzLDcuOTgyNjY2NjcgNS4wNDc2NjY2Nyw3Ljk4MjY2NjY3IEw0LjIzMDMzMzMzLDcuOTgyNjY2NjcgTDQuMjMwMzMzMzMsNy45ODI2NjY2NyBaIE02LjgxNyw3LjM4MjY2NjY3IEw5LjI5Myw3LjM4MjY2NjY3IEw5LjI5Myw3Ljk4MjY2NjY3IEw3LjM3OTY2NjY3LDcuOTgyNjY2NjcgTDcuMzc5NjY2NjcsOS4xNzA2NjY2NyBMOS4xNzczMzMzMyw5LjE3MDY2NjY3IEw5LjE3NzMzMzMzLDkuNzcwNjY2NjcgTDcuMzc5MzMzMzMsOS43NzA2NjY2NyBMNy4zNzkzMzMzMywxMS4wNjY2NjY3IEw5LjM3NDY2NjY3LDExLjA2NjY2NjcgTDkuMzc0NjY2NjcsMTEuNjY2NjY2NyBMNi44MTY2NjY2NywxMS42NjY2NjY3IEw2LjgxNjY2NjY3LDcuMzgyNjY2NjcgTDYuODE3LDcuMzgyNjY2NjcgWiBNMTEuMzkzNjY2Nyw3LjI5ODY2NjY3IEMxMS44MzYsNy4yOTg2NjY2NyAxMi4xODIzMzMzLDcuNDE4NjY2NjcgMTIuNDM3LDcuNjY0NjY2NjcgQzEyLjY4MjMzMzMsNy45MDQ2NjY2NyAxMi44MzYsOC4yNTg2NjY2NyAxMi44OTg2NjY3LDguNzM4NjY2NjcgTDEyLjMzMTMzMzMsOC43Mzg2NjY2NyBDMTIuMjgzMzMzMyw4LjQ2MjY2NjY3IDEyLjE3NzMzMzMsOC4yNTg2NjY2NyAxMi4wMjM2NjY3LDguMTIwNjY2NjcgQzExLjg2NSw3Ljk4MjY2NjY3IDExLjY1MzY2NjcsNy45MTY2NjY2NyAxMS4zOTM2NjY3LDcuOTE2NjY2NjcgQzExLjA3MTY2NjcsNy45MTY2NjY2NyAxMC44MTcsOC4wNDg2NjY2NyAxMC42MjkzMzMzLDguMzI0NjY2NjcgQzEwLjQyMjY2NjcsOC42MTI2NjY2NyAxMC4zMjE2NjY3LDkuMDE0NjY2NjcgMTAuMzIxNjY2Nyw5LjU0MjY2NjY3IEMxMC4zMjE2NjY3LDEwLjA0NjY2NjcgMTAuNDEzLDEwLjQzNjY2NjcgMTAuNTk1NjY2NywxMC43MDY2NjY3IEMxMC43OTMsMTAuOTk0NjY2NyAxMS4xMDA2NjY3LDExLjEzODY2NjcgMTEuNTE5LDExLjEzODY2NjcgQzExLjY4MjMzMzMsMTEuMTM4NjY2NyAxMS44MzYsMTEuMTE0NjY2NyAxMS45ODAzMzMzLDExLjA2NjY2NjcgQzEyLjExMjYzMjcsMTEuMDE4OTk2NCAxMi4yMzcyNzY1LDEwLjk1MjI5NTEgMTIuMzUwMzMzMywxMC44Njg2NjY3IEwxMi4zNTAzMzMzLDkuOTg2NjY2NjcgTDExLjQ0Miw5Ljk4NjY2NjY3IEwxMS40NDIsOS4zODY2NjY2NyBMMTIuOTEzLDkuMzg2NjY2NjcgTDEyLjkxMywxMS4xOTg2NjY3IEMxMi43MzM4NjQ2LDExLjM3NDg2NzIgMTIuNTIxMzg3MiwxMS41MTM1NzI0IDEyLjI4OCwxMS42MDY2NjY3IEMxMi4wMzgsMTEuNzAyNjY2NyAxMS43NjQsMTEuNzUwNjY2NyAxMS40NTYzMzMzLDExLjc1MDY2NjcgQzEwLjkwODMzMzMsMTEuNzUwNjY2NyAxMC40ODUsMTEuNTM0NjY2NyAxMC4xODIzMzMzLDExLjEwMjY2NjcgQzkuODk4NjY2NjYsMTAuNzAwNjY2NyA5Ljc1OSwxMC4xNzg2NjY3IDkuNzU5LDkuNTQyNjY2NjcgQzkuNzU5LDguOTAwNjY2NjcgOS44OTg2NjY2Nyw4LjM3MjY2NjY3IDEwLjE4MjMzMzMsNy45NTg2NjY2NyBDMTAuNDgwMzMzMyw3LjUxNDY2NjY3IDEwLjg4NDMzMzMsNy4yOTg2NjY2NyAxMS4zOTM2NjY3LDcuMjk4NjY2NjcgTDExLjM5MzY2NjcsNy4yOTg2NjY2NyBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+", Zj = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5QREblm77moIc8L3RpdGxlPg0KICAgIDxnIGlkPSLkvpvlupTllYbnrqHnkIYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5L6b5bqU5ZWG566h55CGLeS+m+W6lOWVhuWIl+ihqOivpuaDhS0yMOadoemZhOS7tiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4My4wMDAwMDAsIC02OTEuMDAwMDAwKSIgZmlsbD0iI0VBNDMxOCIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3NS4wMDAwMDAsIDY4NS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iUERG5Zu+5qCHIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgNi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMsNiBMMTMsNiBDMTMuMTc2ODExLDYgMTMuMzQ2MzgwMyw2LjA3MDIzNzg5IDEzLjQ3MTQwNDUsNi4xOTUyNjIxNSBDMTMuNTk2NDI4OCw2LjMyMDI4NjQgMTMuNjY2NjY2Nyw2LjQ4OTg1NTY4IDEzLjY2NjY2NjcsNi42NjY2NjY2NyBMMTMuNjY2NjY2NywxMi4zMzMzMzMzIEMxMy42NjY2NjY3LDEyLjcwMTUyMzIgMTMuMzY4MTg5OCwxMyAxMywxMyBMMywxMyBMMywxNC42NjY2NjY3IEMzLDE0Ljc1NTA3MjIgMy4wMzUxMTg5NSwxNC44Mzk4NTY4IDMuMDk3NjMxMDcsMTQuOTAyMzY4OSBDMy4xNjAxNDMyLDE0Ljk2NDg4MTEgMy4yNDQ5Mjc4MywxNSAzLjMzMzMzMzMzLDE1IEwxNC42NjY2NjY3LDE1IEMxNC44NTA3NjE2LDE1IDE1LDE0Ljg1MDc2MTYgMTUsMTQuNjY2NjY2NyBMMTUsNC44MjUzMzMzMyBMMTQuODQyMzMzMyw0LjY2NjY2NjY3IEwxMi44NjUzMzMzLDQuNjY2NjY2NjcgQzEyLjAxOTIzMzEsNC42NjY2NjY2NyAxMS4zMzMzMzMzLDMuOTgwNzY2OTEgMTEuMzMzMzMzMywzLjEzNDY2NjY3IEwxMS4zMzMzMzMzLDEuMTM1MzMzMzMgTDExLjE5ODY2NjcsMSBMMy4zMzMzMzMzMywxIEMzLjI0NDkyNzgzLDEgMy4xNjAxNDMyLDEuMDM1MTE4OTUgMy4wOTc2MzEwNywxLjA5NzYzMTA3IEMzLjAzNTExODk1LDEuMTYwMTQzMiAzLDEuMjQ0OTI3ODMgMywxLjMzMzMzMzMzIEwzLDYgWiBNMiwxMyBMMC42NjY2NjY2NzIsMTMgQzAuMjk4NDc2ODM2LDEzIDAsMTIuNzAxNTIzMiAwLDEyLjMzMzMzMzMgTDAsNi42NjY2NjY2NyBDMCw2LjQ4OTg1NTY4IDAuMDcwMjM3ODk0MSw2LjMyMDI4NjQgMC4xOTUyNjIxNDcsNi4xOTUyNjIxNSBDMC4zMjAyODY0MDEsNi4wNzAyMzc4OSAwLjQ4OTg1NTY3Nyw2IDAuNjY2NjY2NjcyLDYgTDIsNiBMMiwxLjMzMzMzMzMzIEMyLDAuNTk2OTUzNjY1IDIuNTk2OTUzNjYsMCAzLjMzMzMzMzMzLDAgTDExLjYxNSwwIEwxNiw0LjQxMzMzMzMzIEwxNiwxNC42NjY2NjY3IEMxNiwxNS40MDMwNDYzIDE1LjQwMzA0NjMsMTYgMTQuNjY2NjY2NywxNiBMMy4zMzMzMzMzMywxNiBDMi41OTY5NTM2NiwxNiAyLDE1LjQwMzA0NjMgMiwxNC42NjY2NjY3IEwyLDEzIEwyLDEzIFogTTEuMzgyMzMzMzMsNy4zODI2NjY2NyBMMS4zODIzMzMzMywxMS42NjY2NjY3IEwyLjA4NDMzMzMzLDExLjY2NjY2NjcgTDIuMDg0MzMzMzMsMTAuMDIyNjY2NyBMMy4xNDYzMzMzMywxMC4wMjI2NjY3IEM0LjE5MDMzMzMzLDEwLjAyMjY2NjcgNC43MTIzMzMzMyw5LjU3ODY2NjY3IDQuNzEyMzMzMzMsOC42OTY2NjY2NyBDNC43MTIzMzMzMyw3LjgyMDY2NjY3IDQuMTkwMzMzMzMsNy4zODI2NjY2NyAzLjE1ODMzMzMzLDcuMzgyNjY2NjcgTDEuMzgyMzMzMzMsNy4zODI2NjY2NyBaIE0yLjA4NDMzMzMzLDcuOTgyNjY2NjcgTDMuMTA0MzMzMzMsNy45ODI2NjY2NyBDMy40MTAzMzMzMyw3Ljk4MjY2NjY3IDMuNjM4MzMzMzMsOC4wMzY2NjY2NyAzLjc4MjMzMzMzLDguMTUwNjY2NjcgQzMuOTI2MzMzMzMsOC4yNTg2NjY2NyA0LjAwNDMzMzMzLDguNDM4NjY2NjcgNC4wMDQzMzMzMyw4LjY5NjY2NjY3IEM0LjAwNDMzMzMzLDguOTU0NjY2NjcgMy45MzIzMzMzMyw5LjE0MDY2NjY3IDMuNzg4MzMzMzMsOS4yNTQ2NjY2NyBDMy42NDQzMzMzMyw5LjM2MjY2NjY3IDMuNDE2MzMzMzMsOS40MjI2NjY2NyAzLjEwNDMzMzMzLDkuNDIyNjY2NjcgTDIuMDg0MzMzMzMsOS40MjI2NjY2NyBMMi4wODQzMzMzMyw3Ljk4MjY2NjY3IEwyLjA4NDMzMzMzLDcuOTgyNjY2NjcgWiBNNS4zMTIzMzMzMyw3LjM4MjY2NjY3IEw1LjMxMjMzMzMzLDExLjY2NjY2NjcgTDYuODc4MzMzMzMsMTEuNjY2NjY2NyBDNy41NzQzMzMzMywxMS42NjY2NjY3IDguMDk2MzMzMzMsMTEuNDc0NjY2NyA4LjQ1NjMzMzMzLDExLjA5MDY2NjcgQzguNzk4MzMzMzMsMTAuNzI0NjY2NyA4Ljk3MjMzMzMzLDEwLjIwMjY2NjcgOC45NzIzMzMzMyw5LjUyNDY2NjY3IEM4Ljk3MjMzMzMzLDguODQwNjY2NjcgOC43OTgzMzMzMyw4LjMxODY2NjY3IDguNDU2MzMzMzMsNy45NTg2NjY2NyBDOC4wOTYzMzMzMyw3LjU3NDY2NjY3IDcuNTc0MzMzMzMsNy4zODI2NjY2NyA2Ljg3ODMzMzMzLDcuMzgyNjY2NjcgTDUuMzEyMzMzMzMsNy4zODI2NjY2NyBaIE02LjAxNDMzMzMzLDcuOTgyNjY2NjcgTDYuNzQ2MzMzMzMsNy45ODI2NjY2NyBDNy4yODAzMzMzMyw3Ljk4MjY2NjY3IDcuNjcwMzMzMzMsOC4xMDI2NjY2NyA3LjkxNjMzMzMzLDguMzQ4NjY2NjcgQzguMTU2MzMzMzMsOC41ODg2NjY2NyA4LjI3NjMzMzMzLDguOTg0NjY2NjcgOC4yNzYzMzMzMyw5LjUyNDY2NjY3IEM4LjI3NjMzMzMzLDEwLjA1MjY2NjcgOC4xNTYzMzMzMywxMC40NDI2NjY3IDcuOTE2MzMzMzMsMTAuNjk0NjY2NyBDNy42NzAzMzMzMywxMC45NDA2NjY3IDcuMjgwMzMzMzMsMTEuMDY2NjY2NyA2Ljc0NjMzMzMzLDExLjA2NjY2NjcgTDYuMDE0MzMzMzMsMTEuMDY2NjY2NyBMNi4wMTQzMzMzMyw3Ljk4MjY2NjY3IEw2LjAxNDMzMzMzLDcuOTgyNjY2NjcgWiBNOS42MzIzMzMzMyw3LjM4MjY2NjY3IEw5LjYzMjMzMzMzLDExLjY2NjY2NjcgTDEwLjMzNDMzMzMsMTEuNjY2NjY2NyBMMTAuMzM0MzMzMyw5Ljc3MDY2NjY3IEwxMi40MjgzMzMzLDkuNzcwNjY2NjcgTDEyLjQyODMzMzMsOS4xNzA2NjY2NyBMMTAuMzM0MzMzMyw5LjE3MDY2NjY3IEwxMC4zMzQzMzMzLDcuOTgyNjY2NjcgTDEyLjU1NDMzMzMsNy45ODI2NjY2NyBMMTIuNTU0MzMzMyw3LjM4MjY2NjY3IEw5LjYzMjMzMzMzLDcuMzgyNjY2NjcgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==", Hj = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5QTkflm77moIc8L3RpdGxlPg0KICAgIDxnIGlkPSLkvpvlupTllYbnrqHnkIYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5L6b5bqU5ZWG566h55CGLeS+m+W6lOWVhuWIl+ihqOivpuaDhS0yMOadoemZhOS7tiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4My4wMDAwMDAsIC05NzEuMDAwMDAwKSIgZmlsbD0iI0ZDQ0MwMCIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMjHlpIfku70tNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc1LjAwMDAwMCwgOTY1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJQTkflm77moIciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMyw2IEwxMyw2IEMxMy4xNzY4MTEsNiAxMy4zNDYzODAzLDYuMDcwMjM3ODkgMTMuNDcxNDA0NSw2LjE5NTI2MjE1IEMxMy41OTY0Mjg4LDYuMzIwMjg2NCAxMy42NjY2NjY3LDYuNDg5ODU1NjggMTMuNjY2NjY2Nyw2LjY2NjY2NjY3IEwxMy42NjY2NjY3LDEyLjMzMzMzMzMgQzEzLjY2NjY2NjcsMTIuNzAxNTIzMiAxMy4zNjgxODk4LDEzIDEzLDEzIEwzLDEzIEwzLDE0LjY2NjY2NjcgQzMsMTQuNzU1MDcyMiAzLjAzNTExODk1LDE0LjgzOTg1NjggMy4wOTc2MzEwNywxNC45MDIzNjg5IEMzLjE2MDE0MzIsMTQuOTY0ODgxMSAzLjI0NDkyNzgzLDE1IDMuMzMzMzMzMzMsMTUgTDE0LjY2NjY2NjcsMTUgQzE0Ljg1MDc2MTYsMTUgMTUsMTQuODUwNzYxNiAxNSwxNC42NjY2NjY3IEwxNSw0LjgyNTMzMzMzIEwxNC44NDIzMzMzLDQuNjY2NjY2NjcgTDEyLjg2NTMzMzMsNC42NjY2NjY2NyBDMTIuMDE5MjMzMSw0LjY2NjY2NjY3IDExLjMzMzMzMzMsMy45ODA3NjY5MSAxMS4zMzMzMzMzLDMuMTM0NjY2NjcgTDExLjMzMzMzMzMsMS4xMzUzMzMzMyBMMTEuMTk4NjY2NywxIEwzLjMzMzMzMzMzLDEgQzMuMjQ0OTI3ODMsMSAzLjE2MDE0MzIsMS4wMzUxMTg5NSAzLjA5NzYzMTA3LDEuMDk3NjMxMDcgQzMuMDM1MTE4OTUsMS4xNjAxNDMyIDMsMS4yNDQ5Mjc4MyAzLDEuMzMzMzMzMzMgTDMsNiBaIE0yLDEzIEwwLjY2NjY2NjY3MiwxMyBDMC4yOTg0NzY4MzYsMTMgMCwxMi43MDE1MjMyIDAsMTIuMzMzMzMzMyBMMCw2LjY2NjY2NjY3IEMwLDYuNDg5ODU1NjggMC4wNzAyMzc4OTQxLDYuMzIwMjg2NCAwLjE5NTI2MjE0Nyw2LjE5NTI2MjE1IEMwLjMyMDI4NjQwMSw2LjA3MDIzNzg5IDAuNDg5ODU1Njc3LDYgMC42NjY2NjY2NzIsNiBMMiw2IEwyLDEuMzMzMzMzMzMgQzIsMC41OTY5NTM2NjUgMi41OTY5NTM2NiwwIDMuMzMzMzMzMzMsMCBMMTEuNjE1LDAgTDE2LDQuNDEzMzMzMzMgTDE2LDE0LjY2NjY2NjcgQzE2LDE1LjQwMzA0NjMgMTUuNDAzMDQ2MywxNiAxNC42NjY2NjY3LDE2IEwzLjMzMzMzMzMzLDE2IEMyLjU5Njk1MzY2LDE2IDIsMTUuNDAzMDQ2MyAyLDE0LjY2NjY2NjcgTDIsMTMgTDIsMTMgWiBNMS40NDIzMzMzMyw3LjM4MjY2NjY3IEwxLjQ0MjMzMzMzLDExLjY2NjY2NjcgTDIuMDcyMzMzMzMsMTEuNjY2NjY2NyBMMi4wNzIzMzMzMywxMC4wMjI2NjY3IEwzLjAyNTY2NjY3LDEwLjAyMjY2NjcgQzMuOTYzLDEwLjAyMjY2NjcgNC40MzEzMzMzMyw5LjU3ODY2NjY3IDQuNDMxMzMzMzMsOC42OTY2NjY2NyBDNC40MzEzMzMzMyw3LjgyMDY2NjY3IDMuOTYzLDcuMzgyNjY2NjcgMy4wMzYzMzMzMyw3LjM4MjY2NjY3IEwxLjQ0MjMzMzMzLDcuMzgyNjY2NjcgWiBNMi4wNzIzMzMzMyw3Ljk4MjY2NjY3IEwyLjk4OCw3Ljk4MjY2NjY3IEMzLjI2MjY2NjY3LDcuOTgyNjY2NjcgMy40NjczMzMzMyw4LjAzNjY2NjY3IDMuNTk2NjY2NjcsOC4xNTA2NjY2NyBDMy43MjYsOC4yNTg2NjY2NyAzLjc5Niw4LjQzODY2NjY3IDMuNzk2LDguNjk2NjY2NjcgQzMuNzk2LDguOTU0NjY2NjcgMy43MzEzMzMzMyw5LjE0MDY2NjY3IDMuNjAyLDkuMjU0NjY2NjcgQzMuNDcyNjY2NjcsOS4zNjI2NjY2NyAzLjI2OCw5LjQyMjY2NjY3IDIuOTg4LDkuNDIyNjY2NjcgTDIuMDcyMzMzMzMsOS40MjI2NjY2NyBMMi4wNzIzMzMzMyw3Ljk4MjY2NjY3IEwyLjA3MjMzMzMzLDcuOTgyNjY2NjcgWiBNNC45Nyw3LjM4MjY2NjY3IEw0Ljk3LDExLjY2NjY2NjcgTDUuNiwxMS42NjY2NjY3IEw1LjYsOC41MzQ2NjY2NyBMNS42MjE2NjY2Nyw4LjUzNDY2NjY3IEw3LjU0NDY2NjY3LDExLjY2NjY2NjcgTDguMTU4NjY2NjcsMTEuNjY2NjY2NyBMOC4xNTg2NjY2Nyw3LjM4MjY2NjY3IEw3LjUyMzMzMzMzLDcuMzgyNjY2NjcgTDcuNTIzMzMzMzMsMTAuNDcyNjY2NyBMNy41MDIsMTAuNDcyNjY2NyBMNS42MDA2NjY2Nyw3LjM4MjY2NjY3IEw0Ljk3MDY2NjY3LDcuMzgyNjY2NjcgTDQuOTcsNy4zODI2NjY2NyBaIE0xMC41ODIzMzMzLDcuMjk4NjY2NjcgQzEwLjAxMTY2NjcsNy4yOTg2NjY2NyA5LjU1OSw3LjUxNDY2NjY3IDkuMjI1LDcuOTU4NjY2NjcgQzguOTA3MzMzMzMsOC4zNzI2NjY2NyA4Ljc1MTMzMzMzLDguOTAwNjY2NjcgOC43NTEzMzMzMyw5LjU0MjY2NjY3IEM4Ljc1MTMzMzMzLDEwLjE3ODY2NjcgOC45MDczMzMzMywxMC43MDA2NjY3IDkuMjI1LDExLjEwMjY2NjcgQzkuNTY0MzMzMzMsMTEuNTM0NjY2NyAxMC4wMzgzMzMzLDExLjc1MDY2NjcgMTAuNjUyMzMzMywxMS43NTA2NjY3IEMxMC45OTczMzMzLDExLjc1MDY2NjcgMTEuMzA0MzMzMywxMS43MDI2NjY3IDExLjU4NDMzMzMsMTEuNjA2NjY2NyBDMTEuODQxMzQ3MiwxMS41MTYxMTE0IDEyLjA3ODg3MTMsMTEuMzc3NjY4NyAxMi4yODQzMzMzLDExLjE5ODY2NjcgTDEyLjI4NDMzMzMsOS4zODY2NjY2NyBMMTAuNjM2NjY2Nyw5LjM4NjY2NjY3IEwxMC42MzY2NjY3LDkuOTg2NjY2NjcgTDExLjY1NDY2NjcsOS45ODY2NjY2NyBMMTEuNjU0NjY2NywxMC44Njg2NjY3IEMxMS41MjYwODMyLDEwLjk1MzIwMTYgMTEuMzg2NTc2OCwxMS4wMTk4MTQ4IDExLjI0LDExLjA2NjY2NjcgQzExLjA3MjA1ODcsMTEuMTE1NTU3OCAxMC44OTc5MDk1LDExLjEzOTgxMDcgMTAuNzIzLDExLjEzODY2NjcgQzEwLjI1NDMzMzMsMTEuMTM4NjY2NyA5LjkwOTY2NjY3LDEwLjk5NDY2NjcgOS42ODg2NjY2NywxMC43MDY2NjY3IEM5LjQ4NCwxMC40MzY2NjY3IDkuMzgyLDEwLjA0NjY2NjcgOS4zODIsOS41NDI2NjY2NyBDOS4zODIsOS4wMTQ2NjY2NyA5LjQ5NDY2NjY3LDguNjEyNjY2NjcgOS43MjYzMzMzMyw4LjMyNDY2NjY3IEM5LjkzNjMzMzMzLDguMDQ4NjY2NjcgMTAuMjIyLDcuOTE2NjY2NjcgMTAuNTgzLDcuOTE2NjY2NjcgQzEwLjg3MzY2NjcsNy45MTY2NjY2NyAxMS4xMTA2NjY3LDcuOTgyNjY2NjcgMTEuMjg4MzMzMyw4LjEyMDY2NjY3IEMxMS40NjA2NjY3LDguMjU4NjY2NjcgMTEuNTc5MzMzMyw4LjQ2MjY2NjY3IDExLjYzMyw4LjczODY2NjY3IEwxMi4yNjg2NjY3LDguNzM4NjY2NjcgQzEyLjE5ODY2NjcsOC4yNTg2NjY2NyAxMi4wMjYzMzMzLDcuOTA0NjY2NjcgMTEuNzUxNjY2Nyw3LjY2NDY2NjY3IEMxMS40NjYsNy40MTg2NjY2NyAxMS4wNzgzMzMzLDcuMjk4NjY2NjcgMTAuNTgyNjY2Nyw3LjI5ODY2NjY3IEwxMC41ODIzMzMzLDcuMjk4NjY2NjcgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==", Cu = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5QUFTlm77moIc8L3RpdGxlPg0KICAgIDxnIGlkPSLkvpvlupTllYbnrqHnkIYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5L6b5bqU5ZWG566h55CGLeS+m+W6lOWVhuWIl+ihqOivpuaDhS0yMOadoemZhOS7tiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4My4wMDAwMDAsIC04OTEuMDAwMDAwKSIgZmlsbD0iI0Y4NTIwNyIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMjHlpIfku70tNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc1LjAwMDAwMCwgODg1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJQUFTlm77moIciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMyw2IEwxMyw2IEMxMy4xNzY4MTEsNiAxMy4zNDYzODAzLDYuMDcwMjM3ODkgMTMuNDcxNDA0NSw2LjE5NTI2MjE1IEMxMy41OTY0Mjg4LDYuMzIwMjg2NCAxMy42NjY2NjY3LDYuNDg5ODU1NjggMTMuNjY2NjY2Nyw2LjY2NjY2NjY3IEwxMy42NjY2NjY3LDEyLjMzMzMzMzMgQzEzLjY2NjY2NjcsMTIuNzAxNTIzMiAxMy4zNjgxODk4LDEzIDEzLDEzIEwzLDEzIEwzLDE0LjY2NjY2NjcgQzMsMTQuNzU1MDcyMiAzLjAzNTExODk1LDE0LjgzOTg1NjggMy4wOTc2MzEwNywxNC45MDIzNjg5IEMzLjE2MDE0MzIsMTQuOTY0ODgxMSAzLjI0NDkyNzgzLDE1IDMuMzMzMzMzMzMsMTUgTDE0LjY2NjY2NjcsMTUgQzE0Ljg1MDc2MTYsMTUgMTUsMTQuODUwNzYxNiAxNSwxNC42NjY2NjY3IEwxNSw0LjgyNTMzMzMzIEwxNC44NDIzMzMzLDQuNjY2NjY2NjcgTDEyLjg2NTMzMzMsNC42NjY2NjY2NyBDMTIuMDE5MjMzMSw0LjY2NjY2NjY3IDExLjMzMzMzMzMsMy45ODA3NjY5MSAxMS4zMzMzMzMzLDMuMTM0NjY2NjcgTDExLjMzMzMzMzMsMS4xMzUzMzMzMyBMMTEuMTk4NjY2NywxIEwzLjMzMzMzMzMzLDEgQzMuMjQ0OTI3ODMsMSAzLjE2MDE0MzIsMS4wMzUxMTg5NSAzLjA5NzYzMTA3LDEuMDk3NjMxMDcgQzMuMDM1MTE4OTUsMS4xNjAxNDMyIDMsMS4yNDQ5Mjc4MyAzLDEuMzMzMzMzMzMgTDMsNiBaIE0yLDEzIEwwLjY2NjY2NjY3MiwxMyBDMC4yOTg0NzY4MzYsMTMgMCwxMi43MDE1MjMyIDAsMTIuMzMzMzMzMyBMMCw2LjY2NjY2NjY3IEMwLDYuNDg5ODU1NjggMC4wNzAyMzc4OTQxLDYuMzIwMjg2NCAwLjE5NTI2MjE0Nyw2LjE5NTI2MjE1IEMwLjMyMDI4NjQwMSw2LjA3MDIzNzg5IDAuNDg5ODU1Njc3LDYgMC42NjY2NjY2NzIsNiBMMiw2IEwyLDEuMzMzMzMzMzMgQzIsMC41OTY5NTM2NjUgMi41OTY5NTM2NiwwIDMuMzMzMzMzMzMsMCBMMTEuNjE1LDAgTDE2LDQuNDEzMzMzMzMgTDE2LDE0LjY2NjY2NjcgQzE2LDE1LjQwMzA0NjMgMTUuNDAzMDQ2MywxNiAxNC42NjY2NjY3LDE2IEwzLjMzMzMzMzMzLDE2IEMyLjU5Njk1MzY2LDE2IDIsMTUuNDAzMDQ2MyAyLDE0LjY2NjY2NjcgTDIsMTMgTDIsMTMgWiBNMS40NzgzMzMzMyw3LjM4MjY2NjY3IEwxLjQ3ODMzMzMzLDExLjY2NjY2NjcgTDIuMTgwMzMzMzMsMTEuNjY2NjY2NyBMMi4xODAzMzMzMywxMC4wMjI2NjY3IEwzLjI0MjMzMzMzLDEwLjAyMjY2NjcgQzQuMjg2MzMzMzMsMTAuMDIyNjY2NyA0LjgwODMzMzMzLDkuNTc4NjY2NjcgNC44MDgzMzMzMyw4LjY5NjY2NjY3IEM0LjgwODMzMzMzLDcuODIwNjY2NjcgNC4yODYzMzMzMyw3LjM4MjY2NjY3IDMuMjU0MzMzMzMsNy4zODI2NjY2NyBMMS40NzgzMzMzMyw3LjM4MjY2NjY3IFogTTIuMTgwMzMzMzMsNy45ODI2NjY2NyBMMy4yMDAzMzMzMyw3Ljk4MjY2NjY3IEMzLjUwNjMzMzMzLDcuOTgyNjY2NjcgMy43MzQzMzMzMyw4LjAzNjY2NjY3IDMuODc4MzMzMzMsOC4xNTA2NjY2NyBDNC4wMjIzMzMzMyw4LjI1ODY2NjY3IDQuMTAwMzMzMzMsOC40Mzg2NjY2NyA0LjEwMDMzMzMzLDguNjk2NjY2NjcgQzQuMTAwMzMzMzMsOC45NTQ2NjY2NyA0LjAyODMzMzMzLDkuMTQwNjY2NjcgMy44ODQzMzMzMyw5LjI1NDY2NjY3IEMzLjc0MDMzMzMzLDkuMzYyNjY2NjcgMy41MTIzMzMzMyw5LjQyMjY2NjY3IDMuMjAwMzMzMzMsOS40MjI2NjY2NyBMMi4xODAzMzMzMyw5LjQyMjY2NjY3IEwyLjE4MDMzMzMzLDcuOTgyNjY2NjcgTDIuMTgwMzMzMzMsNy45ODI2NjY2NyBaIE01LjQwODMzMzMzLDcuMzgyNjY2NjcgTDUuNDA4MzMzMzMsMTEuNjY2NjY2NyBMNi4xMTAzMzMzMywxMS42NjY2NjY3IEw2LjExMDMzMzMzLDEwLjAyMjY2NjcgTDcuMTcyMzMzMzMsMTAuMDIyNjY2NyBDOC4yMTYzMzMzMywxMC4wMjI2NjY3IDguNzM4MzMzMzMsOS41Nzg2NjY2NyA4LjczODMzMzMzLDguNjk2NjY2NjcgQzguNzM4MzMzMzMsNy44MjA2NjY2NyA4LjIxNjMzMzMzLDcuMzgyNjY2NjcgNy4xODQzMzMzMyw3LjM4MjY2NjY3IEw1LjQwODMzMzMzLDcuMzgyNjY2NjcgWiBNNi4xMTAzMzMzMyw3Ljk4MjY2NjY3IEw3LjEzMDMzMzMzLDcuOTgyNjY2NjcgQzcuNDM2MzMzMzMsNy45ODI2NjY2NyA3LjY2NDMzMzMzLDguMDM2NjY2NjcgNy44MDgzMzMzMyw4LjE1MDY2NjY3IEM3Ljk1MjMzMzMzLDguMjU4NjY2NjcgOC4wMzAzMzMzMyw4LjQzODY2NjY3IDguMDMwMzMzMzMsOC42OTY2NjY2NyBDOC4wMzAzMzMzMyw4Ljk1NDY2NjY3IDcuOTU4MzMzMzMsOS4xNDA2NjY2NyA3LjgxNDMzMzMzLDkuMjU0NjY2NjcgQzcuNjcwMzMzMzMsOS4zNjI2NjY2NyA3LjQ0MjMzMzMzLDkuNDIyNjY2NjcgNy4xMzAzMzMzMyw5LjQyMjY2NjY3IEw2LjExMDMzMzMzLDkuNDIyNjY2NjcgTDYuMTEwMzMzMzMsNy45ODI2NjY2NyBMNi4xMTAzMzMzMyw3Ljk4MjY2NjY3IFogTTkuMDA4MzMzMzMsNy4zODI2NjY2NyBMOS4wMDgzMzMzMyw3Ljk4MjY2NjY3IEwxMC40MTIzMzMzLDcuOTgyNjY2NjcgTDEwLjQxMjMzMzMsMTEuNjY2NjY2NyBMMTEuMTE0MzMzMywxMS42NjY2NjY3IEwxMS4xMTQzMzMzLDcuOTgyNjY2NjcgTDEyLjUxODMzMzMsNy45ODI2NjY2NyBMMTIuNTE4MzMzMyw3LjM4MjY2NjY3IEw5LjAwODMzMzMzLDcuMzgyNjY2NjcgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==", Kj = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5YTFPlm77moIc8L3RpdGxlPg0KICAgIDxnIGlkPSLkvpvlupTllYbnrqHnkIYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5L6b5bqU5ZWG566h55CGLeS+m+W6lOWVhuWIl+ihqOivpuaDhS0yMOadoemZhOS7tiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4My4wMDAwMDAsIC03NzEuMDAwMDAwKSIgZmlsbD0iIzc3RDQyNSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMjHlpIfku70tMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc1LjAwMDAwMCwgNzY1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJYTFPlm77moIciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuNjE1LDAgTDE2LDQuNDEzMzMzMzMgTDE2LDE0LjY2NjY2NjcgQzE2LDE1LjQwMzA0NjMgMTUuNDAzMDQ2MywxNiAxNC42NjY2NjY3LDE2IEwzLjMzMzMzMzMzLDE2IEMyLjU5Njk1MzY2LDE2IDIsMTUuNDAzMDQ2MyAyLDE0LjY2NjY2NjcgTDIsMTMgTDAuNjY2NjY2NjcyLDEzIEMwLjI5ODQ3NjgzNiwxMyAwLDEyLjcwMTUyMzIgMCwxMi4zMzMzMzMzIEwwLDYuNjY2NjY2NjcgQzAsNi40ODk4NTU2OCAwLjA3MDIzNzg5NDEsNi4zMjAyODY0IDAuMTk1MjYyMTQ3LDYuMTk1MjYyMTUgQzAuMzIwMjg2NDAxLDYuMDcwMjM3ODkgMC40ODk4NTU2NzcsNiAwLjY2NjY2NjY3Miw2IEwyLDYgTDIsMS4zMzMzMzMzMyBDMiwwLjU5Njk1MzY2NSAyLjU5Njk1MzY2LDAgMy4zMzMzMzMzMywwIEwxMS42MTUsMCBaIE0xMS4xOTg2NjY3LDEgTDMuMzMzMzMzMzMsMSBDMy4yNDQ5Mjc4MywxIDMuMTYwMTQzMiwxLjAzNTExODk1IDMuMDk3NjMxMDcsMS4wOTc2MzEwNyBDMy4wMzUxMTg5NSwxLjE2MDE0MzIgMywxLjI0NDkyNzgzIDMsMS4zMzMzMzMzMyBMMyw2IEwxMyw2IEMxMy4xNzY4MTEsNiAxMy4zNDYzODAzLDYuMDcwMjM3ODkgMTMuNDcxNDA0NSw2LjE5NTI2MjE1IEMxMy41OTY0Mjg4LDYuMzIwMjg2NCAxMy42NjY2NjY3LDYuNDg5ODU1NjggMTMuNjY2NjY2Nyw2LjY2NjY2NjY3IEwxMy42NjY2NjY3LDEyLjMzMzMzMzMgQzEzLjY2NjY2NjcsMTIuNzAxNTIzMiAxMy4zNjgxODk4LDEzIDEzLDEzIEwzLDEzIEwzLDE0LjY2NjY2NjcgQzMsMTQuNzU1MDcyMiAzLjAzNTExODk1LDE0LjgzOTg1NjggMy4wOTc2MzEwNywxNC45MDIzNjg5IEMzLjE2MDE0MzIsMTQuOTY0ODgxMSAzLjI0NDkyNzgzLDE1IDMuMzMzMzMzMzMsMTUgTDE0LjY2NjY2NjcsMTUgQzE0Ljg1MDc2MTYsMTUgMTUsMTQuODUwNzYxNiAxNSwxNC42NjY2NjY3IEwxNSw0LjgyNTMzMzMzIEwxNC44NDIzMzMzLDQuNjY2NjY2NjcgTDEyLjg2NTMzMzMsNC42NjY2NjY2NyBDMTIuMDE5MjMzMSw0LjY2NjY2NjY3IDExLjMzMzMzMzMsMy45ODA3NjY5MSAxMS4zMzMzMzMzLDMuMTM0NjY2NjcgTDExLjMzMzMzMzMsMS4xMzU2NjY2NyBMMTEuMTk4NjY2NywxIFogTTEwLjM2MTY2NjcsNy4yOTg2NjY2NyBDOS44OTk2NjY2Nyw3LjI5ODY2NjY3IDkuNTIxNjY2NjcsNy40MDA2NjY2NyA5LjIyMTY2NjY3LDcuNjEwNjY2NjcgQzguODk3NjY2NjcsNy44MjY2NjY2NyA4Ljc0MTY2NjY3LDguMTI2NjY2NjcgOC43NDE2NjY2Nyw4LjUwNDY2NjY3IEM4Ljc0MTY2NjY3LDguODgyNjY2NjcgOC45MDM2NjY2Nyw5LjE3MDY2NjY3IDkuMjMzNjY2NjcsOS4zNjg2NjY2NyBDOS4zNTk2NjY2Nyw5LjQ0MDY2NjY3IDkuNjg5NjY2NjcsOS41NjA2NjY2NyAxMC4yMTc2NjY3LDkuNzI4NjY2NjcgQzEwLjY5MTY2NjcsOS44NzI2NjY2NyAxMC45Njc2NjY3LDkuOTY4NjY2NjcgMTEuMDUxNjY2NywxMC4wMTA2NjY3IEMxMS4zMTU2NjY3LDEwLjE0MjY2NjcgMTEuNDUzNjY2NywxMC4zMjI2NjY3IDExLjQ1MzY2NjcsMTAuNTUwNjY2NyBDMTEuNDUzNjY2NywxMC43MzA2NjY3IDExLjM1NzY2NjcsMTAuODY4NjY2NyAxMS4xNzc2NjY3LDEwLjk3NjY2NjcgQzEwLjk5NzY2NjcsMTEuMDc4NjY2NyAxMC43NDU2NjY3LDExLjEzMjY2NjcgMTAuNDMzNjY2NywxMS4xMzI2NjY3IEMxMC4wNzk2NjY3LDExLjEzMjY2NjcgOS44MjE2NjY2NywxMS4wNjY2NjY3IDkuNjUzNjY2NjcsMTAuOTQ2NjY2NyBDOS40Njc2NjY2NywxMC44MDg2NjY3IDkuMzUzNjY2NjcsMTAuNTc0NjY2NyA5LjMwNTY2NjY3LDEwLjI1MDY2NjcgTDguNjA5NjY2NjcsMTAuMjUwNjY2NyBDOC42Mzk2NjY2NywxMC43OTY2NjY3IDguODM3NjY2NjcsMTEuMTkyNjY2NyA5LjE5NzY2NjY3LDExLjQ0NDY2NjcgQzkuNDkxNjY2NjcsMTEuNjQ4NjY2NyA5LjkwNTY2NjY3LDExLjc1MDY2NjcgMTAuNDMzNjY2NywxMS43NTA2NjY3IEMxMC45Nzk2NjY3LDExLjc1MDY2NjcgMTEuNDA1NjY2NywxMS42MzY2NjY3IDExLjcwNTY2NjcsMTEuNDIwNjY2NyBDMTIuMDA1NjY2NywxMS4xOTg2NjY3IDEyLjE1NTY2NjcsMTAuODkyNjY2NyAxMi4xNTU2NjY3LDEwLjUwODY2NjcgQzEyLjE1NTY2NjcsMTAuMTEyNjY2NyAxMS45Njk2NjY3LDkuODA2NjY2NjcgMTEuNTk3NjY2Nyw5LjU4NDY2NjY3IEMxMS40Mjk2NjY3LDkuNDg4NjY2NjcgMTEuMDU3NjY2Nyw5LjM0NDY2NjY3IDEwLjQ3NTY2NjcsOS4xNjQ2NjY2NyBDMTAuMDc5NjY2Nyw5LjAzODY2NjY3IDkuODMzNjY2NjcsOC45NDg2NjY2NyA5Ljc0MzY2NjY3LDguOTAwNjY2NjcgQzkuNTM5NjY2NjcsOC43OTI2NjY2NyA5LjQ0MzY2NjY3LDguNjQyNjY2NjcgOS40NDM2NjY2Nyw4LjQ2MjY2NjY3IEM5LjQ0MzY2NjY3LDguMjU4NjY2NjcgOS41Mjc2NjY2Nyw4LjEwODY2NjY3IDkuNzA3NjY2NjcsOC4wMTg2NjY2NyBDOS44NTE2NjY2Nyw3Ljk0MDY2NjY3IDEwLjA1NTY2NjcsNy45MDQ2NjY2NyAxMC4zMjU2NjY3LDcuOTA0NjY2NjcgQzEwLjYzNzY2NjcsNy45MDQ2NjY2NyAxMC44Nzc2NjY3LDcuOTU4NjY2NjcgMTEuMDMzNjY2Nyw4LjA3ODY2NjY3IEMxMS4xODk2NjY3LDguMTkyNjY2NjcgMTEuMzAzNjY2Nyw4LjM4NDY2NjY3IDExLjM2MzY2NjcsOC42NDg2NjY2NyBMMTIuMDU5NjY2Nyw4LjY0ODY2NjY3IEMxMi4wMTc2NjY3LDguMTgwNjY2NjcgMTEuODQzNjY2Nyw3LjgzMjY2NjY3IDExLjU0MzY2NjcsNy42MTA2NjY2NyBDMTEuMjYxNjY2Nyw3LjQwMDY2NjY3IDEwLjg2NTY2NjcsNy4yOTg2NjY2NyAxMC4zNjE2NjY3LDcuMjk4NjY2NjcgTDEwLjM2MTY2NjcsNy4yOTg2NjY2NyBaIE0yLjQyOTY2NjY3LDcuMzgyNjY2NjcgTDEuNTcxNjY2NjcsNy4zODI2NjY2NyBMMy4wMDU2NjY2Nyw5LjQ1MjY2NjY3IEwxLjQ3NTY2NjY3LDExLjY2NjY2NjcgTDIuMzMzNjY2NjcsMTEuNjY2NjY2NyBMMy40Mzc2NjY2NywxMC4wMTA2NjY3IEw0LjU0MTY2NjY3LDExLjY2NjY2NjcgTDUuMzk5NjY2NjcsMTEuNjY2NjY2NyBMMy44NTc2NjY2Nyw5LjQ1MjY2NjY3IEw1LjMwMzY2NjY3LDcuMzgyNjY2NjcgTDQuNDQ1NjY2NjcsNy4zODI2NjY2NyBMMy40Mzc2NjY2Nyw4Ljg5NDY2NjY3IEwyLjQyOTY2NjY3LDcuMzgyNjY2NjcgTDIuNDI5NjY2NjcsNy4zODI2NjY2NyBaIE02LjQ1MTY2NjY3LDcuMzgyNjY2NjcgTDUuNzU1NjY2NjcsNy4zODI2NjY2NyBMNS43NTU2NjY2NywxMS42NjY2NjY3IEw4LjQzNDMzMzMzLDExLjY2NjY2NjcgTDguNDM0MzMzMzMsMTEuMDY2NjY2NyBMNi40NTE2NjY2NywxMS4wNjY2NjY3IEw2LjQ1MTY2NjY3LDcuMzgyNjY2NjcgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==", bu = [".png", ".jpg", ".gif", ".jpeg"], Jj = {
  ".doc": gi,
  ".docx": gi,
  ".jpg": Ni,
  ".jpeg": Ni,
  ".png": Hj,
  ".pdf": Zj,
  ".ppt": Cu,
  ".pptx": Cu,
  ".xls": Cu,
  ".xlsx": Kj
};
function $j() {
  return !!navigator.userAgent.match(/('phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone')/i);
}
function qj(f) {
  return Array.isArray(f) ? f : f == null || f === "" ? [] : f.split(",");
}
const Xj = (f = "", s, r = !1) => f ? (r ? ez(f) : f.length) > s ? f.substring(0, s - 2) + "..." + f.substring(s - 2, s) : f : "", ez = (f) => {
  if (!f)
    return 0;
  let s = 0;
  const r = f.length;
  let o = -1;
  for (let D = 0; D < r; D++)
    o = f.charCodeAt(D), o >= 0 && o <= 128 ? s += 1 : s += 2;
  return s;
}, tz = { class: "file-icons-panel" }, nz = ["onClick"], lz = {
  key: 0,
  class: "file-name"
}, rz = Me({
  name: "FileIcons"
}), uz = /* @__PURE__ */ Me({
  ...rz,
  props: {
    files: {},
    size: {},
    isCard: { type: Boolean },
    showImg: { type: Boolean },
    preview: { type: Boolean },
    showName: { type: Boolean }
  },
  setup(f) {
    const s = f, r = h(!1), o = h(0), D = Ie(
      () => s.files.map((d) => {
        if (bu.indexOf(d.suffix || "") >= 0)
          return d.shareUrl;
      }).filter((d) => d)
    ), p = Ie(() => ({
      width: (s.size || 16) + "px",
      height: (s.size || 16) + "px"
    }));
    function m(d) {
      let c = Jj[d.suffix || ""] || Gj;
      return s.showImg && bu.indexOf(d.suffix || "") >= 0 ? d.shareUrl : c;
    }
    function N(d) {
      s.preview && (bu.indexOf(d.suffix || "") >= 0 ? (o.value = D.value.indexOf(d.shareUrl || d.furl), r.value = !0) : window.open(d.previewUrl || d.shareUrl || d.furl, "_blank"));
    }
    return (d, c) => {
      const z = Q("el-image"), w = Q("el-image-viewer");
      return _(), P("div", tz, [
        d.files && d.files.length ? (_(), P("div", {
          key: 0,
          class: On([d.isCard ? "card-list" : "file-list"])
        }, [
          (_(!0), P(we, null, Ye(d.files, (x, C) => (_(), P("div", {
            key: C,
            class: "file-item",
            onClick: (E) => N(x)
          }, [
            se(z, {
              src: m(x),
              style: yt(p.value),
              fit: "cover"
            }, null, 8, ["src", "style"]),
            d.showName ? (_(), P("div", lz, Ce(zt(Xj)(x.name, 50) + x.suffix), 1)) : ae("", !0)
          ], 8, nz))), 128))
        ], 2)) : ae("", !0),
        r.value ? (_(), R(w, {
          key: 1,
          onClose: c[0] || (c[0] = (x) => r.value = !1),
          teleported: "",
          initialIndex: o.value,
          "url-list": D.value
        }, null, 8, ["initialIndex", "url-list"])) : ae("", !0)
      ]);
    };
  }
});
const oz = /* @__PURE__ */ Ge(uz, [["__scopeId", "data-v-8343f7e6"]]), sz = {
  key: 1,
  class: "no-img-tip"
}, iz = {
  name: "ElPlusFormFile",
  inheritAttrs: !1,
  typeName: "file",
  customOptions: {}
}, Bi = /* @__PURE__ */ Me({
  ...iz,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  setup(f) {
    const s = f;
    return (r, o) => (_(), P("div", {
      class: "ele-form-file",
      style: yt({ marginTop: s.modelValue && s.modelValue.length > 0 ? "10px" : "0" })
    }, [
      s.modelValue && s.modelValue.length > 0 ? (_(), R(oz, {
        key: 0,
        files: s.modelValue,
        showName: "",
        preview: ""
      }, null, 8, ["files"])) : (_(), P("span", sz, "暂无内容"))
    ], 4));
  }
});
const az = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Bi }, Symbol.toStringTag, { value: "Module" })), cz = { class: "ele-form-image" }, Mz = { key: 1 }, fz = /* @__PURE__ */ ve("span", { class: "no-img-tip" }, "—", -1), dz = [
  fz
], gz = {
  name: "ElPlusFormImage",
  inheritAttrs: !1,
  typeName: "image",
  customOptions: {}
}, Ui = /* @__PURE__ */ Me({
  ...gz,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  setup(f) {
    const s = f, r = We("format"), o = h({}), D = h(Be(s));
    be(async () => {
      o.value = await Oe(s, { isShowPreview: !0, previewTeleported: !0, ...Le() });
    });
    const p = Ie(() => s.modelValue ? Array.isArray(s.modelValue) ? typeof s.modelValue[0] == "string" ? s.modelValue : s.modelValue.map((N) => N.shareUrl || N.furl) : typeof s.modelValue == "string" ? s.modelValue.split(",").map((N) => r.imgUrl(N)) : [] : []), m = Ie(() => {
      let N = "", d = "", c = s.desc.size || "default";
      switch (c) {
        case "large":
          N = "44px", d = "44px";
          break;
        case "default":
          N = "36px", d = "36px";
          break;
        case "small":
          N = "28px", d = "28px";
          break;
        default:
          N = parseInt(c) + "px", d = parseInt(c) + "px";
          break;
      }
      return Object.assign({}, s.desc.style, { width: N, height: d, "max-width": N });
    });
    return (N, d) => {
      const c = Q("el-image");
      return _(), P("div", cz, [
        p.value && p.value.length > 0 ? (_(!0), P(we, { key: 0 }, Ye(p.value, (z, w) => (_(), R(c, ne({
          class: N.desc.class,
          key: z,
          "preview-src-list": o.value.isShowPreview === !1 ? null : p.value,
          "initial-index": w,
          src: zt(r).imgUrl(z)
        }, o.value, { style: m.value }, Te(D.value), {
          fit: o.value.fit || "cover"
        }), null, 16, ["class", "preview-src-list", "initial-index", "src", "style", "fit"]))), 128)) : (_(), P("div", Mz, dz))
      ]);
    };
  }
});
const Nz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ui }, Symbol.toStringTag, { value: "Module" })), pz = {
  name: "ElPlusFormInput",
  inheritAttrs: !1,
  typeName: "input",
  customOptions: {}
}, Pi = /* @__PURE__ */ Me({
  ...pz,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue", "validateThis"],
  setup(f, { emit: s }) {
    const r = f, o = We("defaultConf"), D = h(Object.assign({}, Mn(), r.desc.slots)), p = h({}), m = h(Be(r)), N = h();
    return s("update:modelValue", N), be(async () => {
      var d, c;
      p.value = await Oe(r, { autocomplete: "new-password", maxlength: ((c = (d = o.form) == null ? void 0 : d.leng) == null ? void 0 : c.input) || 0, clearable: !0, ...Le() });
    }), He(
      () => r.modelValue,
      (d) => {
        d && d.length > p.value.maxlength && (d = d.substring(0, p.value.maxlength)), N.value = d;
      },
      { immediate: !0 }
    ), He(
      () => N.value,
      () => {
        s("validateThis");
      }
    ), (d, c) => {
      const z = Q("el-input");
      return _(), R(z, ne({ style: { display: "flex" } }, p.value, Te(m.value), {
        modelValue: N.value,
        "onUpdate:modelValue": c[0] || (c[0] = (w) => N.value = w)
      }), en({ _: 2 }, [
        Ye(D.value, (w, x, C) => ({
          name: x,
          fn: B(() => [
            $e(d.$slots, x)
          ])
        }))
      ]), 1040, ["modelValue"]);
    };
  }
}), jz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Pi }, Symbol.toStringTag, { value: "Module" })), zz = (f) => (hi("data-v-1a636c3b"), f = f(), wi(), f), yz = { class: "el-plus-form-link" }, Dz = {
  style: { width: "100%" },
  class: "form-link-dialog"
}, _z = { class: "panel-left" }, mz = {
  key: 0,
  class: "panel-right"
}, hz = /* @__PURE__ */ zz(() => /* @__PURE__ */ ve("div", { class: "right-title" }, "已选中项：", -1)), wz = { class: "btn-panel" }, Az = {
  name: "ElPlusFormLink",
  inheritAttrs: !1,
  typeName: "link",
  customOptions: {}
}, vz = /* @__PURE__ */ Me({
  ...Az,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue", "change", "input", "validateThis"],
  setup(f, { emit: s }) {
    const r = f, o = h(Be(r)), D = h(r.modelValue);
    s("update:modelValue", D);
    const p = h(), m = lt([]), N = lt([]), d = lt({
      multiple: !0,
      size: r.desc.size,
      collapseTags: !0,
      collapseTagsTooltip: !0,
      clearable: !0,
      placeholder: r.desc.placeholder || "请选择" + r.desc.label
    }), c = h(!1), z = h({}), w = Ie(() => r.desc.vkey || "id"), x = h(!1), C = h(), E = lt([]);
    function U(V) {
      V && (p.value.blur(), c.value = !0);
    }
    function k() {
      E.splice(0, E.length), Y();
    }
    function K(V) {
      E.splice(0, E.length), V.map((F) => {
        E.push({ label: F[r.desc.lkey || "name"], value: F[w.value], dataItem: F });
      });
    }
    function X({ row: V }) {
      E.splice(0, E.length), E.push({ label: V[r.desc.lkey || "name"], value: V[w.value], dataItem: V }), Y();
    }
    function de(V) {
      E.splice(
        E.findIndex((F) => F.value === V.value),
        1
      ), C.value.changeSelect([{ [w.value]: V.value }]);
    }
    function pe() {
      c.value = !1;
    }
    function Y() {
      N.splice(0, N.length, ...E);
      const V = [], F = [];
      m.splice(0, m.length), E.map((ge) => {
        m.push(ge.value), V.push(ge.value), F.push(ge.label);
      }), D.value = E.length > 0 ? [V, F] : [], o.value.change && o.value.change(r.formData, null, D.value), c.value = !1, s("validateThis");
    }
    return He(
      () => r.desc.tableConfig,
      (V) => {
        let F = {};
        V && (F = Dt.cloneDeep(V), typeof r.desc.multiple == "function" ? x.value = r.desc.multiple(r.formData) : x.value = r.desc.multiple, x.value || !x.value && F.column[F.column.length - 1].label !== "操作" && F.column.push({ label: "操作", width: "120px", fixed: "right", type: "btns", btns: [{ label: "选中", on: { click: X } }] }), F.maxHeight = 400), z.value = F;
      },
      { deep: !0, immediate: !0 }
    ), cn(async () => {
    }), (V, F) => {
      const ge = Q("el-option"), Ue = Q("el-select"), Ke = Q("ElPlusTable"), _t = Q("el-tag"), At = Q("el-scrollbar"), tn = Q("el-button"), nn = Q("el-dialog");
      return _(), P("div", yz, [
        se(Ue, ne({
          ref_key: "selectRef",
          ref: p,
          style: [{ width: "100%" }, V.desc.style],
          class: V.desc.class
        }, d, {
          teleported: !1,
          loading: V.loading,
          modelValue: m,
          onVisibleChange: U,
          onClear: k
        }, Te(o.value)), {
          default: B(() => [
            (_(!0), P(we, null, Ye(N, (dt) => (_(), R(ge, ne({
              key: dt.value
            }, dt), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["class", "style", "loading", "modelValue"]),
        se(nn, {
          width: V.desc.dialogWidth || "1000px",
          title: V.desc.title || V.desc.placeholder || "请选择" + V.desc.label,
          draggable: "",
          closeOnClickModal: !1,
          showCancel: "",
          modelValue: c.value,
          "onUpdate:modelValue": F[0] || (F[0] = (dt) => c.value = dt),
          "append-to-body": "",
          "destroy-on-close": ""
        }, {
          default: B(() => [
            ve("div", Dz, [
              ve("div", _z, [
                z.value ? (_(), R(Ke, {
                  key: 0,
                  ref_key: "multipleTableRef",
                  ref: C,
                  tableConfig: z.value,
                  type: x.value ? "selection" : "index",
                  isIndex: !1,
                  rowKey: w.value,
                  onSelection: K
                }, null, 8, ["tableConfig", "type", "rowKey"])) : ae("", !0)
              ]),
              x.value ? (_(), P("div", mz, [
                hz,
                se(At, {
                  height: "480px",
                  class: "tag-list"
                }, {
                  default: B(() => [
                    (_(!0), P(we, null, Ye(E, (dt) => (_(), R(_t, {
                      class: "tag-item",
                      style: { "margin-right": "10px", "margin-bottom": "10px" },
                      key: dt.value,
                      closable: "",
                      onClose: () => de(dt)
                    }, {
                      default: B(() => [
                        ke(Ce(dt.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClose"]))), 128))
                  ]),
                  _: 1
                }),
                ve("div", wz, [
                  se(tn, { onClick: pe }, {
                    default: B(() => [
                      ke("取消")
                    ]),
                    _: 1
                  }),
                  se(tn, {
                    type: "primary",
                    onClick: Y
                  }, {
                    default: B(() => [
                      ke("确定")
                    ]),
                    _: 1
                  })
                ])
              ])) : ae("", !0)
            ])
          ]),
          _: 1
        }, 8, ["width", "title", "modelValue"])
      ]);
    };
  }
});
const Qi = /* @__PURE__ */ Ge(vz, [["__scopeId", "data-v-1a636c3b"]]), Yz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Qi }, Symbol.toStringTag, { value: "Module" }));
/*! Element Plus Icons Vue v2.1.0 */
var Il = (f, s) => {
  let r = f.__vccOpts || f;
  for (let [o, D] of s)
    r[o] = D;
  return r;
}, Iz = {
  name: "Loading"
}, Lz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tz = /* @__PURE__ */ ve(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), Ez = [
  Tz
];
function xz(f, s, r, o, D, p) {
  return _(), P("svg", Lz, Ez);
}
var Cz = /* @__PURE__ */ Il(Iz, [["render", xz], ["__file", "loading.vue"]]), bz = {
  name: "Plus"
}, Oz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sz = /* @__PURE__ */ ve(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), kz = [
  Sz
];
function Bz(f, s, r, o, D, p) {
  return _(), P("svg", Oz, kz);
}
var Uz = /* @__PURE__ */ Il(bz, [["render", Bz], ["__file", "plus.vue"]]), Pz = {
  name: "Share"
}, Qz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vz = /* @__PURE__ */ ve(
  "path",
  {
    fill: "currentColor",
    d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
  },
  null,
  -1
  /* HOISTED */
), Fz = [
  Vz
];
function Rz(f, s, r, o, D, p) {
  return _(), P("svg", Qz, Fz);
}
var pi = /* @__PURE__ */ Il(Pz, [["render", Rz], ["__file", "share.vue"]]), Wz = {
  name: "UserFilled"
}, Gz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zz = /* @__PURE__ */ ve(
  "path",
  {
    fill: "currentColor",
    d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), Hz = [
  Zz
];
function Kz(f, s, r, o, D, p) {
  return _(), P("svg", Gz, Hz);
}
var ji = /* @__PURE__ */ Il(Wz, [["render", Kz], ["__file", "user-filled.vue"]]), Jz = {
  name: "WarningFilled"
}, $z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qz = /* @__PURE__ */ ve(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), Xz = [
  qz
];
function e2(f, s, r, o, D, p) {
  return _(), P("svg", $z, Xz);
}
var t2 = /* @__PURE__ */ Il(Jz, [["render", e2], ["__file", "warning-filled.vue"]]);
const n2 = (f) => (hi("data-v-3d7d6cbc"), f = f(), wi(), f), l2 = { class: "el-plus-form-link-user" }, r2 = {
  style: { width: "100%" },
  class: "form-link-user-dialog"
}, u2 = { class: "panel-left" }, o2 = { class: "dept-breadcrumb" }, s2 = { style: { display: "flex", "align-items": "center" } }, i2 = { class: "panel-right" }, a2 = /* @__PURE__ */ n2(() => /* @__PURE__ */ ve("div", { class: "right-title" }, "已选中项：", -1)), c2 = { class: "btn-panel" }, M2 = {
  name: "ElPlusFormLkuser",
  inheritAttrs: !1,
  typeName: "lkuser",
  customOptions: {}
}, f2 = /* @__PURE__ */ Me({
  ...M2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue", "change", "input", "validateThis"],
  setup(f, { emit: s }) {
    const r = f, o = We("globalData"), D = We("defaultConf"), p = h(Y(r)), m = h(r.modelValue || []);
    s("update:modelValue", m);
    const N = h(), d = lt([]), c = lt([]), z = lt({
      multiple: !0,
      size: r.desc.size,
      collapseTags: !1,
      collapseTagsTooltip: !1,
      clearable: !0
    }), w = h(!1), x = lt([]), C = lt([]), E = h({});
    async function U(G) {
      C.splice(0, C.length, ...await Ue(G));
    }
    const k = h([]), K = h([]), X = h([]), de = h(), pe = Ie(() => {
      var te, J;
      const G = [];
      let ee = Dt.cloneDeep(o[((J = (te = D.form) == null ? void 0 : te.linkUser) == null ? void 0 : J.deptListKey) || ""]);
      return k.value && k.value.length > 0 && k.value.map((ze) => {
        ee = ee[ze].children || [];
      }), ee.map((ze) => G.push({ type: 2, label: ze.name, value: ze.id })), X.value.map((ze) => G.push({ type: 1, label: ze.nickname, value: ze.userId })), St(() => {
        setTimeout(() => {
          G.map((ze) => {
            var it;
            (it = de.value) == null || it.toggleRowSelection(
              ze,
              x.some((rt) => rt.value === ze.value)
            );
          });
        }, 10);
      }), G;
    });
    function Y(G) {
      var te;
      const ee = {};
      return (te = G.desc) != null && te.on && Object.keys(G.desc.on).map((J) => {
        ee[J] = (ze) => {
          G.desc.on[J](G.formData, G.rowIndex, ze);
        };
      }), ee;
    }
    function V(G) {
      G && (N.value.blur(), w.value = !0);
    }
    function F() {
      x.splice(0, x.length), pe.value.map((G) => {
        var ee;
        (ee = de.value) == null || ee.toggleRowSelection(
          G,
          x.some((te) => te.value === G.value)
        );
      }), T();
    }
    function ge(G) {
      Gt({ ...C.find((ee) => ee.value === G), type: 1 });
    }
    async function Ue(G) {
      var ee, te, J;
      return G.length > 0 ? (J = (await ((te = (ee = D.form) == null ? void 0 : ee.linkUser) == null ? void 0 : te.getUserList({ nickname: G, current: 1, size: 10, enabled: 1 }))).records) == null ? void 0 : J.map((ze) => ({ value: ze.userId, label: ze.nickname })) : [];
    }
    async function Ke(G, ee) {
      var te, J;
      X.value = (await ((J = (te = D.form) == null ? void 0 : te.linkUser) == null ? void 0 : J.getUserList({ deptId: G.value, size: 999 }))).records, k.value.push(ee), K.value.push(G);
    }
    async function _t(G) {
      var ee, te;
      X.value = G >= 0 ? (await ((te = (ee = D.form) == null ? void 0 : ee.linkUser) == null ? void 0 : te.getUserList({ deptId: K.value[G].value, size: 999 }))).records : [], k.value.splice(G + 1), K.value.splice(G + 1);
    }
    function At(G) {
      return r.desc.onlyUser ? G.type === 1 : !0;
    }
    function tn(G, ee) {
      Gt(ee, !G.some((te) => te.value === ee.value));
    }
    function nn(G) {
      const ee = !(G && G.length > 0);
      pe.value.map((te) => {
        (!r.desc.onlyUser || r.desc.onlyUser && te.type === 1) && Gt(te, ee);
      });
    }
    function dt(G) {
      var ee;
      pe.value.some((te) => te.value === G.value) && ((ee = de.value) == null || ee.toggleRowSelection(G, !1)), Gt(G, !0);
    }
    function Gt(G, ee = !1) {
      const te = x.findIndex((J) => J.value === G.value);
      ee ? te >= 0 && x.splice(te, 1) : te < 0 && x.push(G);
    }
    function v() {
      w.value = !1;
    }
    function T() {
      c.splice(0, c.length, ...x);
      const G = [], ee = [], te = [], J = [];
      d.splice(0, d.length), x.map((ze) => {
        d.push(ze.value), ze.type === 1 ? (G.push(ze.value), te.push(ze.label)) : (ee.push(ze.value), J.push(ze.label));
      }), w.value = !1, m.value = x.length > 0 ? [G, ee, te, J] : [], p.value.change && p.value.change(r.formData, null, m.value), s("validateThis");
    }
    function q() {
      const G = [];
      if (r.modelValue) {
        let [ee, te, J, ze] = r.modelValue;
        te && ze && te.length === ze.length && te.map((it, rt) => {
          G.push({ type: 2, value: it, label: ze[rt] });
        }), ee && J && ee.length === J.length && ee.map((it, rt) => {
          G.push({ type: 1, value: it, label: J[rt] });
        });
      }
      return G;
    }
    function ie() {
      const G = [];
      if (r.modelValue) {
        let [ee, te] = r.modelValue;
        G.push(...te || []), G.push(...ee || []);
      }
      return G;
    }
    function _e() {
      x.splice(0, x.length, ...q()), c.splice(0, c.length, ...q()), d.splice(0, d.length, ...ie());
    }
    return be(async () => {
      E.value = await Oe(r, {
        remote: !0,
        filterable: !0,
        remoteShowSuffix: !0,
        loadingText: "远程查询中...",
        remoteMethod: U,
        ...Le()
      });
    }), He(
      () => r.modelValue,
      () => _e(),
      { deep: !0 }
    ), cn(async () => {
      _e();
    }), (G, ee) => {
      const te = Q("el-option"), J = Q("el-select"), ze = Q("el-divider"), it = Q("el-breadcrumb-item"), rt = Q("el-breadcrumb"), Zt = Q("el-table-column"), hn = Q("el-icon"), Ht = Q("el-button"), fn = Q("el-table"), Sn = Q("el-tag"), gt = Q("el-scrollbar"), ln = Q("el-dialog");
      return _(), P("div", l2, [
        se(J, ne({
          ref_key: "selectRef",
          ref: N,
          style: [{ width: "100%" }, G.desc.style],
          class: G.desc.class
        }, z, {
          teleported: !1,
          loading: G.loading,
          modelValue: d,
          onVisibleChange: V,
          onClear: F
        }), {
          default: B(() => [
            (_(!0), P(we, null, Ye(c, (I) => (_(), R(te, ne({
              key: I.value
            }, I), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["class", "style", "loading", "modelValue"]),
        se(ln, {
          width: G.desc.dialogWidth || "900px",
          title: G.desc.placeholder || "选择" + G.desc.label,
          draggable: "",
          closeOnClickModal: !1,
          showCancel: "",
          modelValue: w.value,
          "onUpdate:modelValue": ee[1] || (ee[1] = (I) => w.value = I),
          "append-to-body": "",
          "destroy-on-close": ""
        }, {
          default: B(() => [
            ve("div", r2, [
              ve("div", u2, [
                se(J, ne({
                  style: { width: "300px" },
                  placeholder: "输入用户名进行搜索"
                }, E.value, { onChange: ge }), {
                  default: B(() => [
                    (_(!0), P(we, null, Ye(C, (I) => (_(), R(te, ne({
                      key: I.value
                    }, I), null, 16))), 128))
                  ]),
                  _: 1
                }, 16),
                se(ze),
                ve("div", o2, [
                  se(rt, { separator: "/" }, {
                    default: B(() => [
                      se(it, {
                        onClick: ee[0] || (ee[0] = (I) => _t(-1))
                      }, {
                        default: B(() => [
                          ke("组织架构")
                        ]),
                        _: 1
                      }),
                      (_(!0), P(we, null, Ye(K.value, (I, Z) => (_(), R(it, {
                        key: Z,
                        onClick: (le) => _t(Z)
                      }, {
                        default: B(() => [
                          ke(Ce(I.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                se(fn, {
                  ref_key: "multipleTableRef",
                  ref: de,
                  data: pe.value,
                  style: { width: "100%", height: "500px" },
                  "max-height": "500px",
                  onSelect: tn,
                  onSelectAll: nn
                }, {
                  default: B(() => [
                    se(Zt, {
                      type: "selection",
                      width: "55",
                      selectable: At
                    }),
                    se(Zt, {
                      label: "组织/部门/人员",
                      prop: "label"
                    }, {
                      default: B(({ row: I }) => [
                        ve("div", s2, [
                          se(hn, { style: { "margin-right": "5px" } }, {
                            default: B(() => [
                              I.type === 2 ? (_(), R(zt(pi), { key: 0 })) : (_(), R(zt(ji), { key: 1 }))
                            ]),
                            _: 2
                          }, 1024),
                          ke(" " + Ce(I.label), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    se(Zt, {
                      label: "操作",
                      width: "80"
                    }, {
                      default: B(({ row: I, $index: Z }) => [
                        I.type === 2 ? (_(), R(Ht, {
                          key: 0,
                          disabled: x.some((le) => le.value === I.value),
                          type: "primary",
                          text: "",
                          plain: "",
                          onClick: (le) => Ke(I, Z)
                        }, {
                          default: B(() => [
                            ke("进入")
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])) : ae("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              ve("div", i2, [
                a2,
                se(gt, {
                  height: "480px",
                  class: "tag-list"
                }, {
                  default: B(() => [
                    (_(!0), P(we, null, Ye(x, (I) => (_(), R(Sn, {
                      style: { "margin-right": "10px", "margin-bottom": "10px" },
                      key: I.value,
                      closable: "",
                      onClose: () => dt(I)
                    }, {
                      default: B(() => [
                        se(hn, { style: { "margin-right": "5px" } }, {
                          default: B(() => [
                            I.type === 2 ? (_(), R(zt(pi), { key: 0 })) : (_(), R(zt(ji), { key: 1 }))
                          ]),
                          _: 2
                        }, 1024),
                        ke(" " + Ce(I.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClose"]))), 128))
                  ]),
                  _: 1
                }),
                ve("div", c2, [
                  se(Ht, { onClick: v }, {
                    default: B(() => [
                      ke("取消")
                    ]),
                    _: 1
                  }),
                  se(Ht, {
                    type: "primary",
                    onClick: T
                  }, {
                    default: B(() => [
                      ke("确定")
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["width", "title", "modelValue"])
      ]);
    };
  }
});
const Vi = /* @__PURE__ */ Ge(f2, [["__scopeId", "data-v-3d7d6cbc"]]), d2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Vi }, Symbol.toStringTag, { value: "Module" })), g2 = {
  name: "ElPlusFormNbinput",
  inheritAttrs: !1,
  typeName: "nbinput",
  customOptions: {}
}, Fi = /* @__PURE__ */ Me({
  ...g2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {},
    rowIndex: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue);
    s("update:modelValue", o);
    const D = h(Object.assign({}, Mn(), r.desc.slots)), p = h({}), m = h(Be(r));
    return be(async () => {
      p.value = await Oe(r, { ...Le() });
    }), (N, d) => {
      const c = Q("el-input");
      return _(), R(c, ne({
        class: N.desc.class,
        style: N.desc.style,
        clearable: p.value.clearable ?? !0,
        type: "number"
      }, p.value, Te(m.value), {
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (z) => o.value = z)
      }), en({ _: 2 }, [
        Ye(D.value, (z, w, x) => ({
          name: w,
          fn: B(() => [
            $e(N.$slots, w)
          ])
        })),
        N.desc.rtext ? {
          name: "append",
          fn: B(() => [
            ke(Ce(N.desc.rtext.text), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["class", "style", "clearable", "modelValue"]);
    };
  }
});
const N2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Fi }, Symbol.toStringTag, { value: "Module" })), p2 = {
  name: "ElPlusFormNumber",
  inheritAttrs: !1,
  typeName: "number",
  customOptions: {}
}, j2 = /* @__PURE__ */ Me({
  ...p2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {},
    rowIndex: {}
  },
  emits: ["update:modelValue", "validateThis"],
  setup(f, { emit: s }) {
    const r = f, o = We("defaultConf"), D = h(r.modelValue);
    s("update:modelValue", D);
    const p = h({}), m = h(Be(r)), N = h(!1);
    be(async () => {
      var C;
      p.value = await Oe(r, { ...(C = o.form) == null ? void 0 : C.leng.nbinput, ...Le() }), delete p.value.min, delete p.value.max;
    });
    function d() {
      N.value = !1;
    }
    function c() {
      N.value || (D.value ? x(D.value, 0) : St(() => {
        var C, E;
        D.value = (C = r.desc) != null && C.required ? z.value.min : 0, (E = r.desc) != null && E.required || St(() => {
          D.value = null;
        });
      })), St(() => {
        s("validateThis");
      });
    }
    const z = Ie(() => {
      var E;
      let C = r.desc.attrs || ((E = o.form) == null ? void 0 : E.leng.nbinput);
      return typeof r.desc.attrs == "function" && (C = r.desc.attrs(r.formData)), C.min > C.max ? C.min = C.max : C.max < C.min && (C.max = C.min), C;
    });
    D.value !== void 0 && D.value !== null && (D.value < z.value.min ? D.value = z.value.min : D.value > z.value.max && (D.value = z.value.max));
    const w = m.value.change;
    w ? m.value.change = (C, E) => {
      x(C, E);
    } : m.value.change = x;
    function x(C, E) {
      var U, k;
      N.value = !0, C !== E && (C < z.value.min ? (Gn.warning(`${((U = r.desc) == null ? void 0 : U.label) || ""}最少不能低于${z.value.min}`), St(() => {
        D.value = z.value.min;
      })) : C > z.value.max ? (Gn.warning(`${((k = r.desc) == null ? void 0 : k.label) || ""}最多不能大于${z.value.max}`), St(() => {
        D.value = z.value.max, w && w();
      })) : w && w());
    }
    return (C, E) => {
      const U = Q("el-input-number");
      return _(), R(U, ne({ class: "ElPlusFormNumber-panel" }, p.value, Te(m.value), {
        modelValue: D.value,
        "onUpdate:modelValue": E[0] || (E[0] = (k) => D.value = k),
        onFocus: d,
        onBlur: c,
        onkeypress: "return( /[\\d\\.]/.test(String.fromCharCode(event.keyCode)))"
      }), null, 16, ["modelValue"]);
    };
  }
});
const Ri = /* @__PURE__ */ Ge(j2, [["__scopeId", "data-v-4ceeb83d"]]), z2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ri }, Symbol.toStringTag, { value: "Module" })), y2 = {
  name: "ElPlusFormPassword",
  inheritAttrs: !1,
  typeName: "password",
  customOptions: {}
}, Wi = /* @__PURE__ */ Me({
  ...y2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = We("defaultConf"), D = h(r.modelValue);
    s("update:modelValue", D);
    const p = h(Object.assign({}, Mn(), r.desc.slots)), m = h({}), N = h(Be(r));
    return be(async () => {
      var d, c;
      m.value = await Oe(r, { autocomplete: "new-password", maxlength: ((c = (d = o.form) == null ? void 0 : d.leng) == null ? void 0 : c.input) || 0, ...Le() });
    }), (d, c) => {
      const z = Q("el-input");
      return _(), R(z, ne({
        class: d.desc.class,
        "show-password": !0
      }, m.value, Te(N.value), {
        modelValue: D.value,
        "onUpdate:modelValue": c[0] || (c[0] = (w) => D.value = w)
      }), en({ _: 2 }, [
        Ye(p.value, (w, x, C) => ({
          name: x,
          fn: B((E) => [
            $e(d.$slots, x, { data: E })
          ])
        }))
      ]), 1040, ["class", "modelValue"]);
    };
  }
}), D2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Wi }, Symbol.toStringTag, { value: "Module" })), _2 = { class: "el-plus-form-quick-input" }, m2 = {
  name: "ElPlusFormQuickinput",
  inheritAttrs: !1,
  typeName: "quickinput",
  customOptions: {}
}, Gi = /* @__PURE__ */ Me({
  ...m2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue", "validateThis"],
  setup(f, { emit: s }) {
    const r = f, o = We("globalData"), D = We("defaultConf"), p = h({}), m = h(Be(r)), N = lt([]), d = h(r.modelValue);
    s("update:modelValue", d), be(async () => {
      var z;
      p.value = await Oe(r, { maxlength: (z = D.form) == null ? void 0 : z.leng.textare, showWordLimit: !0, rows: 3, ...Le() });
    });
    function c(z) {
      d.value = z, s("validateThis");
    }
    return He(
      () => r.modelValue,
      (z) => {
        z && z.length > p.value.maxlength && (z = z.substring(0, p.value.maxlength)), d.value = z;
      },
      { immediate: !0 }
    ), He(
      () => r.desc.options,
      async (z) => {
        typeof z == "string" ? N.splice(0, N.length, ...o[z] || []) : typeof z == "function" ? N.splice(0, N.length, ...await z(r.formData)) : Array.isArray(z) ? z && N && !Dt.isEqual(z, N) && N.splice(0, N.length, ...z) : N.splice(0, N.length);
      },
      { immediate: !0 }
    ), (z, w) => {
      const x = Q("el-input"), C = Q("el-tag");
      return _(), P(we, null, [
        se(x, ne({
          class: z.desc.class,
          style: z.desc.style,
          type: "textarea"
        }, p.value, {
          modelValue: d.value,
          "onUpdate:modelValue": w[0] || (w[0] = (E) => d.value = E)
        }, Te(m.value)), null, 16, ["class", "style", "modelValue"]),
        ve("div", _2, [
          (_(!0), P(we, null, Ye(N, (E, U) => (_(), R(C, {
            key: U,
            type: "info",
            onClick: (k) => c(E.label)
          }, {
            default: B(() => [
              ke(Ce(E.label), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128))
        ])
      ], 64);
    };
  }
});
const h2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Gi }, Symbol.toStringTag, { value: "Module" })), w2 = {
  name: "ElPlusFormRadio",
  inheritAttrs: !1,
  typeName: "radio",
  customOptions: {}
}, A2 = /* @__PURE__ */ Me({
  ...w2,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue);
    s("update:modelValue", o);
    const D = h({}), p = h(Be(r));
    return be(async () => {
      D.value = await Oe(r, { ...Le() });
    }), (m, N) => {
      const d = Q("el-radio"), c = Q("el-radio-group");
      return _(), R(c, ne({ class: "ElPlusFormRadio-panel" }, D.value, Te(p.value), {
        modelValue: o.value,
        "onUpdate:modelValue": N[0] || (N[0] = (z) => o.value = z)
      }), {
        default: B(() => [
          (_(!0), P(we, null, Ye(D.value.options, (z) => (_(), R(d, {
            key: z.value,
            label: z.value
          }, {
            default: B(() => [
              ke(Ce(z.l || z.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
});
const Zi = /* @__PURE__ */ Ge(A2, [["__scopeId", "data-v-8d4a5a8c"]]), v2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Zi }, Symbol.toStringTag, { value: "Module" })), Y2 = {
  name: "ElPlusFormRate",
  inheritAttrs: !1,
  typeName: "rate",
  customOptions: {}
}, I2 = /* @__PURE__ */ Me({
  ...Y2,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue);
    s("update:modelValue", o);
    const D = h({}), p = h(Be(r));
    return be(async () => {
      D.value = await Oe(r, { ...Le() });
    }), (m, N) => {
      const d = Q("el-rate");
      return _(), R(d, ne({ class: "ElPlusFormRate-panel" }, D.value, Te(p.value), {
        modelValue: o.value,
        "onUpdate:modelValue": N[0] || (N[0] = (c) => o.value = c)
      }), null, 16, ["modelValue"]);
    };
  }
});
const Hi = /* @__PURE__ */ Ge(I2, [["__scopeId", "data-v-d813a6a7"]]), L2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Hi }, Symbol.toStringTag, { value: "Module" })), T2 = { class: "el-plus-form-select-options" }, E2 = { key: 0 }, x2 = {
  name: "ElPlusFormSelect",
  inheritAttrs: !1,
  typeName: "select",
  customOptions: {}
}, Ki = /* @__PURE__ */ Me({
  ...x2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {},
    rowIndex: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = We("defaultConf"), D = We("globalData"), p = h(r.modelValue || (r.desc.multiple ? [] : ""));
    s("update:modelValue", p);
    const m = h({}), N = lt([]), d = h(null), c = { clearable: !0, ...Le() }, z = h(!1);
    r.desc.allowCreate && (c.filterable = !0), r.desc.remote && (c.remote = !0, c.filterable = !0, c.remoteShowSuffix = !0, c.loadingText = "远程查询中...", c.remoteMethod = async (C) => {
      if (C != null && d.value !== C && (d.value = C, N.splice(0, N.length, ...await r.desc.remote(C)), C === "" && r.desc.defaultItem)) {
        const E = N.findIndex((U) => U.value === r.desc.defaultItem.value);
        E >= 0 && N.splice(E, 1), N.unshift(r.desc.defaultItem);
      }
    });
    const w = Ie(() => {
      var E;
      const C = {};
      return (E = r.desc) != null && E.on && Object.keys(r.desc.on).map((U) => {
        C[U] = () => {
          r.desc.on[U](
            r.formData,
            N.find((k) => k.value === p.value),
            r.rowIndex
          );
        };
      }), C;
    });
    N.length <= 0 && r.desc.remote && (r.desc.initLoad ?? !0) && c.remoteMethod("");
    const x = Ie(() => (C) => r.desc.optionTip(C));
    return be(async () => {
      m.value = await Oe(r, c), z.value = !0;
    }), He(
      () => r.desc.options,
      async (C) => {
        typeof C == "string" ? N.splice(0, N.length, ...D[C] || []) : typeof C == "function" ? N.splice(0, N.length, ...await C(r.formData)) : Array.isArray(C) ? C && N && !Dt.isEqual(C, N) && N.splice(0, N.length, ...C) : N.splice(0, N.length);
      },
      { immediate: !0 }
    ), He(
      () => p.value,
      (C) => {
        var E;
        m.value.allowCreate && C && Array.isArray(C) && C.some((U) => {
          var k;
          return typeof U == "string" && U.length > (((k = o.form) == null ? void 0 : k.leng.input) || 20);
        }) && (Gn.warning("最大长度为： " + (((E = o.form) == null ? void 0 : E.leng.input) || 20)), p.value = C.filter((U) => {
          var k;
          return typeof U != "string" || U.length <= (((k = o.form) == null ? void 0 : k.leng.input) || 20);
        }));
      }
    ), (C, E) => {
      const U = Q("el-option"), k = Q("el-select");
      return z.value ? (_(), R(k, ne({
        key: 0,
        class: ["el-plus-form-select", C.desc.class],
        style: C.desc.style
      }, m.value, {
        modelValue: p.value,
        "onUpdate:modelValue": E[0] || (E[0] = (K) => p.value = K),
        loading: C.loading
      }, Te(w.value)), {
        default: B(() => [
          (_(!0), P(we, null, Ye(N, (K) => (_(), R(U, ne({
            key: K.value || K.v
          }, K), {
            default: B(() => [
              ve("div", T2, [
                ve("span", null, Ce(K.label || K.l), 1),
                C.desc.optionTip ? (_(), P("div", E2, Ce(x.value(K)), 1)) : ae("", !0)
              ])
            ]),
            _: 2
          }, 1040))), 128))
        ]),
        _: 1
      }, 16, ["class", "style", "modelValue", "loading"])) : ae("", !0);
    };
  }
});
const C2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ki }, Symbol.toStringTag, { value: "Module" })), b2 = {
  name: "ElPlusFormSlider",
  inheritAttrs: !1,
  typeName: "slider",
  customOptions: {}
}, O2 = /* @__PURE__ */ Me({
  ...b2,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue);
    s("update:modelValue", o);
    const D = h({}), p = h(Be(r));
    return be(async () => {
      D.value = await Oe(r, { ...Le() });
    }), (m, N) => {
      const d = Q("el-slider");
      return _(), R(d, ne({ class: "ElPlusFormSlider-panel" }, D.value, Te(p.value), {
        modelValue: o.value,
        "onUpdate:modelValue": N[0] || (N[0] = (c) => o.value = c)
      }), null, 16, ["modelValue"]);
    };
  }
});
const Ji = /* @__PURE__ */ Ge(O2, [["__scopeId", "data-v-c8429f7c"]]), S2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ji }, Symbol.toStringTag, { value: "Module" })), k2 = { class: "ElPlusFormStatus-panel" }, B2 = {
  name: "ElPlusFormStatus",
  inheritAttrs: !1,
  typeName: "status",
  customOptions: {}
}, U2 = /* @__PURE__ */ Me({
  ...B2,
  props: {
    modelValue: {},
    field: {},
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = ["#909399", "#e6a23c", "#67c23a", "#000000", "#f56c6c"], D = h(r.modelValue);
    s("update:modelValue", D);
    const p = h({}), m = Ie(() => ({
      background: o[r.desc.attrs.find((N) => N.v == D.value).c] || r.desc.attrs.find((N) => N.v == D.value).c || "#909399"
    }));
    return cn(() => {
      p.value.l = r.desc.attrs.find((N) => N.v == D.value).l;
    }), (N, d) => (_(), P("div", k2, [
      ve("i", {
        style: yt(m.value)
      }, null, 4),
      ve("div", {
        class: On(N.desc.class),
        style: yt(N.desc.style)
      }, Ce(p.value.l), 7)
    ]));
  }
});
const $i = /* @__PURE__ */ Ge(U2, [["__scopeId", "data-v-02c49aae"]]), P2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: $i }, Symbol.toStringTag, { value: "Module" })), Q2 = { class: "el-plus-form-switch" }, V2 = {
  name: "ElPlusFormSwitch",
  inheritAttrs: !1,
  typeName: "switch",
  customOptions: {}
}, qi = /* @__PURE__ */ Me({
  ...V2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue);
    s("update:modelValue", o);
    const D = h(!1), p = h({}), m = h(Be(r));
    return be(async () => {
      p.value = await Oe(r, { activeValue: 1, inactiveValue: 0, clearable: !0, ...Le() }), D.value = !0;
    }), (N, d) => {
      const c = Q("el-switch");
      return _(), P("div", Q2, [
        D.value ? (_(), R(c, ne({ key: 0 }, p.value, Te(m.value), {
          modelValue: o.value,
          "onUpdate:modelValue": d[0] || (d[0] = (z) => o.value = z)
        }), null, 16, ["modelValue"])) : ae("", !0)
      ]);
    };
  }
}), F2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: qi }, Symbol.toStringTag, { value: "Module" })), R2 = {
  name: "ElPlusFormTag",
  inheritAttrs: !1,
  typeName: "tag",
  customOptions: {}
}, Xi = /* @__PURE__ */ Me({
  ...R2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  setup(f) {
    const s = f, r = We("format"), o = h({}), D = h(Be(s)), p = h(""), m = h("");
    return be(async () => {
      o.value = await Oe(s, { ...Le() });
    }), He(
      () => s.modelValue,
      async () => {
        s.desc.tagType ? typeof s.desc.tagType == "function" ? m.value = await s.desc.tagType(s.modelValue, s.formData, s.field) : typeof s.desc.tagType == "string" ? m.value = (await r)[s.desc.tagType](s.modelValue, s.formData, s.field) : m.value = "" : m.value = "";
      },
      { immediate: !0 }
    ), He(
      () => s.modelValue,
      async () => {
        s.desc.format ? typeof s.desc.format == "function" ? p.value = await s.desc.format(s.modelValue, s.formData, s.field) : typeof s.desc.format == "string" ? p.value = (await r)[s.desc.format](s.modelValue, s.formData, s.field) : p.value = s.modelValue || "—" : p.value = s.modelValue === "" ? "—" : s.modelValue ?? "—";
      },
      { immediate: !0 }
    ), (N, d) => {
      const c = Q("el-tag");
      return _(), P("div", null, [
        se(c, ne(o.value, {
          size: o.value.size || "small",
          type: m.value !== "--" ? m.value : ""
        }, Te(D.value)), {
          default: B(() => [
            ke(Ce(p.value || N.modelValue), 1)
          ]),
          _: 1
        }, 16, ["size", "type"])
      ]);
    };
  }
}), W2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Xi }, Symbol.toStringTag, { value: "Module" })), G2 = { key: 0 }, Z2 = {
  name: "ElPlusFormText",
  inheritAttrs: !1,
  typeName: "text",
  customOptions: {}
}, H2 = /* @__PURE__ */ Me({
  ...Z2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  setup(f) {
    const s = f, r = We("showInfo"), o = We("format"), D = h({}), p = Ie(() => {
      const N = Be(s);
      let d = s.desc.linkId || "id";
      if (typeof d == "function" ? d = d(s.modelValue, s.formData) : d = s.formData[d], s.desc.linkType && d) {
        let c = s.desc.linkType, z = s.desc.linkLabel || "";
        typeof c == "function" && (c = c(s.modelValue, s.formData)), typeof z == "function" ? z = z(s.modelValue, s.formData) : z = s.formData[z], N.click = () => {
          r(d, c, z, s.formData);
        };
      }
      return N;
    }), m = h("");
    return be(async () => {
      D.value = await Oe(s, Le());
    }), He(
      () => s.modelValue,
      async () => {
        s.desc.format ? typeof s.desc.format == "function" ? m.value = await s.desc.format(s.modelValue, s.formData, s.field) : typeof s.desc.format == "string" ? m.value = o[s.desc.format] ? o[s.desc.format](s.modelValue, s.formData, s.field) : "--" : m.value = s.modelValue || "—" : m.value = s.modelValue === "" ? s.desc.default ?? "—" : s.modelValue ?? s.desc.default ?? "—";
      },
      { immediate: !0 }
    ), (N, d) => (_(), P("div", ne({
      class: ["ele-form-text", [...N.desc.class || [], N.desc.linkType ? "ele-form-text-click" : ""]],
      style: N.desc.style
    }, D.value, Te(p.value, !0)), [
      N.desc.title ? (_(), P("span", G2, Ce(N.desc.title + ": "), 1)) : ae("", !0),
      N.desc.icon ? (_(), P("i", {
        key: 1,
        class: On([N.formData.icon])
      }, null, 2)) : ae("", !0),
      ke(" " + Ce(m.value), 1)
    ], 16));
  }
});
const ea = /* @__PURE__ */ Ge(H2, [["__scopeId", "data-v-7ff94e29"]]), K2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ea }, Symbol.toStringTag, { value: "Module" })), J2 = {
  name: "ElPlusFormTextarea",
  inheritAttrs: !1,
  typeName: "textarea",
  customOptions: {}
}, ta = /* @__PURE__ */ Me({
  ...J2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue", "validateThis"],
  setup(f, { emit: s }) {
    const r = f, o = We("defaultConf"), D = h({}), p = h(Be(r)), m = h(r.modelValue);
    return s("update:modelValue", m), be(async () => {
      var N;
      D.value = await Oe(r, { maxlength: (N = o.form) == null ? void 0 : N.leng.textare, showWordLimit: !0, rows: 3, ...Le() });
    }), He(
      () => r.modelValue,
      (N) => {
        N && N.length > D.value.maxlength && (N = N.substring(0, D.value.maxlength)), m.value = N;
      },
      { immediate: !0 }
    ), (N, d) => {
      const c = Q("el-input");
      return _(), R(c, ne({
        class: N.desc.class,
        style: N.desc.style,
        type: "textarea"
      }, D.value, {
        modelValue: m.value,
        "onUpdate:modelValue": d[0] || (d[0] = (z) => m.value = z)
      }, Te(p.value)), null, 16, ["class", "style", "modelValue"]);
    };
  }
}), $2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ta }, Symbol.toStringTag, { value: "Module" })), q2 = {
  name: "ElPlusFormTransfer",
  inheritAttrs: !1,
  typeName: "transfer",
  customOptions: {}
}, X2 = /* @__PURE__ */ Me({
  ...q2,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = h(r.modelValue);
    s("update:modelValue", o);
    const D = h(Object.assign({}, Mn(), r.desc.slots)), p = h({}), m = h(Be(r));
    return be(async () => {
      p.value = await Oe(r, { ...Le() });
    }), (N, d) => {
      const c = Q("el-transfer");
      return _(), R(c, ne({
        class: [N.desc.class, "ele-form-transfer"],
        data: N.desc.options,
        style: N.desc.style
      }, p.value, {
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (z) => o.value = z)
      }, Te(m.value)), en({ _: 2 }, [
        Ye(D.value, (z, w, x) => ({
          name: w,
          fn: B((C) => [
            $e(N.$slots, w, { data: C }, void 0, !0)
          ])
        }))
      ]), 1040, ["class", "data", "style", "modelValue"]);
    };
  }
});
const na = /* @__PURE__ */ Ge(X2, [["__scopeId", "data-v-31ae19d3"]]), ey = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: na }, Symbol.toStringTag, { value: "Module" })), ty = {
  name: "ElPlusFormTree",
  inheritAttrs: !1,
  typeName: "tree",
  customOptions: {}
}, ny = /* @__PURE__ */ Me({
  ...ty,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    var w;
    const r = f, o = We("globalData"), D = h(((w = r.modelValue) == null ? void 0 : w.split(",")) || []), p = lt([]), m = h(!1), N = h({}), d = h(Be(r)), c = h();
    be(async () => {
      N.value = await Oe(r, { checkStrictly: !0, showCheckbox: !0, accordion: !0, props: { label: "label", children: "children" }, ...Le() }), m.value = !0;
    });
    function z() {
      s("update:modelValue", [...c.value.getCheckedKeys(!(r.desc.isPId ?? !0))].join(","));
    }
    return He(
      () => r.desc.options,
      async (x) => {
        typeof x == "string" ? p.splice(0, p.length, ...o[x] || []) : typeof x == "function" ? p.splice(0, p.length, ...await x(r.formData)) : Array.isArray(x) ? x && p && !Dt.isEqual(x, p) && p.splice(0, p.length, ...x) : p.splice(0, p.length);
      },
      { immediate: !0 }
    ), He(
      () => r.modelValue,
      (x) => {
        D.value = (x == null ? void 0 : x.split(",")) || [], c.value.setCheckedKeys(D.value);
      }
    ), (x, C) => {
      const E = Q("el-tree");
      return m.value ? (_(), R(E, ne({
        key: 0,
        ref_key: "treeRef",
        ref: c,
        class: x.desc.class,
        style: x.desc.style
      }, N.value, {
        "default-checked-keys": D.value,
        loading: x.loading,
        "node-key": "id",
        data: p
      }, Te(d.value), {
        class: "el-plus-form-tree",
        onCheckChange: z
      }), null, 16, ["class", "style", "default-checked-keys", "loading", "data"])) : ae("", !0);
    };
  }
});
const la = /* @__PURE__ */ Ge(ny, [["__scopeId", "data-v-cce11306"]]), ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: la }, Symbol.toStringTag, { value: "Module" })), ry = {
  name: "ElPlusFormTselect",
  inheritAttrs: !1,
  typeName: "tselect",
  customOptions: {}
}, ra = /* @__PURE__ */ Me({
  ...ry,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue"],
  setup(f, { emit: s }) {
    const r = f, o = We("globalData"), D = h(r.modelValue);
    s("update:modelValue", D);
    const p = lt([]), m = h(!1), N = h({}), d = h(Be(r));
    return be(async () => {
      N.value = await Oe(r, { filterable: !0, clearable: !0, props: { label: "name", value: "id", children: "children" }, ...Le() }), m.value = !0;
    }), He(
      () => r.desc.options,
      async (c) => {
        typeof c == "string" ? p.splice(0, p.length, ...o[c] || []) : typeof c == "function" ? p.splice(0, p.length, ...await c(r.formData)) : Array.isArray(c) ? c && p && !Dt.isEqual(c, p) && p.splice(0, p.length, ...c) : p.splice(0, p.length);
      },
      { immediate: !0 }
    ), (c, z) => {
      const w = Q("el-tree-select");
      return m.value ? (_(), R(w, ne({
        key: 0,
        class: c.desc.class,
        style: c.desc.style
      }, N.value, {
        modelValue: D.value,
        "onUpdate:modelValue": z[0] || (z[0] = (x) => D.value = x),
        data: p,
        loading: c.loading
      }, Te(d.value), { "render-after-expand": !1 }), null, 16, ["class", "style", "modelValue", "data", "loading"])) : ae("", !0);
    };
  }
}), uy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ra }, Symbol.toStringTag, { value: "Module" })), ua = ["image/jpg", "image/png", "image/gif", "image/jpeg"], oa = [".jpe", ".jpeg", ".jpg", ".gif", ".png"], sa = ["video/3gpp", "video/mpeg", "application/mp4", "video/mp4", "video/ogg", "video/x-flv", "video/x-msvideo"], ia = [".3gpp", ".mpeg", ".mpg", ".mp4", ".ogv", ".flv", ".avi"], oy = ["audio/x-wav", "audio/x-ms-wma", "audio/mp4", "audio/mp3"], sy = [".wav", ".wma", ".mp4a", ".mp3"], aa = ["application/x-msaccess", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "	application/vnd.ms-powerpoint", "application/vnd.ms-excel", "	application/msword", "application/pdf", "application/vnd.ms-works"], ca = [".mdb", ".docx", ".xlsx", ".pptx", ".ppt", ".xls", ".doc", ".pdf"], Ma = ["application/xml", "application/x-sh", "application/json", "application/javascript", "application/java-vm", "application/java-archive", "text/html", "text/plain"], fa = [".xml", ".sh", ".json", ".js", ".class", ".jar", "html", ".txt", ".wdb", ".wps"], da = ["application/x-rar-compressed", "application/x-msdownload", "application/x-font-woff", "	application/x-font-ttf", "application/x-7z-compressed", "	application/vnd.android.package-archive", "application/zip"], ga = [".rar", ".exe", ".woff", ".ttf", ".7z", ".apk", ".zip"], iy = [...ua, ...sa, ...aa, ...Ma, ...da], ay = [...oa, ...ia, ...ca, ...fa, ...ga], Yl = [
  { type: "pdf", suffixes: [".pdf"] },
  { type: "txt", suffixes: [".txt"] },
  { type: "excel", suffixes: [".xls", ".xlsx"] },
  { type: "word", suffixes: [".doc", ".docx"] },
  { type: "ppt", suffixes: [".ppt", ".pptx"] },
  { type: "zip", suffixes: [".zip", ".rar", ".7z"] }
], zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, audioSuffixes: sy, audioTypes: oy, fileSuffixes: ay, fileTypes: iy, imageSuffixes: oa, imageTypes: ua, officeSuffixes: ca, officeTypes: aa, otherSuffixes: ga, otherTypes: da, suffixTypes: Yl, textSuffixes: fa, textTypes: Ma, videoSuffixes: ia, videoTypes: sa }, Symbol.toStringTag, { value: "Module" })), cy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR4nO2bbUwbdRzHf5WwTajTF5ApzjnHi+F0DyKbCEbQpehe6KjMhBghaqIBo44Iy5TErFGSLcqi7IXgC+MCL+SFW1FfjNCoTCNxhPmAhrkpyMBsgB0ZDMooD+fve8thr73C9XrEXvf/JM39f3ft9f/7/J/ueqmNwvC4uzh/3mbbK5FUyOH/yv2pW744lFu9m4umoynA4S5+jo98wsWYoCRjD/VdPv+RK7uyjENTCRGAlp+z0TdcjBkgAIz4vAeqMsve5qJphAgocBe3SDZalu5mFEUAODN6bt/BnOpaLppCiABHS7HEm5giUIB/zk/d3p6KI3k1dRxGjeUEgHlpfmp4auSJ/ZmvfMVhVFhSADBLgmUFgKmZq1OdI6fzP975fieHhrC0ADDuv+L7w9ubWfdozVkOI8byAsD07PTgpOTbXrH5xWEOIyIuBACjEuJGALgwMfTXD4NdmS3Oo5c51EVcCQCjV0dPVWx7KZuLuog7AWBsevzrV7e+sJOLSxKXAsDfVy60Vm9/bRcXF8USApwbdpF9RTKXIqPn0rklb6MtISDn1ixKv2U9GWGpO0hLCFhFK+jpjCe5ZIzFJFhCALjLvpYeWqt7cg+ha/hnzTtIywiQJInSVqVSdloW2VfaeU9k4Da6f3ywqObB/cc5XMAyAhRm/NO0OsFOibYEun11Gu/Rj39u1t/w2LsrubiA5QQozM3OyjIi5btnvlTlrAqAVQQYxVPYrMpZFQAhQAgQAoQA3sQtQoAQIASoclYFQAgQAoQAIYA3cYsQIAQIAaqcVQEQAoQAfQLsicmUnJhEw75/OApF63j6zXdy7KWJmUmOFmdNUiqtuTGFP7Oeesf6qW98QNfnlsI0AU/x46pnM4qovP1NTuq/JBXey31LllDe/gZH12jb/Sk1/NpIx/tOcBSeko1F5Eznx2H8eQUk7+49QU1nj3FkHNMEoHJIkn+xp33f18gVVCjZuIcfaBbx/nfoF28P77kGBDT9foyT+IwjbfAYzPVApfw+N4vCebembCLHHXlUsO5hcp06TB1DXfxOY5gmAKBL1+cforaBk1T7UwPvIbmyEIMEghPVI8C1o5LlJlEVywsG0iEkGkwVADAUyjaXUu2PDXLLNDrqqNt7hlydh/moGr0CNrDYl3loRZusFqYLAKj0lpS75bkArYR5QavyegQoQ2CIz4Ux332phyfB83zEHJZFAJJGy2MbPO4D0SMAYBiV3VsqDzEAGR4eZu6+Vk2xkbAsApRhMDnjoz/H+mUJWugVoIClMJd7RM5tWdzDNsnJl3r2ylujmC4ArYSJEN21bfCkXA6XZKQCAkGvwOSK76n/rZH3GMNUAejyH+YflFteWe/DLYEgGgGglgUArRVCL6YKOLDjddqWcg+VcfKYABVQUczkwd1VjwCc0zPwrbyiBALZmGc6Lp7mJbee9xjDNAFKS2tdmKCyTY4jIfMBBKBXdPMrkAnuQbjoAZCH8Y73dVzs4hWgX+7+jnV5dBOfN1h2pJgmoOq+crki4VoTlcZMDgFKLyjnGHNGMBAQeN1QwFd9mPjwAlgG8cJ34TujwTQBVkUIEAKEAFXOqgAIAde7gFj846RZ2CT6vM3ZXMjFBUIExOJfZ80iQaJHWp3N7RRAiAAQa3+eNgWJnvc4m49SEJoCAHrCPFGF1YcDuv0NRB8Et7zCv9Ii61+eHeesAAAAAElFTkSuQmCC", My = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEWElEQVR4nO2bS2gTWxiA//Q+ehFusrgPqjb3XkQu9zaCUlFsV9ZXU0UqPuJCBKtGN4LV1o0LXyAubLQRdRN8QEUxPlDxERW1q0YFXWhbLYgWk9j6qDVRY9PajP+fMGlOpxkzdcQ58XzQmf+fOUzzf3POmRmGMUEGdhYUTjWZ4mtBgnmYflMmVFVdn7Fj+3QMdWdIAa6C0cskkA5haAhKa9dD9+P2A3P2712Jqa4oBCTOPMRvYGgYSAARCYQ22927t2GoGwoBrpGjzkgSVGJoGGQBhN4SFALqCkZJuDIU6QKIrra2jXM9nh0YfjFcCoj3xz+8DQXnVuzZcw3TL4JLAYReErgVQOghgWsBRPR1d7Tj7v3ipb5zbZhqhnsBRF+0J9DX9XLSDLf7OaaayAkBxHAl5IwA4sPrN0/vHT0yfl17+xtMsyKnBBDvOp/fmlW3cwqGWZFzAohoV3fWD085KYDIVgIXAmyLHWCxFmKkjdDtO+cWeY+pPtdwIeCvsqlQOLEYI+187uGJCwE/mH+Fyaucyh+bJWoSFMc0ogDCUvQ/2GZXYDQ8nlxvrF5y8bwbQwZuBBAjxoyBf6dPgxEWM2ba+NgTg1etDxfMP9pwGtMUXAkgov1x+PG330H6+Sco+Odv3JI9H3v7elf7LuRjmII7ATK9cQne9/djpI3tXS+YmpmE4EXAcKntfMbUzCSEECAECAFCAK5yFiFACBACmJqZhBAChAAhQAjAVc4iBAgBQgBTM5MQQoAQkJ2AfIsF/igqwmiAl62tEAuHMWIZqm3Q78elOoUlJbhU0vs2Ai+aWzDSjm4CHKdOgLW0FCOWcCAAl6vXQ6CpCbMkmdpSEXc9HmjxnsCMpfLQQRhrL8doaFwjR+NSO7oJqOkIQZNrF/jrXJgloSJL8EUmne2GmeX4RiaAW5Vt/xxnA7PVCjaHI1Fk83EvSluHewZwnD6JSwDv/IW41I+vKoCg7r7mYSuzL1Nbgl582ut3K/ZzK4BYevUKRIJBOFu1HDP1tgQVS71m338D8wRtI7gTQF3befsmsy9TWxm5F3gXLErNHVwIoLHbgn8yNLaLnSvhFxwGnslTUlcEaqsmgOYOmih9OA/IxyMB1gxXgR48bnpv0YKuAgZD3Z5m9hubNqcmQILaqgkYW2GHyoMHFD0g32yGxk1bYDCxSDjxf4aDrgLUikrnc23Ltm1N9BzqNbI4EkAYegioFZWOWlt5zgjgjVF6sd+FABr75fW7wIISGmbOYrp1TglY0/YAi2vG8e3HDCdLW/JGiCbNWCSCl8sVuC859mUML8DurodHPh88uuTDTJ1ipxMnunKMBoiFI1i0H2+DvRgnrxbplNTW4PZI4lZZT3QTwCtCgBAgBDA1MwkhBHzvAoz44aRemExwtqbj2TwMUygEGPHTWb2QIK9sQ2ewEdJQCCCM9vG0HpjAVFXTGToMgxhSAEE9Ic8Ur+Z9OFC3j0t59YPPvMwn4xjMX8B9vzAAAAAASUVORK5CYII=", fy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACfUlEQVR4nO3bS2sTURTA8TNJaqWiVMhCUQsqiuAjGG2pKLbGLrRY00EEoS4s1ro0gitBg3XhUl1aEf0ERt372PoRiuLCB2Jt2tKmSZpMcntOIaW308dMeqFzL+e/ued0d39JSlMYC1bo8ctMp6jCHQHQi+uG1npk36fu07HzOCpvWYCh4cwNIeA1joGo48QhmJiaeWUnTg7gqjQXAL3y1Sp8xjEwEQA1lSukL3fGh3BUlgvg0XDmHQhI4hiYagCUagQ3wIuMwCNQLQag/k9O37/a1fYEx3WnJQD+ci7kcoWenkT8I67rSksAShWCtgCUCgStAah8sZT/m83GbyYTI7j6TnsAquxUflkgWrvaj/7D1VdGAFD1IhgDQOHH4efItx+xu/32JK6eMgqAyuWLXy+dPd6Oo6eMA6DysyXPX56MBKC8ImgBEDvYAs1bm3Dy1+/R7Ifr3WdW/V6jBcDeXVFo2RHFyX9rfXnSAiASCUHb4f3QEAnj5r/VELQAoLZv2wLHDuzBqb6+/xlNDSQ7nuMopQ0A1bipARF2Q9PmRtz85VQqMDY+feXaxVNvcV1IKwCqOFuGSDiM/7MRsDPajD/xXtlxSqm+C5KedgC1SmWH/vLDyV9P7/VJd5YWSheAekvftqU7SwvFAAzAAAyAh7ExAAMwgHRnaaEYgAEYgAHwMDYGYAAGkO4sLRQDMAADMAAexsYADMAA0p2lhWIABmAABsDD2BiAARhAurO0UAzAAAzAAHgY29oAAXxwUlkWvE8P2r04LeQCCOKjs6oKheDcg1v2F1iUC4AK2sPTKrIs6H84aL+BJS0LQM2/EwSktP844Ns+ZMGzpa98rTlAGolQGdxvxgAAAABJRU5ErkJggg==", dy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD00lEQVR4nO2bT0gUURzHf2/+rIsRGVRS0db2HwS1gxoFVkR1sjzkoUNlhw5BUoeORVAdFYoOHVQyT0FdqlvRH+vUerAEISkKkwrDyBDM/eO8vm/8k7M7u85sI7szvQ/MvN9vZnm77zNv3rzd2WGUhWRveK9B/Bxx3oi0oCirzjzTN9zYj9BzbAUkYuFmTsZthEWBuvYiPtS3O1r0VjN5TIYA88hz4znCosEUAHhi+LIebb+C0DMyBMRjoS4iOomlaJgVIPBagp2APhTVWIqG+QIEXkqwE8BRFBXpAogbv9X4cAPb1PkU2T/hTwECjyT4V4DAAwn+FiAQEhIfd7KN3f3IXON/AYAZE8NKaLSGlXeMIHVFIAQI8pUQGAGCfCQESoDJ1K9eLdJWi8gRwRMAePKH4y9PgRQgcCrBFwKUFSeIlUQQucOJBF8IYKX1pCyvR+Sehb43+EIA52FSV7cQU0uQuSeXBF8IMAlVkbqyAUF+ZJPgHwEm5TgVDuGUiCDOg8TQMS3aeRfRHD4TgCOZwspYhksDFrcY8VR497COaA7fCZiFG1iJxSXhXQlLmy2JwC8C8qWkVgqwtNmSCKQAKUAKkAJQBBYpQAqQAixttiQCKUAKkAKkABSBRQqQAqQAS5stiUAKcCiAlVYt+MMkn+jHzcoxvK4Md3bWI3+LrTaI/aiPj/cgcVj3+Eus3eOZAK2il5TSSkTZSb5vIj72kJTyFtIirZR8dxAfvAd7rGgVMawZpQZqUBLpO74T03ILSA7UZheaA88EpBOqidPUl2s09fUqskyEMBaKULJ/23SvmEGNtJFafjZngxaq2w0FE0ChDaTjSIsekPrQhA1487LDpG+5R6nPF8gYuYkt9ixYtwsKJwBYGvzzEYS8hpBXEHIUe7PjpG6nFFSAQI12kLriOBno7gyDn+j6808JO5zW7YSCCxAjvl45iEGujFKfTpMx2o2NuXFctwMKLkBdc8n8xwePDyHj6AF1/08PYEv3kL79sfk6A5dHbdsTjAF/B8VsOKnbKYUTMNP1xeQoNXgAG6b/+qJF26cHxaBfBcRkh+FSmOzfauny2ub7uOffgFMhwPOAucmO3UxQ9AzIyTUe5KrbLYsmQBzJKYzoYuqbjhj4eGIo64gv5v7qutbpscBGgFk3Gp+th7hh0QT4BSlACpACLG22JAIpIBZ6g6IKSyBxIqCLiuzBSc/g7EFJXbwR0RwZAhKxJdWYkvQhDBwKU/bpNZMvaB4ZAgTF9vC0FzBSToVqJ7soDVsBAvMhaoOfJ8aPIPUv6PaKwq6nH/lZ/gBjD5Nf2bkbBQAAAABJRU5ErkJggg==", gy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/UlEQVR4nO2bW2wUVRjHv12KhRZ7UUq1Nyhp60MxRmobpSa21ZhIQ1hjrPIi9RJ9UnmBB8VgjIlRHxSIMSUhXh6kQGKKCSoaaF9KogZtIk1sMbbZFhB3WZZCd9nr+P1nPZud2Xt3XHaW80ume77ZzuX7nW/OnO1sLZSE1UfP9VCYXidSbBzeVF5sqTz1fkfto9w0nIQCVh+eepvf2kMFwq72O2nmmu/gpw/VvcShocQJiPS8MsrNggECwJwnuGd/V+073DSMeAGHp8eI6BFeCgYhABgtIZEAhV8KilgBYGrB98bBTXXvcTNnTCkgFFa88zeCWz7puuskhzlhSgHAKAmmFQCMkGBqAcDlC3kmrgY2ft9XP8Vh1pheAPCGlDmXdUXn3ntXXeIwK4pCAFiqhKIRAFy+oH3Y7rlv9slmN4cZUVQCwEVv8KePOmsf5GZGFJ0AcNkXzPjDU1EKAJlKMIWAZ9dVUFP5cm5lxy9O7zdHexq2cjMpphDQt2YlPVBTxq3sSffhyRQCKpcRDbZUU2mJlaPsSSXBFAJAO18C/XwpLJWTf1/fceKxtXu5qcE0AkDjcittXns7VZaWcJQdN0Jh+uNa4KmvHq77msMophIAFH+IaqwWKuV2U/UK/pk5/lDYf2LLemwaxXQCBEowTIovxK3scL3QrslZEwCzCFgqzmfaNDlrAiAFSAFSgBTAL0WLFCAFSAGanDUBkAKkAClACuCXokUKkAKkAE3OmgBIAVJA/gRsqCqlCv5LL5h0++hqIMyt9DSVl1BDWeRJ0bwnQPbFILcywzABIz311L0m/mnNt+ev04FpN407vBwl5uXWKnqlrYoTiSQhODSzQG9NOJKK6K5ZSTvb74g77vg/Hto94aSzLDEdhglwDLTS8OwCDfNJC9Cjm+vLaROf4ND0FfWk9OzrrKVtzRXRbSEK2yG5XZycm5Pv+8EeJ2EbPxTZ11VLc4sB3q9DTRY9j+Pt5IenjWUl1PejXV2XCkMFfDh5mT6YdHGkBYngpF77+RId4kQFIondvzlo6Fz8dxgg4hhX1u+cnG3sPK+JgJI/099Mp7mnnxu/GCenki8jVNQQV57+PT15EQCQSDsn1DLyF0cRzvSvUw+48fgsJUPI6+UqQC+DL7vvViukN4MeTkfeBKA0v+iuI9vofLTMRx9vSrkNEL0dWyV/2targ+TWmKpYKnkTIBLePn6BB8ZFtQdHehuicSr0+0Z8gMeUNxOMKdmSNwH6hEWsHxcSod83Ygyar/K2uZI3AWLAE9eyKO10PSkqJ1bUrzx2uP18d+AxIFfyIgCj8ilOAjuPHfDEwNjB65KN1vtZGr4S03F8JjrgiXViPMmF/10Aehr3ekxW9CcsLoNkEx5RNfoqgVC1Cvj3t/NtEBUVC6oGxxw8fSEqLRmGCsAMTCSIk8SJYMFOMQkSJRyLSNLOExpc12ev+GhDdWQiBGnf8UwS93o92C8qqOK2ZapASMCCuw2qY84TVIXrpeoxTIC4XwswQ8MCIUgsVU8gWUxcnqhfxVEEJIMpdCJpAkh+9/4adfvG/6bRC/6QejxUYrrkgWECzIoUIAVIAZqcNQGQAm55AUemRkixpPyCsWmxKMecA/fYuBUlXkAB/uusYVgtvc6nW8cohjgBoObI9KCi0GfcLBosFnreMdD2OelIKAColaCEd5j+cuCyJ4v1Y33PC/4FkIYsbolXiDkAAAAASUVORK5CYII=", Ny = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD3UlEQVR4nO2bS0wTURRAb/kIQQWMXYAfRIlKokhE+UUiHwkqAaESowajEhF3iokrE0VxYcJGZWeNEVhoXAj4W0iisDAxLA0uRMUoavgIyqcWaAvjvWix005rB16lb3yHTHrvhQHuee/Nm2ZAB264dKMpS5qCUxJAMabzSvLGNc/ytyXuwJA5igIuXm+6AABVePgFmVvi4fvIj5uGnK3lmDLFRQCN/NQUtGLoN5AAYsQ0VrUnK6kaQ2a4CMDRbwP8mXj4DXYBBGsJSgIkfPErHAUQX4dGz+7LTbmM4ZzhUgBenMdMprHCwpykp5jOCS4FEKwkcCuAYCGBawGEedxi7hkcTDpWlNOJqWq4F0BYbZOfdCAl56Yl9GGqCk0IIGYrQTMCCFwO3Z1v3yeeLjMMYeoVmhJAmMzj7QXbN6dh6BWaE0CYJyxev3nSpADCWwlcCEhcFwORi8MwUsfn/sEHh/IzijB0CxcCVi/XQ0yUHiP1/O3NExcCgoICIGVDHAQHBWKmHk8SuBBALAlfCJvWrsRodrz70l9ZXpR5DUMZ3AggQhYEo4QVEBYagpk6bJOTMPBttOTA7vRGTGfgSgAxPmGFoMBAkPAjWh+JFe+x2myWytJdMnvcCbBjsdrozg8jdVw5UyrrWZYQvAiYLVUnDLKeZQkhBAgBQoAQgC+aRQgQAoQAWc+yhBAChAAhQAjAF80iBAgBQoCsZ1lCCAFCgG8E0JOdoVEzRvMLMwGHCzIgdpn7pzW9A8NgbGzFCGBVtB6OFGaA8V4r9A4OYwVgfWw07M9LxUgOSWrv6IL2V12YsYeZABrRiEWuz+visbHUhLjpJp686MDKHwH1D5/Dx54BrPx64EkH1RxJw3NJDp1L34M1zAQoEYoPLk4ezIMhkxkasLFxixWrngVUG5sxk1NRkg2RKLem/jFmbPGpAPuycJzqhFoBVKdD6XNzxWcCaNrvTE9QnLpqBZDIKH0E1NRxMgOilkZM/9I06g2P5Gua8CSAao6QSLqOKIlkgU8EVOzFNRseBrW3W2bWvSOeBDgzvQvgDuCL5gnmAqgJOu62tEPnhx6suOJJgNIS8CVMBdgbo9GiKesO+9dpSgBtebRd0ZR33PKU0KQAuuLTBes1Tvs+vPg5Q2v55ZtujDQqgG5j6Y7NHSSg9k4LRr93CRRA9wdUJ+hcEkC1fwkzAbwiBAgBQoCsZ1lCCAH/vQBjUzNI4PEPjLlFB/erKgzFGM3gIsAf/3WWFQEBkH3uuKENHHARQFQbm45KEtzCUDPodFB2vsJQB04oCiCmZ4IEldwvB5z2ATq46jzydn4C6fJqX6F9jQkAAAAASUVORK5CYII=", py = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADs0lEQVR4nO2bTUgUYRjHn3HLpfwoNbX8iMQO5cWKIiGw0sJLpWCXECwh8JbiwcBDkkFSkiVUYBSVUB3S0OhipUVhJEToISH8wtTMJLWt1FVnpudRtHl3d2xmd6SZ7f0dZp7/7gPvvr+dndmZYQRQof/A5n0gSwUgy1kY/ynBWbnNYafOpmNpOB4FDKQlnpBBuo2lKQjNLYDZz323Ikoun8RoKG4C5r55SXyBpWkgAYT0dag0rPhCGZaG4S4gPaEeZMjE0jQsCCCMluAuIC1BxpWpUAogxL7OkvDSa+VY+owlBciSOAkjg4fXnq5swugTlhRAGCXBsgIIIyRYWgAhOsYmxO6OHZFVDz9i1I3lBRCyc7J/zeSPXULh+WGMuvALAYS3EvxGACE5xj5Bc0NyWH3bOEZN+JUAQhwdbg0vKk/BUhN+J4DALUHzyZNfCiC0SrCEgKCMo2CLjsVKH1Mf3j+OrqjJxFIVSwiw70wFe9J2rPTzt5MnSwgQVodA8JEcEALtmPSzlARLCCBWbNoCq1MzsPIO57vXhVFX66qwZLCMAEKIiIGgvRkQEByKSR/yjBNmezqz15XffIRxEUsJIKRZCYTQCJBtgRAYtxFf0Y48Mz0dc6PejuUilhOwgCTiVcsZESt9JLzpZ+bMBKLfIgK8Jb65l5kzEwgugAvgArgAXPktXAAXwAUwc2YCwQVwAVwAF4Arv4UL4AK4AGbOTCC4AC5AmwABr8wGJm7F6g+zw4MgfhnAikVrr6c+V5ztrbj0HsMERF66D/Zt7jdhpZ8OGL1YDFMtTzHNE1FWDav2HMSKxbVXrU+Jo6YKHHfdLu9rxjABcU09bh/GnpwCoccLcL0bhvMPwUxXB76Ksiof4BJgpOgYLudR61XiaQxfWVYBBG3GsQ1tzHueBBCeepWojeELyy6AiKp+AiL+xr+dycekLoBw7VWy1BjesuwCbOvjYMO9V8x7agI89SpRG8MXDBXwq7EWJhrrMM2zMjEJgrPz5u7dDeWkgow7OYIECEEh8P36OUzzqPUqoTFMLcAV2qvTYWocJ6o8xJEA2tkpUetVQmOYWoDWD0cCnO1vNfUq0TOGVrgALoALYObMBEKrAPrbOtnyDI8CtZiWJqy4AgW0aupVomcMrRgmwKpwAVwAF8DMmQkEF/DfCzDhg5OGIUBDfFNvFlaLuAsw4aOzhhFg2x//vOslKHATQJjt4WkjECAgL665+w644FEAMbclyGIhWP3ngJs9CLYrrt/8Ar8BHxywX5M7ETcAAAAASUVORK5CYII=", jy = { class: "upload-panel-icon" }, zy = {
  key: 2,
  class: "el-upload__text2"
}, yy = {
  key: 3,
  class: "el-upload__text"
}, Dy = {
  key: 1,
  class: "upload-hands-submit"
}, _y = {
  name: "ElPlusFormUpload",
  inheritAttrs: !1,
  typeName: "upload",
  customOptions: {}
}, Na = /* @__PURE__ */ Me({
  ..._y,
  props: {
    modelValue: {},
    field: {},
    loading: { type: Boolean },
    desc: {},
    formData: {}
  },
  emits: ["update:modelValue", "validateThis"],
  setup(f, { emit: s }) {
    const r = f, o = We("defaultConf"), D = { excel: cy, pdf: My, file: fy, txt: dy, word: gy, zip: Ny, ppt: py }, p = h((typeof r.modelValue == "string" ? [{ url: r.modelValue }] : r.modelValue) || []);
    s("update:modelValue", p);
    const m = h({}), N = h(Be(r)), d = h(!1), c = h(0), z = Ie(
      () => p.value.map((Y) => {
        var V;
        if ([".png", ".jpg", ".gif", ".jpeg"].indexOf(((V = Y.raw) == null ? void 0 : V.suffix) || Y.suffix) >= 0)
          return Y.url;
      }).filter((Y) => Y)
    );
    be(async () => {
      var Y, V, F;
      (!o.upload || !o.upload.action && !((Y = o.upload.minio) != null && Y.getObjectAuthUrl)) && console.warn("缺少文件上传配置,无法使用upload组件~"), m.value = await Oe(r, {
        drag: !0,
        listType: r.desc.upType === "file" ? "text" : "picture-card",
        multiple: !!r.desc.multiple,
        limit: r.desc.multiple ? r.desc.limit || 20 : 1,
        autoUpload: r.desc.autoUpload ?? !0,
        accept: r.desc.accept || zi[`${r.desc.upType || "image"}Types`].join(","),
        maxSize: r.desc.maxSize || (r.desc.upType === "file" ? (V = o.upload) == null ? void 0 : V.maxFSize : (F = o.upload) == null ? void 0 : F.maxISize),
        beforeUpload: U,
        onRemove: w,
        onSuccess: x,
        onExceed: K,
        onPreview: k,
        httpRequest: X,
        ...Le()
      });
    });
    function w(Y) {
      E(Y, 0);
    }
    async function x(Y, V) {
      var Ue, Ke;
      const { objectUrl: F, previewUrl: ge } = await ((Ke = (Ue = o.upload) == null ? void 0 : Ue.minio) == null ? void 0 : Ke.getObjectAuthUrl(V.raw.uploadId));
      V.raw.shareUrl = F, V.raw.previewUrl = ge, V.url = C(V.raw), E(V, 1);
    }
    function C(Y) {
      if (Y) {
        const V = (Y == null ? void 0 : Y.suffix) || "";
        if (V) {
          if ([".png", ".jpg", ".gif", ".jpeg"].indexOf(V) >= 0)
            return Y.shareUrl || Y.furl || Y.path;
          for (let F = 0; F < Yl.length; F++)
            for (let ge = 0; ge < Yl[F].suffixes.length; ge++)
              if (Yl[F].suffixes[ge] === V)
                return D[Yl[F].type];
        }
      }
      return D.file;
    }
    function E(Y, V) {
      var F, ge;
      if (V === 1)
        p.value.push({
          name: Y.name,
          furl: ((F = Y.raw) == null ? void 0 : F.path) || Y.url,
          url: C(Y.raw),
          fsize: Y.size,
          uid: Y.uid,
          mimeType: (ge = Y.raw) == null ? void 0 : ge.type,
          suffix: Y.raw.suffix,
          busId: r.desc.busId,
          busType: r.desc.busType
        });
      else {
        const Ue = p.value.findIndex((Ke) => Ke.uid === Y.uid);
        Ue >= 0 && p.value.splice(Ue, 1);
      }
      s("validateThis");
    }
    async function U(Y) {
      var ge, Ue;
      Y.suffix = Y.name.substring(Y.name.lastIndexOf("."));
      const V = pe(Y, zi[`${r.desc.upType || "image"}Suffixes`], m.value.maxSize);
      if (V !== !0)
        return Gn.warning(V), !1;
      const F = await ((Ue = (ge = o.upload) == null ? void 0 : ge.minio) == null ? void 0 : Ue.getUploadUrl(Y.name));
      Y.action = F.uploadUrl, Y.path = F.objectUrl, Y.previewUrl = F.previewUrl, Y.uploadId = F.uploadId;
    }
    function k(Y) {
      var V, F;
      [".png", ".jpg", ".gif", ".jpeg"].indexOf(((V = Y.raw) == null ? void 0 : V.suffix) || Y.suffix) >= 0 ? (c.value = z.value.findIndex((ge) => {
        var Ue, Ke;
        return ge === (((Ue = Y.raw) == null ? void 0 : Ue.shareUrl) || ((Ke = Y.raw) == null ? void 0 : Ke.path) || Y.furl);
      }), c.value < 0 && (c.value = 0), d.value = !0) : window.open(((F = Y.raw) == null ? void 0 : F.previewUrl) || Y.previewUrl, "_blank");
    }
    function K() {
      Gn.error("数量最多只能上传" + m.value.limit + "个图片/文件!!!");
    }
    async function X(Y) {
      var V, F;
      await ((F = (V = o.upload) == null ? void 0 : V.minio) == null ? void 0 : F.doElUpload(Y));
    }
    function de() {
    }
    function pe(Y, V, F) {
      return Y.size > F ? "上传文件大小不能超过 " + (F / 1024 / 1024).toFixed(2) + "M~" : V && V.length > 0 && V.every((ge) => ge !== Y.suffix) ? "上传文件类型错误，请重新选择~" : !0;
    }
    return He(
      () => r.modelValue,
      (Y, V) => {
        JSON.stringify(Y) !== JSON.stringify(V) && (p.value = (Y == null ? void 0 : Y.map((F) => (F.url = C(F), F))) || []);
      },
      { immediate: !0 }
    ), (Y, V) => {
      var _t;
      const F = Q("el-icon"), ge = Q("el-upload"), Ue = Q("el-image-viewer"), Ke = Q("el-button");
      return _(), P("div", {
        class: On(["ele-form-upload-image", { "ele-form-upload-file": Y.desc.upType === "file" }])
      }, [
        se(ge, ne({ class: "ele-image-upload" }, m.value, Te(N.value), {
          fileList: p.value || [],
          class: { "over-limit": ((_t = p.value) == null ? void 0 : _t.length) >= m.value.limit, "upload-disabled": m.value.disabled }
        }), {
          default: B(() => [
            ve("div", jy, [
              Y.desc.icon ? (_(), P("i", {
                key: 0,
                class: On(Y.desc.icon),
                style: yt({ fontSize: Y.desc.fontSize || "14px", color: Y.desc.color || "#C0C4CC" })
              }, null, 6)) : (_(), R(F, {
                key: 1,
                style: yt({ fontSize: Y.desc.fontSize || "14px", color: Y.desc.color || "#C0C4CC" })
              }, {
                default: B(() => [
                  se(zt(Uz))
                ]),
                _: 1
              }, 8, ["style"])),
              Y.desc.upType === "file" && Y.desc.text2 ? (_(), P("div", zy, Ce(Y.desc.text2), 1)) : ae("", !0),
              Y.desc.upType === "file" ? (_(), P("div", yy, Ce(Y.desc.text || "拖拽/点击上传"), 1)) : ae("", !0)
            ])
          ]),
          _: 1
        }, 16, ["fileList", "class"]),
        d.value ? (_(), R(Ue, {
          key: 0,
          onClose: V[0] || (V[0] = (At) => d.value = !1),
          teleported: "",
          initialIndex: c.value,
          "url-list": z.value
        }, null, 8, ["initialIndex", "url-list"])) : ae("", !0),
        m.value.autoUpload ? ae("", !0) : (_(), P("div", Dy, [
          se(Ke, {
            style: { "margin-left": "10px" },
            size: "small",
            type: "success",
            onClick: de
          }, {
            default: B(() => [
              ke(" 上传到服务器 ")
            ]),
            _: 1
          })
        ]))
      ], 2);
    };
  }
});
const my = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Na }, Symbol.toStringTag, { value: "Module" })), il = [
  vi,
  Yi,
  mn,
  Ii,
  Li,
  Ti,
  Ei,
  xi,
  Ci,
  bi,
  Oi,
  Si,
  ki,
  Bi,
  Ui,
  Pi,
  Qi,
  Vi,
  Fi,
  Ri,
  Wi,
  Gi,
  Zi,
  Hi,
  Ki,
  Ji,
  $i,
  qi,
  Xi,
  ea,
  ta,
  na,
  la,
  ra,
  Na
], hy = [{ required: !0, trigger: "blur", validator: Wy }], wy = [{ required: !0, trigger: "blur", validator: Gy }], Ay = [{ type: "number", message: "请填入数字！" }], vy = [{ required: !0, trigger: "blur", validator: Ry }], Yy = [{ trigger: "blur", validator: Jy }], Iy = [{ required: !0, trigger: "blur", validator: $y }], Ly = [{ required: !0, trigger: "blur", validator: Su }], Ty = [{ trigger: "blur", validator: Su }], Ey = [{ required: !0, trigger: "blur", validator: Xy }], xy = [{ trigger: "blur", validator: za }], Cy = [{ required: !0, trigger: "blur", validator: za }], by = [
  { required: !0, message: "不能为空！", trigger: "blur" },
  { type: "number", message: "请填入数字！" }
], Oy = [{ required: !0, trigger: "blur", validator: Fy }], Sy = [{ required: !0, trigger: "blur", validator: ja }], ky = [{ trigger: "blur", validator: ja }], By = [{ required: !0, trigger: "change", validator: pa }], Uy = [{ required: !0, trigger: "change", validator: pa }], Py = [{ required: !0, trigger: "change", validator: Zy }], Qy = [{ required: !0, trigger: "change", validator: Hy }], Vy = [{ required: !0, trigger: "change", validator: Ky }];
function Fy(f, s, r) {
  /^[1-9]\d*$/.test(s * 1 + "") ? r() : r(new Error("请输入正整数！"));
}
function Ry(f, s, r) {
  s.length !== 4 ? r(new Error("验证码必须是4位！")) : r();
}
function Wy(f, s, r) {
  typeof s > "u" || s === "" || s === null ? r(new Error("此项必填！")) : r();
}
function Gy(f, s, r) {
  typeof s > "u" || s === "" || s === null ? r(new Error("此项必填！")) : (typeof s == "number" && (s = s + ""), typeof s == "string" && s.match(/^[ ]*$/) ? r(new Error("不能全是空格!")) : r());
}
function pa(f, s, r) {
  s === null || typeof s > "u" || s === "" || s.length <= 0 ? r(new Error("请选择！")) : r();
}
function Zy(f, s, r) {
  s === null || typeof s > "u" || s === "" || s.length <= 0 ? r(new Error("请上传！")) : r();
}
function Hy(f, s, r) {
  typeof s > "u" || s === null || s === "" || s === null ? r(new Error("此项必填！")) : s.replace(/\n/g, "") ? typeof s == "string" && s.replace(/\n/g, "").match(/^[ ]*$/) ? r(new Error("不能全是空格!")) : r() : r(new Error("不能全是换行！"));
}
function Ky(f, s, r) {
  typeof s > "u" || s === null || s === "" || s === null ? r(new Error("此项必填！")) : s.replace(/\n/g, "") ? typeof s == "string" && s.replace(/\n/g, "").match(/^[ ]*$/) ? r(new Error("不能全是空格!")) : r() : r(new Error("不能全是换行！"));
}
function ja(f, s, r) {
  /^\d+(\.(\d{1}|\d{2}))?$/.test(s * 1 + "") ? r() : r(new Error("小数格式错误(最多两位)!"));
}
function Jy(f, s, r) {
  s ? /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s) ? r() : r(new Error("邮箱格式错误!")) : r(new Error("邮箱必填"));
}
function $y(f, s, r) {
  s ? /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(s) ? r() : r(new Error("手机号格式错误!")) : r(new Error("手机号必填"));
}
function Su(f, s, r) {
  !s || !/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?=.*[~!@#$%^&*])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,32}$/.test(s) ? r(new Error("密码为8-32位字母大小写+特殊字符+数字!")) : r();
}
function qy(f, s, r) {
  s && !/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?=.*[~!@#$%^&*])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,32}$/.test(s) ? r(new Error("密码为8-32位字母大小写+特殊字符+数字!")) : r();
}
function Xy(f, s, r) {
  typeof s > "u" || s === "" || s === null ? r(new Error("此项必填！")) : s && !/^([a-z,A-z,0-9]){4,20}$/.test(s) ? r(new Error("账号为4-20位字母或数字!")) : r();
}
function za(f, s, r) {
  s && !/^([a-z,A-z,0-9]){16,20}$/.test(s) ? r(new Error("请输入16-20位字母或数字!")) : r();
}
const yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, account: Ey, cascader: Uy, double: Sy, double2: ky, editor: Vy, email: Yy, notAllBlank: wy, notNull: hy, number: Ay, numberNotNull: by, password: Ly, password2: Ty, phone: Iy, select: By, textarea: Qy, upload: Py, vCode: vy, validatePassword: Su, validatePassword2: qy, wordnum: xy, wordnum2: Cy, zhengZhengShu: Oy }, Symbol.toStringTag, { value: "Module" })), Di = /* @__PURE__ */ Object.assign({ "./ElPlusFormArea.vue": cj, "./ElPlusFormAutocomplete.vue": dj, "./ElPlusFormBtn.vue": Nj, "./ElPlusFormBtns.vue": zj, "./ElPlusFormCascader.vue": _j, "./ElPlusFormCascaderPanel.vue": wj, "./ElPlusFormCheckbox.vue": Yj, "./ElPlusFormCheckboxButton.vue": Tj, "./ElPlusFormColor.vue": Cj, "./ElPlusFormDate.vue": Sj, "./ElPlusFormDaterange.vue": Uj, "./ElPlusFormDatetime.vue": Vj, "./ElPlusFormDatetimerange.vue": Wj, "./ElPlusFormFile.vue": az, "./ElPlusFormImage.vue": Nz, "./ElPlusFormInput.vue": jz, "./ElPlusFormLink.vue": Yz, "./ElPlusFormLkuser.vue": d2, "./ElPlusFormNbinput.vue": N2, "./ElPlusFormNumber.vue": z2, "./ElPlusFormPassword.vue": D2, "./ElPlusFormQuickInput.vue": h2, "./ElPlusFormRadio.vue": v2, "./ElPlusFormRate.vue": L2, "./ElPlusFormSelect.vue": C2, "./ElPlusFormSlider.vue": S2, "./ElPlusFormStatus.vue": P2, "./ElPlusFormSwitch.vue": F2, "./ElPlusFormTag.vue": W2, "./ElPlusFormText.vue": K2, "./ElPlusFormTextarea.vue": $2, "./ElPlusFormTransfer.vue": ey, "./ElPlusFormTree.vue": ly, "./ElPlusFormTreeSelect.vue": uy, "./ElPlusFormUpload.vue": my }), ya = [];
for (const f in Di) {
  const s = Di[f].default;
  s.typeName && ya.push(s.typeName);
}
const eD = ["innerHTML"], tD = {
  key: 0,
  style: { display: "flex", "justify-content": "center" }
}, nD = {
  name: "ElPlusForm",
  inheritAttrs: !1,
  customOptions: {}
}, ku = /* @__PURE__ */ Me({
  ...nD,
  props: {
    formDesc: { default: null },
    modelValue: { default: () => ({}) },
    formAttrs: { default: () => ({}) },
    rules: { default: null },
    isLoading: { type: Boolean, default: !1 },
    requestFn: { type: [Function, null], default: null },
    updateFn: { type: [Function, null], default: null },
    showBtns: { type: Boolean, default: !0 },
    showSubmit: { type: Boolean, default: !0 },
    submitBtnText: { default: "提交" },
    showCancel: { type: Boolean, default: !1 },
    cancelBtnText: { default: "取消" },
    showReset: { type: Boolean, default: !0 },
    resetBtnText: { default: "重置" },
    showLabel: { type: Boolean, default: !0 },
    labelWidth: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    isDialog: { type: Boolean, default: !1 },
    optionsFn: { type: [Function, null], default: null },
    size: { default: "small" },
    column: { default: 1 },
    isTable: { type: Boolean, default: !1 },
    idKey: { default: "id" },
    maxWidth: {}
  },
  emits: ["request", "reset", "cancel"],
  setup(f, { expose: s, emit: r }) {
    var Gt;
    const o = f, D = We("defaultConf"), p = We("format"), m = h(), N = h(!1), d = Le(), c = h([]), z = h(!1);
    let w = null;
    const x = Ie(() => o.size || D.size), C = [...ya, ...((Gt = D.form) == null ? void 0 : Gt.comList) || []], E = Ie(() => ({ display: "flex", flexDirection: o.isTable ? "row" : "column" })), U = Ie(() => ({
      scrollToError: !0,
      ...o.formAttrs,
      labelWidth: o.labelWidth === "auto" ? o.isDialog ? "100px" : "120px" : parseInt(o.labelWidth + "") + "px",
      // validateOnRuleChange: false,
      disabled: o.disabled || z.value,
      rules: k,
      labelPosition: $j() ? "top" : "right",
      style: {
        width: o.maxWidth || (o.isTable ? "100%" : o.isDialog ? "80%" : "1000px"),
        paddingRight: o.isTable ? "0" : "20px"
      }
    })), k = Ie(() => {
      const v = o.rules || [];
      return o.formDesc && Object.keys(o.formDesc).map((T) => {
        if (v[T] || (v[T] = []), o.formDesc) {
          if (o.formDesc[T].rules)
            typeof o.formDesc[T].rules == "string" ? v[T].push(...yi[o.formDesc[T].rules]) : qj(o.formDesc[T].rules).map((q) => {
              v[T].push(q);
            });
          else if (o.formDesc[T].required || o.formDesc[T].require) {
            let q = "notAllBlank";
            switch (o.formDesc[T].type) {
              case "upload":
              case "select":
              case "password":
              case "textarea":
              case "editor":
                q = o.formDesc[T].type || "";
                break;
              case "cascader":
              case "tselect":
              case "linkuser":
              case "radio":
                q = "select";
                break;
            }
            v[T].push(...yi[q]);
          }
        }
      }), v;
    }), K = Ie(() => {
      const v = [];
      if (o.formDesc) {
        let T = [];
        for (const _e in o.formDesc)
          T.push({ ...o.formDesc[_e], field: _e });
        let q = [], ie = 0;
        T.map((_e) => {
          if (_e._vif && (q.push(_e), ie++, _e.colspan && (ie += _e.colspan - 1), ie >= o.column)) {
            v.push(q), q = [], ie = 0;
            return;
          }
        }), q.length > 0 && v.push(q);
      }
      return v;
    }), X = Dt.throttle(() => {
      o.formDesc && Object.keys(o.formDesc).forEach((v) => {
        if (o.formDesc) {
          const T = o.formDesc[v];
          if (T && T.type) {
            T._type = C.includes(T.type.toLowerCase()) ? "el-plus-form-" + T.type : T.type, T._vif = pe(T, "vif", v, !T.isBlank), T._disabled = pe(T, "disabled", v, o.disabled ?? !1);
            const q = {};
            T._attrs = Object.assign({}, pe(T, "attrs", v), q), T._label = pe(T, "label", v), T._tip = pe(T, "tip", v), !T._tip && !T.noTip && T.type === "upload" && (T._tip = `最多上传${T.multiple ? T.limit || 20 : 1}${T.upType === "file" ? "个文件" : "张图片"}`), T.default !== void 0 && T.default !== null && o.modelValue[v] === void 0 && (o.modelValue[v] = T.default), T.defaultItem !== void 0 && T.defaultItem !== null && o.modelValue[v] === void 0 && (o.modelValue[v] = T.defaultItem.value), T.format && (typeof T.format == "string" ? o.modelValue[v] = p[T.format](o.modelValue[v], o.modelValue) : typeof T.format == "function" && (o.modelValue[v] = T.format(o.modelValue[v], o.modelValue)));
          } else
            T && T.isBlank && (T._vif = pe(T, "vif", "", !0));
        }
      });
    }, 500), de = Ie(() => {
      let v = [];
      return o.showBtns && (o.showCancel && v.push({
        field: "_reset_btn",
        desc: {
          label: o.cancelBtnText || "取消",
          size: x.value,
          disabled: z.value,
          on: { click: () => r("cancel") }
        }
      }), o.showReset && v.push({
        field: "_reset_btn",
        desc: {
          label: o.resetBtnText || "重置",
          confirm: `确定要${o.resetBtnText || "重置"}?`,
          size: x.value,
          disabled: z.value,
          on: { click: _t }
        }
      }), o.showSubmit && v.push({
        field: "_reset_btn",
        desc: {
          label: o.submitBtnText || "提交",
          size: x.value,
          type: "primary",
          loading: o.isLoading || z.value,
          on: { click: Ke }
        }
      })), v;
    }), pe = (v, T, q, ie = null) => typeof v[T] == "function" ? (N.value = !0, v[T](o.modelValue, o.modelValue[q])) : typeof v[T] == "boolean" ? v[T] ?? !1 : typeof v[T] == "string" ? v[T] ?? "" : v[T] ?? ie, Y = () => new Promise((v, T) => {
      k.value ? m.value.validate((q, ie) => {
        q ? v() : T(ie);
      }) : v();
    }), V = (v) => {
      v && c.value.filter((T) => T.field === v.field).length <= 0 && c.value.push(v);
    }, F = (v, T, q) => {
      const ie = {};
      if (!v)
        return { [T]: q };
      if (!v._vif || q === void 0 || q === null)
        return ie;
      if (v.type === "category")
        if (q === null && (q = []), v.checkStrictly === !0)
          ie.categoryId = q[2] ?? q[1] ?? q[0] ?? "";
        else
          for (let _e = 0; _e < 3; _e++)
            ie["categoryId" + (_e + 1)] = q[_e] ?? "";
      else if (v.type === "area") {
        q === null && (q = [null, null, null, null]);
        const [_e, G, ee, te] = q;
        v.checkStrictly ? ie[T] = te || ee || G || _e || null : (ie.provinceId = _e || -1, ie.cityId = G || -1, ie.zoneId = ee || -1, ie.streetId = te || -1);
      } else if (v.type === "daterange")
        q && q.length === 2 && (ie.startTime = q[0], typeof q[1] == "string" ? ie.endTime = new Date(q[1]).getTime() : ie.endTime = q[1], ie.endTime = ie.endTime + (24 * 60 * 60 - 1) * 1e3, ie.startTime = p.time(ie.startTime, 3), ie.endTime = p.time(ie.endTime, 3));
      else if (v.type === "datetimerange")
        q && q.length === 2 && (ie.startTime = p.time(q[0], 3), ie.endTime = p.time(q[1], 3));
      else if (v.type === "linkuser") {
        const [_e, G, ee, te] = q;
        ie.userIds = _e, ie.deptIds = G, ie.userNames = ee, ie.deptNames = te;
      } else {
        switch (v.type) {
          case "checkbox":
            Array.isArray(q) && (q = q.join(","));
            break;
        }
        ie[T] = q;
      }
      return ie;
    }, ge = () => {
      const v = {};
      return o.formDesc && Object.keys(o.modelValue).map((T) => {
        ["provinceId", "cityId", "zoneId", "streetId"].indexOf(T) >= 0 || o.formDesc && Object.assign(v, F(o.formDesc[T], T, o.modelValue[T]));
      }), v;
    }, Ue = () => {
      c.value.map((v) => {
        v.CID && v.changeValidImg();
      });
    }, Ke = async () => {
      let v = ge();
      try {
        if (d.beforeValidate && await d.beforeValidate(v) === !1)
          return;
        await Y();
        for (const T in v) {
          if (T.indexOf("_") === 0) {
            delete v[T];
            continue;
          }
          if (o.formDesc) {
            const q = o.formDesc[T];
            q && q.valueFormat && (v[T] = q.valueFormat(v[T], v)), (v[T] === !0 || v[T] === !1) && (v[T] = +v[T]);
          }
        }
        if (d.beforeRequest) {
          const T = await d.beforeRequest(v);
          if (T === !1)
            return;
          typeof T == "object" && (v = T);
        }
        if (o.requestFn) {
          if (z.value)
            return;
          z.value = !0;
          try {
            let T = {};
            o.updateFn && v && v[o.idKey] ? T = await o.updateFn(v) : T = await o.requestFn(v), St(() => {
              d.success && typeof d.success == "function" && d.success({ response: T, formData: o.modelValue, callback: () => z.value = !1 });
            });
          } catch (T) {
            if (d.requestError && typeof d.requestError == "function")
              d.requestError(T);
            else {
              if (T instanceof Error)
                try {
                  JSON.parse(T.message) instanceof Object;
                } catch {
                }
              else
                T instanceof Object;
              d.requestError && typeof d.requestError == "function" && d.requestError();
            }
            z.value = !1;
          } finally {
            o.isDialog || (z.value = !1), d.requestEnd && typeof d.requestEnd == "function" && d.requestEnd();
          }
        } else {
          if (o.isLoading)
            return;
          r("request", v);
        }
      } catch (T) {
        console.log("error: ", T);
      }
    }, _t = () => {
      Object.keys(o.modelValue).map((v) => {
        o.modelValue[v] = w ? w[v] : (o.formDesc && o.formDesc[v] && o.formDesc[v].default) ?? null;
      }), setTimeout(() => {
        At();
      }, 100), r("reset");
    }, At = () => {
      var v;
      (v = m.value) == null || v.clearValidate();
    }, tn = () => {
      o.modelValue && Object.keys(o.modelValue).map((v) => {
        o.modelValue[v] = null;
      }), St(() => {
        setTimeout(() => {
          At();
        }, 10);
      });
    };
    function nn(v) {
      m.value.validateField(v, (T) => {
      });
    }
    function dt() {
      console.log("refresh***************************"), X(), St(() => {
        At();
      });
    }
    return He(
      () => o.formDesc,
      (v) => {
        v && X();
      }
    ), He(
      () => o.modelValue,
      (v) => {
        (!w || N.value && v && JSON.stringify(v) !== JSON.stringify(w)) && JSON.stringify(v) !== JSON.stringify(w) && (w = Dt.cloneDeep(v), X());
      },
      { deep: !0 }
    ), cn(async () => {
      N.value || X(), St(() => {
        At();
      });
    }), s({ submit: Ke, getData: ge, validate: Y, reset: _t, clearValid: At, clear: tn, changeValidImg: Ue, refresh: dt }), (v, T) => {
      const q = Q("el-form-item"), ie = Q("el-col"), _e = Q("el-row"), G = Q("el-form");
      return _(), P("div", {
        style: yt(E.value)
      }, [
        $e(v.$slots, "top", {
          formData: o.modelValue
        }),
        ve("div", {
          style: yt({ display: "flex", justifyContent: v.isDialog ? "center" : "" })
        }, [
          se(G, ne({
            class: "el-plus-form-panel",
            ref_key: "refElPlusForm",
            ref: m,
            model: o.modelValue,
            onSubmit: tj(Ke, ["prevent"])
          }, U.value), {
            default: B(() => [
              (_(!0), P(we, null, Ye(K.value, (ee, te) => (_(), R(_e, {
                gutter: 10,
                key: te,
                style: yt({ marginRight: v.isTable ? "20px" : 0 })
              }, {
                default: B(() => [
                  (_(!0), P(we, null, Ye(ee, (J, ze) => (_(), R(ie, {
                    key: te + "-" + ze + "-" + J.field,
                    xs: 24,
                    sm: 24,
                    md: J.colspan && J.colspan >= v.column ? 24 : v.column >= 2 ? 12 : 24,
                    lg: J.colspan && J.colspan >= v.column ? 24 : Math.floor(24 / v.column * (J.colspan || 1)),
                    xl: J.colspan && J.colspan >= v.column ? 24 : Math.floor(24 / v.column * (J.colspan || 1))
                  }, {
                    default: B(() => {
                      var it;
                      return [
                        J._vif ? (_(), P("div", {
                          key: 0,
                          class: "el-plus-form-column-panel",
                          style: yt({ "justify-content": v.isTable ? "flex-end" : "flex-start" })
                        }, [
                          se(q, {
                            style: yt([{ "min-height": "40px" }, { width: ((it = J._attrs) == null ? void 0 : it.width) || J.width || (v.isTable ? "150px" : "100%") }]),
                            label: v.showLabel && J.showLabel !== !1 ? J._label : null,
                            "label-width": J.labelWidth || v.labelWidth || (v.isDialog ? "100px" : "120px"),
                            prop: J.field
                          }, {
                            default: B(() => [
                              (_(), R(Ai(J._type), ne({
                                style: { "min-width": "80px", width: "100%" },
                                formData: o.modelValue,
                                disabled: J._disabled ?? v.disabled ?? !1,
                                readonly: v.readonly ?? !1
                              }, J._attrs, {
                                desc: J,
                                ref_for: !0,
                                ref: V,
                                field: J.field,
                                modelValue: o.modelValue[J.field || ""],
                                "onUpdate:modelValue": (rt) => o.modelValue[J.field || ""] = rt,
                                isTable: v.isTable,
                                onValidateThis: () => nn(J.field || "")
                              }), null, 16, ["formData", "disabled", "readonly", "desc", "field", "modelValue", "onUpdate:modelValue", "isTable", "onValidateThis"])),
                              J._tip ? (_(), P("div", {
                                key: 0,
                                class: "el-plus-form-tip",
                                innerHTML: J._tip
                              }, null, 8, eD)) : ae("", !0)
                            ]),
                            _: 2
                          }, 1032, ["label", "label-width", "prop", "style"])
                        ], 4)) : ae("", !0)
                      ];
                    }),
                    _: 2
                  }, 1032, ["md", "lg", "xl"]))), 128))
                ]),
                _: 2
              }, 1032, ["style"]))), 128)),
              $e(v.$slots, "row")
            ]),
            _: 3
          }, 16, ["model", "onSubmit"])
        ], 4),
        $e(v.$slots, "default"),
        se(G, null, {
          default: B(() => [
            $e(v.$slots, "form-btn", {
              data: o.modelValue
            }, () => [
              de.value && de.value.length > 0 ? (_(), P("div", tD, [
                (_(!0), P(we, null, Ye(de.value, (ee, te) => (_(), R(mn, nj(ne({ key: te }, ee)), null, 16))), 128))
              ])) : ae("", !0)
            ]),
            $e(v.$slots, "bottom", {
              formData: o.modelValue
            })
          ]),
          _: 3
        }),
        $e(v.$slots, "form-footer", {
          formData: o.modelValue
        })
      ], 4);
    };
  }
});
const lD = {
  name: "ElPlusFormDialog",
  inheritAttrs: !1,
  customOptions: {}
}, rD = /* @__PURE__ */ Me({
  ...lD,
  props: {
    modelValue: { default: () => ({}) },
    show: { type: Boolean, default: !1 },
    title: { default: "" },
    tableRef: {},
    success: {},
    successTip: { default: "操作成功!" }
  },
  emits: ["update:show", "update:modelValue"],
  setup(f, { expose: s, emit: r }) {
    const o = f, D = Ie({
      get: () => o.modelValue,
      set(X) {
        r("update:modelValue", X);
      }
    }), p = Ie({
      get() {
        return o.show;
      },
      set(X) {
        r("update:show", X);
      }
    }), m = h(null), { width: N, top: d, modal: c, appendToBody: z, showClose: w, draggable: x, closeOnClickModal: C, ...E } = Object.assign({ width: "700px", draggable: !0, top: "15vh", closeOnClickModal: !1, showCancel: !0 }, Le()), U = { width: N, top: d, modal: c, appendToBody: z, showClose: w, draggable: x, closeOnClickModal: C };
    function k(X) {
      o.success ? o.success(X) : o.tableRef && (Gn.success(o.successTip), o.tableRef.reload(), close(), setTimeout(() => {
        X.callback();
      }, 200));
    }
    function K() {
      var X;
      (X = m.value) == null || X.clear();
    }
    return s({ open, close }), (X, de) => {
      const pe = Q("el-dialog");
      return _(), R(pe, ne({
        class: "el-plus-form-dialog",
        modelValue: p.value,
        "onUpdate:modelValue": de[2] || (de[2] = (Y) => p.value = Y),
        title: o.title
      }, U, { onClosed: K }), {
        header: B(() => [
          $e(X.$slots, "header")
        ]),
        default: B(() => [
          se(ku, ne({
            ref_key: "refElPlusDialogForm",
            ref: m,
            style: { padding: "20px" },
            isDialog: !0,
            modelValue: D.value,
            "onUpdate:modelValue": de[0] || (de[0] = (Y) => D.value = Y)
          }, E, {
            success: k,
            onCancel: de[1] || (de[1] = (Y) => p.value = !1)
          }), {
            top: B(() => [
              $e(X.$slots, "top")
            ]),
            default: B(() => [
              $e(X.$slots, "default")
            ]),
            _: 3
          }, 16, ["modelValue"])
        ]),
        _: 3
      }, 16, ["modelValue", "title"]);
    };
  }
}), uD = { class: "el-plus-form-group" }, oD = {
  key: 0,
  class: "title-line"
}, sD = {
  name: "ElPlusFormGroup",
  inheritAttrs: !1,
  customOptions: {}
}, iD = /* @__PURE__ */ Me({
  ...sD,
  props: {
    modelValue: {},
    formGroup: {},
    isLoading: { type: Boolean }
  },
  emits: ["update:show", "update:modelValue", "before-validate", "before-request", "request-success", "request-error", "request-end", "request"],
  setup(f, { emit: s }) {
    const r = f, o = h([]), D = [], p = Ie({
      get: () => r.modelValue,
      set(c) {
        s("update:modelValue", c);
      }
    }), m = Ie(() => {
      const c = [], z = Dt.cloneDeep(r.formGroup), w = r.formGroup.column || 1;
      return delete z.group, delete z.column, z.beforeValidate = async (x) => await Promise.all(o.value.map((C) => C.validate())), r.formGroup.group.map((x, C) => {
        c.push({
          title: x.title,
          formProps: Object.assign({ column: x.column || w }, C === r.formGroup.group.length - 1 ? z : { showBtns: !1 }, x || {})
        });
      }), c;
    });
    function N(c, z) {
      c && D.indexOf(z) < 0 && (D.push(z), o.value.push(c));
    }
    const d = () => {
      o.value.map((c, z, w) => {
        z === w.length - 1 || c.clearValid();
      });
    };
    return (c, z) => (_(), P("div", uD, [
      (_(!0), P(we, null, Ye(m.value, (w, x) => (_(), P(we, { key: x }, [
        w.title ? (_(), P("div", oD, Ce(w.title), 1)) : ae("", !0),
        se(ku, ne({
          modelValue: p.value,
          "onUpdate:modelValue": z[0] || (z[0] = (C) => p.value = C)
        }, w.formProps, {
          ref_for: !0,
          ref: (C) => N(C, "form" + x),
          onReset: d
        }), {
          default: B(() => [
            Mn()["default" + x] ? $e(c.$slots, "default" + x, { key: 0 }) : ae("", !0)
          ]),
          _: 2
        }, 1040, ["modelValue"])
      ], 64))), 128))
    ]));
  }
});
const aD = { class: "el-plus-table-edit-column" }, cD = { class: "select-panel" }, MD = { class: "dialog-footer" }, fD = /* @__PURE__ */ Me({
  __name: "settingColumn",
  props: {
    column: {},
    tbName: {},
    size: {},
    showText: { type: Boolean }
  },
  setup(f, { expose: s }) {
    const r = f, o = We("defaultConf"), D = h(!1), p = h([]), m = h([]), N = h(!1), d = h(!1);
    function c() {
      D.value = !0;
    }
    function z() {
      if (p.value.length <= 0)
        return Gn.warning("请至少选择一列！"), !1;
      const U = [];
      r.column.map((k) => {
        p.value.indexOf(k.label) < 0 ? (U.push(k.label), k.scShow = !1) : k.scShow = !0;
      }), U.length > 0 ? localStorage.setItem(o.storagePrefix + "hideColumnsList_" + r.tbName, U.join("__")) : localStorage.removeItem(o.storagePrefix + "hideColumnsList_" + r.tbName), D.value = !1, m.value = p.value;
    }
    function w() {
      p.value = [], d.value ? p.value = r.column.map((U) => U.label) : p.value = r.column.filter((U) => U.required || U.noHide).map((U) => U.label), N.value = !1;
    }
    function x() {
      p.value.length === 0 ? (N.value = !1, d.value = !1) : r.column.length === p.value.length ? (N.value = !1, d.value = !0) : (N.value = !0, d.value = !1);
    }
    function C(U) {
      const k = localStorage.getItem(o.storagePrefix + "hideColumnsList_" + r.tbName);
      let K = [];
      k != null && k.length > 0 && (K = k.split("__")), r.column.map((X) => {
        X.vif !== void 0 && X.vif !== null ? typeof X.vif == "function" ? X._vif = X.vif(X) : X._vif = !!X.vif : X._vif = !0, (K.indexOf(X.label) < 0 || X.required || X.noHide) && p.value.push(X.label);
      }), x(), U && z();
    }
    function E() {
      D.value = !1, p.value = m.value;
    }
    return cn(() => {
      r.tbName && C(!0);
    }), s({ initCol: C }), (U, k) => {
      const K = Q("el-button"), X = Q("el-checkbox"), de = Q("el-checkbox-group"), pe = Q("el-dialog");
      return _(), P("div", aD, [
        U.showText ? (_(), R(K, {
          key: 0,
          type: "primary",
          onClick: c,
          size: U.size,
          plain: ""
        }, {
          default: B(() => [
            ke("编辑显示列")
          ]),
          _: 1
        }, 8, ["size"])) : (_(), R(K, {
          key: 1,
          type: "primary",
          icon: "ele-Setting",
          onClick: c,
          size: U.size,
          title: "编辑显示列",
          plain: "",
          circle: ""
        }, null, 8, ["size"])),
        se(pe, {
          title: "编辑显示列",
          modelValue: D.value,
          "onUpdate:modelValue": k[2] || (k[2] = (Y) => D.value = Y),
          width: "40%"
        }, {
          default: B(() => [
            ve("div", cD, [
              se(X, {
                modelValue: d.value,
                "onUpdate:modelValue": k[0] || (k[0] = (Y) => d.value = Y),
                indeterminate: N.value,
                onChange: w
              }, {
                default: B(() => [
                  ke(" 全选 ")
                ]),
                _: 1
              }, 8, ["modelValue", "indeterminate"])
            ]),
            se(de, {
              modelValue: p.value,
              "onUpdate:modelValue": k[1] || (k[1] = (Y) => p.value = Y),
              onChange: x,
              style: { padding: "0 10px", "flex-wrap": "wrap", display: "flex" }
            }, {
              default: B(() => [
                (_(!0), P(we, null, Ye(r.column, (Y) => (_(), P(we, {
                  key: Y.label
                }, [
                  Y._vif ? (_(), R(X, {
                    key: 0,
                    label: Y.label,
                    disabled: Y.required || Y.noHide || !1
                  }, {
                    default: B(() => [
                      ke(Ce(Y.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["label", "disabled"])) : ae("", !0)
                ], 64))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          footer: B(() => [
            ve("div", MD, [
              se(K, {
                size: U.size,
                onClick: E
              }, {
                default: B(() => [
                  ke(" 取 消 ")
                ]),
                _: 1
              }, 8, ["size"]),
              se(K, {
                size: U.size,
                type: "primary",
                onClick: z
              }, {
                default: B(() => [
                  ke(" 确 定 ")
                ]),
                _: 1
              }, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const _i = /* @__PURE__ */ Ge(fD, [["__scopeId", "data-v-c53d7d2d"]]);
function dD() {
  return !!navigator.userAgent.match(/('phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone')/i);
}
function gD(f) {
  switch (f.type) {
    case void 0:
      f.type = "primary";
      break;
    case "add":
      f.type = "primary", f.title = f.title || "新增", f.icon = "ele-Plus";
      break;
    case "edit":
      f.type = "primary", f.title = f.title || "编辑", f.icon = "ele-EditPen";
      break;
    case "delete":
    case "del":
      f.type = "danger", f.title = f.title || "删除", f.icon = "ele-Delete";
      break;
  }
  return f;
}
function Ou(f, s) {
  const r = [];
  return f && f.length > 0 && Dt.cloneDeep(f).map((o) => {
    if (o.nodes) {
      const D = Ou(o.nodes, s)[0].children;
      o.nodes = D || o.nodes;
    }
    switch (o.type || (o.type = "text"), o.type) {
      case "image":
        o.width = o.width || "110px", o.align = o.align || "left", o.headerAlign = o.headerAlign || "left";
        break;
      case "btns":
        if (!o.minWidth && o.btns && o.btns.length >= 2) {
          let D = 0;
          o.btns.map((p) => D += typeof p.label == "string" ? p.label.length : 4), o.width = o.width || D * 20 + "px";
        }
        o.align = o.align || "left", o.headerAlign = o.headerAlign || "left", o.text = !0;
        break;
    }
    if (o.minWidth = o.minWidth || (o.label !== "操作" ? s : "auto"), o.showOverflowTooltip = o.label !== "操作", o.parent) {
      let D = !1;
      r.forEach((p) => {
        p.label === o.parent && (p.children.push(o), D = !0);
      }), D || r.push({ label: o.parent, children: [o] });
    } else
      r.push(o);
  }), r;
}
const ND = (f, s) => {
  let r = "";
  for (const o in f)
    s && Array.isArray(s) && s.length > 0 && s.indexOf(o) >= 0 || f[o] !== void 0 && f[o] !== null && f[o] !== "" && (r !== "" && (r += "&"), r += o + "=" + f[o]);
  return r;
}, pD = { class: "el-plus-table-header-info" }, jD = {
  key: 0,
  class: "el-plus-table-form-items"
}, zD = { class: "table-header-form-btns" }, yD = { class: "el-plus-table-header-btn" }, DD = {
  key: 1,
  class: "el-plus-table-header-form"
}, _D = {
  class: "table-header-form-btns",
  style: { "margin-bottom": "16px" }
}, mD = /* @__PURE__ */ Me({
  __name: "header",
  props: {
    modelValue: {},
    column: {},
    tbName: { default: "" },
    toolbar: { default: null },
    isDialog: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    isShowRefresh: { type: Boolean, default: !0 },
    size: { default: "default" }
  },
  emits: ["query"],
  setup(f, { expose: s, emit: r }) {
    const o = f, D = We("defaultConf"), p = h(), m = h(), N = Ie(() => {
      const E = [];
      return o.toolbar && o.toolbar.btns && o.toolbar.btns.map((U) => {
        E.push({ ...gD(U), size: U.size || o.size });
      }), E;
    }), d = Ie(() => {
      var U;
      const E = (U = o.toolbar) == null ? void 0 : U.formConfig;
      return E != null && E.formDesc && Object.values(E == null ? void 0 : E.formDesc).map((k) => {
        if (k.width)
          return;
        let K = 300;
        switch (k.type) {
          case "daterange":
          case "input":
          case "area":
            K = 300;
            break;
        }
        k.width = K + "px";
      }), E;
    });
    function c() {
      r("query");
    }
    async function z({ callBack: E }) {
      var U, k, K, X, de;
      if ((U = o.toolbar) != null && U.export) {
        const pe = new XMLHttpRequest();
        let Y = o.toolbar.export.url || "";
        if (o.toolbar.export.fetch ? Y = await o.toolbar.export.fetch(Object.assign({}, (k = p.value) == null ? void 0 : k.getData(), ((K = o.toolbar.export) == null ? void 0 : K.data) || {})) : o.toolbar.export.noQuery || (Y += (Y.indexOf("?") >= 0 ? "&" : "?") + ND(Object.assign({}, (X = p.value) == null ? void 0 : X.getData(), ((de = o.toolbar.export) == null ? void 0 : de.data) || {}))), pe.open("get", Y, !0), pe.responseType = "blob", o.toolbar.export.isAuth !== !1 && D.token) {
          let V = D.token;
          typeof D.token == "function" && (V = D.token()), pe.setRequestHeader("Authorization", "Bearer " + V);
        }
        pe.onload = function() {
          var V, F;
          if (this.status == 200) {
            const ge = document.createElement("a");
            ge.href = window.URL.createObjectURL(this.response), ge.download = (((F = (V = o.toolbar) == null ? void 0 : V.export) == null ? void 0 : F.name) || (/* @__PURE__ */ new Date()).getTime()) + ".xls", ge.click(), window.URL.revokeObjectURL(Y), setTimeout(() => {
              E && E();
            }, 1e3);
          }
        }, pe.onerror = function() {
          setTimeout(() => {
            E && E();
          }, 1e3);
        }, pe.send();
      }
    }
    function w() {
      p.value.submit();
    }
    function x() {
      p.value.clear(), St(() => {
        p.value.submit();
      });
    }
    function C() {
      var E, U;
      o.tbName ? (E = m.value) == null || E.initCol() : (U = o.column) == null || U.map((k) => {
        k.vif !== void 0 && k.vif !== null ? typeof k.vif == "function" ? k._vif = k.vif(k) : k._vif = !!k.vif : k._vif = !0;
      });
    }
    return cn(() => {
    }), s({ getData: () => {
      var E;
      return (E = p.value) == null ? void 0 : E.getData();
    }, initCol: C }), (E, U) => {
      const k = Q("ElPlusForm"), K = Q("el-form");
      return _(), P("div", pD, [
        o.toolbar && Object.keys(o.toolbar || {}).length ? (_(), R(K, {
          key: 0,
          inline: !0,
          class: "el-plus-table-header-form",
          style: yt({ justifyContent: !o.toolbar.formConfig && o.toolbar.btnRight ? "flex-end" : "space-between" })
        }, {
          default: B(() => [
            o.toolbar.formConfig ? (_(), P("div", jD, [
              se(k, ne({
                ref_key: "elPlusFormRef",
                ref: p
              }, d.value, {
                modelValue: o.modelValue,
                "onUpdate:modelValue": U[0] || (U[0] = (X) => o.modelValue = X),
                labelWidth: "1",
                requestFn: c,
                showBtns: !1,
                isTable: !0
              }), {
                row: B(() => [
                  ve("div", zD, [
                    se(mn, {
                      type: "primary",
                      icon: "ele-Search",
                      loading: E.loading,
                      desc: { label: "查询", on: { click: w }, size: E.size }
                    }, null, 8, ["loading", "desc"]),
                    se(mn, {
                      desc: { label: "重置", on: { click: x }, size: E.size }
                    }, null, 8, ["desc"]),
                    o.toolbar.export ? (_(), R(mn, {
                      key: 0,
                      type: "primary",
                      desc: { label: "导出Excel", size: E.size, mask: !0, on: { click: z } }
                    }, null, 8, ["desc"])) : ae("", !0),
                    E.tbName ? (_(), R(_i, {
                      key: 1,
                      ref_key: "settingColumnRef",
                      ref: m,
                      tbName: E.tbName,
                      column: E.column || [],
                      size: E.size
                    }, null, 8, ["tbName", "column", "size"])) : ae("", !0),
                    (_(!0), P(we, null, Ye(N.value, (X, de) => (_(), R(mn, {
                      key: de,
                      desc: X,
                      loading: E.loading
                    }, null, 8, ["desc", "loading"]))), 128))
                  ])
                ]),
                _: 1
              }, 16, ["modelValue"])
            ])) : (_(), P("div", {
              key: 1,
              class: "el-plus-table-header-btns",
              style: yt({ "min-width": zt(dD)() ? "100%" : N.value && N.value.length > 0 ? N.value.length * 110 + "px" : "10px" })
            }, [
              ve("div", yD, [
                (_(!0), P(we, null, Ye(N.value, (X, de) => (_(), R(mn, {
                  key: de,
                  desc: X,
                  loading: E.loading
                }, null, 8, ["desc", "loading"]))), 128))
              ])
            ], 4))
          ]),
          _: 1
        }, 8, ["style"])) : E.tbName ? (_(), P("div", DD, [
          ve("div", _D, [
            E.tbName ? (_(), R(_i, {
              key: 0,
              ref_key: "settingColumnRef",
              ref: m,
              tbName: E.tbName,
              column: E.column || [],
              size: E.size,
              showText: !0
            }, null, 8, ["tbName", "column", "size"])) : ae("", !0)
          ])
        ])) : ae("", !0)
      ]);
    };
  }
});
const hD = /* @__PURE__ */ Ge(mD, [["__scopeId", "data-v-0ba409f1"]]), wD = { style: { width: "100%", display: "flex" } }, AD = /* @__PURE__ */ Me({
  __name: "columnItem",
  props: {
    modelValue: {},
    field: {},
    desc: {},
    scope: {},
    size: {}
  },
  setup(f) {
    var N;
    const s = f, r = h(((N = s.scope) == null ? void 0 : N.$index) || 0), o = Ie(() => {
      const d = [];
      return s.desc.nodes ? s.desc.nodes.map((c, z) => {
        d.push(p(c.field || s.field, c, z));
      }) : (s.field ? s.field.split(",") : []).map((z, w) => {
        d.push(p(z, s.desc, w));
      }), d.length <= 0 && d.push(p("", s.desc, 0)), d;
    }), D = Ie(() => {
      var d;
      return typeof s.desc.content == "function" ? s.desc.content(s.modelValue, (d = s.scope) == null ? void 0 : d.row, s.field) : s.desc.content || "";
    }), p = (d, c, z) => {
      var x, C, E;
      const w = {
        field: d,
        desc: {
          prop: d,
          default: "",
          size: c.size || s.size || "small"
        }
      };
      return Object.assign(w.desc, c), c.type === "btn" && (w.desc.btnType = c.btnType || "primary", w.desc.btnLabel = c.btnLabel || c.label, w.desc.plain = c.plain || !0, w.desc.text = !0), c.type ? (c.type === "text" && (w.desc.default = c.default || "-"), c.type, typeof c.type == "string" ? w.desc.type = c.type : w.desc.type = c.type[z] || c.type[0], c.format && (typeof c.format == "string" || typeof c.format == "function" ? w.desc.format = c.format : w.desc.format = c.format[z] === null ? null : c.format[z] || c.format[0]), c.title && (typeof c.title == "string" ? w.desc.title = c.title : w.desc.title = c.title[z] || c.title[0])) : w.desc.type = "text", c.elType && (w.desc.elType = c.elType), c.linkType && (w.desc.linkType = c.linkType), c.linkId && (w.desc.linkId = c.linkId), c.color && (w.desc.style = c.style || {}, typeof c.color == "function" ? w.desc.style.color = c.color((x = s.scope) == null ? void 0 : x.row[s.field || ""], (C = s.scope) == null ? void 0 : C.row, s.field) : typeof c.color == "string" ? w.desc.style.color = c.color : w.desc.style.color = c.color[z] === null ? null : c.color[z] || c.color[0]), c.on && (Object.prototype.toString.call(c.on) === "[object Array]" ? w.desc.on = c.on[z] === null ? null : c.on[z] || c.on[0] : w.desc.on = c.on), c.disabled && (w.disabled = !0), typeof c.options == "function" && (w.desc.options = c.options(s.scope)), w.vshow = m(c), c.attrs && (typeof c.attrs == "function" ? w.desc.attrs = c.attrs((E = s.scope) == null ? void 0 : E.row) : w.desc.attrs = c.attrs), w.desc._label = c.label, w;
    }, m = (d) => {
      var c;
      return d.vshow !== void 0 && d.vshow !== null && d.vshow !== "" ? typeof d.vshow == "boolean" ? d.vshow : typeof d.vshow == "function" ? d.vshow((c = s.scope) == null ? void 0 : c.row) : !!d.vshow : !0;
    };
    return cn(() => {
    }), (d, c) => {
      const z = Q("el-icon"), w = Q("el-popover");
      return _(), P("div", {
        class: On(["el-plus-table-column-item", [d.desc.inline ? "el-plus-table-column-row" : "el-plus-table-column-column"]])
      }, [
        (_(!0), P(we, null, Ye(o.value, (x, C) => {
          var E;
          return _(), P(we, {
            key: C + (x.options && x.options.length > 0 ? x.options[0].value || x.options[0].v : "0")
          }, [
            d.desc.content && D.value ? (_(), R(w, {
              key: 0,
              placement: "left",
              width: 200,
              trigger: "hover",
              effect: "dark",
              content: D.value
            }, {
              reference: B(() => [
                se(z, { style: { color: "#f56c6c", "font-size": "26px", padding: "0px 8px 0 0" } }, {
                  default: B(() => [
                    se(zt(t2))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["content"])) : ae("", !0),
            ve("div", wD, [
              x.vshow === void 0 || x.vshow ? (_(), R(Ai("el-plus-form-" + x.desc.type), ne({ key: 0 }, x, {
                isTable: !0,
                formData: (E = s.scope) == null ? void 0 : E.row,
                size: x.size || d.size,
                rowIndex: r.value,
                modelValue: s.scope.row[x.field],
                "onUpdate:modelValue": (U) => s.scope.row[x.field] = U
              }), null, 16, ["formData", "size", "rowIndex", "modelValue", "onUpdate:modelValue"])) : ae("", !0)
            ])
          ], 64);
        }), 128))
      ], 2);
    };
  }
});
const mi = /* @__PURE__ */ Ge(AD, [["__scopeId", "data-v-7ac02a39"]]), vD = { class: "el-plus-table-content" }, YD = {
  key: 1,
  class: "table-tabs-panel"
}, ID = { class: "el-plus-table-main" }, LD = { key: 1 }, TD = {
  key: 2,
  class: "bottom-page-static-info"
}, ED = {
  name: "ElPlusTable",
  inheritAttrs: !1,
  customOptions: {}
}, xD = /* @__PURE__ */ Me({
  ...ED,
  props: {
    tableConfig: {},
    modelValue: { default: null },
    type: { default: "index" },
    isIndex: { type: Boolean, default: !0 },
    isPager: { type: Boolean, default: !0 },
    pageSize: { default: 10 },
    isDialog: { type: Boolean, default: !1 },
    nullText: { default: "暂无数据" },
    isEmptyImg: { type: Boolean, default: !0 },
    isShowRefresh: { type: Boolean, default: !0 },
    rowKey: { default: "id" },
    isDIYMain: { type: Boolean, default: !1 },
    selectList: { default: () => [] },
    colMinWidth: { default: "auto" }
  },
  emits: ["getUrlConsumerIds", "selection", "select", "selectAll", "update:modelValue", "tabChange", "expandChange"],
  setup(f, { expose: s, emit: r }) {
    var Ht, fn, Sn, gt, ln;
    const o = f, D = We("defaultConf"), p = We("format"), m = h(), N = h(((fn = (Ht = o.tableConfig) == null ? void 0 : Ht.tabConf) == null ? void 0 : fn.tabs[0].value) ?? ""), d = h({}), c = Ie(() => (I) => I.key ? d.value[I.key] || 0 : ""), z = h(), w = h(!1), x = h(!!((Sn = o.tableConfig.tabConf) != null && Sn.fetch)), C = h(!1), E = D.size || "small", U = h({});
    let k = lt({});
    const K = lt(o.modelValue || []), X = lt([]), de = lt(Ou(o.tableConfig.column, o.isDialog ? "auto" : o.colMinWidth)), pe = h(0), Y = lt(Dt.cloneDeep(o.selectList) || []), V = lt([]), F = lt({
      current: !o.isDialog && k.current ? parseInt(k.current) : 1,
      total: 0,
      size: !o.isDialog && k.size ? parseInt(k.size) : o.pageSize
    }), ge = ((ln = (gt = o.tableConfig) == null ? void 0 : gt.explan) == null ? void 0 : ln.treeProps) || { children: "children", hasChildren: "hasChildren" }, Ue = Ie(() => _t(Ou(o.tableConfig.column, o.isDialog ? "auto" : o.colMinWidth))), Ke = Ie(() => {
      var Z, le, Xe, ut, Ve, ct, kt;
      const I = [];
      if ((Z = o.tableConfig.summaryConf) != null && Z.vif) {
        if (typeof ((le = o.tableConfig.summaryConf) == null ? void 0 : le.vif) == "boolean") {
          if (!((Xe = o.tableConfig.summaryConf) != null && Xe.vif))
            return I;
        } else if (!((ut = o.tableConfig.summaryConf) != null && ut.vif()))
          return I;
      }
      if ((Ve = o.tableConfig.summaryConf) != null && Ve.prop) {
        const wn = o.tableConfig.summaryConf.prop.split(","), Kt = ((kt = (ct = o.tableConfig.summaryConf) == null ? void 0 : ct.label) == null ? void 0 : kt.split(",")) || [];
        wn.map((Zn, rn) => {
          var et, Nt;
          let ye = "";
          (et = o.tableConfig.summaryConf) != null && et.sumFn ? ye = (Nt = o.tableConfig.summaryConf) == null ? void 0 : Nt.sumFn(K, Y) : ye = p.yuan(K.reduce((Pe, un) => Pe += un[Zn], 0)), I.push({ label: Kt[rn], value: ye });
        });
      }
      return I;
    });
    function _t(I) {
      return I.map((Z) => Z.children ? _t(Z.children) : o.tableConfig.tbName ? Z._vif && Z.scShow : (Z.vif !== void 0 && Z.vif !== null ? typeof Z.vif == "function" ? Z._vif = Z.vif(Z) : Z._vif = !!Z.vif : Z._vif = !0, Z._vif));
    }
    async function At(I) {
      rt(!0), await r("tabChange", I, hn), St(() => {
        hn();
      });
    }
    function tn(I, Z, le) {
      var ut, Ve;
      const Xe = _e();
      Xe[((Ve = (ut = o.tableConfig) == null ? void 0 : ut.explan) == null ? void 0 : Ve.idName) || "parentId"] = I.id, o.tableConfig.fetch && o.tableConfig.fetch(Xe).then((ct) => {
        le(ct == null ? void 0 : ct.records);
      });
    }
    function nn(I) {
      return X.length > I.rowIndex ? X[I.rowIndex * 1] : "";
    }
    function dt(I, Z) {
      T(Z, !I.some((le) => le[o.rowKey] === Z[o.rowKey])), r("select", I, Z), r("selection", Dt.cloneDeep(Y));
    }
    function Gt(I) {
      const Z = !(I && I.length > 0);
      (Z ? K : I).map((le) => {
        T(le, Z);
      }), r("selectAll", I, Z), r("selection", Dt.cloneDeep(Y));
    }
    function v(I, Z) {
      r("expandChange", I, Z);
    }
    function T(I, Z = !1) {
      const le = Y.findIndex((Xe) => Xe[o.rowKey] === I[o.rowKey]);
      Z ? le >= 0 && Y.splice(le, 1) : le < 0 && Y.push(I);
    }
    function q(I, Z = !1) {
      I && I.length && I.map((le) => {
        T(
          Y.find((Xe) => Xe[o.rowKey] === le[o.rowKey]),
          !Z
        );
      }), it();
    }
    function ie() {
      Y.splice(0, Y.length, ...o.selectList);
    }
    async function _e() {
      var Z, le, Xe;
      let I = {
        // 封装查询条件
        // ...route.query,
        // ...tableHeaderRef.value.getData(),
        ...U.value,
        ...typeof o.tableConfig.queryMap == "function" ? await o.tableConfig.queryMap() : o.tableConfig.queryMap,
        t_: (/* @__PURE__ */ new Date()).getTime()
      };
      return o.isPager && (I.current = F.current, I.size = F.size), o.tableConfig.tabConf && o.tableConfig.tabConf.prop && (I[o.tableConfig.tabConf.prop] = N.value), I = G(I), o.isDialog, (Xe = (le = (Z = o.tableConfig) == null ? void 0 : Z.toolbar) == null ? void 0 : le.export) != null && Xe.isAuth, I;
    }
    function G(I) {
      if (!I)
        return {};
      const Z = {};
      return Object.keys(I).map((le) => {
        I[le] !== void 0 && I[le] !== null && I[le] !== "" && (Z[le] = I[le]);
      }), Z;
    }
    function ee(I) {
      F.current = 1, F.size = I, ze(!0);
    }
    function te(I) {
      F.current !== I && (F.current = I, ze(!1));
    }
    function J(I, Z) {
      let le = [];
      I && I.length > 0 && I.map((Xe, ut) => {
        V.push([...Z, ut]), le = Xe[ge.children], le && le.length > 0 && J(le, [ut]);
      });
    }
    async function ze(I) {
      var Xe, ut, Ve, ct, kt, wn;
      if (!o.tableConfig.fetch)
        return pe.value = 2, !1;
      if (pe.value === 1 || w.value)
        return !1;
      pe.value = 1, w.value = !0, K.splice(0, K.length), I && (F.current = 1);
      let Z = await _e();
      (Ve = (ut = (Xe = o.tableConfig) == null ? void 0 : Xe.toolbar) == null ? void 0 : ut.formConfig) != null && Ve.beforeRequest && (Z = ((wn = (kt = (ct = o.tableConfig) == null ? void 0 : ct.toolbar) == null ? void 0 : kt.formConfig) == null ? void 0 : wn.beforeRequest(JSON.parse(JSON.stringify(Z)))) || Z);
      const le = await o.tableConfig.fetch(Z);
      try {
        o.isPager ? (F.total = (le == null ? void 0 : le.total) * 1 || 0, F.current = (le == null ? void 0 : le.current) || 1, K.push(...(le == null ? void 0 : le.records) || null)) : K.push(...(le == null ? void 0 : le.records) || le || null), o.type === "expand" && (V.splice(0, V.length), J(K, [])), C.value = !1, St(() => {
          it();
        });
      } catch (Kt) {
        console.log("error: ", Kt);
      }
      pe.value = 2, w.value = !1;
    }
    function it() {
      K && K.length > 0 && o.type === "selection" && K.map((I) => {
        m.value.toggleRowSelection(
          I,
          Y.some((Z) => Z[o.rowKey] === I[o.rowKey])
        );
      });
    }
    async function rt(I = !1) {
      return await ze(!0), !I && o.tableConfig.tabConf && o.tableConfig.tabConf.fetch && (d.value = await o.tableConfig.tabConf.fetch(Object.assign({}, await _e(), o.tableConfig.tabConf.queryMap)), x.value = !1), K;
    }
    function Zt() {
      U.value = Dt.cloneDeep(z.value.getData()), rt();
    }
    function hn() {
      var I;
      (I = z.value) == null || I.initCol();
    }
    return He(
      () => o.modelValue,
      (I) => {
        o.tableConfig.fetch || JSON.parse(JSON.stringify(I)) !== JSON.parse(JSON.stringify(K)) && (pe.value = 2, K.splice(0, K.length, ...I || []));
      },
      { deep: !0 }
    ), He(
      () => o.selectList,
      (I) => {
        Y.splice(0, Y.length, ...I), it();
      },
      { deep: !0 }
    ), cn(() => {
      rt();
    }), s({ reload: rt, tableData: K, changeSelect: q, resetSelect: ie, initCol: hn }), (I, Z) => {
      var Zn, rn;
      const le = Q("el-icon"), Xe = Q("el-radio-button"), ut = Q("el-radio-group"), Ve = Q("el-table-column"), ct = Q("el-empty"), kt = Q("el-table"), wn = Q("el-pagination"), Kt = lj("loading");
      return _(), P("div", vD, [
        Object.keys(((Zn = I.tableConfig) == null ? void 0 : Zn.toolbar) || {}).length || I.tableConfig.tbName ? (_(), R(hD, {
          key: 0,
          ref_key: "tableHeaderRef",
          ref: z,
          modelValue: zt(k),
          "onUpdate:modelValue": Z[0] || (Z[0] = (ye) => rj(k) ? k.value = ye : k = ye),
          tbName: I.tableConfig.tbName,
          column: I.tableConfig.column,
          size: zt(E),
          isShowRefresh: I.isShowRefresh,
          loading: w.value,
          toolbar: I.tableConfig.toolbar,
          isDialog: I.isDialog,
          onQuery: Zt
        }, null, 8, ["modelValue", "tbName", "column", "size", "isShowRefresh", "loading", "toolbar", "isDialog"])) : ae("", !0),
        I.tableConfig.tabConf ? (_(), P("div", YD, [
          se(ut, {
            modelValue: N.value,
            "onUpdate:modelValue": Z[1] || (Z[1] = (ye) => N.value = ye),
            size: "default",
            onChange: At
          }, {
            default: B(() => {
              var ye;
              return [
                (_(!0), P(we, null, Ye((ye = I.tableConfig.tabConf) == null ? void 0 : ye.tabs, (et, Nt) => (_(), R(Xe, {
                  key: Nt,
                  label: et.value,
                  loading: !0
                }, {
                  default: B(() => [
                    ke(Ce(et.label) + " ", 1),
                    x.value ? (_(), R(le, {
                      key: 0,
                      class: "is-loading"
                    }, {
                      default: B(() => [
                        se(zt(Cz))
                      ]),
                      _: 1
                    })) : (_(), P(we, { key: 1 }, [
                      ke(Ce(c.value(et)), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ];
            }),
            _: 1
          }, 8, ["modelValue"])
        ])) : ae("", !0),
        uj((_(), P("div", ID, [
          I.isDIYMain ? $e(I.$slots, "main", {
            key: 0,
            tableData: K
          }) : (_(), R(kt, ne({
            key: 1,
            ref_key: "elPlusTableRef",
            ref: m,
            style: { width: "100%" },
            height: "100%",
            maxHeight: I.tableConfig.maxHeight || "auto"
          }, I.tableConfig.tableAttr, {
            data: K,
            "row-key": I.rowKey,
            lazy: "",
            load: tn,
            size: zt(E),
            "row-class-name": nn,
            onSelect: dt,
            onSelectAll: Gt,
            onExpandChange: v,
            treeProps: zt(ge)
          }), en({
            default: B(() => [
              I.type === "selection" ? (_(), R(Ve, {
                key: 0,
                type: "selection",
                width: "55px",
                selectable: (ye, et) => {
                  var Nt, Pe;
                  return ((Pe = (Nt = I.tableConfig) == null ? void 0 : Nt.tableAttr) == null ? void 0 : Pe.selectable(ye, et)) ?? !0;
                },
                "header-align": "center",
                align: "center"
              }, null, 8, ["selectable"])) : ae("", !0),
              I.isIndex ? (_(), R(Ve, {
                key: 1,
                type: "index",
                width: "60",
                label: "序号"
              })) : ae("", !0),
              Mn().firstColumn ? $e(I.$slots, "firstColumn", { key: 2 }) : ae("", !0),
              (_(!0), P(we, null, Ye(de, (ye, et) => {
                var Nt;
                return _(), P(we, {
                  key: ye.prop + ye.label + et
                }, [
                  ye.children && ye.children.length > 0 ? (_(), P(we, { key: 0 }, [
                    (Nt = Ue.value[et]) != null && Nt.some((Pe) => Pe) ? (_(), R(Ve, {
                      key: 0,
                      prop: ye.label,
                      label: ye.label,
                      "header-align": "center"
                    }, {
                      default: B(() => [
                        (_(!0), P(we, null, Ye(ye.children, (Pe, un) => (_(), P(we, {
                          key: Pe.label + et + un
                        }, [
                          Ue.value[et][un] ? (_(), R(Ve, ne({
                            key: 0,
                            prop: Pe.prop
                          }, Pe), {
                            header: B(() => [
                              ve("div", {
                                class: On({ "th-required": Pe.required })
                              }, Ce(Pe.label), 3)
                            ]),
                            default: B((An) => [
                              $e(I.$slots, "default"),
                              An.$index >= 0 ? (_(), R(mi, {
                                key: 0,
                                field: Pe.prop,
                                desc: Pe,
                                scope: An,
                                size: zt(E),
                                modelValue: An.row[Pe.prop],
                                "onUpdate:modelValue": (al) => An.row[Pe.prop] = al
                              }, null, 8, ["field", "desc", "scope", "size", "modelValue", "onUpdate:modelValue"])) : ae("", !0)
                            ]),
                            _: 2
                          }, 1040, ["prop"])) : ae("", !0)
                        ], 64))), 128))
                      ]),
                      _: 2
                    }, 1032, ["prop", "label"])) : ae("", !0)
                  ], 64)) : (_(), P(we, { key: 1 }, [
                    Ue.value[et] ? (_(), R(Ve, ne({
                      key: 0,
                      prop: ye.prop
                    }, ye), {
                      header: B(({ column: Pe }) => [
                        ve("div", {
                          class: On({ "th-required": ye.required }),
                          style: yt(ye.hstyle)
                        }, Ce(Pe.label), 7)
                      ]),
                      default: B((Pe) => [
                        Pe.$index >= 0 ? (_(), R(mi, {
                          key: 0,
                          field: ye.prop,
                          desc: ye,
                          scope: Pe,
                          size: zt(E),
                          modelValue: Pe.row[ye.prop],
                          "onUpdate:modelValue": (un) => Pe.row[ye.prop] = un
                        }, null, 8, ["field", "desc", "scope", "size", "modelValue", "onUpdate:modelValue"])) : ae("", !0)
                      ]),
                      _: 2
                    }, 1040, ["prop"])) : ae("", !0)
                  ], 64))
                ], 64);
              }), 128))
            ]),
            _: 2
          }, [
            !w.value && pe.value === 2 ? {
              name: "empty",
              fn: B(() => [
                I.isEmptyImg ? (_(), R(ct, {
                  key: 0,
                  description: I.nullText
                }, null, 8, ["description"])) : (_(), P("span", LD, Ce(I.nullText), 1))
              ]),
              key: "0"
            } : void 0,
            (rn = I.tableConfig.summaryConf) != null && rn.prop ? {
              name: "append",
              fn: B(() => {
                var ye;
                return [
                  Ke.value && Ke.value.length > 0 ? (_(), P("div", {
                    key: 0,
                    style: yt((ye = I.tableConfig.summaryConf) == null ? void 0 : ye.hstyle),
                    class: "summary-row"
                  }, [
                    (_(!0), P(we, null, Ye(Ke.value, (et, Nt) => (_(), P("div", {
                      class: "summary-item",
                      key: Nt
                    }, [
                      ve("span", null, Ce(et.label || "合计") + ":", 1),
                      ve("p", null, Ce(et.value || 0), 1)
                    ]))), 128))
                  ], 4)) : ae("", !0)
                ];
              }),
              key: "1"
            } : void 0
          ]), 1040, ["maxHeight", "data", "row-key", "size", "treeProps"]))
        ])), [
          [Kt, w.value]
        ]),
        I.isPager || I.tableConfig.statistic ? (_(), P("div", TD, [
          se(wn, {
            class: "page-info",
            small: "",
            onSizeChange: ee,
            onCurrentChange: te,
            "current-page": +F.current,
            "page-sizes": [5, 10, 20, 50, 100],
            "page-size": F.size,
            layout: "total, sizes, prev, pager, next, jumper",
            total: F.total
          }, null, 8, ["current-page", "page-size", "total"])
        ])) : ae("", !0),
        $e(I.$slots, "bottom")
      ]);
    };
  }
});
const vl = {
  debug: !1,
  size: "default",
  storagePrefix: "el-plus-crud_",
  form: {
    leng: {
      input: 20,
      textare: 500,
      nbinput: {
        min: 0,
        max: 999999999,
        precision: 0,
        controlsPosition: "right"
      }
    },
    comList: []
  },
  upload: {
    type: "minio",
    action: "",
    maxISize: 1024 * 1024 * 20,
    maxFSize: 1024 * 1024 * 20,
    minio: {
      action: "",
      getUploadUrl: () => new Promise(() => {
      }),
      doElUpload: () => new Promise(() => {
      }),
      getObjectAuthUrl: () => new Promise(() => {
      })
    }
  }
}, OD = {
  install: (f, s, r, o) => {
    Da(vl, s), vl.debug && console.log("initConfig: ", vl), f.provide("format", r), f.provide("globalData", o), f.provide("defaultConf", vl), il.unshift(ku), il.unshift(rD), il.unshift(iD), il.push(xD), vl.debug && console.log("components: ", il), il.map((D) => {
      f.component(D.name, D);
    });
  }
};
function Da(f, s) {
  let r;
  for (r in s)
    f[r] = f[r] && f[r].toString() === "[object Object]" ? Da(f[r], s[r]) : f[r] = s[r];
  return f;
}
export {
  OD as default
};
