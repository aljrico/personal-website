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
	],
	"./handling-databases-r6.md": [
		"./content/handling-databases-r6.md",
		"content_handling-databases-r6_md"
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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _parsePosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsePosts */ \"./pages/posts/parsePosts.tsx\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/post.module.css */ \"./styles/post.module.css\");\n/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__]);\nreact_markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/alejandrojimenezrico/Code/personal-website/pages/posts/[slug].tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nfunction PostTemplate(props) {\n  // This holds the data between `---` from the .md file\n  const postData = props.data;\n  const postContent = props.content;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_5___default().post),\n          children: [' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n            children: postData.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_2__.default, {\n            children: postContent\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\nPostTemplate.getInitialProps = async context => {\n  const {\n    slug\n  } = context.query; // Import our .md file using the `slug` from the URL\n\n  const content = await __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.md$\")(`./${slug}.md`); // Parse .md data through `matter`\n\n  const data = (0,_parsePosts__WEBPACK_IMPORTED_MODULE_1__.default)(content.default); // Pass data to our component props\n\n  return _objectSpread({}, data);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTemplate);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU0ssWUFBVCxDQUFzQkMsS0FBdEIsRUFBa0M7QUFDaEM7QUFDQSxRQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsSUFBdkI7QUFDQSxRQUFNQyxXQUFXLEdBQUdILEtBQUssQ0FBQ0ksT0FBMUI7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFUCwwRUFBaEI7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUVBLHFFQUFqQjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUMscUVBQWhCO0FBQUEscUJBQ0csR0FESCxlQUVFO0FBQUEsc0JBQUtHLFFBQVEsQ0FBQ087QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0UsOERBQUMsbURBQUQ7QUFBQSxzQkFBZ0JMO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWFEOztBQUVESixZQUFZLENBQUNVLGVBQWIsR0FBK0IsTUFBT0MsT0FBUCxJQUF3QjtBQUNyRCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBV0QsT0FBTyxDQUFDRSxLQUF6QixDQURxRCxDQUdyRDs7QUFDQSxRQUFNUixPQUFPLEdBQUcsTUFBTSxnRUFBUSxLQUFnQk8sSUFBSyxLQUE3QixDQUF0QixDQUpxRCxDQU1yRDs7QUFDQSxRQUFNVCxJQUFJLEdBQUdQLG9EQUFVLENBQUNTLE9BQU8sQ0FBQ1MsT0FBVCxDQUF2QixDQVBxRCxDQVNyRDs7QUFDQSwyQkFBWVgsSUFBWjtBQUNELENBWEQ7O0FBYUEsaUVBQWVILFlBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9wYWdlcy9wb3N0cy9bc2x1Z10udHN4PzFhNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xuaW1wb3J0IHBhcnNlUG9zdHMgZnJvbSAnLi9wYXJzZVBvc3RzJztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCBnZW5lcmFsU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHBvc3RTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIFBvc3RUZW1wbGF0ZShwcm9wczogYW55KSB7XG4gIC8vIFRoaXMgaG9sZHMgdGhlIGRhdGEgYmV0d2VlbiBgLS0tYCBmcm9tIHRoZSAubWQgZmlsZVxuICBjb25zdCBwb3N0RGF0YSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IHBvc3RDb250ZW50ID0gcHJvcHMuY29udGVudDtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dlbmVyYWxTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtnZW5lcmFsU3R5bGVzLm1haW59PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3R9PlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIDxoMT57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duPntwb3N0Q29udGVudH08L1JlYWN0TWFya2Rvd24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5Qb3N0VGVtcGxhdGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IGNvbnRleHQucXVlcnk7XG5cbiAgLy8gSW1wb3J0IG91ciAubWQgZmlsZSB1c2luZyB0aGUgYHNsdWdgIGZyb20gdGhlIFVSTFxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9jb250ZW50LyR7c2x1Z30ubWRgKTtcblxuICAvLyBQYXJzZSAubWQgZGF0YSB0aHJvdWdoIGBtYXR0ZXJgXG4gIGNvbnN0IGRhdGEgPSBwYXJzZVBvc3RzKGNvbnRlbnQuZGVmYXVsdCk7XG5cbiAgLy8gUGFzcyBkYXRhIHRvIG91ciBjb21wb25lbnQgcHJvcHNcbiAgcmV0dXJuIHsgLi4uZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdFRlbXBsYXRlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwicGFyc2VQb3N0cyIsIlJlYWN0TWFya2Rvd24iLCJnZW5lcmFsU3R5bGVzIiwicG9zdFN0eWxlcyIsIlBvc3RUZW1wbGF0ZSIsInByb3BzIiwicG9zdERhdGEiLCJkYXRhIiwicG9zdENvbnRlbnQiLCJjb250ZW50IiwiY29udGFpbmVyIiwibWFpbiIsInBvc3QiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwicXVlcnkiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n");

/***/ }),

/***/ "./pages/posts/parsePosts.tsx":
/*!************************************!*\
  !*** ./pages/posts/parsePosts.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction parsePosts(content) {\n  // Parse .md data through `matter`\n  const data = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(content); // Pass data to our component props\n\n  return data;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parsePosts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9wYXJzZVBvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxPQUFwQixFQUFrQztBQUNoQztBQUNBLFFBQU1DLElBQUksR0FBR0gsa0RBQU0sQ0FBQ0UsT0FBRCxDQUFuQixDQUZnQyxDQUdoQzs7QUFDQSxTQUFPQyxJQUFQO0FBQ0Q7O0FBRUQsaUVBQWVGLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vcGFnZXMvcG9zdHMvcGFyc2VQb3N0cy50c3g/MjVkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcblxuZnVuY3Rpb24gcGFyc2VQb3N0cyhjb250ZW50OiBhbnkpIHtcbiAgLy8gUGFyc2UgLm1kIGRhdGEgdGhyb3VnaCBgbWF0dGVyYFxuICBjb25zdCBkYXRhID0gbWF0dGVyKGNvbnRlbnQpO1xuICAvLyBQYXNzIGRhdGEgdG8gb3VyIGNvbXBvbmVudCBwcm9wc1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VQb3N0cztcbiJdLCJuYW1lcyI6WyJtYXR0ZXIiLCJwYXJzZVBvc3RzIiwiY29udGVudCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/parsePosts.tsx\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"smallCard\": \"Home_smallCard__JOJCl\",\n\t\"bigCard\": \"Home_bigCard__2ErXi\",\n\t\"excerptCard\": \"Home_excerptCard__1avdC\",\n\t\"logo\": \"Home_logo__1YbrH\",\n\t\"circle\": \"Home_circle__2ooKX\",\n\t\"packageLogoContainer\": \"Home_packageLogoContainer__14vsz\",\n\t\"packageLogo\": \"Home_packageLogo__3_8E3\",\n\t\"apple\": \"Home_apple__2aQdE\",\n\t\"twitter\": \"Home_twitter__3gfpU\",\n\t\"github\": \"Home_github__3Y8AL\",\n\t\"facebook\": \"Home_facebook__yncLr\",\n\t\"animate\": \"Home_animate__24RIN\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz9lMGNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJzbWFsbENhcmRcIjogXCJIb21lX3NtYWxsQ2FyZF9fSk9KQ2xcIixcblx0XCJiaWdDYXJkXCI6IFwiSG9tZV9iaWdDYXJkX18yRXJYaVwiLFxuXHRcImV4Y2VycHRDYXJkXCI6IFwiSG9tZV9leGNlcnB0Q2FyZF9fMWF2ZENcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiLFxuXHRcImNpcmNsZVwiOiBcIkhvbWVfY2lyY2xlX18yb29LWFwiLFxuXHRcInBhY2thZ2VMb2dvQ29udGFpbmVyXCI6IFwiSG9tZV9wYWNrYWdlTG9nb0NvbnRhaW5lcl9fMTR2c3pcIixcblx0XCJwYWNrYWdlTG9nb1wiOiBcIkhvbWVfcGFja2FnZUxvZ29fXzNfOEUzXCIsXG5cdFwiYXBwbGVcIjogXCJIb21lX2FwcGxlX18yYVFkRVwiLFxuXHRcInR3aXR0ZXJcIjogXCJIb21lX3R3aXR0ZXJfXzNnZnBVXCIsXG5cdFwiZ2l0aHViXCI6IFwiSG9tZV9naXRodWJfXzNZOEFMXCIsXG5cdFwiZmFjZWJvb2tcIjogXCJIb21lX2ZhY2Vib29rX195bmNMclwiLFxuXHRcImFuaW1hdGVcIjogXCJIb21lX2FuaW1hdGVfXzI0UklOXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./styles/post.module.css":
/*!********************************!*\
  !*** ./styles/post.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"post\": \"post_post__1Lsln\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcG9zdC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3N0eWxlcy9wb3N0Lm1vZHVsZS5jc3M/NjcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0XCI6IFwicG9zdF9wb3N0X18xTHNsblwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/post.module.css\n");

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