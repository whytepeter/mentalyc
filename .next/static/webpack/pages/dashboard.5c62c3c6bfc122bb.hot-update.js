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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                if (duration === maxDuration) {\n                    stopRecording();\n                    clearInterval(id);\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const clearDurationInterval = ()=>{\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    };\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n            };\n            recorder.onerror = ()=>{\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    const uploadRecording = async ()=>{\n        if (!recordedBlob) return;\n        try {\n            setIsUploading(true);\n            const length = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.calculateLength)(recordedBlob) || \"N/A\";\n            const timestamp = new Date().toLocaleString();\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob);\n            formData.append(\"name\", sessionName);\n            formData.append(\"length\", length);\n            formData.append(\"timestamp\", timestamp);\n            const headers = {\n                \"Content-Type\": \"multipart/form-data\"\n            };\n            const uploadTime = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.randomRange)(10000, 30000);\n            setTimeout(async ()=>{\n                const res = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"POST\", formData, headers);\n                if (!res.success) {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(\"Failed to upload recording\");\n                } else {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success(res === null || res === void 0 ? void 0 : res.message);\n                    router.replace(\"/dashboard\");\n                }\n            }, uploadTime);\n        } catch (error) {\n            console.error(\"Error uploading recording:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(error === null || error === void 0 ? void 0 : error.message);\n        } finally{\n            setIsUploading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>{\n                            setIsUploading(true);\n                        },\n                        className: \"text-[20px] \",\n                        children: [\n                            \"Name: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: sessionName\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 17\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 9\n                    }, this),\n                    isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        duration: recordingDuration,\n                        maxDuration: maxDuration,\n                        stopRecording: stopRecording\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 161,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioElementRef,\n                                controls: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: startRecording,\n                                        color: \"default\",\n                                        className: \"w-full\",\n                                        children: \"Record Again\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 171,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: uploadRecording,\n                                        className: \"w-full\",\n                                        children: \"Upload Recording\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 178,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 170,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_2__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: isUploading,\n                onClose: ()=>{\n                    setIsUploading(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            onClick: ()=>{\n                                setIsUploading(false);\n                            },\n                            className: \"font-bold text-xl mb-1\",\n                            children: \"Uploading recording\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 195,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 194,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 206,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 205,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 186,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingSession, \"xroUjaJUNEAdidfIQswkzDDvSnA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDUjtBQUVOO0FBQ1U7QUFDZDtBQUMyQjtBQUM1QjtBQUNUO0FBQ1M7QUFRekIsU0FBU2EsaUJBQWlCLEtBSWxCLEVBQUU7UUFKZ0IsRUFDdkNDLFlBQVcsRUFDWEMsWUFBVyxFQUNYQyxlQUFjLEVBQ08sR0FKa0I7O0lBS3ZDLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFVLEtBQUs7SUFDN0QsTUFBTSxDQUFDbUIsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDcUIsWUFBWUMsY0FBYyxHQUFHdEIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDdUIsbUJBQW1CQyxxQkFBcUIsR0FBR3hCLCtDQUFRQSxDQUFDO0lBRTNELE1BQU0sQ0FBQ3lCLGVBQWVDLGlCQUFpQixHQUFHMUIsK0NBQVFBLENBQ2hELElBQUk7SUFFTixNQUFNLENBQUMyQixjQUFjQyxnQkFBZ0IsR0FBRzVCLCtDQUFRQSxDQUFjLElBQUk7SUFDbEUsTUFBTTZCLGtCQUFrQjNCLDZDQUFNQSxDQUEwQixJQUFJO0lBRTVERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSWEsYUFBYTtZQUNmZ0I7WUFFQSwwQ0FBMEM7WUFDMUMsSUFBSUMsV0FBVztZQUNmLE1BQU1DLEtBQUtDLFlBQVksSUFBTTtnQkFDM0JULHFCQUFxQixDQUFDVSxPQUFTQSxPQUFPO2dCQUN0Q0g7Z0JBQ0EsSUFBSUEsYUFBYVosYUFBYTtvQkFDNUJnQjtvQkFDQUMsY0FBY0o7Z0JBQ2hCLENBQUM7WUFDSCxHQUFHO1lBQ0hWLGNBQWNVO1lBRWQsT0FBTyxJQUFNO2dCQUNYSSxjQUFjSjtZQUNoQjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNsQjtL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QUNDLDhEQUFDTiw2RUFBY0E7d0JBQ2J1QixVQUFVUjt3QkFDVkosYUFBYUE7d0JBQ2JnQixlQUFlQTs7Ozs7NkNBR2pCOzswQ0FDRSw4REFBQ087Z0NBQU0wQyxLQUFLdkQ7Z0NBQWlCd0QsUUFBUTs7Ozs7OzBDQUVyQyw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDNUUsc0RBQU1BO3dDQUNMOEUsU0FBU3BEO3dDQUNUd0QsT0FBTTt3Q0FDTk4sV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDNUUsc0RBQU1BO3dDQUFDOEUsU0FBU2xCO3dDQUFpQmdCLFdBQVU7a0RBQVM7Ozs7Ozs7Ozs7Ozs7b0NBSzFEOzs7Ozs7OzBCQUdILDhEQUFDN0UsNERBQVNBO2dCQUNSb0YsbUJBQW1CLEtBQUs7Z0JBQ3hCQyxNQUFLO2dCQUNMQyxNQUFNeEU7Z0JBQ055RSxTQUFTLElBQU07b0JBQ2J4RSxlQUFlLEtBQUs7Z0JBQ3RCOztrQ0FFQSw4REFBQzZEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDVzs0QkFDQ1QsU0FBUyxJQUFNO2dDQUNiaEUsZUFBZSxLQUFLOzRCQUN0Qjs0QkFDQThELFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7O2tDQUtILDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3pFLDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCLENBQUM7R0FqTXVCSzs7UUFLUEQsa0RBQVNBOzs7S0FMRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVjb3JkaW5ncy9SZWNvcmRpbmdTZXNzaW9uLnRzeD9jNWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhc2VNb2RhbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQmFzZU1vZGFsXCI7XG5pbXBvcnQgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUxlbmd0aCwgcmFuZG9tUmFuZ2UgfSBmcm9tIFwiQC91dGlsc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IFJlY29yZGluZ1BhbmVsIGZyb20gXCJAL2NvbXBvbmVudHMvUmVjb3JkaW5ncy9SZWNvcmRpbmdQYW5lbFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiQC91dGlscy9hcGlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG50eXBlIFJlY29yZGluZ1Nlc3Npb25UeXBlID0ge1xuICBzZXNzaW9uTmFtZTogc3RyaW5nO1xuICBpc1JlY29yZGluZzogQm9vbGVhbjtcbiAgc2V0SXNSZWNvcmRpbmc6ICh2YWw6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRpbmdTZXNzaW9uKHtcbiAgc2Vzc2lvbk5hbWUsXG4gIGlzUmVjb3JkaW5nLFxuICBzZXRJc1JlY29yZGluZyxcbn06IFJlY29yZGluZ1Nlc3Npb25UeXBlKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW21heER1cmF0aW9uLCBzZXRNYXhEdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KDYwKTtcbiAgY29uc3QgW2ludGVydmFsSWQsIHNldEludGVydmFsSWRdID0gdXNlU3RhdGU8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3JlY29yZGluZ0R1cmF0aW9uLCBzZXRSZWNvcmRpbmdEdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbbWVkaWFSZWNvcmRlciwgc2V0TWVkaWFSZWNvcmRlcl0gPSB1c2VTdGF0ZTxNZWRpYVJlY29yZGVyIHwgbnVsbD4oXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBbcmVjb3JkZWRCbG9iLCBzZXRSZWNvcmRlZEJsb2JdID0gdXNlU3RhdGU8QmxvYiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBhdWRpb0VsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzUmVjb3JkaW5nKSB7XG4gICAgICBzdGFydFJlY29yZGluZygpO1xuXG4gICAgICAvLyBTdGFydCB0aW1lciB0byB0cmFjayByZWNvcmRpbmcgZHVyYXRpb25cbiAgICAgIGxldCBkdXJhdGlvbiA9IDA7XG4gICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0UmVjb3JkaW5nRHVyYXRpb24oKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICAgICAgZHVyYXRpb24rKztcbiAgICAgICAgaWYgKGR1cmF0aW9uID09PSBtYXhEdXJhdGlvbikge1xuICAgICAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG4gICAgICBzZXRJbnRlcnZhbElkKGlkKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2lzUmVjb3JkaW5nXSk7XG5cbiAgY29uc3QgY2xlYXJEdXJhdGlvbkludGVydmFsID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgc2V0SW50ZXJ2YWxJZChudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSk7XG5cbiAgICAgIGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbiAgICAgIHNldE1lZGlhUmVjb3JkZXIocmVjb3JkZXIpO1xuXG4gICAgICBjb25zdCBjaHVua3M6IEJsb2JbXSA9IFtdO1xuICAgICAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGUpID0+IHtcbiAgICAgICAgY2h1bmtzLnB1c2goZS5kYXRhKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVjb3JkZWRCbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICAgIHNldFJlY29yZGVkQmxvYihyZWNvcmRlZEJsb2IpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdG9wcGVkXCIpO1xuXG4gICAgICAgIC8vU2V0IGF1ZGlvXG4gICAgICAgIGNvbnN0IGF1ZGlvVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZWNvcmRlZEJsb2IpO1xuICAgICAgICBpZiAoYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBhdWRpb0VsZW1lbnRSZWYuY3VycmVudC5zcmMgPSBhdWRpb1VSTDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgIHNldElzUmVjb3JkaW5nKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKG1lZGlhUmVjb3JkZXIpIHtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuXG4gICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigwKTtcbiAgICB9XG5cbiAgICBjbGVhckR1cmF0aW9uSW50ZXJ2YWwoKTtcbiAgfTtcblxuICBjb25zdCB1cGxvYWRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFyZWNvcmRlZEJsb2IpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgbGVuZ3RoID0gKGF3YWl0IGNhbGN1bGF0ZUxlbmd0aChyZWNvcmRlZEJsb2IpKSB8fCBcIk4vQVwiO1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYXVkaW9cIiwgcmVjb3JkZWRCbG9iKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgc2Vzc2lvbk5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwibGVuZ3RoXCIsIGxlbmd0aCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0aW1lc3RhbXBcIiwgdGltZXN0YW1wKTtcblxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB1cGxvYWRUaW1lID0gcmFuZG9tUmFuZ2UoMTAwMDAsIDMwMDAwKTtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwPFJlc3BvbnNlVHlwZT4oXCJQT1NUXCIsIGZvcm1EYXRhLCBoZWFkZXJzKTtcblxuICAgICAgICBpZiAoIXJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gdXBsb2FkIHJlY29yZGluZ1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcz8ubWVzc2FnZSk7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xuICAgICAgICB9XG4gICAgICB9LCB1cGxvYWRUaW1lKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBsb2FkaW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgICAgdG9hc3QuZXJyb3IoZXJyb3I/Lm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTggdy1mdWxsIHNtOm1heC13LTJ4bFwiPlxuICAgICAgICA8cFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gXCJcbiAgICAgICAgPlxuICAgICAgICAgIE5hbWU6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57c2Vzc2lvbk5hbWV9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIHtpc1JlY29yZGluZyA/IChcbiAgICAgICAgICA8UmVjb3JkaW5nUGFuZWxcbiAgICAgICAgICAgIGR1cmF0aW9uPXtyZWNvcmRpbmdEdXJhdGlvbn1cbiAgICAgICAgICAgIG1heER1cmF0aW9uPXttYXhEdXJhdGlvbn1cbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmc9e3N0b3BSZWNvcmRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9FbGVtZW50UmVmfSBjb250cm9scz48L2F1ZGlvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgdy1mdWxsIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydFJlY29yZGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZWNvcmQgQWdhaW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dXBsb2FkUmVjb3JkaW5nfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICBVcGxvYWQgUmVjb3JkaW5nXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEJhc2VNb2RhbFxuICAgICAgICBzaG93RGlzbWlzc0J1dHRvbj17ZmFsc2V9XG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIG9wZW49e2lzVXBsb2FkaW5nfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDNcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTFcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFVwbG9hZGluZyByZWNvcmRpbmdcbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQmFzZU1vZGFsPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCYXNlTW9kYWwiLCJCdXR0b24iLCJjYWxjdWxhdGVMZW5ndGgiLCJyYW5kb21SYW5nZSIsIkxvYWRlciIsIlJlY29yZGluZ1BhbmVsIiwidG9hc3QiLCJodHRwIiwidXNlUm91dGVyIiwiUmVjb3JkaW5nU2Vzc2lvbiIsInNlc3Npb25OYW1lIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsInJvdXRlciIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJtYXhEdXJhdGlvbiIsInNldE1heER1cmF0aW9uIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJyZWNvcmRpbmdEdXJhdGlvbiIsInNldFJlY29yZGluZ0R1cmF0aW9uIiwibWVkaWFSZWNvcmRlciIsInNldE1lZGlhUmVjb3JkZXIiLCJyZWNvcmRlZEJsb2IiLCJzZXRSZWNvcmRlZEJsb2IiLCJhdWRpb0VsZW1lbnRSZWYiLCJzdGFydFJlY29yZGluZyIsImR1cmF0aW9uIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJzdG9wUmVjb3JkaW5nIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyRHVyYXRpb25JbnRlcnZhbCIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwib25kYXRhYXZhaWxhYmxlIiwiZSIsInB1c2giLCJkYXRhIiwib25zdG9wIiwiQmxvYiIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJyZW50Iiwic3JjIiwib25lcnJvciIsInN0YXJ0IiwiZXJyb3IiLCJzdG9wIiwidXBsb2FkUmVjb3JkaW5nIiwibGVuZ3RoIiwidGltZXN0YW1wIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhlYWRlcnMiLCJ1cGxvYWRUaW1lIiwic2V0VGltZW91dCIsInJlcyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNsaWNrIiwic3BhbiIsInJlZiIsImNvbnRyb2xzIiwiY29sb3IiLCJzaG93RGlzbWlzc0J1dHRvbiIsInNpemUiLCJvcGVuIiwib25DbG9zZSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});