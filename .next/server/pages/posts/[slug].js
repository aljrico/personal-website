/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./content lazy recursive ^\\.\\/.*\\.md$":
/*!*****************************************************!*\
  !*** ./content/ lazy ^\.\/.*\.md$ namespace object ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./awesome-nextjs-blog.md": [
		"./content/awesome-nextjs-blog.md",
		"content_awesome-nextjs-blog_md"
	],
	"./first_post.md": [
		"./content/first_post.md",
		"content_first_post_md"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./content lazy recursive ^\\.\\/.*\\.md$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/posts/[slug].tsx":
/*!********************************!*\
  !*** ./pages/posts/[slug].tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _parsePosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsePosts */ \"./pages/posts/parsePosts.tsx\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__]);\nreact_markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/alejandrojimenezrico/Code/personal-website/pages/posts/[slug].tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction PostTemplate(props) {\n  // This holds the data between `---` from the .md file\n  const postData = props.data;\n  const postContent = props.content;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: postData.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: postContent\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\nPostTemplate.getInitialProps = async context => {\n  const {\n    slug\n  } = context.query; // Import our .md file using the `slug` from the URL\n\n  const content = await __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.md$\")(`./${slug}.md`); // Parse .md data through `matter`\n\n  const data = (0,_parsePosts__WEBPACK_IMPORTED_MODULE_1__.default)(content.default); // Pass data to our component props\n\n  return _objectSpread({}, data);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTemplate);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7OztBQUVBLFNBQVNHLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQWtDO0FBQ2hDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLElBQXZCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHSCxLQUFLLENBQUNJLE9BQTFCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdCQUFLSCxRQUFRLENBQUNJO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBQSxnQkFBZ0JGO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBTUQ7O0FBRURKLFlBQVksQ0FBQ08sZUFBYixHQUErQixNQUFPQyxPQUFQLElBQXdCO0FBQ3JELFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFXRCxPQUFPLENBQUNFLEtBQXpCLENBRHFELENBR3JEOztBQUNBLFFBQU1MLE9BQU8sR0FBRyxNQUFNLGdFQUFRLEtBQWdCSSxJQUFLLEtBQTdCLENBQXRCLENBSnFELENBTXJEOztBQUNBLFFBQU1OLElBQUksR0FBR0wsb0RBQVUsQ0FBQ08sT0FBTyxDQUFDTSxPQUFULENBQXZCLENBUHFELENBU3JEOztBQUNBLDJCQUFZUixJQUFaO0FBQ0QsQ0FYRDs7QUFhQSxpRUFBZUgsWUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3g/MWE1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5pbXBvcnQgcGFyc2VQb3N0cyBmcm9tICcuL3BhcnNlUG9zdHMnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuXG5mdW5jdGlvbiBQb3N0VGVtcGxhdGUocHJvcHM6IGFueSkge1xuICAvLyBUaGlzIGhvbGRzIHRoZSBkYXRhIGJldHdlZW4gYC0tLWAgZnJvbSB0aGUgLm1kIGZpbGVcbiAgY29uc3QgcG9zdERhdGEgPSBwcm9wcy5kYXRhO1xuICBjb25zdCBwb3N0Q29udGVudCA9IHByb3BzLmNvbnRlbnQ7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgIDxSZWFjdE1hcmtkb3duPntwb3N0Q29udGVudH08L1JlYWN0TWFya2Rvd24+XG4gICAgPC8+XG4gICk7XG59XG5cblBvc3RUZW1wbGF0ZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dDogYW55KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5xdWVyeTtcblxuICAvLyBJbXBvcnQgb3VyIC5tZCBmaWxlIHVzaW5nIHRoZSBgc2x1Z2AgZnJvbSB0aGUgVVJMXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBpbXBvcnQoYC4uLy4uL2NvbnRlbnQvJHtzbHVnfS5tZGApO1xuXG4gIC8vIFBhcnNlIC5tZCBkYXRhIHRocm91Z2ggYG1hdHRlcmBcbiAgY29uc3QgZGF0YSA9IHBhcnNlUG9zdHMoY29udGVudC5kZWZhdWx0KTtcblxuICAvLyBQYXNzIGRhdGEgdG8gb3VyIGNvbXBvbmVudCBwcm9wc1xuICByZXR1cm4geyAuLi5kYXRhIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0VGVtcGxhdGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwYXJzZVBvc3RzIiwiUmVhY3RNYXJrZG93biIsIlBvc3RUZW1wbGF0ZSIsInByb3BzIiwicG9zdERhdGEiLCJkYXRhIiwicG9zdENvbnRlbnQiLCJjb250ZW50IiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsInF1ZXJ5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n");

/***/ }),

/***/ "./pages/posts/parsePosts.tsx":
/*!************************************!*\
  !*** ./pages/posts/parsePosts.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction parsePosts(content) {\n  // Parse .md data through `matter`\n  const data = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(content); // Pass data to our component props\n\n  return data;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parsePosts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9wYXJzZVBvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxPQUFwQixFQUFrQztBQUNoQztBQUNBLFFBQU1DLElBQUksR0FBR0gsa0RBQU0sQ0FBQ0UsT0FBRCxDQUFuQixDQUZnQyxDQUdoQzs7QUFDQSxTQUFPQyxJQUFQO0FBQ0Q7O0FBRUQsaUVBQWVGLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vcGFnZXMvcG9zdHMvcGFyc2VQb3N0cy50c3g/MjVkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcblxuZnVuY3Rpb24gcGFyc2VQb3N0cyhjb250ZW50OiBhbnkpIHtcbiAgLy8gUGFyc2UgLm1kIGRhdGEgdGhyb3VnaCBgbWF0dGVyYFxuICBjb25zdCBkYXRhID0gbWF0dGVyKGNvbnRlbnQpO1xuICAvLyBQYXNzIGRhdGEgdG8gb3VyIGNvbXBvbmVudCBwcm9wc1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VQb3N0cztcbiJdLCJuYW1lcyI6WyJtYXR0ZXIiLCJwYXJzZVBvc3RzIiwiY29udGVudCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/parsePosts.tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();