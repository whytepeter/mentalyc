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

/***/ "./src/hooks/useUpload.ts":
/*!********************************!*\
  !*** ./src/hooks/useUpload.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUpload\": function() { return /* binding */ useUpload; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.ts\");\n\n\n\n\n\nconst useUpload = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const uploadRecording = async (recordedBlob, sessionName, recordingLength)=>{\n        if (!recordedBlob) return;\n        try {\n            setIsUploading(true);\n            const length = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.formatAudioLength)(recordingLength) || \"N/A\";\n            const timestamp = new Date().toLocaleString();\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob);\n            formData.append(\"name\", sessionName);\n            formData.append(\"length\", length);\n            formData.append(\"timestamp\", timestamp);\n            const headers = {\n                \"Content-Type\": \"multipart/form-data\"\n            };\n            const res = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"POST\", formData, headers);\n            if (res.success) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(res === null || res === void 0 ? void 0 : res.message);\n                router.replace(\"/dashboard\");\n            } else {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Failed to upload recording\");\n            }\n        } catch (error) {\n            console.error(\"Error uploading recording:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error === null || error === void 0 ? void 0 : error.message);\n        } finally{\n            setIsUploading(false);\n        }\n    };\n    return {\n        uploadRecording,\n        isUploading\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVXBsb2FkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDSTtBQUVKO0FBQ1Q7QUFFeEIsTUFBTUssWUFBWSxJQUFNO0lBQzdCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUVwRCxNQUFNUyxrQkFBa0IsT0FDdEJDLGNBQ0FDLGFBQ0FDLGtCQUNHO1FBQ0gsSUFBSSxDQUFDRixjQUFjO1FBRW5CLElBQUk7WUFDRkYsZUFBZSxJQUFJO1lBRW5CLE1BQU1LLFNBQVNYLHlEQUFpQkEsQ0FBQ1Usb0JBQW9CO1lBQ3JELE1BQU1FLFlBQVksSUFBSUMsT0FBT0MsY0FBYztZQUUzQyxNQUFNQyxXQUFXLElBQUlDO1lBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU1Q7WUFDekJPLFNBQVNFLE1BQU0sQ0FBQyxRQUFRUjtZQUN4Qk0sU0FBU0UsTUFBTSxDQUFDLFVBQVVOO1lBQzFCSSxTQUFTRSxNQUFNLENBQUMsYUFBYUw7WUFFN0IsTUFBTU0sVUFBVTtnQkFDZCxnQkFBZ0I7WUFDbEI7WUFFQSxNQUFNQyxNQUFNLE1BQU1qQixzREFBSUEsQ0FBZSxRQUFRYSxVQUFVRztZQUV2RCxJQUFJQyxJQUFJQyxPQUFPLEVBQUU7Z0JBQ2ZuQiwwREFBYSxDQUFDa0IsZ0JBQUFBLGlCQUFBQSxLQUFBQSxJQUFBQSxJQUFLRSxPQUFPO2dCQUMxQmpCLE9BQU9rQixPQUFPLENBQUM7WUFDakIsT0FBTztnQkFDTHJCLHdEQUFXLENBQUM7WUFDZCxDQUFDO1FBQ0gsRUFBRSxPQUFPc0IsT0FBWTtZQUNuQkMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7WUFDNUN0Qix3REFBVyxDQUFDc0Isa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPRixPQUFPO1FBQzVCLFNBQVU7WUFDUmYsZUFBZSxLQUFLO1FBQ3RCO0lBQ0Y7SUFFQSxPQUFPO1FBQUVDO1FBQWlCRjtJQUFZO0FBQ3hDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVVwbG9hZC50cz80ZWExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZm9ybWF0QXVkaW9MZW5ndGggfSBmcm9tIFwiQC91dGlsc1wiO1xuaW1wb3J0IHsgUmVzcG9uc2VUeXBlIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VVcGxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB1cGxvYWRSZWNvcmRpbmcgPSBhc3luYyAoXG4gICAgcmVjb3JkZWRCbG9iOiBCbG9iLFxuICAgIHNlc3Npb25OYW1lOiBzdHJpbmcsXG4gICAgcmVjb3JkaW5nTGVuZ3RoOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgaWYgKCFyZWNvcmRlZEJsb2IpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgbGVuZ3RoID0gZm9ybWF0QXVkaW9MZW5ndGgocmVjb3JkaW5nTGVuZ3RoKSB8fCBcIk4vQVwiO1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYXVkaW9cIiwgcmVjb3JkZWRCbG9iKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgc2Vzc2lvbk5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwibGVuZ3RoXCIsIGxlbmd0aCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0aW1lc3RhbXBcIiwgdGltZXN0YW1wKTtcblxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwPFJlc3BvbnNlVHlwZT4oXCJQT1NUXCIsIGZvcm1EYXRhLCBoZWFkZXJzKTtcblxuICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzPy5tZXNzYWdlKTtcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gdXBsb2FkIHJlY29yZGluZ1wiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBsb2FkaW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgICAgdG9hc3QuZXJyb3IoZXJyb3I/Lm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHVwbG9hZFJlY29yZGluZywgaXNVcGxvYWRpbmcgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJmb3JtYXRBdWRpb0xlbmd0aCIsInRvYXN0IiwiaHR0cCIsInVzZVVwbG9hZCIsInJvdXRlciIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJ1cGxvYWRSZWNvcmRpbmciLCJyZWNvcmRlZEJsb2IiLCJzZXNzaW9uTmFtZSIsInJlY29yZGluZ0xlbmd0aCIsImxlbmd0aCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJoZWFkZXJzIiwicmVzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJyZXBsYWNlIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useUpload.ts\n"));

/***/ })

});