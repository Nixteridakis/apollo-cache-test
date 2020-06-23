webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queries */ "./src/queries.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client */ "./src/client.js");
/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Welcome */ "./src/Welcome.js");
/* harmony import */ var _Myradio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Myradio */ "./src/Myradio.js");
/* harmony import */ var _Myresult_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Myresult.js */ "./src/Myresult.js");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserContext */ "./src/UserContext.js");
var _jsxFileName = "/Users/marinoschrysanthou/Desktop/nextjs-apollo-connect-test/src/App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const App = () => {
  const {
    0: store,
    1: setStore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('first');
  const {
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries__WEBPACK_IMPORTED_MODULE_4__["MAIN_QUERY"]);
  console.log(data);
  return __jsx(_UserContext__WEBPACK_IMPORTED_MODULE_9__["UserContext"].Provider, {
    value: [store, setStore],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("header", {
    className: "App-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, " Select an artist"), __jsx(_Myradio__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_Myresult_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.cc61fa16b9d42af7a5fe.hot-update.js.map