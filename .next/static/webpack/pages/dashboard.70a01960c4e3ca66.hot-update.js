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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayAudio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PlayAudio(param) {\n    let { recording  } = param;\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const startPlaying = ()=>{\n        console.log(audioRef.current);\n        if (!audioRef.current) return;\n        setIsPlaying(true);\n        audioRef.current.play();\n    };\n    const stopPlaying = ()=>{\n        setIsPlaying(false);\n        if (!audioRef.current) return;\n        audioRef.current.pause();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_1__.BaseModal, {\n            size: \"small\",\n            open: isPlaying,\n            onClose: stopPlaying,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"font-bold text-xl mb-1\",\n                        children: \"Uploading recording\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center gap-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                        ref: audioRef,\n                        src: recording === null || recording === void 0 ? void 0 : recording.mp3,\n                        controls: true\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            onClick: startPlaying,\n            className: \"bg-\",\n            children: \"Play\"\n        }, void 0, false, {\n            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(PlayAudio, \"sL4xjVLmTF7f1+jWdlUm6K/Qvq0=\");\n_c = PlayAudio;\nvar _c;\n$RefreshReg$(_c, \"PlayAudio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1RhYmxlL1BsYXlBdWRpby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ047QUFFRztBQU1qQyxTQUFTSyxVQUFVLEtBQStCLEVBQUU7UUFBakMsRUFBRUMsVUFBUyxFQUFvQixHQUEvQjs7SUFDaEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFVLEtBQUs7SUFDekQsTUFBTUssV0FBV04sNkNBQU1BLENBQW1CLElBQUk7SUFFOUMsTUFBTU8sZUFBZSxJQUFZO1FBQy9CQyxRQUFRQyxHQUFHLENBQUNILFNBQVNJLE9BQU87UUFDNUIsSUFBSSxDQUFDSixTQUFTSSxPQUFPLEVBQUU7UUFDdkJMLGFBQWEsSUFBSTtRQUNqQkMsU0FBU0ksT0FBTyxDQUFDQyxJQUFJO0lBQ3ZCO0lBRUEsTUFBTUMsY0FBYyxJQUFZO1FBQzlCUCxhQUFhLEtBQUs7UUFDbEIsSUFBSSxDQUFDQyxTQUFTSSxPQUFPLEVBQUU7UUFDdkJKLFNBQVNJLE9BQU8sQ0FBQ0csS0FBSztJQUN4QjtJQUVBLHFCQUNFO2tCQUNHVCwwQkFDQyw4REFBQ1AsNERBQVNBO1lBQUNpQixNQUFLO1lBQVFDLE1BQU1YO1lBQVdZLFNBQVNKOzs4QkFDaEQsOERBQUNLO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBR0QsV0FBVTtrQ0FBeUI7Ozs7Ozs7Ozs7OzhCQUd6Qyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUFNQyxLQUFLZjt3QkFBVWdCLEtBQUtuQixzQkFBQUEsdUJBQUFBLEtBQUFBLElBQUFBLFVBQVdvQixHQUFHO3dCQUFFQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O2lDQUl2RCw4REFBQzFCLHNEQUFNQTtZQUFDMkIsU0FBU2xCO1lBQWNXLFdBQVU7c0JBQU07Ozs7O2dCQUdoRDs7QUFHUCxDQUFDO0dBcEN1QmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvVGFibGUvUGxheUF1ZGlvLnRzeD80ZDZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RhbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQmFzZU1vZGFsXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgUmVjb3JkaW5nIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgQXVkaW9QbGF5ZXJQcm9wcyA9IHtcbiAgcmVjb3JkaW5nOiBSZWNvcmRpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5QXVkaW8oeyByZWNvcmRpbmcgfTogQXVkaW9QbGF5ZXJQcm9wcykge1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcblxuICBjb25zdCBzdGFydFBsYXlpbmcgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5sb2coYXVkaW9SZWYuY3VycmVudCk7XG4gICAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSByZXR1cm47XG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuICB9O1xuXG4gIGNvbnN0IHN0b3BQbGF5aW5nID0gKCk6IHZvaWQgPT4ge1xuICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gICAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSByZXR1cm47XG4gICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc1BsYXlpbmcgPyAoXG4gICAgICAgIDxCYXNlTW9kYWwgc2l6ZT1cInNtYWxsXCIgb3Blbj17aXNQbGF5aW5nfSBvbkNsb3NlPXtzdG9wUGxheWluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWItMVwiPlVwbG9hZGluZyByZWNvcmRpbmc8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9SZWZ9IHNyYz17cmVjb3JkaW5nPy5tcDN9IGNvbnRyb2xzPjwvYXVkaW8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQmFzZU1vZGFsPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdGFydFBsYXlpbmd9IGNsYXNzTmFtZT1cImJnLVwiPlxuICAgICAgICAgIFBsYXlcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJhc2VNb2RhbCIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJQbGF5QXVkaW8iLCJyZWNvcmRpbmciLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJhdWRpb1JlZiIsInN0YXJ0UGxheWluZyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwicGxheSIsInN0b3BQbGF5aW5nIiwicGF1c2UiLCJzaXplIiwib3BlbiIsIm9uQ2xvc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImF1ZGlvIiwicmVmIiwic3JjIiwibXAzIiwiY29udHJvbHMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Recordings/Table/PlayAudio.tsx\n"));

/***/ })

});