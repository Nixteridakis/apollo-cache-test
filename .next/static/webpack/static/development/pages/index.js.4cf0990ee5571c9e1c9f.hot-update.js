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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries__WEBPACK_IMPORTED_MODULE_4__["MAIN_QUERY"], {
    variables: {
      artistId: store
    }
  });

  const ReadmyQyery = () => {
    const myCache = _client__WEBPACK_IMPORTED_MODULE_5__["default"].readQuery({
      query: _queries__WEBPACK_IMPORTED_MODULE_4__["MAIN_QUERY"],
      variables: {
        artistId: store
      }
    });
    return myCache;
    console.log(myCache.Artist[0].Name);
  };

  return __jsx(_UserContext__WEBPACK_IMPORTED_MODULE_9__["UserContext"].Provider, {
    value: [store, setStore],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("header", {
    className: "App-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, " Select an artist"), __jsx(_Myradio__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(_Myresult_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    onClick: ReadmyQyery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Read Artist 1"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    onClick: ReadmyQyery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Read Artist 2"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    onClick: ReadmyQyery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Read Artist 3"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Cached:")));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.4cf0990ee5571c9e1c9f.hot-update.js.map