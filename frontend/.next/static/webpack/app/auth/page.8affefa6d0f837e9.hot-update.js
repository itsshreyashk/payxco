"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/page",{

/***/ "(app-pages-browser)/./app/auth/page.tsx":
/*!***************************!*\
  !*** ./app/auth/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Auth = ()=>{\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"signin\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.body.style.backgroundColor = \"white\";\n        return ()=>{};\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center p-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-none flex w-[max-content] rounded-xl border\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-0 px-4 py-2 text-sm active:opacity-70 \".concat(auth === \"signup\" ? \"outline-blue-600 outline\" : \"\"),\n                            onClick: ()=>{\n                                setAuth(\"signup\");\n                            },\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-0 px-4 py-2 text-sm active:opacity-70 \".concat(auth === \"signin\" ? \"outline-blue-600 outline\" : \"\"),\n                            onClick: ()=>{\n                                setAuth(\"signin\");\n                            },\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center p-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[90vw] min-w-[max-content] max-w-[300px] rounded-xl border text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-1 px-4 py-2\",\n                        children: [\n                            auth === \"signin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Username\",\n                                        className: \"w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 182\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        placeholder: \"Password\",\n                                        className: \"w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"pt-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            className: \"w-full rounded-xl bg-blue-600 px-4 py-2 text-sm text-white active:bg-blue-800\",\n                                            children: \"Sign In\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true),\n                            auth === \"signup\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Create username\",\n                                        className: \"w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 189\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        placeholder: \"Create password\",\n                                        className: \"w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 193\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        placeholder: \"Create password\",\n                                        className: \"w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"pt-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            className: \"w-full rounded-xl bg-blue-600 px-4 py-2 text-sm text-white active:bg-blue-800\",\n                                            children: \"Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\payxco\\\\frontend\\\\app\\\\auth\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Auth, \"w9KEeS7sedurlaMID/Dbc3LvbHY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hdXRoL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEQ7QUFDZDtBQUU1QyxNQUFNSSxPQUFPOztJQUNULE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNSyxTQUFTSiwwREFBU0E7SUFDeEJGLGdEQUFTQSxDQUFDO1FBQ05PLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxlQUFlLEdBQUc7UUFDdEMsT0FBTyxLQUNQO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0k7OzBCQUNJLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDQzs0QkFBT0QsV0FBVyxnREFBb0csT0FBcERSLFNBQVMsV0FBVyw2QkFBNkI7NEJBQU1VLFNBQVM7Z0NBQVFULFFBQVE7NEJBQVU7c0NBQUc7Ozs7OztzQ0FDaEssOERBQUNROzRCQUFPRCxXQUFXLGdEQUFvRyxPQUFwRFIsU0FBUyxXQUFXLDZCQUE2Qjs0QkFBTVUsU0FBUztnQ0FBUVQsUUFBUTs0QkFBVTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3hLLDhEQUFDTTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNEO3dCQUFJQyxXQUFVOzs0QkFHUFIsU0FBUywwQkFFTDs7a0RBQ0ksOERBQUNXO3dDQUFNQyxNQUFLO3dDQUFPQyxhQUFZO3dDQUFXTCxXQUFVOzs7Ozs7a0RBQTZGLDhEQUFDTTs7Ozs7a0RBQ2xKLDhEQUFDSDt3Q0FBTUMsTUFBSzt3Q0FBV0MsYUFBWTt3Q0FBV0wsV0FBVTs7Ozs7O2tEQUN4RCw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ1gsNEVBQUNDOzRDQUFPRyxNQUFLOzRDQUFTSixXQUFVO3NEQUFnRjs7Ozs7Ozs7Ozs7Ozs0QkFNNUhSLFNBQVMsMEJBQ0w7O2tEQUNJLDhEQUFDVzt3Q0FBTUMsTUFBSzt3Q0FBT0MsYUFBWTt3Q0FBa0JMLFdBQVU7Ozs7OztrREFBNkYsOERBQUNNOzs7OztrREFDekosOERBQUNIO3dDQUFNQyxNQUFLO3dDQUFXQyxhQUFZO3dDQUFrQkwsV0FBVTs7Ozs7O2tEQUE2Riw4REFBQ007Ozs7O2tEQUM3Siw4REFBQ0g7d0NBQU1DLE1BQUs7d0NBQVdDLGFBQVk7d0NBQWtCTCxXQUFVOzs7Ozs7a0RBRS9ELDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDWCw0RUFBQ0M7NENBQU9HLE1BQUs7NENBQVNKLFdBQVU7c0RBQWdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3hKO0dBcERNVDs7UUFFYUQsc0RBQVNBOzs7S0FGdEJDO0FBc0ROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hdXRoL3BhZ2UudHN4PzE0ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmNvbnN0IEF1dGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSgnc2lnbmluJyk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LW5vbmUgZmxleCB3LVttYXgtY29udGVudF0gcm91bmRlZC14bCBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJvcmRlci0wIHB4LTQgcHktMiB0ZXh0LXNtIGFjdGl2ZTpvcGFjaXR5LTcwICR7YXV0aCA9PT0gJ3NpZ251cCcgPyAnb3V0bGluZS1ibHVlLTYwMCBvdXRsaW5lJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHsgc2V0QXV0aCgnc2lnbnVwJykgfX0+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYm9yZGVyLTAgcHgtNCBweS0yIHRleHQtc20gYWN0aXZlOm9wYWNpdHktNzAgJHthdXRoID09PSAnc2lnbmluJyA/ICdvdXRsaW5lLWJsdWUtNjAwIG91dGxpbmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4geyBzZXRBdXRoKCdzaWduaW4nKSB9fT5TaWduIEluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBwLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTB2d10gbWluLXctW21heC1jb250ZW50XSBtYXgtdy1bMzAwcHhdIHJvdW5kZWQteGwgYm9yZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBGb3IgTG9naW4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGggPT09ICdzaWduaW4nICYmIChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBweC00IHB5LTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgb3V0bGluZS00IGZvY3VzOm91dGxpbmUtYmx1ZS02MDBcIiAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBweC00IHB5LTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgb3V0bGluZS00IGZvY3VzOm91dGxpbmUtYmx1ZS02MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsIGJnLWJsdWUtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgYWN0aXZlOmJnLWJsdWUtODAwXCI+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoID09PSAnc2lnbnVwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDcmVhdGUgdXNlcm5hbWVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgcHgtNCBweS0yIHRleHQtc20gb3V0bGluZS1ub25lIG91dGxpbmUtNCBmb2N1czpvdXRsaW5lLWJsdWUtNjAwXCIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIHBhc3N3b3JkXCIgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIHB4LTQgcHktMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSBvdXRsaW5lLTQgZm9jdXM6b3V0bGluZS1ibHVlLTYwMFwiIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBwYXNzd29yZFwiIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBweC00IHB5LTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgb3V0bGluZS00IGZvY3VzOm91dGxpbmUtYmx1ZS02MDBcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBiZy1ibHVlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1ibHVlLTgwMFwiPlNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGgiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkF1dGgiLCJhdXRoIiwic2V0QXV0aCIsInJvdXRlciIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/auth/page.tsx\n"));

/***/ })

});