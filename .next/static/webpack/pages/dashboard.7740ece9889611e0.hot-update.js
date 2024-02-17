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

/***/ "./src/components/Upload/UploadInput.tsx":
/*!***********************************************!*\
  !*** ./src/components/Upload/UploadInput.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UploadInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction UploadInput() {\n    _s();\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleSelectChange = (ev)=>{\n            const target = ev.target;\n            if (target.files) {\n                const file = target.files[0];\n                if (file && file.type.startsWith(\"audio/\")) {\n                    setSelectedFile(file);\n                    setFileName(file.name);\n                } else {\n                    setSelectedFile(null);\n                    setFileName(\"\");\n                    console.error(\"Invalid file selected. Please choose an audio file.\");\n                }\n            }\n        };\n        if (fileInputRef.current) {\n            fileInputRef.current.addEventListener(\"change\", handleSelectChange);\n        }\n        return ()=>{\n            if (fileInputRef.current) {\n                fileInputRef.current.removeEventListener(\"change\", handleSelectChange);\n            }\n        };\n    }, [\n        fileInputRef\n    ]);\n    const handleUploadClick = ()=>{\n        if (selectedFile) {\n            //Upload file\n            console.log(selectedFile);\n            setSelectedFile(null);\n            setFileName(\"\");\n        } else {\n            console.error(\"Please select an audio file before uploading.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                accept: \"audio/*\",\n                ref: fileInputRef,\n                className: \"hidden\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Upload/UploadInput.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-dashed  p-4 rounded-2xl text-center cursor-pointer\",\n                onClick: ()=>{\n                    var _fileInputRef_current;\n                    return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();\n                },\n                children: \"Select Audio\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Upload/UploadInput.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            selectedFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Selected: \",\n                    fileName\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Upload/UploadInput.tsx\",\n                lineNumber: 63,\n                columnNumber: 24\n            }, this),\n            selectedFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: handleUploadClick,\n                children: \"Upload Audio\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Upload/UploadInput.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Upload/UploadInput.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadInput, \"B9qJvB18Xft/ckh1wkWKE9dwxGU=\");\n_c = UploadInput;\nvar _c;\n$RefreshReg$(_c, \"UploadInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGxvYWQvVXBsb2FkSW5wdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ2Q7QUFFOUIsU0FBU0ssY0FBYzs7SUFDcEMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQWMsSUFBSTtJQUNsRSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTVMsZUFBZVIsNkNBQU1BLENBQTBCLElBQUk7SUFFekRDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUSxxQkFBcUIsQ0FBQ0MsS0FBYztZQUN4QyxNQUFNQyxTQUFTRCxHQUFHQyxNQUFNO1lBQ3hCLElBQUlBLE9BQU9DLEtBQUssRUFBRTtnQkFDaEIsTUFBTUMsT0FBT0YsT0FBT0MsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLElBQUlDLFFBQVFBLEtBQUtDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLFdBQVc7b0JBQzFDVixnQkFBZ0JRO29CQUNoQk4sWUFBWU0sS0FBS0csSUFBSTtnQkFDdkIsT0FBTztvQkFDTFgsZ0JBQWdCLElBQUk7b0JBQ3BCRSxZQUFZO29CQUNaVSxRQUFRQyxLQUFLLENBQUM7Z0JBQ2hCLENBQUM7WUFDSCxDQUFDO1FBQ0g7UUFFQSxJQUFJVixhQUFhVyxPQUFPLEVBQUU7WUFDeEJYLGFBQWFXLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsVUFBVVg7UUFDbEQsQ0FBQztRQUVELE9BQU8sSUFBTTtZQUNYLElBQUlELGFBQWFXLE9BQU8sRUFBRTtnQkFDeEJYLGFBQWFXLE9BQU8sQ0FBQ0UsbUJBQW1CLENBQUMsVUFBVVo7WUFDckQsQ0FBQztRQUNIO0lBQ0YsR0FBRztRQUFDRDtLQUFhO0lBRWpCLE1BQU1jLG9CQUFvQixJQUFNO1FBQzlCLElBQUlsQixjQUFjO1lBQ2hCLGFBQWE7WUFFYmEsUUFBUU0sR0FBRyxDQUFDbkI7WUFDWkMsZ0JBQWdCLElBQUk7WUFDcEJFLFlBQVk7UUFDZCxPQUFPO1lBQ0xVLFFBQVFDLEtBQUssQ0FBQztRQUNoQixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDWixNQUFLO2dCQUNMYSxRQUFPO2dCQUNQQyxLQUFLcEI7Z0JBQ0xpQixXQUFVOzs7Ozs7MEJBR1osOERBQUNEO2dCQUNDQyxXQUFVO2dCQUNWSSxTQUFTO3dCQUFNckI7b0JBQUFBLE9BQUFBLENBQUFBLHdCQUFBQSxhQUFhVyxPQUFPLGNBQXBCWCxtQ0FBQUEsS0FBQUEsSUFBQUEsc0JBQXNCc0I7OzBCQUN0Qzs7Ozs7O1lBR0ExQiw4QkFBZ0IsOERBQUMyQjs7b0JBQUU7b0JBQVd6Qjs7Ozs7OztZQUM5QkYsOEJBQ0MsOERBQUNGLHNEQUFNQTtnQkFBQzJCLFNBQVNQOzBCQUFtQjs7Ozs7Ozs7Ozs7O0FBSTVDLENBQUM7R0FqRXVCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXBsb2FkL1VwbG9hZElucHV0LnRzeD9hNzIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZElucHV0KCkge1xuICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGV2OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0LmZpbGVzKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSB0YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGlmIChmaWxlICYmIGZpbGUudHlwZS5zdGFydHNXaXRoKFwiYXVkaW8vXCIpKSB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRGaWxlKGZpbGUpO1xuICAgICAgICAgIHNldEZpbGVOYW1lKGZpbGUubmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRGaWxlKG51bGwpO1xuICAgICAgICAgIHNldEZpbGVOYW1lKFwiXCIpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGZpbGUgc2VsZWN0ZWQuIFBsZWFzZSBjaG9vc2UgYW4gYXVkaW8gZmlsZS5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGZpbGVJbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVNlbGVjdENoYW5nZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChmaWxlSW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVNlbGVjdENoYW5nZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2ZpbGVJbnB1dFJlZl0pO1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZENsaWNrID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEZpbGUpIHtcbiAgICAgIC8vVXBsb2FkIGZpbGVcblxuICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRGaWxlKTtcbiAgICAgIHNldFNlbGVjdGVkRmlsZShudWxsKTtcbiAgICAgIHNldEZpbGVOYW1lKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUGxlYXNlIHNlbGVjdCBhbiBhdWRpbyBmaWxlIGJlZm9yZSB1cGxvYWRpbmcuXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgYWNjZXB0PVwiYXVkaW8vKlwiXG4gICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgLz5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWRhc2hlZCAgcC00IHJvdW5kZWQtMnhsIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gZmlsZUlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCl9XG4gICAgICA+XG4gICAgICAgIFNlbGVjdCBBdWRpb1xuICAgICAgPC9kaXY+XG4gICAgICB7c2VsZWN0ZWRGaWxlICYmIDxwPlNlbGVjdGVkOiB7ZmlsZU5hbWV9PC9wPn1cbiAgICAgIHtzZWxlY3RlZEZpbGUgJiYgKFxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZENsaWNrfT5VcGxvYWQgQXVkaW88L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIlVwbG9hZElucHV0Iiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImZpbGVJbnB1dFJlZiIsImhhbmRsZVNlbGVjdENoYW5nZSIsImV2IiwidGFyZ2V0IiwiZmlsZXMiLCJmaWxlIiwidHlwZSIsInN0YXJ0c1dpdGgiLCJuYW1lIiwiY29uc29sZSIsImVycm9yIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlVXBsb2FkQ2xpY2siLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsImFjY2VwdCIsInJlZiIsIm9uQ2xpY2siLCJjbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Upload/UploadInput.tsx\n"));

/***/ })

});