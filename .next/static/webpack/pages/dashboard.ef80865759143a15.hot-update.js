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

/***/ "./src/components/Recordings/Table/Desktop.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Recordings/Table/Desktop.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Desktop; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Desktop(param) {\n    let { recordings  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 gap-2  hidden md:block\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-5 gap-4 px-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-medium\",\n                                children: \"Session\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-medium\",\n                                children: \"Timestamp\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-medium\",\n                                children: \"Length\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-medium\",\n                                children: \"Status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-medium\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Action\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-h-[450px] overflow-auto\",\n                    children: recordings.map((recording)=>{\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid text-sm  grid-cols-5 gap-4 bg-slate-50 border-b border-primary p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: recording.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"line-clamp-1\",\n                                    children: recording.timestamp\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: recording.length\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"\".concat((recording === null || recording === void 0 ? void 0 : recording.status) === \"PROCESSING\" ? \"bg-slate-200 text-grey-100\" : \"bg-gradient text-white\", \" rounded-full text-xs px-4 py-2 \"),\n                                        children: recording.status\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-2 py-1 w-fit flex items-center justify-center bg-slate-200 rounded-lg\",\n                                        children: \"Play\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, \"table-\".concat(recording.id), true, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/Desktop.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Desktop;\nvar _c;\n$RefreshReg$(_c, \"Desktop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1RhYmxlL0Rlc2t0b3AudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQjtBQU1YLFNBQVNDLFFBQVEsS0FBMEIsRUFBRTtRQUE1QixFQUFFQyxXQUFVLEVBQWMsR0FBMUI7SUFDOUIscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQzs4QkFDQyw0RUFBQ0Y7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBYzs7Ozs7OzBDQUM3Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQWM7Ozs7OzswQ0FDN0IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFjOzs7Ozs7MENBQzdCLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBYzs7Ozs7OzBDQUM3Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFO29DQUFLRixXQUFVOzhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtoQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pGLFdBQVdLLEdBQUcsQ0FBQyxDQUFDQztzQ0FDZixxRUFBQ0w7NEJBRUNDLFdBQVU7OzhDQUVWLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FBSUksVUFBVUMsSUFBSTs7Ozs7OzhDQUNqQyw4REFBQ047b0NBQUlDLFdBQVU7OENBQWdCSSxVQUFVRSxTQUFTOzs7Ozs7OENBQ2xELDhEQUFDUDtvQ0FBSUMsV0FBVTs4Q0FBSUksVUFBVUcsTUFBTTs7Ozs7OzhDQUNuQyw4REFBQ1I7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNFO3dDQUNDRixXQUFXLEdBSVYsT0FIQ0ksQ0FBQUEsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxVQUFXSSxNQUFNLE1BQUssZUFDbEIsK0JBQ0Esd0JBQXdCLEVBQzdCO2tEQUVBSixVQUFVSSxNQUFNOzs7Ozs7Ozs7Ozs4Q0FHckIsOERBQUNUO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDRDt3Q0FBSUMsV0FBVTtrREFBMkU7Ozs7Ozs7Ozs7OzsyQkFsQnZGLFNBQXNCLE9BQWJJLFVBQVVLLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCeEMsQ0FBQztLQS9DdUJaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvVGFibGUvRGVza3RvcC50c3g/ZWNlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWNvcmRpbmdzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBUYWJsZVByb3BzID0ge1xuICByZWNvcmRpbmdzOiBSZWNvcmRpbmdzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVza3RvcCh7IHJlY29yZGluZ3MgfTogVGFibGVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTIgIGhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNSBnYXAtNCBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+U2Vzc2lvbjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlRpbWVzdGFtcDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkxlbmd0aDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlN0YXR1czwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+QWN0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtWzQ1MHB4XSBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAge3JlY29yZGluZ3MubWFwKChyZWNvcmRpbmcpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtgdGFibGUtJHtyZWNvcmRpbmcuaWR9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCB0ZXh0LXNtICBncmlkLWNvbHMtNSBnYXAtNCBiZy1zbGF0ZS01MCBib3JkZXItYiBib3JkZXItcHJpbWFyeSBwLTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPntyZWNvcmRpbmcubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLWNsYW1wLTFcIj57cmVjb3JkaW5nLnRpbWVzdGFtcH08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj57cmVjb3JkaW5nLmxlbmd0aH08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nPy5zdGF0dXMgPT09IFwiUFJPQ0VTU0lOR1wiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJnLXNsYXRlLTIwMCB0ZXh0LWdyZXktMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JhZGllbnQgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICB9IHJvdW5kZWQtZnVsbCB0ZXh0LXhzIHB4LTQgcHktMiBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtyZWNvcmRpbmcuc3RhdHVzfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB5LTEgdy1maXQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctc2xhdGUtMjAwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIFBsYXlcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRlc2t0b3AiLCJyZWNvcmRpbmdzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwic3BhbiIsIm1hcCIsInJlY29yZGluZyIsIm5hbWUiLCJ0aW1lc3RhbXAiLCJsZW5ndGgiLCJzdGF0dXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Recordings/Table/Desktop.tsx\n"));

/***/ })

});