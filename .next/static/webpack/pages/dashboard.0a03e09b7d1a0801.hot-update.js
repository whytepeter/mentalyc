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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUpload\": function() { return /* binding */ useUpload; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.ts\");\n\n\n\n\n\nconst useUpload = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const uploadRecording = async (recordedBlob, sessionName, recordingLength)=>{\n        if (!recordedBlob) return;\n        const audioLength = await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getAudioDuration)(recordedBlob);\n        console.log(\"Length\", audioLength);\n        return;\n        try {\n            setIsUploading(true);\n            const length = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.calculateLength)(recordingLength) || \"N/A\";\n            const timestamp = new Date().toLocaleString();\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob);\n            formData.append(\"name\", sessionName);\n            formData.append(\"length\", length);\n            formData.append(\"timestamp\", timestamp);\n            const headers = {\n                \"Content-Type\": \"multipart/form-data\"\n            };\n            const res = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"POST\", formData, headers);\n            if (res.success) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(res === null || res === void 0 ? void 0 : res.message);\n                router.replace(\"/dashboard\");\n            } else {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Failed to upload recording\");\n            }\n        } catch (error) {\n            console.error(\"Error uploading recording:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error === null || error === void 0 ? void 0 : error.message);\n        } finally{\n            setIsUploading(false);\n        }\n    };\n    return {\n        uploadRecording,\n        isUploading\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVXBsb2FkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDaUM7QUFFakM7QUFDVDtBQUV4QixNQUFNTSxZQUFZLElBQU07SUFDN0IsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXBELE1BQU1VLGtCQUFrQixPQUN0QkMsY0FDQUMsYUFDQUMsa0JBQ0c7UUFDSCxJQUFJLENBQUNGLGNBQWM7UUFFbkIsTUFBTUcsY0FBYyxNQUFNWCx3REFBZ0JBLENBQUNRO1FBQzNDSSxRQUFRQyxHQUFHLENBQUMsVUFBVUY7UUFDdEI7UUFDQSxJQUFJO1lBQ0ZMLGVBQWUsSUFBSTtZQUVuQixNQUFNUSxTQUFTZix1REFBZUEsQ0FBQ1csb0JBQW9CO1lBQ25ELE1BQU1LLFlBQVksSUFBSUMsT0FBT0MsY0FBYztZQUUzQyxNQUFNQyxXQUFXLElBQUlDO1lBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU1o7WUFDekJVLFNBQVNFLE1BQU0sQ0FBQyxRQUFRWDtZQUN4QlMsU0FBU0UsTUFBTSxDQUFDLFVBQVVOO1lBQzFCSSxTQUFTRSxNQUFNLENBQUMsYUFBYUw7WUFFN0IsTUFBTU0sVUFBVTtnQkFDZCxnQkFBZ0I7WUFDbEI7WUFFQSxNQUFNQyxNQUFNLE1BQU1wQixzREFBSUEsQ0FBZSxRQUFRZ0IsVUFBVUc7WUFFdkQsSUFBSUMsSUFBSUMsT0FBTyxFQUFFO2dCQUNmdEIsMERBQWEsQ0FBQ3FCLGdCQUFBQSxpQkFBQUEsS0FBQUEsSUFBQUEsSUFBS0UsT0FBTztnQkFDMUJwQixPQUFPcUIsT0FBTyxDQUFDO1lBQ2pCLE9BQU87Z0JBQ0x4Qix3REFBVyxDQUFDO1lBQ2QsQ0FBQztRQUNILEVBQUUsT0FBT3lCLE9BQVk7WUFDbkJkLFFBQVFjLEtBQUssQ0FBQyw4QkFBOEJBO1lBQzVDekIsd0RBQVcsQ0FBQ3lCLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT0YsT0FBTztRQUM1QixTQUFVO1lBQ1JsQixlQUFlLEtBQUs7UUFDdEI7SUFDRjtJQUVBLE9BQU87UUFBRUM7UUFBaUJGO0lBQVk7QUFDeEMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlVXBsb2FkLnRzPzRlYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVMZW5ndGgsIGdldEF1ZGlvRHVyYXRpb24sIHJhbmRvbVJhbmdlIH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCB7IFJlc3BvbnNlVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcbmltcG9ydCBodHRwIGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuXG5leHBvcnQgY29uc3QgdXNlVXBsb2FkID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdXBsb2FkUmVjb3JkaW5nID0gYXN5bmMgKFxuICAgIHJlY29yZGVkQmxvYjogQmxvYixcbiAgICBzZXNzaW9uTmFtZTogc3RyaW5nLFxuICAgIHJlY29yZGluZ0xlbmd0aDogbnVtYmVyXG4gICkgPT4ge1xuICAgIGlmICghcmVjb3JkZWRCbG9iKSByZXR1cm47XG5cbiAgICBjb25zdCBhdWRpb0xlbmd0aCA9IGF3YWl0IGdldEF1ZGlvRHVyYXRpb24ocmVjb3JkZWRCbG9iKTtcbiAgICBjb25zb2xlLmxvZyhcIkxlbmd0aFwiLCBhdWRpb0xlbmd0aCk7XG4gICAgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgbGVuZ3RoID0gY2FsY3VsYXRlTGVuZ3RoKHJlY29yZGluZ0xlbmd0aCkgfHwgXCJOL0FcIjtcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImF1ZGlvXCIsIHJlY29yZGVkQmxvYik7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJuYW1lXCIsIHNlc3Npb25OYW1lKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImxlbmd0aFwiLCBsZW5ndGgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidGltZXN0YW1wXCIsIHRpbWVzdGFtcCk7XG5cbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cDxSZXNwb25zZVR5cGU+KFwiUE9TVFwiLCBmb3JtRGF0YSwgaGVhZGVycyk7XG5cbiAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcz8ubWVzc2FnZSk7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHVwbG9hZCByZWNvcmRpbmdcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwbG9hZGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yPy5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyB1cGxvYWRSZWNvcmRpbmcsIGlzVXBsb2FkaW5nIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiY2FsY3VsYXRlTGVuZ3RoIiwiZ2V0QXVkaW9EdXJhdGlvbiIsInRvYXN0IiwiaHR0cCIsInVzZVVwbG9hZCIsInJvdXRlciIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJ1cGxvYWRSZWNvcmRpbmciLCJyZWNvcmRlZEJsb2IiLCJzZXNzaW9uTmFtZSIsInJlY29yZGluZ0xlbmd0aCIsImF1ZGlvTGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJoZWFkZXJzIiwicmVzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJyZXBsYWNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useUpload.ts\n"));

/***/ })

});