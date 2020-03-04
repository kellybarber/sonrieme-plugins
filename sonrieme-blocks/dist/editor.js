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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/firstblock/components/edit.js":
/*!**************************************************!*\
  !*** ./src/blocks/firstblock/components/edit.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var edit = function edit(_ref) {
  var className = _ref.className;
  return React.createElement("div", {
    className: className
  }, "'Hello'");
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/blocks/firstblock/components/save.js":
/*!**************************************************!*\
  !*** ./src/blocks/firstblock/components/save.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var save = function save(_ref) {
  var className = _ref.className;
  return React.createElement("div", {
    className: className
  }, "'Hello'");
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/blocks/firstblock/index.js":
/*!****************************************!*\
  !*** ./src/blocks/firstblock/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit */ "./src/blocks/firstblock/components/edit.js");
/* harmony import */ var _components_save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/save */ "./src/blocks/firstblock/components/save.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/firstblock/styles/editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;



registerBlockType("sonrieme-blocks/firstblock", {
  title: __("First Block", "sonrieme-blocks"),
  description: __("Our first block", "sonrieme-blocks"),
  category: "common",
  icon: "admin-network",
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _components_save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/blocks/firstblock/styles/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/firstblock/styles/editor.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/post-grid/index.js":
/*!***************************************!*\
  !*** ./src/blocks/post-grid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/firstblock */ "./src/blocks/firstblock/index.js");
/* harmony import */ var _blocks_post_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/post-grid */ "./src/blocks/post-grid/index.js");
/* harmony import */ var _blocks_post_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_post_grid__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=editor.js.map