webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Myradio.js":
/*!************************!*\
  !*** ./src/Myradio.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserContext */ "./src/UserContext.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
var _jsxFileName = "/Users/marinoschrysanthou/Desktop/nextjs-apollo-connect-test/src/Myradio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  rootz: {
    color: '#ffffff'
  }
}));

const Myradio = () => {
  const classes = useStyles();
  const {
    0: store,
    1: setStore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const artist = 'first' ? data[0] : undefined; // const [value, setValue] = useState('female');
  // const handleChange = (event) => {
  //   setStore(event.target.value)
  //   console.log(event.target.value)
  // };

  return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "fieldset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    default: "female",
    "aria-label": "gender",
    name: "gender1",
    value: store,
    onChange: () => setStore(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "first",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }),
    label: "First",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "second",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }),
    label: "Second",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "third",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }),
    label: "Third",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, artist));
};

/* harmony default export */ __webpack_exports__["default"] = (Myradio);

/***/ })

})
//# sourceMappingURL=index.js.7baa901880b3290ac9d0.hot-update.js.map