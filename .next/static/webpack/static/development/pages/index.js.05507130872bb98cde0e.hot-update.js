webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Myresult.js":
/*!*************************!*\
  !*** ./src/Myresult.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserContext */ "./src/UserContext.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/Users/marinoschrysanthou/Desktop/nextjs-apollo-connect-test/src/Myresult.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    color: '#ffffff'
  }
}));

const Myresult = ({
  data
}) => {
  const {
    0: store
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const classes = useStyles();

  const artist = data => {
    return 'this';
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Artist is ", artist, " "));
};

/* harmony default export */ __webpack_exports__["default"] = (Myresult);

/***/ })

})
//# sourceMappingURL=index.js.05507130872bb98cde0e.hot-update.js.map