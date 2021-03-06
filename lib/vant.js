(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("mvant", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["mvant"] = factory(require("vue"));
	else
		root["mvant"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// EXTERNAL MODULE: ./es/utils/use/bem.js
var bem = __webpack_require__(5);

// EXTERNAL MODULE: ./es/utils/use/sfc.js
var sfc = __webpack_require__(6);

// EXTERNAL MODULE: ./es/locale/index.js + 1 modules
var locale = __webpack_require__(3);

// CONCATENATED MODULE: ./es/utils/use/i18n.js


/* harmony default export */ var i18n = (function (name) {
  var prefix = camelize(name) + '.';
  return function (path) {
    var message = get(locale["c" /* messages */][locale["b" /* lang */]], prefix + path) || get(locale["c" /* messages */][locale["b" /* lang */]], path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
});
// CONCATENATED MODULE: ./es/utils/use/index.js



/* harmony default export */ var use = (function (name) {
  name = 'van-' + name;
  return [Object(sfc["a" /* default */])(name), Object(bem["a" /* default */])(name), i18n(name)];
});
// CONCATENATED MODULE: ./es/utils/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAndroid; });
/* concated harmony reexport use */__webpack_require__.d(__webpack_exports__, "h", function() { return use; });


var isServer = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer;

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// EXTERNAL MODULE: ./es/utils/deep-assign.js
var deep_assign = __webpack_require__(7);

// CONCATENATED MODULE: ./es/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});
// CONCATENATED MODULE: ./es/locale/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return locale_messages; });
var _messages;
/* eslint-disable import/no-mutable-exports */





var lang = 'zh-CN';
var proto = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype;
var locale_messages = (_messages = {}, _messages[lang] = zh_CN, _messages);
var locale = {
  install: function install() {
    if (proto.$vantLang) {
      return;
    }

    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive(proto, '$vantLang', lang);
    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive(proto, '$vantMessages', locale_messages);
  },
  use: function use(newLang, messages) {
    var _this$add;

    lang = newLang;
    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    Object(deep_assign["a" /* default */])(proto.$vantMessages, messages);
  }
};
locale.install();
/* harmony default export */ var es_locale = __webpack_exports__["a"] = (locale);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancel; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = _index__WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "f"] ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
}
function cancel(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

var join = function join(name, el, symbol) {
  return el ? name + symbol + el : name;
};

var prefix = function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};
  mods && Object.keys(mods).forEach(function (key) {
    ret[name + MODS + key] = mods[key];
  });
  return ret;
};

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, prefix(el, mods)] : el;
  };
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/**
 * Create a basic component with common options
 */


var arrayProp = {
  type: Array,
  default: function _default() {
    return [];
  }
};
var numberProp = {
  type: Number,
  default: 0
};

function defaultProps(props) {
  Object.keys(props).forEach(function (key) {
    if (props[key] === Array) {
      props[key] = arrayProp;
    } else if (props[key] === Number) {
      props[key] = numberProp;
    }
  });
}

function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component(Object(___WEBPACK_IMPORTED_MODULE_1__[/* camelize */ "a"])("-" + name), this);
}

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  return function (sfc) {
    sfc.name = name;
    sfc.install = install;
    sfc.props && defaultProps(sfc.props);
    return sfc;
  };
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* eslint-disable no-use-before-define */

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(___WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "d"])(val) || hasOwnProperty.call(to, key) && !Object(___WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "d"])(to[key])) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !Object(___WEBPACK_IMPORTED_MODULE_0__[/* isObj */ "e"])(val)) {
    to[key] = val;
  } else {
    to[key] = assign(Object(to[key]), from[key]);
  }
}

function assign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.3
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];g(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){m(e,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===L(e[o])&&"function"===L(a)&&(e[o]=a),e[o]=t(e[o]||{},a)):e[o]=a}return e}function r(e){return"object"===L(e)||"function"===L(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function a(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function s(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])}),r.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var l="",d=void 0,c=r.length,h=0;h<c;h++)if(d=r[h],d[0]>=o){l=d[1];break}return l}}function u(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function l(){if(!k)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function d(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function c(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function h(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function f(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},m=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,L=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=w.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},_=t,k="undefined"!=typeof window,E=k&&"IntersectionObserver"in window,A={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(k)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k?window.devicePixelRatio||e:e},T=function(){if(k){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),O={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},I=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},x=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},S=function(e){return x(e,"overflow")+x(e,"overflow-y")+x(e,"overflow-x")},$=function(e){if(k){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window}},H={},Q=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;h(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;I({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||H[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),I({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),H[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),C="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],W={rootMargin:"0px",threshold:0},D=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),y=e.adapter,g=e.observer,m=e.observerOptions;b(this,t),this.version="1.2.3",this.mode=A.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||C,loading:s||C,attempt:u||3,scale:f||z(f),ListenEvents:v||R,hasbind:!1,supportWebp:l(),filter:p||{},adapter:y||{},observer:!!g,observerOptions:m||W},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?A.observer:A.event)}return y(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),k&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(a(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;e.nextTick(function(){u=s(t,i.options.scale)||u,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=r.context.$refs[o],a=a?a.$el||a:document.getElementById(o)),a||(a=$(t));var c=new Q({bindType:n.arg,$parent:a,el:t,loading:l,error:d,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(c),k&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(t,this.options.scale)||o;var d=u(this.ListenerQueue,function(e){return e.el===t});d&&d.update({src:o,loading:a,error:l}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;E||e!==A.observer||(e=A.event),this.mode=e,e===A.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===A.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return O[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){if(!n)return void(e.Event.listeners[t]=[]);o(e.Event.listeners[t],n)},this.$emit=function(t,n,r){e.Event.listeners[t].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=!1;this.ListenerQueue.forEach(function(n,r){n.state.loaded||(t=n.checkInView())&&n.load(function(){!n.error&&n.loaded&&e.ListenerQueue.splice(r,1)})})}},{key:"_initIntersectionObserver",value:function(){var e=this;E&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new j(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return c(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},B=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),k&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(e,[{key:"bind",value:function(e,t,n){var r=new N({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&(r.clear(),o(this._queue,r))}}]),e}(),M={selector:"img"},N=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=_({},M,r.value),this.getImgs().forEach(function(e){t.lazy.add(e,_({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=D(e),r=new n(t),i=new V({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",B(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){_(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./es/utils/index.js + 2 modules
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./es/info/index.js


var _use = Object(utils["h" /* use */])('info'),
    info_sfc = _use[0],
    bem = _use[1];

/* harmony default export */ var info = (info_sfc({
  props: {
    info: [String, Number]
  },
  render: function render(h) {
    return Object(utils["d" /* isDef */])(this.info) && h("div", {
      "class": bem()
    }, [this.info]);
  }
}));
// CONCATENATED MODULE: ./es/utils/validate/src.js
/**
 * Is image source
 */
function src(url) {
  return /^(https?:)?\/\/|data:image/.test(url);
}
// CONCATENATED MODULE: ./es/icon/index.js





var icon_use = Object(utils["h" /* use */])('icon'),
    icon_sfc = icon_use[0];

/* harmony default export */ var es_icon = (icon_sfc({
  props: {
    name: String,
    size: String,
    color: String,
    info: [String, Number],
    classPrefix: {
      type: String,
      default: 'van-icon'
    }
  },
  computed: {
    isSrc: function isSrc() {
      return src(this.name);
    }
  },
  render: function render(h) {
    return h("i", {
      "class": [this.classPrefix, this.isSrc ? 'van-icon--image' : this.classPrefix + "-" + this.name],
      "style": {
        color: this.color,
        fontSize: this.size
      },
      "on": _extends({}, this.$listeners)
    }, [this.$slots.default, this.isSrc && h("img", {
      "attrs": {
        "src": this.name
      }
    }), h(info, {
      "attrs": {
        "info": this.info
      }
    })]);
  }
}));
// CONCATENATED MODULE: ./es/loading/index.js


var loading_use = Object(utils["h" /* use */])('loading'),
    loading_sfc = loading_use[0],
    loading_bem = loading_use[1];

var DEFAULT_COLOR = '#c9c9c9';
/* harmony default export */ var loading = (loading_sfc({
  props: {
    size: String,
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: DEFAULT_COLOR
    }
  },
  render: function render(h) {
    var color = this.color,
        size = this.size,
        type = this.type;
    var colorType = color === 'white' || color === 'black' ? color : '';
    var style = {
      color: color === 'black' ? DEFAULT_COLOR : color,
      width: size,
      height: size
    };
    var Spin = [];

    if (type === 'spinner') {
      for (var i = 0; i < 12; i++) {
        Spin.push(h("i"));
      }
    }

    var Circular = type === 'circular' && h("svg", {
      "class": loading_bem('circular'),
      "attrs": {
        "viewBox": "25 25 50 50"
      }
    }, [h("circle", {
      "attrs": {
        "cx": "50",
        "cy": "50",
        "r": "20",
        "fill": "none"
      }
    })]);
    return h("div", {
      "class": loading_bem([type, colorType]),
      "style": style
    }, [h("span", {
      "class": loading_bem('spinner', type)
    }, [Spin, Circular])]);
  }
}));
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// CONCATENATED MODULE: ./es/mixins/popup/context.js
/* harmony default export */ var popup_context = ({
  zIndex: 2000,
  stack: [],
  lockCount: 0,

  get top() {
    return this.stack[this.stack.length - 1];
  }

});
// CONCATENATED MODULE: ./es/overlay/index.js



var overlay_use = Object(utils["h" /* use */])('overlay'),
    overlay_sfc = overlay_use[0],
    overlay_bem = overlay_use[1];

/* harmony default export */ var overlay = (overlay_sfc({
  props: {
    zIndex: Number,
    visible: Boolean,
    className: String,
    customStyle: Object
  },
  render: function render(h) {
    var _this = this;

    var style = _extends({
      zIndex: this.zIndex
    }, this.customStyle);

    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.visible
      }],
      "style": style,
      "class": [overlay_bem(), this.className],
      "on": {
        "touchmove": function touchmove(event) {
          event.preventDefault();
          event.stopPropagation();
        },
        "click": function click(event) {
          _this.$emit('click', event);
        }
      }
    })]);
  }
}));
// CONCATENATED MODULE: ./es/mixins/popup/manager.js




var defaultConfig = {
  className: '',
  customStyle: {}
};
/* harmony default export */ var manager = ({
  open: function open(vm, config) {
    /* istanbul ignore next */
    if (!popup_context.stack.some(function (item) {
      return item.vm === vm;
    })) {
      var el = vm.$el;
      var target = el && el.parentNode ? el.parentNode : document.body;
      popup_context.stack.push({
        vm: vm,
        config: config,
        target: target
      });
      this.update();
    }
  },
  close: function close(vm) {
    var stack = popup_context.stack;

    if (stack.length) {
      if (popup_context.top.vm === vm) {
        stack.pop();
        this.update();
      } else {
        popup_context.stack = stack.filter(function (item) {
          return item.vm !== vm;
        });
      }
    }
  },
  update: function update() {
    var modal = popup_context.modal;

    if (!modal) {
      modal = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(overlay))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);
      popup_context.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (popup_context.top) {
      var _context$top = popup_context.top,
          target = _context$top.target,
          config = _context$top.config;
      target.appendChild(modal.$el);

      _extends(modal, defaultConfig, config, {
        visible: true
      });
    }
  },
  // close popup when click modal && closeOnClickOverlay is true
  onClick: function onClick() {
    /* istanbul ignore else */
    if (popup_context.top) {
      var vm = popup_context.top.vm;
      vm.$emit('click-overlay');
      vm.closeOnClickOverlay && vm.$emit('input', false);
    }
  }
});
// CONCATENATED MODULE: ./es/utils/scroll.js

/* harmony default export */ var utils_scroll = ({
  // get nearest scroll element
  getScrollEventTarget: function getScrollEventTarget(element, rootParent) {
    if (rootParent === void 0) {
      rootParent = window;
    }

    var node = element; // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome

    while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== rootParent) {
      var _this$getComputedStyl = this.getComputedStyle(node),
          overflowY = _this$getComputedStyl.overflowY;

      if (overflowY === 'scroll' || overflowY === 'auto') {
        return node;
      }

      node = node.parentNode;
    }

    return rootParent;
  },
  getScrollTop: function getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },
  setScrollTop: function setScrollTop(element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },
  // get distance from element top to page top
  getElementTop: function getElementTop(element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
  },
  getVisibleHeight: function getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },
  getComputedStyle: !utils["f" /* isServer */] && document.defaultView.getComputedStyle.bind(document.defaultView)
});
// CONCATENATED MODULE: ./es/utils/event.js
/* eslint-disable no-empty */

/* eslint-disable getter-return */

/* eslint-disable import/no-mutable-exports */

var supportsPassive = false;

if (!utils["f" /* isServer */]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

function event_on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  !utils["f" /* isServer */] && target.addEventListener(event, handler, supportsPassive ? {
    capture: false,
    passive: passive
  } : false);
}
function off(target, event, handler) {
  !utils["f" /* isServer */] && target.removeEventListener(event, handler);
}
function stop(event) {
  event.stopPropagation();
}
function prevent(event) {
  event.preventDefault();
}
// CONCATENATED MODULE: ./es/mixins/touch.js
var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

/* harmony default export */ var touch = ({
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/popup/index.js





/* harmony default export */ var popup = ({
  mixins: [touch],
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [String, Number],
    // return the mount node for popup
    getContainer: [String, Function],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },
  watch: {
    value: function value(val) {
      this.inited = this.inited || this.value;
      this[val ? 'open' : 'close']();
    },
    getContainer: function getContainer() {
      this.move();
    },
    overlay: function overlay() {
      this.renderOverlay();
    }
  },
  mounted: function mounted() {
    if (this.getContainer) {
      this.move();
    }

    if (this.value) {
      this.open();
    }
  },
  activated: function activated() {
    /* istanbul ignore next */
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer) {
      this.$parent.$el.appendChild(this.$el);
    }
  },
  deactivated: function deactivated() {
    /* istanbul ignore next */
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // cover default zIndex


      if (this.zIndex !== undefined) {
        popup_context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        event_on(document, 'touchstart', this.touchStart);
        event_on(document, 'touchmove', this.onTouchMove);

        if (!popup_context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }

        popup_context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        popup_context.lockCount--;
        off(document, 'touchstart', this.touchStart);
        off(document, 'touchmove', this.onTouchMove);

        if (!popup_context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      manager.close(this);
      this.$emit('input', false);
    },
    move: function move() {
      var container;
      var getContainer = this.getContainer;

      if (getContainer) {
        container = typeof getContainer === 'string' ? document.querySelector(getContainer) : getContainer();
      } else if (this.$parent) {
        container = this.$parent.$el;
      }

      if (container) {
        container.appendChild(this.$el);
      }
    },
    onTouchMove: function onTouchMove(e) {
      this.touchMove(e);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = utils_scroll.getScrollEventTarget(e.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    renderOverlay: function renderOverlay() {
      var _this = this;

      if (this.overlay) {
        manager.open(this, {
          zIndex: popup_context.zIndex++,
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        manager.close(this);
      }

      this.$nextTick(function () {
        _this.$el.style.zIndex = popup_context.zIndex++;
      });
    }
  }
});
// CONCATENATED MODULE: ./es/actionsheet/index.js





var actionsheet_use = Object(utils["h" /* use */])('actionsheet'),
    actionsheet_sfc = actionsheet_use[0],
    actionsheet_bem = actionsheet_use[1];

/* harmony default export */ var actionsheet = (actionsheet_sfc({
  mixins: [popup],
  props: {
    title: String,
    value: Boolean,
    actions: Array,
    cancelText: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onSelect: function onSelect(event, item) {
      event.stopPropagation();

      if (!item.disabled && !item.loading) {
        if (item.callback) {
          item.callback(item);
        }

        this.$emit('select', item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  },
  render: function render(h) {
    var _this = this;

    if (!this.shouldRender) {
      return;
    }

    var title = this.title,
        cancelText = this.cancelText,
        onCancel = this.onCancel;

    var Header = function Header() {
      return h("div", {
        "class": [actionsheet_bem('header'), 'van-hairline--top-bottom']
      }, [title, h(es_icon, {
        "attrs": {
          "name": "close"
        },
        "on": {
          "click": onCancel
        }
      })]);
    };

    var Option = function Option(item) {
      return h("div", {
        "class": [actionsheet_bem('item', {
          disabled: item.disabled || item.loading
        }), item.className, 'van-hairline--top'],
        "on": {
          "click": function click(event) {
            _this.onSelect(event, item);
          }
        }
      }, [item.loading ? h(loading, {
        "class": actionsheet_bem('loading'),
        "attrs": {
          "size": "20px"
        }
      }) : [h("span", {
        "class": actionsheet_bem('name')
      }, [item.name]), item.subname && h("span", {
        "class": actionsheet_bem('subname')
      }, [item.subname])]]);
    };

    var Footer = cancelText ? h("div", {
      "class": actionsheet_bem('cancel'),
      "on": {
        "click": onCancel
      }
    }, [cancelText]) : h("div", {
      "class": actionsheet_bem('content')
    }, [this.$slots.default]);
    return h("transition", {
      "attrs": {
        "name": "van-slide-up"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": actionsheet_bem({
        withtitle: title
      })
    }, [title ? Header() : this.actions.map(Option), Footer])]);
  }
}));
// EXTERNAL MODULE: ./es/utils/deep-assign.js
var deep_assign = __webpack_require__(7);

// CONCATENATED MODULE: ./es/utils/deep-clone.js

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return Object(deep_assign["a" /* default */])({}, obj);
  }

  return obj;
}
// CONCATENATED MODULE: ./es/picker/PickerColumn.js


var DEFAULT_DURATION = 200;

var PickerColumn_use = Object(utils["h" /* use */])('picker-column'),
    PickerColumn_sfc = PickerColumn_use[0],
    PickerColumn_bem = PickerColumn_use[1];

/* harmony default export */ var PickerColumn = (PickerColumn_sfc({
  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    initialOptions: Array,
    visibleItemCount: Number
  },
  data: function data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    this.$parent.children && this.$parent.children.push(this);
    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;
    children && children.splice(children.indexOf(this), 1);
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },
    onTouchMove: function onTouchMove(event) {
      event.preventDefault();
      var deltaY = event.touches[0].clientY - this.startY;
      this.offset = Object(utils["g" /* range */])(this.startOffset + deltaY, -(this.count * this.itemHeight), this.itemHeight);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        var index = Object(utils["g" /* range */])(Math.round(-this.offset / this.itemHeight), 0, this.count - 1);
        this.setIndex(index, true);
      }
    },
    adjustIndex: function adjustIndex(index) {
      index = Object(utils["g" /* range */])(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!this.isDisabled(this.options[_i])) return _i;
      }
    },
    isDisabled: function isDisabled(option) {
      return Object(utils["e" /* isObj */])(option) && option.disabled;
    },
    getOptionText: function getOptionText(option) {
      return Object(utils["e" /* isObj */])(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      if (index !== this.currentIndex) {
        this.currentIndex = index;
        userAction && this.$emit('change', index);
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    }
  },
  render: function render(h) {
    var _this = this;

    var itemHeight = this.itemHeight,
        visibleItemCount = this.visibleItemCount;
    var columnStyle = {
      height: itemHeight * visibleItemCount + 'px'
    };
    var baseOffset = itemHeight * (visibleItemCount - 1) / 2;
    var wrapperStyle = {
      transition: this.duration + "ms",
      transform: "translate3d(0, " + (this.offset + baseOffset) + "px, 0)",
      lineHeight: itemHeight + "px"
    };
    var optionStyle = {
      height: itemHeight + "px"
    };
    return h("div", {
      "style": columnStyle,
      "class": [PickerColumn_bem(), this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("ul", {
      "style": wrapperStyle
    }, [this.options.map(function (option, index) {
      return h("li", {
        "style": optionStyle,
        "class": ['van-ellipsis', PickerColumn_bem('item', {
          disabled: _this.isDisabled(option),
          selected: index === _this.currentIndex
        })],
        "domProps": {
          "innerHTML": _this.getOptionText(option)
        },
        "on": {
          "click": function click() {
            _this.setIndex(index, true);
          }
        }
      });
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/mixins/picker.js
/**
 * Common Picker Props
 */
/* harmony default export */ var mixins_picker = ({
  props: {
    title: String,
    loading: Boolean,
    showToolbar: Boolean,
    cancelButtonText: String,
    confirmButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    itemHeight: {
      type: Number,
      default: 44
    }
  }
});
// CONCATENATED MODULE: ./es/picker/index.js







var picker_use = Object(utils["h" /* use */])('picker'),
    picker_sfc = picker_use[0],
    picker_bem = picker_use[1],
    t = picker_use[2];

/* harmony default export */ var es_picker = (picker_sfc({
  mixins: [mixins_picker],
  props: {
    columns: Array,
    valueKey: {
      type: String,
      default: 'text'
    }
  },
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },
  watch: {
    columns: function columns() {
      this.setColumns();
    }
  },
  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns
      }] : this.columns;
      columns.forEach(function (column, index) {
        _this.setColumnValues(index, deepClone(column.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    },
    onConfirm: function onConfirm() {
      this.emit('confirm');
    },
    onCancel: function onCancel() {
      this.emit('cancel');
    }
  },
  render: function render(h) {
    var _this4 = this;

    var itemHeight = this.itemHeight;
    var columns = this.simple ? [this.columns] : this.columns;
    var frameStyle = {
      height: itemHeight + "px"
    };
    var columnsStyle = {
      height: itemHeight * this.visibleItemCount + "px"
    };
    var Toolbar = this.showToolbar && h("div", {
      "class": ['van-hairline--top-bottom', picker_bem('toolbar')]
    }, [this.$slots.default || [h("div", {
      "class": picker_bem('cancel'),
      "on": {
        "click": this.onCancel
      }
    }, [this.cancelButtonText || t('cancel')]), this.title && h("div", {
      "class": ['van-ellipsis', picker_bem('title')]
    }, [this.title]), h("div", {
      "class": picker_bem('confirm'),
      "on": {
        "click": this.onConfirm
      }
    }, [this.confirmButtonText || t('confirm')])]]);
    return h("div", {
      "class": picker_bem()
    }, [Toolbar, this.loading && h("div", {
      "class": picker_bem('loading')
    }, [h(loading)]), h("div", {
      "class": picker_bem('columns'),
      "style": columnsStyle,
      "on": {
        "touchmove": prevent
      }
    }, [columns.map(function (item, index) {
      return h(PickerColumn, {
        "attrs": {
          "valueKey": _this4.valueKey,
          "className": item.className,
          "itemHeight": _this4.itemHeight,
          "defaultIndex": item.defaultIndex,
          "visibleItemCount": _this4.visibleItemCount,
          "initialOptions": _this4.simple ? item : item.values
        },
        "on": {
          "change": function change() {
            _this4.onChange(index);
          }
        }
      });
    }), h("div", {
      "class": ['van-hairline--top-bottom', picker_bem('frame')],
      "style": frameStyle
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/area/index.js





var area_use = Object(utils["h" /* use */])('area'),
    area_sfc = area_use[0],
    area_bem = area_use[1];

/* harmony default export */ var es_area = (area_sfc({
  mixins: [mixins_picker],
  props: {
    value: String,
    areaList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },
  data: function data() {
    return {
      code: this.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    };
  },
  computed: {
    province: function province() {
      return this.areaList.province_list || {};
    },
    city: function city() {
      return this.areaList.city_list || {};
    },
    county: function county() {
      return this.areaList.county_list || {};
    },
    displayColumns: function displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    }
  },
  watch: {
    value: function value() {
      this.code = this.value;
      this.setValues();
    },
    areaList: {
      deep: true,
      handler: function handler() {
        this.setValues();
      }
    }
  },
  mounted: function mounted() {
    this.setValues();
  },
  methods: {
    // get list by code
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this[type];
      result = Object.keys(list).map(function (listCode) {
        return {
          code: listCode,
          name: list[listCode]
        };
      });

      if (code) {
        // oversea code
        if (code[0] === '9' && type === 'city') {
          code = '9';
        }

        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      return result;
    },
    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2)); // oversea code

      if (code[0] === '9' && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      this.$emit('change', picker, values, index);
    },
    setValues: function setValues() {
      var code = this.code || Object.keys(this.county)[0] || '';
      var picker = this.$refs.picker;
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00') {
        code = city[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues().filter(function (value) {
        return !!value;
      }) : [];
    },
    getArea: function getArea() {
      var values = this.getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      var names = values.map(function (item) {
        return item.name;
      });
      area.code = values[values.length - 1].code;

      if (area.code[0] === '9') {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },
    reset: function reset() {
      this.code = '';
      this.setValues();
    }
  },
  render: function render(h) {
    var on = _extends({}, this.$listeners, {
      change: this.onChange
    });

    return h(es_picker, {
      "ref": "picker",
      "class": area_bem(),
      "attrs": {
        "showToolbar": true,
        "valueKey": "name",
        "title": this.title,
        "loading": this.loading,
        "columns": this.displayColumns,
        "itemHeight": this.itemHeight,
        "visibleItemCount": this.visibleItemCount,
        "cancelButtonText": this.cancelButtonText,
        "confirmButtonText": this.confirmButtonText
      },
      "on": _extends({}, on)
    });
  }
}));
// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__(2);
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// CONCATENATED MODULE: ./es/mixins/cell.js
/**
 * Common Cell Props
 */
/* harmony default export */ var cell = ({
  props: {
    icon: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    titleClass: String,
    valueClass: String,
    labelClass: String,
    title: [String, Number],
    value: [String, Number],
    label: [String, Number],
    border: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/router-link.js
/**
 * add Vue-Router support
 */
/* harmony default export */ var router_link = ({
  props: {
    url: String,
    replace: Boolean,
    to: [String, Object]
  },
  methods: {
    routerLink: function routerLink() {
      var to = this.to,
          url = this.url,
          $router = this.$router,
          replace = this.replace;

      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
  }
});
// CONCATENATED MODULE: ./es/cell/index.js





var cell_use = Object(utils["h" /* use */])('cell'),
    cell_sfc = cell_use[0],
    cell_bem = cell_use[1];

/* harmony default export */ var es_cell = (cell_sfc({
  mixins: [cell, router_link],
  props: {
    size: String,
    clickable: Boolean,
    arrowDirection: String
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
      this.routerLink();
    }
  },
  render: function render(h) {
    var _bem;

    var slots = this.$slots;
    var showTitle = slots.title || Object(utils["d" /* isDef */])(this.title);
    var showValue = slots.default || Object(utils["d" /* isDef */])(this.value);
    var Title = showTitle && h("div", {
      "class": [cell_bem('title'), this.titleClass]
    }, [slots.title || h("span", [this.title]), this.label && h("div", {
      "class": [cell_bem('label'), this.labelClass]
    }, [this.label])]);
    var Value = showValue && h("div", {
      "class": [cell_bem('value', {
        alone: !slots.title && !this.title
      }), this.valueClass]
    }, [slots.default || h("span", [this.value])]);
    var LeftIcon = slots.icon || this.icon && h(es_icon, {
      "class": cell_bem('left-icon'),
      "attrs": {
        "name": this.icon
      }
    });
    var arrowIcon = this.arrowDirection ? "arrow-" + this.arrowDirection : 'arrow';
    var RightIcon = slots['right-icon'] || this.isLink && h(es_icon, {
      "class": cell_bem('right-icon'),
      "attrs": {
        "name": arrowIcon
      }
    });
    return h("div", {
      "class": cell_bem((_bem = {
        center: this.center,
        required: this.required,
        borderless: !this.border,
        clickable: this.isLink || this.clickable
      }, _bem[this.size] = this.size, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [LeftIcon, Title, Value, RightIcon, slots.extra]);
  }
}));
// CONCATENATED MODULE: ./es/field/index.js








var field_use = Object(utils["h" /* use */])('field'),
    field_sfc = field_use[0],
    field_bem = field_use[1];

/* harmony default export */ var field = (field_sfc({
  inheritAttrs: false,
  mixins: [cell],
  props: {
    error: Boolean,
    leftIcon: String,
    rightIcon: String,
    readonly: Boolean,
    clearable: Boolean,
    labelAlign: String,
    inputAlign: String,
    onIconClick: Function,
    autosize: [Boolean, Object],
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && Object(utils["d" /* isDef */])(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      return _extends({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.$attrs.maxlength;

      if (this.type === 'number' && Object(utils["d" /* isDef */])(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    onClickLeftIcon: function onClickLeftIcon() {
      this.$emit('click-left-icon');
    },
    onClickRightIcon: function onClickRightIcon() {
      // compatible old version
      this.$emit('click-icon');
      this.$emit('click-right-icon');
      this.onIconClick && this.onIconClick();
    },
    onClear: function onClear(event) {
      event.preventDefault();
      this.$emit('input', '');
      this.$emit('clear');
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          event.preventDefault();
        }
      } // trigger blur after click keyboard search button

      /* istanbul ignore next */


      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if (Object(utils["e" /* isObj */])(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    }
  },
  render: function render(h) {
    var _bem;

    var type = this.type,
        labelAlign = this.labelAlign,
        slots = this.$slots;
    var showLeftIcon = slots['left-icon'] || this.leftIcon;
    var showRightIcon = slots['right-icon'] || slots.icon || this.rightIcon || this.icon;
    var LeftIcon = showLeftIcon && h("div", {
      "slot": "icon",
      "class": field_bem('left-icon'),
      "on": {
        "click": this.onClickLeftIcon
      }
    }, [slots['left-icon'] || h(es_icon, {
      "attrs": {
        "name": this.leftIcon
      }
    })]);
    var RightIcon = showRightIcon && h("div", {
      "class": field_bem('right-icon'),
      "on": {
        "click": this.onClickRightIcon
      }
    }, [slots['right-icon'] || slots.icon || h(es_icon, {
      "attrs": {
        "name": this.rightIcon || this.icon
      }
    })]);
    var inputProps = {
      ref: 'input',
      class: field_bem('control', this.inputAlign),
      domProps: {
        value: this.value
      },
      attrs: _extends({}, this.$attrs, {
        readonly: this.readonly
      }),
      on: this.listeners
    };
    var Input = type === 'textarea' ? h("textarea", helper_default()([{}, inputProps])) : h("input", helper_default()([{
      "attrs": {
        "type": type
      }
    }, inputProps]));
    return h(es_cell, {
      "attrs": {
        "icon": this.leftIcon,
        "title": this.label,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required
      },
      "class": field_bem((_bem = {
        error: this.error,
        disabled: this.$attrs.disabled
      }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = type === 'textarea' && !this.autosize, _bem))
    }, [LeftIcon, h('template', {
      slot: 'title'
    }, slots.label), h("div", {
      "class": field_bem('body')
    }, [Input, this.showClear && h(es_icon, {
      "attrs": {
        "name": "clear"
      },
      "class": field_bem('clear'),
      "on": {
        "touchstart": this.onClear
      }
    }), RightIcon, slots.button && h("div", {
      "class": field_bem('button')
    }, [slots.button])]), this.errorMessage && h("div", {
      "class": field_bem('error-message')
    }, [this.errorMessage])]);
  }
}));
// CONCATENATED MODULE: ./es/popup/index.js



var popup_use = Object(utils["h" /* use */])('popup'),
    popup_sfc = popup_use[0],
    popup_bem = popup_use[1];

/* harmony default export */ var es_popup = (popup_sfc({
  mixins: [popup],
  props: {
    position: String,
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  render: function render(h) {
    var _bem;

    if (!this.shouldRender) {
      return;
    }

    var position = this.position;
    var transitionName = this.transition || (position ? "van-popup-slide-" + position : 'van-fade');
    return h("transition", {
      "attrs": {
        "name": transitionName
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": popup_bem((_bem = {}, _bem[position] = position, _bem))
    }, [this.$slots.default])]);
  }
}));
// EXTERNAL MODULE: ./es/utils/use/sfc.js
var use_sfc = __webpack_require__(6);

// EXTERNAL MODULE: ./es/utils/use/bem.js
var use_bem = __webpack_require__(5);

// CONCATENATED MODULE: ./es/mixins/i18n.js
// component mixin

/* harmony default export */ var i18n = ({
  computed: {
    $t: function $t() {
      var name = this.$options.name;
      var prefix = name ? Object(utils["a" /* camelize */])(name) + '.' : '';

      if (!this.$vantMessages) {
        if (false) {}

        return function () {
          return '';
        };
      }

      var messages = this.$vantMessages[this.$vantLang];
      return function (path) {
        var message = Object(utils["b" /* get */])(messages, prefix + path) || Object(utils["b" /* get */])(messages, path);

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return typeof message === 'function' ? message.apply(void 0, args) : message;
      };
    }
  }
});
// CONCATENATED MODULE: ./es/utils/create-basic.js
/**
 * Create a basic component with common options
 */




/* harmony default export */ var create_basic = (function (sfc) {
  sfc = Object(use_sfc["a" /* default */])('van-' + sfc.name)(sfc);
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = utils["d" /* isDef */];
  sfc.methods.b = Object(use_bem["a" /* default */])(sfc.name);
  return sfc;
});
// CONCATENATED MODULE: ./es/cell-group/index.js


var cell_group_use = Object(utils["h" /* use */])('cell-group'),
    cell_group_sfc = cell_group_use[0],
    cell_group_bem = cell_group_use[1];

/* harmony default export */ var cell_group = (cell_group_sfc({
  props: {
    border: {
      type: Boolean,
      default: true
    }
  },
  render: function render(h) {
    return h("div", {
      "class": [cell_group_bem(), {
        'van-hairline--top-bottom': this.border
      }]
    }, [this.$slots.default]);
  }
}));
// CONCATENATED MODULE: ./es/utils/create.js

/**
 * Create a component with common options
 */






/* harmony default export */ var create = (function (sfc) {
  sfc.components = _extends(sfc.components || {}, {
    Icon: es_icon,
    Loading: loading,
    Cell: es_cell,
    CellGroup: cell_group
  });
  return create_basic(sfc);
});
// CONCATENATED MODULE: ./es/toast/Toast.js


var STYLE_LIST = ['success', 'fail', 'loading'];
/* harmony default export */ var Toast = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "van-fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: _vm.b([_vm.style, _vm.position])
    }, [_vm.style === 'text' ? _c('div', {
      domProps: {
        "textContent": _vm._s(_vm.message)
      }
    }) : _vm._e(), _vm.style === 'html' ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.message)
      }
    }) : _vm._e(), _vm.style === 'default' ? [_vm.type === 'loading' ? _c('loading', {
      attrs: {
        "color": "white",
        "type": _vm.loadingType
      }
    }) : _c('icon', {
      class: _vm.b('icon'),
      attrs: {
        "name": _vm.type
      }
    }), _vm.isDef(_vm.message) ? _c('div', {
      class: _vm.b('text'),
      domProps: {
        "textContent": _vm._s(_vm.message)
      }
    }) : _vm._e()] : _vm._e()], 2)]);
  },
  name: 'toast',
  mixins: [popup],
  props: {
    forbidClick: Boolean,
    message: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    loadingType: {
      type: String,
      default: 'circular'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  computed: {
    style: function style() {
      return STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    }
  },
  mounted: function mounted() {
    this.toggleClickale();
  },
  destroyed: function destroyed() {
    this.toggleClickale();
  },
  watch: {
    value: function value() {
      this.toggleClickale();
    },
    forbidClick: function forbidClick() {
      this.toggleClickale();
    }
  },
  methods: {
    toggleClickale: function toggleClickale() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/toast/index.js




var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  value: true,
  duration: 3000,
  position: 'middle',
  loadingType: 'circular',
  forbidClick: false,
  overlayStyle: {}
};

var toast_parseOptions = function parseOptions(message) {
  return Object(utils["e" /* isObj */])(message) ? message : {
    message: message
  };
};

var queue = [];
var singleton = true;

var currentOptions = _extends({}, defaultOptions);

function createInstance() {
  /* istanbul ignore if */
  if (utils["f" /* isServer */]) {
    return {};
  }

  if (!queue.length || !singleton) {
    var toast = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(Toast))({
      el: document.createElement('div')
    });
    document.body.appendChild(toast.$el);
    queue.push(toast);
  }

  return queue[queue.length - 1];
} // transform toast options to popup props


function transformer(options) {
  options.overlay = options.mask;
  return options;
}

function toast_Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance();
  options = _extends({}, currentOptions, toast_parseOptions(options), {
    clear: function clear() {
      toast.value = false;

      if (!singleton && !utils["f" /* isServer */]) {
        clearTimeout(toast.timer);
        queue = queue.filter(function (item) {
          return item !== toast;
        });
        document.body.removeChild(toast.$el);
        toast.$destroy();
      }
    }
  });

  _extends(toast, transformer(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

var toast_createMethod = function createMethod(type) {
  return function (options) {
    return toast_Toast(_extends({
      type: type
    }, toast_parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  toast_Toast[method] = toast_createMethod(method);
});

toast_Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (singleton) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

toast_Toast.setDefaultOptions = function (options) {
  _extends(currentOptions, options);
};

toast_Toast.resetDefaultOptions = function () {
  currentOptions = _extends({}, defaultOptions);
};

toast_Toast.allowMultiple = function (allow) {
  if (allow === void 0) {
    allow = true;
  }

  singleton = !allow;
};

toast_Toast.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(Toast);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$toast = toast_Toast;
/* harmony default export */ var es_toast = (toast_Toast);
// CONCATENATED MODULE: ./es/button/index.js



var button_use = Object(utils["h" /* use */])('button'),
    button_sfc = button_use[0],
    button_bem = button_use[1];

/* harmony default export */ var es_button = (button_sfc({
  props: {
    text: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  },
  render: function render(h) {
    return h(this.tag, {
      "attrs": {
        "type": this.nativeType,
        "disabled": this.disabled
      },
      "class": button_bem([this.type, this.size, {
        block: this.block,
        plain: this.plain,
        round: this.round,
        square: this.square,
        loading: this.loading,
        disabled: this.disabled,
        'bottom-action': this.bottomAction
      }]),
      "on": {
        "click": this.onClick
      }
    }, [this.loading ? h(loading, {
      "attrs": {
        "size": "20px",
        "color": this.type === 'default' ? undefined : ''
      }
    }) : h("span", {
      "class": button_bem('text')
    }, [this.$slots.default || this.text])]);
  }
}));
// CONCATENATED MODULE: ./es/dialog/Dialog.js




var Dialog_use = Object(utils["h" /* use */])('dialog'),
    Dialog_sfc = Dialog_use[0],
    Dialog_bem = Dialog_use[1],
    Dialog_t = Dialog_use[2];

/* harmony default export */ var dialog_Dialog = (Dialog_sfc({
  mixins: [popup],
  props: {
    title: String,
    message: String,
    callback: Function,
    className: [String, Object, Array],
    beforeClose: Function,
    messageAlign: String,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },
  methods: {
    handleAction: function handleAction(action) {
      var _this = this;

      this.$emit(action);

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false) {
            _this.onClose(action);
          }

          _this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.$emit('input', false);
      this.callback && this.callback(action);
    }
  },
  render: function render(h) {
    var _bem,
        _this2 = this;

    if (!this.shouldRender) {
      return;
    }

    var title = this.title,
        message = this.message,
        messageAlign = this.messageAlign;
    var children = this.$slots.default;
    var Title = title && h("div", {
      "class": Dialog_bem('header', {
        isolated: !message && !children
      })
    }, [title]);
    var Content = (children || message) && h("div", {
      "class": Dialog_bem('content')
    }, [children || h("div", {
      "domProps": {
        "innerHTML": message
      },
      "class": Dialog_bem('message', (_bem = {
        'has-title': title
      }, _bem[messageAlign] = messageAlign, _bem))
    })]);
    var hasButtons = this.showCancelButton && this.showConfirmButton;
    var ButtonGroup = h("div", {
      "class": ['van-hairline--top', Dialog_bem('footer', {
        buttons: hasButtons
      })]
    }, [h(es_button, {
      "directives": [{
        name: "show",
        value: this.showCancelButton
      }],
      "attrs": {
        "size": "large",
        "loading": this.loading.cancel,
        "text": this.cancelButtonText || Dialog_t('cancel')
      },
      "class": Dialog_bem('cancel'),
      "on": {
        "click": function click() {
          _this2.handleAction('cancel');
        }
      }
    }), h(es_button, {
      "directives": [{
        name: "show",
        value: this.showConfirmButton
      }],
      "attrs": {
        "size": "large",
        "loading": this.loading.confirm,
        "text": this.confirmButtonText || Dialog_t('confirm')
      },
      "class": [Dialog_bem('confirm'), {
        'van-hairline--left': hasButtons
      }],
      "on": {
        "click": function click() {
          _this2.handleAction('confirm');
        }
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-dialog-bounce"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [Dialog_bem(), this.className]
    }, [Title, Content, ButtonGroup])]);
  }
}));
// CONCATENATED MODULE: ./es/dialog/index.js




var instance;

var dialog_initInstance = function initInstance() {
  instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(dialog_Dialog))({
    el: document.createElement('div')
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
  document.body.appendChild(instance.$el);
};

var es_dialog_Dialog = function Dialog(options) {
  /* istanbul ignore if */
  if (utils["f" /* isServer */]) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance) {
      dialog_initInstance();
    }

    _extends(instance, Dialog.currentOptions, options, {
      resolve: resolve,
      reject: reject
    });
  });
};

es_dialog_Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  messageAlign: '',
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};
es_dialog_Dialog.alert = es_dialog_Dialog;

es_dialog_Dialog.confirm = function (options) {
  return es_dialog_Dialog(_extends({
    showCancelButton: true
  }, options));
};

es_dialog_Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

es_dialog_Dialog.setDefaultOptions = function (options) {
  _extends(es_dialog_Dialog.currentOptions, options);
};

es_dialog_Dialog.resetDefaultOptions = function () {
  es_dialog_Dialog.currentOptions = _extends({}, es_dialog_Dialog.defaultOptions);
};

es_dialog_Dialog.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(dialog_Dialog);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$dialog = es_dialog_Dialog;
es_dialog_Dialog.resetDefaultOptions();
/* harmony default export */ var dialog = (es_dialog_Dialog);
// CONCATENATED MODULE: ./es/address-edit/Detail.js





var Detail_use = Object(utils["h" /* use */])('address-edit-detail'),
    Detail_sfc = Detail_use[0],
    Detail_bem = Detail_use[1],
    Detail_t = Detail_use[2];

var android = Object(utils["c" /* isAndroid */])();
/* harmony default export */ var Detail = (Detail_sfc({
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    showSearchResult: Boolean
  },
  methods: {
    onSelect: function onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    }
  },
  render: function render(h) {
    var _this = this;

    var value = this.value,
        focused = this.focused,
        searchResult = this.searchResult;
    var Finish = value && focused && android && h("div", {
      "slot": "icon",
      "class": Detail_bem('finish'),
      "on": {
        "click": function click() {
          _this.$refs.field.blur();
        }
      }
    }, [Detail_t('complete')]);
    var SearchList = focused && searchResult && this.showSearchResult && searchResult.map(function (express) {
      return h(es_cell, {
        "key": express.name + express.address,
        "attrs": {
          "title": express.name,
          "label": express.address,
          "icon": "location-o",
          "clickable": true
        },
        "on": {
          "click": function click() {
            _this.onSelect(express);
          }
        }
      });
    });
    return h(es_cell, {
      "class": Detail_bem()
    }, [h(field, {
      "attrs": {
        "autosize": true,
        "rows": this.detailRows,
        "clearable": !android,
        "type": "textarea",
        "maxlength": "200",
        "value": this.value,
        "error": this.error,
        "label": Detail_t('label'),
        "placeholder": Detail_t('placeholder')
      },
      "ref": "field",
      "on": _extends({}, this.$listeners)
    }, [Finish]), SearchList]);
  }
}));
// CONCATENATED MODULE: ./es/switch/index.js

/* harmony default export */ var es_switch = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        on: _vm.value === _vm.activeValue,
        disabled: _vm.disabled
      }),
      style: _vm.style,
      on: {
        "click": _vm.onClick
      }
    }, [_c('div', {
      class: _vm.b('node')
    }, [_vm.loading ? _c('loading', {
      class: _vm.b('loading')
    }) : _vm._e()], 1)]);
  },
  name: 'switch',
  props: {
    value: null,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    },
    size: {
      type: String,
      default: '30px'
    }
  },
  computed: {
    style: function style() {
      return {
        fontSize: this.size,
        backgroundColor: this.value ? this.activeColor : this.inactiveColor
      };
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.disabled && !this.loading) {
        var checked = this.value === this.activeValue;
        var value = checked ? this.inactiveValue : this.activeValue;
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/switch-cell/index.js


/* harmony default export */ var switch_cell = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell', {
      class: _vm.b(),
      attrs: {
        "center": "",
        "title": _vm.title,
        "border": _vm.border
      }
    }, [_c('van-switch', _vm._b({
      on: {
        "input": function input($event) {
          _vm.$emit('input', $event);
        }
      }
    }, 'van-switch', _vm.$props, false))], 1);
  },
  name: 'switch-cell',
  components: {
    VanSwitch: es_switch
  },
  props: {
    value: null,
    title: String,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    },
    size: {
      type: String,
      default: '24px'
    }
  },
  watch: {
    value: function value() {
      this.$emit('change', this.value);
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/validate/mobile.js
function mobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
// CONCATENATED MODULE: ./es/address-edit/index.js












var address_edit_use = Object(utils["h" /* use */])('address-edit'),
    address_edit_sfc = address_edit_use[0],
    address_edit_bem = address_edit_use[1],
    address_edit_t = address_edit_use[2];

var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};
/* harmony default export */ var address_edit = (address_edit_sfc({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    searchResult: Array,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: Number,
      default: 1
    },
    addressInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultData);
      }
    },
    telValidator: {
      type: Function,
      default: mobile
    }
  },
  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },
  computed: {
    areaListLoaded: function areaListLoaded() {
      return Object(utils["e" /* isObj */])(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
          country = _this$data.country,
          province = _this$data.province,
          city = _this$data.city,
          county = _this$data.county,
          areaCode = _this$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    }
  },
  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = _extends({}, defaultData, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },
    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues() {
      var area = this.$refs.area;

      if (area) {
        var detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;

        _extends(this.data, detail);
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = true;
          es_toast(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key] || '').trim();

      if (this.validator) {
        var message = this.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : address_edit_t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : address_edit_t('telInvalid');

        case 'areaCode':
          return value ? '' : address_edit_t('areaEmpty');

        case 'addressDetail':
          return value ? '' : address_edit_t('addressEmpty');

        case 'postalCode':
          return value && !/^\d{6}$/.test(value) ? address_edit_t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      dialog.confirm({
        title: address_edit_t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      this.data.areaCode = code || '';

      if (code) {
        this.$nextTick(this.assignAreaValues);
      }
    },
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    }
  },
  render: function render(h) {
    var _this3 = this;

    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    }; // hide bottom field when use search && detail get focused


    var hideBottomFields = this.searchResult.length && this.detailFocused;
    return h("div", {
      "class": address_edit_bem()
    }, [h(field, {
      "attrs": {
        "clearable": true,
        "label": address_edit_t('name'),
        "placeholder": address_edit_t('namePlaceholder'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(field, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": address_edit_t('tel'),
        "placeholder": address_edit_t('telPlaceholder'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h(field, {
      "directives": [{
        name: "show",
        value: this.showArea
      }],
      "attrs": {
        "readonly": true,
        "label": address_edit_t('area'),
        "placeholder": address_edit_t('areaPlaceholder'),
        "value": this.areaText
      },
      "on": {
        "click": function click() {
          _this3.showAreaPopup = true;
        }
      }
    }), h(Detail, {
      "directives": [{
        name: "show",
        value: this.showDetail
      }],
      "attrs": {
        "focused": this.detailFocused,
        "value": data.addressDetail,
        "error": errorInfo.addressDetail,
        "detailRows": this.detailRows,
        "searchResult": this.searchResult,
        "showSearchResult": this.showSearchResult
      },
      "on": {
        "focus": onFocus('addressDetail'),
        "blur": function blur() {
          _this3.detailFocused = false;
        },
        "input": this.onChangeDetail,
        "select-search": function selectSearch(event) {
          _this3.$emit('select-search', event);
        }
      }
    }), this.showPostal && h(field, {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "type": "tel",
        "maxlength": "6",
        "label": address_edit_t('postal'),
        "placeholder": address_edit_t('postal'),
        "error": errorInfo.postalCode
      },
      "on": {
        "focus": onFocus('postalCode')
      },
      "model": {
        value: data.postalCode,
        callback: function callback($$v) {
          data.postalCode = $$v;
        }
      }
    }), this.$slots.default, this.showSetDefault && h(switch_cell, {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "title": address_edit_t('defaultAddress')
      },
      "on": {
        "change": function change(event) {
          _this3.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          data.isDefault = $$v;
        }
      }
    }), h("div", {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "class": address_edit_bem('buttons')
    }, [h(es_button, {
      "attrs": {
        "block": true,
        "loading": this.isSaving,
        "type": "danger",
        "text": this.saveButtonText || address_edit_t('save')
      },
      "on": {
        "click": this.onSave
      }
    }), this.showDelete && h(es_button, {
      "attrs": {
        "block": true,
        "loading": this.isDeleting,
        "text": this.deleteButtonText || address_edit_t('delete')
      },
      "on": {
        "click": this.onDelete
      }
    })]), h(es_popup, {
      "attrs": {
        "position": "bottom",
        "lazyRender": false,
        "getContainer": "body"
      },
      "model": {
        value: _this3.showAreaPopup,
        callback: function callback($$v) {
          _this3.showAreaPopup = $$v;
        }
      }
    }, [h(es_area, {
      "ref": "area",
      "attrs": {
        "loading": !this.areaListLoaded,
        "value": data.areaCode,
        "areaList": this.areaList
      },
      "on": {
        "confirm": this.onAreaConfirm,
        "cancel": function cancel() {
          _this3.showAreaPopup = false;
        }
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/radio-group/index.js


var radio_group_use = Object(utils["h" /* use */])('radio-group'),
    radio_group_sfc = radio_group_use[0],
    radio_group_bem = radio_group_use[1];

/* harmony default export */ var radio_group = (radio_group_sfc({
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": radio_group_bem()
    }, [this.$slots.default]);
  }
}));
// CONCATENATED MODULE: ./es/mixins/find-parent.js
/**
 * find parent component by name
 */
/* harmony default export */ var find_parent = ({
  data: function data() {
    return {
      parent: null
    };
  },
  methods: {
    findParent: function findParent(name) {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }

        parent = parent.$parent;
      }
    }
  }
});
// CONCATENATED MODULE: ./es/radio/index.js





var radio_use = Object(utils["h" /* use */])('radio'),
    radio_sfc = radio_use[0],
    radio_bem = radio_use[1];

/* harmony default export */ var es_radio = (radio_sfc({
  mixins: [find_parent],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
  },
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    isDisabled: function isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    }
  },
  created: function created() {
    this.findParent('van-radio-group');
  },
  methods: {
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var checked = this.currentValue === this.name;
    var isDisabled = this.isDisabled,
        checkedColor = this.checkedColor;
    var iconStyle = checkedColor && checked && !isDisabled && {
      color: checkedColor
    };
    return h("div", {
      "class": radio_bem({
        disabled: isDisabled
      }),
      "on": {
        "click": function click() {
          _this.$emit('click');
        }
      }
    }, [h("span", {
      "class": radio_bem('input')
    }, [h("input", helper_default()([{
      "on": {
        "change": function change($event) {
          _this.currentValue = _this.name;
        }
      },
      "attrs": {
        "type": "radio",
        "disabled": isDisabled
      },
      "class": radio_bem('control'),
      "domProps": {
        "checked": this._q(_this.currentValue, _this.name)
      }
    }, {
      directives: [{
        name: "model",
        value: _this.currentValue,
        modifiers: {}
      }]
    }])), h(es_icon, {
      "style": iconStyle,
      "attrs": {
        "name": checked ? 'checked' : 'circle'
      }
    })]), this.$slots.default && h("span", {
      "class": radio_bem('label', this.labelPosition),
      "on": {
        "click": this.onClickLabel
      }
    }, [this.$slots.default])]);
  }
}));
// CONCATENATED MODULE: ./es/address-list/Item.js





var Item_use = Object(utils["h" /* use */])('address-item'),
    Item_sfc = Item_use[0],
    Item_bem = Item_use[1];

/* harmony default export */ var Item = (Item_sfc({
  props: {
    data: Object,
    disabled: Boolean,
    switchable: Boolean
  },
  methods: {
    onSelect: function onSelect() {
      if (this.switchable) {
        this.$emit('select');
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var data = this.data,
        disabled = this.disabled,
        switchable = this.switchable;
    return h(es_cell, {
      "class": Item_bem({
        disabled: disabled,
        unswitchable: !switchable
      }),
      "attrs": {
        "is-link": !disabled && switchable
      },
      "on": {
        "click": this.onSelect
      }
    }, [h(es_radio, {
      "attrs": {
        "name": data.id
      }
    }, [h("div", {
      "class": Item_bem('name')
    }, [data.name + "\uFF0C" + data.tel]), h("div", {
      "class": Item_bem('address')
    }, [data.address])]), h(es_icon, {
      "slot": "right-icon",
      "attrs": {
        "name": "edit"
      },
      "class": Item_bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();

          _this.$emit('edit');
        }
      }
    })]);
  }
}));
// CONCATENATED MODULE: ./es/address-list/index.js





var address_list_use = Object(utils["h" /* use */])('address-list'),
    address_list_sfc = address_list_use[0],
    address_list_bem = address_list_use[1],
    address_list_t = address_list_use[2];

/* harmony default export */ var address_list = (address_list_sfc({
  props: {
    list: Array,
    disabledList: Array,
    disabledText: String,
    addButtonText: String,
    value: [String, Number],
    switchable: {
      type: Boolean,
      default: true
    }
  },
  render: function render(h) {
    var _this = this;

    var getList = function getList(list, disabled) {
      return list.map(function (item, index) {
        return h(Item, {
          "attrs": {
            "data": item,
            "disabled": disabled,
            "switchable": _this.switchable && !disabled
          },
          "key": item.id,
          "on": {
            "select": function select() {
              _this.$emit(disabled ? 'select-disabled' : 'select', item, index);
            },
            "edit": function edit() {
              _this.$emit(disabled ? 'edit-disabled' : 'edit', item, index);
            }
          }
        });
      });
    };

    var List = getList(this.list);
    var DisabledList = getList(this.disabledList, true);
    return h("div", {
      "class": address_list_bem()
    }, [this.$slots.top, h(radio_group, {
      "attrs": {
        "value": this.value
      },
      "on": {
        "input": function input(event) {
          return _this.$emit('input', event);
        }
      }
    }, [List]), this.disabledText && h("div", {
      "class": address_list_bem('disabled-text')
    }, [this.disabledText]), DisabledList, this.$slots.default, h(es_button, {
      "attrs": {
        "square": true,
        "size": "large",
        "type": "danger",
        "text": this.addButtonText || address_list_t('add')
      },
      "class": address_list_bem('add'),
      "on": {
        "click": function click() {
          _this.$emit('add');
        }
      }
    })]);
  }
}));
// CONCATENATED MODULE: ./es/badge/index.js



var badge_use = Object(utils["h" /* use */])('badge'),
    badge_sfc = badge_use[0],
    badge_bem = badge_use[1];

/* harmony default export */ var badge = (badge_sfc({
  props: {
    url: String,
    info: [String, Number],
    title: String
  },
  inject: ['vanBadgeGroup'],
  created: function created() {
    this.parent.badges.push(this);
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    this.parent.badges = this.parent.badges.filter(function (item) {
      return item !== _this;
    });
  },
  computed: {
    parent: function parent() {
      if (false) {}

      return this.vanBadgeGroup;
    },
    select: function select() {
      return this.parent.badges.indexOf(this) === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      var index = this.parent.badges.indexOf(this);
      this.$emit('click', index);
      this.parent.$emit('change', index);
    }
  },
  render: function render(h) {
    return h("a", {
      "attrs": {
        "href": this.url
      },
      "class": [badge_bem({
        select: this.select
      }), 'van-hairline'],
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": badge_bem('text')
    }, [this.title, h(info, {
      "attrs": {
        "info": this.info
      },
      "class": badge_bem('info')
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/badge-group/index.js


var badge_group_use = Object(utils["h" /* use */])('badge-group'),
    badge_group_sfc = badge_group_use[0],
    badge_group_bem = badge_group_use[1];

/* harmony default export */ var badge_group = (badge_group_sfc({
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  provide: function provide() {
    return {
      vanBadgeGroup: this
    };
  },
  data: function data() {
    return {
      badges: []
    };
  },
  render: function render(h) {
    return h("div", {
      "class": [badge_group_bem(), 'van-hairline--top-bottom']
    }, [this.$slots.default]);
  }
}));
// CONCATENATED MODULE: ./es/utils/color.js
var RED = '#f44';
var BLUE = '#1989fa';
var GREEN = '#07c160';
var WHITE = '#fff';
var GRAY_DARK = '#969799';
// CONCATENATED MODULE: ./es/tag/index.js



var tag_use = Object(utils["h" /* use */])('tag'),
    tag_sfc = tag_use[0],
    tag_bem = tag_use[1];

var COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN
};
/* harmony default export */ var tag = (tag_sfc({
  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },
  computed: {
    style: function style() {
      var _style;

      var color = this.color || COLOR_MAP[this.type] || GRAY_DARK;
      var key = this.plain ? 'color' : 'backgroundColor';
      var style = (_style = {}, _style[key] = color, _style);

      if (this.textColor) {
        style.color = this.textColor;
      }

      return style;
    }
  },
  render: function render(h) {
    var _bem;

    var mark = this.mark,
        plain = this.plain,
        round = this.round,
        size = this.size;
    return h("span", {
      "class": [tag_bem((_bem = {
        mark: mark,
        plain: plain,
        round: round
      }, _bem[size] = size, _bem)), {
        'van-hairline--surround': plain
      }],
      "style": this.style
    }, [this.$slots.default]);
  }
}));
// CONCATENATED MODULE: ./es/card/index.js



var card_use = Object(utils["h" /* use */])('card'),
    card_sfc = card_use[0],
    card_bem = card_use[1];

/* harmony default export */ var card = (card_sfc({
  props: {
    tag: String,
    desc: String,
    thumb: String,
    title: String,
    centered: Boolean,
    lazyLoad: Boolean,
    thumbLink: String,
    num: [Number, String],
    price: [Number, String],
    originPrice: [Number, String],
    currency: {
      type: String,
      default: '¥'
    }
  },
  render: function render(h) {
    var thumb = this.thumb,
        slots = this.$slots;
    var showThumb = slots.thumb || thumb;
    var showTag = slots.tag || this.tag;
    var showNum = slots.num || Object(utils["d" /* isDef */])(this.num);
    var showPrice = slots.price || Object(utils["d" /* isDef */])(this.price);
    var showOriginPrice = slots['origin-price'] || Object(utils["d" /* isDef */])(this.originPrice);
    var Thumb = showThumb && h("a", {
      "attrs": {
        "href": this.thumbLink
      },
      "class": card_bem('thumb')
    }, [slots.thumb || (this.lazyLoad ? h("img", {
      "class": card_bem('img'),
      "directives": [{
        name: "lazy",
        value: thumb
      }]
    }) : h("img", {
      "class": card_bem('img'),
      "attrs": {
        "src": thumb
      }
    })), showTag && h("div", {
      "class": card_bem('tag')
    }, [slots.tag || h(tag, {
      "attrs": {
        "mark": true,
        "type": "danger"
      }
    }, [this.tag])])]);
    var Title = slots.title || this.title && h("div", {
      "class": card_bem('title')
    }, [this.title]);
    var Desc = slots.desc || this.desc && h("div", {
      "class": [card_bem('desc'), 'van-ellipsis']
    }, [this.desc]);
    var Price = showPrice && h("div", {
      "class": card_bem('price')
    }, [slots.price || this.currency + " " + this.price]);
    var OriginPrice = showOriginPrice && h("div", {
      "class": card_bem('origin-price')
    }, [slots['origin-price'] || this.currency + " " + this.originPrice]);
    var Num = showNum && h("div", {
      "class": card_bem('num')
    }, [slots.num || "x " + this.num]);
    var Footer = slots.footer && h("div", {
      "class": card_bem('footer')
    }, [slots.footer]);
    return h("div", {
      "class": card_bem()
    }, [h("div", {
      "class": card_bem('header')
    }, [Thumb, h("div", {
      "class": card_bem('content', {
        centered: this.centered
      })
    }, [Title, Desc, slots.tags, h("div", {
      "class": "van-card__bottom"
    }, [Price, OriginPrice, Num])])]), Footer]);
  }
}));
// CONCATENATED MODULE: ./es/checkbox/index.js




var checkbox_use = Object(utils["h" /* use */])('checkbox'),
    checkbox_sfc = checkbox_use[0],
    checkbox_bem = checkbox_use[1];

/* harmony default export */ var es_checkbox = (checkbox_sfc({
  mixins: [find_parent],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      default: 'round'
    }
  },
  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    },
    isDisabled: function isDisabled() {
      return this.parent && this.parent.disabled || this.disabled;
    },
    iconStyle: function iconStyle() {
      var checkedColor = this.checkedColor;

      if (checkedColor && this.checked && !this.isDisabled) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  created: function created() {
    this.findParent('van-checkbox-group');
  },
  methods: {
    toggle: function toggle(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked;
      }
    },
    setParentValue: function setParentValue(val) {
      var parent = this.parent;
      var value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */


        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        var index = value.indexOf(this.name);
        /* istanbul ignore else */

        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var CheckIcon = this.$scopedSlots.icon ? this.$scopedSlots.icon({
      checked: this.checked
    }) : h(es_icon, {
      "attrs": {
        "name": "success"
      },
      "style": this.iconStyle
    });
    var Label = this.$slots.default && h("span", {
      "class": checkbox_bem('label', [this.labelPosition, {
        disabled: this.isDisabled
      }]),
      "on": {
        "click": function click() {
          _this.toggle('label');
        }
      }
    }, [this.$slots.default]);
    return h("div", {
      "class": checkbox_bem()
    }, [h("div", {
      "class": checkbox_bem('icon', [this.shape, {
        disabled: this.isDisabled,
        checked: this.checked
      }]),
      "on": {
        "click": this.toggle
      }
    }, [CheckIcon]), Label]);
  }
}));
// CONCATENATED MODULE: ./es/checkbox-group/index.js


var checkbox_group_use = Object(utils["h" /* use */])('checkbox-group'),
    checkbox_group_sfc = checkbox_group_use[0],
    checkbox_group_bem = checkbox_group_use[1];

/* harmony default export */ var checkbox_group = (checkbox_group_sfc({
  props: {
    max: Number,
    value: Array,
    disabled: Boolean
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": checkbox_group_bem()
    }, [this.$slots.default]);
  }
}));
// EXTERNAL MODULE: ./es/utils/raf.js
var raf = __webpack_require__(4);

// CONCATENATED MODULE: ./es/circle/index.js




var circle_use = Object(utils["h" /* use */])('circle'),
    circle_sfc = circle_use[0],
    circle_bem = circle_use[1];

var PERIMETER = 3140;
var PATH = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';

function circle_format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

/* harmony default export */ var circle = (circle_sfc({
  props: {
    text: String,
    value: Number,
    speed: Number,
    size: {
      type: String,
      default: '100px'
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
    },
    layerColor: {
      type: String,
      default: WHITE
    },
    color: {
      type: String,
      default: BLUE
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      return {
        width: this.size,
        height: this.size
      };
    },
    layerStyle: function layerStyle() {
      var offset = PERIMETER * (100 - this.value) / 100;
      offset = this.clockwise ? offset : PERIMETER * 2 - offset;
      return {
        stroke: "" + this.color,
        strokeDashoffset: offset + "px",
        strokeWidth: this.strokeWidth + 1 + "px"
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px"
      };
    }
  },
  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = circle_format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          Object(raf["a" /* cancel */])(this.rafId);
          this.rafId = Object(raf["b" /* raf */])(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true
    }
  },
  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', circle_format(parseFloat(rate.toFixed(1))));

      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = Object(raf["b" /* raf */])(this.animate);
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": circle_bem(),
      "style": this.style
    }, [h("svg", {
      "attrs": {
        "viewBox": "0 0 1060 1060"
      }
    }, [h("path", {
      "class": circle_bem('hover'),
      "style": this.hoverStyle,
      "attrs": {
        "d": PATH
      }
    }), h("path", {
      "class": circle_bem('layer'),
      "style": this.layerStyle,
      "attrs": {
        "d": PATH
      }
    })]), this.$slots.default || this.text && h("div", {
      "class": circle_bem('text')
    }, [this.text])]);
  }
}));
// CONCATENATED MODULE: ./es/col/index.js


var col_use = Object(utils["h" /* use */])('col'),
    col_sfc = col_use[0],
    col_bem = col_use[1];

/* harmony default export */ var col = (col_sfc({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  },
  render: function render(h) {
    var _bem;

    var span = this.span,
        offset = this.offset;
    return h(this.tag, {
      "class": col_bem((_bem = {}, _bem[span] = span, _bem["offset-" + offset] = offset, _bem)),
      "style": this.style
    }, [this.$slots.default]);
  }
}));
// CONCATENATED MODULE: ./es/collapse/index.js


var collapse_use = Object(utils["h" /* use */])('collapse'),
    collapse_sfc = collapse_use[0],
    collapse_bem = collapse_use[1];

/* harmony default export */ var collapse = (collapse_sfc({
  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },
  data: function data() {
    return {
      items: []
    };
  },
  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": [collapse_bem(), 'van-hairline--top-bottom']
    }, [this.$slots.default]);
  }
}));
// CONCATENATED MODULE: ./es/collapse-item/index.js







var collapse_item_use = Object(utils["h" /* use */])('collapse-item'),
    collapse_item_sfc = collapse_item_use[0],
    collapse_item_bem = collapse_item_use[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];
/* harmony default export */ var collapse_item = (collapse_item_sfc({
  mixins: [cell, find_parent],
  props: {
    name: [String, Number],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    items: function items() {
      return this.parent.items;
    },
    index: function index() {
      return this.items.indexOf(this);
    },
    currentName: function currentName() {
      return Object(utils["d" /* isDef */])(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var value = this.parent.value;
      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.findParent('van-collapse');
    this.items.push(this);
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  destroyed: function destroyed() {
    this.items.splice(this.index, 1);
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      }

      this.$nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var contentHeight = content.clientHeight + "px";
        wrapper.style.height = _expanded ? 0 : contentHeight;
        Object(raf["b" /* raf */])(function () {
          wrapper.style.height = _expanded ? contentHeight : 0;
        });
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      var expanded = !this.expanded;
      this.parent.switch(name, expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = null;
      }
    }
  },
  render: function render(h) {
    var _this3 = this;

    var Title = h(es_cell, {
      "class": collapse_item_bem('title', {
        disabled: this.disabled,
        expanded: this.expanded
      }),
      "on": {
        "click": this.onClick
      },
      "props": _extends({}, this.$props)
    }, [this.$slots.value, CELL_SLOTS.map(function (slot) {
      return h('template', {
        slot: slot
      }, _this3.$slots[slot]);
    })]);
    var Content = this.inited && h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "ref": "wrapper",
      "class": collapse_item_bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [h("div", {
      "ref": "content",
      "class": collapse_item_bem('content')
    }, [this.$slots.default])]);
    return h("div", {
      "class": [collapse_item_bem(), {
        'van-hairline--top': this.index
      }]
    }, [Title, Content]);
  }
}));
// CONCATENATED MODULE: ./es/contact-card/index.js



var contact_card_use = Object(utils["h" /* use */])('contact-card'),
    contact_card_sfc = contact_card_use[0],
    contact_card_bem = contact_card_use[1],
    contact_card_t = contact_card_use[2];

/* harmony default export */ var contact_card = (contact_card_sfc({
  props: {
    tel: String,
    name: String,
    addText: String,
    editable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (this.editable) {
        this.$emit('click', event);
      }
    }
  },
  render: function render(h) {
    var type = this.type;
    return h(es_cell, {
      "attrs": {
        "center": true,
        "border": false,
        "isLink": this.editable,
        "icon": type === 'edit' ? 'contact' : 'add-square'
      },
      "class": contact_card_bem([type]),
      "on": {
        "click": this.onClick
      }
    }, [type === 'add' ? this.addText || contact_card_t('addText') : [h("div", [contact_card_t('name') + "\uFF1A" + this.name]), h("div", [contact_card_t('tel') + "\uFF1A" + this.tel])]]);
  }
}));
// CONCATENATED MODULE: ./es/contact-edit/index.js








var contact_edit_use = Object(utils["h" /* use */])('contact-edit'),
    contact_edit_sfc = contact_edit_use[0],
    contact_edit_bem = contact_edit_use[1],
    contact_edit_t = contact_edit_use[2];

var defaultContact = {
  tel: '',
  name: ''
};
/* harmony default export */ var contact_edit = (contact_edit_sfc({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: mobile
    }
  },
  data: function data() {
    return {
      data: _extends({}, defaultContact, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = _extends({}, defaultContact, val);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : contact_edit_t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : contact_edit_t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          es_toast(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      dialog.confirm({
        message: contact_edit_t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    };

    return h("div", {
      "class": contact_edit_bem()
    }, [h(field, {
      "attrs": {
        "clearable": true,
        "maxlength": "30",
        "label": contact_edit_t('name'),
        "placeholder": contact_edit_t('nameEmpty'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(field, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": contact_edit_t('tel'),
        "placeholder": contact_edit_t('telEmpty'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h("div", {
      "class": contact_edit_bem('buttons')
    }, [h(es_button, {
      "attrs": {
        "block": true,
        "type": "danger",
        "text": contact_edit_t('save'),
        "loading": this.isSaving
      },
      "on": {
        "click": this.onSave
      }
    }), this.isEdit && h(es_button, {
      "attrs": {
        "block": true,
        "text": contact_edit_t('delete'),
        "loading": this.isDeleting
      },
      "on": {
        "click": this.onDelete
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/contact-list/index.js







var contact_list_use = Object(utils["h" /* use */])('contact-list'),
    contact_list_sfc = contact_list_use[0],
    contact_list_bem = contact_list_use[1],
    contact_list_t = contact_list_use[2];

/* harmony default export */ var contact_list = (contact_list_sfc({
  props: {
    value: null,
    list: Array,
    addText: String
  },
  render: function render(h) {
    var _this = this;

    return h("div", {
      "class": contact_list_bem()
    }, [h(radio_group, {
      "attrs": {
        "value": this.value
      },
      "class": contact_list_bem('group'),
      "on": {
        "input": function input(event) {
          _this.$emit('input', event);
        }
      }
    }, [this.list.map(function (item, index) {
      return h(es_cell, {
        "key": item.id,
        "attrs": {
          "isLink": true
        }
      }, [h(es_radio, {
        "attrs": {
          "name": item.id
        },
        "on": {
          "click": function click() {
            _this.$emit('select', item, index);
          }
        }
      }, [h("div", {
        "class": contact_list_bem('name')
      }, [item.name + "\uFF0C" + item.tel])]), h(es_icon, {
        "slot": "right-icon",
        "attrs": {
          "name": "edit"
        },
        "class": contact_list_bem('edit'),
        "on": {
          "click": function click() {
            _this.$emit('edit', item, index);
          }
        }
      })]);
    })]), h(es_button, {
      "attrs": {
        "square": true,
        "size": "large",
        "type": "danger",
        "text": this.addText || contact_list_t('addText')
      },
      "class": contact_list_bem('add'),
      "on": {
        "click": function click() {
          _this.$emit('add');
        }
      }
    })]);
  }
}));
// CONCATENATED MODULE: ./es/coupon/index.js



var coupon_use = Object(utils["h" /* use */])('coupon'),
    coupon_sfc = coupon_use[0],
    coupon_bem = coupon_use[1],
    coupon_t = coupon_use[2];

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + padZero(date.getMonth() + 1) + "." + padZero(date.getDate());
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

function formatcurrency(currency) {
  var value = '';

  if (currency === 0) {
    value = '￥';
  } else if (currency === 1) {
    value = '小时';
  } else if (currency === 2) {
    value = '分钟';
  } else if (currency === 3) {
    value = '天';
  }

  return value;
}

/* harmony default export */ var es_coupon = (coupon_sfc({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean // currency: {
    //   type: String,
    //   default: '¥'
    // }

  },
  computed: {
    validPeriod: function validPeriod() {
      return coupon_t('valid') + "\uFF1A" + getDate(this.coupon.startAt) + " - " + getDate(this.coupon.endAt);
    },
    faceAmount: function faceAmount() {
      return this.coupon.denominations ? "<span>" + formatcurrency(this.coupon.currency) + "</span> " + formatAmount(this.coupon.denominations) : this.coupon.discount ? coupon_t('discount', formatDiscount(this.coupon.discount)) : '';
    },
    conditionMessage: function conditionMessage() {
      var condition = this.coupon.originCondition;
      condition = condition % 100 === 0 ? Math.round(condition / 100) : (condition / 100).toFixed(2);
      return condition === 0 ? coupon_t('unlimited') : coupon_t('condition', condition);
    }
  },
  render: function render(h) {
    var coupon = this.coupon,
        disabled = this.disabled;
    var description = disabled && coupon.reason || coupon.description;
    return h("div", {
      "class": coupon_bem({
        disabled: disabled
      })
    }, [h("div", {
      "class": coupon_bem('content')
    }, [h("div", {
      "class": coupon_bem('head')
    }, [h("h2", {
      "domProps": {
        "innerHTML": this.faceAmount
      }
    }), h("p", [this.coupon.condition || this.conditionMessage])]), h("div", {
      "class": coupon_bem('body')
    }, [h("h2", [coupon.name]), h("p", [this.validPeriod]), this.chosen && h(es_checkbox, {
      "attrs": {
        "value": true
      },
      "class": coupon_bem('corner')
    })])]), description && h("p", {
      "class": coupon_bem('description')
    }, [description])]);
  }
}));
// CONCATENATED MODULE: ./es/coupon-cell/index.js



var coupon_cell_use = Object(utils["h" /* use */])('coupon-cell'),
    coupon_cell_sfc = coupon_cell_use[0],
    coupon_cell_bem = coupon_cell_use[1],
    coupon_cell_t = coupon_cell_use[2];

/* harmony default export */ var coupon_cell = (coupon_cell_sfc({
  model: {
    prop: 'chosenCoupon'
  },
  props: {
    title: String,
    coupons: Array,
    currency: {
      type: String,
      default: '¥'
    },
    border: {
      type: Boolean,
      default: true
    },
    editable: {
      type: Boolean,
      default: true
    },
    chosenCoupon: {
      type: Number,
      default: -1
    }
  },
  computed: {
    value: function value() {
      var coupons = this.coupons;
      var coupon = coupons[this.chosenCoupon];

      if (coupon) {
        var value = coupon.denominations || coupon.value;
        return "-" + this.currency + (value / 100).toFixed(2);
      }

      return coupons.length === 0 ? coupon_cell_t('tips') : coupon_cell_t('count', coupons.length);
    },
    valueClass: function valueClass() {
      return this.coupons[this.chosenCoupon] ? 'van-coupon-cell--selected' : '';
    }
  },
  render: function render(h) {
    var _this = this;

    return h(es_cell, {
      "class": coupon_cell_bem(),
      "attrs": {
        "title": this.title || coupon_cell_t('title'),
        "value": this.value,
        "border": this.border,
        "is-link": this.editable,
        "value-class": this.valueClass
      },
      "on": {
        "click": function click() {
          _this.$emit('click');
        }
      }
    });
  }
}));
// CONCATENATED MODULE: ./es/tab/index.js
/* eslint-disable object-shorthand */


/* harmony default export */ var tab = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.isSelected || _vm.parent.animated,
        expression: "isSelected || parent.animated"
      }],
      class: _vm.b('pane')
    }, [_vm.inited ? _vm._t("default") : _vm._e(), _vm.$slots.title ? _c('div', {
      ref: "title"
    }, [_vm._t("title")], 2) : _vm._e()], 2);
  },
  name: 'tab',
  mixins: [find_parent],
  props: {
    title: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    index: function index() {
      return this.parent.tabs.indexOf(this);
    },
    isSelected: function isSelected() {
      return this.index === this.parent.curActive;
    }
  },
  watch: {
    'parent.curActive': function parentCurActive() {
      this.inited = this.inited || this.isSelected;
    },
    title: function title() {
      this.parent.setLine();
    }
  },
  created: function created() {
    this.findParent('van-tabs');
  },
  mounted: function mounted() {
    var tabs = this.parent.tabs;
    var index = this.parent.$slots.default.indexOf(this.$vnode);
    tabs.splice(index === -1 ? tabs.length : index, 0, this);

    if (this.$slots.title) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.parent.tabs.splice(this.index, 1);
  }
}));
// CONCATENATED MODULE: ./es/tabs/index.js





/* harmony default export */ var tabs = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b([_vm.type])
    }, [_c('div', {
      ref: "wrap",
      class: [_vm.b('wrap', {
        scrollable: _vm.scrollable
      }), {
        'van-hairline--top-bottom': _vm.type === 'line'
      }],
      style: _vm.wrapStyle
    }, [_c('div', {
      ref: "nav",
      class: _vm.b('nav', [_vm.type]),
      style: _vm.navStyle
    }, [_vm.type === 'line' ? _c('div', {
      class: _vm.b('line'),
      style: _vm.lineStyle
    }) : _vm._e(), _vm._l(_vm.tabs, function (tab, index) {
      return _c('div', {
        ref: "tabs",
        refInFor: true,
        staticClass: "van-tab",
        class: {
          'van-tab--active': index === _vm.curActive,
          'van-tab--disabled': tab.disabled,
          'van-tab--complete': !_vm.ellipsis
        },
        style: _vm.getTabStyle(tab, index),
        on: {
          "click": function click($event) {
            _vm.onClick(index);
          }
        }
      }, [_c('span', {
        ref: "title",
        refInFor: true,
        class: {
          'van-ellipsis': _vm.ellipsis
        },
        domProps: {
          "textContent": _vm._s(tab.title)
        }
      })]);
    })], 2)]), _c('div', {
      ref: "content",
      class: _vm.b('content', {
        animated: _vm.animated
      })
    }, [_vm.animated ? _c('div', {
      class: _vm.b('track'),
      style: _vm.trackStyle
    }, [_vm._t("default")], 2) : _vm._t("default")], 2)]);
  },
  name: 'tabs',
  mixins: [touch],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    offsetTop: Number,
    swipeable: Boolean,
    ellipsis: {
      type: Boolean,
      default: true
    },
    lineWidth: {
      type: Number,
      default: null
    },
    lineHeight: {
      type: Number,
      default: null
    },
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.3
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },
  data: function data() {
    return {
      tabs: [],
      position: '',
      curActive: null,
      lineStyle: {
        backgroundColor: this.color
      },
      events: {
        resize: false,
        sticky: false,
        swipeable: false
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.tabs.length > this.swipeThreshold || !this.ellipsis;
    },
    wrapStyle: function wrapStyle() {
      switch (this.position) {
        case 'top':
          return {
            top: this.offsetTop + 'px',
            position: 'fixed'
          };

        case 'bottom':
          return {
            top: 'auto',
            bottom: 0
          };

        default:
          return null;
      }
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color
      };
    },
    trackStyle: function trackStyle() {
      if (this.animated) {
        return {
          left: -1 * this.curActive * 100 + "%",
          transitionDuration: this.duration + "s"
        };
      }
    }
  },
  watch: {
    active: function active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },
    color: function color() {
      this.setLine();
    },
    tabs: function tabs() {
      this.correctActive(this.curActive || this.active);
      this.scrollIntoView();
      this.setLine();
    },
    curActive: function curActive() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.position === 'top' || this.position === 'bottom') {
        utils_scroll.setScrollTop(window, utils_scroll.getElementTop(this.$el));
      }
    },
    sticky: function sticky() {
      this.handlers(true);
    },
    swipeable: function swipeable() {
      this.handlers(true);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.inited = true;

      _this.handlers(true);
    });
  },
  activated: function activated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.handlers(true);

      _this2.scrollIntoView(true);
    });
  },
  deactivated: function deactivated() {
    this.handlers(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.handlers(false);
  },
  methods: {
    // whether to bind sticky listener
    handlers: function handlers(bind) {
      var events = this.events;
      var sticky = this.sticky && bind;
      var swipeable = this.swipeable && bind; // listen to window resize event

      if (events.resize !== bind) {
        events.resize = bind;
        (bind ? event_on : off)(window, 'resize', this.setLine, true);
      } // listen to scroll event


      if (events.sticky !== sticky) {
        events.sticky = sticky;
        this.scrollEl = this.scrollEl || utils_scroll.getScrollEventTarget(this.$el);
        (sticky ? event_on : off)(this.scrollEl, 'scroll', this.onScroll, true);
        this.onScroll();
      } // listen to touch event


      if (events.swipeable !== swipeable) {
        events.swipeable = swipeable;
        var content = this.$refs.content;
        var action = swipeable ? event_on : off;
        action(content, 'touchstart', this.touchStart);
        action(content, 'touchmove', this.touchMove);
        action(content, 'touchend', this.onTouchEnd);
        action(content, 'touchcancel', this.onTouchEnd);
      }
    },
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          curActive = this.curActive;
      var minSwipeDistance = 50;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && curActive !== 0) {
          this.setCurActive(curActive - 1);
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.setCurActive(curActive + 1);
        }
      }
    },
    // adjust tab position
    onScroll: function onScroll() {
      var scrollTop = utils_scroll.getScrollTop(window) + this.offsetTop;
      var elTopToPageTop = utils_scroll.getElementTop(this.$el);
      var elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;

      if (scrollTop > elBottomToPageTop) {
        this.position = 'bottom';
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'top';
      } else {
        this.position = '';
      }

      var scrollParams = {
        scrollTop: scrollTop,
        isFixed: this.position === 'top'
      };
      this.$emit('scroll', scrollParams);
    },
    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;

      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var tabs = _this3.$refs.tabs;

        if (!tabs || !tabs[_this3.curActive] || _this3.type !== 'line') {
          return;
        }

        var tab = tabs[_this3.curActive];
        var lineWidth = _this3.lineWidth,
            lineHeight = _this3.lineHeight;
        var width = _this3.isDef(lineWidth) ? lineWidth : tab.offsetWidth / 2;
        var left = tab.offsetLeft + (tab.offsetWidth - width) / 2;
        var lineStyle = {
          width: width + "px",
          backgroundColor: _this3.color,
          transform: "translateX(" + left + "px)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = _this3.duration + "s";
        }

        if (_this3.isDef(lineHeight)) {
          var height = lineHeight + "px";
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this3.lineStyle = lineStyle;
      });
    },
    // correct the value of active
    correctActive: function correctActive(active) {
      active = +active;
      var exist = this.tabs.some(function (tab) {
        return tab.index === active;
      });
      var defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },
    setCurActive: function setCurActive(active) {
      active = this.findAvailableTab(active, active < this.curActive);

      if (this.isDef(active) && active !== this.curActive) {
        this.$emit('input', active);

        if (this.curActive !== null) {
          this.$emit('change', active, this.tabs[active].title);
        }

        this.curActive = active;
      }
    },
    findAvailableTab: function findAvailableTab(active, reverse) {
      var diff = reverse ? -1 : 1;
      var index = active;

      while (index >= 0 && index < this.tabs.length) {
        if (!this.tabs[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$tabs$index = this.tabs[index],
          title = _this$tabs$index.title,
          disabled = _this$tabs$index.disabled;

      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.setCurActive(index);
        this.$emit('click', index, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var tabs = this.$refs.tabs;

      if (!this.scrollable || !tabs || !tabs[this.curActive]) {
        return;
      }

      var nav = this.$refs.nav;
      var scrollLeft = nav.scrollLeft,
          navWidth = nav.offsetWidth;
      var _tabs$this$curActive = tabs[this.curActive],
          offsetLeft = _tabs$this$curActive.offsetLeft,
          tabWidth = _tabs$this$curActive.offsetWidth;
      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2, immediate);
    },
    // animate the scrollLeft of nav
    scrollTo: function scrollTo(el, from, to, immediate) {
      if (immediate) {
        el.scrollLeft += to - from;
        return;
      }

      var count = 0;
      var frames = Math.round(this.duration * 1000 / 16);

      var animate = function animate() {
        el.scrollLeft += (to - from) / frames;
        /* istanbul ignore next */

        if (++count < frames) {
          Object(raf["b" /* raf */])(animate);
        }
      };

      animate();
    },
    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this4 = this;

      this.$nextTick(function () {
        var title = _this4.$refs.title[index];
        title.parentNode.replaceChild(el, title);
      });
    },
    getTabStyle: function getTabStyle(item, index) {
      var style = {};
      var color = this.color;
      var active = index === this.curActive;
      var isCard = this.type === 'card';

      if (color) {
        if (!item.disabled && isCard && !active) {
          style.color = color;
        }

        if (!item.disabled && isCard && active) {
          style.backgroundColor = color;
        }

        if (isCard) {
          style.borderColor = color;
        }
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + '%';
      }

      return style;
    }
  }
}));
// CONCATENATED MODULE: ./es/coupon-list/index.js







var coupon_list_use = Object(utils["h" /* use */])('coupon-list'),
    coupon_list_sfc = coupon_list_use[0],
    coupon_list_bem = coupon_list_use[1],
    coupon_list_t = coupon_list_use[2];

var EMPTY_IMAGE = 'https://img.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png';
/* harmony default export */ var coupon_list = (coupon_list_sfc({
  model: {
    prop: 'code'
  },
  props: {
    code: String,
    coupons: Array,
    disabledCoupons: Array,
    closeButtonText: String,
    inputPlaceholder: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.currentCode || this.currentCode.length < this.exchangeMinLength);
    },
    title: function title() {
      return coupon_list_t('enable') + " (" + this.coupons.length + ")";
    },
    disabledTitle: function disabledTitle() {
      return coupon_list_t('disabled') + " (" + this.disabledCoupons.length + ")";
    },
    listStyle: function listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
    }
  },
  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: function displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },
  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },
  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode); // auto clear currentCode when not use v-model

      if (!this.code) {
        this.currentCode = '';
      }
    },
    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            card = _this$$refs.card,
            list = _this$$refs.list;
        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    }
  },
  render: function render(h) {
    var _this2 = this;

    var ExchangeBar = this.showExchangeBar && h(field, {
      "attrs": {
        "clearable": true,
        "border": false,
        "placeholder": this.inputPlaceholder || coupon_list_t('placeholder'),
        "maxlength": "20"
      },
      "class": coupon_list_bem('field'),
      "model": {
        value: _this2.currentCode,
        callback: function callback($$v) {
          _this2.currentCode = $$v;
        }
      }
    }, [h(es_button, {
      "slot": "button",
      "attrs": {
        "size": "small",
        "type": "danger",
        "text": this.exchangeButtonText || coupon_list_t('exchange'),
        "loading": this.exchangeButtonLoading,
        "disabled": this.buttonDisabled
      },
      "class": coupon_list_bem('exchange'),
      "on": {
        "click": this.onClickExchangeButton
      }
    })]);
    var Empty = h("div", {
      "class": coupon_list_bem('empty')
    }, [h("img", {
      "attrs": {
        "src": EMPTY_IMAGE
      }
    }), h("p", [coupon_list_t('empty')])]);

    var onChange = function onChange(index) {
      return function () {
        return _this2.$emit('change', index);
      };
    };

    var CouponTab = h(tab, {
      "attrs": {
        "title": this.title
      }
    }, [h("div", {
      "class": coupon_list_bem('list'),
      "style": this.listStyle
    }, [this.coupons.map(function (coupon, index) {
      return h(es_coupon, {
        "ref": "card",
        "key": coupon.id,
        "attrs": {
          "coupon": coupon,
          "chosen": index === _this2.chosenCoupon
        },
        "nativeOn": {
          "click": onChange(index)
        }
      });
    }), !this.coupons.length && Empty])]);
    var DisabledCouponTab = h(tab, {
      "attrs": {
        "title": this.disabledTitle
      }
    }, [h("div", {
      "class": coupon_list_bem('list'),
      "style": this.listStyle
    }, [this.disabledCoupons.map(function (coupon) {
      return h(es_coupon, {
        "attrs": {
          "disabled": true,
          "coupon": coupon
        },
        "key": coupon.id
      });
    }), !this.disabledCoupons.length && Empty])]);
    return h("div", {
      "class": coupon_list_bem()
    }, [ExchangeBar, h(tabs, {
      "class": coupon_list_bem('tab'),
      "attrs": {
        "line-width": 120
      },
      "model": {
        value: _this2.tab,
        callback: function callback($$v) {
          _this2.tab = $$v;
        }
      }
    }, [CouponTab, DisabledCouponTab]), h(es_button, {
      "directives": [{
        name: "show",
        value: this.showCloseButton
      }],
      "attrs": {
        "size": "large",
        "text": this.closeButtonText || coupon_list_t('close')
      },
      "class": coupon_list_bem('close'),
      "on": {
        "click": onChange(-1)
      }
    })]);
  }
}));
// CONCATENATED MODULE: ./es/datetime-picker/utils.js
function isValidDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
}
function utils_padZero(val) {
  return ("00" + val).slice(-2);
}
function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
function getTrueValue(formattedValue) {
  if (!formattedValue) return;

  while (isNaN(parseInt(formattedValue, 10))) {
    formattedValue = formattedValue.slice(1);
  }

  return parseInt(formattedValue, 10);
}
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
// CONCATENATED MODULE: ./es/datetime-picker/index.js






var datetime_picker_use = Object(utils["h" /* use */])('datetime-picker'),
    datetime_picker_sfc = datetime_picker_use[0],
    datetime_picker_bem = datetime_picker_use[1];

var currentYear = new Date().getFullYear();
/* harmony default export */ var datetime_picker = (datetime_picker_sfc({
  mixins: [mixins_picker],
  props: {
    value: null,
    minHour: Number,
    minMinute: Number,
    type: {
      type: String,
      default: 'datetime'
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: 'YYYY.MM.DD HH时 mm分'
    },
    formatter: {
      type: Function,
      default: function _default(type, value) {
        return value;
      }
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: isValidDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: isValidDate
    },
    maxHour: {
      type: Number,
      default: 23
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  },
  data: function data() {
    return {
      innerValue: this.correctValue(this.value)
    };
  },
  watch: {
    value: function value(val) {
      val = this.correctValue(val);
      var isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();

      if (!isEqual) {
        this.innerValue = val;

        if (this.type === 'time') {
          this.updateColumnValue(val);
        }
      }
    },
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    },
    columns: function columns() {
      this.updateColumnValue(this.innerValue);
    }
  },
  computed: {
    ranges: function ranges() {
      if (this.type === 'time') {
        return [{
          type: 'hour',
          range: [this.minHour, this.maxHour]
        }, {
          type: 'minute',
          range: [this.minMinute, this.maxMinute]
        }];
      }

      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    },
    columns: function columns() {
      var _this = this;

      var results = this.ranges.map(function (_ref) {
        var type = _ref.type,
            rangeArr = _ref.range;
        var values = times(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = rangeArr[0] + index;
          value = value < 10 ? "0" + value : "" + value;
          return _this.formatter(type, value);
        });
        return {
          values: values
        };
      });
      return results;
    }
  },
  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  },
  methods: {
    correctValue: function correctValue(value) {
      // validate value
      var isDateType = this.type !== 'time';

      if (isDateType && !isValidDate(value)) {
        value = this.minDate;
      } else if (!value) {
        var minHour = this.minHour;
        value = (minHour > 10 ? minHour : '0' + minHour) + ":00";
      } // time type


      if (!isDateType) {
        var _value$split = value.split(':'),
            hour = _value$split[0],
            minute = _value$split[1];

        hour = utils_padZero(Object(utils["g" /* range */])(hour, this.minHour, this.maxHour));
        minute = utils_padZero(Object(utils["g" /* range */])(minute, this.minMinute, this.maxMinute));
        return hour + ":" + minute;
      } // date type


      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());
      return new Date(value);
    },
    getBoundary: function getBoundary(type, value) {
      var _ref2;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref2 = {}, _ref2[type + "Year"] = year, _ref2[type + "Month"] = month, _ref2[type + "Date"] = date, _ref2[type + "Hour"] = hour, _ref2[type + "Minute"] = minute, _ref2;
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onChange: function onChange(picker) {
      var _this2 = this;

      var value;

      if (this.type === 'time') {
        var indexes = picker.getIndexes();
        value = indexes[0] + this.minHour + ":" + (indexes[1] + this.minMinute);
      } else {
        var values = picker.getValues();
        var year = getTrueValue(values[0]);
        var month = getTrueValue(values[1]);
        var maxDate = getMonthEndDay(year, month);
        var date = getTrueValue(values[2]);

        if (this.type === 'year-month') {
          date = 1;
        }

        date = date > maxDate ? maxDate : date;
        var hour = 0;
        var minute = 0;

        if (this.type === 'datetime') {
          hour = getTrueValue(values[3]);
          minute = getTrueValue(values[4]);
        }

        value = new Date(year, month - 1, date, hour, minute);
      }

      this.innerValue = this.correctValue(value);
      this.$nextTick(function () {
        _this2.$nextTick(function () {
          _this2.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this3 = this;

      var values = [];
      var formatter = this.formatter;

      if (this.type === 'time') {
        var pair = value.split(':');
        values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      } else {
        values = [formatter('year', "" + value.getFullYear()), formatter('month', utils_padZero(value.getMonth() + 1)), formatter('day', utils_padZero(value.getDate()))];

        if (this.type === 'datetime') {
          values.push(formatter('hour', utils_padZero(value.getHours())), formatter('minute', utils_padZero(value.getMinutes())));
        }

        if (this.type === 'year-month') {
          values = values.slice(0, 2);
        }
      }

      this.$nextTick(function () {
        _this3.$refs.picker.setValues(values);
      });
    }
  },
  render: function render(h) {
    var _this4 = this;

    var props = {};
    Object.keys(mixins_picker.props).forEach(function (key) {
      props[key] = _this4[key];
    });
    return h(es_picker, {
      "class": datetime_picker_bem(),
      "ref": "picker",
      "attrs": {
        "columns": this.columns
      },
      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": function cancel() {
          _this4.$emit('cancel');
        }
      },
      "props": _extends({}, props)
    });
  }
}));
// CONCATENATED MODULE: ./es/goods-action/index.js


var goods_action_use = Object(utils["h" /* use */])('goods-action'),
    goods_action_sfc = goods_action_use[0],
    goods_action_bem = goods_action_use[1];

/* harmony default export */ var goods_action = (goods_action_sfc({
  render: function render(h) {
    return h("div", {
      "class": goods_action_bem()
    }, [this.$slots.default]);
  }
}));
// CONCATENATED MODULE: ./es/goods-action-big-btn/index.js




var goods_action_big_btn_use = Object(utils["h" /* use */])('goods-action-big-btn'),
    goods_action_big_btn_sfc = goods_action_big_btn_use[0],
    goods_action_big_btn_bem = goods_action_big_btn_use[1];

/* harmony default export */ var goods_action_big_btn = (goods_action_big_btn_sfc({
  mixins: [router_link],
  props: {
    text: String,
    primary: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  },
  render: function render(h) {
    return h(es_button, {
      "attrs": {
        "square": true,
        "size": "large",
        "loading": this.loading,
        "disabled": this.disabled,
        "type": this.primary ? 'danger' : 'warning'
      },
      "class": goods_action_big_btn_bem(),
      "on": {
        "click": this.onClick
      }
    }, [this.$slots.default || this.text]);
  }
}));
// CONCATENATED MODULE: ./es/goods-action-mini-btn/index.js




var goods_action_mini_btn_use = Object(utils["h" /* use */])('goods-action-mini-btn'),
    goods_action_mini_btn_sfc = goods_action_mini_btn_use[0],
    goods_action_mini_btn_bem = goods_action_mini_btn_use[1];

/* harmony default export */ var goods_action_mini_btn = (goods_action_mini_btn_sfc({
  mixins: [router_link],
  props: {
    text: String,
    info: [String, Number],
    icon: String,
    iconClass: String
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  },
  render: function render(h) {
    return h("div", {
      "class": [goods_action_mini_btn_bem(), 'van-hairline'],
      "on": {
        "click": this.onClick
      }
    }, [h(es_icon, {
      "class": [goods_action_mini_btn_bem('icon'), this.iconClass],
      "attrs": {
        "info": this.info,
        "name": this.icon
      }
    }), this.$slots.default || this.text]);
  }
}));
// CONCATENATED MODULE: ./es/swipe/index.js




var swipe_use = Object(utils["h" /* use */])('swipe'),
    swipe_sfc = swipe_use[0],
    swipe_bem = swipe_use[1];

/* harmony default export */ var swipe = (swipe_sfc({
  mixins: [touch],
  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    initialSwipe: Number,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  mounted: function mounted() {
    this.initialize();

    if (!this.$isServer) {
      event_on(window, 'resize', this.onResize, true);
    }
  },
  activated: function activated() {
    if (this.rendered) {
      this.initialize();
    }

    this.rendered = true;
  },
  destroyed: function destroyed() {
    this.clear();

    if (!this.$isServer) {
      off(window, 'resize', this.onResize, true);
    }
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var _ref;

      var mainAxis = this.vertical ? 'height' : 'width';
      var crossAxis = this.vertical ? 'width' : 'height';
      return _ref = {}, _ref[mainAxis] = this.trackSize + "px", _ref[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    }
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        event.preventDefault();
        event.stopPropagation();
        this.move(0, Math.min(Math.max(this.delta, -this.size), this.size));
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move(offset > 0 ? this.delta > 0 ? -1 : 1 : 0);
      }

      this.swiping = false;
      this.autoPlay();
    },
    move: function move(_move, offset) {
      if (_move === void 0) {
        _move = 0;
      }

      if (offset === void 0) {
        offset = 0;
      }

      var delta = this.delta,
          active = this.active,
          count = this.count,
          swipes = this.swipes,
          trackSize = this.trackSize;
      var atFirst = active === 0;
      var atLast = active === count - 1;
      var outOfBounds = !this.loop && (atFirst && (offset > 0 || _move < 0) || atLast && (offset < 0 || _move > 0));

      if (outOfBounds || count <= 1) {
        return;
      }

      if (swipes[0]) {
        swipes[0].offset = atLast && (delta < 0 || _move > 0) ? trackSize : 0;
      }

      if (swipes[count - 1]) {
        swipes[count - 1].offset = atFirst && (delta > 0 || _move < 0) ? -trackSize : 0;
      }

      if (_move && active + _move >= -1 && active + _move <= count) {
        this.active += _move;
      }

      this.offset = offset - this.active * this.size;
    },
    swipeTo: function swipeTo(index) {
      var _this = this;

      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();
      setTimeout(function () {
        _this.swiping = false;

        _this.move(index % _this.count - _this.active);
      }, 30);
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move(this.count);
      }

      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          setTimeout(function () {
            _this2.swiping = false;

            _this2.move(1);

            _this2.autoPlay();
          }, 30);
        }, autoplay);
      }
    },
    onTransitionend: function onTransitionend(event) {
      event.stopPropagation();
      this.$emit('change', this.activeIndicator);
    }
  },
  render: function render(h) {
    var _this3 = this;

    var count = this.count,
        activeIndicator = this.activeIndicator;
    var Indicator = this.$slots.indicator || this.showIndicators && count > 1 && h("div", {
      "class": swipe_bem('indicators', {
        vertical: this.vertical
      }),
      "on": {
        "transitionend": stop
      }
    }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
      return h("i", {
        "class": swipe_bem('indicator', {
          active: index === activeIndicator
        }),
        "style": index === activeIndicator ? _this3.indicatorStyle : null
      });
    })]);
    return h("div", {
      "class": swipe_bem()
    }, [h("div", {
      "style": this.trackStyle,
      "class": swipe_bem('track'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd,
        "transitionend": this.onTransitionend
      }
    }, [this.$slots.default]), Indicator]);
  }
}));
// CONCATENATED MODULE: ./es/swipe-item/index.js

/* harmony default export */ var swipe_item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b(),
      style: _vm.style
    }, [_vm._t("default")], 2);
  },
  name: 'swipe-item',
  data: function data() {
    return {
      offset: 0
    };
  },
  computed: {
    style: function style() {
      var _this$$parent = this.$parent,
          vertical = _this$$parent.vertical,
          computedWidth = _this$$parent.computedWidth,
          computedHeight = _this$$parent.computedHeight;
      return {
        width: computedWidth + 'px',
        height: vertical ? computedHeight + 'px' : '100%',
        transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
      };
    }
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
}));
// CONCATENATED MODULE: ./es/image-preview/ImagePreview.js








var ImagePreview_use = Object(utils["h" /* use */])('image-preview'),
    ImagePreview_sfc = ImagePreview_use[0],
    ImagePreview_bem = ImagePreview_use[1];

var MAX_ZOOM = 3;
var MIN_ZOOM = 1 / 3;

function getDistance(touches) {
  return Math.sqrt(Math.abs((touches[0].clientX - touches[1].clientX) * (touches[0].clientY - touches[1].clientY)));
}

/* harmony default export */ var image_preview_ImagePreview = (ImagePreview_sfc({
  mixins: [popup, touch],
  props: {
    images: Array,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    startPosition: Number,
    showIndicators: Boolean,
    className: [String, Object, Array],
    loop: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    overlayClass: {
      type: String,
      default: 'van-image-preview__overlay'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0
    };
  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transition: this.zooming || this.moving ? '' : '.3s all'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    value: function value() {
      this.active = this.startPosition;
    },
    startPosition: function startPosition(active) {
      this.active = active;
    }
  },
  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      event.preventDefault();
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
          _ref$offsetX = _ref.offsetX,
          offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
          _ref$offsetY = _ref.offsetY,
          offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        var index = this.active;
        this.resetScale();
        this.$emit('close', {
          index: index,
          url: this.images[index]
        });

        if (!this.asyncClose) {
          this.$emit('input', false);
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onTouchStart: function onTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
          _ref2$offsetX = _ref2.offsetX,
          offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */
      else if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onTouchMove: function onTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = Object(utils["g" /* range */])(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = Object(utils["g" /* range */])(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = Object(utils["g" /* range */])(scale, MIN_ZOOM, MAX_ZOOM);
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    },
    onChange: function onChange(active) {
      this.resetScale();
      this.active = active;
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    }
  },
  render: function render(h) {
    var _this = this;

    if (!this.value) {
      return;
    }

    var active = this.active,
        images = this.images;
    var Index = this.showIndex && h("div", {
      "class": ImagePreview_bem('index')
    }, [active + 1 + "/" + images.length]);
    var Images = h(swipe, {
      "ref": "swipe",
      "attrs": {
        "loop": this.loop,
        "indicator-color": "white",
        "initial-swipe": this.startPosition,
        "show-indicators": this.showIndicators
      },
      "on": {
        "change": this.onChange
      }
    }, [images.map(function (image, index) {
      var props = {
        class: ImagePreview_bem('image'),
        style: index === active ? _this.imageStyle : null,
        on: {
          touchstart: _this.onTouchStart,
          touchmove: _this.onTouchMove,
          touchend: _this.onTouchEnd,
          touchcancel: _this.onTouchEnd
        }
      };
      return h(swipe_item, [_this.lazyLoad ? h("img", helper_default()([{
        "directives": [{
          name: "lazy",
          value: image
        }]
      }, props])) : h("img", helper_default()([{
        "attrs": {
          "src": image
        }
      }, props]))]);
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "class": [ImagePreview_bem(), this.className],
      "on": {
        "touchstart": this.onWrapperTouchStart,
        "touchend": this.onWrapperTouchEnd,
        "touchcancel": this.onWrapperTouchEnd
      }
    }, [Index, Images])]);
  }
}));
// CONCATENATED MODULE: ./es/image-preview/index.js




var image_preview_instance;
var image_preview_defaultConfig = {
  images: [],
  loop: true,
  value: true,
  className: '',
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false
};

var image_preview_initInstance = function initInstance() {
  image_preview_instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(image_preview_ImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(image_preview_instance.$el);
};

var es_image_preview_ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }
  /* istanbul ignore if */


  if (utils["f" /* isServer */]) {
    return;
  }

  if (!image_preview_instance) {
    image_preview_initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;

  _extends(image_preview_instance, image_preview_defaultConfig, options);

  image_preview_instance.$once('input', function (show) {
    image_preview_instance.value = show;
  });

  if (options.onClose) {
    image_preview_instance.$once('close', options.onClose);
  }

  return image_preview_instance;
};

es_image_preview_ImagePreview.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(image_preview_ImagePreview);
};

/* harmony default export */ var image_preview = (es_image_preview_ImagePreview);
// EXTERNAL MODULE: ./node_modules/vue-lazyload/vue-lazyload.js
var vue_lazyload = __webpack_require__(8);
var vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(vue_lazyload);

// CONCATENATED MODULE: ./es/lazyload/index.js

/* harmony default export */ var lazyload = (vue_lazyload_default.a);
// CONCATENATED MODULE: ./es/list/index.js





var list_use = Object(utils["h" /* use */])('list'),
    list_sfc = list_use[0],
    list_bem = list_use[1],
    list_t = list_use[2];

/* harmony default export */ var es_list = (list_sfc({
  model: {
    prop: 'loading'
  },
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    }
  },
  mounted: function mounted() {
    this.scroller = utils_scroll.getScrollEventTarget(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },
  watch: {
    loading: function loading() {
      this.$nextTick(this.check);
    },
    finished: function finished() {
      this.$nextTick(this.check);
    }
  },
  methods: {
    check: function check() {
      if (this.loading || this.finished || this.error) {
        return;
      }

      var el = this.$el;
      var scroller = this.scroller;
      var scrollerHeight = utils_scroll.getVisibleHeight(scroller);
      /* istanbul ignore next */

      if (!scrollerHeight || utils_scroll.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return;
      }

      var scrollTop = utils_scroll.getScrollTop(scroller);
      var targetBottom = scrollTop + scrollerHeight;
      var reachBottom = false;
      /* istanbul ignore next */

      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        var elBottom = utils_scroll.getElementTop(el) - utils_scroll.getElementTop(scroller) + utils_scroll.getVisibleHeight(el);
        reachBottom = elBottom - scrollerHeight < this.offset;
      }
      /* istanbul ignore else */


      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    clickErrorText: function clickErrorText() {
      this.$emit('update:error', false);
      this.$nextTick(this.check);
    },
    handler: function handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? event_on : off)(this.scroller, 'scroll', this.check);
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": list_bem()
    }, [this.$slots.default, this.loading && h("div", {
      "class": list_bem('loading')
    }, [this.$slots.loading || [h(loading, {
      "class": list_bem('loading-icon')
    }), h("span", {
      "class": list_bem('loading-text')
    }, [this.loadingText || list_t('loading')])]]), this.finished && this.finishedText && h("div", {
      "class": list_bem('finished-text')
    }, [this.finishedText]), this.error && this.errorText && h("div", {
      "on": {
        "click": this.clickErrorText
      },
      "class": list_bem('error-text')
    }, [this.errorText])]);
  }
}));
// EXTERNAL MODULE: ./es/locale/index.js + 1 modules
var locale = __webpack_require__(3);

// CONCATENATED MODULE: ./es/nav-bar/index.js



var nav_bar_use = Object(utils["h" /* use */])('nav-bar'),
    nav_bar_sfc = nav_bar_use[0],
    nav_bar_bem = nav_bar_use[1];

/* harmony default export */ var nav_bar = (nav_bar_sfc({
  props: {
    title: String,
    fixed: Boolean,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  render: function render(h) {
    var _this = this;

    return h("div", {
      "class": [nav_bar_bem({
        fixed: this.fixed
      }), {
        'van-hairline--bottom': this.border
      }],
      "style": {
        zIndex: this.zIndex
      }
    }, [h("div", {
      "class": nav_bar_bem('left'),
      "on": {
        "click": function click() {
          _this.$emit('click-left');
        }
      }
    }, [this.$slots.left || [this.leftArrow && h(es_icon, {
      "class": nav_bar_bem('arrow'),
      "attrs": {
        "name": "arrow-left"
      }
    }), this.leftText && h("span", {
      "class": nav_bar_bem('text')
    }, [this.leftText])]]), h("div", {
      "class": [nav_bar_bem('title'), 'van-ellipsis']
    }, [this.$slots.title || this.title]), h("div", {
      "class": nav_bar_bem('right'),
      "on": {
        "click": function click() {
          _this.$emit('click-right');
        }
      }
    }, [this.$slots.right || this.rightText && h("span", {
      "class": nav_bar_bem('text')
    }, [this.rightText])])]);
  }
}));
// CONCATENATED MODULE: ./es/notice-bar/index.js



var notice_bar_use = Object(utils["h" /* use */])('notice-bar'),
    notice_bar_sfc = notice_bar_use[0],
    notice_bar_bem = notice_bar_use[1];

/* harmony default export */ var notice_bar = (notice_bar_sfc({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    background: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
              wrap = _this$$refs.wrap,
              content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = notice_bar_bem('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon() {
      this.showNoticeBar = this.mode !== 'closeable';
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = notice_bar_bem('play--infinite');
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var mode = this.mode;
    var iconName = mode === 'closeable' ? 'cross' : mode === 'link' ? 'arrow' : '';
    var barStyle = {
      color: this.color,
      background: this.background
    };
    var contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's'
    };
    return h("div", {
      "directives": [{
        name: "show",
        value: this.showNoticeBar
      }],
      "class": notice_bar_bem({
        withicon: mode
      }),
      "style": barStyle,
      "on": {
        "click": function click() {
          _this3.$emit('click');
        }
      }
    }, [this.leftIcon && h(es_icon, {
      "class": notice_bar_bem('left-icon'),
      "attrs": {
        "name": this.leftIcon
      }
    }), h("div", {
      "ref": "wrap",
      "class": notice_bar_bem('wrap')
    }, [h("div", {
      "ref": "content",
      "class": [notice_bar_bem('content'), this.animationClass, {
        'van-ellipsis': !this.scrollable
      }],
      "style": contentStyle,
      "on": {
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [this.$slots.default || this.text])]), iconName && h(es_icon, {
      "class": notice_bar_bem('right-icon'),
      "attrs": {
        "name": iconName
      },
      "on": {
        "click": this.onClickIcon
      }
    })]);
  }
}));
// CONCATENATED MODULE: ./es/notify/Notify.js




var Notify_use = Object(utils["h" /* use */])('notify'),
    Notify_sfc = Notify_use[0],
    Notify_bem = Notify_use[1];

/* harmony default export */ var notify_Notify = (Notify_sfc({
  mixins: [popup],
  props: {
    message: [String, Number],
    color: {
      type: String,
      value: WHITE
    },
    background: {
      type: String,
      value: RED
    },
    duration: {
      type: Number,
      value: 3000
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  render: function render(h) {
    var style = {
      color: this.color,
      background: this.background
    };
    return h("transition", {
      "attrs": {
        "name": "van-slide-down"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": Notify_bem(),
      "style": style
    }, [this.message])]);
  }
}));
// CONCATENATED MODULE: ./es/notify/index.js





var timer;
var notify_instance;

var notify_initInstance = function initInstance() {
  notify_instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(notify_Notify))({
    el: document.createElement('div')
  });
  document.body.appendChild(notify_instance.$el);
};

var notify_parseOptions = function parseOptions(message) {
  return Object(utils["e" /* isObj */])(message) ? message : {
    message: message
  };
};

var es_notify_Notify = function Notify(options) {
  /* istanbul ignore if */
  if (utils["f" /* isServer */]) {
    return;
  }

  if (!notify_instance) {
    notify_initInstance();
  }

  options = _extends({}, Notify.currentOptions, notify_parseOptions(options));

  _extends(notify_instance, options);

  clearTimeout(timer);

  if (options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return notify_instance;
};

es_notify_Notify.clear = function () {
  if (notify_instance) {
    notify_instance.value = false;
  }
};

es_notify_Notify.defaultOptions = {
  value: true,
  text: '',
  color: WHITE,
  background: RED,
  duration: 3000
};

es_notify_Notify.setDefaultOptions = function (options) {
  _extends(es_notify_Notify.currentOptions, options);
};

es_notify_Notify.resetDefaultOptions = function () {
  es_notify_Notify.currentOptions = _extends({}, es_notify_Notify.defaultOptions);
};

es_notify_Notify.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(notify_Notify);
};

es_notify_Notify.resetDefaultOptions();
external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$notify = es_notify_Notify;
/* harmony default export */ var notify = (es_notify_Notify);
// CONCATENATED MODULE: ./es/number-keyboard/Key.js


var Key_use = Object(utils["h" /* use */])('key'),
    Key_sfc = Key_use[0],
    Key_bem = Key_use[1];

/* harmony default export */ var Key = (Key_sfc({
  props: {
    type: Array,
    text: [String, Number]
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var types = this.type.slice(0);
      this.active && types.push('active');
      return Key_bem(types);
    }
  },
  methods: {
    onFocus: function onFocus() {
      this.active = true;
      this.$emit('press', this.text);
    },
    onBlur: function onBlur(event) {
      event.preventDefault();
      event.stopPropagation();
      this.active = false;
    }
  },
  render: function render(h) {
    var onBlur = this.onBlur;
    return h("i", {
      "class": ['van-hairline', this.className],
      "on": {
        "touchstart": this.onFocus,
        "touchmove": onBlur,
        "touchend": onBlur,
        "touchcancel": onBlur
      }
    }, [this.text]);
  }
}));
// CONCATENATED MODULE: ./es/number-keyboard/index.js




var number_keyboard_use = Object(utils["h" /* use */])('number-keyboard'),
    number_keyboard_sfc = number_keyboard_use[0],
    number_keyboard_bem = number_keyboard_use[1],
    number_keyboard_t = number_keyboard_use[2];

var CLOSE_KEY_TYPE = ['blue', 'big'];
var DELETE_KEY_TYPE = ['delete', 'big', 'gray'];
/* harmony default export */ var number_keyboard = (number_keyboard_sfc({
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    extraKey: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted() {
    this.handler(true);
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },
  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            type: ['gray']
          }, {
            text: 0
          }, {
            text: this.deleteText,
            type: ['gray', 'delete']
          });
          break;

        case 'custom':
          keys.push({
            text: 0,
            type: ['middle']
          }, {
            text: this.extraKey
          });
          break;
      }

      return keys;
    },
    deleteText: function deleteText() {
      return this.deleteButtonText || number_keyboard_t('delete');
    }
  },
  methods: {
    handler: function handler(action) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action;
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.onBlur);
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPress: function onPress(text) {
      if (text === '') {
        return;
      }

      if (text === this.deleteText) {
        this.$emit('delete');
      } else if (text === this.closeButtonText) {
        this.onClose();
      } else {
        this.$emit('input', text);
      }
    }
  },
  render: function render(h) {
    var theme = this.theme,
        onPress = this.onPress,
        closeButtonText = this.closeButtonText;
    var showTitleClose = closeButtonText && theme === 'default';
    return h("transition", {
      "attrs": {
        "name": this.transition ? 'van-slide-up' : ''
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "style": {
        zIndex: this.zIndex
      },
      "class": number_keyboard_bem([theme]),
      "on": {
        "touchstart": stop,
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [(this.title || showTitleClose) && h("div", {
      "class": [number_keyboard_bem('title'), 'van-hairline--top']
    }, [h("span", [this.title]), showTitleClose && h("span", {
      "class": number_keyboard_bem('close'),
      "on": {
        "click": this.onClose
      }
    }, [closeButtonText])]), h("div", {
      "class": number_keyboard_bem('body')
    }, [this.keys.map(function (key) {
      return h(Key, {
        "key": key.text,
        "attrs": {
          "text": key.text,
          "type": key.type
        },
        "on": {
          "press": onPress
        }
      });
    })]), theme === 'custom' && h("div", {
      "class": number_keyboard_bem('sidebar')
    }, [h(Key, {
      "attrs": {
        "text": this.deleteText,
        "type": DELETE_KEY_TYPE
      },
      "on": {
        "press": onPress
      }
    }), h(Key, {
      "attrs": {
        "text": closeButtonText,
        "type": CLOSE_KEY_TYPE
      },
      "on": {
        "press": onPress
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./es/pagination/index.js


var pagination_use = Object(utils["h" /* use */])('pagination'),
    pagination_sfc = pagination_use[0],
    pagination_bem = pagination_use[1],
    pagination_t = pagination_use[2];

function makePage(number, text, active) {
  return {
    number: number,
    text: text,
    active: active
  };
}

/* harmony default export */ var pagination = (pagination_sfc({
  props: {
    value: Number,
    prevText: String,
    nextText: String,
    pageCount: Number,
    totalItems: Number,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    }
  },
  computed: {
    count: function count() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.count;

      if (this.mode !== 'multi') {
        return pages;
      } // Default page limits


      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },
  watch: {
    value: {
      handler: function handler(page) {
        this.select(page || this.value);
      },
      immediate: true
    }
  },
  methods: {
    select: function select(page) {
      page = Math.min(this.count, Math.max(1, page));

      if (this.value !== page) {
        this.$emit('input', page);
        this.$emit('change', page);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var value = this.value;
    var simple = this.mode !== 'multi';

    var onSelect = function onSelect(value) {
      return function () {
        _this.select(value);
      };
    };

    return h("ul", {
      "class": pagination_bem({
        simple: simple
      })
    }, [h("li", {
      "class": [pagination_bem('item', {
        disabled: value === 1
      }), pagination_bem('prev'), 'van-hairline'],
      "on": {
        "click": onSelect(value - 1)
      }
    }, [this.prevText || pagination_t('prev')]), this.pages.map(function (page) {
      return h("li", {
        "class": [pagination_bem('item', {
          active: page.active
        }), pagination_bem('page'), 'van-hairline'],
        "on": {
          "click": onSelect(page.number)
        }
      }, [page.text]);
    }), simple && h("li", {
      "class": pagination_bem('page-desc')
    }, [this.$slots.pageDesc || value + "/" + this.count]), h("li", {
      "class": [pagination_bem('item', {
        disabled: value === this.count
      }), pagination_bem('next'), 'van-hairline'],
      "on": {
        "click": onSelect(value + 1)
      }
    }, [this.nextText || pagination_t('next')])]);
  }
}));
// CONCATENATED MODULE: ./es/panel/index.js




var panel_use = Object(utils["h" /* use */])('panel'),
    panel_sfc = panel_use[0],
    panel_bem = panel_use[1];

/* harmony default export */ var panel = (panel_sfc({
  props: {
    icon: String,
    desc: String,
    title: String,
    status: String
  },
  render: function render(h) {
    var slots = this.$slots;
    return h(cell_group, {
      "class": panel_bem()
    }, [slots.header || h(es_cell, {
      "class": panel_bem('header'),
      "attrs": {
        "icon": this.icon,
        "label": this.desc,
        "title": this.title,
        "value": this.status
      }
    }), h("div", {
      "class": panel_bem('content')
    }, [slots.default]), slots.footer && h("div", {
      "class": [panel_bem('footer'), 'van-hairline--top']
    }, [slots.footer])]);
  }
}));
// CONCATENATED MODULE: ./es/password-input/index.js


var password_input_use = Object(utils["h" /* use */])('password-input'),
    password_input_sfc = password_input_use[0],
    password_input_bem = password_input_use[1];

/* harmony default export */ var password_input = (password_input_sfc({
  props: {
    info: String,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    }
  },
  computed: {
    points: function points() {
      var arr = [];

      for (var i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }

      return arr;
    }
  },
  render: function render(h) {
    var _this = this;

    var info = this.errorInfo || this.info;
    return h("div", {
      "class": password_input_bem()
    }, [h("ul", {
      "class": [password_input_bem('security'), 'van-hairline--surround'],
      "on": {
        "touchstart": function touchstart(event) {
          event.stopPropagation();

          _this.$emit('focus');
        }
      }
    }, [this.points.map(function (visibility) {
      return h("li", {
        "class": "van-hairline"
      }, [h("i", {
        "style": {
          visibility: visibility
        }
      })]);
    })]), info && h("div", {
      "class": password_input_bem(this.errorInfo ? 'error-info' : 'info')
    }, [info])]);
  }
}));
// CONCATENATED MODULE: ./es/progress/index.js



var progress_use = Object(utils["h" /* use */])('progress'),
    progress_sfc = progress_use[0],
    progress_bem = progress_use[1];

/* harmony default export */ var es_progress = (progress_sfc({
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: BLUE
    },
    textColor: {
      type: String,
      default: WHITE
    }
  },
  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },
  mounted: function mounted() {
    this.getWidth();
  },
  watch: {
    showPivot: function showPivot() {
      this.getWidth();
    },
    pivotText: function pivotText() {
      this.getWidth();
    }
  },
  methods: {
    getWidth: function getWidth() {
      this.progressWidth = this.$el.offsetWidth;
      this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0;
    }
  },
  render: function render(h) {
    var pivotText = this.pivotText,
        percentage = this.percentage;
    var text = Object(utils["d" /* isDef */])(pivotText) ? pivotText : percentage + '%';
    var showPivot = this.showPivot && text;
    var background = this.inactive ? '#cacaca' : this.color;
    var pivotStyle = {
      color: this.textColor,
      background: this.pivotColor || background
    };
    var portionStyle = {
      background: background,
      width: (this.progressWidth - this.pivotWidth) * percentage / 100 + 'px'
    };
    return h("div", {
      "class": progress_bem()
    }, [h("span", {
      "class": progress_bem('portion', {
        'with-pivot': showPivot
      }),
      "style": portionStyle
    }, [showPivot && h("span", {
      "ref": "pivot",
      "style": pivotStyle,
      "class": progress_bem('pivot')
    }, [text])])]);
  }
}));
// CONCATENATED MODULE: ./es/pull-refresh/index.js





var pull_refresh_use = Object(utils["h" /* use */])('pull-refresh'),
    pull_refresh_sfc = pull_refresh_use[0],
    pull_refresh_bem = pull_refresh_use[1],
    pull_refresh_t = pull_refresh_use[2];

/* harmony default export */ var pull_refresh = (pull_refresh_sfc({
  mixins: [touch],
  props: {
    disabled: Boolean,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    };
  },
  computed: {
    untouchable: function untouchable() {
      return this.status === 'loading' || this.disabled;
    }
  },
  watch: {
    value: function value(val) {
      this.duration = this.animationDuration;
      this.getStatus(val ? this.headHeight : 0, val);
    }
  },
  mounted: function mounted() {
    this.scrollEl = utils_scroll.getScrollEventTarget(this.$el);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.getStatus(this.ease(this.deltaY));
          event.cancelable && event.preventDefault();
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.getStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.getStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = utils_scroll.getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(height) {
      var headHeight = this.headHeight;
      return height < headHeight ? height : height < headHeight * 2 ? Math.round(headHeight + (height - headHeight) / 2) : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
    },
    getStatus: function getStatus(height, isLoading) {
      this.height = height;
      var status = isLoading ? 'loading' : height === 0 ? 'normal' : height < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  },
  render: function render(h) {
    var status = this.status;
    var text = this[status + "Text"] || pull_refresh_t(status);
    var style = {
      transition: this.duration + "ms",
      transform: "translate3d(0," + this.height + "px, 0)"
    };
    var Status = this.$slots[status] || [(status === 'pulling' || status === 'loosing') && h("div", {
      "class": pull_refresh_bem('text')
    }, [text]), status === 'loading' && h("div", {
      "class": pull_refresh_bem('loading')
    }, [h(loading), h("span", [text])])];
    return h("div", {
      "class": pull_refresh_bem()
    }, [h("div", {
      "class": pull_refresh_bem('track'),
      "style": style,
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("div", {
      "class": pull_refresh_bem('head')
    }, [Status]), this.$slots.default])]);
  }
}));
// CONCATENATED MODULE: ./es/rate/index.js
/* eslint-disable prefer-spread */



var rate_use = Object(utils["h" /* use */])('rate'),
    rate_sfc = rate_use[0],
    rate_bem = rate_use[1];

/* harmony default export */ var es_rate = (rate_sfc({
  props: {
    value: Number,
    readonly: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      default: 20
    },
    icon: {
      type: String,
      default: 'star'
    },
    voidIcon: {
      type: String,
      default: 'star-o'
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    }
  },
  computed: {
    list: function list() {
      var _this = this;

      return Array.apply(null, {
        length: this.count
      }).map(function (value, index) {
        return index < _this.value;
      });
    }
  },
  methods: {
    onSelect: function onSelect(index) {
      if (!this.disabled && !this.readonly) {
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (!document.elementFromPoint) {
        return;
      }

      event.preventDefault();
      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      var target = document.elementFromPoint(clientX, clientY);

      if (target && target.dataset) {
        var index = target.dataset.index;
        /* istanbul ignore else */

        if (index) {
          this.onSelect(+index);
        }
      }
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h("div", {
      "class": rate_bem(),
      "on": {
        "touchmove": this.onTouchMove
      }
    }, [this.list.map(function (full, index) {
      return h(es_icon, {
        "key": index,
        "class": rate_bem('item'),
        "attrs": {
          "size": _this2.size + "px",
          "data-index": index,
          "name": full ? _this2.icon : _this2.voidIcon,
          "color": _this2.disabled ? _this2.disabledColor : full ? _this2.color : _this2.voidColor
        },
        "on": {
          "click": function click() {
            _this2.onSelect(index);
          }
        }
      });
    })]);
  }
}));
// CONCATENATED MODULE: ./es/row/index.js


var row_use = Object(utils["h" /* use */])('row'),
    row_sfc = row_use[0],
    row_bem = row_use[1];

/* harmony default export */ var row = (row_sfc({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  render: function render(h) {
    var _bem;

    var align = this.align,
        justify = this.justify;
    var flex = this.type === 'flex';
    var margin = "-" + Number(this.gutter) / 2 + "px";
    var style = this.gutter ? {
      marginLeft: margin,
      marginRight: margin
    } : {};
    return h(this.tag, {
      "style": style,
      "class": row_bem((_bem = {
        flex: flex
      }, _bem["align-" + align] = flex && align, _bem["justify-" + justify] = flex && justify, _bem))
    }, [this.$slots.default]);
  }
}));
// CONCATENATED MODULE: ./es/search/index.js





var search_use = Object(utils["h" /* use */])('search'),
    search_sfc = search_use[0],
    search_bem = search_use[1],
    search_t = search_use[2];

/* harmony default export */ var search = (search_sfc({
  inheritAttrs: false,
  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },
  computed: {
    listeners: function listeners() {
      return _extends({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress
      });
    }
  },
  methods: {
    onInput: function onInput(value) {
      this.$emit('input', value);
    },
    onKeypress: function onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }

      this.$emit('keypress', event);
    },
    onBack: function onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  },
  render: function render(h) {
    var showAction = this.showAction;
    var props = {
      attrs: this.$attrs,
      on: this.listeners
    };
    return h("div", {
      "class": search_bem({
        'show-action': showAction
      }),
      "style": {
        background: this.background
      }
    }, [h(field, helper_default()([{
      "attrs": {
        "clearable": true,
        "type": "search",
        "value": this.value,
        "border": false,
        "leftIcon": "search"
      }
    }, props]), [h('template', {
      slot: 'left-icon'
    }, this.$slots['left-icon'])]), showAction && h("div", {
      "class": search_bem('action')
    }, [this.$slots.action || h("div", {
      "on": {
        "click": this.onBack
      }
    }, [search_t('cancel')])])]);
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuHeader.js

/* harmony default export */ var SkuHeader = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--bottom",
      class: _vm.b()
    }, [_c('div', {
      class: _vm.b('img-wrap'),
      on: {
        "click": _vm.previewImage
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.goodsImg
      }
    })]), _c('div', {
      class: _vm.b('goods-info')
    }, [_c('div', {
      staticClass: "van-sku__goods-name van-ellipsis",
      domProps: {
        "textContent": _vm._s(_vm.goods.title)
      }
    }), _vm._t("default"), _c('icon', {
      staticClass: "van-sku__close-icon",
      attrs: {
        "name": "close"
      },
      on: {
        "click": function click($event) {
          _vm.skuEventBus.$emit('sku:close');
        }
      }
    })], 2)]);
  },
  name: 'sku-header',
  props: {
    sku: Object,
    goods: Object,
    skuEventBus: Object,
    selectedSku: Object
  },
  computed: {
    goodsImg: function goodsImg() {
      var s1Id = this.selectedSku.s1;
      var skuImg = this.getSkuImg(s1Id); // 优先使用选中sku的图片

      return skuImg || this.goods.picture;
    }
  },
  methods: {
    getSkuImg: function getSkuImg(id) {
      if (!id) return; // 目前skuImg都挂载在skuTree中s1那类sku上

      var treeItem = this.sku.tree.filter(function (item) {
        return item.k_s === 's1';
      })[0] || {};
      if (!treeItem.v) return;
      var matchedSku = treeItem.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0];
      if (matchedSku) return matchedSku.imgUrl || matchedSku.img_url;
    },
    previewImage: function previewImage() {
      this.skuEventBus.$emit('sku:previewImage', this.goodsImg);
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuRow.js

/* harmony default export */ var SkuRow = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('div', {
      class: _vm.b('title')
    }, [_vm._v(_vm._s(_vm.skuRow.k) + "：")]), _vm._t("default")], 2);
  },
  name: 'sku-row',
  props: {
    skuRow: Object
  }
}));
// CONCATENATED MODULE: ./es/sku/constants.js
var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};
var UNSELECTED_SKU_VALUE_ID = '';
/* harmony default export */ var constants = ({
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID
});
// CONCATENATED MODULE: ./es/sku/utils/skuHelper.js


/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */

var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
}; // 判断是否所有的sku都已经选中

var skuHelper_isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = Object.keys(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== UNSELECTED_SKU_VALUE_ID;
  });
  return skuTree.length === selected.length;
}; // 根据已选择的 sku 获取 skuComb

var getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (item) {
    return Object.keys(selectedSku).every(function (skuKeyStr) {
      return String(item[skuKeyStr]) === String(selectedSku[skuKeyStr]);
    });
  });
  return skuComb[0];
}; // 获取已选择的sku名称

var skuHelper_getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== UNSELECTED_SKU_VALUE_ID) {
      var skuValue = skuValues.filter(function (value) {
        return value.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }

    return selectedValues;
  }, []);
}; // 判断sku是否可选

var skuHelper_isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _extends2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId; // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = _extends({}, selectedSku, (_extends2 = {}, _extends2[key] = valueId, _extends2)); // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中


  var skusToCheck = Object.keys(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== UNSELECTED_SKU_VALUE_ID;
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });
  var stock = filteredSku.reduce(function (total, sku) {
    total += sku.stock_num;
    return total;
  }, 0);
  return stock > 0;
};
/* harmony default export */ var skuHelper = ({
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: getSkuComb,
  getSelectedSkuValues: skuHelper_getSelectedSkuValues,
  isAllSelected: skuHelper_isAllSelected,
  isSkuChoosable: skuHelper_isSkuChoosable
});
// CONCATENATED MODULE: ./es/sku/components/SkuRowItem.js



/* harmony default export */ var SkuRowItem = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('span', {
      staticClass: "van-sku-row__item",
      class: {
        'van-sku-row__item--active': _vm.isChoosed,
        'van-sku-row__item--disabled': !_vm.isChoosable
      },
      domProps: {
        "textContent": _vm._s(_vm.skuValue.name)
      },
      on: {
        "click": _vm.onSelect
      }
    });
  },
  name: 'sku-row-item',
  props: {
    skuEventBus: Object,
    skuValue: Object,
    skuList: Array,
    selectedSku: Object,
    skuKeyStr: String
  },
  computed: {
    isChoosed: function isChoosed() {
      return this.skuValue.id === this.selectedSku[this.skuKeyStr];
    },
    isChoosable: function isChoosable() {
      return skuHelper_isSkuChoosable(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },
  methods: {
    onSelect: function onSelect() {
      if (this.isChoosable) {
        this.skuEventBus.$emit('sku:select', _extends({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/stepper/index.js


var stepper_use = Object(utils["h" /* use */])('stepper'),
    stepper_sfc = stepper_use[0],
    stepper_bem = stepper_use[1];

/* harmony default export */ var stepper = (stepper_sfc({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    asyncChange: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },
  data: function data() {
    var value = this.range(Object(utils["d" /* isDef */])(this.value) ? this.value : this.defaultValue);

    if (value !== +this.value) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    }
  },
  watch: {
    value: function value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },
  methods: {
    // filter illegal characters
    format: function format(value) {
      value = String(value).replace(/[^0-9.-]/g, '');
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value;
    },
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min);
    },
    onInput: function onInput(event) {
      var value = event.target.value;
      var formatted = this.format(value);

      if (!this.asyncChange) {
        if (+value !== formatted) {
          event.target.value = formatted;
        }

        this.currentValue = formatted;
      } else {
        event.target.value = this.currentValue;
        this.$emit('input', formatted);
        this.$emit('change', formatted);
      }
    },
    onChange: function onChange(type) {
      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = Math.round((this.currentValue + diff) * 100) / 100;

      if (!this.asyncChange) {
        this.currentValue = this.range(value);
      } else {
        this.$emit('input', value);
        this.$emit('change', value);
      }

      this.$emit(type);
    },
    onBlur: function onBlur(event) {
      this.currentValue = this.range(this.currentValue);
      this.$emit('blur', event); // fix edge case when input is empty and min is 0

      if (this.currentValue === 0) {
        event.target.value = this.currentValue;
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var onChange = function onChange(type) {
      return function () {
        _this.onChange(type);
      };
    };

    return h("div", {
      "class": stepper_bem()
    }, [h("button", {
      "class": stepper_bem('minus', {
        disabled: this.minusDisabled
      }),
      "on": {
        "click": onChange('minus')
      }
    }), h("input", {
      "attrs": {
        "type": "number",
        "disabled": this.disabled || this.disableInput
      },
      "class": stepper_bem('input'),
      "domProps": {
        "value": this.currentValue
      },
      "on": {
        "input": this.onInput,
        "blur": this.onBlur
      }
    }), h("button", {
      "class": stepper_bem('plus', {
        disabled: this.plusDisabled
      }),
      "on": {
        "click": onChange('plus')
      }
    })]);
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuStepper.js



var QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT,
    STOCK_LIMIT = LIMIT_TYPE.STOCK_LIMIT;
/* harmony default export */ var SkuStepper = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-sku-stepper-stock"
    }, [_c('div', {
      staticClass: "van-sku-stepper-container"
    }, [_c('div', {
      staticClass: "van-sku__stepper-title"
    }, [_vm._v(_vm._s(_vm.stepperTitle || '购买数量') + "：")]), _c('stepper', {
      staticClass: "van-sku__stepper",
      attrs: {
        "min": 1,
        "max": _vm.stepperLimit,
        "disable-input": _vm.disableStepperInput
      },
      on: {
        "overlimit": _vm.onOverLimit,
        "change": _vm.onChange
      },
      model: {
        value: _vm.currentNum,
        callback: function callback($$v) {
          _vm.currentNum = $$v;
        },
        expression: "currentNum"
      }
    })], 1), !_vm.hideStock ? _c('div', {
      staticClass: "van-sku__stock",
      domProps: {
        "textContent": _vm._s(_vm.stockText)
      }
    }) : _vm._e(), !_vm.hideQuotaText && _vm.quotaText ? _c('div', {
      staticClass: "van-sku__quota",
      domProps: {
        "textContent": _vm._s(_vm.quotaText)
      }
    }) : _vm._e()]);
  },
  name: 'sku-stepper',
  components: {
    Stepper: stepper
  },
  props: {
    quota: Number,
    hideQuotaText: Boolean,
    quotaUsed: Number,
    hideStock: Boolean,
    skuEventBus: Object,
    skuStockNum: Number,
    selectedSku: Object,
    selectedSkuComb: Object,
    selectedNum: Number,
    stepperTitle: String,
    disableStepperInput: Boolean,
    customStepperConfig: Object
  },
  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },
  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },
  computed: {
    stock: function stock() {
      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }

      return this.skuStockNum;
    },
    stockText: function stockText() {
      var stockFormatter = this.customStepperConfig.stockFormatter;
      if (stockFormatter) return stockFormatter(this.stock);
      return "\u5269\u4F59" + this.stock + "\u4EF6";
    },
    quotaText: function quotaText() {
      var _this$customStepperCo = this.customStepperConfig,
          quotaText = _this$customStepperCo.quotaText,
          hideQuotaText = _this$customStepperCo.hideQuotaText;
      if (hideQuotaText) return '';
      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = "\u6BCF\u4EBA\u9650\u8D2D" + this.quota + "\u4EF6";
      }

      return text;
    },
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit; // 无限购时直接取库存，有限购时取限购数和库存数中小的那个

      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },
  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;
      handleStepperChange && handleStepperChange(currentValue);
      this.$emit('change', currentValue);
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/validate/email.js
/* eslint-disable */
function email(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}
// CONCATENATED MODULE: ./es/utils/validate/number.js
function number(value) {
  return /^\d+$/.test(value);
}
// CONCATENATED MODULE: ./es/uploader/index.js



var uploader_use = Object(utils["h" /* use */])('uploader'),
    uploader_sfc = uploader_use[0],
    uploader_bem = uploader_use[1];

/* harmony default export */ var uploader = (uploader_sfc({
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function,
    accept: {
      type: String,
      default: 'image/*'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },
  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0);

      if (!files || this.beforeRead && !this.beforeRead(files)) {
        return;
      }

      if (Array.isArray(files)) {
        Promise.all(files.map(this.readFile)).then(function (contents) {
          var oversize = false;
          var payload = files.map(function (file, index) {
            if (file.size > _this.maxSize) {
              oversize = true;
            }

            return {
              file: files[index],
              content: contents[index]
            };
          });

          _this.onAfterRead(payload, oversize);
        });
      } else {
        this.readFile(files).then(function (content) {
          _this.onAfterRead({
            file: files,
            content: content
          }, files.size > _this.maxSize);
        });
      }
    },
    readFile: function readFile(file) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (event) {
          resolve(event.target.result);
        };

        if (_this2.resultType === 'dataUrl') {
          reader.readAsDataURL(file);
        } else if (_this2.resultType === 'text') {
          reader.readAsText(file);
        }
      });
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files);
      } else {
        this.afterRead && this.afterRead(files);
        this.$refs.input && (this.$refs.input.value = '');
      }
    }
  },
  render: function render(h) {
    var accept = this.accept,
        disabled = this.disabled;
    return h("div", {
      "class": uploader_bem()
    }, [this.$slots.default, h("input", {
      "attrs": _extends({}, this.$attrs, {
        "type": "file",
        "accept": accept,
        "disabled": disabled
      }),
      "ref": "input",
      "class": uploader_bem('input'),
      "on": {
        "change": this.onChange
      }
    })]);
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuImgUploader.js


/* harmony default export */ var SkuImgUploader = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('van-uploader', {
      attrs: {
        "disabled": !!_vm.paddingImg,
        "after-read": _vm.afterReadFile,
        "max-size": _vm.maxSize * 1024 * 1024
      },
      on: {
        "oversize": _vm.onOversize
      }
    }, [_c('div', {
      class: _vm.b('header')
    }, [_vm.paddingImg ? _c('div', [_vm._v("正在上传...")]) : [_c('icon', {
      attrs: {
        "name": "photograph"
      }
    }), _c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(_vm.value ? '重拍' : '拍照'))]), _vm._v(" 或\n        "), _c('icon', {
      attrs: {
        "name": "photo"
      }
    }), _c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(_vm.value ? '重新选择照片' : '选择照片'))])]], 2)]), _vm.paddingImg || _vm.imgList.length > 0 ? _c('div', {
      staticClass: "van-clearfix"
    }, [_vm._l(_vm.imgList, function (img) {
      return _c('div', {
        class: _vm.b('img')
      }, [_c('img', {
        attrs: {
          "src": img
        }
      }), _c('icon', {
        class: _vm.b('delete'),
        attrs: {
          "name": "clear"
        },
        on: {
          "click": function click($event) {
            _vm.$emit('input', '');
          }
        }
      })], 1);
    }), _vm.paddingImg ? _c('div', {
      class: _vm.b('img')
    }, [_c('img', {
      attrs: {
        "src": _vm.paddingImg
      }
    }), _c('loading', {
      class: _vm.b('uploading'),
      attrs: {
        "type": "spinner"
      }
    })], 1) : _vm._e()], 2) : _vm._e()], 1);
  },
  name: 'sku-img-uploader',
  components: {
    VanUploader: uploader
  },
  props: {
    value: String,
    uploadImg: Function,
    maxSize: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // 正在上传的图片base 64
      paddingImg: ''
    };
  },
  computed: {
    imgList: function imgList() {
      return this.value && !this.paddingImg ? [this.value] : [];
    }
  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this; // 上传文件


      this.paddingImg = file.content;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.paddingImg = '';
      });
    },
    onOversize: function onOversize() {
      this.$toast("\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A" + this.maxSize + "MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8");
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuMessages.js





var PLACEHOLDER = {
  id_no: '输入身份证号码',
  text: '输入文本',
  tel: '输入数字',
  email: '输入邮箱',
  date: '点击选择日期',
  time: '点击选择时间',
  textarea: '点击填写段落文本',
  mobile: '输入手机号码'
};
/* harmony default export */ var SkuMessages = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell-group', {
      class: _vm.b()
    }, [_vm._l(_vm.messages, function (message, index) {
      return [message.type === 'image' ? _c('cell', {
        key: _vm.goodsId + "-" + index,
        class: _vm.b('image-cell'),
        attrs: {
          "label": "仅限一张",
          "required": message.required == '1',
          "title": message.name
        }
      }, [_c('sku-img-uploader', {
        attrs: {
          "upload-img": _vm.messageConfig.uploadImg,
          "max-size": _vm.messageConfig.uploadMaxSize
        },
        model: {
          value: _vm.messageValues[index].value,
          callback: function callback($$v) {
            _vm.$set(_vm.messageValues[index], "value", $$v);
          },
          expression: "messageValues[index].value"
        }
      })], 1) : _c('field', {
        key: _vm.goodsId + "-" + index,
        attrs: {
          "maxlength": "200",
          "required": message.required == '1',
          "label": message.name,
          "placeholder": _vm.getPlaceholder(message),
          "type": _vm.getType(message)
        },
        model: {
          value: _vm.messageValues[index].value,
          callback: function callback($$v) {
            _vm.$set(_vm.messageValues[index], "value", $$v);
          },
          expression: "messageValues[index].value"
        }
      })];
    })], 2);
  },
  name: 'sku-messages',
  components: {
    SkuImgUploader: SkuImgUploader,
    Field: field
  },
  props: {
    messages: Array,
    messageConfig: Object,
    goodsId: [Number, String]
  },
  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },
  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },
  computed: {
    messagePlaceholderMap: function messagePlaceholderMap() {
      return this.messageConfig.placeholderMap || {};
    }
  },
  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return {
          value: ''
        };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }

      if (message.type === 'id_no') {
        return 'text';
      }

      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;

        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages["message_" + index] = value;
      });
      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];

        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages[message.name] = value;
      });
      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      return this.messagePlaceholderMap[type] || PLACEHOLDER[type];
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (message.required == '1') {
            // eslint-disable-line
            var textType = message.type === 'image' ? '请上传' : '请填写';
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !number(value)) {
            return '请填写正确的数字格式留言';
          }

          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return '手机号长度为6-20位数字';
          }

          if (message.type === 'email' && !email(value)) {
            return '请填写正确的邮箱';
          }

          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return '请填写正确的身份证号码';
          }
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuActions.js


/* harmony default export */ var SkuActions = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm.showAddCartBtn ? _c('van-button', {
      attrs: {
        "bottom-action": "",
        "text": "加入购物车"
      },
      on: {
        "click": function click($event) {
          _vm.skuEventBus.$emit('sku:addCart');
        }
      }
    }) : _vm._e(), _c('van-button', {
      attrs: {
        "type": "primary",
        "bottom-action": "",
        "text": _vm.buyText || '立即购买'
      },
      on: {
        "click": function click($event) {
          _vm.skuEventBus.$emit('sku:buy');
        }
      }
    })], 1);
  },
  name: 'sku-actions',
  components: {
    VanButton: es_button
  },
  props: {
    buyText: String,
    skuEventBus: Object,
    showAddCartBtn: Boolean
  }
}));
// CONCATENATED MODULE: ./es/sku/Sku.js

/* eslint-disable camelcase */














var Sku_QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT;
/* harmony default export */ var Sku = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return !_vm.isSkuEmpty ? _c('popup', {
      staticClass: "van-sku-container",
      attrs: {
        "position": "bottom",
        "close-on-click-overlay": _vm.closeOnClickOverlay,
        "get-container": _vm.getContainer
      },
      model: {
        value: _vm.show,
        callback: function callback($$v) {
          _vm.show = $$v;
        },
        expression: "show"
      }
    }, [_vm._t("sku-header", [_c('sku-header', {
      attrs: {
        "sku-event-bus": _vm.skuEventBus,
        "selected-sku": _vm.selectedSku,
        "goods": _vm.goods,
        "sku": _vm.sku
      }
    }, [_vm._t("sku-header-price", [_c('div', {
      staticClass: "van-sku__goods-price"
    }, [_c('span', {
      staticClass: "van-sku__price-symbol"
    }, [_vm._v("￥")]), _c('span', {
      staticClass: "van-sku__price-num",
      domProps: {
        "textContent": _vm._s(_vm.price)
      }
    })])], {
      price: _vm.price,
      selectedSkuComb: _vm.selectedSkuComb
    })], 2)], {
      skuEventBus: _vm.skuEventBus,
      selectedSku: _vm.selectedSku,
      selectedSkuComb: _vm.selectedSkuComb
    }), _c('div', {
      staticClass: "van-sku-body",
      style: _vm.bodyStyle
    }, [_vm._t("sku-body-top", null, {
      selectedSku: _vm.selectedSku,
      skuEventBus: _vm.skuEventBus
    }), _vm._t("sku-group", [_vm.hasSku ? _c('div', {
      class: _vm.skuGroupClass
    }, _vm._l(_vm.skuTree, function (skuTreeItem, index) {
      return _c('sku-row', {
        key: index,
        attrs: {
          "sku-row": skuTreeItem
        }
      }, _vm._l(skuTreeItem.v, function (skuValue, valueIndex) {
        return _c('sku-row-item', {
          key: valueIndex,
          attrs: {
            "sku-key-str": skuTreeItem.k_s,
            "sku-value": skuValue,
            "sku-event-bus": _vm.skuEventBus,
            "selected-sku": _vm.selectedSku,
            "sku-list": _vm.sku.list
          }
        });
      }), 1);
    }), 1) : _vm._e()], {
      selectedSku: _vm.selectedSku,
      skuEventBus: _vm.skuEventBus
    }), _vm._t("extra-sku-group", null, {
      skuEventBus: _vm.skuEventBus
    }), _vm._t("sku-stepper", [_c('sku-stepper', {
      ref: "skuStepper",
      attrs: {
        "sku-event-bus": _vm.skuEventBus,
        "selected-sku": _vm.selectedSku,
        "selected-sku-comb": _vm.selectedSkuComb,
        "selected-num": _vm.selectedNum,
        "stepper-title": _vm.stepperTitle,
        "sku-stock-num": _vm.sku.stock_num,
        "hide-quota-text": _vm.hideQuotaText,
        "quota": _vm.quota,
        "quota-used": _vm.quotaUsed,
        "disable-stepper-input": _vm.disableStepperInput,
        "hide-stock": _vm.hideStock,
        "custom-stepper-config": _vm.customStepperConfig
      },
      on: {
        "change": function change($event) {
          _vm.$emit('stepper-change', $event);
        }
      }
    })], {
      skuEventBus: _vm.skuEventBus,
      selectedSku: _vm.selectedSku,
      selectedSkuComb: _vm.selectedSkuComb,
      selectedNum: _vm.selectedNum
    }), _vm._t("sku-messages", [_c('sku-messages', {
      ref: "skuMessages",
      attrs: {
        "goods-id": _vm.goodsId,
        "message-config": _vm.messageConfig,
        "messages": _vm.sku.messages
      }
    })])], 2), _vm._t("sku-actions", [_c('sku-actions', {
      attrs: {
        "sku-event-bus": _vm.skuEventBus,
        "buy-text": _vm.buyText,
        "show-add-cart-btn": _vm.showAddCartBtn
      }
    })], {
      skuEventBus: _vm.skuEventBus
    })], 2) : _vm._e();
  },
  name: 'sku',
  components: {
    Popup: es_popup,
    SkuHeader: SkuHeader,
    SkuRow: SkuRow,
    SkuRowItem: SkuRowItem,
    SkuStepper: SkuStepper,
    SkuMessages: SkuMessages,
    SkuActions: SkuActions
  },
  props: {
    sku: Object,
    goods: Object,
    quota: Number,
    value: Boolean,
    buyText: String,
    quotaUsed: Number,
    goodsId: [Number, String],
    hideStock: Boolean,
    hideQuotaText: Boolean,
    stepperTitle: String,
    getContainer: Function,
    resetStepperOnHide: Boolean,
    resetSelectedSkuOnHide: Boolean,
    disableStepperInput: Boolean,
    closeOnClickOverlay: Boolean,
    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    showSoldoutSku: {
      type: Boolean,
      default: true
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return Promise.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    customSkuValidator: Function
  },
  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },
  watch: {
    show: function show(val) {
      this.$emit('input', val);

      if (!val) {
        var selectedSkuValues = skuHelper_getSelectedSkuValues(this.sku.tree, this.selectedSku);
        this.$emit('sku-close', {
          selectedSkuValues: selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.$refs.skuStepper && this.$refs.skuStepper.setCurrentNum(1);
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: function skuTree(val) {
      this.resetSelectedSku(val);
    }
  },
  computed: {
    skuGroupClass: function skuGroupClass() {
      return ['van-sku-group-container', 'van-hairline--bottom', {
        'van-sku-group-container--hide-soldout': !this.showSoldoutSku
      }];
    },
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      } // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下


      var maxHeight = window.innerHeight - this.bodyOffsetTop;
      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return skuHelper_isAllSelected(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return Object.keys(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      }

      if (this.isSkuCombSelected) {
        return getSkuComb(this.sku.list, this.selectedSku);
      }

      return null;
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      } // sku.price是一个格式化好的价格区间


      return this.sku.price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    },
    imageList: function imageList() {
      var imageList = [this.goods.picture];

      if (this.skuTree.length > 0) {
        var treeItem = this.skuTree.filter(function (item) {
          return item.k_s === 's1';
        })[0] || {};

        if (!treeItem.v) {
          return;
        }

        treeItem.v.forEach(function (vItem) {
          var img = vItem.imgUrl || vItem.img_url;

          if (img) {
            imageList.push(img);
          }
        });
      }

      return imageList;
    }
  },
  created: function created() {
    var skuEventBus = new external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a();
    this.skuEventBus = skuEventBus;
    skuEventBus.$on('sku:close', this.onClose);
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:previewImage', this.onPreviewImage);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);
    this.resetSelectedSku(this.skuTree); // 组件初始化后的钩子，抛出skuEventBus

    this.$emit('after-sku-create', skuEventBus);
  },
  methods: {
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this = this;

      this.selectedSku = {}; // 重置selectedSku

      skuTree.forEach(function (item) {
        _this.selectedSku[item.k_s] = _this.initialSku[item.k_s] || UNSELECTED_SKU_VALUE_ID;
      }); // 只有一个sku规格值时默认选中

      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;

        if (item.v.length === 1 && skuHelper_isSkuChoosable(_this.sku.list, _this.selectedSku, {
          key: key,
          valueId: valueId
        })) {
          _this.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return '商品已经无法购买啦';
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      } // 自定义sku校验


      if (this.customSkuValidator) {
        var err = this.customSkuValidator(this);
        if (err) return err;
      }

      return '请先选择商品规格';
    },
    onClose: function onClose() {
      this.show = false;
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3; // 点击已选中的sku时则取消选中


      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? _extends({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = UNSELECTED_SKU_VALUE_ID, _extends2)) : _extends({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));
      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onPreviewImage: function onPreviewImage(indexImage) {
      var _this2 = this;

      var index = this.imageList.findIndex(function (image) {
        return image === indexImage;
      });
      var cbParams = {
        index: index,
        imageList: this.imageList,
        indexImage: indexImage
      };
      this.$emit('preview-on', cbParams);
      image_preview({
        images: this.imageList,
        startPosition: index,
        onClose: function onClose() {
          _this2.$emit('preview-close', cbParams);
        }
      });
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        es_toast('至少选择一件');
      } else if (action === 'plus') {
        if (limitType === Sku_QUOTA_LIMIT) {
          var msg = "\u9650\u8D2D" + quota + "\u4EF6";
          if (quotaUsed > 0) msg += "\uFF0C" + ("\u4F60\u5DF2\u8D2D\u4E70" + quotaUsed + "\u4EF6");
          es_toast(msg);
        } else {
          es_toast('库存不足');
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();

      if (error) {
        es_toast(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/index.js









Sku.SkuActions = SkuActions;
Sku.SkuHeader = SkuHeader;
Sku.SkuMessages = SkuMessages;
Sku.SkuStepper = SkuStepper;
Sku.SkuRow = SkuRow;
Sku.SkuRowItem = SkuRowItem;
Sku.skuHelper = skuHelper;
Sku.skuConstants = constants;
/* harmony default export */ var sku = (Sku);
// CONCATENATED MODULE: ./es/slider/index.js



var slider_use = Object(utils["h" /* use */])('slider'),
    slider_sfc = slider_use[0],
    slider_bem = slider_use[1];

/* harmony default export */ var slider = (slider_sfc({
  mixins: [touch],
  props: {
    min: Number,
    value: Number,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) return;
      this.touchStart(event);
      this.startValue = this.format(this.value);
    },
    onTouchMove: function onTouchMove(event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled) return;
      this.touchMove(event);
      var rect = this.$el.getBoundingClientRect();
      var diff = this.deltaX / rect.width * 100;
      this.updateValue(this.startValue + diff);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) return;
      this.updateValue(this.value, true);
    },
    onClick: function onClick(event) {
      event.stopPropagation();
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var value = (event.clientX - rect.left) / rect.width * 100;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  },
  render: function render(h) {
    var style = {
      background: this.inactiveColor
    };
    var barStyle = {
      width: this.format(this.value) + "%",
      height: this.barHeight,
      background: this.activeColor
    };
    return h("div", {
      "style": style,
      "class": slider_bem({
        disabled: this.disabled
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": slider_bem('bar'),
      "style": barStyle
    }, [h("div", {
      "class": slider_bem('button-wrapper'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.$slots.button || h("div", {
      "class": slider_bem('button')
    })])])]);
  }
}));
// CONCATENATED MODULE: ./es/step/index.js



var step_use = Object(utils["h" /* use */])('step'),
    step_sfc = step_use[0],
    step_bem = step_use[1];

/* harmony default export */ var step = (step_sfc({
  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },
  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      }

      if (index === active) {
        return 'process';
      }
    }
  },
  render: function render(h) {
    var _ref;

    var status = this.status;
    var _this$$parent = this.$parent,
        activeColor = _this$$parent.activeColor,
        direction = _this$$parent.direction;
    var titleStyle = status === 'process' && {
      color: activeColor
    };
    return h("div", {
      "class": ['van-hairline', step_bem([direction, (_ref = {}, _ref[status] = status, _ref)])]
    }, [h("div", {
      "class": step_bem('title'),
      "style": titleStyle
    }, [this.$slots.default]), h("div", {
      "class": step_bem('circle-container')
    }, [status !== 'process' ? h("i", {
      "class": step_bem('circle')
    }) : h(es_icon, {
      "attrs": {
        "name": "checked"
      },
      "style": {
        color: activeColor
      }
    })]), h("div", {
      "class": step_bem('line')
    })]);
  }
}));
// CONCATENATED MODULE: ./es/steps/index.js




var steps_use = Object(utils["h" /* use */])('steps'),
    steps_sfc = steps_use[0],
    steps_bem = steps_use[1];

/* harmony default export */ var steps = (steps_sfc({
  props: {
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: GREEN
    }
  },
  data: function data() {
    return {
      steps: []
    };
  },
  render: function render(h) {
    var icon = this.icon,
        title = this.title,
        description = this.description,
        $slots = this.$slots;
    var StatusIcon = ($slots.icon || icon) && h("div", {
      "class": steps_bem('icon')
    }, [$slots.icon || h(es_icon, {
      "attrs": {
        "name": icon
      },
      "class": this.iconClass
    })]);
    var StatusMessage = h("div", {
      "class": steps_bem('message')
    }, [h("div", {
      "class": steps_bem('title')
    }, [title]), h("div", {
      "class": [steps_bem('desc'), 'van-ellipsis']
    }, [description])]);
    return h("div", {
      "class": steps_bem([this.direction])
    }, [(title || description) && h("div", {
      "class": steps_bem('status')
    }, [StatusIcon, StatusMessage, $slots['message-extra']]), h("div", {
      "class": steps_bem('items', {
        alone: !title && !description
      })
    }, [$slots.default])]);
  }
}));
// CONCATENATED MODULE: ./es/submit-bar/index.js



var submit_bar_use = Object(utils["h" /* use */])('submit-bar'),
    submit_bar_sfc = submit_bar_use[0],
    submit_bar_bem = submit_bar_use[1],
    submit_bar_t = submit_bar_use[2];

/* harmony default export */ var submit_bar = (submit_bar_sfc({
  props: {
    tip: String,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    price: {
      type: Number,
      default: null
    },
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'danger'
    }
  },
  render: function render(h) {
    var _this = this;

    var tip = this.tip,
        price = this.price,
        $slots = this.$slots;
    var hasPrice = typeof price === 'number';
    return h("div", {
      "class": submit_bar_bem()
    }, [$slots.top, ($slots.tip || tip) && h("div", {
      "class": submit_bar_bem('tip')
    }, [tip, $slots.tip]), h("div", {
      "class": submit_bar_bem('bar')
    }, [$slots.default, h("div", {
      "class": submit_bar_bem('text')
    }, [hasPrice && [h("span", [this.label || submit_bar_t('label')]), h("span", {
      "class": submit_bar_bem('price')
    }, [this.currency + " " + (price / 100).toFixed(2)])]]), h(es_button, {
      "attrs": {
        "square": true,
        "size": "large",
        "type": this.buttonType,
        "loading": this.loading,
        "disabled": this.disabled,
        "text": this.loading ? '' : this.buttonText
      },
      "on": {
        "click": function click() {
          _this.$emit('submit');
        }
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/mixins/click-outside.js

/* harmony default export */ var click_outside = (function (config) {
  return {
    mounted: function mounted() {
      var _this = this;

      config.handler = function (event) {
        if (!_this.$el.contains(event.target)) {
          _this[config.method]();
        }
      };

      event_on(document, config.event, config.handler);
    },
    beforeDestroy: function beforeDestroy() {
      off(document, config.event, config.handler);
    }
  };
});
// CONCATENATED MODULE: ./es/swipe-cell/index.js




var swipe_cell_use = Object(utils["h" /* use */])('swipe-cell'),
    swipe_cell_sfc = swipe_cell_use[0],
    swipe_cell_bem = swipe_cell_use[1];

var THRESHOLD = 0.15;
/* harmony default export */ var swipe_cell = (swipe_cell_sfc({
  mixins: [touch, click_outside({
    event: 'touchstart',
    method: 'onClick'
  })],
  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number
  },
  data: function data() {
    return {
      offset: 0,
      draging: false
    };
  },
  methods: {
    open: function open(position) {
      var offset = position === 'left' ? this.leftWidth : -this.rightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = Object(utils["g" /* range */])(offset, -this.rightWidth, this.leftWidth);

      if (this.offset) {
        this.swiping = true;
      } else {
        this.opened = false;
      }
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.open('right'); // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.open('left');
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.draging = true;
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },
    onDrag: function onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(this.deltaX);
      }
    },
    endDrag: function endDrag() {
      if (this.disabled) {
        return;
      }

      this.draging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      }
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var onClick = function onClick(position, stop) {
      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        _this.onClick(position);
      };
    };

    var wrapperStyle = {
      transform: "translate3d(" + this.offset + "px, 0, 0)",
      transition: this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
    };
    return h("div", {
      "class": swipe_cell_bem(),
      "on": {
        "click": onClick('cell'),
        "touchstart": this.startDrag,
        "touchmove": this.onDrag,
        "touchend": this.endDrag,
        "touchcancel": this.endDrag
      }
    }, [h("div", {
      "class": swipe_cell_bem('wrapper'),
      "style": wrapperStyle,
      "on": {
        "transitionend": function transitionend() {
          _this.swipe = false;
        }
      }
    }, [this.leftWidth && h("div", {
      "class": swipe_cell_bem('left'),
      "on": {
        "click": onClick('left', true)
      }
    }, [this.$slots.left]), this.$slots.default, this.rightWidth && h("div", {
      "class": swipe_cell_bem('right'),
      "on": {
        "click": onClick('right', true)
      }
    }, [this.$slots.right])])]);
  }
}));
// CONCATENATED MODULE: ./es/tabbar/index.js

/* harmony default export */ var tabbar = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b({
        fixed: _vm.fixed
      }),
      style: _vm.style
    }, [_vm._t("default")], 2);
  },
  name: 'tabbar',
  data: function data() {
    return {
      items: []
    };
  },
  props: {
    value: Number,
    activeColor: String,
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  computed: {
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    }
  },
  watch: {
    items: function items() {
      this.setActiveItem();
    },
    value: function value() {
      this.setActiveItem();
    }
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.items.forEach(function (item, index) {
        item.active = index === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/tabbar-item/index.js
var _components;




/* harmony default export */ var tabbar_item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        active: _vm.active
      }),
      style: _vm.style,
      on: {
        "click": _vm.onClick
      }
    }, [_c('div', {
      class: _vm.b('icon', {
        dot: _vm.dot
      })
    }, [_vm._t("icon", [_vm.icon ? _c('icon', {
      attrs: {
        "name": _vm.icon
      }
    }) : _vm._e()], {
      active: _vm.active
    }), _c('van-info', {
      attrs: {
        "info": _vm.info
      }
    })], 2), _c('div', {
      class: _vm.b('text')
    }, [_vm._t("default", null, {
      active: _vm.active
    })], 2)]);
  },
  name: 'tabbar-item',
  components: (_components = {}, _components[info.name] = info, _components),
  mixins: [router_link],
  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    style: function style() {
      return this.active ? {
        color: this.$parent.activeColor
      } : null;
    }
  },
  beforeCreate: function beforeCreate() {
    this.$parent.items.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },
  methods: {
    onClick: function onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/tree-select/index.js



var tree_select_use = Object(utils["h" /* use */])('tree-select'),
    tree_select_sfc = tree_select_use[0],
    tree_select_bem = tree_select_use[1];

/* harmony default export */ var tree_select = (tree_select_sfc({
  props: {
    items: Array,
    mainActiveIndex: Number,
    activeId: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: Number,
      default: 300
    }
  },
  computed: {
    subItems: function subItems() {
      var selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    }
  },
  methods: {
    onClickNav: function onClickNav(data, index) {
      if (!data.disabled) {
        this.$emit('navclick', index);
      }
    },
    onItemSelect: function onItemSelect(data) {
      if (!data.disabled) {
        this.$emit('itemclick', data);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var height = this.height,
        items = this.items,
        mainActiveIndex = this.mainActiveIndex,
        activeId = this.activeId,
        subItems = this.subItems;
    return h("div", {
      "class": tree_select_bem(),
      "style": {
        height: height + 'px'
      }
    }, [h("div", {
      "class": tree_select_bem('nav')
    }, [items.map(function (item, index) {
      return h("div", {
        "key": index,
        "class": ['van-ellipsis', tree_select_bem('nitem', {
          active: mainActiveIndex === index,
          disabled: item.disabled
        })],
        "on": {
          "click": function click() {
            _this.onClickNav(item, index);
          }
        }
      }, [item.text]);
    })]), h("div", {
      "class": tree_select_bem('content')
    }, [subItems.map(function (item) {
      return h("div", {
        "key": item.id,
        "class": ['van-ellipsis', tree_select_bem('item', {
          active: activeId === item.id,
          disabled: item.disabled
        })],
        "on": {
          "click": function click() {
            _this.onItemSelect(item);
          }
        }
      }, [item.text, activeId === item.id && h(es_icon, {
        "attrs": {
          "name": "checked",
          "size": "16px"
        },
        "class": tree_select_bem('selected')
      })]);
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/waterfall/directive.js
/* eslint-disable no-underscore-dangle */


var CONTEXT = '@@Waterfall';
var OFFSET = 300; // 处理滚动函数

function handleScrollEvent() {
  var element = this.el;
  var scrollEventTarget = this.scrollEventTarget; // 已被禁止的滚动处理

  if (this.disabled) return;
  var targetScrollTop = utils_scroll.getScrollTop(scrollEventTarget);
  var targetVisibleHeight = utils_scroll.getVisibleHeight(scrollEventTarget); // 滚动元素可视区域下边沿到滚动元素元素最顶上 距离

  var targetBottom = targetScrollTop + targetVisibleHeight; // 如果无元素高度，考虑为元素隐藏，直接返回

  if (!targetVisibleHeight) return; // 判断是否到了底

  var needLoadMoreToLower = false;

  if (element === scrollEventTarget) {
    needLoadMoreToLower = scrollEventTarget.scrollHeight - targetBottom < this.offset;
  } else {
    var elementBottom = utils_scroll.getElementTop(element) - utils_scroll.getElementTop(scrollEventTarget) + utils_scroll.getVisibleHeight(element);
    needLoadMoreToLower = elementBottom - targetVisibleHeight < this.offset;
  }

  if (needLoadMoreToLower) {
    this.cb.lower && this.cb.lower({
      target: scrollEventTarget,
      top: targetScrollTop
    });
  } // 判断是否到了顶


  var needLoadMoreToUpper = false;

  if (element === scrollEventTarget) {
    needLoadMoreToUpper = targetScrollTop < this.offset;
  } else {
    var elementTop = utils_scroll.getElementTop(element) - utils_scroll.getElementTop(scrollEventTarget);
    needLoadMoreToUpper = elementTop + this.offset > 0;
  }

  if (needLoadMoreToUpper) {
    this.cb.upper && this.cb.upper({
      target: scrollEventTarget,
      top: targetScrollTop
    });
  }
} // 绑定事件到元素上
// 读取基本的控制变量


function doBindEvent() {
  var _this = this;

  if (this.el[CONTEXT].binded) {
    return;
  }

  this.el[CONTEXT].binded = true;
  this.scrollEventListener = handleScrollEvent.bind(this);
  this.scrollEventTarget = utils_scroll.getScrollEventTarget(this.el);
  var disabledExpr = this.el.getAttribute('waterfall-disabled');
  var disabled = false;

  if (disabledExpr) {
    this.vm.$watch(disabledExpr, function (value) {
      _this.disabled = value;

      _this.scrollEventListener();
    });
    disabled = Boolean(this.vm[disabledExpr]);
  }

  this.disabled = disabled;
  var offset = this.el.getAttribute('waterfall-offset');
  this.offset = Number(offset) || OFFSET;
  event_on(this.scrollEventTarget, 'scroll', this.scrollEventListener, true);
  this.scrollEventListener();
} // 绑定事件


function startBind(el) {
  var context = el[CONTEXT];
  context.vm.$nextTick(function () {
    doBindEvent.call(el[CONTEXT]);
  });
} // 确认何时绑事件监听函数


function doCheckStartBind(el) {
  var context = el[CONTEXT];

  if (context.vm._isMounted) {
    startBind(el);
  } else {
    context.vm.$on('hook:mounted', function () {
      startBind(el);
    });
  }
}

/* harmony default export */ var directive = (function (type) {
  return {
    bind: function bind(el, binding, vnode) {
      if (!el[CONTEXT]) {
        el[CONTEXT] = {
          el: el,
          vm: vnode.context,
          cb: {}
        };
      }

      el[CONTEXT].cb[type] = binding.value;
      doCheckStartBind(el);
    },
    update: function update(el) {
      var context = el[CONTEXT];
      context.scrollEventListener && context.scrollEventListener();
    },
    unbind: function unbind(el) {
      var context = el[CONTEXT];

      if (context.scrollEventTarget) {
        off(context.scrollEventTarget, 'scroll', context.scrollEventListener);
      }
    }
  };
});
// CONCATENATED MODULE: ./es/waterfall/index.js


directive.install = function (Vue) {
  if (false) {}

  Vue.directive('WaterfallLower', directive('lower'));
  Vue.directive('WaterfallUpper', directive('upper'));
};

/* harmony default export */ var waterfall = (directive);
// CONCATENATED MODULE: ./es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* concated harmony reexport Actionsheet */__webpack_require__.d(__webpack_exports__, "Actionsheet", function() { return actionsheet; });
/* concated harmony reexport AddressEdit */__webpack_require__.d(__webpack_exports__, "AddressEdit", function() { return address_edit; });
/* concated harmony reexport AddressList */__webpack_require__.d(__webpack_exports__, "AddressList", function() { return address_list; });
/* concated harmony reexport Area */__webpack_require__.d(__webpack_exports__, "Area", function() { return es_area; });
/* concated harmony reexport Badge */__webpack_require__.d(__webpack_exports__, "Badge", function() { return badge; });
/* concated harmony reexport BadgeGroup */__webpack_require__.d(__webpack_exports__, "BadgeGroup", function() { return badge_group; });
/* concated harmony reexport Button */__webpack_require__.d(__webpack_exports__, "Button", function() { return es_button; });
/* concated harmony reexport Card */__webpack_require__.d(__webpack_exports__, "Card", function() { return card; });
/* concated harmony reexport Cell */__webpack_require__.d(__webpack_exports__, "Cell", function() { return es_cell; });
/* concated harmony reexport CellGroup */__webpack_require__.d(__webpack_exports__, "CellGroup", function() { return cell_group; });
/* concated harmony reexport Checkbox */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return es_checkbox; });
/* concated harmony reexport CheckboxGroup */__webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return checkbox_group; });
/* concated harmony reexport Circle */__webpack_require__.d(__webpack_exports__, "Circle", function() { return circle; });
/* concated harmony reexport Col */__webpack_require__.d(__webpack_exports__, "Col", function() { return col; });
/* concated harmony reexport Collapse */__webpack_require__.d(__webpack_exports__, "Collapse", function() { return collapse; });
/* concated harmony reexport CollapseItem */__webpack_require__.d(__webpack_exports__, "CollapseItem", function() { return collapse_item; });
/* concated harmony reexport ContactCard */__webpack_require__.d(__webpack_exports__, "ContactCard", function() { return contact_card; });
/* concated harmony reexport ContactEdit */__webpack_require__.d(__webpack_exports__, "ContactEdit", function() { return contact_edit; });
/* concated harmony reexport ContactList */__webpack_require__.d(__webpack_exports__, "ContactList", function() { return contact_list; });
/* concated harmony reexport Coupon */__webpack_require__.d(__webpack_exports__, "Coupon", function() { return es_coupon; });
/* concated harmony reexport CouponCell */__webpack_require__.d(__webpack_exports__, "CouponCell", function() { return coupon_cell; });
/* concated harmony reexport CouponList */__webpack_require__.d(__webpack_exports__, "CouponList", function() { return coupon_list; });
/* concated harmony reexport DatetimePicker */__webpack_require__.d(__webpack_exports__, "DatetimePicker", function() { return datetime_picker; });
/* concated harmony reexport Dialog */__webpack_require__.d(__webpack_exports__, "Dialog", function() { return dialog; });
/* concated harmony reexport Field */__webpack_require__.d(__webpack_exports__, "Field", function() { return field; });
/* concated harmony reexport GoodsAction */__webpack_require__.d(__webpack_exports__, "GoodsAction", function() { return goods_action; });
/* concated harmony reexport GoodsActionBigBtn */__webpack_require__.d(__webpack_exports__, "GoodsActionBigBtn", function() { return goods_action_big_btn; });
/* concated harmony reexport GoodsActionMiniBtn */__webpack_require__.d(__webpack_exports__, "GoodsActionMiniBtn", function() { return goods_action_mini_btn; });
/* concated harmony reexport Icon */__webpack_require__.d(__webpack_exports__, "Icon", function() { return es_icon; });
/* concated harmony reexport ImagePreview */__webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return image_preview; });
/* concated harmony reexport Info */__webpack_require__.d(__webpack_exports__, "Info", function() { return info; });
/* concated harmony reexport Lazyload */__webpack_require__.d(__webpack_exports__, "Lazyload", function() { return lazyload; });
/* concated harmony reexport List */__webpack_require__.d(__webpack_exports__, "List", function() { return es_list; });
/* concated harmony reexport Loading */__webpack_require__.d(__webpack_exports__, "Loading", function() { return loading; });
/* concated harmony reexport Locale */__webpack_require__.d(__webpack_exports__, "Locale", function() { return locale["a" /* default */]; });
/* concated harmony reexport NavBar */__webpack_require__.d(__webpack_exports__, "NavBar", function() { return nav_bar; });
/* concated harmony reexport NoticeBar */__webpack_require__.d(__webpack_exports__, "NoticeBar", function() { return notice_bar; });
/* concated harmony reexport Notify */__webpack_require__.d(__webpack_exports__, "Notify", function() { return notify; });
/* concated harmony reexport NumberKeyboard */__webpack_require__.d(__webpack_exports__, "NumberKeyboard", function() { return number_keyboard; });
/* concated harmony reexport Overlay */__webpack_require__.d(__webpack_exports__, "Overlay", function() { return overlay; });
/* concated harmony reexport Pagination */__webpack_require__.d(__webpack_exports__, "Pagination", function() { return pagination; });
/* concated harmony reexport Panel */__webpack_require__.d(__webpack_exports__, "Panel", function() { return panel; });
/* concated harmony reexport PasswordInput */__webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return password_input; });
/* concated harmony reexport Picker */__webpack_require__.d(__webpack_exports__, "Picker", function() { return es_picker; });
/* concated harmony reexport Popup */__webpack_require__.d(__webpack_exports__, "Popup", function() { return es_popup; });
/* concated harmony reexport Progress */__webpack_require__.d(__webpack_exports__, "Progress", function() { return es_progress; });
/* concated harmony reexport PullRefresh */__webpack_require__.d(__webpack_exports__, "PullRefresh", function() { return pull_refresh; });
/* concated harmony reexport Radio */__webpack_require__.d(__webpack_exports__, "Radio", function() { return es_radio; });
/* concated harmony reexport RadioGroup */__webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return radio_group; });
/* concated harmony reexport Rate */__webpack_require__.d(__webpack_exports__, "Rate", function() { return es_rate; });
/* concated harmony reexport Row */__webpack_require__.d(__webpack_exports__, "Row", function() { return row; });
/* concated harmony reexport Search */__webpack_require__.d(__webpack_exports__, "Search", function() { return search; });
/* concated harmony reexport Sku */__webpack_require__.d(__webpack_exports__, "Sku", function() { return sku; });
/* concated harmony reexport Slider */__webpack_require__.d(__webpack_exports__, "Slider", function() { return slider; });
/* concated harmony reexport Step */__webpack_require__.d(__webpack_exports__, "Step", function() { return step; });
/* concated harmony reexport Stepper */__webpack_require__.d(__webpack_exports__, "Stepper", function() { return stepper; });
/* concated harmony reexport Steps */__webpack_require__.d(__webpack_exports__, "Steps", function() { return steps; });
/* concated harmony reexport SubmitBar */__webpack_require__.d(__webpack_exports__, "SubmitBar", function() { return submit_bar; });
/* concated harmony reexport Swipe */__webpack_require__.d(__webpack_exports__, "Swipe", function() { return swipe; });
/* concated harmony reexport SwipeCell */__webpack_require__.d(__webpack_exports__, "SwipeCell", function() { return swipe_cell; });
/* concated harmony reexport SwipeItem */__webpack_require__.d(__webpack_exports__, "SwipeItem", function() { return swipe_item; });
/* concated harmony reexport Switch */__webpack_require__.d(__webpack_exports__, "Switch", function() { return es_switch; });
/* concated harmony reexport SwitchCell */__webpack_require__.d(__webpack_exports__, "SwitchCell", function() { return switch_cell; });
/* concated harmony reexport Tab */__webpack_require__.d(__webpack_exports__, "Tab", function() { return tab; });
/* concated harmony reexport Tabbar */__webpack_require__.d(__webpack_exports__, "Tabbar", function() { return tabbar; });
/* concated harmony reexport TabbarItem */__webpack_require__.d(__webpack_exports__, "TabbarItem", function() { return tabbar_item; });
/* concated harmony reexport Tabs */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return tabs; });
/* concated harmony reexport Tag */__webpack_require__.d(__webpack_exports__, "Tag", function() { return tag; });
/* concated harmony reexport Toast */__webpack_require__.d(__webpack_exports__, "Toast", function() { return es_toast; });
/* concated harmony reexport TreeSelect */__webpack_require__.d(__webpack_exports__, "TreeSelect", function() { return tree_select; });
/* concated harmony reexport Uploader */__webpack_require__.d(__webpack_exports__, "Uploader", function() { return uploader; });
/* concated harmony reexport Waterfall */__webpack_require__.d(__webpack_exports__, "Waterfall", function() { return waterfall; });
/* eslint-disable */
// This file is auto gererated by build/build-entry.js








































































var version = '1.5.7';
var components = [actionsheet, address_edit, address_list, es_area, badge, badge_group, es_button, card, es_cell, cell_group, es_checkbox, checkbox_group, circle, col, collapse, collapse_item, contact_card, contact_edit, contact_list, es_coupon, coupon_cell, coupon_list, datetime_picker, dialog, field, goods_action, goods_action_big_btn, goods_action_mini_btn, es_icon, image_preview, info, es_list, loading, locale["a" /* default */], nav_bar, notice_bar, notify, number_keyboard, overlay, pagination, panel, password_input, es_picker, es_popup, es_progress, pull_refresh, es_radio, radio_group, es_rate, row, search, sku, slider, step, stepper, steps, submit_bar, swipe, swipe_cell, swipe_item, es_switch, switch_cell, tab, tabbar, tabbar_item, tabs, tag, es_toast, tree_select, uploader];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


/* harmony default export */ var es = __webpack_exports__["default"] = ({
  install: install,
  version: version
});

/***/ })
/******/ ]);
});