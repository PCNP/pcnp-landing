webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_123_bosscontrol_landing_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_global_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.sass */ "./src/styles/global.sass");
/* harmony import */ var _styles_global_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.tsx");
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Header/Header */ "./src/components/Header/Header.tsx");
/* harmony import */ var _components_ArrowToTop_ArrowToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ArrowToTop/ArrowToTop */ "./src/components/ArrowToTop/ArrowToTop.tsx");




var _jsxFileName = "C:\\Users\\123\\bosscontrol-landing\\src\\pages\\_app.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_123_bosscontrol_landing_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var App = function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useRouter = useRouter(),
      pathname = _useRouter.pathname;

  var lang = pathname.startsWith('/en') ? 'en' : 'ru';
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.documentElement.lang = lang;
  }, [lang]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "PCNP - \u0441\u0442\u0443\u0434\u0438\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0441\u0430\u0439\u0442\u043E\u0432"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
      nav: pageProps.nav,
      buttonText: pageProps.buttonText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
      nav: pageProps.nav
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ArrowToTop_ArrowToTop__WEBPACK_IMPORTED_MODULE_7__["ArrowToTop"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(App, "qzkUnVqW1BcXSCbIIFP8iqxzteQ=", true);

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwibGFuZyIsInN0YXJ0c1dpdGgiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIm5hdiIsImJ1dHRvblRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQXdDO0FBQUE7O0FBQUEsTUFBckNDLFNBQXFDLFFBQXJDQSxTQUFxQztBQUFBLE1BQTFCQyxTQUEwQixRQUExQkEsU0FBMEI7O0FBQUEsbUJBQ3BDQyxTQUFTLEVBRDJCO0FBQUEsTUFDakRDLFFBRGlELGNBQ2pEQSxRQURpRDs7QUFHekQsTUFBTUMsSUFBSSxHQUFHRCxRQUFRLENBQUNFLFVBQVQsQ0FBb0IsS0FBcEIsSUFBNkIsSUFBN0IsR0FBb0MsSUFBakQ7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsZUFBVCxDQUF5QkosSUFBekIsR0FBZ0NBLElBQWhDO0FBQ0QsR0FGUSxFQUVOLENBQUNBLElBQUQsQ0FGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsb0VBQUQ7QUFDRSxTQUFHLEVBQUVILFNBQVMsQ0FBQ1EsR0FEakI7QUFFRSxnQkFBVSxFQUFFUixTQUFTLENBQUNTO0FBRnhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQVFFLHFFQUFDLFNBQUQsb0JBQWVULFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBU0UscUVBQUMsZ0VBQUQ7QUFBUSxTQUFHLEVBQUVBLFNBQVMsQ0FBQ1E7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBVUUscUVBQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUEsa0JBREY7QUFjRCxDQXZCTTs7R0FBTVYsRzs7S0FBQUEsRztBQXlCRUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lYWM4NmUzZmU4YTMxNzc3YWMwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLnNhc3MnXHJcblxyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IHsgQXJyb3dUb1RvcCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXJyb3dUb1RvcC9BcnJvd1RvVG9wJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGxhbmcgPSBwYXRobmFtZS5zdGFydHNXaXRoKCcvZW4nKSA/ICdlbicgOiAncnUnXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxhbmdcclxuICB9LCBbbGFuZ10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UENOUCAtINGB0YLRg9C00LjRjyDRgNCw0LfRgNCw0LHQvtGC0LrQuCDRgdCw0LnRgtC+0LI8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBuYXY9e3BhZ2VQcm9wcy5uYXZ9XHJcbiAgICAgICAgYnV0dG9uVGV4dD17cGFnZVByb3BzLmJ1dHRvblRleHR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPEZvb3RlciBuYXY9e3BhZ2VQcm9wcy5uYXZ9IC8+XHJcbiAgICAgIDxBcnJvd1RvVG9wIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iXSwic291cmNlUm9vdCI6IiJ9