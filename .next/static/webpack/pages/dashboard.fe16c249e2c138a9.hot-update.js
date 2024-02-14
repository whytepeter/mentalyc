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

/***/ "./src/components/Recordings/Table/PlayAudio.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Recordings/Table/PlayAudio.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayAudio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/icons/Close */ \"./src/icons/Close.tsx\");\n/* harmony import */ var _icons_Play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/Play */ \"./src/icons/Play.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PlayAudio(param) {\n    let { recording  } = param;\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const audioUrl = \"\".concat(process.env.API_URL, \"/\").concat(recording.audioUrl);\n    const togglePlay = ()=>{\n        if (!audioRef.current) return;\n        if (!isPlaying) {\n            audioRef.current.play();\n        } else {\n            audioRef.current.pause();\n        }\n        setIsPlaying((prev)=>!prev);\n    };\n    const closePlayer = ()=>{\n        setIsPlaying(false);\n        if (!audioRef.current) return;\n        audioRef.current.pause();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: togglePlay,\n                className: \"flex items-center gap-1 text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Play__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    \" Play\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(isPlaying ? \"flex\" : \"hidden\", \" fixed inset-0 backdrop-blur-[1px] bg-black/10  items-center justify-center\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-md bg-white rounded-2xl p-4 border flex flex-col gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-base sm:text-lg text-center flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: recording === null || recording === void 0 ? void 0 : recording.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: closePlayer,\n                                    className: \"cursor-pointer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Close__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                            className: \"\",\n                            ref: audioRef,\n                            src: audioUrl,\n                            controls: true\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PlayAudio, \"sL4xjVLmTF7f1+jWdlUm6K/Qvq0=\");\n_c = PlayAudio;\nvar _c;\n$RefreshReg$(_c, \"PlayAudio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1RhYmxlL1BsYXlBdWRpby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNGO0FBRVk7QUFNakMsU0FBU0ssVUFBVSxLQUErQixFQUFFO1FBQWpDLEVBQUVDLFVBQVMsRUFBb0IsR0FBL0I7O0lBQ2hDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3pELE1BQU1LLFdBQVdOLDZDQUFNQSxDQUFtQixJQUFJO0lBRTlDLE1BQU1PLFdBQVcsR0FBMEJKLE9BQXZCSyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLE9BQU8sRUFBQyxLQUFzQixPQUFuQlAsVUFBVUksUUFBUTtJQUU3RCxNQUFNSSxhQUFhLElBQVk7UUFDN0IsSUFBSSxDQUFDTCxTQUFTTSxPQUFPLEVBQUU7UUFDdkIsSUFBSSxDQUFDUixXQUFXO1lBQ2RFLFNBQVNNLE9BQU8sQ0FBQ0MsSUFBSTtRQUN2QixPQUFPO1lBQ0xQLFNBQVNNLE9BQU8sQ0FBQ0UsS0FBSztRQUN4QixDQUFDO1FBRURULGFBQWEsQ0FBQ1UsT0FBUyxDQUFDQTtJQUMxQjtJQUVBLE1BQU1DLGNBQWMsSUFBWTtRQUM5QlgsYUFBYSxLQUFLO1FBQ2xCLElBQUksQ0FBQ0MsU0FBU00sT0FBTyxFQUFFO1FBQ3ZCTixTQUFTTSxPQUFPLENBQUNFLEtBQUs7SUFDeEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNHO2dCQUFPQyxTQUFTUDtnQkFBWVEsV0FBVTs7a0NBQ3JDLDhEQUFDckIsbURBQVFBOzs7OztvQkFBRzs7Ozs7OzswQkFHZCw4REFBQ3NCO2dCQUNDRCxXQUFXLEdBRVYsT0FEQ2YsWUFBWSxTQUFTLFFBQVEsRUFDOUI7MEJBRUQsNEVBQUNnQjtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0U7OENBQU1sQixzQkFBQUEsdUJBQUFBLEtBQUFBLElBQUFBLFVBQVdtQixJQUFJOzs7Ozs7OENBQ3RCLDhEQUFDRDtvQ0FBS0gsU0FBU0Y7b0NBQWFHLFdBQVU7OENBQ3BDLDRFQUFDdEIsb0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDMEI7NEJBQU1KLFdBQVU7NEJBQUdLLEtBQUtsQjs0QkFBVW1CLEtBQUtsQjs0QkFBVW1CLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEUsQ0FBQztHQTlDdUJ4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1RhYmxlL1BsYXlBdWRpby50c3g/NGQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAL2ljb25zL0Nsb3NlXCI7XG5pbXBvcnQgUGxheUljb24gZnJvbSBcIkAvaWNvbnMvUGxheVwiO1xuaW1wb3J0IHsgUmVjb3JkaW5nIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgQXVkaW9QbGF5ZXJQcm9wcyA9IHtcbiAgcmVjb3JkaW5nOiBSZWNvcmRpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5QXVkaW8oeyByZWNvcmRpbmcgfTogQXVkaW9QbGF5ZXJQcm9wcykge1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcblxuICBjb25zdCBhdWRpb1VybCA9IGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9LyR7cmVjb3JkaW5nLmF1ZGlvVXJsfWA7XG5cbiAgY29uc3QgdG9nZ2xlUGxheSA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoIWF1ZGlvUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpZiAoIWlzUGxheWluZykge1xuICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgICB9XG5cbiAgICBzZXRJc1BsYXlpbmcoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVBsYXllciA9ICgpOiB2b2lkID0+IHtcbiAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgIGlmICghYXVkaW9SZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtc21cIj5cbiAgICAgICAgPFBsYXlJY29uIC8+IFBsYXlcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgaXNQbGF5aW5nID8gXCJmbGV4XCIgOiBcImhpZGRlblwiXG4gICAgICAgIH0gZml4ZWQgaW5zZXQtMCBiYWNrZHJvcC1ibHVyLVsxcHhdIGJnLWJsYWNrLzEwICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHAtNCBib3JkZXIgZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGcgdGV4dC1jZW50ZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8c3Bhbj57cmVjb3JkaW5nPy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2Nsb3NlUGxheWVyfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGF1ZGlvIGNsYXNzTmFtZT1cIlwiIHJlZj17YXVkaW9SZWZ9IHNyYz17YXVkaW9Vcmx9IGNvbnRyb2xzPjwvYXVkaW8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2xvc2VJY29uIiwiUGxheUljb24iLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUGxheUF1ZGlvIiwicmVjb3JkaW5nIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiYXVkaW9SZWYiLCJhdWRpb1VybCIsInByb2Nlc3MiLCJlbnYiLCJBUElfVVJMIiwidG9nZ2xlUGxheSIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJwcmV2IiwiY2xvc2VQbGF5ZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsIm5hbWUiLCJhdWRpbyIsInJlZiIsInNyYyIsImNvbnRyb2xzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Recordings/Table/PlayAudio.tsx\n"));

/***/ })

});