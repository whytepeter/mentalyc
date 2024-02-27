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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayAudio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/icons/Close */ \"./src/icons/Close.tsx\");\n/* harmony import */ var _icons_Play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/Play */ \"./src/icons/Play.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PlayAudio(param) {\n    let { recording  } = param;\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const audioUrl = \"\".concat(\"http://localhost:8000\", \"/\").concat(recording.audioUrl);\n    const togglePlay = ()=>{\n        if (!audioRef.current) return;\n        if (!isPlaying) {\n            audioRef.current.play();\n        } else {\n            audioRef.current.pause();\n        }\n        setIsPlaying((prev)=>!prev);\n    };\n    const closePlayer = ()=>{\n        setIsPlaying(false);\n        if (!audioRef.current) return;\n        audioRef.current.pause();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: togglePlay,\n                className: \"flex items-center gap-1 text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Play__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    \" Play\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(isPlaying ? \"flex\" : \"hidden\", \" fixed inset-0 backdrop-blur-[1px] bg-black/10  items-center justify-center\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-md bg-white rounded-2xl p-4 border flex flex-col gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-base sm:text-lg text-center flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: recording === null || recording === void 0 ? void 0 : recording.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: closePlayer,\n                                    className: \"cursor-pointer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Close__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                            className: \"\",\n                            ref: audioRef,\n                            src: audioUrl,\n                            controls: true\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PlayAudio, \"sL4xjVLmTF7f1+jWdlUm6K/Qvq0=\");\n_c = PlayAudio;\nvar _c;\n$RefreshReg$(_c, \"PlayAudio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1RhYmxlL1BsYXlBdWRpby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0Y7QUFFWTtBQU1qQyxTQUFTSyxVQUFVLEtBQStCLEVBQUU7UUFBakMsRUFBRUMsVUFBUyxFQUFvQixHQUEvQjs7SUFDaEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFVLEtBQUs7SUFDekQsTUFBTUssV0FBV04sNkNBQU1BLENBQW1CLElBQUk7SUFFOUMsTUFBTU8sV0FBVyxHQUFzQ0osT0FBbkNLLHVCQUErQixFQUFDLEtBQXNCLE9BQW5CTCxVQUFVSSxRQUFRO0lBRXpFLE1BQU1JLGFBQWEsSUFBWTtRQUM3QixJQUFJLENBQUNMLFNBQVNNLE9BQU8sRUFBRTtRQUN2QixJQUFJLENBQUNSLFdBQVc7WUFDZEUsU0FBU00sT0FBTyxDQUFDQyxJQUFJO1FBQ3ZCLE9BQU87WUFDTFAsU0FBU00sT0FBTyxDQUFDRSxLQUFLO1FBQ3hCLENBQUM7UUFFRFQsYUFBYSxDQUFDVSxPQUFTLENBQUNBO0lBQzFCO0lBRUEsTUFBTUMsY0FBYyxJQUFZO1FBQzlCWCxhQUFhLEtBQUs7UUFDbEIsSUFBSSxDQUFDQyxTQUFTTSxPQUFPLEVBQUU7UUFDdkJOLFNBQVNNLE9BQU8sQ0FBQ0UsS0FBSztJQUN4QjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0c7Z0JBQU9DLFNBQVNQO2dCQUFZUSxXQUFVOztrQ0FDckMsOERBQUNyQixtREFBUUE7Ozs7O29CQUFHOzs7Ozs7OzBCQUdkLDhEQUFDc0I7Z0JBQ0NELFdBQVcsR0FFVixPQURDZixZQUFZLFNBQVMsUUFBUSxFQUM5QjswQkFFRCw0RUFBQ2dCO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDRTs4Q0FBTWxCLHNCQUFBQSx1QkFBQUEsS0FBQUEsSUFBQUEsVUFBV21CLElBQUk7Ozs7Ozs4Q0FDdEIsOERBQUNEO29DQUFLSCxTQUFTRjtvQ0FBYUcsV0FBVTs4Q0FDcEMsNEVBQUN0QixvREFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUMwQjs0QkFBTUosV0FBVTs0QkFBR0ssS0FBS2xCOzRCQUFVbUIsS0FBS2xCOzRCQUFVbUIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRSxDQUFDO0dBOUN1QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvVGFibGUvUGxheUF1ZGlvLnRzeD80ZDZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbG9zZUljb24gZnJvbSBcIkAvaWNvbnMvQ2xvc2VcIjtcbmltcG9ydCBQbGF5SWNvbiBmcm9tIFwiQC9pY29ucy9QbGF5XCI7XG5pbXBvcnQgeyBSZWNvcmRpbmcgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBBdWRpb1BsYXllclByb3BzID0ge1xuICByZWNvcmRpbmc6IFJlY29yZGluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXlBdWRpbyh7IHJlY29yZGluZyB9OiBBdWRpb1BsYXllclByb3BzKSB7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGF1ZGlvVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vJHtyZWNvcmRpbmcuYXVkaW9Vcmx9YDtcblxuICBjb25zdCB0b2dnbGVQbGF5ID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICghYXVkaW9SZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGlmICghaXNQbGF5aW5nKSB7XG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xuICAgIH1cblxuICAgIHNldElzUGxheWluZygocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlUGxheWVyID0gKCk6IHZvaWQgPT4ge1xuICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gICAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSByZXR1cm47XG4gICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlUGxheX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1zbVwiPlxuICAgICAgICA8UGxheUljb24gLz4gUGxheVxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICBpc1BsYXlpbmcgPyBcImZsZXhcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgfSBmaXhlZCBpbnNldC0wIGJhY2tkcm9wLWJsdXItWzFweF0gYmctYmxhY2svMTAgIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcmB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgYmctd2hpdGUgcm91bmRlZC0yeGwgcC00IGJvcmRlciBmbGV4IGZsZXgtY29sIGdhcC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyB0ZXh0LWNlbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxzcGFuPntyZWNvcmRpbmc/Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Y2xvc2VQbGF5ZXJ9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YXVkaW8gY2xhc3NOYW1lPVwiXCIgcmVmPXthdWRpb1JlZn0gc3JjPXthdWRpb1VybH0gY29udHJvbHM+PC9hdWRpbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDbG9zZUljb24iLCJQbGF5SWNvbiIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJQbGF5QXVkaW8iLCJyZWNvcmRpbmciLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJhdWRpb1JlZiIsImF1ZGlvVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJ0b2dnbGVQbGF5IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsInByZXYiLCJjbG9zZVBsYXllciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwibmFtZSIsImF1ZGlvIiwicmVmIiwic3JjIiwiY29udHJvbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/Table/PlayAudio.tsx\n"));

/***/ }),

/***/ "./src/hooks/useSocket.ts":
/*!********************************!*\
  !*** ./src/hooks/useSocket.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useSocket; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\nconst socketUrl = \"http://localhost:8000\";\nfunction useSocket() {\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const socketIo = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(socketUrl);\n        setSocket(socketIo);\n        return ()=>{\n            socketIo.disconnect();\n        };\n    }, []);\n    return socket;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlU29ja2V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUU5QyxNQUFNSSxZQUFZQyx1QkFBK0I7QUFFbEMsU0FBU0csWUFBWTtJQUNsQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQWdCLElBQUk7SUFFeERDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUyxXQUFXUiw0REFBRUEsQ0FBQ0M7UUFDcEJNLFVBQVVDO1FBRVYsT0FBTyxJQUFNO1lBQ1hBLFNBQVNDLFVBQVU7UUFDckI7SUFDRixHQUFHLEVBQUU7SUFFTCxPQUFPSDtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVNvY2tldC50cz8wNDY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW8sIHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuY29uc3Qgc29ja2V0VXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNvY2tldCgpIHtcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlPFNvY2tldCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc29ja2V0SW8gPSBpbyhzb2NrZXRVcmwpO1xuICAgIHNldFNvY2tldChzb2NrZXRJbyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0SW8uZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gc29ja2V0O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbyIsInNvY2tldFVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwidXNlU29ja2V0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic29ja2V0SW8iLCJkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useSocket.ts\n"));

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.baseURL = \"\".concat(\"http://localhost:8000\", \"/api/recordings\");\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.post[\"Content-Type\"] = \"application/json\";\nconst http = async (method, data, headers, onUploadProgress)=>{\n    try {\n        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            method,\n            data,\n            headers,\n            onUploadProgress\n        });\n        return response.data;\n    } catch (error) {\n        if (error.request) {\n            // Network error\n            console.error(\"Network error:\", error.request);\n        }\n        throw error;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (http);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWtEO0FBRWxEQSw4REFBc0IsR0FBRyxHQUFtQyxPQUFoQ0csdUJBQStCLEVBQUM7QUFDNURILG1GQUEyQyxHQUFHO0FBRTlDLE1BQU1RLE9BQU8sT0FDWEMsUUFDQUMsTUFDQUosU0FDQUssbUJBQ2U7SUFDZixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNWixpREFBS0EsQ0FBQztZQUMzQlM7WUFDQUM7WUFDQUo7WUFDQUs7UUFDRjtRQUVBLE9BQU9DLFNBQVNGLElBQUk7SUFDdEIsRUFBRSxPQUFPRyxPQUFZO1FBQ25CLElBQUlBLE1BQU1DLE9BQU8sRUFBRTtZQUNqQixnQkFBZ0I7WUFDaEJDLFFBQVFGLEtBQUssQ0FBQyxrQkFBa0JBLE1BQU1DLE9BQU87UUFDL0MsQ0FBQztRQUVELE1BQU1ELE1BQU07SUFDZDtBQUNGO0FBRUEsK0RBQWVMLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2FwaS50cz9iOTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1Byb2dyZXNzRXZlbnQgfSBmcm9tIFwiYXhpb3NcIjtcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS9yZWNvcmRpbmdzYDtcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuXG5jb25zdCBodHRwID0gYXN5bmMgPFQ+KFxuICBtZXRob2Q6IFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiUFVUXCIgfCBcIkRFTEVURVwiLFxuICBkYXRhPzogYW55LFxuICBoZWFkZXJzPzogYW55LFxuICBvblVwbG9hZFByb2dyZXNzPzogKHByb2dyZXNzRXZlbnQ6IEF4aW9zUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZFxuKTogUHJvbWlzZTxUPiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICBtZXRob2QsXG4gICAgICBkYXRhLFxuICAgICAgaGVhZGVycyxcbiAgICAgIG9uVXBsb2FkUHJvZ3Jlc3MsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAvLyBOZXR3b3JrIGVycm9yXG4gICAgICBjb25zb2xlLmVycm9yKFwiTmV0d29yayBlcnJvcjpcIiwgZXJyb3IucmVxdWVzdCk7XG4gICAgfVxuXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHA7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImhlYWRlcnMiLCJwb3N0IiwiaHR0cCIsIm1ldGhvZCIsImRhdGEiLCJvblVwbG9hZFByb2dyZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsInJlcXVlc3QiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/api.ts\n"));

/***/ })

});