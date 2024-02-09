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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayAudio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PlayAudio(param) {\n    let { recording  } = param;\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isPaused, setIsPaused] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const startPlaying = ()=>{\n        console.log(audioRef.current);\n        if (!audioRef.current) return;\n        audioRef.current.play();\n        setIsPlaying(true);\n    };\n    const togglePause = ()=>{\n        if (!audioRef.current) return;\n        if (isPaused) {\n            audioRef.current.play();\n        } else {\n            audioRef.current.pause();\n        }\n        setIsPaused((prev)=>!prev);\n    };\n    const closePlayer = ()=>{\n        setIsPlaying(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: startPlaying,\n                className: \"bg-\",\n                children: \"Play\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                className: \"hidden\",\n                ref: audioRef,\n                src: recording.audioUrl,\n                controls: true\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_1__.BaseModal, {\n                size: \"small\",\n                open: isPlaying,\n                onClose: closePlayer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-medium text-xl mb-1\",\n                            children: [\n                                recording === null || recording === void 0 ? void 0 : recording.name,\n                                \" is playing\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            color: isPlaying ? \"default\" : \"primary\",\n                            onClick: togglePause,\n                            className: \"w-8/12\",\n                            children: isPaused ? \"Play\" : \"Pause\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/Table/PlayAudio.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PlayAudio, \"JGZ/m7hKMoK5zsYM3DGbZnxg30Q=\");\n_c = PlayAudio;\nvar _c;\n$RefreshReg$(_c, \"PlayAudio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1RhYmxlL1BsYXlBdWRpby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ047QUFFYztBQU01QyxTQUFTSyxVQUFVLEtBQStCLEVBQUU7UUFBakMsRUFBRUMsVUFBUyxFQUFvQixHQUEvQjs7SUFDaEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFVLEtBQUs7SUFDekQsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFVLEtBQUs7SUFDdkQsTUFBTU8sV0FBV1IsNkNBQU1BLENBQW1CLElBQUk7SUFFOUMsTUFBTVMsZUFBZSxJQUFZO1FBQy9CQyxRQUFRQyxHQUFHLENBQUNILFNBQVNJLE9BQU87UUFDNUIsSUFBSSxDQUFDSixTQUFTSSxPQUFPLEVBQUU7UUFDdkJKLFNBQVNJLE9BQU8sQ0FBQ0MsSUFBSTtRQUNyQlIsYUFBYSxJQUFJO0lBQ25CO0lBRUEsTUFBTVMsY0FBYyxJQUFZO1FBQzlCLElBQUksQ0FBQ04sU0FBU0ksT0FBTyxFQUFFO1FBQ3ZCLElBQUlOLFVBQVU7WUFDWkUsU0FBU0ksT0FBTyxDQUFDQyxJQUFJO1FBQ3ZCLE9BQU87WUFDTEwsU0FBU0ksT0FBTyxDQUFDRyxLQUFLO1FBQ3hCLENBQUM7UUFDRFIsWUFBWSxDQUFDUyxPQUFTLENBQUNBO0lBQ3pCO0lBRUEsTUFBTUMsY0FBYyxJQUFZO1FBQzlCWixhQUFhLEtBQUs7SUFDcEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNQLHNEQUFNQTtnQkFBQ29CLFNBQVNUO2dCQUFjVSxXQUFVOzBCQUFNOzs7Ozs7MEJBSS9DLDhEQUFDQztnQkFDQ0QsV0FBVTtnQkFDVkUsS0FBS2I7Z0JBQ0xjLEtBQUtuQixVQUFVb0IsUUFBUTtnQkFDdkJDLFFBQVE7Ozs7OzswQkFHViw4REFBQzNCLDREQUFTQTtnQkFBQzRCLE1BQUs7Z0JBQVFDLE1BQU10QjtnQkFBV3VCLFNBQVNWOztrQ0FDaEQsOERBQUNXO3dCQUFJVCxXQUFVO2tDQUNiLDRFQUFDVTs0QkFBR1YsV0FBVTs7Z0NBQ1hoQixzQkFBQUEsdUJBQUFBLEtBQUFBLElBQUFBLFVBQVcyQixJQUFJO2dDQUFDOzs7Ozs7Ozs7Ozs7a0NBSXJCLDhEQUFDRjt3QkFBSVQsV0FBVTtrQ0FDYiw0RUFBQ3JCLHNEQUFNQTs0QkFDTGlDLE9BQU8zQixZQUFZLFlBQVksU0FBUzs0QkFDeENjLFNBQVNKOzRCQUNUSyxXQUFVO3NDQUVUYixXQUFXLFNBQVMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QyxDQUFDO0dBMUR1Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVjb3JkaW5ncy9UYWJsZS9QbGF5QXVkaW8udHN4PzRkNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGFsIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CYXNlTW9kYWxcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyBSZWNvcmRpbmcgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEF1ZGlvUGxheWVyUHJvcHMgPSB7XG4gIHJlY29yZGluZzogUmVjb3JkaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheUF1ZGlvKHsgcmVjb3JkaW5nIH06IEF1ZGlvUGxheWVyUHJvcHMpIHtcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2lzUGF1c2VkLCBzZXRJc1BhdXNlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHN0YXJ0UGxheWluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZyhhdWRpb1JlZi5jdXJyZW50KTtcbiAgICBpZiAoIWF1ZGlvUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlUGF1c2UgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSByZXR1cm47XG4gICAgaWYgKGlzUGF1c2VkKSB7XG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xuICAgIH1cbiAgICBzZXRJc1BhdXNlZCgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlUGxheWVyID0gKCk6IHZvaWQgPT4ge1xuICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdGFydFBsYXlpbmd9IGNsYXNzTmFtZT1cImJnLVwiPlxuICAgICAgICBQbGF5XG4gICAgICA8L0J1dHRvbj5cblxuICAgICAgPGF1ZGlvXG4gICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgIHJlZj17YXVkaW9SZWZ9XG4gICAgICAgIHNyYz17cmVjb3JkaW5nLmF1ZGlvVXJsfVxuICAgICAgICBjb250cm9sc1xuICAgICAgPjwvYXVkaW8+XG5cbiAgICAgIDxCYXNlTW9kYWwgc2l6ZT1cInNtYWxsXCIgb3Blbj17aXNQbGF5aW5nfSBvbkNsb3NlPXtjbG9zZVBsYXllcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXhsIG1iLTFcIj5cbiAgICAgICAgICAgIHtyZWNvcmRpbmc/Lm5hbWV9IGlzIHBsYXlpbmdcbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sb3I9e2lzUGxheWluZyA/IFwiZGVmYXVsdFwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQYXVzZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOC8xMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzUGF1c2VkID8gXCJQbGF5XCIgOiBcIlBhdXNlXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CYXNlTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQmFzZU1vZGFsIiwiQnV0dG9uIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlBsYXlBdWRpbyIsInJlY29yZGluZyIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzUGF1c2VkIiwic2V0SXNQYXVzZWQiLCJhdWRpb1JlZiIsInN0YXJ0UGxheWluZyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwicGxheSIsInRvZ2dsZVBhdXNlIiwicGF1c2UiLCJwcmV2IiwiY2xvc2VQbGF5ZXIiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiYXVkaW8iLCJyZWYiLCJzcmMiLCJhdWRpb1VybCIsImNvbnRyb2xzIiwic2l6ZSIsIm9wZW4iLCJvbkNsb3NlIiwiZGl2IiwiaDMiLCJuYW1lIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/Table/PlayAudio.tsx\n"));

/***/ })

});