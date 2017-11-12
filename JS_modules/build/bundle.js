/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = 'https://cdn1.droom.in/photos/images/drm/super-cars.png';
document.body.appendChild(image);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

//common module system
// module.exports = sum;


//es 2015
exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bfdcebcfe2890c64db59453dae9eb582.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//importing the file into this file.. so making the imageviewer fiel to run
//so add it to the root js ..


// const sum = require('./sum');
var total = (0, _sum2.default)(10, 5);
console.log("sum:" + total);

/***/ }
/******/ ]);