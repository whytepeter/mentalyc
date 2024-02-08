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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayAudio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PlayAudio(param) {\n    let { recording  } = param;\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const startPlaying = ()=>{\n        console.log(audioRef, recording === null || recording === void 0 ? void 0 : recording.mp3);\n        if (!audioRef.current) return;\n        setIsPlaying(true);\n        audioRef.current.play();\n    };\n    const stopPlaying = ()=>{\n        setIsPlaying(false);\n        if (!audioRef.current) return;\n        audioRef.current.pause();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_1__.BaseModal, {\n            size: \"small\",\n            open: isPlaying,\n            onClose: stopPlaying,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"font-bold text-xl mb-1\",\n                        children: \"Uploading recording\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center gap-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                        ref: audioRef,\n                        src: recording === null || recording === void 0 ? void 0 : recording.mp3,\n                        controls: true\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            onClick: startPlaying,\n            className: \"bg-\",\n            children: \"Play\"\n        }, void 0, false, {\n            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(PlayAudio, \"sL4xjVLmTF7f1+jWdlUm6K/Qvq0=\");\n_c = PlayAudio;\nvar _c;\n$RefreshReg$(_c, \"PlayAudio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1RhYmxlL1BsYXlBdWRpby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ047QUFFRztBQU1qQyxTQUFTSyxVQUFVLEtBQStCLEVBQUU7UUFBakMsRUFBRUMsVUFBUyxFQUFvQixHQUEvQjs7SUFDaEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFVLEtBQUs7SUFDekQsTUFBTUssV0FBV04sNkNBQU1BLENBQW1CLElBQUk7SUFFOUMsTUFBTU8sZUFBZSxJQUFZO1FBQy9CQyxRQUFRQyxHQUFHLENBQUNILFVBQVVILHNCQUFBQSx1QkFBQUEsS0FBQUEsSUFBQUEsVUFBV08sR0FBRztRQUNwQyxJQUFJLENBQUNKLFNBQVNLLE9BQU8sRUFBRTtRQUN2Qk4sYUFBYSxJQUFJO1FBQ2pCQyxTQUFTSyxPQUFPLENBQUNDLElBQUk7SUFDdkI7SUFFQSxNQUFNQyxjQUFjLElBQVk7UUFDOUJSLGFBQWEsS0FBSztRQUNsQixJQUFJLENBQUNDLFNBQVNLLE9BQU8sRUFBRTtRQUN2QkwsU0FBU0ssT0FBTyxDQUFDRyxLQUFLO0lBQ3hCO0lBRUEscUJBQ0U7a0JBQ0dWLDBCQUNDLDhEQUFDUCw0REFBU0E7WUFBQ2tCLE1BQUs7WUFBUUMsTUFBTVo7WUFBV2EsU0FBU0o7OzhCQUNoRCw4REFBQ0s7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFHRCxXQUFVO2tDQUF5Qjs7Ozs7Ozs7Ozs7OEJBR3pDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQU1DLEtBQUtoQjt3QkFBVWlCLEtBQUtwQixzQkFBQUEsdUJBQUFBLEtBQUFBLElBQUFBLFVBQVdPLEdBQUc7d0JBQUVjLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBSXZELDhEQUFDMUIsc0RBQU1BO1lBQUMyQixTQUFTbEI7WUFBY1ksV0FBVTtzQkFBTTs7Ozs7Z0JBR2hEOztBQUdQLENBQUM7R0FwQ3VCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVjb3JkaW5ncy9UYWJsZS9QbGF5QXVkaW8udHN4PzRkNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGFsIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CYXNlTW9kYWxcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyBSZWNvcmRpbmcgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBBdWRpb1BsYXllclByb3BzID0ge1xuICByZWNvcmRpbmc6IFJlY29yZGluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXlBdWRpbyh7IHJlY29yZGluZyB9OiBBdWRpb1BsYXllclByb3BzKSB7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHN0YXJ0UGxheWluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZyhhdWRpb1JlZiwgcmVjb3JkaW5nPy5tcDMpO1xuICAgIGlmICghYXVkaW9SZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcbiAgfTtcblxuICBjb25zdCBzdG9wUGxheWluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgIGlmICghYXVkaW9SZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNQbGF5aW5nID8gKFxuICAgICAgICA8QmFzZU1vZGFsIHNpemU9XCJzbWFsbFwiIG9wZW49e2lzUGxheWluZ30gb25DbG9zZT17c3RvcFBsYXlpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTFcIj5VcGxvYWRpbmcgcmVjb3JkaW5nPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBzcmM9e3JlY29yZGluZz8ubXAzfSBjb250cm9scz48L2F1ZGlvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jhc2VNb2RhbD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17c3RhcnRQbGF5aW5nfSBjbGFzc05hbWU9XCJiZy1cIj5cbiAgICAgICAgICBQbGF5XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCYXNlTW9kYWwiLCJCdXR0b24iLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUGxheUF1ZGlvIiwicmVjb3JkaW5nIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiYXVkaW9SZWYiLCJzdGFydFBsYXlpbmciLCJjb25zb2xlIiwibG9nIiwibXAzIiwiY3VycmVudCIsInBsYXkiLCJzdG9wUGxheWluZyIsInBhdXNlIiwic2l6ZSIsIm9wZW4iLCJvbkNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJhdWRpbyIsInJlZiIsInNyYyIsImNvbnRyb2xzIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Recordings/Table/PlayAudio.tsx\n"));

/***/ })

});