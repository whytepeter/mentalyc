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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _icons_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/Loader */ \"./src/icons/Loader.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                console.log(duration, maxDuration);\n                if (duration === maxDuration) {\n                    stopRecording();\n                    clearInterval(id);\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const clearDurationInterval = ()=>{\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    };\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n            };\n            recorder.onerror = ()=>{\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            setMediaRecorder(recorder);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    const uploadRecording = async ()=>{\n        if (!recordedBlob) return;\n        try {\n            setIsUploading(true);\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob, \"recording.wav\");\n            formData.append(\"sessionName\", sessionName);\n            const response = await fetch(\"YOUR_UPLOAD_URL\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!response.ok) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Failed to upload recording\");\n                return;\n            }\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Recording uploaded successfully\");\n        } catch (error) {\n            console.error(\"Error uploading recording:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(error === null || error === void 0 ? void 0 : error.message);\n        } finally{\n            setIsUploading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>{\n                            setIsUploading(true);\n                        },\n                        className: \"text-[20px] \",\n                        children: [\n                            \"Name: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: sessionName\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 17\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this),\n                    isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        duration: recordingDuration,\n                        maxDuration: maxDuration,\n                        stopRecording: stopRecording\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioElementRef,\n                                controls: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: startRecording,\n                                        color: \"default\",\n                                        className: \"w-full\",\n                                        children: \"Record Again\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 155,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: uploadRecording,\n                                        className: \"w-full\",\n                                        children: \"Upload Recording\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 162,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_2__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: isUploading,\n                onClose: ()=>{\n                    setIsUploading(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            onClick: ()=>{\n                                setIsUploading(false);\n                            },\n                            className: \"font-bold text-xl mb-1\",\n                            children: \"Uploading recording\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 179,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 178,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"animate-spin\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 191,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 190,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 189,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 170,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingSession, \"YUof87jskub7lWCr07GZGGHh/EE=\");\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNSO0FBQ047QUFDVDtBQUNnQztBQUM1QjtBQVF6QixTQUFTUyxpQkFBaUIsS0FJbEIsRUFBRTtRQUpnQixFQUN2Q0MsWUFBVyxFQUNYQyxZQUFXLEVBQ1hDLGVBQWMsRUFDTyxHQUprQjs7SUFLdkMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2IsK0NBQVFBLENBQ2hELElBQUk7SUFFTixNQUFNLENBQUNjLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQVUsS0FBSztJQUM3RCxNQUFNLENBQUNnQixhQUFhQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNrQixjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFjLElBQUk7SUFDbEUsTUFBTSxDQUFDb0IsbUJBQW1CQyxxQkFBcUIsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ3NCLFlBQVlDLGNBQWMsR0FBR3ZCLCtDQUFRQSxDQUF3QixJQUFJO0lBQ3hFLE1BQU13QixrQkFBa0J0Qiw2Q0FBTUEsQ0FBMEIsSUFBSTtJQUU1REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlTLGFBQWE7WUFDZmU7WUFFQSwwQ0FBMEM7WUFDMUMsSUFBSUMsV0FBVztZQUNmLE1BQU1DLEtBQUtDLFlBQVksSUFBTTtnQkFDM0JQLHFCQUFxQixDQUFDUSxPQUFTQSxPQUFPO2dCQUN0Q0g7Z0JBQ0FJLFFBQVFDLEdBQUcsQ0FBQ0wsVUFBVVY7Z0JBQ3RCLElBQUlVLGFBQWFWLGFBQWE7b0JBQzVCZ0I7b0JBQ0FDLGNBQWNOO2dCQUNoQixDQUFDO1lBQ0gsR0FBRztZQUNISixjQUFjSTtZQUVkLE9BQU8sSUFBTTtnQkFDWE0sY0FBY047WUFDaEI7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDakI7S0FBWTtJQUVoQixNQUFNd0Isd0JBQXdCLElBQVk7UUFDeEMsSUFBSVosWUFBWTtZQUNkVyxjQUFjWDtZQUNkQyxjQUFjLElBQUk7UUFDcEIsQ0FBQztJQUNIO0lBRUEsTUFBTUUsaUJBQWlCLFVBQVk7UUFDakMsSUFBSTtZQUNGLE1BQU1VLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7Z0JBQUVDLE9BQU8sSUFBSTtZQUFDO1lBQ3ZFLE1BQU1DLFdBQVcsSUFBSUMsY0FBY047WUFDbkMsTUFBTU8sU0FBaUIsRUFBRTtZQUV6QkYsU0FBU0csZUFBZSxHQUFHLENBQUNDLElBQU07Z0JBQ2hDRixPQUFPRyxJQUFJLENBQUNELEVBQUVFLElBQUk7WUFDcEI7WUFFQU4sU0FBU08sTUFBTSxHQUFHLElBQU07Z0JBQ3RCLE1BQU03QixlQUFlLElBQUk4QixLQUFLTixRQUFRO29CQUFFTyxNQUFNO2dCQUFZO2dCQUMxRDlCLGdCQUFnQkQ7Z0JBQ2hCWSxRQUFRQyxHQUFHLENBQUM7Z0JBRVosV0FBVztnQkFDWCxNQUFNbUIsV0FBV0MsSUFBSUMsZUFBZSxDQUFDbEM7Z0JBQ3JDLElBQUlNLGdCQUFnQjZCLE9BQU8sRUFBRTtvQkFDM0I3QixnQkFBZ0I2QixPQUFPLENBQUNDLEdBQUcsR0FBR0o7Z0JBQ2hDLENBQUM7WUFDSDtZQUVBVixTQUFTZSxPQUFPLEdBQUcsSUFBTTtnQkFDdkI1QyxlQUFlLEtBQUs7WUFDdEI7WUFFQTZCLFNBQVNnQixLQUFLO1lBQ2Q3QyxlQUFlLElBQUk7WUFFbkJFLGlCQUFpQjJCO1FBQ25CLEVBQUUsT0FBT2lCLE9BQU87WUFDZDNCLFFBQVEyQixLQUFLLENBQUMsNkJBQTZCQTtRQUM3QztJQUNGO0lBRUEsTUFBTXpCLGdCQUFnQixJQUFZO1FBQ2hDLElBQUlwQixlQUFlO1lBQ2pCQSxjQUFjOEMsSUFBSTtZQUNsQi9DLGVBQWUsS0FBSztZQUNwQlUscUJBQXFCO1FBQ3ZCLENBQUM7UUFFRGE7SUFDRjtJQUVBLE1BQU15QixrQkFBa0IsVUFBWTtRQUNsQyxJQUFJLENBQUN6QyxjQUFjO1FBQ25CLElBQUk7WUFDRkgsZUFBZSxJQUFJO1lBRW5CLE1BQU02QyxXQUFXLElBQUlDO1lBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBUzVDLGNBQWM7WUFDdkMwQyxTQUFTRSxNQUFNLENBQUMsZUFBZXJEO1lBRS9CLE1BQU1zRCxXQUFXLE1BQU1DLE1BQU0sbUJBQW1CO2dCQUM5Q0MsUUFBUTtnQkFDUkMsTUFBTU47WUFDUjtZQUVBLElBQUksQ0FBQ0csU0FBU0ksRUFBRSxFQUFFO2dCQUNoQjVELHdEQUFXLENBQUM7Z0JBQ1o7WUFDRixDQUFDO1lBRURBLDBEQUFhLENBQUM7UUFDaEIsRUFBRSxPQUFPa0QsT0FBWTtZQUNuQjNCLFFBQVEyQixLQUFLLENBQUMsOEJBQThCQTtZQUM1Q2xELHdEQUFXLENBQUNrRCxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9ZLE9BQU87UUFDNUIsU0FBVTtZQUNSdEQsZUFBZSxLQUFLO1FBQ3RCO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN1RDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxTQUFTLElBQU07NEJBQ2IxRCxlQUFlLElBQUk7d0JBQ3JCO3dCQUNBd0QsV0FBVTs7NEJBQ1g7MENBQ08sOERBQUNHO2dDQUFLSCxXQUFVOzBDQUFpQjlEOzs7Ozs7NEJBQW9COzs7Ozs7O29CQUc1REMsNEJBQ0MsOERBQUNKLDZFQUFjQTt3QkFDYm9CLFVBQVVOO3dCQUNWSixhQUFhQTt3QkFDYmdCLGVBQWVBOzs7Ozs2Q0FHakI7OzBDQUNFLDhEQUFDTztnQ0FBTW9DLEtBQUtuRDtnQ0FBaUJvRCxRQUFROzs7Ozs7MENBRXJDLDhEQUFDTjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNuRSxzREFBTUE7d0NBQ0xxRSxTQUFTaEQ7d0NBQ1RvRCxPQUFNO3dDQUNOTixXQUFVO2tEQUNYOzs7Ozs7a0RBR0QsOERBQUNuRSxzREFBTUE7d0NBQUNxRSxTQUFTZDt3Q0FBaUJZLFdBQVU7a0RBQVM7Ozs7Ozs7Ozs7Ozs7b0NBSzFEOzs7Ozs7OzBCQUdILDhEQUFDcEUsNERBQVNBO2dCQUNSMkUsbUJBQW1CLEtBQUs7Z0JBQ3hCQyxNQUFLO2dCQUNMQyxNQUFNbEU7Z0JBQ05tRSxTQUFTLElBQU07b0JBQ2JsRSxlQUFlLEtBQUs7Z0JBQ3RCOztrQ0FFQSw4REFBQ3VEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDVzs0QkFDQ1QsU0FBUyxJQUFNO2dDQUNiMUQsZUFBZSxLQUFLOzRCQUN0Qjs0QkFDQXdELFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7O2tDQUtILDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNsRSxxREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5CLENBQUM7R0F2THVCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4P2M1YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFzZU1vZGFsIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CYXNlTW9kYWxcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2ljb25zL0xvYWRlclwiO1xuaW1wb3J0IFJlY29yZGluZ1BhbmVsIGZyb20gXCJAL2NvbXBvbmVudHMvUmVjb3JkaW5ncy9SZWNvcmRpbmdQYW5lbFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbnR5cGUgUmVjb3JkaW5nU2Vzc2lvblR5cGUgPSB7XG4gIHNlc3Npb25OYW1lOiBzdHJpbmc7XG4gIGlzUmVjb3JkaW5nOiBCb29sZWFuO1xuICBzZXRJc1JlY29yZGluZzogKHZhbDogYm9vbGVhbikgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29yZGluZ1Nlc3Npb24oe1xuICBzZXNzaW9uTmFtZSxcbiAgaXNSZWNvcmRpbmcsXG4gIHNldElzUmVjb3JkaW5nLFxufTogUmVjb3JkaW5nU2Vzc2lvblR5cGUpIHtcbiAgY29uc3QgW21lZGlhUmVjb3JkZXIsIHNldE1lZGlhUmVjb3JkZXJdID0gdXNlU3RhdGU8TWVkaWFSZWNvcmRlciB8IG51bGw+KFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFttYXhEdXJhdGlvbiwgc2V0TWF4RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPig2MCk7XG4gIGNvbnN0IFtyZWNvcmRlZEJsb2IsIHNldFJlY29yZGVkQmxvYl0gPSB1c2VTdGF0ZTxCbG9iIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtyZWNvcmRpbmdEdXJhdGlvbiwgc2V0UmVjb3JkaW5nRHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGF1ZGlvRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNSZWNvcmRpbmcpIHtcbiAgICAgIHN0YXJ0UmVjb3JkaW5nKCk7XG5cbiAgICAgIC8vIFN0YXJ0IHRpbWVyIHRvIHRyYWNrIHJlY29yZGluZyBkdXJhdGlvblxuICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgICBkdXJhdGlvbisrO1xuICAgICAgICBjb25zb2xlLmxvZyhkdXJhdGlvbiwgbWF4RHVyYXRpb24pO1xuICAgICAgICBpZiAoZHVyYXRpb24gPT09IG1heER1cmF0aW9uKSB7XG4gICAgICAgICAgc3RvcFJlY29yZGluZygpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldEludGVydmFsSWQoaWQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbaXNSZWNvcmRpbmddKTtcblxuICBjb25zdCBjbGVhckR1cmF0aW9uSW50ZXJ2YWwgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKGludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICBzZXRJbnRlcnZhbElkKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbiAgICAgIGNvbnN0IGNodW5rczogQmxvYltdID0gW107XG5cbiAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChlKSA9PiB7XG4gICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZGVkQmxvYiA9IG5ldyBCbG9iKGNodW5rcywgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pO1xuICAgICAgICBzZXRSZWNvcmRlZEJsb2IocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcblxuICAgICAgICAvL1NldCBhdWRpb1xuICAgICAgICBjb25zdCBhdWRpb1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgaWYgKGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQuc3JjID0gYXVkaW9VUkw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICBzZXRJc1JlY29yZGluZyh0cnVlKTtcblxuICAgICAgc2V0TWVkaWFSZWNvcmRlcihyZWNvcmRlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlcikge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigwKTtcbiAgICB9XG5cbiAgICBjbGVhckR1cmF0aW9uSW50ZXJ2YWwoKTtcbiAgfTtcblxuICBjb25zdCB1cGxvYWRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFyZWNvcmRlZEJsb2IpIHJldHVybjtcbiAgICB0cnkge1xuICAgICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdWRpb1wiLCByZWNvcmRlZEJsb2IsIFwicmVjb3JkaW5nLndhdlwiKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNlc3Npb25OYW1lXCIsIHNlc3Npb25OYW1lKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIllPVVJfVVBMT0FEX1VSTFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gdXBsb2FkIHJlY29yZGluZ1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiUmVjb3JkaW5nIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBsb2FkaW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgICAgdG9hc3QuZXJyb3IoZXJyb3I/Lm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTggdy1mdWxsIHNtOm1heC13LTJ4bFwiPlxuICAgICAgICA8cFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gXCJcbiAgICAgICAgPlxuICAgICAgICAgIE5hbWU6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57c2Vzc2lvbk5hbWV9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIHtpc1JlY29yZGluZyA/IChcbiAgICAgICAgICA8UmVjb3JkaW5nUGFuZWxcbiAgICAgICAgICAgIGR1cmF0aW9uPXtyZWNvcmRpbmdEdXJhdGlvbn1cbiAgICAgICAgICAgIG1heER1cmF0aW9uPXttYXhEdXJhdGlvbn1cbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmc9e3N0b3BSZWNvcmRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9FbGVtZW50UmVmfSBjb250cm9scz48L2F1ZGlvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgdy1mdWxsIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydFJlY29yZGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZWNvcmQgQWdhaW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dXBsb2FkUmVjb3JkaW5nfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICBVcGxvYWQgUmVjb3JkaW5nXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEJhc2VNb2RhbFxuICAgICAgICBzaG93RGlzbWlzc0J1dHRvbj17ZmFsc2V9XG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIG9wZW49e2lzVXBsb2FkaW5nfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDNcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTFcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFVwbG9hZGluZyByZWNvcmRpbmdcbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW5cIj5cbiAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Jhc2VNb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQmFzZU1vZGFsIiwiQnV0dG9uIiwiTG9hZGVyIiwiUmVjb3JkaW5nUGFuZWwiLCJ0b2FzdCIsIlJlY29yZGluZ1Nlc3Npb24iLCJzZXNzaW9uTmFtZSIsImlzUmVjb3JkaW5nIiwic2V0SXNSZWNvcmRpbmciLCJtZWRpYVJlY29yZGVyIiwic2V0TWVkaWFSZWNvcmRlciIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJtYXhEdXJhdGlvbiIsInNldE1heER1cmF0aW9uIiwicmVjb3JkZWRCbG9iIiwic2V0UmVjb3JkZWRCbG9iIiwicmVjb3JkaW5nRHVyYXRpb24iLCJzZXRSZWNvcmRpbmdEdXJhdGlvbiIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwiYXVkaW9FbGVtZW50UmVmIiwic3RhcnRSZWNvcmRpbmciLCJkdXJhdGlvbiIsImlkIiwic2V0SW50ZXJ2YWwiLCJwcmV2IiwiY29uc29sZSIsImxvZyIsInN0b3BSZWNvcmRpbmciLCJjbGVhckludGVydmFsIiwiY2xlYXJEdXJhdGlvbkludGVydmFsIiwic3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJyZWNvcmRlciIsIk1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJvbmRhdGFhdmFpbGFibGUiLCJlIiwicHVzaCIsImRhdGEiLCJvbnN0b3AiLCJCbG9iIiwidHlwZSIsImF1ZGlvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY3VycmVudCIsInNyYyIsIm9uZXJyb3IiLCJzdGFydCIsImVycm9yIiwic3RvcCIsInVwbG9hZFJlY29yZGluZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIm9rIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayIsInNwYW4iLCJyZWYiLCJjb250cm9scyIsImNvbG9yIiwic2hvd0Rpc21pc3NCdXR0b24iLCJzaXplIiwib3BlbiIsIm9uQ2xvc2UiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});