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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUpload\": function() { return /* binding */ useUpload; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.ts\");\n\n\n\n\n\nconst useUpload = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const uploadRecording = async (recordedBlob, sessionName, recordingLength)=>{\n        if (!recordedBlob) return;\n        try {\n            setIsUploading(true);\n            const length = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.calculateLength)(recordingLength) || \"N/A\";\n            const timestamp = new Date().toLocaleString();\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob);\n            formData.append(\"name\", sessionName);\n            formData.append(\"length\", length);\n            formData.append(\"timestamp\", timestamp);\n            const headers = {\n                \"Content-Type\": \"multipart/form-data\"\n            };\n            const res = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"POST\", formData, headers);\n            if (res.success) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(res === null || res === void 0 ? void 0 : res.message);\n                router.replace(\"/dashboard\");\n            } else {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Failed to upload recording\");\n            }\n        } catch (error) {\n            console.error(\"Error uploading recording:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error === null || error === void 0 ? void 0 : error.message);\n        } finally{\n            setIsUploading(false);\n        }\n    };\n    return {\n        uploadRecording,\n        isUploading\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVXBsb2FkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDZTtBQUVmO0FBQ1Q7QUFFeEIsTUFBTUssWUFBWSxJQUFNO0lBQzdCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUVwRCxNQUFNUyxrQkFBa0IsT0FDdEJDLGNBQ0FDLGFBQ0FDLGtCQUNHO1FBQ0gsSUFBSSxDQUFDRixjQUFjO1FBRW5CLElBQUk7WUFDRkYsZUFBZSxJQUFJO1lBRW5CLE1BQU1LLFNBQVNYLHVEQUFlQSxDQUFDVSxvQkFBb0I7WUFDbkQsTUFBTUUsWUFBWSxJQUFJQyxPQUFPQyxjQUFjO1lBRTNDLE1BQU1DLFdBQVcsSUFBSUM7WUFDckJELFNBQVNFLE1BQU0sQ0FBQyxTQUFTVDtZQUN6Qk8sU0FBU0UsTUFBTSxDQUFDLFFBQVFSO1lBQ3hCTSxTQUFTRSxNQUFNLENBQUMsVUFBVU47WUFDMUJJLFNBQVNFLE1BQU0sQ0FBQyxhQUFhTDtZQUU3QixNQUFNTSxVQUFVO2dCQUNkLGdCQUFnQjtZQUNsQjtZQUVBLE1BQU1DLE1BQU0sTUFBTWpCLHNEQUFJQSxDQUFlLFFBQVFhLFVBQVVHO1lBRXZELElBQUlDLElBQUlDLE9BQU8sRUFBRTtnQkFDZm5CLDBEQUFhLENBQUNrQixnQkFBQUEsaUJBQUFBLEtBQUFBLElBQUFBLElBQUtFLE9BQU87Z0JBQzFCakIsT0FBT2tCLE9BQU8sQ0FBQztZQUNqQixPQUFPO2dCQUNMckIsd0RBQVcsQ0FBQztZQUNkLENBQUM7UUFDSCxFQUFFLE9BQU9zQixPQUFZO1lBQ25CQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtZQUM1Q3RCLHdEQUFXLENBQUNzQixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9GLE9BQU87UUFDNUIsU0FBVTtZQUNSZixlQUFlLEtBQUs7UUFDdEI7SUFDRjtJQUVBLE9BQU87UUFBRUM7UUFBaUJGO0lBQVk7QUFDeEMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlVXBsb2FkLnRzPzRlYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVMZW5ndGgsIHJhbmRvbVJhbmdlIH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCB7IFJlc3BvbnNlVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcbmltcG9ydCBodHRwIGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuXG5leHBvcnQgY29uc3QgdXNlVXBsb2FkID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdXBsb2FkUmVjb3JkaW5nID0gYXN5bmMgKFxuICAgIHJlY29yZGVkQmxvYjogQmxvYixcbiAgICBzZXNzaW9uTmFtZTogc3RyaW5nLFxuICAgIHJlY29yZGluZ0xlbmd0aDogbnVtYmVyXG4gICkgPT4ge1xuICAgIGlmICghcmVjb3JkZWRCbG9iKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IGxlbmd0aCA9IGNhbGN1bGF0ZUxlbmd0aChyZWNvcmRpbmdMZW5ndGgpIHx8IFwiTi9BXCI7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdWRpb1wiLCByZWNvcmRlZEJsb2IpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwibmFtZVwiLCBzZXNzaW9uTmFtZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJsZW5ndGhcIiwgbGVuZ3RoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInRpbWVzdGFtcFwiLCB0aW1lc3RhbXApO1xuXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHA8UmVzcG9uc2VUeXBlPihcIlBPU1RcIiwgZm9ybURhdGEsIGhlYWRlcnMpO1xuXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXM/Lm1lc3NhZ2UpO1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdC5lcnJvcihcIkZhaWxlZCB0byB1cGxvYWQgcmVjb3JkaW5nXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGxvYWRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgICB0b2FzdC5lcnJvcihlcnJvcj8ubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBsb2FkUmVjb3JkaW5nLCBpc1VwbG9hZGluZyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImNhbGN1bGF0ZUxlbmd0aCIsInRvYXN0IiwiaHR0cCIsInVzZVVwbG9hZCIsInJvdXRlciIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJ1cGxvYWRSZWNvcmRpbmciLCJyZWNvcmRlZEJsb2IiLCJzZXNzaW9uTmFtZSIsInJlY29yZGluZ0xlbmd0aCIsImxlbmd0aCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJoZWFkZXJzIiwicmVzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJyZXBsYWNlIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useUpload.ts\n"));

/***/ })

});