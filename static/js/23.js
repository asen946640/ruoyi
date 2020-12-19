(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/core-js/internals/is-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/is-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar floor = Math.floor;\n\n// `Number.isInteger` method implementation\n// https://tc39.github.io/ecma262/#sec-number.isinteger\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-integer.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-integer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isInteger = __webpack_require__(/*! ../internals/is-integer */ \"./node_modules/core-js/internals/is-integer.js\");\n\n// `Number.isInteger` method\n// https://tc39.github.io/ecma262/#sec-number.isinteger\n$({ target: 'Number', stat: true }, {\n  isInteger: isInteger\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.number.is-integer.js?");

/***/ })

}]);