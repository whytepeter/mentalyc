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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _icons_Play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icons/Play */ \"./src/icons/Play.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction RecordingPanel(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [chunks, setChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingStatus, setRecordingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Idle\");\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                console.log(duration, maxDuration);\n                if (duration === maxDuration) {\n                    stopRecording();\n                    clearInterval(id);\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n                setChunks(chunks);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                // Code to upload the recordedBlob to the server\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n                setRecordingStatus(\"Recording Stopped\");\n            };\n            recorder.onerror = ()=>{\n                setRecordingStatus(\"Recording Error\");\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            setRecordingStatus(\"Recording Started\");\n            setMediaRecorder(recorder);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n            setRecordingStatus(\"Recording Error\");\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    function clearDurationInterval() {\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center gap-6 w-full sm:max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] \",\n                    children: sessionName\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this),\n                isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full  items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer bg-gradient w-12 h-12 flex items-center justify-center rounded-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Play__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative overflow-hidden flex-1 w-full  p-4 bg-slate-100\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    width: \"\".concat(Math.round(recordingDuration * (100 / maxDuration)), \"%\")\n                                },\n                                className: \" h-4  bg-primary-100 absolute left-0 top-1/2 -translate-y-1/2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" text-primary-100 text-xl font-medium\",\n                            children: [\n                                recordingDuration,\n                                \":\",\n                                maxDuration\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this),\n                !isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioElementRef,\n                                controls: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                color: \"default\",\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        isRecording ? stopRecording() : startRecording();\n                    },\n                    className: \"p-2 rounded-full bg-gradient text-white h-20 w-20 flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 w-full h-full rounded-full border border-white flex items-center justify-center\",\n                        children: isRecording ? \"Stop\" : \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n            lineNumber: 109,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RecordingPanel, \"TqPOoddMQqMwYeL1SeOT3i92rYk=\");\n_c = RecordingPanel;\nvar _c;\n$RefreshReg$(_c, \"RecordingPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkQ7QUFFZDtBQUNiO0FBUWpCLFNBQVNNLGVBQWUsS0FJbEIsRUFBRTtRQUpnQixFQUNyQ0MsWUFBVyxFQUNYQyxZQUFXLEVBQ1hDLGVBQWMsRUFDSyxHQUprQjs7SUFLckMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQ2hELElBQUk7SUFFTixNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQVMsRUFBRTtJQUMvQyxNQUFNLENBQUNhLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDZSxtQkFBbUJDLHFCQUFxQixHQUFHaEIsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDaUIsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDbUIsaUJBQWlCQyxtQkFBbUIsR0FBR3BCLCtDQUFRQSxDQUFTO0lBQy9ELE1BQU1xQixrQkFBa0JuQiw2Q0FBTUEsQ0FBMEIsSUFBSTtJQUU1RCxFQUFFO0lBQ0ZELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJTSxhQUFhO1lBQ2ZlO1lBRUEsMENBQTBDO1lBQzFDLElBQUlDLFdBQVc7WUFDZixNQUFNQyxLQUFLQyxZQUFZLElBQU07Z0JBQzNCVCxxQkFBcUIsQ0FBQ1UsT0FBU0EsT0FBTztnQkFDdENIO2dCQUNBSSxRQUFRQyxHQUFHLENBQUNMLFVBQVVWO2dCQUN0QixJQUFJVSxhQUFhVixhQUFhO29CQUM1QmdCO29CQUNBQyxjQUFjTjtnQkFDaEIsQ0FBQztZQUNILEdBQUc7WUFDSE4sY0FBY007WUFFZCxPQUFPLElBQU07Z0JBQ1hNLGNBQWNOO1lBQ2hCO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ2pCO0tBQVk7SUFFaEIsTUFBTWUsaUJBQWlCLFVBQVk7UUFDakMsSUFBSTtZQUNGLE1BQU1TLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7Z0JBQUVDLE9BQU8sSUFBSTtZQUFDO1lBQ3ZFLE1BQU1DLFdBQVcsSUFBSUMsY0FBY047WUFDbkMsTUFBTXBCLFNBQWlCLEVBQUU7WUFFekJ5QixTQUFTRSxlQUFlLEdBQUcsQ0FBQ0MsSUFBTTtnQkFDaEM1QixPQUFPNkIsSUFBSSxDQUFDRCxFQUFFRSxJQUFJO2dCQUNsQjdCLFVBQVVEO1lBQ1o7WUFFQXlCLFNBQVNNLE1BQU0sR0FBRyxJQUFNO2dCQUN0QixNQUFNQyxlQUFlLElBQUlDLEtBQUtqQyxRQUFRO29CQUFFa0MsTUFBTTtnQkFBWTtnQkFDMUQsZ0RBQWdEO2dCQUNoRGxCLFFBQVFDLEdBQUcsQ0FBQztnQkFFWixXQUFXO2dCQUNYLE1BQU1rQixXQUFXQyxJQUFJQyxlQUFlLENBQUNMO2dCQUNyQyxJQUFJdEIsZ0JBQWdCNEIsT0FBTyxFQUFFO29CQUMzQjVCLGdCQUFnQjRCLE9BQU8sQ0FBQ0MsR0FBRyxHQUFHSjtnQkFDaEMsQ0FBQztnQkFDRDFCLG1CQUFtQjtZQUNyQjtZQUVBZ0IsU0FBU2UsT0FBTyxHQUFHLElBQU07Z0JBQ3ZCL0IsbUJBQW1CO2dCQUNuQlosZUFBZSxLQUFLO1lBQ3RCO1lBRUE0QixTQUFTZ0IsS0FBSztZQUNkNUMsZUFBZSxJQUFJO1lBQ25CWSxtQkFBbUI7WUFDbkJWLGlCQUFpQjBCO1FBQ25CLEVBQUUsT0FBT2lCLE9BQU87WUFDZDFCLFFBQVEwQixLQUFLLENBQUMsNkJBQTZCQTtZQUMzQ2pDLG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsTUFBTVMsZ0JBQWdCLElBQU07UUFDMUIsSUFBSXBCLGVBQWU7WUFDakJBLGNBQWM2QyxJQUFJO1lBQ2xCOUMsZUFBZSxLQUFLO1lBQ3BCUSxxQkFBcUI7UUFDdkIsQ0FBQztRQUVEdUM7SUFDRjtJQUVBLFNBQVNBLHdCQUF3QjtRQUMvQixJQUFJdEMsWUFBWTtZQUNkYSxjQUFjYjtZQUNkQyxjQUFjLElBQUk7UUFDcEIsQ0FBQztJQUNIO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNzQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQWdCbkQ7Ozs7OztnQkFFNUJDLDZCQUNDLDhEQUFDaUQ7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ3JELG1EQUFJQTs7Ozs7Ozs7OztzQ0FFUCw4REFBQ29EOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FDQ0csT0FBTztvQ0FDTEMsT0FBTyxHQUVMLE9BRlFDLEtBQUtDLEtBQUssQ0FDbEIvQyxvQkFBcUIsT0FBTUYsV0FBVSxJQUNyQztnQ0FDSjtnQ0FDQTRDLFdBQVk7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUNaMUM7Z0NBQWtCO2dDQUFFRjs7Ozs7Ozs7Ozs7OztnQkFLMUIsQ0FBQ04sNkJBQ0E7OEJBQ0UsNEVBQUNpRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUN0QjtnQ0FBTTRCLEtBQUsxQztnQ0FBaUIyQyxRQUFROzs7Ozs7MENBQ3JDLDhEQUFDN0Qsc0RBQU1BO2dDQUFDOEQsT0FBTTswQ0FBVTs7Ozs7Ozs7Ozs7Ozs4QkFLOUIsOERBQUNDO29CQUNDQyxTQUFTLElBQU07d0JBQ2I1RCxjQUFjc0Isa0JBQWtCUCxnQkFBZ0I7b0JBQ2xEO29CQUNBbUMsV0FBVTs4QkFFViw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1psRCxjQUFjLFNBQVMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNDLENBQUM7R0EvSXVCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsLnRzeD85NjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlY29yZGluZyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IFBsYXkgZnJvbSBcIkAvaWNvbnMvUGxheVwiO1xuXG50eXBlIFJlY29yZGluZ1BhbmVsVHlwZSA9IHtcbiAgc2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgaXNSZWNvcmRpbmc6IEJvb2xlYW47XG4gIHNldElzUmVjb3JkaW5nOiAodmFsOiBib29sZWFuKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3JkaW5nUGFuZWwoe1xuICBzZXNzaW9uTmFtZSxcbiAgaXNSZWNvcmRpbmcsXG4gIHNldElzUmVjb3JkaW5nLFxufTogUmVjb3JkaW5nUGFuZWxUeXBlKSB7XG4gIGNvbnN0IFttZWRpYVJlY29yZGVyLCBzZXRNZWRpYVJlY29yZGVyXSA9IHVzZVN0YXRlPE1lZGlhUmVjb3JkZXIgfCBudWxsPihcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IFtjaHVua3MsIHNldENodW5rc10gPSB1c2VTdGF0ZTxCbG9iW10+KFtdKTtcbiAgY29uc3QgW21heER1cmF0aW9uLCBzZXRNYXhEdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KDUpO1xuICBjb25zdCBbcmVjb3JkaW5nRHVyYXRpb24sIHNldFJlY29yZGluZ0R1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmVjb3JkaW5nU3RhdHVzLCBzZXRSZWNvcmRpbmdTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPihcIklkbGVcIik7XG4gIGNvbnN0IGF1ZGlvRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgLy9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNSZWNvcmRpbmcpIHtcbiAgICAgIHN0YXJ0UmVjb3JkaW5nKCk7XG5cbiAgICAgIC8vIFN0YXJ0IHRpbWVyIHRvIHRyYWNrIHJlY29yZGluZyBkdXJhdGlvblxuICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgICBkdXJhdGlvbisrO1xuICAgICAgICBjb25zb2xlLmxvZyhkdXJhdGlvbiwgbWF4RHVyYXRpb24pO1xuICAgICAgICBpZiAoZHVyYXRpb24gPT09IG1heER1cmF0aW9uKSB7XG4gICAgICAgICAgc3RvcFJlY29yZGluZygpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldEludGVydmFsSWQoaWQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbaXNSZWNvcmRpbmddKTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbiAgICAgIGNvbnN0IGNodW5rczogQmxvYltdID0gW107XG5cbiAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChlKSA9PiB7XG4gICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICAgIHNldENodW5rcyhjaHVua3MpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZWNvcmRlZEJsb2IgPSBuZXcgQmxvYihjaHVua3MsIHsgdHlwZTogXCJhdWRpby93YXZcIiB9KTtcbiAgICAgICAgLy8gQ29kZSB0byB1cGxvYWQgdGhlIHJlY29yZGVkQmxvYiB0byB0aGUgc2VydmVyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0b3BwZWRcIik7XG5cbiAgICAgICAgLy9TZXQgYXVkaW9cbiAgICAgICAgY29uc3QgYXVkaW9VUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlY29yZGVkQmxvYik7XG4gICAgICAgIGlmIChhdWRpb0VsZW1lbnRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50LnNyYyA9IGF1ZGlvVVJMO1xuICAgICAgICB9XG4gICAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBTdG9wcGVkXCIpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIEVycm9yXCIpO1xuICAgICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5zdGFydCgpO1xuICAgICAgc2V0SXNSZWNvcmRpbmcodHJ1ZSk7XG4gICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgU3RhcnRlZFwiKTtcbiAgICAgIHNldE1lZGlhUmVjb3JkZXIocmVjb3JkZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgRXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKG1lZGlhUmVjb3JkZXIpIHtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgc2V0UmVjb3JkaW5nRHVyYXRpb24oMCk7XG4gICAgfVxuXG4gICAgY2xlYXJEdXJhdGlvbkludGVydmFsKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2xlYXJEdXJhdGlvbkludGVydmFsKCkge1xuICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgc2V0SW50ZXJ2YWxJZChudWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC02IHctZnVsbCBzbTptYXgtdy0yeGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gXCI+e3Nlc3Npb25OYW1lfTwvcD5cblxuICAgICAgICB7aXNSZWNvcmRpbmcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBiZy1ncmFkaWVudCB3LTEyIGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIDxQbGF5IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGZsZXgtMSB3LWZ1bGwgIHAtNCBiZy1zbGF0ZS0xMDBcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nRHVyYXRpb24gKiAoMTAwIC8gbWF4RHVyYXRpb24pXG4gICAgICAgICAgICAgICAgICApfSVgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgIGgtNCAgYmctcHJpbWFyeS0xMDAgYWJzb2x1dGUgbGVmdC0wIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMmB9XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1wcmltYXJ5LTEwMCB0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHtyZWNvcmRpbmdEdXJhdGlvbn06e21heER1cmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFpc1JlY29yZGluZyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9FbGVtZW50UmVmfSBjb250cm9scz48L2F1ZGlvPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZGVmYXVsdFwiPkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nID8gc3RvcFJlY29yZGluZygpIDogc3RhcnRSZWNvcmRpbmcoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQgdGV4dC13aGl0ZSBoLTIwIHctMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsIGgtZnVsbCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAge2lzUmVjb3JkaW5nID8gXCJTdG9wXCIgOiBcIlN0YXJ0XCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkJ1dHRvbiIsIlBsYXkiLCJSZWNvcmRpbmdQYW5lbCIsInNlc3Npb25OYW1lIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsIm1lZGlhUmVjb3JkZXIiLCJzZXRNZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwic2V0Q2h1bmtzIiwibWF4RHVyYXRpb24iLCJzZXRNYXhEdXJhdGlvbiIsInJlY29yZGluZ0R1cmF0aW9uIiwic2V0UmVjb3JkaW5nRHVyYXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsInJlY29yZGluZ1N0YXR1cyIsInNldFJlY29yZGluZ1N0YXR1cyIsImF1ZGlvRWxlbWVudFJlZiIsInN0YXJ0UmVjb3JkaW5nIiwiZHVyYXRpb24iLCJpZCIsInNldEludGVydmFsIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJzdG9wUmVjb3JkaW5nIiwiY2xlYXJJbnRlcnZhbCIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwiZSIsInB1c2giLCJkYXRhIiwib25zdG9wIiwicmVjb3JkZWRCbG9iIiwiQmxvYiIsInR5cGUiLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJzcmMiLCJvbmVycm9yIiwic3RhcnQiLCJlcnJvciIsInN0b3AiLCJjbGVhckR1cmF0aW9uSW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3R5bGUiLCJ3aWR0aCIsIk1hdGgiLCJyb3VuZCIsInJlZiIsImNvbnRyb2xzIiwiY29sb3IiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingPanel.tsx\n"));

/***/ })

});