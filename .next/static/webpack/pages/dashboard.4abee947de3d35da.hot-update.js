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

/***/ "./src/components/Recordings/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Recordings/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RecordingList\": function() { return /* binding */ RecordingList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table */ \"./src/components/Recordings/Table/index.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader.tsx\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.ts\");\n/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useSocket */ \"./src/hooks/useSocket.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst data = [\n    {\n        id: \"1\",\n        name: \"Session #1\",\n        timestamp: String(new Date()),\n        length: \"10 min\",\n        status: \"DONE\"\n    },\n    {\n        id: \"2\",\n        name: \"Session #1\",\n        timestamp: String(new Date()),\n        length: \"10 min\",\n        status: \"PROCESSING\"\n    }\n];\nfunction RecordingList() {\n    _s();\n    const socket = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [recordings, setRecordings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchRecordings = async ()=>{\n            setLoading(true);\n            try {\n                const response = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"GET\");\n                if (!response.success) return;\n                setRecordings(response.data);\n            } catch (error) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message || \"An error occurred.\");\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchRecordings();\n        // Listen for 'statusUpdate' event from the server\n        if (!socket) return;\n        socket.on(\"onStatusUpdate\", handleStatusUpdate);\n    }, [\n        socket\n    ]);\n    const handleStatusUpdate = (updatedRecording)=>{\n        setRecordings((prevRecordings)=>{\n            const updatedRecordings = prevRecordings === null || prevRecordings === void 0 ? void 0 : prevRecordings.map((record)=>record.id === updatedRecording.id ? updatedRecording : record);\n            return updatedRecordings;\n        });\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"\".concat(updatedRecording === null || updatedRecording === void 0 ? void 0 : updatedRecording.name, \", done proccessing\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-5 pb-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"font-medium\",\n                    children: \"My Recordings\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                recordings && recordings.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                    recordings: recordings\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, this) : !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center my-4\",\n                    children: \"No Recordings yet\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 23\n                }, this),\n                !recordings && loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center gap-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/index.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RecordingList, \"yWFavR1tBpFXRBpbLMn4i5WQM1g=\", false, function() {\n    return [\n        _hooks_useSocket__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = RecordingList;\nvar _c;\n$RefreshReg$(_c, \"RecordingList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFbkI7QUFDUTtBQUNDO0FBQ1Y7QUFDVztBQUUxQyxNQUFNUSxPQUFtQjtJQUN2QjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsV0FBV0MsT0FBTyxJQUFJQztRQUN0QkMsUUFBUTtRQUNSQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsV0FBV0MsT0FBTyxJQUFJQztRQUN0QkMsUUFBUTtRQUNSQyxRQUFRO0lBQ1Y7Q0FDRDtBQUVNLFNBQVNDLGdCQUFnQjs7SUFDOUIsTUFBTUMsU0FBU1YsNERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1csWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ21CLFNBQVNDLFdBQVcsR0FBR3BCLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUNDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNb0Isa0JBQWtCLFVBQVk7WUFDbENELFdBQVcsSUFBSTtZQUNmLElBQUk7Z0JBQ0YsTUFBTUUsV0FBVyxNQUFNakIsc0RBQUlBLENBQWU7Z0JBQzFDLElBQUksQ0FBQ2lCLFNBQVNDLE9BQU8sRUFBRTtnQkFDdkJMLGNBQWNJLFNBQVNmLElBQUk7WUFDN0IsRUFBRSxPQUFPaUIsT0FBWTtnQkFDbkJyQix3REFBVyxDQUFDcUIsTUFBTUMsT0FBTyxJQUFJO1lBQy9CLFNBQVU7Z0JBQ1JMLFdBQVcsS0FBSztZQUNsQjtRQUNGO1FBRUFDO1FBRUEsa0RBQWtEO1FBQ2xELElBQUksQ0FBQ0wsUUFBUTtRQUNiQSxPQUFPVSxFQUFFLENBQUMsa0JBQWtCQztJQUM5QixHQUFHO1FBQUNYO0tBQU87SUFFWCxNQUFNVyxxQkFBcUIsQ0FBQ0MsbUJBQXlDO1FBQ25FVixjQUFjLENBQUNXLGlCQUFtQjtZQUNoQyxNQUFNQyxvQkFBb0JELDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JFLEdBQUcsQ0FBQyxDQUFDQyxTQUM3Q0EsT0FBT3hCLEVBQUUsS0FBS29CLGlCQUFpQnBCLEVBQUUsR0FBR29CLG1CQUFtQkksTUFBTTtZQUUvRCxPQUFPRjtRQUNUO1FBQ0EzQiwwREFBYSxDQUFDLEdBQTBCLE9BQXZCeUIsNkJBQUFBLDhCQUFBQSxLQUFBQSxJQUFBQSxpQkFBa0JuQixJQUFJLEVBQUM7SUFDMUM7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ3dCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBYzs7Ozs7O2dCQUUzQmpCLGNBQWNBLFdBQVdKLE1BQU0saUJBQzlCLDhEQUFDWCx5Q0FBS0E7b0JBQUNlLFlBQVlBOzs7OzsyQkFFbkIsQ0FBQ0UseUJBQVcsOERBQUNjO29CQUFJQyxXQUFVOzhCQUFtQjs7Ozs7d0JBQy9DO2dCQUVBLENBQUNqQixjQUFjRSx5QkFDZCw4REFBQ2M7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUM5QiwwREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5CLENBQUM7R0F2RGVXOztRQUNDVCx3REFBU0E7OztLQURWUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL2luZGV4LnRzeD9mOTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWNvcmRpbmdzLCBSZWNvcmRpbmcsIFJlc3BvbnNlVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuL1RhYmxlXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuaW1wb3J0IHVzZVNvY2tldCBmcm9tIFwiQC9ob29rcy91c2VTb2NrZXRcIjtcblxuY29uc3QgZGF0YTogUmVjb3JkaW5ncyA9IFtcbiAge1xuICAgIGlkOiBcIjFcIixcbiAgICBuYW1lOiBcIlNlc3Npb24gIzFcIixcbiAgICB0aW1lc3RhbXA6IFN0cmluZyhuZXcgRGF0ZSgpKSxcbiAgICBsZW5ndGg6IFwiMTAgbWluXCIsXG4gICAgc3RhdHVzOiBcIkRPTkVcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIjJcIixcbiAgICBuYW1lOiBcIlNlc3Npb24gIzFcIixcbiAgICB0aW1lc3RhbXA6IFN0cmluZyhuZXcgRGF0ZSgpKSxcbiAgICBsZW5ndGg6IFwiMTAgbWluXCIsXG4gICAgc3RhdHVzOiBcIlBST0NFU1NJTkdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWNvcmRpbmdMaXN0KCkge1xuICBjb25zdCBzb2NrZXQgPSB1c2VTb2NrZXQoKTtcbiAgY29uc3QgW3JlY29yZGluZ3MsIHNldFJlY29yZGluZ3NdID0gdXNlU3RhdGU8UmVjb3JkaW5ncyB8IG51bGw+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUmVjb3JkaW5ncyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHA8UmVzcG9uc2VUeXBlPihcIkdFVFwiKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSByZXR1cm47XG4gICAgICAgIHNldFJlY29yZGluZ3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UgfHwgXCJBbiBlcnJvciBvY2N1cnJlZC5cIik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hSZWNvcmRpbmdzKCk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yICdzdGF0dXNVcGRhdGUnIGV2ZW50IGZyb20gdGhlIHNlcnZlclxuICAgIGlmICghc29ja2V0KSByZXR1cm47XG4gICAgc29ja2V0Lm9uKFwib25TdGF0dXNVcGRhdGVcIiwgaGFuZGxlU3RhdHVzVXBkYXRlKTtcbiAgfSwgW3NvY2tldF0pO1xuXG4gIGNvbnN0IGhhbmRsZVN0YXR1c1VwZGF0ZSA9ICh1cGRhdGVkUmVjb3JkaW5nOiBSZWNvcmRpbmdzW251bWJlcl0pID0+IHtcbiAgICBzZXRSZWNvcmRpbmdzKChwcmV2UmVjb3JkaW5ncykgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlZFJlY29yZGluZ3MgPSBwcmV2UmVjb3JkaW5ncz8ubWFwKChyZWNvcmQpID0+XG4gICAgICAgIHJlY29yZC5pZCA9PT0gdXBkYXRlZFJlY29yZGluZy5pZCA/IHVwZGF0ZWRSZWNvcmRpbmcgOiByZWNvcmRcbiAgICAgICk7XG4gICAgICByZXR1cm4gdXBkYXRlZFJlY29yZGluZ3M7XG4gICAgfSk7XG4gICAgdG9hc3Quc3VjY2VzcyhgJHt1cGRhdGVkUmVjb3JkaW5nPy5uYW1lfSwgZG9uZSBwcm9jY2Vzc2luZ2ApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNSBwYi04XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPk15IFJlY29yZGluZ3M8L2gzPlxuXG4gICAgICAgIHtyZWNvcmRpbmdzICYmIHJlY29yZGluZ3MubGVuZ3RoID8gKFxuICAgICAgICAgIDxUYWJsZSByZWNvcmRpbmdzPXtyZWNvcmRpbmdzfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgICFsb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktNFwiPk5vIFJlY29yZGluZ3MgeWV0PC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFyZWNvcmRpbmdzICYmIGxvYWRpbmcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUYWJsZSIsInRvYXN0IiwiTG9hZGVyIiwiaHR0cCIsInVzZVNvY2tldCIsImRhdGEiLCJpZCIsIm5hbWUiLCJ0aW1lc3RhbXAiLCJTdHJpbmciLCJEYXRlIiwibGVuZ3RoIiwic3RhdHVzIiwiUmVjb3JkaW5nTGlzdCIsInNvY2tldCIsInJlY29yZGluZ3MiLCJzZXRSZWNvcmRpbmdzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFJlY29yZGluZ3MiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJvbiIsImhhbmRsZVN0YXR1c1VwZGF0ZSIsInVwZGF0ZWRSZWNvcmRpbmciLCJwcmV2UmVjb3JkaW5ncyIsInVwZGF0ZWRSZWNvcmRpbmdzIiwibWFwIiwicmVjb3JkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/index.tsx\n"));

/***/ })

});