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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingStatus, setRecordingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Idle\");\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                console.log(duration, maxDuration);\n                if (duration === maxDuration) {\n                    stopRecording();\n                    clearInterval(id);\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    function clearDurationInterval() {\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    }\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n                setRecordingStatus(\"Recording Stopped\");\n            };\n            recorder.onerror = ()=>{\n                setRecordingStatus(\"Recording Error\");\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n            setRecordingStatus(\"Recording Started\");\n            setMediaRecorder(recorder);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n            setRecordingStatus(\"Recording Error\");\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    const uploadRecording = async ()=>{\n        if (!recordedBlob) return;\n        try {\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob, \"recording.wav\");\n            formData.append(\"sessionName\", sessionName);\n            const response = await fetch(\"YOUR_UPLOAD_URL\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to upload recording\");\n            }\n            console.log(\"Recording uploaded successfully\");\n        // Handle success, if needed\n        } catch (error) {\n            console.error(\"Error uploading recording:\", error);\n        // Handle error, if needed\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] \",\n                    children: [\n                        \"Name: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-gray-400\",\n                            children: sessionName\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 135,\n                            columnNumber: 17\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 9\n                }, this),\n                isRecording && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    duration: recordingDuration,\n                    maxDuration: maxDuration\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 11\n                }, this),\n                isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: stopRecording,\n                    className: \"p-2 rounded-full bg-gradient text-white h-20 w-20 flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 w-full h-full rounded-full border border-white flex items-center justify-center\",\n                        children: \"Stop\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                    lineNumber: 146,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                            ref: audioElementRef,\n                            controls: true\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: startRecording,\n                                    color: \"default\",\n                                    className: \"w-full\",\n                                    children: \"Record Again\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: uploadRecording,\n                                    className: \"w-full\",\n                                    children: \"Upload Recording\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                    lineNumber: 166,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n            lineNumber: 133,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RecordingSession, \"zORa7n9uhwn3fLupXSi5YfAM3SY=\");\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUVkO0FBQ3VCO0FBUXJELFNBQVNNLGlCQUFpQixLQUlsQixFQUFFO1FBSmdCLEVBQ3ZDQyxZQUFXLEVBQ1hDLFlBQVcsRUFDWEMsZUFBYyxFQUNPLEdBSmtCOztJQUt2QyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FDaEQsSUFBSTtJQUdOLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBYyxJQUFJO0lBQ2xFLE1BQU0sQ0FBQ2UsbUJBQW1CQyxxQkFBcUIsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ2lCLFlBQVlDLGNBQWMsR0FBR2xCLCtDQUFRQSxDQUF3QixJQUFJO0lBQ3hFLE1BQU0sQ0FBQ21CLGlCQUFpQkMsbUJBQW1CLEdBQUdwQiwrQ0FBUUEsQ0FBUztJQUMvRCxNQUFNcUIsa0JBQWtCbkIsNkNBQU1BLENBQTBCLElBQUk7SUFFNUQsRUFBRTtJQUNGRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSU0sYUFBYTtZQUNmZTtZQUVBLDBDQUEwQztZQUMxQyxJQUFJQyxXQUFXO1lBQ2YsTUFBTUMsS0FBS0MsWUFBWSxJQUFNO2dCQUMzQlQscUJBQXFCLENBQUNVLE9BQVNBLE9BQU87Z0JBQ3RDSDtnQkFDQUksUUFBUUMsR0FBRyxDQUFDTCxVQUFVWjtnQkFDdEIsSUFBSVksYUFBYVosYUFBYTtvQkFDNUJrQjtvQkFDQUMsY0FBY047Z0JBQ2hCLENBQUM7WUFDSCxHQUFHO1lBQ0hOLGNBQWNNO1lBRWQsT0FBTyxJQUFNO2dCQUNYTSxjQUFjTjtZQUNoQjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNqQjtLQUFZO0lBRWhCLFNBQVN3Qix3QkFBd0I7UUFDL0Is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QUFJVCxDQUFDO0dBbkt1QjlEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nU2Vzc2lvbi50c3g/YzVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWNvcmRpbmcgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBSZWNvcmRpbmdQYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nUGFuZWxcIjtcblxudHlwZSBSZWNvcmRpbmdTZXNzaW9uVHlwZSA9IHtcbiAgc2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgaXNSZWNvcmRpbmc6IEJvb2xlYW47XG4gIHNldElzUmVjb3JkaW5nOiAodmFsOiBib29sZWFuKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3JkaW5nU2Vzc2lvbih7XG4gIHNlc3Npb25OYW1lLFxuICBpc1JlY29yZGluZyxcbiAgc2V0SXNSZWNvcmRpbmcsXG59OiBSZWNvcmRpbmdTZXNzaW9uVHlwZSkge1xuICBjb25zdCBbbWVkaWFSZWNvcmRlciwgc2V0TWVkaWFSZWNvcmRlcl0gPSB1c2VTdGF0ZTxNZWRpYVJlY29yZGVyIHwgbnVsbD4oXG4gICAgbnVsbFxuICApO1xuXG4gIGNvbnN0IFttYXhEdXJhdGlvbiwgc2V0TWF4RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPig2MCk7XG4gIGNvbnN0IFtyZWNvcmRlZEJsb2IsIHNldFJlY29yZGVkQmxvYl0gPSB1c2VTdGF0ZTxCbG9iIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtyZWNvcmRpbmdEdXJhdGlvbiwgc2V0UmVjb3JkaW5nRHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtyZWNvcmRpbmdTdGF0dXMsIHNldFJlY29yZGluZ1N0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiSWRsZVwiKTtcbiAgY29uc3QgYXVkaW9FbGVtZW50UmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICAvL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1JlY29yZGluZykge1xuICAgICAgc3RhcnRSZWNvcmRpbmcoKTtcblxuICAgICAgLy8gU3RhcnQgdGltZXIgdG8gdHJhY2sgcmVjb3JkaW5nIGR1cmF0aW9uXG4gICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldFJlY29yZGluZ0R1cmF0aW9uKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICAgIGR1cmF0aW9uKys7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1cmF0aW9uLCBtYXhEdXJhdGlvbik7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gbWF4RHVyYXRpb24pIHtcbiAgICAgICAgICBzdG9wUmVjb3JkaW5nKCk7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgICAgc2V0SW50ZXJ2YWxJZChpZCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtpc1JlY29yZGluZ10pO1xuXG4gIGZ1bmN0aW9uIGNsZWFyRHVyYXRpb25JbnRlcnZhbCgpIHtcbiAgICBpZiAoaW50ZXJ2YWxJZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIHNldEludGVydmFsSWQobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RhcnRSZWNvcmRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSk7XG4gICAgICBjb25zdCByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG4gICAgICBjb25zdCBjaHVua3M6IEJsb2JbXSA9IFtdO1xuXG4gICAgICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZSkgPT4ge1xuICAgICAgICBjaHVua3MucHVzaChlLmRhdGEpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZWNvcmRlZEJsb2IgPSBuZXcgQmxvYihjaHVua3MsIHsgdHlwZTogXCJhdWRpby93YXZcIiB9KTtcbiAgICAgICAgc2V0UmVjb3JkZWRCbG9iKHJlY29yZGVkQmxvYik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0b3BwZWRcIik7XG5cbiAgICAgICAgLy9TZXQgYXVkaW9cbiAgICAgICAgY29uc3QgYXVkaW9VUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlY29yZGVkQmxvYik7XG4gICAgICAgIGlmIChhdWRpb0VsZW1lbnRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50LnNyYyA9IGF1ZGlvVVJMO1xuICAgICAgICB9XG4gICAgICAgIHNldFJlY29yZGluZ1N0YXR1cyhcIlJlY29yZGluZyBTdG9wcGVkXCIpO1xuICAgICAgfTtcblxuICAgICAgcmVjb3JkZXIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgc2V0UmVjb3JkaW5nU3RhdHVzKFwiUmVjb3JkaW5nIEVycm9yXCIpO1xuICAgICAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5zdGFydCgpO1xuICAgICAgc2V0SXNSZWNvcmRpbmcodHJ1ZSk7XG4gICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgU3RhcnRlZFwiKTtcbiAgICAgIHNldE1lZGlhUmVjb3JkZXIocmVjb3JkZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgICBzZXRSZWNvcmRpbmdTdGF0dXMoXCJSZWNvcmRpbmcgRXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKG1lZGlhUmVjb3JkZXIpIHtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgc2V0UmVjb3JkaW5nRHVyYXRpb24oMCk7XG4gICAgfVxuXG4gICAgY2xlYXJEdXJhdGlvbkludGVydmFsKCk7XG4gIH07XG5cbiAgY29uc3QgdXBsb2FkUmVjb3JkaW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghcmVjb3JkZWRCbG9iKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdWRpb1wiLCByZWNvcmRlZEJsb2IsIFwicmVjb3JkaW5nLndhdlwiKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNlc3Npb25OYW1lXCIsIHNlc3Npb25OYW1lKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIllPVVJfVVBMT0FEX1VSTFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwbG9hZCByZWNvcmRpbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgIC8vIEhhbmRsZSBzdWNjZXNzLCBpZiBuZWVkZWRcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwbG9hZGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIC8vIEhhbmRsZSBlcnJvciwgaWYgbmVlZGVkXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTggdy1mdWxsIHNtOm1heC13LTJ4bFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBcIj5cbiAgICAgICAgICBOYW1lOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+e3Nlc3Npb25OYW1lfTwvc3Bhbj57XCIgXCJ9XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7aXNSZWNvcmRpbmcgJiYgKFxuICAgICAgICAgIDxSZWNvcmRpbmdQYW5lbFxuICAgICAgICAgICAgZHVyYXRpb249e3JlY29yZGluZ0R1cmF0aW9ufVxuICAgICAgICAgICAgbWF4RHVyYXRpb249e21heER1cmF0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge2lzUmVjb3JkaW5nID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N0b3BSZWNvcmRpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1mdWxsIGJnLWdyYWRpZW50IHRleHQtd2hpdGUgaC0yMCB3LTIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIFN0b3BcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YXVkaW8gcmVmPXthdWRpb0VsZW1lbnRSZWZ9IGNvbnRyb2xzPjwvYXVkaW8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSB3LWZ1bGwgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0UmVjb3JkaW5nfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlY29yZCBBZ2FpblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt1cGxvYWRSZWNvcmRpbmd9IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgIFVwbG9hZCBSZWNvcmRpbmdcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCdXR0b24iLCJSZWNvcmRpbmdQYW5lbCIsIlJlY29yZGluZ1Nlc3Npb24iLCJzZXNzaW9uTmFtZSIsImlzUmVjb3JkaW5nIiwic2V0SXNSZWNvcmRpbmciLCJtZWRpYVJlY29yZGVyIiwic2V0TWVkaWFSZWNvcmRlciIsIm1heER1cmF0aW9uIiwic2V0TWF4RHVyYXRpb24iLCJyZWNvcmRlZEJsb2IiLCJzZXRSZWNvcmRlZEJsb2IiLCJyZWNvcmRpbmdEdXJhdGlvbiIsInNldFJlY29yZGluZ0R1cmF0aW9uIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJyZWNvcmRpbmdTdGF0dXMiLCJzZXRSZWNvcmRpbmdTdGF0dXMiLCJhdWRpb0VsZW1lbnRSZWYiLCJzdGFydFJlY29yZGluZyIsImR1cmF0aW9uIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjb25zb2xlIiwibG9nIiwic3RvcFJlY29yZGluZyIsImNsZWFySW50ZXJ2YWwiLCJjbGVhckR1cmF0aW9uSW50ZXJ2YWwiLCJzdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInJlY29yZGVyIiwiTWVkaWFSZWNvcmRlciIsImNodW5rcyIsIm9uZGF0YWF2YWlsYWJsZSIsImUiLCJwdXNoIiwiZGF0YSIsIm9uc3RvcCIsIkJsb2IiLCJ0eXBlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJyZW50Iiwic3JjIiwib25lcnJvciIsInN0YXJ0IiwiZXJyb3IiLCJzdG9wIiwidXBsb2FkUmVjb3JkaW5nIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJFcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsInJlZiIsImNvbnRyb2xzIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});