webpackHotUpdate("static/development/pages/index.js",{

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
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query{\n    Artist {\n      Name\n      ArtistId\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

 // export const MAIN_QUERY = gql`{
//     Artist {
//       Name
//       ArtistId
//     }
// }`;

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
//# sourceMappingURL=index.js.ea62a925f764eb084ea5.hot-update.js.map