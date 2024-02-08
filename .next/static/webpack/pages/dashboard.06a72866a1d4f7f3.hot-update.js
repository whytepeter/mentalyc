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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useUpload */ \"./src/hooks/useUpload.ts\");\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { uploadRecording , isUploading  } = (0,_hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__.useUpload)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            const id = setInterval(()=>{\n                setTime((prevTime)=>prevTime + 1);\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const clearDurationInterval = ()=>{\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    };\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n            };\n            recorder.onerror = ()=>{\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n        }\n        clearDurationInterval();\n    };\n    const handleUpload = ()=>{\n        if (!recordedBlob) return;\n        uploadRecording(recordedBlob, sessionName);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[20px] \",\n                        children: [\n                            \"Name: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: sessionName\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        time: time,\n                        stopRecording: stopRecording\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioElementRef,\n                                controls: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        onClick: startRecording,\n                                        color: \"default\",\n                                        className: \"w-full\",\n                                        children: \"Record Again\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        onClick: handleUpload,\n                                        className: \"w-full\",\n                                        children: \"Upload Recording\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_3__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: isUploading,\n                onClose: ()=>{},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-bold text-xl mb-1\",\n                            children: \"Uploading recording\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingSession, \"Ip0WLL1tc7viSnrJ0c6kr2JUQcM=\", false, function() {\n    return [\n        _hooks_useUpload__WEBPACK_IMPORTED_MODULE_2__.useUpload\n    ];\n});\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNiO0FBQ0s7QUFDTjtBQUNKO0FBQzJCO0FBUXJELFNBQVNTLGlCQUFpQixLQUlsQixFQUFFO1FBSmdCLEVBQ3ZDQyxZQUFXLEVBQ1hDLFlBQVcsRUFDWEMsZUFBYyxFQUNPLEdBSmtCOztJQUt2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ2dCLGVBQWVDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQ2hELElBQUk7SUFFTixNQUFNLENBQUNrQixjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFjLElBQUk7SUFDbEUsTUFBTW9CLGtCQUFrQmxCLDZDQUFNQSxDQUEwQixJQUFJO0lBRTVELE1BQU0sRUFBRW1CLGdCQUFlLEVBQUVDLFlBQVcsRUFBRSxHQUFHbkIsMkRBQVNBO0lBRWxERixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVMsYUFBYTtZQUNmYTtZQUVBLDBDQUEwQztZQUMxQyxNQUFNQyxLQUFLQyxZQUFZLElBQU07Z0JBQzNCVixRQUFRLENBQUNXLFdBQWFBLFdBQVc7WUFDbkMsR0FBRztZQUNIYixjQUFjVztZQUNkLE9BQU8sSUFBTTtnQkFDWEcsY0FBY0g7WUFDaEI7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDZDtLQUFZO0lBRWhCLE1BQU1rQix3QkFBd0IsSUFBWTtRQUN4QyxJQUFJaEIsWUFBWTtZQUNkZSxjQUFjZjtZQUNkQyxjQUFjLElBQUk7UUFDcEIsQ0FBQztJQUNIO0lBRUEsTUFBTVUsaUJBQWlCLFVBQVk7UUFDakMsSUFBSTtZQUNGLE1BQU1NLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7Z0JBQUVDLE9BQU8sSUFBSTtZQUFDO1lBRXZFLE1BQU1DLFdBQVcsSUFBSUMsY0FBY047WUFDbkNaLGlCQUFpQmlCO1lBRWpCLE1BQU1FLFNBQWlCLEVBQUU7WUFDekJGLFNBQVNHLGVBQWUsR0FBRyxDQUFDQyxJQUFNO2dCQUNoQ0YsT0FBT0csSUFBSSxDQUFDRCxFQUFFRSxJQUFJO1lBQ3BCO1lBRUFOLFNBQVNPLE1BQU0sR0FBRyxJQUFNO2dCQUN0QixNQUFNdkIsZUFBZSxJQUFJd0IsS0FBS04sUUFBUTtvQkFBRU8sTUFBTTtnQkFBWTtnQkFDMUR4QixnQkFBZ0JEO2dCQUNoQjBCLFFBQVFDLEdBQUcsQ0FBQztnQkFFWixXQUFXO2dCQUNYLE1BQU1DLFdBQVdDLElBQUlDLGVBQWUsQ0FBQzlCO2dCQUNyQyxJQUFJRSxnQkFBZ0I2QixPQUFPLEVBQUU7b0JBQzNCN0IsZ0JBQWdCNkIsT0FBTyxDQUFDQyxHQUFHLEdBQUdKO2dCQUNoQyxDQUFDO1lBQ0g7WUFFQVosU0FBU2lCLE9BQU8sR0FBRyxJQUFNO2dCQUN2QnhDLGVBQWUsS0FBSztZQUN0QjtZQUVBdUIsU0FBU2tCLEtBQUs7WUFDZHpDLGVBQWUsSUFBSTtRQUNyQixFQUFFLE9BQU8wQyxPQUFPO1lBQ2RULFFBQVFTLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzdDO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0IsSUFBWTtRQUNoQyxJQUFJdEMsZUFBZTtZQUNqQkEsY0FBY3VDLElBQUk7WUFFbEI1QyxlQUFlLEtBQUs7UUFDdEIsQ0FBQztRQUVEaUI7SUFDRjtJQUVBLE1BQU00QixlQUFlLElBQVk7UUFDL0IsSUFBSSxDQUFDdEMsY0FBYztRQUNuQkcsZ0JBQWdCSCxjQUFjVDtJQUNoQztJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2dEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUVELFdBQVU7OzRCQUFlOzBDQUNwQiw4REFBQ0U7Z0NBQUtGLFdBQVU7MENBQWlCakQ7Ozs7Ozs0QkFBb0I7Ozs7Ozs7b0JBRzVEQyw0QkFDQyw4REFBQ0gsNkVBQWNBO3dCQUFDTyxNQUFNQTt3QkFBTXdDLGVBQWVBOzs7Ozs2Q0FFM0M7OzBDQUNFLDhEQUFDckI7Z0NBQU00QixLQUFLekM7Z0NBQWlCMEMsUUFBUTs7Ozs7OzBDQUVyQyw4REFBQ0w7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDckQsc0RBQU1BO3dDQUNMMEQsU0FBU3hDO3dDQUNUeUMsT0FBTTt3Q0FDTk4sV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDckQsc0RBQU1BO3dDQUFDMEQsU0FBU1A7d0NBQWNFLFdBQVU7a0RBQVM7Ozs7Ozs7Ozs7Ozs7b0NBS3ZEOzs7Ozs7OzBCQUdILDhEQUFDdEQsNERBQVNBO2dCQUNSNkQsbUJBQW1CLEtBQUs7Z0JBQ3hCQyxNQUFLO2dCQUNMQyxNQUFNN0M7Z0JBQ044QyxTQUFTLElBQU0sQ0FBQzs7a0NBRWhCLDhEQUFDWDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1c7NEJBQUdYLFdBQVU7c0NBQXlCOzs7Ozs7Ozs7OztrQ0FHekMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDcEQsMERBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakIsQ0FBQztHQXBJdUJFOztRQWFtQkwsdURBQVNBOzs7S0FiNUJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nU2Vzc2lvbi50c3g/YzVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VVcGxvYWQgfSBmcm9tIFwiQC9ob29rcy91c2VVcGxvYWRcIjtcbmltcG9ydCB7IEJhc2VNb2RhbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQmFzZU1vZGFsXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IFJlY29yZGluZ1BhbmVsIGZyb20gXCJAL2NvbXBvbmVudHMvUmVjb3JkaW5ncy9SZWNvcmRpbmdQYW5lbFwiO1xuXG50eXBlIFJlY29yZGluZ1Nlc3Npb25UeXBlID0ge1xuICBzZXNzaW9uTmFtZTogc3RyaW5nO1xuICBpc1JlY29yZGluZzogQm9vbGVhbjtcbiAgc2V0SXNSZWNvcmRpbmc6ICh2YWw6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRpbmdTZXNzaW9uKHtcbiAgc2Vzc2lvbk5hbWUsXG4gIGlzUmVjb3JkaW5nLFxuICBzZXRJc1JlY29yZGluZyxcbn06IFJlY29yZGluZ1Nlc3Npb25UeXBlKSB7XG4gIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFttZWRpYVJlY29yZGVyLCBzZXRNZWRpYVJlY29yZGVyXSA9IHVzZVN0YXRlPE1lZGlhUmVjb3JkZXIgfCBudWxsPihcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IFtyZWNvcmRlZEJsb2IsIHNldFJlY29yZGVkQmxvYl0gPSB1c2VTdGF0ZTxCbG9iIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGF1ZGlvRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgeyB1cGxvYWRSZWNvcmRpbmcsIGlzVXBsb2FkaW5nIH0gPSB1c2VVcGxvYWQoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1JlY29yZGluZykge1xuICAgICAgc3RhcnRSZWNvcmRpbmcoKTtcblxuICAgICAgLy8gU3RhcnQgdGltZXIgdG8gdHJhY2sgcmVjb3JkaW5nIGR1cmF0aW9uXG4gICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0VGltZSgocHJldlRpbWUpID0+IHByZXZUaW1lICsgMSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldEludGVydmFsSWQoaWQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2lzUmVjb3JkaW5nXSk7XG5cbiAgY29uc3QgY2xlYXJEdXJhdGlvbkludGVydmFsID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgc2V0SW50ZXJ2YWxJZChudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSk7XG5cbiAgICAgIGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbiAgICAgIHNldE1lZGlhUmVjb3JkZXIocmVjb3JkZXIpO1xuXG4gICAgICBjb25zdCBjaHVua3M6IEJsb2JbXSA9IFtdO1xuICAgICAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGUpID0+IHtcbiAgICAgICAgY2h1bmtzLnB1c2goZS5kYXRhKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVjb3JkZWRCbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICAgIHNldFJlY29yZGVkQmxvYihyZWNvcmRlZEJsb2IpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdG9wcGVkXCIpO1xuXG4gICAgICAgIC8vU2V0IGF1ZGlvXG4gICAgICAgIGNvbnN0IGF1ZGlvVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZWNvcmRlZEJsb2IpO1xuICAgICAgICBpZiAoYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBhdWRpb0VsZW1lbnRSZWYuY3VycmVudC5zcmMgPSBhdWRpb1VSTDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgIHNldElzUmVjb3JkaW5nKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKG1lZGlhUmVjb3JkZXIpIHtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuXG4gICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgY2xlYXJEdXJhdGlvbkludGVydmFsKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICghcmVjb3JkZWRCbG9iKSByZXR1cm47XG4gICAgdXBsb2FkUmVjb3JkaW5nKHJlY29yZGVkQmxvYiwgc2Vzc2lvbk5hbWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTggdy1mdWxsIHNtOm1heC13LTJ4bFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBcIj5cbiAgICAgICAgICBOYW1lOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+e3Nlc3Npb25OYW1lfTwvc3Bhbj57XCIgXCJ9XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7aXNSZWNvcmRpbmcgPyAoXG4gICAgICAgICAgPFJlY29yZGluZ1BhbmVsIHRpbWU9e3RpbWV9IHN0b3BSZWNvcmRpbmc9e3N0b3BSZWNvcmRpbmd9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvRWxlbWVudFJlZn0gY29udHJvbHM+PC9hdWRpbz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHctZnVsbCBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRSZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVjb3JkIEFnYWluXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgVXBsb2FkIFJlY29yZGluZ1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxCYXNlTW9kYWxcbiAgICAgICAgc2hvd0Rpc21pc3NCdXR0b249e2ZhbHNlfVxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICBvcGVuPXtpc1VwbG9hZGluZ31cbiAgICAgICAgb25DbG9zZT17KCkgPT4ge319XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0xXCI+VXBsb2FkaW5nIHJlY29yZGluZzwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CYXNlTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVVwbG9hZCIsIkJhc2VNb2RhbCIsIkJ1dHRvbiIsIkxvYWRlciIsIlJlY29yZGluZ1BhbmVsIiwiUmVjb3JkaW5nU2Vzc2lvbiIsInNlc3Npb25OYW1lIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwidGltZSIsInNldFRpbWUiLCJtZWRpYVJlY29yZGVyIiwic2V0TWVkaWFSZWNvcmRlciIsInJlY29yZGVkQmxvYiIsInNldFJlY29yZGVkQmxvYiIsImF1ZGlvRWxlbWVudFJlZiIsInVwbG9hZFJlY29yZGluZyIsImlzVXBsb2FkaW5nIiwic3RhcnRSZWNvcmRpbmciLCJpZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiY2xlYXJEdXJhdGlvbkludGVydmFsIiwic3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJyZWNvcmRlciIsIk1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJvbmRhdGFhdmFpbGFibGUiLCJlIiwicHVzaCIsImRhdGEiLCJvbnN0b3AiLCJCbG9iIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJzcmMiLCJvbmVycm9yIiwic3RhcnQiLCJlcnJvciIsInN0b3BSZWNvcmRpbmciLCJzdG9wIiwiaGFuZGxlVXBsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJyZWYiLCJjb250cm9scyIsIm9uQ2xpY2siLCJjb2xvciIsInNob3dEaXNtaXNzQnV0dG9uIiwic2l6ZSIsIm9wZW4iLCJvbkNsb3NlIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});