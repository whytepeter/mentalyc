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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayAudio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PlayAudio(param) {\n    let { recording  } = param;\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const startPlaying = ()=>{\n        if (!audioRef.current) return;\n        console.log(audioRef.current.duration);\n        audioRef.current.play();\n        setIsPlaying(true);\n    };\n    const stopPlaying = ()=>{\n        setIsPlaying(false);\n        if (!audioRef.current) return;\n        audioRef.current.pause();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: startPlaying,\n                className: \"bg-\",\n                children: \"Play\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                className: \"hidden\",\n                ref: audioRef,\n                src: recording.audioUrl,\n                controls: true\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_1__.BaseModal, {\n                size: \"small\",\n                open: isPlaying,\n                onClose: stopPlaying,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-bold text-xl mb-1\",\n                            children: recording === null || recording === void 0 ? void 0 : recording.name\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: isPlaying ? \"Pause\" : \"Play\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PlayAudio, \"sL4xjVLmTF7f1+jWdlUm6K/Qvq0=\");\n_c = PlayAudio;\nvar _c;\n$RefreshReg$(_c, \"PlayAudio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1RhYmxlL1BsYXlBdWRpby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ047QUFFYztBQU01QyxTQUFTSyxVQUFVLEtBQStCLEVBQUU7UUFBakMsRUFBRUMsVUFBUyxFQUFvQixHQUEvQjs7SUFDaEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFVLEtBQUs7SUFDekQsTUFBTUssV0FBV04sNkNBQU1BLENBQW1CLElBQUk7SUFFOUMsTUFBTU8sZUFBZSxJQUFZO1FBQy9CLElBQUksQ0FBQ0QsU0FBU0UsT0FBTyxFQUFFO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNKLFNBQVNFLE9BQU8sQ0FBQ0csUUFBUTtRQUNyQ0wsU0FBU0UsT0FBTyxDQUFDSSxJQUFJO1FBQ3JCUCxhQUFhLElBQUk7SUFDbkI7SUFFQSxNQUFNUSxjQUFjLElBQVk7UUFDOUJSLGFBQWEsS0FBSztRQUNsQixJQUFJLENBQUNDLFNBQVNFLE9BQU8sRUFBRTtRQUN2QkYsU0FBU0UsT0FBTyxDQUFDTSxLQUFLO0lBQ3hCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDaEIsc0RBQU1BO2dCQUFDaUIsU0FBU1I7Z0JBQWNTLFdBQVU7MEJBQU07Ozs7OzswQkFJL0MsOERBQUNDO2dCQUNDRCxXQUFVO2dCQUNWRSxLQUFLWjtnQkFDTGEsS0FBS2hCLFVBQVVpQixRQUFRO2dCQUN2QkMsUUFBUTs7Ozs7OzBCQUdWLDhEQUFDeEIsNERBQVNBO2dCQUFDeUIsTUFBSztnQkFBUUMsTUFBTW5CO2dCQUFXb0IsU0FBU1g7O2tDQUNoRCw4REFBQ1k7d0JBQUlULFdBQVU7a0NBQ2IsNEVBQUNVOzRCQUFHVixXQUFVO3NDQUEwQmIsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxVQUFXd0IsSUFBSTs7Ozs7Ozs7Ozs7a0NBR3pELDhEQUFDRjt3QkFBSVQsV0FBVTtrQ0FDYiw0RUFBQ1M7c0NBQ0MsNEVBQUMzQixzREFBTUE7MENBQUVNLFlBQVksVUFBVSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakQsQ0FBQztHQTNDdUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvVGFibGUvUGxheUF1ZGlvLnRzeD80ZDZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RhbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQmFzZU1vZGFsXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgUmVjb3JkaW5nIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBBdWRpb1BsYXllclByb3BzID0ge1xuICByZWNvcmRpbmc6IFJlY29yZGluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXlBdWRpbyh7IHJlY29yZGluZyB9OiBBdWRpb1BsYXllclByb3BzKSB7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHN0YXJ0UGxheWluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoIWF1ZGlvUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBjb25zb2xlLmxvZyhhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uKTtcbiAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgc3RvcFBsYXlpbmcgPSAoKTogdm9pZCA9PiB7XG4gICAgc2V0SXNQbGF5aW5nKGZhbHNlKTtcbiAgICBpZiAoIWF1ZGlvUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdGFydFBsYXlpbmd9IGNsYXNzTmFtZT1cImJnLVwiPlxuICAgICAgICBQbGF5XG4gICAgICA8L0J1dHRvbj5cblxuICAgICAgPGF1ZGlvXG4gICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgIHJlZj17YXVkaW9SZWZ9XG4gICAgICAgIHNyYz17cmVjb3JkaW5nLmF1ZGlvVXJsfVxuICAgICAgICBjb250cm9sc1xuICAgICAgPjwvYXVkaW8+XG5cbiAgICAgIDxCYXNlTW9kYWwgc2l6ZT1cInNtYWxsXCIgb3Blbj17aXNQbGF5aW5nfSBvbkNsb3NlPXtzdG9wUGxheWluZ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0xXCI+e3JlY29yZGluZz8ubmFtZX08L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b24+e2lzUGxheWluZyA/IFwiUGF1c2VcIiA6IFwiUGxheVwifTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQmFzZU1vZGFsPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJhc2VNb2RhbCIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJQbGF5QXVkaW8iLCJyZWNvcmRpbmciLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJhdWRpb1JlZiIsInN0YXJ0UGxheWluZyIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwiZHVyYXRpb24iLCJwbGF5Iiwic3RvcFBsYXlpbmciLCJwYXVzZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJhdWRpbyIsInJlZiIsInNyYyIsImF1ZGlvVXJsIiwiY29udHJvbHMiLCJzaXplIiwib3BlbiIsIm9uQ2xvc2UiLCJkaXYiLCJoMyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/Table/PlayAudio.tsx\n"));

/***/ })

});