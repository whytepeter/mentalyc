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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingStatus, setRecordingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Idle\");\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                console.log(duration, maxDuration);\n                if (duration === maxDuration) {\n                    stopRecording();\n                    clearInterval(id);\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const clearDurationInterval = ()=>{\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    };\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n                setRecordingStatus(\"Recording Stopped\");\n            };\n            recorder.onerror = ()=>{\n                setRecordingStatus(\"Recording Error\");\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            setRecordingStatus(\"Recording Started\");\n            setMediaRecorder(recorder);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n            setRecordingStatus(\"Recording Error\");\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    const uploadRecording = async ()=>{\n        if (!recordedBlob) return;\n        try {\n            setLoading(true);\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob, \"recording.wav\");\n            formData.append(\"sessionName\", sessionName);\n            const response = await fetch(\"YOUR_UPLOAD_URL\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to upload recording\");\n            }\n            console.log(\"Recording uploaded successfully\");\n        // Handle success, if needed\n        } catch (error) {\n            console.error(\"Error uploading recording:\", error);\n        // Handle error, if needed\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] \",\n                    children: [\n                        \"Name: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-gray-400\",\n                            children: sessionName\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 17\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, this),\n                isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    duration: recordingDuration,\n                    maxDuration: maxDuration\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 11\n                }, this),\n                isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: stopRecording,\n                    className: \"p-2 rounded-full bg-gradient text-white h-20 w-20 flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 w-full h-full rounded-full border border-white flex items-center justify-center\",\n                        children: \"Stop\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                    lineNumber: 148,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                            ref: audioElementRef,\n                            controls: true\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: startRecording,\n                                    color: \"default\",\n                                    className: \"w-full\",\n                                    children: \"Record Again\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: uploadRecording,\n                                    className: \"w-full\",\n                                    children: \"Upload Recording\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                    lineNumber: 168,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n            lineNumber: 135,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RecordingSession, \"u58bNxttgH/me1/ciUagBqS60TA=\");\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUVkO0FBQ3VCO0FBUXJELFNBQVNNLGlCQUFpQixLQUlsQixFQUFFO1FBSmdCLEVBQ3ZDQyxZQUFXLEVBQ1hDLFlBQVcsRUFDWEMsZUFBYyxFQUNPLEdBSmtCOztJQUt2QyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FDaEQsSUFBSTtJQUVOLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3JELE1BQU0sQ0FBQ2EsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNlLGNBQWNDLGdCQUFnQixHQUFHaEIsK0NBQVFBLENBQWMsSUFBSTtJQUNsRSxNQUFNLENBQUNpQixtQkFBbUJDLHFCQUFxQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDbUIsWUFBWUMsY0FBYyxHQUFHcEIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDcUIsaUJBQWlCQyxtQkFBbUIsR0FBR3RCLCtDQUFRQSxDQUFTO0lBQy9ELE1BQU11QixrQkFBa0JyQiw2Q0FBTUEsQ0FBMEIsSUFBSTtJQUU1REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlNLGFBQWE7WUFDZmlCO1lBRUEsMENBQTBDO1lBQzFDLElBQUlDLFdBQVc7WUFDZixNQUFNQyxLQUFLQyxZQUFZLElBQU07Z0JBQzNCVCxxQkFBcUIsQ0FBQ1UsT0FBU0EsT0FBTztnQkFDdENIO2dCQUNBSSxRQUFRQyxHQUFHLENBQUNMLFVBQVVaO2dCQUN0QixJQUFJWSxhQUFhWixhQUFhO29CQUM1QmtCO29CQUNBQyxjQUFjTjtnQkFDaEIsQ0FBQztZQUNILEdBQUc7WUFDSE4sY0FBY007WUFFZCxPQUFPLElBQU07Z0JBQ1hNLGNBQWNOO1lBQ2hCO1FBQ0YsQ0FBQztJQUNI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QVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ2xFLHNEQUFNQTtvQ0FBQ3NFLFNBQVNmO29DQUFpQlcsV0FBVTs4Q0FBUzs7Ozs7Ozs7Ozs7OztnQ0FLMUQ7Ozs7Ozs7O0FBSVQsQ0FBQztHQXJLdUJoRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4P2M1YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVjb3JkaW5nIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgUmVjb3JkaW5nUGFuZWwgZnJvbSBcIkAvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1BhbmVsXCI7XG5cbnR5cGUgUmVjb3JkaW5nU2Vzc2lvblR5cGUgPSB7XG4gIHNlc3Npb25OYW1lOiBzdHJpbmc7XG4gIGlzUmVjb3JkaW5nOiBCb29sZWFuO1xuICBzZXRJc1JlY29yZGluZzogKHZhbDogYm9vbGVhbikgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29yZGluZ1Nlc3Npb24oe1xuICBzZXNzaW9uTmFtZSxcbiAgaXNSZWNvcmRpbmcsXG4gIHNldElzUmVjb3JkaW5nLFxufTogUmVjb3JkaW5nU2Vzc2lvblR5cGUpIHtcbiAgY29uc3QgW21lZGlhUmVjb3JkZXIsIHNldE1lZGlhUmVjb3JkZXJdID0gdXNlU3RhdGU8TWVkaWFSZWNvcmRlciB8IG51bGw+KFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbbWF4RHVyYXRpb24sIHNldE1heER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oNjApO1xuICBjb25zdCBbcmVjb3JkZWRCbG9iLCBzZXRSZWNvcmRlZEJsb2JdID0gdXNlU3RhdGU8QmxvYiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmVjb3JkaW5nRHVyYXRpb24sIHNldFJlY29yZGluZ0R1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmVjb3JkaW5nU3RhdHVzLCBzZXRSZWNvcmRpbmdTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPihcIklkbGVcIik7XG4gIGNvbnN0IGF1ZGlvRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNSZWNvcmRpbmcpIHtcbiAgICAgIHN0YXJ0UmVjb3JkaW5nKCk7XG5cbiAgICAgIC8vIFN0YXJ0IHRpbWVyIHRvIHRyYWNrIHJlY29yZGluZyBkdXJhdGlvblxuICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgICBkdXJhdGlvbisrO1xuICAgICAgICBjb25zb2xlLmxvZyhkdXJhdGlvbiwgbWF4RHVyYXRpb24pO1xuICAgICAgICBpZiAoZHVyYXRpb24gPT09IG1heER1cmF0aW9uKSB7XG4gICAgICAgICAgc3RvcFJlY29yZGluZygpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldEludGVydmFsSWQoaWQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbaXNSZWNvcmRpbmddKTtcblxuICBjb25zdCBjbGVhckR1cmF0aW9uSW50ZXJ2YWwgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKGludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICBzZXRJbnRlcnZhbElkKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbiAgICAgIGNvbnN0IGNodW5rczogQmxvYltdID0gW107XG5cbiAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChlKSA9PiB7XG4gICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZGVkQmxvYiA9IG5ldyBCbG9iKGNodW5rcywgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pO1xuICAgICAgICBzZXRSZWNvcmRlZEJsb2IocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcblxuICAgICAgICAvL1NldCBhdWRpb1xuICAgICAgICBjb25zdCBhdWRpb1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgaWYgKGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQuc3JjID0gYXVkaW9VUkw7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIFN0b3BwZWRcIik7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgRXJyb3JcIik7XG4gICAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICBzZXRJc1JlY29yZGluZyh0cnVlKTtcbiAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBTdGFydGVkXCIpO1xuICAgICAgc2V0TWVkaWFSZWNvcmRlcihyZWNvcmRlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBFcnJvclwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlcikge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbigwKTtcbiAgICB9XG5cbiAgICBjbGVhckR1cmF0aW9uSW50ZXJ2YWwoKTtcbiAgfTtcblxuICBjb25zdCB1cGxvYWRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFyZWNvcmRlZEJsb2IpIHJldHVybjtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdWRpb1wiLCByZWNvcmRlZEJsb2IsIFwicmVjb3JkaW5nLndhdlwiKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNlc3Npb25OYW1lXCIsIHNlc3Npb25OYW1lKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIllPVVJfVVBMT0FEX1VSTFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwbG9hZCByZWNvcmRpbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgIC8vIEhhbmRsZSBzdWNjZXNzLCBpZiBuZWVkZWRcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwbG9hZGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIC8vIEhhbmRsZSBlcnJvciwgaWYgbmVlZGVkXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC04IHctZnVsbCBzbTptYXgtdy0yeGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gXCI+XG4gICAgICAgICAgTmFtZTogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPntzZXNzaW9uTmFtZX08L3NwYW4+e1wiIFwifVxuICAgICAgICA8L3A+XG5cbiAgICAgICAge2lzUmVjb3JkaW5nICYmIChcbiAgICAgICAgICA8UmVjb3JkaW5nUGFuZWxcbiAgICAgICAgICAgIGR1cmF0aW9uPXtyZWNvcmRpbmdEdXJhdGlvbn1cbiAgICAgICAgICAgIG1heER1cmF0aW9uPXttYXhEdXJhdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtpc1JlY29yZGluZyA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtzdG9wUmVjb3JkaW5nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudCB0ZXh0LXdoaXRlIGgtMjAgdy0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsIGgtZnVsbCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICBTdG9wXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9FbGVtZW50UmVmfSBjb250cm9scz48L2F1ZGlvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgdy1mdWxsIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydFJlY29yZGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZWNvcmQgQWdhaW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dXBsb2FkUmVjb3JkaW5nfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICBVcGxvYWQgUmVjb3JkaW5nXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQnV0dG9uIiwiUmVjb3JkaW5nUGFuZWwiLCJSZWNvcmRpbmdTZXNzaW9uIiwic2Vzc2lvbk5hbWUiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwibWVkaWFSZWNvcmRlciIsInNldE1lZGlhUmVjb3JkZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm1heER1cmF0aW9uIiwic2V0TWF4RHVyYXRpb24iLCJyZWNvcmRlZEJsb2IiLCJzZXRSZWNvcmRlZEJsb2IiLCJyZWNvcmRpbmdEdXJhdGlvbiIsInNldFJlY29yZGluZ0R1cmF0aW9uIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJyZWNvcmRpbmdTdGF0dXMiLCJzZXRSZWNvcmRpbmdTdGF0dXMiLCJhdWRpb0VsZW1lbnRSZWYiLCJzdGFydFJlY29yZGluZyIsImR1cmF0aW9uIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjb25zb2xlIiwibG9nIiwic3RvcFJlY29yZGluZyIsImNsZWFySW50ZXJ2YWwiLCJjbGVhckR1cmF0aW9uSW50ZXJ2YWwiLCJzdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInJlY29yZGVyIiwiTWVkaWFSZWNvcmRlciIsImNodW5rcyIsIm9uZGF0YWF2YWlsYWJsZSIsImUiLCJwdXNoIiwiZGF0YSIsIm9uc3RvcCIsIkJsb2IiLCJ0eXBlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJyZW50Iiwic3JjIiwib25lcnJvciIsInN0YXJ0IiwiZXJyb3IiLCJzdG9wIiwidXBsb2FkUmVjb3JkaW5nIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJFcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsInJlZiIsImNvbnRyb2xzIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});