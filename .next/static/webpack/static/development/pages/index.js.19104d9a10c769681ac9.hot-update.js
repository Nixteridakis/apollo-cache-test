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
  return __jsx(_UserContext__WEBPACK_IMPORTED_MODULE_9__["UserContext"].Provider, {
    value: [store, setStore],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("header", {
    className: "App-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, " Select an artist"), __jsx(_Myradio__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_Myresult_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queries */ "./src/queries.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");






 //const link = new HttpLink({ uri : 'https://testing-hasura-me.herokuapp.com/v1/graphql'});

const link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__["createHttpLink"])({
  uri: 'https://glikaki.herokuapp.com/v1/graphql',
  fetch: node_fetch__WEBPACK_IMPORTED_MODULE_0___default.a
});
const resolvers = {};
const cache = new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]();
const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
  cache,
  link,
  resolvers
});
let cacheData = undefined;

try {
  cacheData = client.readQuery({
    query: _queries__WEBPACK_IMPORTED_MODULE_3__["MAIN_QUERY"]
  });
  console.log('found it!!!!!!!!!!');
} catch (error) {
  console.log("No client data yet");
  console.log(error);
  cacheData = {};
} // let changed = true
// <INSERT INITIALIZATION CODE HERE>
// if (changed) {
//     client.writeQuery({
//         query: mainQuery,
//         data: cacheData,
//     })
// }
// const { mydata } = client.readQuery({
//     query: gql`
//       query myQuery {
//         Artist {
//           Name
//           ArtistId
//         }
//         Album {
//           Title
//           AlbumId
//         }
//       }
//     `,
//   });


/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./src/queries.js":
/*!************************!*\
  !*** ./src/queries.js ***!
  \************************/
/*! exports provided: MAIN_QUERY, mainQueryCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_QUERY", function() { return MAIN_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainQueryCache", function() { return mainQueryCache; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["{\n  Artist @client {\n    Name\n    ArtistId\n  }\n  Album @client {\n    Title\n    AlbumId\n  }\n}\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["{\n    Artist(where: {ArtistId: {_eq: $_eq}}) {\n      Name\n      ArtistId\n    }\n}"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const MAIN_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject()); // const GET_DOG_PHOTO = gql`
//   query Dog($breed: String!) {
//     dog(breed: $breed) {
//       id
//       displayImage
//     }
//   }
// `;

const mainQueryCache = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());

/***/ })

})
//# sourceMappingURL=index.js.19104d9a10c769681ac9.hot-update.js.map