/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./src/Stage.js":
/*!**********************!*\
  !*** ./src/Stage.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _core_BaseObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/BaseObject */ \"./src/core/BaseObject.js\");\n\n\n\n\n\n\n\n\nvar Stage =\n/*#__PURE__*/\nfunction (_BaseObject) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Stage, _BaseObject);\n\n  function Stage(options) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Stage);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Stage).call(this));\n    _this.options_ = options;\n    _this.target_ = _this.options_.target;\n    _this.rendererType_ = _this.options_.rendererType || \"canvas\";\n    _this.renderer = \"\";\n    _this.targetElement = null;\n\n    _this.getTargetElement(_this.target_);\n\n    _this.createRenderer(_this.rendererType_);\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Stage, [{\n    key: \"getTargetElement\",\n    value: function getTargetElement(target) {\n      if (typeof target == \"string\") {\n        this.targetElement = document.getElementById(target);\n      } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(target) == \"object\") {\n        this.targetElement = target;\n      }\n\n      return this.targetElement;\n    }\n  }, {\n    key: \"createRenderer\",\n    value: function createRenderer(type) {\n      if (type == \"canvas\") {\n        this.renderer = document.createElement('canvas');\n        this.renderer.style.width = '100%';\n        this.renderer.style.height = '100%';\n      } else if (type == \"svg\") {\n        this.renderer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n        this.renderer.setAttribute(\"width\", \"100%\");\n        this.renderer.setAttribute(\"height\", \"100%\");\n      }\n\n      this.targetElement.appendChild(this.renderer);\n    }\n  }]);\n\n  return Stage;\n}(_core_BaseObject__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stage);\n\n//# sourceURL=webpack:///./src/Stage.js?");

/***/ }),

/***/ "./src/core/BaseObject.js":
/*!********************************!*\
  !*** ./src/core/BaseObject.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Observable.js */ \"./src/core/Observable.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util.js */ \"./src/util.js\");\n\n\n\n\n\n\n\n\nvar BaseObject =\n/*#__PURE__*/\nfunction (_Observable) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BaseObject, _Observable);\n\n  function BaseObject(opt_values) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseObject);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BaseObject).call(this));\n    _this.values_ = {};\n\n    if (opt_values !== undefined) {\n      _this.setProperties(opt_values);\n    }\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseObject, [{\n    key: \"getProperties\",\n    value: function getProperties() {\n      return Object(_util_js__WEBPACK_IMPORTED_MODULE_6__[\"assign\"])({}, this.values_);\n    }\n  }, {\n    key: \"get\",\n    value: function get(key) {\n      var value;\n\n      if (this.values_.hasOwnProperty(key)) {\n        value = this.values_[key];\n      }\n\n      return value;\n    }\n  }, {\n    key: \"setProperties\",\n    value: function setProperties(values, opt_silent) {\n      for (var key in values) {\n        this.set(key, values[key], opt_silent);\n      }\n    }\n  }, {\n    key: \"set\",\n    value: function set(key, value, opt_silent) {\n      if (opt_silent) {\n        this.values_[key] = value;\n      } else {}\n    }\n  }]);\n\n  return BaseObject;\n}(_Observable_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseObject);\n\n//# sourceURL=webpack:///./src/core/BaseObject.js?");

/***/ }),

/***/ "./src/core/Event.js":
/*!***************************!*\
  !*** ./src/core/Event.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/*\n* @Author: giserpan\n* @Date:   2018-10-17 14:56:38\n* @Last Modified by:   giserpan\n* @Last Modified time: 2018-10-17 15:03:26\n*/\nvar Event =\n/*#__PURE__*/\nfunction () {\n  function Event(type) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Event);\n\n    this.propagationStopped;\n    this.type;\n    this.target = null;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Event, [{\n    key: \"preventDefault\",\n    value: function preventDefault() {\n      this.propagationStopped = true;\n    }\n  }, {\n    key: \"stopPropagation\",\n    value: function stopPropagation() {\n      this.propagationStopped = true;\n    }\n  }]);\n\n  return Event;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Event);\n\n//# sourceURL=webpack:///./src/core/Event.js?");

/***/ }),

/***/ "./src/core/EventTarget.js":
/*!*********************************!*\
  !*** ./src/core/EventTarget.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Event.js */ \"./src/core/Event.js\");\n\n\n\n\nvar EventTarget =\n/*#__PURE__*/\nfunction () {\n  function EventTarget() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EventTarget);\n\n    this.listeners_ = {};\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventTarget, [{\n    key: \"addEventListener\",\n    value: function addEventListener(type, listener) {\n      var listeners = this.listeners_[type];\n\n      if (!listeners) {\n        listeners = this.listeners_[type] = [];\n      }\n\n      if (listeners.indexOf(listener) === -1) {\n        listeners.push(listener);\n      }\n    }\n  }, {\n    key: \"dispatchEvent\",\n    value: function dispatchEvent(event) {\n      var evt = typeof event === 'string' ? new _Event_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](event) : event;\n      var type = evt.type;\n      evt.target = this;\n      var listeners = this.listeners_[type];\n      var propagate;\n\n      for (var i = 0; i < listeners.length; i++) {\n        if (listeners[i].call(this, evt) == false || evt.propagationStopped) {\n          propagate = false;\n          break;\n        }\n      }\n\n      return propagate;\n    }\n  }]);\n\n  return EventTarget;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventTarget);\n\n//# sourceURL=webpack:///./src/core/EventTarget.js?");

/***/ }),

/***/ "./src/core/Observable.js":
/*!********************************!*\
  !*** ./src/core/Observable.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _EventTarget_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventTarget.js */ \"./src/core/EventTarget.js\");\n\n\n\n\n\n\n/*\n* @Author: giserpan\n* @Date:   2018-09-18 10:37:21\n* @Last Modified by:   giserpan\n* @Last Modified time: 2018-09-26 10:32:45\n*/\n\n\nvar Observable =\n/*#__PURE__*/\nfunction (_EventTarget) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Observable, _EventTarget);\n\n  function Observable() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Observable);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Observable).call(this));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Observable, [{\n    key: \"on\",\n    value: function on() {}\n  }, {\n    key: \"un\",\n    value: function un() {}\n  }]);\n\n  return Observable;\n}(_EventTarget_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Observable);\n\n//# sourceURL=webpack:///./src/core/Observable.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Stage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stage.js */ \"./src/Stage.js\");\n/* harmony import */ var _shape_Circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape/Circle.js */ \"./src/shape/Circle.js\");\n/*\n* @Author: giserpan\n* @Date:   2018-09-28 16:02:16\n* @Last Modified by:   giserpan\n* @Last Modified time: 2018-10-11 23:39:03\n*/\n\n\nvar vge = window['vge'] = {};\nvge.Stage = _Stage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nvge.Shape = {};\nvge.Shape.Circle = _shape_Circle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shape/Circle.js":
/*!*****************************!*\
  !*** ./src/shape/Circle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Shape.js */ \"./src/shape/Shape.js\");\n\n\n\n\n\n\n/*\n* @Author: giserpan\n* @Date:   2018-09-20 10:34:46\n* @Last Modified by:   giserpan\n* @Last Modified time: 2018-09-26 10:31:38\n*/\n\n\nvar Circle =\n/*#__PURE__*/\nfunction (_Shape) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Circle, _Shape);\n\n  function Circle(options) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Circle);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Circle).call(this));\n    _this.options_ = options;\n    _this.x_ = _this.options_.x;\n    _this.y_ = _this.options_.y;\n    _this.r_ = _this.options_.r;\n    _this.fillStyle_ = '';\n    _this.strokeStyle_ = '';\n    _this.style_ = _this.options_.style;\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Circle, [{\n    key: \"setStyle\",\n    value: function setStyle(style) {\n      this.fillStyle_ = style.fill;\n      this.strokeStyle_ = style.stroke;\n      this.style_ = style;\n    }\n  }, {\n    key: \"getStyle\",\n    value: function getStyle() {\n      return this.style_;\n    }\n  }, {\n    key: \"getCenter\",\n    value: function getCenter() {\n      return [this.x_, this.y_];\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(context) {\n      context.beginPath();\n      context.arc(this.x_, this.y_, 10, 0, 2 * Math.PI, false);\n\n      if (this.fillStyle_) {\n        context.fillStyle = this.fillStyle_;\n      }\n\n      context.fill();\n\n      if (this.strokeStyle_) {\n        context.strokeStyle = this.strokeStyle_;\n      }\n\n      context.stroke();\n    }\n  }]);\n\n  return Circle;\n}(_Shape_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Circle);\n\n//# sourceURL=webpack:///./src/shape/Circle.js?");

/***/ }),

/***/ "./src/shape/Shape.js":
/*!****************************!*\
  !*** ./src/shape/Shape.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _core_BaseObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/BaseObject.js */ \"./src/core/BaseObject.js\");\n\n\n\n\n\n\n/*\n* @Author: giserpan\n* @Date:   2018-09-18 11:17:26\n* @Last Modified by:   giserpan\n* @Last Modified time: 2018-09-26 10:32:02\n*/\n\n\nvar Shape =\n/*#__PURE__*/\nfunction (_BaseObject) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Shape, _BaseObject);\n\n  function Shape() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Shape);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Shape).call(this));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Shape, [{\n    key: \"draw\",\n    value: function draw() {}\n  }]);\n\n  return Shape;\n}(_core_BaseObject_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shape);\n\n//# sourceURL=webpack:///./src/shape/Shape.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assign\", function() { return assign; });\nvar assign = typeof Object.assign === 'function' ? Object.assign : function (target, var_sources) {\n  if (target === undefined || target === null) {\n    throw new TypeError('Cannot convert undefined or null to object');\n  }\n\n  var output = Object(target);\n\n  for (var i = 1, ii = arguments.length; i < ii; ++i) {\n    var source = arguments[i];\n\n    if (source !== undefined && source !== null) {\n      for (var key in source) {\n        if (source.hasOwnProperty(key)) {\n          output[key] = source[key];\n        }\n      }\n    }\n  }\n\n  return output;\n};\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });