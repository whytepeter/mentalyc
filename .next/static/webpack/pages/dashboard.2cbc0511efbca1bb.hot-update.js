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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUpload\": function() { return /* binding */ useUpload; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.ts\");\n\n\n\n\n\nconst useUpload = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const uploadRecording = async (recordedBlob, sessionName)=>{\n        if (!recordedBlob) return;\n        try {\n            setIsUploading(true);\n            console.log(isUploading);\n            const length = await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.calculateLength)(recordedBlob) || \"N/A\";\n            const timestamp = new Date().toLocaleString();\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob);\n            formData.append(\"name\", sessionName);\n            formData.append(\"length\", length);\n            formData.append(\"timestamp\", timestamp);\n            const headers = {\n                \"Content-Type\": \"multipart/form-data\"\n            };\n            const uploadTime = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.randomRange)(10000, 30000);\n            setTimeout(async ()=>{\n                const res = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"POST\", formData, headers);\n                if (res.success) {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(res === null || res === void 0 ? void 0 : res.message);\n                    router.replace(\"/dashboard\");\n                } else {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Failed to upload recording\");\n                }\n                setIsUploading(false);\n            }, uploadTime);\n        } catch (error) {\n            setIsUploading(false);\n            console.error(\"Error uploading recording:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error === null || error === void 0 ? void 0 : error.message);\n        }\n    };\n    return {\n        uploadRecording,\n        isUploading\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVXBsb2FkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDZTtBQUVmO0FBQ1Q7QUFFeEIsTUFBTU0sWUFBWSxJQUFNO0lBQzdCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUVwRCxNQUFNVSxrQkFBa0IsT0FBT0MsY0FBb0JDLGNBQXdCO1FBQ3pFLElBQUksQ0FBQ0QsY0FBYztRQUVuQixJQUFJO1lBQ0ZGLGVBQWUsSUFBSTtZQUNuQkksUUFBUUMsR0FBRyxDQUFDTjtZQUNaLE1BQU1PLFNBQVMsTUFBT2IsdURBQWVBLENBQUNTLGlCQUFrQjtZQUN4RCxNQUFNSyxZQUFZLElBQUlDLE9BQU9DLGNBQWM7WUFFM0MsTUFBTUMsV0FBVyxJQUFJQztZQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFNBQVNWO1lBQ3pCUSxTQUFTRSxNQUFNLENBQUMsUUFBUVQ7WUFDeEJPLFNBQVNFLE1BQU0sQ0FBQyxVQUFVTjtZQUMxQkksU0FBU0UsTUFBTSxDQUFDLGFBQWFMO1lBRTdCLE1BQU1NLFVBQVU7Z0JBQ2QsZ0JBQWdCO1lBQ2xCO1lBQ0EsTUFBTUMsYUFBYXBCLG1EQUFXQSxDQUFDLE9BQU87WUFDdENxQixXQUFXLFVBQVk7Z0JBQ3JCLE1BQU1DLE1BQU0sTUFBTXBCLHNEQUFJQSxDQUFlLFFBQVFjLFVBQVVHO2dCQUN2RCxJQUFJRyxJQUFJQyxPQUFPLEVBQUU7b0JBQ2Z0QiwwREFBYSxDQUFDcUIsZ0JBQUFBLGlCQUFBQSxLQUFBQSxJQUFBQSxJQUFLRSxPQUFPO29CQUMxQnBCLE9BQU9xQixPQUFPLENBQUM7Z0JBQ2pCLE9BQU87b0JBQ0x4Qix3REFBVyxDQUFDO2dCQUNkLENBQUM7Z0JBQ0RLLGVBQWUsS0FBSztZQUN0QixHQUFHYztRQUNMLEVBQUUsT0FBT00sT0FBWTtZQUNuQnBCLGVBQWUsS0FBSztZQUNwQkksUUFBUWdCLEtBQUssQ0FBQyw4QkFBOEJBO1lBQzVDekIsd0RBQVcsQ0FBQ3lCLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT0YsT0FBTztRQUM1QjtJQUNGO0lBRUEsT0FBTztRQUFFakI7UUFBaUJGO0lBQVk7QUFDeEMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlVXBsb2FkLnRzPzRlYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVMZW5ndGgsIHJhbmRvbVJhbmdlIH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCB7IFJlc3BvbnNlVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcbmltcG9ydCBodHRwIGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuXG5leHBvcnQgY29uc3QgdXNlVXBsb2FkID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdXBsb2FkUmVjb3JkaW5nID0gYXN5bmMgKHJlY29yZGVkQmxvYjogQmxvYiwgc2Vzc2lvbk5hbWU6IHN0cmluZykgPT4ge1xuICAgIGlmICghcmVjb3JkZWRCbG9iKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhpc1VwbG9hZGluZyk7XG4gICAgICBjb25zdCBsZW5ndGggPSAoYXdhaXQgY2FsY3VsYXRlTGVuZ3RoKHJlY29yZGVkQmxvYikpIHx8IFwiTi9BXCI7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdWRpb1wiLCByZWNvcmRlZEJsb2IpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwibmFtZVwiLCBzZXNzaW9uTmFtZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJsZW5ndGhcIiwgbGVuZ3RoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInRpbWVzdGFtcFwiLCB0aW1lc3RhbXApO1xuXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgIH07XG4gICAgICBjb25zdCB1cGxvYWRUaW1lID0gcmFuZG9tUmFuZ2UoMTAwMDAsIDMwMDAwKTtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwPFJlc3BvbnNlVHlwZT4oXCJQT1NUXCIsIGZvcm1EYXRhLCBoZWFkZXJzKTtcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXM/Lm1lc3NhZ2UpO1xuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2FzdC5lcnJvcihcIkZhaWxlZCB0byB1cGxvYWQgcmVjb3JkaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0sIHVwbG9hZFRpbWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGxvYWRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgICB0b2FzdC5lcnJvcihlcnJvcj8ubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHVwbG9hZFJlY29yZGluZywgaXNVcGxvYWRpbmcgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJjYWxjdWxhdGVMZW5ndGgiLCJyYW5kb21SYW5nZSIsInRvYXN0IiwiaHR0cCIsInVzZVVwbG9hZCIsInJvdXRlciIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJ1cGxvYWRSZWNvcmRpbmciLCJyZWNvcmRlZEJsb2IiLCJzZXNzaW9uTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaGVhZGVycyIsInVwbG9hZFRpbWUiLCJzZXRUaW1lb3V0IiwicmVzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJyZXBsYWNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useUpload.ts\n"));

/***/ })

});