"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./pages/cart.tsx":
/*!************************!*\
  !*** ./pages/cart.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n\n\n\nfunction Home() {\n    const initCheckout = async ()=>{\n        const stripe = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__.loadStripe)(\"pk_test_51O8JXTSHpUsXBYYBtTyhTLCIudThMGKd5AUno56H4lHuhIUF8ks1t8iuhIB6vJQD80CkEGBIQav0YUlnSVGv9FId006DrxG95i\");\n        await fetch(\"http://localhost:8080/api/v1/stripe/checkout\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: initCheckout,\n            children: \"Checkout\"\n        }, void 0, false, {\n            fileName: \"/Users/vikramsinghdewda/Desktop/Craziness/Stripe/client/pages/cart.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVNQTtBQUR5QztBQUVoQyxTQUFTRTtJQUN0QixNQUFNQyxlQUFlO1FBQ25CLE1BQU1DLFNBQVMsTUFBTUgsNkRBQVVBLENBQUM7UUFFaEMsTUFBTUksTUFBTTtJQUNkO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQU9DLFNBQVNKO3NCQUFjOzs7Ozs7O0FBR3JDO0tBWHdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJ0LnRzeD9kNjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGluaXRDaGVja291dCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBsb2FkU3RyaXBlKFwicGtfdGVzdF81MU84SlhUU0hwVXNYQllZQnRUeWhUTENJdWRUaE1HS2Q1QVVubzU2SDRsSHVoSVVGOGtzMXQ4aXVoSUI2dkpRRDgwQ2tFR0JJUWF2MFlVbG5TVkd2OUZJZDAwNkRyeEc5NWlcIlxuICAgICk7XG4gICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL3N0cmlwZS9jaGVja291dFwiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbml0Q2hlY2tvdXR9PkNoZWNrb3V0PC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJsb2FkU3RyaXBlIiwiSG9tZSIsImluaXRDaGVja291dCIsInN0cmlwZSIsImZldGNoIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cart.tsx\n"));

/***/ })

});