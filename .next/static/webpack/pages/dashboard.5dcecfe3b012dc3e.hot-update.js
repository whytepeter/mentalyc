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

/***/ "./src/components/Page/Recording.tsx":
/*!*******************************************!*\
  !*** ./src/components/Page/Recording.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n/* harmony import */ var _icons_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/Close */ \"./src/icons/Close.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/TextField */ \"./src/components/TextField.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction RecordingPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const [startRecording, setStartRecording] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [isRecording, setIsRecording] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [sessionName, setSessionName] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [showConfirm, setShowConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const handleClose = ()=>{\n        if (isRecording) {\n            setShowConfirm(true);\n            return;\n        }\n        router.replace(\"/dashboard\");\n    };\n    const closeConfirm = ()=>{\n        setShowConfirm(false);\n    };\n    const startSession = ()=>{\n        if (sessionName.trim() !== \"\") {\n            setIsRecording(true);\n            setStartRecording(true);\n            return;\n        }\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.error(\"Session name is required\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mb-24 flex gap-6 flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-end  mb-6 items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: handleClose,\n                            className: \"cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Close__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:text-[20px] mb-6\",\n                        children: [\n                            \"Recording \",\n                            isRecording ? \"In Progress\" : \"Session\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full sm:max-w-xl flex flex-col gap-8\",\n                        children: !startRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextField__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                                    value: sessionName,\n                                    onInputChange: setSessionName,\n                                    placeholder: \"Enter session name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    onClick: startSession,\n                                    children: \"Start Recording\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            isRecording: isRecording,\n                            setIsRecording: setIsRecording\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_4__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: showConfirm,\n                onClose: closeConfirm,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-6 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-xl mb-1\",\n                                children: \"Are you sure?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400\",\n                                children: \" A recording session is ongoing\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                onClick: ()=>{\n                                    closeConfirm();\n                                    router.replace(\"/dashboard\");\n                                },\n                                children: \"Yes\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"default\",\n                                onClick: closeConfirm,\n                                children: \"Uhm, No\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingPage, \"1n9/Gksop5/sppGTY1GOUC/ICfs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = RecordingPage;\nvar _c;\n$RefreshReg$(_c, \"RecordingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlL1JlY29yZGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9FO0FBQzlCO0FBQ087QUFDTTtBQUNBO0FBQ1g7QUFDSTtBQUVKO0FBRXpCLFNBQVNRLGdCQUFnQjs7SUFDdEMsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQVUsS0FBSztJQUNuRSxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQVUsS0FBSztJQUM3RCxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFFcEQsTUFBTVksY0FBYyxJQUFZO1FBQzlCLElBQUlOLGFBQWE7WUFDZkssZUFBZSxJQUFJO1lBQ25CO1FBQ0YsQ0FBQztRQUNEUixPQUFPVSxPQUFPLENBQUM7SUFDakI7SUFFQSxNQUFNQyxlQUFlLElBQU07UUFDekJILGVBQWUsS0FBSztJQUN0QjtJQUVBLE1BQU1JLGVBQWUsSUFBWTtRQUMvQixJQUFJUCxZQUFZUSxJQUFJLE9BQU8sSUFBSTtZQUM3QlQsZUFBZSxJQUFJO1lBQ25CRixrQkFBa0IsSUFBSTtZQUN0QjtRQUNGLENBQUM7UUFDREosd0RBQVcsQ0FBQztJQUNkO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDaUI7Z0JBQVFDLFdBQVU7O2tDQUNqQiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJQyxTQUFTVDs0QkFBYU8sV0FBVTtzQ0FDbkMsNEVBQUN4QixvREFBU0E7Ozs7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ3lCO3dCQUFJRCxXQUFVOzs0QkFBc0I7NEJBQ3hCYixjQUFjLGdCQUFnQixTQUFTOzs7Ozs7O2tDQUdwRCw4REFBQ2M7d0JBQUlELFdBQVU7a0NBQ1osQ0FBQ2YsK0JBQ0E7OzhDQUNFLDhEQUFDTiw0REFBU0E7b0NBQ1J3QixPQUFPZDtvQ0FDUGUsZUFBZWQ7b0NBQ2ZlLGFBQVk7Ozs7Ozs4Q0FFZCw4REFBQzVCLHNEQUFNQTtvQ0FBQ3lCLFNBQVNOOzhDQUFjOzs7Ozs7O3lEQUdqQyw4REFBQ3JCLDZFQUFjQTs0QkFDYlksYUFBYUE7NEJBQ2JDLGdCQUFnQkE7Ozs7O2dDQUVuQjs7Ozs7Ozs7Ozs7OzBCQUlMLDhEQUFDViw0REFBU0E7Z0JBQ1I0QixtQkFBbUIsS0FBSztnQkFDeEJDLE1BQUs7Z0JBQ0xDLE1BQU1qQjtnQkFDTmtCLFNBQVNkOztrQ0FFVCw4REFBQ007d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDVTtnQ0FBR1YsV0FBVTswQ0FBeUI7Ozs7OzswQ0FDdkMsOERBQUNXO2dDQUFFWCxXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7O2tDQUcvQiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDdkIsc0RBQU1BO2dDQUNMeUIsU0FBUyxJQUFNO29DQUNiUDtvQ0FDQVgsT0FBT1UsT0FBTyxDQUFDO2dDQUNqQjswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDakIsc0RBQU1BO2dDQUFDbUMsT0FBTTtnQ0FBVVYsU0FBU1A7MENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pELENBQUM7R0F0RnVCWjs7UUFDUEgsa0RBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZS9SZWNvcmRpbmcudHN4P2ViZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlY29yZGluZ1BhbmVsIGZyb20gXCJAL2NvbXBvbmVudHMvUmVjb3JkaW5ncy9SZWNvcmRpbmdQYW5lbFwiO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQC9pY29ucy9DbG9zZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IEJhc2VNb2RhbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQmFzZU1vZGFsXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQC9jb21wb25lbnRzL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWNvcmRpbmcgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29yZGluZ1BhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc3RhcnRSZWNvcmRpbmcsIHNldFN0YXJ0UmVjb3JkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2lzUmVjb3JkaW5nLCBzZXRJc1JlY29yZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzZXNzaW9uTmFtZSwgc2V0U2Vzc2lvbk5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3Nob3dDb25maXJtLCBzZXRTaG93Q29uZmlybV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKGlzUmVjb3JkaW5nKSB7XG4gICAgICBzZXRTaG93Q29uZmlybSh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlQ29uZmlybSA9ICgpID0+IHtcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRTZXNzaW9uID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmIChzZXNzaW9uTmFtZS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgIHNldElzUmVjb3JkaW5nKHRydWUpO1xuICAgICAgc2V0U3RhcnRSZWNvcmRpbmcodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRvYXN0LmVycm9yKFwiU2Vzc2lvbiBuYW1lIGlzIHJlcXVpcmVkXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTI0IGZsZXggZ2FwLTYgZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1lbmQgIG1iLTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dGV4dC1bMjBweF0gbWItNlwiPlxuICAgICAgICAgIFJlY29yZGluZyB7aXNSZWNvcmRpbmcgPyBcIkluIFByb2dyZXNzXCIgOiBcIlNlc3Npb25cIn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206bWF4LXcteGwgZmxleCBmbGV4LWNvbCBnYXAtOFwiPlxuICAgICAgICAgIHshc3RhcnRSZWNvcmRpbmcgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Nlc3Npb25OYW1lfVxuICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e3NldFNlc3Npb25OYW1lfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgc2Vzc2lvbiBuYW1lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdGFydFNlc3Npb259PlN0YXJ0IFJlY29yZGluZzwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxSZWNvcmRpbmdQYW5lbFxuICAgICAgICAgICAgICBpc1JlY29yZGluZz17aXNSZWNvcmRpbmd9XG4gICAgICAgICAgICAgIHNldElzUmVjb3JkaW5nPXtzZXRJc1JlY29yZGluZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxCYXNlTW9kYWxcbiAgICAgICAgc2hvd0Rpc21pc3NCdXR0b249e2ZhbHNlfVxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICBvcGVuPXtzaG93Q29uZmlybX1cbiAgICAgICAgb25DbG9zZT17Y2xvc2VDb25maXJtfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWItMVwiPkFyZSB5b3Ugc3VyZT88L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj4gQSByZWNvcmRpbmcgc2Vzc2lvbiBpcyBvbmdvaW5nPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjbG9zZUNvbmZpcm0oKTtcbiAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBZZXNcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZGVmYXVsdFwiIG9uQ2xpY2s9e2Nsb3NlQ29uZmlybX0+XG4gICAgICAgICAgICBVaG0sIE5vXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CYXNlTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVjb3JkaW5nUGFuZWwiLCJDbG9zZUljb24iLCJCdXR0b24iLCJCYXNlTW9kYWwiLCJUZXh0RmllbGQiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiUmVjb3JkaW5nUGFnZSIsInJvdXRlciIsInN0YXJ0UmVjb3JkaW5nIiwic2V0U3RhcnRSZWNvcmRpbmciLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwic2Vzc2lvbk5hbWUiLCJzZXRTZXNzaW9uTmFtZSIsInNob3dDb25maXJtIiwic2V0U2hvd0NvbmZpcm0iLCJoYW5kbGVDbG9zZSIsInJlcGxhY2UiLCJjbG9zZUNvbmZpcm0iLCJzdGFydFNlc3Npb24iLCJ0cmltIiwiZXJyb3IiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsInZhbHVlIiwib25JbnB1dENoYW5nZSIsInBsYWNlaG9sZGVyIiwic2hvd0Rpc21pc3NCdXR0b24iLCJzaXplIiwib3BlbiIsIm9uQ2xvc2UiLCJoMyIsInAiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Page/Recording.tsx\n"));

/***/ })

});