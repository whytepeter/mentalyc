"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Recordings/RecordingPanel.tsx":
/*!******************************************************!*\
  !*** ./src/components/Recordings/RecordingPanel.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_Play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/Play */ \"./src/icons/Play.tsx\");\n\n\n\nfunction RecordingPanel(param) {\n    let { duration , maxDuration , stopRecording  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full  items-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer bg-gradient w-12 h-12 flex items-center justify-center rounded-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Play__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative overflow-hidden flex-1 w-full  p-4 bg-slate-100 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    width: \"\".concat(Math.round(duration * (100 / maxDuration)), \"%\")\n                                },\n                                className: \" h-4 z-10 bg-primary-100 absolute left-0 top-1/2 -translate-y-1/2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute  left-0 top-1/2 -translate-y-1/2 w-full border-2 border-dashed border-primary-100\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-primary text-xl font-medium\",\n                        children: [\n                            duration,\n                            \":\",\n                            maxDuration\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: stopRecording,\n                className: \"p-2 rounded-full bg-gradient text-white h-20 w-20 flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-2 w-full h-full rounded-full border border-white flex items-center justify-center\",\n                    children: \"Stop\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = RecordingPanel;\nvar _c;\n$RefreshReg$(_c, \"RecordingPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJEO0FBQzNCO0FBUWpCLFNBQVNFLGVBQWUsS0FJbEIsRUFBRTtRQUpnQixFQUNyQ0MsU0FBUSxFQUNSQyxZQUFXLEVBQ1hDLGNBQWEsRUFDTSxHQUprQjtJQUtyQyxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNOLG1EQUFJQTs7Ozs7Ozs7OztrQ0FFUCw4REFBQ0s7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FDQ0UsT0FBTztvQ0FDTEMsT0FBTyxHQUE4QyxPQUEzQ0MsS0FBS0MsS0FBSyxDQUFDUixXQUFZLE9BQU1DLFdBQVUsSUFBSTtnQ0FDdkQ7Z0NBQ0FHLFdBQVk7Ozs7OzswQ0FFZCw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFakIsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFDWko7NEJBQVM7NEJBQUVDOzs7Ozs7Ozs7Ozs7OzBCQUloQiw4REFBQ1E7Z0JBQ0NDLFNBQVNSO2dCQUNURSxXQUFVOzBCQUVWLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFBc0Y7Ozs7Ozs7Ozs7Ozs7QUFNN0csQ0FBQztLQW5DdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nUGFuZWwudHN4Pzk2NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsYXkgZnJvbSBcIkAvaWNvbnMvUGxheVwiO1xuXG50eXBlIFJlY29yZGluZ1BhbmVsVHlwZSA9IHtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgbWF4RHVyYXRpb246IG51bWJlcjtcbiAgc3RvcFJlY29yZGluZzogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29yZGluZ1BhbmVsKHtcbiAgZHVyYXRpb24sXG4gIG1heER1cmF0aW9uLFxuICBzdG9wUmVjb3JkaW5nLFxufTogUmVjb3JkaW5nUGFuZWxUeXBlKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGJnLWdyYWRpZW50IHctMTIgaC0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICA8UGxheSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gZmxleC0xIHctZnVsbCAgcC00IGJnLXNsYXRlLTEwMCBcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogYCR7TWF0aC5yb3VuZChkdXJhdGlvbiAqICgxMDAgLyBtYXhEdXJhdGlvbikpfSVgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCBoLTQgei0xMCBiZy1wcmltYXJ5LTEwMCBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yYH1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAgbGVmdC0wIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItcHJpbWFyeS0xMDBcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtcHJpbWFyeSB0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAge2R1cmF0aW9ufTp7bWF4RHVyYXRpb259XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17c3RvcFJlY29yZGluZ31cbiAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudCB0ZXh0LXdoaXRlIGgtMjAgdy0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbCBoLWZ1bGwgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICBTdG9wXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQbGF5IiwiUmVjb3JkaW5nUGFuZWwiLCJkdXJhdGlvbiIsIm1heER1cmF0aW9uIiwic3RvcFJlY29yZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJNYXRoIiwicm91bmQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingPanel.tsx\n"));

/***/ })

});