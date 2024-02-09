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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useUpload */ \"./src/hooks/useUpload.ts\");\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { uploadRecording , isUploading  } = (0,_hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__.useUpload)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Only create/clear the timer based on `isRecording`\n        if (isRecording) {\n            // Ensure mediaRecorder is initialized (avoids unnecessary checks)\n            if (!mediaRecorder) {\n                startRecording();\n            } else {\n                // If already recording, just start the timer\n                const id = setInterval(()=>{\n                    setTime((prevTime)=>prevTime + 1);\n                }, 1000);\n                setIntervalId(id);\n            }\n        } else {\n            clearDurationInterval();\n        }\n        return ()=>{\n            clearDurationInterval();\n        };\n    }, [\n        isRecording,\n        mediaRecorder\n    ]);\n    const clearDurationInterval = ()=>{\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    };\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n            };\n            recorder.onerror = ()=>{\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            console.log(\"Record started\");\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setTime(0);\n        }\n        clearDurationInterval();\n    };\n    const handleUpload = ()=>{\n        if (!recordedBlob) return;\n        uploadRecording(recordedBlob, sessionName, time);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[20px] \",\n                        children: [\n                            \"Name: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: sessionName\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        time: time,\n                        stopRecording: stopRecording\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioElementRef,\n                                controls: true\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        onClick: startRecording,\n                                        color: \"default\",\n                                        className: \"w-full\",\n                                        children: \"Record Again\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        onClick: handleUpload,\n                                        className: \"w-full\",\n                                        children: \"Upload Recording\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_3__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: isUploading,\n                onClose: ()=>{},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-bold text-xl mb-1\",\n                            children: \"Uploading recording\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 149,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/mentalyc/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingSession, \"Ip0WLL1tc7viSnrJ0c6kr2JUQcM=\", false, function() {\n    return [\n        _hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__.useUpload\n    ];\n});\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNiO0FBQ0s7QUFDTjtBQUNKO0FBQzJCO0FBUXJELFNBQVNTLGlCQUFpQixLQUlsQixFQUFFO1FBSmdCLEVBQ3ZDQyxZQUFXLEVBQ1hDLFlBQVcsRUFDWEMsZUFBYyxFQUNPLEdBSmtCOztJQUt2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ2dCLGVBQWVDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQ2hELElBQUk7SUFFTixNQUFNLENBQUNrQixjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFjLElBQUk7SUFDbEUsTUFBTW9CLGtCQUFrQmxCLDZDQUFNQSxDQUEwQixJQUFJO0lBRTVELE1BQU0sRUFBRW1CLGdCQUFlLEVBQUVDLFlBQVcsRUFBRSxHQUFHbkIsMkRBQVNBO0lBRWxERixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QscURBQXFEO1FBQ3JELElBQUlTLGFBQWE7WUFDZixrRUFBa0U7WUFDbEUsSUFBSSxDQUFDTSxlQUFlO2dCQUNsQk87WUFDRixPQUFPO2dCQUNMLDZDQUE2QztnQkFDN0MsTUFBTUMsS0FBS0MsWUFBWSxJQUFNO29CQUMzQlYsUUFBUSxDQUFDVyxXQUFhQSxXQUFXO2dCQUNuQyxHQUFHO2dCQUNIYixjQUFjVztZQUNoQixDQUFDO1FBQ0gsT0FBTztZQUNMRztRQUNGLENBQUM7UUFFRCxPQUFPLElBQU07WUFDWEE7UUFDRjtJQUNGLEdBQUc7UUFBQ2pCO1FBQWFNO0tBQWM7SUFFL0IsTUFBTVcsd0JBQXdCLElBQVk7UUFDeEMsSUFBSWYsWUFBWTtZQUNkZ0IsY0FBY2hCO1lBQ2RDLGNBQWMsSUFBSTtRQUNwQixDQUFDO0lBQ0g7SUFFQSxNQUFNVSxpQkFBaUIsVUFBWTtRQUNqQyxJQUFJO1lBQ0YsTUFBTU0sU0FBUyxNQUFNQyxVQUFVQyxZQUFZLENBQUNDLFlBQVksQ0FBQztnQkFBRUMsT0FBTyxJQUFJO1lBQUM7WUFFdkUsTUFBTUMsV0FBVyxJQUFJQyxjQUFjTjtZQUNuQ1osaUJBQWlCaUI7WUFFakIsTUFBTUUsU0FBaUIsRUFBRTtZQUN6QkYsU0FBU0csZUFBZSxHQUFHLENBQUNDLElBQU07Z0JBQ2hDRixPQUFPRyxJQUFJLENBQUNELEVBQUVFLElBQUk7WUFDcEI7WUFFQU4sU0FBU08sTUFBTSxHQUFHLElBQU07Z0JBQ3RCLE1BQU12QixlQUFlLElBQUl3QixLQUFLTixRQUFRO29CQUFFTyxNQUFNO2dCQUFZO2dCQUMxRHhCLGdCQUFnQkQ7Z0JBQ2hCMEIsUUFBUUMsR0FBRyxDQUFDO2dCQUVaLFdBQVc7Z0JBQ1gsTUFBTUMsV0FBV0MsSUFBSUMsZUFBZSxDQUFDOUI7Z0JBQ3JDLElBQUlFLGdCQUFnQjZCLE9BQU8sRUFBRTtvQkFDM0I3QixnQkFBZ0I2QixPQUFPLENBQUNDLEdBQUcsR0FBR0o7Z0JBQ2hDLENBQUM7WUFDSDtZQUVBWixTQUFTaUIsT0FBTyxHQUFHLElBQU07Z0JBQ3ZCeEMsZUFBZSxLQUFLO1lBQ3RCO1lBRUF1QixTQUFTa0IsS0FBSztZQUNkekMsZUFBZSxJQUFJO1lBQ25CaUMsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsRUFBRSxPQUFPUSxPQUFPO1lBQ2RULFFBQVFTLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzdDO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0IsSUFBWTtRQUNoQyxJQUFJdEMsZUFBZTtZQUNqQkEsY0FBY3VDLElBQUk7WUFDbEI1QyxlQUFlLEtBQUs7WUFDcEJJLFFBQVE7UUFDVixDQUFDO1FBRURZO0lBQ0Y7SUFFQSxNQUFNNkIsZUFBZSxJQUFZO1FBQy9CLElBQUksQ0FBQ3RDLGNBQWM7UUFDbkJHLGdCQUFnQkgsY0FBY1QsYUFBYUs7SUFDN0M7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUMyQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFFRCxXQUFVOzs0QkFBZTswQ0FDcEIsOERBQUNFO2dDQUFLRixXQUFVOzBDQUFpQmpEOzs7Ozs7NEJBQW9COzs7Ozs7O29CQUc1REMsNEJBQ0MsOERBQUNILDZFQUFjQTt3QkFBQ08sTUFBTUE7d0JBQU13QyxlQUFlQTs7Ozs7NkNBRTNDOzswQ0FDRSw4REFBQ3JCO2dDQUFNNEIsS0FBS3pDO2dDQUFpQjBDLFFBQVE7Ozs7OzswQ0FFckMsOERBQUNMO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ3JELHNEQUFNQTt3Q0FDTDBELFNBQVN4Qzt3Q0FDVHlDLE9BQU07d0NBQ05OLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ3JELHNEQUFNQTt3Q0FBQzBELFNBQVNQO3dDQUFjRSxXQUFVO2tEQUFTOzs7Ozs7Ozs7Ozs7O29DQUt2RDs7Ozs7OzswQkFHSCw4REFBQ3RELDREQUFTQTtnQkFDUjZELG1CQUFtQixLQUFLO2dCQUN4QkMsTUFBSztnQkFDTEMsTUFBTTdDO2dCQUNOOEMsU0FBUyxJQUFNLENBQUM7O2tDQUVoQiw4REFBQ1g7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNXOzRCQUFHWCxXQUFVO3NDQUF5Qjs7Ozs7Ozs7Ozs7a0NBR3pDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3BELDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCLENBQUM7R0E1SXVCRTs7UUFhbUJMLHVEQUFTQTs7O0tBYjVCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4P2M1YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVXBsb2FkIH0gZnJvbSBcIkAvaG9va3MvdXNlVXBsb2FkXCI7XG5pbXBvcnQgeyBCYXNlTW9kYWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL0Jhc2VNb2RhbFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBSZWNvcmRpbmdQYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nUGFuZWxcIjtcblxudHlwZSBSZWNvcmRpbmdTZXNzaW9uVHlwZSA9IHtcbiAgc2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgaXNSZWNvcmRpbmc6IEJvb2xlYW47XG4gIHNldElzUmVjb3JkaW5nOiAodmFsOiBib29sZWFuKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3JkaW5nU2Vzc2lvbih7XG4gIHNlc3Npb25OYW1lLFxuICBpc1JlY29yZGluZyxcbiAgc2V0SXNSZWNvcmRpbmcsXG59OiBSZWNvcmRpbmdTZXNzaW9uVHlwZSkge1xuICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbbWVkaWFSZWNvcmRlciwgc2V0TWVkaWFSZWNvcmRlcl0gPSB1c2VTdGF0ZTxNZWRpYVJlY29yZGVyIHwgbnVsbD4oXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBbcmVjb3JkZWRCbG9iLCBzZXRSZWNvcmRlZEJsb2JdID0gdXNlU3RhdGU8QmxvYiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBhdWRpb0VsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHsgdXBsb2FkUmVjb3JkaW5nLCBpc1VwbG9hZGluZyB9ID0gdXNlVXBsb2FkKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBPbmx5IGNyZWF0ZS9jbGVhciB0aGUgdGltZXIgYmFzZWQgb24gYGlzUmVjb3JkaW5nYFxuICAgIGlmIChpc1JlY29yZGluZykge1xuICAgICAgLy8gRW5zdXJlIG1lZGlhUmVjb3JkZXIgaXMgaW5pdGlhbGl6ZWQgKGF2b2lkcyB1bm5lY2Vzc2FyeSBjaGVja3MpXG4gICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcbiAgICAgICAgc3RhcnRSZWNvcmRpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIGFscmVhZHkgcmVjb3JkaW5nLCBqdXN0IHN0YXJ0IHRoZSB0aW1lclxuICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBzZXRUaW1lKChwcmV2VGltZSkgPT4gcHJldlRpbWUgKyAxKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHNldEludGVydmFsSWQoaWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhckR1cmF0aW9uSW50ZXJ2YWwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJEdXJhdGlvbkludGVydmFsKCk7XG4gICAgfTtcbiAgfSwgW2lzUmVjb3JkaW5nLCBtZWRpYVJlY29yZGVyXSk7XG5cbiAgY29uc3QgY2xlYXJEdXJhdGlvbkludGVydmFsID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgc2V0SW50ZXJ2YWxJZChudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSk7XG5cbiAgICAgIGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbiAgICAgIHNldE1lZGlhUmVjb3JkZXIocmVjb3JkZXIpO1xuXG4gICAgICBjb25zdCBjaHVua3M6IEJsb2JbXSA9IFtdO1xuICAgICAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGUpID0+IHtcbiAgICAgICAgY2h1bmtzLnB1c2goZS5kYXRhKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVjb3JkZWRCbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICAgIHNldFJlY29yZGVkQmxvYihyZWNvcmRlZEJsb2IpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdG9wcGVkXCIpO1xuXG4gICAgICAgIC8vU2V0IGF1ZGlvXG4gICAgICAgIGNvbnN0IGF1ZGlvVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZWNvcmRlZEJsb2IpO1xuICAgICAgICBpZiAoYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBhdWRpb0VsZW1lbnRSZWYuY3VycmVudC5zcmMgPSBhdWRpb1VSTDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgIHNldElzUmVjb3JkaW5nKHRydWUpO1xuICAgICAgY29uc29sZS5sb2coXCJSZWNvcmQgc3RhcnRlZFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XG4gICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgIHNldFRpbWUoMCk7XG4gICAgfVxuXG4gICAgY2xlYXJEdXJhdGlvbkludGVydmFsKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICghcmVjb3JkZWRCbG9iKSByZXR1cm47XG4gICAgdXBsb2FkUmVjb3JkaW5nKHJlY29yZGVkQmxvYiwgc2Vzc2lvbk5hbWUsIHRpbWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTggdy1mdWxsIHNtOm1heC13LTJ4bFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBcIj5cbiAgICAgICAgICBOYW1lOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+e3Nlc3Npb25OYW1lfTwvc3Bhbj57XCIgXCJ9XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7aXNSZWNvcmRpbmcgPyAoXG4gICAgICAgICAgPFJlY29yZGluZ1BhbmVsIHRpbWU9e3RpbWV9IHN0b3BSZWNvcmRpbmc9e3N0b3BSZWNvcmRpbmd9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvRWxlbWVudFJlZn0gY29udHJvbHM+PC9hdWRpbz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHctZnVsbCBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRSZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVjb3JkIEFnYWluXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgVXBsb2FkIFJlY29yZGluZ1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxCYXNlTW9kYWxcbiAgICAgICAgc2hvd0Rpc21pc3NCdXR0b249e2ZhbHNlfVxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICBvcGVuPXtpc1VwbG9hZGluZ31cbiAgICAgICAgb25DbG9zZT17KCkgPT4ge319XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0xXCI+VXBsb2FkaW5nIHJlY29yZGluZzwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CYXNlTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVVwbG9hZCIsIkJhc2VNb2RhbCIsIkJ1dHRvbiIsIkxvYWRlciIsIlJlY29yZGluZ1BhbmVsIiwiUmVjb3JkaW5nU2Vzc2lvbiIsInNlc3Npb25OYW1lIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwidGltZSIsInNldFRpbWUiLCJtZWRpYVJlY29yZGVyIiwic2V0TWVkaWFSZWNvcmRlciIsInJlY29yZGVkQmxvYiIsInNldFJlY29yZGVkQmxvYiIsImF1ZGlvRWxlbWVudFJlZiIsInVwbG9hZFJlY29yZGluZyIsImlzVXBsb2FkaW5nIiwic3RhcnRSZWNvcmRpbmciLCJpZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckR1cmF0aW9uSW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJyZWNvcmRlciIsIk1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJvbmRhdGFhdmFpbGFibGUiLCJlIiwicHVzaCIsImRhdGEiLCJvbnN0b3AiLCJCbG9iIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJzcmMiLCJvbmVycm9yIiwic3RhcnQiLCJlcnJvciIsInN0b3BSZWNvcmRpbmciLCJzdG9wIiwiaGFuZGxlVXBsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJyZWYiLCJjb250cm9scyIsIm9uQ2xpY2siLCJjb2xvciIsInNob3dEaXNtaXNzQnV0dG9uIiwic2l6ZSIsIm9wZW4iLCJvbkNsb3NlIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});