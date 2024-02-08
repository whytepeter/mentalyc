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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordingSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BaseModal */ \"./src/components/BaseModal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader.tsx\");\n/* harmony import */ var _components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Recordings/RecordingPanel */ \"./src/components/Recordings/RecordingPanel.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction RecordingSession(param) {\n    let { sessionName , isRecording , setIsRecording  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [maxDuration, setMaxDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedBlob, setRecordedBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const audioElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRecording) {\n            startRecording();\n            // Start timer to track recording duration\n            let duration = 0;\n            const id = setInterval(()=>{\n                setRecordingDuration((prev)=>prev + 1);\n                duration++;\n                if (duration === maxDuration) {\n                    stopRecording();\n                    clearInterval(id);\n                }\n            }, 1000);\n            setIntervalId(id);\n            return ()=>{\n                clearInterval(id);\n            };\n        }\n    }, [\n        isRecording\n    ]);\n    const clearDurationInterval = ()=>{\n        if (intervalId) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    };\n    const startRecording = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                audio: true\n            });\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            const chunks = [];\n            recorder.ondataavailable = (e)=>{\n                chunks.push(e.data);\n            };\n            recorder.onstop = ()=>{\n                const recordedBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                setRecordedBlob(recordedBlob);\n                console.log(\"Recording stopped\");\n                //Set audio\n                const audioURL = URL.createObjectURL(recordedBlob);\n                if (audioElementRef.current) {\n                    audioElementRef.current.src = audioURL;\n                }\n            };\n            recorder.onerror = ()=>{\n                setIsRecording(false);\n            };\n            recorder.start();\n            setIsRecording(true);\n        } catch (error) {\n            console.error(\"Error starting recording:\", error);\n        }\n    };\n    const stopRecording = ()=>{\n        if (mediaRecorder) {\n            mediaRecorder.stop();\n            setIsRecording(false);\n            setRecordingDuration(0);\n        }\n        clearDurationInterval();\n    };\n    const uploadRecording = async ()=>{\n        if (!recordedBlob) return;\n        try {\n            setIsUploading(true);\n            const length = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.calculateLength)(recordedBlob) || \"N/A\";\n            const timestamp = new Date().toLocaleString();\n            const formData = new FormData();\n            formData.append(\"audio\", recordedBlob);\n            formData.append(\"name\", sessionName);\n            formData.append(\"length\", length);\n            formData.append(\"timestamp\", timestamp);\n            const headers = {\n                \"Content-Type\": \"multipart/form-data\"\n            };\n            const res = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"POST\", formData, headers);\n            if (!res.success) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(\"Failed to upload recording\");\n                return;\n            }\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success(res === null || res === void 0 ? void 0 : res.message);\n            router.replace(\"/dashboard\");\n        } catch (error) {\n            console.error(\"Error uploading recording:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(error === null || error === void 0 ? void 0 : error.message);\n        } finally{\n            setIsUploading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center gap-8 w-full sm:max-w-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>{\n                            setIsUploading(true);\n                        },\n                        className: \"text-[20px] \",\n                        children: [\n                            \"Name: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: sessionName\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 17\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, this),\n                    isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recordings_RecordingPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        duration: recordingDuration,\n                        maxDuration: maxDuration,\n                        stopRecording: stopRecording\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioElementRef,\n                                controls: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 166,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 w-full sm:grid-cols-2 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: startRecording,\n                                        color: \"default\",\n                                        className: \"w-full\",\n                                        children: \"Record Again\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 169,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: uploadRecording,\n                                        className: \"w-full\",\n                                        children: \"Upload Recording\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                        lineNumber: 176,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BaseModal__WEBPACK_IMPORTED_MODULE_2__.BaseModal, {\n                showDismissButton: false,\n                size: \"small\",\n                open: isUploading,\n                onClose: ()=>{\n                    setIsUploading(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            onClick: ()=>{\n                                setIsUploading(false);\n                            },\n                            className: \"font-bold text-xl mb-1\",\n                            children: \"Uploading recording\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 193,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 192,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                            lineNumber: 204,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                        lineNumber: 203,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/code/test/mentalyc/src/components/Recordings/RecordingSession.tsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RecordingSession, \"xroUjaJUNEAdidfIQswkzDDvSnA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = RecordingSession;\nvar _c;\n$RefreshReg$(_c, \"RecordingSession\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDUjtBQUVOO0FBQ0g7QUFDRDtBQUMyQjtBQUM1QjtBQUNUO0FBQ1M7QUFRekIsU0FBU1ksaUJBQWlCLEtBSWxCLEVBQUU7UUFKZ0IsRUFDdkNDLFlBQVcsRUFDWEMsWUFBVyxFQUNYQyxlQUFjLEVBQ08sR0FKa0I7O0lBS3ZDLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFVLEtBQUs7SUFDN0QsTUFBTSxDQUFDa0IsYUFBYUMsZUFBZSxHQUFHbkIsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDb0IsWUFBWUMsY0FBYyxHQUFHckIsK0NBQVFBLENBQXdCLElBQUk7SUFDeEUsTUFBTSxDQUFDc0IsbUJBQW1CQyxxQkFBcUIsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRTNELE1BQU0sQ0FBQ3dCLGVBQWVDLGlCQUFpQixHQUFHekIsK0NBQVFBLENBQ2hELElBQUk7SUFFTixNQUFNLENBQUMwQixjQUFjQyxnQkFBZ0IsR0FBRzNCLCtDQUFRQSxDQUFjLElBQUk7SUFDbEUsTUFBTTRCLGtCQUFrQjFCLDZDQUFNQSxDQUEwQixJQUFJO0lBRTVERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVksYUFBYTtZQUNmZ0I7WUFFQSwwQ0FBMEM7WUFDMUMsSUFBSUMsV0FBVztZQUNmLE1BQU1DLEtBQUtDLFlBQVksSUFBTTtnQkFDM0JULHFCQUFxQixDQUFDVSxPQUFTQSxPQUFPO2dCQUN0Q0g7Z0JBQ0EsSUFBSUEsYUFBYVosYUFBYTtvQkFDNUJnQjtvQkFDQUMsY0FBY0o7Z0JBQ2hCLENBQUM7WUFDSCxHQUFHO1lBQ0hWLGNBQWNVO1lBRWQsT0FBTyxJQUFNO2dCQUNYSSxjQUFjSjtZQUNoQjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNsQjtLQUFZO0lBRWhCLE1BQU11Qix3QkFBd0IsSUFBWTtRQUN4QyxJQUFJaEIsWUFBWTtZQUNkZSxjQUFjZjtZQUNkQyxjQUFjLElBQUk7UUFDcEIsQ0FBQztJQUNIO0lBRUEsTUFBTVEsaUJBQWlCLFVBQVk7UUFDakMsSUFBSTtZQUNGLE1BQU1RLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7Z0JBQUVDLE9BQU8sSUFBSTtZQUFDO1lBRXZFLE1BQU1DLFdBQVcsSUFBSUMsY0FBY047WUFDbkNaLGlCQUFpQmlCO1lBRWpCLE1BQU1FLFNBQWlCLEVBQUU7WUFDekJGLFNBQVNHLGVBQWUsR0FBRyxDQUFDQyxJQUFNO2dCQUNoQ0YsT0FBT0csSUFBSSxDQUFDRCxFQUFFRSxJQUFJO1lBQ3BCO1lBRUFOLFNBQVNPLE1BQU0sR0FBRyxJQUFNO2dCQUN0QixNQUFNdkIsZUFBZSxJQUFJd0IsS0FBS04sUUFBUTtvQkFBRU8sTUFBTTtnQkFBWTtnQkFDMUR4QixnQkFBZ0JEO2dCQUNoQjBCLFFBQVFDLEdBQUcsQ0FBQztnQkFFWixXQUFXO2dCQUNYLE1BQU1DLFdBQVdDLElBQUlDLGVBQWUsQ0FBQzlCO2dCQUNyQyxJQUFJRSxnQkFBZ0I2QixPQUFPLEVBQUU7b0JBQzNCN0IsZ0JBQWdCNkIsT0FBTyxDQUFDQyxHQUFHLEdBQUdKO2dCQUNoQyxDQUFDO1lBQ0g7WUFFQVosU0FBU2lCLE9BQU8sR0FBRyxJQUFNO2dCQUN2QjdDLGVBQWUsS0FBSztZQUN0QjtZQUVBNEIsU0FBU2tCLEtBQUs7WUFDZDlDLGVBQWUsSUFBSTtRQUNyQixFQUFFLE9BQU8rQyxPQUFPO1lBQ2RULFFBQVFTLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzdDO0lBQ0Y7SUFFQSxNQUFNM0IsZ0JBQWdCLElBQVk7UUFDaEMsSUFBSVYsZUFBZTtZQUNqQkEsY0FBY3NDLElBQUk7WUFFbEJoRCxlQUFlLEtBQUs7WUFDcEJTLHFCQUFxQjtRQUN2QixDQUFDO1FBRURhO0lBQ0Y7SUFFQSxNQUFNMkIsa0JBQWtCLFVBQVk7UUFDbEMsSUFBSSxDQUFDckMsY0FBYztRQUVuQixJQUFJO1lBQ0ZULGVBQWUsSUFBSTtZQUVuQixNQUFNK0MsU0FBUyxNQUFPM0QsdURBQWVBLENBQUNxQixpQkFBa0I7WUFDeEQsTUFBTXVDLFlBQVksSUFBSUMsT0FBT0MsY0FBYztZQUUzQyxNQUFNQyxXQUFXLElBQUlDO1lBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBUzVDO1lBQ3pCMEMsU0FBU0UsTUFBTSxDQUFDLFFBQVExRDtZQUN4QndELFNBQVNFLE1BQU0sQ0FBQyxVQUFVTjtZQUMxQkksU0FBU0UsTUFBTSxDQUFDLGFBQWFMO1lBRTdCLE1BQU1NLFVBQVU7Z0JBQ2QsZ0JBQWdCO1lBQ2xCO1lBQ0EsTUFBTUMsTUFBTSxNQUFNL0Qsc0RBQUlBLENBQWUsUUFBUTJELFVBQVVHO1lBRXZELElBQUksQ0FBQ0MsSUFBSUMsT0FBTyxFQUFFO2dCQUNoQmpFLHdEQUFXLENBQUM7Z0JBQ1o7WUFDRixDQUFDO1lBRURBLDBEQUFhLENBQUNnRSxnQkFBQUEsaUJBQUFBLEtBQUFBLElBQUFBLElBQUtFLE9BQU87WUFFMUIzRCxPQUFPNEQsT0FBTyxDQUFDO1FBQ2pCLEVBQUUsT0FBT2QsT0FBWTtZQUNuQlQsUUFBUVMsS0FBSyxDQUFDLDhCQUE4QkE7WUFDNUNyRCx3REFBVyxDQUFDcUQsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPYSxPQUFPO1FBQzVCLFNBQVU7WUFDUnpELGVBQWUsS0FBSztRQUN0QjtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDMkQ7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFDQ0MsU0FBUyxJQUFNOzRCQUNiOUQsZUFBZSxJQUFJO3dCQUNyQjt3QkFDQTRELFdBQVU7OzRCQUNYOzBDQUNPLDhEQUFDRztnQ0FBS0gsV0FBVTswQ0FBaUJqRTs7Ozs7OzRCQUFvQjs7Ozs7OztvQkFHNURDLDRCQUNDLDhEQUFDTiw2RUFBY0E7d0JBQ2J1QixVQUFVUjt3QkFDVkosYUFBYUE7d0JBQ2JnQixlQUFlQTs7Ozs7NkNBR2pCOzswQ0FDRSw4REFBQ087Z0NBQU13QyxLQUFLckQ7Z0NBQWlCc0QsUUFBUTs7Ozs7OzBDQUVyQyw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDekUsc0RBQU1BO3dDQUNMMkUsU0FBU2xEO3dDQUNUc0QsT0FBTTt3Q0FDTk4sV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDekUsc0RBQU1BO3dDQUFDMkUsU0FBU2hCO3dDQUFpQmMsV0FBVTtrREFBUzs7Ozs7Ozs7Ozs7OztvQ0FLMUQ7Ozs7Ozs7MEJBR0gsOERBQUMxRSw0REFBU0E7Z0JBQ1JpRixtQkFBbUIsS0FBSztnQkFDeEJDLE1BQUs7Z0JBQ0xDLE1BQU10RTtnQkFDTnVFLFNBQVMsSUFBTTtvQkFDYnRFLGVBQWUsS0FBSztnQkFDdEI7O2tDQUVBLDhEQUFDMkQ7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNXOzRCQUNDVCxTQUFTLElBQU07Z0NBQ2I5RCxlQUFlLEtBQUs7NEJBQ3RCOzRCQUNBNEQsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7a0NBS0gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDdkUsMERBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakIsQ0FBQztHQS9MdUJLOztRQUtQRCxrREFBU0E7OztLQUxGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdzL1JlY29yZGluZ1Nlc3Npb24udHN4P2M1YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFzZU1vZGFsIH0gZnJvbSBcIkAvY29tcG9uZW50cy9CYXNlTW9kYWxcIjtcbmltcG9ydCB7IFJlc3BvbnNlVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTGVuZ3RoIH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBSZWNvcmRpbmdQYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL1JlY29yZGluZ3MvUmVjb3JkaW5nUGFuZWxcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxudHlwZSBSZWNvcmRpbmdTZXNzaW9uVHlwZSA9IHtcbiAgc2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgaXNSZWNvcmRpbmc6IEJvb2xlYW47XG4gIHNldElzUmVjb3JkaW5nOiAodmFsOiBib29sZWFuKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3JkaW5nU2Vzc2lvbih7XG4gIHNlc3Npb25OYW1lLFxuICBpc1JlY29yZGluZyxcbiAgc2V0SXNSZWNvcmRpbmcsXG59OiBSZWNvcmRpbmdTZXNzaW9uVHlwZSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFttYXhEdXJhdGlvbiwgc2V0TWF4RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPig2MCk7XG4gIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtyZWNvcmRpbmdEdXJhdGlvbiwgc2V0UmVjb3JkaW5nRHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW21lZGlhUmVjb3JkZXIsIHNldE1lZGlhUmVjb3JkZXJdID0gdXNlU3RhdGU8TWVkaWFSZWNvcmRlciB8IG51bGw+KFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgW3JlY29yZGVkQmxvYiwgc2V0UmVjb3JkZWRCbG9iXSA9IHVzZVN0YXRlPEJsb2IgfCBudWxsPihudWxsKTtcbiAgY29uc3QgYXVkaW9FbGVtZW50UmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1JlY29yZGluZykge1xuICAgICAgc3RhcnRSZWNvcmRpbmcoKTtcblxuICAgICAgLy8gU3RhcnQgdGltZXIgdG8gdHJhY2sgcmVjb3JkaW5nIGR1cmF0aW9uXG4gICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldFJlY29yZGluZ0R1cmF0aW9uKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICAgIGR1cmF0aW9uKys7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gbWF4RHVyYXRpb24pIHtcbiAgICAgICAgICBzdG9wUmVjb3JkaW5nKCk7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgICAgc2V0SW50ZXJ2YWxJZChpZCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtpc1JlY29yZGluZ10pO1xuXG4gIGNvbnN0IGNsZWFyRHVyYXRpb25JbnRlcnZhbCA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoaW50ZXJ2YWxJZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIHNldEludGVydmFsSWQobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pO1xuXG4gICAgICBjb25zdCByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG4gICAgICBzZXRNZWRpYVJlY29yZGVyKHJlY29yZGVyKTtcblxuICAgICAgY29uc3QgY2h1bmtzOiBCbG9iW10gPSBbXTtcbiAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChlKSA9PiB7XG4gICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICB9O1xuXG4gICAgICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZGVkQmxvYiA9IG5ldyBCbG9iKGNodW5rcywgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pO1xuICAgICAgICBzZXRSZWNvcmRlZEJsb2IocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcblxuICAgICAgICAvL1NldCBhdWRpb1xuICAgICAgICBjb25zdCBhdWRpb1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVjb3JkZWRCbG9iKTtcbiAgICAgICAgaWYgKGF1ZGlvRWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgYXVkaW9FbGVtZW50UmVmLmN1cnJlbnQuc3JjID0gYXVkaW9VUkw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICBzZXRJc1JlY29yZGluZyh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XG4gICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcblxuICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgc2V0UmVjb3JkaW5nRHVyYXRpb24oMCk7XG4gICAgfVxuXG4gICAgY2xlYXJEdXJhdGlvbkludGVydmFsKCk7XG4gIH07XG5cbiAgY29uc3QgdXBsb2FkUmVjb3JkaW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghcmVjb3JkZWRCbG9iKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IGxlbmd0aCA9IChhd2FpdCBjYWxjdWxhdGVMZW5ndGgocmVjb3JkZWRCbG9iKSkgfHwgXCJOL0FcIjtcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImF1ZGlvXCIsIHJlY29yZGVkQmxvYik7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJuYW1lXCIsIHNlc3Npb25OYW1lKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImxlbmd0aFwiLCBsZW5ndGgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidGltZXN0YW1wXCIsIHRpbWVzdGFtcCk7XG5cbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHA8UmVzcG9uc2VUeXBlPihcIlBPU1RcIiwgZm9ybURhdGEsIGhlYWRlcnMpO1xuXG4gICAgICBpZiAoIXJlcy5zdWNjZXNzKSB7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHVwbG9hZCByZWNvcmRpbmdcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9hc3Quc3VjY2VzcyhyZXM/Lm1lc3NhZ2UpO1xuXG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwbG9hZGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yPy5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC04IHctZnVsbCBzbTptYXgtdy0yeGxcIj5cbiAgICAgICAgPHBcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIFwiXG4gICAgICAgID5cbiAgICAgICAgICBOYW1lOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+e3Nlc3Npb25OYW1lfTwvc3Bhbj57XCIgXCJ9XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7aXNSZWNvcmRpbmcgPyAoXG4gICAgICAgICAgPFJlY29yZGluZ1BhbmVsXG4gICAgICAgICAgICBkdXJhdGlvbj17cmVjb3JkaW5nRHVyYXRpb259XG4gICAgICAgICAgICBtYXhEdXJhdGlvbj17bWF4RHVyYXRpb259XG4gICAgICAgICAgICBzdG9wUmVjb3JkaW5nPXtzdG9wUmVjb3JkaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvRWxlbWVudFJlZn0gY29udHJvbHM+PC9hdWRpbz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHctZnVsbCBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRSZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVjb3JkIEFnYWluXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3VwbG9hZFJlY29yZGluZ30gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgVXBsb2FkIFJlY29yZGluZ1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxCYXNlTW9kYWxcbiAgICAgICAgc2hvd0Rpc21pc3NCdXR0b249e2ZhbHNlfVxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICBvcGVuPXtpc1VwbG9hZGluZ31cbiAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgzXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0xXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBVcGxvYWRpbmcgcmVjb3JkaW5nXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Jhc2VNb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQmFzZU1vZGFsIiwiQnV0dG9uIiwiY2FsY3VsYXRlTGVuZ3RoIiwiTG9hZGVyIiwiUmVjb3JkaW5nUGFuZWwiLCJ0b2FzdCIsImh0dHAiLCJ1c2VSb3V0ZXIiLCJSZWNvcmRpbmdTZXNzaW9uIiwic2Vzc2lvbk5hbWUiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwicm91dGVyIiwiaXNVcGxvYWRpbmciLCJzZXRJc1VwbG9hZGluZyIsIm1heER1cmF0aW9uIiwic2V0TWF4RHVyYXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsInJlY29yZGluZ0R1cmF0aW9uIiwic2V0UmVjb3JkaW5nRHVyYXRpb24iLCJtZWRpYVJlY29yZGVyIiwic2V0TWVkaWFSZWNvcmRlciIsInJlY29yZGVkQmxvYiIsInNldFJlY29yZGVkQmxvYiIsImF1ZGlvRWxlbWVudFJlZiIsInN0YXJ0UmVjb3JkaW5nIiwiZHVyYXRpb24iLCJpZCIsInNldEludGVydmFsIiwicHJldiIsInN0b3BSZWNvcmRpbmciLCJjbGVhckludGVydmFsIiwiY2xlYXJEdXJhdGlvbkludGVydmFsIiwic3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJyZWNvcmRlciIsIk1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJvbmRhdGFhdmFpbGFibGUiLCJlIiwicHVzaCIsImRhdGEiLCJvbnN0b3AiLCJCbG9iIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJzcmMiLCJvbmVycm9yIiwic3RhcnQiLCJlcnJvciIsInN0b3AiLCJ1cGxvYWRSZWNvcmRpbmciLCJsZW5ndGgiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaGVhZGVycyIsInJlcyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNsaWNrIiwic3BhbiIsInJlZiIsImNvbnRyb2xzIiwiY29sb3IiLCJzaG93RGlzbWlzc0J1dHRvbiIsInNpemUiLCJvcGVuIiwib25DbG9zZSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Recordings/RecordingSession.tsx\n"));

/***/ })

});