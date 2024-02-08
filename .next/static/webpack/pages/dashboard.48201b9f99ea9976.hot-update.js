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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useUpload */ \"./src/hooks/useUpload.ts\");\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isPaused, setIsPaused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { uploadRecording , isUploading  } = (0,_hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__.useUpload)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording && !isPaused) {\n            startRecording();\n            // Start timer to track recording duration\n            const id = setInterval(()=>{\n                setTime((prevTime)=>prevTime + 1);\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording,\n        isPaused\n    ]);\n    const clearDurationInterval = ()=>{\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    };\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n            };\n            recorder.onerror = ()=>{\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n        }\n    };\n    const togglePauseRecording = ()=>{\n        if (mediaRecorder) {\n            if (isPaused) {\n                // Resume recording\n                mediaRecorder.resume();\n                setIsPaused(false);\n            } else {\n                // Pause recording\n                mediaRecorder.pause();\n                setIsPaused(true);\n            }\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n        }\n        clearDurationInterval();\n    };\n    const handleUpload = ()=>{\n        if (!recordedBlob) return;\n        uploadRecording(recordedBlob, sessionName, time);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[20px] \",\n                        children: [\n                            \"Name: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: sessionName\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 17\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isPaused: isPaused,\n                        pauseRecording: togglePauseRecording,\n                        time: time,\n                        stopRecording: stopRecording\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioElementRef,\n                                controls: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        onClick: startRecording,\n                                        color: \"default\",\n                                        className: \"w-full\",\n                                        children: \"Record Again\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        onClick: handleUpload,\n                                        className: \"w-full\",\n                                        children: \"Upload Recording\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 141,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_3__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: isUploading,\n                onClose: ()=>{},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-bold text-xl mb-1\",\n                            children: \"Uploading recording\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingSession, \"IiQijeg+6OSGczp5lNdWu+F/exs=\", false, function() {\n    return [\n        _hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__.useUpload\n    ];\n});\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNiO0FBQ0s7QUFDTjtBQUNKO0FBQzJCO0FBUXJELFNBQVNTLGlCQUFpQixLQUlsQixFQUFFO1FBSmdCLEVBQ3ZDQyxZQUFXLEVBQ1hDLFlBQVcsRUFDWEMsZUFBYyxFQUNPLEdBSmtCOztJQUt2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFVLEtBQUs7SUFDdkQsTUFBTSxDQUFDa0IsZUFBZUMsaUJBQWlCLEdBQUduQiwrQ0FBUUEsQ0FDaEQsSUFBSTtJQUVOLE1BQU0sQ0FBQ29CLGNBQWNDLGdCQUFnQixHQUFHckIsK0NBQVFBLENBQWMsSUFBSTtJQUNsRSxNQUFNc0Isa0JBQWtCcEIsNkNBQU1BLENBQTBCLElBQUk7SUFFNUQsTUFBTSxFQUFFcUIsZ0JBQWUsRUFBRUMsWUFBVyxFQUFFLEdBQUdyQiwyREFBU0E7SUFFbERGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJUyxlQUFlLENBQUNNLFVBQVU7WUFDNUJTO1lBRUEsMENBQTBDO1lBQzFDLE1BQU1DLEtBQUtDLFlBQVksSUFBTTtnQkFDM0JaLFFBQVEsQ0FBQ2EsV0FBYUEsV0FBVztZQUNuQyxHQUFHO1lBQ0hmLGNBQWNhO1lBQ2QsT0FBTyxJQUFNO2dCQUNYRyxjQUFjSDtZQUNoQjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNoQjtRQUFhTTtLQUFTO0lBRTFCLE1BQU1jLHdCQUF3QixJQUFZO1FBQ3hDLElBQUlsQixZQUFZO1lBQ2RpQixjQUFjakI7WUFDZEMsY0FBYyxJQUFJO1FBQ3BCLENBQUM7SUFDSDtJQUVBLE1BQU1ZLGlCQUFpQixVQUFZO1FBQ2pDLElBQUk7WUFDRixNQUFNTSxTQUFTLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUFFQyxPQUFPLElBQUk7WUFBQztZQUV2RSxNQUFNQyxXQUFXLElBQUlDLGNBQWNOO1lBQ25DWixpQkFBaUJpQjtZQUVqQixNQUFNRSxTQUFpQixFQUFFO1lBQ3pCRixTQUFTRyxlQUFlLEdBQUcsQ0FBQ0MsSUFBTTtnQkFDaENGLE9BQU9HLElBQUksQ0FBQ0QsRUFBRUUsSUFBSTtZQUNwQjtZQUVBTixTQUFTTyxNQUFNLEdBQUcsSUFBTTtnQkFDdEIsTUFBTXZCLGVBQWUsSUFBSXdCLEtBQUtOLFFBQVE7b0JBQUVPLE1BQU07Z0JBQVk7Z0JBQzFEeEIsZ0JBQWdCRDtnQkFDaEIwQixRQUFRQyxHQUFHLENBQUM7Z0JBRVosV0FBVztnQkFDWCxNQUFNQyxXQUFXQyxJQUFJQyxlQUFlLENBQUM5QjtnQkFDckMsSUFBSUUsZ0JBQWdCNkIsT0FBTyxFQUFFO29CQUMzQjdCLGdCQUFnQjZCLE9BQU8sQ0FBQ0MsR0FBRyxHQUFHSjtnQkFDaEMsQ0FBQztZQUNIO1lBRUFaLFNBQVNpQixPQUFPLEdBQUcsSUFBTTtnQkFDdkIxQyxlQUFlLEtBQUs7WUFDdEI7WUFFQXlCLFNBQVNrQixLQUFLO1lBQ2QzQyxlQUFlLElBQUk7UUFDckIsRUFBRSxPQUFPNEMsT0FBTztZQUNkVCxRQUFRUyxLQUFLLENBQUMsNkJBQTZCQTtRQUM3QztJQUNGO0lBRUEsTUFBTUMsdUJBQXVCLElBQVk7UUFDdkMsSUFBSXRDLGVBQWU7WUFDakIsSUFBSUYsVUFBVTtnQkFDWixtQkFBbUI7Z0JBQ25CRSxjQUFjdUMsTUFBTTtnQkFDcEJ4QyxZQUFZLEtBQUs7WUFDbkIsT0FBTztnQkFDTCxrQkFBa0I7Z0JBQ2xCQyxjQUFjd0MsS0FBSztnQkFDbkJ6QyxZQUFZLElBQUk7WUFDbEIsQ0FBQztRQUNILENBQUM7SUFDSDtJQUVBLE1BQU0wQyxnQkFBZ0IsSUFBWTtRQUNoQyxJQUFJekMsZUFBZTtZQUNqQkEsY0FBYzBDLElBQUk7WUFDbEJqRCxlQUFlLEtBQUs7UUFDdEIsQ0FBQztRQUVEbUI7SUFDRjtJQUVBLE1BQU0rQixlQUFlLElBQVk7UUFDL0IsSUFBSSxDQUFDekMsY0FBYztRQUNuQkcsZ0JBQWdCSCxjQUFjWCxhQUFhSztJQUM3QztJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2dEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUVELFdBQVU7OzRCQUFlOzBDQUNwQiw4REFBQ0U7Z0NBQUtGLFdBQVU7MENBQWlCdEQ7Ozs7Ozs0QkFBb0I7Ozs7Ozs7b0JBRzVEQyw0QkFDQyw4REFBQ0gsNkVBQWNBO3dCQUNiUyxVQUFVQTt3QkFDVmtELGdCQUFnQlY7d0JBQ2hCMUMsTUFBTUE7d0JBQ042QyxlQUFlQTs7Ozs7NkNBR2pCOzswQ0FDRSw4REFBQ3hCO2dDQUFNZ0MsS0FBSzdDO2dDQUFpQjhDLFFBQVE7Ozs7OzswQ0FFckMsOERBQUNOO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQzFELHNEQUFNQTt3Q0FDTGdFLFNBQVM1Qzt3Q0FDVDZDLE9BQU07d0NBQ05QLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQzFELHNEQUFNQTt3Q0FBQ2dFLFNBQVNSO3dDQUFjRSxXQUFVO2tEQUFTOzs7Ozs7Ozs7Ozs7O29DQUt2RDs7Ozs7OzswQkFHSCw4REFBQzNELDREQUFTQTtnQkFDUm1FLG1CQUFtQixLQUFLO2dCQUN4QkMsTUFBSztnQkFDTEMsTUFBTWpEO2dCQUNOa0QsU0FBUyxJQUFNLENBQUM7O2tDQUVoQiw4REFBQ1o7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNZOzRCQUFHWixXQUFVO3NDQUF5Qjs7Ozs7Ozs7Ozs7a0NBR3pDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3pELDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCLENBQUM7R0F2SnVCRTs7UUFjbUJMLHVEQUFTQTs7O0tBZDVCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4P2M1YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVXBsb2FkIH0gZnJvbSBcIkAvaG9va3MvdXNlVXBsb2FkXCI7XG5pbXBvcnQgeyBCYXNlTW9kYWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL0Jhc2VNb2RhbFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBSZWNvcmRpbmdQYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nUGFuZWxcIjtcblxudHlwZSBSZWNvcmRpbmdTZXNzaW9uVHlwZSA9IHtcbiAgc2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgaXNSZWNvcmRpbmc6IEJvb2xlYW47XG4gIHNldElzUmVjb3JkaW5nOiAodmFsOiBib29sZWFuKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3JkaW5nU2Vzc2lvbih7XG4gIHNlc3Npb25OYW1lLFxuICBpc1JlY29yZGluZyxcbiAgc2V0SXNSZWNvcmRpbmcsXG59OiBSZWNvcmRpbmdTZXNzaW9uVHlwZSkge1xuICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbaXNQYXVzZWQsIHNldElzUGF1c2VkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW21lZGlhUmVjb3JkZXIsIHNldE1lZGlhUmVjb3JkZXJdID0gdXNlU3RhdGU8TWVkaWFSZWNvcmRlciB8IG51bGw+KFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgW3JlY29yZGVkQmxvYiwgc2V0UmVjb3JkZWRCbG9iXSA9IHVzZVN0YXRlPEJsb2IgfCBudWxsPihudWxsKTtcbiAgY29uc3QgYXVkaW9FbGVtZW50UmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCB7IHVwbG9hZFJlY29yZGluZywgaXNVcGxvYWRpbmcgfSA9IHVzZVVwbG9hZCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzUmVjb3JkaW5nICYmICFpc1BhdXNlZCkge1xuICAgICAgc3RhcnRSZWNvcmRpbmcoKTtcblxuICAgICAgLy8gU3RhcnQgdGltZXIgdG8gdHJhY2sgcmVjb3JkaW5nIGR1cmF0aW9uXG4gICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0VGltZSgocHJldlRpbWUpID0+IHByZXZUaW1lICsgMSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldEludGVydmFsSWQoaWQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2lzUmVjb3JkaW5nLCBpc1BhdXNlZF0pO1xuXG4gIGNvbnN0IGNsZWFyRHVyYXRpb25JbnRlcnZhbCA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoaW50ZXJ2YWxJZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIHNldEludGVydmFsSWQobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pO1xuXG4gICAgICBjb25zdCByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG4gICAgICBzZXRNZWRpYVJlY29yZGVyKHJlY29yZGVyKTtcblxuICAgICAgY29uc3QgY2h1bmtzOiBCbG9iW10gPSBbXTtcbiAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChlKSA9PiB7XG4gICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZGVkQmxvYiA9IG5ldyBCbG9iKGNodW5rcywgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pO1xuICAgICAgICBzZXRSZWNvcmRlZEJsb2IocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcblxuICAgICAgICAvL1NldCBhdWRpb1xuICAgICAgICBjb25zdCBhdWRpb1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgaWYgKGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQuc3JjID0gYXVkaW9VUkw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICBzZXRJc1JlY29yZGluZyh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2dnbGVQYXVzZVJlY29yZGluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlcikge1xuICAgICAgaWYgKGlzUGF1c2VkKSB7XG4gICAgICAgIC8vIFJlc3VtZSByZWNvcmRpbmdcbiAgICAgICAgbWVkaWFSZWNvcmRlci5yZXN1bWUoKTtcbiAgICAgICAgc2V0SXNQYXVzZWQoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUGF1c2UgcmVjb3JkaW5nXG4gICAgICAgIG1lZGlhUmVjb3JkZXIucGF1c2UoKTtcbiAgICAgICAgc2V0SXNQYXVzZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKG1lZGlhUmVjb3JkZXIpIHtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIGNsZWFyRHVyYXRpb25JbnRlcnZhbCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoIXJlY29yZGVkQmxvYikgcmV0dXJuO1xuICAgIHVwbG9hZFJlY29yZGluZyhyZWNvcmRlZEJsb2IsIHNlc3Npb25OYW1lLCB0aW1lKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC04IHctZnVsbCBzbTptYXgtdy0yeGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gXCI+XG4gICAgICAgICAgTmFtZTogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPntzZXNzaW9uTmFtZX08L3NwYW4+e1wiIFwifVxuICAgICAgICA8L3A+XG5cbiAgICAgICAge2lzUmVjb3JkaW5nID8gKFxuICAgICAgICAgIDxSZWNvcmRpbmdQYW5lbFxuICAgICAgICAgICAgaXNQYXVzZWQ9e2lzUGF1c2VkfVxuICAgICAgICAgICAgcGF1c2VSZWNvcmRpbmc9e3RvZ2dsZVBhdXNlUmVjb3JkaW5nfVxuICAgICAgICAgICAgdGltZT17dGltZX1cbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmc9e3N0b3BSZWNvcmRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9FbGVtZW50UmVmfSBjb250cm9scz48L2F1ZGlvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgdy1mdWxsIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydFJlY29yZGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZWNvcmQgQWdhaW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlVXBsb2FkfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICBVcGxvYWQgUmVjb3JkaW5nXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEJhc2VNb2RhbFxuICAgICAgICBzaG93RGlzbWlzc0J1dHRvbj17ZmFsc2V9XG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIG9wZW49e2lzVXBsb2FkaW5nfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7fX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTFcIj5VcGxvYWRpbmcgcmVjb3JkaW5nPC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Jhc2VNb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlVXBsb2FkIiwiQmFzZU1vZGFsIiwiQnV0dG9uIiwiTG9hZGVyIiwiUmVjb3JkaW5nUGFuZWwiLCJSZWNvcmRpbmdTZXNzaW9uIiwic2Vzc2lvbk5hbWUiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJ0aW1lIiwic2V0VGltZSIsImlzUGF1c2VkIiwic2V0SXNQYXVzZWQiLCJtZWRpYVJlY29yZGVyIiwic2V0TWVkaWFSZWNvcmRlciIsInJlY29yZGVkQmxvYiIsInNldFJlY29yZGVkQmxvYiIsImF1ZGlvRWxlbWVudFJlZiIsInVwbG9hZFJlY29yZGluZyIsImlzVXBsb2FkaW5nIiwic3RhcnRSZWNvcmRpbmciLCJpZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiY2xlYXJEdXJhdGlvbkludGVydmFsIiwic3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJyZWNvcmRlciIsIk1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJvbmRhdGFhdmFpbGFibGUiLCJlIiwicHVzaCIsImRhdGEiLCJvbnN0b3AiLCJCbG9iIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJzcmMiLCJvbmVycm9yIiwic3RhcnQiLCJlcnJvciIsInRvZ2dsZVBhdXNlUmVjb3JkaW5nIiwicmVzdW1lIiwicGF1c2UiLCJzdG9wUmVjb3JkaW5nIiwic3RvcCIsImhhbmRsZVVwbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwicGF1c2VSZWNvcmRpbmciLCJyZWYiLCJjb250cm9scyIsIm9uQ2xpY2siLCJjb2xvciIsInNob3dEaXNtaXNzQnV0dG9uIiwic2l6ZSIsIm9wZW4iLCJvbkNsb3NlIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});