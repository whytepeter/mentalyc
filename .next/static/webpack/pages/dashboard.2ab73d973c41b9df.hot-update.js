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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UploadInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction UploadInput() {\n    _s();\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleSelectChange = (ev)=>{\n            const target = ev.target;\n            if (target.files) {\n                const file = target.files[0];\n                if (file && file.type.startsWith(\"audio/\")) {\n                    setSelectedFile(file);\n                    setFileName(file.name);\n                } else {\n                    setSelectedFile(null);\n                    setFileName(\"\");\n                    console.error(\"Invalid file selected. Please choose an audio file.\");\n                }\n            }\n        };\n        if (fileInputRef.current) {\n            fileInputRef.current.addEventListener(\"change\", handleSelectChange);\n        }\n        return ()=>{\n            if (fileInputRef.current) {\n                fileInputRef.current.removeEventListener(\"change\", handleSelectChange);\n            }\n        };\n    }, [\n        fileInputRef\n    ]);\n    const handleUploadClick = ()=>{\n        if (selectedFile) {\n            //Upload file\n            console.log(selectedFile);\n            setSelectedFile(null);\n            setFileName(\"\");\n        } else {\n            console.error(\"Please select an audio file before uploading.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                accept: \"audio/*\",\n                ref: fileInputRef,\n                className: \"hidden\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Upload/UploadInput.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    var _fileInputRef_current;\n                    return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();\n                },\n                children: \"Select Audio\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Upload/UploadInput.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            selectedFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Selected: \",\n                    fileName\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Upload/UploadInput.tsx\",\n                lineNumber: 60,\n                columnNumber: 24\n            }, this),\n            selectedFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                color: \"default\",\n                onClick: handleUploadClick,\n                children: \"Upload Audio\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Upload/UploadInput.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Upload/UploadInput.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadInput, \"B9qJvB18Xft/ckh1wkWKE9dwxGU=\");\n_c = UploadInput;\nvar _c;\n$RefreshReg$(_c, \"UploadInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGxvYWQvVXBsb2FkSW5wdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ2Q7QUFFOUIsU0FBU0ssY0FBYzs7SUFDcEMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQWMsSUFBSTtJQUNsRSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTVMsZUFBZVIsNkNBQU1BLENBQTBCLElBQUk7SUFFekRDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUSxxQkFBcUIsQ0FBQ0MsS0FBYztZQUN4QyxNQUFNQyxTQUFTRCxHQUFHQyxNQUFNO1lBQ3hCLElBQUlBLE9BQU9DLEtBQUssRUFBRTtnQkFDaEIsTUFBTUMsT0FBT0YsT0FBT0MsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLElBQUlDLFFBQVFBLEtBQUtDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLFdBQVc7b0JBQzFDVixnQkFBZ0JRO29CQUNoQk4sWUFBWU0sS0FBS0csSUFBSTtnQkFDdkIsT0FBTztvQkFDTFgsZ0JBQWdCLElBQUk7b0JBQ3BCRSxZQUFZO29CQUNaVSxRQUFRQyxLQUFLLENBQUM7Z0JBQ2hCLENBQUM7WUFDSCxDQUFDO1FBQ0g7UUFFQSxJQUFJVixhQUFhVyxPQUFPLEVBQUU7WUFDeEJYLGFBQWFXLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsVUFBVVg7UUFDbEQsQ0FBQztRQUVELE9BQU8sSUFBTTtZQUNYLElBQUlELGFBQWFXLE9BQU8sRUFBRTtnQkFDeEJYLGFBQWFXLE9BQU8sQ0FBQ0UsbUJBQW1CLENBQUMsVUFBVVo7WUFDckQsQ0FBQztRQUNIO0lBQ0YsR0FBRztRQUFDRDtLQUFhO0lBRWpCLE1BQU1jLG9CQUFvQixJQUFNO1FBQzlCLElBQUlsQixjQUFjO1lBQ2hCLGFBQWE7WUFFYmEsUUFBUU0sR0FBRyxDQUFDbkI7WUFDWkMsZ0JBQWdCLElBQUk7WUFDcEJFLFlBQVk7UUFDZCxPQUFPO1lBQ0xVLFFBQVFDLEtBQUssQ0FBQztRQUNoQixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ007OzBCQUNDLDhEQUFDQztnQkFDQ1gsTUFBSztnQkFDTFksUUFBTztnQkFDUEMsS0FBS25CO2dCQUNMb0IsV0FBVTs7Ozs7OzBCQUdaLDhEQUFDQztnQkFBT0MsU0FBUzt3QkFBTXRCO29CQUFBQSxPQUFBQSxDQUFBQSx3QkFBQUEsYUFBYVcsT0FBTyxjQUFwQlgsbUNBQUFBLEtBQUFBLElBQUFBLHNCQUFzQnVCOzswQkFBUzs7Ozs7O1lBR3JEM0IsOEJBQWdCLDhEQUFDNEI7O29CQUFFO29CQUFXMUI7Ozs7Ozs7WUFDOUJGLDhCQUNDLDhEQUFDRixzREFBTUE7Z0JBQUMrQixPQUFNO2dCQUFVSCxTQUFTUjswQkFBbUI7Ozs7Ozs7Ozs7OztBQU01RCxDQUFDO0dBaEV1Qm5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZC9VcGxvYWRJbnB1dC50c3g/YTcyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRJbnB1dCgpIHtcbiAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IChldjogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgaWYgKHRhcmdldC5maWxlcykge1xuICAgICAgICBjb25zdCBmaWxlID0gdGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLnR5cGUuc3RhcnRzV2l0aChcImF1ZGlvL1wiKSkge1xuICAgICAgICAgIHNldFNlbGVjdGVkRmlsZShmaWxlKTtcbiAgICAgICAgICBzZXRGaWxlTmFtZShmaWxlLm5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFNlbGVjdGVkRmlsZShudWxsKTtcbiAgICAgICAgICBzZXRGaWxlTmFtZShcIlwiKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBmaWxlIHNlbGVjdGVkLiBQbGVhc2UgY2hvb3NlIGFuIGF1ZGlvIGZpbGUuXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChmaWxlSW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgZmlsZUlucHV0UmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVTZWxlY3RDaGFuZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoZmlsZUlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZmlsZUlucHV0UmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVTZWxlY3RDaGFuZ2UpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtmaWxlSW5wdXRSZWZdKTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWRDbGljayA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRGaWxlKSB7XG4gICAgICAvL1VwbG9hZCBmaWxlXG5cbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRmlsZSk7XG4gICAgICBzZXRTZWxlY3RlZEZpbGUobnVsbCk7XG4gICAgICBzZXRGaWxlTmFtZShcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSBzZWxlY3QgYW4gYXVkaW8gZmlsZSBiZWZvcmUgdXBsb2FkaW5nLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgYWNjZXB0PVwiYXVkaW8vKlwiXG4gICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgLz5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaWxlSW5wdXRSZWYuY3VycmVudD8uY2xpY2soKX0+XG4gICAgICAgIFNlbGVjdCBBdWRpb1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2VsZWN0ZWRGaWxlICYmIDxwPlNlbGVjdGVkOiB7ZmlsZU5hbWV9PC9wPn1cbiAgICAgIHtzZWxlY3RlZEZpbGUgJiYgKFxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZGVmYXVsdFwiIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZENsaWNrfT5cbiAgICAgICAgICBVcGxvYWQgQXVkaW9cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJVcGxvYWRJbnB1dCIsInNlbGVjdGVkRmlsZSIsInNldFNlbGVjdGVkRmlsZSIsImZpbGVOYW1lIiwic2V0RmlsZU5hbWUiLCJmaWxlSW5wdXRSZWYiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJldiIsInRhcmdldCIsImZpbGVzIiwiZmlsZSIsInR5cGUiLCJzdGFydHNXaXRoIiwibmFtZSIsImNvbnNvbGUiLCJlcnJvciIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVVwbG9hZENsaWNrIiwibG9nIiwiZGl2IiwiaW5wdXQiLCJhY2NlcHQiLCJyZWYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xpY2siLCJwIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Upload/UploadInput.tsx\n"));

/***/ })

});