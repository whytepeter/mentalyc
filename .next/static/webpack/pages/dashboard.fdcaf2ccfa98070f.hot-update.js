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

/***/ "./src/components/Recordings/RecordingPanel.tsx":
/*!******************************************************!*\
  !*** ./src/components/Recordings/RecordingPanel.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _icons_Play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icons/Play */ \"./src/icons/Play.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction RecordingPanel(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [chunks, setChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingStatus, setRecordingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Idle\");\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                console.log(duration, maxDuration);\n                if (duration === maxDuration) {\n                    stopRecording();\n                    clearInterval(id);\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n                setChunks(chunks);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                // Code to upload the recordedBlob to the server\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n                setRecordingStatus(\"Recording Stopped\");\n            };\n            recorder.onerror = ()=>{\n                setRecordingStatus(\"Recording Error\");\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            setRecordingStatus(\"Recording Started\");\n            setMediaRecorder(recorder);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n            setRecordingStatus(\"Recording Error\");\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    const uploadRecording = async ()=>{\n        console.log(\"Start Uploading\");\n    };\n    function clearDurationInterval() {\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] \",\n                    children: [\n                        \"Name: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-gray-400\",\n                            children: sessionName\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 17\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this),\n                isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full  items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer bg-gradient w-12 h-12 flex items-center justify-center rounded-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Play__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative overflow-hidden flex-1 w-full  p-4 bg-slate-100\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    width: \"\".concat(Math.round(recordingDuration * (100 / maxDuration)), \"%\")\n                                },\n                                className: \" h-4  bg-primary-100 absolute left-0 top-1/2 -translate-y-1/2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" text-primary-100 text-xl font-medium\",\n                            children: [\n                                recordingDuration,\n                                \":\",\n                                maxDuration\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, this),\n                isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: stopRecording,\n                    className: \"p-2 rounded-full bg-gradient text-white h-20 w-20 flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 w-full h-full rounded-full border border-white flex items-center justify-center\",\n                        children: \"Stop\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                            ref: audioElementRef,\n                            controls: true\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: startRecording,\n                                    color: \"default\",\n                                    className: \"w-full\",\n                                    children: \"Record Again\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: uploadRecording,\n                                    className: \"w-full\",\n                                    children: \"Upload Recording\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 151,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n            lineNumber: 113,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RecordingPanel, \"TqPOoddMQqMwYeL1SeOT3i92rYk=\");\n_c = RecordingPanel;\nvar _c;\n$RefreshReg$(_c, \"RecordingPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkQ7QUFFZDtBQUNiO0FBUWpCLFNBQVNNLGVBQWUsS0FJbEIsRUFBRTtRQUpnQixFQUNyQ0MsWUFBVyxFQUNYQyxZQUFXLEVBQ1hDLGVBQWMsRUFDSyxHQUprQjs7SUFLckMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQ2hELElBQUk7SUFFTixNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQVMsRUFBRTtJQUMvQyxNQUFNLENBQUNhLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDZSxtQkFBbUJDLHFCQUFxQixHQUFHaEIsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDaUIsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDbUIsaUJBQWlCQyxtQkFBbUIsR0FBR3BCLCtDQUFRQSxDQUFTO0lBQy9ELE1BQU1xQixrQkFBa0JuQiw2Q0FBTUEsQ0FBMEIsSUFBSTtJQUU1RCxFQUFFO0lBQ0ZELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJTSxhQUFhO1lBQ2ZlO1lBRUEsMENBQTBDO1lBQzFDLElBQUlDLFdBQVc7WUFDZixNQUFNQyxLQUFLQyxZQUFZLElBQU07Z0JBQzNCVCxxQkFBcUIsQ0FBQ1UsT0FBU0EsT0FBTztnQkFDdENIO2dCQUNBSSxRQUFRQyxHQUFHLENBQUNMLFVBQVVWO2dCQUN0QixJQUFJVSxhQUFhVixhQUFhO29CQUM1QmdCO29CQUNBQyxjQUFjTjtnQkFDaEIsQ0FBQztZQUNILEdBQUc7WUFDSE4sY0FBY007WUFFZCxPQUFPLElBQU07Z0JBQ1hNLGNBQWNOO1lBQ2hCO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ2pCO0tBQVk7SUFFaEIsTUFBTWUsaUJBQWlCLFVBQVk7UUFDakMsSUFBSTtZQUNGLE1BQU1TLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7Z0JBQUVDLE9BQU8sSUFBSTtZQUFDO1lBQ3ZFLE1BQU1DLFdBQVcsSUFBSUMsY0FBY047WUFDbkMsTUFBTXBCLFNBQWlCLEVBQUU7WUFFekJ5QixTQUFTRSxlQUFlLEdBQUcsQ0FBQ0MsSUFBTTtnQkFDaEM1QixPQUFPNkIsSUFBSSxDQUFDRCxFQUFFRSxJQUFJO2dCQUNsQjdCLFVBQVVEO1lBQ1o7WUFFQXlCLFNBQVNNLE1BQU0sR0FBRyxJQUFNO2dCQUN0QixNQUFNQyxlQUFlLElBQUlDLEtBQUtqQyxRQUFRO29CQUFFa0MsTUFBTTtnQkFBWTtnQkFDMUQsZ0RBQWdEO2dCQUNoRGxCLFFBQVFDLEdBQUcsQ0FBQztnQkFFWixXQUFXO2dCQUNYLE1BQU1rQixXQUFXQyxJQUFJQyxlQUFlLENBQUNMO2dCQUNyQyxJQUFJdEIsZ0JBQWdCNEIsT0FBTyxFQUFFO29CQUMzQjVCLGdCQUFnQjRCLE9BQU8sQ0FBQ0MsR0FBRyxHQUFHSjtnQkFDaEMsQ0FBQztnQkFDRDFCLG1CQUFtQjtZQUNyQjtZQUVBZ0IsU0FBU2UsT0FBTyxHQUFHLElBQU07Z0JBQ3ZCL0IsbUJBQW1CO2dCQUNuQlosZUFBZSxLQUFLO1lBQ3RCO1lBRUE0QixTQUFTZ0IsS0FBSztZQUNkNUMsZUFBZSxJQUFJO1lBQ25CWSxtQkFBbUI7WUFDbkJWLGlCQUFpQjBCO1FBQ25CLEVBQUUsT0FBT2lCLE9BQU87WUFDZDFCLFFBQVEwQixLQUFLLENBQUMsNkJBQTZCQTtZQUMzQ2pDLG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsTUFBTVMsZ0JBQWdCLElBQVk7UUFDaEMsSUFBSXBCLGVBQWU7WUFDakJBLGNBQWM2QyxJQUFJO1lBQ2xCOUMsZUFBZSxLQUFLO1lBQ3BCUSxxQkFBcUI7UUFDdkIsQ0FBQztRQUVEdUM7SUFDRjtJQUVBLE1BQU1DLGtCQUFrQixVQUFZO1FBQ2xDN0IsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxTQUFTMkIsd0JBQXdCO1FBQy9CLElBQUl0QyxZQUFZO1lBQ2RhLGNBQWNiO1lBQ2RDLGNBQWMsSUFBSTtRQUNwQixDQUFDO0lBQ0g7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ3VDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUQsV0FBVTs7d0JBQWU7c0NBQ3BCLDhEQUFDRTs0QkFBS0YsV0FBVTtzQ0FBaUJwRDs7Ozs7O3dCQUFvQjs7Ozs7OztnQkFHNURDLDZCQUNDLDhEQUFDa0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ3RELG1EQUFJQTs7Ozs7Ozs7OztzQ0FFUCw4REFBQ3FEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FDQ0ksT0FBTztvQ0FDTEMsT0FBTyxHQUVMLE9BRlFDLEtBQUtDLEtBQUssQ0FDbEJqRCxvQkFBcUIsT0FBTUYsV0FBVSxJQUNyQztnQ0FDSjtnQ0FDQTZDLFdBQVk7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUNaM0M7Z0NBQWtCO2dDQUFFRjs7Ozs7Ozs7Ozs7OztnQkFLMUJOLDRCQUNDLDhEQUFDMEQ7b0JBQ0NDLFNBQVNyQztvQkFDVDZCLFdBQVU7OEJBRVYsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUFzRjs7Ozs7Ozs7Ozt5Q0FLdkc7O3NDQUNFLDhEQUFDdkI7NEJBQU1nQyxLQUFLOUM7NEJBQWlCK0MsUUFBUTs7Ozs7O3NDQUNyQyw4REFBQ1g7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDdkQsc0RBQU1BO29DQUNMK0QsU0FBUzVDO29DQUNUK0MsT0FBTTtvQ0FDTlgsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDdkQsc0RBQU1BO29DQUFDK0QsU0FBU1Y7b0NBQWlCRSxXQUFVOzhDQUFTOzs7Ozs7Ozs7Ozs7O2dDQUsxRDs7Ozs7Ozs7QUFJVCxDQUFDO0dBNUp1QnJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nUGFuZWwudHN4Pzk2NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVjb3JkaW5nIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgUGxheSBmcm9tIFwiQC9pY29ucy9QbGF5XCI7XG5cbnR5cGUgUmVjb3JkaW5nUGFuZWxUeXBlID0ge1xuICBzZXNzaW9uTmFtZTogc3RyaW5nO1xuICBpc1JlY29yZGluZzogQm9vbGVhbjtcbiAgc2V0SXNSZWNvcmRpbmc6ICh2YWw6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRpbmdQYW5lbCh7XG4gIHNlc3Npb25OYW1lLFxuICBpc1JlY29yZGluZyxcbiAgc2V0SXNSZWNvcmRpbmcsXG59OiBSZWNvcmRpbmdQYW5lbFR5cGUpIHtcbiAgY29uc3QgW21lZGlhUmVjb3JkZXIsIHNldE1lZGlhUmVjb3JkZXJdID0gdXNlU3RhdGU8TWVkaWFSZWNvcmRlciB8IG51bGw+KFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgW2NodW5rcywgc2V0Q2h1bmtzXSA9IHVzZVN0YXRlPEJsb2JbXT4oW10pO1xuICBjb25zdCBbbWF4RHVyYXRpb24sIHNldE1heER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oNSk7XG4gIGNvbnN0IFtyZWNvcmRpbmdEdXJhdGlvbiwgc2V0UmVjb3JkaW5nRHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtyZWNvcmRpbmdTdGF0dXMsIHNldFJlY29yZGluZ1N0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiSWRsZVwiKTtcbiAgY29uc3QgYXVkaW9FbGVtZW50UmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICAvL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1JlY29yZGluZykge1xuICAgICAgc3RhcnRSZWNvcmRpbmcoKTtcblxuICAgICAgLy8gU3RhcnQgdGltZXIgdG8gdHJhY2sgcmVjb3JkaW5nIGR1cmF0aW9uXG4gICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldFJlY29yZGluZ0R1cmF0aW9uKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICAgIGR1cmF0aW9uKys7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1cmF0aW9uLCBtYXhEdXJhdGlvbik7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gbWF4RHVyYXRpb24pIHtcbiAgICAgICAgICBzdG9wUmVjb3JkaW5nKCk7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgICAgc2V0SW50ZXJ2YWxJZChpZCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtpc1JlY29yZGluZ10pO1xuXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pO1xuICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xuICAgICAgY29uc3QgY2h1bmtzOiBCbG9iW10gPSBbXTtcblxuICAgICAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGUpID0+IHtcbiAgICAgICAgY2h1bmtzLnB1c2goZS5kYXRhKTtcbiAgICAgICAgc2V0Q2h1bmtzKGNodW5rcyk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZGVkQmxvYiA9IG5ldyBCbG9iKGNodW5rcywgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pO1xuICAgICAgICAvLyBDb2RlIHRvIHVwbG9hZCB0aGUgcmVjb3JkZWRCbG9iIHRvIHRoZSBzZXJ2ZXJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcblxuICAgICAgICAvL1NldCBhdWRpb1xuICAgICAgICBjb25zdCBhdWRpb1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgaWYgKGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQuc3JjID0gYXVkaW9VUkw7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIFN0b3BwZWRcIik7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgRXJyb3JcIik7XG4gICAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICBzZXRJc1JlY29yZGluZyh0cnVlKTtcbiAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBTdGFydGVkXCIpO1xuICAgICAgc2V0TWVkaWFSZWNvcmRlcihyZWNvcmRlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBFcnJvclwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlcikge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigwKTtcbiAgICB9XG5cbiAgICBjbGVhckR1cmF0aW9uSW50ZXJ2YWwoKTtcbiAgfTtcblxuICBjb25zdCB1cGxvYWRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydCBVcGxvYWRpbmdcIik7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2xlYXJEdXJhdGlvbkludGVydmFsKCkge1xuICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgc2V0SW50ZXJ2YWxJZChudWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC04IHctZnVsbCBzbTptYXgtdy0yeGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gXCI+XG4gICAgICAgICAgTmFtZTogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPntzZXNzaW9uTmFtZX08L3NwYW4+e1wiIFwifVxuICAgICAgICA8L3A+XG5cbiAgICAgICAge2lzUmVjb3JkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsICBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYmctZ3JhZGllbnQgdy0xMiBoLTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICA8UGxheSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBmbGV4LTEgdy1mdWxsICBwLTQgYmctc2xhdGUtMTAwXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZGluZ0R1cmF0aW9uICogKDEwMCAvIG1heER1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgKX0lYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCBoLTQgIGJnLXByaW1hcnktMTAwIGFic29sdXRlIGxlZnQtMCB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzJgfVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtcHJpbWFyeS0xMDAgdGV4dC14bCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICB7cmVjb3JkaW5nRHVyYXRpb259OnttYXhEdXJhdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtpc1JlY29yZGluZyA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtzdG9wUmVjb3JkaW5nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudCB0ZXh0LXdoaXRlIGgtMjAgdy0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsIGgtZnVsbCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICBTdG9wXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9FbGVtZW50UmVmfSBjb250cm9scz48L2F1ZGlvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHctZnVsbCBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRSZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVjb3JkIEFnYWluXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3VwbG9hZFJlY29yZGluZ30gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgVXBsb2FkIFJlY29yZGluZ1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkJ1dHRvbiIsIlBsYXkiLCJSZWNvcmRpbmdQYW5lbCIsInNlc3Npb25OYW1lIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsIm1lZGlhUmVjb3JkZXIiLCJzZXRNZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwic2V0Q2h1bmtzIiwibWF4RHVyYXRpb24iLCJzZXRNYXhEdXJhdGlvbiIsInJlY29yZGluZ0R1cmF0aW9uIiwic2V0UmVjb3JkaW5nRHVyYXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsInJlY29yZGluZ1N0YXR1cyIsInNldFJlY29yZGluZ1N0YXR1cyIsImF1ZGlvRWxlbWVudFJlZiIsInN0YXJ0UmVjb3JkaW5nIiwiZHVyYXRpb24iLCJpZCIsInNldEludGVydmFsIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJzdG9wUmVjb3JkaW5nIiwiY2xlYXJJbnRlcnZhbCIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwiZSIsInB1c2giLCJkYXRhIiwib25zdG9wIiwicmVjb3JkZWRCbG9iIiwiQmxvYiIsInR5cGUiLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJzcmMiLCJvbmVycm9yIiwic3RhcnQiLCJlcnJvciIsInN0b3AiLCJjbGVhckR1cmF0aW9uSW50ZXJ2YWwiLCJ1cGxvYWRSZWNvcmRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsInN0eWxlIiwid2lkdGgiLCJNYXRoIiwicm91bmQiLCJidXR0b24iLCJvbkNsaWNrIiwicmVmIiwiY29udHJvbHMiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingPanel.tsx\n"));

/***/ })

});