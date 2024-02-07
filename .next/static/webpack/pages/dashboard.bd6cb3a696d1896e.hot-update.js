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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingStatus, setRecordingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Idle\");\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                console.log(duration, maxDuration);\n                if (duration === maxDuration) {\n                    stopRecording();\n                    clearInterval(id);\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const clearDurationInterval = ()=>{\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    };\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n                setRecordingStatus(\"Recording Stopped\");\n            };\n            recorder.onerror = ()=>{\n                setRecordingStatus(\"Recording Error\");\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            setRecordingStatus(\"Recording Started\");\n            setMediaRecorder(recorder);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n            setRecordingStatus(\"Recording Error\");\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    const uploadRecording = async ()=>{\n        if (!recordedBlob) return;\n        try {\n            setIsUploading(true);\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob, \"recording.wav\");\n            formData.append(\"sessionName\", sessionName);\n            const response = await fetch(\"YOUR_UPLOAD_URL\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!response.ok) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Failed to upload recording\");\n                return;\n            }\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Recording uploaded successfully\");\n        } catch (error) {\n            console.error(\"Error uploading recording:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(error === null || error === void 0 ? void 0 : error.message);\n        } finally{\n            setIsUploading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>{\n                            setIsUploading(true);\n                        },\n                        className: \"text-[20px] \",\n                        children: [\n                            \"Name: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: sessionName\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 17\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, this),\n                    isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        duration: recordingDuration,\n                        maxDuration: maxDuration,\n                        stopRecording: stopRecording\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioElementRef,\n                                controls: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: startRecording,\n                                        color: \"default\",\n                                        className: \"w-full\",\n                                        children: \"Record Again\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 158,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: uploadRecording,\n                                        className: \"w-full\",\n                                        children: \"Upload Recording\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 165,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_2__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: isUploading,\n                onClose: ()=>{\n                    setIsUploading(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-6 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            onClick: ()=>{\n                                setIsUploading(false);\n                            },\n                            className: \"font-bold text-xl mb-1\",\n                            children: \"Uploading recording\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 182,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 181,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: \"Uploading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 192,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingSession, \"AFp4mS/Zm/yCm3B+6c9vxsn3wAc=\");\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ1I7QUFDTjtBQUN1QjtBQUM1QjtBQVF6QixTQUFTUSxpQkFBaUIsS0FJbEIsRUFBRTtRQUpnQixFQUN2Q0MsWUFBVyxFQUNYQyxZQUFXLEVBQ1hDLGVBQWMsRUFDTyxHQUprQjs7SUFLdkMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQ2hELElBQUk7SUFFTixNQUFNLENBQUNhLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQVUsS0FBSztJQUM3RCxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFTO0lBQ3ZELE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHbEIsK0NBQVFBLENBQWMsSUFBSTtJQUNsRSxNQUFNLENBQUNtQixtQkFBbUJDLHFCQUFxQixHQUFHcEIsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDcUIsWUFBWUMsY0FBYyxHQUFHdEIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDdUIsaUJBQWlCQyxtQkFBbUIsR0FBR3hCLCtDQUFRQSxDQUFTO0lBQy9ELE1BQU15QixrQkFBa0J2Qiw2Q0FBTUEsQ0FBMEIsSUFBSTtJQUU1REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlRLGFBQWE7WUFDZmlCO1lBRUEsMENBQTBDO1lBQzFDLElBQUlDLFdBQVc7WUFDZixNQUFNQyxLQUFLQyxZQUFZLElBQU07Z0JBQzNCVCxxQkFBcUIsQ0FBQ1UsT0FBU0EsT0FBTztnQkFDdENIO2dCQUNBSSxRQUFRQyxHQUFHLENBQUNMLFVBQVVaO2dCQUN0QixJQUFJWSxhQUFhWixhQUFhO29CQUM1QmtCO29CQUNBQyxjQUFjTjtnQkFDaEIsQ0FBQztZQUNILEdBQUc7WUFDSE4sY0FBY007WUFFZCxPQUFPLElBQU07Z0JBQ1hNLGNBQWNOO1lBQ2hC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Tk4sV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDcEUsc0RBQU1BO3dDQUFDc0UsU0FBU2Q7d0NBQWlCWSxXQUFVO2tEQUFTOzs7Ozs7Ozs7Ozs7O29DQUsxRDs7Ozs7OzswQkFHSCw4REFBQ3JFLDREQUFTQTtnQkFDUjRFLG1CQUFtQixLQUFLO2dCQUN4QkMsTUFBSztnQkFDTEMsTUFBTXBFO2dCQUNOcUUsU0FBUyxJQUFNO29CQUNicEUsZUFBZSxLQUFLO2dCQUN0Qjs7a0NBRUEsOERBQUN5RDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1c7NEJBQ0NULFNBQVMsSUFBTTtnQ0FDYjVELGVBQWUsS0FBSzs0QkFDdEI7NEJBQ0EwRCxXQUFVO3NDQUNYOzs7Ozs7Ozs7OztrQ0FLSCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQXlDOzs7Ozs7Ozs7Ozs7OztBQU1oRSxDQUFDO0dBekx1QmpFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nU2Vzc2lvbi50c3g/YzVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYXNlTW9kYWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL0Jhc2VNb2RhbFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBSZWNvcmRpbmdQYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nUGFuZWxcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG50eXBlIFJlY29yZGluZ1Nlc3Npb25UeXBlID0ge1xuICBzZXNzaW9uTmFtZTogc3RyaW5nO1xuICBpc1JlY29yZGluZzogQm9vbGVhbjtcbiAgc2V0SXNSZWNvcmRpbmc6ICh2YWw6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRpbmdTZXNzaW9uKHtcbiAgc2Vzc2lvbk5hbWUsXG4gIGlzUmVjb3JkaW5nLFxuICBzZXRJc1JlY29yZGluZyxcbn06IFJlY29yZGluZ1Nlc3Npb25UeXBlKSB7XG4gIGNvbnN0IFttZWRpYVJlY29yZGVyLCBzZXRNZWRpYVJlY29yZGVyXSA9IHVzZVN0YXRlPE1lZGlhUmVjb3JkZXIgfCBudWxsPihcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbbWF4RHVyYXRpb24sIHNldE1heER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oNjApO1xuICBjb25zdCBbcmVjb3JkZWRCbG9iLCBzZXRSZWNvcmRlZEJsb2JdID0gdXNlU3RhdGU8QmxvYiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmVjb3JkaW5nRHVyYXRpb24sIHNldFJlY29yZGluZ0R1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmVjb3JkaW5nU3RhdHVzLCBzZXRSZWNvcmRpbmdTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPihcIklkbGVcIik7XG4gIGNvbnN0IGF1ZGlvRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNSZWNvcmRpbmcpIHtcbiAgICAgIHN0YXJ0UmVjb3JkaW5nKCk7XG5cbiAgICAgIC8vIFN0YXJ0IHRpbWVyIHRvIHRyYWNrIHJlY29yZGluZyBkdXJhdGlvblxuICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgICBkdXJhdGlvbisrO1xuICAgICAgICBjb25zb2xlLmxvZyhkdXJhdGlvbiwgbWF4RHVyYXRpb24pO1xuICAgICAgICBpZiAoZHVyYXRpb24gPT09IG1heER1cmF0aW9uKSB7XG4gICAgICAgICAgc3RvcFJlY29yZGluZygpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldEludGVydmFsSWQoaWQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbaXNSZWNvcmRpbmddKTtcblxuICBjb25zdCBjbGVhckR1cmF0aW9uSW50ZXJ2YWwgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKGludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICBzZXRJbnRlcnZhbElkKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbiAgICAgIGNvbnN0IGNodW5rczogQmxvYltdID0gW107XG5cbiAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChlKSA9PiB7XG4gICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZGVkQmxvYiA9IG5ldyBCbG9iKGNodW5rcywgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pO1xuICAgICAgICBzZXRSZWNvcmRlZEJsb2IocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcblxuICAgICAgICAvL1NldCBhdWRpb1xuICAgICAgICBjb25zdCBhdWRpb1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgaWYgKGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQuc3JjID0gYXVkaW9VUkw7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIFN0b3BwZWRcIik7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgRXJyb3JcIik7XG4gICAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICBzZXRJc1JlY29yZGluZyh0cnVlKTtcbiAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBTdGFydGVkXCIpO1xuICAgICAgc2V0TWVkaWFSZWNvcmRlcihyZWNvcmRlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBFcnJvclwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlcikge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigwKTtcbiAgICB9XG5cbiAgICBjbGVhckR1cmF0aW9uSW50ZXJ2YWwoKTtcbiAgfTtcblxuICBjb25zdCB1cGxvYWRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFyZWNvcmRlZEJsb2IpIHJldHVybjtcbiAgICB0cnkge1xuICAgICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdWRpb1wiLCByZWNvcmRlZEJsb2IsIFwicmVjb3JkaW5nLndhdlwiKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNlc3Npb25OYW1lXCIsIHNlc3Npb25OYW1lKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIllPVVJfVVBMT0FEX1VSTFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gdXBsb2FkIHJlY29yZGluZ1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiUmVjb3JkaW5nIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBsb2FkaW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgICAgdG9hc3QuZXJyb3IoZXJyb3I/Lm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTggdy1mdWxsIHNtOm1heC13LTJ4bFwiPlxuICAgICAgICA8cFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gXCJcbiAgICAgICAgPlxuICAgICAgICAgIE5hbWU6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57c2Vzc2lvbk5hbWV9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIHtpc1JlY29yZGluZyA/IChcbiAgICAgICAgICA8UmVjb3JkaW5nUGFuZWxcbiAgICAgICAgICAgIGR1cmF0aW9uPXtyZWNvcmRpbmdEdXJhdGlvbn1cbiAgICAgICAgICAgIG1heER1cmF0aW9uPXttYXhEdXJhdGlvbn1cbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmc9e3N0b3BSZWNvcmRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9FbGVtZW50UmVmfSBjb250cm9scz48L2F1ZGlvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgdy1mdWxsIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydFJlY29yZGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZWNvcmQgQWdhaW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dXBsb2FkUmVjb3JkaW5nfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICBVcGxvYWQgUmVjb3JkaW5nXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEJhc2VNb2RhbFxuICAgICAgICBzaG93RGlzbWlzc0J1dHRvbj17ZmFsc2V9XG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIG9wZW49e2lzVXBsb2FkaW5nfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDNcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTFcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFVwbG9hZGluZyByZWNvcmRpbmdcbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgVXBsb2FkaW5nLi4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CYXNlTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkJhc2VNb2RhbCIsIkJ1dHRvbiIsIlJlY29yZGluZ1BhbmVsIiwidG9hc3QiLCJSZWNvcmRpbmdTZXNzaW9uIiwic2Vzc2lvbk5hbWUiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwibWVkaWFSZWNvcmRlciIsInNldE1lZGlhUmVjb3JkZXIiLCJpc1VwbG9hZGluZyIsInNldElzVXBsb2FkaW5nIiwibWF4RHVyYXRpb24iLCJzZXRNYXhEdXJhdGlvbiIsInJlY29yZGVkQmxvYiIsInNldFJlY29yZGVkQmxvYiIsInJlY29yZGluZ0R1cmF0aW9uIiwic2V0UmVjb3JkaW5nRHVyYXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsInJlY29yZGluZ1N0YXR1cyIsInNldFJlY29yZGluZ1N0YXR1cyIsImF1ZGlvRWxlbWVudFJlZiIsInN0YXJ0UmVjb3JkaW5nIiwiZHVyYXRpb24iLCJpZCIsInNldEludGVydmFsIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJzdG9wUmVjb3JkaW5nIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyRHVyYXRpb25JbnRlcnZhbCIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwib25kYXRhYXZhaWxhYmxlIiwiZSIsInB1c2giLCJkYXRhIiwib25zdG9wIiwiQmxvYiIsInR5cGUiLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJzcmMiLCJvbmVycm9yIiwic3RhcnQiLCJlcnJvciIsInN0b3AiLCJ1cGxvYWRSZWNvcmRpbmciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJvayIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm9uQ2xpY2siLCJzcGFuIiwicmVmIiwiY29udHJvbHMiLCJjb2xvciIsInNob3dEaXNtaXNzQnV0dG9uIiwic2l6ZSIsIm9wZW4iLCJvbkNsb3NlIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});