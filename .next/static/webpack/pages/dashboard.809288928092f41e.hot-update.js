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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_Play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/Play */ \"./src/icons/Play.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction RecordingPanel(param) {\n    let { isRecording , setIsRecording  } = param;\n    _s();\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [chunks, setChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingStatus, setRecordingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Idle\");\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording && mediaRecorder) {\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                if (duration === maxDuration) {\n                    stopRecording();\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n                setChunks(chunks);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                // Code to upload the recordedBlob to the server\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n                setRecordingStatus(\"Recording Stopped\");\n            };\n            recorder.onerror = ()=>{\n                setRecordingStatus(\"Recording Error\");\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            setRecordingStatus(\"Recording Started\");\n            setMediaRecorder(recorder);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n            setRecordingStatus(\"Recording Error\");\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            console.log(mediaRecorder);\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    function clearDurationInterval() {\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center gap-6 w-full sm:max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] \",\n                    children: recordingStatus\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this),\n                isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full  items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer bg-gradient w-12 h-12 flex items-center justify-center rounded-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Play__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative overflow-hidden flex-1 w-full  p-4 bg-slate-100\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    width: \"\".concat(Math.round(recordingDuration * (100 / maxDuration)), \"%\")\n                                },\n                                className: \" h-4  bg-primary-100 absolute left-0 top-1/2 -translate-y-1/2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" text-primary-100 text-xl font-medium\",\n                            children: [\n                                recordingDuration,\n                                \":\",\n                                maxDuration\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, this),\n                !isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                    ref: audioElementRef,\n                    controls: true\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 26\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        isRecording ? stopRecording() : startRecording();\n                    },\n                    className: \"p-2 rounded-full bg-gradient text-white h-20 w-20 flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 w-full h-full rounded-full border border-white flex items-center justify-center\",\n                        children: isRecording ? \"Stop\" : \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n            lineNumber: 105,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RecordingPanel, \"d2SF2zQ8K952tZt7u4a3rdYAfCE=\");\n_c = RecordingPanel;\nvar _c;\n$RefreshReg$(_c, \"RecordingPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUUzQjtBQU9qQixTQUFTSyxlQUFlLEtBR2xCLEVBQUU7UUFIZ0IsRUFDckNDLFlBQVcsRUFDWEMsZUFBYyxFQUNLLEdBSGtCOztJQUlyQyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FDaEQsSUFBSTtJQUVOLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBUyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNhLG1CQUFtQkMscUJBQXFCLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDaUIsaUJBQWlCQyxtQkFBbUIsR0FBR2xCLCtDQUFRQSxDQUFTO0lBQy9ELE1BQU1tQixrQkFBa0JqQiw2Q0FBTUEsQ0FBMEIsSUFBSTtJQUU1RCxFQUFFO0lBQ0ZELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJSSxlQUFlRSxlQUFlO1lBQ2hDLDBDQUEwQztZQUMxQyxJQUFJYSxXQUFXO1lBRWYsTUFBTUMsS0FBS0MsWUFBWSxJQUFNO2dCQUMzQlIscUJBQXFCLENBQUNTLE9BQVNBLE9BQU87Z0JBQ3RDSDtnQkFDQSxJQUFJQSxhQUFhVCxhQUFhO29CQUM1QmE7Z0JBQ0YsQ0FBQztZQUNILEdBQUc7WUFFSFIsY0FBY0s7WUFFZCxPQUFPLElBQU07Z0JBQ1hJLGNBQWNKO1lBQ2hCO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ2hCO0tBQVk7SUFFaEIsTUFBTXFCLGlCQUFpQixVQUFZO1FBQ2pDLElBQUk7WUFDRixNQUFNQyxTQUFTLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUFFQyxPQUFPLElBQUk7WUFBQztZQUN2RSxNQUFNQyxXQUFXLElBQUlDLGNBQWNOO1lBQ25DLE1BQU1sQixTQUFpQixFQUFFO1lBRXpCdUIsU0FBU0UsZUFBZSxHQUFHLENBQUNDLElBQU07Z0JBQ2hDMUIsT0FBTzJCLElBQUksQ0FBQ0QsRUFBRUUsSUFBSTtnQkFDbEIzQixVQUFVRDtZQUNaO1lBRUF1QixTQUFTTSxNQUFNLEdBQUcsSUFBTTtnQkFDdEIsTUFBTUMsZUFBZSxJQUFJQyxLQUFLL0IsUUFBUTtvQkFBRWdDLE1BQU07Z0JBQVk7Z0JBQzFELGdEQUFnRDtnQkFDaERDLFFBQVFDLEdBQUcsQ0FBQztnQkFFWixXQUFXO2dCQUNYLE1BQU1DLFdBQVdDLElBQUlDLGVBQWUsQ0FBQ1A7Z0JBQ3JDLElBQUlwQixnQkFBZ0I0QixPQUFPLEVBQUU7b0JBQzNCNUIsZ0JBQWdCNEIsT0FBTyxDQUFDQyxHQUFHLEdBQUdKO2dCQUNoQyxDQUFDO2dCQUNEMUIsbUJBQW1CO1lBQ3JCO1lBRUFjLFNBQVNpQixPQUFPLEdBQUcsSUFBTTtnQkFDdkIvQixtQkFBbUI7Z0JBQ25CWixlQUFlLEtBQUs7WUFDdEI7WUFFQTBCLFNBQVNrQixLQUFLO1lBQ2Q1QyxlQUFlLElBQUk7WUFDbkJZLG1CQUFtQjtZQUNuQlYsaUJBQWlCd0I7UUFDbkIsRUFBRSxPQUFPbUIsT0FBTztZQUNkVCxRQUFRUyxLQUFLLENBQUMsNkJBQTZCQTtZQUMzQ2pDLG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsTUFBTU0sZ0JBQWdCLElBQU07UUFDMUIsSUFBSWpCLGVBQWU7WUFDakJtQyxRQUFRQyxHQUFHLENBQUNwQztZQUNaQSxjQUFjNkMsSUFBSTtZQUNsQjlDLGVBQWUsS0FBSztZQUNwQlEscUJBQXFCO1FBQ3ZCLENBQUM7UUFFRHVDO0lBQ0Y7SUFFQSxTQUFTQSx3QkFBd0I7UUFDL0IsSUFBSXRDLFlBQVk7WUFDZFUsY0FBY1Y7WUFDZEMsY0FBYyxJQUFJO1FBQ3BCLENBQUM7SUFDSDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDc0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFFRCxXQUFVOzhCQUFnQnRDOzs7Ozs7Z0JBRTVCWiw2QkFDQyw4REFBQ2lEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNwRCxtREFBSUE7Ozs7Ozs7Ozs7c0NBRVAsOERBQUNtRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQ0NHLE9BQU87b0NBQ0xDLE9BQU8sR0FFTCxPQUZRQyxLQUFLQyxLQUFLLENBQ2xCL0Msb0JBQXFCLE9BQU1GLFdBQVUsSUFDckM7Z0NBQ0o7Z0NBQ0E0QyxXQUFZOzs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNEOzRCQUFJQyxXQUFVOztnQ0FDWjFDO2dDQUFrQjtnQ0FBRUY7Ozs7Ozs7Ozs7Ozs7Z0JBSzFCLENBQUNOLDZCQUFlLDhEQUFDMEI7b0JBQU04QixLQUFLMUM7b0JBQWlCMkMsUUFBUTs7Ozs7OzhCQUV0RCw4REFBQ0M7b0JBQ0NDLFNBQVMsSUFBTTt3QkFDYjNELGNBQWNtQixrQkFBa0JFLGdCQUFnQjtvQkFDbEQ7b0JBQ0E2QixXQUFVOzhCQUVWLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWmxELGNBQWMsU0FBUyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0MsQ0FBQztHQXRJdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nUGFuZWwudHN4Pzk2NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVjb3JkaW5nIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBQbGF5IGZyb20gXCJAL2ljb25zL1BsYXlcIjtcblxuaW50ZXJmYWNlIFJlY29yZGluZ1BhbmVsVHlwZSB7XG4gIGlzUmVjb3JkaW5nOiBCb29sZWFuO1xuICBzZXRJc1JlY29yZGluZzogKHZhbDogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3JkaW5nUGFuZWwoe1xuICBpc1JlY29yZGluZyxcbiAgc2V0SXNSZWNvcmRpbmcsXG59OiBSZWNvcmRpbmdQYW5lbFR5cGUpIHtcbiAgY29uc3QgW21lZGlhUmVjb3JkZXIsIHNldE1lZGlhUmVjb3JkZXJdID0gdXNlU3RhdGU8TWVkaWFSZWNvcmRlciB8IG51bGw+KFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgW2NodW5rcywgc2V0Q2h1bmtzXSA9IHVzZVN0YXRlPEJsb2JbXT4oW10pO1xuICBjb25zdCBbbWF4RHVyYXRpb24sIHNldE1heER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMzApO1xuICBjb25zdCBbcmVjb3JkaW5nRHVyYXRpb24sIHNldFJlY29yZGluZ0R1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmVjb3JkaW5nU3RhdHVzLCBzZXRSZWNvcmRpbmdTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPihcIklkbGVcIik7XG4gIGNvbnN0IGF1ZGlvRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgLy9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNSZWNvcmRpbmcgJiYgbWVkaWFSZWNvcmRlcikge1xuICAgICAgLy8gU3RhcnQgdGltZXIgdG8gdHJhY2sgcmVjb3JkaW5nIGR1cmF0aW9uXG4gICAgICBsZXQgZHVyYXRpb24gPSAwO1xuXG4gICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0UmVjb3JkaW5nRHVyYXRpb24oKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICAgICAgZHVyYXRpb24rKztcbiAgICAgICAgaWYgKGR1cmF0aW9uID09PSBtYXhEdXJhdGlvbikge1xuICAgICAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIHNldEludGVydmFsSWQoaWQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbaXNSZWNvcmRpbmddKTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbiAgICAgIGNvbnN0IGNodW5rczogQmxvYltdID0gW107XG5cbiAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChlKSA9PiB7XG4gICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICAgIHNldENodW5rcyhjaHVua3MpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZWNvcmRlZEJsb2IgPSBuZXcgQmxvYihjaHVua3MsIHsgdHlwZTogXCJhdWRpby93YXZcIiB9KTtcbiAgICAgICAgLy8gQ29kZSB0byB1cGxvYWQgdGhlIHJlY29yZGVkQmxvYiB0byB0aGUgc2VydmVyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0b3BwZWRcIik7XG5cbiAgICAgICAgLy9TZXQgYXVkaW9cbiAgICAgICAgY29uc3QgYXVkaW9VUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlY29yZGVkQmxvYik7XG4gICAgICAgIGlmIChhdWRpb0VsZW1lbnRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50LnNyYyA9IGF1ZGlvVVJMO1xuICAgICAgICB9XG4gICAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBTdG9wcGVkXCIpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIEVycm9yXCIpO1xuICAgICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5zdGFydCgpO1xuICAgICAgc2V0SXNSZWNvcmRpbmcodHJ1ZSk7XG4gICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgU3RhcnRlZFwiKTtcbiAgICAgIHNldE1lZGlhUmVjb3JkZXIocmVjb3JkZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgRXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKG1lZGlhUmVjb3JkZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKG1lZGlhUmVjb3JkZXIpO1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigwKTtcbiAgICB9XG5cbiAgICBjbGVhckR1cmF0aW9uSW50ZXJ2YWwoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjbGVhckR1cmF0aW9uSW50ZXJ2YWwoKSB7XG4gICAgaWYgKGludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICBzZXRJbnRlcnZhbElkKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTYgdy1mdWxsIHNtOm1heC13LTJ4bFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBcIj57cmVjb3JkaW5nU3RhdHVzfTwvcD5cblxuICAgICAgICB7aXNSZWNvcmRpbmcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBiZy1ncmFkaWVudCB3LTEyIGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIDxQbGF5IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGZsZXgtMSB3LWZ1bGwgIHAtNCBiZy1zbGF0ZS0xMDBcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nRHVyYXRpb24gKiAoMTAwIC8gbWF4RHVyYXRpb24pXG4gICAgICAgICAgICAgICAgICApfSVgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgIGgtNCAgYmctcHJpbWFyeS0xMDAgYWJzb2x1dGUgbGVmdC0wIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMmB9XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1wcmltYXJ5LTEwMCB0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHtyZWNvcmRpbmdEdXJhdGlvbn06e21heER1cmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFpc1JlY29yZGluZyAmJiA8YXVkaW8gcmVmPXthdWRpb0VsZW1lbnRSZWZ9IGNvbnRyb2xzPjwvYXVkaW8+fVxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpc1JlY29yZGluZyA/IHN0b3BSZWNvcmRpbmcoKSA6IHN0YXJ0UmVjb3JkaW5nKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1mdWxsIGJnLWdyYWRpZW50IHRleHQtd2hpdGUgaC0yMCB3LTIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbCBoLWZ1bGwgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtpc1JlY29yZGluZyA/IFwiU3RvcFwiIDogXCJTdGFydFwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJQbGF5IiwiUmVjb3JkaW5nUGFuZWwiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwibWVkaWFSZWNvcmRlciIsInNldE1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJzZXRDaHVua3MiLCJtYXhEdXJhdGlvbiIsInNldE1heER1cmF0aW9uIiwicmVjb3JkaW5nRHVyYXRpb24iLCJzZXRSZWNvcmRpbmdEdXJhdGlvbiIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwicmVjb3JkaW5nU3RhdHVzIiwic2V0UmVjb3JkaW5nU3RhdHVzIiwiYXVkaW9FbGVtZW50UmVmIiwiZHVyYXRpb24iLCJpZCIsInNldEludGVydmFsIiwicHJldiIsInN0b3BSZWNvcmRpbmciLCJjbGVhckludGVydmFsIiwic3RhcnRSZWNvcmRpbmciLCJzdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInJlY29yZGVyIiwiTWVkaWFSZWNvcmRlciIsIm9uZGF0YWF2YWlsYWJsZSIsImUiLCJwdXNoIiwiZGF0YSIsIm9uc3RvcCIsInJlY29yZGVkQmxvYiIsIkJsb2IiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImF1ZGlvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY3VycmVudCIsInNyYyIsIm9uZXJyb3IiLCJzdGFydCIsImVycm9yIiwic3RvcCIsImNsZWFyRHVyYXRpb25JbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzdHlsZSIsIndpZHRoIiwiTWF0aCIsInJvdW5kIiwicmVmIiwiY29udHJvbHMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingPanel.tsx\n"));

/***/ })

});