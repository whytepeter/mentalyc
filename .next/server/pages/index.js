"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Redirect.tsx":
/*!*************************************!*\
  !*** ./src/components/Redirect.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Redirect\": () => (/* binding */ Redirect)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Redirect({ to , replace =false  }) {\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (replace) {\n            router.replace(to);\n        } else {\n            router.push(to);\n        }\n    }, [\n        router,\n        to,\n        replace\n    ]);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWRpcmVjdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDTjtBQUUzQixTQUFTRSxTQUFTLEVBQ3ZCQyxHQUFFLEVBQ0ZDLFNBQVUsS0FBSyxHQUloQixFQUFFO0lBQ0QsSUFBSUMsU0FBU0wsc0RBQVNBO0lBQ3RCQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSUcsU0FBUztZQUNYQyxPQUFPRCxPQUFPLENBQUNEO1FBQ2pCLE9BQU87WUFDTEUsT0FBT0MsSUFBSSxDQUFDSDtRQUNkLENBQUM7SUFDSCxHQUFHO1FBQUNFO1FBQVFGO1FBQUlDO0tBQVE7SUFFeEIsT0FBTyxJQUFJO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lbnRhbHljLXRlc3QvLi9zcmMvY29tcG9uZW50cy9SZWRpcmVjdC50c3g/NWU3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUmVkaXJlY3Qoe1xuICB0byxcbiAgcmVwbGFjZSA9IGZhbHNlLFxufToge1xuICB0bzogYW55O1xuICByZXBsYWNlPzogYm9vbGVhbjtcbn0pIHtcbiAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZSh0byk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKHRvKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIsIHRvLCByZXBsYWNlXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiUmVkaXJlY3QiLCJ0byIsInJlcGxhY2UiLCJyb3V0ZXIiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Redirect.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IndexPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Redirect */ \"./src/components/Redirect.tsx\");\n\n\nfunction IndexPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Redirect__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n        to: \"/dashboard\"\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/pages/index.tsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlEO0FBRWxDLFNBQVNDLFlBQVk7SUFDbEMscUJBQU8sOERBQUNELDBEQUFRQTtRQUFDRSxJQUFHOzs7Ozs7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lbnRhbHljLXRlc3QvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL1JlZGlyZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcbiAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9kYXNoYm9hcmRcIiAvPjtcbn1cbiJdLCJuYW1lcyI6WyJSZWRpcmVjdCIsIkluZGV4UGFnZSIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();