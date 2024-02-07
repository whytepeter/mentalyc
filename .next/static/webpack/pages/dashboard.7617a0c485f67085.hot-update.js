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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_Play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/Play */ \"./src/icons/Play.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction RecordingPanel(param) {\n    let { isRecording , setIsRecording  } = param;\n    _s();\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [chunks, setChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingStatus, setRecordingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Idle\");\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                console.log(duration, maxDuration);\n                if (duration === maxDuration) {\n                    stopRecording();\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n                setChunks(chunks);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                // Code to upload the recordedBlob to the server\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n                setRecordingStatus(\"Recording Stopped\");\n            };\n            recorder.onerror = ()=>{\n                setRecordingStatus(\"Recording Error\");\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            setRecordingStatus(\"Recording Started\");\n            setMediaRecorder(recorder);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n            setRecordingStatus(\"Recording Error\");\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            console.log(mediaRecorder);\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    function clearDurationInterval() {\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center gap-6 w-full sm:max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] \",\n                    children: recordingStatus\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this),\n                isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full  items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer bg-gradient w-12 h-12 flex items-center justify-center rounded-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Play__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative overflow-hidden flex-1 w-full  p-4 bg-slate-100\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    width: \"\".concat(Math.round(recordingDuration * (100 / maxDuration)), \"%\")\n                                },\n                                className: \" h-4  bg-primary-100 absolute left-0 top-1/2 -translate-y-1/2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" text-primary-100 text-xl font-medium\",\n                            children: [\n                                recordingDuration,\n                                \":\",\n                                maxDuration\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, this),\n                !isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                    ref: audioElementRef,\n                    controls: true\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 26\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        isRecording ? stopRecording() : startRecording();\n                    },\n                    className: \"p-2 rounded-full bg-gradient text-white h-20 w-20 flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 w-full h-full rounded-full border border-white flex items-center justify-center\",\n                        children: isRecording ? \"Stop\" : \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RecordingPanel, \"d2SF2zQ8K952tZt7u4a3rdYAfCE=\");\n_c = RecordingPanel;\nvar _c;\n$RefreshReg$(_c, \"RecordingPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUUzQjtBQU9qQixTQUFTSyxlQUFlLEtBR2xCLEVBQUU7UUFIZ0IsRUFDckNDLFlBQVcsRUFDWEMsZUFBYyxFQUNLLEdBSGtCOztJQUlyQyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FDaEQsSUFBSTtJQUVOLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBUyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNhLG1CQUFtQkMscUJBQXFCLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDaUIsaUJBQWlCQyxtQkFBbUIsR0FBR2xCLCtDQUFRQSxDQUFTO0lBQy9ELE1BQU1tQixrQkFBa0JqQiw2Q0FBTUEsQ0FBMEIsSUFBSTtJQUU1RCxFQUFFO0lBQ0ZELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJSSxhQUFhO1lBQ2ZlO1lBRUEsMENBQTBDO1lBQzFDLElBQUlDLFdBQVc7WUFDZixNQUFNQyxLQUFLQyxZQUFZLElBQU07Z0JBQzNCVCxxQkFBcUIsQ0FBQ1UsT0FBU0EsT0FBTztnQkFDdENIO2dCQUNBSSxRQUFRQyxHQUFHLENBQUNMLFVBQVVWO2dCQUN0QixJQUFJVSxhQUFhVixhQUFhO29CQUM1QmdCO2dCQUNGLENBQUM7WUFDSCxHQUFHO1lBQ0hYLGNBQWNNO1lBRWQsT0FBTyxJQUFNO2dCQUNYTSxjQUFjTjtZQUNoQjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNqQjtLQUFZO0lBRWhCLE1BQU1lLGlCQUFpQixVQUFZO1FBQ2pDLElBQUk7WUFDRixNQUFNUyxTQUFTLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUFFQyxPQUFPLElBQUk7WUFBQztZQUN2RSxNQUFNQyxXQUFXLElBQUlDLGNBQWNOO1lBQ25DLE1BQU1wQixTQUFpQixFQUFFO1lBRXpCeUIsU0FBU0UsZUFBZSxHQUFHLENBQUNDLElBQU07Z0JBQ2hDNUIsT0FBTzZCLElBQUksQ0FBQ0QsRUFBRUUsSUFBSTtnQkFDbEI3QixVQUFVRDtZQUNaO1lBRUF5QixTQUFTTSxNQUFNLEdBQUcsSUFBTTtnQkFDdEIsTUFBTUMsZUFBZSxJQUFJQyxLQUFLakMsUUFBUTtvQkFBRWtDLE1BQU07Z0JBQVk7Z0JBQzFELGdEQUFnRDtnQkFDaERsQixRQUFRQyxHQUFHLENBQUM7Z0JBRVosV0FBVztnQkFDWCxNQUFNa0IsV0FBV0MsSUFBSUMsZUFBZSxDQUFDTDtnQkFDckMsSUFBSXRCLGdCQUFnQjRCLE9BQU8sRUFBRTtvQkFDM0I1QixnQkFBZ0I0QixPQUFPLENBQUNDLEdBQUcsR0FBR0o7Z0JBQ2hDLENBQUM7Z0JBQ0QxQixtQkFBbUI7WUFDckI7WUFFQWdCLFNBQVNlLE9BQU8sR0FBRyxJQUFNO2dCQUN2Qi9CLG1CQUFtQjtnQkFDbkJaLGVBQWUsS0FBSztZQUN0QjtZQUVBNEIsU0FBU2dCLEtBQUs7WUFDZDVDLGVBQWUsSUFBSTtZQUNuQlksbUJBQW1CO1lBQ25CVixpQkFBaUIwQjtRQUNuQixFQUFFLE9BQU9pQixPQUFPO1lBQ2QxQixRQUFRMEIsS0FBSyxDQUFDLDZCQUE2QkE7WUFDM0NqQyxtQkFBbUI7UUFDckI7SUFDRjtJQUVBLE1BQU1TLGdCQUFnQixJQUFNO1FBQzFCLElBQUlwQixlQUFlO1lBQ2pCa0IsUUFBUUMsR0FBRyxDQUFDbkI7WUFDWkEsY0FBYzZDLElBQUk7WUFDbEI5QyxlQUFlLEtBQUs7WUFDcEJRLHFCQUFxQjtRQUN2QixDQUFDO1FBRUR1QztJQUNGO0lBRUEsU0FBU0Esd0JBQXdCO1FBQy9CLElBQUl0QyxZQUFZO1lBQ2RhLGNBQWNiO1lBQ2RDLGNBQWMsSUFBSTtRQUNwQixDQUFDO0lBQ0g7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ3NDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUQsV0FBVTs4QkFBZ0J0Qzs7Ozs7O2dCQUU1QlosNkJBQ0MsOERBQUNpRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDcEQsbURBQUlBOzs7Ozs7Ozs7O3NDQUVQLDhEQUFDbUQ7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUNDRyxPQUFPO29DQUNMQyxPQUFPLEdBRUwsT0FGUUMsS0FBS0MsS0FBSyxDQUNsQi9DLG9CQUFxQixPQUFNRixXQUFVLElBQ3JDO2dDQUNKO2dDQUNBNEMsV0FBWTs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDRDs0QkFBSUMsV0FBVTs7Z0NBQ1oxQztnQ0FBa0I7Z0NBQUVGOzs7Ozs7Ozs7Ozs7O2dCQUsxQixDQUFDTiw2QkFBZSw4REFBQzRCO29CQUFNNEIsS0FBSzFDO29CQUFpQjJDLFFBQVE7Ozs7Ozs4QkFFdEQsOERBQUNDO29CQUNDQyxTQUFTLElBQU07d0JBQ2IzRCxjQUFjc0Isa0JBQWtCUCxnQkFBZ0I7b0JBQ2xEO29CQUNBbUMsV0FBVTs4QkFFViw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1psRCxjQUFjLFNBQVMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNDLENBQUM7R0F2SXVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsLnRzeD85NjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlY29yZGluZyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgUGxheSBmcm9tIFwiQC9pY29ucy9QbGF5XCI7XG5cbmludGVyZmFjZSBSZWNvcmRpbmdQYW5lbFR5cGUge1xuICBpc1JlY29yZGluZzogQm9vbGVhbjtcbiAgc2V0SXNSZWNvcmRpbmc6ICh2YWw6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29yZGluZ1BhbmVsKHtcbiAgaXNSZWNvcmRpbmcsXG4gIHNldElzUmVjb3JkaW5nLFxufTogUmVjb3JkaW5nUGFuZWxUeXBlKSB7XG4gIGNvbnN0IFttZWRpYVJlY29yZGVyLCBzZXRNZWRpYVJlY29yZGVyXSA9IHVzZVN0YXRlPE1lZGlhUmVjb3JkZXIgfCBudWxsPihcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IFtjaHVua3MsIHNldENodW5rc10gPSB1c2VTdGF0ZTxCbG9iW10+KFtdKTtcbiAgY29uc3QgW21heER1cmF0aW9uLCBzZXRNYXhEdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KDMwKTtcbiAgY29uc3QgW3JlY29yZGluZ0R1cmF0aW9uLCBzZXRSZWNvcmRpbmdEdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ludGVydmFsSWQsIHNldEludGVydmFsSWRdID0gdXNlU3RhdGU8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3JlY29yZGluZ1N0YXR1cywgc2V0UmVjb3JkaW5nU3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJJZGxlXCIpO1xuICBjb25zdCBhdWRpb0VsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIC8vXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzUmVjb3JkaW5nKSB7XG4gICAgICBzdGFydFJlY29yZGluZygpO1xuXG4gICAgICAvLyBTdGFydCB0aW1lciB0byB0cmFjayByZWNvcmRpbmcgZHVyYXRpb25cbiAgICAgIGxldCBkdXJhdGlvbiA9IDA7XG4gICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0UmVjb3JkaW5nRHVyYXRpb24oKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICAgICAgZHVyYXRpb24rKztcbiAgICAgICAgY29uc29sZS5sb2coZHVyYXRpb24sIG1heER1cmF0aW9uKTtcbiAgICAgICAgaWYgKGR1cmF0aW9uID09PSBtYXhEdXJhdGlvbikge1xuICAgICAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG4gICAgICBzZXRJbnRlcnZhbElkKGlkKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2lzUmVjb3JkaW5nXSk7XG5cbiAgY29uc3Qgc3RhcnRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSk7XG4gICAgICBjb25zdCByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG4gICAgICBjb25zdCBjaHVua3M6IEJsb2JbXSA9IFtdO1xuXG4gICAgICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZSkgPT4ge1xuICAgICAgICBjaHVua3MucHVzaChlLmRhdGEpO1xuICAgICAgICBzZXRDaHVua3MoY2h1bmtzKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVjb3JkZWRCbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICAgIC8vIENvZGUgdG8gdXBsb2FkIHRoZSByZWNvcmRlZEJsb2IgdG8gdGhlIHNlcnZlclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdG9wcGVkXCIpO1xuXG4gICAgICAgIC8vU2V0IGF1ZGlvXG4gICAgICAgIGNvbnN0IGF1ZGlvVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZWNvcmRlZEJsb2IpO1xuICAgICAgICBpZiAoYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBhdWRpb0VsZW1lbnRSZWYuY3VycmVudC5zcmMgPSBhdWRpb1VSTDtcbiAgICAgICAgfVxuICAgICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgU3RvcHBlZFwiKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBFcnJvclwiKTtcbiAgICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgIHNldElzUmVjb3JkaW5nKHRydWUpO1xuICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIFN0YXJ0ZWRcIik7XG4gICAgICBzZXRNZWRpYVJlY29yZGVyKHJlY29yZGVyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIEVycm9yXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xuICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XG4gICAgICBjb25zb2xlLmxvZyhtZWRpYVJlY29yZGVyKTtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgc2V0UmVjb3JkaW5nRHVyYXRpb24oMCk7XG4gICAgfVxuXG4gICAgY2xlYXJEdXJhdGlvbkludGVydmFsKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2xlYXJEdXJhdGlvbkludGVydmFsKCkge1xuICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgc2V0SW50ZXJ2YWxJZChudWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC02IHctZnVsbCBzbTptYXgtdy0yeGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gXCI+e3JlY29yZGluZ1N0YXR1c308L3A+XG5cbiAgICAgICAge2lzUmVjb3JkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsICBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYmctZ3JhZGllbnQgdy0xMiBoLTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICA8UGxheSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBmbGV4LTEgdy1mdWxsICBwLTQgYmctc2xhdGUtMTAwXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZGluZ0R1cmF0aW9uICogKDEwMCAvIG1heER1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgKX0lYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCBoLTQgIGJnLXByaW1hcnktMTAwIGFic29sdXRlIGxlZnQtMCB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzJgfVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtcHJpbWFyeS0xMDAgdGV4dC14bCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICB7cmVjb3JkaW5nRHVyYXRpb259OnttYXhEdXJhdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHshaXNSZWNvcmRpbmcgJiYgPGF1ZGlvIHJlZj17YXVkaW9FbGVtZW50UmVmfSBjb250cm9scz48L2F1ZGlvPn1cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaXNSZWNvcmRpbmcgPyBzdG9wUmVjb3JkaW5nKCkgOiBzdGFydFJlY29yZGluZygpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudCB0ZXh0LXdoaXRlIGgtMjAgdy0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICB7aXNSZWNvcmRpbmcgPyBcIlN0b3BcIiA6IFwiU3RhcnRcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiUGxheSIsIlJlY29yZGluZ1BhbmVsIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsIm1lZGlhUmVjb3JkZXIiLCJzZXRNZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwic2V0Q2h1bmtzIiwibWF4RHVyYXRpb24iLCJzZXRNYXhEdXJhdGlvbiIsInJlY29yZGluZ0R1cmF0aW9uIiwic2V0UmVjb3JkaW5nRHVyYXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsInJlY29yZGluZ1N0YXR1cyIsInNldFJlY29yZGluZ1N0YXR1cyIsImF1ZGlvRWxlbWVudFJlZiIsInN0YXJ0UmVjb3JkaW5nIiwiZHVyYXRpb24iLCJpZCIsInNldEludGVydmFsIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJzdG9wUmVjb3JkaW5nIiwiY2xlYXJJbnRlcnZhbCIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwiZSIsInB1c2giLCJkYXRhIiwib25zdG9wIiwicmVjb3JkZWRCbG9iIiwiQmxvYiIsInR5cGUiLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJzcmMiLCJvbmVycm9yIiwic3RhcnQiLCJlcnJvciIsInN0b3AiLCJjbGVhckR1cmF0aW9uSW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3R5bGUiLCJ3aWR0aCIsIk1hdGgiLCJyb3VuZCIsInJlZiIsImNvbnRyb2xzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingPanel.tsx\n"));

/***/ })

});