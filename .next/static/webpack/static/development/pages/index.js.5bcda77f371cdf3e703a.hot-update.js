webpackHotUpdate("static/development/pages/index.js",{

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
let cacheData = '';

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

/***/ })

})
//# sourceMappingURL=index.js.5bcda77f371cdf3e703a.hot-update.js.map