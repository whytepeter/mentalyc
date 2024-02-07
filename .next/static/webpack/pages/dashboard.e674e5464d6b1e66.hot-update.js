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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_Play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/Play */ \"./src/icons/Play.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction RecordingPanel(param) {\n    let { isRecording , setIsRecording  } = param;\n    _s();\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [chunks, setChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingStatus, setRecordingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Idle\");\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(isRecording);\n        if (isRecording) {\n            startRecording();\n        }\n    }, [\n        isRecording\n    ]);\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n                setChunks(chunks);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                // Code to upload the recordedBlob to the server\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n                setRecordingStatus(\"Recording Stopped\");\n            };\n            recorder.onerror = ()=>{\n                setRecordingStatus(\"Recording Error\");\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            setRecordingStatus(\"Recording Started\");\n            setMediaRecorder(recorder);\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                console.log(duration, maxDuration);\n                if (duration === maxDuration) {\n                    stopRecording();\n                }\n            }, 1000);\n            setIntervalId(id);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n            setRecordingStatus(\"Recording Error\");\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            console.log(mediaRecorder);\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    function clearDurationInterval() {\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center gap-6 w-full sm:max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] \",\n                    children: recordingStatus\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this),\n                isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full  items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer bg-gradient w-12 h-12 flex items-center justify-center rounded-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Play__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative overflow-hidden flex-1 w-full  p-4 bg-slate-100\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    width: \"\".concat(Math.round(recordingDuration * (100 / maxDuration)), \"%\")\n                                },\n                                className: \" h-4  bg-primary-100 absolute left-0 top-1/2 -translate-y-1/2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" text-primary-100 text-xl font-medium\",\n                            children: [\n                                recordingDuration,\n                                \":\",\n                                maxDuration\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, this),\n                !isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                    ref: audioElementRef,\n                    controls: true\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 26\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        isRecording ? stopRecording() : startRecording();\n                    },\n                    className: \"p-2 rounded-full bg-gradient text-white h-20 w-20 flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 w-full h-full rounded-full border border-white flex items-center justify-center\",\n                        children: isRecording ? \"Stop\" : \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RecordingPanel, \"d2SF2zQ8K952tZt7u4a3rdYAfCE=\");\n_c = RecordingPanel;\nvar _c;\n$RefreshReg$(_c, \"RecordingPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUUzQjtBQU9qQixTQUFTSyxlQUFlLEtBR2xCLEVBQUU7UUFIZ0IsRUFDckNDLFlBQVcsRUFDWEMsZUFBYyxFQUNLLEdBSGtCOztJQUlyQyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FDaEQsSUFBSTtJQUVOLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBUyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNhLG1CQUFtQkMscUJBQXFCLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDaUIsaUJBQWlCQyxtQkFBbUIsR0FBR2xCLCtDQUFRQSxDQUFTO0lBQy9ELE1BQU1tQixrQkFBa0JqQiw2Q0FBTUEsQ0FBMEIsSUFBSTtJQUU1REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkbUIsUUFBUUMsR0FBRyxDQUFDaEI7UUFDWixJQUFJQSxhQUFhO1lBQ2ZpQjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNqQjtLQUFZO0lBRWhCLE1BQU1pQixpQkFBaUIsVUFBWTtRQUNqQyxJQUFJO1lBQ0YsTUFBTUMsU0FBUyxNQUFNQyxVQUFVQyxZQUFZLENBQUNDLFlBQVksQ0FBQztnQkFBRUMsT0FBTyxJQUFJO1lBQUM7WUFDdkUsTUFBTUMsV0FBVyxJQUFJQyxjQUFjTjtZQUNuQyxNQUFNZCxTQUFpQixFQUFFO1lBRXpCbUIsU0FBU0UsZUFBZSxHQUFHLENBQUNDLElBQU07Z0JBQ2hDdEIsT0FBT3VCLElBQUksQ0FBQ0QsRUFBRUUsSUFBSTtnQkFDbEJ2QixVQUFVRDtZQUNaO1lBRUFtQixTQUFTTSxNQUFNLEdBQUcsSUFBTTtnQkFDdEIsTUFBTUMsZUFBZSxJQUFJQyxLQUFLM0IsUUFBUTtvQkFBRTRCLE1BQU07Z0JBQVk7Z0JBQzFELGdEQUFnRDtnQkFDaERqQixRQUFRQyxHQUFHLENBQUM7Z0JBRVosV0FBVztnQkFDWCxNQUFNaUIsV0FBV0MsSUFBSUMsZUFBZSxDQUFDTDtnQkFDckMsSUFBSWhCLGdCQUFnQnNCLE9BQU8sRUFBRTtvQkFDM0J0QixnQkFBZ0JzQixPQUFPLENBQUNDLEdBQUcsR0FBR0o7Z0JBQ2hDLENBQUM7Z0JBQ0RwQixtQkFBbUI7WUFDckI7WUFFQVUsU0FBU2UsT0FBTyxHQUFHLElBQU07Z0JBQ3ZCekIsbUJBQW1CO2dCQUNuQlosZUFBZSxLQUFLO1lBQ3RCO1lBRUFzQixTQUFTZ0IsS0FBSztZQUNkdEMsZUFBZSxJQUFJO1lBQ25CWSxtQkFBbUI7WUFDbkJWLGlCQUFpQm9CO1lBRWpCLDBDQUEwQztZQUMxQyxJQUFJaUIsV0FBVztZQUNmLE1BQU1DLEtBQUtDLFlBQVksSUFBTTtnQkFDM0JqQyxxQkFBcUIsQ0FBQ2tDLE9BQVNBLE9BQU87Z0JBQ3RDSDtnQkFDQXpCLFFBQVFDLEdBQUcsQ0FBQ3dCLFVBQVVsQztnQkFDdEIsSUFBSWtDLGFBQWFsQyxhQUFhO29CQUM1QnNDO2dCQUNGLENBQUM7WUFDSCxHQUFHO1lBRUhqQyxjQUFjOEI7UUFDaEIsRUFBRSxPQUFPSSxPQUFPO1lBQ2Q5QixRQUFROEIsS0FBSyxDQUFDLDZCQUE2QkE7WUFDM0NoQyxtQkFBbUI7UUFDckI7SUFDRjtJQUVBLE1BQU0rQixnQkFBZ0IsSUFBTTtRQUMxQixJQUFJMUMsZUFBZTtZQUNqQmEsUUFBUUMsR0FBRyxDQUFDZDtZQUNaQSxjQUFjNEMsSUFBSTtZQUNsQjdDLGVBQWUsS0FBSztZQUNwQlEscUJBQXFCO1FBQ3ZCLENBQUM7UUFFRHNDO0lBQ0Y7SUFFQSxTQUFTQSx3QkFBd0I7UUFDL0IsSUFBSXJDLFlBQVk7WUFDZHNDLGNBQWN0QztZQUNkQyxjQUFjLElBQUk7UUFDcEIsQ0FBQztJQUNIO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNzQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQWdCdEM7Ozs7OztnQkFFNUJaLDZCQUNDLDhEQUFDaUQ7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ3BELG1EQUFJQTs7Ozs7Ozs7OztzQ0FFUCw4REFBQ21EOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FDQ0csT0FBTztvQ0FDTEMsT0FBTyxHQUVMLE9BRlFDLEtBQUtDLEtBQUssQ0FDbEIvQyxvQkFBcUIsT0FBTUYsV0FBVSxJQUNyQztnQ0FDSjtnQ0FDQTRDLFdBQVk7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUNaMUM7Z0NBQWtCO2dDQUFFRjs7Ozs7Ozs7Ozs7OztnQkFLMUIsQ0FBQ04sNkJBQWUsOERBQUNzQjtvQkFBTWtDLEtBQUsxQztvQkFBaUIyQyxRQUFROzs7Ozs7OEJBRXRELDhEQUFDQztvQkFDQ0MsU0FBUyxJQUFNO3dCQUNiM0QsY0FBYzRDLGtCQUFrQjNCLGdCQUFnQjtvQkFDbEQ7b0JBQ0FpQyxXQUFVOzhCQUVWLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWmxELGNBQWMsU0FBUyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0MsQ0FBQztHQXBJdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nUGFuZWwudHN4Pzk2NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVjb3JkaW5nIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBQbGF5IGZyb20gXCJAL2ljb25zL1BsYXlcIjtcblxuaW50ZXJmYWNlIFJlY29yZGluZ1BhbmVsVHlwZSB7XG4gIGlzUmVjb3JkaW5nOiBCb29sZWFuO1xuICBzZXRJc1JlY29yZGluZzogKHZhbDogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3JkaW5nUGFuZWwoe1xuICBpc1JlY29yZGluZyxcbiAgc2V0SXNSZWNvcmRpbmcsXG59OiBSZWNvcmRpbmdQYW5lbFR5cGUpIHtcbiAgY29uc3QgW21lZGlhUmVjb3JkZXIsIHNldE1lZGlhUmVjb3JkZXJdID0gdXNlU3RhdGU8TWVkaWFSZWNvcmRlciB8IG51bGw+KFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgW2NodW5rcywgc2V0Q2h1bmtzXSA9IHVzZVN0YXRlPEJsb2JbXT4oW10pO1xuICBjb25zdCBbbWF4RHVyYXRpb24sIHNldE1heER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMzApO1xuICBjb25zdCBbcmVjb3JkaW5nRHVyYXRpb24sIHNldFJlY29yZGluZ0R1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmVjb3JkaW5nU3RhdHVzLCBzZXRSZWNvcmRpbmdTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPihcIklkbGVcIik7XG4gIGNvbnN0IGF1ZGlvRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpc1JlY29yZGluZyk7XG4gICAgaWYgKGlzUmVjb3JkaW5nKSB7XG4gICAgICBzdGFydFJlY29yZGluZygpO1xuICAgIH1cbiAgfSwgW2lzUmVjb3JkaW5nXSk7XG5cbiAgY29uc3Qgc3RhcnRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSk7XG4gICAgICBjb25zdCByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG4gICAgICBjb25zdCBjaHVua3M6IEJsb2JbXSA9IFtdO1xuXG4gICAgICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZSkgPT4ge1xuICAgICAgICBjaHVua3MucHVzaChlLmRhdGEpO1xuICAgICAgICBzZXRDaHVua3MoY2h1bmtzKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVjb3JkZWRCbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICAgIC8vIENvZGUgdG8gdXBsb2FkIHRoZSByZWNvcmRlZEJsb2IgdG8gdGhlIHNlcnZlclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdG9wcGVkXCIpO1xuXG4gICAgICAgIC8vU2V0IGF1ZGlvXG4gICAgICAgIGNvbnN0IGF1ZGlvVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZWNvcmRlZEJsb2IpO1xuICAgICAgICBpZiAoYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBhdWRpb0VsZW1lbnRSZWYuY3VycmVudC5zcmMgPSBhdWRpb1VSTDtcbiAgICAgICAgfVxuICAgICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgU3RvcHBlZFwiKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBFcnJvclwiKTtcbiAgICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgIHNldElzUmVjb3JkaW5nKHRydWUpO1xuICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIFN0YXJ0ZWRcIik7XG4gICAgICBzZXRNZWRpYVJlY29yZGVyKHJlY29yZGVyKTtcblxuICAgICAgLy8gU3RhcnQgdGltZXIgdG8gdHJhY2sgcmVjb3JkaW5nIGR1cmF0aW9uXG4gICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldFJlY29yZGluZ0R1cmF0aW9uKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICAgIGR1cmF0aW9uKys7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1cmF0aW9uLCBtYXhEdXJhdGlvbik7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gbWF4RHVyYXRpb24pIHtcbiAgICAgICAgICBzdG9wUmVjb3JkaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICBzZXRJbnRlcnZhbElkKGlkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIEVycm9yXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xuICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XG4gICAgICBjb25zb2xlLmxvZyhtZWRpYVJlY29yZGVyKTtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgc2V0UmVjb3JkaW5nRHVyYXRpb24oMCk7XG4gICAgfVxuXG4gICAgY2xlYXJEdXJhdGlvbkludGVydmFsKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2xlYXJEdXJhdGlvbkludGVydmFsKCkge1xuICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgc2V0SW50ZXJ2YWxJZChudWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC02IHctZnVsbCBzbTptYXgtdy0yeGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gXCI+e3JlY29yZGluZ1N0YXR1c308L3A+XG5cbiAgICAgICAge2lzUmVjb3JkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsICBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYmctZ3JhZGllbnQgdy0xMiBoLTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICA8UGxheSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBmbGV4LTEgdy1mdWxsICBwLTQgYmctc2xhdGUtMTAwXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZGluZ0R1cmF0aW9uICogKDEwMCAvIG1heER1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgKX0lYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCBoLTQgIGJnLXByaW1hcnktMTAwIGFic29sdXRlIGxlZnQtMCB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzJgfVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtcHJpbWFyeS0xMDAgdGV4dC14bCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICB7cmVjb3JkaW5nRHVyYXRpb259OnttYXhEdXJhdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHshaXNSZWNvcmRpbmcgJiYgPGF1ZGlvIHJlZj17YXVkaW9FbGVtZW50UmVmfSBjb250cm9scz48L2F1ZGlvPn1cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaXNSZWNvcmRpbmcgPyBzdG9wUmVjb3JkaW5nKCkgOiBzdGFydFJlY29yZGluZygpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudCB0ZXh0LXdoaXRlIGgtMjAgdy0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICB7aXNSZWNvcmRpbmcgPyBcIlN0b3BcIiA6IFwiU3RhcnRcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiUGxheSIsIlJlY29yZGluZ1BhbmVsIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsIm1lZGlhUmVjb3JkZXIiLCJzZXRNZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwic2V0Q2h1bmtzIiwibWF4RHVyYXRpb24iLCJzZXRNYXhEdXJhdGlvbiIsInJlY29yZGluZ0R1cmF0aW9uIiwic2V0UmVjb3JkaW5nRHVyYXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsInJlY29yZGluZ1N0YXR1cyIsInNldFJlY29yZGluZ1N0YXR1cyIsImF1ZGlvRWxlbWVudFJlZiIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFJlY29yZGluZyIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwiZSIsInB1c2giLCJkYXRhIiwib25zdG9wIiwicmVjb3JkZWRCbG9iIiwiQmxvYiIsInR5cGUiLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJzcmMiLCJvbmVycm9yIiwic3RhcnQiLCJkdXJhdGlvbiIsImlkIiwic2V0SW50ZXJ2YWwiLCJwcmV2Iiwic3RvcFJlY29yZGluZyIsImVycm9yIiwic3RvcCIsImNsZWFyRHVyYXRpb25JbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3R5bGUiLCJ3aWR0aCIsIk1hdGgiLCJyb3VuZCIsInJlZiIsImNvbnRyb2xzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingPanel.tsx\n"));

/***/ })

});