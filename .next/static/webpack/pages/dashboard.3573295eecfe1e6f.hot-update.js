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

/***/ "./src/components/Recordings/RecordingSession.tsx":
/*!********************************************************!*\
  !*** ./src/components/Recordings/RecordingSession.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                if (duration === maxDuration) {\n                    stopRecording();\n                    clearInterval(id);\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const clearDurationInterval = ()=>{\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    };\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n            };\n            recorder.onerror = ()=>{\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    const uploadRecording = async ()=>{\n        if (!recordedBlob) return;\n        try {\n            setIsUploading(true);\n            const length = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.calculateLength)(recordedBlob) || \"N/A\";\n            const timestamp = new Date().toLocaleString();\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob);\n            formData.append(\"name\", sessionName);\n            formData.append(\"length\", length);\n            formData.append(\"timestamp\", timestamp);\n            const headers = {\n                \"Content-Type\": \"multipart/form-data\"\n            };\n            const res = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"POST\", formData, headers);\n            if (!res.success) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(\"Failed to upload recording\");\n                return;\n            }\n            console.log(res === null || res === void 0 ? void 0 : res.data);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success(res === null || res === void 0 ? void 0 : res.message);\n        } catch (error) {\n            console.error(\"Error uploading recording:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(error === null || error === void 0 ? void 0 : error.message);\n        } finally{\n            setIsUploading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>{\n                            setIsUploading(true);\n                        },\n                        className: \"text-[20px] \",\n                        children: [\n                            \"Name: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: sessionName\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 17\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this),\n                    isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        duration: recordingDuration,\n                        maxDuration: maxDuration,\n                        stopRecording: stopRecording\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioElementRef,\n                                controls: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: startRecording,\n                                        color: \"default\",\n                                        className: \"w-full\",\n                                        children: \"Record Again\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 166,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: uploadRecording,\n                                        className: \"w-full\",\n                                        children: \"Upload Recording\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 173,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 165,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_2__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: isUploading,\n                onClose: ()=>{\n                    setIsUploading(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            onClick: ()=>{\n                                setIsUploading(false);\n                            },\n                            className: \"font-bold text-xl mb-1\",\n                            children: \"Uploading recording\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 190,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 189,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 201,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 200,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingSession, \"YlaCyiw87yqBDacKL2z+xHOBVdU=\");\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ1I7QUFFTjtBQUNIO0FBQ0Q7QUFDMkI7QUFDNUI7QUFDVDtBQVFoQixTQUFTVyxpQkFBaUIsS0FJbEIsRUFBRTtRQUpnQixFQUN2Q0MsWUFBVyxFQUNYQyxZQUFXLEVBQ1hDLGVBQWMsRUFDTyxHQUprQjs7SUFLdkMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFVLEtBQUs7SUFDN0QsTUFBTSxDQUFDZ0IsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDa0IsWUFBWUMsY0FBYyxHQUFHbkIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDb0IsbUJBQW1CQyxxQkFBcUIsR0FBR3JCLCtDQUFRQSxDQUFDO0lBRTNELE1BQU0sQ0FBQ3NCLGVBQWVDLGlCQUFpQixHQUFHdkIsK0NBQVFBLENBQ2hELElBQUk7SUFFTixNQUFNLENBQUN3QixjQUFjQyxnQkFBZ0IsR0FBR3pCLCtDQUFRQSxDQUFjLElBQUk7SUFDbEUsTUFBTTBCLGtCQUFrQnhCLDZDQUFNQSxDQUEwQixJQUFJO0lBRTVERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVcsYUFBYTtZQUNmZTtZQUVBLDBDQUEwQztZQUMxQyxJQUFJQyxXQUFXO1lBQ2YsTUFBTUMsS0FBS0MsWUFBWSxJQUFNO2dCQUMzQlQscUJBQXFCLENBQUNVLE9BQVNBLE9BQU87Z0JBQ3RDSDtnQkFDQSxJQUFJQSxhQUFhWixhQUFhO29CQUM1QmdCO29CQUNBQyxjQUFjSjtnQkFDaEIsQ0FBQztZQUNILEdBQUc7WUFDSFYsY0FBY1U7WUFFZCxPQUFPLElBQU07Z0JBQ1hJLGNBQWNKO1lBQ2hCO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ2pCO0tBQVk7SUFFaEIsTUFBTXNCLHdCQUF3QixJQUFZO1FBQ3hD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OzswQ0FDRSw4REFBQ087Z0NBQU11QyxLQUFLcEQ7Z0NBQWlCcUQsUUFBUTs7Ozs7OzBDQUVyQyw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDdEUsc0RBQU1BO3dDQUNMd0UsU0FBU2pEO3dDQUNUcUQsT0FBTTt3Q0FDTk4sV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDdEUsc0RBQU1BO3dDQUFDd0UsU0FBU2Y7d0NBQWlCYSxXQUFVO2tEQUFTOzs7Ozs7Ozs7Ozs7O29DQUsxRDs7Ozs7OzswQkFHSCw4REFBQ3ZFLDREQUFTQTtnQkFDUjhFLG1CQUFtQixLQUFLO2dCQUN4QkMsTUFBSztnQkFDTEMsTUFBTXJFO2dCQUNOc0UsU0FBUyxJQUFNO29CQUNickUsZUFBZSxLQUFLO2dCQUN0Qjs7a0NBRUEsOERBQUMwRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1c7NEJBQ0NULFNBQVMsSUFBTTtnQ0FDYjdELGVBQWUsS0FBSzs0QkFDdEI7NEJBQ0EyRCxXQUFVO3NDQUNYOzs7Ozs7Ozs7OztrQ0FLSCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNwRSwwREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQixDQUFDO0dBN0x1Qkk7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVjb3JkaW5ncy9SZWNvcmRpbmdTZXNzaW9uLnRzeD9jNWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhc2VNb2RhbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQmFzZU1vZGFsXCI7XG5pbXBvcnQgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUxlbmd0aCB9IGZyb20gXCJAL3V0aWxzXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgUmVjb3JkaW5nUGFuZWwgZnJvbSBcIkAvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcbmltcG9ydCBodHRwIGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuXG50eXBlIFJlY29yZGluZ1Nlc3Npb25UeXBlID0ge1xuICBzZXNzaW9uTmFtZTogc3RyaW5nO1xuICBpc1JlY29yZGluZzogQm9vbGVhbjtcbiAgc2V0SXNSZWNvcmRpbmc6ICh2YWw6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRpbmdTZXNzaW9uKHtcbiAgc2Vzc2lvbk5hbWUsXG4gIGlzUmVjb3JkaW5nLFxuICBzZXRJc1JlY29yZGluZyxcbn06IFJlY29yZGluZ1Nlc3Npb25UeXBlKSB7XG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbbWF4RHVyYXRpb24sIHNldE1heER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oNjApO1xuICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmVjb3JkaW5nRHVyYXRpb24sIHNldFJlY29yZGluZ0R1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFttZWRpYVJlY29yZGVyLCBzZXRNZWRpYVJlY29yZGVyXSA9IHVzZVN0YXRlPE1lZGlhUmVjb3JkZXIgfCBudWxsPihcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IFtyZWNvcmRlZEJsb2IsIHNldFJlY29yZGVkQmxvYl0gPSB1c2VTdGF0ZTxCbG9iIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGF1ZGlvRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNSZWNvcmRpbmcpIHtcbiAgICAgIHN0YXJ0UmVjb3JkaW5nKCk7XG5cbiAgICAgIC8vIFN0YXJ0IHRpbWVyIHRvIHRyYWNrIHJlY29yZGluZyBkdXJhdGlvblxuICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgICBkdXJhdGlvbisrO1xuICAgICAgICBpZiAoZHVyYXRpb24gPT09IG1heER1cmF0aW9uKSB7XG4gICAgICAgICAgc3RvcFJlY29yZGluZygpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldEludGVydmFsSWQoaWQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbaXNSZWNvcmRpbmddKTtcblxuICBjb25zdCBjbGVhckR1cmF0aW9uSW50ZXJ2YWwgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKGludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICBzZXRJbnRlcnZhbElkKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KTtcblxuICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xuICAgICAgc2V0TWVkaWFSZWNvcmRlcihyZWNvcmRlcik7XG5cbiAgICAgIGNvbnN0IGNodW5rczogQmxvYltdID0gW107XG4gICAgICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZSkgPT4ge1xuICAgICAgICBjaHVua3MucHVzaChlLmRhdGEpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZWNvcmRlZEJsb2IgPSBuZXcgQmxvYihjaHVua3MsIHsgdHlwZTogXCJhdWRpby93YXZcIiB9KTtcbiAgICAgICAgc2V0UmVjb3JkZWRCbG9iKHJlY29yZGVkQmxvYik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0b3BwZWRcIik7XG5cbiAgICAgICAgLy9TZXQgYXVkaW9cbiAgICAgICAgY29uc3QgYXVkaW9VUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlY29yZGVkQmxvYik7XG4gICAgICAgIGlmIChhdWRpb0VsZW1lbnRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50LnNyYyA9IGF1ZGlvVVJMO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5zdGFydCgpO1xuICAgICAgc2V0SXNSZWNvcmRpbmcodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlcikge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG5cbiAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgIHNldFJlY29yZGluZ0R1cmF0aW9uKDApO1xuICAgIH1cblxuICAgIGNsZWFyRHVyYXRpb25JbnRlcnZhbCgpO1xuICB9O1xuXG4gIGNvbnN0IHVwbG9hZFJlY29yZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXJlY29yZGVkQmxvYikgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCBsZW5ndGggPSAoYXdhaXQgY2FsY3VsYXRlTGVuZ3RoKHJlY29yZGVkQmxvYikpIHx8IFwiTi9BXCI7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdWRpb1wiLCByZWNvcmRlZEJsb2IpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwibmFtZVwiLCBzZXNzaW9uTmFtZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJsZW5ndGhcIiwgbGVuZ3RoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInRpbWVzdGFtcFwiLCB0aW1lc3RhbXApO1xuXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgIH07XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwPFJlc3BvbnNlVHlwZT4oXCJQT1NUXCIsIGZvcm1EYXRhLCBoZWFkZXJzKTtcblxuICAgICAgaWYgKCFyZXMuc3VjY2Vzcykge1xuICAgICAgICB0b2FzdC5lcnJvcihcIkZhaWxlZCB0byB1cGxvYWQgcmVjb3JkaW5nXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKHJlcz8uZGF0YSk7XG4gICAgICB0b2FzdC5zdWNjZXNzKHJlcz8ubWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwbG9hZGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yPy5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC04IHctZnVsbCBzbTptYXgtdy0yeGxcIj5cbiAgICAgICAgPHBcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIFwiXG4gICAgICAgID5cbiAgICAgICAgICBOYW1lOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+e3Nlc3Npb25OYW1lfTwvc3Bhbj57XCIgXCJ9XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7aXNSZWNvcmRpbmcgPyAoXG4gICAgICAgICAgPFJlY29yZGluZ1BhbmVsXG4gICAgICAgICAgICBkdXJhdGlvbj17cmVjb3JkaW5nRHVyYXRpb259XG4gICAgICAgICAgICBtYXhEdXJhdGlvbj17bWF4RHVyYXRpb259XG4gICAgICAgICAgICBzdG9wUmVjb3JkaW5nPXtzdG9wUmVjb3JkaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvRWxlbWVudFJlZn0gY29udHJvbHM+PC9hdWRpbz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHctZnVsbCBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRSZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVjb3JkIEFnYWluXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3VwbG9hZFJlY29yZGluZ30gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgVXBsb2FkIFJlY29yZGluZ1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxCYXNlTW9kYWxcbiAgICAgICAgc2hvd0Rpc21pc3NCdXR0b249e2ZhbHNlfVxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICBvcGVuPXtpc1VwbG9hZGluZ31cbiAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgzXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0xXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBVcGxvYWRpbmcgcmVjb3JkaW5nXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Jhc2VNb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQmFzZU1vZGFsIiwiQnV0dG9uIiwiY2FsY3VsYXRlTGVuZ3RoIiwiTG9hZGVyIiwiUmVjb3JkaW5nUGFuZWwiLCJ0b2FzdCIsImh0dHAiLCJSZWNvcmRpbmdTZXNzaW9uIiwic2Vzc2lvbk5hbWUiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwiaXNVcGxvYWRpbmciLCJzZXRJc1VwbG9hZGluZyIsIm1heER1cmF0aW9uIiwic2V0TWF4RHVyYXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsInJlY29yZGluZ0R1cmF0aW9uIiwic2V0UmVjb3JkaW5nRHVyYXRpb24iLCJtZWRpYVJlY29yZGVyIiwic2V0TWVkaWFSZWNvcmRlciIsInJlY29yZGVkQmxvYiIsInNldFJlY29yZGVkQmxvYiIsImF1ZGlvRWxlbWVudFJlZiIsInN0YXJ0UmVjb3JkaW5nIiwiZHVyYXRpb24iLCJpZCIsInNldEludGVydmFsIiwicHJldiIsInN0b3BSZWNvcmRpbmciLCJjbGVhckludGVydmFsIiwiY2xlYXJEdXJhdGlvbkludGVydmFsIiwic3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJyZWNvcmRlciIsIk1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJvbmRhdGFhdmFpbGFibGUiLCJlIiwicHVzaCIsImRhdGEiLCJvbnN0b3AiLCJCbG9iIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJzcmMiLCJvbmVycm9yIiwic3RhcnQiLCJlcnJvciIsInN0b3AiLCJ1cGxvYWRSZWNvcmRpbmciLCJsZW5ndGgiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaGVhZGVycyIsInJlcyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm9uQ2xpY2siLCJzcGFuIiwicmVmIiwiY29udHJvbHMiLCJjb2xvciIsInNob3dEaXNtaXNzQnV0dG9uIiwic2l6ZSIsIm9wZW4iLCJvbkNsb3NlIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});