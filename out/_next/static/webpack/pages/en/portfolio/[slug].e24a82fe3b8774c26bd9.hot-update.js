webpackHotUpdate_N_E("pages/en/portfolio/[slug]",{

/***/ "./src/common/images/index/technology/next.svg":
false,

/***/ "./src/common/images/index/technology/redux.svg":
false,

/***/ "./src/common/images/portfolioPage/items/item_1/desktop.svg":
false,

/***/ "./src/common/images/portfolioPage/items/item_1/mob.svg":
false,

/***/ "./src/common/images/portfolioPage/items/item_1/slideImage.svg":
false,

/***/ "./src/pages/en/portfolio/[slug].tsx":
/*!*******************************************!*\
  !*** ./src/pages/en/portfolio/[slug].tsx ***!
  \*******************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_123_bosscontrol_landing_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ContactBlock_ContactBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ContactBlock/ContactBlock */ "./src/components/ContactBlock/ContactBlock.tsx");
/* harmony import */ var _App_ProjectPage_Block1_Block1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../App/ProjectPage/Block1/Block1 */ "./src/App/ProjectPage/Block1/Block1.tsx");
/* harmony import */ var _App_ProjectPage_InformationBlock_InformationBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../App/ProjectPage/InformationBlock/InformationBlock */ "./src/App/ProjectPage/InformationBlock/InformationBlock.tsx");
/* harmony import */ var _App_ProjectPage_CarouselBlock_CarouselBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../App/ProjectPage/CarouselBlock/CarouselBlock */ "./src/App/ProjectPage/CarouselBlock/CarouselBlock.tsx");




var _jsxFileName = "C:\\Users\\123\\bosscontrol-landing\\src\\pages\\en\\portfolio\\[slug].tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_123_bosscontrol_landing_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Project = function Project(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var project = props.items.filter(function (el) {
    return el.slug === router.query.slug;
  })[0];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App_ProjectPage_Block1_Block1__WEBPACK_IMPORTED_MODULE_5__["Block1"], _objectSpread({
      project: project
    }, props.block1), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App_ProjectPage_CarouselBlock_CarouselBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
      items: [1, 2, 3],
      active: 0,
      slideImages: project.slideImages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App_ProjectPage_InformationBlock_InformationBlock__WEBPACK_IMPORTED_MODULE_6__["InformationBlock"], _objectSpread({
      projects: props.items,
      project: project,
      length: props.items.length
    }, props.aboutBlock), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactBlock_ContactBlock__WEBPACK_IMPORTED_MODULE_4__["ContactBlock"], _objectSpread({}, props.contactBlock), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Project, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Project;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Project);

var _c;

$RefreshReg$(_c, "Project");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/portfolioItems.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VuL3BvcnRmb2xpby9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlByb2plY3QiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2plY3QiLCJpdGVtcyIsImZpbHRlciIsImVsIiwic2x1ZyIsInF1ZXJ5IiwiYmxvY2sxIiwic2xpZGVJbWFnZXMiLCJsZW5ndGgiLCJhYm91dEJsb2NrIiwiY29udGFjdEJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFHQTs7QUFHQSxJQUFNQSxPQUFpQixHQUFHLFNBQXBCQSxPQUFvQixDQUFDQyxLQUFELEVBQTJEO0FBQUE7O0FBQ25GLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxPQUFhLEdBQUdILEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxNQUFaLENBQW1CLFVBQUNDLEVBQUQ7QUFBQSxXQUFZQSxFQUFFLENBQUNDLElBQUgsS0FBWU4sTUFBTSxDQUFDTyxLQUFQLENBQWFELElBQXJDO0FBQUEsR0FBbkIsRUFBOEQsQ0FBOUQsQ0FBdEI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHFFQUFEO0FBQ0UsYUFBTyxFQUFFSjtBQURYLE9BRU1ILEtBQUssQ0FBQ1MsTUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSxxRUFBQyxvRkFBRDtBQUNFLFdBQUssRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQURUO0FBRUUsWUFBTSxFQUFFLENBRlY7QUFHRSxpQkFBVyxFQUFJTixPQUFPLENBQUNPO0FBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQVVFLHFFQUFDLG1HQUFEO0FBQ0UsY0FBUSxFQUFFVixLQUFLLENBQUNJLEtBRGxCO0FBRUUsYUFBTyxFQUFFRCxPQUZYO0FBR0UsWUFBTSxFQUFFSCxLQUFLLENBQUNJLEtBQU4sQ0FBWU87QUFIdEIsT0FJTVgsS0FBSyxDQUFDWSxVQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixlQWdCRSxxRUFBQyxrRkFBRCxvQkFBa0JaLEtBQUssQ0FBQ2EsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRjtBQUFBLGtCQURGO0FBb0JELENBeEJEOztHQUFNZCxPO1VBQ1dHLHFEOzs7S0FEWEgsTzs7QUE2Q1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuL3BvcnRmb2xpby9bc2x1Z10uZTI0YTgyZmUzYjg3NzRjMjZiZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gJ25leHQnXHJcblxyXG5cclxuaW1wb3J0IHsgQ29udGFjdEJsb2NrIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Db250YWN0QmxvY2svQ29udGFjdEJsb2NrJ1xyXG5pbXBvcnQgeyBCbG9jazEgfSBmcm9tICcuLi8uLi8uLi9BcHAvUHJvamVjdFBhZ2UvQmxvY2sxL0Jsb2NrMSdcclxuaW1wb3J0IHsgaXRlbSwgaXRlbXMgfSBmcm9tICdzcmMvc3RvcmUvcG9ydGZvbGlvSXRlbXMnXHJcbmltcG9ydCB7IEluZm9ybWF0aW9uQmxvY2sgfSBmcm9tICcuLi8uLi8uLi9BcHAvUHJvamVjdFBhZ2UvSW5mb3JtYXRpb25CbG9jay9JbmZvcm1hdGlvbkJsb2NrJ1xyXG5pbXBvcnQgeyBlbkRpY3Rpb25hcnkgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5nL2RpY3Rpb25hcnknXHJcbmltcG9ydCB7IGNyZWF0ZVNsdWdQb3J0Zm9saW9Qcm9wcyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmcvc2x1Z1BvcnRmb2xpb0xhbmcnXHJcbmltcG9ydCBDYXJvdXNlbEJsb2NrIGZyb20gJy4uLy4uLy4uL0FwcC9Qcm9qZWN0UGFnZS9DYXJvdXNlbEJsb2NrL0Nhcm91c2VsQmxvY2snXHJcblxyXG5cclxuY29uc3QgUHJvamVjdDogUmVhY3QuRkMgPSAocHJvcHM6IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHByb2plY3Q6IGl0ZW0gPSBwcm9wcy5pdGVtcy5maWx0ZXIoKGVsOiBpdGVtKT0+ZWwuc2x1ZyA9PT0gcm91dGVyLnF1ZXJ5LnNsdWcpWzBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QmxvY2sxXHJcbiAgICAgICAgcHJvamVjdD17cHJvamVjdH1cclxuICAgICAgICB7Li4ucHJvcHMuYmxvY2sxfVxyXG4gICAgICAvPlxyXG4gICAgICA8Q2Fyb3VzZWxCbG9ja1xyXG4gICAgICAgIGl0ZW1zPXtbMSwyLDNdfVxyXG4gICAgICAgIGFjdGl2ZT17MH1cclxuICAgICAgICBzbGlkZUltYWdlcyA9IHtwcm9qZWN0LnNsaWRlSW1hZ2VzfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW5mb3JtYXRpb25CbG9ja1xyXG4gICAgICAgIHByb2plY3RzPXtwcm9wcy5pdGVtc31cclxuICAgICAgICBwcm9qZWN0PXtwcm9qZWN0fVxyXG4gICAgICAgIGxlbmd0aD17cHJvcHMuaXRlbXMubGVuZ3RofVxyXG4gICAgICAgIHsuLi5wcm9wcy5hYm91dEJsb2NrfVxyXG4gICAgICAvPlxyXG4gICAgICA8Q29udGFjdEJsb2NrIHsuLi5wcm9wcy5jb250YWN0QmxvY2t9IC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYXRocyA9IGl0ZW1zLm1hcCgoZWwpPT57XHJcbiAgICByZXR1cm4geyBwYXJhbXM6IHsgc2x1ZzogZWwuc2x1ZyB9IH1cclxuICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAuLi5jcmVhdGVTbHVnUG9ydGZvbGlvUHJvcHMoZW5EaWN0aW9uYXJ5KSwgaXRlbXMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=