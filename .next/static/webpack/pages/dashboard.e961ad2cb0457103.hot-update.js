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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_Play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/Play */ \"./src/icons/Play.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction RecordingPanel(param) {\n    let { isRecording , setIsRecording  } = param;\n    _s();\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [chunks, setChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingStatus, setRecordingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Idle\");\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                if (duration === maxDuration) {\n                    stopRecording();\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n                setChunks(chunks);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                // Code to upload the recordedBlob to the server\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n                setRecordingStatus(\"Recording Stopped\");\n            };\n            recorder.onerror = ()=>{\n                setRecordingStatus(\"Recording Error\");\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            setRecordingStatus(\"Recording Started\");\n            setMediaRecorder(recorder);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n            setRecordingStatus(\"Recording Error\");\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            console.log(mediaRecorder);\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    function clearDurationInterval() {\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center gap-6 w-full sm:max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] \",\n                    children: recordingStatus\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this),\n                isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full  items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer bg-gradient w-12 h-12 flex items-center justify-center rounded-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Play__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative overflow-hidden flex-1 w-full  p-4 bg-slate-100\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    width: \"\".concat(Math.round(recordingDuration * (100 / maxDuration)), \"%\")\n                                },\n                                className: \" h-4  bg-primary-100 absolute left-0 top-1/2 -translate-y-1/2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" text-primary-100 text-xl font-medium\",\n                            children: [\n                                recordingDuration,\n                                \":\",\n                                maxDuration\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, this),\n                !isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                    ref: audioElementRef,\n                    controls: true\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 26\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        isRecording ? stopRecording() : startRecording();\n                    },\n                    className: \"p-2 rounded-full bg-gradient text-white h-20 w-20 flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 w-full h-full rounded-full border border-white flex items-center justify-center\",\n                        children: isRecording ? \"Stop\" : \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingPanel.tsx\",\n            lineNumber: 107,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RecordingPanel, \"d2SF2zQ8K952tZt7u4a3rdYAfCE=\");\n_c = RecordingPanel;\nvar _c;\n$RefreshReg$(_c, \"RecordingPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUUzQjtBQU9qQixTQUFTSyxlQUFlLEtBR2xCLEVBQUU7UUFIZ0IsRUFDckNDLFlBQVcsRUFDWEMsZUFBYyxFQUNLLEdBSGtCOztJQUlyQyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FDaEQsSUFBSTtJQUVOLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBUyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNhLG1CQUFtQkMscUJBQXFCLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDaUIsaUJBQWlCQyxtQkFBbUIsR0FBR2xCLCtDQUFRQSxDQUFTO0lBQy9ELE1BQU1tQixrQkFBa0JqQiw2Q0FBTUEsQ0FBMEIsSUFBSTtJQUU1RCxFQUFFO0lBQ0ZELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJSSxhQUFhO1lBQ2ZlO1lBRUEsMENBQTBDO1lBQzFDLElBQUlDLFdBQVc7WUFFZixNQUFNQyxLQUFLQyxZQUFZLElBQU07Z0JBQzNCVCxxQkFBcUIsQ0FBQ1UsT0FBU0EsT0FBTztnQkFDdENIO2dCQUNBLElBQUlBLGFBQWFWLGFBQWE7b0JBQzVCYztnQkFDRixDQUFDO1lBQ0gsR0FBRztZQUVIVCxjQUFjTTtZQUVkLE9BQU8sSUFBTTtnQkFDWEksY0FBY0o7WUFDaEI7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDakI7S0FBWTtJQUVoQixNQUFNZSxpQkFBaUIsVUFBWTtRQUNqQyxJQUFJO1lBQ0YsTUFBTU8sU0FBUyxNQUFNQyxVQUFVQyxZQUFZLENBQUNDLFlBQVksQ0FBQztnQkFBRUMsT0FBTyxJQUFJO1lBQUM7WUFDdkUsTUFBTUMsV0FBVyxJQUFJQyxjQUFjTjtZQUNuQyxNQUFNbEIsU0FBaUIsRUFBRTtZQUV6QnVCLFNBQVNFLGVBQWUsR0FBRyxDQUFDQyxJQUFNO2dCQUNoQzFCLE9BQU8yQixJQUFJLENBQUNELEVBQUVFLElBQUk7Z0JBQ2xCM0IsVUFBVUQ7WUFDWjtZQUVBdUIsU0FBU00sTUFBTSxHQUFHLElBQU07Z0JBQ3RCLE1BQU1DLGVBQWUsSUFBSUMsS0FBSy9CLFFBQVE7b0JBQUVnQyxNQUFNO2dCQUFZO2dCQUMxRCxnREFBZ0Q7Z0JBQ2hEQyxRQUFRQyxHQUFHLENBQUM7Z0JBRVosV0FBVztnQkFDWCxNQUFNQyxXQUFXQyxJQUFJQyxlQUFlLENBQUNQO2dCQUNyQyxJQUFJcEIsZ0JBQWdCNEIsT0FBTyxFQUFFO29CQUMzQjVCLGdCQUFnQjRCLE9BQU8sQ0FBQ0MsR0FBRyxHQUFHSjtnQkFDaEMsQ0FBQztnQkFDRDFCLG1CQUFtQjtZQUNyQjtZQUVBYyxTQUFTaUIsT0FBTyxHQUFHLElBQU07Z0JBQ3ZCL0IsbUJBQW1CO2dCQUNuQlosZUFBZSxLQUFLO1lBQ3RCO1lBRUEwQixTQUFTa0IsS0FBSztZQUNkNUMsZUFBZSxJQUFJO1lBQ25CWSxtQkFBbUI7WUFDbkJWLGlCQUFpQndCO1FBQ25CLEVBQUUsT0FBT21CLE9BQU87WUFDZFQsUUFBUVMsS0FBSyxDQUFDLDZCQUE2QkE7WUFDM0NqQyxtQkFBbUI7UUFDckI7SUFDRjtJQUVBLE1BQU1PLGdCQUFnQixJQUFNO1FBQzFCLElBQUlsQixlQUFlO1lBQ2pCbUMsUUFBUUMsR0FBRyxDQUFDcEM7WUFDWkEsY0FBYzZDLElBQUk7WUFDbEI5QyxlQUFlLEtBQUs7WUFDcEJRLHFCQUFxQjtRQUN2QixDQUFDO1FBRUR1QztJQUNGO0lBRUEsU0FBU0Esd0JBQXdCO1FBQy9CLElBQUl0QyxZQUFZO1lBQ2RXLGNBQWNYO1lBQ2RDLGNBQWMsSUFBSTtRQUNwQixDQUFDO0lBQ0g7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ3NDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUQsV0FBVTs4QkFBZ0J0Qzs7Ozs7O2dCQUU1QlosNkJBQ0MsOERBQUNpRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDcEQsbURBQUlBOzs7Ozs7Ozs7O3NDQUVQLDhEQUFDbUQ7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUNDRyxPQUFPO29DQUNMQyxPQUFPLEdBRUwsT0FGUUMsS0FBS0MsS0FBSyxDQUNsQi9DLG9CQUFxQixPQUFNRixXQUFVLElBQ3JDO2dDQUNKO2dDQUNBNEMsV0FBWTs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDRDs0QkFBSUMsV0FBVTs7Z0NBQ1oxQztnQ0FBa0I7Z0NBQUVGOzs7Ozs7Ozs7Ozs7O2dCQUsxQixDQUFDTiw2QkFBZSw4REFBQzBCO29CQUFNOEIsS0FBSzFDO29CQUFpQjJDLFFBQVE7Ozs7Ozs4QkFFdEQsOERBQUNDO29CQUNDQyxTQUFTLElBQU07d0JBQ2IzRCxjQUFjb0Isa0JBQWtCTCxnQkFBZ0I7b0JBQ2xEO29CQUNBbUMsV0FBVTs4QkFFViw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1psRCxjQUFjLFNBQVMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNDLENBQUM7R0F4SXVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsLnRzeD85NjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlY29yZGluZyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgUGxheSBmcm9tIFwiQC9pY29ucy9QbGF5XCI7XG5cbmludGVyZmFjZSBSZWNvcmRpbmdQYW5lbFR5cGUge1xuICBpc1JlY29yZGluZzogQm9vbGVhbjtcbiAgc2V0SXNSZWNvcmRpbmc6ICh2YWw6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29yZGluZ1BhbmVsKHtcbiAgaXNSZWNvcmRpbmcsXG4gIHNldElzUmVjb3JkaW5nLFxufTogUmVjb3JkaW5nUGFuZWxUeXBlKSB7XG4gIGNvbnN0IFttZWRpYVJlY29yZGVyLCBzZXRNZWRpYVJlY29yZGVyXSA9IHVzZVN0YXRlPE1lZGlhUmVjb3JkZXIgfCBudWxsPihcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IFtjaHVua3MsIHNldENodW5rc10gPSB1c2VTdGF0ZTxCbG9iW10+KFtdKTtcbiAgY29uc3QgW21heER1cmF0aW9uLCBzZXRNYXhEdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KDMwKTtcbiAgY29uc3QgW3JlY29yZGluZ0R1cmF0aW9uLCBzZXRSZWNvcmRpbmdEdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ludGVydmFsSWQsIHNldEludGVydmFsSWRdID0gdXNlU3RhdGU8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3JlY29yZGluZ1N0YXR1cywgc2V0UmVjb3JkaW5nU3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJJZGxlXCIpO1xuICBjb25zdCBhdWRpb0VsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIC8vXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzUmVjb3JkaW5nKSB7XG4gICAgICBzdGFydFJlY29yZGluZygpO1xuXG4gICAgICAvLyBTdGFydCB0aW1lciB0byB0cmFjayByZWNvcmRpbmcgZHVyYXRpb25cbiAgICAgIGxldCBkdXJhdGlvbiA9IDA7XG5cbiAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgICBkdXJhdGlvbisrO1xuICAgICAgICBpZiAoZHVyYXRpb24gPT09IG1heER1cmF0aW9uKSB7XG4gICAgICAgICAgc3RvcFJlY29yZGluZygpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgc2V0SW50ZXJ2YWxJZChpZCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtpc1JlY29yZGluZ10pO1xuXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pO1xuICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xuICAgICAgY29uc3QgY2h1bmtzOiBCbG9iW10gPSBbXTtcblxuICAgICAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGUpID0+IHtcbiAgICAgICAgY2h1bmtzLnB1c2goZS5kYXRhKTtcbiAgICAgICAgc2V0Q2h1bmtzKGNodW5rcyk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZGVkQmxvYiA9IG5ldyBCbG9iKGNodW5rcywgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pO1xuICAgICAgICAvLyBDb2RlIHRvIHVwbG9hZCB0aGUgcmVjb3JkZWRCbG9iIHRvIHRoZSBzZXJ2ZXJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcblxuICAgICAgICAvL1NldCBhdWRpb1xuICAgICAgICBjb25zdCBhdWRpb1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgaWYgKGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQuc3JjID0gYXVkaW9VUkw7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIFN0b3BwZWRcIik7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgRXJyb3JcIik7XG4gICAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICBzZXRJc1JlY29yZGluZyh0cnVlKTtcbiAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBTdGFydGVkXCIpO1xuICAgICAgc2V0TWVkaWFSZWNvcmRlcihyZWNvcmRlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBFcnJvclwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlcikge1xuICAgICAgY29uc29sZS5sb2cobWVkaWFSZWNvcmRlcik7XG4gICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgIHNldFJlY29yZGluZ0R1cmF0aW9uKDApO1xuICAgIH1cblxuICAgIGNsZWFyRHVyYXRpb25JbnRlcnZhbCgpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNsZWFyRHVyYXRpb25JbnRlcnZhbCgpIHtcbiAgICBpZiAoaW50ZXJ2YWxJZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIHNldEludGVydmFsSWQobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNiB3LWZ1bGwgc206bWF4LXctMnhsXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIFwiPntyZWNvcmRpbmdTdGF0dXN9PC9wPlxuXG4gICAgICAgIHtpc1JlY29yZGluZyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCAgaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGJnLWdyYWRpZW50IHctMTIgaC0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgPFBsYXkgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gZmxleC0xIHctZnVsbCAgcC00IGJnLXNsYXRlLTEwMFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICByZWNvcmRpbmdEdXJhdGlvbiAqICgxMDAgLyBtYXhEdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICl9JWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgaC00ICBiZy1wcmltYXJ5LTEwMCBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yYH1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXByaW1hcnktMTAwIHRleHQteGwgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAge3JlY29yZGluZ0R1cmF0aW9ufTp7bWF4RHVyYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWlzUmVjb3JkaW5nICYmIDxhdWRpbyByZWY9e2F1ZGlvRWxlbWVudFJlZn0gY29udHJvbHM+PC9hdWRpbz59XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nID8gc3RvcFJlY29yZGluZygpIDogc3RhcnRSZWNvcmRpbmcoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQgdGV4dC13aGl0ZSBoLTIwIHctMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsIGgtZnVsbCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAge2lzUmVjb3JkaW5nID8gXCJTdG9wXCIgOiBcIlN0YXJ0XCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlBsYXkiLCJSZWNvcmRpbmdQYW5lbCIsImlzUmVjb3JkaW5nIiwic2V0SXNSZWNvcmRpbmciLCJtZWRpYVJlY29yZGVyIiwic2V0TWVkaWFSZWNvcmRlciIsImNodW5rcyIsInNldENodW5rcyIsIm1heER1cmF0aW9uIiwic2V0TWF4RHVyYXRpb24iLCJyZWNvcmRpbmdEdXJhdGlvbiIsInNldFJlY29yZGluZ0R1cmF0aW9uIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJyZWNvcmRpbmdTdGF0dXMiLCJzZXRSZWNvcmRpbmdTdGF0dXMiLCJhdWRpb0VsZW1lbnRSZWYiLCJzdGFydFJlY29yZGluZyIsImR1cmF0aW9uIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJzdG9wUmVjb3JkaW5nIiwiY2xlYXJJbnRlcnZhbCIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwiZSIsInB1c2giLCJkYXRhIiwib25zdG9wIiwicmVjb3JkZWRCbG9iIiwiQmxvYiIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJyZW50Iiwic3JjIiwib25lcnJvciIsInN0YXJ0IiwiZXJyb3IiLCJzdG9wIiwiY2xlYXJEdXJhdGlvbkludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInN0eWxlIiwid2lkdGgiLCJNYXRoIiwicm91bmQiLCJyZWYiLCJjb250cm9scyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingPanel.tsx\n"));

/***/ })

});