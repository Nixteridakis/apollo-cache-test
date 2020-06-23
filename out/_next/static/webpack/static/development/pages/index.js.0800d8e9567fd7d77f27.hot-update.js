webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Index.js":
/*!**********************!*\
  !*** ./src/Index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/marinoschrysanthou/Desktop/nextjs-apollo-connect-test/src/Index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const cache = new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]();
const link = new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
  uri: 'https://testing-hasura-me.herokuapp.com/v1/graphql'
});
const resolvers = {};
const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
  cache,
  link,
  resolvers
});
console.log(client);
function Index() {
  return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
} // If you want your app to work offline and load faster, you can change                                                                                                                  
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/***/ })

})
//# sourceMappingURL=index.js.0800d8e9567fd7d77f27.hot-update.js.map