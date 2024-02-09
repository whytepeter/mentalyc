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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useUpload */ \"./src/hooks/useUpload.ts\");\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [recordingStatus, setRecordingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { uploadRecording , isUploading  } = (0,_hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__.useUpload)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            if (!recordingStatus) return;\n            const id = setInterval(()=>{\n                setTime((prevTime)=>prevTime + 1);\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording,\n        recordingStatus\n    ]);\n    const clearDurationInterval = ()=>{\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    };\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                    console.log(audioElementRef.current.duration);\n                }\n                setRecordingStatus(\"\");\n            };\n            recorder.onerror = ()=>{\n                setIsRecording(false);\n                setRecordingStatus(\"\");\n            };\n            recorder.start();\n            setIsRecording(true);\n            setRecordingStatus(\"Recording started\");\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setTime(0);\n        }\n        clearDurationInterval();\n    };\n    const handleUpload = ()=>{\n        if (!recordedBlob) return;\n        uploadRecording(recordedBlob, sessionName, time);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[20px] \",\n                        children: [\n                            \"Name: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: sessionName\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 17\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        time: time,\n                        stopRecording: stopRecording\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioElementRef,\n                                controls: true\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        onClick: startRecording,\n                                        color: \"default\",\n                                        className: \"w-full\",\n                                        children: \"Record Again\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        onClick: handleUpload,\n                                        className: \"w-full\",\n                                        children: \"Upload Recording\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_3__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: isUploading,\n                onClose: ()=>{},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-bold text-xl mb-1\",\n                            children: \"Uploading recording\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 148,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingSession, \"PNfwIUmOS6xJ3JUMas9mQTq9S1Y=\", false, function() {\n    return [\n        _hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__.useUpload\n    ];\n});\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNiO0FBQ0s7QUFDTjtBQUNKO0FBQzJCO0FBUXJELFNBQVNTLGlCQUFpQixLQUlsQixFQUFFO1FBSmdCLEVBQ3ZDQyxZQUFXLEVBQ1hDLFlBQVcsRUFDWEMsZUFBYyxFQUNPLEdBSmtCOztJQUt2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ2dCLGVBQWVDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQ2hELElBQUk7SUFFTixNQUFNLENBQUNrQixjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFjLElBQUk7SUFDbEUsTUFBTW9CLGtCQUFrQmxCLDZDQUFNQSxDQUEwQixJQUFJO0lBQzVELE1BQU0sQ0FBQ21CLGlCQUFpQkMsbUJBQW1CLEdBQUd0QiwrQ0FBUUEsQ0FBUztJQUUvRCxNQUFNLEVBQUV1QixnQkFBZSxFQUFFQyxZQUFXLEVBQUUsR0FBR3JCLDJEQUFTQTtJQUVsREYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlTLGFBQWE7WUFDZmU7WUFDQSwwQ0FBMEM7WUFDMUMsSUFBSSxDQUFDSixpQkFBaUI7WUFFdEIsTUFBTUssS0FBS0MsWUFBWSxJQUFNO2dCQUMzQlosUUFBUSxDQUFDYSxXQUFhQSxXQUFXO1lBQ25DLEdBQUc7WUFDSGYsY0FBY2E7WUFDZCxPQUFPLElBQU07Z0JBQ1hHLGNBQWNIO1lBQ2hCO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ2hCO1FBQWFXO0tBQWdCO0lBRWpDLE1BQU1TLHdCQUF3QixJQUFZO1FBQ3hDLElBQUlsQixZQUFZO1lBQ2RpQixjQUFjakI7WUFDZEMsY0FBYyxJQUFJO1FBQ3BCLENBQUM7SUFDSDtJQUVBLE1BQU1ZLGlCQUFpQixVQUFZO1FBQ2pDLElBQUk7WUFDRixNQUFNTSxTQUFTLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUFFQyxPQUFPLElBQUk7WUFBQztZQUV2RSxNQUFNQyxXQUFXLElBQUlDLGNBQWNOO1lBQ25DZCxpQkFBaUJtQjtZQUVqQixNQUFNRSxTQUFpQixFQUFFO1lBQ3pCRixTQUFTRyxlQUFlLEdBQUcsQ0FBQ0MsSUFBTTtnQkFDaENGLE9BQU9HLElBQUksQ0FBQ0QsRUFBRUUsSUFBSTtZQUNwQjtZQUVBTixTQUFTTyxNQUFNLEdBQUcsSUFBTTtnQkFDdEIsTUFBTXpCLGVBQWUsSUFBSTBCLEtBQUtOLFFBQVE7b0JBQUVPLE1BQU07Z0JBQVk7Z0JBQzFEMUIsZ0JBQWdCRDtnQkFDaEI0QixRQUFRQyxHQUFHLENBQUM7Z0JBRVosV0FBVztnQkFDWCxNQUFNQyxXQUFXQyxJQUFJQyxlQUFlLENBQUNoQztnQkFDckMsSUFBSUUsZ0JBQWdCK0IsT0FBTyxFQUFFO29CQUMzQi9CLGdCQUFnQitCLE9BQU8sQ0FBQ0MsR0FBRyxHQUFHSjtvQkFDOUJGLFFBQVFDLEdBQUcsQ0FBQzNCLGdCQUFnQitCLE9BQU8sQ0FBQ0UsUUFBUTtnQkFDOUMsQ0FBQztnQkFFRC9CLG1CQUFtQjtZQUNyQjtZQUVBYyxTQUFTa0IsT0FBTyxHQUFHLElBQU07Z0JBQ3ZCM0MsZUFBZSxLQUFLO2dCQUNwQlcsbUJBQW1CO1lBQ3JCO1lBRUFjLFNBQVNtQixLQUFLO1lBQ2Q1QyxlQUFlLElBQUk7WUFDbkJXLG1CQUFtQjtRQUNyQixFQUFFLE9BQU9rQyxPQUFPO1lBQ2RWLFFBQVFVLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzdDO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0IsSUFBWTtRQUNoQyxJQUFJekMsZUFBZTtZQUNqQkEsY0FBYzBDLElBQUk7WUFDbEIvQyxlQUFlLEtBQUs7WUFDcEJJLFFBQVE7UUFDVixDQUFDO1FBRURlO0lBQ0Y7SUFFQSxNQUFNNkIsZUFBZSxJQUFZO1FBQy9CLElBQUksQ0FBQ3pDLGNBQWM7UUFDbkJLLGdCQUFnQkwsY0FBY1QsYUFBYUs7SUFDN0M7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUM4QztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFFRCxXQUFVOzs0QkFBZTswQ0FDcEIsOERBQUNFO2dDQUFLRixXQUFVOzBDQUFpQnBEOzs7Ozs7NEJBQW9COzs7Ozs7O29CQUc1REMsNEJBQ0MsOERBQUNILDZFQUFjQTt3QkFBQ08sTUFBTUE7d0JBQU0yQyxlQUFlQTs7Ozs7NkNBRTNDOzswQ0FDRSw4REFBQ3RCO2dDQUFNNkIsS0FBSzVDO2dDQUFpQjZDLFFBQVE7Ozs7OzswQ0FFckMsOERBQUNMO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ3hELHNEQUFNQTt3Q0FDTDZELFNBQVN6Qzt3Q0FDVDBDLE9BQU07d0NBQ05OLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ3hELHNEQUFNQTt3Q0FBQzZELFNBQVNQO3dDQUFjRSxXQUFVO2tEQUFTOzs7Ozs7Ozs7Ozs7O29DQUt2RDs7Ozs7OzswQkFHSCw4REFBQ3pELDREQUFTQTtnQkFDUmdFLG1CQUFtQixLQUFLO2dCQUN4QkMsTUFBSztnQkFDTEMsTUFBTTlDO2dCQUNOK0MsU0FBUyxJQUFNLENBQUM7O2tDQUVoQiw4REFBQ1g7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNXOzRCQUFHWCxXQUFVO3NDQUF5Qjs7Ozs7Ozs7Ozs7a0NBR3pDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3ZELDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCLENBQUM7R0EzSXVCRTs7UUFjbUJMLHVEQUFTQTs7O0tBZDVCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4P2M1YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVXBsb2FkIH0gZnJvbSBcIkAvaG9va3MvdXNlVXBsb2FkXCI7XG5pbXBvcnQgeyBCYXNlTW9kYWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL0Jhc2VNb2RhbFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBSZWNvcmRpbmdQYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nUGFuZWxcIjtcblxudHlwZSBSZWNvcmRpbmdTZXNzaW9uVHlwZSA9IHtcbiAgc2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgaXNSZWNvcmRpbmc6IEJvb2xlYW47XG4gIHNldElzUmVjb3JkaW5nOiAodmFsOiBib29sZWFuKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3JkaW5nU2Vzc2lvbih7XG4gIHNlc3Npb25OYW1lLFxuICBpc1JlY29yZGluZyxcbiAgc2V0SXNSZWNvcmRpbmcsXG59OiBSZWNvcmRpbmdTZXNzaW9uVHlwZSkge1xuICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbbWVkaWFSZWNvcmRlciwgc2V0TWVkaWFSZWNvcmRlcl0gPSB1c2VTdGF0ZTxNZWRpYVJlY29yZGVyIHwgbnVsbD4oXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBbcmVjb3JkZWRCbG9iLCBzZXRSZWNvcmRlZEJsb2JdID0gdXNlU3RhdGU8QmxvYiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBhdWRpb0VsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmVjb3JkaW5nU3RhdHVzLCBzZXRSZWNvcmRpbmdTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCB7IHVwbG9hZFJlY29yZGluZywgaXNVcGxvYWRpbmcgfSA9IHVzZVVwbG9hZCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzUmVjb3JkaW5nKSB7XG4gICAgICBzdGFydFJlY29yZGluZygpO1xuICAgICAgLy8gU3RhcnQgdGltZXIgdG8gdHJhY2sgcmVjb3JkaW5nIGR1cmF0aW9uXG4gICAgICBpZiAoIXJlY29yZGluZ1N0YXR1cykgcmV0dXJuO1xuXG4gICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0VGltZSgocHJldlRpbWUpID0+IHByZXZUaW1lICsgMSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldEludGVydmFsSWQoaWQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2lzUmVjb3JkaW5nLCByZWNvcmRpbmdTdGF0dXNdKTtcblxuICBjb25zdCBjbGVhckR1cmF0aW9uSW50ZXJ2YWwgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKGludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICBzZXRJbnRlcnZhbElkKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KTtcblxuICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xuICAgICAgc2V0TWVkaWFSZWNvcmRlcihyZWNvcmRlcik7XG5cbiAgICAgIGNvbnN0IGNodW5rczogQmxvYltdID0gW107XG4gICAgICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZSkgPT4ge1xuICAgICAgICBjaHVua3MucHVzaChlLmRhdGEpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZWNvcmRlZEJsb2IgPSBuZXcgQmxvYihjaHVua3MsIHsgdHlwZTogXCJhdWRpby93YXZcIiB9KTtcbiAgICAgICAgc2V0UmVjb3JkZWRCbG9iKHJlY29yZGVkQmxvYik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0b3BwZWRcIik7XG5cbiAgICAgICAgLy9TZXQgYXVkaW9cbiAgICAgICAgY29uc3QgYXVkaW9VUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlY29yZGVkQmxvYik7XG4gICAgICAgIGlmIChhdWRpb0VsZW1lbnRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50LnNyYyA9IGF1ZGlvVVJMO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50LmR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlwiKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiXCIpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgIHNldElzUmVjb3JkaW5nKHRydWUpO1xuICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIHN0YXJ0ZWRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlcikge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICBzZXRUaW1lKDApO1xuICAgIH1cblxuICAgIGNsZWFyRHVyYXRpb25JbnRlcnZhbCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoIXJlY29yZGVkQmxvYikgcmV0dXJuO1xuICAgIHVwbG9hZFJlY29yZGluZyhyZWNvcmRlZEJsb2IsIHNlc3Npb25OYW1lLCB0aW1lKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC04IHctZnVsbCBzbTptYXgtdy0yeGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gXCI+XG4gICAgICAgICAgTmFtZTogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPntzZXNzaW9uTmFtZX08L3NwYW4+e1wiIFwifVxuICAgICAgICA8L3A+XG5cbiAgICAgICAge2lzUmVjb3JkaW5nID8gKFxuICAgICAgICAgIDxSZWNvcmRpbmdQYW5lbCB0aW1lPXt0aW1lfSBzdG9wUmVjb3JkaW5nPXtzdG9wUmVjb3JkaW5nfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YXVkaW8gcmVmPXthdWRpb0VsZW1lbnRSZWZ9IGNvbnRyb2xzPjwvYXVkaW8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSB3LWZ1bGwgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0UmVjb3JkaW5nfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlY29yZCBBZ2FpblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgIFVwbG9hZCBSZWNvcmRpbmdcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8QmFzZU1vZGFsXG4gICAgICAgIHNob3dEaXNtaXNzQnV0dG9uPXtmYWxzZX1cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgb3Blbj17aXNVcGxvYWRpbmd9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHt9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWItMVwiPlVwbG9hZGluZyByZWNvcmRpbmc8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQmFzZU1vZGFsPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VVcGxvYWQiLCJCYXNlTW9kYWwiLCJCdXR0b24iLCJMb2FkZXIiLCJSZWNvcmRpbmdQYW5lbCIsIlJlY29yZGluZ1Nlc3Npb24iLCJzZXNzaW9uTmFtZSIsImlzUmVjb3JkaW5nIiwic2V0SXNSZWNvcmRpbmciLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsInRpbWUiLCJzZXRUaW1lIiwibWVkaWFSZWNvcmRlciIsInNldE1lZGlhUmVjb3JkZXIiLCJyZWNvcmRlZEJsb2IiLCJzZXRSZWNvcmRlZEJsb2IiLCJhdWRpb0VsZW1lbnRSZWYiLCJyZWNvcmRpbmdTdGF0dXMiLCJzZXRSZWNvcmRpbmdTdGF0dXMiLCJ1cGxvYWRSZWNvcmRpbmciLCJpc1VwbG9hZGluZyIsInN0YXJ0UmVjb3JkaW5nIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyRHVyYXRpb25JbnRlcnZhbCIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwib25kYXRhYXZhaWxhYmxlIiwiZSIsInB1c2giLCJkYXRhIiwib25zdG9wIiwiQmxvYiIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJyZW50Iiwic3JjIiwiZHVyYXRpb24iLCJvbmVycm9yIiwic3RhcnQiLCJlcnJvciIsInN0b3BSZWNvcmRpbmciLCJzdG9wIiwiaGFuZGxlVXBsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJyZWYiLCJjb250cm9scyIsIm9uQ2xpY2siLCJjb2xvciIsInNob3dEaXNtaXNzQnV0dG9uIiwic2l6ZSIsIm9wZW4iLCJvbkNsb3NlIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});