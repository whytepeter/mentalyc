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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n/* harmony import */ var _icons_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/Close */ \"./src/icons/Close.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/TextField */ \"./src/components/TextField.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction RecordingPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const [isRecording, setIsRecording] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [sessionName, setSessionName] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [showConfirm, setShowConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const handleClose = ()=>{\n        if (isRecording) {\n            setShowConfirm(true);\n            return;\n        }\n        router.replace(\"/dashboard\");\n    };\n    const closeConfirm = ()=>{\n        setShowConfirm(false);\n    };\n    const startSession = ()=>{\n        if (sessionName.trim() !== \"\") {\n            setIsRecording(true);\n            return;\n        }\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.error(\"Session name is required\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mb-24 flex gap-6 flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-end  mb-6 items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: handleClose,\n                            className: \"cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Close__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:text-[20px] mb-6\",\n                        children: [\n                            \"Recording \",\n                            isRecording ? \"In Progress\" : \"Session\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full sm:max-w-xl flex flex-col gap-8\",\n                        children: !isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextField__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                                    value: sessionName,\n                                    onInputChange: setSessionName,\n                                    placeholder: \"Enter session name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    onClick: startSession,\n                                    children: \"Start Recording\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            isRecording: isRecording,\n                            setIsRecording: setIsRecording\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_4__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: showConfirm,\n                onClose: closeConfirm,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-6 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-xl mb-1\",\n                                children: \"Are you sure?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400\",\n                                children: \" A recording session is ongoing\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                onClick: ()=>{\n                                    closeConfirm();\n                                    router.replace(\"/dashboard\");\n                                },\n                                children: \"Yes\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"default\",\n                                onClick: closeConfirm,\n                                children: \"Uhm, No\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Page/Recording.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingPage, \"vT8Zm8JoIPKWInhh7UNcYMRnffc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = RecordingPage;\nvar _c;\n$RefreshReg$(_c, \"RecordingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlL1JlY29yZGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9FO0FBQzlCO0FBQ087QUFDTTtBQUNBO0FBQ1g7QUFDSTtBQUVKO0FBRXpCLFNBQVNRLGdCQUFnQjs7SUFDdEMsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBVSxLQUFLO0lBQzdELE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUVwRCxNQUFNVSxjQUFjLElBQVk7UUFDOUIsSUFBSU4sYUFBYTtZQUNmSyxlQUFlLElBQUk7WUFDbkI7UUFDRixDQUFDO1FBQ0ROLE9BQU9RLE9BQU8sQ0FBQztJQUNqQjtJQUVBLE1BQU1DLGVBQWUsSUFBTTtRQUN6QkgsZUFBZSxLQUFLO0lBQ3RCO0lBRUEsTUFBTUksZUFBZSxJQUFZO1FBQy9CLElBQUlQLFlBQVlRLElBQUksT0FBTyxJQUFJO1lBQzdCVCxlQUFlLElBQUk7WUFDbkI7UUFDRixDQUFDO1FBQ0RKLHdEQUFXLENBQUM7SUFDZDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2U7Z0JBQVFDLFdBQVU7O2tDQUNqQiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJQyxTQUFTVDs0QkFBYU8sV0FBVTtzQ0FDbkMsNEVBQUN0QixvREFBU0E7Ozs7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ3VCO3dCQUFJRCxXQUFVOzs0QkFBc0I7NEJBQ3hCYixjQUFjLGdCQUFnQixTQUFTOzs7Ozs7O2tDQUdwRCw4REFBQ2M7d0JBQUlELFdBQVU7a0NBQ1osQ0FBQ2IsNEJBQ0E7OzhDQUNFLDhEQUFDTiw0REFBU0E7b0NBQ1JzQixPQUFPZDtvQ0FDUGUsZUFBZWQ7b0NBQ2ZlLGFBQVk7Ozs7Ozs4Q0FFZCw4REFBQzFCLHNEQUFNQTtvQ0FBQ3VCLFNBQVNOOzhDQUFjOzs7Ozs7O3lEQUdqQyw4REFBQ25CLDZFQUFjQTs0QkFDYlUsYUFBYUE7NEJBQ2JDLGdCQUFnQkE7Ozs7O2dDQUVuQjs7Ozs7Ozs7Ozs7OzBCQUlMLDhEQUFDUiw0REFBU0E7Z0JBQ1IwQixtQkFBbUIsS0FBSztnQkFDeEJDLE1BQUs7Z0JBQ0xDLE1BQU1qQjtnQkFDTmtCLFNBQVNkOztrQ0FFVCw4REFBQ007d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDVTtnQ0FBR1YsV0FBVTswQ0FBeUI7Ozs7OzswQ0FDdkMsOERBQUNXO2dDQUFFWCxXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7O2tDQUcvQiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDckIsc0RBQU1BO2dDQUNMdUIsU0FBUyxJQUFNO29DQUNiUDtvQ0FDQVQsT0FBT1EsT0FBTyxDQUFDO2dDQUNqQjswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDZixzREFBTUE7Z0NBQUNpQyxPQUFNO2dDQUFVVixTQUFTUDswQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekQsQ0FBQztHQXBGdUJWOztRQUNQSCxrREFBU0E7OztLQURGRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYWdlL1JlY29yZGluZy50c3g/ZWJkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVjb3JkaW5nUGFuZWwgZnJvbSBcIkAvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsXCI7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAL2ljb25zL0Nsb3NlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgQmFzZU1vZGFsIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CYXNlTW9kYWxcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvVGV4dEZpZWxkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlY29yZGluZyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3JkaW5nUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpc1JlY29yZGluZywgc2V0SXNSZWNvcmRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2Vzc2lvbk5hbWUsIHNldFNlc3Npb25OYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtzaG93Q29uZmlybSwgc2V0U2hvd0NvbmZpcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmIChpc1JlY29yZGluZykge1xuICAgICAgc2V0U2hvd0NvbmZpcm0odHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0U2Vzc2lvbiA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoc2Vzc2lvbk5hbWUudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICBzZXRJc1JlY29yZGluZyh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdG9hc3QuZXJyb3IoXCJTZXNzaW9uIG5hbWUgaXMgcmVxdWlyZWRcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItMjQgZmxleCBnYXAtNiBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZCAgbWItNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp0ZXh0LVsyMHB4XSBtYi02XCI+XG4gICAgICAgICAgUmVjb3JkaW5nIHtpc1JlY29yZGluZyA/IFwiSW4gUHJvZ3Jlc3NcIiA6IFwiU2Vzc2lvblwifVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTptYXgtdy14bCBmbGV4IGZsZXgtY29sIGdhcC04XCI+XG4gICAgICAgICAgeyFpc1JlY29yZGluZyA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2Vzc2lvbk5hbWV9XG4gICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17c2V0U2Vzc2lvbk5hbWV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBzZXNzaW9uIG5hbWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N0YXJ0U2Vzc2lvbn0+U3RhcnQgUmVjb3JkaW5nPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlY29yZGluZ1BhbmVsXG4gICAgICAgICAgICAgIGlzUmVjb3JkaW5nPXtpc1JlY29yZGluZ31cbiAgICAgICAgICAgICAgc2V0SXNSZWNvcmRpbmc9e3NldElzUmVjb3JkaW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPEJhc2VNb2RhbFxuICAgICAgICBzaG93RGlzbWlzc0J1dHRvbj17ZmFsc2V9XG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIG9wZW49e3Nob3dDb25maXJtfVxuICAgICAgICBvbkNsb3NlPXtjbG9zZUNvbmZpcm19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0xXCI+QXJlIHlvdSBzdXJlPzwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPiBBIHJlY29yZGluZyBzZXNzaW9uIGlzIG9uZ29pbmc8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNsb3NlQ29uZmlybSgpO1xuICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFllc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJkZWZhdWx0XCIgb25DbGljaz17Y2xvc2VDb25maXJtfT5cbiAgICAgICAgICAgIFVobSwgTm9cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Jhc2VNb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWNvcmRpbmdQYW5lbCIsIkNsb3NlSWNvbiIsIkJ1dHRvbiIsIkJhc2VNb2RhbCIsIlRleHRGaWVsZCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidG9hc3QiLCJSZWNvcmRpbmdQYWdlIiwicm91dGVyIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsInNlc3Npb25OYW1lIiwic2V0U2Vzc2lvbk5hbWUiLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwiaGFuZGxlQ2xvc2UiLCJyZXBsYWNlIiwiY2xvc2VDb25maXJtIiwic3RhcnRTZXNzaW9uIiwidHJpbSIsImVycm9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJ2YWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNob3dEaXNtaXNzQnV0dG9uIiwic2l6ZSIsIm9wZW4iLCJvbkNsb3NlIiwiaDMiLCJwIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Page/Recording.tsx\n"));

/***/ })

});